// Generated file based on context_builder.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as context2 from "@goscript/context/index.js"

import type * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as __goscript_calloptions from "./calloptions.gs.ts"

import * as __goscript_connection from "./connection.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_context_header from "./context_header.gs.ts"

import type * as __goscript_messages from "./messages.gs.ts"

import * as __goscript_retry from "./retry.gs.ts"

import * as __goscript_retryon_string from "./retryon_string.gs.ts"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/context/index.js"
import "./calloptions.gs.ts"
import "./connection.gs.ts"
import "./context.gs.ts"
import "./context_header.gs.ts"
import "./retry.gs.ts"
import "./retryon_string.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.ContextBuilder"])

export class ContextBuilder {
	// TracingDisabled disables trace reporting for calls using this context.
	public get TracingDisabled(): boolean {
		return this._fields.TracingDisabled
	}

	public set TracingDisabled(value: boolean) {
		this._fields.TracingDisabled = value
	}

	// hideListeningOnOutbound disables sending the listening server's host:port
	// when creating new outgoing connections.
	public get hideListeningOnOutbound(): boolean {
		return this._fields.hideListeningOnOutbound
	}

	public set hideListeningOnOutbound(value: boolean) {
		this._fields.hideListeningOnOutbound = value
	}

	// replaceParentHeaders is set to true when SetHeaders() method is called.
	// It forces headers from ParentContext to be ignored. When false, parent
	// headers will be merged with headers accumulated by the builder.
	public get replaceParentHeaders(): boolean {
		return this._fields.replaceParentHeaders
	}

	public set replaceParentHeaders(value: boolean) {
		this._fields.replaceParentHeaders = value
	}

	// If Timeout is zero, Build will default to defaultTimeout.
	public get Timeout(): time.Duration {
		return this._fields.Timeout
	}

	public set Timeout(value: time.Duration) {
		this._fields.Timeout = value
	}

	// Headers are application headers that json/thrift will encode into arg2.
	public get Headers(): globalThis.Map<string, string> | null {
		return this._fields.Headers
	}

	public set Headers(value: globalThis.Map<string, string> | null) {
		this._fields.Headers = value
	}

	// CallOptions are TChannel call options for the specific call.
	public get CallOptions(): __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null {
		return this._fields.CallOptions
	}

	public set CallOptions(value: __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null) {
		this._fields.CallOptions = value
	}

	// RetryOptions are the retry options for this call.
	public get RetryOptions(): __goscript_retry.RetryOptions | $.VarRef<__goscript_retry.RetryOptions> | null {
		return this._fields.RetryOptions
	}

	public set RetryOptions(value: __goscript_retry.RetryOptions | $.VarRef<__goscript_retry.RetryOptions> | null) {
		this._fields.RetryOptions = value
	}

	// ConnectTimeout is the timeout for creating a TChannel connection.
	public get ConnectTimeout(): time.Duration {
		return this._fields.ConnectTimeout
	}

	public set ConnectTimeout(value: time.Duration) {
		this._fields.ConnectTimeout = value
	}

	// ConnectBaseContext is the base context for all connections
	public get ConnectBaseContext(): context.Context | null {
		return this._fields.ConnectBaseContext
	}

	public set ConnectBaseContext(value: context.Context | null) {
		this._fields.ConnectBaseContext = value
	}

	// ParentContext to build the new context from. If empty, context.Background() is used.
	// The new (child) context inherits a number of properties from the parent context:
	//   - context fields, accessible via `ctx.Value(key)`
	//   - headers if parent is a ContextWithHeaders, unless replaced via SetHeaders()
	public get ParentContext(): context.Context | null {
		return this._fields.ParentContext
	}

	public set ParentContext(value: context.Context | null) {
		this._fields.ParentContext = value
	}

	// Hidden fields: we do not want users outside of tchannel to set these.
	public get incomingCall(): __goscript_context.IncomingCall | null {
		return this._fields.incomingCall
	}

