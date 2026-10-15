// Generated file based on middleware.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as middleware from "@goscript/go.uber.org/yarpc/api/middleware/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/middleware/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/internal/firstoutboundmiddleware", ["firstoutboundmiddleware.Middleware"])

export class Middleware {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Middleware {
		return new Middleware(this, true)
	}

	public __goscriptAssign(source: Middleware): void {
	}

	public async Call(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null, next: transport.UnaryOutbound | null): globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]> {
		const m: Middleware | $.VarRef<Middleware> | null = this;
		await update(ctx, req, (next as transport.Outbound | null))
		return (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<transport.UnaryOutbound, null>) : $.pointerValue<Exclude<transport.UnaryOutbound, null>>(next)).Call(ctx, req)
	}

	public async CallOneway(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null, next: transport.OnewayOutbound | null): globalThis.Promise<[transport.Ack | null, $.GoError]> {
		const m: Middleware | $.VarRef<Middleware> | null = this;
		await update(ctx, req, (next as transport.Outbound | null))
		return (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<transport.OnewayOutbound, null>) : $.pointerValue<Exclude<transport.OnewayOutbound, null>>(next)).CallOneway(ctx, req)
	}

	public async CallStream(ctx: context.Context | null, req: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null, next: transport.StreamOutbound | null): globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]> {
		const m: Middleware | $.VarRef<Middleware> | null = this;
		await updateStream(ctx, req, (next as transport.Outbound | null))
		return (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<transport.StreamOutbound, null>) : $.pointerValue<Exclude<transport.StreamOutbound, null>>(next)).CallStream(ctx, req)
	}

	static __typeInfo = $.registerStructType(
		"firstoutboundmiddleware.Middleware",
		() => new Middleware(),
		() => [$.methodSignature("Call", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["next", "transport.UnaryOutbound"]], [/* @__PURE__ */ $.pointerType("transport.Response"), "error"], true), $.methodSignature("CallOneway", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["next", "transport.OnewayOutbound"]], ["transport.Ack", "error"], true), $.methodSignature("CallStream", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.StreamRequest")], ["next", "transport.StreamOutbound"]], [/* @__PURE__ */ $.pointerType("transport.ClientStream"), "error"], true)],
		Middleware,
		() => []
	)
}

export function New(): Middleware | $.VarRef<Middleware> | null {
	return new Middleware()
}

export async function update(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null, out: transport.Outbound | null): globalThis.Promise<void> {
	// TODO(apeatsbond): Setting environment headers and unique IDs should live
	// here too (T1860945).

	// Reset the transport field to the current outbound transport.
	// Request forwarding in transport layer proxies needs this when copying
	// requests to a different outbound type.
	{
		let [namer, ok] = $.typeAssertTuple<transport.Namer | null>(out, "transport.Namer")
		if (ok) {
			$.pointerValue<transport.Request>(req).Transport = (__goscriptAwait = (namer !== null && (namer as any).__isVarRef !== true && (namer as any).__goValue === undefined ? (namer as Exclude<transport.Namer, null>) : $.pointerValue<Exclude<transport.Namer, null>>(namer)).TransportName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
}

export async function updateStream(ctx: context.Context | null, req: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null, out: transport.Outbound | null): globalThis.Promise<void> {
	// TODO(apeatsbond): Setting environment headers and unique IDs should live
	// here too (T1860945).

	// Reset the transport field to the current outbound transport.
	// Request forwarding in transport layer proxies needs this when copying
	// requests to a different outbound type.
	{
		let [namer, ok] = $.typeAssertTuple<transport.Namer | null>(out, "transport.Namer")
		if (ok) {
			$.pointerValue<transport.RequestMeta>($.pointerValue<transport.StreamRequest>(req).Meta).Transport = (__goscriptAwait = (namer !== null && (namer as any).__isVarRef !== true && (namer as any).__goValue === undefined ? (namer as Exclude<transport.Namer, null>) : $.pointerValue<Exclude<transport.Namer, null>>(namer)).TransportName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
}

var __goscriptAwait: any
