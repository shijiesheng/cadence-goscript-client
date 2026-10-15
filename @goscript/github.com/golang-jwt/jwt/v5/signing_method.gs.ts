// Generated file based on signing_method.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("github.com/golang-jwt/jwt/v5", ["jwt.SigningMethod"])

export type SigningMethod = {
	Alg(): string
	Sign(signingString: string, key: any): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	Verify(signingString: string, sig: $.Slice<number>, key: any): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"jwt.SigningMethod",
	null,
	[$.methodSignature("Alg", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Sign", [["signingString", /* @__PURE__ */ $.basicType("string")], ["key", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Verify", [["signingString", /* @__PURE__ */ $.basicType("string")], ["sig", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["key", { kind: $.TypeKind.Interface, methods: [] }]], ["error"])]
);

export var signingMethods: globalThis.Map<string, (() => SigningMethod | null | globalThis.Promise<SigningMethod | null>) | null> | null

export function __goscript_init_signingMethods(): void {
	if (((signingMethods) as any) === undefined) {
		signingMethods = $.makeMap<string, (() => SigningMethod | null | globalThis.Promise<SigningMethod | null>) | null>([])
	}
}

export function __goscript_get_signingMethods(): globalThis.Map<string, (() => SigningMethod | null | globalThis.Promise<SigningMethod | null>) | null> | null {
	if (((signingMethods) as any) === undefined) {
		__goscript_init_signingMethods()
	}
	return signingMethods
}

export function __goscript_set_signingMethods(__goscriptValue: globalThis.Map<string, (() => SigningMethod | null | globalThis.Promise<SigningMethod | null>) | null> | null): void {
	signingMethods = __goscriptValue
}

export var signingMethodLock: sync.RWMutex | $.VarRef<sync.RWMutex> | null

export function __goscript_init_signingMethodLock(): void {
	if (((signingMethodLock) as any) === undefined) {
		signingMethodLock = new sync.RWMutex()
	}
}

export function __goscript_get_signingMethodLock(): sync.RWMutex | $.VarRef<sync.RWMutex> | null {
	if (((signingMethodLock) as any) === undefined) {
		__goscript_init_signingMethodLock()
	}
	return signingMethodLock
}

export function __goscript_set_signingMethodLock(__goscriptValue: sync.RWMutex | $.VarRef<sync.RWMutex> | null): void {
	signingMethodLock = __goscriptValue
}

export async function RegisterSigningMethod(alg: string, f: (() => SigningMethod | null | globalThis.Promise<SigningMethod | null>) | null): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	await sync.RWMutex.prototype.Lock.call($.pointerValue<sync.RWMutex>(__goscript_get_signingMethodLock()))
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<sync.RWMutex>(__goscript_get_signingMethodLock())), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })

	$.mapSet(__goscript_get_signingMethods(), alg, f)
}

export async function GetSigningMethod(alg: string): globalThis.Promise<SigningMethod | null> {
	let method: SigningMethod | null = null! as SigningMethod | null
	using __defer = new $.DisposableStack()
	await sync.RWMutex.prototype.RLock.call($.pointerValue<sync.RWMutex>(__goscript_get_signingMethodLock()))
	const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<sync.RWMutex>(__goscript_get_signingMethodLock())), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
	__defer.defer(() => { __goscriptDeferCallee1() })

	{
		let [methodF, ok] = $.mapGet<string, (() => SigningMethod | null | globalThis.Promise<SigningMethod | null>) | null, (() => SigningMethod | null | globalThis.Promise<SigningMethod | null>) | null>(__goscript_get_signingMethods(), alg, null)
		if (ok) {
			method = (__goscriptAwait = methodF!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	__defer.dispose()
	return method
	throw new globalThis.Error("goscript: unreachable return")
}

export async function GetAlgorithms(): globalThis.Promise<$.Slice<string>> {
	let algs: $.Slice<string> = null! as $.Slice<string>
	using __defer = new $.DisposableStack()
	await sync.RWMutex.prototype.RLock.call($.pointerValue<sync.RWMutex>(__goscript_get_signingMethodLock()))
	const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<sync.RWMutex>(__goscript_get_signingMethodLock())), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
	__defer.defer(() => { __goscriptDeferCallee2() })

	for (const [alg, __rangeValue] of __goscript_get_signingMethods()?.entries() ?? []) {
		algs = $.appendOne(algs, alg)
	}
	__defer.dispose()
	return algs
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptAwait: any
