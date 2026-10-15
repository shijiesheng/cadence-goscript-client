// Generated file based on none.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_errors_go1_20 from "./errors_go1_20.gs.ts"

import * as __goscript_signing_method from "./signing_method.gs.ts"
import "./errors.gs.ts"
import "./errors_go1_20.gs.ts"
import "./signing_method.gs.ts"

$.registerTypePackagePath("github.com/golang-jwt/jwt/v5", ["jwt.signingMethodNone", "jwt.unsafeNoneMagicConstant"])

export type unsafeNoneMagicConstant = string

export class signingMethodNone {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): signingMethodNone {
		return new signingMethodNone(this, true)
	}

	public __goscriptAssign(source: signingMethodNone): void {
	}

	public Alg(): string {
		const m: signingMethodNone | $.VarRef<signingMethodNone> | null = this;
		return "none"
	}

	public Sign(signingString: string, key: any): [$.Slice<number>, $.GoError] {
		const m: signingMethodNone | $.VarRef<signingMethodNone> | null = this;
		{
			let [, ok] = $.typeAssertTuple<unsafeNoneMagicConstant>(key, /* @__PURE__ */ $.basicType("string", "jwt.unsafeNoneMagicConstant"))
			if (ok) {
				return [new Uint8Array([]) as $.Slice<number>, null]
			}
		}

		return [null, NoneSignatureTypeDisallowedError]
	}

	public Verify(signingString: string, sig: $.Slice<number>, key: any): $.GoError {
		const m: signingMethodNone | $.VarRef<signingMethodNone> | null = this;
		let err: $.GoError = null! as $.GoError
		// Key must be UnsafeAllowNoneSignatureType to prevent accidentally
		// accepting 'none' signing method
		{
			let [, ok] = $.typeAssertTuple<unsafeNoneMagicConstant>(key, /* @__PURE__ */ $.basicType("string", "jwt.unsafeNoneMagicConstant"))
			if (!ok) {
				return NoneSignatureTypeDisallowedError
			}
		}
		// If signing method is none, signature must be an empty string
		if ($.sliceLen(sig) != 0) {
			return __goscript_errors_go1_20.newError("'none' signing method with non-empty signature", __goscript_errors.ErrTokenUnverifiable, null)
		}

		// Accept 'none' signing method.
		return null
	}

	static __typeInfo = $.registerStructType(
		"jwt.signingMethodNone",
		() => new signingMethodNone(),
		() => [$.methodSignature("Alg", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Sign", [["signingString", /* @__PURE__ */ $.basicType("string")], ["key", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Verify", [["signingString", /* @__PURE__ */ $.basicType("string")], ["sig", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["key", { kind: $.TypeKind.Interface, methods: [] }]], [["err", "error"]], true)],
		signingMethodNone,
		() => []
	)
}

export const UnsafeAllowNoneSignatureType: unsafeNoneMagicConstant = "none signing method allowed"

export let SigningMethodNone: signingMethodNone | $.VarRef<signingMethodNone> | null = null! as signingMethodNone | $.VarRef<signingMethodNone> | null

export function __goscript_set_SigningMethodNone(__goscriptValue: signingMethodNone | $.VarRef<signingMethodNone> | null): void {
	SigningMethodNone = __goscriptValue
}

export let NoneSignatureTypeDisallowedError: $.GoError = null! as $.GoError

export function __goscript_set_NoneSignatureTypeDisallowedError(__goscriptValue: $.GoError): void {
	NoneSignatureTypeDisallowedError = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	SigningMethodNone = new signingMethodNone()
	NoneSignatureTypeDisallowedError = __goscript_errors_go1_20.newError("'none' signature type is not allowed", __goscript_errors.ErrTokenUnverifiable, null)

	await __goscript_signing_method.RegisterSigningMethod((SigningMethodNone !== null && (SigningMethodNone as any).__isVarRef !== true && (SigningMethodNone as any).__goValue === undefined ? ((SigningMethodNone as any) as signingMethodNone).Alg() : signingMethodNone.prototype.Alg.call(SigningMethodNone)), $.functionValue((): __goscript_signing_method.SigningMethod | null => {
		return $.interfaceValue<__goscript_signing_method.SigningMethod | null>(SigningMethodNone, "*jwt.signingMethodNone", /* @__PURE__ */ $.pointerType("jwt.signingMethodNone"))
	}, ({ kind: $.TypeKind.Function, params: [], results: ["jwt.SigningMethod"] } as $.FunctionTypeInfo)))
}

export { __goscriptInit0 }
