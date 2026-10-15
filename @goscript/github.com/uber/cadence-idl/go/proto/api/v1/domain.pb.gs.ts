// Generated file based on domain.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as types from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"

import * as __goscript_common_pb from "./common.pb.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "./common.pb.gs.ts"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.DomainStatus", "apiv1.ArchivalStatus", "apiv1.Domain", "apiv1.ClusterReplicationConfiguration", "apiv1.BadBinaries", "apiv1.BadBinaryInfo", "apiv1.FailoverInfo", "apiv1.ActiveClusters", "apiv1.ClusterAttributeScope", "apiv1.ActiveClusterInfo"])

export type DomainStatus = number

$.registerNamedValueType(
	"apiv1.DomainStatus",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (DomainStatus_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (DomainStatus_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.DomainStatus",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (DomainStatus_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (DomainStatus_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type ArchivalStatus = number

$.registerNamedValueType(
	"apiv1.ArchivalStatus",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (ArchivalStatus_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ArchivalStatus_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.ArchivalStatus",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (ArchivalStatus_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ArchivalStatus_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class Domain {
	public get Id(): string {
		return this._fields.Id
	}

	public set Id(value: string) {
		this._fields.Id = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Status(): DomainStatus {
		return this._fields.Status
	}

	public set Status(value: DomainStatus) {
		this._fields.Status = value
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

	public get BadBinaries(): BadBinaries | $.VarRef<BadBinaries> | null {
		return this._fields.BadBinaries
	}

	public set BadBinaries(value: BadBinaries | $.VarRef<BadBinaries> | null) {
		this._fields.BadBinaries = value
	}

	public get HistoryArchivalStatus(): ArchivalStatus {
		return this._fields.HistoryArchivalStatus
	}

	public set HistoryArchivalStatus(value: ArchivalStatus) {
		this._fields.HistoryArchivalStatus = value
	}

	public get HistoryArchivalUri(): string {
		return this._fields.HistoryArchivalUri
	}

	public set HistoryArchivalUri(value: string) {
		this._fields.HistoryArchivalUri = value
	}

	public get VisibilityArchivalStatus(): ArchivalStatus {
		return this._fields.VisibilityArchivalStatus
	}

	public set VisibilityArchivalStatus(value: ArchivalStatus) {
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

	public get Clusters(): $.Slice<ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null> {
		return this._fields.Clusters
	}

	public set Clusters(value: $.Slice<ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null>) {
		this._fields.Clusters = value
	}

	public get FailoverVersion(): bigint {
		return this._fields.FailoverVersion
	}

	public set FailoverVersion(value: bigint) {
		this._fields.FailoverVersion = value
	}

	public get IsGlobalDomain(): boolean {
		return this._fields.IsGlobalDomain
	}

	public set IsGlobalDomain(value: boolean) {
		this._fields.IsGlobalDomain = value
	}

	public get FailoverInfo(): FailoverInfo | $.VarRef<FailoverInfo> | null {
		return this._fields.FailoverInfo
	}

	public set FailoverInfo(value: FailoverInfo | $.VarRef<FailoverInfo> | null) {
		this._fields.FailoverInfo = value
	}

	public get IsolationGroups(): __goscript_common_pb.IsolationGroupConfiguration | $.VarRef<__goscript_common_pb.IsolationGroupConfiguration> | null {
		return this._fields.IsolationGroups
	}

	public set IsolationGroups(value: __goscript_common_pb.IsolationGroupConfiguration | $.VarRef<__goscript_common_pb.IsolationGroupConfiguration> | null) {
		this._fields.IsolationGroups = value
	}

	public get AsyncWorkflowConfig(): __goscript_common_pb.AsyncWorkflowConfiguration | $.VarRef<__goscript_common_pb.AsyncWorkflowConfiguration> | null {
		return this._fields.AsyncWorkflowConfig
	}

	public set AsyncWorkflowConfig(value: __goscript_common_pb.AsyncWorkflowConfiguration | $.VarRef<__goscript_common_pb.AsyncWorkflowConfiguration> | null) {
		this._fields.AsyncWorkflowConfig = value
	}

	public get ActiveClusters(): ActiveClusters | $.VarRef<ActiveClusters> | null {
		return this._fields.ActiveClusters
	}

	public set ActiveClusters(value: ActiveClusters | $.VarRef<ActiveClusters> | null) {
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
		Id: string
		Name: string
		Status: DomainStatus
		Description: string
		OwnerEmail: string
		Data: globalThis.Map<string, string> | null
		WorkflowExecutionRetentionPeriod: types.Duration | $.VarRef<types.Duration> | null
		BadBinaries: BadBinaries | $.VarRef<BadBinaries> | null
		HistoryArchivalStatus: ArchivalStatus
		HistoryArchivalUri: string
		VisibilityArchivalStatus: ArchivalStatus
		VisibilityArchivalUri: string
		ActiveClusterName: string
		Clusters: $.Slice<ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null>
		FailoverVersion: bigint
		IsGlobalDomain: boolean
		FailoverInfo: FailoverInfo | $.VarRef<FailoverInfo> | null
		IsolationGroups: __goscript_common_pb.IsolationGroupConfiguration | $.VarRef<__goscript_common_pb.IsolationGroupConfiguration> | null
		AsyncWorkflowConfig: __goscript_common_pb.AsyncWorkflowConfiguration | $.VarRef<__goscript_common_pb.AsyncWorkflowConfiguration> | null
		ActiveClusters: ActiveClusters | $.VarRef<ActiveClusters> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Id?: string, Name?: string, Status?: DomainStatus, Description?: string, OwnerEmail?: string, Data?: globalThis.Map<string, string> | null, WorkflowExecutionRetentionPeriod?: types.Duration | $.VarRef<types.Duration> | null, BadBinaries?: BadBinaries | $.VarRef<BadBinaries> | null, HistoryArchivalStatus?: ArchivalStatus, HistoryArchivalUri?: string, VisibilityArchivalStatus?: ArchivalStatus, VisibilityArchivalUri?: string, ActiveClusterName?: string, Clusters?: $.Slice<ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null>, FailoverVersion?: bigint, IsGlobalDomain?: boolean, FailoverInfo?: FailoverInfo | $.VarRef<FailoverInfo> | null, IsolationGroups?: __goscript_common_pb.IsolationGroupConfiguration | $.VarRef<__goscript_common_pb.IsolationGroupConfiguration> | null, AsyncWorkflowConfig?: __goscript_common_pb.AsyncWorkflowConfiguration | $.VarRef<__goscript_common_pb.AsyncWorkflowConfiguration> | null, ActiveClusters?: ActiveClusters | $.VarRef<ActiveClusters> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Id: init?.Id ?? ("" as string),
			Name: init?.Name ?? ("" as string),
			Status: init?.Status ?? (0 as DomainStatus),
			Description: init?.Description ?? ("" as string),
			OwnerEmail: init?.OwnerEmail ?? ("" as string),
			Data: init?.Data ?? (null! as globalThis.Map<string, string> | null),
			WorkflowExecutionRetentionPeriod: init?.WorkflowExecutionRetentionPeriod ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			BadBinaries: init?.BadBinaries ?? (null! as BadBinaries | $.VarRef<BadBinaries> | null),
			HistoryArchivalStatus: init?.HistoryArchivalStatus ?? (0 as ArchivalStatus),
			HistoryArchivalUri: init?.HistoryArchivalUri ?? ("" as string),
			VisibilityArchivalStatus: init?.VisibilityArchivalStatus ?? (0 as ArchivalStatus),
			VisibilityArchivalUri: init?.VisibilityArchivalUri ?? ("" as string),
			ActiveClusterName: init?.ActiveClusterName ?? ("" as string),
			Clusters: init?.Clusters ?? (null! as $.Slice<ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null>),
			FailoverVersion: init?.FailoverVersion ?? (0n as bigint),
			IsGlobalDomain: init?.IsGlobalDomain ?? (false as boolean),
			FailoverInfo: init?.FailoverInfo ?? (null! as FailoverInfo | $.VarRef<FailoverInfo> | null),
			IsolationGroups: init?.IsolationGroups ?? (null! as __goscript_common_pb.IsolationGroupConfiguration | $.VarRef<__goscript_common_pb.IsolationGroupConfiguration> | null),
			AsyncWorkflowConfig: init?.AsyncWorkflowConfig ?? (null! as __goscript_common_pb.AsyncWorkflowConfiguration | $.VarRef<__goscript_common_pb.AsyncWorkflowConfiguration> | null),
			ActiveClusters: init?.ActiveClusters ?? (null! as ActiveClusters | $.VarRef<ActiveClusters> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Domain {
		return new Domain(this, true)
	}

	public __goscriptAssign(source: Domain): void {
		const target = this._fields
		const values = source._fields
		target.Id = values.Id
		target.Name = values.Name
		target.Status = values.Status
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
		target.FailoverVersion = values.FailoverVersion
		target.IsGlobalDomain = values.IsGlobalDomain
		target.FailoverInfo = values.FailoverInfo
		target.IsolationGroups = values.IsolationGroups
		target.AsyncWorkflowConfig = values.AsyncWorkflowConfig
		target.ActiveClusters = values.ActiveClusters
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_824795d6ae7d8e2f, $.arrayToSlice<number>([0])]
	}

	public GetActiveClusterName(): string {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).ActiveClusterName
		}
		return ""
	}

	public GetActiveClusters(): ActiveClusters | $.VarRef<ActiveClusters> | null {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).ActiveClusters
		}
		return null
	}

	public GetAsyncWorkflowConfig(): __goscript_common_pb.AsyncWorkflowConfiguration | $.VarRef<__goscript_common_pb.AsyncWorkflowConfiguration> | null {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).AsyncWorkflowConfig
		}
		return null
	}

	public GetBadBinaries(): BadBinaries | $.VarRef<BadBinaries> | null {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).BadBinaries
		}
		return null
	}

	public GetClusters(): $.Slice<ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null> {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).Clusters
		}
		return null
	}

	public GetData(): globalThis.Map<string, string> | null {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).Data
		}
		return null
	}

	public GetDescription(): string {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).Description
		}
		return ""
	}

	public GetFailoverInfo(): FailoverInfo | $.VarRef<FailoverInfo> | null {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).FailoverInfo
		}
		return null
	}

	public GetFailoverVersion(): bigint {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).FailoverVersion
		}
		return 0n
	}

	public GetHistoryArchivalStatus(): ArchivalStatus {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).HistoryArchivalStatus
		}
		return 0
	}

	public GetHistoryArchivalUri(): string {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).HistoryArchivalUri
		}
		return ""
	}

	public GetId(): string {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).Id
		}
		return ""
	}

	public GetIsGlobalDomain(): boolean {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).IsGlobalDomain
		}
		return false
	}

	public GetIsolationGroups(): __goscript_common_pb.IsolationGroupConfiguration | $.VarRef<__goscript_common_pb.IsolationGroupConfiguration> | null {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).IsolationGroups
		}
		return null
	}

	public GetName(): string {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).Name
		}
		return ""
	}

	public GetOwnerEmail(): string {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).OwnerEmail
		}
		return ""
	}

	public GetStatus(): DomainStatus {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).Status
		}
		return 0
	}

	public GetVisibilityArchivalStatus(): ArchivalStatus {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).VisibilityArchivalStatus
		}
		return 0
	}

	public GetVisibilityArchivalUri(): string {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).VisibilityArchivalUri
		}
		return ""
	}

	public GetWorkflowExecutionRetentionPeriod(): types.Duration | $.VarRef<types.Duration> | null {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (m != null) {
			return $.pointerValue<Domain>(m).WorkflowExecutionRetentionPeriod
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: Domain | $.VarRef<Domain> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Domain).Size() : Domain.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple0: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Domain).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Domain.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Domain | $.VarRef<Domain> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Domain).Size() : Domain.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Domain).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : Domain.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: Domain | $.VarRef<Domain> | null = this;
		const m$: Domain = m == null ? $.pointerTarget<Domain>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Domain>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as Domain).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as Domain).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Domain).XXX_unrecognized)
		}
		if ((m$ as Domain).ActiveClusters != null) {
			{
				let [size, err] = ActiveClusters.prototype.MarshalToSizedBuffer.call((m$ as Domain).ActiveClusters, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa2
		}
		if ((m$ as Domain).AsyncWorkflowConfig != null) {
			{
				let [size, err] = __goscript_common_pb.AsyncWorkflowConfiguration.prototype.MarshalToSizedBuffer.call((m$ as Domain).AsyncWorkflowConfig, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x9a
		}
		if ((m$ as Domain).IsolationGroups != null) {
			{
				let [size, err] = __goscript_common_pb.IsolationGroupConfiguration.prototype.MarshalToSizedBuffer.call((m$ as Domain).IsolationGroups, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x92
		}
		if ((m$ as Domain).FailoverInfo != null) {
			{
				let [size, err] = FailoverInfo.prototype.MarshalToSizedBuffer.call((m$ as Domain).FailoverInfo, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8a
		}
		if ((m$ as Domain).IsGlobalDomain) {
			i--
			if ((m$ as Domain).IsGlobalDomain) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x80
		}
		if ((m$ as Domain).FailoverVersion != 0n) {
			i = encodeVarintDomain(dAtA, i, $.uint64((m$ as Domain).FailoverVersion))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x78
		}
		if ($.sliceLen((m$ as Domain).Clusters) > 0) {
			for (let __goscriptSliceWindow0 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as Domain).Clusters) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = ClusterReplicationConfiguration.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as Domain).Clusters!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintDomain(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = 0x72
			}
		}
		if ($.stringLen((m$ as Domain).ActiveClusterName) > 0) {
			i = i - ($.stringLen((m$ as Domain).ActiveClusterName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Domain).ActiveClusterName)
			i = encodeVarintDomain(dAtA, i, $.uint64($.stringLen((m$ as Domain).ActiveClusterName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x6a
		}
		if ($.stringLen((m$ as Domain).VisibilityArchivalUri) > 0) {
			i = i - ($.stringLen((m$ as Domain).VisibilityArchivalUri))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Domain).VisibilityArchivalUri)
			i = encodeVarintDomain(dAtA, i, $.uint64($.stringLen((m$ as Domain).VisibilityArchivalUri)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x62
		}
		if ((m$ as Domain).VisibilityArchivalStatus != 0) {
			i = encodeVarintDomain(dAtA, i, $.uint64((m$ as Domain).VisibilityArchivalStatus))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x58
		}
		if ($.stringLen((m$ as Domain).HistoryArchivalUri) > 0) {
			i = i - ($.stringLen((m$ as Domain).HistoryArchivalUri))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Domain).HistoryArchivalUri)
			i = encodeVarintDomain(dAtA, i, $.uint64($.stringLen((m$ as Domain).HistoryArchivalUri)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x52
		}
		if ((m$ as Domain).HistoryArchivalStatus != 0) {
			i = encodeVarintDomain(dAtA, i, $.uint64((m$ as Domain).HistoryArchivalStatus))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x48
		}
		if ((m$ as Domain).BadBinaries != null) {
			{
				let [size, err] = BadBinaries.prototype.MarshalToSizedBuffer.call((m$ as Domain).BadBinaries, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x42
		}
		if ((m$ as Domain).WorkflowExecutionRetentionPeriod != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as Domain).WorkflowExecutionRetentionPeriod, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x3a
		}
		if ($.len((m$ as Domain).Data) > 0) {
			for (const [k, __rangeValue] of (m$ as Domain).Data?.entries() ?? []) {
				let v = $.mapGet<string, string, string>((m$ as Domain).Data, k, "")[0]
				let baseI: number = i
				i = i - ($.stringLen(v))
				$.copy($.goSlice(dAtA, i, undefined), v)
				i = encodeVarintDomain(dAtA, i, $.uint64($.stringLen(v)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintDomain(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintDomain(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
			}
		}
		if ($.stringLen((m$ as Domain).OwnerEmail) > 0) {
			i = i - ($.stringLen((m$ as Domain).OwnerEmail))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Domain).OwnerEmail)
			i = encodeVarintDomain(dAtA, i, $.uint64($.stringLen((m$ as Domain).OwnerEmail)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ($.stringLen((m$ as Domain).Description) > 0) {
			i = i - ($.stringLen((m$ as Domain).Description))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Domain).Description)
			i = encodeVarintDomain(dAtA, i, $.uint64($.stringLen((m$ as Domain).Description)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as Domain).Status != 0) {
			i = encodeVarintDomain(dAtA, i, $.uint64((m$ as Domain).Status))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x18
		}
		if ($.stringLen((m$ as Domain).Name) > 0) {
			i = i - ($.stringLen((m$ as Domain).Name))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Domain).Name)
			i = encodeVarintDomain(dAtA, i, $.uint64($.stringLen((m$ as Domain).Name)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as Domain).Id) > 0) {
			i = i - ($.stringLen((m$ as Domain).Id))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as Domain).Id)
			i = encodeVarintDomain(dAtA, i, $.uint64($.stringLen((m$ as Domain).Id)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: Domain | $.VarRef<Domain> | null = this;
		$.assignStruct($.pointerValue<Domain>(m), $.markAsStructValue(new Domain()))
	}

	public Size(): number {
		const m: Domain | $.VarRef<Domain> | null = this;
		let n: number = 0
		const m$: Domain = m == null ? $.pointerTarget<Domain>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Domain>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as Domain).Id)
		if (l > 0) {
			n = n + ((1 + l) + sovDomain($.uint64(l)))
		}
		l = $.stringLen((m$ as Domain).Name)
		if (l > 0) {
			n = n + ((1 + l) + sovDomain($.uint64(l)))
		}
		if ((m$ as Domain).Status != 0) {
			n = n + (1 + sovDomain($.uint64((m$ as Domain).Status)))
		}
		l = $.stringLen((m$ as Domain).Description)
		if (l > 0) {
			n = n + ((1 + l) + sovDomain($.uint64(l)))
		}
		l = $.stringLen((m$ as Domain).OwnerEmail)
		if (l > 0) {
			n = n + ((1 + l) + sovDomain($.uint64(l)))
		}
		if ($.len((m$ as Domain).Data) > 0) {
			for (const [k, v] of (m$ as Domain).Data?.entries() ?? []) {
				k
				v
				let mapEntrySize = ((((1 + $.stringLen(k)) + sovDomain($.uint64($.stringLen(k)))) + 1) + $.stringLen(v)) + sovDomain($.uint64($.stringLen(v)))
				n = n + ((mapEntrySize + 1) + sovDomain($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as Domain).WorkflowExecutionRetentionPeriod != null) {
			l = types.Duration.prototype.Size.call((m$ as Domain).WorkflowExecutionRetentionPeriod)
			n = n + ((1 + l) + sovDomain($.uint64(l)))
		}
		if ((m$ as Domain).BadBinaries != null) {
			l = BadBinaries.prototype.Size.call((m$ as Domain).BadBinaries)
			n = n + ((1 + l) + sovDomain($.uint64(l)))
		}
		if ((m$ as Domain).HistoryArchivalStatus != 0) {
			n = n + (1 + sovDomain($.uint64((m$ as Domain).HistoryArchivalStatus)))
		}
		l = $.stringLen((m$ as Domain).HistoryArchivalUri)
		if (l > 0) {
			n = n + ((1 + l) + sovDomain($.uint64(l)))
		}
		if ((m$ as Domain).VisibilityArchivalStatus != 0) {
			n = n + (1 + sovDomain($.uint64((m$ as Domain).VisibilityArchivalStatus)))
		}
		l = $.stringLen((m$ as Domain).VisibilityArchivalUri)
		if (l > 0) {
			n = n + ((1 + l) + sovDomain($.uint64(l)))
		}
		l = $.stringLen((m$ as Domain).ActiveClusterName)
		if (l > 0) {
			n = n + ((1 + l) + sovDomain($.uint64(l)))
		}
		if ($.sliceLen((m$ as Domain).Clusters) > 0) {
			for (let __goscriptRangeTarget0 = (m$ as Domain).Clusters, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as ClusterReplicationConfiguration).Size() : ClusterReplicationConfiguration.prototype.Size.call(e))
				n = n + ((1 + l) + sovDomain($.uint64(l)))
			}
		}
		if ((m$ as Domain).FailoverVersion != 0n) {
			n = n + (1 + sovDomain($.uint64((m$ as Domain).FailoverVersion)))
		}
		if ((m$ as Domain).IsGlobalDomain) {
			n = n + (3)
		}
		if ((m$ as Domain).FailoverInfo != null) {
			l = FailoverInfo.prototype.Size.call((m$ as Domain).FailoverInfo)
			n = n + ((2 + l) + sovDomain($.uint64(l)))
		}
		if ((m$ as Domain).IsolationGroups != null) {
			l = __goscript_common_pb.IsolationGroupConfiguration.prototype.Size.call((m$ as Domain).IsolationGroups)
			n = n + ((2 + l) + sovDomain($.uint64(l)))
		}
		if ((m$ as Domain).AsyncWorkflowConfig != null) {
			l = __goscript_common_pb.AsyncWorkflowConfiguration.prototype.Size.call((m$ as Domain).AsyncWorkflowConfig)
			n = n + ((2 + l) + sovDomain($.uint64(l)))
		}
		if ((m$ as Domain).ActiveClusters != null) {
			l = ActiveClusters.prototype.Size.call((m$ as Domain).ActiveClusters)
			n = n + ((2 + l) + sovDomain($.uint64(l)))
		}
		if ((m$ as Domain).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as Domain).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: Domain | $.VarRef<Domain> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.Domain", /* @__PURE__ */ $.pointerType("apiv1.Domain")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: Domain | $.VarRef<Domain> | null = this;
		const m$: Domain = m == null ? $.pointerTarget<Domain>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Domain>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDomain
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
				return fmt.Errorf("proto: Domain: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: Domain: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
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
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Domain).Id = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
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
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Domain).Name = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Status", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Domain).Status = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++;
						;(m$ as Domain).Status = (m$ as Domain).Status | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Description", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Domain).Description = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field OwnerEmail", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Domain).OwnerEmail = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Data", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as Domain).Data == null) {
						;(m$ as Domain).Data = $.makeMap<string, string>()
					}
					let mapkey: string = ""
					let mapvalue: string = ""
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow0: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowDomain
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
									return ErrIntOverflowDomain
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
								return ErrInvalidLengthDomain
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthDomain
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
										return ErrIntOverflowDomain
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
									return ErrInvalidLengthDomain
								}
								let postStringIndexmapvalue: number = iNdEx + intStringLenmapvalue
								if (postStringIndexmapvalue < 0) {
									return ErrInvalidLengthDomain
								}
								if (postStringIndexmapvalue > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapvalue))
								iNdEx = postStringIndexmapvalue
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipDomain($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthDomain
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as Domain).Data, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				case 7:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowExecutionRetentionPeriod", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as Domain).WorkflowExecutionRetentionPeriod == null) {
						;(m$ as Domain).WorkflowExecutionRetentionPeriod = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as Domain).WorkflowExecutionRetentionPeriod, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 8:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field BadBinaries", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as Domain).BadBinaries == null) {
						;(m$ as Domain).BadBinaries = new BadBinaries()
					}
					{
						let err = BadBinaries.prototype.Unmarshal.call((m$ as Domain).BadBinaries, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 9:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field HistoryArchivalStatus", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Domain).HistoryArchivalStatus = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++;
						;(m$ as Domain).HistoryArchivalStatus = (m$ as Domain).HistoryArchivalStatus | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 10:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field HistoryArchivalUri", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Domain).HistoryArchivalUri = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 11:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field VisibilityArchivalStatus", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Domain).VisibilityArchivalStatus = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++;
						;(m$ as Domain).VisibilityArchivalStatus = (m$ as Domain).VisibilityArchivalStatus | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 12:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field VisibilityArchivalUri", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Domain).VisibilityArchivalUri = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 13:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveClusterName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Domain).ActiveClusterName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 14:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Clusters", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Domain).Clusters = $.appendOne((m$ as Domain).Clusters, new ClusterReplicationConfiguration(), $.appendZeros.nil)
					{
						let err = ClusterReplicationConfiguration.prototype.Unmarshal.call($.arrayIndex((m$ as Domain).Clusters!, $.sliceLen((m$ as Domain).Clusters) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 15:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field FailoverVersion", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as Domain).FailoverVersion = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++;
						;(m$ as Domain).FailoverVersion = $.int64Or((m$ as Domain).FailoverVersion, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 16:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field IsGlobalDomain", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
					;(m$ as Domain).IsGlobalDomain = (v != 0)
					break
				}
				case 17:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field FailoverInfo", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as Domain).FailoverInfo == null) {
						;(m$ as Domain).FailoverInfo = new FailoverInfo()
					}
					{
						let err = FailoverInfo.prototype.Unmarshal.call((m$ as Domain).FailoverInfo, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 18:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field IsolationGroups", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as Domain).IsolationGroups == null) {
						;(m$ as Domain).IsolationGroups = new __goscript_common_pb.IsolationGroupConfiguration()
					}
					{
						let err = __goscript_common_pb.IsolationGroupConfiguration.prototype.Unmarshal.call((m$ as Domain).IsolationGroups, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 19:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field AsyncWorkflowConfig", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as Domain).AsyncWorkflowConfig == null) {
						;(m$ as Domain).AsyncWorkflowConfig = new __goscript_common_pb.AsyncWorkflowConfiguration()
					}
					{
						let err = __goscript_common_pb.AsyncWorkflowConfiguration.prototype.Unmarshal.call((m$ as Domain).AsyncWorkflowConfig, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 20:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveClusters", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as Domain).ActiveClusters == null) {
						;(m$ as Domain).ActiveClusters = new ActiveClusters()
					}
					{
						let err = ActiveClusters.prototype.Unmarshal.call((m$ as Domain).ActiveClusters, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as Domain).XXX_unrecognized = $.appendSlice((m$ as Domain).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: Domain | $.VarRef<Domain> | null = this;
		xxx_messageInfo_Domain.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.Domain", /* @__PURE__ */ $.pointerType("apiv1.Domain")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: Domain | $.VarRef<Domain> | null = this;
		if (deterministic) {
			return xxx_messageInfo_Domain.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.Domain", /* @__PURE__ */ $.pointerType("apiv1.Domain")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Domain).MarshalToSizedBuffer(b) : Domain.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: Domain | $.VarRef<Domain> | null = this;
		xxx_messageInfo_Domain.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.Domain", /* @__PURE__ */ $.pointerType("apiv1.Domain")), src)
	}

	public XXX_Size(): number {
		const m: Domain | $.VarRef<Domain> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Domain).Size() : Domain.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: Domain | $.VarRef<Domain> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as Domain).Unmarshal(b) : Domain.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.Domain",
		() => new Domain(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActiveClusterName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetActiveClusters", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ActiveClusters") }], pointerReceiver: true }, { name: "GetAsyncWorkflowConfig", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.AsyncWorkflowConfiguration") }], pointerReceiver: true }, { name: "GetBadBinaries", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.BadBinaries") }], pointerReceiver: true }, { name: "GetClusters", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.ClusterReplicationConfiguration")) }], pointerReceiver: true }, { name: "GetData", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")) }], pointerReceiver: true }, { name: "GetDescription", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetFailoverInfo", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.FailoverInfo") }], pointerReceiver: true }, { name: "GetFailoverVersion", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }], pointerReceiver: true }, { name: "GetHistoryArchivalStatus", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.ArchivalStatus") }], pointerReceiver: true }, { name: "GetHistoryArchivalUri", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetId", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetIsGlobalDomain", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("bool") }], pointerReceiver: true }, { name: "GetIsolationGroups", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupConfiguration") }], pointerReceiver: true }, { name: "GetName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetOwnerEmail", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetStatus", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.DomainStatus") }], pointerReceiver: true }, { name: "GetVisibilityArchivalStatus", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32", "apiv1.ArchivalStatus") }], pointerReceiver: true }, { name: "GetVisibilityArchivalUri", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetWorkflowExecutionRetentionPeriod", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Duration") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		Domain,
		() => [{ name: "Id", key: "Id", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=id,proto3\" json:\"id,omitempty\"" }, { name: "Name", key: "Name", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=name,proto3\" json:\"name,omitempty\"" }, { name: "Status", key: "Status", type: /* @__PURE__ */ $.basicType("int32", "apiv1.DomainStatus"), tag: "protobuf:\"varint,3,opt,name=status,proto3,enum=uber.cadence.api.v1.DomainStatus\" json:\"status,omitempty\"" }, { name: "Description", key: "Description", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,4,opt,name=description,proto3\" json:\"description,omitempty\"" }, { name: "OwnerEmail", key: "OwnerEmail", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,5,opt,name=owner_email,json=ownerEmail,proto3\" json:\"owner_email,omitempty\"" }, { name: "Data", key: "Data", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), tag: "protobuf:\"bytes,6,rep,name=data,proto3\" json:\"data,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }, { name: "WorkflowExecutionRetentionPeriod", key: "WorkflowExecutionRetentionPeriod", type: /* @__PURE__ */ $.pointerType("types.Duration"), tag: "protobuf:\"bytes,7,opt,name=workflow_execution_retention_period,json=workflowExecutionRetentionPeriod,proto3\" json:\"workflow_execution_retention_period,omitempty\"" }, { name: "BadBinaries", key: "BadBinaries", type: /* @__PURE__ */ $.pointerType("apiv1.BadBinaries"), tag: "protobuf:\"bytes,8,opt,name=bad_binaries,json=badBinaries,proto3\" json:\"bad_binaries,omitempty\"" }, { name: "HistoryArchivalStatus", key: "HistoryArchivalStatus", type: /* @__PURE__ */ $.basicType("int32", "apiv1.ArchivalStatus"), tag: "protobuf:\"varint,9,opt,name=history_archival_status,json=historyArchivalStatus,proto3,enum=uber.cadence.api.v1.ArchivalStatus\" json:\"history_archival_status,omitempty\"" }, { name: "HistoryArchivalUri", key: "HistoryArchivalUri", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,10,opt,name=history_archival_uri,json=historyArchivalUri,proto3\" json:\"history_archival_uri,omitempty\"" }, { name: "VisibilityArchivalStatus", key: "VisibilityArchivalStatus", type: /* @__PURE__ */ $.basicType("int32", "apiv1.ArchivalStatus"), tag: "protobuf:\"varint,11,opt,name=visibility_archival_status,json=visibilityArchivalStatus,proto3,enum=uber.cadence.api.v1.ArchivalStatus\" json:\"visibility_archival_status,omitempty\"" }, { name: "VisibilityArchivalUri", key: "VisibilityArchivalUri", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,12,opt,name=visibility_archival_uri,json=visibilityArchivalUri,proto3\" json:\"visibility_archival_uri,omitempty\"" }, { name: "ActiveClusterName", key: "ActiveClusterName", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,13,opt,name=active_cluster_name,json=activeClusterName,proto3\" json:\"active_cluster_name,omitempty\"" }, { name: "Clusters", key: "Clusters", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.ClusterReplicationConfiguration")), tag: "protobuf:\"bytes,14,rep,name=clusters,proto3\" json:\"clusters,omitempty\"" }, { name: "FailoverVersion", key: "FailoverVersion", type: /* @__PURE__ */ $.basicType("int64"), tag: "protobuf:\"varint,15,opt,name=failover_version,json=failoverVersion,proto3\" json:\"failover_version,omitempty\"" }, { name: "IsGlobalDomain", key: "IsGlobalDomain", type: /* @__PURE__ */ $.basicType("bool"), tag: "protobuf:\"varint,16,opt,name=is_global_domain,json=isGlobalDomain,proto3\" json:\"is_global_domain,omitempty\"" }, { name: "FailoverInfo", key: "FailoverInfo", type: /* @__PURE__ */ $.pointerType("apiv1.FailoverInfo"), tag: "protobuf:\"bytes,17,opt,name=failover_info,json=failoverInfo,proto3\" json:\"failover_info,omitempty\"" }, { name: "IsolationGroups", key: "IsolationGroups", type: /* @__PURE__ */ $.pointerType("apiv1.IsolationGroupConfiguration"), tag: "protobuf:\"bytes,18,opt,name=isolation_groups,json=isolationGroups,proto3\" json:\"isolation_groups,omitempty\"" }, { name: "AsyncWorkflowConfig", key: "AsyncWorkflowConfig", type: /* @__PURE__ */ $.pointerType("apiv1.AsyncWorkflowConfiguration"), tag: "protobuf:\"bytes,19,opt,name=async_workflow_config,json=asyncWorkflowConfig,proto3\" json:\"async_workflow_config,omitempty\"" }, { name: "ActiveClusters", key: "ActiveClusters", type: /* @__PURE__ */ $.pointerType("apiv1.ActiveClusters"), tag: "protobuf:\"bytes,20,opt,name=active_clusters,json=activeClusters,proto3\" json:\"active_clusters,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ClusterReplicationConfiguration {
	public get ClusterName(): string {
		return this._fields.ClusterName
	}

	public set ClusterName(value: string) {
		this._fields.ClusterName = value
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
		ClusterName: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{ClusterName?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ClusterName: init?.ClusterName ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClusterReplicationConfiguration {
		return new ClusterReplicationConfiguration(this, true)
	}

	public __goscriptAssign(source: ClusterReplicationConfiguration): void {
		const target = this._fields
		const values = source._fields
		target.ClusterName = values.ClusterName
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_824795d6ae7d8e2f, $.arrayToSlice<number>([1])]
	}

	public GetClusterName(): string {
		const m: ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null = this;
		if (m != null) {
			return $.pointerValue<ClusterReplicationConfiguration>(m).ClusterName
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterReplicationConfiguration).Size() : ClusterReplicationConfiguration.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple1: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterReplicationConfiguration).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ClusterReplicationConfiguration.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterReplicationConfiguration).Size() : ClusterReplicationConfiguration.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterReplicationConfiguration).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ClusterReplicationConfiguration.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null = this;
		const m$: ClusterReplicationConfiguration = m == null ? $.pointerTarget<ClusterReplicationConfiguration>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ClusterReplicationConfiguration>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ClusterReplicationConfiguration).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ClusterReplicationConfiguration).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ClusterReplicationConfiguration).XXX_unrecognized)
		}
		if ($.stringLen((m$ as ClusterReplicationConfiguration).ClusterName) > 0) {
			i = i - ($.stringLen((m$ as ClusterReplicationConfiguration).ClusterName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ClusterReplicationConfiguration).ClusterName)
			i = encodeVarintDomain(dAtA, i, $.uint64($.stringLen((m$ as ClusterReplicationConfiguration).ClusterName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null = this;
		$.assignStruct($.pointerValue<ClusterReplicationConfiguration>(m), $.markAsStructValue(new ClusterReplicationConfiguration()))
	}

	public Size(): number {
		const m: ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null = this;
		let n: number = 0
		const m$: ClusterReplicationConfiguration = m == null ? $.pointerTarget<ClusterReplicationConfiguration>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ClusterReplicationConfiguration>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ClusterReplicationConfiguration).ClusterName)
		if (l > 0) {
			n = n + ((1 + l) + sovDomain($.uint64(l)))
		}
		if ((m$ as ClusterReplicationConfiguration).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ClusterReplicationConfiguration).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ClusterReplicationConfiguration", /* @__PURE__ */ $.pointerType("apiv1.ClusterReplicationConfiguration")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null = this;
		const m$: ClusterReplicationConfiguration = m == null ? $.pointerTarget<ClusterReplicationConfiguration>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ClusterReplicationConfiguration>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDomain
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
				return fmt.Errorf("proto: ClusterReplicationConfiguration: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ClusterReplicationConfiguration: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ClusterName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ClusterReplicationConfiguration).ClusterName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ClusterReplicationConfiguration).XXX_unrecognized = $.appendSlice((m$ as ClusterReplicationConfiguration).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null = this;
		xxx_messageInfo_ClusterReplicationConfiguration.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ClusterReplicationConfiguration", /* @__PURE__ */ $.pointerType("apiv1.ClusterReplicationConfiguration")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ClusterReplicationConfiguration.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ClusterReplicationConfiguration", /* @__PURE__ */ $.pointerType("apiv1.ClusterReplicationConfiguration")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterReplicationConfiguration).MarshalToSizedBuffer(b) : ClusterReplicationConfiguration.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null = this;
		xxx_messageInfo_ClusterReplicationConfiguration.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ClusterReplicationConfiguration", /* @__PURE__ */ $.pointerType("apiv1.ClusterReplicationConfiguration")), src)
	}

	public XXX_Size(): number {
		const m: ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterReplicationConfiguration).Size() : ClusterReplicationConfiguration.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ClusterReplicationConfiguration | $.VarRef<ClusterReplicationConfiguration> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterReplicationConfiguration).Unmarshal(b) : ClusterReplicationConfiguration.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ClusterReplicationConfiguration",
		() => new ClusterReplicationConfiguration(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetClusterName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ClusterReplicationConfiguration,
		() => [{ name: "ClusterName", key: "ClusterName", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=cluster_name,json=clusterName,proto3\" json:\"cluster_name,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class BadBinaries {
	public get Binaries(): globalThis.Map<string, BadBinaryInfo | $.VarRef<BadBinaryInfo> | null> | null {
		return this._fields.Binaries
	}

	public set Binaries(value: globalThis.Map<string, BadBinaryInfo | $.VarRef<BadBinaryInfo> | null> | null) {
		this._fields.Binaries = value
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
		Binaries: globalThis.Map<string, BadBinaryInfo | $.VarRef<BadBinaryInfo> | null> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Binaries?: globalThis.Map<string, BadBinaryInfo | $.VarRef<BadBinaryInfo> | null> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Binaries: init?.Binaries ?? (null! as globalThis.Map<string, BadBinaryInfo | $.VarRef<BadBinaryInfo> | null> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BadBinaries {
		return new BadBinaries(this, true)
	}

	public __goscriptAssign(source: BadBinaries): void {
		const target = this._fields
		const values = source._fields
		target.Binaries = values.Binaries
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_824795d6ae7d8e2f, $.arrayToSlice<number>([2])]
	}

	public GetBinaries(): globalThis.Map<string, BadBinaryInfo | $.VarRef<BadBinaryInfo> | null> | null {
		const m: BadBinaries | $.VarRef<BadBinaries> | null = this;
		if (m != null) {
			return $.pointerValue<BadBinaries>(m).Binaries
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: BadBinaries | $.VarRef<BadBinaries> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadBinaries).Size() : BadBinaries.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple2: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadBinaries).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BadBinaries.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BadBinaries | $.VarRef<BadBinaries> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadBinaries).Size() : BadBinaries.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadBinaries).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BadBinaries.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BadBinaries | $.VarRef<BadBinaries> | null = this;
		const m$: BadBinaries = m == null ? $.pointerTarget<BadBinaries>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BadBinaries>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as BadBinaries).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as BadBinaries).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BadBinaries).XXX_unrecognized)
		}
		if ($.len((m$ as BadBinaries).Binaries) > 0) {
			for (const [k, __rangeValue] of (m$ as BadBinaries).Binaries?.entries() ?? []) {
				let v: BadBinaryInfo | $.VarRef<BadBinaryInfo> | null = $.mapGet<string, BadBinaryInfo | $.VarRef<BadBinaryInfo> | null, BadBinaryInfo | $.VarRef<BadBinaryInfo> | null>((m$ as BadBinaries).Binaries, k, null)[0]
				let baseI: number = i
				if (v != null) {
					{
						let [size, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as BadBinaryInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, i)) : BadBinaryInfo.prototype.MarshalToSizedBuffer.call(v, $.goSlice(dAtA, undefined, i)))
						if (err != null) {
							return [0, err]
						}
						i = i - (size)
						i = encodeVarintDomain(dAtA, i, $.uint64(size))
					}
					i--
					$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				}
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintDomain(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintDomain(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: BadBinaries | $.VarRef<BadBinaries> | null = this;
		$.assignStruct($.pointerValue<BadBinaries>(m), $.markAsStructValue(new BadBinaries()))
	}

	public Size(): number {
		const m: BadBinaries | $.VarRef<BadBinaries> | null = this;
		let n: number = 0
		const m$: BadBinaries = m == null ? $.pointerTarget<BadBinaries>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BadBinaries>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.len((m$ as BadBinaries).Binaries) > 0) {
			for (const [k, v] of (m$ as BadBinaries).Binaries?.entries() ?? []) {
				k
				v
				l = 0
				if (v != null) {
					l = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as BadBinaryInfo).Size() : BadBinaryInfo.prototype.Size.call(v))
					l = l + (1 + sovDomain($.uint64(l)))
				}
				let mapEntrySize = ((1 + $.stringLen(k)) + sovDomain($.uint64($.stringLen(k)))) + l
				n = n + ((mapEntrySize + 1) + sovDomain($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as BadBinaries).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as BadBinaries).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: BadBinaries | $.VarRef<BadBinaries> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.BadBinaries", /* @__PURE__ */ $.pointerType("apiv1.BadBinaries")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: BadBinaries | $.VarRef<BadBinaries> | null = this;
		const m$: BadBinaries = m == null ? $.pointerTarget<BadBinaries>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BadBinaries>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDomain
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: BadBinaries: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: BadBinaries: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Binaries", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as BadBinaries).Binaries == null) {
						;(m$ as BadBinaries).Binaries = $.makeMap<string, BadBinaryInfo | $.VarRef<BadBinaryInfo> | null>()
					}
					let mapkey: string = ""
					let mapvalue: BadBinaryInfo | $.VarRef<BadBinaryInfo> | null = null! as BadBinaryInfo | $.VarRef<BadBinaryInfo> | null
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow2: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowDomain
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
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
									return ErrIntOverflowDomain
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthDomain
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthDomain
							}
							if (postStringIndexmapkey > l) {
								return io.ErrUnexpectedEOF
							}
							mapkey = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapkey))
							iNdEx = postStringIndexmapkey
						} else {
							if (__goscriptShadow3 == 2) {
								let mapmsglen: number = 0
								for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
									if (shift >= 64) {
										return ErrIntOverflowDomain
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
									iNdEx++
									mapmsglen = mapmsglen | ($.int(b & 0x7F) << shift)
									if (b < 0x80) {
										break
									}
								}
								if (mapmsglen < 0) {
									return ErrInvalidLengthDomain
								}
								let postmsgIndex: number = iNdEx + mapmsglen
								if (postmsgIndex < 0) {
									return ErrInvalidLengthDomain
								}
								if (postmsgIndex > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = new BadBinaryInfo()
								{
									let err = (mapvalue !== null && (mapvalue as any).__isVarRef !== true && (mapvalue as any).__goValue === undefined ? ((mapvalue as any) as BadBinaryInfo).Unmarshal($.goSlice(dAtA, iNdEx, postmsgIndex)) : BadBinaryInfo.prototype.Unmarshal.call(mapvalue, $.goSlice(dAtA, iNdEx, postmsgIndex)))
									if (err != null) {
										return err
									}
								}
								iNdEx = postmsgIndex
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipDomain($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthDomain
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as BadBinaries).Binaries, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BadBinaries).XXX_unrecognized = $.appendSlice((m$ as BadBinaries).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: BadBinaries | $.VarRef<BadBinaries> | null = this;
		xxx_messageInfo_BadBinaries.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.BadBinaries", /* @__PURE__ */ $.pointerType("apiv1.BadBinaries")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: BadBinaries | $.VarRef<BadBinaries> | null = this;
		if (deterministic) {
			return xxx_messageInfo_BadBinaries.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.BadBinaries", /* @__PURE__ */ $.pointerType("apiv1.BadBinaries")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadBinaries).MarshalToSizedBuffer(b) : BadBinaries.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: BadBinaries | $.VarRef<BadBinaries> | null = this;
		xxx_messageInfo_BadBinaries.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.BadBinaries", /* @__PURE__ */ $.pointerType("apiv1.BadBinaries")), src)
	}

	public XXX_Size(): number {
		const m: BadBinaries | $.VarRef<BadBinaries> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadBinaries).Size() : BadBinaries.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: BadBinaries | $.VarRef<BadBinaries> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadBinaries).Unmarshal(b) : BadBinaries.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.BadBinaries",
		() => new BadBinaries(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetBinaries", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.BadBinaryInfo")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		BadBinaries,
		() => [{ name: "Binaries", key: "Binaries", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.BadBinaryInfo")), tag: "protobuf:\"bytes,1,rep,name=binaries,proto3\" json:\"binaries,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class BadBinaryInfo {
	public get Reason(): string {
		return this._fields.Reason
	}

	public set Reason(value: string) {
		this._fields.Reason = value
	}

	public get Operator(): string {
		return this._fields.Operator
	}

	public set Operator(value: string) {
		this._fields.Operator = value
	}

	public get CreatedTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.CreatedTime
	}

	public set CreatedTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.CreatedTime = value
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
		Reason: string
		Operator: string
		CreatedTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Reason?: string, Operator?: string, CreatedTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Reason: init?.Reason ?? ("" as string),
			Operator: init?.Operator ?? ("" as string),
			CreatedTime: init?.CreatedTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BadBinaryInfo {
		return new BadBinaryInfo(this, true)
	}

	public __goscriptAssign(source: BadBinaryInfo): void {
		const target = this._fields
		const values = source._fields
		target.Reason = values.Reason
		target.Operator = values.Operator
		target.CreatedTime = values.CreatedTime
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_824795d6ae7d8e2f, $.arrayToSlice<number>([3])]
	}

	public GetCreatedTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: BadBinaryInfo | $.VarRef<BadBinaryInfo> | null = this;
		if (m != null) {
			return $.pointerValue<BadBinaryInfo>(m).CreatedTime
		}
		return null
	}

	public GetOperator(): string {
		const m: BadBinaryInfo | $.VarRef<BadBinaryInfo> | null = this;
		if (m != null) {
			return $.pointerValue<BadBinaryInfo>(m).Operator
		}
		return ""
	}

	public GetReason(): string {
		const m: BadBinaryInfo | $.VarRef<BadBinaryInfo> | null = this;
		if (m != null) {
			return $.pointerValue<BadBinaryInfo>(m).Reason
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: BadBinaryInfo | $.VarRef<BadBinaryInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadBinaryInfo).Size() : BadBinaryInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple3: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadBinaryInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BadBinaryInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BadBinaryInfo | $.VarRef<BadBinaryInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadBinaryInfo).Size() : BadBinaryInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadBinaryInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : BadBinaryInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: BadBinaryInfo | $.VarRef<BadBinaryInfo> | null = this;
		const m$: BadBinaryInfo = m == null ? $.pointerTarget<BadBinaryInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BadBinaryInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as BadBinaryInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as BadBinaryInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BadBinaryInfo).XXX_unrecognized)
		}
		if ((m$ as BadBinaryInfo).CreatedTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as BadBinaryInfo).CreatedTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.stringLen((m$ as BadBinaryInfo).Operator) > 0) {
			i = i - ($.stringLen((m$ as BadBinaryInfo).Operator))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BadBinaryInfo).Operator)
			i = encodeVarintDomain(dAtA, i, $.uint64($.stringLen((m$ as BadBinaryInfo).Operator)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as BadBinaryInfo).Reason) > 0) {
			i = i - ($.stringLen((m$ as BadBinaryInfo).Reason))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as BadBinaryInfo).Reason)
			i = encodeVarintDomain(dAtA, i, $.uint64($.stringLen((m$ as BadBinaryInfo).Reason)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: BadBinaryInfo | $.VarRef<BadBinaryInfo> | null = this;
		$.assignStruct($.pointerValue<BadBinaryInfo>(m), $.markAsStructValue(new BadBinaryInfo()))
	}

	public Size(): number {
		const m: BadBinaryInfo | $.VarRef<BadBinaryInfo> | null = this;
		let n: number = 0
		const m$: BadBinaryInfo = m == null ? $.pointerTarget<BadBinaryInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BadBinaryInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as BadBinaryInfo).Reason)
		if (l > 0) {
			n = n + ((1 + l) + sovDomain($.uint64(l)))
		}
		l = $.stringLen((m$ as BadBinaryInfo).Operator)
		if (l > 0) {
			n = n + ((1 + l) + sovDomain($.uint64(l)))
		}
		if ((m$ as BadBinaryInfo).CreatedTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as BadBinaryInfo).CreatedTime)
			n = n + ((1 + l) + sovDomain($.uint64(l)))
		}
		if ((m$ as BadBinaryInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as BadBinaryInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: BadBinaryInfo | $.VarRef<BadBinaryInfo> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.BadBinaryInfo", /* @__PURE__ */ $.pointerType("apiv1.BadBinaryInfo")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: BadBinaryInfo | $.VarRef<BadBinaryInfo> | null = this;
		const m$: BadBinaryInfo = m == null ? $.pointerTarget<BadBinaryInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<BadBinaryInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow4 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDomain
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
				return fmt.Errorf("proto: BadBinaryInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: BadBinaryInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Reason", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BadBinaryInfo).Reason = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Operator", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BadBinaryInfo).Operator = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field CreatedTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as BadBinaryInfo).CreatedTime == null) {
						;(m$ as BadBinaryInfo).CreatedTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as BadBinaryInfo).CreatedTime, $.goSlice(dAtA, iNdEx, postIndex))
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
					let [skippy, err] = skipDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as BadBinaryInfo).XXX_unrecognized = $.appendSlice((m$ as BadBinaryInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: BadBinaryInfo | $.VarRef<BadBinaryInfo> | null = this;
		xxx_messageInfo_BadBinaryInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.BadBinaryInfo", /* @__PURE__ */ $.pointerType("apiv1.BadBinaryInfo")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: BadBinaryInfo | $.VarRef<BadBinaryInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_BadBinaryInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.BadBinaryInfo", /* @__PURE__ */ $.pointerType("apiv1.BadBinaryInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadBinaryInfo).MarshalToSizedBuffer(b) : BadBinaryInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: BadBinaryInfo | $.VarRef<BadBinaryInfo> | null = this;
		xxx_messageInfo_BadBinaryInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.BadBinaryInfo", /* @__PURE__ */ $.pointerType("apiv1.BadBinaryInfo")), src)
	}

	public XXX_Size(): number {
		const m: BadBinaryInfo | $.VarRef<BadBinaryInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadBinaryInfo).Size() : BadBinaryInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: BadBinaryInfo | $.VarRef<BadBinaryInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as BadBinaryInfo).Unmarshal(b) : BadBinaryInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.BadBinaryInfo",
		() => new BadBinaryInfo(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetCreatedTime", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Timestamp") }], pointerReceiver: true }, { name: "GetOperator", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetReason", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		BadBinaryInfo,
		() => [{ name: "Reason", key: "Reason", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=reason,proto3\" json:\"reason,omitempty\"" }, { name: "Operator", key: "Operator", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,2,opt,name=operator,proto3\" json:\"operator,omitempty\"" }, { name: "CreatedTime", key: "CreatedTime", type: /* @__PURE__ */ $.pointerType("types.Timestamp"), tag: "protobuf:\"bytes,3,opt,name=created_time,json=createdTime,proto3\" json:\"created_time,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class FailoverInfo {
	public get FailoverVersion(): bigint {
		return this._fields.FailoverVersion
	}

	public set FailoverVersion(value: bigint) {
		this._fields.FailoverVersion = value
	}

	public get FailoverStartTimestamp(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.FailoverStartTimestamp
	}

	public set FailoverStartTimestamp(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.FailoverStartTimestamp = value
	}

	public get FailoverExpireTimestamp(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.FailoverExpireTimestamp
	}

	public set FailoverExpireTimestamp(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.FailoverExpireTimestamp = value
	}

	public get CompletedShardCount(): number {
		return this._fields.CompletedShardCount
	}

	public set CompletedShardCount(value: number) {
		this._fields.CompletedShardCount = value
	}

	public get PendingShards(): $.Slice<number> {
		return this._fields.PendingShards
	}

	public set PendingShards(value: $.Slice<number>) {
		this._fields.PendingShards = value
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
		FailoverVersion: bigint
		FailoverStartTimestamp: types.Timestamp | $.VarRef<types.Timestamp> | null
		FailoverExpireTimestamp: types.Timestamp | $.VarRef<types.Timestamp> | null
		CompletedShardCount: number
		PendingShards: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{FailoverVersion?: bigint, FailoverStartTimestamp?: types.Timestamp | $.VarRef<types.Timestamp> | null, FailoverExpireTimestamp?: types.Timestamp | $.VarRef<types.Timestamp> | null, CompletedShardCount?: number, PendingShards?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			FailoverVersion: init?.FailoverVersion ?? (0n as bigint),
			FailoverStartTimestamp: init?.FailoverStartTimestamp ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			FailoverExpireTimestamp: init?.FailoverExpireTimestamp ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			CompletedShardCount: init?.CompletedShardCount ?? (0 as number),
			PendingShards: init?.PendingShards ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FailoverInfo {
		return new FailoverInfo(this, true)
	}

	public __goscriptAssign(source: FailoverInfo): void {
		const target = this._fields
		const values = source._fields
		target.FailoverVersion = values.FailoverVersion
		target.FailoverStartTimestamp = values.FailoverStartTimestamp
		target.FailoverExpireTimestamp = values.FailoverExpireTimestamp
		target.CompletedShardCount = values.CompletedShardCount
		target.PendingShards = values.PendingShards
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_824795d6ae7d8e2f, $.arrayToSlice<number>([4])]
	}

	public GetCompletedShardCount(): number {
		const m: FailoverInfo | $.VarRef<FailoverInfo> | null = this;
		if (m != null) {
			return $.pointerValue<FailoverInfo>(m).CompletedShardCount
		}
		return 0
	}

	public GetFailoverExpireTimestamp(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: FailoverInfo | $.VarRef<FailoverInfo> | null = this;
		if (m != null) {
			return $.pointerValue<FailoverInfo>(m).FailoverExpireTimestamp
		}
		return null
	}

	public GetFailoverStartTimestamp(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: FailoverInfo | $.VarRef<FailoverInfo> | null = this;
		if (m != null) {
			return $.pointerValue<FailoverInfo>(m).FailoverStartTimestamp
		}
		return null
	}

	public GetFailoverVersion(): bigint {
		const m: FailoverInfo | $.VarRef<FailoverInfo> | null = this;
		if (m != null) {
			return $.pointerValue<FailoverInfo>(m).FailoverVersion
		}
		return 0n
	}

	public GetPendingShards(): $.Slice<number> {
		const m: FailoverInfo | $.VarRef<FailoverInfo> | null = this;
		if (m != null) {
			return $.pointerValue<FailoverInfo>(m).PendingShards
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: FailoverInfo | $.VarRef<FailoverInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverInfo).Size() : FailoverInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FailoverInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FailoverInfo | $.VarRef<FailoverInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverInfo).Size() : FailoverInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : FailoverInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: FailoverInfo | $.VarRef<FailoverInfo> | null = this;
		const m$: FailoverInfo = m == null ? $.pointerTarget<FailoverInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailoverInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as FailoverInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as FailoverInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as FailoverInfo).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as FailoverInfo).PendingShards) > 0) {
			let dAtA10: $.Slice<number> = $.makeSlice<number>($.sliceLen((m$ as FailoverInfo).PendingShards) * 10, undefined, "byte")
			let j9: number = 0
			for (let __goscriptRangeTarget1 = (m$ as FailoverInfo).PendingShards, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow5 = $.sliceRange(dAtA10), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let num1 = $.int((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as number), 32)
				let num = $.uint64(num1)
				while (num >= 128n) {
					;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, j9)] = $.uint($.uint64Or(($.uint64And($.uint64(num), 127n)), 128n), 8)
					num = $.uint64Shr(num, 7n)
					j9++
				}
				;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, j9)] = $.uint(num, 8)
				j9++
			}
			i = i - (j9)
			$.copyByteRanges(dAtA, i, undefined, dAtA10, undefined, j9)
			i = encodeVarintDomain(dAtA, i, $.uint64(j9))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as FailoverInfo).CompletedShardCount != 0) {
			i = encodeVarintDomain(dAtA, i, $.uint64((m$ as FailoverInfo).CompletedShardCount))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x20
		}
		if ((m$ as FailoverInfo).FailoverExpireTimestamp != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as FailoverInfo).FailoverExpireTimestamp, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as FailoverInfo).FailoverStartTimestamp != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as FailoverInfo).FailoverStartTimestamp, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintDomain(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as FailoverInfo).FailoverVersion != 0n) {
			i = encodeVarintDomain(dAtA, i, $.uint64((m$ as FailoverInfo).FailoverVersion))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: FailoverInfo | $.VarRef<FailoverInfo> | null = this;
		$.assignStruct($.pointerValue<FailoverInfo>(m), $.markAsStructValue(new FailoverInfo()))
	}

	public Size(): number {
		const m: FailoverInfo | $.VarRef<FailoverInfo> | null = this;
		let n: number = 0
		const m$: FailoverInfo = m == null ? $.pointerTarget<FailoverInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailoverInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as FailoverInfo).FailoverVersion != 0n) {
			n = n + (1 + sovDomain($.uint64((m$ as FailoverInfo).FailoverVersion)))
		}
		if ((m$ as FailoverInfo).FailoverStartTimestamp != null) {
			l = types.Timestamp.prototype.Size.call((m$ as FailoverInfo).FailoverStartTimestamp)
			n = n + ((1 + l) + sovDomain($.uint64(l)))
		}
		if ((m$ as FailoverInfo).FailoverExpireTimestamp != null) {
			l = types.Timestamp.prototype.Size.call((m$ as FailoverInfo).FailoverExpireTimestamp)
			n = n + ((1 + l) + sovDomain($.uint64(l)))
		}
		if ((m$ as FailoverInfo).CompletedShardCount != 0) {
			n = n + (1 + sovDomain($.uint64((m$ as FailoverInfo).CompletedShardCount)))
		}
		if ($.sliceLen((m$ as FailoverInfo).PendingShards) > 0) {
			l = 0
			for (let __goscriptRangeTarget2 = (m$ as FailoverInfo).PendingShards, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let e = $.int((__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as number), 32)
				l = l + (sovDomain($.uint64(e)))
			}
			n = n + ((1 + sovDomain($.uint64(l))) + l)
		}
		if ((m$ as FailoverInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as FailoverInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: FailoverInfo | $.VarRef<FailoverInfo> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.FailoverInfo", /* @__PURE__ */ $.pointerType("apiv1.FailoverInfo")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: FailoverInfo | $.VarRef<FailoverInfo> | null = this;
		const m$: FailoverInfo = m == null ? $.pointerTarget<FailoverInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<FailoverInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow6 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDomain
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
				return fmt.Errorf("proto: FailoverInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: FailoverInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field FailoverVersion", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as FailoverInfo).FailoverVersion = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++;
						;(m$ as FailoverInfo).FailoverVersion = $.int64Or((m$ as FailoverInfo).FailoverVersion, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field FailoverStartTimestamp", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as FailoverInfo).FailoverStartTimestamp == null) {
						;(m$ as FailoverInfo).FailoverStartTimestamp = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as FailoverInfo).FailoverStartTimestamp, $.goSlice(dAtA, iNdEx, postIndex))
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
						return fmt.Errorf("proto: wrong wireType = %d for field FailoverExpireTimestamp", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as FailoverInfo).FailoverExpireTimestamp == null) {
						;(m$ as FailoverInfo).FailoverExpireTimestamp = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as FailoverInfo).FailoverExpireTimestamp, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field CompletedShardCount", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as FailoverInfo).CompletedShardCount = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++;
						;(m$ as FailoverInfo).CompletedShardCount = (m$ as FailoverInfo).CompletedShardCount | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 5:
				{
					if (wireType == 0) {
						let v: number = 0
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowDomain
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
							iNdEx++
							v = v | ($.int($.int(b & 0x7F, 32) << shift, 32))
							if (b < 0x80) {
								break
							}
						}
						;(m$ as FailoverInfo).PendingShards = $.appendOne((m$ as FailoverInfo).PendingShards, $.int(v, 32))
					} else {
						if (wireType == 2) {
							let packedLen: number = 0
							for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
								if (shift >= 64) {
									return ErrIntOverflowDomain
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
								iNdEx++
								packedLen = packedLen | ($.int(b & 0x7F) << shift)
								if (b < 0x80) {
									break
								}
							}
							if (packedLen < 0) {
								return ErrInvalidLengthDomain
							}
							let postIndex = iNdEx + packedLen
							if (postIndex < 0) {
								return ErrInvalidLengthDomain
							}
							if (postIndex > l) {
								return io.ErrUnexpectedEOF
							}
							let elementCount: number = 0
							let count: number = 0
							for (let __goscriptRangeTarget3 = $.goSlice(dAtA, iNdEx, postIndex), __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
								let integer = $.uint((__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as number), 8)
								if (integer < 128) {
									count++
								}
							}
							elementCount = count
							if ((elementCount != 0) && ($.sliceLen((m$ as FailoverInfo).PendingShards) == 0)) {
								;(m$ as FailoverInfo).PendingShards = $.makeSlice<number>(0, elementCount, "number")
							}
							while (iNdEx < postIndex) {
								let v: number = 0
								for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
									if (shift >= 64) {
										return ErrIntOverflowDomain
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
									iNdEx++
									v = v | ($.int($.int(b & 0x7F, 32) << shift, 32))
									if (b < 0x80) {
										break
									}
								}
								;(m$ as FailoverInfo).PendingShards = $.appendOne((m$ as FailoverInfo).PendingShards, $.int(v, 32))
							}
						} else {
							return fmt.Errorf("proto: wrong wireType = %d for field PendingShards", $.basicInterfaceValue(wireType, "int"))
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as FailoverInfo).XXX_unrecognized = $.appendSlice((m$ as FailoverInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: FailoverInfo | $.VarRef<FailoverInfo> | null = this;
		xxx_messageInfo_FailoverInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.FailoverInfo", /* @__PURE__ */ $.pointerType("apiv1.FailoverInfo")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: FailoverInfo | $.VarRef<FailoverInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_FailoverInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.FailoverInfo", /* @__PURE__ */ $.pointerType("apiv1.FailoverInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverInfo).MarshalToSizedBuffer(b) : FailoverInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: FailoverInfo | $.VarRef<FailoverInfo> | null = this;
		xxx_messageInfo_FailoverInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.FailoverInfo", /* @__PURE__ */ $.pointerType("apiv1.FailoverInfo")), src)
	}

	public XXX_Size(): number {
		const m: FailoverInfo | $.VarRef<FailoverInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverInfo).Size() : FailoverInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: FailoverInfo | $.VarRef<FailoverInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as FailoverInfo).Unmarshal(b) : FailoverInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FailoverInfo",
		() => new FailoverInfo(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetCompletedShardCount", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int32") }], pointerReceiver: true }, { name: "GetFailoverExpireTimestamp", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Timestamp") }], pointerReceiver: true }, { name: "GetFailoverStartTimestamp", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("types.Timestamp") }], pointerReceiver: true }, { name: "GetFailoverVersion", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }], pointerReceiver: true }, { name: "GetPendingShards", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		FailoverInfo,
		() => [{ name: "FailoverVersion", key: "FailoverVersion", type: /* @__PURE__ */ $.basicType("int64"), tag: "protobuf:\"varint,1,opt,name=failover_version,json=failoverVersion,proto3\" json:\"failover_version,omitempty\"" }, { name: "FailoverStartTimestamp", key: "FailoverStartTimestamp", type: /* @__PURE__ */ $.pointerType("types.Timestamp"), tag: "protobuf:\"bytes,2,opt,name=failover_start_timestamp,json=failoverStartTimestamp,proto3\" json:\"failover_start_timestamp,omitempty\"" }, { name: "FailoverExpireTimestamp", key: "FailoverExpireTimestamp", type: /* @__PURE__ */ $.pointerType("types.Timestamp"), tag: "protobuf:\"bytes,3,opt,name=failover_expire_timestamp,json=failoverExpireTimestamp,proto3\" json:\"failover_expire_timestamp,omitempty\"" }, { name: "CompletedShardCount", key: "CompletedShardCount", type: /* @__PURE__ */ $.basicType("int32"), tag: "protobuf:\"varint,4,opt,name=completed_shard_count,json=completedShardCount,proto3\" json:\"completed_shard_count,omitempty\"" }, { name: "PendingShards", key: "PendingShards", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")), tag: "protobuf:\"varint,5,rep,packed,name=pending_shards,json=pendingShards,proto3\" json:\"pending_shards,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ActiveClusters {
	public get RegionToCluster(): globalThis.Map<string, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null> | null {
		return this._fields.RegionToCluster
	}

	public set RegionToCluster(value: globalThis.Map<string, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null> | null) {
		this._fields.RegionToCluster = value
	}

	public get ActiveClustersByClusterAttribute(): globalThis.Map<string, ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null> | null {
		return this._fields.ActiveClustersByClusterAttribute
	}

	public set ActiveClustersByClusterAttribute(value: globalThis.Map<string, ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null> | null) {
		this._fields.ActiveClustersByClusterAttribute = value
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
		RegionToCluster: globalThis.Map<string, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null> | null
		ActiveClustersByClusterAttribute: globalThis.Map<string, ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{RegionToCluster?: globalThis.Map<string, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null> | null, ActiveClustersByClusterAttribute?: globalThis.Map<string, ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			RegionToCluster: init?.RegionToCluster ?? (null! as globalThis.Map<string, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null> | null),
			ActiveClustersByClusterAttribute: init?.ActiveClustersByClusterAttribute ?? (null! as globalThis.Map<string, ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ActiveClusters {
		return new ActiveClusters(this, true)
	}

	public __goscriptAssign(source: ActiveClusters): void {
		const target = this._fields
		const values = source._fields
		target.RegionToCluster = values.RegionToCluster
		target.ActiveClustersByClusterAttribute = values.ActiveClustersByClusterAttribute
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_824795d6ae7d8e2f, $.arrayToSlice<number>([5])]
	}

	public GetActiveClustersByClusterAttribute(): globalThis.Map<string, ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null> | null {
		const m: ActiveClusters | $.VarRef<ActiveClusters> | null = this;
		if (m != null) {
			return $.pointerValue<ActiveClusters>(m).ActiveClustersByClusterAttribute
		}
		return null
	}

	public GetRegionToCluster(): globalThis.Map<string, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null> | null {
		const m: ActiveClusters | $.VarRef<ActiveClusters> | null = this;
		if (m != null) {
			return $.pointerValue<ActiveClusters>(m).RegionToCluster
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ActiveClusters | $.VarRef<ActiveClusters> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusters).Size() : ActiveClusters.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple5: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusters).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ActiveClusters.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ActiveClusters | $.VarRef<ActiveClusters> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusters).Size() : ActiveClusters.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusters).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ActiveClusters.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ActiveClusters | $.VarRef<ActiveClusters> | null = this;
		const m$: ActiveClusters = m == null ? $.pointerTarget<ActiveClusters>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ActiveClusters>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ActiveClusters).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ActiveClusters).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ActiveClusters).XXX_unrecognized)
		}
		if ($.len((m$ as ActiveClusters).ActiveClustersByClusterAttribute) > 0) {
			for (const [k, __rangeValue] of (m$ as ActiveClusters).ActiveClustersByClusterAttribute?.entries() ?? []) {
				let v: ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null = $.mapGet<string, ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null, ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null>((m$ as ActiveClusters).ActiveClustersByClusterAttribute, k, null)[0]
				let baseI: number = i
				if (v != null) {
					{
						let [size, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as ClusterAttributeScope).MarshalToSizedBuffer($.goSlice(dAtA, undefined, i)) : ClusterAttributeScope.prototype.MarshalToSizedBuffer.call(v, $.goSlice(dAtA, undefined, i)))
						if (err != null) {
							return [0, err]
						}
						i = i - (size)
						i = encodeVarintDomain(dAtA, i, $.uint64(size))
					}
					i--
					$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				}
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintDomain(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintDomain(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
			}
		}
		if ($.len((m$ as ActiveClusters).RegionToCluster) > 0) {
			for (const [k, __rangeValue] of (m$ as ActiveClusters).RegionToCluster?.entries() ?? []) {
				let v: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = $.mapGet<string, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null>((m$ as ActiveClusters).RegionToCluster, k, null)[0]
				let baseI: number = i
				if (v != null) {
					{
						let [size, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as ActiveClusterInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, i)) : ActiveClusterInfo.prototype.MarshalToSizedBuffer.call(v, $.goSlice(dAtA, undefined, i)))
						if (err != null) {
							return [0, err]
						}
						i = i - (size)
						i = encodeVarintDomain(dAtA, i, $.uint64(size))
					}
					i--
					$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				}
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintDomain(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintDomain(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ActiveClusters | $.VarRef<ActiveClusters> | null = this;
		$.assignStruct($.pointerValue<ActiveClusters>(m), $.markAsStructValue(new ActiveClusters()))
	}

	public Size(): number {
		const m: ActiveClusters | $.VarRef<ActiveClusters> | null = this;
		let n: number = 0
		const m$: ActiveClusters = m == null ? $.pointerTarget<ActiveClusters>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ActiveClusters>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.len((m$ as ActiveClusters).RegionToCluster) > 0) {
			for (const [k, v] of (m$ as ActiveClusters).RegionToCluster?.entries() ?? []) {
				k
				v
				l = 0
				if (v != null) {
					l = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as ActiveClusterInfo).Size() : ActiveClusterInfo.prototype.Size.call(v))
					l = l + (1 + sovDomain($.uint64(l)))
				}
				let mapEntrySize = ((1 + $.stringLen(k)) + sovDomain($.uint64($.stringLen(k)))) + l
				n = n + ((mapEntrySize + 1) + sovDomain($.uint64(mapEntrySize)))
			}
		}
		if ($.len((m$ as ActiveClusters).ActiveClustersByClusterAttribute) > 0) {
			for (const [k, v] of (m$ as ActiveClusters).ActiveClustersByClusterAttribute?.entries() ?? []) {
				k
				v
				l = 0
				if (v != null) {
					l = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as ClusterAttributeScope).Size() : ClusterAttributeScope.prototype.Size.call(v))
					l = l + (1 + sovDomain($.uint64(l)))
				}
				let mapEntrySize = ((1 + $.stringLen(k)) + sovDomain($.uint64($.stringLen(k)))) + l
				n = n + ((mapEntrySize + 1) + sovDomain($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as ActiveClusters).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ActiveClusters).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ActiveClusters | $.VarRef<ActiveClusters> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ActiveClusters", /* @__PURE__ */ $.pointerType("apiv1.ActiveClusters")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ActiveClusters | $.VarRef<ActiveClusters> | null = this;
		const m$: ActiveClusters = m == null ? $.pointerTarget<ActiveClusters>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ActiveClusters>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow7 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDomain
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
				return fmt.Errorf("proto: ActiveClusters: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ActiveClusters: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RegionToCluster", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ActiveClusters).RegionToCluster == null) {
						;(m$ as ActiveClusters).RegionToCluster = $.makeMap<string, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null>()
					}
					let mapkey: string = ""
					let mapvalue: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = null! as ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow4: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowDomain
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
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
									return ErrIntOverflowDomain
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthDomain
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthDomain
							}
							if (postStringIndexmapkey > l) {
								return io.ErrUnexpectedEOF
							}
							mapkey = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapkey))
							iNdEx = postStringIndexmapkey
						} else {
							if (__goscriptShadow5 == 2) {
								let mapmsglen: number = 0
								for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
									if (shift >= 64) {
										return ErrIntOverflowDomain
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
									iNdEx++
									mapmsglen = mapmsglen | ($.int(b & 0x7F) << shift)
									if (b < 0x80) {
										break
									}
								}
								if (mapmsglen < 0) {
									return ErrInvalidLengthDomain
								}
								let postmsgIndex: number = iNdEx + mapmsglen
								if (postmsgIndex < 0) {
									return ErrInvalidLengthDomain
								}
								if (postmsgIndex > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = new ActiveClusterInfo()
								{
									let err = (mapvalue !== null && (mapvalue as any).__isVarRef !== true && (mapvalue as any).__goValue === undefined ? ((mapvalue as any) as ActiveClusterInfo).Unmarshal($.goSlice(dAtA, iNdEx, postmsgIndex)) : ActiveClusterInfo.prototype.Unmarshal.call(mapvalue, $.goSlice(dAtA, iNdEx, postmsgIndex)))
									if (err != null) {
										return err
									}
								}
								iNdEx = postmsgIndex
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipDomain($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthDomain
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as ActiveClusters).RegionToCluster, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveClustersByClusterAttribute", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
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
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ActiveClusters).ActiveClustersByClusterAttribute == null) {
						;(m$ as ActiveClusters).ActiveClustersByClusterAttribute = $.makeMap<string, ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null>()
					}
					let mapkey: string = ""
					let mapvalue: ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null = null! as ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow6: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowDomain
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
							iNdEx++
							__goscriptShadow6 = $.uint64Or(__goscriptShadow6, $.uint64Shl($.uint64(b & 0x7F), shift))
							if (b < 0x80) {
								break
							}
						}
						let __goscriptShadow7 = $.int($.uint64Shr(__goscriptShadow6, 3n), 32)
						if (__goscriptShadow7 == 1) {
							let stringLenmapkey: bigint = 0n
							for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
								if (shift >= 64) {
									return ErrIntOverflowDomain
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthDomain
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthDomain
							}
							if (postStringIndexmapkey > l) {
								return io.ErrUnexpectedEOF
							}
							mapkey = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapkey))
							iNdEx = postStringIndexmapkey
						} else {
							if (__goscriptShadow7 == 2) {
								let mapmsglen: number = 0
								for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
									if (shift >= 64) {
										return ErrIntOverflowDomain
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
									iNdEx++
									mapmsglen = mapmsglen | ($.int(b & 0x7F) << shift)
									if (b < 0x80) {
										break
									}
								}
								if (mapmsglen < 0) {
									return ErrInvalidLengthDomain
								}
								let postmsgIndex: number = iNdEx + mapmsglen
								if (postmsgIndex < 0) {
									return ErrInvalidLengthDomain
								}
								if (postmsgIndex > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = new ClusterAttributeScope()
								{
									let err = (mapvalue !== null && (mapvalue as any).__isVarRef !== true && (mapvalue as any).__goValue === undefined ? ((mapvalue as any) as ClusterAttributeScope).Unmarshal($.goSlice(dAtA, iNdEx, postmsgIndex)) : ClusterAttributeScope.prototype.Unmarshal.call(mapvalue, $.goSlice(dAtA, iNdEx, postmsgIndex)))
									if (err != null) {
										return err
									}
								}
								iNdEx = postmsgIndex
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipDomain($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthDomain
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as ActiveClusters).ActiveClustersByClusterAttribute, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ActiveClusters).XXX_unrecognized = $.appendSlice((m$ as ActiveClusters).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ActiveClusters | $.VarRef<ActiveClusters> | null = this;
		xxx_messageInfo_ActiveClusters.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ActiveClusters", /* @__PURE__ */ $.pointerType("apiv1.ActiveClusters")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ActiveClusters | $.VarRef<ActiveClusters> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ActiveClusters.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ActiveClusters", /* @__PURE__ */ $.pointerType("apiv1.ActiveClusters")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusters).MarshalToSizedBuffer(b) : ActiveClusters.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ActiveClusters | $.VarRef<ActiveClusters> | null = this;
		xxx_messageInfo_ActiveClusters.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ActiveClusters", /* @__PURE__ */ $.pointerType("apiv1.ActiveClusters")), src)
	}

	public XXX_Size(): number {
		const m: ActiveClusters | $.VarRef<ActiveClusters> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusters).Size() : ActiveClusters.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ActiveClusters | $.VarRef<ActiveClusters> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusters).Unmarshal(b) : ActiveClusters.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ActiveClusters",
		() => new ActiveClusters(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActiveClustersByClusterAttribute", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.ClusterAttributeScope")) }], pointerReceiver: true }, { name: "GetRegionToCluster", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterInfo")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ActiveClusters,
		() => [{ name: "RegionToCluster", key: "RegionToCluster", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterInfo")), tag: "protobuf:\"bytes,1,rep,name=region_to_cluster,json=regionToCluster,proto3\" json:\"region_to_cluster,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }, { name: "ActiveClustersByClusterAttribute", key: "ActiveClustersByClusterAttribute", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.ClusterAttributeScope")), tag: "protobuf:\"bytes,2,rep,name=active_clusters_by_cluster_attribute,json=activeClustersByClusterAttribute,proto3\" json:\"active_clusters_by_cluster_attribute,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ClusterAttributeScope {
	public get ClusterAttributes(): globalThis.Map<string, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null> | null {
		return this._fields.ClusterAttributes
	}

	public set ClusterAttributes(value: globalThis.Map<string, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null> | null) {
		this._fields.ClusterAttributes = value
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
		ClusterAttributes: globalThis.Map<string, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{ClusterAttributes?: globalThis.Map<string, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ClusterAttributes: init?.ClusterAttributes ?? (null! as globalThis.Map<string, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClusterAttributeScope {
		return new ClusterAttributeScope(this, true)
	}

	public __goscriptAssign(source: ClusterAttributeScope): void {
		const target = this._fields
		const values = source._fields
		target.ClusterAttributes = values.ClusterAttributes
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_824795d6ae7d8e2f, $.arrayToSlice<number>([6])]
	}

	public GetClusterAttributes(): globalThis.Map<string, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null> | null {
		const m: ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null = this;
		if (m != null) {
			return $.pointerValue<ClusterAttributeScope>(m).ClusterAttributes
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterAttributeScope).Size() : ClusterAttributeScope.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple6: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterAttributeScope).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ClusterAttributeScope.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterAttributeScope).Size() : ClusterAttributeScope.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterAttributeScope).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ClusterAttributeScope.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null = this;
		const m$: ClusterAttributeScope = m == null ? $.pointerTarget<ClusterAttributeScope>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ClusterAttributeScope>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ClusterAttributeScope).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ClusterAttributeScope).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ClusterAttributeScope).XXX_unrecognized)
		}
		if ($.len((m$ as ClusterAttributeScope).ClusterAttributes) > 0) {
			for (const [k, __rangeValue] of (m$ as ClusterAttributeScope).ClusterAttributes?.entries() ?? []) {
				let v: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = $.mapGet<string, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null>((m$ as ClusterAttributeScope).ClusterAttributes, k, null)[0]
				let baseI: number = i
				if (v != null) {
					{
						let [size, err] = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as ActiveClusterInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, i)) : ActiveClusterInfo.prototype.MarshalToSizedBuffer.call(v, $.goSlice(dAtA, undefined, i)))
						if (err != null) {
							return [0, err]
						}
						i = i - (size)
						i = encodeVarintDomain(dAtA, i, $.uint64(size))
					}
					i--
					$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				}
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintDomain(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintDomain(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null = this;
		$.assignStruct($.pointerValue<ClusterAttributeScope>(m), $.markAsStructValue(new ClusterAttributeScope()))
	}

	public Size(): number {
		const m: ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null = this;
		let n: number = 0
		const m$: ClusterAttributeScope = m == null ? $.pointerTarget<ClusterAttributeScope>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ClusterAttributeScope>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.len((m$ as ClusterAttributeScope).ClusterAttributes) > 0) {
			for (const [k, v] of (m$ as ClusterAttributeScope).ClusterAttributes?.entries() ?? []) {
				k
				v
				l = 0
				if (v != null) {
					l = (v !== null && (v as any).__isVarRef !== true && (v as any).__goValue === undefined ? ((v as any) as ActiveClusterInfo).Size() : ActiveClusterInfo.prototype.Size.call(v))
					l = l + (1 + sovDomain($.uint64(l)))
				}
				let mapEntrySize = ((1 + $.stringLen(k)) + sovDomain($.uint64($.stringLen(k)))) + l
				n = n + ((mapEntrySize + 1) + sovDomain($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as ClusterAttributeScope).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ClusterAttributeScope).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ClusterAttributeScope", /* @__PURE__ */ $.pointerType("apiv1.ClusterAttributeScope")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null = this;
		const m$: ClusterAttributeScope = m == null ? $.pointerTarget<ClusterAttributeScope>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ClusterAttributeScope>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow8 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDomain
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
				return fmt.Errorf("proto: ClusterAttributeScope: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ClusterAttributeScope: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ClusterAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ClusterAttributeScope).ClusterAttributes == null) {
						;(m$ as ClusterAttributeScope).ClusterAttributes = $.makeMap<string, ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null>()
					}
					let mapkey: string = ""
					let mapvalue: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = null! as ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow8: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowDomain
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
							iNdEx++
							__goscriptShadow8 = $.uint64Or(__goscriptShadow8, $.uint64Shl($.uint64(b & 0x7F), shift))
							if (b < 0x80) {
								break
							}
						}
						let __goscriptShadow9 = $.int($.uint64Shr(__goscriptShadow8, 3n), 32)
						if (__goscriptShadow9 == 1) {
							let stringLenmapkey: bigint = 0n
							for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
								if (shift >= 64) {
									return ErrIntOverflowDomain
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthDomain
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthDomain
							}
							if (postStringIndexmapkey > l) {
								return io.ErrUnexpectedEOF
							}
							mapkey = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapkey))
							iNdEx = postStringIndexmapkey
						} else {
							if (__goscriptShadow9 == 2) {
								let mapmsglen: number = 0
								for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
									if (shift >= 64) {
										return ErrIntOverflowDomain
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, iNdEx)] as number)
									iNdEx++
									mapmsglen = mapmsglen | ($.int(b & 0x7F) << shift)
									if (b < 0x80) {
										break
									}
								}
								if (mapmsglen < 0) {
									return ErrInvalidLengthDomain
								}
								let postmsgIndex: number = iNdEx + mapmsglen
								if (postmsgIndex < 0) {
									return ErrInvalidLengthDomain
								}
								if (postmsgIndex > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = new ActiveClusterInfo()
								{
									let err = (mapvalue !== null && (mapvalue as any).__isVarRef !== true && (mapvalue as any).__goValue === undefined ? ((mapvalue as any) as ActiveClusterInfo).Unmarshal($.goSlice(dAtA, iNdEx, postmsgIndex)) : ActiveClusterInfo.prototype.Unmarshal.call(mapvalue, $.goSlice(dAtA, iNdEx, postmsgIndex)))
									if (err != null) {
										return err
									}
								}
								iNdEx = postmsgIndex
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipDomain($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthDomain
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as ClusterAttributeScope).ClusterAttributes, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ClusterAttributeScope).XXX_unrecognized = $.appendSlice((m$ as ClusterAttributeScope).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null = this;
		xxx_messageInfo_ClusterAttributeScope.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ClusterAttributeScope", /* @__PURE__ */ $.pointerType("apiv1.ClusterAttributeScope")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ClusterAttributeScope.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ClusterAttributeScope", /* @__PURE__ */ $.pointerType("apiv1.ClusterAttributeScope")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterAttributeScope).MarshalToSizedBuffer(b) : ClusterAttributeScope.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null = this;
		xxx_messageInfo_ClusterAttributeScope.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ClusterAttributeScope", /* @__PURE__ */ $.pointerType("apiv1.ClusterAttributeScope")), src)
	}

	public XXX_Size(): number {
		const m: ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterAttributeScope).Size() : ClusterAttributeScope.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ClusterAttributeScope | $.VarRef<ClusterAttributeScope> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ClusterAttributeScope).Unmarshal(b) : ClusterAttributeScope.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ClusterAttributeScope",
		() => new ClusterAttributeScope(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetClusterAttributes", args: [], returns: [{ type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterInfo")) }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ClusterAttributeScope,
		() => [{ name: "ClusterAttributes", key: "ClusterAttributes", type: /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterInfo")), tag: "protobuf:\"bytes,1,rep,name=cluster_attributes,json=clusterAttributes,proto3\" json:\"cluster_attributes,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export class ActiveClusterInfo {
	public get ActiveClusterName(): string {
		return this._fields.ActiveClusterName
	}

	public set ActiveClusterName(value: string) {
		this._fields.ActiveClusterName = value
	}

	public get FailoverVersion(): bigint {
		return this._fields.FailoverVersion
	}

	public set FailoverVersion(value: bigint) {
		this._fields.FailoverVersion = value
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
		ActiveClusterName: string
		FailoverVersion: bigint
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{ActiveClusterName?: string, FailoverVersion?: bigint, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ActiveClusterName: init?.ActiveClusterName ?? ("" as string),
			FailoverVersion: init?.FailoverVersion ?? (0n as bigint),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ActiveClusterInfo {
		return new ActiveClusterInfo(this, true)
	}

	public __goscriptAssign(source: ActiveClusterInfo): void {
		const target = this._fields
		const values = source._fields
		target.ActiveClusterName = values.ActiveClusterName
		target.FailoverVersion = values.FailoverVersion
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_824795d6ae7d8e2f, $.arrayToSlice<number>([7])]
	}

	public GetActiveClusterName(): string {
		const m: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ActiveClusterInfo>(m).ActiveClusterName
		}
		return ""
	}

	public GetFailoverVersion(): bigint {
		const m: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ActiveClusterInfo>(m).FailoverVersion
		}
		return 0n
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusterInfo).Size() : ActiveClusterInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple7: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusterInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ActiveClusterInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusterInfo).Size() : ActiveClusterInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusterInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ActiveClusterInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = this;
		const m$: ActiveClusterInfo = m == null ? $.pointerTarget<ActiveClusterInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ActiveClusterInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ActiveClusterInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ActiveClusterInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ActiveClusterInfo).XXX_unrecognized)
		}
		if ((m$ as ActiveClusterInfo).FailoverVersion != 0n) {
			i = encodeVarintDomain(dAtA, i, $.uint64((m$ as ActiveClusterInfo).FailoverVersion))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ($.stringLen((m$ as ActiveClusterInfo).ActiveClusterName) > 0) {
			i = i - ($.stringLen((m$ as ActiveClusterInfo).ActiveClusterName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ActiveClusterInfo).ActiveClusterName)
			i = encodeVarintDomain(dAtA, i, $.uint64($.stringLen((m$ as ActiveClusterInfo).ActiveClusterName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = this;
		$.assignStruct($.pointerValue<ActiveClusterInfo>(m), $.markAsStructValue(new ActiveClusterInfo()))
	}

	public Size(): number {
		const m: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = this;
		let n: number = 0
		const m$: ActiveClusterInfo = m == null ? $.pointerTarget<ActiveClusterInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ActiveClusterInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ActiveClusterInfo).ActiveClusterName)
		if (l > 0) {
			n = n + ((1 + l) + sovDomain($.uint64(l)))
		}
		if ((m$ as ActiveClusterInfo).FailoverVersion != 0n) {
			n = n + (1 + sovDomain($.uint64((m$ as ActiveClusterInfo).FailoverVersion)))
		}
		if ((m$ as ActiveClusterInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ActiveClusterInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = this;
		return proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ActiveClusterInfo", /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterInfo")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = this;
		const m$: ActiveClusterInfo = m == null ? $.pointerTarget<ActiveClusterInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ActiveClusterInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow9 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowDomain
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
				return fmt.Errorf("proto: ActiveClusterInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ActiveClusterInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveClusterName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthDomain
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthDomain
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ActiveClusterInfo).ActiveClusterName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field FailoverVersion", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ActiveClusterInfo).FailoverVersion = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowDomain
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, iNdEx)] as number)
						iNdEx++;
						;(m$ as ActiveClusterInfo).FailoverVersion = $.int64Or((m$ as ActiveClusterInfo).FailoverVersion, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipDomain($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthDomain
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ActiveClusterInfo).XXX_unrecognized = $.appendSlice((m$ as ActiveClusterInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
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
		const m: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = this;
		xxx_messageInfo_ActiveClusterInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ActiveClusterInfo", /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterInfo")))
	}

	public XXX_Marshal(b: $.Slice<number>, deterministic: boolean): [$.Slice<number>, $.GoError] {
		const m: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ActiveClusterInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ActiveClusterInfo", /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusterInfo).MarshalToSizedBuffer(b) : ActiveClusterInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public XXX_Merge(src: proto.Message | null): void {
		const m: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = this;
		xxx_messageInfo_ActiveClusterInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ActiveClusterInfo", /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterInfo")), src)
	}

	public XXX_Size(): number {
		const m: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusterInfo).Size() : ActiveClusterInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ActiveClusterInfo | $.VarRef<ActiveClusterInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActiveClusterInfo).Unmarshal(b) : ActiveClusterInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ActiveClusterInfo",
		() => new ActiveClusterInfo(),
		() => [{ name: "Descriptor", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")) }], pointerReceiver: true }, { name: "GetActiveClusterName", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "GetFailoverVersion", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int64") }], pointerReceiver: true }, { name: "Marshal", args: [], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "MarshalTo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "MarshalToSizedBuffer", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.basicType("int") }, { type: "error" }], pointerReceiver: true }, { name: "ProtoMessage", args: [], returns: [], pointerReceiver: true }, { name: "Reset", args: [], returns: [], pointerReceiver: true }, { name: "Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "String", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("string") }], pointerReceiver: true }, { name: "Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "XXX_DiscardUnknown", args: [], returns: [], pointerReceiver: true }, { name: "XXX_Marshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")) }, { type: "error" }], pointerReceiver: true }, { name: "XXX_Merge", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [], pointerReceiver: true }, { name: "XXX_Size", args: [], returns: [{ type: /* @__PURE__ */ $.basicType("int") }], pointerReceiver: true }, { name: "XXX_Unmarshal", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		ActiveClusterInfo,
		() => [{ name: "ActiveClusterName", key: "ActiveClusterName", type: /* @__PURE__ */ $.basicType("string"), tag: "protobuf:\"bytes,1,opt,name=active_cluster_name,json=activeClusterName,proto3\" json:\"active_cluster_name,omitempty\"" }, { name: "FailoverVersion", key: "FailoverVersion", type: /* @__PURE__ */ $.basicType("int64"), tag: "protobuf:\"varint,2,opt,name=failover_version,json=failoverVersion,proto3\" json:\"failover_version,omitempty\"" }, { name: "XXX_NoUnkeyedLiteral", key: "XXX_NoUnkeyedLiteral", type: { kind: $.TypeKind.Struct, methods: [], fields: [] }, tag: "json:\"-\"" }, { name: "XXX_unrecognized", key: "XXX_unrecognized", type: /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), tag: "json:\"-\"" }, { name: "XXX_sizecache", key: "XXX_sizecache", type: /* @__PURE__ */ $.basicType("int32"), tag: "json:\"-\"" }]
	)
}

