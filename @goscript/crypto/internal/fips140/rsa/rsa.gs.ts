// Generated file based on rsa.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fips140 from "@goscript/crypto/internal/fips140/index.js"

import * as bigmod from "@goscript/crypto/internal/fips140/bigmod/index.js"

import * as errors from "@goscript/errors/index.js"
import "@goscript/bytes/index.js"
import "@goscript/crypto/internal/fips140/index.js"
import "@goscript/crypto/internal/fips140/bigmod/index.js"
import "@goscript/errors/index.js"

$.registerTypePackagePath("crypto/internal/fips140/rsa", ["rsa.PublicKey", "rsa.PrivateKey"])

export class PublicKey {
	public get N(): bigmod.Modulus | $.VarRef<bigmod.Modulus> | null {
		return this._fields.N
	}

	public set N(value: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null) {
		this._fields.N = value
	}

	public get E(): number {
		return this._fields.E
	}

	public set E(value: number) {
		this._fields.E = value
	}

	public _fields: {
		N: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null
		E: number
	}

	constructor(init?: Partial<{N?: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null, E?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			N: init?.N ?? (null! as bigmod.Modulus | $.VarRef<bigmod.Modulus> | null),
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

	public Size(): number {
		const pub: PublicKey | $.VarRef<PublicKey> | null = this;
		return globalThis.Math.trunc((bigmod.Modulus.prototype.BitLen.call($.pointerValue<PublicKey>(pub).N) + 7) / 8)
	}

	static __typeInfo = $.registerStructType(
		"rsa.PublicKey",
		() => new PublicKey(),
		() => [$.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")], true)],
		PublicKey,
		() => [/* @__PURE__ */ $.structField("N", /* @__PURE__ */ $.pointerType("bigmod.Modulus"), [0], 0, true), /* @__PURE__ */ $.structField("E", /* @__PURE__ */ $.basicType("int"), [1], 8, true)]
	)
}

export class PrivateKey {
	// pub has already been checked with checkPublicKey.
	public get pub(): PublicKey {
		return this._fields.pub
	}

	public set pub(value: PublicKey) {
		this._fields.pub = value
	}

	public get d(): bigmod.Nat | $.VarRef<bigmod.Nat> | null {
		return this._fields.d
	}

	public set d(value: bigmod.Nat | $.VarRef<bigmod.Nat> | null) {
		this._fields.d = value
	}

	// The following values are not set for deprecated multi-prime keys.
	//
	// Since they are always set for keys in FIPS mode, for SP 800-56B Rev. 2
	// purposes we always use the Chinese Remainder Theorem (CRT) format.
	public get p(): bigmod.Modulus | $.VarRef<bigmod.Modulus> | null {
		return this._fields.p
	}

	public set p(value: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null) {
		this._fields.p = value
	}

	// The following values are not set for deprecated multi-prime keys.
	//
	// Since they are always set for keys in FIPS mode, for SP 800-56B Rev. 2
	// purposes we always use the Chinese Remainder Theorem (CRT) format.
	public get q(): bigmod.Modulus | $.VarRef<bigmod.Modulus> | null {
		return this._fields.q
	}

	public set q(value: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null) {
		this._fields.q = value
	}

	// dP and dQ are used as exponents, so we store them as big-endian byte
	// slices to be passed to [bigmod.Nat.Exp].
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

	// fipsApproved is false if this key does not comply with FIPS 186-5 or
	// SP 800-56B Rev. 2.
	public get fipsApproved(): boolean {
		return this._fields.fipsApproved
	}

	public set fipsApproved(value: boolean) {
		this._fields.fipsApproved = value
	}

	public _fields: {
		pub: PublicKey
		d: bigmod.Nat | $.VarRef<bigmod.Nat> | null
		p: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null
		q: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null
		dP: $.Slice<number>
		dQ: $.Slice<number>
		qInv: bigmod.Nat | $.VarRef<bigmod.Nat> | null
		fipsApproved: boolean
	}

	constructor(init?: Partial<{pub?: PublicKey, d?: bigmod.Nat | $.VarRef<bigmod.Nat> | null, p?: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null, q?: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null, dP?: $.Slice<number>, dQ?: $.Slice<number>, qInv?: bigmod.Nat | $.VarRef<bigmod.Nat> | null, fipsApproved?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			pub: init?.pub ? init.pub.clone() : new PublicKey(undefined, true),
			d: init?.d ?? (null! as bigmod.Nat | $.VarRef<bigmod.Nat> | null),
			p: init?.p ?? (null! as bigmod.Modulus | $.VarRef<bigmod.Modulus> | null),
			q: init?.q ?? (null! as bigmod.Modulus | $.VarRef<bigmod.Modulus> | null),
			dP: init?.dP ?? (null! as $.Slice<number>),
			dQ: init?.dQ ?? (null! as $.Slice<number>),
			qInv: init?.qInv ?? (null! as bigmod.Nat | $.VarRef<bigmod.Nat> | null),
			fipsApproved: init?.fipsApproved ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PrivateKey {
		return new PrivateKey(this, true)
	}

	public __goscriptAssign(source: PrivateKey): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.pub, values.pub)
		target.d = values.d
		target.p = values.p
		target.q = values.q
		target.dP = values.dP
		target.dQ = values.dQ
		target.qInv = values.qInv
		target.fipsApproved = values.fipsApproved
	}

	public Export(): [$.Slice<number>, number, $.Slice<number>, $.Slice<number>, $.Slice<number>, $.Slice<number>, $.Slice<number>, $.Slice<number>] {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		let N: $.Slice<number> = null! as $.Slice<number>
		let e: number = 0
		let d: $.Slice<number> = null! as $.Slice<number>
		let P: $.Slice<number> = null! as $.Slice<number>
		let Q: $.Slice<number> = null! as $.Slice<number>
		let dP: $.Slice<number> = null! as $.Slice<number>
		let dQ: $.Slice<number> = null! as $.Slice<number>
		let qInv: $.Slice<number> = null! as $.Slice<number>
		const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv)
		N = bigmod.Nat.prototype.Bytes.call(bigmod.Modulus.prototype.Nat.call((priv$ as PrivateKey).pub.N), (priv$ as PrivateKey).pub.N)
		e = (priv$ as PrivateKey).pub.E
		d = bigmod.Nat.prototype.Bytes.call((priv$ as PrivateKey).d, (priv$ as PrivateKey).pub.N)
		if ((priv$ as PrivateKey).dP == null) {
			return [N, e, d, P, Q, dP, dQ, qInv]
		}
		P = bigmod.Nat.prototype.Bytes.call(bigmod.Modulus.prototype.Nat.call((priv$ as PrivateKey).p), (priv$ as PrivateKey).p)
		Q = bigmod.Nat.prototype.Bytes.call(bigmod.Modulus.prototype.Nat.call((priv$ as PrivateKey).q), (priv$ as PrivateKey).q)
		dP = bytes.Clone((priv$ as PrivateKey).dP)
		dQ = bytes.Clone((priv$ as PrivateKey).dQ)
		qInv = bigmod.Nat.prototype.Bytes.call((priv$ as PrivateKey).qInv, (priv$ as PrivateKey).p)
		return [N, e, d, P, Q, dP, dQ, qInv]
	}

	public PublicKey(): PublicKey | $.VarRef<PublicKey> | null {
		const priv: PrivateKey | $.VarRef<PrivateKey> | null = this;
		return $.fieldRef($.pointerValue<PrivateKey>(priv)._fields, "pub")
	}

	static __typeInfo = $.registerStructType(
		"rsa.PrivateKey",
		() => new PrivateKey(),
		() => [$.methodSignature("Export", [], [["N", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["e", /* @__PURE__ */ $.basicType("int")], ["d", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["P", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["Q", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["dP", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["dQ", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["qInv", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], true), $.methodSignature("PublicKey", [], [/* @__PURE__ */ $.pointerType("rsa.PublicKey")], true)],
		PrivateKey,
		() => [/* @__PURE__ */ $.structField("pub", "rsa.PublicKey", [0], 0, false, { pkgPath: "crypto/internal/fips140/rsa" }), /* @__PURE__ */ $.structField("d", /* @__PURE__ */ $.pointerType("bigmod.Nat"), [1], 16, false, { pkgPath: "crypto/internal/fips140/rsa" }), /* @__PURE__ */ $.structField("p", /* @__PURE__ */ $.pointerType("bigmod.Modulus"), [2], 24, false, { pkgPath: "crypto/internal/fips140/rsa" }), /* @__PURE__ */ $.structField("q", /* @__PURE__ */ $.pointerType("bigmod.Modulus"), [3], 32, false, { pkgPath: "crypto/internal/fips140/rsa" }), /* @__PURE__ */ $.structField("dP", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 40, false, { pkgPath: "crypto/internal/fips140/rsa" }), /* @__PURE__ */ $.structField("dQ", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 64, false, { pkgPath: "crypto/internal/fips140/rsa" }), /* @__PURE__ */ $.structField("qInv", /* @__PURE__ */ $.pointerType("bigmod.Nat"), [6], 88, false, { pkgPath: "crypto/internal/fips140/rsa" }), /* @__PURE__ */ $.structField("fipsApproved", /* @__PURE__ */ $.basicType("bool"), [7], 96, false, { pkgPath: "crypto/internal/fips140/rsa" })]
	)
}

export const withCheck: boolean = true

export const noCheck: boolean = false

export function NewPrivateKey(N: $.Slice<number>, e: number, d: $.Slice<number>, P: $.Slice<number>, Q: $.Slice<number>): [PrivateKey | $.VarRef<PrivateKey> | null, $.GoError] {
	let __goscriptTuple0: any = bigmod.NewModulus(N)
	let n: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple1: any = bigmod.NewModulus(P)
	let p: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = __goscriptTuple1[0]
	err = __goscriptTuple1[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple2: any = bigmod.NewModulus(Q)
	let q: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = __goscriptTuple2[0]
	err = __goscriptTuple2[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple3: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), d, n)
	let dN: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple3[0]
	err = __goscriptTuple3[1]
	if (err != null) {
		return [null, err]
	}
	return newPrivateKey(n, e, dN, p, q)
}

export function newPrivateKey(n: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null, e: number, d: bigmod.Nat | $.VarRef<bigmod.Nat> | null, p: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null, q: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null): [PrivateKey | $.VarRef<PrivateKey> | null, $.GoError] {
	let pMinusOne: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.Nat.prototype.SubOne.call((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(p)), p)
	let __goscriptTuple4: any = bigmod.NewModulus((pMinusOne !== null && (pMinusOne as any).__isVarRef !== true && (pMinusOne as any).__goValue === undefined ? ((pMinusOne as any) as bigmod.Nat).Bytes(p) : bigmod.Nat.prototype.Bytes.call(pMinusOne, p)))
	let pMinusOneMod: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = __goscriptTuple4[0]
	let err = __goscriptTuple4[1]
	if (err != null) {
		return [null, err]
	}
	let dP: $.Slice<number> = bigmod.Nat.prototype.Bytes.call(bigmod.Nat.prototype.Mod.call(bigmod.NewNat(), d, pMinusOneMod), pMinusOneMod)

	let qMinusOne: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.Nat.prototype.SubOne.call((q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(q)), q)
	let __goscriptTuple5: any = bigmod.NewModulus((qMinusOne !== null && (qMinusOne as any).__isVarRef !== true && (qMinusOne as any).__goValue === undefined ? ((qMinusOne as any) as bigmod.Nat).Bytes(q) : bigmod.Nat.prototype.Bytes.call(qMinusOne, q)))
	let qMinusOneMod: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = __goscriptTuple5[0]
	err = __goscriptTuple5[1]
	if (err != null) {
		return [null, err]
	}
	let dQ: $.Slice<number> = bigmod.Nat.prototype.Bytes.call(bigmod.Nat.prototype.Mod.call(bigmod.NewNat(), d, qMinusOneMod), qMinusOneMod)

	// Constant-time modular inversion with prime modulus by Fermat's Little
	// Theorem: qInv = q⁻¹ mod p = q^(p-2) mod p.
	if (bigmod.Nat.prototype.IsOdd.call((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(p))) == 0) {
		// [bigmod.Nat.Exp] requires an odd modulus.
		return [null, errors.New("crypto/rsa: p is even")]
	}
	let pMinusTwo: $.Slice<number> = bigmod.Nat.prototype.Bytes.call(bigmod.Nat.prototype.SubOne.call(bigmod.Nat.prototype.SubOne.call((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(p)), p), p), p)
	let qInv: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.Nat.prototype.Mod.call(bigmod.NewNat(), (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(q)), p)
	void (qInv !== null && (qInv as any).__isVarRef !== true && (qInv as any).__goValue === undefined ? ((qInv as any) as bigmod.Nat).Exp(qInv, pMinusTwo, p) : bigmod.Nat.prototype.Exp.call(qInv, qInv, pMinusTwo, p))

	let pk: PrivateKey | $.VarRef<PrivateKey> | null = new PrivateKey({pub: new PublicKey({N: n, E: e}, true), d: d, p: p, q: q, dP: dP, dQ: dQ, qInv: qInv})
	{
		let __goscriptShadow0 = checkPrivateKey(pk)
		if (__goscriptShadow0 != null) {
			return [null, __goscriptShadow0]
		}
	}
	return [pk, null]
}

export function NewPrivateKeyWithPrecomputation(N: $.Slice<number>, e: number, d: $.Slice<number>, P: $.Slice<number>, Q: $.Slice<number>, dP: $.Slice<number>, dQ: $.Slice<number>, qInv: $.Slice<number>): [PrivateKey | $.VarRef<PrivateKey> | null, $.GoError] {
	let __goscriptTuple6: any = bigmod.NewModulus(N)
	let n: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = __goscriptTuple6[0]
	let err = __goscriptTuple6[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple7: any = bigmod.NewModulus(P)
	let p: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = __goscriptTuple7[0]
	err = __goscriptTuple7[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple8: any = bigmod.NewModulus(Q)
	let q: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = __goscriptTuple8[0]
	err = __goscriptTuple8[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple9: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), d, n)
	let dN: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple9[0]
	err = __goscriptTuple9[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple10: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), qInv, p)
	let qInvNat: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple10[0]
	err = __goscriptTuple10[1]
	if (err != null) {
		return [null, err]
	}

	let pk: PrivateKey | $.VarRef<PrivateKey> | null = new PrivateKey({pub: new PublicKey({N: n, E: e}, true), d: dN, p: p, q: q, dP: dP, dQ: dQ, qInv: qInvNat})
	{
		let __goscriptShadow1 = checkPrivateKey(pk)
		if (__goscriptShadow1 != null) {
			return [null, __goscriptShadow1]
		}
	}
	return [pk, null]
}

export function NewPrivateKeyWithoutCRT(N: $.Slice<number>, e: number, d: $.Slice<number>): [PrivateKey | $.VarRef<PrivateKey> | null, $.GoError] {
	let __goscriptTuple11: any = bigmod.NewModulus(N)
	let n: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = __goscriptTuple11[0]
	let err = __goscriptTuple11[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple12: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), d, n)
	let dN: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple12[0]
	err = __goscriptTuple12[1]
	if (err != null) {
		return [null, err]
	}
	let pk: PrivateKey | $.VarRef<PrivateKey> | null = new PrivateKey({pub: new PublicKey({N: n, E: e}, true), d: dN})
	{
		let __goscriptShadow2 = checkPrivateKey(pk)
		if (__goscriptShadow2 != null) {
			return [null, __goscriptShadow2]
		}
	}
	return [pk, null]
}

export function checkPrivateKey(priv: PrivateKey | $.VarRef<PrivateKey> | null): $.GoError {
	const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv);
	;(priv$ as PrivateKey).fipsApproved = true

	{
		let [fipsApproved, err] = checkPublicKey($.fieldRef((priv$ as PrivateKey)._fields, "pub"))
		if (err != null) {
			return err
		} else {
			if (!fipsApproved) {
				;(priv$ as PrivateKey).fipsApproved = false
			}
		}
	}

	if ((priv$ as PrivateKey).dP == null) {
		// Legacy and deprecated multi-prime keys.
		;(priv$ as PrivateKey).fipsApproved = false
		return null
	}

	let N: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = (priv$ as PrivateKey).pub.N
	let p: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = (priv$ as PrivateKey).p
	let q: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = (priv$ as PrivateKey).q

	// FIPS 186-5, Section 5.1 requires "that p and q be of the same bit length."
	if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as bigmod.Modulus).BitLen() : bigmod.Modulus.prototype.BitLen.call(p)) != (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as bigmod.Modulus).BitLen() : bigmod.Modulus.prototype.BitLen.call(q))) {
		;(priv$ as PrivateKey).fipsApproved = false
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
	//
	// This implies that e is coprime to each p-1 as e has a multiplicative
	// inverse. Therefore e is coprime to lcm(p-1,q-1) = λ(N).
	// It also implies that a^de ≡ a mod p as a^(p-1) ≡ 1 mod p. Thus a^de ≡ a
	// mod n for all a coprime to n, as required.
	//
	// This checks dP, dQ, and e.
	let __goscriptTuple13: any = bigmod.NewModulus(bigmod.Nat.prototype.Bytes.call(bigmod.Nat.prototype.SubOne.call((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(p)), p), p))
	let pMinus1: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = __goscriptTuple13[0]
	let err = __goscriptTuple13[1]
	if (err != null) {
		return errors.New("crypto/rsa: invalid prime")
	}
	let __goscriptTuple14: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), (priv$ as PrivateKey).dP, pMinus1)
	let dP: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple14[0]
	err = __goscriptTuple14[1]
	if (err != null) {
		return errors.New("crypto/rsa: invalid CRT exponent")
	}
	let de: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.NewNat()
	bigmod.Nat.prototype.ExpandFor.call((de !== null && (de as any).__isVarRef !== true && (de as any).__goValue === undefined ? ((de as any) as bigmod.Nat).SetUint($.uint((priv$ as PrivateKey).pub.E, 64)) : bigmod.Nat.prototype.SetUint.call(de, $.uint((priv$ as PrivateKey).pub.E, 64))), pMinus1)
	void (de !== null && (de as any).__isVarRef !== true && (de as any).__goValue === undefined ? ((de as any) as bigmod.Nat).Mul(dP, pMinus1) : bigmod.Nat.prototype.Mul.call(de, dP, pMinus1))
	if ((de !== null && (de as any).__isVarRef !== true && (de as any).__goValue === undefined ? ((de as any) as bigmod.Nat).IsOne() : bigmod.Nat.prototype.IsOne.call(de)) != 1) {
		return errors.New("crypto/rsa: invalid CRT exponent")
	}

	let __goscriptTuple15: any = bigmod.NewModulus(bigmod.Nat.prototype.Bytes.call(bigmod.Nat.prototype.SubOne.call((q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(q)), q), q))
	let qMinus1: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = __goscriptTuple15[0]
	err = __goscriptTuple15[1]
	if (err != null) {
		return errors.New("crypto/rsa: invalid prime")
	}
	let __goscriptTuple16: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), (priv$ as PrivateKey).dQ, qMinus1)
	let dQ: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple16[0]
	err = __goscriptTuple16[1]
	if (err != null) {
		return errors.New("crypto/rsa: invalid CRT exponent")
	}
	bigmod.Nat.prototype.ExpandFor.call((de !== null && (de as any).__isVarRef !== true && (de as any).__goValue === undefined ? ((de as any) as bigmod.Nat).SetUint($.uint((priv$ as PrivateKey).pub.E, 64)) : bigmod.Nat.prototype.SetUint.call(de, $.uint((priv$ as PrivateKey).pub.E, 64))), qMinus1)
	void (de !== null && (de as any).__isVarRef !== true && (de as any).__goValue === undefined ? ((de as any) as bigmod.Nat).Mul(dQ, qMinus1) : bigmod.Nat.prototype.Mul.call(de, dQ, qMinus1))
	if ((de !== null && (de as any).__isVarRef !== true && (de as any).__goValue === undefined ? ((de as any) as bigmod.Nat).IsOne() : bigmod.Nat.prototype.IsOne.call(de)) != 1) {
		return errors.New("crypto/rsa: invalid CRT exponent")
	}

