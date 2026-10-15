// Generated file based on call.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as iter from "@goscript/iter/index.js"

import * as encoding from "@goscript/go.uber.org/yarpc/api/encoding/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as inboundcall from "@goscript/go.uber.org/yarpc/internal/inboundcall/index.js"
import "@goscript/context/index.js"
import "@goscript/iter/index.js"
import "@goscript/go.uber.org/yarpc/api/encoding/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/internal/inboundcall/index.js"

$.registerTypePackagePath("go.uber.org/yarpc", ["yarpc.CallOption", "yarpc.Call", "yarpc.StreamOption"])

export type StreamOption = {
	unimplemented(): void
}

$.registerInterfaceType(
	"yarpc.StreamOption",
	null,
	[$.methodSignature("unimplemented")]
);

export class CallOption {
	public get opt(): encoding.callOption | null {
		return this._fields.opt
	}

	public set opt(value: encoding.callOption | null) {
		this._fields.opt = value
	}

	public _fields: {
		opt: encoding.callOption | null
	}

	constructor(init?: Partial<{opt?: encoding.callOption | null}>, __goscriptValue?: boolean) {
		this._fields = {
			opt: init?.opt ?? (null! as encoding.callOption | null)
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
		"yarpc.CallOption",
		() => new CallOption(),
		() => [],
		CallOption,
		() => [/* @__PURE__ */ $.structField("opt", "encoding.callOption", [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/encoding" })]
	)
}

export class Call {
	public get md(): inboundcall.Metadata | null {
		return this._fields.md
	}

	public set md(value: inboundcall.Metadata | null) {
		this._fields.md = value
	}

	public _fields: {
		md: inboundcall.Metadata | null
	}

	constructor(init?: Partial<{md?: inboundcall.Metadata | null}>, __goscriptValue?: boolean) {
		this._fields = {
			md: init?.md ?? (null! as inboundcall.Metadata | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Call {
		return new Call(this, true)
	}

	public __goscriptAssign(source: Call): void {
		const target = this._fields
		const values = source._fields
		target.md = $.assignFieldValue(target.md, values.md, "inboundcall.Metadata")
	}

	public async Caller(): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.Caller.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call))
	}

	public async CallerProcedure(): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.CallerProcedure.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call))
	}

	public async Encoding(): globalThis.Promise<transport.Encoding> {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.Encoding.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call))
	}

	public async Header(k: string): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.Header.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call), k)
	}

	public async HeaderNames(): globalThis.Promise<$.Slice<string>> {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.HeaderNames.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call))
	}

	public HeaderNamesAll(): iter.Seq<string> | null {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.HeaderNamesAll.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call))
	}

	public async Headers(): globalThis.Promise<globalThis.Map<string, string> | null> {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.Headers.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call))
	}

	public HeadersAll(): iter.Seq2<string, string> | null {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.HeadersAll.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call))
	}

	public async HeadersLen(): globalThis.Promise<number> {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.HeadersLen.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call))
	}

	public async OriginalHeader(k: string): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.OriginalHeader.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call), k)
	}

	public async OriginalHeaders(): globalThis.Promise<globalThis.Map<string, string> | null> {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.OriginalHeaders.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call))
	}

	public OriginalHeadersAll(): iter.Seq2<string, string> | null {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.OriginalHeadersAll.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call))
	}

	public async OriginalHeadersLen(): globalThis.Promise<number> {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.OriginalHeadersLen.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call))
	}

	public async Procedure(): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.Procedure.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call))
	}

	public async RoutingDelegate(): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.RoutingDelegate.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call))
	}

	public async RoutingKey(): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.RoutingKey.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call))
	}

	public async Service(): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.Service.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call))
	}

	public async ShardKey(): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.ShardKey.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call))
	}

	public async Transport(): globalThis.Promise<string> {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.Transport.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call))
	}

	public async WriteResponseHeader(k: string, v: string): globalThis.Promise<$.GoError> {
		const c: Call | $.VarRef<Call> | null = this;
		return encoding.Call.prototype.WriteResponseHeader.call($.unsafePointerCast<encoding.Call | $.VarRef<encoding.Call> | null>(c, encoding.Call), k, v)
	}

	static __typeInfo = $.registerStructType(
		"yarpc.Call",
		() => new Call(),
		() => [$.methodSignature("Caller", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("CallerProcedure", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Encoding", [], [/* @__PURE__ */ $.basicType("string", "transport.Encoding")], true), $.methodSignature("Header", [["k", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("HeaderNames", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("HeaderNamesAll", [], [({ kind: $.TypeKind.Function, name: "iter.Seq", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("Headers", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("HeadersAll", [], [({ kind: $.TypeKind.Function, name: "iter.Seq2", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("HeadersLen", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("OriginalHeader", [["k", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("OriginalHeaders", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("OriginalHeadersAll", [], [({ kind: $.TypeKind.Function, name: "iter.Seq2", params: [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("OriginalHeadersLen", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Procedure", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("RoutingDelegate", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("RoutingKey", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Service", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ShardKey", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Transport", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("WriteResponseHeader", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("string")]], ["error"], true)],
		Call,
		() => [/* @__PURE__ */ $.structField("md", "inboundcall.Metadata", [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/encoding" })]
	)
}

export function ResponseHeaders(h: $.VarRef<globalThis.Map<string, string> | null> | null): CallOption {
	return ((() => { const __goscriptConvert0 = encoding.ResponseHeaders(h); return $.markAsStructValue(new CallOption({opt: __goscriptConvert0.opt})) })()).clone()
}

export function WithHeader(k: string, v: string): CallOption {
	return ((() => { const __goscriptConvert1 = encoding.WithHeader(k, v); return $.markAsStructValue(new CallOption({opt: __goscriptConvert1.opt})) })()).clone()
}

export function WithShardKey(sk: string): CallOption {
	return ((() => { const __goscriptConvert2 = encoding.WithShardKey(sk); return $.markAsStructValue(new CallOption({opt: __goscriptConvert2.opt})) })()).clone()
}

export function WithRoutingKey(rk: string): CallOption {
	return ((() => { const __goscriptConvert3 = encoding.WithRoutingKey(rk); return $.markAsStructValue(new CallOption({opt: __goscriptConvert3.opt})) })()).clone()
}

export function WithRoutingDelegate(rd: string): CallOption {
	return ((() => { const __goscriptConvert4 = encoding.WithRoutingDelegate(rd); return $.markAsStructValue(new CallOption({opt: __goscriptConvert4.opt})) })()).clone()
}

export function WithCrossZoneRoutingGRPC(routingZone: string): $.Slice<CallOption> {
	return $.arrayToSlice<CallOption>([((() => { const __goscriptConvert5 = encoding.WithRoutingDelegate(encoding.RoutingDelegateCrosszoneHeaderKey); return $.markAsStructValue(new CallOption({opt: __goscriptConvert5.opt})) })()).clone(), ((() => { const __goscriptConvert6 = encoding.WithCrossZoneRoutingGRPC(routingZone); return $.markAsStructValue(new CallOption({opt: __goscriptConvert6.opt})) })()).clone()])
}

export function WithCrossRegionRoutingGRPC(routingRegion: string): $.Slice<CallOption> {
	return $.arrayToSlice<CallOption>([((() => { const __goscriptConvert7 = encoding.WithRoutingDelegate(encoding.RoutingDelegateCrossregionHeaderKey); return $.markAsStructValue(new CallOption({opt: __goscriptConvert7.opt})) })()).clone(), ((() => { const __goscriptConvert8 = encoding.WithCrossRegionRoutingGRPC(routingRegion); return $.markAsStructValue(new CallOption({opt: __goscriptConvert8.opt})) })()).clone()])
}

export async function CallFromContext(ctx: context.Context | null): globalThis.Promise<Call | $.VarRef<Call> | null> {
	return $.unsafePointerCast<Call | $.VarRef<Call> | null>(await encoding.CallFromContext(ctx), Call)
}
