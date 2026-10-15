// Generated file based on validator_outbound.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as introspection from "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/internal/request", ["request.UnaryValidatorOutbound", "request.OnewayValidatorOutbound", "request.StreamValidatorOutbound"])

export class UnaryValidatorOutbound {
	public get UnaryOutbound(): transport.UnaryOutbound | null {
		return this._fields.UnaryOutbound
	}

	public set UnaryOutbound(value: transport.UnaryOutbound | null) {
		this._fields.UnaryOutbound = value
	}

	public get Namer(): transport.Namer | null {
		return this._fields.Namer
	}

	public set Namer(value: transport.Namer | null) {
		this._fields.Namer = value
	}

	public _fields: {
		UnaryOutbound: transport.UnaryOutbound | null
		Namer: transport.Namer | null
	}

	constructor(init?: Partial<{UnaryOutbound?: transport.UnaryOutbound | null, Namer?: transport.Namer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			UnaryOutbound: init?.UnaryOutbound ?? (null! as transport.UnaryOutbound | null),
			Namer: init?.Namer ?? (null! as transport.Namer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UnaryValidatorOutbound {
		return new UnaryValidatorOutbound(this, true)
	}

	public __goscriptAssign(source: UnaryValidatorOutbound): void {
		const target = this._fields
		const values = source._fields
		target.UnaryOutbound = $.assignFieldValue(target.UnaryOutbound, values.UnaryOutbound, "transport.UnaryOutbound")
		target.Namer = $.assignFieldValue(target.Namer, values.Namer, "transport.Namer")
	}

	public async Call(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]> {
		const o = this;
		{
			let err = transport.ValidateRequest(request)
			if (err != null) {
				return [null, err]
			}
		}

		{
			let err = await transport.ValidateRequestContext(ctx)
			if (err != null) {
				return [null, err]
			}
		}

		return $.pointerValue<Exclude<transport.UnaryOutbound, null>>(o.UnaryOutbound).Call(ctx, request)
	}

	public async Introspect(): globalThis.Promise<introspection.OutboundStatus> {
		const o = this;
		let __goscriptShadow0 = o
		{
			let __goscriptTuple0: any = $.typeAssertTuple<introspection.IntrospectableOutbound | null>(__goscriptShadow0.UnaryOutbound, "introspection.IntrospectableOutbound")
			let __goscriptShadow1 = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				return (((__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<introspection.IntrospectableOutbound, null>) : $.pointerValue<Exclude<introspection.IntrospectableOutbound, null>>(__goscriptShadow1)).Introspect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as introspection.OutboundStatus)).clone()
			}
		}
		return ($.pointerValue<introspection.OutboundStatus>(introspection.__goscript_get_OutboundStatusNotSupported())).clone()
	}

	public async IsRunning(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.UnaryOutbound | null, null>>(this.UnaryOutbound).IsRunning()
	}

	public async Start(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.UnaryOutbound | null, null>>(this.UnaryOutbound).Start()
	}

	public async Stop(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.UnaryOutbound | null, null>>(this.UnaryOutbound).Stop()
	}

	public async Transports(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.UnaryOutbound | null, null>>(this.UnaryOutbound).Transports()
	}

	public async TransportName(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.Namer | null, null>>(this.Namer).TransportName()
	}

	static __typeInfo = $.registerStructType(
		"request.UnaryValidatorOutbound",
		() => new UnaryValidatorOutbound(),
		() => [$.methodSignature("Call", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")]], [/* @__PURE__ */ $.pointerType("transport.Response"), "error"]), $.methodSignature("Introspect", [], ["introspection.OutboundStatus"]), $.methodSignature("IsRunning", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Start", [], ["error"]), $.methodSignature("Stop", [], ["error"]), $.methodSignature("Transports", [], [/* @__PURE__ */ $.sliceType("transport.Transport")]), $.methodSignature("TransportName", [], [/* @__PURE__ */ $.basicType("string")])],
		UnaryValidatorOutbound,
		() => [/* @__PURE__ */ $.structField("UnaryOutbound", "transport.UnaryOutbound", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Namer", "transport.Namer", [1], 16, true, { anonymous: true })]
	)
}

export class OnewayValidatorOutbound {
	public get OnewayOutbound(): transport.OnewayOutbound | null {
		return this._fields.OnewayOutbound
	}

	public set OnewayOutbound(value: transport.OnewayOutbound | null) {
		this._fields.OnewayOutbound = value
	}

	public get Namer(): transport.Namer | null {
		return this._fields.Namer
	}

	public set Namer(value: transport.Namer | null) {
		this._fields.Namer = value
	}

	public _fields: {
		OnewayOutbound: transport.OnewayOutbound | null
		Namer: transport.Namer | null
	}

	constructor(init?: Partial<{OnewayOutbound?: transport.OnewayOutbound | null, Namer?: transport.Namer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			OnewayOutbound: init?.OnewayOutbound ?? (null! as transport.OnewayOutbound | null),
			Namer: init?.Namer ?? (null! as transport.Namer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OnewayValidatorOutbound {
		return new OnewayValidatorOutbound(this, true)
	}

	public __goscriptAssign(source: OnewayValidatorOutbound): void {
		const target = this._fields
		const values = source._fields
		target.OnewayOutbound = $.assignFieldValue(target.OnewayOutbound, values.OnewayOutbound, "transport.OnewayOutbound")
		target.Namer = $.assignFieldValue(target.Namer, values.Namer, "transport.Namer")
	}

	public async CallOneway(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<[transport.Ack | null, $.GoError]> {
		const o = this;
		{
			let err = transport.ValidateRequest(request)
			if (err != null) {
				return [null, err]
			}
		}

		{
			let err = await transport.ValidateRequestContext(ctx)
			if (err != null) {
				return [null, err]
			}
		}

		return $.pointerValue<Exclude<transport.OnewayOutbound, null>>(o.OnewayOutbound).CallOneway(ctx, request)
	}

	public async Introspect(): globalThis.Promise<introspection.OutboundStatus> {
		const o = this;
		let __goscriptShadow2 = o
		{
			let __goscriptTuple1: any = $.typeAssertTuple<introspection.IntrospectableOutbound | null>(__goscriptShadow2.OnewayOutbound, "introspection.IntrospectableOutbound")
			let __goscriptShadow3 = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				return (((__goscriptAwait = (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? (__goscriptShadow3 as Exclude<introspection.IntrospectableOutbound, null>) : $.pointerValue<Exclude<introspection.IntrospectableOutbound, null>>(__goscriptShadow3)).Introspect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as introspection.OutboundStatus)).clone()
			}
		}
		return ($.pointerValue<introspection.OutboundStatus>(introspection.__goscript_get_OutboundStatusNotSupported())).clone()
	}

	public async IsRunning(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.OnewayOutbound | null, null>>(this.OnewayOutbound).IsRunning()
	}

	public async Start(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.OnewayOutbound | null, null>>(this.OnewayOutbound).Start()
	}

	public async Stop(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.OnewayOutbound | null, null>>(this.OnewayOutbound).Stop()
	}

	public async Transports(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.OnewayOutbound | null, null>>(this.OnewayOutbound).Transports()
	}

	public async TransportName(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.Namer | null, null>>(this.Namer).TransportName()
	}

	static __typeInfo = $.registerStructType(
		"request.OnewayValidatorOutbound",
		() => new OnewayValidatorOutbound(),
		() => [$.methodSignature("CallOneway", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")]], ["transport.Ack", "error"]), $.methodSignature("Introspect", [], ["introspection.OutboundStatus"]), $.methodSignature("IsRunning", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Start", [], ["error"]), $.methodSignature("Stop", [], ["error"]), $.methodSignature("Transports", [], [/* @__PURE__ */ $.sliceType("transport.Transport")]), $.methodSignature("TransportName", [], [/* @__PURE__ */ $.basicType("string")])],
		OnewayValidatorOutbound,
		() => [/* @__PURE__ */ $.structField("OnewayOutbound", "transport.OnewayOutbound", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Namer", "transport.Namer", [1], 16, true, { anonymous: true })]
	)
}

export class StreamValidatorOutbound {
	public get Namer(): transport.Namer | null {
		return this._fields.Namer
	}

	public set Namer(value: transport.Namer | null) {
		this._fields.Namer = value
	}

	public get StreamOutbound(): transport.StreamOutbound | null {
		return this._fields.StreamOutbound
	}

	public set StreamOutbound(value: transport.StreamOutbound | null) {
		this._fields.StreamOutbound = value
	}

	public _fields: {
		Namer: transport.Namer | null
		StreamOutbound: transport.StreamOutbound | null
	}

	constructor(init?: Partial<{Namer?: transport.Namer | null, StreamOutbound?: transport.StreamOutbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Namer: init?.Namer ?? (null! as transport.Namer | null),
			StreamOutbound: init?.StreamOutbound ?? (null! as transport.StreamOutbound | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StreamValidatorOutbound {
		return new StreamValidatorOutbound(this, true)
	}

	public __goscriptAssign(source: StreamValidatorOutbound): void {
		const target = this._fields
		const values = source._fields
		target.Namer = $.assignFieldValue(target.Namer, values.Namer, "transport.Namer")
		target.StreamOutbound = $.assignFieldValue(target.StreamOutbound, values.StreamOutbound, "transport.StreamOutbound")
	}

	public async CallStream(ctx: context.Context | null, request: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null): globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]> {
		const o = this;
		{
			let err = transport.ValidateRequest(transport.RequestMeta.prototype.ToRequest.call($.pointerValue<transport.StreamRequest>(request).Meta))
			if (err != null) {
				return [null, err]
			}
		}

		return $.pointerValue<Exclude<transport.StreamOutbound, null>>(o.StreamOutbound).CallStream(ctx, request)
	}

	public async Introspect(): globalThis.Promise<introspection.OutboundStatus> {
		const o = this;
		let __goscriptShadow4 = o
		{
			let __goscriptTuple2: any = $.typeAssertTuple<introspection.IntrospectableOutbound | null>(__goscriptShadow4.StreamOutbound, "introspection.IntrospectableOutbound")
			let __goscriptShadow5 = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (ok) {
				return (((__goscriptAwait = (__goscriptShadow5 !== null && (__goscriptShadow5 as any).__isVarRef !== true && (__goscriptShadow5 as any).__goValue === undefined ? (__goscriptShadow5 as Exclude<introspection.IntrospectableOutbound, null>) : $.pointerValue<Exclude<introspection.IntrospectableOutbound, null>>(__goscriptShadow5)).Introspect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as introspection.OutboundStatus)).clone()
			}
		}
		return ($.pointerValue<introspection.OutboundStatus>(introspection.__goscript_get_OutboundStatusNotSupported())).clone()
	}

	public async TransportName(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.Namer | null, null>>(this.Namer).TransportName()
	}

	public async IsRunning(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.StreamOutbound | null, null>>(this.StreamOutbound).IsRunning()
	}

	public async Start(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.StreamOutbound | null, null>>(this.StreamOutbound).Start()
	}

	public async Stop(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.StreamOutbound | null, null>>(this.StreamOutbound).Stop()
	}

	public async Transports(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.StreamOutbound | null, null>>(this.StreamOutbound).Transports()
	}

	static __typeInfo = $.registerStructType(
		"request.StreamValidatorOutbound",
		() => new StreamValidatorOutbound(),
		() => [$.methodSignature("CallStream", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.StreamRequest")]], [/* @__PURE__ */ $.pointerType("transport.ClientStream"), "error"]), $.methodSignature("Introspect", [], ["introspection.OutboundStatus"]), $.methodSignature("TransportName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsRunning", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Start", [], ["error"]), $.methodSignature("Stop", [], ["error"]), $.methodSignature("Transports", [], [/* @__PURE__ */ $.sliceType("transport.Transport")])],
		StreamValidatorOutbound,
		() => [/* @__PURE__ */ $.structField("Namer", "transport.Namer", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("StreamOutbound", "transport.StreamOutbound", [1], 16, true, { anonymous: true })]
	)
}

var __goscriptAwait: any