	// Check that qInv * q ≡ 1 mod p.
	let __goscriptTuple17: any = bigmod.Nat.prototype.SetOverflowingBytes.call(bigmod.NewNat(), bigmod.Nat.prototype.Bytes.call((q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(q)), q), p)
	let qP: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple17[0]
	err = __goscriptTuple17[1]
	if (err != null) {
		// q >= 2^⌈log2(p)⌉
		qP = bigmod.Nat.prototype.Mod.call(bigmod.NewNat(), (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(q)), p)
	}
	if (bigmod.Nat.prototype.IsOne.call((qP !== null && (qP as any).__isVarRef !== true && (qP as any).__goValue === undefined ? ((qP as any) as bigmod.Nat).Mul((priv$ as PrivateKey).qInv, p) : bigmod.Nat.prototype.Mul.call(qP, (priv$ as PrivateKey).qInv, p))) != 1) {
		return errors.New("crypto/rsa: invalid CRT coefficient")
	}

	// Check d against dP and dQ, even though we never actually use d,
	// to make sure the key is consistent.
	let dP1: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.Nat.prototype.Mod.call(bigmod.NewNat(), (priv$ as PrivateKey).d, pMinus1)
	if ((dP1 !== null && (dP1 as any).__isVarRef !== true && (dP1 as any).__goValue === undefined ? ((dP1 as any) as bigmod.Nat).Equal(dP) : bigmod.Nat.prototype.Equal.call(dP1, dP)) != 1) {
		return errors.New("crypto/rsa: d does not match dP")
	}
	let dQ1: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.Nat.prototype.Mod.call(bigmod.NewNat(), (priv$ as PrivateKey).d, qMinus1)
	if ((dQ1 !== null && (dQ1 as any).__isVarRef !== true && (dQ1 as any).__goValue === undefined ? ((dQ1 as any) as bigmod.Nat).Equal(dQ) : bigmod.Nat.prototype.Equal.call(dQ1, dQ)) != 1) {
		return errors.New("crypto/rsa: d does not match dQ")
	}

