// Generated file based on parser.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as base64 from "@goscript/encoding/base64/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import type * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_claims from "./claims.gs.ts"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_errors_go1_20 from "./errors_go1_20.gs.ts"

import * as __goscript_map_claims from "./map_claims.gs.ts"

import * as __goscript_parser_option from "./parser_option.gs.ts"

import * as __goscript_signing_method from "./signing_method.gs.ts"

import * as __goscript_token from "./token.gs.ts"

import type * as __goscript_types from "./types.gs.ts"

import * as __goscript_validator from "./validator.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/encoding/base64/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "./claims.gs.ts"
import "./errors.gs.ts"
import "./errors_go1_20.gs.ts"
import "./map_claims.gs.ts"
import "./parser_option.gs.ts"
import "./signing_method.gs.ts"
import "./token.gs.ts"
import "./validator.gs.ts"

$.registerTypePackagePath("github.com/golang-jwt/jwt/v5", ["jwt.Parser"])

export class Parser {
	// If populated, only these methods will be considered valid.
	public get validMethods(): $.Slice<string> {
		return this._fields.validMethods
	}

	public set validMethods(value: $.Slice<string>) {
		this._fields.validMethods = value
	}

	// Use JSON Number format in JSON decoder.
	public get useJSONNumber(): boolean {
		return this._fields.useJSONNumber
	}

	public set useJSONNumber(value: boolean) {
		this._fields.useJSONNumber = value
	}

	// Skip claims validation during token parsing.
	public get skipClaimsValidation(): boolean {
		return this._fields.skipClaimsValidation
	}

	public set skipClaimsValidation(value: boolean) {
		this._fields.skipClaimsValidation = value
	}

	public get validator(): __goscript_validator.Validator | $.VarRef<__goscript_validator.Validator> | null {
		return this._fields.validator
	}

	public set validator(value: __goscript_validator.Validator | $.VarRef<__goscript_validator.Validator> | null) {
		this._fields.validator = value
	}

	public get decodeStrict(): boolean {
		return this._fields.decodeStrict
	}

	public set decodeStrict(value: boolean) {
		this._fields.decodeStrict = value
	}

	public get decodePaddingAllowed(): boolean {
		return this._fields.decodePaddingAllowed
	}

	public set decodePaddingAllowed(value: boolean) {
		this._fields.decodePaddingAllowed = value
	}

	public _fields: {
		validMethods: $.Slice<string>
		useJSONNumber: boolean
		skipClaimsValidation: boolean
		validator: __goscript_validator.Validator | $.VarRef<__goscript_validator.Validator> | null
		decodeStrict: boolean
		decodePaddingAllowed: boolean
	}

