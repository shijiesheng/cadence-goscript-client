// Generated file based on outbound.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as introspection from "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/api/x/introspection/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/api/middleware", ["middleware.UnaryOutbound", "middleware.UnaryOutboundFunc", "middleware.unaryOutboundWithMiddleware", "middleware.nopUnaryOutbound", "middleware.OnewayOutbound", "middleware.OnewayOutboundFunc", "middleware.onewayOutboundWithMiddleware", "middleware.nopOnewayOutbound", "middleware.StreamOutbound", "middleware.StreamOutboundFunc", "middleware.streamOutboundWithMiddleware", "middleware.nopStreamOutbound"])

export type UnaryOutbound = {
	Call(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null, out: transport.UnaryOutbound | null): [transport.Response | $.VarRef<transport.Response> | null, $.GoError] | globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]>
}

$.registerInterfaceType(
	"middleware.UnaryOutbound",
	null,
	[$.methodSignature("Call", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")], ["out", "transport.UnaryOutbound"]], [/* @__PURE__ */ $.pointerType("transport.Response"), "error"])]
);

export type UnaryOutboundFunc = ((_p0: context.Context | null, _p1: transport.Request | $.VarRef<transport.Request> | null, _p2: transport.UnaryOutbound | null) => [transport.Response | $.VarRef<transport.Response> | null, $.GoError] | globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]>) | null

$.registerNamedValueType(
	"middleware.UnaryOutboundFunc",
	{Call: (receiver: any, ...args: any[]) => (UnaryOutboundFunc_Call as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Call", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")], ["out", "transport.UnaryOutbound"]], [/* @__PURE__ */ $.pointerType("transport.Response"), "error"])]
);

$.registerNamedValueType(
	"*middleware.UnaryOutboundFunc",
	{Call: (receiver: any, ...args: any[]) => (UnaryOutboundFunc_Call as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Call", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")], ["out", "transport.UnaryOutbound"]], [/* @__PURE__ */ $.pointerType("transport.Response"), "error"])]
);

export type OnewayOutbound = {
	CallOneway(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null, out: transport.OnewayOutbound | null): [transport.Ack | null, $.GoError] | globalThis.Promise<[transport.Ack | null, $.GoError]>
}