	// Check that |p - q| > 2^(nlen/2 - 100).
	//
	// If p and q are very close to each other, then N=pq can be trivially
	// factored using Fermat's factorization method. Broken RSA implementations
	// do generate such keys. See Hanno Böck, Fermat Factorization in the Wild,
	// https://eprint.iacr.org/2023/026.pdf.
	let diff: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.NewNat()
	{
		let __goscriptTuple18: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), bigmod.Nat.prototype.Bytes.call((q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(q)), q), p)
		let __goscriptShadow3: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple18[0]
		let __goscriptShadow4 = __goscriptTuple18[1]
		if (__goscriptShadow4 != null) {
			// q > p
			let __goscriptTuple19: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), bigmod.Nat.prototype.Bytes.call((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(p)), p), q)
			let pQ: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple19[0]
			let __goscriptShadow5 = __goscriptTuple19[1]
			if (__goscriptShadow5 != null) {
				return errors.New("crypto/rsa: p == q")
			}
			// diff = 0 - p mod q = q - p
			bigmod.Nat.prototype.Sub.call((diff !== null && (diff as any).__isVarRef !== true && (diff as any).__goValue === undefined ? ((diff as any) as bigmod.Nat).ExpandFor(q) : bigmod.Nat.prototype.ExpandFor.call(diff, q)), pQ, q)
		} else {
			// p > q
			// diff = 0 - q mod p = p - q
			bigmod.Nat.prototype.Sub.call((diff !== null && (diff as any).__isVarRef !== true && (diff as any).__goValue === undefined ? ((diff as any) as bigmod.Nat).ExpandFor(p) : bigmod.Nat.prototype.ExpandFor.call(diff, p)), __goscriptShadow3, p)
		}
	}
	// A tiny bit of leakage is acceptable because it's not adaptive, an
	// attacker only learns the magnitude of p - q.
	if ((diff !== null && (diff as any).__isVarRef !== true && (diff as any).__goValue === undefined ? ((diff as any) as bigmod.Nat).BitLenVarTime() : bigmod.Nat.prototype.BitLenVarTime.call(diff)) <= ((globalThis.Math.trunc((N !== null && (N as any).__isVarRef !== true && (N as any).__goValue === undefined ? ((N as any) as bigmod.Modulus).BitLen() : bigmod.Modulus.prototype.BitLen.call(N)) / 2)) - 100)) {
		return errors.New("crypto/rsa: |p - q| too small")
	}

	// Check that d > 2^(nlen/2).
	//
	// See section 3 of https://crypto.stanford.edu/~dabo/papers/RSA-survey.pdf
	// for more details about attacks on small d values.
	//
	// Likewise, the leakage of the magnitude of d is not adaptive.
	if (bigmod.Nat.prototype.BitLenVarTime.call((priv$ as PrivateKey).d) <= (globalThis.Math.trunc((N !== null && (N as any).__isVarRef !== true && (N as any).__goValue === undefined ? ((N as any) as bigmod.Modulus).BitLen() : bigmod.Modulus.prototype.BitLen.call(N)) / 2))) {
		return errors.New("crypto/rsa: d too small")
	}

	return null
}

