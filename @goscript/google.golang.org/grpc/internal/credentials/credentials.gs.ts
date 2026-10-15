// Generated file based on credentials.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"
import "@goscript/context/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/credentials", ["credentials.requestInfoKey", "credentials.clientHandshakeInfoKey"])

export class requestInfoKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): requestInfoKey {
		return new requestInfoKey(this, true)
	}

	public __goscriptAssign(source: requestInfoKey): void {
	}

	static __typeInfo = $.registerStructType(
		"credentials.requestInfoKey",
		() => new requestInfoKey(),
		() => [],
		requestInfoKey,
		() => []
	)
}

export class clientHandshakeInfoKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): clientHandshakeInfoKey {
		return new clientHandshakeInfoKey(this, true)
	}

	public __goscriptAssign(source: clientHandshakeInfoKey): void {
	}

	static __typeInfo = $.registerStructType(
		"credentials.clientHandshakeInfoKey",
		() => new clientHandshakeInfoKey(),
		() => [],
		clientHandshakeInfoKey,
		() => []
	)
}

export function NewRequestInfoContext(ctx: context.Context | null, ri: any): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new requestInfoKey(undefined, true), "credentials.requestInfoKey", "credentials.requestInfoKey"), ri)
}

export async function RequestInfoFromContext(ctx: context.Context | null): globalThis.Promise<any> {
	return (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new requestInfoKey(undefined, true), "credentials.requestInfoKey", "credentials.requestInfoKey"))
}

export async function ClientHandshakeInfoFromContext(ctx: context.Context | null): globalThis.Promise<any> {
	return (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new clientHandshakeInfoKey(undefined, true), "credentials.clientHandshakeInfoKey", "credentials.clientHandshakeInfoKey"))
}

export function NewClientHandshakeInfoContext(ctx: context.Context | null, chi: any): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new clientHandshakeInfoKey(undefined, true), "credentials.clientHandshakeInfoKey", "credentials.clientHandshakeInfoKey"), chi)
}

var __goscriptAwait: any