$.registerInterfaceType(
	"middleware.OnewayOutbound",
	null,
	[$.methodSignature("CallOneway", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")], ["out", "transport.OnewayOutbound"]], ["transport.Ack", "error"])]
);

export type OnewayOutboundFunc = ((_p0: context.Context | null, _p1: transport.Request | $.VarRef<transport.Request> | null, _p2: transport.OnewayOutbound | null) => [transport.Ack | null, $.GoError] | globalThis.Promise<[transport.Ack | null, $.GoError]>) | null

$.registerNamedValueType(
	"middleware.OnewayOutboundFunc",
	{CallOneway: (receiver: any, ...args: any[]) => (OnewayOutboundFunc_CallOneway as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("CallOneway", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")], ["out", "transport.OnewayOutbound"]], ["transport.Ack", "error"])]
);

$.registerNamedValueType(
	"*middleware.OnewayOutboundFunc",
	{CallOneway: (receiver: any, ...args: any[]) => (OnewayOutboundFunc_CallOneway as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("CallOneway", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")], ["out", "transport.OnewayOutbound"]], ["transport.Ack", "error"])]
);

export type StreamOutbound = {
	CallStream(ctx: context.Context | null, request: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null, out: transport.StreamOutbound | null): [transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError] | globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]>
}

$.registerInterfaceType(
	"middleware.StreamOutbound",
	null,
	[$.methodSignature("CallStream", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.StreamRequest")], ["out", "transport.StreamOutbound"]], [/* @__PURE__ */ $.pointerType("transport.ClientStream"), "error"])]
);

export type StreamOutboundFunc = ((_p0: context.Context | null, _p1: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null, _p2: transport.StreamOutbound | null) => [transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError] | globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]>) | null

$.registerNamedValueType(
	"middleware.StreamOutboundFunc",
	{CallStream: (receiver: any, ...args: any[]) => (StreamOutboundFunc_CallStream as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("CallStream", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.StreamRequest")], ["out", "transport.StreamOutbound"]], [/* @__PURE__ */ $.pointerType("transport.ClientStream"), "error"])]
);

$.registerNamedValueType(
	"*middleware.StreamOutboundFunc",
	{CallStream: (receiver: any, ...args: any[]) => (StreamOutboundFunc_CallStream as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("CallStream", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.StreamRequest")], ["out", "transport.StreamOutbound"]], [/* @__PURE__ */ $.pointerType("transport.ClientStream"), "error"])]
);

export class unaryOutboundWithMiddleware {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get o(): transport.UnaryOutbound | null {
		return this._fields.o
	}

	public set o(value: transport.UnaryOutbound | null) {
		this._fields.o = value
	}

	public get f(): UnaryOutbound | null {
		return this._fields.f
	}

	public set f(value: UnaryOutbound | null) {
		this._fields.f = value
	}

	public _fields: {
		name: string
		o: transport.UnaryOutbound | null
		f: UnaryOutbound | null
	}

	constructor(init?: Partial<{name?: string, o?: transport.UnaryOutbound | null, f?: UnaryOutbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			o: init?.o ?? (null! as transport.UnaryOutbound | null),
			f: init?.f ?? (null! as UnaryOutbound | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): unaryOutboundWithMiddleware {
		return new unaryOutboundWithMiddleware(this, true)
	}

	public __goscriptAssign(source: unaryOutboundWithMiddleware): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.o = $.assignFieldValue(target.o, values.o, "transport.UnaryOutbound")
		target.f = $.assignFieldValue(target.f, values.f, "middleware.UnaryOutbound")
	}

	public async Call(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]> {
		const fo = this;
		return $.pointerValue<Exclude<UnaryOutbound, null>>(fo.f).Call(ctx, request, fo.o)
	}

	public async Introspect(): globalThis.Promise<introspection.OutboundStatus> {
		const fo = this;
		{
			let __goscriptTuple0: any = $.typeAssertTuple<introspection.IntrospectableOutbound | null>(fo.o, "introspection.IntrospectableOutbound")
			let o = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				return (((__goscriptAwait = (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? (o as Exclude<introspection.IntrospectableOutbound, null>) : $.pointerValue<Exclude<introspection.IntrospectableOutbound, null>>(o)).Introspect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as introspection.OutboundStatus)).clone()
			}
		}
		return ($.pointerValue<introspection.OutboundStatus>(introspection.__goscript_get_OutboundStatusNotSupported())).clone()
	}

	public async IsRunning(): globalThis.Promise<boolean> {
		const fo = this;
		return $.pointerValue<Exclude<transport.UnaryOutbound, null>>(fo.o).IsRunning()
	}

	public async Start(): globalThis.Promise<$.GoError> {
		const fo = this;
		return $.pointerValue<Exclude<transport.UnaryOutbound, null>>(fo.o).Start()
	}

	public async Stop(): globalThis.Promise<$.GoError> {
		const fo = this;
		return $.pointerValue<Exclude<transport.UnaryOutbound, null>>(fo.o).Stop()
	}

	public TransportName(): string {
		const fo = this;
		return fo.name
	}

	public async Transports(): globalThis.Promise<$.Slice<transport.Transport | null>> {
		const fo = this;
		return $.pointerValue<Exclude<transport.UnaryOutbound, null>>(fo.o).Transports()
	}

	static __typeInfo = $.registerStructType(
		"middleware.unaryOutboundWithMiddleware",
		() => new unaryOutboundWithMiddleware(),
		() => [$.methodSignature("Call", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")]], [/* @__PURE__ */ $.pointerType("transport.Response"), "error"]), $.methodSignature("Introspect", [], ["introspection.OutboundStatus"]), $.methodSignature("IsRunning", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Start", [], ["error"]), $.methodSignature("Stop", [], ["error"]), $.methodSignature("TransportName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Transports", [], [/* @__PURE__ */ $.sliceType("transport.Transport")])],
		unaryOutboundWithMiddleware,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/middleware" }), /* @__PURE__ */ $.structField("o", "transport.UnaryOutbound", [1], 16, false, { pkgPath: "go.uber.org/yarpc/api/middleware" }), /* @__PURE__ */ $.structField("f", "middleware.UnaryOutbound", [2], 32, false, { pkgPath: "go.uber.org/yarpc/api/middleware" })]
	)
}

export class nopUnaryOutbound {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nopUnaryOutbound {
		return new nopUnaryOutbound(this, true)
	}

	public __goscriptAssign(source: nopUnaryOutbound): void {
	}

	public async Call(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null, out: transport.UnaryOutbound | null): globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]> {
		return (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<transport.UnaryOutbound, null>) : $.pointerValue<Exclude<transport.UnaryOutbound, null>>(out)).Call(ctx, request)
	}

	static __typeInfo = $.registerStructType(
		"middleware.nopUnaryOutbound",
		() => new nopUnaryOutbound(),
		() => [$.methodSignature("Call", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")], ["out", "transport.UnaryOutbound"]], [/* @__PURE__ */ $.pointerType("transport.Response"), "error"])],
		nopUnaryOutbound,
		() => []
	)
}

export class onewayOutboundWithMiddleware {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get o(): transport.OnewayOutbound | null {
		return this._fields.o
	}

	public set o(value: transport.OnewayOutbound | null) {
		this._fields.o = value
	}

	public get f(): OnewayOutbound | null {
		return this._fields.f
	}

	public set f(value: OnewayOutbound | null) {
		this._fields.f = value
	}

	public _fields: {
		name: string
		o: transport.OnewayOutbound | null
		f: OnewayOutbound | null
	}

	constructor(init?: Partial<{name?: string, o?: transport.OnewayOutbound | null, f?: OnewayOutbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			o: init?.o ?? (null! as transport.OnewayOutbound | null),
			f: init?.f ?? (null! as OnewayOutbound | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): onewayOutboundWithMiddleware {
		return new onewayOutboundWithMiddleware(this, true)
	}

	public __goscriptAssign(source: onewayOutboundWithMiddleware): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.o = $.assignFieldValue(target.o, values.o, "transport.OnewayOutbound")
		target.f = $.assignFieldValue(target.f, values.f, "middleware.OnewayOutbound")
	}

	public async CallOneway(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<[transport.Ack | null, $.GoError]> {
		const fo = this;
		return $.pointerValue<Exclude<OnewayOutbound, null>>(fo.f).CallOneway(ctx, request, fo.o)
	}

	public async Introspect(): globalThis.Promise<introspection.OutboundStatus> {
		const fo = this;
		{
			let __goscriptTuple1: any = $.typeAssertTuple<introspection.IntrospectableOutbound | null>(fo.o, "introspection.IntrospectableOutbound")
			let o = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				return (((__goscriptAwait = (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? (o as Exclude<introspection.IntrospectableOutbound, null>) : $.pointerValue<Exclude<introspection.IntrospectableOutbound, null>>(o)).Introspect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as introspection.OutboundStatus)).clone()
			}
		}
		return ($.pointerValue<introspection.OutboundStatus>(introspection.__goscript_get_OutboundStatusNotSupported())).clone()
	}

	public async IsRunning(): globalThis.Promise<boolean> {
		const fo = this;
		return $.pointerValue<Exclude<transport.OnewayOutbound, null>>(fo.o).IsRunning()
	}

	public async Start(): globalThis.Promise<$.GoError> {
		const fo = this;
		return $.pointerValue<Exclude<transport.OnewayOutbound, null>>(fo.o).Start()
	}

	public async Stop(): globalThis.Promise<$.GoError> {
		const fo = this;
		return $.pointerValue<Exclude<transport.OnewayOutbound, null>>(fo.o).Stop()
	}

	public TransportName(): string {
		const fo = this;
		return fo.name
	}

	public async Transports(): globalThis.Promise<$.Slice<transport.Transport | null>> {
		const fo = this;
		return $.pointerValue<Exclude<transport.OnewayOutbound, null>>(fo.o).Transports()
	}

	static __typeInfo = $.registerStructType(
		"middleware.onewayOutboundWithMiddleware",
		() => new onewayOutboundWithMiddleware(),
		() => [$.methodSignature("CallOneway", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")]], ["transport.Ack", "error"]), $.methodSignature("Introspect", [], ["introspection.OutboundStatus"]), $.methodSignature("IsRunning", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Start", [], ["error"]), $.methodSignature("Stop", [], ["error"]), $.methodSignature("TransportName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Transports", [], [/* @__PURE__ */ $.sliceType("transport.Transport")])],
		onewayOutboundWithMiddleware,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/middleware" }), /* @__PURE__ */ $.structField("o", "transport.OnewayOutbound", [1], 16, false, { pkgPath: "go.uber.org/yarpc/api/middleware" }), /* @__PURE__ */ $.structField("f", "middleware.OnewayOutbound", [2], 32, false, { pkgPath: "go.uber.org/yarpc/api/middleware" })]
	)
}

export class nopOnewayOutbound {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nopOnewayOutbound {
		return new nopOnewayOutbound(this, true)
	}

	public __goscriptAssign(source: nopOnewayOutbound): void {
	}

	public async CallOneway(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null, out: transport.OnewayOutbound | null): globalThis.Promise<[transport.Ack | null, $.GoError]> {
		return (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<transport.OnewayOutbound, null>) : $.pointerValue<Exclude<transport.OnewayOutbound, null>>(out)).CallOneway(ctx, request)
	}

	static __typeInfo = $.registerStructType(
		"middleware.nopOnewayOutbound",
		() => new nopOnewayOutbound(),
		() => [$.methodSignature("CallOneway", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")], ["out", "transport.OnewayOutbound"]], ["transport.Ack", "error"])],
		nopOnewayOutbound,
		() => []
	)
}

export class streamOutboundWithMiddleware {
	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get o(): transport.StreamOutbound | null {
		return this._fields.o
	}

	public set o(value: transport.StreamOutbound | null) {
		this._fields.o = value
	}

	public get f(): StreamOutbound | null {
		return this._fields.f
	}

	public set f(value: StreamOutbound | null) {
		this._fields.f = value
	}

	public _fields: {
		name: string
		o: transport.StreamOutbound | null
		f: StreamOutbound | null
	}

	constructor(init?: Partial<{name?: string, o?: transport.StreamOutbound | null, f?: StreamOutbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			name: init?.name ?? ("" as string),
			o: init?.o ?? (null! as transport.StreamOutbound | null),
			f: init?.f ?? (null! as StreamOutbound | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): streamOutboundWithMiddleware {
		return new streamOutboundWithMiddleware(this, true)
	}

	public __goscriptAssign(source: streamOutboundWithMiddleware): void {
		const target = this._fields
		const values = source._fields
		target.name = values.name
		target.o = $.assignFieldValue(target.o, values.o, "transport.StreamOutbound")
		target.f = $.assignFieldValue(target.f, values.f, "middleware.StreamOutbound")
	}

	public async CallStream(ctx: context.Context | null, request: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null): globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]> {
		const fo = this;
		return $.pointerValue<Exclude<StreamOutbound, null>>(fo.f).CallStream(ctx, request, fo.o)
	}

	public async IsRunning(): globalThis.Promise<boolean> {
		const fo = this;
		return $.pointerValue<Exclude<transport.StreamOutbound, null>>(fo.o).IsRunning()
	}

	public async Start(): globalThis.Promise<$.GoError> {
		const fo = this;
		return $.pointerValue<Exclude<transport.StreamOutbound, null>>(fo.o).Start()
	}

	public async Stop(): globalThis.Promise<$.GoError> {
		const fo = this;
		return $.pointerValue<Exclude<transport.StreamOutbound, null>>(fo.o).Stop()
	}

	public TransportName(): string {
		const fo = this;
		return fo.name
	}

	public async Transports(): globalThis.Promise<$.Slice<transport.Transport | null>> {
		const fo = this;
		return $.pointerValue<Exclude<transport.StreamOutbound, null>>(fo.o).Transports()
	}

	static __typeInfo = $.registerStructType(
		"middleware.streamOutboundWithMiddleware",
		() => new streamOutboundWithMiddleware(),
		() => [$.methodSignature("CallStream", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.StreamRequest")]], [/* @__PURE__ */ $.pointerType("transport.ClientStream"), "error"]), $.methodSignature("IsRunning", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Start", [], ["error"]), $.methodSignature("Stop", [], ["error"]), $.methodSignature("TransportName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Transports", [], [/* @__PURE__ */ $.sliceType("transport.Transport")])],
		streamOutboundWithMiddleware,
		() => [/* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/middleware" }), /* @__PURE__ */ $.structField("o", "transport.StreamOutbound", [1], 16, false, { pkgPath: "go.uber.org/yarpc/api/middleware" }), /* @__PURE__ */ $.structField("f", "middleware.StreamOutbound", [2], 32, false, { pkgPath: "go.uber.org/yarpc/api/middleware" })]
	)
}

export class nopStreamOutbound {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nopStreamOutbound {
		return new nopStreamOutbound(this, true)
	}

	public __goscriptAssign(source: nopStreamOutbound): void {
	}

	public async CallStream(ctx: context.Context | null, request: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null, out: transport.StreamOutbound | null): globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]> {
		return (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<transport.StreamOutbound, null>) : $.pointerValue<Exclude<transport.StreamOutbound, null>>(out)).CallStream(ctx, request)
	}

	static __typeInfo = $.registerStructType(
		"middleware.nopStreamOutbound",
		() => new nopStreamOutbound(),
		() => [$.methodSignature("CallStream", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.StreamRequest")], ["out", "transport.StreamOutbound"]], [/* @__PURE__ */ $.pointerType("transport.ClientStream"), "error"])],
		nopStreamOutbound,
		() => []
	)
}

export let NopUnaryOutbound: UnaryOutbound | null = $.interfaceValue<UnaryOutbound | null>(new nopUnaryOutbound(undefined, true), "middleware.nopUnaryOutbound", "middleware.nopUnaryOutbound")

export function __goscript_set_NopUnaryOutbound(__goscriptValue: UnaryOutbound | null): void {
	NopUnaryOutbound = __goscriptValue
}

export async function ApplyUnaryOutbound(o: transport.UnaryOutbound | null, f: UnaryOutbound | null): globalThis.Promise<transport.UnaryOutbound | null> {
	if (f == null) {
		return o
	}

	let name: string = ""
	{
		let [namer, ok] = $.typeAssertTuple<transport.Namer | null>(o, "transport.Namer")
		if (ok) {
			name = (__goscriptAwait = (namer !== null && (namer as any).__isVarRef !== true && (namer as any).__goValue === undefined ? (namer as Exclude<transport.Namer, null>) : $.pointerValue<Exclude<transport.Namer, null>>(namer)).TransportName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	return $.interfaceValue<transport.UnaryOutbound | null>(new unaryOutboundWithMiddleware({o: o, f: f, name: name}, true), "middleware.unaryOutboundWithMiddleware", "middleware.unaryOutboundWithMiddleware")
}

export async function UnaryOutboundFunc_Call(f: UnaryOutboundFunc | null, ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null, out: transport.UnaryOutbound | null): globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]> {
	return f!(ctx, request, out)
}

export let NopOnewayOutbound: OnewayOutbound | null = $.interfaceValue<OnewayOutbound | null>(new nopOnewayOutbound(undefined, true), "middleware.nopOnewayOutbound", "middleware.nopOnewayOutbound")

export function __goscript_set_NopOnewayOutbound(__goscriptValue: OnewayOutbound | null): void {
	NopOnewayOutbound = __goscriptValue
}

export async function ApplyOnewayOutbound(o: transport.OnewayOutbound | null, f: OnewayOutbound | null): globalThis.Promise<transport.OnewayOutbound | null> {
	if (f == null) {
		return o
	}

	let name: string = ""
	{
		let [namer, ok] = $.typeAssertTuple<transport.Namer | null>(o, "transport.Namer")
		if (ok) {
			name = (__goscriptAwait = (namer !== null && (namer as any).__isVarRef !== true && (namer as any).__goValue === undefined ? (namer as Exclude<transport.Namer, null>) : $.pointerValue<Exclude<transport.Namer, null>>(namer)).TransportName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	return $.interfaceValue<transport.OnewayOutbound | null>(new onewayOutboundWithMiddleware({o: o, f: f, name: name}, true), "middleware.onewayOutboundWithMiddleware", "middleware.onewayOutboundWithMiddleware")
}

export async function OnewayOutboundFunc_CallOneway(f: OnewayOutboundFunc | null, ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null, out: transport.OnewayOutbound | null): globalThis.Promise<[transport.Ack | null, $.GoError]> {
	return f!(ctx, request, out)
}

export let NopStreamOutbound: StreamOutbound | null = $.interfaceValue<StreamOutbound | null>(new nopStreamOutbound(undefined, true), "middleware.nopStreamOutbound", "middleware.nopStreamOutbound")

export function __goscript_set_NopStreamOutbound(__goscriptValue: StreamOutbound | null): void {
	NopStreamOutbound = __goscriptValue
}

export async function ApplyStreamOutbound(o: transport.StreamOutbound | null, f: StreamOutbound | null): globalThis.Promise<transport.StreamOutbound | null> {
	if (f == null) {
		return o
	}

	let name: string = ""
	{
		let [namer, ok] = $.typeAssertTuple<transport.Namer | null>(o, "transport.Namer")
		if (ok) {
			name = (__goscriptAwait = (namer !== null && (namer as any).__isVarRef !== true && (namer as any).__goValue === undefined ? (namer as Exclude<transport.Namer, null>) : $.pointerValue<Exclude<transport.Namer, null>>(namer)).TransportName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	return $.interfaceValue<transport.StreamOutbound | null>(new streamOutboundWithMiddleware({o: o, f: f, name: name}, true), "middleware.streamOutboundWithMiddleware", "middleware.streamOutboundWithMiddleware")
}

export async function StreamOutboundFunc_CallStream(f: StreamOutboundFunc | null, ctx: context.Context | null, request: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null, out: transport.StreamOutbound | null): globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]> {
	return f!(ctx, request, out)
}

var __goscriptAwait: any
