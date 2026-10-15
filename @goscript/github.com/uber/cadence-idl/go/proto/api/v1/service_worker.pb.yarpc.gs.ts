// Generated file based on service_worker.pb.yarpc.go
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

import * as __goscript_decision_pb from "./decision.pb.gs.ts"

import * as __goscript_history_pb from "./history.pb.gs.ts"

import * as __goscript_query_pb from "./query.pb.gs.ts"

import * as __goscript_service_worker_pb from "./service_worker.pb.gs.ts"

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
import "./decision.pb.gs.ts"
import "./history.pb.gs.ts"
import "./query.pb.gs.ts"
import "./service_worker.pb.gs.ts"
import "./tasklist.pb.gs.ts"
import "./workflow.pb.gs.ts"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.WorkerAPIYARPCClient", "apiv1.WorkerAPIYARPCServer", "apiv1.buildWorkerAPIYARPCProceduresParams", "apiv1.FxWorkerAPIYARPCClientParams", "apiv1.FxWorkerAPIYARPCClientResult", "apiv1.FxWorkerAPIYARPCProceduresParams", "apiv1.FxWorkerAPIYARPCProceduresResult", "apiv1._WorkerAPIYARPCCaller", "apiv1._WorkerAPIYARPCHandler"])

export type WorkerAPIYARPCClient = {
	PollForActivityTask(_p0: context.Context | null, _p1: __goscript_service_worker_pb.PollForActivityTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_worker_pb.PollForActivityTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_worker_pb.PollForActivityTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskResponse> | null, $.GoError]>
	PollForDecisionTask(_p0: context.Context | null, _p1: __goscript_service_worker_pb.PollForDecisionTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_worker_pb.PollForDecisionTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_worker_pb.PollForDecisionTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskResponse> | null, $.GoError]>
	RecordActivityTaskHeartbeat(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse> | null, $.GoError]>
	RecordActivityTaskHeartbeatByID(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse> | null, $.GoError]>
	ResetStickyTaskList(_p0: context.Context | null, _p1: __goscript_service_worker_pb.ResetStickyTaskListRequest | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_worker_pb.ResetStickyTaskListResponse | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_worker_pb.ResetStickyTaskListResponse | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListResponse> | null, $.GoError]>
	RespondActivityTaskCanceled(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondActivityTaskCanceledRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_worker_pb.RespondActivityTaskCanceledResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_worker_pb.RespondActivityTaskCanceledResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledResponse> | null, $.GoError]>
	RespondActivityTaskCanceledByID(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse> | null, $.GoError]>
	RespondActivityTaskCompleted(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondActivityTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_worker_pb.RespondActivityTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_worker_pb.RespondActivityTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedResponse> | null, $.GoError]>
	RespondActivityTaskCompletedByID(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse> | null, $.GoError]>
	RespondActivityTaskFailed(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondActivityTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_worker_pb.RespondActivityTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_worker_pb.RespondActivityTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedResponse> | null, $.GoError]>
	RespondActivityTaskFailedByID(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse> | null, $.GoError]>
	RespondDecisionTaskCompleted(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondDecisionTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_worker_pb.RespondDecisionTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_worker_pb.RespondDecisionTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedResponse> | null, $.GoError]>
	RespondDecisionTaskFailed(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondDecisionTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_worker_pb.RespondDecisionTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_worker_pb.RespondDecisionTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedResponse> | null, $.GoError]>
	RespondQueryTaskCompleted(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondQueryTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedRequest> | null, _p2: $.Slice<yarpc.CallOption>): [__goscript_service_worker_pb.RespondQueryTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedResponse> | null, $.GoError] | globalThis.Promise<[__goscript_service_worker_pb.RespondQueryTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedResponse> | null, $.GoError]>
}

$.registerInterfaceType(
	"apiv1.WorkerAPIYARPCClient",
	null,
	[$.methodSignature("PollForActivityTask", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskResponse"), "error"]), $.methodSignature("PollForDecisionTask", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskResponse"), "error"]), $.methodSignature("RecordActivityTaskHeartbeat", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatResponse"), "error"]), $.methodSignature("RecordActivityTaskHeartbeatByID", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDResponse"), "error"]), $.methodSignature("ResetStickyTaskList", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListResponse"), "error"]), $.methodSignature("RespondActivityTaskCanceled", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledResponse"), "error"]), $.methodSignature("RespondActivityTaskCanceledByID", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDResponse"), "error"]), $.methodSignature("RespondActivityTaskCompleted", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedResponse"), "error"]), $.methodSignature("RespondActivityTaskCompletedByID", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDResponse"), "error"]), $.methodSignature("RespondActivityTaskFailed", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedResponse"), "error"]), $.methodSignature("RespondActivityTaskFailedByID", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDResponse"), "error"]), $.methodSignature("RespondDecisionTaskCompleted", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedResponse"), "error"]), $.methodSignature("RespondDecisionTaskFailed", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedResponse"), "error"]), $.methodSignature("RespondQueryTaskCompleted", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], [/* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedResponse"), "error"])]
);

export type WorkerAPIYARPCServer = {
	PollForActivityTask(_p0: context.Context | null, _p1: __goscript_service_worker_pb.PollForActivityTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskRequest> | null): [__goscript_service_worker_pb.PollForActivityTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskResponse> | null, $.GoError]
	PollForDecisionTask(_p0: context.Context | null, _p1: __goscript_service_worker_pb.PollForDecisionTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskRequest> | null): [__goscript_service_worker_pb.PollForDecisionTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskResponse> | null, $.GoError]
	RecordActivityTaskHeartbeat(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest> | null): [__goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse> | null, $.GoError]
	RecordActivityTaskHeartbeatByID(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest> | null): [__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse> | null, $.GoError]
	ResetStickyTaskList(_p0: context.Context | null, _p1: __goscript_service_worker_pb.ResetStickyTaskListRequest | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListRequest> | null): [__goscript_service_worker_pb.ResetStickyTaskListResponse | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListResponse> | null, $.GoError]
	RespondActivityTaskCanceled(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondActivityTaskCanceledRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledRequest> | null): [__goscript_service_worker_pb.RespondActivityTaskCanceledResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledResponse> | null, $.GoError]
	RespondActivityTaskCanceledByID(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest> | null): [__goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse> | null, $.GoError]
	RespondActivityTaskCompleted(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondActivityTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedRequest> | null): [__goscript_service_worker_pb.RespondActivityTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedResponse> | null, $.GoError]
	RespondActivityTaskCompletedByID(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest> | null): [__goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse> | null, $.GoError]
	RespondActivityTaskFailed(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondActivityTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedRequest> | null): [__goscript_service_worker_pb.RespondActivityTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedResponse> | null, $.GoError]
	RespondActivityTaskFailedByID(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest> | null): [__goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse> | null, $.GoError]
	RespondDecisionTaskCompleted(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondDecisionTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedRequest> | null): [__goscript_service_worker_pb.RespondDecisionTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedResponse> | null, $.GoError]
	RespondDecisionTaskFailed(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondDecisionTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedRequest> | null): [__goscript_service_worker_pb.RespondDecisionTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedResponse> | null, $.GoError]
	RespondQueryTaskCompleted(_p0: context.Context | null, _p1: __goscript_service_worker_pb.RespondQueryTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedRequest> | null): [__goscript_service_worker_pb.RespondQueryTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedResponse> | null, $.GoError]
}

$.registerInterfaceType(
	"apiv1.WorkerAPIYARPCServer",
	null,
	[$.methodSignature("PollForActivityTask", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskRequest")], [/* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskResponse"), "error"]), $.methodSignature("PollForDecisionTask", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskRequest")], [/* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskResponse"), "error"]), $.methodSignature("RecordActivityTaskHeartbeat", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatRequest")], [/* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatResponse"), "error"]), $.methodSignature("RecordActivityTaskHeartbeatByID", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDRequest")], [/* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDResponse"), "error"]), $.methodSignature("ResetStickyTaskList", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListRequest")], [/* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListResponse"), "error"]), $.methodSignature("RespondActivityTaskCanceled", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledRequest")], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledResponse"), "error"]), $.methodSignature("RespondActivityTaskCanceledByID", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDRequest")], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDResponse"), "error"]), $.methodSignature("RespondActivityTaskCompleted", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedRequest")], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedResponse"), "error"]), $.methodSignature("RespondActivityTaskCompletedByID", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDRequest")], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDResponse"), "error"]), $.methodSignature("RespondActivityTaskFailed", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedRequest")], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedResponse"), "error"]), $.methodSignature("RespondActivityTaskFailedByID", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDRequest")], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDResponse"), "error"]), $.methodSignature("RespondDecisionTaskCompleted", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedRequest")], [/* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedResponse"), "error"]), $.methodSignature("RespondDecisionTaskFailed", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedRequest")], [/* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedResponse"), "error"]), $.methodSignature("RespondQueryTaskCompleted", ["context.Context", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedRequest")], [/* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedResponse"), "error"])]
);

export class buildWorkerAPIYARPCProceduresParams {
	public get Server(): WorkerAPIYARPCServer | null {
		return this._fields.Server
	}

	public set Server(value: WorkerAPIYARPCServer | null) {
		this._fields.Server = value
	}

	public get AnyResolver(): jsonpb.AnyResolver | null {
		return this._fields.AnyResolver
	}

	public set AnyResolver(value: jsonpb.AnyResolver | null) {
		this._fields.AnyResolver = value
	}

	public _fields: {
		Server: WorkerAPIYARPCServer | null
		AnyResolver: jsonpb.AnyResolver | null
	}

	constructor(init?: Partial<{Server?: WorkerAPIYARPCServer | null, AnyResolver?: jsonpb.AnyResolver | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Server: init?.Server ?? (null! as WorkerAPIYARPCServer | null),
			AnyResolver: init?.AnyResolver ?? (null! as jsonpb.AnyResolver | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): buildWorkerAPIYARPCProceduresParams {
		return new buildWorkerAPIYARPCProceduresParams(this, true)
	}

	public __goscriptAssign(source: buildWorkerAPIYARPCProceduresParams): void {
		const target = this._fields
		const values = source._fields
		target.Server = $.assignFieldValue(target.Server, values.Server, "apiv1.WorkerAPIYARPCServer")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.buildWorkerAPIYARPCProceduresParams",
		() => new buildWorkerAPIYARPCProceduresParams(),
		() => [],
		buildWorkerAPIYARPCProceduresParams,
		() => [/* @__PURE__ */ $.structField("Server", "apiv1.WorkerAPIYARPCServer", [0], 0, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [1], 16, true)]
	)
}

export class FxWorkerAPIYARPCClientParams {
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

	public clone(): FxWorkerAPIYARPCClientParams {
		return new FxWorkerAPIYARPCClientParams(this, true)
	}

	public __goscriptAssign(source: FxWorkerAPIYARPCClientParams): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.In, values.In)
		target.Provider = $.assignFieldValue(target.Provider, values.Provider, "yarpc.ClientConfig")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
		target.Restriction = $.assignFieldValue(target.Restriction, values.Restriction, "restriction.Checker")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxWorkerAPIYARPCClientParams",
		() => new FxWorkerAPIYARPCClientParams(),
		() => [],
		FxWorkerAPIYARPCClientParams,
		() => [/* @__PURE__ */ $.structField("In", "dig.In", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Provider", "yarpc.ClientConfig", [1], 0, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [2], 16, true, { tag: "name:\"yarpcfx\" optional:\"true\"" }), /* @__PURE__ */ $.structField("Restriction", "restriction.Checker", [3], 32, true, { tag: "optional:\"true\"" })]
	)
}

export class FxWorkerAPIYARPCClientResult {
	public get Out(): fx.Out {
		return this._fields.Out
	}

	public set Out(value: fx.Out) {
		this._fields.Out = value
	}

	public get Client(): WorkerAPIYARPCClient | null {
		return this._fields.Client
	}

	public set Client(value: WorkerAPIYARPCClient | null) {
		this._fields.Client = value
	}

	public _fields: {
		Out: fx.Out
		Client: WorkerAPIYARPCClient | null
	}

	constructor(init?: Partial<{Out?: fx.Out, Client?: WorkerAPIYARPCClient | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Out: init?.Out ? init.Out.clone() : new dig.Out(undefined, true),
			Client: init?.Client ?? (null! as WorkerAPIYARPCClient | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FxWorkerAPIYARPCClientResult {
		return new FxWorkerAPIYARPCClientResult(this, true)
	}

	public __goscriptAssign(source: FxWorkerAPIYARPCClientResult): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Out, values.Out)
		target.Client = $.assignFieldValue(target.Client, values.Client, "apiv1.WorkerAPIYARPCClient")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxWorkerAPIYARPCClientResult",
		() => new FxWorkerAPIYARPCClientResult(),
		() => [],
		FxWorkerAPIYARPCClientResult,
		() => [/* @__PURE__ */ $.structField("Out", "dig.Out", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Client", "apiv1.WorkerAPIYARPCClient", [1], 0, true)]
	)
}

export class FxWorkerAPIYARPCProceduresParams {
	public get In(): fx.In {
		return this._fields.In
	}

	public set In(value: fx.In) {
		this._fields.In = value
	}

	public get Server(): WorkerAPIYARPCServer | null {
		return this._fields.Server
	}

	public set Server(value: WorkerAPIYARPCServer | null) {
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
		Server: WorkerAPIYARPCServer | null
		AnyResolver: jsonpb.AnyResolver | null
	}

	constructor(init?: Partial<{In?: fx.In, Server?: WorkerAPIYARPCServer | null, AnyResolver?: jsonpb.AnyResolver | null}>, __goscriptValue?: boolean) {
		this._fields = {
			In: init?.In ? init.In.clone() : new dig.In(undefined, true),
			Server: init?.Server ?? (null! as WorkerAPIYARPCServer | null),
			AnyResolver: init?.AnyResolver ?? (null! as jsonpb.AnyResolver | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FxWorkerAPIYARPCProceduresParams {
		return new FxWorkerAPIYARPCProceduresParams(this, true)
	}

	public __goscriptAssign(source: FxWorkerAPIYARPCProceduresParams): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.In, values.In)
		target.Server = $.assignFieldValue(target.Server, values.Server, "apiv1.WorkerAPIYARPCServer")
		target.AnyResolver = $.assignFieldValue(target.AnyResolver, values.AnyResolver, "jsonpb.AnyResolver")
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxWorkerAPIYARPCProceduresParams",
		() => new FxWorkerAPIYARPCProceduresParams(),
		() => [],
		FxWorkerAPIYARPCProceduresParams,
		() => [/* @__PURE__ */ $.structField("In", "dig.In", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Server", "apiv1.WorkerAPIYARPCServer", [1], 0, true), /* @__PURE__ */ $.structField("AnyResolver", "jsonpb.AnyResolver", [2], 16, true, { tag: "name:\"yarpcfx\" optional:\"true\"" })]
	)
}

export class FxWorkerAPIYARPCProceduresResult {
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

	public clone(): FxWorkerAPIYARPCProceduresResult {
		return new FxWorkerAPIYARPCProceduresResult(this, true)
	}

	public __goscriptAssign(source: FxWorkerAPIYARPCProceduresResult): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Out, values.Out)
		target.Procedures = values.Procedures
		$.assignStruct(target.ReflectionMeta, values.ReflectionMeta)
	}

	static __typeInfo = $.registerStructType(
		"apiv1.FxWorkerAPIYARPCProceduresResult",
		() => new FxWorkerAPIYARPCProceduresResult(),
		() => [],
		FxWorkerAPIYARPCProceduresResult,
		() => [/* @__PURE__ */ $.structField("Out", "dig.Out", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Procedures", /* @__PURE__ */ $.sliceType("transport.Procedure"), [1], 0, true, { tag: "group:\"yarpcfx\"" }), /* @__PURE__ */ $.structField("ReflectionMeta", "reflection.ServerMeta", [2], 24, true, { tag: "group:\"yarpcfx\"" })]
	)
}

export class _WorkerAPIYARPCCaller {
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

	public clone(): _WorkerAPIYARPCCaller {
		return new _WorkerAPIYARPCCaller(this, true)
	}

	public __goscriptAssign(source: _WorkerAPIYARPCCaller): void {
		const target = this._fields
		const values = source._fields
		target.streamClient = $.assignFieldValue(target.streamClient, values.streamClient, "protobuf.StreamClient")
	}

	public async PollForActivityTask(ctx: context.Context | null, request: __goscript_service_worker_pb.PollForActivityTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_worker_pb.PollForActivityTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskResponse> | null, $.GoError]> {
		const c: _WorkerAPIYARPCCaller | $.VarRef<_WorkerAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkerAPIYARPCCaller>(c).streamClient).Call(ctx, "PollForActivityTask", $.interfaceValue<proto.Message | null>(request, "*apiv1.PollForActivityTaskRequest", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskRequest")), newWorkerAPIServicePollForActivityTaskYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple0: any = $.typeAssertTuple<__goscript_service_worker_pb.PollForActivityTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskResponse"))
		let response: __goscript_service_worker_pb.PollForActivityTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskResponse> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServicePollForActivityTaskYARPCResponse(), "*apiv1.PollForActivityTaskResponse", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async PollForDecisionTask(ctx: context.Context | null, request: __goscript_service_worker_pb.PollForDecisionTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_worker_pb.PollForDecisionTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskResponse> | null, $.GoError]> {
		const c: _WorkerAPIYARPCCaller | $.VarRef<_WorkerAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkerAPIYARPCCaller>(c).streamClient).Call(ctx, "PollForDecisionTask", $.interfaceValue<proto.Message | null>(request, "*apiv1.PollForDecisionTaskRequest", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskRequest")), newWorkerAPIServicePollForDecisionTaskYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple1: any = $.typeAssertTuple<__goscript_service_worker_pb.PollForDecisionTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskResponse"))
		let response: __goscript_service_worker_pb.PollForDecisionTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskResponse> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServicePollForDecisionTaskYARPCResponse(), "*apiv1.PollForDecisionTaskResponse", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async RecordActivityTaskHeartbeat(ctx: context.Context | null, request: __goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse> | null, $.GoError]> {
		const c: _WorkerAPIYARPCCaller | $.VarRef<_WorkerAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkerAPIYARPCCaller>(c).streamClient).Call(ctx, "RecordActivityTaskHeartbeat", $.interfaceValue<proto.Message | null>(request, "*apiv1.RecordActivityTaskHeartbeatRequest", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatRequest")), newWorkerAPIServiceRecordActivityTaskHeartbeatYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple2: any = $.typeAssertTuple<__goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatResponse"))
		let response: __goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCResponse(), "*apiv1.RecordActivityTaskHeartbeatResponse", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async RecordActivityTaskHeartbeatByID(ctx: context.Context | null, request: __goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse> | null, $.GoError]> {
		const c: _WorkerAPIYARPCCaller | $.VarRef<_WorkerAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkerAPIYARPCCaller>(c).streamClient).Call(ctx, "RecordActivityTaskHeartbeatByID", $.interfaceValue<proto.Message | null>(request, "*apiv1.RecordActivityTaskHeartbeatByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDRequest")), newWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple3: any = $.typeAssertTuple<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDResponse"))
		let response: __goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse> | null = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCResponse(), "*apiv1.RecordActivityTaskHeartbeatByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async ResetStickyTaskList(ctx: context.Context | null, request: __goscript_service_worker_pb.ResetStickyTaskListRequest | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_worker_pb.ResetStickyTaskListResponse | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListResponse> | null, $.GoError]> {
		const c: _WorkerAPIYARPCCaller | $.VarRef<_WorkerAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkerAPIYARPCCaller>(c).streamClient).Call(ctx, "ResetStickyTaskList", $.interfaceValue<proto.Message | null>(request, "*apiv1.ResetStickyTaskListRequest", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListRequest")), newWorkerAPIServiceResetStickyTaskListYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple4: any = $.typeAssertTuple<__goscript_service_worker_pb.ResetStickyTaskListResponse | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListResponse"))
		let response: __goscript_service_worker_pb.ResetStickyTaskListResponse | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListResponse> | null = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceResetStickyTaskListYARPCResponse(), "*apiv1.ResetStickyTaskListResponse", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async RespondActivityTaskCanceled(ctx: context.Context | null, request: __goscript_service_worker_pb.RespondActivityTaskCanceledRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_worker_pb.RespondActivityTaskCanceledResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledResponse> | null, $.GoError]> {
		const c: _WorkerAPIYARPCCaller | $.VarRef<_WorkerAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkerAPIYARPCCaller>(c).streamClient).Call(ctx, "RespondActivityTaskCanceled", $.interfaceValue<proto.Message | null>(request, "*apiv1.RespondActivityTaskCanceledRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledRequest")), newWorkerAPIServiceRespondActivityTaskCanceledYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple5: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondActivityTaskCanceledResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledResponse"))
		let response: __goscript_service_worker_pb.RespondActivityTaskCanceledResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledResponse> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCResponse(), "*apiv1.RespondActivityTaskCanceledResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async RespondActivityTaskCanceledByID(ctx: context.Context | null, request: __goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse> | null, $.GoError]> {
		const c: _WorkerAPIYARPCCaller | $.VarRef<_WorkerAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkerAPIYARPCCaller>(c).streamClient).Call(ctx, "RespondActivityTaskCanceledByID", $.interfaceValue<proto.Message | null>(request, "*apiv1.RespondActivityTaskCanceledByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDRequest")), newWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple6: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDResponse"))
		let response: __goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse> | null = __goscriptTuple6[0]
		let ok = __goscriptTuple6[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCResponse(), "*apiv1.RespondActivityTaskCanceledByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async RespondActivityTaskCompleted(ctx: context.Context | null, request: __goscript_service_worker_pb.RespondActivityTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_worker_pb.RespondActivityTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedResponse> | null, $.GoError]> {
		const c: _WorkerAPIYARPCCaller | $.VarRef<_WorkerAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkerAPIYARPCCaller>(c).streamClient).Call(ctx, "RespondActivityTaskCompleted", $.interfaceValue<proto.Message | null>(request, "*apiv1.RespondActivityTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedRequest")), newWorkerAPIServiceRespondActivityTaskCompletedYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple7: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondActivityTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedResponse"))
		let response: __goscript_service_worker_pb.RespondActivityTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedResponse> | null = __goscriptTuple7[0]
		let ok = __goscriptTuple7[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCResponse(), "*apiv1.RespondActivityTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async RespondActivityTaskCompletedByID(ctx: context.Context | null, request: __goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse> | null, $.GoError]> {
		const c: _WorkerAPIYARPCCaller | $.VarRef<_WorkerAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkerAPIYARPCCaller>(c).streamClient).Call(ctx, "RespondActivityTaskCompletedByID", $.interfaceValue<proto.Message | null>(request, "*apiv1.RespondActivityTaskCompletedByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDRequest")), newWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple8: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDResponse"))
		let response: __goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse> | null = __goscriptTuple8[0]
		let ok = __goscriptTuple8[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCResponse(), "*apiv1.RespondActivityTaskCompletedByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async RespondActivityTaskFailed(ctx: context.Context | null, request: __goscript_service_worker_pb.RespondActivityTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_worker_pb.RespondActivityTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedResponse> | null, $.GoError]> {
		const c: _WorkerAPIYARPCCaller | $.VarRef<_WorkerAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkerAPIYARPCCaller>(c).streamClient).Call(ctx, "RespondActivityTaskFailed", $.interfaceValue<proto.Message | null>(request, "*apiv1.RespondActivityTaskFailedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedRequest")), newWorkerAPIServiceRespondActivityTaskFailedYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple9: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondActivityTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedResponse"))
		let response: __goscript_service_worker_pb.RespondActivityTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedResponse> | null = __goscriptTuple9[0]
		let ok = __goscriptTuple9[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondActivityTaskFailedYARPCResponse(), "*apiv1.RespondActivityTaskFailedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async RespondActivityTaskFailedByID(ctx: context.Context | null, request: __goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse> | null, $.GoError]> {
		const c: _WorkerAPIYARPCCaller | $.VarRef<_WorkerAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkerAPIYARPCCaller>(c).streamClient).Call(ctx, "RespondActivityTaskFailedByID", $.interfaceValue<proto.Message | null>(request, "*apiv1.RespondActivityTaskFailedByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDRequest")), newWorkerAPIServiceRespondActivityTaskFailedByIDYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple10: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDResponse"))
		let response: __goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse> | null = __goscriptTuple10[0]
		let ok = __goscriptTuple10[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCResponse(), "*apiv1.RespondActivityTaskFailedByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async RespondDecisionTaskCompleted(ctx: context.Context | null, request: __goscript_service_worker_pb.RespondDecisionTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_worker_pb.RespondDecisionTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedResponse> | null, $.GoError]> {
		const c: _WorkerAPIYARPCCaller | $.VarRef<_WorkerAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkerAPIYARPCCaller>(c).streamClient).Call(ctx, "RespondDecisionTaskCompleted", $.interfaceValue<proto.Message | null>(request, "*apiv1.RespondDecisionTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedRequest")), newWorkerAPIServiceRespondDecisionTaskCompletedYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple11: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondDecisionTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedResponse"))
		let response: __goscript_service_worker_pb.RespondDecisionTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedResponse> | null = __goscriptTuple11[0]
		let ok = __goscriptTuple11[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCResponse(), "*apiv1.RespondDecisionTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async RespondDecisionTaskFailed(ctx: context.Context | null, request: __goscript_service_worker_pb.RespondDecisionTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_worker_pb.RespondDecisionTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedResponse> | null, $.GoError]> {
		const c: _WorkerAPIYARPCCaller | $.VarRef<_WorkerAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkerAPIYARPCCaller>(c).streamClient).Call(ctx, "RespondDecisionTaskFailed", $.interfaceValue<proto.Message | null>(request, "*apiv1.RespondDecisionTaskFailedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedRequest")), newWorkerAPIServiceRespondDecisionTaskFailedYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple12: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondDecisionTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedResponse"))
		let response: __goscript_service_worker_pb.RespondDecisionTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedResponse> | null = __goscriptTuple12[0]
		let ok = __goscriptTuple12[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCResponse(), "*apiv1.RespondDecisionTaskFailedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedResponse")), responseMessage)]
		}
		return [response, err]
	}

	public async RespondQueryTaskCompleted(ctx: context.Context | null, request: __goscript_service_worker_pb.RespondQueryTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedRequest> | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_service_worker_pb.RespondQueryTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedResponse> | null, $.GoError]> {
		const c: _WorkerAPIYARPCCaller | $.VarRef<_WorkerAPIYARPCCaller> | null = this;
		let [responseMessage, err] = await $.pointerValue<Exclude<protobuf.StreamClient, null>>($.pointerValue<_WorkerAPIYARPCCaller>(c).streamClient).Call(ctx, "RespondQueryTaskCompleted", $.interfaceValue<proto.Message | null>(request, "*apiv1.RespondQueryTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedRequest")), newWorkerAPIServiceRespondQueryTaskCompletedYARPCResponse, options)
		if (responseMessage == null) {
			return [null, err]
		}
		let __goscriptTuple13: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondQueryTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedResponse> | null>(responseMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedResponse"))
		let response: __goscript_service_worker_pb.RespondQueryTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedResponse> | null = __goscriptTuple13[0]
		let ok = __goscriptTuple13[1]
		if (!ok) {
			return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCResponse(), "*apiv1.RespondQueryTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedResponse")), responseMessage)]
		}
		return [response, err]
	}

	static __typeInfo = $.registerStructType(
		"apiv1._WorkerAPIYARPCCaller",
		() => new _WorkerAPIYARPCCaller(),
		() => [$.methodSignature("PollForActivityTask", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskResponse"), "error"], true), $.methodSignature("PollForDecisionTask", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskResponse"), "error"], true), $.methodSignature("RecordActivityTaskHeartbeat", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatResponse"), "error"], true), $.methodSignature("RecordActivityTaskHeartbeatByID", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDResponse"), "error"], true), $.methodSignature("ResetStickyTaskList", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListResponse"), "error"], true), $.methodSignature("RespondActivityTaskCanceled", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledResponse"), "error"], true), $.methodSignature("RespondActivityTaskCanceledByID", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDResponse"), "error"], true), $.methodSignature("RespondActivityTaskCompleted", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedResponse"), "error"], true), $.methodSignature("RespondActivityTaskCompletedByID", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDResponse"), "error"], true), $.methodSignature("RespondActivityTaskFailed", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedResponse"), "error"], true), $.methodSignature("RespondActivityTaskFailedByID", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDResponse"), "error"], true), $.methodSignature("RespondDecisionTaskCompleted", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedResponse"), "error"], true), $.methodSignature("RespondDecisionTaskFailed", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedResponse"), "error"], true), $.methodSignature("RespondQueryTaskCompleted", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedRequest")], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedResponse"), "error"], true)],
		_WorkerAPIYARPCCaller,
		() => [/* @__PURE__ */ $.structField("streamClient", "protobuf.StreamClient", [0], 0, false, { pkgPath: "github.com/uber/cadence-idl/go/proto/api/v1" })]
	)
}

