// Generated file based on response.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as apiv1 from "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"

import * as __goscript__enum from "./enum.gs.ts"

import * as __goscript_helpers from "./helpers.gs.ts"

import * as __goscript_history from "./history.gs.ts"

import * as __goscript_types from "./types.gs.ts"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"
import "./enum.gs.ts"
import "./helpers.gs.ts"
import "./history.gs.ts"
import "./types.gs.ts"

export function CountWorkflowExecutionsResponse(t: apiv1.CountWorkflowExecutionsResponse | $.VarRef<apiv1.CountWorkflowExecutionsResponse> | null): shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null {
	if (t == null) {
		return null
	}
	return new shared.CountWorkflowExecutionsResponse({Count: $.fieldRef($.pointerValue<apiv1.CountWorkflowExecutionsResponse>(t)._fields, "Count")})
}

export function DescribeDomainResponse(t: apiv1.DescribeDomainResponse | $.VarRef<apiv1.DescribeDomainResponse> | null): shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null {
	const t$: apiv1.DescribeDomainResponse = t == null ? $.pointerTarget<apiv1.DescribeDomainResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.DescribeDomainResponse>(t)
	if ((t == null) || ((t$ as apiv1.DescribeDomainResponse).Domain == null)) {
		return null
	}
	return new shared.DescribeDomainResponse({DomainInfo: (() => { const __goscriptLiteralField0 = __goscript__enum.DomainStatus($.pointerValue<apiv1.Domain>((t$ as apiv1.DescribeDomainResponse).Domain).Status); return new shared.DomainInfo({Name: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.DescribeDomainResponse).Domain)._fields, "Name"), Status: __goscriptLiteralField0, Description: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.DescribeDomainResponse).Domain)._fields, "Description"), OwnerEmail: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.DescribeDomainResponse).Domain)._fields, "OwnerEmail"), Data: $.pointerValue<apiv1.Domain>((t$ as apiv1.DescribeDomainResponse).Domain).Data, UUID: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.DescribeDomainResponse).Domain)._fields, "Id")}) })(), Configuration: (() => { const __goscriptLiteralField1 = __goscript_helpers.durationToDays($.pointerValue<apiv1.Domain>((t$ as apiv1.DescribeDomainResponse).Domain).WorkflowExecutionRetentionPeriod); const __goscriptLiteralField2 = __goscript_helpers.boolPtr(true); const __goscriptLiteralField3 = __goscript_types.BadBinaries($.pointerValue<apiv1.Domain>((t$ as apiv1.DescribeDomainResponse).Domain).BadBinaries); const __goscriptLiteralField4 = __goscript__enum.ArchivalStatus($.pointerValue<apiv1.Domain>((t$ as apiv1.DescribeDomainResponse).Domain).HistoryArchivalStatus); const __goscriptLiteralField5 = __goscript__enum.ArchivalStatus($.pointerValue<apiv1.Domain>((t$ as apiv1.DescribeDomainResponse).Domain).VisibilityArchivalStatus); return new shared.DomainConfiguration({WorkflowExecutionRetentionPeriodInDays: __goscriptLiteralField1, EmitMetric: __goscriptLiteralField2, BadBinaries: __goscriptLiteralField3, HistoryArchivalStatus: __goscriptLiteralField4, HistoryArchivalURI: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.DescribeDomainResponse).Domain)._fields, "HistoryArchivalUri"), VisibilityArchivalStatus: __goscriptLiteralField5, VisibilityArchivalURI: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.DescribeDomainResponse).Domain)._fields, "VisibilityArchivalUri")}) })(), ReplicationConfiguration: (() => { const __goscriptLiteralField6 = __goscript_types.ClusterReplicationConfigurationArray($.pointerValue<apiv1.Domain>((t$ as apiv1.DescribeDomainResponse).Domain).Clusters); const __goscriptLiteralField7 = __goscript_types.ActiveClusters($.pointerValue<apiv1.Domain>((t$ as apiv1.DescribeDomainResponse).Domain).ActiveClusters); return new shared.DomainReplicationConfiguration({ActiveClusterName: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.DescribeDomainResponse).Domain)._fields, "ActiveClusterName"), Clusters: __goscriptLiteralField6, ActiveClusters: __goscriptLiteralField7}) })(), FailoverVersion: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.DescribeDomainResponse).Domain)._fields, "FailoverVersion"), IsGlobalDomain: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.DescribeDomainResponse).Domain)._fields, "IsGlobalDomain")})
}

