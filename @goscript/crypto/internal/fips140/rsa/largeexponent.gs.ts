// Generated file based on largeexponent.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as constanttime from "@goscript/crypto/internal/constanttime/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as bigmod from "@goscript/crypto/internal/fips140/bigmod/index.js"

import * as drbg from "@goscript/crypto/internal/fips140/drbg/index.js"

import * as subtle from "@goscript/crypto/internal/fips140/subtle/index.js"

import * as errors from "@goscript/errors/index.js"

import * as hash2 from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_cast from "./cast.gs.ts"

import * as __goscript_pkcs1v15 from "./pkcs1v15.gs.ts"

import * as __goscript_pkcs1v22 from "./pkcs1v22.gs.ts"

import * as __goscript_rsa from "./rsa.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/crypto/internal/constanttime/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/bigmod/index.js"
import "@goscript/crypto/internal/fips140/drbg/index.js"
import "@goscript/crypto/internal/fips140/subtle/index.js"
import "@goscript/errors/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"
import "./cast.gs.ts"
import "./pkcs1v15.gs.ts"
import "./pkcs1v22.gs.ts"
import "./rsa.gs.ts"

$.registerTypePackagePath("crypto/internal/fips140/rsa", ["rsa.TestingOnlyLargeExponentPublicKey", "rsa.TestingOnlyLargeExponentPrivateKey"])

export class TestingOnlyLargeExponentPublicKey {
	public get N(): bigmod.Modulus | $.VarRef<bigmod.Modulus> | null {
		return this._fields.N
	}

	public set N(value: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null) {
		this._fields.N = value
	}

	// E is the public exponent, represented as a big-endian byte slice.
	public get E(): $.Slice<number> {
		return this._fields.E
	}

	public set E(value: $.Slice<number>) {
		this._fields.E = value
	}

	public _fields: {
		N: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null
		E: $.Slice<number>
	}

	constructor(init?: Partial<{N?: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null, E?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			N: init?.N ?? (null! as bigmod.Modulus | $.VarRef<bigmod.Modulus> | null),
			E: init?.E ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TestingOnlyLargeExponentPublicKey {
		return new TestingOnlyLargeExponentPublicKey(this, true)
	}

	public __goscriptAssign(source: TestingOnlyLargeExponentPublicKey): void {
		const target = this._fields
		const values = source._fields
		target.N = values.N
		target.E = values.E
	}

	public Size(): number {
		const pub: TestingOnlyLargeExponentPublicKey | $.VarRef<TestingOnlyLargeExponentPublicKey> | null = this;
		return globalThis.Math.trunc((bigmod.Modulus.prototype.BitLen.call($.pointerValue<TestingOnlyLargeExponentPublicKey>(pub).N) + 7) / 8)
	}

	static __typeInfo = $.registerStructType(
		"rsa.TestingOnlyLargeExponentPublicKey",
		() => new TestingOnlyLargeExponentPublicKey(),
		() => [$.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true)],
		TestingOnlyLargeExponentPublicKey,
		() => [/* @__PURE__ */ $.structField("N", /* @__PURE__ */ $.pointerType("bigmod.Modulus"), [0], 0, true), /* @__PURE__ */ $.structField("E", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, true)]
	)
}

export class TestingOnlyLargeExponentPrivateKey {
	public get n(): bigmod.Modulus | $.VarRef<bigmod.Modulus> | null {
		return this._fields.n
	}

	public set n(value: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null) {
		this._fields.n = value
	}

	public get e(): $.Slice<number> {
		return this._fields.e
	}

	public set e(value: $.Slice<number>) {
		this._fields.e = value
	}

	public get d(): bigmod.Nat | $.VarRef<bigmod.Nat> | null {
		return this._fields.d
	}

	public set d(value: bigmod.Nat | $.VarRef<bigmod.Nat> | null) {
		this._fields.d = value
	}

	public get p(): bigmod.Modulus | $.VarRef<bigmod.Modulus> | null {
		return this._fields.p
	}

	public set p(value: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null) {
		this._fields.p = value
	}

	public get q(): bigmod.Modulus | $.VarRef<bigmod.Modulus> | null {
		return this._fields.q
	}

	public set q(value: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null) {
		this._fields.q = value
	}