export function checkPublicKey(pub: PublicKey | $.VarRef<PublicKey> | null): [boolean, $.GoError] {
	let fipsApproved: boolean = false
	let err: $.GoError = null! as $.GoError
	const pub$: PublicKey = pub == null ? $.pointerTarget<PublicKey>(pub) : (pub as any).__isVarRef === true ? (pub as any).value : (pub as any).__goValue === undefined ? (pub as any) : $.pointerTarget<PublicKey>(pub)
	fipsApproved = true
	if ((pub$ as PublicKey).N == null) {
		return [false, errors.New("crypto/rsa: missing public modulus")]
	}
	if (bigmod.Nat.prototype.IsOdd.call(bigmod.Modulus.prototype.Nat.call((pub$ as PublicKey).N)) == 0) {
		return [false, errors.New("crypto/rsa: public modulus is even")]
	}
	// FIPS 186-5, Section 5.1: "This standard specifies the use of a modulus
	// whose bit length is an even integer and greater than or equal to 2048
	// bits."
	if (bigmod.Modulus.prototype.BitLen.call((pub$ as PublicKey).N) < 2048) {
		fipsApproved = false
	}
	if ((bigmod.Modulus.prototype.BitLen.call((pub$ as PublicKey).N) % 2) == 1) {
		fipsApproved = false
	}
	if ((pub$ as PublicKey).E < 2) {
		return [false, errors.New("crypto/rsa: public exponent too small or negative")]
	}
	// e needs to be coprime with p-1 and q-1, since it must be invertible
	// modulo λ(pq). Since p and q are prime, this means e needs to be odd.
	if (((pub$ as PublicKey).E & 1) == 0) {
		return [false, errors.New("crypto/rsa: public exponent is even")]
	}
	// FIPS 186-5, Section 5.5(e): "The exponent e shall be an odd, positive
	// integer such that 2¹⁶ < e < 2²⁵⁶."
	if ((pub$ as PublicKey).E <= 65536) {
		fipsApproved = false
	}
	// We require pub.E to fit into a 32-bit integer so that we
	// do not have different behavior depending on whether
	// int is 32 or 64 bits. See also
	// https://www.imperialviolet.org/2012/03/16/rsae.html.
	if ((pub$ as PublicKey).E > 2147483647) {
		return [false, errors.New("crypto/rsa: public exponent too large")]
	}
	return [fipsApproved, null]
}

