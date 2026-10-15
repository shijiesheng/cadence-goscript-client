// Generated file based on oauth_authorization.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as url from "@goscript/net/url/index.js"

import * as oauth2 from "@goscript/golang.org/x/oauth2/index.js"

import * as clientcredentials from "@goscript/golang.org/x/oauth2/clientcredentials/index.js"

import * as auth from "@goscript/go.uber.org/cadence/internal/common/auth/index.js"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/url/index.js"
import "@goscript/golang.org/x/oauth2/index.js"
import "@goscript/golang.org/x/oauth2/clientcredentials/index.js"
import "@goscript/go.uber.org/cadence/internal/common/auth/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.OAuthAuthorizerConfig", "internal.OAuthProvider"])

export class OAuthAuthorizerConfig {
	// ClientID to be used for acquiring token
	public get ClientID(): string {
		return this._fields.ClientID
	}

	public set ClientID(value: string) {
		this._fields.ClientID = value
	}

	// ClientSecret to be used for acquiring token
	public get ClientSecret(): string {
		return this._fields.ClientSecret
	}

	public set ClientSecret(value: string) {
		this._fields.ClientSecret = value
	}

	// TokenURL is the endpoint used to get token from provider
	public get TokenURL(): string {
		return this._fields.TokenURL
	}

	public set TokenURL(value: string) {
		this._fields.TokenURL = value
	}

	// Scope specifies optional requested permissions
	public get Scopes(): $.Slice<string> {
		return this._fields.Scopes
	}

	public set Scopes(value: $.Slice<string>) {
		this._fields.Scopes = value
	}

	// EndpointParams specifies additional parameters for requests to the token endpoint.
	// This needs to be provided for some OAuth providers
	public get EndpointParams(): globalThis.Map<string, string> | null {
		return this._fields.EndpointParams
	}

	public set EndpointParams(value: globalThis.Map<string, string> | null) {
		this._fields.EndpointParams = value
	}

	public _fields: {
		ClientID: string
		ClientSecret: string
		TokenURL: string
		Scopes: $.Slice<string>
		EndpointParams: globalThis.Map<string, string> | null
	}

	constructor(init?: Partial<{ClientID?: string, ClientSecret?: string, TokenURL?: string, Scopes?: $.Slice<string>, EndpointParams?: globalThis.Map<string, string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ClientID: init?.ClientID ?? ("" as string),
			ClientSecret: init?.ClientSecret ?? ("" as string),
			TokenURL: init?.TokenURL ?? ("" as string),
			Scopes: init?.Scopes ?? (null! as $.Slice<string>),
			EndpointParams: init?.EndpointParams ?? (null! as globalThis.Map<string, string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OAuthAuthorizerConfig {
		return new OAuthAuthorizerConfig(this, true)
	}

	public __goscriptAssign(source: OAuthAuthorizerConfig): void {
		const target = this._fields
		const values = source._fields
		target.ClientID = values.ClientID
		target.ClientSecret = values.ClientSecret
		target.TokenURL = values.TokenURL
		target.Scopes = values.Scopes
		target.EndpointParams = values.EndpointParams
	}

	static __typeInfo = $.registerStructType(
		"internal.OAuthAuthorizerConfig",
		() => new OAuthAuthorizerConfig(),
		() => [],
		OAuthAuthorizerConfig,
		() => [/* @__PURE__ */ $.structField("ClientID", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "yaml:\"clientID\"" }), /* @__PURE__ */ $.structField("ClientSecret", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "yaml:\"clientSecret\"" }), /* @__PURE__ */ $.structField("TokenURL", /* @__PURE__ */ $.basicType("string"), [2], 32, true, { tag: "yaml:\"tokenURL\"" }), /* @__PURE__ */ $.structField("Scopes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 48, true, { tag: "yaml:\"scopes\"" }), /* @__PURE__ */ $.structField("EndpointParams", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [4], 72, true, { tag: "yaml:\"endpointParams\"" })]
	)
}

export class OAuthProvider {
	public get tokenSource(): oauth2.TokenSource | null {
		return this._fields.tokenSource
	}

	public set tokenSource(value: oauth2.TokenSource | null) {
		this._fields.tokenSource = value
	}

	public get config(): clientcredentials.Config {
		return this._fields.config
	}

	public set config(value: clientcredentials.Config) {
		this._fields.config = value
	}

	public _fields: {
		tokenSource: oauth2.TokenSource | null
		config: clientcredentials.Config
	}

	constructor(init?: Partial<{tokenSource?: oauth2.TokenSource | null, config?: clientcredentials.Config}>, __goscriptValue?: boolean) {
		this._fields = {
			tokenSource: init?.tokenSource ?? (null! as oauth2.TokenSource | null),
			config: init?.config ? init.config.clone() : new clientcredentials.Config(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OAuthProvider {
		return new OAuthProvider(this, true)
	}

	public __goscriptAssign(source: OAuthProvider): void {
		const target = this._fields
		const values = source._fields
		target.tokenSource = $.assignFieldValue(target.tokenSource, values.tokenSource, "oauth2.TokenSource")
		$.assignStruct(target.config, values.config)
	}

	public async GetAuthToken(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const o: OAuthProvider | $.VarRef<OAuthProvider> | null = this;
		let __goscriptTuple0: any = await $.pointerValue<Exclude<oauth2.TokenSource, null>>($.pointerValue<OAuthProvider>(o).tokenSource).Token()
		let token: oauth2.Token | $.VarRef<oauth2.Token> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, fmt.Errorf("token source: %w", (err as any))]
		}

		return [$.stringToBytes($.pointerValue<oauth2.Token>(token).AccessToken), null]
	}

	static __typeInfo = $.registerStructType(
		"internal.OAuthProvider",
		() => new OAuthProvider(),
		() => [$.methodSignature("GetAuthToken", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true)],
		OAuthProvider,
		() => [/* @__PURE__ */ $.structField("tokenSource", "oauth2.TokenSource", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("config", "clientcredentials.Config", [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export function NewOAuthAuthorizationProvider(config: OAuthAuthorizerConfig): OAuthProvider | $.VarRef<OAuthProvider> | null {
	let oauthConfig = $.varRef(new clientcredentials.Config({ClientID: config.ClientID, ClientSecret: config.ClientSecret, TokenURL: config.TokenURL, Scopes: config.Scopes}, true))

	if (config.EndpointParams != null) {
		let v: url.Values = $.makeMap<string, $.Slice<string>>([])
		for (const [name, value] of config.EndpointParams?.entries() ?? []) {
			url.Values_Set(v, name, value)
		}
		oauthConfig.value.EndpointParams = v
	}

	return (() => { const __goscriptLiteralField0 = oauthConfig.value.TokenSource(context.Background()); return new OAuthProvider({tokenSource: __goscriptLiteralField0, config: oauthConfig.value}) })()
}
