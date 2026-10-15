// Generated file based on dsa.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as big from "@goscript/math/big/index.js"

import * as fips140only from "@goscript/crypto/internal/fips140only/index.js"

import * as rand2 from "@goscript/crypto/internal/rand/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/math/big/index.js"
import "@goscript/crypto/internal/fips140only/index.js"
import "@goscript/crypto/internal/rand/index.js"

$.registerTypePackagePath("crypto/dsa", ["dsa.Parameters", "dsa.PublicKey", "dsa.PrivateKey", "dsa.ParameterSizes"])

export type ParameterSizes = number

export class Parameters {
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

	public clone(): Parameters {
		return new Parameters(this, true)
	}

	public __goscriptAssign(source: Parameters): void {
		const target = this._fields
		const values = source._fields
		target.P = values.P
		target.Q = values.Q
		target.G = values.G
	}

	static __typeInfo = $.registerStructType(
		"dsa.Parameters",
		() => new Parameters(),
		() => [],
		Parameters,
		() => [/* @__PURE__ */ $.structField("P", /* @__PURE__ */ $.pointerType("big.Int"), [0], 0, true), /* @__PURE__ */ $.structField("Q", /* @__PURE__ */ $.pointerType("big.Int"), [1], 8, true), /* @__PURE__ */ $.structField("G", /* @__PURE__ */ $.pointerType("big.Int"), [2], 16, true)]
	)
}

export class PublicKey {
	public get Parameters(): Parameters {
		return this._fields.Parameters
	}

	public set Parameters(value: Parameters) {
		this._fields.Parameters = value
	}

	public get Y(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.Y
	}

	public set Y(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.Y = value
	}

	public _fields: {
		Parameters: Parameters
		Y: big.Int | $.VarRef<big.Int> | null
	}

