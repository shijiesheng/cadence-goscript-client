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

export function CountWorkflowExecutionsResponse(t: shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null): apiv1.CountWorkflowExecutionsResponse | $.VarRef<apiv1.CountWorkflowExecutionsResponse> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField0 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.CountWorkflowExecutionsResponse).GetCount() : shared.CountWorkflowExecutionsResponse.prototype.GetCount.call(t)); return new apiv1.CountWorkflowExecutionsResponse({Count: __goscriptLiteralField0}) })()
}

export function DescribeDomainResponse(t: shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null): apiv1.DescribeDomainResponse | $.VarRef<apiv1.DescribeDomainResponse> | null {
	const t$: shared.DescribeDomainResponse = t == null ? $.pointerTarget<shared.DescribeDomainResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.DescribeDomainResponse>(t)
	if (t == null) {
		return null
	}
	let domain = $.varRef((() => { const __goscriptLiteralField1 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DescribeDomainResponse).GetFailoverVersion() : shared.DescribeDomainResponse.prototype.GetFailoverVersion.call(t)); const __goscriptLiteralField2 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DescribeDomainResponse).GetIsGlobalDomain() : shared.DescribeDomainResponse.prototype.GetIsGlobalDomain.call(t)); return $.markAsStructValue(new apiv1.Domain({FailoverVersion: __goscriptLiteralField1, IsGlobalDomain: __goscriptLiteralField2})) })())
	{
		let info: shared.DomainInfo | $.VarRef<shared.DomainInfo> | null = (t$ as shared.DescribeDomainResponse).DomainInfo
		if (info != null) {
			domain.value.Id = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? ((info as any) as shared.DomainInfo).GetUUID() : shared.DomainInfo.prototype.GetUUID.call(info))
			domain.value.Name = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? ((info as any) as shared.DomainInfo).GetName() : shared.DomainInfo.prototype.GetName.call(info))
			domain.value.Status = __goscript__enum.DomainStatus($.pointerValue<shared.DomainInfo>(info).Status)
			domain.value.Description = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? ((info as any) as shared.DomainInfo).GetDescription() : shared.DomainInfo.prototype.GetDescription.call(info))
			domain.value.OwnerEmail = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? ((info as any) as shared.DomainInfo).GetOwnerEmail() : shared.DomainInfo.prototype.GetOwnerEmail.call(info))
			domain.value.Data = $.pointerValue<shared.DomainInfo>(info).Data
		}
	}
	{
		let config: shared.DomainConfiguration | $.VarRef<shared.DomainConfiguration> | null = (t$ as shared.DescribeDomainResponse).Configuration
		if (config != null) {
			domain.value.WorkflowExecutionRetentionPeriod = __goscript_helpers.daysToDuration($.pointerValue<shared.DomainConfiguration>(config).WorkflowExecutionRetentionPeriodInDays)
			domain.value.BadBinaries = __goscript_types.BadBinaries($.pointerValue<shared.DomainConfiguration>(config).BadBinaries)
			domain.value.HistoryArchivalStatus = __goscript__enum.ArchivalStatus($.pointerValue<shared.DomainConfiguration>(config).HistoryArchivalStatus)
			domain.value.HistoryArchivalUri = (config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as shared.DomainConfiguration).GetHistoryArchivalURI() : shared.DomainConfiguration.prototype.GetHistoryArchivalURI.call(config))
			domain.value.VisibilityArchivalStatus = __goscript__enum.ArchivalStatus($.pointerValue<shared.DomainConfiguration>(config).VisibilityArchivalStatus)
			domain.value.VisibilityArchivalUri = (config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as shared.DomainConfiguration).GetVisibilityArchivalURI() : shared.DomainConfiguration.prototype.GetVisibilityArchivalURI.call(config))
		}
	}
	{
		let repl: shared.DomainReplicationConfiguration | $.VarRef<shared.DomainReplicationConfiguration> | null = (t$ as shared.DescribeDomainResponse).ReplicationConfiguration
		if (repl != null) {
			domain.value.ActiveClusterName = (repl !== null && (repl as any).__isVarRef !== true && (repl as any).__goValue === undefined ? ((repl as any) as shared.DomainReplicationConfiguration).GetActiveClusterName() : shared.DomainReplicationConfiguration.prototype.GetActiveClusterName.call(repl))
			domain.value.Clusters = __goscript_types.ClusterReplicationConfigurationArray($.pointerValue<shared.DomainReplicationConfiguration>(repl).Clusters)
			domain.value.ActiveClusters = __goscript_types.ActiveClusters($.pointerValue<shared.DomainReplicationConfiguration>(repl).ActiveClusters)
		}
	}
	return new apiv1.DescribeDomainResponse({Domain: domain})
}

