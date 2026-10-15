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

export function CountWorkflowExecutionsRequest(t: shared.CountWorkflowExecutionsRequest | $.VarRef<shared.CountWorkflowExecutionsRequest> | null): apiv1.CountWorkflowExecutionsRequest | $.VarRef<apiv1.CountWorkflowExecutionsRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField0 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.CountWorkflowExecutionsRequest).GetDomain() : shared.CountWorkflowExecutionsRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField1 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.CountWorkflowExecutionsRequest).GetQuery() : shared.CountWorkflowExecutionsRequest.prototype.GetQuery.call(t)); return new apiv1.CountWorkflowExecutionsRequest({Domain: __goscriptLiteralField0, Query: __goscriptLiteralField1}) })()
}

export function DeprecateDomainRequest(t: shared.DeprecateDomainRequest | $.VarRef<shared.DeprecateDomainRequest> | null): apiv1.DeprecateDomainRequest | $.VarRef<apiv1.DeprecateDomainRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField2 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DeprecateDomainRequest).GetName() : shared.DeprecateDomainRequest.prototype.GetName.call(t)); const __goscriptLiteralField3 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DeprecateDomainRequest).GetSecurityToken() : shared.DeprecateDomainRequest.prototype.GetSecurityToken.call(t)); return new apiv1.DeprecateDomainRequest({Name: __goscriptLiteralField2, SecurityToken: __goscriptLiteralField3}) })()
}

export function DescribeDomainRequest(t: shared.DescribeDomainRequest | $.VarRef<shared.DescribeDomainRequest> | null): apiv1.DescribeDomainRequest | $.VarRef<apiv1.DescribeDomainRequest> | null {
	const t$: shared.DescribeDomainRequest = t == null ? $.pointerTarget<shared.DescribeDomainRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.DescribeDomainRequest>(t)
	if (t == null) {
		return null
	}
	if ((t$ as shared.DescribeDomainRequest).UUID != null) {
		return new apiv1.DescribeDomainRequest({DescribeBy: $.interfaceValue<apiv1.isDescribeDomainRequest_DescribeBy | null>(new apiv1.DescribeDomainRequest_Id({Id: $.pointerValue<string>((t$ as shared.DescribeDomainRequest).UUID)}), "*apiv1.DescribeDomainRequest_Id", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest_Id"))})
	}
	if ((t$ as shared.DescribeDomainRequest).Name != null) {
		return new apiv1.DescribeDomainRequest({DescribeBy: $.interfaceValue<apiv1.isDescribeDomainRequest_DescribeBy | null>(new apiv1.DescribeDomainRequest_Name({Name: $.pointerValue<string>((t$ as shared.DescribeDomainRequest).Name)}), "*apiv1.DescribeDomainRequest_Name", /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainRequest_Name"))})
	}
	$.panic("neither oneof field is set for DescribeDomainRequest")
	throw new globalThis.Error("goscript: unreachable return")
}

export function DescribeTaskListRequest(t: shared.DescribeTaskListRequest | $.VarRef<shared.DescribeTaskListRequest> | null): apiv1.DescribeTaskListRequest | $.VarRef<apiv1.DescribeTaskListRequest> | null {
	const t$: shared.DescribeTaskListRequest = t == null ? $.pointerTarget<shared.DescribeTaskListRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.DescribeTaskListRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField4 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DescribeTaskListRequest).GetDomain() : shared.DescribeTaskListRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField5 = __goscript_types.TaskList((t$ as shared.DescribeTaskListRequest).TaskList); const __goscriptLiteralField6 = __goscript__enum.TaskListType((t$ as shared.DescribeTaskListRequest).TaskListType); const __goscriptLiteralField7 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DescribeTaskListRequest).GetIncludeTaskListStatus() : shared.DescribeTaskListRequest.prototype.GetIncludeTaskListStatus.call(t)); return new apiv1.DescribeTaskListRequest({Domain: __goscriptLiteralField4, TaskList: __goscriptLiteralField5, TaskListType: __goscriptLiteralField6, IncludeTaskListStatus: __goscriptLiteralField7}) })()
}

export function DescribeWorkflowExecutionRequest(t: shared.DescribeWorkflowExecutionRequest | $.VarRef<shared.DescribeWorkflowExecutionRequest> | null): apiv1.DescribeWorkflowExecutionRequest | $.VarRef<apiv1.DescribeWorkflowExecutionRequest> | null {
	const t$: shared.DescribeWorkflowExecutionRequest = t == null ? $.pointerTarget<shared.DescribeWorkflowExecutionRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.DescribeWorkflowExecutionRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField8 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DescribeWorkflowExecutionRequest).GetDomain() : shared.DescribeWorkflowExecutionRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField9 = __goscript_types.WorkflowExecution((t$ as shared.DescribeWorkflowExecutionRequest).Execution); const __goscriptLiteralField10 = __goscript__enum.QueryConsistencyLevel((t$ as shared.DescribeWorkflowExecutionRequest).QueryConsistencyLevel); return new apiv1.DescribeWorkflowExecutionRequest({Domain: __goscriptLiteralField8, WorkflowExecution: __goscriptLiteralField9, QueryConsistencyLevel: __goscriptLiteralField10}) })()
}

export function DiagnoseWorkflowExecutionRequest(t: shared.DiagnoseWorkflowExecutionRequest | $.VarRef<shared.DiagnoseWorkflowExecutionRequest> | null): apiv1.DiagnoseWorkflowExecutionRequest | $.VarRef<apiv1.DiagnoseWorkflowExecutionRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField11 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DiagnoseWorkflowExecutionRequest).GetDomain() : shared.DiagnoseWorkflowExecutionRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField12 = __goscript_types.WorkflowExecution((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DiagnoseWorkflowExecutionRequest).GetWorkflowExecution() : shared.DiagnoseWorkflowExecutionRequest.prototype.GetWorkflowExecution.call(t))); const __goscriptLiteralField13 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DiagnoseWorkflowExecutionRequest).GetIdentity() : shared.DiagnoseWorkflowExecutionRequest.prototype.GetIdentity.call(t)); return new apiv1.DiagnoseWorkflowExecutionRequest({Domain: __goscriptLiteralField11, WorkflowExecution: __goscriptLiteralField12, Identity: __goscriptLiteralField13}) })()
}

export function GetWorkflowExecutionHistoryRequest(t: shared.GetWorkflowExecutionHistoryRequest | $.VarRef<shared.GetWorkflowExecutionHistoryRequest> | null): apiv1.GetWorkflowExecutionHistoryRequest | $.VarRef<apiv1.GetWorkflowExecutionHistoryRequest> | null {
	const t$: shared.GetWorkflowExecutionHistoryRequest = t == null ? $.pointerTarget<shared.GetWorkflowExecutionHistoryRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.GetWorkflowExecutionHistoryRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField14 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.GetWorkflowExecutionHistoryRequest).GetDomain() : shared.GetWorkflowExecutionHistoryRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField15 = __goscript_types.WorkflowExecution((t$ as shared.GetWorkflowExecutionHistoryRequest).Execution); const __goscriptLiteralField16 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.GetWorkflowExecutionHistoryRequest).GetMaximumPageSize() : shared.GetWorkflowExecutionHistoryRequest.prototype.GetMaximumPageSize.call(t)); const __goscriptLiteralField17 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.GetWorkflowExecutionHistoryRequest).GetNextPageToken() : shared.GetWorkflowExecutionHistoryRequest.prototype.GetNextPageToken.call(t)); const __goscriptLiteralField18 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.GetWorkflowExecutionHistoryRequest).GetWaitForNewEvent() : shared.GetWorkflowExecutionHistoryRequest.prototype.GetWaitForNewEvent.call(t)); const __goscriptLiteralField19 = __goscript__enum.EventFilterType((t$ as shared.GetWorkflowExecutionHistoryRequest).HistoryEventFilterType); const __goscriptLiteralField20 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.GetWorkflowExecutionHistoryRequest).GetSkipArchival() : shared.GetWorkflowExecutionHistoryRequest.prototype.GetSkipArchival.call(t)); const __goscriptLiteralField21 = __goscript__enum.QueryConsistencyLevel((t$ as shared.GetWorkflowExecutionHistoryRequest).QueryConsistencyLevel); return new apiv1.GetWorkflowExecutionHistoryRequest({Domain: __goscriptLiteralField14, WorkflowExecution: __goscriptLiteralField15, PageSize: __goscriptLiteralField16, NextPageToken: __goscriptLiteralField17, WaitForNewEvent: __goscriptLiteralField18, HistoryEventFilterType: __goscriptLiteralField19, SkipArchival: __goscriptLiteralField20, QueryConsistencyLevel: __goscriptLiteralField21}) })()
}