export function DescribeTaskListResponse(t: apiv1.DescribeTaskListResponse | $.VarRef<apiv1.DescribeTaskListResponse> | null): shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null {
	const t$: apiv1.DescribeTaskListResponse = t == null ? $.pointerTarget<apiv1.DescribeTaskListResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.DescribeTaskListResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField8 = __goscript_types.PollerInfoArray((t$ as apiv1.DescribeTaskListResponse).Pollers); const __goscriptLiteralField9 = __goscript_types.TaskListStatus((t$ as apiv1.DescribeTaskListResponse).TaskListStatus); const __goscriptLiteralField10 = __goscript_types.TaskList((t$ as apiv1.DescribeTaskListResponse).TaskList); return new shared.DescribeTaskListResponse({Pollers: __goscriptLiteralField8, TaskListStatus: __goscriptLiteralField9, TaskList: __goscriptLiteralField10}) })()
}

export function DescribeWorkflowExecutionResponse(t: apiv1.DescribeWorkflowExecutionResponse | $.VarRef<apiv1.DescribeWorkflowExecutionResponse> | null): shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null {
	const t$: apiv1.DescribeWorkflowExecutionResponse = t == null ? $.pointerTarget<apiv1.DescribeWorkflowExecutionResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.DescribeWorkflowExecutionResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField11 = __goscript_types.WorkflowExecutionConfiguration((t$ as apiv1.DescribeWorkflowExecutionResponse).ExecutionConfiguration); const __goscriptLiteralField12 = __goscript_types.WorkflowExecutionInfo((t$ as apiv1.DescribeWorkflowExecutionResponse).WorkflowExecutionInfo); const __goscriptLiteralField13 = __goscript_types.PendingActivityInfoArray((t$ as apiv1.DescribeWorkflowExecutionResponse).PendingActivities); const __goscriptLiteralField14 = __goscript_types.PendingChildExecutionInfoArray((t$ as apiv1.DescribeWorkflowExecutionResponse).PendingChildren); const __goscriptLiteralField15 = __goscript_types.PendingDecisionInfo((t$ as apiv1.DescribeWorkflowExecutionResponse).PendingDecision); return new shared.DescribeWorkflowExecutionResponse({ExecutionConfiguration: __goscriptLiteralField11, WorkflowExecutionInfo: __goscriptLiteralField12, PendingActivities: __goscriptLiteralField13, PendingChildren: __goscriptLiteralField14, PendingDecision: __goscriptLiteralField15}) })()
}

export function DiagnoseWorkflowExecutionResponse(t: apiv1.DiagnoseWorkflowExecutionResponse | $.VarRef<apiv1.DiagnoseWorkflowExecutionResponse> | null): shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null {
	const t$: apiv1.DiagnoseWorkflowExecutionResponse = t == null ? $.pointerTarget<apiv1.DiagnoseWorkflowExecutionResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.DiagnoseWorkflowExecutionResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField16 = __goscript_types.Domain((t$ as apiv1.DiagnoseWorkflowExecutionResponse).Domain); const __goscriptLiteralField17 = __goscript_types.WorkflowExecution((t$ as apiv1.DiagnoseWorkflowExecutionResponse).DiagnosticWorkflowExecution); return new shared.DiagnoseWorkflowExecutionResponse({Domain: __goscriptLiteralField16, DiagnosticWorkflowExecution: __goscriptLiteralField17}) })()
}

export function GetClusterInfoResponse(t: apiv1.GetClusterInfoResponse | $.VarRef<apiv1.GetClusterInfoResponse> | null): shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField18 = __goscript_types.SupportedClientVersions($.pointerValue<apiv1.GetClusterInfoResponse>(t).SupportedClientVersions); return new shared.ClusterInfo({SupportedClientVersions: __goscriptLiteralField18}) })()
}

export function GetSearchAttributesResponse(t: apiv1.GetSearchAttributesResponse | $.VarRef<apiv1.GetSearchAttributesResponse> | null): shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField19 = __goscript_types.IndexedValueTypeMap($.pointerValue<apiv1.GetSearchAttributesResponse>(t).Keys); return new shared.GetSearchAttributesResponse({Keys: __goscriptLiteralField19}) })()
}

