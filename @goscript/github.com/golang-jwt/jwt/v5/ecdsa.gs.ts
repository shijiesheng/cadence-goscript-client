// Generated file based on ecdsa.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as ecdsa from "@goscript/crypto/ecdsa/index.js"

import * as rand from "@goscript/crypto/rand/index.js"

import * as errors from "@goscript/errors/index.js"

import * as big from "@goscript/math/big/index.js"

import * as elliptic from "@goscript/crypto/elliptic/index.js"

import * as hash from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_errors_go1_20 from "./errors_go1_20.gs.ts"

import * as __goscript_signing_method from "./signing_method.gs.ts"
import "@goscript/crypto/index.js"
import "@goscript/crypto/ecdsa/index.js"
import "@goscript/crypto/rand/index.js"
import "@goscript/errors/index.js"
import "@goscript/math/big/index.js"
import "@goscript/crypto/elliptic/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"
import "./errors.gs.ts"
import "./errors_go1_20.gs.ts"
import "./signing_method.gs.ts"

$.registerTypePackagePath("github.com/golang-jwt/jwt/v5", ["jwt.SigningMethodECDSA"])

export class SigningMethodECDSA {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Hash(): crypto.Hash {
		return this._fields.Hash
	}

	public set Hash(value: crypto.Hash) {
		this._fields.Hash = value
	}

	public get KeySize(): number {
		return this._fields.KeySize
	}

	public set KeySize(value: number) {
		this._fields.KeySize = value
	}

	public get CurveBits(): number {
		return this._fields.CurveBits
	}

	public set CurveBits(value: number) {
		this._fields.CurveBits = value
	}

	public _fields: {
		Name: string
		Hash: crypto.Hash
		KeySize: number
		CurveBits: number
	}