export function ListArchivedWorkflowExecutionsRequest(t: shared.ListArchivedWorkflowExecutionsRequest | $.VarRef<shared.ListArchivedWorkflowExecutionsRequest> | null): apiv1.ListArchivedWorkflowExecutionsRequest | $.VarRef<apiv1.ListArchivedWorkflowExecutionsRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField22 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ListArchivedWorkflowExecutionsRequest).GetDomain() : shared.ListArchivedWorkflowExecutionsRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField23 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ListArchivedWorkflowExecutionsRequest).GetPageSize() : shared.ListArchivedWorkflowExecutionsRequest.prototype.GetPageSize.call(t)); const __goscriptLiteralField24 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ListArchivedWorkflowExecutionsRequest).GetNextPageToken() : shared.ListArchivedWorkflowExecutionsRequest.prototype.GetNextPageToken.call(t)); const __goscriptLiteralField25 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ListArchivedWorkflowExecutionsRequest).GetQuery() : shared.ListArchivedWorkflowExecutionsRequest.prototype.GetQuery.call(t)); return new apiv1.ListArchivedWorkflowExecutionsRequest({Domain: __goscriptLiteralField22, PageSize: __goscriptLiteralField23, NextPageToken: __goscriptLiteralField24, Query: __goscriptLiteralField25}) })()
}

export function ListDomainsRequest(t: shared.ListDomainsRequest | $.VarRef<shared.ListDomainsRequest> | null): apiv1.ListDomainsRequest | $.VarRef<apiv1.ListDomainsRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField26 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ListDomainsRequest).GetPageSize() : shared.ListDomainsRequest.prototype.GetPageSize.call(t)); return new apiv1.ListDomainsRequest({PageSize: __goscriptLiteralField26, NextPageToken: $.pointerValue<shared.ListDomainsRequest>(t).NextPageToken}) })()
}

export function ListTaskListPartitionsRequest(t: shared.ListTaskListPartitionsRequest | $.VarRef<shared.ListTaskListPartitionsRequest> | null): apiv1.ListTaskListPartitionsRequest | $.VarRef<apiv1.ListTaskListPartitionsRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField27 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ListTaskListPartitionsRequest).GetDomain() : shared.ListTaskListPartitionsRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField28 = __goscript_types.TaskList($.pointerValue<shared.ListTaskListPartitionsRequest>(t).TaskList); return new apiv1.ListTaskListPartitionsRequest({Domain: __goscriptLiteralField27, TaskList: __goscriptLiteralField28}) })()
}

export function ListWorkflowExecutionsRequest(t: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null): apiv1.ListWorkflowExecutionsRequest | $.VarRef<apiv1.ListWorkflowExecutionsRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField29 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ListWorkflowExecutionsRequest).GetDomain() : shared.ListWorkflowExecutionsRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField30 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ListWorkflowExecutionsRequest).GetPageSize() : shared.ListWorkflowExecutionsRequest.prototype.GetPageSize.call(t)); const __goscriptLiteralField31 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ListWorkflowExecutionsRequest).GetQuery() : shared.ListWorkflowExecutionsRequest.prototype.GetQuery.call(t)); return new apiv1.ListWorkflowExecutionsRequest({Domain: __goscriptLiteralField29, PageSize: __goscriptLiteralField30, NextPageToken: $.pointerValue<shared.ListWorkflowExecutionsRequest>(t).NextPageToken, Query: __goscriptLiteralField31}) })()
}

export function PollForActivityTaskRequest(t: shared.PollForActivityTaskRequest | $.VarRef<shared.PollForActivityTaskRequest> | null): apiv1.PollForActivityTaskRequest | $.VarRef<apiv1.PollForActivityTaskRequest> | null {
	const t$: shared.PollForActivityTaskRequest = t == null ? $.pointerTarget<shared.PollForActivityTaskRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.PollForActivityTaskRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField32 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PollForActivityTaskRequest).GetDomain() : shared.PollForActivityTaskRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField33 = __goscript_types.TaskList((t$ as shared.PollForActivityTaskRequest).TaskList); const __goscriptLiteralField34 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PollForActivityTaskRequest).GetIdentity() : shared.PollForActivityTaskRequest.prototype.GetIdentity.call(t)); const __goscriptLiteralField35 = __goscript_types.TaskListMetadata((t$ as shared.PollForActivityTaskRequest).TaskListMetadata); return new apiv1.PollForActivityTaskRequest({Domain: __goscriptLiteralField32, TaskList: __goscriptLiteralField33, Identity: __goscriptLiteralField34, TaskListMetadata: __goscriptLiteralField35}) })()
}

export function PollForDecisionTaskRequest(t: shared.PollForDecisionTaskRequest | $.VarRef<shared.PollForDecisionTaskRequest> | null): apiv1.PollForDecisionTaskRequest | $.VarRef<apiv1.PollForDecisionTaskRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField36 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PollForDecisionTaskRequest).GetDomain() : shared.PollForDecisionTaskRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField37 = __goscript_types.TaskList($.pointerValue<shared.PollForDecisionTaskRequest>(t).TaskList); const __goscriptLiteralField38 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PollForDecisionTaskRequest).GetIdentity() : shared.PollForDecisionTaskRequest.prototype.GetIdentity.call(t)); const __goscriptLiteralField39 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PollForDecisionTaskRequest).GetBinaryChecksum() : shared.PollForDecisionTaskRequest.prototype.GetBinaryChecksum.call(t)); return new apiv1.PollForDecisionTaskRequest({Domain: __goscriptLiteralField36, TaskList: __goscriptLiteralField37, Identity: __goscriptLiteralField38, BinaryChecksum: __goscriptLiteralField39}) })()
}

export function QueryWorkflowRequest(t: shared.QueryWorkflowRequest | $.VarRef<shared.QueryWorkflowRequest> | null): apiv1.QueryWorkflowRequest | $.VarRef<apiv1.QueryWorkflowRequest> | null {
	const t$: shared.QueryWorkflowRequest = t == null ? $.pointerTarget<shared.QueryWorkflowRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.QueryWorkflowRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField40 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.QueryWorkflowRequest).GetDomain() : shared.QueryWorkflowRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField41 = __goscript_types.WorkflowExecution((t$ as shared.QueryWorkflowRequest).Execution); const __goscriptLiteralField42 = __goscript_types.WorkflowQuery((t$ as shared.QueryWorkflowRequest).Query); const __goscriptLiteralField43 = __goscript__enum.QueryRejectCondition((t$ as shared.QueryWorkflowRequest).QueryRejectCondition); const __goscriptLiteralField44 = __goscript__enum.QueryConsistencyLevel((t$ as shared.QueryWorkflowRequest).QueryConsistencyLevel); return new apiv1.QueryWorkflowRequest({Domain: __goscriptLiteralField40, WorkflowExecution: __goscriptLiteralField41, Query: __goscriptLiteralField42, QueryRejectCondition: __goscriptLiteralField43, QueryConsistencyLevel: __goscriptLiteralField44}) })()
}

export function RecordActivityTaskHeartbeatByIDRequest(t: shared.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<shared.RecordActivityTaskHeartbeatByIDRequest> | null): apiv1.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<apiv1.RecordActivityTaskHeartbeatByIDRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField45 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RecordActivityTaskHeartbeatByIDRequest).GetDomain() : shared.RecordActivityTaskHeartbeatByIDRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField46 = __goscript_types.WorkflowRunPair((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RecordActivityTaskHeartbeatByIDRequest).GetWorkflowID() : shared.RecordActivityTaskHeartbeatByIDRequest.prototype.GetWorkflowID.call(t)), (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RecordActivityTaskHeartbeatByIDRequest).GetRunID() : shared.RecordActivityTaskHeartbeatByIDRequest.prototype.GetRunID.call(t))); const __goscriptLiteralField47 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RecordActivityTaskHeartbeatByIDRequest).GetActivityID() : shared.RecordActivityTaskHeartbeatByIDRequest.prototype.GetActivityID.call(t)); const __goscriptLiteralField48 = __goscript_types.Payload($.pointerValue<shared.RecordActivityTaskHeartbeatByIDRequest>(t).Details); const __goscriptLiteralField49 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RecordActivityTaskHeartbeatByIDRequest).GetIdentity() : shared.RecordActivityTaskHeartbeatByIDRequest.prototype.GetIdentity.call(t)); return new apiv1.RecordActivityTaskHeartbeatByIDRequest({Domain: __goscriptLiteralField45, WorkflowExecution: __goscriptLiteralField46, ActivityId: __goscriptLiteralField47, Details: __goscriptLiteralField48, Identity: __goscriptLiteralField49}) })()
}

export function RecordActivityTaskHeartbeatRequest(t: shared.RecordActivityTaskHeartbeatRequest | $.VarRef<shared.RecordActivityTaskHeartbeatRequest> | null): apiv1.RecordActivityTaskHeartbeatRequest | $.VarRef<apiv1.RecordActivityTaskHeartbeatRequest> | null {
	const t$: shared.RecordActivityTaskHeartbeatRequest = t == null ? $.pointerTarget<shared.RecordActivityTaskHeartbeatRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.RecordActivityTaskHeartbeatRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField50 = __goscript_types.Payload((t$ as shared.RecordActivityTaskHeartbeatRequest).Details); const __goscriptLiteralField51 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RecordActivityTaskHeartbeatRequest).GetIdentity() : shared.RecordActivityTaskHeartbeatRequest.prototype.GetIdentity.call(t)); return new apiv1.RecordActivityTaskHeartbeatRequest({TaskToken: (t$ as shared.RecordActivityTaskHeartbeatRequest).TaskToken, Details: __goscriptLiteralField50, Identity: __goscriptLiteralField51}) })()
}

