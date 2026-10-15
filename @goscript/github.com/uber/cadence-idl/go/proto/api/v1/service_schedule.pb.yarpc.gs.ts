// Generated file based on service_schedule.pb.yarpc.go
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

import type * as io from "@goscript/io/index.js"

import * as __goscript_common_pb from "./common.pb.gs.ts"

import * as __goscript_schedule_pb from "./schedule.pb.gs.ts"

import * as __goscript_service_schedule_pb from "./service_schedule.pb.gs.ts"

import * as __goscript_tasklist_pb from "./tasklist.pb.gs.ts"
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
import "./common.pb.gs.ts"
import "./schedule.pb.gs.ts"
import "./service_schedule.pb.gs.ts"
import "./tasklist.pb.gs.ts"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.ScheduleAPIYARPCClient", "apiv1.ScheduleAPIYARPCServer", "apiv1.buildScheduleAPIYARPCProceduresParams", "apiv1.FxScheduleAPIYARPCClientParams", "apiv1.FxScheduleAPIYARPCClientResult", "apiv1.FxScheduleAPIYARPCProceduresParams", "apiv1.FxScheduleAPIYARPCProceduresResult", "apiv1._ScheduleAPIYARPCCaller", "apiv1._ScheduleAPIYARPCHandler"])

export type ScheduleAPIYARPCClient = {
	BackfillSchedule(_p0: context.Context | null, _p1: __goscript_service_schedule_pb.BackfillScheduleRequest | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_schedule_pb.BackfillScheduleResponse | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_schedule_pb.BackfillScheduleResponse | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleResponse> | null, $.GoError]>
	CreateSchedule(_p0: context.Context | null, _p1: __goscript_service_schedule_pb.CreateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.CreateScheduleRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_schedule_pb.CreateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.CreateScheduleResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_schedule_pb.CreateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.CreateScheduleResponse> | null, $.GoError]>
	DeleteSchedule(_p0: context.Context | null, _p1: __goscript_service_schedule_pb.DeleteScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_schedule_pb.DeleteScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_schedule_pb.DeleteScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleResponse> | null, $.GoError]>
	DescribeSchedule(_p0: context.Context | null, _p1: __goscript_service_schedule_pb.DescribeScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_schedule_pb.DescribeScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_schedule_pb.DescribeScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleResponse> | null, $.GoError]>
	ListSchedules(_p0: context.Context | null, _p1: __goscript_service_schedule_pb.ListSchedulesRequest | $.VarRef<__goscript_service_schedule_pb.ListSchedulesRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_schedule_pb.ListSchedulesResponse | $.VarRef<__goscript_service_schedule_pb.ListSchedulesResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_schedule_pb.ListSchedulesResponse | $.VarRef<__goscript_service_schedule_pb.ListSchedulesResponse> | null, $.GoError]>
	PauseSchedule(_p0: context.Context | null, _p1: __goscript_service_schedule_pb.PauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.PauseScheduleRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_schedule_pb.PauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.PauseScheduleResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_schedule_pb.PauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.PauseScheduleResponse> | null, $.GoError]>
	UnpauseSchedule(_p0: context.Context | null, _p1: __goscript_service_schedule_pb.UnpauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_schedule_pb.UnpauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_schedule_pb.UnpauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleResponse> | null, $.GoError]>
	UpdateSchedule(_p0: context.Context | null, _p1: __goscript_service_schedule_pb.UpdateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_schedule_pb.UpdateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_schedule_pb.UpdateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleResponse> | null, $.GoError]>
}

$.registerInterfaceType(
	"apiv1.ScheduleAPIYARPCClient",
	null,
	[{ name: "BackfillSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleResponse") }, { type: "error" }] }, { name: "CreateSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleResponse") }, { type: "error" }] }, { name: "DeleteSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleResponse") }, { type: "error" }] }, { name: "DescribeSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleResponse") }, { type: "error" }] }, { name: "ListSchedules", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesResponse") }, { type: "error" }] }, { name: "PauseSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleResponse") }, { type: "error" }] }, { name: "UnpauseSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleResponse") }, { type: "error" }] }, { name: "UpdateSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleResponse") }, { type: "error" }] }]
);

export type ScheduleAPIYARPCServer = {
	BackfillSchedule(_p0: context.Context | null, _p1: __goscript_service_schedule_pb.BackfillScheduleRequest | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleRequest> | null): [__goscript_service_schedule_pb.BackfillScheduleResponse | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleResponse> | null, $.GoError]
	CreateSchedule(_p0: context.Context | null, _p1: __goscript_service_schedule_pb.CreateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.CreateScheduleRequest> | null): [__goscript_service_schedule_pb.CreateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.CreateScheduleResponse> | null, $.GoError]
	DeleteSchedule(_p0: context.Context | null, _p1: __goscript_service_schedule_pb.DeleteScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleRequest> | null): [__goscript_service_schedule_pb.DeleteScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleResponse> | null, $.GoError]
	DescribeSchedule(_p0: context.Context | null, _p1: __goscript_service_schedule_pb.DescribeScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleRequest> | null): [__goscript_service_schedule_pb.DescribeScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleResponse> | null, $.GoError]
	ListSchedules(_p0: context.Context | null, _p1: __goscript_service_schedule_pb.ListSchedulesRequest | $.VarRef<__goscript_service_schedule_pb.ListSchedulesRequest> | null): [__goscript_service_schedule_pb.ListSchedulesResponse | $.VarRef<__goscript_service_schedule_pb.ListSchedulesResponse> | null, $.GoError]
	PauseSchedule(_p0: context.Context | null, _p1: __goscript_service_schedule_pb.PauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.PauseScheduleRequest> | null): [__goscript_service_schedule_pb.PauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.PauseScheduleResponse> | null, $.GoError]
	UnpauseSchedule(_p0: context.Context | null, _p1: __goscript_service_schedule_pb.UnpauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleRequest> | null): [__goscript_service_schedule_pb.UnpauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleResponse> | null, $.GoError]
	UpdateSchedule(_p0: context.Context | null, _p1: __goscript_service_schedule_pb.UpdateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleRequest> | null): [__goscript_service_schedule_pb.UpdateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleResponse> | null, $.GoError]
}

$.registerInterfaceType(
	"apiv1.ScheduleAPIYARPCServer",
	null,
	[{ name: "BackfillSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleResponse") }, { type: "error" }] }, { name: "CreateSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleResponse") }, { type: "error" }] }, { name: "DeleteSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleResponse") }, { type: "error" }] }, { name: "DescribeSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleResponse") }, { type: "error" }] }, { name: "ListSchedules", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesResponse") }, { type: "error" }] }, { name: "PauseSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleResponse") }, { type: "error" }] }, { name: "UnpauseSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleResponse") }, { type: "error" }] }, { name: "UpdateSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleResponse") }, { type: "error" }] }]
);

export class buildScheduleAPIYARPCProceduresParams {
	public get Server(): ScheduleAPIYARPCServer | null {
		return this._fields.Server
	}

	public set Server(value: ScheduleAPIYARPCServer | null) {
		this._fields.Server = value
	}

	public get AnyResolver(): jsonpb.AnyResolver | null {
		return this._fields.AnyResolver
	}

	public set AnyResolver(value: jsonpb.AnyResolver | null) {
		this._fields.AnyResolver = value
	}

	public _fields: {
		Server: ScheduleAPIYARPCServer | null
		AnyResolver: jsonpb.AnyResolver | null
	}

