// Generated file based on clientcredentials.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as http from "@goscript/net/http/index.js"

import * as url from "@goscript/net/url/index.js"

import * as strings from "@goscript/strings/index.js"

import * as oauth2 from "@goscript/golang.org/x/oauth2/index.js"

import * as internal from "@goscript/golang.org/x/oauth2/internal/index.js"

import type * as time from "@goscript/time/index.js"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/http/index.js"
import "@goscript/net/url/index.js"
import "@goscript/strings/index.js"
import "@goscript/golang.org/x/oauth2/index.js"
import "@goscript/golang.org/x/oauth2/internal/index.js"

$.registerTypePackagePath("golang.org/x/oauth2/clientcredentials", ["clientcredentials.Config", "clientcredentials.tokenSource"])

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

	// TokenURL is the resource server's token endpoint
	// URL. This is a constant specific to each server.
	public get TokenURL(): string {
		return this._fields.TokenURL
	}

	public set TokenURL(value: string) {
		this._fields.TokenURL = value
	}

	// Scope specifies optional requested permissions.
	public get Scopes(): $.Slice<string> {
		return this._fields.Scopes
	}

	public set Scopes(value: $.Slice<string>) {
		this._fields.Scopes = value
	}

	// EndpointParams specifies additional parameters for requests to the token endpoint.
	public get EndpointParams(): url.Values {
		return this._fields.EndpointParams
	}

	public set EndpointParams(value: url.Values) {
		this._fields.EndpointParams = value
	}

	// AuthStyle optionally specifies how the endpoint wants the
	// client ID & client secret sent. The zero value means to
	// auto-detect.
	public get AuthStyle(): oauth2.AuthStyle {
		return this._fields.AuthStyle
	}

	public set AuthStyle(value: oauth2.AuthStyle) {
		this._fields.AuthStyle = value
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
		TokenURL: string
		Scopes: $.Slice<string>
		EndpointParams: url.Values
		AuthStyle: oauth2.AuthStyle
		authStyleCache: internal.LazyAuthStyleCache
	}

	constructor(init?: Partial<{ClientID?: string, ClientSecret?: string, TokenURL?: string, Scopes?: $.Slice<string>, EndpointParams?: url.Values, AuthStyle?: oauth2.AuthStyle, authStyleCache?: internal.LazyAuthStyleCache}>, __goscriptValue?: boolean) {
		this._fields = {
			ClientID: init?.ClientID ?? ("" as string),
			ClientSecret: init?.ClientSecret ?? ("" as string),
			TokenURL: init?.TokenURL ?? ("" as string),
			Scopes: init?.Scopes ?? (null! as $.Slice<string>),
			EndpointParams: init?.EndpointParams ?? (null! as url.Values),
			AuthStyle: init?.AuthStyle ?? (0 as oauth2.AuthStyle),
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
		target.TokenURL = values.TokenURL
		target.Scopes = values.Scopes
		target.EndpointParams = values.EndpointParams
		target.AuthStyle = values.AuthStyle
		$.assignStruct(target.authStyleCache, values.authStyleCache)
	}

	public async Client(ctx: context.Context | null): globalThis.Promise<http.Client | $.VarRef<http.Client> | null> {
		const c: Config | $.VarRef<Config> | null = this;
		return oauth2.NewClient(ctx, (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).TokenSource(ctx) : Config.prototype.TokenSource.call(c, ctx)))
	}

	public async Token(ctx: context.Context | null): globalThis.Promise<[oauth2.Token | $.VarRef<oauth2.Token> | null, $.GoError]> {
		const c: Config | $.VarRef<Config> | null = this;
		return $.pointerValue<Exclude<oauth2.TokenSource, null>>((c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as Config).TokenSource(ctx) : Config.prototype.TokenSource.call(c, ctx))).Token()
	}

	public TokenSource(ctx: context.Context | null): oauth2.TokenSource | null {
		const c: Config | $.VarRef<Config> | null = this;
		let source: tokenSource | $.VarRef<tokenSource> | null = new tokenSource({ctx: ctx, conf: c})
		return oauth2.ReuseTokenSource(null, $.interfaceValue<oauth2.TokenSource | null>(source, "*clientcredentials.tokenSource", /* @__PURE__ */ $.pointerType("clientcredentials.tokenSource")))
	}

	static __typeInfo = $.registerStructType(
		"clientcredentials.Config",
		() => new Config(),
		() => [$.methodSignature("Client", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("http.Client")], true), $.methodSignature("Token", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("oauth2.Token"), "error"], true), $.methodSignature("TokenSource", [["ctx", "context.Context"]], ["oauth2.TokenSource"], true)],
		Config,
		() => [/* @__PURE__ */ $.structField("ClientID", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("ClientSecret", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("TokenURL", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("Scopes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 48, true), /* @__PURE__ */ $.structField("EndpointParams", "url.Values", [4], 72, true), /* @__PURE__ */ $.structField("AuthStyle", /* @__PURE__ */ $.basicType("int", "oauth2.AuthStyle"), [5], 80, true), /* @__PURE__ */ $.structField("authStyleCache", "internal.LazyAuthStyleCache", [6], 88, false, { pkgPath: "golang.org/x/oauth2/clientcredentials" })]
	)
}

export class tokenSource {
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

	public _fields: {
		ctx: context.Context | null
		conf: Config | $.VarRef<Config> | null
	}

	constructor(init?: Partial<{ctx?: context.Context | null, conf?: Config | $.VarRef<Config> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ctx: init?.ctx ?? (null! as context.Context | null),
			conf: init?.conf ?? (null! as Config | $.VarRef<Config> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tokenSource {
		return new tokenSource(this, true)
	}

	public __goscriptAssign(source: tokenSource): void {
		const target = this._fields
		const values = source._fields
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.conf = values.conf
	}

	public async Token(): globalThis.Promise<[oauth2.Token | $.VarRef<oauth2.Token> | null, $.GoError]> {
		const c: tokenSource | $.VarRef<tokenSource> | null = this;
		const c$: tokenSource = c == null ? $.pointerTarget<tokenSource>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<tokenSource>(c)
		let v: url.Values = $.makeMap<string, $.Slice<string>>([["grant_type", $.arrayToSlice<string>(["client_credentials"])]])
		if ($.sliceLen($.pointerValue<Config>((c$ as tokenSource).conf).Scopes) > 0) {
			url.Values_Set(v, "scope", strings.Join($.pointerValue<Config>((c$ as tokenSource).conf).Scopes, " "))
		}
		for (let [k, p] of $.pointerValue<Config>((c$ as tokenSource).conf).EndpointParams?.entries() ?? []) {
			// Allow grant_type to be overridden to allow interoperability with
			// non-compliant implementations.
			{
				let [, ok] = $.mapGet<string, $.Slice<string>, $.Slice<string>>(v, k, null)
				if (ok && (!$.stringEqual(k, "grant_type"))) {
					return [null, fmt.Errorf("oauth2: cannot overwrite parameter %q", k)]
				}
			}
			$.mapSet(v, k, p)
		}

		let __goscriptTuple0: any = await internal.RetrieveToken((c$ as tokenSource).ctx, $.pointerValue<Config>((c$ as tokenSource).conf).ClientID, $.pointerValue<Config>((c$ as tokenSource).conf).ClientSecret, $.pointerValue<Config>((c$ as tokenSource).conf).TokenURL, v, $.int($.pointerValue<Config>((c$ as tokenSource).conf).AuthStyle), $.pointerValue<Config>((c$ as tokenSource).conf).authStyleCache.Get())
		let tk: internal.Token | $.VarRef<internal.Token> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		let tk$: internal.Token = tk == null ? $.pointerTarget<internal.Token>(tk) : (tk as any).__isVarRef === true ? (tk as any).value : (tk as any).__goValue === undefined ? (tk as any) : $.pointerTarget<internal.Token>(tk)
		if (err != null) {
			{
				let __goscriptTuple1: any = $.typeAssertTuple<internal.RetrieveError | $.VarRef<internal.RetrieveError> | null>(err, /* @__PURE__ */ $.pointerType("internal.RetrieveError"))
				let rErr: internal.RetrieveError | $.VarRef<internal.RetrieveError> | null = __goscriptTuple1[0]
				let ok = __goscriptTuple1[1]
				if (ok) {
					return [null, $.interfaceValue<$.GoError>($.unsafePointerCast<oauth2.RetrieveError | $.VarRef<oauth2.RetrieveError> | null>(rErr, oauth2.RetrieveError), "*oauth2.RetrieveError", /* @__PURE__ */ $.pointerType("oauth2.RetrieveError"))]
				}
			}
			return [null, err]
		}
		let t: oauth2.Token | $.VarRef<oauth2.Token> | null = new oauth2.Token({AccessToken: (tk$ as internal.Token).AccessToken, TokenType: (tk$ as internal.Token).TokenType, RefreshToken: (tk$ as internal.Token).RefreshToken, Expiry: $.markAsStructValue($.cloneStructValue((tk$ as internal.Token).Expiry))})
		return [(t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as oauth2.Token).WithExtra((tk$ as internal.Token).Raw) : oauth2.Token.prototype.WithExtra.call(t, (tk$ as internal.Token).Raw)), null]
	}

	static __typeInfo = $.registerStructType(
		"clientcredentials.tokenSource",
		() => new tokenSource(),
		() => [$.methodSignature("Token", [], [/* @__PURE__ */ $.pointerType("oauth2.Token"), "error"], true)],
		tokenSource,
		() => [/* @__PURE__ */ $.structField("ctx", "context.Context", [0], 0, false, { pkgPath: "golang.org/x/oauth2/clientcredentials" }), /* @__PURE__ */ $.structField("conf", /* @__PURE__ */ $.pointerType("clientcredentials.Config"), [1], 16, false, { pkgPath: "golang.org/x/oauth2/clientcredentials" })]
	)
}