export const DomainStatus_DOMAIN_STATUS_INVALID: DomainStatus = 0

export const DomainStatus_DOMAIN_STATUS_REGISTERED: DomainStatus = 1

export const DomainStatus_DOMAIN_STATUS_DEPRECATED: DomainStatus = 2

export const DomainStatus_DOMAIN_STATUS_DELETED: DomainStatus = 3

export const ArchivalStatus_ARCHIVAL_STATUS_INVALID: ArchivalStatus = 0

export const ArchivalStatus_ARCHIVAL_STATUS_DISABLED: ArchivalStatus = 1

export const ArchivalStatus_ARCHIVAL_STATUS_ENABLED: ArchivalStatus = 2

export let DomainStatus_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "DOMAIN_STATUS_INVALID"], [1, "DOMAIN_STATUS_REGISTERED"], [2, "DOMAIN_STATUS_DEPRECATED"], [3, "DOMAIN_STATUS_DELETED"]])

export function __goscript_set_DomainStatus_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	DomainStatus_name = __goscriptValue
}

export let DomainStatus_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["DOMAIN_STATUS_INVALID", 0], ["DOMAIN_STATUS_REGISTERED", 1], ["DOMAIN_STATUS_DEPRECATED", 2], ["DOMAIN_STATUS_DELETED", 3]])

