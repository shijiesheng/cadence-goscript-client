// Generated file based on registered_claims.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_types from "./types.gs.ts"
import "@goscript/time/index.js"
import "./types.gs.ts"

$.registerTypePackagePath("github.com/golang-jwt/jwt/v5", ["jwt.RegisteredClaims"])

export class RegisteredClaims {
	// the `iss` (Issuer) claim. See https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.1
	public get Issuer(): string {
		return this._fields.Issuer
	}

	public set Issuer(value: string) {
		this._fields.Issuer = value
	}

	// the `sub` (Subject) claim. See https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.2
	public get Subject(): string {
		return this._fields.Subject
	}

	public set Subject(value: string) {
		this._fields.Subject = value
	}

	// the `aud` (Audience) claim. See https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.3
	public get Audience(): __goscript_types.ClaimStrings {
		return this._fields.Audience
	}

	public set Audience(value: __goscript_types.ClaimStrings) {
		this._fields.Audience = value
	}

	// the `exp` (Expiration Time) claim. See https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.4
	public get ExpiresAt(): __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null {
		return this._fields.ExpiresAt
	}

	public set ExpiresAt(value: __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null) {
		this._fields.ExpiresAt = value
	}

	// the `nbf` (Not Before) claim. See https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.5
	public get NotBefore(): __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null {
		return this._fields.NotBefore
	}

	public set NotBefore(value: __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null) {
		this._fields.NotBefore = value
	}

	// the `iat` (Issued At) claim. See https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.6
	public get IssuedAt(): __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null {
		return this._fields.IssuedAt
	}

	public set IssuedAt(value: __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null) {
		this._fields.IssuedAt = value
	}

	// the `jti` (JWT ID) claim. See https://datatracker.ietf.org/doc/html/rfc7519#section-4.1.7
	public get ID(): string {
		return this._fields.ID
	}

	public set ID(value: string) {
		this._fields.ID = value
	}

	public _fields: {
		Issuer: string
		Subject: string
		Audience: __goscript_types.ClaimStrings
		ExpiresAt: __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null
		NotBefore: __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null
		IssuedAt: __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null
		ID: string
	}

	constructor(init?: Partial<{Issuer?: string, Subject?: string, Audience?: __goscript_types.ClaimStrings, ExpiresAt?: __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, NotBefore?: __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, IssuedAt?: __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, ID?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Issuer: init?.Issuer ?? ("" as string),
			Subject: init?.Subject ?? ("" as string),
			Audience: init?.Audience ?? (null! as __goscript_types.ClaimStrings),
			ExpiresAt: init?.ExpiresAt ?? (null! as __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null),
			NotBefore: init?.NotBefore ?? (null! as __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null),
			IssuedAt: init?.IssuedAt ?? (null! as __goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null),
			ID: init?.ID ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RegisteredClaims {
		return new RegisteredClaims(this, true)
	}

	public __goscriptAssign(source: RegisteredClaims): void {
		const target = this._fields
		const values = source._fields
		target.Issuer = values.Issuer
		target.Subject = values.Subject
		target.Audience = values.Audience
		target.ExpiresAt = values.ExpiresAt
		target.NotBefore = values.NotBefore
		target.IssuedAt = values.IssuedAt
		target.ID = values.ID
	}

	public GetAudience(): [__goscript_types.ClaimStrings, $.GoError] {
		const c = this;
		return [(c.Audience as __goscript_types.ClaimStrings), null]
	}

	public GetExpirationTime(): [__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError] {
		const c = this;
		return [c.ExpiresAt, null]
	}

	public GetIssuedAt(): [__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError] {
		const c = this;
		return [c.IssuedAt, null]
	}

	public GetIssuer(): [string, $.GoError] {
		const c = this;
		return [c.Issuer, null]
	}

	public GetNotBefore(): [__goscript_types.NumericDate | $.VarRef<__goscript_types.NumericDate> | null, $.GoError] {
		const c = this;
		return [c.NotBefore, null]
	}

	public GetSubject(): [string, $.GoError] {
		const c = this;
		return [c.Subject, null]
	}

	static __typeInfo = $.registerStructType(
		"jwt.RegisteredClaims",
		() => new RegisteredClaims(),
		() => [$.methodSignature("GetAudience", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"), "jwt.ClaimStrings"), "error"]), $.methodSignature("GetExpirationTime", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetIssuedAt", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetIssuer", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("GetNotBefore", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetSubject", [], [/* @__PURE__ */ $.basicType("string"), "error"])],
		RegisteredClaims,
		() => [/* @__PURE__ */ $.structField("Issuer", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"iss,omitempty\"" }), /* @__PURE__ */ $.structField("Subject", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"sub,omitempty\"" }), /* @__PURE__ */ $.structField("Audience", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"), "jwt.ClaimStrings"), [2], 32, true, { tag: "json:\"aud,omitempty\"" }), /* @__PURE__ */ $.structField("ExpiresAt", /* @__PURE__ */ $.pointerType("jwt.NumericDate"), [3], 56, true, { tag: "json:\"exp,omitempty\"" }), /* @__PURE__ */ $.structField("NotBefore", /* @__PURE__ */ $.pointerType("jwt.NumericDate"), [4], 64, true, { tag: "json:\"nbf,omitempty\"" }), /* @__PURE__ */ $.structField("IssuedAt", /* @__PURE__ */ $.pointerType("jwt.NumericDate"), [5], 72, true, { tag: "json:\"iat,omitempty\"" }), /* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("string"), [6], 80, true, { tag: "json:\"jti,omitempty\"" })]
	)
}
