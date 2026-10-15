// Generated file based on service_workflow.pb.yarpc.go
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

import * as __goscript_history_pb from "./history.pb.gs.ts"

import * as __goscript_query_pb from "./query.pb.gs.ts"

import * as __goscript_service_workflow_pb from "./service_workflow.pb.gs.ts"

import * as __goscript_tasklist_pb from "./tasklist.pb.gs.ts"

import * as __goscript_workflow_pb from "./workflow.pb.gs.ts"
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
import "./history.pb.gs.ts"
import "./query.pb.gs.ts"
import "./service_workflow.pb.gs.ts"
import "./tasklist.pb.gs.ts"
import "./workflow.pb.gs.ts"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.WorkflowAPIYARPCClient", "apiv1.WorkflowAPIYARPCServer", "apiv1.buildWorkflowAPIYARPCProceduresParams", "apiv1.FxWorkflowAPIYARPCClientParams", "apiv1.FxWorkflowAPIYARPCClientResult", "apiv1.FxWorkflowAPIYARPCProceduresParams", "apiv1.FxWorkflowAPIYARPCProceduresResult", "apiv1._WorkflowAPIYARPCCaller", "apiv1._WorkflowAPIYARPCHandler"])

export type WorkflowAPIYARPCClient = {
	DescribeTaskList(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.DescribeTaskListRequest | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.DescribeTaskListResponse | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.DescribeTaskListResponse | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListResponse> | null, $.GoError]>
	DescribeWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.DescribeWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.DescribeWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.DescribeWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionResponse> | null, $.GoError]>
	DiagnoseWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse> | null, $.GoError]>
	GetClusterInfo(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.GetClusterInfoRequest | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.GetClusterInfoResponse | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.GetClusterInfoResponse | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoResponse> | null, $.GoError]>
	GetTaskListsByDomain(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.GetTaskListsByDomainRequest | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.GetTaskListsByDomainResponse | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.GetTaskListsByDomainResponse | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainResponse> | null, $.GoError]>
	GetWorkflowExecutionHistory(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse> | null, $.GoError]>
	ListTaskListPartitions(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.ListTaskListPartitionsRequest | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.ListTaskListPartitionsResponse | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.ListTaskListPartitionsResponse | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsResponse> | null, $.GoError]>
	QueryWorkflow(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.QueryWorkflowRequest | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.QueryWorkflowResponse | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.QueryWorkflowResponse | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowResponse> | null, $.GoError]>
	RefreshWorkflowTasks(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.RefreshWorkflowTasksRequest | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.RefreshWorkflowTasksResponse | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.RefreshWorkflowTasksResponse | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksResponse> | null, $.GoError]>
	RequestCancelWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse> | null, $.GoError]>
	ResetWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.ResetWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.ResetWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.ResetWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionResponse> | null, $.GoError]>
	RestartWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.RestartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.RestartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.RestartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionResponse> | null, $.GoError]>
	SignalWithStartWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse> | null, $.GoError]>
	SignalWithStartWorkflowExecutionAsync(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse> | null, $.GoError]>
	SignalWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.SignalWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.SignalWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.SignalWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionResponse> | null, $.GoError]>
	StartWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.StartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.StartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.StartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionResponse> | null, $.GoError]>
	StartWorkflowExecutionAsync(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse> | null, $.GoError]>
	TerminateWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.TerminateWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_workflow_pb.TerminateWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_workflow_pb.TerminateWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionResponse> | null, $.GoError]>
}

$.registerInterfaceType(
	"apiv1.WorkflowAPIYARPCClient",
	null,
	[$.methodSignature("DescribeTaskList", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse"), "error"]), $.methodSignature("DescribeWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionResponse"), "error"]), $.methodSignature("DiagnoseWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionResponse"), "error"]), $.methodSignature("GetClusterInfo", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoResponse"), "error"]), $.methodSignature("GetTaskListsByDomain", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainResponse"), "error"]), $.methodSignature("GetWorkflowExecutionHistory", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryResponse"), "error"]), $.methodSignature("ListTaskListPartitions", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsResponse"), "error"]), $.methodSignature("QueryWorkflow", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowResponse"), "error"]), $.methodSignature("RefreshWorkflowTasks", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksResponse"), "error"]), $.methodSignature("RequestCancelWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionResponse"), "error"]), $.methodSignature("ResetWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionResponse"), "error"]), $.methodSignature("RestartWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionResponse"), "error"]), $.methodSignature("SignalWithStartWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionResponse"), "error"]), $.methodSignature("SignalWithStartWorkflowExecutionAsync", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncResponse"), "error"]), $.methodSignature("SignalWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionResponse"), "error"]), $.methodSignature("StartWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionResponse"), "error"]), $.methodSignature("StartWorkflowExecutionAsync", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncResponse"), "error"]), $.methodSignature("TerminateWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionResponse"), "error"])]
);

export type WorkflowAPIYARPCServer = {
	DescribeTaskList(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.DescribeTaskListRequest | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListRequest> | null): [__goscript_service_workflow_pb.DescribeTaskListResponse | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListResponse> | null, $.GoError]
	DescribeWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.DescribeWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionRequest> | null): [__goscript_service_workflow_pb.DescribeWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionResponse> | null, $.GoError]
	DiagnoseWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest> | null): [__goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse> | null, $.GoError]
	GetClusterInfo(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.GetClusterInfoRequest | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoRequest> | null): [__goscript_service_workflow_pb.GetClusterInfoResponse | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoResponse> | null, $.GoError]
	GetTaskListsByDomain(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.GetTaskListsByDomainRequest | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainRequest> | null): [__goscript_service_workflow_pb.GetTaskListsByDomainResponse | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainResponse> | null, $.GoError]
	GetWorkflowExecutionHistory(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest> | null): [__goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse> | null, $.GoError]
	ListTaskListPartitions(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.ListTaskListPartitionsRequest | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsRequest> | null): [__goscript_service_workflow_pb.ListTaskListPartitionsResponse | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsResponse> | null, $.GoError]
	QueryWorkflow(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.QueryWorkflowRequest | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowRequest> | null): [__goscript_service_workflow_pb.QueryWorkflowResponse | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowResponse> | null, $.GoError]
	RefreshWorkflowTasks(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.RefreshWorkflowTasksRequest | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksRequest> | null): [__goscript_service_workflow_pb.RefreshWorkflowTasksResponse | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksResponse> | null, $.GoError]
	RequestCancelWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest> | null): [__goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse> | null, $.GoError]
	ResetWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.ResetWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionRequest> | null): [__goscript_service_workflow_pb.ResetWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionResponse> | null, $.GoError]
	RestartWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.RestartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionRequest> | null): [__goscript_service_workflow_pb.RestartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionResponse> | null, $.GoError]
	SignalWithStartWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest> | null): [__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse> | null, $.GoError]
	SignalWithStartWorkflowExecutionAsync(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest> | null): [__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse> | null, $.GoError]
	SignalWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.SignalWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionRequest> | null): [__goscript_service_workflow_pb.SignalWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionResponse> | null, $.GoError]
	StartWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.StartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionRequest> | null): [__goscript_service_workflow_pb.StartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionResponse> | null, $.GoError]
	StartWorkflowExecutionAsync(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest> | null): [__goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse> | null, $.GoError]
	TerminateWorkflowExecution(_p0: context.Context | null, _p1: __goscript_service_workflow_pb.TerminateWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionRequest> | null): [__goscript_service_workflow_pb.TerminateWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionResponse> | null, $.GoError]
}

$.registerInterfaceType(
	"apiv1.WorkflowAPIYARPCServer",
	null,
	[$.methodSignature("DescribeTaskList", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListRequest")], [/* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse"), "error"]), $.methodSignature("DescribeWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionRequest")], [/* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionResponse"), "error"]), $.methodSignature("DiagnoseWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionRequest")], [/* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionResponse"), "error"]), $.methodSignature("GetClusterInfo", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoRequest")], [/* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoResponse"), "error"]), $.methodSignature("GetTaskListsByDomain", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainRequest")], [/* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainResponse"), "error"]), $.methodSignature("GetWorkflowExecutionHistory", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryRequest")], [/* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryResponse"), "error"]), $.methodSignature("ListTaskListPartitions", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsRequest")], [/* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsResponse"), "error"]), $.methodSignature("QueryWorkflow", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowRequest")], [/* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowResponse"), "error"]), $.methodSignature("RefreshWorkflowTasks", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksRequest")], [/* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksResponse"), "error"]), $.methodSignature("RequestCancelWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionRequest")], [/* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionResponse"), "error"]), $.methodSignature("ResetWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionRequest")], [/* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionResponse"), "error"]), $.methodSignature("RestartWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionRequest")], [/* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionResponse"), "error"]), $.methodSignature("SignalWithStartWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionRequest")], [/* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionResponse"), "error"]), $.methodSignature("SignalWithStartWorkflowExecutionAsync", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncRequest")], [/* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncResponse"), "error"]), $.methodSignature("SignalWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionRequest")], [/* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionResponse"), "error"]), $.methodSignature("StartWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionRequest")], [/* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionResponse"), "error"]), $.methodSignature("StartWorkflowExecutionAsync", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncRequest")], [/* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncResponse"), "error"]), $.methodSignature("TerminateWorkflowExecution", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionRequest")], [/* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionResponse"), "error"])]
);

export class buildWorkflowAPIYARPCProceduresParams {
	public get Server(): WorkflowAPIYARPCServer | null {
		return this._fields.Server
	}

	public set Server(value: WorkflowAPIYARPCServer | null) {
		this._fields.Server = value
	}

	public get AnyResolver(): jsonpb.AnyResolver | null {
		return this._fields.AnyResolver
	}

	public set AnyResolver(value: jsonpb.AnyResolver | null) {
		this._fields.AnyResolver = value
	}

	public _fields: {
		Server: WorkflowAPIYARPCServer | null
		AnyResolver: jsonpb.AnyResolver | null
	}

	constructor(init?: Partial<{Server?: WorkflowAPIYARPCServer | null, AnyResolver?: jsonpb.AnyResolver | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Server: init?.Server ?? (null! as WorkflowAPIYARPCServer | null),
			AnyResolver: init?.AnyResolver ?? (null! as jsonpb.AnyResolver | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): buildWorkflowAPIYARPCProceduresParams {
		return new buildWorkflowAPIYARPCProceduresParams(this, true)
	}

	public __goscriptAssign(source: buildWorkflowAPIYARPCProceduresParams): void {
		const target = this._fields
		const values = source._fields
		target.Server = $.assignFieldValue(target.Server, values.Server, "apiv1.WorkflowAPIYARPCServer")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.buildWorkflowAPIYARPCProceduresParams",
		() => new buildWorkflowAPIYARPCProceduresParams(),
		() => [],
		buildWorkflowAPIYARPCProceduresParams,
		() => [/* @__PURE__ */ $.structField("Server", "apiv1.WorkflowAPIYARPCServer", [0], 0, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [1], 16, true)]
	)
}

export class FxWorkflowAPIYARPCClientParams {
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

	public clone(): FxWorkflowAPIYARPCClientParams {
		return new FxWorkflowAPIYARPCClientParams(this, true)
	}

	public __goscriptAssign(source: FxWorkflowAPIYARPCClientParams): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.In, values.In)
		target.Provider = $.assignFieldValue(target.Provider, values.Provider, "yarpc.ClientConfig")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
		target.Restriction = $.assignFieldValue(target.Restriction, values.Restriction, "restriction.Checker")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxWorkflowAPIYARPCClientParams",
		() => new FxWorkflowAPIYARPCClientParams(),
		() => [],
		FxWorkflowAPIYARPCClientParams,
		() => [/* @__PURE__ */ $.structField("In", "dig.In", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Provider", "yarpc.ClientConfig", [1], 0, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [2], 16, true, { tag: "name:\"yarpcfx\" optional:\"true\"" }), /* @__PURE__ */ $.structField("Restriction", "restriction.Checker", [3], 32, true, { tag: "optional:\"true\"" })]
	)
}

export class FxWorkflowAPIYARPCClientResult {
	public get Out(): fx.Out {
		return this._fields.Out
	}

	public set Out(value: fx.Out) {
		this._fields.Out = value
	}

	public get Client(): WorkflowAPIYARPCClient | null {
		return this._fields.Client
	}

	public set Client(value: WorkflowAPIYARPCClient | null) {
		this._fields.Client = value
	}

	public _fields: {
		Out: fx.Out
		Client: WorkflowAPIYARPCClient | null
	}

	constructor(init?: Partial<{Out?: fx.Out, Client?: WorkflowAPIYARPCClient | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Out: init?.Out ? init.Out.clone() : new dig.Out(undefined, true),
			Client: init?.Client ?? (null! as WorkflowAPIYARPCClient | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FxWorkflowAPIYARPCClientResult {
		return new FxWorkflowAPIYARPCClientResult(this, true)
	}

	public __goscriptAssign(source: FxWorkflowAPIYARPCClientResult): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Out, values.Out)
		target.Client = $.assignFieldValue(target.Client, values.Client, "apiv1.WorkflowAPIYARPCClient")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxWorkflowAPIYARPCClientResult",
		() => new FxWorkflowAPIYARPCClientResult(),
		() => [],
		FxWorkflowAPIYARPCClientResult,
		() => [/* @__PURE__ */ $.structField("Out", "dig.Out", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Client", "apiv1.WorkflowAPIYARPCClient", [1], 0, true)]
	)
}

export class FxWorkflowAPIYARPCProceduresParams {
	public get In(): fx.In {
		return this._fields.In
	}

	public set In(value: fx.In) {
		this._fields.In = value
	}

	public get Server(): WorkflowAPIYARPCServer | null {
		return this._fields.Server
	}

	public set Server(value: WorkflowAPIYARPCServer | null) {
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
		Server: WorkflowAPIYARPCServer | null
		AnyResolver: jsonpb.AnyResolver | null
	}

	constructor(init?: Partial<{In?: fx.In, Server?: WorkflowAPIYARPCServer | null, AnyResolver?: jsonpb.AnyResolver | null}>, __goscriptValue?: boolean) {
		this._fields = {
			In: init?.In ? init.In.clone() : new dig.In(undefined, true),
			Server: init?.Server ?? (null! as WorkflowAPIYARPCServer | null),
			AnyResolver: init?.AnyResolver ?? (null! as jsonpb.AnyResolver | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FxWorkflowAPIYARPCProceduresParams {
		return new FxWorkflowAPIYARPCProceduresParams(this, true)
	}

	public __goscriptAssign(source: FxWorkflowAPIYARPCProceduresParams): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.In, values.In)
		target.Server = $.assignFieldValue(target.Server, values.Server, "apiv1.WorkflowAPIYARPCServer")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxWorkflowAPIYARPCProceduresParams",
		() => new FxWorkflowAPIYARPCProceduresParams(),
		() => [],
		FxWorkflowAPIYARPCProceduresParams,
		() => [/* @__PURE__ */ $.structField("In", "dig.In", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Server", "apiv1.WorkflowAPIYARPCServer", [1], 0, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [2], 16, true, { tag: "name:\"yarpcfx\" optional:\"true\"" })]
	)
}

export class FxWorkflowAPIYARPCProceduresResult {
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

	public clone(): FxWorkflowAPIYARPCProceduresResult {
		return new FxWorkflowAPIYARPCProceduresResult(this, true)
	}

	public __goscriptAssign(source: FxWorkflowAPIYARPCProceduresResult): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Out, values.Out)
		target.Procedures = values.Procedures
		$.assignStruct(target.ReflectionMeta, values.ReflectionMeta)
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxWorkflowAPIYARPCProceduresResult",
		() => new FxWorkflowAPIYARPCProceduresResult(),
		() => [],
		FxWorkflowAPIYARPCProceduresResult,
		() => [/* @__PURE__ */ $.structField("Out", "dig.Out", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Procedures", /* @__PURE__ */ $.sliceType("transport.Procedure"), [1], 0, true, { tag: "group:\"yarpcfx\"" }), /* @__PURE__ */ $.structField("ReflectionMeta", "reflection.ServerMeta", [2], 24, true, { tag: "group:\"yarpcfx\"" })]
	)
}

export class _WorkflowAPIYARPCCaller {
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

	public clone(): _WorkflowAPIYARPCCaller {
		return new _WorkflowAPIYARPCCaller(this, true)
	}

	public __goscriptAssign(source: _WorkflowAPIYARPCCaller): void {
		const target = this._fields
		const values = source._fields
		target.streamClient = $.assignFieldValue(target.streamClient, values.streamClient, "protobuf.StreamClient")
	}