	constructor(init?: Partial<{Server?: ScheduleAPIYARPCServer | null, AnyResolver?: jsonpb.AnyResolver | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Server: init?.Server ?? (null! as ScheduleAPIYARPCServer | null),
			AnyResolver: init?.AnyResolver ?? (null! as jsonpb.AnyResolver | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): buildScheduleAPIYARPCProceduresParams {
		return new buildScheduleAPIYARPCProceduresParams(this, true)
	}

	public __goscriptAssign(source: buildScheduleAPIYARPCProceduresParams): void {
		const target = this._fields
		const values = source._fields
		target.Server = $.assignFieldValue(target.Server, values.Server, "apiv1.ScheduleAPIYARPCServer")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.buildScheduleAPIYARPCProceduresParams",
		() => new buildScheduleAPIYARPCProceduresParams(),
		() => [],
		buildScheduleAPIYARPCProceduresParams,
		() => [{ name: "Server", key: "Server", type: "apiv1.ScheduleAPIYARPCServer" }, { name: "AnyResolver", key: "AnyResolver", type: "jsonpb.AnyResolver" }]
	)
}

export class FxScheduleAPIYARPCClientParams {
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
			In: init?.In ?? (undefined as any as fx.In),
			Provider: init?.Provider ?? (null! as yarpc.ClientConfig | null),
			AnyResolver: init?.AnyResolver ?? (null! as jsonpb.AnyResolver | null),
			Restriction: init?.Restriction ?? (null! as restriction.Checker | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FxScheduleAPIYARPCClientParams {
		return new FxScheduleAPIYARPCClientParams(this, true)
	}

	public __goscriptAssign(source: FxScheduleAPIYARPCClientParams): void {
		const target = this._fields
		const values = source._fields
		target.In = $.assignFieldValue(target.In, values.In, "dig.In")
		target.Provider = $.assignFieldValue(target.Provider, values.Provider, "yarpc.ClientConfig")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
		target.Restriction = $.assignFieldValue(target.Restriction, values.Restriction, "restriction.Checker")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxScheduleAPIYARPCClientParams",
		() => new FxScheduleAPIYARPCClientParams(),
		() => [],
		FxScheduleAPIYARPCClientParams,
		() => [{ name: "In", key: "In", type: "dig.In", anonymous: true }, { name: "Provider", key: "Provider", type: "yarpc.ClientConfig" }, { name: "AnyResolver", key: "AnyResolver", type: "jsonpb.AnyResolver", tag: "name:\"yarpcfx\" optional:\"true\"" }, { name: "Restriction", key: "Restriction", type: "restriction.Checker", tag: "optional:\"true\"" }]
	)
}

export class FxScheduleAPIYARPCClientResult {
	public get Out(): fx.Out {
		return this._fields.Out
	}

	public set Out(value: fx.Out) {
		this._fields.Out = value
	}

	public get Client(): ScheduleAPIYARPCClient | null {
		return this._fields.Client
	}

	public set Client(value: ScheduleAPIYARPCClient | null) {
		this._fields.Client = value
	}

	public _fields: {
		Out: fx.Out
		Client: ScheduleAPIYARPCClient | null
	}

	constructor(init?: Partial<{Out?: fx.Out, Client?: ScheduleAPIYARPCClient | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Out: init?.Out ?? (undefined as any as fx.Out),
			Client: init?.Client ?? (null! as ScheduleAPIYARPCClient | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FxScheduleAPIYARPCClientResult {
		return new FxScheduleAPIYARPCClientResult(this, true)
	}

	public __goscriptAssign(source: FxScheduleAPIYARPCClientResult): void {
		const target = this._fields
		const values = source._fields
		target.Out = $.assignFieldValue(target.Out, values.Out, "dig.Out")
		target.Client = $.assignFieldValue(target.Client, values.Client, "apiv1.ScheduleAPIYARPCClient")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxScheduleAPIYARPCClientResult",
		() => new FxScheduleAPIYARPCClientResult(),
		() => [],
		FxScheduleAPIYARPCClientResult,
		() => [{ name: "Out", key: "Out", type: "dig.Out", anonymous: true }, { name: "Client", key: "Client", type: "apiv1.ScheduleAPIYARPCClient" }]
	)
}

export class FxScheduleAPIYARPCProceduresParams {
	public get In(): fx.In {
		return this._fields.In
	}

	public set In(value: fx.In) {
		this._fields.In = value
	}

	public get Server(): ScheduleAPIYARPCServer | null {
		return this._fields.Server
	}

	public set Server(value: ScheduleAPIYARPCServer | null) {
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
		Server: ScheduleAPIYARPCServer | null
		AnyResolver: jsonpb.AnyResolver | null
	}

	constructor(init?: Partial<{In?: fx.In, Server?: ScheduleAPIYARPCServer | null, AnyResolver?: jsonpb.AnyResolver | null}>, __goscriptValue?: boolean) {
		this._fields = {
			In: init?.In ?? (undefined as any as fx.In),
			Server: init?.Server ?? (null! as ScheduleAPIYARPCServer | null),
			AnyResolver: init?.AnyResolver ?? (null! as jsonpb.AnyResolver | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FxScheduleAPIYARPCProceduresParams {
		return new FxScheduleAPIYARPCProceduresParams(this, true)
	}

	public __goscriptAssign(source: FxScheduleAPIYARPCProceduresParams): void {
		const target = this._fields
		const values = source._fields
		target.In = $.assignFieldValue(target.In, values.In, "dig.In")
		target.Server = $.assignFieldValue(target.Server, values.Server, "apiv1.ScheduleAPIYARPCServer")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxScheduleAPIYARPCProceduresParams",
		() => new FxScheduleAPIYARPCProceduresParams(),
		() => [],
		FxScheduleAPIYARPCProceduresParams,
		() => [{ name: "In", key: "In", type: "dig.In", anonymous: true }, { name: "Server", key: "Server", type: "apiv1.ScheduleAPIYARPCServer" }, { name: "AnyResolver", key: "AnyResolver", type: "jsonpb.AnyResolver", tag: "name:\"yarpcfx\" optional:\"true\"" }]
	)
}

export class FxScheduleAPIYARPCProceduresResult {
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
			Out: init?.Out ?? (undefined as any as fx.Out),
			Procedures: init?.Procedures ?? (null! as $.Slice<transport.Procedure>),
			ReflectionMeta: init?.ReflectionMeta ? init.ReflectionMeta.clone() : new reflection.ServerMeta(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FxScheduleAPIYARPCProceduresResult {
		return new FxScheduleAPIYARPCProceduresResult(this, true)
	}

	public __goscriptAssign(source: FxScheduleAPIYARPCProceduresResult): void {
		const target = this._fields
		const values = source._fields
		target.Out = $.assignFieldValue(target.Out, values.Out, "dig.Out")
		target.Procedures = values.Procedures
		$.assignStruct(target.ReflectionMeta, values.ReflectionMeta)
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxScheduleAPIYARPCProceduresResult",
		() => new FxScheduleAPIYARPCProceduresResult(),
		() => [],
		FxScheduleAPIYARPCProceduresResult,
		() => [{ name: "Out", key: "Out", type: "dig.Out", anonymous: true }, { name: "Procedures", key: "Procedures", type: /* @__PURE__ */ $.sliceType("transport.Procedure"), tag: "group:\"yarpcfx\"" }, { name: "ReflectionMeta", key: "ReflectionMeta", type: "reflection.ServerMeta", tag: "group:\"yarpcfx\"" }]
	)
}

export class _ScheduleAPIYARPCCaller {
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

	public clone(): _ScheduleAPIYARPCCaller {
		return new _ScheduleAPIYARPCCaller(this, true)
	}

	public __goscriptAssign(source: _ScheduleAPIYARPCCaller): void {
		const target = this._fields
		const values = source._fields
		target.streamClient = $.assignFieldValue(target.streamClient, values.streamClient, "protobuf.StreamClient")
	}

	public async BackfillSchedule(ctx: context.Context | null, request: __goscript_service_schedule_pb.BackfillScheduleRequest | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_schedule_pb.BackfillScheduleResponse | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleResponse> | null, $.GoError]> {
		const c: _ScheduleAPIYARPCCaller | $.VarRef<_ScheduleAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_ScheduleAPIYARPCCaller>(c).streamClient).Call(ctx, "BackfillSchedule", $.interfaceValue<proto.Message | null>(request, "*apiv1.BackfillScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleRequest")), newScheduleAPIServiceBackfillScheduleYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple0: any = $.typeAssertTuple<__goscript_service_schedule_pb.BackfillScheduleResponse | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleResponse"))
		let response: __goscript_service_schedule_pb.BackfillScheduleResponse | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleResponse> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyScheduleAPIServiceBackfillScheduleYARPCResponse(), "*apiv1.BackfillScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async CreateSchedule(ctx: context.Context | null, request: __goscript_service_schedule_pb.CreateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.CreateScheduleRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_schedule_pb.CreateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.CreateScheduleResponse> | null, $.GoError]> {
		const c: _ScheduleAPIYARPCCaller | $.VarRef<_ScheduleAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_ScheduleAPIYARPCCaller>(c).streamClient).Call(ctx, "CreateSchedule", $.interfaceValue<proto.Message | null>(request, "*apiv1.CreateScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleRequest")), newScheduleAPIServiceCreateScheduleYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple1: any = $.typeAssertTuple<__goscript_service_schedule_pb.CreateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.CreateScheduleResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleResponse"))
		let response: __goscript_service_schedule_pb.CreateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.CreateScheduleResponse> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyScheduleAPIServiceCreateScheduleYARPCResponse(), "*apiv1.CreateScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async DeleteSchedule(ctx: context.Context | null, request: __goscript_service_schedule_pb.DeleteScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_schedule_pb.DeleteScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleResponse> | null, $.GoError]> {
		const c: _ScheduleAPIYARPCCaller | $.VarRef<_ScheduleAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_ScheduleAPIYARPCCaller>(c).streamClient).Call(ctx, "DeleteSchedule", $.interfaceValue<proto.Message | null>(request, "*apiv1.DeleteScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleRequest")), newScheduleAPIServiceDeleteScheduleYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple2: any = $.typeAssertTuple<__goscript_service_schedule_pb.DeleteScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleResponse"))
		let response: __goscript_service_schedule_pb.DeleteScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleResponse> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyScheduleAPIServiceDeleteScheduleYARPCResponse(), "*apiv1.DeleteScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async DescribeSchedule(ctx: context.Context | null, request: __goscript_service_schedule_pb.DescribeScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_schedule_pb.DescribeScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleResponse> | null, $.GoError]> {
		const c: _ScheduleAPIYARPCCaller | $.VarRef<_ScheduleAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_ScheduleAPIYARPCCaller>(c).streamClient).Call(ctx, "DescribeSchedule", $.interfaceValue<proto.Message | null>(request, "*apiv1.DescribeScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleRequest")), newScheduleAPIServiceDescribeScheduleYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple3: any = $.typeAssertTuple<__goscript_service_schedule_pb.DescribeScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleResponse"))
		let response: __goscript_service_schedule_pb.DescribeScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleResponse> | null = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyScheduleAPIServiceDescribeScheduleYARPCResponse(), "*apiv1.DescribeScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async ListSchedules(ctx: context.Context | null, request: __goscript_service_schedule_pb.ListSchedulesRequest | $.VarRef<__goscript_service_schedule_pb.ListSchedulesRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_schedule_pb.ListSchedulesResponse | $.VarRef<__goscript_service_schedule_pb.ListSchedulesResponse> | null, $.GoError]> {
		const c: _ScheduleAPIYARPCCaller | $.VarRef<_ScheduleAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_ScheduleAPIYARPCCaller>(c).streamClient).Call(ctx, "ListSchedules", $.interfaceValue<proto.Message | null>(request, "*apiv1.ListSchedulesRequest", /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesRequest")), newScheduleAPIServiceListSchedulesYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple4: any = $.typeAssertTuple<__goscript_service_schedule_pb.ListSchedulesResponse | $.VarRef<__goscript_service_schedule_pb.ListSchedulesResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesResponse"))
		let response: __goscript_service_schedule_pb.ListSchedulesResponse | $.VarRef<__goscript_service_schedule_pb.ListSchedulesResponse> | null = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyScheduleAPIServiceListSchedulesYARPCResponse(), "*apiv1.ListSchedulesResponse", /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async PauseSchedule(ctx: context.Context | null, request: __goscript_service_schedule_pb.PauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.PauseScheduleRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_schedule_pb.PauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.PauseScheduleResponse> | null, $.GoError]> {
		const c: _ScheduleAPIYARPCCaller | $.VarRef<_ScheduleAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_ScheduleAPIYARPCCaller>(c).streamClient).Call(ctx, "PauseSchedule", $.interfaceValue<proto.Message | null>(request, "*apiv1.PauseScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleRequest")), newScheduleAPIServicePauseScheduleYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple5: any = $.typeAssertTuple<__goscript_service_schedule_pb.PauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.PauseScheduleResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleResponse"))
		let response: __goscript_service_schedule_pb.PauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.PauseScheduleResponse> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyScheduleAPIServicePauseScheduleYARPCResponse(), "*apiv1.PauseScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async UnpauseSchedule(ctx: context.Context | null, request: __goscript_service_schedule_pb.UnpauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_schedule_pb.UnpauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleResponse> | null, $.GoError]> {
		const c: _ScheduleAPIYARPCCaller | $.VarRef<_ScheduleAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_ScheduleAPIYARPCCaller>(c).streamClient).Call(ctx, "UnpauseSchedule", $.interfaceValue<proto.Message | null>(request, "*apiv1.UnpauseScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleRequest")), newScheduleAPIServiceUnpauseScheduleYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple6: any = $.typeAssertTuple<__goscript_service_schedule_pb.UnpauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleResponse"))
		let response: __goscript_service_schedule_pb.UnpauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleResponse> | null = __goscriptTuple6[0]
		let ok = __goscriptTuple6[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyScheduleAPIServiceUnpauseScheduleYARPCResponse(), "*apiv1.UnpauseScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async UpdateSchedule(ctx: context.Context | null, request: __goscript_service_schedule_pb.UpdateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_schedule_pb.UpdateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleResponse> | null, $.GoError]> {
		const c: _ScheduleAPIYARPCCaller | $.VarRef<_ScheduleAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_ScheduleAPIYARPCCaller>(c).streamClient).Call(ctx, "UpdateSchedule", $.interfaceValue<proto.Message | null>(request, "*apiv1.UpdateScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleRequest")), newScheduleAPIServiceUpdateScheduleYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple7: any = $.typeAssertTuple<__goscript_service_schedule_pb.UpdateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleResponse"))
		let response: __goscript_service_schedule_pb.UpdateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleResponse> | null = __goscriptTuple7[0]
		let ok = __goscriptTuple7[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyScheduleAPIServiceUpdateScheduleYARPCResponse(), "*apiv1.UpdateScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleResponse")), responseMessage)]
		}
		return [response, err]
	}

	static __typeInfo = $.registerStructType(
		"apiv1._ScheduleAPIYARPCCaller",
		() => new _ScheduleAPIYARPCCaller(),
		() => [{ name: "BackfillSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleResponse") }, { type: "error" }], pointerReceiver: true }, { name: "CreateSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleResponse") }, { type: "error" }], pointerReceiver: true }, { name: "DeleteSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleResponse") }, { type: "error" }], pointerReceiver: true }, { name: "DescribeSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleResponse") }, { type: "error" }], pointerReceiver: true }, { name: "ListSchedules", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesResponse") }, { type: "error" }], pointerReceiver: true }, { name: "PauseSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleResponse") }, { type: "error" }], pointerReceiver: true }, { name: "UnpauseSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleResponse") }, { type: "error" }], pointerReceiver: true }, { name: "UpdateSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleResponse") }, { type: "error" }], pointerReceiver: true }],
		_ScheduleAPIYARPCCaller,
		() => [{ name: "streamClient", key: "streamClient", type: "protobuf.StreamClient" }]
	)
}

export class _ScheduleAPIYARPCHandler {
	public get server(): ScheduleAPIYARPCServer | null {
		return this._fields.server
	}

	public set server(value: ScheduleAPIYARPCServer | null) {
		this._fields.server = value
	}

	public _fields: {
		server: ScheduleAPIYARPCServer | null
	}

