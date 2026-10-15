// Generated file based on chain.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as interceptor from "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/internal/interceptor/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/internal/interceptor/outboundinterceptor", ["outboundinterceptor.unaryChainExec", "outboundinterceptor.onewayChainExec", "outboundinterceptor.streamChainExec"])

export class unaryChainExec {
	public get Chain(): $.Slice<interceptor.UnaryOutbound | null> {
		return this._fields.Chain
	}

	public set Chain(value: $.Slice<interceptor.UnaryOutbound | null>) {
		this._fields.Chain = value
	}

	public get Final(): interceptor.DirectUnaryOutbound | null {
		return this._fields.Final
	}

	public set Final(value: interceptor.DirectUnaryOutbound | null) {
		this._fields.Final = value
	}

	public _fields: {
		Chain: $.Slice<interceptor.UnaryOutbound | null>
		Final: interceptor.DirectUnaryOutbound | null
	}

	constructor(init?: Partial<{Chain?: $.Slice<interceptor.UnaryOutbound | null>, Final?: interceptor.DirectUnaryOutbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Chain: init?.Chain ?? (null! as $.Slice<interceptor.UnaryOutbound | null>),
			Final: init?.Final ?? (null! as interceptor.DirectUnaryOutbound | null)
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
		target.Final = $.assignFieldValue(target.Final, values.Final, "interceptor.DirectUnaryOutbound")
	}

	public async Next(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]> {
		let x: unaryChainExec = this;
		if ($.sliceLen(x.Chain) == 0) {
			return $.pointerValue<Exclude<interceptor.DirectUnaryOutbound, null>>(x.Final).DirectCall(ctx, request)
		}
		let next = $.arrayIndex(x.Chain!, 0)
		x.Chain = $.goSlice(x.Chain, 1, undefined)
		return (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<interceptor.UnaryOutbound, null>) : $.pointerValue<Exclude<interceptor.UnaryOutbound, null>>(next)).Call(ctx, request, $.interfaceValue<interceptor.UnaryOutboundChain | null>((x).clone(), "outboundinterceptor.unaryChainExec", "outboundinterceptor.unaryChainExec"))
	}

	public Outbound(): transport.Outbound | null {
		const x = this;
		return (x.Final as transport.Outbound | null)
	}

	static __typeInfo = $.registerStructType(
		"outboundinterceptor.unaryChainExec",
		() => new unaryChainExec(),
		() => [{ name: "Next", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.Response") }, { type: "error" }] }, { name: "Outbound", args: [], returns: [{ type: "transport.Outbound" }] }],
		unaryChainExec,
		() => [{ name: "Chain", key: "Chain", type: /* @__PURE__ */ $.sliceType("interceptor.UnaryOutbound") }, { name: "Final", key: "Final", type: "interceptor.DirectUnaryOutbound" }]
	)
}

export class onewayChainExec {
	public get Chain(): $.Slice<interceptor.OnewayOutbound | null> {
		return this._fields.Chain
	}

	public set Chain(value: $.Slice<interceptor.OnewayOutbound | null>) {
		this._fields.Chain = value
	}

	public get Final(): interceptor.DirectOnewayOutbound | null {
		return this._fields.Final
	}

	public set Final(value: interceptor.DirectOnewayOutbound | null) {
		this._fields.Final = value
	}

	public _fields: {
		Chain: $.Slice<interceptor.OnewayOutbound | null>
		Final: interceptor.DirectOnewayOutbound | null
	}

	constructor(init?: Partial<{Chain?: $.Slice<interceptor.OnewayOutbound | null>, Final?: interceptor.DirectOnewayOutbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Chain: init?.Chain ?? (null! as $.Slice<interceptor.OnewayOutbound | null>),
			Final: init?.Final ?? (null! as interceptor.DirectOnewayOutbound | null)
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
		target.Final = $.assignFieldValue(target.Final, values.Final, "interceptor.DirectOnewayOutbound")
	}

	public async DirectCallOneway(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<[transport.Ack | null, $.GoError]> {
		let x: onewayChainExec = this;
		if ($.sliceLen(x.Chain) == 0) {
			return $.pointerValue<Exclude<interceptor.DirectOnewayOutbound, null>>(x.Final).DirectCallOneway(ctx, request)
		}
		let next = $.arrayIndex(x.Chain!, 0)
		x.Chain = $.goSlice(x.Chain, 1, undefined)
		return (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<interceptor.OnewayOutbound, null>) : $.pointerValue<Exclude<interceptor.OnewayOutbound, null>>(next)).CallOneway(ctx, request, $.interfaceValue<interceptor.OnewayOutboundChain | null>((x).clone(), "outboundinterceptor.onewayChainExec", "outboundinterceptor.onewayChainExec"))
	}

	public async Next(ctx: context.Context | null, request: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<[transport.Ack | null, $.GoError]> {
		let x: onewayChainExec = this;
		if ($.sliceLen(x.Chain) == 0) {
			return $.pointerValue<Exclude<interceptor.DirectOnewayOutbound, null>>(x.Final).DirectCallOneway(ctx, request)
		}
		let next = $.arrayIndex(x.Chain!, 0)
		x.Chain = $.goSlice(x.Chain, 1, undefined)
		return (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<interceptor.OnewayOutbound, null>) : $.pointerValue<Exclude<interceptor.OnewayOutbound, null>>(next)).CallOneway(ctx, request, $.interfaceValue<interceptor.OnewayOutboundChain | null>((x).clone(), "outboundinterceptor.onewayChainExec", "outboundinterceptor.onewayChainExec"))
	}

	public Outbound(): transport.Outbound | null {
		const x = this;
		return (x.Final as transport.Outbound | null)
	}

	static __typeInfo = $.registerStructType(
		"outboundinterceptor.onewayChainExec",
		() => new onewayChainExec(),
		() => [{ name: "DirectCallOneway", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "transport.Ack" }, { type: "error" }] }, { name: "Next", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "transport.Ack" }, { type: "error" }] }, { name: "Outbound", args: [], returns: [{ type: "transport.Outbound" }] }],
		onewayChainExec,
		() => [{ name: "Chain", key: "Chain", type: /* @__PURE__ */ $.sliceType("interceptor.OnewayOutbound") }, { name: "Final", key: "Final", type: "interceptor.DirectOnewayOutbound" }]
	)
}

