// Generated file based on internal_public.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as s from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as list from "@goscript/container/list/index.js"

import type * as context from "@goscript/context/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import type * as __goscript_error from "./error.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import * as __goscript_internal_decision_state_machine from "./internal_decision_state_machine.gs.ts"

import * as __goscript_internal_event_handlers from "./internal_event_handlers.gs.ts"

import * as __goscript_internal_pressure_points from "./internal_pressure_points.gs.ts"

import * as __goscript_internal_task_handlers from "./internal_task_handlers.gs.ts"

import * as __goscript_internal_task_pollers from "./internal_task_pollers.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_worker from "./worker.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/container/list/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "./activity.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./headers.gs.ts"
import "./interceptors.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_decision_state_machine.gs.ts"
import "./internal_event_handlers.gs.ts"
import "./internal_pressure_points.gs.ts"
import "./internal_task_handlers.gs.ts"
import "./internal_task_pollers.gs.ts"
import "./internal_utils.gs.ts"
import "./internal_worker_base.gs.ts"
import "./internal_workflow.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./worker.gs.ts"
import "./workflow.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.decisionHeartbeatFunc", "internal.HistoryIterator", "internal.WorkflowExecutionContext", "internal.WorkflowTaskHandler", "internal.ActivityTaskHandler"])

export type decisionHeartbeatFunc = ((response: any, startTime: time.Time) => [__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, $.GoError] | globalThis.Promise<[__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, $.GoError]>) | null

export type HistoryIterator = {
	GetNextPage(): [s.History | $.VarRef<s.History> | null, $.GoError] | globalThis.Promise<[s.History | $.VarRef<s.History> | null, $.GoError]>
	HasNextPage(): boolean
	Reset(): void
}

$.registerInterfaceType(
	"internal.HistoryIterator",
	null,
	[$.methodSignature("GetNextPage", [], [/* @__PURE__ */ $.pointerType("shared.History"), "error"]), $.methodSignature("HasNextPage", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Reset")]
);

export type WorkflowExecutionContext = {
	CompleteDecisionTask(workflowTask: __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, waitLocalActivity: boolean): any
	GetCurrentDecisionTask(): s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null
	GetDecisionTimeout(): time.Duration
	IsDestroyed(): boolean
	Lock(): void
	ProcessLocalActivityResult(workflowTask: __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, lar: __goscript_internal_task_pollers.localActivityResult | $.VarRef<__goscript_internal_task_pollers.localActivityResult> | null): [any, $.GoError]
	ProcessWorkflowTask(workflowTask: __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null): [any, $.GoError]
	StackTrace(): string
	Unlock(err: $.GoError): void
}

$.registerInterfaceType(
	"internal.WorkflowExecutionContext",
	null,
	[$.methodSignature("CompleteDecisionTask", [["workflowTask", /* @__PURE__ */ $.pointerType("internal.workflowTask")], ["waitLocalActivity", /* @__PURE__ */ $.basicType("bool")]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("GetCurrentDecisionTask", [], [/* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse")]), $.methodSignature("GetDecisionTimeout", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("IsDestroyed", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Lock"), $.methodSignature("ProcessLocalActivityResult", [["workflowTask", /* @__PURE__ */ $.pointerType("internal.workflowTask")], ["lar", /* @__PURE__ */ $.pointerType("internal.localActivityResult")]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"]), $.methodSignature("ProcessWorkflowTask", [["workflowTask", /* @__PURE__ */ $.pointerType("internal.workflowTask")]], [["completeRequest", { kind: $.TypeKind.Interface, methods: [] }], ["err", "error"]]), $.methodSignature("StackTrace", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Unlock", [["err", "error"]])]
);

export type WorkflowTaskHandler = {
	ProcessWorkflowTask(task: __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, f: ((response: any, startTime: time.Time) => [__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, $.GoError] | globalThis.Promise<[__goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, $.GoError]>) | null): [any, $.GoError] | globalThis.Promise<[any, $.GoError]>
}

$.registerInterfaceType(
	"internal.WorkflowTaskHandler",
	null,
	[$.methodSignature("ProcessWorkflowTask", [["task", /* @__PURE__ */ $.pointerType("internal.workflowTask")], ["f", ({ kind: $.TypeKind.Function, name: "internal.decisionHeartbeatFunc", params: [{ kind: $.TypeKind.Interface, methods: [] }, "time.Time"], results: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), "error"] } as $.FunctionTypeInfo)]], [["response", { kind: $.TypeKind.Interface, methods: [] }], ["err", "error"]])]
);

export type ActivityTaskHandler = {
	Execute(taskList: string, task: s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null): [any, $.GoError] | globalThis.Promise<[any, $.GoError]>
}

$.registerInterfaceType(
	"internal.ActivityTaskHandler",
	null,
	[$.methodSignature("Execute", [["taskList", /* @__PURE__ */ $.basicType("string")], ["task", /* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse")]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"])]
);

export let enableVerboseLogging: boolean = false

export function __goscript_set_enableVerboseLogging(__goscriptValue: boolean): void {
	enableVerboseLogging = __goscriptValue
}

export function EnableVerboseLogging(enable: boolean): void {
	enableVerboseLogging = enable
}