export class _WorkerAPIYARPCHandler {
	public get server(): WorkerAPIYARPCServer | null {
		return this._fields.server
	}

	public set server(value: WorkerAPIYARPCServer | null) {
		this._fields.server = value
	}

	public _fields: {
		server: WorkerAPIYARPCServer | null
	}

	constructor(init?: Partial<{server?: WorkerAPIYARPCServer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			server: init?.server ?? (null! as WorkerAPIYARPCServer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): _WorkerAPIYARPCHandler {
		return new _WorkerAPIYARPCHandler(this, true)
	}

	public __goscriptAssign(source: _WorkerAPIYARPCHandler): void {
		const target = this._fields
		const values = source._fields
		target.server = $.assignFieldValue(target.server, values.server, "apiv1.WorkerAPIYARPCServer")
	}

	public async PollForActivityTask(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkerAPIYARPCHandler | $.VarRef<_WorkerAPIYARPCHandler> | null = this;
		let request: __goscript_service_worker_pb.PollForActivityTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskRequest> | null = null! as __goscript_service_worker_pb.PollForActivityTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple14: any = $.typeAssertTuple<__goscript_service_worker_pb.PollForActivityTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskRequest"))
			request = __goscriptTuple14[0]
			ok = __goscriptTuple14[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServicePollForActivityTaskYARPCRequest(), "*apiv1.PollForActivityTaskRequest", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskRequest")), requestMessage)]
			}
		}
		let __goscriptTuple15: any = await $.pointerValue<Exclude<WorkerAPIYARPCServer, null>>($.pointerValue<_WorkerAPIYARPCHandler>(h).server).PollForActivityTask(ctx, request)
		let response: __goscript_service_worker_pb.PollForActivityTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskResponse> | null = __goscriptTuple15[0]
		let err = __goscriptTuple15[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.PollForActivityTaskResponse", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskResponse")), err]
	}

	public async PollForDecisionTask(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkerAPIYARPCHandler | $.VarRef<_WorkerAPIYARPCHandler> | null = this;
		let request: __goscript_service_worker_pb.PollForDecisionTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskRequest> | null = null! as __goscript_service_worker_pb.PollForDecisionTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple16: any = $.typeAssertTuple<__goscript_service_worker_pb.PollForDecisionTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskRequest"))
			request = __goscriptTuple16[0]
			ok = __goscriptTuple16[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServicePollForDecisionTaskYARPCRequest(), "*apiv1.PollForDecisionTaskRequest", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskRequest")), requestMessage)]
			}
		}
		let __goscriptTuple17: any = await $.pointerValue<Exclude<WorkerAPIYARPCServer, null>>($.pointerValue<_WorkerAPIYARPCHandler>(h).server).PollForDecisionTask(ctx, request)
		let response: __goscript_service_worker_pb.PollForDecisionTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskResponse> | null = __goscriptTuple17[0]
		let err = __goscriptTuple17[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.PollForDecisionTaskResponse", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskResponse")), err]
	}

	public async RecordActivityTaskHeartbeat(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkerAPIYARPCHandler | $.VarRef<_WorkerAPIYARPCHandler> | null = this;
		let request: __goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest> | null = null! as __goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple18: any = $.typeAssertTuple<__goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatRequest"))
			request = __goscriptTuple18[0]
			ok = __goscriptTuple18[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCRequest(), "*apiv1.RecordActivityTaskHeartbeatRequest", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatRequest")), requestMessage)]
			}
		}
		let __goscriptTuple19: any = await $.pointerValue<Exclude<WorkerAPIYARPCServer, null>>($.pointerValue<_WorkerAPIYARPCHandler>(h).server).RecordActivityTaskHeartbeat(ctx, request)
		let response: __goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse> | null = __goscriptTuple19[0]
		let err = __goscriptTuple19[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.RecordActivityTaskHeartbeatResponse", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatResponse")), err]
	}

	public async RecordActivityTaskHeartbeatByID(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkerAPIYARPCHandler | $.VarRef<_WorkerAPIYARPCHandler> | null = this;
		let request: __goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest> | null = null! as __goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple20: any = $.typeAssertTuple<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDRequest"))
			request = __goscriptTuple20[0]
			ok = __goscriptTuple20[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCRequest(), "*apiv1.RecordActivityTaskHeartbeatByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDRequest")), requestMessage)]
			}
		}
		let __goscriptTuple21: any = await $.pointerValue<Exclude<WorkerAPIYARPCServer, null>>($.pointerValue<_WorkerAPIYARPCHandler>(h).server).RecordActivityTaskHeartbeatByID(ctx, request)
		let response: __goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse> | null = __goscriptTuple21[0]
		let err = __goscriptTuple21[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.RecordActivityTaskHeartbeatByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDResponse")), err]
	}

	public async ResetStickyTaskList(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkerAPIYARPCHandler | $.VarRef<_WorkerAPIYARPCHandler> | null = this;
		let request: __goscript_service_worker_pb.ResetStickyTaskListRequest | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListRequest> | null = null! as __goscript_service_worker_pb.ResetStickyTaskListRequest | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple22: any = $.typeAssertTuple<__goscript_service_worker_pb.ResetStickyTaskListRequest | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListRequest"))
			request = __goscriptTuple22[0]
			ok = __goscriptTuple22[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceResetStickyTaskListYARPCRequest(), "*apiv1.ResetStickyTaskListRequest", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListRequest")), requestMessage)]
			}
		}
		let __goscriptTuple23: any = await $.pointerValue<Exclude<WorkerAPIYARPCServer, null>>($.pointerValue<_WorkerAPIYARPCHandler>(h).server).ResetStickyTaskList(ctx, request)
		let response: __goscript_service_worker_pb.ResetStickyTaskListResponse | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListResponse> | null = __goscriptTuple23[0]
		let err = __goscriptTuple23[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.ResetStickyTaskListResponse", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListResponse")), err]
	}

	public async RespondActivityTaskCanceled(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkerAPIYARPCHandler | $.VarRef<_WorkerAPIYARPCHandler> | null = this;
		let request: __goscript_service_worker_pb.RespondActivityTaskCanceledRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledRequest> | null = null! as __goscript_service_worker_pb.RespondActivityTaskCanceledRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple24: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondActivityTaskCanceledRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledRequest"))
			request = __goscriptTuple24[0]
			ok = __goscriptTuple24[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCRequest(), "*apiv1.RespondActivityTaskCanceledRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledRequest")), requestMessage)]
			}
		}
		let __goscriptTuple25: any = await $.pointerValue<Exclude<WorkerAPIYARPCServer, null>>($.pointerValue<_WorkerAPIYARPCHandler>(h).server).RespondActivityTaskCanceled(ctx, request)
		let response: __goscript_service_worker_pb.RespondActivityTaskCanceledResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledResponse> | null = __goscriptTuple25[0]
		let err = __goscriptTuple25[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.RespondActivityTaskCanceledResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledResponse")), err]
	}

	public async RespondActivityTaskCanceledByID(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkerAPIYARPCHandler | $.VarRef<_WorkerAPIYARPCHandler> | null = this;
		let request: __goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest> | null = null! as __goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple26: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDRequest"))
			request = __goscriptTuple26[0]
			ok = __goscriptTuple26[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCRequest(), "*apiv1.RespondActivityTaskCanceledByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDRequest")), requestMessage)]
			}
		}
		let __goscriptTuple27: any = await $.pointerValue<Exclude<WorkerAPIYARPCServer, null>>($.pointerValue<_WorkerAPIYARPCHandler>(h).server).RespondActivityTaskCanceledByID(ctx, request)
		let response: __goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse> | null = __goscriptTuple27[0]
		let err = __goscriptTuple27[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.RespondActivityTaskCanceledByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDResponse")), err]
	}

	public async RespondActivityTaskCompleted(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkerAPIYARPCHandler | $.VarRef<_WorkerAPIYARPCHandler> | null = this;
		let request: __goscript_service_worker_pb.RespondActivityTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedRequest> | null = null! as __goscript_service_worker_pb.RespondActivityTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple28: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondActivityTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedRequest"))
			request = __goscriptTuple28[0]
			ok = __goscriptTuple28[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCRequest(), "*apiv1.RespondActivityTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedRequest")), requestMessage)]
			}
		}
		let __goscriptTuple29: any = await $.pointerValue<Exclude<WorkerAPIYARPCServer, null>>($.pointerValue<_WorkerAPIYARPCHandler>(h).server).RespondActivityTaskCompleted(ctx, request)
		let response: __goscript_service_worker_pb.RespondActivityTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedResponse> | null = __goscriptTuple29[0]
		let err = __goscriptTuple29[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.RespondActivityTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedResponse")), err]
	}

	public async RespondActivityTaskCompletedByID(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkerAPIYARPCHandler | $.VarRef<_WorkerAPIYARPCHandler> | null = this;
		let request: __goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest> | null = null! as __goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple30: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDRequest"))
			request = __goscriptTuple30[0]
			ok = __goscriptTuple30[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCRequest(), "*apiv1.RespondActivityTaskCompletedByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDRequest")), requestMessage)]
			}
		}
		let __goscriptTuple31: any = await $.pointerValue<Exclude<WorkerAPIYARPCServer, null>>($.pointerValue<_WorkerAPIYARPCHandler>(h).server).RespondActivityTaskCompletedByID(ctx, request)
		let response: __goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse> | null = __goscriptTuple31[0]
		let err = __goscriptTuple31[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.RespondActivityTaskCompletedByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDResponse")), err]
	}

	public async RespondActivityTaskFailed(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkerAPIYARPCHandler | $.VarRef<_WorkerAPIYARPCHandler> | null = this;
		let request: __goscript_service_worker_pb.RespondActivityTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedRequest> | null = null! as __goscript_service_worker_pb.RespondActivityTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple32: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondActivityTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedRequest"))
			request = __goscriptTuple32[0]
			ok = __goscriptTuple32[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondActivityTaskFailedYARPCRequest(), "*apiv1.RespondActivityTaskFailedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedRequest")), requestMessage)]
			}
		}
		let __goscriptTuple33: any = await $.pointerValue<Exclude<WorkerAPIYARPCServer, null>>($.pointerValue<_WorkerAPIYARPCHandler>(h).server).RespondActivityTaskFailed(ctx, request)
		let response: __goscript_service_worker_pb.RespondActivityTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedResponse> | null = __goscriptTuple33[0]
		let err = __goscriptTuple33[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.RespondActivityTaskFailedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedResponse")), err]
	}

	public async RespondActivityTaskFailedByID(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkerAPIYARPCHandler | $.VarRef<_WorkerAPIYARPCHandler> | null = this;
		let request: __goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest> | null = null! as __goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple34: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDRequest"))
			request = __goscriptTuple34[0]
			ok = __goscriptTuple34[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCRequest(), "*apiv1.RespondActivityTaskFailedByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDRequest")), requestMessage)]
			}
		}
		let __goscriptTuple35: any = await $.pointerValue<Exclude<WorkerAPIYARPCServer, null>>($.pointerValue<_WorkerAPIYARPCHandler>(h).server).RespondActivityTaskFailedByID(ctx, request)
		let response: __goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse> | null = __goscriptTuple35[0]
		let err = __goscriptTuple35[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.RespondActivityTaskFailedByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDResponse")), err]
	}

	public async RespondDecisionTaskCompleted(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkerAPIYARPCHandler | $.VarRef<_WorkerAPIYARPCHandler> | null = this;
		let request: __goscript_service_worker_pb.RespondDecisionTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedRequest> | null = null! as __goscript_service_worker_pb.RespondDecisionTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple36: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondDecisionTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedRequest"))
			request = __goscriptTuple36[0]
			ok = __goscriptTuple36[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCRequest(), "*apiv1.RespondDecisionTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedRequest")), requestMessage)]
			}
		}
		let __goscriptTuple37: any = await $.pointerValue<Exclude<WorkerAPIYARPCServer, null>>($.pointerValue<_WorkerAPIYARPCHandler>(h).server).RespondDecisionTaskCompleted(ctx, request)
		let response: __goscript_service_worker_pb.RespondDecisionTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedResponse> | null = __goscriptTuple37[0]
		let err = __goscriptTuple37[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.RespondDecisionTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedResponse")), err]
	}

	public async RespondDecisionTaskFailed(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkerAPIYARPCHandler | $.VarRef<_WorkerAPIYARPCHandler> | null = this;
		let request: __goscript_service_worker_pb.RespondDecisionTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedRequest> | null = null! as __goscript_service_worker_pb.RespondDecisionTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple38: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondDecisionTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedRequest"))
			request = __goscriptTuple38[0]
			ok = __goscriptTuple38[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCRequest(), "*apiv1.RespondDecisionTaskFailedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedRequest")), requestMessage)]
			}
		}
		let __goscriptTuple39: any = await $.pointerValue<Exclude<WorkerAPIYARPCServer, null>>($.pointerValue<_WorkerAPIYARPCHandler>(h).server).RespondDecisionTaskFailed(ctx, request)
		let response: __goscript_service_worker_pb.RespondDecisionTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedResponse> | null = __goscriptTuple39[0]
		let err = __goscriptTuple39[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.RespondDecisionTaskFailedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedResponse")), err]
	}

	public async RespondQueryTaskCompleted(ctx: context.Context | null, requestMessage: proto.Message | null): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const h: _WorkerAPIYARPCHandler | $.VarRef<_WorkerAPIYARPCHandler> | null = this;
		let request: __goscript_service_worker_pb.RespondQueryTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedRequest> | null = null! as __goscript_service_worker_pb.RespondQueryTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedRequest> | null
		let ok: boolean = false
		if (requestMessage != null) {
			let __goscriptTuple40: any = $.typeAssertTuple<__goscript_service_worker_pb.RespondQueryTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedRequest> | null>(requestMessage, /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedRequest"))
			request = __goscriptTuple40[0]
			ok = __goscriptTuple40[1]
			if (!ok) {
				return [null, protobuf.CastError($.interfaceValue<proto.Message | null>(__goscript_get_emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCRequest(), "*apiv1.RespondQueryTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedRequest")), requestMessage)]
			}
		}
		let __goscriptTuple41: any = await $.pointerValue<Exclude<WorkerAPIYARPCServer, null>>($.pointerValue<_WorkerAPIYARPCHandler>(h).server).RespondQueryTaskCompleted(ctx, request)
		let response: __goscript_service_worker_pb.RespondQueryTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedResponse> | null = __goscriptTuple41[0]
		let err = __goscriptTuple41[1]
		if (response == null) {
			return [null, err]
		}
		return [$.interfaceValue<proto.Message | null>(response, "*apiv1.RespondQueryTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedResponse")), err]
	}

	static __typeInfo = $.registerStructType(
		"apiv1._WorkerAPIYARPCHandler",
		() => new _WorkerAPIYARPCHandler(),
		() => [$.methodSignature("PollForActivityTask", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("PollForDecisionTask", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("RecordActivityTaskHeartbeat", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("RecordActivityTaskHeartbeatByID", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("ResetStickyTaskList", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("RespondActivityTaskCanceled", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("RespondActivityTaskCanceledByID", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("RespondActivityTaskCompleted", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("RespondActivityTaskCompletedByID", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("RespondActivityTaskFailed", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("RespondActivityTaskFailedByID", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("RespondDecisionTaskCompleted", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("RespondDecisionTaskFailed", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true), $.methodSignature("RespondQueryTaskCompleted", [["ctx", "context.Context"], ["requestMessage", "proto.Message"]], ["proto.Message", "error"], true)],
		_WorkerAPIYARPCHandler,
		() => [/* @__PURE__ */ $.structField("server", "apiv1.WorkerAPIYARPCServer", [0], 0, false, { pkgPath: "github.com/uber/cadence-idl/go/proto/api/v1" })]
	)
}

export async function newWorkerAPIYARPCClient(clientConfig: transport.ClientConfig | null, anyResolver: jsonpb.AnyResolver | null, options: $.Slice<protobuf.ClientOption | null>): globalThis.Promise<WorkerAPIYARPCClient | null> {
	return $.interfaceValue<WorkerAPIYARPCClient | null>((await (async () => { const __goscriptLiteralField0 = await protobuf.NewStreamClient(new protobuf.ClientParams({ServiceName: "uber.cadence.api.v1.WorkerAPI", ClientConfig: clientConfig, AnyResolver: anyResolver, Options: options}, true)); return new _WorkerAPIYARPCCaller({streamClient: __goscriptLiteralField0}) })()), "*apiv1._WorkerAPIYARPCCaller", /* @__PURE__ */ $.pointerType("apiv1._WorkerAPIYARPCCaller"))
}

export async function NewWorkerAPIYARPCClient(clientConfig: transport.ClientConfig | null, options: $.Slice<protobuf.ClientOption | null>): globalThis.Promise<WorkerAPIYARPCClient | null> {
	return newWorkerAPIYARPCClient(clientConfig, null, options)
}

export function buildWorkerAPIYARPCProcedures(params: buildWorkerAPIYARPCProceduresParams): $.Slice<transport.Procedure> {
	let handler: _WorkerAPIYARPCHandler | $.VarRef<_WorkerAPIYARPCHandler> | null = new _WorkerAPIYARPCHandler({server: params.Server})
	return protobuf.BuildProcedures(new protobuf.BuildProceduresParams({ServiceName: "uber.cadence.api.v1.WorkerAPI", UnaryHandlerParams: $.arrayToSlice<protobuf.BuildProceduresUnaryHandlerParams>([(() => { const __goscriptLiteralField1 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.PollForDecisionTask(ctx, requestMessage))($.pointerValue<_WorkerAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkerAPIYARPCHandler).PollForDecisionTask-fm"), NewRequest: newWorkerAPIServicePollForDecisionTaskYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "PollForDecisionTask", Handler: __goscriptLiteralField1}, true) })(), (() => { const __goscriptLiteralField2 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.RespondDecisionTaskCompleted(ctx, requestMessage))($.pointerValue<_WorkerAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkerAPIYARPCHandler).RespondDecisionTaskCompleted-fm"), NewRequest: newWorkerAPIServiceRespondDecisionTaskCompletedYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "RespondDecisionTaskCompleted", Handler: __goscriptLiteralField2}, true) })(), (() => { const __goscriptLiteralField3 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.RespondDecisionTaskFailed(ctx, requestMessage))($.pointerValue<_WorkerAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkerAPIYARPCHandler).RespondDecisionTaskFailed-fm"), NewRequest: newWorkerAPIServiceRespondDecisionTaskFailedYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "RespondDecisionTaskFailed", Handler: __goscriptLiteralField3}, true) })(), (() => { const __goscriptLiteralField4 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.PollForActivityTask(ctx, requestMessage))($.pointerValue<_WorkerAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkerAPIYARPCHandler).PollForActivityTask-fm"), NewRequest: newWorkerAPIServicePollForActivityTaskYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "PollForActivityTask", Handler: __goscriptLiteralField4}, true) })(), (() => { const __goscriptLiteralField5 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.RespondActivityTaskCompleted(ctx, requestMessage))($.pointerValue<_WorkerAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkerAPIYARPCHandler).RespondActivityTaskCompleted-fm"), NewRequest: newWorkerAPIServiceRespondActivityTaskCompletedYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "RespondActivityTaskCompleted", Handler: __goscriptLiteralField5}, true) })(), (() => { const __goscriptLiteralField6 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.RespondActivityTaskCompletedByID(ctx, requestMessage))($.pointerValue<_WorkerAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkerAPIYARPCHandler).RespondActivityTaskCompletedByID-fm"), NewRequest: newWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "RespondActivityTaskCompletedByID", Handler: __goscriptLiteralField6}, true) })(), (() => { const __goscriptLiteralField7 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.RespondActivityTaskFailed(ctx, requestMessage))($.pointerValue<_WorkerAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkerAPIYARPCHandler).RespondActivityTaskFailed-fm"), NewRequest: newWorkerAPIServiceRespondActivityTaskFailedYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "RespondActivityTaskFailed", Handler: __goscriptLiteralField7}, true) })(), (() => { const __goscriptLiteralField8 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.RespondActivityTaskFailedByID(ctx, requestMessage))($.pointerValue<_WorkerAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkerAPIYARPCHandler).RespondActivityTaskFailedByID-fm"), NewRequest: newWorkerAPIServiceRespondActivityTaskFailedByIDYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "RespondActivityTaskFailedByID", Handler: __goscriptLiteralField8}, true) })(), (() => { const __goscriptLiteralField9 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.RespondActivityTaskCanceled(ctx, requestMessage))($.pointerValue<_WorkerAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkerAPIYARPCHandler).RespondActivityTaskCanceled-fm"), NewRequest: newWorkerAPIServiceRespondActivityTaskCanceledYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "RespondActivityTaskCanceled", Handler: __goscriptLiteralField9}, true) })(), (() => { const __goscriptLiteralField10 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.RespondActivityTaskCanceledByID(ctx, requestMessage))($.pointerValue<_WorkerAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkerAPIYARPCHandler).RespondActivityTaskCanceledByID-fm"), NewRequest: newWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "RespondActivityTaskCanceledByID", Handler: __goscriptLiteralField10}, true) })(), (() => { const __goscriptLiteralField11 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.RecordActivityTaskHeartbeat(ctx, requestMessage))($.pointerValue<_WorkerAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkerAPIYARPCHandler).RecordActivityTaskHeartbeat-fm"), NewRequest: newWorkerAPIServiceRecordActivityTaskHeartbeatYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "RecordActivityTaskHeartbeat", Handler: __goscriptLiteralField11}, true) })(), (() => { const __goscriptLiteralField12 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.RecordActivityTaskHeartbeatByID(ctx, requestMessage))($.pointerValue<_WorkerAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkerAPIYARPCHandler).RecordActivityTaskHeartbeatByID-fm"), NewRequest: newWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "RecordActivityTaskHeartbeatByID", Handler: __goscriptLiteralField12}, true) })(), (() => { const __goscriptLiteralField13 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.RespondQueryTaskCompleted(ctx, requestMessage))($.pointerValue<_WorkerAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkerAPIYARPCHandler).RespondQueryTaskCompleted-fm"), NewRequest: newWorkerAPIServiceRespondQueryTaskCompletedYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "RespondQueryTaskCompleted", Handler: __goscriptLiteralField13}, true) })(), (() => { const __goscriptLiteralField14 = protobuf.NewUnaryHandler(new protobuf.UnaryHandlerParams({Handle: $.functionValue(((__receiver) => (ctx: context.Context | null, requestMessage: proto.Message | null) => __receiver.ResetStickyTaskList(ctx, requestMessage))($.pointerValue<_WorkerAPIYARPCHandler>(handler)), ({ kind: $.TypeKind.Function, params: ["context.Context", "proto.Message"], results: ["proto.Message", "error"] } as $.FunctionTypeInfo), "github.com/uber/cadence-idl/go/proto/api/v1.(*_WorkerAPIYARPCHandler).ResetStickyTaskList-fm"), NewRequest: newWorkerAPIServiceResetStickyTaskListYARPCRequest, AnyResolver: params.AnyResolver}, true)); return new protobuf.BuildProceduresUnaryHandlerParams({MethodName: "ResetStickyTaskList", Handler: __goscriptLiteralField14}, true) })()]), OnewayHandlerParams: $.arrayToSlice<protobuf.BuildProceduresOnewayHandlerParams>([]), StreamHandlerParams: $.arrayToSlice<protobuf.BuildProceduresStreamHandlerParams>([])}, true))
}

