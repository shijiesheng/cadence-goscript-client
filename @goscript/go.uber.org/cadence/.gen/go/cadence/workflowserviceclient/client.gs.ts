// Generated file based on client.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as thrift from "@goscript/go.uber.org/yarpc/encoding/thrift/index.js"

import * as cadence from "@goscript/go.uber.org/cadence/.gen/go/cadence/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import type * as envelope from "@goscript/go.uber.org/thriftrw/envelope/index.js"

import type * as stream from "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"
import "@goscript/context/index.js"
import "@goscript/reflect/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/go.uber.org/yarpc/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/encoding/thrift/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

$.registerTypePackagePath("go.uber.org/cadence/.gen/go/cadence/workflowserviceclient", ["workflowserviceclient.Interface", "workflowserviceclient.client"])

export type Interface = {
	BackfillSchedule(ctx: context.Context | null, Request: shared.BackfillScheduleRequest | $.VarRef<shared.BackfillScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null, $.GoError]>
	CountWorkflowExecutions(ctx: context.Context | null, CountRequest: shared.CountWorkflowExecutionsRequest | $.VarRef<shared.CountWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null, $.GoError]>
	CreateSchedule(ctx: context.Context | null, Request: shared.CreateScheduleRequest | $.VarRef<shared.CreateScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null, $.GoError]>
	DeleteDomain(ctx: context.Context | null, DeleteRequest: shared.DeleteDomainRequest | $.VarRef<shared.DeleteDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): $.GoError | globalThis.Promise<$.GoError>
	DeleteSchedule(ctx: context.Context | null, Request: shared.DeleteScheduleRequest | $.VarRef<shared.DeleteScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null, $.GoError]>
	DeprecateDomain(ctx: context.Context | null, DeprecateRequest: shared.DeprecateDomainRequest | $.VarRef<shared.DeprecateDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): $.GoError | globalThis.Promise<$.GoError>
	DescribeDomain(ctx: context.Context | null, DescribeRequest: shared.DescribeDomainRequest | $.VarRef<shared.DescribeDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null, $.GoError] | globalThis.Promise<[shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null, $.GoError]>
	DescribeSchedule(ctx: context.Context | null, Request: shared.DescribeScheduleRequest | $.VarRef<shared.DescribeScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null, $.GoError]>
	DescribeTaskList(ctx: context.Context | null, Request: shared.DescribeTaskListRequest | $.VarRef<shared.DescribeTaskListRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null, $.GoError] | globalThis.Promise<[shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null, $.GoError]>
	DescribeWorkflowExecution(ctx: context.Context | null, DescribeRequest: shared.DescribeWorkflowExecutionRequest | $.VarRef<shared.DescribeWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null, $.GoError]>
	DiagnoseWorkflowExecution(ctx: context.Context | null, DiagnoseRequest: shared.DiagnoseWorkflowExecutionRequest | $.VarRef<shared.DiagnoseWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null, $.GoError]>
	FailoverDomain(ctx: context.Context | null, FailoverRequest: shared.FailoverDomainRequest | $.VarRef<shared.FailoverDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null, $.GoError] | globalThis.Promise<[shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null, $.GoError]>
	GetClusterInfo(ctx: context.Context | null, opts: $.Slice<yarpc.CallOption>): [shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null, $.GoError] | globalThis.Promise<[shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null, $.GoError]>
	GetSearchAttributes(ctx: context.Context | null, opts: $.Slice<yarpc.CallOption>): [shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null, $.GoError] | globalThis.Promise<[shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null, $.GoError]>
	GetTaskListsByDomain(ctx: context.Context | null, Request: shared.GetTaskListsByDomainRequest | $.VarRef<shared.GetTaskListsByDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null, $.GoError] | globalThis.Promise<[shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null, $.GoError]>
	GetWorkflowExecutionHistory(ctx: context.Context | null, GetRequest: shared.GetWorkflowExecutionHistoryRequest | $.VarRef<shared.GetWorkflowExecutionHistoryRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null, $.GoError] | globalThis.Promise<[shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null, $.GoError]>
	ListArchivedWorkflowExecutions(ctx: context.Context | null, ListRequest: shared.ListArchivedWorkflowExecutionsRequest | $.VarRef<shared.ListArchivedWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null, $.GoError]>
	ListClosedWorkflowExecutions(ctx: context.Context | null, ListRequest: shared.ListClosedWorkflowExecutionsRequest | $.VarRef<shared.ListClosedWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null, $.GoError]>
	ListDomains(ctx: context.Context | null, ListRequest: shared.ListDomainsRequest | $.VarRef<shared.ListDomainsRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null, $.GoError]>
	ListFailoverHistory(ctx: context.Context | null, ListRequest: shared.ListFailoverHistoryRequest | $.VarRef<shared.ListFailoverHistoryRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null, $.GoError] | globalThis.Promise<[shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null, $.GoError]>
	ListOpenWorkflowExecutions(ctx: context.Context | null, ListRequest: shared.ListOpenWorkflowExecutionsRequest | $.VarRef<shared.ListOpenWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null, $.GoError]>
	ListSchedules(ctx: context.Context | null, Request: shared.ListSchedulesRequest | $.VarRef<shared.ListSchedulesRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null, $.GoError] | globalThis.Promise<[shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null, $.GoError]>
	ListTaskListPartitions(ctx: context.Context | null, Request: shared.ListTaskListPartitionsRequest | $.VarRef<shared.ListTaskListPartitionsRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null, $.GoError]>
	ListWorkflowExecutions(ctx: context.Context | null, ListRequest: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError]>
	PauseSchedule(ctx: context.Context | null, Request: shared.PauseScheduleRequest | $.VarRef<shared.PauseScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null, $.GoError]>
	PollForActivityTask(ctx: context.Context | null, PollRequest: shared.PollForActivityTaskRequest | $.VarRef<shared.PollForActivityTaskRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null, $.GoError] | globalThis.Promise<[shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null, $.GoError]>
	PollForDecisionTask(ctx: context.Context | null, PollRequest: shared.PollForDecisionTaskRequest | $.VarRef<shared.PollForDecisionTaskRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null, $.GoError] | globalThis.Promise<[shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null, $.GoError]>
	QueryWorkflow(ctx: context.Context | null, QueryRequest: shared.QueryWorkflowRequest | $.VarRef<shared.QueryWorkflowRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null, $.GoError] | globalThis.Promise<[shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null, $.GoError]>
	RecordActivityTaskHeartbeat(ctx: context.Context | null, HeartbeatRequest: shared.RecordActivityTaskHeartbeatRequest | $.VarRef<shared.RecordActivityTaskHeartbeatRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError] | globalThis.Promise<[shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError]>
	RecordActivityTaskHeartbeatByID(ctx: context.Context | null, HeartbeatRequest: shared.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<shared.RecordActivityTaskHeartbeatByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError] | globalThis.Promise<[shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError]>
	RefreshWorkflowTasks(ctx: context.Context | null, Request: shared.RefreshWorkflowTasksRequest | $.VarRef<shared.RefreshWorkflowTasksRequest> | null, opts: $.Slice<yarpc.CallOption>): $.GoError | globalThis.Promise<$.GoError>
	RegisterDomain(ctx: context.Context | null, RegisterRequest: shared.RegisterDomainRequest | $.VarRef<shared.RegisterDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): $.GoError | globalThis.Promise<$.GoError>
	RequestCancelWorkflowExecution(ctx: context.Context | null, CancelRequest: shared.RequestCancelWorkflowExecutionRequest | $.VarRef<shared.RequestCancelWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): $.GoError | globalThis.Promise<$.GoError>
	ResetStickyTaskList(ctx: context.Context | null, ResetRequest: shared.ResetStickyTaskListRequest | $.VarRef<shared.ResetStickyTaskListRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null, $.GoError] | globalThis.Promise<[shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null, $.GoError]>
	ResetWorkflowExecution(ctx: context.Context | null, ResetRequest: shared.ResetWorkflowExecutionRequest | $.VarRef<shared.ResetWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null, $.GoError]>
	RespondActivityTaskCanceled(ctx: context.Context | null, CanceledRequest: shared.RespondActivityTaskCanceledRequest | $.VarRef<shared.RespondActivityTaskCanceledRequest> | null, opts: $.Slice<yarpc.CallOption>): $.GoError | globalThis.Promise<$.GoError>
	RespondActivityTaskCanceledByID(ctx: context.Context | null, CanceledRequest: shared.RespondActivityTaskCanceledByIDRequest | $.VarRef<shared.RespondActivityTaskCanceledByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): $.GoError | globalThis.Promise<$.GoError>
	RespondActivityTaskCompleted(ctx: context.Context | null, CompleteRequest: shared.RespondActivityTaskCompletedRequest | $.VarRef<shared.RespondActivityTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): $.GoError | globalThis.Promise<$.GoError>
	RespondActivityTaskCompletedByID(ctx: context.Context | null, CompleteRequest: shared.RespondActivityTaskCompletedByIDRequest | $.VarRef<shared.RespondActivityTaskCompletedByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): $.GoError | globalThis.Promise<$.GoError>
	RespondActivityTaskFailed(ctx: context.Context | null, FailRequest: shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null, opts: $.Slice<yarpc.CallOption>): $.GoError | globalThis.Promise<$.GoError>
	RespondActivityTaskFailedByID(ctx: context.Context | null, FailRequest: shared.RespondActivityTaskFailedByIDRequest | $.VarRef<shared.RespondActivityTaskFailedByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): $.GoError | globalThis.Promise<$.GoError>
	RespondDecisionTaskCompleted(ctx: context.Context | null, CompleteRequest: shared.RespondDecisionTaskCompletedRequest | $.VarRef<shared.RespondDecisionTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null, $.GoError] | globalThis.Promise<[shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null, $.GoError]>
	RespondDecisionTaskFailed(ctx: context.Context | null, FailedRequest: shared.RespondDecisionTaskFailedRequest | $.VarRef<shared.RespondDecisionTaskFailedRequest> | null, opts: $.Slice<yarpc.CallOption>): $.GoError | globalThis.Promise<$.GoError>
	RespondQueryTaskCompleted(ctx: context.Context | null, CompleteRequest: shared.RespondQueryTaskCompletedRequest | $.VarRef<shared.RespondQueryTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): $.GoError | globalThis.Promise<$.GoError>
	RestartWorkflowExecution(ctx: context.Context | null, RestartRequest: shared.RestartWorkflowExecutionRequest | $.VarRef<shared.RestartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null, $.GoError]>
	ScanWorkflowExecutions(ctx: context.Context | null, ListRequest: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError]>
	SignalWithStartWorkflowExecution(ctx: context.Context | null, SignalWithStartRequest: shared.SignalWithStartWorkflowExecutionRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError]>
	SignalWithStartWorkflowExecutionAsync(ctx: context.Context | null, SignalWithStartRequest: shared.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null, $.GoError] | globalThis.Promise<[shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null, $.GoError]>
	SignalWorkflowExecution(ctx: context.Context | null, SignalRequest: shared.SignalWorkflowExecutionRequest | $.VarRef<shared.SignalWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): $.GoError | globalThis.Promise<$.GoError>
	StartWorkflowExecution(ctx: context.Context | null, StartRequest: shared.StartWorkflowExecutionRequest | $.VarRef<shared.StartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError]>
	StartWorkflowExecutionAsync(ctx: context.Context | null, StartRequest: shared.StartWorkflowExecutionAsyncRequest | $.VarRef<shared.StartWorkflowExecutionAsyncRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null, $.GoError] | globalThis.Promise<[shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null, $.GoError]>
	TerminateWorkflowExecution(ctx: context.Context | null, TerminateRequest: shared.TerminateWorkflowExecutionRequest | $.VarRef<shared.TerminateWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): $.GoError | globalThis.Promise<$.GoError>
	UnpauseSchedule(ctx: context.Context | null, Request: shared.UnpauseScheduleRequest | $.VarRef<shared.UnpauseScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null, $.GoError]>
	UpdateDomain(ctx: context.Context | null, UpdateRequest: shared.UpdateDomainRequest | $.VarRef<shared.UpdateDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null, $.GoError] | globalThis.Promise<[shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null, $.GoError]>
	UpdateSchedule(ctx: context.Context | null, Request: shared.UpdateScheduleRequest | $.VarRef<shared.UpdateScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null, $.GoError]>
}

