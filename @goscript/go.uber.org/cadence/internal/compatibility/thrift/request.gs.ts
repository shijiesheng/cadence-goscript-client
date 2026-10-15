// Generated file based on request.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as apiv1 from "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"

import * as __goscript__enum from "./enum.gs.ts"

import * as __goscript_decision from "./decision.gs.ts"

import * as __goscript_helpers from "./helpers.gs.ts"

import * as __goscript_types from "./types.gs.ts"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"
import "./enum.gs.ts"
import "./decision.gs.ts"
import "./helpers.gs.ts"
import "./types.gs.ts"

export const DomainUpdateDescriptionField: string = "description"

export const DomainUpdateOwnerEmailField: string = "owner_email"

export const DomainUpdateDataField: string = "data"

export const DomainUpdateRetentionPeriodField: string = "workflow_execution_retention_period"

export const DomainUpdateBadBinariesField: string = "bad_binaries"

export const DomainUpdateHistoryArchivalStatusField: string = "history_archival_status"

export const DomainUpdateHistoryArchivalURIField: string = "history_archival_uri"

export const DomainUpdateVisibilityArchivalStatusField: string = "visibility_archival_status"

export const DomainUpdateVisibilityArchivalURIField: string = "visibility_archival_uri"

export const DomainUpdateActiveClusterNameField: string = "active_cluster_name"

export const DomainUpdateClustersField: string = "clusters"

export const DomainUpdateActiveClustersField: string = "active_clusters"

export const DomainUpdateDeleteBadBinaryField: string = "delete_bad_binary"

export const DomainUpdateFailoverTimeoutField: string = "failover_timeout"

export function CountWorkflowExecutionsRequest(t: apiv1.CountWorkflowExecutionsRequest | $.VarRef<apiv1.CountWorkflowExecutionsRequest> | null): shared.CountWorkflowExecutionsRequest | $.VarRef<shared.CountWorkflowExecutionsRequest> | null {
	const t$: apiv1.CountWorkflowExecutionsRequest = t == null ? $.pointerTarget<apiv1.CountWorkflowExecutionsRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.CountWorkflowExecutionsRequest>(t)
	if (t == null) {
		return null
	}
	return new shared.CountWorkflowExecutionsRequest({Domain: $.fieldRef((t$ as apiv1.CountWorkflowExecutionsRequest)._fields, "Domain"), Query: $.fieldRef((t$ as apiv1.CountWorkflowExecutionsRequest)._fields, "Query")})
}

export function DeprecateDomainRequest(t: apiv1.DeprecateDomainRequest | $.VarRef<apiv1.DeprecateDomainRequest> | null): shared.DeprecateDomainRequest | $.VarRef<shared.DeprecateDomainRequest> | null {
	const t$: apiv1.DeprecateDomainRequest = t == null ? $.pointerTarget<apiv1.DeprecateDomainRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.DeprecateDomainRequest>(t)
	if (t == null) {
		return null
	}
	return new shared.DeprecateDomainRequest({Name: $.fieldRef((t$ as apiv1.DeprecateDomainRequest)._fields, "Name"), SecurityToken: $.fieldRef((t$ as apiv1.DeprecateDomainRequest)._fields, "SecurityToken")})
}

export function DescribeDomainRequest(t: apiv1.DescribeDomainRequest | $.VarRef<apiv1.DescribeDomainRequest> | null): shared.DescribeDomainRequest | $.VarRef<shared.DescribeDomainRequest> | null {
	if (t == null) {
		return null
	}

	{
		const __goscriptTypeSwitchValue = $.pointerValue<apiv1.DescribeDomainRequest>(t).DescribeBy
		switch (true) {
			case $.typeAssert<apiv1.DescribeDomainRequest_Id | $.VarRef<apiv1.DescribeDomainRequest_Id> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest_Id")).ok:
				{
					let describeBy: apiv1.DescribeDomainRequest_Id | $.VarRef<apiv1.DescribeDomainRequest_Id> | null = $.typeAssert<apiv1.DescribeDomainRequest_Id | $.VarRef<apiv1.DescribeDomainRequest_Id> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest_Id")).value
					return new shared.DescribeDomainRequest({UUID: $.fieldRef($.pointerValue<apiv1.DescribeDomainRequest_Id>(describeBy)._fields, "Id")})
				}
				break
			case $.typeAssert<apiv1.DescribeDomainRequest_Name | $.VarRef<apiv1.DescribeDomainRequest_Name> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest_Name")).ok:
				{
					let describeBy: apiv1.DescribeDomainRequest_Name | $.VarRef<apiv1.DescribeDomainRequest_Name> | null = $.typeAssert<apiv1.DescribeDomainRequest_Name | $.VarRef<apiv1.DescribeDomainRequest_Name> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest_Name")).value
					return new shared.DescribeDomainRequest({Name: $.fieldRef($.pointerValue<apiv1.DescribeDomainRequest_Name>(describeBy)._fields, "Name")})
				}
				break
		}
	}
	$.panic("unknown oneof field is set for DescribeDomainRequest")
	throw new globalThis.Error("goscript: unreachable return")
}

export function DescribeTaskListRequest(t: apiv1.DescribeTaskListRequest | $.VarRef<apiv1.DescribeTaskListRequest> | null): shared.DescribeTaskListRequest | $.VarRef<shared.DescribeTaskListRequest> | null {
	const t$: apiv1.DescribeTaskListRequest = t == null ? $.pointerTarget<apiv1.DescribeTaskListRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.DescribeTaskListRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField0 = __goscript_types.TaskList((t$ as apiv1.DescribeTaskListRequest).TaskList); const __goscriptLiteralField1 = __goscript__enum.TaskListType((t$ as apiv1.DescribeTaskListRequest).TaskListType); return new shared.DescribeTaskListRequest({Domain: $.fieldRef((t$ as apiv1.DescribeTaskListRequest)._fields, "Domain"), TaskList: __goscriptLiteralField0, TaskListType: __goscriptLiteralField1, IncludeTaskListStatus: $.fieldRef((t$ as apiv1.DescribeTaskListRequest)._fields, "IncludeTaskListStatus")}) })()
}

export function DescribeWorkflowExecutionRequest(t: apiv1.DescribeWorkflowExecutionRequest | $.VarRef<apiv1.DescribeWorkflowExecutionRequest> | null): shared.DescribeWorkflowExecutionRequest | $.VarRef<shared.DescribeWorkflowExecutionRequest> | null {
	const t$: apiv1.DescribeWorkflowExecutionRequest = t == null ? $.pointerTarget<apiv1.DescribeWorkflowExecutionRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.DescribeWorkflowExecutionRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField2 = __goscript_types.WorkflowExecution((t$ as apiv1.DescribeWorkflowExecutionRequest).WorkflowExecution); const __goscriptLiteralField3 = __goscript__enum.QueryConsistencyLevel((t$ as apiv1.DescribeWorkflowExecutionRequest).QueryConsistencyLevel); return new shared.DescribeWorkflowExecutionRequest({Domain: $.fieldRef((t$ as apiv1.DescribeWorkflowExecutionRequest)._fields, "Domain"), Execution: __goscriptLiteralField2, QueryConsistencyLevel: __goscriptLiteralField3}) })()
}

export function DiagnoseWorkflowExecutionRequest(t: apiv1.DiagnoseWorkflowExecutionRequest | $.VarRef<apiv1.DiagnoseWorkflowExecutionRequest> | null): shared.DiagnoseWorkflowExecutionRequest | $.VarRef<shared.DiagnoseWorkflowExecutionRequest> | null {
	const t$: apiv1.DiagnoseWorkflowExecutionRequest = t == null ? $.pointerTarget<apiv1.DiagnoseWorkflowExecutionRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.DiagnoseWorkflowExecutionRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField4 = __goscript_types.WorkflowExecution((t$ as apiv1.DiagnoseWorkflowExecutionRequest).WorkflowExecution); return new shared.DiagnoseWorkflowExecutionRequest({Domain: $.fieldRef((t$ as apiv1.DiagnoseWorkflowExecutionRequest)._fields, "Domain"), WorkflowExecution: __goscriptLiteralField4, Identity: $.fieldRef((t$ as apiv1.DiagnoseWorkflowExecutionRequest)._fields, "Identity")}) })()
}