export function GetWorkflowExecutionHistoryResponse(t: apiv1.GetWorkflowExecutionHistoryResponse | $.VarRef<apiv1.GetWorkflowExecutionHistoryResponse> | null): shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null {
	const t$: apiv1.GetWorkflowExecutionHistoryResponse = t == null ? $.pointerTarget<apiv1.GetWorkflowExecutionHistoryResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.GetWorkflowExecutionHistoryResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField20 = __goscript_history.History((t$ as apiv1.GetWorkflowExecutionHistoryResponse).History); const __goscriptLiteralField21 = __goscript_types.DataBlobArray((t$ as apiv1.GetWorkflowExecutionHistoryResponse).RawHistory); return new shared.GetWorkflowExecutionHistoryResponse({History: __goscriptLiteralField20, RawHistory: __goscriptLiteralField21, NextPageToken: (t$ as apiv1.GetWorkflowExecutionHistoryResponse).NextPageToken, Archived: $.fieldRef((t$ as apiv1.GetWorkflowExecutionHistoryResponse)._fields, "Archived")}) })()
}

export function ListArchivedWorkflowExecutionsResponse(t: apiv1.ListArchivedWorkflowExecutionsResponse | $.VarRef<apiv1.ListArchivedWorkflowExecutionsResponse> | null): shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null {
	const t$: apiv1.ListArchivedWorkflowExecutionsResponse = t == null ? $.pointerTarget<apiv1.ListArchivedWorkflowExecutionsResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ListArchivedWorkflowExecutionsResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField22 = __goscript_types.WorkflowExecutionInfoArray((t$ as apiv1.ListArchivedWorkflowExecutionsResponse).Executions); return new shared.ListArchivedWorkflowExecutionsResponse({Executions: __goscriptLiteralField22, NextPageToken: (t$ as apiv1.ListArchivedWorkflowExecutionsResponse).NextPageToken}) })()
}

export function ListClosedWorkflowExecutionsResponse(t: apiv1.ListClosedWorkflowExecutionsResponse | $.VarRef<apiv1.ListClosedWorkflowExecutionsResponse> | null): shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null {
	const t$: apiv1.ListClosedWorkflowExecutionsResponse = t == null ? $.pointerTarget<apiv1.ListClosedWorkflowExecutionsResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ListClosedWorkflowExecutionsResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField23 = __goscript_types.WorkflowExecutionInfoArray((t$ as apiv1.ListClosedWorkflowExecutionsResponse).Executions); return new shared.ListClosedWorkflowExecutionsResponse({Executions: __goscriptLiteralField23, NextPageToken: (t$ as apiv1.ListClosedWorkflowExecutionsResponse).NextPageToken}) })()
}

export function ListDomainsResponse(t: apiv1.ListDomainsResponse | $.VarRef<apiv1.ListDomainsResponse> | null): shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null {
	const t$: apiv1.ListDomainsResponse = t == null ? $.pointerTarget<apiv1.ListDomainsResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ListDomainsResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField24 = __goscript_types.DescribeDomainResponseArray((t$ as apiv1.ListDomainsResponse).Domains); return new shared.ListDomainsResponse({Domains: __goscriptLiteralField24, NextPageToken: (t$ as apiv1.ListDomainsResponse).NextPageToken}) })()
}

export function ListOpenWorkflowExecutionsResponse(t: apiv1.ListOpenWorkflowExecutionsResponse | $.VarRef<apiv1.ListOpenWorkflowExecutionsResponse> | null): shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null {
	const t$: apiv1.ListOpenWorkflowExecutionsResponse = t == null ? $.pointerTarget<apiv1.ListOpenWorkflowExecutionsResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ListOpenWorkflowExecutionsResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField25 = __goscript_types.WorkflowExecutionInfoArray((t$ as apiv1.ListOpenWorkflowExecutionsResponse).Executions); return new shared.ListOpenWorkflowExecutionsResponse({Executions: __goscriptLiteralField25, NextPageToken: (t$ as apiv1.ListOpenWorkflowExecutionsResponse).NextPageToken}) })()
}

