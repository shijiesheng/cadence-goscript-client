// Generated file based on service_domain.pb.yarpc.go
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

import * as __goscript_domain_pb from "./domain.pb.gs.ts"

import * as __goscript_service_domain_pb from "./service_domain.pb.gs.ts"
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
import "./domain.pb.gs.ts"
import "./service_domain.pb.gs.ts"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.DomainAPIYARPCClient", "apiv1.DomainAPIYARPCServer", "apiv1.buildDomainAPIYARPCProceduresParams", "apiv1.FxDomainAPIYARPCClientParams", "apiv1.FxDomainAPIYARPCClientResult", "apiv1.FxDomainAPIYARPCProceduresParams", "apiv1.FxDomainAPIYARPCProceduresResult", "apiv1._DomainAPIYARPCCaller", "apiv1._DomainAPIYARPCHandler"])

export type DomainAPIYARPCClient = {
	DeleteDomain(_p0: context.Context | null, _p1: __goscript_service_domain_pb.DeleteDomainRequest | $.VarRef<__goscript_service_domain_pb.DeleteDomainRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_domain_pb.DeleteDomainResponse | $.VarRef<__goscript_service_domain_pb.DeleteDomainResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_domain_pb.DeleteDomainResponse | $.VarRef<__goscript_service_domain_pb.DeleteDomainResponse> | null, $.GoError]>
	DeprecateDomain(_p0: context.Context | null, _p1: __goscript_service_domain_pb.DeprecateDomainRequest | $.VarRef<__goscript_service_domain_pb.DeprecateDomainRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_domain_pb.DeprecateDomainResponse | $.VarRef<__goscript_service_domain_pb.DeprecateDomainResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_domain_pb.DeprecateDomainResponse | $.VarRef<__goscript_service_domain_pb.DeprecateDomainResponse> | null, $.GoError]>
	DescribeDomain(_p0: context.Context | null, _p1: __goscript_service_domain_pb.DescribeDomainRequest | $.VarRef<__goscript_service_domain_pb.DescribeDomainRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_domain_pb.DescribeDomainResponse | $.VarRef<__goscript_service_domain_pb.DescribeDomainResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_domain_pb.DescribeDomainResponse | $.VarRef<__goscript_service_domain_pb.DescribeDomainResponse> | null, $.GoError]>
	FailoverDomain(_p0: context.Context | null, _p1: __goscript_service_domain_pb.FailoverDomainRequest | $.VarRef<__goscript_service_domain_pb.FailoverDomainRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_domain_pb.FailoverDomainResponse | $.VarRef<__goscript_service_domain_pb.FailoverDomainResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_domain_pb.FailoverDomainResponse | $.VarRef<__goscript_service_domain_pb.FailoverDomainResponse> | null, $.GoError]>
	ListDomains(_p0: context.Context | null, _p1: __goscript_service_domain_pb.ListDomainsRequest | $.VarRef<__goscript_service_domain_pb.ListDomainsRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_domain_pb.ListDomainsResponse | $.VarRef<__goscript_service_domain_pb.ListDomainsResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_domain_pb.ListDomainsResponse | $.VarRef<__goscript_service_domain_pb.ListDomainsResponse> | null, $.GoError]>
	ListFailoverHistory(_p0: context.Context | null, _p1: __goscript_service_domain_pb.ListFailoverHistoryRequest | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_domain_pb.ListFailoverHistoryResponse | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_domain_pb.ListFailoverHistoryResponse | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryResponse> | null, $.GoError]>
	RegisterDomain(_p0: context.Context | null, _p1: __goscript_service_domain_pb.RegisterDomainRequest | $.VarRef<__goscript_service_domain_pb.RegisterDomainRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_domain_pb.RegisterDomainResponse | $.VarRef<__goscript_service_domain_pb.RegisterDomainResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_domain_pb.RegisterDomainResponse | $.VarRef<__goscript_service_domain_pb.RegisterDomainResponse> | null, $.GoError]>
	UpdateDomain(_p0: context.Context | null, _p1: __goscript_service_domain_pb.UpdateDomainRequest | $.VarRef<__goscript_service_domain_pb.UpdateDomainRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_domain_pb.UpdateDomainResponse | $.VarRef<__goscript_service_domain_pb.UpdateDomainResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_domain_pb.UpdateDomainResponse | $.VarRef<__goscript_service_domain_pb.UpdateDomainResponse> | null, $.GoError]>
}

$.registerInterfaceType(
	"apiv1.DomainAPIYARPCClient",
	null,
	[$.methodSignature("DeleteDomain", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.DeleteDomainResponse"), "error"]), $.methodSignature("DeprecateDomain", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainResponse"), "error"]), $.methodSignature("DescribeDomain", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.DescribeDomainResponse"), "error"]), $.methodSignature("FailoverDomain", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.FailoverDomainResponse"), "error"]), $.methodSignature("ListDomains", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.ListDomainsResponse"), "error"]), $.methodSignature("ListFailoverHistory", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryResponse"), "error"]), $.methodSignature("RegisterDomain", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.RegisterDomainResponse"), "error"]), $.methodSignature("UpdateDomain", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.UpdateDomainResponse"), "error"])]
);

export type DomainAPIYARPCServer = {
	DeleteDomain(_p0: context.Context | null, _p1: __goscript_service_domain_pb.DeleteDomainRequest | $.VarRef<__goscript_service_domain_pb.DeleteDomainRequest> | null): [__goscript_service_domain_pb.DeleteDomainResponse | $.VarRef<__goscript_service_domain_pb.DeleteDomainResponse> | null, $.GoError]
	DeprecateDomain(_p0: context.Context | null, _p1: __goscript_service_domain_pb.DeprecateDomainRequest | $.VarRef<__goscript_service_domain_pb.DeprecateDomainRequest> | null): [__goscript_service_domain_pb.DeprecateDomainResponse | $.VarRef<__goscript_service_domain_pb.DeprecateDomainResponse> | null, $.GoError]
	DescribeDomain(_p0: context.Context | null, _p1: __goscript_service_domain_pb.DescribeDomainRequest | $.VarRef<__goscript_service_domain_pb.DescribeDomainRequest> | null): [__goscript_service_domain_pb.DescribeDomainResponse | $.VarRef<__goscript_service_domain_pb.DescribeDomainResponse> | null, $.GoError]
	FailoverDomain(_p0: context.Context | null, _p1: __goscript_service_domain_pb.FailoverDomainRequest | $.VarRef<__goscript_service_domain_pb.FailoverDomainRequest> | null): [__goscript_service_domain_pb.FailoverDomainResponse | $.VarRef<__goscript_service_domain_pb.FailoverDomainResponse> | null, $.GoError]
	ListDomains(_p0: context.Context | null, _p1: __goscript_service_domain_pb.ListDomainsRequest | $.VarRef<__goscript_service_domain_pb.ListDomainsRequest> | null): [__goscript_service_domain_pb.ListDomainsResponse | $.VarRef<__goscript_service_domain_pb.ListDomainsResponse> | null, $.GoError]
	ListFailoverHistory(_p0: context.Context | null, _p1: __goscript_service_domain_pb.ListFailoverHistoryRequest | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryRequest> | null): [__goscript_service_domain_pb.ListFailoverHistoryResponse | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryResponse> | null, $.GoError]
	RegisterDomain(_p0: context.Context | null, _p1: __goscript_service_domain_pb.RegisterDomainRequest | $.VarRef<__goscript_service_domain_pb.RegisterDomainRequest> | null): [__goscript_service_domain_pb.RegisterDomainResponse | $.VarRef<__goscript_service_domain_pb.RegisterDomainResponse> | null, $.GoError]
	UpdateDomain(_p0: context.Context | null, _p1: __goscript_service_domain_pb.UpdateDomainRequest | $.VarRef<__goscript_service_domain_pb.UpdateDomainRequest> | null): [__goscript_service_domain_pb.UpdateDomainResponse | $.VarRef<__goscript_service_domain_pb.UpdateDomainResponse> | null, $.GoError]
}

$.registerInterfaceType(
	"apiv1.DomainAPIYARPCServer",
	null,
	[$.methodSignature("DeleteDomain", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainRequest")], [/* @__PURE__ */ $.pointerType("apiv1.DeleteDomainResponse"), "error"]), $.methodSignature("DeprecateDomain", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainRequest")], [/* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainResponse"), "error"]), $.methodSignature("DescribeDomain", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest")], [/* @__PURE__ */ $.pointerType("apiv1.DescribeDomainResponse"), "error"]), $.methodSignature("FailoverDomain", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainRequest")], [/* @__PURE__ */ $.pointerType("apiv1.FailoverDomainResponse"), "error"]), $.methodSignature("ListDomains", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsRequest")], [/* @__PURE__ */ $.pointerType("apiv1.ListDomainsResponse"), "error"]), $.methodSignature("ListFailoverHistory", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequest")], [/* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryResponse"), "error"]), $.methodSignature("RegisterDomain", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainRequest")], [/* @__PURE__ */ $.pointerType("apiv1.RegisterDomainResponse"), "error"]), $.methodSignature("UpdateDomain", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainRequest")], [/* @__PURE__ */ $.pointerType("apiv1.UpdateDomainResponse"), "error"])]
);

export class buildDomainAPIYARPCProceduresParams {
	public get Server(): DomainAPIYARPCServer | null {
		return this._fields.Server
	}

	public set Server(value: DomainAPIYARPCServer | null) {
		this._fields.Server = value
	}

	public get AnyResolver(): jsonpb.AnyResolver | null {
		return this._fields.AnyResolver
	}

	public set AnyResolver(value: jsonpb.AnyResolver | null) {
		this._fields.AnyResolver = value
	}

	public _fields: {
		Server: DomainAPIYARPCServer | null
		AnyResolver: jsonpb.AnyResolver | null
	}

	constructor(init?: Partial<{Server?: DomainAPIYARPCServer | null, AnyResolver?: jsonpb.AnyResolver | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Server: init?.Server ?? (null! as DomainAPIYARPCServer | null),
			AnyResolver: init?.AnyResolver ?? (null! as jsonpb.AnyResolver | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): buildDomainAPIYARPCProceduresParams {
		return new buildDomainAPIYARPCProceduresParams(this, true)
	}

	public __goscriptAssign(source: buildDomainAPIYARPCProceduresParams): void {
		const target = this._fields
		const values = source._fields
		target.Server = $.assignFieldValue(target.Server, values.Server, "apiv1.DomainAPIYARPCServer")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.buildDomainAPIYARPCProceduresParams",
		() => new buildDomainAPIYARPCProceduresParams(),
		() => [],
		buildDomainAPIYARPCProceduresParams,
		() => [/* @__PURE__ */ $.structField("Server", "apiv1.DomainAPIYARPCServer", [0], 0, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [1], 16, true)]
	)
}

export class FxDomainAPIYARPCClientParams {
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

	public clone(): FxDomainAPIYARPCClientParams {
		return new FxDomainAPIYARPCClientParams(this, true)
	}

	public __goscriptAssign(source: FxDomainAPIYARPCClientParams): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.In, values.In)
		target.Provider = $.assignFieldValue(target.Provider, values.Provider, "yarpc.ClientConfig")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
		target.Restriction = $.assignFieldValue(target.Restriction, values.Restriction, "restriction.Checker")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxDomainAPIYARPCClientParams",
		() => new FxDomainAPIYARPCClientParams(),
		() => [],
		FxDomainAPIYARPCClientParams,
		() => [/* @__PURE__ */ $.structField("In", "dig.In", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Provider", "yarpc.ClientConfig", [1], 0, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [2], 16, true, { tag: "name:\"yarpcfx\" optional:\"true\"" }), /* @__PURE__ */ $.structField("Restriction", "restriction.Checker", [3], 32, true, { tag: "optional:\"true\"" })]
	)
}

export class FxDomainAPIYARPCClientResult {
	public get Out(): fx.Out {
		return this._fields.Out
	}

	public set Out(value: fx.Out) {
		this._fields.Out = value
	}

	public get Client(): DomainAPIYARPCClient | null {
		return this._fields.Client
	}

	public set Client(value: DomainAPIYARPCClient | null) {
		this._fields.Client = value
	}

	public _fields: {
		Out: fx.Out
		Client: DomainAPIYARPCClient | null
	}