export function Encrypt(pub: PublicKey | $.VarRef<PublicKey> | null, plaintext: $.Slice<number>): [$.Slice<number>, $.GoError] {
	fips140.RecordNonApproved()
	{
		let [, err] = checkPublicKey(pub)
		if (err != null) {
			return [null, err]
		}
	}
	return encrypt(pub, plaintext)
}

export function encrypt(pub: PublicKey | $.VarRef<PublicKey> | null, plaintext: $.Slice<number>): [$.Slice<number>, $.GoError] {
	const pub$: PublicKey = pub == null ? $.pointerTarget<PublicKey>(pub) : (pub as any).__isVarRef === true ? (pub as any).value : (pub as any).__goValue === undefined ? (pub as any) : $.pointerTarget<PublicKey>(pub)
	let __goscriptTuple20: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), plaintext, (pub$ as PublicKey).N)
	let m: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple20[0]
	let err = __goscriptTuple20[1]
	if (err != null) {
		return [null, err]
	}
	return [bigmod.Nat.prototype.Bytes.call(bigmod.Nat.prototype.ExpShortVarTime.call(bigmod.NewNat(), m, $.uint((pub$ as PublicKey).E, 64), (pub$ as PublicKey).N), (pub$ as PublicKey).N), null]
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

export function DecryptWithoutCheck(priv: PrivateKey | $.VarRef<PrivateKey> | null, ciphertext: $.Slice<number>): [$.Slice<number>, $.GoError] {
	fips140.RecordNonApproved()
	return decrypt(priv, ciphertext, false)
}