	constructor(init?: Partial<{server?: ScheduleAPIYARPCServer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			server: init?.server ?? (null! as ScheduleAPIYARPCServer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): _ScheduleAPIYARPCHandler {
		return new _ScheduleAPIYARPCHandler(this, true)
	}

	public __goscriptAssign(source: _ScheduleAPIYARPCHandler): void {
		const target = this._fields
		const values = source._fields
		target.server = $.assignFieldValue(target.server, values.server, "apiv1.ScheduleAPIYARPCServer")
	}

	public async BackfillSchedule(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _ScheduleAPIYARPCHandler | $.VarRef<_ScheduleAPIYARPCHandler> | null = this;
		let request: __goscript_service_schedule_pb.BackfillScheduleRequest | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleRequest> | null = null! as __goscript_service_schedule_pb.BackfillScheduleRequest | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple8: any = $.typeAssertTuple<__goscript_service_schedule_pb.BackfillScheduleRequest | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleRequest"))
			request = __goscriptTuple8[0]
			ok = __goscriptTuple8[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyScheduleAPIServiceBackfillScheduleYARPCRequest(), "*apiv1.BackfillScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleRequest")), requestMessage)]
			}
		}
		let __goscriptTuple9: any = await $.pointerValue<Exclude<ScheduleAPIYARPCServer, null>>($.pointerValue<_ScheduleAPIYARPCHandler>(h).server).BackfillSchedule(ctx, request)
		let response: __goscript_service_schedule_pb.BackfillScheduleResponse | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleResponse> | null = __goscriptTuple9[0]
		let err = __goscriptTuple9[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.BackfillScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleResponse")), err]
	}

	public async CreateSchedule(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _ScheduleAPIYARPCHandler | $.VarRef<_ScheduleAPIYARPCHandler> | null = this;
		let request: __goscript_service_schedule_pb.CreateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.CreateScheduleRequest> | null = null! as __goscript_service_schedule_pb.CreateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.CreateScheduleRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple10: any = $.typeAssertTuple<__goscript_service_schedule_pb.CreateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.CreateScheduleRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleRequest"))
			request = __goscriptTuple10[0]
			ok = __goscriptTuple10[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyScheduleAPIServiceCreateScheduleYARPCRequest(), "*apiv1.CreateScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleRequest")), requestMessage)]
			}
		}
		let __goscriptTuple11: any = await $.pointerValue<Exclude<ScheduleAPIYARPCServer, null>>($.pointerValue<_ScheduleAPIYARPCHandler>(h).server).CreateSchedule(ctx, request)
		let response: __goscript_service_schedule_pb.CreateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.CreateScheduleResponse> | null = __goscriptTuple11[0]
		let err = __goscriptTuple11[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.CreateScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleResponse")), err]
	}

	public async DeleteSchedule(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _ScheduleAPIYARPCHandler | $.VarRef<_ScheduleAPIYARPCHandler> | null = this;
		let request: __goscript_service_schedule_pb.DeleteScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleRequest> | null = null! as __goscript_service_schedule_pb.DeleteScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple12: any = $.typeAssertTuple<__goscript_service_schedule_pb.DeleteScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleRequest"))
			request = __goscriptTuple12[0]
			ok = __goscriptTuple12[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyScheduleAPIServiceDeleteScheduleYARPCRequest(), "*apiv1.DeleteScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleRequest")), requestMessage)]
			}
		}
		let __goscriptTuple13: any = await $.pointerValue<Exclude<ScheduleAPIYARPCServer, null>>($.pointerValue<_ScheduleAPIYARPCHandler>(h).server).DeleteSchedule(ctx, request)
		let response: __goscript_service_schedule_pb.DeleteScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleResponse> | null = __goscriptTuple13[0]
		let err = __goscriptTuple13[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.DeleteScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleResponse")), err]
	}

	public async DescribeSchedule(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _ScheduleAPIYARPCHandler | $.VarRef<_ScheduleAPIYARPCHandler> | null = this;
		let request: __goscript_service_schedule_pb.DescribeScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleRequest> | null = null! as __goscript_service_schedule_pb.DescribeScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple14: any = $.typeAssertTuple<__goscript_service_schedule_pb.DescribeScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleRequest"))
			request = __goscriptTuple14[0]
			ok = __goscriptTuple14[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyScheduleAPIServiceDescribeScheduleYARPCRequest(), "*apiv1.DescribeScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleRequest")), requestMessage)]
			}
		}
		let __goscriptTuple15: any = await $.pointerValue<Exclude<ScheduleAPIYARPCServer, null>>($.pointerValue<_ScheduleAPIYARPCHandler>(h).server).DescribeSchedule(ctx, request)
		let response: __goscript_service_schedule_pb.DescribeScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleResponse> | null = __goscriptTuple15[0]
		let err = __goscriptTuple15[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.DescribeScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleResponse")), err]
	}

	public async ListSchedules(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _ScheduleAPIYARPCHandler | $.VarRef<_ScheduleAPIYARPCHandler> | null = this;
		let request: __goscript_service_schedule_pb.ListSchedulesRequest | $.VarRef<__goscript_service_schedule_pb.ListSchedulesRequest> | null = null! as __goscript_service_schedule_pb.ListSchedulesRequest | $.VarRef<__goscript_service_schedule_pb.ListSchedulesRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple16: any = $.typeAssertTuple<__goscript_service_schedule_pb.ListSchedulesRequest | $.VarRef<__goscript_service_schedule_pb.ListSchedulesRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesRequest"))
			request = __goscriptTuple16[0]
			ok = __goscriptTuple16[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyScheduleAPIServiceListSchedulesYARPCRequest(), "*apiv1.ListSchedulesRequest", /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesRequest")), requestMessage)]
			}
		}
		let __goscriptTuple17: any = await $.pointerValue<Exclude<ScheduleAPIYARPCServer, null>>($.pointerValue<_ScheduleAPIYARPCHandler>(h).server).ListSchedules(ctx, request)
		let response: __goscript_service_schedule_pb.ListSchedulesResponse | $.VarRef<__goscript_service_schedule_pb.ListSchedulesResponse> | null = __goscriptTuple17[0]
		let err = __goscriptTuple17[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.ListSchedulesResponse", /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesResponse")), err]
	}

	public async PauseSchedule(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _ScheduleAPIYARPCHandler | $.VarRef<_ScheduleAPIYARPCHandler> | null = this;
		let request: __goscript_service_schedule_pb.PauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.PauseScheduleRequest> | null = null! as __goscript_service_schedule_pb.PauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.PauseScheduleRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple18: any = $.typeAssertTuple<__goscript_service_schedule_pb.PauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.PauseScheduleRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleRequest"))
			request = __goscriptTuple18[0]
			ok = __goscriptTuple18[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyScheduleAPIServicePauseScheduleYARPCRequest(), "*apiv1.PauseScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleRequest")), requestMessage)]
			}
		}
		let __goscriptTuple19: any = await $.pointerValue<Exclude<ScheduleAPIYARPCServer, null>>($.pointerValue<_ScheduleAPIYARPCHandler>(h).server).PauseSchedule(ctx, request)
		let response: __goscript_service_schedule_pb.PauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.PauseScheduleResponse> | null = __goscriptTuple19[0]
		let err = __goscriptTuple19[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.PauseScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleResponse")), err]
	}

	public async UnpauseSchedule(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _ScheduleAPIYARPCHandler | $.VarRef<_ScheduleAPIYARPCHandler> | null = this;
		let request: __goscript_service_schedule_pb.UnpauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleRequest> | null = null! as __goscript_service_schedule_pb.UnpauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple20: any = $.typeAssertTuple<__goscript_service_schedule_pb.UnpauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleRequest"))
			request = __goscriptTuple20[0]
			ok = __goscriptTuple20[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyScheduleAPIServiceUnpauseScheduleYARPCRequest(), "*apiv1.UnpauseScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleRequest")), requestMessage)]
			}
		}
		let __goscriptTuple21: any = await $.pointerValue<Exclude<ScheduleAPIYARPCServer, null>>($.pointerValue<_ScheduleAPIYARPCHandler>(h).server).UnpauseSchedule(ctx, request)
		let response: __goscript_service_schedule_pb.UnpauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleResponse> | null = __goscriptTuple21[0]
		let err = __goscriptTuple21[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.UnpauseScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleResponse")), err]
	}

	public async UpdateSchedule(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _ScheduleAPIYARPCHandler | $.VarRef<_ScheduleAPIYARPCHandler> | null = this;
		let request: __goscript_service_schedule_pb.UpdateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleRequest> | null = null! as __goscript_service_schedule_pb.UpdateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple22: any = $.typeAssertTuple<__goscript_service_schedule_pb.UpdateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleRequest"))
			request = __goscriptTuple22[0]
			ok = __goscriptTuple22[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyScheduleAPIServiceUpdateScheduleYARPCRequest(), "*apiv1.UpdateScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleRequest")), requestMessage)]
			}
		}
		let __goscriptTuple23: any = await $.pointerValue<Exclude<ScheduleAPIYARPCServer, null>>($.pointerValue<_ScheduleAPIYARPCHandler>(h).server).UpdateSchedule(ctx, request)
		let response: __goscript_service_schedule_pb.UpdateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleResponse> | null = __goscriptTuple23[0]
		let err = __goscriptTuple23[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.UpdateScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleResponse")), err]
	}

	static __typeInfo = $.registerStructType(
		"apiv1._ScheduleAPIYARPCHandler",
		() => new _ScheduleAPIYARPCHandler(),
		() => [{ name: "BackfillSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "proto.Message" }, { type: "error" }], pointerReceiver: true }, { name: "CreateSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "proto.Message" }, { type: "error" }], pointerReceiver: true }, { name: "DeleteSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "proto.Message" }, { type: "error" }], pointerReceiver: true }, { name: "DescribeSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "proto.Message" }, { type: "error" }], pointerReceiver: true }, { name: "ListSchedules", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "proto.Message" }, { type: "error" }], pointerReceiver: true }, { name: "PauseSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "proto.Message" }, { type: "error" }], pointerReceiver: true }, { name: "UnpauseSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "proto.Message" }, { type: "error" }], pointerReceiver: true }, { name: "UpdateSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "proto.Message" }, { type: "error" }], pointerReceiver: true }],
		_ScheduleAPIYARPCHandler,
		() => [{ name: "server", key: "server", type: "apiv1.ScheduleAPIYARPCServer" }]
	)
}

export async function newScheduleAPIYARPCClient(clientConfig: transport.ClientConfig | null, anyResolver: jsonpb.AnyResolver | null, options: $.Slice<protobuf.ClientOption | null>): globalThis.Promise<ScheduleAPIYARPCClient | null> {
	const streamClient = await protobuf.NewStreamClient(new protobuf.ClientParams({ServiceName: "uber.cadence.api.v1.ScheduleAPI", ClientConfig: clientConfig, AnyResolver: anyResolver, Options: options}, true))
	return $.interfaceValue<ScheduleAPIYARPCClient | null>(new _ScheduleAPIYARPCCaller({streamClient}), "*apiv1._ScheduleAPIYARPCCaller", /* @__PURE__ */ $.pointerType("apiv1._ScheduleAPIYARPCCaller"))
}

export async function NewScheduleAPIYARPCClient(clientConfig: transport.ClientConfig | null, options: $.Slice<protobuf.ClientOption | null>): globalThis.Promise<ScheduleAPIYARPCClient | null> {
	return await newScheduleAPIYARPCClient(clientConfig, null, options)
}

export function buildScheduleAPIYARPCProcedures(params: buildScheduleAPIYARPCProceduresParams): $.Slice<transport.Procedure> {
	let handler: _ScheduleAPIYARPCHandler | $.VarRef<_ScheduleAPIYARPCHandler> | null = new _ScheduleAPIYARPCHandler({server: params.Server})
	return protobuf.BuildProcedures(new protobuf.BuildProceduresParams({ServiceName: "uber.cadence.api.v1.ScheduleAPI", UnaryHandlerParams: $.arrayToSlice<protobuf.BuildProceduresUnaryHandlerParams>([(() => { const __goscriptLiteralField1 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.CreateSchedule(ctx, requestMessage))($.pointerValue<_ScheduleAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_ScheduleAPIYARPCHandler).CreateSchedule-fm"), NewRequest: newScheduleAPIServiceCreateScheduleYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "CreateSchedule", Handler: __goscriptLiteralField1}, true) })(), (() => { const __goscriptLiteralField2 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.DescribeSchedule(ctx, requestMessage))($.pointerValue<_ScheduleAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_ScheduleAPIYARPCHandler).DescribeSchedule-fm"), NewRequest: newScheduleAPIServiceDescribeScheduleYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "DescribeSchedule", Handler: __goscriptLiteralField2}, true) })(), (() => { const __goscriptLiteralField3 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.ListSchedules(ctx, requestMessage))($.pointerValue<_ScheduleAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_ScheduleAPIYARPCHandler).ListSchedules-fm"), NewRequest: newScheduleAPIServiceListSchedulesYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "ListSchedules", Handler: __goscriptLiteralField3}, true) })(), (() => { const __goscriptLiteralField4 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.DeleteSchedule(ctx, requestMessage))($.pointerValue<_ScheduleAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_ScheduleAPIYARPCHandler).DeleteSchedule-fm"), NewRequest: newScheduleAPIServiceDeleteScheduleYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "DeleteSchedule", Handler: __goscriptLiteralField4}, true) })(), (() => { const __goscriptLiteralField5 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.PauseSchedule(ctx, requestMessage))($.pointerValue<_ScheduleAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_ScheduleAPIYARPCHandler).PauseSchedule-fm"), NewRequest: newScheduleAPIServicePauseScheduleYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "PauseSchedule", Handler: __goscriptLiteralField5}, true) })(), (() => { const __goscriptLiteralField6 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.UnpauseSchedule(ctx, requestMessage))($.pointerValue<_ScheduleAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_ScheduleAPIYARPCHandler).UnpauseSchedule-fm"), NewRequest: newScheduleAPIServiceUnpauseScheduleYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "UnpauseSchedule", Handler: __goscriptLiteralField6}, true) })(), (() => { const __goscriptLiteralField7 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.BackfillSchedule(ctx, requestMessage))($.pointerValue<_ScheduleAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_ScheduleAPIYARPCHandler).BackfillSchedule-fm"), NewRequest: newScheduleAPIServiceBackfillScheduleYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "BackfillSchedule", Handler: __goscriptLiteralField7}, true) })(), (() => { const __goscriptLiteralField8 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.UpdateSchedule(ctx, requestMessage))($.pointerValue<_ScheduleAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_ScheduleAPIYARPCHandler).UpdateSchedule-fm"), NewRequest: newScheduleAPIServiceUpdateScheduleYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "UpdateSchedule", Handler: __goscriptLiteralField8}, true) })()]), OnewayHandlerParams: $.arrayToSlice<protobuf.BuildProceduresOnewayHandlerParams>([]), StreamHandlerParams: $.arrayToSlice<protobuf.BuildProceduresStreamHandlerParams>([])}, true))
}

export function BuildScheduleAPIYARPCProcedures(server: ScheduleAPIYARPCServer | null): $.Slice<transport.Procedure> {
	return buildScheduleAPIYARPCProcedures(new buildScheduleAPIYARPCProceduresParams({Server: server}, true))
}