	constructor(init?: Partial<{Out?: fx.Out, Client?: DomainAPIYARPCClient | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Out: init?.Out ? init.Out.clone() : new dig.Out(undefined, true),
			Client: init?.Client ?? (null! as DomainAPIYARPCClient | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FxDomainAPIYARPCClientResult {
		return new FxDomainAPIYARPCClientResult(this, true)
	}

	public __goscriptAssign(source: FxDomainAPIYARPCClientResult): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Out, values.Out)
		target.Client = $.assignFieldValue(target.Client, values.Client, "apiv1.DomainAPIYARPCClient")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxDomainAPIYARPCClientResult",
		() => new FxDomainAPIYARPCClientResult(),
		() => [],
		FxDomainAPIYARPCClientResult,
		() => [/* @__PURE__ */ $.structField("Out", "dig.Out", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Client", "apiv1.DomainAPIYARPCClient", [1], 0, true)]
	)
}

export class FxDomainAPIYARPCProceduresParams {
	public get In(): fx.In {
		return this._fields.In
	}

	public set In(value: fx.In) {
		this._fields.In = value
	}

	public get Server(): DomainAPIYARPCServer | null {
		return this._fields.Server
	}

	public set Server(value: DomainAPIYARPCServer | null) {
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
		Server: DomainAPIYARPCServer | null
		AnyResolver: jsonpb.AnyResolver | null
	}

	constructor(init?: Partial<{In?: fx.In, Server?: DomainAPIYARPCServer | null, AnyResolver?: jsonpb.AnyResolver | null}>, __goscriptValue?: boolean) {
		this._fields = {
			In: init?.In ? init.In.clone() : new dig.In(undefined, true),
			Server: init?.Server ?? (null! as DomainAPIYARPCServer | null),
			AnyResolver: init?.AnyResolver ?? (null! as jsonpb.AnyResolver | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FxDomainAPIYARPCProceduresParams {
		return new FxDomainAPIYARPCProceduresParams(this, true)
	}

	public __goscriptAssign(source: FxDomainAPIYARPCProceduresParams): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.In, values.In)
		target.Server = $.assignFieldValue(target.Server, values.Server, "apiv1.DomainAPIYARPCServer")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxDomainAPIYARPCProceduresParams",
		() => new FxDomainAPIYARPCProceduresParams(),
		() => [],
		FxDomainAPIYARPCProceduresParams,
		() => [/* @__PURE__ */ $.structField("In", "dig.In", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Server", "apiv1.DomainAPIYARPCServer", [1], 0, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [2], 16, true, { tag: "name:\"yarpcfx\" optional:\"true\"" })]
	)
}

export class FxDomainAPIYARPCProceduresResult {
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

	public clone(): FxDomainAPIYARPCProceduresResult {
		return new FxDomainAPIYARPCProceduresResult(this, true)
	}

	public __goscriptAssign(source: FxDomainAPIYARPCProceduresResult): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Out, values.Out)
		target.Procedures = values.Procedures
		$.assignStruct(target.ReflectionMeta, values.ReflectionMeta)
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxDomainAPIYARPCProceduresResult",
		() => new FxDomainAPIYARPCProceduresResult(),
		() => [],
		FxDomainAPIYARPCProceduresResult,
		() => [/* @__PURE__ */ $.structField("Out", "dig.Out", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Procedures", /* @__PURE__ */ $.sliceType("transport.Procedure"), [1], 0, true, { tag: "group:\"yarpcfx\"" }), /* @__PURE__ */ $.structField("ReflectionMeta", "reflection.ServerMeta", [2], 24, true, { tag: "group:\"yarpcfx\"" })]
	)
}

export class _DomainAPIYARPCCaller {
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

	public clone(): _DomainAPIYARPCCaller {
		return new _DomainAPIYARPCCaller(this, true)
	}

	public __goscriptAssign(source: _DomainAPIYARPCCaller): void {
		const target = this._fields
		const values = source._fields
		target.streamClient = $.assignFieldValue(target.streamClient, values.streamClient, "protobuf.StreamClient")
	}

	public async DeleteDomain(ctx: context.Context | null, request: __goscript_service_domain_pb.DeleteDomainRequest | $.VarRef<__goscript_service_domain_pb.DeleteDomainRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_domain_pb.DeleteDomainResponse | $.VarRef<__goscript_service_domain_pb.DeleteDomainResponse> | null, $.GoError]> {
		const c: _DomainAPIYARPCCaller | $.VarRef<_DomainAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_DomainAPIYARPCCaller>(c).streamClient).Call(ctx, "DeleteDomain", $.interfaceValue<proto.Message | null>(request, "*apiv1.DeleteDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainRequest")), newDomainAPIServiceDeleteDomainYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple0: any = $.typeAssertTuple<__goscript_service_domain_pb.DeleteDomainResponse | $.VarRef<__goscript_service_domain_pb.DeleteDomainResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainResponse"))
		let response: __goscript_service_domain_pb.DeleteDomainResponse | $.VarRef<__goscript_service_domain_pb.DeleteDomainResponse> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyDomainAPIServiceDeleteDomainYARPCResponse(), "*apiv1.DeleteDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async DeprecateDomain(ctx: context.Context | null, request: __goscript_service_domain_pb.DeprecateDomainRequest | $.VarRef<__goscript_service_domain_pb.DeprecateDomainRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_domain_pb.DeprecateDomainResponse | $.VarRef<__goscript_service_domain_pb.DeprecateDomainResponse> | null, $.GoError]> {
		const c: _DomainAPIYARPCCaller | $.VarRef<_DomainAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_DomainAPIYARPCCaller>(c).streamClient).Call(ctx, "DeprecateDomain", $.interfaceValue<proto.Message | null>(request, "*apiv1.DeprecateDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainRequest")), newDomainAPIServiceDeprecateDomainYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple1: any = $.typeAssertTuple<__goscript_service_domain_pb.DeprecateDomainResponse | $.VarRef<__goscript_service_domain_pb.DeprecateDomainResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainResponse"))
		let response: __goscript_service_domain_pb.DeprecateDomainResponse | $.VarRef<__goscript_service_domain_pb.DeprecateDomainResponse> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyDomainAPIServiceDeprecateDomainYARPCResponse(), "*apiv1.DeprecateDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async DescribeDomain(ctx: context.Context | null, request: __goscript_service_domain_pb.DescribeDomainRequest | $.VarRef<__goscript_service_domain_pb.DescribeDomainRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_domain_pb.DescribeDomainResponse | $.VarRef<__goscript_service_domain_pb.DescribeDomainResponse> | null, $.GoError]> {
		const c: _DomainAPIYARPCCaller | $.VarRef<_DomainAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_DomainAPIYARPCCaller>(c).streamClient).Call(ctx, "DescribeDomain", $.interfaceValue<proto.Message | null>(request, "*apiv1.DescribeDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest")), newDomainAPIServiceDescribeDomainYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple2: any = $.typeAssertTuple<__goscript_service_domain_pb.DescribeDomainResponse | $.VarRef<__goscript_service_domain_pb.DescribeDomainResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainResponse"))
		let response: __goscript_service_domain_pb.DescribeDomainResponse | $.VarRef<__goscript_service_domain_pb.DescribeDomainResponse> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyDomainAPIServiceDescribeDomainYARPCResponse(), "*apiv1.DescribeDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async FailoverDomain(ctx: context.Context | null, request: __goscript_service_domain_pb.FailoverDomainRequest | $.VarRef<__goscript_service_domain_pb.FailoverDomainRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_domain_pb.FailoverDomainResponse | $.VarRef<__goscript_service_domain_pb.FailoverDomainResponse> | null, $.GoError]> {
		const c: _DomainAPIYARPCCaller | $.VarRef<_DomainAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_DomainAPIYARPCCaller>(c).streamClient).Call(ctx, "FailoverDomain", $.interfaceValue<proto.Message | null>(request, "*apiv1.FailoverDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainRequest")), newDomainAPIServiceFailoverDomainYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple3: any = $.typeAssertTuple<__goscript_service_domain_pb.FailoverDomainResponse | $.VarRef<__goscript_service_domain_pb.FailoverDomainResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainResponse"))
		let response: __goscript_service_domain_pb.FailoverDomainResponse | $.VarRef<__goscript_service_domain_pb.FailoverDomainResponse> | null = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyDomainAPIServiceFailoverDomainYARPCResponse(), "*apiv1.FailoverDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async ListDomains(ctx: context.Context | null, request: __goscript_service_domain_pb.ListDomainsRequest | $.VarRef<__goscript_service_domain_pb.ListDomainsRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_domain_pb.ListDomainsResponse | $.VarRef<__goscript_service_domain_pb.ListDomainsResponse> | null, $.GoError]> {
		const c: _DomainAPIYARPCCaller | $.VarRef<_DomainAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_DomainAPIYARPCCaller>(c).streamClient).Call(ctx, "ListDomains", $.interfaceValue<proto.Message | null>(request, "*apiv1.ListDomainsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsRequest")), newDomainAPIServiceListDomainsYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple4: any = $.typeAssertTuple<__goscript_service_domain_pb.ListDomainsResponse | $.VarRef<__goscript_service_domain_pb.ListDomainsResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.ListDomainsResponse"))
		let response: __goscript_service_domain_pb.ListDomainsResponse | $.VarRef<__goscript_service_domain_pb.ListDomainsResponse> | null = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyDomainAPIServiceListDomainsYARPCResponse(), "*apiv1.ListDomainsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async ListFailoverHistory(ctx: context.Context | null, request: __goscript_service_domain_pb.ListFailoverHistoryRequest | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_domain_pb.ListFailoverHistoryResponse | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryResponse> | null, $.GoError]> {
		const c: _DomainAPIYARPCCaller | $.VarRef<_DomainAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_DomainAPIYARPCCaller>(c).streamClient).Call(ctx, "ListFailoverHistory", $.interfaceValue<proto.Message | null>(request, "*apiv1.ListFailoverHistoryRequest", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequest")), newDomainAPIServiceListFailoverHistoryYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple5: any = $.typeAssertTuple<__goscript_service_domain_pb.ListFailoverHistoryResponse | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryResponse"))
		let response: __goscript_service_domain_pb.ListFailoverHistoryResponse | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryResponse> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyDomainAPIServiceListFailoverHistoryYARPCResponse(), "*apiv1.ListFailoverHistoryResponse", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async RegisterDomain(ctx: context.Context | null, request: __goscript_service_domain_pb.RegisterDomainRequest | $.VarRef<__goscript_service_domain_pb.RegisterDomainRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_domain_pb.RegisterDomainResponse | $.VarRef<__goscript_service_domain_pb.RegisterDomainResponse> | null, $.GoError]> {
		const c: _DomainAPIYARPCCaller | $.VarRef<_DomainAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_DomainAPIYARPCCaller>(c).streamClient).Call(ctx, "RegisterDomain", $.interfaceValue<proto.Message | null>(request, "*apiv1.RegisterDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainRequest")), newDomainAPIServiceRegisterDomainYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple6: any = $.typeAssertTuple<__goscript_service_domain_pb.RegisterDomainResponse | $.VarRef<__goscript_service_domain_pb.RegisterDomainResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainResponse"))
		let response: __goscript_service_domain_pb.RegisterDomainResponse | $.VarRef<__goscript_service_domain_pb.RegisterDomainResponse> | null = __goscriptTuple6[0]
		let ok = __goscriptTuple6[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyDomainAPIServiceRegisterDomainYARPCResponse(), "*apiv1.RegisterDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async UpdateDomain(ctx: context.Context | null, request: __goscript_service_domain_pb.UpdateDomainRequest | $.VarRef<__goscript_service_domain_pb.UpdateDomainRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_domain_pb.UpdateDomainResponse | $.VarRef<__goscript_service_domain_pb.UpdateDomainResponse> | null, $.GoError]> {
		const c: _DomainAPIYARPCCaller | $.VarRef<_DomainAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_DomainAPIYARPCCaller>(c).streamClient).Call(ctx, "UpdateDomain", $.interfaceValue<proto.Message | null>(request, "*apiv1.UpdateDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainRequest")), newDomainAPIServiceUpdateDomainYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple7: any = $.typeAssertTuple<__goscript_service_domain_pb.UpdateDomainResponse | $.VarRef<__goscript_service_domain_pb.UpdateDomainResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainResponse"))
		let response: __goscript_service_domain_pb.UpdateDomainResponse | $.VarRef<__goscript_service_domain_pb.UpdateDomainResponse> | null = __goscriptTuple7[0]
		let ok = __goscriptTuple7[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyDomainAPIServiceUpdateDomainYARPCResponse(), "*apiv1.UpdateDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainResponse")), responseMessage)]
		}
		return [response, err]
	}

	static __typeInfo = $.registerStructType(
		"apiv1._DomainAPIYARPCCaller",
		() => new _DomainAPIYARPCCaller(),
		() => [$.methodSignature("DeleteDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.DeleteDomainResponse"), "error"], true), $.methodSignature("DeprecateDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainResponse"), "error"], true), $.methodSignature("DescribeDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.DescribeDomainResponse"), "error"], true), $.methodSignature("FailoverDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.FailoverDomainResponse"), "error"], true), $.methodSignature("ListDomains", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.ListDomainsResponse"), "error"], true), $.methodSignature("ListFailoverHistory", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryResponse"), "error"], true), $.methodSignature("RegisterDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.RegisterDomainResponse"), "error"], true), $.methodSignature("UpdateDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.UpdateDomainResponse"), "error"], true)],
		_DomainAPIYARPCCaller,
		() => [/* @__PURE__ */ $.structField("streamClient", "protobuf.StreamClient", [0], 0, false, { pkgPath: "github.com/uber/cadence-idl/go/proto/api/v1" })]
	)
}

export class _DomainAPIYARPCHandler {
	public get server(): DomainAPIYARPCServer | null {
		return this._fields.server
	}

	public set server(value: DomainAPIYARPCServer | null) {
		this._fields.server = value
	}

	public _fields: {
		server: DomainAPIYARPCServer | null
	}

