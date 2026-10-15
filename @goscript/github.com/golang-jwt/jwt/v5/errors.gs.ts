// Generated file based on errors.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as strings from "@goscript/strings/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as __goscript_errors_go1_20 from "./errors_go1_20.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/strings/index.js"
import "@goscript/fmt/index.js"
import "./errors_go1_20.gs.ts"

$.registerTypePackagePath("github.com/golang-jwt/jwt/v5", ["jwt.joinedError"])

export class joinedError {
	public get errs(): $.Slice<$.GoError> {
		return this._fields.errs
	}

	public set errs(value: $.Slice<$.GoError>) {
		this._fields.errs = value
	}

	public _fields: {
		errs: $.Slice<$.GoError>
	}

	constructor(init?: Partial<{errs?: $.Slice<$.GoError>}>, __goscriptValue?: boolean) {
		this._fields = {
			errs: init?.errs ?? (null! as $.Slice<$.GoError>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): joinedError {
		return new joinedError(this, true)
	}

	public __goscriptAssign(source: joinedError): void {
		const target = this._fields
		const values = source._fields
		target.errs = values.errs
	}

	public async Error(): globalThis.Promise<string> {
		const je = this;
		let msg: $.Slice<string> = $.arrayToSlice<string>([])
		for (let __goscriptRangeTarget0 = je.errs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let err = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as $.GoError)
			msg = $.appendOne(msg, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}

		return strings.Join(msg, ", ")
	}

	public Unwrap(): $.Slice<$.GoError> {
		const je = this;
		return je.errs
	}

	static __typeInfo = $.registerStructType(
		"jwt.joinedError",
		() => new joinedError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Unwrap", [], [/* @__PURE__ */ $.sliceType("error")])],
		joinedError,
		() => [/* @__PURE__ */ $.structField("errs", /* @__PURE__ */ $.sliceType("error"), [0], 0, false, { pkgPath: "github.com/golang-jwt/jwt/v5" })]
	)
}

export let ErrInvalidKey: $.GoError = errors.New("key is invalid")

export function __goscript_set_ErrInvalidKey(__goscriptValue: $.GoError): void {
	ErrInvalidKey = __goscriptValue
}

export let ErrInvalidKeyType: $.GoError = errors.New("key is of invalid type")

export function __goscript_set_ErrInvalidKeyType(__goscriptValue: $.GoError): void {
	ErrInvalidKeyType = __goscriptValue
}

export let ErrHashUnavailable: $.GoError = errors.New("the requested hash function is unavailable")

export function __goscript_set_ErrHashUnavailable(__goscriptValue: $.GoError): void {
	ErrHashUnavailable = __goscriptValue
}

export let ErrTokenMalformed: $.GoError = errors.New("token is malformed")

export function __goscript_set_ErrTokenMalformed(__goscriptValue: $.GoError): void {
	ErrTokenMalformed = __goscriptValue
}

export let ErrTokenUnverifiable: $.GoError = errors.New("token is unverifiable")

export function __goscript_set_ErrTokenUnverifiable(__goscriptValue: $.GoError): void {
	ErrTokenUnverifiable = __goscriptValue
}

export let ErrTokenSignatureInvalid: $.GoError = errors.New("token signature is invalid")

export function __goscript_set_ErrTokenSignatureInvalid(__goscriptValue: $.GoError): void {
	ErrTokenSignatureInvalid = __goscriptValue
}

export let ErrTokenRequiredClaimMissing: $.GoError = errors.New("token is missing required claim")

export function __goscript_set_ErrTokenRequiredClaimMissing(__goscriptValue: $.GoError): void {
	ErrTokenRequiredClaimMissing = __goscriptValue
}

export let ErrTokenInvalidAudience: $.GoError = errors.New("token has invalid audience")

export function __goscript_set_ErrTokenInvalidAudience(__goscriptValue: $.GoError): void {
	ErrTokenInvalidAudience = __goscriptValue
}

export let ErrTokenExpired: $.GoError = errors.New("token is expired")

export function __goscript_set_ErrTokenExpired(__goscriptValue: $.GoError): void {
	ErrTokenExpired = __goscriptValue
}

export let ErrTokenUsedBeforeIssued: $.GoError = errors.New("token used before issued")

export function __goscript_set_ErrTokenUsedBeforeIssued(__goscriptValue: $.GoError): void {
	ErrTokenUsedBeforeIssued = __goscriptValue
}

export let ErrTokenInvalidIssuer: $.GoError = errors.New("token has invalid issuer")

export function __goscript_set_ErrTokenInvalidIssuer(__goscriptValue: $.GoError): void {
	ErrTokenInvalidIssuer = __goscriptValue
}

export let ErrTokenInvalidSubject: $.GoError = errors.New("token has invalid subject")

export function __goscript_set_ErrTokenInvalidSubject(__goscriptValue: $.GoError): void {
	ErrTokenInvalidSubject = __goscriptValue
}

export let ErrTokenNotValidYet: $.GoError = errors.New("token is not valid yet")

export function __goscript_set_ErrTokenNotValidYet(__goscriptValue: $.GoError): void {
	ErrTokenNotValidYet = __goscriptValue
}

export let ErrTokenInvalidId: $.GoError = errors.New("token has invalid id")

export function __goscript_set_ErrTokenInvalidId(__goscriptValue: $.GoError): void {
	ErrTokenInvalidId = __goscriptValue
}

export let ErrTokenInvalidClaims: $.GoError = errors.New("token has invalid claims")

export function __goscript_set_ErrTokenInvalidClaims(__goscriptValue: $.GoError): void {
	ErrTokenInvalidClaims = __goscriptValue
}

export let ErrInvalidType: $.GoError = errors.New("invalid type for claim")

export function __goscript_set_ErrInvalidType(__goscriptValue: $.GoError): void {
	ErrInvalidType = __goscriptValue
}

export function joinErrors(errs: $.Slice<$.GoError>): $.GoError {
	return $.interfaceValue<$.GoError>(new joinedError({errs: errs}), "*jwt.joinedError", /* @__PURE__ */ $.pointerType("jwt.joinedError"))
}

var __goscriptAwait: any