export function GetWorkflowExecutionHistoryRequest(t: apiv1.GetWorkflowExecutionHistoryRequest | $.VarRef<apiv1.GetWorkflowExecutionHistoryRequest> | null): shared.GetWorkflowExecutionHistoryRequest | $.VarRef<shared.GetWorkflowExecutionHistoryRequest> | null {
	const t$: apiv1.GetWorkflowExecutionHistoryRequest = t == null ? $.pointerTarget<apiv1.GetWorkflowExecutionHistoryRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.GetWorkflowExecutionHistoryRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField5 = __goscript_types.WorkflowExecution((t$ as apiv1.GetWorkflowExecutionHistoryRequest).WorkflowExecution); const __goscriptLiteralField6 = __goscript__enum.EventFilterType((t$ as apiv1.GetWorkflowExecutionHistoryRequest).HistoryEventFilterType); const __goscriptLiteralField7 = __goscript__enum.QueryConsistencyLevel((t$ as apiv1.GetWorkflowExecutionHistoryRequest).QueryConsistencyLevel); return new shared.GetWorkflowExecutionHistoryRequest({Domain: $.fieldRef((t$ as apiv1.GetWorkflowExecutionHistoryRequest)._fields, "Domain"), Execution: __goscriptLiteralField5, MaximumPageSize: $.fieldRef((t$ as apiv1.GetWorkflowExecutionHistoryRequest)._fields, "PageSize"), NextPageToken: (t$ as apiv1.GetWorkflowExecutionHistoryRequest).NextPageToken, WaitForNewEvent: $.fieldRef((t$ as apiv1.GetWorkflowExecutionHistoryRequest)._fields, "WaitForNewEvent"), HistoryEventFilterType: __goscriptLiteralField6, SkipArchival: $.fieldRef((t$ as apiv1.GetWorkflowExecutionHistoryRequest)._fields, "SkipArchival"), QueryConsistencyLevel: __goscriptLiteralField7}) })()
}

export function ListArchivedWorkflowExecutionsRequest(t: apiv1.ListArchivedWorkflowExecutionsRequest | $.VarRef<apiv1.ListArchivedWorkflowExecutionsRequest> | null): shared.ListArchivedWorkflowExecutionsRequest | $.VarRef<shared.ListArchivedWorkflowExecutionsRequest> | null {
	const t$: apiv1.ListArchivedWorkflowExecutionsRequest = t == null ? $.pointerTarget<apiv1.ListArchivedWorkflowExecutionsRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ListArchivedWorkflowExecutionsRequest>(t)
	if (t == null) {
		return null
	}
	return new shared.ListArchivedWorkflowExecutionsRequest({Domain: $.fieldRef((t$ as apiv1.ListArchivedWorkflowExecutionsRequest)._fields, "Domain"), PageSize: $.fieldRef((t$ as apiv1.ListArchivedWorkflowExecutionsRequest)._fields, "PageSize"), NextPageToken: (t$ as apiv1.ListArchivedWorkflowExecutionsRequest).NextPageToken, Query: $.fieldRef((t$ as apiv1.ListArchivedWorkflowExecutionsRequest)._fields, "Query")})
}

export function ListDomainsRequest(t: apiv1.ListDomainsRequest | $.VarRef<apiv1.ListDomainsRequest> | null): shared.ListDomainsRequest | $.VarRef<shared.ListDomainsRequest> | null {
	const t$: apiv1.ListDomainsRequest = t == null ? $.pointerTarget<apiv1.ListDomainsRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ListDomainsRequest>(t)
	if (t == null) {
		return null
	}
	return new shared.ListDomainsRequest({PageSize: $.fieldRef((t$ as apiv1.ListDomainsRequest)._fields, "PageSize"), NextPageToken: (t$ as apiv1.ListDomainsRequest).NextPageToken})
}

export function ListTaskListPartitionsRequest(t: apiv1.ListTaskListPartitionsRequest | $.VarRef<apiv1.ListTaskListPartitionsRequest> | null): shared.ListTaskListPartitionsRequest | $.VarRef<shared.ListTaskListPartitionsRequest> | null {
	const t$: apiv1.ListTaskListPartitionsRequest = t == null ? $.pointerTarget<apiv1.ListTaskListPartitionsRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ListTaskListPartitionsRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField8 = __goscript_types.TaskList((t$ as apiv1.ListTaskListPartitionsRequest).TaskList); return new shared.ListTaskListPartitionsRequest({Domain: $.fieldRef((t$ as apiv1.ListTaskListPartitionsRequest)._fields, "Domain"), TaskList: __goscriptLiteralField8}) })()
}

export function ListWorkflowExecutionsRequest(t: apiv1.ListWorkflowExecutionsRequest | $.VarRef<apiv1.ListWorkflowExecutionsRequest> | null): shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null {
	const t$: apiv1.ListWorkflowExecutionsRequest = t == null ? $.pointerTarget<apiv1.ListWorkflowExecutionsRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ListWorkflowExecutionsRequest>(t)
	if (t == null) {
		return null
	}
	return new shared.ListWorkflowExecutionsRequest({Domain: $.fieldRef((t$ as apiv1.ListWorkflowExecutionsRequest)._fields, "Domain"), PageSize: $.fieldRef((t$ as apiv1.ListWorkflowExecutionsRequest)._fields, "PageSize"), NextPageToken: (t$ as apiv1.ListWorkflowExecutionsRequest).NextPageToken, Query: $.fieldRef((t$ as apiv1.ListWorkflowExecutionsRequest)._fields, "Query")})
}

export function PollForActivityTaskRequest(t: apiv1.PollForActivityTaskRequest | $.VarRef<apiv1.PollForActivityTaskRequest> | null): shared.PollForActivityTaskRequest | $.VarRef<shared.PollForActivityTaskRequest> | null {
	const t$: apiv1.PollForActivityTaskRequest = t == null ? $.pointerTarget<apiv1.PollForActivityTaskRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.PollForActivityTaskRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField9 = __goscript_types.TaskList((t$ as apiv1.PollForActivityTaskRequest).TaskList); const __goscriptLiteralField10 = __goscript_types.TaskListMetadata((t$ as apiv1.PollForActivityTaskRequest).TaskListMetadata); return new shared.PollForActivityTaskRequest({Domain: $.fieldRef((t$ as apiv1.PollForActivityTaskRequest)._fields, "Domain"), TaskList: __goscriptLiteralField9, Identity: $.fieldRef((t$ as apiv1.PollForActivityTaskRequest)._fields, "Identity"), TaskListMetadata: __goscriptLiteralField10}) })()
}

export function PollForDecisionTaskRequest(t: apiv1.PollForDecisionTaskRequest | $.VarRef<apiv1.PollForDecisionTaskRequest> | null): shared.PollForDecisionTaskRequest | $.VarRef<shared.PollForDecisionTaskRequest> | null {
	const t$: apiv1.PollForDecisionTaskRequest = t == null ? $.pointerTarget<apiv1.PollForDecisionTaskRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.PollForDecisionTaskRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField11 = __goscript_types.TaskList((t$ as apiv1.PollForDecisionTaskRequest).TaskList); return new shared.PollForDecisionTaskRequest({Domain: $.fieldRef((t$ as apiv1.PollForDecisionTaskRequest)._fields, "Domain"), TaskList: __goscriptLiteralField11, Identity: $.fieldRef((t$ as apiv1.PollForDecisionTaskRequest)._fields, "Identity"), BinaryChecksum: $.fieldRef((t$ as apiv1.PollForDecisionTaskRequest)._fields, "BinaryChecksum")}) })()
}