export function NewFxScheduleAPIYARPCClient(name: string, options: $.Slice<protobuf.ClientOption | null>): any {
	return $.interfaceValue($.functionValue(async (params: FxScheduleAPIYARPCClientParams): globalThis.Promise<FxScheduleAPIYARPCClientResult> => {
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

		const client = await newScheduleAPIYARPCClient(cc, params.AnyResolver, options)
		return new FxScheduleAPIYARPCClientResult({Client: client}, true)
	}, ({ kind: $.TypeKind.Function, params: ["apiv1.FxScheduleAPIYARPCClientParams"], results: ["apiv1.FxScheduleAPIYARPCClientResult"] } as $.FunctionTypeInfo)), "func(params apiv1.FxScheduleAPIYARPCClientParams) apiv1.FxScheduleAPIYARPCClientResult", ({ kind: $.TypeKind.Function, params: ["apiv1.FxScheduleAPIYARPCClientParams"], results: ["apiv1.FxScheduleAPIYARPCClientResult"] } as $.FunctionTypeInfo))
}

export function NewFxScheduleAPIYARPCProcedures(): any {
	return $.interfaceValue($.functionValue((params: FxScheduleAPIYARPCProceduresParams): FxScheduleAPIYARPCProceduresResult => {
		return (() => { const __goscriptLiteralField10 = buildScheduleAPIYARPCProcedures(new buildScheduleAPIYARPCProceduresParams({Server: params.Server, AnyResolver: params.AnyResolver}, true)); return new FxScheduleAPIYARPCProceduresResult({Procedures: __goscriptLiteralField10, ReflectionMeta: __goscript_get_ScheduleAPIReflectionMeta()}, true) })()
	}, ({ kind: $.TypeKind.Function, params: ["apiv1.FxScheduleAPIYARPCProceduresParams"], results: ["apiv1.FxScheduleAPIYARPCProceduresResult"] } as $.FunctionTypeInfo)), "func(params apiv1.FxScheduleAPIYARPCProceduresParams) apiv1.FxScheduleAPIYARPCProceduresResult", ({ kind: $.TypeKind.Function, params: ["apiv1.FxScheduleAPIYARPCProceduresParams"], results: ["apiv1.FxScheduleAPIYARPCProceduresResult"] } as $.FunctionTypeInfo))
}

export var ScheduleAPIReflectionMeta: reflection.ServerMeta

export function __goscript_init_ScheduleAPIReflectionMeta(): void {
	if (((ScheduleAPIReflectionMeta) as any) === undefined) {
		ScheduleAPIReflectionMeta = new reflection.ServerMeta({ServiceName: "uber.cadence.api.v1.ScheduleAPI", FileDescriptors: yarpcFileDescriptorClosuree1236bf37818157b}, true)
	}
}

export function __goscript_get_ScheduleAPIReflectionMeta(): reflection.ServerMeta {
	if (((ScheduleAPIReflectionMeta) as any) === undefined) {
		__goscript_init_ScheduleAPIReflectionMeta()
	}
	return ScheduleAPIReflectionMeta
}

export function __goscript_set_ScheduleAPIReflectionMeta(__goscriptValue: reflection.ServerMeta): void {
	$.assignStruct(ScheduleAPIReflectionMeta, __goscriptValue)
}

export function newScheduleAPIServiceCreateScheduleYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_schedule_pb.CreateScheduleRequest(), "*apiv1.CreateScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleRequest"))
}

export function newScheduleAPIServiceCreateScheduleYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_schedule_pb.CreateScheduleResponse(), "*apiv1.CreateScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.CreateScheduleResponse"))
}

export function newScheduleAPIServiceDescribeScheduleYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_schedule_pb.DescribeScheduleRequest(), "*apiv1.DescribeScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleRequest"))
}

export function newScheduleAPIServiceDescribeScheduleYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_schedule_pb.DescribeScheduleResponse(), "*apiv1.DescribeScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeScheduleResponse"))
}

export function newScheduleAPIServiceListSchedulesYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_schedule_pb.ListSchedulesRequest(), "*apiv1.ListSchedulesRequest", /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesRequest"))
}

export function newScheduleAPIServiceListSchedulesYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_schedule_pb.ListSchedulesResponse(), "*apiv1.ListSchedulesResponse", /* @__PURE__ */ $.pointerType("apiv1.ListSchedulesResponse"))
}

export function newScheduleAPIServiceDeleteScheduleYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_schedule_pb.DeleteScheduleRequest(), "*apiv1.DeleteScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleRequest"))
}

export function newScheduleAPIServiceDeleteScheduleYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_schedule_pb.DeleteScheduleResponse(), "*apiv1.DeleteScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.DeleteScheduleResponse"))
}

export function newScheduleAPIServicePauseScheduleYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_schedule_pb.PauseScheduleRequest(), "*apiv1.PauseScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleRequest"))
}

export function newScheduleAPIServicePauseScheduleYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_schedule_pb.PauseScheduleResponse(), "*apiv1.PauseScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.PauseScheduleResponse"))
}

export function newScheduleAPIServiceUnpauseScheduleYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_schedule_pb.UnpauseScheduleRequest(), "*apiv1.UnpauseScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleRequest"))
}

export function newScheduleAPIServiceUnpauseScheduleYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_schedule_pb.UnpauseScheduleResponse(), "*apiv1.UnpauseScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.UnpauseScheduleResponse"))
}

export function newScheduleAPIServiceBackfillScheduleYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_schedule_pb.BackfillScheduleRequest(), "*apiv1.BackfillScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleRequest"))
}

export function newScheduleAPIServiceBackfillScheduleYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_schedule_pb.BackfillScheduleResponse(), "*apiv1.BackfillScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.BackfillScheduleResponse"))
}

export function newScheduleAPIServiceUpdateScheduleYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_schedule_pb.UpdateScheduleRequest(), "*apiv1.UpdateScheduleRequest", /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleRequest"))
}

export function newScheduleAPIServiceUpdateScheduleYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_schedule_pb.UpdateScheduleResponse(), "*apiv1.UpdateScheduleResponse", /* @__PURE__ */ $.pointerType("apiv1.UpdateScheduleResponse"))
}

export var emptyScheduleAPIServiceCreateScheduleYARPCRequest: __goscript_service_schedule_pb.CreateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.CreateScheduleRequest> | null

export function __goscript_init_emptyScheduleAPIServiceCreateScheduleYARPCRequest(): void {
	if (((emptyScheduleAPIServiceCreateScheduleYARPCRequest) as any) === undefined) {
		emptyScheduleAPIServiceCreateScheduleYARPCRequest = new __goscript_service_schedule_pb.CreateScheduleRequest()
	}
}

export function __goscript_get_emptyScheduleAPIServiceCreateScheduleYARPCRequest(): __goscript_service_schedule_pb.CreateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.CreateScheduleRequest> | null {
	if (((emptyScheduleAPIServiceCreateScheduleYARPCRequest) as any) === undefined) {
		__goscript_init_emptyScheduleAPIServiceCreateScheduleYARPCRequest()
	}
	return emptyScheduleAPIServiceCreateScheduleYARPCRequest
}

export function __goscript_set_emptyScheduleAPIServiceCreateScheduleYARPCRequest(__goscriptValue: __goscript_service_schedule_pb.CreateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.CreateScheduleRequest> | null): void {
	emptyScheduleAPIServiceCreateScheduleYARPCRequest = __goscriptValue
}

export var emptyScheduleAPIServiceCreateScheduleYARPCResponse: __goscript_service_schedule_pb.CreateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.CreateScheduleResponse> | null

export function __goscript_init_emptyScheduleAPIServiceCreateScheduleYARPCResponse(): void {
	if (((emptyScheduleAPIServiceCreateScheduleYARPCResponse) as any) === undefined) {
		emptyScheduleAPIServiceCreateScheduleYARPCResponse = new __goscript_service_schedule_pb.CreateScheduleResponse()
	}
}

export function __goscript_get_emptyScheduleAPIServiceCreateScheduleYARPCResponse(): __goscript_service_schedule_pb.CreateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.CreateScheduleResponse> | null {
	if (((emptyScheduleAPIServiceCreateScheduleYARPCResponse) as any) === undefined) {
		__goscript_init_emptyScheduleAPIServiceCreateScheduleYARPCResponse()
	}
	return emptyScheduleAPIServiceCreateScheduleYARPCResponse
}

export function __goscript_set_emptyScheduleAPIServiceCreateScheduleYARPCResponse(__goscriptValue: __goscript_service_schedule_pb.CreateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.CreateScheduleResponse> | null): void {
	emptyScheduleAPIServiceCreateScheduleYARPCResponse = __goscriptValue
}

export var emptyScheduleAPIServiceDescribeScheduleYARPCRequest: __goscript_service_schedule_pb.DescribeScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleRequest> | null

export function __goscript_init_emptyScheduleAPIServiceDescribeScheduleYARPCRequest(): void {
	if (((emptyScheduleAPIServiceDescribeScheduleYARPCRequest) as any) === undefined) {
		emptyScheduleAPIServiceDescribeScheduleYARPCRequest = new __goscript_service_schedule_pb.DescribeScheduleRequest()
	}
}

export function __goscript_get_emptyScheduleAPIServiceDescribeScheduleYARPCRequest(): __goscript_service_schedule_pb.DescribeScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleRequest> | null {
	if (((emptyScheduleAPIServiceDescribeScheduleYARPCRequest) as any) === undefined) {
		__goscript_init_emptyScheduleAPIServiceDescribeScheduleYARPCRequest()
	}
	return emptyScheduleAPIServiceDescribeScheduleYARPCRequest
}

export function __goscript_set_emptyScheduleAPIServiceDescribeScheduleYARPCRequest(__goscriptValue: __goscript_service_schedule_pb.DescribeScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleRequest> | null): void {
	emptyScheduleAPIServiceDescribeScheduleYARPCRequest = __goscriptValue
}

export var emptyScheduleAPIServiceDescribeScheduleYARPCResponse: __goscript_service_schedule_pb.DescribeScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleResponse> | null

export function __goscript_init_emptyScheduleAPIServiceDescribeScheduleYARPCResponse(): void {
	if (((emptyScheduleAPIServiceDescribeScheduleYARPCResponse) as any) === undefined) {
		emptyScheduleAPIServiceDescribeScheduleYARPCResponse = new __goscript_service_schedule_pb.DescribeScheduleResponse()
	}
}

export function __goscript_get_emptyScheduleAPIServiceDescribeScheduleYARPCResponse(): __goscript_service_schedule_pb.DescribeScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleResponse> | null {
	if (((emptyScheduleAPIServiceDescribeScheduleYARPCResponse) as any) === undefined) {
		__goscript_init_emptyScheduleAPIServiceDescribeScheduleYARPCResponse()
	}
	return emptyScheduleAPIServiceDescribeScheduleYARPCResponse
}

export function __goscript_set_emptyScheduleAPIServiceDescribeScheduleYARPCResponse(__goscriptValue: __goscript_service_schedule_pb.DescribeScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DescribeScheduleResponse> | null): void {
	emptyScheduleAPIServiceDescribeScheduleYARPCResponse = __goscriptValue
}

export var emptyScheduleAPIServiceListSchedulesYARPCRequest: __goscript_service_schedule_pb.ListSchedulesRequest | $.VarRef<__goscript_service_schedule_pb.ListSchedulesRequest> | null

export function __goscript_init_emptyScheduleAPIServiceListSchedulesYARPCRequest(): void {
	if (((emptyScheduleAPIServiceListSchedulesYARPCRequest) as any) === undefined) {
		emptyScheduleAPIServiceListSchedulesYARPCRequest = new __goscript_service_schedule_pb.ListSchedulesRequest()
	}
}

export function __goscript_get_emptyScheduleAPIServiceListSchedulesYARPCRequest(): __goscript_service_schedule_pb.ListSchedulesRequest | $.VarRef<__goscript_service_schedule_pb.ListSchedulesRequest> | null {
	if (((emptyScheduleAPIServiceListSchedulesYARPCRequest) as any) === undefined) {
		__goscript_init_emptyScheduleAPIServiceListSchedulesYARPCRequest()
	}
	return emptyScheduleAPIServiceListSchedulesYARPCRequest
}

export function __goscript_set_emptyScheduleAPIServiceListSchedulesYARPCRequest(__goscriptValue: __goscript_service_schedule_pb.ListSchedulesRequest | $.VarRef<__goscript_service_schedule_pb.ListSchedulesRequest> | null): void {
	emptyScheduleAPIServiceListSchedulesYARPCRequest = __goscriptValue
}

export var emptyScheduleAPIServiceListSchedulesYARPCResponse: __goscript_service_schedule_pb.ListSchedulesResponse | $.VarRef<__goscript_service_schedule_pb.ListSchedulesResponse> | null

export function __goscript_init_emptyScheduleAPIServiceListSchedulesYARPCResponse(): void {
	if (((emptyScheduleAPIServiceListSchedulesYARPCResponse) as any) === undefined) {
		emptyScheduleAPIServiceListSchedulesYARPCResponse = new __goscript_service_schedule_pb.ListSchedulesResponse()
	}
}

export function __goscript_get_emptyScheduleAPIServiceListSchedulesYARPCResponse(): __goscript_service_schedule_pb.ListSchedulesResponse | $.VarRef<__goscript_service_schedule_pb.ListSchedulesResponse> | null {
	if (((emptyScheduleAPIServiceListSchedulesYARPCResponse) as any) === undefined) {
		__goscript_init_emptyScheduleAPIServiceListSchedulesYARPCResponse()
	}
	return emptyScheduleAPIServiceListSchedulesYARPCResponse
}

