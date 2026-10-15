// Generated file based on inbound_call.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as inboundcall from "@goscript/go.uber.org/yarpc/internal/inboundcall/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as __goscript_call from "./call.gs.ts"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/internal/inboundcall/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "./call.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/encoding", ["encoding.InboundCall", "encoding.InboundCallOption", "encoding.inboundCallOptionFunc", "encoding.inboundCallMetadata"])

export type InboundCallOption = {
	apply(call: InboundCall | $.VarRef<InboundCall> | null): void
}

$.registerInterfaceType(
	"encoding.InboundCallOption",
	null,
	[$.methodSignature("apply", [["call", /* @__PURE__ */ $.pointerType("encoding.InboundCall")]])]
);

export type inboundCallOptionFunc = ((_p0: InboundCall | $.VarRef<InboundCall> | null) => void) | null

$.registerNamedValueType(
	"encoding.inboundCallOptionFunc",
	{apply: (receiver: any, ...args: any[]) => (inboundCallOptionFunc_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [["call", /* @__PURE__ */ $.pointerType("encoding.InboundCall")]])]
);

$.registerNamedValueType(
	"*encoding.inboundCallOptionFunc",
	{apply: (receiver: any, ...args: any[]) => (inboundCallOptionFunc_apply as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [["call", /* @__PURE__ */ $.pointerType("encoding.InboundCall")]])]
);

export class InboundCall {
	public get resHeaders(): $.Slice<__goscript_call.keyValuePair> {
		return this._fields.resHeaders
	}

	public set resHeaders(value: $.Slice<__goscript_call.keyValuePair>) {
		this._fields.resHeaders = value
	}

	public get req(): transport.Request | $.VarRef<transport.Request> | null {
		return this._fields.req
	}

	public set req(value: transport.Request | $.VarRef<transport.Request> | null) {
		this._fields.req = value
	}

	public get disableResponseHeaders(): boolean {
		return this._fields.disableResponseHeaders
	}

	public set disableResponseHeaders(value: boolean) {
		this._fields.disableResponseHeaders = value
	}

	public _fields: {
		resHeaders: $.Slice<__goscript_call.keyValuePair>
		req: transport.Request | $.VarRef<transport.Request> | null
		disableResponseHeaders: boolean
	}

	constructor(init?: Partial<{resHeaders?: $.Slice<__goscript_call.keyValuePair>, req?: transport.Request | $.VarRef<transport.Request> | null, disableResponseHeaders?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			resHeaders: init?.resHeaders ?? (null! as $.Slice<__goscript_call.keyValuePair>),
			req: init?.req ?? (null! as transport.Request | $.VarRef<transport.Request> | null),
			disableResponseHeaders: init?.disableResponseHeaders ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): InboundCall {
		return new InboundCall(this, true)
	}

	public __goscriptAssign(source: InboundCall): void {
		const target = this._fields
		const values = source._fields
		target.resHeaders = values.resHeaders
		target.req = values.req
		target.disableResponseHeaders = values.disableResponseHeaders
	}

	public ReadFromRequest(req: transport.Request | $.VarRef<transport.Request> | null): $.GoError {
		let ic: InboundCall | $.VarRef<InboundCall> | null = this;
		// TODO(abg): Maybe we should copy attributes over so that changes to the
		// Request don't change the output.
		$.pointerValue<InboundCall>(ic).req = req
		return null
	}

	public ReadFromRequestMeta(reqMeta: transport.RequestMeta | $.VarRef<transport.RequestMeta> | null): $.GoError {
		let ic: InboundCall | $.VarRef<InboundCall> | null = this;
		$.pointerValue<InboundCall>(ic).req = (reqMeta !== null && (reqMeta as any).__isVarRef !== true && (reqMeta as any).__goValue === undefined ? ((reqMeta as any) as transport.RequestMeta).ToRequest() : transport.RequestMeta.prototype.ToRequest.call(reqMeta))
		return null
	}

	public async WriteToResponse(resw: transport.ResponseWriter | null): globalThis.Promise<$.GoError> {
		const ic: InboundCall | $.VarRef<InboundCall> | null = this;
		let headers: transport.Headers = new transport.Headers(undefined, true)
		for (let __goscriptRangeTarget0 = $.pointerValue<InboundCall>(ic).resHeaders, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let h = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_call.keyValuePair)).clone()
			headers = $.assignStruct(headers, $.markAsStructValue($.cloneStructValue(headers)).With(h.k, h.v))
		}