export function QueryWorkflowRequest(t: apiv1.QueryWorkflowRequest | $.VarRef<apiv1.QueryWorkflowRequest> | null): shared.QueryWorkflowRequest | $.VarRef<shared.QueryWorkflowRequest> | null {
	const t$: apiv1.QueryWorkflowRequest = t == null ? $.pointerTarget<apiv1.QueryWorkflowRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.QueryWorkflowRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField12 = __goscript_types.WorkflowExecution((t$ as apiv1.QueryWorkflowRequest).WorkflowExecution); const __goscriptLiteralField13 = __goscript_types.WorkflowQuery((t$ as apiv1.QueryWorkflowRequest).Query); const __goscriptLiteralField14 = __goscript__enum.QueryRejectCondition((t$ as apiv1.QueryWorkflowRequest).QueryRejectCondition); const __goscriptLiteralField15 = __goscript__enum.QueryConsistencyLevel((t$ as apiv1.QueryWorkflowRequest).QueryConsistencyLevel); return new shared.QueryWorkflowRequest({Domain: $.fieldRef((t$ as apiv1.QueryWorkflowRequest)._fields, "Domain"), Execution: __goscriptLiteralField12, Query: __goscriptLiteralField13, QueryRejectCondition: __goscriptLiteralField14, QueryConsistencyLevel: __goscriptLiteralField15}) })()
}

export function RecordActivityTaskHeartbeatByIDRequest(t: apiv1.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<apiv1.RecordActivityTaskHeartbeatByIDRequest> | null): shared.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<shared.RecordActivityTaskHeartbeatByIDRequest> | null {
	const t$: apiv1.RecordActivityTaskHeartbeatByIDRequest = t == null ? $.pointerTarget<apiv1.RecordActivityTaskHeartbeatByIDRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RecordActivityTaskHeartbeatByIDRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField16 = __goscript_types.WorkflowID((t$ as apiv1.RecordActivityTaskHeartbeatByIDRequest).WorkflowExecution); const __goscriptLiteralField17 = __goscript_types.RunID((t$ as apiv1.RecordActivityTaskHeartbeatByIDRequest).WorkflowExecution); const __goscriptLiteralField18 = __goscript_types.Payload((t$ as apiv1.RecordActivityTaskHeartbeatByIDRequest).Details); return new shared.RecordActivityTaskHeartbeatByIDRequest({Domain: $.fieldRef((t$ as apiv1.RecordActivityTaskHeartbeatByIDRequest)._fields, "Domain"), WorkflowID: __goscriptLiteralField16, RunID: __goscriptLiteralField17, ActivityID: $.fieldRef((t$ as apiv1.RecordActivityTaskHeartbeatByIDRequest)._fields, "ActivityId"), Details: __goscriptLiteralField18, Identity: $.fieldRef((t$ as apiv1.RecordActivityTaskHeartbeatByIDRequest)._fields, "Identity")}) })()
}

export function RecordActivityTaskHeartbeatRequest(t: apiv1.RecordActivityTaskHeartbeatRequest | $.VarRef<apiv1.RecordActivityTaskHeartbeatRequest> | null): shared.RecordActivityTaskHeartbeatRequest | $.VarRef<shared.RecordActivityTaskHeartbeatRequest> | null {
	const t$: apiv1.RecordActivityTaskHeartbeatRequest = t == null ? $.pointerTarget<apiv1.RecordActivityTaskHeartbeatRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RecordActivityTaskHeartbeatRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField19 = __goscript_types.Payload((t$ as apiv1.RecordActivityTaskHeartbeatRequest).Details); return new shared.RecordActivityTaskHeartbeatRequest({TaskToken: (t$ as apiv1.RecordActivityTaskHeartbeatRequest).TaskToken, Details: __goscriptLiteralField19, Identity: $.fieldRef((t$ as apiv1.RecordActivityTaskHeartbeatRequest)._fields, "Identity")}) })()
}

export function RegisterDomainRequest(t: apiv1.RegisterDomainRequest | $.VarRef<apiv1.RegisterDomainRequest> | null): shared.RegisterDomainRequest | $.VarRef<shared.RegisterDomainRequest> | null {
	const t$: apiv1.RegisterDomainRequest = t == null ? $.pointerTarget<apiv1.RegisterDomainRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RegisterDomainRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField20 = __goscript_helpers.durationToDays((t$ as apiv1.RegisterDomainRequest).WorkflowExecutionRetentionPeriod); const __goscriptLiteralField21 = __goscript_types.ClusterReplicationConfigurationArray((t$ as apiv1.RegisterDomainRequest).Clusters); const __goscriptLiteralField22 = __goscript_types.ActiveClusters((t$ as apiv1.RegisterDomainRequest).ActiveClusters); const __goscriptLiteralField23 = __goscript__enum.ArchivalStatus((t$ as apiv1.RegisterDomainRequest).HistoryArchivalStatus); const __goscriptLiteralField24 = __goscript__enum.ArchivalStatus((t$ as apiv1.RegisterDomainRequest).VisibilityArchivalStatus); return new shared.RegisterDomainRequest({Name: $.fieldRef((t$ as apiv1.RegisterDomainRequest)._fields, "Name"), Description: $.fieldRef((t$ as apiv1.RegisterDomainRequest)._fields, "Description"), OwnerEmail: $.fieldRef((t$ as apiv1.RegisterDomainRequest)._fields, "OwnerEmail"), WorkflowExecutionRetentionPeriodInDays: __goscriptLiteralField20, Clusters: __goscriptLiteralField21, ActiveClusterName: $.fieldRef((t$ as apiv1.RegisterDomainRequest)._fields, "ActiveClusterName"), ActiveClusters: __goscriptLiteralField22, Data: (t$ as apiv1.RegisterDomainRequest).Data, SecurityToken: $.fieldRef((t$ as apiv1.RegisterDomainRequest)._fields, "SecurityToken"), IsGlobalDomain: $.fieldRef((t$ as apiv1.RegisterDomainRequest)._fields, "IsGlobalDomain"), HistoryArchivalStatus: __goscriptLiteralField23, HistoryArchivalURI: $.fieldRef((t$ as apiv1.RegisterDomainRequest)._fields, "HistoryArchivalUri"), VisibilityArchivalStatus: __goscriptLiteralField24, VisibilityArchivalURI: $.fieldRef((t$ as apiv1.RegisterDomainRequest)._fields, "VisibilityArchivalUri")}) })()
}

export function RequestCancelWorkflowExecutionRequest(t: apiv1.RequestCancelWorkflowExecutionRequest | $.VarRef<apiv1.RequestCancelWorkflowExecutionRequest> | null): shared.RequestCancelWorkflowExecutionRequest | $.VarRef<shared.RequestCancelWorkflowExecutionRequest> | null {
	const t$: apiv1.RequestCancelWorkflowExecutionRequest = t == null ? $.pointerTarget<apiv1.RequestCancelWorkflowExecutionRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RequestCancelWorkflowExecutionRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField25 = __goscript_types.WorkflowExecution((t$ as apiv1.RequestCancelWorkflowExecutionRequest).WorkflowExecution); return new shared.RequestCancelWorkflowExecutionRequest({Domain: $.fieldRef((t$ as apiv1.RequestCancelWorkflowExecutionRequest)._fields, "Domain"), WorkflowExecution: __goscriptLiteralField25, Identity: $.fieldRef((t$ as apiv1.RequestCancelWorkflowExecutionRequest)._fields, "Identity"), RequestId: $.fieldRef((t$ as apiv1.RequestCancelWorkflowExecutionRequest)._fields, "RequestId")}) })()
}

export function ResetStickyTaskListRequest(t: apiv1.ResetStickyTaskListRequest | $.VarRef<apiv1.ResetStickyTaskListRequest> | null): shared.ResetStickyTaskListRequest | $.VarRef<shared.ResetStickyTaskListRequest> | null {
	const t$: apiv1.ResetStickyTaskListRequest = t == null ? $.pointerTarget<apiv1.ResetStickyTaskListRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ResetStickyTaskListRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField26 = __goscript_types.WorkflowExecution((t$ as apiv1.ResetStickyTaskListRequest).WorkflowExecution); return new shared.ResetStickyTaskListRequest({Domain: $.fieldRef((t$ as apiv1.ResetStickyTaskListRequest)._fields, "Domain"), Execution: __goscriptLiteralField26}) })()
}

