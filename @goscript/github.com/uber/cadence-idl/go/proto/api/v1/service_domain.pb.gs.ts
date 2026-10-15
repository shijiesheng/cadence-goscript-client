// Generated file based on service_domain.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as types from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"

import * as __goscript_common_pb from "./common.pb.gs.ts"

import * as __goscript_domain_pb from "./domain.pb.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "./common.pb.gs.ts"
import "./domain.pb.gs.ts"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.RegisterDomainRequest", "apiv1.RegisterDomainResponse", "apiv1.UpdateDomainRequest", "apiv1.UpdateDomainResponse", "apiv1.FailoverDomainRequest", "apiv1.FailoverDomainResponse", "apiv1.DeprecateDomainRequest", "apiv1.DeprecateDomainResponse", "apiv1.DeleteDomainRequest", "apiv1.DeleteDomainResponse", "apiv1.DescribeDomainRequest", "apiv1.isDescribeDomainRequest_DescribeBy", "apiv1.DescribeDomainRequest_Id", "apiv1.DescribeDomainRequest_Name", "apiv1.DescribeDomainResponse", "apiv1.ListDomainsRequest", "apiv1.ListDomainsResponse", "apiv1.ListFailoverHistoryRequest", "apiv1.ListFailoverHistoryRequestFilters", "apiv1.ListFailoverHistoryResponse", "apiv1.FailoverEvent", "apiv1.ClusterFailover"])

export type isDescribeDomainRequest_DescribeBy = {
	MarshalTo(_p0: $.Slice<number>): [number, $.GoError]
	Size(): number
	isDescribeDomainRequest_DescribeBy(): void
}

$.registerInterfaceType(
	"apiv1.isDescribeDomainRequest_DescribeBy",
	null,
	[{ name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }] }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }] }, { name: "isDescribeDomainRequest_DescribeBy", args: [], returns: [] }]
);

export class RegisterDomainRequest {
	public get SecurityToken(): string {
		return this._fields.SecurityToken
	}

	public set SecurityToken(value: string) {
		this._fields.SecurityToken = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Description(): string {
		return this._fields.Description
	}

	public set Description(value: string) {
		this._fields.Description = value
	}

	public get OwnerEmail(): string {
		return this._fields.OwnerEmail
	}

	public set OwnerEmail(value: string) {
		this._fields.OwnerEmail = value
	}

	public get WorkflowExecutionRetentionPeriod(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.WorkflowExecutionRetentionPeriod
	}

	public set WorkflowExecutionRetentionPeriod(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.WorkflowExecutionRetentionPeriod = value
	}

	public get Clusters(): $.Slice<__goscript_domain_pb.ClusterReplicationConfiguration | $.VarRef<__goscript_domain_pb.ClusterReplicationConfiguration> | null> {
		return this._fields.Clusters
	}

	public set Clusters(value: $.Slice<__goscript_domain_pb.ClusterReplicationConfiguration | $.VarRef<__goscript_domain_pb.ClusterReplicationConfiguration> | null>) {
		this._fields.Clusters = value
	}

	public get ActiveClusterName(): string {
		return this._fields.ActiveClusterName
	}

	public set ActiveClusterName(value: string) {
		this._fields.ActiveClusterName = value
	}

	public get Data(): globalThis.Map<string, string> | null {
		return this._fields.Data
	}

	public set Data(value: globalThis.Map<string, string> | null) {
		this._fields.Data = value
	}

	public get IsGlobalDomain(): boolean {
		return this._fields.IsGlobalDomain
	}

	public set IsGlobalDomain(value: boolean) {
		this._fields.IsGlobalDomain = value
	}

	public get HistoryArchivalStatus(): __goscript_domain_pb.ArchivalStatus {
		return this._fields.HistoryArchivalStatus
	}

	public set HistoryArchivalStatus(value: __goscript_domain_pb.ArchivalStatus) {
		this._fields.HistoryArchivalStatus = value
	}

	public get HistoryArchivalUri(): string {
		return this._fields.HistoryArchivalUri
	}

	public set HistoryArchivalUri(value: string) {
		this._fields.HistoryArchivalUri = value
	}

	public get VisibilityArchivalStatus(): __goscript_domain_pb.ArchivalStatus {
		return this._fields.VisibilityArchivalStatus
	}

	public set VisibilityArchivalStatus(value: __goscript_domain_pb.ArchivalStatus) {
		this._fields.VisibilityArchivalStatus = value
	}

	public get VisibilityArchivalUri(): string {
		return this._fields.VisibilityArchivalUri
	}

	public set VisibilityArchivalUri(value: string) {
		this._fields.VisibilityArchivalUri = value
	}

	public get ActiveClustersByRegion(): globalThis.Map<string, string> | null {
		return this._fields.ActiveClustersByRegion
	}

	public set ActiveClustersByRegion(value: globalThis.Map<string, string> | null) {
		this._fields.ActiveClustersByRegion = value
	}

	public get ActiveClusters(): __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null {
		return this._fields.ActiveClusters
	}

	public set ActiveClusters(value: __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null) {
		this._fields.ActiveClusters = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		SecurityToken: string
		Name: string
		Description: string
		OwnerEmail: string
		WorkflowExecutionRetentionPeriod: types.Duration | $.VarRef<types.Duration> | null
		Clusters: $.Slice<__goscript_domain_pb.ClusterReplicationConfiguration | $.VarRef<__goscript_domain_pb.ClusterReplicationConfiguration> | null>
		ActiveClusterName: string
		Data: globalThis.Map<string, string> | null
		IsGlobalDomain: boolean
		HistoryArchivalStatus: __goscript_domain_pb.ArchivalStatus
		HistoryArchivalUri: string
		VisibilityArchivalStatus: __goscript_domain_pb.ArchivalStatus
		VisibilityArchivalUri: string
		ActiveClustersByRegion: globalThis.Map<string, string> | null
		ActiveClusters: __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{SecurityToken?: string, Name?: string, Description?: string, OwnerEmail?: string, WorkflowExecutionRetentionPeriod?: types.Duration | $.VarRef<types.Duration> | null, Clusters?: $.Slice<__goscript_domain_pb.ClusterReplicationConfiguration | $.VarRef<__goscript_domain_pb.ClusterReplicationConfiguration> | null>, ActiveClusterName?: string, Data?: globalThis.Map<string, string> | null, IsGlobalDomain?: boolean, HistoryArchivalStatus?: __goscript_domain_pb.ArchivalStatus, HistoryArchivalUri?: string, VisibilityArchivalStatus?: __goscript_domain_pb.ArchivalStatus, VisibilityArchivalUri?: string, ActiveClustersByRegion?: globalThis.Map<string, string> | null, ActiveClusters?: __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			SecurityToken: init?.SecurityToken ?? ("" as string),
			Name: init?.Name ?? ("" as string),
			Description: init?.Description ?? ("" as string),
			OwnerEmail: init?.OwnerEmail ?? ("" as string),
			WorkflowExecutionRetentionPeriod: init?.WorkflowExecutionRetentionPeriod ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			Clusters: init?.Clusters ?? (null! as $.Slice<__goscript_domain_pb.ClusterReplicationConfiguration | $.VarRef<__goscript_domain_pb.ClusterReplicationConfiguration> | null>),
			ActiveClusterName: init?.ActiveClusterName ?? ("" as string),
			Data: init?.Data ?? (null! as globalThis.Map<string, string> | null),
			IsGlobalDomain: init?.IsGlobalDomain ?? (false as boolean),
			HistoryArchivalStatus: init?.HistoryArchivalStatus ?? (0 as __goscript_domain_pb.ArchivalStatus),
			HistoryArchivalUri: init?.HistoryArchivalUri ?? ("" as string),
			VisibilityArchivalStatus: init?.VisibilityArchivalStatus ?? (0 as __goscript_domain_pb.ArchivalStatus),
			VisibilityArchivalUri: init?.VisibilityArchivalUri ?? ("" as string),
			ActiveClustersByRegion: init?.ActiveClustersByRegion ?? (null! as globalThis.Map<string, string> | null),
			ActiveClusters: init?.ActiveClusters ?? (null! as __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RegisterDomainRequest {
		return new RegisterDomainRequest(this, true)
	}

	public __goscriptAssign(source: RegisterDomainRequest): void {
		const target = this._fields
		const values = source._fields
		target.SecurityToken = values.SecurityToken
		target.Name = values.Name
		target.Description = values.Description
		target.OwnerEmail = values.OwnerEmail
		target.WorkflowExecutionRetentionPeriod = values.WorkflowExecutionRetentionPeriod
		target.Clusters = values.Clusters
		target.ActiveClusterName = values.ActiveClusterName
		target.Data = values.Data
		target.IsGlobalDomain = values.IsGlobalDomain
		target.HistoryArchivalStatus = values.HistoryArchivalStatus
		target.HistoryArchivalUri = values.HistoryArchivalUri
		target.VisibilityArchivalStatus = values.VisibilityArchivalStatus
		target.VisibilityArchivalUri = values.VisibilityArchivalUri
		target.ActiveClustersByRegion = values.ActiveClustersByRegion
		target.ActiveClusters = values.ActiveClusters
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([0])]
	}

	public GetActiveClusterName(): string {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RegisterDomainRequest>(m).ActiveClusterName
		}
		return ""
	}

	public GetActiveClusters(): __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RegisterDomainRequest>(m).ActiveClusters
		}
		return null
	}

