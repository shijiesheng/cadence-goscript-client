// Generated file based on client.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as s from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as auth from "@goscript/go.uber.org/cadence/internal/common/auth/index.js"

import * as isolationgroup from "@goscript/go.uber.org/cadence/internal/common/isolationgroup/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import type * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import * as __goscript_internal_domain_client from "./internal_domain_client.gs.ts"

import * as __goscript_internal_logging_tags from "./internal_logging_tags.gs.ts"

import * as __goscript_internal_schedule_client from "./internal_schedule_client.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import type * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_internal_workflow_client from "./internal_workflow_client.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_schedule from "./schedule.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_tracer from "./tracer.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_testsuite from "./workflow_testsuite.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/auth/index.js"
import "@goscript/go.uber.org/cadence/internal/common/isolationgroup/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/sync/index.js"
import "./activity.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./headers.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_domain_client.gs.ts"
import "./internal_logging_tags.gs.ts"
import "./internal_schedule_client.gs.ts"
import "./internal_utils.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_workflow.gs.ts"
import "./internal_workflow_client.gs.ts"
import "./registry.gs.ts"
import "./schedule.gs.ts"
import "./session.gs.ts"
import "./tracer.gs.ts"
import "./workflow.gs.ts"
import "./workflow_testsuite.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.Option", "internal.CancelReason", "internal.Client", "internal.ClientOptions", "internal.StartWorkflowOptions", "internal.RetryPolicy", "internal.DomainClient", "internal.WorkflowIDReusePolicy", "internal.ParentClosePolicy", "internal.QueryConsistencyLevel", "internal.ClusterAttribute", "internal.ActiveClusterSelectionPolicy"])

export type Option = {
	private(): void
}

$.registerInterfaceType(
	"internal.Option",
	null,
	[$.methodSignature("private")]
);

export type CancelReason = string

