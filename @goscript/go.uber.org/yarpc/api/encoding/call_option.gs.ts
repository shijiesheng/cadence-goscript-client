// Generated file based on call_option.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import type * as context from "@goscript/context/index.js"

import type * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as __goscript_call from "./call.gs.ts"

import type * as __goscript_outbound_call from "./outbound_call.gs.ts"
import "./call.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/encoding", ["encoding.CallOption", "encoding.callOption", "encoding.responseHeadersOptions", "encoding.headerOption", "encoding.shardKeyOption", "encoding.routingKeyOption", "encoding.routingDelegateOption"])

export type callOption = {
	apply(_p0: __goscript_outbound_call.OutboundCall | $.VarRef<__goscript_outbound_call.OutboundCall> | null): void
}

$.registerInterfaceType(
	"encoding.callOption",
	null,
	[$.methodSignature("apply", [/* @__PURE__ */ $.pointerType("encoding.OutboundCall")])]
);

export type responseHeadersOptions = globalThis.Map<string, string> | null

$.registerNamedType("encoding.responseHeadersOptions", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")));

$.registerNamedValueType(
	"*encoding.responseHeadersOptions",
	{apply: (receiver: any, ...args: any[]) => (responseHeadersOptions_apply as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [["call", /* @__PURE__ */ $.pointerType("encoding.OutboundCall")]])]
);

export type shardKeyOption = string

$.registerNamedValueType(
	"encoding.shardKeyOption",
	{apply: (receiver: any, ...args: any[]) => (shardKeyOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [["call", /* @__PURE__ */ $.pointerType("encoding.OutboundCall")]])]
);

$.registerNamedValueType(
	"*encoding.shardKeyOption",
	{apply: (receiver: any, ...args: any[]) => (shardKeyOption_apply as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [["call", /* @__PURE__ */ $.pointerType("encoding.OutboundCall")]])]
);

export type routingKeyOption = string

$.registerNamedValueType(
	"encoding.routingKeyOption",
	{apply: (receiver: any, ...args: any[]) => (routingKeyOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [["call", /* @__PURE__ */ $.pointerType("encoding.OutboundCall")]])]
);

$.registerNamedValueType(
	"*encoding.routingKeyOption",
	{apply: (receiver: any, ...args: any[]) => (routingKeyOption_apply as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [["call", /* @__PURE__ */ $.pointerType("encoding.OutboundCall")]])]
);

export type routingDelegateOption = string

$.registerNamedValueType(
	"encoding.routingDelegateOption",
	{apply: (receiver: any, ...args: any[]) => (routingDelegateOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [["call", /* @__PURE__ */ $.pointerType("encoding.OutboundCall")]])]
);

$.registerNamedValueType(
	"*encoding.routingDelegateOption",
	{apply: (receiver: any, ...args: any[]) => (routingDelegateOption_apply as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [["call", /* @__PURE__ */ $.pointerType("encoding.OutboundCall")]])]
);

export class CallOption {
	public get opt(): callOption | null {
		return this._fields.opt
	}

	public set opt(value: callOption | null) {
		this._fields.opt = value
	}

	public _fields: {
		opt: callOption | null
	}

	constructor(init?: Partial<{opt?: callOption | null}>, __goscriptValue?: boolean) {
		this._fields = {
			opt: init?.opt ?? (null! as callOption | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CallOption {
		return new CallOption(this, true)
	}

	public __goscriptAssign(source: CallOption): void {
		const target = this._fields
		const values = source._fields
		target.opt = $.assignFieldValue(target.opt, values.opt, "encoding.callOption")
	}

	static __typeInfo = $.registerStructType(
		"encoding.CallOption",
		() => new CallOption(),
		() => [],
		CallOption,
		() => [/* @__PURE__ */ $.structField("opt", "encoding.callOption", [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/encoding" })]
	)
}

export class headerOption {
	public get k(): string {
		return this._fields.k
	}

	public set k(value: string) {
		this._fields.k = value
	}

	public get v(): string {
		return this._fields.v
	}

	public set v(value: string) {
		this._fields.v = value
	}

	public _fields: {
		k: string
		v: string
	}

	constructor(init?: Partial<{k?: string, v?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			k: init?.k ?? ("" as string),
			v: init?.v ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): headerOption {
		return new headerOption(this, true)
	}

	public __goscriptAssign(source: headerOption): void {
		const target = this._fields
		const values = source._fields
		target.k = values.k
		target.v = values.v
	}

	public apply(call: __goscript_outbound_call.OutboundCall | $.VarRef<__goscript_outbound_call.OutboundCall> | null): void {
		const r = this;
		const call$: __goscript_outbound_call.OutboundCall = call == null ? $.pointerTarget<__goscript_outbound_call.OutboundCall>(call) : (call as any).__isVarRef === true ? (call as any).value : (call as any).__goValue === undefined ? (call as any) : $.pointerTarget<__goscript_outbound_call.OutboundCall>(call);
		;(call$ as __goscript_outbound_call.OutboundCall).headers = $.appendOne((call$ as __goscript_outbound_call.OutboundCall).headers, ((() => { const __goscriptConvert0 = r; return $.markAsStructValue(new __goscript_call.keyValuePair({k: __goscriptConvert0.k, v: __goscriptConvert0.v})) })()).clone())
	}

	static __typeInfo = $.registerStructType(
		"encoding.headerOption",
		() => new headerOption(),
		() => [$.methodSignature("apply", [["call", /* @__PURE__ */ $.pointerType("encoding.OutboundCall")]])],
		headerOption,
		() => [/* @__PURE__ */ $.structField("k", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/encoding" }), /* @__PURE__ */ $.structField("v", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/yarpc/api/encoding" })]
	)
}

export const RoutingDelegateCrosszoneHeaderKey: string = "crosszone"

export const RoutingDelegateCrossregionHeaderKey: string = "crossregion"

export const RoutingZoneGRPCHeaderKey: string = "x-uber-rpc-routing-zone"

export const RoutingRegionGRPCHeaderKey: string = "x-uber-rpc-routing-region"

export function responseHeadersOptions_apply(r: $.VarRef<responseHeadersOptions> | null, call: __goscript_outbound_call.OutboundCall | $.VarRef<__goscript_outbound_call.OutboundCall> | null): void {
	$.pointerValue<__goscript_outbound_call.OutboundCall>(call).responseHeaders = r
}

export function ResponseHeaders(h: $.VarRef<globalThis.Map<string, string> | null> | null): CallOption {
	return new CallOption({opt: $.namedValueInterfaceValue<callOption | null>(h, "*encoding.responseHeadersOptions", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())}, true)
}

export function WithHeader(k: string, v: string): CallOption {
	return new CallOption({opt: $.interfaceValue<callOption | null>(((() => { const __goscriptConvert1 = new __goscript_call.keyValuePair({k: k, v: v}, true); return $.markAsStructValue(new headerOption({k: __goscriptConvert1.k, v: __goscriptConvert1.v})) })()).clone(), "encoding.headerOption", "encoding.headerOption")}, true)
}

export function shardKeyOption_apply(r: shardKeyOption, call: __goscript_outbound_call.OutboundCall | $.VarRef<__goscript_outbound_call.OutboundCall> | null): void {
	let x = $.varRef(r)
	$.pointerValue<__goscript_outbound_call.OutboundCall>(call).shardKey = x
}

export function WithShardKey(sk: string): CallOption {
	return new CallOption({opt: $.namedValueInterfaceValue<callOption | null>(sk, "encoding.shardKeyOption", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())}, true)
}

export function routingKeyOption_apply(r: routingKeyOption, call: __goscript_outbound_call.OutboundCall | $.VarRef<__goscript_outbound_call.OutboundCall> | null): void {
	let x = $.varRef(r)
	$.pointerValue<__goscript_outbound_call.OutboundCall>(call).routingKey = x
}

export function WithRoutingKey(rk: string): CallOption {
	return new CallOption({opt: $.namedValueInterfaceValue<callOption | null>(rk, "encoding.routingKeyOption", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic2())}, true)
}

export function routingDelegateOption_apply(r: routingDelegateOption, call: __goscript_outbound_call.OutboundCall | $.VarRef<__goscript_outbound_call.OutboundCall> | null): void {
	let x = $.varRef(r)
	$.pointerValue<__goscript_outbound_call.OutboundCall>(call).routingDelegate = x
}

export function WithRoutingDelegate(rd: string): CallOption {
	return new CallOption({opt: $.namedValueInterfaceValue<callOption | null>(rd, "encoding.routingDelegateOption", __goscriptStatic7(), __goscriptStatic8(), __goscriptStatic2())}, true)
}

export function WithCrossZoneRoutingGRPC(routingZone: string): CallOption {
	return WithHeader("x-uber-rpc-routing-zone", routingZone)
}

export function WithCrossRegionRoutingGRPC(routingRegion: string): CallOption {
	return WithHeader("x-uber-rpc-routing-region", routingRegion)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({apply: (receiver: any, ...args: any[]) => (responseHeadersOptions_apply as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.pointerType("encoding.responseHeadersOptions"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("apply", [["call", /* @__PURE__ */ $.pointerType("encoding.OutboundCall")]])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({apply: (receiver: any, ...args: any[]) => (shardKeyOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("string", "encoding.shardKeyOption"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({apply: (receiver: any, ...args: any[]) => (routingKeyOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= (/* @__PURE__ */ $.basicType("string", "encoding.routingKeyOption"))
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ({apply: (receiver: any, ...args: any[]) => (routingDelegateOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= (/* @__PURE__ */ $.basicType("string", "encoding.routingDelegateOption"))
}