		if (headers.Len() > 0) {
			void (__goscriptAwait = (resw !== null && (resw as any).__isVarRef !== true && (resw as any).__goValue === undefined ? (resw as Exclude<transport.ResponseWriter, null>) : $.pointerValue<Exclude<transport.ResponseWriter, null>>(resw)).AddHeaders((headers).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		return null
	}

	static __typeInfo = $.registerStructType(
		"encoding.InboundCall",
		() => new InboundCall(),
		() => [$.methodSignature("ReadFromRequest", [["req", /* @__PURE__ */ $.pointerType("transport.Request")]], ["error"], true), $.methodSignature("ReadFromRequestMeta", [["reqMeta", /* @__PURE__ */ $.pointerType("transport.RequestMeta")]], ["error"], true), $.methodSignature("WriteToResponse", [["resw", "transport.ResponseWriter"]], ["error"], true)],
		InboundCall,
		() => [/* @__PURE__ */ $.structField("resHeaders", /* @__PURE__ */ $.sliceType("encoding.keyValuePair"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/encoding" }), /* @__PURE__ */ $.structField("req", /* @__PURE__ */ $.pointerType("transport.Request"), [1], 24, false, { pkgPath: "go.uber.org/yarpc/api/encoding" }), /* @__PURE__ */ $.structField("disableResponseHeaders", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "go.uber.org/yarpc/api/encoding" })]
	)
}

export class inboundCallMetadata {
	public get resHeaders(): $.Slice<__goscript_call.keyValuePair> {
		return this._fields.resHeaders
	}

	public set resHeaders(value: $.Slice<__goscript_call.keyValuePair>) {
		this._fields.resHeaders = value
	}

	public get req(): transport.Request | $.VarRef<transport.Request> | null {
		return this._fields.req
	}

	public set req(value: transport.Request | $.VarRef<transport.Request> | null) {
		this._fields.req = value
	}

	public get disableResponseHeaders(): boolean {
		return this._fields.disableResponseHeaders
	}

	public set disableResponseHeaders(value: boolean) {
		this._fields.disableResponseHeaders = value
	}

	public _fields: {
		resHeaders: $.Slice<__goscript_call.keyValuePair>
		req: transport.Request | $.VarRef<transport.Request> | null
		disableResponseHeaders: boolean
	}

	constructor(init?: Partial<{resHeaders?: $.Slice<__goscript_call.keyValuePair>, req?: transport.Request | $.VarRef<transport.Request> | null, disableResponseHeaders?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			resHeaders: init?.resHeaders ?? (null! as $.Slice<__goscript_call.keyValuePair>),
			req: init?.req ?? (null! as transport.Request | $.VarRef<transport.Request> | null),
			disableResponseHeaders: init?.disableResponseHeaders ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): inboundCallMetadata {
		return new inboundCallMetadata(this, true)
	}

	public __goscriptAssign(source: inboundCallMetadata): void {
		const target = this._fields
		const values = source._fields
		target.resHeaders = values.resHeaders
		target.req = values.req
		target.disableResponseHeaders = values.disableResponseHeaders
	}

	public Caller(): string {
		const ic: inboundCallMetadata | $.VarRef<inboundCallMetadata> | null = this;
		return $.pointerValue<transport.Request>($.pointerValue<inboundCallMetadata>(ic).req).Caller
	}

	public CallerProcedure(): string {
		const ic: inboundCallMetadata | $.VarRef<inboundCallMetadata> | null = this;
		return $.pointerValue<transport.Request>($.pointerValue<inboundCallMetadata>(ic).req).CallerProcedure
	}

	public Encoding(): transport.Encoding {
		const ic: inboundCallMetadata | $.VarRef<inboundCallMetadata> | null = this;
		return $.pointerValue<transport.Request>($.pointerValue<inboundCallMetadata>(ic).req).Encoding
	}

	public Headers(): transport.Headers {
		const ic: inboundCallMetadata | $.VarRef<inboundCallMetadata> | null = this;
		return ($.pointerValue<transport.Request>($.pointerValue<inboundCallMetadata>(ic).req).Headers).clone()
	}

	public Procedure(): string {
		const ic: inboundCallMetadata | $.VarRef<inboundCallMetadata> | null = this;
		return $.pointerValue<transport.Request>($.pointerValue<inboundCallMetadata>(ic).req).Procedure
	}

	public RoutingDelegate(): string {
		const ic: inboundCallMetadata | $.VarRef<inboundCallMetadata> | null = this;
		return $.pointerValue<transport.Request>($.pointerValue<inboundCallMetadata>(ic).req).RoutingDelegate
	}

	public RoutingKey(): string {
		const ic: inboundCallMetadata | $.VarRef<inboundCallMetadata> | null = this;
		return $.pointerValue<transport.Request>($.pointerValue<inboundCallMetadata>(ic).req).RoutingKey
	}

	public Service(): string {
		const ic: inboundCallMetadata | $.VarRef<inboundCallMetadata> | null = this;
		return $.pointerValue<transport.Request>($.pointerValue<inboundCallMetadata>(ic).req).Service
	}

	public ShardKey(): string {
		const ic: inboundCallMetadata | $.VarRef<inboundCallMetadata> | null = this;
		return $.pointerValue<transport.Request>($.pointerValue<inboundCallMetadata>(ic).req).ShardKey
	}

	public Transport(): string {
		const ic: inboundCallMetadata | $.VarRef<inboundCallMetadata> | null = this;
		return $.pointerValue<transport.Request>($.pointerValue<inboundCallMetadata>(ic).req).Transport
	}

	public WriteResponseHeader(k: string, v: string): $.GoError {
		let ic: inboundCallMetadata | $.VarRef<inboundCallMetadata> | null = this;
		const ic$: inboundCallMetadata = ic == null ? $.pointerTarget<inboundCallMetadata>(ic) : (ic as any).__isVarRef === true ? (ic as any).value : (ic as any).__goValue === undefined ? (ic as any) : $.pointerTarget<inboundCallMetadata>(ic)
		if ((ic$ as inboundCallMetadata).disableResponseHeaders) {
			return yarpcerrors.InvalidArgumentErrorf("call does not support setting response headers", null)
		}
		;(ic$ as inboundCallMetadata).resHeaders = $.appendOne((ic$ as inboundCallMetadata).resHeaders, new __goscript_call.keyValuePair({k: k, v: v}, true))
		return null
	}

	static __typeInfo = $.registerStructType(
		"encoding.inboundCallMetadata",
		() => new inboundCallMetadata(),
		() => [$.methodSignature("Caller", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("CallerProcedure", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Encoding", [], [/* @__PURE__ */ $.basicType("string", "transport.Encoding")], true), $.methodSignature("Headers", [], ["transport.Headers"], true), $.methodSignature("Procedure", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("RoutingDelegate", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("RoutingKey", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Service", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ShardKey", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Transport", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("WriteResponseHeader", [["k", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.basicType("string")]], ["error"], true)],
		inboundCallMetadata,
		() => [/* @__PURE__ */ $.structField("resHeaders", /* @__PURE__ */ $.sliceType("encoding.keyValuePair"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/encoding" }), /* @__PURE__ */ $.structField("req", /* @__PURE__ */ $.pointerType("transport.Request"), [1], 24, false, { pkgPath: "go.uber.org/yarpc/api/encoding" }), /* @__PURE__ */ $.structField("disableResponseHeaders", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "go.uber.org/yarpc/api/encoding" })]
	)
}

export async function NewInboundCall(ctx: context.Context | null): globalThis.Promise<[context.Context | null, InboundCall | $.VarRef<InboundCall> | null]> {
	return NewInboundCallWithOptions(ctx, null)
}

export async function inboundCallOptionFunc_apply(i: inboundCallOptionFunc | null, call: InboundCall | $.VarRef<InboundCall> | null): globalThis.Promise<void> {
	void (__goscriptAwait = i!(call), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export function DisableResponseHeaders(): InboundCallOption | null {
	return $.namedValueInterfaceValue<InboundCallOption | null>($.namedFunction($.functionValue((call: InboundCall | $.VarRef<InboundCall> | null): void => {
		$.pointerValue<InboundCall>(call).disableResponseHeaders = true
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("encoding.InboundCall")], results: [] } as $.FunctionTypeInfo)), "encoding.inboundCallOptionFunc", ({ kind: $.TypeKind.Function, name: "encoding.inboundCallOptionFunc", params: [/* @__PURE__ */ $.pointerType("encoding.InboundCall")], results: [] } as $.FunctionTypeInfo)), "encoding.inboundCallOptionFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export async function NewInboundCallWithOptions(ctx: context.Context | null, opts: $.Slice<InboundCallOption | null>): globalThis.Promise<[context.Context | null, InboundCall | $.VarRef<InboundCall> | null]> {
	let call: InboundCall | $.VarRef<InboundCall> | null = new InboundCall()
	for (let __goscriptRangeTarget1 = opts, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let opt = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as InboundCallOption | null)
		void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<InboundCallOption, null>) : $.pointerValue<Exclude<InboundCallOption, null>>(opt)).apply(call), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return [inboundcall.WithMetadata(ctx, $.interfaceValue<inboundcall.Metadata | null>($.unsafePointerCast<inboundCallMetadata | $.VarRef<inboundCallMetadata> | null>(call, inboundCallMetadata), "*encoding.inboundCallMetadata", /* @__PURE__ */ $.pointerType("encoding.inboundCallMetadata"))), call]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({apply: (receiver: any, ...args: any[]) => (inboundCallOptionFunc_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (({ kind: $.TypeKind.Function, name: "encoding.inboundCallOptionFunc", params: [/* @__PURE__ */ $.pointerType("encoding.InboundCall")], results: [] } as $.FunctionTypeInfo))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("apply", [["call", /* @__PURE__ */ $.pointerType("encoding.InboundCall")]])])
}

var __goscriptAwait: any
