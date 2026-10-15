// Generated file based on register.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as protocol from "@goscript/go.uber.org/thriftrw/protocol/index.js"

import * as binary from "@goscript/go.uber.org/thriftrw/protocol/binary/index.js"

import * as stream from "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"

import * as thriftreflect from "@goscript/go.uber.org/thriftrw/thriftreflect/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as procedure from "@goscript/go.uber.org/yarpc/pkg/procedure/index.js"

import * as envelope from "@goscript/go.uber.org/thriftrw/envelope/index.js"

import type * as encoding from "@goscript/go.uber.org/yarpc/api/encoding/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_constants from "./constants.gs.ts"

import * as __goscript_inbound from "./inbound.gs.ts"

import * as __goscript_inbound_nowire from "./inbound_nowire.gs.ts"

import * as __goscript_options from "./options.gs.ts"

import type * as __goscript_response from "./response.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/binary/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"
import "@goscript/go.uber.org/thriftrw/thriftreflect/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/pkg/procedure/index.js"
import "@goscript/go.uber.org/thriftrw/envelope/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/io/index.js"
import "./constants.gs.ts"
import "./inbound.gs.ts"
import "./inbound_nowire.gs.ts"
import "./options.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/encoding/thrift", ["thrift.UnaryHandler", "thrift.OnewayHandler", "thrift.HandlerSpec", "thrift.Method", "thrift.Service"])

export type UnaryHandler = ((_p0: context.Context | null, _p1: wire.Value) => [__goscript_response.Response, $.GoError] | globalThis.Promise<[__goscript_response.Response, $.GoError]>) | null

