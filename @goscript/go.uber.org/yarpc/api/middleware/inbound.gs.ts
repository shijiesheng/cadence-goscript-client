// Generated file based on inbound.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/api/middleware", ["middleware.UnaryInbound", "middleware.UnaryInboundFunc", "middleware.unaryHandlerWithMiddleware", "middleware.nopUnaryInbound", "middleware.OnewayInbound", "middleware.OnewayInboundFunc", "middleware.onewayHandlerWithMiddleware", "middleware.nopOnewayInbound", "middleware.StreamInbound", "middleware.StreamInboundFunc", "middleware.streamHandlerWithMiddleware", "middleware.nopStreamInbound"])

export type UnaryInbound = {
	Handle(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null, resw: transport.ResponseWriter | null, h: transport.UnaryHandler | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"middleware.UnaryInbound",
	null,
	[$.methodSignature("Handle", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["resw", "transport.ResponseWriter"], ["h", "transport.UnaryHandler"]], ["error"])]
);

export type UnaryInboundFunc = ((_p0: context.Context | null, _p1: transport.Request | $.VarRef<transport.Request> | null, _p2: transport.ResponseWriter | null, _p3: transport.UnaryHandler | null) => $.GoError | globalThis.Promise<$.GoError>) | null

$.registerNamedValueType(
	"middleware.UnaryInboundFunc",
	{Handle: (receiver: any, ...args: any[]) => (UnaryInboundFunc_Handle as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Handle", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["resw", "transport.ResponseWriter"], ["h", "transport.UnaryHandler"]], ["error"])]
);

$.registerNamedValueType(
	"*middleware.UnaryInboundFunc",
	{Handle: (receiver: any, ...args: any[]) => (UnaryInboundFunc_Handle as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Handle", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["resw", "transport.ResponseWriter"], ["h", "transport.UnaryHandler"]], ["error"])]
);

export type OnewayInbound = {
	HandleOneway(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null, h: transport.OnewayHandler | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"middleware.OnewayInbound",
	null,
	[$.methodSignature("HandleOneway", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["h", "transport.OnewayHandler"]], ["error"])]
);

export type OnewayInboundFunc = ((_p0: context.Context | null, _p1: transport.Request | $.VarRef<transport.Request> | null, _p2: transport.OnewayHandler | null) => $.GoError | globalThis.Promise<$.GoError>) | null

$.registerNamedValueType(
	"middleware.OnewayInboundFunc",
	{HandleOneway: (receiver: any, ...args: any[]) => (OnewayInboundFunc_HandleOneway as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("HandleOneway", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["h", "transport.OnewayHandler"]], ["error"])]
);

$.registerNamedValueType(
	"*middleware.OnewayInboundFunc",
	{HandleOneway: (receiver: any, ...args: any[]) => (OnewayInboundFunc_HandleOneway as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("HandleOneway", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["h", "transport.OnewayHandler"]], ["error"])]
);

export type StreamInbound = {
	HandleStream(s: transport.ServerStream | $.VarRef<transport.ServerStream> | null, h: transport.StreamHandler | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"middleware.StreamInbound",
	null,
	[$.methodSignature("HandleStream", [["s", /* @__PURE__ */ $.pointerType("transport.ServerStream")], ["h", "transport.StreamHandler"]], ["error"])]
);

export type StreamInboundFunc = ((_p0: transport.ServerStream | $.VarRef<transport.ServerStream> | null, _p1: transport.StreamHandler | null) => $.GoError | globalThis.Promise<$.GoError>) | null

$.registerNamedValueType(
	"middleware.StreamInboundFunc",
	{HandleStream: (receiver: any, ...args: any[]) => (StreamInboundFunc_HandleStream as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("HandleStream", [["s", /* @__PURE__ */ $.pointerType("transport.ServerStream")], ["h", "transport.StreamHandler"]], ["error"])]
);

$.registerNamedValueType(
	"*middleware.StreamInboundFunc",
	{HandleStream: (receiver: any, ...args: any[]) => (StreamInboundFunc_HandleStream as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("HandleStream", [["s", /* @__PURE__ */ $.pointerType("transport.ServerStream")], ["h", "transport.StreamHandler"]], ["error"])]
);

export class unaryHandlerWithMiddleware {
	public get h(): transport.UnaryHandler | null {
		return this._fields.h
	}

	public set h(value: transport.UnaryHandler | null) {
		this._fields.h = value
	}

	public get i(): UnaryInbound | null {
		return this._fields.i
	}

	public set i(value: UnaryInbound | null) {
		this._fields.i = value
	}

	public _fields: {
		h: transport.UnaryHandler | null
		i: UnaryInbound | null
	}

	constructor(init?: Partial<{h?: transport.UnaryHandler | null, i?: UnaryInbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			h: init?.h ?? (null! as transport.UnaryHandler | null),
			i: init?.i ?? (null! as UnaryInbound | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): unaryHandlerWithMiddleware {
		return new unaryHandlerWithMiddleware(this, true)
	}

	public __goscriptAssign(source: unaryHandlerWithMiddleware): void {
		const target = this._fields
		const values = source._fields
		target.h = $.assignFieldValue(target.h, values.h, "transport.UnaryHandler")
		target.i = $.assignFieldValue(target.i, values.i, "middleware.UnaryInbound")
	}

	public async Handle(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null, resw: transport.ResponseWriter | null): globalThis.Promise<$.GoError> {
		const h = this;
		return $.pointerValue<Exclude<UnaryInbound, null>>(h.i).Handle(ctx, req, resw, h.h)
	}

	static __typeInfo = $.registerStructType(
		"middleware.unaryHandlerWithMiddleware",
		() => new unaryHandlerWithMiddleware(),
		() => [$.methodSignature("Handle", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["resw", "transport.ResponseWriter"]], ["error"])],
		unaryHandlerWithMiddleware,
		() => [/* @__PURE__ */ $.structField("h", "transport.UnaryHandler", [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/middleware" }), /* @__PURE__ */ $.structField("i", "middleware.UnaryInbound", [1], 16, false, { pkgPath: "go.uber.org/yarpc/api/middleware" })]
	)
}

export class nopUnaryInbound {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nopUnaryInbound {
		return new nopUnaryInbound(this, true)
	}

	public __goscriptAssign(source: nopUnaryInbound): void {
	}

	public async Handle(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null, resw: transport.ResponseWriter | null, handler: transport.UnaryHandler | null): globalThis.Promise<$.GoError> {
		return (handler !== null && (handler as any).__isVarRef !== true && (handler as any).__goValue === undefined ? (handler as Exclude<transport.UnaryHandler, null>) : $.pointerValue<Exclude<transport.UnaryHandler, null>>(handler)).Handle(ctx, req, resw)
	}

	static __typeInfo = $.registerStructType(
		"middleware.nopUnaryInbound",
		() => new nopUnaryInbound(),
		() => [$.methodSignature("Handle", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["resw", "transport.ResponseWriter"], ["handler", "transport.UnaryHandler"]], ["error"])],
		nopUnaryInbound,
		() => []
	)
}

export class onewayHandlerWithMiddleware {
	public get h(): transport.OnewayHandler | null {
		return this._fields.h
	}

	public set h(value: transport.OnewayHandler | null) {
		this._fields.h = value
	}

	public get i(): OnewayInbound | null {
		return this._fields.i
	}

	public set i(value: OnewayInbound | null) {
		this._fields.i = value
	}

	public _fields: {
		h: transport.OnewayHandler | null
		i: OnewayInbound | null
	}

	constructor(init?: Partial<{h?: transport.OnewayHandler | null, i?: OnewayInbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			h: init?.h ?? (null! as transport.OnewayHandler | null),
			i: init?.i ?? (null! as OnewayInbound | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): onewayHandlerWithMiddleware {
		return new onewayHandlerWithMiddleware(this, true)
	}

	public __goscriptAssign(source: onewayHandlerWithMiddleware): void {
		const target = this._fields
		const values = source._fields
		target.h = $.assignFieldValue(target.h, values.h, "transport.OnewayHandler")
		target.i = $.assignFieldValue(target.i, values.i, "middleware.OnewayInbound")
	}

	public async HandleOneway(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<$.GoError> {
		const h = this;
		return $.pointerValue<Exclude<OnewayInbound, null>>(h.i).HandleOneway(ctx, req, h.h)
	}

	static __typeInfo = $.registerStructType(
		"middleware.onewayHandlerWithMiddleware",
		() => new onewayHandlerWithMiddleware(),
		() => [$.methodSignature("HandleOneway", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")]], ["error"])],
		onewayHandlerWithMiddleware,
		() => [/* @__PURE__ */ $.structField("h", "transport.OnewayHandler", [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/middleware" }), /* @__PURE__ */ $.structField("i", "middleware.OnewayInbound", [1], 16, false, { pkgPath: "go.uber.org/yarpc/api/middleware" })]
	)
}

export class nopOnewayInbound {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nopOnewayInbound {
		return new nopOnewayInbound(this, true)
	}

	public __goscriptAssign(source: nopOnewayInbound): void {
	}

	public async HandleOneway(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null, handler: transport.OnewayHandler | null): globalThis.Promise<$.GoError> {
		return (handler !== null && (handler as any).__isVarRef !== true && (handler as any).__goValue === undefined ? (handler as Exclude<transport.OnewayHandler, null>) : $.pointerValue<Exclude<transport.OnewayHandler, null>>(handler)).HandleOneway(ctx, req)
	}

	static __typeInfo = $.registerStructType(
		"middleware.nopOnewayInbound",
		() => new nopOnewayInbound(),
		() => [$.methodSignature("HandleOneway", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["handler", "transport.OnewayHandler"]], ["error"])],
		nopOnewayInbound,
		() => []
	)
}

export class streamHandlerWithMiddleware {
	public get h(): transport.StreamHandler | null {
		return this._fields.h
	}

	public set h(value: transport.StreamHandler | null) {
		this._fields.h = value
	}

	public get i(): StreamInbound | null {
		return this._fields.i
	}

	public set i(value: StreamInbound | null) {
		this._fields.i = value
	}

	public _fields: {
		h: transport.StreamHandler | null
		i: StreamInbound | null
	}

	constructor(init?: Partial<{h?: transport.StreamHandler | null, i?: StreamInbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			h: init?.h ?? (null! as transport.StreamHandler | null),
			i: init?.i ?? (null! as StreamInbound | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): streamHandlerWithMiddleware {
		return new streamHandlerWithMiddleware(this, true)
	}

	public __goscriptAssign(source: streamHandlerWithMiddleware): void {
		const target = this._fields
		const values = source._fields
		target.h = $.assignFieldValue(target.h, values.h, "transport.StreamHandler")
		target.i = $.assignFieldValue(target.i, values.i, "middleware.StreamInbound")
	}

	public async HandleStream(s: transport.ServerStream | $.VarRef<transport.ServerStream> | null): globalThis.Promise<$.GoError> {
		const h = this;
		return $.pointerValue<Exclude<StreamInbound, null>>(h.i).HandleStream(s, h.h)
	}

	static __typeInfo = $.registerStructType(
		"middleware.streamHandlerWithMiddleware",
		() => new streamHandlerWithMiddleware(),
		() => [$.methodSignature("HandleStream", [["s", /* @__PURE__ */ $.pointerType("transport.ServerStream")]], ["error"])],
		streamHandlerWithMiddleware,
		() => [/* @__PURE__ */ $.structField("h", "transport.StreamHandler", [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/middleware" }), /* @__PURE__ */ $.structField("i", "middleware.StreamInbound", [1], 16, false, { pkgPath: "go.uber.org/yarpc/api/middleware" })]
	)
}

export class nopStreamInbound {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nopStreamInbound {
		return new nopStreamInbound(this, true)
	}

	public __goscriptAssign(source: nopStreamInbound): void {
	}

	public async HandleStream(s: transport.ServerStream | $.VarRef<transport.ServerStream> | null, handler: transport.StreamHandler | null): globalThis.Promise<$.GoError> {
		return (handler !== null && (handler as any).__isVarRef !== true && (handler as any).__goValue === undefined ? (handler as Exclude<transport.StreamHandler, null>) : $.pointerValue<Exclude<transport.StreamHandler, null>>(handler)).HandleStream(s)
	}

	static __typeInfo = $.registerStructType(
		"middleware.nopStreamInbound",
		() => new nopStreamInbound(),
		() => [$.methodSignature("HandleStream", [["s", /* @__PURE__ */ $.pointerType("transport.ServerStream")], ["handler", "transport.StreamHandler"]], ["error"])],
		nopStreamInbound,
		() => []
	)
}

export let NopUnaryInbound: UnaryInbound | null = $.interfaceValue<UnaryInbound | null>(new nopUnaryInbound(undefined, true), "middleware.nopUnaryInbound", "middleware.nopUnaryInbound")

export function __goscript_set_NopUnaryInbound(__goscriptValue: UnaryInbound | null): void {
	NopUnaryInbound = __goscriptValue
}

export function ApplyUnaryInbound(h: transport.UnaryHandler | null, i: UnaryInbound | null): transport.UnaryHandler | null {
	if (i == null) {
		return h
	}
	return $.interfaceValue<transport.UnaryHandler | null>(new unaryHandlerWithMiddleware({h: h, i: i}, true), "middleware.unaryHandlerWithMiddleware", "middleware.unaryHandlerWithMiddleware")
}

export async function UnaryInboundFunc_Handle(f: UnaryInboundFunc | null, ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null, resw: transport.ResponseWriter | null, h: transport.UnaryHandler | null): globalThis.Promise<$.GoError> {
	return f!(ctx, req, resw, h)
}

export let NopOnewayInbound: OnewayInbound | null = $.interfaceValue<OnewayInbound | null>(new nopOnewayInbound(undefined, true), "middleware.nopOnewayInbound", "middleware.nopOnewayInbound")

export function __goscript_set_NopOnewayInbound(__goscriptValue: OnewayInbound | null): void {
	NopOnewayInbound = __goscriptValue
}

export function ApplyOnewayInbound(h: transport.OnewayHandler | null, i: OnewayInbound | null): transport.OnewayHandler | null {
	if (i == null) {
		return h
	}
	return $.interfaceValue<transport.OnewayHandler | null>(new onewayHandlerWithMiddleware({h: h, i: i}, true), "middleware.onewayHandlerWithMiddleware", "middleware.onewayHandlerWithMiddleware")
}

export async function OnewayInboundFunc_HandleOneway(f: OnewayInboundFunc | null, ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null, h: transport.OnewayHandler | null): globalThis.Promise<$.GoError> {
	return f!(ctx, req, h)
}

export let NopStreamInbound: StreamInbound | null = $.interfaceValue<StreamInbound | null>(new nopStreamInbound(undefined, true), "middleware.nopStreamInbound", "middleware.nopStreamInbound")

export function __goscript_set_NopStreamInbound(__goscriptValue: StreamInbound | null): void {
	NopStreamInbound = __goscriptValue
}

export function ApplyStreamInbound(h: transport.StreamHandler | null, i: StreamInbound | null): transport.StreamHandler | null {
	if (i == null) {
		return h
	}
	return $.interfaceValue<transport.StreamHandler | null>(new streamHandlerWithMiddleware({h: h, i: i}, true), "middleware.streamHandlerWithMiddleware", "middleware.streamHandlerWithMiddleware")
}

export async function StreamInboundFunc_HandleStream(f: StreamInboundFunc | null, s: transport.ServerStream | $.VarRef<transport.ServerStream> | null, h: transport.StreamHandler | null): globalThis.Promise<$.GoError> {
	return f!(s, h)
}

var __goscriptAwait: any
