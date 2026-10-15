// Generated file based on oauth2.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as http from "@goscript/net/http/index.js"

import * as url from "@goscript/net/url/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as internal from "@goscript/golang.org/x/oauth2/internal/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_deviceauth from "./deviceauth.gs.ts"

import * as __goscript_token from "./token.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/url/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/oauth2/internal/index.js"
import "@goscript/bytes/index.js"
import "@goscript/sync/index.js"
import "./deviceauth.gs.ts"
import "./token.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("golang.org/x/oauth2", ["oauth2.Config", "oauth2.TokenSource", "oauth2.Endpoint", "oauth2.AuthStyle", "oauth2.AuthCodeOption", "oauth2.setParam", "oauth2.tokenRefresher", "oauth2.reuseTokenSource", "oauth2.staticTokenSource"])

export type TokenSource = {
	Token(): [__goscript_token.Token | $.VarRef<__goscript_token.Token> | null, $.GoError] | globalThis.Promise<[__goscript_token.Token | $.VarRef<__goscript_token.Token> | null, $.GoError]>
}

$.registerInterfaceType(
	"oauth2.TokenSource",
	null,
	[$.methodSignature("Token", [], [/* @__PURE__ */ $.pointerType("oauth2.Token"), "error"])]
);

export type AuthStyle = number

export type AuthCodeOption = {
	setValue(_p0: url.Values): void
}

$.registerInterfaceType(
	"oauth2.AuthCodeOption",
	null,
	[$.methodSignature("setValue", ["url.Values"])]
);

export class Endpoint {
	public get AuthURL(): string {
		return this._fields.AuthURL
	}

	public set AuthURL(value: string) {
		this._fields.AuthURL = value
	}

	public get DeviceAuthURL(): string {
		return this._fields.DeviceAuthURL
	}

	public set DeviceAuthURL(value: string) {
		this._fields.DeviceAuthURL = value
	}

	public get TokenURL(): string {
		return this._fields.TokenURL
	}

	public set TokenURL(value: string) {
		this._fields.TokenURL = value
	}

	// AuthStyle optionally specifies how the endpoint wants the
	// client ID & client secret sent. The zero value means to
	// auto-detect.
	public get AuthStyle(): AuthStyle {
		return this._fields.AuthStyle
	}

	public set AuthStyle(value: AuthStyle) {
		this._fields.AuthStyle = value
	}

	public _fields: {
		AuthURL: string
		DeviceAuthURL: string
		TokenURL: string
		AuthStyle: AuthStyle
	}