	constructor(init?: Partial<{server?: DomainAPIYARPCServer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			server: init?.server ?? (null! as DomainAPIYARPCServer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): _DomainAPIYARPCHandler {
		return new _DomainAPIYARPCHandler(this, true)
	}

	public __goscriptAssign(source: _DomainAPIYARPCHandler): void {
		const target = this._fields
		const values = source._fields
		target.server = $.assignFieldValue(target.server, values.server, "apiv1.DomainAPIYARPCServer")
	}

	public async DeleteDomain(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _DomainAPIYARPCHandler | $.VarRef<_DomainAPIYARPCHandler> | null = this;
		let request: __goscript_service_domain_pb.DeleteDomainRequest | $.VarRef<__goscript_service_domain_pb.DeleteDomainRequest> | null = null! as __goscript_service_domain_pb.DeleteDomainRequest | $.VarRef<__goscript_service_domain_pb.DeleteDomainRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple8: any = $.typeAssertTuple<__goscript_service_domain_pb.DeleteDomainRequest | $.VarRef<__goscript_service_domain_pb.DeleteDomainRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainRequest"))
			request = __goscriptTuple8[0]
			ok = __goscriptTuple8[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyDomainAPIServiceDeleteDomainYARPCRequest(), "*apiv1.DeleteDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainRequest")), requestMessage)]
			}
		}
		let __goscriptTuple9: any = await $.pointerValue<Exclude<DomainAPIYARPCServer, null>>($.pointerValue<_DomainAPIYARPCHandler>(h).server).DeleteDomain(ctx, request)
		let response: __goscript_service_domain_pb.DeleteDomainResponse | $.VarRef<__goscript_service_domain_pb.DeleteDomainResponse> | null = __goscriptTuple9[0]
		let err = __goscriptTuple9[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.DeleteDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainResponse")), err]
	}

	public async DeprecateDomain(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _DomainAPIYARPCHandler | $.VarRef<_DomainAPIYARPCHandler> | null = this;
		let request: __goscript_service_domain_pb.DeprecateDomainRequest | $.VarRef<__goscript_service_domain_pb.DeprecateDomainRequest> | null = null! as __goscript_service_domain_pb.DeprecateDomainRequest | $.VarRef<__goscript_service_domain_pb.DeprecateDomainRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple10: any = $.typeAssertTuple<__goscript_service_domain_pb.DeprecateDomainRequest | $.VarRef<__goscript_service_domain_pb.DeprecateDomainRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainRequest"))
			request = __goscriptTuple10[0]
			ok = __goscriptTuple10[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyDomainAPIServiceDeprecateDomainYARPCRequest(), "*apiv1.DeprecateDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainRequest")), requestMessage)]
			}
		}
		let __goscriptTuple11: any = await $.pointerValue<Exclude<DomainAPIYARPCServer, null>>($.pointerValue<_DomainAPIYARPCHandler>(h).server).DeprecateDomain(ctx, request)
		let response: __goscript_service_domain_pb.DeprecateDomainResponse | $.VarRef<__goscript_service_domain_pb.DeprecateDomainResponse> | null = __goscriptTuple11[0]
		let err = __goscriptTuple11[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.DeprecateDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainResponse")), err]
	}

	public async DescribeDomain(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _DomainAPIYARPCHandler | $.VarRef<_DomainAPIYARPCHandler> | null = this;
		let request: __goscript_service_domain_pb.DescribeDomainRequest | $.VarRef<__goscript_service_domain_pb.DescribeDomainRequest> | null = null! as __goscript_service_domain_pb.DescribeDomainRequest | $.VarRef<__goscript_service_domain_pb.DescribeDomainRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple12: any = $.typeAssertTuple<__goscript_service_domain_pb.DescribeDomainRequest | $.VarRef<__goscript_service_domain_pb.DescribeDomainRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest"))
			request = __goscriptTuple12[0]
			ok = __goscriptTuple12[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyDomainAPIServiceDescribeDomainYARPCRequest(), "*apiv1.DescribeDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest")), requestMessage)]
			}
		}
		let __goscriptTuple13: any = await $.pointerValue<Exclude<DomainAPIYARPCServer, null>>($.pointerValue<_DomainAPIYARPCHandler>(h).server).DescribeDomain(ctx, request)
		let response: __goscript_service_domain_pb.DescribeDomainResponse | $.VarRef<__goscript_service_domain_pb.DescribeDomainResponse> | null = __goscriptTuple13[0]
		let err = __goscriptTuple13[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.DescribeDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainResponse")), err]
	}

	public async FailoverDomain(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _DomainAPIYARPCHandler | $.VarRef<_DomainAPIYARPCHandler> | null = this;
		let request: __goscript_service_domain_pb.FailoverDomainRequest | $.VarRef<__goscript_service_domain_pb.FailoverDomainRequest> | null = null! as __goscript_service_domain_pb.FailoverDomainRequest | $.VarRef<__goscript_service_domain_pb.FailoverDomainRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple14: any = $.typeAssertTuple<__goscript_service_domain_pb.FailoverDomainRequest | $.VarRef<__goscript_service_domain_pb.FailoverDomainRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainRequest"))
			request = __goscriptTuple14[0]
			ok = __goscriptTuple14[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyDomainAPIServiceFailoverDomainYARPCRequest(), "*apiv1.FailoverDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainRequest")), requestMessage)]
			}
		}
		let __goscriptTuple15: any = await $.pointerValue<Exclude<DomainAPIYARPCServer, null>>($.pointerValue<_DomainAPIYARPCHandler>(h).server).FailoverDomain(ctx, request)
		let response: __goscript_service_domain_pb.FailoverDomainResponse | $.VarRef<__goscript_service_domain_pb.FailoverDomainResponse> | null = __goscriptTuple15[0]
		let err = __goscriptTuple15[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.FailoverDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainResponse")), err]
	}

	public async ListDomains(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _DomainAPIYARPCHandler | $.VarRef<_DomainAPIYARPCHandler> | null = this;
		let request: __goscript_service_domain_pb.ListDomainsRequest | $.VarRef<__goscript_service_domain_pb.ListDomainsRequest> | null = null! as __goscript_service_domain_pb.ListDomainsRequest | $.VarRef<__goscript_service_domain_pb.ListDomainsRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple16: any = $.typeAssertTuple<__goscript_service_domain_pb.ListDomainsRequest | $.VarRef<__goscript_service_domain_pb.ListDomainsRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.ListDomainsRequest"))
			request = __goscriptTuple16[0]
			ok = __goscriptTuple16[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyDomainAPIServiceListDomainsYARPCRequest(), "*apiv1.ListDomainsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsRequest")), requestMessage)]
			}
		}
		let __goscriptTuple17: any = await $.pointerValue<Exclude<DomainAPIYARPCServer, null>>($.pointerValue<_DomainAPIYARPCHandler>(h).server).ListDomains(ctx, request)
		let response: __goscript_service_domain_pb.ListDomainsResponse | $.VarRef<__goscript_service_domain_pb.ListDomainsResponse> | null = __goscriptTuple17[0]
		let err = __goscriptTuple17[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.ListDomainsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsResponse")), err]
	}

	public async ListFailoverHistory(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _DomainAPIYARPCHandler | $.VarRef<_DomainAPIYARPCHandler> | null = this;
		let request: __goscript_service_domain_pb.ListFailoverHistoryRequest | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryRequest> | null = null! as __goscript_service_domain_pb.ListFailoverHistoryRequest | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple18: any = $.typeAssertTuple<__goscript_service_domain_pb.ListFailoverHistoryRequest | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequest"))
			request = __goscriptTuple18[0]
			ok = __goscriptTuple18[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyDomainAPIServiceListFailoverHistoryYARPCRequest(), "*apiv1.ListFailoverHistoryRequest", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequest")), requestMessage)]
			}
		}
		let __goscriptTuple19: any = await $.pointerValue<Exclude<DomainAPIYARPCServer, null>>($.pointerValue<_DomainAPIYARPCHandler>(h).server).ListFailoverHistory(ctx, request)
		let response: __goscript_service_domain_pb.ListFailoverHistoryResponse | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryResponse> | null = __goscriptTuple19[0]
		let err = __goscriptTuple19[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.ListFailoverHistoryResponse", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryResponse")), err]
	}

	public async RegisterDomain(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _DomainAPIYARPCHandler | $.VarRef<_DomainAPIYARPCHandler> | null = this;
		let request: __goscript_service_domain_pb.RegisterDomainRequest | $.VarRef<__goscript_service_domain_pb.RegisterDomainRequest> | null = null! as __goscript_service_domain_pb.RegisterDomainRequest | $.VarRef<__goscript_service_domain_pb.RegisterDomainRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple20: any = $.typeAssertTuple<__goscript_service_domain_pb.RegisterDomainRequest | $.VarRef<__goscript_service_domain_pb.RegisterDomainRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainRequest"))
			request = __goscriptTuple20[0]
			ok = __goscriptTuple20[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyDomainAPIServiceRegisterDomainYARPCRequest(), "*apiv1.RegisterDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainRequest")), requestMessage)]
			}
		}
		let __goscriptTuple21: any = await $.pointerValue<Exclude<DomainAPIYARPCServer, null>>($.pointerValue<_DomainAPIYARPCHandler>(h).server).RegisterDomain(ctx, request)
		let response: __goscript_service_domain_pb.RegisterDomainResponse | $.VarRef<__goscript_service_domain_pb.RegisterDomainResponse> | null = __goscriptTuple21[0]
		let err = __goscriptTuple21[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.RegisterDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainResponse")), err]
	}

	public async UpdateDomain(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _DomainAPIYARPCHandler | $.VarRef<_DomainAPIYARPCHandler> | null = this;
		let request: __goscript_service_domain_pb.UpdateDomainRequest | $.VarRef<__goscript_service_domain_pb.UpdateDomainRequest> | null = null! as __goscript_service_domain_pb.UpdateDomainRequest | $.VarRef<__goscript_service_domain_pb.UpdateDomainRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple22: any = $.typeAssertTuple<__goscript_service_domain_pb.UpdateDomainRequest | $.VarRef<__goscript_service_domain_pb.UpdateDomainRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainRequest"))
			request = __goscriptTuple22[0]
			ok = __goscriptTuple22[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyDomainAPIServiceUpdateDomainYARPCRequest(), "*apiv1.UpdateDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainRequest")), requestMessage)]
			}
		}
		let __goscriptTuple23: any = await $.pointerValue<Exclude<DomainAPIYARPCServer, null>>($.pointerValue<_DomainAPIYARPCHandler>(h).server).UpdateDomain(ctx, request)
		let response: __goscript_service_domain_pb.UpdateDomainResponse | $.VarRef<__goscript_service_domain_pb.UpdateDomainResponse> | null = __goscriptTuple23[0]
		let err = __goscriptTuple23[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.UpdateDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainResponse")), err]
	}

	static __typeInfo = $.registerStructType(
		"apiv1._DomainAPIYARPCHandler",
		() => new _DomainAPIYARPCHandler(),
		() => [$.methodSignature("DeleteDomain", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("DeprecateDomain", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("DescribeDomain", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("FailoverDomain", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("ListDomains", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("ListFailoverHistory", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("RegisterDomain", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("UpdateDomain", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true)],
		_DomainAPIYARPCHandler,
		() => [/* @__PURE__ */ $.structField("server", "apiv1.DomainAPIYARPCServer", [0], 0, false, { pkgPath: "github.com/uber/cadence-idl/go/proto/api/v1" })]
	)
}

export async function newDomainAPIYARPCClient(clientConfig: transport.ClientConfig | null, anyResolver: jsonpb.AnyResolver | null, options: $.Slice<protobuf.ClientOption | null>): globalThis.Promise<DomainAPIYARPCClient | null> {
	return $.interfaceValue<DomainAPIYARPCClient | null>((await (async () => { const __goscriptLiteralField0 = await protobuf.NewStreamClient(new protobuf.ClientParams({ServiceName: "uber.cadence.api.v1.DomainAPI", ClientConfig: clientConfig, AnyResolver: anyResolver, Options: options}, true)); return new _DomainAPIYARPCCaller({streamClient: __goscriptLiteralField0}) })()), "*apiv1._DomainAPIYARPCCaller", /* @__PURE__ */ $.pointerType("apiv1._DomainAPIYARPCCaller"))
}

export async function NewDomainAPIYARPCClient(clientConfig: transport.ClientConfig | null, options: $.Slice<protobuf.ClientOption | null>): globalThis.Promise<DomainAPIYARPCClient | null> {
	return newDomainAPIYARPCClient(clientConfig, null, options)
}

export function buildDomainAPIYARPCProcedures(params: buildDomainAPIYARPCProceduresParams): $.Slice<transport.Procedure> {
	let handler: _DomainAPIYARPCHandler | $.VarRef<_DomainAPIYARPCHandler> | null = new _DomainAPIYARPCHandler({server: params.Server})
	return protobuf.BuildProcedures(new protobuf.BuildProceduresParams({ServiceName: "uber.cadence.api.v1.DomainAPI", UnaryHandlerParams: $.arrayToSlice<protobuf.BuildProceduresUnaryHandlerParams>([(() => { const __goscriptLiteralField1 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.RegisterDomain(ctx, requestMessage))($.pointerValue<_DomainAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_DomainAPIYARPCHandler).RegisterDomain-fm"), NewRequest: newDomainAPIServiceRegisterDomainYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "RegisterDomain", Handler: __goscriptLiteralField1}, true) })(), (() => { const __goscriptLiteralField2 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.DescribeDomain(ctx, requestMessage))($.pointerValue<_DomainAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_DomainAPIYARPCHandler).DescribeDomain-fm"), NewRequest: newDomainAPIServiceDescribeDomainYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "DescribeDomain", Handler: __goscriptLiteralField2}, true) })(), (() => { const __goscriptLiteralField3 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.ListDomains(ctx, requestMessage))($.pointerValue<_DomainAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_DomainAPIYARPCHandler).ListDomains-fm"), NewRequest: newDomainAPIServiceListDomainsYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "ListDomains", Handler: __goscriptLiteralField3}, true) })(), (() => { const __goscriptLiteralField4 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.UpdateDomain(ctx, requestMessage))($.pointerValue<_DomainAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_DomainAPIYARPCHandler).UpdateDomain-fm"), NewRequest: newDomainAPIServiceUpdateDomainYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "UpdateDomain", Handler: __goscriptLiteralField4}, true) })(), (() => { const __goscriptLiteralField5 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.FailoverDomain(ctx, requestMessage))($.pointerValue<_DomainAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_DomainAPIYARPCHandler).FailoverDomain-fm"), NewRequest: newDomainAPIServiceFailoverDomainYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "FailoverDomain", Handler: __goscriptLiteralField5}, true) })(), (() => { const __goscriptLiteralField6 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.DeprecateDomain(ctx, requestMessage))($.pointerValue<_DomainAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_DomainAPIYARPCHandler).DeprecateDomain-fm"), NewRequest: newDomainAPIServiceDeprecateDomainYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "DeprecateDomain", Handler: __goscriptLiteralField6}, true) })(), (() => { const __goscriptLiteralField7 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.DeleteDomain(ctx, requestMessage))($.pointerValue<_DomainAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_DomainAPIYARPCHandler).DeleteDomain-fm"), NewRequest: newDomainAPIServiceDeleteDomainYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "DeleteDomain", Handler: __goscriptLiteralField7}, true) })(), (() => { const __goscriptLiteralField8 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.ListFailoverHistory(ctx, requestMessage))($.pointerValue<_DomainAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_DomainAPIYARPCHandler).ListFailoverHistory-fm"), NewRequest: newDomainAPIServiceListFailoverHistoryYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "ListFailoverHistory", Handler: __goscriptLiteralField8}, true) })()]), OnewayHandlerParams: $.arrayToSlice<protobuf.BuildProceduresOnewayHandlerParams>([]), StreamHandlerParams: $.arrayToSlice<protobuf.BuildProceduresStreamHandlerParams>([])}, true))
}