$.registerNamedValueType(
	"internal.CancelReason",
	{private: (receiver: any, ...args: any[]) => (CancelReason__private as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("private")]
);

$.registerNamedValueType(
	"*internal.CancelReason",
	{private: (receiver: any, ...args: any[]) => (CancelReason__private as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("private")]
);

export type Client = {
	CancelWorkflow(ctx: context.Context | null, workflowID: string, runID: string, opts: $.Slice<Option | null>): $.GoError | globalThis.Promise<$.GoError>
	CompleteActivity(ctx: context.Context | null, taskToken: $.Slice<number>, result: any, err: $.GoError): $.GoError | globalThis.Promise<$.GoError>
	CompleteActivityByID(ctx: context.Context | null, domain: string, workflowID: string, runID: string, activityID: string, result: any, err: $.GoError): $.GoError | globalThis.Promise<$.GoError>
	CountWorkflow(ctx: context.Context | null, request: s.CountWorkflowExecutionsRequest | $.VarRef<s.CountWorkflowExecutionsRequest> | null): [s.CountWorkflowExecutionsResponse | $.VarRef<s.CountWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[s.CountWorkflowExecutionsResponse | $.VarRef<s.CountWorkflowExecutionsResponse> | null, $.GoError]>
	DescribeTaskList(ctx: context.Context | null, tasklist: string, tasklistType: s.TaskListType): [s.DescribeTaskListResponse | $.VarRef<s.DescribeTaskListResponse> | null, $.GoError] | globalThis.Promise<[s.DescribeTaskListResponse | $.VarRef<s.DescribeTaskListResponse> | null, $.GoError]>
	DescribeWorkflowExecution(ctx: context.Context | null, workflowID: string, runID: string): [s.DescribeWorkflowExecutionResponse | $.VarRef<s.DescribeWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[s.DescribeWorkflowExecutionResponse | $.VarRef<s.DescribeWorkflowExecutionResponse> | null, $.GoError]>
	DescribeWorkflowExecutionWithOptions(ctx: context.Context | null, request: __goscript_internal_workflow_client.DescribeWorkflowExecutionWithOptionsRequest | $.VarRef<__goscript_internal_workflow_client.DescribeWorkflowExecutionWithOptionsRequest> | null): [s.DescribeWorkflowExecutionResponse | $.VarRef<s.DescribeWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[s.DescribeWorkflowExecutionResponse | $.VarRef<s.DescribeWorkflowExecutionResponse> | null, $.GoError]>
	ExecuteWorkflow(ctx: context.Context | null, options: StartWorkflowOptions, workflow: any, args: $.Slice<any>): [__goscript_internal_workflow_client.WorkflowRun | null, $.GoError] | globalThis.Promise<[__goscript_internal_workflow_client.WorkflowRun | null, $.GoError]>
	GetSearchAttributes(ctx: context.Context | null): [s.GetSearchAttributesResponse | $.VarRef<s.GetSearchAttributesResponse> | null, $.GoError] | globalThis.Promise<[s.GetSearchAttributesResponse | $.VarRef<s.GetSearchAttributesResponse> | null, $.GoError]>
	GetWorkflow(ctx: context.Context | null, workflowID: string, runID: string): __goscript_internal_workflow_client.WorkflowRun | null
	GetWorkflowHistory(ctx: context.Context | null, workflowID: string, runID: string, isLongPoll: boolean, filterType: s.HistoryEventFilterType): __goscript_internal_workflow_client.HistoryEventIterator | null
	GetWorkflowHistoryWithOptions(ctx: context.Context | null, request: __goscript_internal_workflow_client.GetWorkflowHistoryWithOptionsRequest | $.VarRef<__goscript_internal_workflow_client.GetWorkflowHistoryWithOptionsRequest> | null): __goscript_internal_workflow_client.HistoryEventIterator | null
	ListArchivedWorkflow(ctx: context.Context | null, request: s.ListArchivedWorkflowExecutionsRequest | $.VarRef<s.ListArchivedWorkflowExecutionsRequest> | null): [s.ListArchivedWorkflowExecutionsResponse | $.VarRef<s.ListArchivedWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[s.ListArchivedWorkflowExecutionsResponse | $.VarRef<s.ListArchivedWorkflowExecutionsResponse> | null, $.GoError]>
	ListClosedWorkflow(ctx: context.Context | null, request: s.ListClosedWorkflowExecutionsRequest | $.VarRef<s.ListClosedWorkflowExecutionsRequest> | null): [s.ListClosedWorkflowExecutionsResponse | $.VarRef<s.ListClosedWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[s.ListClosedWorkflowExecutionsResponse | $.VarRef<s.ListClosedWorkflowExecutionsResponse> | null, $.GoError]>
	ListOpenWorkflow(ctx: context.Context | null, request: s.ListOpenWorkflowExecutionsRequest | $.VarRef<s.ListOpenWorkflowExecutionsRequest> | null): [s.ListOpenWorkflowExecutionsResponse | $.VarRef<s.ListOpenWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[s.ListOpenWorkflowExecutionsResponse | $.VarRef<s.ListOpenWorkflowExecutionsResponse> | null, $.GoError]>
	ListWorkflow(ctx: context.Context | null, request: s.ListWorkflowExecutionsRequest | $.VarRef<s.ListWorkflowExecutionsRequest> | null): [s.ListWorkflowExecutionsResponse | $.VarRef<s.ListWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[s.ListWorkflowExecutionsResponse | $.VarRef<s.ListWorkflowExecutionsResponse> | null, $.GoError]>
	QueryWorkflow(ctx: context.Context | null, workflowID: string, runID: string, queryType: string, args: $.Slice<any>): [__goscript_encoded.Value | null, $.GoError] | globalThis.Promise<[__goscript_encoded.Value | null, $.GoError]>
	QueryWorkflowWithOptions(ctx: context.Context | null, request: __goscript_internal_workflow_client.QueryWorkflowWithOptionsRequest | $.VarRef<__goscript_internal_workflow_client.QueryWorkflowWithOptionsRequest> | null): [__goscript_internal_workflow_client.QueryWorkflowWithOptionsResponse | $.VarRef<__goscript_internal_workflow_client.QueryWorkflowWithOptionsResponse> | null, $.GoError] | globalThis.Promise<[__goscript_internal_workflow_client.QueryWorkflowWithOptionsResponse | $.VarRef<__goscript_internal_workflow_client.QueryWorkflowWithOptionsResponse> | null, $.GoError]>
	RecordActivityHeartbeat(ctx: context.Context | null, taskToken: $.Slice<number>, details: $.Slice<any>): $.GoError | globalThis.Promise<$.GoError>
	RecordActivityHeartbeatByID(ctx: context.Context | null, domain: string, workflowID: string, runID: string, activityID: string, details: $.Slice<any>): $.GoError | globalThis.Promise<$.GoError>
	RefreshWorkflowTasks(ctx: context.Context | null, workflowID: string, runID: string): $.GoError | globalThis.Promise<$.GoError>
	ResetWorkflow(ctx: context.Context | null, request: s.ResetWorkflowExecutionRequest | $.VarRef<s.ResetWorkflowExecutionRequest> | null): [s.ResetWorkflowExecutionResponse | $.VarRef<s.ResetWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[s.ResetWorkflowExecutionResponse | $.VarRef<s.ResetWorkflowExecutionResponse> | null, $.GoError]>
	ScanWorkflow(ctx: context.Context | null, request: s.ListWorkflowExecutionsRequest | $.VarRef<s.ListWorkflowExecutionsRequest> | null): [s.ListWorkflowExecutionsResponse | $.VarRef<s.ListWorkflowExecutionsResponse> | null, $.GoError] | globalThis.Promise<[s.ListWorkflowExecutionsResponse | $.VarRef<s.ListWorkflowExecutionsResponse> | null, $.GoError]>
	ScheduleClient(): __goscript_internal_schedule_client.ScheduleClient | null
	SignalWithStartWorkflow(ctx: context.Context | null, workflowID: string, signalName: string, signalArg: any, options: StartWorkflowOptions, workflow: any, workflowArgs: $.Slice<any>): [__goscript_workflow.WorkflowExecution | $.VarRef<__goscript_workflow.WorkflowExecution> | null, $.GoError] | globalThis.Promise<[__goscript_workflow.WorkflowExecution | $.VarRef<__goscript_workflow.WorkflowExecution> | null, $.GoError]>
	SignalWithStartWorkflowAsync(ctx: context.Context | null, workflowID: string, signalName: string, signalArg: any, options: StartWorkflowOptions, workflow: any, workflowArgs: $.Slice<any>): [__goscript_workflow.WorkflowExecutionAsync | $.VarRef<__goscript_workflow.WorkflowExecutionAsync> | null, $.GoError] | globalThis.Promise<[__goscript_workflow.WorkflowExecutionAsync | $.VarRef<__goscript_workflow.WorkflowExecutionAsync> | null, $.GoError]>
	SignalWorkflow(ctx: context.Context | null, workflowID: string, runID: string, signalName: string, arg: any): $.GoError | globalThis.Promise<$.GoError>
	StartWorkflow(ctx: context.Context | null, options: StartWorkflowOptions, workflow: any, args: $.Slice<any>): [__goscript_workflow.WorkflowExecution | $.VarRef<__goscript_workflow.WorkflowExecution> | null, $.GoError] | globalThis.Promise<[__goscript_workflow.WorkflowExecution | $.VarRef<__goscript_workflow.WorkflowExecution> | null, $.GoError]>
	StartWorkflowAsync(ctx: context.Context | null, options: StartWorkflowOptions, workflow: any, args: $.Slice<any>): [__goscript_workflow.WorkflowExecutionAsync | $.VarRef<__goscript_workflow.WorkflowExecutionAsync> | null, $.GoError] | globalThis.Promise<[__goscript_workflow.WorkflowExecutionAsync | $.VarRef<__goscript_workflow.WorkflowExecutionAsync> | null, $.GoError]>
	TerminateWorkflow(ctx: context.Context | null, workflowID: string, runID: string, reason: string, details: $.Slice<number>): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"internal.Client",
	null,
	[$.methodSignature("CancelWorkflow", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.sliceType("internal.Option")]], ["error"]), $.methodSignature("CompleteActivity", [["ctx", "context.Context"], ["taskToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["result", { kind: $.TypeKind.Interface, methods: [] }], ["err", "error"]], ["error"]), $.methodSignature("CompleteActivityByID", [["ctx", "context.Context"], ["domain", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["activityID", /* @__PURE__ */ $.basicType("string")], ["result", { kind: $.TypeKind.Interface, methods: [] }], ["err", "error"]], ["error"]), $.methodSignature("CountWorkflow", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.CountWorkflowExecutionsRequest")]], [/* @__PURE__ */ $.pointerType("shared.CountWorkflowExecutionsResponse"), "error"]), $.methodSignature("DescribeTaskList", [["ctx", "context.Context"], ["tasklist", /* @__PURE__ */ $.basicType("string")], ["tasklistType", /* @__PURE__ */ $.basicType("int32", "shared.TaskListType")]], [/* @__PURE__ */ $.pointerType("shared.DescribeTaskListResponse"), "error"]), $.methodSignature("DescribeWorkflowExecution", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("shared.DescribeWorkflowExecutionResponse"), "error"]), $.methodSignature("DescribeWorkflowExecutionWithOptions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("internal.DescribeWorkflowExecutionWithOptionsRequest")]], [/* @__PURE__ */ $.pointerType("shared.DescribeWorkflowExecutionResponse"), "error"]), $.methodSignature("ExecuteWorkflow", [["ctx", "context.Context"], ["options", "internal.StartWorkflowOptions"], ["workflow", { kind: $.TypeKind.Interface, methods: [] }], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.WorkflowRun", "error"]), $.methodSignature("GetSearchAttributes", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("shared.GetSearchAttributesResponse"), "error"]), $.methodSignature("GetWorkflow", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")]], ["internal.WorkflowRun"]), $.methodSignature("GetWorkflowHistory", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["isLongPoll", /* @__PURE__ */ $.basicType("bool")], ["filterType", /* @__PURE__ */ $.basicType("int32", "shared.HistoryEventFilterType")]], ["internal.HistoryEventIterator"]), $.methodSignature("GetWorkflowHistoryWithOptions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("internal.GetWorkflowHistoryWithOptionsRequest")]], ["internal.HistoryEventIterator"]), $.methodSignature("ListArchivedWorkflow", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListArchivedWorkflowExecutionsRequest")]], [/* @__PURE__ */ $.pointerType("shared.ListArchivedWorkflowExecutionsResponse"), "error"]), $.methodSignature("ListClosedWorkflow", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListClosedWorkflowExecutionsRequest")]], [/* @__PURE__ */ $.pointerType("shared.ListClosedWorkflowExecutionsResponse"), "error"]), $.methodSignature("ListOpenWorkflow", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListOpenWorkflowExecutionsRequest")]], [/* @__PURE__ */ $.pointerType("shared.ListOpenWorkflowExecutionsResponse"), "error"]), $.methodSignature("ListWorkflow", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsRequest")]], [/* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse"), "error"]), $.methodSignature("QueryWorkflow", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["queryType", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.Value", "error"]), $.methodSignature("QueryWorkflowWithOptions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("internal.QueryWorkflowWithOptionsRequest")]], [/* @__PURE__ */ $.pointerType("internal.QueryWorkflowWithOptionsResponse"), "error"]), $.methodSignature("RecordActivityHeartbeat", [["ctx", "context.Context"], ["taskToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["details", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"]), $.methodSignature("RecordActivityHeartbeatByID", [["ctx", "context.Context"], ["domain", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["activityID", /* @__PURE__ */ $.basicType("string")], ["details", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"]), $.methodSignature("RefreshWorkflowTasks", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("ResetWorkflow", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ResetWorkflowExecutionRequest")]], [/* @__PURE__ */ $.pointerType("shared.ResetWorkflowExecutionResponse"), "error"]), $.methodSignature("ScanWorkflow", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsRequest")]], [/* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse"), "error"]), $.methodSignature("ScheduleClient", [], ["internal.ScheduleClient"]), $.methodSignature("SignalWithStartWorkflow", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["signalArg", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.StartWorkflowOptions"], ["workflow", { kind: $.TypeKind.Interface, methods: [] }], ["workflowArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("internal.WorkflowExecution"), "error"]), $.methodSignature("SignalWithStartWorkflowAsync", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["signalArg", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.StartWorkflowOptions"], ["workflow", { kind: $.TypeKind.Interface, methods: [] }], ["workflowArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("internal.WorkflowExecutionAsync"), "error"]), $.methodSignature("SignalWorkflow", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["arg", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("StartWorkflow", [["ctx", "context.Context"], ["options", "internal.StartWorkflowOptions"], ["workflow", { kind: $.TypeKind.Interface, methods: [] }], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("internal.WorkflowExecution"), "error"]), $.methodSignature("StartWorkflowAsync", [["ctx", "context.Context"], ["options", "internal.StartWorkflowOptions"], ["workflow", { kind: $.TypeKind.Interface, methods: [] }], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("internal.WorkflowExecutionAsync"), "error"]), $.methodSignature("TerminateWorkflow", [["ctx", "context.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["reason", /* @__PURE__ */ $.basicType("string")], ["details", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export type DomainClient = {
	Describe(ctx: context.Context | null, name: string): [s.DescribeDomainResponse | $.VarRef<s.DescribeDomainResponse> | null, $.GoError] | globalThis.Promise<[s.DescribeDomainResponse | $.VarRef<s.DescribeDomainResponse> | null, $.GoError]>
	Failover(ctx: context.Context | null, request: s.FailoverDomainRequest | $.VarRef<s.FailoverDomainRequest> | null): $.GoError | globalThis.Promise<$.GoError>
	Register(ctx: context.Context | null, request: s.RegisterDomainRequest | $.VarRef<s.RegisterDomainRequest> | null): $.GoError | globalThis.Promise<$.GoError>
	Update(ctx: context.Context | null, request: s.UpdateDomainRequest | $.VarRef<s.UpdateDomainRequest> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"internal.DomainClient",
	null,
	[$.methodSignature("Describe", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("shared.DescribeDomainResponse"), "error"]), $.methodSignature("Failover", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.FailoverDomainRequest")]], ["error"]), $.methodSignature("Register", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RegisterDomainRequest")]], ["error"]), $.methodSignature("Update", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.UpdateDomainRequest")]], ["error"])]
);

export type WorkflowIDReusePolicy = number

$.registerNamedValueType(
	"internal.WorkflowIDReusePolicy",
	{toThriftPtr: (receiver: any, ...args: any[]) => (WorkflowIDReusePolicy_toThriftPtr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("toThriftPtr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.WorkflowIdReusePolicy"))])]
);

$.registerNamedValueType(
	"*internal.WorkflowIDReusePolicy",
	{toThriftPtr: (receiver: any, ...args: any[]) => (WorkflowIDReusePolicy_toThriftPtr as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("toThriftPtr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.WorkflowIdReusePolicy"))])]
);