export function __goscript_set_emptyScheduleAPIServiceListSchedulesYARPCResponse(__goscriptValue: __goscript_service_schedule_pb.ListSchedulesResponse | $.VarRef<__goscript_service_schedule_pb.ListSchedulesResponse> | null): void {
	emptyScheduleAPIServiceListSchedulesYARPCResponse = __goscriptValue
}

export var emptyScheduleAPIServiceDeleteScheduleYARPCRequest: __goscript_service_schedule_pb.DeleteScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleRequest> | null

export function __goscript_init_emptyScheduleAPIServiceDeleteScheduleYARPCRequest(): void {
	if (((emptyScheduleAPIServiceDeleteScheduleYARPCRequest) as any) === undefined) {
		emptyScheduleAPIServiceDeleteScheduleYARPCRequest = new __goscript_service_schedule_pb.DeleteScheduleRequest()
	}
}

export function __goscript_get_emptyScheduleAPIServiceDeleteScheduleYARPCRequest(): __goscript_service_schedule_pb.DeleteScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleRequest> | null {
	if (((emptyScheduleAPIServiceDeleteScheduleYARPCRequest) as any) === undefined) {
		__goscript_init_emptyScheduleAPIServiceDeleteScheduleYARPCRequest()
	}
	return emptyScheduleAPIServiceDeleteScheduleYARPCRequest
}

export function __goscript_set_emptyScheduleAPIServiceDeleteScheduleYARPCRequest(__goscriptValue: __goscript_service_schedule_pb.DeleteScheduleRequest | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleRequest> | null): void {
	emptyScheduleAPIServiceDeleteScheduleYARPCRequest = __goscriptValue
}

export var emptyScheduleAPIServiceDeleteScheduleYARPCResponse: __goscript_service_schedule_pb.DeleteScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleResponse> | null

export function __goscript_init_emptyScheduleAPIServiceDeleteScheduleYARPCResponse(): void {
	if (((emptyScheduleAPIServiceDeleteScheduleYARPCResponse) as any) === undefined) {
		emptyScheduleAPIServiceDeleteScheduleYARPCResponse = new __goscript_service_schedule_pb.DeleteScheduleResponse()
	}
}

export function __goscript_get_emptyScheduleAPIServiceDeleteScheduleYARPCResponse(): __goscript_service_schedule_pb.DeleteScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleResponse> | null {
	if (((emptyScheduleAPIServiceDeleteScheduleYARPCResponse) as any) === undefined) {
		__goscript_init_emptyScheduleAPIServiceDeleteScheduleYARPCResponse()
	}
	return emptyScheduleAPIServiceDeleteScheduleYARPCResponse
}

export function __goscript_set_emptyScheduleAPIServiceDeleteScheduleYARPCResponse(__goscriptValue: __goscript_service_schedule_pb.DeleteScheduleResponse | $.VarRef<__goscript_service_schedule_pb.DeleteScheduleResponse> | null): void {
	emptyScheduleAPIServiceDeleteScheduleYARPCResponse = __goscriptValue
}

export var emptyScheduleAPIServicePauseScheduleYARPCRequest: __goscript_service_schedule_pb.PauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.PauseScheduleRequest> | null

export function __goscript_init_emptyScheduleAPIServicePauseScheduleYARPCRequest(): void {
	if (((emptyScheduleAPIServicePauseScheduleYARPCRequest) as any) === undefined) {
		emptyScheduleAPIServicePauseScheduleYARPCRequest = new __goscript_service_schedule_pb.PauseScheduleRequest()
	}
}

export function __goscript_get_emptyScheduleAPIServicePauseScheduleYARPCRequest(): __goscript_service_schedule_pb.PauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.PauseScheduleRequest> | null {
	if (((emptyScheduleAPIServicePauseScheduleYARPCRequest) as any) === undefined) {
		__goscript_init_emptyScheduleAPIServicePauseScheduleYARPCRequest()
	}
	return emptyScheduleAPIServicePauseScheduleYARPCRequest
}

export function __goscript_set_emptyScheduleAPIServicePauseScheduleYARPCRequest(__goscriptValue: __goscript_service_schedule_pb.PauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.PauseScheduleRequest> | null): void {
	emptyScheduleAPIServicePauseScheduleYARPCRequest = __goscriptValue
}

export var emptyScheduleAPIServicePauseScheduleYARPCResponse: __goscript_service_schedule_pb.PauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.PauseScheduleResponse> | null

export function __goscript_init_emptyScheduleAPIServicePauseScheduleYARPCResponse(): void {
	if (((emptyScheduleAPIServicePauseScheduleYARPCResponse) as any) === undefined) {
		emptyScheduleAPIServicePauseScheduleYARPCResponse = new __goscript_service_schedule_pb.PauseScheduleResponse()
	}
}

export function __goscript_get_emptyScheduleAPIServicePauseScheduleYARPCResponse(): __goscript_service_schedule_pb.PauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.PauseScheduleResponse> | null {
	if (((emptyScheduleAPIServicePauseScheduleYARPCResponse) as any) === undefined) {
		__goscript_init_emptyScheduleAPIServicePauseScheduleYARPCResponse()
	}
	return emptyScheduleAPIServicePauseScheduleYARPCResponse
}

export function __goscript_set_emptyScheduleAPIServicePauseScheduleYARPCResponse(__goscriptValue: __goscript_service_schedule_pb.PauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.PauseScheduleResponse> | null): void {
	emptyScheduleAPIServicePauseScheduleYARPCResponse = __goscriptValue
}

export var emptyScheduleAPIServiceUnpauseScheduleYARPCRequest: __goscript_service_schedule_pb.UnpauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleRequest> | null

export function __goscript_init_emptyScheduleAPIServiceUnpauseScheduleYARPCRequest(): void {
	if (((emptyScheduleAPIServiceUnpauseScheduleYARPCRequest) as any) === undefined) {
		emptyScheduleAPIServiceUnpauseScheduleYARPCRequest = new __goscript_service_schedule_pb.UnpauseScheduleRequest()
	}
}

export function __goscript_get_emptyScheduleAPIServiceUnpauseScheduleYARPCRequest(): __goscript_service_schedule_pb.UnpauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleRequest> | null {
	if (((emptyScheduleAPIServiceUnpauseScheduleYARPCRequest) as any) === undefined) {
		__goscript_init_emptyScheduleAPIServiceUnpauseScheduleYARPCRequest()
	}
	return emptyScheduleAPIServiceUnpauseScheduleYARPCRequest
}

export function __goscript_set_emptyScheduleAPIServiceUnpauseScheduleYARPCRequest(__goscriptValue: __goscript_service_schedule_pb.UnpauseScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleRequest> | null): void {
	emptyScheduleAPIServiceUnpauseScheduleYARPCRequest = __goscriptValue
}

export var emptyScheduleAPIServiceUnpauseScheduleYARPCResponse: __goscript_service_schedule_pb.UnpauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleResponse> | null

export function __goscript_init_emptyScheduleAPIServiceUnpauseScheduleYARPCResponse(): void {
	if (((emptyScheduleAPIServiceUnpauseScheduleYARPCResponse) as any) === undefined) {
		emptyScheduleAPIServiceUnpauseScheduleYARPCResponse = new __goscript_service_schedule_pb.UnpauseScheduleResponse()
	}
}

export function __goscript_get_emptyScheduleAPIServiceUnpauseScheduleYARPCResponse(): __goscript_service_schedule_pb.UnpauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleResponse> | null {
	if (((emptyScheduleAPIServiceUnpauseScheduleYARPCResponse) as any) === undefined) {
		__goscript_init_emptyScheduleAPIServiceUnpauseScheduleYARPCResponse()
	}
	return emptyScheduleAPIServiceUnpauseScheduleYARPCResponse
}

export function __goscript_set_emptyScheduleAPIServiceUnpauseScheduleYARPCResponse(__goscriptValue: __goscript_service_schedule_pb.UnpauseScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UnpauseScheduleResponse> | null): void {
	emptyScheduleAPIServiceUnpauseScheduleYARPCResponse = __goscriptValue
}

export var emptyScheduleAPIServiceBackfillScheduleYARPCRequest: __goscript_service_schedule_pb.BackfillScheduleRequest | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleRequest> | null

export function __goscript_init_emptyScheduleAPIServiceBackfillScheduleYARPCRequest(): void {
	if (((emptyScheduleAPIServiceBackfillScheduleYARPCRequest) as any) === undefined) {
		emptyScheduleAPIServiceBackfillScheduleYARPCRequest = new __goscript_service_schedule_pb.BackfillScheduleRequest()
	}
}

export function __goscript_get_emptyScheduleAPIServiceBackfillScheduleYARPCRequest(): __goscript_service_schedule_pb.BackfillScheduleRequest | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleRequest> | null {
	if (((emptyScheduleAPIServiceBackfillScheduleYARPCRequest) as any) === undefined) {
		__goscript_init_emptyScheduleAPIServiceBackfillScheduleYARPCRequest()
	}
	return emptyScheduleAPIServiceBackfillScheduleYARPCRequest
}

export function __goscript_set_emptyScheduleAPIServiceBackfillScheduleYARPCRequest(__goscriptValue: __goscript_service_schedule_pb.BackfillScheduleRequest | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleRequest> | null): void {
	emptyScheduleAPIServiceBackfillScheduleYARPCRequest = __goscriptValue
}

export var emptyScheduleAPIServiceBackfillScheduleYARPCResponse: __goscript_service_schedule_pb.BackfillScheduleResponse | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleResponse> | null

export function __goscript_init_emptyScheduleAPIServiceBackfillScheduleYARPCResponse(): void {
	if (((emptyScheduleAPIServiceBackfillScheduleYARPCResponse) as any) === undefined) {
		emptyScheduleAPIServiceBackfillScheduleYARPCResponse = new __goscript_service_schedule_pb.BackfillScheduleResponse()
	}
}

export function __goscript_get_emptyScheduleAPIServiceBackfillScheduleYARPCResponse(): __goscript_service_schedule_pb.BackfillScheduleResponse | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleResponse> | null {
	if (((emptyScheduleAPIServiceBackfillScheduleYARPCResponse) as any) === undefined) {
		__goscript_init_emptyScheduleAPIServiceBackfillScheduleYARPCResponse()
	}
	return emptyScheduleAPIServiceBackfillScheduleYARPCResponse
}

export function __goscript_set_emptyScheduleAPIServiceBackfillScheduleYARPCResponse(__goscriptValue: __goscript_service_schedule_pb.BackfillScheduleResponse | $.VarRef<__goscript_service_schedule_pb.BackfillScheduleResponse> | null): void {
	emptyScheduleAPIServiceBackfillScheduleYARPCResponse = __goscriptValue
}

export var emptyScheduleAPIServiceUpdateScheduleYARPCRequest: __goscript_service_schedule_pb.UpdateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleRequest> | null

export function __goscript_init_emptyScheduleAPIServiceUpdateScheduleYARPCRequest(): void {
	if (((emptyScheduleAPIServiceUpdateScheduleYARPCRequest) as any) === undefined) {
		emptyScheduleAPIServiceUpdateScheduleYARPCRequest = new __goscript_service_schedule_pb.UpdateScheduleRequest()
	}
}

export function __goscript_get_emptyScheduleAPIServiceUpdateScheduleYARPCRequest(): __goscript_service_schedule_pb.UpdateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleRequest> | null {
	if (((emptyScheduleAPIServiceUpdateScheduleYARPCRequest) as any) === undefined) {
		__goscript_init_emptyScheduleAPIServiceUpdateScheduleYARPCRequest()
	}
	return emptyScheduleAPIServiceUpdateScheduleYARPCRequest
}

export function __goscript_set_emptyScheduleAPIServiceUpdateScheduleYARPCRequest(__goscriptValue: __goscript_service_schedule_pb.UpdateScheduleRequest | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleRequest> | null): void {
	emptyScheduleAPIServiceUpdateScheduleYARPCRequest = __goscriptValue
}

export var emptyScheduleAPIServiceUpdateScheduleYARPCResponse: __goscript_service_schedule_pb.UpdateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleResponse> | null

export function __goscript_init_emptyScheduleAPIServiceUpdateScheduleYARPCResponse(): void {
	if (((emptyScheduleAPIServiceUpdateScheduleYARPCResponse) as any) === undefined) {
		emptyScheduleAPIServiceUpdateScheduleYARPCResponse = new __goscript_service_schedule_pb.UpdateScheduleResponse()
	}
}

export function __goscript_get_emptyScheduleAPIServiceUpdateScheduleYARPCResponse(): __goscript_service_schedule_pb.UpdateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleResponse> | null {
	if (((emptyScheduleAPIServiceUpdateScheduleYARPCResponse) as any) === undefined) {
		__goscript_init_emptyScheduleAPIServiceUpdateScheduleYARPCResponse()
	}
	return emptyScheduleAPIServiceUpdateScheduleYARPCResponse
}

export function __goscript_set_emptyScheduleAPIServiceUpdateScheduleYARPCResponse(__goscriptValue: __goscript_service_schedule_pb.UpdateScheduleResponse | $.VarRef<__goscript_service_schedule_pb.UpdateScheduleResponse> | null): void {
	emptyScheduleAPIServiceUpdateScheduleYARPCResponse = __goscriptValue
}