	constructor(init?: Partial<{Parameters?: Parameters, Y?: big.Int | $.VarRef<big.Int> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Parameters: init?.Parameters ? init.Parameters.clone() : new Parameters(undefined, true),
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
		$.assignStruct(target.Parameters, values.Parameters)
		target.Y = values.Y
	}

	static __typeInfo = $.registerStructType(
		"dsa.PublicKey",
		() => new PublicKey(),
		() => [],
		PublicKey,
		() => [/* @__PURE__ */ $.structField("Parameters", "dsa.Parameters", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Y", /* @__PURE__ */ $.pointerType("big.Int"), [1], 24, true)]
	)
}

export class PrivateKey {
	public get PublicKey(): PublicKey {
		return this._fields.PublicKey
	}

	public set PublicKey(value: PublicKey) {
		this._fields.PublicKey = value
	}

	public get X(): big.Int | $.VarRef<big.Int> | null {
		return this._fields.X
	}

	public set X(value: big.Int | $.VarRef<big.Int> | null) {
		this._fields.X = value
	}

	public _fields: {
		PublicKey: PublicKey
		X: big.Int | $.VarRef<big.Int> | null
	}

	constructor(init?: Partial<{PublicKey?: PublicKey, X?: big.Int | $.VarRef<big.Int> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			PublicKey: init?.PublicKey ? init.PublicKey.clone() : new PublicKey(undefined, true),
			X: init?.X ?? (null! as big.Int | $.VarRef<big.Int> | null)
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
		target.X = values.X
	}

	static __typeInfo = $.registerStructType(
		"dsa.PrivateKey",
		() => new PrivateKey(),
		() => [],
		PrivateKey,
		() => [/* @__PURE__ */ $.structField("PublicKey", "dsa.PublicKey", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("X", /* @__PURE__ */ $.pointerType("big.Int"), [1], 32, true)]
	)
}

export const L1024N160: ParameterSizes = 0

export const L2048N224: ParameterSizes = 1

export const L2048N256: ParameterSizes = 2

export const L3072N256: ParameterSizes = 3

export const numMRTests: number = 64

export let ErrInvalidPublicKey: $.GoError = errors.New("crypto/dsa: invalid public key")

export function __goscript_set_ErrInvalidPublicKey(__goscriptValue: $.GoError): void {
	ErrInvalidPublicKey = __goscriptValue
}

export async function GenerateParameters(params: Parameters | $.VarRef<Parameters> | null, rand: io.Reader | null, sizes: ParameterSizes): globalThis.Promise<$.GoError> {
	const params$: Parameters = params == null ? $.pointerTarget<Parameters>(params) : (params as any).__isVarRef === true ? (params as any).value : (params as any).__goValue === undefined ? (params as any) : $.pointerTarget<Parameters>(params)
	if (fips140only.Enforced()) {
		return errors.New("crypto/dsa: use of DSA is not allowed in FIPS 140-only mode")
	}

	// This function doesn't follow FIPS 186-3 exactly in that it doesn't
	// use a verification seed to generate the primes. The verification
	// seed doesn't appear to be exported or used by other code and
	// omitting it makes the code cleaner.

	let L: number = 0
	let N: number = 0
	switch (sizes) {
		case 0:
		{
			L = 1024
			N = 160
			break
		}
		case 1:
		{
			L = 2048
			N = 224
			break
		}
		case 2:
		{
			L = 2048
			N = 256
			break
		}
		case 3:
		{
			L = 3072
			N = 256
			break
		}
		default:
		{
			return errors.New("crypto/dsa: invalid ParameterSizes")
			break
		}
	}

	let qBytes: $.Slice<number> = $.makeSlice<number>(globalThis.Math.trunc(N / 8), undefined, "byte")
	let pBytes: $.Slice<number> = $.makeSlice<number>(globalThis.Math.trunc(L / 8), undefined, "byte")

	let q: big.Int | $.VarRef<big.Int> | null = new big.Int()
	let p: big.Int | $.VarRef<big.Int> | null = new big.Int()
	let rem: big.Int | $.VarRef<big.Int> | null = new big.Int()
	let one: big.Int | $.VarRef<big.Int> | null = new big.Int()
	void (one !== null && (one as any).__isVarRef !== true && (one as any).__goValue === undefined ? ((one as any) as big.Int).SetInt64(1n) : big.Int.prototype.SetInt64.call(one, 1n))

	GeneratePrimes: for (let __goscriptSliceWindow0 = $.sliceRange(qBytes), __goscriptSliceWindow1 = $.sliceRange(pBytes); true; ) {
		{
			let [, err] = await io.ReadFull($.pointerValueOrNil(rand)!, qBytes)
			if (err != null) {
				return err
			}
		}

		const __goscriptOperand0 = __goscriptSliceWindow0.length - 1;
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, __goscriptOperand0)] = (__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, __goscriptOperand0)] | (1);
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, 0)] = (__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, 0)] | (0x80)
		void (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as big.Int).SetBytes(qBytes) : big.Int.prototype.SetBytes.call(q, qBytes))

		if (!await (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as big.Int).ProbablyPrime(64) : big.Int.prototype.ProbablyPrime.call(q, 64))) {
			continue
		}

		for (let i = 0; i < (4 * L); i++) {
			{
				let [, err] = await io.ReadFull($.pointerValueOrNil(rand)!, pBytes)
				if (err != null) {
					return err
				}
			}

			const __goscriptOperand1 = __goscriptSliceWindow1.length - 1;
			;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, __goscriptOperand1)] = (__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, __goscriptOperand1)] | (1);
			;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, 0)] = (__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, 0)] | (0x80)

			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as big.Int).SetBytes(pBytes) : big.Int.prototype.SetBytes.call(p, pBytes))
			await (rem !== null && (rem as any).__isVarRef !== true && (rem as any).__goValue === undefined ? ((rem as any) as big.Int).Mod(p, q) : big.Int.prototype.Mod.call(rem, p, q))
			void (rem !== null && (rem as any).__isVarRef !== true && (rem as any).__goValue === undefined ? ((rem as any) as big.Int).Sub(rem, one) : big.Int.prototype.Sub.call(rem, rem, one))
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as big.Int).Sub(p, rem) : big.Int.prototype.Sub.call(p, p, rem))
			if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as big.Int).BitLen() : big.Int.prototype.BitLen.call(p)) < L) {
				continue
			}

			if (!await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as big.Int).ProbablyPrime(64) : big.Int.prototype.ProbablyPrime.call(p, 64))) {
				continue
			}

			;(params$ as Parameters).P = p;
			;(params$ as Parameters).Q = q
			break GeneratePrimes
		}
	}

	let h: big.Int | $.VarRef<big.Int> | null = new big.Int()
	void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as big.Int).SetInt64(2n) : big.Int.prototype.SetInt64.call(h, 2n))
	let g: big.Int | $.VarRef<big.Int> | null = new big.Int()

	let pm1: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.Sub.call(new big.Int(), p, one)
	let e: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.Div.call(new big.Int(), pm1, q)

	while (true) {
		await (g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as big.Int).Exp(h, e, p) : big.Int.prototype.Exp.call(g, h, e, p))
		if ((g !== null && (g as any).__isVarRef !== true && (g as any).__goValue === undefined ? ((g as any) as big.Int).Cmp(one) : big.Int.prototype.Cmp.call(g, one)) == 0) {
			void (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? ((h as any) as big.Int).Add(h, one) : big.Int.prototype.Add.call(h, h, one))
			continue
		}

		;(params$ as Parameters).G = g
		return null
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function GenerateKey(priv: PrivateKey | $.VarRef<PrivateKey> | null, rand: io.Reader | null): globalThis.Promise<$.GoError> {
	const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv)
	if (fips140only.Enforced()) {
		return errors.New("crypto/dsa: use of DSA is not allowed in FIPS 140-only mode")
	}

	if ((((priv$ as PrivateKey).PublicKey.Parameters.P == null) || ((priv$ as PrivateKey).PublicKey.Parameters.Q == null)) || ((priv$ as PrivateKey).PublicKey.Parameters.G == null)) {
		return errors.New("crypto/dsa: parameters not set up before generating key")
	}

	let x: big.Int | $.VarRef<big.Int> | null = new big.Int()
	let xBytes: $.Slice<number> = $.makeSlice<number>(globalThis.Math.trunc(big.Int.prototype.BitLen.call((priv$ as PrivateKey).PublicKey.Parameters.Q) / 8), undefined, "byte")

	while (true) {
		let [, err] = await io.ReadFull($.pointerValueOrNil(rand)!, xBytes)
		if (err != null) {
			return err
		}
		void (x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).SetBytes(xBytes) : big.Int.prototype.SetBytes.call(x, xBytes))
		if (((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).Sign() : big.Int.prototype.Sign.call(x)) != 0) && ((x !== null && (x as any).__isVarRef !== true && (x as any).__goValue === undefined ? ((x as any) as big.Int).Cmp((priv$ as PrivateKey).PublicKey.Parameters.Q) : big.Int.prototype.Cmp.call(x, (priv$ as PrivateKey).PublicKey.Parameters.Q)) < 0)) {
			break
		}
	}

	;(priv$ as PrivateKey).X = x;
	;(priv$ as PrivateKey).PublicKey.Y = new big.Int()
	await big.Int.prototype.Exp.call((priv$ as PrivateKey).PublicKey.Y, (priv$ as PrivateKey).PublicKey.Parameters.G, x, (priv$ as PrivateKey).PublicKey.Parameters.P)
	return null
}