	public async DescribeTaskList(ctx: context.Context | null, request: __goscript_service_workflow_pb.DescribeTaskListRequest | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.DescribeTaskListResponse | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "DescribeTaskList", $.interfaceValue<proto.Message | null>(request, "*apiv1.DescribeTaskListRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListRequest")), newWorkflowAPIServiceDescribeTaskListYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple0: any = $.typeAssertTuple<__goscript_service_workflow_pb.DescribeTaskListResponse | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse"))
		let response: __goscript_service_workflow_pb.DescribeTaskListResponse | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListResponse> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceDescribeTaskListYARPCResponse(), "*apiv1.DescribeTaskListResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async DescribeWorkflowExecution(ctx: context.Context | null, request: __goscript_service_workflow_pb.DescribeWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.DescribeWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "DescribeWorkflowExecution", $.interfaceValue<proto.Message | null>(request, "*apiv1.DescribeWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionRequest")), newWorkflowAPIServiceDescribeWorkflowExecutionYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple1: any = $.typeAssertTuple<__goscript_service_workflow_pb.DescribeWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionResponse"))
		let response: __goscript_service_workflow_pb.DescribeWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionResponse> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCResponse(), "*apiv1.DescribeWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async DiagnoseWorkflowExecution(ctx: context.Context | null, request: __goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "DiagnoseWorkflowExecution", $.interfaceValue<proto.Message | null>(request, "*apiv1.DiagnoseWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionRequest")), newWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple2: any = $.typeAssertTuple<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionResponse"))
		let response: __goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCResponse(), "*apiv1.DiagnoseWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async GetClusterInfo(ctx: context.Context | null, request: __goscript_service_workflow_pb.GetClusterInfoRequest | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.GetClusterInfoResponse | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "GetClusterInfo", $.interfaceValue<proto.Message | null>(request, "*apiv1.GetClusterInfoRequest", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoRequest")), newWorkflowAPIServiceGetClusterInfoYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple3: any = $.typeAssertTuple<__goscript_service_workflow_pb.GetClusterInfoResponse | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoResponse"))
		let response: __goscript_service_workflow_pb.GetClusterInfoResponse | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoResponse> | null = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceGetClusterInfoYARPCResponse(), "*apiv1.GetClusterInfoResponse", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async GetTaskListsByDomain(ctx: context.Context | null, request: __goscript_service_workflow_pb.GetTaskListsByDomainRequest | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.GetTaskListsByDomainResponse | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "GetTaskListsByDomain", $.interfaceValue<proto.Message | null>(request, "*apiv1.GetTaskListsByDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainRequest")), newWorkflowAPIServiceGetTaskListsByDomainYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple4: any = $.typeAssertTuple<__goscript_service_workflow_pb.GetTaskListsByDomainResponse | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainResponse"))
		let response: __goscript_service_workflow_pb.GetTaskListsByDomainResponse | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainResponse> | null = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceGetTaskListsByDomainYARPCResponse(), "*apiv1.GetTaskListsByDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async GetWorkflowExecutionHistory(ctx: context.Context | null, request: __goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "GetWorkflowExecutionHistory", $.interfaceValue<proto.Message | null>(request, "*apiv1.GetWorkflowExecutionHistoryRequest", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryRequest")), newWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple5: any = $.typeAssertTuple<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryResponse"))
		let response: __goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCResponse(), "*apiv1.GetWorkflowExecutionHistoryResponse", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async ListTaskListPartitions(ctx: context.Context | null, request: __goscript_service_workflow_pb.ListTaskListPartitionsRequest | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.ListTaskListPartitionsResponse | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "ListTaskListPartitions", $.interfaceValue<proto.Message | null>(request, "*apiv1.ListTaskListPartitionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsRequest")), newWorkflowAPIServiceListTaskListPartitionsYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple6: any = $.typeAssertTuple<__goscript_service_workflow_pb.ListTaskListPartitionsResponse | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsResponse"))
		let response: __goscript_service_workflow_pb.ListTaskListPartitionsResponse | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsResponse> | null = __goscriptTuple6[0]
		let ok = __goscriptTuple6[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceListTaskListPartitionsYARPCResponse(), "*apiv1.ListTaskListPartitionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async QueryWorkflow(ctx: context.Context | null, request: __goscript_service_workflow_pb.QueryWorkflowRequest | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.QueryWorkflowResponse | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "QueryWorkflow", $.interfaceValue<proto.Message | null>(request, "*apiv1.QueryWorkflowRequest", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowRequest")), newWorkflowAPIServiceQueryWorkflowYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple7: any = $.typeAssertTuple<__goscript_service_workflow_pb.QueryWorkflowResponse | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowResponse"))
		let response: __goscript_service_workflow_pb.QueryWorkflowResponse | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowResponse> | null = __goscriptTuple7[0]
		let ok = __goscriptTuple7[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceQueryWorkflowYARPCResponse(), "*apiv1.QueryWorkflowResponse", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async RefreshWorkflowTasks(ctx: context.Context | null, request: __goscript_service_workflow_pb.RefreshWorkflowTasksRequest | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.RefreshWorkflowTasksResponse | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "RefreshWorkflowTasks", $.interfaceValue<proto.Message | null>(request, "*apiv1.RefreshWorkflowTasksRequest", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksRequest")), newWorkflowAPIServiceRefreshWorkflowTasksYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple8: any = $.typeAssertTuple<__goscript_service_workflow_pb.RefreshWorkflowTasksResponse | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksResponse"))
		let response: __goscript_service_workflow_pb.RefreshWorkflowTasksResponse | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksResponse> | null = __goscriptTuple8[0]
		let ok = __goscriptTuple8[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCResponse(), "*apiv1.RefreshWorkflowTasksResponse", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async RequestCancelWorkflowExecution(ctx: context.Context | null, request: __goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "RequestCancelWorkflowExecution", $.interfaceValue<proto.Message | null>(request, "*apiv1.RequestCancelWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionRequest")), newWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple9: any = $.typeAssertTuple<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionResponse"))
		let response: __goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse> | null = __goscriptTuple9[0]
		let ok = __goscriptTuple9[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCResponse(), "*apiv1.RequestCancelWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async ResetWorkflowExecution(ctx: context.Context | null, request: __goscript_service_workflow_pb.ResetWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.ResetWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "ResetWorkflowExecution", $.interfaceValue<proto.Message | null>(request, "*apiv1.ResetWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionRequest")), newWorkflowAPIServiceResetWorkflowExecutionYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple10: any = $.typeAssertTuple<__goscript_service_workflow_pb.ResetWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionResponse"))
		let response: __goscript_service_workflow_pb.ResetWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionResponse> | null = __goscriptTuple10[0]
		let ok = __goscriptTuple10[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceResetWorkflowExecutionYARPCResponse(), "*apiv1.ResetWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async RestartWorkflowExecution(ctx: context.Context | null, request: __goscript_service_workflow_pb.RestartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.RestartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "RestartWorkflowExecution", $.interfaceValue<proto.Message | null>(request, "*apiv1.RestartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionRequest")), newWorkflowAPIServiceRestartWorkflowExecutionYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple11: any = $.typeAssertTuple<__goscript_service_workflow_pb.RestartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionResponse"))
		let response: __goscript_service_workflow_pb.RestartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionResponse> | null = __goscriptTuple11[0]
		let ok = __goscriptTuple11[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCResponse(), "*apiv1.RestartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async SignalWithStartWorkflowExecution(ctx: context.Context | null, request: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "SignalWithStartWorkflowExecution", $.interfaceValue<proto.Message | null>(request, "*apiv1.SignalWithStartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionRequest")), newWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple12: any = $.typeAssertTuple<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionResponse"))
		let response: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse> | null = __goscriptTuple12[0]
		let ok = __goscriptTuple12[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCResponse(), "*apiv1.SignalWithStartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async SignalWithStartWorkflowExecutionAsync(ctx: context.Context | null, request: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "SignalWithStartWorkflowExecutionAsync", $.interfaceValue<proto.Message | null>(request, "*apiv1.SignalWithStartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncRequest")), newWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple13: any = $.typeAssertTuple<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncResponse"))
		let response: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse> | null = __goscriptTuple13[0]
		let ok = __goscriptTuple13[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCResponse(), "*apiv1.SignalWithStartWorkflowExecutionAsyncResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async SignalWorkflowExecution(ctx: context.Context | null, request: __goscript_service_workflow_pb.SignalWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.SignalWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "SignalWorkflowExecution", $.interfaceValue<proto.Message | null>(request, "*apiv1.SignalWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionRequest")), newWorkflowAPIServiceSignalWorkflowExecutionYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple14: any = $.typeAssertTuple<__goscript_service_workflow_pb.SignalWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionResponse"))
		let response: __goscript_service_workflow_pb.SignalWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionResponse> | null = __goscriptTuple14[0]
		let ok = __goscriptTuple14[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCResponse(), "*apiv1.SignalWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async StartWorkflowExecution(ctx: context.Context | null, request: __goscript_service_workflow_pb.StartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.StartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "StartWorkflowExecution", $.interfaceValue<proto.Message | null>(request, "*apiv1.StartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionRequest")), newWorkflowAPIServiceStartWorkflowExecutionYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple15: any = $.typeAssertTuple<__goscript_service_workflow_pb.StartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionResponse"))
		let response: __goscript_service_workflow_pb.StartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionResponse> | null = __goscriptTuple15[0]
		let ok = __goscriptTuple15[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceStartWorkflowExecutionYARPCResponse(), "*apiv1.StartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async StartWorkflowExecutionAsync(ctx: context.Context | null, request: __goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "StartWorkflowExecutionAsync", $.interfaceValue<proto.Message | null>(request, "*apiv1.StartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncRequest")), newWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple16: any = $.typeAssertTuple<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncResponse"))
		let response: __goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse> | null = __goscriptTuple16[0]
		let ok = __goscriptTuple16[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCResponse(), "*apiv1.StartWorkflowExecutionAsyncResponse", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async TerminateWorkflowExecution(ctx: context.Context | null, request: __goscript_service_workflow_pb.TerminateWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_workflow_pb.TerminateWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionResponse> | null, $.GoError]> {
		const c: _WorkflowAPIYARPCCaller | $.VarRef<_WorkflowAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkflowAPIYARPCCaller>(c).streamClient).Call(ctx, "TerminateWorkflowExecution", $.interfaceValue<proto.Message | null>(request, "*apiv1.TerminateWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionRequest")), newWorkflowAPIServiceTerminateWorkflowExecutionYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple17: any = $.typeAssertTuple<__goscript_service_workflow_pb.TerminateWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionResponse"))
		let response: __goscript_service_workflow_pb.TerminateWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionResponse> | null = __goscriptTuple17[0]
		let ok = __goscriptTuple17[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCResponse(), "*apiv1.TerminateWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionResponse")), responseMessage)]
		}
		return [response, err]
	}

	static __typeInfo = $.registerStructType(
		"apiv1._WorkflowAPIYARPCCaller",
		() => new _WorkflowAPIYARPCCaller(),
		() => [$.methodSignature("DescribeTaskList", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse"), "error"], true), $.methodSignature("DescribeWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionResponse"), "error"], true), $.methodSignature("DiagnoseWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionResponse"), "error"], true), $.methodSignature("GetClusterInfo", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoResponse"), "error"], true), $.methodSignature("GetTaskListsByDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainResponse"), "error"], true), $.methodSignature("GetWorkflowExecutionHistory", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryResponse"), "error"], true), $.methodSignature("ListTaskListPartitions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsResponse"), "error"], true), $.methodSignature("QueryWorkflow", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowResponse"), "error"], true), $.methodSignature("RefreshWorkflowTasks", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksResponse"), "error"], true), $.methodSignature("RequestCancelWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionResponse"), "error"], true), $.methodSignature("ResetWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionResponse"), "error"], true), $.methodSignature("RestartWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionResponse"), "error"], true), $.methodSignature("SignalWithStartWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionResponse"), "error"], true), $.methodSignature("SignalWithStartWorkflowExecutionAsync", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncResponse"), "error"], true), $.methodSignature("SignalWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionResponse"), "error"], true), $.methodSignature("StartWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionResponse"), "error"], true), $.methodSignature("StartWorkflowExecutionAsync", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncResponse"), "error"], true), $.methodSignature("TerminateWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionResponse"), "error"], true)],
		_WorkflowAPIYARPCCaller,
		() => [/* @__PURE__ */ $.structField("streamClient", "protobuf.StreamClient", [0], 0, false, { pkgPath: "github.com/uber/cadence-idl/go/proto/api/v1" })]
	)
}

export class _WorkflowAPIYARPCHandler {
	public get server(): WorkflowAPIYARPCServer | null {
		return this._fields.server
	}

	public set server(value: WorkflowAPIYARPCServer | null) {
		this._fields.server = value
	}

	public _fields: {
		server: WorkflowAPIYARPCServer | null
	}

	constructor(init?: Partial<{server?: WorkflowAPIYARPCServer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			server: init?.server ?? (null! as WorkflowAPIYARPCServer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): _WorkflowAPIYARPCHandler {
		return new _WorkflowAPIYARPCHandler(this, true)
	}

	public __goscriptAssign(source: _WorkflowAPIYARPCHandler): void {
		const target = this._fields
		const values = source._fields
		target.server = $.assignFieldValue(target.server, values.server, "apiv1.WorkflowAPIYARPCServer")
	}

	public async DescribeTaskList(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.DescribeTaskListRequest | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListRequest> | null = null! as __goscript_service_workflow_pb.DescribeTaskListRequest | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple18: any = $.typeAssertTuple<__goscript_service_workflow_pb.DescribeTaskListRequest | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListRequest"))
			request = __goscriptTuple18[0]
			ok = __goscriptTuple18[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceDescribeTaskListYARPCRequest(), "*apiv1.DescribeTaskListRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListRequest")), requestMessage)]
			}
		}
		let __goscriptTuple19: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).DescribeTaskList(ctx, request)
		let response: __goscript_service_workflow_pb.DescribeTaskListResponse | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListResponse> | null = __goscriptTuple19[0]
		let err = __goscriptTuple19[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.DescribeTaskListResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse")), err]
	}

	public async DescribeWorkflowExecution(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.DescribeWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionRequest> | null = null! as __goscript_service_workflow_pb.DescribeWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple20: any = $.typeAssertTuple<__goscript_service_workflow_pb.DescribeWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionRequest"))
			request = __goscriptTuple20[0]
			ok = __goscriptTuple20[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCRequest(), "*apiv1.DescribeWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionRequest")), requestMessage)]
			}
		}
		let __goscriptTuple21: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).DescribeWorkflowExecution(ctx, request)
		let response: __goscript_service_workflow_pb.DescribeWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionResponse> | null = __goscriptTuple21[0]
		let err = __goscriptTuple21[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.DescribeWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionResponse")), err]
	}

	public async DiagnoseWorkflowExecution(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest> | null = null! as __goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple22: any = $.typeAssertTuple<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionRequest"))
			request = __goscriptTuple22[0]
			ok = __goscriptTuple22[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCRequest(), "*apiv1.DiagnoseWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionRequest")), requestMessage)]
			}
		}
		let __goscriptTuple23: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).DiagnoseWorkflowExecution(ctx, request)
		let response: __goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse> | null = __goscriptTuple23[0]
		let err = __goscriptTuple23[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.DiagnoseWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionResponse")), err]
	}

	public async GetClusterInfo(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.GetClusterInfoRequest | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoRequest> | null = null! as __goscript_service_workflow_pb.GetClusterInfoRequest | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple24: any = $.typeAssertTuple<__goscript_service_workflow_pb.GetClusterInfoRequest | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoRequest"))
			request = __goscriptTuple24[0]
			ok = __goscriptTuple24[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceGetClusterInfoYARPCRequest(), "*apiv1.GetClusterInfoRequest", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoRequest")), requestMessage)]
			}
		}
		let __goscriptTuple25: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).GetClusterInfo(ctx, request)
		let response: __goscript_service_workflow_pb.GetClusterInfoResponse | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoResponse> | null = __goscriptTuple25[0]
		let err = __goscriptTuple25[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.GetClusterInfoResponse", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoResponse")), err]
	}

	public async GetTaskListsByDomain(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.GetTaskListsByDomainRequest | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainRequest> | null = null! as __goscript_service_workflow_pb.GetTaskListsByDomainRequest | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple26: any = $.typeAssertTuple<__goscript_service_workflow_pb.GetTaskListsByDomainRequest | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainRequest"))
			request = __goscriptTuple26[0]
			ok = __goscriptTuple26[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceGetTaskListsByDomainYARPCRequest(), "*apiv1.GetTaskListsByDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainRequest")), requestMessage)]
			}
		}
		let __goscriptTuple27: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).GetTaskListsByDomain(ctx, request)
		let response: __goscript_service_workflow_pb.GetTaskListsByDomainResponse | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainResponse> | null = __goscriptTuple27[0]
		let err = __goscriptTuple27[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.GetTaskListsByDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainResponse")), err]
	}

	public async GetWorkflowExecutionHistory(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest> | null = null! as __goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple28: any = $.typeAssertTuple<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryRequest"))
			request = __goscriptTuple28[0]
			ok = __goscriptTuple28[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCRequest(), "*apiv1.GetWorkflowExecutionHistoryRequest", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryRequest")), requestMessage)]
			}
		}
		let __goscriptTuple29: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).GetWorkflowExecutionHistory(ctx, request)
		let response: __goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse> | null = __goscriptTuple29[0]
		let err = __goscriptTuple29[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.GetWorkflowExecutionHistoryResponse", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryResponse")), err]
	}

	public async ListTaskListPartitions(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.ListTaskListPartitionsRequest | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsRequest> | null = null! as __goscript_service_workflow_pb.ListTaskListPartitionsRequest | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple30: any = $.typeAssertTuple<__goscript_service_workflow_pb.ListTaskListPartitionsRequest | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsRequest"))
			request = __goscriptTuple30[0]
			ok = __goscriptTuple30[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceListTaskListPartitionsYARPCRequest(), "*apiv1.ListTaskListPartitionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsRequest")), requestMessage)]
			}
		}
		let __goscriptTuple31: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).ListTaskListPartitions(ctx, request)
		let response: __goscript_service_workflow_pb.ListTaskListPartitionsResponse | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsResponse> | null = __goscriptTuple31[0]
		let err = __goscriptTuple31[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.ListTaskListPartitionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsResponse")), err]
	}

	public async QueryWorkflow(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.QueryWorkflowRequest | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowRequest> | null = null! as __goscript_service_workflow_pb.QueryWorkflowRequest | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple32: any = $.typeAssertTuple<__goscript_service_workflow_pb.QueryWorkflowRequest | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowRequest"))
			request = __goscriptTuple32[0]
			ok = __goscriptTuple32[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceQueryWorkflowYARPCRequest(), "*apiv1.QueryWorkflowRequest", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowRequest")), requestMessage)]
			}
		}
		let __goscriptTuple33: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).QueryWorkflow(ctx, request)
		let response: __goscript_service_workflow_pb.QueryWorkflowResponse | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowResponse> | null = __goscriptTuple33[0]
		let err = __goscriptTuple33[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.QueryWorkflowResponse", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowResponse")), err]
	}

	public async RefreshWorkflowTasks(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.RefreshWorkflowTasksRequest | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksRequest> | null = null! as __goscript_service_workflow_pb.RefreshWorkflowTasksRequest | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple34: any = $.typeAssertTuple<__goscript_service_workflow_pb.RefreshWorkflowTasksRequest | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksRequest"))
			request = __goscriptTuple34[0]
			ok = __goscriptTuple34[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCRequest(), "*apiv1.RefreshWorkflowTasksRequest", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksRequest")), requestMessage)]
			}
		}
		let __goscriptTuple35: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).RefreshWorkflowTasks(ctx, request)
		let response: __goscript_service_workflow_pb.RefreshWorkflowTasksResponse | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksResponse> | null = __goscriptTuple35[0]
		let err = __goscriptTuple35[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.RefreshWorkflowTasksResponse", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksResponse")), err]
	}

	public async RequestCancelWorkflowExecution(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest> | null = null! as __goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple36: any = $.typeAssertTuple<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionRequest"))
			request = __goscriptTuple36[0]
			ok = __goscriptTuple36[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCRequest(), "*apiv1.RequestCancelWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionRequest")), requestMessage)]
			}
		}
		let __goscriptTuple37: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).RequestCancelWorkflowExecution(ctx, request)
		let response: __goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse> | null = __goscriptTuple37[0]
		let err = __goscriptTuple37[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.RequestCancelWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionResponse")), err]
	}

	public async ResetWorkflowExecution(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.ResetWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionRequest> | null = null! as __goscript_service_workflow_pb.ResetWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple38: any = $.typeAssertTuple<__goscript_service_workflow_pb.ResetWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionRequest"))
			request = __goscriptTuple38[0]
			ok = __goscriptTuple38[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceResetWorkflowExecutionYARPCRequest(), "*apiv1.ResetWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionRequest")), requestMessage)]
			}
		}
		let __goscriptTuple39: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).ResetWorkflowExecution(ctx, request)
		let response: __goscript_service_workflow_pb.ResetWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionResponse> | null = __goscriptTuple39[0]
		let err = __goscriptTuple39[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.ResetWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionResponse")), err]
	}

	public async RestartWorkflowExecution(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.RestartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionRequest> | null = null! as __goscript_service_workflow_pb.RestartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple40: any = $.typeAssertTuple<__goscript_service_workflow_pb.RestartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionRequest"))
			request = __goscriptTuple40[0]
			ok = __goscriptTuple40[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCRequest(), "*apiv1.RestartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionRequest")), requestMessage)]
			}
		}
		let __goscriptTuple41: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).RestartWorkflowExecution(ctx, request)
		let response: __goscript_service_workflow_pb.RestartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionResponse> | null = __goscriptTuple41[0]
		let err = __goscriptTuple41[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.RestartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionResponse")), err]
	}

	public async SignalWithStartWorkflowExecution(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest> | null = null! as __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple42: any = $.typeAssertTuple<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionRequest"))
			request = __goscriptTuple42[0]
			ok = __goscriptTuple42[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCRequest(), "*apiv1.SignalWithStartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionRequest")), requestMessage)]
			}
		}
		let __goscriptTuple43: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).SignalWithStartWorkflowExecution(ctx, request)
		let response: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse> | null = __goscriptTuple43[0]
		let err = __goscriptTuple43[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.SignalWithStartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionResponse")), err]
	}

	public async SignalWithStartWorkflowExecutionAsync(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest> | null = null! as __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple44: any = $.typeAssertTuple<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncRequest"))
			request = __goscriptTuple44[0]
			ok = __goscriptTuple44[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCRequest(), "*apiv1.SignalWithStartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncRequest")), requestMessage)]
			}
		}
		let __goscriptTuple45: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).SignalWithStartWorkflowExecutionAsync(ctx, request)
		let response: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse> | null = __goscriptTuple45[0]
		let err = __goscriptTuple45[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.SignalWithStartWorkflowExecutionAsyncResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncResponse")), err]
	}

	public async SignalWorkflowExecution(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.SignalWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionRequest> | null = null! as __goscript_service_workflow_pb.SignalWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple46: any = $.typeAssertTuple<__goscript_service_workflow_pb.SignalWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionRequest"))
			request = __goscriptTuple46[0]
			ok = __goscriptTuple46[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCRequest(), "*apiv1.SignalWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionRequest")), requestMessage)]
			}
		}
		let __goscriptTuple47: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).SignalWorkflowExecution(ctx, request)
		let response: __goscript_service_workflow_pb.SignalWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionResponse> | null = __goscriptTuple47[0]
		let err = __goscriptTuple47[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.SignalWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionResponse")), err]
	}

	public async StartWorkflowExecution(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.StartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionRequest> | null = null! as __goscript_service_workflow_pb.StartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple48: any = $.typeAssertTuple<__goscript_service_workflow_pb.StartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionRequest"))
			request = __goscriptTuple48[0]
			ok = __goscriptTuple48[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceStartWorkflowExecutionYARPCRequest(), "*apiv1.StartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionRequest")), requestMessage)]
			}
		}
		let __goscriptTuple49: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).StartWorkflowExecution(ctx, request)
		let response: __goscript_service_workflow_pb.StartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionResponse> | null = __goscriptTuple49[0]
		let err = __goscriptTuple49[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.StartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionResponse")), err]
	}

	public async StartWorkflowExecutionAsync(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest> | null = null! as __goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple50: any = $.typeAssertTuple<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncRequest"))
			request = __goscriptTuple50[0]
			ok = __goscriptTuple50[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCRequest(), "*apiv1.StartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncRequest")), requestMessage)]
			}
		}
		let __goscriptTuple51: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).StartWorkflowExecutionAsync(ctx, request)
		let response: __goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse> | null = __goscriptTuple51[0]
		let err = __goscriptTuple51[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.StartWorkflowExecutionAsyncResponse", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncResponse")), err]
	}

	public async TerminateWorkflowExecution(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = this;
		let request: __goscript_service_workflow_pb.TerminateWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionRequest> | null = null! as __goscript_service_workflow_pb.TerminateWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple52: any = $.typeAssertTuple<__goscript_service_workflow_pb.TerminateWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionRequest"))
			request = __goscriptTuple52[0]
			ok = __goscriptTuple52[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCRequest(), "*apiv1.TerminateWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionRequest")), requestMessage)]
			}
		}
		let __goscriptTuple53: any = await $.pointerValue<Exclude<WorkflowAPIYARPCServer, null>>($.pointerValue<_WorkflowAPIYARPCHandler>(h).server).TerminateWorkflowExecution(ctx, request)
		let response: __goscript_service_workflow_pb.TerminateWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionResponse> | null = __goscriptTuple53[0]
		let err = __goscriptTuple53[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.TerminateWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionResponse")), err]
	}

	static __typeInfo = $.registerStructType(
		"apiv1._WorkflowAPIYARPCHandler",
		() => new _WorkflowAPIYARPCHandler(),
		() => [$.methodSignature("DescribeTaskList", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("DescribeWorkflowExecution", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("DiagnoseWorkflowExecution", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("GetClusterInfo", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("GetTaskListsByDomain", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("GetWorkflowExecutionHistory", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("ListTaskListPartitions", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("QueryWorkflow", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("RefreshWorkflowTasks", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("RequestCancelWorkflowExecution", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("ResetWorkflowExecution", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("RestartWorkflowExecution", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("SignalWithStartWorkflowExecution", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("SignalWithStartWorkflowExecutionAsync", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("SignalWorkflowExecution", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("StartWorkflowExecution", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("StartWorkflowExecutionAsync", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("TerminateWorkflowExecution", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true)],
		_WorkflowAPIYARPCHandler,
		() => [/* @__PURE__ */ $.structField("server", "apiv1.WorkflowAPIYARPCServer", [0], 0, false, { pkgPath: "github.com/uber/cadence-idl/go/proto/api/v1" })]
	)
}

export async function newWorkflowAPIYARPCClient(clientConfig: transport.ClientConfig | null, anyResolver: jsonpb.AnyResolver | null, options: $.Slice<protobuf.ClientOption | null>): globalThis.Promise<WorkflowAPIYARPCClient | null> {
	return $.interfaceValue<WorkflowAPIYARPCClient | null>((await (async () => { const __goscriptLiteralField0 = await protobuf.NewStreamClient(new protobuf.ClientParams({ServiceName: "uber.cadence.api.v1.WorkflowAPI", ClientConfig: clientConfig, AnyResolver: anyResolver, Options: options}, true)); return new _WorkflowAPIYARPCCaller({streamClient: __goscriptLiteralField0}) })()), "*apiv1._WorkflowAPIYARPCCaller", /* @__PURE__ */ $.pointerType("apiv1._WorkflowAPIYARPCCaller"))
}

export async function NewWorkflowAPIYARPCClient(clientConfig: transport.ClientConfig | null, options: $.Slice<protobuf.ClientOption | null>): globalThis.Promise<WorkflowAPIYARPCClient | null> {
	return newWorkflowAPIYARPCClient(clientConfig, null, options)
}

export function buildWorkflowAPIYARPCProcedures(params: buildWorkflowAPIYARPCProceduresParams): $.Slice<transport.Procedure> {
	let handler: _WorkflowAPIYARPCHandler | $.VarRef<_WorkflowAPIYARPCHandler> | null = new _WorkflowAPIYARPCHandler({server: params.Server})
	return protobuf.BuildProcedures(new protobuf.BuildProceduresParams({ServiceName: "uber.cadence.api.v1.WorkflowAPI", UnaryHandlerParams: $.arrayToSlice<protobuf.BuildProceduresUnaryHandlerParams>([(() => { const __goscriptLiteralField1 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.RestartWorkflowExecution(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).RestartWorkflowExecution-fm"), NewRequest: newWorkflowAPIServiceRestartWorkflowExecutionYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "RestartWorkflowExecution", Handler: __goscriptLiteralField1}, true) })(), (() => { const __goscriptLiteralField2 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.StartWorkflowExecution(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).StartWorkflowExecution-fm"), NewRequest: newWorkflowAPIServiceStartWorkflowExecutionYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "StartWorkflowExecution", Handler: __goscriptLiteralField2}, true) })(), (() => { const __goscriptLiteralField3 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.StartWorkflowExecutionAsync(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).StartWorkflowExecutionAsync-fm"), NewRequest: newWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "StartWorkflowExecutionAsync", Handler: __goscriptLiteralField3}, true) })(), (() => { const __goscriptLiteralField4 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.SignalWorkflowExecution(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).SignalWorkflowExecution-fm"), NewRequest: newWorkflowAPIServiceSignalWorkflowExecutionYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "SignalWorkflowExecution", Handler: __goscriptLiteralField4}, true) })(), (() => { const __goscriptLiteralField5 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.SignalWithStartWorkflowExecution(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).SignalWithStartWorkflowExecution-fm"), NewRequest: newWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "SignalWithStartWorkflowExecution", Handler: __goscriptLiteralField5}, true) })(), (() => { const __goscriptLiteralField6 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.SignalWithStartWorkflowExecutionAsync(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).SignalWithStartWorkflowExecutionAsync-fm"), NewRequest: newWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "SignalWithStartWorkflowExecutionAsync", Handler: __goscriptLiteralField6}, true) })(), (() => { const __goscriptLiteralField7 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.ResetWorkflowExecution(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).ResetWorkflowExecution-fm"), NewRequest: newWorkflowAPIServiceResetWorkflowExecutionYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "ResetWorkflowExecution", Handler: __goscriptLiteralField7}, true) })(), (() => { const __goscriptLiteralField8 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.RequestCancelWorkflowExecution(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).RequestCancelWorkflowExecution-fm"), NewRequest: newWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "RequestCancelWorkflowExecution", Handler: __goscriptLiteralField8}, true) })(), (() => { const __goscriptLiteralField9 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.TerminateWorkflowExecution(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).TerminateWorkflowExecution-fm"), NewRequest: newWorkflowAPIServiceTerminateWorkflowExecutionYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "TerminateWorkflowExecution", Handler: __goscriptLiteralField9}, true) })(), (() => { const __goscriptLiteralField10 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.DescribeWorkflowExecution(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).DescribeWorkflowExecution-fm"), NewRequest: newWorkflowAPIServiceDescribeWorkflowExecutionYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "DescribeWorkflowExecution", Handler: __goscriptLiteralField10}, true) })(), (() => { const __goscriptLiteralField11 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.QueryWorkflow(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).QueryWorkflow-fm"), NewRequest: newWorkflowAPIServiceQueryWorkflowYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "QueryWorkflow", Handler: __goscriptLiteralField11}, true) })(), (() => { const __goscriptLiteralField12 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.DescribeTaskList(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).DescribeTaskList-fm"), NewRequest: newWorkflowAPIServiceDescribeTaskListYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "DescribeTaskList", Handler: __goscriptLiteralField12}, true) })(), (() => { const __goscriptLiteralField13 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.GetTaskListsByDomain(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).GetTaskListsByDomain-fm"), NewRequest: newWorkflowAPIServiceGetTaskListsByDomainYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "GetTaskListsByDomain", Handler: __goscriptLiteralField13}, true) })(), (() => { const __goscriptLiteralField14 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.ListTaskListPartitions(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).ListTaskListPartitions-fm"), NewRequest: newWorkflowAPIServiceListTaskListPartitionsYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "ListTaskListPartitions", Handler: __goscriptLiteralField14}, true) })(), (() => { const __goscriptLiteralField15 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.GetClusterInfo(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).GetClusterInfo-fm"), NewRequest: newWorkflowAPIServiceGetClusterInfoYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "GetClusterInfo", Handler: __goscriptLiteralField15}, true) })(), (() => { const __goscriptLiteralField16 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.GetWorkflowExecutionHistory(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).GetWorkflowExecutionHistory-fm"), NewRequest: newWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "GetWorkflowExecutionHistory", Handler: __goscriptLiteralField16}, true) })(), (() => { const __goscriptLiteralField17 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.RefreshWorkflowTasks(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).RefreshWorkflowTasks-fm"), NewRequest: newWorkflowAPIServiceRefreshWorkflowTasksYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "RefreshWorkflowTasks", Handler: __goscriptLiteralField17}, true) })(), (() => { const __goscriptLiteralField18 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.DiagnoseWorkflowExecution(ctx, requestMessage))($.pointerValue<_WorkflowAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkflowAPIYARPCHandler).DiagnoseWorkflowExecution-fm"), NewRequest: newWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "DiagnoseWorkflowExecution", Handler: __goscriptLiteralField18}, true) })()]), OnewayHandlerParams: $.arrayToSlice<protobuf.BuildProceduresOnewayHandlerParams>([]), StreamHandlerParams: $.arrayToSlice<protobuf.BuildProceduresStreamHandlerParams>([])}, true))
}