export function DescribeTaskListResponse(t: shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null): apiv1.DescribeTaskListResponse | $.VarRef<apiv1.DescribeTaskListResponse> | null {
	const t$: shared.DescribeTaskListResponse = t == null ? $.pointerTarget<shared.DescribeTaskListResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.DescribeTaskListResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField3 = __goscript_types.PollerInfoArray((t$ as shared.DescribeTaskListResponse).Pollers); const __goscriptLiteralField4 = __goscript_types.TaskListStatus((t$ as shared.DescribeTaskListResponse).TaskListStatus); const __goscriptLiteralField5 = __goscript_types.TaskList((t$ as shared.DescribeTaskListResponse).TaskList); return new apiv1.DescribeTaskListResponse({Pollers: __goscriptLiteralField3, TaskListStatus: __goscriptLiteralField4, TaskList: __goscriptLiteralField5}) })()
}

export function DescribeWorkflowExecutionResponse(t: shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null): apiv1.DescribeWorkflowExecutionResponse | $.VarRef<apiv1.DescribeWorkflowExecutionResponse> | null {
	const t$: shared.DescribeWorkflowExecutionResponse = t == null ? $.pointerTarget<shared.DescribeWorkflowExecutionResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.DescribeWorkflowExecutionResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField6 = __goscript_types.WorkflowExecutionConfiguration((t$ as shared.DescribeWorkflowExecutionResponse).ExecutionConfiguration); const __goscriptLiteralField7 = __goscript_types.WorkflowExecutionInfo((t$ as shared.DescribeWorkflowExecutionResponse).WorkflowExecutionInfo); const __goscriptLiteralField8 = __goscript_types.PendingActivityInfoArray((t$ as shared.DescribeWorkflowExecutionResponse).PendingActivities); const __goscriptLiteralField9 = __goscript_types.PendingChildExecutionInfoArray((t$ as shared.DescribeWorkflowExecutionResponse).PendingChildren); const __goscriptLiteralField10 = __goscript_types.PendingDecisionInfo((t$ as shared.DescribeWorkflowExecutionResponse).PendingDecision); return new apiv1.DescribeWorkflowExecutionResponse({ExecutionConfiguration: __goscriptLiteralField6, WorkflowExecutionInfo: __goscriptLiteralField7, PendingActivities: __goscriptLiteralField8, PendingChildren: __goscriptLiteralField9, PendingDecision: __goscriptLiteralField10}) })()
}

export function DiagnoseWorkflowExecutionResponse(t: shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null): apiv1.DiagnoseWorkflowExecutionResponse | $.VarRef<apiv1.DiagnoseWorkflowExecutionResponse> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField11 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DiagnoseWorkflowExecutionResponse).GetDomain() : shared.DiagnoseWorkflowExecutionResponse.prototype.GetDomain.call(t)); const __goscriptLiteralField12 = __goscript_types.WorkflowExecution($.pointerValue<shared.DiagnoseWorkflowExecutionResponse>(t).DiagnosticWorkflowExecution); return new apiv1.DiagnoseWorkflowExecutionResponse({Domain: __goscriptLiteralField11, DiagnosticWorkflowExecution: __goscriptLiteralField12}) })()
}

export function GetClusterInfoResponse(t: shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null): apiv1.GetClusterInfoResponse | $.VarRef<apiv1.GetClusterInfoResponse> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField13 = __goscript_types.SupportedClientVersions($.pointerValue<shared.ClusterInfo>(t).SupportedClientVersions); return new apiv1.GetClusterInfoResponse({SupportedClientVersions: __goscriptLiteralField13}) })()
}

export function GetSearchAttributesResponse(t: shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null): apiv1.GetSearchAttributesResponse | $.VarRef<apiv1.GetSearchAttributesResponse> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField14 = __goscript_types.IndexedValueTypeMap($.pointerValue<shared.GetSearchAttributesResponse>(t).Keys); return new apiv1.GetSearchAttributesResponse({Keys: __goscriptLiteralField14}) })()
}

