// Generated file based on validator.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as subtle from "@goscript/crypto/subtle/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_claims from "./claims.gs.ts"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_errors_go1_20 from "./errors_go1_20.gs.ts"

import * as __goscript_parser from "./parser.gs.ts"

import type * as __goscript_parser_option from "./parser_option.gs.ts"

import * as __goscript_signing_method from "./signing_method.gs.ts"

import type * as __goscript_token from "./token.gs.ts"

import * as __goscript_types from "./types.gs.ts"
import "@goscript/crypto/subtle/index.js"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "./claims.gs.ts"
import "./errors.gs.ts"
import "./errors_go1_20.gs.ts"
import "./parser.gs.ts"
import "./signing_method.gs.ts"
import "./types.gs.ts"

$.registerTypePackagePath("github.com/golang-jwt/jwt/v5", ["jwt.ClaimsValidator", "jwt.Validator"])

export type ClaimsValidator = {
	GetAudience(): [__goscript_types.ClaimStrings, $.GoError] | globalThis.Promise<[__goscript_types.ClaimStrings, $.GoError]>
	GetExpirationTime(): [__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError] | globalThis.Promise<[__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError]>
	GetIssuedAt(): [__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError] | globalThis.Promise<[__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError]>
	GetIssuer(): [string, $.GoError] | globalThis.Promise<[string, $.GoError]>
	GetNotBefore(): [__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError] | globalThis.Promise<[__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError]>
	GetSubject(): [string, $.GoError] | globalThis.Promise<[string, $.GoError]>
	Validate(): $.GoError
}