	public GetActiveClustersByRegion(): globalThis.Map<string, string> | null {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RegisterDomainRequest>(m).ActiveClustersByRegion
		}
		return null
	}

	public GetClusters(): $.Slice<__goscript_domain_pb.ClusterReplicationConfiguration | $.VarRef<__goscript_domain_pb.ClusterReplicationConfiguration> | null> {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RegisterDomainRequest>(m).Clusters
		}
		return null
	}

	public GetData(): globalThis.Map<string, string> | null {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RegisterDomainRequest>(m).Data
		}
		return null
	}

	public GetDescription(): string {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RegisterDomainRequest>(m).Description
		}
		return ""
	}

	public GetHistoryArchivalStatus(): __goscript_domain_pb.ArchivalStatus {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RegisterDomainRequest>(m).HistoryArchivalStatus
		}
		return 0
	}

	public GetHistoryArchivalUri(): string {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RegisterDomainRequest>(m).HistoryArchivalUri
		}
		return ""
	}

	public GetIsGlobalDomain(): boolean {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RegisterDomainRequest>(m).IsGlobalDomain
		}
		return false
	}

	public GetName(): string {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RegisterDomainRequest>(m).Name
		}
		return ""
	}

	public GetOwnerEmail(): string {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RegisterDomainRequest>(m).OwnerEmail
		}
		return ""
	}

	public GetSecurityToken(): string {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RegisterDomainRequest>(m).SecurityToken
		}
		return ""
	}

	public GetVisibilityArchivalStatus(): __goscript_domain_pb.ArchivalStatus {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RegisterDomainRequest>(m).VisibilityArchivalStatus
		}
		return 0
	}

	public GetVisibilityArchivalUri(): string {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RegisterDomainRequest>(m).VisibilityArchivalUri
		}
		return ""
	}

	public GetWorkflowExecutionRetentionPeriod(): types.Duration | $.VarRef<types.Duration> | null {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<RegisterDomainRequest>(m).WorkflowExecutionRetentionPeriod
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RegisterDomainRequest).Size() : RegisterDomainRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple0: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RegisterDomainRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RegisterDomainRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RegisterDomainRequest).Size() : RegisterDomainRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RegisterDomainRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RegisterDomainRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		const m$: RegisterDomainRequest = m == null ? $.pointerTarget<RegisterDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RegisterDomainRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RegisterDomainRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RegisterDomainRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RegisterDomainRequest).XXX_unrecognized)
		}
		if ((m$ as RegisterDomainRequest).ActiveClusters != null) {
			{
				let [size, err] = __goscript_domain_pb.ActiveClusters.prototype.MarshalToSizedBuffer.call((m$ as RegisterDomainRequest).ActiveClusters, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x7a
		}
		if ($.len((m$ as RegisterDomainRequest).ActiveClustersByRegion) > 0) {
			for (const [k, __rangeValue] of (m$ as RegisterDomainRequest).ActiveClustersByRegion?.entries() ?? []) {
				let v = $.mapGet<string, string, string>((m$ as RegisterDomainRequest).ActiveClustersByRegion, k, "")[0]
				let baseI: number = i
				i = i - ($.stringLen(v))
				$.copy($.goSlice(dAtA, i, undefined), v)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen(v)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x72
			}
		}
		if ($.stringLen((m$ as RegisterDomainRequest).VisibilityArchivalUri) > 0) {
			i = i - ($.stringLen((m$ as RegisterDomainRequest).VisibilityArchivalUri))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RegisterDomainRequest).VisibilityArchivalUri)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as RegisterDomainRequest).VisibilityArchivalUri)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x6a
		}
		if ((m$ as RegisterDomainRequest).VisibilityArchivalStatus != 0) {
			i = encodeVarintServiceDomain(dAtA, i, $.uint64((m$ as RegisterDomainRequest).VisibilityArchivalStatus))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x60
		}
		if ($.stringLen((m$ as RegisterDomainRequest).HistoryArchivalUri) > 0) {
			i = i - ($.stringLen((m$ as RegisterDomainRequest).HistoryArchivalUri))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RegisterDomainRequest).HistoryArchivalUri)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as RegisterDomainRequest).HistoryArchivalUri)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x5a
		}
		if ((m$ as RegisterDomainRequest).HistoryArchivalStatus != 0) {
			i = encodeVarintServiceDomain(dAtA, i, $.uint64((m$ as RegisterDomainRequest).HistoryArchivalStatus))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x50
		}
		if ((m$ as RegisterDomainRequest).IsGlobalDomain) {
			i--
			if ((m$ as RegisterDomainRequest).IsGlobalDomain) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x48
		}
		if ($.len((m$ as RegisterDomainRequest).Data) > 0) {
			for (const [k, __rangeValue] of (m$ as RegisterDomainRequest).Data?.entries() ?? []) {
				let v = $.mapGet<string, string, string>((m$ as RegisterDomainRequest).Data, k, "")[0]
				let baseI: number = i
				i = i - ($.stringLen(v))
				$.copy($.goSlice(dAtA, i, undefined), v)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen(v)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x42
			}
		}
		if ($.stringLen((m$ as RegisterDomainRequest).ActiveClusterName) > 0) {
			i = i - ($.stringLen((m$ as RegisterDomainRequest).ActiveClusterName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RegisterDomainRequest).ActiveClusterName)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as RegisterDomainRequest).ActiveClusterName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x3a
		}
		if ($.sliceLen((m$ as RegisterDomainRequest).Clusters) > 0) {
			for (let __goscriptSliceWindow0 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as RegisterDomainRequest).Clusters) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_domain_pb.ClusterReplicationConfiguration.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as RegisterDomainRequest).Clusters!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = 0x32
			}
		}
		if ((m$ as RegisterDomainRequest).WorkflowExecutionRetentionPeriod != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as RegisterDomainRequest).WorkflowExecutionRetentionPeriod, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ($.stringLen((m$ as RegisterDomainRequest).OwnerEmail) > 0) {
			i = i - ($.stringLen((m$ as RegisterDomainRequest).OwnerEmail))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RegisterDomainRequest).OwnerEmail)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as RegisterDomainRequest).OwnerEmail)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ($.stringLen((m$ as RegisterDomainRequest).Description) > 0) {
			i = i - ($.stringLen((m$ as RegisterDomainRequest).Description))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RegisterDomainRequest).Description)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as RegisterDomainRequest).Description)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.stringLen((m$ as RegisterDomainRequest).Name) > 0) {
			i = i - ($.stringLen((m$ as RegisterDomainRequest).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RegisterDomainRequest).Name)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as RegisterDomainRequest).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as RegisterDomainRequest).SecurityToken) > 0) {
			i = i - ($.stringLen((m$ as RegisterDomainRequest).SecurityToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RegisterDomainRequest).SecurityToken)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as RegisterDomainRequest).SecurityToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		$.assignStruct($.pointerValue<RegisterDomainRequest>(m), $.markAsStructValue(new RegisterDomainRequest()))
	}

	public Size(): number {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		let n: number = 0
		const m$: RegisterDomainRequest = m == null ? $.pointerTarget<RegisterDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RegisterDomainRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as RegisterDomainRequest).SecurityToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		l = $.stringLen((m$ as RegisterDomainRequest).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		l = $.stringLen((m$ as RegisterDomainRequest).Description)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		l = $.stringLen((m$ as RegisterDomainRequest).OwnerEmail)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as RegisterDomainRequest).WorkflowExecutionRetentionPeriod != null) {
			l = types.Duration.prototype.Size.call((m$ as RegisterDomainRequest).WorkflowExecutionRetentionPeriod)
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ($.sliceLen((m$ as RegisterDomainRequest).Clusters) > 0) {
			for (let __goscriptRangeTarget0 = (m$ as RegisterDomainRequest).Clusters, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_domain_pb.ClusterReplicationConfiguration | $.VarRef<__goscript_domain_pb.ClusterReplicationConfiguration> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_domain_pb.ClusterReplicationConfiguration).Size() : __goscript_domain_pb.ClusterReplicationConfiguration.prototype.Size.call(e))
				n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
			}
		}
		l = $.stringLen((m$ as RegisterDomainRequest).ActiveClusterName)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ($.len((m$ as RegisterDomainRequest).Data) > 0) {
			for (const [k, v] of (m$ as RegisterDomainRequest).Data?.entries() ?? []) {
				k
				v
				let mapEntrySize = ((((1 + $.stringLen(k)) + sovServiceDomain($.uint64($.stringLen(k)))) + 1) + $.stringLen(v)) + sovServiceDomain($.uint64($.stringLen(v)))
				n = n + ((mapEntrySize + 1) + sovServiceDomain($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as RegisterDomainRequest).IsGlobalDomain) {
			n = n + (2)
		}
		if ((m$ as RegisterDomainRequest).HistoryArchivalStatus != 0) {
			n = n + (1 + sovServiceDomain($.uint64((m$ as RegisterDomainRequest).HistoryArchivalStatus)))
		}
		l = $.stringLen((m$ as RegisterDomainRequest).HistoryArchivalUri)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as RegisterDomainRequest).VisibilityArchivalStatus != 0) {
			n = n + (1 + sovServiceDomain($.uint64((m$ as RegisterDomainRequest).VisibilityArchivalStatus)))
		}
		l = $.stringLen((m$ as RegisterDomainRequest).VisibilityArchivalUri)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ($.len((m$ as RegisterDomainRequest).ActiveClustersByRegion) > 0) {
			for (const [k, v] of (m$ as RegisterDomainRequest).ActiveClustersByRegion?.entries() ?? []) {
				k
				v
				let mapEntrySize = ((((1 + $.stringLen(k)) + sovServiceDomain($.uint64($.stringLen(k)))) + 1) + $.stringLen(v)) + sovServiceDomain($.uint64($.stringLen(v)))
				n = n + ((mapEntrySize + 1) + sovServiceDomain($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as RegisterDomainRequest).ActiveClusters != null) {
			l = __goscript_domain_pb.ActiveClusters.prototype.Size.call((m$ as RegisterDomainRequest).ActiveClusters)
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as RegisterDomainRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RegisterDomainRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RegisterDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		const m$: RegisterDomainRequest = m == null ? $.pointerTarget<RegisterDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RegisterDomainRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: RegisterDomainRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RegisterDomainRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field SecurityToken", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RegisterDomainRequest).SecurityToken = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Name", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RegisterDomainRequest).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Description", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RegisterDomainRequest).Description = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field OwnerEmail", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RegisterDomainRequest).OwnerEmail = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowExecutionRetentionPeriod", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RegisterDomainRequest).WorkflowExecutionRetentionPeriod == null) {
						;(m$ as RegisterDomainRequest).WorkflowExecutionRetentionPeriod = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as RegisterDomainRequest).WorkflowExecutionRetentionPeriod, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Clusters", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RegisterDomainRequest).Clusters = $.appendOne((m$ as RegisterDomainRequest).Clusters, new __goscript_domain_pb.ClusterReplicationConfiguration(), $.appendZeros.nil)
					{
						let err = __goscript_domain_pb.ClusterReplicationConfiguration.prototype.Unmarshal.call($.arrayIndex((m$ as RegisterDomainRequest).Clusters!, $.sliceLen((m$ as RegisterDomainRequest).Clusters) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 7:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveClusterName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RegisterDomainRequest).ActiveClusterName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 8:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Data", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RegisterDomainRequest).Data == null) {
						;(m$ as RegisterDomainRequest).Data = $.makeMap<string, string>()
					}
					let mapkey: string = ""
					let mapvalue: string = ""
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow0: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowServiceDomain
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
							iNdEx++
							__goscriptShadow0 = $.uint64Or(__goscriptShadow0, $.uint64Shl($.uint64(b & 0x7F), shift))
							if (b < 0x80) {
								break
							}
						}
						let __goscriptShadow1 = $.int($.uint64Shr(__goscriptShadow0, 3n), 32)
						if (__goscriptShadow1 == 1) {
							let stringLenmapkey: bigint = 0n
							for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
								if (shift >= 64) {
									return ErrIntOverflowServiceDomain
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthServiceDomain
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthServiceDomain
							}
							if (postStringIndexmapkey > l) {
								return io.ErrUnexpectedEOF
							}
							mapkey = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapkey))
							iNdEx = postStringIndexmapkey
						} else {
							if (__goscriptShadow1 == 2) {
								let stringLenmapvalue: bigint = 0n
								for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
									if (shift >= 64) {
										return ErrIntOverflowServiceDomain
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
									iNdEx++
									stringLenmapvalue = $.uint64Or(stringLenmapvalue, $.uint64Shl($.uint64(b & 0x7F), shift))
									if (b < 0x80) {
										break
									}
								}
								let intStringLenmapvalue = $.int(stringLenmapvalue)
								if (intStringLenmapvalue < 0) {
									return ErrInvalidLengthServiceDomain
								}
								let postStringIndexmapvalue: number = iNdEx + intStringLenmapvalue
								if (postStringIndexmapvalue < 0) {
									return ErrInvalidLengthServiceDomain
								}
								if (postStringIndexmapvalue > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapvalue))
								iNdEx = postStringIndexmapvalue
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthServiceDomain
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as RegisterDomainRequest).Data, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				case 9:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field IsGlobalDomain", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as RegisterDomainRequest).IsGlobalDomain = (v != 0)
					break
				}
				case 10:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field HistoryArchivalStatus", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as RegisterDomainRequest).HistoryArchivalStatus = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++;
						;(m$ as RegisterDomainRequest).HistoryArchivalStatus = (m$ as RegisterDomainRequest).HistoryArchivalStatus | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 11:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field HistoryArchivalUri", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RegisterDomainRequest).HistoryArchivalUri = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 12:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field VisibilityArchivalStatus", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as RegisterDomainRequest).VisibilityArchivalStatus = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++;
						;(m$ as RegisterDomainRequest).VisibilityArchivalStatus = (m$ as RegisterDomainRequest).VisibilityArchivalStatus | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 13:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field VisibilityArchivalUri", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RegisterDomainRequest).VisibilityArchivalUri = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 14:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveClustersByRegion", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RegisterDomainRequest).ActiveClustersByRegion == null) {
						;(m$ as RegisterDomainRequest).ActiveClustersByRegion = $.makeMap<string, string>()
					}
					let mapkey: string = ""
					let mapvalue: string = ""
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow2: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowServiceDomain
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
							iNdEx++
							__goscriptShadow2 = $.uint64Or(__goscriptShadow2, $.uint64Shl($.uint64(b & 0x7F), shift))
							if (b < 0x80) {
								break
							}
						}
						let __goscriptShadow3 = $.int($.uint64Shr(__goscriptShadow2, 3n), 32)
						if (__goscriptShadow3 == 1) {
							let stringLenmapkey: bigint = 0n
							for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
								if (shift >= 64) {
									return ErrIntOverflowServiceDomain
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthServiceDomain
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthServiceDomain
							}
							if (postStringIndexmapkey > l) {
								return io.ErrUnexpectedEOF
							}
							mapkey = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapkey))
							iNdEx = postStringIndexmapkey
						} else {
							if (__goscriptShadow3 == 2) {
								let stringLenmapvalue: bigint = 0n
								for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
									if (shift >= 64) {
										return ErrIntOverflowServiceDomain
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
									iNdEx++
									stringLenmapvalue = $.uint64Or(stringLenmapvalue, $.uint64Shl($.uint64(b & 0x7F), shift))
									if (b < 0x80) {
										break
									}
								}
								let intStringLenmapvalue = $.int(stringLenmapvalue)
								if (intStringLenmapvalue < 0) {
									return ErrInvalidLengthServiceDomain
								}
								let postStringIndexmapvalue: number = iNdEx + intStringLenmapvalue
								if (postStringIndexmapvalue < 0) {
									return ErrInvalidLengthServiceDomain
								}
								if (postStringIndexmapvalue > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapvalue))
								iNdEx = postStringIndexmapvalue
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthServiceDomain
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as RegisterDomainRequest).ActiveClustersByRegion, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				case 15:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveClusters", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as RegisterDomainRequest).ActiveClusters == null) {
						;(m$ as RegisterDomainRequest).ActiveClusters = new __goscript_domain_pb.ActiveClusters()
					}
					{
						let err = __goscript_domain_pb.ActiveClusters.prototype.Unmarshal.call((m$ as RegisterDomainRequest).ActiveClusters, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RegisterDomainRequest).XXX_unrecognized = $.appendSlice((m$ as RegisterDomainRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		xxx_messageInfo_RegisterDomainRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RegisterDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RegisterDomainRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RegisterDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RegisterDomainRequest).MarshalToSizedBuffer(b) : RegisterDomainRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		xxx_messageInfo_RegisterDomainRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RegisterDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainRequest")), src)
	}

	public XXX_Size(): number {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RegisterDomainRequest).Size() : RegisterDomainRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RegisterDomainRequest | $.VarRef<RegisterDomainRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RegisterDomainRequest).Unmarshal(b) : RegisterDomainRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RegisterDomainRequest",
		() => new RegisterDomainRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActiveClusterName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetActiveClusters", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ActiveClusters") }], pointerReceiver: true }, { name: "GetActiveClustersByRegion", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "GetClusters", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.ClusterReplicationConfiguration")) }], pointerReceiver: true }, { name: "GetData", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "GetDescription", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetHistoryArchivalStatus", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.ArchivalStatus") }], pointerReceiver: true }, { name: "GetHistoryArchivalUri", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetIsGlobalDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetOwnerEmail", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetSecurityToken", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetVisibilityArchivalStatus", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.ArchivalStatus") }], pointerReceiver: true }, { name: "GetVisibilityArchivalUri", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetWorkflowExecutionRetentionPeriod", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RegisterDomainRequest,
		() => [{ name: "SecurityToken", key: "SecurityToken", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=security_token,json=securityToken,proto3\" json:\"security_token,omitempty\"" }, { name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "Description", key: "Description", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,3,opt,name=description,proto3\" json:\"description,omitempty\"" }, { name: "OwnerEmail", key: "OwnerEmail", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,4,opt,name=owner_email,json=ownerEmail,proto3\" json:\"owner_email,omitempty\"" }, { name: "WorkflowExecutionRetentionPeriod", key: "WorkflowExecutionRetentionPeriod", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,5,opt,name=workflow_execution_retention_period,json=workflowExecutionRetentionPeriod,proto3\" json:\"workflow_execution_retention_period,omitempty\"" }, { name: "Clusters", key: "Clusters", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.ClusterReplicationConfiguration")), tag: "protobuf:\"bytes,6,rep,name=clusters,proto3\" json:\"clusters,omitempty\"" }, { name: "ActiveClusterName", key: "ActiveClusterName", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,7,opt,name=active_cluster_name,json=activeClusterName,proto3\" json:\"active_cluster_name,omitempty\"" }, { name: "Data", key: "Data", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,8,rep,name=data,proto3\" json:\"data,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }, { name: "IsGlobalDomain", key: "IsGlobalDomain", type: /* @__PURE__ */ $.basicType("bool"), tag: "protobuf:\"varint,9,opt,name=is_global_domain,json=isGlobalDomain,proto3\" json:\"is_global_domain,omitempty\"" }, { name: "HistoryArchivalStatus", key: "HistoryArchivalStatus", type: /* @__PURE__ */ $.basicType("int32", "apiv1.ArchivalStatus"), tag: "protobuf:\"varint,10,opt,name=history_archival_status,json=historyArchivalStatus,proto3,enum=uber.cadence.api.v1.ArchivalStatus\" json:\"history_archival_status,omitempty\"" }, { name: "HistoryArchivalUri", key: "HistoryArchivalUri", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,11,opt,name=history_archival_uri,json=historyArchivalUri,proto3\" json:\"history_archival_uri,omitempty\"" }, { name: "VisibilityArchivalStatus", key: "VisibilityArchivalStatus", type: /* @__PURE__ */ $.basicType("int32", "apiv1.ArchivalStatus"), tag: "protobuf:\"varint,12,opt,name=visibility_archival_status,json=visibilityArchivalStatus,proto3,enum=uber.cadence.api.v1.ArchivalStatus\" json:\"visibility_archival_status,omitempty\"" }, { name: "VisibilityArchivalUri", key: "VisibilityArchivalUri", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,13,opt,name=visibility_archival_uri,json=visibilityArchivalUri,proto3\" json:\"visibility_archival_uri,omitempty\"" }, { name: "ActiveClustersByRegion", key: "ActiveClustersByRegion", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,14,rep,name=active_clusters_by_region,json=activeClustersByRegion,proto3\" json:\"active_clusters_by_region,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }, { name: "ActiveClusters", key: "ActiveClusters", type: /* @__PURE__ */ $.pointerType("apiv1.ActiveClusters"), tag: "protobuf:\"bytes,15,opt,name=active_clusters,json=activeClusters,proto3\" json:\"active_clusters,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class RegisterDomainResponse {
	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RegisterDomainResponse {
		return new RegisterDomainResponse(this, true)
	}

	public __goscriptAssign(source: RegisterDomainResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([1])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: RegisterDomainResponse | $.VarRef<RegisterDomainResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RegisterDomainResponse).Size() : RegisterDomainResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple1: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RegisterDomainResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RegisterDomainResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RegisterDomainResponse | $.VarRef<RegisterDomainResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RegisterDomainResponse).Size() : RegisterDomainResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RegisterDomainResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : RegisterDomainResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: RegisterDomainResponse | $.VarRef<RegisterDomainResponse> | null = this;
		const m$: RegisterDomainResponse = m == null ? $.pointerTarget<RegisterDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RegisterDomainResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as RegisterDomainResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as RegisterDomainResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as RegisterDomainResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: RegisterDomainResponse | $.VarRef<RegisterDomainResponse> | null = this;
		$.assignStruct($.pointerValue<RegisterDomainResponse>(m), new RegisterDomainResponse(undefined, true))
	}

	public Size(): number {
		const m: RegisterDomainResponse | $.VarRef<RegisterDomainResponse> | null = this;
		let n: number = 0
		const m$: RegisterDomainResponse = m == null ? $.pointerTarget<RegisterDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RegisterDomainResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as RegisterDomainResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as RegisterDomainResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: RegisterDomainResponse | $.VarRef<RegisterDomainResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.RegisterDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: RegisterDomainResponse | $.VarRef<RegisterDomainResponse> | null = this;
		const m$: RegisterDomainResponse = m == null ? $.pointerTarget<RegisterDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<RegisterDomainResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: RegisterDomainResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: RegisterDomainResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as RegisterDomainResponse).XXX_unrecognized = $.appendSlice((m$ as RegisterDomainResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: RegisterDomainResponse | $.VarRef<RegisterDomainResponse> | null = this;
		xxx_messageInfo_RegisterDomainResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.RegisterDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: RegisterDomainResponse | $.VarRef<RegisterDomainResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_RegisterDomainResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.RegisterDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RegisterDomainResponse).MarshalToSizedBuffer(b) : RegisterDomainResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: RegisterDomainResponse | $.VarRef<RegisterDomainResponse> | null = this;
		xxx_messageInfo_RegisterDomainResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.RegisterDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainResponse")), src)
	}

	public XXX_Size(): number {
		const m: RegisterDomainResponse | $.VarRef<RegisterDomainResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RegisterDomainResponse).Size() : RegisterDomainResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: RegisterDomainResponse | $.VarRef<RegisterDomainResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as RegisterDomainResponse).Unmarshal(b) : RegisterDomainResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.RegisterDomainResponse",
		() => new RegisterDomainResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		RegisterDomainResponse,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class UpdateDomainRequest {
	public get SecurityToken(): string {
		return this._fields.SecurityToken
	}

	public set SecurityToken(value: string) {
		this._fields.SecurityToken = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// Below are the fields that can be updated if specified by update_mask.
	public get UpdateMask(): types.FieldMask | $.VarRef<types.FieldMask> | null {
		return this._fields.UpdateMask
	}

	public set UpdateMask(value: types.FieldMask | $.VarRef<types.FieldMask> | null) {
		this._fields.UpdateMask = value
	}

	public get Description(): string {
		return this._fields.Description
	}

	public set Description(value: string) {
		this._fields.Description = value
	}

	public get OwnerEmail(): string {
		return this._fields.OwnerEmail
	}

	public set OwnerEmail(value: string) {
		this._fields.OwnerEmail = value
	}

	public get Data(): globalThis.Map<string, string> | null {
		return this._fields.Data
	}

	public set Data(value: globalThis.Map<string, string> | null) {
		this._fields.Data = value
	}

	public get WorkflowExecutionRetentionPeriod(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.WorkflowExecutionRetentionPeriod
	}

	public set WorkflowExecutionRetentionPeriod(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.WorkflowExecutionRetentionPeriod = value
	}

	public get BadBinaries(): __goscript_domain_pb.BadBinaries | $.VarRef<__goscript_domain_pb.BadBinaries> | null {
		return this._fields.BadBinaries
	}

	public set BadBinaries(value: __goscript_domain_pb.BadBinaries | $.VarRef<__goscript_domain_pb.BadBinaries> | null) {
		this._fields.BadBinaries = value
	}

	public get HistoryArchivalStatus(): __goscript_domain_pb.ArchivalStatus {
		return this._fields.HistoryArchivalStatus
	}

	public set HistoryArchivalStatus(value: __goscript_domain_pb.ArchivalStatus) {
		this._fields.HistoryArchivalStatus = value
	}

	public get HistoryArchivalUri(): string {
		return this._fields.HistoryArchivalUri
	}

	public set HistoryArchivalUri(value: string) {
		this._fields.HistoryArchivalUri = value
	}

	public get VisibilityArchivalStatus(): __goscript_domain_pb.ArchivalStatus {
		return this._fields.VisibilityArchivalStatus
	}

	public set VisibilityArchivalStatus(value: __goscript_domain_pb.ArchivalStatus) {
		this._fields.VisibilityArchivalStatus = value
	}

	public get VisibilityArchivalUri(): string {
		return this._fields.VisibilityArchivalUri
	}

	public set VisibilityArchivalUri(value: string) {
		this._fields.VisibilityArchivalUri = value
	}

	public get ActiveClusterName(): string {
		return this._fields.ActiveClusterName
	}

	public set ActiveClusterName(value: string) {
		this._fields.ActiveClusterName = value
	}

	public get Clusters(): $.Slice<__goscript_domain_pb.ClusterReplicationConfiguration | $.VarRef<__goscript_domain_pb.ClusterReplicationConfiguration> | null> {
		return this._fields.Clusters
	}

	public set Clusters(value: $.Slice<__goscript_domain_pb.ClusterReplicationConfiguration | $.VarRef<__goscript_domain_pb.ClusterReplicationConfiguration> | null>) {
		this._fields.Clusters = value
	}

	public get DeleteBadBinary(): string {
		return this._fields.DeleteBadBinary
	}

	public set DeleteBadBinary(value: string) {
		this._fields.DeleteBadBinary = value
	}

	public get FailoverTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.FailoverTimeout
	}

	public set FailoverTimeout(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.FailoverTimeout = value
	}

	public get ActiveClusters(): __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null {
		return this._fields.ActiveClusters
	}

	public set ActiveClusters(value: __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null) {
		this._fields.ActiveClusters = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		SecurityToken: string
		Name: string
		UpdateMask: types.FieldMask | $.VarRef<types.FieldMask> | null
		Description: string
		OwnerEmail: string
		Data: globalThis.Map<string, string> | null
		WorkflowExecutionRetentionPeriod: types.Duration | $.VarRef<types.Duration> | null
		BadBinaries: __goscript_domain_pb.BadBinaries | $.VarRef<__goscript_domain_pb.BadBinaries> | null
		HistoryArchivalStatus: __goscript_domain_pb.ArchivalStatus
		HistoryArchivalUri: string
		VisibilityArchivalStatus: __goscript_domain_pb.ArchivalStatus
		VisibilityArchivalUri: string
		ActiveClusterName: string
		Clusters: $.Slice<__goscript_domain_pb.ClusterReplicationConfiguration | $.VarRef<__goscript_domain_pb.ClusterReplicationConfiguration> | null>
		DeleteBadBinary: string
		FailoverTimeout: types.Duration | $.VarRef<types.Duration> | null
		ActiveClusters: __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{SecurityToken?: string, Name?: string, UpdateMask?: types.FieldMask | $.VarRef<types.FieldMask> | null, Description?: string, OwnerEmail?: string, Data?: globalThis.Map<string, string> | null, WorkflowExecutionRetentionPeriod?: types.Duration | $.VarRef<types.Duration> | null, BadBinaries?: __goscript_domain_pb.BadBinaries | $.VarRef<__goscript_domain_pb.BadBinaries> | null, HistoryArchivalStatus?: __goscript_domain_pb.ArchivalStatus, HistoryArchivalUri?: string, VisibilityArchivalStatus?: __goscript_domain_pb.ArchivalStatus, VisibilityArchivalUri?: string, ActiveClusterName?: string, Clusters?: $.Slice<__goscript_domain_pb.ClusterReplicationConfiguration | $.VarRef<__goscript_domain_pb.ClusterReplicationConfiguration> | null>, DeleteBadBinary?: string, FailoverTimeout?: types.Duration | $.VarRef<types.Duration> | null, ActiveClusters?: __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			SecurityToken: init?.SecurityToken ?? ("" as string),
			Name: init?.Name ?? ("" as string),
			UpdateMask: init?.UpdateMask ?? (null! as types.FieldMask | $.VarRef<types.FieldMask> | null),
			Description: init?.Description ?? ("" as string),
			OwnerEmail: init?.OwnerEmail ?? ("" as string),
			Data: init?.Data ?? (null! as globalThis.Map<string, string> | null),
			WorkflowExecutionRetentionPeriod: init?.WorkflowExecutionRetentionPeriod ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			BadBinaries: init?.BadBinaries ?? (null! as __goscript_domain_pb.BadBinaries | $.VarRef<__goscript_domain_pb.BadBinaries> | null),
			HistoryArchivalStatus: init?.HistoryArchivalStatus ?? (0 as __goscript_domain_pb.ArchivalStatus),
			HistoryArchivalUri: init?.HistoryArchivalUri ?? ("" as string),
			VisibilityArchivalStatus: init?.VisibilityArchivalStatus ?? (0 as __goscript_domain_pb.ArchivalStatus),
			VisibilityArchivalUri: init?.VisibilityArchivalUri ?? ("" as string),
			ActiveClusterName: init?.ActiveClusterName ?? ("" as string),
			Clusters: init?.Clusters ?? (null! as $.Slice<__goscript_domain_pb.ClusterReplicationConfiguration | $.VarRef<__goscript_domain_pb.ClusterReplicationConfiguration> | null>),
			DeleteBadBinary: init?.DeleteBadBinary ?? ("" as string),
			FailoverTimeout: init?.FailoverTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			ActiveClusters: init?.ActiveClusters ?? (null! as __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UpdateDomainRequest {
		return new UpdateDomainRequest(this, true)
	}

	public __goscriptAssign(source: UpdateDomainRequest): void {
		const target = this._fields
		const values = source._fields
		target.SecurityToken = values.SecurityToken
		target.Name = values.Name
		target.UpdateMask = values.UpdateMask
		target.Description = values.Description
		target.OwnerEmail = values.OwnerEmail
		target.Data = values.Data
		target.WorkflowExecutionRetentionPeriod = values.WorkflowExecutionRetentionPeriod
		target.BadBinaries = values.BadBinaries
		target.HistoryArchivalStatus = values.HistoryArchivalStatus
		target.HistoryArchivalUri = values.HistoryArchivalUri
		target.VisibilityArchivalStatus = values.VisibilityArchivalStatus
		target.VisibilityArchivalUri = values.VisibilityArchivalUri
		target.ActiveClusterName = values.ActiveClusterName
		target.Clusters = values.Clusters
		target.DeleteBadBinary = values.DeleteBadBinary
		target.FailoverTimeout = values.FailoverTimeout
		target.ActiveClusters = values.ActiveClusters
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([2])]
	}

	public GetActiveClusterName(): string {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainRequest>(m).ActiveClusterName
		}
		return ""
	}

	public GetActiveClusters(): __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainRequest>(m).ActiveClusters
		}
		return null
	}

	public GetBadBinaries(): __goscript_domain_pb.BadBinaries | $.VarRef<__goscript_domain_pb.BadBinaries> | null {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainRequest>(m).BadBinaries
		}
		return null
	}

	public GetClusters(): $.Slice<__goscript_domain_pb.ClusterReplicationConfiguration | $.VarRef<__goscript_domain_pb.ClusterReplicationConfiguration> | null> {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainRequest>(m).Clusters
		}
		return null
	}

	public GetData(): globalThis.Map<string, string> | null {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainRequest>(m).Data
		}
		return null
	}

	public GetDeleteBadBinary(): string {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainRequest>(m).DeleteBadBinary
		}
		return ""
	}

	public GetDescription(): string {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainRequest>(m).Description
		}
		return ""
	}

	public GetFailoverTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainRequest>(m).FailoverTimeout
		}
		return null
	}

	public GetHistoryArchivalStatus(): __goscript_domain_pb.ArchivalStatus {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainRequest>(m).HistoryArchivalStatus
		}
		return 0
	}

	public GetHistoryArchivalUri(): string {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainRequest>(m).HistoryArchivalUri
		}
		return ""
	}

	public GetName(): string {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainRequest>(m).Name
		}
		return ""
	}

	public GetOwnerEmail(): string {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainRequest>(m).OwnerEmail
		}
		return ""
	}

	public GetSecurityToken(): string {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainRequest>(m).SecurityToken
		}
		return ""
	}

	public GetUpdateMask(): types.FieldMask | $.VarRef<types.FieldMask> | null {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainRequest>(m).UpdateMask
		}
		return null
	}

	public GetVisibilityArchivalStatus(): __goscript_domain_pb.ArchivalStatus {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainRequest>(m).VisibilityArchivalStatus
		}
		return 0
	}

	public GetVisibilityArchivalUri(): string {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainRequest>(m).VisibilityArchivalUri
		}
		return ""
	}

	public GetWorkflowExecutionRetentionPeriod(): types.Duration | $.VarRef<types.Duration> | null {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainRequest>(m).WorkflowExecutionRetentionPeriod
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateDomainRequest).Size() : UpdateDomainRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple2: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateDomainRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UpdateDomainRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateDomainRequest).Size() : UpdateDomainRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateDomainRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UpdateDomainRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		const m$: UpdateDomainRequest = m == null ? $.pointerTarget<UpdateDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UpdateDomainRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as UpdateDomainRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as UpdateDomainRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UpdateDomainRequest).XXX_unrecognized)
		}
		if ((m$ as UpdateDomainRequest).ActiveClusters != null) {
			{
				let [size, err] = __goscript_domain_pb.ActiveClusters.prototype.MarshalToSizedBuffer.call((m$ as UpdateDomainRequest).ActiveClusters, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xc2
		}
		if ((m$ as UpdateDomainRequest).FailoverTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as UpdateDomainRequest).FailoverTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xba
		}
		if ($.stringLen((m$ as UpdateDomainRequest).DeleteBadBinary) > 0) {
			i = i - ($.stringLen((m$ as UpdateDomainRequest).DeleteBadBinary))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UpdateDomainRequest).DeleteBadBinary)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as UpdateDomainRequest).DeleteBadBinary)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xb2
		}
		if ($.sliceLen((m$ as UpdateDomainRequest).Clusters) > 0) {
			for (let __goscriptSliceWindow3 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as UpdateDomainRequest).Clusters) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_domain_pb.ClusterReplicationConfiguration.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as UpdateDomainRequest).Clusters!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] = 0x1
				i--;
				;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] = 0xaa
			}
		}
		if ($.stringLen((m$ as UpdateDomainRequest).ActiveClusterName) > 0) {
			i = i - ($.stringLen((m$ as UpdateDomainRequest).ActiveClusterName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UpdateDomainRequest).ActiveClusterName)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as UpdateDomainRequest).ActiveClusterName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa2
		}
		if ($.stringLen((m$ as UpdateDomainRequest).VisibilityArchivalUri) > 0) {
			i = i - ($.stringLen((m$ as UpdateDomainRequest).VisibilityArchivalUri))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UpdateDomainRequest).VisibilityArchivalUri)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as UpdateDomainRequest).VisibilityArchivalUri)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x9a
		}
		if ((m$ as UpdateDomainRequest).VisibilityArchivalStatus != 0) {
			i = encodeVarintServiceDomain(dAtA, i, $.uint64((m$ as UpdateDomainRequest).VisibilityArchivalStatus))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x90
		}
		if ($.stringLen((m$ as UpdateDomainRequest).HistoryArchivalUri) > 0) {
			i = i - ($.stringLen((m$ as UpdateDomainRequest).HistoryArchivalUri))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UpdateDomainRequest).HistoryArchivalUri)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as UpdateDomainRequest).HistoryArchivalUri)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8a
		}
		if ((m$ as UpdateDomainRequest).HistoryArchivalStatus != 0) {
			i = encodeVarintServiceDomain(dAtA, i, $.uint64((m$ as UpdateDomainRequest).HistoryArchivalStatus))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x80
		}
		if ((m$ as UpdateDomainRequest).BadBinaries != null) {
			{
				let [size, err] = __goscript_domain_pb.BadBinaries.prototype.MarshalToSizedBuffer.call((m$ as UpdateDomainRequest).BadBinaries, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x7a
		}
		if ((m$ as UpdateDomainRequest).WorkflowExecutionRetentionPeriod != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as UpdateDomainRequest).WorkflowExecutionRetentionPeriod, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x72
		}
		if ($.len((m$ as UpdateDomainRequest).Data) > 0) {
			for (const [k, __rangeValue] of (m$ as UpdateDomainRequest).Data?.entries() ?? []) {
				let v = $.mapGet<string, string, string>((m$ as UpdateDomainRequest).Data, k, "")[0]
				let baseI: number = i
				i = i - ($.stringLen(v))
				$.copy($.goSlice(dAtA, i, undefined), v)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen(v)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x6a
			}
		}
		if ($.stringLen((m$ as UpdateDomainRequest).OwnerEmail) > 0) {
			i = i - ($.stringLen((m$ as UpdateDomainRequest).OwnerEmail))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UpdateDomainRequest).OwnerEmail)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as UpdateDomainRequest).OwnerEmail)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x62
		}
		if ($.stringLen((m$ as UpdateDomainRequest).Description) > 0) {
			i = i - ($.stringLen((m$ as UpdateDomainRequest).Description))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UpdateDomainRequest).Description)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as UpdateDomainRequest).Description)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x5a
		}
		if ((m$ as UpdateDomainRequest).UpdateMask != null) {
			{
				let [size, err] = types.FieldMask.prototype.MarshalToSizedBuffer.call((m$ as UpdateDomainRequest).UpdateMask, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x52
		}
		if ($.stringLen((m$ as UpdateDomainRequest).Name) > 0) {
			i = i - ($.stringLen((m$ as UpdateDomainRequest).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UpdateDomainRequest).Name)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as UpdateDomainRequest).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as UpdateDomainRequest).SecurityToken) > 0) {
			i = i - ($.stringLen((m$ as UpdateDomainRequest).SecurityToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UpdateDomainRequest).SecurityToken)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as UpdateDomainRequest).SecurityToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		$.assignStruct($.pointerValue<UpdateDomainRequest>(m), $.markAsStructValue(new UpdateDomainRequest()))
	}

	public Size(): number {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		let n: number = 0
		const m$: UpdateDomainRequest = m == null ? $.pointerTarget<UpdateDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UpdateDomainRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as UpdateDomainRequest).SecurityToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		l = $.stringLen((m$ as UpdateDomainRequest).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as UpdateDomainRequest).UpdateMask != null) {
			l = types.FieldMask.prototype.Size.call((m$ as UpdateDomainRequest).UpdateMask)
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		l = $.stringLen((m$ as UpdateDomainRequest).Description)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		l = $.stringLen((m$ as UpdateDomainRequest).OwnerEmail)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ($.len((m$ as UpdateDomainRequest).Data) > 0) {
			for (const [k, v] of (m$ as UpdateDomainRequest).Data?.entries() ?? []) {
				k
				v
				let mapEntrySize = ((((1 + $.stringLen(k)) + sovServiceDomain($.uint64($.stringLen(k)))) + 1) + $.stringLen(v)) + sovServiceDomain($.uint64($.stringLen(v)))
				n = n + ((mapEntrySize + 1) + sovServiceDomain($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as UpdateDomainRequest).WorkflowExecutionRetentionPeriod != null) {
			l = types.Duration.prototype.Size.call((m$ as UpdateDomainRequest).WorkflowExecutionRetentionPeriod)
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as UpdateDomainRequest).BadBinaries != null) {
			l = __goscript_domain_pb.BadBinaries.prototype.Size.call((m$ as UpdateDomainRequest).BadBinaries)
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as UpdateDomainRequest).HistoryArchivalStatus != 0) {
			n = n + (2 + sovServiceDomain($.uint64((m$ as UpdateDomainRequest).HistoryArchivalStatus)))
		}
		l = $.stringLen((m$ as UpdateDomainRequest).HistoryArchivalUri)
		if (l > 0) {
			n = n + ((2 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as UpdateDomainRequest).VisibilityArchivalStatus != 0) {
			n = n + (2 + sovServiceDomain($.uint64((m$ as UpdateDomainRequest).VisibilityArchivalStatus)))
		}
		l = $.stringLen((m$ as UpdateDomainRequest).VisibilityArchivalUri)
		if (l > 0) {
			n = n + ((2 + l) + sovServiceDomain($.uint64(l)))
		}
		l = $.stringLen((m$ as UpdateDomainRequest).ActiveClusterName)
		if (l > 0) {
			n = n + ((2 + l) + sovServiceDomain($.uint64(l)))
		}
		if ($.sliceLen((m$ as UpdateDomainRequest).Clusters) > 0) {
			for (let __goscriptRangeTarget1 = (m$ as UpdateDomainRequest).Clusters, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_domain_pb.ClusterReplicationConfiguration | $.VarRef<__goscript_domain_pb.ClusterReplicationConfiguration> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_domain_pb.ClusterReplicationConfiguration).Size() : __goscript_domain_pb.ClusterReplicationConfiguration.prototype.Size.call(e))
				n = n + ((2 + l) + sovServiceDomain($.uint64(l)))
			}
		}
		l = $.stringLen((m$ as UpdateDomainRequest).DeleteBadBinary)
		if (l > 0) {
			n = n + ((2 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as UpdateDomainRequest).FailoverTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as UpdateDomainRequest).FailoverTimeout)
			n = n + ((2 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as UpdateDomainRequest).ActiveClusters != null) {
			l = __goscript_domain_pb.ActiveClusters.prototype.Size.call((m$ as UpdateDomainRequest).ActiveClusters)
			n = n + ((2 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as UpdateDomainRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as UpdateDomainRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.UpdateDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		const m$: UpdateDomainRequest = m == null ? $.pointerTarget<UpdateDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UpdateDomainRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow4 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: UpdateDomainRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: UpdateDomainRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field SecurityToken", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UpdateDomainRequest).SecurityToken = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Name", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UpdateDomainRequest).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 10:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field UpdateMask", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as UpdateDomainRequest).UpdateMask == null) {
						;(m$ as UpdateDomainRequest).UpdateMask = new types.FieldMask()
					}
					{
						let err = types.FieldMask.prototype.Unmarshal.call((m$ as UpdateDomainRequest).UpdateMask, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 11:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Description", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UpdateDomainRequest).Description = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 12:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field OwnerEmail", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UpdateDomainRequest).OwnerEmail = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 13:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Data", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as UpdateDomainRequest).Data == null) {
						;(m$ as UpdateDomainRequest).Data = $.makeMap<string, string>()
					}
					let mapkey: string = ""
					let mapvalue: string = ""
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow4: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowServiceDomain
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
							iNdEx++
							__goscriptShadow4 = $.uint64Or(__goscriptShadow4, $.uint64Shl($.uint64(b & 0x7F), shift))
							if (b < 0x80) {
								break
							}
						}
						let __goscriptShadow5 = $.int($.uint64Shr(__goscriptShadow4, 3n), 32)
						if (__goscriptShadow5 == 1) {
							let stringLenmapkey: bigint = 0n
							for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
								if (shift >= 64) {
									return ErrIntOverflowServiceDomain
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthServiceDomain
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthServiceDomain
							}
							if (postStringIndexmapkey > l) {
								return io.ErrUnexpectedEOF
							}
							mapkey = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapkey))
							iNdEx = postStringIndexmapkey
						} else {
							if (__goscriptShadow5 == 2) {
								let stringLenmapvalue: bigint = 0n
								for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
									if (shift >= 64) {
										return ErrIntOverflowServiceDomain
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
									iNdEx++
									stringLenmapvalue = $.uint64Or(stringLenmapvalue, $.uint64Shl($.uint64(b & 0x7F), shift))
									if (b < 0x80) {
										break
									}
								}
								let intStringLenmapvalue = $.int(stringLenmapvalue)
								if (intStringLenmapvalue < 0) {
									return ErrInvalidLengthServiceDomain
								}
								let postStringIndexmapvalue: number = iNdEx + intStringLenmapvalue
								if (postStringIndexmapvalue < 0) {
									return ErrInvalidLengthServiceDomain
								}
								if (postStringIndexmapvalue > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapvalue))
								iNdEx = postStringIndexmapvalue
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthServiceDomain
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as UpdateDomainRequest).Data, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				case 14:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowExecutionRetentionPeriod", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as UpdateDomainRequest).WorkflowExecutionRetentionPeriod == null) {
						;(m$ as UpdateDomainRequest).WorkflowExecutionRetentionPeriod = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as UpdateDomainRequest).WorkflowExecutionRetentionPeriod, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 15:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field BadBinaries", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as UpdateDomainRequest).BadBinaries == null) {
						;(m$ as UpdateDomainRequest).BadBinaries = new __goscript_domain_pb.BadBinaries()
					}
					{
						let err = __goscript_domain_pb.BadBinaries.prototype.Unmarshal.call((m$ as UpdateDomainRequest).BadBinaries, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 16:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field HistoryArchivalStatus", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as UpdateDomainRequest).HistoryArchivalStatus = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++;
						;(m$ as UpdateDomainRequest).HistoryArchivalStatus = (m$ as UpdateDomainRequest).HistoryArchivalStatus | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 17:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field HistoryArchivalUri", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UpdateDomainRequest).HistoryArchivalUri = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 18:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field VisibilityArchivalStatus", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as UpdateDomainRequest).VisibilityArchivalStatus = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++;
						;(m$ as UpdateDomainRequest).VisibilityArchivalStatus = (m$ as UpdateDomainRequest).VisibilityArchivalStatus | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 19:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field VisibilityArchivalUri", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UpdateDomainRequest).VisibilityArchivalUri = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 20:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveClusterName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UpdateDomainRequest).ActiveClusterName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 21:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Clusters", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UpdateDomainRequest).Clusters = $.appendOne((m$ as UpdateDomainRequest).Clusters, new __goscript_domain_pb.ClusterReplicationConfiguration(), $.appendZeros.nil)
					{
						let err = __goscript_domain_pb.ClusterReplicationConfiguration.prototype.Unmarshal.call($.arrayIndex((m$ as UpdateDomainRequest).Clusters!, $.sliceLen((m$ as UpdateDomainRequest).Clusters) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 22:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field DeleteBadBinary", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UpdateDomainRequest).DeleteBadBinary = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 23:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field FailoverTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as UpdateDomainRequest).FailoverTimeout == null) {
						;(m$ as UpdateDomainRequest).FailoverTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as UpdateDomainRequest).FailoverTimeout, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 24:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveClusters", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as UpdateDomainRequest).ActiveClusters == null) {
						;(m$ as UpdateDomainRequest).ActiveClusters = new __goscript_domain_pb.ActiveClusters()
					}
					{
						let err = __goscript_domain_pb.ActiveClusters.prototype.Unmarshal.call((m$ as UpdateDomainRequest).ActiveClusters, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UpdateDomainRequest).XXX_unrecognized = $.appendSlice((m$ as UpdateDomainRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		xxx_messageInfo_UpdateDomainRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.UpdateDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_UpdateDomainRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.UpdateDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateDomainRequest).MarshalToSizedBuffer(b) : UpdateDomainRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		xxx_messageInfo_UpdateDomainRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.UpdateDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainRequest")), src)
	}

	public XXX_Size(): number {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateDomainRequest).Size() : UpdateDomainRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: UpdateDomainRequest | $.VarRef<UpdateDomainRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateDomainRequest).Unmarshal(b) : UpdateDomainRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.UpdateDomainRequest",
		() => new UpdateDomainRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActiveClusterName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetActiveClusters", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ActiveClusters") }], pointerReceiver: true }, { name: "GetBadBinaries", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.BadBinaries") }], pointerReceiver: true }, { name: "GetClusters", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.ClusterReplicationConfiguration")) }], pointerReceiver: true }, { name: "GetData", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "GetDeleteBadBinary", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetDescription", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetFailoverTimeout", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetHistoryArchivalStatus", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.ArchivalStatus") }], pointerReceiver: true }, { name: "GetHistoryArchivalUri", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetOwnerEmail", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetSecurityToken", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetUpdateMask", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.FieldMask") }], pointerReceiver: true }, { name: "GetVisibilityArchivalStatus", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.ArchivalStatus") }], pointerReceiver: true }, { name: "GetVisibilityArchivalUri", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetWorkflowExecutionRetentionPeriod", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		UpdateDomainRequest,
		() => [{ name: "SecurityToken", key: "SecurityToken", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=security_token,json=securityToken,proto3\" json:\"security_token,omitempty\"" }, { name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "UpdateMask", key: "UpdateMask", type: /* @__PURE__ */ $.pointerType("types.FieldMask"), tag: "protobuf:\"bytes,10,opt,name=update_mask,json=updateMask,proto3\" json:\"update_mask,omitempty\"" }, { name: "Description", key: "Description", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,11,opt,name=description,proto3\" json:\"description,omitempty\"" }, { name: "OwnerEmail", key: "OwnerEmail", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,12,opt,name=owner_email,json=ownerEmail,proto3\" json:\"owner_email,omitempty\"" }, { name: "Data", key: "Data", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,13,rep,name=data,proto3\" json:\"data,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }, { name: "WorkflowExecutionRetentionPeriod", key: "WorkflowExecutionRetentionPeriod", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,14,opt,name=workflow_execution_retention_period,json=workflowExecutionRetentionPeriod,proto3\" json:\"workflow_execution_retention_period,omitempty\"" }, { name: "BadBinaries", key: "BadBinaries", type: /* @__PURE__ */ $.pointerType("apiv1.BadBinaries"), tag: "protobuf:\"bytes,15,opt,name=bad_binaries,json=badBinaries,proto3\" json:\"bad_binaries,omitempty\"" }, { name: "HistoryArchivalStatus", key: "HistoryArchivalStatus", type: /* @__PURE__ */ $.basicType("int32", "apiv1.ArchivalStatus"), tag: "protobuf:\"varint,16,opt,name=history_archival_status,json=historyArchivalStatus,proto3,enum=uber.cadence.api.v1.ArchivalStatus\" json:\"history_archival_status,omitempty\"" }, { name: "HistoryArchivalUri", key: "HistoryArchivalUri", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,17,opt,name=history_archival_uri,json=historyArchivalUri,proto3\" json:\"history_archival_uri,omitempty\"" }, { name: "VisibilityArchivalStatus", key: "VisibilityArchivalStatus", type: /* @__PURE__ */ $.basicType("int32", "apiv1.ArchivalStatus"), tag: "protobuf:\"varint,18,opt,name=visibility_archival_status,json=visibilityArchivalStatus,proto3,enum=uber.cadence.api.v1.ArchivalStatus\" json:\"visibility_archival_status,omitempty\"" }, { name: "VisibilityArchivalUri", key: "VisibilityArchivalUri", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,19,opt,name=visibility_archival_uri,json=visibilityArchivalUri,proto3\" json:\"visibility_archival_uri,omitempty\"" }, { name: "ActiveClusterName", key: "ActiveClusterName", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,20,opt,name=active_cluster_name,json=activeClusterName,proto3\" json:\"active_cluster_name,omitempty\"" }, { name: "Clusters", key: "Clusters", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.ClusterReplicationConfiguration")), tag: "protobuf:\"bytes,21,rep,name=clusters,proto3\" json:\"clusters,omitempty\"" }, { name: "DeleteBadBinary", key: "DeleteBadBinary", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,22,opt,name=delete_bad_binary,json=deleteBadBinary,proto3\" json:\"delete_bad_binary,omitempty\"" }, { name: "FailoverTimeout", key: "FailoverTimeout", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,23,opt,name=failover_timeout,json=failoverTimeout,proto3\" json:\"failover_timeout,omitempty\"" }, { name: "ActiveClusters", key: "ActiveClusters", type: /* @__PURE__ */ $.pointerType("apiv1.ActiveClusters"), tag: "protobuf:\"bytes,24,opt,name=active_clusters,json=activeClusters,proto3\" json:\"active_clusters,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class UpdateDomainResponse {
	public get Domain(): __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null {
		return this._fields.Domain
	}

	public set Domain(value: __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null) {
		this._fields.Domain = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		Domain: __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? (null! as __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UpdateDomainResponse {
		return new UpdateDomainResponse(this, true)
	}

	public __goscriptAssign(source: UpdateDomainResponse): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([3])]
	}

	public GetDomain(): __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null {
		const m: UpdateDomainResponse | $.VarRef<UpdateDomainResponse> | null = this;
		if (m != null) {
			return $.pointerValue<UpdateDomainResponse>(m).Domain
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: UpdateDomainResponse | $.VarRef<UpdateDomainResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateDomainResponse).Size() : UpdateDomainResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple3: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateDomainResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UpdateDomainResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UpdateDomainResponse | $.VarRef<UpdateDomainResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateDomainResponse).Size() : UpdateDomainResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateDomainResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : UpdateDomainResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: UpdateDomainResponse | $.VarRef<UpdateDomainResponse> | null = this;
		const m$: UpdateDomainResponse = m == null ? $.pointerTarget<UpdateDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UpdateDomainResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as UpdateDomainResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as UpdateDomainResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as UpdateDomainResponse).XXX_unrecognized)
		}
		if ((m$ as UpdateDomainResponse).Domain != null) {
			{
				let [size, err] = __goscript_domain_pb.Domain.prototype.MarshalToSizedBuffer.call((m$ as UpdateDomainResponse).Domain, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: UpdateDomainResponse | $.VarRef<UpdateDomainResponse> | null = this;
		$.assignStruct($.pointerValue<UpdateDomainResponse>(m), $.markAsStructValue(new UpdateDomainResponse()))
	}

	public Size(): number {
		const m: UpdateDomainResponse | $.VarRef<UpdateDomainResponse> | null = this;
		let n: number = 0
		const m$: UpdateDomainResponse = m == null ? $.pointerTarget<UpdateDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UpdateDomainResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as UpdateDomainResponse).Domain != null) {
			l = __goscript_domain_pb.Domain.prototype.Size.call((m$ as UpdateDomainResponse).Domain)
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as UpdateDomainResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as UpdateDomainResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: UpdateDomainResponse | $.VarRef<UpdateDomainResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.UpdateDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: UpdateDomainResponse | $.VarRef<UpdateDomainResponse> | null = this;
		const m$: UpdateDomainResponse = m == null ? $.pointerTarget<UpdateDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<UpdateDomainResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow5 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: UpdateDomainResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: UpdateDomainResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Domain", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as UpdateDomainResponse).Domain == null) {
						;(m$ as UpdateDomainResponse).Domain = new __goscript_domain_pb.Domain()
					}
					{
						let err = __goscript_domain_pb.Domain.prototype.Unmarshal.call((m$ as UpdateDomainResponse).Domain, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as UpdateDomainResponse).XXX_unrecognized = $.appendSlice((m$ as UpdateDomainResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: UpdateDomainResponse | $.VarRef<UpdateDomainResponse> | null = this;
		xxx_messageInfo_UpdateDomainResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.UpdateDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: UpdateDomainResponse | $.VarRef<UpdateDomainResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_UpdateDomainResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.UpdateDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateDomainResponse).MarshalToSizedBuffer(b) : UpdateDomainResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: UpdateDomainResponse | $.VarRef<UpdateDomainResponse> | null = this;
		xxx_messageInfo_UpdateDomainResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.UpdateDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainResponse")), src)
	}

	public XXX_Size(): number {
		const m: UpdateDomainResponse | $.VarRef<UpdateDomainResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateDomainResponse).Size() : UpdateDomainResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: UpdateDomainResponse | $.VarRef<UpdateDomainResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as UpdateDomainResponse).Unmarshal(b) : UpdateDomainResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.UpdateDomainResponse",
		() => new UpdateDomainResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Domain") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		UpdateDomainResponse,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.pointerType("apiv1.Domain"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class FailoverDomainRequest {
	public get DomainName(): string {
		return this._fields.DomainName
	}

	public set DomainName(value: string) {
		this._fields.DomainName = value
	}

	public get DomainActiveClusterName(): string {
		return this._fields.DomainActiveClusterName
	}

	public set DomainActiveClusterName(value: string) {
		this._fields.DomainActiveClusterName = value
	}

	// only applicable for active-active use-cases where the failover is occurring
	// at the cluster-attribute level only
	public get ActiveClusters(): __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null {
		return this._fields.ActiveClusters
	}

	public set ActiveClusters(value: __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null) {
		this._fields.ActiveClusters = value
	}

	// user-requested addition "reason" variable created to increase transparency around failovers
	public get Reason(): string {
		return this._fields.Reason
	}

	public set Reason(value: string) {
		this._fields.Reason = value
	}

	public get FailoverTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.FailoverTimeout
	}

	public set FailoverTimeout(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.FailoverTimeout = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		DomainName: string
		DomainActiveClusterName: string
		ActiveClusters: __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null
		Reason: string
		FailoverTimeout: types.Duration | $.VarRef<types.Duration> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{DomainName?: string, DomainActiveClusterName?: string, ActiveClusters?: __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null, Reason?: string, FailoverTimeout?: types.Duration | $.VarRef<types.Duration> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			DomainName: init?.DomainName ?? ("" as string),
			DomainActiveClusterName: init?.DomainActiveClusterName ?? ("" as string),
			ActiveClusters: init?.ActiveClusters ?? (null! as __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null),
			Reason: init?.Reason ?? ("" as string),
			FailoverTimeout: init?.FailoverTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FailoverDomainRequest {
		return new FailoverDomainRequest(this, true)
	}

	public __goscriptAssign(source: FailoverDomainRequest): void {
		const target = this._fields
		const values = source._fields
		target.DomainName = values.DomainName
		target.DomainActiveClusterName = values.DomainActiveClusterName
		target.ActiveClusters = values.ActiveClusters
		target.Reason = values.Reason
		target.FailoverTimeout = values.FailoverTimeout
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([4])]
	}

	public GetActiveClusters(): __goscript_domain_pb.ActiveClusters | $.VarRef<__goscript_domain_pb.ActiveClusters> | null {
		const m: FailoverDomainRequest | $.VarRef<FailoverDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<FailoverDomainRequest>(m).ActiveClusters
		}
		return null
	}

	public GetDomainActiveClusterName(): string {
		const m: FailoverDomainRequest | $.VarRef<FailoverDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<FailoverDomainRequest>(m).DomainActiveClusterName
		}
		return ""
	}

	public GetDomainName(): string {
		const m: FailoverDomainRequest | $.VarRef<FailoverDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<FailoverDomainRequest>(m).DomainName
		}
		return ""
	}

	public GetFailoverTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: FailoverDomainRequest | $.VarRef<FailoverDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<FailoverDomainRequest>(m).FailoverTimeout
		}
		return null
	}

	public GetReason(): string {
		const m: FailoverDomainRequest | $.VarRef<FailoverDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<FailoverDomainRequest>(m).Reason
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: FailoverDomainRequest | $.VarRef<FailoverDomainRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverDomainRequest).Size() : FailoverDomainRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverDomainRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FailoverDomainRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FailoverDomainRequest | $.VarRef<FailoverDomainRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverDomainRequest).Size() : FailoverDomainRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverDomainRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FailoverDomainRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FailoverDomainRequest | $.VarRef<FailoverDomainRequest> | null = this;
		const m$: FailoverDomainRequest = m == null ? $.pointerTarget<FailoverDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailoverDomainRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as FailoverDomainRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as FailoverDomainRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as FailoverDomainRequest).XXX_unrecognized)
		}
		if ((m$ as FailoverDomainRequest).FailoverTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as FailoverDomainRequest).FailoverTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x3
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x92
		}
		if ($.stringLen((m$ as FailoverDomainRequest).Reason) > 0) {
			i = i - ($.stringLen((m$ as FailoverDomainRequest).Reason))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as FailoverDomainRequest).Reason)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as FailoverDomainRequest).Reason)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xc2
		}
		if ((m$ as FailoverDomainRequest).ActiveClusters != null) {
			{
				let [size, err] = __goscript_domain_pb.ActiveClusters.prototype.MarshalToSizedBuffer.call((m$ as FailoverDomainRequest).ActiveClusters, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xf2
		}
		if ($.stringLen((m$ as FailoverDomainRequest).DomainActiveClusterName) > 0) {
			i = i - ($.stringLen((m$ as FailoverDomainRequest).DomainActiveClusterName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as FailoverDomainRequest).DomainActiveClusterName)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as FailoverDomainRequest).DomainActiveClusterName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x52
		}
		if ($.stringLen((m$ as FailoverDomainRequest).DomainName) > 0) {
			i = i - ($.stringLen((m$ as FailoverDomainRequest).DomainName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as FailoverDomainRequest).DomainName)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as FailoverDomainRequest).DomainName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: FailoverDomainRequest | $.VarRef<FailoverDomainRequest> | null = this;
		$.assignStruct($.pointerValue<FailoverDomainRequest>(m), $.markAsStructValue(new FailoverDomainRequest()))
	}

	public Size(): number {
		const m: FailoverDomainRequest | $.VarRef<FailoverDomainRequest> | null = this;
		let n: number = 0
		const m$: FailoverDomainRequest = m == null ? $.pointerTarget<FailoverDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailoverDomainRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as FailoverDomainRequest).DomainName)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		l = $.stringLen((m$ as FailoverDomainRequest).DomainActiveClusterName)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as FailoverDomainRequest).ActiveClusters != null) {
			l = __goscript_domain_pb.ActiveClusters.prototype.Size.call((m$ as FailoverDomainRequest).ActiveClusters)
			n = n + ((2 + l) + sovServiceDomain($.uint64(l)))
		}
		l = $.stringLen((m$ as FailoverDomainRequest).Reason)
		if (l > 0) {
			n = n + ((2 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as FailoverDomainRequest).FailoverTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as FailoverDomainRequest).FailoverTimeout)
			n = n + ((2 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as FailoverDomainRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as FailoverDomainRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: FailoverDomainRequest | $.VarRef<FailoverDomainRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.FailoverDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: FailoverDomainRequest | $.VarRef<FailoverDomainRequest> | null = this;
		const m$: FailoverDomainRequest = m == null ? $.pointerTarget<FailoverDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailoverDomainRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow6 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: FailoverDomainRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: FailoverDomainRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field DomainName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as FailoverDomainRequest).DomainName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 10:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field DomainActiveClusterName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as FailoverDomainRequest).DomainActiveClusterName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 30:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveClusters", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as FailoverDomainRequest).ActiveClusters == null) {
						;(m$ as FailoverDomainRequest).ActiveClusters = new __goscript_domain_pb.ActiveClusters()
					}
					{
						let err = __goscript_domain_pb.ActiveClusters.prototype.Unmarshal.call((m$ as FailoverDomainRequest).ActiveClusters, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 40:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Reason", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as FailoverDomainRequest).Reason = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 50:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field FailoverTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as FailoverDomainRequest).FailoverTimeout == null) {
						;(m$ as FailoverDomainRequest).FailoverTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as FailoverDomainRequest).FailoverTimeout, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as FailoverDomainRequest).XXX_unrecognized = $.appendSlice((m$ as FailoverDomainRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: FailoverDomainRequest | $.VarRef<FailoverDomainRequest> | null = this;
		xxx_messageInfo_FailoverDomainRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.FailoverDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: FailoverDomainRequest | $.VarRef<FailoverDomainRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_FailoverDomainRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.FailoverDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverDomainRequest).MarshalToSizedBuffer(b) : FailoverDomainRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: FailoverDomainRequest | $.VarRef<FailoverDomainRequest> | null = this;
		xxx_messageInfo_FailoverDomainRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.FailoverDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainRequest")), src)
	}

	public XXX_Size(): number {
		const m: FailoverDomainRequest | $.VarRef<FailoverDomainRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverDomainRequest).Size() : FailoverDomainRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: FailoverDomainRequest | $.VarRef<FailoverDomainRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverDomainRequest).Unmarshal(b) : FailoverDomainRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FailoverDomainRequest",
		() => new FailoverDomainRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActiveClusters", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ActiveClusters") }], pointerReceiver: true }, { name: "GetDomainActiveClusterName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetDomainName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetFailoverTimeout", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "GetReason", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		FailoverDomainRequest,
		() => [{ name: "DomainName", key: "DomainName", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain_name,json=domainName,proto3\" json:\"domain_name,omitempty\"" }, { name: "DomainActiveClusterName", key: "DomainActiveClusterName", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,10,opt,name=domain_active_cluster_name,json=domainActiveClusterName,proto3\" json:\"domain_active_cluster_name,omitempty\"" }, { name: "ActiveClusters", key: "ActiveClusters", type: /* @__PURE__ */ $.pointerType("apiv1.ActiveClusters"), tag: "protobuf:\"bytes,30,opt,name=active_clusters,json=activeClusters,proto3\" json:\"active_clusters,omitempty\"" }, { name: "Reason", key: "Reason", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,40,opt,name=reason,proto3\" json:\"reason,omitempty\"" }, { name: "FailoverTimeout", key: "FailoverTimeout", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,50,opt,name=failover_timeout,json=failoverTimeout,proto3\" json:\"failover_timeout,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class FailoverDomainResponse {
	public get Domain(): __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null {
		return this._fields.Domain
	}

	public set Domain(value: __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null) {
		this._fields.Domain = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		Domain: __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? (null! as __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FailoverDomainResponse {
		return new FailoverDomainResponse(this, true)
	}

	public __goscriptAssign(source: FailoverDomainResponse): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([5])]
	}

	public GetDomain(): __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null {
		const m: FailoverDomainResponse | $.VarRef<FailoverDomainResponse> | null = this;
		if (m != null) {
			return $.pointerValue<FailoverDomainResponse>(m).Domain
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: FailoverDomainResponse | $.VarRef<FailoverDomainResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverDomainResponse).Size() : FailoverDomainResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple5: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverDomainResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FailoverDomainResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FailoverDomainResponse | $.VarRef<FailoverDomainResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverDomainResponse).Size() : FailoverDomainResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverDomainResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FailoverDomainResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FailoverDomainResponse | $.VarRef<FailoverDomainResponse> | null = this;
		const m$: FailoverDomainResponse = m == null ? $.pointerTarget<FailoverDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailoverDomainResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as FailoverDomainResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as FailoverDomainResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as FailoverDomainResponse).XXX_unrecognized)
		}
		if ((m$ as FailoverDomainResponse).Domain != null) {
			{
				let [size, err] = __goscript_domain_pb.Domain.prototype.MarshalToSizedBuffer.call((m$ as FailoverDomainResponse).Domain, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: FailoverDomainResponse | $.VarRef<FailoverDomainResponse> | null = this;
		$.assignStruct($.pointerValue<FailoverDomainResponse>(m), $.markAsStructValue(new FailoverDomainResponse()))
	}

	public Size(): number {
		const m: FailoverDomainResponse | $.VarRef<FailoverDomainResponse> | null = this;
		let n: number = 0
		const m$: FailoverDomainResponse = m == null ? $.pointerTarget<FailoverDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailoverDomainResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as FailoverDomainResponse).Domain != null) {
			l = __goscript_domain_pb.Domain.prototype.Size.call((m$ as FailoverDomainResponse).Domain)
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as FailoverDomainResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as FailoverDomainResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: FailoverDomainResponse | $.VarRef<FailoverDomainResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.FailoverDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: FailoverDomainResponse | $.VarRef<FailoverDomainResponse> | null = this;
		const m$: FailoverDomainResponse = m == null ? $.pointerTarget<FailoverDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailoverDomainResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow7 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: FailoverDomainResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: FailoverDomainResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Domain", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as FailoverDomainResponse).Domain == null) {
						;(m$ as FailoverDomainResponse).Domain = new __goscript_domain_pb.Domain()
					}
					{
						let err = __goscript_domain_pb.Domain.prototype.Unmarshal.call((m$ as FailoverDomainResponse).Domain, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as FailoverDomainResponse).XXX_unrecognized = $.appendSlice((m$ as FailoverDomainResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: FailoverDomainResponse | $.VarRef<FailoverDomainResponse> | null = this;
		xxx_messageInfo_FailoverDomainResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.FailoverDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: FailoverDomainResponse | $.VarRef<FailoverDomainResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_FailoverDomainResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.FailoverDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverDomainResponse).MarshalToSizedBuffer(b) : FailoverDomainResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: FailoverDomainResponse | $.VarRef<FailoverDomainResponse> | null = this;
		xxx_messageInfo_FailoverDomainResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.FailoverDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainResponse")), src)
	}

	public XXX_Size(): number {
		const m: FailoverDomainResponse | $.VarRef<FailoverDomainResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverDomainResponse).Size() : FailoverDomainResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: FailoverDomainResponse | $.VarRef<FailoverDomainResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverDomainResponse).Unmarshal(b) : FailoverDomainResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FailoverDomainResponse",
		() => new FailoverDomainResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Domain") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		FailoverDomainResponse,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.pointerType("apiv1.Domain"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class DeprecateDomainRequest {
	public get SecurityToken(): string {
		return this._fields.SecurityToken
	}

	public set SecurityToken(value: string) {
		this._fields.SecurityToken = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		SecurityToken: string
		Name: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{SecurityToken?: string, Name?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			SecurityToken: init?.SecurityToken ?? ("" as string),
			Name: init?.Name ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DeprecateDomainRequest {
		return new DeprecateDomainRequest(this, true)
	}

	public __goscriptAssign(source: DeprecateDomainRequest): void {
		const target = this._fields
		const values = source._fields
		target.SecurityToken = values.SecurityToken
		target.Name = values.Name
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([6])]
	}

	public GetName(): string {
		const m: DeprecateDomainRequest | $.VarRef<DeprecateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DeprecateDomainRequest>(m).Name
		}
		return ""
	}

	public GetSecurityToken(): string {
		const m: DeprecateDomainRequest | $.VarRef<DeprecateDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DeprecateDomainRequest>(m).SecurityToken
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DeprecateDomainRequest | $.VarRef<DeprecateDomainRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeprecateDomainRequest).Size() : DeprecateDomainRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple6: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeprecateDomainRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DeprecateDomainRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DeprecateDomainRequest | $.VarRef<DeprecateDomainRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeprecateDomainRequest).Size() : DeprecateDomainRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeprecateDomainRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DeprecateDomainRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DeprecateDomainRequest | $.VarRef<DeprecateDomainRequest> | null = this;
		const m$: DeprecateDomainRequest = m == null ? $.pointerTarget<DeprecateDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeprecateDomainRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DeprecateDomainRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DeprecateDomainRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DeprecateDomainRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as DeprecateDomainRequest).Name) > 0) {
			i = i - ($.stringLen((m$ as DeprecateDomainRequest).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DeprecateDomainRequest).Name)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as DeprecateDomainRequest).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as DeprecateDomainRequest).SecurityToken) > 0) {
			i = i - ($.stringLen((m$ as DeprecateDomainRequest).SecurityToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DeprecateDomainRequest).SecurityToken)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as DeprecateDomainRequest).SecurityToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DeprecateDomainRequest | $.VarRef<DeprecateDomainRequest> | null = this;
		$.assignStruct($.pointerValue<DeprecateDomainRequest>(m), $.markAsStructValue(new DeprecateDomainRequest()))
	}

	public Size(): number {
		const m: DeprecateDomainRequest | $.VarRef<DeprecateDomainRequest> | null = this;
		let n: number = 0
		const m$: DeprecateDomainRequest = m == null ? $.pointerTarget<DeprecateDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeprecateDomainRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as DeprecateDomainRequest).SecurityToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		l = $.stringLen((m$ as DeprecateDomainRequest).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as DeprecateDomainRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DeprecateDomainRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DeprecateDomainRequest | $.VarRef<DeprecateDomainRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DeprecateDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DeprecateDomainRequest | $.VarRef<DeprecateDomainRequest> | null = this;
		const m$: DeprecateDomainRequest = m == null ? $.pointerTarget<DeprecateDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeprecateDomainRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow8 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: DeprecateDomainRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DeprecateDomainRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field SecurityToken", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DeprecateDomainRequest).SecurityToken = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Name", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DeprecateDomainRequest).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DeprecateDomainRequest).XXX_unrecognized = $.appendSlice((m$ as DeprecateDomainRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: DeprecateDomainRequest | $.VarRef<DeprecateDomainRequest> | null = this;
		xxx_messageInfo_DeprecateDomainRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DeprecateDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: DeprecateDomainRequest | $.VarRef<DeprecateDomainRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DeprecateDomainRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DeprecateDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeprecateDomainRequest).MarshalToSizedBuffer(b) : DeprecateDomainRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: DeprecateDomainRequest | $.VarRef<DeprecateDomainRequest> | null = this;
		xxx_messageInfo_DeprecateDomainRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DeprecateDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainRequest")), src)
	}

	public XXX_Size(): number {
		const m: DeprecateDomainRequest | $.VarRef<DeprecateDomainRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeprecateDomainRequest).Size() : DeprecateDomainRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DeprecateDomainRequest | $.VarRef<DeprecateDomainRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeprecateDomainRequest).Unmarshal(b) : DeprecateDomainRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DeprecateDomainRequest",
		() => new DeprecateDomainRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetSecurityToken", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		DeprecateDomainRequest,
		() => [{ name: "SecurityToken", key: "SecurityToken", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=security_token,json=securityToken,proto3\" json:\"security_token,omitempty\"" }, { name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class DeprecateDomainResponse {
	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DeprecateDomainResponse {
		return new DeprecateDomainResponse(this, true)
	}

	public __goscriptAssign(source: DeprecateDomainResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([7])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DeprecateDomainResponse | $.VarRef<DeprecateDomainResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeprecateDomainResponse).Size() : DeprecateDomainResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple7: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeprecateDomainResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DeprecateDomainResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DeprecateDomainResponse | $.VarRef<DeprecateDomainResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeprecateDomainResponse).Size() : DeprecateDomainResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeprecateDomainResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DeprecateDomainResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DeprecateDomainResponse | $.VarRef<DeprecateDomainResponse> | null = this;
		const m$: DeprecateDomainResponse = m == null ? $.pointerTarget<DeprecateDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeprecateDomainResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DeprecateDomainResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DeprecateDomainResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DeprecateDomainResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DeprecateDomainResponse | $.VarRef<DeprecateDomainResponse> | null = this;
		$.assignStruct($.pointerValue<DeprecateDomainResponse>(m), new DeprecateDomainResponse(undefined, true))
	}

	public Size(): number {
		const m: DeprecateDomainResponse | $.VarRef<DeprecateDomainResponse> | null = this;
		let n: number = 0
		const m$: DeprecateDomainResponse = m == null ? $.pointerTarget<DeprecateDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeprecateDomainResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as DeprecateDomainResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DeprecateDomainResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DeprecateDomainResponse | $.VarRef<DeprecateDomainResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DeprecateDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DeprecateDomainResponse | $.VarRef<DeprecateDomainResponse> | null = this;
		const m$: DeprecateDomainResponse = m == null ? $.pointerTarget<DeprecateDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeprecateDomainResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow9 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: DeprecateDomainResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DeprecateDomainResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DeprecateDomainResponse).XXX_unrecognized = $.appendSlice((m$ as DeprecateDomainResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: DeprecateDomainResponse | $.VarRef<DeprecateDomainResponse> | null = this;
		xxx_messageInfo_DeprecateDomainResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DeprecateDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: DeprecateDomainResponse | $.VarRef<DeprecateDomainResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DeprecateDomainResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DeprecateDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeprecateDomainResponse).MarshalToSizedBuffer(b) : DeprecateDomainResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: DeprecateDomainResponse | $.VarRef<DeprecateDomainResponse> | null = this;
		xxx_messageInfo_DeprecateDomainResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DeprecateDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainResponse")), src)
	}

	public XXX_Size(): number {
		const m: DeprecateDomainResponse | $.VarRef<DeprecateDomainResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeprecateDomainResponse).Size() : DeprecateDomainResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DeprecateDomainResponse | $.VarRef<DeprecateDomainResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeprecateDomainResponse).Unmarshal(b) : DeprecateDomainResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DeprecateDomainResponse",
		() => new DeprecateDomainResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		DeprecateDomainResponse,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class DeleteDomainRequest {
	public get SecurityToken(): string {
		return this._fields.SecurityToken
	}

	public set SecurityToken(value: string) {
		this._fields.SecurityToken = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		SecurityToken: string
		Name: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{SecurityToken?: string, Name?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			SecurityToken: init?.SecurityToken ?? ("" as string),
			Name: init?.Name ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DeleteDomainRequest {
		return new DeleteDomainRequest(this, true)
	}

	public __goscriptAssign(source: DeleteDomainRequest): void {
		const target = this._fields
		const values = source._fields
		target.SecurityToken = values.SecurityToken
		target.Name = values.Name
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([8])]
	}

	public GetName(): string {
		const m: DeleteDomainRequest | $.VarRef<DeleteDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DeleteDomainRequest>(m).Name
		}
		return ""
	}

	public GetSecurityToken(): string {
		const m: DeleteDomainRequest | $.VarRef<DeleteDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DeleteDomainRequest>(m).SecurityToken
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DeleteDomainRequest | $.VarRef<DeleteDomainRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteDomainRequest).Size() : DeleteDomainRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple8: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteDomainRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DeleteDomainRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DeleteDomainRequest | $.VarRef<DeleteDomainRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteDomainRequest).Size() : DeleteDomainRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteDomainRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DeleteDomainRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DeleteDomainRequest | $.VarRef<DeleteDomainRequest> | null = this;
		const m$: DeleteDomainRequest = m == null ? $.pointerTarget<DeleteDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeleteDomainRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DeleteDomainRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DeleteDomainRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DeleteDomainRequest).XXX_unrecognized)
		}
		if ($.stringLen((m$ as DeleteDomainRequest).Name) > 0) {
			i = i - ($.stringLen((m$ as DeleteDomainRequest).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DeleteDomainRequest).Name)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as DeleteDomainRequest).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as DeleteDomainRequest).SecurityToken) > 0) {
			i = i - ($.stringLen((m$ as DeleteDomainRequest).SecurityToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DeleteDomainRequest).SecurityToken)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as DeleteDomainRequest).SecurityToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DeleteDomainRequest | $.VarRef<DeleteDomainRequest> | null = this;
		$.assignStruct($.pointerValue<DeleteDomainRequest>(m), $.markAsStructValue(new DeleteDomainRequest()))
	}

	public Size(): number {
		const m: DeleteDomainRequest | $.VarRef<DeleteDomainRequest> | null = this;
		let n: number = 0
		const m$: DeleteDomainRequest = m == null ? $.pointerTarget<DeleteDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeleteDomainRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as DeleteDomainRequest).SecurityToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		l = $.stringLen((m$ as DeleteDomainRequest).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as DeleteDomainRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DeleteDomainRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DeleteDomainRequest | $.VarRef<DeleteDomainRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DeleteDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DeleteDomainRequest | $.VarRef<DeleteDomainRequest> | null = this;
		const m$: DeleteDomainRequest = m == null ? $.pointerTarget<DeleteDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeleteDomainRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow10 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: DeleteDomainRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DeleteDomainRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field SecurityToken", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DeleteDomainRequest).SecurityToken = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Name", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DeleteDomainRequest).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DeleteDomainRequest).XXX_unrecognized = $.appendSlice((m$ as DeleteDomainRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: DeleteDomainRequest | $.VarRef<DeleteDomainRequest> | null = this;
		xxx_messageInfo_DeleteDomainRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DeleteDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: DeleteDomainRequest | $.VarRef<DeleteDomainRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DeleteDomainRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DeleteDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteDomainRequest).MarshalToSizedBuffer(b) : DeleteDomainRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: DeleteDomainRequest | $.VarRef<DeleteDomainRequest> | null = this;
		xxx_messageInfo_DeleteDomainRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DeleteDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainRequest")), src)
	}

	public XXX_Size(): number {
		const m: DeleteDomainRequest | $.VarRef<DeleteDomainRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteDomainRequest).Size() : DeleteDomainRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DeleteDomainRequest | $.VarRef<DeleteDomainRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteDomainRequest).Unmarshal(b) : DeleteDomainRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DeleteDomainRequest",
		() => new DeleteDomainRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetSecurityToken", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		DeleteDomainRequest,
		() => [{ name: "SecurityToken", key: "SecurityToken", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=security_token,json=securityToken,proto3\" json:\"security_token,omitempty\"" }, { name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class DeleteDomainResponse {
	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DeleteDomainResponse {
		return new DeleteDomainResponse(this, true)
	}

	public __goscriptAssign(source: DeleteDomainResponse): void {
		const target = this._fields
		const values = source._fields
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([9])]
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DeleteDomainResponse | $.VarRef<DeleteDomainResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteDomainResponse).Size() : DeleteDomainResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple9: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteDomainResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DeleteDomainResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DeleteDomainResponse | $.VarRef<DeleteDomainResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteDomainResponse).Size() : DeleteDomainResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteDomainResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DeleteDomainResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DeleteDomainResponse | $.VarRef<DeleteDomainResponse> | null = this;
		const m$: DeleteDomainResponse = m == null ? $.pointerTarget<DeleteDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeleteDomainResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DeleteDomainResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DeleteDomainResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DeleteDomainResponse).XXX_unrecognized)
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DeleteDomainResponse | $.VarRef<DeleteDomainResponse> | null = this;
		$.assignStruct($.pointerValue<DeleteDomainResponse>(m), new DeleteDomainResponse(undefined, true))
	}

	public Size(): number {
		const m: DeleteDomainResponse | $.VarRef<DeleteDomainResponse> | null = this;
		let n: number = 0
		const m$: DeleteDomainResponse = m == null ? $.pointerTarget<DeleteDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeleteDomainResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as DeleteDomainResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DeleteDomainResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DeleteDomainResponse | $.VarRef<DeleteDomainResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DeleteDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DeleteDomainResponse | $.VarRef<DeleteDomainResponse> | null = this;
		const m$: DeleteDomainResponse = m == null ? $.pointerTarget<DeleteDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DeleteDomainResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow11 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: DeleteDomainResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DeleteDomainResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DeleteDomainResponse).XXX_unrecognized = $.appendSlice((m$ as DeleteDomainResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: DeleteDomainResponse | $.VarRef<DeleteDomainResponse> | null = this;
		xxx_messageInfo_DeleteDomainResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DeleteDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: DeleteDomainResponse | $.VarRef<DeleteDomainResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DeleteDomainResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DeleteDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteDomainResponse).MarshalToSizedBuffer(b) : DeleteDomainResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: DeleteDomainResponse | $.VarRef<DeleteDomainResponse> | null = this;
		xxx_messageInfo_DeleteDomainResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DeleteDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainResponse")), src)
	}

	public XXX_Size(): number {
		const m: DeleteDomainResponse | $.VarRef<DeleteDomainResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteDomainResponse).Size() : DeleteDomainResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DeleteDomainResponse | $.VarRef<DeleteDomainResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DeleteDomainResponse).Unmarshal(b) : DeleteDomainResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DeleteDomainResponse",
		() => new DeleteDomainResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		DeleteDomainResponse,
		() => [{ name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class DescribeDomainRequest {
	// Types that are valid to be assigned to DescribeBy:
	// 	*DescribeDomainRequest_Id
	// 	*DescribeDomainRequest_Name
	public get DescribeBy(): isDescribeDomainRequest_DescribeBy | null {
		return this._fields.DescribeBy
	}

	public set DescribeBy(value: isDescribeDomainRequest_DescribeBy | null) {
		this._fields.DescribeBy = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		DescribeBy: isDescribeDomainRequest_DescribeBy | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{DescribeBy?: isDescribeDomainRequest_DescribeBy | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			DescribeBy: init?.DescribeBy ?? (null! as isDescribeDomainRequest_DescribeBy | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DescribeDomainRequest {
		return new DescribeDomainRequest(this, true)
	}

	public __goscriptAssign(source: DescribeDomainRequest): void {
		const target = this._fields
		const values = source._fields
		target.DescribeBy = $.assignFieldValue(target.DescribeBy, values.DescribeBy, "apiv1.isDescribeDomainRequest_DescribeBy")
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([10])]
	}

	public GetDescribeBy(): isDescribeDomainRequest_DescribeBy | null {
		const m: DescribeDomainRequest | $.VarRef<DescribeDomainRequest> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeDomainRequest>(m).DescribeBy
		}
		return null
	}

	public GetId(): string {
		const m: DescribeDomainRequest | $.VarRef<DescribeDomainRequest> | null = this;
		{
			let __goscriptTuple10: any = $.typeAssertTuple<DescribeDomainRequest_Id | $.VarRef<DescribeDomainRequest_Id> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainRequest).GetDescribeBy() : DescribeDomainRequest.prototype.GetDescribeBy.call(m)), /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest_Id"))
			let x: DescribeDomainRequest_Id | $.VarRef<DescribeDomainRequest_Id> | null = __goscriptTuple10[0]
			let ok = __goscriptTuple10[1]
			if (ok) {
				return $.pointerValue<DescribeDomainRequest_Id>(x).Id
			}
		}
		return ""
	}

	public GetName(): string {
		const m: DescribeDomainRequest | $.VarRef<DescribeDomainRequest> | null = this;
		{
			let __goscriptTuple11: any = $.typeAssertTuple<DescribeDomainRequest_Name | $.VarRef<DescribeDomainRequest_Name> | null>((m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainRequest).GetDescribeBy() : DescribeDomainRequest.prototype.GetDescribeBy.call(m)), /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest_Name"))
			let x: DescribeDomainRequest_Name | $.VarRef<DescribeDomainRequest_Name> | null = __goscriptTuple11[0]
			let ok = __goscriptTuple11[1]
			if (ok) {
				return $.pointerValue<DescribeDomainRequest_Name>(x).Name
			}
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DescribeDomainRequest | $.VarRef<DescribeDomainRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainRequest).Size() : DescribeDomainRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple12: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeDomainRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeDomainRequest | $.VarRef<DescribeDomainRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainRequest).Size() : DescribeDomainRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeDomainRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeDomainRequest | $.VarRef<DescribeDomainRequest> | null = this;
		const m$: DescribeDomainRequest = m == null ? $.pointerTarget<DescribeDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeDomainRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DescribeDomainRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DescribeDomainRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DescribeDomainRequest).XXX_unrecognized)
		}
		if ((m$ as DescribeDomainRequest).DescribeBy != null) {
			{
				let size = $.pointerValue<Exclude<isDescribeDomainRequest_DescribeBy, null>>((m$ as DescribeDomainRequest).DescribeBy).Size()
				i = i - (size)
				{
					let [, err] = $.pointerValue<Exclude<isDescribeDomainRequest_DescribeBy, null>>((m$ as DescribeDomainRequest).DescribeBy).MarshalTo($.goSlice(dAtA, i, undefined))
					if (err != null) {
						return [0, err]
					}
				}
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DescribeDomainRequest | $.VarRef<DescribeDomainRequest> | null = this;
		$.assignStruct($.pointerValue<DescribeDomainRequest>(m), $.markAsStructValue(new DescribeDomainRequest()))
	}

	public Size(): number {
		const m: DescribeDomainRequest | $.VarRef<DescribeDomainRequest> | null = this;
		let n: number = 0
		const m$: DescribeDomainRequest = m == null ? $.pointerTarget<DescribeDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeDomainRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as DescribeDomainRequest).DescribeBy != null) {
			n = n + ($.pointerValue<Exclude<isDescribeDomainRequest_DescribeBy, null>>((m$ as DescribeDomainRequest).DescribeBy).Size())
		}
		if ((m$ as DescribeDomainRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DescribeDomainRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DescribeDomainRequest | $.VarRef<DescribeDomainRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DescribeDomainRequest | $.VarRef<DescribeDomainRequest> | null = this;
		const m$: DescribeDomainRequest = m == null ? $.pointerTarget<DescribeDomainRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeDomainRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow12 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: DescribeDomainRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DescribeDomainRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Id", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DescribeDomainRequest).DescribeBy = $.interfaceValue<isDescribeDomainRequest_DescribeBy | null>(new DescribeDomainRequest_Id({Id: $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))}), "*apiv1.DescribeDomainRequest_Id", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest_Id"))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Name", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DescribeDomainRequest).DescribeBy = $.interfaceValue<isDescribeDomainRequest_DescribeBy | null>(new DescribeDomainRequest_Name({Name: $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))}), "*apiv1.DescribeDomainRequest_Name", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest_Name"))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DescribeDomainRequest).XXX_unrecognized = $.appendSlice((m$ as DescribeDomainRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: DescribeDomainRequest | $.VarRef<DescribeDomainRequest> | null = this;
		xxx_messageInfo_DescribeDomainRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: DescribeDomainRequest | $.VarRef<DescribeDomainRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DescribeDomainRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainRequest).MarshalToSizedBuffer(b) : DescribeDomainRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: DescribeDomainRequest | $.VarRef<DescribeDomainRequest> | null = this;
		xxx_messageInfo_DescribeDomainRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest")), src)
	}

	public XXX_OneofWrappers(): $.Slice<any> {
		return $.arrayToSlice<any>([$.interfaceValue(null, "*apiv1.DescribeDomainRequest_Id", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest_Id")), $.interfaceValue(null, "*apiv1.DescribeDomainRequest_Name", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest_Name"))])
	}

	public XXX_Size(): number {
		const m: DescribeDomainRequest | $.VarRef<DescribeDomainRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainRequest).Size() : DescribeDomainRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DescribeDomainRequest | $.VarRef<DescribeDomainRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainRequest).Unmarshal(b) : DescribeDomainRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DescribeDomainRequest",
		() => new DescribeDomainRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDescribeBy", args: [], returns: [{ type: "apiv1.isDescribeDomainRequest_DescribeBy" }], pointerReceiver: true }, { name: "GetId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_OneofWrappers", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }) }], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		DescribeDomainRequest,
		() => [{ name: "DescribeBy", key: "DescribeBy", type: "apiv1.isDescribeDomainRequest_DescribeBy", tag: "protobuf_oneof:\"describe_by\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class DescribeDomainRequest_Id {
	public get Id(): string {
		return this._fields.Id
	}

	public set Id(value: string) {
		this._fields.Id = value
	}

	public _fields: {
		Id: string
	}

	constructor(init?: Partial<{Id?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Id: init?.Id ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DescribeDomainRequest_Id {
		return new DescribeDomainRequest_Id(this, true)
	}

	public __goscriptAssign(source: DescribeDomainRequest_Id): void {
		const target = this._fields
		const values = source._fields
		target.Id = values.Id
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeDomainRequest_Id | $.VarRef<DescribeDomainRequest_Id> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainRequest_Id).Size() : DescribeDomainRequest_Id.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainRequest_Id).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeDomainRequest_Id.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeDomainRequest_Id | $.VarRef<DescribeDomainRequest_Id> | null = this;
		const m$: DescribeDomainRequest_Id = m == null ? $.pointerTarget<DescribeDomainRequest_Id>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeDomainRequest_Id>(m)
		let i = $.sliceLen(dAtA)
		i = i - ($.stringLen((m$ as DescribeDomainRequest_Id).Id))
		$.copy($.goSlice(dAtA, i, undefined), (m$ as DescribeDomainRequest_Id).Id)
		i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as DescribeDomainRequest_Id).Id)))
		i--
		$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: DescribeDomainRequest_Id | $.VarRef<DescribeDomainRequest_Id> | null = this;
		let n: number = 0
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen($.pointerValue<DescribeDomainRequest_Id>(m).Id)
		n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		return n
	}

	public isDescribeDomainRequest_DescribeBy(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DescribeDomainRequest_Id",
		() => new DescribeDomainRequest_Id(),
		() => [{ name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "isDescribeDomainRequest_DescribeBy", args: [], returns: [], pointerReceiver: true }],
		DescribeDomainRequest_Id,
		() => [{ name: "Id", key: "Id", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=id,proto3,oneof\" json:\"id,omitempty\"" }]
	)
}