export function ListTaskListPartitionsResponse(t: apiv1.ListTaskListPartitionsResponse | $.VarRef<apiv1.ListTaskListPartitionsResponse> | null): shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null {
	const t$: apiv1.ListTaskListPartitionsResponse = t == null ? $.pointerTarget<apiv1.ListTaskListPartitionsResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ListTaskListPartitionsResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField26 = __goscript_types.TaskListPartitionMetadataArray((t$ as apiv1.ListTaskListPartitionsResponse).ActivityTaskListPartitions); const __goscriptLiteralField27 = __goscript_types.TaskListPartitionMetadataArray((t$ as apiv1.ListTaskListPartitionsResponse).DecisionTaskListPartitions); return new shared.ListTaskListPartitionsResponse({ActivityTaskListPartitions: __goscriptLiteralField26, DecisionTaskListPartitions: __goscriptLiteralField27}) })()
}

export function ListWorkflowExecutionsResponse(t: apiv1.ListWorkflowExecutionsResponse | $.VarRef<apiv1.ListWorkflowExecutionsResponse> | null): shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null {
	const t$: apiv1.ListWorkflowExecutionsResponse = t == null ? $.pointerTarget<apiv1.ListWorkflowExecutionsResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ListWorkflowExecutionsResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField28 = __goscript_types.WorkflowExecutionInfoArray((t$ as apiv1.ListWorkflowExecutionsResponse).Executions); return new shared.ListWorkflowExecutionsResponse({Executions: __goscriptLiteralField28, NextPageToken: (t$ as apiv1.ListWorkflowExecutionsResponse).NextPageToken}) })()
}

export function PollForActivityTaskResponse(t: apiv1.PollForActivityTaskResponse | $.VarRef<apiv1.PollForActivityTaskResponse> | null): shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null {
	const t$: apiv1.PollForActivityTaskResponse = t == null ? $.pointerTarget<apiv1.PollForActivityTaskResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.PollForActivityTaskResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField29 = __goscript_types.WorkflowExecution((t$ as apiv1.PollForActivityTaskResponse).WorkflowExecution); const __goscriptLiteralField30 = __goscript_types.ActivityType((t$ as apiv1.PollForActivityTaskResponse).ActivityType); const __goscriptLiteralField31 = __goscript_types.Payload((t$ as apiv1.PollForActivityTaskResponse).Input); const __goscriptLiteralField32 = __goscript_helpers.timeToUnixNano((t$ as apiv1.PollForActivityTaskResponse).ScheduledTime); const __goscriptLiteralField33 = __goscript_helpers.timeToUnixNano((t$ as apiv1.PollForActivityTaskResponse).StartedTime); const __goscriptLiteralField34 = __goscript_helpers.durationToSeconds((t$ as apiv1.PollForActivityTaskResponse).ScheduleToCloseTimeout); const __goscriptLiteralField35 = __goscript_helpers.durationToSeconds((t$ as apiv1.PollForActivityTaskResponse).StartToCloseTimeout); const __goscriptLiteralField36 = __goscript_helpers.durationToSeconds((t$ as apiv1.PollForActivityTaskResponse).HeartbeatTimeout); const __goscriptLiteralField37 = __goscript_helpers.timeToUnixNano((t$ as apiv1.PollForActivityTaskResponse).ScheduledTimeOfThisAttempt); const __goscriptLiteralField38 = __goscript_types.Payload((t$ as apiv1.PollForActivityTaskResponse).HeartbeatDetails); const __goscriptLiteralField39 = __goscript_types.WorkflowType((t$ as apiv1.PollForActivityTaskResponse).WorkflowType); const __goscriptLiteralField40 = __goscript_types.Header((t$ as apiv1.PollForActivityTaskResponse).Header); const __goscriptLiteralField41 = __goscript_types.AutoConfigHint((t$ as apiv1.PollForActivityTaskResponse).AutoConfigHint); return new shared.PollForActivityTaskResponse({TaskToken: (t$ as apiv1.PollForActivityTaskResponse).TaskToken, WorkflowExecution: __goscriptLiteralField29, ActivityId: $.fieldRef((t$ as apiv1.PollForActivityTaskResponse)._fields, "ActivityId"), ActivityType: __goscriptLiteralField30, Input: __goscriptLiteralField31, ScheduledTimestamp: __goscriptLiteralField32, StartedTimestamp: __goscriptLiteralField33, ScheduleToCloseTimeoutSeconds: __goscriptLiteralField34, StartToCloseTimeoutSeconds: __goscriptLiteralField35, HeartbeatTimeoutSeconds: __goscriptLiteralField36, Attempt: $.fieldRef((t$ as apiv1.PollForActivityTaskResponse)._fields, "Attempt"), ScheduledTimestampOfThisAttempt: __goscriptLiteralField37, HeartbeatDetails: __goscriptLiteralField38, WorkflowType: __goscriptLiteralField39, WorkflowDomain: $.fieldRef((t$ as apiv1.PollForActivityTaskResponse)._fields, "WorkflowDomain"), Header: __goscriptLiteralField40, AutoConfigHint: __goscriptLiteralField41}) })()
}