export function RegisterDomainRequest(t: shared.RegisterDomainRequest | $.VarRef<shared.RegisterDomainRequest> | null): apiv1.RegisterDomainRequest | $.VarRef<apiv1.RegisterDomainRequest> | null {
	const t$: shared.RegisterDomainRequest = t == null ? $.pointerTarget<shared.RegisterDomainRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.RegisterDomainRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField52 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RegisterDomainRequest).GetName() : shared.RegisterDomainRequest.prototype.GetName.call(t)); const __goscriptLiteralField53 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RegisterDomainRequest).GetDescription() : shared.RegisterDomainRequest.prototype.GetDescription.call(t)); const __goscriptLiteralField54 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RegisterDomainRequest).GetOwnerEmail() : shared.RegisterDomainRequest.prototype.GetOwnerEmail.call(t)); const __goscriptLiteralField55 = __goscript_helpers.daysToDuration((t$ as shared.RegisterDomainRequest).WorkflowExecutionRetentionPeriodInDays); const __goscriptLiteralField56 = __goscript_types.ClusterReplicationConfigurationArray((t$ as shared.RegisterDomainRequest).Clusters); const __goscriptLiteralField57 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RegisterDomainRequest).GetActiveClusterName() : shared.RegisterDomainRequest.prototype.GetActiveClusterName.call(t)); const __goscriptLiteralField58 = __goscript_types.ActiveClusters((t$ as shared.RegisterDomainRequest).ActiveClusters); const __goscriptLiteralField59 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RegisterDomainRequest).GetSecurityToken() : shared.RegisterDomainRequest.prototype.GetSecurityToken.call(t)); const __goscriptLiteralField60 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RegisterDomainRequest).GetIsGlobalDomain() : shared.RegisterDomainRequest.prototype.GetIsGlobalDomain.call(t)); const __goscriptLiteralField61 = __goscript__enum.ArchivalStatus((t$ as shared.RegisterDomainRequest).HistoryArchivalStatus); const __goscriptLiteralField62 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RegisterDomainRequest).GetHistoryArchivalURI() : shared.RegisterDomainRequest.prototype.GetHistoryArchivalURI.call(t)); const __goscriptLiteralField63 = __goscript__enum.ArchivalStatus((t$ as shared.RegisterDomainRequest).VisibilityArchivalStatus); const __goscriptLiteralField64 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RegisterDomainRequest).GetVisibilityArchivalURI() : shared.RegisterDomainRequest.prototype.GetVisibilityArchivalURI.call(t)); return new apiv1.RegisterDomainRequest({Name: __goscriptLiteralField52, Description: __goscriptLiteralField53, OwnerEmail: __goscriptLiteralField54, WorkflowExecutionRetentionPeriod: __goscriptLiteralField55, Clusters: __goscriptLiteralField56, ActiveClusterName: __goscriptLiteralField57, ActiveClusters: __goscriptLiteralField58, Data: (t$ as shared.RegisterDomainRequest).Data, SecurityToken: __goscriptLiteralField59, IsGlobalDomain: __goscriptLiteralField60, HistoryArchivalStatus: __goscriptLiteralField61, HistoryArchivalUri: __goscriptLiteralField62, VisibilityArchivalStatus: __goscriptLiteralField63, VisibilityArchivalUri: __goscriptLiteralField64}) })()
}

export function RequestCancelWorkflowExecutionRequest(t: shared.RequestCancelWorkflowExecutionRequest | $.VarRef<shared.RequestCancelWorkflowExecutionRequest> | null): apiv1.RequestCancelWorkflowExecutionRequest | $.VarRef<apiv1.RequestCancelWorkflowExecutionRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField65 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RequestCancelWorkflowExecutionRequest).GetDomain() : shared.RequestCancelWorkflowExecutionRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField66 = __goscript_types.WorkflowExecution($.pointerValue<shared.RequestCancelWorkflowExecutionRequest>(t).WorkflowExecution); const __goscriptLiteralField67 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RequestCancelWorkflowExecutionRequest).GetIdentity() : shared.RequestCancelWorkflowExecutionRequest.prototype.GetIdentity.call(t)); const __goscriptLiteralField68 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RequestCancelWorkflowExecutionRequest).GetCause() : shared.RequestCancelWorkflowExecutionRequest.prototype.GetCause.call(t)); const __goscriptLiteralField69 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RequestCancelWorkflowExecutionRequest).GetRequestId() : shared.RequestCancelWorkflowExecutionRequest.prototype.GetRequestId.call(t)); return new apiv1.RequestCancelWorkflowExecutionRequest({Domain: __goscriptLiteralField65, WorkflowExecution: __goscriptLiteralField66, Identity: __goscriptLiteralField67, Cause: __goscriptLiteralField68, RequestId: __goscriptLiteralField69}) })()
}

export function ResetStickyTaskListRequest(t: shared.ResetStickyTaskListRequest | $.VarRef<shared.ResetStickyTaskListRequest> | null): apiv1.ResetStickyTaskListRequest | $.VarRef<apiv1.ResetStickyTaskListRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField70 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ResetStickyTaskListRequest).GetDomain() : shared.ResetStickyTaskListRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField71 = __goscript_types.WorkflowExecution($.pointerValue<shared.ResetStickyTaskListRequest>(t).Execution); return new apiv1.ResetStickyTaskListRequest({Domain: __goscriptLiteralField70, WorkflowExecution: __goscriptLiteralField71}) })()
}

export function ResetWorkflowExecutionRequest(t: shared.ResetWorkflowExecutionRequest | $.VarRef<shared.ResetWorkflowExecutionRequest> | null): apiv1.ResetWorkflowExecutionRequest | $.VarRef<apiv1.ResetWorkflowExecutionRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField72 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ResetWorkflowExecutionRequest).GetDomain() : shared.ResetWorkflowExecutionRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField73 = __goscript_types.WorkflowExecution($.pointerValue<shared.ResetWorkflowExecutionRequest>(t).WorkflowExecution); const __goscriptLiteralField74 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ResetWorkflowExecutionRequest).GetReason() : shared.ResetWorkflowExecutionRequest.prototype.GetReason.call(t)); const __goscriptLiteralField75 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ResetWorkflowExecutionRequest).GetDecisionFinishEventId() : shared.ResetWorkflowExecutionRequest.prototype.GetDecisionFinishEventId.call(t)); const __goscriptLiteralField76 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ResetWorkflowExecutionRequest).GetRequestId() : shared.ResetWorkflowExecutionRequest.prototype.GetRequestId.call(t)); const __goscriptLiteralField77 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ResetWorkflowExecutionRequest).GetSkipSignalReapply() : shared.ResetWorkflowExecutionRequest.prototype.GetSkipSignalReapply.call(t)); return new apiv1.ResetWorkflowExecutionRequest({Domain: __goscriptLiteralField72, WorkflowExecution: __goscriptLiteralField73, Reason: __goscriptLiteralField74, DecisionFinishEventId: __goscriptLiteralField75, RequestId: __goscriptLiteralField76, SkipSignalReapply: __goscriptLiteralField77}) })()
}

export function RespondActivityTaskCanceledByIDRequest(t: shared.RespondActivityTaskCanceledByIDRequest | $.VarRef<shared.RespondActivityTaskCanceledByIDRequest> | null): apiv1.RespondActivityTaskCanceledByIDRequest | $.VarRef<apiv1.RespondActivityTaskCanceledByIDRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField78 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskCanceledByIDRequest).GetDomain() : shared.RespondActivityTaskCanceledByIDRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField79 = __goscript_types.WorkflowRunPair((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskCanceledByIDRequest).GetWorkflowID() : shared.RespondActivityTaskCanceledByIDRequest.prototype.GetWorkflowID.call(t)), (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskCanceledByIDRequest).GetRunID() : shared.RespondActivityTaskCanceledByIDRequest.prototype.GetRunID.call(t))); const __goscriptLiteralField80 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskCanceledByIDRequest).GetActivityID() : shared.RespondActivityTaskCanceledByIDRequest.prototype.GetActivityID.call(t)); const __goscriptLiteralField81 = __goscript_types.Payload($.pointerValue<shared.RespondActivityTaskCanceledByIDRequest>(t).Details); const __goscriptLiteralField82 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskCanceledByIDRequest).GetIdentity() : shared.RespondActivityTaskCanceledByIDRequest.prototype.GetIdentity.call(t)); return new apiv1.RespondActivityTaskCanceledByIDRequest({Domain: __goscriptLiteralField78, WorkflowExecution: __goscriptLiteralField79, ActivityId: __goscriptLiteralField80, Details: __goscriptLiteralField81, Identity: __goscriptLiteralField82}) })()
}

export function RespondActivityTaskCanceledRequest(t: shared.RespondActivityTaskCanceledRequest | $.VarRef<shared.RespondActivityTaskCanceledRequest> | null): apiv1.RespondActivityTaskCanceledRequest | $.VarRef<apiv1.RespondActivityTaskCanceledRequest> | null {
	const t$: shared.RespondActivityTaskCanceledRequest = t == null ? $.pointerTarget<shared.RespondActivityTaskCanceledRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.RespondActivityTaskCanceledRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField83 = __goscript_types.Payload((t$ as shared.RespondActivityTaskCanceledRequest).Details); const __goscriptLiteralField84 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskCanceledRequest).GetIdentity() : shared.RespondActivityTaskCanceledRequest.prototype.GetIdentity.call(t)); return new apiv1.RespondActivityTaskCanceledRequest({TaskToken: (t$ as shared.RespondActivityTaskCanceledRequest).TaskToken, Details: __goscriptLiteralField83, Identity: __goscriptLiteralField84}) })()
}