export function DecryptWithCheck(priv: PrivateKey | $.VarRef<PrivateKey> | null, ciphertext: $.Slice<number>): [$.Slice<number>, $.GoError] {
	fips140.RecordNonApproved()
	return decrypt(priv, ciphertext, true)
}

export function decrypt(priv: PrivateKey | $.VarRef<PrivateKey> | null, ciphertext: $.Slice<number>, check: boolean): [$.Slice<number>, $.GoError] {
	const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv)
	if (!(priv$ as PrivateKey).fipsApproved) {
		fips140.RecordNonApproved()
	}

	let m: bigmod.Nat | $.VarRef<bigmod.Nat> | null = null! as bigmod.Nat | $.VarRef<bigmod.Nat> | null
	let N: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = (priv$ as PrivateKey).pub.N
	let E = (priv$ as PrivateKey).pub.E

	let __goscriptTuple21: any = bigmod.Nat.prototype.SetBytes.call(bigmod.NewNat(), ciphertext, N)
	let c: bigmod.Nat | $.VarRef<bigmod.Nat> | null = __goscriptTuple21[0]
	let err = __goscriptTuple21[1]
	if (err != null) {
		return [null, ErrDecryption]
	}

	if ((priv$ as PrivateKey).dP == null) {
		// Legacy codepath for deprecated multi-prime keys.
		fips140.RecordNonApproved()
		m = bigmod.Nat.prototype.Exp.call(bigmod.NewNat(), c, bigmod.Nat.prototype.Bytes.call((priv$ as PrivateKey).d, N), N)
	} else {
		let P: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = (priv$ as PrivateKey).p
		let Q: bigmod.Modulus | $.VarRef<bigmod.Modulus> | null = (priv$ as PrivateKey).q
		let t0: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.NewNat()
		// m = c ^ Dp mod p
		m = bigmod.Nat.prototype.Exp.call(bigmod.NewNat(), (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as bigmod.Nat).Mod(c, P) : bigmod.Nat.prototype.Mod.call(t0, c, P)), (priv$ as PrivateKey).dP, P)
		// m2 = c ^ Dq mod q
		let m2: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.Nat.prototype.Exp.call(bigmod.NewNat(), (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as bigmod.Nat).Mod(c, Q) : bigmod.Nat.prototype.Mod.call(t0, c, Q)), (priv$ as PrivateKey).dQ, Q)
		// m = m - m2 mod p
		bigmod.Nat.prototype.Sub.call(m, (t0 !== null && (t0 as any).__isVarRef !== true && (t0 as any).__goValue === undefined ? ((t0 as any) as bigmod.Nat).Mod(m2, P) : bigmod.Nat.prototype.Mod.call(t0, m2, P)), P)
		// m = m * Qinv mod p
		void (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as bigmod.Nat).Mul((priv$ as PrivateKey).qInv, P) : bigmod.Nat.prototype.Mul.call(m, (priv$ as PrivateKey).qInv, P))
		// m = m * q mod N
		bigmod.Nat.prototype.Mul.call((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as bigmod.Nat).ExpandFor(N) : bigmod.Nat.prototype.ExpandFor.call(m, N)), bigmod.Nat.prototype.Mod.call(t0, (Q !== null && (Q as any).__isVarRef !== true && (Q as any).__goValue === undefined ? ((Q as any) as bigmod.Modulus).Nat() : bigmod.Modulus.prototype.Nat.call(Q)), N), N)
		// m = m + m2 mod N
		bigmod.Nat.prototype.Add.call(m, (m2 !== null && (m2 as any).__isVarRef !== true && (m2 as any).__goValue === undefined ? ((m2 as any) as bigmod.Nat).ExpandFor(N) : bigmod.Nat.prototype.ExpandFor.call(m2, N)), N)
	}

	if (check) {
		let c1: bigmod.Nat | $.VarRef<bigmod.Nat> | null = bigmod.Nat.prototype.ExpShortVarTime.call(bigmod.NewNat(), m, $.uint(E, 64), N)
		if ((c1 !== null && (c1 as any).__isVarRef !== true && (c1 as any).__goValue === undefined ? ((c1 as any) as bigmod.Nat).Equal(c) : bigmod.Nat.prototype.Equal.call(c1, c)) != 1) {
			return [null, ErrDecryption]
		}
	}

	return [(m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as bigmod.Nat).Bytes(N) : bigmod.Nat.prototype.Bytes.call(m, N)), null]
}
