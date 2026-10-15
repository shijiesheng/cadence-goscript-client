// Generated file based on passthrough.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import type * as context from "@goscript/context/index.js"

import type * as net from "@goscript/net/index.js"
import "@goscript/errors/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/resolver/passthrough", ["passthrough.passthroughBuilder", "passthrough.passthroughResolver"])

export class passthroughBuilder {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): passthroughBuilder {
		return new passthroughBuilder(this, true)
	}

	public __goscriptAssign(source: passthroughBuilder): void {
	}

	public async Build(target: resolver.Target, cc: resolver.ClientConn | null, opts: resolver.BuildOptions): globalThis.Promise<[resolver.Resolver | null, $.GoError]> {
		if (($.stringEqual(target.Endpoint(), "")) && (opts.Dialer == null)) {
			return [null, errors.New("passthrough: received empty target in Build()")]
		}
		let r: passthroughResolver | $.VarRef<passthroughResolver> | null = new passthroughResolver({target: target, cc: cc})
		await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as passthroughResolver).start() : passthroughResolver.prototype.start.call(r))
		return [$.interfaceValue<resolver.Resolver | null>(r, "*passthrough.passthroughResolver", /* @__PURE__ */ $.pointerType("passthrough.passthroughResolver")), null]
	}

	public Scheme(): string {
		return "passthrough"
	}

	static __typeInfo = $.registerStructType(
		"passthrough.passthroughBuilder",
		() => new passthroughBuilder(),
		() => [$.methodSignature("Build", [["target", "resolver.Target"], ["cc", "resolver.ClientConn"], ["opts", "resolver.BuildOptions"]], ["resolver.Resolver", "error"], true), $.methodSignature("Scheme", [], [/* @__PURE__ */ $.basicType("string")], true)],
		passthroughBuilder,
		() => []
	)
}

export class passthroughResolver {
	public get target(): resolver.Target {
		return this._fields.target
	}

	public set target(value: resolver.Target) {
		this._fields.target = value
	}

	public get cc(): resolver.ClientConn | null {
		return this._fields.cc
	}

	public set cc(value: resolver.ClientConn | null) {
		this._fields.cc = value
	}

	public _fields: {
		target: resolver.Target
		cc: resolver.ClientConn | null
	}

	constructor(init?: Partial<{target?: resolver.Target, cc?: resolver.ClientConn | null}>, __goscriptValue?: boolean) {
		this._fields = {
			target: init?.target ? init.target.clone() : new resolver.Target(undefined, true),
			cc: init?.cc ?? (null! as resolver.ClientConn | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): passthroughResolver {
		return new passthroughResolver(this, true)
	}

	public __goscriptAssign(source: passthroughResolver): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.target, values.target)
		target.cc = $.assignFieldValue(target.cc, values.cc, "resolver.ClientConn")
	}

	public Close(): void {
	}

	public ResolveNow(_p0: resolver.ResolveNowOptions): void {
	}

	public async start(): globalThis.Promise<void> {
		const r: passthroughResolver | $.VarRef<passthroughResolver> | null = this;
		const r$: passthroughResolver = r == null ? $.pointerTarget<passthroughResolver>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<passthroughResolver>(r)
		void (__goscriptAwait = $.pointerValue<Exclude<resolver.ClientConn, null>>((r$ as passthroughResolver).cc).UpdateState(new resolver.State({Addresses: $.arrayToSlice<resolver.Address>([(() => { const __goscriptLiteralField0 = (r$ as passthroughResolver).target.Endpoint(); return new resolver.Address({Addr: __goscriptLiteralField0}, true) })()])}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"passthrough.passthroughResolver",
		() => new passthroughResolver(),
		() => [$.methodSignature("Close", [], [], true), $.methodSignature("ResolveNow", ["resolver.ResolveNowOptions"], [], true), $.methodSignature("start", [], [], true)],
		passthroughResolver,
		() => [/* @__PURE__ */ $.structField("target", "resolver.Target", [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/resolver/passthrough" }), /* @__PURE__ */ $.structField("cc", "resolver.ClientConn", [1], 144, false, { pkgPath: "google.golang.org/grpc/internal/resolver/passthrough" })]
	)
}

export const scheme: string = "passthrough"

async function __goscriptInit0(): globalThis.Promise<void> {
	await resolver.Register($.interfaceValue<resolver.Builder | null>(new passthroughBuilder(), "*passthrough.passthroughBuilder", /* @__PURE__ */ $.pointerType("passthrough.passthroughBuilder")))
}

var __goscriptAwait: any

await __goscriptInit0()
