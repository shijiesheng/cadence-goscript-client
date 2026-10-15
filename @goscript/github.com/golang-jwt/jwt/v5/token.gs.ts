// Generated file based on token.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as crypto from "@goscript/crypto/index.js"

import * as base64 from "@goscript/encoding/base64/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_claims from "./claims.gs.ts"

import * as __goscript_map_claims from "./map_claims.gs.ts"

import * as __goscript_signing_method from "./signing_method.gs.ts"

import type * as __goscript_token_option from "./token_option.gs.ts"

import type * as __goscript_types from "./types.gs.ts"
import "@goscript/crypto/index.js"
import "@goscript/encoding/base64/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/time/index.js"
import "./claims.gs.ts"
import "./map_claims.gs.ts"
import "./signing_method.gs.ts"

$.registerTypePackagePath("github.com/golang-jwt/jwt/v5", ["jwt.Keyfunc", "jwt.VerificationKey", "jwt.VerificationKeySet", "jwt.Token"])

export type Keyfunc = ((_p0: Token | $.VarRef<Token> | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null

export type VerificationKey = any

$.registerInterfaceType(
	"jwt.VerificationKey",
	null,
	[]
);

export class VerificationKeySet {
	public get Keys(): $.Slice<VerificationKey | null> {
		return this._fields.Keys
	}

	public set Keys(value: $.Slice<VerificationKey | null>) {
		this._fields.Keys = value
	}

	public _fields: {
		Keys: $.Slice<VerificationKey | null>
	}

	constructor(init?: Partial<{Keys?: $.Slice<VerificationKey | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			Keys: init?.Keys ?? (null! as $.Slice<VerificationKey | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): VerificationKeySet {
		return new VerificationKeySet(this, true)
	}

	public __goscriptAssign(source: VerificationKeySet): void {
		const target = this._fields
		const values = source._fields
		target.Keys = values.Keys
	}

	static __typeInfo = $.registerStructType(
		"jwt.VerificationKeySet",
		() => new VerificationKeySet(),
		() => [],
		VerificationKeySet,
		() => [/* @__PURE__ */ $.structField("Keys", /* @__PURE__ */ $.sliceType("jwt.VerificationKey"), [0], 0, true)]
	)
}

export class Token {
	public get Raw(): string {
		return this._fields.Raw
	}

	public set Raw(value: string) {
		this._fields.Raw = value
	}

	public get Method(): __goscript_signing_method.SigningMethod | null {
		return this._fields.Method
	}

	public set Method(value: __goscript_signing_method.SigningMethod | null) {
		this._fields.Method = value
	}

	public get Header(): globalThis.Map<string, any> | null {
		return this._fields.Header
	}

	public set Header(value: globalThis.Map<string, any> | null) {
		this._fields.Header = value
	}

	public get Claims(): __goscript_claims.Claims | null {
		return this._fields.Claims
	}

	public set Claims(value: __goscript_claims.Claims | null) {
		this._fields.Claims = value
	}

	public get Signature(): $.Slice<number> {
		return this._fields.Signature
	}

	public set Signature(value: $.Slice<number>) {
		this._fields.Signature = value
	}

	public get Valid(): boolean {
		return this._fields.Valid
	}

	public set Valid(value: boolean) {
		this._fields.Valid = value
	}

	public _fields: {
		Raw: string
		Method: __goscript_signing_method.SigningMethod | null
		Header: globalThis.Map<string, any> | null
		Claims: __goscript_claims.Claims | null
		Signature: $.Slice<number>
		Valid: boolean
	}

	constructor(init?: Partial<{Raw?: string, Method?: __goscript_signing_method.SigningMethod | null, Header?: globalThis.Map<string, any> | null, Claims?: __goscript_claims.Claims | null, Signature?: $.Slice<number>, Valid?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Raw: init?.Raw ?? ("" as string),
			Method: init?.Method ?? (null! as __goscript_signing_method.SigningMethod | null),
			Header: init?.Header ?? (null! as globalThis.Map<string, any> | null),
			Claims: init?.Claims ?? (null! as __goscript_claims.Claims | null),
			Signature: init?.Signature ?? (null! as $.Slice<number>),
			Valid: init?.Valid ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Token {
		return new Token(this, true)
	}

	public __goscriptAssign(source: Token): void {
		const target = this._fields
		const values = source._fields
		target.Raw = values.Raw
		target.Method = $.assignFieldValue(target.Method, values.Method, "jwt.SigningMethod")
		target.Header = values.Header
		target.Claims = $.assignFieldValue(target.Claims, values.Claims, "jwt.Claims")
		target.Signature = values.Signature
		target.Valid = values.Valid
	}

	public EncodeSegment(seg: $.Slice<number>): string {
		return base64.Encoding.prototype.EncodeToString.call(base64.RawURLEncoding, seg)
	}

	public async SignedString(key: any): globalThis.Promise<[string, $.GoError]> {
		const t: Token | $.VarRef<Token> | null = this;
		let [sstr, err] = await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Token).SigningString() : Token.prototype.SigningString.call(t))
		if (err != null) {
			return ["", err]
		}

		let __goscriptTuple0: any = await $.pointerValue<Exclude<__goscript_signing_method.SigningMethod, null>>($.pointerValue<Token>(t).Method).Sign(sstr, key)
		let sig: $.Slice<number> = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return ["", err]
		}

		return [$.concatString(($.concatString(sstr, ".")), (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Token).EncodeSegment(sig) : Token.prototype.EncodeSegment.call(t, sig))), null]
	}

	public async SigningString(): globalThis.Promise<[string, $.GoError]> {
		const t: Token | $.VarRef<Token> | null = this;
		const t$: Token = t == null ? $.pointerTarget<Token>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Token>(t)
		let __goscriptTuple1: any = await json.Marshal($.interfaceValue((t$ as Token).Header, "map[string]interface{}", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })))
		let h: $.Slice<number> = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return ["", err]
		}

		let __goscriptTuple2: any = await json.Marshal(((t$ as Token).Claims as any))
		let c: $.Slice<number> = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return ["", err]
		}

		return [$.concatString(($.concatString((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Token).EncodeSegment(h) : Token.prototype.EncodeSegment.call(t, h)), ".")), (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Token).EncodeSegment(c) : Token.prototype.EncodeSegment.call(t, c))), null]
	}

	static __typeInfo = $.registerStructType(
		"jwt.Token",
		() => new Token(),
		() => [$.methodSignature("EncodeSegment", [["seg", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("SignedString", [["key", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("SigningString", [], [/* @__PURE__ */ $.basicType("string"), "error"], true)],
		Token,
		() => [/* @__PURE__ */ $.structField("Raw", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Method", "jwt.SigningMethod", [1], 16, true), /* @__PURE__ */ $.structField("Header", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }), [2], 32, true), /* @__PURE__ */ $.structField("Claims", "jwt.Claims", [3], 40, true), /* @__PURE__ */ $.structField("Signature", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 56, true), /* @__PURE__ */ $.structField("Valid", /* @__PURE__ */ $.basicType("bool"), [5], 80, true)]
	)
}

export async function New(method: __goscript_signing_method.SigningMethod | null, opts: $.Slice<__goscript_token_option.TokenOption | null>): globalThis.Promise<Token | $.VarRef<Token> | null> {
	return NewWithClaims(method, $.namedValueInterfaceValue<__goscript_claims.Claims | null>($.makeMap<string, any>([]), "jwt.MapClaims", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), opts)
}

export async function NewWithClaims(method: __goscript_signing_method.SigningMethod | null, claims: __goscript_claims.Claims | null, opts: $.Slice<__goscript_token_option.TokenOption | null>): globalThis.Promise<Token | $.VarRef<Token> | null> {
	return new Token({Header: $.makeMap<string, any>([["typ", "JWT"], ["alg", (__goscriptAwait = (method !== null && (method as any).__isVarRef !== true && (method as any).__goValue === undefined ? (method as Exclude<__goscript_signing_method.SigningMethod, null>) : $.pointerValue<Exclude<__goscript_signing_method.SigningMethod, null>>(method)).Alg(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]]), Claims: claims, Method: method})
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({GetAudience: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_GetAudience as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), GetExpirationTime: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_GetExpirationTime as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), GetIssuedAt: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_GetIssuedAt as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), GetIssuer: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_GetIssuer as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), GetNotBefore: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_GetNotBefore as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), GetSubject: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_GetSubject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), parseClaimsString: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_parseClaimsString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), parseNumericDate: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_parseNumericDate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), parseString: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_parseString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ("jwt.MapClaims")
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("GetAudience", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"), "jwt.ClaimStrings"), "error"]), $.methodSignature("GetExpirationTime", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetIssuedAt", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetIssuer", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("GetNotBefore", [], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("GetSubject", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("parseClaimsString", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"), "jwt.ClaimStrings"), "error"]), $.methodSignature("parseNumericDate", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("jwt.NumericDate"), "error"]), $.methodSignature("parseString", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), "error"])])
}

var __goscriptAwait: any
