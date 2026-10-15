// Generated file based on outbound.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/internal/interceptor", ["interceptor.UnaryOutboundChain", "interceptor.OnewayOutboundChain", "interceptor.StreamOutboundChain", "interceptor.UnaryOutbound", "interceptor.OnewayOutbound", "interceptor.StreamOutbound", "interceptor.DirectUnaryOutbound", "interceptor.DirectOnewayOutbound", "interceptor.DirectStreamOutbound", "interceptor.nopUnaryOutbound", "interceptor.nopOnewayOutbound", "interceptor.nopStreamOutbound", "interceptor.unaryOutboundWithInterceptor", "interceptor.onewayOutboundWithInterceptor", "interceptor.streamOutboundWithInterceptor"])

export type UnaryOutboundChain = {
	Next(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null): [transport.Response | $.VarRef<transport.Response> | null, $.GoError] | globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]>
	Outbound(): transport.Outbound | null
}

$.registerInterfaceType(
	"interceptor.UnaryOutboundChain",
	null,
	[{ name: "Next", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.Response") }, { type: "error" }] }, { name: "Outbound", args: [], returns: [{ type: "transport.Outbound" }] }]
);

export type OnewayOutboundChain = {
	Next(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null): [transport.Ack | null, $.GoError] | globalThis.Promise<[transport.Ack | null, $.GoError]>
	Outbound(): transport.Outbound | null
}

$.registerInterfaceType(
	"interceptor.OnewayOutboundChain",
	null,
	[{ name: "Next", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "transport.Ack" }, { type: "error" }] }, { name: "Outbound", args: [], returns: [{ type: "transport.Outbound" }] }]
);

export type StreamOutboundChain = {
	Next(ctx: context.Context | null, request: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null): [transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError] | globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]>
	Outbound(): transport.Outbound | null
}

$.registerInterfaceType(
	"interceptor.StreamOutboundChain",
	null,
	[{ name: "Next", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.ClientStream") }, { type: "error" }] }, { name: "Outbound", args: [], returns: [{ type: "transport.Outbound" }] }]
);

export type UnaryOutbound = {
	Call(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null, out: UnaryOutboundChain | null): [transport.Response | $.VarRef<transport.Response> | null, $.GoError] | globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]>
}

$.registerInterfaceType(
	"interceptor.UnaryOutbound",
	null,
	[{ name: "Call", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.Response") }, { type: "error" }] }]
);

export type OnewayOutbound = {
	CallOneway(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null, out: OnewayOutboundChain | null): [transport.Ack | null, $.GoError] | globalThis.Promise<[transport.Ack | null, $.GoError]>
}

$.registerInterfaceType(
	"interceptor.OnewayOutbound",
	null,
	[{ name: "CallOneway", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "transport.Ack" }, { type: "error" }] }]
);

export type StreamOutbound = {
	CallStream(ctx: context.Context | null, req: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null, out: StreamOutboundChain | null): [transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError] | globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]>
}

$.registerInterfaceType(
	"interceptor.StreamOutbound",
	null,
	[{ name: "CallStream", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.ClientStream") }, { type: "error" }] }]
);

export type DirectUnaryOutbound = {
	DirectCall(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null): [transport.Response | $.VarRef<transport.Response> | null, $.GoError] | globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]>
	IsRunning(): boolean | globalThis.Promise<boolean>
	Start(): $.GoError
	Stop(): $.GoError
	Transports(): $.Slice<transport.Transport | null>
}

$.registerInterfaceType(
	"interceptor.DirectUnaryOutbound",
	null,
	[{ name: "DirectCall", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.Response") }, { type: "error" }] }, { name: "IsRunning", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "Start", args: [], returns: [{ type: "error" }] }, { name: "Stop", args: [], returns: [{ type: "error" }] }, { name: "Transports", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType("transport.Transport") }] }]
);

export type DirectOnewayOutbound = {
	DirectCallOneway(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null): [transport.Ack | null, $.GoError]
	IsRunning(): boolean | globalThis.Promise<boolean>
	Start(): $.GoError
	Stop(): $.GoError
	Transports(): $.Slice<transport.Transport | null>
}

$.registerInterfaceType(
	"interceptor.DirectOnewayOutbound",
	null,
	[{ name: "DirectCallOneway", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "transport.Ack" }, { type: "error" }] }, { name: "IsRunning", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "Start", args: [], returns: [{ type: "error" }] }, { name: "Stop", args: [], returns: [{ type: "error" }] }, { name: "Transports", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType("transport.Transport") }] }]
);