export function RespondActivityTaskCompletedByIDRequest(t: shared.RespondActivityTaskCompletedByIDRequest | $.VarRef<shared.RespondActivityTaskCompletedByIDRequest> | null): apiv1.RespondActivityTaskCompletedByIDRequest | $.VarRef<apiv1.RespondActivityTaskCompletedByIDRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField85 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskCompletedByIDRequest).GetDomain() : shared.RespondActivityTaskCompletedByIDRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField86 = __goscript_types.WorkflowRunPair((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskCompletedByIDRequest).GetWorkflowID() : shared.RespondActivityTaskCompletedByIDRequest.prototype.GetWorkflowID.call(t)), (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskCompletedByIDRequest).GetRunID() : shared.RespondActivityTaskCompletedByIDRequest.prototype.GetRunID.call(t))); const __goscriptLiteralField87 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskCompletedByIDRequest).GetActivityID() : shared.RespondActivityTaskCompletedByIDRequest.prototype.GetActivityID.call(t)); const __goscriptLiteralField88 = __goscript_types.Payload($.pointerValue<shared.RespondActivityTaskCompletedByIDRequest>(t).Result); const __goscriptLiteralField89 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskCompletedByIDRequest).GetIdentity() : shared.RespondActivityTaskCompletedByIDRequest.prototype.GetIdentity.call(t)); return new apiv1.RespondActivityTaskCompletedByIDRequest({Domain: __goscriptLiteralField85, WorkflowExecution: __goscriptLiteralField86, ActivityId: __goscriptLiteralField87, Result: __goscriptLiteralField88, Identity: __goscriptLiteralField89}) })()
}

export function RespondActivityTaskCompletedRequest(t: shared.RespondActivityTaskCompletedRequest | $.VarRef<shared.RespondActivityTaskCompletedRequest> | null): apiv1.RespondActivityTaskCompletedRequest | $.VarRef<apiv1.RespondActivityTaskCompletedRequest> | null {
	const t$: shared.RespondActivityTaskCompletedRequest = t == null ? $.pointerTarget<shared.RespondActivityTaskCompletedRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.RespondActivityTaskCompletedRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField90 = __goscript_types.Payload((t$ as shared.RespondActivityTaskCompletedRequest).Result); const __goscriptLiteralField91 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskCompletedRequest).GetIdentity() : shared.RespondActivityTaskCompletedRequest.prototype.GetIdentity.call(t)); return new apiv1.RespondActivityTaskCompletedRequest({TaskToken: (t$ as shared.RespondActivityTaskCompletedRequest).TaskToken, Result: __goscriptLiteralField90, Identity: __goscriptLiteralField91}) })()
}

export function RespondActivityTaskFailedByIDRequest(t: shared.RespondActivityTaskFailedByIDRequest | $.VarRef<shared.RespondActivityTaskFailedByIDRequest> | null): apiv1.RespondActivityTaskFailedByIDRequest | $.VarRef<apiv1.RespondActivityTaskFailedByIDRequest> | null {
	const t$: shared.RespondActivityTaskFailedByIDRequest = t == null ? $.pointerTarget<shared.RespondActivityTaskFailedByIDRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.RespondActivityTaskFailedByIDRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField92 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskFailedByIDRequest).GetDomain() : shared.RespondActivityTaskFailedByIDRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField93 = __goscript_types.WorkflowRunPair((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskFailedByIDRequest).GetWorkflowID() : shared.RespondActivityTaskFailedByIDRequest.prototype.GetWorkflowID.call(t)), (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskFailedByIDRequest).GetRunID() : shared.RespondActivityTaskFailedByIDRequest.prototype.GetRunID.call(t))); const __goscriptLiteralField94 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskFailedByIDRequest).GetActivityID() : shared.RespondActivityTaskFailedByIDRequest.prototype.GetActivityID.call(t)); const __goscriptLiteralField95 = __goscript_types.FailureWithOptions((t$ as shared.RespondActivityTaskFailedByIDRequest).Reason, (t$ as shared.RespondActivityTaskFailedByIDRequest).Details, (t$ as shared.RespondActivityTaskFailedByIDRequest).FailureOptions); const __goscriptLiteralField96 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskFailedByIDRequest).GetIdentity() : shared.RespondActivityTaskFailedByIDRequest.prototype.GetIdentity.call(t)); const __goscriptLiteralField97 = __goscript_types.Payload((t$ as shared.RespondActivityTaskFailedByIDRequest).HeartbeatDetails); return new apiv1.RespondActivityTaskFailedByIDRequest({Domain: __goscriptLiteralField92, WorkflowExecution: __goscriptLiteralField93, ActivityId: __goscriptLiteralField94, Failure: __goscriptLiteralField95, Identity: __goscriptLiteralField96, HeartbeatDetails: __goscriptLiteralField97}) })()
}

export function RespondActivityTaskFailedRequest(t: shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null): apiv1.RespondActivityTaskFailedRequest | $.VarRef<apiv1.RespondActivityTaskFailedRequest> | null {
	const t$: shared.RespondActivityTaskFailedRequest = t == null ? $.pointerTarget<shared.RespondActivityTaskFailedRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.RespondActivityTaskFailedRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField98 = __goscript_types.FailureWithOptions((t$ as shared.RespondActivityTaskFailedRequest).Reason, (t$ as shared.RespondActivityTaskFailedRequest).Details, (t$ as shared.RespondActivityTaskFailedRequest).FailureOptions); const __goscriptLiteralField99 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondActivityTaskFailedRequest).GetIdentity() : shared.RespondActivityTaskFailedRequest.prototype.GetIdentity.call(t)); const __goscriptLiteralField100 = __goscript_types.Payload((t$ as shared.RespondActivityTaskFailedRequest).HeartbeatDetails); return new apiv1.RespondActivityTaskFailedRequest({TaskToken: (t$ as shared.RespondActivityTaskFailedRequest).TaskToken, Failure: __goscriptLiteralField98, Identity: __goscriptLiteralField99, HeartbeatDetails: __goscriptLiteralField100}) })()
}

export function RespondDecisionTaskCompletedRequest(t: shared.RespondDecisionTaskCompletedRequest | $.VarRef<shared.RespondDecisionTaskCompletedRequest> | null): apiv1.RespondDecisionTaskCompletedRequest | $.VarRef<apiv1.RespondDecisionTaskCompletedRequest> | null {
	const t$: shared.RespondDecisionTaskCompletedRequest = t == null ? $.pointerTarget<shared.RespondDecisionTaskCompletedRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.RespondDecisionTaskCompletedRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField101 = __goscript_decision.DecisionArray((t$ as shared.RespondDecisionTaskCompletedRequest).Decisions); const __goscriptLiteralField102 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondDecisionTaskCompletedRequest).GetIdentity() : shared.RespondDecisionTaskCompletedRequest.prototype.GetIdentity.call(t)); const __goscriptLiteralField103 = __goscript_types.StickyExecutionAttributes((t$ as shared.RespondDecisionTaskCompletedRequest).StickyAttributes); const __goscriptLiteralField104 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondDecisionTaskCompletedRequest).GetReturnNewDecisionTask() : shared.RespondDecisionTaskCompletedRequest.prototype.GetReturnNewDecisionTask.call(t)); const __goscriptLiteralField105 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondDecisionTaskCompletedRequest).GetForceCreateNewDecisionTask() : shared.RespondDecisionTaskCompletedRequest.prototype.GetForceCreateNewDecisionTask.call(t)); const __goscriptLiteralField106 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondDecisionTaskCompletedRequest).GetBinaryChecksum() : shared.RespondDecisionTaskCompletedRequest.prototype.GetBinaryChecksum.call(t)); const __goscriptLiteralField107 = __goscript_types.WorkflowQueryResultMap((t$ as shared.RespondDecisionTaskCompletedRequest).QueryResults); return new apiv1.RespondDecisionTaskCompletedRequest({TaskToken: (t$ as shared.RespondDecisionTaskCompletedRequest).TaskToken, Decisions: __goscriptLiteralField101, ExecutionContext: (t$ as shared.RespondDecisionTaskCompletedRequest).ExecutionContext, Identity: __goscriptLiteralField102, StickyAttributes: __goscriptLiteralField103, ReturnNewDecisionTask: __goscriptLiteralField104, ForceCreateNewDecisionTask: __goscriptLiteralField105, BinaryChecksum: __goscriptLiteralField106, QueryResults: __goscriptLiteralField107}) })()
}

export function RespondDecisionTaskFailedRequest(t: shared.RespondDecisionTaskFailedRequest | $.VarRef<shared.RespondDecisionTaskFailedRequest> | null): apiv1.RespondDecisionTaskFailedRequest | $.VarRef<apiv1.RespondDecisionTaskFailedRequest> | null {
	const t$: shared.RespondDecisionTaskFailedRequest = t == null ? $.pointerTarget<shared.RespondDecisionTaskFailedRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.RespondDecisionTaskFailedRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField108 = __goscript__enum.DecisionTaskFailedCause((t$ as shared.RespondDecisionTaskFailedRequest).Cause); const __goscriptLiteralField109 = __goscript_types.Payload((t$ as shared.RespondDecisionTaskFailedRequest).Details); const __goscriptLiteralField110 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondDecisionTaskFailedRequest).GetIdentity() : shared.RespondDecisionTaskFailedRequest.prototype.GetIdentity.call(t)); const __goscriptLiteralField111 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondDecisionTaskFailedRequest).GetBinaryChecksum() : shared.RespondDecisionTaskFailedRequest.prototype.GetBinaryChecksum.call(t)); return new apiv1.RespondDecisionTaskFailedRequest({TaskToken: (t$ as shared.RespondDecisionTaskFailedRequest).TaskToken, Cause: __goscriptLiteralField108, Details: __goscriptLiteralField109, Identity: __goscriptLiteralField110, BinaryChecksum: __goscriptLiteralField111}) })()
}