	public get dP(): $.Slice<number> {
		return this._fields.dP
	}

	public set dP(value: $.Slice<number>) {
		this._fields.dP = value
	}

	public get dQ(): $.Slice<number> {
		return this._fields.dQ
	}

	public set dQ(value: $.Slice<number>) {
		this._fields.dQ = value
	}

	public get qInv(): bigmod.Nat | $.VarRef<bigmod.Nat> | null {
		return this._fields.qInv
	}

	public set qInv(value: bigmod.Nat | $.VarRef<bigmod.Nat> | null) {
		this._fields.qInv = value
	}

	public _fields: {
		n: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null
		e: $.Slice<number>
		d: bigmod.Nat | $.VarRef<bigmod.Nat> | null
		p: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null
		q: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null
		dP: $.Slice<number>
		dQ: $.Slice<number>
		qInv: bigmod.Nat | $.VarRef<bigmod.Nat> | null
	}

	constructor(init?: Partial<{n?: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null, e?: $.Slice<number>, d?: bigmod.Nat | $.VarRef<bigmod.Nat> | null, p?: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null, q?: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null, dP?: $.Slice<number>, dQ?: $.Slice<number>, qInv?: bigmod.Nat | $.VarRef<bigmod.Nat> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			n: init?.n ?? (null! as bigmod.Modulus | $.VarRef<bigmod.Modulus> | null),
			e: init?.e ?? (null! as $.Slice<number>),
			d: init?.d ?? (null! as bigmod.Nat | $.VarRef<bigmod.Nat> | null),
			p: init?.p ?? (null! as bigmod.Modulus | $.VarRef<bigmod.Modulus> | null),
			q: init?.q ?? (null! as bigmod.Modulus | $.VarRef<bigmod.Modulus> | null),
			dP: init?.dP ?? (null! as $.Slice<number>),
			dQ: init?.dQ ?? (null! as $.Slice<number>),
			qInv: init?.qInv ?? (null! as bigmod.Nat | $.VarRef<bigmod.Nat> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TestingOnlyLargeExponentPrivateKey {
		return new TestingOnlyLargeExponentPrivateKey(this, true)
	}

	public __goscriptAssign(source: TestingOnlyLargeExponentPrivateKey): void {
		const target = this._fields
		const values = source._fields
		target.n = values.n
		target.e = values.e
		target.d = values.d
		target.p = values.p
		target.q = values.q
		target.dP = values.dP
		target.dQ = values.dQ
		target.qInv = values.qInv
	}

	public Size(): number {
		const priv: TestingOnlyLargeExponentPrivateKey | $.VarRef<TestingOnlyLargeExponentPrivateKey> | null = this;
		return globalThis.Math.trunc((bigmod.Modulus.prototype.BitLen.call($.pointerValue<TestingOnlyLargeExponentPrivateKey>(priv).n) + 7) / 8)
	}

	static __typeInfo = $.registerStructType(
		"rsa.TestingOnlyLargeExponentPrivateKey",
		() => new TestingOnlyLargeExponentPrivateKey(),
		() => [$.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true)],
		TestingOnlyLargeExponentPrivateKey,
		() => [/* @__PURE__ */ $.structField("n", /* @__PURE__ */ $.pointerType("bigmod.Modulus"), [0], 0, false, { pkgPath: "crypto/internal/fips140/rsa" }), /* @__PURE__ */ $.structField("e", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, false, { pkgPath: "crypto/internal/fips140/rsa" }), /* @__PURE__ */ $.structField("d", /* @__PURE__ */ $.pointerType("bigmod.Nat"), [2], 32, false, { pkgPath: "crypto/internal/fips140/rsa" }), /* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.pointerType("bigmod.Modulus"), [3], 40, false, { pkgPath: "crypto/internal/fips140/rsa" }), /* @__PURE__ */ $.structField("q", /* @__PURE__ */ $.pointerType("bigmod.Modulus"), [4], 48, false, { pkgPath: "crypto/internal/fips140/rsa" }), /* @__PURE__ */ $.structField("dP", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 56, false, { pkgPath: "crypto/internal/fips140/rsa" }), /* @__PURE__ */ $.structField("dQ", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 80, false, { pkgPath: "crypto/internal/fips140/rsa" }), /* @__PURE__ */ $.structField("qInv", /* @__PURE__ */ $.pointerType("bigmod.Nat"), [7], 104, false, { pkgPath: "crypto/internal/fips140/rsa" })]
	)
}

export function checkLargeExponentPublicKey(pub: TestingOnlyLargeExponentPublicKey | $.VarRef<TestingOnlyLargeExponentPublicKey> | null): $.GoError {
	const pub$: TestingOnlyLargeExponentPublicKey = pub == null ? $.pointerTarget<TestingOnlyLargeExponentPublicKey>(pub) : (pub as any).__isVarRef === true ? (pub as any).value : (pub as any).__goValue === undefined ? (pub as any) : $.pointerTarget<TestingOnlyLargeExponentPublicKey>(pub)
	if ((pub$ as TestingOnlyLargeExponentPublicKey).N == null) {
		return errors.New("crypto/rsa: missing public modulus")
	}
	if (bigmod.Nat.prototype.IsOdd.call(bigmod.Modulus.prototype.Nat.call((pub$ as TestingOnlyLargeExponentPublicKey).N)) == 0) {
		return errors.New("crypto/rsa: public modulus is even")
	}
	if (bigmod.Modulus.prototype.BitLen.call((pub$ as TestingOnlyLargeExponentPublicKey).N) < 2048) {
		return errors.New("crypto/rsa: public modulus too small")
	}
	if ((bigmod.Modulus.prototype.BitLen.call((pub$ as TestingOnlyLargeExponentPublicKey).N) % 2) == 1) {
		return errors.New("crypto/rsa: public modulus bit length not even")
	}
	let E: $.Slice<number> = (pub$ as TestingOnlyLargeExponentPublicKey).E
	while (($.sliceLen(E) > 0) && ($.arrayIndex(E!, 0) == 0)) {
		E = $.goSlice(E, 1, undefined)
	}
	if (($.sliceLen(E) < 4) || (($.sliceLen(E) == 4) && ($.arrayIndex(E!, 0) < 0x80))) {
		// Exponents less than 2^31 must use [PublicKey].
		return errors.New("crypto/rsa: public exponent too small")
	}
	if ($.sliceLen(E) > 32) {
		return errors.New("crypto/rsa: public exponent too large")
	}
	if ($.uint(($.arrayIndex(E!, $.sliceLen(E) - 1) & 1), 8) == 0) {
		return errors.New("crypto/rsa: public exponent is even")
	}
	return null
}

export function encryptLargeExponent(pub: TestingOnlyLargeExponentPublicKey | $.VarRef<TestingOnlyLargeExponentPublicKey> | null, plaintext: $.Slice<number>): [$.Slice<number>, $.GoError] {
	const pub$: TestingOnlyLargeExponentPublicKey = pub == null ? $.pointerTarget<TestingOnlyLargeExponentPublicKey>(pub) : (pub as any).__isVarRef === true ? (pub as any).value : (pub as any).__goValue === undefined ? (pub as any) : $.pointerTarget<TestingOnlyLargeExponentPublicKey>(pub)
	let __goscriptTuple0: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), plaintext, (pub$ as TestingOnlyLargeExponentPublicKey).N)
	let m: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}
	return [bigmod.Nat.prototype.Bytes.call(bigmod.Nat.prototype.Exp.call(bigmod.NewNat(), m, (pub$ as TestingOnlyLargeExponentPublicKey).E, (pub$ as TestingOnlyLargeExponentPublicKey).N), (pub$ as TestingOnlyLargeExponentPublicKey).N), null]
}