export function BuildWorkflowAPIYARPCProcedures(server: WorkflowAPIYARPCServer | null): $.Slice<transport.Procedure> {
	return buildWorkflowAPIYARPCProcedures(new buildWorkflowAPIYARPCProceduresParams({Server: server}, true))
}

export function NewFxWorkflowAPIYARPCClient(name: string, options: $.Slice<protobuf.ClientOption | null>): any {
	return $.interfaceValue($.functionValue(async (params: FxWorkflowAPIYARPCClientParams): globalThis.Promise<FxWorkflowAPIYARPCClientResult> => {
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

		return (await (async () => { const __goscriptLiteralField19 = await newWorkflowAPIYARPCClient(cc, params.AnyResolver, options); return new FxWorkflowAPIYARPCClientResult({Client: __goscriptLiteralField19}, true) })())
	}, ({ kind: $.TypeKind.Function, params: ["apiv1.FxWorkflowAPIYARPCClientParams"], results: ["apiv1.FxWorkflowAPIYARPCClientResult"] } as $.FunctionTypeInfo)), "func(params apiv1.FxWorkflowAPIYARPCClientParams) apiv1.FxWorkflowAPIYARPCClientResult", ({ kind: $.TypeKind.Function, params: ["apiv1.FxWorkflowAPIYARPCClientParams"], results: ["apiv1.FxWorkflowAPIYARPCClientResult"] } as $.FunctionTypeInfo))
}

export function NewFxWorkflowAPIYARPCProcedures(): any {
	return $.interfaceValue($.functionValue((params: FxWorkflowAPIYARPCProceduresParams): FxWorkflowAPIYARPCProceduresResult => {
		return (() => { const __goscriptLiteralField20 = buildWorkflowAPIYARPCProcedures(new buildWorkflowAPIYARPCProceduresParams({Server: params.Server, AnyResolver: params.AnyResolver}, true)); return new FxWorkflowAPIYARPCProceduresResult({Procedures: __goscriptLiteralField20, ReflectionMeta: __goscript_get_WorkflowAPIReflectionMeta()}, true) })()
	}, ({ kind: $.TypeKind.Function, params: ["apiv1.FxWorkflowAPIYARPCProceduresParams"], results: ["apiv1.FxWorkflowAPIYARPCProceduresResult"] } as $.FunctionTypeInfo)), "func(params apiv1.FxWorkflowAPIYARPCProceduresParams) apiv1.FxWorkflowAPIYARPCProceduresResult", ({ kind: $.TypeKind.Function, params: ["apiv1.FxWorkflowAPIYARPCProceduresParams"], results: ["apiv1.FxWorkflowAPIYARPCProceduresResult"] } as $.FunctionTypeInfo))
}

export var WorkflowAPIReflectionMeta: reflection.ServerMeta

export function __goscript_init_WorkflowAPIReflectionMeta(): void {
	if (((WorkflowAPIReflectionMeta) as any) === undefined) {
		WorkflowAPIReflectionMeta = new reflection.ServerMeta({ServiceName: "uber.cadence.api.v1.WorkflowAPI", FileDescriptors: yarpcFileDescriptorClosure674d14d2fee4e473}, true)
	}
}

export function __goscript_get_WorkflowAPIReflectionMeta(): reflection.ServerMeta {
	if (((WorkflowAPIReflectionMeta) as any) === undefined) {
		__goscript_init_WorkflowAPIReflectionMeta()
	}
	return WorkflowAPIReflectionMeta
}

export function __goscript_set_WorkflowAPIReflectionMeta(__goscriptValue: reflection.ServerMeta): void {
	$.assignStruct(WorkflowAPIReflectionMeta, __goscriptValue)
}

export function newWorkflowAPIServiceRestartWorkflowExecutionYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.RestartWorkflowExecutionRequest(), "*apiv1.RestartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionRequest"))
}

export function newWorkflowAPIServiceRestartWorkflowExecutionYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.RestartWorkflowExecutionResponse(), "*apiv1.RestartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.RestartWorkflowExecutionResponse"))
}

export function newWorkflowAPIServiceStartWorkflowExecutionYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.StartWorkflowExecutionRequest(), "*apiv1.StartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionRequest"))
}

export function newWorkflowAPIServiceStartWorkflowExecutionYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.StartWorkflowExecutionResponse(), "*apiv1.StartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionResponse"))
}

export function newWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest(), "*apiv1.StartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncRequest"))
}

export function newWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse(), "*apiv1.StartWorkflowExecutionAsyncResponse", /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionAsyncResponse"))
}

export function newWorkflowAPIServiceSignalWorkflowExecutionYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.SignalWorkflowExecutionRequest(), "*apiv1.SignalWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionRequest"))
}

export function newWorkflowAPIServiceSignalWorkflowExecutionYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.SignalWorkflowExecutionResponse(), "*apiv1.SignalWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionResponse"))
}

export function newWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest(), "*apiv1.SignalWithStartWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionRequest"))
}

export function newWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse(), "*apiv1.SignalWithStartWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionResponse"))
}

export function newWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest(), "*apiv1.SignalWithStartWorkflowExecutionAsyncRequest", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncRequest"))
}

export function newWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse(), "*apiv1.SignalWithStartWorkflowExecutionAsyncResponse", /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionAsyncResponse"))
}

export function newWorkflowAPIServiceResetWorkflowExecutionYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.ResetWorkflowExecutionRequest(), "*apiv1.ResetWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionRequest"))
}

export function newWorkflowAPIServiceResetWorkflowExecutionYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.ResetWorkflowExecutionResponse(), "*apiv1.ResetWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionResponse"))
}

export function newWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest(), "*apiv1.RequestCancelWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionRequest"))
}

export function newWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse(), "*apiv1.RequestCancelWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionResponse"))
}

export function newWorkflowAPIServiceTerminateWorkflowExecutionYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.TerminateWorkflowExecutionRequest(), "*apiv1.TerminateWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionRequest"))
}

export function newWorkflowAPIServiceTerminateWorkflowExecutionYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.TerminateWorkflowExecutionResponse(), "*apiv1.TerminateWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionResponse"))
}

export function newWorkflowAPIServiceDescribeWorkflowExecutionYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.DescribeWorkflowExecutionRequest(), "*apiv1.DescribeWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionRequest"))
}

export function newWorkflowAPIServiceDescribeWorkflowExecutionYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.DescribeWorkflowExecutionResponse(), "*apiv1.DescribeWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionResponse"))
}

export function newWorkflowAPIServiceQueryWorkflowYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.QueryWorkflowRequest(), "*apiv1.QueryWorkflowRequest", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowRequest"))
}

export function newWorkflowAPIServiceQueryWorkflowYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.QueryWorkflowResponse(), "*apiv1.QueryWorkflowResponse", /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowResponse"))
}

export function newWorkflowAPIServiceDescribeTaskListYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.DescribeTaskListRequest(), "*apiv1.DescribeTaskListRequest", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListRequest"))
}

export function newWorkflowAPIServiceDescribeTaskListYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.DescribeTaskListResponse(), "*apiv1.DescribeTaskListResponse", /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse"))
}

export function newWorkflowAPIServiceGetTaskListsByDomainYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.GetTaskListsByDomainRequest(), "*apiv1.GetTaskListsByDomainRequest", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainRequest"))
}

export function newWorkflowAPIServiceGetTaskListsByDomainYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.GetTaskListsByDomainResponse(), "*apiv1.GetTaskListsByDomainResponse", /* @__PURE__ */ $.pointerType("apiv1.GetTaskListsByDomainResponse"))
}

export function newWorkflowAPIServiceListTaskListPartitionsYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.ListTaskListPartitionsRequest(), "*apiv1.ListTaskListPartitionsRequest", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsRequest"))
}

export function newWorkflowAPIServiceListTaskListPartitionsYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.ListTaskListPartitionsResponse(), "*apiv1.ListTaskListPartitionsResponse", /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsResponse"))
}

export function newWorkflowAPIServiceGetClusterInfoYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.GetClusterInfoRequest(), "*apiv1.GetClusterInfoRequest", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoRequest"))
}

export function newWorkflowAPIServiceGetClusterInfoYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.GetClusterInfoResponse(), "*apiv1.GetClusterInfoResponse", /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoResponse"))
}

export function newWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest(), "*apiv1.GetWorkflowExecutionHistoryRequest", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryRequest"))
}

export function newWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse(), "*apiv1.GetWorkflowExecutionHistoryResponse", /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryResponse"))
}

export function newWorkflowAPIServiceRefreshWorkflowTasksYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.RefreshWorkflowTasksRequest(), "*apiv1.RefreshWorkflowTasksRequest", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksRequest"))
}

export function newWorkflowAPIServiceRefreshWorkflowTasksYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.RefreshWorkflowTasksResponse(), "*apiv1.RefreshWorkflowTasksResponse", /* @__PURE__ */ $.pointerType("apiv1.RefreshWorkflowTasksResponse"))
}

export function newWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest(), "*apiv1.DiagnoseWorkflowExecutionRequest", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionRequest"))
}

export function newWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse(), "*apiv1.DiagnoseWorkflowExecutionResponse", /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionResponse"))
}