export function ResetWorkflowExecutionRequest(t: apiv1.ResetWorkflowExecutionRequest | $.VarRef<apiv1.ResetWorkflowExecutionRequest> | null): shared.ResetWorkflowExecutionRequest | $.VarRef<shared.ResetWorkflowExecutionRequest> | null {
	const t$: apiv1.ResetWorkflowExecutionRequest = t == null ? $.pointerTarget<apiv1.ResetWorkflowExecutionRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ResetWorkflowExecutionRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField27 = __goscript_types.WorkflowExecution((t$ as apiv1.ResetWorkflowExecutionRequest).WorkflowExecution); return new shared.ResetWorkflowExecutionRequest({Domain: $.fieldRef((t$ as apiv1.ResetWorkflowExecutionRequest)._fields, "Domain"), WorkflowExecution: __goscriptLiteralField27, Reason: $.fieldRef((t$ as apiv1.ResetWorkflowExecutionRequest)._fields, "Reason"), DecisionFinishEventId: $.fieldRef((t$ as apiv1.ResetWorkflowExecutionRequest)._fields, "DecisionFinishEventId"), RequestId: $.fieldRef((t$ as apiv1.ResetWorkflowExecutionRequest)._fields, "RequestId"), SkipSignalReapply: $.fieldRef((t$ as apiv1.ResetWorkflowExecutionRequest)._fields, "SkipSignalReapply")}) })()
}

export function RespondActivityTaskCanceledByIDRequest(t: apiv1.RespondActivityTaskCanceledByIDRequest | $.VarRef<apiv1.RespondActivityTaskCanceledByIDRequest> | null): shared.RespondActivityTaskCanceledByIDRequest | $.VarRef<shared.RespondActivityTaskCanceledByIDRequest> | null {
	const t$: apiv1.RespondActivityTaskCanceledByIDRequest = t == null ? $.pointerTarget<apiv1.RespondActivityTaskCanceledByIDRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RespondActivityTaskCanceledByIDRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField28 = __goscript_types.WorkflowID((t$ as apiv1.RespondActivityTaskCanceledByIDRequest).WorkflowExecution); const __goscriptLiteralField29 = __goscript_types.RunID((t$ as apiv1.RespondActivityTaskCanceledByIDRequest).WorkflowExecution); const __goscriptLiteralField30 = __goscript_types.Payload((t$ as apiv1.RespondActivityTaskCanceledByIDRequest).Details); return new shared.RespondActivityTaskCanceledByIDRequest({Domain: $.fieldRef((t$ as apiv1.RespondActivityTaskCanceledByIDRequest)._fields, "Domain"), WorkflowID: __goscriptLiteralField28, RunID: __goscriptLiteralField29, ActivityID: $.fieldRef((t$ as apiv1.RespondActivityTaskCanceledByIDRequest)._fields, "ActivityId"), Details: __goscriptLiteralField30, Identity: $.fieldRef((t$ as apiv1.RespondActivityTaskCanceledByIDRequest)._fields, "Identity")}) })()
}

export function RespondActivityTaskCanceledRequest(t: apiv1.RespondActivityTaskCanceledRequest | $.VarRef<apiv1.RespondActivityTaskCanceledRequest> | null): shared.RespondActivityTaskCanceledRequest | $.VarRef<shared.RespondActivityTaskCanceledRequest> | null {
	const t$: apiv1.RespondActivityTaskCanceledRequest = t == null ? $.pointerTarget<apiv1.RespondActivityTaskCanceledRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RespondActivityTaskCanceledRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField31 = __goscript_types.Payload((t$ as apiv1.RespondActivityTaskCanceledRequest).Details); return new shared.RespondActivityTaskCanceledRequest({TaskToken: (t$ as apiv1.RespondActivityTaskCanceledRequest).TaskToken, Details: __goscriptLiteralField31, Identity: $.fieldRef((t$ as apiv1.RespondActivityTaskCanceledRequest)._fields, "Identity")}) })()
}

export function RespondActivityTaskCompletedByIDRequest(t: apiv1.RespondActivityTaskCompletedByIDRequest | $.VarRef<apiv1.RespondActivityTaskCompletedByIDRequest> | null): shared.RespondActivityTaskCompletedByIDRequest | $.VarRef<shared.RespondActivityTaskCompletedByIDRequest> | null {
	const t$: apiv1.RespondActivityTaskCompletedByIDRequest = t == null ? $.pointerTarget<apiv1.RespondActivityTaskCompletedByIDRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RespondActivityTaskCompletedByIDRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField32 = __goscript_types.WorkflowID((t$ as apiv1.RespondActivityTaskCompletedByIDRequest).WorkflowExecution); const __goscriptLiteralField33 = __goscript_types.RunID((t$ as apiv1.RespondActivityTaskCompletedByIDRequest).WorkflowExecution); const __goscriptLiteralField34 = __goscript_types.Payload((t$ as apiv1.RespondActivityTaskCompletedByIDRequest).Result); return new shared.RespondActivityTaskCompletedByIDRequest({Domain: $.fieldRef((t$ as apiv1.RespondActivityTaskCompletedByIDRequest)._fields, "Domain"), WorkflowID: __goscriptLiteralField32, RunID: __goscriptLiteralField33, ActivityID: $.fieldRef((t$ as apiv1.RespondActivityTaskCompletedByIDRequest)._fields, "ActivityId"), Result: __goscriptLiteralField34, Identity: $.fieldRef((t$ as apiv1.RespondActivityTaskCompletedByIDRequest)._fields, "Identity")}) })()
}

export function RespondActivityTaskCompletedRequest(t: apiv1.RespondActivityTaskCompletedRequest | $.VarRef<apiv1.RespondActivityTaskCompletedRequest> | null): shared.RespondActivityTaskCompletedRequest | $.VarRef<shared.RespondActivityTaskCompletedRequest> | null {
	const t$: apiv1.RespondActivityTaskCompletedRequest = t == null ? $.pointerTarget<apiv1.RespondActivityTaskCompletedRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RespondActivityTaskCompletedRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField35 = __goscript_types.Payload((t$ as apiv1.RespondActivityTaskCompletedRequest).Result); return new shared.RespondActivityTaskCompletedRequest({TaskToken: (t$ as apiv1.RespondActivityTaskCompletedRequest).TaskToken, Result: __goscriptLiteralField35, Identity: $.fieldRef((t$ as apiv1.RespondActivityTaskCompletedRequest)._fields, "Identity")}) })()
}

export function RespondActivityTaskFailedByIDRequest(t: apiv1.RespondActivityTaskFailedByIDRequest | $.VarRef<apiv1.RespondActivityTaskFailedByIDRequest> | null): shared.RespondActivityTaskFailedByIDRequest | $.VarRef<shared.RespondActivityTaskFailedByIDRequest> | null {
	const t$: apiv1.RespondActivityTaskFailedByIDRequest = t == null ? $.pointerTarget<apiv1.RespondActivityTaskFailedByIDRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RespondActivityTaskFailedByIDRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField36 = __goscript_types.WorkflowID((t$ as apiv1.RespondActivityTaskFailedByIDRequest).WorkflowExecution); const __goscriptLiteralField37 = __goscript_types.RunID((t$ as apiv1.RespondActivityTaskFailedByIDRequest).WorkflowExecution); const __goscriptLiteralField38 = __goscript_types.FailureReason((t$ as apiv1.RespondActivityTaskFailedByIDRequest).Failure); const __goscriptLiteralField39 = __goscript_types.FailureDetails((t$ as apiv1.RespondActivityTaskFailedByIDRequest).Failure); const __goscriptLiteralField40 = __goscript_types.FailureOptions((t$ as apiv1.RespondActivityTaskFailedByIDRequest).Failure); const __goscriptLiteralField41 = __goscript_types.Payload((t$ as apiv1.RespondActivityTaskFailedByIDRequest).HeartbeatDetails); return new shared.RespondActivityTaskFailedByIDRequest({Domain: $.fieldRef((t$ as apiv1.RespondActivityTaskFailedByIDRequest)._fields, "Domain"), WorkflowID: __goscriptLiteralField36, RunID: __goscriptLiteralField37, ActivityID: $.fieldRef((t$ as apiv1.RespondActivityTaskFailedByIDRequest)._fields, "ActivityId"), Reason: __goscriptLiteralField38, Details: __goscriptLiteralField39, FailureOptions: __goscriptLiteralField40, Identity: $.fieldRef((t$ as apiv1.RespondActivityTaskFailedByIDRequest)._fields, "Identity"), HeartbeatDetails: __goscriptLiteralField41}) })()
}