export async function fermatInverse(k: big.Int | $.VarRef<big.Int> | null, P: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<big.Int | $.VarRef<big.Int> | null> {
	let two: big.Int | $.VarRef<big.Int> | null = big.NewInt(2n)
	let pMinus2: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.Sub.call(new big.Int(), P, two)
	return big.Int.prototype.Exp.call(new big.Int(), k, pMinus2, P)
}

export async function Sign(random: io.Reader | null, priv: PrivateKey | $.VarRef<PrivateKey> | null, hash: $.Slice<number>): globalThis.Promise<[big.Int | $.VarRef<big.Int> | null, big.Int | $.VarRef<big.Int> | null, $.GoError]> {
	let r: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
	let s: big.Int | $.VarRef<big.Int> | null = null! as big.Int | $.VarRef<big.Int> | null
	let err: $.GoError = null! as $.GoError
	const priv$: PrivateKey = priv == null ? $.pointerTarget<PrivateKey>(priv) : (priv as any).__isVarRef === true ? (priv as any).value : (priv as any).__goValue === undefined ? (priv as any) : $.pointerTarget<PrivateKey>(priv)
	if (fips140only.Enforced()) {
		return [null, null, errors.New("crypto/dsa: use of DSA is not allowed in FIPS 140-only mode")]
	}

	random = await rand2.CustomReader(random)

	// FIPS 186-3, section 4.6

	let n = big.Int.prototype.BitLen.call((priv$ as PrivateKey).PublicKey.Parameters.Q)
	if (((((big.Int.prototype.Sign.call((priv$ as PrivateKey).PublicKey.Parameters.Q) <= 0) || (big.Int.prototype.Sign.call((priv$ as PrivateKey).PublicKey.Parameters.P) <= 0)) || (big.Int.prototype.Sign.call((priv$ as PrivateKey).PublicKey.Parameters.G) <= 0)) || (big.Int.prototype.Sign.call((priv$ as PrivateKey).X) <= 0)) || ((n % 8) != 0)) {
		err = ErrInvalidPublicKey
		return [r, s, err]
	}
	n = n >> (3)

	let attempts: number = 0
	for (attempts = 10; attempts > 0; attempts--) {
		let k: big.Int | $.VarRef<big.Int> | null = new big.Int()
		let buf: $.Slice<number> = $.makeSlice<number>(n, undefined, "byte")
		while (true) {
			let __goscriptTuple0: any = await io.ReadFull($.pointerValueOrNil(random)!, buf)
			err = __goscriptTuple0[1]
			if (err != null) {
				return [r, s, err]
			}
			void (k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as big.Int).SetBytes(buf) : big.Int.prototype.SetBytes.call(k, buf))
			// priv.Q must be >= 128 because the test above
			// requires it to be > 0 and that
			//    ceil(log_2(Q)) mod 8 = 0
			// Thus this loop will quickly terminate.
			if (((k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as big.Int).Sign() : big.Int.prototype.Sign.call(k)) > 0) && ((k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as big.Int).Cmp((priv$ as PrivateKey).PublicKey.Parameters.Q) : big.Int.prototype.Cmp.call(k, (priv$ as PrivateKey).PublicKey.Parameters.Q)) < 0)) {
				break
			}
		}

		let kInv: big.Int | $.VarRef<big.Int> | null = await fermatInverse(k, (priv$ as PrivateKey).PublicKey.Parameters.Q)

		r = await big.Int.prototype.Exp.call(new big.Int(), (priv$ as PrivateKey).PublicKey.Parameters.G, k, (priv$ as PrivateKey).PublicKey.Parameters.P)
		await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as big.Int).Mod(r, (priv$ as PrivateKey).PublicKey.Parameters.Q) : big.Int.prototype.Mod.call(r, r, (priv$ as PrivateKey).PublicKey.Parameters.Q))

		if ((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as big.Int).Sign() : big.Int.prototype.Sign.call(r)) == 0) {
			continue
		}

		let z: big.Int | $.VarRef<big.Int> | null = (k !== null && (k as any).__isVarRef !== true && (k as any).__goValue === undefined ? ((k as any) as big.Int).SetBytes(hash) : big.Int.prototype.SetBytes.call(k, hash))

		s = await big.Int.prototype.Mul.call(new big.Int(), (priv$ as PrivateKey).X, r)
		void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).Add(s, z) : big.Int.prototype.Add.call(s, s, z))
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).Mod(s, (priv$ as PrivateKey).PublicKey.Parameters.Q) : big.Int.prototype.Mod.call(s, s, (priv$ as PrivateKey).PublicKey.Parameters.Q))
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).Mul(s, kInv) : big.Int.prototype.Mul.call(s, s, kInv))
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).Mod(s, (priv$ as PrivateKey).PublicKey.Parameters.Q) : big.Int.prototype.Mod.call(s, s, (priv$ as PrivateKey).PublicKey.Parameters.Q))

		if ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).Sign() : big.Int.prototype.Sign.call(s)) != 0) {
			break
		}
	}

	// Only degenerate private keys will require more than a handful of
	// attempts.
	if (attempts == 0) {
		return [null, null, ErrInvalidPublicKey]
	}

	return [r, s, err]
}

