// Generated file based on rsa_pss.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as rand from "@goscript/crypto/rand/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"

import * as hash from "@goscript/hash/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_errors_go1_20 from "./errors_go1_20.gs.ts"

import * as __goscript_rsa from "./rsa.gs.ts"

import * as __goscript_signing_method from "./signing_method.gs.ts"
import "@goscript/crypto/index.js"
import "@goscript/crypto/rand/index.js"
import "@goscript/crypto/rsa/index.js"
import "@goscript/hash/index.js"
import "@goscript/io/index.js"
import "./errors.gs.ts"
import "./errors_go1_20.gs.ts"
import "./rsa.gs.ts"
import "./signing_method.gs.ts"

$.registerTypePackagePath("github.com/golang-jwt/jwt/v5", ["jwt.SigningMethodRSAPSS"])

export class SigningMethodRSAPSS {
	public get SigningMethodRSA(): __goscript_rsa.SigningMethodRSA | $.VarRef<__goscript_rsa.SigningMethodRSA> | null {
		return this._fields.SigningMethodRSA
	}

	public set SigningMethodRSA(value: __goscript_rsa.SigningMethodRSA | $.VarRef<__goscript_rsa.SigningMethodRSA> | null) {
		this._fields.SigningMethodRSA = value
	}

	public get Options(): rsa.PSSOptions | $.VarRef<rsa.PSSOptions> | null {
		return this._fields.Options
	}

	public set Options(value: rsa.PSSOptions | $.VarRef<rsa.PSSOptions> | null) {
		this._fields.Options = value
	}

	// VerifyOptions is optional. If set overrides Options for rsa.VerifyPPS.
	// Used to accept tokens signed with rsa.PSSSaltLengthAuto, what doesn't follow
	// https://tools.ietf.org/html/rfc7518#section-3.5 but was used previously.
	// See https://github.com/dgrijalva/jwt-go/issues/285#issuecomment-437451244 for details.
	public get VerifyOptions(): rsa.PSSOptions | $.VarRef<rsa.PSSOptions> | null {
		return this._fields.VerifyOptions
	}

	public set VerifyOptions(value: rsa.PSSOptions | $.VarRef<rsa.PSSOptions> | null) {
		this._fields.VerifyOptions = value
	}

	public _fields: {
		SigningMethodRSA: __goscript_rsa.SigningMethodRSA | $.VarRef<__goscript_rsa.SigningMethodRSA> | null
		Options: rsa.PSSOptions | $.VarRef<rsa.PSSOptions> | null
		VerifyOptions: rsa.PSSOptions | $.VarRef<rsa.PSSOptions> | null
	}

