// Generated file based on calloptions.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_messages from "./messages.gs.ts"

import * as __goscript_retry from "./retry.gs.ts"

import * as __goscript_retryon_string from "./retryon_string.gs.ts"
import "@goscript/time/index.js"
import "./messages.gs.ts"
import "./retry.gs.ts"
import "./retryon_string.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.Format", "tchannel.CallOptions"])

export type Format = string

$.registerNamedValueType(
	"tchannel.Format",
	{String: (receiver: any, ...args: any[]) => (Format_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tchannel.Format",
	{String: (receiver: any, ...args: any[]) => (Format_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class CallOptions {
	// Format is arg scheme used for this call, sent in the "as" header.
	// This header is only set if the Format is set.
	public get Format(): Format {
		return this._fields.Format
	}

	public set Format(value: Format) {
		this._fields.Format = value
	}

	// ShardKey determines where this call request belongs, used with ringpop applications.
	public get ShardKey(): string {
		return this._fields.ShardKey
	}

	public set ShardKey(value: string) {
		this._fields.ShardKey = value
	}

	// RequestState stores request state across retry attempts.
	public get RequestState(): __goscript_retry.RequestState | $.VarRef<__goscript_retry.RequestState> | null {
		return this._fields.RequestState
	}

	public set RequestState(value: __goscript_retry.RequestState | $.VarRef<__goscript_retry.RequestState> | null) {
		this._fields.RequestState = value
	}

	// RoutingKey identifies the destined traffic group. Relays may favor the
	// routing key over the service name to route the request to a specialized
	// traffic group.
	public get RoutingKey(): string {
		return this._fields.RoutingKey
	}

	public set RoutingKey(value: string) {
		this._fields.RoutingKey = value
	}

	// RoutingDelegate identifies a traffic group capable of routing a request
	// to an instance of the intended service.
	public get RoutingDelegate(): string {
		return this._fields.RoutingDelegate
	}

	public set RoutingDelegate(value: string) {
		this._fields.RoutingDelegate = value
	}

	// CallerName defaults to the channel's service name for an outbound call.
	// Optionally override this field to support transparent proxying when inbound
	// caller names vary across calls.
	public get CallerName(): string {
		return this._fields.CallerName
	}

	public set CallerName(value: string) {
		this._fields.CallerName = value
	}

	public _fields: {
		Format: Format
		ShardKey: string
		RequestState: __goscript_retry.RequestState | $.VarRef<__goscript_retry.RequestState> | null
		RoutingKey: string
		RoutingDelegate: string
		CallerName: string
	}

	constructor(init?: Partial<{Format?: Format, ShardKey?: string, RequestState?: __goscript_retry.RequestState | $.VarRef<__goscript_retry.RequestState> | null, RoutingKey?: string, RoutingDelegate?: string, CallerName?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Format: init?.Format ?? ("" as Format),
			ShardKey: init?.ShardKey ?? ("" as string),
			RequestState: init?.RequestState ?? (null! as __goscript_retry.RequestState | $.VarRef<__goscript_retry.RequestState> | null),
			RoutingKey: init?.RoutingKey ?? ("" as string),
			RoutingDelegate: init?.RoutingDelegate ?? ("" as string),
			CallerName: init?.CallerName ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CallOptions {
		return new CallOptions(this, true)
	}

	public __goscriptAssign(source: CallOptions): void {
		const target = this._fields
		const values = source._fields
		target.Format = values.Format
		target.ShardKey = values.ShardKey
		target.RequestState = values.RequestState
		target.RoutingKey = values.RoutingKey
		target.RoutingDelegate = values.RoutingDelegate
		target.CallerName = values.CallerName
	}

	public overrideHeaders(headers: __goscript_messages.transportHeaders): void {
		const c: CallOptions | $.VarRef<CallOptions> | null = this;
		const c$: CallOptions = c == null ? $.pointerTarget<CallOptions>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CallOptions>(c)
		if (!$.stringEqual((c$ as CallOptions).Format, "")) {
			$.mapSet(headers, "as", Format_String((c$ as CallOptions).Format))
		}
		if (!$.stringEqual((c$ as CallOptions).ShardKey, "")) {
			$.mapSet(headers, "sk", (c$ as CallOptions).ShardKey)
		}
		if (!$.stringEqual((c$ as CallOptions).RoutingKey, "")) {
			$.mapSet(headers, "rk", (c$ as CallOptions).RoutingKey)
		}
		if (!$.stringEqual((c$ as CallOptions).RoutingDelegate, "")) {
			$.mapSet(headers, "rd", (c$ as CallOptions).RoutingDelegate)
		}
		if (!$.stringEqual((c$ as CallOptions).CallerName, "")) {
			$.mapSet(headers, "cn", (c$ as CallOptions).CallerName)
		}
	}

	public setHeaders(headers: __goscript_messages.transportHeaders): void {
		const c: CallOptions | $.VarRef<CallOptions> | null = this;
		$.mapSet(headers, "as", Format_String("raw"))
		void (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as CallOptions).overrideHeaders(headers) : CallOptions.prototype.overrideHeaders.call(c, headers))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.CallOptions",
		() => new CallOptions(),
		() => [$.methodSignature("overrideHeaders", [["headers", "tchannel.transportHeaders"]], [], true), $.methodSignature("setHeaders", [["headers", "tchannel.transportHeaders"]], [], true)],
		CallOptions,
		() => [/* @__PURE__ */ $.structField("Format", /* @__PURE__ */ $.basicType("string", "tchannel.Format"), [0], 0, true), /* @__PURE__ */ $.structField("ShardKey", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("RequestState", /* @__PURE__ */ $.pointerType("tchannel.RequestState"), [2], 32, true), /* @__PURE__ */ $.structField("RoutingKey", /* @__PURE__ */ $.basicType("string"), [3], 40, true), /* @__PURE__ */ $.structField("RoutingDelegate", /* @__PURE__ */ $.basicType("string"), [4], 56, true), /* @__PURE__ */ $.structField("CallerName", /* @__PURE__ */ $.basicType("string"), [5], 72, true)]
	)
}

export const HTTP: Format = "http"

export const JSON: Format = "json"

export const Raw: Format = "raw"

export const Thrift: Format = "thrift"

export function Format_String(f: Format): string {
	return f
}

export let defaultCallOptions: CallOptions | $.VarRef<CallOptions> | null = new CallOptions()

export function __goscript_set_defaultCallOptions(__goscriptValue: CallOptions | $.VarRef<CallOptions> | null): void {
	defaultCallOptions = __goscriptValue
}

export function setResponseHeaders(reqHeaders: __goscript_messages.transportHeaders, respHeaders: __goscript_messages.transportHeaders): void {
	$.mapSet(respHeaders, "as", $.mapGet<__goscript_messages.TransportHeaderName, string, string>(reqHeaders, "as", "")[0])
}