export function GetWorkflowExecutionHistoryResponse(t: shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null): apiv1.GetWorkflowExecutionHistoryResponse | $.VarRef<apiv1.GetWorkflowExecutionHistoryResponse> | null {
	const t$: shared.GetWorkflowExecutionHistoryResponse = t == null ? $.pointerTarget<shared.GetWorkflowExecutionHistoryResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.GetWorkflowExecutionHistoryResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField15 = __goscript_history.History((t$ as shared.GetWorkflowExecutionHistoryResponse).History); const __goscriptLiteralField16 = __goscript_types.DataBlobArray((t$ as shared.GetWorkflowExecutionHistoryResponse).RawHistory); const __goscriptLiteralField17 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.GetWorkflowExecutionHistoryResponse).GetArchived() : shared.GetWorkflowExecutionHistoryResponse.prototype.GetArchived.call(t)); return new apiv1.GetWorkflowExecutionHistoryResponse({History: __goscriptLiteralField15, RawHistory: __goscriptLiteralField16, NextPageToken: (t$ as shared.GetWorkflowExecutionHistoryResponse).NextPageToken, Archived: __goscriptLiteralField17}) })()
}

export function ListArchivedWorkflowExecutionsResponse(t: shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null): apiv1.ListArchivedWorkflowExecutionsResponse | $.VarRef<apiv1.ListArchivedWorkflowExecutionsResponse> | null {
	const t$: shared.ListArchivedWorkflowExecutionsResponse = t == null ? $.pointerTarget<shared.ListArchivedWorkflowExecutionsResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ListArchivedWorkflowExecutionsResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField18 = __goscript_types.WorkflowExecutionInfoArray((t$ as shared.ListArchivedWorkflowExecutionsResponse).Executions); return new apiv1.ListArchivedWorkflowExecutionsResponse({Executions: __goscriptLiteralField18, NextPageToken: (t$ as shared.ListArchivedWorkflowExecutionsResponse).NextPageToken}) })()
}

export function ListClosedWorkflowExecutionsResponse(t: shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null): apiv1.ListClosedWorkflowExecutionsResponse | $.VarRef<apiv1.ListClosedWorkflowExecutionsResponse> | null {
	const t$: shared.ListClosedWorkflowExecutionsResponse = t == null ? $.pointerTarget<shared.ListClosedWorkflowExecutionsResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ListClosedWorkflowExecutionsResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField19 = __goscript_types.WorkflowExecutionInfoArray((t$ as shared.ListClosedWorkflowExecutionsResponse).Executions); return new apiv1.ListClosedWorkflowExecutionsResponse({Executions: __goscriptLiteralField19, NextPageToken: (t$ as shared.ListClosedWorkflowExecutionsResponse).NextPageToken}) })()
}

export function ListDomainsResponse(t: shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null): apiv1.ListDomainsResponse | $.VarRef<apiv1.ListDomainsResponse> | null {
	const t$: shared.ListDomainsResponse = t == null ? $.pointerTarget<shared.ListDomainsResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ListDomainsResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField20 = __goscript_types.DescribeDomainResponseArray((t$ as shared.ListDomainsResponse).Domains); return new apiv1.ListDomainsResponse({Domains: __goscriptLiteralField20, NextPageToken: (t$ as shared.ListDomainsResponse).NextPageToken}) })()
}

export function ListOpenWorkflowExecutionsResponse(t: shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null): apiv1.ListOpenWorkflowExecutionsResponse | $.VarRef<apiv1.ListOpenWorkflowExecutionsResponse> | null {
	const t$: shared.ListOpenWorkflowExecutionsResponse = t == null ? $.pointerTarget<shared.ListOpenWorkflowExecutionsResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ListOpenWorkflowExecutionsResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField21 = __goscript_types.WorkflowExecutionInfoArray((t$ as shared.ListOpenWorkflowExecutionsResponse).Executions); return new apiv1.ListOpenWorkflowExecutionsResponse({Executions: __goscriptLiteralField21, NextPageToken: (t$ as shared.ListOpenWorkflowExecutionsResponse).NextPageToken}) })()
}

export function ListTaskListPartitionsResponse(t: shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null): apiv1.ListTaskListPartitionsResponse | $.VarRef<apiv1.ListTaskListPartitionsResponse> | null {
	const t$: shared.ListTaskListPartitionsResponse = t == null ? $.pointerTarget<shared.ListTaskListPartitionsResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ListTaskListPartitionsResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField22 = __goscript_types.TaskListPartitionMetadataArray((t$ as shared.ListTaskListPartitionsResponse).ActivityTaskListPartitions); const __goscriptLiteralField23 = __goscript_types.TaskListPartitionMetadataArray((t$ as shared.ListTaskListPartitionsResponse).DecisionTaskListPartitions); return new apiv1.ListTaskListPartitionsResponse({ActivityTaskListPartitions: __goscriptLiteralField22, DecisionTaskListPartitions: __goscriptLiteralField23}) })()
}