export class DescribeDomainRequest_Name {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public _fields: {
		Name: string
	}

	constructor(init?: Partial<{Name?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DescribeDomainRequest_Name {
		return new DescribeDomainRequest_Name(this, true)
	}

	public __goscriptAssign(source: DescribeDomainRequest_Name): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeDomainRequest_Name | $.VarRef<DescribeDomainRequest_Name> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainRequest_Name).Size() : DescribeDomainRequest_Name.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainRequest_Name).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeDomainRequest_Name.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeDomainRequest_Name | $.VarRef<DescribeDomainRequest_Name> | null = this;
		const m$: DescribeDomainRequest_Name = m == null ? $.pointerTarget<DescribeDomainRequest_Name>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeDomainRequest_Name>(m)
		let i = $.sliceLen(dAtA)
		i = i - ($.stringLen((m$ as DescribeDomainRequest_Name).Name))
		$.copy($.goSlice(dAtA, i, undefined), (m$ as DescribeDomainRequest_Name).Name)
		i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as DescribeDomainRequest_Name).Name)))
		i--
		$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		return [$.sliceLen(dAtA) - i, null]
	}

	public Size(): number {
		const m: DescribeDomainRequest_Name | $.VarRef<DescribeDomainRequest_Name> | null = this;
		let n: number = 0
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen($.pointerValue<DescribeDomainRequest_Name>(m).Name)
		n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		return n
	}

	public isDescribeDomainRequest_DescribeBy(): void {
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DescribeDomainRequest_Name",
		() => new DescribeDomainRequest_Name(),
		() => [{ name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "isDescribeDomainRequest_DescribeBy", args: [], returns: [], pointerReceiver: true }],
		DescribeDomainRequest_Name,
		() => [{ name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=name,proto3,oneof\" json:\"name,omitempty\"" }]
	)
}

