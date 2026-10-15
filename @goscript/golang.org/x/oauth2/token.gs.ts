// Generated file based on token.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as http from "@goscript/net/http/index.js"

import * as url from "@goscript/net/url/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as internal from "@goscript/golang.org/x/oauth2/internal/index.js"

import type * as __goscript_deviceauth from "./deviceauth.gs.ts"

import * as __goscript_oauth2 from "./oauth2.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/url/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/oauth2/internal/index.js"
import "./oauth2.gs.ts"

$.registerTypePackagePath("golang.org/x/oauth2", ["oauth2.Token", "oauth2.RetrieveError"])

export class Token {
	// AccessToken is the token that authorizes and authenticates
	// the requests.
	public get AccessToken(): string {
		return this._fields.AccessToken
	}

	public set AccessToken(value: string) {
		this._fields.AccessToken = value
	}

	// TokenType is the type of token.
	// The Type method returns either this or "Bearer", the default.
	public get TokenType(): string {
		return this._fields.TokenType
	}

	public set TokenType(value: string) {
		this._fields.TokenType = value
	}

	// RefreshToken is a token that's used by the application
	// (as opposed to the user) to refresh the access token
	// if it expires.
	public get RefreshToken(): string {
		return this._fields.RefreshToken
	}

	public set RefreshToken(value: string) {
		this._fields.RefreshToken = value
	}

	// Expiry is the optional expiration time of the access token.
	//
	// If zero, TokenSource implementations will reuse the same
	// token forever and RefreshToken or equivalent
	// mechanisms for that TokenSource will not be used.
	public get Expiry(): time.Time {
		return this._fields.Expiry
	}

	public set Expiry(value: time.Time) {
		this._fields.Expiry = value
	}

	// raw optionally contains extra metadata from the server
	// when updating a token.
	public get raw(): any {
		return this._fields.raw
	}

	public set raw(value: any) {
		this._fields.raw = value
	}

	// expiryDelta is used to calculate when a token is considered
	// expired, by subtracting from Expiry. If zero, defaultExpiryDelta
	// is used.
	public get expiryDelta(): time.Duration {
		return this._fields.expiryDelta
	}

	public set expiryDelta(value: time.Duration) {
		this._fields.expiryDelta = value
	}

	public _fields: {
		AccessToken: string
		TokenType: string
		RefreshToken: string
		Expiry: time.Time
		raw: any
		expiryDelta: time.Duration
	}

	constructor(init?: Partial<{AccessToken?: string, TokenType?: string, RefreshToken?: string, Expiry?: time.Time, raw?: any, expiryDelta?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			AccessToken: init?.AccessToken ?? ("" as string),
			TokenType: init?.TokenType ?? ("" as string),
			RefreshToken: init?.RefreshToken ?? ("" as string),
			Expiry: init?.Expiry ? $.markAsStructValue($.cloneStructValue(init.Expiry)) : $.markAsStructValue(new time.Time()),
			raw: init?.raw ?? (null! as any),
			expiryDelta: init?.expiryDelta ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Token {
		return new Token(this, true)
	}

	public __goscriptAssign(source: Token): void {
		const target = this._fields
		const values = source._fields
		target.AccessToken = values.AccessToken
		target.TokenType = values.TokenType
		target.RefreshToken = values.RefreshToken
		$.assignStruct(target.Expiry, values.Expiry)
		target.raw = $.assignFieldValue(target.raw, values.raw, { kind: $.TypeKind.Interface, methods: [] })
		target.expiryDelta = values.expiryDelta
	}

	public Extra(key: string): any {
		const t: Token | $.VarRef<Token> | null = this;
		const t$: Token = t == null ? $.pointerTarget<Token>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Token>(t)
		{
			let __goscriptTuple0: any = $.typeAssertTuple<globalThis.Map<string, any> | null>((t$ as Token).raw, /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))
			let raw: globalThis.Map<string, any> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				return $.mapGet<string, any, any>(raw, key, null)[0]
			}
		}

		let __goscriptTuple1: any = $.typeAssertTuple<url.Values>((t$ as Token).raw, "url.Values")
		let vals: url.Values = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (!ok) {
			return null
		}

		let v = url.Values_Get(vals, key)
		{
			let s = strings.TrimSpace(v)
			switch (strings.Count(s, ".")) {
				case 0:
				{
					{
						let [i, err] = strconv.ParseInt(s, 10, 64)
						if (err == null) {
							return $.basicInterfaceValue(i, "int64")
						}
					}
					break
				}
				case 1:
				{
					{
						let [f, err] = strconv.ParseFloat(s, 64)
						if (err == null) {
							return $.basicInterfaceValue(f, "float64")
						}
					}
					break
				}
			}
		}

		return v
	}

