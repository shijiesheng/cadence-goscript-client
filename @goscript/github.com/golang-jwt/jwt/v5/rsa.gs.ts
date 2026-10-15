// Generated file based on rsa.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as rand from "@goscript/crypto/rand/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"

import * as hash from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_errors_go1_20 from "./errors_go1_20.gs.ts"

import * as __goscript_signing_method from "./signing_method.gs.ts"
import "@goscript/crypto/index.js"
import "@goscript/crypto/rand/index.js"
import "@goscript/crypto/rsa/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"
import "./errors.gs.ts"
import "./errors_go1_20.gs.ts"
import "./signing_method.gs.ts"

$.registerTypePackagePath("github.com/golang-jwt/jwt/v5", ["jwt.SigningMethodRSA"])

export class SigningMethodRSA {
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

	public _fields: {
		Name: string
		Hash: crypto.Hash
	}

	constructor(init?: Partial<{Name?: string, Hash?: crypto.Hash}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Hash: init?.Hash ?? (0 as crypto.Hash)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SigningMethodRSA {
		return new SigningMethodRSA(this, true)
	}

	public __goscriptAssign(source: SigningMethodRSA): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Hash = values.Hash
	}

	public Alg(): string {
		const m: SigningMethodRSA | $.VarRef<SigningMethodRSA> | null = this;
		return $.pointerValue<SigningMethodRSA>(m).Name
	}

	public async Sign(signingString: string, key: any): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: SigningMethodRSA | $.VarRef<SigningMethodRSA> | null = this;
		const m$: SigningMethodRSA = m == null ? $.pointerTarget<SigningMethodRSA>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SigningMethodRSA>(m)
		let rsaKey: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null = null! as rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null
		let ok: boolean = false

		// Validate type of key
		{
			let __goscriptTuple0: any = $.typeAssertTuple<rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null>(key, /* @__PURE__ */ $.pointerType("rsa.PrivateKey"))
			rsaKey = __goscriptTuple0[0]
			ok = __goscriptTuple0[1]
			if (!ok) {
				return [null, __goscript_errors_go1_20.newError("RSA sign expects *rsa.PrivateKey", __goscript_errors.ErrInvalidKeyType, null)]
			}
		}

		// Create the hasher
		if (!crypto.Hash_Available((m$ as SigningMethodRSA).Hash)) {
			return [null, __goscript_errors.ErrHashUnavailable]
		}

		let hasher = await crypto.Hash_New((m$ as SigningMethodRSA).Hash)
		await (hasher !== null && (hasher as any).__isVarRef !== true && (hasher as any).__goValue === undefined ? (hasher as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hasher)).Write($.stringToBytes(signingString))