export function PollForDecisionTaskResponse(t: apiv1.PollForDecisionTaskResponse | $.VarRef<apiv1.PollForDecisionTaskResponse> | null): shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null {
	const t$: apiv1.PollForDecisionTaskResponse = t == null ? $.pointerTarget<apiv1.PollForDecisionTaskResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.PollForDecisionTaskResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField42 = __goscript_types.WorkflowExecution((t$ as apiv1.PollForDecisionTaskResponse).WorkflowExecution); const __goscriptLiteralField43 = __goscript_types.WorkflowType((t$ as apiv1.PollForDecisionTaskResponse).WorkflowType); const __goscriptLiteralField44 = __goscript_helpers.toInt64Value((t$ as apiv1.PollForDecisionTaskResponse).PreviousStartedEventId); const __goscriptLiteralField45 = __goscript_history.History((t$ as apiv1.PollForDecisionTaskResponse).History); const __goscriptLiteralField46 = __goscript_types.WorkflowQuery((t$ as apiv1.PollForDecisionTaskResponse).Query); const __goscriptLiteralField47 = __goscript_types.TaskList((t$ as apiv1.PollForDecisionTaskResponse).WorkflowExecutionTaskList); const __goscriptLiteralField48 = __goscript_helpers.timeToUnixNano((t$ as apiv1.PollForDecisionTaskResponse).ScheduledTime); const __goscriptLiteralField49 = __goscript_helpers.timeToUnixNano((t$ as apiv1.PollForDecisionTaskResponse).StartedTime); const __goscriptLiteralField50 = __goscript_types.WorkflowQueryMap((t$ as apiv1.PollForDecisionTaskResponse).Queries); const __goscriptLiteralField51 = __goscript_types.AutoConfigHint((t$ as apiv1.PollForDecisionTaskResponse).AutoConfigHint); return new shared.PollForDecisionTaskResponse({TaskToken: (t$ as apiv1.PollForDecisionTaskResponse).TaskToken, WorkflowExecution: __goscriptLiteralField42, WorkflowType: __goscriptLiteralField43, PreviousStartedEventId: __goscriptLiteralField44, StartedEventId: $.fieldRef((t$ as apiv1.PollForDecisionTaskResponse)._fields, "StartedEventId"), Attempt: $.fieldRef((t$ as apiv1.PollForDecisionTaskResponse)._fields, "Attempt"), BacklogCountHint: $.fieldRef((t$ as apiv1.PollForDecisionTaskResponse)._fields, "BacklogCountHint"), History: __goscriptLiteralField45, NextPageToken: (t$ as apiv1.PollForDecisionTaskResponse).NextPageToken, Query: __goscriptLiteralField46, WorkflowExecutionTaskList: __goscriptLiteralField47, ScheduledTimestamp: __goscriptLiteralField48, StartedTimestamp: __goscriptLiteralField49, Queries: __goscriptLiteralField50, NextEventId: $.fieldRef((t$ as apiv1.PollForDecisionTaskResponse)._fields, "NextEventId"), TotalHistoryBytes: $.fieldRef((t$ as apiv1.PollForDecisionTaskResponse)._fields, "TotalHistoryBytes"), AutoConfigHint: __goscriptLiteralField51}) })()
}

export function QueryWorkflowResponse(t: apiv1.QueryWorkflowResponse | $.VarRef<apiv1.QueryWorkflowResponse> | null): shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null {
	const t$: apiv1.QueryWorkflowResponse = t == null ? $.pointerTarget<apiv1.QueryWorkflowResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.QueryWorkflowResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField52 = __goscript_types.Payload((t$ as apiv1.QueryWorkflowResponse).QueryResult); const __goscriptLiteralField53 = __goscript_types.QueryRejected((t$ as apiv1.QueryWorkflowResponse).QueryRejected); return new shared.QueryWorkflowResponse({QueryResult: __goscriptLiteralField52, QueryRejected: __goscriptLiteralField53}) })()
}