export async function TestingOnlyLargeExponentVerifyPKCS1v15(pub: TestingOnlyLargeExponentPublicKey | $.VarRef<TestingOnlyLargeExponentPublicKey> | null, hash: string, hashed: $.Slice<number>, sig: $.Slice<number>): globalThis.Promise<$.GoError> {
	void (__goscriptAwait = __goscript_cast.__goscript_get_fipsSelfTest()!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	__goscript_pkcs1v15.checkApprovedHashName(hash)
	{
		let err = checkLargeExponentPublicKey(pub)
		if (err != null) {
			return err
		}
	}
	if ((pub !== null && (pub as any).__isVarRef !== true && (pub as any).__goValue === undefined ? ((pub as any) as TestingOnlyLargeExponentPublicKey).Size() : TestingOnlyLargeExponentPublicKey.prototype.Size.call(pub)) != $.sliceLen(sig)) {
		return __goscript_rsa.ErrVerification
	}
	let __goscriptTuple1: any = encryptLargeExponent(pub, sig)
	let em: $.Slice<number> = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (err != null) {
		return __goscript_rsa.ErrVerification
	}
	let __goscriptTuple2: any = __goscript_pkcs1v15.pkcs1v15ConstructEM(new __goscript_rsa.PublicKey({N: $.pointerValue<TestingOnlyLargeExponentPublicKey>(pub).N}), hash, hashed)
	let expected: $.Slice<number> = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	if (err != null) {
		return __goscript_rsa.ErrVerification
	}
	if (!bytes.Equal(em, expected)) {
		return __goscript_rsa.ErrVerification
	}
	return null
}

export async function TestingOnlyLargeExponentVerifyPSS(pub: TestingOnlyLargeExponentPublicKey | $.VarRef<TestingOnlyLargeExponentPublicKey> | null, hash: hash2.Hash | null, digest: $.Slice<number>, sig: $.Slice<number>): globalThis.Promise<$.GoError> {
	void (__goscriptAwait = __goscript_cast.__goscript_get_fipsSelfTest()!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	__goscript_pkcs1v22.checkApprovedHash(hash)
	{
		let err = checkLargeExponentPublicKey(pub)
		if (err != null) {
			return err
		}
	}
	if ($.sliceLen(sig) != (pub !== null && (pub as any).__isVarRef !== true && (pub as any).__goValue === undefined ? ((pub as any) as TestingOnlyLargeExponentPublicKey).Size() : TestingOnlyLargeExponentPublicKey.prototype.Size.call(pub))) {
		return __goscript_rsa.ErrVerification
	}
	let emBits = bigmod.Modulus.prototype.BitLen.call($.pointerValue<TestingOnlyLargeExponentPublicKey>(pub).N) - 1
	let emLen = globalThis.Math.trunc((emBits + 7) / 8)
	let __goscriptTuple3: any = encryptLargeExponent(pub, sig)
	let em: $.Slice<number> = __goscriptTuple3[0]
	let err = __goscriptTuple3[1]
	if (err != null) {
		return __goscript_rsa.ErrVerification
	}
	while (($.sliceLen(em) > emLen) && ($.sliceLen(em) > 0)) {
		if ($.arrayIndex(em!, 0) != 0) {
			return __goscript_rsa.ErrVerification
		}
		em = $.goSlice(em, 1, undefined)
	}
	return __goscript_pkcs1v22.emsaPSSVerify(digest, em, emBits, -1, hash)
}

export function TestingOnlyNewLargeExponentPrivateKeyWithPrecomputation(N: $.Slice<number>, e: $.Slice<number>, d: $.Slice<number>, P: $.Slice<number>, Q: $.Slice<number>, dP: $.Slice<number>, dQ: $.Slice<number>, qInv: $.Slice<number>): [TestingOnlyLargeExponentPrivateKey | $.VarRef<TestingOnlyLargeExponentPrivateKey> | null, $.GoError] {
	let __goscriptTuple4: any = bigmod.NewModulus(N)
	let n: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = __goscriptTuple4[0]
	let err = __goscriptTuple4[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple5: any = bigmod.NewModulus(P)
	let p: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = __goscriptTuple5[0]
	err = __goscriptTuple5[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple6: any = bigmod.NewModulus(Q)
	let q: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = __goscriptTuple6[0]
	err = __goscriptTuple6[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple7: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), d, n)
	let dN: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple7[0]
	err = __goscriptTuple7[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple8: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), qInv, p)
	let qInvNat: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple8[0]
	err = __goscriptTuple8[1]
	if (err != null) {
		return [null, err]
	}

	let priv: TestingOnlyLargeExponentPrivateKey | $.VarRef<TestingOnlyLargeExponentPrivateKey> | null = new TestingOnlyLargeExponentPrivateKey({n: n, e: e, d: dN, p: p, q: q, dP: dP, dQ: dQ, qInv: qInvNat})
	{
		let __goscriptShadow0 = checkLargeExponentPrivateKey(priv)
		if (__goscriptShadow0 != null) {
			return [null, __goscriptShadow0]
		}
	}
	return [priv, null]
}

export function checkLargeExponentPrivateKey(priv: TestingOnlyLargeExponentPrivateKey | $.VarRef<TestingOnlyLargeExponentPrivateKey> | null): $.GoError {
	const priv$: TestingOnlyLargeExponentPrivateKey = priv == null ? $.pointerTarget<TestingOnlyLargeExponentPrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<TestingOnlyLargeExponentPrivateKey>(priv)
	// Check public key portion.
	let pub: TestingOnlyLargeExponentPublicKey | $.VarRef<TestingOnlyLargeExponentPublicKey> | null = new TestingOnlyLargeExponentPublicKey({N: (priv$ as TestingOnlyLargeExponentPrivateKey).n, E: (priv$ as TestingOnlyLargeExponentPrivateKey).e})
	{
		let err = checkLargeExponentPublicKey(pub)
		if (err != null) {
			return err
		}
	}

	let N: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = (priv$ as TestingOnlyLargeExponentPrivateKey).n
	let p: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = (priv$ as TestingOnlyLargeExponentPrivateKey).p
	let q: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = (priv$ as TestingOnlyLargeExponentPrivateKey).q

	// FIPS 186-5, Section 5.1 requires "that p and q be of the same bit length."
	if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as bigmod.Modulus).BitLen() : bigmod.Modulus.prototype.BitLen.call(p)) != (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as bigmod.Modulus).BitLen() : bigmod.Modulus.prototype.BitLen.call(q))) {
	}

	// Check that pq ≡ 1 mod N (and that p < N and q < N).
	let pN: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.Nat.prototype.ExpandFor.call(bigmod.NewNat(), N)
	{
		let [, err] = bigmod.Nat.prototype.SetBytes.call(pN, bigmod.Nat.prototype.Bytes.call((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(p)), p), N)
		if (err != null) {
			return errors.New("crypto/rsa: invalid prime")
		}
	}
	let qN: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.Nat.prototype.ExpandFor.call(bigmod.NewNat(), N)
	{
		let [, err] = bigmod.Nat.prototype.SetBytes.call(qN, bigmod.Nat.prototype.Bytes.call((q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(q)), q), N)
		if (err != null) {
			return errors.New("crypto/rsa: invalid prime")
		}
	}
	if (bigmod.Nat.prototype.IsZero.call((pN !== null && (pN as any).__isVarRef !== true && (pN as any).__goValue === undefined ? ((pN as any) as bigmod.Nat).Mul(qN, N) : bigmod.Nat.prototype.Mul.call(pN, qN, N))) != 1) {
		return errors.New("crypto/rsa: p * q != n")
	}

	// Check that de ≡ 1 mod p-1, and de ≡ 1 mod q-1.
	// Uses byte-slice exponent for large exponents.
	let __goscriptTuple9: any = bigmod.NewModulus(bigmod.Nat.prototype.Bytes.call(bigmod.Nat.prototype.SubOne.call((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(p)), p), p))
	let pMinus1: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = __goscriptTuple9[0]
	let err = __goscriptTuple9[1]
	if (err != null) {
		return errors.New("crypto/rsa: invalid prime")
	}
	let __goscriptTuple10: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), (priv$ as TestingOnlyLargeExponentPrivateKey).dP, pMinus1)
	let dP: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple10[0]
	err = __goscriptTuple10[1]
	if (err != null) {
		return errors.New("crypto/rsa: invalid CRT exponent")
	}
	let de: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.NewNat()
	{
		let [, __goscriptShadow1] = (de !== null && (de as any).__isVarRef !== true && (de as any).__goValue === undefined ? ((de as any) as bigmod.Nat).SetBytes((priv$ as TestingOnlyLargeExponentPrivateKey).e, pMinus1) : bigmod.Nat.prototype.SetBytes.call(de, (priv$ as TestingOnlyLargeExponentPrivateKey).e, pMinus1))
		if (__goscriptShadow1 != null) {
			// Exponent might be larger than p-1, reduce it.
			let __goscriptTuple11: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), (priv$ as TestingOnlyLargeExponentPrivateKey).e, (priv$ as TestingOnlyLargeExponentPrivateKey).n)
			let eNat: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple11[0]
			void (de !== null && (de as any).__isVarRef !== true && (de as any).__goValue === undefined ? ((de as any) as bigmod.Nat).Mod(eNat, pMinus1) : bigmod.Nat.prototype.Mod.call(de, eNat, pMinus1))
		}
	}
	void (de !== null && (de as any).__isVarRef !== true && (de as any).__goValue === undefined ? ((de as any) as bigmod.Nat).Mul(dP, pMinus1) : bigmod.Nat.prototype.Mul.call(de, dP, pMinus1))
	if ((de !== null && (de as any).__isVarRef !== true && (de as any).__goValue === undefined ? ((de as any) as bigmod.Nat).IsOne() : bigmod.Nat.prototype.IsOne.call(de)) != 1) {
		return errors.New("crypto/rsa: invalid CRT exponent")
	}

	let __goscriptTuple12: any = bigmod.NewModulus(bigmod.Nat.prototype.Bytes.call(bigmod.Nat.prototype.SubOne.call((q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(q)), q), q))
	let qMinus1: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = __goscriptTuple12[0]
	err = __goscriptTuple12[1]
	if (err != null) {
		return errors.New("crypto/rsa: invalid prime")
	}
	let __goscriptTuple13: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), (priv$ as TestingOnlyLargeExponentPrivateKey).dQ, qMinus1)
	let dQ: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple13[0]
	err = __goscriptTuple13[1]
	if (err != null) {
		return errors.New("crypto/rsa: invalid CRT exponent")
	}
	{
		let [, __goscriptShadow2] = (de !== null && (de as any).__isVarRef !== true && (de as any).__goValue === undefined ? ((de as any) as bigmod.Nat).SetBytes((priv$ as TestingOnlyLargeExponentPrivateKey).e, qMinus1) : bigmod.Nat.prototype.SetBytes.call(de, (priv$ as TestingOnlyLargeExponentPrivateKey).e, qMinus1))
		if (__goscriptShadow2 != null) {
			// Exponent might be larger than q-1, reduce it.
			let __goscriptTuple14: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), (priv$ as TestingOnlyLargeExponentPrivateKey).e, (priv$ as TestingOnlyLargeExponentPrivateKey).n)
			let eNat: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple14[0]
			void (de !== null && (de as any).__isVarRef !== true && (de as any).__goValue === undefined ? ((de as any) as bigmod.Nat).Mod(eNat, qMinus1) : bigmod.Nat.prototype.Mod.call(de, eNat, qMinus1))
		}
	}
	void (de !== null && (de as any).__isVarRef !== true && (de as any).__goValue === undefined ? ((de as any) as bigmod.Nat).Mul(dQ, qMinus1) : bigmod.Nat.prototype.Mul.call(de, dQ, qMinus1))
	if ((de !== null && (de as any).__isVarRef !== true && (de as any).__goValue === undefined ? ((de as any) as bigmod.Nat).IsOne() : bigmod.Nat.prototype.IsOne.call(de)) != 1) {
		return errors.New("crypto/rsa: invalid CRT exponent")
	}

	// Check that qInv * q ≡ 1 mod p.
	let __goscriptTuple15: any = bigmod.Nat.prototype.SetOverflowingBytes.call(bigmod.NewNat(), bigmod.Nat.prototype.Bytes.call((q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(q)), q), p)
	let qP: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple15[0]
	err = __goscriptTuple15[1]
	if (err != null) {
		// q >= 2^⌈log2(p)⌉
		qP = bigmod.Nat.prototype.Mod.call(bigmod.NewNat(), (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(q)), p)
	}
	if (bigmod.Nat.prototype.IsOne.call((qP !== null && (qP as any).__isVarRef !== true && (qP as any).__goValue === undefined ? ((qP as any) as bigmod.Nat).Mul((priv$ as TestingOnlyLargeExponentPrivateKey).qInv, p) : bigmod.Nat.prototype.Mul.call(qP, (priv$ as TestingOnlyLargeExponentPrivateKey).qInv, p))) != 1) {
		return errors.New("crypto/rsa: invalid CRT coefficient")
	}

	return null
}