export function BuildDomainAPIYARPCProcedures(server: DomainAPIYARPCServer | null): $.Slice<transport.Procedure> {
	return buildDomainAPIYARPCProcedures(new buildDomainAPIYARPCProceduresParams({Server: server}, true))
}

export function NewFxDomainAPIYARPCClient(name: string, options: $.Slice<protobuf.ClientOption | null>): any {
	return $.interfaceValue($.functionValue(async (params: FxDomainAPIYARPCClientParams): globalThis.Promise<FxDomainAPIYARPCClientResult> => {
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

		return (await (async () => { const __goscriptLiteralField9 = await newDomainAPIYARPCClient(cc, params.AnyResolver, options); return new FxDomainAPIYARPCClientResult({Client: __goscriptLiteralField9}, true) })())
	}, ({ kind: $.TypeKind.Function, params: ["apiv1.FxDomainAPIYARPCClientParams"], results: ["apiv1.FxDomainAPIYARPCClientResult"] } as $.FunctionTypeInfo)), "func(params apiv1.FxDomainAPIYARPCClientParams) apiv1.FxDomainAPIYARPCClientResult", ({ kind: $.TypeKind.Function, params: ["apiv1.FxDomainAPIYARPCClientParams"], results: ["apiv1.FxDomainAPIYARPCClientResult"] } as $.FunctionTypeInfo))
}

export function NewFxDomainAPIYARPCProcedures(): any {
	return $.interfaceValue($.functionValue((params: FxDomainAPIYARPCProceduresParams): FxDomainAPIYARPCProceduresResult => {
		return (() => { const __goscriptLiteralField10 = buildDomainAPIYARPCProcedures(new buildDomainAPIYARPCProceduresParams({Server: params.Server, AnyResolver: params.AnyResolver}, true)); return new FxDomainAPIYARPCProceduresResult({Procedures: __goscriptLiteralField10, ReflectionMeta: __goscript_get_DomainAPIReflectionMeta()}, true) })()
	}, ({ kind: $.TypeKind.Function, params: ["apiv1.FxDomainAPIYARPCProceduresParams"], results: ["apiv1.FxDomainAPIYARPCProceduresResult"] } as $.FunctionTypeInfo)), "func(params apiv1.FxDomainAPIYARPCProceduresParams) apiv1.FxDomainAPIYARPCProceduresResult", ({ kind: $.TypeKind.Function, params: ["apiv1.FxDomainAPIYARPCProceduresParams"], results: ["apiv1.FxDomainAPIYARPCProceduresResult"] } as $.FunctionTypeInfo))
}

export var DomainAPIReflectionMeta: reflection.ServerMeta

export function __goscript_init_DomainAPIReflectionMeta(): void {
	if (((DomainAPIReflectionMeta) as any) === undefined) {
		DomainAPIReflectionMeta = new reflection.ServerMeta({ServiceName: "uber.cadence.api.v1.DomainAPI", FileDescriptors: yarpcFileDescriptorClosure2e37d15268893114}, true)
	}
}

export function __goscript_get_DomainAPIReflectionMeta(): reflection.ServerMeta {
	if (((DomainAPIReflectionMeta) as any) === undefined) {
		__goscript_init_DomainAPIReflectionMeta()
	}
	return DomainAPIReflectionMeta
}

export function __goscript_set_DomainAPIReflectionMeta(__goscriptValue: reflection.ServerMeta): void {
	$.assignStruct(DomainAPIReflectionMeta, __goscriptValue)
}

export function newDomainAPIServiceRegisterDomainYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_domain_pb.RegisterDomainRequest(), "*apiv1.RegisterDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainRequest"))
}

export function newDomainAPIServiceRegisterDomainYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_domain_pb.RegisterDomainResponse(), "*apiv1.RegisterDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainResponse"))
}

export function newDomainAPIServiceDescribeDomainYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_domain_pb.DescribeDomainRequest(), "*apiv1.DescribeDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest"))
}

export function newDomainAPIServiceDescribeDomainYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_domain_pb.DescribeDomainResponse(), "*apiv1.DescribeDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainResponse"))
}

export function newDomainAPIServiceListDomainsYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_domain_pb.ListDomainsRequest(), "*apiv1.ListDomainsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsRequest"))
}

export function newDomainAPIServiceListDomainsYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_domain_pb.ListDomainsResponse(), "*apiv1.ListDomainsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsResponse"))
}

export function newDomainAPIServiceUpdateDomainYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_domain_pb.UpdateDomainRequest(), "*apiv1.UpdateDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainRequest"))
}

export function newDomainAPIServiceUpdateDomainYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_domain_pb.UpdateDomainResponse(), "*apiv1.UpdateDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainResponse"))
}

export function newDomainAPIServiceFailoverDomainYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_domain_pb.FailoverDomainRequest(), "*apiv1.FailoverDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainRequest"))
}

export function newDomainAPIServiceFailoverDomainYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_domain_pb.FailoverDomainResponse(), "*apiv1.FailoverDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainResponse"))
}

export function newDomainAPIServiceDeprecateDomainYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_domain_pb.DeprecateDomainRequest(), "*apiv1.DeprecateDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainRequest"))
}

export function newDomainAPIServiceDeprecateDomainYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_domain_pb.DeprecateDomainResponse(), "*apiv1.DeprecateDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainResponse"))
}

export function newDomainAPIServiceDeleteDomainYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_domain_pb.DeleteDomainRequest(), "*apiv1.DeleteDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainRequest"))
}

export function newDomainAPIServiceDeleteDomainYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_domain_pb.DeleteDomainResponse(), "*apiv1.DeleteDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainResponse"))
}

export function newDomainAPIServiceListFailoverHistoryYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_domain_pb.ListFailoverHistoryRequest(), "*apiv1.ListFailoverHistoryRequest", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequest"))
}

export function newDomainAPIServiceListFailoverHistoryYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_domain_pb.ListFailoverHistoryResponse(), "*apiv1.ListFailoverHistoryResponse", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryResponse"))
}

export var emptyDomainAPIServiceRegisterDomainYARPCRequest: __goscript_service_domain_pb.RegisterDomainRequest | $.VarRef<__goscript_service_domain_pb.RegisterDomainRequest> | null

export function __goscript_init_emptyDomainAPIServiceRegisterDomainYARPCRequest(): void {
	if (((emptyDomainAPIServiceRegisterDomainYARPCRequest) as any) === undefined) {
		emptyDomainAPIServiceRegisterDomainYARPCRequest = new __goscript_service_domain_pb.RegisterDomainRequest()
	}
}

export function __goscript_get_emptyDomainAPIServiceRegisterDomainYARPCRequest(): __goscript_service_domain_pb.RegisterDomainRequest | $.VarRef<__goscript_service_domain_pb.RegisterDomainRequest> | null {
	if (((emptyDomainAPIServiceRegisterDomainYARPCRequest) as any) === undefined) {
		__goscript_init_emptyDomainAPIServiceRegisterDomainYARPCRequest()
	}
	return emptyDomainAPIServiceRegisterDomainYARPCRequest
}

export function __goscript_set_emptyDomainAPIServiceRegisterDomainYARPCRequest(__goscriptValue: __goscript_service_domain_pb.RegisterDomainRequest | $.VarRef<__goscript_service_domain_pb.RegisterDomainRequest> | null): void {
	emptyDomainAPIServiceRegisterDomainYARPCRequest = __goscriptValue
}

export var emptyDomainAPIServiceRegisterDomainYARPCResponse: __goscript_service_domain_pb.RegisterDomainResponse | $.VarRef<__goscript_service_domain_pb.RegisterDomainResponse> | null

export function __goscript_init_emptyDomainAPIServiceRegisterDomainYARPCResponse(): void {
	if (((emptyDomainAPIServiceRegisterDomainYARPCResponse) as any) === undefined) {
		emptyDomainAPIServiceRegisterDomainYARPCResponse = new __goscript_service_domain_pb.RegisterDomainResponse()
	}
}

export function __goscript_get_emptyDomainAPIServiceRegisterDomainYARPCResponse(): __goscript_service_domain_pb.RegisterDomainResponse | $.VarRef<__goscript_service_domain_pb.RegisterDomainResponse> | null {
	if (((emptyDomainAPIServiceRegisterDomainYARPCResponse) as any) === undefined) {
		__goscript_init_emptyDomainAPIServiceRegisterDomainYARPCResponse()
	}
	return emptyDomainAPIServiceRegisterDomainYARPCResponse
}

export function __goscript_set_emptyDomainAPIServiceRegisterDomainYARPCResponse(__goscriptValue: __goscript_service_domain_pb.RegisterDomainResponse | $.VarRef<__goscript_service_domain_pb.RegisterDomainResponse> | null): void {
	emptyDomainAPIServiceRegisterDomainYARPCResponse = __goscriptValue
}

export var emptyDomainAPIServiceDescribeDomainYARPCRequest: __goscript_service_domain_pb.DescribeDomainRequest | $.VarRef<__goscript_service_domain_pb.DescribeDomainRequest> | null

export function __goscript_init_emptyDomainAPIServiceDescribeDomainYARPCRequest(): void {
	if (((emptyDomainAPIServiceDescribeDomainYARPCRequest) as any) === undefined) {
		emptyDomainAPIServiceDescribeDomainYARPCRequest = new __goscript_service_domain_pb.DescribeDomainRequest()
	}
}

export function __goscript_get_emptyDomainAPIServiceDescribeDomainYARPCRequest(): __goscript_service_domain_pb.DescribeDomainRequest | $.VarRef<__goscript_service_domain_pb.DescribeDomainRequest> | null {
	if (((emptyDomainAPIServiceDescribeDomainYARPCRequest) as any) === undefined) {
		__goscript_init_emptyDomainAPIServiceDescribeDomainYARPCRequest()
	}
	return emptyDomainAPIServiceDescribeDomainYARPCRequest
}

export function __goscript_set_emptyDomainAPIServiceDescribeDomainYARPCRequest(__goscriptValue: __goscript_service_domain_pb.DescribeDomainRequest | $.VarRef<__goscript_service_domain_pb.DescribeDomainRequest> | null): void {
	emptyDomainAPIServiceDescribeDomainYARPCRequest = __goscriptValue
}

export var emptyDomainAPIServiceDescribeDomainYARPCResponse: __goscript_service_domain_pb.DescribeDomainResponse | $.VarRef<__goscript_service_domain_pb.DescribeDomainResponse> | null

