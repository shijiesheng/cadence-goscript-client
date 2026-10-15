// Generated file based on ed25519.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as ed25519 from "@goscript/crypto/ed25519/index.js"

import * as rand from "@goscript/crypto/rand/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_errors_go1_20 from "./errors_go1_20.gs.ts"

import * as __goscript_signing_method from "./signing_method.gs.ts"
import "@goscript/crypto/index.js"
import "@goscript/crypto/ed25519/index.js"
import "@goscript/crypto/rand/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "./errors.gs.ts"
import "./errors_go1_20.gs.ts"
import "./signing_method.gs.ts"

$.registerTypePackagePath("github.com/golang-jwt/jwt/v5", ["jwt.SigningMethodEd25519"])

export class SigningMethodEd25519 {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SigningMethodEd25519 {
		return new SigningMethodEd25519(this, true)
	}

	public __goscriptAssign(source: SigningMethodEd25519): void {
	}

	public Alg(): string {
		const m: SigningMethodEd25519 | $.VarRef<SigningMethodEd25519> | null = this;
		return "EdDSA"
	}

	public async Sign(signingString: string, key: any): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: SigningMethodEd25519 | $.VarRef<SigningMethodEd25519> | null = this;
		let ed25519Key: crypto.Signer | null = null! as crypto.Signer | null
		let ok: boolean = false

		{
			let __goscriptTuple0: any = $.typeAssertTuple<crypto.Signer | null>(key, "crypto.Signer")
			ed25519Key = __goscriptTuple0[0]
			ok = __goscriptTuple0[1]
			if (!ok) {
				return [null, __goscript_errors_go1_20.newError("Ed25519 sign expects crypto.Signer", __goscript_errors.ErrInvalidKeyType, null)]
			}
		}

		{
			let [, __goscriptShadow0] = $.typeAssertTuple<ed25519.PublicKey>((__goscriptAwait = (ed25519Key !== null && (ed25519Key as any).__isVarRef !== true && (ed25519Key as any).__goValue === undefined ? (ed25519Key as Exclude<crypto.Signer, null>) : $.pointerValue<Exclude<crypto.Signer, null>>(ed25519Key)).Public(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey"))
			if (!__goscriptShadow0) {
				return [null, __goscript_errors.ErrInvalidKey]
			}
		}

		// Sign the string and return the result. ed25519 performs a two-pass hash
		// as part of its algorithm. Therefore, we need to pass a non-prehashed
		// message into the Sign function, as indicated by crypto.Hash(0)
		let __goscriptTuple1: any = await (ed25519Key !== null && (ed25519Key as any).__isVarRef !== true && (ed25519Key as any).__goValue === undefined ? (ed25519Key as Exclude<crypto.Signer, null>) : $.pointerValue<Exclude<crypto.Signer, null>>(ed25519Key)).Sign(rand.Reader, $.stringToBytes(signingString), $.namedValueInterfaceValue<crypto.SignerOpts | null>(0, "crypto.Hash", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
		let sig: $.Slice<number> = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}

		return [sig, null]
	}

	public async Verify(signingString: string, sig: $.Slice<number>, key: any): globalThis.Promise<$.GoError> {
		const m: SigningMethodEd25519 | $.VarRef<SigningMethodEd25519> | null = this;
		let ed25519Key: ed25519.PublicKey = null! as ed25519.PublicKey
		let ok: boolean = false

		{
			let __goscriptTuple2: any = $.typeAssertTuple<ed25519.PublicKey>(key, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "ed25519.PublicKey"))
			ed25519Key = (__goscriptTuple2[0] as ed25519.PublicKey)
			ok = __goscriptTuple2[1]
			if (!ok) {
				return __goscript_errors_go1_20.newError("Ed25519 verify expects ed25519.PublicKey", __goscript_errors.ErrInvalidKeyType, null)
			}
		}

		if ($.sliceLen((ed25519Key as ed25519.PublicKey)) != 32) {
			return __goscript_errors.ErrInvalidKey
		}

		// Verify the signature
		if (!await ed25519.Verify((ed25519Key as ed25519.PublicKey), $.stringToBytes(signingString), sig)) {
			return ErrEd25519Verification
		}

		return null
	}

	static __typeInfo = $.registerStructType(
		"jwt.SigningMethodEd25519",
		() => new SigningMethodEd25519(),
		() => [$.methodSignature("Alg", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sign", [["signingString", /* @__PURE__ */ $.basicType("string")], ["key", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Verify", [["signingString", /* @__PURE__ */ $.basicType("string")], ["sig", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["key", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true)],
		SigningMethodEd25519,
		() => []
	)
}

export let ErrEd25519Verification: $.GoError = errors.New("ed25519: verification error")

export function __goscript_set_ErrEd25519Verification(__goscriptValue: $.GoError): void {
	ErrEd25519Verification = __goscriptValue
}

export let SigningMethodEdDSA: SigningMethodEd25519 | $.VarRef<SigningMethodEd25519> | null = null! as SigningMethodEd25519 | $.VarRef<SigningMethodEd25519> | null

export function __goscript_set_SigningMethodEdDSA(__goscriptValue: SigningMethodEd25519 | $.VarRef<SigningMethodEd25519> | null): void {
	SigningMethodEdDSA = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	SigningMethodEdDSA = new SigningMethodEd25519()
	await __goscript_signing_method.RegisterSigningMethod((SigningMethodEdDSA !== null && (SigningMethodEdDSA as any).__isVarRef !== true && (SigningMethodEdDSA as any).__goValue === undefined ? ((SigningMethodEdDSA as any) as SigningMethodEd25519).Alg() : SigningMethodEd25519.prototype.Alg.call(SigningMethodEdDSA)), $.functionValue((): __goscript_signing_method.SigningMethod | null => {
		return $.interfaceValue<__goscript_signing_method.SigningMethod | null>(SigningMethodEdDSA, "*jwt.SigningMethodEd25519", /* @__PURE__ */ $.pointerType("jwt.SigningMethodEd25519"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["jwt.SigningMethod"] } as $.FunctionTypeInfo)))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Available: (receiver: any, ...args: any[]) => (crypto.Hash_Available as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), HashFunc: (receiver: any, ...args: any[]) => (crypto.Hash_HashFunc as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), New: (receiver: any, ...args: any[]) => (crypto.Hash_New as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Size: (receiver: any, ...args: any[]) => (crypto.Hash_Size as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (crypto.Hash_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint", "crypto.Hash"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Available", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("HashFunc", [], [/* @__PURE__ */ $.basicType("uint", "crypto.Hash")]), $.methodSignature("New", [], ["hash.Hash"]), $.methodSignature("Size", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any

export { __goscriptInit0 }