export let yarpcFileDescriptorClosuree1236bf37818157b: $.Slice<$.Slice<number>> = $.arrayToSlice<$.Slice<number>>([new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 236, 87, 77, 111, 227, 68, 24, 150, 147, 52, 155, 188, 165, 237, 98, 154, 196, 107, 14, 91, 140, 88, 149, 178, 117, 212, 162, 149, 88, 237, 169, 221, 114, 168, 4, 34, 76, 183, 23, 46, 209, 196, 126, 147, 142, 54, 246, 24, 207, 36, 162, 123, 69, 252, 39, 46, 220, 224, 87, 240, 31, 248, 13, 200, 227, 113, 182, 113, 199, 217, 176, 173, 16, 7, 142, 51, 126, 158, 153, 247, 227, 241, 243, 218, 112, 48, 27, 97, 218, 15, 104, 136, 113, 128, 125, 154, 176, 254, 252, 168, 47, 48, 157, 179, 0, 135, 34, 184, 194, 112, 54, 69, 63, 73, 185, 228, 246, 71, 25, 214, 215, 88, 159, 38, 204, 159, 31, 185, 143, 39, 156, 79, 166, 216, 87, 144, 209, 108, 220, 151, 44, 66, 33, 105, 148, 228, 44, 215, 51, 222, 176, 116, 178, 187, 103, 194, 4, 60, 138, 120, 156, 35, 188, 223, 235, 208, 121, 153, 34, 149, 120, 161, 169, 4, 127, 156, 161, 144, 118, 23, 154, 33, 143, 40, 139, 29, 107, 207, 218, 111, 19, 189, 178, 31, 195, 102, 113, 203, 144, 133, 78, 77, 61, 132, 98, 235, 60, 180, 159, 65, 67, 36, 24, 56, 245, 61, 107, 127, 243, 248, 19, 223, 144, 157, 95, 92, 118, 145, 96, 64, 20, 220, 126, 1, 77, 26, 72, 198, 99, 167, 161, 136, 159, 174, 36, 158, 40, 40, 209, 20, 251, 4, 90, 9, 159, 178, 128, 161, 112, 54, 20, 253, 179, 149, 244, 129, 6, 147, 5, 205, 62, 132, 70, 132, 17, 119, 154, 138, 254, 200, 72, 255, 22, 35, 78, 20, 204, 38, 240, 161, 64, 154, 6, 87, 67, 42, 101, 202, 70, 51, 137, 194, 121, 176, 234, 106, 133, 62, 89, 128, 201, 67, 81, 218, 177, 191, 130, 13, 33, 169, 68, 167, 165, 206, 241, 86, 151, 46, 67, 146, 156, 224, 61, 135, 110, 185, 139, 34, 225, 177, 192, 114, 187, 172, 114, 187, 60, 2, 189, 51, 20, 65, 202, 70, 247, 38, 1, 239, 143, 58, 56, 183, 15, 213, 17, 21, 250, 176, 222, 87, 31, 181, 187, 233, 163, 254, 126, 250, 88, 52, 167, 241, 15, 155, 147, 37, 204, 226, 49, 215, 194, 92, 157, 240, 121, 60, 230, 68, 193, 255, 3, 130, 244, 4, 236, 126, 195, 132, 44, 130, 19, 239, 18, 198, 199, 208, 78, 232, 4, 135, 130, 189, 65, 213, 166, 13, 210, 202, 54, 46, 216, 27, 180, 159, 192, 78, 140, 63, 201, 161, 66, 72, 254, 26, 99, 213, 138, 15, 200, 86, 182, 61, 160, 19, 124, 149, 109, 122, 191, 88, 208, 41, 221, 170, 149, 115, 6, 237, 66, 100, 194, 177, 246, 234, 251, 155, 199, 79, 86, 86, 51, 59, 230, 235, 88, 166, 215, 228, 45, 209, 20, 71, 205, 20, 199, 0, 58, 103, 56, 197, 251, 115, 70, 207, 129, 110, 249, 196, 60, 51, 239, 103, 11, 118, 7, 116, 38, 238, 207, 133, 187, 208, 76, 145, 10, 158, 23, 185, 77, 244, 202, 118, 161, 197, 66, 140, 37, 147, 215, 74, 201, 109, 178, 88, 123, 61, 232, 148, 130, 208, 225, 253, 102, 65, 247, 50, 78, 254, 149, 0, 9, 236, 4, 84, 6, 87, 195, 89, 50, 84, 47, 95, 30, 231, 246, 241, 193, 202, 86, 191, 204, 56, 151, 137, 122, 113, 175, 201, 86, 112, 115, 233, 61, 130, 222, 173, 240, 117, 106, 191, 214, 160, 119, 74, 131, 215, 99, 54, 157, 222, 91, 110, 207, 1, 132, 164, 169, 28, 102, 67, 91, 27, 142, 235, 231, 19, 221, 47, 38, 186, 255, 170, 152, 232, 164, 173, 208, 217, 218, 126, 6, 45, 140, 195, 156, 216, 120, 39, 241, 1, 198, 161, 162, 125, 15, 219, 124, 142, 233, 148, 46, 138, 182, 177, 70, 209, 190, 203, 41, 69, 209, 248, 205, 101, 150, 229, 72, 23, 38, 203, 178, 153, 103, 89, 108, 157, 135, 158, 11, 206, 237, 202, 233, 178, 254, 89, 131, 206, 101, 18, 254, 255, 93, 97, 246, 229, 230, 221, 124, 217, 129, 110, 185, 184, 121, 221, 143, 255, 106, 194, 230, 34, 151, 193, 185, 205, 96, 123, 249, 195, 192, 54, 43, 194, 248, 13, 232, 126, 177, 22, 86, 187, 51, 135, 135, 229, 153, 111, 63, 53, 30, 80, 241, 189, 225, 30, 174, 137, 214, 23, 142, 97, 107, 105, 78, 216, 159, 27, 249, 166, 9, 230, 30, 172, 3, 213, 247, 48, 216, 94, 182, 237, 138, 26, 26, 167, 69, 69, 13, 205, 115, 32, 75, 105, 201, 129, 43, 82, 50, 141, 138, 138, 148, 140, 134, 110, 79, 97, 167, 100, 136, 182, 57, 78, 179, 235, 187, 79, 215, 3, 191, 85, 70, 217, 40, 42, 148, 81, 225, 196, 21, 202, 168, 114, 159, 172, 99, 203, 239, 71, 69, 199, 140, 14, 85, 209, 49, 243, 11, 119, 26, 66, 47, 224, 145, 137, 113, 186, 187, 112, 163, 252, 191, 111, 144, 249, 247, 192, 250, 225, 104, 194, 228, 213, 108, 228, 7, 60, 234, 223, 252, 65, 59, 100, 225, 180, 63, 225, 249, 47, 159, 254, 91, 123, 65, 19, 54, 63, 26, 53, 213, 222, 151, 127, 7, 0, 0, 255, 255, 94, 143, 98, 126, 87, 14, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 79, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 47, 201, 204, 77, 45, 46, 73, 204, 45, 208, 3, 11, 9, 241, 67, 20, 232, 193, 20, 40, 89, 115, 113, 134, 192, 212, 8, 73, 112, 177, 23, 167, 38, 231, 231, 165, 20, 75, 48, 42, 48, 106, 48, 7, 193, 184, 66, 34, 92, 172, 121, 137, 121, 249, 197, 18, 76, 10, 140, 26, 172, 65, 16, 142, 83, 43, 35, 151, 112, 114, 126, 174, 30, 154, 161, 78, 124, 112, 35, 3, 64, 66, 1, 140, 81, 70, 80, 37, 233, 249, 57, 137, 121, 233, 122, 249, 69, 233, 72, 110, 172, 44, 72, 45, 214, 207, 206, 203, 47, 207, 67, 184, 183, 32, 233, 7, 35, 227, 34, 38, 102, 247, 0, 167, 85, 76, 114, 238, 16, 221, 1, 80, 45, 122, 225, 169, 57, 57, 222, 32, 13, 33, 32, 189, 73, 108, 96, 179, 140, 1, 1, 0, 0, 255, 255, 174, 101, 206, 125, 255, 0, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 196, 87, 223, 111, 219, 182, 22, 190, 78, 226, 212, 62, 142, 93, 133, 189, 183, 245, 77, 155, 214, 241, 189, 253, 129, 116, 181, 145, 108, 67, 183, 21, 40, 224, 56, 10, 106, 204, 181, 61, 198, 110, 176, 1, 155, 32, 75, 116, 194, 69, 22, 5, 138, 74, 226, 199, 61, 239, 223, 216, 211, 254, 166, 1, 123, 220, 251, 30, 246, 186, 129, 20, 165, 184, 173, 156, 20, 123, 217, 155, 248, 241, 251, 14, 207, 57, 60, 228, 161, 160, 30, 141, 9, 111, 58, 182, 75, 124, 135, 52, 237, 128, 54, 207, 118, 154, 161, 115, 66, 220, 200, 35, 141, 128, 51, 193, 208, 45, 201, 105, 104, 78, 195, 14, 104, 227, 108, 103, 227, 254, 49, 99, 199, 30, 105, 42, 202, 56, 154, 52, 221, 136, 219, 130, 50, 63, 22, 109, 60, 120, 119, 94, 208, 41, 9, 133, 61, 13, 52, 161, 150, 181, 178, 195, 166, 211, 212, 68, 166, 111, 194, 14, 79, 61, 26, 138, 152, 83, 255, 37, 7, 107, 135, 218, 221, 195, 128, 56, 232, 49, 220, 116, 56, 243, 45, 114, 17, 112, 18, 134, 148, 249, 213, 92, 45, 247, 164, 136, 43, 18, 54, 83, 20, 125, 14, 16, 10, 155, 11, 75, 58, 86, 93, 170, 229, 158, 148, 118, 55, 26, 177, 215, 141, 196, 235, 198, 48, 241, 26, 23, 21, 91, 142, 209, 167, 80, 32, 190, 27, 11, 151, 175, 21, 222, 32, 190, 171, 100, 59, 176, 250, 61, 21, 130, 240, 234, 138, 18, 253, 247, 61, 209, 190, 206, 33, 214, 196, 250, 239, 121, 168, 36, 225, 181, 28, 57, 133, 190, 131, 74, 236, 247, 57, 227, 167, 19, 143, 157, 171, 248, 74, 187, 207, 27, 25, 219, 212, 120, 91, 220, 56, 148, 202, 35, 45, 140, 49, 92, 14, 231, 193, 141, 63, 87, 224, 86, 6, 13, 29, 64, 57, 89, 209, 18, 179, 128, 232, 101, 183, 50, 151, 77, 180, 195, 89, 64, 240, 218, 249, 220, 8, 125, 1, 69, 185, 135, 150, 220, 68, 157, 246, 205, 76, 27, 67, 59, 60, 237, 210, 80, 224, 130, 208, 95, 104, 23, 242, 212, 15, 34, 161, 179, 126, 47, 83, 55, 176, 103, 30, 179, 93, 28, 83, 209, 71, 128, 82, 191, 169, 107, 5, 156, 76, 232, 133, 218, 129, 34, 54, 146, 153, 142, 59, 80, 56, 178, 161, 70, 46, 136, 19, 201, 144, 45, 93, 31, 204, 114, 60, 22, 18, 181, 223, 44, 18, 213, 252, 117, 187, 119, 47, 53, 161, 18, 57, 100, 109, 169, 31, 198, 114, 116, 4, 119, 85, 2, 22, 88, 95, 189, 206, 250, 29, 169, 206, 50, 220, 134, 53, 78, 4, 159, 89, 1, 243, 168, 51, 171, 222, 80, 150, 106, 153, 73, 194, 146, 56, 80, 60, 92, 226, 151, 3, 244, 12, 86, 166, 100, 202, 170, 5, 237, 70, 150, 248, 53, 153, 50, 172, 104, 8, 195, 122, 72, 108, 238, 156, 88, 182, 16, 156, 142, 35, 65, 194, 106, 81, 105, 31, 102, 23, 164, 98, 183, 82, 50, 54, 194, 119, 144, 250, 31, 75, 96, 36, 117, 171, 188, 162, 36, 68, 95, 65, 133, 157, 17, 238, 217, 65, 18, 158, 172, 191, 202, 238, 246, 149, 101, 223, 143, 37, 58, 208, 50, 155, 31, 34, 12, 55, 29, 91, 56, 39, 86, 148, 218, 92, 250, 0, 155, 109, 169, 25, 165, 54, 157, 249, 33, 106, 205, 217, 60, 167, 190, 203, 206, 117, 173, 94, 177, 161, 137, 137, 35, 197, 71, 79, 192, 8, 236, 40, 36, 22, 243, 173, 137, 77, 189, 136, 19, 85, 174, 5, 92, 81, 120, 223, 63, 136, 81, 180, 5, 107, 227, 104, 50, 33, 220, 242, 232, 148, 198, 133, 153, 199, 165, 24, 235, 74, 8, 61, 133, 117, 135, 249, 78, 196, 57, 241, 157, 153, 230, 173, 42, 158, 49, 55, 161, 200, 245, 31, 114, 176, 158, 38, 94, 46, 213, 241, 39, 12, 221, 134, 85, 78, 236, 48, 189, 72, 245, 8, 61, 135, 162, 242, 199, 181, 108, 241, 1, 247, 103, 33, 38, 183, 4, 186, 155, 10, 199, 51, 149, 157, 98, 50, 185, 55, 171, 251, 80, 78, 239, 115, 97, 11, 34, 151, 143, 39, 213, 242, 5, 172, 71, 200, 4, 136, 211, 68, 253, 9, 211, 235, 63, 186, 114, 227, 210, 144, 112, 188, 190, 252, 172, 255, 150, 131, 181, 61, 219, 57, 157, 80, 207, 83, 225, 62, 128, 210, 88, 143, 45, 234, 234, 152, 33, 129, 58, 238, 63, 208, 56, 30, 66, 133, 71, 126, 104, 57, 108, 26, 120, 68, 16, 87, 213, 67, 30, 151, 37, 218, 78, 64, 180, 9, 160, 104, 130, 9, 219, 211, 197, 80, 148, 200, 80, 2, 245, 159, 87, 46, 91, 165, 138, 244, 37, 148, 61, 59, 20, 22, 143, 252, 216, 165, 220, 181, 46, 149, 164, 0, 71, 190, 114, 235, 37, 148, 125, 114, 49, 167, 191, 62, 23, 37, 41, 72, 244, 155, 0, 202, 85, 105, 32, 84, 249, 88, 198, 69, 133, 224, 200, 15, 209, 11, 40, 57, 156, 216, 34, 190, 26, 117, 207, 188, 202, 56, 196, 116, 101, 123, 31, 12, 21, 91, 20, 184, 169, 133, 252, 181, 22, 42, 82, 51, 82, 18, 101, 165, 7, 235, 204, 63, 102, 212, 63, 182, 146, 2, 8, 171, 171, 181, 229, 133, 125, 111, 190, 146, 176, 161, 181, 9, 24, 202, 218, 154, 210, 80, 86, 190, 10, 249, 134, 10, 25, 98, 72, 197, 188, 5, 107, 225, 41, 13, 130, 132, 81, 80, 140, 146, 198, 20, 165, 1, 183, 226, 3, 78, 92, 107, 66, 57, 177, 28, 22, 249, 66, 221, 185, 203, 120, 61, 153, 58, 160, 156, 180, 229, 4, 250, 4, 110, 243, 200, 247, 101, 12, 105, 31, 140, 37, 160, 36, 255, 214, 179, 73, 203, 86, 170, 250, 175, 115, 87, 129, 108, 189, 166, 47, 248, 76, 250, 159, 188, 13, 231, 206, 70, 2, 117, 220, 247, 31, 9, 75, 127, 239, 145, 240, 25, 228, 67, 121, 250, 245, 41, 169, 95, 121, 174, 213, 61, 129, 99, 65, 214, 251, 111, 37, 235, 253, 183, 253, 227, 18, 252, 39, 179, 77, 160, 255, 193, 131, 195, 246, 43, 115, 127, 212, 53, 173, 254, 27, 19, 119, 91, 3, 107, 208, 239, 118, 218, 95, 91, 157, 222, 155, 86, 183, 179, 111, 252, 11, 253, 31, 106, 139, 72, 135, 95, 118, 6, 86, 207, 60, 50, 114, 168, 14, 247, 23, 177, 246, 70, 7, 7, 38, 54, 150, 208, 35, 168, 47, 226, 180, 251, 189, 246, 8, 99, 179, 55, 52, 150, 209, 83, 120, 188, 144, 215, 234, 181, 205, 174, 53, 192, 230, 155, 78, 127, 116, 104, 172, 160, 6, 108, 47, 34, 15, 77, 252, 186, 211, 107, 13, 205, 75, 126, 126, 251, 167, 220, 101, 54, 222, 106, 112, 111, 5, 218, 110, 13, 219, 175, 172, 81, 70, 58, 182, 96, 115, 33, 75, 230, 195, 200, 161, 26, 220, 91, 72, 233, 247, 76, 99, 233, 74, 70, 171, 219, 53, 150, 247, 190, 133, 59, 14, 155, 102, 85, 195, 94, 218, 54, 6, 242, 92, 15, 114, 223, 236, 28, 83, 113, 18, 141, 27, 14, 155, 54, 231, 255, 36, 158, 81, 215, 107, 30, 179, 248, 207, 68, 255, 86, 188, 176, 3, 122, 182, 51, 94, 85, 216, 199, 127, 5, 0, 0, 255, 255, 135, 83, 137, 91, 22, 13, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 75, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 79, 41, 45, 74, 44, 201, 204, 207, 211, 3, 139, 8, 241, 67, 228, 245, 96, 242, 74, 86, 92, 28, 46, 80, 37, 66, 18, 92, 236, 197, 169, 201, 249, 121, 41, 197, 18, 140, 10, 140, 26, 204, 65, 48, 174, 144, 8, 23, 107, 94, 98, 94, 126, 177, 4, 147, 2, 163, 6, 107, 16, 132, 227, 212, 204, 200, 37, 156, 156, 159, 171, 135, 102, 166, 19, 47, 204, 196, 0, 144, 72, 0, 99, 148, 33, 84, 69, 122, 126, 78, 98, 94, 186, 94, 126, 81, 58, 194, 129, 37, 149, 5, 169, 197, 250, 217, 121, 249, 229, 121, 112, 199, 22, 36, 253, 96, 100, 92, 196, 196, 236, 30, 224, 180, 138, 73, 206, 29, 162, 57, 0, 170, 67, 47, 60, 53, 39, 199, 27, 164, 62, 4, 164, 53, 137, 13, 108, 148, 49, 32, 0, 0, 255, 255, 239, 138, 180, 195, 251, 0, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 188, 86, 93, 115, 219, 68, 23, 126, 101, 215, 249, 56, 78, 19, 101, 211, 38, 78, 218, 188, 111, 234, 23, 104, 200, 128, 61, 113, 111, 58, 64, 1, 213, 31, 137, 90, 99, 155, 181, 219, 80, 152, 169, 102, 45, 173, 221, 37, 178, 86, 72, 43, 55, 238, 5, 195, 13, 127, 131, 11, 174, 249, 39, 92, 242, 135, 152, 149, 86, 177, 157, 184, 148, 11, 134, 59, 237, 121, 158, 243, 177, 71, 231, 99, 225, 32, 234, 211, 160, 108, 19, 135, 122, 54, 45, 19, 159, 149, 199, 199, 101, 155, 143, 70, 220, 43, 249, 1, 23, 28, 109, 73, 70, 73, 49, 74, 196, 103, 165, 241, 241, 222, 127, 135, 156, 15, 93, 90, 142, 41, 253, 104, 80, 118, 162, 128, 8, 150, 42, 21, 159, 194, 230, 25, 15, 206, 7, 46, 127, 93, 191, 160, 118, 36, 33, 244, 63, 200, 191, 86, 66, 139, 57, 5, 237, 64, 59, 92, 197, 144, 138, 76, 7, 221, 134, 165, 32, 242, 36, 150, 137, 177, 92, 16, 121, 166, 83, 44, 194, 90, 106, 172, 55, 241, 41, 66, 112, 195, 35, 35, 170, 12, 196, 223, 146, 99, 216, 130, 141, 153, 152, 188, 149, 179, 15, 203, 29, 50, 113, 57, 113, 36, 236, 16, 65, 98, 120, 13, 199, 223, 197, 55, 176, 220, 32, 204, 141, 2, 138, 182, 97, 41, 160, 36, 228, 158, 210, 87, 39, 84, 128, 101, 135, 10, 194, 220, 48, 142, 112, 13, 167, 71, 244, 8, 150, 185, 47, 111, 25, 22, 178, 7, 218, 97, 190, 242, 255, 210, 130, 188, 149, 148, 131, 118, 66, 197, 169, 78, 241, 55, 13, 214, 231, 49, 212, 6, 125, 144, 72, 44, 155, 8, 58, 228, 193, 36, 142, 102, 189, 242, 222, 95, 153, 174, 42, 46, 222, 24, 204, 11, 144, 9, 91, 30, 189, 16, 86, 64, 69, 48, 177, 152, 39, 104, 48, 38, 110, 124, 145, 124, 101, 183, 148, 252, 209, 82, 250, 71, 75, 53, 245, 71, 241, 166, 212, 194, 82, 201, 84, 58, 197, 95, 52, 184, 241, 21, 29, 113, 244, 8, 150, 6, 140, 186, 78, 88, 208, 14, 178, 135, 249, 202, 251, 11, 67, 147, 212, 82, 35, 230, 213, 61, 17, 76, 176, 82, 218, 59, 131, 252, 140, 24, 233, 144, 61, 167, 19, 149, 115, 249, 137, 42, 144, 27, 19, 55, 162, 42, 202, 187, 11, 205, 171, 159, 138, 19, 234, 39, 153, 135, 90, 241, 87, 13, 150, 78, 41, 113, 104, 128, 190, 184, 18, 226, 253, 133, 54, 18, 242, 191, 27, 228, 31, 26, 232, 93, 74, 2, 251, 149, 33, 68, 192, 250, 145, 160, 33, 178, 96, 157, 121, 14, 189, 160, 142, 53, 23, 246, 195, 133, 86, 175, 170, 151, 204, 68, 119, 246, 30, 55, 217, 172, 108, 239, 37, 160, 235, 164, 127, 240, 86, 3, 88, 169, 17, 65, 30, 187, 188, 143, 26, 112, 147, 122, 54, 119, 152, 55, 180, 196, 196, 167, 170, 128, 239, 45, 180, 85, 87, 76, 217, 191, 120, 141, 206, 156, 46, 219, 53, 51, 211, 174, 157, 100, 196, 208, 224, 57, 13, 66, 198, 61, 211, 27, 112, 73, 100, 35, 223, 77, 219, 94, 126, 163, 251, 176, 49, 160, 68, 200, 70, 26, 39, 84, 53, 94, 214, 149, 88, 25, 40, 62, 133, 157, 110, 228, 251, 60, 16, 212, 169, 186, 140, 122, 66, 33, 161, 156, 76, 67, 110, 133, 206, 185, 178, 156, 27, 242, 174, 115, 142, 118, 97, 229, 123, 50, 38, 49, 144, 216, 92, 150, 231, 174, 115, 94, 252, 41, 11, 249, 184, 105, 58, 220, 101, 246, 4, 213, 64, 103, 30, 19, 140, 184, 211, 214, 211, 222, 213, 122, 27, 74, 37, 109, 60, 84, 134, 173, 62, 177, 207, 249, 96, 96, 217, 156, 14, 6, 204, 150, 97, 198, 190, 53, 140, 20, 84, 157, 34, 210, 237, 136, 92, 176, 81, 52, 154, 186, 205, 190, 211, 173, 82, 185, 116, 251, 225, 212, 10, 17, 130, 142, 124, 17, 22, 110, 28, 104, 135, 185, 75, 170, 161, 196, 232, 17, 220, 241, 184, 151, 12, 25, 210, 119, 169, 69, 131, 128, 7, 86, 50, 64, 195, 66, 238, 32, 123, 184, 138, 11, 30, 247, 112, 202, 168, 75, 2, 78, 112, 244, 4, 182, 232, 133, 207, 146, 64, 166, 33, 47, 189, 43, 100, 52, 213, 186, 156, 82, 35, 216, 49, 67, 238, 198, 194, 147, 128, 71, 126, 135, 4, 130, 197, 171, 104, 193, 122, 64, 159, 67, 46, 20, 68, 36, 5, 191, 94, 57, 92, 88, 164, 243, 6, 187, 146, 143, 19, 181, 226, 24, 238, 204, 163, 85, 238, 13, 216, 80, 69, 136, 206, 64, 103, 41, 108, 13, 37, 158, 182, 246, 71, 127, 195, 211, 101, 232, 120, 131, 205, 1, 97, 241, 119, 13, 246, 140, 112, 226, 217, 233, 146, 156, 247, 91, 128, 101, 234, 201, 60, 39, 27, 119, 5, 167, 71, 84, 129, 219, 126, 64, 29, 58, 96, 30, 117, 172, 31, 34, 26, 81, 43, 206, 74, 82, 202, 91, 83, 240, 107, 137, 181, 100, 146, 246, 1, 18, 98, 220, 206, 217, 152, 184, 26, 75, 226, 70, 253, 18, 214, 18, 216, 142, 99, 136, 139, 36, 95, 217, 95, 120, 193, 116, 74, 224, 124, 172, 146, 68, 93, 12, 224, 110, 188, 200, 105, 213, 141, 66, 65, 131, 46, 117, 169, 45, 47, 162, 250, 8, 195, 166, 157, 32, 178, 20, 147, 177, 167, 220, 44, 94, 62, 202, 206, 229, 140, 196, 186, 125, 69, 82, 252, 12, 244, 171, 44, 116, 11, 114, 161, 205, 253, 180, 68, 146, 195, 101, 221, 100, 102, 158, 21, 223, 192, 102, 135, 12, 153, 23, 167, 59, 221, 222, 119, 96, 213, 39, 67, 106, 133, 236, 77, 98, 34, 135, 87, 164, 160, 203, 222, 80, 244, 1, 108, 196, 155, 56, 102, 8, 126, 78, 61, 53, 217, 110, 74, 113, 135, 12, 105, 79, 10, 143, 126, 214, 96, 227, 202, 90, 71, 119, 161, 208, 48, 204, 230, 51, 92, 183, 170, 70, 175, 126, 210, 198, 47, 44, 179, 245, 220, 104, 154, 53, 253, 63, 104, 23, 110, 95, 67, 59, 237, 102, 83, 215, 208, 62, 236, 94, 131, 186, 61, 163, 85, 51, 112, 77, 207, 160, 61, 216, 190, 6, 55, 140, 158, 209, 212, 179, 71, 175, 97, 109, 118, 56, 75, 47, 245, 86, 181, 93, 51, 91, 39, 86, 239, 69, 167, 62, 19, 192, 30, 108, 207, 67, 189, 83, 108, 54, 122, 248, 76, 215, 208, 54, 160, 121, 236, 73, 183, 221, 210, 51, 168, 0, 183, 230, 229, 29, 220, 238, 181, 31, 232, 217, 163, 31, 97, 107, 65, 195, 161, 123, 176, 111, 118, 219, 77, 163, 103, 182, 91, 214, 9, 110, 63, 235, 200, 155, 244, 102, 227, 120, 43, 229, 180, 110, 52, 123, 167, 47, 116, 237, 237, 148, 26, 54, 204, 86, 189, 166, 103, 142, 94, 194, 154, 204, 63, 31, 211, 32, 189, 184, 76, 82, 251, 121, 29, 95, 189, 248, 14, 108, 205, 67, 141, 54, 174, 214, 117, 45, 77, 236, 20, 56, 193, 70, 181, 222, 120, 214, 212, 51, 143, 191, 131, 29, 155, 143, 22, 149, 237, 227, 124, 53, 126, 132, 119, 228, 164, 235, 104, 223, 30, 15, 153, 120, 21, 245, 75, 54, 31, 149, 103, 159, 236, 31, 51, 199, 45, 15, 121, 242, 16, 87, 239, 247, 79, 137, 207, 198, 199, 253, 165, 88, 246, 224, 207, 0, 0, 0, 255, 255, 236, 69, 194, 8, 227, 11, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 180, 86, 221, 110, 219, 54, 27, 254, 228, 159, 214, 121, 221, 36, 42, 155, 52, 182, 219, 126, 115, 125, 80, 100, 197, 38, 35, 217, 6, 12, 219, 208, 213, 137, 141, 86, 136, 147, 26, 178, 214, 161, 3, 6, 129, 150, 88, 135, 179, 36, 10, 34, 101, 215, 39, 187, 140, 157, 237, 70, 118, 15, 187, 167, 129, 148, 236, 250, 71, 9, 214, 131, 157, 153, 239, 195, 231, 125, 222, 95, 90, 208, 74, 70, 36, 110, 187, 216, 35, 161, 75, 218, 56, 162, 237, 233, 73, 91, 96, 62, 241, 41, 23, 70, 20, 51, 193, 208, 3, 121, 199, 200, 238, 24, 56, 162, 198, 244, 164, 241, 255, 49, 99, 99, 159, 180, 213, 149, 81, 242, 190, 237, 37, 49, 22, 148, 133, 41, 169, 241, 217, 38, 46, 104, 64, 184, 192, 65, 148, 93, 216, 114, 48, 139, 113, 20, 145, 152, 167, 120, 43, 134, 138, 141, 249, 164, 79, 185, 64, 8, 74, 33, 14, 72, 77, 107, 106, 199, 59, 150, 250, 141, 190, 129, 210, 132, 134, 94, 173, 208, 212, 142, 247, 78, 159, 26, 57, 65, 26, 11, 7, 23, 52, 244, 44, 117, 29, 61, 130, 157, 17, 230, 196, 81, 254, 138, 202, 95, 69, 26, 174, 112, 64, 90, 24, 244, 5, 229, 146, 8, 236, 97, 129, 209, 37, 28, 4, 248, 131, 35, 107, 194, 157, 136, 196, 14, 39, 46, 11, 61, 21, 75, 245, 244, 177, 145, 166, 97, 44, 210, 48, 186, 44, 25, 249, 228, 45, 246, 19, 98, 221, 15, 240, 7, 233, 144, 15, 72, 60, 84, 180, 214, 79, 80, 95, 72, 12, 112, 44, 168, 44, 217, 82, 75, 135, 226, 132, 204, 179, 52, 229, 79, 244, 12, 246, 217, 44, 36, 177, 115, 205, 184, 72, 131, 46, 40, 116, 87, 153, 95, 51, 46, 84, 228, 19, 56, 52, 57, 243, 85, 7, 94, 197, 44, 137, 46, 137, 136, 169, 203, 81, 27, 14, 66, 50, 203, 15, 95, 179, 238, 135, 100, 182, 30, 32, 122, 10, 247, 34, 230, 251, 36, 118, 92, 150, 132, 66, 201, 21, 173, 106, 106, 59, 151, 166, 214, 159, 37, 216, 91, 36, 49, 20, 88, 36, 28, 125, 1, 104, 132, 221, 137, 207, 198, 41, 205, 185, 166, 161, 80, 34, 69, 75, 207, 16, 69, 126, 77, 67, 129, 158, 0, 196, 4, 123, 142, 79, 166, 196, 207, 20, 118, 164, 165, 47, 13, 178, 71, 216, 157, 100, 104, 81, 161, 21, 236, 78, 82, 240, 25, 236, 199, 88, 144, 213, 92, 74, 42, 151, 93, 105, 254, 152, 71, 23, 118, 101, 210, 14, 245, 156, 145, 207, 220, 73, 173, 172, 26, 214, 188, 113, 80, 204, 238, 153, 188, 103, 85, 37, 205, 244, 212, 1, 77, 225, 136, 46, 234, 234, 140, 101, 97, 157, 32, 173, 108, 237, 78, 179, 120, 92, 61, 125, 113, 235, 224, 165, 213, 49, 114, 91, 211, 11, 69, 60, 183, 14, 233, 39, 181, 237, 238, 77, 109, 59, 128, 50, 9, 34, 49, 175, 85, 154, 218, 113, 197, 74, 15, 13, 1, 141, 155, 181, 115, 198, 237, 37, 148, 167, 114, 114, 85, 79, 170, 167, 207, 115, 147, 203, 245, 104, 165, 196, 239, 10, 223, 106, 173, 31, 161, 186, 82, 80, 84, 135, 10, 23, 56, 22, 14, 245, 178, 137, 184, 171, 206, 166, 135, 14, 225, 14, 9, 61, 9, 164, 67, 80, 38, 161, 103, 122, 173, 63, 52, 128, 129, 26, 56, 51, 124, 207, 80, 23, 116, 31, 115, 225, 96, 215, 37, 156, 59, 242, 37, 201, 214, 175, 177, 181, 126, 246, 226, 153, 177, 246, 36, 167, 163, 40, 210, 136, 26, 80, 161, 30, 9, 5, 21, 243, 108, 135, 150, 231, 188, 161, 42, 230, 12, 85, 235, 47, 13, 234, 67, 65, 221, 201, 188, 247, 129, 184, 137, 44, 66, 71, 136, 152, 142, 18, 65, 56, 122, 5, 250, 140, 197, 19, 18, 171, 190, 57, 242, 9, 205, 226, 124, 114, 235, 148, 88, 123, 41, 109, 249, 222, 217, 80, 231, 238, 53, 241, 18, 159, 56, 130, 57, 105, 245, 100, 218, 44, 17, 89, 107, 234, 219, 15, 79, 246, 0, 91, 15, 23, 92, 155, 13, 37, 211, 78, 137, 173, 23, 112, 127, 235, 233, 65, 159, 131, 190, 49, 224, 188, 166, 53, 139, 199, 59, 214, 254, 250, 100, 242, 214, 223, 37, 56, 218, 114, 112, 206, 194, 247, 116, 140, 106, 112, 119, 74, 98, 78, 89, 184, 104, 113, 118, 68, 167, 240, 32, 76, 2, 71, 237, 123, 180, 96, 113, 149, 69, 249, 172, 80, 147, 195, 156, 4, 22, 193, 222, 210, 37, 71, 95, 195, 129, 228, 204, 98, 42, 123, 242, 145, 84, 92, 146, 80, 152, 4, 63, 75, 120, 133, 69, 97, 127, 83, 165, 164, 118, 244, 229, 173, 213, 223, 72, 197, 88, 143, 37, 221, 210, 189, 120, 61, 64, 31, 244, 173, 224, 202, 74, 171, 243, 73, 90, 27, 41, 164, 98, 251, 179, 117, 107, 131, 194, 131, 156, 160, 86, 215, 183, 156, 174, 239, 15, 235, 235, 251, 236, 223, 197, 178, 178, 186, 141, 223, 224, 32, 47, 166, 255, 66, 235, 249, 239, 112, 111, 245, 15, 26, 53, 224, 161, 221, 25, 94, 56, 125, 115, 104, 59, 23, 230, 85, 215, 49, 175, 222, 118, 250, 102, 87, 255, 31, 170, 195, 225, 6, 118, 245, 198, 186, 236, 244, 117, 45, 7, 26, 218, 230, 249, 197, 59, 189, 128, 30, 67, 109, 3, 234, 13, 94, 247, 46, 123, 86, 167, 175, 23, 159, 123, 31, 245, 237, 121, 68, 214, 245, 237, 119, 131, 222, 138, 254, 35, 56, 218, 192, 186, 189, 115, 115, 104, 190, 185, 210, 181, 28, 176, 115, 110, 155, 111, 77, 251, 157, 94, 56, 251, 21, 142, 92, 22, 228, 85, 231, 108, 119, 89, 30, 185, 195, 3, 237, 151, 147, 49, 21, 215, 201, 200, 112, 89, 208, 94, 253, 48, 251, 146, 122, 126, 123, 204, 210, 111, 165, 236, 43, 237, 123, 28, 209, 233, 201, 232, 142, 178, 125, 245, 79, 0, 0, 0, 255, 255, 217, 101, 16, 254, 201, 9, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 75, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 47, 47, 74, 44, 40, 72, 45, 42, 214, 3, 139, 8, 241, 67, 228, 245, 96, 242, 74, 202, 92, 220, 46, 249, 165, 73, 57, 169, 97, 137, 57, 165, 169, 66, 34, 92, 172, 101, 32, 134, 4, 163, 2, 163, 6, 99, 16, 132, 163, 164, 196, 197, 229, 150, 147, 159, 88, 130, 69, 13, 19, 146, 26, 207, 188, 18, 51, 19, 44, 106, 152, 97, 106, 148, 185, 184, 67, 113, 41, 98, 65, 53, 200, 216, 8, 139, 26, 86, 52, 131, 176, 42, 226, 133, 41, 82, 228, 226, 116, 202, 207, 207, 193, 162, 132, 3, 201, 156, 224, 146, 162, 204, 188, 116, 44, 138, 56, 145, 28, 228, 84, 89, 146, 90, 140, 69, 13, 15, 84, 141, 83, 51, 35, 151, 112, 114, 126, 174, 30, 90, 240, 58, 241, 134, 67, 195, 63, 0, 36, 18, 192, 24, 101, 8, 85, 145, 158, 159, 147, 152, 151, 174, 151, 95, 148, 142, 136, 171, 146, 202, 130, 212, 98, 253, 236, 188, 252, 242, 60, 120, 188, 21, 36, 253, 96, 100, 92, 196, 196, 236, 30, 224, 180, 138, 73, 206, 29, 162, 57, 0, 170, 67, 47, 60, 53, 39, 199, 27, 164, 62, 4, 164, 53, 137, 13, 108, 148, 49, 32, 0, 0, 255, 255, 60, 146, 72, 48, 6, 2, 0, 0]) as $.Slice<number>])

