// Generated file based on chain.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as middleware from "@goscript/go.uber.org/yarpc/api/middleware/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as introspection from "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/middleware/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/internal/outboundmiddleware", ["outboundmiddleware.unaryChain", "outboundmiddleware.unaryChainExec", "outboundmiddleware.onewayChain", "outboundmiddleware.onewayChainExec", "outboundmiddleware.streamChain", "outboundmiddleware.streamChainExec"])

export type unaryChain = $.Slice<middleware.UnaryOutbound | null>

$.registerNamedType("outboundmiddleware.unaryChain", /* @__PURE__ */ $.sliceType("middleware.UnaryOutbound"));

$.registerNamedValueType(
	"outboundmiddleware.unaryChain",
	{Call: (receiver: any, ...args: any[]) => (unaryChain_Call as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Call", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")], ["out", "transport.UnaryOutbound"]], [/* @__PURE__ */ $.pointerType("transport.Response"), "error"])]
);

$.registerNamedValueType(
	"*outboundmiddleware.unaryChain",
	{Call: (receiver: any, ...args: any[]) => (unaryChain_Call as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Call", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")], ["out", "transport.UnaryOutbound"]], [/* @__PURE__ */ $.pointerType("transport.Response"), "error"])]
);

export type onewayChain = $.Slice<middleware.OnewayOutbound | null>

$.registerNamedType("outboundmiddleware.onewayChain", /* @__PURE__ */ $.sliceType("middleware.OnewayOutbound"));