export function ListWorkflowExecutionsResponse(t: shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null): apiv1.ListWorkflowExecutionsResponse | $.VarRef<apiv1.ListWorkflowExecutionsResponse> | null {
	const t$: shared.ListWorkflowExecutionsResponse = t == null ? $.pointerTarget<shared.ListWorkflowExecutionsResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ListWorkflowExecutionsResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField24 = __goscript_types.WorkflowExecutionInfoArray((t$ as shared.ListWorkflowExecutionsResponse).Executions); return new apiv1.ListWorkflowExecutionsResponse({Executions: __goscriptLiteralField24, NextPageToken: (t$ as shared.ListWorkflowExecutionsResponse).NextPageToken}) })()
}

export function PollForActivityTaskResponse(t: shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null): apiv1.PollForActivityTaskResponse | $.VarRef<apiv1.PollForActivityTaskResponse> | null {
	const t$: shared.PollForActivityTaskResponse = t == null ? $.pointerTarget<shared.PollForActivityTaskResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.PollForActivityTaskResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField25 = __goscript_types.WorkflowExecution((t$ as shared.PollForActivityTaskResponse).WorkflowExecution); const __goscriptLiteralField26 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PollForActivityTaskResponse).GetActivityId() : shared.PollForActivityTaskResponse.prototype.GetActivityId.call(t)); const __goscriptLiteralField27 = __goscript_types.ActivityType((t$ as shared.PollForActivityTaskResponse).ActivityType); const __goscriptLiteralField28 = __goscript_types.Payload((t$ as shared.PollForActivityTaskResponse).Input); const __goscriptLiteralField29 = __goscript_helpers.unixNanoToTime((t$ as shared.PollForActivityTaskResponse).ScheduledTimestamp); const __goscriptLiteralField30 = __goscript_helpers.unixNanoToTime((t$ as shared.PollForActivityTaskResponse).StartedTimestamp); const __goscriptLiteralField31 = __goscript_helpers.secondsToDuration((t$ as shared.PollForActivityTaskResponse).ScheduleToCloseTimeoutSeconds); const __goscriptLiteralField32 = __goscript_helpers.secondsToDuration((t$ as shared.PollForActivityTaskResponse).StartToCloseTimeoutSeconds); const __goscriptLiteralField33 = __goscript_helpers.secondsToDuration((t$ as shared.PollForActivityTaskResponse).HeartbeatTimeoutSeconds); const __goscriptLiteralField34 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PollForActivityTaskResponse).GetAttempt() : shared.PollForActivityTaskResponse.prototype.GetAttempt.call(t)); const __goscriptLiteralField35 = __goscript_helpers.unixNanoToTime((t$ as shared.PollForActivityTaskResponse).ScheduledTimestampOfThisAttempt); const __goscriptLiteralField36 = __goscript_types.Payload((t$ as shared.PollForActivityTaskResponse).HeartbeatDetails); const __goscriptLiteralField37 = __goscript_types.WorkflowType((t$ as shared.PollForActivityTaskResponse).WorkflowType); const __goscriptLiteralField38 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PollForActivityTaskResponse).GetWorkflowDomain() : shared.PollForActivityTaskResponse.prototype.GetWorkflowDomain.call(t)); const __goscriptLiteralField39 = __goscript_types.Header((t$ as shared.PollForActivityTaskResponse).Header); const __goscriptLiteralField40 = __goscript_types.AutoConfigHint((t$ as shared.PollForActivityTaskResponse).AutoConfigHint); return new apiv1.PollForActivityTaskResponse({TaskToken: (t$ as shared.PollForActivityTaskResponse).TaskToken, WorkflowExecution: __goscriptLiteralField25, ActivityId: __goscriptLiteralField26, ActivityType: __goscriptLiteralField27, Input: __goscriptLiteralField28, ScheduledTime: __goscriptLiteralField29, StartedTime: __goscriptLiteralField30, ScheduleToCloseTimeout: __goscriptLiteralField31, StartToCloseTimeout: __goscriptLiteralField32, HeartbeatTimeout: __goscriptLiteralField33, Attempt: __goscriptLiteralField34, ScheduledTimeOfThisAttempt: __goscriptLiteralField35, HeartbeatDetails: __goscriptLiteralField36, WorkflowType: __goscriptLiteralField37, WorkflowDomain: __goscriptLiteralField38, Header: __goscriptLiteralField39, AutoConfigHint: __goscriptLiteralField40}) })()
}

