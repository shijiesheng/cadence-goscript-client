// Generated file based on service_visibility.pb.yarpc.go
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

import * as types from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as dig from "@goscript/go.uber.org/dig/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_common_pb from "./common.pb.gs.ts"

import * as __goscript_service_visibility_pb from "./service_visibility.pb.gs.ts"

import * as __goscript_tasklist_pb from "./tasklist.pb.gs.ts"

import * as __goscript_visibility_pb from "./visibility.pb.gs.ts"

import * as __goscript_workflow_pb from "./workflow.pb.gs.ts"
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
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "@goscript/go.uber.org/dig/index.js"
import "./common.pb.gs.ts"
import "./service_visibility.pb.gs.ts"
import "./tasklist.pb.gs.ts"
import "./visibility.pb.gs.ts"
import "./workflow.pb.gs.ts"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.VisibilityAPIYARPCClient", "apiv1.VisibilityAPIYARPCServer", "apiv1.buildVisibilityAPIYARPCProceduresParams", "apiv1.FxVisibilityAPIYARPCClientParams", "apiv1.FxVisibilityAPIYARPCClientResult", "apiv1.FxVisibilityAPIYARPCProceduresParams", "apiv1.FxVisibilityAPIYARPCProceduresResult", "apiv1._VisibilityAPIYARPCCaller", "apiv1._VisibilityAPIYARPCHandler"])

export type VisibilityAPIYARPCClient = {
	CountWorkflowExecutions(_p0: context.Context | null, _p1: __goscript_service_visibility_pb.CountWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_visibility_pb.CountWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_visibility_pb.CountWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsResponse> | null, $.GoError]>
	GetSearchAttributes(_p0: context.Context | null, _p1: __goscript_service_visibility_pb.GetSearchAttributesRequest | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_visibility_pb.GetSearchAttributesResponse | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_visibility_pb.GetSearchAttributesResponse | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesResponse> | null, $.GoError]>
	ListArchivedWorkflowExecutions(_p0: context.Context | null, _p1: __goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse> | null, $.GoError]>
	ListClosedWorkflowExecutions(_p0: context.Context | null, _p1: __goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse> | null, $.GoError]>
	ListOpenWorkflowExecutions(_p0: context.Context | null, _p1: __goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse> | null, $.GoError]>
	ListWorkflowExecutions(_p0: context.Context | null, _p1: __goscript_service_visibility_pb.ListWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_visibility_pb.ListWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_visibility_pb.ListWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsResponse> | null, $.GoError]>
	ScanWorkflowExecutions(_p0: context.Context | null, _p1: __goscript_service_visibility_pb.ScanWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_visibility_pb.ScanWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_visibility_pb.ScanWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsResponse> | null, $.GoError]>
}

$.registerInterfaceType(
	"apiv1.VisibilityAPIYARPCClient",
	null,
	[$.methodSignature("CountWorkflowExecutions", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsResponse"), "error"]), $.methodSignature("GetSearchAttributes", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesResponse"), "error"]), $.methodSignature("ListArchivedWorkflowExecutions", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsResponse"), "error"]), $.methodSignature("ListClosedWorkflowExecutions", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsResponse"), "error"]), $.methodSignature("ListOpenWorkflowExecutions", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsResponse"), "error"]), $.methodSignature("ListWorkflowExecutions", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsResponse"), "error"]), $.methodSignature("ScanWorkflowExecutions", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsResponse"), "error"])]
);

export type VisibilityAPIYARPCServer = {
	CountWorkflowExecutions(_p0: context.Context | null, _p1: __goscript_service_visibility_pb.CountWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsRequest> | null): [__goscript_service_visibility_pb.CountWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsResponse> | null, $.GoError]
	GetSearchAttributes(_p0: context.Context | null, _p1: __goscript_service_visibility_pb.GetSearchAttributesRequest | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesRequest> | null): [__goscript_service_visibility_pb.GetSearchAttributesResponse | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesResponse> | null, $.GoError]
	ListArchivedWorkflowExecutions(_p0: context.Context | null, _p1: __goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest> | null): [__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse> | null, $.GoError]
	ListClosedWorkflowExecutions(_p0: context.Context | null, _p1: __goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest> | null): [__goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse> | null, $.GoError]
	ListOpenWorkflowExecutions(_p0: context.Context | null, _p1: __goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest> | null): [__goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse> | null, $.GoError]
	ListWorkflowExecutions(_p0: context.Context | null, _p1: __goscript_service_visibility_pb.ListWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsRequest> | null): [__goscript_service_visibility_pb.ListWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsResponse> | null, $.GoError]
	ScanWorkflowExecutions(_p0: context.Context | null, _p1: __goscript_service_visibility_pb.ScanWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsRequest> | null): [__goscript_service_visibility_pb.ScanWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsResponse> | null, $.GoError]
}

$.registerInterfaceType(
	"apiv1.VisibilityAPIYARPCServer",
	null,
	[$.methodSignature("CountWorkflowExecutions", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsRequest")], [/* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsResponse"), "error"]), $.methodSignature("GetSearchAttributes", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesRequest")], [/* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesResponse"), "error"]), $.methodSignature("ListArchivedWorkflowExecutions", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsRequest")], [/* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsResponse"), "error"]), $.methodSignature("ListClosedWorkflowExecutions", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest")], [/* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsResponse"), "error"]), $.methodSignature("ListOpenWorkflowExecutions", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest")], [/* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsResponse"), "error"]), $.methodSignature("ListWorkflowExecutions", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsRequest")], [/* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsResponse"), "error"]), $.methodSignature("ScanWorkflowExecutions", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsRequest")], [/* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsResponse"), "error"])]
);

export class buildVisibilityAPIYARPCProceduresParams {
	public get Server(): VisibilityAPIYARPCServer | null {
		return this._fields.Server
	}

	public set Server(value: VisibilityAPIYARPCServer | null) {
		this._fields.Server = value
	}

	public get AnyResolver(): jsonpb.AnyResolver | null {
		return this._fields.AnyResolver
	}

	public set AnyResolver(value: jsonpb.AnyResolver | null) {
		this._fields.AnyResolver = value
	}

	public _fields: {
		Server: VisibilityAPIYARPCServer | null
		AnyResolver: jsonpb.AnyResolver | null
	}

	constructor(init?: Partial<{Server?: VisibilityAPIYARPCServer | null, AnyResolver?: jsonpb.AnyResolver | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Server: init?.Server ?? (null! as VisibilityAPIYARPCServer | null),
			AnyResolver: init?.AnyResolver ?? (null! as jsonpb.AnyResolver | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): buildVisibilityAPIYARPCProceduresParams {
		return new buildVisibilityAPIYARPCProceduresParams(this, true)
	}

	public __goscriptAssign(source: buildVisibilityAPIYARPCProceduresParams): void {
		const target = this._fields
		const values = source._fields
		target.Server = $.assignFieldValue(target.Server, values.Server, "apiv1.VisibilityAPIYARPCServer")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.buildVisibilityAPIYARPCProceduresParams",
		() => new buildVisibilityAPIYARPCProceduresParams(),
		() => [],
		buildVisibilityAPIYARPCProceduresParams,
		() => [/* @__PURE__ */ $.structField("Server", "apiv1.VisibilityAPIYARPCServer", [0], 0, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [1], 16, true)]
	)
}

export class FxVisibilityAPIYARPCClientParams {
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

	public clone(): FxVisibilityAPIYARPCClientParams {
		return new FxVisibilityAPIYARPCClientParams(this, true)
	}

	public __goscriptAssign(source: FxVisibilityAPIYARPCClientParams): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.In, values.In)
		target.Provider = $.assignFieldValue(target.Provider, values.Provider, "yarpc.ClientConfig")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
		target.Restriction = $.assignFieldValue(target.Restriction, values.Restriction, "restriction.Checker")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxVisibilityAPIYARPCClientParams",
		() => new FxVisibilityAPIYARPCClientParams(),
		() => [],
		FxVisibilityAPIYARPCClientParams,
		() => [/* @__PURE__ */ $.structField("In", "dig.In", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Provider", "yarpc.ClientConfig", [1], 0, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [2], 16, true, { tag: "name:\"yarpcfx\" optional:\"true\"" }), /* @__PURE__ */ $.structField("Restriction", "restriction.Checker", [3], 32, true, { tag: "optional:\"true\"" })]
	)
}

export class FxVisibilityAPIYARPCClientResult {
	public get Out(): fx.Out {
		return this._fields.Out
	}

	public set Out(value: fx.Out) {
		this._fields.Out = value
	}

	public get Client(): VisibilityAPIYARPCClient | null {
		return this._fields.Client
	}

	public set Client(value: VisibilityAPIYARPCClient | null) {
		this._fields.Client = value
	}

	public _fields: {
		Out: fx.Out
		Client: VisibilityAPIYARPCClient | null
	}

	constructor(init?: Partial<{Out?: fx.Out, Client?: VisibilityAPIYARPCClient | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Out: init?.Out ? init.Out.clone() : new dig.Out(undefined, true),
			Client: init?.Client ?? (null! as VisibilityAPIYARPCClient | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FxVisibilityAPIYARPCClientResult {
		return new FxVisibilityAPIYARPCClientResult(this, true)
	}

	public __goscriptAssign(source: FxVisibilityAPIYARPCClientResult): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Out, values.Out)
		target.Client = $.assignFieldValue(target.Client, values.Client, "apiv1.VisibilityAPIYARPCClient")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxVisibilityAPIYARPCClientResult",
		() => new FxVisibilityAPIYARPCClientResult(),
		() => [],
		FxVisibilityAPIYARPCClientResult,
		() => [/* @__PURE__ */ $.structField("Out", "dig.Out", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Client", "apiv1.VisibilityAPIYARPCClient", [1], 0, true)]
	)
}

export class FxVisibilityAPIYARPCProceduresParams {
	public get In(): fx.In {
		return this._fields.In
	}

	public set In(value: fx.In) {
		this._fields.In = value
	}

	public get Server(): VisibilityAPIYARPCServer | null {
		return this._fields.Server
	}

	public set Server(value: VisibilityAPIYARPCServer | null) {
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
		Server: VisibilityAPIYARPCServer | null
		AnyResolver: jsonpb.AnyResolver | null
	}

	constructor(init?: Partial<{In?: fx.In, Server?: VisibilityAPIYARPCServer | null, AnyResolver?: jsonpb.AnyResolver | null}>, __goscriptValue?: boolean) {
		this._fields = {
			In: init?.In ? init.In.clone() : new dig.In(undefined, true),
			Server: init?.Server ?? (null! as VisibilityAPIYARPCServer | null),
			AnyResolver: init?.AnyResolver ?? (null! as jsonpb.AnyResolver | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FxVisibilityAPIYARPCProceduresParams {
		return new FxVisibilityAPIYARPCProceduresParams(this, true)
	}

	public __goscriptAssign(source: FxVisibilityAPIYARPCProceduresParams): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.In, values.In)
		target.Server = $.assignFieldValue(target.Server, values.Server, "apiv1.VisibilityAPIYARPCServer")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxVisibilityAPIYARPCProceduresParams",
		() => new FxVisibilityAPIYARPCProceduresParams(),
		() => [],
		FxVisibilityAPIYARPCProceduresParams,
		() => [/* @__PURE__ */ $.structField("In", "dig.In", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Server", "apiv1.VisibilityAPIYARPCServer", [1], 0, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [2], 16, true, { tag: "name:\"yarpcfx\" optional:\"true\"" })]
	)
}

export class FxVisibilityAPIYARPCProceduresResult {
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

	public clone(): FxVisibilityAPIYARPCProceduresResult {
		return new FxVisibilityAPIYARPCProceduresResult(this, true)
	}

	public __goscriptAssign(source: FxVisibilityAPIYARPCProceduresResult): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Out, values.Out)
		target.Procedures = values.Procedures
		$.assignStruct(target.ReflectionMeta, values.ReflectionMeta)
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxVisibilityAPIYARPCProceduresResult",
		() => new FxVisibilityAPIYARPCProceduresResult(),
		() => [],
		FxVisibilityAPIYARPCProceduresResult,
		() => [/* @__PURE__ */ $.structField("Out", "dig.Out", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Procedures", /* @__PURE__ */ $.sliceType("transport.Procedure"), [1], 0, true, { tag: "group:\"yarpcfx\"" }), /* @__PURE__ */ $.structField("ReflectionMeta", "reflection.ServerMeta", [2], 24, true, { tag: "group:\"yarpcfx\"" })]
	)
}

export class _VisibilityAPIYARPCCaller {
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

	public clone(): _VisibilityAPIYARPCCaller {
		return new _VisibilityAPIYARPCCaller(this, true)
	}