export type DirectStreamOutbound = {
	DirectCallStream(ctx: context.Context | null, req: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null): [transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError] | globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]>
	IsRunning(): boolean | globalThis.Promise<boolean>
	Start(): $.GoError
	Stop(): $.GoError
	Transports(): $.Slice<transport.Transport | null>
}

$.registerInterfaceType(
	"interceptor.DirectStreamOutbound",
	null,
	[{ name: "DirectCallStream", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.ClientStream") }, { type: "error" }] }, { name: "IsRunning", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "Start", args: [], returns: [{ type: "error" }] }, { name: "Stop", args: [], returns: [{ type: "error" }] }, { name: "Transports", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType("transport.Transport") }] }]
);

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

	public async Call(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null, out: UnaryOutboundChain | null): globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]> {
		return (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<UnaryOutboundChain, null>) : $.pointerValue<Exclude<UnaryOutboundChain, null>>(out)).Next(ctx, request)
	}

	static __typeInfo = $.registerStructType(
		"interceptor.nopUnaryOutbound",
		() => new nopUnaryOutbound(),
		() => [{ name: "Call", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.Response") }, { type: "error" }] }],
		nopUnaryOutbound,
		() => []
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

	public async CallOneway(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null, out: OnewayOutboundChain | null): globalThis.Promise<[transport.Ack | null, $.GoError]> {
		return (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<OnewayOutboundChain, null>) : $.pointerValue<Exclude<OnewayOutboundChain, null>>(out)).Next(ctx, request)
	}

	static __typeInfo = $.registerStructType(
		"interceptor.nopOnewayOutbound",
		() => new nopOnewayOutbound(),
		() => [{ name: "CallOneway", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "transport.Ack" }, { type: "error" }] }],
		nopOnewayOutbound,
		() => []
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

	public async CallStream(ctx: context.Context | null, requestMeta: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null, out: StreamOutboundChain | null): globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]> {
		return (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<StreamOutboundChain, null>) : $.pointerValue<Exclude<StreamOutboundChain, null>>(out)).Next(ctx, requestMeta)
	}

	static __typeInfo = $.registerStructType(
		"interceptor.nopStreamOutbound",
		() => new nopStreamOutbound(),
		() => [{ name: "CallStream", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.ClientStream") }, { type: "error" }] }],
		nopStreamOutbound,
		() => []
	)
}

export class unaryOutboundWithInterceptor {
	public get Outbound(): transport.Outbound | null {
		return this._fields.Outbound
	}

	public set Outbound(value: transport.Outbound | null) {
		this._fields.Outbound = value
	}

	public get uo(): UnaryOutboundChain | null {
		return this._fields.uo
	}

	public set uo(value: UnaryOutboundChain | null) {
		this._fields.uo = value
	}

	public get i(): UnaryOutbound | null {
		return this._fields.i
	}

	public set i(value: UnaryOutbound | null) {
		this._fields.i = value
	}

	public _fields: {
		Outbound: transport.Outbound | null
		uo: UnaryOutboundChain | null
		i: UnaryOutbound | null
	}

	constructor(init?: Partial<{Outbound?: transport.Outbound | null, uo?: UnaryOutboundChain | null, i?: UnaryOutbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Outbound: init?.Outbound ?? (null! as transport.Outbound | null),
			uo: init?.uo ?? (null! as UnaryOutboundChain | null),
			i: init?.i ?? (null! as UnaryOutbound | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): unaryOutboundWithInterceptor {
		return new unaryOutboundWithInterceptor(this, true)
	}

	public __goscriptAssign(source: unaryOutboundWithInterceptor): void {
		const target = this._fields
		const values = source._fields
		target.Outbound = $.assignFieldValue(target.Outbound, values.Outbound, "transport.Outbound")
		target.uo = $.assignFieldValue(target.uo, values.uo, "interceptor.UnaryOutboundChain")
		target.i = $.assignFieldValue(target.i, values.i, "interceptor.UnaryOutbound")
	}

	public async Call(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]> {
		const uoc = this;
		return $.pointerValue<Exclude<UnaryOutbound, null>>(uoc.i).Call(ctx, request, uoc.uo)
	}

	public async IsRunning(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.Outbound | null, null>>(this.Outbound).IsRunning()
	}

	public Start(): any {
		return $.pointerValue<Exclude<transport.Outbound | null, null>>(this.Outbound).Start()
	}

	public Stop(): any {
		return $.pointerValue<Exclude<transport.Outbound | null, null>>(this.Outbound).Stop()
	}

	public Transports(): any {
		return $.pointerValue<Exclude<transport.Outbound | null, null>>(this.Outbound).Transports()
	}

	static __typeInfo = $.registerStructType(
		"interceptor.unaryOutboundWithInterceptor",
		() => new unaryOutboundWithInterceptor(),
		() => [{ name: "Call", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.Response") }, { type: "error" }] }, { name: "IsRunning", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "Start", args: [], returns: [{ type: "error" }] }, { name: "Stop", args: [], returns: [{ type: "error" }] }, { name: "Transports", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType("transport.Transport") }] }],
		unaryOutboundWithInterceptor,
		() => [{ name: "Outbound", key: "Outbound", type: "transport.Outbound", anonymous: true }, { name: "uo", key: "uo", type: "interceptor.UnaryOutboundChain" }, { name: "i", key: "i", type: "interceptor.UnaryOutbound" }]
	)
}

export class onewayOutboundWithInterceptor {
	public get Outbound(): transport.Outbound | null {
		return this._fields.Outbound
	}

	public set Outbound(value: transport.Outbound | null) {
		this._fields.Outbound = value
	}

	public get oo(): OnewayOutboundChain | null {
		return this._fields.oo
	}

	public set oo(value: OnewayOutboundChain | null) {
		this._fields.oo = value
	}

	public get i(): OnewayOutbound | null {
		return this._fields.i
	}

	public set i(value: OnewayOutbound | null) {
		this._fields.i = value
	}

	public _fields: {
		Outbound: transport.Outbound | null
		oo: OnewayOutboundChain | null
		i: OnewayOutbound | null
	}

	constructor(init?: Partial<{Outbound?: transport.Outbound | null, oo?: OnewayOutboundChain | null, i?: OnewayOutbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Outbound: init?.Outbound ?? (null! as transport.Outbound | null),
			oo: init?.oo ?? (null! as OnewayOutboundChain | null),
			i: init?.i ?? (null! as OnewayOutbound | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): onewayOutboundWithInterceptor {
		return new onewayOutboundWithInterceptor(this, true)
	}

	public __goscriptAssign(source: onewayOutboundWithInterceptor): void {
		const target = this._fields
		const values = source._fields
		target.Outbound = $.assignFieldValue(target.Outbound, values.Outbound, "transport.Outbound")
		target.oo = $.assignFieldValue(target.oo, values.oo, "interceptor.OnewayOutboundChain")
		target.i = $.assignFieldValue(target.i, values.i, "interceptor.OnewayOutbound")
	}

	public async CallOneway(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<[transport.Ack | null, $.GoError]> {
		const ooc = this;
		return $.pointerValue<Exclude<OnewayOutbound, null>>(ooc.i).CallOneway(ctx, request, ooc.oo)
	}

	public async IsRunning(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.Outbound | null, null>>(this.Outbound).IsRunning()
	}

	public Start(): any {
		return $.pointerValue<Exclude<transport.Outbound | null, null>>(this.Outbound).Start()
	}

	public Stop(): any {
		return $.pointerValue<Exclude<transport.Outbound | null, null>>(this.Outbound).Stop()
	}

	public Transports(): any {
		return $.pointerValue<Exclude<transport.Outbound | null, null>>(this.Outbound).Transports()
	}

	static __typeInfo = $.registerStructType(
		"interceptor.onewayOutboundWithInterceptor",
		() => new onewayOutboundWithInterceptor(),
		() => [{ name: "CallOneway", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "transport.Ack" }, { type: "error" }] }, { name: "IsRunning", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "Start", args: [], returns: [{ type: "error" }] }, { name: "Stop", args: [], returns: [{ type: "error" }] }, { name: "Transports", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType("transport.Transport") }] }],
		onewayOutboundWithInterceptor,
		() => [{ name: "Outbound", key: "Outbound", type: "transport.Outbound", anonymous: true }, { name: "oo", key: "oo", type: "interceptor.OnewayOutboundChain" }, { name: "i", key: "i", type: "interceptor.OnewayOutbound" }]
	)
}

export class streamOutboundWithInterceptor {
	public get Outbound(): transport.Outbound | null {
		return this._fields.Outbound
	}

	public set Outbound(value: transport.Outbound | null) {
		this._fields.Outbound = value
	}

	public get so(): StreamOutboundChain | null {
		return this._fields.so
	}

	public set so(value: StreamOutboundChain | null) {
		this._fields.so = value
	}

	public get i(): StreamOutbound | null {
		return this._fields.i
	}

	public set i(value: StreamOutbound | null) {
		this._fields.i = value
	}

	public _fields: {
		Outbound: transport.Outbound | null
		so: StreamOutboundChain | null
		i: StreamOutbound | null
	}

	constructor(init?: Partial<{Outbound?: transport.Outbound | null, so?: StreamOutboundChain | null, i?: StreamOutbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Outbound: init?.Outbound ?? (null! as transport.Outbound | null),
			so: init?.so ?? (null! as StreamOutboundChain | null),
			i: init?.i ?? (null! as StreamOutbound | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): streamOutboundWithInterceptor {
		return new streamOutboundWithInterceptor(this, true)
	}

	public __goscriptAssign(source: streamOutboundWithInterceptor): void {
		const target = this._fields
		const values = source._fields
		target.Outbound = $.assignFieldValue(target.Outbound, values.Outbound, "transport.Outbound")
		target.so = $.assignFieldValue(target.so, values.so, "interceptor.StreamOutboundChain")
		target.i = $.assignFieldValue(target.i, values.i, "interceptor.StreamOutbound")
	}

	public async CallStream(ctx: context.Context | null, requestMeta: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null): globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]> {
		const soc = this;
		return $.pointerValue<Exclude<StreamOutbound, null>>(soc.i).CallStream(ctx, requestMeta, soc.so)
	}

	public async IsRunning(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.Outbound | null, null>>(this.Outbound).IsRunning()
	}

	public Start(): any {
		return $.pointerValue<Exclude<transport.Outbound | null, null>>(this.Outbound).Start()
	}

	public Stop(): any {
		return $.pointerValue<Exclude<transport.Outbound | null, null>>(this.Outbound).Stop()
	}

	public Transports(): any {
		return $.pointerValue<Exclude<transport.Outbound | null, null>>(this.Outbound).Transports()
	}

	static __typeInfo = $.registerStructType(
		"interceptor.streamOutboundWithInterceptor",
		() => new streamOutboundWithInterceptor(),
		() => [{ name: "CallStream", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.ClientStream") }, { type: "error" }] }, { name: "IsRunning", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }] }, { name: "Start", args: [], returns: [{ type: "error" }] }, { name: "Stop", args: [], returns: [{ type: "error" }] }, { name: "Transports", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType("transport.Transport") }] }],
		streamOutboundWithInterceptor,
		() => [{ name: "Outbound", key: "Outbound", type: "transport.Outbound", anonymous: true }, { name: "so", key: "so", type: "interceptor.StreamOutboundChain" }, { name: "i", key: "i", type: "interceptor.StreamOutbound" }]
	)
}

export let NopUnaryOutbound: UnaryOutbound | null = $.interfaceValue<UnaryOutbound | null>(new nopUnaryOutbound(undefined, true), "interceptor.nopUnaryOutbound", "interceptor.nopUnaryOutbound")

export function __goscript_set_NopUnaryOutbound(__goscriptValue: UnaryOutbound | null): void {
	NopUnaryOutbound = __goscriptValue
}

export let NopOnewayOutbound: OnewayOutbound | null = $.interfaceValue<OnewayOutbound | null>(new nopOnewayOutbound(undefined, true), "interceptor.nopOnewayOutbound", "interceptor.nopOnewayOutbound")

export function __goscript_set_NopOnewayOutbound(__goscriptValue: OnewayOutbound | null): void {
	NopOnewayOutbound = __goscriptValue
}

export let NopStreamOutbound: StreamOutbound | null = $.interfaceValue<StreamOutbound | null>(new nopStreamOutbound(undefined, true), "interceptor.nopStreamOutbound", "interceptor.nopStreamOutbound")

export function __goscript_set_NopStreamOutbound(__goscriptValue: StreamOutbound | null): void {
	NopStreamOutbound = __goscriptValue
}

export function ApplyUnaryOutbound(uo: UnaryOutboundChain | null, i: UnaryOutbound | null): transport.UnaryOutbound | null {
	return $.interfaceValue<transport.UnaryOutbound | null>(new unaryOutboundWithInterceptor({uo: uo, i: i}, true), "interceptor.unaryOutboundWithInterceptor", "interceptor.unaryOutboundWithInterceptor")
}

export function ApplyOnewayOutbound(oo: OnewayOutboundChain | null, i: OnewayOutbound | null): transport.OnewayOutbound | null {
	return $.interfaceValue<transport.OnewayOutbound | null>(new onewayOutboundWithInterceptor({oo: oo, i: i}, true), "interceptor.onewayOutboundWithInterceptor", "interceptor.onewayOutboundWithInterceptor")
}

export function ApplyStreamOutbound(so: StreamOutboundChain | null, i: StreamOutbound | null): transport.StreamOutbound | null {
	return $.interfaceValue<transport.StreamOutbound | null>(new streamOutboundWithInterceptor({so: so, i: i}, true), "interceptor.streamOutboundWithInterceptor", "interceptor.streamOutboundWithInterceptor")
}