	public SetAuthHeader(r: http.Request | $.VarRef<http.Request> | null): void {
		const t: Token | $.VarRef<Token> | null = this;
		http.Header_Set($.pointerValue<http.Request>(r).Header, "Authorization", $.concatString(($.concatString((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Token).Type() : Token.prototype.Type.call(t)), " ")), $.pointerValue<Token>(t).AccessToken))
	}

	public Type(): string {
		const t: Token | $.VarRef<Token> | null = this;
		const t$: Token = t == null ? $.pointerTarget<Token>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Token>(t)
		if (strings.EqualFold((t$ as Token).TokenType, "bearer")) {
			return "Bearer"
		}
		if (strings.EqualFold((t$ as Token).TokenType, "mac")) {
			return "MAC"
		}
		if (strings.EqualFold((t$ as Token).TokenType, "basic")) {
			return "Basic"
		}
		if (!$.stringEqual((t$ as Token).TokenType, "")) {
			return (t$ as Token).TokenType
		}
		return "Bearer"
	}

	public async Valid(): globalThis.Promise<boolean> {
		const t: Token | $.VarRef<Token> | null = this;
		return ((t != null) && (!$.stringEqual($.pointerValue<Token>(t).AccessToken, ""))) && !await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as Token).expired() : Token.prototype.expired.call(t))
	}

	public WithExtra(extra: any): Token | $.VarRef<Token> | null {
		const t: Token | $.VarRef<Token> | null = this;
		let t2: Token | $.VarRef<Token> | null = new Token()
		$.assignStruct($.pointerValue<Token>(t2), $.pointerValue<Token>(t))
		$.pointerValue<Token>(t2).raw = extra
		return t2
	}

	public async expired(): globalThis.Promise<boolean> {
		const t: Token | $.VarRef<Token> | null = this;
		const t$: Token = t == null ? $.pointerTarget<Token>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<Token>(t)
		if ($.markAsStructValue($.cloneStructValue((t$ as Token).Expiry)).IsZero()) {
			return false
		}

		let expiryDelta = 10000000000n
		if ((t$ as Token).expiryDelta != 0n) {
			expiryDelta = (t$ as Token).expiryDelta
		}
		return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((t$ as Token).Expiry)).Round(0n))).Add(-expiryDelta))).Before($.markAsStructValue($.cloneStructValue(((__goscriptAwait = timeNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))))
	}

	static __typeInfo = $.registerStructType(
		"oauth2.Token",
		() => new Token(),
		() => [$.methodSignature("Extra", [["key", /* @__PURE__ */ $.basicType("string")]], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("SetAuthHeader", [["r", /* @__PURE__ */ $.pointerType("http.Request")]], [], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Valid", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("WithExtra", [["extra", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.pointerType("oauth2.Token")], true), $.methodSignature("expired", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		Token,
		() => [/* @__PURE__ */ $.structField("AccessToken", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"access_token\"" }), /* @__PURE__ */ $.structField("TokenType", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"token_type,omitempty\"" }), /* @__PURE__ */ $.structField("RefreshToken", /* @__PURE__ */ $.basicType("string"), [2], 32, true, { tag: "json:\"refresh_token,omitempty\"" }), /* @__PURE__ */ $.structField("Expiry", "time.Time", [3], 48, true, { tag: "json:\"expiry,omitempty\"" }), /* @__PURE__ */ $.structField("raw", { kind: $.TypeKind.Interface, methods: [] }, [4], 72, false, { pkgPath: "golang.org/x/oauth2" }), /* @__PURE__ */ $.structField("expiryDelta", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [5], 88, false, { pkgPath: "golang.org/x/oauth2" })]
	)
}

export class RetrieveError {
	public get Response(): http.Response | $.VarRef<http.Response> | null {
		return this._fields.Response
	}

	public set Response(value: http.Response | $.VarRef<http.Response> | null) {
		this._fields.Response = value
	}

	// Body is the body that was consumed by reading Response.Body.
	// It may be truncated.
	public get Body(): $.Slice<number> {
		return this._fields.Body
	}

	public set Body(value: $.Slice<number>) {
		this._fields.Body = value
	}

	// ErrorCode is RFC 6749's 'error' parameter.
	public get ErrorCode(): string {
		return this._fields.ErrorCode
	}

	public set ErrorCode(value: string) {
		this._fields.ErrorCode = value
	}

	// ErrorDescription is RFC 6749's 'error_description' parameter.
	public get ErrorDescription(): string {
		return this._fields.ErrorDescription
	}

	public set ErrorDescription(value: string) {
		this._fields.ErrorDescription = value
	}

	// ErrorURI is RFC 6749's 'error_uri' parameter.
	public get ErrorURI(): string {
		return this._fields.ErrorURI
	}

	public set ErrorURI(value: string) {
		this._fields.ErrorURI = value
	}

	public _fields: {
		Response: http.Response | $.VarRef<http.Response> | null
		Body: $.Slice<number>
		ErrorCode: string
		ErrorDescription: string
		ErrorURI: string
	}