export function __goscript_set_DomainStatus_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	DomainStatus_value = __goscriptValue
}

export function DomainStatus_String(x: DomainStatus): string {
	return proto.EnumName(DomainStatus_name, $.int(x, 32))
}

export function DomainStatus_EnumDescriptor(recv: DomainStatus): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_824795d6ae7d8e2f, $.arrayToSlice<number>([0])]
}

export let ArchivalStatus_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "ARCHIVAL_STATUS_INVALID"], [1, "ARCHIVAL_STATUS_DISABLED"], [2, "ARCHIVAL_STATUS_ENABLED"]])

export function __goscript_set_ArchivalStatus_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	ArchivalStatus_name = __goscriptValue
}

export let ArchivalStatus_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["ARCHIVAL_STATUS_INVALID", 0], ["ARCHIVAL_STATUS_DISABLED", 1], ["ARCHIVAL_STATUS_ENABLED", 2]])

export function __goscript_set_ArchivalStatus_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	ArchivalStatus_value = __goscriptValue
}

export function ArchivalStatus_String(x: ArchivalStatus): string {
	return proto.EnumName(ArchivalStatus_name, $.int(x, 32))
}

export function ArchivalStatus_EnumDescriptor(recv: ArchivalStatus): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_824795d6ae7d8e2f, $.arrayToSlice<number>([1])]
}