	constructor(init?: Partial<{AuthURL?: string, DeviceAuthURL?: string, TokenURL?: string, AuthStyle?: AuthStyle}>, __goscriptValue?: boolean) {
		this._fields = {
			AuthURL: init?.AuthURL ?? ("" as string),
			DeviceAuthURL: init?.DeviceAuthURL ?? ("" as string),
			TokenURL: init?.TokenURL ?? ("" as string),
			AuthStyle: init?.AuthStyle ?? (0 as AuthStyle)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Endpoint {
		return new Endpoint(this, true)
	}

	public __goscriptAssign(source: Endpoint): void {
		const target = this._fields
		const values = source._fields
		target.AuthURL = values.AuthURL
		target.DeviceAuthURL = values.DeviceAuthURL
		target.TokenURL = values.TokenURL
		target.AuthStyle = values.AuthStyle
	}

	static __typeInfo = $.registerStructType(
		"oauth2.Endpoint",
		() => new Endpoint(),
		() => [],
		Endpoint,
		() => [/* @__PURE__ */ $.structField("AuthURL", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("DeviceAuthURL", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("TokenURL", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("AuthStyle", /* @__PURE__ */ $.basicType("int", "oauth2.AuthStyle"), [3], 48, true)]
	)
}

export class Config {
	// ClientID is the application's ID.
	public get ClientID(): string {
		return this._fields.ClientID
	}

	public set ClientID(value: string) {
		this._fields.ClientID = value
	}

	// ClientSecret is the application's secret.
	public get ClientSecret(): string {
		return this._fields.ClientSecret
	}

	public set ClientSecret(value: string) {
		this._fields.ClientSecret = value
	}

	// Endpoint contains the resource server's token endpoint
	// URLs. These are constants specific to each server and are
	// often available via site-specific packages, such as
	// google.Endpoint or github.Endpoint.
	public get Endpoint(): Endpoint {
		return this._fields.Endpoint
	}

	public set Endpoint(value: Endpoint) {
		this._fields.Endpoint = value
	}

	// RedirectURL is the URL to redirect users going through
	// the OAuth flow, after the resource owner's URLs.
	public get RedirectURL(): string {
		return this._fields.RedirectURL
	}

	public set RedirectURL(value: string) {
		this._fields.RedirectURL = value
	}

	// Scope specifies optional requested permissions.
	public get Scopes(): $.Slice<string> {
		return this._fields.Scopes
	}

	public set Scopes(value: $.Slice<string>) {
		this._fields.Scopes = value
	}

	// authStyleCache caches which auth style to use when Endpoint.AuthStyle is
	// the zero value (AuthStyleAutoDetect).
	public get authStyleCache(): internal.LazyAuthStyleCache {
		return this._fields.authStyleCache
	}

	public set authStyleCache(value: internal.LazyAuthStyleCache) {
		this._fields.authStyleCache = value
	}

	public _fields: {
		ClientID: string
		ClientSecret: string
		Endpoint: Endpoint
		RedirectURL: string
		Scopes: $.Slice<string>
		authStyleCache: internal.LazyAuthStyleCache
	}

	constructor(init?: Partial<{ClientID?: string, ClientSecret?: string, Endpoint?: Endpoint, RedirectURL?: string, Scopes?: $.Slice<string>, authStyleCache?: internal.LazyAuthStyleCache}>, __goscriptValue?: boolean) {
		this._fields = {
			ClientID: init?.ClientID ?? ("" as string),
			ClientSecret: init?.ClientSecret ?? ("" as string),
			Endpoint: init?.Endpoint ? init.Endpoint.clone() : new Endpoint(undefined, true),
			RedirectURL: init?.RedirectURL ?? ("" as string),
			Scopes: init?.Scopes ?? (null! as $.Slice<string>),
			authStyleCache: init?.authStyleCache ? init.authStyleCache.clone() : new internal.LazyAuthStyleCache(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Config {
		return new Config(this, true)
	}

	public __goscriptAssign(source: Config): void {
		const target = this._fields
		const values = source._fields
		target.ClientID = values.ClientID
		target.ClientSecret = values.ClientSecret
		$.assignStruct(target.Endpoint, values.Endpoint)
		target.RedirectURL = values.RedirectURL
		target.Scopes = values.Scopes
		$.assignStruct(target.authStyleCache, values.authStyleCache)
	}

	public AuthCodeURL(state: string, opts: $.Slice<AuthCodeOption | null>): string {
		const c: Config | $.VarRef<Config> | null = this;
		const c$: Config = c == null ? $.pointerTarget<Config>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Config>(c)
		let buf: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
		buf.value.WriteString((c$ as Config).Endpoint.AuthURL)
		let v: url.Values = $.makeMap<string, $.Slice<string>>([["response_type", $.arrayToSlice<string>(["code"])], ["client_id", $.arrayToSlice<string>([(c$ as Config).ClientID])]])
		if (!$.stringEqual((c$ as Config).RedirectURL, "")) {
			url.Values_Set(v, "redirect_uri", (c$ as Config).RedirectURL)
		}
		if ($.sliceLen((c$ as Config).Scopes) > 0) {
			url.Values_Set(v, "scope", strings.Join((c$ as Config).Scopes, " "))
		}
		if (!$.stringEqual(state, "")) {
			url.Values_Set(v, "state", state)
		}
		for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as AuthCodeOption | null)
			void (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<AuthCodeOption, null>) : $.pointerValue<Exclude<AuthCodeOption, null>>(opt)).setValue(v)
		}
		if (strings.Contains((c$ as Config).Endpoint.AuthURL, "?")) {
			buf.value.WriteByte(38)
		} else {
			buf.value.WriteByte(63)
		}
		buf.value.WriteString(url.Values_Encode(v))
		return buf.value.String()
	}

	public async Client(ctx: context.Context | null, t: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null): globalThis.Promise<http.Client | $.VarRef<http.Client> | null> {
		const c: Config | $.VarRef<Config> | null = this;
		return NewClient(ctx, (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).TokenSource(ctx, t) : Config.prototype.TokenSource.call(c, ctx, t)))
	}

	public async DeviceAccessToken(ctx: context.Context | null, da: __goscript_deviceauth.DeviceAuthResponse | $.VarRef<__goscript_deviceauth.DeviceAuthResponse> | null, opts: $.Slice<AuthCodeOption | null>): globalThis.Promise<[__goscript_token.Token | $.VarRef<__goscript_token.Token> | null, $.GoError]> {
		const c: Config | $.VarRef<Config> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const c$: Config = c == null ? $.pointerTarget<Config>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Config>(c)
		const da$: __goscript_deviceauth.DeviceAuthResponse = da == null ? $.pointerTarget<__goscript_deviceauth.DeviceAuthResponse>(da) : (da as any).__isVarRef === true ? (da as any).value : (da as any).__goValue === undefined ? (da as any) : $.pointerTarget<__goscript_deviceauth.DeviceAuthResponse>(da)
		if (!$.markAsStructValue($.cloneStructValue((da$ as __goscript_deviceauth.DeviceAuthResponse).Expiry)).IsZero()) {
			let cancel: context.CancelFunc | null = null! as context.CancelFunc | null
			let __goscriptTuple0: any = context.WithDeadline($.pointerValueOrNil(ctx)!, $.markAsStructValue($.cloneStructValue((da$ as __goscript_deviceauth.DeviceAuthResponse).Expiry)))
			ctx = __goscriptTuple0[0]
			cancel = __goscriptTuple0[1]
			const __goscriptDeferCallee0 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		}

		let v: url.Values = $.makeMap<string, $.Slice<string>>([["client_id", $.arrayToSlice<string>([(c$ as Config).ClientID])], ["grant_type", $.arrayToSlice<string>(["urn:ietf:params:oauth:grant-type:device_code"])], ["device_code", $.arrayToSlice<string>([(da$ as __goscript_deviceauth.DeviceAuthResponse).DeviceCode])]])
		if ($.sliceLen((c$ as Config).Scopes) > 0) {
			url.Values_Set(v, "scope", strings.Join((c$ as Config).Scopes, " "))
		}
		for (let __goscriptRangeTarget1 = opts, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let opt = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as AuthCodeOption | null)
			void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<AuthCodeOption, null>) : $.pointerValue<Exclude<AuthCodeOption, null>>(opt)).setValue(v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		let interval = (da$ as __goscript_deviceauth.DeviceAuthResponse).Interval
		if (interval == 0n) {
			interval = 5n
		}

		let ticker: time.Ticker | $.VarRef<time.Ticker> | null = time.NewTicker($.int64Mul($.int64(interval), 1000000000n))
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Stop())($.pointerValue<time.Ticker>(ticker)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "time.(*Ticker).Stop-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		while (true) {
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, [__goscript_token.Token | $.VarRef<__goscript_token.Token> | null, $.GoError]>([
				{
					id: 0,
					isSend: false,
					channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect0Result) => {
						return [null, (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
					}
				},
				{
					id: 1,
					isSend: false,
					channel: $.pointerValue<time.Ticker>(ticker).C,
					onSelected: async (__goscriptSelect0Result) => {
						let __goscriptTuple1: any = await __goscript_token.retrieveToken(ctx, c, v)
						let tok: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null = __goscriptTuple1[0]
						let err = __goscriptTuple1[1]
						if (err == null) {
							return [tok, null]
						}

						let __goscriptTuple2: any = $.typeAssertTuple<__goscript_token.RetrieveError | $.VarRef<__goscript_token.RetrieveError> | null>(err, /* @__PURE__ */ $.pointerType("oauth2.RetrieveError"))
						let e: __goscript_token.RetrieveError | $.VarRef<__goscript_token.RetrieveError> | null = __goscriptTuple2[0]
						let ok = __goscriptTuple2[1]
						if (!ok) {
							return [null, err]
						}
						switch ($.pointerValue<__goscript_token.RetrieveError>(e).ErrorCode) {
							case "slow_down":
							{
								interval = $.int64Add(interval, 5n)
								time.Ticker.prototype.Reset.call($.pointerValue<time.Ticker>(ticker), $.int64Mul($.int64(interval), 1000000000n))
								break
							}
							case "authorization_pending":
							{
								break
							}
							case "access_denied":
							case "expired_token":
							{
							}
							default:
							{
								return [tok, err]
								break
							}
						}
					}
				}
			], false)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async DeviceAuth(ctx: context.Context | null, opts: $.Slice<AuthCodeOption | null>): globalThis.Promise<[__goscript_deviceauth.DeviceAuthResponse | $.VarRef<__goscript_deviceauth.DeviceAuthResponse> | null, $.GoError]> {
		const c: Config | $.VarRef<Config> | null = this;
		const c$: Config = c == null ? $.pointerTarget<Config>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Config>(c)

		let v: url.Values = $.makeMap<string, $.Slice<string>>([["client_id", $.arrayToSlice<string>([(c$ as Config).ClientID])]])
		if ($.sliceLen((c$ as Config).Scopes) > 0) {
			url.Values_Set(v, "scope", strings.Join((c$ as Config).Scopes, " "))
		}
		for (let __goscriptRangeTarget2 = opts, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let opt = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as AuthCodeOption | null)
			void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<AuthCodeOption, null>) : $.pointerValue<Exclude<AuthCodeOption, null>>(opt)).setValue(v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return __goscript_deviceauth.retrieveDeviceAuth(ctx, c, v)
	}

	public async Exchange(ctx: context.Context | null, code: string, opts: $.Slice<AuthCodeOption | null>): globalThis.Promise<[__goscript_token.Token | $.VarRef<__goscript_token.Token> | null, $.GoError]> {
		const c: Config | $.VarRef<Config> | null = this;
		const c$: Config = c == null ? $.pointerTarget<Config>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Config>(c)
		let v: url.Values = $.makeMap<string, $.Slice<string>>([["grant_type", $.arrayToSlice<string>(["authorization_code"])], ["code", $.arrayToSlice<string>([code])]])
		if (!$.stringEqual((c$ as Config).RedirectURL, "")) {
			url.Values_Set(v, "redirect_uri", (c$ as Config).RedirectURL)
		}
		for (let __goscriptRangeTarget3 = opts, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let opt = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as AuthCodeOption | null)
			void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<AuthCodeOption, null>) : $.pointerValue<Exclude<AuthCodeOption, null>>(opt)).setValue(v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return __goscript_token.retrieveToken(ctx, c, v)
	}

	public async PasswordCredentialsToken(ctx: context.Context | null, username: string, password: string): globalThis.Promise<[__goscript_token.Token | $.VarRef<__goscript_token.Token> | null, $.GoError]> {
		const c: Config | $.VarRef<Config> | null = this;
		const c$: Config = c == null ? $.pointerTarget<Config>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<Config>(c)
		let v: url.Values = $.makeMap<string, $.Slice<string>>([["grant_type", $.arrayToSlice<string>(["password"])], ["username", $.arrayToSlice<string>([username])], ["password", $.arrayToSlice<string>([password])]])
		if ($.sliceLen((c$ as Config).Scopes) > 0) {
			url.Values_Set(v, "scope", strings.Join((c$ as Config).Scopes, " "))
		}
		return __goscript_token.retrieveToken(ctx, c, v)
	}

	public TokenSource(ctx: context.Context | null, t: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null): TokenSource | null {
		const c: Config | $.VarRef<Config> | null = this;
		let tkr: tokenRefresher | $.VarRef<tokenRefresher> | null = new tokenRefresher({ctx: ctx, conf: c})
		if (t != null) {
			$.pointerValue<tokenRefresher>(tkr).refreshToken = $.pointerValue<__goscript_token.Token>(t).RefreshToken
		}
		return $.interfaceValue<TokenSource | null>(new reuseTokenSource({t: t, _new: $.interfaceValue<TokenSource | null>(tkr, "*oauth2.tokenRefresher", /* @__PURE__ */ $.pointerType("oauth2.tokenRefresher"))}), "*oauth2.reuseTokenSource", /* @__PURE__ */ $.pointerType("oauth2.reuseTokenSource"))
	}

	static __typeInfo = $.registerStructType(
		"oauth2.Config",
		() => new Config(),
		() => [$.methodSignature("AuthCodeURL", [["state", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.sliceType("oauth2.AuthCodeOption")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Client", [["ctx", "context.Context"], ["t", /* @__PURE__ */ $.pointerType("oauth2.Token")]], [/* @__PURE__ */ $.pointerType("http.Client")], true), $.methodSignature("DeviceAccessToken", [["ctx", "context.Context"], ["da", /* @__PURE__ */ $.pointerType("oauth2.DeviceAuthResponse")], ["opts", /* @__PURE__ */ $.sliceType("oauth2.AuthCodeOption")]], [/* @__PURE__ */ $.pointerType("oauth2.Token"), "error"], true), $.methodSignature("DeviceAuth", [["ctx", "context.Context"], ["opts", /* @__PURE__ */ $.sliceType("oauth2.AuthCodeOption")]], [/* @__PURE__ */ $.pointerType("oauth2.DeviceAuthResponse"), "error"], true), $.methodSignature("Exchange", [["ctx", "context.Context"], ["code", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.sliceType("oauth2.AuthCodeOption")]], [/* @__PURE__ */ $.pointerType("oauth2.Token"), "error"], true), $.methodSignature("PasswordCredentialsToken", [["ctx", "context.Context"], ["username", /* @__PURE__ */ $.basicType("string")], ["password", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("oauth2.Token"), "error"], true), $.methodSignature("TokenSource", [["ctx", "context.Context"], ["t", /* @__PURE__ */ $.pointerType("oauth2.Token")]], ["oauth2.TokenSource"], true)],
		Config,
		() => [/* @__PURE__ */ $.structField("ClientID", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("ClientSecret", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Endpoint", "oauth2.Endpoint", [2], 32, true), /* @__PURE__ */ $.structField("RedirectURL", /* @__PURE__ */ $.basicType("string"), [3], 88, true), /* @__PURE__ */ $.structField("Scopes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [4], 104, true), /* @__PURE__ */ $.structField("authStyleCache", "internal.LazyAuthStyleCache", [5], 128, false, { pkgPath: "golang.org/x/oauth2" })]
	)
}

export class setParam {
	public get k(): string {
		return this._fields.k
	}

	public set k(value: string) {
		this._fields.k = value
	}

	public get v(): string {
		return this._fields.v
	}

	public set v(value: string) {
		this._fields.v = value
	}

	public _fields: {
		k: string
		v: string
	}

	constructor(init?: Partial<{k?: string, v?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			k: init?.k ?? ("" as string),
			v: init?.v ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): setParam {
		return new setParam(this, true)
	}

	public __goscriptAssign(source: setParam): void {
		const target = this._fields
		const values = source._fields
		target.k = values.k
		target.v = values.v
	}

	public setValue(m: url.Values): void {
		const p = this;
		url.Values_Set(m, p.k, p.v)
	}

	static __typeInfo = $.registerStructType(
		"oauth2.setParam",
		() => new setParam(),
		() => [$.methodSignature("setValue", [["m", "url.Values"]])],
		setParam,
		() => [/* @__PURE__ */ $.structField("k", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "golang.org/x/oauth2" }), /* @__PURE__ */ $.structField("v", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "golang.org/x/oauth2" })]
	)
}

export class tokenRefresher {
	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get conf(): Config | $.VarRef<Config> | null {
		return this._fields.conf
	}

	public set conf(value: Config | $.VarRef<Config> | null) {
		this._fields.conf = value
	}

	public get refreshToken(): string {
		return this._fields.refreshToken
	}

	public set refreshToken(value: string) {
		this._fields.refreshToken = value
	}

	public _fields: {
		ctx: context.Context | null
		conf: Config | $.VarRef<Config> | null
		refreshToken: string
	}

	constructor(init?: Partial<{ctx?: context.Context | null, conf?: Config | $.VarRef<Config> | null, refreshToken?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			ctx: init?.ctx ?? (null! as context.Context | null),
			conf: init?.conf ?? (null! as Config | $.VarRef<Config> | null),
			refreshToken: init?.refreshToken ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tokenRefresher {
		return new tokenRefresher(this, true)
	}

	public __goscriptAssign(source: tokenRefresher): void {
		const target = this._fields
		const values = source._fields
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.conf = values.conf
		target.refreshToken = values.refreshToken
	}

	public async Token(): globalThis.Promise<[__goscript_token.Token | $.VarRef<__goscript_token.Token> | null, $.GoError]> {
		let tf: tokenRefresher | $.VarRef<tokenRefresher> | null = this;
		const tf$: tokenRefresher = tf == null ? $.pointerTarget<tokenRefresher>(tf) : (tf as any).__isVarRef === true ? (tf as any).value : (tf as any).__goValue === undefined ? (tf as any) : $.pointerTarget<tokenRefresher>(tf)
		if ($.stringEqual((tf$ as tokenRefresher).refreshToken, "")) {
			return [null, errors.New("oauth2: token expired and refresh token is not set")]
		}

		let __goscriptTuple3: any = await __goscript_token.retrieveToken((tf$ as tokenRefresher).ctx, (tf$ as tokenRefresher).conf, $.makeMap<string, $.Slice<string>>([["grant_type", $.arrayToSlice<string>(["refresh_token"])], ["refresh_token", $.arrayToSlice<string>([(tf$ as tokenRefresher).refreshToken])]]))
		let tk: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		let tk$: __goscript_token.Token = tk == null ? $.pointerTarget<__goscript_token.Token>(tk) : (tk as any).__isVarRef === true ? (tk as any).value : (tk as any).__goValue === undefined ? (tk as any) : $.pointerTarget<__goscript_token.Token>(tk)

		if (err != null) {
			return [null, err]
		}
		if (!$.stringEqual((tf$ as tokenRefresher).refreshToken, (tk$ as __goscript_token.Token).RefreshToken)) {
			;(tf$ as tokenRefresher).refreshToken = (tk$ as __goscript_token.Token).RefreshToken
		}
		return [tk, err]
	}

	static __typeInfo = $.registerStructType(
		"oauth2.tokenRefresher",
		() => new tokenRefresher(),
		() => [$.methodSignature("Token", [], [/* @__PURE__ */ $.pointerType("oauth2.Token"), "error"], true)],
		tokenRefresher,
		() => [/* @__PURE__ */ $.structField("ctx", "context.Context", [0], 0, false, { pkgPath: "golang.org/x/oauth2" }), /* @__PURE__ */ $.structField("conf", /* @__PURE__ */ $.pointerType("oauth2.Config"), [1], 16, false, { pkgPath: "golang.org/x/oauth2" }), /* @__PURE__ */ $.structField("refreshToken", /* @__PURE__ */ $.basicType("string"), [2], 24, false, { pkgPath: "golang.org/x/oauth2" })]
	)
}

export class reuseTokenSource {
	public get _new(): TokenSource | null {
		return this._fields._new
	}

	public set _new(value: TokenSource | null) {
		this._fields._new = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get t(): __goscript_token.Token | $.VarRef<__goscript_token.Token> | null {
		return this._fields.t
	}

	public set t(value: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null) {
		this._fields.t = value
	}

	public get expiryDelta(): time.Duration {
		return this._fields.expiryDelta
	}

	public set expiryDelta(value: time.Duration) {
		this._fields.expiryDelta = value
	}

	public _fields: {
		_new: TokenSource | null
		mu: sync.Mutex
		t: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null
		expiryDelta: time.Duration
	}

	constructor(init?: Partial<{_new?: TokenSource | null, mu?: sync.Mutex, t?: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null, expiryDelta?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			_new: init?._new ?? (null! as TokenSource | null),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			t: init?.t ?? (null! as __goscript_token.Token | $.VarRef<__goscript_token.Token> | null),
			expiryDelta: init?.expiryDelta ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): reuseTokenSource {
		return new reuseTokenSource(this, true)
	}

	public __goscriptAssign(source: reuseTokenSource): void {
		const target = this._fields
		const values = source._fields
		target._new = $.assignFieldValue(target._new, values._new, "oauth2.TokenSource")
		$.assignStruct(target.mu, values.mu)
		target.t = values.t
		target.expiryDelta = values.expiryDelta
	}

	public async Token(): globalThis.Promise<[__goscript_token.Token | $.VarRef<__goscript_token.Token> | null, $.GoError]> {
		let s: reuseTokenSource | $.VarRef<reuseTokenSource> | null = this;
		using __defer = new $.DisposableStack()
		const s$: reuseTokenSource = s == null ? $.pointerTarget<reuseTokenSource>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<reuseTokenSource>(s)
		await (s$ as reuseTokenSource).mu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((s$ as reuseTokenSource).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })
		if (await __goscript_token.Token.prototype.Valid.call((s$ as reuseTokenSource).t)) {
			return [(s$ as reuseTokenSource).t, null]
		}
		let __goscriptTuple4: any = await $.pointerValue<Exclude<TokenSource, null>>((s$ as reuseTokenSource)._new).Token()
		let t: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		$.pointerValue<__goscript_token.Token>(t).expiryDelta = (s$ as reuseTokenSource).expiryDelta;
		;(s$ as reuseTokenSource).t = t
		return [t, null]
	}

	static __typeInfo = $.registerStructType(
		"oauth2.reuseTokenSource",
		() => new reuseTokenSource(),
		() => [$.methodSignature("Token", [], [/* @__PURE__ */ $.pointerType("oauth2.Token"), "error"], true)],
		reuseTokenSource,
		() => [/* @__PURE__ */ $.structField("new", "oauth2.TokenSource", [0], 0, false, { key: "_new", pkgPath: "golang.org/x/oauth2" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [1], 16, false, { pkgPath: "golang.org/x/oauth2" }), /* @__PURE__ */ $.structField("t", /* @__PURE__ */ $.pointerType("oauth2.Token"), [2], 24, false, { pkgPath: "golang.org/x/oauth2" }), /* @__PURE__ */ $.structField("expiryDelta", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 32, false, { pkgPath: "golang.org/x/oauth2" })]
	)
}

export class staticTokenSource {
	public get t(): __goscript_token.Token | $.VarRef<__goscript_token.Token> | null {
		return this._fields.t
	}

	public set t(value: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null) {
		this._fields.t = value
	}

	public _fields: {
		t: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null
	}

	constructor(init?: Partial<{t?: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			t: init?.t ?? (null! as __goscript_token.Token | $.VarRef<__goscript_token.Token> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): staticTokenSource {
		return new staticTokenSource(this, true)
	}

	public __goscriptAssign(source: staticTokenSource): void {
		const target = this._fields
		const values = source._fields
		target.t = values.t
	}

	public Token(): [__goscript_token.Token | $.VarRef<__goscript_token.Token> | null, $.GoError] {
		const s = this;
		return [s.t, null]
	}

	static __typeInfo = $.registerStructType(
		"oauth2.staticTokenSource",
		() => new staticTokenSource(),
		() => [$.methodSignature("Token", [], [/* @__PURE__ */ $.pointerType("oauth2.Token"), "error"])],
		staticTokenSource,
		() => [/* @__PURE__ */ $.structField("t", /* @__PURE__ */ $.pointerType("oauth2.Token"), [0], 0, false, { pkgPath: "golang.org/x/oauth2" })]
	)
}

export const AuthStyleAutoDetect: AuthStyle = 0

export const AuthStyleInParams: AuthStyle = 1

export const AuthStyleInHeader: AuthStyle = 2

export let NoContext: context.Context | null = context.TODO()

export function __goscript_set_NoContext(__goscriptValue: context.Context | null): void {
	NoContext = __goscriptValue
}

export function RegisterBrokenAuthHeaderProvider(tokenURL: string): void {
}

export let AccessTypeOnline: AuthCodeOption | null = SetAuthURLParam("access_type", "online")

export function __goscript_set_AccessTypeOnline(__goscriptValue: AuthCodeOption | null): void {
	AccessTypeOnline = __goscriptValue
}

export let AccessTypeOffline: AuthCodeOption | null = SetAuthURLParam("access_type", "offline")

export function __goscript_set_AccessTypeOffline(__goscriptValue: AuthCodeOption | null): void {
	AccessTypeOffline = __goscriptValue
}

export let ApprovalForce: AuthCodeOption | null = SetAuthURLParam("prompt", "consent")

export function __goscript_set_ApprovalForce(__goscriptValue: AuthCodeOption | null): void {
	ApprovalForce = __goscriptValue
}

export function SetAuthURLParam(key: string, value: string): AuthCodeOption | null {
	return $.interfaceValue<AuthCodeOption | null>(new setParam({k: key, v: value}, true), "oauth2.setParam", "oauth2.setParam")
}

export function StaticTokenSource(t: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null): TokenSource | null {
	return $.interfaceValue<TokenSource | null>(new staticTokenSource({t: t}, true), "oauth2.staticTokenSource", "oauth2.staticTokenSource")
}

export let HTTPClient: internal.ContextKey = new internal.ContextKey(undefined, true)

export function __goscript_set_HTTPClient(__goscriptValue: internal.ContextKey): void {
	$.assignStruct(HTTPClient, __goscriptValue)
}

export async function NewClient(ctx: context.Context | null, src: TokenSource | null): globalThis.Promise<http.Client | $.VarRef<http.Client> | null> {
	if (src == null) {
		return internal.ContextClient(ctx)
	}
	return new http.Client({Transport: $.interfaceValue<http.RoundTripper | null>((await (async () => { const __goscriptLiteralField0 = ReuseTokenSource(null, src); return new __goscript_transport.Transport({Base: $.pointerValue<http.Client>(await internal.ContextClient(ctx)).Transport, Source: __goscriptLiteralField0}) })()), "*oauth2.Transport", /* @__PURE__ */ $.pointerType("oauth2.Transport"))})
}

export function ReuseTokenSource(t: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null, src: TokenSource | null): TokenSource | null {
	// Don't wrap a reuseTokenSource in itself. That would work,
	// but cause an unnecessary number of mutex operations.
	// Just build the equivalent one.
	{
		let __goscriptTuple5: any = $.typeAssertTuple<reuseTokenSource | $.VarRef<reuseTokenSource> | null>(src, /* @__PURE__ */ $.pointerType("oauth2.reuseTokenSource"))
		let rt: reuseTokenSource | $.VarRef<reuseTokenSource> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		if (ok) {
			if (t == null) {
				// Just use it directly.
				return $.interfaceValue<TokenSource | null>(rt, "*oauth2.reuseTokenSource", /* @__PURE__ */ $.pointerType("oauth2.reuseTokenSource"))
			}
			src = $.pointerValue<reuseTokenSource>(rt)._new
		}
	}
	return $.interfaceValue<TokenSource | null>(new reuseTokenSource({t: t, _new: src}), "*oauth2.reuseTokenSource", /* @__PURE__ */ $.pointerType("oauth2.reuseTokenSource"))
}

export function ReuseTokenSourceWithExpiry(t: __goscript_token.Token | $.VarRef<__goscript_token.Token> | null, src: TokenSource | null, earlyExpiry: time.Duration): TokenSource | null {
	// Don't wrap a reuseTokenSource in itself. That would work,
	// but cause an unnecessary number of mutex operations.
	// Just build the equivalent one.
	{
		let __goscriptTuple6: any = $.typeAssertTuple<reuseTokenSource | $.VarRef<reuseTokenSource> | null>(src, /* @__PURE__ */ $.pointerType("oauth2.reuseTokenSource"))
		let rt: reuseTokenSource | $.VarRef<reuseTokenSource> | null = __goscriptTuple6[0]
		let ok = __goscriptTuple6[1]
		if (ok) {
			if (t == null) {
				// Just use it directly, but set the expiryDelta to earlyExpiry,
				// so the behavior matches what the user expects.
				$.pointerValue<reuseTokenSource>(rt).expiryDelta = earlyExpiry
				return $.interfaceValue<TokenSource | null>(rt, "*oauth2.reuseTokenSource", /* @__PURE__ */ $.pointerType("oauth2.reuseTokenSource"))
			}
			src = $.pointerValue<reuseTokenSource>(rt)._new
		}
	}
	if (t != null) {
		$.pointerValue<__goscript_token.Token>(t).expiryDelta = earlyExpiry
	}
	return $.interfaceValue<TokenSource | null>(new reuseTokenSource({t: t, _new: src, expiryDelta: earlyExpiry}), "*oauth2.reuseTokenSource", /* @__PURE__ */ $.pointerType("oauth2.reuseTokenSource"))
}

var __goscriptAwait: any