export function RespondQueryTaskCompletedRequest(t: shared.RespondQueryTaskCompletedRequest | $.VarRef<shared.RespondQueryTaskCompletedRequest> | null): apiv1.RespondQueryTaskCompletedRequest | $.VarRef<apiv1.RespondQueryTaskCompletedRequest> | null {
	const t$: shared.RespondQueryTaskCompletedRequest = t == null ? $.pointerTarget<shared.RespondQueryTaskCompletedRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.RespondQueryTaskCompletedRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField115 = __goscript_types.WorkerVersionInfo((t$ as shared.RespondQueryTaskCompletedRequest).WorkerVersionInfo); return new apiv1.RespondQueryTaskCompletedRequest({TaskToken: (t$ as shared.RespondQueryTaskCompletedRequest).TaskToken, Result: (() => { const __goscriptLiteralField112 = __goscript__enum.QueryTaskCompletedType((t$ as shared.RespondQueryTaskCompletedRequest).CompletedType); const __goscriptLiteralField113 = __goscript_types.Payload((t$ as shared.RespondQueryTaskCompletedRequest).QueryResult); const __goscriptLiteralField114 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RespondQueryTaskCompletedRequest).GetErrorMessage() : shared.RespondQueryTaskCompletedRequest.prototype.GetErrorMessage.call(t)); return new apiv1.WorkflowQueryResult({ResultType: __goscriptLiteralField112, Answer: __goscriptLiteralField113, ErrorMessage: __goscriptLiteralField114}) })(), WorkerVersionInfo: __goscriptLiteralField115}) })()
}

export function ScanWorkflowExecutionsRequest(t: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null): apiv1.ScanWorkflowExecutionsRequest | $.VarRef<apiv1.ScanWorkflowExecutionsRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField116 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ListWorkflowExecutionsRequest).GetDomain() : shared.ListWorkflowExecutionsRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField117 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ListWorkflowExecutionsRequest).GetPageSize() : shared.ListWorkflowExecutionsRequest.prototype.GetPageSize.call(t)); const __goscriptLiteralField118 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ListWorkflowExecutionsRequest).GetQuery() : shared.ListWorkflowExecutionsRequest.prototype.GetQuery.call(t)); return new apiv1.ScanWorkflowExecutionsRequest({Domain: __goscriptLiteralField116, PageSize: __goscriptLiteralField117, NextPageToken: $.pointerValue<shared.ListWorkflowExecutionsRequest>(t).NextPageToken, Query: __goscriptLiteralField118}) })()
}

export function SignalWithStartWorkflowExecutionRequest(t: shared.SignalWithStartWorkflowExecutionRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionRequest> | null): apiv1.SignalWithStartWorkflowExecutionRequest | $.VarRef<apiv1.SignalWithStartWorkflowExecutionRequest> | null {
	const t$: shared.SignalWithStartWorkflowExecutionRequest = t == null ? $.pointerTarget<shared.SignalWithStartWorkflowExecutionRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.SignalWithStartWorkflowExecutionRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField139 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalWithStartWorkflowExecutionRequest).GetSignalName() : shared.SignalWithStartWorkflowExecutionRequest.prototype.GetSignalName.call(t)); const __goscriptLiteralField140 = __goscript_types.Payload((t$ as shared.SignalWithStartWorkflowExecutionRequest).SignalInput); return new apiv1.SignalWithStartWorkflowExecutionRequest({StartRequest: (() => { const __goscriptLiteralField119 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalWithStartWorkflowExecutionRequest).GetDomain() : shared.SignalWithStartWorkflowExecutionRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField120 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalWithStartWorkflowExecutionRequest).GetWorkflowId() : shared.SignalWithStartWorkflowExecutionRequest.prototype.GetWorkflowId.call(t)); const __goscriptLiteralField121 = __goscript_types.WorkflowType((t$ as shared.SignalWithStartWorkflowExecutionRequest).WorkflowType); const __goscriptLiteralField122 = __goscript_types.TaskList((t$ as shared.SignalWithStartWorkflowExecutionRequest).TaskList); const __goscriptLiteralField123 = __goscript_types.Payload((t$ as shared.SignalWithStartWorkflowExecutionRequest).Input); const __goscriptLiteralField124 = __goscript_helpers.secondsToDuration((t$ as shared.SignalWithStartWorkflowExecutionRequest).ExecutionStartToCloseTimeoutSeconds); const __goscriptLiteralField125 = __goscript_helpers.secondsToDuration((t$ as shared.SignalWithStartWorkflowExecutionRequest).TaskStartToCloseTimeoutSeconds); const __goscriptLiteralField126 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalWithStartWorkflowExecutionRequest).GetIdentity() : shared.SignalWithStartWorkflowExecutionRequest.prototype.GetIdentity.call(t)); const __goscriptLiteralField127 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalWithStartWorkflowExecutionRequest).GetRequestId() : shared.SignalWithStartWorkflowExecutionRequest.prototype.GetRequestId.call(t)); const __goscriptLiteralField128 = __goscript__enum.WorkflowIDReusePolicy((t$ as shared.SignalWithStartWorkflowExecutionRequest).WorkflowIdReusePolicy); const __goscriptLiteralField129 = __goscript_types.RetryPolicy((t$ as shared.SignalWithStartWorkflowExecutionRequest).RetryPolicy); const __goscriptLiteralField130 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalWithStartWorkflowExecutionRequest).GetCronSchedule() : shared.SignalWithStartWorkflowExecutionRequest.prototype.GetCronSchedule.call(t)); const __goscriptLiteralField131 = __goscript_types.Memo((t$ as shared.SignalWithStartWorkflowExecutionRequest).Memo); const __goscriptLiteralField132 = __goscript_types.SearchAttributes((t$ as shared.SignalWithStartWorkflowExecutionRequest).SearchAttributes); const __goscriptLiteralField133 = __goscript_types.Header((t$ as shared.SignalWithStartWorkflowExecutionRequest).Header); const __goscriptLiteralField134 = __goscript_helpers.secondsToDuration((t$ as shared.SignalWithStartWorkflowExecutionRequest).DelayStartSeconds); const __goscriptLiteralField135 = __goscript_helpers.secondsToDuration((t$ as shared.SignalWithStartWorkflowExecutionRequest).JitterStartSeconds); const __goscriptLiteralField136 = __goscript_helpers.unixNanoToTime((t$ as shared.SignalWithStartWorkflowExecutionRequest).FirstRunAtTimestamp); const __goscriptLiteralField137 = __goscript__enum.CronOverlapPolicy((t$ as shared.SignalWithStartWorkflowExecutionRequest).CronOverlapPolicy); const __goscriptLiteralField138 = __goscript_types.ActiveClusterSelectionPolicy((t$ as shared.SignalWithStartWorkflowExecutionRequest).ActiveClusterSelectionPolicy); return new apiv1.StartWorkflowExecutionRequest({Domain: __goscriptLiteralField119, WorkflowId: __goscriptLiteralField120, WorkflowType: __goscriptLiteralField121, TaskList: __goscriptLiteralField122, Input: __goscriptLiteralField123, ExecutionStartToCloseTimeout: __goscriptLiteralField124, TaskStartToCloseTimeout: __goscriptLiteralField125, Identity: __goscriptLiteralField126, RequestId: __goscriptLiteralField127, WorkflowIdReusePolicy: __goscriptLiteralField128, RetryPolicy: __goscriptLiteralField129, CronSchedule: __goscriptLiteralField130, Memo: __goscriptLiteralField131, SearchAttributes: __goscriptLiteralField132, Header: __goscriptLiteralField133, DelayStart: __goscriptLiteralField134, JitterStart: __goscriptLiteralField135, FirstRunAt: __goscriptLiteralField136, CronOverlapPolicy: __goscriptLiteralField137, ActiveClusterSelectionPolicy: __goscriptLiteralField138}) })(), SignalName: __goscriptLiteralField139, SignalInput: __goscriptLiteralField140, Control: (t$ as shared.SignalWithStartWorkflowExecutionRequest).Control}) })()
}

export function SignalWithStartWorkflowExecutionAsyncRequest(t: shared.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncRequest> | null): apiv1.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<apiv1.SignalWithStartWorkflowExecutionAsyncRequest> | null {
	if (t == null) {
		return null
	}

	return (() => { const __goscriptLiteralField141 = SignalWithStartWorkflowExecutionRequest((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalWithStartWorkflowExecutionAsyncRequest).GetRequest() : shared.SignalWithStartWorkflowExecutionAsyncRequest.prototype.GetRequest.call(t))); return new apiv1.SignalWithStartWorkflowExecutionAsyncRequest({Request: __goscriptLiteralField141}) })()
}

