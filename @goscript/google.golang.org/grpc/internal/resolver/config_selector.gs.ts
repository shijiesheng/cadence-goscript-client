// Generated file based on config_selector.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as sync from "@goscript/sync/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as attributes from "@goscript/google.golang.org/grpc/attributes/index.js"
import "@goscript/context/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/attributes/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/resolver", ["resolver.ConfigSelector", "resolver.RPCInfo", "resolver.RPCConfig", "resolver.ClientStream", "resolver.ClientInterceptor", "resolver.ServerInterceptor", "resolver.csKeyType", "resolver.SafeConfigSelector"])

export type ConfigSelector = {
	SelectConfig(_p0: RPCInfo): [RPCConfig | $.VarRef<RPCConfig> | null, $.GoError] | globalThis.Promise<[RPCConfig | $.VarRef<RPCConfig> | null, $.GoError]>
}

$.registerInterfaceType(
	"resolver.ConfigSelector",
	null,
	[$.methodSignature("SelectConfig", ["resolver.RPCInfo"], [/* @__PURE__ */ $.pointerType("resolver.RPCConfig"), "error"])]
);

export type ClientStream = {
	CloseSend(): $.GoError | globalThis.Promise<$.GoError>
	Context(): context.Context | null | globalThis.Promise<context.Context | null>
	Header(): [metadata.MD, $.GoError] | globalThis.Promise<[metadata.MD, $.GoError]>
	RecvMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	SendMsg(m: any): $.GoError | globalThis.Promise<$.GoError>
	Trailer(): metadata.MD | globalThis.Promise<metadata.MD>
}

$.registerInterfaceType(
	"resolver.ClientStream",
	null,
	[$.methodSignature("CloseSend", [], ["error"]), $.methodSignature("Context", [], ["context.Context"]), $.methodSignature("Header", [], ["metadata.MD", "error"]), $.methodSignature("RecvMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("SendMsg", [["m", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("Trailer", [], ["metadata.MD"])]
);

export type ClientInterceptor = {
	NewStream(ctx: context.Context | null, ri: RPCInfo, done: (() => void) | null, newStream: ((ctx: context.Context | null, done: (() => void) | null) => [ClientStream | null, $.GoError] | globalThis.Promise<[ClientStream | null, $.GoError]>) | null): [ClientStream | null, $.GoError]
}

$.registerInterfaceType(
	"resolver.ClientInterceptor",
	null,
	[$.methodSignature("NewStream", [["ctx", "context.Context"], ["ri", "resolver.RPCInfo"], ["done", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)], ["newStream", ({ kind: $.TypeKind.Function, params: ["context.Context", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)], results: ["resolver.ClientStream", "error"] } as $.FunctionTypeInfo)]], ["resolver.ClientStream", "error"])]
);

export type ServerInterceptor = {
	AllowRPC(ctx: context.Context | null): $.GoError
}

$.registerInterfaceType(
	"resolver.ServerInterceptor",
	null,
	[$.methodSignature("AllowRPC", [["ctx", "context.Context"]], ["error"])]
);

export type csKeyType = string

export class RPCInfo {
	// Context is the user's context for the RPC and contains headers and
	// application timeout.  It is passed for interception purposes and for
	// efficiency reasons.  SelectConfig should not be blocking.
	public get Context(): context.Context | null {
		return this._fields.Context
	}

	public set Context(value: context.Context | null) {
		this._fields.Context = value
	}

	public get Method(): string {
		return this._fields.Method
	}

	public set Method(value: string) {
		this._fields.Method = value
	}

	public _fields: {
		Context: context.Context | null
		Method: string
	}