export function __goscript_set_yarpcFileDescriptorClosuree1236bf37818157b(__goscriptValue: $.Slice<$.Slice<number>>): void {
	yarpcFileDescriptorClosuree1236bf37818157b = __goscriptValue
}

function __goscriptInit0(): void {
	yarpc.RegisterClientBuilder($.interfaceValue($.functionValue(async (clientConfig: transport.ClientConfig | null, structField: reflect.StructField): globalThis.Promise<ScheduleAPIYARPCClient | null> => {
		return await NewScheduleAPIYARPCClient(clientConfig, protobuf.ClientBuilderOptions(clientConfig, $.markAsStructValue($.cloneStructValue(structField))))
	}, ({ kind: $.TypeKind.Function, params: ["transport.ClientConfig", "reflect.StructField"], results: ["apiv1.ScheduleAPIYARPCClient"] } as $.FunctionTypeInfo)), "func(clientConfig transport.ClientConfig, structField reflect.StructField) apiv1.ScheduleAPIYARPCClient", ({ kind: $.TypeKind.Function, params: ["transport.ClientConfig", "reflect.StructField"], results: ["apiv1.ScheduleAPIYARPCClient"] } as $.FunctionTypeInfo)))
}

var __goscriptAwait: any

export { __goscriptInit0 }