export function RespondActivityTaskFailedRequest(t: apiv1.RespondActivityTaskFailedRequest | $.VarRef<apiv1.RespondActivityTaskFailedRequest> | null): shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null {
	const t$: apiv1.RespondActivityTaskFailedRequest = t == null ? $.pointerTarget<apiv1.RespondActivityTaskFailedRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RespondActivityTaskFailedRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField42 = __goscript_types.FailureReason((t$ as apiv1.RespondActivityTaskFailedRequest).Failure); const __goscriptLiteralField43 = __goscript_types.FailureDetails((t$ as apiv1.RespondActivityTaskFailedRequest).Failure); const __goscriptLiteralField44 = __goscript_types.FailureOptions((t$ as apiv1.RespondActivityTaskFailedRequest).Failure); const __goscriptLiteralField45 = __goscript_types.Payload((t$ as apiv1.RespondActivityTaskFailedRequest).HeartbeatDetails); return new shared.RespondActivityTaskFailedRequest({TaskToken: (t$ as apiv1.RespondActivityTaskFailedRequest).TaskToken, Reason: __goscriptLiteralField42, Details: __goscriptLiteralField43, FailureOptions: __goscriptLiteralField44, Identity: $.fieldRef((t$ as apiv1.RespondActivityTaskFailedRequest)._fields, "Identity"), HeartbeatDetails: __goscriptLiteralField45}) })()
}

export function RespondDecisionTaskCompletedRequest(t: apiv1.RespondDecisionTaskCompletedRequest | $.VarRef<apiv1.RespondDecisionTaskCompletedRequest> | null): shared.RespondDecisionTaskCompletedRequest | $.VarRef<shared.RespondDecisionTaskCompletedRequest> | null {
	const t$: apiv1.RespondDecisionTaskCompletedRequest = t == null ? $.pointerTarget<apiv1.RespondDecisionTaskCompletedRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RespondDecisionTaskCompletedRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField46 = __goscript_decision.DecisionArray((t$ as apiv1.RespondDecisionTaskCompletedRequest).Decisions); const __goscriptLiteralField47 = __goscript_types.StickyExecutionAttributes((t$ as apiv1.RespondDecisionTaskCompletedRequest).StickyAttributes); const __goscriptLiteralField48 = __goscript_types.WorkflowQueryResultMap((t$ as apiv1.RespondDecisionTaskCompletedRequest).QueryResults); return new shared.RespondDecisionTaskCompletedRequest({TaskToken: (t$ as apiv1.RespondDecisionTaskCompletedRequest).TaskToken, Decisions: __goscriptLiteralField46, ExecutionContext: (t$ as apiv1.RespondDecisionTaskCompletedRequest).ExecutionContext, Identity: $.fieldRef((t$ as apiv1.RespondDecisionTaskCompletedRequest)._fields, "Identity"), StickyAttributes: __goscriptLiteralField47, ReturnNewDecisionTask: $.fieldRef((t$ as apiv1.RespondDecisionTaskCompletedRequest)._fields, "ReturnNewDecisionTask"), ForceCreateNewDecisionTask: $.fieldRef((t$ as apiv1.RespondDecisionTaskCompletedRequest)._fields, "ForceCreateNewDecisionTask"), BinaryChecksum: $.fieldRef((t$ as apiv1.RespondDecisionTaskCompletedRequest)._fields, "BinaryChecksum"), QueryResults: __goscriptLiteralField48}) })()
}

export function RespondDecisionTaskFailedRequest(t: apiv1.RespondDecisionTaskFailedRequest | $.VarRef<apiv1.RespondDecisionTaskFailedRequest> | null): shared.RespondDecisionTaskFailedRequest | $.VarRef<shared.RespondDecisionTaskFailedRequest> | null {
	const t$: apiv1.RespondDecisionTaskFailedRequest = t == null ? $.pointerTarget<apiv1.RespondDecisionTaskFailedRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RespondDecisionTaskFailedRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField49 = __goscript__enum.DecisionTaskFailedCause((t$ as apiv1.RespondDecisionTaskFailedRequest).Cause); const __goscriptLiteralField50 = __goscript_types.Payload((t$ as apiv1.RespondDecisionTaskFailedRequest).Details); return new shared.RespondDecisionTaskFailedRequest({TaskToken: (t$ as apiv1.RespondDecisionTaskFailedRequest).TaskToken, Cause: __goscriptLiteralField49, Details: __goscriptLiteralField50, Identity: $.fieldRef((t$ as apiv1.RespondDecisionTaskFailedRequest)._fields, "Identity"), BinaryChecksum: $.fieldRef((t$ as apiv1.RespondDecisionTaskFailedRequest)._fields, "BinaryChecksum")}) })()
}

export function RespondQueryTaskCompletedRequest(t: apiv1.RespondQueryTaskCompletedRequest | $.VarRef<apiv1.RespondQueryTaskCompletedRequest> | null): shared.RespondQueryTaskCompletedRequest | $.VarRef<shared.RespondQueryTaskCompletedRequest> | null {
	const t$: apiv1.RespondQueryTaskCompletedRequest = t == null ? $.pointerTarget<apiv1.RespondQueryTaskCompletedRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RespondQueryTaskCompletedRequest>(t)
	if (t == null) {
		return null
	}
	let request: shared.RespondQueryTaskCompletedRequest | $.VarRef<shared.RespondQueryTaskCompletedRequest> | null = (() => { const __goscriptLiteralField51 = __goscript_types.WorkerVersionInfo((t$ as apiv1.RespondQueryTaskCompletedRequest).WorkerVersionInfo); return new shared.RespondQueryTaskCompletedRequest({TaskToken: (t$ as apiv1.RespondQueryTaskCompletedRequest).TaskToken, WorkerVersionInfo: __goscriptLiteralField51}) })()
	let request$: shared.RespondQueryTaskCompletedRequest = request == null ? $.pointerTarget<shared.RespondQueryTaskCompletedRequest>(request) : (request as any).__isVarRef === true ? (request as any).value : (request as any).__goValue === undefined ? (request as any) : $.pointerTarget<shared.RespondQueryTaskCompletedRequest>(request)
	if ((t$ as apiv1.RespondQueryTaskCompletedRequest).Result != null) {
		;(request$ as shared.RespondQueryTaskCompletedRequest).CompletedType = __goscript__enum.QueryTaskCompletedType($.pointerValue<apiv1.WorkflowQueryResult>((t$ as apiv1.RespondQueryTaskCompletedRequest).Result).ResultType);
		;(request$ as shared.RespondQueryTaskCompletedRequest).QueryResult = __goscript_types.Payload($.pointerValue<apiv1.WorkflowQueryResult>((t$ as apiv1.RespondQueryTaskCompletedRequest).Result).Answer);
		;(request$ as shared.RespondQueryTaskCompletedRequest).ErrorMessage = $.fieldRef($.pointerValue<apiv1.WorkflowQueryResult>((t$ as apiv1.RespondQueryTaskCompletedRequest).Result)._fields, "ErrorMessage")
	}
	return request
}

export function ScanWorkflowExecutionsRequest(t: apiv1.ScanWorkflowExecutionsRequest | $.VarRef<apiv1.ScanWorkflowExecutionsRequest> | null): shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null {
	const t$: apiv1.ScanWorkflowExecutionsRequest = t == null ? $.pointerTarget<apiv1.ScanWorkflowExecutionsRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ScanWorkflowExecutionsRequest>(t)
	if (t == null) {
		return null
	}
	return new shared.ListWorkflowExecutionsRequest({Domain: $.fieldRef((t$ as apiv1.ScanWorkflowExecutionsRequest)._fields, "Domain"), PageSize: $.fieldRef((t$ as apiv1.ScanWorkflowExecutionsRequest)._fields, "PageSize"), NextPageToken: (t$ as apiv1.ScanWorkflowExecutionsRequest).NextPageToken, Query: $.fieldRef((t$ as apiv1.ScanWorkflowExecutionsRequest)._fields, "Query")})
}

