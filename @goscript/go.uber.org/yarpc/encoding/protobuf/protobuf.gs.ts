// Generated file based on protobuf.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as jsonpb from "@goscript/github.com/gogo/protobuf/jsonpb/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as procedure from "@goscript/go.uber.org/yarpc/pkg/procedure/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import type * as encoding from "@goscript/go.uber.org/yarpc/api/encoding/index.js"

import * as __goscript_inbound from "./inbound.gs.ts"

import * as __goscript_marshal from "./marshal.gs.ts"

import * as __goscript_outbound from "./outbound.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"
import "@goscript/context/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/github.com/gogo/protobuf/jsonpb/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/go.uber.org/yarpc/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/pkg/procedure/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "./inbound.gs.ts"
import "./marshal.gs.ts"
import "./outbound.gs.ts"
import "./stream.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/encoding/protobuf", ["protobuf.BuildProceduresParams", "protobuf.BuildProceduresUnaryHandlerParams", "protobuf.BuildProceduresOnewayHandlerParams", "protobuf.BuildProceduresStreamHandlerParams", "protobuf.Client", "protobuf.StreamClient", "protobuf.ClientOption", "protobuf.ClientParams", "protobuf.UnaryHandlerParams", "protobuf.OnewayHandlerParams", "protobuf.StreamHandlerParams", "protobuf.useJSON", "protobuf.ClientStream", "protobuf.ServerStream"])

export type Client = {
	Call(ctx: context.Context | null, requestMethodName: string, request: proto.Message | null, newResponse: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null, options: $.Slice<yarpc.CallOption>): [proto.Message | null, $.GoError] | globalThis.Promise<[proto.Message | null, $.GoError]>
	CallOneway(ctx: context.Context | null, requestMethodName: string, request: proto.Message | null, options: $.Slice<yarpc.CallOption>): [transport.Ack | null, $.GoError] | globalThis.Promise<[transport.Ack | null, $.GoError]>
}

