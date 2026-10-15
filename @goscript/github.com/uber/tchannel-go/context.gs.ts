// Generated file based on context.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as context2 from "@goscript/context/index.js"

import type * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as __goscript_calloptions from "./calloptions.gs.ts"

import * as __goscript_connection from "./connection.gs.ts"

import * as __goscript_context_builder from "./context_builder.gs.ts"

import * as __goscript_context_header from "./context_header.gs.ts"

import type * as __goscript_messages from "./messages.gs.ts"

import * as __goscript_retry from "./retry.gs.ts"

import * as __goscript_retryon_string from "./retryon_string.gs.ts"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/context/index.js"
import "./calloptions.gs.ts"
import "./connection.gs.ts"
import "./context_builder.gs.ts"
import "./context_header.gs.ts"
import "./retry.gs.ts"
import "./retryon_string.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.contextKey", "tchannel.tchannelCtxParams", "tchannel.IncomingCall"])

export type contextKey = number

export type IncomingCall = {
	CallOptions(): __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null
	CallerName(): string
	LocalPeer(): __goscript_connection.LocalPeerInfo
	RemotePeer(): __goscript_connection.PeerInfo
	RoutingDelegate(): string
	RoutingKey(): string
	ShardKey(): string
}

$.registerInterfaceType(
	"tchannel.IncomingCall",
	null,
	[$.methodSignature("CallOptions", [], [/* @__PURE__ */ $.pointerType("tchannel.CallOptions")]), $.methodSignature("CallerName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("LocalPeer", [], ["tchannel.LocalPeerInfo"]), $.methodSignature("RemotePeer", [], ["tchannel.PeerInfo"]), $.methodSignature("RoutingDelegate", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("RoutingKey", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ShardKey", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class tchannelCtxParams {
	public get tracingDisabled(): boolean {
		return this._fields.tracingDisabled
	}

	public set tracingDisabled(value: boolean) {
		this._fields.tracingDisabled = value
	}

	public get hideListeningOnOutbound(): boolean {
		return this._fields.hideListeningOnOutbound
	}

	public set hideListeningOnOutbound(value: boolean) {
		this._fields.hideListeningOnOutbound = value
	}

	public get call(): IncomingCall | null {
		return this._fields.call
	}

	public set call(value: IncomingCall | null) {
		this._fields.call = value
	}

	public get options(): __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null {
		return this._fields.options
	}

	public set options(value: __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null) {
		this._fields.options = value
	}

	public get retryOptions(): __goscript_retry.RetryOptions | $.VarRef<__goscript_retry.RetryOptions> | null {
		return this._fields.retryOptions
	}

	public set retryOptions(value: __goscript_retry.RetryOptions | $.VarRef<__goscript_retry.RetryOptions> | null) {
		this._fields.retryOptions = value
	}

	public get connectTimeout(): time.Duration {
		return this._fields.connectTimeout
	}

	public set connectTimeout(value: time.Duration) {
		this._fields.connectTimeout = value
	}

	public get connectBaseContext(): context.Context | null {
		return this._fields.connectBaseContext
	}

	public set connectBaseContext(value: context.Context | null) {
		this._fields.connectBaseContext = value
	}

	public _fields: {
		tracingDisabled: boolean
		hideListeningOnOutbound: boolean
		call: IncomingCall | null
		options: __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null
		retryOptions: __goscript_retry.RetryOptions | $.VarRef<__goscript_retry.RetryOptions> | null
		connectTimeout: time.Duration
		connectBaseContext: context.Context | null
	}

	constructor(init?: Partial<{tracingDisabled?: boolean, hideListeningOnOutbound?: boolean, call?: IncomingCall | null, options?: __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null, retryOptions?: __goscript_retry.RetryOptions | $.VarRef<__goscript_retry.RetryOptions> | null, connectTimeout?: time.Duration, connectBaseContext?: context.Context | null}>, __goscriptValue?: boolean) {
		this._fields = {
			tracingDisabled: init?.tracingDisabled ?? (false as boolean),
			hideListeningOnOutbound: init?.hideListeningOnOutbound ?? (false as boolean),
			call: init?.call ?? (null! as IncomingCall | null),
			options: init?.options ?? (null! as __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null),
			retryOptions: init?.retryOptions ?? (null! as __goscript_retry.RetryOptions | $.VarRef<__goscript_retry.RetryOptions> | null),
			connectTimeout: init?.connectTimeout ?? (0n as time.Duration),
			connectBaseContext: init?.connectBaseContext ?? (null! as context.Context | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tchannelCtxParams {
		return new tchannelCtxParams(this, true)
	}

	public __goscriptAssign(source: tchannelCtxParams): void {
		const target = this._fields
		const values = source._fields
		target.tracingDisabled = values.tracingDisabled
		target.hideListeningOnOutbound = values.hideListeningOnOutbound
		target.call = $.assignFieldValue(target.call, values.call, "tchannel.IncomingCall")
		target.options = values.options
		target.retryOptions = values.retryOptions
		target.connectTimeout = values.connectTimeout
		target.connectBaseContext = $.assignFieldValue(target.connectBaseContext, values.connectBaseContext, "context.Context")
	}

	static __typeInfo = $.registerStructType(
		"tchannel.tchannelCtxParams",
		() => new tchannelCtxParams(),
		() => [],
		tchannelCtxParams,
		() => [/* @__PURE__ */ $.structField("tracingDisabled", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("hideListeningOnOutbound", /* @__PURE__ */ $.basicType("bool"), [1], 1, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("call", "tchannel.IncomingCall", [2], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("options", /* @__PURE__ */ $.pointerType("tchannel.CallOptions"), [3], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("retryOptions", /* @__PURE__ */ $.pointerType("tchannel.RetryOptions"), [4], 32, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("connectTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [5], 40, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("connectBaseContext", "context.Context", [6], 48, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export const defaultTimeout: time.Duration = 1000000000n

export const contextKeyTChannel: contextKey = 0

export const contextKeyHeaders: contextKey = 1

export async function getTChannelParams(ctx: context.Context | null): globalThis.Promise<tchannelCtxParams | $.VarRef<tchannelCtxParams> | null> {
	{
		let __goscriptTuple0: any = $.typeAssertTuple<tchannelCtxParams | $.VarRef<tchannelCtxParams> | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context2.Context, null>) : $.pointerValue<Exclude<context2.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>(0, "tchannel.contextKey", {}, /* @__PURE__ */ $.basicType("int", "tchannel.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("tchannel.tchannelCtxParams"))
		let params: tchannelCtxParams | $.VarRef<tchannelCtxParams> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			return params
		}
	}
	return null
}

export async function NewContext(timeout: time.Duration): globalThis.Promise<[context.Context | null, context.CancelFunc]> {
	const __goscriptReturn0 = await __goscript_context_builder.ContextBuilder.prototype.Build.call(__goscript_context_builder.NewContextBuilder(timeout))
	return [(__goscriptReturn0[0] as context.Context | null), __goscriptReturn0[1]]
	throw new globalThis.Error("goscript: unreachable return")
}

export async function WrapContextForTest(ctx: context.Context | null, call: IncomingCall | null): globalThis.Promise<context.Context | null> {
	$.pointerValue<tchannelCtxParams>(await getTChannelParams(ctx)).call = call
	return ctx
}

export async function newIncomingContext(ctx: context.Context | null, call: IncomingCall | null, timeout: time.Duration): globalThis.Promise<[context.Context | null, context.CancelFunc]> {
	const __goscriptReturn1 = await __goscript_context_builder.ContextBuilder.prototype.Build.call(__goscript_context_builder.ContextBuilder.prototype.setIncomingCall.call(__goscript_context_builder.ContextBuilder.prototype.SetParentContext.call(__goscript_context_builder.NewContextBuilder(timeout), ctx), call))
	return [(__goscriptReturn1[0] as context.Context | null), __goscriptReturn1[1]]
	throw new globalThis.Error("goscript: unreachable return")
}

export async function CurrentCall(ctx: context.Context | null): globalThis.Promise<IncomingCall | null> {
	{
		let params: tchannelCtxParams | $.VarRef<tchannelCtxParams> | null = await getTChannelParams(ctx)
		if (params != null) {
			return $.pointerValue<tchannelCtxParams>(params).call
		}
	}
	return null
}

export async function currentCallOptions(ctx: context.Context | null): globalThis.Promise<__goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null> {
	{
		let params: tchannelCtxParams | $.VarRef<tchannelCtxParams> | null = await getTChannelParams(ctx)
		if (params != null) {
			return $.pointerValue<tchannelCtxParams>(params).options
		}
	}
	return null
}

export async function isTracingDisabled(ctx: context.Context | null): globalThis.Promise<boolean> {
	{
		let params: tchannelCtxParams | $.VarRef<tchannelCtxParams> | null = await getTChannelParams(ctx)
		if (params != null) {
			return $.pointerValue<tchannelCtxParams>(params).tracingDisabled
		}
	}
	return false
}

var __goscriptAwait: any