export function SignalWorkflowExecutionRequest(t: shared.SignalWorkflowExecutionRequest | $.VarRef<shared.SignalWorkflowExecutionRequest> | null): apiv1.SignalWorkflowExecutionRequest | $.VarRef<apiv1.SignalWorkflowExecutionRequest> | null {
	const t$: shared.SignalWorkflowExecutionRequest = t == null ? $.pointerTarget<shared.SignalWorkflowExecutionRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.SignalWorkflowExecutionRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField142 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalWorkflowExecutionRequest).GetDomain() : shared.SignalWorkflowExecutionRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField143 = __goscript_types.WorkflowExecution((t$ as shared.SignalWorkflowExecutionRequest).WorkflowExecution); const __goscriptLiteralField144 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalWorkflowExecutionRequest).GetSignalName() : shared.SignalWorkflowExecutionRequest.prototype.GetSignalName.call(t)); const __goscriptLiteralField145 = __goscript_types.Payload((t$ as shared.SignalWorkflowExecutionRequest).Input); const __goscriptLiteralField146 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalWorkflowExecutionRequest).GetIdentity() : shared.SignalWorkflowExecutionRequest.prototype.GetIdentity.call(t)); const __goscriptLiteralField147 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalWorkflowExecutionRequest).GetRequestId() : shared.SignalWorkflowExecutionRequest.prototype.GetRequestId.call(t)); return new apiv1.SignalWorkflowExecutionRequest({Domain: __goscriptLiteralField142, WorkflowExecution: __goscriptLiteralField143, SignalName: __goscriptLiteralField144, SignalInput: __goscriptLiteralField145, Identity: __goscriptLiteralField146, RequestId: __goscriptLiteralField147, Control: (t$ as shared.SignalWorkflowExecutionRequest).Control}) })()
}

export function StartWorkflowExecutionRequest(t: shared.StartWorkflowExecutionRequest | $.VarRef<shared.StartWorkflowExecutionRequest> | null): apiv1.StartWorkflowExecutionRequest | $.VarRef<apiv1.StartWorkflowExecutionRequest> | null {
	const t$: shared.StartWorkflowExecutionRequest = t == null ? $.pointerTarget<shared.StartWorkflowExecutionRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.StartWorkflowExecutionRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField148 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.StartWorkflowExecutionRequest).GetDomain() : shared.StartWorkflowExecutionRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField149 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.StartWorkflowExecutionRequest).GetWorkflowId() : shared.StartWorkflowExecutionRequest.prototype.GetWorkflowId.call(t)); const __goscriptLiteralField150 = __goscript_types.WorkflowType((t$ as shared.StartWorkflowExecutionRequest).WorkflowType); const __goscriptLiteralField151 = __goscript_types.TaskList((t$ as shared.StartWorkflowExecutionRequest).TaskList); const __goscriptLiteralField152 = __goscript_types.Payload((t$ as shared.StartWorkflowExecutionRequest).Input); const __goscriptLiteralField153 = __goscript_helpers.secondsToDuration((t$ as shared.StartWorkflowExecutionRequest).ExecutionStartToCloseTimeoutSeconds); const __goscriptLiteralField154 = __goscript_helpers.secondsToDuration((t$ as shared.StartWorkflowExecutionRequest).TaskStartToCloseTimeoutSeconds); const __goscriptLiteralField155 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.StartWorkflowExecutionRequest).GetIdentity() : shared.StartWorkflowExecutionRequest.prototype.GetIdentity.call(t)); const __goscriptLiteralField156 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.StartWorkflowExecutionRequest).GetRequestId() : shared.StartWorkflowExecutionRequest.prototype.GetRequestId.call(t)); const __goscriptLiteralField157 = __goscript__enum.WorkflowIDReusePolicy((t$ as shared.StartWorkflowExecutionRequest).WorkflowIdReusePolicy); const __goscriptLiteralField158 = __goscript_types.RetryPolicy((t$ as shared.StartWorkflowExecutionRequest).RetryPolicy); const __goscriptLiteralField159 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.StartWorkflowExecutionRequest).GetCronSchedule() : shared.StartWorkflowExecutionRequest.prototype.GetCronSchedule.call(t)); const __goscriptLiteralField160 = __goscript_types.Memo((t$ as shared.StartWorkflowExecutionRequest).Memo); const __goscriptLiteralField161 = __goscript_types.SearchAttributes((t$ as shared.StartWorkflowExecutionRequest).SearchAttributes); const __goscriptLiteralField162 = __goscript_types.Header((t$ as shared.StartWorkflowExecutionRequest).Header); const __goscriptLiteralField163 = __goscript_helpers.secondsToDuration((t$ as shared.StartWorkflowExecutionRequest).DelayStartSeconds); const __goscriptLiteralField164 = __goscript_helpers.secondsToDuration((t$ as shared.StartWorkflowExecutionRequest).JitterStartSeconds); const __goscriptLiteralField165 = __goscript_helpers.unixNanoToTime((t$ as shared.StartWorkflowExecutionRequest).FirstRunAtTimestamp); const __goscriptLiteralField166 = __goscript__enum.CronOverlapPolicy((t$ as shared.StartWorkflowExecutionRequest).CronOverlapPolicy); const __goscriptLiteralField167 = __goscript_types.ActiveClusterSelectionPolicy((t$ as shared.StartWorkflowExecutionRequest).ActiveClusterSelectionPolicy); return new apiv1.StartWorkflowExecutionRequest({Domain: __goscriptLiteralField148, WorkflowId: __goscriptLiteralField149, WorkflowType: __goscriptLiteralField150, TaskList: __goscriptLiteralField151, Input: __goscriptLiteralField152, ExecutionStartToCloseTimeout: __goscriptLiteralField153, TaskStartToCloseTimeout: __goscriptLiteralField154, Identity: __goscriptLiteralField155, RequestId: __goscriptLiteralField156, WorkflowIdReusePolicy: __goscriptLiteralField157, RetryPolicy: __goscriptLiteralField158, CronSchedule: __goscriptLiteralField159, Memo: __goscriptLiteralField160, SearchAttributes: __goscriptLiteralField161, Header: __goscriptLiteralField162, DelayStart: __goscriptLiteralField163, JitterStart: __goscriptLiteralField164, FirstRunAt: __goscriptLiteralField165, CronOverlapPolicy: __goscriptLiteralField166, ActiveClusterSelectionPolicy: __goscriptLiteralField167}) })()
}

export function StartWorkflowExecutionAsyncRequest(t: shared.StartWorkflowExecutionAsyncRequest | $.VarRef<shared.StartWorkflowExecutionAsyncRequest> | null): apiv1.StartWorkflowExecutionAsyncRequest | $.VarRef<apiv1.StartWorkflowExecutionAsyncRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField168 = StartWorkflowExecutionRequest((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.StartWorkflowExecutionAsyncRequest).GetRequest() : shared.StartWorkflowExecutionAsyncRequest.prototype.GetRequest.call(t))); return new apiv1.StartWorkflowExecutionAsyncRequest({Request: __goscriptLiteralField168}) })()
}

export function TerminateWorkflowExecutionRequest(t: shared.TerminateWorkflowExecutionRequest | $.VarRef<shared.TerminateWorkflowExecutionRequest> | null): apiv1.TerminateWorkflowExecutionRequest | $.VarRef<apiv1.TerminateWorkflowExecutionRequest> | null {
	const t$: shared.TerminateWorkflowExecutionRequest = t == null ? $.pointerTarget<shared.TerminateWorkflowExecutionRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.TerminateWorkflowExecutionRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField169 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TerminateWorkflowExecutionRequest).GetDomain() : shared.TerminateWorkflowExecutionRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField170 = __goscript_types.WorkflowExecution((t$ as shared.TerminateWorkflowExecutionRequest).WorkflowExecution); const __goscriptLiteralField171 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TerminateWorkflowExecutionRequest).GetReason() : shared.TerminateWorkflowExecutionRequest.prototype.GetReason.call(t)); const __goscriptLiteralField172 = __goscript_types.Payload((t$ as shared.TerminateWorkflowExecutionRequest).Details); const __goscriptLiteralField173 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TerminateWorkflowExecutionRequest).GetIdentity() : shared.TerminateWorkflowExecutionRequest.prototype.GetIdentity.call(t)); return new apiv1.TerminateWorkflowExecutionRequest({Domain: __goscriptLiteralField169, WorkflowExecution: __goscriptLiteralField170, Reason: __goscriptLiteralField171, Details: __goscriptLiteralField172, Identity: __goscriptLiteralField173}) })()
}

