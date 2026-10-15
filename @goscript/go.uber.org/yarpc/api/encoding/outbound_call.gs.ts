// Generated file based on outbound_call.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as __goscript_call from "./call.gs.ts"

import * as __goscript_call_option from "./call_option.gs.ts"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "./call.gs.ts"
import "./call_option.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/encoding", ["encoding.OutboundCall"])

export class OutboundCall {
	// request attributes to fill if non-nil
	public get headers(): $.Slice<__goscript_call.keyValuePair> {
		return this._fields.headers
	}

	public set headers(value: $.Slice<__goscript_call.keyValuePair>) {
		this._fields.headers = value
	}

	public get shardKey(): $.VarRef<string> | null {
		return this._fields.shardKey
	}

	public set shardKey(value: $.VarRef<string> | null) {
		this._fields.shardKey = value
	}

	public get routingKey(): $.VarRef<string> | null {
		return this._fields.routingKey
	}

	public set routingKey(value: $.VarRef<string> | null) {
		this._fields.routingKey = value
	}

	public get routingDelegate(): $.VarRef<string> | null {
		return this._fields.routingDelegate
	}

	public set routingDelegate(value: $.VarRef<string> | null) {
		this._fields.routingDelegate = value
	}

	// If non-nil, response headers should be written here.
	public get responseHeaders(): $.VarRef<globalThis.Map<string, string> | null> | null {
		return this._fields.responseHeaders
	}

	public set responseHeaders(value: $.VarRef<globalThis.Map<string, string> | null> | null) {
		this._fields.responseHeaders = value
	}

	public _fields: {
		headers: $.Slice<__goscript_call.keyValuePair>
		shardKey: $.VarRef<string> | null
		routingKey: $.VarRef<string> | null
		routingDelegate: $.VarRef<string> | null
		responseHeaders: $.VarRef<globalThis.Map<string, string> | null> | null
	}

	constructor(init?: Partial<{headers?: $.Slice<__goscript_call.keyValuePair>, shardKey?: $.VarRef<string> | null, routingKey?: $.VarRef<string> | null, routingDelegate?: $.VarRef<string> | null, responseHeaders?: $.VarRef<globalThis.Map<string, string> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			headers: init?.headers ?? (null! as $.Slice<__goscript_call.keyValuePair>),
			shardKey: init?.shardKey ?? (null! as $.VarRef<string> | null),
			routingKey: init?.routingKey ?? (null! as $.VarRef<string> | null),
			routingDelegate: init?.routingDelegate ?? (null! as $.VarRef<string> | null),
			responseHeaders: init?.responseHeaders ?? (null! as $.VarRef<globalThis.Map<string, string> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OutboundCall {
		return new OutboundCall(this, true)
	}

	public __goscriptAssign(source: OutboundCall): void {
		const target = this._fields
		const values = source._fields
		target.headers = values.headers
		target.shardKey = values.shardKey
		target.routingKey = values.routingKey
		target.routingDelegate = values.routingDelegate
		target.responseHeaders = values.responseHeaders
	}

	public ReadFromResponse(ctx: context.Context | null, res: transport.Response | $.VarRef<transport.Response> | null): [context.Context | null, $.GoError] {
		let c: OutboundCall | $.VarRef<OutboundCall> | null = this;
		const c$: OutboundCall = c == null ? $.pointerTarget<OutboundCall>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<OutboundCall>(c)
		const res$: transport.Response = res == null ? $.pointerTarget<transport.Response>(res) : (res as any).__isVarRef === true ? (res as any).value : (res as any).__goValue === undefined ? (res as any) : $.pointerTarget<transport.Response>(res)
		// We're not using ctx right now but we may in the future.
		if (((c$ as OutboundCall).responseHeaders != null) && ((res$ as transport.Response).Headers.Len() > 0)) {
			// We make a copy of the response headers because Headers.Items() must
			// never be mutated.
			let headers: globalThis.Map<string, string> | null = $.makeMap<string, string>()
			for (let [k, v] of (res$ as transport.Response).Headers.Items()?.entries() ?? []) {
				$.mapSet(headers, k, v)
			}
			;(c$ as OutboundCall).responseHeaders!.value = headers
		}

		// NB(abg): context and error are unused for now but we want to leave room
		// for CallOptions which can fail or modify the context.
		return [ctx, null]
	}

	public WriteToRequest(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null): [context.Context | null, $.GoError] {
		const c: OutboundCall | $.VarRef<OutboundCall> | null = this;
		const c$: OutboundCall = c == null ? $.pointerTarget<OutboundCall>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<OutboundCall>(c)
		const req$: transport.Request = req == null ? $.pointerTarget<transport.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<transport.Request>(req)
		for (let __goscriptRangeTarget0 = (c$ as OutboundCall).headers, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let h = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_call.keyValuePair)).clone()
			$.assignStruct((req$ as transport.Request).Headers, $.markAsStructValue($.cloneStructValue((req$ as transport.Request).Headers)).With(h.k, h.v))
		}

		if ((c$ as OutboundCall).shardKey != null) {
			;(req$ as transport.Request).ShardKey = $.pointerValue<string>((c$ as OutboundCall).shardKey)
		}
		if ((c$ as OutboundCall).routingKey != null) {
			;(req$ as transport.Request).RoutingKey = $.pointerValue<string>((c$ as OutboundCall).routingKey)
		}
		if ((c$ as OutboundCall).routingDelegate != null) {
			;(req$ as transport.Request).RoutingDelegate = $.pointerValue<string>((c$ as OutboundCall).routingDelegate)
		}

		// NB(abg): context and error are unused for now but we want to leave room
		// for CallOptions which can fail or modify the context.
		return [ctx, null]
	}

	public WriteToRequestMeta(ctx: context.Context | null, reqMeta: transport.RequestMeta | $.VarRef<transport.RequestMeta> | null): [context.Context | null, $.GoError] {
		const c: OutboundCall | $.VarRef<OutboundCall> | null = this;
		const c$: OutboundCall = c == null ? $.pointerTarget<OutboundCall>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<OutboundCall>(c)
		const reqMeta$: transport.RequestMeta = reqMeta == null ? $.pointerTarget<transport.RequestMeta>(reqMeta) : (reqMeta as any).__isVarRef === true ? (reqMeta as any).value : (reqMeta as any).__goValue === undefined ? (reqMeta as any) : $.pointerTarget<transport.RequestMeta>(reqMeta)
		for (let __goscriptRangeTarget1 = (c$ as OutboundCall).headers, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let h = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_call.keyValuePair)).clone()
			$.assignStruct((reqMeta$ as transport.RequestMeta).Headers, $.markAsStructValue($.cloneStructValue((reqMeta$ as transport.RequestMeta).Headers)).With(h.k, h.v))
		}