export function decryptLargeExponent(priv: TestingOnlyLargeExponentPrivateKey | $.VarRef<TestingOnlyLargeExponentPrivateKey> | null, ciphertext: $.Slice<number>): [$.Slice<number>, $.GoError] {
	const priv$: TestingOnlyLargeExponentPrivateKey = priv == null ? $.pointerTarget<TestingOnlyLargeExponentPrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<TestingOnlyLargeExponentPrivateKey>(priv)
	let N: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = (priv$ as TestingOnlyLargeExponentPrivateKey).n
	let __goscriptTuple16: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), ciphertext, N)
	let c: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple16[0]
	let err = __goscriptTuple16[1]
	if (err != null) {
		return [null, __goscript_rsa.ErrDecryption]
	}

	// CRT-based decryption (same as regular decrypt, doesn't use E).
	let P: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = (priv$ as TestingOnlyLargeExponentPrivateKey).p
	let Q: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = (priv$ as TestingOnlyLargeExponentPrivateKey).q
	let t0: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.NewNat()
	// m = c ^ Dp mod p
	let m: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.Nat.prototype.Exp.call(bigmod.NewNat(), (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as bigmod.Nat).Mod(c, P) : bigmod.Nat.prototype.Mod.call(t0, c, P)), (priv$ as TestingOnlyLargeExponentPrivateKey).dP, P)
	// m2 = c ^ Dq mod q
	let m2: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.Nat.prototype.Exp.call(bigmod.NewNat(), (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as bigmod.Nat).Mod(c, Q) : bigmod.Nat.prototype.Mod.call(t0, c, Q)), (priv$ as TestingOnlyLargeExponentPrivateKey).dQ, Q)
	// m = m - m2 mod p
	bigmod.Nat.prototype.Sub.call(m, (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as bigmod.Nat).Mod(m2, P) : bigmod.Nat.prototype.Mod.call(t0, m2, P)), P)
	// m = m * Qinv mod p
	void (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as bigmod.Nat).Mul((priv$ as TestingOnlyLargeExponentPrivateKey).qInv, P) : bigmod.Nat.prototype.Mul.call(m, (priv$ as TestingOnlyLargeExponentPrivateKey).qInv, P))
	// m = m * q mod N
	bigmod.Nat.prototype.Mul.call((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as bigmod.Nat).ExpandFor(N) : bigmod.Nat.prototype.ExpandFor.call(m, N)), bigmod.Nat.prototype.Mod.call(t0, (Q !== null && (Q as any).__isVarRef !== true && (Q as any).__goValue === undefined ? ((Q as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(Q)), N), N)
	// m = m + m2 mod N
	bigmod.Nat.prototype.Add.call(m, (m2 !== null && (m2 as any).__isVarRef !== true && (m2 as any).__goValue === undefined ? ((m2 as any) as bigmod.Nat).ExpandFor(N) : bigmod.Nat.prototype.ExpandFor.call(m2, N)), N)

	return [(m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as bigmod.Nat).Bytes(N) : bigmod.Nat.prototype.Bytes.call(m, N)), null]
}