export let xxx_messageInfo_Domain: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_Domain(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_Domain.value, __goscriptValue)
}

export let xxx_messageInfo_ClusterReplicationConfiguration: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ClusterReplicationConfiguration(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ClusterReplicationConfiguration.value, __goscriptValue)
}

export let xxx_messageInfo_BadBinaries: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_BadBinaries(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_BadBinaries.value, __goscriptValue)
}

export let xxx_messageInfo_BadBinaryInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_BadBinaryInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_BadBinaryInfo.value, __goscriptValue)
}

export let xxx_messageInfo_FailoverInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_FailoverInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_FailoverInfo.value, __goscriptValue)
}

export let xxx_messageInfo_ActiveClusters: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ActiveClusters(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ActiveClusters.value, __goscriptValue)
}

export let xxx_messageInfo_ClusterAttributeScope: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ClusterAttributeScope(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ClusterAttributeScope.value, __goscriptValue)
}

export let xxx_messageInfo_ActiveClusterInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ActiveClusterInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ActiveClusterInfo.value, __goscriptValue)
}

function __goscriptInit0(): void {
	proto.RegisterEnum("uber.cadence.api.v1.DomainStatus", DomainStatus_name, DomainStatus_value)
	proto.RegisterEnum("uber.cadence.api.v1.ArchivalStatus", ArchivalStatus_name, ArchivalStatus_value)
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.Domain", /* @__PURE__ */ $.pointerType("apiv1.Domain")), "uber.cadence.api.v1.Domain")
	proto.RegisterMapType($.interfaceValue(null, "map[string]string", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))), "uber.cadence.api.v1.Domain.DataEntry")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ClusterReplicationConfiguration", /* @__PURE__ */ $.pointerType("apiv1.ClusterReplicationConfiguration")), "uber.cadence.api.v1.ClusterReplicationConfiguration")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.BadBinaries", /* @__PURE__ */ $.pointerType("apiv1.BadBinaries")), "uber.cadence.api.v1.BadBinaries")
	proto.RegisterMapType($.interfaceValue(null, "map[string]*apiv1.BadBinaryInfo", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.BadBinaryInfo"))), "uber.cadence.api.v1.BadBinaries.BinariesEntry")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.BadBinaryInfo", /* @__PURE__ */ $.pointerType("apiv1.BadBinaryInfo")), "uber.cadence.api.v1.BadBinaryInfo")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.FailoverInfo", /* @__PURE__ */ $.pointerType("apiv1.FailoverInfo")), "uber.cadence.api.v1.FailoverInfo")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ActiveClusters", /* @__PURE__ */ $.pointerType("apiv1.ActiveClusters")), "uber.cadence.api.v1.ActiveClusters")
	proto.RegisterMapType($.interfaceValue(null, "map[string]*apiv1.ClusterAttributeScope", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.ClusterAttributeScope"))), "uber.cadence.api.v1.ActiveClusters.ActiveClustersByClusterAttributeEntry")
	proto.RegisterMapType($.interfaceValue(null, "map[string]*apiv1.ActiveClusterInfo", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterInfo"))), "uber.cadence.api.v1.ActiveClusters.RegionToClusterEntry")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ClusterAttributeScope", /* @__PURE__ */ $.pointerType("apiv1.ClusterAttributeScope")), "uber.cadence.api.v1.ClusterAttributeScope")
	proto.RegisterMapType($.interfaceValue(null, "map[string]*apiv1.ActiveClusterInfo", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterInfo"))), "uber.cadence.api.v1.ClusterAttributeScope.ClusterAttributesEntry")
	proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ActiveClusterInfo", /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterInfo")), "uber.cadence.api.v1.ActiveClusterInfo")
}