export class DescribeDomainResponse {
	public get Domain(): __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null {
		return this._fields.Domain
	}

	public set Domain(value: __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null) {
		this._fields.Domain = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		Domain: __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domain?: __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? (null! as __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DescribeDomainResponse {
		return new DescribeDomainResponse(this, true)
	}

	public __goscriptAssign(source: DescribeDomainResponse): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([11])]
	}

	public GetDomain(): __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null {
		const m: DescribeDomainResponse | $.VarRef<DescribeDomainResponse> | null = this;
		if (m != null) {
			return $.pointerValue<DescribeDomainResponse>(m).Domain
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: DescribeDomainResponse | $.VarRef<DescribeDomainResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainResponse).Size() : DescribeDomainResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple13: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeDomainResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple13[0]
		err = __goscriptTuple13[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeDomainResponse | $.VarRef<DescribeDomainResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainResponse).Size() : DescribeDomainResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : DescribeDomainResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: DescribeDomainResponse | $.VarRef<DescribeDomainResponse> | null = this;
		const m$: DescribeDomainResponse = m == null ? $.pointerTarget<DescribeDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeDomainResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as DescribeDomainResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as DescribeDomainResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as DescribeDomainResponse).XXX_unrecognized)
		}
		if ((m$ as DescribeDomainResponse).Domain != null) {
			{
				let [size, err] = __goscript_domain_pb.Domain.prototype.MarshalToSizedBuffer.call((m$ as DescribeDomainResponse).Domain, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: DescribeDomainResponse | $.VarRef<DescribeDomainResponse> | null = this;
		$.assignStruct($.pointerValue<DescribeDomainResponse>(m), $.markAsStructValue(new DescribeDomainResponse()))
	}

	public Size(): number {
		const m: DescribeDomainResponse | $.VarRef<DescribeDomainResponse> | null = this;
		let n: number = 0
		const m$: DescribeDomainResponse = m == null ? $.pointerTarget<DescribeDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeDomainResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as DescribeDomainResponse).Domain != null) {
			l = __goscript_domain_pb.Domain.prototype.Size.call((m$ as DescribeDomainResponse).Domain)
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as DescribeDomainResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as DescribeDomainResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: DescribeDomainResponse | $.VarRef<DescribeDomainResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: DescribeDomainResponse | $.VarRef<DescribeDomainResponse> | null = this;
		const m$: DescribeDomainResponse = m == null ? $.pointerTarget<DescribeDomainResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<DescribeDomainResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow13 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow13.backing as any[])[$.windowSlot(__goscriptSliceWindow13, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: DescribeDomainResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: DescribeDomainResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Domain", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow13.backing as any[])[$.windowSlot(__goscriptSliceWindow13, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as DescribeDomainResponse).Domain == null) {
						;(m$ as DescribeDomainResponse).Domain = new __goscript_domain_pb.Domain()
					}
					{
						let err = __goscript_domain_pb.Domain.prototype.Unmarshal.call((m$ as DescribeDomainResponse).Domain, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as DescribeDomainResponse).XXX_unrecognized = $.appendSlice((m$ as DescribeDomainResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: DescribeDomainResponse | $.VarRef<DescribeDomainResponse> | null = this;
		xxx_messageInfo_DescribeDomainResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: DescribeDomainResponse | $.VarRef<DescribeDomainResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_DescribeDomainResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainResponse).MarshalToSizedBuffer(b) : DescribeDomainResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: DescribeDomainResponse | $.VarRef<DescribeDomainResponse> | null = this;
		xxx_messageInfo_DescribeDomainResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.DescribeDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainResponse")), src)
	}

	public XXX_Size(): number {
		const m: DescribeDomainResponse | $.VarRef<DescribeDomainResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainResponse).Size() : DescribeDomainResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: DescribeDomainResponse | $.VarRef<DescribeDomainResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as DescribeDomainResponse).Unmarshal(b) : DescribeDomainResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.DescribeDomainResponse",
		() => new DescribeDomainResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDomain", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.Domain") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		DescribeDomainResponse,
		() => [{ name: "Domain", key: "Domain", type: /* @__PURE__ */ $.pointerType("apiv1.Domain"), tag: "protobuf:\"bytes,1,opt,name=domain,proto3\" json:\"domain,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ListDomainsRequest {
	public get PageSize(): number {
		return this._fields.PageSize
	}

	public set PageSize(value: number) {
		this._fields.PageSize = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		PageSize: number
		NextPageToken: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{PageSize?: number, NextPageToken?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			PageSize: init?.PageSize ?? (0 as number),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListDomainsRequest {
		return new ListDomainsRequest(this, true)
	}

	public __goscriptAssign(source: ListDomainsRequest): void {
		const target = this._fields
		const values = source._fields
		target.PageSize = values.PageSize
		target.NextPageToken = values.NextPageToken
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([12])]
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: ListDomainsRequest | $.VarRef<ListDomainsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListDomainsRequest>(m).NextPageToken
		}
		return null
	}

	public GetPageSize(): number {
		const m: ListDomainsRequest | $.VarRef<ListDomainsRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListDomainsRequest>(m).PageSize
		}
		return 0
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListDomainsRequest | $.VarRef<ListDomainsRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListDomainsRequest).Size() : ListDomainsRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple14: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListDomainsRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListDomainsRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListDomainsRequest | $.VarRef<ListDomainsRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListDomainsRequest).Size() : ListDomainsRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListDomainsRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListDomainsRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListDomainsRequest | $.VarRef<ListDomainsRequest> | null = this;
		const m$: ListDomainsRequest = m == null ? $.pointerTarget<ListDomainsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListDomainsRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListDomainsRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListDomainsRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListDomainsRequest).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as ListDomainsRequest).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as ListDomainsRequest).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListDomainsRequest).NextPageToken)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.sliceLen((m$ as ListDomainsRequest).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as ListDomainsRequest).PageSize != 0) {
			i = encodeVarintServiceDomain(dAtA, i, $.uint64((m$ as ListDomainsRequest).PageSize))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ListDomainsRequest | $.VarRef<ListDomainsRequest> | null = this;
		$.assignStruct($.pointerValue<ListDomainsRequest>(m), $.markAsStructValue(new ListDomainsRequest()))
	}

	public Size(): number {
		const m: ListDomainsRequest | $.VarRef<ListDomainsRequest> | null = this;
		let n: number = 0
		const m$: ListDomainsRequest = m == null ? $.pointerTarget<ListDomainsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListDomainsRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as ListDomainsRequest).PageSize != 0) {
			n = n + (1 + sovServiceDomain($.uint64((m$ as ListDomainsRequest).PageSize)))
		}
		l = $.sliceLen((m$ as ListDomainsRequest).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as ListDomainsRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListDomainsRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ListDomainsRequest | $.VarRef<ListDomainsRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ListDomainsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListDomainsRequest | $.VarRef<ListDomainsRequest> | null = this;
		const m$: ListDomainsRequest = m == null ? $.pointerTarget<ListDomainsRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListDomainsRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow14 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: ListDomainsRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListDomainsRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field PageSize", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ListDomainsRequest).PageSize = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, iNdEx)] as number)
						iNdEx++;
						;(m$ as ListDomainsRequest).PageSize = (m$ as ListDomainsRequest).PageSize | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field NextPageToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow14.backing as any[])[$.windowSlot(__goscriptSliceWindow14, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListDomainsRequest).NextPageToken = $.appendSlice($.goSlice((m$ as ListDomainsRequest).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as ListDomainsRequest).NextPageToken == null) {
						;(m$ as ListDomainsRequest).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListDomainsRequest).XXX_unrecognized = $.appendSlice((m$ as ListDomainsRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: ListDomainsRequest | $.VarRef<ListDomainsRequest> | null = this;
		xxx_messageInfo_ListDomainsRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ListDomainsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ListDomainsRequest | $.VarRef<ListDomainsRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListDomainsRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ListDomainsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListDomainsRequest).MarshalToSizedBuffer(b) : ListDomainsRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ListDomainsRequest | $.VarRef<ListDomainsRequest> | null = this;
		xxx_messageInfo_ListDomainsRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ListDomainsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsRequest")), src)
	}

	public XXX_Size(): number {
		const m: ListDomainsRequest | $.VarRef<ListDomainsRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListDomainsRequest).Size() : ListDomainsRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListDomainsRequest | $.VarRef<ListDomainsRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListDomainsRequest).Unmarshal(b) : ListDomainsRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListDomainsRequest",
		() => new ListDomainsRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetNextPageToken", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "GetPageSize", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ListDomainsRequest,
		() => [{ name: "PageSize", key: "PageSize", type: /* @__PURE__ */ $.basicType("int32"), tag: "protobuf:\"varint,1,opt,name=page_size,json=pageSize,proto3\" json:\"page_size,omitempty\"" }, { name: "NextPageToken", key: "NextPageToken", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ListDomainsResponse {
	public get Domains(): $.Slice<__goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null> {
		return this._fields.Domains
	}

	public set Domains(value: $.Slice<__goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null>) {
		this._fields.Domains = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		Domains: $.Slice<__goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null>
		NextPageToken: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Domains?: $.Slice<__goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null>, NextPageToken?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Domains: init?.Domains ?? (null! as $.Slice<__goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null>),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListDomainsResponse {
		return new ListDomainsResponse(this, true)
	}

	public __goscriptAssign(source: ListDomainsResponse): void {
		const target = this._fields
		const values = source._fields
		target.Domains = values.Domains
		target.NextPageToken = values.NextPageToken
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([13])]
	}

	public GetDomains(): $.Slice<__goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null> {
		const m: ListDomainsResponse | $.VarRef<ListDomainsResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ListDomainsResponse>(m).Domains
		}
		return null
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: ListDomainsResponse | $.VarRef<ListDomainsResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ListDomainsResponse>(m).NextPageToken
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListDomainsResponse | $.VarRef<ListDomainsResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListDomainsResponse).Size() : ListDomainsResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple15: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListDomainsResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListDomainsResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple15[0]
		err = __goscriptTuple15[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListDomainsResponse | $.VarRef<ListDomainsResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListDomainsResponse).Size() : ListDomainsResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListDomainsResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListDomainsResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListDomainsResponse | $.VarRef<ListDomainsResponse> | null = this;
		const m$: ListDomainsResponse = m == null ? $.pointerTarget<ListDomainsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListDomainsResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListDomainsResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListDomainsResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListDomainsResponse).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as ListDomainsResponse).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as ListDomainsResponse).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListDomainsResponse).NextPageToken)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.sliceLen((m$ as ListDomainsResponse).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.sliceLen((m$ as ListDomainsResponse).Domains) > 0) {
			for (let __goscriptSliceWindow15 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as ListDomainsResponse).Domains) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = __goscript_domain_pb.Domain.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as ListDomainsResponse).Domains!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow15.backing as any[])[$.windowSlot(__goscriptSliceWindow15, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ListDomainsResponse | $.VarRef<ListDomainsResponse> | null = this;
		$.assignStruct($.pointerValue<ListDomainsResponse>(m), $.markAsStructValue(new ListDomainsResponse()))
	}

	public Size(): number {
		const m: ListDomainsResponse | $.VarRef<ListDomainsResponse> | null = this;
		let n: number = 0
		const m$: ListDomainsResponse = m == null ? $.pointerTarget<ListDomainsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListDomainsResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as ListDomainsResponse).Domains) > 0) {
			for (let __goscriptRangeTarget2 = (m$ as ListDomainsResponse).Domains, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_domain_pb.Domain | $.VarRef<__goscript_domain_pb.Domain> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as __goscript_domain_pb.Domain).Size() : __goscript_domain_pb.Domain.prototype.Size.call(e))
				n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
			}
		}
		l = $.sliceLen((m$ as ListDomainsResponse).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as ListDomainsResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListDomainsResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ListDomainsResponse | $.VarRef<ListDomainsResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ListDomainsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListDomainsResponse | $.VarRef<ListDomainsResponse> | null = this;
		const m$: ListDomainsResponse = m == null ? $.pointerTarget<ListDomainsResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListDomainsResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow16 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: ListDomainsResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListDomainsResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Domains", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListDomainsResponse).Domains = $.appendOne((m$ as ListDomainsResponse).Domains, new __goscript_domain_pb.Domain(), $.appendZeros.nil)
					{
						let err = __goscript_domain_pb.Domain.prototype.Unmarshal.call($.arrayIndex((m$ as ListDomainsResponse).Domains!, $.sliceLen((m$ as ListDomainsResponse).Domains) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field NextPageToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow16.backing as any[])[$.windowSlot(__goscriptSliceWindow16, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListDomainsResponse).NextPageToken = $.appendSlice($.goSlice((m$ as ListDomainsResponse).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as ListDomainsResponse).NextPageToken == null) {
						;(m$ as ListDomainsResponse).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListDomainsResponse).XXX_unrecognized = $.appendSlice((m$ as ListDomainsResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: ListDomainsResponse | $.VarRef<ListDomainsResponse> | null = this;
		xxx_messageInfo_ListDomainsResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ListDomainsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ListDomainsResponse | $.VarRef<ListDomainsResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListDomainsResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ListDomainsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListDomainsResponse).MarshalToSizedBuffer(b) : ListDomainsResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ListDomainsResponse | $.VarRef<ListDomainsResponse> | null = this;
		xxx_messageInfo_ListDomainsResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ListDomainsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsResponse")), src)
	}

	public XXX_Size(): number {
		const m: ListDomainsResponse | $.VarRef<ListDomainsResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListDomainsResponse).Size() : ListDomainsResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListDomainsResponse | $.VarRef<ListDomainsResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListDomainsResponse).Unmarshal(b) : ListDomainsResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListDomainsResponse",
		() => new ListDomainsResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDomains", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.Domain")) }], pointerReceiver: true }, { name: "GetNextPageToken", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ListDomainsResponse,
		() => [{ name: "Domains", key: "Domains", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.Domain")), tag: "protobuf:\"bytes,1,rep,name=domains,proto3\" json:\"domains,omitempty\"" }, { name: "NextPageToken", key: "NextPageToken", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ListFailoverHistoryRequest {
	// ListFailoverHistoryRequestFilters specifies the filters to apply to the request.
	// If not provided all failover events will be returned.
	public get Filters(): ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null {
		return this._fields.Filters
	}

	public set Filters(value: ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null) {
		this._fields.Filters = value
	}

	// PaginationOptions will be used to paginate the results.
	// If not provided the first 5 events will be returned.
	public get Pagination(): __goscript_common_pb.PaginationOptions | $.VarRef<__goscript_common_pb.PaginationOptions> | null {
		return this._fields.Pagination
	}

	public set Pagination(value: __goscript_common_pb.PaginationOptions | $.VarRef<__goscript_common_pb.PaginationOptions> | null) {
		this._fields.Pagination = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		Filters: ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null
		Pagination: __goscript_common_pb.PaginationOptions | $.VarRef<__goscript_common_pb.PaginationOptions> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Filters?: ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null, Pagination?: __goscript_common_pb.PaginationOptions | $.VarRef<__goscript_common_pb.PaginationOptions> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Filters: init?.Filters ?? (null! as ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null),
			Pagination: init?.Pagination ?? (null! as __goscript_common_pb.PaginationOptions | $.VarRef<__goscript_common_pb.PaginationOptions> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListFailoverHistoryRequest {
		return new ListFailoverHistoryRequest(this, true)
	}

	public __goscriptAssign(source: ListFailoverHistoryRequest): void {
		const target = this._fields
		const values = source._fields
		target.Filters = values.Filters
		target.Pagination = values.Pagination
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([14])]
	}

	public GetFilters(): ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null {
		const m: ListFailoverHistoryRequest | $.VarRef<ListFailoverHistoryRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListFailoverHistoryRequest>(m).Filters
		}
		return null
	}

	public GetPagination(): __goscript_common_pb.PaginationOptions | $.VarRef<__goscript_common_pb.PaginationOptions> | null {
		const m: ListFailoverHistoryRequest | $.VarRef<ListFailoverHistoryRequest> | null = this;
		if (m != null) {
			return $.pointerValue<ListFailoverHistoryRequest>(m).Pagination
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListFailoverHistoryRequest | $.VarRef<ListFailoverHistoryRequest> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryRequest).Size() : ListFailoverHistoryRequest.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple16: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListFailoverHistoryRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple16[0]
		err = __goscriptTuple16[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListFailoverHistoryRequest | $.VarRef<ListFailoverHistoryRequest> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryRequest).Size() : ListFailoverHistoryRequest.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryRequest).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListFailoverHistoryRequest.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListFailoverHistoryRequest | $.VarRef<ListFailoverHistoryRequest> | null = this;
		const m$: ListFailoverHistoryRequest = m == null ? $.pointerTarget<ListFailoverHistoryRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListFailoverHistoryRequest>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListFailoverHistoryRequest).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListFailoverHistoryRequest).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListFailoverHistoryRequest).XXX_unrecognized)
		}
		if ((m$ as ListFailoverHistoryRequest).Pagination != null) {
			{
				let [size, err] = __goscript_common_pb.PaginationOptions.prototype.MarshalToSizedBuffer.call((m$ as ListFailoverHistoryRequest).Pagination, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as ListFailoverHistoryRequest).Filters != null) {
			{
				let [size, err] = ListFailoverHistoryRequestFilters.prototype.MarshalToSizedBuffer.call((m$ as ListFailoverHistoryRequest).Filters, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ListFailoverHistoryRequest | $.VarRef<ListFailoverHistoryRequest> | null = this;
		$.assignStruct($.pointerValue<ListFailoverHistoryRequest>(m), $.markAsStructValue(new ListFailoverHistoryRequest()))
	}

	public Size(): number {
		const m: ListFailoverHistoryRequest | $.VarRef<ListFailoverHistoryRequest> | null = this;
		let n: number = 0
		const m$: ListFailoverHistoryRequest = m == null ? $.pointerTarget<ListFailoverHistoryRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListFailoverHistoryRequest>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as ListFailoverHistoryRequest).Filters != null) {
			l = ListFailoverHistoryRequestFilters.prototype.Size.call((m$ as ListFailoverHistoryRequest).Filters)
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as ListFailoverHistoryRequest).Pagination != null) {
			l = __goscript_common_pb.PaginationOptions.prototype.Size.call((m$ as ListFailoverHistoryRequest).Pagination)
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as ListFailoverHistoryRequest).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListFailoverHistoryRequest).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ListFailoverHistoryRequest | $.VarRef<ListFailoverHistoryRequest> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ListFailoverHistoryRequest", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequest")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListFailoverHistoryRequest | $.VarRef<ListFailoverHistoryRequest> | null = this;
		const m$: ListFailoverHistoryRequest = m == null ? $.pointerTarget<ListFailoverHistoryRequest>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListFailoverHistoryRequest>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow17 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow17.backing as any[])[$.windowSlot(__goscriptSliceWindow17, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: ListFailoverHistoryRequest: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListFailoverHistoryRequest: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Filters", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow17.backing as any[])[$.windowSlot(__goscriptSliceWindow17, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ListFailoverHistoryRequest).Filters == null) {
						;(m$ as ListFailoverHistoryRequest).Filters = new ListFailoverHistoryRequestFilters()
					}
					{
						let err = ListFailoverHistoryRequestFilters.prototype.Unmarshal.call((m$ as ListFailoverHistoryRequest).Filters, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Pagination", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow17.backing as any[])[$.windowSlot(__goscriptSliceWindow17, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ListFailoverHistoryRequest).Pagination == null) {
						;(m$ as ListFailoverHistoryRequest).Pagination = new __goscript_common_pb.PaginationOptions()
					}
					{
						let err = __goscript_common_pb.PaginationOptions.prototype.Unmarshal.call((m$ as ListFailoverHistoryRequest).Pagination, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListFailoverHistoryRequest).XXX_unrecognized = $.appendSlice((m$ as ListFailoverHistoryRequest).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: ListFailoverHistoryRequest | $.VarRef<ListFailoverHistoryRequest> | null = this;
		xxx_messageInfo_ListFailoverHistoryRequest.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ListFailoverHistoryRequest", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequest")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ListFailoverHistoryRequest | $.VarRef<ListFailoverHistoryRequest> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListFailoverHistoryRequest.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ListFailoverHistoryRequest", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequest")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryRequest).MarshalToSizedBuffer(b) : ListFailoverHistoryRequest.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ListFailoverHistoryRequest | $.VarRef<ListFailoverHistoryRequest> | null = this;
		xxx_messageInfo_ListFailoverHistoryRequest.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ListFailoverHistoryRequest", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequest")), src)
	}

	public XXX_Size(): number {
		const m: ListFailoverHistoryRequest | $.VarRef<ListFailoverHistoryRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryRequest).Size() : ListFailoverHistoryRequest.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListFailoverHistoryRequest | $.VarRef<ListFailoverHistoryRequest> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryRequest).Unmarshal(b) : ListFailoverHistoryRequest.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListFailoverHistoryRequest",
		() => new ListFailoverHistoryRequest(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetFilters", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequestFilters") }], pointerReceiver: true }, { name: "GetPagination", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.PaginationOptions") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ListFailoverHistoryRequest,
		() => [{ name: "Filters", key: "Filters", type: /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequestFilters"), tag: "protobuf:\"bytes,1,opt,name=filters,proto3\" json:\"filters,omitempty\"" }, { name: "Pagination", key: "Pagination", type: /* @__PURE__ */ $.pointerType("apiv1.PaginationOptions"), tag: "protobuf:\"bytes,2,opt,name=pagination,proto3\" json:\"pagination,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ListFailoverHistoryRequestFilters {
	// domain_id is the id of the domain to list failover history for.
	// domain_id is required.
	public get DomainId(): string {
		return this._fields.DomainId
	}

	public set DomainId(value: string) {
		this._fields.DomainId = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		DomainId: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{DomainId?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			DomainId: init?.DomainId ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListFailoverHistoryRequestFilters {
		return new ListFailoverHistoryRequestFilters(this, true)
	}

	public __goscriptAssign(source: ListFailoverHistoryRequestFilters): void {
		const target = this._fields
		const values = source._fields
		target.DomainId = values.DomainId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([15])]
	}

	public GetDomainId(): string {
		const m: ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null = this;
		if (m != null) {
			return $.pointerValue<ListFailoverHistoryRequestFilters>(m).DomainId
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryRequestFilters).Size() : ListFailoverHistoryRequestFilters.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple17: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryRequestFilters).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListFailoverHistoryRequestFilters.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple17[0]
		err = __goscriptTuple17[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryRequestFilters).Size() : ListFailoverHistoryRequestFilters.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryRequestFilters).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListFailoverHistoryRequestFilters.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null = this;
		const m$: ListFailoverHistoryRequestFilters = m == null ? $.pointerTarget<ListFailoverHistoryRequestFilters>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListFailoverHistoryRequestFilters>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListFailoverHistoryRequestFilters).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListFailoverHistoryRequestFilters).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListFailoverHistoryRequestFilters).XXX_unrecognized)
		}
		if ($.stringLen((m$ as ListFailoverHistoryRequestFilters).DomainId) > 0) {
			i = i - ($.stringLen((m$ as ListFailoverHistoryRequestFilters).DomainId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListFailoverHistoryRequestFilters).DomainId)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as ListFailoverHistoryRequestFilters).DomainId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null = this;
		$.assignStruct($.pointerValue<ListFailoverHistoryRequestFilters>(m), $.markAsStructValue(new ListFailoverHistoryRequestFilters()))
	}

	public Size(): number {
		const m: ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null = this;
		let n: number = 0
		const m$: ListFailoverHistoryRequestFilters = m == null ? $.pointerTarget<ListFailoverHistoryRequestFilters>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListFailoverHistoryRequestFilters>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ListFailoverHistoryRequestFilters).DomainId)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as ListFailoverHistoryRequestFilters).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListFailoverHistoryRequestFilters).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ListFailoverHistoryRequestFilters", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequestFilters")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null = this;
		const m$: ListFailoverHistoryRequestFilters = m == null ? $.pointerTarget<ListFailoverHistoryRequestFilters>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListFailoverHistoryRequestFilters>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow18 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow18.backing as any[])[$.windowSlot(__goscriptSliceWindow18, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: ListFailoverHistoryRequestFilters: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListFailoverHistoryRequestFilters: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field DomainId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow18.backing as any[])[$.windowSlot(__goscriptSliceWindow18, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListFailoverHistoryRequestFilters).DomainId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListFailoverHistoryRequestFilters).XXX_unrecognized = $.appendSlice((m$ as ListFailoverHistoryRequestFilters).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null = this;
		xxx_messageInfo_ListFailoverHistoryRequestFilters.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ListFailoverHistoryRequestFilters", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequestFilters")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListFailoverHistoryRequestFilters.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ListFailoverHistoryRequestFilters", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequestFilters")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryRequestFilters).MarshalToSizedBuffer(b) : ListFailoverHistoryRequestFilters.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null = this;
		xxx_messageInfo_ListFailoverHistoryRequestFilters.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ListFailoverHistoryRequestFilters", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequestFilters")), src)
	}

	public XXX_Size(): number {
		const m: ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryRequestFilters).Size() : ListFailoverHistoryRequestFilters.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListFailoverHistoryRequestFilters | $.VarRef<ListFailoverHistoryRequestFilters> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryRequestFilters).Unmarshal(b) : ListFailoverHistoryRequestFilters.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListFailoverHistoryRequestFilters",
		() => new ListFailoverHistoryRequestFilters(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetDomainId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ListFailoverHistoryRequestFilters,
		() => [{ name: "DomainId", key: "DomainId", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=domain_id,json=domainId,proto3\" json:\"domain_id,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ListFailoverHistoryResponse {
	public get FailoverEvents(): $.Slice<FailoverEvent | $.VarRef<FailoverEvent> | null> {
		return this._fields.FailoverEvents
	}

	public set FailoverEvents(value: $.Slice<FailoverEvent | $.VarRef<FailoverEvent> | null>) {
		this._fields.FailoverEvents = value
	}

	// next_page_token can be passed in a subsequent request to fetch the next set of events.
	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		FailoverEvents: $.Slice<FailoverEvent | $.VarRef<FailoverEvent> | null>
		NextPageToken: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{FailoverEvents?: $.Slice<FailoverEvent | $.VarRef<FailoverEvent> | null>, NextPageToken?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			FailoverEvents: init?.FailoverEvents ?? (null! as $.Slice<FailoverEvent | $.VarRef<FailoverEvent> | null>),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListFailoverHistoryResponse {
		return new ListFailoverHistoryResponse(this, true)
	}

	public __goscriptAssign(source: ListFailoverHistoryResponse): void {
		const target = this._fields
		const values = source._fields
		target.FailoverEvents = values.FailoverEvents
		target.NextPageToken = values.NextPageToken
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([16])]
	}

	public GetFailoverEvents(): $.Slice<FailoverEvent | $.VarRef<FailoverEvent> | null> {
		const m: ListFailoverHistoryResponse | $.VarRef<ListFailoverHistoryResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ListFailoverHistoryResponse>(m).FailoverEvents
		}
		return null
	}

	public GetNextPageToken(): $.Slice<number> {
		const m: ListFailoverHistoryResponse | $.VarRef<ListFailoverHistoryResponse> | null = this;
		if (m != null) {
			return $.pointerValue<ListFailoverHistoryResponse>(m).NextPageToken
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ListFailoverHistoryResponse | $.VarRef<ListFailoverHistoryResponse> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryResponse).Size() : ListFailoverHistoryResponse.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple18: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListFailoverHistoryResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple18[0]
		err = __goscriptTuple18[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListFailoverHistoryResponse | $.VarRef<ListFailoverHistoryResponse> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryResponse).Size() : ListFailoverHistoryResponse.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryResponse).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ListFailoverHistoryResponse.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ListFailoverHistoryResponse | $.VarRef<ListFailoverHistoryResponse> | null = this;
		const m$: ListFailoverHistoryResponse = m == null ? $.pointerTarget<ListFailoverHistoryResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListFailoverHistoryResponse>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ListFailoverHistoryResponse).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ListFailoverHistoryResponse).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListFailoverHistoryResponse).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as ListFailoverHistoryResponse).NextPageToken) > 0) {
			i = i - ($.sliceLen((m$ as ListFailoverHistoryResponse).NextPageToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ListFailoverHistoryResponse).NextPageToken)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.sliceLen((m$ as ListFailoverHistoryResponse).NextPageToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.sliceLen((m$ as ListFailoverHistoryResponse).FailoverEvents) > 0) {
			for (let __goscriptSliceWindow19 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as ListFailoverHistoryResponse).FailoverEvents) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = FailoverEvent.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as ListFailoverHistoryResponse).FailoverEvents!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow19.backing as any[])[$.windowSlot(__goscriptSliceWindow19, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ListFailoverHistoryResponse | $.VarRef<ListFailoverHistoryResponse> | null = this;
		$.assignStruct($.pointerValue<ListFailoverHistoryResponse>(m), $.markAsStructValue(new ListFailoverHistoryResponse()))
	}

	public Size(): number {
		const m: ListFailoverHistoryResponse | $.VarRef<ListFailoverHistoryResponse> | null = this;
		let n: number = 0
		const m$: ListFailoverHistoryResponse = m == null ? $.pointerTarget<ListFailoverHistoryResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListFailoverHistoryResponse>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as ListFailoverHistoryResponse).FailoverEvents) > 0) {
			for (let __goscriptRangeTarget3 = (m$ as ListFailoverHistoryResponse).FailoverEvents, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as FailoverEvent | $.VarRef<FailoverEvent> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as FailoverEvent).Size() : FailoverEvent.prototype.Size.call(e))
				n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
			}
		}
		l = $.sliceLen((m$ as ListFailoverHistoryResponse).NextPageToken)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as ListFailoverHistoryResponse).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ListFailoverHistoryResponse).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ListFailoverHistoryResponse | $.VarRef<ListFailoverHistoryResponse> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ListFailoverHistoryResponse", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryResponse")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ListFailoverHistoryResponse | $.VarRef<ListFailoverHistoryResponse> | null = this;
		const m$: ListFailoverHistoryResponse = m == null ? $.pointerTarget<ListFailoverHistoryResponse>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ListFailoverHistoryResponse>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow20 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: ListFailoverHistoryResponse: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ListFailoverHistoryResponse: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field FailoverEvents", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListFailoverHistoryResponse).FailoverEvents = $.appendOne((m$ as ListFailoverHistoryResponse).FailoverEvents, new FailoverEvent(), $.appendZeros.nil)
					{
						let err = FailoverEvent.prototype.Unmarshal.call($.arrayIndex((m$ as ListFailoverHistoryResponse).FailoverEvents!, $.sliceLen((m$ as ListFailoverHistoryResponse).FailoverEvents) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field NextPageToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow20.backing as any[])[$.windowSlot(__goscriptSliceWindow20, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListFailoverHistoryResponse).NextPageToken = $.appendSlice($.goSlice((m$ as ListFailoverHistoryResponse).NextPageToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as ListFailoverHistoryResponse).NextPageToken == null) {
						;(m$ as ListFailoverHistoryResponse).NextPageToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ListFailoverHistoryResponse).XXX_unrecognized = $.appendSlice((m$ as ListFailoverHistoryResponse).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: ListFailoverHistoryResponse | $.VarRef<ListFailoverHistoryResponse> | null = this;
		xxx_messageInfo_ListFailoverHistoryResponse.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ListFailoverHistoryResponse", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryResponse")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ListFailoverHistoryResponse | $.VarRef<ListFailoverHistoryResponse> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ListFailoverHistoryResponse.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ListFailoverHistoryResponse", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryResponse")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryResponse).MarshalToSizedBuffer(b) : ListFailoverHistoryResponse.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ListFailoverHistoryResponse | $.VarRef<ListFailoverHistoryResponse> | null = this;
		xxx_messageInfo_ListFailoverHistoryResponse.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ListFailoverHistoryResponse", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryResponse")), src)
	}

	public XXX_Size(): number {
		const m: ListFailoverHistoryResponse | $.VarRef<ListFailoverHistoryResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryResponse).Size() : ListFailoverHistoryResponse.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ListFailoverHistoryResponse | $.VarRef<ListFailoverHistoryResponse> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ListFailoverHistoryResponse).Unmarshal(b) : ListFailoverHistoryResponse.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ListFailoverHistoryResponse",
		() => new ListFailoverHistoryResponse(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetFailoverEvents", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.FailoverEvent")) }], pointerReceiver: true }, { name: "GetNextPageToken", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ListFailoverHistoryResponse,
		() => [{ name: "FailoverEvents", key: "FailoverEvents", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.FailoverEvent")), tag: "protobuf:\"bytes,1,rep,name=failover_events,json=failoverEvents,proto3\" json:\"failover_events,omitempty\"" }, { name: "NextPageToken", key: "NextPageToken", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "protobuf:\"bytes,2,opt,name=next_page_token,json=nextPageToken,proto3\" json:\"next_page_token,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class FailoverEvent {
	// id of the failover event
	public get Id(): string {
		return this._fields.Id
	}

	public set Id(value: string) {
		this._fields.Id = value
	}

	// created_time is the time the failover event was created.
	public get CreatedTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.CreatedTime
	}

	public set CreatedTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.CreatedTime = value
	}

	public get FailoverType(): __goscript_common_pb.FailoverType {
		return this._fields.FailoverType
	}

	public set FailoverType(value: __goscript_common_pb.FailoverType) {
		this._fields.FailoverType = value
	}

	// cluster_failovers lists all failovers for this event.
	public get ClusterFailovers(): $.Slice<ClusterFailover | $.VarRef<ClusterFailover> | null> {
		return this._fields.ClusterFailovers
	}

	public set ClusterFailovers(value: $.Slice<ClusterFailover | $.VarRef<ClusterFailover> | null>) {
		this._fields.ClusterFailovers = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		Id: string
		CreatedTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		FailoverType: __goscript_common_pb.FailoverType
		ClusterFailovers: $.Slice<ClusterFailover | $.VarRef<ClusterFailover> | null>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Id?: string, CreatedTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, FailoverType?: __goscript_common_pb.FailoverType, ClusterFailovers?: $.Slice<ClusterFailover | $.VarRef<ClusterFailover> | null>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Id: init?.Id ?? ("" as string),
			CreatedTime: init?.CreatedTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			FailoverType: init?.FailoverType ?? (0 as __goscript_common_pb.FailoverType),
			ClusterFailovers: init?.ClusterFailovers ?? (null! as $.Slice<ClusterFailover | $.VarRef<ClusterFailover> | null>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FailoverEvent {
		return new FailoverEvent(this, true)
	}

	public __goscriptAssign(source: FailoverEvent): void {
		const target = this._fields
		const values = source._fields
		target.Id = values.Id
		target.CreatedTime = values.CreatedTime
		target.FailoverType = values.FailoverType
		target.ClusterFailovers = values.ClusterFailovers
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([17])]
	}

	public GetClusterFailovers(): $.Slice<ClusterFailover | $.VarRef<ClusterFailover> | null> {
		const m: FailoverEvent | $.VarRef<FailoverEvent> | null = this;
		if (m != null) {
			return $.pointerValue<FailoverEvent>(m).ClusterFailovers
		}
		return null
	}

	public GetCreatedTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: FailoverEvent | $.VarRef<FailoverEvent> | null = this;
		if (m != null) {
			return $.pointerValue<FailoverEvent>(m).CreatedTime
		}
		return null
	}

	public GetFailoverType(): __goscript_common_pb.FailoverType {
		const m: FailoverEvent | $.VarRef<FailoverEvent> | null = this;
		if (m != null) {
			return $.pointerValue<FailoverEvent>(m).FailoverType
		}
		return 0
	}

	public GetId(): string {
		const m: FailoverEvent | $.VarRef<FailoverEvent> | null = this;
		if (m != null) {
			return $.pointerValue<FailoverEvent>(m).Id
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: FailoverEvent | $.VarRef<FailoverEvent> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverEvent).Size() : FailoverEvent.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple19: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverEvent).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FailoverEvent.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple19[0]
		err = __goscriptTuple19[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FailoverEvent | $.VarRef<FailoverEvent> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverEvent).Size() : FailoverEvent.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverEvent).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FailoverEvent.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FailoverEvent | $.VarRef<FailoverEvent> | null = this;
		const m$: FailoverEvent = m == null ? $.pointerTarget<FailoverEvent>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailoverEvent>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as FailoverEvent).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as FailoverEvent).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as FailoverEvent).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as FailoverEvent).ClusterFailovers) > 0) {
			for (let __goscriptSliceWindow21 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as FailoverEvent).ClusterFailovers) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = ClusterFailover.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as FailoverEvent).ClusterFailovers!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow21.backing as any[])[$.windowSlot(__goscriptSliceWindow21, i)] = 0x22
			}
		}
		if ((m$ as FailoverEvent).FailoverType != 0) {
			i = encodeVarintServiceDomain(dAtA, i, $.uint64((m$ as FailoverEvent).FailoverType))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x18
		}
		if ((m$ as FailoverEvent).CreatedTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as FailoverEvent).CreatedTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as FailoverEvent).Id) > 0) {
			i = i - ($.stringLen((m$ as FailoverEvent).Id))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as FailoverEvent).Id)
			i = encodeVarintServiceDomain(dAtA, i, $.uint64($.stringLen((m$ as FailoverEvent).Id)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: FailoverEvent | $.VarRef<FailoverEvent> | null = this;
		$.assignStruct($.pointerValue<FailoverEvent>(m), $.markAsStructValue(new FailoverEvent()))
	}

	public Size(): number {
		const m: FailoverEvent | $.VarRef<FailoverEvent> | null = this;
		let n: number = 0
		const m$: FailoverEvent = m == null ? $.pointerTarget<FailoverEvent>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailoverEvent>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as FailoverEvent).Id)
		if (l > 0) {
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as FailoverEvent).CreatedTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as FailoverEvent).CreatedTime)
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as FailoverEvent).FailoverType != 0) {
			n = n + (1 + sovServiceDomain($.uint64((m$ as FailoverEvent).FailoverType)))
		}
		if ($.sliceLen((m$ as FailoverEvent).ClusterFailovers) > 0) {
			for (let __goscriptRangeTarget4 = (m$ as FailoverEvent).ClusterFailovers, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as ClusterFailover | $.VarRef<ClusterFailover> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as ClusterFailover).Size() : ClusterFailover.prototype.Size.call(e))
				n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
			}
		}
		if ((m$ as FailoverEvent).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as FailoverEvent).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: FailoverEvent | $.VarRef<FailoverEvent> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.FailoverEvent", /* @__PURE__ */ $.pointerType("apiv1.FailoverEvent")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: FailoverEvent | $.VarRef<FailoverEvent> | null = this;
		const m$: FailoverEvent = m == null ? $.pointerTarget<FailoverEvent>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailoverEvent>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow22 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow22.backing as any[])[$.windowSlot(__goscriptSliceWindow22, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: FailoverEvent: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: FailoverEvent: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Id", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow22.backing as any[])[$.windowSlot(__goscriptSliceWindow22, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as FailoverEvent).Id = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field CreatedTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow22.backing as any[])[$.windowSlot(__goscriptSliceWindow22, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as FailoverEvent).CreatedTime == null) {
						;(m$ as FailoverEvent).CreatedTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as FailoverEvent).CreatedTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field FailoverType", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as FailoverEvent).FailoverType = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow22.backing as any[])[$.windowSlot(__goscriptSliceWindow22, iNdEx)] as number)
						iNdEx++;
						;(m$ as FailoverEvent).FailoverType = (m$ as FailoverEvent).FailoverType | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ClusterFailovers", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow22.backing as any[])[$.windowSlot(__goscriptSliceWindow22, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as FailoverEvent).ClusterFailovers = $.appendOne((m$ as FailoverEvent).ClusterFailovers, new ClusterFailover(), $.appendZeros.nil)
					{
						let err = ClusterFailover.prototype.Unmarshal.call($.arrayIndex((m$ as FailoverEvent).ClusterFailovers!, $.sliceLen((m$ as FailoverEvent).ClusterFailovers) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as FailoverEvent).XXX_unrecognized = $.appendSlice((m$ as FailoverEvent).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: FailoverEvent | $.VarRef<FailoverEvent> | null = this;
		xxx_messageInfo_FailoverEvent.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.FailoverEvent", /* @__PURE__ */ $.pointerType("apiv1.FailoverEvent")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: FailoverEvent | $.VarRef<FailoverEvent> | null = this;
		if (deterministic) {
			return xxx_messageInfo_FailoverEvent.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.FailoverEvent", /* @__PURE__ */ $.pointerType("apiv1.FailoverEvent")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverEvent).MarshalToSizedBuffer(b) : FailoverEvent.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: FailoverEvent | $.VarRef<FailoverEvent> | null = this;
		xxx_messageInfo_FailoverEvent.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.FailoverEvent", /* @__PURE__ */ $.pointerType("apiv1.FailoverEvent")), src)
	}

	public XXX_Size(): number {
		const m: FailoverEvent | $.VarRef<FailoverEvent> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverEvent).Size() : FailoverEvent.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: FailoverEvent | $.VarRef<FailoverEvent> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverEvent).Unmarshal(b) : FailoverEvent.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FailoverEvent",
		() => new FailoverEvent(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetClusterFailovers", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.ClusterFailover")) }], pointerReceiver: true }, { name: "GetCreatedTime", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Timestamp") }], pointerReceiver: true }, { name: "GetFailoverType", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.FailoverType") }], pointerReceiver: true }, { name: "GetId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		FailoverEvent,
		() => [{ name: "Id", key: "Id", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=id,proto3\" json:\"id,omitempty\"" }, { name: "CreatedTime", key: "CreatedTime", type: /* @__PURE__ */ $.pointerType("types.Timestamp"), tag: "protobuf:\"bytes,2,opt,name=created_time,json=createdTime,proto3\" json:\"created_time,omitempty\"" }, { name: "FailoverType", key: "FailoverType", type: /* @__PURE__ */ $.basicType("int32", "apiv1.FailoverType"), tag: "protobuf:\"varint,3,opt,name=failover_type,json=failoverType,proto3,enum=uber.cadence.api.v1.FailoverType\" json:\"failover_type,omitempty\"" }, { name: "ClusterFailovers", key: "ClusterFailovers", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.ClusterFailover")), tag: "protobuf:\"bytes,4,rep,name=cluster_failovers,json=clusterFailovers,proto3\" json:\"cluster_failovers,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ClusterFailover {
	public get FromCluster(): __goscript_domain_pb.ActiveClusterInfo | $.VarRef<__goscript_domain_pb.ActiveClusterInfo> | null {
		return this._fields.FromCluster
	}

	public set FromCluster(value: __goscript_domain_pb.ActiveClusterInfo | $.VarRef<__goscript_domain_pb.ActiveClusterInfo> | null) {
		this._fields.FromCluster = value
	}

	public get ToCluster(): __goscript_domain_pb.ActiveClusterInfo | $.VarRef<__goscript_domain_pb.ActiveClusterInfo> | null {
		return this._fields.ToCluster
	}

	public set ToCluster(value: __goscript_domain_pb.ActiveClusterInfo | $.VarRef<__goscript_domain_pb.ActiveClusterInfo> | null) {
		this._fields.ToCluster = value
	}

	// cluster_attribute is the scope and name for the attribute that was failed over.
	// If the cluster_attribute is not defined this failover can be assumed to be the default ActiveCluster.
	public get ClusterAttribute(): __goscript_common_pb.ClusterAttribute | $.VarRef<__goscript_common_pb.ClusterAttribute> | null {
		return this._fields.ClusterAttribute
	}

	public set ClusterAttribute(value: __goscript_common_pb.ClusterAttribute | $.VarRef<__goscript_common_pb.ClusterAttribute> | null) {
		this._fields.ClusterAttribute = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		FromCluster: __goscript_domain_pb.ActiveClusterInfo | $.VarRef<__goscript_domain_pb.ActiveClusterInfo> | null
		ToCluster: __goscript_domain_pb.ActiveClusterInfo | $.VarRef<__goscript_domain_pb.ActiveClusterInfo> | null
		ClusterAttribute: __goscript_common_pb.ClusterAttribute | $.VarRef<__goscript_common_pb.ClusterAttribute> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{FromCluster?: __goscript_domain_pb.ActiveClusterInfo | $.VarRef<__goscript_domain_pb.ActiveClusterInfo> | null, ToCluster?: __goscript_domain_pb.ActiveClusterInfo | $.VarRef<__goscript_domain_pb.ActiveClusterInfo> | null, ClusterAttribute?: __goscript_common_pb.ClusterAttribute | $.VarRef<__goscript_common_pb.ClusterAttribute> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			FromCluster: init?.FromCluster ?? (null! as __goscript_domain_pb.ActiveClusterInfo | $.VarRef<__goscript_domain_pb.ActiveClusterInfo> | null),
			ToCluster: init?.ToCluster ?? (null! as __goscript_domain_pb.ActiveClusterInfo | $.VarRef<__goscript_domain_pb.ActiveClusterInfo> | null),
			ClusterAttribute: init?.ClusterAttribute ?? (null! as __goscript_common_pb.ClusterAttribute | $.VarRef<__goscript_common_pb.ClusterAttribute> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClusterFailover {
		return new ClusterFailover(this, true)
	}

	public __goscriptAssign(source: ClusterFailover): void {
		const target = this._fields
		const values = source._fields
		target.FromCluster = values.FromCluster
		target.ToCluster = values.ToCluster
		target.ClusterAttribute = values.ClusterAttribute
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2e37d15268893114, $.arrayToSlice<number>([18])]
	}

	public GetClusterAttribute(): __goscript_common_pb.ClusterAttribute | $.VarRef<__goscript_common_pb.ClusterAttribute> | null {
		const m: ClusterFailover | $.VarRef<ClusterFailover> | null = this;
		if (m != null) {
			return $.pointerValue<ClusterFailover>(m).ClusterAttribute
		}
		return null
	}

	public GetFromCluster(): __goscript_domain_pb.ActiveClusterInfo | $.VarRef<__goscript_domain_pb.ActiveClusterInfo> | null {
		const m: ClusterFailover | $.VarRef<ClusterFailover> | null = this;
		if (m != null) {
			return $.pointerValue<ClusterFailover>(m).FromCluster
		}
		return null
	}

	public GetToCluster(): __goscript_domain_pb.ActiveClusterInfo | $.VarRef<__goscript_domain_pb.ActiveClusterInfo> | null {
		const m: ClusterFailover | $.VarRef<ClusterFailover> | null = this;
		if (m != null) {
			return $.pointerValue<ClusterFailover>(m).ToCluster
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ClusterFailover | $.VarRef<ClusterFailover> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterFailover).Size() : ClusterFailover.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple20: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterFailover).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ClusterFailover.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple20[0]
		err = __goscriptTuple20[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ClusterFailover | $.VarRef<ClusterFailover> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterFailover).Size() : ClusterFailover.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterFailover).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ClusterFailover.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ClusterFailover | $.VarRef<ClusterFailover> | null = this;
		const m$: ClusterFailover = m == null ? $.pointerTarget<ClusterFailover>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ClusterFailover>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ClusterFailover).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ClusterFailover).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ClusterFailover).XXX_unrecognized)
		}
		if ((m$ as ClusterFailover).ClusterAttribute != null) {
			{
				let [size, err] = __goscript_common_pb.ClusterAttribute.prototype.MarshalToSizedBuffer.call((m$ as ClusterFailover).ClusterAttribute, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as ClusterFailover).ToCluster != null) {
			{
				let [size, err] = __goscript_domain_pb.ActiveClusterInfo.prototype.MarshalToSizedBuffer.call((m$ as ClusterFailover).ToCluster, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as ClusterFailover).FromCluster != null) {
			{
				let [size, err] = __goscript_domain_pb.ActiveClusterInfo.prototype.MarshalToSizedBuffer.call((m$ as ClusterFailover).FromCluster, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintServiceDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ClusterFailover | $.VarRef<ClusterFailover> | null = this;
		$.assignStruct($.pointerValue<ClusterFailover>(m), $.markAsStructValue(new ClusterFailover()))
	}

	public Size(): number {
		const m: ClusterFailover | $.VarRef<ClusterFailover> | null = this;
		let n: number = 0
		const m$: ClusterFailover = m == null ? $.pointerTarget<ClusterFailover>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ClusterFailover>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as ClusterFailover).FromCluster != null) {
			l = __goscript_domain_pb.ActiveClusterInfo.prototype.Size.call((m$ as ClusterFailover).FromCluster)
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as ClusterFailover).ToCluster != null) {
			l = __goscript_domain_pb.ActiveClusterInfo.prototype.Size.call((m$ as ClusterFailover).ToCluster)
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as ClusterFailover).ClusterAttribute != null) {
			l = __goscript_common_pb.ClusterAttribute.prototype.Size.call((m$ as ClusterFailover).ClusterAttribute)
			n = n + ((1 + l) + sovServiceDomain($.uint64(l)))
		}
		if ((m$ as ClusterFailover).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ClusterFailover).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ClusterFailover | $.VarRef<ClusterFailover> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ClusterFailover", /* @__PURE__ */ $.pointerType("apiv1.ClusterFailover")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ClusterFailover | $.VarRef<ClusterFailover> | null = this;
		const m$: ClusterFailover = m == null ? $.pointerTarget<ClusterFailover>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ClusterFailover>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow23 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowServiceDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow23.backing as any[])[$.windowSlot(__goscriptSliceWindow23, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: ClusterFailover: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ClusterFailover: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field FromCluster", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow23.backing as any[])[$.windowSlot(__goscriptSliceWindow23, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ClusterFailover).FromCluster == null) {
						;(m$ as ClusterFailover).FromCluster = new __goscript_domain_pb.ActiveClusterInfo()
					}
					{
						let err = __goscript_domain_pb.ActiveClusterInfo.prototype.Unmarshal.call((m$ as ClusterFailover).FromCluster, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ToCluster", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow23.backing as any[])[$.windowSlot(__goscriptSliceWindow23, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ClusterFailover).ToCluster == null) {
						;(m$ as ClusterFailover).ToCluster = new __goscript_domain_pb.ActiveClusterInfo()
					}
					{
						let err = __goscript_domain_pb.ActiveClusterInfo.prototype.Unmarshal.call((m$ as ClusterFailover).ToCluster, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ClusterAttribute", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowServiceDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow23.backing as any[])[$.windowSlot(__goscriptSliceWindow23, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthServiceDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthServiceDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ClusterFailover).ClusterAttribute == null) {
						;(m$ as ClusterFailover).ClusterAttribute = new __goscript_common_pb.ClusterAttribute()
					}
					{
						let err = __goscript_common_pb.ClusterAttribute.prototype.Unmarshal.call((m$ as ClusterFailover).ClusterAttribute, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipServiceDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthServiceDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ClusterFailover).XXX_unrecognized = $.appendSlice((m$ as ClusterFailover).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public XXX_DiscardUnknown(): void {
		const m: ClusterFailover | $.VarRef<ClusterFailover> | null = this;
		xxx_messageInfo_ClusterFailover.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ClusterFailover", /* @__PURE__ */ $.pointerType("apiv1.ClusterFailover")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ClusterFailover | $.VarRef<ClusterFailover> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ClusterFailover.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ClusterFailover", /* @__PURE__ */ $.pointerType("apiv1.ClusterFailover")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterFailover).MarshalToSizedBuffer(b) : ClusterFailover.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ClusterFailover | $.VarRef<ClusterFailover> | null = this;
		xxx_messageInfo_ClusterFailover.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ClusterFailover", /* @__PURE__ */ $.pointerType("apiv1.ClusterFailover")), src)
	}

	public XXX_Size(): number {
		const m: ClusterFailover | $.VarRef<ClusterFailover> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterFailover).Size() : ClusterFailover.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ClusterFailover | $.VarRef<ClusterFailover> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterFailover).Unmarshal(b) : ClusterFailover.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ClusterFailover",
		() => new ClusterFailover(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetClusterAttribute", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ClusterAttribute") }], pointerReceiver: true }, { name: "GetFromCluster", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterInfo") }], pointerReceiver: true }, { name: "GetToCluster", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterInfo") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ClusterFailover,
		() => [{ name: "FromCluster", key: "FromCluster", type: /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterInfo"), tag: "protobuf:\"bytes,1,opt,name=from_cluster,json=fromCluster,proto3\" json:\"from_cluster,omitempty\"" }, { name: "ToCluster", key: "ToCluster", type: /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterInfo"), tag: "protobuf:\"bytes,2,opt,name=to_cluster,json=toCluster,proto3\" json:\"to_cluster,omitempty\"" }, { name: "ClusterAttribute", key: "ClusterAttribute", type: /* @__PURE__ */ $.pointerType("apiv1.ClusterAttribute"), tag: "protobuf:\"bytes,3,opt,name=cluster_attribute,json=clusterAttribute,proto3\" json:\"cluster_attribute,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export let xxx_messageInfo_RegisterDomainRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RegisterDomainRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RegisterDomainRequest.value, __goscriptValue)
}

export let xxx_messageInfo_RegisterDomainResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_RegisterDomainResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_RegisterDomainResponse.value, __goscriptValue)
}