export function RecordActivityTaskHeartbeatByIDResponse(t: apiv1.RecordActivityTaskHeartbeatByIDResponse | $.VarRef<apiv1.RecordActivityTaskHeartbeatByIDResponse> | null): shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null {
	if (t == null) {
		return null
	}
	return new shared.RecordActivityTaskHeartbeatResponse({CancelRequested: $.fieldRef($.pointerValue<apiv1.RecordActivityTaskHeartbeatByIDResponse>(t)._fields, "CancelRequested")})
}

export function RecordActivityTaskHeartbeatResponse(t: apiv1.RecordActivityTaskHeartbeatResponse | $.VarRef<apiv1.RecordActivityTaskHeartbeatResponse> | null): shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null {
	if (t == null) {
		return null
	}
	return new shared.RecordActivityTaskHeartbeatResponse({CancelRequested: $.fieldRef($.pointerValue<apiv1.RecordActivityTaskHeartbeatResponse>(t)._fields, "CancelRequested")})
}

export function ResetWorkflowExecutionResponse(t: apiv1.ResetWorkflowExecutionResponse | $.VarRef<apiv1.ResetWorkflowExecutionResponse> | null): shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null {
	if (t == null) {
		return null
	}
	return new shared.ResetWorkflowExecutionResponse({RunId: $.fieldRef($.pointerValue<apiv1.ResetWorkflowExecutionResponse>(t)._fields, "RunId")})
}

export function RespondDecisionTaskCompletedResponse(t: apiv1.RespondDecisionTaskCompletedResponse | $.VarRef<apiv1.RespondDecisionTaskCompletedResponse> | null): shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null {
	const t$: apiv1.RespondDecisionTaskCompletedResponse = t == null ? $.pointerTarget<apiv1.RespondDecisionTaskCompletedResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RespondDecisionTaskCompletedResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField54 = PollForDecisionTaskResponse((t$ as apiv1.RespondDecisionTaskCompletedResponse).DecisionTask); const __goscriptLiteralField55 = __goscript_types.ActivityLocalDispatchInfoMap((t$ as apiv1.RespondDecisionTaskCompletedResponse).ActivitiesToDispatchLocally); return new shared.RespondDecisionTaskCompletedResponse({DecisionTask: __goscriptLiteralField54, ActivitiesToDispatchLocally: __goscriptLiteralField55}) })()
}

export function ScanWorkflowExecutionsResponse(t: apiv1.ScanWorkflowExecutionsResponse | $.VarRef<apiv1.ScanWorkflowExecutionsResponse> | null): shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null {
	const t$: apiv1.ScanWorkflowExecutionsResponse = t == null ? $.pointerTarget<apiv1.ScanWorkflowExecutionsResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ScanWorkflowExecutionsResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField56 = __goscript_types.WorkflowExecutionInfoArray((t$ as apiv1.ScanWorkflowExecutionsResponse).Executions); return new shared.ListWorkflowExecutionsResponse({Executions: __goscriptLiteralField56, NextPageToken: (t$ as apiv1.ScanWorkflowExecutionsResponse).NextPageToken}) })()
}

export function SignalWithStartWorkflowExecutionResponse(t: apiv1.SignalWithStartWorkflowExecutionResponse | $.VarRef<apiv1.SignalWithStartWorkflowExecutionResponse> | null): shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null {
	if (t == null) {
		return null
	}
	return new shared.StartWorkflowExecutionResponse({RunId: $.fieldRef($.pointerValue<apiv1.SignalWithStartWorkflowExecutionResponse>(t)._fields, "RunId")})
}

export function SignalWithStartWorkflowExecutionAsyncResponse(t: apiv1.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<apiv1.SignalWithStartWorkflowExecutionAsyncResponse> | null): shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null {
	if (t == null) {
		return null
	}
	return new shared.SignalWithStartWorkflowExecutionAsyncResponse()
}

export function StartWorkflowExecutionResponse(t: apiv1.StartWorkflowExecutionResponse | $.VarRef<apiv1.StartWorkflowExecutionResponse> | null): shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null {
	if (t == null) {
		return null
	}
	return new shared.StartWorkflowExecutionResponse({RunId: $.fieldRef($.pointerValue<apiv1.StartWorkflowExecutionResponse>(t)._fields, "RunId")})
}

