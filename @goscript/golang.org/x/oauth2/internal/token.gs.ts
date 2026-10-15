// Generated file based on token.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as math from "@goscript/math/index.js"

import * as mime from "@goscript/mime/index.js"

import * as http from "@goscript/net/http/index.js"

import * as url from "@goscript/net/url/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/math/index.js"
import "@goscript/mime/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/url/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "./transport.gs.ts"

$.registerTypePackagePath("golang.org/x/oauth2/internal", ["internal.Token", "internal.tokenJSON", "internal.expirationTime", "internal.AuthStyle", "internal.LazyAuthStyleCache", "internal.AuthStyleCache", "internal.RetrieveError"])

export type expirationTime = number

$.registerNamedValueType(
	"*internal.expirationTime",
	{UnmarshalJSON: (receiver: any, ...args: any[]) => (expirationTime_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("UnmarshalJSON", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type AuthStyle = number

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

	// Raw optionally contains extra metadata from the server
	// when updating a token.
	public get Raw(): any {
		return this._fields.Raw
	}

	public set Raw(value: any) {
		this._fields.Raw = value
	}

	public _fields: {
		AccessToken: string
		TokenType: string
		RefreshToken: string
		Expiry: time.Time
		Raw: any
	}

	constructor(init?: Partial<{AccessToken?: string, TokenType?: string, RefreshToken?: string, Expiry?: time.Time, Raw?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			AccessToken: init?.AccessToken ?? ("" as string),
			TokenType: init?.TokenType ?? ("" as string),
			RefreshToken: init?.RefreshToken ?? ("" as string),
			Expiry: init?.Expiry ? $.markAsStructValue($.cloneStructValue(init.Expiry)) : $.markAsStructValue(new time.Time()),
			Raw: init?.Raw ?? (null! as any)
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
		target.Raw = $.assignFieldValue(target.Raw, values.Raw, { kind: $.TypeKind.Interface, methods: [] })
	}

	static __typeInfo = $.registerStructType(
		"internal.Token",
		() => new Token(),
		() => [],
		Token,
		() => [/* @__PURE__ */ $.structField("AccessToken", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("TokenType", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("RefreshToken", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Expiry", "time.Time", [3], 48, true), /* @__PURE__ */ $.structField("Raw", { kind: $.TypeKind.Interface, methods: [] }, [4], 72, true)]
	)
}

export class tokenJSON {
	public get AccessToken(): string {
		return this._fields.AccessToken
	}

	public set AccessToken(value: string) {
		this._fields.AccessToken = value
	}

	public get TokenType(): string {
		return this._fields.TokenType
	}

	public set TokenType(value: string) {
		this._fields.TokenType = value
	}

	public get RefreshToken(): string {
		return this._fields.RefreshToken
	}

	public set RefreshToken(value: string) {
		this._fields.RefreshToken = value
	}

	public get ExpiresIn(): expirationTime {
		return this._fields.ExpiresIn
	}

	public set ExpiresIn(value: expirationTime) {
		this._fields.ExpiresIn = value
	}

	// error fields
	// https://datatracker.ietf.org/doc/html/rfc6749#section-5.2
	public get ErrorCode(): string {
		return this._fields.ErrorCode
	}

	public set ErrorCode(value: string) {
		this._fields.ErrorCode = value
	}

	public get ErrorDescription(): string {
		return this._fields.ErrorDescription
	}

	public set ErrorDescription(value: string) {
		this._fields.ErrorDescription = value
	}

	public get ErrorURI(): string {
		return this._fields.ErrorURI
	}

	public set ErrorURI(value: string) {
		this._fields.ErrorURI = value
	}

	public _fields: {
		AccessToken: string
		TokenType: string
		RefreshToken: string
		ExpiresIn: expirationTime
		ErrorCode: string
		ErrorDescription: string
		ErrorURI: string
	}

	constructor(init?: Partial<{AccessToken?: string, TokenType?: string, RefreshToken?: string, ExpiresIn?: expirationTime, ErrorCode?: string, ErrorDescription?: string, ErrorURI?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			AccessToken: init?.AccessToken ?? ("" as string),
			TokenType: init?.TokenType ?? ("" as string),
			RefreshToken: init?.RefreshToken ?? ("" as string),
			ExpiresIn: init?.ExpiresIn ?? (0 as expirationTime),
			ErrorCode: init?.ErrorCode ?? ("" as string),
			ErrorDescription: init?.ErrorDescription ?? ("" as string),
			ErrorURI: init?.ErrorURI ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tokenJSON {
		return new tokenJSON(this, true)
	}

	public __goscriptAssign(source: tokenJSON): void {
		const target = this._fields
		const values = source._fields
		target.AccessToken = values.AccessToken
		target.TokenType = values.TokenType
		target.RefreshToken = values.RefreshToken
		target.ExpiresIn = values.ExpiresIn
		target.ErrorCode = values.ErrorCode
		target.ErrorDescription = values.ErrorDescription
		target.ErrorURI = values.ErrorURI
	}

	public expiry(): time.Time {
		const e: tokenJSON | $.VarRef<tokenJSON> | null = this;
		let t: time.Time = $.markAsStructValue(new time.Time())
		{
			let v = $.pointerValue<tokenJSON>(e).ExpiresIn
			if (v != 0) {
				return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Now())).Add($.int64Mul($.int64(v), 1000000000n))))
			}
		}
		return t
	}

	static __typeInfo = $.registerStructType(
		"internal.tokenJSON",
		() => new tokenJSON(),
		() => [$.methodSignature("expiry", [], [["t", "time.Time"]], true)],
		tokenJSON,
		() => [/* @__PURE__ */ $.structField("AccessToken", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"access_token\"" }), /* @__PURE__ */ $.structField("TokenType", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"token_type\"" }), /* @__PURE__ */ $.structField("RefreshToken", /* @__PURE__ */ $.basicType("string"), [2], 32, true, { tag: "json:\"refresh_token\"" }), /* @__PURE__ */ $.structField("ExpiresIn", /* @__PURE__ */ $.basicType("int32", "internal.expirationTime"), [3], 48, true, { tag: "json:\"expires_in\"" }), /* @__PURE__ */ $.structField("ErrorCode", /* @__PURE__ */ $.basicType("string"), [4], 56, true, { tag: "json:\"error\"" }), /* @__PURE__ */ $.structField("ErrorDescription", /* @__PURE__ */ $.basicType("string"), [5], 72, true, { tag: "json:\"error_description\"" }), /* @__PURE__ */ $.structField("ErrorURI", /* @__PURE__ */ $.basicType("string"), [6], 88, true, { tag: "json:\"error_uri\"" })]
	)
}

export class LazyAuthStyleCache {
	public get v(): atomic.Value {
		return this._fields.v
	}

	public set v(value: atomic.Value) {
		this._fields.v = value
	}

	public _fields: {
		v: atomic.Value
	}

	constructor(init?: Partial<{v?: atomic.Value}>, __goscriptValue?: boolean) {
		this._fields = {
			v: init?.v ? $.markAsStructValue($.cloneStructValue(init.v)) : $.markAsStructValue(new atomic.Value())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LazyAuthStyleCache {
		return new LazyAuthStyleCache(this, true)
	}

	public __goscriptAssign(source: LazyAuthStyleCache): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.v, values.v)
	}

	public Get(): AuthStyleCache | $.VarRef<AuthStyleCache> | null {
		const lc: LazyAuthStyleCache | $.VarRef<LazyAuthStyleCache> | null = this;
		const lc$: LazyAuthStyleCache = lc == null ? $.pointerTarget<LazyAuthStyleCache>(lc) : (lc as any).__isVarRef === true ? (lc as any).value : (lc as any).__goValue === undefined ? (lc as any) : $.pointerTarget<LazyAuthStyleCache>(lc)
		{
			let __goscriptTuple1: any = $.typeAssertTuple<AuthStyleCache | $.VarRef<AuthStyleCache> | null>((lc$ as LazyAuthStyleCache).v.Load(), /* @__PURE__ */ $.pointerType("internal.AuthStyleCache"))
			let c: AuthStyleCache | $.VarRef<AuthStyleCache> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				return c
			}
		}
		let c: AuthStyleCache | $.VarRef<AuthStyleCache> | null = new AuthStyleCache()
		if (!(lc$ as LazyAuthStyleCache).v.CompareAndSwap(null, $.interfaceValue(c, "*internal.AuthStyleCache", /* @__PURE__ */ $.pointerType("internal.AuthStyleCache")))) {
			c = $.mustTypeAssert<AuthStyleCache | $.VarRef<AuthStyleCache> | null>((lc$ as LazyAuthStyleCache).v.Load(), /* @__PURE__ */ $.pointerType("internal.AuthStyleCache"))
		}
		return c
	}

	static __typeInfo = $.registerStructType(
		"internal.LazyAuthStyleCache",
		() => new LazyAuthStyleCache(),
		() => [$.methodSignature("Get", [], [/* @__PURE__ */ $.pointerType("internal.AuthStyleCache")], true)],
		LazyAuthStyleCache,
		() => [/* @__PURE__ */ $.structField("v", "atomic.Value", [0], 0, false, { pkgPath: "golang.org/x/oauth2/internal" })]
	)
}

export class AuthStyleCache {
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get m(): globalThis.Map<string, AuthStyle> | null {
		return this._fields.m
	}

	public set m(value: globalThis.Map<string, AuthStyle> | null) {
		this._fields.m = value
	}

	public _fields: {
		mu: sync.Mutex
		m: globalThis.Map<string, AuthStyle> | null
	}

	constructor(init?: Partial<{mu?: sync.Mutex, m?: globalThis.Map<string, AuthStyle> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			m: init?.m ?? (null! as globalThis.Map<string, AuthStyle> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): AuthStyleCache {
		return new AuthStyleCache(this, true)
	}

	public __goscriptAssign(source: AuthStyleCache): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.m = values.m
	}

	public async lookupAuthStyle(tokenURL: string): globalThis.Promise<[AuthStyle, boolean]> {
		const c: AuthStyleCache | $.VarRef<AuthStyleCache> | null = this;
		let style: AuthStyle = 0
		let ok: boolean = false
		using __defer = new $.DisposableStack()
		const c$: AuthStyleCache = c == null ? $.pointerTarget<AuthStyleCache>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<AuthStyleCache>(c)
		await (c$ as AuthStyleCache).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as AuthStyleCache).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		let __goscriptTuple2: any = $.mapGet<string, AuthStyle, AuthStyle>((c$ as AuthStyleCache).m, tokenURL, 0)
		style = __goscriptTuple2[0]
		ok = __goscriptTuple2[1]
		__defer.dispose()
		return [style, ok]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async setAuthStyle(tokenURL: string, v: AuthStyle): globalThis.Promise<void> {
		let c: AuthStyleCache | $.VarRef<AuthStyleCache> | null = this;
		using __defer = new $.DisposableStack()
		const c$: AuthStyleCache = c == null ? $.pointerTarget<AuthStyleCache>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<AuthStyleCache>(c)
		await (c$ as AuthStyleCache).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((c$ as AuthStyleCache).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		if ((c$ as AuthStyleCache).m == null) {
			;(c$ as AuthStyleCache).m = $.makeMap<string, AuthStyle>()
		}
		$.mapSet((c$ as AuthStyleCache).m, tokenURL, v)
	}

	static __typeInfo = $.registerStructType(
		"internal.AuthStyleCache",
		() => new AuthStyleCache(),
		() => [$.methodSignature("lookupAuthStyle", [["tokenURL", /* @__PURE__ */ $.basicType("string")]], [["style", /* @__PURE__ */ $.basicType("int", "internal.AuthStyle")], ["ok", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("setAuthStyle", [["tokenURL", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("int", "internal.AuthStyle")]], [], true)],
		AuthStyleCache,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "golang.org/x/oauth2/internal" }), /* @__PURE__ */ $.structField("m", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int", "internal.AuthStyle")), [1], 8, false, { pkgPath: "golang.org/x/oauth2/internal" })]
	)
}

export class RetrieveError {
	public get Response(): http.Response | $.VarRef<http.Response> | null {
		return this._fields.Response
	}

	public set Response(value: http.Response | $.VarRef<http.Response> | null) {
		this._fields.Response = value
	}

	public get Body(): $.Slice<number> {
		return this._fields.Body
	}

	public set Body(value: $.Slice<number>) {
		this._fields.Body = value
	}

	public get ErrorCode(): string {
		return this._fields.ErrorCode
	}

	public set ErrorCode(value: string) {
		this._fields.ErrorCode = value
	}

	public get ErrorDescription(): string {
		return this._fields.ErrorDescription
	}

	public set ErrorDescription(value: string) {
		this._fields.ErrorDescription = value
	}

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
		"internal.RetrieveError",
		() => new RetrieveError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		RetrieveError,
		() => [/* @__PURE__ */ $.structField("Response", /* @__PURE__ */ $.pointerType("http.Response"), [0], 0, true), /* @__PURE__ */ $.structField("Body", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, true), /* @__PURE__ */ $.structField("ErrorCode", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("ErrorDescription", /* @__PURE__ */ $.basicType("string"), [3], 48, true), /* @__PURE__ */ $.structField("ErrorURI", /* @__PURE__ */ $.basicType("string"), [4], 64, true)]
	)
}

export const AuthStyleUnknown: AuthStyle = 0

export const AuthStyleInParams: AuthStyle = 1

export const AuthStyleInHeader: AuthStyle = 2

export async function expirationTime_UnmarshalJSON(e: $.VarRef<expirationTime> | null, b: $.Slice<number>): globalThis.Promise<$.GoError> {
	if (($.sliceLen(b) == 0) || ($.stringEqual($.bytesToString(b), "null"))) {
		return null
	}
	let n: $.VarRef<json.Number> = $.varRef("")
	let err: $.GoError = await json.Unmarshal(b, $.namedValueInterfaceValue<any>(n, "*json.Number", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	if (err != null) {
		return err
	}
	let __goscriptTuple0: any = json.Number_Int64(n.value)
	let i = __goscriptTuple0[0]
	err = __goscriptTuple0[1]
	if (err != null) {
		return err
	}
	if (i > 2147483647n) {
		i = 2147483647n
	}
	e!.value = $.int(i, 32)
	return null
}

export function RegisterBrokenAuthHeaderProvider(tokenURL: string): void {
}

export function newTokenRequest(tokenURL: string, clientID: string, clientSecret: string, v: url.Values, authStyle: AuthStyle): [http.Request | $.VarRef<http.Request> | null, $.GoError] {
	if (authStyle == 1) {
		v = cloneURLValues(v)
		if (!$.stringEqual(clientID, "")) {
			url.Values_Set(v, "client_id", clientID)
		}
		if (!$.stringEqual(clientSecret, "")) {
			url.Values_Set(v, "client_secret", clientSecret)
		}
	}
	let __goscriptTuple3: any = http.NewRequest("POST", tokenURL, $.pointerValueOrNil($.interfaceValue<io.Reader | null>(strings.NewReader(url.Values_Encode(v)), "*strings.Reader", /* @__PURE__ */ $.pointerType("strings.Reader")))!)
	let req: http.Request | $.VarRef<http.Request> | null = __goscriptTuple3[0]
	let err = __goscriptTuple3[1]
	if (err != null) {
		return [null, err]
	}
	http.Header_Set($.pointerValue<http.Request>(req).Header, "Content-Type", "application/x-www-form-urlencoded")
	if (authStyle == 2) {
		http.Request.prototype.SetBasicAuth.call($.pointerValue<http.Request>(req), url.QueryEscape(clientID), url.QueryEscape(clientSecret))
	}
	return [req, null]
}

export function cloneURLValues(v: url.Values): url.Values {
	let v2: url.Values = $.makeMap<string, $.Slice<string>>()
	for (let [k, vv] of v?.entries() ?? []) {
		$.mapSet(v2, k, $.appendSlice<string>(null, vv))
	}
	return v2
}

export async function RetrieveToken(ctx: context.Context | null, clientID: string, clientSecret: string, tokenURL: string, v: url.Values, authStyle: AuthStyle, styleCache: AuthStyleCache | $.VarRef<AuthStyleCache> | null): globalThis.Promise<[Token | $.VarRef<Token> | null, $.GoError]> {
	let needsAuthStyleProbe = authStyle == 0
	if (needsAuthStyleProbe) {
		{
			let [style, ok] = await (styleCache !== null && (styleCache as any).__isVarRef !== true && (styleCache as any).__goValue === undefined ? ((styleCache as any) as AuthStyleCache).lookupAuthStyle(tokenURL) : AuthStyleCache.prototype.lookupAuthStyle.call(styleCache, tokenURL))
			if (ok) {
				authStyle = style
				needsAuthStyleProbe = false
			} else {
				authStyle = 2
			}
		}
	}
	let __goscriptTuple4: any = newTokenRequest(tokenURL, clientID, clientSecret, v, authStyle)
	let req: http.Request | $.VarRef<http.Request> | null = __goscriptTuple4[0]
	let err = __goscriptTuple4[1]
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple5: any = await doTokenRoundTrip(ctx, req)
	let token: Token | $.VarRef<Token> | null = __goscriptTuple5[0]
	err = __goscriptTuple5[1]
	if ((err != null) && needsAuthStyleProbe) {
		// If we get an error, assume the server wants the
		// clientID & clientSecret in a different form.
		// See https://code.google.com/p/goauth2/issues/detail?id=31 for background.
		// In summary:
		// - Reddit only accepts client secret in the Authorization header
		// - Dropbox accepts either it in URL param or Auth header, but not both.
		// - Google only accepts URL param (not spec compliant?), not Auth header
		// - Stripe only accepts client secret in Auth header with Bearer method, not Basic
		//
		// We used to maintain a big table in this code of all the sites and which way
		// they went, but maintaining it didn't scale & got annoying.
		// So just try both ways.
		authStyle = 1
		let __goscriptTuple6: any = newTokenRequest(tokenURL, clientID, clientSecret, v, authStyle)
		req = __goscriptTuple6[0]
		let __goscriptTuple7: any = await doTokenRoundTrip(ctx, req)
		token = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
	}
	if (needsAuthStyleProbe && (err == null)) {
		await (styleCache !== null && (styleCache as any).__isVarRef !== true && (styleCache as any).__goValue === undefined ? ((styleCache as any) as AuthStyleCache).setAuthStyle(tokenURL, authStyle) : AuthStyleCache.prototype.setAuthStyle.call(styleCache, tokenURL, authStyle))
	}
	// Don't overwrite `RefreshToken` with an empty value
	// if this was a token refreshing request.
	if ((token != null) && ($.stringEqual($.pointerValue<Token>(token).RefreshToken, ""))) {
		$.pointerValue<Token>(token).RefreshToken = url.Values_Get(v, "refresh_token")
	}
	return [token, err]
}

export async function doTokenRoundTrip(ctx: context.Context | null, req: http.Request | $.VarRef<http.Request> | null): globalThis.Promise<[Token | $.VarRef<Token> | null, $.GoError]> {
	let __goscriptTuple8: any = await http.Client.prototype.Do.call($.pointerValue<http.Client>(await __goscript_transport.ContextClient(ctx)), http.Request.prototype.WithContext.call($.pointerValue<http.Request>(req), $.pointerValueOrNil(ctx)!))
	let r: http.Response | $.VarRef<http.Response> | null = __goscriptTuple8[0]
	let err = __goscriptTuple8[1]
	let r$: http.Response = r == null ? $.pointerTarget<http.Response>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<http.Response>(r)
	if (err != null) {
		return [null, err]
	}
	let __goscriptTuple9: any = await ioutil.ReadAll(io.LimitReader($.pointerValueOrNil(((r$ as http.Response).Body as io.Reader | null))!, 1048576n))
	let body: $.Slice<number> = __goscriptTuple9[0]
	err = __goscriptTuple9[1]
	await $.pointerValue<Exclude<io.ReadCloser, null>>((r$ as http.Response).Body).Close()
	if (err != null) {
		return [null, fmt.Errorf("oauth2: cannot fetch token: %v", (err as any))]
	}

	let failureStatus = ((r$ as http.Response).StatusCode < 200) || ((r$ as http.Response).StatusCode > 299)
	let retrieveError: RetrieveError | $.VarRef<RetrieveError> | null = new RetrieveError({Response: r, Body: body})
	let retrieveError$: RetrieveError = retrieveError == null ? $.pointerTarget<RetrieveError>(retrieveError) : (retrieveError as any).__isVarRef === true ? (retrieveError as any).value : (retrieveError as any).__goValue === undefined ? (retrieveError as any) : $.pointerTarget<RetrieveError>(retrieveError)

	let token: Token | $.VarRef<Token> | null = null! as Token | $.VarRef<Token> | null
	let [content, , ] = mime.ParseMediaType(await http.Header_Get((r$ as http.Response).Header, "Content-Type"))
	switch (content) {
		case "application/x-www-form-urlencoded":
		case "text/plain":
		{
			let __goscriptTuple10: any = url.ParseQuery($.bytesToString(body))
			let vals: url.Values = __goscriptTuple10[0]
			let __goscriptShadow0 = __goscriptTuple10[1]
			if (__goscriptShadow0 != null) {
				if (failureStatus) {
					return [null, $.interfaceValue<$.GoError>(retrieveError, "*internal.RetrieveError", /* @__PURE__ */ $.pointerType("internal.RetrieveError"))]
				}
				return [null, fmt.Errorf("oauth2: cannot parse response: %v", (__goscriptShadow0 as any))]
			}
			;(retrieveError$ as RetrieveError).ErrorCode = url.Values_Get(vals, "error");
			;(retrieveError$ as RetrieveError).ErrorDescription = url.Values_Get(vals, "error_description");
			;(retrieveError$ as RetrieveError).ErrorURI = url.Values_Get(vals, "error_uri")
			token = (() => { const __goscriptLiteralField0 = url.Values_Get(vals, "access_token"); const __goscriptLiteralField1 = url.Values_Get(vals, "token_type"); const __goscriptLiteralField2 = url.Values_Get(vals, "refresh_token"); return new Token({AccessToken: __goscriptLiteralField0, TokenType: __goscriptLiteralField1, RefreshToken: __goscriptLiteralField2, Raw: $.namedValueInterfaceValue<any>(vals, "url.Values", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())}) })()
			let e = url.Values_Get(vals, "expires_in")
			let [expires, ] = strconv.Atoi(e)
			if (expires != 0) {
				$.assignStruct($.pointerValue<Token>(token).Expiry, $.markAsStructValue($.cloneStructValue(time.Now())).Add($.int64Mul($.int64(expires), 1000000000n)))
			}
			break
		}
		default:
		{
			let tj: $.VarRef<tokenJSON> = $.varRef(new tokenJSON(undefined, true))
			{
				err = await json.Unmarshal(body, $.interfaceValue(tj, "*internal.tokenJSON", /* @__PURE__ */ $.pointerType("internal.tokenJSON")))
				if (err != null) {
					if (failureStatus) {
						return [null, $.interfaceValue<$.GoError>(retrieveError, "*internal.RetrieveError", /* @__PURE__ */ $.pointerType("internal.RetrieveError"))]
					}
					return [null, fmt.Errorf("oauth2: cannot parse json: %v", (err as any))]
				}
			}
			;(retrieveError$ as RetrieveError).ErrorCode = tj.value.ErrorCode;
			;(retrieveError$ as RetrieveError).ErrorDescription = tj.value.ErrorDescription;
			;(retrieveError$ as RetrieveError).ErrorURI = tj.value.ErrorURI
			token = (() => { const __goscriptLiteralField3 = tj.value.expiry(); return new Token({AccessToken: tj.value.AccessToken, TokenType: tj.value.TokenType, RefreshToken: tj.value.RefreshToken, Expiry: __goscriptLiteralField3, Raw: $.interfaceValue($.makeMap<string, any>(), "map[string]interface{}", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))}) })()
			await json.Unmarshal(body, $.interfaceValue($.fieldRef($.pointerValue<Token>(token)._fields, "Raw"), "*interface{}", /* @__PURE__ */ $.pointerType({ kind: $.TypeKind.Interface, methods: [] })))
			break
		}
	}
	// according to spec, servers should respond status 400 in error case
	// https://www.rfc-editor.org/rfc/rfc6749#section-5.2
	// but some unorthodox servers respond 200 in error case
	if (failureStatus || (!$.stringEqual((retrieveError$ as RetrieveError).ErrorCode, ""))) {
		return [null, $.interfaceValue<$.GoError>(retrieveError, "*internal.RetrieveError", /* @__PURE__ */ $.pointerType("internal.RetrieveError"))]
	}
	if ($.stringEqual($.pointerValue<Token>(token).AccessToken, "")) {
		return [null, errors.New("oauth2: server response missing access_token")]
	}
	return [token, null]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Float64: (receiver: any, ...args: any[]) => (json.Number_Float64 as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Int64: (receiver: any, ...args: any[]) => (json.Number_Int64 as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalJSONTo: (receiver: any, ...args: any[]) => (json.Number_MarshalJSONTo as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (json.Number_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSONFrom: (receiver: any, ...args: any[]) => (json.Number_UnmarshalJSONFrom as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string", "json.Number")))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Float64", [], [/* @__PURE__ */ $.basicType("float64"), "error"]), $.methodSignature("Int64", [], [/* @__PURE__ */ $.basicType("int64"), "error"]), $.methodSignature("MarshalJSONTo", [["enc", /* @__PURE__ */ $.pointerType("jsontext.Encoder")]], ["error"]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("UnmarshalJSONFrom", [["dec", /* @__PURE__ */ $.pointerType("jsontext.Decoder")]], ["error"])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Add: (receiver: any, ...args: any[]) => (url.Values_Add as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Clone: (receiver: any, ...args: any[]) => (url.Values_Clone as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Del: (receiver: any, ...args: any[]) => (url.Values_Del as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Encode: (receiver: any, ...args: any[]) => (url.Values_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (url.Values_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Has: (receiver: any, ...args: any[]) => (url.Values_Has as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (url.Values_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= ("url.Values")
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Add", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Clone", [], ["url.Values"]), $.methodSignature("Del", [["key", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("Encode", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Get", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Has", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]])])
}