export type OnewayHandler = ((_p0: context.Context | null, _p1: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null

export class HandlerSpec {
	public get Type(): transport.Type {
		return this._fields.Type
	}

	public set Type(value: transport.Type) {
		this._fields.Type = value
	}

	public get Unary(): ((_p0: context.Context | null, _p1: wire.Value) => [__goscript_response.Response, $.GoError] | globalThis.Promise<[__goscript_response.Response, $.GoError]>) | null {
		return this._fields.Unary
	}

	public set Unary(value: ((_p0: context.Context | null, _p1: wire.Value) => [__goscript_response.Response, $.GoError] | globalThis.Promise<[__goscript_response.Response, $.GoError]>) | null) {
		this._fields.Unary = value
	}

	public get Oneway(): ((_p0: context.Context | null, _p1: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.Oneway
	}

	public set Oneway(value: ((_p0: context.Context | null, _p1: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.Oneway = value
	}

	public get NoWire(): __goscript_inbound_nowire.NoWireHandler | null {
		return this._fields.NoWire
	}

	public set NoWire(value: __goscript_inbound_nowire.NoWireHandler | null) {
		this._fields.NoWire = value
	}

	public _fields: {
		Type: transport.Type
		Unary: ((_p0: context.Context | null, _p1: wire.Value) => [__goscript_response.Response, $.GoError] | globalThis.Promise<[__goscript_response.Response, $.GoError]>) | null
		Oneway: ((_p0: context.Context | null, _p1: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null
		NoWire: __goscript_inbound_nowire.NoWireHandler | null
	}

	constructor(init?: Partial<{Type?: transport.Type, Unary?: ((_p0: context.Context | null, _p1: wire.Value) => [__goscript_response.Response, $.GoError] | globalThis.Promise<[__goscript_response.Response, $.GoError]>) | null, Oneway?: ((_p0: context.Context | null, _p1: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null, NoWire?: __goscript_inbound_nowire.NoWireHandler | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Type: init?.Type ?? (0 as transport.Type),
			Unary: init?.Unary ?? (null! as ((_p0: context.Context | null, _p1: wire.Value) => [__goscript_response.Response, $.GoError] | globalThis.Promise<[__goscript_response.Response, $.GoError]>) | null),
			Oneway: init?.Oneway ?? (null! as ((_p0: context.Context | null, _p1: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null),
			NoWire: init?.NoWire ?? (null! as __goscript_inbound_nowire.NoWireHandler | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HandlerSpec {
		return new HandlerSpec(this, true)
	}

	public __goscriptAssign(source: HandlerSpec): void {
		const target = this._fields
		const values = source._fields
		target.Type = values.Type
		target.Unary = values.Unary
		target.Oneway = values.Oneway
		target.NoWire = $.assignFieldValue(target.NoWire, values.NoWire, "thrift.NoWireHandler")
	}

	static __typeInfo = $.registerStructType(
		"thrift.HandlerSpec",
		() => new HandlerSpec(),
		() => [],
		HandlerSpec,
		() => [/* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("int", "transport.Type"), [0], 0, true), /* @__PURE__ */ $.structField("Unary", ({ kind: $.TypeKind.Function, name: "thrift.UnaryHandler", params: ["context.Context", "wire.Value"], results: ["thrift.Response", "error"] } as $.FunctionTypeInfo), [1], 8, true), /* @__PURE__ */ $.structField("Oneway", ({ kind: $.TypeKind.Function, name: "thrift.OnewayHandler", params: ["context.Context", "wire.Value"], results: ["error"] } as $.FunctionTypeInfo), [2], 16, true), /* @__PURE__ */ $.structField("NoWire", "thrift.NoWireHandler", [3], 24, true)]
	)
}

export class Method {
	// Name of the method itself.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// The handler to call.
	public get HandlerSpec(): HandlerSpec {
		return this._fields.HandlerSpec
	}

	public set HandlerSpec(value: HandlerSpec) {
		this._fields.HandlerSpec = value
	}

	// Snippet of Go code representing the function definition of the handler.
	// This is useful for introspection.
	public get Signature(): string {
		return this._fields.Signature
	}

	public set Signature(value: string) {
		this._fields.Signature = value
	}

	// ThriftModule, if non-nil, refers to the Thrift module from where this
	// method is coming from.
	public get ThriftModule(): thriftreflect.ThriftModule | $.VarRef<thriftreflect.ThriftModule> | null {
		return this._fields.ThriftModule
	}

	public set ThriftModule(value: thriftreflect.ThriftModule | $.VarRef<thriftreflect.ThriftModule> | null) {
		this._fields.ThriftModule = value
	}

	public _fields: {
		Name: string
		HandlerSpec: HandlerSpec
		Signature: string
		ThriftModule: thriftreflect.ThriftModule | $.VarRef<thriftreflect.ThriftModule> | null
	}

	constructor(init?: Partial<{Name?: string, HandlerSpec?: HandlerSpec, Signature?: string, ThriftModule?: thriftreflect.ThriftModule | $.VarRef<thriftreflect.ThriftModule> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			HandlerSpec: init?.HandlerSpec ? init.HandlerSpec.clone() : new HandlerSpec(undefined, true),
			Signature: init?.Signature ?? ("" as string),
			ThriftModule: init?.ThriftModule ?? (null! as thriftreflect.ThriftModule | $.VarRef<thriftreflect.ThriftModule> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Method {
		return new Method(this, true)
	}

	public __goscriptAssign(source: Method): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		$.assignStruct(target.HandlerSpec, values.HandlerSpec)
		target.Signature = values.Signature
		target.ThriftModule = values.ThriftModule
	}

	static __typeInfo = $.registerStructType(
		"thrift.Method",
		() => new Method(),
		() => [],
		Method,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("HandlerSpec", "thrift.HandlerSpec", [1], 16, true), /* @__PURE__ */ $.structField("Signature", /* @__PURE__ */ $.basicType("string"), [2], 56, true), /* @__PURE__ */ $.structField("ThriftModule", /* @__PURE__ */ $.pointerType("thriftreflect.ThriftModule"), [3], 72, true)]
	)
}

export class Service {
	// Name of the Thrift service. This is the name specified for the service
	// in the IDL.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Methods(): $.Slice<Method> {
		return this._fields.Methods
	}

	public set Methods(value: $.Slice<Method>) {
		this._fields.Methods = value
	}

	public _fields: {
		Name: string
		Methods: $.Slice<Method>
	}

	constructor(init?: Partial<{Name?: string, Methods?: $.Slice<Method>}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Methods: init?.Methods ?? (null! as $.Slice<Method>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Service {
		return new Service(this, true)
	}

	public __goscriptAssign(source: Service): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Methods = values.Methods
	}

	static __typeInfo = $.registerStructType(
		"thrift.Service",
		() => new Service(),
		() => [],
		Service,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Methods", /* @__PURE__ */ $.sliceType("thrift.Method"), [1], 16, true)]
	)
}

export async function Register(r: transport.RouteTable | null, rs: $.Slice<transport.Procedure>): globalThis.Promise<void> {
	void (__goscriptAwait = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<transport.RouteTable, null>) : $.pointerValue<Exclude<transport.RouteTable, null>>(r)).Register(rs), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function BuildProcedures(s: Service, opts: $.Slice<__goscript_options.RegisterOption | null>): globalThis.Promise<$.Slice<transport.Procedure>> {
	// default NoWire to true because this is the our final state to achieve
	// but we still allow users to opt out by overriding NoWire to false.
	let rc = $.varRef(new __goscript_options.registerConfig({NoWire: true}, true))
	for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_options.RegisterOption | null)
		void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<__goscript_options.RegisterOption, null>) : $.pointerValue<Exclude<__goscript_options.RegisterOption, null>>(opt)).applyRegisterOption(rc), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	let proto: protocol.Protocol | null = $.interfaceValue<protocol.Protocol | null>(binary.Default, "*binary.Protocol", /* @__PURE__ */ $.pointerType("binary.Protocol"))
	if (rc.value.Protocol != null) {
		proto = rc.value.Protocol
	}

	// Only if we're trying to use the 'NoWire' implementation do we check if the
	// config's `Protocol` provides the streaming ones needed.
	let streamReqReader: stream.RequestReader | null = $.interfaceValue<stream.RequestReader | null>(binary.Default, "*binary.Protocol", /* @__PURE__ */ $.pointerType("binary.Protocol"))
	if (rc.value.NoWire && (rc.value.Protocol != null)) {
		{
			let [sp, ok] = $.typeAssertTuple<stream.RequestReader | null>(rc.value.Protocol, "stream.RequestReader")
			if (ok) {
				streamReqReader = sp
			}
		}
	}

	let svc = s.Name
	if (!$.stringEqual(rc.value.ServiceName, "")) {
		svc = rc.value.ServiceName
	}

	let rs: $.Slice<transport.Procedure> = $.makeSlice<transport.Procedure>(0, $.sliceLen(s.Methods), undefined, () => new transport.Procedure(undefined, true))

	for (let __goscriptRangeTarget1 = s.Methods, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let method = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as Method)).clone()
		let spec: transport.HandlerSpec = new transport.HandlerSpec(undefined, true)
		switch (method.HandlerSpec.Type) {
			case transport.Unary:
			{
				if (rc.value.NoWire) {
					spec = $.assignStruct(spec, transport.NewUnaryHandlerSpec($.interfaceValue<transport.UnaryHandler | null>(new __goscript_inbound_nowire.thriftNoWireHandler({Handler: method.HandlerSpec.NoWire, RequestReader: streamReqReader}, true), "thrift.thriftNoWireHandler", "thrift.thriftNoWireHandler")))
				} else {
					spec = $.assignStruct(spec, transport.NewUnaryHandlerSpec($.interfaceValue<transport.UnaryHandler | null>(new __goscript_inbound.thriftUnaryHandler({UnaryHandler: method.HandlerSpec.Unary, Protocol: proto, Enveloping: rc.value.Enveloping}, true), "thrift.thriftUnaryHandler", "thrift.thriftUnaryHandler")))
				}
				break
			}
			case transport.Oneway:
			{
				if (rc.value.NoWire) {
					spec = $.assignStruct(spec, transport.NewOnewayHandlerSpec($.interfaceValue<transport.OnewayHandler | null>(new __goscript_inbound_nowire.thriftNoWireHandler({Handler: method.HandlerSpec.NoWire, RequestReader: streamReqReader}, true), "thrift.thriftNoWireHandler", "thrift.thriftNoWireHandler")))
				} else {
					spec = $.assignStruct(spec, transport.NewOnewayHandlerSpec($.interfaceValue<transport.OnewayHandler | null>(new __goscript_inbound.thriftOnewayHandler({OnewayHandler: method.HandlerSpec.Oneway, Protocol: proto, Enveloping: rc.value.Enveloping}, true), "thrift.thriftOnewayHandler", "thrift.thriftOnewayHandler")))
				}
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("Invalid handler type for %T", $.interfaceValue((method).clone(), "thrift.Method", "thrift.Method")))
				break
			}
		}

		rs = $.appendOne(rs, (() => { const __goscriptLiteralField0 = procedure.ToName(svc, method.Name); return new transport.Procedure({Name: __goscriptLiteralField0, HandlerSpec: spec, Encoding: "thrift", Signature: method.Signature}, true) })())
	}
	return rs
}

var __goscriptAwait: any