		if ((c$ as OutboundCall).shardKey != null) {
			;(reqMeta$ as transport.RequestMeta).ShardKey = $.pointerValue<string>((c$ as OutboundCall).shardKey)
		}
		if ((c$ as OutboundCall).routingKey != null) {
			;(reqMeta$ as transport.RequestMeta).RoutingKey = $.pointerValue<string>((c$ as OutboundCall).routingKey)
		}
		if ((c$ as OutboundCall).routingDelegate != null) {
			;(reqMeta$ as transport.RequestMeta).RoutingDelegate = $.pointerValue<string>((c$ as OutboundCall).routingDelegate)
		}

		// NB(abg): context and error are unused for now but we want to leave room
		// for CallOptions which can fail or modify the context.
		return [ctx, null]
	}

	static __typeInfo = $.registerStructType(
		"encoding.OutboundCall",
		() => new OutboundCall(),
		() => [$.methodSignature("ReadFromResponse", [["ctx", "context.Context"], ["res", /* @__PURE__ */ $.pointerType("transport.Response")]], ["context.Context", "error"], true), $.methodSignature("WriteToRequest", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")]], ["context.Context", "error"], true), $.methodSignature("WriteToRequestMeta", [["ctx", "context.Context"], ["reqMeta", /* @__PURE__ */ $.pointerType("transport.RequestMeta")]], ["context.Context", "error"], true)],
		OutboundCall,
		() => [/* @__PURE__ */ $.structField("headers", /* @__PURE__ */ $.sliceType("encoding.keyValuePair"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/encoding" }), /* @__PURE__ */ $.structField("shardKey", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [1], 24, false, { pkgPath: "go.uber.org/yarpc/api/encoding" }), /* @__PURE__ */ $.structField("routingKey", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [2], 32, false, { pkgPath: "go.uber.org/yarpc/api/encoding" }), /* @__PURE__ */ $.structField("routingDelegate", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [3], 40, false, { pkgPath: "go.uber.org/yarpc/api/encoding" }), /* @__PURE__ */ $.structField("responseHeaders", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))), [4], 48, false, { pkgPath: "go.uber.org/yarpc/api/encoding" })]
	)
}

export function NewOutboundCall(options: $.Slice<__goscript_call_option.CallOption>): OutboundCall | $.VarRef<OutboundCall> | null {
	let call: $.VarRef<OutboundCall> = $.varRef(new OutboundCall(undefined, true))
	for (let __goscriptRangeTarget2 = options, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let opt = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_call_option.CallOption)).clone()
		$.pointerValue<Exclude<__goscript_call_option.callOption, null>>(opt.opt).apply(call)
	}
	return call
}

export function NewStreamOutboundCall(options: $.Slice<__goscript_call_option.CallOption>): [OutboundCall | $.VarRef<OutboundCall> | null, $.GoError] {
	let call: OutboundCall | $.VarRef<OutboundCall> | null = NewOutboundCall(options)
	if ($.pointerValue<OutboundCall>(call).responseHeaders != null) {
		return [null, yarpcerrors.InvalidArgumentErrorf("response headers are not supported for streams", null)]
	}
	return [call, null]
}
