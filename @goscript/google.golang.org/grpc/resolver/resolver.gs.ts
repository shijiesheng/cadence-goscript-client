// Generated file based on resolver.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as net from "@goscript/net/index.js"

import * as url from "@goscript/net/url/index.js"

import * as strings from "@goscript/strings/index.js"

import * as attributes from "@goscript/google.golang.org/grpc/attributes/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/serviceconfig/index.js"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/index.js"
import "@goscript/net/url/index.js"
import "@goscript/strings/index.js"
import "@goscript/google.golang.org/grpc/attributes/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"

$.registerTypePackagePath("google.golang.org/grpc/resolver", ["resolver.Address", "resolver.BuildOptions", "resolver.Endpoint", "resolver.State", "resolver.ClientConn", "resolver.Target", "resolver.Builder", "resolver.ResolveNowOptions", "resolver.Resolver", "resolver.AuthorityOverrider"])

export type ClientConn = {
	NewAddress(addresses: $.Slice<Address>): void
	ParseServiceConfig(serviceConfigJSON: string): serviceconfig.ParseResult | $.VarRef<serviceconfig.ParseResult> | null | globalThis.Promise<serviceconfig.ParseResult | $.VarRef<serviceconfig.ParseResult> | null>
	ReportError(_p0: $.GoError): void
	UpdateState(_p0: State): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"resolver.ClientConn",
	null,
	[$.methodSignature("NewAddress", [["addresses", /* @__PURE__ */ $.sliceType("resolver.Address")]]), $.methodSignature("ParseServiceConfig", [["serviceConfigJSON", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("serviceconfig.ParseResult")]), $.methodSignature("ReportError", ["error"]), $.methodSignature("UpdateState", ["resolver.State"], ["error"])]
);

export type Builder = {
	Build(target: Target, cc: ClientConn | null, opts: BuildOptions): [Resolver | null, $.GoError] | globalThis.Promise<[Resolver | null, $.GoError]>
	Scheme(): string
}

$.registerInterfaceType(
	"resolver.Builder",
	null,
	[$.methodSignature("Build", [["target", "resolver.Target"], ["cc", "resolver.ClientConn"], ["opts", "resolver.BuildOptions"]], ["resolver.Resolver", "error"]), $.methodSignature("Scheme", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Resolver = {
	Close(): void
	ResolveNow(_p0: ResolveNowOptions): void
}

$.registerInterfaceType(
	"resolver.Resolver",
	null,
	[$.methodSignature("Close"), $.methodSignature("ResolveNow", ["resolver.ResolveNowOptions"])]
);

export type AuthorityOverrider = {
	OverrideAuthority(_p0: Target): string
}

$.registerInterfaceType(
	"resolver.AuthorityOverrider",
	null,
	[$.methodSignature("OverrideAuthority", ["resolver.Target"], [/* @__PURE__ */ $.basicType("string")])]
);

export class Address {
	// Addr is the server address on which a connection will be established.
	public get Addr(): string {
		return this._fields.Addr
	}

	public set Addr(value: string) {
		this._fields.Addr = value
	}

	// ServerName is the name of this address.
	// If non-empty, the ServerName is used as the transport certification authority for
	// the address, instead of the hostname from the Dial target string. In most cases,
	// this should not be set.
	//
	// WARNING: ServerName must only be populated with trusted values. It
	// is insecure to populate it with data from untrusted inputs since untrusted
	// values could be used to bypass the authority checks performed by TLS.
	public get ServerName(): string {
		return this._fields.ServerName
	}

	public set ServerName(value: string) {
		this._fields.ServerName = value
	}

	// Attributes contains arbitrary data about this address intended for
	// consumption by the SubConn.
	public get Attributes(): attributes.Attributes | $.VarRef<attributes.Attributes> | null {
		return this._fields.Attributes
	}

	public set Attributes(value: attributes.Attributes | $.VarRef<attributes.Attributes> | null) {
		this._fields.Attributes = value
	}

	// BalancerAttributes contains arbitrary data about this address intended
	// for consumption by the LB policy.  These attributes do not affect SubConn
	// creation, connection establishment, handshaking, etc.
	//
	// Deprecated: when an Address is inside an Endpoint, this field should not
	// be used, and it will eventually be removed entirely.
	public get BalancerAttributes(): attributes.Attributes | $.VarRef<attributes.Attributes> | null {
		return this._fields.BalancerAttributes
	}

	public set BalancerAttributes(value: attributes.Attributes | $.VarRef<attributes.Attributes> | null) {
		this._fields.BalancerAttributes = value
	}

	// Metadata is the information associated with Addr, which may be used
	// to make load balancing decision.
	//
	// Deprecated: use Attributes instead.
	public get Metadata(): any {
		return this._fields.Metadata
	}

	public set Metadata(value: any) {
		this._fields.Metadata = value
	}

	public _fields: {
		Addr: string
		ServerName: string
		Attributes: attributes.Attributes | $.VarRef<attributes.Attributes> | null
		BalancerAttributes: attributes.Attributes | $.VarRef<attributes.Attributes> | null
		Metadata: any
	}

	constructor(init?: Partial<{Addr?: string, ServerName?: string, Attributes?: attributes.Attributes | $.VarRef<attributes.Attributes> | null, BalancerAttributes?: attributes.Attributes | $.VarRef<attributes.Attributes> | null, Metadata?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			Addr: init?.Addr ?? ("" as string),
			ServerName: init?.ServerName ?? ("" as string),
			Attributes: init?.Attributes ?? (null! as attributes.Attributes | $.VarRef<attributes.Attributes> | null),
			BalancerAttributes: init?.BalancerAttributes ?? (null! as attributes.Attributes | $.VarRef<attributes.Attributes> | null),
			Metadata: init?.Metadata ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Address {
		return new Address(this, true)
	}

	public __goscriptAssign(source: Address): void {
		const target = this._fields
		const values = source._fields
		target.Addr = values.Addr
		target.ServerName = values.ServerName
		target.Attributes = values.Attributes
		target.BalancerAttributes = values.BalancerAttributes
		target.Metadata = $.assignFieldValue(target.Metadata, values.Metadata, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async Equal(o: Address): globalThis.Promise<boolean> {
		const a = this;
		return (((($.stringEqual(a.Addr, o.Addr)) && ($.stringEqual(a.ServerName, o.ServerName))) && await attributes.Attributes.prototype.Equal.call(a.Attributes, o.Attributes)) && await attributes.Attributes.prototype.Equal.call(a.BalancerAttributes, o.BalancerAttributes)) && ($.comparableEqual(a.Metadata, o.Metadata))
	}

	public async String(): globalThis.Promise<string> {
		const a = this;
		let sb: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
		sb.value.WriteString(await fmt.Sprintf("{Addr: %q, ", a.Addr))
		sb.value.WriteString(await fmt.Sprintf("ServerName: %q, ", a.ServerName))
		if (a.Attributes != null) {
			sb.value.WriteString(await fmt.Sprintf("Attributes: %v, ", await attributes.Attributes.prototype.String.call(a.Attributes)))
		}
		if (a.BalancerAttributes != null) {
			sb.value.WriteString(await fmt.Sprintf("BalancerAttributes: %v", await attributes.Attributes.prototype.String.call(a.BalancerAttributes)))
		}
		sb.value.WriteString("}")
		return sb.value.String()
	}

	static __typeInfo = $.registerStructType(
		"resolver.Address",
		() => new Address(),
		() => [$.methodSignature("Equal", [["o", "resolver.Address"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		Address,
		() => [/* @__PURE__ */ $.structField("Addr", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("ServerName", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Attributes", /* @__PURE__ */ $.pointerType("attributes.Attributes"), [2], 32, true), /* @__PURE__ */ $.structField("BalancerAttributes", /* @__PURE__ */ $.pointerType("attributes.Attributes"), [3], 40, true), /* @__PURE__ */ $.structField("Metadata", { kind: $.TypeKind.Interface, methods: [] }, [4], 48, true)]
	)
}

export class BuildOptions {
	// DisableServiceConfig indicates whether a resolver implementation should
	// fetch service config data.
	public get DisableServiceConfig(): boolean {
		return this._fields.DisableServiceConfig
	}

	public set DisableServiceConfig(value: boolean) {
		this._fields.DisableServiceConfig = value
	}

	// DialCreds is the transport credentials used by the ClientConn for
	// communicating with the target gRPC service (set via
	// WithTransportCredentials). In cases where a name resolution service
	// requires the same credentials, the resolver may use this field. In most
	// cases though, it is not appropriate, and this field may be ignored.
	public get DialCreds(): credentials.TransportCredentials | null {
		return this._fields.DialCreds
	}

	public set DialCreds(value: credentials.TransportCredentials | null) {
		this._fields.DialCreds = value
	}

	// CredsBundle is the credentials bundle used by the ClientConn for
	// communicating with the target gRPC service (set via
	// WithCredentialsBundle). In cases where a name resolution service
	// requires the same credentials, the resolver may use this field. In most
	// cases though, it is not appropriate, and this field may be ignored.
	public get CredsBundle(): credentials.Bundle | null {
		return this._fields.CredsBundle
	}

	public set CredsBundle(value: credentials.Bundle | null) {
		this._fields.CredsBundle = value
	}

	// Dialer is the custom dialer used by the ClientConn for dialling the
	// target gRPC service (set via WithDialer). In cases where a name
	// resolution service requires the same dialer, the resolver may use this
	// field. In most cases though, it is not appropriate, and this field may
	// be ignored.
	public get Dialer(): ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null {
		return this._fields.Dialer
	}

	public set Dialer(value: ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null) {
		this._fields.Dialer = value
	}

	// Authority is the effective authority of the clientconn for which the
	// resolver is built.
	public get Authority(): string {
		return this._fields.Authority
	}

	public set Authority(value: string) {
		this._fields.Authority = value
	}

	public _fields: {
		DisableServiceConfig: boolean
		DialCreds: credentials.TransportCredentials | null
		CredsBundle: credentials.Bundle | null
		Dialer: ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null
		Authority: string
	}

	constructor(init?: Partial<{DisableServiceConfig?: boolean, DialCreds?: credentials.TransportCredentials | null, CredsBundle?: credentials.Bundle | null, Dialer?: ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null, Authority?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			DisableServiceConfig: init?.DisableServiceConfig ?? (false as boolean),
			DialCreds: init?.DialCreds ?? (null! as credentials.TransportCredentials | null),
			CredsBundle: init?.CredsBundle ?? (null! as credentials.Bundle | null),
			Dialer: init?.Dialer ?? (null! as ((_p0: context.Context | null, _p1: string) => [net.Conn | null, $.GoError] | globalThis.Promise<[net.Conn | null, $.GoError]>) | null),
			Authority: init?.Authority ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BuildOptions {
		return new BuildOptions(this, true)
	}

	public __goscriptAssign(source: BuildOptions): void {
		const target = this._fields
		const values = source._fields
		target.DisableServiceConfig = values.DisableServiceConfig
		target.DialCreds = $.assignFieldValue(target.DialCreds, values.DialCreds, "credentials.TransportCredentials")
		target.CredsBundle = $.assignFieldValue(target.CredsBundle, values.CredsBundle, "credentials.Bundle")
		target.Dialer = values.Dialer
		target.Authority = values.Authority
	}

	static __typeInfo = $.registerStructType(
		"resolver.BuildOptions",
		() => new BuildOptions(),
		() => [],
		BuildOptions,
		() => [/* @__PURE__ */ $.structField("DisableServiceConfig", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("DialCreds", "credentials.TransportCredentials", [1], 8, true), /* @__PURE__ */ $.structField("CredsBundle", "credentials.Bundle", [2], 24, true), /* @__PURE__ */ $.structField("Dialer", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string")], results: ["net.Conn", "error"] } as $.FunctionTypeInfo), [3], 40, true), /* @__PURE__ */ $.structField("Authority", /* @__PURE__ */ $.basicType("string"), [4], 48, true)]
	)
}

export class Endpoint {
	// Addresses contains a list of addresses used to access this endpoint.
	public get Addresses(): $.Slice<Address> {
		return this._fields.Addresses
	}

	public set Addresses(value: $.Slice<Address>) {
		this._fields.Addresses = value
	}

	// Attributes contains arbitrary data about this endpoint intended for
	// consumption by the LB policy.
	public get Attributes(): attributes.Attributes | $.VarRef<attributes.Attributes> | null {
		return this._fields.Attributes
	}

	public set Attributes(value: attributes.Attributes | $.VarRef<attributes.Attributes> | null) {
		this._fields.Attributes = value
	}

	public _fields: {
		Addresses: $.Slice<Address>
		Attributes: attributes.Attributes | $.VarRef<attributes.Attributes> | null
	}

	constructor(init?: Partial<{Addresses?: $.Slice<Address>, Attributes?: attributes.Attributes | $.VarRef<attributes.Attributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Addresses: init?.Addresses ?? (null! as $.Slice<Address>),
			Attributes: init?.Attributes ?? (null! as attributes.Attributes | $.VarRef<attributes.Attributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Endpoint {
		return new Endpoint(this, true)
	}

	public __goscriptAssign(source: Endpoint): void {
		const target = this._fields
		const values = source._fields
		target.Addresses = values.Addresses
		target.Attributes = values.Attributes
	}

	static __typeInfo = $.registerStructType(
		"resolver.Endpoint",
		() => new Endpoint(),
		() => [],
		Endpoint,
		() => [/* @__PURE__ */ $.structField("Addresses", /* @__PURE__ */ $.sliceType("resolver.Address"), [0], 0, true), /* @__PURE__ */ $.structField("Attributes", /* @__PURE__ */ $.pointerType("attributes.Attributes"), [1], 24, true)]
	)
}

export class State {
	// Addresses is the latest set of resolved addresses for the target.
	//
	// If a resolver sets Addresses but does not set Endpoints, one Endpoint
	// will be created for each Address before the State is passed to the LB
	// policy.  The BalancerAttributes of each entry in Addresses will be set
	// in Endpoints.Attributes, and be cleared in the Endpoint's Address's
	// BalancerAttributes.
	//
	// Soon, Addresses will be deprecated and replaced fully by Endpoints.
	public get Addresses(): $.Slice<Address> {
		return this._fields.Addresses
	}

	public set Addresses(value: $.Slice<Address>) {
		this._fields.Addresses = value
	}

	// Endpoints is the latest set of resolved endpoints for the target.
	//
	// If a resolver produces a State containing Endpoints but not Addresses,
	// it must take care to ensure the LB policies it selects will support
	// Endpoints.
	public get Endpoints(): $.Slice<Endpoint> {
		return this._fields.Endpoints
	}

	public set Endpoints(value: $.Slice<Endpoint>) {
		this._fields.Endpoints = value
	}

	// ServiceConfig contains the result from parsing the latest service
	// config.  If it is nil, it indicates no service config is present or the
	// resolver does not provide service configs.
	public get ServiceConfig(): serviceconfig.ParseResult | $.VarRef<serviceconfig.ParseResult> | null {
		return this._fields.ServiceConfig
	}

	public set ServiceConfig(value: serviceconfig.ParseResult | $.VarRef<serviceconfig.ParseResult> | null) {
		this._fields.ServiceConfig = value
	}

	// Attributes contains arbitrary data about the resolver intended for
	// consumption by the load balancing policy.
	public get Attributes(): attributes.Attributes | $.VarRef<attributes.Attributes> | null {
		return this._fields.Attributes
	}

	public set Attributes(value: attributes.Attributes | $.VarRef<attributes.Attributes> | null) {
		this._fields.Attributes = value
	}

	public _fields: {
		Addresses: $.Slice<Address>
		Endpoints: $.Slice<Endpoint>
		ServiceConfig: serviceconfig.ParseResult | $.VarRef<serviceconfig.ParseResult> | null
		Attributes: attributes.Attributes | $.VarRef<attributes.Attributes> | null
	}

	constructor(init?: Partial<{Addresses?: $.Slice<Address>, Endpoints?: $.Slice<Endpoint>, ServiceConfig?: serviceconfig.ParseResult | $.VarRef<serviceconfig.ParseResult> | null, Attributes?: attributes.Attributes | $.VarRef<attributes.Attributes> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Addresses: init?.Addresses ?? (null! as $.Slice<Address>),
			Endpoints: init?.Endpoints ?? (null! as $.Slice<Endpoint>),
			ServiceConfig: init?.ServiceConfig ?? (null! as serviceconfig.ParseResult | $.VarRef<serviceconfig.ParseResult> | null),
			Attributes: init?.Attributes ?? (null! as attributes.Attributes | $.VarRef<attributes.Attributes> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): State {
		return new State(this, true)
	}

	public __goscriptAssign(source: State): void {
		const target = this._fields
		const values = source._fields
		target.Addresses = values.Addresses
		target.Endpoints = values.Endpoints
		target.ServiceConfig = values.ServiceConfig
		target.Attributes = values.Attributes
	}

	static __typeInfo = $.registerStructType(
		"resolver.State",
		() => new State(),
		() => [],
		State,
		() => [/* @__PURE__ */ $.structField("Addresses", /* @__PURE__ */ $.sliceType("resolver.Address"), [0], 0, true), /* @__PURE__ */ $.structField("Endpoints", /* @__PURE__ */ $.sliceType("resolver.Endpoint"), [1], 24, true), /* @__PURE__ */ $.structField("ServiceConfig", /* @__PURE__ */ $.pointerType("serviceconfig.ParseResult"), [2], 48, true), /* @__PURE__ */ $.structField("Attributes", /* @__PURE__ */ $.pointerType("attributes.Attributes"), [3], 56, true)]
	)
}

export class Target {
	// URL contains the parsed dial target with an optional default scheme added
	// to it if the original dial target contained no scheme or contained an
	// unregistered scheme. Any query params specified in the original dial
	// target can be accessed from here.
	public get URL(): url.URL {
		return this._fields.URL
	}

	public set URL(value: url.URL) {
		this._fields.URL = value
	}

	public _fields: {
		URL: url.URL
	}

	constructor(init?: Partial<{URL?: url.URL}>, __goscriptValue?: boolean) {
		this._fields = {
			URL: init?.URL ? init.URL.clone() : new url.URL(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Target {
		return new Target(this, true)
	}

	public __goscriptAssign(source: Target): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.URL, values.URL)
	}

	public Endpoint(): string {
		const t = this;
		let endpoint = t.URL.Path
		if ($.stringEqual(endpoint, "")) {
			endpoint = t.URL.Opaque
		}
		// For targets of the form "[scheme]://[authority]/endpoint, the endpoint
		// value returned from url.Parse() contains a leading "/". Although this is
		// in accordance with RFC 3986, we do not want to break existing resolver
		// implementations which expect the endpoint without the leading "/". So, we
		// end up stripping the leading "/" here. But this will result in an
		// incorrect parsing for something like "unix:///path/to/socket". Since we
		// own the "unix" resolver, we can workaround in the unix resolver by using
		// the `URL` field.
		return strings.TrimPrefix(endpoint, "/")
	}

	public String(): string {
		const t = this;
		return $.concatString(($.concatString(($.concatString(($.concatString(t.URL.Scheme, "://")), t.URL.Host)), "/")), t.Endpoint())
	}

	static __typeInfo = $.registerStructType(
		"resolver.Target",
		() => new Target(),
		() => [$.methodSignature("Endpoint", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])],
		Target,
		() => [/* @__PURE__ */ $.structField("URL", "url.URL", [0], 0, true)]
	)
}

export class ResolveNowOptions {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ResolveNowOptions {
		return new ResolveNowOptions(this, true)
	}

	public __goscriptAssign(source: ResolveNowOptions): void {
	}

	static __typeInfo = $.registerStructType(
		"resolver.ResolveNowOptions",
		() => new ResolveNowOptions(),
		() => [],
		ResolveNowOptions,
		() => []
	)
}

export let m: globalThis.Map<string, Builder | null> | null = $.makeMap<string, Builder | null>()

export function __goscript_set_m(__goscriptValue: globalThis.Map<string, Builder | null> | null): void {
	m = __goscriptValue
}

export let defaultScheme: string = "passthrough"

export function __goscript_set_defaultScheme(__goscriptValue: string): void {
	defaultScheme = __goscriptValue
}

export async function Register(b: Builder | null): globalThis.Promise<void> {
	$.mapSet(m, (__goscriptAwait = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? (b as Exclude<Builder, null>) : $.pointerValue<Exclude<Builder, null>>(b)).Scheme(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), b)
}

export function Get(scheme: string): Builder | null {
	{
		let [b, ok] = $.mapGet<string, Builder | null, Builder | null>(m, scheme, null)
		if (ok) {
			return b
		}
	}
	return null
}

export function SetDefaultScheme(scheme: string): void {
	defaultScheme = scheme
	internal.__goscript_set_UserSetDefaultScheme(true)
}

export function GetDefaultScheme(): string {
	return defaultScheme
}

var __goscriptAwait: any