export let xxx_messageInfo_UpdateDomainRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_UpdateDomainRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_UpdateDomainRequest.value, __goscriptValue)
}

export let xxx_messageInfo_UpdateDomainResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_UpdateDomainResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_UpdateDomainResponse.value, __goscriptValue)
}

export let xxx_messageInfo_FailoverDomainRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_FailoverDomainRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_FailoverDomainRequest.value, __goscriptValue)
}

export let xxx_messageInfo_FailoverDomainResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_FailoverDomainResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_FailoverDomainResponse.value, __goscriptValue)
}

export let xxx_messageInfo_DeprecateDomainRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DeprecateDomainRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DeprecateDomainRequest.value, __goscriptValue)
}

export let xxx_messageInfo_DeprecateDomainResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DeprecateDomainResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DeprecateDomainResponse.value, __goscriptValue)
}

export let xxx_messageInfo_DeleteDomainRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DeleteDomainRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DeleteDomainRequest.value, __goscriptValue)
}

export let xxx_messageInfo_DeleteDomainResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DeleteDomainResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DeleteDomainResponse.value, __goscriptValue)
}

export let xxx_messageInfo_DescribeDomainRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DescribeDomainRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DescribeDomainRequest.value, __goscriptValue)
}

export let xxx_messageInfo_DescribeDomainResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_DescribeDomainResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_DescribeDomainResponse.value, __goscriptValue)
}