function __goscriptInit1(): void {
	proto.RegisterFile("uber/cadence/api/v1/domain.proto", fileDescriptor_824795d6ae7d8e2f)
}

export let fileDescriptor_824795d6ae7d8e2f: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 180, 87, 221, 114, 219, 68, 20, 70, 206, 15, 233, 177, 227, 56, 155, 164, 81, 13, 147, 186, 46, 101, 76, 103, 144, 155, 192, 64, 203, 207, 12, 118, 172, 22, 51, 33, 100, 100, 55, 204, 208, 11, 205, 90, 90, 219, 75, 101, 173, 102, 37, 185, 245, 21, 12, 60, 5, 47, 192, 67, 112, 201, 21, 151, 60, 2, 211, 151, 224, 150, 209, 106, 165, 88, 182, 242, 115, 195, 221, 238, 249, 249, 206, 217, 179, 223, 57, 43, 65, 45, 28, 16, 222, 180, 176, 77, 92, 139, 52, 177, 71, 155, 211, 195, 166, 205, 38, 152, 186, 154, 199, 89, 192, 208, 78, 100, 161, 73, 11, 13, 123, 84, 155, 30, 86, 15, 70, 140, 141, 28, 210, 20, 38, 131, 112, 216, 180, 67, 142, 3, 202, 164, 83, 245, 238, 162, 62, 160, 19, 226, 7, 120, 226, 73, 131, 220, 184, 22, 155, 76, 18, 136, 250, 239, 0, 235, 29, 145, 8, 42, 67, 129, 218, 170, 82, 83, 26, 183, 140, 2, 181, 17, 130, 85, 23, 79, 136, 90, 16, 18, 177, 70, 79, 96, 221, 15, 112, 16, 250, 234, 74, 77, 105, 148, 143, 238, 105, 57, 121, 107, 49, 96, 79, 24, 26, 210, 1, 213, 160, 104, 19, 223, 226, 212, 139, 78, 160, 174, 10, 212, 121, 17, 186, 11, 69, 246, 202, 37, 220, 36, 19, 76, 29, 117, 77, 88, 128, 16, 233, 145, 4, 61, 129, 85, 27, 7, 88, 93, 175, 173, 52, 138, 71, 15, 174, 136, 173, 117, 112, 128, 117, 55, 224, 51, 67, 184, 160, 49, 220, 127, 197, 248, 203, 161, 195, 94, 153, 228, 53, 177, 194, 40, 162, 201, 73, 64, 92, 177, 242, 8, 167, 204, 86, 223, 174, 41, 141, 226, 209, 29, 45, 46, 172, 150, 20, 86, 235, 200, 194, 27, 181, 4, 69, 79, 64, 140, 4, 227, 76, 64, 160, 99, 40, 13, 176, 109, 14, 168, 139, 57, 37, 190, 186, 33, 32, 107, 185, 201, 182, 177, 221, 150, 118, 70, 113, 112, 177, 65, 47, 96, 127, 76, 253, 128, 241, 153, 137, 185, 53, 166, 83, 236, 152, 178, 240, 183, 68, 225, 239, 231, 226, 181, 164, 173, 44, 253, 158, 196, 200, 138, 209, 35, 216, 93, 2, 15, 57, 85, 65, 20, 28, 45, 56, 61, 231, 20, 97, 168, 78, 169, 79, 7, 212, 161, 193, 114, 70, 197, 155, 103, 164, 94, 192, 44, 36, 245, 9, 236, 231, 133, 136, 242, 42, 137, 188, 246, 150, 93, 163, 212, 52, 216, 193, 86, 64, 167, 196, 180, 156, 208, 15, 8, 55, 5, 105, 55, 133, 207, 118, 172, 58, 142, 53, 167, 17, 131, 207, 96, 67, 26, 250, 106, 89, 240, 232, 227, 220, 196, 165, 143, 65, 60, 135, 90, 226, 238, 143, 153, 59, 164, 163, 132, 8, 41, 10, 250, 0, 42, 67, 76, 29, 54, 37, 220, 156, 18, 238, 71, 236, 222, 170, 41, 141, 21, 99, 43, 145, 159, 199, 98, 212, 128, 10, 245, 205, 145, 195, 6, 216, 49, 227, 254, 87, 43, 53, 165, 177, 97, 148, 169, 255, 76, 136, 101, 51, 62, 133, 205, 20, 148, 186, 67, 166, 110, 11, 26, 229, 247, 219, 83, 105, 217, 117, 135, 204, 40, 13, 231, 118, 232, 69, 20, 145, 57, 34, 103, 115, 196, 89, 232, 249, 42, 18, 80, 143, 114, 161, 186, 137, 241, 179, 200, 54, 123, 228, 45, 154, 81, 250, 200, 130, 61, 236, 207, 92, 203, 76, 91, 203, 18, 14, 234, 142, 136, 208, 204, 103, 68, 228, 241, 189, 116, 200, 6, 216, 193, 203, 58, 116, 2, 91, 217, 11, 246, 213, 93, 1, 127, 9, 225, 230, 111, 220, 55, 202, 25, 6, 248, 213, 79, 225, 86, 58, 26, 80, 5, 86, 94, 146, 153, 28, 121, 209, 18, 237, 194, 218, 20, 59, 97, 50, 244, 226, 205, 103, 133, 199, 74, 189, 3, 119, 175, 161, 4, 186, 7, 165, 12, 7, 99, 220, 162, 117, 193, 190, 250, 31, 10, 20, 231, 154, 30, 125, 3, 27, 233, 160, 80, 4, 27, 181, 235, 6, 133, 150, 44, 226, 241, 150, 250, 87, 77, 216, 204, 168, 114, 142, 247, 120, 254, 120, 197, 163, 250, 149, 177, 102, 130, 78, 115, 37, 248, 69, 129, 205, 140, 18, 221, 134, 117, 78, 176, 207, 92, 25, 68, 238, 80, 21, 54, 152, 71, 56, 14, 24, 151, 149, 76, 247, 232, 75, 40, 89, 156, 224, 128, 216, 102, 244, 92, 137, 135, 164, 120, 84, 93, 26, 185, 253, 228, 45, 51, 138, 210, 62, 146, 212, 255, 44, 64, 105, 158, 239, 185, 237, 167, 228, 183, 95, 31, 212, 212, 212, 15, 48, 15, 204, 244, 193, 148, 21, 185, 42, 141, 219, 137, 111, 47, 114, 77, 229, 232, 28, 238, 164, 168, 228, 181, 71, 57, 153, 131, 189, 254, 116, 251, 137, 179, 46, 124, 47, 112, 143, 96, 207, 98, 19, 207, 33, 81, 169, 252, 49, 230, 182, 105, 177, 208, 13, 196, 211, 185, 102, 236, 164, 202, 94, 164, 59, 142, 84, 232, 1, 148, 61, 226, 218, 212, 29, 197, 30, 190, 186, 86, 91, 105, 172, 25, 155, 82, 42, 76, 253, 250, 175, 171, 80, 206, 54, 10, 26, 195, 54, 39, 163, 104, 74, 4, 44, 233, 52, 73, 201, 199, 55, 104, 52, 205, 16, 206, 125, 38, 5, 130, 129, 237, 130, 170, 24, 91, 60, 171, 65, 191, 41, 240, 222, 66, 71, 155, 131, 89, 58, 190, 113, 16, 112, 58, 8, 131, 136, 164, 81, 244, 238, 77, 162, 103, 183, 237, 153, 92, 181, 18, 172, 184, 87, 106, 248, 26, 179, 234, 143, 176, 155, 119, 144, 156, 86, 250, 34, 219, 74, 239, 95, 159, 229, 66, 59, 85, 127, 130, 7, 55, 74, 59, 39, 248, 87, 217, 224, 15, 175, 122, 193, 82, 176, 158, 197, 60, 50, 223, 207, 255, 42, 176, 151, 107, 132, 60, 64, 75, 215, 145, 12, 168, 214, 205, 131, 45, 73, 229, 204, 218, 182, 22, 229, 85, 7, 110, 231, 27, 255, 31, 165, 175, 187, 176, 189, 164, 191, 236, 75, 66, 185, 236, 75, 34, 111, 240, 20, 114, 7, 207, 195, 159, 21, 40, 205, 127, 20, 163, 59, 176, 215, 249, 238, 219, 86, 247, 212, 236, 245, 91, 253, 231, 61, 179, 123, 122, 222, 58, 233, 118, 42, 111, 161, 119, 65, 205, 170, 12, 253, 89, 183, 215, 215, 13, 189, 83, 81, 150, 181, 29, 253, 204, 208, 143, 91, 125, 189, 83, 41, 44, 195, 118, 244, 19, 61, 82, 173, 60, 28, 67, 121, 225, 139, 235, 29, 216, 111, 25, 199, 95, 119, 207, 91, 39, 185, 89, 44, 42, 59, 221, 94, 171, 125, 34, 178, 200, 113, 213, 79, 99, 101, 161, 61, 250, 235, 205, 129, 242, 247, 155, 3, 229, 159, 55, 7, 10, 236, 91, 108, 146, 119, 65, 237, 98, 92, 144, 179, 104, 34, 158, 41, 63, 28, 142, 104, 48, 14, 7, 154, 197, 38, 205, 249, 191, 150, 15, 169, 237, 52, 71, 44, 254, 199, 145, 191, 48, 159, 99, 143, 78, 15, 7, 235, 66, 246, 209, 127, 1, 0, 0, 255, 255, 64, 177, 205, 248, 94, 13, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_824795d6ae7d8e2f(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_824795d6ae7d8e2f = __goscriptValue
}

export function encodeVarintDomain(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovDomain(v))
	let base = offset
	for (let __goscriptSliceWindow10 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export function sovDomain(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozDomain(x: bigint): number {
	let n: number = 0
	return sovDomain($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export function skipDomain(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow11 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowDomain]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
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
						return [0, ErrIntOverflowDomain]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx - 1)] as number) < 0x80) {
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
						return [0, ErrIntOverflowDomain]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthDomain]
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
					return [0, ErrUnexpectedEndOfGroupDomain]
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
			return [0, ErrInvalidLengthDomain]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthDomain: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthDomain(__goscriptValue: $.GoError): void {
	ErrInvalidLengthDomain = __goscriptValue
}

export let ErrIntOverflowDomain: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowDomain(__goscriptValue: $.GoError): void {
	ErrIntOverflowDomain = __goscriptValue
}

export let ErrUnexpectedEndOfGroupDomain: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupDomain(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupDomain = __goscriptValue
}

export { __goscriptInit0 }

export { __goscriptInit1 }