export function PollForDecisionTaskResponse(t: shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null): apiv1.PollForDecisionTaskResponse | $.VarRef<apiv1.PollForDecisionTaskResponse> | null {
	const t$: shared.PollForDecisionTaskResponse = t == null ? $.pointerTarget<shared.PollForDecisionTaskResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.PollForDecisionTaskResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField41 = __goscript_types.WorkflowExecution((t$ as shared.PollForDecisionTaskResponse).WorkflowExecution); const __goscriptLiteralField42 = __goscript_types.WorkflowType((t$ as shared.PollForDecisionTaskResponse).WorkflowType); const __goscriptLiteralField43 = __goscript_helpers.fromInt64Value((t$ as shared.PollForDecisionTaskResponse).PreviousStartedEventId); const __goscriptLiteralField44 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PollForDecisionTaskResponse).GetStartedEventId() : shared.PollForDecisionTaskResponse.prototype.GetStartedEventId.call(t)); const __goscriptLiteralField45 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PollForDecisionTaskResponse).GetAttempt() : shared.PollForDecisionTaskResponse.prototype.GetAttempt.call(t)); const __goscriptLiteralField46 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PollForDecisionTaskResponse).GetBacklogCountHint() : shared.PollForDecisionTaskResponse.prototype.GetBacklogCountHint.call(t)); const __goscriptLiteralField47 = __goscript_history.History((t$ as shared.PollForDecisionTaskResponse).History); const __goscriptLiteralField48 = __goscript_types.WorkflowQuery((t$ as shared.PollForDecisionTaskResponse).Query); const __goscriptLiteralField49 = __goscript_types.TaskList((t$ as shared.PollForDecisionTaskResponse).WorkflowExecutionTaskList); const __goscriptLiteralField50 = __goscript_helpers.unixNanoToTime((t$ as shared.PollForDecisionTaskResponse).ScheduledTimestamp); const __goscriptLiteralField51 = __goscript_helpers.unixNanoToTime((t$ as shared.PollForDecisionTaskResponse).StartedTimestamp); const __goscriptLiteralField52 = __goscript_types.WorkflowQueryMap((t$ as shared.PollForDecisionTaskResponse).Queries); const __goscriptLiteralField53 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PollForDecisionTaskResponse).GetNextEventId() : shared.PollForDecisionTaskResponse.prototype.GetNextEventId.call(t)); const __goscriptLiteralField54 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PollForDecisionTaskResponse).GetTotalHistoryBytes() : shared.PollForDecisionTaskResponse.prototype.GetTotalHistoryBytes.call(t)); const __goscriptLiteralField55 = __goscript_types.AutoConfigHint((t$ as shared.PollForDecisionTaskResponse).AutoConfigHint); return new apiv1.PollForDecisionTaskResponse({TaskToken: (t$ as shared.PollForDecisionTaskResponse).TaskToken, WorkflowExecution: __goscriptLiteralField41, WorkflowType: __goscriptLiteralField42, PreviousStartedEventId: __goscriptLiteralField43, StartedEventId: __goscriptLiteralField44, Attempt: __goscriptLiteralField45, BacklogCountHint: __goscriptLiteralField46, History: __goscriptLiteralField47, NextPageToken: (t$ as shared.PollForDecisionTaskResponse).NextPageToken, Query: __goscriptLiteralField48, WorkflowExecutionTaskList: __goscriptLiteralField49, ScheduledTime: __goscriptLiteralField50, StartedTime: __goscriptLiteralField51, Queries: __goscriptLiteralField52, NextEventId: __goscriptLiteralField53, TotalHistoryBytes: __goscriptLiteralField54, AutoConfigHint: __goscriptLiteralField55}) })()
}

export function QueryWorkflowResponse(t: shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null): apiv1.QueryWorkflowResponse | $.VarRef<apiv1.QueryWorkflowResponse> | null {
	const t$: shared.QueryWorkflowResponse = t == null ? $.pointerTarget<shared.QueryWorkflowResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.QueryWorkflowResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField56 = __goscript_types.Payload((t$ as shared.QueryWorkflowResponse).QueryResult); const __goscriptLiteralField57 = __goscript_types.QueryRejected((t$ as shared.QueryWorkflowResponse).QueryRejected); return new apiv1.QueryWorkflowResponse({QueryResult: __goscriptLiteralField56, QueryRejected: __goscriptLiteralField57}) })()
}