export function StartWorkflowExecutionAsyncResponse(t: apiv1.StartWorkflowExecutionAsyncResponse | $.VarRef<apiv1.StartWorkflowExecutionAsyncResponse> | null): shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null {
	if (t == null) {
		return null
	}
	return new shared.StartWorkflowExecutionAsyncResponse()
}

export function UpdateDomainResponse(t: apiv1.UpdateDomainResponse | $.VarRef<apiv1.UpdateDomainResponse> | null): shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null {
	const t$: apiv1.UpdateDomainResponse = t == null ? $.pointerTarget<apiv1.UpdateDomainResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.UpdateDomainResponse>(t)
	if ((t == null) || ((t$ as apiv1.UpdateDomainResponse).Domain == null)) {
		return null
	}
	return new shared.UpdateDomainResponse({DomainInfo: (() => { const __goscriptLiteralField57 = __goscript__enum.DomainStatus($.pointerValue<apiv1.Domain>((t$ as apiv1.UpdateDomainResponse).Domain).Status); return new shared.DomainInfo({Name: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.UpdateDomainResponse).Domain)._fields, "Name"), Status: __goscriptLiteralField57, Description: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.UpdateDomainResponse).Domain)._fields, "Description"), OwnerEmail: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.UpdateDomainResponse).Domain)._fields, "OwnerEmail"), Data: $.pointerValue<apiv1.Domain>((t$ as apiv1.UpdateDomainResponse).Domain).Data, UUID: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.UpdateDomainResponse).Domain)._fields, "Id")}) })(), Configuration: (() => { const __goscriptLiteralField58 = __goscript_helpers.durationToDays($.pointerValue<apiv1.Domain>((t$ as apiv1.UpdateDomainResponse).Domain).WorkflowExecutionRetentionPeriod); const __goscriptLiteralField59 = __goscript_helpers.boolPtr(true); const __goscriptLiteralField60 = __goscript_types.BadBinaries($.pointerValue<apiv1.Domain>((t$ as apiv1.UpdateDomainResponse).Domain).BadBinaries); const __goscriptLiteralField61 = __goscript__enum.ArchivalStatus($.pointerValue<apiv1.Domain>((t$ as apiv1.UpdateDomainResponse).Domain).HistoryArchivalStatus); const __goscriptLiteralField62 = __goscript__enum.ArchivalStatus($.pointerValue<apiv1.Domain>((t$ as apiv1.UpdateDomainResponse).Domain).VisibilityArchivalStatus); return new shared.DomainConfiguration({WorkflowExecutionRetentionPeriodInDays: __goscriptLiteralField58, EmitMetric: __goscriptLiteralField59, BadBinaries: __goscriptLiteralField60, HistoryArchivalStatus: __goscriptLiteralField61, HistoryArchivalURI: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.UpdateDomainResponse).Domain)._fields, "HistoryArchivalUri"), VisibilityArchivalStatus: __goscriptLiteralField62, VisibilityArchivalURI: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.UpdateDomainResponse).Domain)._fields, "VisibilityArchivalUri")}) })(), ReplicationConfiguration: (() => { const __goscriptLiteralField63 = __goscript_types.ClusterReplicationConfigurationArray($.pointerValue<apiv1.Domain>((t$ as apiv1.UpdateDomainResponse).Domain).Clusters); const __goscriptLiteralField64 = __goscript_types.ActiveClusters($.pointerValue<apiv1.Domain>((t$ as apiv1.UpdateDomainResponse).Domain).ActiveClusters); return new shared.DomainReplicationConfiguration({ActiveClusterName: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.UpdateDomainResponse).Domain)._fields, "ActiveClusterName"), Clusters: __goscriptLiteralField63, ActiveClusters: __goscriptLiteralField64}) })(), FailoverVersion: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.UpdateDomainResponse).Domain)._fields, "FailoverVersion"), IsGlobalDomain: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.UpdateDomainResponse).Domain)._fields, "IsGlobalDomain")})
}

export function RestartWorkflowExecutionResponse(t: apiv1.RestartWorkflowExecutionResponse | $.VarRef<apiv1.RestartWorkflowExecutionResponse> | null): shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null {
	if (t == null) {
		return null
	}

	return new shared.RestartWorkflowExecutionResponse({RunId: $.fieldRef($.pointerValue<apiv1.RestartWorkflowExecutionResponse>(t)._fields, "RunId")})
}