export async function Verify(pub: PublicKey | $.VarRef<PublicKey> | null, hash: $.Slice<number>, r: big.Int | $.VarRef<big.Int> | null, s: big.Int | $.VarRef<big.Int> | null): globalThis.Promise<boolean> {
	const pub$: PublicKey = pub == null ? $.pointerTarget<PublicKey>(pub) : (pub as any).__isVarRef === true ? (pub as any).value : (pub as any).__goValue === undefined ? (pub as any) : $.pointerTarget<PublicKey>(pub)
	if (fips140only.Enforced()) {
		$.panic("crypto/dsa: use of DSA is not allowed in FIPS 140-only mode")
	}

	// FIPS 186-3, section 4.7

	if (big.Int.prototype.Sign.call((pub$ as PublicKey).Parameters.P) == 0) {
		return false
	}

	if (((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as big.Int).Sign() : big.Int.prototype.Sign.call(r)) < 1) || ((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as big.Int).Cmp((pub$ as PublicKey).Parameters.Q) : big.Int.prototype.Cmp.call(r, (pub$ as PublicKey).Parameters.Q)) >= 0)) {
		return false
	}
	if (((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).Sign() : big.Int.prototype.Sign.call(s)) < 1) || ((s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).Cmp((pub$ as PublicKey).Parameters.Q) : big.Int.prototype.Cmp.call(s, (pub$ as PublicKey).Parameters.Q)) >= 0)) {
		return false
	}

	let w: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.ModInverse.call(new big.Int(), s, (pub$ as PublicKey).Parameters.Q)
	if (w == null) {
		return false
	}

	let n = big.Int.prototype.BitLen.call((pub$ as PublicKey).Parameters.Q)
	if ((n % 8) != 0) {
		return false
	}
	let z: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.SetBytes.call(new big.Int(), hash)

	let u1: big.Int | $.VarRef<big.Int> | null = await big.Int.prototype.Mul.call(new big.Int(), z, w)
	await (u1 !== null && (u1 as any).__isVarRef !== true && (u1 as any).__goValue === undefined ? ((u1 as any) as big.Int).Mod(u1, (pub$ as PublicKey).Parameters.Q) : big.Int.prototype.Mod.call(u1, u1, (pub$ as PublicKey).Parameters.Q))
	let u2: big.Int | $.VarRef<big.Int> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as big.Int).Mul(r, w) : big.Int.prototype.Mul.call(w, r, w))
	await (u2 !== null && (u2 as any).__isVarRef !== true && (u2 as any).__goValue === undefined ? ((u2 as any) as big.Int).Mod(u2, (pub$ as PublicKey).Parameters.Q) : big.Int.prototype.Mod.call(u2, u2, (pub$ as PublicKey).Parameters.Q))
	let v: big.Int | $.VarRef<big.Int> | null = await (u1 !== null && (u1 as any).__isVarRef !== true && (u1 as any).__goValue === undefined ? ((u1 as any) as big.Int).Exp((pub$ as PublicKey).Parameters.G, u1, (pub$ as PublicKey).Parameters.P) : big.Int.prototype.Exp.call(u1, (pub$ as PublicKey).Parameters.G, u1, (pub$ as PublicKey).Parameters.P))
	await (u2 !== null && (u2 as any).__isVarRef !== true && (u2 as any).__goValue === undefined ? ((u2 as any) as big.Int).Exp((pub$ as PublicKey).Y, u2, (pub$ as PublicKey).Parameters.P) : big.Int.prototype.Exp.call(u2, (pub$ as PublicKey).Y, u2, (pub$ as PublicKey).Parameters.P))
	await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as big.Int).Mul(v, u2) : big.Int.prototype.Mul.call(v, v, u2))
	await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as big.Int).Mod(v, (pub$ as PublicKey).Parameters.P) : big.Int.prototype.Mod.call(v, v, (pub$ as PublicKey).Parameters.P))
	await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as big.Int).Mod(v, (pub$ as PublicKey).Parameters.Q) : big.Int.prototype.Mod.call(v, v, (pub$ as PublicKey).Parameters.Q))

	return (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as big.Int).Cmp(r) : big.Int.prototype.Cmp.call(v, r)) == 0
}
