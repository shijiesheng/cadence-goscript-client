// Generated file based on service_meta.pb.yarpc.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as jsonpb from "@goscript/github.com/gogo/protobuf/jsonpb/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as fx from "@goscript/go.uber.org/fx/index.js"

import * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as restriction from "@goscript/go.uber.org/yarpc/api/x/restriction/index.js"

import * as protobuf from "@goscript/go.uber.org/yarpc/encoding/protobuf/index.js"

import * as reflection from "@goscript/go.uber.org/yarpc/encoding/protobuf/reflection/index.js"

import * as dig from "@goscript/go.uber.org/dig/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_service_meta_pb from "./service_meta.pb.gs.ts"
import "@goscript/context/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/reflect/index.js"
import "@goscript/github.com/gogo/protobuf/jsonpb/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/go.uber.org/fx/index.js"
import "@goscript/go.uber.org/yarpc/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/api/x/restriction/index.js"
import "@goscript/go.uber.org/yarpc/encoding/protobuf/index.js"
import "@goscript/go.uber.org/yarpc/encoding/protobuf/reflection/index.js"
import "@goscript/go.uber.org/dig/index.js"
import "./service_meta.pb.gs.ts"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.MetaAPIYARPCClient", "apiv1.MetaAPIYARPCServer", "apiv1.buildMetaAPIYARPCProceduresParams", "apiv1.FxMetaAPIYARPCClientParams", "apiv1.FxMetaAPIYARPCClientResult", "apiv1.FxMetaAPIYARPCProceduresParams", "apiv1.FxMetaAPIYARPCProceduresResult", "apiv1._MetaAPIYARPCCaller", "apiv1._MetaAPIYARPCHandler"])

export type MetaAPIYARPCClient = {
	Health(_p0: context.Context | null, _p1: __goscript_service_meta_pb.HealthRequest | $.VarRef<__goscript_service_meta_pb.HealthRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_meta_pb.HealthResponse | $.VarRef<__goscript_service_meta_pb.HealthResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_meta_pb.HealthResponse | $.VarRef<__goscript_service_meta_pb.HealthResponse> | null, $.GoError]>
}