export class streamChainExec {
	public get Chain(): $.Slice<interceptor.StreamOutbound | null> {
		return this._fields.Chain
	}

	public set Chain(value: $.Slice<interceptor.StreamOutbound | null>) {
		this._fields.Chain = value
	}

	public get Final(): interceptor.DirectStreamOutbound | null {
		return this._fields.Final
	}

	public set Final(value: interceptor.DirectStreamOutbound | null) {
		this._fields.Final = value
	}

	public _fields: {
		Chain: $.Slice<interceptor.StreamOutbound | null>
		Final: interceptor.DirectStreamOutbound | null
	}

	constructor(init?: Partial<{Chain?: $.Slice<interceptor.StreamOutbound | null>, Final?: interceptor.DirectStreamOutbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Chain: init?.Chain ?? (null! as $.Slice<interceptor.StreamOutbound | null>),
			Final: init?.Final ?? (null! as interceptor.DirectStreamOutbound | null)
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
		target.Final = $.assignFieldValue(target.Final, values.Final, "interceptor.DirectStreamOutbound")
	}

	public async DirectCallStream(ctx: context.Context | null, request: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null): globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]> {
		let x: streamChainExec = this;
		if ($.sliceLen(x.Chain) == 0) {
			return $.pointerValue<Exclude<interceptor.DirectStreamOutbound, null>>(x.Final).DirectCallStream(ctx, request)
		}
		let next = $.arrayIndex(x.Chain!, 0)
		x.Chain = $.goSlice(x.Chain, 1, undefined)
		return (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<interceptor.StreamOutbound, null>) : $.pointerValue<Exclude<interceptor.StreamOutbound, null>>(next)).CallStream(ctx, request, $.interfaceValue<interceptor.StreamOutboundChain | null>((x).clone(), "outboundinterceptor.streamChainExec", "outboundinterceptor.streamChainExec"))
	}

	public async Next(ctx: context.Context | null, request: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null): globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]> {
		let x: streamChainExec = this;
		if ($.sliceLen(x.Chain) == 0) {
			return $.pointerValue<Exclude<interceptor.DirectStreamOutbound, null>>(x.Final).DirectCallStream(ctx, request)
		}
		let next = $.arrayIndex(x.Chain!, 0)
		x.Chain = $.goSlice(x.Chain, 1, undefined)
		return (next !== null && (next as any).__isVarRef !== true && (next as any).__goValue === undefined ? (next as Exclude<interceptor.StreamOutbound, null>) : $.pointerValue<Exclude<interceptor.StreamOutbound, null>>(next)).CallStream(ctx, request, $.interfaceValue<interceptor.StreamOutboundChain | null>((x).clone(), "outboundinterceptor.streamChainExec", "outboundinterceptor.streamChainExec"))
	}

	public Outbound(): transport.Outbound | null {
		const x = this;
		return (x.Final as transport.Outbound | null)
	}

	static __typeInfo = $.registerStructType(
		"outboundinterceptor.streamChainExec",
		() => new streamChainExec(),
		() => [{ name: "DirectCallStream", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.ClientStream") }, { type: "error" }] }, { name: "Next", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.ClientStream") }, { type: "error" }] }, { name: "Outbound", args: [], returns: [{ type: "transport.Outbound" }] }],
		streamChainExec,
		() => [{ name: "Chain", key: "Chain", type: /* @__PURE__ */ $.sliceType("interceptor.StreamOutbound") }, { name: "Final", key: "Final", type: "interceptor.DirectStreamOutbound" }]
	)
}

export function NewUnaryChain(out: interceptor.DirectUnaryOutbound | null, list: $.Slice<interceptor.UnaryOutbound | null>): interceptor.UnaryOutboundChain | null {
	return $.interfaceValue<interceptor.UnaryOutboundChain | null>(new unaryChainExec({Chain: list, Final: out}, true), "outboundinterceptor.unaryChainExec", "outboundinterceptor.unaryChainExec")
}

export function NewOnewayChain(out: interceptor.DirectOnewayOutbound | null, list: $.Slice<interceptor.OnewayOutbound | null>): interceptor.OnewayOutboundChain | null {
	return $.interfaceValue<interceptor.OnewayOutboundChain | null>(new onewayChainExec({Chain: list, Final: out}, true), "outboundinterceptor.onewayChainExec", "outboundinterceptor.onewayChainExec")
}

export function NewStreamChain(out: interceptor.DirectStreamOutbound | null, list: $.Slice<interceptor.StreamOutbound | null>): interceptor.StreamOutboundChain | null {
	return $.interfaceValue<interceptor.StreamOutboundChain | null>(new streamChainExec({Chain: list, Final: out}, true), "outboundinterceptor.streamChainExec", "outboundinterceptor.streamChainExec")
}