export async function TestingOnlyLargeExponentDecryptOAEP(hash: hash2.Hash | null, mgfHash: hash2.Hash | null, priv: TestingOnlyLargeExponentPrivateKey | $.VarRef<TestingOnlyLargeExponentPrivateKey> | null, ciphertext: $.Slice<number>, label: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	void (__goscriptAwait = __goscript_cast.__goscript_get_fipsSelfTest()!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	__goscript_pkcs1v22.checkApprovedHash(hash)

	let k = (priv !== null && (priv as any).__isVarRef !== true && (priv as any).__goValue === undefined ? ((priv as any) as TestingOnlyLargeExponentPrivateKey).Size() : TestingOnlyLargeExponentPrivateKey.prototype.Size.call(priv))
	if (($.sliceLen(ciphertext) > k) || (k < (((__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) * 2) + 2))) {
		return [null, __goscript_rsa.ErrDecryption]
	}

	let __goscriptTuple17: any = decryptLargeExponent(priv, ciphertext)
	let em: $.Slice<number> = __goscriptTuple17[0]
	let err = __goscriptTuple17[1]
	if (err != null) {
		return [null, err]
	}

	void (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Write(label)
	let lHash: $.Slice<number> = await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Sum(null)

	let firstByteIsZero = constanttime.ByteEq($.arrayIndex(em!, 0), 0)

	let seed: $.Slice<number> = $.goSlice(em, 1, (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) + 1)
	let db: $.Slice<number> = $.goSlice(em, (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) + 1, undefined)

	await __goscript_pkcs1v22.mgf1XOR(seed, mgfHash, db)
	await __goscript_pkcs1v22.mgf1XOR(db, mgfHash, seed)

	let lHash2: $.Slice<number> = $.goSlice(db, 0, (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))

	let lHash2Good = subtle.ConstantTimeCompare(lHash, lHash2)

	let lookingForIndex: number = 0
	let index: number = 0
	let invalid: number = 0
	lookingForIndex = 1
	let rest: $.Slice<number> = $.goSlice(db, (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined)

	for (let __goscriptSliceWindow0 = $.sliceRange(rest), i = 0; i < __goscriptSliceWindow0.length; i++) {
		let equals0 = constanttime.ByteEq(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number), 0)
		let equals1 = constanttime.ByteEq(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number), 1)
		index = constanttime.Select(lookingForIndex & equals1, i, index)
		lookingForIndex = constanttime.Select(equals1, 0, lookingForIndex)
		invalid = constanttime.Select(lookingForIndex & ~(equals0), 1, invalid)
	}

	if ((((firstByteIsZero & lHash2Good) & ~(invalid)) & ~(lookingForIndex)) != 1) {
		return [null, __goscript_rsa.ErrDecryption]
	}

	return [$.goSlice(rest, index + 1, undefined), null]
}

export async function TestingOnlyLargeExponentEncryptOAEP(hash: hash2.Hash | null, mgfHash: hash2.Hash | null, random: io.Reader | null, pub: TestingOnlyLargeExponentPublicKey | $.VarRef<TestingOnlyLargeExponentPublicKey> | null, msg: $.Slice<number>, label: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	void (__goscriptAwait = __goscript_cast.__goscript_get_fipsSelfTest()!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	fips140.RecordApproved()
	__goscript_pkcs1v22.checkApprovedHash(hash)
	{
		let err = checkLargeExponentPublicKey(pub)
		if (err != null) {
			return [null, err]
		}
	}
	let k = (pub !== null && (pub as any).__isVarRef !== true && (pub as any).__goValue === undefined ? ((pub as any) as TestingOnlyLargeExponentPublicKey).Size() : TestingOnlyLargeExponentPublicKey.prototype.Size.call(pub))
	if ($.sliceLen(msg) > ((k - (2 * (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) - 2)) {
		return [null, __goscript_rsa.ErrMessageTooLong]
	}

	void (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Write(label)
	let lHash: $.Slice<number> = await (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Sum(null)

	let em: $.Slice<number> = $.makeSlice<number>(k, undefined, "byte")
	let seed: $.Slice<number> = $.goSlice(em, 1, 1 + (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
	let db: $.Slice<number> = $.goSlice(em, 1 + (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), undefined)

	$.copy($.goSlice(db, 0, (__goscriptAwait = (hash !== null && (hash as any).__isVarRef !== true && (hash as any).__goValue === undefined ? (hash as Exclude<hash2.Hash, null>) : $.pointerValue<Exclude<hash2.Hash, null>>(hash)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), lHash)
	$.sliceElems(db!)[$.sliceSlot(db!, ($.sliceLen(db) - $.sliceLen(msg)) - 1)] = 1
	$.copy($.goSlice(db, $.sliceLen(db) - $.sliceLen(msg), undefined), msg)

	{
		let err = await drbg.ReadWithReader(random, seed)
		if (err != null) {
			return [null, err]
		}
	}

	await __goscript_pkcs1v22.mgf1XOR(db, mgfHash, seed)
	await __goscript_pkcs1v22.mgf1XOR(seed, mgfHash, db)

	return encryptLargeExponent(pub, em)
}

var __goscriptAwait: any