		// Sign the string and return the encoded bytes
		{
			let __goscriptTuple1: any = await rsa.SignPKCS1v15(rand.Reader, rsaKey, (m$ as SigningMethodRSA).Hash, await (hasher !== null && (hasher as any).__isVarRef !== true && (hasher as any).__goValue === undefined ? (hasher as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hasher)).Sum(null))
			let sigBytes: $.Slice<number> = __goscriptTuple1[0]
			let err = __goscriptTuple1[1]
			if (err == null) {
				return [sigBytes, null]
			} else {
				return [null, err]
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Verify(signingString: string, sig: $.Slice<number>, key: any): globalThis.Promise<$.GoError> {
		const m: SigningMethodRSA | $.VarRef<SigningMethodRSA> | null = this;
		const m$: SigningMethodRSA = m == null ? $.pointerTarget<SigningMethodRSA>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SigningMethodRSA>(m)
		let rsaKey: rsa.PublicKey | $.VarRef<rsa.PublicKey> | null = null! as rsa.PublicKey | $.VarRef<rsa.PublicKey> | null
		let ok: boolean = false

		{
			let __goscriptTuple2: any = $.typeAssertTuple<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(key, /* @__PURE__ */ $.pointerType("rsa.PublicKey"))
			rsaKey = __goscriptTuple2[0]
			ok = __goscriptTuple2[1]
			if (!ok) {
				return __goscript_errors_go1_20.newError("RSA verify expects *rsa.PublicKey", __goscript_errors.ErrInvalidKeyType, null)
			}
		}

		// Create hasher
		if (!crypto.Hash_Available((m$ as SigningMethodRSA).Hash)) {
			return __goscript_errors.ErrHashUnavailable
		}
		let hasher = await crypto.Hash_New((m$ as SigningMethodRSA).Hash)
		await (hasher !== null && (hasher as any).__isVarRef !== true && (hasher as any).__goValue === undefined ? (hasher as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hasher)).Write($.stringToBytes(signingString))

		// Verify the signature
		return rsa.VerifyPKCS1v15(rsaKey, (m$ as SigningMethodRSA).Hash, await (hasher !== null && (hasher as any).__isVarRef !== true && (hasher as any).__goValue === undefined ? (hasher as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hasher)).Sum(null), sig)
	}

	static __typeInfo = $.registerStructType(
		"jwt.SigningMethodRSA",
		() => new SigningMethodRSA(),
		() => [$.methodSignature("Alg", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sign", [["signingString", /* @__PURE__ */ $.basicType("string")], ["key", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Verify", [["signingString", /* @__PURE__ */ $.basicType("string")], ["sig", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["key", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true)],
		SigningMethodRSA,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [1], 16, true)]
	)
}

export let SigningMethodRS256: SigningMethodRSA | $.VarRef<SigningMethodRSA> | null = null! as SigningMethodRSA | $.VarRef<SigningMethodRSA> | null

export function __goscript_set_SigningMethodRS256(__goscriptValue: SigningMethodRSA | $.VarRef<SigningMethodRSA> | null): void {
	SigningMethodRS256 = __goscriptValue
}

export let SigningMethodRS384: SigningMethodRSA | $.VarRef<SigningMethodRSA> | null = null! as SigningMethodRSA | $.VarRef<SigningMethodRSA> | null

export function __goscript_set_SigningMethodRS384(__goscriptValue: SigningMethodRSA | $.VarRef<SigningMethodRSA> | null): void {
	SigningMethodRS384 = __goscriptValue
}

export let SigningMethodRS512: SigningMethodRSA | $.VarRef<SigningMethodRSA> | null = null! as SigningMethodRSA | $.VarRef<SigningMethodRSA> | null

export function __goscript_set_SigningMethodRS512(__goscriptValue: SigningMethodRSA | $.VarRef<SigningMethodRSA> | null): void {
	SigningMethodRS512 = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	// RS256
	SigningMethodRS256 = new SigningMethodRSA({Name: "RS256", Hash: 5})
	await __goscript_signing_method.RegisterSigningMethod((SigningMethodRS256 !== null && (SigningMethodRS256 as any).__isVarRef !== true && (SigningMethodRS256 as any).__goValue === undefined ? ((SigningMethodRS256 as any) as SigningMethodRSA).Alg() : SigningMethodRSA.prototype.Alg.call(SigningMethodRS256)), $.functionValue((): __goscript_signing_method.SigningMethod | null => {
		return $.interfaceValue<__goscript_signing_method.SigningMethod | null>(SigningMethodRS256, "*jwt.SigningMethodRSA", /* @__PURE__ */ $.pointerType("jwt.SigningMethodRSA"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["jwt.SigningMethod"] } as $.FunctionTypeInfo)))

	// RS384
	SigningMethodRS384 = new SigningMethodRSA({Name: "RS384", Hash: 6})
	await __goscript_signing_method.RegisterSigningMethod((SigningMethodRS384 !== null && (SigningMethodRS384 as any).__isVarRef !== true && (SigningMethodRS384 as any).__goValue === undefined ? ((SigningMethodRS384 as any) as SigningMethodRSA).Alg() : SigningMethodRSA.prototype.Alg.call(SigningMethodRS384)), $.functionValue((): __goscript_signing_method.SigningMethod | null => {
		return $.interfaceValue<__goscript_signing_method.SigningMethod | null>(SigningMethodRS384, "*jwt.SigningMethodRSA", /* @__PURE__ */ $.pointerType("jwt.SigningMethodRSA"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["jwt.SigningMethod"] } as $.FunctionTypeInfo)))

	// RS512
	SigningMethodRS512 = new SigningMethodRSA({Name: "RS512", Hash: 7})
	await __goscript_signing_method.RegisterSigningMethod((SigningMethodRS512 !== null && (SigningMethodRS512 as any).__isVarRef !== true && (SigningMethodRS512 as any).__goValue === undefined ? ((SigningMethodRS512 as any) as SigningMethodRSA).Alg() : SigningMethodRSA.prototype.Alg.call(SigningMethodRS512)), $.functionValue((): __goscript_signing_method.SigningMethod | null => {
		return $.interfaceValue<__goscript_signing_method.SigningMethod | null>(SigningMethodRS512, "*jwt.SigningMethodRSA", /* @__PURE__ */ $.pointerType("jwt.SigningMethodRSA"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["jwt.SigningMethod"] } as $.FunctionTypeInfo)))
}

export { __goscriptInit0 }