export function BuildWorkerAPIYARPCProcedures(server: WorkerAPIYARPCServer | null): $.Slice<transport.Procedure> {
	return buildWorkerAPIYARPCProcedures(new buildWorkerAPIYARPCProceduresParams({Server: server}, true))
}

export function NewFxWorkerAPIYARPCClient(name: string, options: $.Slice<protobuf.ClientOption | null>): any {
	return $.interfaceValue($.functionValue(async (params: FxWorkerAPIYARPCClientParams): globalThis.Promise<FxWorkerAPIYARPCClientResult> => {
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

		return (await (async () => { const __goscriptLiteralField15 = await newWorkerAPIYARPCClient(cc, params.AnyResolver, options); return new FxWorkerAPIYARPCClientResult({Client: __goscriptLiteralField15}, true) })())
	}, ({ kind: $.TypeKind.Function, params: ["apiv1.FxWorkerAPIYARPCClientParams"], results: ["apiv1.FxWorkerAPIYARPCClientResult"] } as $.FunctionTypeInfo)), "func(params apiv1.FxWorkerAPIYARPCClientParams) apiv1.FxWorkerAPIYARPCClientResult", ({ kind: $.TypeKind.Function, params: ["apiv1.FxWorkerAPIYARPCClientParams"], results: ["apiv1.FxWorkerAPIYARPCClientResult"] } as $.FunctionTypeInfo))
}

export function NewFxWorkerAPIYARPCProcedures(): any {
	return $.interfaceValue($.functionValue((params: FxWorkerAPIYARPCProceduresParams): FxWorkerAPIYARPCProceduresResult => {
		return (() => { const __goscriptLiteralField16 = buildWorkerAPIYARPCProcedures(new buildWorkerAPIYARPCProceduresParams({Server: params.Server, AnyResolver: params.AnyResolver}, true)); return new FxWorkerAPIYARPCProceduresResult({Procedures: __goscriptLiteralField16, ReflectionMeta: __goscript_get_WorkerAPIReflectionMeta()}, true) })()
	}, ({ kind: $.TypeKind.Function, params: ["apiv1.FxWorkerAPIYARPCProceduresParams"], results: ["apiv1.FxWorkerAPIYARPCProceduresResult"] } as $.FunctionTypeInfo)), "func(params apiv1.FxWorkerAPIYARPCProceduresParams) apiv1.FxWorkerAPIYARPCProceduresResult", ({ kind: $.TypeKind.Function, params: ["apiv1.FxWorkerAPIYARPCProceduresParams"], results: ["apiv1.FxWorkerAPIYARPCProceduresResult"] } as $.FunctionTypeInfo))
}

export var WorkerAPIReflectionMeta: reflection.ServerMeta

export function __goscript_init_WorkerAPIReflectionMeta(): void {
	if (((WorkerAPIReflectionMeta) as any) === undefined) {
		WorkerAPIReflectionMeta = new reflection.ServerMeta({ServiceName: "uber.cadence.api.v1.WorkerAPI", FileDescriptors: yarpcFileDescriptorClosure00684e887839a48c}, true)
	}
}

export function __goscript_get_WorkerAPIReflectionMeta(): reflection.ServerMeta {
	if (((WorkerAPIReflectionMeta) as any) === undefined) {
		__goscript_init_WorkerAPIReflectionMeta()
	}
	return WorkerAPIReflectionMeta
}

export function __goscript_set_WorkerAPIReflectionMeta(__goscriptValue: reflection.ServerMeta): void {
	$.assignStruct(WorkerAPIReflectionMeta, __goscriptValue)
}

export function newWorkerAPIServicePollForDecisionTaskYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.PollForDecisionTaskRequest(), "*apiv1.PollForDecisionTaskRequest", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskRequest"))
}

export function newWorkerAPIServicePollForDecisionTaskYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.PollForDecisionTaskResponse(), "*apiv1.PollForDecisionTaskResponse", /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskResponse"))
}

export function newWorkerAPIServiceRespondDecisionTaskCompletedYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondDecisionTaskCompletedRequest(), "*apiv1.RespondDecisionTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedRequest"))
}

export function newWorkerAPIServiceRespondDecisionTaskCompletedYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondDecisionTaskCompletedResponse(), "*apiv1.RespondDecisionTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedResponse"))
}

export function newWorkerAPIServiceRespondDecisionTaskFailedYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondDecisionTaskFailedRequest(), "*apiv1.RespondDecisionTaskFailedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedRequest"))
}

export function newWorkerAPIServiceRespondDecisionTaskFailedYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondDecisionTaskFailedResponse(), "*apiv1.RespondDecisionTaskFailedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedResponse"))
}

export function newWorkerAPIServicePollForActivityTaskYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.PollForActivityTaskRequest(), "*apiv1.PollForActivityTaskRequest", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskRequest"))
}

export function newWorkerAPIServicePollForActivityTaskYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.PollForActivityTaskResponse(), "*apiv1.PollForActivityTaskResponse", /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskResponse"))
}

export function newWorkerAPIServiceRespondActivityTaskCompletedYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondActivityTaskCompletedRequest(), "*apiv1.RespondActivityTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedRequest"))
}

export function newWorkerAPIServiceRespondActivityTaskCompletedYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondActivityTaskCompletedResponse(), "*apiv1.RespondActivityTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedResponse"))
}

export function newWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest(), "*apiv1.RespondActivityTaskCompletedByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDRequest"))
}

export function newWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse(), "*apiv1.RespondActivityTaskCompletedByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDResponse"))
}

export function newWorkerAPIServiceRespondActivityTaskFailedYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondActivityTaskFailedRequest(), "*apiv1.RespondActivityTaskFailedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedRequest"))
}

export function newWorkerAPIServiceRespondActivityTaskFailedYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondActivityTaskFailedResponse(), "*apiv1.RespondActivityTaskFailedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedResponse"))
}

export function newWorkerAPIServiceRespondActivityTaskFailedByIDYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest(), "*apiv1.RespondActivityTaskFailedByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDRequest"))
}

export function newWorkerAPIServiceRespondActivityTaskFailedByIDYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse(), "*apiv1.RespondActivityTaskFailedByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDResponse"))
}

export function newWorkerAPIServiceRespondActivityTaskCanceledYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondActivityTaskCanceledRequest(), "*apiv1.RespondActivityTaskCanceledRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledRequest"))
}

export function newWorkerAPIServiceRespondActivityTaskCanceledYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondActivityTaskCanceledResponse(), "*apiv1.RespondActivityTaskCanceledResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledResponse"))
}

export function newWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest(), "*apiv1.RespondActivityTaskCanceledByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDRequest"))
}

export function newWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse(), "*apiv1.RespondActivityTaskCanceledByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDResponse"))
}

export function newWorkerAPIServiceRecordActivityTaskHeartbeatYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest(), "*apiv1.RecordActivityTaskHeartbeatRequest", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatRequest"))
}

export function newWorkerAPIServiceRecordActivityTaskHeartbeatYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse(), "*apiv1.RecordActivityTaskHeartbeatResponse", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatResponse"))
}

export function newWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest(), "*apiv1.RecordActivityTaskHeartbeatByIDRequest", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDRequest"))
}

export function newWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse(), "*apiv1.RecordActivityTaskHeartbeatByIDResponse", /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDResponse"))
}

export function newWorkerAPIServiceRespondQueryTaskCompletedYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondQueryTaskCompletedRequest(), "*apiv1.RespondQueryTaskCompletedRequest", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedRequest"))
}

export function newWorkerAPIServiceRespondQueryTaskCompletedYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.RespondQueryTaskCompletedResponse(), "*apiv1.RespondQueryTaskCompletedResponse", /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedResponse"))
}

export function newWorkerAPIServiceResetStickyTaskListYARPCRequest(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.ResetStickyTaskListRequest(), "*apiv1.ResetStickyTaskListRequest", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListRequest"))
}