export function __goscript_init_emptyDomainAPIServiceDescribeDomainYARPCResponse(): void {
	if (((emptyDomainAPIServiceDescribeDomainYARPCResponse) as any) === undefined) {
		emptyDomainAPIServiceDescribeDomainYARPCResponse = new __goscript_service_domain_pb.DescribeDomainResponse()
	}
}

export function __goscript_get_emptyDomainAPIServiceDescribeDomainYARPCResponse(): __goscript_service_domain_pb.DescribeDomainResponse | $.VarRef<__goscript_service_domain_pb.DescribeDomainResponse> | null {
	if (((emptyDomainAPIServiceDescribeDomainYARPCResponse) as any) === undefined) {
		__goscript_init_emptyDomainAPIServiceDescribeDomainYARPCResponse()
	}
	return emptyDomainAPIServiceDescribeDomainYARPCResponse
}

export function __goscript_set_emptyDomainAPIServiceDescribeDomainYARPCResponse(__goscriptValue: __goscript_service_domain_pb.DescribeDomainResponse | $.VarRef<__goscript_service_domain_pb.DescribeDomainResponse> | null): void {
	emptyDomainAPIServiceDescribeDomainYARPCResponse = __goscriptValue
}

export var emptyDomainAPIServiceListDomainsYARPCRequest: __goscript_service_domain_pb.ListDomainsRequest | $.VarRef<__goscript_service_domain_pb.ListDomainsRequest> | null

export function __goscript_init_emptyDomainAPIServiceListDomainsYARPCRequest(): void {
	if (((emptyDomainAPIServiceListDomainsYARPCRequest) as any) === undefined) {
		emptyDomainAPIServiceListDomainsYARPCRequest = new __goscript_service_domain_pb.ListDomainsRequest()
	}
}

export function __goscript_get_emptyDomainAPIServiceListDomainsYARPCRequest(): __goscript_service_domain_pb.ListDomainsRequest | $.VarRef<__goscript_service_domain_pb.ListDomainsRequest> | null {
	if (((emptyDomainAPIServiceListDomainsYARPCRequest) as any) === undefined) {
		__goscript_init_emptyDomainAPIServiceListDomainsYARPCRequest()
	}
	return emptyDomainAPIServiceListDomainsYARPCRequest
}

export function __goscript_set_emptyDomainAPIServiceListDomainsYARPCRequest(__goscriptValue: __goscript_service_domain_pb.ListDomainsRequest | $.VarRef<__goscript_service_domain_pb.ListDomainsRequest> | null): void {
	emptyDomainAPIServiceListDomainsYARPCRequest = __goscriptValue
}

export var emptyDomainAPIServiceListDomainsYARPCResponse: __goscript_service_domain_pb.ListDomainsResponse | $.VarRef<__goscript_service_domain_pb.ListDomainsResponse> | null

export function __goscript_init_emptyDomainAPIServiceListDomainsYARPCResponse(): void {
	if (((emptyDomainAPIServiceListDomainsYARPCResponse) as any) === undefined) {
		emptyDomainAPIServiceListDomainsYARPCResponse = new __goscript_service_domain_pb.ListDomainsResponse()
	}
}

export function __goscript_get_emptyDomainAPIServiceListDomainsYARPCResponse(): __goscript_service_domain_pb.ListDomainsResponse | $.VarRef<__goscript_service_domain_pb.ListDomainsResponse> | null {
	if (((emptyDomainAPIServiceListDomainsYARPCResponse) as any) === undefined) {
		__goscript_init_emptyDomainAPIServiceListDomainsYARPCResponse()
	}
	return emptyDomainAPIServiceListDomainsYARPCResponse
}

export function __goscript_set_emptyDomainAPIServiceListDomainsYARPCResponse(__goscriptValue: __goscript_service_domain_pb.ListDomainsResponse | $.VarRef<__goscript_service_domain_pb.ListDomainsResponse> | null): void {
	emptyDomainAPIServiceListDomainsYARPCResponse = __goscriptValue
}

export var emptyDomainAPIServiceUpdateDomainYARPCRequest: __goscript_service_domain_pb.UpdateDomainRequest | $.VarRef<__goscript_service_domain_pb.UpdateDomainRequest> | null

export function __goscript_init_emptyDomainAPIServiceUpdateDomainYARPCRequest(): void {
	if (((emptyDomainAPIServiceUpdateDomainYARPCRequest) as any) === undefined) {
		emptyDomainAPIServiceUpdateDomainYARPCRequest = new __goscript_service_domain_pb.UpdateDomainRequest()
	}
}

export function __goscript_get_emptyDomainAPIServiceUpdateDomainYARPCRequest(): __goscript_service_domain_pb.UpdateDomainRequest | $.VarRef<__goscript_service_domain_pb.UpdateDomainRequest> | null {
	if (((emptyDomainAPIServiceUpdateDomainYARPCRequest) as any) === undefined) {
		__goscript_init_emptyDomainAPIServiceUpdateDomainYARPCRequest()
	}
	return emptyDomainAPIServiceUpdateDomainYARPCRequest
}

export function __goscript_set_emptyDomainAPIServiceUpdateDomainYARPCRequest(__goscriptValue: __goscript_service_domain_pb.UpdateDomainRequest | $.VarRef<__goscript_service_domain_pb.UpdateDomainRequest> | null): void {
	emptyDomainAPIServiceUpdateDomainYARPCRequest = __goscriptValue
}

export var emptyDomainAPIServiceUpdateDomainYARPCResponse: __goscript_service_domain_pb.UpdateDomainResponse | $.VarRef<__goscript_service_domain_pb.UpdateDomainResponse> | null

export function __goscript_init_emptyDomainAPIServiceUpdateDomainYARPCResponse(): void {
	if (((emptyDomainAPIServiceUpdateDomainYARPCResponse) as any) === undefined) {
		emptyDomainAPIServiceUpdateDomainYARPCResponse = new __goscript_service_domain_pb.UpdateDomainResponse()
	}
}

export function __goscript_get_emptyDomainAPIServiceUpdateDomainYARPCResponse(): __goscript_service_domain_pb.UpdateDomainResponse | $.VarRef<__goscript_service_domain_pb.UpdateDomainResponse> | null {
	if (((emptyDomainAPIServiceUpdateDomainYARPCResponse) as any) === undefined) {
		__goscript_init_emptyDomainAPIServiceUpdateDomainYARPCResponse()
	}
	return emptyDomainAPIServiceUpdateDomainYARPCResponse
}

export function __goscript_set_emptyDomainAPIServiceUpdateDomainYARPCResponse(__goscriptValue: __goscript_service_domain_pb.UpdateDomainResponse | $.VarRef<__goscript_service_domain_pb.UpdateDomainResponse> | null): void {
	emptyDomainAPIServiceUpdateDomainYARPCResponse = __goscriptValue
}

export var emptyDomainAPIServiceFailoverDomainYARPCRequest: __goscript_service_domain_pb.FailoverDomainRequest | $.VarRef<__goscript_service_domain_pb.FailoverDomainRequest> | null

export function __goscript_init_emptyDomainAPIServiceFailoverDomainYARPCRequest(): void {
	if (((emptyDomainAPIServiceFailoverDomainYARPCRequest) as any) === undefined) {
		emptyDomainAPIServiceFailoverDomainYARPCRequest = new __goscript_service_domain_pb.FailoverDomainRequest()
	}
}

export function __goscript_get_emptyDomainAPIServiceFailoverDomainYARPCRequest(): __goscript_service_domain_pb.FailoverDomainRequest | $.VarRef<__goscript_service_domain_pb.FailoverDomainRequest> | null {
	if (((emptyDomainAPIServiceFailoverDomainYARPCRequest) as any) === undefined) {
		__goscript_init_emptyDomainAPIServiceFailoverDomainYARPCRequest()
	}
	return emptyDomainAPIServiceFailoverDomainYARPCRequest
}

export function __goscript_set_emptyDomainAPIServiceFailoverDomainYARPCRequest(__goscriptValue: __goscript_service_domain_pb.FailoverDomainRequest | $.VarRef<__goscript_service_domain_pb.FailoverDomainRequest> | null): void {
	emptyDomainAPIServiceFailoverDomainYARPCRequest = __goscriptValue
}

export var emptyDomainAPIServiceFailoverDomainYARPCResponse: __goscript_service_domain_pb.FailoverDomainResponse | $.VarRef<__goscript_service_domain_pb.FailoverDomainResponse> | null

export function __goscript_init_emptyDomainAPIServiceFailoverDomainYARPCResponse(): void {
	if (((emptyDomainAPIServiceFailoverDomainYARPCResponse) as any) === undefined) {
		emptyDomainAPIServiceFailoverDomainYARPCResponse = new __goscript_service_domain_pb.FailoverDomainResponse()
	}
}

export function __goscript_get_emptyDomainAPIServiceFailoverDomainYARPCResponse(): __goscript_service_domain_pb.FailoverDomainResponse | $.VarRef<__goscript_service_domain_pb.FailoverDomainResponse> | null {
	if (((emptyDomainAPIServiceFailoverDomainYARPCResponse) as any) === undefined) {
		__goscript_init_emptyDomainAPIServiceFailoverDomainYARPCResponse()
	}
	return emptyDomainAPIServiceFailoverDomainYARPCResponse
}

export function __goscript_set_emptyDomainAPIServiceFailoverDomainYARPCResponse(__goscriptValue: __goscript_service_domain_pb.FailoverDomainResponse | $.VarRef<__goscript_service_domain_pb.FailoverDomainResponse> | null): void {
	emptyDomainAPIServiceFailoverDomainYARPCResponse = __goscriptValue
}

export var emptyDomainAPIServiceDeprecateDomainYARPCRequest: __goscript_service_domain_pb.DeprecateDomainRequest | $.VarRef<__goscript_service_domain_pb.DeprecateDomainRequest> | null

export function __goscript_init_emptyDomainAPIServiceDeprecateDomainYARPCRequest(): void {
	if (((emptyDomainAPIServiceDeprecateDomainYARPCRequest) as any) === undefined) {
		emptyDomainAPIServiceDeprecateDomainYARPCRequest = new __goscript_service_domain_pb.DeprecateDomainRequest()
	}
}

export function __goscript_get_emptyDomainAPIServiceDeprecateDomainYARPCRequest(): __goscript_service_domain_pb.DeprecateDomainRequest | $.VarRef<__goscript_service_domain_pb.DeprecateDomainRequest> | null {
	if (((emptyDomainAPIServiceDeprecateDomainYARPCRequest) as any) === undefined) {
		__goscript_init_emptyDomainAPIServiceDeprecateDomainYARPCRequest()
	}
	return emptyDomainAPIServiceDeprecateDomainYARPCRequest
}

export function __goscript_set_emptyDomainAPIServiceDeprecateDomainYARPCRequest(__goscriptValue: __goscript_service_domain_pb.DeprecateDomainRequest | $.VarRef<__goscript_service_domain_pb.DeprecateDomainRequest> | null): void {
	emptyDomainAPIServiceDeprecateDomainYARPCRequest = __goscriptValue
}

export var emptyDomainAPIServiceDeprecateDomainYARPCResponse: __goscript_service_domain_pb.DeprecateDomainResponse | $.VarRef<__goscript_service_domain_pb.DeprecateDomainResponse> | null

export function __goscript_init_emptyDomainAPIServiceDeprecateDomainYARPCResponse(): void {
	if (((emptyDomainAPIServiceDeprecateDomainYARPCResponse) as any) === undefined) {
		emptyDomainAPIServiceDeprecateDomainYARPCResponse = new __goscript_service_domain_pb.DeprecateDomainResponse()
	}
}

export function __goscript_get_emptyDomainAPIServiceDeprecateDomainYARPCResponse(): __goscript_service_domain_pb.DeprecateDomainResponse | $.VarRef<__goscript_service_domain_pb.DeprecateDomainResponse> | null {
	if (((emptyDomainAPIServiceDeprecateDomainYARPCResponse) as any) === undefined) {
		__goscript_init_emptyDomainAPIServiceDeprecateDomainYARPCResponse()
	}
	return emptyDomainAPIServiceDeprecateDomainYARPCResponse
}

export function __goscript_set_emptyDomainAPIServiceDeprecateDomainYARPCResponse(__goscriptValue: __goscript_service_domain_pb.DeprecateDomainResponse | $.VarRef<__goscript_service_domain_pb.DeprecateDomainResponse> | null): void {
	emptyDomainAPIServiceDeprecateDomainYARPCResponse = __goscriptValue
}

export var emptyDomainAPIServiceDeleteDomainYARPCRequest: __goscript_service_domain_pb.DeleteDomainRequest | $.VarRef<__goscript_service_domain_pb.DeleteDomainRequest> | null

export function __goscript_init_emptyDomainAPIServiceDeleteDomainYARPCRequest(): void {
	if (((emptyDomainAPIServiceDeleteDomainYARPCRequest) as any) === undefined) {
		emptyDomainAPIServiceDeleteDomainYARPCRequest = new __goscript_service_domain_pb.DeleteDomainRequest()
	}
}