export function RecordActivityTaskHeartbeatByIDResponse(t: shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null): apiv1.RecordActivityTaskHeartbeatByIDResponse | $.VarRef<apiv1.RecordActivityTaskHeartbeatByIDResponse> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField58 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RecordActivityTaskHeartbeatResponse).GetCancelRequested() : shared.RecordActivityTaskHeartbeatResponse.prototype.GetCancelRequested.call(t)); return new apiv1.RecordActivityTaskHeartbeatByIDResponse({CancelRequested: __goscriptLiteralField58}) })()
}

export function RecordActivityTaskHeartbeatResponse(t: shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null): apiv1.RecordActivityTaskHeartbeatResponse | $.VarRef<apiv1.RecordActivityTaskHeartbeatResponse> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField59 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RecordActivityTaskHeartbeatResponse).GetCancelRequested() : shared.RecordActivityTaskHeartbeatResponse.prototype.GetCancelRequested.call(t)); return new apiv1.RecordActivityTaskHeartbeatResponse({CancelRequested: __goscriptLiteralField59}) })()
}

export function ResetWorkflowExecutionResponse(t: shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null): apiv1.ResetWorkflowExecutionResponse | $.VarRef<apiv1.ResetWorkflowExecutionResponse> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField60 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ResetWorkflowExecutionResponse).GetRunId() : shared.ResetWorkflowExecutionResponse.prototype.GetRunId.call(t)); return new apiv1.ResetWorkflowExecutionResponse({RunId: __goscriptLiteralField60}) })()
}

export function RespondDecisionTaskCompletedResponse(t: shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null): apiv1.RespondDecisionTaskCompletedResponse | $.VarRef<apiv1.RespondDecisionTaskCompletedResponse> | null {
	const t$: shared.RespondDecisionTaskCompletedResponse = t == null ? $.pointerTarget<shared.RespondDecisionTaskCompletedResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.RespondDecisionTaskCompletedResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField61 = PollForDecisionTaskResponse((t$ as shared.RespondDecisionTaskCompletedResponse).DecisionTask); const __goscriptLiteralField62 = __goscript_types.ActivityLocalDispatchInfoMap((t$ as shared.RespondDecisionTaskCompletedResponse).ActivitiesToDispatchLocally); return new apiv1.RespondDecisionTaskCompletedResponse({DecisionTask: __goscriptLiteralField61, ActivitiesToDispatchLocally: __goscriptLiteralField62}) })()
}

export function ScanWorkflowExecutionsResponse(t: shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null): apiv1.ScanWorkflowExecutionsResponse | $.VarRef<apiv1.ScanWorkflowExecutionsResponse> | null {
	const t$: shared.ListWorkflowExecutionsResponse = t == null ? $.pointerTarget<shared.ListWorkflowExecutionsResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ListWorkflowExecutionsResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField63 = __goscript_types.WorkflowExecutionInfoArray((t$ as shared.ListWorkflowExecutionsResponse).Executions); return new apiv1.ScanWorkflowExecutionsResponse({Executions: __goscriptLiteralField63, NextPageToken: (t$ as shared.ListWorkflowExecutionsResponse).NextPageToken}) })()
}

export function SignalWithStartWorkflowExecutionResponse(t: shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null): apiv1.SignalWithStartWorkflowExecutionResponse | $.VarRef<apiv1.SignalWithStartWorkflowExecutionResponse> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField64 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.StartWorkflowExecutionResponse).GetRunId() : shared.StartWorkflowExecutionResponse.prototype.GetRunId.call(t)); return new apiv1.SignalWithStartWorkflowExecutionResponse({RunId: __goscriptLiteralField64}) })()
}

export function StartWorkflowExecutionResponse(t: shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null): apiv1.StartWorkflowExecutionResponse | $.VarRef<apiv1.StartWorkflowExecutionResponse> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField65 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.StartWorkflowExecutionResponse).GetRunId() : shared.StartWorkflowExecutionResponse.prototype.GetRunId.call(t)); return new apiv1.StartWorkflowExecutionResponse({RunId: __goscriptLiteralField65}) })()
}

