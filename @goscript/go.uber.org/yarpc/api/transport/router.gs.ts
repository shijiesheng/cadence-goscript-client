// Generated file based on router.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as io from "@goscript/io/index.js"

import type * as iter from "@goscript/iter/index.js"

import * as __goscript_handler from "./handler.gs.ts"

import * as __goscript_header from "./header.gs.ts"

import * as __goscript_request from "./request.gs.ts"

import type * as __goscript_response from "./response.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"

import * as __goscript_type_string from "./type_string.gs.ts"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/io/index.js"
import "./handler.gs.ts"
import "./header.gs.ts"
import "./request.gs.ts"
import "./stream.gs.ts"
import "./type_string.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/transport", ["transport.Procedure", "transport.Router", "transport.RouteTable"])

export type Router = {
	Choose(ctx: context.Context | null, req: __goscript_request.Request | $.VarRef<__goscript_request.Request> | null): [__goscript_handler.HandlerSpec, $.GoError] | globalThis.Promise<[__goscript_handler.HandlerSpec, $.GoError]>
	Procedures(): $.Slice<Procedure> | globalThis.Promise<$.Slice<Procedure>>
}

$.registerInterfaceType(
	"transport.Router",
	null,
	[$.methodSignature("Choose", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")]], ["transport.HandlerSpec", "error"]), $.methodSignature("Procedures", [], [/* @__PURE__ */ $.sliceType("transport.Procedure")])]
);

export type RouteTable = {
	Choose(ctx: context.Context | null, req: __goscript_request.Request | $.VarRef<__goscript_request.Request> | null): [__goscript_handler.HandlerSpec, $.GoError] | globalThis.Promise<[__goscript_handler.HandlerSpec, $.GoError]>
	Procedures(): $.Slice<Procedure> | globalThis.Promise<$.Slice<Procedure>>
	Register(_p0: $.Slice<Procedure>): void
}

$.registerInterfaceType(
	"transport.RouteTable",
	null,
	[$.methodSignature("Choose", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")]], ["transport.HandlerSpec", "error"]), $.methodSignature("Procedures", [], [/* @__PURE__ */ $.sliceType("transport.Procedure")]), $.methodSignature("Register", [/* @__PURE__ */ $.sliceType("transport.Procedure")])]
);

export class Procedure {
	// Name of the procedure.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// Service or empty to use the default service name.
	public get Service(): string {
		return this._fields.Service
	}

	public set Service(value: string) {
		this._fields.Service = value
	}

	// HandlerSpec specifying which handler and rpc type.
	public get HandlerSpec(): __goscript_handler.HandlerSpec {
		return this._fields.HandlerSpec
	}

	public set HandlerSpec(value: __goscript_handler.HandlerSpec) {
		this._fields.HandlerSpec = value
	}

	// Encoding of the handler (optional) used for introspection and routing
	// (if present).
	public get Encoding(): __goscript_request.Encoding {
		return this._fields.Encoding
	}

	public set Encoding(value: __goscript_request.Encoding) {
		this._fields.Encoding = value
	}

	// Signature of the handler, for introspection. This should be a snippet of
	// Go code representing the function definition.
	public get Signature(): string {
		return this._fields.Signature
	}

	public set Signature(value: string) {
		this._fields.Signature = value
	}

	public _fields: {
		Name: string
		Service: string
		HandlerSpec: __goscript_handler.HandlerSpec
		Encoding: __goscript_request.Encoding
		Signature: string
	}

	constructor(init?: Partial<{Name?: string, Service?: string, HandlerSpec?: __goscript_handler.HandlerSpec, Encoding?: __goscript_request.Encoding, Signature?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Service: init?.Service ?? ("" as string),
			HandlerSpec: init?.HandlerSpec ? init.HandlerSpec.clone() : new __goscript_handler.HandlerSpec(undefined, true),
			Encoding: init?.Encoding ?? ("" as __goscript_request.Encoding),
			Signature: init?.Signature ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Procedure {
		return new Procedure(this, true)
	}

	public __goscriptAssign(source: Procedure): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Service = values.Service
		$.assignStruct(target.HandlerSpec, values.HandlerSpec)
		target.Encoding = values.Encoding
		target.Signature = values.Signature
	}

	public Less(o: Procedure): boolean {
		const p = this;
		if (!$.stringEqual(p.Service, o.Service)) {
			return $.stringCompare(p.Service, o.Service) < 0
		}
		if (!$.stringEqual(p.Name, o.Name)) {
			return $.stringCompare(p.Name, o.Name) < 0
		}
		return $.stringCompare(p.Encoding, o.Encoding) < 0
	}

	public async MarshalLogObject(enc: zapcore.ObjectEncoder | null): globalThis.Promise<$.GoError> {
		const p = this;
		// Passing a Procedure as a zap.ObjectMarshaler allocates, so we shouldn't
		// do it on the request path.
		void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("name", p.Name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("service", p.Service), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("encoding", p.Encoding), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("signature", p.Signature), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddObject("handler", $.interfaceValue<zapcore.ObjectMarshaler | null>((p.HandlerSpec).clone(), "transport.HandlerSpec", "transport.HandlerSpec"))
	}

	static __typeInfo = $.registerStructType(
		"transport.Procedure",
		() => new Procedure(),
		() => [$.methodSignature("Less", [["o", "transport.Procedure"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"])],
		Procedure,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Service", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("HandlerSpec", "transport.HandlerSpec", [2], 32, true), /* @__PURE__ */ $.structField("Encoding", /* @__PURE__ */ $.basicType("string", "transport.Encoding"), [3], 88, true), /* @__PURE__ */ $.structField("Signature", /* @__PURE__ */ $.basicType("string"), [4], 104, true)]
	)
}

var __goscriptAwait: any