$.registerInterfaceType(
	"jwt.ClaimsValidator",
	null,
	[$.methodSignature("GetAudience", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"), "jwt.ClaimStrings"), "error"]), $.methodSignature("GetExpirationTime", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetIssuedAt", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetIssuer", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("GetNotBefore", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetSubject", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Validate", [], ["error"])]
);

export class Validator {
	// leeway is an optional leeway that can be provided to account for clock skew.
	public get leeway(): time.Duration {
		return this._fields.leeway
	}

	public set leeway(value: time.Duration) {
		this._fields.leeway = value
	}

	// timeFunc is used to supply the current time that is needed for
	// validation. If unspecified, this defaults to time.Now.
	public get timeFunc(): (() => time.Time | globalThis.Promise<time.Time>) | null {
		return this._fields.timeFunc
	}

	public set timeFunc(value: (() => time.Time | globalThis.Promise<time.Time>) | null) {
		this._fields.timeFunc = value
	}

	// requireExp specifies whether the exp claim is required
	public get requireExp(): boolean {
		return this._fields.requireExp
	}

	public set requireExp(value: boolean) {
		this._fields.requireExp = value
	}

	// verifyIat specifies whether the iat (Issued At) claim will be verified.
	// According to https://www.rfc-editor.org/rfc/rfc7519#section-4.1.6 this
	// only specifies the age of the token, but no validation check is
	// necessary. However, if wanted, it can be checked if the iat is
	// unrealistic, i.e., in the future.
	public get verifyIat(): boolean {
		return this._fields.verifyIat
	}

	public set verifyIat(value: boolean) {
		this._fields.verifyIat = value
	}

	// expectedAud contains the audience this token expects. Supplying an empty
	// string will disable aud checking.
	public get expectedAud(): string {
		return this._fields.expectedAud
	}

	public set expectedAud(value: string) {
		this._fields.expectedAud = value
	}

	// expectedIss contains the issuer this token expects. Supplying an empty
	// string will disable iss checking.
	public get expectedIss(): string {
		return this._fields.expectedIss
	}

	public set expectedIss(value: string) {
		this._fields.expectedIss = value
	}

	// expectedSub contains the subject this token expects. Supplying an empty
	// string will disable sub checking.
	public get expectedSub(): string {
		return this._fields.expectedSub
	}

	public set expectedSub(value: string) {
		this._fields.expectedSub = value
	}

	public _fields: {
		leeway: time.Duration
		timeFunc: (() => time.Time | globalThis.Promise<time.Time>) | null
		requireExp: boolean
		verifyIat: boolean
		expectedAud: string
		expectedIss: string
		expectedSub: string
	}

	constructor(init?: Partial<{leeway?: time.Duration, timeFunc?: (() => time.Time | globalThis.Promise<time.Time>) | null, requireExp?: boolean, verifyIat?: boolean, expectedAud?: string, expectedIss?: string, expectedSub?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			leeway: init?.leeway ?? (0n as time.Duration),
			timeFunc: init?.timeFunc ?? (null! as (() => time.Time | globalThis.Promise<time.Time>) | null),
			requireExp: init?.requireExp ?? (false as boolean),
			verifyIat: init?.verifyIat ?? (false as boolean),
			expectedAud: init?.expectedAud ?? ("" as string),
			expectedIss: init?.expectedIss ?? ("" as string),
			expectedSub: init?.expectedSub ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Validator {
		return new Validator(this, true)
	}

	public __goscriptAssign(source: Validator): void {
		const target = this._fields
		const values = source._fields
		target.leeway = values.leeway
		target.timeFunc = values.timeFunc
		target.requireExp = values.requireExp
		target.verifyIat = values.verifyIat
		target.expectedAud = values.expectedAud
		target.expectedIss = values.expectedIss
		target.expectedSub = values.expectedSub
	}

	public async Validate(claims: __goscript_claims.Claims | null): globalThis.Promise<$.GoError> {
		const v: Validator | $.VarRef<Validator> | null = this;
		const v$: Validator = v == null ? $.pointerTarget<Validator>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<Validator>(v)
		let now: time.Time = $.markAsStructValue(new time.Time())
		let errs: $.Slice<$.GoError> = $.makeSlice<$.GoError>(0, 6)
		let err: $.GoError = null! as $.GoError

		// Check, if we have a time func
		if ((v$ as Validator).timeFunc != null) {
			now = $.assignStruct(now, ((__goscriptAwait = (v$ as Validator).timeFunc!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))
		} else {
			now = $.assignStruct(now, time.Now())
		}

		// We always need to check the expiration time, but usage of the claim
		// itself is OPTIONAL by default. requireExp overrides this behavior
		// and makes the exp claim mandatory.
		{
			err = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Validator).verifyExpiresAt(claims, now, (v$ as Validator).requireExp) : Validator.prototype.verifyExpiresAt.call(v, claims, now, (v$ as Validator).requireExp))
			if (err != null) {
				errs = $.appendOne(errs, err, $.appendZeros.nil)
			}
		}

		// We always need to check not-before, but usage of the claim itself is
		// OPTIONAL.
		{
			err = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Validator).verifyNotBefore(claims, now, false) : Validator.prototype.verifyNotBefore.call(v, claims, now, false))
			if (err != null) {
				errs = $.appendOne(errs, err, $.appendZeros.nil)
			}
		}

		// Check issued-at if the option is enabled
		if ((v$ as Validator).verifyIat) {
			{
				err = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Validator).verifyIssuedAt(claims, now, false) : Validator.prototype.verifyIssuedAt.call(v, claims, now, false))
				if (err != null) {
					errs = $.appendOne(errs, err, $.appendZeros.nil)
				}
			}
		}

		// If we have an expected audience, we also require the audience claim
		if (!$.stringEqual((v$ as Validator).expectedAud, "")) {
			{
				err = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Validator).verifyAudience(claims, (v$ as Validator).expectedAud, true) : Validator.prototype.verifyAudience.call(v, claims, (v$ as Validator).expectedAud, true))
				if (err != null) {
					errs = $.appendOne(errs, err, $.appendZeros.nil)
				}
			}
		}

		// If we have an expected issuer, we also require the issuer claim
		if (!$.stringEqual((v$ as Validator).expectedIss, "")) {
			{
				err = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Validator).verifyIssuer(claims, (v$ as Validator).expectedIss, true) : Validator.prototype.verifyIssuer.call(v, claims, (v$ as Validator).expectedIss, true))
				if (err != null) {
					errs = $.appendOne(errs, err, $.appendZeros.nil)
				}
			}
		}

		// If we have an expected subject, we also require the subject claim
		if (!$.stringEqual((v$ as Validator).expectedSub, "")) {
			{
				err = await (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as Validator).verifySubject(claims, (v$ as Validator).expectedSub, true) : Validator.prototype.verifySubject.call(v, claims, (v$ as Validator).expectedSub, true))
				if (err != null) {
					errs = $.appendOne(errs, err, $.appendZeros.nil)
				}
			}
		}

		// Finally, we want to give the claim itself some possibility to do some
		// additional custom validation based on a custom Validate function.
		let [cvt, ok] = $.typeAssertTuple<ClaimsValidator | null>(claims, "jwt.ClaimsValidator")
		if (ok) {
			{
				let __goscriptShadow0 = (__goscriptAwait = (cvt !== null && (cvt as any).__isVarRef !== true && (cvt as any).__goValue === undefined ? (cvt as Exclude<ClaimsValidator, null>) : $.pointerValue<Exclude<ClaimsValidator, null>>(cvt)).Validate(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow0 != null) {
					errs = $.appendOne(errs, __goscriptShadow0, $.appendZeros.nil)
				}
			}
		}

		if ($.sliceLen(errs) == 0) {
			return null
		}

		return __goscript_errors.joinErrors(errs)
	}

	public async verifyAudience(claims: __goscript_claims.Claims | null, cmp: string, required: boolean): globalThis.Promise<$.GoError> {
		const v: Validator | $.VarRef<Validator> | null = this;
		let __goscriptTuple0: any = await (claims !== null && (claims as any).__isVarRef !== true && (claims as any).__goValue === undefined ? (claims as Exclude<__goscript_claims.Claims, null>) : $.pointerValue<Exclude<__goscript_claims.Claims, null>>(claims)).GetAudience()
		let aud: __goscript_types.ClaimStrings = (__goscriptTuple0[0] as __goscript_types.ClaimStrings)
		let err = __goscriptTuple0[1]
		if (err != null) {
			return err
		}

		if ($.sliceLen((aud as __goscript_types.ClaimStrings)) == 0) {
			return errorIfRequired(required, "aud")
		}

		// use a var here to keep constant time compare when looping over a number of claims
		let result = false

		let stringClaims: string = ""
		for (let __goscriptRangeTarget0 = aud, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let a = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
			if (subtle.ConstantTimeCompare($.stringToBytes(a), $.stringToBytes(cmp)) != 0) {
				result = true
			}
			stringClaims = $.concatString(stringClaims, a)
		}

		// case where "" is sent in one or many aud claims
		if ($.stringEqual(stringClaims, "")) {
			return errorIfRequired(required, "aud")
		}

		return errorIfFalse(result, __goscript_errors.ErrTokenInvalidAudience)
	}

	public async verifyExpiresAt(claims: __goscript_claims.Claims | null, cmp: time.Time, required: boolean): globalThis.Promise<$.GoError> {
		const v: Validator | $.VarRef<Validator> | null = this;
		let __goscriptTuple1: any = await (claims !== null && (claims as any).__isVarRef !== true && (claims as any).__goValue === undefined ? (claims as Exclude<__goscript_claims.Claims, null>) : $.pointerValue<Exclude<__goscript_claims.Claims, null>>(claims)).GetExpirationTime()
		let exp: __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return err
		}

		if (exp == null) {
			return errorIfRequired(required, "exp")
		}

		return errorIfFalse($.markAsStructValue($.cloneStructValue(cmp)).Before($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(($.pointerValue<__goscript_types.NumericDate>(exp).Time))).Add($.pointerValue<Validator>(v).leeway)))), __goscript_errors.ErrTokenExpired)
	}

	public async verifyIssuedAt(claims: __goscript_claims.Claims | null, cmp: time.Time, required: boolean): globalThis.Promise<$.GoError> {
		const v: Validator | $.VarRef<Validator> | null = this;
		let __goscriptTuple2: any = await (claims !== null && (claims as any).__isVarRef !== true && (claims as any).__goValue === undefined ? (claims as Exclude<__goscript_claims.Claims, null>) : $.pointerValue<Exclude<__goscript_claims.Claims, null>>(claims)).GetIssuedAt()
		let iat: __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return err
		}

		if (iat == null) {
			return errorIfRequired(required, "iat")
		}

		return errorIfFalse(!$.markAsStructValue($.cloneStructValue(cmp)).Before($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.pointerValue<__goscript_types.NumericDate>(iat).Time)).Add(-$.pointerValue<Validator>(v).leeway)))), __goscript_errors.ErrTokenUsedBeforeIssued)
	}

	public async verifyIssuer(claims: __goscript_claims.Claims | null, cmp: string, required: boolean): globalThis.Promise<$.GoError> {
		const v: Validator | $.VarRef<Validator> | null = this;
		let [iss, err] = await (claims !== null && (claims as any).__isVarRef !== true && (claims as any).__goValue === undefined ? (claims as Exclude<__goscript_claims.Claims, null>) : $.pointerValue<Exclude<__goscript_claims.Claims, null>>(claims)).GetIssuer()
		if (err != null) {
			return err
		}

		if ($.stringEqual(iss, "")) {
			return errorIfRequired(required, "iss")
		}

		return errorIfFalse($.stringEqual(iss, cmp), __goscript_errors.ErrTokenInvalidIssuer)
	}

	public async verifyNotBefore(claims: __goscript_claims.Claims | null, cmp: time.Time, required: boolean): globalThis.Promise<$.GoError> {
		const v: Validator | $.VarRef<Validator> | null = this;
		let __goscriptTuple3: any = await (claims !== null && (claims as any).__isVarRef !== true && (claims as any).__goValue === undefined ? (claims as Exclude<__goscript_claims.Claims, null>) : $.pointerValue<Exclude<__goscript_claims.Claims, null>>(claims)).GetNotBefore()
		let nbf: __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			return err
		}

		if (nbf == null) {
			return errorIfRequired(required, "nbf")
		}

		return errorIfFalse(!$.markAsStructValue($.cloneStructValue(cmp)).Before($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.pointerValue<__goscript_types.NumericDate>(nbf).Time)).Add(-$.pointerValue<Validator>(v).leeway)))), __goscript_errors.ErrTokenNotValidYet)
	}

	public async verifySubject(claims: __goscript_claims.Claims | null, cmp: string, required: boolean): globalThis.Promise<$.GoError> {
		const v: Validator | $.VarRef<Validator> | null = this;
		let [sub, err] = await (claims !== null && (claims as any).__isVarRef !== true && (claims as any).__goValue === undefined ? (claims as Exclude<__goscript_claims.Claims, null>) : $.pointerValue<Exclude<__goscript_claims.Claims, null>>(claims)).GetSubject()
		if (err != null) {
			return err
		}

		if ($.stringEqual(sub, "")) {
			return errorIfRequired(required, "sub")
		}

		return errorIfFalse($.stringEqual(sub, cmp), __goscript_errors.ErrTokenInvalidSubject)
	}

	static __typeInfo = $.registerStructType(
		"jwt.Validator",
		() => new Validator(),
		() => [$.methodSignature("Validate", [["claims", "jwt.Claims"]], ["error"], true), $.methodSignature("verifyAudience", [["claims", "jwt.Claims"], ["cmp", /* @__PURE__ */ $.basicType("string")], ["required", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("verifyExpiresAt", [["claims", "jwt.Claims"], ["cmp", "time.Time"], ["required", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("verifyIssuedAt", [["claims", "jwt.Claims"], ["cmp", "time.Time"], ["required", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("verifyIssuer", [["claims", "jwt.Claims"], ["cmp", /* @__PURE__ */ $.basicType("string")], ["required", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("verifyNotBefore", [["claims", "jwt.Claims"], ["cmp", "time.Time"], ["required", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("verifySubject", [["claims", "jwt.Claims"], ["cmp", /* @__PURE__ */ $.basicType("string")], ["required", /* @__PURE__ */ $.basicType("bool")]], ["error"], true)],
		Validator,
		() => [/* @__PURE__ */ $.structField("leeway", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, false, { pkgPath: "github.com/golang-jwt/jwt/v5" }), /* @__PURE__ */ $.structField("timeFunc", ({ kind: $.TypeKind.Function, params: [], results: ["time.Time"] } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "github.com/golang-jwt/jwt/v5" }), /* @__PURE__ */ $.structField("requireExp", /* @__PURE__ */ $.basicType("bool"), [2], 16, false, { pkgPath: "github.com/golang-jwt/jwt/v5" }), /* @__PURE__ */ $.structField("verifyIat", /* @__PURE__ */ $.basicType("bool"), [3], 17, false, { pkgPath: "github.com/golang-jwt/jwt/v5" }), /* @__PURE__ */ $.structField("expectedAud", /* @__PURE__ */ $.basicType("string"), [4], 24, false, { pkgPath: "github.com/golang-jwt/jwt/v5" }), /* @__PURE__ */ $.structField("expectedIss", /* @__PURE__ */ $.basicType("string"), [5], 40, false, { pkgPath: "github.com/golang-jwt/jwt/v5" }), /* @__PURE__ */ $.structField("expectedSub", /* @__PURE__ */ $.basicType("string"), [6], 56, false, { pkgPath: "github.com/golang-jwt/jwt/v5" })]
	)
}

export async function NewValidator(opts: $.Slice<__goscript_parser_option.ParserOption | null>): globalThis.Promise<Validator | $.VarRef<Validator> | null> {
	let p: __goscript_parser.Parser | $.VarRef<__goscript_parser.Parser> | null = await __goscript_parser.NewParser(opts)
	return $.pointerValue<__goscript_parser.Parser>(p).validator
}

export function errorIfFalse(value: boolean, err: $.GoError): $.GoError {
	if (value) {
		return null
	} else {
		return err
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function errorIfRequired(required: boolean, claim: string): globalThis.Promise<$.GoError> {
	if (required) {
		return __goscript_errors_go1_20.newError(await fmt.Sprintf("%s claim is required", claim), __goscript_errors.ErrTokenRequiredClaimMissing, null)
	} else {
		return null
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptAwait: any