export function __goscript_get_emptyDomainAPIServiceDeleteDomainYARPCRequest(): __goscript_service_domain_pb.DeleteDomainRequest | $.VarRef<__goscript_service_domain_pb.DeleteDomainRequest> | null {
	if (((emptyDomainAPIServiceDeleteDomainYARPCRequest) as any) === undefined) {
		__goscript_init_emptyDomainAPIServiceDeleteDomainYARPCRequest()
	}
	return emptyDomainAPIServiceDeleteDomainYARPCRequest
}

export function __goscript_set_emptyDomainAPIServiceDeleteDomainYARPCRequest(__goscriptValue: __goscript_service_domain_pb.DeleteDomainRequest | $.VarRef<__goscript_service_domain_pb.DeleteDomainRequest> | null): void {
	emptyDomainAPIServiceDeleteDomainYARPCRequest = __goscriptValue
}

export var emptyDomainAPIServiceDeleteDomainYARPCResponse: __goscript_service_domain_pb.DeleteDomainResponse | $.VarRef<__goscript_service_domain_pb.DeleteDomainResponse> | null

export function __goscript_init_emptyDomainAPIServiceDeleteDomainYARPCResponse(): void {
	if (((emptyDomainAPIServiceDeleteDomainYARPCResponse) as any) === undefined) {
		emptyDomainAPIServiceDeleteDomainYARPCResponse = new __goscript_service_domain_pb.DeleteDomainResponse()
	}
}

export function __goscript_get_emptyDomainAPIServiceDeleteDomainYARPCResponse(): __goscript_service_domain_pb.DeleteDomainResponse | $.VarRef<__goscript_service_domain_pb.DeleteDomainResponse> | null {
	if (((emptyDomainAPIServiceDeleteDomainYARPCResponse) as any) === undefined) {
		__goscript_init_emptyDomainAPIServiceDeleteDomainYARPCResponse()
	}
	return emptyDomainAPIServiceDeleteDomainYARPCResponse
}

export function __goscript_set_emptyDomainAPIServiceDeleteDomainYARPCResponse(__goscriptValue: __goscript_service_domain_pb.DeleteDomainResponse | $.VarRef<__goscript_service_domain_pb.DeleteDomainResponse> | null): void {
	emptyDomainAPIServiceDeleteDomainYARPCResponse = __goscriptValue
}

export var emptyDomainAPIServiceListFailoverHistoryYARPCRequest: __goscript_service_domain_pb.ListFailoverHistoryRequest | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryRequest> | null

export function __goscript_init_emptyDomainAPIServiceListFailoverHistoryYARPCRequest(): void {
	if (((emptyDomainAPIServiceListFailoverHistoryYARPCRequest) as any) === undefined) {
		emptyDomainAPIServiceListFailoverHistoryYARPCRequest = new __goscript_service_domain_pb.ListFailoverHistoryRequest()
	}
}

export function __goscript_get_emptyDomainAPIServiceListFailoverHistoryYARPCRequest(): __goscript_service_domain_pb.ListFailoverHistoryRequest | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryRequest> | null {
	if (((emptyDomainAPIServiceListFailoverHistoryYARPCRequest) as any) === undefined) {
		__goscript_init_emptyDomainAPIServiceListFailoverHistoryYARPCRequest()
	}
	return emptyDomainAPIServiceListFailoverHistoryYARPCRequest
}

export function __goscript_set_emptyDomainAPIServiceListFailoverHistoryYARPCRequest(__goscriptValue: __goscript_service_domain_pb.ListFailoverHistoryRequest | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryRequest> | null): void {
	emptyDomainAPIServiceListFailoverHistoryYARPCRequest = __goscriptValue
}

export var emptyDomainAPIServiceListFailoverHistoryYARPCResponse: __goscript_service_domain_pb.ListFailoverHistoryResponse | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryResponse> | null

export function __goscript_init_emptyDomainAPIServiceListFailoverHistoryYARPCResponse(): void {
	if (((emptyDomainAPIServiceListFailoverHistoryYARPCResponse) as any) === undefined) {
		emptyDomainAPIServiceListFailoverHistoryYARPCResponse = new __goscript_service_domain_pb.ListFailoverHistoryResponse()
	}
}

export function __goscript_get_emptyDomainAPIServiceListFailoverHistoryYARPCResponse(): __goscript_service_domain_pb.ListFailoverHistoryResponse | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryResponse> | null {
	if (((emptyDomainAPIServiceListFailoverHistoryYARPCResponse) as any) === undefined) {
		__goscript_init_emptyDomainAPIServiceListFailoverHistoryYARPCResponse()
	}
	return emptyDomainAPIServiceListFailoverHistoryYARPCResponse
}

export function __goscript_set_emptyDomainAPIServiceListFailoverHistoryYARPCResponse(__goscriptValue: __goscript_service_domain_pb.ListFailoverHistoryResponse | $.VarRef<__goscript_service_domain_pb.ListFailoverHistoryResponse> | null): void {
	emptyDomainAPIServiceListFailoverHistoryYARPCResponse = __goscriptValue
}