export var emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCRequest: __goscript_service_workflow_pb.RestartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCRequest = new __goscript_service_workflow_pb.RestartWorkflowExecutionRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCRequest(): __goscript_service_workflow_pb.RestartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionRequest> | null {
	if (((emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCRequest()
	}
	return emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.RestartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionRequest> | null): void {
	emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCResponse: __goscript_service_workflow_pb.RestartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCResponse = new __goscript_service_workflow_pb.RestartWorkflowExecutionResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCResponse(): __goscript_service_workflow_pb.RestartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionResponse> | null {
	if (((emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCResponse()
	}
	return emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.RestartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RestartWorkflowExecutionResponse> | null): void {
	emptyWorkflowAPIServiceRestartWorkflowExecutionYARPCResponse = __goscriptValue
}

export var emptyWorkflowAPIServiceStartWorkflowExecutionYARPCRequest: __goscript_service_workflow_pb.StartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceStartWorkflowExecutionYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceStartWorkflowExecutionYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceStartWorkflowExecutionYARPCRequest = new __goscript_service_workflow_pb.StartWorkflowExecutionRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceStartWorkflowExecutionYARPCRequest(): __goscript_service_workflow_pb.StartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionRequest> | null {
	if (((emptyWorkflowAPIServiceStartWorkflowExecutionYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceStartWorkflowExecutionYARPCRequest()
	}
	return emptyWorkflowAPIServiceStartWorkflowExecutionYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceStartWorkflowExecutionYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.StartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionRequest> | null): void {
	emptyWorkflowAPIServiceStartWorkflowExecutionYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceStartWorkflowExecutionYARPCResponse: __goscript_service_workflow_pb.StartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceStartWorkflowExecutionYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceStartWorkflowExecutionYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceStartWorkflowExecutionYARPCResponse = new __goscript_service_workflow_pb.StartWorkflowExecutionResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceStartWorkflowExecutionYARPCResponse(): __goscript_service_workflow_pb.StartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionResponse> | null {
	if (((emptyWorkflowAPIServiceStartWorkflowExecutionYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceStartWorkflowExecutionYARPCResponse()
	}
	return emptyWorkflowAPIServiceStartWorkflowExecutionYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceStartWorkflowExecutionYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.StartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionResponse> | null): void {
	emptyWorkflowAPIServiceStartWorkflowExecutionYARPCResponse = __goscriptValue
}

export var emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCRequest: __goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCRequest = new __goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCRequest(): __goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest> | null {
	if (((emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCRequest()
	}
	return emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncRequest> | null): void {
	emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCResponse: __goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCResponse = new __goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCResponse(): __goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse> | null {
	if (((emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCResponse()
	}
	return emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.StartWorkflowExecutionAsyncResponse> | null): void {
	emptyWorkflowAPIServiceStartWorkflowExecutionAsyncYARPCResponse = __goscriptValue
}

export var emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCRequest: __goscript_service_workflow_pb.SignalWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCRequest = new __goscript_service_workflow_pb.SignalWorkflowExecutionRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCRequest(): __goscript_service_workflow_pb.SignalWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionRequest> | null {
	if (((emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCRequest()
	}
	return emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.SignalWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionRequest> | null): void {
	emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCResponse: __goscript_service_workflow_pb.SignalWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCResponse = new __goscript_service_workflow_pb.SignalWorkflowExecutionResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCResponse(): __goscript_service_workflow_pb.SignalWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionResponse> | null {
	if (((emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCResponse()
	}
	return emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.SignalWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWorkflowExecutionResponse> | null): void {
	emptyWorkflowAPIServiceSignalWorkflowExecutionYARPCResponse = __goscriptValue
}

export var emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCRequest: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCRequest = new __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCRequest(): __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest> | null {
	if (((emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCRequest()
	}
	return emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionRequest> | null): void {
	emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCResponse: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCResponse = new __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCResponse(): __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse> | null {
	if (((emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCResponse()
	}
	return emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionResponse> | null): void {
	emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionYARPCResponse = __goscriptValue
}

export var emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCRequest: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCRequest = new __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCRequest(): __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest> | null {
	if (((emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCRequest()
	}
	return emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncRequest> | null): void {
	emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCResponse: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCResponse = new __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCResponse(): __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse> | null {
	if (((emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCResponse()
	}
	return emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<__goscript_service_workflow_pb.SignalWithStartWorkflowExecutionAsyncResponse> | null): void {
	emptyWorkflowAPIServiceSignalWithStartWorkflowExecutionAsyncYARPCResponse = __goscriptValue
}

export var emptyWorkflowAPIServiceResetWorkflowExecutionYARPCRequest: __goscript_service_workflow_pb.ResetWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceResetWorkflowExecutionYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceResetWorkflowExecutionYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceResetWorkflowExecutionYARPCRequest = new __goscript_service_workflow_pb.ResetWorkflowExecutionRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceResetWorkflowExecutionYARPCRequest(): __goscript_service_workflow_pb.ResetWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionRequest> | null {
	if (((emptyWorkflowAPIServiceResetWorkflowExecutionYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceResetWorkflowExecutionYARPCRequest()
	}
	return emptyWorkflowAPIServiceResetWorkflowExecutionYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceResetWorkflowExecutionYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.ResetWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionRequest> | null): void {
	emptyWorkflowAPIServiceResetWorkflowExecutionYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceResetWorkflowExecutionYARPCResponse: __goscript_service_workflow_pb.ResetWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceResetWorkflowExecutionYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceResetWorkflowExecutionYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceResetWorkflowExecutionYARPCResponse = new __goscript_service_workflow_pb.ResetWorkflowExecutionResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceResetWorkflowExecutionYARPCResponse(): __goscript_service_workflow_pb.ResetWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionResponse> | null {
	if (((emptyWorkflowAPIServiceResetWorkflowExecutionYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceResetWorkflowExecutionYARPCResponse()
	}
	return emptyWorkflowAPIServiceResetWorkflowExecutionYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceResetWorkflowExecutionYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.ResetWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.ResetWorkflowExecutionResponse> | null): void {
	emptyWorkflowAPIServiceResetWorkflowExecutionYARPCResponse = __goscriptValue
}

export var emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCRequest: __goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCRequest = new __goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCRequest(): __goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest> | null {
	if (((emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCRequest()
	}
	return emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionRequest> | null): void {
	emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCResponse: __goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCResponse = new __goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCResponse(): __goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse> | null {
	if (((emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCResponse()
	}
	return emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.RequestCancelWorkflowExecutionResponse> | null): void {
	emptyWorkflowAPIServiceRequestCancelWorkflowExecutionYARPCResponse = __goscriptValue
}

export var emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCRequest: __goscript_service_workflow_pb.TerminateWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCRequest = new __goscript_service_workflow_pb.TerminateWorkflowExecutionRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCRequest(): __goscript_service_workflow_pb.TerminateWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionRequest> | null {
	if (((emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCRequest()
	}
	return emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.TerminateWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionRequest> | null): void {
	emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCResponse: __goscript_service_workflow_pb.TerminateWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCResponse = new __goscript_service_workflow_pb.TerminateWorkflowExecutionResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCResponse(): __goscript_service_workflow_pb.TerminateWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionResponse> | null {
	if (((emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCResponse()
	}
	return emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.TerminateWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.TerminateWorkflowExecutionResponse> | null): void {
	emptyWorkflowAPIServiceTerminateWorkflowExecutionYARPCResponse = __goscriptValue
}

export var emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCRequest: __goscript_service_workflow_pb.DescribeWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCRequest = new __goscript_service_workflow_pb.DescribeWorkflowExecutionRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCRequest(): __goscript_service_workflow_pb.DescribeWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionRequest> | null {
	if (((emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCRequest()
	}
	return emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.DescribeWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionRequest> | null): void {
	emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCResponse: __goscript_service_workflow_pb.DescribeWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCResponse = new __goscript_service_workflow_pb.DescribeWorkflowExecutionResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCResponse(): __goscript_service_workflow_pb.DescribeWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionResponse> | null {
	if (((emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCResponse()
	}
	return emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.DescribeWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DescribeWorkflowExecutionResponse> | null): void {
	emptyWorkflowAPIServiceDescribeWorkflowExecutionYARPCResponse = __goscriptValue
}

export var emptyWorkflowAPIServiceQueryWorkflowYARPCRequest: __goscript_service_workflow_pb.QueryWorkflowRequest | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceQueryWorkflowYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceQueryWorkflowYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceQueryWorkflowYARPCRequest = new __goscript_service_workflow_pb.QueryWorkflowRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceQueryWorkflowYARPCRequest(): __goscript_service_workflow_pb.QueryWorkflowRequest | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowRequest> | null {
	if (((emptyWorkflowAPIServiceQueryWorkflowYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceQueryWorkflowYARPCRequest()
	}
	return emptyWorkflowAPIServiceQueryWorkflowYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceQueryWorkflowYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.QueryWorkflowRequest | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowRequest> | null): void {
	emptyWorkflowAPIServiceQueryWorkflowYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceQueryWorkflowYARPCResponse: __goscript_service_workflow_pb.QueryWorkflowResponse | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceQueryWorkflowYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceQueryWorkflowYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceQueryWorkflowYARPCResponse = new __goscript_service_workflow_pb.QueryWorkflowResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceQueryWorkflowYARPCResponse(): __goscript_service_workflow_pb.QueryWorkflowResponse | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowResponse> | null {
	if (((emptyWorkflowAPIServiceQueryWorkflowYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceQueryWorkflowYARPCResponse()
	}
	return emptyWorkflowAPIServiceQueryWorkflowYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceQueryWorkflowYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.QueryWorkflowResponse | $.VarRef<__goscript_service_workflow_pb.QueryWorkflowResponse> | null): void {
	emptyWorkflowAPIServiceQueryWorkflowYARPCResponse = __goscriptValue
}

export var emptyWorkflowAPIServiceDescribeTaskListYARPCRequest: __goscript_service_workflow_pb.DescribeTaskListRequest | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceDescribeTaskListYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceDescribeTaskListYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceDescribeTaskListYARPCRequest = new __goscript_service_workflow_pb.DescribeTaskListRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceDescribeTaskListYARPCRequest(): __goscript_service_workflow_pb.DescribeTaskListRequest | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListRequest> | null {
	if (((emptyWorkflowAPIServiceDescribeTaskListYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceDescribeTaskListYARPCRequest()
	}
	return emptyWorkflowAPIServiceDescribeTaskListYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceDescribeTaskListYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.DescribeTaskListRequest | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListRequest> | null): void {
	emptyWorkflowAPIServiceDescribeTaskListYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceDescribeTaskListYARPCResponse: __goscript_service_workflow_pb.DescribeTaskListResponse | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceDescribeTaskListYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceDescribeTaskListYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceDescribeTaskListYARPCResponse = new __goscript_service_workflow_pb.DescribeTaskListResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceDescribeTaskListYARPCResponse(): __goscript_service_workflow_pb.DescribeTaskListResponse | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListResponse> | null {
	if (((emptyWorkflowAPIServiceDescribeTaskListYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceDescribeTaskListYARPCResponse()
	}
	return emptyWorkflowAPIServiceDescribeTaskListYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceDescribeTaskListYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.DescribeTaskListResponse | $.VarRef<__goscript_service_workflow_pb.DescribeTaskListResponse> | null): void {
	emptyWorkflowAPIServiceDescribeTaskListYARPCResponse = __goscriptValue
}

export var emptyWorkflowAPIServiceGetTaskListsByDomainYARPCRequest: __goscript_service_workflow_pb.GetTaskListsByDomainRequest | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceGetTaskListsByDomainYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceGetTaskListsByDomainYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceGetTaskListsByDomainYARPCRequest = new __goscript_service_workflow_pb.GetTaskListsByDomainRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceGetTaskListsByDomainYARPCRequest(): __goscript_service_workflow_pb.GetTaskListsByDomainRequest | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainRequest> | null {
	if (((emptyWorkflowAPIServiceGetTaskListsByDomainYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceGetTaskListsByDomainYARPCRequest()
	}
	return emptyWorkflowAPIServiceGetTaskListsByDomainYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceGetTaskListsByDomainYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.GetTaskListsByDomainRequest | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainRequest> | null): void {
	emptyWorkflowAPIServiceGetTaskListsByDomainYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceGetTaskListsByDomainYARPCResponse: __goscript_service_workflow_pb.GetTaskListsByDomainResponse | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceGetTaskListsByDomainYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceGetTaskListsByDomainYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceGetTaskListsByDomainYARPCResponse = new __goscript_service_workflow_pb.GetTaskListsByDomainResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceGetTaskListsByDomainYARPCResponse(): __goscript_service_workflow_pb.GetTaskListsByDomainResponse | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainResponse> | null {
	if (((emptyWorkflowAPIServiceGetTaskListsByDomainYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceGetTaskListsByDomainYARPCResponse()
	}
	return emptyWorkflowAPIServiceGetTaskListsByDomainYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceGetTaskListsByDomainYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.GetTaskListsByDomainResponse | $.VarRef<__goscript_service_workflow_pb.GetTaskListsByDomainResponse> | null): void {
	emptyWorkflowAPIServiceGetTaskListsByDomainYARPCResponse = __goscriptValue
}

export var emptyWorkflowAPIServiceListTaskListPartitionsYARPCRequest: __goscript_service_workflow_pb.ListTaskListPartitionsRequest | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceListTaskListPartitionsYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceListTaskListPartitionsYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceListTaskListPartitionsYARPCRequest = new __goscript_service_workflow_pb.ListTaskListPartitionsRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceListTaskListPartitionsYARPCRequest(): __goscript_service_workflow_pb.ListTaskListPartitionsRequest | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsRequest> | null {
	if (((emptyWorkflowAPIServiceListTaskListPartitionsYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceListTaskListPartitionsYARPCRequest()
	}
	return emptyWorkflowAPIServiceListTaskListPartitionsYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceListTaskListPartitionsYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.ListTaskListPartitionsRequest | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsRequest> | null): void {
	emptyWorkflowAPIServiceListTaskListPartitionsYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceListTaskListPartitionsYARPCResponse: __goscript_service_workflow_pb.ListTaskListPartitionsResponse | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceListTaskListPartitionsYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceListTaskListPartitionsYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceListTaskListPartitionsYARPCResponse = new __goscript_service_workflow_pb.ListTaskListPartitionsResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceListTaskListPartitionsYARPCResponse(): __goscript_service_workflow_pb.ListTaskListPartitionsResponse | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsResponse> | null {
	if (((emptyWorkflowAPIServiceListTaskListPartitionsYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceListTaskListPartitionsYARPCResponse()
	}
	return emptyWorkflowAPIServiceListTaskListPartitionsYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceListTaskListPartitionsYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.ListTaskListPartitionsResponse | $.VarRef<__goscript_service_workflow_pb.ListTaskListPartitionsResponse> | null): void {
	emptyWorkflowAPIServiceListTaskListPartitionsYARPCResponse = __goscriptValue
}

export var emptyWorkflowAPIServiceGetClusterInfoYARPCRequest: __goscript_service_workflow_pb.GetClusterInfoRequest | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceGetClusterInfoYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceGetClusterInfoYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceGetClusterInfoYARPCRequest = new __goscript_service_workflow_pb.GetClusterInfoRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceGetClusterInfoYARPCRequest(): __goscript_service_workflow_pb.GetClusterInfoRequest | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoRequest> | null {
	if (((emptyWorkflowAPIServiceGetClusterInfoYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceGetClusterInfoYARPCRequest()
	}
	return emptyWorkflowAPIServiceGetClusterInfoYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceGetClusterInfoYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.GetClusterInfoRequest | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoRequest> | null): void {
	emptyWorkflowAPIServiceGetClusterInfoYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceGetClusterInfoYARPCResponse: __goscript_service_workflow_pb.GetClusterInfoResponse | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceGetClusterInfoYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceGetClusterInfoYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceGetClusterInfoYARPCResponse = new __goscript_service_workflow_pb.GetClusterInfoResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceGetClusterInfoYARPCResponse(): __goscript_service_workflow_pb.GetClusterInfoResponse | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoResponse> | null {
	if (((emptyWorkflowAPIServiceGetClusterInfoYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceGetClusterInfoYARPCResponse()
	}
	return emptyWorkflowAPIServiceGetClusterInfoYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceGetClusterInfoYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.GetClusterInfoResponse | $.VarRef<__goscript_service_workflow_pb.GetClusterInfoResponse> | null): void {
	emptyWorkflowAPIServiceGetClusterInfoYARPCResponse = __goscriptValue
}

export var emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCRequest: __goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCRequest = new __goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCRequest(): __goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest> | null {
	if (((emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCRequest()
	}
	return emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryRequest> | null): void {
	emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCResponse: __goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCResponse = new __goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCResponse(): __goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse> | null {
	if (((emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCResponse()
	}
	return emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse | $.VarRef<__goscript_service_workflow_pb.GetWorkflowExecutionHistoryResponse> | null): void {
	emptyWorkflowAPIServiceGetWorkflowExecutionHistoryYARPCResponse = __goscriptValue
}

export var emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCRequest: __goscript_service_workflow_pb.RefreshWorkflowTasksRequest | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCRequest = new __goscript_service_workflow_pb.RefreshWorkflowTasksRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCRequest(): __goscript_service_workflow_pb.RefreshWorkflowTasksRequest | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksRequest> | null {
	if (((emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCRequest()
	}
	return emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.RefreshWorkflowTasksRequest | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksRequest> | null): void {
	emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCResponse: __goscript_service_workflow_pb.RefreshWorkflowTasksResponse | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCResponse = new __goscript_service_workflow_pb.RefreshWorkflowTasksResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCResponse(): __goscript_service_workflow_pb.RefreshWorkflowTasksResponse | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksResponse> | null {
	if (((emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCResponse()
	}
	return emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.RefreshWorkflowTasksResponse | $.VarRef<__goscript_service_workflow_pb.RefreshWorkflowTasksResponse> | null): void {
	emptyWorkflowAPIServiceRefreshWorkflowTasksYARPCResponse = __goscriptValue
}

export var emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCRequest: __goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest> | null

export function __goscript_init_emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCRequest(): void {
	if (((emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCRequest) as any) === undefined) {
		emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCRequest = new __goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCRequest(): __goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest> | null {
	if (((emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCRequest()
	}
	return emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCRequest
}

export function __goscript_set_emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCRequest(__goscriptValue: __goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionRequest> | null): void {
	emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCRequest = __goscriptValue
}

export var emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCResponse: __goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse> | null

export function __goscript_init_emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCResponse(): void {
	if (((emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCResponse) as any) === undefined) {
		emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCResponse = new __goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse()
	}
}

export function __goscript_get_emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCResponse(): __goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse> | null {
	if (((emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCResponse()
	}
	return emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCResponse
}

export function __goscript_set_emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCResponse(__goscriptValue: __goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse | $.VarRef<__goscript_service_workflow_pb.DiagnoseWorkflowExecutionResponse> | null): void {
	emptyWorkflowAPIServiceDiagnoseWorkflowExecutionYARPCResponse = __goscriptValue
}

export let yarpcFileDescriptorClosure674d14d2fee4e473: $.Slice<$.Slice<number>> = $.arrayToSlice<$.Slice<number>>([new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 220, 90, 91, 111, 220, 198, 245, 7, 87, 247, 179, 146, 44, 141, 110, 235, 149, 117, 163, 227, 252, 245, 119, 236, 85, 37, 197, 151, 56, 105, 3, 121, 109, 57, 42, 236, 84, 165, 84, 27, 237, 11, 49, 34, 103, 87, 99, 113, 73, 106, 56, 148, 188, 201, 67, 209, 34, 72, 129, 162, 45, 250, 216, 2, 5, 250, 208, 135, 60, 53, 40, 208, 167, 190, 23, 253, 30, 253, 4, 121, 234, 107, 80, 112, 102, 184, 55, 145, 220, 149, 148, 192, 78, 223, 118, 102, 206, 239, 204, 153, 115, 155, 51, 103, 9, 55, 195, 3, 194, 214, 44, 108, 19, 215, 34, 107, 216, 167, 107, 39, 235, 107, 1, 97, 39, 212, 34, 230, 169, 199, 142, 42, 142, 119, 90, 242, 153, 199, 61, 52, 21, 209, 150, 20, 109, 9, 251, 180, 116, 178, 94, 92, 172, 122, 94, 213, 33, 107, 130, 228, 32, 172, 172, 217, 33, 195, 156, 122, 174, 4, 21, 151, 58, 215, 57, 173, 145, 128, 227, 154, 175, 8, 150, 147, 36, 176, 188, 90, 173, 193, 98, 37, 137, 226, 144, 6, 220, 99, 245, 120, 151, 36, 146, 227, 144, 52, 8, 244, 36, 2, 142, 131, 35, 135, 6, 60, 139, 166, 93, 7, 250, 63, 53, 88, 50, 34, 249, 25, 127, 161, 86, 30, 191, 34, 86, 24, 157, 216, 32, 199, 33, 9, 56, 154, 133, 65, 219, 171, 97, 234, 22, 180, 101, 109, 117, 196, 80, 35, 244, 19, 64, 49, 55, 147, 196, 160, 66, 110, 89, 91, 205, 111, 188, 93, 74, 80, 110, 233, 236, 22, 147, 167, 157, 83, 168, 8, 195, 212, 38, 46, 167, 188, 94, 232, 19, 27, 54, 198, 145, 40, 140, 224, 192, 115, 11, 253, 82, 20, 57, 210, 255, 170, 193, 242, 35, 138, 171, 174, 23, 144, 239, 192, 57, 244, 47, 52, 88, 201, 144, 55, 240, 61, 55, 32, 169, 2, 191, 132, 5, 91, 130, 57, 181, 204, 75, 203, 62, 223, 100, 118, 102, 81, 255, 3, 192, 194, 222, 133, 220, 99, 9, 242, 13, 209, 168, 45, 100, 26, 49, 32, 158, 218, 177, 209, 54, 140, 53, 8, 120, 221, 39, 66, 75, 249, 141, 149, 76, 177, 247, 235, 62, 49, 70, 79, 91, 70, 232, 1, 140, 68, 158, 111, 70, 174, 47, 252, 34, 191, 177, 144, 200, 99, 31, 7, 71, 79, 105, 192, 141, 97, 174, 126, 161, 13, 24, 160, 174, 31, 242, 194, 128, 192, 93, 75, 196, 237, 226, 186, 227, 97, 219, 144, 164, 8, 195, 114, 67, 213, 166, 8, 29, 147, 123, 166, 229, 120, 1, 49, 163, 108, 224, 133, 188, 48, 40, 216, 93, 45, 201, 108, 81, 138, 179, 69, 233, 145, 202, 38, 198, 181, 6, 11, 161, 221, 125, 175, 28, 225, 247, 37, 28, 189, 128, 121, 113, 164, 20, 238, 67, 221, 184, 207, 69, 232, 36, 198, 173, 78, 57, 220, 17, 92, 11, 0, 76, 218, 52, 178, 215, 136, 88, 29, 81, 51, 59, 54, 178, 160, 208, 98, 79, 147, 145, 48, 32, 166, 239, 57, 212, 170, 23, 96, 89, 91, 29, 223, 184, 153, 105, 185, 29, 219, 136, 32, 187, 2, 97, 204, 156, 38, 77, 163, 50, 140, 50, 194, 89, 61, 102, 156, 23, 39, 93, 78, 100, 108, 68, 132, 138, 93, 158, 53, 7, 232, 58, 140, 89, 44, 178, 141, 117, 72, 236, 208, 33, 133, 81, 113, 150, 209, 104, 114, 79, 205, 161, 219, 208, 95, 35, 53, 175, 48, 166, 116, 153, 180, 195, 51, 82, 243, 12, 65, 134, 12, 152, 12, 8, 102, 214, 161, 137, 57, 103, 244, 32, 228, 36, 40, 140, 11, 236, 141, 68, 236, 158, 160, 222, 106, 16, 27, 19, 65, 199, 12, 218, 132, 193, 67, 130, 109, 194, 10, 87, 4, 163, 249, 68, 70, 31, 9, 18, 67, 145, 162, 7, 144, 183, 137, 131, 235, 210, 55, 10, 19, 221, 92, 1, 4, 181, 240, 5, 244, 1, 140, 190, 164, 156, 19, 166, 192, 147, 221, 192, 121, 73, 222, 64, 87, 40, 11, 184, 201, 66, 215, 196, 188, 128, 4, 186, 120, 6, 189, 31, 223, 136, 6, 8, 122, 35, 116, 183, 56, 122, 14, 83, 194, 40, 222, 9, 97, 14, 246, 99, 3, 79, 9, 207, 73, 78, 85, 101, 230, 185, 63, 146, 228, 202, 204, 147, 86, 231, 20, 122, 5, 75, 216, 226, 244, 132, 152, 150, 19, 6, 226, 108, 196, 33, 150, 8, 78, 181, 199, 180, 16, 116, 61, 113, 143, 45, 129, 45, 75, 232, 94, 140, 84, 219, 93, 195, 25, 171, 250, 61, 88, 76, 203, 140, 42, 129, 207, 192, 96, 164, 43, 106, 171, 212, 56, 192, 66, 119, 199, 214, 25, 232, 201, 192, 173, 160, 238, 90, 113, 94, 125, 10, 67, 42, 248, 4, 58, 191, 177, 145, 236, 103, 89, 201, 217, 136, 89, 232, 55, 224, 122, 230, 158, 82, 98, 253, 61, 88, 78, 47, 7, 178, 79, 245, 175, 28, 44, 238, 209, 170, 139, 157, 239, 66, 37, 209, 158, 236, 250, 59, 147, 221, 18, 228, 3, 113, 22, 211, 197, 53, 34, 110, 135, 17, 3, 228, 212, 199, 184, 70, 208, 135, 48, 170, 8, 228, 253, 49, 216, 195, 253, 161, 88, 238, 136, 91, 164, 0, 67, 150, 231, 114, 230, 57, 34, 157, 143, 26, 241, 80, 95, 129, 165, 84, 61, 42, 51, 125, 173, 193, 255, 41, 26, 202, 15, 179, 239, 231, 23, 48, 38, 175, 145, 203, 123, 211, 168, 96, 20, 51, 238, 208, 81, 174, 171, 142, 250, 46, 161, 163, 254, 118, 29, 109, 193, 106, 247, 243, 103, 251, 235, 231, 26, 220, 234, 198, 163, 45, 32, 159, 119, 6, 228, 7, 201, 42, 236, 205, 46, 205, 208, 92, 131, 219, 61, 202, 161, 172, 255, 101, 14, 22, 12, 18, 144, 55, 166, 100, 111, 150, 229, 125, 173, 101, 57, 186, 7, 5, 155, 88, 52, 136, 114, 113, 133, 186, 52, 56, 52, 201, 9, 113, 27, 33, 215, 103, 204, 196, 235, 219, 98, 249, 113, 180, 186, 99, 119, 68, 231, 64, 103, 116, 150, 96, 42, 56, 162, 190, 169, 188, 139, 17, 236, 251, 78, 93, 196, 224, 176, 49, 25, 45, 73, 133, 26, 114, 33, 202, 212, 105, 250, 202, 246, 145, 63, 229, 224, 134, 210, 105, 25, 187, 22, 249, 95, 72, 109, 211, 48, 96, 225, 48, 136, 147, 154, 28, 160, 77, 152, 149, 151, 123, 179, 180, 85, 10, 25, 20, 100, 83, 98, 181, 41, 147, 80, 207, 42, 188, 221, 77, 59, 202, 101, 255, 158, 131, 149, 125, 194, 106, 212, 197, 156, 188, 233, 110, 123, 23, 134, 108, 194, 49, 117, 2, 245, 156, 200, 78, 89, 49, 113, 155, 81, 6, 58, 140, 114, 33, 253, 190, 5, 122, 150, 210, 148, 110, 255, 19, 61, 126, 73, 96, 49, 122, 240, 198, 168, 246, 0, 230, 68, 187, 194, 180, 60, 55, 160, 1, 39, 174, 85, 55, 29, 114, 66, 28, 161, 235, 180, 183, 194, 143, 35, 76, 185, 9, 121, 26, 33, 140, 153, 227, 164, 105, 253, 235, 62, 88, 201, 56, 183, 138, 108, 7, 230, 154, 42, 183, 60, 183, 66, 171, 170, 186, 85, 89, 124, 179, 183, 83, 150, 91, 161, 198, 44, 73, 156, 143, 206, 125, 86, 157, 38, 117, 43, 158, 210, 233, 205, 222, 118, 219, 113, 43, 94, 243, 141, 212, 54, 141, 94, 0, 242, 137, 107, 83, 183, 106, 138, 250, 148, 114, 74, 130, 66, 223, 114, 223, 106, 126, 99, 53, 217, 83, 37, 249, 150, 164, 174, 11, 230, 147, 126, 219, 36, 37, 1, 250, 41, 76, 196, 140, 173, 67, 234, 216, 140, 184, 133, 126, 193, 182, 148, 197, 182, 28, 209, 182, 75, 126, 197, 111, 89, 98, 196, 69, 123, 77, 214, 113, 198, 87, 79, 238, 76, 137, 31, 41, 218, 54, 166, 241, 164, 254, 89, 31, 76, 11, 143, 137, 213, 247, 154, 156, 253, 62, 12, 8, 15, 85, 5, 142, 158, 201, 73, 8, 108, 72, 0, 50, 97, 86, 134, 9, 35, 47, 137, 197, 35, 255, 180, 169, 16, 170, 95, 68, 201, 255, 167, 71, 137, 33, 16, 229, 24, 96, 76, 31, 39, 204, 102, 197, 225, 192, 55, 21, 135, 127, 209, 96, 166, 195, 12, 42, 246, 62, 132, 209, 248, 120, 65, 232, 196, 101, 83, 151, 2, 80, 157, 35, 2, 160, 29, 24, 111, 213, 15, 177, 149, 177, 244, 110, 122, 33, 182, 49, 118, 220, 58, 212, 191, 210, 96, 46, 206, 22, 141, 70, 80, 23, 127, 105, 235, 44, 229, 206, 215, 89, 122, 2, 227, 13, 108, 179, 189, 53, 158, 210, 222, 138, 25, 200, 246, 22, 111, 25, 69, 69, 20, 117, 45, 39, 180, 137, 217, 100, 24, 112, 204, 67, 121, 61, 13, 27, 51, 106, 61, 102, 178, 39, 22, 245, 127, 228, 160, 112, 246, 196, 202, 52, 239, 193, 144, 239, 57, 14, 97, 65, 65, 19, 33, 190, 148, 108, 21, 65, 35, 194, 47, 166, 71, 207, 96, 226, 140, 32, 82, 57, 215, 51, 207, 38, 197, 50, 198, 121, 219, 24, 189, 128, 9, 31, 51, 78, 91, 18, 180, 10, 164, 91, 153, 236, 118, 99, 144, 204, 192, 198, 21, 191, 125, 226, 50, 125, 65, 253, 14, 204, 63, 33, 60, 94, 8, 30, 214, 31, 9, 143, 232, 226, 48, 250, 239, 250, 225, 90, 50, 78, 169, 253, 231, 48, 219, 168, 136, 155, 74, 172, 97, 95, 89, 225, 135, 137, 2, 102, 177, 44, 197, 233, 48, 166, 120, 134, 253, 199, 46, 103, 117, 99, 202, 62, 187, 18, 9, 160, 46, 141, 122, 135, 0, 185, 139, 10, 16, 95, 43, 103, 5, 192, 103, 87, 138, 97, 228, 148, 201, 18, 163, 9, 232, 59, 34, 117, 165, 211, 232, 39, 42, 195, 192, 9, 118, 66, 162, 28, 236, 118, 162, 116, 105, 78, 110, 72, 236, 131, 220, 125, 45, 218, 54, 77, 206, 111, 113, 91, 61, 128, 5, 17, 200, 157, 62, 27, 124, 139, 169, 71, 255, 60, 7, 139, 105, 187, 42, 63, 60, 134, 133, 4, 55, 104, 68, 80, 156, 20, 74, 189, 69, 224, 51, 194, 177, 141, 57, 54, 138, 157, 22, 111, 110, 29, 109, 153, 224, 250, 45, 91, 230, 46, 182, 101, 167, 151, 55, 183, 212, 231, 96, 230, 9, 225, 170, 125, 39, 146, 152, 122, 114, 255, 82, 131, 217, 206, 21, 165, 153, 67, 184, 26, 132, 190, 239, 49, 78, 108, 211, 114, 104, 244, 92, 61, 33, 44, 80, 90, 73, 207, 75, 123, 49, 170, 44, 64, 207, 21, 198, 152, 11, 146, 23, 244, 175, 250, 64, 127, 146, 240, 40, 253, 72, 254, 21, 248, 154, 138, 153, 121, 24, 241, 113, 149, 152, 1, 253, 68, 94, 89, 3, 198, 112, 52, 177, 71, 63, 33, 232, 109, 184, 226, 146, 87, 145, 213, 170, 196, 228, 222, 17, 113, 85, 99, 102, 44, 154, 222, 197, 85, 178, 31, 77, 162, 119, 0, 157, 98, 202, 205, 138, 199, 76, 151, 156, 202, 87, 191, 168, 56, 134, 141, 43, 209, 202, 182, 199, 62, 38, 167, 226, 185, 143, 76, 184, 170, 254, 253, 84, 221, 129, 10, 117, 56, 97, 242, 210, 28, 20, 151, 230, 91, 137, 231, 17, 240, 109, 65, 44, 238, 205, 89, 197, 166, 99, 30, 93, 135, 49, 209, 46, 192, 204, 58, 164, 39, 88, 54, 220, 134, 141, 209, 104, 114, 75, 205, 101, 85, 74, 195, 223, 84, 165, 244, 111, 13, 174, 103, 90, 92, 249, 224, 93, 24, 82, 71, 201, 44, 153, 98, 88, 76, 140, 126, 0, 121, 134, 79, 205, 24, 43, 3, 42, 57, 109, 60, 194, 28, 63, 116, 188, 3, 3, 24, 62, 85, 140, 146, 204, 219, 151, 100, 222, 34, 12, 75, 93, 18, 91, 149, 32, 141, 177, 254, 55, 13, 70, 183, 9, 230, 33, 35, 219, 14, 174, 6, 136, 194, 70, 194, 147, 8, 59, 140, 96, 59, 210, 118, 205, 119, 72, 20, 107, 132, 49, 143, 153, 196, 197, 7, 14, 145, 109, 152, 97, 227, 246, 217, 78, 152, 196, 149, 99, 216, 227, 8, 245, 88, 130, 208, 29, 152, 197, 33, 247, 42, 30, 59, 197, 76, 60, 54, 98, 118, 57, 89, 40, 181, 175, 42, 152, 254, 27, 13, 230, 13, 82, 97, 36, 56, 108, 252, 205, 136, 131, 163, 224, 245, 68, 160, 190, 8, 215, 146, 165, 145, 222, 177, 241, 197, 20, 228, 227, 149, 173, 221, 29, 244, 43, 13, 10, 105, 77, 123, 244, 110, 202, 95, 103, 153, 127, 249, 23, 239, 156, 19, 165, 252, 246, 23, 26, 204, 38, 55, 48, 209, 5, 218, 205, 197, 205, 115, 97, 148, 12, 191, 215, 96, 62, 163, 137, 138, 238, 157, 131, 105, 107, 251, 183, 120, 255, 252, 64, 37, 210, 103, 26, 204, 165, 116, 244, 209, 102, 86, 15, 57, 77, 49, 239, 158, 15, 164, 196, 248, 179, 6, 203, 221, 26, 205, 232, 82, 61, 237, 226, 247, 47, 136, 86, 18, 126, 169, 193, 141, 158, 90, 225, 104, 235, 66, 27, 181, 217, 243, 225, 101, 88, 180, 56, 124, 114, 103, 57, 197, 225, 51, 219, 246, 41, 14, 223, 165, 117, 253, 71, 13, 22, 179, 187, 176, 232, 65, 10, 223, 30, 26, 219, 197, 247, 47, 132, 85, 178, 253, 86, 131, 98, 122, 7, 19, 221, 77, 174, 245, 186, 245, 137, 139, 247, 206, 141, 83, 242, 252, 90, 131, 171, 169, 45, 67, 116, 39, 179, 204, 79, 149, 230, 238, 121, 97, 74, 152, 10, 140, 181, 181, 77, 80, 70, 183, 167, 163, 195, 85, 188, 217, 11, 169, 218, 199, 131, 137, 206, 167, 10, 186, 213, 227, 139, 70, 238, 118, 190, 247, 15, 250, 20, 166, 147, 30, 140, 232, 123, 231, 120, 91, 202, 141, 215, 207, 253, 26, 21, 33, 153, 252, 248, 73, 9, 201, 204, 247, 89, 74, 72, 118, 121, 93, 81, 24, 111, 127, 93, 160, 155, 105, 7, 57, 251, 56, 41, 190, 211, 19, 109, 203, 117, 151, 81, 82, 166, 92, 119, 221, 159, 29, 41, 215, 93, 47, 213, 235, 167, 48, 157, 84, 191, 164, 152, 63, 163, 240, 74, 49, 127, 86, 113, 36, 35, 60, 237, 203, 186, 180, 8, 239, 242, 229, 96, 90, 132, 119, 251, 128, 239, 161, 13, 115, 150, 87, 75, 2, 63, 156, 142, 81, 123, 242, 227, 212, 93, 230, 113, 111, 87, 251, 217, 122, 149, 242, 195, 240, 160, 100, 121, 181, 181, 214, 239, 55, 111, 83, 219, 89, 171, 122, 242, 187, 83, 245, 49, 231, 251, 216, 167, 39, 235, 7, 131, 98, 110, 243, 191, 1, 0, 0, 255, 255, 189, 81, 74, 95, 252, 42, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 75, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 79, 41, 45, 74, 44, 201, 204, 207, 211, 3, 139, 8, 241, 67, 228, 245, 96, 242, 74, 86, 92, 28, 46, 80, 37, 66, 18, 92, 236, 197, 169, 201, 249, 121, 41, 197, 18, 140, 10, 140, 26, 204, 65, 48, 174, 144, 8, 23, 107, 94, 98, 94, 126, 177, 4, 147, 2, 163, 6, 107, 16, 132, 227, 212, 204, 200, 37, 156, 156, 159, 171, 135, 102, 166, 19, 47, 204, 196, 0, 144, 72, 0, 99, 148, 33, 84, 69, 122, 126, 78, 98, 94, 186, 94, 126, 81, 58, 194, 129, 37, 149, 5, 169, 197, 250, 217, 121, 249, 229, 121, 112, 199, 22, 36, 253, 96, 100, 92, 196, 196, 236, 30, 224, 180, 138, 73, 206, 29, 162, 57, 0, 170, 67, 47, 60, 53, 39, 199, 27, 164, 62, 4, 164, 53, 137, 13, 108, 148, 49, 32, 0, 0, 255, 255, 239, 138, 180, 195, 251, 0, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 79, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 47, 201, 204, 77, 45, 46, 73, 204, 45, 208, 3, 11, 9, 241, 67, 20, 232, 193, 20, 40, 89, 115, 113, 134, 192, 212, 8, 73, 112, 177, 23, 167, 38, 231, 231, 165, 20, 75, 48, 42, 48, 106, 48, 7, 193, 184, 66, 34, 92, 172, 121, 137, 121, 249, 197, 18, 76, 10, 140, 26, 172, 65, 16, 142, 83, 43, 35, 151, 112, 114, 126, 174, 30, 154, 161, 78, 124, 112, 35, 3, 64, 66, 1, 140, 81, 70, 80, 37, 233, 249, 57, 137, 121, 233, 122, 249, 69, 233, 72, 110, 172, 44, 72, 45, 214, 207, 206, 203, 47, 207, 67, 184, 183, 32, 233, 7, 35, 227, 34, 38, 102, 247, 0, 167, 85, 76, 114, 238, 16, 221, 1, 80, 45, 122, 225, 169, 57, 57, 222, 32, 13, 33, 32, 189, 73, 108, 96, 179, 140, 1, 1, 0, 0, 255, 255, 174, 101, 206, 125, 255, 0, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 188, 86, 93, 115, 219, 68, 23, 126, 101, 215, 249, 56, 78, 19, 101, 211, 38, 78, 218, 188, 111, 234, 23, 104, 200, 128, 61, 113, 111, 58, 64, 1, 213, 31, 137, 90, 99, 155, 181, 219, 80, 152, 169, 102, 45, 173, 221, 37, 178, 86, 72, 43, 55, 238, 5, 195, 13, 127, 131, 11, 174, 249, 39, 92, 242, 135, 152, 149, 86, 177, 157, 184, 148, 11, 134, 59, 237, 121, 158, 243, 177, 71, 231, 99, 225, 32, 234, 211, 160, 108, 19, 135, 122, 54, 45, 19, 159, 149, 199, 199, 101, 155, 143, 70, 220, 43, 249, 1, 23, 28, 109, 73, 70, 73, 49, 74, 196, 103, 165, 241, 241, 222, 127, 135, 156, 15, 93, 90, 142, 41, 253, 104, 80, 118, 162, 128, 8, 150, 42, 21, 159, 194, 230, 25, 15, 206, 7, 46, 127, 93, 191, 160, 118, 36, 33, 244, 63, 200, 191, 86, 66, 139, 57, 5, 237, 64, 59, 92, 197, 144, 138, 76, 7, 221, 134, 165, 32, 242, 36, 150, 137, 177, 92, 16, 121, 166, 83, 44, 194, 90, 106, 172, 55, 241, 41, 66, 112, 195, 35, 35, 170, 12, 196, 223, 146, 99, 216, 130, 141, 153, 152, 188, 149, 179, 15, 203, 29, 50, 113, 57, 113, 36, 236, 16, 65, 98, 120, 13, 199, 223, 197, 55, 176, 220, 32, 204, 141, 2, 138, 182, 97, 41, 160, 36, 228, 158, 210, 87, 39, 84, 128, 101, 135, 10, 194, 220, 48, 142, 112, 13, 167, 71, 244, 8, 150, 185, 47, 111, 25, 22, 178, 7, 218, 97, 190, 242, 255, 210, 130, 188, 149, 148, 131, 118, 66, 197, 169, 78, 241, 55, 13, 214, 231, 49, 212, 6, 125, 144, 72, 44, 155, 8, 58, 228, 193, 36, 142, 102, 189, 242, 222, 95, 153, 174, 42, 46, 222, 24, 204, 11, 144, 9, 91, 30, 189, 16, 86, 64, 69, 48, 177, 152, 39, 104, 48, 38, 110, 124, 145, 124, 101, 183, 148, 252, 209, 82, 250, 71, 75, 53, 245, 71, 241, 166, 212, 194, 82, 201, 84, 58, 197, 95, 52, 184, 241, 21, 29, 113, 244, 8, 150, 6, 140, 186, 78, 88, 208, 14, 178, 135, 249, 202, 251, 11, 67, 147, 212, 82, 35, 230, 213, 61, 17, 76, 176, 82, 218, 59, 131, 252, 140, 24, 233, 144, 61, 167, 19, 149, 115, 249, 137, 42, 144, 27, 19, 55, 162, 42, 202, 187, 11, 205, 171, 159, 138, 19, 234, 39, 153, 135, 90, 241, 87, 13, 150, 78, 41, 113, 104, 128, 190, 184, 18, 226, 253, 133, 54, 18, 242, 191, 27, 228, 31, 26, 232, 93, 74, 2, 251, 149, 33, 68, 192, 250, 145, 160, 33, 178, 96, 157, 121, 14, 189, 160, 142, 53, 23, 246, 195, 133, 86, 175, 170, 151, 204, 68, 119, 246, 30, 55, 217, 172, 108, 239, 37, 160, 235, 164, 127, 240, 86, 3, 88, 169, 17, 65, 30, 187, 188, 143, 26, 112, 147, 122, 54, 119, 152, 55, 180, 196, 196, 167, 170, 128, 239, 45, 180, 85, 87, 76, 217, 191, 120, 141, 206, 156, 46, 219, 53, 51, 211, 174, 157, 100, 196, 208, 224, 57, 13, 66, 198, 61, 211, 27, 112, 73, 100, 35, 223, 77, 219, 94, 126, 163, 251, 176, 49, 160, 68, 200, 70, 26, 39, 84, 53, 94, 214, 149, 88, 25, 40, 62, 133, 157, 110, 228, 251, 60, 16, 212, 169, 186, 140, 122, 66, 33, 161, 156, 76, 67, 110, 133, 206, 185, 178, 156, 27, 242, 174, 115, 142, 118, 97, 229, 123, 50, 38, 49, 144, 216, 92, 150, 231, 174, 115, 94, 252, 41, 11, 249, 184, 105, 58, 220, 101, 246, 4, 213, 64, 103, 30, 19, 140, 184, 211, 214, 211, 222, 213, 122, 27, 74, 37, 109, 60, 84, 134, 173, 62, 177, 207, 249, 96, 96, 217, 156, 14, 6, 204, 150, 97, 198, 190, 53, 140, 20, 84, 157, 34, 210, 237, 136, 92, 176, 81, 52, 154, 186, 205, 190, 211, 173, 82, 185, 116, 251, 225, 212, 10, 17, 130, 142, 124, 17, 22, 110, 28, 104, 135, 185, 75, 170, 161, 196, 232, 17, 220, 241, 184, 151, 12, 25, 210, 119, 169, 69, 131, 128, 7, 86, 50, 64, 195, 66, 238, 32, 123, 184, 138, 11, 30, 247, 112, 202, 168, 75, 2, 78, 112, 244, 4, 182, 232, 133, 207, 146, 64, 166, 33, 47, 189, 43, 100, 52, 213, 186, 156, 82, 35, 216, 49, 67, 238, 198, 194, 147, 128, 71, 126, 135, 4, 130, 197, 171, 104, 193, 122, 64, 159, 67, 46, 20, 68, 36, 5, 191, 94, 57, 92, 88, 164, 243, 6, 187, 146, 143, 19, 181, 226, 24, 238, 204, 163, 85, 238, 13, 216, 80, 69, 136, 206, 64, 103, 41, 108, 13, 37, 158, 182, 246, 71, 127, 195, 211, 101, 232, 120, 131, 205, 1, 97, 241, 119, 13, 246, 140, 112, 226, 217, 233, 146, 156, 247, 91, 128, 101, 234, 201, 60, 39, 27, 119, 5, 167, 71, 84, 129, 219, 126, 64, 29, 58, 96, 30, 117, 172, 31, 34, 26, 81, 43, 206, 74, 82, 202, 91, 83, 240, 107, 137, 181, 100, 146, 246, 1, 18, 98, 220, 206, 217, 152, 184, 26, 75, 226, 70, 253, 18, 214, 18, 216, 142, 99, 136, 139, 36, 95, 217, 95, 120, 193, 116, 74, 224, 124, 172, 146, 68, 93, 12, 224, 110, 188, 200, 105, 213, 141, 66, 65, 131, 46, 117, 169, 45, 47, 162, 250, 8, 195, 166, 157, 32, 178, 20, 147, 177, 167, 220, 44, 94, 62, 202, 206, 229, 140, 196, 186, 125, 69, 82, 252, 12, 244, 171, 44, 116, 11, 114, 161, 205, 253, 180, 68, 146, 195, 101, 221, 100, 102, 158, 21, 223, 192, 102, 135, 12, 153, 23, 167, 59, 221, 222, 119, 96, 213, 39, 67, 106, 133, 236, 77, 98, 34, 135, 87, 164, 160, 203, 222, 80, 244, 1, 108, 196, 155, 56, 102, 8, 126, 78, 61, 53, 217, 110, 74, 113, 135, 12, 105, 79, 10, 143, 126, 214, 96, 227, 202, 90, 71, 119, 161, 208, 48, 204, 230, 51, 92, 183, 170, 70, 175, 126, 210, 198, 47, 44, 179, 245, 220, 104, 154, 53, 253, 63, 104, 23, 110, 95, 67, 59, 237, 102, 83, 215, 208, 62, 236, 94, 131, 186, 61, 163, 85, 51, 112, 77, 207, 160, 61, 216, 190, 6, 55, 140, 158, 209, 212, 179, 71, 175, 97, 109, 118, 56, 75, 47, 245, 86, 181, 93, 51, 91, 39, 86, 239, 69, 167, 62, 19, 192, 30, 108, 207, 67, 189, 83, 108, 54, 122, 248, 76, 215, 208, 54, 160, 121, 236, 73, 183, 221, 210, 51, 168, 0, 183, 230, 229, 29, 220, 238, 181, 31, 232, 217, 163, 31, 97, 107, 65, 195, 161, 123, 176, 111, 118, 219, 77, 163, 103, 182, 91, 214, 9, 110, 63, 235, 200, 155, 244, 102, 227, 120, 43, 229, 180, 110, 52, 123, 167, 47, 116, 237, 237, 148, 26, 54, 204, 86, 189, 166, 103, 142, 94, 194, 154, 204, 63, 31, 211, 32, 189, 184, 76, 82, 251, 121, 29, 95, 189, 248, 14, 108, 205, 67, 141, 54, 174, 214, 117, 45, 77, 236, 20, 56, 193, 70, 181, 222, 120, 214, 212, 51, 143, 191, 131, 29, 155, 143, 22, 149, 237, 227, 124, 53, 126, 132, 119, 228, 164, 235, 104, 223, 30, 15, 153, 120, 21, 245, 75, 54, 31, 149, 103, 159, 236, 31, 51, 199, 45, 15, 121, 242, 16, 87, 239, 247, 79, 137, 207, 198, 199, 253, 165, 88, 246, 224, 207, 0, 0, 0, 255, 255, 236, 69, 194, 8, 227, 11, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 236, 92, 93, 108, 28, 73, 181, 222, 158, 177, 199, 158, 51, 142, 61, 46, 59, 142, 255, 18, 59, 147, 108, 226, 117, 156, 113, 226, 100, 147, 77, 178, 63, 215, 118, 108, 237, 72, 190, 73, 110, 199, 201, 222, 123, 181, 210, 208, 238, 46, 199, 141, 103, 186, 103, 187, 107, 60, 49, 130, 39, 30, 144, 16, 43, 88, 173, 144, 88, 9, 4, 66, 2, 177, 252, 104, 17, 8, 241, 247, 2, 72, 104, 145, 64, 11, 79, 188, 240, 132, 132, 16, 251, 198, 3, 203, 51, 234, 234, 234, 153, 233, 158, 170, 254, 25, 59, 89, 208, 230, 109, 186, 251, 156, 211, 95, 85, 157, 115, 234, 212, 57, 167, 7, 78, 214, 183, 176, 181, 168, 42, 26, 54, 84, 188, 168, 212, 244, 197, 189, 139, 139, 59, 186, 77, 76, 107, 191, 88, 179, 76, 98, 162, 17, 135, 164, 200, 72, 138, 74, 77, 47, 238, 93, 156, 60, 241, 192, 52, 31, 84, 240, 34, 37, 217, 170, 111, 47, 106, 117, 75, 33, 186, 105, 184, 76, 147, 51, 193, 231, 68, 175, 98, 155, 40, 213, 26, 35, 152, 229, 189, 88, 53, 171, 213, 166, 136, 2, 143, 130, 40, 246, 110, 69, 183, 73, 24, 77, 195, 180, 118, 183, 43, 102, 195, 165, 41, 220, 132, 190, 151, 221, 1, 161, 107, 144, 193, 123, 216, 32, 246, 184, 52, 155, 158, 203, 45, 157, 44, 114, 198, 86, 100, 212, 107, 14, 165, 204, 24, 10, 239, 95, 133, 129, 246, 7, 104, 2, 250, 233, 163, 178, 174, 141, 75, 179, 210, 92, 90, 238, 163, 215, 37, 13, 93, 3, 112, 31, 57, 131, 30, 79, 205, 74, 115, 185, 165, 201, 162, 59, 35, 69, 111, 70, 138, 155, 222, 140, 200, 89, 74, 237, 92, 163, 113, 232, 219, 195, 150, 173, 155, 198, 120, 218, 21, 202, 46, 209, 49, 232, 115, 6, 239, 188, 174, 135, 62, 201, 56, 151, 37, 13, 125, 89, 130, 115, 222, 144, 203, 248, 33, 86, 235, 206, 58, 148, 109, 162, 88, 4, 107, 101, 23, 137, 66, 136, 165, 111, 213, 9, 182, 199, 123, 41, 158, 231, 185, 67, 127, 133, 201, 89, 243, 196, 220, 117, 165, 208, 33, 47, 55, 101, 188, 252, 148, 124, 182, 17, 143, 20, 125, 93, 130, 243, 28, 120, 170, 89, 173, 85, 48, 23, 96, 134, 2, 124, 49, 30, 192, 85, 79, 78, 39, 196, 103, 26, 113, 137, 209, 91, 18, 204, 115, 64, 110, 43, 122, 133, 135, 176, 143, 34, 188, 17, 15, 225, 58, 21, 210, 9, 239, 76, 35, 22, 37, 250, 26, 127, 2, 29, 221, 210, 202, 102, 157, 116, 194, 235, 167, 240, 94, 136, 7, 207, 81, 59, 237, 118, 157, 116, 2, 156, 107, 196, 164, 69, 111, 74, 48, 167, 97, 85, 183, 41, 48, 71, 75, 109, 117, 7, 107, 117, 238, 228, 101, 41, 186, 107, 92, 116, 55, 153, 144, 77, 197, 222, 189, 235, 137, 232, 68, 118, 90, 139, 65, 135, 94, 151, 224, 76, 0, 149, 200, 38, 128, 98, 186, 26, 141, 73, 100, 14, 5, 45, 146, 138, 51, 75, 33, 70, 144, 139, 57, 75, 33, 250, 239, 155, 37, 161, 234, 191, 209, 129, 42, 68, 179, 6, 40, 170, 231, 34, 81, 137, 149, 234, 148, 22, 77, 134, 62, 43, 193, 211, 126, 76, 34, 75, 60, 66, 1, 93, 137, 4, 36, 50, 194, 147, 90, 20, 17, 93, 54, 69, 37, 250, 158, 78, 246, 35, 149, 123, 48, 100, 217, 150, 153, 144, 40, 229, 86, 98, 208, 81, 229, 14, 160, 18, 41, 247, 80, 136, 114, 251, 48, 9, 149, 91, 137, 164, 226, 204, 82, 136, 114, 231, 99, 206, 82, 152, 114, 43, 49, 232, 168, 34, 249, 81, 137, 20, 105, 56, 68, 145, 218, 33, 9, 21, 73, 137, 34, 162, 150, 230, 7, 19, 98, 105, 40, 196, 210, 218, 241, 132, 88, 154, 18, 77, 134, 26, 112, 194, 1, 97, 137, 181, 103, 132, 2, 185, 192, 5, 226, 72, 181, 132, 106, 51, 69, 196, 143, 209, 107, 48, 237, 190, 120, 91, 183, 120, 175, 29, 165, 175, 45, 138, 95, 187, 238, 240, 117, 190, 116, 130, 136, 30, 162, 111, 74, 176, 24, 80, 81, 197, 80, 113, 165, 108, 225, 215, 234, 216, 230, 142, 254, 40, 133, 241, 82, 180, 166, 82, 73, 178, 39, 168, 19, 215, 188, 18, 155, 26, 253, 80, 130, 203, 12, 147, 7, 49, 158, 18, 143, 81, 180, 171, 92, 180, 236, 109, 238, 171, 227, 104, 116, 209, 74, 196, 129, 190, 32, 193, 89, 222, 244, 242, 128, 30, 139, 169, 221, 171, 76, 66, 132, 118, 11, 200, 208, 39, 96, 198, 85, 50, 49, 146, 113, 138, 228, 162, 88, 207, 196, 16, 92, 5, 22, 189, 251, 51, 18, 156, 102, 139, 199, 20, 93, 176, 104, 19, 20, 193, 179, 92, 4, 174, 112, 87, 223, 5, 203, 52, 171, 70, 208, 160, 79, 193, 108, 85, 177, 118, 177, 85, 182, 176, 106, 90, 26, 15, 196, 36, 5, 177, 196, 5, 241, 223, 148, 89, 102, 188, 157, 8, 142, 87, 195, 8, 208, 87, 37, 88, 224, 157, 79, 244, 7, 134, 194, 157, 144, 169, 36, 225, 235, 93, 38, 38, 78, 248, 42, 160, 69, 223, 144, 160, 200, 139, 176, 177, 85, 213, 13, 133, 235, 23, 166, 67, 252, 66, 103, 136, 221, 20, 196, 241, 11, 141, 216, 212, 232, 71, 18, 92, 230, 29, 165, 34, 189, 216, 113, 138, 246, 102, 204, 19, 85, 148, 43, 91, 108, 36, 99, 17, 105, 128, 216, 40, 79, 36, 209, 0, 177, 129, 206, 53, 98, 210, 162, 191, 72, 176, 22, 240, 184, 248, 33, 193, 150, 161, 84, 202, 28, 228, 186, 161, 19, 157, 175, 24, 51, 20, 250, 221, 104, 23, 188, 198, 228, 119, 140, 167, 228, 9, 239, 28, 208, 139, 214, 129, 36, 160, 63, 73, 176, 146, 96, 152, 34, 143, 53, 75, 199, 120, 231, 0, 99, 20, 57, 179, 27, 86, 247, 236, 232, 61, 9, 94, 8, 27, 78, 180, 157, 156, 164, 3, 219, 224, 14, 76, 8, 38, 210, 94, 174, 226, 238, 88, 105, 28, 192, 77, 157, 24, 68, 55, 234, 88, 43, 43, 118, 217, 192, 141, 206, 113, 20, 66, 226, 0, 78, 6, 133, 137, 91, 182, 111, 225, 6, 39, 14, 104, 36, 226, 64, 191, 146, 224, 26, 141, 38, 203, 234, 142, 94, 209, 18, 218, 207, 41, 10, 253, 101, 46, 116, 26, 74, 174, 58, 66, 147, 24, 205, 37, 59, 57, 27, 250, 169, 4, 87, 34, 6, 33, 178, 142, 211, 116, 4, 107, 73, 71, 32, 50, 137, 11, 118, 66, 30, 244, 93, 9, 46, 10, 81, 11, 227, 252, 167, 41, 236, 101, 126, 24, 194, 125, 187, 48, 240, 95, 80, 19, 208, 163, 31, 72, 112, 73, 8, 55, 228, 16, 121, 38, 68, 201, 249, 128, 67, 142, 147, 69, 53, 17, 7, 122, 91, 130, 11, 137, 53, 227, 44, 69, 252, 95, 9, 16, 139, 148, 226, 156, 154, 64, 31, 222, 145, 96, 73, 60, 193, 194, 77, 120, 142, 162, 93, 73, 50, 191, 194, 157, 248, 188, 154, 132, 1, 125, 63, 76, 37, 66, 14, 205, 207, 36, 134, 44, 62, 62, 11, 32, 139, 14, 210, 78, 108, 38, 134, 28, 18, 73, 206, 135, 196, 102, 2, 204, 33, 225, 228, 162, 154, 140, 133, 110, 154, 110, 40, 222, 109, 196, 115, 46, 100, 211, 116, 35, 238, 110, 66, 157, 171, 118, 119, 172, 232, 215, 18, 92, 143, 49, 32, 145, 141, 46, 208, 209, 148, 186, 25, 141, 200, 88, 47, 219, 93, 240, 161, 159, 72, 240, 108, 216, 0, 196, 231, 167, 243, 33, 27, 144, 16, 132, 248, 28, 117, 1, 39, 228, 161, 14, 167, 94, 179, 177, 69, 90, 192, 109, 172, 88, 234, 78, 27, 204, 78, 220, 197, 16, 235, 189, 71, 197, 121, 8, 238, 82, 97, 173, 55, 114, 172, 183, 158, 132, 97, 101, 0, 160, 5, 164, 240, 231, 33, 56, 27, 119, 247, 90, 135, 35, 205, 49, 146, 253, 26, 166, 181, 64, 81, 101, 209, 19, 186, 185, 95, 195, 242, 64, 163, 237, 10, 189, 10, 71, 107, 138, 229, 204, 72, 187, 209, 109, 155, 172, 124, 56, 199, 149, 119, 135, 114, 180, 217, 196, 182, 41, 143, 212, 58, 111, 162, 235, 144, 165, 25, 153, 138, 110, 19, 90, 88, 204, 45, 29, 231, 167, 60, 20, 123, 119, 67, 183, 137, 220, 79, 216, 47, 180, 4, 189, 186, 81, 171, 19, 90, 118, 204, 45, 77, 11, 144, 236, 87, 76, 69, 147, 93, 82, 164, 192, 108, 32, 228, 40, 19, 179, 172, 86, 76, 27, 83, 255, 109, 214, 9, 171, 67, 78, 116, 212, 69, 111, 178, 74, 178, 60, 141, 125, 115, 191, 105, 174, 58, 252, 155, 46, 59, 122, 5, 166, 90, 105, 239, 78, 233, 153, 40, 233, 199, 136, 151, 204, 14, 8, 190, 1, 147, 173, 8, 187, 53, 10, 171, 110, 148, 117, 141, 150, 254, 178, 242, 177, 38, 69, 115, 158, 229, 186, 81, 210, 80, 9, 178, 204, 85, 154, 22, 173, 195, 13, 46, 157, 227, 187, 118, 38, 128, 134, 208, 37, 143, 69, 110, 113, 163, 18, 12, 183, 112, 56, 238, 170, 110, 97, 86, 60, 227, 175, 193, 186, 75, 35, 231, 155, 108, 236, 14, 146, 97, 172, 162, 56, 103, 62, 55, 156, 161, 195, 193, 118, 189, 66, 88, 225, 43, 124, 77, 71, 29, 222, 213, 38, 171, 76, 57, 209, 53, 152, 48, 45, 253, 129, 238, 58, 218, 192, 44, 229, 232, 44, 141, 121, 4, 129, 73, 154, 132, 126, 93, 195, 6, 209, 201, 62, 173, 40, 101, 229, 230, 53, 186, 4, 99, 219, 186, 101, 147, 78, 153, 71, 40, 229, 8, 125, 26, 16, 184, 10, 3, 22, 38, 214, 126, 185, 102, 86, 116, 117, 159, 85, 97, 102, 5, 7, 84, 98, 237, 223, 161, 116, 114, 206, 106, 93, 160, 113, 232, 83, 8, 193, 213, 26, 161, 21, 147, 94, 217, 187, 68, 171, 48, 132, 31, 214, 116, 87, 113, 220, 162, 126, 62, 178, 168, 63, 216, 98, 161, 149, 253, 83, 112, 68, 181, 28, 107, 96, 21, 29, 90, 113, 200, 202, 3, 206, 77, 175, 202, 131, 254, 23, 166, 220, 209, 251, 171, 95, 91, 138, 186, 107, 110, 111, 179, 162, 64, 136, 82, 143, 83, 238, 246, 194, 215, 138, 203, 138, 206, 67, 79, 21, 87, 77, 150, 206, 159, 224, 39, 250, 112, 213, 148, 41, 25, 146, 97, 184, 195, 99, 179, 156, 252, 211, 252, 189, 49, 224, 97, 229, 188, 29, 184, 131, 238, 193, 88, 205, 194, 123, 101, 165, 78, 76, 71, 255, 48, 41, 215, 76, 221, 32, 94, 150, 93, 180, 94, 54, 38, 119, 40, 157, 60, 226, 240, 47, 215, 137, 217, 118, 19, 93, 130, 204, 14, 86, 52, 108, 177, 244, 247, 20, 191, 169, 131, 146, 200, 140, 20, 109, 192, 168, 59, 209, 173, 90, 30, 93, 215, 99, 145, 235, 138, 40, 95, 179, 46, 71, 215, 246, 147, 144, 175, 41, 22, 209, 189, 227, 249, 182, 254, 96, 124, 156, 118, 152, 252, 207, 65, 218, 44, 28, 255, 238, 10, 93, 165, 50, 215, 12, 98, 237, 203, 67, 53, 255, 93, 116, 28, 192, 75, 234, 232, 26, 77, 39, 103, 229, 44, 187, 83, 210, 208, 125, 24, 161, 138, 103, 238, 97, 171, 162, 212, 60, 27, 153, 164, 206, 233, 12, 223, 57, 89, 166, 113, 219, 37, 103, 150, 50, 172, 6, 111, 161, 135, 48, 67, 115, 240, 184, 172, 86, 234, 54, 193, 86, 217, 198, 21, 172, 210, 57, 96, 239, 152, 10, 73, 174, 211, 52, 63, 94, 117, 89, 239, 122, 156, 236, 117, 211, 74, 200, 211, 201, 21, 24, 229, 205, 12, 202, 67, 122, 23, 239, 211, 29, 56, 43, 59, 63, 209, 40, 244, 238, 41, 149, 186, 219, 132, 147, 149, 221, 139, 235, 169, 231, 164, 194, 219, 18, 60, 19, 255, 184, 119, 25, 50, 204, 97, 74, 49, 28, 38, 163, 69, 235, 48, 27, 94, 239, 215, 53, 10, 44, 45, 79, 139, 75, 245, 37, 173, 240, 45, 9, 206, 196, 140, 26, 175, 64, 159, 183, 85, 72, 49, 182, 10, 143, 248, 208, 160, 154, 48, 23, 251, 200, 180, 10, 3, 108, 183, 110, 69, 78, 131, 2, 47, 192, 54, 103, 26, 56, 229, 72, 235, 162, 240, 59, 9, 78, 199, 233, 26, 241, 135, 64, 82, 178, 16, 232, 22, 140, 9, 194, 140, 84, 148, 71, 30, 177, 57, 33, 70, 219, 86, 147, 246, 109, 53, 133, 215, 37, 40, 68, 55, 156, 160, 5, 64, 193, 38, 132, 102, 27, 90, 222, 246, 77, 65, 96, 191, 77, 5, 246, 91, 191, 243, 72, 7, 156, 71, 225, 239, 129, 233, 21, 90, 72, 50, 68, 115, 144, 247, 39, 162, 154, 234, 53, 104, 183, 141, 56, 128, 61, 29, 192, 126, 22, 134, 182, 116, 67, 177, 246, 203, 234, 14, 86, 119, 237, 122, 149, 198, 168, 89, 121, 208, 189, 189, 202, 238, 162, 115, 48, 236, 79, 159, 226, 135, 110, 252, 57, 32, 231, 113, 123, 86, 19, 63, 36, 133, 239, 164, 225, 84, 140, 94, 150, 71, 54, 226, 160, 89, 164, 187, 48, 11, 116, 2, 114, 91, 138, 141, 189, 216, 201, 157, 150, 172, 115, 203, 141, 152, 166, 1, 12, 220, 240, 30, 247, 186, 19, 107, 224, 134, 251, 116, 1, 208, 182, 105, 237, 50, 164, 94, 67, 98, 198, 29, 154, 243, 132, 98, 189, 207, 58, 19, 199, 28, 231, 168, 216, 166, 193, 130, 99, 118, 133, 110, 66, 175, 170, 212, 109, 204, 226, 224, 98, 236, 174, 161, 85, 135, 75, 118, 153, 3, 10, 154, 13, 42, 232, 187, 105, 56, 25, 217, 232, 243, 200, 214, 106, 197, 27, 162, 187, 72, 11, 49, 251, 144, 124, 3, 108, 115, 217, 61, 73, 92, 118, 187, 101, 244, 6, 44, 35, 176, 252, 153, 240, 229, 239, 139, 181, 252, 253, 130, 229, 231, 88, 97, 150, 107, 133, 254, 149, 132, 224, 74, 126, 37, 3, 167, 227, 180, 72, 161, 25, 200, 53, 251, 12, 216, 42, 102, 101, 240, 110, 149, 52, 231, 76, 222, 106, 68, 112, 76, 40, 21, 114, 38, 111, 190, 146, 158, 201, 149, 182, 43, 71, 177, 53, 179, 170, 232, 6, 243, 60, 236, 202, 191, 149, 244, 116, 121, 154, 206, 196, 63, 77, 111, 194, 132, 167, 163, 157, 59, 80, 95, 212, 14, 52, 230, 241, 6, 54, 161, 128, 84, 182, 193, 49, 169, 253, 9, 164, 186, 135, 104, 38, 85, 188, 85, 102, 187, 218, 42, 215, 97, 120, 7, 43, 22, 217, 194, 74, 11, 29, 68, 137, 202, 55, 121, 90, 114, 162, 3, 156, 92, 116, 128, 211, 113, 212, 28, 232, 230, 168, 217, 58, 178, 28, 137, 125, 100, 41, 252, 77, 130, 66, 116, 187, 222, 99, 11, 13, 218, 131, 152, 30, 255, 121, 249, 37, 24, 160, 233, 6, 207, 173, 245, 198, 112, 107, 57, 135, 131, 93, 20, 254, 32, 249, 93, 193, 33, 199, 229, 252, 41, 74, 37, 216, 13, 210, 145, 177, 74, 143, 127, 50, 11, 191, 151, 224, 100, 116, 15, 85, 183, 225, 251, 135, 49, 162, 159, 167, 224, 84, 140, 78, 68, 103, 76, 26, 38, 138, 94, 177, 99, 45, 146, 71, 252, 200, 198, 20, 140, 175, 122, 186, 137, 175, 14, 172, 226, 95, 148, 96, 62, 126, 3, 97, 156, 61, 239, 112, 14, 112, 239, 72, 144, 176, 85, 48, 26, 219, 168, 23, 37, 177, 83, 184, 27, 247, 196, 65, 156, 142, 129, 248, 173, 128, 30, 138, 138, 138, 221, 234, 225, 58, 204, 86, 20, 210, 214, 50, 19, 108, 32, 105, 205, 172, 75, 199, 91, 74, 55, 170, 226, 232, 115, 58, 129, 62, 247, 68, 218, 104, 32, 14, 44, 188, 39, 193, 84, 72, 147, 46, 154, 128, 126, 183, 57, 177, 185, 110, 125, 244, 186, 164, 161, 13, 56, 218, 220, 200, 183, 117, 43, 193, 145, 23, 177, 125, 124, 93, 183, 112, 146, 237, 55, 206, 98, 127, 12, 38, 132, 221, 191, 97, 163, 137, 29, 210, 23, 222, 149, 96, 58, 172, 241, 243, 80, 222, 114, 88, 243, 17, 234, 160, 127, 44, 193, 108, 84, 3, 105, 216, 104, 30, 169, 217, 134, 111, 150, 89, 72, 216, 167, 132, 22, 97, 148, 182, 66, 5, 171, 6, 238, 152, 134, 13, 220, 8, 212, 12, 58, 10, 119, 169, 238, 10, 119, 79, 74, 107, 241, 75, 107, 113, 116, 167, 47, 134, 238, 220, 134, 49, 86, 18, 97, 24, 117, 131, 96, 107, 79, 169, 68, 159, 91, 70, 25, 35, 133, 87, 98, 108, 254, 178, 93, 246, 64, 101, 187, 182, 16, 14, 146, 132, 112, 226, 26, 93, 174, 235, 26, 93, 235, 156, 49, 16, 191, 52, 226, 85, 138, 142, 28, 160, 82, 52, 120, 176, 74, 145, 160, 100, 49, 244, 24, 74, 22, 249, 71, 82, 178, 40, 252, 85, 130, 197, 164, 237, 159, 77, 255, 43, 181, 251, 223, 176, 19, 219, 22, 28, 107, 182, 140, 4, 218, 8, 92, 207, 52, 31, 218, 20, 226, 111, 36, 56, 138, 121, 183, 3, 167, 194, 158, 96, 22, 231, 219, 18, 167, 2, 32, 218, 74, 227, 248, 3, 41, 134, 63, 104, 11, 237, 82, 9, 66, 187, 194, 7, 18, 28, 15, 253, 186, 193, 137, 109, 217, 183, 19, 134, 82, 245, 86, 2, 220, 91, 183, 148, 42, 238, 246, 213, 135, 182, 141, 182, 76, 188, 39, 126, 42, 225, 103, 188, 69, 18, 117, 243, 204, 64, 142, 245, 83, 181, 79, 129, 123, 139, 78, 65, 115, 23, 75, 197, 223, 197, 194, 210, 250, 17, 26, 246, 37, 9, 230, 19, 52, 184, 181, 178, 211, 146, 47, 59, 221, 237, 194, 133, 32, 47, 252, 50, 5, 47, 30, 172, 201, 255, 208, 76, 162, 149, 187, 76, 249, 114, 151, 247, 0, 117, 54, 147, 49, 239, 112, 38, 94, 177, 90, 30, 238, 232, 8, 71, 227, 208, 167, 154, 6, 177, 204, 10, 93, 176, 1, 217, 187, 68, 69, 24, 9, 244, 69, 154, 70, 197, 61, 169, 244, 203, 195, 190, 118, 197, 219, 70, 101, 191, 240, 102, 26, 110, 28, 224, 35, 2, 116, 175, 221, 107, 14, 10, 62, 209, 137, 37, 217, 151, 165, 63, 164, 243, 181, 48, 167, 204, 95, 151, 158, 131, 174, 203, 2, 160, 96, 235, 38, 171, 247, 164, 229, 188, 238, 83, 66, 55, 165, 231, 173, 98, 198, 183, 138, 133, 63, 74, 112, 181, 203, 47, 32, 4, 24, 36, 1, 134, 199, 171, 184, 133, 207, 167, 225, 106, 151, 93, 170, 255, 169, 182, 26, 112, 232, 61, 98, 135, 222, 27, 223, 161, 11, 85, 71, 228, 0, 250, 68, 14, 224, 115, 105, 184, 220, 77, 167, 109, 60, 203, 143, 37, 249, 137, 229, 183, 44, 255, 125, 9, 46, 36, 237, 26, 254, 183, 54, 121, 241, 94, 85, 248, 173, 4, 231, 19, 117, 26, 31, 154, 11, 224, 158, 162, 82, 7, 58, 69, 21, 190, 151, 131, 75, 93, 124, 50, 213, 182, 28, 146, 111, 57, 102, 32, 215, 92, 14, 166, 243, 89, 25, 188, 91, 188, 148, 74, 250, 16, 82, 42, 221, 214, 87, 123, 15, 55, 165, 146, 121, 164, 41, 149, 190, 174, 83, 42, 247, 129, 53, 124, 51, 137, 236, 24, 219, 31, 114, 84, 118, 187, 198, 169, 20, 239, 168, 92, 11, 222, 106, 55, 146, 172, 223, 159, 199, 81, 121, 136, 161, 242, 42, 140, 183, 169, 83, 217, 194, 245, 22, 252, 28, 133, 63, 31, 170, 56, 37, 77, 118, 88, 216, 16, 142, 54, 120, 183, 59, 202, 181, 71, 186, 41, 215, 118, 180, 238, 14, 114, 90, 119, 91, 7, 177, 161, 228, 185, 150, 252, 1, 114, 45, 195, 7, 203, 181, 92, 135, 156, 134, 43, 202, 190, 171, 154, 209, 45, 198, 64, 169, 169, 42, 162, 231, 97, 224, 227, 58, 33, 222, 223, 135, 52, 155, 139, 133, 204, 57, 151, 188, 201, 237, 246, 224, 90, 117, 163, 172, 16, 214, 94, 28, 214, 123, 11, 148, 94, 174, 27, 203, 68, 148, 35, 58, 250, 24, 114, 68, 99, 143, 38, 71, 244, 70, 26, 46, 36, 253, 64, 244, 195, 119, 214, 27, 94, 212, 229, 214, 81, 175, 36, 254, 186, 209, 23, 108, 181, 185, 157, 94, 191, 219, 225, 135, 20, 25, 65, 72, 113, 72, 153, 230, 194, 111, 82, 176, 144, 228, 235, 87, 225, 122, 240, 99, 153, 212, 65, 99, 153, 195, 90, 69, 254, 236, 246, 8, 102, 183, 229, 235, 122, 227, 39, 157, 62, 72, 65, 194, 239, 114, 63, 26, 147, 201, 43, 26, 246, 114, 139, 134, 173, 110, 151, 76, 252, 110, 151, 194, 63, 82, 112, 238, 48, 60, 202, 71, 116, 210, 219, 234, 57, 153, 4, 245, 156, 194, 63, 83, 112, 62, 209, 103, 210, 79, 38, 190, 99, 226, 189, 4, 109, 38, 73, 82, 255, 211, 105, 209, 196, 139, 58, 148, 158, 76, 124, 104, 131, 84, 166, 155, 239, 50, 126, 145, 130, 197, 132, 159, 175, 63, 89, 7, 223, 58, 204, 19, 24, 162, 63, 215, 245, 10, 193, 22, 125, 213, 113, 152, 88, 187, 191, 118, 107, 179, 188, 94, 218, 216, 92, 147, 203, 155, 255, 119, 103, 173, 92, 186, 117, 127, 121, 163, 116, 51, 255, 20, 154, 129, 169, 206, 199, 203, 27, 27, 101, 122, 55, 47, 161, 147, 112, 188, 147, 96, 117, 227, 246, 221, 53, 70, 146, 90, 121, 21, 142, 169, 102, 149, 55, 7, 43, 222, 31, 32, 223, 113, 34, 243, 59, 210, 255, 95, 124, 160, 147, 157, 250, 86, 81, 53, 171, 139, 237, 127, 196, 124, 94, 215, 42, 139, 15, 76, 247, 207, 159, 217, 191, 50, 223, 80, 106, 250, 222, 197, 173, 12, 189, 119, 233, 95, 1, 0, 0, 255, 255, 243, 196, 119, 0, 120, 90, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 180, 86, 221, 110, 219, 54, 27, 254, 228, 159, 214, 121, 221, 36, 42, 155, 52, 182, 219, 126, 115, 125, 80, 100, 197, 38, 35, 217, 6, 12, 219, 208, 213, 137, 141, 86, 136, 147, 26, 178, 214, 161, 3, 6, 129, 150, 88, 135, 179, 36, 10, 34, 101, 215, 39, 187, 140, 157, 237, 70, 118, 15, 187, 167, 129, 148, 236, 250, 71, 9, 214, 131, 157, 153, 239, 195, 231, 125, 222, 95, 90, 208, 74, 70, 36, 110, 187, 216, 35, 161, 75, 218, 56, 162, 237, 233, 73, 91, 96, 62, 241, 41, 23, 70, 20, 51, 193, 208, 3, 121, 199, 200, 238, 24, 56, 162, 198, 244, 164, 241, 255, 49, 99, 99, 159, 180, 213, 149, 81, 242, 190, 237, 37, 49, 22, 148, 133, 41, 169, 241, 217, 38, 46, 104, 64, 184, 192, 65, 148, 93, 216, 114, 48, 139, 113, 20, 145, 152, 167, 120, 43, 134, 138, 141, 249, 164, 79, 185, 64, 8, 74, 33, 14, 72, 77, 107, 106, 199, 59, 150, 250, 141, 190, 129, 210, 132, 134, 94, 173, 208, 212, 142, 247, 78, 159, 26, 57, 65, 26, 11, 7, 23, 52, 244, 44, 117, 29, 61, 130, 157, 17, 230, 196, 81, 254, 138, 202, 95, 69, 26, 174, 112, 64, 90, 24, 244, 5, 229, 146, 8, 236, 97, 129, 209, 37, 28, 4, 248, 131, 35, 107, 194, 157, 136, 196, 14, 39, 46, 11, 61, 21, 75, 245, 244, 177, 145, 166, 97, 44, 210, 48, 186, 44, 25, 249, 228, 45, 246, 19, 98, 221, 15, 240, 7, 233, 144, 15, 72, 60, 84, 180, 214, 79, 80, 95, 72, 12, 112, 44, 168, 44, 217, 82, 75, 135, 226, 132, 204, 179, 52, 229, 79, 244, 12, 246, 217, 44, 36, 177, 115, 205, 184, 72, 131, 46, 40, 116, 87, 153, 95, 51, 46, 84, 228, 19, 56, 52, 57, 243, 85, 7, 94, 197, 44, 137, 46, 137, 136, 169, 203, 81, 27, 14, 66, 50, 203, 15, 95, 179, 238, 135, 100, 182, 30, 32, 122, 10, 247, 34, 230, 251, 36, 118, 92, 150, 132, 66, 201, 21, 173, 106, 106, 59, 151, 166, 214, 159, 37, 216, 91, 36, 49, 20, 88, 36, 28, 125, 1, 104, 132, 221, 137, 207, 198, 41, 205, 185, 166, 161, 80, 34, 69, 75, 207, 16, 69, 126, 77, 67, 129, 158, 0, 196, 4, 123, 142, 79, 166, 196, 207, 20, 118, 164, 165, 47, 13, 178, 71, 216, 157, 100, 104, 81, 161, 21, 236, 78, 82, 240, 25, 236, 199, 88, 144, 213, 92, 74, 42, 151, 93, 105, 254, 152, 71, 23, 118, 101, 210, 14, 245, 156, 145, 207, 220, 73, 173, 172, 26, 214, 188, 113, 80, 204, 238, 153, 188, 103, 85, 37, 205, 244, 212, 1, 77, 225, 136, 46, 234, 234, 140, 101, 97, 157, 32, 173, 108, 237, 78, 179, 120, 92, 61, 125, 113, 235, 224, 165, 213, 49, 114, 91, 211, 11, 69, 60, 183, 14, 233, 39, 181, 237, 238, 77, 109, 59, 128, 50, 9, 34, 49, 175, 85, 154, 218, 113, 197, 74, 15, 13, 1, 141, 155, 181, 115, 198, 237, 37, 148, 167, 114, 114, 85, 79, 170, 167, 207, 115, 147, 203, 245, 104, 165, 196, 239, 10, 223, 106, 173, 31, 161, 186, 82, 80, 84, 135, 10, 23, 56, 22, 14, 245, 178, 137, 184, 171, 206, 166, 135, 14, 225, 14, 9, 61, 9, 164, 67, 80, 38, 161, 103, 122, 173, 63, 52, 128, 129, 26, 56, 51, 124, 207, 80, 23, 116, 31, 115, 225, 96, 215, 37, 156, 59, 242, 37, 201, 214, 175, 177, 181, 126, 246, 226, 153, 177, 246, 36, 167, 163, 40, 210, 136, 26, 80, 161, 30, 9, 5, 21, 243, 108, 135, 150, 231, 188, 161, 42, 230, 12, 85, 235, 47, 13, 234, 67, 65, 221, 201, 188, 247, 129, 184, 137, 44, 66, 71, 136, 152, 142, 18, 65, 56, 122, 5, 250, 140, 197, 19, 18, 171, 190, 57, 242, 9, 205, 226, 124, 114, 235, 148, 88, 123, 41, 109, 249, 222, 217, 80, 231, 238, 53, 241, 18, 159, 56, 130, 57, 105, 245, 100, 218, 44, 17, 89, 107, 234, 219, 15, 79, 246, 0, 91, 15, 23, 92, 155, 13, 37, 211, 78, 137, 173, 23, 112, 127, 235, 233, 65, 159, 131, 190, 49, 224, 188, 166, 53, 139, 199, 59, 214, 254, 250, 100, 242, 214, 223, 37, 56, 218, 114, 112, 206, 194, 247, 116, 140, 106, 112, 119, 74, 98, 78, 89, 184, 104, 113, 118, 68, 167, 240, 32, 76, 2, 71, 237, 123, 180, 96, 113, 149, 69, 249, 172, 80, 147, 195, 156, 4, 22, 193, 222, 210, 37, 71, 95, 195, 129, 228, 204, 98, 42, 123, 242, 145, 84, 92, 146, 80, 152, 4, 63, 75, 120, 133, 69, 97, 127, 83, 165, 164, 118, 244, 229, 173, 213, 223, 72, 197, 88, 143, 37, 221, 210, 189, 120, 61, 64, 31, 244, 173, 224, 202, 74, 171, 243, 73, 90, 27, 41, 164, 98, 251, 179, 117, 107, 131, 194, 131, 156, 160, 86, 215, 183, 156, 174, 239, 15, 235, 235, 251, 236, 223, 197, 178, 178, 186, 141, 223, 224, 32, 47, 166, 255, 66, 235, 249, 239, 112, 111, 245, 15, 26, 53, 224, 161, 221, 25, 94, 56, 125, 115, 104, 59, 23, 230, 85, 215, 49, 175, 222, 118, 250, 102, 87, 255, 31, 170, 195, 225, 6, 118, 245, 198, 186, 236, 244, 117, 45, 7, 26, 218, 230, 249, 197, 59, 189, 128, 30, 67, 109, 3, 234, 13, 94, 247, 46, 123, 86, 167, 175, 23, 159, 123, 31, 245, 237, 121, 68, 214, 245, 237, 119, 131, 222, 138, 254, 35, 56, 218, 192, 186, 189, 115, 115, 104, 190, 185, 210, 181, 28, 176, 115, 110, 155, 111, 77, 251, 157, 94, 56, 251, 21, 142, 92, 22, 228, 85, 231, 108, 119, 89, 30, 185, 195, 3, 237, 151, 147, 49, 21, 215, 201, 200, 112, 89, 208, 94, 253, 48, 251, 146, 122, 126, 123, 204, 210, 111, 165, 236, 43, 237, 123, 28, 209, 233, 201, 232, 142, 178, 125, 245, 79, 0, 0, 0, 255, 255, 217, 101, 16, 254, 201, 9, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 75, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 47, 47, 74, 44, 40, 72, 45, 42, 214, 3, 139, 8, 241, 67, 228, 245, 96, 242, 74, 202, 92, 220, 46, 249, 165, 73, 57, 169, 97, 137, 57, 165, 169, 66, 34, 92, 172, 101, 32, 134, 4, 163, 2, 163, 6, 99, 16, 132, 163, 164, 196, 197, 229, 150, 147, 159, 88, 130, 69, 13, 19, 146, 26, 207, 188, 18, 51, 19, 44, 106, 152, 97, 106, 148, 185, 184, 67, 113, 41, 98, 65, 53, 200, 216, 8, 139, 26, 86, 52, 131, 176, 42, 226, 133, 41, 82, 228, 226, 116, 202, 207, 207, 193, 162, 132, 3, 201, 156, 224, 146, 162, 204, 188, 116, 44, 138, 56, 145, 28, 228, 84, 89, 146, 90, 140, 69, 13, 15, 84, 141, 83, 51, 35, 151, 112, 114, 126, 174, 30, 90, 240, 58, 241, 134, 67, 195, 63, 0, 36, 18, 192, 24, 101, 8, 85, 145, 158, 159, 147, 152, 151, 174, 151, 95, 148, 142, 136, 171, 146, 202, 130, 212, 98, 253, 236, 188, 252, 242, 60, 120, 188, 21, 36, 253, 96, 100, 92, 196, 196, 236, 30, 224, 180, 138, 73, 206, 29, 162, 57, 0, 170, 67, 47, 60, 53, 39, 199, 27, 164, 62, 4, 164, 53, 137, 13, 108, 148, 49, 32, 0, 0, 255, 255, 60, 146, 72, 48, 6, 2, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 196, 90, 205, 114, 219, 200, 181, 190, 32, 37, 89, 58, 164, 36, 168, 37, 89, 244, 207, 216, 178, 102, 236, 145, 121, 199, 210, 200, 243, 63, 190, 115, 29, 8, 132, 108, 216, 52, 200, 52, 65, 107, 52, 149, 4, 5, 145, 45, 9, 49, 9, 176, 128, 166, 109, 237, 83, 149, 108, 147, 213, 84, 86, 121, 128, 84, 165, 82, 89, 100, 149, 202, 19, 100, 155, 87, 72, 229, 45, 82, 221, 104, 144, 0, 9, 18, 116, 82, 53, 217, 9, 167, 191, 239, 244, 233, 243, 215, 7, 16, 97, 167, 127, 74, 252, 253, 150, 221, 38, 110, 139, 236, 219, 61, 103, 255, 245, 193, 254, 27, 207, 127, 117, 214, 241, 222, 236, 245, 124, 143, 122, 104, 157, 97, 246, 4, 102, 207, 238, 57, 123, 175, 15, 174, 223, 58, 247, 188, 243, 14, 217, 231, 144, 211, 254, 217, 126, 187, 239, 219, 212, 241, 220, 144, 116, 253, 246, 232, 58, 117, 186, 36, 160, 118, 183, 39, 0, 219, 105, 59, 183, 188, 110, 119, 160, 34, 213, 54, 106, 7, 175, 58, 78, 64, 67, 204, 206, 247, 69, 216, 60, 22, 230, 106, 111, 73, 171, 207, 76, 208, 221, 51, 15, 53, 1, 69, 231, 176, 72, 180, 82, 146, 182, 165, 221, 194, 195, 123, 123, 41, 71, 218, 27, 211, 131, 215, 222, 140, 138, 208, 103, 48, 71, 47, 123, 164, 148, 227, 138, 238, 76, 85, 100, 94, 246, 8, 230, 112, 244, 21, 64, 64, 109, 159, 90, 204, 13, 165, 60, 39, 95, 223, 11, 125, 180, 23, 249, 104, 207, 140, 124, 132, 151, 56, 154, 61, 51, 106, 171, 227, 5, 36, 164, 206, 101, 83, 57, 154, 83, 77, 40, 134, 212, 128, 218, 180, 31, 148, 230, 183, 165, 221, 149, 135, 7, 179, 157, 94, 101, 204, 6, 39, 226, 66, 107, 248, 128, 238, 194, 202, 133, 19, 80, 207, 191, 180, 58, 196, 61, 167, 23, 165, 133, 109, 105, 55, 143, 151, 133, 180, 202, 133, 232, 39, 176, 217, 179, 125, 226, 210, 161, 251, 45, 199, 61, 243, 74, 87, 248, 17, 118, 83, 173, 168, 115, 70, 34, 146, 120, 189, 55, 46, 68, 10, 172, 12, 213, 114, 207, 44, 102, 122, 102, 121, 192, 224, 222, 121, 0, 115, 93, 210, 245, 74, 75, 156, 120, 45, 213, 158, 23, 164, 235, 97, 14, 67, 24, 214, 2, 98, 251, 173, 11, 203, 166, 212, 119, 78, 251, 148, 4, 37, 224, 220, 187, 169, 220, 6, 71, 43, 3, 48, 150, 131, 17, 9, 170, 194, 154, 221, 167, 158, 229, 147, 128, 80, 171, 231, 57, 46, 13, 74, 5, 174, 115, 59, 85, 39, 102, 192, 58, 199, 225, 85, 70, 141, 9, 208, 13, 88, 98, 229, 97, 177, 250, 40, 21, 183, 165, 221, 37, 188, 200, 4, 85, 39, 160, 72, 133, 149, 193, 98, 24, 135, 53, 190, 207, 123, 169, 251, 152, 130, 134, 139, 145, 2, 238, 245, 45, 184, 226, 4, 86, 203, 247, 220, 210, 242, 182, 180, 187, 136, 23, 156, 64, 245, 61, 23, 61, 130, 66, 191, 215, 182, 169, 200, 210, 149, 204, 88, 64, 8, 231, 129, 248, 57, 200, 61, 219, 167, 14, 143, 101, 203, 115, 207, 156, 243, 210, 234, 118, 126, 183, 240, 240, 241, 108, 169, 202, 108, 99, 169, 19, 170, 80, 185, 6, 205, 165, 254, 37, 94, 237, 37, 165, 232, 37, 172, 51, 243, 45, 239, 53, 241, 59, 118, 207, 234, 121, 29, 167, 117, 89, 146, 121, 101, 164, 247, 5, 118, 192, 90, 8, 175, 115, 52, 94, 107, 141, 138, 208, 91, 184, 109, 183, 168, 243, 154, 88, 173, 78, 63, 160, 196, 183, 2, 210, 33, 45, 126, 36, 177, 7, 226, 78, 73, 175, 62, 133, 115, 213, 144, 218, 136, 152, 98, 187, 155, 246, 148, 85, 244, 62, 44, 243, 19, 5, 173, 11, 210, 238, 119, 72, 105, 157, 71, 190, 200, 132, 13, 33, 67, 199, 32, 15, 203, 69, 116, 131, 13, 126, 230, 143, 102, 115, 177, 104, 4, 171, 36, 41, 64, 38, 148, 162, 141, 219, 214, 72, 69, 110, 102, 102, 193, 213, 1, 87, 139, 151, 230, 245, 67, 216, 72, 11, 39, 146, 33, 255, 138, 92, 242, 46, 190, 132, 217, 159, 104, 3, 230, 95, 219, 157, 126, 216, 144, 151, 112, 248, 240, 117, 238, 75, 105, 231, 251, 28, 220, 26, 111, 106, 92, 153, 184, 170, 208, 215, 241, 130, 145, 102, 41, 135, 97, 61, 217, 176, 157, 240, 40, 235, 237, 158, 53, 236, 212, 94, 159, 138, 75, 226, 218, 152, 3, 42, 194, 0, 124, 51, 238, 78, 159, 154, 158, 26, 245, 110, 175, 79, 209, 49, 220, 224, 230, 77, 208, 158, 207, 210, 190, 197, 216, 41, 138, 119, 254, 38, 193, 122, 74, 167, 101, 13, 164, 237, 117, 109, 199, 181, 156, 182, 112, 242, 98, 40, 208, 219, 232, 54, 20, 196, 162, 107, 119, 35, 127, 67, 40, 50, 236, 46, 153, 112, 227, 230, 255, 211, 27, 247, 14, 20, 29, 215, 161, 142, 77, 73, 155, 217, 53, 199, 47, 155, 194, 64, 166, 183, 119, 126, 45, 193, 166, 246, 150, 18, 223, 181, 59, 63, 200, 20, 48, 106, 83, 110, 220, 166, 63, 47, 192, 122, 157, 184, 109, 199, 61, 231, 197, 237, 208, 75, 110, 209, 109, 40, 216, 226, 121, 232, 101, 136, 68, 122, 27, 29, 193, 242, 0, 144, 57, 106, 68, 170, 249, 168, 81, 180, 99, 79, 232, 49, 204, 179, 66, 15, 167, 141, 149, 135, 247, 211, 239, 219, 164, 133, 172, 168, 9, 14, 121, 72, 135, 181, 11, 98, 251, 244, 148, 216, 212, 106, 19, 106, 59, 157, 64, 204, 31, 55, 39, 92, 222, 151, 29, 207, 110, 99, 121, 64, 171, 132, 44, 244, 12, 214, 59, 118, 64, 173, 161, 62, 222, 32, 230, 51, 27, 196, 26, 163, 61, 141, 88, 252, 182, 56, 2, 46, 12, 171, 130, 180, 67, 77, 11, 153, 154, 86, 25, 169, 17, 114, 184, 158, 18, 92, 177, 41, 37, 221, 30, 229, 19, 201, 60, 142, 30, 209, 125, 144, 187, 246, 91, 167, 219, 239, 90, 66, 20, 240, 233, 98, 30, 175, 10, 185, 34, 196, 108, 12, 25, 182, 63, 110, 201, 82, 246, 24, 50, 96, 112, 59, 84, 88, 37, 111, 123, 78, 88, 179, 161, 14, 200, 212, 177, 50, 164, 112, 37, 143, 161, 200, 157, 114, 102, 59, 157, 190, 79, 196, 12, 145, 30, 166, 163, 16, 131, 11, 140, 33, 30, 208, 199, 176, 193, 21, 176, 92, 39, 190, 229, 180, 137, 75, 29, 122, 41, 198, 8, 196, 214, 142, 249, 146, 46, 86, 208, 231, 176, 21, 133, 96, 148, 180, 204, 73, 155, 98, 121, 132, 119, 27, 10, 145, 3, 88, 1, 172, 240, 210, 129, 72, 164, 183, 119, 254, 148, 131, 107, 34, 47, 213, 11, 167, 211, 254, 65, 42, 250, 163, 152, 90, 86, 117, 241, 38, 39, 191, 137, 13, 244, 188, 213, 141, 214, 127, 126, 172, 254, 217, 160, 33, 198, 223, 176, 107, 139, 33, 96, 110, 202, 160, 17, 182, 100, 222, 169, 163, 65, 163, 55, 42, 66, 87, 97, 33, 236, 185, 188, 122, 150, 176, 120, 218, 249, 71, 110, 208, 111, 42, 164, 229, 4, 145, 191, 6, 109, 64, 202, 110, 3, 17, 49, 209, 6, 198, 83, 60, 247, 174, 41, 254, 13, 20, 19, 213, 154, 253, 254, 83, 8, 210, 43, 117, 46, 89, 169, 24, 182, 60, 223, 57, 119, 92, 187, 99, 141, 24, 153, 221, 91, 54, 35, 106, 35, 97, 236, 72, 126, 46, 140, 229, 231, 95, 114, 112, 45, 106, 152, 85, 175, 101, 119, 42, 78, 208, 179, 105, 235, 98, 182, 254, 254, 223, 247, 231, 207, 224, 86, 210, 2, 203, 59, 179, 232, 133, 19, 88, 113, 55, 79, 87, 120, 61, 97, 81, 237, 204, 188, 112, 2, 209, 21, 209, 123, 0, 124, 110, 161, 222, 43, 18, 166, 105, 17, 243, 65, 203, 100, 130, 157, 103, 80, 136, 191, 181, 60, 130, 5, 241, 226, 35, 241, 153, 255, 253, 140, 23, 31, 254, 78, 40, 40, 59, 127, 200, 193, 74, 114, 9, 125, 8, 171, 167, 142, 107, 251, 151, 86, 235, 130, 180, 94, 5, 253, 174, 8, 194, 74, 40, 86, 133, 20, 109, 194, 130, 223, 119, 163, 235, 123, 9, 207, 251, 125, 54, 231, 124, 3, 55, 206, 28, 63, 96, 87, 94, 88, 13, 86, 203, 235, 246, 58, 36, 81, 234, 37, 14, 137, 234, 69, 141, 0, 156, 94, 108, 249, 196, 30, 196, 38, 219, 149, 5, 129, 23, 141, 124, 153, 183, 118, 199, 61, 159, 53, 143, 139, 17, 129, 43, 184, 5, 192, 223, 38, 169, 125, 218, 9, 239, 197, 69, 28, 147, 148, 255, 40, 193, 70, 218, 173, 143, 118, 224, 86, 93, 51, 42, 186, 241, 196, 82, 84, 83, 127, 169, 155, 39, 86, 195, 84, 76, 205, 210, 141, 151, 74, 85, 175, 200, 255, 131, 62, 128, 237, 9, 152, 134, 250, 84, 171, 52, 171, 90, 69, 150, 166, 104, 106, 152, 10, 54, 181, 138, 156, 67, 255, 11, 31, 78, 192, 168, 138, 161, 106, 85, 11, 107, 63, 110, 106, 13, 6, 206, 151, 127, 49, 180, 57, 209, 162, 226, 59, 85, 52, 85, 111, 232, 53, 99, 154, 205, 35, 152, 9, 54, 143, 162, 34, 155, 203, 191, 204, 13, 63, 54, 233, 109, 76, 250, 131, 166, 252, 1, 108, 31, 215, 240, 243, 163, 106, 237, 216, 210, 43, 22, 214, 154, 13, 205, 170, 215, 170, 186, 122, 18, 179, 228, 75, 248, 116, 34, 74, 169, 50, 105, 165, 89, 175, 234, 42, 219, 245, 72, 209, 171, 90, 197, 170, 25, 213, 19, 89, 66, 31, 193, 238, 172, 76, 57, 135, 30, 192, 253, 137, 104, 172, 61, 211, 84, 51, 6, 207, 163, 3, 120, 48, 17, 110, 106, 248, 133, 110, 112, 135, 30, 89, 184, 105, 24, 186, 241, 68, 158, 43, 95, 194, 218, 216, 91, 49, 186, 13, 55, 84, 92, 51, 172, 218, 75, 13, 87, 149, 250, 248, 249, 39, 0, 26, 207, 245, 122, 61, 10, 66, 26, 224, 176, 121, 116, 164, 97, 171, 102, 104, 114, 174, 252, 59, 9, 214, 198, 46, 74, 166, 186, 174, 96, 205, 48, 45, 181, 90, 75, 243, 253, 4, 128, 114, 168, 24, 149, 154, 33, 75, 232, 30, 236, 164, 1, 68, 26, 138, 172, 148, 115, 232, 14, 188, 151, 134, 27, 56, 74, 206, 151, 255, 153, 131, 155, 211, 62, 167, 177, 228, 31, 120, 92, 251, 86, 83, 155, 38, 75, 183, 80, 31, 75, 186, 102, 35, 102, 121, 60, 154, 19, 192, 106, 237, 69, 189, 170, 153, 220, 135, 101, 184, 151, 5, 15, 115, 75, 206, 37, 210, 106, 146, 106, 126, 110, 86, 133, 104, 15, 202, 89, 232, 129, 23, 42, 242, 28, 250, 20, 62, 206, 54, 220, 48, 117, 163, 169, 85, 44, 165, 97, 25, 218, 177, 60, 63, 203, 113, 77, 253, 5, 43, 141, 166, 41, 47, 148, 127, 149, 135, 173, 9, 31, 43, 208, 93, 184, 147, 162, 106, 204, 193, 83, 97, 162, 41, 200, 210, 116, 216, 176, 177, 125, 8, 239, 79, 134, 13, 3, 149, 79, 244, 140, 49, 160, 8, 209, 28, 75, 203, 41, 234, 162, 224, 204, 163, 93, 248, 96, 50, 46, 22, 150, 133, 9, 97, 156, 20, 144, 43, 211, 15, 52, 12, 197, 98, 249, 175, 18, 92, 85, 61, 151, 58, 110, 159, 40, 129, 65, 222, 232, 225, 56, 236, 249, 204, 119, 145, 102, 161, 216, 210, 13, 221, 212, 21, 179, 134, 147, 145, 152, 12, 99, 109, 185, 162, 225, 48, 197, 39, 195, 176, 102, 226, 19, 81, 149, 225, 61, 51, 25, 203, 155, 77, 116, 11, 200, 249, 242, 239, 37, 40, 136, 111, 36, 252, 21, 186, 4, 27, 236, 128, 181, 166, 105, 153, 39, 117, 45, 217, 78, 18, 43, 60, 254, 150, 89, 11, 19, 53, 108, 101, 73, 128, 216, 133, 97, 56, 88, 206, 77, 197, 132, 122, 242, 232, 58, 92, 77, 96, 158, 106, 10, 54, 15, 53, 197, 148, 231, 202, 191, 149, 224, 90, 116, 31, 154, 108, 188, 114, 186, 164, 93, 235, 83, 213, 238, 7, 4, 221, 135, 187, 131, 155, 204, 84, 26, 207, 135, 177, 178, 84, 133, 181, 248, 225, 105, 50, 161, 194, 4, 89, 98, 217, 48, 29, 138, 181, 134, 102, 202, 185, 242, 223, 11, 176, 21, 55, 142, 189, 104, 146, 118, 104, 218, 61, 216, 73, 42, 17, 183, 221, 168, 93, 7, 240, 96, 10, 174, 105, 60, 85, 140, 10, 123, 142, 64, 178, 132, 30, 195, 163, 41, 148, 67, 165, 50, 244, 242, 96, 238, 80, 76, 19, 235, 135, 77, 83, 107, 200, 57, 164, 129, 146, 161, 32, 121, 37, 164, 170, 201, 163, 175, 224, 179, 44, 59, 194, 148, 209, 95, 104, 56, 78, 157, 67, 95, 195, 231, 25, 84, 177, 243, 24, 119, 30, 61, 130, 47, 50, 173, 87, 107, 184, 98, 189, 80, 240, 243, 36, 121, 1, 233, 160, 101, 109, 44, 250, 151, 149, 210, 17, 98, 170, 174, 204, 224, 69, 38, 200, 80, 179, 136, 158, 128, 58, 155, 43, 166, 43, 90, 66, 223, 130, 249, 110, 81, 213, 190, 53, 53, 108, 40, 89, 154, 1, 125, 3, 95, 101, 58, 45, 217, 127, 98, 244, 2, 250, 2, 62, 153, 66, 143, 231, 200, 112, 54, 212, 43, 114, 17, 125, 6, 7, 83, 136, 188, 10, 173, 134, 169, 171, 207, 79, 194, 229, 170, 222, 48, 229, 101, 244, 35, 248, 191, 41, 180, 193, 97, 217, 31, 26, 142, 149, 24, 131, 53, 177, 38, 175, 204, 16, 147, 134, 254, 36, 219, 115, 171, 72, 133, 199, 51, 149, 136, 250, 84, 175, 86, 210, 149, 200, 232, 19, 216, 159, 162, 228, 168, 134, 85, 77, 12, 15, 131, 38, 177, 134, 62, 135, 135, 211, 72, 138, 94, 101, 19, 232, 40, 15, 177, 137, 102, 182, 163, 235, 70, 189, 105, 90, 13, 253, 59, 77, 94, 103, 19, 77, 102, 164, 34, 95, 201, 27, 227, 205, 120, 108, 147, 67, 221, 80, 240, 137, 188, 153, 145, 123, 227, 141, 46, 145, 66, 87, 103, 57, 142, 166, 96, 245, 105, 220, 227, 91, 236, 214, 185, 195, 191, 203, 141, 141, 93, 241, 22, 127, 0, 15, 194, 184, 165, 100, 193, 132, 110, 127, 8, 255, 63, 27, 101, 176, 174, 84, 177, 166, 84, 78, 6, 47, 38, 82, 249, 55, 57, 40, 171, 182, 219, 34, 157, 232, 255, 1, 83, 173, 124, 4, 95, 204, 80, 239, 19, 236, 61, 134, 198, 187, 146, 155, 198, 115, 163, 118, 108, 76, 35, 200, 18, 50, 224, 217, 187, 42, 30, 115, 201, 112, 210, 204, 113, 167, 52, 156, 115, 254, 207, 145, 217, 156, 34, 210, 248, 223, 115, 202, 187, 146, 103, 118, 202, 187, 42, 158, 230, 148, 195, 159, 194, 86, 203, 235, 166, 125, 107, 58, 92, 142, 220, 83, 247, 61, 234, 213, 165, 239, 14, 206, 29, 122, 209, 63, 221, 107, 121, 221, 253, 248, 143, 82, 30, 56, 237, 206, 254, 185, 23, 254, 200, 69, 252, 66, 229, 145, 221, 115, 94, 31, 156, 46, 112, 217, 39, 255, 10, 0, 0, 255, 255, 0, 106, 118, 215, 97, 35, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 140, 83, 223, 111, 147, 80, 24, 149, 154, 44, 217, 183, 85, 201, 157, 198, 218, 236, 71, 211, 237, 97, 105, 20, 236, 244, 109, 79, 140, 94, 13, 134, 1, 3, 218, 165, 123, 33, 148, 94, 43, 142, 114, 241, 94, 104, 237, 63, 224, 187, 127, 141, 255, 158, 129, 82, 91, 45, 51, 190, 125, 156, 239, 28, 206, 57, 185, 249, 224, 36, 27, 17, 38, 7, 254, 152, 196, 1, 145, 253, 36, 148, 103, 93, 249, 107, 70, 216, 66, 74, 24, 77, 41, 58, 200, 9, 82, 73, 144, 252, 36, 148, 102, 221, 102, 171, 74, 21, 208, 233, 148, 198, 75, 89, 179, 93, 197, 152, 83, 118, 255, 41, 162, 243, 37, 167, 125, 15, 245, 219, 18, 185, 201, 29, 209, 17, 64, 97, 237, 165, 139, 132, 52, 132, 150, 112, 190, 107, 239, 22, 136, 187, 72, 8, 186, 92, 173, 125, 54, 225, 141, 90, 75, 56, 223, 187, 56, 148, 42, 242, 73, 150, 191, 136, 168, 63, 46, 197, 10, 155, 240, 246, 79, 1, 14, 254, 112, 179, 9, 207, 162, 20, 97, 216, 99, 197, 180, 54, 125, 114, 113, 86, 249, 215, 13, 89, 158, 199, 6, 246, 123, 70, 239, 96, 199, 143, 249, 156, 176, 255, 202, 85, 114, 209, 41, 212, 9, 99, 148, 121, 83, 194, 185, 63, 33, 141, 199, 69, 231, 253, 2, 188, 94, 98, 109, 2, 245, 210, 249, 11, 9, 82, 50, 70, 46, 236, 7, 17, 229, 196, 227, 169, 159, 102, 188, 204, 220, 173, 116, 92, 85, 198, 223, 72, 144, 165, 33, 141, 213, 92, 233, 20, 66, 123, 47, 88, 127, 116, 98, 120, 250, 87, 65, 116, 4, 47, 111, 250, 216, 30, 122, 54, 118, 250, 186, 235, 185, 67, 11, 123, 154, 49, 80, 116, 173, 39, 62, 66, 199, 208, 220, 94, 43, 134, 115, 139, 109, 220, 19, 5, 116, 8, 141, 237, 253, 123, 69, 211, 113, 79, 172, 117, 126, 8, 240, 108, 163, 151, 74, 227, 113, 152, 7, 68, 109, 56, 94, 201, 62, 98, 213, 245, 84, 211, 232, 105, 174, 102, 26, 27, 214, 167, 112, 242, 0, 199, 48, 93, 207, 180, 176, 33, 10, 232, 13, 188, 250, 7, 73, 53, 175, 45, 29, 187, 184, 231, 169, 58, 86, 12, 125, 40, 214, 58, 223, 5, 120, 94, 100, 82, 105, 204, 67, 158, 146, 56, 88, 232, 100, 70, 162, 181, 161, 106, 26, 142, 230, 184, 216, 80, 135, 158, 142, 7, 88, 223, 72, 117, 6, 173, 135, 72, 120, 128, 13, 183, 175, 232, 162, 176, 238, 183, 205, 114, 92, 219, 52, 62, 136, 181, 171, 59, 120, 17, 208, 105, 213, 139, 94, 65, 17, 208, 202, 47, 200, 18, 238, 186, 147, 48, 253, 156, 141, 164, 128, 78, 229, 205, 147, 123, 29, 142, 35, 121, 66, 229, 226, 210, 202, 251, 187, 244, 147, 112, 214, 29, 237, 20, 216, 219, 95, 1, 0, 0, 255, 255, 189, 105, 40, 91, 251, 3, 0, 0]) as $.Slice<number>])

export function __goscript_set_yarpcFileDescriptorClosure674d14d2fee4e473(__goscriptValue: $.Slice<$.Slice<number>>): void {
	yarpcFileDescriptorClosure674d14d2fee4e473 = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await yarpc.RegisterClientBuilder($.interfaceValue($.functionValue(async (clientConfig: transport.ClientConfig | null, structField: reflect.StructField): globalThis.Promise<WorkflowAPIYARPCClient | null> => {
		return await NewWorkflowAPIYARPCClient(clientConfig, protobuf.ClientBuilderOptions(clientConfig, structField))
	}, ({ kind: $.TypeKind.Function, params: ["transport.ClientConfig", "reflect.StructField"], results: ["apiv1.WorkflowAPIYARPCClient"] } as $.FunctionTypeInfo)), "func(clientConfig transport.ClientConfig, structField reflect.StructField) apiv1.WorkflowAPIYARPCClient", ({ kind: $.TypeKind.Function, params: ["transport.ClientConfig", "reflect.StructField"], results: ["apiv1.WorkflowAPIYARPCClient"] } as $.FunctionTypeInfo)))
}

var __goscriptAwait: any

export { __goscriptInit0 }