export type ParentClosePolicy = number

$.registerNamedValueType(
	"internal.ParentClosePolicy",
	{toThriftPtr: (receiver: any, ...args: any[]) => (ParentClosePolicy_toThriftPtr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("toThriftPtr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.ParentClosePolicy"))])]
);

$.registerNamedValueType(
	"*internal.ParentClosePolicy",
	{toThriftPtr: (receiver: any, ...args: any[]) => (ParentClosePolicy_toThriftPtr as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("toThriftPtr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.ParentClosePolicy"))])]
);

export type QueryConsistencyLevel = number

export class ClientOptions {
	public get MetricsScope(): tally.Scope | null {
		return this._fields.MetricsScope
	}

	public set MetricsScope(value: tally.Scope | null) {
		this._fields.MetricsScope = value
	}

	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
	}

	public get IsolationGroup(): string {
		return this._fields.IsolationGroup
	}

	public set IsolationGroup(value: string) {
		this._fields.IsolationGroup = value
	}

	public get DataConverter(): __goscript_encoded.DataConverter | null {
		return this._fields.DataConverter
	}

	public set DataConverter(value: __goscript_encoded.DataConverter | null) {
		this._fields.DataConverter = value
	}

	public get Tracer(): opentracing.Tracer | null {
		return this._fields.Tracer
	}

	public set Tracer(value: opentracing.Tracer | null) {
		this._fields.Tracer = value
	}

	public get ContextPropagators(): $.Slice<__goscript_headers.ContextPropagator | null> {
		return this._fields.ContextPropagators
	}

	public set ContextPropagators(value: $.Slice<__goscript_headers.ContextPropagator | null>) {
		this._fields.ContextPropagators = value
	}

	public get FeatureFlags(): __goscript_internal_utils.FeatureFlags {
		return this._fields.FeatureFlags
	}

	public set FeatureFlags(value: __goscript_internal_utils.FeatureFlags) {
		this._fields.FeatureFlags = value
	}

	public get Authorization(): auth.AuthorizationProvider | null {
		return this._fields.Authorization
	}

	public set Authorization(value: auth.AuthorizationProvider | null) {
		this._fields.Authorization = value
	}

	public _fields: {
		MetricsScope: tally.Scope | null
		Identity: string
		IsolationGroup: string
		DataConverter: __goscript_encoded.DataConverter | null
		Tracer: opentracing.Tracer | null
		ContextPropagators: $.Slice<__goscript_headers.ContextPropagator | null>
		FeatureFlags: __goscript_internal_utils.FeatureFlags
		Authorization: auth.AuthorizationProvider | null
	}

	constructor(init?: Partial<{MetricsScope?: tally.Scope | null, Identity?: string, IsolationGroup?: string, DataConverter?: __goscript_encoded.DataConverter | null, Tracer?: opentracing.Tracer | null, ContextPropagators?: $.Slice<__goscript_headers.ContextPropagator | null>, FeatureFlags?: __goscript_internal_utils.FeatureFlags, Authorization?: auth.AuthorizationProvider | null}>, __goscriptValue?: boolean) {
		this._fields = {
			MetricsScope: init?.MetricsScope ?? (null! as tally.Scope | null),
			Identity: init?.Identity ?? ("" as string),
			IsolationGroup: init?.IsolationGroup ?? ("" as string),
			DataConverter: init?.DataConverter ?? (null! as __goscript_encoded.DataConverter | null),
			Tracer: init?.Tracer ?? (null! as opentracing.Tracer | null),
			ContextPropagators: init?.ContextPropagators ?? (null! as $.Slice<__goscript_headers.ContextPropagator | null>),
			FeatureFlags: init?.FeatureFlags ? init.FeatureFlags.clone() : new __goscript_internal_utils.FeatureFlags(undefined, true),
			Authorization: init?.Authorization ?? (null! as auth.AuthorizationProvider | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientOptions {
		return new ClientOptions(this, true)
	}

	public __goscriptAssign(source: ClientOptions): void {
		const target = this._fields
		const values = source._fields
		target.MetricsScope = $.assignFieldValue(target.MetricsScope, values.MetricsScope, "tally.Scope")
		target.Identity = values.Identity
		target.IsolationGroup = values.IsolationGroup
		target.DataConverter = $.assignFieldValue(target.DataConverter, values.DataConverter, "internal.DataConverter")
		target.Tracer = $.assignFieldValue(target.Tracer, values.Tracer, "opentracing.Tracer")
		target.ContextPropagators = values.ContextPropagators
		$.assignStruct(target.FeatureFlags, values.FeatureFlags)
		target.Authorization = $.assignFieldValue(target.Authorization, values.Authorization, "auth.AuthorizationProvider")
	}

	static __typeInfo = $.registerStructType(
		"internal.ClientOptions",
		() => new ClientOptions(),
		() => [],
		ClientOptions,
		() => [/* @__PURE__ */ $.structField("MetricsScope", "tally.Scope", [0], 0, true), /* @__PURE__ */ $.structField("Identity", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("IsolationGroup", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("DataConverter", "internal.DataConverter", [3], 48, true), /* @__PURE__ */ $.structField("Tracer", "opentracing.Tracer", [4], 64, true), /* @__PURE__ */ $.structField("ContextPropagators", /* @__PURE__ */ $.sliceType("internal.ContextPropagator"), [5], 80, true), /* @__PURE__ */ $.structField("FeatureFlags", "internal.FeatureFlags", [6], 104, true), /* @__PURE__ */ $.structField("Authorization", "auth.AuthorizationProvider", [7], 120, true)]
	)
}

export class StartWorkflowOptions {
	// ID - The business identifier of the workflow execution.
	// Optional: defaulted to a uuid.
	public get ID(): string {
		return this._fields.ID
	}

	public set ID(value: string) {
		this._fields.ID = value
	}

	// RequestID - Unique identifier for this start request. Used for idempotency so retries of the
	// same start or signal-with-start call do not create duplicate executions.
	// Must be a UUID string; the client rejects other values before sending the request.
	// Optional: defaulted to a generated UUID.
	//
	// To derive a RequestID deterministically from a business string, use a name-based UUID
	// (RFC 4122 version 5). The same namespace and name always produce the same UUID:
	//
	//   ns := uuid.Parse("6ba7b812-9dad-11d1-80b4-00c04fd430c8") // or uuid.NameSpace_OID
	//   options.RequestID = uuid.NewSHA1(ns, []byte("order-123:start")).String()
	//
	// Prefer a stable, service-specific namespace UUID so names do not collide with UUIDs
	// generated for other purposes. Do not hash the business string with SHA-1/MD5 and
	// format it yourself; only RFC 4122 UUID strings are accepted.
	public get RequestID(): string {
		return this._fields.RequestID
	}

	public set RequestID(value: string) {
		this._fields.RequestID = value
	}

	// TaskList - The decisions of the workflow are scheduled on this queue.
	// This is also the default task list on which activities are scheduled. The workflow author can choose
	// to override this using activity options.
	// Mandatory: No default.
	public get TaskList(): string {
		return this._fields.TaskList
	}

	public set TaskList(value: string) {
		this._fields.TaskList = value
	}

	// ExecutionStartToCloseTimeout - The timeout for duration of workflow execution.
	// The resolution is seconds.
	// Mandatory: No default.
	public get ExecutionStartToCloseTimeout(): time.Duration {
		return this._fields.ExecutionStartToCloseTimeout
	}

	public set ExecutionStartToCloseTimeout(value: time.Duration) {
		this._fields.ExecutionStartToCloseTimeout = value
	}

	// DecisionTaskStartToCloseTimeout - The timeout for processing decision task from the time the worker
	// pulled this task. If a decision task is lost, it is retried after this timeout.
	// The resolution is seconds.
	// Optional: defaulted to 10 secs.
	public get DecisionTaskStartToCloseTimeout(): time.Duration {
		return this._fields.DecisionTaskStartToCloseTimeout
	}

	public set DecisionTaskStartToCloseTimeout(value: time.Duration) {
		this._fields.DecisionTaskStartToCloseTimeout = value
	}

	// WorkflowIDReusePolicy - Whether server allow reuse of workflow ID, can be useful
	// for dedup logic if set to WorkflowIdReusePolicyRejectDuplicate.
	// Optional: defaulted to WorkflowIDReusePolicyAllowDuplicateFailedOnly.
	public get WorkflowIDReusePolicy(): WorkflowIDReusePolicy {
		return this._fields.WorkflowIDReusePolicy
	}

	public set WorkflowIDReusePolicy(value: WorkflowIDReusePolicy) {
		this._fields.WorkflowIDReusePolicy = value
	}

	// RetryPolicy - Optional retry policy for workflow. If a retry policy is specified, in case of workflow failure
	// server will start new workflow execution if needed based on the retry policy.
	public get RetryPolicy(): RetryPolicy | $.VarRef<RetryPolicy> | null {
		return this._fields.RetryPolicy
	}

	public set RetryPolicy(value: RetryPolicy | $.VarRef<RetryPolicy> | null) {
		this._fields.RetryPolicy = value
	}

	// CronSchedule - Optional cron schedule for workflow. If a cron schedule is specified, the workflow will run
	// as a cron based on the schedule. The scheduling will be based on UTC time. Schedule for next run only happen
	// after the current run is completed/failed/timeout. If a RetryPolicy is also supplied, and the workflow failed
	// or timeout, the workflow will be retried based on the retry policy. While the workflow is retrying, it won't
	// schedule its next run. If next schedule is due while workflow is running (or retrying), then it will skip that
	// schedule. Cron workflow will not stop until it is terminated or cancelled (by returning cadence.CanceledError).
	// The cron spec is as following:
	// ┌───────────── minute (0 - 59)
	// │ ┌───────────── hour (0 - 23)
	// │ │ ┌───────────── day of the month (1 - 31)
	// │ │ │ ┌───────────── month (1 - 12)
	// │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday)
	// │ │ │ │ │
	// │ │ │ │ │
	// * * * * *
	public get CronSchedule(): string {
		return this._fields.CronSchedule
	}

	public set CronSchedule(value: string) {
		this._fields.CronSchedule = value
	}

	// Memo - Optional non-indexed info that will be shown in list workflow.
	public get Memo(): globalThis.Map<string, any> | null {
		return this._fields.Memo
	}

	public set Memo(value: globalThis.Map<string, any> | null) {
		this._fields.Memo = value
	}

	// SearchAttributes - Optional indexed info that can be used in query of List/Scan/Count workflow APIs (only
	// supported when Cadence server is using ElasticSearch). The key and value type must be registered on Cadence server side.
	// Use GetSearchAttributes API to get valid key and corresponding value type.
	public get SearchAttributes(): globalThis.Map<string, any> | null {
		return this._fields.SearchAttributes
	}

	public set SearchAttributes(value: globalThis.Map<string, any> | null) {
		this._fields.SearchAttributes = value
	}

	// DelayStartSeconds - Seconds to delay the workflow start
	// The resolution is seconds.
	// Optional: defaulted to 0 seconds
	public get DelayStart(): time.Duration {
		return this._fields.DelayStart
	}

	public set DelayStart(value: time.Duration) {
		this._fields.DelayStart = value
	}

	// JitterStart - Seconds to jitter the workflow start. For example, if set to 10, the workflow will start some time between 0-10 seconds.
	// This works with CronSchedule and with DelayStart.
	// Optional: defaulted to 0 seconds
	public get JitterStart(): time.Duration {
		return this._fields.JitterStart
	}

	public set JitterStart(value: time.Duration) {
		this._fields.JitterStart = value
	}

	// FirstRunAt - Specific time (in RFC 3339 format) to let the first run of the workflow to start at,
	// This will only be used and override DelayStart and JitterStart if provided in the first run
	// Optional: defaulted to Unix epoch time
	public get FirstRunAt(): time.Time {
		return this._fields.FirstRunAt
	}

	public set FirstRunAt(value: time.Time) {
		this._fields.FirstRunAt = value
	}

	// CronOverlapPolicy - Policy for handling cron workflow overlaps when a previous execution is still running by the
	// start of next scheduled execution.
	//
	// Example scenario: A workflow scheduled to run every 5 minutes takes 8 minutes to complete in one of the runs.
	// Without CronOverlapPolicy, assuming the start of that run r1 is t0, then the next scheduled run r2 that is
	// supposed to run at t0+5 is skipped, and the next run r3 is scheduled at t0+10.
	//
	// Currently supported values are:
	// - CronOverlapPolicySkip: skip the new execution if the previous one takes too long.
	//   This is the default behavior and is the same with not specifying this option.
	//   Run r2 will be skipped and next run will be scheduled at t0+10.
	// - CronOverlapPolicyBufferOne: start the next run immediately after the previous one that takes too long completes.
	//   In this case, run r2 will be started at t0+8, and the next run r3 will be scheduled at t0+10.
	//   (assuming r2 finishes by then, otherwise r3 will start immediately after r2 completes).
	//
	// Note: JitterStart remains used when determining the actual start time of executions.
	// Optional: defaulted to CronOverlapPolicySkip
	public get CronOverlapPolicy(): s.CronOverlapPolicy {
		return this._fields.CronOverlapPolicy
	}

	public set CronOverlapPolicy(value: s.CronOverlapPolicy) {
		this._fields.CronOverlapPolicy = value
	}

	// ActiveClusterSelectionPolicy - Policy for selecting the active cluster to start the workflow execution on for active-active domains.
	// Optional: defaulted to nil, if it's nil, the active cluster of the workflow is the domain's active cluster.
	public get ActiveClusterSelectionPolicy(): ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null {
		return this._fields.ActiveClusterSelectionPolicy
	}

	public set ActiveClusterSelectionPolicy(value: ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null) {
		this._fields.ActiveClusterSelectionPolicy = value
	}

	public _fields: {
		ID: string
		RequestID: string
		TaskList: string
		ExecutionStartToCloseTimeout: time.Duration
		DecisionTaskStartToCloseTimeout: time.Duration
		WorkflowIDReusePolicy: WorkflowIDReusePolicy
		RetryPolicy: RetryPolicy | $.VarRef<RetryPolicy> | null
		CronSchedule: string
		Memo: globalThis.Map<string, any> | null
		SearchAttributes: globalThis.Map<string, any> | null
		DelayStart: time.Duration
		JitterStart: time.Duration
		FirstRunAt: time.Time
		CronOverlapPolicy: s.CronOverlapPolicy
		ActiveClusterSelectionPolicy: ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null
	}

	constructor(init?: Partial<{ID?: string, RequestID?: string, TaskList?: string, ExecutionStartToCloseTimeout?: time.Duration, DecisionTaskStartToCloseTimeout?: time.Duration, WorkflowIDReusePolicy?: WorkflowIDReusePolicy, RetryPolicy?: RetryPolicy | $.VarRef<RetryPolicy> | null, CronSchedule?: string, Memo?: globalThis.Map<string, any> | null, SearchAttributes?: globalThis.Map<string, any> | null, DelayStart?: time.Duration, JitterStart?: time.Duration, FirstRunAt?: time.Time, CronOverlapPolicy?: s.CronOverlapPolicy, ActiveClusterSelectionPolicy?: ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ID: init?.ID ?? ("" as string),
			RequestID: init?.RequestID ?? ("" as string),
			TaskList: init?.TaskList ?? ("" as string),
			ExecutionStartToCloseTimeout: init?.ExecutionStartToCloseTimeout ?? (0n as time.Duration),
			DecisionTaskStartToCloseTimeout: init?.DecisionTaskStartToCloseTimeout ?? (0n as time.Duration),
			WorkflowIDReusePolicy: init?.WorkflowIDReusePolicy ?? (0 as WorkflowIDReusePolicy),
			RetryPolicy: init?.RetryPolicy ?? (null! as RetryPolicy | $.VarRef<RetryPolicy> | null),
			CronSchedule: init?.CronSchedule ?? ("" as string),
			Memo: init?.Memo ?? (null! as globalThis.Map<string, any> | null),
			SearchAttributes: init?.SearchAttributes ?? (null! as globalThis.Map<string, any> | null),
			DelayStart: init?.DelayStart ?? (0n as time.Duration),
			JitterStart: init?.JitterStart ?? (0n as time.Duration),
			FirstRunAt: init?.FirstRunAt ? $.markAsStructValue($.cloneStructValue(init.FirstRunAt)) : $.markAsStructValue(new time.Time()),
			CronOverlapPolicy: init?.CronOverlapPolicy ?? (0 as s.CronOverlapPolicy),
			ActiveClusterSelectionPolicy: init?.ActiveClusterSelectionPolicy ?? (null! as ActiveClusterSelectionPolicy | $.VarRef<ActiveClusterSelectionPolicy> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StartWorkflowOptions {
		return new StartWorkflowOptions(this, true)
	}

	public __goscriptAssign(source: StartWorkflowOptions): void {
		const target = this._fields
		const values = source._fields
		target.ID = values.ID
		target.RequestID = values.RequestID
		target.TaskList = values.TaskList
		target.ExecutionStartToCloseTimeout = values.ExecutionStartToCloseTimeout
		target.DecisionTaskStartToCloseTimeout = values.DecisionTaskStartToCloseTimeout
		target.WorkflowIDReusePolicy = values.WorkflowIDReusePolicy
		target.RetryPolicy = values.RetryPolicy
		target.CronSchedule = values.CronSchedule
		target.Memo = values.Memo
		target.SearchAttributes = values.SearchAttributes
		target.DelayStart = values.DelayStart
		target.JitterStart = values.JitterStart
		$.assignStruct(target.FirstRunAt, values.FirstRunAt)
		target.CronOverlapPolicy = values.CronOverlapPolicy
		target.ActiveClusterSelectionPolicy = values.ActiveClusterSelectionPolicy
	}

	static __typeInfo = $.registerStructType(
		"internal.StartWorkflowOptions",
		() => new StartWorkflowOptions(),
		() => [],
		StartWorkflowOptions,
		() => [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("RequestID", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("TaskList", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("ExecutionStartToCloseTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 48, true), /* @__PURE__ */ $.structField("DecisionTaskStartToCloseTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [4], 56, true), /* @__PURE__ */ $.structField("WorkflowIDReusePolicy", /* @__PURE__ */ $.basicType("int", "internal.WorkflowIDReusePolicy"), [5], 64, true), /* @__PURE__ */ $.structField("RetryPolicy", /* @__PURE__ */ $.pointerType("internal.RetryPolicy"), [6], 72, true), /* @__PURE__ */ $.structField("CronSchedule", /* @__PURE__ */ $.basicType("string"), [7], 80, true), /* @__PURE__ */ $.structField("Memo", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }), [8], 96, true), /* @__PURE__ */ $.structField("SearchAttributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }), [9], 104, true), /* @__PURE__ */ $.structField("DelayStart", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [10], 112, true), /* @__PURE__ */ $.structField("JitterStart", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [11], 120, true), /* @__PURE__ */ $.structField("FirstRunAt", "time.Time", [12], 128, true), /* @__PURE__ */ $.structField("CronOverlapPolicy", /* @__PURE__ */ $.basicType("int32", "shared.CronOverlapPolicy"), [13], 152, true), /* @__PURE__ */ $.structField("ActiveClusterSelectionPolicy", /* @__PURE__ */ $.pointerType("internal.ActiveClusterSelectionPolicy"), [14], 160, true)]
	)
}

export class RetryPolicy {
	// Backoff interval for the first retry. If coefficient is 1.0 then it is used for all retries.
	// Required, no default value.
	public get InitialInterval(): time.Duration {
		return this._fields.InitialInterval
	}

	public set InitialInterval(value: time.Duration) {
		this._fields.InitialInterval = value
	}

	// Coefficient used to calculate the next retry backoff interval.
	// The next retry interval is previous interval multiplied by this coefficient.
	// Must be 1 or larger. Default is 2.0.
	public get BackoffCoefficient(): number {
		return this._fields.BackoffCoefficient
	}

	public set BackoffCoefficient(value: number) {
		this._fields.BackoffCoefficient = value
	}

	// Maximum backoff interval between retries. Exponential backoff leads to interval increase.
	// This value is the cap of the interval. Default is 100x of initial interval.
	public get MaximumInterval(): time.Duration {
		return this._fields.MaximumInterval
	}

	public set MaximumInterval(value: time.Duration) {
		this._fields.MaximumInterval = value
	}

	// Maximum time to retry.
	// Either MaximumAttempts or ExpirationInterval must be set.
	// Retrying will stop when either MaximumAttempts is reached or ExpirationInterval is exceeded, whichever comes first.
	public get ExpirationInterval(): time.Duration {
		return this._fields.ExpirationInterval
	}

	public set ExpirationInterval(value: time.Duration) {
		this._fields.ExpirationInterval = value
	}

	// Maximum number of attempts.
	// The total attempts includes the initial attempt. Setting this to 1 means 0 retries (only the initial attempt).
	// If set to 0 the number of attempts is unlimited. This is the default.
	// Either MaximumAttempts or ExpirationInterval must be set.
	// Retrying will stop when either MaximumAttempts is reached or ExpirationInterval is exceeded, whichever comes first.
	public get MaximumAttempts(): number {
		return this._fields.MaximumAttempts
	}

	public set MaximumAttempts(value: number) {
		this._fields.MaximumAttempts = value
	}

	// Non-Retriable errors. This is optional. Cadence server will stop retry if error reason matches this list.
	// Error reason for custom error is specified when your activity/workflow return cadence.NewCustomError(reason).
	// Error reason for panic error is "cadenceInternal:Panic".
	// Error reason for any other error is "cadenceInternal:Generic".
	// Error reason for timeouts is: "cadenceInternal:Timeout TIMEOUT_TYPE". TIMEOUT_TYPE could be START_TO_CLOSE or HEARTBEAT.
	// Note, cancellation is not a failure, so it won't be retried.
	public get NonRetriableErrorReasons(): $.Slice<string> {
		return this._fields.NonRetriableErrorReasons
	}

	public set NonRetriableErrorReasons(value: $.Slice<string>) {
		this._fields.NonRetriableErrorReasons = value
	}

	public _fields: {
		InitialInterval: time.Duration
		BackoffCoefficient: number
		MaximumInterval: time.Duration
		ExpirationInterval: time.Duration
		MaximumAttempts: number
		NonRetriableErrorReasons: $.Slice<string>
	}

	constructor(init?: Partial<{InitialInterval?: time.Duration, BackoffCoefficient?: number, MaximumInterval?: time.Duration, ExpirationInterval?: time.Duration, MaximumAttempts?: number, NonRetriableErrorReasons?: $.Slice<string>}>, __goscriptValue?: boolean) {
		this._fields = {
			InitialInterval: init?.InitialInterval ?? (0n as time.Duration),
			BackoffCoefficient: init?.BackoffCoefficient ?? (0 as number),
			MaximumInterval: init?.MaximumInterval ?? (0n as time.Duration),
			ExpirationInterval: init?.ExpirationInterval ?? (0n as time.Duration),
			MaximumAttempts: init?.MaximumAttempts ?? (0 as number),
			NonRetriableErrorReasons: init?.NonRetriableErrorReasons ?? (null! as $.Slice<string>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RetryPolicy {
		return new RetryPolicy(this, true)
	}

	public __goscriptAssign(source: RetryPolicy): void {
		const target = this._fields
		const values = source._fields
		target.InitialInterval = values.InitialInterval
		target.BackoffCoefficient = values.BackoffCoefficient
		target.MaximumInterval = values.MaximumInterval
		target.ExpirationInterval = values.ExpirationInterval
		target.MaximumAttempts = values.MaximumAttempts
		target.NonRetriableErrorReasons = values.NonRetriableErrorReasons
	}

	static __typeInfo = $.registerStructType(
		"internal.RetryPolicy",
		() => new RetryPolicy(),
		() => [],
		RetryPolicy,
		() => [/* @__PURE__ */ $.structField("InitialInterval", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, true), /* @__PURE__ */ $.structField("BackoffCoefficient", /* @__PURE__ */ $.basicType("float64"), [1], 8, true), /* @__PURE__ */ $.structField("MaximumInterval", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 16, true), /* @__PURE__ */ $.structField("ExpirationInterval", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 24, true), /* @__PURE__ */ $.structField("MaximumAttempts", /* @__PURE__ */ $.basicType("int32"), [4], 32, true), /* @__PURE__ */ $.structField("NonRetriableErrorReasons", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [5], 40, true)]
	)
}

export class ClusterAttribute {
	public get Scope(): string {
		return this._fields.Scope
	}

	public set Scope(value: string) {
		this._fields.Scope = value
	}

	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public _fields: {
		Scope: string
		Name: string
	}

	constructor(init?: Partial<{Scope?: string, Name?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Scope: init?.Scope ?? ("" as string),
			Name: init?.Name ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClusterAttribute {
		return new ClusterAttribute(this, true)
	}

	public __goscriptAssign(source: ClusterAttribute): void {
		const target = this._fields
		const values = source._fields
		target.Scope = values.Scope
		target.Name = values.Name
	}

	static __typeInfo = $.registerStructType(
		"internal.ClusterAttribute",
		() => new ClusterAttribute(),
		() => [],
		ClusterAttribute,
		() => [/* @__PURE__ */ $.structField("Scope", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

export class ActiveClusterSelectionPolicy {
	public get ClusterAttribute(): ClusterAttribute | $.VarRef<ClusterAttribute> | null {
		return this._fields.ClusterAttribute
	}

	public set ClusterAttribute(value: ClusterAttribute | $.VarRef<ClusterAttribute> | null) {
		this._fields.ClusterAttribute = value
	}

	public _fields: {
		ClusterAttribute: ClusterAttribute | $.VarRef<ClusterAttribute> | null
	}

	constructor(init?: Partial<{ClusterAttribute?: ClusterAttribute | $.VarRef<ClusterAttribute> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ClusterAttribute: init?.ClusterAttribute ?? (null! as ClusterAttribute | $.VarRef<ClusterAttribute> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ActiveClusterSelectionPolicy {
		return new ActiveClusterSelectionPolicy(this, true)
	}

	public __goscriptAssign(source: ActiveClusterSelectionPolicy): void {
		const target = this._fields
		const values = source._fields
		target.ClusterAttribute = values.ClusterAttribute
	}

	static __typeInfo = $.registerStructType(
		"internal.ActiveClusterSelectionPolicy",
		() => new ActiveClusterSelectionPolicy(),
		() => [],
		ActiveClusterSelectionPolicy,
		() => [/* @__PURE__ */ $.structField("ClusterAttribute", /* @__PURE__ */ $.pointerType("internal.ClusterAttribute"), [0], 0, true)]
	)
}

export const QueryTypeStackTrace: string = "__stack_trace"

export const QueryTypeOpenSessions: string = "__open_sessions"

export const QueryTypeQueryTypes: string = "__query_types"

export const ParentClosePolicyTerminate: ParentClosePolicy = 0

export const ParentClosePolicyRequestCancel: ParentClosePolicy = 1

export const ParentClosePolicyAbandon: ParentClosePolicy = 2

export const WorkflowIDReusePolicyAllowDuplicateFailedOnly: WorkflowIDReusePolicy = 0

export const WorkflowIDReusePolicyAllowDuplicate: WorkflowIDReusePolicy = 1

export const WorkflowIDReusePolicyRejectDuplicate: WorkflowIDReusePolicy = 2

export const WorkflowIDReusePolicyTerminateIfRunning: WorkflowIDReusePolicy = 3

export const QueryConsistencyLevelUnspecified: QueryConsistencyLevel = 0

export const QueryConsistencyLevelEventual: QueryConsistencyLevel = 1

export const QueryConsistencyLevelStrong: QueryConsistencyLevel = 2

export function BuiltinQueryTypes(): $.Slice<string> {
	return $.arrayToSlice<string>(["__open_sessions", "__stack_trace", "__query_types"])
}

export function CancelReason__private(recv: CancelReason): void {
}

export function WithCancelReason(reason: string): Option | null {
	return $.namedValueInterfaceValue<Option | null>(reason, "internal.CancelReason", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())
}

export function getFeatureFlags(options: ClientOptions | $.VarRef<ClientOptions> | null): __goscript_internal_utils.FeatureFlags {
	if (options != null) {
		return ($.pointerValue<ClientOptions>(options).FeatureFlags).clone()
	}
	return new __goscript_internal_utils.FeatureFlags(undefined, true)
}

export async function NewClient(service: workflowserviceclient.Interface | null, domain: string, options: ClientOptions | $.VarRef<ClientOptions> | null): globalThis.Promise<Client | null> {
	const options$: ClientOptions = options == null ? $.pointerTarget<ClientOptions>(options) : (options as any).__isVarRef === true ? (options as any).value : (options as any).__goValue === undefined ? (options as any) : $.pointerTarget<ClientOptions>(options)
	let identity: string = ""
	if ((options == null) || ($.stringEqual((options$ as ClientOptions).Identity, ""))) {
		identity = await __goscript_internal_utils.getWorkerIdentity("")
	} else {
		identity = (options$ as ClientOptions).Identity
	}
	let metricScope: tally.Scope | null = null! as tally.Scope | null
	if (options != null) {
		metricScope = (options$ as ClientOptions).MetricsScope
	}
	metricScope = await __goscript_internal_worker.tagScope(metricScope, $.arrayToSlice<string>(["Domain", domain, "cadence-client-name", "uber-go", "cadence-caller-type", "sdk"]))
	let dataConverter: __goscript_encoded.DataConverter | null = null! as __goscript_encoded.DataConverter | null
	if ((options != null) && ((options$ as ClientOptions).DataConverter != null)) {
		dataConverter = (options$ as ClientOptions).DataConverter
	} else {
		dataConverter = __goscript_encoded.getDefaultDataConverter()
	}
	let contextPropagators: $.Slice<__goscript_headers.ContextPropagator | null> = null! as $.Slice<__goscript_headers.ContextPropagator | null>
	if (options != null) {
		contextPropagators = (options$ as ClientOptions).ContextPropagators
	}
	let tracer: opentracing.Tracer | null = null! as opentracing.Tracer | null
	if ((options != null) && ((options$ as ClientOptions).Tracer != null)) {
		tracer = (options$ as ClientOptions).Tracer
		contextPropagators = $.appendOne(contextPropagators, __goscript_tracer.NewTracingContextPropagator(zap.NewNop(), tracer), $.appendZeros.nil)
	} else {
		tracer = $.interfaceValue<opentracing.Tracer | null>(new opentracing.NoopTracer(undefined, true), "opentracing.NoopTracer", "opentracing.NoopTracer")
	}
	if ((options != null) && ((options$ as ClientOptions).Authorization != null)) {
		service = auth.NewWorkflowServiceWrapper(service, (options$ as ClientOptions).Authorization)
	}
	if ((options != null) && (!$.stringEqual((options$ as ClientOptions).IsolationGroup, ""))) {
		service = isolationgroup.NewWorkflowServiceWrapper(service, (options$ as ClientOptions).IsolationGroup)
	}
	service = metrics.NewWorkflowServiceWrapper(service, metricScope)
	return $.interfaceValue<Client | null>((await (async () => { const __goscriptLiteralField0 = await __goscript_registry.newRegistry(); const __goscriptLiteralField1 = await metrics.NewTaggedScope(metricScope); const __goscriptLiteralField2 = getFeatureFlags(options); return new __goscript_internal_workflow_client.workflowClient({workflowService: service, domain: domain, registry: __goscriptLiteralField0, metricsScope: __goscriptLiteralField1, identity: identity, dataConverter: dataConverter, contextPropagators: contextPropagators, tracer: tracer, featureFlags: __goscriptLiteralField2}) })()), "*internal.workflowClient", /* @__PURE__ */ $.pointerType("internal.workflowClient"))
}

export async function NewDomainClient(service: workflowserviceclient.Interface | null, options: ClientOptions | $.VarRef<ClientOptions> | null): globalThis.Promise<DomainClient | null> {
	const options$: ClientOptions = options == null ? $.pointerTarget<ClientOptions>(options) : (options as any).__isVarRef === true ? (options as any).value : (options as any).__goValue === undefined ? (options as any) : $.pointerTarget<ClientOptions>(options)
	let identity: string = ""
	if ((options == null) || ($.stringEqual((options$ as ClientOptions).Identity, ""))) {
		identity = await __goscript_internal_utils.getWorkerIdentity("")
	} else {
		identity = (options$ as ClientOptions).Identity
	}
	let metricScope: tally.Scope | null = null! as tally.Scope | null
	if (options != null) {
		metricScope = (options$ as ClientOptions).MetricsScope
	}
	metricScope = await __goscript_internal_worker.tagScope(metricScope, $.arrayToSlice<string>(["Domain", "domain-client", "cadence-client-name", "uber-go", "cadence-caller-type", "sdk"]))
	if ((options != null) && ((options$ as ClientOptions).Authorization != null)) {
		service = auth.NewWorkflowServiceWrapper(service, (options$ as ClientOptions).Authorization)
	}
	service = metrics.NewWorkflowServiceWrapper(service, metricScope)
	return $.interfaceValue<DomainClient | null>((() => { const __goscriptLiteralField3 = getFeatureFlags(options); return new __goscript_internal_domain_client.domainClient({workflowService: service, metricsScope: metricScope, identity: identity, featureFlags: __goscriptLiteralField3}) })(), "*internal.domainClient", /* @__PURE__ */ $.pointerType("internal.domainClient"))
}

export async function WorkflowIDReusePolicy_toThriftPtr(p: WorkflowIDReusePolicy): globalThis.Promise<$.VarRef<s.WorkflowIdReusePolicy> | null> {
	let policy: $.VarRef<s.WorkflowIdReusePolicy> = $.varRef(0)
	switch (p) {
		case 1:
		{
			policy.value = 1
			break
		}
		case 0:
		{
			policy.value = 0
			break
		}
		case 2:
		{
			policy.value = 2
			break
		}
		case 3:
		{
			policy.value = 3
			break
		}
		default:
		{
			$.panic(await fmt.Sprintf("unknown workflow reuse policy %v", $.namedValueInterfaceValue<any>(p, "internal.WorkflowIDReusePolicy", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())))
			break
		}
	}
	return policy
}

export async function ParentClosePolicy_toThriftPtr(p: ParentClosePolicy): globalThis.Promise<$.VarRef<s.ParentClosePolicy> | null> {
	let policy: $.VarRef<s.ParentClosePolicy> = $.varRef(0)
	switch (p) {
		case 2:
		{
			policy.value = 0
			break
		}
		case 1:
		{
			policy.value = 1
			break
		}
		case 0:
		{
			policy.value = 2
			break
		}
		default:
		{
			$.panic(await fmt.Sprintf("unknown workflow parent close policy %v", $.namedValueInterfaceValue<any>(p, "internal.ParentClosePolicy", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8())))
			break
		}
	}
	return policy
}

export function NewValue(data: $.Slice<number>): __goscript_encoded.Value | null {
	return __goscript_workflow.newEncodedValue(data, null)
}

export function NewValues(data: $.Slice<number>): __goscript_encoded.Values | null {
	return __goscript_workflow_testsuite.newEncodedValues(data, null)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({private: (receiver: any, ...args: any[]) => (CancelReason__private as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "internal.CancelReason"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("private")])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({toThriftPtr: (receiver: any, ...args: any[]) => (WorkflowIDReusePolicy_toThriftPtr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int", "internal.WorkflowIDReusePolicy"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("toThriftPtr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.WorkflowIdReusePolicy"))])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({toThriftPtr: (receiver: any, ...args: any[]) => (ParentClosePolicy_toThriftPtr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.basicType("int", "internal.ParentClosePolicy"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("toThriftPtr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.ParentClosePolicy"))])])
}