	public set incomingCall(value: __goscript_context.IncomingCall | null) {
		this._fields.incomingCall = value
	}

	public _fields: {
		TracingDisabled: boolean
		hideListeningOnOutbound: boolean
		replaceParentHeaders: boolean
		Timeout: time.Duration
		Headers: globalThis.Map<string, string> | null
		CallOptions: __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null
		RetryOptions: __goscript_retry.RetryOptions | $.VarRef<__goscript_retry.RetryOptions> | null
		ConnectTimeout: time.Duration
		ConnectBaseContext: context.Context | null
		ParentContext: context.Context | null
		incomingCall: __goscript_context.IncomingCall | null
	}

	constructor(init?: Partial<{TracingDisabled?: boolean, hideListeningOnOutbound?: boolean, replaceParentHeaders?: boolean, Timeout?: time.Duration, Headers?: globalThis.Map<string, string> | null, CallOptions?: __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null, RetryOptions?: __goscript_retry.RetryOptions | $.VarRef<__goscript_retry.RetryOptions> | null, ConnectTimeout?: time.Duration, ConnectBaseContext?: context.Context | null, ParentContext?: context.Context | null, incomingCall?: __goscript_context.IncomingCall | null}>, __goscriptValue?: boolean) {
		this._fields = {
			TracingDisabled: init?.TracingDisabled ?? (false as boolean),
			hideListeningOnOutbound: init?.hideListeningOnOutbound ?? (false as boolean),
			replaceParentHeaders: init?.replaceParentHeaders ?? (false as boolean),
			Timeout: init?.Timeout ?? (0n as time.Duration),
			Headers: init?.Headers ?? (null! as globalThis.Map<string, string> | null),
			CallOptions: init?.CallOptions ?? (null! as __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null),
			RetryOptions: init?.RetryOptions ?? (null! as __goscript_retry.RetryOptions | $.VarRef<__goscript_retry.RetryOptions> | null),
			ConnectTimeout: init?.ConnectTimeout ?? (0n as time.Duration),
			ConnectBaseContext: init?.ConnectBaseContext ?? (null! as context.Context | null),
			ParentContext: init?.ParentContext ?? (null! as context.Context | null),
			incomingCall: init?.incomingCall ?? (null! as __goscript_context.IncomingCall | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ContextBuilder {
		return new ContextBuilder(this, true)
	}

	public __goscriptAssign(source: ContextBuilder): void {
		const target = this._fields
		const values = source._fields
		target.TracingDisabled = values.TracingDisabled
		target.hideListeningOnOutbound = values.hideListeningOnOutbound
		target.replaceParentHeaders = values.replaceParentHeaders
		target.Timeout = values.Timeout
		target.Headers = values.Headers
		target.CallOptions = values.CallOptions
		target.RetryOptions = values.RetryOptions
		target.ConnectTimeout = values.ConnectTimeout
		target.ConnectBaseContext = $.assignFieldValue(target.ConnectBaseContext, values.ConnectBaseContext, "context.Context")
		target.ParentContext = $.assignFieldValue(target.ParentContext, values.ParentContext, "context.Context")
		target.incomingCall = $.assignFieldValue(target.incomingCall, values.incomingCall, "tchannel.IncomingCall")
	}

	public AddHeader(key: string, value: string): ContextBuilder | $.VarRef<ContextBuilder> | null {
		let cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		const cb$: ContextBuilder = cb == null ? $.pointerTarget<ContextBuilder>(cb) : (cb as any).__isVarRef === true ? (cb as any).value : (cb as any).__goValue === undefined ? (cb as any) : $.pointerTarget<ContextBuilder>(cb)
		if ((cb$ as ContextBuilder).Headers == null) {
			;(cb$ as ContextBuilder).Headers = $.makeMap<string, string>([[key, value]])
		} else {
			$.mapSet((cb$ as ContextBuilder).Headers, key, value)
		}
		return cb
	}

	public async Build(): globalThis.Promise<[__goscript_context_header.ContextWithHeaders | null, context.CancelFunc]> {
		const cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		const cb$: ContextBuilder = cb == null ? $.pointerTarget<ContextBuilder>(cb) : (cb as any).__isVarRef === true ? (cb as any).value : (cb as any).__goValue === undefined ? (cb as any) : $.pointerTarget<ContextBuilder>(cb)
		let params: __goscript_context.tchannelCtxParams | $.VarRef<__goscript_context.tchannelCtxParams> | null = new __goscript_context.tchannelCtxParams({options: (cb$ as ContextBuilder).CallOptions, call: (cb$ as ContextBuilder).incomingCall, retryOptions: (cb$ as ContextBuilder).RetryOptions, connectTimeout: (cb$ as ContextBuilder).ConnectTimeout, hideListeningOnOutbound: (cb$ as ContextBuilder).hideListeningOnOutbound, tracingDisabled: (cb$ as ContextBuilder).TracingDisabled, connectBaseContext: (cb$ as ContextBuilder).ConnectBaseContext})

		let parent = (cb$ as ContextBuilder).ParentContext
		if (parent == null) {
			parent = context.Background()
		} else {
			{
				let __goscriptTuple0: any = $.typeAssertTuple<__goscript_context_header.headerCtx>(parent, "tchannel.headerCtx")
				let __goscriptShadow0 = __goscriptTuple0[0]
				let ok = __goscriptTuple0[1]
				if (ok) {
					// Unwrap any headerCtx, since we'll be rewrapping anyway.
					parent = __goscriptShadow0.Context
				}
			}
		}

		let ctx: context.Context | null = null! as context.Context | null
		let cancel: context.CancelFunc = null! as context.CancelFunc
		// All contexts created must have a timeout, but if the parent
		// already has a timeout, and the user has not specified one, then we
		// can use context.WithCancel
		let [, parentHasDeadline] = await (parent !== null && (parent as any).__isVarRef !== true && (parent as any).__goValue === undefined ? (parent as Exclude<context2.Context, null>) : $.pointerValue<Exclude<context2.Context, null>>(parent)).Deadline()
		if (((cb$ as ContextBuilder).Timeout == 0n) && parentHasDeadline) {
			let __goscriptTuple1: any = context.WithCancel(parent)
			ctx = __goscriptTuple1[0]
			cancel = __goscriptTuple1[1]
		} else {
			let __goscriptTuple2: any = context.WithTimeout(parent, (cb$ as ContextBuilder).Timeout)
			ctx = __goscriptTuple2[0]
			cancel = __goscriptTuple2[1]
		}

		ctx = context.WithValue(ctx, $.namedValueInterfaceValue<any>(0, "tchannel.contextKey", {}, /* @__PURE__ */ $.basicType("int", "tchannel.contextKey")), $.interfaceValue(params, "*tchannel.tchannelCtxParams", /* @__PURE__ */ $.pointerType("tchannel.tchannelCtxParams")))
		return [__goscript_context_header.WrapWithHeaders(ctx, await (cb !== null && (cb as any).__isVarRef !== true && (cb as any).__goValue === undefined ? ((cb as any) as ContextBuilder).getHeaders() : ContextBuilder.prototype.getHeaders.call(cb))), cancel]
	}

	public DisableTracing(): ContextBuilder | $.VarRef<ContextBuilder> | null {
		let cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		$.pointerValue<ContextBuilder>(cb).TracingDisabled = true
		return cb
	}

	public HideListeningOnOutbound(): ContextBuilder | $.VarRef<ContextBuilder> | null {
		let cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		$.pointerValue<ContextBuilder>(cb).hideListeningOnOutbound = true
		return cb
	}

	public SetConnectBaseContext(ctx: context.Context | null): ContextBuilder | $.VarRef<ContextBuilder> | null {
		let cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		$.pointerValue<ContextBuilder>(cb).ConnectBaseContext = ctx
		return cb
	}

	public SetConnectTimeout(d: time.Duration): ContextBuilder | $.VarRef<ContextBuilder> | null {
		let cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		$.pointerValue<ContextBuilder>(cb).ConnectTimeout = d
		return cb
	}

	public SetFormat(f: __goscript_calloptions.Format): ContextBuilder | $.VarRef<ContextBuilder> | null {
		let cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		const cb$: ContextBuilder = cb == null ? $.pointerTarget<ContextBuilder>(cb) : (cb as any).__isVarRef === true ? (cb as any).value : (cb as any).__goValue === undefined ? (cb as any) : $.pointerTarget<ContextBuilder>(cb)
		if ((cb$ as ContextBuilder).CallOptions == null) {
			;(cb$ as ContextBuilder).CallOptions = new __goscript_calloptions.CallOptions()
		}
		$.pointerValue<__goscript_calloptions.CallOptions>((cb$ as ContextBuilder).CallOptions).Format = f
		return cb
	}

	public SetHeaders(headers: globalThis.Map<string, string> | null): ContextBuilder | $.VarRef<ContextBuilder> | null {
		let cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		const cb$: ContextBuilder = cb == null ? $.pointerTarget<ContextBuilder>(cb) : (cb as any).__isVarRef === true ? (cb as any).value : (cb as any).__goValue === undefined ? (cb as any) : $.pointerTarget<ContextBuilder>(cb);
		;(cb$ as ContextBuilder).Headers = headers;
		;(cb$ as ContextBuilder).replaceParentHeaders = true
		return cb
	}

	public SetIncomingCallForTest(call: __goscript_context.IncomingCall | null): ContextBuilder | $.VarRef<ContextBuilder> | null {
		const cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		return (cb !== null && (cb as any).__isVarRef !== true && (cb as any).__goValue === undefined ? ((cb as any) as ContextBuilder).setIncomingCall(call) : ContextBuilder.prototype.setIncomingCall.call(cb, call))
	}

	public SetParentContext(ctx: context.Context | null): ContextBuilder | $.VarRef<ContextBuilder> | null {
		let cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		$.pointerValue<ContextBuilder>(cb).ParentContext = ctx
		return cb
	}

	public SetRetryOptions(retryOptions: __goscript_retry.RetryOptions | $.VarRef<__goscript_retry.RetryOptions> | null): ContextBuilder | $.VarRef<ContextBuilder> | null {
		let cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		$.pointerValue<ContextBuilder>(cb).RetryOptions = retryOptions
		return cb
	}

	public SetRoutingDelegate(rd: string): ContextBuilder | $.VarRef<ContextBuilder> | null {
		let cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		const cb$: ContextBuilder = cb == null ? $.pointerTarget<ContextBuilder>(cb) : (cb as any).__isVarRef === true ? (cb as any).value : (cb as any).__goValue === undefined ? (cb as any) : $.pointerTarget<ContextBuilder>(cb)
		if ((cb$ as ContextBuilder).CallOptions == null) {
			;(cb$ as ContextBuilder).CallOptions = new __goscript_calloptions.CallOptions()
		}
		$.pointerValue<__goscript_calloptions.CallOptions>((cb$ as ContextBuilder).CallOptions).RoutingDelegate = rd
		return cb
	}

	public SetRoutingKey(rk: string): ContextBuilder | $.VarRef<ContextBuilder> | null {
		let cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		const cb$: ContextBuilder = cb == null ? $.pointerTarget<ContextBuilder>(cb) : (cb as any).__isVarRef === true ? (cb as any).value : (cb as any).__goValue === undefined ? (cb as any) : $.pointerTarget<ContextBuilder>(cb)
		if ((cb$ as ContextBuilder).CallOptions == null) {
			;(cb$ as ContextBuilder).CallOptions = new __goscript_calloptions.CallOptions()
		}
		$.pointerValue<__goscript_calloptions.CallOptions>((cb$ as ContextBuilder).CallOptions).RoutingKey = rk
		return cb
	}

	public SetShardKey(sk: string): ContextBuilder | $.VarRef<ContextBuilder> | null {
		let cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		const cb$: ContextBuilder = cb == null ? $.pointerTarget<ContextBuilder>(cb) : (cb as any).__isVarRef === true ? (cb as any).value : (cb as any).__goValue === undefined ? (cb as any) : $.pointerTarget<ContextBuilder>(cb)
		if ((cb$ as ContextBuilder).CallOptions == null) {
			;(cb$ as ContextBuilder).CallOptions = new __goscript_calloptions.CallOptions()
		}
		$.pointerValue<__goscript_calloptions.CallOptions>((cb$ as ContextBuilder).CallOptions).ShardKey = sk
		return cb
	}

	public SetTimeout(timeout: time.Duration): ContextBuilder | $.VarRef<ContextBuilder> | null {
		let cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		$.pointerValue<ContextBuilder>(cb).Timeout = timeout
		return cb
	}

	public SetTimeoutPerAttempt(timeoutPerAttempt: time.Duration): ContextBuilder | $.VarRef<ContextBuilder> | null {
		let cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		const cb$: ContextBuilder = cb == null ? $.pointerTarget<ContextBuilder>(cb) : (cb as any).__isVarRef === true ? (cb as any).value : (cb as any).__goValue === undefined ? (cb as any) : $.pointerTarget<ContextBuilder>(cb)
		if ((cb$ as ContextBuilder).RetryOptions == null) {
			;(cb$ as ContextBuilder).RetryOptions = new __goscript_retry.RetryOptions()
		}
		$.pointerValue<__goscript_retry.RetryOptions>((cb$ as ContextBuilder).RetryOptions).TimeoutPerAttempt = timeoutPerAttempt
		return cb
	}

	public async getHeaders(): globalThis.Promise<globalThis.Map<string, string> | null> {
		const cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		const cb$: ContextBuilder = cb == null ? $.pointerTarget<ContextBuilder>(cb) : (cb as any).__isVarRef === true ? (cb as any).value : (cb as any).__goValue === undefined ? (cb as any) : $.pointerTarget<ContextBuilder>(cb)
		if (((cb$ as ContextBuilder).ParentContext == null) || (cb$ as ContextBuilder).replaceParentHeaders) {
			return (cb$ as ContextBuilder).Headers
		}

		let __goscriptTuple3: any = $.typeAssertTuple<__goscript_context_header.headersContainer | $.VarRef<__goscript_context_header.headersContainer> | null>((__goscriptAwait = $.pointerValue<Exclude<context2.Context, null>>((cb$ as ContextBuilder).ParentContext).Value($.namedValueInterfaceValue<any>(1, "tchannel.contextKey", {}, /* @__PURE__ */ $.basicType("int", "tchannel.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("tchannel.headersContainer"))
		let parent: __goscript_context_header.headersContainer | $.VarRef<__goscript_context_header.headersContainer> | null = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		let parent$: __goscript_context_header.headersContainer = parent == null ? $.pointerTarget<__goscript_context_header.headersContainer>(parent) : (parent as any).__isVarRef === true ? (parent as any).value : (parent as any).__goValue === undefined ? (parent as any) : $.pointerTarget<__goscript_context_header.headersContainer>(parent)
		if (!ok || ($.len((parent$ as __goscript_context_header.headersContainer).reqHeaders) == 0)) {
			return (cb$ as ContextBuilder).Headers
		}

		let mergedHeaders: globalThis.Map<string, string> | null = $.makeMap<string, string>()
		for (let [k, v] of (parent$ as __goscript_context_header.headersContainer).reqHeaders?.entries() ?? []) {
			$.mapSet(mergedHeaders, k, v)
		}
		for (let [k, v] of (cb$ as ContextBuilder).Headers?.entries() ?? []) {
			$.mapSet(mergedHeaders, k, v)
		}
		return mergedHeaders
	}

	public setIncomingCall(call: __goscript_context.IncomingCall | null): ContextBuilder | $.VarRef<ContextBuilder> | null {
		let cb: ContextBuilder | $.VarRef<ContextBuilder> | null = this;
		$.pointerValue<ContextBuilder>(cb).incomingCall = call
		return cb
	}

	static __typeInfo = $.registerStructType(
		"tchannel.ContextBuilder",
		() => new ContextBuilder(),
		() => [$.methodSignature("AddHeader", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tchannel.ContextBuilder")], true), $.methodSignature("Build", [], ["tchannel.ContextWithHeaders", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("DisableTracing", [], [/* @__PURE__ */ $.pointerType("tchannel.ContextBuilder")], true), $.methodSignature("HideListeningOnOutbound", [], [/* @__PURE__ */ $.pointerType("tchannel.ContextBuilder")], true), $.methodSignature("SetConnectBaseContext", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("tchannel.ContextBuilder")], true), $.methodSignature("SetConnectTimeout", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("tchannel.ContextBuilder")], true), $.methodSignature("SetFormat", [["f", /* @__PURE__ */ $.basicType("string", "tchannel.Format")]], [/* @__PURE__ */ $.pointerType("tchannel.ContextBuilder")], true), $.methodSignature("SetHeaders", [["headers", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]], [/* @__PURE__ */ $.pointerType("tchannel.ContextBuilder")], true), $.methodSignature("SetIncomingCallForTest", [["call", "tchannel.IncomingCall"]], [/* @__PURE__ */ $.pointerType("tchannel.ContextBuilder")], true), $.methodSignature("SetParentContext", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("tchannel.ContextBuilder")], true), $.methodSignature("SetRetryOptions", [["retryOptions", /* @__PURE__ */ $.pointerType("tchannel.RetryOptions")]], [/* @__PURE__ */ $.pointerType("tchannel.ContextBuilder")], true), $.methodSignature("SetRoutingDelegate", [["rd", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tchannel.ContextBuilder")], true), $.methodSignature("SetRoutingKey", [["rk", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tchannel.ContextBuilder")], true), $.methodSignature("SetShardKey", [["sk", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("tchannel.ContextBuilder")], true), $.methodSignature("SetTimeout", [["timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("tchannel.ContextBuilder")], true), $.methodSignature("SetTimeoutPerAttempt", [["timeoutPerAttempt", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("tchannel.ContextBuilder")], true), $.methodSignature("getHeaders", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("setIncomingCall", [["call", "tchannel.IncomingCall"]], [/* @__PURE__ */ $.pointerType("tchannel.ContextBuilder")], true)],
		ContextBuilder,
		() => [/* @__PURE__ */ $.structField("TracingDisabled", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("hideListeningOnOutbound", /* @__PURE__ */ $.basicType("bool"), [1], 1, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("replaceParentHeaders", /* @__PURE__ */ $.basicType("bool"), [2], 2, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("Timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 8, true), /* @__PURE__ */ $.structField("Headers", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [4], 16, true), /* @__PURE__ */ $.structField("CallOptions", /* @__PURE__ */ $.pointerType("tchannel.CallOptions"), [5], 24, true), /* @__PURE__ */ $.structField("RetryOptions", /* @__PURE__ */ $.pointerType("tchannel.RetryOptions"), [6], 32, true), /* @__PURE__ */ $.structField("ConnectTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [7], 40, true), /* @__PURE__ */ $.structField("ConnectBaseContext", "context.Context", [8], 48, true), /* @__PURE__ */ $.structField("ParentContext", "context.Context", [9], 64, true), /* @__PURE__ */ $.structField("incomingCall", "tchannel.IncomingCall", [10], 80, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export function NewContextBuilder(timeout: time.Duration): ContextBuilder | $.VarRef<ContextBuilder> | null {
	return new ContextBuilder({Timeout: timeout})
}

var __goscriptAwait: any