	public __goscriptAssign(source: _VisibilityAPIYARPCCaller): void {
		const target = this._fields
		const values = source._fields
		target.streamClient = $.assignFieldValue(target.streamClient, values.streamClient, "protobuf.StreamClient")
	}

	public async CountWorkflowExecutions(ctx: context.Context | null, request: __goscript_service_visibility_pb.CountWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_visibility_pb.CountWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsResponse> | null, $.GoError]> {
		const c: _VisibilityAPIYARPCCaller | $.VarRef<_VisibilityAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_VisibilityAPIYARPCCaller>(c).streamClient).Call(ctx, "CountWorkflowExecutions", $.interfaceValue<proto.Message | null>(request, "*apiv1.CountWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsRequest")), newVisibilityAPIServiceCountWorkflowExecutionsYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple0: any = $.typeAssertTuple<__goscript_service_visibility_pb.CountWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsResponse"))
		let response: __goscript_service_visibility_pb.CountWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsResponse> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCResponse(), "*apiv1.CountWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async GetSearchAttributes(ctx: context.Context | null, request: __goscript_service_visibility_pb.GetSearchAttributesRequest | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_visibility_pb.GetSearchAttributesResponse | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesResponse> | null, $.GoError]> {
		const c: _VisibilityAPIYARPCCaller | $.VarRef<_VisibilityAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_VisibilityAPIYARPCCaller>(c).streamClient).Call(ctx, "GetSearchAttributes", $.interfaceValue<proto.Message | null>(request, "*apiv1.GetSearchAttributesRequest", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesRequest")), newVisibilityAPIServiceGetSearchAttributesYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple1: any = $.typeAssertTuple<__goscript_service_visibility_pb.GetSearchAttributesResponse | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesResponse"))
		let response: __goscript_service_visibility_pb.GetSearchAttributesResponse | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesResponse> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyVisibilityAPIServiceGetSearchAttributesYARPCResponse(), "*apiv1.GetSearchAttributesResponse", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async ListArchivedWorkflowExecutions(ctx: context.Context | null, request: __goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse> | null, $.GoError]> {
		const c: _VisibilityAPIYARPCCaller | $.VarRef<_VisibilityAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_VisibilityAPIYARPCCaller>(c).streamClient).Call(ctx, "ListArchivedWorkflowExecutions", $.interfaceValue<proto.Message | null>(request, "*apiv1.ListArchivedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsRequest")), newVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple2: any = $.typeAssertTuple<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsResponse"))
		let response: __goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCResponse(), "*apiv1.ListArchivedWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async ListClosedWorkflowExecutions(ctx: context.Context | null, request: __goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse> | null, $.GoError]> {
		const c: _VisibilityAPIYARPCCaller | $.VarRef<_VisibilityAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_VisibilityAPIYARPCCaller>(c).streamClient).Call(ctx, "ListClosedWorkflowExecutions", $.interfaceValue<proto.Message | null>(request, "*apiv1.ListClosedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest")), newVisibilityAPIServiceListClosedWorkflowExecutionsYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple3: any = $.typeAssertTuple<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsResponse"))
		let response: __goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse> | null = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCResponse(), "*apiv1.ListClosedWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async ListOpenWorkflowExecutions(ctx: context.Context | null, request: __goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse> | null, $.GoError]> {
		const c: _VisibilityAPIYARPCCaller | $.VarRef<_VisibilityAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_VisibilityAPIYARPCCaller>(c).streamClient).Call(ctx, "ListOpenWorkflowExecutions", $.interfaceValue<proto.Message | null>(request, "*apiv1.ListOpenWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest")), newVisibilityAPIServiceListOpenWorkflowExecutionsYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple4: any = $.typeAssertTuple<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsResponse"))
		let response: __goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse> | null = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCResponse(), "*apiv1.ListOpenWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async ListWorkflowExecutions(ctx: context.Context | null, request: __goscript_service_visibility_pb.ListWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_visibility_pb.ListWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsResponse> | null, $.GoError]> {
		const c: _VisibilityAPIYARPCCaller | $.VarRef<_VisibilityAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_VisibilityAPIYARPCCaller>(c).streamClient).Call(ctx, "ListWorkflowExecutions", $.interfaceValue<proto.Message | null>(request, "*apiv1.ListWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsRequest")), newVisibilityAPIServiceListWorkflowExecutionsYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple5: any = $.typeAssertTuple<__goscript_service_visibility_pb.ListWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsResponse"))
		let response: __goscript_service_visibility_pb.ListWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsResponse> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyVisibilityAPIServiceListWorkflowExecutionsYARPCResponse(), "*apiv1.ListWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async ScanWorkflowExecutions(ctx: context.Context | null, request: __goscript_service_visibility_pb.ScanWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_visibility_pb.ScanWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsResponse> | null, $.GoError]> {
		const c: _VisibilityAPIYARPCCaller | $.VarRef<_VisibilityAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_VisibilityAPIYARPCCaller>(c).streamClient).Call(ctx, "ScanWorkflowExecutions", $.interfaceValue<proto.Message | null>(request, "*apiv1.ScanWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsRequest")), newVisibilityAPIServiceScanWorkflowExecutionsYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple6: any = $.typeAssertTuple<__goscript_service_visibility_pb.ScanWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsResponse"))
		let response: __goscript_service_visibility_pb.ScanWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsResponse> | null = __goscriptTuple6[0]
		let ok = __goscriptTuple6[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCResponse(), "*apiv1.ScanWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsResponse")), responseMessage)]
		}
		return [response, err]
	}

	static __typeInfo = $.registerStructType(
		"apiv1._VisibilityAPIYARPCCaller",
		() => new _VisibilityAPIYARPCCaller(),
		() => [$.methodSignature("CountWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsResponse"), "error"], true), $.methodSignature("GetSearchAttributes", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesResponse"), "error"], true), $.methodSignature("ListArchivedWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsResponse"), "error"], true), $.methodSignature("ListClosedWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsResponse"), "error"], true), $.methodSignature("ListOpenWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsResponse"), "error"], true), $.methodSignature("ListWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsResponse"), "error"], true), $.methodSignature("ScanWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsResponse"), "error"], true)],
		_VisibilityAPIYARPCCaller,
		() => [/* @__PURE__ */ $.structField("streamClient", "protobuf.StreamClient", [0], 0, false, { pkgPath: "github.com/uber/cadence-idl/go/proto/api/v1" })]
	)
}

export class _VisibilityAPIYARPCHandler {
	public get server(): VisibilityAPIYARPCServer | null {
		return this._fields.server
	}

	public set server(value: VisibilityAPIYARPCServer | null) {
		this._fields.server = value
	}

	public _fields: {
		server: VisibilityAPIYARPCServer | null
	}