export function UpdateDomainRequest(t: shared.UpdateDomainRequest | $.VarRef<shared.UpdateDomainRequest> | null): apiv1.UpdateDomainRequest | $.VarRef<apiv1.UpdateDomainRequest> | null {
	const t$: shared.UpdateDomainRequest = t == null ? $.pointerTarget<shared.UpdateDomainRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.UpdateDomainRequest>(t)
	if (t == null) {
		return null
	}
	let request = $.varRef((() => { const __goscriptLiteralField174 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.UpdateDomainRequest).GetName() : shared.UpdateDomainRequest.prototype.GetName.call(t)); const __goscriptLiteralField175 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.UpdateDomainRequest).GetSecurityToken() : shared.UpdateDomainRequest.prototype.GetSecurityToken.call(t)); return $.markAsStructValue(new apiv1.UpdateDomainRequest({Name: __goscriptLiteralField174, SecurityToken: __goscriptLiteralField175})) })())
	let fields: $.Slice<string> = null! as $.Slice<string>

	{
		let updatedInfo: shared.UpdateDomainInfo | $.VarRef<shared.UpdateDomainInfo> | null = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.UpdateDomainRequest).GetUpdatedInfo() : shared.UpdateDomainRequest.prototype.GetUpdatedInfo.call(t))
		if (updatedInfo != null) {
			if ($.pointerValue<shared.UpdateDomainInfo>(updatedInfo).Description != null) {
				request.value.Description = $.pointerValue<string>($.pointerValue<shared.UpdateDomainInfo>(updatedInfo).Description)
				fields = $.appendOne(fields, "description")
			}
			if ($.pointerValue<shared.UpdateDomainInfo>(updatedInfo).OwnerEmail != null) {
				request.value.OwnerEmail = $.pointerValue<string>($.pointerValue<shared.UpdateDomainInfo>(updatedInfo).OwnerEmail)
				fields = $.appendOne(fields, "owner_email")
			}
			if ($.pointerValue<shared.UpdateDomainInfo>(updatedInfo).Data != null) {
				request.value.Data = $.pointerValue<shared.UpdateDomainInfo>(updatedInfo).Data
				fields = $.appendOne(fields, "data")
			}
		}
	}
	{
		let configuration: shared.DomainConfiguration | $.VarRef<shared.DomainConfiguration> | null = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.UpdateDomainRequest).GetConfiguration() : shared.UpdateDomainRequest.prototype.GetConfiguration.call(t))
		if (configuration != null) {
			if ($.pointerValue<shared.DomainConfiguration>(configuration).WorkflowExecutionRetentionPeriodInDays != null) {
				request.value.WorkflowExecutionRetentionPeriod = __goscript_helpers.daysToDuration($.pointerValue<shared.DomainConfiguration>(configuration).WorkflowExecutionRetentionPeriodInDays)
				fields = $.appendOne(fields, "workflow_execution_retention_period")
			}
			// if t.EmitMetric != nil {} - DEPRECATED
			if ($.pointerValue<shared.DomainConfiguration>(configuration).BadBinaries != null) {
				request.value.BadBinaries = __goscript_types.BadBinaries($.pointerValue<shared.DomainConfiguration>(configuration).BadBinaries)
				fields = $.appendOne(fields, "bad_binaries")
			}
			if ($.pointerValue<shared.DomainConfiguration>(configuration).HistoryArchivalStatus != null) {
				request.value.HistoryArchivalStatus = __goscript__enum.ArchivalStatus($.pointerValue<shared.DomainConfiguration>(configuration).HistoryArchivalStatus)
				fields = $.appendOne(fields, "history_archival_status")
			}
			if ($.pointerValue<shared.DomainConfiguration>(configuration).HistoryArchivalURI != null) {
				request.value.HistoryArchivalUri = $.pointerValue<string>($.pointerValue<shared.DomainConfiguration>(configuration).HistoryArchivalURI)
				fields = $.appendOne(fields, "history_archival_uri")
			}
			if ($.pointerValue<shared.DomainConfiguration>(configuration).VisibilityArchivalStatus != null) {
				request.value.VisibilityArchivalStatus = __goscript__enum.ArchivalStatus($.pointerValue<shared.DomainConfiguration>(configuration).VisibilityArchivalStatus)
				fields = $.appendOne(fields, "visibility_archival_status")
			}
			if ($.pointerValue<shared.DomainConfiguration>(configuration).VisibilityArchivalURI != null) {
				request.value.VisibilityArchivalUri = $.pointerValue<string>($.pointerValue<shared.DomainConfiguration>(configuration).VisibilityArchivalURI)
				fields = $.appendOne(fields, "visibility_archival_uri")
			}
		}
	}
	{
		let replicationConfiguration: shared.DomainReplicationConfiguration | $.VarRef<shared.DomainReplicationConfiguration> | null = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.UpdateDomainRequest).GetReplicationConfiguration() : shared.UpdateDomainRequest.prototype.GetReplicationConfiguration.call(t))
		if (replicationConfiguration != null) {
			if ($.pointerValue<shared.DomainReplicationConfiguration>(replicationConfiguration).ActiveClusterName != null) {
				request.value.ActiveClusterName = $.pointerValue<string>($.pointerValue<shared.DomainReplicationConfiguration>(replicationConfiguration).ActiveClusterName)
				fields = $.appendOne(fields, "active_cluster_name")
			}
			if ($.pointerValue<shared.DomainReplicationConfiguration>(replicationConfiguration).Clusters != null) {
				request.value.Clusters = __goscript_types.ClusterReplicationConfigurationArray($.pointerValue<shared.DomainReplicationConfiguration>(replicationConfiguration).Clusters)
				fields = $.appendOne(fields, "clusters")
			}
			if ($.pointerValue<shared.DomainReplicationConfiguration>(replicationConfiguration).ActiveClusters != null) {
				request.value.ActiveClusters = __goscript_types.ActiveClusters($.pointerValue<shared.DomainReplicationConfiguration>(replicationConfiguration).ActiveClusters)
				fields = $.appendOne(fields, "active_clusters")
			}
		}
	}
	if ((t$ as shared.UpdateDomainRequest).DeleteBadBinary != null) {
		request.value.DeleteBadBinary = $.pointerValue<string>((t$ as shared.UpdateDomainRequest).DeleteBadBinary)
		fields = $.appendOne(fields, "delete_bad_binary")
	}
	if ((t$ as shared.UpdateDomainRequest).FailoverTimeoutInSeconds != null) {
		request.value.FailoverTimeout = __goscript_helpers.secondsToDuration((t$ as shared.UpdateDomainRequest).FailoverTimeoutInSeconds)
		fields = $.appendOne(fields, "failover_timeout")
	}

	request.value.UpdateMask = __goscript_helpers.newFieldMask(fields)

	return request
}