export let xxx_messageInfo_ListDomainsRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListDomainsRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListDomainsRequest.value, __goscriptValue)
}

export let xxx_messageInfo_ListDomainsResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListDomainsResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListDomainsResponse.value, __goscriptValue)
}

export let xxx_messageInfo_ListFailoverHistoryRequest: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListFailoverHistoryRequest(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListFailoverHistoryRequest.value, __goscriptValue)
}

export let xxx_messageInfo_ListFailoverHistoryRequestFilters: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListFailoverHistoryRequestFilters(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListFailoverHistoryRequestFilters.value, __goscriptValue)
}

export let xxx_messageInfo_ListFailoverHistoryResponse: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ListFailoverHistoryResponse(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ListFailoverHistoryResponse.value, __goscriptValue)
}

export let xxx_messageInfo_FailoverEvent: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_FailoverEvent(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_FailoverEvent.value, __goscriptValue)
}

export let xxx_messageInfo_ClusterFailover: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ClusterFailover(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ClusterFailover.value, __goscriptValue)
}

function __goscriptInit0(): void {
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RegisterDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainRequest")), "uber.cadence.api.v1.RegisterDomainRequest")
	proto.RegisterMapType($.interfaceValue(null, "map[string]string", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))), "uber.cadence.api.v1.RegisterDomainRequest.ActiveClustersByRegionEntry")
	proto.RegisterMapType($.interfaceValue(null, "map[string]string", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))), "uber.cadence.api.v1.RegisterDomainRequest.DataEntry")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.RegisterDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainResponse")), "uber.cadence.api.v1.RegisterDomainResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.UpdateDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainRequest")), "uber.cadence.api.v1.UpdateDomainRequest")
	proto.RegisterMapType($.interfaceValue(null, "map[string]string", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))), "uber.cadence.api.v1.UpdateDomainRequest.DataEntry")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.UpdateDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainResponse")), "uber.cadence.api.v1.UpdateDomainResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.FailoverDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainRequest")), "uber.cadence.api.v1.FailoverDomainRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.FailoverDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.FailoverDomainResponse")), "uber.cadence.api.v1.FailoverDomainResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DeprecateDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainRequest")), "uber.cadence.api.v1.DeprecateDomainRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DeprecateDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainResponse")), "uber.cadence.api.v1.DeprecateDomainResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DeleteDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainRequest")), "uber.cadence.api.v1.DeleteDomainRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DeleteDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DeleteDomainResponse")), "uber.cadence.api.v1.DeleteDomainResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DescribeDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest")), "uber.cadence.api.v1.DescribeDomainRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.DescribeDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainResponse")), "uber.cadence.api.v1.DescribeDomainResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ListDomainsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsRequest")), "uber.cadence.api.v1.ListDomainsRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ListDomainsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListDomainsResponse")), "uber.cadence.api.v1.ListDomainsResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ListFailoverHistoryRequest", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequest")), "uber.cadence.api.v1.ListFailoverHistoryRequest")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ListFailoverHistoryRequestFilters", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryRequestFilters")), "uber.cadence.api.v1.ListFailoverHistoryRequestFilters")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ListFailoverHistoryResponse", /* @__PURE__ */ $.pointerType("apiv1.ListFailoverHistoryResponse")), "uber.cadence.api.v1.ListFailoverHistoryResponse")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.FailoverEvent", /* @__PURE__ */ $.pointerType("apiv1.FailoverEvent")), "uber.cadence.api.v1.FailoverEvent")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ClusterFailover", /* @__PURE__ */ $.pointerType("apiv1.ClusterFailover")), "uber.cadence.api.v1.ClusterFailover")
}