	constructor(init?: Partial<{validMethods?: $.Slice<string>, useJSONNumber?: boolean, skipClaimsValidation?: boolean, validator?: __goscript_validator.Validator | $.VarRef<__goscript_validator.Validator> | null, decodeStrict?: boolean, decodePaddingAllowed?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			validMethods: init?.validMethods ?? (null! as $.Slice<string>),
			useJSONNumber: init?.useJSONNumber ?? (false as boolean),
			skipClaimsValidation: init?.skipClaimsValidation ?? (false as boolean),
			validator: init?.validator ?? (null! as __goscript_validator.Validator | $.VarRef<__goscript_validator.Validator> | null),
			decodeStrict: init?.decodeStrict ?? (false as boolean),
			decodePaddingAllowed: init?.decodePaddingAllowed ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Parser {
		return new Parser(this, true)
	}

	public __goscriptAssign(source: Parser): void {
		const target = this._fields
		const values = source._fields
		target.validMethods = values.validMethods
		target.useJSONNumber = values.useJSONNumber
		target.skipClaimsValidation = values.skipClaimsValidation
		target.validator = values.validator
		target.decodeStrict = values.decodeStrict
		target.decodePaddingAllowed = values.decodePaddingAllowed
	}

	public DecodeSegment(seg: string): [$.Slice<number>, $.GoError] {
		const p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		let encoding: base64.Encoding | $.VarRef<base64.Encoding> | null = base64.RawURLEncoding

		if ((p$ as Parser).decodePaddingAllowed) {
			{
				let l = $.stringLen(seg) % 4
				if (l > 0) {
					seg = $.concatString(seg, strings.Repeat("=", 4 - l))
				}
			}
			encoding = base64.URLEncoding
		}

		if ((p$ as Parser).decodeStrict) {
			encoding = $.markAsStructValue($.cloneStructValue($.pointerValue<base64.Encoding>(encoding))).Strict()
		}
		return (encoding !== null && (encoding as any).__isVarRef !== true && (encoding as any).__goValue === undefined ? ((encoding as any) as base64.Encoding).DecodeString(seg) : base64.Encoding.prototype.DecodeString.call(encoding, seg))
	}

	public async Parse(tokenString: string, keyFunc: ((_p0: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null): globalThis.Promise<[__goscript_token.Token | $.VarRef<__goscript_token.Token> | null, $.GoError]> {
		const p: Parser | $.VarRef<Parser> | null = this;
		return Parser.prototype.ParseWithClaims.call(p, tokenString, $.namedValueInterfaceValue<__goscript_claims.Claims | null>($.makeMap<string, any>([]), "jwt.MapClaims", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), keyFunc)
	}

	public async ParseUnverified(tokenString: string, __goscriptParam0: __goscript_claims.Claims | null): globalThis.Promise<[__goscript_token.Token | $.VarRef<__goscript_token.Token> | null, $.Slice<string>, $.GoError]> {
		const p: Parser | $.VarRef<Parser> | null = this;
		let claims: $.VarRef<__goscript_claims.Claims | null> = $.varRef(__goscriptParam0)
		let token: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null = null! as __goscript_token.Token | $.VarRef<__goscript_token.Token> | null
		let parts: $.Slice<string> = null! as $.Slice<string>
		let err: $.GoError = null! as $.GoError
		parts = strings.Split(tokenString, ".")
		if ($.sliceLen(parts) != 3) {
			return [null, parts, __goscript_errors_go1_20.newError("token contains an invalid number of segments", __goscript_errors.ErrTokenMalformed, null)]
		}

		token = new __goscript_token.Token({Raw: tokenString})

		// parse Header
		let headerBytes: $.Slice<number> = null! as $.Slice<number>
		{
			let __goscriptTuple0: any = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).DecodeSegment($.arrayIndex(parts!, 0)) : Parser.prototype.DecodeSegment.call(p, $.arrayIndex(parts!, 0)))
			headerBytes = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			if (err != null) {
				return [token, parts, __goscript_errors_go1_20.newError("could not base64 decode header", __goscript_errors.ErrTokenMalformed, $.arrayToSlice<$.GoError>([err]))]
			}
		}
		{
			err = await json.Unmarshal(headerBytes, $.interfaceValue($.fieldRef($.pointerValue<__goscript_token.Token>(token)._fields, "Header"), "*map[string]interface{}", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))))
			if (err != null) {
				return [token, parts, __goscript_errors_go1_20.newError("could not JSON decode header", __goscript_errors.ErrTokenMalformed, $.arrayToSlice<$.GoError>([err]))]
			}
		}

		// parse Claims
		$.pointerValue<__goscript_token.Token>(token).Claims = claims.value

		let __goscriptTuple1: any = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).DecodeSegment($.arrayIndex(parts!, 1)) : Parser.prototype.DecodeSegment.call(p, $.arrayIndex(parts!, 1)))
		let claimBytes: $.Slice<number> = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [token, parts, __goscript_errors_go1_20.newError("could not base64 decode claim", __goscript_errors.ErrTokenMalformed, $.arrayToSlice<$.GoError>([err]))]
		}

		// If `useJSONNumber` is enabled then we must use *json.Decoder to decode
		// the claims. However, this comes with a performance penalty so only use
		// it if we must and, otherwise, simple use json.Unmarshal.
		if (!$.pointerValue<Parser>(p).useJSONNumber) {
			// JSON Unmarshal. Special case for map type to avoid weird pointer behavior.
			{
				let __goscriptTuple2: any = $.typeAssertTuple<__goscript_map_claims.MapClaims>($.pointerValue<__goscript_token.Token>(token).Claims, "jwt.MapClaims")
				let c: $.VarRef<__goscript_map_claims.MapClaims> = $.varRef(__goscriptTuple2[0])
				let ok = __goscriptTuple2[1]
				if (ok) {
					err = await json.Unmarshal(claimBytes, $.namedValueInterfaceValue<any>(c, "*jwt.MapClaims", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()))
				} else {
					err = await json.Unmarshal(claimBytes, $.interfaceValue(claims, "*jwt.Claims", /* @__PURE__ */ $.pointerType("jwt.Claims")))
				}
			}
		} else {
			let dec: json.Decoder | $.VarRef<json.Decoder> | null = json.NewDecoder($.pointerValueOrNil($.interfaceValue<io.Reader | null>(bytes.NewBuffer(claimBytes), "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!)
			json.Decoder.prototype.UseNumber.call($.pointerValue<json.Decoder>(dec))
			// JSON Decode. Special case for map type to avoid weird pointer behavior.
			{
				let __goscriptTuple3: any = $.typeAssertTuple<__goscript_map_claims.MapClaims>($.pointerValue<__goscript_token.Token>(token).Claims, "jwt.MapClaims")
				let c: $.VarRef<__goscript_map_claims.MapClaims> = $.varRef(__goscriptTuple3[0])
				let ok = __goscriptTuple3[1]
				if (ok) {
					err = await json.Decoder.prototype.Decode.call($.pointerValue<json.Decoder>(dec), $.namedValueInterfaceValue<any>(c, "*jwt.MapClaims", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2()))
				} else {
					err = await json.Decoder.prototype.Decode.call($.pointerValue<json.Decoder>(dec), $.interfaceValue(claims, "*jwt.Claims", /* @__PURE__ */ $.pointerType("jwt.Claims")))
				}
			}
		}
		if (err != null) {
			return [token, parts, __goscript_errors_go1_20.newError("could not JSON decode claim", __goscript_errors.ErrTokenMalformed, $.arrayToSlice<$.GoError>([err]))]
		}

		// Lookup signature method
		{
			let [method, ok] = $.typeAssertTuple<string>($.mapGet<string, any, any>($.pointerValue<__goscript_token.Token>(token).Header, "alg", null)[0], /* @__PURE__ */ $.basicType("string"))
			if (ok) {
				{
					$.pointerValue<__goscript_token.Token>(token).Method = await __goscript_signing_method.GetSigningMethod(method)
					if ($.pointerValue<__goscript_token.Token>(token).Method == null) {
						return [token, parts, __goscript_errors_go1_20.newError("signing method (alg) is unavailable", __goscript_errors.ErrTokenUnverifiable, null)]
					}
				}
			} else {
				return [token, parts, __goscript_errors_go1_20.newError("signing method (alg) is unspecified", __goscript_errors.ErrTokenUnverifiable, null)]
			}
		}

		return [token, parts, null]
	}

	public async ParseWithClaims(tokenString: string, claims: __goscript_claims.Claims | null, keyFunc: ((_p0: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null): globalThis.Promise<[__goscript_token.Token | $.VarRef<__goscript_token.Token> | null, $.GoError]> {
		let p: Parser | $.VarRef<Parser> | null = this;
		const p$: Parser = p == null ? $.pointerTarget<Parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<Parser>(p)
		let __goscriptTuple4: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).ParseUnverified(tokenString, claims) : Parser.prototype.ParseUnverified.call(p, tokenString, claims))
		let token: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null = __goscriptTuple4[0]
		let parts: $.Slice<string> = __goscriptTuple4[1]
		let err = __goscriptTuple4[2]
		let token$: __goscript_token.Token = token == null ? $.pointerTarget<__goscript_token.Token>(token) : (token as any).__isVarRef === true ? (token as any).value : (token as any).__goValue === undefined ? (token as any) : $.pointerTarget<__goscript_token.Token>(token)
		if (err != null) {
			return [token, err]
		}

		// Verify signing method is in the required set
		if ((p$ as Parser).validMethods != null) {
			let signingMethodValid: boolean = false
			let alg: string = (__goscriptAwait = $.pointerValue<Exclude<__goscript_signing_method.SigningMethod, null>>((token$ as __goscript_token.Token).Method).Alg(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			for (let __goscriptRangeTarget0 = (p$ as Parser).validMethods, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let m = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
				if ($.stringEqual(m, alg)) {
					signingMethodValid = true
					break
				}
			}
			if (!signingMethodValid) {
				// signing method is not in the listed set
				return [token, __goscript_errors_go1_20.newError(await fmt.Sprintf("signing method %v is invalid", alg), __goscript_errors.ErrTokenSignatureInvalid, null)]
			}
		}

		// Decode signature
		let __goscriptTuple5: any = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Parser).DecodeSegment($.arrayIndex(parts!, 2)) : Parser.prototype.DecodeSegment.call(p, $.arrayIndex(parts!, 2)));
		;(token$ as __goscript_token.Token).Signature = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [token, __goscript_errors_go1_20.newError("could not base64 decode signature", __goscript_errors.ErrTokenMalformed, $.arrayToSlice<$.GoError>([err]))]
		}
		let text = strings.Join($.goSlice(parts, 0, 2), ".")

		// Lookup key(s)
		if (keyFunc == null) {
			// keyFunc was not provided.  short circuiting validation
			return [token, __goscript_errors_go1_20.newError("no keyfunc was provided", __goscript_errors.ErrTokenUnverifiable, null)]
		}

		let __goscriptTuple6: any = await keyFunc!(token)
		let got = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return [token, __goscript_errors_go1_20.newError("error while executing keyfunc", __goscript_errors.ErrTokenUnverifiable, $.arrayToSlice<$.GoError>([err]))]
		}

		{
			const __goscriptTypeSwitchValue = got
			switch (true) {
				case $.typeAssert<__goscript_token.VerificationKeySet>(__goscriptTypeSwitchValue, "jwt.VerificationKeySet").ok:
					{
						let have: __goscript_token.VerificationKeySet = $.markAsStructValue($.cloneStructValue($.typeAssert<__goscript_token.VerificationKeySet>(__goscriptTypeSwitchValue, "jwt.VerificationKeySet").value))
						if ($.sliceLen(have.Keys) == 0) {
							return [token, __goscript_errors_go1_20.newError("keyfunc returned empty verification key set", __goscript_errors.ErrTokenUnverifiable, null)]
						}
						// Iterate through keys and verify signature, skipping the rest when a match is found.
						// Return the last error if no match is found.
						for (let __goscriptRangeTarget1 = have.Keys, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
							let key = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_token.VerificationKey | null)
							{
								err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_signing_method.SigningMethod, null>>((token$ as __goscript_token.Token).Method).Verify(text, (token$ as __goscript_token.Token).Signature, (key as any)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								if (err == null) {
									break
								}
							}
						}
					}
					break
				default:
					{
						let have: any = __goscriptTypeSwitchValue
						err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_signing_method.SigningMethod, null>>((token$ as __goscript_token.Token).Method).Verify(text, (token$ as __goscript_token.Token).Signature, have), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
			}
		}
		if (err != null) {
			return [token, __goscript_errors_go1_20.newError("", __goscript_errors.ErrTokenSignatureInvalid, $.arrayToSlice<$.GoError>([err]))]
		}

		// Validate Claims
		if (!(p$ as Parser).skipClaimsValidation) {
			// Make sure we have at least a default validator
			if ((p$ as Parser).validator == null) {
				;(p$ as Parser).validator = await __goscript_validator.NewValidator(null)
			}

			{
				let __goscriptShadow0 = await __goscript_validator.Validator.prototype.Validate.call((p$ as Parser).validator, claims)
				if (__goscriptShadow0 != null) {
					return [token, __goscript_errors_go1_20.newError("", __goscript_errors.ErrTokenInvalidClaims, $.arrayToSlice<$.GoError>([__goscriptShadow0]))]
				}
			}
		}

		// No errors so far, token is valid.
		;(token$ as __goscript_token.Token).Valid = true

		return [token, null]
	}

	static __typeInfo = $.registerStructType(
		"jwt.Parser",
		() => new Parser(),
		() => [$.methodSignature("DecodeSegment", [["seg", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Parse", [["tokenString", /* @__PURE__ */ $.basicType("string")], ["keyFunc", ({ kind: $.TypeKind.Function, name: "jwt.Keyfunc", params: [/* @__PURE__ */ $.pointerType("jwt.Token")], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("jwt.Token"), "error"], true), $.methodSignature("ParseUnverified", [["tokenString", /* @__PURE__ */ $.basicType("string")], ["claims", "jwt.Claims"]], [["token", /* @__PURE__ */ $.pointerType("jwt.Token")], ["parts", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["err", "error"]], true), $.methodSignature("ParseWithClaims", [["tokenString", /* @__PURE__ */ $.basicType("string")], ["claims", "jwt.Claims"], ["keyFunc", ({ kind: $.TypeKind.Function, name: "jwt.Keyfunc", params: [/* @__PURE__ */ $.pointerType("jwt.Token")], results: [{ kind: $.TypeKind.Interface, methods: [] }, "error"] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("jwt.Token"), "error"], true)],
		Parser,
		() => [/* @__PURE__ */ $.structField("validMethods", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [0], 0, false, { pkgPath: "github.com/golang-jwt/jwt/v5" }), /* @__PURE__ */ $.structField("useJSONNumber", /* @__PURE__ */ $.basicType("bool"), [1], 24, false, { pkgPath: "github.com/golang-jwt/jwt/v5" }), /* @__PURE__ */ $.structField("skipClaimsValidation", /* @__PURE__ */ $.basicType("bool"), [2], 25, false, { pkgPath: "github.com/golang-jwt/jwt/v5" }), /* @__PURE__ */ $.structField("validator", /* @__PURE__ */ $.pointerType("jwt.Validator"), [3], 32, false, { pkgPath: "github.com/golang-jwt/jwt/v5" }), /* @__PURE__ */ $.structField("decodeStrict", /* @__PURE__ */ $.basicType("bool"), [4], 40, false, { pkgPath: "github.com/golang-jwt/jwt/v5" }), /* @__PURE__ */ $.structField("decodePaddingAllowed", /* @__PURE__ */ $.basicType("bool"), [5], 41, false, { pkgPath: "github.com/golang-jwt/jwt/v5" })]
	)
}

export async function NewParser(options: $.Slice<__goscript_parser_option.ParserOption | null>): globalThis.Promise<Parser | $.VarRef<Parser> | null> {
	let p: Parser | $.VarRef<Parser> | null = new Parser({validator: new __goscript_validator.Validator()})

	// Loop through our parsing options and apply them
	for (let __goscriptRangeTarget2 = options, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let option = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_parser_option.ParserOption | null)
		void (__goscriptAwait = option!(p), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	return p
}

export async function Parse(tokenString: string, keyFunc: ((_p0: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null, options: $.Slice<__goscript_parser_option.ParserOption | null>): globalThis.Promise<[__goscript_token.Token | $.VarRef<__goscript_token.Token> | null, $.GoError]> {
	return Parser.prototype.Parse.call(await NewParser(options), tokenString, keyFunc)
}

export async function ParseWithClaims(tokenString: string, claims: __goscript_claims.Claims | null, keyFunc: ((_p0: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null) => [any, $.GoError] | globalThis.Promise<[any, $.GoError]>) | null, options: $.Slice<__goscript_parser_option.ParserOption | null>): globalThis.Promise<[__goscript_token.Token | $.VarRef<__goscript_token.Token> | null, $.GoError]> {
	return Parser.prototype.ParseWithClaims.call(await NewParser(options), tokenString, claims, keyFunc)
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

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({GetAudience: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_GetAudience as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), GetExpirationTime: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_GetExpirationTime as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), GetIssuedAt: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_GetIssuedAt as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), GetIssuer: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_GetIssuer as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), GetNotBefore: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_GetNotBefore as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), GetSubject: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_GetSubject as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), parseClaimsString: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_parseClaimsString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), parseNumericDate: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_parseNumericDate as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), parseString: (receiver: any, ...args: any[]) => (__goscript_map_claims.MapClaims_parseString as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.pointerType("jwt.MapClaims"))
}

var __goscriptAwait: any