export let yarpcFileDescriptorClosure2e37d15268893114: $.Slice<$.Slice<number>> = $.arrayToSlice<$.Slice<number>>([new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 188, 88, 221, 114, 219, 68, 20, 174, 210, 52, 77, 142, 28, 39, 217, 252, 169, 206, 76, 235, 186, 180, 152, 2, 118, 227, 66, 97, 232, 48, 67, 210, 36, 36, 211, 31, 140, 146, 94, 0, 23, 98, 37, 173, 157, 157, 200, 146, 144, 214, 110, 221, 123, 94, 128, 55, 224, 37, 120, 30, 30, 128, 123, 166, 119, 140, 118, 87, 182, 37, 75, 142, 211, 166, 220, 89, 71, 223, 126, 231, 236, 57, 103, 191, 179, 50, 84, 187, 38, 9, 234, 22, 182, 137, 107, 145, 58, 246, 105, 189, 183, 93, 15, 73, 208, 163, 22, 49, 108, 175, 131, 169, 91, 243, 3, 143, 121, 104, 53, 66, 214, 36, 178, 134, 125, 90, 235, 109, 151, 110, 182, 61, 175, 237, 144, 58, 135, 152, 221, 86, 221, 238, 6, 152, 81, 79, 46, 42, 149, 211, 239, 91, 148, 56, 182, 209, 193, 225, 153, 68, 220, 74, 35, 24, 237, 144, 144, 225, 142, 31, 83, 100, 69, 104, 121, 157, 206, 208, 73, 22, 98, 52, 246, 202, 219, 121, 88, 215, 73, 155, 134, 140, 4, 123, 252, 133, 78, 126, 235, 146, 144, 161, 187, 80, 12, 137, 213, 13, 40, 235, 27, 204, 59, 35, 174, 166, 148, 149, 234, 130, 190, 24, 91, 79, 34, 35, 66, 48, 235, 226, 14, 209, 102, 248, 75, 254, 27, 149, 65, 181, 73, 104, 5, 212, 143, 54, 172, 93, 229, 175, 70, 77, 232, 22, 168, 222, 43, 151, 4, 6, 233, 96, 234, 104, 179, 28, 1, 220, 180, 31, 89, 208, 41, 220, 121, 229, 5, 103, 45, 199, 123, 101, 144, 215, 196, 234, 70, 203, 140, 128, 48, 226, 242, 95, 62, 9, 168, 103, 107, 215, 202, 74, 85, 109, 220, 168, 137, 84, 213, 226, 84, 213, 246, 100, 178, 245, 114, 204, 178, 31, 147, 232, 49, 71, 147, 83, 160, 38, 204, 91, 78, 55, 218, 127, 168, 205, 149, 175, 86, 213, 198, 23, 181, 140, 130, 214, 158, 8, 144, 78, 124, 135, 90, 156, 252, 137, 231, 182, 104, 59, 246, 52, 96, 65, 53, 88, 197, 22, 163, 61, 98, 72, 147, 193, 51, 116, 157, 111, 114, 69, 188, 146, 108, 47, 162, 116, 29, 194, 172, 141, 25, 214, 230, 39, 120, 207, 172, 81, 109, 15, 51, 188, 239, 178, 160, 175, 115, 6, 84, 133, 101, 26, 26, 109, 199, 51, 177, 35, 123, 84, 91, 40, 43, 213, 121, 189, 72, 195, 239, 185, 89, 16, 160, 95, 96, 243, 148, 134, 204, 11, 250, 6, 14, 172, 83, 218, 195, 142, 17, 50, 204, 186, 161, 6, 101, 165, 90, 108, 220, 201, 12, 99, 71, 98, 143, 57, 84, 95, 151, 28, 73, 51, 122, 0, 107, 99, 228, 221, 128, 106, 42, 207, 0, 74, 45, 122, 25, 80, 132, 161, 212, 163, 33, 53, 169, 19, 181, 91, 58, 162, 194, 244, 17, 105, 67, 154, 84, 80, 143, 96, 51, 203, 69, 20, 215, 34, 143, 107, 125, 124, 105, 20, 218, 239, 10, 220, 72, 150, 51, 52, 204, 190, 17, 144, 118, 212, 219, 69, 94, 179, 131, 11, 212, 108, 103, 180, 254, 225, 110, 95, 231, 68, 188, 138, 187, 51, 154, 162, 111, 224, 76, 0, 122, 6, 75, 169, 48, 180, 37, 222, 253, 57, 121, 73, 176, 232, 197, 36, 107, 233, 43, 88, 24, 52, 15, 90, 134, 171, 103, 164, 47, 207, 119, 244, 19, 173, 193, 181, 30, 118, 186, 241, 177, 22, 15, 223, 204, 124, 173, 148, 142, 96, 107, 194, 14, 46, 66, 85, 209, 96, 35, 157, 162, 208, 247, 220, 144, 84, 254, 153, 135, 213, 151, 190, 141, 25, 185, 52, 77, 122, 12, 106, 151, 51, 114, 137, 229, 77, 174, 54, 74, 99, 194, 113, 16, 169, 240, 115, 28, 158, 233, 32, 224, 209, 239, 180, 160, 169, 231, 10, 90, 97, 76, 208, 14, 228, 33, 95, 228, 13, 211, 200, 172, 89, 198, 150, 199, 142, 248, 148, 194, 88, 124, 127, 97, 124, 2, 5, 19, 219, 134, 73, 93, 28, 80, 18, 119, 91, 57, 51, 242, 93, 108, 239, 74, 156, 174, 154, 195, 135, 73, 58, 179, 252, 193, 116, 102, 229, 29, 117, 6, 125, 96, 157, 89, 157, 164, 51, 57, 83, 99, 45, 111, 106, 140, 206, 173, 245, 75, 153, 91, 247, 97, 197, 38, 14, 97, 196, 24, 212, 189, 175, 109, 112, 255, 75, 226, 69, 92, 230, 62, 218, 131, 229, 22, 166, 142, 215, 35, 129, 17, 221, 75, 188, 46, 211, 54, 207, 235, 185, 165, 120, 201, 137, 88, 145, 165, 105, 218, 255, 175, 105, 149, 167, 176, 150, 60, 122, 66, 134, 208, 67, 152, 147, 67, 84, 225, 81, 109, 101, 70, 37, 23, 73, 104, 229, 207, 25, 88, 63, 144, 251, 76, 170, 215, 45, 80, 5, 70, 84, 86, 132, 6, 194, 244, 66, 104, 84, 73, 2, 178, 58, 1, 56, 126, 83, 32, 118, 198, 250, 33, 35, 151, 55, 223, 57, 151, 104, 3, 230, 2, 130, 67, 207, 213, 170, 220, 173, 124, 202, 172, 123, 227, 162, 117, 175, 60, 135, 141, 116, 138, 222, 39, 229, 199, 176, 177, 71, 252, 128, 88, 151, 56, 48, 42, 55, 96, 115, 140, 84, 142, 167, 38, 172, 238, 241, 243, 112, 105, 206, 54, 96, 45, 201, 40, 61, 189, 128, 245, 61, 62, 101, 204, 148, 175, 101, 152, 161, 182, 224, 63, 188, 162, 207, 80, 27, 173, 141, 210, 30, 94, 17, 196, 187, 139, 241, 228, 50, 137, 97, 246, 163, 196, 167, 249, 222, 39, 241, 63, 1, 122, 70, 67, 38, 172, 97, 28, 219, 22, 44, 248, 184, 77, 140, 144, 190, 17, 93, 126, 77, 159, 143, 12, 199, 244, 13, 65, 247, 96, 201, 37, 175, 153, 193, 17, 34, 75, 81, 196, 5, 125, 49, 50, 55, 113, 155, 240, 44, 85, 24, 172, 38, 168, 101, 152, 95, 194, 117, 225, 59, 212, 20, 46, 122, 19, 227, 140, 177, 83, 123, 253, 75, 129, 82, 228, 54, 238, 206, 67, 49, 66, 226, 157, 53, 225, 122, 139, 58, 252, 108, 137, 44, 61, 202, 244, 158, 207, 112, 32, 86, 235, 49, 13, 58, 0, 240, 113, 155, 186, 252, 160, 240, 152, 212, 198, 189, 76, 210, 230, 0, 246, 3, 191, 114, 132, 250, 200, 202, 202, 119, 112, 251, 92, 175, 81, 97, 164, 190, 196, 189, 163, 207, 11, 195, 145, 93, 249, 67, 129, 173, 76, 10, 153, 249, 167, 48, 56, 198, 6, 233, 17, 151, 197, 21, 168, 100, 134, 27, 211, 236, 71, 80, 189, 216, 26, 125, 156, 190, 30, 111, 21, 88, 76, 48, 161, 226, 176, 241, 121, 219, 127, 11, 5, 43, 32, 152, 17, 155, 235, 145, 76, 225, 248, 197, 238, 36, 254, 120, 214, 85, 137, 143, 44, 232, 0, 22, 135, 122, 214, 247, 9, 255, 88, 45, 54, 110, 79, 220, 211, 73, 223, 39, 122, 161, 53, 242, 132, 126, 132, 149, 88, 172, 99, 123, 168, 205, 242, 252, 124, 52, 105, 44, 199, 148, 250, 178, 149, 52, 132, 149, 127, 21, 88, 74, 161, 208, 17, 20, 90, 129, 215, 137, 37, 94, 118, 225, 189, 243, 21, 254, 200, 109, 121, 186, 26, 173, 149, 6, 180, 15, 192, 188, 1, 209, 204, 133, 136, 22, 152, 23, 211, 232, 195, 141, 99, 198, 2, 106, 118, 153, 72, 162, 218, 184, 59, 105, 227, 59, 49, 120, 176, 243, 129, 165, 241, 247, 28, 44, 136, 19, 188, 211, 60, 66, 20, 138, 201, 207, 4, 116, 127, 250, 207, 173, 210, 167, 83, 97, 101, 143, 83, 40, 38, 229, 49, 199, 85, 166, 38, 231, 184, 202, 209, 219, 95, 65, 29, 209, 55, 244, 113, 174, 144, 36, 197, 181, 84, 61, 31, 40, 61, 88, 80, 24, 189, 213, 160, 234, 180, 223, 28, 165, 79, 166, 64, 14, 51, 150, 156, 228, 57, 25, 203, 188, 17, 229, 100, 44, 231, 106, 224, 192, 82, 106, 32, 163, 188, 140, 103, 221, 5, 74, 159, 77, 7, 30, 102, 111, 116, 34, 231, 100, 47, 227, 26, 144, 147, 189, 172, 241, 142, 94, 139, 33, 151, 146, 92, 84, 191, 224, 84, 41, 61, 152, 126, 129, 240, 188, 107, 194, 166, 229, 117, 178, 150, 237, 34, 17, 228, 177, 248, 171, 179, 25, 9, 104, 83, 249, 121, 187, 77, 217, 105, 215, 172, 89, 94, 167, 62, 250, 175, 226, 231, 212, 118, 234, 109, 79, 252, 75, 41, 255, 98, 124, 140, 125, 218, 219, 54, 231, 184, 237, 225, 127, 1, 0, 0, 255, 255, 218, 131, 71, 54, 74, 21, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 75, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 79, 41, 45, 74, 44, 201, 204, 207, 211, 3, 139, 8, 241, 67, 228, 245, 96, 242, 74, 86, 92, 28, 46, 80, 37, 66, 18, 92, 236, 197, 169, 201, 249, 121, 41, 197, 18, 140, 10, 140, 26, 204, 65, 48, 174, 144, 8, 23, 107, 94, 98, 94, 126, 177, 4, 147, 2, 163, 6, 107, 16, 132, 227, 212, 204, 200, 37, 156, 156, 159, 171, 135, 102, 166, 19, 47, 204, 196, 0, 144, 72, 0, 99, 148, 33, 84, 69, 122, 126, 78, 98, 94, 186, 94, 126, 81, 58, 194, 129, 37, 149, 5, 169, 197, 250, 217, 121, 249, 229, 121, 112, 199, 22, 36, 253, 96, 100, 92, 196, 196, 236, 30, 224, 180, 138, 73, 206, 29, 162, 57, 0, 170, 67, 47, 60, 53, 39, 199, 27, 164, 62, 4, 164, 53, 137, 13, 108, 148, 49, 32, 0, 0, 255, 255, 239, 138, 180, 195, 251, 0, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 82, 72, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 79, 203, 76, 205, 73, 137, 207, 77, 44, 206, 214, 3, 139, 9, 241, 67, 84, 232, 193, 84, 40, 41, 114, 113, 186, 129, 20, 249, 38, 22, 103, 11, 137, 112, 177, 22, 36, 150, 100, 20, 75, 48, 42, 48, 107, 112, 6, 65, 56, 78, 173, 140, 92, 194, 201, 249, 185, 122, 104, 90, 157, 248, 224, 26, 3, 64, 66, 1, 140, 81, 70, 80, 37, 233, 249, 57, 137, 121, 233, 122, 249, 69, 233, 8, 167, 148, 84, 22, 164, 22, 235, 103, 231, 229, 151, 231, 65, 156, 5, 114, 85, 65, 210, 15, 70, 198, 69, 76, 204, 238, 1, 78, 171, 152, 228, 220, 33, 186, 3, 160, 90, 244, 194, 83, 115, 114, 188, 65, 26, 66, 64, 122, 147, 216, 192, 102, 25, 3, 2, 0, 0, 255, 255, 148, 102, 148, 157, 230, 0, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 79, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 47, 201, 204, 77, 45, 46, 73, 204, 45, 208, 3, 11, 9, 241, 67, 20, 232, 193, 20, 40, 89, 115, 113, 134, 192, 212, 8, 73, 112, 177, 23, 167, 38, 231, 231, 165, 20, 75, 48, 42, 48, 106, 48, 7, 193, 184, 66, 34, 92, 172, 121, 137, 121, 249, 197, 18, 76, 10, 140, 26, 172, 65, 16, 142, 83, 43, 35, 151, 112, 114, 126, 174, 30, 154, 161, 78, 124, 112, 35, 3, 64, 66, 1, 140, 81, 70, 80, 37, 233, 249, 57, 137, 121, 233, 122, 249, 69, 233, 72, 110, 172, 44, 72, 45, 214, 207, 206, 203, 47, 207, 67, 184, 183, 32, 233, 7, 35, 227, 34, 38, 102, 247, 0, 167, 85, 76, 114, 238, 16, 221, 1, 80, 45, 122, 225, 169, 57, 57, 222, 32, 13, 33, 32, 189, 73, 108, 96, 179, 140, 1, 1, 0, 0, 255, 255, 174, 101, 206, 125, 255, 0, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 188, 86, 93, 115, 219, 68, 23, 126, 101, 215, 249, 56, 78, 19, 101, 211, 38, 78, 218, 188, 111, 234, 23, 104, 200, 128, 61, 113, 111, 58, 64, 1, 213, 31, 137, 90, 99, 155, 181, 219, 80, 152, 169, 102, 45, 173, 221, 37, 178, 86, 72, 43, 55, 238, 5, 195, 13, 127, 131, 11, 174, 249, 39, 92, 242, 135, 152, 149, 86, 177, 157, 184, 148, 11, 134, 59, 237, 121, 158, 243, 177, 71, 231, 99, 225, 32, 234, 211, 160, 108, 19, 135, 122, 54, 45, 19, 159, 149, 199, 199, 101, 155, 143, 70, 220, 43, 249, 1, 23, 28, 109, 73, 70, 73, 49, 74, 196, 103, 165, 241, 241, 222, 127, 135, 156, 15, 93, 90, 142, 41, 253, 104, 80, 118, 162, 128, 8, 150, 42, 21, 159, 194, 230, 25, 15, 206, 7, 46, 127, 93, 191, 160, 118, 36, 33, 244, 63, 200, 191, 86, 66, 139, 57, 5, 237, 64, 59, 92, 197, 144, 138, 76, 7, 221, 134, 165, 32, 242, 36, 150, 137, 177, 92, 16, 121, 166, 83, 44, 194, 90, 106, 172, 55, 241, 41, 66, 112, 195, 35, 35, 170, 12, 196, 223, 146, 99, 216, 130, 141, 153, 152, 188, 149, 179, 15, 203, 29, 50, 113, 57, 113, 36, 236, 16, 65, 98, 120, 13, 199, 223, 197, 55, 176, 220, 32, 204, 141, 2, 138, 182, 97, 41, 160, 36, 228, 158, 210, 87, 39, 84, 128, 101, 135, 10, 194, 220, 48, 142, 112, 13, 167, 71, 244, 8, 150, 185, 47, 111, 25, 22, 178, 7, 218, 97, 190, 242, 255, 210, 130, 188, 149, 148, 131, 118, 66, 197, 169, 78, 241, 55, 13, 214, 231, 49, 212, 6, 125, 144, 72, 44, 155, 8, 58, 228, 193, 36, 142, 102, 189, 242, 222, 95, 153, 174, 42, 46, 222, 24, 204, 11, 144, 9, 91, 30, 189, 16, 86, 64, 69, 48, 177, 152, 39, 104, 48, 38, 110, 124, 145, 124, 101, 183, 148, 252, 209, 82, 250, 71, 75, 53, 245, 71, 241, 166, 212, 194, 82, 201, 84, 58, 197, 95, 52, 184, 241, 21, 29, 113, 244, 8, 150, 6, 140, 186, 78, 88, 208, 14, 178, 135, 249, 202, 251, 11, 67, 147, 212, 82, 35, 230, 213, 61, 17, 76, 176, 82, 218, 59, 131, 252, 140, 24, 233, 144, 61, 167, 19, 149, 115, 249, 137, 42, 144, 27, 19, 55, 162, 42, 202, 187, 11, 205, 171, 159, 138, 19, 234, 39, 153, 135, 90, 241, 87, 13, 150, 78, 41, 113, 104, 128, 190, 184, 18, 226, 253, 133, 54, 18, 242, 191, 27, 228, 31, 26, 232, 93, 74, 2, 251, 149, 33, 68, 192, 250, 145, 160, 33, 178, 96, 157, 121, 14, 189, 160, 142, 53, 23, 246, 195, 133, 86, 175, 170, 151, 204, 68, 119, 246, 30, 55, 217, 172, 108, 239, 37, 160, 235, 164, 127, 240, 86, 3, 88, 169, 17, 65, 30, 187, 188, 143, 26, 112, 147, 122, 54, 119, 152, 55, 180, 196, 196, 167, 170, 128, 239, 45, 180, 85, 87, 76, 217, 191, 120, 141, 206, 156, 46, 219, 53, 51, 211, 174, 157, 100, 196, 208, 224, 57, 13, 66, 198, 61, 211, 27, 112, 73, 100, 35, 223, 77, 219, 94, 126, 163, 251, 176, 49, 160, 68, 200, 70, 26, 39, 84, 53, 94, 214, 149, 88, 25, 40, 62, 133, 157, 110, 228, 251, 60, 16, 212, 169, 186, 140, 122, 66, 33, 161, 156, 76, 67, 110, 133, 206, 185, 178, 156, 27, 242, 174, 115, 142, 118, 97, 229, 123, 50, 38, 49, 144, 216, 92, 150, 231, 174, 115, 94, 252, 41, 11, 249, 184, 105, 58, 220, 101, 246, 4, 213, 64, 103, 30, 19, 140, 184, 211, 214, 211, 222, 213, 122, 27, 74, 37, 109, 60, 84, 134, 173, 62, 177, 207, 249, 96, 96, 217, 156, 14, 6, 204, 150, 97, 198, 190, 53, 140, 20, 84, 157, 34, 210, 237, 136, 92, 176, 81, 52, 154, 186, 205, 190, 211, 173, 82, 185, 116, 251, 225, 212, 10, 17, 130, 142, 124, 17, 22, 110, 28, 104, 135, 185, 75, 170, 161, 196, 232, 17, 220, 241, 184, 151, 12, 25, 210, 119, 169, 69, 131, 128, 7, 86, 50, 64, 195, 66, 238, 32, 123, 184, 138, 11, 30, 247, 112, 202, 168, 75, 2, 78, 112, 244, 4, 182, 232, 133, 207, 146, 64, 166, 33, 47, 189, 43, 100, 52, 213, 186, 156, 82, 35, 216, 49, 67, 238, 198, 194, 147, 128, 71, 126, 135, 4, 130, 197, 171, 104, 193, 122, 64, 159, 67, 46, 20, 68, 36, 5, 191, 94, 57, 92, 88, 164, 243, 6, 187, 146, 143, 19, 181, 226, 24, 238, 204, 163, 85, 238, 13, 216, 80, 69, 136, 206, 64, 103, 41, 108, 13, 37, 158, 182, 246, 71, 127, 195, 211, 101, 232, 120, 131, 205, 1, 97, 241, 119, 13, 246, 140, 112, 226, 217, 233, 146, 156, 247, 91, 128, 101, 234, 201, 60, 39, 27, 119, 5, 167, 71, 84, 129, 219, 126, 64, 29, 58, 96, 30, 117, 172, 31, 34, 26, 81, 43, 206, 74, 82, 202, 91, 83, 240, 107, 137, 181, 100, 146, 246, 1, 18, 98, 220, 206, 217, 152, 184, 26, 75, 226, 70, 253, 18, 214, 18, 216, 142, 99, 136, 139, 36, 95, 217, 95, 120, 193, 116, 74, 224, 124, 172, 146, 68, 93, 12, 224, 110, 188, 200, 105, 213, 141, 66, 65, 131, 46, 117, 169, 45, 47, 162, 250, 8, 195, 166, 157, 32, 178, 20, 147, 177, 167, 220, 44, 94, 62, 202, 206, 229, 140, 196, 186, 125, 69, 82, 252, 12, 244, 171, 44, 116, 11, 114, 161, 205, 253, 180, 68, 146, 195, 101, 221, 100, 102, 158, 21, 223, 192, 102, 135, 12, 153, 23, 167, 59, 221, 222, 119, 96, 213, 39, 67, 106, 133, 236, 77, 98, 34, 135, 87, 164, 160, 203, 222, 80, 244, 1, 108, 196, 155, 56, 102, 8, 126, 78, 61, 53, 217, 110, 74, 113, 135, 12, 105, 79, 10, 143, 126, 214, 96, 227, 202, 90, 71, 119, 161, 208, 48, 204, 230, 51, 92, 183, 170, 70, 175, 126, 210, 198, 47, 44, 179, 245, 220, 104, 154, 53, 253, 63, 104, 23, 110, 95, 67, 59, 237, 102, 83, 215, 208, 62, 236, 94, 131, 186, 61, 163, 85, 51, 112, 77, 207, 160, 61, 216, 190, 6, 55, 140, 158, 209, 212, 179, 71, 175, 97, 109, 118, 56, 75, 47, 245, 86, 181, 93, 51, 91, 39, 86, 239, 69, 167, 62, 19, 192, 30, 108, 207, 67, 189, 83, 108, 54, 122, 248, 76, 215, 208, 54, 160, 121, 236, 73, 183, 221, 210, 51, 168, 0, 183, 230, 229, 29, 220, 238, 181, 31, 232, 217, 163, 31, 97, 107, 65, 195, 161, 123, 176, 111, 118, 219, 77, 163, 103, 182, 91, 214, 9, 110, 63, 235, 200, 155, 244, 102, 227, 120, 43, 229, 180, 110, 52, 123, 167, 47, 116, 237, 237, 148, 26, 54, 204, 86, 189, 166, 103, 142, 94, 194, 154, 204, 63, 31, 211, 32, 189, 184, 76, 82, 251, 121, 29, 95, 189, 248, 14, 108, 205, 67, 141, 54, 174, 214, 117, 45, 77, 236, 20, 56, 193, 70, 181, 222, 120, 214, 212, 51, 143, 191, 131, 29, 155, 143, 22, 149, 237, 227, 124, 53, 126, 132, 119, 228, 164, 235, 104, 223, 30, 15, 153, 120, 21, 245, 75, 54, 31, 149, 103, 159, 236, 31, 51, 199, 45, 15, 121, 242, 16, 87, 239, 247, 79, 137, 207, 198, 199, 253, 165, 88, 246, 224, 207, 0, 0, 0, 255, 255, 236, 69, 194, 8, 227, 11, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 180, 87, 221, 114, 219, 68, 20, 70, 206, 15, 233, 177, 227, 56, 155, 164, 81, 13, 67, 93, 151, 50, 166, 51, 200, 77, 96, 160, 229, 103, 6, 59, 86, 139, 153, 16, 50, 178, 27, 102, 232, 133, 102, 45, 173, 237, 165, 178, 86, 179, 90, 187, 245, 21, 12, 60, 5, 47, 192, 67, 112, 201, 75, 113, 203, 104, 181, 82, 44, 91, 249, 185, 225, 110, 247, 252, 124, 231, 236, 217, 239, 156, 149, 160, 54, 29, 16, 222, 116, 176, 75, 124, 135, 52, 113, 64, 155, 179, 163, 166, 203, 38, 152, 250, 70, 192, 153, 96, 104, 47, 178, 48, 148, 133, 129, 3, 106, 204, 142, 170, 31, 140, 24, 27, 121, 164, 41, 77, 6, 211, 97, 211, 157, 114, 44, 40, 83, 78, 213, 251, 203, 122, 65, 39, 36, 20, 120, 18, 40, 131, 220, 184, 14, 155, 76, 18, 136, 250, 95, 0, 155, 29, 153, 8, 42, 67, 129, 186, 186, 86, 211, 26, 119, 172, 2, 117, 17, 130, 117, 31, 79, 136, 94, 144, 18, 185, 70, 207, 96, 51, 20, 88, 76, 67, 125, 173, 166, 53, 202, 199, 15, 140, 156, 188, 141, 24, 176, 39, 13, 45, 229, 128, 106, 80, 116, 73, 232, 112, 26, 68, 39, 208, 215, 37, 234, 162, 8, 221, 135, 34, 123, 227, 19, 110, 147, 9, 166, 158, 190, 33, 45, 64, 138, 204, 72, 130, 158, 193, 186, 139, 5, 214, 55, 107, 107, 141, 226, 241, 163, 107, 98, 27, 29, 44, 176, 233, 11, 62, 183, 164, 11, 26, 195, 195, 55, 140, 191, 30, 122, 236, 141, 77, 222, 18, 103, 26, 69, 180, 57, 17, 196, 151, 171, 128, 112, 202, 92, 253, 221, 154, 214, 40, 30, 223, 51, 226, 194, 26, 73, 97, 141, 142, 42, 188, 85, 75, 80, 204, 4, 196, 74, 48, 206, 37, 4, 58, 129, 210, 0, 187, 246, 128, 250, 152, 83, 18, 234, 91, 18, 178, 150, 155, 108, 27, 187, 109, 101, 103, 21, 7, 151, 27, 244, 10, 14, 199, 52, 20, 140, 207, 109, 204, 157, 49, 157, 97, 207, 86, 133, 191, 35, 11, 255, 48, 23, 175, 165, 108, 85, 233, 15, 20, 70, 86, 140, 158, 192, 254, 10, 248, 148, 83, 29, 100, 193, 209, 146, 211, 75, 78, 17, 134, 234, 140, 134, 116, 64, 61, 42, 86, 51, 42, 222, 62, 35, 253, 18, 102, 41, 169, 207, 225, 48, 47, 68, 148, 87, 73, 230, 117, 176, 234, 26, 165, 102, 192, 30, 118, 4, 157, 17, 219, 241, 166, 161, 32, 220, 150, 164, 221, 150, 62, 187, 177, 234, 36, 214, 156, 69, 12, 62, 135, 45, 101, 24, 234, 101, 201, 163, 207, 114, 19, 87, 62, 22, 9, 60, 234, 200, 187, 63, 97, 254, 144, 142, 18, 34, 164, 40, 232, 99, 168, 12, 49, 245, 216, 140, 112, 123, 70, 120, 24, 177, 123, 167, 166, 53, 214, 172, 157, 68, 126, 17, 139, 81, 3, 42, 52, 180, 71, 30, 27, 96, 207, 142, 251, 95, 175, 212, 180, 198, 150, 85, 166, 225, 11, 41, 86, 205, 248, 28, 182, 83, 80, 234, 15, 153, 190, 43, 105, 148, 223, 111, 207, 149, 101, 215, 31, 50, 171, 52, 92, 216, 161, 87, 81, 68, 230, 201, 156, 237, 17, 103, 211, 32, 212, 145, 132, 122, 146, 11, 213, 77, 140, 95, 68, 182, 217, 35, 239, 208, 140, 50, 68, 14, 28, 224, 112, 238, 59, 118, 218, 90, 142, 116, 208, 247, 100, 132, 102, 62, 35, 34, 143, 159, 148, 67, 54, 192, 30, 94, 213, 161, 83, 216, 201, 94, 112, 168, 239, 75, 248, 43, 8, 183, 120, 227, 161, 85, 206, 48, 32, 172, 126, 1, 119, 210, 209, 128, 42, 176, 246, 154, 204, 213, 200, 139, 150, 104, 31, 54, 102, 216, 155, 38, 67, 47, 222, 124, 89, 120, 170, 213, 59, 112, 255, 6, 74, 160, 7, 80, 202, 112, 48, 198, 45, 58, 151, 236, 171, 255, 173, 65, 113, 161, 233, 209, 247, 176, 149, 14, 10, 77, 178, 209, 184, 105, 80, 24, 201, 34, 30, 111, 169, 127, 213, 134, 237, 140, 42, 231, 120, 79, 23, 143, 87, 60, 174, 95, 27, 107, 46, 233, 180, 80, 130, 223, 53, 216, 206, 40, 209, 93, 216, 228, 4, 135, 204, 87, 65, 212, 14, 85, 97, 139, 5, 132, 99, 193, 184, 170, 100, 186, 71, 223, 64, 201, 225, 4, 11, 226, 218, 209, 115, 37, 31, 146, 226, 113, 117, 101, 228, 246, 147, 183, 204, 42, 42, 251, 72, 82, 255, 167, 0, 165, 69, 190, 231, 182, 159, 150, 223, 126, 125, 208, 83, 211, 80, 96, 46, 236, 244, 193, 84, 21, 185, 46, 141, 187, 137, 111, 47, 114, 77, 229, 232, 2, 238, 165, 168, 228, 109, 64, 57, 89, 128, 189, 249, 116, 135, 137, 179, 41, 125, 47, 113, 143, 225, 192, 97, 147, 192, 35, 81, 169, 194, 49, 230, 174, 237, 176, 169, 47, 228, 211, 185, 97, 237, 165, 202, 94, 164, 59, 137, 84, 232, 17, 148, 3, 226, 187, 212, 31, 197, 30, 161, 190, 81, 91, 107, 108, 88, 219, 74, 42, 77, 195, 250, 31, 235, 80, 206, 54, 10, 26, 195, 46, 39, 163, 104, 74, 8, 150, 116, 154, 162, 228, 211, 91, 52, 154, 97, 73, 231, 62, 83, 2, 201, 192, 118, 65, 215, 172, 29, 158, 213, 160, 63, 53, 248, 112, 169, 163, 237, 193, 60, 29, 223, 88, 8, 78, 7, 83, 17, 145, 52, 138, 222, 189, 77, 244, 236, 182, 61, 87, 171, 86, 130, 21, 247, 74, 13, 223, 96, 86, 253, 5, 246, 243, 14, 146, 211, 74, 95, 103, 91, 233, 163, 155, 179, 92, 106, 167, 234, 175, 240, 232, 86, 105, 231, 4, 255, 54, 27, 252, 241, 117, 47, 88, 10, 214, 115, 88, 64, 22, 251, 249, 95, 13, 14, 114, 141, 80, 0, 104, 229, 58, 146, 1, 213, 186, 125, 176, 21, 169, 154, 89, 187, 206, 178, 188, 234, 193, 221, 124, 227, 255, 163, 244, 117, 31, 118, 87, 244, 87, 125, 73, 104, 87, 125, 73, 228, 13, 158, 66, 238, 224, 121, 252, 155, 6, 165, 197, 143, 98, 116, 15, 14, 58, 63, 254, 208, 234, 158, 217, 189, 126, 171, 255, 178, 103, 119, 207, 46, 90, 167, 221, 78, 229, 29, 244, 62, 232, 89, 149, 101, 190, 232, 246, 250, 166, 101, 118, 42, 218, 170, 182, 99, 158, 91, 230, 73, 171, 111, 118, 42, 133, 85, 216, 142, 121, 106, 70, 170, 181, 199, 99, 40, 47, 125, 113, 189, 7, 135, 45, 235, 228, 187, 238, 69, 235, 52, 55, 139, 101, 101, 167, 219, 107, 181, 79, 101, 22, 57, 174, 230, 89, 172, 44, 180, 95, 193, 161, 195, 38, 121, 151, 210, 46, 198, 69, 56, 143, 166, 224, 185, 246, 243, 209, 136, 138, 241, 116, 96, 56, 108, 210, 92, 252, 83, 249, 132, 186, 94, 115, 196, 226, 255, 26, 245, 219, 242, 21, 14, 232, 236, 104, 176, 41, 101, 159, 254, 23, 0, 0, 255, 255, 53, 103, 135, 72, 82, 13, 0, 0]) as $.Slice<number>])

export function __goscript_set_yarpcFileDescriptorClosure2e37d15268893114(__goscriptValue: $.Slice<$.Slice<number>>): void {
	yarpcFileDescriptorClosure2e37d15268893114 = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await yarpc.RegisterClientBuilder($.interfaceValue($.functionValue(async (clientConfig: transport.ClientConfig | null, structField: reflect.StructField): globalThis.Promise<DomainAPIYARPCClient | null> => {
		return await NewDomainAPIYARPCClient(clientConfig, protobuf.ClientBuilderOptions(clientConfig, structField))
	}, ({ kind: $.TypeKind.Function, params: ["transport.ClientConfig", "reflect.StructField"], results: ["apiv1.DomainAPIYARPCClient"] } as $.FunctionTypeInfo)), "func(clientConfig transport.ClientConfig, structField reflect.StructField) apiv1.DomainAPIYARPCClient", ({ kind: $.TypeKind.Function, params: ["transport.ClientConfig", "reflect.StructField"], results: ["apiv1.DomainAPIYARPCClient"] } as $.FunctionTypeInfo)))
}

var __goscriptAwait: any

export { __goscriptInit0 }