function __goscriptInit1(): void {
	proto.RegisterFile("uber/cadence/api/v1/service_domain.proto", fileDescriptor_2e37d15268893114)
}

export let fileDescriptor_2e37d15268893114: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 188, 88, 205, 114, 219, 70, 18, 54, 100, 89, 150, 26, 20, 37, 141, 254, 96, 170, 74, 166, 233, 181, 151, 235, 221, 37, 45, 58, 113, 82, 113, 165, 42, 146, 37, 70, 42, 255, 132, 129, 228, 67, 146, 3, 50, 4, 134, 212, 148, 64, 0, 1, 134, 180, 233, 123, 94, 32, 111, 144, 151, 200, 51, 228, 152, 71, 112, 249, 156, 123, 202, 183, 20, 102, 6, 36, 1, 2, 20, 101, 203, 185, 17, 141, 111, 190, 238, 233, 238, 249, 122, 64, 40, 119, 155, 196, 175, 154, 216, 34, 142, 73, 170, 216, 163, 213, 222, 78, 53, 32, 126, 143, 154, 196, 176, 220, 14, 166, 78, 197, 243, 93, 230, 162, 213, 16, 89, 145, 200, 10, 246, 104, 165, 183, 83, 216, 110, 187, 110, 219, 38, 85, 14, 105, 118, 91, 85, 171, 235, 99, 70, 93, 185, 168, 80, 76, 190, 111, 81, 98, 91, 70, 7, 7, 103, 18, 113, 51, 137, 96, 180, 67, 2, 134, 59, 94, 68, 145, 22, 161, 233, 118, 58, 67, 39, 105, 136, 209, 216, 75, 239, 230, 97, 93, 39, 109, 26, 48, 226, 239, 243, 23, 58, 249, 169, 75, 2, 134, 238, 64, 62, 32, 102, 215, 167, 172, 111, 48, 247, 140, 56, 154, 82, 84, 202, 11, 250, 98, 100, 61, 9, 141, 8, 193, 172, 131, 59, 68, 155, 225, 47, 249, 111, 84, 4, 213, 34, 129, 233, 83, 47, 220, 176, 118, 149, 191, 26, 53, 161, 155, 160, 186, 47, 29, 226, 27, 164, 131, 169, 173, 205, 114, 4, 112, 211, 65, 104, 65, 167, 112, 251, 165, 235, 159, 181, 108, 247, 165, 65, 94, 17, 179, 27, 46, 51, 124, 194, 136, 195, 127, 121, 196, 167, 174, 165, 93, 43, 42, 101, 181, 118, 163, 34, 82, 85, 137, 82, 85, 217, 151, 201, 214, 139, 17, 203, 65, 68, 162, 71, 28, 13, 78, 129, 26, 48, 111, 218, 221, 112, 255, 129, 54, 87, 188, 90, 86, 107, 159, 84, 82, 10, 90, 121, 44, 64, 58, 241, 108, 106, 114, 242, 199, 174, 211, 162, 237, 200, 211, 128, 5, 85, 96, 21, 155, 140, 246, 136, 33, 77, 6, 207, 208, 117, 190, 201, 21, 241, 74, 178, 61, 15, 211, 117, 8, 179, 22, 102, 88, 155, 159, 224, 61, 181, 70, 149, 125, 204, 240, 129, 195, 252, 190, 206, 25, 80, 25, 150, 105, 96, 180, 109, 183, 137, 109, 217, 163, 218, 66, 81, 41, 207, 235, 121, 26, 124, 205, 205, 130, 0, 253, 0, 155, 167, 52, 96, 174, 223, 55, 176, 111, 158, 210, 30, 182, 141, 128, 97, 214, 13, 52, 40, 42, 229, 124, 237, 118, 106, 24, 187, 18, 123, 204, 161, 250, 186, 228, 136, 155, 209, 125, 88, 27, 35, 239, 250, 84, 83, 121, 6, 80, 98, 209, 11, 159, 34, 12, 133, 30, 13, 104, 147, 218, 97, 187, 37, 35, 202, 77, 31, 145, 54, 164, 73, 4, 245, 16, 54, 211, 92, 132, 113, 45, 242, 184, 214, 199, 151, 134, 161, 253, 172, 192, 141, 120, 57, 3, 163, 217, 55, 124, 210, 14, 123, 59, 207, 107, 86, 191, 64, 205, 118, 71, 235, 31, 236, 245, 117, 78, 196, 171, 184, 55, 163, 41, 250, 6, 78, 5, 160, 167, 176, 148, 8, 67, 91, 226, 221, 159, 145, 151, 24, 139, 158, 143, 179, 22, 62, 131, 133, 65, 243, 160, 101, 184, 122, 70, 250, 242, 124, 135, 63, 209, 26, 92, 235, 97, 187, 27, 29, 107, 241, 240, 197, 204, 231, 74, 225, 8, 182, 38, 236, 224, 34, 84, 37, 13, 54, 146, 41, 10, 60, 215, 9, 72, 233, 207, 121, 88, 125, 225, 89, 152, 145, 75, 211, 164, 71, 160, 118, 57, 35, 151, 88, 222, 228, 106, 173, 48, 38, 28, 245, 80, 133, 159, 225, 224, 76, 7, 1, 15, 127, 39, 5, 77, 61, 87, 208, 114, 99, 130, 86, 151, 135, 124, 145, 55, 76, 45, 181, 102, 41, 91, 30, 59, 226, 83, 10, 99, 254, 195, 133, 241, 49, 228, 154, 216, 50, 154, 212, 193, 62, 37, 81, 183, 21, 83, 35, 223, 195, 214, 158, 196, 233, 106, 115, 248, 48, 73, 103, 150, 63, 154, 206, 172, 188, 167, 206, 160, 143, 172, 51, 171, 147, 116, 38, 99, 106, 172, 101, 77, 141, 209, 185, 181, 126, 41, 115, 235, 30, 172, 88, 196, 38, 140, 24, 131, 186, 247, 181, 13, 238, 127, 73, 188, 136, 202, 220, 71, 251, 176, 220, 194, 212, 118, 123, 196, 55, 194, 123, 137, 219, 101, 218, 230, 121, 61, 183, 20, 45, 57, 17, 43, 210, 52, 77, 251, 231, 53, 173, 244, 4, 214, 226, 71, 79, 200, 16, 122, 0, 115, 114, 136, 42, 60, 170, 173, 212, 168, 228, 34, 9, 45, 253, 58, 3, 235, 117, 185, 207, 184, 122, 221, 4, 85, 96, 68, 101, 69, 104, 32, 76, 207, 133, 70, 21, 36, 32, 173, 19, 128, 227, 55, 5, 98, 119, 172, 31, 82, 114, 185, 253, 222, 185, 68, 27, 48, 231, 19, 28, 184, 142, 86, 230, 110, 229, 83, 106, 221, 107, 23, 173, 123, 233, 25, 108, 36, 83, 244, 33, 41, 63, 134, 141, 125, 226, 249, 196, 188, 196, 129, 81, 186, 1, 155, 99, 164, 114, 60, 53, 96, 117, 159, 159, 135, 75, 115, 182, 1, 107, 113, 70, 233, 233, 57, 172, 239, 243, 41, 211, 76, 248, 90, 134, 25, 106, 9, 254, 195, 43, 250, 12, 181, 208, 218, 40, 237, 225, 21, 65, 188, 183, 24, 77, 174, 38, 49, 154, 253, 48, 241, 73, 190, 15, 73, 252, 119, 128, 158, 210, 128, 9, 107, 16, 197, 182, 5, 11, 30, 110, 19, 35, 160, 175, 69, 151, 95, 211, 231, 67, 195, 49, 125, 77, 208, 93, 88, 114, 200, 43, 102, 112, 132, 200, 82, 24, 113, 78, 95, 12, 205, 13, 220, 38, 60, 75, 37, 6, 171, 49, 106, 25, 230, 167, 112, 93, 248, 14, 52, 133, 139, 222, 196, 56, 35, 236, 212, 94, 127, 83, 160, 16, 186, 141, 186, 243, 80, 140, 144, 104, 103, 13, 184, 222, 162, 54, 63, 91, 34, 75, 15, 83, 189, 103, 51, 212, 197, 106, 61, 162, 65, 117, 0, 15, 183, 169, 195, 15, 10, 143, 73, 173, 221, 77, 37, 109, 12, 96, 223, 240, 43, 71, 160, 143, 172, 44, 125, 5, 183, 206, 245, 26, 22, 70, 234, 75, 212, 59, 250, 188, 48, 28, 89, 165, 95, 20, 216, 74, 165, 144, 153, 127, 2, 131, 99, 108, 144, 30, 113, 88, 84, 129, 82, 106, 184, 17, 205, 65, 8, 213, 243, 173, 209, 199, 233, 235, 241, 78, 129, 197, 24, 19, 202, 15, 27, 159, 183, 253, 151, 144, 51, 125, 130, 25, 177, 184, 30, 201, 20, 142, 95, 236, 78, 162, 143, 103, 93, 149, 248, 208, 130, 234, 176, 56, 212, 179, 190, 71, 248, 199, 106, 190, 118, 107, 226, 158, 78, 250, 30, 209, 115, 173, 145, 39, 244, 45, 172, 68, 98, 29, 217, 3, 109, 150, 231, 231, 95, 147, 198, 114, 68, 169, 47, 155, 113, 67, 80, 250, 75, 129, 165, 4, 10, 29, 65, 174, 229, 187, 157, 72, 226, 101, 23, 222, 61, 95, 225, 143, 156, 150, 171, 171, 225, 90, 105, 64, 7, 0, 204, 29, 16, 205, 92, 136, 104, 129, 185, 17, 141, 62, 220, 56, 102, 204, 167, 205, 46, 19, 73, 84, 107, 119, 38, 109, 124, 55, 2, 15, 118, 62, 176, 212, 222, 204, 193, 130, 56, 193, 187, 141, 35, 68, 33, 31, 255, 76, 64, 247, 166, 255, 220, 42, 252, 119, 42, 172, 236, 113, 10, 249, 184, 60, 102, 184, 74, 213, 228, 12, 87, 25, 122, 251, 35, 168, 35, 250, 134, 254, 157, 41, 36, 113, 113, 45, 148, 207, 7, 74, 15, 38, 228, 70, 111, 53, 168, 60, 237, 55, 71, 225, 63, 83, 32, 135, 25, 139, 79, 242, 140, 140, 165, 222, 136, 50, 50, 150, 113, 53, 176, 97, 41, 49, 144, 81, 86, 198, 211, 238, 2, 133, 255, 77, 7, 30, 102, 111, 116, 34, 103, 100, 47, 229, 26, 144, 145, 189, 180, 241, 142, 94, 137, 33, 151, 144, 92, 84, 189, 224, 84, 41, 220, 159, 126, 129, 240, 188, 231, 252, 254, 118, 91, 249, 227, 237, 182, 242, 230, 237, 182, 2, 155, 166, 219, 73, 163, 216, 67, 34, 224, 99, 241, 183, 103, 35, 20, 211, 134, 242, 253, 78, 155, 178, 211, 110, 179, 98, 186, 157, 234, 232, 63, 140, 255, 167, 150, 93, 109, 187, 226, 31, 75, 249, 119, 227, 35, 236, 209, 222, 78, 115, 142, 219, 30, 252, 29, 0, 0, 255, 255, 26, 155, 245, 112, 86, 21, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_2e37d15268893114(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_2e37d15268893114 = __goscriptValue
}