export function UpdateDomainResponse(t: shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null): apiv1.UpdateDomainResponse | $.VarRef<apiv1.UpdateDomainResponse> | null {
	const t$: shared.UpdateDomainResponse = t == null ? $.pointerTarget<shared.UpdateDomainResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.UpdateDomainResponse>(t)
	if (t == null) {
		return null
	}
	let domain: apiv1.Domain | $.VarRef<apiv1.Domain> | null = (() => { const __goscriptLiteralField66 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.UpdateDomainResponse).GetFailoverVersion() : shared.UpdateDomainResponse.prototype.GetFailoverVersion.call(t)); const __goscriptLiteralField67 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.UpdateDomainResponse).GetIsGlobalDomain() : shared.UpdateDomainResponse.prototype.GetIsGlobalDomain.call(t)); return new apiv1.Domain({FailoverVersion: __goscriptLiteralField66, IsGlobalDomain: __goscriptLiteralField67}) })()
	let domain$: apiv1.Domain = domain == null ? $.pointerTarget<apiv1.Domain>(domain) : (domain as any).__isVarRef === true ? (domain as any).value : (domain as any).__goValue === undefined ? (domain as any) : $.pointerTarget<apiv1.Domain>(domain)
	{
		let info: shared.DomainInfo | $.VarRef<shared.DomainInfo> | null = (t$ as shared.UpdateDomainResponse).DomainInfo
		if (info != null) {
			;(domain$ as apiv1.Domain).Id = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? ((info as any) as shared.DomainInfo).GetUUID() : shared.DomainInfo.prototype.GetUUID.call(info));
			;(domain$ as apiv1.Domain).Name = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? ((info as any) as shared.DomainInfo).GetName() : shared.DomainInfo.prototype.GetName.call(info));
			;(domain$ as apiv1.Domain).Status = __goscript__enum.DomainStatus($.pointerValue<shared.DomainInfo>(info).Status);
			;(domain$ as apiv1.Domain).Description = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? ((info as any) as shared.DomainInfo).GetDescription() : shared.DomainInfo.prototype.GetDescription.call(info));
			;(domain$ as apiv1.Domain).OwnerEmail = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? ((info as any) as shared.DomainInfo).GetOwnerEmail() : shared.DomainInfo.prototype.GetOwnerEmail.call(info));
			;(domain$ as apiv1.Domain).Data = $.pointerValue<shared.DomainInfo>(info).Data
		}
	}
	{
		let config: shared.DomainConfiguration | $.VarRef<shared.DomainConfiguration> | null = (t$ as shared.UpdateDomainResponse).Configuration
		if (config != null) {
			;(domain$ as apiv1.Domain).WorkflowExecutionRetentionPeriod = __goscript_helpers.daysToDuration($.pointerValue<shared.DomainConfiguration>(config).WorkflowExecutionRetentionPeriodInDays);
			;(domain$ as apiv1.Domain).BadBinaries = __goscript_types.BadBinaries($.pointerValue<shared.DomainConfiguration>(config).BadBinaries);
			;(domain$ as apiv1.Domain).HistoryArchivalStatus = __goscript__enum.ArchivalStatus($.pointerValue<shared.DomainConfiguration>(config).HistoryArchivalStatus);
			;(domain$ as apiv1.Domain).HistoryArchivalUri = (config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as shared.DomainConfiguration).GetHistoryArchivalURI() : shared.DomainConfiguration.prototype.GetHistoryArchivalURI.call(config));
			;(domain$ as apiv1.Domain).VisibilityArchivalStatus = __goscript__enum.ArchivalStatus($.pointerValue<shared.DomainConfiguration>(config).VisibilityArchivalStatus);
			;(domain$ as apiv1.Domain).VisibilityArchivalUri = (config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as shared.DomainConfiguration).GetVisibilityArchivalURI() : shared.DomainConfiguration.prototype.GetVisibilityArchivalURI.call(config))
		}
	}
	{
		let repl: shared.DomainReplicationConfiguration | $.VarRef<shared.DomainReplicationConfiguration> | null = (t$ as shared.UpdateDomainResponse).ReplicationConfiguration
		if (repl != null) {
			;(domain$ as apiv1.Domain).ActiveClusterName = (repl !== null && (repl as any).__isVarRef !== true && (repl as any).__goValue === undefined ? ((repl as any) as shared.DomainReplicationConfiguration).GetActiveClusterName() : shared.DomainReplicationConfiguration.prototype.GetActiveClusterName.call(repl));
			;(domain$ as apiv1.Domain).Clusters = __goscript_types.ClusterReplicationConfigurationArray($.pointerValue<shared.DomainReplicationConfiguration>(repl).Clusters);
			;(domain$ as apiv1.Domain).ActiveClusters = __goscript_types.ActiveClusters($.pointerValue<shared.DomainReplicationConfiguration>(repl).ActiveClusters)
		}
	}
	return new apiv1.UpdateDomainResponse({Domain: domain})
}

