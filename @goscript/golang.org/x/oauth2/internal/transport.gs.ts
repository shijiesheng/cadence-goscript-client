// Generated file based on transport.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as http from "@goscript/net/http/index.js"
import "@goscript/context/index.js"
import "@goscript/net/http/index.js"

$.registerTypePackagePath("golang.org/x/oauth2/internal", ["internal.ContextKey"])

export class ContextKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ContextKey {
		return new ContextKey(this, true)
	}

	public __goscriptAssign(source: ContextKey): void {
	}

	static __typeInfo = $.registerStructType(
		"internal.ContextKey",
		() => new ContextKey(),
		() => [],
		ContextKey,
		() => []
	)
}

export let HTTPClient: ContextKey = new ContextKey(undefined, true)

export function __goscript_set_HTTPClient(__goscriptValue: ContextKey): void {
	$.assignStruct(HTTPClient, __goscriptValue)
}

export async function ContextClient(ctx: context.Context | null): globalThis.Promise<http.Client | $.VarRef<http.Client> | null> {
	if (ctx != null) {
		{
			let __goscriptTuple0: any = $.typeAssertTuple<http.Client | $.VarRef<http.Client> | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue((HTTPClient).clone(), "internal.ContextKey", "internal.ContextKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("http.Client"))
			let hc: http.Client | $.VarRef<http.Client> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				return hc
			}
		}
	}
	return http.DefaultClient
}

var __goscriptAwait: any