export function encodeVarintServiceDomain(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovServiceDomain(v))
	let base = offset
	for (let __goscriptSliceWindow24 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow24.backing as any[])[$.windowSlot(__goscriptSliceWindow24, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export function sovServiceDomain(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozServiceDomain(x: bigint): number {
	let n: number = 0
	return sovServiceDomain($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export function skipServiceDomain(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow25 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowServiceDomain]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow25.backing as any[])[$.windowSlot(__goscriptSliceWindow25, iNdEx)] as number)
			iNdEx++
			wire = $.uint64Or(wire, $.uint64Shl(($.uint64And($.uint64(b), 127n)), shift))
			if (b < 0x80) {
				break
			}
		}
		let wireType = $.int($.uint64And(wire, 7n))
		switch (wireType) {
			case 0:
			{
				for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
					if (shift >= 64) {
						return [0, ErrIntOverflowServiceDomain]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow25.backing as any[])[$.windowSlot(__goscriptSliceWindow25, iNdEx - 1)] as number) < 0x80) {
						break
					}
				}
				break
			}
			case 1:
			{
				iNdEx = iNdEx + (8)
				break
			}
			case 2:
			{
				let length: number = 0
				for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
					if (shift >= 64) {
						return [0, ErrIntOverflowServiceDomain]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow25.backing as any[])[$.windowSlot(__goscriptSliceWindow25, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthServiceDomain]
				}
				iNdEx = iNdEx + (length)
				break
			}
			case 3:
			{
				depth++
				break
			}
			case 4:
			{
				if (depth == 0) {
					return [0, ErrUnexpectedEndOfGroupServiceDomain]
				}
				depth--
				break
			}
			case 5:
			{
				iNdEx = iNdEx + (4)
				break
			}
			default:
			{
				return [0, fmt.Errorf("proto: illegal wireType %d", $.basicInterfaceValue(wireType, "int"))]
				break
			}
		}
		if (iNdEx < 0) {
			return [0, ErrInvalidLengthServiceDomain]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthServiceDomain: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthServiceDomain(__goscriptValue: $.GoError): void {
	ErrInvalidLengthServiceDomain = __goscriptValue
}

export let ErrIntOverflowServiceDomain: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowServiceDomain(__goscriptValue: $.GoError): void {
	ErrIntOverflowServiceDomain = __goscriptValue
}

export let ErrUnexpectedEndOfGroupServiceDomain: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupServiceDomain(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupServiceDomain = __goscriptValue
}

export { __goscriptInit0 }

export { __goscriptInit1 }