	constructor(init?: Partial<{server?: VisibilityAPIYARPCServer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			server: init?.server ?? (null! as VisibilityAPIYARPCServer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): _VisibilityAPIYARPCHandler {
		return new _VisibilityAPIYARPCHandler(this, true)
	}

	public __goscriptAssign(source: _VisibilityAPIYARPCHandler): void {
		const target = this._fields
		const values = source._fields
		target.server = $.assignFieldValue(target.server, values.server, "apiv1.VisibilityAPIYARPCServer")
	}

	public async CountWorkflowExecutions(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _VisibilityAPIYARPCHandler | $.VarRef<_VisibilityAPIYARPCHandler> | null = this;
		let request: __goscript_service_visibility_pb.CountWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsRequest> | null = null! as __goscript_service_visibility_pb.CountWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple7: any = $.typeAssertTuple<__goscript_service_visibility_pb.CountWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsRequest"))
			request = __goscriptTuple7[0]
			ok = __goscriptTuple7[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCRequest(), "*apiv1.CountWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsRequest")), requestMessage)]
			}
		}
		let __goscriptTuple8: any = await $.pointerValue<Exclude<VisibilityAPIYARPCServer, null>>($.pointerValue<_VisibilityAPIYARPCHandler>(h).server).CountWorkflowExecutions(ctx, request)
		let response: __goscript_service_visibility_pb.CountWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsResponse> | null = __goscriptTuple8[0]
		let err = __goscriptTuple8[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.CountWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsResponse")), err]
	}

	public async GetSearchAttributes(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _VisibilityAPIYARPCHandler | $.VarRef<_VisibilityAPIYARPCHandler> | null = this;
		let request: __goscript_service_visibility_pb.GetSearchAttributesRequest | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesRequest> | null = null! as __goscript_service_visibility_pb.GetSearchAttributesRequest | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple9: any = $.typeAssertTuple<__goscript_service_visibility_pb.GetSearchAttributesRequest | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesRequest"))
			request = __goscriptTuple9[0]
			ok = __goscriptTuple9[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyVisibilityAPIServiceGetSearchAttributesYARPCRequest(), "*apiv1.GetSearchAttributesRequest", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesRequest")), requestMessage)]
			}
		}
		let __goscriptTuple10: any = await $.pointerValue<Exclude<VisibilityAPIYARPCServer, null>>($.pointerValue<_VisibilityAPIYARPCHandler>(h).server).GetSearchAttributes(ctx, request)
		let response: __goscript_service_visibility_pb.GetSearchAttributesResponse | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesResponse> | null = __goscriptTuple10[0]
		let err = __goscriptTuple10[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.GetSearchAttributesResponse", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesResponse")), err]
	}

	public async ListArchivedWorkflowExecutions(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _VisibilityAPIYARPCHandler | $.VarRef<_VisibilityAPIYARPCHandler> | null = this;
		let request: __goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest> | null = null! as __goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple11: any = $.typeAssertTuple<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsRequest"))
			request = __goscriptTuple11[0]
			ok = __goscriptTuple11[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCRequest(), "*apiv1.ListArchivedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsRequest")), requestMessage)]
			}
		}
		let __goscriptTuple12: any = await $.pointerValue<Exclude<VisibilityAPIYARPCServer, null>>($.pointerValue<_VisibilityAPIYARPCHandler>(h).server).ListArchivedWorkflowExecutions(ctx, request)
		let response: __goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse> | null = __goscriptTuple12[0]
		let err = __goscriptTuple12[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.ListArchivedWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsResponse")), err]
	}

	public async ListClosedWorkflowExecutions(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _VisibilityAPIYARPCHandler | $.VarRef<_VisibilityAPIYARPCHandler> | null = this;
		let request: __goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest> | null = null! as __goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple13: any = $.typeAssertTuple<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest"))
			request = __goscriptTuple13[0]
			ok = __goscriptTuple13[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCRequest(), "*apiv1.ListClosedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest")), requestMessage)]
			}
		}
		let __goscriptTuple14: any = await $.pointerValue<Exclude<VisibilityAPIYARPCServer, null>>($.pointerValue<_VisibilityAPIYARPCHandler>(h).server).ListClosedWorkflowExecutions(ctx, request)
		let response: __goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse> | null = __goscriptTuple14[0]
		let err = __goscriptTuple14[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.ListClosedWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsResponse")), err]
	}

	public async ListOpenWorkflowExecutions(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _VisibilityAPIYARPCHandler | $.VarRef<_VisibilityAPIYARPCHandler> | null = this;
		let request: __goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest> | null = null! as __goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple15: any = $.typeAssertTuple<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest"))
			request = __goscriptTuple15[0]
			ok = __goscriptTuple15[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCRequest(), "*apiv1.ListOpenWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest")), requestMessage)]
			}
		}
		let __goscriptTuple16: any = await $.pointerValue<Exclude<VisibilityAPIYARPCServer, null>>($.pointerValue<_VisibilityAPIYARPCHandler>(h).server).ListOpenWorkflowExecutions(ctx, request)
		let response: __goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse> | null = __goscriptTuple16[0]
		let err = __goscriptTuple16[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.ListOpenWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsResponse")), err]
	}

	public async ListWorkflowExecutions(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _VisibilityAPIYARPCHandler | $.VarRef<_VisibilityAPIYARPCHandler> | null = this;
		let request: __goscript_service_visibility_pb.ListWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsRequest> | null = null! as __goscript_service_visibility_pb.ListWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple17: any = $.typeAssertTuple<__goscript_service_visibility_pb.ListWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsRequest"))
			request = __goscriptTuple17[0]
			ok = __goscriptTuple17[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyVisibilityAPIServiceListWorkflowExecutionsYARPCRequest(), "*apiv1.ListWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsRequest")), requestMessage)]
			}
		}
		let __goscriptTuple18: any = await $.pointerValue<Exclude<VisibilityAPIYARPCServer, null>>($.pointerValue<_VisibilityAPIYARPCHandler>(h).server).ListWorkflowExecutions(ctx, request)
		let response: __goscript_service_visibility_pb.ListWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsResponse> | null = __goscriptTuple18[0]
		let err = __goscriptTuple18[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.ListWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsResponse")), err]
	}

	public async ScanWorkflowExecutions(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _VisibilityAPIYARPCHandler | $.VarRef<_VisibilityAPIYARPCHandler> | null = this;
		let request: __goscript_service_visibility_pb.ScanWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsRequest> | null = null! as __goscript_service_visibility_pb.ScanWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple19: any = $.typeAssertTuple<__goscript_service_visibility_pb.ScanWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsRequest"))
			request = __goscriptTuple19[0]
			ok = __goscriptTuple19[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCRequest(), "*apiv1.ScanWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsRequest")), requestMessage)]
			}
		}
		let __goscriptTuple20: any = await $.pointerValue<Exclude<VisibilityAPIYARPCServer, null>>($.pointerValue<_VisibilityAPIYARPCHandler>(h).server).ScanWorkflowExecutions(ctx, request)
		let response: __goscript_service_visibility_pb.ScanWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsResponse> | null = __goscriptTuple20[0]
		let err = __goscriptTuple20[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.ScanWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsResponse")), err]
	}

	static __typeInfo = $.registerStructType(
		"apiv1._VisibilityAPIYARPCHandler",
		() => new _VisibilityAPIYARPCHandler(),
		() => [$.methodSignature("CountWorkflowExecutions", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("GetSearchAttributes", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("ListArchivedWorkflowExecutions", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("ListClosedWorkflowExecutions", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("ListOpenWorkflowExecutions", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("ListWorkflowExecutions", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("ScanWorkflowExecutions", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true)],
		_VisibilityAPIYARPCHandler,
		() => [/* @__PURE__ */ $.structField("server", "apiv1.VisibilityAPIYARPCServer", [0], 0, false, { pkgPath: "github.com/uber/cadence-idl/go/proto/api/v1" })]
	)
}

export async function newVisibilityAPIYARPCClient(clientConfig: transport.ClientConfig | null, anyResolver: jsonpb.AnyResolver | null, options: $.Slice<protobuf.ClientOption | null>): globalThis.Promise<VisibilityAPIYARPCClient | null> {
	return $.interfaceValue<VisibilityAPIYARPCClient | null>((await (async () => { const __goscriptLiteralField0 = await protobuf.NewStreamClient(new protobuf.ClientParams({ServiceName: "uber.cadence.api.v1.VisibilityAPI", ClientConfig: clientConfig, AnyResolver: anyResolver, Options: options}, true)); return new _VisibilityAPIYARPCCaller({streamClient: __goscriptLiteralField0}) })()), "*apiv1._VisibilityAPIYARPCCaller", /* @__PURE__ */ $.pointerType("apiv1._VisibilityAPIYARPCCaller"))
}

export async function NewVisibilityAPIYARPCClient(clientConfig: transport.ClientConfig | null, options: $.Slice<protobuf.ClientOption | null>): globalThis.Promise<VisibilityAPIYARPCClient | null> {
	return newVisibilityAPIYARPCClient(clientConfig, null, options)
}

export function buildVisibilityAPIYARPCProcedures(params: buildVisibilityAPIYARPCProceduresParams): $.Slice<transport.Procedure> {
	let handler: _VisibilityAPIYARPCHandler | $.VarRef<_VisibilityAPIYARPCHandler> | null = new _VisibilityAPIYARPCHandler({server: params.Server})
	return protobuf.BuildProcedures(new protobuf.BuildProceduresParams({ServiceName: "uber.cadence.api.v1.VisibilityAPI", UnaryHandlerParams: $.arrayToSlice<protobuf.BuildProceduresUnaryHandlerParams>([(() => { const __goscriptLiteralField1 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.ListWorkflowExecutions(ctx, requestMessage))($.pointerValue<_VisibilityAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_VisibilityAPIYARPCHandler).ListWorkflowExecutions-fm"), NewRequest: newVisibilityAPIServiceListWorkflowExecutionsYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "ListWorkflowExecutions", Handler: __goscriptLiteralField1}, true) })(), (() => { const __goscriptLiteralField2 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.ListOpenWorkflowExecutions(ctx, requestMessage))($.pointerValue<_VisibilityAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_VisibilityAPIYARPCHandler).ListOpenWorkflowExecutions-fm"), NewRequest: newVisibilityAPIServiceListOpenWorkflowExecutionsYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "ListOpenWorkflowExecutions", Handler: __goscriptLiteralField2}, true) })(), (() => { const __goscriptLiteralField3 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.ListClosedWorkflowExecutions(ctx, requestMessage))($.pointerValue<_VisibilityAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_VisibilityAPIYARPCHandler).ListClosedWorkflowExecutions-fm"), NewRequest: newVisibilityAPIServiceListClosedWorkflowExecutionsYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "ListClosedWorkflowExecutions", Handler: __goscriptLiteralField3}, true) })(), (() => { const __goscriptLiteralField4 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.ListArchivedWorkflowExecutions(ctx, requestMessage))($.pointerValue<_VisibilityAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_VisibilityAPIYARPCHandler).ListArchivedWorkflowExecutions-fm"), NewRequest: newVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "ListArchivedWorkflowExecutions", Handler: __goscriptLiteralField4}, true) })(), (() => { const __goscriptLiteralField5 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.ScanWorkflowExecutions(ctx, requestMessage))($.pointerValue<_VisibilityAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_VisibilityAPIYARPCHandler).ScanWorkflowExecutions-fm"), NewRequest: newVisibilityAPIServiceScanWorkflowExecutionsYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "ScanWorkflowExecutions", Handler: __goscriptLiteralField5}, true) })(), (() => { const __goscriptLiteralField6 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.CountWorkflowExecutions(ctx, requestMessage))($.pointerValue<_VisibilityAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_VisibilityAPIYARPCHandler).CountWorkflowExecutions-fm"), NewRequest: newVisibilityAPIServiceCountWorkflowExecutionsYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "CountWorkflowExecutions", Handler: __goscriptLiteralField6}, true) })(), (() => { const __goscriptLiteralField7 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.GetSearchAttributes(ctx, requestMessage))($.pointerValue<_VisibilityAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_VisibilityAPIYARPCHandler).GetSearchAttributes-fm"), NewRequest: newVisibilityAPIServiceGetSearchAttributesYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "GetSearchAttributes", Handler: __goscriptLiteralField7}, true) })()]), OnewayHandlerParams: $.arrayToSlice<protobuf.BuildProceduresOnewayHandlerParams>([]), StreamHandlerParams: $.arrayToSlice<protobuf.BuildProceduresStreamHandlerParams>([])}, true))
}

export function BuildVisibilityAPIYARPCProcedures(server: VisibilityAPIYARPCServer | null): $.Slice<transport.Procedure> {
	return buildVisibilityAPIYARPCProcedures(new buildVisibilityAPIYARPCProceduresParams({Server: server}, true))
}

export function NewFxVisibilityAPIYARPCClient(name: string, options: $.Slice<protobuf.ClientOption | null>): any {
	return $.interfaceValue($.functionValue(async (params: FxVisibilityAPIYARPCClientParams): globalThis.Promise<FxVisibilityAPIYARPCClientResult> => {
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

		return (await (async () => { const __goscriptLiteralField8 = await newVisibilityAPIYARPCClient(cc, params.AnyResolver, options); return new FxVisibilityAPIYARPCClientResult({Client: __goscriptLiteralField8}, true) })())
	}, ({ kind: $.TypeKind.Function, params: ["apiv1.FxVisibilityAPIYARPCClientParams"], results: ["apiv1.FxVisibilityAPIYARPCClientResult"] } as $.FunctionTypeInfo)), "func(params apiv1.FxVisibilityAPIYARPCClientParams) apiv1.FxVisibilityAPIYARPCClientResult", ({ kind: $.TypeKind.Function, params: ["apiv1.FxVisibilityAPIYARPCClientParams"], results: ["apiv1.FxVisibilityAPIYARPCClientResult"] } as $.FunctionTypeInfo))
}

export function NewFxVisibilityAPIYARPCProcedures(): any {
	return $.interfaceValue($.functionValue((params: FxVisibilityAPIYARPCProceduresParams): FxVisibilityAPIYARPCProceduresResult => {
		return (() => { const __goscriptLiteralField9 = buildVisibilityAPIYARPCProcedures(new buildVisibilityAPIYARPCProceduresParams({Server: params.Server, AnyResolver: params.AnyResolver}, true)); return new FxVisibilityAPIYARPCProceduresResult({Procedures: __goscriptLiteralField9, ReflectionMeta: __goscript_get_VisibilityAPIReflectionMeta()}, true) })()
	}, ({ kind: $.TypeKind.Function, params: ["apiv1.FxVisibilityAPIYARPCProceduresParams"], results: ["apiv1.FxVisibilityAPIYARPCProceduresResult"] } as $.FunctionTypeInfo)), "func(params apiv1.FxVisibilityAPIYARPCProceduresParams) apiv1.FxVisibilityAPIYARPCProceduresResult", ({ kind: $.TypeKind.Function, params: ["apiv1.FxVisibilityAPIYARPCProceduresParams"], results: ["apiv1.FxVisibilityAPIYARPCProceduresResult"] } as $.FunctionTypeInfo))
}

export var VisibilityAPIReflectionMeta: reflection.ServerMeta

export function __goscript_init_VisibilityAPIReflectionMeta(): void {
	if (((VisibilityAPIReflectionMeta) as any) === undefined) {
		VisibilityAPIReflectionMeta = new reflection.ServerMeta({ServiceName: "uber.cadence.api.v1.VisibilityAPI", FileDescriptors: yarpcFileDescriptorClosurea7341dc69cef4364}, true)
	}
}

export function __goscript_get_VisibilityAPIReflectionMeta(): reflection.ServerMeta {
	if (((VisibilityAPIReflectionMeta) as any) === undefined) {
		__goscript_init_VisibilityAPIReflectionMeta()
	}
	return VisibilityAPIReflectionMeta
}

export function __goscript_set_VisibilityAPIReflectionMeta(__goscriptValue: reflection.ServerMeta): void {
	$.assignStruct(VisibilityAPIReflectionMeta, __goscriptValue)
}

export function newVisibilityAPIServiceListWorkflowExecutionsYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_visibility_pb.ListWorkflowExecutionsRequest(), "*apiv1.ListWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsRequest"))
}

export function newVisibilityAPIServiceListWorkflowExecutionsYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_visibility_pb.ListWorkflowExecutionsResponse(), "*apiv1.ListWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsResponse"))
}

export function newVisibilityAPIServiceListOpenWorkflowExecutionsYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest(), "*apiv1.ListOpenWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest"))
}

export function newVisibilityAPIServiceListOpenWorkflowExecutionsYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse(), "*apiv1.ListOpenWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsResponse"))
}

export function newVisibilityAPIServiceListClosedWorkflowExecutionsYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest(), "*apiv1.ListClosedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest"))
}

export function newVisibilityAPIServiceListClosedWorkflowExecutionsYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse(), "*apiv1.ListClosedWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsResponse"))
}

export function newVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest(), "*apiv1.ListArchivedWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsRequest"))
}

export function newVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse(), "*apiv1.ListArchivedWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsResponse"))
}

export function newVisibilityAPIServiceScanWorkflowExecutionsYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_visibility_pb.ScanWorkflowExecutionsRequest(), "*apiv1.ScanWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsRequest"))
}

export function newVisibilityAPIServiceScanWorkflowExecutionsYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_visibility_pb.ScanWorkflowExecutionsResponse(), "*apiv1.ScanWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsResponse"))
}

export function newVisibilityAPIServiceCountWorkflowExecutionsYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_visibility_pb.CountWorkflowExecutionsRequest(), "*apiv1.CountWorkflowExecutionsRequest", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsRequest"))
}

export function newVisibilityAPIServiceCountWorkflowExecutionsYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_visibility_pb.CountWorkflowExecutionsResponse(), "*apiv1.CountWorkflowExecutionsResponse", /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsResponse"))
}

export function newVisibilityAPIServiceGetSearchAttributesYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_visibility_pb.GetSearchAttributesRequest(), "*apiv1.GetSearchAttributesRequest", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesRequest"))
}

export function newVisibilityAPIServiceGetSearchAttributesYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_visibility_pb.GetSearchAttributesResponse(), "*apiv1.GetSearchAttributesResponse", /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesResponse"))
}

export var emptyVisibilityAPIServiceListWorkflowExecutionsYARPCRequest: __goscript_service_visibility_pb.ListWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsRequest> | null

export function __goscript_init_emptyVisibilityAPIServiceListWorkflowExecutionsYARPCRequest(): void {
	if (((emptyVisibilityAPIServiceListWorkflowExecutionsYARPCRequest) as any) === undefined) {
		emptyVisibilityAPIServiceListWorkflowExecutionsYARPCRequest = new __goscript_service_visibility_pb.ListWorkflowExecutionsRequest()
	}
}