	constructor(init?: Partial<{Context?: context.Context | null, Method?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Context: init?.Context ?? (null! as context.Context | null),
			Method: init?.Method ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RPCInfo {
		return new RPCInfo(this, true)
	}

	public __goscriptAssign(source: RPCInfo): void {
		const target = this._fields
		const values = source._fields
		target.Context = $.assignFieldValue(target.Context, values.Context, "context.Context")
		target.Method = values.Method
	}

	static __typeInfo = $.registerStructType(
		"resolver.RPCInfo",
		() => new RPCInfo(),
		() => [],
		RPCInfo,
		() => [/* @__PURE__ */ $.structField("Context", "context.Context", [0], 0, true), /* @__PURE__ */ $.structField("Method", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

export class RPCConfig {
	// The context to use for the remainder of the RPC; can pass info to LB
	// policy or affect timeout or metadata.
	public get Context(): context.Context | null {
		return this._fields.Context
	}

	public set Context(value: context.Context | null) {
		this._fields.Context = value
	}

	public get MethodConfig(): serviceconfig.MethodConfig {
		return this._fields.MethodConfig
	}

	public set MethodConfig(value: serviceconfig.MethodConfig) {
		this._fields.MethodConfig = value
	}

	public get OnCommitted(): (() => void) | null {
		return this._fields.OnCommitted
	}

	public set OnCommitted(value: (() => void) | null) {
		this._fields.OnCommitted = value
	}

	public get Interceptor(): ClientInterceptor | null {
		return this._fields.Interceptor
	}

	public set Interceptor(value: ClientInterceptor | null) {
		this._fields.Interceptor = value
	}

	public _fields: {
		Context: context.Context | null
		MethodConfig: serviceconfig.MethodConfig
		OnCommitted: (() => void) | null
		Interceptor: ClientInterceptor | null
	}

	constructor(init?: Partial<{Context?: context.Context | null, MethodConfig?: serviceconfig.MethodConfig, OnCommitted?: (() => void) | null, Interceptor?: ClientInterceptor | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Context: init?.Context ?? (null! as context.Context | null),
			MethodConfig: init?.MethodConfig ? init.MethodConfig.clone() : new serviceconfig.MethodConfig(undefined, true),
			OnCommitted: init?.OnCommitted ?? (null! as (() => void) | null),
			Interceptor: init?.Interceptor ?? (null! as ClientInterceptor | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RPCConfig {
		return new RPCConfig(this, true)
	}

	public __goscriptAssign(source: RPCConfig): void {
		const target = this._fields
		const values = source._fields
		target.Context = $.assignFieldValue(target.Context, values.Context, "context.Context")
		$.assignStruct(target.MethodConfig, values.MethodConfig)
		target.OnCommitted = values.OnCommitted
		target.Interceptor = $.assignFieldValue(target.Interceptor, values.Interceptor, "resolver.ClientInterceptor")
	}

	static __typeInfo = $.registerStructType(
		"resolver.RPCConfig",
		() => new RPCConfig(),
		() => [],
		RPCConfig,
		() => [/* @__PURE__ */ $.structField("Context", "context.Context", [0], 0, true), /* @__PURE__ */ $.structField("MethodConfig", "serviceconfig.MethodConfig", [1], 16, true), /* @__PURE__ */ $.structField("OnCommitted", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [2], 56, true), /* @__PURE__ */ $.structField("Interceptor", "resolver.ClientInterceptor", [3], 64, true)]
	)
}

export class SafeConfigSelector {
	public get mu(): sync.RWMutex {
		return this._fields.mu
	}

	public set mu(value: sync.RWMutex) {
		this._fields.mu = value
	}

	public get cs(): ConfigSelector | null {
		return this._fields.cs
	}

	public set cs(value: ConfigSelector | null) {
		this._fields.cs = value
	}

	public _fields: {
		mu: sync.RWMutex
		cs: ConfigSelector | null
	}

	constructor(init?: Partial<{mu?: sync.RWMutex, cs?: ConfigSelector | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.RWMutex()),
			cs: init?.cs ?? (null! as ConfigSelector | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SafeConfigSelector {
		return new SafeConfigSelector(this, true)
	}

	public __goscriptAssign(source: SafeConfigSelector): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.cs = $.assignFieldValue(target.cs, values.cs, "resolver.ConfigSelector")
	}

	public async SelectConfig(r: RPCInfo): globalThis.Promise<[RPCConfig | $.VarRef<RPCConfig> | null, $.GoError]> {
		const scs: SafeConfigSelector | $.VarRef<SafeConfigSelector> | null = this;
		using __defer = new $.DisposableStack()
		const scs$: SafeConfigSelector = scs == null ? $.pointerTarget<SafeConfigSelector>(scs) : (scs as any).__isVarRef === true ? (scs as any).value : (scs as any).__goValue === undefined ? (scs as any) : $.pointerTarget<SafeConfigSelector>(scs)
		await (scs$ as SafeConfigSelector).mu.RLock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((scs$ as SafeConfigSelector).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		return await $.pointerValue<Exclude<ConfigSelector, null>>((scs$ as SafeConfigSelector).cs).SelectConfig((r).clone())
	}

	public async UpdateConfigSelector(cs: ConfigSelector | null): globalThis.Promise<void> {
		let scs: SafeConfigSelector | $.VarRef<SafeConfigSelector> | null = this;
		using __defer = new $.DisposableStack()
		const scs$: SafeConfigSelector = scs == null ? $.pointerTarget<SafeConfigSelector>(scs) : (scs as any).__isVarRef === true ? (scs as any).value : (scs as any).__goValue === undefined ? (scs as any) : $.pointerTarget<SafeConfigSelector>(scs)
		await (scs$ as SafeConfigSelector).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((scs$ as SafeConfigSelector).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() });
		;(scs$ as SafeConfigSelector).cs = cs
	}

	static __typeInfo = $.registerStructType(
		"resolver.SafeConfigSelector",
		() => new SafeConfigSelector(),
		() => [$.methodSignature("SelectConfig", [["r", "resolver.RPCInfo"]], [/* @__PURE__ */ $.pointerType("resolver.RPCConfig"), "error"], true), $.methodSignature("UpdateConfigSelector", [["cs", "resolver.ConfigSelector"]], [], true)],
		SafeConfigSelector,
		() => [/* @__PURE__ */ $.structField("mu", "sync.RWMutex", [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/resolver" }), /* @__PURE__ */ $.structField("cs", "resolver.ConfigSelector", [1], 24, false, { pkgPath: "google.golang.org/grpc/internal/resolver" })]
	)
}

export const csKey: csKeyType = "grpc.internal.resolver.configSelector"

export function SetConfigSelector(state: resolver.State, cs: ConfigSelector | null): resolver.State {
	state.Attributes = attributes.Attributes.prototype.WithValue.call(state.Attributes, $.namedValueInterfaceValue<any>("grpc.internal.resolver.configSelector", "resolver.csKeyType", {}, /* @__PURE__ */ $.basicType("string", "resolver.csKeyType")), (cs as any))
	return (state).clone()
}

export function GetConfigSelector(state: resolver.State): ConfigSelector | null {
	let [cs, ] = $.typeAssertTuple<ConfigSelector | null>(attributes.Attributes.prototype.Value.call(state.Attributes, $.namedValueInterfaceValue<any>("grpc.internal.resolver.configSelector", "resolver.csKeyType", {}, /* @__PURE__ */ $.basicType("string", "resolver.csKeyType"))), "resolver.ConfigSelector")
	return cs
}