export function SignalWithStartWorkflowExecutionRequest(t: apiv1.SignalWithStartWorkflowExecutionRequest | $.VarRef<apiv1.SignalWithStartWorkflowExecutionRequest> | null): shared.SignalWithStartWorkflowExecutionRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionRequest> | null {
	const t$: apiv1.SignalWithStartWorkflowExecutionRequest = t == null ? $.pointerTarget<apiv1.SignalWithStartWorkflowExecutionRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.SignalWithStartWorkflowExecutionRequest>(t)
	if (t == null) {
		return null
	}
	let request: shared.SignalWithStartWorkflowExecutionRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionRequest> | null = (() => { const __goscriptLiteralField52 = __goscript_types.Payload((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).SignalInput); return new shared.SignalWithStartWorkflowExecutionRequest({SignalName: $.fieldRef((t$ as apiv1.SignalWithStartWorkflowExecutionRequest)._fields, "SignalName"), SignalInput: __goscriptLiteralField52, Control: (t$ as apiv1.SignalWithStartWorkflowExecutionRequest).Control}) })()
	let request$: shared.SignalWithStartWorkflowExecutionRequest = request == null ? $.pointerTarget<shared.SignalWithStartWorkflowExecutionRequest>(request) : (request as any).__isVarRef === true ? (request as any).value : (request as any).__goValue === undefined ? (request as any) : $.pointerTarget<shared.SignalWithStartWorkflowExecutionRequest>(request)

	if ((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest != null) {
		;(request$ as shared.SignalWithStartWorkflowExecutionRequest).Domain = $.fieldRef($.pointerValue<apiv1.StartWorkflowExecutionRequest>((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest)._fields, "Domain");
		;(request$ as shared.SignalWithStartWorkflowExecutionRequest).WorkflowId = $.fieldRef($.pointerValue<apiv1.StartWorkflowExecutionRequest>((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest)._fields, "WorkflowId");
		;(request$ as shared.SignalWithStartWorkflowExecutionRequest).WorkflowType = __goscript_types.WorkflowType($.pointerValue<apiv1.StartWorkflowExecutionRequest>((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest).WorkflowType);
		;(request$ as shared.SignalWithStartWorkflowExecutionRequest).TaskList = __goscript_types.TaskList($.pointerValue<apiv1.StartWorkflowExecutionRequest>((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest).TaskList);
		;(request$ as shared.SignalWithStartWorkflowExecutionRequest).Input = __goscript_types.Payload($.pointerValue<apiv1.StartWorkflowExecutionRequest>((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest).Input);
		;(request$ as shared.SignalWithStartWorkflowExecutionRequest).ExecutionStartToCloseTimeoutSeconds = __goscript_helpers.durationToSeconds($.pointerValue<apiv1.StartWorkflowExecutionRequest>((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest).ExecutionStartToCloseTimeout);
		;(request$ as shared.SignalWithStartWorkflowExecutionRequest).TaskStartToCloseTimeoutSeconds = __goscript_helpers.durationToSeconds($.pointerValue<apiv1.StartWorkflowExecutionRequest>((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest).TaskStartToCloseTimeout);
		;(request$ as shared.SignalWithStartWorkflowExecutionRequest).Identity = $.fieldRef($.pointerValue<apiv1.StartWorkflowExecutionRequest>((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest)._fields, "Identity");
		;(request$ as shared.SignalWithStartWorkflowExecutionRequest).RequestId = $.fieldRef($.pointerValue<apiv1.StartWorkflowExecutionRequest>((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest)._fields, "RequestId");
		;(request$ as shared.SignalWithStartWorkflowExecutionRequest).WorkflowIdReusePolicy = __goscript__enum.WorkflowIDReusePolicy($.pointerValue<apiv1.StartWorkflowExecutionRequest>((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest).WorkflowIdReusePolicy);
		;(request$ as shared.SignalWithStartWorkflowExecutionRequest).RetryPolicy = __goscript_types.RetryPolicy($.pointerValue<apiv1.StartWorkflowExecutionRequest>((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest).RetryPolicy);
		;(request$ as shared.SignalWithStartWorkflowExecutionRequest).CronSchedule = $.fieldRef($.pointerValue<apiv1.StartWorkflowExecutionRequest>((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest)._fields, "CronSchedule");
		;(request$ as shared.SignalWithStartWorkflowExecutionRequest).Memo = __goscript_types.Memo($.pointerValue<apiv1.StartWorkflowExecutionRequest>((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest).Memo);
		;(request$ as shared.SignalWithStartWorkflowExecutionRequest).SearchAttributes = __goscript_types.SearchAttributes($.pointerValue<apiv1.StartWorkflowExecutionRequest>((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest).SearchAttributes);
		;(request$ as shared.SignalWithStartWorkflowExecutionRequest).Header = __goscript_types.Header($.pointerValue<apiv1.StartWorkflowExecutionRequest>((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest).Header);
		;(request$ as shared.SignalWithStartWorkflowExecutionRequest).CronOverlapPolicy = __goscript__enum.CronOverlapPolicy($.pointerValue<apiv1.StartWorkflowExecutionRequest>((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest).CronOverlapPolicy);
		;(request$ as shared.SignalWithStartWorkflowExecutionRequest).ActiveClusterSelectionPolicy = __goscript_types.ActiveClusterSelectionPolicy($.pointerValue<apiv1.StartWorkflowExecutionRequest>((t$ as apiv1.SignalWithStartWorkflowExecutionRequest).StartRequest).ActiveClusterSelectionPolicy)
	}

	return request
}

export function SignalWorkflowExecutionRequest(t: apiv1.SignalWorkflowExecutionRequest | $.VarRef<apiv1.SignalWorkflowExecutionRequest> | null): shared.SignalWorkflowExecutionRequest | $.VarRef<shared.SignalWorkflowExecutionRequest> | null {
	const t$: apiv1.SignalWorkflowExecutionRequest = t == null ? $.pointerTarget<apiv1.SignalWorkflowExecutionRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.SignalWorkflowExecutionRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField53 = __goscript_types.WorkflowExecution((t$ as apiv1.SignalWorkflowExecutionRequest).WorkflowExecution); const __goscriptLiteralField54 = __goscript_types.Payload((t$ as apiv1.SignalWorkflowExecutionRequest).SignalInput); return new shared.SignalWorkflowExecutionRequest({Domain: $.fieldRef((t$ as apiv1.SignalWorkflowExecutionRequest)._fields, "Domain"), WorkflowExecution: __goscriptLiteralField53, SignalName: $.fieldRef((t$ as apiv1.SignalWorkflowExecutionRequest)._fields, "SignalName"), Input: __goscriptLiteralField54, Identity: $.fieldRef((t$ as apiv1.SignalWorkflowExecutionRequest)._fields, "Identity"), RequestId: $.fieldRef((t$ as apiv1.SignalWorkflowExecutionRequest)._fields, "RequestId"), Control: (t$ as apiv1.SignalWorkflowExecutionRequest).Control}) })()
}

export function StartWorkflowExecutionRequest(t: apiv1.StartWorkflowExecutionRequest | $.VarRef<apiv1.StartWorkflowExecutionRequest> | null): shared.StartWorkflowExecutionRequest | $.VarRef<shared.StartWorkflowExecutionRequest> | null {
	const t$: apiv1.StartWorkflowExecutionRequest = t == null ? $.pointerTarget<apiv1.StartWorkflowExecutionRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.StartWorkflowExecutionRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField55 = __goscript_types.WorkflowType((t$ as apiv1.StartWorkflowExecutionRequest).WorkflowType); const __goscriptLiteralField56 = __goscript_types.TaskList((t$ as apiv1.StartWorkflowExecutionRequest).TaskList); const __goscriptLiteralField57 = __goscript_types.Payload((t$ as apiv1.StartWorkflowExecutionRequest).Input); const __goscriptLiteralField58 = __goscript_helpers.durationToSeconds((t$ as apiv1.StartWorkflowExecutionRequest).ExecutionStartToCloseTimeout); const __goscriptLiteralField59 = __goscript_helpers.durationToSeconds((t$ as apiv1.StartWorkflowExecutionRequest).TaskStartToCloseTimeout); const __goscriptLiteralField60 = __goscript__enum.WorkflowIDReusePolicy((t$ as apiv1.StartWorkflowExecutionRequest).WorkflowIdReusePolicy); const __goscriptLiteralField61 = __goscript_types.RetryPolicy((t$ as apiv1.StartWorkflowExecutionRequest).RetryPolicy); const __goscriptLiteralField62 = __goscript_types.Memo((t$ as apiv1.StartWorkflowExecutionRequest).Memo); const __goscriptLiteralField63 = __goscript_types.SearchAttributes((t$ as apiv1.StartWorkflowExecutionRequest).SearchAttributes); const __goscriptLiteralField64 = __goscript_types.Header((t$ as apiv1.StartWorkflowExecutionRequest).Header); const __goscriptLiteralField65 = __goscript_helpers.durationToSeconds((t$ as apiv1.StartWorkflowExecutionRequest).DelayStart); const __goscriptLiteralField66 = __goscript_helpers.durationToSeconds((t$ as apiv1.StartWorkflowExecutionRequest).JitterStart); const __goscriptLiteralField67 = __goscript_helpers.timeToUnixNano((t$ as apiv1.StartWorkflowExecutionRequest).FirstRunAt); const __goscriptLiteralField68 = __goscript__enum.CronOverlapPolicy((t$ as apiv1.StartWorkflowExecutionRequest).CronOverlapPolicy); const __goscriptLiteralField69 = __goscript_types.ActiveClusterSelectionPolicy((t$ as apiv1.StartWorkflowExecutionRequest).ActiveClusterSelectionPolicy); return new shared.StartWorkflowExecutionRequest({Domain: $.fieldRef((t$ as apiv1.StartWorkflowExecutionRequest)._fields, "Domain"), WorkflowId: $.fieldRef((t$ as apiv1.StartWorkflowExecutionRequest)._fields, "WorkflowId"), WorkflowType: __goscriptLiteralField55, TaskList: __goscriptLiteralField56, Input: __goscriptLiteralField57, ExecutionStartToCloseTimeoutSeconds: __goscriptLiteralField58, TaskStartToCloseTimeoutSeconds: __goscriptLiteralField59, Identity: $.fieldRef((t$ as apiv1.StartWorkflowExecutionRequest)._fields, "Identity"), RequestId: $.fieldRef((t$ as apiv1.StartWorkflowExecutionRequest)._fields, "RequestId"), WorkflowIdReusePolicy: __goscriptLiteralField60, RetryPolicy: __goscriptLiteralField61, CronSchedule: $.fieldRef((t$ as apiv1.StartWorkflowExecutionRequest)._fields, "CronSchedule"), Memo: __goscriptLiteralField62, SearchAttributes: __goscriptLiteralField63, Header: __goscriptLiteralField64, DelayStartSeconds: __goscriptLiteralField65, JitterStartSeconds: __goscriptLiteralField66, FirstRunAtTimestamp: __goscriptLiteralField67, CronOverlapPolicy: __goscriptLiteralField68, ActiveClusterSelectionPolicy: __goscriptLiteralField69}) })()
}

export function TerminateWorkflowExecutionRequest(t: apiv1.TerminateWorkflowExecutionRequest | $.VarRef<apiv1.TerminateWorkflowExecutionRequest> | null): shared.TerminateWorkflowExecutionRequest | $.VarRef<shared.TerminateWorkflowExecutionRequest> | null {
	const t$: apiv1.TerminateWorkflowExecutionRequest = t == null ? $.pointerTarget<apiv1.TerminateWorkflowExecutionRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.TerminateWorkflowExecutionRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField70 = __goscript_types.WorkflowExecution((t$ as apiv1.TerminateWorkflowExecutionRequest).WorkflowExecution); const __goscriptLiteralField71 = __goscript_types.Payload((t$ as apiv1.TerminateWorkflowExecutionRequest).Details); return new shared.TerminateWorkflowExecutionRequest({Domain: $.fieldRef((t$ as apiv1.TerminateWorkflowExecutionRequest)._fields, "Domain"), WorkflowExecution: __goscriptLiteralField70, Reason: $.fieldRef((t$ as apiv1.TerminateWorkflowExecutionRequest)._fields, "Reason"), Details: __goscriptLiteralField71, Identity: $.fieldRef((t$ as apiv1.TerminateWorkflowExecutionRequest)._fields, "Identity")}) })()
}

export function UpdateDomainRequest(t: apiv1.UpdateDomainRequest | $.VarRef<apiv1.UpdateDomainRequest> | null): shared.UpdateDomainRequest | $.VarRef<shared.UpdateDomainRequest> | null {
	const t$: apiv1.UpdateDomainRequest = t == null ? $.pointerTarget<apiv1.UpdateDomainRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.UpdateDomainRequest>(t)
	if (t == null) {
		return null
	}
	let request = $.varRef(new shared.UpdateDomainRequest({Name: $.fieldRef((t$ as apiv1.UpdateDomainRequest)._fields, "Name"), SecurityToken: $.fieldRef((t$ as apiv1.UpdateDomainRequest)._fields, "SecurityToken"), UpdatedInfo: new shared.UpdateDomainInfo(), Configuration: new shared.DomainConfiguration(), ReplicationConfiguration: new shared.DomainReplicationConfiguration()}, true))
	let fs: __goscript_helpers.fieldSet = __goscript_helpers.newFieldSet((t$ as apiv1.UpdateDomainRequest).UpdateMask)

	if (__goscript_helpers.fieldSet_isSet(fs, "description")) {
		$.pointerValue<shared.UpdateDomainInfo>(request.value.UpdatedInfo).Description = $.fieldRef((t$ as apiv1.UpdateDomainRequest)._fields, "Description")
	}
	if (__goscript_helpers.fieldSet_isSet(fs, "owner_email")) {
		$.pointerValue<shared.UpdateDomainInfo>(request.value.UpdatedInfo).OwnerEmail = $.fieldRef((t$ as apiv1.UpdateDomainRequest)._fields, "OwnerEmail")
	}
	if (__goscript_helpers.fieldSet_isSet(fs, "data")) {
		$.pointerValue<shared.UpdateDomainInfo>(request.value.UpdatedInfo).Data = (t$ as apiv1.UpdateDomainRequest).Data
	}
	if (__goscript_helpers.fieldSet_isSet(fs, "workflow_execution_retention_period")) {
		$.pointerValue<shared.DomainConfiguration>(request.value.Configuration).WorkflowExecutionRetentionPeriodInDays = __goscript_helpers.durationToDays((t$ as apiv1.UpdateDomainRequest).WorkflowExecutionRetentionPeriod)
	}
	if (__goscript_helpers.fieldSet_isSet(fs, "bad_binaries")) {
		$.pointerValue<shared.DomainConfiguration>(request.value.Configuration).BadBinaries = __goscript_types.BadBinaries((t$ as apiv1.UpdateDomainRequest).BadBinaries)
	}
	if (__goscript_helpers.fieldSet_isSet(fs, "history_archival_status")) {
		$.pointerValue<shared.DomainConfiguration>(request.value.Configuration).HistoryArchivalStatus = __goscript__enum.ArchivalStatus((t$ as apiv1.UpdateDomainRequest).HistoryArchivalStatus)
	}
	if (__goscript_helpers.fieldSet_isSet(fs, "history_archival_uri")) {
		$.pointerValue<shared.DomainConfiguration>(request.value.Configuration).HistoryArchivalURI = $.fieldRef((t$ as apiv1.UpdateDomainRequest)._fields, "HistoryArchivalUri")
	}
	if (__goscript_helpers.fieldSet_isSet(fs, "visibility_archival_status")) {
		$.pointerValue<shared.DomainConfiguration>(request.value.Configuration).VisibilityArchivalStatus = __goscript__enum.ArchivalStatus((t$ as apiv1.UpdateDomainRequest).VisibilityArchivalStatus)
	}
	if (__goscript_helpers.fieldSet_isSet(fs, "visibility_archival_uri")) {
		$.pointerValue<shared.DomainConfiguration>(request.value.Configuration).VisibilityArchivalURI = $.fieldRef((t$ as apiv1.UpdateDomainRequest)._fields, "VisibilityArchivalUri")
	}
	if (__goscript_helpers.fieldSet_isSet(fs, "active_cluster_name")) {
		$.pointerValue<shared.DomainReplicationConfiguration>(request.value.ReplicationConfiguration).ActiveClusterName = $.fieldRef((t$ as apiv1.UpdateDomainRequest)._fields, "ActiveClusterName")
	}
	if (__goscript_helpers.fieldSet_isSet(fs, "active_clusters")) {
		$.pointerValue<shared.DomainReplicationConfiguration>(request.value.ReplicationConfiguration).ActiveClusters = __goscript_types.ActiveClusters((t$ as apiv1.UpdateDomainRequest).ActiveClusters)
	}
	if (__goscript_helpers.fieldSet_isSet(fs, "clusters")) {
		$.pointerValue<shared.DomainReplicationConfiguration>(request.value.ReplicationConfiguration).Clusters = __goscript_types.ClusterReplicationConfigurationArray((t$ as apiv1.UpdateDomainRequest).Clusters)
	}

	if (__goscript_helpers.fieldSet_isSet(fs, "delete_bad_binary")) {
		request.value.DeleteBadBinary = $.fieldRef((t$ as apiv1.UpdateDomainRequest)._fields, "DeleteBadBinary")
	}
	if (__goscript_helpers.fieldSet_isSet(fs, "failover_timeout")) {
		request.value.FailoverTimeoutInSeconds = __goscript_helpers.durationToSeconds((t$ as apiv1.UpdateDomainRequest).FailoverTimeout)
	}

	return request
}

export function ListClosedWorkflowExecutionsRequest(r: apiv1.ListClosedWorkflowExecutionsRequest | $.VarRef<apiv1.ListClosedWorkflowExecutionsRequest> | null): shared.ListClosedWorkflowExecutionsRequest | $.VarRef<shared.ListClosedWorkflowExecutionsRequest> | null {
	const r$: apiv1.ListClosedWorkflowExecutionsRequest = r == null ? $.pointerTarget<apiv1.ListClosedWorkflowExecutionsRequest>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<apiv1.ListClosedWorkflowExecutionsRequest>(r)
	if (r == null) {
		return null
	}
	return (() => { const __goscriptLiteralField72 = __goscript_types.StartTimeFilter((r$ as apiv1.ListClosedWorkflowExecutionsRequest).StartTimeFilter); const __goscriptLiteralField73 = __goscript_types.WorkflowExecutionFilter((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as apiv1.ListClosedWorkflowExecutionsRequest).GetExecutionFilter() : apiv1.ListClosedWorkflowExecutionsRequest.prototype.GetExecutionFilter.call(r))); const __goscriptLiteralField74 = __goscript_types.WorkflowTypeFilter((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as apiv1.ListClosedWorkflowExecutionsRequest).GetTypeFilter() : apiv1.ListClosedWorkflowExecutionsRequest.prototype.GetTypeFilter.call(r))); const __goscriptLiteralField75 = __goscript__enum.WorkflowExecutionCloseStatus(apiv1.StatusFilter.prototype.GetStatus.call((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as apiv1.ListClosedWorkflowExecutionsRequest).GetStatusFilter() : apiv1.ListClosedWorkflowExecutionsRequest.prototype.GetStatusFilter.call(r)))); return new shared.ListClosedWorkflowExecutionsRequest({Domain: $.fieldRef((r$ as apiv1.ListClosedWorkflowExecutionsRequest)._fields, "Domain"), MaximumPageSize: $.fieldRef((r$ as apiv1.ListClosedWorkflowExecutionsRequest)._fields, "PageSize"), NextPageToken: (r$ as apiv1.ListClosedWorkflowExecutionsRequest).NextPageToken, StartTimeFilter: __goscriptLiteralField72, ExecutionFilter: __goscriptLiteralField73, TypeFilter: __goscriptLiteralField74, StatusFilter: __goscriptLiteralField75}) })()
}

export function ListOpenWorkflowExecutionsRequest(r: apiv1.ListOpenWorkflowExecutionsRequest | $.VarRef<apiv1.ListOpenWorkflowExecutionsRequest> | null): shared.ListOpenWorkflowExecutionsRequest | $.VarRef<shared.ListOpenWorkflowExecutionsRequest> | null {
	const r$: apiv1.ListOpenWorkflowExecutionsRequest = r == null ? $.pointerTarget<apiv1.ListOpenWorkflowExecutionsRequest>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<apiv1.ListOpenWorkflowExecutionsRequest>(r)
	if (r == null) {
		return null
	}
	return (() => { const __goscriptLiteralField76 = __goscript_types.StartTimeFilter((r$ as apiv1.ListOpenWorkflowExecutionsRequest).StartTimeFilter); const __goscriptLiteralField77 = __goscript_types.WorkflowExecutionFilter((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as apiv1.ListOpenWorkflowExecutionsRequest).GetExecutionFilter() : apiv1.ListOpenWorkflowExecutionsRequest.prototype.GetExecutionFilter.call(r))); const __goscriptLiteralField78 = __goscript_types.WorkflowTypeFilter((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as apiv1.ListOpenWorkflowExecutionsRequest).GetTypeFilter() : apiv1.ListOpenWorkflowExecutionsRequest.prototype.GetTypeFilter.call(r))); return new shared.ListOpenWorkflowExecutionsRequest({Domain: $.fieldRef((r$ as apiv1.ListOpenWorkflowExecutionsRequest)._fields, "Domain"), MaximumPageSize: $.fieldRef((r$ as apiv1.ListOpenWorkflowExecutionsRequest)._fields, "PageSize"), NextPageToken: (r$ as apiv1.ListOpenWorkflowExecutionsRequest).NextPageToken, StartTimeFilter: __goscriptLiteralField76, ExecutionFilter: __goscriptLiteralField77, TypeFilter: __goscriptLiteralField78}) })()
}

export function FailoverDomainRequest(t: apiv1.FailoverDomainRequest | $.VarRef<apiv1.FailoverDomainRequest> | null): shared.FailoverDomainRequest | $.VarRef<shared.FailoverDomainRequest> | null {
	const t$: apiv1.FailoverDomainRequest = t == null ? $.pointerTarget<apiv1.FailoverDomainRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.FailoverDomainRequest>(t)
	if (t == null) {
		return null
	}
	let request: shared.FailoverDomainRequest | $.VarRef<shared.FailoverDomainRequest> | null = new shared.FailoverDomainRequest({DomainName: $.fieldRef((t$ as apiv1.FailoverDomainRequest)._fields, "DomainName"), Reason: $.fieldRef((t$ as apiv1.FailoverDomainRequest)._fields, "Reason")})
	let request$: shared.FailoverDomainRequest = request == null ? $.pointerTarget<shared.FailoverDomainRequest>(request) : (request as any).__isVarRef === true ? (request as any).value : (request as any).__goValue === undefined ? (request as any) : $.pointerTarget<shared.FailoverDomainRequest>(request)
	if (!$.stringEqual((t$ as apiv1.FailoverDomainRequest).DomainActiveClusterName, "")) {
		;(request$ as shared.FailoverDomainRequest).DomainActiveClusterName = $.fieldRef((t$ as apiv1.FailoverDomainRequest)._fields, "DomainActiveClusterName")
	}
	if ((t$ as apiv1.FailoverDomainRequest).ActiveClusters != null) {
		;(request$ as shared.FailoverDomainRequest).ActiveClusters = __goscript_types.ActiveClusters((t$ as apiv1.FailoverDomainRequest).ActiveClusters)
	}
	if ((t$ as apiv1.FailoverDomainRequest).FailoverTimeout != null) {
		;(request$ as shared.FailoverDomainRequest).FailoverTimeoutInSeconds = __goscript_helpers.durationToSeconds((t$ as apiv1.FailoverDomainRequest).FailoverTimeout)
	}
	return request
}

export function ListFailoverHistoryRequest(t: apiv1.ListFailoverHistoryRequest | $.VarRef<apiv1.ListFailoverHistoryRequest> | null): shared.ListFailoverHistoryRequest | $.VarRef<shared.ListFailoverHistoryRequest> | null {
	const t$: apiv1.ListFailoverHistoryRequest = t == null ? $.pointerTarget<apiv1.ListFailoverHistoryRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ListFailoverHistoryRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField79 = __goscript_types.ListFailoverHistoryRequestFilters((t$ as apiv1.ListFailoverHistoryRequest).Filters); const __goscriptLiteralField80 = __goscript_types.PaginationOptions((t$ as apiv1.ListFailoverHistoryRequest).Pagination); return new shared.ListFailoverHistoryRequest({Filters: __goscriptLiteralField79, Pagination: __goscriptLiteralField80}) })()
}