export function __goscript_get_emptyVisibilityAPIServiceListWorkflowExecutionsYARPCRequest(): __goscript_service_visibility_pb.ListWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsRequest> | null {
	if (((emptyVisibilityAPIServiceListWorkflowExecutionsYARPCRequest) as any) === undefined) {
		__goscript_init_emptyVisibilityAPIServiceListWorkflowExecutionsYARPCRequest()
	}
	return emptyVisibilityAPIServiceListWorkflowExecutionsYARPCRequest
}

export function __goscript_set_emptyVisibilityAPIServiceListWorkflowExecutionsYARPCRequest(__goscriptValue: __goscript_service_visibility_pb.ListWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsRequest> | null): void {
	emptyVisibilityAPIServiceListWorkflowExecutionsYARPCRequest = __goscriptValue
}

export var emptyVisibilityAPIServiceListWorkflowExecutionsYARPCResponse: __goscript_service_visibility_pb.ListWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsResponse> | null

export function __goscript_init_emptyVisibilityAPIServiceListWorkflowExecutionsYARPCResponse(): void {
	if (((emptyVisibilityAPIServiceListWorkflowExecutionsYARPCResponse) as any) === undefined) {
		emptyVisibilityAPIServiceListWorkflowExecutionsYARPCResponse = new __goscript_service_visibility_pb.ListWorkflowExecutionsResponse()
	}
}

export function __goscript_get_emptyVisibilityAPIServiceListWorkflowExecutionsYARPCResponse(): __goscript_service_visibility_pb.ListWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsResponse> | null {
	if (((emptyVisibilityAPIServiceListWorkflowExecutionsYARPCResponse) as any) === undefined) {
		__goscript_init_emptyVisibilityAPIServiceListWorkflowExecutionsYARPCResponse()
	}
	return emptyVisibilityAPIServiceListWorkflowExecutionsYARPCResponse
}

export function __goscript_set_emptyVisibilityAPIServiceListWorkflowExecutionsYARPCResponse(__goscriptValue: __goscript_service_visibility_pb.ListWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListWorkflowExecutionsResponse> | null): void {
	emptyVisibilityAPIServiceListWorkflowExecutionsYARPCResponse = __goscriptValue
}

export var emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCRequest: __goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest> | null

export function __goscript_init_emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCRequest(): void {
	if (((emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCRequest) as any) === undefined) {
		emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCRequest = new __goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest()
	}
}

export function __goscript_get_emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCRequest(): __goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest> | null {
	if (((emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCRequest) as any) === undefined) {
		__goscript_init_emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCRequest()
	}
	return emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCRequest
}

export function __goscript_set_emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCRequest(__goscriptValue: __goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsRequest> | null): void {
	emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCRequest = __goscriptValue
}

export var emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCResponse: __goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse> | null

export function __goscript_init_emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCResponse(): void {
	if (((emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCResponse) as any) === undefined) {
		emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCResponse = new __goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse()
	}
}

export function __goscript_get_emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCResponse(): __goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse> | null {
	if (((emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCResponse) as any) === undefined) {
		__goscript_init_emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCResponse()
	}
	return emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCResponse
}

export function __goscript_set_emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCResponse(__goscriptValue: __goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListOpenWorkflowExecutionsResponse> | null): void {
	emptyVisibilityAPIServiceListOpenWorkflowExecutionsYARPCResponse = __goscriptValue
}

export var emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCRequest: __goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest> | null

export function __goscript_init_emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCRequest(): void {
	if (((emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCRequest) as any) === undefined) {
		emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCRequest = new __goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest()
	}
}

export function __goscript_get_emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCRequest(): __goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest> | null {
	if (((emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCRequest) as any) === undefined) {
		__goscript_init_emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCRequest()
	}
	return emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCRequest
}

export function __goscript_set_emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCRequest(__goscriptValue: __goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsRequest> | null): void {
	emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCRequest = __goscriptValue
}

export var emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCResponse: __goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse> | null

export function __goscript_init_emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCResponse(): void {
	if (((emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCResponse) as any) === undefined) {
		emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCResponse = new __goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse()
	}
}

export function __goscript_get_emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCResponse(): __goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse> | null {
	if (((emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCResponse) as any) === undefined) {
		__goscript_init_emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCResponse()
	}
	return emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCResponse
}

export function __goscript_set_emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCResponse(__goscriptValue: __goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListClosedWorkflowExecutionsResponse> | null): void {
	emptyVisibilityAPIServiceListClosedWorkflowExecutionsYARPCResponse = __goscriptValue
}

export var emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCRequest: __goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest> | null

export function __goscript_init_emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCRequest(): void {
	if (((emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCRequest) as any) === undefined) {
		emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCRequest = new __goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest()
	}
}

export function __goscript_get_emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCRequest(): __goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest> | null {
	if (((emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCRequest) as any) === undefined) {
		__goscript_init_emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCRequest()
	}
	return emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCRequest
}

export function __goscript_set_emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCRequest(__goscriptValue: __goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsRequest> | null): void {
	emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCRequest = __goscriptValue
}

export var emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCResponse: __goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse> | null

export function __goscript_init_emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCResponse(): void {
	if (((emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCResponse) as any) === undefined) {
		emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCResponse = new __goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse()
	}
}

export function __goscript_get_emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCResponse(): __goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse> | null {
	if (((emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCResponse) as any) === undefined) {
		__goscript_init_emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCResponse()
	}
	return emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCResponse
}

export function __goscript_set_emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCResponse(__goscriptValue: __goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ListArchivedWorkflowExecutionsResponse> | null): void {
	emptyVisibilityAPIServiceListArchivedWorkflowExecutionsYARPCResponse = __goscriptValue
}

export var emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCRequest: __goscript_service_visibility_pb.ScanWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsRequest> | null

export function __goscript_init_emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCRequest(): void {
	if (((emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCRequest) as any) === undefined) {
		emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCRequest = new __goscript_service_visibility_pb.ScanWorkflowExecutionsRequest()
	}
}

export function __goscript_get_emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCRequest(): __goscript_service_visibility_pb.ScanWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsRequest> | null {
	if (((emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCRequest) as any) === undefined) {
		__goscript_init_emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCRequest()
	}
	return emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCRequest
}

export function __goscript_set_emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCRequest(__goscriptValue: __goscript_service_visibility_pb.ScanWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsRequest> | null): void {
	emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCRequest = __goscriptValue
}

export var emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCResponse: __goscript_service_visibility_pb.ScanWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsResponse> | null

export function __goscript_init_emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCResponse(): void {
	if (((emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCResponse) as any) === undefined) {
		emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCResponse = new __goscript_service_visibility_pb.ScanWorkflowExecutionsResponse()
	}
}

export function __goscript_get_emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCResponse(): __goscript_service_visibility_pb.ScanWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsResponse> | null {
	if (((emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCResponse) as any) === undefined) {
		__goscript_init_emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCResponse()
	}
	return emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCResponse
}

export function __goscript_set_emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCResponse(__goscriptValue: __goscript_service_visibility_pb.ScanWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.ScanWorkflowExecutionsResponse> | null): void {
	emptyVisibilityAPIServiceScanWorkflowExecutionsYARPCResponse = __goscriptValue
}

export var emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCRequest: __goscript_service_visibility_pb.CountWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsRequest> | null

export function __goscript_init_emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCRequest(): void {
	if (((emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCRequest) as any) === undefined) {
		emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCRequest = new __goscript_service_visibility_pb.CountWorkflowExecutionsRequest()
	}
}

export function __goscript_get_emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCRequest(): __goscript_service_visibility_pb.CountWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsRequest> | null {
	if (((emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCRequest) as any) === undefined) {
		__goscript_init_emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCRequest()
	}
	return emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCRequest
}

export function __goscript_set_emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCRequest(__goscriptValue: __goscript_service_visibility_pb.CountWorkflowExecutionsRequest | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsRequest> | null): void {
	emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCRequest = __goscriptValue
}

export var emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCResponse: __goscript_service_visibility_pb.CountWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsResponse> | null

export function __goscript_init_emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCResponse(): void {
	if (((emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCResponse) as any) === undefined) {
		emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCResponse = new __goscript_service_visibility_pb.CountWorkflowExecutionsResponse()
	}
}

export function __goscript_get_emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCResponse(): __goscript_service_visibility_pb.CountWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsResponse> | null {
	if (((emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCResponse) as any) === undefined) {
		__goscript_init_emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCResponse()
	}
	return emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCResponse
}

export function __goscript_set_emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCResponse(__goscriptValue: __goscript_service_visibility_pb.CountWorkflowExecutionsResponse | $.VarRef<__goscript_service_visibility_pb.CountWorkflowExecutionsResponse> | null): void {
	emptyVisibilityAPIServiceCountWorkflowExecutionsYARPCResponse = __goscriptValue
}

export var emptyVisibilityAPIServiceGetSearchAttributesYARPCRequest: __goscript_service_visibility_pb.GetSearchAttributesRequest | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesRequest> | null

export function __goscript_init_emptyVisibilityAPIServiceGetSearchAttributesYARPCRequest(): void {
	if (((emptyVisibilityAPIServiceGetSearchAttributesYARPCRequest) as any) === undefined) {
		emptyVisibilityAPIServiceGetSearchAttributesYARPCRequest = new __goscript_service_visibility_pb.GetSearchAttributesRequest()
	}
}

export function __goscript_get_emptyVisibilityAPIServiceGetSearchAttributesYARPCRequest(): __goscript_service_visibility_pb.GetSearchAttributesRequest | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesRequest> | null {
	if (((emptyVisibilityAPIServiceGetSearchAttributesYARPCRequest) as any) === undefined) {
		__goscript_init_emptyVisibilityAPIServiceGetSearchAttributesYARPCRequest()
	}
	return emptyVisibilityAPIServiceGetSearchAttributesYARPCRequest
}

export function __goscript_set_emptyVisibilityAPIServiceGetSearchAttributesYARPCRequest(__goscriptValue: __goscript_service_visibility_pb.GetSearchAttributesRequest | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesRequest> | null): void {
	emptyVisibilityAPIServiceGetSearchAttributesYARPCRequest = __goscriptValue
}

export var emptyVisibilityAPIServiceGetSearchAttributesYARPCResponse: __goscript_service_visibility_pb.GetSearchAttributesResponse | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesResponse> | null

export function __goscript_init_emptyVisibilityAPIServiceGetSearchAttributesYARPCResponse(): void {
	if (((emptyVisibilityAPIServiceGetSearchAttributesYARPCResponse) as any) === undefined) {
		emptyVisibilityAPIServiceGetSearchAttributesYARPCResponse = new __goscript_service_visibility_pb.GetSearchAttributesResponse()
	}
}

export function __goscript_get_emptyVisibilityAPIServiceGetSearchAttributesYARPCResponse(): __goscript_service_visibility_pb.GetSearchAttributesResponse | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesResponse> | null {
	if (((emptyVisibilityAPIServiceGetSearchAttributesYARPCResponse) as any) === undefined) {
		__goscript_init_emptyVisibilityAPIServiceGetSearchAttributesYARPCResponse()
	}
	return emptyVisibilityAPIServiceGetSearchAttributesYARPCResponse
}

export function __goscript_set_emptyVisibilityAPIServiceGetSearchAttributesYARPCResponse(__goscriptValue: __goscript_service_visibility_pb.GetSearchAttributesResponse | $.VarRef<__goscript_service_visibility_pb.GetSearchAttributesResponse> | null): void {
	emptyVisibilityAPIServiceGetSearchAttributesYARPCResponse = __goscriptValue
}