$.registerInterfaceType(
	"workflowserviceclient.Interface",
	null,
	[$.methodSignature("BackfillSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.BackfillScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.BackfillScheduleResponse"), "error"]), $.methodSignature("CountWorkflowExecutions", [["ctx", "context.Context"], ["CountRequest", /* @__PURE__ */ $.pointerType("shared.CountWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.CountWorkflowExecutionsResponse"), "error"]), $.methodSignature("CreateSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.CreateScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.CreateScheduleResponse"), "error"]), $.methodSignature("DeleteDomain", [["ctx", "context.Context"], ["DeleteRequest", /* @__PURE__ */ $.pointerType("shared.DeleteDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"]), $.methodSignature("DeleteSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.DeleteScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DeleteScheduleResponse"), "error"]), $.methodSignature("DeprecateDomain", [["ctx", "context.Context"], ["DeprecateRequest", /* @__PURE__ */ $.pointerType("shared.DeprecateDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"]), $.methodSignature("DescribeDomain", [["ctx", "context.Context"], ["DescribeRequest", /* @__PURE__ */ $.pointerType("shared.DescribeDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DescribeDomainResponse"), "error"]), $.methodSignature("DescribeSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.DescribeScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DescribeScheduleResponse"), "error"]), $.methodSignature("DescribeTaskList", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.DescribeTaskListRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DescribeTaskListResponse"), "error"]), $.methodSignature("DescribeWorkflowExecution", [["ctx", "context.Context"], ["DescribeRequest", /* @__PURE__ */ $.pointerType("shared.DescribeWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DescribeWorkflowExecutionResponse"), "error"]), $.methodSignature("DiagnoseWorkflowExecution", [["ctx", "context.Context"], ["DiagnoseRequest", /* @__PURE__ */ $.pointerType("shared.DiagnoseWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DiagnoseWorkflowExecutionResponse"), "error"]), $.methodSignature("FailoverDomain", [["ctx", "context.Context"], ["FailoverRequest", /* @__PURE__ */ $.pointerType("shared.FailoverDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.FailoverDomainResponse"), "error"]), $.methodSignature("GetClusterInfo", [["ctx", "context.Context"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ClusterInfo"), "error"]), $.methodSignature("GetSearchAttributes", [["ctx", "context.Context"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.GetSearchAttributesResponse"), "error"]), $.methodSignature("GetTaskListsByDomain", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.GetTaskListsByDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.GetTaskListsByDomainResponse"), "error"]), $.methodSignature("GetWorkflowExecutionHistory", [["ctx", "context.Context"], ["GetRequest", /* @__PURE__ */ $.pointerType("shared.GetWorkflowExecutionHistoryRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.GetWorkflowExecutionHistoryResponse"), "error"]), $.methodSignature("ListArchivedWorkflowExecutions", [["ctx", "context.Context"], ["ListRequest", /* @__PURE__ */ $.pointerType("shared.ListArchivedWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListArchivedWorkflowExecutionsResponse"), "error"]), $.methodSignature("ListClosedWorkflowExecutions", [["ctx", "context.Context"], ["ListRequest", /* @__PURE__ */ $.pointerType("shared.ListClosedWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListClosedWorkflowExecutionsResponse"), "error"]), $.methodSignature("ListDomains", [["ctx", "context.Context"], ["ListRequest", /* @__PURE__ */ $.pointerType("shared.ListDomainsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListDomainsResponse"), "error"]), $.methodSignature("ListFailoverHistory", [["ctx", "context.Context"], ["ListRequest", /* @__PURE__ */ $.pointerType("shared.ListFailoverHistoryRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListFailoverHistoryResponse"), "error"]), $.methodSignature("ListOpenWorkflowExecutions", [["ctx", "context.Context"], ["ListRequest", /* @__PURE__ */ $.pointerType("shared.ListOpenWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListOpenWorkflowExecutionsResponse"), "error"]), $.methodSignature("ListSchedules", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.ListSchedulesRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListSchedulesResponse"), "error"]), $.methodSignature("ListTaskListPartitions", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.ListTaskListPartitionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListTaskListPartitionsResponse"), "error"]), $.methodSignature("ListWorkflowExecutions", [["ctx", "context.Context"], ["ListRequest", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse"), "error"]), $.methodSignature("PauseSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.PauseScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.PauseScheduleResponse"), "error"]), $.methodSignature("PollForActivityTask", [["ctx", "context.Context"], ["PollRequest", /* @__PURE__ */ $.pointerType("shared.PollForActivityTaskRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse"), "error"]), $.methodSignature("PollForDecisionTask", [["ctx", "context.Context"], ["PollRequest", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse"), "error"]), $.methodSignature("QueryWorkflow", [["ctx", "context.Context"], ["QueryRequest", /* @__PURE__ */ $.pointerType("shared.QueryWorkflowRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.QueryWorkflowResponse"), "error"]), $.methodSignature("RecordActivityTaskHeartbeat", [["ctx", "context.Context"], ["HeartbeatRequest", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatResponse"), "error"]), $.methodSignature("RecordActivityTaskHeartbeatByID", [["ctx", "context.Context"], ["HeartbeatRequest", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatResponse"), "error"]), $.methodSignature("RefreshWorkflowTasks", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.RefreshWorkflowTasksRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"]), $.methodSignature("RegisterDomain", [["ctx", "context.Context"], ["RegisterRequest", /* @__PURE__ */ $.pointerType("shared.RegisterDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"]), $.methodSignature("RequestCancelWorkflowExecution", [["ctx", "context.Context"], ["CancelRequest", /* @__PURE__ */ $.pointerType("shared.RequestCancelWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"]), $.methodSignature("ResetStickyTaskList", [["ctx", "context.Context"], ["ResetRequest", /* @__PURE__ */ $.pointerType("shared.ResetStickyTaskListRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ResetStickyTaskListResponse"), "error"]), $.methodSignature("ResetWorkflowExecution", [["ctx", "context.Context"], ["ResetRequest", /* @__PURE__ */ $.pointerType("shared.ResetWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ResetWorkflowExecutionResponse"), "error"]), $.methodSignature("RespondActivityTaskCanceled", [["ctx", "context.Context"], ["CanceledRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"]), $.methodSignature("RespondActivityTaskCanceledByID", [["ctx", "context.Context"], ["CanceledRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"]), $.methodSignature("RespondActivityTaskCompleted", [["ctx", "context.Context"], ["CompleteRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"]), $.methodSignature("RespondActivityTaskCompletedByID", [["ctx", "context.Context"], ["CompleteRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"]), $.methodSignature("RespondActivityTaskFailed", [["ctx", "context.Context"], ["FailRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"]), $.methodSignature("RespondActivityTaskFailedByID", [["ctx", "context.Context"], ["FailRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"]), $.methodSignature("RespondDecisionTaskCompleted", [["ctx", "context.Context"], ["CompleteRequest", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedResponse"), "error"]), $.methodSignature("RespondDecisionTaskFailed", [["ctx", "context.Context"], ["FailedRequest", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskFailedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"]), $.methodSignature("RespondQueryTaskCompleted", [["ctx", "context.Context"], ["CompleteRequest", /* @__PURE__ */ $.pointerType("shared.RespondQueryTaskCompletedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"]), $.methodSignature("RestartWorkflowExecution", [["ctx", "context.Context"], ["RestartRequest", /* @__PURE__ */ $.pointerType("shared.RestartWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.RestartWorkflowExecutionResponse"), "error"]), $.methodSignature("ScanWorkflowExecutions", [["ctx", "context.Context"], ["ListRequest", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse"), "error"]), $.methodSignature("SignalWithStartWorkflowExecution", [["ctx", "context.Context"], ["SignalWithStartRequest", /* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionResponse"), "error"]), $.methodSignature("SignalWithStartWorkflowExecutionAsync", [["ctx", "context.Context"], ["SignalWithStartRequest", /* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionAsyncRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionAsyncResponse"), "error"]), $.methodSignature("SignalWorkflowExecution", [["ctx", "context.Context"], ["SignalRequest", /* @__PURE__ */ $.pointerType("shared.SignalWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"]), $.methodSignature("StartWorkflowExecution", [["ctx", "context.Context"], ["StartRequest", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionResponse"), "error"]), $.methodSignature("StartWorkflowExecutionAsync", [["ctx", "context.Context"], ["StartRequest", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionAsyncRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionAsyncResponse"), "error"]), $.methodSignature("TerminateWorkflowExecution", [["ctx", "context.Context"], ["TerminateRequest", /* @__PURE__ */ $.pointerType("shared.TerminateWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"]), $.methodSignature("UnpauseSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.UnpauseScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.UnpauseScheduleResponse"), "error"]), $.methodSignature("UpdateDomain", [["ctx", "context.Context"], ["UpdateRequest", /* @__PURE__ */ $.pointerType("shared.UpdateDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.UpdateDomainResponse"), "error"]), $.methodSignature("UpdateSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.UpdateScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.UpdateScheduleResponse"), "error"])]
);

export class client {
	public get c(): thrift.Client | null {
		return this._fields.c
	}

	public set c(value: thrift.Client | null) {
		this._fields.c = value
	}

	public get nwc(): thrift.NoWireClient | null {
		return this._fields.nwc
	}

	public set nwc(value: thrift.NoWireClient | null) {
		this._fields.nwc = value
	}

	public _fields: {
		c: thrift.Client | null
		nwc: thrift.NoWireClient | null
	}

	constructor(init?: Partial<{c?: thrift.Client | null, nwc?: thrift.NoWireClient | null}>, __goscriptValue?: boolean) {
		this._fields = {
			c: init?.c ?? (null! as thrift.Client | null),
			nwc: init?.nwc ?? (null! as thrift.NoWireClient | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): client {
		return new client(this, true)
	}

	public __goscriptAssign(source: client): void {
		const target = this._fields
		const values = source._fields
		target.c = $.assignFieldValue(target.c, values.c, "thrift.Client")
		target.nwc = $.assignFieldValue(target.nwc, values.nwc, "thrift.NoWireClient")
	}

	public async BackfillSchedule(ctx: context.Context | null, _Request: shared.BackfillScheduleRequest | $.VarRef<shared.BackfillScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null = null! as shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_BackfillSchedule_Result> = $.varRef(new cadence.WorkflowService_BackfillSchedule_Result(undefined, true))
		let args: cadence.WorkflowService_BackfillSchedule_Args | $.VarRef<cadence.WorkflowService_BackfillSchedule_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((request: shared.BackfillScheduleRequest | $.VarRef<shared.BackfillScheduleRequest> | null) => cadence.WorkflowService_BackfillSchedule_Args | $.VarRef<cadence.WorkflowService_BackfillSchedule_Args> | null | globalThis.Promise<cadence.WorkflowService_BackfillSchedule_Args | $.VarRef<cadence.WorkflowService_BackfillSchedule_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_BackfillSchedule_Result | $.VarRef<cadence.WorkflowService_BackfillSchedule_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_BackfillSchedule_Result | $.VarRef<cadence.WorkflowService_BackfillSchedule_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_BackfillSchedule_Result | $.VarRef<cadence.WorkflowService_BackfillSchedule_Result> | null) => [shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_BackfillSchedule_Helper).Args!(_Request), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_BackfillSchedule_Args | $.VarRef<cadence.WorkflowService_BackfillSchedule_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_BackfillSchedule_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_BackfillSchedule_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_BackfillSchedule_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_BackfillSchedule_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple0: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_BackfillSchedule_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_BackfillSchedule_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple0[0])
				err = __goscriptTuple0[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple1: any = await $.pointerValue<{"Args": ((request: shared.BackfillScheduleRequest | $.VarRef<shared.BackfillScheduleRequest> | null) => cadence.WorkflowService_BackfillSchedule_Args | $.VarRef<cadence.WorkflowService_BackfillSchedule_Args> | null | globalThis.Promise<cadence.WorkflowService_BackfillSchedule_Args | $.VarRef<cadence.WorkflowService_BackfillSchedule_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_BackfillSchedule_Result | $.VarRef<cadence.WorkflowService_BackfillSchedule_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_BackfillSchedule_Result | $.VarRef<cadence.WorkflowService_BackfillSchedule_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_BackfillSchedule_Result | $.VarRef<cadence.WorkflowService_BackfillSchedule_Result> | null) => [shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_BackfillSchedule_Helper).UnwrapResponse!(result)
		success = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		return [success, err]
	}

	public async CountWorkflowExecutions(ctx: context.Context | null, _CountRequest: shared.CountWorkflowExecutionsRequest | $.VarRef<shared.CountWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null = null! as shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_CountWorkflowExecutions_Result> = $.varRef(new cadence.WorkflowService_CountWorkflowExecutions_Result(undefined, true))
		let args: cadence.WorkflowService_CountWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_CountWorkflowExecutions_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((countRequest: shared.CountWorkflowExecutionsRequest | $.VarRef<shared.CountWorkflowExecutionsRequest> | null) => cadence.WorkflowService_CountWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_CountWorkflowExecutions_Args> | null | globalThis.Promise<cadence.WorkflowService_CountWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_CountWorkflowExecutions_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_CountWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_CountWorkflowExecutions_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_CountWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_CountWorkflowExecutions_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_CountWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_CountWorkflowExecutions_Result> | null) => [shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_CountWorkflowExecutions_Helper).Args!(_CountRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_CountWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_CountWorkflowExecutions_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_CountWorkflowExecutions_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_CountWorkflowExecutions_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_CountWorkflowExecutions_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_CountWorkflowExecutions_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple2: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_CountWorkflowExecutions_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_CountWorkflowExecutions_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple2[0])
				err = __goscriptTuple2[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple3: any = await $.pointerValue<{"Args": ((countRequest: shared.CountWorkflowExecutionsRequest | $.VarRef<shared.CountWorkflowExecutionsRequest> | null) => cadence.WorkflowService_CountWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_CountWorkflowExecutions_Args> | null | globalThis.Promise<cadence.WorkflowService_CountWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_CountWorkflowExecutions_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_CountWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_CountWorkflowExecutions_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_CountWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_CountWorkflowExecutions_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_CountWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_CountWorkflowExecutions_Result> | null) => [shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_CountWorkflowExecutions_Helper).UnwrapResponse!(result)
		success = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		return [success, err]
	}

	public async CreateSchedule(ctx: context.Context | null, _Request: shared.CreateScheduleRequest | $.VarRef<shared.CreateScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null = null! as shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_CreateSchedule_Result> = $.varRef(new cadence.WorkflowService_CreateSchedule_Result(undefined, true))
		let args: cadence.WorkflowService_CreateSchedule_Args | $.VarRef<cadence.WorkflowService_CreateSchedule_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((request: shared.CreateScheduleRequest | $.VarRef<shared.CreateScheduleRequest> | null) => cadence.WorkflowService_CreateSchedule_Args | $.VarRef<cadence.WorkflowService_CreateSchedule_Args> | null | globalThis.Promise<cadence.WorkflowService_CreateSchedule_Args | $.VarRef<cadence.WorkflowService_CreateSchedule_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_CreateSchedule_Result | $.VarRef<cadence.WorkflowService_CreateSchedule_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_CreateSchedule_Result | $.VarRef<cadence.WorkflowService_CreateSchedule_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_CreateSchedule_Result | $.VarRef<cadence.WorkflowService_CreateSchedule_Result> | null) => [shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_CreateSchedule_Helper).Args!(_Request), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_CreateSchedule_Args | $.VarRef<cadence.WorkflowService_CreateSchedule_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_CreateSchedule_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_CreateSchedule_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_CreateSchedule_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_CreateSchedule_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple4: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_CreateSchedule_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_CreateSchedule_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple4[0])
				err = __goscriptTuple4[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple5: any = await $.pointerValue<{"Args": ((request: shared.CreateScheduleRequest | $.VarRef<shared.CreateScheduleRequest> | null) => cadence.WorkflowService_CreateSchedule_Args | $.VarRef<cadence.WorkflowService_CreateSchedule_Args> | null | globalThis.Promise<cadence.WorkflowService_CreateSchedule_Args | $.VarRef<cadence.WorkflowService_CreateSchedule_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_CreateSchedule_Result | $.VarRef<cadence.WorkflowService_CreateSchedule_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_CreateSchedule_Result | $.VarRef<cadence.WorkflowService_CreateSchedule_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_CreateSchedule_Result | $.VarRef<cadence.WorkflowService_CreateSchedule_Result> | null) => [shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_CreateSchedule_Helper).UnwrapResponse!(result)
		success = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		return [success, err]
	}

	public async DeleteDomain(ctx: context.Context | null, _DeleteRequest: shared.DeleteDomainRequest | $.VarRef<shared.DeleteDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const c = this;
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_DeleteDomain_Result> = $.varRef(new cadence.WorkflowService_DeleteDomain_Result(undefined, true))
		let args: cadence.WorkflowService_DeleteDomain_Args | $.VarRef<cadence.WorkflowService_DeleteDomain_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((deleteRequest: shared.DeleteDomainRequest | $.VarRef<shared.DeleteDomainRequest> | null) => cadence.WorkflowService_DeleteDomain_Args | $.VarRef<cadence.WorkflowService_DeleteDomain_Args> | null | globalThis.Promise<cadence.WorkflowService_DeleteDomain_Args | $.VarRef<cadence.WorkflowService_DeleteDomain_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_DeleteDomain_Result | $.VarRef<cadence.WorkflowService_DeleteDomain_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_DeleteDomain_Result | $.VarRef<cadence.WorkflowService_DeleteDomain_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_DeleteDomain_Result | $.VarRef<cadence.WorkflowService_DeleteDomain_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_DeleteDomain_Helper).Args!(_DeleteRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_DeleteDomain_Args | $.VarRef<cadence.WorkflowService_DeleteDomain_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_DeleteDomain_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DeleteDomain_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_DeleteDomain_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DeleteDomain_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple6: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_DeleteDomain_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DeleteDomain_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple6[0])
				err = __goscriptTuple6[1]
				if (err != null) {
					return err
				}
			}

			{
				err = result.value.FromWire((body).clone())
				if (err != null) {
					return err
				}
			}
		}

		err = (__goscriptAwait = $.pointerValue<{"Args": ((deleteRequest: shared.DeleteDomainRequest | $.VarRef<shared.DeleteDomainRequest> | null) => cadence.WorkflowService_DeleteDomain_Args | $.VarRef<cadence.WorkflowService_DeleteDomain_Args> | null | globalThis.Promise<cadence.WorkflowService_DeleteDomain_Args | $.VarRef<cadence.WorkflowService_DeleteDomain_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_DeleteDomain_Result | $.VarRef<cadence.WorkflowService_DeleteDomain_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_DeleteDomain_Result | $.VarRef<cadence.WorkflowService_DeleteDomain_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_DeleteDomain_Result | $.VarRef<cadence.WorkflowService_DeleteDomain_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_DeleteDomain_Helper).UnwrapResponse!(result), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async DeleteSchedule(ctx: context.Context | null, _Request: shared.DeleteScheduleRequest | $.VarRef<shared.DeleteScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null = null! as shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_DeleteSchedule_Result> = $.varRef(new cadence.WorkflowService_DeleteSchedule_Result(undefined, true))
		let args: cadence.WorkflowService_DeleteSchedule_Args | $.VarRef<cadence.WorkflowService_DeleteSchedule_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((request: shared.DeleteScheduleRequest | $.VarRef<shared.DeleteScheduleRequest> | null) => cadence.WorkflowService_DeleteSchedule_Args | $.VarRef<cadence.WorkflowService_DeleteSchedule_Args> | null | globalThis.Promise<cadence.WorkflowService_DeleteSchedule_Args | $.VarRef<cadence.WorkflowService_DeleteSchedule_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_DeleteSchedule_Result | $.VarRef<cadence.WorkflowService_DeleteSchedule_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_DeleteSchedule_Result | $.VarRef<cadence.WorkflowService_DeleteSchedule_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_DeleteSchedule_Result | $.VarRef<cadence.WorkflowService_DeleteSchedule_Result> | null) => [shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_DeleteSchedule_Helper).Args!(_Request), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_DeleteSchedule_Args | $.VarRef<cadence.WorkflowService_DeleteSchedule_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_DeleteSchedule_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DeleteSchedule_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_DeleteSchedule_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DeleteSchedule_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple7: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_DeleteSchedule_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DeleteSchedule_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple7[0])
				err = __goscriptTuple7[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple8: any = await $.pointerValue<{"Args": ((request: shared.DeleteScheduleRequest | $.VarRef<shared.DeleteScheduleRequest> | null) => cadence.WorkflowService_DeleteSchedule_Args | $.VarRef<cadence.WorkflowService_DeleteSchedule_Args> | null | globalThis.Promise<cadence.WorkflowService_DeleteSchedule_Args | $.VarRef<cadence.WorkflowService_DeleteSchedule_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_DeleteSchedule_Result | $.VarRef<cadence.WorkflowService_DeleteSchedule_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_DeleteSchedule_Result | $.VarRef<cadence.WorkflowService_DeleteSchedule_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_DeleteSchedule_Result | $.VarRef<cadence.WorkflowService_DeleteSchedule_Result> | null) => [shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_DeleteSchedule_Helper).UnwrapResponse!(result)
		success = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		return [success, err]
	}

	public async DeprecateDomain(ctx: context.Context | null, _DeprecateRequest: shared.DeprecateDomainRequest | $.VarRef<shared.DeprecateDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const c = this;
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_DeprecateDomain_Result> = $.varRef(new cadence.WorkflowService_DeprecateDomain_Result(undefined, true))
		let args: cadence.WorkflowService_DeprecateDomain_Args | $.VarRef<cadence.WorkflowService_DeprecateDomain_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((deprecateRequest: shared.DeprecateDomainRequest | $.VarRef<shared.DeprecateDomainRequest> | null) => cadence.WorkflowService_DeprecateDomain_Args | $.VarRef<cadence.WorkflowService_DeprecateDomain_Args> | null | globalThis.Promise<cadence.WorkflowService_DeprecateDomain_Args | $.VarRef<cadence.WorkflowService_DeprecateDomain_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_DeprecateDomain_Result | $.VarRef<cadence.WorkflowService_DeprecateDomain_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_DeprecateDomain_Result | $.VarRef<cadence.WorkflowService_DeprecateDomain_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_DeprecateDomain_Result | $.VarRef<cadence.WorkflowService_DeprecateDomain_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_DeprecateDomain_Helper).Args!(_DeprecateRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_DeprecateDomain_Args | $.VarRef<cadence.WorkflowService_DeprecateDomain_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_DeprecateDomain_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DeprecateDomain_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_DeprecateDomain_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DeprecateDomain_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple9: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_DeprecateDomain_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DeprecateDomain_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple9[0])
				err = __goscriptTuple9[1]
				if (err != null) {
					return err
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return err
				}
			}
		}

		err = (__goscriptAwait = $.pointerValue<{"Args": ((deprecateRequest: shared.DeprecateDomainRequest | $.VarRef<shared.DeprecateDomainRequest> | null) => cadence.WorkflowService_DeprecateDomain_Args | $.VarRef<cadence.WorkflowService_DeprecateDomain_Args> | null | globalThis.Promise<cadence.WorkflowService_DeprecateDomain_Args | $.VarRef<cadence.WorkflowService_DeprecateDomain_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_DeprecateDomain_Result | $.VarRef<cadence.WorkflowService_DeprecateDomain_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_DeprecateDomain_Result | $.VarRef<cadence.WorkflowService_DeprecateDomain_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_DeprecateDomain_Result | $.VarRef<cadence.WorkflowService_DeprecateDomain_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_DeprecateDomain_Helper).UnwrapResponse!(result), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async DescribeDomain(ctx: context.Context | null, _DescribeRequest: shared.DescribeDomainRequest | $.VarRef<shared.DescribeDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null = null! as shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_DescribeDomain_Result> = $.varRef(new cadence.WorkflowService_DescribeDomain_Result(undefined, true))
		let args: cadence.WorkflowService_DescribeDomain_Args | $.VarRef<cadence.WorkflowService_DescribeDomain_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((describeRequest: shared.DescribeDomainRequest | $.VarRef<shared.DescribeDomainRequest> | null) => cadence.WorkflowService_DescribeDomain_Args | $.VarRef<cadence.WorkflowService_DescribeDomain_Args> | null | globalThis.Promise<cadence.WorkflowService_DescribeDomain_Args | $.VarRef<cadence.WorkflowService_DescribeDomain_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_DescribeDomain_Result | $.VarRef<cadence.WorkflowService_DescribeDomain_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_DescribeDomain_Result | $.VarRef<cadence.WorkflowService_DescribeDomain_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_DescribeDomain_Result | $.VarRef<cadence.WorkflowService_DescribeDomain_Result> | null) => [shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null, $.GoError] | globalThis.Promise<[shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_DescribeDomain_Helper).Args!(_DescribeRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_DescribeDomain_Args | $.VarRef<cadence.WorkflowService_DescribeDomain_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_DescribeDomain_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DescribeDomain_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_DescribeDomain_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DescribeDomain_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple10: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_DescribeDomain_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DescribeDomain_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple10[0])
				err = __goscriptTuple10[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple11: any = await $.pointerValue<{"Args": ((describeRequest: shared.DescribeDomainRequest | $.VarRef<shared.DescribeDomainRequest> | null) => cadence.WorkflowService_DescribeDomain_Args | $.VarRef<cadence.WorkflowService_DescribeDomain_Args> | null | globalThis.Promise<cadence.WorkflowService_DescribeDomain_Args | $.VarRef<cadence.WorkflowService_DescribeDomain_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_DescribeDomain_Result | $.VarRef<cadence.WorkflowService_DescribeDomain_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_DescribeDomain_Result | $.VarRef<cadence.WorkflowService_DescribeDomain_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_DescribeDomain_Result | $.VarRef<cadence.WorkflowService_DescribeDomain_Result> | null) => [shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null, $.GoError] | globalThis.Promise<[shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_DescribeDomain_Helper).UnwrapResponse!(result)
		success = __goscriptTuple11[0]
		err = __goscriptTuple11[1]
		return [success, err]
	}

	public async DescribeSchedule(ctx: context.Context | null, _Request: shared.DescribeScheduleRequest | $.VarRef<shared.DescribeScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null = null! as shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_DescribeSchedule_Result> = $.varRef(new cadence.WorkflowService_DescribeSchedule_Result(undefined, true))
		let args: cadence.WorkflowService_DescribeSchedule_Args | $.VarRef<cadence.WorkflowService_DescribeSchedule_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((request: shared.DescribeScheduleRequest | $.VarRef<shared.DescribeScheduleRequest> | null) => cadence.WorkflowService_DescribeSchedule_Args | $.VarRef<cadence.WorkflowService_DescribeSchedule_Args> | null | globalThis.Promise<cadence.WorkflowService_DescribeSchedule_Args | $.VarRef<cadence.WorkflowService_DescribeSchedule_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_DescribeSchedule_Result | $.VarRef<cadence.WorkflowService_DescribeSchedule_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_DescribeSchedule_Result | $.VarRef<cadence.WorkflowService_DescribeSchedule_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_DescribeSchedule_Result | $.VarRef<cadence.WorkflowService_DescribeSchedule_Result> | null) => [shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_DescribeSchedule_Helper).Args!(_Request), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_DescribeSchedule_Args | $.VarRef<cadence.WorkflowService_DescribeSchedule_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_DescribeSchedule_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DescribeSchedule_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_DescribeSchedule_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DescribeSchedule_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple12: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_DescribeSchedule_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DescribeSchedule_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple12[0])
				err = __goscriptTuple12[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple13: any = await $.pointerValue<{"Args": ((request: shared.DescribeScheduleRequest | $.VarRef<shared.DescribeScheduleRequest> | null) => cadence.WorkflowService_DescribeSchedule_Args | $.VarRef<cadence.WorkflowService_DescribeSchedule_Args> | null | globalThis.Promise<cadence.WorkflowService_DescribeSchedule_Args | $.VarRef<cadence.WorkflowService_DescribeSchedule_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_DescribeSchedule_Result | $.VarRef<cadence.WorkflowService_DescribeSchedule_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_DescribeSchedule_Result | $.VarRef<cadence.WorkflowService_DescribeSchedule_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_DescribeSchedule_Result | $.VarRef<cadence.WorkflowService_DescribeSchedule_Result> | null) => [shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_DescribeSchedule_Helper).UnwrapResponse!(result)
		success = __goscriptTuple13[0]
		err = __goscriptTuple13[1]
		return [success, err]
	}

	public async DescribeTaskList(ctx: context.Context | null, _Request: shared.DescribeTaskListRequest | $.VarRef<shared.DescribeTaskListRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null = null! as shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_DescribeTaskList_Result> = $.varRef(new cadence.WorkflowService_DescribeTaskList_Result(undefined, true))
		let args: cadence.WorkflowService_DescribeTaskList_Args | $.VarRef<cadence.WorkflowService_DescribeTaskList_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((request: shared.DescribeTaskListRequest | $.VarRef<shared.DescribeTaskListRequest> | null) => cadence.WorkflowService_DescribeTaskList_Args | $.VarRef<cadence.WorkflowService_DescribeTaskList_Args> | null | globalThis.Promise<cadence.WorkflowService_DescribeTaskList_Args | $.VarRef<cadence.WorkflowService_DescribeTaskList_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_DescribeTaskList_Result | $.VarRef<cadence.WorkflowService_DescribeTaskList_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_DescribeTaskList_Result | $.VarRef<cadence.WorkflowService_DescribeTaskList_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_DescribeTaskList_Result | $.VarRef<cadence.WorkflowService_DescribeTaskList_Result> | null) => [shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null, $.GoError] | globalThis.Promise<[shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_DescribeTaskList_Helper).Args!(_Request), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_DescribeTaskList_Args | $.VarRef<cadence.WorkflowService_DescribeTaskList_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_DescribeTaskList_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DescribeTaskList_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_DescribeTaskList_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DescribeTaskList_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple14: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_DescribeTaskList_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DescribeTaskList_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple14[0])
				err = __goscriptTuple14[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple15: any = await $.pointerValue<{"Args": ((request: shared.DescribeTaskListRequest | $.VarRef<shared.DescribeTaskListRequest> | null) => cadence.WorkflowService_DescribeTaskList_Args | $.VarRef<cadence.WorkflowService_DescribeTaskList_Args> | null | globalThis.Promise<cadence.WorkflowService_DescribeTaskList_Args | $.VarRef<cadence.WorkflowService_DescribeTaskList_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_DescribeTaskList_Result | $.VarRef<cadence.WorkflowService_DescribeTaskList_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_DescribeTaskList_Result | $.VarRef<cadence.WorkflowService_DescribeTaskList_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_DescribeTaskList_Result | $.VarRef<cadence.WorkflowService_DescribeTaskList_Result> | null) => [shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null, $.GoError] | globalThis.Promise<[shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_DescribeTaskList_Helper).UnwrapResponse!(result)
		success = __goscriptTuple15[0]
		err = __goscriptTuple15[1]
		return [success, err]
	}

	public async DescribeWorkflowExecution(ctx: context.Context | null, _DescribeRequest: shared.DescribeWorkflowExecutionRequest | $.VarRef<shared.DescribeWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null = null! as shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_DescribeWorkflowExecution_Result> = $.varRef(new cadence.WorkflowService_DescribeWorkflowExecution_Result(undefined, true))
		let args: cadence.WorkflowService_DescribeWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_DescribeWorkflowExecution_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((describeRequest: shared.DescribeWorkflowExecutionRequest | $.VarRef<shared.DescribeWorkflowExecutionRequest> | null) => cadence.WorkflowService_DescribeWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_DescribeWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_DescribeWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_DescribeWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_DescribeWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_DescribeWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_DescribeWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_DescribeWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_DescribeWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_DescribeWorkflowExecution_Result> | null) => [shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_DescribeWorkflowExecution_Helper).Args!(_DescribeRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_DescribeWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_DescribeWorkflowExecution_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_DescribeWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DescribeWorkflowExecution_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_DescribeWorkflowExecution_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DescribeWorkflowExecution_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple16: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_DescribeWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DescribeWorkflowExecution_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple16[0])
				err = __goscriptTuple16[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple17: any = await $.pointerValue<{"Args": ((describeRequest: shared.DescribeWorkflowExecutionRequest | $.VarRef<shared.DescribeWorkflowExecutionRequest> | null) => cadence.WorkflowService_DescribeWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_DescribeWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_DescribeWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_DescribeWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_DescribeWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_DescribeWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_DescribeWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_DescribeWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_DescribeWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_DescribeWorkflowExecution_Result> | null) => [shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_DescribeWorkflowExecution_Helper).UnwrapResponse!(result)
		success = __goscriptTuple17[0]
		err = __goscriptTuple17[1]
		return [success, err]
	}

	public async DiagnoseWorkflowExecution(ctx: context.Context | null, _DiagnoseRequest: shared.DiagnoseWorkflowExecutionRequest | $.VarRef<shared.DiagnoseWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null = null! as shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_DiagnoseWorkflowExecution_Result> = $.varRef(new cadence.WorkflowService_DiagnoseWorkflowExecution_Result(undefined, true))
		let args: cadence.WorkflowService_DiagnoseWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_DiagnoseWorkflowExecution_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((diagnoseRequest: shared.DiagnoseWorkflowExecutionRequest | $.VarRef<shared.DiagnoseWorkflowExecutionRequest> | null) => cadence.WorkflowService_DiagnoseWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_DiagnoseWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_DiagnoseWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_DiagnoseWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_DiagnoseWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_DiagnoseWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_DiagnoseWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_DiagnoseWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_DiagnoseWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_DiagnoseWorkflowExecution_Result> | null) => [shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_DiagnoseWorkflowExecution_Helper).Args!(_DiagnoseRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_DiagnoseWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_DiagnoseWorkflowExecution_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_DiagnoseWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DiagnoseWorkflowExecution_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_DiagnoseWorkflowExecution_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DiagnoseWorkflowExecution_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple18: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_DiagnoseWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_DiagnoseWorkflowExecution_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple18[0])
				err = __goscriptTuple18[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple19: any = await $.pointerValue<{"Args": ((diagnoseRequest: shared.DiagnoseWorkflowExecutionRequest | $.VarRef<shared.DiagnoseWorkflowExecutionRequest> | null) => cadence.WorkflowService_DiagnoseWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_DiagnoseWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_DiagnoseWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_DiagnoseWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_DiagnoseWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_DiagnoseWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_DiagnoseWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_DiagnoseWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_DiagnoseWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_DiagnoseWorkflowExecution_Result> | null) => [shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_DiagnoseWorkflowExecution_Helper).UnwrapResponse!(result)
		success = __goscriptTuple19[0]
		err = __goscriptTuple19[1]
		return [success, err]
	}

	public async FailoverDomain(ctx: context.Context | null, _FailoverRequest: shared.FailoverDomainRequest | $.VarRef<shared.FailoverDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null = null! as shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_FailoverDomain_Result> = $.varRef(new cadence.WorkflowService_FailoverDomain_Result(undefined, true))
		let args: cadence.WorkflowService_FailoverDomain_Args | $.VarRef<cadence.WorkflowService_FailoverDomain_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((failoverRequest: shared.FailoverDomainRequest | $.VarRef<shared.FailoverDomainRequest> | null) => cadence.WorkflowService_FailoverDomain_Args | $.VarRef<cadence.WorkflowService_FailoverDomain_Args> | null | globalThis.Promise<cadence.WorkflowService_FailoverDomain_Args | $.VarRef<cadence.WorkflowService_FailoverDomain_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_FailoverDomain_Result | $.VarRef<cadence.WorkflowService_FailoverDomain_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_FailoverDomain_Result | $.VarRef<cadence.WorkflowService_FailoverDomain_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_FailoverDomain_Result | $.VarRef<cadence.WorkflowService_FailoverDomain_Result> | null) => [shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null, $.GoError] | globalThis.Promise<[shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_FailoverDomain_Helper).Args!(_FailoverRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_FailoverDomain_Args | $.VarRef<cadence.WorkflowService_FailoverDomain_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_FailoverDomain_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_FailoverDomain_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_FailoverDomain_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_FailoverDomain_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple20: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_FailoverDomain_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_FailoverDomain_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple20[0])
				err = __goscriptTuple20[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple21: any = await $.pointerValue<{"Args": ((failoverRequest: shared.FailoverDomainRequest | $.VarRef<shared.FailoverDomainRequest> | null) => cadence.WorkflowService_FailoverDomain_Args | $.VarRef<cadence.WorkflowService_FailoverDomain_Args> | null | globalThis.Promise<cadence.WorkflowService_FailoverDomain_Args | $.VarRef<cadence.WorkflowService_FailoverDomain_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_FailoverDomain_Result | $.VarRef<cadence.WorkflowService_FailoverDomain_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_FailoverDomain_Result | $.VarRef<cadence.WorkflowService_FailoverDomain_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_FailoverDomain_Result | $.VarRef<cadence.WorkflowService_FailoverDomain_Result> | null) => [shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null, $.GoError] | globalThis.Promise<[shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_FailoverDomain_Helper).UnwrapResponse!(result)
		success = __goscriptTuple21[0]
		err = __goscriptTuple21[1]
		return [success, err]
	}

	public async GetClusterInfo(ctx: context.Context | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null, $.GoError]> {
		const c = this;
		let success: shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null = null! as shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_GetClusterInfo_Result> = $.varRef(new cadence.WorkflowService_GetClusterInfo_Result(undefined, true))
		let args: cadence.WorkflowService_GetClusterInfo_Args | $.VarRef<cadence.WorkflowService_GetClusterInfo_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": (() => cadence.WorkflowService_GetClusterInfo_Args | $.VarRef<cadence.WorkflowService_GetClusterInfo_Args> | null | globalThis.Promise<cadence.WorkflowService_GetClusterInfo_Args | $.VarRef<cadence.WorkflowService_GetClusterInfo_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null, _p1: $.GoError) => [cadence.WorkflowService_GetClusterInfo_Result | $.VarRef<cadence.WorkflowService_GetClusterInfo_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_GetClusterInfo_Result | $.VarRef<cadence.WorkflowService_GetClusterInfo_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_GetClusterInfo_Result | $.VarRef<cadence.WorkflowService_GetClusterInfo_Result> | null) => [shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null, $.GoError] | globalThis.Promise<[shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null, $.GoError]>) | null}>(cadence.WorkflowService_GetClusterInfo_Helper).Args!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_GetClusterInfo_Args | $.VarRef<cadence.WorkflowService_GetClusterInfo_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_GetClusterInfo_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_GetClusterInfo_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_GetClusterInfo_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_GetClusterInfo_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple22: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_GetClusterInfo_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_GetClusterInfo_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple22[0])
				err = __goscriptTuple22[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple23: any = await $.pointerValue<{"Args": (() => cadence.WorkflowService_GetClusterInfo_Args | $.VarRef<cadence.WorkflowService_GetClusterInfo_Args> | null | globalThis.Promise<cadence.WorkflowService_GetClusterInfo_Args | $.VarRef<cadence.WorkflowService_GetClusterInfo_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null, _p1: $.GoError) => [cadence.WorkflowService_GetClusterInfo_Result | $.VarRef<cadence.WorkflowService_GetClusterInfo_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_GetClusterInfo_Result | $.VarRef<cadence.WorkflowService_GetClusterInfo_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_GetClusterInfo_Result | $.VarRef<cadence.WorkflowService_GetClusterInfo_Result> | null) => [shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null, $.GoError] | globalThis.Promise<[shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null, $.GoError]>) | null}>(cadence.WorkflowService_GetClusterInfo_Helper).UnwrapResponse!(result)
		success = __goscriptTuple23[0]
		err = __goscriptTuple23[1]
		return [success, err]
	}

	public async GetSearchAttributes(ctx: context.Context | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null = null! as shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_GetSearchAttributes_Result> = $.varRef(new cadence.WorkflowService_GetSearchAttributes_Result(undefined, true))
		let args: cadence.WorkflowService_GetSearchAttributes_Args | $.VarRef<cadence.WorkflowService_GetSearchAttributes_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": (() => cadence.WorkflowService_GetSearchAttributes_Args | $.VarRef<cadence.WorkflowService_GetSearchAttributes_Args> | null | globalThis.Promise<cadence.WorkflowService_GetSearchAttributes_Args | $.VarRef<cadence.WorkflowService_GetSearchAttributes_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_GetSearchAttributes_Result | $.VarRef<cadence.WorkflowService_GetSearchAttributes_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_GetSearchAttributes_Result | $.VarRef<cadence.WorkflowService_GetSearchAttributes_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_GetSearchAttributes_Result | $.VarRef<cadence.WorkflowService_GetSearchAttributes_Result> | null) => [shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null, $.GoError] | globalThis.Promise<[shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_GetSearchAttributes_Helper).Args!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_GetSearchAttributes_Args | $.VarRef<cadence.WorkflowService_GetSearchAttributes_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_GetSearchAttributes_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_GetSearchAttributes_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_GetSearchAttributes_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_GetSearchAttributes_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple24: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_GetSearchAttributes_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_GetSearchAttributes_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple24[0])
				err = __goscriptTuple24[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple25: any = await $.pointerValue<{"Args": (() => cadence.WorkflowService_GetSearchAttributes_Args | $.VarRef<cadence.WorkflowService_GetSearchAttributes_Args> | null | globalThis.Promise<cadence.WorkflowService_GetSearchAttributes_Args | $.VarRef<cadence.WorkflowService_GetSearchAttributes_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_GetSearchAttributes_Result | $.VarRef<cadence.WorkflowService_GetSearchAttributes_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_GetSearchAttributes_Result | $.VarRef<cadence.WorkflowService_GetSearchAttributes_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_GetSearchAttributes_Result | $.VarRef<cadence.WorkflowService_GetSearchAttributes_Result> | null) => [shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null, $.GoError] | globalThis.Promise<[shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_GetSearchAttributes_Helper).UnwrapResponse!(result)
		success = __goscriptTuple25[0]
		err = __goscriptTuple25[1]
		return [success, err]
	}

	public async GetTaskListsByDomain(ctx: context.Context | null, _Request: shared.GetTaskListsByDomainRequest | $.VarRef<shared.GetTaskListsByDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null = null! as shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_GetTaskListsByDomain_Result> = $.varRef(new cadence.WorkflowService_GetTaskListsByDomain_Result(undefined, true))
		let args: cadence.WorkflowService_GetTaskListsByDomain_Args | $.VarRef<cadence.WorkflowService_GetTaskListsByDomain_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((request: shared.GetTaskListsByDomainRequest | $.VarRef<shared.GetTaskListsByDomainRequest> | null) => cadence.WorkflowService_GetTaskListsByDomain_Args | $.VarRef<cadence.WorkflowService_GetTaskListsByDomain_Args> | null | globalThis.Promise<cadence.WorkflowService_GetTaskListsByDomain_Args | $.VarRef<cadence.WorkflowService_GetTaskListsByDomain_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_GetTaskListsByDomain_Result | $.VarRef<cadence.WorkflowService_GetTaskListsByDomain_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_GetTaskListsByDomain_Result | $.VarRef<cadence.WorkflowService_GetTaskListsByDomain_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_GetTaskListsByDomain_Result | $.VarRef<cadence.WorkflowService_GetTaskListsByDomain_Result> | null) => [shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null, $.GoError] | globalThis.Promise<[shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_GetTaskListsByDomain_Helper).Args!(_Request), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_GetTaskListsByDomain_Args | $.VarRef<cadence.WorkflowService_GetTaskListsByDomain_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_GetTaskListsByDomain_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_GetTaskListsByDomain_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_GetTaskListsByDomain_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_GetTaskListsByDomain_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple26: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_GetTaskListsByDomain_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_GetTaskListsByDomain_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple26[0])
				err = __goscriptTuple26[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple27: any = await $.pointerValue<{"Args": ((request: shared.GetTaskListsByDomainRequest | $.VarRef<shared.GetTaskListsByDomainRequest> | null) => cadence.WorkflowService_GetTaskListsByDomain_Args | $.VarRef<cadence.WorkflowService_GetTaskListsByDomain_Args> | null | globalThis.Promise<cadence.WorkflowService_GetTaskListsByDomain_Args | $.VarRef<cadence.WorkflowService_GetTaskListsByDomain_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_GetTaskListsByDomain_Result | $.VarRef<cadence.WorkflowService_GetTaskListsByDomain_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_GetTaskListsByDomain_Result | $.VarRef<cadence.WorkflowService_GetTaskListsByDomain_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_GetTaskListsByDomain_Result | $.VarRef<cadence.WorkflowService_GetTaskListsByDomain_Result> | null) => [shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null, $.GoError] | globalThis.Promise<[shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_GetTaskListsByDomain_Helper).UnwrapResponse!(result)
		success = __goscriptTuple27[0]
		err = __goscriptTuple27[1]
		return [success, err]
	}

	public async GetWorkflowExecutionHistory(ctx: context.Context | null, _GetRequest: shared.GetWorkflowExecutionHistoryRequest | $.VarRef<shared.GetWorkflowExecutionHistoryRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null = null! as shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_GetWorkflowExecutionHistory_Result> = $.varRef(new cadence.WorkflowService_GetWorkflowExecutionHistory_Result(undefined, true))
		let args: cadence.WorkflowService_GetWorkflowExecutionHistory_Args | $.VarRef<cadence.WorkflowService_GetWorkflowExecutionHistory_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((getRequest: shared.GetWorkflowExecutionHistoryRequest | $.VarRef<shared.GetWorkflowExecutionHistoryRequest> | null) => cadence.WorkflowService_GetWorkflowExecutionHistory_Args | $.VarRef<cadence.WorkflowService_GetWorkflowExecutionHistory_Args> | null | globalThis.Promise<cadence.WorkflowService_GetWorkflowExecutionHistory_Args | $.VarRef<cadence.WorkflowService_GetWorkflowExecutionHistory_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_GetWorkflowExecutionHistory_Result | $.VarRef<cadence.WorkflowService_GetWorkflowExecutionHistory_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_GetWorkflowExecutionHistory_Result | $.VarRef<cadence.WorkflowService_GetWorkflowExecutionHistory_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_GetWorkflowExecutionHistory_Result | $.VarRef<cadence.WorkflowService_GetWorkflowExecutionHistory_Result> | null) => [shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null, $.GoError] | globalThis.Promise<[shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_GetWorkflowExecutionHistory_Helper).Args!(_GetRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_GetWorkflowExecutionHistory_Args | $.VarRef<cadence.WorkflowService_GetWorkflowExecutionHistory_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_GetWorkflowExecutionHistory_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_GetWorkflowExecutionHistory_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_GetWorkflowExecutionHistory_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_GetWorkflowExecutionHistory_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple28: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_GetWorkflowExecutionHistory_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_GetWorkflowExecutionHistory_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple28[0])
				err = __goscriptTuple28[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple29: any = await $.pointerValue<{"Args": ((getRequest: shared.GetWorkflowExecutionHistoryRequest | $.VarRef<shared.GetWorkflowExecutionHistoryRequest> | null) => cadence.WorkflowService_GetWorkflowExecutionHistory_Args | $.VarRef<cadence.WorkflowService_GetWorkflowExecutionHistory_Args> | null | globalThis.Promise<cadence.WorkflowService_GetWorkflowExecutionHistory_Args | $.VarRef<cadence.WorkflowService_GetWorkflowExecutionHistory_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_GetWorkflowExecutionHistory_Result | $.VarRef<cadence.WorkflowService_GetWorkflowExecutionHistory_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_GetWorkflowExecutionHistory_Result | $.VarRef<cadence.WorkflowService_GetWorkflowExecutionHistory_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_GetWorkflowExecutionHistory_Result | $.VarRef<cadence.WorkflowService_GetWorkflowExecutionHistory_Result> | null) => [shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null, $.GoError] | globalThis.Promise<[shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_GetWorkflowExecutionHistory_Helper).UnwrapResponse!(result)
		success = __goscriptTuple29[0]
		err = __goscriptTuple29[1]
		return [success, err]
	}

	public async ListArchivedWorkflowExecutions(ctx: context.Context | null, _ListRequest: shared.ListArchivedWorkflowExecutionsRequest | $.VarRef<shared.ListArchivedWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null = null! as shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_ListArchivedWorkflowExecutions_Result> = $.varRef(new cadence.WorkflowService_ListArchivedWorkflowExecutions_Result(undefined, true))
		let args: cadence.WorkflowService_ListArchivedWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListArchivedWorkflowExecutions_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((listRequest: shared.ListArchivedWorkflowExecutionsRequest | $.VarRef<shared.ListArchivedWorkflowExecutionsRequest> | null) => cadence.WorkflowService_ListArchivedWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListArchivedWorkflowExecutions_Args> | null | globalThis.Promise<cadence.WorkflowService_ListArchivedWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListArchivedWorkflowExecutions_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ListArchivedWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListArchivedWorkflowExecutions_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ListArchivedWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListArchivedWorkflowExecutions_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ListArchivedWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListArchivedWorkflowExecutions_Result> | null) => [shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ListArchivedWorkflowExecutions_Helper).Args!(_ListRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_ListArchivedWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListArchivedWorkflowExecutions_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_ListArchivedWorkflowExecutions_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListArchivedWorkflowExecutions_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_ListArchivedWorkflowExecutions_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListArchivedWorkflowExecutions_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple30: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_ListArchivedWorkflowExecutions_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListArchivedWorkflowExecutions_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple30[0])
				err = __goscriptTuple30[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple31: any = await $.pointerValue<{"Args": ((listRequest: shared.ListArchivedWorkflowExecutionsRequest | $.VarRef<shared.ListArchivedWorkflowExecutionsRequest> | null) => cadence.WorkflowService_ListArchivedWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListArchivedWorkflowExecutions_Args> | null | globalThis.Promise<cadence.WorkflowService_ListArchivedWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListArchivedWorkflowExecutions_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ListArchivedWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListArchivedWorkflowExecutions_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ListArchivedWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListArchivedWorkflowExecutions_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ListArchivedWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListArchivedWorkflowExecutions_Result> | null) => [shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ListArchivedWorkflowExecutions_Helper).UnwrapResponse!(result)
		success = __goscriptTuple31[0]
		err = __goscriptTuple31[1]
		return [success, err]
	}

	public async ListClosedWorkflowExecutions(ctx: context.Context | null, _ListRequest: shared.ListClosedWorkflowExecutionsRequest | $.VarRef<shared.ListClosedWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null = null! as shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_ListClosedWorkflowExecutions_Result> = $.varRef(new cadence.WorkflowService_ListClosedWorkflowExecutions_Result(undefined, true))
		let args: cadence.WorkflowService_ListClosedWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListClosedWorkflowExecutions_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((listRequest: shared.ListClosedWorkflowExecutionsRequest | $.VarRef<shared.ListClosedWorkflowExecutionsRequest> | null) => cadence.WorkflowService_ListClosedWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListClosedWorkflowExecutions_Args> | null | globalThis.Promise<cadence.WorkflowService_ListClosedWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListClosedWorkflowExecutions_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ListClosedWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListClosedWorkflowExecutions_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ListClosedWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListClosedWorkflowExecutions_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ListClosedWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListClosedWorkflowExecutions_Result> | null) => [shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ListClosedWorkflowExecutions_Helper).Args!(_ListRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_ListClosedWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListClosedWorkflowExecutions_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_ListClosedWorkflowExecutions_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListClosedWorkflowExecutions_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_ListClosedWorkflowExecutions_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListClosedWorkflowExecutions_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple32: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_ListClosedWorkflowExecutions_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListClosedWorkflowExecutions_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple32[0])
				err = __goscriptTuple32[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple33: any = await $.pointerValue<{"Args": ((listRequest: shared.ListClosedWorkflowExecutionsRequest | $.VarRef<shared.ListClosedWorkflowExecutionsRequest> | null) => cadence.WorkflowService_ListClosedWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListClosedWorkflowExecutions_Args> | null | globalThis.Promise<cadence.WorkflowService_ListClosedWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListClosedWorkflowExecutions_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ListClosedWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListClosedWorkflowExecutions_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ListClosedWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListClosedWorkflowExecutions_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ListClosedWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListClosedWorkflowExecutions_Result> | null) => [shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ListClosedWorkflowExecutions_Helper).UnwrapResponse!(result)
		success = __goscriptTuple33[0]
		err = __goscriptTuple33[1]
		return [success, err]
	}

	public async ListDomains(ctx: context.Context | null, _ListRequest: shared.ListDomainsRequest | $.VarRef<shared.ListDomainsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null = null! as shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_ListDomains_Result> = $.varRef(new cadence.WorkflowService_ListDomains_Result(undefined, true))
		let args: cadence.WorkflowService_ListDomains_Args | $.VarRef<cadence.WorkflowService_ListDomains_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((listRequest: shared.ListDomainsRequest | $.VarRef<shared.ListDomainsRequest> | null) => cadence.WorkflowService_ListDomains_Args | $.VarRef<cadence.WorkflowService_ListDomains_Args> | null | globalThis.Promise<cadence.WorkflowService_ListDomains_Args | $.VarRef<cadence.WorkflowService_ListDomains_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ListDomains_Result | $.VarRef<cadence.WorkflowService_ListDomains_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ListDomains_Result | $.VarRef<cadence.WorkflowService_ListDomains_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ListDomains_Result | $.VarRef<cadence.WorkflowService_ListDomains_Result> | null) => [shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ListDomains_Helper).Args!(_ListRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_ListDomains_Args | $.VarRef<cadence.WorkflowService_ListDomains_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_ListDomains_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListDomains_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_ListDomains_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListDomains_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple34: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_ListDomains_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListDomains_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple34[0])
				err = __goscriptTuple34[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple35: any = await $.pointerValue<{"Args": ((listRequest: shared.ListDomainsRequest | $.VarRef<shared.ListDomainsRequest> | null) => cadence.WorkflowService_ListDomains_Args | $.VarRef<cadence.WorkflowService_ListDomains_Args> | null | globalThis.Promise<cadence.WorkflowService_ListDomains_Args | $.VarRef<cadence.WorkflowService_ListDomains_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ListDomains_Result | $.VarRef<cadence.WorkflowService_ListDomains_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ListDomains_Result | $.VarRef<cadence.WorkflowService_ListDomains_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ListDomains_Result | $.VarRef<cadence.WorkflowService_ListDomains_Result> | null) => [shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ListDomains_Helper).UnwrapResponse!(result)
		success = __goscriptTuple35[0]
		err = __goscriptTuple35[1]
		return [success, err]
	}

	public async ListFailoverHistory(ctx: context.Context | null, _ListRequest: shared.ListFailoverHistoryRequest | $.VarRef<shared.ListFailoverHistoryRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null = null! as shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_ListFailoverHistory_Result> = $.varRef(new cadence.WorkflowService_ListFailoverHistory_Result(undefined, true))
		let args: cadence.WorkflowService_ListFailoverHistory_Args | $.VarRef<cadence.WorkflowService_ListFailoverHistory_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((listRequest: shared.ListFailoverHistoryRequest | $.VarRef<shared.ListFailoverHistoryRequest> | null) => cadence.WorkflowService_ListFailoverHistory_Args | $.VarRef<cadence.WorkflowService_ListFailoverHistory_Args> | null | globalThis.Promise<cadence.WorkflowService_ListFailoverHistory_Args | $.VarRef<cadence.WorkflowService_ListFailoverHistory_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ListFailoverHistory_Result | $.VarRef<cadence.WorkflowService_ListFailoverHistory_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ListFailoverHistory_Result | $.VarRef<cadence.WorkflowService_ListFailoverHistory_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ListFailoverHistory_Result | $.VarRef<cadence.WorkflowService_ListFailoverHistory_Result> | null) => [shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null, $.GoError] | globalThis.Promise<[shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ListFailoverHistory_Helper).Args!(_ListRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_ListFailoverHistory_Args | $.VarRef<cadence.WorkflowService_ListFailoverHistory_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_ListFailoverHistory_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListFailoverHistory_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_ListFailoverHistory_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListFailoverHistory_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple36: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_ListFailoverHistory_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListFailoverHistory_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple36[0])
				err = __goscriptTuple36[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple37: any = await $.pointerValue<{"Args": ((listRequest: shared.ListFailoverHistoryRequest | $.VarRef<shared.ListFailoverHistoryRequest> | null) => cadence.WorkflowService_ListFailoverHistory_Args | $.VarRef<cadence.WorkflowService_ListFailoverHistory_Args> | null | globalThis.Promise<cadence.WorkflowService_ListFailoverHistory_Args | $.VarRef<cadence.WorkflowService_ListFailoverHistory_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ListFailoverHistory_Result | $.VarRef<cadence.WorkflowService_ListFailoverHistory_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ListFailoverHistory_Result | $.VarRef<cadence.WorkflowService_ListFailoverHistory_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ListFailoverHistory_Result | $.VarRef<cadence.WorkflowService_ListFailoverHistory_Result> | null) => [shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null, $.GoError] | globalThis.Promise<[shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ListFailoverHistory_Helper).UnwrapResponse!(result)
		success = __goscriptTuple37[0]
		err = __goscriptTuple37[1]
		return [success, err]
	}

	public async ListOpenWorkflowExecutions(ctx: context.Context | null, _ListRequest: shared.ListOpenWorkflowExecutionsRequest | $.VarRef<shared.ListOpenWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null = null! as shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_ListOpenWorkflowExecutions_Result> = $.varRef(new cadence.WorkflowService_ListOpenWorkflowExecutions_Result(undefined, true))
		let args: cadence.WorkflowService_ListOpenWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListOpenWorkflowExecutions_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((listRequest: shared.ListOpenWorkflowExecutionsRequest | $.VarRef<shared.ListOpenWorkflowExecutionsRequest> | null) => cadence.WorkflowService_ListOpenWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListOpenWorkflowExecutions_Args> | null | globalThis.Promise<cadence.WorkflowService_ListOpenWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListOpenWorkflowExecutions_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ListOpenWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListOpenWorkflowExecutions_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ListOpenWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListOpenWorkflowExecutions_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ListOpenWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListOpenWorkflowExecutions_Result> | null) => [shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ListOpenWorkflowExecutions_Helper).Args!(_ListRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_ListOpenWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListOpenWorkflowExecutions_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_ListOpenWorkflowExecutions_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListOpenWorkflowExecutions_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_ListOpenWorkflowExecutions_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListOpenWorkflowExecutions_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple38: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_ListOpenWorkflowExecutions_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListOpenWorkflowExecutions_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple38[0])
				err = __goscriptTuple38[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple39: any = await $.pointerValue<{"Args": ((listRequest: shared.ListOpenWorkflowExecutionsRequest | $.VarRef<shared.ListOpenWorkflowExecutionsRequest> | null) => cadence.WorkflowService_ListOpenWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListOpenWorkflowExecutions_Args> | null | globalThis.Promise<cadence.WorkflowService_ListOpenWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListOpenWorkflowExecutions_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ListOpenWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListOpenWorkflowExecutions_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ListOpenWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListOpenWorkflowExecutions_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ListOpenWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListOpenWorkflowExecutions_Result> | null) => [shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ListOpenWorkflowExecutions_Helper).UnwrapResponse!(result)
		success = __goscriptTuple39[0]
		err = __goscriptTuple39[1]
		return [success, err]
	}

	public async ListSchedules(ctx: context.Context | null, _Request: shared.ListSchedulesRequest | $.VarRef<shared.ListSchedulesRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null = null! as shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_ListSchedules_Result> = $.varRef(new cadence.WorkflowService_ListSchedules_Result(undefined, true))
		let args: cadence.WorkflowService_ListSchedules_Args | $.VarRef<cadence.WorkflowService_ListSchedules_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((request: shared.ListSchedulesRequest | $.VarRef<shared.ListSchedulesRequest> | null) => cadence.WorkflowService_ListSchedules_Args | $.VarRef<cadence.WorkflowService_ListSchedules_Args> | null | globalThis.Promise<cadence.WorkflowService_ListSchedules_Args | $.VarRef<cadence.WorkflowService_ListSchedules_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ListSchedules_Result | $.VarRef<cadence.WorkflowService_ListSchedules_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ListSchedules_Result | $.VarRef<cadence.WorkflowService_ListSchedules_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ListSchedules_Result | $.VarRef<cadence.WorkflowService_ListSchedules_Result> | null) => [shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null, $.GoError] | globalThis.Promise<[shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ListSchedules_Helper).Args!(_Request), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_ListSchedules_Args | $.VarRef<cadence.WorkflowService_ListSchedules_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_ListSchedules_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListSchedules_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_ListSchedules_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListSchedules_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple40: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_ListSchedules_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListSchedules_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple40[0])
				err = __goscriptTuple40[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple41: any = await $.pointerValue<{"Args": ((request: shared.ListSchedulesRequest | $.VarRef<shared.ListSchedulesRequest> | null) => cadence.WorkflowService_ListSchedules_Args | $.VarRef<cadence.WorkflowService_ListSchedules_Args> | null | globalThis.Promise<cadence.WorkflowService_ListSchedules_Args | $.VarRef<cadence.WorkflowService_ListSchedules_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ListSchedules_Result | $.VarRef<cadence.WorkflowService_ListSchedules_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ListSchedules_Result | $.VarRef<cadence.WorkflowService_ListSchedules_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ListSchedules_Result | $.VarRef<cadence.WorkflowService_ListSchedules_Result> | null) => [shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null, $.GoError] | globalThis.Promise<[shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ListSchedules_Helper).UnwrapResponse!(result)
		success = __goscriptTuple41[0]
		err = __goscriptTuple41[1]
		return [success, err]
	}

	public async ListTaskListPartitions(ctx: context.Context | null, _Request: shared.ListTaskListPartitionsRequest | $.VarRef<shared.ListTaskListPartitionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null = null! as shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_ListTaskListPartitions_Result> = $.varRef(new cadence.WorkflowService_ListTaskListPartitions_Result(undefined, true))
		let args: cadence.WorkflowService_ListTaskListPartitions_Args | $.VarRef<cadence.WorkflowService_ListTaskListPartitions_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((request: shared.ListTaskListPartitionsRequest | $.VarRef<shared.ListTaskListPartitionsRequest> | null) => cadence.WorkflowService_ListTaskListPartitions_Args | $.VarRef<cadence.WorkflowService_ListTaskListPartitions_Args> | null | globalThis.Promise<cadence.WorkflowService_ListTaskListPartitions_Args | $.VarRef<cadence.WorkflowService_ListTaskListPartitions_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ListTaskListPartitions_Result | $.VarRef<cadence.WorkflowService_ListTaskListPartitions_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ListTaskListPartitions_Result | $.VarRef<cadence.WorkflowService_ListTaskListPartitions_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ListTaskListPartitions_Result | $.VarRef<cadence.WorkflowService_ListTaskListPartitions_Result> | null) => [shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ListTaskListPartitions_Helper).Args!(_Request), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_ListTaskListPartitions_Args | $.VarRef<cadence.WorkflowService_ListTaskListPartitions_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_ListTaskListPartitions_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListTaskListPartitions_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_ListTaskListPartitions_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListTaskListPartitions_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple42: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_ListTaskListPartitions_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListTaskListPartitions_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple42[0])
				err = __goscriptTuple42[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple43: any = await $.pointerValue<{"Args": ((request: shared.ListTaskListPartitionsRequest | $.VarRef<shared.ListTaskListPartitionsRequest> | null) => cadence.WorkflowService_ListTaskListPartitions_Args | $.VarRef<cadence.WorkflowService_ListTaskListPartitions_Args> | null | globalThis.Promise<cadence.WorkflowService_ListTaskListPartitions_Args | $.VarRef<cadence.WorkflowService_ListTaskListPartitions_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ListTaskListPartitions_Result | $.VarRef<cadence.WorkflowService_ListTaskListPartitions_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ListTaskListPartitions_Result | $.VarRef<cadence.WorkflowService_ListTaskListPartitions_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ListTaskListPartitions_Result | $.VarRef<cadence.WorkflowService_ListTaskListPartitions_Result> | null) => [shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ListTaskListPartitions_Helper).UnwrapResponse!(result)
		success = __goscriptTuple43[0]
		err = __goscriptTuple43[1]
		return [success, err]
	}

	public async ListWorkflowExecutions(ctx: context.Context | null, _ListRequest: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null = null! as shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_ListWorkflowExecutions_Result> = $.varRef(new cadence.WorkflowService_ListWorkflowExecutions_Result(undefined, true))
		let args: cadence.WorkflowService_ListWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListWorkflowExecutions_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((listRequest: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null) => cadence.WorkflowService_ListWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListWorkflowExecutions_Args> | null | globalThis.Promise<cadence.WorkflowService_ListWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListWorkflowExecutions_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ListWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListWorkflowExecutions_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ListWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListWorkflowExecutions_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ListWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListWorkflowExecutions_Result> | null) => [shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ListWorkflowExecutions_Helper).Args!(_ListRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_ListWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListWorkflowExecutions_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_ListWorkflowExecutions_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListWorkflowExecutions_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_ListWorkflowExecutions_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListWorkflowExecutions_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple44: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_ListWorkflowExecutions_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ListWorkflowExecutions_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple44[0])
				err = __goscriptTuple44[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple45: any = await $.pointerValue<{"Args": ((listRequest: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null) => cadence.WorkflowService_ListWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListWorkflowExecutions_Args> | null | globalThis.Promise<cadence.WorkflowService_ListWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ListWorkflowExecutions_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ListWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListWorkflowExecutions_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ListWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListWorkflowExecutions_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ListWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ListWorkflowExecutions_Result> | null) => [shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ListWorkflowExecutions_Helper).UnwrapResponse!(result)
		success = __goscriptTuple45[0]
		err = __goscriptTuple45[1]
		return [success, err]
	}

	public async PauseSchedule(ctx: context.Context | null, _Request: shared.PauseScheduleRequest | $.VarRef<shared.PauseScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null = null! as shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_PauseSchedule_Result> = $.varRef(new cadence.WorkflowService_PauseSchedule_Result(undefined, true))
		let args: cadence.WorkflowService_PauseSchedule_Args | $.VarRef<cadence.WorkflowService_PauseSchedule_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((request: shared.PauseScheduleRequest | $.VarRef<shared.PauseScheduleRequest> | null) => cadence.WorkflowService_PauseSchedule_Args | $.VarRef<cadence.WorkflowService_PauseSchedule_Args> | null | globalThis.Promise<cadence.WorkflowService_PauseSchedule_Args | $.VarRef<cadence.WorkflowService_PauseSchedule_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_PauseSchedule_Result | $.VarRef<cadence.WorkflowService_PauseSchedule_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_PauseSchedule_Result | $.VarRef<cadence.WorkflowService_PauseSchedule_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_PauseSchedule_Result | $.VarRef<cadence.WorkflowService_PauseSchedule_Result> | null) => [shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_PauseSchedule_Helper).Args!(_Request), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_PauseSchedule_Args | $.VarRef<cadence.WorkflowService_PauseSchedule_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_PauseSchedule_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_PauseSchedule_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_PauseSchedule_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_PauseSchedule_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple46: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_PauseSchedule_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_PauseSchedule_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple46[0])
				err = __goscriptTuple46[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple47: any = await $.pointerValue<{"Args": ((request: shared.PauseScheduleRequest | $.VarRef<shared.PauseScheduleRequest> | null) => cadence.WorkflowService_PauseSchedule_Args | $.VarRef<cadence.WorkflowService_PauseSchedule_Args> | null | globalThis.Promise<cadence.WorkflowService_PauseSchedule_Args | $.VarRef<cadence.WorkflowService_PauseSchedule_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_PauseSchedule_Result | $.VarRef<cadence.WorkflowService_PauseSchedule_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_PauseSchedule_Result | $.VarRef<cadence.WorkflowService_PauseSchedule_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_PauseSchedule_Result | $.VarRef<cadence.WorkflowService_PauseSchedule_Result> | null) => [shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_PauseSchedule_Helper).UnwrapResponse!(result)
		success = __goscriptTuple47[0]
		err = __goscriptTuple47[1]
		return [success, err]
	}

	public async PollForActivityTask(ctx: context.Context | null, _PollRequest: shared.PollForActivityTaskRequest | $.VarRef<shared.PollForActivityTaskRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null = null! as shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_PollForActivityTask_Result> = $.varRef(new cadence.WorkflowService_PollForActivityTask_Result(undefined, true))
		let args: cadence.WorkflowService_PollForActivityTask_Args | $.VarRef<cadence.WorkflowService_PollForActivityTask_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((pollRequest: shared.PollForActivityTaskRequest | $.VarRef<shared.PollForActivityTaskRequest> | null) => cadence.WorkflowService_PollForActivityTask_Args | $.VarRef<cadence.WorkflowService_PollForActivityTask_Args> | null | globalThis.Promise<cadence.WorkflowService_PollForActivityTask_Args | $.VarRef<cadence.WorkflowService_PollForActivityTask_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_PollForActivityTask_Result | $.VarRef<cadence.WorkflowService_PollForActivityTask_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_PollForActivityTask_Result | $.VarRef<cadence.WorkflowService_PollForActivityTask_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_PollForActivityTask_Result | $.VarRef<cadence.WorkflowService_PollForActivityTask_Result> | null) => [shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null, $.GoError] | globalThis.Promise<[shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_PollForActivityTask_Helper).Args!(_PollRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_PollForActivityTask_Args | $.VarRef<cadence.WorkflowService_PollForActivityTask_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_PollForActivityTask_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_PollForActivityTask_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_PollForActivityTask_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_PollForActivityTask_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple48: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_PollForActivityTask_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_PollForActivityTask_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple48[0])
				err = __goscriptTuple48[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple49: any = await $.pointerValue<{"Args": ((pollRequest: shared.PollForActivityTaskRequest | $.VarRef<shared.PollForActivityTaskRequest> | null) => cadence.WorkflowService_PollForActivityTask_Args | $.VarRef<cadence.WorkflowService_PollForActivityTask_Args> | null | globalThis.Promise<cadence.WorkflowService_PollForActivityTask_Args | $.VarRef<cadence.WorkflowService_PollForActivityTask_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_PollForActivityTask_Result | $.VarRef<cadence.WorkflowService_PollForActivityTask_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_PollForActivityTask_Result | $.VarRef<cadence.WorkflowService_PollForActivityTask_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_PollForActivityTask_Result | $.VarRef<cadence.WorkflowService_PollForActivityTask_Result> | null) => [shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null, $.GoError] | globalThis.Promise<[shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_PollForActivityTask_Helper).UnwrapResponse!(result)
		success = __goscriptTuple49[0]
		err = __goscriptTuple49[1]
		return [success, err]
	}

	public async PollForDecisionTask(ctx: context.Context | null, _PollRequest: shared.PollForDecisionTaskRequest | $.VarRef<shared.PollForDecisionTaskRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null = null! as shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_PollForDecisionTask_Result> = $.varRef(new cadence.WorkflowService_PollForDecisionTask_Result(undefined, true))
		let args: cadence.WorkflowService_PollForDecisionTask_Args | $.VarRef<cadence.WorkflowService_PollForDecisionTask_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((pollRequest: shared.PollForDecisionTaskRequest | $.VarRef<shared.PollForDecisionTaskRequest> | null) => cadence.WorkflowService_PollForDecisionTask_Args | $.VarRef<cadence.WorkflowService_PollForDecisionTask_Args> | null | globalThis.Promise<cadence.WorkflowService_PollForDecisionTask_Args | $.VarRef<cadence.WorkflowService_PollForDecisionTask_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_PollForDecisionTask_Result | $.VarRef<cadence.WorkflowService_PollForDecisionTask_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_PollForDecisionTask_Result | $.VarRef<cadence.WorkflowService_PollForDecisionTask_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_PollForDecisionTask_Result | $.VarRef<cadence.WorkflowService_PollForDecisionTask_Result> | null) => [shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null, $.GoError] | globalThis.Promise<[shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_PollForDecisionTask_Helper).Args!(_PollRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_PollForDecisionTask_Args | $.VarRef<cadence.WorkflowService_PollForDecisionTask_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_PollForDecisionTask_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_PollForDecisionTask_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_PollForDecisionTask_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_PollForDecisionTask_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple50: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_PollForDecisionTask_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_PollForDecisionTask_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple50[0])
				err = __goscriptTuple50[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple51: any = await $.pointerValue<{"Args": ((pollRequest: shared.PollForDecisionTaskRequest | $.VarRef<shared.PollForDecisionTaskRequest> | null) => cadence.WorkflowService_PollForDecisionTask_Args | $.VarRef<cadence.WorkflowService_PollForDecisionTask_Args> | null | globalThis.Promise<cadence.WorkflowService_PollForDecisionTask_Args | $.VarRef<cadence.WorkflowService_PollForDecisionTask_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_PollForDecisionTask_Result | $.VarRef<cadence.WorkflowService_PollForDecisionTask_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_PollForDecisionTask_Result | $.VarRef<cadence.WorkflowService_PollForDecisionTask_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_PollForDecisionTask_Result | $.VarRef<cadence.WorkflowService_PollForDecisionTask_Result> | null) => [shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null, $.GoError] | globalThis.Promise<[shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_PollForDecisionTask_Helper).UnwrapResponse!(result)
		success = __goscriptTuple51[0]
		err = __goscriptTuple51[1]
		return [success, err]
	}

	public async QueryWorkflow(ctx: context.Context | null, _QueryRequest: shared.QueryWorkflowRequest | $.VarRef<shared.QueryWorkflowRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null = null! as shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_QueryWorkflow_Result> = $.varRef(new cadence.WorkflowService_QueryWorkflow_Result(undefined, true))
		let args: cadence.WorkflowService_QueryWorkflow_Args | $.VarRef<cadence.WorkflowService_QueryWorkflow_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((queryRequest: shared.QueryWorkflowRequest | $.VarRef<shared.QueryWorkflowRequest> | null) => cadence.WorkflowService_QueryWorkflow_Args | $.VarRef<cadence.WorkflowService_QueryWorkflow_Args> | null | globalThis.Promise<cadence.WorkflowService_QueryWorkflow_Args | $.VarRef<cadence.WorkflowService_QueryWorkflow_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_QueryWorkflow_Result | $.VarRef<cadence.WorkflowService_QueryWorkflow_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_QueryWorkflow_Result | $.VarRef<cadence.WorkflowService_QueryWorkflow_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_QueryWorkflow_Result | $.VarRef<cadence.WorkflowService_QueryWorkflow_Result> | null) => [shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null, $.GoError] | globalThis.Promise<[shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_QueryWorkflow_Helper).Args!(_QueryRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_QueryWorkflow_Args | $.VarRef<cadence.WorkflowService_QueryWorkflow_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_QueryWorkflow_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_QueryWorkflow_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_QueryWorkflow_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_QueryWorkflow_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple52: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_QueryWorkflow_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_QueryWorkflow_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple52[0])
				err = __goscriptTuple52[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple53: any = await $.pointerValue<{"Args": ((queryRequest: shared.QueryWorkflowRequest | $.VarRef<shared.QueryWorkflowRequest> | null) => cadence.WorkflowService_QueryWorkflow_Args | $.VarRef<cadence.WorkflowService_QueryWorkflow_Args> | null | globalThis.Promise<cadence.WorkflowService_QueryWorkflow_Args | $.VarRef<cadence.WorkflowService_QueryWorkflow_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_QueryWorkflow_Result | $.VarRef<cadence.WorkflowService_QueryWorkflow_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_QueryWorkflow_Result | $.VarRef<cadence.WorkflowService_QueryWorkflow_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_QueryWorkflow_Result | $.VarRef<cadence.WorkflowService_QueryWorkflow_Result> | null) => [shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null, $.GoError] | globalThis.Promise<[shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_QueryWorkflow_Helper).UnwrapResponse!(result)
		success = __goscriptTuple53[0]
		err = __goscriptTuple53[1]
		return [success, err]
	}

	public async RecordActivityTaskHeartbeat(ctx: context.Context | null, _HeartbeatRequest: shared.RecordActivityTaskHeartbeatRequest | $.VarRef<shared.RecordActivityTaskHeartbeatRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null = null! as shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeat_Result> = $.varRef(new cadence.WorkflowService_RecordActivityTaskHeartbeat_Result(undefined, true))
		let args: cadence.WorkflowService_RecordActivityTaskHeartbeat_Args | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeat_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((heartbeatRequest: shared.RecordActivityTaskHeartbeatRequest | $.VarRef<shared.RecordActivityTaskHeartbeatRequest> | null) => cadence.WorkflowService_RecordActivityTaskHeartbeat_Args | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeat_Args> | null | globalThis.Promise<cadence.WorkflowService_RecordActivityTaskHeartbeat_Args | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeat_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_RecordActivityTaskHeartbeat_Result | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeat_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RecordActivityTaskHeartbeat_Result | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeat_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RecordActivityTaskHeartbeat_Result | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeat_Result> | null) => [shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError] | globalThis.Promise<[shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_RecordActivityTaskHeartbeat_Helper).Args!(_HeartbeatRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_RecordActivityTaskHeartbeat_Args | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeat_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_RecordActivityTaskHeartbeat_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RecordActivityTaskHeartbeat_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_RecordActivityTaskHeartbeat_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RecordActivityTaskHeartbeat_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple54: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_RecordActivityTaskHeartbeat_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RecordActivityTaskHeartbeat_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple54[0])
				err = __goscriptTuple54[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple55: any = await $.pointerValue<{"Args": ((heartbeatRequest: shared.RecordActivityTaskHeartbeatRequest | $.VarRef<shared.RecordActivityTaskHeartbeatRequest> | null) => cadence.WorkflowService_RecordActivityTaskHeartbeat_Args | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeat_Args> | null | globalThis.Promise<cadence.WorkflowService_RecordActivityTaskHeartbeat_Args | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeat_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_RecordActivityTaskHeartbeat_Result | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeat_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RecordActivityTaskHeartbeat_Result | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeat_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RecordActivityTaskHeartbeat_Result | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeat_Result> | null) => [shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError] | globalThis.Promise<[shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_RecordActivityTaskHeartbeat_Helper).UnwrapResponse!(result)
		success = __goscriptTuple55[0]
		err = __goscriptTuple55[1]
		return [success, err]
	}

	public async RecordActivityTaskHeartbeatByID(ctx: context.Context | null, _HeartbeatRequest: shared.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<shared.RecordActivityTaskHeartbeatByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null = null! as shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Result> = $.varRef(new cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Result(undefined, true))
		let args: cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Args | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((heartbeatRequest: shared.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<shared.RecordActivityTaskHeartbeatByIDRequest> | null) => cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Args | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Args> | null | globalThis.Promise<cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Args | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Result | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Result | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Result | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Result> | null) => [shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError] | globalThis.Promise<[shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Helper).Args!(_HeartbeatRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Args | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple56: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple56[0])
				err = __goscriptTuple56[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple57: any = await $.pointerValue<{"Args": ((heartbeatRequest: shared.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<shared.RecordActivityTaskHeartbeatByIDRequest> | null) => cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Args | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Args> | null | globalThis.Promise<cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Args | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Result | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Result | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Result | $.VarRef<cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Result> | null) => [shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError] | globalThis.Promise<[shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_RecordActivityTaskHeartbeatByID_Helper).UnwrapResponse!(result)
		success = __goscriptTuple57[0]
		err = __goscriptTuple57[1]
		return [success, err]
	}

	public async RefreshWorkflowTasks(ctx: context.Context | null, _Request: shared.RefreshWorkflowTasksRequest | $.VarRef<shared.RefreshWorkflowTasksRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const c = this;
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_RefreshWorkflowTasks_Result> = $.varRef(new cadence.WorkflowService_RefreshWorkflowTasks_Result(undefined, true))
		let args: cadence.WorkflowService_RefreshWorkflowTasks_Args | $.VarRef<cadence.WorkflowService_RefreshWorkflowTasks_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((request: shared.RefreshWorkflowTasksRequest | $.VarRef<shared.RefreshWorkflowTasksRequest> | null) => cadence.WorkflowService_RefreshWorkflowTasks_Args | $.VarRef<cadence.WorkflowService_RefreshWorkflowTasks_Args> | null | globalThis.Promise<cadence.WorkflowService_RefreshWorkflowTasks_Args | $.VarRef<cadence.WorkflowService_RefreshWorkflowTasks_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RefreshWorkflowTasks_Result | $.VarRef<cadence.WorkflowService_RefreshWorkflowTasks_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RefreshWorkflowTasks_Result | $.VarRef<cadence.WorkflowService_RefreshWorkflowTasks_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RefreshWorkflowTasks_Result | $.VarRef<cadence.WorkflowService_RefreshWorkflowTasks_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RefreshWorkflowTasks_Helper).Args!(_Request), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_RefreshWorkflowTasks_Args | $.VarRef<cadence.WorkflowService_RefreshWorkflowTasks_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_RefreshWorkflowTasks_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RefreshWorkflowTasks_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_RefreshWorkflowTasks_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RefreshWorkflowTasks_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple58: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_RefreshWorkflowTasks_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RefreshWorkflowTasks_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple58[0])
				err = __goscriptTuple58[1]
				if (err != null) {
					return err
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return err
				}
			}
		}

		err = (__goscriptAwait = $.pointerValue<{"Args": ((request: shared.RefreshWorkflowTasksRequest | $.VarRef<shared.RefreshWorkflowTasksRequest> | null) => cadence.WorkflowService_RefreshWorkflowTasks_Args | $.VarRef<cadence.WorkflowService_RefreshWorkflowTasks_Args> | null | globalThis.Promise<cadence.WorkflowService_RefreshWorkflowTasks_Args | $.VarRef<cadence.WorkflowService_RefreshWorkflowTasks_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RefreshWorkflowTasks_Result | $.VarRef<cadence.WorkflowService_RefreshWorkflowTasks_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RefreshWorkflowTasks_Result | $.VarRef<cadence.WorkflowService_RefreshWorkflowTasks_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RefreshWorkflowTasks_Result | $.VarRef<cadence.WorkflowService_RefreshWorkflowTasks_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RefreshWorkflowTasks_Helper).UnwrapResponse!(result), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RegisterDomain(ctx: context.Context | null, _RegisterRequest: shared.RegisterDomainRequest | $.VarRef<shared.RegisterDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const c = this;
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_RegisterDomain_Result> = $.varRef(new cadence.WorkflowService_RegisterDomain_Result(undefined, true))
		let args: cadence.WorkflowService_RegisterDomain_Args | $.VarRef<cadence.WorkflowService_RegisterDomain_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((registerRequest: shared.RegisterDomainRequest | $.VarRef<shared.RegisterDomainRequest> | null) => cadence.WorkflowService_RegisterDomain_Args | $.VarRef<cadence.WorkflowService_RegisterDomain_Args> | null | globalThis.Promise<cadence.WorkflowService_RegisterDomain_Args | $.VarRef<cadence.WorkflowService_RegisterDomain_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RegisterDomain_Result | $.VarRef<cadence.WorkflowService_RegisterDomain_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RegisterDomain_Result | $.VarRef<cadence.WorkflowService_RegisterDomain_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RegisterDomain_Result | $.VarRef<cadence.WorkflowService_RegisterDomain_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RegisterDomain_Helper).Args!(_RegisterRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_RegisterDomain_Args | $.VarRef<cadence.WorkflowService_RegisterDomain_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_RegisterDomain_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RegisterDomain_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_RegisterDomain_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RegisterDomain_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple59: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_RegisterDomain_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RegisterDomain_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple59[0])
				err = __goscriptTuple59[1]
				if (err != null) {
					return err
				}
			}

			{
				err = result.value.FromWire((body).clone())
				if (err != null) {
					return err
				}
			}
		}

		err = (__goscriptAwait = $.pointerValue<{"Args": ((registerRequest: shared.RegisterDomainRequest | $.VarRef<shared.RegisterDomainRequest> | null) => cadence.WorkflowService_RegisterDomain_Args | $.VarRef<cadence.WorkflowService_RegisterDomain_Args> | null | globalThis.Promise<cadence.WorkflowService_RegisterDomain_Args | $.VarRef<cadence.WorkflowService_RegisterDomain_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RegisterDomain_Result | $.VarRef<cadence.WorkflowService_RegisterDomain_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RegisterDomain_Result | $.VarRef<cadence.WorkflowService_RegisterDomain_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RegisterDomain_Result | $.VarRef<cadence.WorkflowService_RegisterDomain_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RegisterDomain_Helper).UnwrapResponse!(result), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RequestCancelWorkflowExecution(ctx: context.Context | null, _CancelRequest: shared.RequestCancelWorkflowExecutionRequest | $.VarRef<shared.RequestCancelWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const c = this;
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_RequestCancelWorkflowExecution_Result> = $.varRef(new cadence.WorkflowService_RequestCancelWorkflowExecution_Result(undefined, true))
		let args: cadence.WorkflowService_RequestCancelWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_RequestCancelWorkflowExecution_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((cancelRequest: shared.RequestCancelWorkflowExecutionRequest | $.VarRef<shared.RequestCancelWorkflowExecutionRequest> | null) => cadence.WorkflowService_RequestCancelWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_RequestCancelWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_RequestCancelWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_RequestCancelWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RequestCancelWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_RequestCancelWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RequestCancelWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_RequestCancelWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RequestCancelWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_RequestCancelWorkflowExecution_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RequestCancelWorkflowExecution_Helper).Args!(_CancelRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_RequestCancelWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_RequestCancelWorkflowExecution_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_RequestCancelWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RequestCancelWorkflowExecution_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_RequestCancelWorkflowExecution_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RequestCancelWorkflowExecution_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple60: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_RequestCancelWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RequestCancelWorkflowExecution_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple60[0])
				err = __goscriptTuple60[1]
				if (err != null) {
					return err
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return err
				}
			}
		}

		err = (__goscriptAwait = $.pointerValue<{"Args": ((cancelRequest: shared.RequestCancelWorkflowExecutionRequest | $.VarRef<shared.RequestCancelWorkflowExecutionRequest> | null) => cadence.WorkflowService_RequestCancelWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_RequestCancelWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_RequestCancelWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_RequestCancelWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RequestCancelWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_RequestCancelWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RequestCancelWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_RequestCancelWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RequestCancelWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_RequestCancelWorkflowExecution_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RequestCancelWorkflowExecution_Helper).UnwrapResponse!(result), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async ResetStickyTaskList(ctx: context.Context | null, _ResetRequest: shared.ResetStickyTaskListRequest | $.VarRef<shared.ResetStickyTaskListRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null = null! as shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_ResetStickyTaskList_Result> = $.varRef(new cadence.WorkflowService_ResetStickyTaskList_Result(undefined, true))
		let args: cadence.WorkflowService_ResetStickyTaskList_Args | $.VarRef<cadence.WorkflowService_ResetStickyTaskList_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((resetRequest: shared.ResetStickyTaskListRequest | $.VarRef<shared.ResetStickyTaskListRequest> | null) => cadence.WorkflowService_ResetStickyTaskList_Args | $.VarRef<cadence.WorkflowService_ResetStickyTaskList_Args> | null | globalThis.Promise<cadence.WorkflowService_ResetStickyTaskList_Args | $.VarRef<cadence.WorkflowService_ResetStickyTaskList_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ResetStickyTaskList_Result | $.VarRef<cadence.WorkflowService_ResetStickyTaskList_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ResetStickyTaskList_Result | $.VarRef<cadence.WorkflowService_ResetStickyTaskList_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ResetStickyTaskList_Result | $.VarRef<cadence.WorkflowService_ResetStickyTaskList_Result> | null) => [shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null, $.GoError] | globalThis.Promise<[shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ResetStickyTaskList_Helper).Args!(_ResetRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_ResetStickyTaskList_Args | $.VarRef<cadence.WorkflowService_ResetStickyTaskList_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_ResetStickyTaskList_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ResetStickyTaskList_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_ResetStickyTaskList_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ResetStickyTaskList_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple61: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_ResetStickyTaskList_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ResetStickyTaskList_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple61[0])
				err = __goscriptTuple61[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple62: any = await $.pointerValue<{"Args": ((resetRequest: shared.ResetStickyTaskListRequest | $.VarRef<shared.ResetStickyTaskListRequest> | null) => cadence.WorkflowService_ResetStickyTaskList_Args | $.VarRef<cadence.WorkflowService_ResetStickyTaskList_Args> | null | globalThis.Promise<cadence.WorkflowService_ResetStickyTaskList_Args | $.VarRef<cadence.WorkflowService_ResetStickyTaskList_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ResetStickyTaskList_Result | $.VarRef<cadence.WorkflowService_ResetStickyTaskList_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ResetStickyTaskList_Result | $.VarRef<cadence.WorkflowService_ResetStickyTaskList_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ResetStickyTaskList_Result | $.VarRef<cadence.WorkflowService_ResetStickyTaskList_Result> | null) => [shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null, $.GoError] | globalThis.Promise<[shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ResetStickyTaskList_Helper).UnwrapResponse!(result)
		success = __goscriptTuple62[0]
		err = __goscriptTuple62[1]
		return [success, err]
	}

	public async ResetWorkflowExecution(ctx: context.Context | null, _ResetRequest: shared.ResetWorkflowExecutionRequest | $.VarRef<shared.ResetWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null = null! as shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_ResetWorkflowExecution_Result> = $.varRef(new cadence.WorkflowService_ResetWorkflowExecution_Result(undefined, true))
		let args: cadence.WorkflowService_ResetWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_ResetWorkflowExecution_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((resetRequest: shared.ResetWorkflowExecutionRequest | $.VarRef<shared.ResetWorkflowExecutionRequest> | null) => cadence.WorkflowService_ResetWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_ResetWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_ResetWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_ResetWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ResetWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_ResetWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ResetWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_ResetWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ResetWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_ResetWorkflowExecution_Result> | null) => [shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ResetWorkflowExecution_Helper).Args!(_ResetRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_ResetWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_ResetWorkflowExecution_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_ResetWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ResetWorkflowExecution_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_ResetWorkflowExecution_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ResetWorkflowExecution_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple63: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_ResetWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ResetWorkflowExecution_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple63[0])
				err = __goscriptTuple63[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple64: any = await $.pointerValue<{"Args": ((resetRequest: shared.ResetWorkflowExecutionRequest | $.VarRef<shared.ResetWorkflowExecutionRequest> | null) => cadence.WorkflowService_ResetWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_ResetWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_ResetWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_ResetWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ResetWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_ResetWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ResetWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_ResetWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ResetWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_ResetWorkflowExecution_Result> | null) => [shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ResetWorkflowExecution_Helper).UnwrapResponse!(result)
		success = __goscriptTuple64[0]
		err = __goscriptTuple64[1]
		return [success, err]
	}

	public async RespondActivityTaskCanceled(ctx: context.Context | null, _CanceledRequest: shared.RespondActivityTaskCanceledRequest | $.VarRef<shared.RespondActivityTaskCanceledRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const c = this;
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceled_Result> = $.varRef(new cadence.WorkflowService_RespondActivityTaskCanceled_Result(undefined, true))
		let args: cadence.WorkflowService_RespondActivityTaskCanceled_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceled_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((canceledRequest: shared.RespondActivityTaskCanceledRequest | $.VarRef<shared.RespondActivityTaskCanceledRequest> | null) => cadence.WorkflowService_RespondActivityTaskCanceled_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceled_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondActivityTaskCanceled_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceled_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RespondActivityTaskCanceled_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceled_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondActivityTaskCanceled_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceled_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondActivityTaskCanceled_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceled_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RespondActivityTaskCanceled_Helper).Args!(_CanceledRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_RespondActivityTaskCanceled_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceled_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_RespondActivityTaskCanceled_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskCanceled_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_RespondActivityTaskCanceled_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskCanceled_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple65: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_RespondActivityTaskCanceled_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskCanceled_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple65[0])
				err = __goscriptTuple65[1]
				if (err != null) {
					return err
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return err
				}
			}
		}

		err = (__goscriptAwait = $.pointerValue<{"Args": ((canceledRequest: shared.RespondActivityTaskCanceledRequest | $.VarRef<shared.RespondActivityTaskCanceledRequest> | null) => cadence.WorkflowService_RespondActivityTaskCanceled_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceled_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondActivityTaskCanceled_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceled_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RespondActivityTaskCanceled_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceled_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondActivityTaskCanceled_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceled_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondActivityTaskCanceled_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceled_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RespondActivityTaskCanceled_Helper).UnwrapResponse!(result), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RespondActivityTaskCanceledByID(ctx: context.Context | null, _CanceledRequest: shared.RespondActivityTaskCanceledByIDRequest | $.VarRef<shared.RespondActivityTaskCanceledByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const c = this;
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceledByID_Result> = $.varRef(new cadence.WorkflowService_RespondActivityTaskCanceledByID_Result(undefined, true))
		let args: cadence.WorkflowService_RespondActivityTaskCanceledByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceledByID_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((canceledRequest: shared.RespondActivityTaskCanceledByIDRequest | $.VarRef<shared.RespondActivityTaskCanceledByIDRequest> | null) => cadence.WorkflowService_RespondActivityTaskCanceledByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceledByID_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondActivityTaskCanceledByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceledByID_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RespondActivityTaskCanceledByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceledByID_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondActivityTaskCanceledByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceledByID_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondActivityTaskCanceledByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceledByID_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RespondActivityTaskCanceledByID_Helper).Args!(_CanceledRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_RespondActivityTaskCanceledByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceledByID_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_RespondActivityTaskCanceledByID_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskCanceledByID_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_RespondActivityTaskCanceledByID_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskCanceledByID_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple66: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_RespondActivityTaskCanceledByID_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskCanceledByID_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple66[0])
				err = __goscriptTuple66[1]
				if (err != null) {
					return err
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return err
				}
			}
		}

		err = (__goscriptAwait = $.pointerValue<{"Args": ((canceledRequest: shared.RespondActivityTaskCanceledByIDRequest | $.VarRef<shared.RespondActivityTaskCanceledByIDRequest> | null) => cadence.WorkflowService_RespondActivityTaskCanceledByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceledByID_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondActivityTaskCanceledByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceledByID_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RespondActivityTaskCanceledByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceledByID_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondActivityTaskCanceledByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceledByID_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondActivityTaskCanceledByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCanceledByID_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RespondActivityTaskCanceledByID_Helper).UnwrapResponse!(result), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RespondActivityTaskCompleted(ctx: context.Context | null, _CompleteRequest: shared.RespondActivityTaskCompletedRequest | $.VarRef<shared.RespondActivityTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const c = this;
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_RespondActivityTaskCompleted_Result> = $.varRef(new cadence.WorkflowService_RespondActivityTaskCompleted_Result(undefined, true))
		let args: cadence.WorkflowService_RespondActivityTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompleted_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((completeRequest: shared.RespondActivityTaskCompletedRequest | $.VarRef<shared.RespondActivityTaskCompletedRequest> | null) => cadence.WorkflowService_RespondActivityTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompleted_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondActivityTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompleted_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RespondActivityTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompleted_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondActivityTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompleted_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondActivityTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompleted_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RespondActivityTaskCompleted_Helper).Args!(_CompleteRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_RespondActivityTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompleted_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_RespondActivityTaskCompleted_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskCompleted_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_RespondActivityTaskCompleted_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskCompleted_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple67: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_RespondActivityTaskCompleted_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskCompleted_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple67[0])
				err = __goscriptTuple67[1]
				if (err != null) {
					return err
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return err
				}
			}
		}

		err = (__goscriptAwait = $.pointerValue<{"Args": ((completeRequest: shared.RespondActivityTaskCompletedRequest | $.VarRef<shared.RespondActivityTaskCompletedRequest> | null) => cadence.WorkflowService_RespondActivityTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompleted_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondActivityTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompleted_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RespondActivityTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompleted_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondActivityTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompleted_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondActivityTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompleted_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RespondActivityTaskCompleted_Helper).UnwrapResponse!(result), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RespondActivityTaskCompletedByID(ctx: context.Context | null, _CompleteRequest: shared.RespondActivityTaskCompletedByIDRequest | $.VarRef<shared.RespondActivityTaskCompletedByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const c = this;
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_RespondActivityTaskCompletedByID_Result> = $.varRef(new cadence.WorkflowService_RespondActivityTaskCompletedByID_Result(undefined, true))
		let args: cadence.WorkflowService_RespondActivityTaskCompletedByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompletedByID_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((completeRequest: shared.RespondActivityTaskCompletedByIDRequest | $.VarRef<shared.RespondActivityTaskCompletedByIDRequest> | null) => cadence.WorkflowService_RespondActivityTaskCompletedByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompletedByID_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondActivityTaskCompletedByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompletedByID_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RespondActivityTaskCompletedByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompletedByID_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondActivityTaskCompletedByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompletedByID_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondActivityTaskCompletedByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompletedByID_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RespondActivityTaskCompletedByID_Helper).Args!(_CompleteRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_RespondActivityTaskCompletedByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompletedByID_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_RespondActivityTaskCompletedByID_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskCompletedByID_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_RespondActivityTaskCompletedByID_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskCompletedByID_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple68: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_RespondActivityTaskCompletedByID_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskCompletedByID_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple68[0])
				err = __goscriptTuple68[1]
				if (err != null) {
					return err
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return err
				}
			}
		}

		err = (__goscriptAwait = $.pointerValue<{"Args": ((completeRequest: shared.RespondActivityTaskCompletedByIDRequest | $.VarRef<shared.RespondActivityTaskCompletedByIDRequest> | null) => cadence.WorkflowService_RespondActivityTaskCompletedByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompletedByID_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondActivityTaskCompletedByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompletedByID_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RespondActivityTaskCompletedByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompletedByID_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondActivityTaskCompletedByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompletedByID_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondActivityTaskCompletedByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskCompletedByID_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RespondActivityTaskCompletedByID_Helper).UnwrapResponse!(result), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RespondActivityTaskFailed(ctx: context.Context | null, _FailRequest: shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const c = this;
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_RespondActivityTaskFailed_Result> = $.varRef(new cadence.WorkflowService_RespondActivityTaskFailed_Result(undefined, true))
		let args: cadence.WorkflowService_RespondActivityTaskFailed_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailed_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((failRequest: shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null) => cadence.WorkflowService_RespondActivityTaskFailed_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailed_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondActivityTaskFailed_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailed_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RespondActivityTaskFailed_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailed_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondActivityTaskFailed_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailed_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondActivityTaskFailed_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailed_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RespondActivityTaskFailed_Helper).Args!(_FailRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_RespondActivityTaskFailed_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailed_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_RespondActivityTaskFailed_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskFailed_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_RespondActivityTaskFailed_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskFailed_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple69: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_RespondActivityTaskFailed_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskFailed_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple69[0])
				err = __goscriptTuple69[1]
				if (err != null) {
					return err
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return err
				}
			}
		}

		err = (__goscriptAwait = $.pointerValue<{"Args": ((failRequest: shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null) => cadence.WorkflowService_RespondActivityTaskFailed_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailed_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondActivityTaskFailed_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailed_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RespondActivityTaskFailed_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailed_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondActivityTaskFailed_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailed_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondActivityTaskFailed_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailed_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RespondActivityTaskFailed_Helper).UnwrapResponse!(result), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RespondActivityTaskFailedByID(ctx: context.Context | null, _FailRequest: shared.RespondActivityTaskFailedByIDRequest | $.VarRef<shared.RespondActivityTaskFailedByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const c = this;
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_RespondActivityTaskFailedByID_Result> = $.varRef(new cadence.WorkflowService_RespondActivityTaskFailedByID_Result(undefined, true))
		let args: cadence.WorkflowService_RespondActivityTaskFailedByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailedByID_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((failRequest: shared.RespondActivityTaskFailedByIDRequest | $.VarRef<shared.RespondActivityTaskFailedByIDRequest> | null) => cadence.WorkflowService_RespondActivityTaskFailedByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailedByID_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondActivityTaskFailedByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailedByID_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RespondActivityTaskFailedByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailedByID_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondActivityTaskFailedByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailedByID_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondActivityTaskFailedByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailedByID_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RespondActivityTaskFailedByID_Helper).Args!(_FailRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_RespondActivityTaskFailedByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailedByID_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_RespondActivityTaskFailedByID_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskFailedByID_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_RespondActivityTaskFailedByID_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskFailedByID_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple70: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_RespondActivityTaskFailedByID_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondActivityTaskFailedByID_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple70[0])
				err = __goscriptTuple70[1]
				if (err != null) {
					return err
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return err
				}
			}
		}

		err = (__goscriptAwait = $.pointerValue<{"Args": ((failRequest: shared.RespondActivityTaskFailedByIDRequest | $.VarRef<shared.RespondActivityTaskFailedByIDRequest> | null) => cadence.WorkflowService_RespondActivityTaskFailedByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailedByID_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondActivityTaskFailedByID_Args | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailedByID_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RespondActivityTaskFailedByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailedByID_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondActivityTaskFailedByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailedByID_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondActivityTaskFailedByID_Result | $.VarRef<cadence.WorkflowService_RespondActivityTaskFailedByID_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RespondActivityTaskFailedByID_Helper).UnwrapResponse!(result), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RespondDecisionTaskCompleted(ctx: context.Context | null, _CompleteRequest: shared.RespondDecisionTaskCompletedRequest | $.VarRef<shared.RespondDecisionTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null = null! as shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_RespondDecisionTaskCompleted_Result> = $.varRef(new cadence.WorkflowService_RespondDecisionTaskCompleted_Result(undefined, true))
		let args: cadence.WorkflowService_RespondDecisionTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondDecisionTaskCompleted_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((completeRequest: shared.RespondDecisionTaskCompletedRequest | $.VarRef<shared.RespondDecisionTaskCompletedRequest> | null) => cadence.WorkflowService_RespondDecisionTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondDecisionTaskCompleted_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondDecisionTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondDecisionTaskCompleted_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_RespondDecisionTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondDecisionTaskCompleted_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondDecisionTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondDecisionTaskCompleted_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondDecisionTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondDecisionTaskCompleted_Result> | null) => [shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null, $.GoError] | globalThis.Promise<[shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_RespondDecisionTaskCompleted_Helper).Args!(_CompleteRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_RespondDecisionTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondDecisionTaskCompleted_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_RespondDecisionTaskCompleted_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondDecisionTaskCompleted_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_RespondDecisionTaskCompleted_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondDecisionTaskCompleted_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple71: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_RespondDecisionTaskCompleted_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondDecisionTaskCompleted_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple71[0])
				err = __goscriptTuple71[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple72: any = await $.pointerValue<{"Args": ((completeRequest: shared.RespondDecisionTaskCompletedRequest | $.VarRef<shared.RespondDecisionTaskCompletedRequest> | null) => cadence.WorkflowService_RespondDecisionTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondDecisionTaskCompleted_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondDecisionTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondDecisionTaskCompleted_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_RespondDecisionTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondDecisionTaskCompleted_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondDecisionTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondDecisionTaskCompleted_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondDecisionTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondDecisionTaskCompleted_Result> | null) => [shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null, $.GoError] | globalThis.Promise<[shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_RespondDecisionTaskCompleted_Helper).UnwrapResponse!(result)
		success = __goscriptTuple72[0]
		err = __goscriptTuple72[1]
		return [success, err]
	}

	public async RespondDecisionTaskFailed(ctx: context.Context | null, _FailedRequest: shared.RespondDecisionTaskFailedRequest | $.VarRef<shared.RespondDecisionTaskFailedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const c = this;
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_RespondDecisionTaskFailed_Result> = $.varRef(new cadence.WorkflowService_RespondDecisionTaskFailed_Result(undefined, true))
		let args: cadence.WorkflowService_RespondDecisionTaskFailed_Args | $.VarRef<cadence.WorkflowService_RespondDecisionTaskFailed_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((failedRequest: shared.RespondDecisionTaskFailedRequest | $.VarRef<shared.RespondDecisionTaskFailedRequest> | null) => cadence.WorkflowService_RespondDecisionTaskFailed_Args | $.VarRef<cadence.WorkflowService_RespondDecisionTaskFailed_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondDecisionTaskFailed_Args | $.VarRef<cadence.WorkflowService_RespondDecisionTaskFailed_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RespondDecisionTaskFailed_Result | $.VarRef<cadence.WorkflowService_RespondDecisionTaskFailed_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondDecisionTaskFailed_Result | $.VarRef<cadence.WorkflowService_RespondDecisionTaskFailed_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondDecisionTaskFailed_Result | $.VarRef<cadence.WorkflowService_RespondDecisionTaskFailed_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RespondDecisionTaskFailed_Helper).Args!(_FailedRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_RespondDecisionTaskFailed_Args | $.VarRef<cadence.WorkflowService_RespondDecisionTaskFailed_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_RespondDecisionTaskFailed_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondDecisionTaskFailed_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_RespondDecisionTaskFailed_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondDecisionTaskFailed_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple73: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_RespondDecisionTaskFailed_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondDecisionTaskFailed_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple73[0])
				err = __goscriptTuple73[1]
				if (err != null) {
					return err
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return err
				}
			}
		}

		err = (__goscriptAwait = $.pointerValue<{"Args": ((failedRequest: shared.RespondDecisionTaskFailedRequest | $.VarRef<shared.RespondDecisionTaskFailedRequest> | null) => cadence.WorkflowService_RespondDecisionTaskFailed_Args | $.VarRef<cadence.WorkflowService_RespondDecisionTaskFailed_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondDecisionTaskFailed_Args | $.VarRef<cadence.WorkflowService_RespondDecisionTaskFailed_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RespondDecisionTaskFailed_Result | $.VarRef<cadence.WorkflowService_RespondDecisionTaskFailed_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondDecisionTaskFailed_Result | $.VarRef<cadence.WorkflowService_RespondDecisionTaskFailed_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondDecisionTaskFailed_Result | $.VarRef<cadence.WorkflowService_RespondDecisionTaskFailed_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RespondDecisionTaskFailed_Helper).UnwrapResponse!(result), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RespondQueryTaskCompleted(ctx: context.Context | null, _CompleteRequest: shared.RespondQueryTaskCompletedRequest | $.VarRef<shared.RespondQueryTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const c = this;
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_RespondQueryTaskCompleted_Result> = $.varRef(new cadence.WorkflowService_RespondQueryTaskCompleted_Result(undefined, true))
		let args: cadence.WorkflowService_RespondQueryTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondQueryTaskCompleted_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((completeRequest: shared.RespondQueryTaskCompletedRequest | $.VarRef<shared.RespondQueryTaskCompletedRequest> | null) => cadence.WorkflowService_RespondQueryTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondQueryTaskCompleted_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondQueryTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondQueryTaskCompleted_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RespondQueryTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondQueryTaskCompleted_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondQueryTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondQueryTaskCompleted_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondQueryTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondQueryTaskCompleted_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RespondQueryTaskCompleted_Helper).Args!(_CompleteRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_RespondQueryTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondQueryTaskCompleted_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_RespondQueryTaskCompleted_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondQueryTaskCompleted_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_RespondQueryTaskCompleted_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondQueryTaskCompleted_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple74: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_RespondQueryTaskCompleted_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RespondQueryTaskCompleted_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple74[0])
				err = __goscriptTuple74[1]
				if (err != null) {
					return err
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return err
				}
			}
		}

		err = (__goscriptAwait = $.pointerValue<{"Args": ((completeRequest: shared.RespondQueryTaskCompletedRequest | $.VarRef<shared.RespondQueryTaskCompletedRequest> | null) => cadence.WorkflowService_RespondQueryTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondQueryTaskCompleted_Args> | null | globalThis.Promise<cadence.WorkflowService_RespondQueryTaskCompleted_Args | $.VarRef<cadence.WorkflowService_RespondQueryTaskCompleted_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_RespondQueryTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondQueryTaskCompleted_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RespondQueryTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondQueryTaskCompleted_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RespondQueryTaskCompleted_Result | $.VarRef<cadence.WorkflowService_RespondQueryTaskCompleted_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_RespondQueryTaskCompleted_Helper).UnwrapResponse!(result), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RestartWorkflowExecution(ctx: context.Context | null, _RestartRequest: shared.RestartWorkflowExecutionRequest | $.VarRef<shared.RestartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null = null! as shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_RestartWorkflowExecution_Result> = $.varRef(new cadence.WorkflowService_RestartWorkflowExecution_Result(undefined, true))
		let args: cadence.WorkflowService_RestartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_RestartWorkflowExecution_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((restartRequest: shared.RestartWorkflowExecutionRequest | $.VarRef<shared.RestartWorkflowExecutionRequest> | null) => cadence.WorkflowService_RestartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_RestartWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_RestartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_RestartWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_RestartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_RestartWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RestartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_RestartWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RestartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_RestartWorkflowExecution_Result> | null) => [shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_RestartWorkflowExecution_Helper).Args!(_RestartRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_RestartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_RestartWorkflowExecution_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_RestartWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RestartWorkflowExecution_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_RestartWorkflowExecution_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RestartWorkflowExecution_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple75: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_RestartWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_RestartWorkflowExecution_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple75[0])
				err = __goscriptTuple75[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple76: any = await $.pointerValue<{"Args": ((restartRequest: shared.RestartWorkflowExecutionRequest | $.VarRef<shared.RestartWorkflowExecutionRequest> | null) => cadence.WorkflowService_RestartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_RestartWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_RestartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_RestartWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_RestartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_RestartWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_RestartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_RestartWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_RestartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_RestartWorkflowExecution_Result> | null) => [shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_RestartWorkflowExecution_Helper).UnwrapResponse!(result)
		success = __goscriptTuple76[0]
		err = __goscriptTuple76[1]
		return [success, err]
	}

	public async ScanWorkflowExecutions(ctx: context.Context | null, _ListRequest: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null = null! as shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_ScanWorkflowExecutions_Result> = $.varRef(new cadence.WorkflowService_ScanWorkflowExecutions_Result(undefined, true))
		let args: cadence.WorkflowService_ScanWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ScanWorkflowExecutions_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((listRequest: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null) => cadence.WorkflowService_ScanWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ScanWorkflowExecutions_Args> | null | globalThis.Promise<cadence.WorkflowService_ScanWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ScanWorkflowExecutions_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ScanWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ScanWorkflowExecutions_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ScanWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ScanWorkflowExecutions_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ScanWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ScanWorkflowExecutions_Result> | null) => [shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ScanWorkflowExecutions_Helper).Args!(_ListRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_ScanWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ScanWorkflowExecutions_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_ScanWorkflowExecutions_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ScanWorkflowExecutions_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_ScanWorkflowExecutions_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ScanWorkflowExecutions_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple77: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_ScanWorkflowExecutions_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_ScanWorkflowExecutions_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple77[0])
				err = __goscriptTuple77[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple78: any = await $.pointerValue<{"Args": ((listRequest: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null) => cadence.WorkflowService_ScanWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ScanWorkflowExecutions_Args> | null | globalThis.Promise<cadence.WorkflowService_ScanWorkflowExecutions_Args | $.VarRef<cadence.WorkflowService_ScanWorkflowExecutions_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_ScanWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ScanWorkflowExecutions_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_ScanWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ScanWorkflowExecutions_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_ScanWorkflowExecutions_Result | $.VarRef<cadence.WorkflowService_ScanWorkflowExecutions_Result> | null) => [shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_ScanWorkflowExecutions_Helper).UnwrapResponse!(result)
		success = __goscriptTuple78[0]
		err = __goscriptTuple78[1]
		return [success, err]
	}

	public async SignalWithStartWorkflowExecution(ctx: context.Context | null, _SignalWithStartRequest: shared.SignalWithStartWorkflowExecutionRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null = null! as shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecution_Result> = $.varRef(new cadence.WorkflowService_SignalWithStartWorkflowExecution_Result(undefined, true))
		let args: cadence.WorkflowService_SignalWithStartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecution_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((signalWithStartRequest: shared.SignalWithStartWorkflowExecutionRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionRequest> | null) => cadence.WorkflowService_SignalWithStartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_SignalWithStartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_SignalWithStartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_SignalWithStartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_SignalWithStartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecution_Result> | null) => [shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_SignalWithStartWorkflowExecution_Helper).Args!(_SignalWithStartRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_SignalWithStartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecution_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_SignalWithStartWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_SignalWithStartWorkflowExecution_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_SignalWithStartWorkflowExecution_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_SignalWithStartWorkflowExecution_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple79: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_SignalWithStartWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_SignalWithStartWorkflowExecution_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple79[0])
				err = __goscriptTuple79[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple80: any = await $.pointerValue<{"Args": ((signalWithStartRequest: shared.SignalWithStartWorkflowExecutionRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionRequest> | null) => cadence.WorkflowService_SignalWithStartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_SignalWithStartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_SignalWithStartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_SignalWithStartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_SignalWithStartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecution_Result> | null) => [shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_SignalWithStartWorkflowExecution_Helper).UnwrapResponse!(result)
		success = __goscriptTuple80[0]
		err = __goscriptTuple80[1]
		return [success, err]
	}

	public async SignalWithStartWorkflowExecutionAsync(ctx: context.Context | null, _SignalWithStartRequest: shared.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null = null! as shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Result> = $.varRef(new cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Result(undefined, true))
		let args: cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Args | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((signalWithStartRequest: shared.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncRequest> | null) => cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Args | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Args> | null | globalThis.Promise<cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Args | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Result | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Result | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Result | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Result> | null) => [shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null, $.GoError] | globalThis.Promise<[shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Helper).Args!(_SignalWithStartRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Args | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple81: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple81[0])
				err = __goscriptTuple81[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple82: any = await $.pointerValue<{"Args": ((signalWithStartRequest: shared.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncRequest> | null) => cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Args | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Args> | null | globalThis.Promise<cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Args | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Result | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Result | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Result | $.VarRef<cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Result> | null) => [shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null, $.GoError] | globalThis.Promise<[shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_SignalWithStartWorkflowExecutionAsync_Helper).UnwrapResponse!(result)
		success = __goscriptTuple82[0]
		err = __goscriptTuple82[1]
		return [success, err]
	}

	public async SignalWorkflowExecution(ctx: context.Context | null, _SignalRequest: shared.SignalWorkflowExecutionRequest | $.VarRef<shared.SignalWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const c = this;
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_SignalWorkflowExecution_Result> = $.varRef(new cadence.WorkflowService_SignalWorkflowExecution_Result(undefined, true))
		let args: cadence.WorkflowService_SignalWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_SignalWorkflowExecution_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((signalRequest: shared.SignalWorkflowExecutionRequest | $.VarRef<shared.SignalWorkflowExecutionRequest> | null) => cadence.WorkflowService_SignalWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_SignalWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_SignalWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_SignalWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_SignalWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_SignalWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_SignalWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_SignalWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_SignalWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_SignalWorkflowExecution_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_SignalWorkflowExecution_Helper).Args!(_SignalRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_SignalWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_SignalWorkflowExecution_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_SignalWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_SignalWorkflowExecution_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_SignalWorkflowExecution_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_SignalWorkflowExecution_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple83: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_SignalWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_SignalWorkflowExecution_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple83[0])
				err = __goscriptTuple83[1]
				if (err != null) {
					return err
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return err
				}
			}
		}

		err = (__goscriptAwait = $.pointerValue<{"Args": ((signalRequest: shared.SignalWorkflowExecutionRequest | $.VarRef<shared.SignalWorkflowExecutionRequest> | null) => cadence.WorkflowService_SignalWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_SignalWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_SignalWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_SignalWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_SignalWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_SignalWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_SignalWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_SignalWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_SignalWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_SignalWorkflowExecution_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_SignalWorkflowExecution_Helper).UnwrapResponse!(result), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async StartWorkflowExecution(ctx: context.Context | null, _StartRequest: shared.StartWorkflowExecutionRequest | $.VarRef<shared.StartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null = null! as shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_StartWorkflowExecution_Result> = $.varRef(new cadence.WorkflowService_StartWorkflowExecution_Result(undefined, true))
		let args: cadence.WorkflowService_StartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_StartWorkflowExecution_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((startRequest: shared.StartWorkflowExecutionRequest | $.VarRef<shared.StartWorkflowExecutionRequest> | null) => cadence.WorkflowService_StartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_StartWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_StartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_StartWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_StartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_StartWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_StartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_StartWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_StartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_StartWorkflowExecution_Result> | null) => [shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_StartWorkflowExecution_Helper).Args!(_StartRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_StartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_StartWorkflowExecution_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_StartWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_StartWorkflowExecution_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_StartWorkflowExecution_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_StartWorkflowExecution_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple84: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_StartWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_StartWorkflowExecution_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple84[0])
				err = __goscriptTuple84[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple85: any = await $.pointerValue<{"Args": ((startRequest: shared.StartWorkflowExecutionRequest | $.VarRef<shared.StartWorkflowExecutionRequest> | null) => cadence.WorkflowService_StartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_StartWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_StartWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_StartWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_StartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_StartWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_StartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_StartWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_StartWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_StartWorkflowExecution_Result> | null) => [shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_StartWorkflowExecution_Helper).UnwrapResponse!(result)
		success = __goscriptTuple85[0]
		err = __goscriptTuple85[1]
		return [success, err]
	}

	public async StartWorkflowExecutionAsync(ctx: context.Context | null, _StartRequest: shared.StartWorkflowExecutionAsyncRequest | $.VarRef<shared.StartWorkflowExecutionAsyncRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null = null! as shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_StartWorkflowExecutionAsync_Result> = $.varRef(new cadence.WorkflowService_StartWorkflowExecutionAsync_Result(undefined, true))
		let args: cadence.WorkflowService_StartWorkflowExecutionAsync_Args | $.VarRef<cadence.WorkflowService_StartWorkflowExecutionAsync_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((startRequest: shared.StartWorkflowExecutionAsyncRequest | $.VarRef<shared.StartWorkflowExecutionAsyncRequest> | null) => cadence.WorkflowService_StartWorkflowExecutionAsync_Args | $.VarRef<cadence.WorkflowService_StartWorkflowExecutionAsync_Args> | null | globalThis.Promise<cadence.WorkflowService_StartWorkflowExecutionAsync_Args | $.VarRef<cadence.WorkflowService_StartWorkflowExecutionAsync_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_StartWorkflowExecutionAsync_Result | $.VarRef<cadence.WorkflowService_StartWorkflowExecutionAsync_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_StartWorkflowExecutionAsync_Result | $.VarRef<cadence.WorkflowService_StartWorkflowExecutionAsync_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_StartWorkflowExecutionAsync_Result | $.VarRef<cadence.WorkflowService_StartWorkflowExecutionAsync_Result> | null) => [shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null, $.GoError] | globalThis.Promise<[shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_StartWorkflowExecutionAsync_Helper).Args!(_StartRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_StartWorkflowExecutionAsync_Args | $.VarRef<cadence.WorkflowService_StartWorkflowExecutionAsync_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_StartWorkflowExecutionAsync_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_StartWorkflowExecutionAsync_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_StartWorkflowExecutionAsync_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_StartWorkflowExecutionAsync_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple86: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_StartWorkflowExecutionAsync_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_StartWorkflowExecutionAsync_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple86[0])
				err = __goscriptTuple86[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple87: any = await $.pointerValue<{"Args": ((startRequest: shared.StartWorkflowExecutionAsyncRequest | $.VarRef<shared.StartWorkflowExecutionAsyncRequest> | null) => cadence.WorkflowService_StartWorkflowExecutionAsync_Args | $.VarRef<cadence.WorkflowService_StartWorkflowExecutionAsync_Args> | null | globalThis.Promise<cadence.WorkflowService_StartWorkflowExecutionAsync_Args | $.VarRef<cadence.WorkflowService_StartWorkflowExecutionAsync_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_StartWorkflowExecutionAsync_Result | $.VarRef<cadence.WorkflowService_StartWorkflowExecutionAsync_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_StartWorkflowExecutionAsync_Result | $.VarRef<cadence.WorkflowService_StartWorkflowExecutionAsync_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_StartWorkflowExecutionAsync_Result | $.VarRef<cadence.WorkflowService_StartWorkflowExecutionAsync_Result> | null) => [shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null, $.GoError] | globalThis.Promise<[shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_StartWorkflowExecutionAsync_Helper).UnwrapResponse!(result)
		success = __goscriptTuple87[0]
		err = __goscriptTuple87[1]
		return [success, err]
	}

	public async TerminateWorkflowExecution(ctx: context.Context | null, _TerminateRequest: shared.TerminateWorkflowExecutionRequest | $.VarRef<shared.TerminateWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const c = this;
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_TerminateWorkflowExecution_Result> = $.varRef(new cadence.WorkflowService_TerminateWorkflowExecution_Result(undefined, true))
		let args: cadence.WorkflowService_TerminateWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_TerminateWorkflowExecution_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((terminateRequest: shared.TerminateWorkflowExecutionRequest | $.VarRef<shared.TerminateWorkflowExecutionRequest> | null) => cadence.WorkflowService_TerminateWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_TerminateWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_TerminateWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_TerminateWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_TerminateWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_TerminateWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_TerminateWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_TerminateWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_TerminateWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_TerminateWorkflowExecution_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_TerminateWorkflowExecution_Helper).Args!(_TerminateRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_TerminateWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_TerminateWorkflowExecution_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_TerminateWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_TerminateWorkflowExecution_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_TerminateWorkflowExecution_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_TerminateWorkflowExecution_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return err
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple88: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_TerminateWorkflowExecution_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_TerminateWorkflowExecution_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple88[0])
				err = __goscriptTuple88[1]
				if (err != null) {
					return err
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return err
				}
			}
		}

		err = (__goscriptAwait = $.pointerValue<{"Args": ((terminateRequest: shared.TerminateWorkflowExecutionRequest | $.VarRef<shared.TerminateWorkflowExecutionRequest> | null) => cadence.WorkflowService_TerminateWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_TerminateWorkflowExecution_Args> | null | globalThis.Promise<cadence.WorkflowService_TerminateWorkflowExecution_Args | $.VarRef<cadence.WorkflowService_TerminateWorkflowExecution_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: $.GoError) => [cadence.WorkflowService_TerminateWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_TerminateWorkflowExecution_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_TerminateWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_TerminateWorkflowExecution_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_TerminateWorkflowExecution_Result | $.VarRef<cadence.WorkflowService_TerminateWorkflowExecution_Result> | null) => $.GoError | globalThis.Promise<$.GoError>) | null}>(cadence.WorkflowService_TerminateWorkflowExecution_Helper).UnwrapResponse!(result), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async UnpauseSchedule(ctx: context.Context | null, _Request: shared.UnpauseScheduleRequest | $.VarRef<shared.UnpauseScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null = null! as shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_UnpauseSchedule_Result> = $.varRef(new cadence.WorkflowService_UnpauseSchedule_Result(undefined, true))
		let args: cadence.WorkflowService_UnpauseSchedule_Args | $.VarRef<cadence.WorkflowService_UnpauseSchedule_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((request: shared.UnpauseScheduleRequest | $.VarRef<shared.UnpauseScheduleRequest> | null) => cadence.WorkflowService_UnpauseSchedule_Args | $.VarRef<cadence.WorkflowService_UnpauseSchedule_Args> | null | globalThis.Promise<cadence.WorkflowService_UnpauseSchedule_Args | $.VarRef<cadence.WorkflowService_UnpauseSchedule_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_UnpauseSchedule_Result | $.VarRef<cadence.WorkflowService_UnpauseSchedule_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_UnpauseSchedule_Result | $.VarRef<cadence.WorkflowService_UnpauseSchedule_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_UnpauseSchedule_Result | $.VarRef<cadence.WorkflowService_UnpauseSchedule_Result> | null) => [shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_UnpauseSchedule_Helper).Args!(_Request), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_UnpauseSchedule_Args | $.VarRef<cadence.WorkflowService_UnpauseSchedule_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_UnpauseSchedule_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_UnpauseSchedule_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_UnpauseSchedule_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_UnpauseSchedule_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple89: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_UnpauseSchedule_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_UnpauseSchedule_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple89[0])
				err = __goscriptTuple89[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple90: any = await $.pointerValue<{"Args": ((request: shared.UnpauseScheduleRequest | $.VarRef<shared.UnpauseScheduleRequest> | null) => cadence.WorkflowService_UnpauseSchedule_Args | $.VarRef<cadence.WorkflowService_UnpauseSchedule_Args> | null | globalThis.Promise<cadence.WorkflowService_UnpauseSchedule_Args | $.VarRef<cadence.WorkflowService_UnpauseSchedule_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_UnpauseSchedule_Result | $.VarRef<cadence.WorkflowService_UnpauseSchedule_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_UnpauseSchedule_Result | $.VarRef<cadence.WorkflowService_UnpauseSchedule_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_UnpauseSchedule_Result | $.VarRef<cadence.WorkflowService_UnpauseSchedule_Result> | null) => [shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_UnpauseSchedule_Helper).UnwrapResponse!(result)
		success = __goscriptTuple90[0]
		err = __goscriptTuple90[1]
		return [success, err]
	}

	public async UpdateDomain(ctx: context.Context | null, _UpdateRequest: shared.UpdateDomainRequest | $.VarRef<shared.UpdateDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null = null! as shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_UpdateDomain_Result> = $.varRef(new cadence.WorkflowService_UpdateDomain_Result(undefined, true))
		let args: cadence.WorkflowService_UpdateDomain_Args | $.VarRef<cadence.WorkflowService_UpdateDomain_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((updateRequest: shared.UpdateDomainRequest | $.VarRef<shared.UpdateDomainRequest> | null) => cadence.WorkflowService_UpdateDomain_Args | $.VarRef<cadence.WorkflowService_UpdateDomain_Args> | null | globalThis.Promise<cadence.WorkflowService_UpdateDomain_Args | $.VarRef<cadence.WorkflowService_UpdateDomain_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_UpdateDomain_Result | $.VarRef<cadence.WorkflowService_UpdateDomain_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_UpdateDomain_Result | $.VarRef<cadence.WorkflowService_UpdateDomain_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_UpdateDomain_Result | $.VarRef<cadence.WorkflowService_UpdateDomain_Result> | null) => [shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null, $.GoError] | globalThis.Promise<[shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_UpdateDomain_Helper).Args!(_UpdateRequest), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_UpdateDomain_Args | $.VarRef<cadence.WorkflowService_UpdateDomain_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_UpdateDomain_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_UpdateDomain_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_UpdateDomain_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_UpdateDomain_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple91: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_UpdateDomain_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_UpdateDomain_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple91[0])
				err = __goscriptTuple91[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple92: any = await $.pointerValue<{"Args": ((updateRequest: shared.UpdateDomainRequest | $.VarRef<shared.UpdateDomainRequest> | null) => cadence.WorkflowService_UpdateDomain_Args | $.VarRef<cadence.WorkflowService_UpdateDomain_Args> | null | globalThis.Promise<cadence.WorkflowService_UpdateDomain_Args | $.VarRef<cadence.WorkflowService_UpdateDomain_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_UpdateDomain_Result | $.VarRef<cadence.WorkflowService_UpdateDomain_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_UpdateDomain_Result | $.VarRef<cadence.WorkflowService_UpdateDomain_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_UpdateDomain_Result | $.VarRef<cadence.WorkflowService_UpdateDomain_Result> | null) => [shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null, $.GoError] | globalThis.Promise<[shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_UpdateDomain_Helper).UnwrapResponse!(result)
		success = __goscriptTuple92[0]
		err = __goscriptTuple92[1]
		return [success, err]
	}

	public async UpdateSchedule(ctx: context.Context | null, _Request: shared.UpdateScheduleRequest | $.VarRef<shared.UpdateScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null, $.GoError]> {
		const c = this;
		let success: shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null = null! as shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null
		let err: $.GoError = null! as $.GoError

		let result: $.VarRef<cadence.WorkflowService_UpdateSchedule_Result> = $.varRef(new cadence.WorkflowService_UpdateSchedule_Result(undefined, true))
		let args: cadence.WorkflowService_UpdateSchedule_Args | $.VarRef<cadence.WorkflowService_UpdateSchedule_Args> | null = ((__goscriptAwait = $.pointerValue<{"Args": ((request: shared.UpdateScheduleRequest | $.VarRef<shared.UpdateScheduleRequest> | null) => cadence.WorkflowService_UpdateSchedule_Args | $.VarRef<cadence.WorkflowService_UpdateSchedule_Args> | null | globalThis.Promise<cadence.WorkflowService_UpdateSchedule_Args | $.VarRef<cadence.WorkflowService_UpdateSchedule_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_UpdateSchedule_Result | $.VarRef<cadence.WorkflowService_UpdateSchedule_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_UpdateSchedule_Result | $.VarRef<cadence.WorkflowService_UpdateSchedule_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_UpdateSchedule_Result | $.VarRef<cadence.WorkflowService_UpdateSchedule_Result> | null) => [shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_UpdateSchedule_Helper).Args!(_Request), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as cadence.WorkflowService_UpdateSchedule_Args | $.VarRef<cadence.WorkflowService_UpdateSchedule_Args> | null)

		if ((c.nwc != null) && (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Enabled(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			{
				err = (__goscriptAwait = $.pointerValue<Exclude<thrift.NoWireClient, null>>(c.nwc).Call(ctx, $.interfaceValue<stream.Enveloper | null>(args, "*cadence.WorkflowService_UpdateSchedule_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_UpdateSchedule_Args")), $.interfaceValue<stream.BodyReader | null>(result, "*cadence.WorkflowService_UpdateSchedule_Result", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_UpdateSchedule_Result")), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return [success, err]
				}
			}
		} else {
			let body: wire.Value = new wire.Value(undefined, true)
			{
				let __goscriptTuple93: any = await $.pointerValue<Exclude<thrift.Client, null>>(c.c).Call(ctx, $.interfaceValue<envelope.Enveloper | null>(args, "*cadence.WorkflowService_UpdateSchedule_Args", /* @__PURE__ */ $.pointerType("cadence.WorkflowService_UpdateSchedule_Args")), opts)
				body = $.assignStruct(body, __goscriptTuple93[0])
				err = __goscriptTuple93[1]
				if (err != null) {
					return [success, err]
				}
			}

			{
				err = await result.value.FromWire((body).clone())
				if (err != null) {
					return [success, err]
				}
			}
		}

		let __goscriptTuple94: any = await $.pointerValue<{"Args": ((request: shared.UpdateScheduleRequest | $.VarRef<shared.UpdateScheduleRequest> | null) => cadence.WorkflowService_UpdateSchedule_Args | $.VarRef<cadence.WorkflowService_UpdateSchedule_Args> | null | globalThis.Promise<cadence.WorkflowService_UpdateSchedule_Args | $.VarRef<cadence.WorkflowService_UpdateSchedule_Args> | null>) | null, "IsException": ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null, "WrapResponse": ((_p0: shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null, _p1: $.GoError) => [cadence.WorkflowService_UpdateSchedule_Result | $.VarRef<cadence.WorkflowService_UpdateSchedule_Result> | null, $.GoError] | globalThis.Promise<[cadence.WorkflowService_UpdateSchedule_Result | $.VarRef<cadence.WorkflowService_UpdateSchedule_Result> | null, $.GoError]>) | null, "UnwrapResponse": ((_p0: cadence.WorkflowService_UpdateSchedule_Result | $.VarRef<cadence.WorkflowService_UpdateSchedule_Result> | null) => [shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null, $.GoError] | globalThis.Promise<[shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null, $.GoError]>) | null}>(cadence.WorkflowService_UpdateSchedule_Helper).UnwrapResponse!(result)
		success = __goscriptTuple94[0]
		err = __goscriptTuple94[1]
		return [success, err]
	}

	static __typeInfo = $.registerStructType(
		"workflowserviceclient.client",
		() => new client(),
		() => [$.methodSignature("BackfillSchedule", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.BackfillScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.BackfillScheduleResponse")], ["err", "error"]]), $.methodSignature("CountWorkflowExecutions", [["ctx", "context.Context"], ["_CountRequest", /* @__PURE__ */ $.pointerType("shared.CountWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.CountWorkflowExecutionsResponse")], ["err", "error"]]), $.methodSignature("CreateSchedule", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.CreateScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.CreateScheduleResponse")], ["err", "error"]]), $.methodSignature("DeleteDomain", [["ctx", "context.Context"], ["_DeleteRequest", /* @__PURE__ */ $.pointerType("shared.DeleteDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]]), $.methodSignature("DeleteSchedule", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.DeleteScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.DeleteScheduleResponse")], ["err", "error"]]), $.methodSignature("DeprecateDomain", [["ctx", "context.Context"], ["_DeprecateRequest", /* @__PURE__ */ $.pointerType("shared.DeprecateDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]]), $.methodSignature("DescribeDomain", [["ctx", "context.Context"], ["_DescribeRequest", /* @__PURE__ */ $.pointerType("shared.DescribeDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.DescribeDomainResponse")], ["err", "error"]]), $.methodSignature("DescribeSchedule", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.DescribeScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.DescribeScheduleResponse")], ["err", "error"]]), $.methodSignature("DescribeTaskList", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.DescribeTaskListRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.DescribeTaskListResponse")], ["err", "error"]]), $.methodSignature("DescribeWorkflowExecution", [["ctx", "context.Context"], ["_DescribeRequest", /* @__PURE__ */ $.pointerType("shared.DescribeWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.DescribeWorkflowExecutionResponse")], ["err", "error"]]), $.methodSignature("DiagnoseWorkflowExecution", [["ctx", "context.Context"], ["_DiagnoseRequest", /* @__PURE__ */ $.pointerType("shared.DiagnoseWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.DiagnoseWorkflowExecutionResponse")], ["err", "error"]]), $.methodSignature("FailoverDomain", [["ctx", "context.Context"], ["_FailoverRequest", /* @__PURE__ */ $.pointerType("shared.FailoverDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.FailoverDomainResponse")], ["err", "error"]]), $.methodSignature("GetClusterInfo", [["ctx", "context.Context"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ClusterInfo")], ["err", "error"]]), $.methodSignature("GetSearchAttributes", [["ctx", "context.Context"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.GetSearchAttributesResponse")], ["err", "error"]]), $.methodSignature("GetTaskListsByDomain", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.GetTaskListsByDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.GetTaskListsByDomainResponse")], ["err", "error"]]), $.methodSignature("GetWorkflowExecutionHistory", [["ctx", "context.Context"], ["_GetRequest", /* @__PURE__ */ $.pointerType("shared.GetWorkflowExecutionHistoryRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.GetWorkflowExecutionHistoryResponse")], ["err", "error"]]), $.methodSignature("ListArchivedWorkflowExecutions", [["ctx", "context.Context"], ["_ListRequest", /* @__PURE__ */ $.pointerType("shared.ListArchivedWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListArchivedWorkflowExecutionsResponse")], ["err", "error"]]), $.methodSignature("ListClosedWorkflowExecutions", [["ctx", "context.Context"], ["_ListRequest", /* @__PURE__ */ $.pointerType("shared.ListClosedWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListClosedWorkflowExecutionsResponse")], ["err", "error"]]), $.methodSignature("ListDomains", [["ctx", "context.Context"], ["_ListRequest", /* @__PURE__ */ $.pointerType("shared.ListDomainsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListDomainsResponse")], ["err", "error"]]), $.methodSignature("ListFailoverHistory", [["ctx", "context.Context"], ["_ListRequest", /* @__PURE__ */ $.pointerType("shared.ListFailoverHistoryRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListFailoverHistoryResponse")], ["err", "error"]]), $.methodSignature("ListOpenWorkflowExecutions", [["ctx", "context.Context"], ["_ListRequest", /* @__PURE__ */ $.pointerType("shared.ListOpenWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListOpenWorkflowExecutionsResponse")], ["err", "error"]]), $.methodSignature("ListSchedules", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.ListSchedulesRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListSchedulesResponse")], ["err", "error"]]), $.methodSignature("ListTaskListPartitions", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.ListTaskListPartitionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListTaskListPartitionsResponse")], ["err", "error"]]), $.methodSignature("ListWorkflowExecutions", [["ctx", "context.Context"], ["_ListRequest", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse")], ["err", "error"]]), $.methodSignature("PauseSchedule", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.PauseScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.PauseScheduleResponse")], ["err", "error"]]), $.methodSignature("PollForActivityTask", [["ctx", "context.Context"], ["_PollRequest", /* @__PURE__ */ $.pointerType("shared.PollForActivityTaskRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse")], ["err", "error"]]), $.methodSignature("PollForDecisionTask", [["ctx", "context.Context"], ["_PollRequest", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse")], ["err", "error"]]), $.methodSignature("QueryWorkflow", [["ctx", "context.Context"], ["_QueryRequest", /* @__PURE__ */ $.pointerType("shared.QueryWorkflowRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.QueryWorkflowResponse")], ["err", "error"]]), $.methodSignature("RecordActivityTaskHeartbeat", [["ctx", "context.Context"], ["_HeartbeatRequest", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatResponse")], ["err", "error"]]), $.methodSignature("RecordActivityTaskHeartbeatByID", [["ctx", "context.Context"], ["_HeartbeatRequest", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatResponse")], ["err", "error"]]), $.methodSignature("RefreshWorkflowTasks", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.RefreshWorkflowTasksRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]]), $.methodSignature("RegisterDomain", [["ctx", "context.Context"], ["_RegisterRequest", /* @__PURE__ */ $.pointerType("shared.RegisterDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]]), $.methodSignature("RequestCancelWorkflowExecution", [["ctx", "context.Context"], ["_CancelRequest", /* @__PURE__ */ $.pointerType("shared.RequestCancelWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]]), $.methodSignature("ResetStickyTaskList", [["ctx", "context.Context"], ["_ResetRequest", /* @__PURE__ */ $.pointerType("shared.ResetStickyTaskListRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ResetStickyTaskListResponse")], ["err", "error"]]), $.methodSignature("ResetWorkflowExecution", [["ctx", "context.Context"], ["_ResetRequest", /* @__PURE__ */ $.pointerType("shared.ResetWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ResetWorkflowExecutionResponse")], ["err", "error"]]), $.methodSignature("RespondActivityTaskCanceled", [["ctx", "context.Context"], ["_CanceledRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]]), $.methodSignature("RespondActivityTaskCanceledByID", [["ctx", "context.Context"], ["_CanceledRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]]), $.methodSignature("RespondActivityTaskCompleted", [["ctx", "context.Context"], ["_CompleteRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]]), $.methodSignature("RespondActivityTaskCompletedByID", [["ctx", "context.Context"], ["_CompleteRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]]), $.methodSignature("RespondActivityTaskFailed", [["ctx", "context.Context"], ["_FailRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]]), $.methodSignature("RespondActivityTaskFailedByID", [["ctx", "context.Context"], ["_FailRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]]), $.methodSignature("RespondDecisionTaskCompleted", [["ctx", "context.Context"], ["_CompleteRequest", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedResponse")], ["err", "error"]]), $.methodSignature("RespondDecisionTaskFailed", [["ctx", "context.Context"], ["_FailedRequest", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskFailedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]]), $.methodSignature("RespondQueryTaskCompleted", [["ctx", "context.Context"], ["_CompleteRequest", /* @__PURE__ */ $.pointerType("shared.RespondQueryTaskCompletedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]]), $.methodSignature("RestartWorkflowExecution", [["ctx", "context.Context"], ["_RestartRequest", /* @__PURE__ */ $.pointerType("shared.RestartWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.RestartWorkflowExecutionResponse")], ["err", "error"]]), $.methodSignature("ScanWorkflowExecutions", [["ctx", "context.Context"], ["_ListRequest", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse")], ["err", "error"]]), $.methodSignature("SignalWithStartWorkflowExecution", [["ctx", "context.Context"], ["_SignalWithStartRequest", /* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionResponse")], ["err", "error"]]), $.methodSignature("SignalWithStartWorkflowExecutionAsync", [["ctx", "context.Context"], ["_SignalWithStartRequest", /* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionAsyncRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionAsyncResponse")], ["err", "error"]]), $.methodSignature("SignalWorkflowExecution", [["ctx", "context.Context"], ["_SignalRequest", /* @__PURE__ */ $.pointerType("shared.SignalWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]]), $.methodSignature("StartWorkflowExecution", [["ctx", "context.Context"], ["_StartRequest", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionResponse")], ["err", "error"]]), $.methodSignature("StartWorkflowExecutionAsync", [["ctx", "context.Context"], ["_StartRequest", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionAsyncRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionAsyncResponse")], ["err", "error"]]), $.methodSignature("TerminateWorkflowExecution", [["ctx", "context.Context"], ["_TerminateRequest", /* @__PURE__ */ $.pointerType("shared.TerminateWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["err", "error"]]), $.methodSignature("UnpauseSchedule", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.UnpauseScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.UnpauseScheduleResponse")], ["err", "error"]]), $.methodSignature("UpdateDomain", [["ctx", "context.Context"], ["_UpdateRequest", /* @__PURE__ */ $.pointerType("shared.UpdateDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.UpdateDomainResponse")], ["err", "error"]]), $.methodSignature("UpdateSchedule", [["ctx", "context.Context"], ["_Request", /* @__PURE__ */ $.pointerType("shared.UpdateScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [["success", /* @__PURE__ */ $.pointerType("shared.UpdateScheduleResponse")], ["err", "error"]])],
		client,
		() => [/* @__PURE__ */ $.structField("c", "thrift.Client", [0], 0, false, { pkgPath: "go.uber.org/cadence/.gen/go/cadence/workflowserviceclient" }), /* @__PURE__ */ $.structField("nwc", "thrift.NoWireClient", [1], 16, false, { pkgPath: "go.uber.org/cadence/.gen/go/cadence/workflowserviceclient" })]
	)
}

export async function New(c: transport.ClientConfig | null, opts: $.Slice<thrift.ClientOption | null>): globalThis.Promise<Interface | null> {
	return $.interfaceValue<Interface | null>((await (async () => { const __goscriptLiteralField0 = thrift.New(new thrift.Config({Service: "WorkflowService", ClientConfig: c}, true), opts); const __goscriptLiteralField1 = await thrift.NewNoWire(new thrift.Config({Service: "WorkflowService", ClientConfig: c}, true), opts); return new client({c: __goscriptLiteralField0, nwc: __goscriptLiteralField1}, true) })()), "workflowserviceclient.client", "workflowserviceclient.client")
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await yarpc.RegisterClientBuilder($.interfaceValue($.functionValue(async (c: transport.ClientConfig | null, f: reflect.StructField): globalThis.Promise<Interface | null> => {
		return await New(c, thrift.ClientBuilderOptions(c, f))
	}, ({ kind: $.TypeKind.Function, params: ["transport.ClientConfig", "reflect.StructField"], results: ["workflowserviceclient.Interface"] } as $.FunctionTypeInfo)), "func(c transport.ClientConfig, f reflect.StructField) workflowserviceclient.Interface", ({ kind: $.TypeKind.Function, params: ["transport.ClientConfig", "reflect.StructField"], results: ["workflowserviceclient.Interface"] } as $.FunctionTypeInfo)))
}

var __goscriptAwait: any

await __goscriptInit0()
