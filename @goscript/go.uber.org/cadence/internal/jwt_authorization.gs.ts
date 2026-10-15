// Generated file based on jwt_authorization.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as jwt from "@goscript/github.com/golang-jwt/jwt/v5/index.js"

import * as auth from "@goscript/go.uber.org/cadence/internal/common/auth/index.js"

import * as util from "@goscript/go.uber.org/cadence/internal/common/util/index.js"

import * as rsa from "@goscript/crypto/rsa/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/golang-jwt/jwt/v5/index.js"
import "@goscript/go.uber.org/cadence/internal/common/auth/index.js"
import "@goscript/go.uber.org/cadence/internal/common/util/index.js"
import "@goscript/crypto/rsa/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.JWTAuthProvider"])

export class JWTAuthProvider {
	public get PrivateKey(): $.Slice<number> {
		return this._fields.PrivateKey
	}

	public set PrivateKey(value: $.Slice<number>) {
		this._fields.PrivateKey = value
	}

	public _fields: {
		PrivateKey: $.Slice<number>
	}

	constructor(init?: Partial<{PrivateKey?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			PrivateKey: init?.PrivateKey ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): JWTAuthProvider {
		return new JWTAuthProvider(this, true)
	}

	public __goscriptAssign(source: JWTAuthProvider): void {
		const target = this._fields
		const values = source._fields
		target.PrivateKey = values.PrivateKey
	}

	public async GetAuthToken(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const j: JWTAuthProvider | $.VarRef<JWTAuthProvider> | null = this;
		let __goscriptTuple0: any = await util.LoadRSAPrivateKey($.pointerValue<JWTAuthProvider>(j).PrivateKey)
		let key: rsa.PrivateKey | $.VarRef<rsa.PrivateKey> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}

		let ttl = 600n
		let claims = new auth.JWTClaims({RegisteredClaims: (() => { const __goscriptLiteralField0 = jwt.NewNumericDate($.markAsStructValue($.cloneStructValue(time.Now()))); const __goscriptLiteralField1 = jwt.NewNumericDate($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Now())).Add($.int64Mul(1000000000n, $.int64(ttl)))))); return new jwt.RegisteredClaims({Issuer: "internal-jwt", IssuedAt: __goscriptLiteralField0, ExpiresAt: __goscriptLiteralField1}, true) })(), Admin: true, TTL: ttl}, true)

		let __goscriptTuple1: any = await jwt.Token.prototype.SignedString.call(await jwt.NewWithClaims($.interfaceValue<jwt.SigningMethod | null>(jwt.SigningMethodRS256, "*jwt.SigningMethodRSA", /* @__PURE__ */ $.pointerType("jwt.SigningMethodRSA")), $.interfaceValue<jwt.Claims | null>((claims).clone(), "auth.JWTClaims", "auth.JWTClaims"), null), $.interfaceValue(key, "*rsa.PrivateKey", /* @__PURE__ */ $.pointerType("rsa.PrivateKey")))
		let tokenString = __goscriptTuple1[0]
		err = __goscriptTuple1[1]

		if (err != null) {
			return [null, err]
		}

		return [$.stringToBytes(tokenString), null]
	}

	static __typeInfo = $.registerStructType(
		"internal.JWTAuthProvider",
		() => new JWTAuthProvider(),
		() => [$.methodSignature("GetAuthToken", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true)],
		JWTAuthProvider,
		() => [/* @__PURE__ */ $.structField("PrivateKey", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, true)]
	)
}

export const internalIssuer: string = "internal-jwt"

export function NewAdminJwtAuthorizationProvider(privateKey: $.Slice<number>): auth.AuthorizationProvider | null {
	return $.interfaceValue<auth.AuthorizationProvider | null>(new JWTAuthProvider({PrivateKey: privateKey}), "*internal.JWTAuthProvider", /* @__PURE__ */ $.pointerType("internal.JWTAuthProvider"))
}