export let yarpcFileDescriptorClosurea7341dc69cef4364: $.Slice<$.Slice<number>> = $.arrayToSlice<$.Slice<number>>([new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 236, 87, 207, 115, 219, 84, 16, 230, 217, 117, 130, 55, 13, 41, 175, 157, 212, 163, 150, 226, 138, 180, 120, 152, 34, 97, 151, 161, 37, 57, 37, 157, 66, 83, 152, 226, 145, 51, 97, 224, 128, 71, 150, 215, 206, 27, 219, 146, 162, 247, 228, 88, 185, 49, 147, 43, 23, 224, 0, 25, 254, 37, 102, 56, 243, 215, 48, 250, 97, 225, 192, 147, 28, 231, 128, 57, 244, 230, 183, 222, 253, 244, 237, 106, 245, 189, 93, 120, 228, 119, 208, 211, 45, 179, 139, 182, 133, 186, 233, 50, 125, 92, 215, 57, 122, 99, 102, 97, 123, 204, 56, 235, 176, 33, 19, 129, 230, 122, 142, 112, 232, 205, 208, 91, 75, 188, 53, 211, 101, 218, 184, 174, 108, 201, 32, 254, 25, 170, 168, 50, 175, 19, 199, 27, 244, 134, 206, 73, 236, 163, 254, 72, 224, 157, 47, 25, 23, 95, 39, 230, 231, 19, 180, 124, 193, 28, 155, 27, 120, 236, 35, 23, 116, 19, 86, 186, 206, 200, 100, 118, 133, 84, 73, 173, 108, 36, 39, 122, 7, 202, 174, 217, 199, 54, 103, 167, 88, 41, 84, 73, 173, 100, 188, 25, 26, 90, 236, 20, 233, 67, 216, 176, 113, 34, 218, 145, 135, 112, 6, 104, 87, 138, 85, 82, 187, 110, 172, 135, 230, 166, 217, 199, 131, 208, 72, 111, 65, 233, 216, 71, 47, 168, 92, 139, 176, 227, 131, 250, 51, 129, 123, 89, 164, 184, 235, 216, 28, 233, 75, 0, 76, 173, 21, 82, 45, 214, 214, 26, 31, 104, 146, 90, 105, 255, 2, 217, 183, 123, 142, 49, 19, 45, 35, 91, 144, 144, 85, 207, 138, 112, 63, 164, 245, 149, 139, 246, 146, 234, 213, 132, 183, 185, 48, 61, 209, 22, 108, 132, 237, 30, 27, 10, 244, 162, 218, 173, 53, 182, 164, 217, 183, 66, 239, 3, 54, 194, 207, 34, 95, 99, 131, 95, 52, 208, 111, 224, 70, 90, 138, 41, 96, 41, 2, 124, 116, 185, 114, 198, 56, 47, 222, 48, 54, 240, 162, 137, 190, 132, 53, 17, 184, 41, 205, 149, 8, 245, 253, 92, 212, 131, 192, 197, 20, 16, 68, 122, 218, 43, 195, 106, 12, 195, 213, 95, 8, 168, 121, 175, 97, 137, 29, 242, 71, 17, 222, 11, 169, 61, 27, 58, 28, 187, 175, 123, 228, 63, 237, 17, 250, 2, 214, 185, 48, 133, 207, 167, 104, 171, 17, 218, 253, 172, 164, 133, 207, 83, 156, 235, 124, 230, 60, 219, 109, 231, 4, 182, 242, 95, 233, 18, 251, 237, 156, 192, 131, 144, 220, 174, 103, 29, 177, 241, 210, 58, 78, 174, 226, 191, 17, 120, 56, 143, 220, 18, 107, 23, 222, 124, 45, 203, 180, 255, 119, 55, 95, 22, 169, 37, 214, 234, 21, 220, 123, 230, 248, 246, 21, 166, 132, 52, 205, 194, 108, 154, 79, 224, 221, 76, 188, 36, 205, 91, 80, 178, 66, 151, 8, 175, 104, 196, 7, 245, 46, 40, 159, 163, 104, 161, 233, 89, 71, 187, 66, 120, 172, 227, 11, 156, 146, 80, 127, 39, 112, 71, 250, 119, 130, 249, 10, 174, 13, 48, 152, 22, 109, 91, 90, 180, 156, 120, 237, 11, 12, 248, 115, 91, 120, 129, 17, 225, 40, 223, 65, 57, 53, 209, 27, 80, 28, 96, 144, 164, 31, 254, 164, 59, 80, 26, 155, 67, 63, 238, 145, 183, 26, 15, 164, 207, 219, 183, 187, 56, 193, 238, 97, 232, 24, 42, 155, 17, 199, 108, 23, 158, 146, 198, 159, 171, 176, 126, 152, 78, 117, 187, 205, 125, 250, 61, 129, 77, 249, 100, 68, 27, 82, 248, 220, 217, 78, 121, 188, 80, 76, 82, 197, 31, 8, 40, 217, 247, 47, 253, 36, 19, 51, 119, 110, 82, 158, 44, 28, 151, 240, 249, 137, 192, 221, 60, 133, 166, 79, 51, 145, 231, 220, 211, 202, 167, 87, 136, 76, 88, 253, 154, 204, 176, 217, 234, 71, 183, 51, 209, 231, 234, 185, 178, 115, 165, 216, 132, 91, 216, 69, 114, 149, 201, 232, 162, 92, 157, 204, 232, 162, 57, 50, 118, 70, 224, 118, 134, 6, 80, 57, 96, 190, 2, 41, 31, 47, 22, 148, 208, 152, 192, 77, 201, 23, 79, 245, 203, 107, 67, 252, 244, 143, 22, 21, 147, 189, 30, 220, 182, 156, 145, 44, 108, 111, 243, 239, 143, 190, 21, 239, 133, 205, 112, 89, 107, 146, 111, 235, 125, 38, 142, 252, 142, 102, 57, 35, 125, 118, 187, 251, 144, 117, 135, 122, 223, 209, 163, 165, 46, 89, 245, 118, 76, 151, 141, 235, 157, 149, 200, 246, 248, 175, 0, 0, 0, 255, 255, 196, 105, 224, 168, 119, 14, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 132, 146, 205, 110, 211, 64, 20, 133, 113, 105, 35, 113, 83, 168, 53, 8, 2, 174, 32, 200, 98, 81, 33, 49, 150, 203, 178, 11, 148, 96, 131, 70, 132, 36, 56, 110, 74, 216, 88, 99, 123, 26, 70, 140, 61, 150, 61, 78, 219, 167, 224, 61, 121, 10, 228, 191, 10, 9, 87, 236, 236, 115, 207, 249, 52, 247, 7, 94, 151, 33, 203, 173, 136, 198, 44, 141, 152, 69, 51, 110, 237, 108, 107, 199, 11, 30, 114, 193, 213, 13, 206, 114, 169, 36, 122, 92, 185, 112, 235, 194, 52, 227, 120, 103, 27, 227, 173, 148, 91, 193, 172, 218, 18, 150, 151, 150, 226, 9, 43, 20, 77, 178, 38, 101, 152, 125, 236, 43, 153, 255, 188, 20, 242, 170, 241, 152, 95, 97, 116, 209, 42, 238, 53, 139, 74, 197, 101, 250, 145, 11, 197, 114, 52, 134, 97, 103, 14, 120, 252, 76, 123, 165, 157, 60, 240, 160, 147, 72, 140, 158, 192, 32, 47, 211, 170, 182, 87, 215, 14, 242, 50, 37, 177, 121, 2, 168, 67, 250, 55, 25, 107, 105, 8, 246, 83, 154, 176, 22, 83, 127, 155, 191, 52, 56, 90, 41, 154, 43, 159, 39, 157, 239, 61, 60, 100, 52, 23, 156, 21, 42, 168, 26, 170, 3, 195, 83, 3, 55, 221, 226, 174, 91, 236, 119, 221, 122, 135, 93, 160, 146, 208, 25, 12, 5, 85, 183, 241, 189, 255, 198, 161, 177, 87, 130, 185, 129, 195, 149, 162, 170, 44, 218, 215, 16, 24, 20, 245, 127, 253, 140, 71, 167, 54, 238, 217, 4, 254, 103, 130, 31, 132, 44, 88, 3, 242, 90, 192, 155, 223, 26, 232, 36, 141, 217, 53, 139, 215, 84, 148, 172, 154, 13, 122, 9, 6, 153, 59, 238, 55, 215, 9, 214, 147, 217, 185, 27, 248, 155, 165, 27, 144, 249, 122, 50, 35, 142, 126, 15, 189, 128, 231, 61, 245, 149, 239, 145, 249, 39, 93, 187, 35, 254, 217, 221, 92, 44, 60, 71, 223, 67, 6, 60, 237, 197, 251, 250, 253, 59, 208, 206, 226, 124, 58, 115, 245, 125, 116, 12, 163, 158, 242, 116, 177, 152, 233, 7, 104, 12, 199, 125, 217, 137, 239, 250, 228, 139, 171, 15, 166, 1, 140, 34, 153, 244, 13, 107, 122, 180, 190, 189, 238, 101, 181, 140, 165, 246, 221, 222, 114, 245, 163, 12, 113, 36, 19, 235, 239, 155, 125, 203, 99, 97, 109, 101, 115, 225, 237, 1, 159, 209, 140, 239, 236, 112, 80, 107, 239, 254, 4, 0, 0, 255, 255, 70, 64, 117, 93, 64, 3, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 79, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 47, 201, 204, 77, 45, 46, 73, 204, 45, 208, 3, 11, 9, 241, 67, 20, 232, 193, 20, 40, 89, 115, 113, 134, 192, 212, 8, 73, 112, 177, 23, 167, 38, 231, 231, 165, 20, 75, 48, 42, 48, 106, 48, 7, 193, 184, 66, 34, 92, 172, 121, 137, 121, 249, 197, 18, 76, 10, 140, 26, 172, 65, 16, 142, 83, 43, 35, 151, 112, 114, 126, 174, 30, 154, 161, 78, 124, 112, 35, 3, 64, 66, 1, 140, 81, 70, 80, 37, 233, 249, 57, 137, 121, 233, 122, 249, 69, 233, 72, 110, 172, 44, 72, 45, 214, 207, 206, 203, 47, 207, 67, 184, 183, 32, 233, 7, 35, 227, 34, 38, 102, 247, 0, 167, 85, 76, 114, 238, 16, 221, 1, 80, 45, 122, 225, 169, 57, 57, 222, 32, 13, 33, 32, 189, 73, 108, 96, 179, 140, 1, 1, 0, 0, 255, 255, 174, 101, 206, 125, 255, 0, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 196, 90, 205, 114, 219, 200, 181, 190, 32, 37, 89, 58, 164, 36, 168, 37, 89, 244, 207, 216, 178, 102, 236, 145, 121, 199, 210, 200, 243, 63, 190, 115, 29, 8, 132, 108, 216, 52, 200, 52, 65, 107, 52, 149, 4, 5, 145, 45, 9, 49, 9, 176, 128, 166, 109, 237, 83, 149, 108, 147, 213, 84, 86, 121, 128, 84, 165, 82, 89, 100, 149, 202, 19, 100, 155, 87, 72, 229, 45, 82, 221, 104, 144, 0, 9, 18, 116, 82, 53, 217, 9, 167, 191, 239, 244, 233, 243, 215, 7, 16, 97, 167, 127, 74, 252, 253, 150, 221, 38, 110, 139, 236, 219, 61, 103, 255, 245, 193, 254, 27, 207, 127, 117, 214, 241, 222, 236, 245, 124, 143, 122, 104, 157, 97, 246, 4, 102, 207, 238, 57, 123, 175, 15, 174, 223, 58, 247, 188, 243, 14, 217, 231, 144, 211, 254, 217, 126, 187, 239, 219, 212, 241, 220, 144, 116, 253, 246, 232, 58, 117, 186, 36, 160, 118, 183, 39, 0, 219, 105, 59, 183, 188, 110, 119, 160, 34, 213, 54, 106, 7, 175, 58, 78, 64, 67, 204, 206, 247, 69, 216, 60, 22, 230, 106, 111, 73, 171, 207, 76, 208, 221, 51, 15, 53, 1, 69, 231, 176, 72, 180, 82, 146, 182, 165, 221, 194, 195, 123, 123, 41, 71, 218, 27, 211, 131, 215, 222, 140, 138, 208, 103, 48, 71, 47, 123, 164, 148, 227, 138, 238, 76, 85, 100, 94, 246, 8, 230, 112, 244, 21, 64, 64, 109, 159, 90, 204, 13, 165, 60, 39, 95, 223, 11, 125, 180, 23, 249, 104, 207, 140, 124, 132, 151, 56, 154, 61, 51, 106, 171, 227, 5, 36, 164, 206, 101, 83, 57, 154, 83, 77, 40, 134, 212, 128, 218, 180, 31, 148, 230, 183, 165, 221, 149, 135, 7, 179, 157, 94, 101, 204, 6, 39, 226, 66, 107, 248, 128, 238, 194, 202, 133, 19, 80, 207, 191, 180, 58, 196, 61, 167, 23, 165, 133, 109, 105, 55, 143, 151, 133, 180, 202, 133, 232, 39, 176, 217, 179, 125, 226, 210, 161, 251, 45, 199, 61, 243, 74, 87, 248, 17, 118, 83, 173, 168, 115, 70, 34, 146, 120, 189, 55, 46, 68, 10, 172, 12, 213, 114, 207, 44, 102, 122, 102, 121, 192, 224, 222, 121, 0, 115, 93, 210, 245, 74, 75, 156, 120, 45, 213, 158, 23, 164, 235, 97, 14, 67, 24, 214, 2, 98, 251, 173, 11, 203, 166, 212, 119, 78, 251, 148, 4, 37, 224, 220, 187, 169, 220, 6, 71, 43, 3, 48, 150, 131, 17, 9, 170, 194, 154, 221, 167, 158, 229, 147, 128, 80, 171, 231, 57, 46, 13, 74, 5, 174, 115, 59, 85, 39, 102, 192, 58, 199, 225, 85, 70, 141, 9, 208, 13, 88, 98, 229, 97, 177, 250, 40, 21, 183, 165, 221, 37, 188, 200, 4, 85, 39, 160, 72, 133, 149, 193, 98, 24, 135, 53, 190, 207, 123, 169, 251, 152, 130, 134, 139, 145, 2, 238, 245, 45, 184, 226, 4, 86, 203, 247, 220, 210, 242, 182, 180, 187, 136, 23, 156, 64, 245, 61, 23, 61, 130, 66, 191, 215, 182, 169, 200, 210, 149, 204, 88, 64, 8, 231, 129, 248, 57, 200, 61, 219, 167, 14, 143, 101, 203, 115, 207, 156, 243, 210, 234, 118, 126, 183, 240, 240, 241, 108, 169, 202, 108, 99, 169, 19, 170, 80, 185, 6, 205, 165, 254, 37, 94, 237, 37, 165, 232, 37, 172, 51, 243, 45, 239, 53, 241, 59, 118, 207, 234, 121, 29, 167, 117, 89, 146, 121, 101, 164, 247, 5, 118, 192, 90, 8, 175, 115, 52, 94, 107, 141, 138, 208, 91, 184, 109, 183, 168, 243, 154, 88, 173, 78, 63, 160, 196, 183, 2, 210, 33, 45, 126, 36, 177, 7, 226, 78, 73, 175, 62, 133, 115, 213, 144, 218, 136, 152, 98, 187, 155, 246, 148, 85, 244, 62, 44, 243, 19, 5, 173, 11, 210, 238, 119, 72, 105, 157, 71, 190, 200, 132, 13, 33, 67, 199, 32, 15, 203, 69, 116, 131, 13, 126, 230, 143, 102, 115, 177, 104, 4, 171, 36, 41, 64, 38, 148, 162, 141, 219, 214, 72, 69, 110, 102, 102, 193, 213, 1, 87, 139, 151, 230, 245, 67, 216, 72, 11, 39, 146, 33, 255, 138, 92, 242, 46, 190, 132, 217, 159, 104, 3, 230, 95, 219, 157, 126, 216, 144, 151, 112, 248, 240, 117, 238, 75, 105, 231, 251, 28, 220, 26, 111, 106, 92, 153, 184, 170, 208, 215, 241, 130, 145, 102, 41, 135, 97, 61, 217, 176, 157, 240, 40, 235, 237, 158, 53, 236, 212, 94, 159, 138, 75, 226, 218, 152, 3, 42, 194, 0, 124, 51, 238, 78, 159, 154, 158, 26, 245, 110, 175, 79, 209, 49, 220, 224, 230, 77, 208, 158, 207, 210, 190, 197, 216, 41, 138, 119, 254, 38, 193, 122, 74, 167, 101, 13, 164, 237, 117, 109, 199, 181, 156, 182, 112, 242, 98, 40, 208, 219, 232, 54, 20, 196, 162, 107, 119, 35, 127, 67, 40, 50, 236, 46, 153, 112, 227, 230, 255, 211, 27, 247, 14, 20, 29, 215, 161, 142, 77, 73, 155, 217, 53, 199, 47, 155, 194, 64, 166, 183, 119, 126, 45, 193, 166, 246, 150, 18, 223, 181, 59, 63, 200, 20, 48, 106, 83, 110, 220, 166, 63, 47, 192, 122, 157, 184, 109, 199, 61, 231, 197, 237, 208, 75, 110, 209, 109, 40, 216, 226, 121, 232, 101, 136, 68, 122, 27, 29, 193, 242, 0, 144, 57, 106, 68, 170, 249, 168, 81, 180, 99, 79, 232, 49, 204, 179, 66, 15, 167, 141, 149, 135, 247, 211, 239, 219, 164, 133, 172, 168, 9, 14, 121, 72, 135, 181, 11, 98, 251, 244, 148, 216, 212, 106, 19, 106, 59, 157, 64, 204, 31, 55, 39, 92, 222, 151, 29, 207, 110, 99, 121, 64, 171, 132, 44, 244, 12, 214, 59, 118, 64, 173, 161, 62, 222, 32, 230, 51, 27, 196, 26, 163, 61, 141, 88, 252, 182, 56, 2, 46, 12, 171, 130, 180, 67, 77, 11, 153, 154, 86, 25, 169, 17, 114, 184, 158, 18, 92, 177, 41, 37, 221, 30, 229, 19, 201, 60, 142, 30, 209, 125, 144, 187, 246, 91, 167, 219, 239, 90, 66, 20, 240, 233, 98, 30, 175, 10, 185, 34, 196, 108, 12, 25, 182, 63, 110, 201, 82, 246, 24, 50, 96, 112, 59, 84, 88, 37, 111, 123, 78, 88, 179, 161, 14, 200, 212, 177, 50, 164, 112, 37, 143, 161, 200, 157, 114, 102, 59, 157, 190, 79, 196, 12, 145, 30, 166, 163, 16, 131, 11, 140, 33, 30, 208, 199, 176, 193, 21, 176, 92, 39, 190, 229, 180, 137, 75, 29, 122, 41, 198, 8, 196, 214, 142, 249, 146, 46, 86, 208, 231, 176, 21, 133, 96, 148, 180, 204, 73, 155, 98, 121, 132, 119, 27, 10, 145, 3, 88, 1, 172, 240, 210, 129, 72, 164, 183, 119, 254, 148, 131, 107, 34, 47, 213, 11, 167, 211, 254, 65, 42, 250, 163, 152, 90, 86, 117, 241, 38, 39, 191, 137, 13, 244, 188, 213, 141, 214, 127, 126, 172, 254, 217, 160, 33, 198, 223, 176, 107, 139, 33, 96, 110, 202, 160, 17, 182, 100, 222, 169, 163, 65, 163, 55, 42, 66, 87, 97, 33, 236, 185, 188, 122, 150, 176, 120, 218, 249, 71, 110, 208, 111, 42, 164, 229, 4, 145, 191, 6, 109, 64, 202, 110, 3, 17, 49, 209, 6, 198, 83, 60, 247, 174, 41, 254, 13, 20, 19, 213, 154, 253, 254, 83, 8, 210, 43, 117, 46, 89, 169, 24, 182, 60, 223, 57, 119, 92, 187, 99, 141, 24, 153, 221, 91, 54, 35, 106, 35, 97, 236, 72, 126, 46, 140, 229, 231, 95, 114, 112, 45, 106, 152, 85, 175, 101, 119, 42, 78, 208, 179, 105, 235, 98, 182, 254, 254, 223, 247, 231, 207, 224, 86, 210, 2, 203, 59, 179, 232, 133, 19, 88, 113, 55, 79, 87, 120, 61, 97, 81, 237, 204, 188, 112, 2, 209, 21, 209, 123, 0, 124, 110, 161, 222, 43, 18, 166, 105, 17, 243, 65, 203, 100, 130, 157, 103, 80, 136, 191, 181, 60, 130, 5, 241, 226, 35, 241, 153, 255, 253, 140, 23, 31, 254, 78, 40, 40, 59, 127, 200, 193, 74, 114, 9, 125, 8, 171, 167, 142, 107, 251, 151, 86, 235, 130, 180, 94, 5, 253, 174, 8, 194, 74, 40, 86, 133, 20, 109, 194, 130, 223, 119, 163, 235, 123, 9, 207, 251, 125, 54, 231, 124, 3, 55, 206, 28, 63, 96, 87, 94, 88, 13, 86, 203, 235, 246, 58, 36, 81, 234, 37, 14, 137, 234, 69, 141, 0, 156, 94, 108, 249, 196, 30, 196, 38, 219, 149, 5, 129, 23, 141, 124, 153, 183, 118, 199, 61, 159, 53, 143, 139, 17, 129, 43, 184, 5, 192, 223, 38, 169, 125, 218, 9, 239, 197, 69, 28, 147, 148, 255, 40, 193, 70, 218, 173, 143, 118, 224, 86, 93, 51, 42, 186, 241, 196, 82, 84, 83, 127, 169, 155, 39, 86, 195, 84, 76, 205, 210, 141, 151, 74, 85, 175, 200, 255, 131, 62, 128, 237, 9, 152, 134, 250, 84, 171, 52, 171, 90, 69, 150, 166, 104, 106, 152, 10, 54, 181, 138, 156, 67, 255, 11, 31, 78, 192, 168, 138, 161, 106, 85, 11, 107, 63, 110, 106, 13, 6, 206, 151, 127, 49, 180, 57, 209, 162, 226, 59, 85, 52, 85, 111, 232, 53, 99, 154, 205, 35, 152, 9, 54, 143, 162, 34, 155, 203, 191, 204, 13, 63, 54, 233, 109, 76, 250, 131, 166, 252, 1, 108, 31, 215, 240, 243, 163, 106, 237, 216, 210, 43, 22, 214, 154, 13, 205, 170, 215, 170, 186, 122, 18, 179, 228, 75, 248, 116, 34, 74, 169, 50, 105, 165, 89, 175, 234, 42, 219, 245, 72, 209, 171, 90, 197, 170, 25, 213, 19, 89, 66, 31, 193, 238, 172, 76, 57, 135, 30, 192, 253, 137, 104, 172, 61, 211, 84, 51, 6, 207, 163, 3, 120, 48, 17, 110, 106, 248, 133, 110, 112, 135, 30, 89, 184, 105, 24, 186, 241, 68, 158, 43, 95, 194, 218, 216, 91, 49, 186, 13, 55, 84, 92, 51, 172, 218, 75, 13, 87, 149, 250, 248, 249, 39, 0, 26, 207, 245, 122, 61, 10, 66, 26, 224, 176, 121, 116, 164, 97, 171, 102, 104, 114, 174, 252, 59, 9, 214, 198, 46, 74, 166, 186, 174, 96, 205, 48, 45, 181, 90, 75, 243, 253, 4, 128, 114, 168, 24, 149, 154, 33, 75, 232, 30, 236, 164, 1, 68, 26, 138, 172, 148, 115, 232, 14, 188, 151, 134, 27, 56, 74, 206, 151, 255, 153, 131, 155, 211, 62, 167, 177, 228, 31, 120, 92, 251, 86, 83, 155, 38, 75, 183, 80, 31, 75, 186, 102, 35, 102, 121, 60, 154, 19, 192, 106, 237, 69, 189, 170, 153, 220, 135, 101, 184, 151, 5, 15, 115, 75, 206, 37, 210, 106, 146, 106, 126, 110, 86, 133, 104, 15, 202, 89, 232, 129, 23, 42, 242, 28, 250, 20, 62, 206, 54, 220, 48, 117, 163, 169, 85, 44, 165, 97, 25, 218, 177, 60, 63, 203, 113, 77, 253, 5, 43, 141, 166, 41, 47, 148, 127, 149, 135, 173, 9, 31, 43, 208, 93, 184, 147, 162, 106, 204, 193, 83, 97, 162, 41, 200, 210, 116, 216, 176, 177, 125, 8, 239, 79, 134, 13, 3, 149, 79, 244, 140, 49, 160, 8, 209, 28, 75, 203, 41, 234, 162, 224, 204, 163, 93, 248, 96, 50, 46, 22, 150, 133, 9, 97, 156, 20, 144, 43, 211, 15, 52, 12, 197, 98, 249, 175, 18, 92, 85, 61, 151, 58, 110, 159, 40, 129, 65, 222, 232, 225, 56, 236, 249, 204, 119, 145, 102, 161, 216, 210, 13, 221, 212, 21, 179, 134, 147, 145, 152, 12, 99, 109, 185, 162, 225, 48, 197, 39, 195, 176, 102, 226, 19, 81, 149, 225, 61, 51, 25, 203, 155, 77, 116, 11, 200, 249, 242, 239, 37, 40, 136, 111, 36, 252, 21, 186, 4, 27, 236, 128, 181, 166, 105, 153, 39, 117, 45, 217, 78, 18, 43, 60, 254, 150, 89, 11, 19, 53, 108, 101, 73, 128, 216, 133, 97, 56, 88, 206, 77, 197, 132, 122, 242, 232, 58, 92, 77, 96, 158, 106, 10, 54, 15, 53, 197, 148, 231, 202, 191, 149, 224, 90, 116, 31, 154, 108, 188, 114, 186, 164, 93, 235, 83, 213, 238, 7, 4, 221, 135, 187, 131, 155, 204, 84, 26, 207, 135, 177, 178, 84, 133, 181, 248, 225, 105, 50, 161, 194, 4, 89, 98, 217, 48, 29, 138, 181, 134, 102, 202, 185, 242, 223, 11, 176, 21, 55, 142, 189, 104, 146, 118, 104, 218, 61, 216, 73, 42, 17, 183, 221, 168, 93, 7, 240, 96, 10, 174, 105, 60, 85, 140, 10, 123, 142, 64, 178, 132, 30, 195, 163, 41, 148, 67, 165, 50, 244, 242, 96, 238, 80, 76, 19, 235, 135, 77, 83, 107, 200, 57, 164, 129, 146, 161, 32, 121, 37, 164, 170, 201, 163, 175, 224, 179, 44, 59, 194, 148, 209, 95, 104, 56, 78, 157, 67, 95, 195, 231, 25, 84, 177, 243, 24, 119, 30, 61, 130, 47, 50, 173, 87, 107, 184, 98, 189, 80, 240, 243, 36, 121, 1, 233, 160, 101, 109, 44, 250, 151, 149, 210, 17, 98, 170, 174, 204, 224, 69, 38, 200, 80, 179, 136, 158, 128, 58, 155, 43, 166, 43, 90, 66, 223, 130, 249, 110, 81, 213, 190, 53, 53, 108, 40, 89, 154, 1, 125, 3, 95, 101, 58, 45, 217, 127, 98, 244, 2, 250, 2, 62, 153, 66, 143, 231, 200, 112, 54, 212, 43, 114, 17, 125, 6, 7, 83, 136, 188, 10, 173, 134, 169, 171, 207, 79, 194, 229, 170, 222, 48, 229, 101, 244, 35, 248, 191, 41, 180, 193, 97, 217, 31, 26, 142, 149, 24, 131, 53, 177, 38, 175, 204, 16, 147, 134, 254, 36, 219, 115, 171, 72, 133, 199, 51, 149, 136, 250, 84, 175, 86, 210, 149, 200, 232, 19, 216, 159, 162, 228, 168, 134, 85, 77, 12, 15, 131, 38, 177, 134, 62, 135, 135, 211, 72, 138, 94, 101, 19, 232, 40, 15, 177, 137, 102, 182, 163, 235, 70, 189, 105, 90, 13, 253, 59, 77, 94, 103, 19, 77, 102, 164, 34, 95, 201, 27, 227, 205, 120, 108, 147, 67, 221, 80, 240, 137, 188, 153, 145, 123, 227, 141, 46, 145, 66, 87, 103, 57, 142, 166, 96, 245, 105, 220, 227, 91, 236, 214, 185, 195, 191, 203, 141, 141, 93, 241, 22, 127, 0, 15, 194, 184, 165, 100, 193, 132, 110, 127, 8, 255, 63, 27, 101, 176, 174, 84, 177, 166, 84, 78, 6, 47, 38, 82, 249, 55, 57, 40, 171, 182, 219, 34, 157, 232, 255, 1, 83, 173, 124, 4, 95, 204, 80, 239, 19, 236, 61, 134, 198, 187, 146, 155, 198, 115, 163, 118, 108, 76, 35, 200, 18, 50, 224, 217, 187, 42, 30, 115, 201, 112, 210, 204, 113, 167, 52, 156, 115, 254, 207, 145, 217, 156, 34, 210, 248, 223, 115, 202, 187, 146, 103, 118, 202, 187, 42, 158, 230, 148, 195, 159, 194, 86, 203, 235, 166, 125, 107, 58, 92, 142, 220, 83, 247, 61, 234, 213, 165, 239, 14, 206, 29, 122, 209, 63, 221, 107, 121, 221, 253, 248, 143, 82, 30, 56, 237, 206, 254, 185, 23, 254, 200, 69, 252, 66, 229, 145, 221, 115, 94, 31, 156, 46, 112, 217, 39, 255, 10, 0, 0, 255, 255, 0, 106, 118, 215, 97, 35, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 75, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 79, 41, 45, 74, 44, 201, 204, 207, 211, 3, 139, 8, 241, 67, 228, 245, 96, 242, 74, 86, 92, 28, 46, 80, 37, 66, 18, 92, 236, 197, 169, 201, 249, 121, 41, 197, 18, 140, 10, 140, 26, 204, 65, 48, 174, 144, 8, 23, 107, 94, 98, 94, 126, 177, 4, 147, 2, 163, 6, 107, 16, 132, 227, 212, 204, 200, 37, 156, 156, 159, 171, 135, 102, 166, 19, 47, 204, 196, 0, 144, 72, 0, 99, 148, 33, 84, 69, 122, 126, 78, 98, 94, 186, 94, 126, 81, 58, 194, 129, 37, 149, 5, 169, 197, 250, 217, 121, 249, 229, 121, 112, 199, 22, 36, 253, 96, 100, 92, 196, 196, 236, 30, 224, 180, 138, 73, 206, 29, 162, 57, 0, 170, 67, 47, 60, 53, 39, 199, 27, 164, 62, 4, 164, 53, 137, 13, 108, 148, 49, 32, 0, 0, 255, 255, 239, 138, 180, 195, 251, 0, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 188, 86, 93, 115, 219, 68, 23, 126, 101, 215, 249, 56, 78, 19, 101, 211, 38, 78, 218, 188, 111, 234, 23, 104, 200, 128, 61, 113, 111, 58, 64, 1, 213, 31, 137, 90, 99, 155, 181, 219, 80, 152, 169, 102, 45, 173, 221, 37, 178, 86, 72, 43, 55, 238, 5, 195, 13, 127, 131, 11, 174, 249, 39, 92, 242, 135, 152, 149, 86, 177, 157, 184, 148, 11, 134, 59, 237, 121, 158, 243, 177, 71, 231, 99, 225, 32, 234, 211, 160, 108, 19, 135, 122, 54, 45, 19, 159, 149, 199, 199, 101, 155, 143, 70, 220, 43, 249, 1, 23, 28, 109, 73, 70, 73, 49, 74, 196, 103, 165, 241, 241, 222, 127, 135, 156, 15, 93, 90, 142, 41, 253, 104, 80, 118, 162, 128, 8, 150, 42, 21, 159, 194, 230, 25, 15, 206, 7, 46, 127, 93, 191, 160, 118, 36, 33, 244, 63, 200, 191, 86, 66, 139, 57, 5, 237, 64, 59, 92, 197, 144, 138, 76, 7, 221, 134, 165, 32, 242, 36, 150, 137, 177, 92, 16, 121, 166, 83, 44, 194, 90, 106, 172, 55, 241, 41, 66, 112, 195, 35, 35, 170, 12, 196, 223, 146, 99, 216, 130, 141, 153, 152, 188, 149, 179, 15, 203, 29, 50, 113, 57, 113, 36, 236, 16, 65, 98, 120, 13, 199, 223, 197, 55, 176, 220, 32, 204, 141, 2, 138, 182, 97, 41, 160, 36, 228, 158, 210, 87, 39, 84, 128, 101, 135, 10, 194, 220, 48, 142, 112, 13, 167, 71, 244, 8, 150, 185, 47, 111, 25, 22, 178, 7, 218, 97, 190, 242, 255, 210, 130, 188, 149, 148, 131, 118, 66, 197, 169, 78, 241, 55, 13, 214, 231, 49, 212, 6, 125, 144, 72, 44, 155, 8, 58, 228, 193, 36, 142, 102, 189, 242, 222, 95, 153, 174, 42, 46, 222, 24, 204, 11, 144, 9, 91, 30, 189, 16, 86, 64, 69, 48, 177, 152, 39, 104, 48, 38, 110, 124, 145, 124, 101, 183, 148, 252, 209, 82, 250, 71, 75, 53, 245, 71, 241, 166, 212, 194, 82, 201, 84, 58, 197, 95, 52, 184, 241, 21, 29, 113, 244, 8, 150, 6, 140, 186, 78, 88, 208, 14, 178, 135, 249, 202, 251, 11, 67, 147, 212, 82, 35, 230, 213, 61, 17, 76, 176, 82, 218, 59, 131, 252, 140, 24, 233, 144, 61, 167, 19, 149, 115, 249, 137, 42, 144, 27, 19, 55, 162, 42, 202, 187, 11, 205, 171, 159, 138, 19, 234, 39, 153, 135, 90, 241, 87, 13, 150, 78, 41, 113, 104, 128, 190, 184, 18, 226, 253, 133, 54, 18, 242, 191, 27, 228, 31, 26, 232, 93, 74, 2, 251, 149, 33, 68, 192, 250, 145, 160, 33, 178, 96, 157, 121, 14, 189, 160, 142, 53, 23, 246, 195, 133, 86, 175, 170, 151, 204, 68, 119, 246, 30, 55, 217, 172, 108, 239, 37, 160, 235, 164, 127, 240, 86, 3, 88, 169, 17, 65, 30, 187, 188, 143, 26, 112, 147, 122, 54, 119, 152, 55, 180, 196, 196, 167, 170, 128, 239, 45, 180, 85, 87, 76, 217, 191, 120, 141, 206, 156, 46, 219, 53, 51, 211, 174, 157, 100, 196, 208, 224, 57, 13, 66, 198, 61, 211, 27, 112, 73, 100, 35, 223, 77, 219, 94, 126, 163, 251, 176, 49, 160, 68, 200, 70, 26, 39, 84, 53, 94, 214, 149, 88, 25, 40, 62, 133, 157, 110, 228, 251, 60, 16, 212, 169, 186, 140, 122, 66, 33, 161, 156, 76, 67, 110, 133, 206, 185, 178, 156, 27, 242, 174, 115, 142, 118, 97, 229, 123, 50, 38, 49, 144, 216, 92, 150, 231, 174, 115, 94, 252, 41, 11, 249, 184, 105, 58, 220, 101, 246, 4, 213, 64, 103, 30, 19, 140, 184, 211, 214, 211, 222, 213, 122, 27, 74, 37, 109, 60, 84, 134, 173, 62, 177, 207, 249, 96, 96, 217, 156, 14, 6, 204, 150, 97, 198, 190, 53, 140, 20, 84, 157, 34, 210, 237, 136, 92, 176, 81, 52, 154, 186, 205, 190, 211, 173, 82, 185, 116, 251, 225, 212, 10, 17, 130, 142, 124, 17, 22, 110, 28, 104, 135, 185, 75, 170, 161, 196, 232, 17, 220, 241, 184, 151, 12, 25, 210, 119, 169, 69, 131, 128, 7, 86, 50, 64, 195, 66, 238, 32, 123, 184, 138, 11, 30, 247, 112, 202, 168, 75, 2, 78, 112, 244, 4, 182, 232, 133, 207, 146, 64, 166, 33, 47, 189, 43, 100, 52, 213, 186, 156, 82, 35, 216, 49, 67, 238, 198, 194, 147, 128, 71, 126, 135, 4, 130, 197, 171, 104, 193, 122, 64, 159, 67, 46, 20, 68, 36, 5, 191, 94, 57, 92, 88, 164, 243, 6, 187, 146, 143, 19, 181, 226, 24, 238, 204, 163, 85, 238, 13, 216, 80, 69, 136, 206, 64, 103, 41, 108, 13, 37, 158, 182, 246, 71, 127, 195, 211, 101, 232, 120, 131, 205, 1, 97, 241, 119, 13, 246, 140, 112, 226, 217, 233, 146, 156, 247, 91, 128, 101, 234, 201, 60, 39, 27, 119, 5, 167, 71, 84, 129, 219, 126, 64, 29, 58, 96, 30, 117, 172, 31, 34, 26, 81, 43, 206, 74, 82, 202, 91, 83, 240, 107, 137, 181, 100, 146, 246, 1, 18, 98, 220, 206, 217, 152, 184, 26, 75, 226, 70, 253, 18, 214, 18, 216, 142, 99, 136, 139, 36, 95, 217, 95, 120, 193, 116, 74, 224, 124, 172, 146, 68, 93, 12, 224, 110, 188, 200, 105, 213, 141, 66, 65, 131, 46, 117, 169, 45, 47, 162, 250, 8, 195, 166, 157, 32, 178, 20, 147, 177, 167, 220, 44, 94, 62, 202, 206, 229, 140, 196, 186, 125, 69, 82, 252, 12, 244, 171, 44, 116, 11, 114, 161, 205, 253, 180, 68, 146, 195, 101, 221, 100, 102, 158, 21, 223, 192, 102, 135, 12, 153, 23, 167, 59, 221, 222, 119, 96, 213, 39, 67, 106, 133, 236, 77, 98, 34, 135, 87, 164, 160, 203, 222, 80, 244, 1, 108, 196, 155, 56, 102, 8, 126, 78, 61, 53, 217, 110, 74, 113, 135, 12, 105, 79, 10, 143, 126, 214, 96, 227, 202, 90, 71, 119, 161, 208, 48, 204, 230, 51, 92, 183, 170, 70, 175, 126, 210, 198, 47, 44, 179, 245, 220, 104, 154, 53, 253, 63, 104, 23, 110, 95, 67, 59, 237, 102, 83, 215, 208, 62, 236, 94, 131, 186, 61, 163, 85, 51, 112, 77, 207, 160, 61, 216, 190, 6, 55, 140, 158, 209, 212, 179, 71, 175, 97, 109, 118, 56, 75, 47, 245, 86, 181, 93, 51, 91, 39, 86, 239, 69, 167, 62, 19, 192, 30, 108, 207, 67, 189, 83, 108, 54, 122, 248, 76, 215, 208, 54, 160, 121, 236, 73, 183, 221, 210, 51, 168, 0, 183, 230, 229, 29, 220, 238, 181, 31, 232, 217, 163, 31, 97, 107, 65, 195, 161, 123, 176, 111, 118, 219, 77, 163, 103, 182, 91, 214, 9, 110, 63, 235, 200, 155, 244, 102, 227, 120, 43, 229, 180, 110, 52, 123, 167, 47, 116, 237, 237, 148, 26, 54, 204, 86, 189, 166, 103, 142, 94, 194, 154, 204, 63, 31, 211, 32, 189, 184, 76, 82, 251, 121, 29, 95, 189, 248, 14, 108, 205, 67, 141, 54, 174, 214, 117, 45, 77, 236, 20, 56, 193, 70, 181, 222, 120, 214, 212, 51, 143, 191, 131, 29, 155, 143, 22, 149, 237, 227, 124, 53, 126, 132, 119, 228, 164, 235, 104, 223, 30, 15, 153, 120, 21, 245, 75, 54, 31, 149, 103, 159, 236, 31, 51, 199, 45, 15, 121, 242, 16, 87, 239, 247, 79, 137, 207, 198, 199, 253, 165, 88, 246, 224, 207, 0, 0, 0, 255, 255, 236, 69, 194, 8, 227, 11, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 180, 86, 221, 110, 219, 54, 27, 254, 228, 159, 214, 121, 221, 36, 42, 155, 52, 182, 219, 126, 115, 125, 80, 100, 197, 38, 35, 217, 6, 12, 219, 208, 213, 137, 141, 86, 136, 147, 26, 178, 214, 161, 3, 6, 129, 150, 88, 135, 179, 36, 10, 34, 101, 215, 39, 187, 140, 157, 237, 70, 118, 15, 187, 167, 129, 148, 236, 250, 71, 9, 214, 131, 157, 153, 239, 195, 231, 125, 222, 95, 90, 208, 74, 70, 36, 110, 187, 216, 35, 161, 75, 218, 56, 162, 237, 233, 73, 91, 96, 62, 241, 41, 23, 70, 20, 51, 193, 208, 3, 121, 199, 200, 238, 24, 56, 162, 198, 244, 164, 241, 255, 49, 99, 99, 159, 180, 213, 149, 81, 242, 190, 237, 37, 49, 22, 148, 133, 41, 169, 241, 217, 38, 46, 104, 64, 184, 192, 65, 148, 93, 216, 114, 48, 139, 113, 20, 145, 152, 167, 120, 43, 134, 138, 141, 249, 164, 79, 185, 64, 8, 74, 33, 14, 72, 77, 107, 106, 199, 59, 150, 250, 141, 190, 129, 210, 132, 134, 94, 173, 208, 212, 142, 247, 78, 159, 26, 57, 65, 26, 11, 7, 23, 52, 244, 44, 117, 29, 61, 130, 157, 17, 230, 196, 81, 254, 138, 202, 95, 69, 26, 174, 112, 64, 90, 24, 244, 5, 229, 146, 8, 236, 97, 129, 209, 37, 28, 4, 248, 131, 35, 107, 194, 157, 136, 196, 14, 39, 46, 11, 61, 21, 75, 245, 244, 177, 145, 166, 97, 44, 210, 48, 186, 44, 25, 249, 228, 45, 246, 19, 98, 221, 15, 240, 7, 233, 144, 15, 72, 60, 84, 180, 214, 79, 80, 95, 72, 12, 112, 44, 168, 44, 217, 82, 75, 135, 226, 132, 204, 179, 52, 229, 79, 244, 12, 246, 217, 44, 36, 177, 115, 205, 184, 72, 131, 46, 40, 116, 87, 153, 95, 51, 46, 84, 228, 19, 56, 52, 57, 243, 85, 7, 94, 197, 44, 137, 46, 137, 136, 169, 203, 81, 27, 14, 66, 50, 203, 15, 95, 179, 238, 135, 100, 182, 30, 32, 122, 10, 247, 34, 230, 251, 36, 118, 92, 150, 132, 66, 201, 21, 173, 106, 106, 59, 151, 166, 214, 159, 37, 216, 91, 36, 49, 20, 88, 36, 28, 125, 1, 104, 132, 221, 137, 207, 198, 41, 205, 185, 166, 161, 80, 34, 69, 75, 207, 16, 69, 126, 77, 67, 129, 158, 0, 196, 4, 123, 142, 79, 166, 196, 207, 20, 118, 164, 165, 47, 13, 178, 71, 216, 157, 100, 104, 81, 161, 21, 236, 78, 82, 240, 25, 236, 199, 88, 144, 213, 92, 74, 42, 151, 93, 105, 254, 152, 71, 23, 118, 101, 210, 14, 245, 156, 145, 207, 220, 73, 173, 172, 26, 214, 188, 113, 80, 204, 238, 153, 188, 103, 85, 37, 205, 244, 212, 1, 77, 225, 136, 46, 234, 234, 140, 101, 97, 157, 32, 173, 108, 237, 78, 179, 120, 92, 61, 125, 113, 235, 224, 165, 213, 49, 114, 91, 211, 11, 69, 60, 183, 14, 233, 39, 181, 237, 238, 77, 109, 59, 128, 50, 9, 34, 49, 175, 85, 154, 218, 113, 197, 74, 15, 13, 1, 141, 155, 181, 115, 198, 237, 37, 148, 167, 114, 114, 85, 79, 170, 167, 207, 115, 147, 203, 245, 104, 165, 196, 239, 10, 223, 106, 173, 31, 161, 186, 82, 80, 84, 135, 10, 23, 56, 22, 14, 245, 178, 137, 184, 171, 206, 166, 135, 14, 225, 14, 9, 61, 9, 164, 67, 80, 38, 161, 103, 122, 173, 63, 52, 128, 129, 26, 56, 51, 124, 207, 80, 23, 116, 31, 115, 225, 96, 215, 37, 156, 59, 242, 37, 201, 214, 175, 177, 181, 126, 246, 226, 153, 177, 246, 36, 167, 163, 40, 210, 136, 26, 80, 161, 30, 9, 5, 21, 243, 108, 135, 150, 231, 188, 161, 42, 230, 12, 85, 235, 47, 13, 234, 67, 65, 221, 201, 188, 247, 129, 184, 137, 44, 66, 71, 136, 152, 142, 18, 65, 56, 122, 5, 250, 140, 197, 19, 18, 171, 190, 57, 242, 9, 205, 226, 124, 114, 235, 148, 88, 123, 41, 109, 249, 222, 217, 80, 231, 238, 53, 241, 18, 159, 56, 130, 57, 105, 245, 100, 218, 44, 17, 89, 107, 234, 219, 15, 79, 246, 0, 91, 15, 23, 92, 155, 13, 37, 211, 78, 137, 173, 23, 112, 127, 235, 233, 65, 159, 131, 190, 49, 224, 188, 166, 53, 139, 199, 59, 214, 254, 250, 100, 242, 214, 223, 37, 56, 218, 114, 112, 206, 194, 247, 116, 140, 106, 112, 119, 74, 98, 78, 89, 184, 104, 113, 118, 68, 167, 240, 32, 76, 2, 71, 237, 123, 180, 96, 113, 149, 69, 249, 172, 80, 147, 195, 156, 4, 22, 193, 222, 210, 37, 71, 95, 195, 129, 228, 204, 98, 42, 123, 242, 145, 84, 92, 146, 80, 152, 4, 63, 75, 120, 133, 69, 97, 127, 83, 165, 164, 118, 244, 229, 173, 213, 223, 72, 197, 88, 143, 37, 221, 210, 189, 120, 61, 64, 31, 244, 173, 224, 202, 74, 171, 243, 73, 90, 27, 41, 164, 98, 251, 179, 117, 107, 131, 194, 131, 156, 160, 86, 215, 183, 156, 174, 239, 15, 235, 235, 251, 236, 223, 197, 178, 178, 186, 141, 223, 224, 32, 47, 166, 255, 66, 235, 249, 239, 112, 111, 245, 15, 26, 53, 224, 161, 221, 25, 94, 56, 125, 115, 104, 59, 23, 230, 85, 215, 49, 175, 222, 118, 250, 102, 87, 255, 31, 170, 195, 225, 6, 118, 245, 198, 186, 236, 244, 117, 45, 7, 26, 218, 230, 249, 197, 59, 189, 128, 30, 67, 109, 3, 234, 13, 94, 247, 46, 123, 86, 167, 175, 23, 159, 123, 31, 245, 237, 121, 68, 214, 245, 237, 119, 131, 222, 138, 254, 35, 56, 218, 192, 186, 189, 115, 115, 104, 190, 185, 210, 181, 28, 176, 115, 110, 155, 111, 77, 251, 157, 94, 56, 251, 21, 142, 92, 22, 228, 85, 231, 108, 119, 89, 30, 185, 195, 3, 237, 151, 147, 49, 21, 215, 201, 200, 112, 89, 208, 94, 253, 48, 251, 146, 122, 126, 123, 204, 210, 111, 165, 236, 43, 237, 123, 28, 209, 233, 201, 232, 142, 178, 125, 245, 79, 0, 0, 0, 255, 255, 217, 101, 16, 254, 201, 9, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 75, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 47, 47, 74, 44, 40, 72, 45, 42, 214, 3, 139, 8, 241, 67, 228, 245, 96, 242, 74, 202, 92, 220, 46, 249, 165, 73, 57, 169, 97, 137, 57, 165, 169, 66, 34, 92, 172, 101, 32, 134, 4, 163, 2, 163, 6, 99, 16, 132, 163, 164, 196, 197, 229, 150, 147, 159, 88, 130, 69, 13, 19, 146, 26, 207, 188, 18, 51, 19, 44, 106, 152, 97, 106, 148, 185, 184, 67, 113, 41, 98, 65, 53, 200, 216, 8, 139, 26, 86, 52, 131, 176, 42, 226, 133, 41, 82, 228, 226, 116, 202, 207, 207, 193, 162, 132, 3, 201, 156, 224, 146, 162, 204, 188, 116, 44, 138, 56, 145, 28, 228, 84, 89, 146, 90, 140, 69, 13, 15, 84, 141, 83, 51, 35, 151, 112, 114, 126, 174, 30, 90, 240, 58, 241, 134, 67, 195, 63, 0, 36, 18, 192, 24, 101, 8, 85, 145, 158, 159, 147, 152, 151, 174, 151, 95, 148, 142, 136, 171, 146, 202, 130, 212, 98, 253, 236, 188, 252, 242, 60, 120, 188, 21, 36, 253, 96, 100, 92, 196, 196, 236, 30, 224, 180, 138, 73, 206, 29, 162, 57, 0, 170, 67, 47, 60, 53, 39, 199, 27, 164, 62, 4, 164, 53, 137, 13, 108, 148, 49, 32, 0, 0, 255, 255, 60, 146, 72, 48, 6, 2, 0, 0]) as $.Slice<number>])

export function __goscript_set_yarpcFileDescriptorClosurea7341dc69cef4364(__goscriptValue: $.Slice<$.Slice<number>>): void {
	yarpcFileDescriptorClosurea7341dc69cef4364 = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await yarpc.RegisterClientBuilder($.interfaceValue($.functionValue(async (clientConfig: transport.ClientConfig | null, structField: reflect.StructField): globalThis.Promise<VisibilityAPIYARPCClient | null> => {
		return await NewVisibilityAPIYARPCClient(clientConfig, protobuf.ClientBuilderOptions(clientConfig, structField))
	}, ({ kind: $.TypeKind.Function, params: ["transport.ClientConfig", "reflect.StructField"], results: ["apiv1.VisibilityAPIYARPCClient"] } as $.FunctionTypeInfo)), "func(clientConfig transport.ClientConfig, structField reflect.StructField) apiv1.VisibilityAPIYARPCClient", ({ kind: $.TypeKind.Function, params: ["transport.ClientConfig", "reflect.StructField"], results: ["apiv1.VisibilityAPIYARPCClient"] } as $.FunctionTypeInfo)))
}

var __goscriptAwait: any

export { __goscriptInit0 }