	constructor(init?: Partial<{Name?: string, Hash?: crypto.Hash, KeySize?: number, CurveBits?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Hash: init?.Hash ?? (0 as crypto.Hash),
			KeySize: init?.KeySize ?? (0 as number),
			CurveBits: init?.CurveBits ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SigningMethodECDSA {
		return new SigningMethodECDSA(this, true)
	}

	public __goscriptAssign(source: SigningMethodECDSA): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Hash = values.Hash
		target.KeySize = values.KeySize
		target.CurveBits = values.CurveBits
	}

	public Alg(): string {
		const m: SigningMethodECDSA | $.VarRef<SigningMethodECDSA> | null = this;
		return $.pointerValue<SigningMethodECDSA>(m).Name
	}

	public async Sign(signingString: string, key: any): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: SigningMethodECDSA | $.VarRef<SigningMethodECDSA> | null = this;
		const m$: SigningMethodECDSA = m == null ? $.pointerTarget<SigningMethodECDSA>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SigningMethodECDSA>(m)
		// Get the key
		let ecdsaKey: ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null = null! as ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null
		{
			const __goscriptTypeSwitchValue = key
			switch (true) {
				case $.typeAssert<ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PrivateKey")).ok:
					{
						let k: ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null = $.typeAssert<ecdsa.PrivateKey | $.VarRef<ecdsa.PrivateKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PrivateKey")).value
						ecdsaKey = k
					}
					break
				default:
					{
						let k: any = __goscriptTypeSwitchValue
						return [null, __goscript_errors_go1_20.newError("ECDSA sign expects *ecsda.PrivateKey", __goscript_errors.ErrInvalidKeyType, null)]
					}
					break
			}
		}

		// Create the hasher
		if (!crypto.Hash_Available((m$ as SigningMethodECDSA).Hash)) {
			return [null, __goscript_errors.ErrHashUnavailable]
		}

		let hasher = await crypto.Hash_New((m$ as SigningMethodECDSA).Hash)
		await (hasher !== null && (hasher as any).__isVarRef !== true && (hasher as any).__goValue === undefined ? (hasher as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hasher)).Write($.stringToBytes(signingString))

		// Sign the string and return r, s
		{
			let __goscriptTuple0: any = await ecdsa.Sign(rand.Reader, ecdsaKey, await (hasher !== null && (hasher as any).__isVarRef !== true && (hasher as any).__goValue === undefined ? (hasher as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hasher)).Sum(null))
			let r: big.Int | $.VarRef<big.Int> | null = __goscriptTuple0[0]
			let s: big.Int | $.VarRef<big.Int> | null = __goscriptTuple0[1]
			let err = __goscriptTuple0[2]
			if (err == null) {
				let curveBits = $.pointerValue<elliptic.CurveParams>(((__goscriptAwait = $.pointerValue<Exclude<elliptic.Curve, null>>($.pointerValue<ecdsa.PrivateKey>(ecdsaKey).PublicKey.Curve).Params(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as elliptic.CurveParams | $.VarRef<elliptic.CurveParams> | null)).BitSize

				if ((m$ as SigningMethodECDSA).CurveBits != curveBits) {
					return [null, __goscript_errors.ErrInvalidKey]
				}

				let keyBytes = globalThis.Math.trunc(curveBits / 8)
				if ((curveBits % 8) > 0) {
					keyBytes = keyBytes + (1)
				}

				// We serialize the outputs (r and s) into big-endian byte arrays
				// padded with zeros on the left to make sure the sizes work out.
				// Output must be 2*keyBytes long.
				let out: $.Slice<number> = $.makeSlice<number>(2 * keyBytes, undefined, "byte")
				void (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as big.Int).FillBytes($.goSlice(out, 0, keyBytes)) : big.Int.prototype.FillBytes.call(r, $.goSlice(out, 0, keyBytes)))
				void (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as big.Int).FillBytes($.goSlice(out, keyBytes, undefined)) : big.Int.prototype.FillBytes.call(s, $.goSlice(out, keyBytes, undefined)))

				return [out, null]
			} else {
				return [null, err]
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Verify(signingString: string, sig: $.Slice<number>, key: any): globalThis.Promise<$.GoError> {
		const m: SigningMethodECDSA | $.VarRef<SigningMethodECDSA> | null = this;
		const m$: SigningMethodECDSA = m == null ? $.pointerTarget<SigningMethodECDSA>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SigningMethodECDSA>(m)
		// Get the key
		let ecdsaKey: ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null = null! as ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null
		{
			const __goscriptTypeSwitchValue = key
			switch (true) {
				case $.typeAssert<ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")).ok:
					{
						let k: ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null = $.typeAssert<ecdsa.PublicKey | $.VarRef<ecdsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("ecdsa.PublicKey")).value
						ecdsaKey = k
					}
					break
				default:
					{
						let k: any = __goscriptTypeSwitchValue
						return __goscript_errors_go1_20.newError("ECDSA verify expects *ecsda.PublicKey", __goscript_errors.ErrInvalidKeyType, null)
					}
					break
			}
		}

		if ($.sliceLen(sig) != (2 * (m$ as SigningMethodECDSA).KeySize)) {
			return ErrECDSAVerification
		}

		let r: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.SetBytes.call(big.NewInt(0n), $.goSlice(sig, undefined, (m$ as SigningMethodECDSA).KeySize))
		let s: big.Int | $.VarRef<big.Int> | null = big.Int.prototype.SetBytes.call(big.NewInt(0n), $.goSlice(sig, (m$ as SigningMethodECDSA).KeySize, undefined))

		// Create hasher
		if (!crypto.Hash_Available((m$ as SigningMethodECDSA).Hash)) {
			return __goscript_errors.ErrHashUnavailable
		}
		let hasher = await crypto.Hash_New((m$ as SigningMethodECDSA).Hash)
		await (hasher !== null && (hasher as any).__isVarRef !== true && (hasher as any).__goValue === undefined ? (hasher as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hasher)).Write($.stringToBytes(signingString))

		// Verify the signature
		{
			let verifystatus = await ecdsa.Verify(ecdsaKey, await (hasher !== null && (hasher as any).__isVarRef !== true && (hasher as any).__goValue === undefined ? (hasher as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hasher)).Sum(null), r, s)
			if (verifystatus) {
				return null
			}
		}

		return ErrECDSAVerification
	}

	static __typeInfo = $.registerStructType(
		"jwt.SigningMethodECDSA",
		() => new SigningMethodECDSA(),
		() => [$.methodSignature("Alg", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sign", [["signingString", /* @__PURE__ */ $.basicType("string")], ["key", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Verify", [["signingString", /* @__PURE__ */ $.basicType("string")], ["sig", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["key", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true)],
		SigningMethodECDSA,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [1], 16, true), /* @__PURE__ */ $.structField("KeySize", /* @__PURE__ */ $.basicType("int"), [2], 24, true), /* @__PURE__ */ $.structField("CurveBits", /* @__PURE__ */ $.basicType("int"), [3], 32, true)]
	)
}

export let ErrECDSAVerification: $.GoError = errors.New("crypto/ecdsa: verification error")

export function __goscript_set_ErrECDSAVerification(__goscriptValue: $.GoError): void {
	ErrECDSAVerification = __goscriptValue
}

export let SigningMethodES256: SigningMethodECDSA | $.VarRef<SigningMethodECDSA> | null = null! as SigningMethodECDSA | $.VarRef<SigningMethodECDSA> | null

export function __goscript_set_SigningMethodES256(__goscriptValue: SigningMethodECDSA | $.VarRef<SigningMethodECDSA> | null): void {
	SigningMethodES256 = __goscriptValue
}

export let SigningMethodES384: SigningMethodECDSA | $.VarRef<SigningMethodECDSA> | null = null! as SigningMethodECDSA | $.VarRef<SigningMethodECDSA> | null

export function __goscript_set_SigningMethodES384(__goscriptValue: SigningMethodECDSA | $.VarRef<SigningMethodECDSA> | null): void {
	SigningMethodES384 = __goscriptValue
}

export let SigningMethodES512: SigningMethodECDSA | $.VarRef<SigningMethodECDSA> | null = null! as SigningMethodECDSA | $.VarRef<SigningMethodECDSA> | null

export function __goscript_set_SigningMethodES512(__goscriptValue: SigningMethodECDSA | $.VarRef<SigningMethodECDSA> | null): void {
	SigningMethodES512 = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	// ES256
	SigningMethodES256 = new SigningMethodECDSA({Name: "ES256", Hash: 5, KeySize: 32, CurveBits: 256})
	await __goscript_signing_method.RegisterSigningMethod((SigningMethodES256 !== null && (SigningMethodES256 as any).__isVarRef !== true && (SigningMethodES256 as any).__goValue === undefined ? ((SigningMethodES256 as any) as SigningMethodECDSA).Alg() : SigningMethodECDSA.prototype.Alg.call(SigningMethodES256)), $.functionValue((): __goscript_signing_method.SigningMethod | null => {
		return $.interfaceValue<__goscript_signing_method.SigningMethod | null>(SigningMethodES256, "*jwt.SigningMethodECDSA", /* @__PURE__ */ $.pointerType("jwt.SigningMethodECDSA"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["jwt.SigningMethod"] } as $.FunctionTypeInfo)))

	// ES384
	SigningMethodES384 = new SigningMethodECDSA({Name: "ES384", Hash: 6, KeySize: 48, CurveBits: 384})
	await __goscript_signing_method.RegisterSigningMethod((SigningMethodES384 !== null && (SigningMethodES384 as any).__isVarRef !== true && (SigningMethodES384 as any).__goValue === undefined ? ((SigningMethodES384 as any) as SigningMethodECDSA).Alg() : SigningMethodECDSA.prototype.Alg.call(SigningMethodES384)), $.functionValue((): __goscript_signing_method.SigningMethod | null => {
		return $.interfaceValue<__goscript_signing_method.SigningMethod | null>(SigningMethodES384, "*jwt.SigningMethodECDSA", /* @__PURE__ */ $.pointerType("jwt.SigningMethodECDSA"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["jwt.SigningMethod"] } as $.FunctionTypeInfo)))

	// ES512
	SigningMethodES512 = new SigningMethodECDSA({Name: "ES512", Hash: 7, KeySize: 66, CurveBits: 521})
	await __goscript_signing_method.RegisterSigningMethod((SigningMethodES512 !== null && (SigningMethodES512 as any).__isVarRef !== true && (SigningMethodES512 as any).__goValue === undefined ? ((SigningMethodES512 as any) as SigningMethodECDSA).Alg() : SigningMethodECDSA.prototype.Alg.call(SigningMethodES512)), $.functionValue((): __goscript_signing_method.SigningMethod | null => {
		return $.interfaceValue<__goscript_signing_method.SigningMethod | null>(SigningMethodES512, "*jwt.SigningMethodECDSA", /* @__PURE__ */ $.pointerType("jwt.SigningMethodECDSA"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["jwt.SigningMethod"] } as $.FunctionTypeInfo)))
}

var __goscriptAwait: any

export { __goscriptInit0 }
