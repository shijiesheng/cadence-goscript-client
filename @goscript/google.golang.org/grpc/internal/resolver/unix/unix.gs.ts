// Generated file based on unix.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as networktype from "@goscript/google.golang.org/grpc/internal/transport/networktype/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as url from "@goscript/net/url/index.js"
import "@goscript/fmt/index.js"
import "@goscript/google.golang.org/grpc/internal/transport/networktype/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/net/url/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/resolver/unix", ["unix.builder", "unix.nopResolver"])

export class builder {
	public get scheme(): string {
		return this._fields.scheme
	}

	public set scheme(value: string) {
		this._fields.scheme = value
	}

	public _fields: {
		scheme: string
	}

	constructor(init?: Partial<{scheme?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			scheme: init?.scheme ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): builder {
		return new builder(this, true)
	}

	public __goscriptAssign(source: builder): void {
		const target = this._fields
		const values = source._fields
		target.scheme = values.scheme
	}

	public async Build(target: resolver.Target, cc: resolver.ClientConn | null, _p2: resolver.BuildOptions): globalThis.Promise<[resolver.Resolver | null, $.GoError]> {
		const b: builder | $.VarRef<builder> | null = this;
		if (!$.stringEqual(target.URL.Host, "")) {
			return [null, fmt.Errorf("invalid (non-empty) authority: %v", target.URL.Host)]
		}

		// gRPC was parsing the dial target manually before PR #4817, and we
		// switched to using url.Parse() in that PR. To avoid breaking existing
		// resolver implementations we ended up stripping the leading "/" from the
		// endpoint. This obviously does not work for the "unix" scheme. Hence we
		// end up using the parsed URL instead.
		let endpoint = target.URL.Path
		if ($.stringEqual(endpoint, "")) {
			endpoint = target.URL.Opaque
		}
		let addr = new resolver.Address({Addr: endpoint}, true)
		if ($.stringEqual($.pointerValue<builder>(b).scheme, "unix-abstract")) {
			// We can not prepend \0 as c++ gRPC does, as in Golang '@' is used to signify we do
			// not want trailing \0 in address.
			addr.Addr = $.concatString("@", addr.Addr)
		}
		void (__goscriptAwait = (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? (cc as Exclude<resolver.ClientConn, null>) : $.pointerValue<Exclude<resolver.ClientConn, null>>(cc)).UpdateState(new resolver.State({Addresses: $.arrayToSlice<resolver.Address>([networktype.Set((addr).clone(), "unix")])}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [$.interfaceValue<resolver.Resolver | null>(new nopResolver(), "*unix.nopResolver", /* @__PURE__ */ $.pointerType("unix.nopResolver")), null]
	}

	public OverrideAuthority(_p0: resolver.Target): string {
		const b: builder | $.VarRef<builder> | null = this;
		return "localhost"
	}

	public Scheme(): string {
		const b: builder | $.VarRef<builder> | null = this;
		return $.pointerValue<builder>(b).scheme
	}

	static __typeInfo = $.registerStructType(
		"unix.builder",
		() => new builder(),
		() => [$.methodSignature("Build", [["target", "resolver.Target"], ["cc", "resolver.ClientConn"], ["_", "resolver.BuildOptions"]], ["resolver.Resolver", "error"], true), $.methodSignature("OverrideAuthority", ["resolver.Target"], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Scheme", [], [/* @__PURE__ */ $.basicType("string")], true)],
		builder,
		() => [/* @__PURE__ */ $.structField("scheme", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/resolver/unix" })]
	)
}

export class nopResolver {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nopResolver {
		return new nopResolver(this, true)
	}

	public __goscriptAssign(source: nopResolver): void {
	}

	public Close(): void {
	}

	public ResolveNow(_p0: resolver.ResolveNowOptions): void {
	}

	static __typeInfo = $.registerStructType(
		"unix.nopResolver",
		() => new nopResolver(),
		() => [$.methodSignature("Close", [], [], true), $.methodSignature("ResolveNow", ["resolver.ResolveNowOptions"], [], true)],
		nopResolver,
		() => []
	)
}

export const unixScheme: string = "unix"

export const unixAbstractScheme: string = "unix-abstract"

async function __goscriptInit0(): globalThis.Promise<void> {
	await resolver.Register($.interfaceValue<resolver.Builder | null>(new builder({scheme: "unix"}), "*unix.builder", /* @__PURE__ */ $.pointerType("unix.builder")))
	await resolver.Register($.interfaceValue<resolver.Builder | null>(new builder({scheme: "unix-abstract"}), "*unix.builder", /* @__PURE__ */ $.pointerType("unix.builder")))
}

var __goscriptAwait: any

await __goscriptInit0()