export function FailoverDomainResponse(t: apiv1.FailoverDomainResponse | $.VarRef<apiv1.FailoverDomainResponse> | null): shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null {
	const t$: apiv1.FailoverDomainResponse = t == null ? $.pointerTarget<apiv1.FailoverDomainResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.FailoverDomainResponse>(t)
	if ((t == null) || ((t$ as apiv1.FailoverDomainResponse).Domain == null)) {
		return null
	}
	return new shared.FailoverDomainResponse({DomainInfo: (() => { const __goscriptLiteralField65 = __goscript__enum.DomainStatus($.pointerValue<apiv1.Domain>((t$ as apiv1.FailoverDomainResponse).Domain).Status); return new shared.DomainInfo({Name: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.FailoverDomainResponse).Domain)._fields, "Name"), Status: __goscriptLiteralField65, Description: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.FailoverDomainResponse).Domain)._fields, "Description"), OwnerEmail: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.FailoverDomainResponse).Domain)._fields, "OwnerEmail"), Data: $.pointerValue<apiv1.Domain>((t$ as apiv1.FailoverDomainResponse).Domain).Data, UUID: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.FailoverDomainResponse).Domain)._fields, "Id")}) })(), Configuration: (() => { const __goscriptLiteralField66 = __goscript_helpers.durationToDays($.pointerValue<apiv1.Domain>((t$ as apiv1.FailoverDomainResponse).Domain).WorkflowExecutionRetentionPeriod); const __goscriptLiteralField67 = __goscript_helpers.boolPtr(true); const __goscriptLiteralField68 = __goscript_types.BadBinaries($.pointerValue<apiv1.Domain>((t$ as apiv1.FailoverDomainResponse).Domain).BadBinaries); const __goscriptLiteralField69 = __goscript__enum.ArchivalStatus($.pointerValue<apiv1.Domain>((t$ as apiv1.FailoverDomainResponse).Domain).HistoryArchivalStatus); const __goscriptLiteralField70 = __goscript__enum.ArchivalStatus($.pointerValue<apiv1.Domain>((t$ as apiv1.FailoverDomainResponse).Domain).VisibilityArchivalStatus); return new shared.DomainConfiguration({WorkflowExecutionRetentionPeriodInDays: __goscriptLiteralField66, EmitMetric: __goscriptLiteralField67, BadBinaries: __goscriptLiteralField68, HistoryArchivalStatus: __goscriptLiteralField69, HistoryArchivalURI: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.FailoverDomainResponse).Domain)._fields, "HistoryArchivalUri"), VisibilityArchivalStatus: __goscriptLiteralField70, VisibilityArchivalURI: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.FailoverDomainResponse).Domain)._fields, "VisibilityArchivalUri")}) })(), ReplicationConfiguration: (() => { const __goscriptLiteralField71 = __goscript_types.ClusterReplicationConfigurationArray($.pointerValue<apiv1.Domain>((t$ as apiv1.FailoverDomainResponse).Domain).Clusters); const __goscriptLiteralField72 = __goscript_types.ActiveClusters($.pointerValue<apiv1.Domain>((t$ as apiv1.FailoverDomainResponse).Domain).ActiveClusters); return new shared.DomainReplicationConfiguration({ActiveClusterName: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.FailoverDomainResponse).Domain)._fields, "ActiveClusterName"), Clusters: __goscriptLiteralField71, ActiveClusters: __goscriptLiteralField72}) })(), FailoverVersion: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.FailoverDomainResponse).Domain)._fields, "FailoverVersion"), IsGlobalDomain: $.fieldRef($.pointerValue<apiv1.Domain>((t$ as apiv1.FailoverDomainResponse).Domain)._fields, "IsGlobalDomain")})
}

export function ListFailoverHistoryResponse(t: apiv1.ListFailoverHistoryResponse | $.VarRef<apiv1.ListFailoverHistoryResponse> | null): shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null {
	const t$: apiv1.ListFailoverHistoryResponse = t == null ? $.pointerTarget<apiv1.ListFailoverHistoryResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ListFailoverHistoryResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField73 = __goscript_types.FailoverEventArray((t$ as apiv1.ListFailoverHistoryResponse).FailoverEvents); return new shared.ListFailoverHistoryResponse({FailoverEvents: __goscriptLiteralField73, NextPageToken: (t$ as apiv1.ListFailoverHistoryResponse).NextPageToken}) })()
}