$.registerInterfaceType(
	"apiv1.MetaAPIYARPCClient",
	null,
	[$.methodSignature("Health", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.HealthRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.HealthResponse"), "error"])]
);

export type MetaAPIYARPCServer = {
	Health(_p0: context.Context | null, _p1: __goscript_service_meta_pb.HealthRequest | $.VarRef<__goscript_service_meta_pb.HealthRequest> | null): [__goscript_service_meta_pb.HealthResponse | $.VarRef<__goscript_service_meta_pb.HealthResponse> | null, $.GoError]
}

$.registerInterfaceType(
	"apiv1.MetaAPIYARPCServer",
	null,
	[$.methodSignature("Health", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.HealthRequest")], [/* @__PURE__ */ $.pointerType("apiv1.HealthResponse"), "error"])]
);

export class buildMetaAPIYARPCProceduresParams {
	public get Server(): MetaAPIYARPCServer | null {
		return this._fields.Server
	}

	public set Server(value: MetaAPIYARPCServer | null) {
		this._fields.Server = value
	}

	public get AnyResolver(): jsonpb.AnyResolver | null {
		return this._fields.AnyResolver
	}

	public set AnyResolver(value: jsonpb.AnyResolver | null) {
		this._fields.AnyResolver = value
	}

	public _fields: {
		Server: MetaAPIYARPCServer | null
		AnyResolver: jsonpb.AnyResolver | null
	}

	constructor(init?: Partial<{Server?: MetaAPIYARPCServer | null, AnyResolver?: jsonpb.AnyResolver | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Server: init?.Server ?? (null! as MetaAPIYARPCServer | null),
			AnyResolver: init?.AnyResolver ?? (null! as jsonpb.AnyResolver | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): buildMetaAPIYARPCProceduresParams {
		return new buildMetaAPIYARPCProceduresParams(this, true)
	}

	public __goscriptAssign(source: buildMetaAPIYARPCProceduresParams): void {
		const target = this._fields
		const values = source._fields
		target.Server = $.assignFieldValue(target.Server, values.Server, "apiv1.MetaAPIYARPCServer")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.buildMetaAPIYARPCProceduresParams",
		() => new buildMetaAPIYARPCProceduresParams(),
		() => [],
		buildMetaAPIYARPCProceduresParams,
		() => [/* @__PURE__ */ $.structField("Server", "apiv1.MetaAPIYARPCServer", [0], 0, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [1], 16, true)]
	)
}

export class FxMetaAPIYARPCClientParams {
	public get In(): fx.In {
		return this._fields.In
	}

	public set In(value: fx.In) {
		this._fields.In = value
	}

	public get Provider(): yarpc.ClientConfig | null {
		return this._fields.Provider
	}

	public set Provider(value: yarpc.ClientConfig | null) {
		this._fields.Provider = value
	}

	public get AnyResolver(): jsonpb.AnyResolver | null {
		return this._fields.AnyResolver
	}

	public set AnyResolver(value: jsonpb.AnyResolver | null) {
		this._fields.AnyResolver = value
	}

	public get Restriction(): restriction.Checker | null {
		return this._fields.Restriction
	}

	public set Restriction(value: restriction.Checker | null) {
		this._fields.Restriction = value
	}

	public _fields: {
		In: fx.In
		Provider: yarpc.ClientConfig | null
		AnyResolver: jsonpb.AnyResolver | null
		Restriction: restriction.Checker | null
	}

	constructor(init?: Partial<{In?: fx.In, Provider?: yarpc.ClientConfig | null, AnyResolver?: jsonpb.AnyResolver | null, Restriction?: restriction.Checker | null}>, __goscriptValue?: boolean) {
		this._fields = {
			In: init?.In ? init.In.clone() : new dig.In(undefined, true),
			Provider: init?.Provider ?? (null! as yarpc.ClientConfig | null),
			AnyResolver: init?.AnyResolver ?? (null! as jsonpb.AnyResolver | null),
			Restriction: init?.Restriction ?? (null! as restriction.Checker | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FxMetaAPIYARPCClientParams {
		return new FxMetaAPIYARPCClientParams(this, true)
	}

	public __goscriptAssign(source: FxMetaAPIYARPCClientParams): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.In, values.In)
		target.Provider = $.assignFieldValue(target.Provider, values.Provider, "yarpc.ClientConfig")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
		target.Restriction = $.assignFieldValue(target.Restriction, values.Restriction, "restriction.Checker")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxMetaAPIYARPCClientParams",
		() => new FxMetaAPIYARPCClientParams(),
		() => [],
		FxMetaAPIYARPCClientParams,
		() => [/* @__PURE__ */ $.structField("In", "dig.In", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Provider", "yarpc.ClientConfig", [1], 0, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [2], 16, true, { tag: "name:\"yarpcfx\" optional:\"true\"" }), /* @__PURE__ */ $.structField("Restriction", "restriction.Checker", [3], 32, true, { tag: "optional:\"true\"" })]
	)
}

export class FxMetaAPIYARPCClientResult {
	public get Out(): fx.Out {
		return this._fields.Out
	}

	public set Out(value: fx.Out) {
		this._fields.Out = value
	}

	public get Client(): MetaAPIYARPCClient | null {
		return this._fields.Client
	}

	public set Client(value: MetaAPIYARPCClient | null) {
		this._fields.Client = value
	}

	public _fields: {
		Out: fx.Out
		Client: MetaAPIYARPCClient | null
	}

	constructor(init?: Partial<{Out?: fx.Out, Client?: MetaAPIYARPCClient | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Out: init?.Out ? init.Out.clone() : new dig.Out(undefined, true),
			Client: init?.Client ?? (null! as MetaAPIYARPCClient | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FxMetaAPIYARPCClientResult {
		return new FxMetaAPIYARPCClientResult(this, true)
	}

	public __goscriptAssign(source: FxMetaAPIYARPCClientResult): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Out, values.Out)
		target.Client = $.assignFieldValue(target.Client, values.Client, "apiv1.MetaAPIYARPCClient")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxMetaAPIYARPCClientResult",
		() => new FxMetaAPIYARPCClientResult(),
		() => [],
		FxMetaAPIYARPCClientResult,
		() => [/* @__PURE__ */ $.structField("Out", "dig.Out", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Client", "apiv1.MetaAPIYARPCClient", [1], 0, true)]
	)
}

export class FxMetaAPIYARPCProceduresParams {
	public get In(): fx.In {
		return this._fields.In
	}

	public set In(value: fx.In) {
		this._fields.In = value
	}

	public get Server(): MetaAPIYARPCServer | null {
		return this._fields.Server
	}

	public set Server(value: MetaAPIYARPCServer | null) {
		this._fields.Server = value
	}

	public get AnyResolver(): jsonpb.AnyResolver | null {
		return this._fields.AnyResolver
	}

	public set AnyResolver(value: jsonpb.AnyResolver | null) {
		this._fields.AnyResolver = value
	}

	public _fields: {
		In: fx.In
		Server: MetaAPIYARPCServer | null
		AnyResolver: jsonpb.AnyResolver | null
	}

	constructor(init?: Partial<{In?: fx.In, Server?: MetaAPIYARPCServer | null, AnyResolver?: jsonpb.AnyResolver | null}>, __goscriptValue?: boolean) {
		this._fields = {
			In: init?.In ? init.In.clone() : new dig.In(undefined, true),
			Server: init?.Server ?? (null! as MetaAPIYARPCServer | null),
			AnyResolver: init?.AnyResolver ?? (null! as jsonpb.AnyResolver | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FxMetaAPIYARPCProceduresParams {
		return new FxMetaAPIYARPCProceduresParams(this, true)
	}

	public __goscriptAssign(source: FxMetaAPIYARPCProceduresParams): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.In, values.In)
		target.Server = $.assignFieldValue(target.Server, values.Server, "apiv1.MetaAPIYARPCServer")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxMetaAPIYARPCProceduresParams",
		() => new FxMetaAPIYARPCProceduresParams(),
		() => [],
		FxMetaAPIYARPCProceduresParams,
		() => [/* @__PURE__ */ $.structField("In", "dig.In", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Server", "apiv1.MetaAPIYARPCServer", [1], 0, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [2], 16, true, { tag: "name:\"yarpcfx\" optional:\"true\"" })]
	)
}

export class FxMetaAPIYARPCProceduresResult {
	public get Out(): fx.Out {
		return this._fields.Out
	}

	public set Out(value: fx.Out) {
		this._fields.Out = value
	}

	public get Procedures(): $.Slice<transport.Procedure> {
		return this._fields.Procedures
	}

	public set Procedures(value: $.Slice<transport.Procedure>) {
		this._fields.Procedures = value
	}

	public get ReflectionMeta(): reflection.ServerMeta {
		return this._fields.ReflectionMeta
	}

	public set ReflectionMeta(value: reflection.ServerMeta) {
		this._fields.ReflectionMeta = value
	}

	public _fields: {
		Out: fx.Out
		Procedures: $.Slice<transport.Procedure>
		ReflectionMeta: reflection.ServerMeta
	}

	constructor(init?: Partial<{Out?: fx.Out, Procedures?: $.Slice<transport.Procedure>, ReflectionMeta?: reflection.ServerMeta}>, __goscriptValue?: boolean) {
		this._fields = {
			Out: init?.Out ? init.Out.clone() : new dig.Out(undefined, true),
			Procedures: init?.Procedures ?? (null! as $.Slice<transport.Procedure>),
			ReflectionMeta: init?.ReflectionMeta ? init.ReflectionMeta.clone() : new reflection.ServerMeta(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FxMetaAPIYARPCProceduresResult {
		return new FxMetaAPIYARPCProceduresResult(this, true)
	}

	public __goscriptAssign(source: FxMetaAPIYARPCProceduresResult): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Out, values.Out)
		target.Procedures = values.Procedures
		$.assignStruct(target.ReflectionMeta, values.ReflectionMeta)
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxMetaAPIYARPCProceduresResult",
		() => new FxMetaAPIYARPCProceduresResult(),
		() => [],
		FxMetaAPIYARPCProceduresResult,
		() => [/* @__PURE__ */ $.structField("Out", "dig.Out", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Procedures", /* @__PURE__ */ $.sliceType("transport.Procedure"), [1], 0, true, { tag: "group:\"yarpcfx\"" }), /* @__PURE__ */ $.structField("ReflectionMeta", "reflection.ServerMeta", [2], 24, true, { tag: "group:\"yarpcfx\"" })]
	)
}

export class _MetaAPIYARPCCaller {
	public get streamClient(): protobuf.StreamClient | null {
		return this._fields.streamClient
	}

	public set streamClient(value: protobuf.StreamClient | null) {
		this._fields.streamClient = value
	}

	public _fields: {
		streamClient: protobuf.StreamClient | null
	}

	constructor(init?: Partial<{streamClient?: protobuf.StreamClient | null}>, __goscriptValue?: boolean) {
		this._fields = {
			streamClient: init?.streamClient ?? (null! as protobuf.StreamClient | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): _MetaAPIYARPCCaller {
		return new _MetaAPIYARPCCaller(this, true)
	}

	public __goscriptAssign(source: _MetaAPIYARPCCaller): void {
		const target = this._fields
		const values = source._fields
		target.streamClient = $.assignFieldValue(target.streamClient, values.streamClient, "protobuf.StreamClient")
	}

	public async Health(ctx: context.Context | null, request: __goscript_service_meta_pb.HealthRequest | $.VarRef<__goscript_service_meta_pb.HealthRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_meta_pb.HealthResponse | $.VarRef<__goscript_service_meta_pb.HealthResponse> | null, $.GoError]> {
		const c: _MetaAPIYARPCCaller | $.VarRef<_MetaAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_MetaAPIYARPCCaller>(c).streamClient).Call(ctx, "Health", $.interfaceValue<proto.Message | null>(request, "*apiv1.HealthRequest", /* @__PURE__ */ $.pointerType("apiv1.HealthRequest")), newMetaAPIServiceHealthYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple0: any = $.typeAssertTuple<__goscript_service_meta_pb.HealthResponse | $.VarRef<__goscript_service_meta_pb.HealthResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.HealthResponse"))
		let response: __goscript_service_meta_pb.HealthResponse | $.VarRef<__goscript_service_meta_pb.HealthResponse> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyMetaAPIServiceHealthYARPCResponse(), "*apiv1.HealthResponse", /* @__PURE__ */ $.pointerType("apiv1.HealthResponse")), responseMessage)]
		}
		return [response, err]
	}

	static __typeInfo = $.registerStructType(
		"apiv1._MetaAPIYARPCCaller",
		() => new _MetaAPIYARPCCaller(),
		() => [$.methodSignature("Health", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.HealthRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.HealthResponse"), "error"], true)],
		_MetaAPIYARPCCaller,
		() => [/* @__PURE__ */ $.structField("streamClient", "protobuf.StreamClient", [0], 0, false, { pkgPath: "github.com/uber/cadence-idl/go/proto/api/v1" })]
	)
}

export class _MetaAPIYARPCHandler {
	public get server(): MetaAPIYARPCServer | null {
		return this._fields.server
	}

	public set server(value: MetaAPIYARPCServer | null) {
		this._fields.server = value
	}

	public _fields: {
		server: MetaAPIYARPCServer | null
	}

	constructor(init?: Partial<{server?: MetaAPIYARPCServer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			server: init?.server ?? (null! as MetaAPIYARPCServer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): _MetaAPIYARPCHandler {
		return new _MetaAPIYARPCHandler(this, true)
	}

	public __goscriptAssign(source: _MetaAPIYARPCHandler): void {
		const target = this._fields
		const values = source._fields
		target.server = $.assignFieldValue(target.server, values.server, "apiv1.MetaAPIYARPCServer")
	}

	public async Health(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _MetaAPIYARPCHandler | $.VarRef<_MetaAPIYARPCHandler> | null = this;
		let request: __goscript_service_meta_pb.HealthRequest | $.VarRef<__goscript_service_meta_pb.HealthRequest> | null = null! as __goscript_service_meta_pb.HealthRequest | $.VarRef<__goscript_service_meta_pb.HealthRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple1: any = $.typeAssertTuple<__goscript_service_meta_pb.HealthRequest | $.VarRef<__goscript_service_meta_pb.HealthRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.HealthRequest"))
			request = __goscriptTuple1[0]
			ok = __goscriptTuple1[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyMetaAPIServiceHealthYARPCRequest(), "*apiv1.HealthRequest", /* @__PURE__ */ $.pointerType("apiv1.HealthRequest")), requestMessage)]
			}
		}
		let __goscriptTuple2: any = await $.pointerValue<Exclude<MetaAPIYARPCServer, null>>($.pointerValue<_MetaAPIYARPCHandler>(h).server).Health(ctx, request)
		let response: __goscript_service_meta_pb.HealthResponse | $.VarRef<__goscript_service_meta_pb.HealthResponse> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.HealthResponse", /* @__PURE__ */ $.pointerType("apiv1.HealthResponse")), err]
	}

	static __typeInfo = $.registerStructType(
		"apiv1._MetaAPIYARPCHandler",
		() => new _MetaAPIYARPCHandler(),
		() => [$.methodSignature("Health", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true)],
		_MetaAPIYARPCHandler,
		() => [/* @__PURE__ */ $.structField("server", "apiv1.MetaAPIYARPCServer", [0], 0, false, { pkgPath: "github.com/uber/cadence-idl/go/proto/api/v1" })]
	)
}

export async function newMetaAPIYARPCClient(clientConfig: transport.ClientConfig | null, anyResolver: jsonpb.AnyResolver | null, options: $.Slice<protobuf.ClientOption | null>): globalThis.Promise<MetaAPIYARPCClient | null> {
	return $.interfaceValue<MetaAPIYARPCClient | null>((await (async () => { const __goscriptLiteralField0 = await protobuf.NewStreamClient(new protobuf.ClientParams({ServiceName: "uber.cadence.api.v1.MetaAPI", ClientConfig: clientConfig, AnyResolver: anyResolver, Options: options}, true)); return new _MetaAPIYARPCCaller({streamClient: __goscriptLiteralField0}) })()), "*apiv1._MetaAPIYARPCCaller", /* @__PURE__ */ $.pointerType("apiv1._MetaAPIYARPCCaller"))
}

export async function NewMetaAPIYARPCClient(clientConfig: transport.ClientConfig | null, options: $.Slice<protobuf.ClientOption | null>): globalThis.Promise<MetaAPIYARPCClient | null> {
	return newMetaAPIYARPCClient(clientConfig, null, options)
}

export function buildMetaAPIYARPCProcedures(params: buildMetaAPIYARPCProceduresParams): $.Slice<transport.Procedure> {
	let handler: _MetaAPIYARPCHandler | $.VarRef<_MetaAPIYARPCHandler> | null = new _MetaAPIYARPCHandler({server: params.Server})
	return protobuf.BuildProcedures(new protobuf.BuildProceduresParams({ServiceName: "uber.cadence.api.v1.MetaAPI", UnaryHandlerParams: $.arrayToSlice<protobuf.BuildProceduresUnaryHandlerParams>([(() => { const __goscriptLiteralField1 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.Health(ctx, requestMessage))($.pointerValue<_MetaAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_MetaAPIYARPCHandler).Health-fm"), NewRequest: newMetaAPIServiceHealthYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "Health", Handler: __goscriptLiteralField1}, true) })()]), OnewayHandlerParams: $.arrayToSlice<protobuf.BuildProceduresOnewayHandlerParams>([]), StreamHandlerParams: $.arrayToSlice<protobuf.BuildProceduresStreamHandlerParams>([])}, true))
}

export function BuildMetaAPIYARPCProcedures(server: MetaAPIYARPCServer | null): $.Slice<transport.Procedure> {
	return buildMetaAPIYARPCProcedures(new buildMetaAPIYARPCProceduresParams({Server: server}, true))
}

export function NewFxMetaAPIYARPCClient(name: string, options: $.Slice<protobuf.ClientOption | null>): any {
	return $.interfaceValue($.functionValue(async (params: FxMetaAPIYARPCClientParams): globalThis.Promise<FxMetaAPIYARPCClientResult> => {
		let cc = (__goscriptAwait = $.pointerValue<Exclude<yarpc.ClientConfig, null>>(params.Provider).ClientConfig(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		if (params.Restriction != null) {
			{
				let [namer, ok] = $.typeAssertTuple<transport.Namer | null>((__goscriptAwait = (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? (cc as Exclude<transport.ClientConfig, null>) : $.pointerValue<Exclude<transport.ClientConfig, null>>(cc)).GetUnaryOutbound(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "transport.Namer")
				if (ok) {
					{
						let err = (__goscriptAwait = $.pointerValue<Exclude<restriction.Checker, null>>(params.Restriction).Check(protobuf.Encoding, (__goscriptAwait = (namer !== null && (namer as any).__isVarRef !== true && (namer as any).__goValue === undefined ? (namer as Exclude<transport.Namer, null>) : $.pointerValue<Exclude<transport.Namer, null>>(namer)).TransportName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if (err != null) {
							$.panic((__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
						}
					}
				}
			}
		}

		return (await (async () => { const __goscriptLiteralField2 = await newMetaAPIYARPCClient(cc, params.AnyResolver, options); return new FxMetaAPIYARPCClientResult({Client: __goscriptLiteralField2}, true) })())
	}, ({ kind: $.TypeKind.Function, params: ["apiv1.FxMetaAPIYARPCClientParams"], results: ["apiv1.FxMetaAPIYARPCClientResult"] } as $.FunctionTypeInfo)), "func(params apiv1.FxMetaAPIYARPCClientParams) apiv1.FxMetaAPIYARPCClientResult", ({ kind: $.TypeKind.Function, params: ["apiv1.FxMetaAPIYARPCClientParams"], results: ["apiv1.FxMetaAPIYARPCClientResult"] } as $.FunctionTypeInfo))
}

export function NewFxMetaAPIYARPCProcedures(): any {
	return $.interfaceValue($.functionValue((params: FxMetaAPIYARPCProceduresParams): FxMetaAPIYARPCProceduresResult => {
		return (() => { const __goscriptLiteralField3 = buildMetaAPIYARPCProcedures(new buildMetaAPIYARPCProceduresParams({Server: params.Server, AnyResolver: params.AnyResolver}, true)); return new FxMetaAPIYARPCProceduresResult({Procedures: __goscriptLiteralField3, ReflectionMeta: __goscript_get_MetaAPIReflectionMeta()}, true) })()
	}, ({ kind: $.TypeKind.Function, params: ["apiv1.FxMetaAPIYARPCProceduresParams"], results: ["apiv1.FxMetaAPIYARPCProceduresResult"] } as $.FunctionTypeInfo)), "func(params apiv1.FxMetaAPIYARPCProceduresParams) apiv1.FxMetaAPIYARPCProceduresResult", ({ kind: $.TypeKind.Function, params: ["apiv1.FxMetaAPIYARPCProceduresParams"], results: ["apiv1.FxMetaAPIYARPCProceduresResult"] } as $.FunctionTypeInfo))
}

export var MetaAPIReflectionMeta: reflection.ServerMeta

export function __goscript_init_MetaAPIReflectionMeta(): void {
	if (((MetaAPIReflectionMeta) as any) === undefined) {
		MetaAPIReflectionMeta = new reflection.ServerMeta({ServiceName: "uber.cadence.api.v1.MetaAPI", FileDescriptors: yarpcFileDescriptorClosuref45a67f89288e7f3}, true)
	}
}

export function __goscript_get_MetaAPIReflectionMeta(): reflection.ServerMeta {
	if (((MetaAPIReflectionMeta) as any) === undefined) {
		__goscript_init_MetaAPIReflectionMeta()
	}
	return MetaAPIReflectionMeta
}

export function __goscript_set_MetaAPIReflectionMeta(__goscriptValue: reflection.ServerMeta): void {
	$.assignStruct(MetaAPIReflectionMeta, __goscriptValue)
}

export function newMetaAPIServiceHealthYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_meta_pb.HealthRequest(), "*apiv1.HealthRequest", /* @__PURE__ */ $.pointerType("apiv1.HealthRequest"))
}

export function newMetaAPIServiceHealthYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_meta_pb.HealthResponse(), "*apiv1.HealthResponse", /* @__PURE__ */ $.pointerType("apiv1.HealthResponse"))
}

export var emptyMetaAPIServiceHealthYARPCRequest: __goscript_service_meta_pb.HealthRequest | $.VarRef<__goscript_service_meta_pb.HealthRequest> | null

export function __goscript_init_emptyMetaAPIServiceHealthYARPCRequest(): void {
	if (((emptyMetaAPIServiceHealthYARPCRequest) as any) === undefined) {
		emptyMetaAPIServiceHealthYARPCRequest = new __goscript_service_meta_pb.HealthRequest()
	}
}

export function __goscript_get_emptyMetaAPIServiceHealthYARPCRequest(): __goscript_service_meta_pb.HealthRequest | $.VarRef<__goscript_service_meta_pb.HealthRequest> | null {
	if (((emptyMetaAPIServiceHealthYARPCRequest) as any) === undefined) {
		__goscript_init_emptyMetaAPIServiceHealthYARPCRequest()
	}
	return emptyMetaAPIServiceHealthYARPCRequest
}

export function __goscript_set_emptyMetaAPIServiceHealthYARPCRequest(__goscriptValue: __goscript_service_meta_pb.HealthRequest | $.VarRef<__goscript_service_meta_pb.HealthRequest> | null): void {
	emptyMetaAPIServiceHealthYARPCRequest = __goscriptValue
}

export var emptyMetaAPIServiceHealthYARPCResponse: __goscript_service_meta_pb.HealthResponse | $.VarRef<__goscript_service_meta_pb.HealthResponse> | null

export function __goscript_init_emptyMetaAPIServiceHealthYARPCResponse(): void {
	if (((emptyMetaAPIServiceHealthYARPCResponse) as any) === undefined) {
		emptyMetaAPIServiceHealthYARPCResponse = new __goscript_service_meta_pb.HealthResponse()
	}
}

export function __goscript_get_emptyMetaAPIServiceHealthYARPCResponse(): __goscript_service_meta_pb.HealthResponse | $.VarRef<__goscript_service_meta_pb.HealthResponse> | null {
	if (((emptyMetaAPIServiceHealthYARPCResponse) as any) === undefined) {
		__goscript_init_emptyMetaAPIServiceHealthYARPCResponse()
	}
	return emptyMetaAPIServiceHealthYARPCResponse
}

export function __goscript_set_emptyMetaAPIServiceHealthYARPCResponse(__goscriptValue: __goscript_service_meta_pb.HealthResponse | $.VarRef<__goscript_service_meta_pb.HealthResponse> | null): void {
	emptyMetaAPIServiceHealthYARPCResponse = __goscriptValue
}

export let yarpcFileDescriptorClosuref45a67f89288e7f3: $.Slice<$.Slice<number>> = $.arrayToSlice<$.Slice<number>>([new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 124, 144, 193, 75, 195, 48, 20, 198, 105, 15, 155, 62, 112, 74, 60, 88, 60, 141, 10, 178, 139, 9, 213, 155, 158, 220, 73, 15, 66, 173, 55, 17, 244, 53, 123, 116, 97, 203, 94, 108, 210, 252, 253, 210, 117, 3, 133, 225, 49, 31, 63, 242, 189, 239, 7, 215, 93, 77, 173, 210, 184, 160, 141, 38, 133, 206, 168, 88, 40, 79, 109, 52, 154, 62, 45, 5, 148, 174, 229, 192, 226, 188, 231, 228, 142, 147, 232, 140, 140, 69, 126, 10, 39, 79, 132, 235, 176, 172, 232, 187, 35, 31, 242, 123, 152, 236, 3, 239, 120, 227, 73, 76, 32, 229, 85, 150, 76, 147, 217, 81, 149, 242, 74, 100, 48, 182, 228, 61, 54, 148, 165, 211, 100, 118, 92, 237, 159, 183, 31, 48, 126, 161, 128, 143, 229, 179, 120, 133, 209, 240, 141, 200, 229, 129, 94, 249, 167, 244, 242, 234, 95, 102, 184, 99, 254, 5, 23, 154, 237, 33, 114, 126, 214, 215, 190, 13, 147, 203, 126, 108, 153, 188, 23, 141, 9, 203, 174, 150, 154, 173, 250, 109, 232, 198, 44, 214, 170, 97, 181, 149, 178, 211, 245, 128, 206, 196, 162, 30, 109, 179, 187, 159, 0, 0, 0, 255, 255, 69, 54, 133, 197, 82, 1, 0, 0]) as $.Slice<number>])

export function __goscript_set_yarpcFileDescriptorClosuref45a67f89288e7f3(__goscriptValue: $.Slice<$.Slice<number>>): void {
	yarpcFileDescriptorClosuref45a67f89288e7f3 = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await yarpc.RegisterClientBuilder($.interfaceValue($.functionValue(async (clientConfig: transport.ClientConfig | null, structField: reflect.StructField): globalThis.Promise<MetaAPIYARPCClient | null> => {
		return await NewMetaAPIYARPCClient(clientConfig, protobuf.ClientBuilderOptions(clientConfig, structField))
	}, ({ kind: $.TypeKind.Function, params: ["transport.ClientConfig", "reflect.StructField"], results: ["apiv1.MetaAPIYARPCClient"] } as $.FunctionTypeInfo)), "func(clientConfig transport.ClientConfig, structField reflect.StructField) apiv1.MetaAPIYARPCClient", ({ kind: $.TypeKind.Function, params: ["transport.ClientConfig", "reflect.StructField"], results: ["apiv1.MetaAPIYARPCClient"] } as $.FunctionTypeInfo)))
}

var __goscriptAwait: any

export { __goscriptInit0 }