export function newWorkerAPIServiceResetStickyTaskListYARPCResponse(): proto.Message | null {
	return $.interfaceValue<proto.Message | null>(new __goscript_service_worker_pb.ResetStickyTaskListResponse(), "*apiv1.ResetStickyTaskListResponse", /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListResponse"))
}

export var emptyWorkerAPIServicePollForDecisionTaskYARPCRequest: __goscript_service_worker_pb.PollForDecisionTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskRequest> | null

export function __goscript_init_emptyWorkerAPIServicePollForDecisionTaskYARPCRequest(): void {
	if (((emptyWorkerAPIServicePollForDecisionTaskYARPCRequest) as any) === undefined) {
		emptyWorkerAPIServicePollForDecisionTaskYARPCRequest = new __goscript_service_worker_pb.PollForDecisionTaskRequest()
	}
}

export function __goscript_get_emptyWorkerAPIServicePollForDecisionTaskYARPCRequest(): __goscript_service_worker_pb.PollForDecisionTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskRequest> | null {
	if (((emptyWorkerAPIServicePollForDecisionTaskYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServicePollForDecisionTaskYARPCRequest()
	}
	return emptyWorkerAPIServicePollForDecisionTaskYARPCRequest
}

export function __goscript_set_emptyWorkerAPIServicePollForDecisionTaskYARPCRequest(__goscriptValue: __goscript_service_worker_pb.PollForDecisionTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskRequest> | null): void {
	emptyWorkerAPIServicePollForDecisionTaskYARPCRequest = __goscriptValue
}

export var emptyWorkerAPIServicePollForDecisionTaskYARPCResponse: __goscript_service_worker_pb.PollForDecisionTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskResponse> | null

export function __goscript_init_emptyWorkerAPIServicePollForDecisionTaskYARPCResponse(): void {
	if (((emptyWorkerAPIServicePollForDecisionTaskYARPCResponse) as any) === undefined) {
		emptyWorkerAPIServicePollForDecisionTaskYARPCResponse = new __goscript_service_worker_pb.PollForDecisionTaskResponse()
	}
}

export function __goscript_get_emptyWorkerAPIServicePollForDecisionTaskYARPCResponse(): __goscript_service_worker_pb.PollForDecisionTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskResponse> | null {
	if (((emptyWorkerAPIServicePollForDecisionTaskYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServicePollForDecisionTaskYARPCResponse()
	}
	return emptyWorkerAPIServicePollForDecisionTaskYARPCResponse
}

export function __goscript_set_emptyWorkerAPIServicePollForDecisionTaskYARPCResponse(__goscriptValue: __goscript_service_worker_pb.PollForDecisionTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForDecisionTaskResponse> | null): void {
	emptyWorkerAPIServicePollForDecisionTaskYARPCResponse = __goscriptValue
}

export var emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCRequest: __goscript_service_worker_pb.RespondDecisionTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedRequest> | null

export function __goscript_init_emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCRequest(): void {
	if (((emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCRequest) as any) === undefined) {
		emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCRequest = new __goscript_service_worker_pb.RespondDecisionTaskCompletedRequest()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCRequest(): __goscript_service_worker_pb.RespondDecisionTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedRequest> | null {
	if (((emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCRequest()
	}
	return emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCRequest
}

export function __goscript_set_emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCRequest(__goscriptValue: __goscript_service_worker_pb.RespondDecisionTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedRequest> | null): void {
	emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCRequest = __goscriptValue
}

export var emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCResponse: __goscript_service_worker_pb.RespondDecisionTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedResponse> | null

export function __goscript_init_emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCResponse(): void {
	if (((emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCResponse) as any) === undefined) {
		emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCResponse = new __goscript_service_worker_pb.RespondDecisionTaskCompletedResponse()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCResponse(): __goscript_service_worker_pb.RespondDecisionTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedResponse> | null {
	if (((emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCResponse()
	}
	return emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCResponse
}

export function __goscript_set_emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCResponse(__goscriptValue: __goscript_service_worker_pb.RespondDecisionTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskCompletedResponse> | null): void {
	emptyWorkerAPIServiceRespondDecisionTaskCompletedYARPCResponse = __goscriptValue
}

export var emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCRequest: __goscript_service_worker_pb.RespondDecisionTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedRequest> | null

export function __goscript_init_emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCRequest(): void {
	if (((emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCRequest) as any) === undefined) {
		emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCRequest = new __goscript_service_worker_pb.RespondDecisionTaskFailedRequest()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCRequest(): __goscript_service_worker_pb.RespondDecisionTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedRequest> | null {
	if (((emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCRequest()
	}
	return emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCRequest
}

export function __goscript_set_emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCRequest(__goscriptValue: __goscript_service_worker_pb.RespondDecisionTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedRequest> | null): void {
	emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCRequest = __goscriptValue
}

export var emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCResponse: __goscript_service_worker_pb.RespondDecisionTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedResponse> | null

export function __goscript_init_emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCResponse(): void {
	if (((emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCResponse) as any) === undefined) {
		emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCResponse = new __goscript_service_worker_pb.RespondDecisionTaskFailedResponse()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCResponse(): __goscript_service_worker_pb.RespondDecisionTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedResponse> | null {
	if (((emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCResponse()
	}
	return emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCResponse
}

export function __goscript_set_emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCResponse(__goscriptValue: __goscript_service_worker_pb.RespondDecisionTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondDecisionTaskFailedResponse> | null): void {
	emptyWorkerAPIServiceRespondDecisionTaskFailedYARPCResponse = __goscriptValue
}

export var emptyWorkerAPIServicePollForActivityTaskYARPCRequest: __goscript_service_worker_pb.PollForActivityTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskRequest> | null

export function __goscript_init_emptyWorkerAPIServicePollForActivityTaskYARPCRequest(): void {
	if (((emptyWorkerAPIServicePollForActivityTaskYARPCRequest) as any) === undefined) {
		emptyWorkerAPIServicePollForActivityTaskYARPCRequest = new __goscript_service_worker_pb.PollForActivityTaskRequest()
	}
}

export function __goscript_get_emptyWorkerAPIServicePollForActivityTaskYARPCRequest(): __goscript_service_worker_pb.PollForActivityTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskRequest> | null {
	if (((emptyWorkerAPIServicePollForActivityTaskYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServicePollForActivityTaskYARPCRequest()
	}
	return emptyWorkerAPIServicePollForActivityTaskYARPCRequest
}

export function __goscript_set_emptyWorkerAPIServicePollForActivityTaskYARPCRequest(__goscriptValue: __goscript_service_worker_pb.PollForActivityTaskRequest | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskRequest> | null): void {
	emptyWorkerAPIServicePollForActivityTaskYARPCRequest = __goscriptValue
}

export var emptyWorkerAPIServicePollForActivityTaskYARPCResponse: __goscript_service_worker_pb.PollForActivityTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskResponse> | null

export function __goscript_init_emptyWorkerAPIServicePollForActivityTaskYARPCResponse(): void {
	if (((emptyWorkerAPIServicePollForActivityTaskYARPCResponse) as any) === undefined) {
		emptyWorkerAPIServicePollForActivityTaskYARPCResponse = new __goscript_service_worker_pb.PollForActivityTaskResponse()
	}
}

export function __goscript_get_emptyWorkerAPIServicePollForActivityTaskYARPCResponse(): __goscript_service_worker_pb.PollForActivityTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskResponse> | null {
	if (((emptyWorkerAPIServicePollForActivityTaskYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServicePollForActivityTaskYARPCResponse()
	}
	return emptyWorkerAPIServicePollForActivityTaskYARPCResponse
}

export function __goscript_set_emptyWorkerAPIServicePollForActivityTaskYARPCResponse(__goscriptValue: __goscript_service_worker_pb.PollForActivityTaskResponse | $.VarRef<__goscript_service_worker_pb.PollForActivityTaskResponse> | null): void {
	emptyWorkerAPIServicePollForActivityTaskYARPCResponse = __goscriptValue
}

export var emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCRequest: __goscript_service_worker_pb.RespondActivityTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedRequest> | null

export function __goscript_init_emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCRequest(): void {
	if (((emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCRequest) as any) === undefined) {
		emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCRequest = new __goscript_service_worker_pb.RespondActivityTaskCompletedRequest()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCRequest(): __goscript_service_worker_pb.RespondActivityTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedRequest> | null {
	if (((emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCRequest()
	}
	return emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCRequest
}

export function __goscript_set_emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCRequest(__goscriptValue: __goscript_service_worker_pb.RespondActivityTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedRequest> | null): void {
	emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCRequest = __goscriptValue
}

export var emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCResponse: __goscript_service_worker_pb.RespondActivityTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedResponse> | null

export function __goscript_init_emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCResponse(): void {
	if (((emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCResponse) as any) === undefined) {
		emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCResponse = new __goscript_service_worker_pb.RespondActivityTaskCompletedResponse()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCResponse(): __goscript_service_worker_pb.RespondActivityTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedResponse> | null {
	if (((emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCResponse()
	}
	return emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCResponse
}

export function __goscript_set_emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCResponse(__goscriptValue: __goscript_service_worker_pb.RespondActivityTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedResponse> | null): void {
	emptyWorkerAPIServiceRespondActivityTaskCompletedYARPCResponse = __goscriptValue
}

export var emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCRequest: __goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest> | null

export function __goscript_init_emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCRequest(): void {
	if (((emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCRequest) as any) === undefined) {
		emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCRequest = new __goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCRequest(): __goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest> | null {
	if (((emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCRequest()
	}
	return emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCRequest
}

export function __goscript_set_emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCRequest(__goscriptValue: __goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDRequest> | null): void {
	emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCRequest = __goscriptValue
}

export var emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCResponse: __goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse> | null

export function __goscript_init_emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCResponse(): void {
	if (((emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCResponse) as any) === undefined) {
		emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCResponse = new __goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCResponse(): __goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse> | null {
	if (((emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCResponse()
	}
	return emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCResponse
}

export function __goscript_set_emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCResponse(__goscriptValue: __goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCompletedByIDResponse> | null): void {
	emptyWorkerAPIServiceRespondActivityTaskCompletedByIDYARPCResponse = __goscriptValue
}

export var emptyWorkerAPIServiceRespondActivityTaskFailedYARPCRequest: __goscript_service_worker_pb.RespondActivityTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedRequest> | null

export function __goscript_init_emptyWorkerAPIServiceRespondActivityTaskFailedYARPCRequest(): void {
	if (((emptyWorkerAPIServiceRespondActivityTaskFailedYARPCRequest) as any) === undefined) {
		emptyWorkerAPIServiceRespondActivityTaskFailedYARPCRequest = new __goscript_service_worker_pb.RespondActivityTaskFailedRequest()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondActivityTaskFailedYARPCRequest(): __goscript_service_worker_pb.RespondActivityTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedRequest> | null {
	if (((emptyWorkerAPIServiceRespondActivityTaskFailedYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondActivityTaskFailedYARPCRequest()
	}
	return emptyWorkerAPIServiceRespondActivityTaskFailedYARPCRequest
}

export function __goscript_set_emptyWorkerAPIServiceRespondActivityTaskFailedYARPCRequest(__goscriptValue: __goscript_service_worker_pb.RespondActivityTaskFailedRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedRequest> | null): void {
	emptyWorkerAPIServiceRespondActivityTaskFailedYARPCRequest = __goscriptValue
}

export var emptyWorkerAPIServiceRespondActivityTaskFailedYARPCResponse: __goscript_service_worker_pb.RespondActivityTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedResponse> | null

export function __goscript_init_emptyWorkerAPIServiceRespondActivityTaskFailedYARPCResponse(): void {
	if (((emptyWorkerAPIServiceRespondActivityTaskFailedYARPCResponse) as any) === undefined) {
		emptyWorkerAPIServiceRespondActivityTaskFailedYARPCResponse = new __goscript_service_worker_pb.RespondActivityTaskFailedResponse()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondActivityTaskFailedYARPCResponse(): __goscript_service_worker_pb.RespondActivityTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedResponse> | null {
	if (((emptyWorkerAPIServiceRespondActivityTaskFailedYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondActivityTaskFailedYARPCResponse()
	}
	return emptyWorkerAPIServiceRespondActivityTaskFailedYARPCResponse
}

export function __goscript_set_emptyWorkerAPIServiceRespondActivityTaskFailedYARPCResponse(__goscriptValue: __goscript_service_worker_pb.RespondActivityTaskFailedResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedResponse> | null): void {
	emptyWorkerAPIServiceRespondActivityTaskFailedYARPCResponse = __goscriptValue
}

export var emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCRequest: __goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest> | null

export function __goscript_init_emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCRequest(): void {
	if (((emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCRequest) as any) === undefined) {
		emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCRequest = new __goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCRequest(): __goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest> | null {
	if (((emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCRequest()
	}
	return emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCRequest
}

export function __goscript_set_emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCRequest(__goscriptValue: __goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDRequest> | null): void {
	emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCRequest = __goscriptValue
}

export var emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCResponse: __goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse> | null

export function __goscript_init_emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCResponse(): void {
	if (((emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCResponse) as any) === undefined) {
		emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCResponse = new __goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCResponse(): __goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse> | null {
	if (((emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCResponse()
	}
	return emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCResponse
}

export function __goscript_set_emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCResponse(__goscriptValue: __goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskFailedByIDResponse> | null): void {
	emptyWorkerAPIServiceRespondActivityTaskFailedByIDYARPCResponse = __goscriptValue
}

export var emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCRequest: __goscript_service_worker_pb.RespondActivityTaskCanceledRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledRequest> | null

export function __goscript_init_emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCRequest(): void {
	if (((emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCRequest) as any) === undefined) {
		emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCRequest = new __goscript_service_worker_pb.RespondActivityTaskCanceledRequest()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCRequest(): __goscript_service_worker_pb.RespondActivityTaskCanceledRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledRequest> | null {
	if (((emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCRequest()
	}
	return emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCRequest
}

export function __goscript_set_emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCRequest(__goscriptValue: __goscript_service_worker_pb.RespondActivityTaskCanceledRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledRequest> | null): void {
	emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCRequest = __goscriptValue
}

export var emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCResponse: __goscript_service_worker_pb.RespondActivityTaskCanceledResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledResponse> | null

export function __goscript_init_emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCResponse(): void {
	if (((emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCResponse) as any) === undefined) {
		emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCResponse = new __goscript_service_worker_pb.RespondActivityTaskCanceledResponse()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCResponse(): __goscript_service_worker_pb.RespondActivityTaskCanceledResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledResponse> | null {
	if (((emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCResponse()
	}
	return emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCResponse
}

export function __goscript_set_emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCResponse(__goscriptValue: __goscript_service_worker_pb.RespondActivityTaskCanceledResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledResponse> | null): void {
	emptyWorkerAPIServiceRespondActivityTaskCanceledYARPCResponse = __goscriptValue
}

export var emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCRequest: __goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest> | null

export function __goscript_init_emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCRequest(): void {
	if (((emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCRequest) as any) === undefined) {
		emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCRequest = new __goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCRequest(): __goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest> | null {
	if (((emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCRequest()
	}
	return emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCRequest
}

export function __goscript_set_emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCRequest(__goscriptValue: __goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDRequest> | null): void {
	emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCRequest = __goscriptValue
}

export var emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCResponse: __goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse> | null

export function __goscript_init_emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCResponse(): void {
	if (((emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCResponse) as any) === undefined) {
		emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCResponse = new __goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCResponse(): __goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse> | null {
	if (((emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCResponse()
	}
	return emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCResponse
}

export function __goscript_set_emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCResponse(__goscriptValue: __goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse | $.VarRef<__goscript_service_worker_pb.RespondActivityTaskCanceledByIDResponse> | null): void {
	emptyWorkerAPIServiceRespondActivityTaskCanceledByIDYARPCResponse = __goscriptValue
}

export var emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCRequest: __goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest> | null

export function __goscript_init_emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCRequest(): void {
	if (((emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCRequest) as any) === undefined) {
		emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCRequest = new __goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCRequest(): __goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest> | null {
	if (((emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCRequest()
	}
	return emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCRequest
}

export function __goscript_set_emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCRequest(__goscriptValue: __goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatRequest> | null): void {
	emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCRequest = __goscriptValue
}

export var emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCResponse: __goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse> | null

export function __goscript_init_emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCResponse(): void {
	if (((emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCResponse) as any) === undefined) {
		emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCResponse = new __goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCResponse(): __goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse> | null {
	if (((emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCResponse()
	}
	return emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCResponse
}

export function __goscript_set_emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCResponse(__goscriptValue: __goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatResponse> | null): void {
	emptyWorkerAPIServiceRecordActivityTaskHeartbeatYARPCResponse = __goscriptValue
}

export var emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCRequest: __goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest> | null

export function __goscript_init_emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCRequest(): void {
	if (((emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCRequest) as any) === undefined) {
		emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCRequest = new __goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCRequest(): __goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest> | null {
	if (((emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCRequest()
	}
	return emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCRequest
}

export function __goscript_set_emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCRequest(__goscriptValue: __goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDRequest> | null): void {
	emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCRequest = __goscriptValue
}

export var emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCResponse: __goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse> | null

export function __goscript_init_emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCResponse(): void {
	if (((emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCResponse) as any) === undefined) {
		emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCResponse = new __goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCResponse(): __goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse> | null {
	if (((emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCResponse()
	}
	return emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCResponse
}

export function __goscript_set_emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCResponse(__goscriptValue: __goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse | $.VarRef<__goscript_service_worker_pb.RecordActivityTaskHeartbeatByIDResponse> | null): void {
	emptyWorkerAPIServiceRecordActivityTaskHeartbeatByIDYARPCResponse = __goscriptValue
}

export var emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCRequest: __goscript_service_worker_pb.RespondQueryTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedRequest> | null

export function __goscript_init_emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCRequest(): void {
	if (((emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCRequest) as any) === undefined) {
		emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCRequest = new __goscript_service_worker_pb.RespondQueryTaskCompletedRequest()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCRequest(): __goscript_service_worker_pb.RespondQueryTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedRequest> | null {
	if (((emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCRequest()
	}
	return emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCRequest
}

export function __goscript_set_emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCRequest(__goscriptValue: __goscript_service_worker_pb.RespondQueryTaskCompletedRequest | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedRequest> | null): void {
	emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCRequest = __goscriptValue
}

export var emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCResponse: __goscript_service_worker_pb.RespondQueryTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedResponse> | null

export function __goscript_init_emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCResponse(): void {
	if (((emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCResponse) as any) === undefined) {
		emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCResponse = new __goscript_service_worker_pb.RespondQueryTaskCompletedResponse()
	}
}

export function __goscript_get_emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCResponse(): __goscript_service_worker_pb.RespondQueryTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedResponse> | null {
	if (((emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCResponse()
	}
	return emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCResponse
}

export function __goscript_set_emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCResponse(__goscriptValue: __goscript_service_worker_pb.RespondQueryTaskCompletedResponse | $.VarRef<__goscript_service_worker_pb.RespondQueryTaskCompletedResponse> | null): void {
	emptyWorkerAPIServiceRespondQueryTaskCompletedYARPCResponse = __goscriptValue
}

export var emptyWorkerAPIServiceResetStickyTaskListYARPCRequest: __goscript_service_worker_pb.ResetStickyTaskListRequest | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListRequest> | null

export function __goscript_init_emptyWorkerAPIServiceResetStickyTaskListYARPCRequest(): void {
	if (((emptyWorkerAPIServiceResetStickyTaskListYARPCRequest) as any) === undefined) {
		emptyWorkerAPIServiceResetStickyTaskListYARPCRequest = new __goscript_service_worker_pb.ResetStickyTaskListRequest()
	}
}

export function __goscript_get_emptyWorkerAPIServiceResetStickyTaskListYARPCRequest(): __goscript_service_worker_pb.ResetStickyTaskListRequest | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListRequest> | null {
	if (((emptyWorkerAPIServiceResetStickyTaskListYARPCRequest) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceResetStickyTaskListYARPCRequest()
	}
	return emptyWorkerAPIServiceResetStickyTaskListYARPCRequest
}

export function __goscript_set_emptyWorkerAPIServiceResetStickyTaskListYARPCRequest(__goscriptValue: __goscript_service_worker_pb.ResetStickyTaskListRequest | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListRequest> | null): void {
	emptyWorkerAPIServiceResetStickyTaskListYARPCRequest = __goscriptValue
}

export var emptyWorkerAPIServiceResetStickyTaskListYARPCResponse: __goscript_service_worker_pb.ResetStickyTaskListResponse | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListResponse> | null

export function __goscript_init_emptyWorkerAPIServiceResetStickyTaskListYARPCResponse(): void {
	if (((emptyWorkerAPIServiceResetStickyTaskListYARPCResponse) as any) === undefined) {
		emptyWorkerAPIServiceResetStickyTaskListYARPCResponse = new __goscript_service_worker_pb.ResetStickyTaskListResponse()
	}
}

export function __goscript_get_emptyWorkerAPIServiceResetStickyTaskListYARPCResponse(): __goscript_service_worker_pb.ResetStickyTaskListResponse | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListResponse> | null {
	if (((emptyWorkerAPIServiceResetStickyTaskListYARPCResponse) as any) === undefined) {
		__goscript_init_emptyWorkerAPIServiceResetStickyTaskListYARPCResponse()
	}
	return emptyWorkerAPIServiceResetStickyTaskListYARPCResponse
}

export function __goscript_set_emptyWorkerAPIServiceResetStickyTaskListYARPCResponse(__goscriptValue: __goscript_service_worker_pb.ResetStickyTaskListResponse | $.VarRef<__goscript_service_worker_pb.ResetStickyTaskListResponse> | null): void {
	emptyWorkerAPIServiceResetStickyTaskListYARPCResponse = __goscriptValue
}

export let yarpcFileDescriptorClosure00684e887839a48c: $.Slice<$.Slice<number>> = $.arrayToSlice<$.Slice<number>>([new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 228, 90, 91, 111, 219, 200, 245, 7, 109, 203, 151, 227, 155, 60, 198, 223, 127, 89, 185, 57, 74, 147, 120, 219, 84, 110, 188, 219, 108, 54, 217, 20, 245, 37, 70, 92, 108, 182, 94, 70, 155, 0, 91, 32, 196, 136, 28, 91, 3, 83, 28, 133, 28, 74, 209, 75, 31, 250, 216, 246, 161, 64, 129, 237, 75, 129, 60, 247, 3, 244, 163, 244, 165, 125, 105, 159, 251, 25, 10, 20, 156, 25, 82, 148, 52, 164, 46, 45, 224, 5, 250, 102, 14, 127, 231, 240, 204, 239, 156, 57, 243, 155, 177, 96, 55, 172, 19, 127, 207, 198, 14, 241, 108, 178, 135, 91, 116, 175, 253, 112, 47, 32, 126, 155, 218, 196, 234, 48, 255, 146, 248, 213, 150, 207, 56, 67, 155, 17, 178, 170, 144, 85, 220, 162, 213, 246, 195, 242, 205, 11, 198, 46, 92, 178, 39, 32, 245, 240, 124, 207, 9, 125, 204, 41, 243, 164, 81, 249, 214, 224, 123, 78, 155, 36, 224, 184, 217, 82, 128, 33, 7, 29, 31, 183, 90, 196, 15, 212, 251, 29, 93, 124, 54, 107, 54, 147, 79, 84, 116, 8, 135, 216, 52, 232, 133, 113, 91, 135, 105, 208, 128, 51, 191, 27, 71, 170, 131, 188, 11, 73, 2, 208, 126, 135, 227, 224, 210, 165, 1, 207, 195, 68, 44, 158, 187, 172, 35, 49, 149, 63, 27, 80, 62, 99, 174, 123, 194, 252, 99, 21, 101, 13, 7, 151, 38, 121, 23, 146, 128, 163, 45, 152, 119, 88, 19, 83, 175, 100, 236, 24, 187, 75, 166, 122, 66, 79, 96, 41, 250, 152, 21, 125, 173, 52, 179, 99, 236, 46, 239, 223, 168, 106, 82, 82, 141, 156, 125, 65, 3, 110, 46, 114, 245, 23, 42, 195, 34, 117, 136, 199, 41, 239, 150, 102, 133, 215, 228, 25, 221, 135, 245, 58, 245, 176, 223, 181, 236, 6, 177, 47, 131, 176, 89, 154, 19, 144, 53, 57, 124, 164, 70, 43, 255, 90, 132, 107, 218, 184, 131, 22, 243, 2, 130, 110, 0, 136, 0, 57, 187, 36, 50, 248, 21, 83, 132, 92, 139, 6, 208, 215, 128, 98, 34, 44, 242, 158, 216, 97, 84, 37, 106, 34, 247, 180, 19, 121, 163, 224, 207, 99, 180, 185, 209, 25, 28, 66, 39, 176, 154, 184, 229, 221, 22, 17, 243, 91, 222, 191, 157, 235, 177, 214, 109, 17, 115, 165, 147, 122, 66, 175, 97, 187, 229, 147, 54, 101, 97, 96, 5, 28, 251, 156, 56, 22, 105, 19, 143, 91, 212, 17, 132, 44, 239, 95, 171, 202, 90, 173, 198, 181, 90, 61, 245, 248, 163, 79, 94, 99, 55, 36, 230, 86, 108, 253, 74, 26, 63, 143, 108, 79, 29, 180, 11, 197, 33, 119, 133, 29, 99, 119, 214, 92, 11, 250, 145, 37, 88, 192, 156, 147, 102, 139, 151, 230, 5, 32, 126, 68, 15, 0, 213, 177, 125, 233, 178, 11, 203, 102, 161, 199, 173, 6, 245, 120, 105, 65, 128, 138, 234, 205, 81, 244, 226, 5, 245, 56, 122, 4, 11, 170, 178, 75, 139, 34, 238, 235, 90, 46, 94, 72, 140, 25, 131, 209, 61, 88, 247, 200, 123, 110, 181, 240, 5, 81, 73, 92, 18, 73, 92, 141, 134, 207, 240, 5, 145, 137, 124, 12, 5, 177, 44, 74, 32, 188, 87, 114, 153, 254, 42, 66, 154, 210, 0, 189, 133, 235, 195, 37, 96, 245, 170, 122, 121, 156, 170, 222, 30, 170, 129, 248, 21, 58, 128, 181, 192, 110, 16, 39, 116, 137, 99, 69, 141, 166, 180, 34, 60, 150, 135, 18, 87, 139, 187, 144, 185, 154, 88, 68, 99, 232, 25, 172, 196, 233, 18, 14, 86, 71, 58, 88, 86, 120, 97, 254, 6, 22, 162, 169, 82, 18, 148, 214, 118, 102, 119, 151, 247, 159, 105, 39, 147, 179, 140, 170, 95, 73, 251, 231, 30, 143, 146, 163, 188, 161, 10, 136, 44, 244, 106, 104, 93, 100, 127, 57, 26, 140, 11, 168, 10, 155, 156, 113, 236, 90, 42, 163, 86, 189, 203, 73, 80, 42, 10, 228, 134, 120, 165, 146, 126, 24, 189, 64, 47, 161, 136, 67, 206, 44, 155, 121, 231, 244, 66, 22, 213, 134, 152, 239, 29, 109, 212, 7, 33, 103, 71, 2, 27, 213, 153, 185, 134, 251, 158, 203, 111, 97, 37, 29, 59, 42, 194, 236, 37, 233, 170, 46, 22, 253, 25, 85, 78, 59, 90, 44, 106, 213, 143, 85, 57, 194, 224, 201, 204, 99, 163, 242, 167, 2, 220, 145, 44, 57, 105, 226, 142, 88, 179, 229, 18, 78, 156, 184, 129, 142, 232, 67, 79, 97, 41, 222, 28, 130, 210, 140, 72, 146, 190, 226, 226, 143, 152, 61, 60, 250, 1, 108, 244, 10, 215, 102, 30, 39, 239, 185, 232, 56, 43, 102, 49, 121, 113, 36, 199, 251, 186, 238, 220, 64, 215, 253, 5, 108, 4, 156, 218, 151, 93, 11, 115, 238, 211, 122, 24, 101, 170, 32, 104, 169, 106, 163, 121, 37, 208, 73, 205, 31, 36, 86, 102, 81, 58, 234, 141, 160, 79, 161, 228, 19, 30, 250, 158, 229, 145, 142, 21, 71, 47, 22, 154, 104, 45, 139, 230, 255, 201, 247, 95, 146, 78, 154, 74, 116, 8, 55, 207, 153, 111, 19, 203, 246, 9, 230, 68, 99, 190, 32, 204, 203, 2, 117, 36, 64, 131, 62, 52, 251, 201, 162, 110, 63, 65, 12, 86, 69, 91, 176, 124, 18, 132, 46, 15, 74, 75, 34, 25, 63, 211, 78, 127, 140, 196, 87, 101, 197, 72, 103, 114, 249, 172, 188, 75, 13, 149, 41, 108, 12, 65, 52, 85, 250, 147, 254, 42, 221, 29, 163, 74, 133, 195, 116, 173, 126, 152, 133, 239, 229, 135, 172, 54, 205, 175, 97, 181, 159, 96, 67, 124, 244, 71, 147, 182, 13, 115, 197, 73, 39, 225, 131, 1, 55, 177, 205, 105, 155, 114, 74, 2, 139, 51, 203, 161, 65, 11, 115, 187, 97, 185, 204, 198, 174, 219, 85, 165, 255, 205, 20, 108, 171, 70, 117, 144, 248, 175, 177, 99, 229, 253, 11, 233, 92, 178, 127, 13, 103, 35, 202, 191, 132, 157, 81, 14, 52, 185, 57, 238, 207, 141, 126, 169, 40, 191, 93, 225, 43, 118, 124, 234, 157, 179, 116, 134, 126, 53, 3, 59, 154, 105, 158, 96, 234, 142, 221, 74, 14, 161, 96, 227, 48, 144, 209, 172, 237, 63, 200, 109, 35, 61, 239, 71, 145, 141, 41, 77, 163, 221, 218, 33, 28, 83, 55, 80, 202, 69, 191, 91, 159, 225, 174, 203, 176, 99, 198, 224, 220, 230, 162, 89, 130, 5, 173, 164, 187, 3, 183, 115, 56, 144, 121, 174, 252, 163, 167, 87, 99, 102, 175, 82, 175, 190, 2, 148, 248, 181, 154, 132, 99, 7, 115, 172, 20, 218, 221, 220, 15, 188, 84, 96, 179, 200, 7, 70, 42, 127, 237, 105, 219, 254, 57, 94, 169, 182, 189, 5, 203, 106, 9, 117, 163, 45, 95, 50, 1, 241, 208, 169, 19, 137, 223, 4, 32, 196, 239, 92, 142, 248, 77, 38, 38, 196, 47, 78, 61, 161, 125, 40, 80, 175, 21, 114, 181, 3, 229, 151, 160, 132, 106, 196, 214, 252, 127, 42, 182, 22, 38, 19, 91, 53, 216, 142, 253, 69, 29, 206, 118, 89, 64, 132, 35, 22, 114, 37, 125, 183, 135, 124, 29, 171, 243, 169, 185, 21, 219, 214, 216, 81, 100, 89, 147, 134, 232, 75, 216, 18, 31, 25, 118, 185, 52, 202, 229, 166, 48, 28, 240, 119, 2, 27, 13, 130, 125, 94, 39, 152, 39, 174, 96, 148, 171, 98, 98, 19, 251, 73, 29, 15, 34, 157, 92, 232, 29, 15, 222, 194, 205, 254, 76, 88, 236, 220, 226, 13, 26, 88, 177, 193, 104, 25, 92, 238, 203, 204, 207, 207, 107, 13, 26, 28, 40, 255, 167, 233, 25, 196, 205, 106, 117, 140, 74, 233, 77, 226, 88, 117, 173, 161, 211, 218, 218, 116, 167, 181, 251, 176, 158, 248, 81, 221, 103, 93, 118, 184, 120, 248, 88, 118, 161, 143, 97, 190, 65, 176, 67, 124, 33, 131, 163, 51, 156, 246, 44, 36, 32, 166, 130, 254, 151, 133, 113, 229, 91, 35, 17, 174, 233, 230, 50, 169, 112, 253, 4, 230, 165, 82, 82, 141, 37, 159, 123, 133, 205, 107, 165, 149, 123, 137, 72, 201, 136, 75, 237, 0, 191, 153, 129, 251, 121, 192, 195, 238, 233, 241, 168, 237, 224, 170, 90, 100, 143, 181, 185, 41, 89, 43, 12, 176, 246, 125, 216, 29, 77, 134, 98, 238, 239, 70, 162, 50, 210, 224, 137, 84, 198, 35, 88, 56, 199, 212, 13, 125, 146, 155, 248, 19, 137, 49, 99, 112, 238, 38, 170, 93, 210, 115, 211, 44, 233, 148, 134, 208, 205, 80, 241, 240, 151, 25, 109, 169, 73, 212, 119, 185, 124, 82, 228, 207, 77, 75, 126, 97, 28, 242, 231, 167, 34, 255, 62, 220, 29, 65, 171, 74, 192, 31, 12, 168, 232, 170, 22, 123, 54, 153, 168, 20, 227, 120, 103, 166, 21, 171, 131, 77, 232, 174, 190, 57, 38, 129, 169, 9, 252, 118, 6, 238, 229, 224, 190, 227, 53, 52, 201, 18, 211, 178, 54, 216, 132, 62, 210, 119, 228, 62, 54, 250, 82, 111, 51, 191, 15, 250, 34, 46, 165, 43, 76, 253, 89, 148, 250, 156, 192, 148, 248, 254, 8, 138, 182, 152, 152, 229, 203, 88, 137, 35, 226, 91, 52, 215, 229, 184, 25, 15, 171, 42, 201, 116, 249, 191, 86, 37, 181, 168, 74, 70, 176, 49, 57, 201, 127, 235, 109, 106, 226, 250, 99, 26, 49, 243, 211, 1, 49, 51, 254, 45, 75, 188, 69, 191, 134, 77, 249, 239, 41, 171, 77, 124, 113, 127, 66, 189, 115, 166, 14, 209, 217, 137, 34, 254, 107, 9, 23, 23, 2, 27, 157, 193, 161, 212, 126, 166, 155, 92, 172, 136, 12, 40, 155, 36, 32, 92, 94, 203, 37, 71, 216, 43, 169, 173, 202, 13, 184, 166, 13, 70, 5, 235, 195, 90, 191, 66, 69, 15, 0, 17, 15, 215, 93, 98, 165, 116, 174, 74, 119, 81, 190, 233, 89, 160, 125, 216, 106, 49, 215, 37, 190, 213, 193, 84, 158, 97, 44, 234, 89, 77, 217, 9, 102, 77, 36, 223, 190, 193, 84, 28, 86, 78, 189, 151, 193, 254, 63, 215, 97, 73, 210, 125, 112, 118, 138, 222, 195, 166, 230, 238, 10, 237, 141, 127, 203, 37, 120, 45, 79, 124, 45, 134, 126, 111, 192, 245, 188, 219, 44, 244, 120, 218, 235, 198, 242, 103, 83, 95, 157, 161, 95, 27, 176, 157, 121, 241, 130, 126, 60, 174, 227, 62, 25, 89, 126, 52, 169, 153, 10, 166, 151, 156, 116, 151, 200, 79, 142, 230, 34, 40, 63, 57, 218, 91, 149, 84, 114, 180, 82, 58, 63, 57, 121, 103, 169, 252, 228, 228, 158, 118, 208, 7, 189, 102, 239, 19, 248, 232, 243, 137, 253, 167, 246, 158, 242, 179, 41, 173, 135, 203, 103, 88, 246, 229, 151, 79, 230, 41, 36, 191, 124, 178, 165, 61, 250, 214, 128, 27, 185, 26, 20, 125, 54, 153, 231, 52, 81, 79, 166, 49, 85, 129, 253, 206, 16, 109, 49, 75, 35, 161, 79, 199, 78, 66, 191, 72, 46, 63, 158, 220, 80, 133, 244, 71, 3, 110, 141, 144, 109, 232, 233, 164, 222, 211, 124, 125, 62, 157, 113, 31, 99, 153, 122, 33, 147, 177, 81, 218, 50, 147, 177, 209, 218, 79, 50, 150, 43, 97, 50, 25, 27, 71, 6, 102, 50, 54, 158, 106, 74, 173, 196, 97, 181, 144, 191, 18, 51, 165, 83, 254, 74, 204, 22, 37, 81, 35, 215, 200, 128, 140, 70, 158, 173, 94, 50, 26, 121, 142, 194, 56, 172, 195, 255, 219, 172, 169, 51, 59, 68, 82, 5, 188, 146, 191, 40, 58, 243, 25, 103, 103, 198, 55, 15, 47, 40, 111, 132, 245, 170, 205, 154, 123, 233, 159, 204, 252, 144, 58, 238, 222, 5, 147, 191, 6, 82, 191, 159, 121, 138, 91, 180, 253, 176, 62, 47, 198, 62, 254, 119, 0, 0, 0, 255, 255, 24, 249, 197, 155, 177, 36, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 75, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 79, 41, 45, 74, 44, 201, 204, 207, 211, 3, 139, 8, 241, 67, 228, 245, 96, 242, 74, 86, 92, 28, 46, 80, 37, 66, 18, 92, 236, 197, 169, 201, 249, 121, 41, 197, 18, 140, 10, 140, 26, 204, 65, 48, 174, 144, 8, 23, 107, 94, 98, 94, 126, 177, 4, 147, 2, 163, 6, 107, 16, 132, 227, 212, 204, 200, 37, 156, 156, 159, 171, 135, 102, 166, 19, 47, 204, 196, 0, 144, 72, 0, 99, 148, 33, 84, 69, 122, 126, 78, 98, 94, 186, 94, 126, 81, 58, 194, 129, 37, 149, 5, 169, 197, 250, 217, 121, 249, 229, 121, 112, 199, 22, 36, 253, 96, 100, 92, 196, 196, 236, 30, 224, 180, 138, 73, 206, 29, 162, 57, 0, 170, 67, 47, 60, 53, 39, 199, 27, 164, 62, 4, 164, 53, 137, 13, 108, 148, 49, 32, 0, 0, 255, 255, 239, 138, 180, 195, 251, 0, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 79, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 47, 201, 204, 77, 45, 46, 73, 204, 45, 208, 3, 11, 9, 241, 67, 20, 232, 193, 20, 40, 89, 115, 113, 134, 192, 212, 8, 73, 112, 177, 23, 167, 38, 231, 231, 165, 20, 75, 48, 42, 48, 106, 48, 7, 193, 184, 66, 34, 92, 172, 121, 137, 121, 249, 197, 18, 76, 10, 140, 26, 172, 65, 16, 142, 83, 43, 35, 151, 112, 114, 126, 174, 30, 154, 161, 78, 124, 112, 35, 3, 64, 66, 1, 140, 81, 70, 80, 37, 233, 249, 57, 137, 121, 233, 122, 249, 69, 233, 72, 110, 172, 44, 72, 45, 214, 207, 206, 203, 47, 207, 67, 184, 183, 32, 233, 7, 35, 227, 34, 38, 102, 247, 0, 167, 85, 76, 114, 238, 16, 221, 1, 80, 45, 122, 225, 169, 57, 57, 222, 32, 13, 33, 32, 189, 73, 108, 96, 179, 140, 1, 1, 0, 0, 255, 255, 174, 101, 206, 125, 255, 0, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 226, 146, 75, 207, 207, 79, 207, 73, 213, 47, 40, 202, 47, 201, 79, 42, 77, 211, 47, 47, 74, 44, 40, 72, 45, 42, 214, 3, 139, 8, 241, 67, 228, 245, 96, 242, 74, 202, 92, 220, 46, 249, 165, 73, 57, 169, 97, 137, 57, 165, 169, 66, 34, 92, 172, 101, 32, 134, 4, 163, 2, 163, 6, 99, 16, 132, 163, 164, 196, 197, 229, 150, 147, 159, 88, 130, 69, 13, 19, 146, 26, 207, 188, 18, 51, 19, 44, 106, 152, 97, 106, 148, 185, 184, 67, 113, 41, 98, 65, 53, 200, 216, 8, 139, 26, 86, 52, 131, 176, 42, 226, 133, 41, 82, 228, 226, 116, 202, 207, 207, 193, 162, 132, 3, 201, 156, 224, 146, 162, 204, 188, 116, 44, 138, 56, 145, 28, 228, 84, 89, 146, 90, 140, 69, 13, 15, 84, 141, 83, 51, 35, 151, 112, 114, 126, 174, 30, 90, 240, 58, 241, 134, 67, 195, 63, 0, 36, 18, 192, 24, 101, 8, 85, 145, 158, 159, 147, 152, 151, 174, 151, 95, 148, 142, 136, 171, 146, 202, 130, 212, 98, 253, 236, 188, 252, 242, 60, 120, 188, 21, 36, 253, 96, 100, 92, 196, 196, 236, 30, 224, 180, 138, 73, 206, 29, 162, 57, 0, 170, 67, 47, 60, 53, 39, 199, 27, 164, 62, 4, 164, 53, 137, 13, 108, 148, 49, 32, 0, 0, 255, 255, 60, 146, 72, 48, 6, 2, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 188, 86, 93, 115, 219, 68, 23, 126, 101, 215, 249, 56, 78, 19, 101, 211, 38, 78, 218, 188, 111, 234, 23, 104, 200, 128, 61, 113, 111, 58, 64, 1, 213, 31, 137, 90, 99, 155, 181, 219, 80, 152, 169, 102, 45, 173, 221, 37, 178, 86, 72, 43, 55, 238, 5, 195, 13, 127, 131, 11, 174, 249, 39, 92, 242, 135, 152, 149, 86, 177, 157, 184, 148, 11, 134, 59, 237, 121, 158, 243, 177, 71, 231, 99, 225, 32, 234, 211, 160, 108, 19, 135, 122, 54, 45, 19, 159, 149, 199, 199, 101, 155, 143, 70, 220, 43, 249, 1, 23, 28, 109, 73, 70, 73, 49, 74, 196, 103, 165, 241, 241, 222, 127, 135, 156, 15, 93, 90, 142, 41, 253, 104, 80, 118, 162, 128, 8, 150, 42, 21, 159, 194, 230, 25, 15, 206, 7, 46, 127, 93, 191, 160, 118, 36, 33, 244, 63, 200, 191, 86, 66, 139, 57, 5, 237, 64, 59, 92, 197, 144, 138, 76, 7, 221, 134, 165, 32, 242, 36, 150, 137, 177, 92, 16, 121, 166, 83, 44, 194, 90, 106, 172, 55, 241, 41, 66, 112, 195, 35, 35, 170, 12, 196, 223, 146, 99, 216, 130, 141, 153, 152, 188, 149, 179, 15, 203, 29, 50, 113, 57, 113, 36, 236, 16, 65, 98, 120, 13, 199, 223, 197, 55, 176, 220, 32, 204, 141, 2, 138, 182, 97, 41, 160, 36, 228, 158, 210, 87, 39, 84, 128, 101, 135, 10, 194, 220, 48, 142, 112, 13, 167, 71, 244, 8, 150, 185, 47, 111, 25, 22, 178, 7, 218, 97, 190, 242, 255, 210, 130, 188, 149, 148, 131, 118, 66, 197, 169, 78, 241, 55, 13, 214, 231, 49, 212, 6, 125, 144, 72, 44, 155, 8, 58, 228, 193, 36, 142, 102, 189, 242, 222, 95, 153, 174, 42, 46, 222, 24, 204, 11, 144, 9, 91, 30, 189, 16, 86, 64, 69, 48, 177, 152, 39, 104, 48, 38, 110, 124, 145, 124, 101, 183, 148, 252, 209, 82, 250, 71, 75, 53, 245, 71, 241, 166, 212, 194, 82, 201, 84, 58, 197, 95, 52, 184, 241, 21, 29, 113, 244, 8, 150, 6, 140, 186, 78, 88, 208, 14, 178, 135, 249, 202, 251, 11, 67, 147, 212, 82, 35, 230, 213, 61, 17, 76, 176, 82, 218, 59, 131, 252, 140, 24, 233, 144, 61, 167, 19, 149, 115, 249, 137, 42, 144, 27, 19, 55, 162, 42, 202, 187, 11, 205, 171, 159, 138, 19, 234, 39, 153, 135, 90, 241, 87, 13, 150, 78, 41, 113, 104, 128, 190, 184, 18, 226, 253, 133, 54, 18, 242, 191, 27, 228, 31, 26, 232, 93, 74, 2, 251, 149, 33, 68, 192, 250, 145, 160, 33, 178, 96, 157, 121, 14, 189, 160, 142, 53, 23, 246, 195, 133, 86, 175, 170, 151, 204, 68, 119, 246, 30, 55, 217, 172, 108, 239, 37, 160, 235, 164, 127, 240, 86, 3, 88, 169, 17, 65, 30, 187, 188, 143, 26, 112, 147, 122, 54, 119, 152, 55, 180, 196, 196, 167, 170, 128, 239, 45, 180, 85, 87, 76, 217, 191, 120, 141, 206, 156, 46, 219, 53, 51, 211, 174, 157, 100, 196, 208, 224, 57, 13, 66, 198, 61, 211, 27, 112, 73, 100, 35, 223, 77, 219, 94, 126, 163, 251, 176, 49, 160, 68, 200, 70, 26, 39, 84, 53, 94, 214, 149, 88, 25, 40, 62, 133, 157, 110, 228, 251, 60, 16, 212, 169, 186, 140, 122, 66, 33, 161, 156, 76, 67, 110, 133, 206, 185, 178, 156, 27, 242, 174, 115, 142, 118, 97, 229, 123, 50, 38, 49, 144, 216, 92, 150, 231, 174, 115, 94, 252, 41, 11, 249, 184, 105, 58, 220, 101, 246, 4, 213, 64, 103, 30, 19, 140, 184, 211, 214, 211, 222, 213, 122, 27, 74, 37, 109, 60, 84, 134, 173, 62, 177, 207, 249, 96, 96, 217, 156, 14, 6, 204, 150, 97, 198, 190, 53, 140, 20, 84, 157, 34, 210, 237, 136, 92, 176, 81, 52, 154, 186, 205, 190, 211, 173, 82, 185, 116, 251, 225, 212, 10, 17, 130, 142, 124, 17, 22, 110, 28, 104, 135, 185, 75, 170, 161, 196, 232, 17, 220, 241, 184, 151, 12, 25, 210, 119, 169, 69, 131, 128, 7, 86, 50, 64, 195, 66, 238, 32, 123, 184, 138, 11, 30, 247, 112, 202, 168, 75, 2, 78, 112, 244, 4, 182, 232, 133, 207, 146, 64, 166, 33, 47, 189, 43, 100, 52, 213, 186, 156, 82, 35, 216, 49, 67, 238, 198, 194, 147, 128, 71, 126, 135, 4, 130, 197, 171, 104, 193, 122, 64, 159, 67, 46, 20, 68, 36, 5, 191, 94, 57, 92, 88, 164, 243, 6, 187, 146, 143, 19, 181, 226, 24, 238, 204, 163, 85, 238, 13, 216, 80, 69, 136, 206, 64, 103, 41, 108, 13, 37, 158, 182, 246, 71, 127, 195, 211, 101, 232, 120, 131, 205, 1, 97, 241, 119, 13, 246, 140, 112, 226, 217, 233, 146, 156, 247, 91, 128, 101, 234, 201, 60, 39, 27, 119, 5, 167, 71, 84, 129, 219, 126, 64, 29, 58, 96, 30, 117, 172, 31, 34, 26, 81, 43, 206, 74, 82, 202, 91, 83, 240, 107, 137, 181, 100, 146, 246, 1, 18, 98, 220, 206, 217, 152, 184, 26, 75, 226, 70, 253, 18, 214, 18, 216, 142, 99, 136, 139, 36, 95, 217, 95, 120, 193, 116, 74, 224, 124, 172, 146, 68, 93, 12, 224, 110, 188, 200, 105, 213, 141, 66, 65, 131, 46, 117, 169, 45, 47, 162, 250, 8, 195, 166, 157, 32, 178, 20, 147, 177, 167, 220, 44, 94, 62, 202, 206, 229, 140, 196, 186, 125, 69, 82, 252, 12, 244, 171, 44, 116, 11, 114, 161, 205, 253, 180, 68, 146, 195, 101, 221, 100, 102, 158, 21, 223, 192, 102, 135, 12, 153, 23, 167, 59, 221, 222, 119, 96, 213, 39, 67, 106, 133, 236, 77, 98, 34, 135, 87, 164, 160, 203, 222, 80, 244, 1, 108, 196, 155, 56, 102, 8, 126, 78, 61, 53, 217, 110, 74, 113, 135, 12, 105, 79, 10, 143, 126, 214, 96, 227, 202, 90, 71, 119, 161, 208, 48, 204, 230, 51, 92, 183, 170, 70, 175, 126, 210, 198, 47, 44, 179, 245, 220, 104, 154, 53, 253, 63, 104, 23, 110, 95, 67, 59, 237, 102, 83, 215, 208, 62, 236, 94, 131, 186, 61, 163, 85, 51, 112, 77, 207, 160, 61, 216, 190, 6, 55, 140, 158, 209, 212, 179, 71, 175, 97, 109, 118, 56, 75, 47, 245, 86, 181, 93, 51, 91, 39, 86, 239, 69, 167, 62, 19, 192, 30, 108, 207, 67, 189, 83, 108, 54, 122, 248, 76, 215, 208, 54, 160, 121, 236, 73, 183, 221, 210, 51, 168, 0, 183, 230, 229, 29, 220, 238, 181, 31, 232, 217, 163, 31, 97, 107, 65, 195, 161, 123, 176, 111, 118, 219, 77, 163, 103, 182, 91, 214, 9, 110, 63, 235, 200, 155, 244, 102, 227, 120, 43, 229, 180, 110, 52, 123, 167, 47, 116, 237, 237, 148, 26, 54, 204, 86, 189, 166, 103, 142, 94, 194, 154, 204, 63, 31, 211, 32, 189, 184, 76, 82, 251, 121, 29, 95, 189, 248, 14, 108, 205, 67, 141, 54, 174, 214, 117, 45, 77, 236, 20, 56, 193, 70, 181, 222, 120, 214, 212, 51, 143, 191, 131, 29, 155, 143, 22, 149, 237, 227, 124, 53, 126, 132, 119, 228, 164, 235, 104, 223, 30, 15, 153, 120, 21, 245, 75, 54, 31, 149, 103, 159, 236, 31, 51, 199, 45, 15, 121, 242, 16, 87, 239, 247, 79, 137, 207, 198, 199, 253, 165, 88, 246, 224, 207, 0, 0, 0, 255, 255, 236, 69, 194, 8, 227, 11, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 220, 89, 223, 110, 212, 198, 23, 254, 57, 127, 54, 187, 39, 27, 32, 19, 8, 9, 4, 18, 246, 167, 66, 33, 202, 110, 18, 40, 66, 128, 80, 201, 66, 68, 36, 8, 145, 19, 64, 170, 84, 89, 147, 241, 36, 153, 198, 235, 217, 142, 199, 9, 91, 169, 18, 87, 109, 111, 250, 0, 149, 122, 213, 155, 182, 55, 237, 109, 171, 94, 245, 17, 250, 44, 125, 129, 202, 227, 177, 119, 179, 241, 122, 237, 64, 185, 232, 93, 60, 62, 231, 155, 207, 115, 206, 126, 231, 179, 3, 21, 127, 155, 138, 26, 193, 54, 117, 9, 173, 225, 38, 171, 29, 44, 213, 108, 74, 152, 199, 184, 91, 109, 10, 46, 57, 154, 8, 98, 170, 58, 166, 138, 155, 172, 122, 176, 116, 225, 242, 46, 231, 187, 14, 173, 169, 144, 109, 127, 167, 102, 251, 2, 203, 56, 233, 194, 92, 18, 48, 225, 141, 70, 28, 145, 184, 181, 196, 222, 190, 195, 60, 153, 22, 115, 200, 197, 254, 142, 195, 15, 195, 152, 202, 55, 227, 80, 124, 164, 25, 163, 239, 12, 184, 225, 145, 61, 106, 251, 14, 181, 48, 145, 236, 128, 201, 150, 21, 160, 90, 209, 83, 89, 88, 74, 193, 182, 125, 73, 189, 41, 99, 206, 248, 112, 116, 249, 94, 53, 225, 9, 171, 155, 26, 230, 161, 70, 217, 194, 222, 126, 180, 207, 195, 24, 226, 201, 255, 204, 171, 94, 166, 72, 244, 5, 204, 122, 18, 11, 105, 73, 214, 160, 34, 145, 207, 128, 226, 179, 148, 204, 39, 200, 221, 10, 82, 19, 89, 204, 120, 41, 247, 209, 79, 6, 4, 167, 223, 116, 168, 164, 86, 116, 128, 22, 125, 77, 137, 31, 20, 45, 145, 204, 160, 34, 243, 113, 34, 153, 186, 198, 122, 165, 161, 30, 71, 72, 137, 220, 230, 73, 246, 112, 244, 189, 1, 243, 59, 152, 57, 89, 105, 14, 41, 154, 247, 19, 105, 174, 98, 230, 100, 163, 120, 109, 39, 91, 40, 250, 217, 128, 69, 65, 63, 247, 169, 39, 45, 130, 93, 66, 157, 12, 125, 54, 156, 114, 148, 102, 8, 86, 87, 88, 125, 155, 109, 94, 100, 15, 71, 95, 194, 156, 166, 216, 187, 229, 10, 138, 218, 114, 114, 149, 85, 114, 239, 158, 187, 68, 210, 2, 208, 15, 6, 44, 232, 253, 51, 214, 114, 68, 145, 121, 144, 66, 38, 91, 53, 175, 147, 172, 193, 232, 47, 3, 30, 116, 213, 147, 190, 150, 84, 184, 56, 51, 235, 162, 98, 253, 172, 127, 117, 31, 107, 224, 108, 15, 113, 71, 156, 48, 23, 189, 49, 224, 138, 160, 132, 11, 219, 106, 96, 177, 223, 163, 242, 37, 69, 251, 102, 15, 218, 65, 246, 51, 149, 156, 72, 238, 178, 72, 141, 64, 191, 27, 112, 155, 112, 87, 50, 215, 167, 22, 246, 44, 151, 30, 102, 61, 78, 80, 188, 30, 247, 208, 157, 16, 242, 161, 183, 78, 15, 179, 29, 227, 34, 201, 153, 131, 126, 53, 96, 57, 84, 106, 178, 199, 28, 59, 43, 239, 81, 197, 123, 165, 183, 120, 215, 3, 180, 108, 164, 23, 188, 60, 9, 232, 15, 3, 110, 123, 108, 55, 232, 217, 188, 205, 91, 86, 172, 87, 147, 89, 43, 200, 124, 93, 187, 228, 229, 77, 66, 191, 25, 240, 145, 223, 244, 168, 144, 109, 210, 30, 197, 130, 236, 117, 16, 77, 36, 63, 150, 210, 42, 47, 20, 98, 180, 255, 166, 194, 107, 111, 154, 220, 42, 126, 206, 156, 149, 50, 64, 155, 78, 229, 219, 2, 92, 205, 102, 27, 208, 44, 140, 198, 99, 131, 217, 202, 136, 148, 76, 136, 150, 214, 108, 180, 10, 99, 237, 185, 210, 106, 82, 237, 13, 174, 36, 62, 107, 188, 89, 171, 73, 205, 50, 238, 184, 66, 147, 80, 176, 121, 3, 51, 87, 205, 243, 146, 169, 175, 208, 93, 40, 169, 113, 21, 184, 45, 61, 67, 47, 37, 98, 7, 15, 240, 148, 121, 210, 44, 74, 253, 23, 90, 134, 97, 230, 54, 125, 169, 231, 218, 76, 98, 222, 6, 110, 57, 28, 219, 102, 24, 138, 182, 96, 58, 54, 102, 146, 91, 196, 225, 30, 85, 99, 137, 251, 82, 15, 161, 233, 106, 104, 42, 171, 145, 169, 172, 62, 210, 166, 210, 156, 140, 114, 183, 120, 61, 200, 220, 10, 19, 187, 81, 219, 254, 42, 64, 29, 201, 129, 26, 187, 171, 0, 117, 29, 38, 53, 82, 55, 209, 98, 63, 200, 137, 208, 134, 29, 101, 185, 10, 227, 123, 20, 11, 185, 77, 113, 155, 93, 169, 31, 212, 153, 56, 39, 194, 169, 67, 89, 80, 41, 90, 86, 147, 59, 140, 180, 180, 226, 204, 245, 80, 112, 41, 90, 27, 42, 206, 28, 21, 237, 11, 116, 19, 10, 123, 20, 219, 84, 232, 159, 254, 197, 196, 244, 39, 42, 196, 212, 161, 232, 22, 76, 70, 67, 210, 225, 4, 59, 150, 205, 188, 38, 150, 100, 79, 253, 4, 139, 230, 89, 125, 247, 105, 112, 243, 145, 190, 87, 249, 218, 128, 153, 52, 219, 138, 166, 161, 24, 58, 147, 248, 39, 48, 162, 174, 215, 108, 244, 20, 206, 197, 53, 216, 97, 162, 93, 130, 129, 126, 231, 134, 116, 9, 86, 153, 136, 42, 80, 33, 48, 159, 195, 178, 162, 91, 80, 16, 212, 243, 29, 169, 223, 16, 210, 59, 92, 199, 86, 48, 92, 203, 104, 56, 209, 109, 24, 9, 12, 167, 47, 104, 234, 14, 171, 97, 140, 25, 5, 87, 214, 97, 62, 135, 95, 236, 171, 50, 149, 187, 112, 41, 213, 228, 165, 84, 168, 66, 224, 122, 102, 79, 22, 60, 176, 77, 37, 102, 142, 151, 233, 72, 163, 224, 202, 223, 6, 220, 57, 169, 135, 234, 208, 62, 227, 136, 246, 189, 0, 116, 124, 58, 234, 198, 186, 154, 200, 235, 216, 110, 230, 248, 97, 247, 18, 154, 130, 145, 192, 107, 8, 238, 40, 173, 45, 155, 209, 37, 170, 194, 68, 151, 149, 224, 174, 211, 82, 178, 91, 52, 199, 73, 231, 152, 127, 238, 58, 173, 202, 47, 6, 92, 78, 183, 96, 65, 105, 181, 183, 115, 113, 131, 70, 165, 13, 151, 214, 113, 131, 118, 158, 248, 64, 142, 19, 239, 208, 135, 193, 204, 250, 80, 121, 3, 176, 152, 215, 155, 5, 35, 46, 62, 15, 53, 226, 140, 148, 17, 23, 1, 134, 35, 238, 176, 227, 234, 232, 40, 27, 56, 225, 40, 27, 204, 62, 202, 48, 204, 181, 61, 85, 143, 65, 49, 212, 79, 165, 102, 98, 136, 205, 132, 137, 241, 10, 46, 170, 71, 234, 129, 62, 220, 15, 253, 124, 144, 157, 4, 252, 28, 38, 183, 49, 217, 231, 59, 59, 26, 155, 185, 146, 138, 3, 236, 244, 159, 193, 103, 117, 162, 130, 93, 211, 105, 199, 102, 210, 200, 73, 102, 210, 26, 148, 152, 203, 36, 195, 146, 11, 53, 99, 79, 45, 207, 247, 247, 255, 107, 81, 138, 217, 206, 238, 84, 214, 82, 14, 101, 69, 38, 76, 58, 56, 120, 7, 12, 199, 68, 80, 90, 61, 2, 32, 67, 103, 156, 13, 114, 235, 113, 170, 169, 50, 209, 255, 97, 140, 136, 160, 71, 180, 205, 80, 3, 187, 100, 150, 131, 197, 200, 39, 158, 108, 30, 47, 192, 80, 131, 54, 184, 54, 192, 211, 137, 41, 207, 104, 131, 155, 42, 12, 153, 48, 126, 204, 80, 79, 157, 82, 185, 31, 36, 59, 255, 46, 235, 107, 158, 241, 186, 86, 208, 125, 40, 127, 198, 164, 164, 34, 108, 164, 169, 211, 253, 250, 103, 52, 12, 87, 237, 131, 94, 194, 132, 58, 26, 126, 64, 133, 131, 155, 81, 247, 156, 81, 181, 79, 214, 224, 186, 224, 238, 243, 48, 92, 247, 208, 56, 233, 94, 66, 175, 97, 86, 141, 55, 106, 17, 199, 247, 20, 59, 234, 80, 162, 234, 169, 247, 24, 79, 249, 200, 166, 230, 41, 173, 135, 169, 155, 81, 166, 222, 110, 6, 167, 220, 173, 252, 88, 130, 133, 92, 175, 121, 61, 199, 211, 44, 140, 198, 186, 200, 108, 165, 104, 37, 19, 162, 165, 240, 221, 224, 168, 112, 14, 190, 3, 225, 124, 15, 239, 0, 89, 132, 179, 240, 175, 10, 231, 200, 137, 133, 243, 37, 76, 52, 177, 160, 174, 212, 136, 186, 153, 138, 41, 13, 187, 161, 226, 21, 74, 212, 176, 205, 238, 165, 78, 211, 80, 58, 106, 26, 8, 76, 117, 180, 129, 37, 168, 223, 222, 22, 212, 182, 55, 82, 11, 190, 102, 155, 65, 138, 222, 250, 220, 97, 210, 242, 187, 121, 165, 56, 166, 115, 229, 84, 157, 27, 203, 175, 115, 167, 222, 66, 231, 78, 191, 157, 206, 253, 247, 148, 234, 207, 1, 88, 202, 253, 105, 231, 125, 155, 233, 89, 24, 213, 95, 180, 148, 191, 13, 63, 94, 64, 184, 164, 252, 109, 44, 64, 67, 217, 5, 168, 227, 199, 54, 156, 201, 161, 23, 122, 57, 244, 175, 12, 88, 204, 251, 133, 41, 185, 61, 141, 183, 106, 207, 149, 79, 225, 60, 225, 141, 164, 236, 149, 177, 136, 194, 70, 32, 115, 27, 198, 39, 75, 187, 76, 238, 249, 219, 85, 194, 27, 181, 206, 255, 172, 45, 48, 219, 169, 237, 242, 240, 159, 121, 250, 223, 108, 247, 112, 147, 29, 44, 109, 23, 212, 218, 205, 127, 2, 0, 0, 255, 255, 58, 52, 125, 89, 41, 28, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 180, 86, 221, 110, 219, 54, 27, 254, 228, 159, 214, 121, 221, 36, 42, 155, 52, 182, 219, 126, 115, 125, 80, 100, 197, 38, 35, 217, 6, 12, 219, 208, 213, 137, 141, 86, 136, 147, 26, 178, 214, 161, 3, 6, 129, 150, 88, 135, 179, 36, 10, 34, 101, 215, 39, 187, 140, 157, 237, 70, 118, 15, 187, 167, 129, 148, 236, 250, 71, 9, 214, 131, 157, 153, 239, 195, 231, 125, 222, 95, 90, 208, 74, 70, 36, 110, 187, 216, 35, 161, 75, 218, 56, 162, 237, 233, 73, 91, 96, 62, 241, 41, 23, 70, 20, 51, 193, 208, 3, 121, 199, 200, 238, 24, 56, 162, 198, 244, 164, 241, 255, 49, 99, 99, 159, 180, 213, 149, 81, 242, 190, 237, 37, 49, 22, 148, 133, 41, 169, 241, 217, 38, 46, 104, 64, 184, 192, 65, 148, 93, 216, 114, 48, 139, 113, 20, 145, 152, 167, 120, 43, 134, 138, 141, 249, 164, 79, 185, 64, 8, 74, 33, 14, 72, 77, 107, 106, 199, 59, 150, 250, 141, 190, 129, 210, 132, 134, 94, 173, 208, 212, 142, 247, 78, 159, 26, 57, 65, 26, 11, 7, 23, 52, 244, 44, 117, 29, 61, 130, 157, 17, 230, 196, 81, 254, 138, 202, 95, 69, 26, 174, 112, 64, 90, 24, 244, 5, 229, 146, 8, 236, 97, 129, 209, 37, 28, 4, 248, 131, 35, 107, 194, 157, 136, 196, 14, 39, 46, 11, 61, 21, 75, 245, 244, 177, 145, 166, 97, 44, 210, 48, 186, 44, 25, 249, 228, 45, 246, 19, 98, 221, 15, 240, 7, 233, 144, 15, 72, 60, 84, 180, 214, 79, 80, 95, 72, 12, 112, 44, 168, 44, 217, 82, 75, 135, 226, 132, 204, 179, 52, 229, 79, 244, 12, 246, 217, 44, 36, 177, 115, 205, 184, 72, 131, 46, 40, 116, 87, 153, 95, 51, 46, 84, 228, 19, 56, 52, 57, 243, 85, 7, 94, 197, 44, 137, 46, 137, 136, 169, 203, 81, 27, 14, 66, 50, 203, 15, 95, 179, 238, 135, 100, 182, 30, 32, 122, 10, 247, 34, 230, 251, 36, 118, 92, 150, 132, 66, 201, 21, 173, 106, 106, 59, 151, 166, 214, 159, 37, 216, 91, 36, 49, 20, 88, 36, 28, 125, 1, 104, 132, 221, 137, 207, 198, 41, 205, 185, 166, 161, 80, 34, 69, 75, 207, 16, 69, 126, 77, 67, 129, 158, 0, 196, 4, 123, 142, 79, 166, 196, 207, 20, 118, 164, 165, 47, 13, 178, 71, 216, 157, 100, 104, 81, 161, 21, 236, 78, 82, 240, 25, 236, 199, 88, 144, 213, 92, 74, 42, 151, 93, 105, 254, 152, 71, 23, 118, 101, 210, 14, 245, 156, 145, 207, 220, 73, 173, 172, 26, 214, 188, 113, 80, 204, 238, 153, 188, 103, 85, 37, 205, 244, 212, 1, 77, 225, 136, 46, 234, 234, 140, 101, 97, 157, 32, 173, 108, 237, 78, 179, 120, 92, 61, 125, 113, 235, 224, 165, 213, 49, 114, 91, 211, 11, 69, 60, 183, 14, 233, 39, 181, 237, 238, 77, 109, 59, 128, 50, 9, 34, 49, 175, 85, 154, 218, 113, 197, 74, 15, 13, 1, 141, 155, 181, 115, 198, 237, 37, 148, 167, 114, 114, 85, 79, 170, 167, 207, 115, 147, 203, 245, 104, 165, 196, 239, 10, 223, 106, 173, 31, 161, 186, 82, 80, 84, 135, 10, 23, 56, 22, 14, 245, 178, 137, 184, 171, 206, 166, 135, 14, 225, 14, 9, 61, 9, 164, 67, 80, 38, 161, 103, 122, 173, 63, 52, 128, 129, 26, 56, 51, 124, 207, 80, 23, 116, 31, 115, 225, 96, 215, 37, 156, 59, 242, 37, 201, 214, 175, 177, 181, 126, 246, 226, 153, 177, 246, 36, 167, 163, 40, 210, 136, 26, 80, 161, 30, 9, 5, 21, 243, 108, 135, 150, 231, 188, 161, 42, 230, 12, 85, 235, 47, 13, 234, 67, 65, 221, 201, 188, 247, 129, 184, 137, 44, 66, 71, 136, 152, 142, 18, 65, 56, 122, 5, 250, 140, 197, 19, 18, 171, 190, 57, 242, 9, 205, 226, 124, 114, 235, 148, 88, 123, 41, 109, 249, 222, 217, 80, 231, 238, 53, 241, 18, 159, 56, 130, 57, 105, 245, 100, 218, 44, 17, 89, 107, 234, 219, 15, 79, 246, 0, 91, 15, 23, 92, 155, 13, 37, 211, 78, 137, 173, 23, 112, 127, 235, 233, 65, 159, 131, 190, 49, 224, 188, 166, 53, 139, 199, 59, 214, 254, 250, 100, 242, 214, 223, 37, 56, 218, 114, 112, 206, 194, 247, 116, 140, 106, 112, 119, 74, 98, 78, 89, 184, 104, 113, 118, 68, 167, 240, 32, 76, 2, 71, 237, 123, 180, 96, 113, 149, 69, 249, 172, 80, 147, 195, 156, 4, 22, 193, 222, 210, 37, 71, 95, 195, 129, 228, 204, 98, 42, 123, 242, 145, 84, 92, 146, 80, 152, 4, 63, 75, 120, 133, 69, 97, 127, 83, 165, 164, 118, 244, 229, 173, 213, 223, 72, 197, 88, 143, 37, 221, 210, 189, 120, 61, 64, 31, 244, 173, 224, 202, 74, 171, 243, 73, 90, 27, 41, 164, 98, 251, 179, 117, 107, 131, 194, 131, 156, 160, 86, 215, 183, 156, 174, 239, 15, 235, 235, 251, 236, 223, 197, 178, 178, 186, 141, 223, 224, 32, 47, 166, 255, 66, 235, 249, 239, 112, 111, 245, 15, 26, 53, 224, 161, 221, 25, 94, 56, 125, 115, 104, 59, 23, 230, 85, 215, 49, 175, 222, 118, 250, 102, 87, 255, 31, 170, 195, 225, 6, 118, 245, 198, 186, 236, 244, 117, 45, 7, 26, 218, 230, 249, 197, 59, 189, 128, 30, 67, 109, 3, 234, 13, 94, 247, 46, 123, 86, 167, 175, 23, 159, 123, 31, 245, 237, 121, 68, 214, 245, 237, 119, 131, 222, 138, 254, 35, 56, 218, 192, 186, 189, 115, 115, 104, 190, 185, 210, 181, 28, 176, 115, 110, 155, 111, 77, 251, 157, 94, 56, 251, 21, 142, 92, 22, 228, 85, 231, 108, 119, 89, 30, 185, 195, 3, 237, 151, 147, 49, 21, 215, 201, 200, 112, 89, 208, 94, 253, 48, 251, 146, 122, 126, 123, 204, 210, 111, 165, 236, 43, 237, 123, 28, 209, 233, 201, 232, 142, 178, 125, 245, 79, 0, 0, 0, 255, 255, 217, 101, 16, 254, 201, 9, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 196, 90, 205, 114, 219, 200, 181, 190, 32, 37, 89, 58, 164, 36, 168, 37, 89, 244, 207, 216, 178, 102, 236, 145, 121, 199, 210, 200, 243, 63, 190, 115, 29, 8, 132, 108, 216, 52, 200, 52, 65, 107, 52, 149, 4, 5, 145, 45, 9, 49, 9, 176, 128, 166, 109, 237, 83, 149, 108, 147, 213, 84, 86, 121, 128, 84, 165, 82, 89, 100, 149, 202, 19, 100, 155, 87, 72, 229, 45, 82, 221, 104, 144, 0, 9, 18, 116, 82, 53, 217, 9, 167, 191, 239, 244, 233, 243, 215, 7, 16, 97, 167, 127, 74, 252, 253, 150, 221, 38, 110, 139, 236, 219, 61, 103, 255, 245, 193, 254, 27, 207, 127, 117, 214, 241, 222, 236, 245, 124, 143, 122, 104, 157, 97, 246, 4, 102, 207, 238, 57, 123, 175, 15, 174, 223, 58, 247, 188, 243, 14, 217, 231, 144, 211, 254, 217, 126, 187, 239, 219, 212, 241, 220, 144, 116, 253, 246, 232, 58, 117, 186, 36, 160, 118, 183, 39, 0, 219, 105, 59, 183, 188, 110, 119, 160, 34, 213, 54, 106, 7, 175, 58, 78, 64, 67, 204, 206, 247, 69, 216, 60, 22, 230, 106, 111, 73, 171, 207, 76, 208, 221, 51, 15, 53, 1, 69, 231, 176, 72, 180, 82, 146, 182, 165, 221, 194, 195, 123, 123, 41, 71, 218, 27, 211, 131, 215, 222, 140, 138, 208, 103, 48, 71, 47, 123, 164, 148, 227, 138, 238, 76, 85, 100, 94, 246, 8, 230, 112, 244, 21, 64, 64, 109, 159, 90, 204, 13, 165, 60, 39, 95, 223, 11, 125, 180, 23, 249, 104, 207, 140, 124, 132, 151, 56, 154, 61, 51, 106, 171, 227, 5, 36, 164, 206, 101, 83, 57, 154, 83, 77, 40, 134, 212, 128, 218, 180, 31, 148, 230, 183, 165, 221, 149, 135, 7, 179, 157, 94, 101, 204, 6, 39, 226, 66, 107, 248, 128, 238, 194, 202, 133, 19, 80, 207, 191, 180, 58, 196, 61, 167, 23, 165, 133, 109, 105, 55, 143, 151, 133, 180, 202, 133, 232, 39, 176, 217, 179, 125, 226, 210, 161, 251, 45, 199, 61, 243, 74, 87, 248, 17, 118, 83, 173, 168, 115, 70, 34, 146, 120, 189, 55, 46, 68, 10, 172, 12, 213, 114, 207, 44, 102, 122, 102, 121, 192, 224, 222, 121, 0, 115, 93, 210, 245, 74, 75, 156, 120, 45, 213, 158, 23, 164, 235, 97, 14, 67, 24, 214, 2, 98, 251, 173, 11, 203, 166, 212, 119, 78, 251, 148, 4, 37, 224, 220, 187, 169, 220, 6, 71, 43, 3, 48, 150, 131, 17, 9, 170, 194, 154, 221, 167, 158, 229, 147, 128, 80, 171, 231, 57, 46, 13, 74, 5, 174, 115, 59, 85, 39, 102, 192, 58, 199, 225, 85, 70, 141, 9, 208, 13, 88, 98, 229, 97, 177, 250, 40, 21, 183, 165, 221, 37, 188, 200, 4, 85, 39, 160, 72, 133, 149, 193, 98, 24, 135, 53, 190, 207, 123, 169, 251, 152, 130, 134, 139, 145, 2, 238, 245, 45, 184, 226, 4, 86, 203, 247, 220, 210, 242, 182, 180, 187, 136, 23, 156, 64, 245, 61, 23, 61, 130, 66, 191, 215, 182, 169, 200, 210, 149, 204, 88, 64, 8, 231, 129, 248, 57, 200, 61, 219, 167, 14, 143, 101, 203, 115, 207, 156, 243, 210, 234, 118, 126, 183, 240, 240, 241, 108, 169, 202, 108, 99, 169, 19, 170, 80, 185, 6, 205, 165, 254, 37, 94, 237, 37, 165, 232, 37, 172, 51, 243, 45, 239, 53, 241, 59, 118, 207, 234, 121, 29, 167, 117, 89, 146, 121, 101, 164, 247, 5, 118, 192, 90, 8, 175, 115, 52, 94, 107, 141, 138, 208, 91, 184, 109, 183, 168, 243, 154, 88, 173, 78, 63, 160, 196, 183, 2, 210, 33, 45, 126, 36, 177, 7, 226, 78, 73, 175, 62, 133, 115, 213, 144, 218, 136, 152, 98, 187, 155, 246, 148, 85, 244, 62, 44, 243, 19, 5, 173, 11, 210, 238, 119, 72, 105, 157, 71, 190, 200, 132, 13, 33, 67, 199, 32, 15, 203, 69, 116, 131, 13, 126, 230, 143, 102, 115, 177, 104, 4, 171, 36, 41, 64, 38, 148, 162, 141, 219, 214, 72, 69, 110, 102, 102, 193, 213, 1, 87, 139, 151, 230, 245, 67, 216, 72, 11, 39, 146, 33, 255, 138, 92, 242, 46, 190, 132, 217, 159, 104, 3, 230, 95, 219, 157, 126, 216, 144, 151, 112, 248, 240, 117, 238, 75, 105, 231, 251, 28, 220, 26, 111, 106, 92, 153, 184, 170, 208, 215, 241, 130, 145, 102, 41, 135, 97, 61, 217, 176, 157, 240, 40, 235, 237, 158, 53, 236, 212, 94, 159, 138, 75, 226, 218, 152, 3, 42, 194, 0, 124, 51, 238, 78, 159, 154, 158, 26, 245, 110, 175, 79, 209, 49, 220, 224, 230, 77, 208, 158, 207, 210, 190, 197, 216, 41, 138, 119, 254, 38, 193, 122, 74, 167, 101, 13, 164, 237, 117, 109, 199, 181, 156, 182, 112, 242, 98, 40, 208, 219, 232, 54, 20, 196, 162, 107, 119, 35, 127, 67, 40, 50, 236, 46, 153, 112, 227, 230, 255, 211, 27, 247, 14, 20, 29, 215, 161, 142, 77, 73, 155, 217, 53, 199, 47, 155, 194, 64, 166, 183, 119, 126, 45, 193, 166, 246, 150, 18, 223, 181, 59, 63, 200, 20, 48, 106, 83, 110, 220, 166, 63, 47, 192, 122, 157, 184, 109, 199, 61, 231, 197, 237, 208, 75, 110, 209, 109, 40, 216, 226, 121, 232, 101, 136, 68, 122, 27, 29, 193, 242, 0, 144, 57, 106, 68, 170, 249, 168, 81, 180, 99, 79, 232, 49, 204, 179, 66, 15, 167, 141, 149, 135, 247, 211, 239, 219, 164, 133, 172, 168, 9, 14, 121, 72, 135, 181, 11, 98, 251, 244, 148, 216, 212, 106, 19, 106, 59, 157, 64, 204, 31, 55, 39, 92, 222, 151, 29, 207, 110, 99, 121, 64, 171, 132, 44, 244, 12, 214, 59, 118, 64, 173, 161, 62, 222, 32, 230, 51, 27, 196, 26, 163, 61, 141, 88, 252, 182, 56, 2, 46, 12, 171, 130, 180, 67, 77, 11, 153, 154, 86, 25, 169, 17, 114, 184, 158, 18, 92, 177, 41, 37, 221, 30, 229, 19, 201, 60, 142, 30, 209, 125, 144, 187, 246, 91, 167, 219, 239, 90, 66, 20, 240, 233, 98, 30, 175, 10, 185, 34, 196, 108, 12, 25, 182, 63, 110, 201, 82, 246, 24, 50, 96, 112, 59, 84, 88, 37, 111, 123, 78, 88, 179, 161, 14, 200, 212, 177, 50, 164, 112, 37, 143, 161, 200, 157, 114, 102, 59, 157, 190, 79, 196, 12, 145, 30, 166, 163, 16, 131, 11, 140, 33, 30, 208, 199, 176, 193, 21, 176, 92, 39, 190, 229, 180, 137, 75, 29, 122, 41, 198, 8, 196, 214, 142, 249, 146, 46, 86, 208, 231, 176, 21, 133, 96, 148, 180, 204, 73, 155, 98, 121, 132, 119, 27, 10, 145, 3, 88, 1, 172, 240, 210, 129, 72, 164, 183, 119, 254, 148, 131, 107, 34, 47, 213, 11, 167, 211, 254, 65, 42, 250, 163, 152, 90, 86, 117, 241, 38, 39, 191, 137, 13, 244, 188, 213, 141, 214, 127, 126, 172, 254, 217, 160, 33, 198, 223, 176, 107, 139, 33, 96, 110, 202, 160, 17, 182, 100, 222, 169, 163, 65, 163, 55, 42, 66, 87, 97, 33, 236, 185, 188, 122, 150, 176, 120, 218, 249, 71, 110, 208, 111, 42, 164, 229, 4, 145, 191, 6, 109, 64, 202, 110, 3, 17, 49, 209, 6, 198, 83, 60, 247, 174, 41, 254, 13, 20, 19, 213, 154, 253, 254, 83, 8, 210, 43, 117, 46, 89, 169, 24, 182, 60, 223, 57, 119, 92, 187, 99, 141, 24, 153, 221, 91, 54, 35, 106, 35, 97, 236, 72, 126, 46, 140, 229, 231, 95, 114, 112, 45, 106, 152, 85, 175, 101, 119, 42, 78, 208, 179, 105, 235, 98, 182, 254, 254, 223, 247, 231, 207, 224, 86, 210, 2, 203, 59, 179, 232, 133, 19, 88, 113, 55, 79, 87, 120, 61, 97, 81, 237, 204, 188, 112, 2, 209, 21, 209, 123, 0, 124, 110, 161, 222, 43, 18, 166, 105, 17, 243, 65, 203, 100, 130, 157, 103, 80, 136, 191, 181, 60, 130, 5, 241, 226, 35, 241, 153, 255, 253, 140, 23, 31, 254, 78, 40, 40, 59, 127, 200, 193, 74, 114, 9, 125, 8, 171, 167, 142, 107, 251, 151, 86, 235, 130, 180, 94, 5, 253, 174, 8, 194, 74, 40, 86, 133, 20, 109, 194, 130, 223, 119, 163, 235, 123, 9, 207, 251, 125, 54, 231, 124, 3, 55, 206, 28, 63, 96, 87, 94, 88, 13, 86, 203, 235, 246, 58, 36, 81, 234, 37, 14, 137, 234, 69, 141, 0, 156, 94, 108, 249, 196, 30, 196, 38, 219, 149, 5, 129, 23, 141, 124, 153, 183, 118, 199, 61, 159, 53, 143, 139, 17, 129, 43, 184, 5, 192, 223, 38, 169, 125, 218, 9, 239, 197, 69, 28, 147, 148, 255, 40, 193, 70, 218, 173, 143, 118, 224, 86, 93, 51, 42, 186, 241, 196, 82, 84, 83, 127, 169, 155, 39, 86, 195, 84, 76, 205, 210, 141, 151, 74, 85, 175, 200, 255, 131, 62, 128, 237, 9, 152, 134, 250, 84, 171, 52, 171, 90, 69, 150, 166, 104, 106, 152, 10, 54, 181, 138, 156, 67, 255, 11, 31, 78, 192, 168, 138, 161, 106, 85, 11, 107, 63, 110, 106, 13, 6, 206, 151, 127, 49, 180, 57, 209, 162, 226, 59, 85, 52, 85, 111, 232, 53, 99, 154, 205, 35, 152, 9, 54, 143, 162, 34, 155, 203, 191, 204, 13, 63, 54, 233, 109, 76, 250, 131, 166, 252, 1, 108, 31, 215, 240, 243, 163, 106, 237, 216, 210, 43, 22, 214, 154, 13, 205, 170, 215, 170, 186, 122, 18, 179, 228, 75, 248, 116, 34, 74, 169, 50, 105, 165, 89, 175, 234, 42, 219, 245, 72, 209, 171, 90, 197, 170, 25, 213, 19, 89, 66, 31, 193, 238, 172, 76, 57, 135, 30, 192, 253, 137, 104, 172, 61, 211, 84, 51, 6, 207, 163, 3, 120, 48, 17, 110, 106, 248, 133, 110, 112, 135, 30, 89, 184, 105, 24, 186, 241, 68, 158, 43, 95, 194, 218, 216, 91, 49, 186, 13, 55, 84, 92, 51, 172, 218, 75, 13, 87, 149, 250, 248, 249, 39, 0, 26, 207, 245, 122, 61, 10, 66, 26, 224, 176, 121, 116, 164, 97, 171, 102, 104, 114, 174, 252, 59, 9, 214, 198, 46, 74, 166, 186, 174, 96, 205, 48, 45, 181, 90, 75, 243, 253, 4, 128, 114, 168, 24, 149, 154, 33, 75, 232, 30, 236, 164, 1, 68, 26, 138, 172, 148, 115, 232, 14, 188, 151, 134, 27, 56, 74, 206, 151, 255, 153, 131, 155, 211, 62, 167, 177, 228, 31, 120, 92, 251, 86, 83, 155, 38, 75, 183, 80, 31, 75, 186, 102, 35, 102, 121, 60, 154, 19, 192, 106, 237, 69, 189, 170, 153, 220, 135, 101, 184, 151, 5, 15, 115, 75, 206, 37, 210, 106, 146, 106, 126, 110, 86, 133, 104, 15, 202, 89, 232, 129, 23, 42, 242, 28, 250, 20, 62, 206, 54, 220, 48, 117, 163, 169, 85, 44, 165, 97, 25, 218, 177, 60, 63, 203, 113, 77, 253, 5, 43, 141, 166, 41, 47, 148, 127, 149, 135, 173, 9, 31, 43, 208, 93, 184, 147, 162, 106, 204, 193, 83, 97, 162, 41, 200, 210, 116, 216, 176, 177, 125, 8, 239, 79, 134, 13, 3, 149, 79, 244, 140, 49, 160, 8, 209, 28, 75, 203, 41, 234, 162, 224, 204, 163, 93, 248, 96, 50, 46, 22, 150, 133, 9, 97, 156, 20, 144, 43, 211, 15, 52, 12, 197, 98, 249, 175, 18, 92, 85, 61, 151, 58, 110, 159, 40, 129, 65, 222, 232, 225, 56, 236, 249, 204, 119, 145, 102, 161, 216, 210, 13, 221, 212, 21, 179, 134, 147, 145, 152, 12, 99, 109, 185, 162, 225, 48, 197, 39, 195, 176, 102, 226, 19, 81, 149, 225, 61, 51, 25, 203, 155, 77, 116, 11, 200, 249, 242, 239, 37, 40, 136, 111, 36, 252, 21, 186, 4, 27, 236, 128, 181, 166, 105, 153, 39, 117, 45, 217, 78, 18, 43, 60, 254, 150, 89, 11, 19, 53, 108, 101, 73, 128, 216, 133, 97, 56, 88, 206, 77, 197, 132, 122, 242, 232, 58, 92, 77, 96, 158, 106, 10, 54, 15, 53, 197, 148, 231, 202, 191, 149, 224, 90, 116, 31, 154, 108, 188, 114, 186, 164, 93, 235, 83, 213, 238, 7, 4, 221, 135, 187, 131, 155, 204, 84, 26, 207, 135, 177, 178, 84, 133, 181, 248, 225, 105, 50, 161, 194, 4, 89, 98, 217, 48, 29, 138, 181, 134, 102, 202, 185, 242, 223, 11, 176, 21, 55, 142, 189, 104, 146, 118, 104, 218, 61, 216, 73, 42, 17, 183, 221, 168, 93, 7, 240, 96, 10, 174, 105, 60, 85, 140, 10, 123, 142, 64, 178, 132, 30, 195, 163, 41, 148, 67, 165, 50, 244, 242, 96, 238, 80, 76, 19, 235, 135, 77, 83, 107, 200, 57, 164, 129, 146, 161, 32, 121, 37, 164, 170, 201, 163, 175, 224, 179, 44, 59, 194, 148, 209, 95, 104, 56, 78, 157, 67, 95, 195, 231, 25, 84, 177, 243, 24, 119, 30, 61, 130, 47, 50, 173, 87, 107, 184, 98, 189, 80, 240, 243, 36, 121, 1, 233, 160, 101, 109, 44, 250, 151, 149, 210, 17, 98, 170, 174, 204, 224, 69, 38, 200, 80, 179, 136, 158, 128, 58, 155, 43, 166, 43, 90, 66, 223, 130, 249, 110, 81, 213, 190, 53, 53, 108, 40, 89, 154, 1, 125, 3, 95, 101, 58, 45, 217, 127, 98, 244, 2, 250, 2, 62, 153, 66, 143, 231, 200, 112, 54, 212, 43, 114, 17, 125, 6, 7, 83, 136, 188, 10, 173, 134, 169, 171, 207, 79, 194, 229, 170, 222, 48, 229, 101, 244, 35, 248, 191, 41, 180, 193, 97, 217, 31, 26, 142, 149, 24, 131, 53, 177, 38, 175, 204, 16, 147, 134, 254, 36, 219, 115, 171, 72, 133, 199, 51, 149, 136, 250, 84, 175, 86, 210, 149, 200, 232, 19, 216, 159, 162, 228, 168, 134, 85, 77, 12, 15, 131, 38, 177, 134, 62, 135, 135, 211, 72, 138, 94, 101, 19, 232, 40, 15, 177, 137, 102, 182, 163, 235, 70, 189, 105, 90, 13, 253, 59, 77, 94, 103, 19, 77, 102, 164, 34, 95, 201, 27, 227, 205, 120, 108, 147, 67, 221, 80, 240, 137, 188, 153, 145, 123, 227, 141, 46, 145, 66, 87, 103, 57, 142, 166, 96, 245, 105, 220, 227, 91, 236, 214, 185, 195, 191, 203, 141, 141, 93, 241, 22, 127, 0, 15, 194, 184, 165, 100, 193, 132, 110, 127, 8, 255, 63, 27, 101, 176, 174, 84, 177, 166, 84, 78, 6, 47, 38, 82, 249, 55, 57, 40, 171, 182, 219, 34, 157, 232, 255, 1, 83, 173, 124, 4, 95, 204, 80, 239, 19, 236, 61, 134, 198, 187, 146, 155, 198, 115, 163, 118, 108, 76, 35, 200, 18, 50, 224, 217, 187, 42, 30, 115, 201, 112, 210, 204, 113, 167, 52, 156, 115, 254, 207, 145, 217, 156, 34, 210, 248, 223, 115, 202, 187, 146, 103, 118, 202, 187, 42, 158, 230, 148, 195, 159, 194, 86, 203, 235, 166, 125, 107, 58, 92, 142, 220, 83, 247, 61, 234, 213, 165, 239, 14, 206, 29, 122, 209, 63, 221, 107, 121, 221, 253, 248, 143, 82, 30, 56, 237, 206, 254, 185, 23, 254, 200, 69, 252, 66, 229, 145, 221, 115, 94, 31, 156, 46, 112, 217, 39, 255, 10, 0, 0, 255, 255, 0, 106, 118, 215, 97, 35, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 236, 92, 93, 108, 28, 73, 181, 222, 158, 177, 199, 158, 51, 142, 61, 46, 59, 142, 255, 18, 59, 147, 108, 226, 117, 156, 113, 226, 100, 147, 77, 178, 63, 215, 118, 108, 237, 72, 190, 73, 110, 199, 201, 222, 123, 181, 210, 208, 238, 46, 199, 141, 103, 186, 103, 187, 107, 60, 49, 130, 39, 30, 144, 16, 43, 88, 173, 144, 88, 9, 4, 66, 2, 177, 252, 104, 17, 8, 241, 247, 2, 72, 104, 145, 64, 11, 79, 188, 240, 132, 132, 16, 251, 198, 3, 203, 51, 234, 234, 234, 153, 233, 158, 170, 254, 25, 59, 89, 208, 230, 109, 186, 251, 156, 211, 95, 85, 157, 115, 234, 212, 57, 167, 7, 78, 214, 183, 176, 181, 168, 42, 26, 54, 84, 188, 168, 212, 244, 197, 189, 139, 139, 59, 186, 77, 76, 107, 191, 88, 179, 76, 98, 162, 17, 135, 164, 200, 72, 138, 74, 77, 47, 238, 93, 156, 60, 241, 192, 52, 31, 84, 240, 34, 37, 217, 170, 111, 47, 106, 117, 75, 33, 186, 105, 184, 76, 147, 51, 193, 231, 68, 175, 98, 155, 40, 213, 26, 35, 152, 229, 189, 88, 53, 171, 213, 166, 136, 2, 143, 130, 40, 246, 110, 69, 183, 73, 24, 77, 195, 180, 118, 183, 43, 102, 195, 165, 41, 220, 132, 190, 151, 221, 1, 161, 107, 144, 193, 123, 216, 32, 246, 184, 52, 155, 158, 203, 45, 157, 44, 114, 198, 86, 100, 212, 107, 14, 165, 204, 24, 10, 239, 95, 133, 129, 246, 7, 104, 2, 250, 233, 163, 178, 174, 141, 75, 179, 210, 92, 90, 238, 163, 215, 37, 13, 93, 3, 112, 31, 57, 131, 30, 79, 205, 74, 115, 185, 165, 201, 162, 59, 35, 69, 111, 70, 138, 155, 222, 140, 200, 89, 74, 237, 92, 163, 113, 232, 219, 195, 150, 173, 155, 198, 120, 218, 21, 202, 46, 209, 49, 232, 115, 6, 239, 188, 174, 135, 62, 201, 56, 151, 37, 13, 125, 89, 130, 115, 222, 144, 203, 248, 33, 86, 235, 206, 58, 148, 109, 162, 88, 4, 107, 101, 23, 137, 66, 136, 165, 111, 213, 9, 182, 199, 123, 41, 158, 231, 185, 67, 127, 133, 201, 89, 243, 196, 220, 117, 165, 208, 33, 47, 55, 101, 188, 252, 148, 124, 182, 17, 143, 20, 125, 93, 130, 243, 28, 120, 170, 89, 173, 85, 48, 23, 96, 134, 2, 124, 49, 30, 192, 85, 79, 78, 39, 196, 103, 26, 113, 137, 209, 91, 18, 204, 115, 64, 110, 43, 122, 133, 135, 176, 143, 34, 188, 17, 15, 225, 58, 21, 210, 9, 239, 76, 35, 22, 37, 250, 26, 127, 2, 29, 221, 210, 202, 102, 157, 116, 194, 235, 167, 240, 94, 136, 7, 207, 81, 59, 237, 118, 157, 116, 2, 156, 107, 196, 164, 69, 111, 74, 48, 167, 97, 85, 183, 41, 48, 71, 75, 109, 117, 7, 107, 117, 238, 228, 101, 41, 186, 107, 92, 116, 55, 153, 144, 77, 197, 222, 189, 235, 137, 232, 68, 118, 90, 139, 65, 135, 94, 151, 224, 76, 0, 149, 200, 38, 128, 98, 186, 26, 141, 73, 100, 14, 5, 45, 146, 138, 51, 75, 33, 70, 144, 139, 57, 75, 33, 250, 239, 155, 37, 161, 234, 191, 209, 129, 42, 68, 179, 6, 40, 170, 231, 34, 81, 137, 149, 234, 148, 22, 77, 134, 62, 43, 193, 211, 126, 76, 34, 75, 60, 66, 1, 93, 137, 4, 36, 50, 194, 147, 90, 20, 17, 93, 54, 69, 37, 250, 158, 78, 246, 35, 149, 123, 48, 100, 217, 150, 153, 144, 40, 229, 86, 98, 208, 81, 229, 14, 160, 18, 41, 247, 80, 136, 114, 251, 48, 9, 149, 91, 137, 164, 226, 204, 82, 136, 114, 231, 99, 206, 82, 152, 114, 43, 49, 232, 168, 34, 249, 81, 137, 20, 105, 56, 68, 145, 218, 33, 9, 21, 73, 137, 34, 162, 150, 230, 7, 19, 98, 105, 40, 196, 210, 218, 241, 132, 88, 154, 18, 77, 134, 26, 112, 194, 1, 97, 137, 181, 103, 132, 2, 185, 192, 5, 226, 72, 181, 132, 106, 51, 69, 196, 143, 209, 107, 48, 237, 190, 120, 91, 183, 120, 175, 29, 165, 175, 45, 138, 95, 187, 238, 240, 117, 190, 116, 130, 136, 30, 162, 111, 74, 176, 24, 80, 81, 197, 80, 113, 165, 108, 225, 215, 234, 216, 230, 142, 254, 40, 133, 241, 82, 180, 166, 82, 73, 178, 39, 168, 19, 215, 188, 18, 155, 26, 253, 80, 130, 203, 12, 147, 7, 49, 158, 18, 143, 81, 180, 171, 92, 180, 236, 109, 238, 171, 227, 104, 116, 209, 74, 196, 129, 190, 32, 193, 89, 222, 244, 242, 128, 30, 139, 169, 221, 171, 76, 66, 132, 118, 11, 200, 208, 39, 96, 198, 85, 50, 49, 146, 113, 138, 228, 162, 88, 207, 196, 16, 92, 5, 22, 189, 251, 51, 18, 156, 102, 139, 199, 20, 93, 176, 104, 19, 20, 193, 179, 92, 4, 174, 112, 87, 223, 5, 203, 52, 171, 70, 208, 160, 79, 193, 108, 85, 177, 118, 177, 85, 182, 176, 106, 90, 26, 15, 196, 36, 5, 177, 196, 5, 241, 223, 148, 89, 102, 188, 157, 8, 142, 87, 195, 8, 208, 87, 37, 88, 224, 157, 79, 244, 7, 134, 194, 157, 144, 169, 36, 225, 235, 93, 38, 38, 78, 248, 42, 160, 69, 223, 144, 160, 200, 139, 176, 177, 85, 213, 13, 133, 235, 23, 166, 67, 252, 66, 103, 136, 221, 20, 196, 241, 11, 141, 216, 212, 232, 71, 18, 92, 230, 29, 165, 34, 189, 216, 113, 138, 246, 102, 204, 19, 85, 148, 43, 91, 108, 36, 99, 17, 105, 128, 216, 40, 79, 36, 209, 0, 177, 129, 206, 53, 98, 210, 162, 191, 72, 176, 22, 240, 184, 248, 33, 193, 150, 161, 84, 202, 28, 228, 186, 161, 19, 157, 175, 24, 51, 20, 250, 221, 104, 23, 188, 198, 228, 119, 140, 167, 228, 9, 239, 28, 208, 139, 214, 129, 36, 160, 63, 73, 176, 146, 96, 152, 34, 143, 53, 75, 199, 120, 231, 0, 99, 20, 57, 179, 27, 86, 247, 236, 232, 61, 9, 94, 8, 27, 78, 180, 157, 156, 164, 3, 219, 224, 14, 76, 8, 38, 210, 94, 174, 226, 238, 88, 105, 28, 192, 77, 157, 24, 68, 55, 234, 88, 43, 43, 118, 217, 192, 141, 206, 113, 20, 66, 226, 0, 78, 6, 133, 137, 91, 182, 111, 225, 6, 39, 14, 104, 36, 226, 64, 191, 146, 224, 26, 141, 38, 203, 234, 142, 94, 209, 18, 218, 207, 41, 10, 253, 101, 46, 116, 26, 74, 174, 58, 66, 147, 24, 205, 37, 59, 57, 27, 250, 169, 4, 87, 34, 6, 33, 178, 142, 211, 116, 4, 107, 73, 71, 32, 50, 137, 11, 118, 66, 30, 244, 93, 9, 46, 10, 81, 11, 227, 252, 167, 41, 236, 101, 126, 24, 194, 125, 187, 48, 240, 95, 80, 19, 208, 163, 31, 72, 112, 73, 8, 55, 228, 16, 121, 38, 68, 201, 249, 128, 67, 142, 147, 69, 53, 17, 7, 122, 91, 130, 11, 137, 53, 227, 44, 69, 252, 95, 9, 16, 139, 148, 226, 156, 154, 64, 31, 222, 145, 96, 73, 60, 193, 194, 77, 120, 142, 162, 93, 73, 50, 191, 194, 157, 248, 188, 154, 132, 1, 125, 63, 76, 37, 66, 14, 205, 207, 36, 134, 44, 62, 62, 11, 32, 139, 14, 210, 78, 108, 38, 134, 28, 18, 73, 206, 135, 196, 102, 2, 204, 33, 225, 228, 162, 154, 140, 133, 110, 154, 110, 40, 222, 109, 196, 115, 46, 100, 211, 116, 35, 238, 110, 66, 157, 171, 118, 119, 172, 232, 215, 18, 92, 143, 49, 32, 145, 141, 46, 208, 209, 148, 186, 25, 141, 200, 88, 47, 219, 93, 240, 161, 159, 72, 240, 108, 216, 0, 196, 231, 167, 243, 33, 27, 144, 16, 132, 248, 28, 117, 1, 39, 228, 161, 14, 167, 94, 179, 177, 69, 90, 192, 109, 172, 88, 234, 78, 27, 204, 78, 220, 197, 16, 235, 189, 71, 197, 121, 8, 238, 82, 97, 173, 55, 114, 172, 183, 158, 132, 97, 101, 0, 160, 5, 164, 240, 231, 33, 56, 27, 119, 247, 90, 135, 35, 205, 49, 146, 253, 26, 166, 181, 64, 81, 101, 209, 19, 186, 185, 95, 195, 242, 64, 163, 237, 10, 189, 10, 71, 107, 138, 229, 204, 72, 187, 209, 109, 155, 172, 124, 56, 199, 149, 119, 135, 114, 180, 217, 196, 182, 41, 143, 212, 58, 111, 162, 235, 144, 165, 25, 153, 138, 110, 19, 90, 88, 204, 45, 29, 231, 167, 60, 20, 123, 119, 67, 183, 137, 220, 79, 216, 47, 180, 4, 189, 186, 81, 171, 19, 90, 118, 204, 45, 77, 11, 144, 236, 87, 76, 69, 147, 93, 82, 164, 192, 108, 32, 228, 40, 19, 179, 172, 86, 76, 27, 83, 255, 109, 214, 9, 171, 67, 78, 116, 212, 69, 111, 178, 74, 178, 60, 141, 125, 115, 191, 105, 174, 58, 252, 155, 46, 59, 122, 5, 166, 90, 105, 239, 78, 233, 153, 40, 233, 199, 136, 151, 204, 14, 8, 190, 1, 147, 173, 8, 187, 53, 10, 171, 110, 148, 117, 141, 150, 254, 178, 242, 177, 38, 69, 115, 158, 229, 186, 81, 210, 80, 9, 178, 204, 85, 154, 22, 173, 195, 13, 46, 157, 227, 187, 118, 38, 128, 134, 208, 37, 143, 69, 110, 113, 163, 18, 12, 183, 112, 56, 238, 170, 110, 97, 86, 60, 227, 175, 193, 186, 75, 35, 231, 155, 108, 236, 14, 146, 97, 172, 162, 56, 103, 62, 55, 156, 161, 195, 193, 118, 189, 66, 88, 225, 43, 124, 77, 71, 29, 222, 213, 38, 171, 76, 57, 209, 53, 152, 48, 45, 253, 129, 238, 58, 218, 192, 44, 229, 232, 44, 141, 121, 4, 129, 73, 154, 132, 126, 93, 195, 6, 209, 201, 62, 173, 40, 101, 229, 230, 53, 186, 4, 99, 219, 186, 101, 147, 78, 153, 71, 40, 229, 8, 125, 26, 16, 184, 10, 3, 22, 38, 214, 126, 185, 102, 86, 116, 117, 159, 85, 97, 102, 5, 7, 84, 98, 237, 223, 161, 116, 114, 206, 106, 93, 160, 113, 232, 83, 8, 193, 213, 26, 161, 21, 147, 94, 217, 187, 68, 171, 48, 132, 31, 214, 116, 87, 113, 220, 162, 126, 62, 178, 168, 63, 216, 98, 161, 149, 253, 83, 112, 68, 181, 28, 107, 96, 21, 29, 90, 113, 200, 202, 3, 206, 77, 175, 202, 131, 254, 23, 166, 220, 209, 251, 171, 95, 91, 138, 186, 107, 110, 111, 179, 162, 64, 136, 82, 143, 83, 238, 246, 194, 215, 138, 203, 138, 206, 67, 79, 21, 87, 77, 150, 206, 159, 224, 39, 250, 112, 213, 148, 41, 25, 146, 97, 184, 195, 99, 179, 156, 252, 211, 252, 189, 49, 224, 97, 229, 188, 29, 184, 131, 238, 193, 88, 205, 194, 123, 101, 165, 78, 76, 71, 255, 48, 41, 215, 76, 221, 32, 94, 150, 93, 180, 94, 54, 38, 119, 40, 157, 60, 226, 240, 47, 215, 137, 217, 118, 19, 93, 130, 204, 14, 86, 52, 108, 177, 244, 247, 20, 191, 169, 131, 146, 200, 140, 20, 109, 192, 168, 59, 209, 173, 90, 30, 93, 215, 99, 145, 235, 138, 40, 95, 179, 46, 71, 215, 246, 147, 144, 175, 41, 22, 209, 189, 227, 249, 182, 254, 96, 124, 156, 118, 152, 252, 207, 65, 218, 44, 28, 255, 238, 10, 93, 165, 50, 215, 12, 98, 237, 203, 67, 53, 255, 93, 116, 28, 192, 75, 234, 232, 26, 77, 39, 103, 229, 44, 187, 83, 210, 208, 125, 24, 161, 138, 103, 238, 97, 171, 162, 212, 60, 27, 153, 164, 206, 233, 12, 223, 57, 89, 166, 113, 219, 37, 103, 150, 50, 172, 6, 111, 161, 135, 48, 67, 115, 240, 184, 172, 86, 234, 54, 193, 86, 217, 198, 21, 172, 210, 57, 96, 239, 152, 10, 73, 174, 211, 52, 63, 94, 117, 89, 239, 122, 156, 236, 117, 211, 74, 200, 211, 201, 21, 24, 229, 205, 12, 202, 67, 122, 23, 239, 211, 29, 56, 43, 59, 63, 209, 40, 244, 238, 41, 149, 186, 219, 132, 147, 149, 221, 139, 235, 169, 231, 164, 194, 219, 18, 60, 19, 255, 184, 119, 25, 50, 204, 97, 74, 49, 28, 38, 163, 69, 235, 48, 27, 94, 239, 215, 53, 10, 44, 45, 79, 139, 75, 245, 37, 173, 240, 45, 9, 206, 196, 140, 26, 175, 64, 159, 183, 85, 72, 49, 182, 10, 143, 248, 208, 160, 154, 48, 23, 251, 200, 180, 10, 3, 108, 183, 110, 69, 78, 131, 2, 47, 192, 54, 103, 26, 56, 229, 72, 235, 162, 240, 59, 9, 78, 199, 233, 26, 241, 135, 64, 82, 178, 16, 232, 22, 140, 9, 194, 140, 84, 148, 71, 30, 177, 57, 33, 70, 219, 86, 147, 246, 109, 53, 133, 215, 37, 40, 68, 55, 156, 160, 5, 64, 193, 38, 132, 102, 27, 90, 222, 246, 77, 65, 96, 191, 77, 5, 246, 91, 191, 243, 72, 7, 156, 71, 225, 239, 129, 233, 21, 90, 72, 50, 68, 115, 144, 247, 39, 162, 154, 234, 53, 104, 183, 141, 56, 128, 61, 29, 192, 126, 22, 134, 182, 116, 67, 177, 246, 203, 234, 14, 86, 119, 237, 122, 149, 198, 168, 89, 121, 208, 189, 189, 202, 238, 162, 115, 48, 236, 79, 159, 226, 135, 110, 252, 57, 32, 231, 113, 123, 86, 19, 63, 36, 133, 239, 164, 225, 84, 140, 94, 150, 71, 54, 226, 160, 89, 164, 187, 48, 11, 116, 2, 114, 91, 138, 141, 189, 216, 201, 157, 150, 172, 115, 203, 141, 152, 166, 1, 12, 220, 240, 30, 247, 186, 19, 107, 224, 134, 251, 116, 1, 208, 182, 105, 237, 50, 164, 94, 67, 98, 198, 29, 154, 243, 132, 98, 189, 207, 58, 19, 199, 28, 231, 168, 216, 166, 193, 130, 99, 118, 133, 110, 66, 175, 170, 212, 109, 204, 226, 224, 98, 236, 174, 161, 85, 135, 75, 118, 153, 3, 10, 154, 13, 42, 232, 187, 105, 56, 25, 217, 232, 243, 200, 214, 106, 197, 27, 162, 187, 72, 11, 49, 251, 144, 124, 3, 108, 115, 217, 61, 73, 92, 118, 187, 101, 244, 6, 44, 35, 176, 252, 153, 240, 229, 239, 139, 181, 252, 253, 130, 229, 231, 88, 97, 150, 107, 133, 254, 149, 132, 224, 74, 126, 37, 3, 167, 227, 180, 72, 161, 25, 200, 53, 251, 12, 216, 42, 102, 101, 240, 110, 149, 52, 231, 76, 222, 106, 68, 112, 76, 40, 21, 114, 38, 111, 190, 146, 158, 201, 149, 182, 43, 71, 177, 53, 179, 170, 232, 6, 243, 60, 236, 202, 191, 149, 244, 116, 121, 154, 206, 196, 63, 77, 111, 194, 132, 167, 163, 157, 59, 80, 95, 212, 14, 52, 230, 241, 6, 54, 161, 128, 84, 182, 193, 49, 169, 253, 9, 164, 186, 135, 104, 38, 85, 188, 85, 102, 187, 218, 42, 215, 97, 120, 7, 43, 22, 217, 194, 74, 11, 29, 68, 137, 202, 55, 121, 90, 114, 162, 3, 156, 92, 116, 128, 211, 113, 212, 28, 232, 230, 168, 217, 58, 178, 28, 137, 125, 100, 41, 252, 77, 130, 66, 116, 187, 222, 99, 11, 13, 218, 131, 152, 30, 255, 121, 249, 37, 24, 160, 233, 6, 207, 173, 245, 198, 112, 107, 57, 135, 131, 93, 20, 254, 32, 249, 93, 193, 33, 199, 229, 252, 41, 74, 37, 216, 13, 210, 145, 177, 74, 143, 127, 50, 11, 191, 151, 224, 100, 116, 15, 85, 183, 225, 251, 135, 49, 162, 159, 167, 224, 84, 140, 78, 68, 103, 76, 26, 38, 138, 94, 177, 99, 45, 146, 71, 252, 200, 198, 20, 140, 175, 122, 186, 137, 175, 14, 172, 226, 95, 148, 96, 62, 126, 3, 97, 156, 61, 239, 112, 14, 112, 239, 72, 144, 176, 85, 48, 26, 219, 168, 23, 37, 177, 83, 184, 27, 247, 196, 65, 156, 142, 129, 248, 173, 128, 30, 138, 138, 138, 221, 234, 225, 58, 204, 86, 20, 210, 214, 50, 19, 108, 32, 105, 205, 172, 75, 199, 91, 74, 55, 170, 226, 232, 115, 58, 129, 62, 247, 68, 218, 104, 32, 14, 44, 188, 39, 193, 84, 72, 147, 46, 154, 128, 126, 183, 57, 177, 185, 110, 125, 244, 186, 164, 161, 13, 56, 218, 220, 200, 183, 117, 43, 193, 145, 23, 177, 125, 124, 93, 183, 112, 146, 237, 55, 206, 98, 127, 12, 38, 132, 221, 191, 97, 163, 137, 29, 210, 23, 222, 149, 96, 58, 172, 241, 243, 80, 222, 114, 88, 243, 17, 234, 160, 127, 44, 193, 108, 84, 3, 105, 216, 104, 30, 169, 217, 134, 111, 150, 89, 72, 216, 167, 132, 22, 97, 148, 182, 66, 5, 171, 6, 238, 152, 134, 13, 220, 8, 212, 12, 58, 10, 119, 169, 238, 10, 119, 79, 74, 107, 241, 75, 107, 113, 116, 167, 47, 134, 238, 220, 134, 49, 86, 18, 97, 24, 117, 131, 96, 107, 79, 169, 68, 159, 91, 70, 25, 35, 133, 87, 98, 108, 254, 178, 93, 246, 64, 101, 187, 182, 16, 14, 146, 132, 112, 226, 26, 93, 174, 235, 26, 93, 235, 156, 49, 16, 191, 52, 226, 85, 138, 142, 28, 160, 82, 52, 120, 176, 74, 145, 160, 100, 49, 244, 24, 74, 22, 249, 71, 82, 178, 40, 252, 85, 130, 197, 164, 237, 159, 77, 255, 43, 181, 251, 223, 176, 19, 219, 22, 28, 107, 182, 140, 4, 218, 8, 92, 207, 52, 31, 218, 20, 226, 111, 36, 56, 138, 121, 183, 3, 167, 194, 158, 96, 22, 231, 219, 18, 167, 2, 32, 218, 74, 227, 248, 3, 41, 134, 63, 104, 11, 237, 82, 9, 66, 187, 194, 7, 18, 28, 15, 253, 186, 193, 137, 109, 217, 183, 19, 134, 82, 245, 86, 2, 220, 91, 183, 148, 42, 238, 246, 213, 135, 182, 141, 182, 76, 188, 39, 126, 42, 225, 103, 188, 69, 18, 117, 243, 204, 64, 142, 245, 83, 181, 79, 129, 123, 139, 78, 65, 115, 23, 75, 197, 223, 197, 194, 210, 250, 17, 26, 246, 37, 9, 230, 19, 52, 184, 181, 178, 211, 146, 47, 59, 221, 237, 194, 133, 32, 47, 252, 50, 5, 47, 30, 172, 201, 255, 208, 76, 162, 149, 187, 76, 249, 114, 151, 247, 0, 117, 54, 147, 49, 239, 112, 38, 94, 177, 90, 30, 238, 232, 8, 71, 227, 208, 167, 154, 6, 177, 204, 10, 93, 176, 1, 217, 187, 68, 69, 24, 9, 244, 69, 154, 70, 197, 61, 169, 244, 203, 195, 190, 118, 197, 219, 70, 101, 191, 240, 102, 26, 110, 28, 224, 35, 2, 116, 175, 221, 107, 14, 10, 62, 209, 137, 37, 217, 151, 165, 63, 164, 243, 181, 48, 167, 204, 95, 151, 158, 131, 174, 203, 2, 160, 96, 235, 38, 171, 247, 164, 229, 188, 238, 83, 66, 55, 165, 231, 173, 98, 198, 183, 138, 133, 63, 74, 112, 181, 203, 47, 32, 4, 24, 36, 1, 134, 199, 171, 184, 133, 207, 167, 225, 106, 151, 93, 170, 255, 169, 182, 26, 112, 232, 61, 98, 135, 222, 27, 223, 161, 11, 85, 71, 228, 0, 250, 68, 14, 224, 115, 105, 184, 220, 77, 167, 109, 60, 203, 143, 37, 249, 137, 229, 183, 44, 255, 125, 9, 46, 36, 237, 26, 254, 183, 54, 121, 241, 94, 85, 248, 173, 4, 231, 19, 117, 26, 31, 154, 11, 224, 158, 162, 82, 7, 58, 69, 21, 190, 151, 131, 75, 93, 124, 50, 213, 182, 28, 146, 111, 57, 102, 32, 215, 92, 14, 166, 243, 89, 25, 188, 91, 188, 148, 74, 250, 16, 82, 42, 221, 214, 87, 123, 15, 55, 165, 146, 121, 164, 41, 149, 190, 174, 83, 42, 247, 129, 53, 124, 51, 137, 236, 24, 219, 31, 114, 84, 118, 187, 198, 169, 20, 239, 168, 92, 11, 222, 106, 55, 146, 172, 223, 159, 199, 81, 121, 136, 161, 242, 42, 140, 183, 169, 83, 217, 194, 245, 22, 252, 28, 133, 63, 31, 170, 56, 37, 77, 118, 88, 216, 16, 142, 54, 120, 183, 59, 202, 181, 71, 186, 41, 215, 118, 180, 238, 14, 114, 90, 119, 91, 7, 177, 161, 228, 185, 150, 252, 1, 114, 45, 195, 7, 203, 181, 92, 135, 156, 134, 43, 202, 190, 171, 154, 209, 45, 198, 64, 169, 169, 42, 162, 231, 97, 224, 227, 58, 33, 222, 223, 135, 52, 155, 139, 133, 204, 57, 151, 188, 201, 237, 246, 224, 90, 117, 163, 172, 16, 214, 94, 28, 214, 123, 11, 148, 94, 174, 27, 203, 68, 148, 35, 58, 250, 24, 114, 68, 99, 143, 38, 71, 244, 70, 26, 46, 36, 253, 64, 244, 195, 119, 214, 27, 94, 212, 229, 214, 81, 175, 36, 254, 186, 209, 23, 108, 181, 185, 157, 94, 191, 219, 225, 135, 20, 25, 65, 72, 113, 72, 153, 230, 194, 111, 82, 176, 144, 228, 235, 87, 225, 122, 240, 99, 153, 212, 65, 99, 153, 195, 90, 69, 254, 236, 246, 8, 102, 183, 229, 235, 122, 227, 39, 157, 62, 72, 65, 194, 239, 114, 63, 26, 147, 201, 43, 26, 246, 114, 139, 134, 173, 110, 151, 76, 252, 110, 151, 194, 63, 82, 112, 238, 48, 60, 202, 71, 116, 210, 219, 234, 57, 153, 4, 245, 156, 194, 63, 83, 112, 62, 209, 103, 210, 79, 38, 190, 99, 226, 189, 4, 109, 38, 73, 82, 255, 211, 105, 209, 196, 139, 58, 148, 158, 76, 124, 104, 131, 84, 166, 155, 239, 50, 126, 145, 130, 197, 132, 159, 175, 63, 89, 7, 223, 58, 204, 19, 24, 162, 63, 215, 245, 10, 193, 22, 125, 213, 113, 152, 88, 187, 191, 118, 107, 179, 188, 94, 218, 216, 92, 147, 203, 155, 255, 119, 103, 173, 92, 186, 117, 127, 121, 163, 116, 51, 255, 20, 154, 129, 169, 206, 199, 203, 27, 27, 101, 122, 55, 47, 161, 147, 112, 188, 147, 96, 117, 227, 246, 221, 53, 70, 146, 90, 121, 21, 142, 169, 102, 149, 55, 7, 43, 222, 31, 32, 223, 113, 34, 243, 59, 210, 255, 95, 124, 160, 147, 157, 250, 86, 81, 53, 171, 139, 237, 127, 196, 124, 94, 215, 42, 139, 15, 76, 247, 207, 159, 217, 191, 50, 223, 80, 106, 250, 222, 197, 173, 12, 189, 119, 233, 95, 1, 0, 0, 255, 255, 243, 196, 119, 0, 120, 90, 0, 0]) as $.Slice<number>, new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 140, 83, 223, 111, 147, 80, 24, 149, 154, 44, 217, 183, 85, 201, 157, 198, 218, 236, 71, 211, 237, 97, 105, 20, 236, 244, 109, 79, 140, 94, 13, 134, 1, 3, 218, 165, 123, 33, 148, 94, 43, 142, 114, 241, 94, 104, 237, 63, 224, 187, 127, 141, 255, 158, 129, 82, 91, 45, 51, 190, 125, 156, 239, 28, 206, 57, 185, 249, 224, 36, 27, 17, 38, 7, 254, 152, 196, 1, 145, 253, 36, 148, 103, 93, 249, 107, 70, 216, 66, 74, 24, 77, 41, 58, 200, 9, 82, 73, 144, 252, 36, 148, 102, 221, 102, 171, 74, 21, 208, 233, 148, 198, 75, 89, 179, 93, 197, 152, 83, 118, 255, 41, 162, 243, 37, 167, 125, 15, 245, 219, 18, 185, 201, 29, 209, 17, 64, 97, 237, 165, 139, 132, 52, 132, 150, 112, 190, 107, 239, 22, 136, 187, 72, 8, 186, 92, 173, 125, 54, 225, 141, 90, 75, 56, 223, 187, 56, 148, 42, 242, 73, 150, 191, 136, 168, 63, 46, 197, 10, 155, 240, 246, 79, 1, 14, 254, 112, 179, 9, 207, 162, 20, 97, 216, 99, 197, 180, 54, 125, 114, 113, 86, 249, 215, 13, 89, 158, 199, 6, 246, 123, 70, 239, 96, 199, 143, 249, 156, 176, 255, 202, 85, 114, 209, 41, 212, 9, 99, 148, 121, 83, 194, 185, 63, 33, 141, 199, 69, 231, 253, 2, 188, 94, 98, 109, 2, 245, 210, 249, 11, 9, 82, 50, 70, 46, 236, 7, 17, 229, 196, 227, 169, 159, 102, 188, 204, 220, 173, 116, 92, 85, 198, 223, 72, 144, 165, 33, 141, 213, 92, 233, 20, 66, 123, 47, 88, 127, 116, 98, 120, 250, 87, 65, 116, 4, 47, 111, 250, 216, 30, 122, 54, 118, 250, 186, 235, 185, 67, 11, 123, 154, 49, 80, 116, 173, 39, 62, 66, 199, 208, 220, 94, 43, 134, 115, 139, 109, 220, 19, 5, 116, 8, 141, 237, 253, 123, 69, 211, 113, 79, 172, 117, 126, 8, 240, 108, 163, 151, 74, 227, 113, 152, 7, 68, 109, 56, 94, 201, 62, 98, 213, 245, 84, 211, 232, 105, 174, 102, 26, 27, 214, 167, 112, 242, 0, 199, 48, 93, 207, 180, 176, 33, 10, 232, 13, 188, 250, 7, 73, 53, 175, 45, 29, 187, 184, 231, 169, 58, 86, 12, 125, 40, 214, 58, 223, 5, 120, 94, 100, 82, 105, 204, 67, 158, 146, 56, 88, 232, 100, 70, 162, 181, 161, 106, 26, 142, 230, 184, 216, 80, 135, 158, 142, 7, 88, 223, 72, 117, 6, 173, 135, 72, 120, 128, 13, 183, 175, 232, 162, 176, 238, 183, 205, 114, 92, 219, 52, 62, 136, 181, 171, 59, 120, 17, 208, 105, 213, 139, 94, 65, 17, 208, 202, 47, 200, 18, 238, 186, 147, 48, 253, 156, 141, 164, 128, 78, 229, 205, 147, 123, 29, 142, 35, 121, 66, 229, 226, 210, 202, 251, 187, 244, 147, 112, 214, 29, 237, 20, 216, 219, 95, 1, 0, 0, 255, 255, 189, 105, 40, 91, 251, 3, 0, 0]) as $.Slice<number>])

export function __goscript_set_yarpcFileDescriptorClosure00684e887839a48c(__goscriptValue: $.Slice<$.Slice<number>>): void {
	yarpcFileDescriptorClosure00684e887839a48c = __goscriptValue
}

async function __goscriptInit0(): globalThis.Promise<void> {
	await yarpc.RegisterClientBuilder($.interfaceValue($.functionValue(async (clientConfig: transport.ClientConfig | null, structField: reflect.StructField): globalThis.Promise<WorkerAPIYARPCClient | null> => {
		return await NewWorkerAPIYARPCClient(clientConfig, protobuf.ClientBuilderOptions(clientConfig, structField))
	}, ({ kind: $.TypeKind.Function, params: ["transport.ClientConfig", "reflect.StructField"], results: ["apiv1.WorkerAPIYARPCClient"] } as $.FunctionTypeInfo)), "func(clientConfig transport.ClientConfig, structField reflect.StructField) apiv1.WorkerAPIYARPCClient", ({ kind: $.TypeKind.Function, params: ["transport.ClientConfig", "reflect.StructField"], results: ["apiv1.WorkerAPIYARPCClient"] } as $.FunctionTypeInfo)))
}

var __goscriptAwait: any

export { __goscriptInit0 }
