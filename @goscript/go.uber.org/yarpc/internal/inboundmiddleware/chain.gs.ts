// Generated file based on chain.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as middleware from "@goscript/go.uber.org/yarpc/api/middleware/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/middleware/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/internal/inboundmiddleware", ["inboundmiddleware.unaryChain", "inboundmiddleware.unaryChainExec", "inboundmiddleware.onewayChain", "inboundmiddleware.onewayChainExec", "inboundmiddleware.streamChain", "inboundmiddleware.streamChainExec"])

export type unaryChain = $.Slice<middleware.UnaryInbound | null>

$.registerNamedType("inboundmiddleware.unaryChain", /* @__PURE__ */ $.sliceType("middleware.UnaryInbound"));

$.registerNamedValueType(
	"inboundmiddleware.unaryChain",
	{Handle: (receiver: any, ...args: any[]) => (unaryChain_Handle as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Handle", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["resw", "transport.ResponseWriter"], ["h", "transport.UnaryHandler"]], ["error"])]
);

$.registerNamedValueType(
	"*inboundmiddleware.unaryChain",
	{Handle: (receiver: any, ...args: any[]) => (unaryChain_Handle as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Handle", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["resw", "transport.ResponseWriter"], ["h", "transport.UnaryHandler"]], ["error"])]
);

export type onewayChain = $.Slice<middleware.OnewayInbound | null>

$.registerNamedType("inboundmiddleware.onewayChain", /* @__PURE__ */ $.sliceType("middleware.OnewayInbound"));

$.registerNamedValueType(
	"inboundmiddleware.onewayChain",
	{HandleOneway: (receiver: any, ...args: any[]) => (onewayChain_HandleOneway as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("HandleOneway", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["h", "transport.OnewayHandler"]], ["error"])]
);

$.registerNamedValueType(
	"*inboundmiddleware.onewayChain",
	{HandleOneway: (receiver: any, ...args: any[]) => (onewayChain_HandleOneway as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("HandleOneway", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["h", "transport.OnewayHandler"]], ["error"])]
);

export type streamChain = $.Slice<middleware.StreamInbound | null>

$.registerNamedType("inboundmiddleware.streamChain", /* @__PURE__ */ $.sliceType("middleware.StreamInbound"));

$.registerNamedValueType(
	"inboundmiddleware.streamChain",
	{HandleStream: (receiver: any, ...args: any[]) => (streamChain_HandleStream as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("HandleStream", [["s", /* @__PURE__ */ $.pointerType("transport.ServerStream")], ["h", "transport.StreamHandler"]], ["error"])]
);

$.registerNamedValueType(
	"*inboundmiddleware.streamChain",
	{HandleStream: (receiver: any, ...args: any[]) => (streamChain_HandleStream as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("HandleStream", [["s", /* @__PURE__ */ $.pointerType("transport.ServerStream")], ["h", "transport.StreamHandler"]], ["error"])]
);

export class unaryChainExec {
	public get Chain(): $.Slice<middleware.UnaryInbound | null> {
		return this._fields.Chain
	}

	public set Chain(value: $.Slice<middleware.UnaryInbound | null>) {
		this._fields.Chain = value
	}

	public get Final(): transport.UnaryHandler | null {
		return this._fields.Final
	}

	public set Final(value: transport.UnaryHandler | null) {
		this._fields.Final = value
	}

	public _fields: {
		Chain: $.Slice<middleware.UnaryInbound | null>
		Final: transport.UnaryHandler | null
	}

	constructor(init?: Partial<{Chain?: $.Slice<middleware.UnaryInbound | null>, Final?: transport.UnaryHandler | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Chain: init?.Chain ?? (null! as $.Slice<middleware.UnaryInbound | null>),
			Final: init?.Final ?? (null! as transport.UnaryHandler | null)
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
		target.Final = $.assignFieldValue(target.Final, values.Final, "transport.UnaryHandler")
	}

	public async Handle(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null, resw: transport.ResponseWriter | null): globalThis.Promise<$.GoError> {
		let x: unaryChainExec = this;
		if ($.sliceLen(x.Chain) == 0) {
			return $.pointerValue<Exclude<transport.UnaryHandler, null>>(x.Final).Handle(ctx, req, resw)
		}
		let next = $.arrayIndex(x.Chain!, 0)
		x.Chain = $.goSlice(x.Chain, 1, undefined)
		return (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<middleware.UnaryInbound, null>) : $.pointerValue<Exclude<middleware.UnaryInbound, null>>(next)).Handle(ctx, req, resw, $.interfaceValue<transport.UnaryHandler | null>((x).clone(), "inboundmiddleware.unaryChainExec", "inboundmiddleware.unaryChainExec"))
	}

	static __typeInfo = $.registerStructType(
		"inboundmiddleware.unaryChainExec",
		() => new unaryChainExec(),
		() => [$.methodSignature("Handle", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["resw", "transport.ResponseWriter"]], ["error"])],
		unaryChainExec,
		() => [/* @__PURE__ */ $.structField("Chain", /* @__PURE__ */ $.sliceType("middleware.UnaryInbound"), [0], 0, true), /* @__PURE__ */ $.structField("Final", "transport.UnaryHandler", [1], 24, true)]
	)
}

export class onewayChainExec {
	public get Chain(): $.Slice<middleware.OnewayInbound | null> {
		return this._fields.Chain
	}

	public set Chain(value: $.Slice<middleware.OnewayInbound | null>) {
		this._fields.Chain = value
	}

	public get Final(): transport.OnewayHandler | null {
		return this._fields.Final
	}

	public set Final(value: transport.OnewayHandler | null) {
		this._fields.Final = value
	}

	public _fields: {
		Chain: $.Slice<middleware.OnewayInbound | null>
		Final: transport.OnewayHandler | null
	}

	constructor(init?: Partial<{Chain?: $.Slice<middleware.OnewayInbound | null>, Final?: transport.OnewayHandler | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Chain: init?.Chain ?? (null! as $.Slice<middleware.OnewayInbound | null>),
			Final: init?.Final ?? (null! as transport.OnewayHandler | null)
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
		target.Final = $.assignFieldValue(target.Final, values.Final, "transport.OnewayHandler")
	}

	public async HandleOneway(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<$.GoError> {
		let x: onewayChainExec = this;
		if ($.sliceLen(x.Chain) == 0) {
			return $.pointerValue<Exclude<transport.OnewayHandler, null>>(x.Final).HandleOneway(ctx, req)
		}
		let next = $.arrayIndex(x.Chain!, 0)
		x.Chain = $.goSlice(x.Chain, 1, undefined)
		return (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<middleware.OnewayInbound, null>) : $.pointerValue<Exclude<middleware.OnewayInbound, null>>(next)).HandleOneway(ctx, req, $.interfaceValue<transport.OnewayHandler | null>((x).clone(), "inboundmiddleware.onewayChainExec", "inboundmiddleware.onewayChainExec"))
	}

	static __typeInfo = $.registerStructType(
		"inboundmiddleware.onewayChainExec",
		() => new onewayChainExec(),
		() => [$.methodSignature("HandleOneway", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")]], ["error"])],
		onewayChainExec,
		() => [/* @__PURE__ */ $.structField("Chain", /* @__PURE__ */ $.sliceType("middleware.OnewayInbound"), [0], 0, true), /* @__PURE__ */ $.structField("Final", "transport.OnewayHandler", [1], 24, true)]
	)
}

export class streamChainExec {
	public get Chain(): $.Slice<middleware.StreamInbound | null> {
		return this._fields.Chain
	}

	public set Chain(value: $.Slice<middleware.StreamInbound | null>) {
		this._fields.Chain = value
	}

	public get Final(): transport.StreamHandler | null {
		return this._fields.Final
	}

	public set Final(value: transport.StreamHandler | null) {
		this._fields.Final = value
	}

	public _fields: {
		Chain: $.Slice<middleware.StreamInbound | null>
		Final: transport.StreamHandler | null
	}

	constructor(init?: Partial<{Chain?: $.Slice<middleware.StreamInbound | null>, Final?: transport.StreamHandler | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Chain: init?.Chain ?? (null! as $.Slice<middleware.StreamInbound | null>),
			Final: init?.Final ?? (null! as transport.StreamHandler | null)
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
		target.Final = $.assignFieldValue(target.Final, values.Final, "transport.StreamHandler")
	}

	public async HandleStream(s: transport.ServerStream | $.VarRef<transport.ServerStream> | null): globalThis.Promise<$.GoError> {
		let x: streamChainExec = this;
		if ($.sliceLen(x.Chain) == 0) {
			return $.pointerValue<Exclude<transport.StreamHandler, null>>(x.Final).HandleStream(s)
		}
		let next = $.arrayIndex(x.Chain!, 0)
		x.Chain = $.goSlice(x.Chain, 1, undefined)
		return (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<middleware.StreamInbound, null>) : $.pointerValue<Exclude<middleware.StreamInbound, null>>(next)).HandleStream(s, $.interfaceValue<transport.StreamHandler | null>((x).clone(), "inboundmiddleware.streamChainExec", "inboundmiddleware.streamChainExec"))
	}

	static __typeInfo = $.registerStructType(
		"inboundmiddleware.streamChainExec",
		() => new streamChainExec(),
		() => [$.methodSignature("HandleStream", [["s", /* @__PURE__ */ $.pointerType("transport.ServerStream")]], ["error"])],
		streamChainExec,
		() => [/* @__PURE__ */ $.structField("Chain", /* @__PURE__ */ $.sliceType("middleware.StreamInbound"), [0], 0, true), /* @__PURE__ */ $.structField("Final", "transport.StreamHandler", [1], 24, true)]
	)
}

export function UnaryChain(mw: $.Slice<middleware.UnaryInbound | null>): middleware.UnaryInbound | null {
	let unchained: $.Slice<middleware.UnaryInbound | null> = $.makeSlice<middleware.UnaryInbound | null>(0, $.sliceLen(mw))
	for (let __goscriptRangeTarget0 = mw, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let m = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as middleware.UnaryInbound | null)
		if (m == null) {
			continue
		}
		{
			let __goscriptTuple0: any = $.typeAssertTuple<unaryChain>(m, /* @__PURE__ */ $.sliceType("middleware.UnaryInbound", "inboundmiddleware.unaryChain"))
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
			return middleware.NopUnaryInbound
			break
		}
		case 1:
		{
			return $.arrayIndex(unchained!, 0)
			break
		}
		default:
		{
			return $.namedValueInterfaceValue<middleware.UnaryInbound | null>((unchained as unaryChain), "inboundmiddleware.unaryChain", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function unaryChain_Handle(c: unaryChain, ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null, resw: transport.ResponseWriter | null, h: transport.UnaryHandler | null): globalThis.Promise<$.GoError> {
	return $.markAsStructValue($.cloneStructValue(new unaryChainExec({Chain: c, Final: h}, true))).Handle(ctx, req, resw)
}

export function OnewayChain(mw: $.Slice<middleware.OnewayInbound | null>): middleware.OnewayInbound | null {
	let unchained: $.Slice<middleware.OnewayInbound | null> = $.makeSlice<middleware.OnewayInbound | null>(0, $.sliceLen(mw))
	for (let __goscriptRangeTarget1 = mw, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let m = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as middleware.OnewayInbound | null)
		if (m == null) {
			continue
		}
		{
			let __goscriptTuple1: any = $.typeAssertTuple<onewayChain>(m, /* @__PURE__ */ $.sliceType("middleware.OnewayInbound", "inboundmiddleware.onewayChain"))
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
			return middleware.NopOnewayInbound
			break
		}
		case 1:
		{
			return $.arrayIndex(unchained!, 0)
			break
		}
		default:
		{
			return $.namedValueInterfaceValue<middleware.OnewayInbound | null>((unchained as onewayChain), "inboundmiddleware.onewayChain", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function onewayChain_HandleOneway(c: onewayChain, ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null, h: transport.OnewayHandler | null): globalThis.Promise<$.GoError> {
	return $.markAsStructValue($.cloneStructValue(new onewayChainExec({Chain: c, Final: h}, true))).HandleOneway(ctx, req)
}

export function StreamChain(mw: $.Slice<middleware.StreamInbound | null>): middleware.StreamInbound | null {
	let unchained: $.Slice<middleware.StreamInbound | null> = $.makeSlice<middleware.StreamInbound | null>(0, $.sliceLen(mw))
	for (let __goscriptRangeTarget2 = mw, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let m = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as middleware.StreamInbound | null)
		if (m == null) {
			continue
		}
		{
			let __goscriptTuple2: any = $.typeAssertTuple<streamChain>(m, /* @__PURE__ */ $.sliceType("middleware.StreamInbound", "inboundmiddleware.streamChain"))
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
			return middleware.NopStreamInbound
			break
		}
		case 1:
		{
			return $.arrayIndex(unchained!, 0)
			break
		}
		default:
		{
			return $.namedValueInterfaceValue<middleware.StreamInbound | null>((unchained as streamChain), "inboundmiddleware.streamChain", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8())
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function streamChain_HandleStream(c: streamChain, s: transport.ServerStream | $.VarRef<transport.ServerStream> | null, h: transport.StreamHandler | null): globalThis.Promise<$.GoError> {
	return $.markAsStructValue($.cloneStructValue(new streamChainExec({Chain: c, Final: h}, true))).HandleStream(s)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Handle: (receiver: any, ...args: any[]) => (unaryChain_Handle as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType("middleware.UnaryInbound", "inboundmiddleware.unaryChain"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Handle", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["resw", "transport.ResponseWriter"], ["h", "transport.UnaryHandler"]], ["error"])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({HandleOneway: (receiver: any, ...args: any[]) => (onewayChain_HandleOneway as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.sliceType("middleware.OnewayInbound", "inboundmiddleware.onewayChain"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("HandleOneway", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["h", "transport.OnewayHandler"]], ["error"])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({HandleStream: (receiver: any, ...args: any[]) => (streamChain_HandleStream as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.sliceType("middleware.StreamInbound", "inboundmiddleware.streamChain"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("HandleStream", [["s", /* @__PURE__ */ $.pointerType("transport.ServerStream")], ["h", "transport.StreamHandler"]], ["error"])])
}

var __goscriptAwait: any