$.registerNamedValueType(
	"outboundmiddleware.onewayChain",
	{CallOneway: (receiver: any, ...args: any[]) => (onewayChain_CallOneway as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("CallOneway", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")], ["out", "transport.OnewayOutbound"]], ["transport.Ack", "error"])]
);

$.registerNamedValueType(
	"*outboundmiddleware.onewayChain",
	{CallOneway: (receiver: any, ...args: any[]) => (onewayChain_CallOneway as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("CallOneway", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")], ["out", "transport.OnewayOutbound"]], ["transport.Ack", "error"])]
);

export type streamChain = $.Slice<middleware.StreamOutbound | null>

$.registerNamedType("outboundmiddleware.streamChain", /* @__PURE__ */ $.sliceType("middleware.StreamOutbound"));

$.registerNamedValueType(
	"outboundmiddleware.streamChain",
	{CallStream: (receiver: any, ...args: any[]) => (streamChain_CallStream as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("CallStream", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.StreamRequest")], ["out", "transport.StreamOutbound"]], [/* @__PURE__ */ $.pointerType("transport.ClientStream"), "error"])]
);

$.registerNamedValueType(
	"*outboundmiddleware.streamChain",
	{CallStream: (receiver: any, ...args: any[]) => (streamChain_CallStream as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("CallStream", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.StreamRequest")], ["out", "transport.StreamOutbound"]], [/* @__PURE__ */ $.pointerType("transport.ClientStream"), "error"])]
);

export class unaryChainExec {
	public get Chain(): $.Slice<middleware.UnaryOutbound | null> {
		return this._fields.Chain
	}

	public set Chain(value: $.Slice<middleware.UnaryOutbound | null>) {
		this._fields.Chain = value
	}

	public get Final(): transport.UnaryOutbound | null {
		return this._fields.Final
	}

	public set Final(value: transport.UnaryOutbound | null) {
		this._fields.Final = value
	}

	public _fields: {
		Chain: $.Slice<middleware.UnaryOutbound | null>
		Final: transport.UnaryOutbound | null
	}

	constructor(init?: Partial<{Chain?: $.Slice<middleware.UnaryOutbound | null>, Final?: transport.UnaryOutbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Chain: init?.Chain ?? (null! as $.Slice<middleware.UnaryOutbound | null>),
			Final: init?.Final ?? (null! as transport.UnaryOutbound | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): unaryChainExec {
		return new unaryChainExec(this, true)
	}

	public __goscriptAssign(source: unaryChainExec): void {
		const target = this._fields
		const values = source._fields
		target.Chain = values.Chain
		target.Final = $.assignFieldValue(target.Final, values.Final, "transport.UnaryOutbound")
	}

	public async Call(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]> {
		let x: unaryChainExec = this;
		if ($.sliceLen(x.Chain) == 0) {
			return $.pointerValue<Exclude<transport.UnaryOutbound, null>>(x.Final).Call(ctx, request)
		}
		let next = $.arrayIndex(x.Chain!, 0)
		x.Chain = $.goSlice(x.Chain, 1, undefined)
		return (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<middleware.UnaryOutbound, null>) : $.pointerValue<Exclude<middleware.UnaryOutbound, null>>(next)).Call(ctx, request, $.interfaceValue<transport.UnaryOutbound | null>((x).clone(), "outboundmiddleware.unaryChainExec", "outboundmiddleware.unaryChainExec"))
	}

	public async Introspect(): globalThis.Promise<introspection.OutboundStatus> {
		const x = this;
		{
			let [o, ok] = $.typeAssertTuple<introspection.IntrospectableOutbound | null>(x.Final, "introspection.IntrospectableOutbound")
			if (ok) {
				return (((__goscriptAwait = (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? (o as Exclude<introspection.IntrospectableOutbound, null>) : $.pointerValue<Exclude<introspection.IntrospectableOutbound, null>>(o)).Introspect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as introspection.OutboundStatus)).clone()
			}
		}
		return ($.pointerValue<introspection.OutboundStatus>(introspection.__goscript_get_OutboundStatusNotSupported())).clone()
	}

	public async IsRunning(): globalThis.Promise<boolean> {
		const x = this;
		return $.pointerValue<Exclude<transport.UnaryOutbound, null>>(x.Final).IsRunning()
	}

	public async Start(): globalThis.Promise<$.GoError> {
		const x = this;
		return $.pointerValue<Exclude<transport.UnaryOutbound, null>>(x.Final).Start()
	}

	public async Stop(): globalThis.Promise<$.GoError> {
		const x = this;
		return $.pointerValue<Exclude<transport.UnaryOutbound, null>>(x.Final).Stop()
	}

	public async TransportName(): globalThis.Promise<string> {
		const x = this;
		let name: string = ""
		{
			let [namer, ok] = $.typeAssertTuple<transport.Namer | null>(x.Final, "transport.Namer")
			if (ok) {
				name = (__goscriptAwait = (namer !== null && (namer as any).__isVarRef !== true && (namer as any).__goValue === undefined ? (namer as Exclude<transport.Namer, null>) : $.pointerValue<Exclude<transport.Namer, null>>(namer)).TransportName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return name
	}

	public async Transports(): globalThis.Promise<$.Slice<transport.Transport | null>> {
		const x = this;
		return $.pointerValue<Exclude<transport.UnaryOutbound, null>>(x.Final).Transports()
	}

	static __typeInfo = $.registerStructType(
		"outboundmiddleware.unaryChainExec",
		() => new unaryChainExec(),
		() => [$.methodSignature("Call", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")]], [/* @__PURE__ */ $.pointerType("transport.Response"), "error"]), $.methodSignature("Introspect", [], ["introspection.OutboundStatus"]), $.methodSignature("IsRunning", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Start", [], ["error"]), $.methodSignature("Stop", [], ["error"]), $.methodSignature("TransportName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Transports", [], [/* @__PURE__ */ $.sliceType("transport.Transport")])],
		unaryChainExec,
		() => [/* @__PURE__ */ $.structField("Chain", /* @__PURE__ */ $.sliceType("middleware.UnaryOutbound"), [0], 0, true), /* @__PURE__ */ $.structField("Final", "transport.UnaryOutbound", [1], 24, true)]
	)
}

export class onewayChainExec {
	public get Chain(): $.Slice<middleware.OnewayOutbound | null> {
		return this._fields.Chain
	}

	public set Chain(value: $.Slice<middleware.OnewayOutbound | null>) {
		this._fields.Chain = value
	}

	public get Final(): transport.OnewayOutbound | null {
		return this._fields.Final
	}

	public set Final(value: transport.OnewayOutbound | null) {
		this._fields.Final = value
	}

	public _fields: {
		Chain: $.Slice<middleware.OnewayOutbound | null>
		Final: transport.OnewayOutbound | null
	}

	constructor(init?: Partial<{Chain?: $.Slice<middleware.OnewayOutbound | null>, Final?: transport.OnewayOutbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Chain: init?.Chain ?? (null! as $.Slice<middleware.OnewayOutbound | null>),
			Final: init?.Final ?? (null! as transport.OnewayOutbound | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): onewayChainExec {
		return new onewayChainExec(this, true)
	}

	public __goscriptAssign(source: onewayChainExec): void {
		const target = this._fields
		const values = source._fields
		target.Chain = values.Chain
		target.Final = $.assignFieldValue(target.Final, values.Final, "transport.OnewayOutbound")
	}

	public async CallOneway(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<[transport.Ack | null, $.GoError]> {
		let x: onewayChainExec = this;
		if ($.sliceLen(x.Chain) == 0) {
			return $.pointerValue<Exclude<transport.OnewayOutbound, null>>(x.Final).CallOneway(ctx, request)
		}
		let next = $.arrayIndex(x.Chain!, 0)
		x.Chain = $.goSlice(x.Chain, 1, undefined)
		return (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<middleware.OnewayOutbound, null>) : $.pointerValue<Exclude<middleware.OnewayOutbound, null>>(next)).CallOneway(ctx, request, $.interfaceValue<transport.OnewayOutbound | null>((x).clone(), "outboundmiddleware.onewayChainExec", "outboundmiddleware.onewayChainExec"))
	}

	public async Introspect(): globalThis.Promise<introspection.OutboundStatus> {
		const x = this;
		{
			let [o, ok] = $.typeAssertTuple<introspection.IntrospectableOutbound | null>(x.Final, "introspection.IntrospectableOutbound")
			if (ok) {
				return (((__goscriptAwait = (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? (o as Exclude<introspection.IntrospectableOutbound, null>) : $.pointerValue<Exclude<introspection.IntrospectableOutbound, null>>(o)).Introspect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as introspection.OutboundStatus)).clone()
			}
		}
		return ($.pointerValue<introspection.OutboundStatus>(introspection.__goscript_get_OutboundStatusNotSupported())).clone()
	}

	public async IsRunning(): globalThis.Promise<boolean> {
		const x = this;
		return $.pointerValue<Exclude<transport.OnewayOutbound, null>>(x.Final).IsRunning()
	}

	public async Start(): globalThis.Promise<$.GoError> {
		const x = this;
		return $.pointerValue<Exclude<transport.OnewayOutbound, null>>(x.Final).Start()
	}

	public async Stop(): globalThis.Promise<$.GoError> {
		const x = this;
		return $.pointerValue<Exclude<transport.OnewayOutbound, null>>(x.Final).Stop()
	}

	public async TransportName(): globalThis.Promise<string> {
		const x = this;
		let name: string = ""
		{
			let [namer, ok] = $.typeAssertTuple<transport.Namer | null>(x.Final, "transport.Namer")
			if (ok) {
				name = (__goscriptAwait = (namer !== null && (namer as any).__isVarRef !== true && (namer as any).__goValue === undefined ? (namer as Exclude<transport.Namer, null>) : $.pointerValue<Exclude<transport.Namer, null>>(namer)).TransportName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return name
	}

	public async Transports(): globalThis.Promise<$.Slice<transport.Transport | null>> {
		const x = this;
		return $.pointerValue<Exclude<transport.OnewayOutbound, null>>(x.Final).Transports()
	}

	static __typeInfo = $.registerStructType(
		"outboundmiddleware.onewayChainExec",
		() => new onewayChainExec(),
		() => [$.methodSignature("CallOneway", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")]], ["transport.Ack", "error"]), $.methodSignature("Introspect", [], ["introspection.OutboundStatus"]), $.methodSignature("IsRunning", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Start", [], ["error"]), $.methodSignature("Stop", [], ["error"]), $.methodSignature("TransportName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Transports", [], [/* @__PURE__ */ $.sliceType("transport.Transport")])],
		onewayChainExec,
		() => [/* @__PURE__ */ $.structField("Chain", /* @__PURE__ */ $.sliceType("middleware.OnewayOutbound"), [0], 0, true), /* @__PURE__ */ $.structField("Final", "transport.OnewayOutbound", [1], 24, true)]
	)
}

export class streamChainExec {
	public get Chain(): $.Slice<middleware.StreamOutbound | null> {
		return this._fields.Chain
	}

	public set Chain(value: $.Slice<middleware.StreamOutbound | null>) {
		this._fields.Chain = value
	}

	public get Final(): transport.StreamOutbound | null {
		return this._fields.Final
	}

	public set Final(value: transport.StreamOutbound | null) {
		this._fields.Final = value
	}

	public _fields: {
		Chain: $.Slice<middleware.StreamOutbound | null>
		Final: transport.StreamOutbound | null
	}

	constructor(init?: Partial<{Chain?: $.Slice<middleware.StreamOutbound | null>, Final?: transport.StreamOutbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Chain: init?.Chain ?? (null! as $.Slice<middleware.StreamOutbound | null>),
			Final: init?.Final ?? (null! as transport.StreamOutbound | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): streamChainExec {
		return new streamChainExec(this, true)
	}

	public __goscriptAssign(source: streamChainExec): void {
		const target = this._fields
		const values = source._fields
		target.Chain = values.Chain
		target.Final = $.assignFieldValue(target.Final, values.Final, "transport.StreamOutbound")
	}

	public async CallStream(ctx: context.Context | null, request: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null): globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]> {
		let x: streamChainExec = this;
		if ($.sliceLen(x.Chain) == 0) {
			return $.pointerValue<Exclude<transport.StreamOutbound, null>>(x.Final).CallStream(ctx, request)
		}
		let next = $.arrayIndex(x.Chain!, 0)
		x.Chain = $.goSlice(x.Chain, 1, undefined)
		return (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<middleware.StreamOutbound, null>) : $.pointerValue<Exclude<middleware.StreamOutbound, null>>(next)).CallStream(ctx, request, $.interfaceValue<transport.StreamOutbound | null>((x).clone(), "outboundmiddleware.streamChainExec", "outboundmiddleware.streamChainExec"))
	}

	public async IsRunning(): globalThis.Promise<boolean> {
		const x = this;
		return $.pointerValue<Exclude<transport.StreamOutbound, null>>(x.Final).IsRunning()
	}

	public async Start(): globalThis.Promise<$.GoError> {
		const x = this;
		return $.pointerValue<Exclude<transport.StreamOutbound, null>>(x.Final).Start()
	}

	public async Stop(): globalThis.Promise<$.GoError> {
		const x = this;
		return $.pointerValue<Exclude<transport.StreamOutbound, null>>(x.Final).Stop()
	}

	public async TransportName(): globalThis.Promise<string> {
		const x = this;
		let name: string = ""
		{
			let [namer, ok] = $.typeAssertTuple<transport.Namer | null>(x.Final, "transport.Namer")
			if (ok) {
				name = (__goscriptAwait = (namer !== null && (namer as any).__isVarRef !== true && (namer as any).__goValue === undefined ? (namer as Exclude<transport.Namer, null>) : $.pointerValue<Exclude<transport.Namer, null>>(namer)).TransportName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return name
	}

	public async Transports(): globalThis.Promise<$.Slice<transport.Transport | null>> {
		const x = this;
		return $.pointerValue<Exclude<transport.StreamOutbound, null>>(x.Final).Transports()
	}

	static __typeInfo = $.registerStructType(
		"outboundmiddleware.streamChainExec",
		() => new streamChainExec(),
		() => [$.methodSignature("CallStream", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.StreamRequest")]], [/* @__PURE__ */ $.pointerType("transport.ClientStream"), "error"]), $.methodSignature("IsRunning", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Start", [], ["error"]), $.methodSignature("Stop", [], ["error"]), $.methodSignature("TransportName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Transports", [], [/* @__PURE__ */ $.sliceType("transport.Transport")])],
		streamChainExec,
		() => [/* @__PURE__ */ $.structField("Chain", /* @__PURE__ */ $.sliceType("middleware.StreamOutbound"), [0], 0, true), /* @__PURE__ */ $.structField("Final", "transport.StreamOutbound", [1], 24, true)]
	)
}

export function UnaryChain(mw: $.Slice<middleware.UnaryOutbound | null>): middleware.UnaryOutbound | null {
	let unchained: $.Slice<middleware.UnaryOutbound | null> = $.makeSlice<middleware.UnaryOutbound | null>(0, $.sliceLen(mw))
	for (let __goscriptRangeTarget0 = mw, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let m = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as middleware.UnaryOutbound | null)
		if (m == null) {
			continue
		}
		{
			let __goscriptTuple0: any = $.typeAssertTuple<unaryChain>(m, /* @__PURE__ */ $.sliceType("middleware.UnaryOutbound", "outboundmiddleware.unaryChain"))
			let c: unaryChain = (__goscriptTuple0[0] as unaryChain)
			let ok = __goscriptTuple0[1]
			if (ok) {
				unchained = $.appendSlice(unchained, c, $.appendZeros.nil)
				continue
			}
		}
		unchained = $.appendOne(unchained, m, $.appendZeros.nil)
	}

	switch ($.sliceLen(unchained)) {
		case 0:
		{
			return middleware.NopUnaryOutbound
			break
		}
		case 1:
		{
			return $.arrayIndex(unchained!, 0)
			break
		}
		default:
		{
			return $.namedValueInterfaceValue<middleware.UnaryOutbound | null>((unchained as unaryChain), "outboundmiddleware.unaryChain", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function unaryChain_Call(c: unaryChain, ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null, out: transport.UnaryOutbound | null): globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]> {
	return $.markAsStructValue($.cloneStructValue(new unaryChainExec({Chain: c, Final: out}, true))).Call(ctx, request)
}

export function OnewayChain(mw: $.Slice<middleware.OnewayOutbound | null>): middleware.OnewayOutbound | null {
	let unchained: $.Slice<middleware.OnewayOutbound | null> = $.makeSlice<middleware.OnewayOutbound | null>(0, $.sliceLen(mw))
	for (let __goscriptRangeTarget1 = mw, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let m = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as middleware.OnewayOutbound | null)
		if (m == null) {
			continue
		}
		{
			let __goscriptTuple1: any = $.typeAssertTuple<onewayChain>(m, /* @__PURE__ */ $.sliceType("middleware.OnewayOutbound", "outboundmiddleware.onewayChain"))
			let c: onewayChain = (__goscriptTuple1[0] as onewayChain)
			let ok = __goscriptTuple1[1]
			if (ok) {
				unchained = $.appendSlice(unchained, c, $.appendZeros.nil)
				continue
			}
		}
		unchained = $.appendOne(unchained, m, $.appendZeros.nil)
	}

	switch ($.sliceLen(unchained)) {
		case 0:
		{
			return middleware.NopOnewayOutbound
			break
		}
		case 1:
		{
			return $.arrayIndex(unchained!, 0)
			break
		}
		default:
		{
			return $.namedValueInterfaceValue<middleware.OnewayOutbound | null>((unchained as onewayChain), "outboundmiddleware.onewayChain", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function onewayChain_CallOneway(c: onewayChain, ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null, out: transport.OnewayOutbound | null): globalThis.Promise<[transport.Ack | null, $.GoError]> {
	return $.markAsStructValue($.cloneStructValue(new onewayChainExec({Chain: c, Final: out}, true))).CallOneway(ctx, request)
}

export function StreamChain(mw: $.Slice<middleware.StreamOutbound | null>): middleware.StreamOutbound | null {
	let unchained: $.Slice<middleware.StreamOutbound | null> = $.makeSlice<middleware.StreamOutbound | null>(0, $.sliceLen(mw))
	for (let __goscriptRangeTarget2 = mw, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let m = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as middleware.StreamOutbound | null)
		if (m == null) {
			continue
		}
		{
			let __goscriptTuple2: any = $.typeAssertTuple<streamChain>(m, /* @__PURE__ */ $.sliceType("middleware.StreamOutbound", "outboundmiddleware.streamChain"))
			let c: streamChain = (__goscriptTuple2[0] as streamChain)
			let ok = __goscriptTuple2[1]
			if (ok) {
				unchained = $.appendSlice(unchained, c, $.appendZeros.nil)
				continue
			}
		}
		unchained = $.appendOne(unchained, m, $.appendZeros.nil)
	}

	switch ($.sliceLen(unchained)) {
		case 0:
		{
			return middleware.NopStreamOutbound
			break
		}
		case 1:
		{
			return $.arrayIndex(unchained!, 0)
			break
		}
		default:
		{
			return $.namedValueInterfaceValue<middleware.StreamOutbound | null>((unchained as streamChain), "outboundmiddleware.streamChain", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8())
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function streamChain_CallStream(c: streamChain, ctx: context.Context | null, request: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null, out: transport.StreamOutbound | null): globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]> {
	return $.markAsStructValue($.cloneStructValue(new streamChainExec({Chain: c, Final: out}, true))).CallStream(ctx, request)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Call: (receiver: any, ...args: any[]) => (unaryChain_Call as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("middleware.UnaryOutbound", "outboundmiddleware.unaryChain"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Call", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")], ["out", "transport.UnaryOutbound"]], [/* @__PURE__ */ $.pointerType("transport.Response"), "error"])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({CallOneway: (receiver: any, ...args: any[]) => (onewayChain_CallOneway as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.sliceType("middleware.OnewayOutbound", "outboundmiddleware.onewayChain"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("CallOneway", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")], ["out", "transport.OnewayOutbound"]], ["transport.Ack", "error"])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({CallStream: (receiver: any, ...args: any[]) => (streamChain_CallStream as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.sliceType("middleware.StreamOutbound", "outboundmiddleware.streamChain"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("CallStream", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.StreamRequest")], ["out", "transport.StreamOutbound"]], [/* @__PURE__ */ $.pointerType("transport.ClientStream"), "error"])])
}

var __goscriptAwait: any