	constructor(init?: Partial<{SigningMethodRSA?: __goscript_rsa.SigningMethodRSA | $.VarRef<__goscript_rsa.SigningMethodRSA> | null, Options?: rsa.PSSOptions | $.VarRef<rsa.PSSOptions> | null, VerifyOptions?: rsa.PSSOptions | $.VarRef<rsa.PSSOptions> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			SigningMethodRSA: init?.SigningMethodRSA ?? (null! as __goscript_rsa.SigningMethodRSA | $.VarRef<__goscript_rsa.SigningMethodRSA> | null),
			Options: init?.Options ?? (null! as rsa.PSSOptions | $.VarRef<rsa.PSSOptions> | null),
			VerifyOptions: init?.VerifyOptions ?? (null! as rsa.PSSOptions | $.VarRef<rsa.PSSOptions> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SigningMethodRSAPSS {
		return new SigningMethodRSAPSS(this, true)
	}

	public __goscriptAssign(source: SigningMethodRSAPSS): void {
		const target = this._fields
		const values = source._fields
		target.SigningMethodRSA = values.SigningMethodRSA
		target.Options = values.Options
		target.VerifyOptions = values.VerifyOptions
	}

	public async Sign(signingString: string, key: any): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: SigningMethodRSAPSS | $.VarRef<SigningMethodRSAPSS> | null = this;
		const m$: SigningMethodRSAPSS = m == null ? $.pointerTarget<SigningMethodRSAPSS>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SigningMethodRSAPSS>(m)
		let rsaKey: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null = null! as rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null

		{
			const __goscriptTypeSwitchValue = key
			switch (true) {
				case $.typeAssert<rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PrivateKey")).ok:
					{
						let k: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null = $.typeAssert<rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PrivateKey")).value
						rsaKey = k
					}
					break
				default:
					{
						let k: any = __goscriptTypeSwitchValue
						return [null, __goscript_errors_go1_20.newError("RSA-PSS sign expects *rsa.PrivateKey", __goscript_errors.ErrInvalidKeyType, null)]
					}
					break
			}
		}

		// Create the hasher
		if (!crypto.Hash_Available($.pointerValue<__goscript_rsa.SigningMethodRSA>((m$ as SigningMethodRSAPSS).SigningMethodRSA).Hash)) {
			return [null, __goscript_errors.ErrHashUnavailable]
		}

		let hasher = await crypto.Hash_New($.pointerValue<__goscript_rsa.SigningMethodRSA>((m$ as SigningMethodRSAPSS).SigningMethodRSA).Hash)
		await (hasher !== null && (hasher as any).__isVarRef !== true && (hasher as any).__goValue === undefined ? (hasher as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hasher)).Write($.stringToBytes(signingString))

		// Sign the string and return the encoded bytes
		{
			let __goscriptTuple0: any = await rsa.SignPSS(rand.Reader, rsaKey, $.pointerValue<__goscript_rsa.SigningMethodRSA>((m$ as SigningMethodRSAPSS).SigningMethodRSA).Hash, await (hasher !== null && (hasher as any).__isVarRef !== true && (hasher as any).__goValue === undefined ? (hasher as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hasher)).Sum(null), (m$ as SigningMethodRSAPSS).Options)
			let sigBytes: $.Slice<number> = __goscriptTuple0[0]
			let err = __goscriptTuple0[1]
			if (err == null) {
				return [sigBytes, null]
			} else {
				return [null, err]
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Verify(signingString: string, sig: $.Slice<number>, key: any): globalThis.Promise<$.GoError> {
		const m: SigningMethodRSAPSS | $.VarRef<SigningMethodRSAPSS> | null = this;
		const m$: SigningMethodRSAPSS = m == null ? $.pointerTarget<SigningMethodRSAPSS>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<SigningMethodRSAPSS>(m)
		let rsaKey: rsa.PublicKey | $.VarRef<rsa.PublicKey> | null = null! as rsa.PublicKey | $.VarRef<rsa.PublicKey> | null
		{
			const __goscriptTypeSwitchValue = key
			switch (true) {
				case $.typeAssert<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PublicKey")).ok:
					{
						let k: rsa.PublicKey | $.VarRef<rsa.PublicKey> | null = $.typeAssert<rsa.PublicKey | $.VarRef<rsa.PublicKey> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("rsa.PublicKey")).value
						rsaKey = k
					}
					break
				default:
					{
						let k: any = __goscriptTypeSwitchValue
						return __goscript_errors_go1_20.newError("RSA-PSS verify expects *rsa.PublicKey", __goscript_errors.ErrInvalidKeyType, null)
					}
					break
			}
		}

		// Create hasher
		if (!crypto.Hash_Available($.pointerValue<__goscript_rsa.SigningMethodRSA>((m$ as SigningMethodRSAPSS).SigningMethodRSA).Hash)) {
			return __goscript_errors.ErrHashUnavailable
		}
		let hasher = await crypto.Hash_New($.pointerValue<__goscript_rsa.SigningMethodRSA>((m$ as SigningMethodRSAPSS).SigningMethodRSA).Hash)
		await (hasher !== null && (hasher as any).__isVarRef !== true && (hasher as any).__goValue === undefined ? (hasher as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hasher)).Write($.stringToBytes(signingString))

		let opts: rsa.PSSOptions | $.VarRef<rsa.PSSOptions> | null = (m$ as SigningMethodRSAPSS).Options
		if ((m$ as SigningMethodRSAPSS).VerifyOptions != null) {
			opts = (m$ as SigningMethodRSAPSS).VerifyOptions
		}

		return rsa.VerifyPSS(rsaKey, $.pointerValue<__goscript_rsa.SigningMethodRSA>((m$ as SigningMethodRSAPSS).SigningMethodRSA).Hash, await (hasher !== null && (hasher as any).__isVarRef !== true && (hasher as any).__goValue === undefined ? (hasher as Exclude<hash.Hash, null>) : $.pointerValue<Exclude<hash.Hash, null>>(hasher)).Sum(null), sig, opts)
	}

	public Alg(): any {
		return $.pointerValue<__goscript_rsa.SigningMethodRSA>(this.SigningMethodRSA).Alg()
	}

	static __typeInfo = $.registerStructType(
		"jwt.SigningMethodRSAPSS",
		() => new SigningMethodRSAPSS(),
		() => [$.methodSignature("Sign", [["signingString", /* @__PURE__ */ $.basicType("string")], ["key", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Verify", [["signingString", /* @__PURE__ */ $.basicType("string")], ["sig", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["key", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("Alg", [], [/* @__PURE__ */ $.basicType("string")])],
		SigningMethodRSAPSS,
		() => [/* @__PURE__ */ $.structField("SigningMethodRSA", /* @__PURE__ */ $.pointerType("jwt.SigningMethodRSA"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Options", /* @__PURE__ */ $.pointerType("rsa.PSSOptions"), [1], 8, true), /* @__PURE__ */ $.structField("VerifyOptions", /* @__PURE__ */ $.pointerType("rsa.PSSOptions"), [2], 16, true)]
	)
}

export let SigningMethodPS256: SigningMethodRSAPSS | $.VarRef<SigningMethodRSAPSS> | null = null! as SigningMethodRSAPSS | $.VarRef<SigningMethodRSAPSS> | null

export function __goscript_set_SigningMethodPS256(__goscriptValue: SigningMethodRSAPSS | $.VarRef<SigningMethodRSAPSS> | null): void {
	SigningMethodPS256 = __goscriptValue
}

export let SigningMethodPS384: SigningMethodRSAPSS | $.VarRef<SigningMethodRSAPSS> | null = null! as SigningMethodRSAPSS | $.VarRef<SigningMethodRSAPSS> | null

export function __goscript_set_SigningMethodPS384(__goscriptValue: SigningMethodRSAPSS | $.VarRef<SigningMethodRSAPSS> | null): void {
	SigningMethodPS384 = __goscriptValue
}

export let SigningMethodPS512: SigningMethodRSAPSS | $.VarRef<SigningMethodRSAPSS> | null = null! as SigningMethodRSAPSS | $.VarRef<SigningMethodRSAPSS> | null

export function __goscript_set_SigningMethodPS512(__goscriptValue: SigningMethodRSAPSS | $.VarRef<SigningMethodRSAPSS> | null): void {
	SigningMethodPS512 = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	// PS256
	SigningMethodPS256 = new SigningMethodRSAPSS({SigningMethodRSA: new __goscript_rsa.SigningMethodRSA({Name: "PS256", Hash: 5}), Options: new rsa.PSSOptions({SaltLength: -1}), VerifyOptions: new rsa.PSSOptions({SaltLength: 0})})
	await __goscript_signing_method.RegisterSigningMethod($.pointerValue<__goscript_rsa.SigningMethodRSA>($.pointerValue<SigningMethodRSAPSS>(SigningMethodPS256).SigningMethodRSA).Alg(), $.functionValue((): __goscript_signing_method.SigningMethod | null => {
		return $.interfaceValue<__goscript_signing_method.SigningMethod | null>(SigningMethodPS256, "*jwt.SigningMethodRSAPSS", /* @__PURE__ */ $.pointerType("jwt.SigningMethodRSAPSS"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["jwt.SigningMethod"] } as $.FunctionTypeInfo)))

	// PS384
	SigningMethodPS384 = new SigningMethodRSAPSS({SigningMethodRSA: new __goscript_rsa.SigningMethodRSA({Name: "PS384", Hash: 6}), Options: new rsa.PSSOptions({SaltLength: -1}), VerifyOptions: new rsa.PSSOptions({SaltLength: 0})})
	await __goscript_signing_method.RegisterSigningMethod($.pointerValue<__goscript_rsa.SigningMethodRSA>($.pointerValue<SigningMethodRSAPSS>(SigningMethodPS384).SigningMethodRSA).Alg(), $.functionValue((): __goscript_signing_method.SigningMethod | null => {
		return $.interfaceValue<__goscript_signing_method.SigningMethod | null>(SigningMethodPS384, "*jwt.SigningMethodRSAPSS", /* @__PURE__ */ $.pointerType("jwt.SigningMethodRSAPSS"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["jwt.SigningMethod"] } as $.FunctionTypeInfo)))

	// PS512
	SigningMethodPS512 = new SigningMethodRSAPSS({SigningMethodRSA: new __goscript_rsa.SigningMethodRSA({Name: "PS512", Hash: 7}), Options: new rsa.PSSOptions({SaltLength: -1}), VerifyOptions: new rsa.PSSOptions({SaltLength: 0})})
	await __goscript_signing_method.RegisterSigningMethod($.pointerValue<__goscript_rsa.SigningMethodRSA>($.pointerValue<SigningMethodRSAPSS>(SigningMethodPS512).SigningMethodRSA).Alg(), $.functionValue((): __goscript_signing_method.SigningMethod | null => {
		return $.interfaceValue<__goscript_signing_method.SigningMethod | null>(SigningMethodPS512, "*jwt.SigningMethodRSAPSS", /* @__PURE__ */ $.pointerType("jwt.SigningMethodRSAPSS"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["jwt.SigningMethod"] } as $.FunctionTypeInfo)))
}

export { __goscriptInit0 }