$.registerInterfaceType(
	"protobuf.Client",
	null,
	[$.methodSignature("Call", [["ctx", "context.Context"], ["requestMethodName", /* @__PURE__ */ $.basicType("string")], ["request", "proto.Message"], ["newResponse", ({ kind: $.TypeKind.Function, params: [], results: ["proto.Message"] } as $.FunctionTypeInfo)], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["proto.Message", "error"]), $.methodSignature("CallOneway", [["ctx", "context.Context"], ["requestMethodName", /* @__PURE__ */ $.basicType("string")], ["request", "proto.Message"], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["transport.Ack", "error"])]
);

export type StreamClient = {
	Call(ctx: context.Context | null, requestMethodName: string, request: proto.Message | null, newResponse: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null, options: $.Slice<yarpc.CallOption>): [proto.Message | null, $.GoError] | globalThis.Promise<[proto.Message | null, $.GoError]>
	CallOneway(ctx: context.Context | null, requestMethodName: string, request: proto.Message | null, options: $.Slice<yarpc.CallOption>): [transport.Ack | null, $.GoError] | globalThis.Promise<[transport.Ack | null, $.GoError]>
	CallStream(ctx: context.Context | null, requestMethodName: string, opts: $.Slice<yarpc.CallOption>): [ClientStream | $.VarRef<ClientStream> | null, $.GoError] | globalThis.Promise<[ClientStream | $.VarRef<ClientStream> | null, $.GoError]>
}

$.registerInterfaceType(
	"protobuf.StreamClient",
	null,
	[$.methodSignature("Call", [["ctx", "context.Context"], ["requestMethodName", /* @__PURE__ */ $.basicType("string")], ["request", "proto.Message"], ["newResponse", ({ kind: $.TypeKind.Function, params: [], results: ["proto.Message"] } as $.FunctionTypeInfo)], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["proto.Message", "error"]), $.methodSignature("CallOneway", [["ctx", "context.Context"], ["requestMethodName", /* @__PURE__ */ $.basicType("string")], ["request", "proto.Message"], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["transport.Ack", "error"]), $.methodSignature("CallStream", [["ctx", "context.Context"], ["requestMethodName", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("protobuf.ClientStream"), "error"])]
);

export type ClientOption = {
	apply(_p0: __goscript_outbound.client | $.VarRef<__goscript_outbound.client> | null): void
}

$.registerInterfaceType(
	"protobuf.ClientOption",
	null,
	[$.methodSignature("apply", [/* @__PURE__ */ $.pointerType("protobuf.client")])]
);

export class BuildProceduresParams {
	public get ServiceName(): string {
		return this._fields.ServiceName
	}

	public set ServiceName(value: string) {
		this._fields.ServiceName = value
	}

	public get UnaryHandlerParams(): $.Slice<BuildProceduresUnaryHandlerParams> {
		return this._fields.UnaryHandlerParams
	}

	public set UnaryHandlerParams(value: $.Slice<BuildProceduresUnaryHandlerParams>) {
		this._fields.UnaryHandlerParams = value
	}

	public get OnewayHandlerParams(): $.Slice<BuildProceduresOnewayHandlerParams> {
		return this._fields.OnewayHandlerParams
	}

	public set OnewayHandlerParams(value: $.Slice<BuildProceduresOnewayHandlerParams>) {
		this._fields.OnewayHandlerParams = value
	}

	public get StreamHandlerParams(): $.Slice<BuildProceduresStreamHandlerParams> {
		return this._fields.StreamHandlerParams
	}

	public set StreamHandlerParams(value: $.Slice<BuildProceduresStreamHandlerParams>) {
		this._fields.StreamHandlerParams = value
	}

	public _fields: {
		ServiceName: string
		UnaryHandlerParams: $.Slice<BuildProceduresUnaryHandlerParams>
		OnewayHandlerParams: $.Slice<BuildProceduresOnewayHandlerParams>
		StreamHandlerParams: $.Slice<BuildProceduresStreamHandlerParams>
	}

	constructor(init?: Partial<{ServiceName?: string, UnaryHandlerParams?: $.Slice<BuildProceduresUnaryHandlerParams>, OnewayHandlerParams?: $.Slice<BuildProceduresOnewayHandlerParams>, StreamHandlerParams?: $.Slice<BuildProceduresStreamHandlerParams>}>, __goscriptValue?: boolean) {
		this._fields = {
			ServiceName: init?.ServiceName ?? ("" as string),
			UnaryHandlerParams: init?.UnaryHandlerParams ?? (null! as $.Slice<BuildProceduresUnaryHandlerParams>),
			OnewayHandlerParams: init?.OnewayHandlerParams ?? (null! as $.Slice<BuildProceduresOnewayHandlerParams>),
			StreamHandlerParams: init?.StreamHandlerParams ?? (null! as $.Slice<BuildProceduresStreamHandlerParams>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BuildProceduresParams {
		return new BuildProceduresParams(this, true)
	}

	public __goscriptAssign(source: BuildProceduresParams): void {
		const target = this._fields
		const values = source._fields
		target.ServiceName = values.ServiceName
		target.UnaryHandlerParams = values.UnaryHandlerParams
		target.OnewayHandlerParams = values.OnewayHandlerParams
		target.StreamHandlerParams = values.StreamHandlerParams
	}

	static __typeInfo = $.registerStructType(
		"protobuf.BuildProceduresParams",
		() => new BuildProceduresParams(),
		() => [],
		BuildProceduresParams,
		() => [/* @__PURE__ */ $.structField("ServiceName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("UnaryHandlerParams", /* @__PURE__ */ $.sliceType("protobuf.BuildProceduresUnaryHandlerParams"), [1], 16, true), /* @__PURE__ */ $.structField("OnewayHandlerParams", /* @__PURE__ */ $.sliceType("protobuf.BuildProceduresOnewayHandlerParams"), [2], 40, true), /* @__PURE__ */ $.structField("StreamHandlerParams", /* @__PURE__ */ $.sliceType("protobuf.BuildProceduresStreamHandlerParams"), [3], 64, true)]
	)
}

export class BuildProceduresUnaryHandlerParams {
	public get MethodName(): string {
		return this._fields.MethodName
	}

	public set MethodName(value: string) {
		this._fields.MethodName = value
	}

	public get Handler(): transport.UnaryHandler | null {
		return this._fields.Handler
	}

	public set Handler(value: transport.UnaryHandler | null) {
		this._fields.Handler = value
	}

	public _fields: {
		MethodName: string
		Handler: transport.UnaryHandler | null
	}

	constructor(init?: Partial<{MethodName?: string, Handler?: transport.UnaryHandler | null}>, __goscriptValue?: boolean) {
		this._fields = {
			MethodName: init?.MethodName ?? ("" as string),
			Handler: init?.Handler ?? (null! as transport.UnaryHandler | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BuildProceduresUnaryHandlerParams {
		return new BuildProceduresUnaryHandlerParams(this, true)
	}

	public __goscriptAssign(source: BuildProceduresUnaryHandlerParams): void {
		const target = this._fields
		const values = source._fields
		target.MethodName = values.MethodName
		target.Handler = $.assignFieldValue(target.Handler, values.Handler, "transport.UnaryHandler")
	}

	static __typeInfo = $.registerStructType(
		"protobuf.BuildProceduresUnaryHandlerParams",
		() => new BuildProceduresUnaryHandlerParams(),
		() => [],
		BuildProceduresUnaryHandlerParams,
		() => [/* @__PURE__ */ $.structField("MethodName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Handler", "transport.UnaryHandler", [1], 16, true)]
	)
}

export class BuildProceduresOnewayHandlerParams {
	public get MethodName(): string {
		return this._fields.MethodName
	}

	public set MethodName(value: string) {
		this._fields.MethodName = value
	}

	public get Handler(): transport.OnewayHandler | null {
		return this._fields.Handler
	}

	public set Handler(value: transport.OnewayHandler | null) {
		this._fields.Handler = value
	}

	public _fields: {
		MethodName: string
		Handler: transport.OnewayHandler | null
	}

	constructor(init?: Partial<{MethodName?: string, Handler?: transport.OnewayHandler | null}>, __goscriptValue?: boolean) {
		this._fields = {
			MethodName: init?.MethodName ?? ("" as string),
			Handler: init?.Handler ?? (null! as transport.OnewayHandler | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BuildProceduresOnewayHandlerParams {
		return new BuildProceduresOnewayHandlerParams(this, true)
	}

	public __goscriptAssign(source: BuildProceduresOnewayHandlerParams): void {
		const target = this._fields
		const values = source._fields
		target.MethodName = values.MethodName
		target.Handler = $.assignFieldValue(target.Handler, values.Handler, "transport.OnewayHandler")
	}

	static __typeInfo = $.registerStructType(
		"protobuf.BuildProceduresOnewayHandlerParams",
		() => new BuildProceduresOnewayHandlerParams(),
		() => [],
		BuildProceduresOnewayHandlerParams,
		() => [/* @__PURE__ */ $.structField("MethodName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Handler", "transport.OnewayHandler", [1], 16, true)]
	)
}

export class BuildProceduresStreamHandlerParams {
	public get MethodName(): string {
		return this._fields.MethodName
	}

	public set MethodName(value: string) {
		this._fields.MethodName = value
	}

	public get Handler(): transport.StreamHandler | null {
		return this._fields.Handler
	}

	public set Handler(value: transport.StreamHandler | null) {
		this._fields.Handler = value
	}

	public _fields: {
		MethodName: string
		Handler: transport.StreamHandler | null
	}

	constructor(init?: Partial<{MethodName?: string, Handler?: transport.StreamHandler | null}>, __goscriptValue?: boolean) {
		this._fields = {
			MethodName: init?.MethodName ?? ("" as string),
			Handler: init?.Handler ?? (null! as transport.StreamHandler | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BuildProceduresStreamHandlerParams {
		return new BuildProceduresStreamHandlerParams(this, true)
	}

	public __goscriptAssign(source: BuildProceduresStreamHandlerParams): void {
		const target = this._fields
		const values = source._fields
		target.MethodName = values.MethodName
		target.Handler = $.assignFieldValue(target.Handler, values.Handler, "transport.StreamHandler")
	}

	static __typeInfo = $.registerStructType(
		"protobuf.BuildProceduresStreamHandlerParams",
		() => new BuildProceduresStreamHandlerParams(),
		() => [],
		BuildProceduresStreamHandlerParams,
		() => [/* @__PURE__ */ $.structField("MethodName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Handler", "transport.StreamHandler", [1], 16, true)]
	)
}

export class ClientParams {
	public get ServiceName(): string {
		return this._fields.ServiceName
	}

	public set ServiceName(value: string) {
		this._fields.ServiceName = value
	}

	public get ClientConfig(): transport.ClientConfig | null {
		return this._fields.ClientConfig
	}

	public set ClientConfig(value: transport.ClientConfig | null) {
		this._fields.ClientConfig = value
	}

	public get AnyResolver(): jsonpb.AnyResolver | null {
		return this._fields.AnyResolver
	}

	public set AnyResolver(value: jsonpb.AnyResolver | null) {
		this._fields.AnyResolver = value
	}

	public get Options(): $.Slice<ClientOption | null> {
		return this._fields.Options
	}

	public set Options(value: $.Slice<ClientOption | null>) {
		this._fields.Options = value
	}

	public _fields: {
		ServiceName: string
		ClientConfig: transport.ClientConfig | null
		AnyResolver: jsonpb.AnyResolver | null
		Options: $.Slice<ClientOption | null>
	}

	constructor(init?: Partial<{ServiceName?: string, ClientConfig?: transport.ClientConfig | null, AnyResolver?: jsonpb.AnyResolver | null, Options?: $.Slice<ClientOption | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			ServiceName: init?.ServiceName ?? ("" as string),
			ClientConfig: init?.ClientConfig ?? (null! as transport.ClientConfig | null),
			AnyResolver: init?.AnyResolver ?? (null! as jsonpb.AnyResolver | null),
			Options: init?.Options ?? (null! as $.Slice<ClientOption | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientParams {
		return new ClientParams(this, true)
	}

	public __goscriptAssign(source: ClientParams): void {
		const target = this._fields
		const values = source._fields
		target.ServiceName = values.ServiceName
		target.ClientConfig = $.assignFieldValue(target.ClientConfig, values.ClientConfig, "transport.ClientConfig")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
		target.Options = values.Options
	}

	static __typeInfo = $.registerStructType(
		"protobuf.ClientParams",
		() => new ClientParams(),
		() => [],
		ClientParams,
		() => [/* @__PURE__ */ $.structField("ServiceName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("ClientConfig", "transport.ClientConfig", [1], 16, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [2], 32, true), /* @__PURE__ */ $.structField("Options", /* @__PURE__ */ $.sliceType("protobuf.ClientOption"), [3], 48, true)]
	)
}

export class UnaryHandlerParams {
	public get Handle(): ((_p0: context.Context | null, _p1: proto.Message | null) => [proto.Message | null, $.GoError] | globalThis.Promise<[proto.Message | null, $.GoError]>) | null {
		return this._fields.Handle
	}

	public set Handle(value: ((_p0: context.Context | null, _p1: proto.Message | null) => [proto.Message | null, $.GoError] | globalThis.Promise<[proto.Message | null, $.GoError]>) | null) {
		this._fields.Handle = value
	}

	public get NewRequest(): (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null {
		return this._fields.NewRequest
	}

	public set NewRequest(value: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null) {
		this._fields.NewRequest = value
	}

	public get AnyResolver(): jsonpb.AnyResolver | null {
		return this._fields.AnyResolver
	}

	public set AnyResolver(value: jsonpb.AnyResolver | null) {
		this._fields.AnyResolver = value
	}

	public _fields: {
		Handle: ((_p0: context.Context | null, _p1: proto.Message | null) => [proto.Message | null, $.GoError] | globalThis.Promise<[proto.Message | null, $.GoError]>) | null
		NewRequest: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null
		AnyResolver: jsonpb.AnyResolver | null
	}

	constructor(init?: Partial<{Handle?: ((_p0: context.Context | null, _p1: proto.Message | null) => [proto.Message | null, $.GoError] | globalThis.Promise<[proto.Message | null, $.GoError]>) | null, NewRequest?: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null, AnyResolver?: jsonpb.AnyResolver | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Handle: init?.Handle ?? (null! as ((_p0: context.Context | null, _p1: proto.Message | null) => [proto.Message | null, $.GoError] | globalThis.Promise<[proto.Message | null, $.GoError]>) | null),
			NewRequest: init?.NewRequest ?? (null! as (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null),
			AnyResolver: init?.AnyResolver ?? (null! as jsonpb.AnyResolver | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UnaryHandlerParams {
		return new UnaryHandlerParams(this, true)
	}

	public __goscriptAssign(source: UnaryHandlerParams): void {
		const target = this._fields
		const values = source._fields
		target.Handle = values.Handle
		target.NewRequest = values.NewRequest
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
	}

	static __typeInfo = $.registerStructType(
		"protobuf.UnaryHandlerParams",
		() => new UnaryHandlerParams(),
		() => [],
		UnaryHandlerParams,
		() => [/* @__PURE__ */ $.structField("Handle", ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("NewRequest", ({ kind: $.TypeKind.Function, params: [], results: ["proto.Message"] } as $.FunctionTypeInfo), [1], 8, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [2], 16, true)]
	)
}

export class OnewayHandlerParams {
	public get Handle(): ((_p0: context.Context | null, _p1: proto.Message | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.Handle
	}

	public set Handle(value: ((_p0: context.Context | null, _p1: proto.Message | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.Handle = value
	}

	public get NewRequest(): (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null {
		return this._fields.NewRequest
	}

	public set NewRequest(value: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null) {
		this._fields.NewRequest = value
	}

	public get AnyResolver(): jsonpb.AnyResolver | null {
		return this._fields.AnyResolver
	}

	public set AnyResolver(value: jsonpb.AnyResolver | null) {
		this._fields.AnyResolver = value
	}

	public _fields: {
		Handle: ((_p0: context.Context | null, _p1: proto.Message | null) => $.GoError | globalThis.Promise<$.GoError>) | null
		NewRequest: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null
		AnyResolver: jsonpb.AnyResolver | null
	}

	constructor(init?: Partial<{Handle?: ((_p0: context.Context | null, _p1: proto.Message | null) => $.GoError | globalThis.Promise<$.GoError>) | null, NewRequest?: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null, AnyResolver?: jsonpb.AnyResolver | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Handle: init?.Handle ?? (null! as ((_p0: context.Context | null, _p1: proto.Message | null) => $.GoError | globalThis.Promise<$.GoError>) | null),
			NewRequest: init?.NewRequest ?? (null! as (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null),
			AnyResolver: init?.AnyResolver ?? (null! as jsonpb.AnyResolver | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OnewayHandlerParams {
		return new OnewayHandlerParams(this, true)
	}

	public __goscriptAssign(source: OnewayHandlerParams): void {
		const target = this._fields
		const values = source._fields
		target.Handle = values.Handle
		target.NewRequest = values.NewRequest
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
	}

	static __typeInfo = $.registerStructType(
		"protobuf.OnewayHandlerParams",
		() => new OnewayHandlerParams(),
		() => [],
		OnewayHandlerParams,
		() => [/* @__PURE__ */ $.structField("Handle", ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["error"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("NewRequest", ({ kind: $.TypeKind.Function, params: [], results: ["proto.Message"] } as $.FunctionTypeInfo), [1], 8, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [2], 16, true)]
	)
}

export class StreamHandlerParams {
	public get Handle(): ((_p0: ServerStream | $.VarRef<ServerStream> | null) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.Handle
	}

	public set Handle(value: ((_p0: ServerStream | $.VarRef<ServerStream> | null) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.Handle = value
	}

	public _fields: {
		Handle: ((_p0: ServerStream | $.VarRef<ServerStream> | null) => $.GoError | globalThis.Promise<$.GoError>) | null
	}

	constructor(init?: Partial<{Handle?: ((_p0: ServerStream | $.VarRef<ServerStream> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Handle: init?.Handle ?? (null! as ((_p0: ServerStream | $.VarRef<ServerStream> | null) => $.GoError | globalThis.Promise<$.GoError>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StreamHandlerParams {
		return new StreamHandlerParams(this, true)
	}

	public __goscriptAssign(source: StreamHandlerParams): void {
		const target = this._fields
		const values = source._fields
		target.Handle = values.Handle
	}

	static __typeInfo = $.registerStructType(
		"protobuf.StreamHandlerParams",
		() => new StreamHandlerParams(),
		() => [],
		StreamHandlerParams,
		() => [/* @__PURE__ */ $.structField("Handle", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("protobuf.ServerStream")], results: ["error"] } as $.FunctionTypeInfo), [0], 0, true)]
	)
}

export class useJSON {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): useJSON {
		return new useJSON(this, true)
	}

	public __goscriptAssign(source: useJSON): void {
	}

	public apply(client: __goscript_outbound.client | $.VarRef<__goscript_outbound.client> | null): void {
		$.pointerValue<__goscript_outbound.client>(client).encoding = "json"
	}

	static __typeInfo = $.registerStructType(
		"protobuf.useJSON",
		() => new useJSON(),
		() => [$.methodSignature("apply", [["client", /* @__PURE__ */ $.pointerType("protobuf.client")]])],
		useJSON,
		() => []
	)
}

export class ClientStream {
	public get stream(): transport.ClientStream | $.VarRef<transport.ClientStream> | null {
		return this._fields.stream
	}

	public set stream(value: transport.ClientStream | $.VarRef<transport.ClientStream> | null) {
		this._fields.stream = value
	}

	public get codec(): __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null {
		return this._fields.codec
	}

	public set codec(value: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null) {
		this._fields.codec = value
	}

	public _fields: {
		stream: transport.ClientStream | $.VarRef<transport.ClientStream> | null
		codec: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null
	}

	constructor(init?: Partial<{stream?: transport.ClientStream | $.VarRef<transport.ClientStream> | null, codec?: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			stream: init?.stream ?? (null! as transport.ClientStream | $.VarRef<transport.ClientStream> | null),
			codec: init?.codec ?? (null! as __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientStream {
		return new ClientStream(this, true)
	}

	public __goscriptAssign(source: ClientStream): void {
		const target = this._fields
		const values = source._fields
		target.stream = values.stream
		target.codec = values.codec
	}

	public async Close(options: $.Slice<yarpc.StreamOption | null>): globalThis.Promise<$.GoError> {
		const c: ClientStream | $.VarRef<ClientStream> | null = this;
		return transport.ClientStream.prototype.Close.call($.pointerValue<ClientStream>(c).stream, context.Background())
	}

	public async Context(): globalThis.Promise<context.Context | null> {
		const c: ClientStream | $.VarRef<ClientStream> | null = this;
		return transport.ClientStream.prototype.Context.call($.pointerValue<ClientStream>(c).stream)
	}

	public async Receive(newMessage: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null, options: $.Slice<yarpc.StreamOption | null>): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const c: ClientStream | $.VarRef<ClientStream> | null = this;
		const c$: ClientStream = c == null ? $.pointerTarget<ClientStream>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ClientStream>(c)
		return __goscript_stream.readFromStream(context.Background(), $.interfaceValue<transport.Stream | null>((c$ as ClientStream).stream, "*transport.ClientStream", /* @__PURE__ */ $.pointerType("transport.ClientStream")), newMessage, (c$ as ClientStream).codec)
	}

	public async Send(message: proto.Message | null, options: $.Slice<yarpc.StreamOption | null>): globalThis.Promise<$.GoError> {
		const c: ClientStream | $.VarRef<ClientStream> | null = this;
		const c$: ClientStream = c == null ? $.pointerTarget<ClientStream>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ClientStream>(c)
		return __goscript_stream.writeToStream(context.Background(), $.interfaceValue<transport.Stream | null>((c$ as ClientStream).stream, "*transport.ClientStream", /* @__PURE__ */ $.pointerType("transport.ClientStream")), message, (c$ as ClientStream).codec)
	}

	static __typeInfo = $.registerStructType(
		"protobuf.ClientStream",
		() => new ClientStream(),
		() => [$.methodSignature("Close", [["options", /* @__PURE__ */ $.sliceType("yarpc.StreamOption")]], ["error"], true), $.methodSignature("Context", [], ["context.Context"], true), $.methodSignature("Receive", [["newMessage", ({ kind: $.TypeKind.Function, params: [], results: ["proto.Message"] } as $.FunctionTypeInfo)], ["options", /* @__PURE__ */ $.sliceType("yarpc.StreamOption")]], ["proto.Message", "error"], true), $.methodSignature("Send", [["message", "proto.Message"], ["options", /* @__PURE__ */ $.sliceType("yarpc.StreamOption")]], ["error"], true)],
		ClientStream,
		() => [/* @__PURE__ */ $.structField("stream", /* @__PURE__ */ $.pointerType("transport.ClientStream"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" }), /* @__PURE__ */ $.structField("codec", /* @__PURE__ */ $.pointerType("protobuf.codec"), [1], 8, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" })]
	)
}

export class ServerStream {
	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get stream(): transport.ServerStream | $.VarRef<transport.ServerStream> | null {
		return this._fields.stream
	}

	public set stream(value: transport.ServerStream | $.VarRef<transport.ServerStream> | null) {
		this._fields.stream = value
	}

	public get codec(): __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null {
		return this._fields.codec
	}

	public set codec(value: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null) {
		this._fields.codec = value
	}

	public _fields: {
		ctx: context.Context | null
		stream: transport.ServerStream | $.VarRef<transport.ServerStream> | null
		codec: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null
	}

	constructor(init?: Partial<{ctx?: context.Context | null, stream?: transport.ServerStream | $.VarRef<transport.ServerStream> | null, codec?: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ctx: init?.ctx ?? (null! as context.Context | null),
			stream: init?.stream ?? (null! as transport.ServerStream | $.VarRef<transport.ServerStream> | null),
			codec: init?.codec ?? (null! as __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServerStream {
		return new ServerStream(this, true)
	}

	public __goscriptAssign(source: ServerStream): void {
		const target = this._fields
		const values = source._fields
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.stream = values.stream
		target.codec = values.codec
	}

	public Context(): context.Context | null {
		const s: ServerStream | $.VarRef<ServerStream> | null = this;
		return $.pointerValue<ServerStream>(s).ctx
	}

	public async Receive(newMessage: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null, options: $.Slice<yarpc.StreamOption | null>): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const s: ServerStream | $.VarRef<ServerStream> | null = this;
		const s$: ServerStream = s == null ? $.pointerTarget<ServerStream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<ServerStream>(s)
		return __goscript_stream.readFromStream(context.Background(), $.interfaceValue<transport.Stream | null>((s$ as ServerStream).stream, "*transport.ServerStream", /* @__PURE__ */ $.pointerType("transport.ServerStream")), newMessage, (s$ as ServerStream).codec)
	}

	public async Send(message: proto.Message | null, options: $.Slice<yarpc.StreamOption | null>): globalThis.Promise<$.GoError> {
		const s: ServerStream | $.VarRef<ServerStream> | null = this;
		const s$: ServerStream = s == null ? $.pointerTarget<ServerStream>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<ServerStream>(s)
		return __goscript_stream.writeToStream(context.Background(), $.interfaceValue<transport.Stream | null>((s$ as ServerStream).stream, "*transport.ServerStream", /* @__PURE__ */ $.pointerType("transport.ServerStream")), message, (s$ as ServerStream).codec)
	}

	static __typeInfo = $.registerStructType(
		"protobuf.ServerStream",
		() => new ServerStream(),
		() => [$.methodSignature("Context", [], ["context.Context"], true), $.methodSignature("Receive", [["newMessage", ({ kind: $.TypeKind.Function, params: [], results: ["proto.Message"] } as $.FunctionTypeInfo)], ["options", /* @__PURE__ */ $.sliceType("yarpc.StreamOption")]], ["proto.Message", "error"], true), $.methodSignature("Send", [["message", "proto.Message"], ["options", /* @__PURE__ */ $.sliceType("yarpc.StreamOption")]], ["error"], true)],
		ServerStream,
		() => [/* @__PURE__ */ $.structField("ctx", "context.Context", [0], 0, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" }), /* @__PURE__ */ $.structField("stream", /* @__PURE__ */ $.pointerType("transport.ServerStream"), [1], 16, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" }), /* @__PURE__ */ $.structField("codec", /* @__PURE__ */ $.pointerType("protobuf.codec"), [2], 24, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" })]
	)
}

export const Encoding: transport.Encoding = "proto"

export const JSONEncoding: transport.Encoding = "json"

export let UseJSON: ClientOption | null = $.interfaceValue<ClientOption | null>(new useJSON(undefined, true), "protobuf.useJSON", "protobuf.useJSON")

export function __goscript_set_UseJSON(__goscriptValue: ClientOption | null): void {
	UseJSON = __goscriptValue
}

export function BuildProcedures(params: BuildProceduresParams): $.Slice<transport.Procedure> {
	let procedures: $.Slice<transport.Procedure> = $.makeSlice<transport.Procedure>(0, 2 * (($.sliceLen(params.UnaryHandlerParams) + $.sliceLen(params.OnewayHandlerParams)) + $.sliceLen(params.StreamHandlerParams)), undefined, () => new transport.Procedure(undefined, true))
	for (let __goscriptRangeTarget0 = params.UnaryHandlerParams, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let unaryHandlerParams = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as BuildProceduresUnaryHandlerParams)).clone()
		procedures = $.append(procedures, (() => { const __goscriptLiteralField0 = procedure.ToName(params.ServiceName, unaryHandlerParams.MethodName); const __goscriptLiteralField1 = transport.NewUnaryHandlerSpec(unaryHandlerParams.Handler); return new transport.Procedure({Name: __goscriptLiteralField0, HandlerSpec: __goscriptLiteralField1, Encoding: "proto"}, true) })(), (() => { const __goscriptLiteralField2 = procedure.ToName(params.ServiceName, unaryHandlerParams.MethodName); const __goscriptLiteralField3 = transport.NewUnaryHandlerSpec(unaryHandlerParams.Handler); return new transport.Procedure({Name: __goscriptLiteralField2, HandlerSpec: __goscriptLiteralField3, Encoding: "json"}, true) })())
	}
	for (let __goscriptRangeTarget1 = params.OnewayHandlerParams, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let onewayHandlerParams = ((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as BuildProceduresOnewayHandlerParams)).clone()
		procedures = $.append(procedures, (() => { const __goscriptLiteralField4 = procedure.ToName(params.ServiceName, onewayHandlerParams.MethodName); const __goscriptLiteralField5 = transport.NewOnewayHandlerSpec(onewayHandlerParams.Handler); return new transport.Procedure({Name: __goscriptLiteralField4, HandlerSpec: __goscriptLiteralField5, Encoding: "proto"}, true) })(), (() => { const __goscriptLiteralField6 = procedure.ToName(params.ServiceName, onewayHandlerParams.MethodName); const __goscriptLiteralField7 = transport.NewOnewayHandlerSpec(onewayHandlerParams.Handler); return new transport.Procedure({Name: __goscriptLiteralField6, HandlerSpec: __goscriptLiteralField7, Encoding: "json"}, true) })())
	}
	for (let __goscriptRangeTarget2 = params.StreamHandlerParams, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let streamHandlerParams = ((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as BuildProceduresStreamHandlerParams)).clone()
		procedures = $.append(procedures, (() => { const __goscriptLiteralField8 = procedure.ToName(params.ServiceName, streamHandlerParams.MethodName); const __goscriptLiteralField9 = transport.NewStreamHandlerSpec(streamHandlerParams.Handler); return new transport.Procedure({Name: __goscriptLiteralField8, HandlerSpec: __goscriptLiteralField9, Encoding: "proto"}, true) })(), (() => { const __goscriptLiteralField10 = procedure.ToName(params.ServiceName, streamHandlerParams.MethodName); const __goscriptLiteralField11 = transport.NewStreamHandlerSpec(streamHandlerParams.Handler); return new transport.Procedure({Name: __goscriptLiteralField10, HandlerSpec: __goscriptLiteralField11, Encoding: "json"}, true) })())
	}
	return procedures
}

export async function NewClient(params: ClientParams): globalThis.Promise<Client | null> {
	return $.interfaceValue<Client | null>(await __goscript_outbound.newClient(params.ServiceName, params.ClientConfig, params.AnyResolver, params.Options), "*protobuf.client", /* @__PURE__ */ $.pointerType("protobuf.client"))
}

export async function NewStreamClient(params: ClientParams): globalThis.Promise<StreamClient | null> {
	return $.interfaceValue<StreamClient | null>(await __goscript_outbound.newClient(params.ServiceName, params.ClientConfig, params.AnyResolver, params.Options), "*protobuf.client", /* @__PURE__ */ $.pointerType("protobuf.client"))
}

export function NewUnaryHandler(params: UnaryHandlerParams): transport.UnaryHandler | null {
	return $.interfaceValue<transport.UnaryHandler | null>(__goscript_inbound.newUnaryHandler(params.Handle, params.NewRequest, __goscript_marshal.newCodec(params.AnyResolver)), "*protobuf.unaryHandler", /* @__PURE__ */ $.pointerType("protobuf.unaryHandler"))
}

export function NewOnewayHandler(params: OnewayHandlerParams): transport.OnewayHandler | null {
	return $.interfaceValue<transport.OnewayHandler | null>(__goscript_inbound.newOnewayHandler(params.Handle, params.NewRequest, __goscript_marshal.newCodec(params.AnyResolver)), "*protobuf.onewayHandler", /* @__PURE__ */ $.pointerType("protobuf.onewayHandler"))
}

export function NewStreamHandler(params: StreamHandlerParams): transport.StreamHandler | null {
	return $.interfaceValue<transport.StreamHandler | null>(__goscript_inbound.newStreamHandler(params.Handle), "*protobuf.streamHandler", /* @__PURE__ */ $.pointerType("protobuf.streamHandler"))
}

export function ClientBuilderOptions(_p0: transport.ClientConfig | null, structField: reflect.StructField): $.Slice<ClientOption | null> {
	let opts: $.Slice<ClientOption | null> = null! as $.Slice<ClientOption | null>
	for (let __goscriptRangeTarget3 = uniqueLowercaseStrings(strings.Split(reflect.StructTag_Get(structField.Tag, "proto"), ",")), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let opt = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
		switch (opt) {
			case "json":
			{
				opts = $.appendOne(opts, UseJSON, $.appendZeros.nil)
				break
			}
		}
	}
	return opts
}

export function CastError(expectedType: proto.Message | null, actualType: proto.Message | null): $.GoError {
	return $.interfaceValue<$.GoError>(yarpcerrors.Newf(13, "expected proto.Message to have type %T but had type %T", $.arrayToSlice<any>([(expectedType as any), (actualType as any)])), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function uniqueLowercaseStrings(s: $.Slice<string>): $.Slice<string> {
	let m: globalThis.Map<string, boolean> | null = $.makeMap<string, boolean>()
	for (let __goscriptRangeTarget4 = s, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
		let e = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as string)
		if (!$.stringEqual(e, "")) {
			$.mapSet(m, strings.ToLower(e), true)
		}
	}
	let c: $.Slice<string> = $.makeSlice<string>(0, $.len(m), "string")
	for (const [key, __rangeValue] of m?.entries() ?? []) {
		c = $.appendOne(c, key)
	}
	return c
}