export function ListClosedWorkflowExecutionsRequest(r: shared.ListClosedWorkflowExecutionsRequest | $.VarRef<shared.ListClosedWorkflowExecutionsRequest> | null): apiv1.ListClosedWorkflowExecutionsRequest | $.VarRef<apiv1.ListClosedWorkflowExecutionsRequest> | null {
	const r$: shared.ListClosedWorkflowExecutionsRequest = r == null ? $.pointerTarget<shared.ListClosedWorkflowExecutionsRequest>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<shared.ListClosedWorkflowExecutionsRequest>(r)
	if (r == null) {
		return null
	}
	let request = $.varRef((() => { const __goscriptLiteralField176 = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as shared.ListClosedWorkflowExecutionsRequest).GetDomain() : shared.ListClosedWorkflowExecutionsRequest.prototype.GetDomain.call(r)); const __goscriptLiteralField177 = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as shared.ListClosedWorkflowExecutionsRequest).GetMaximumPageSize() : shared.ListClosedWorkflowExecutionsRequest.prototype.GetMaximumPageSize.call(r)); const __goscriptLiteralField178 = __goscript_types.StartTimeFilter((r$ as shared.ListClosedWorkflowExecutionsRequest).StartTimeFilter); return $.markAsStructValue(new apiv1.ListClosedWorkflowExecutionsRequest({Domain: __goscriptLiteralField176, PageSize: __goscriptLiteralField177, NextPageToken: (r$ as shared.ListClosedWorkflowExecutionsRequest).NextPageToken, StartTimeFilter: __goscriptLiteralField178})) })())
	if ((r$ as shared.ListClosedWorkflowExecutionsRequest).ExecutionFilter != null) {
		request.value.Filters = $.interfaceValue<apiv1.isListClosedWorkflowExecutionsRequest_Filters | null>((() => { const __goscriptLiteralField179 = __goscript_types.WorkflowExecutionFilter((r$ as shared.ListClosedWorkflowExecutionsRequest).ExecutionFilter); return new apiv1.ListClosedWorkflowExecutionsRequest_ExecutionFilter({ExecutionFilter: __goscriptLiteralField179}) })(), "*apiv1.ListClosedWorkflowExecutionsRequest_ExecutionFilter", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest_ExecutionFilter"))
	}
	if ((r$ as shared.ListClosedWorkflowExecutionsRequest).TypeFilter != null) {
		request.value.Filters = $.interfaceValue<apiv1.isListClosedWorkflowExecutionsRequest_Filters | null>((() => { const __goscriptLiteralField180 = __goscript_types.WorkflowTypeFilter((r$ as shared.ListClosedWorkflowExecutionsRequest).TypeFilter); return new apiv1.ListClosedWorkflowExecutionsRequest_TypeFilter({TypeFilter: __goscriptLiteralField180}) })(), "*apiv1.ListClosedWorkflowExecutionsRequest_TypeFilter", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest_TypeFilter"))
	}
	if ((r$ as shared.ListClosedWorkflowExecutionsRequest).StatusFilter != null) {
		request.value.Filters = $.interfaceValue<apiv1.isListClosedWorkflowExecutionsRequest_Filters | null>((() => { const __goscriptLiteralField181 = __goscript_types.StatusFilter((r$ as shared.ListClosedWorkflowExecutionsRequest).StatusFilter); return new apiv1.ListClosedWorkflowExecutionsRequest_StatusFilter({StatusFilter: __goscriptLiteralField181}) })(), "*apiv1.ListClosedWorkflowExecutionsRequest_StatusFilter", /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsRequest_StatusFilter"))
	}

	return request
}

export function ListOpenWorkflowExecutionsRequest(r: shared.ListOpenWorkflowExecutionsRequest | $.VarRef<shared.ListOpenWorkflowExecutionsRequest> | null): apiv1.ListOpenWorkflowExecutionsRequest | $.VarRef<apiv1.ListOpenWorkflowExecutionsRequest> | null {
	const r$: shared.ListOpenWorkflowExecutionsRequest = r == null ? $.pointerTarget<shared.ListOpenWorkflowExecutionsRequest>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<shared.ListOpenWorkflowExecutionsRequest>(r)
	if (r == null) {
		return null
	}
	let request = $.varRef((() => { const __goscriptLiteralField182 = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as shared.ListOpenWorkflowExecutionsRequest).GetDomain() : shared.ListOpenWorkflowExecutionsRequest.prototype.GetDomain.call(r)); const __goscriptLiteralField183 = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as shared.ListOpenWorkflowExecutionsRequest).GetMaximumPageSize() : shared.ListOpenWorkflowExecutionsRequest.prototype.GetMaximumPageSize.call(r)); const __goscriptLiteralField184 = __goscript_types.StartTimeFilter((r$ as shared.ListOpenWorkflowExecutionsRequest).StartTimeFilter); return $.markAsStructValue(new apiv1.ListOpenWorkflowExecutionsRequest({Domain: __goscriptLiteralField182, PageSize: __goscriptLiteralField183, NextPageToken: (r$ as shared.ListOpenWorkflowExecutionsRequest).NextPageToken, StartTimeFilter: __goscriptLiteralField184})) })())
	if ((r$ as shared.ListOpenWorkflowExecutionsRequest).ExecutionFilter != null) {
		request.value.Filters = $.interfaceValue<apiv1.isListOpenWorkflowExecutionsRequest_Filters | null>((() => { const __goscriptLiteralField185 = __goscript_types.WorkflowExecutionFilter((r$ as shared.ListOpenWorkflowExecutionsRequest).ExecutionFilter); return new apiv1.ListOpenWorkflowExecutionsRequest_ExecutionFilter({ExecutionFilter: __goscriptLiteralField185}) })(), "*apiv1.ListOpenWorkflowExecutionsRequest_ExecutionFilter", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest_ExecutionFilter"))
	}
	if ((r$ as shared.ListOpenWorkflowExecutionsRequest).TypeFilter != null) {
		request.value.Filters = $.interfaceValue<apiv1.isListOpenWorkflowExecutionsRequest_Filters | null>((() => { const __goscriptLiteralField186 = __goscript_types.WorkflowTypeFilter((r$ as shared.ListOpenWorkflowExecutionsRequest).TypeFilter); return new apiv1.ListOpenWorkflowExecutionsRequest_TypeFilter({TypeFilter: __goscriptLiteralField186}) })(), "*apiv1.ListOpenWorkflowExecutionsRequest_TypeFilter", /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsRequest_TypeFilter"))
	}

	return request
}

export function RefreshWorkflowTasksRequest(r: shared.RefreshWorkflowTasksRequest | $.VarRef<shared.RefreshWorkflowTasksRequest> | null): apiv1.RefreshWorkflowTasksRequest | $.VarRef<apiv1.RefreshWorkflowTasksRequest> | null {
	if (r == null) {
		return null
	}
	let request = $.varRef((() => { const __goscriptLiteralField187 = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as shared.RefreshWorkflowTasksRequest).GetDomain() : shared.RefreshWorkflowTasksRequest.prototype.GetDomain.call(r)); const __goscriptLiteralField188 = __goscript_types.WorkflowExecution($.pointerValue<shared.RefreshWorkflowTasksRequest>(r).Execution); return $.markAsStructValue(new apiv1.RefreshWorkflowTasksRequest({Domain: __goscriptLiteralField187, WorkflowExecution: __goscriptLiteralField188})) })())
	return request
}

export function RestartWorkflowExecutionRequest(r: shared.RestartWorkflowExecutionRequest | $.VarRef<shared.RestartWorkflowExecutionRequest> | null): apiv1.RestartWorkflowExecutionRequest | $.VarRef<apiv1.RestartWorkflowExecutionRequest> | null {
	if (r == null) {
		return null
	}
	let request = $.varRef((() => { const __goscriptLiteralField189 = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as shared.RestartWorkflowExecutionRequest).GetDomain() : shared.RestartWorkflowExecutionRequest.prototype.GetDomain.call(r)); const __goscriptLiteralField190 = __goscript_types.WorkflowExecution((r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as shared.RestartWorkflowExecutionRequest).GetWorkflowExecution() : shared.RestartWorkflowExecutionRequest.prototype.GetWorkflowExecution.call(r))); const __goscriptLiteralField191 = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as shared.RestartWorkflowExecutionRequest).GetIdentity() : shared.RestartWorkflowExecutionRequest.prototype.GetIdentity.call(r)); const __goscriptLiteralField192 = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as shared.RestartWorkflowExecutionRequest).GetReason() : shared.RestartWorkflowExecutionRequest.prototype.GetReason.call(r)); return $.markAsStructValue(new apiv1.RestartWorkflowExecutionRequest({Domain: __goscriptLiteralField189, WorkflowExecution: __goscriptLiteralField190, Identity: __goscriptLiteralField191, Reason: __goscriptLiteralField192})) })())

	return request
}

export function DeleteDomainRequest(r: shared.DeleteDomainRequest | $.VarRef<shared.DeleteDomainRequest> | null): apiv1.DeleteDomainRequest | $.VarRef<apiv1.DeleteDomainRequest> | null {
	if (r == null) {
		return null
	}
	return (() => { const __goscriptLiteralField193 = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as shared.DeleteDomainRequest).GetName() : shared.DeleteDomainRequest.prototype.GetName.call(r)); const __goscriptLiteralField194 = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as shared.DeleteDomainRequest).GetSecurityToken() : shared.DeleteDomainRequest.prototype.GetSecurityToken.call(r)); return new apiv1.DeleteDomainRequest({Name: __goscriptLiteralField193, SecurityToken: __goscriptLiteralField194}) })()
}

export function FailoverDomainRequest(t: shared.FailoverDomainRequest | $.VarRef<shared.FailoverDomainRequest> | null): apiv1.FailoverDomainRequest | $.VarRef<apiv1.FailoverDomainRequest> | null {
	const t$: shared.FailoverDomainRequest = t == null ? $.pointerTarget<shared.FailoverDomainRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.FailoverDomainRequest>(t)
	if (t == null) {
		return null
	}
	let request: apiv1.FailoverDomainRequest | $.VarRef<apiv1.FailoverDomainRequest> | null = (() => { const __goscriptLiteralField195 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.FailoverDomainRequest).GetDomainName() : shared.FailoverDomainRequest.prototype.GetDomainName.call(t)); const __goscriptLiteralField196 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.FailoverDomainRequest).GetReason() : shared.FailoverDomainRequest.prototype.GetReason.call(t)); return new apiv1.FailoverDomainRequest({DomainName: __goscriptLiteralField195, Reason: __goscriptLiteralField196}) })()
	let request$: apiv1.FailoverDomainRequest = request == null ? $.pointerTarget<apiv1.FailoverDomainRequest>(request) : (request as any).__isVarRef === true ? (request as any).value : (request as any).__goValue === undefined ? (request as any) : $.pointerTarget<apiv1.FailoverDomainRequest>(request)
	if ((t$ as shared.FailoverDomainRequest).DomainActiveClusterName != null) {
		;(request$ as apiv1.FailoverDomainRequest).DomainActiveClusterName = $.pointerValue<string>((t$ as shared.FailoverDomainRequest).DomainActiveClusterName)
	}
	if ((t$ as shared.FailoverDomainRequest).ActiveClusters != null) {
		;(request$ as apiv1.FailoverDomainRequest).ActiveClusters = __goscript_types.ActiveClusters((t$ as shared.FailoverDomainRequest).ActiveClusters)
	}
	if ((t$ as shared.FailoverDomainRequest).FailoverTimeoutInSeconds != null) {
		;(request$ as apiv1.FailoverDomainRequest).FailoverTimeout = __goscript_helpers.secondsToDuration((t$ as shared.FailoverDomainRequest).FailoverTimeoutInSeconds)
	}
	return request
}

export function ListFailoverHistoryRequest(t: shared.ListFailoverHistoryRequest | $.VarRef<shared.ListFailoverHistoryRequest> | null): apiv1.ListFailoverHistoryRequest | $.VarRef<apiv1.ListFailoverHistoryRequest> | null {
	const t$: shared.ListFailoverHistoryRequest = t == null ? $.pointerTarget<shared.ListFailoverHistoryRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ListFailoverHistoryRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField197 = __goscript_types.ListFailoverHistoryRequestFilters((t$ as shared.ListFailoverHistoryRequest).Filters); const __goscriptLiteralField198 = __goscript_types.PaginationOptions((t$ as shared.ListFailoverHistoryRequest).Pagination); return new apiv1.ListFailoverHistoryRequest({Filters: __goscriptLiteralField197, Pagination: __goscriptLiteralField198}) })()
}