	constructor(init?: Partial<{Response?: http.Response | $.VarRef<http.Response> | null, Body?: $.Slice<number>, ErrorCode?: string, ErrorDescription?: string, ErrorURI?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Response: init?.Response ?? (null! as http.Response | $.VarRef<http.Response> | null),
			Body: init?.Body ?? (null! as $.Slice<number>),
			ErrorCode: init?.ErrorCode ?? ("" as string),
			ErrorDescription: init?.ErrorDescription ?? ("" as string),
			ErrorURI: init?.ErrorURI ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RetrieveError {
		return new RetrieveError(this, true)
	}

	public __goscriptAssign(source: RetrieveError): void {
		const target = this._fields
		const values = source._fields
		target.Response = values.Response
		target.Body = values.Body
		target.ErrorCode = values.ErrorCode
		target.ErrorDescription = values.ErrorDescription
		target.ErrorURI = values.ErrorURI
	}

	public async Error(): globalThis.Promise<string> {
		const r: RetrieveError | $.VarRef<RetrieveError> | null = this;
		const r$: RetrieveError = r == null ? $.pointerTarget<RetrieveError>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<RetrieveError>(r)
		if (!$.stringEqual((r$ as RetrieveError).ErrorCode, "")) {
			let s = await fmt.Sprintf("oauth2: %q", (r$ as RetrieveError).ErrorCode)
			if (!$.stringEqual((r$ as RetrieveError).ErrorDescription, "")) {
				s = $.concatString(s, await fmt.Sprintf(" %q", (r$ as RetrieveError).ErrorDescription))
			}
			if (!$.stringEqual((r$ as RetrieveError).ErrorURI, "")) {
				s = $.concatString(s, await fmt.Sprintf(" %q", (r$ as RetrieveError).ErrorURI))
			}
			return s
		}
		return fmt.Sprintf("oauth2: cannot fetch token: %v\nResponse: %s", $.pointerValue<http.Response>((r$ as RetrieveError).Response).Status, $.interfaceValue((r$ as RetrieveError).Body, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
	}

	static __typeInfo = $.registerStructType(
		"oauth2.RetrieveError",
		() => new RetrieveError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		RetrieveError,
		() => [/* @__PURE__ */ $.structField("Response", /* @__PURE__ */ $.pointerType("http.Response"), [0], 0, true), /* @__PURE__ */ $.structField("Body", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, true), /* @__PURE__ */ $.structField("ErrorCode", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("ErrorDescription", /* @__PURE__ */ $.basicType("string"), [3], 48, true), /* @__PURE__ */ $.structField("ErrorURI", /* @__PURE__ */ $.basicType("string"), [4], 64, true)]
	)
}

export const defaultExpiryDelta: time.Duration = 10000000000n

export let timeNow: (() => time.Time | globalThis.Promise<time.Time>) | null = time.Now

export function __goscript_set_timeNow(__goscriptValue: (() => time.Time | globalThis.Promise<time.Time>) | null): void {
	timeNow = __goscriptValue
}

export function tokenFromInternal(t: internal.Token | $.VarRef<internal.Token> | null): Token | $.VarRef<Token> | null {
	const t$: internal.Token = t == null ? $.pointerTarget<internal.Token>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<internal.Token>(t)
	if (t == null) {
		return null
	}
	return new Token({AccessToken: (t$ as internal.Token).AccessToken, TokenType: (t$ as internal.Token).TokenType, RefreshToken: (t$ as internal.Token).RefreshToken, Expiry: $.markAsStructValue($.cloneStructValue((t$ as internal.Token).Expiry)), raw: (t$ as internal.Token).Raw})
}

export async function retrieveToken(ctx: context.Context | null, c: __goscript_oauth2.Config | $.VarRef<__goscript_oauth2.Config> | null, v: url.Values): globalThis.Promise<[Token | $.VarRef<Token> | null, $.GoError]> {
	const c$: __goscript_oauth2.Config = c == null ? $.pointerTarget<__goscript_oauth2.Config>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_oauth2.Config>(c)
	let __goscriptTuple2: any = await internal.RetrieveToken(ctx, (c$ as __goscript_oauth2.Config).ClientID, (c$ as __goscript_oauth2.Config).ClientSecret, (c$ as __goscript_oauth2.Config).Endpoint.TokenURL, v, $.int((c$ as __goscript_oauth2.Config).Endpoint.AuthStyle), (c$ as __goscript_oauth2.Config).authStyleCache.Get())
	let tk: internal.Token | $.VarRef<internal.Token> | null = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if (err != null) {
		{
			let __goscriptTuple3: any = $.typeAssertTuple<internal.RetrieveError | $.VarRef<internal.RetrieveError> | null>(err, /* @__PURE__ */ $.pointerType("internal.RetrieveError"))
			let rErr: internal.RetrieveError | $.VarRef<internal.RetrieveError> | null = __goscriptTuple3[0]
			let ok = __goscriptTuple3[1]
			if (ok) {
				return [null, $.interfaceValue<$.GoError>($.unsafePointerCast<RetrieveError | $.VarRef<RetrieveError> | null>(rErr, RetrieveError), "*oauth2.RetrieveError", /* @__PURE__ */ $.pointerType("oauth2.RetrieveError"))]
			}
		}
		return [null, err]
	}
	return [tokenFromInternal(tk), null]
}

var __goscriptAwait: any