export function FailoverDomainResponse(t: shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null): apiv1.FailoverDomainResponse | $.VarRef<apiv1.FailoverDomainResponse> | null {
	const t$: shared.FailoverDomainResponse = t == null ? $.pointerTarget<shared.FailoverDomainResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.FailoverDomainResponse>(t)
	if (t == null) {
		return null
	}
	let domain = $.varRef((() => { const __goscriptLiteralField68 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.FailoverDomainResponse).GetFailoverVersion() : shared.FailoverDomainResponse.prototype.GetFailoverVersion.call(t)); const __goscriptLiteralField69 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.FailoverDomainResponse).GetIsGlobalDomain() : shared.FailoverDomainResponse.prototype.GetIsGlobalDomain.call(t)); return $.markAsStructValue(new apiv1.Domain({FailoverVersion: __goscriptLiteralField68, IsGlobalDomain: __goscriptLiteralField69})) })())
	{
		let info: shared.DomainInfo | $.VarRef<shared.DomainInfo> | null = (t$ as shared.FailoverDomainResponse).DomainInfo
		if (info != null) {
			domain.value.Id = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? ((info as any) as shared.DomainInfo).GetUUID() : shared.DomainInfo.prototype.GetUUID.call(info))
			domain.value.Name = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? ((info as any) as shared.DomainInfo).GetName() : shared.DomainInfo.prototype.GetName.call(info))
			domain.value.Status = __goscript__enum.DomainStatus($.pointerValue<shared.DomainInfo>(info).Status)
			domain.value.Description = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? ((info as any) as shared.DomainInfo).GetDescription() : shared.DomainInfo.prototype.GetDescription.call(info))
			domain.value.OwnerEmail = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? ((info as any) as shared.DomainInfo).GetOwnerEmail() : shared.DomainInfo.prototype.GetOwnerEmail.call(info))
			domain.value.Data = $.pointerValue<shared.DomainInfo>(info).Data
		}
	}
	{
		let config: shared.DomainConfiguration | $.VarRef<shared.DomainConfiguration> | null = (t$ as shared.FailoverDomainResponse).Configuration
		if (config != null) {
			domain.value.WorkflowExecutionRetentionPeriod = __goscript_helpers.daysToDuration($.pointerValue<shared.DomainConfiguration>(config).WorkflowExecutionRetentionPeriodInDays)
			domain.value.BadBinaries = __goscript_types.BadBinaries($.pointerValue<shared.DomainConfiguration>(config).BadBinaries)
			domain.value.HistoryArchivalStatus = __goscript__enum.ArchivalStatus($.pointerValue<shared.DomainConfiguration>(config).HistoryArchivalStatus)
			domain.value.HistoryArchivalUri = (config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as shared.DomainConfiguration).GetHistoryArchivalURI() : shared.DomainConfiguration.prototype.GetHistoryArchivalURI.call(config))
			domain.value.VisibilityArchivalStatus = __goscript__enum.ArchivalStatus($.pointerValue<shared.DomainConfiguration>(config).VisibilityArchivalStatus)
			domain.value.VisibilityArchivalUri = (config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as shared.DomainConfiguration).GetVisibilityArchivalURI() : shared.DomainConfiguration.prototype.GetVisibilityArchivalURI.call(config))
		}
	}
	{
		let repl: shared.DomainReplicationConfiguration | $.VarRef<shared.DomainReplicationConfiguration> | null = (t$ as shared.FailoverDomainResponse).ReplicationConfiguration
		if (repl != null) {
			domain.value.ActiveClusterName = (repl !== null && (repl as any).__isVarRef !== true && (repl as any).__goValue === undefined ? ((repl as any) as shared.DomainReplicationConfiguration).GetActiveClusterName() : shared.DomainReplicationConfiguration.prototype.GetActiveClusterName.call(repl))
			domain.value.Clusters = __goscript_types.ClusterReplicationConfigurationArray($.pointerValue<shared.DomainReplicationConfiguration>(repl).Clusters)
			domain.value.ActiveClusters = __goscript_types.ActiveClusters($.pointerValue<shared.DomainReplicationConfiguration>(repl).ActiveClusters)
		}
	}
	return new apiv1.FailoverDomainResponse({Domain: domain})
}

export function ListFailoverHistoryResponse(t: shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null): apiv1.ListFailoverHistoryResponse | $.VarRef<apiv1.ListFailoverHistoryResponse> | null {
	const t$: shared.ListFailoverHistoryResponse = t == null ? $.pointerTarget<shared.ListFailoverHistoryResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ListFailoverHistoryResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField70 = __goscript_types.FailoverEventArray((t$ as shared.ListFailoverHistoryResponse).FailoverEvents); return new apiv1.ListFailoverHistoryResponse({FailoverEvents: __goscriptLiteralField70, NextPageToken: (t$ as shared.ListFailoverHistoryResponse).NextPageToken}) })()
}
