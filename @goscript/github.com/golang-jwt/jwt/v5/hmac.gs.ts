// Generated file based on hmac.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as hmac from "@goscript/crypto/hmac/index.js"

import * as errors from "@goscript/errors/index.js"

import * as hash from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_errors_go1_20 from "./errors_go1_20.gs.ts"

import * as __goscript_signing_method from "./signing_method.gs.ts"
import "@goscript/crypto/index.js"
import "@goscript/crypto/hmac/index.js"
import "@goscript/errors/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"
import "./errors.gs.ts"
import "./errors_go1_20.gs.ts"
import "./signing_method.gs.ts"

$.registerTypePackagePath("github.com/golang-jwt/jwt/v5", ["jwt.SigningMethodHMAC"])

export class SigningMethodHMAC {
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

	public clone(): SigningMethodHMAC {
		return new SigningMethodHMAC(this, true)
	}

	public __goscriptAssign(source: SigningMethodHMAC): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Hash = values.Hash
	}

	public Alg(): string {
		const m: SigningMethodHMAC | $.VarRef<SigningMethodHMAC> | null = this;
		return $.pointerValue<SigningMethodHMAC>(m).Name
	}

	public async Sign(signingString: string, key: any): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: SigningMethodHMAC | $.VarRef<SigningMethodHMAC> | null = this;
		const m$: SigningMethodHMAC = m == null ? $.pointerTarget<SigningMethodHMAC>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SigningMethodHMAC>(m)
		{
			let __goscriptTuple0: any = $.typeAssertTuple<$.Slice<number>>(key, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
			let keyBytes: $.Slice<number> = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				if (!crypto.Hash_Available((m$ as SigningMethodHMAC).Hash)) {
					return [null, __goscript_errors_go1_20.newError("HMAC sign expects []byte", __goscript_errors.ErrInvalidKeyType, null)]
				}

				let hasher = await hmac.New($.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))((m$ as SigningMethodHMAC).Hash), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm"), keyBytes)
				await (hasher !== null && (hasher as any).__isVarRef !== true && (hasher as any).__goValue === undefined ? (hasher as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hasher)).Write($.stringToBytes(signingString))

				return [await (hasher !== null && (hasher as any).__isVarRef !== true && (hasher as any).__goValue === undefined ? (hasher as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hasher)).Sum(null), null]
			}
		}

		return [null, __goscript_errors.ErrInvalidKeyType]
	}

	public async Verify(signingString: string, sig: $.Slice<number>, key: any): globalThis.Promise<$.GoError> {
		const m: SigningMethodHMAC | $.VarRef<SigningMethodHMAC> | null = this;
		const m$: SigningMethodHMAC = m == null ? $.pointerTarget<SigningMethodHMAC>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SigningMethodHMAC>(m)
		// Verify the key is the right type
		let __goscriptTuple1: any = $.typeAssertTuple<$.Slice<number>>(key, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
		let keyBytes: $.Slice<number> = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (!ok) {
			return __goscript_errors_go1_20.newError("HMAC verify expects []byte", __goscript_errors.ErrInvalidKeyType, null)
		}

		// Can we use the specified hashing method?
		if (!crypto.Hash_Available((m$ as SigningMethodHMAC).Hash)) {
			return __goscript_errors.ErrHashUnavailable
		}

		// This signing method is symmetric, so we validate the signature
		// by reproducing the signature from the signing string and key, then
		// comparing that against the provided signature.
		let hasher = await hmac.New($.functionValue(((__receiver) => () => crypto.Hash_New(__receiver))((m$ as SigningMethodHMAC).Hash), ({ kind: $.TypeKind.Function, params: [], results: ["hash.Hash"] } as $.FunctionTypeInfo), "crypto.Hash.New-fm"), keyBytes)
		await (hasher !== null && (hasher as any).__isVarRef !== true && (hasher as any).__goValue === undefined ? (hasher as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hasher)).Write($.stringToBytes(signingString))
		if (!hmac.Equal(sig, await (hasher !== null && (hasher as any).__isVarRef !== true && (hasher as any).__goValue === undefined ? (hasher as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hasher)).Sum(null))) {
			return ErrSignatureInvalid
		}

		// No validation errors.  Signature is good.
		return null
	}

	static __typeInfo = $.registerStructType(
		"jwt.SigningMethodHMAC",
		() => new SigningMethodHMAC(),
		() => [$.methodSignature("Alg", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sign", [["signingString", /* @__PURE__ */ $.basicType("string")], ["key", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Verify", [["signingString", /* @__PURE__ */ $.basicType("string")], ["sig", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["key", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true)],
		SigningMethodHMAC,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Hash", /* @__PURE__ */ $.basicType("uint", "crypto.Hash"), [1], 16, true)]
	)
}

export let SigningMethodHS256: SigningMethodHMAC | $.VarRef<SigningMethodHMAC> | null = null! as SigningMethodHMAC | $.VarRef<SigningMethodHMAC> | null

export function __goscript_set_SigningMethodHS256(__goscriptValue: SigningMethodHMAC | $.VarRef<SigningMethodHMAC> | null): void {
	SigningMethodHS256 = __goscriptValue
}

export let SigningMethodHS384: SigningMethodHMAC | $.VarRef<SigningMethodHMAC> | null = null! as SigningMethodHMAC | $.VarRef<SigningMethodHMAC> | null

export function __goscript_set_SigningMethodHS384(__goscriptValue: SigningMethodHMAC | $.VarRef<SigningMethodHMAC> | null): void {
	SigningMethodHS384 = __goscriptValue
}

export let SigningMethodHS512: SigningMethodHMAC | $.VarRef<SigningMethodHMAC> | null = null! as SigningMethodHMAC | $.VarRef<SigningMethodHMAC> | null

export function __goscript_set_SigningMethodHS512(__goscriptValue: SigningMethodHMAC | $.VarRef<SigningMethodHMAC> | null): void {
	SigningMethodHS512 = __goscriptValue
}

export let ErrSignatureInvalid: $.GoError = errors.New("signature is invalid")

export function __goscript_set_ErrSignatureInvalid(__goscriptValue: $.GoError): void {
	ErrSignatureInvalid = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	// HS256
	SigningMethodHS256 = new SigningMethodHMAC({Name: "HS256", Hash: 5})
	await __goscript_signing_method.RegisterSigningMethod((SigningMethodHS256 !== null && (SigningMethodHS256 as any).__isVarRef !== true && (SigningMethodHS256 as any).__goValue === undefined ? ((SigningMethodHS256 as any) as SigningMethodHMAC).Alg() : SigningMethodHMAC.prototype.Alg.call(SigningMethodHS256)), $.functionValue((): __goscript_signing_method.SigningMethod | null => {
		return $.interfaceValue<__goscript_signing_method.SigningMethod | null>(SigningMethodHS256, "*jwt.SigningMethodHMAC", /* @__PURE__ */ $.pointerType("jwt.SigningMethodHMAC"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["jwt.SigningMethod"] } as $.FunctionTypeInfo)))

	// HS384
	SigningMethodHS384 = new SigningMethodHMAC({Name: "HS384", Hash: 6})
	await __goscript_signing_method.RegisterSigningMethod((SigningMethodHS384 !== null && (SigningMethodHS384 as any).__isVarRef !== true && (SigningMethodHS384 as any).__goValue === undefined ? ((SigningMethodHS384 as any) as SigningMethodHMAC).Alg() : SigningMethodHMAC.prototype.Alg.call(SigningMethodHS384)), $.functionValue((): __goscript_signing_method.SigningMethod | null => {
		return $.interfaceValue<__goscript_signing_method.SigningMethod | null>(SigningMethodHS384, "*jwt.SigningMethodHMAC", /* @__PURE__ */ $.pointerType("jwt.SigningMethodHMAC"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["jwt.SigningMethod"] } as $.FunctionTypeInfo)))

	// HS512
	SigningMethodHS512 = new SigningMethodHMAC({Name: "HS512", Hash: 7})
	await __goscript_signing_method.RegisterSigningMethod((SigningMethodHS512 !== null && (SigningMethodHS512 as any).__isVarRef !== true && (SigningMethodHS512 as any).__goValue === undefined ? ((SigningMethodHS512 as any) as SigningMethodHMAC).Alg() : SigningMethodHMAC.prototype.Alg.call(SigningMethodHS512)), $.functionValue((): __goscript_signing_method.SigningMethod | null => {
		return $.interfaceValue<__goscript_signing_method.SigningMethod | null>(SigningMethodHS512, "*jwt.SigningMethodHMAC", /* @__PURE__ */ $.pointerType("jwt.SigningMethodHMAC"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["jwt.SigningMethod"] } as $.FunctionTypeInfo)))
}

export { __goscriptInit0 }
