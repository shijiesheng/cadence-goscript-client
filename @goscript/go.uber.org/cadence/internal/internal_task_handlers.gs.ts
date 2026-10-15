// Generated file based on internal_task_handlers.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as uuid from "@goscript/github.com/pborman/uuid/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as s from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as backoff2 from "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"

import * as cache from "@goscript/go.uber.org/cadence/internal/common/cache/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as list from "@goscript/container/list/index.js"

import type * as shadower from "@goscript/go.uber.org/cadence/.gen/go/shadower/index.js"

import * as auth from "@goscript/go.uber.org/cadence/internal/common/auth/index.js"

import * as debug from "@goscript/go.uber.org/cadence/internal/common/debug/index.js"

import type * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import * as __goscript_internal_decision_state_machine from "./internal_decision_state_machine.gs.ts"

import * as __goscript_internal_event_handlers from "./internal_event_handlers.gs.ts"

import * as __goscript_internal_logging_tags from "./internal_logging_tags.gs.ts"

import * as __goscript_internal_poller_autoscaler from "./internal_poller_autoscaler.gs.ts"

import * as __goscript_internal_pressure_points from "./internal_pressure_points.gs.ts"

import * as __goscript_internal_public from "./internal_public.gs.ts"

import * as __goscript_internal_retry from "./internal_retry.gs.ts"

import * as __goscript_internal_task_pollers from "./internal_task_pollers.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_internal_workflow_client from "./internal_workflow_client.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_worker from "./worker.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_replayer from "./workflow_replayer.gs.ts"

import * as __goscript_workflow_replayer_utils from "./workflow_replayer_utils.gs.ts"

import * as __goscript_workflow_shadower from "./workflow_shadower.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/pborman/uuid/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"
import "@goscript/go.uber.org/cadence/internal/common/cache/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/container/list/index.js"
import "@goscript/go.uber.org/cadence/internal/common/auth/index.js"
import "@goscript/go.uber.org/cadence/internal/common/debug/index.js"
import "./activity.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./error.gs.ts"
import "./headers.gs.ts"
import "./interceptors.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_decision_state_machine.gs.ts"
import "./internal_event_handlers.gs.ts"
import "./internal_logging_tags.gs.ts"
import "./internal_poller_autoscaler.gs.ts"
import "./internal_pressure_points.gs.ts"
import "./internal_public.gs.ts"
import "./internal_retry.gs.ts"
import "./internal_task_pollers.gs.ts"
import "./internal_utils.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_worker_base.gs.ts"
import "./internal_workflow.gs.ts"
import "./internal_workflow_client.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./worker.gs.ts"
import "./workflow.gs.ts"
import "./workflow_replayer.gs.ts"
import "./workflow_replayer_utils.gs.ts"
import "./workflow_shadower.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.workflowExecutionEventHandler", "internal.autoConfigHintAwareTask", "internal.workflowTask", "internal.activityTask", "internal.resetStickinessTask", "internal.workflowExecutionContextImpl", "internal.workflowTaskHandlerImpl", "internal.activityProvider", "internal.history", "internal.decisionHeartbeatError", "internal.cadenceInvoker"])

export type workflowExecutionEventHandler = {
	Close(): void
	ProcessEvent(event: s.HistoryEvent | $.VarRef<s.HistoryEvent> | null, isReplay: boolean, isLast: boolean): $.GoError | globalThis.Promise<$.GoError>
	ProcessQuery(queryType: string, queryArgs: $.Slice<number>): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	StackTrace(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"internal.workflowExecutionEventHandler",
	null,
	[$.methodSignature("Close"), $.methodSignature("ProcessEvent", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")], ["isReplay", /* @__PURE__ */ $.basicType("bool")], ["isLast", /* @__PURE__ */ $.basicType("bool")]], ["error"]), $.methodSignature("ProcessQuery", [["queryType", /* @__PURE__ */ $.basicType("string")], ["queryArgs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("StackTrace", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type autoConfigHintAwareTask = {
	getAutoConfigHint(): s.AutoConfigHint | $.VarRef<s.AutoConfigHint> | null
}

$.registerInterfaceType(
	"internal.autoConfigHintAwareTask",
	null,
	[$.methodSignature("getAutoConfigHint", [], [/* @__PURE__ */ $.pointerType("shared.AutoConfigHint")])]
);

export type activityProvider = ((name: string) => __goscript_internal_activity.activity | null | globalThis.Promise<__goscript_internal_activity.activity | null>) | null

export class workflowTask {
	public get task(): s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null {
		return this._fields.task
	}

	public set task(value: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null) {
		this._fields.task = value
	}

	public get autoConfigHint(): s.AutoConfigHint | $.VarRef<s.AutoConfigHint> | null {
		return this._fields.autoConfigHint
	}

	public set autoConfigHint(value: s.AutoConfigHint | $.VarRef<s.AutoConfigHint> | null) {
		this._fields.autoConfigHint = value
	}

	public get historyIterator(): __goscript_internal_public.HistoryIterator | null {
		return this._fields.historyIterator
	}

	public set historyIterator(value: __goscript_internal_public.HistoryIterator | null) {
		this._fields.historyIterator = value
	}

	public get doneCh(): $.Channel<{}> | null {
		return this._fields.doneCh
	}

	public set doneCh(value: $.Channel<{}> | null) {
		this._fields.doneCh = value
	}

	public get laResultCh(): $.Channel<__goscript_internal_task_pollers.localActivityResult | $.VarRef<__goscript_internal_task_pollers.localActivityResult> | null> | null {
		return this._fields.laResultCh
	}

	public set laResultCh(value: $.Channel<__goscript_internal_task_pollers.localActivityResult | $.VarRef<__goscript_internal_task_pollers.localActivityResult> | null> | null) {
		this._fields.laResultCh = value
	}

	public _fields: {
		task: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null
		autoConfigHint: s.AutoConfigHint | $.VarRef<s.AutoConfigHint> | null
		historyIterator: __goscript_internal_public.HistoryIterator | null
		doneCh: $.Channel<{}> | null
		laResultCh: $.Channel<__goscript_internal_task_pollers.localActivityResult | $.VarRef<__goscript_internal_task_pollers.localActivityResult> | null> | null
	}

	constructor(init?: Partial<{task?: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null, autoConfigHint?: s.AutoConfigHint | $.VarRef<s.AutoConfigHint> | null, historyIterator?: __goscript_internal_public.HistoryIterator | null, doneCh?: $.Channel<{}> | null, laResultCh?: $.Channel<__goscript_internal_task_pollers.localActivityResult | $.VarRef<__goscript_internal_task_pollers.localActivityResult> | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			task: init?.task ?? (null! as s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null),
			autoConfigHint: init?.autoConfigHint ?? (null! as s.AutoConfigHint | $.VarRef<s.AutoConfigHint> | null),
			historyIterator: init?.historyIterator ?? (null! as __goscript_internal_public.HistoryIterator | null),
			doneCh: init?.doneCh ?? (null! as $.Channel<{}> | null),
			laResultCh: init?.laResultCh ?? (null! as $.Channel<__goscript_internal_task_pollers.localActivityResult | $.VarRef<__goscript_internal_task_pollers.localActivityResult> | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowTask {
		return new workflowTask(this, true)
	}

	public __goscriptAssign(source: workflowTask): void {
		const target = this._fields
		const values = source._fields
		target.task = values.task
		target.autoConfigHint = values.autoConfigHint
		target.historyIterator = $.assignFieldValue(target.historyIterator, values.historyIterator, "internal.HistoryIterator")
		target.doneCh = values.doneCh
		target.laResultCh = values.laResultCh
	}

	public getAutoConfigHint(): s.AutoConfigHint | $.VarRef<s.AutoConfigHint> | null {
		const t: workflowTask | $.VarRef<workflowTask> | null = this;
		const t$: workflowTask = t == null ? $.pointerTarget<workflowTask>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<workflowTask>(t)
		if ((t$ as workflowTask).autoConfigHint != null) {
			return (t$ as workflowTask).autoConfigHint
		}
		if ((t$ as workflowTask).task != null) {
			return $.pointerValue<s.PollForDecisionTaskResponse>((t$ as workflowTask).task).AutoConfigHint
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"internal.workflowTask",
		() => new workflowTask(),
		() => [$.methodSignature("getAutoConfigHint", [], [/* @__PURE__ */ $.pointerType("shared.AutoConfigHint")], true)],
		workflowTask,
		() => [/* @__PURE__ */ $.structField("task", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("autoConfigHint", /* @__PURE__ */ $.pointerType("shared.AutoConfigHint"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("historyIterator", "internal.HistoryIterator", [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("doneCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [3], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("laResultCh", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.pointerType("internal.localActivityResult"), "both"), [4], 40, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class activityTask {
	public get task(): s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null {
		return this._fields.task
	}

	public set task(value: s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null) {
		this._fields.task = value
	}

	public get autoConfigHint(): s.AutoConfigHint | $.VarRef<s.AutoConfigHint> | null {
		return this._fields.autoConfigHint
	}

	public set autoConfigHint(value: s.AutoConfigHint | $.VarRef<s.AutoConfigHint> | null) {
		this._fields.autoConfigHint = value
	}

	public get pollStartTime(): time.Time {
		return this._fields.pollStartTime
	}

	public set pollStartTime(value: time.Time) {
		this._fields.pollStartTime = value
	}

	public _fields: {
		task: s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null
		autoConfigHint: s.AutoConfigHint | $.VarRef<s.AutoConfigHint> | null
		pollStartTime: time.Time
	}

	constructor(init?: Partial<{task?: s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null, autoConfigHint?: s.AutoConfigHint | $.VarRef<s.AutoConfigHint> | null, pollStartTime?: time.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			task: init?.task ?? (null! as s.PollForActivityTaskResponse | $.VarRef<s.PollForActivityTaskResponse> | null),
			autoConfigHint: init?.autoConfigHint ?? (null! as s.AutoConfigHint | $.VarRef<s.AutoConfigHint> | null),
			pollStartTime: init?.pollStartTime ? $.markAsStructValue($.cloneStructValue(init.pollStartTime)) : $.markAsStructValue(new time.Time())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): activityTask {
		return new activityTask(this, true)
	}

	public __goscriptAssign(source: activityTask): void {
		const target = this._fields
		const values = source._fields
		target.task = values.task
		target.autoConfigHint = values.autoConfigHint
		$.assignStruct(target.pollStartTime, values.pollStartTime)
	}

	public getAutoConfigHint(): s.AutoConfigHint | $.VarRef<s.AutoConfigHint> | null {
		const t: activityTask | $.VarRef<activityTask> | null = this;
		const t$: activityTask = t == null ? $.pointerTarget<activityTask>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<activityTask>(t)
		if ((t$ as activityTask).autoConfigHint != null) {
			return (t$ as activityTask).autoConfigHint
		}
		if ((t$ as activityTask).task != null) {
			return $.pointerValue<s.PollForActivityTaskResponse>((t$ as activityTask).task).AutoConfigHint
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"internal.activityTask",
		() => new activityTask(),
		() => [$.methodSignature("getAutoConfigHint", [], [/* @__PURE__ */ $.pointerType("shared.AutoConfigHint")], true)],
		activityTask,
		() => [/* @__PURE__ */ $.structField("task", /* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("autoConfigHint", /* @__PURE__ */ $.pointerType("shared.AutoConfigHint"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("pollStartTime", "time.Time", [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class resetStickinessTask {
	public get task(): s.ResetStickyTaskListRequest | $.VarRef<s.ResetStickyTaskListRequest> | null {
		return this._fields.task
	}

	public set task(value: s.ResetStickyTaskListRequest | $.VarRef<s.ResetStickyTaskListRequest> | null) {
		this._fields.task = value
	}

	public _fields: {
		task: s.ResetStickyTaskListRequest | $.VarRef<s.ResetStickyTaskListRequest> | null
	}

	constructor(init?: Partial<{task?: s.ResetStickyTaskListRequest | $.VarRef<s.ResetStickyTaskListRequest> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			task: init?.task ?? (null! as s.ResetStickyTaskListRequest | $.VarRef<s.ResetStickyTaskListRequest> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): resetStickinessTask {
		return new resetStickinessTask(this, true)
	}

	public __goscriptAssign(source: resetStickinessTask): void {
		const target = this._fields
		const values = source._fields
		target.task = values.task
	}

	static __typeInfo = $.registerStructType(
		"internal.resetStickinessTask",
		() => new resetStickinessTask(),
		() => [],
		resetStickinessTask,
		() => [/* @__PURE__ */ $.structField("task", /* @__PURE__ */ $.pointerType("shared.ResetStickyTaskListRequest"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class workflowExecutionContextImpl {
	public get mutex(): sync.Mutex {
		return this._fields.mutex
	}

	public set mutex(value: sync.Mutex) {
		this._fields.mutex = value
	}

	public get workflowStartTime(): time.Time {
		return this._fields.workflowStartTime
	}

	public set workflowStartTime(value: time.Time) {
		this._fields.workflowStartTime = value
	}

	public get workflowInfo(): __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null {
		return this._fields.workflowInfo
	}

	public set workflowInfo(value: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null) {
		this._fields.workflowInfo = value
	}

	public get wth(): workflowTaskHandlerImpl | $.VarRef<workflowTaskHandlerImpl> | null {
		return this._fields.wth
	}

	public set wth(value: workflowTaskHandlerImpl | $.VarRef<workflowTaskHandlerImpl> | null) {
		this._fields.wth = value
	}

	// eventHandler is changed to a atomic.Value as a temporally bug fix for local activity
	// retry issue (github issue #915). Therefore, when accessing/modifying this field, the
	// mutex should still be held.
	public get eventHandler(): atomic.Value {
		return this._fields.eventHandler
	}

	public set eventHandler(value: atomic.Value) {
		this._fields.eventHandler = value
	}

	public get isWorkflowCompleted(): boolean {
		return this._fields.isWorkflowCompleted
	}

	public set isWorkflowCompleted(value: boolean) {
		this._fields.isWorkflowCompleted = value
	}

	public get result(): $.Slice<number> {
		return this._fields.result
	}

	public set result(value: $.Slice<number>) {
		this._fields.result = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get previousStartedEventID(): bigint {
		return this._fields.previousStartedEventID
	}

	public set previousStartedEventID(value: bigint) {
		this._fields.previousStartedEventID = value
	}

	public get newDecisions(): $.Slice<s.Decision | $.VarRef<s.Decision> | null> {
		return this._fields.newDecisions
	}

	public set newDecisions(value: $.Slice<s.Decision | $.VarRef<s.Decision> | null>) {
		this._fields.newDecisions = value
	}

	public get currentDecisionTask(): s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null {
		return this._fields.currentDecisionTask
	}

	public set currentDecisionTask(value: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null) {
		this._fields.currentDecisionTask = value
	}

	public get laTunnel(): __goscript_internal_task_pollers.localActivityTunnel | $.VarRef<__goscript_internal_task_pollers.localActivityTunnel> | null {
		return this._fields.laTunnel
	}

	public set laTunnel(value: __goscript_internal_task_pollers.localActivityTunnel | $.VarRef<__goscript_internal_task_pollers.localActivityTunnel> | null) {
		this._fields.laTunnel = value
	}

	public get decisionStartTime(): time.Time {
		return this._fields.decisionStartTime
	}

	public set decisionStartTime(value: time.Time) {
		this._fields.decisionStartTime = value
	}

	public _fields: {
		mutex: sync.Mutex
		workflowStartTime: time.Time
		workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null
		wth: workflowTaskHandlerImpl | $.VarRef<workflowTaskHandlerImpl> | null
		eventHandler: atomic.Value
		isWorkflowCompleted: boolean
		result: $.Slice<number>
		err: $.GoError
		previousStartedEventID: bigint
		newDecisions: $.Slice<s.Decision | $.VarRef<s.Decision> | null>
		currentDecisionTask: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null
		laTunnel: __goscript_internal_task_pollers.localActivityTunnel | $.VarRef<__goscript_internal_task_pollers.localActivityTunnel> | null
		decisionStartTime: time.Time
	}

	constructor(init?: Partial<{mutex?: sync.Mutex, workflowStartTime?: time.Time, workflowInfo?: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, wth?: workflowTaskHandlerImpl | $.VarRef<workflowTaskHandlerImpl> | null, eventHandler?: atomic.Value, isWorkflowCompleted?: boolean, result?: $.Slice<number>, err?: $.GoError, previousStartedEventID?: bigint, newDecisions?: $.Slice<s.Decision | $.VarRef<s.Decision> | null>, currentDecisionTask?: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null, laTunnel?: __goscript_internal_task_pollers.localActivityTunnel | $.VarRef<__goscript_internal_task_pollers.localActivityTunnel> | null, decisionStartTime?: time.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			mutex: init?.mutex ? $.markAsStructValue($.cloneStructValue(init.mutex)) : $.markAsStructValue(new sync.Mutex()),
			workflowStartTime: init?.workflowStartTime ? $.markAsStructValue($.cloneStructValue(init.workflowStartTime)) : $.markAsStructValue(new time.Time()),
			workflowInfo: init?.workflowInfo ?? (null! as __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null),
			wth: init?.wth ?? (null! as workflowTaskHandlerImpl | $.VarRef<workflowTaskHandlerImpl> | null),
			eventHandler: init?.eventHandler ? $.markAsStructValue($.cloneStructValue(init.eventHandler)) : $.markAsStructValue(new atomic.Value()),
			isWorkflowCompleted: init?.isWorkflowCompleted ?? (false as boolean),
			result: init?.result ?? (null! as $.Slice<number>),
			err: init?.err ?? (null! as $.GoError),
			previousStartedEventID: init?.previousStartedEventID ?? (0n as bigint),
			newDecisions: init?.newDecisions ?? (null! as $.Slice<s.Decision | $.VarRef<s.Decision> | null>),
			currentDecisionTask: init?.currentDecisionTask ?? (null! as s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null),
			laTunnel: init?.laTunnel ?? (null! as __goscript_internal_task_pollers.localActivityTunnel | $.VarRef<__goscript_internal_task_pollers.localActivityTunnel> | null),
			decisionStartTime: init?.decisionStartTime ? $.markAsStructValue($.cloneStructValue(init.decisionStartTime)) : $.markAsStructValue(new time.Time())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowExecutionContextImpl {
		return new workflowExecutionContextImpl(this, true)
	}

	public __goscriptAssign(source: workflowExecutionContextImpl): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mutex, values.mutex)
		$.assignStruct(target.workflowStartTime, values.workflowStartTime)
		target.workflowInfo = values.workflowInfo
		target.wth = values.wth
		$.assignStruct(target.eventHandler, values.eventHandler)
		target.isWorkflowCompleted = values.isWorkflowCompleted
		target.result = values.result
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.previousStartedEventID = values.previousStartedEventID
		target.newDecisions = values.newDecisions
		target.currentDecisionTask = values.currentDecisionTask
		target.laTunnel = values.laTunnel
		$.assignStruct(target.decisionStartTime, values.decisionStartTime)
	}

	public async CompleteDecisionTask(workflowTask: workflowTask | $.VarRef<workflowTask> | null, waitLocalActivities: boolean): globalThis.Promise<any> {
		let w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		const w$: workflowExecutionContextImpl = w == null ? $.pointerTarget<workflowExecutionContextImpl>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowExecutionContextImpl>(w)
		if ((w$ as workflowExecutionContextImpl).currentDecisionTask == null) {
			return null
		}
		let eventHandler: __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl | $.VarRef<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl> | null = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).getEventHandler() : workflowExecutionContextImpl.prototype.getEventHandler.call(w))
		let eventHandler$: __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl = eventHandler == null ? $.pointerTarget<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl>(eventHandler) : (eventHandler as any).__isVarRef === true ? (eventHandler as any).value : (eventHandler as any).__goValue === undefined ? (eventHandler as any) : $.pointerTarget<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl>(eventHandler)

		// w.laTunnel could be nil for worker.ReplayHistory() because there is no worker started, in that case we don't
		// care about the pending local activities, and just return because the result is ignored anyway by the caller.
		if ((w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).hasPendingLocalActivityWork() : workflowExecutionContextImpl.prototype.hasPendingLocalActivityWork.call(w)) && ((w$ as workflowExecutionContextImpl).laTunnel != null)) {
			if ($.len($.pointerValue<__goscript_internal_event_handlers.workflowEnvironmentImpl>((eventHandler$ as __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).unstartedLaTasks) > 0) {
				// start new local activity tasks
				let unstartedLaTasks: globalThis.Map<string, {}> | null = $.makeMap<string, {}>()
				for (let [activityID, __rangeValue] of $.pointerValue<__goscript_internal_event_handlers.workflowEnvironmentImpl>((eventHandler$ as __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).unstartedLaTasks?.entries() ?? []) {
					let task: __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null = $.mapGet<string, __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null, __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null>($.pointerValue<__goscript_internal_event_handlers.workflowEnvironmentImpl>((eventHandler$ as __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).pendingLaTasks, activityID, null)[0]
					let task$: __goscript_internal_event_handlers.localActivityTask = task == null ? $.pointerTarget<__goscript_internal_event_handlers.localActivityTask>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<__goscript_internal_event_handlers.localActivityTask>(task);
					;(task$ as __goscript_internal_event_handlers.localActivityTask).wc = w;
					;(task$ as __goscript_internal_event_handlers.localActivityTask).workflowTask = workflowTask
					if (!await __goscript_internal_task_pollers.localActivityTunnel.prototype.sendTask.call((w$ as workflowExecutionContextImpl).laTunnel, task)) {
						$.mapSet(unstartedLaTasks, activityID, {});
						;(task$ as __goscript_internal_event_handlers.localActivityTask).wc = null;
						;(task$ as __goscript_internal_event_handlers.localActivityTask).workflowTask = null
					}
				}
				$.pointerValue<__goscript_internal_event_handlers.workflowEnvironmentImpl>((eventHandler$ as __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).unstartedLaTasks = unstartedLaTasks
			}
			// cannot complete decision task as there are pending local activities
			if (waitLocalActivities) {
				return null
			}
		}

		let eventDecisions: $.Slice<s.Decision | $.VarRef<s.Decision> | null> = __goscript_internal_decision_state_machine.decisionsHelper.prototype.getDecisions.call($.pointerValue<__goscript_internal_event_handlers.workflowEnvironmentImpl>((eventHandler$ as __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, true)
		if ($.sliceLen(eventDecisions) > 0) {
			;(w$ as workflowExecutionContextImpl).newDecisions = $.appendSlice((w$ as workflowExecutionContextImpl).newDecisions, eventDecisions, $.appendZeros.nil)
		}

		let completeRequest = await workflowTaskHandlerImpl.prototype.completeWorkflow.call((w$ as workflowExecutionContextImpl).wth, eventHandler, (w$ as workflowExecutionContextImpl).currentDecisionTask, w, (w$ as workflowExecutionContextImpl).newDecisions, !waitLocalActivities)
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).clearCurrentTask() : workflowExecutionContextImpl.prototype.clearCurrentTask.call(w))

		return completeRequest
	}

	public GetDecisionTimeout(): time.Duration {
		const w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		return $.int64Mul(1000000000n, $.int64($.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<workflowExecutionContextImpl>(w).workflowInfo).TaskStartToCloseTimeoutSeconds))
	}

	public IsDestroyed(): boolean {
		const w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).getEventHandler() : workflowExecutionContextImpl.prototype.getEventHandler.call(w)) == null
	}

	public async Lock(): globalThis.Promise<void> {
		const w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		await $.pointerValue<workflowExecutionContextImpl>(w).mutex.Lock()
	}

	public async ProcessLocalActivityResult(workflowTask: workflowTask | $.VarRef<workflowTask> | null, lar: __goscript_internal_task_pollers.localActivityResult | $.VarRef<__goscript_internal_task_pollers.localActivityResult> | null): globalThis.Promise<[any, $.GoError]> {
		const w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		if (($.pointerValue<__goscript_internal_task_pollers.localActivityResult>(lar).err != null) && await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).retryLocalActivity(lar) : workflowExecutionContextImpl.prototype.retryLocalActivity.call(w, lar))) {
			return [null, null]
		}

		let err = await __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl.prototype.ProcessLocalActivityResult.call((w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).getEventHandler() : workflowExecutionContextImpl.prototype.getEventHandler.call(w)), lar)
		if (err != null) {
			return [null, err]
		}

		return [await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).CompleteDecisionTask(workflowTask, true) : workflowExecutionContextImpl.prototype.CompleteDecisionTask.call(w, workflowTask, true)), null]
	}

	public async ProcessWorkflowTask(workflowTask: workflowTask | $.VarRef<workflowTask> | null): globalThis.Promise<[any, $.GoError]> {
		let w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		const w$: workflowExecutionContextImpl = w == null ? $.pointerTarget<workflowExecutionContextImpl>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowExecutionContextImpl>(w)
		const workflowTask$: workflowTask = workflowTask == null ? $.pointerTarget<workflowTask>(workflowTask) : (workflowTask as any).__isVarRef === true ? (workflowTask as any).value : (workflowTask as any).__goValue === undefined ? (workflowTask as any) : $.pointerTarget<workflowTask>(workflowTask)
		let task: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null = (workflowTask$ as workflowTask).task
		let task$: s.PollForDecisionTaskResponse = task == null ? $.pointerTarget<s.PollForDecisionTaskResponse>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<s.PollForDecisionTaskResponse>(task)
		let historyIterator = (workflowTask$ as workflowTask).historyIterator
		$.pointerValue<__goscript_workflow.WorkflowInfo>((w$ as workflowExecutionContextImpl).workflowInfo).HistoryBytesServer = (task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as s.PollForDecisionTaskResponse).GetTotalHistoryBytes() : s.PollForDecisionTaskResponse.prototype.GetTotalHistoryBytes.call(task))
		$.pointerValue<__goscript_workflow.WorkflowInfo>((w$ as workflowExecutionContextImpl).workflowInfo).HistoryCount = $.int64Sub((task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as s.PollForDecisionTaskResponse).GetNextEventId() : s.PollForDecisionTaskResponse.prototype.GetNextEventId.call(task)), 1n)
		{
			let err = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).ResetIfStale(task, historyIterator) : workflowExecutionContextImpl.prototype.ResetIfStale.call(w, task, historyIterator))
			if (err != null) {
				return [null, err]
			}
		}
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).SetCurrentTask(task) : workflowExecutionContextImpl.prototype.SetCurrentTask.call(w, task))

		let eventHandler: __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl | $.VarRef<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl> | null = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).getEventHandler() : workflowExecutionContextImpl.prototype.getEventHandler.call(w))
		let reorderedHistory: history | $.VarRef<history> | null = newHistory(workflowTask, eventHandler)
		let replayDecisions: $.Slice<s.Decision | $.VarRef<s.Decision> | null> = null! as $.Slice<s.Decision | $.VarRef<s.Decision> | null>
		let respondEvents: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null> = null! as $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>

		let skipReplayCheck = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).skipReplayCheck() : workflowExecutionContextImpl.prototype.skipReplayCheck.call(w))
		let isReplayTest = (task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as s.PollForDecisionTaskResponse).GetPreviousStartedEventId() : s.PollForDecisionTaskResponse.prototype.GetPreviousStartedEventId.call(task)) == 9223372036854775807n
		if (isReplayTest) {
			await zap.Logger.prototype.Info.call($.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).logger, "Processing workflow task in replay test mode", $.arrayToSlice<zap.Field>([zap.String("WorkflowType", s.WorkflowType.prototype.GetName.call((task$ as s.PollForDecisionTaskResponse).WorkflowType)), zap.String("WorkflowID", s.WorkflowExecution.prototype.GetWorkflowId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)), zap.String("RunID", s.WorkflowExecution.prototype.GetRunId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution))]))
		}
		// Process events
		ProcessEvents: while (true) {
			let __goscriptTuple0: any = await (reorderedHistory !== null && (reorderedHistory as any).__isVarRef !== true && (reorderedHistory as any).__goValue === undefined ? ((reorderedHistory as any) as history).NextDecisionEvents() : history.prototype.NextDecisionEvents.call(reorderedHistory))
			let reorderedEvents: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null> = __goscriptTuple0[0]
			let markers: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null> = __goscriptTuple0[1]
			let binaryChecksum = __goscriptTuple0[2]
			let err = __goscriptTuple0[3]
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Gauge, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((await metrics.TaggedScope.prototype.GetTaggedScope.call($.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).metricsScope, $.arrayToSlice<string>(["workflowtype", $.pointerValue<__goscript_workflow.WorkflowInfo>((w$ as workflowExecutionContextImpl).workflowInfo).WorkflowType.Name])))).Gauge(metrics.EstimatedHistorySize), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Update(globalThis.Number($.pointerValue<__goscript_workflow.WorkflowInfo>((w$ as workflowExecutionContextImpl).workflowInfo).TotalHistoryBytes)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Gauge, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((await metrics.TaggedScope.prototype.GetTaggedScope.call($.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).metricsScope, $.arrayToSlice<string>(["workflowtype", $.pointerValue<__goscript_workflow.WorkflowInfo>((w$ as workflowExecutionContextImpl).workflowInfo).WorkflowType.Name])))).Gauge(metrics.ServerSideHistorySize), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Update(globalThis.Number($.pointerValue<__goscript_workflow.WorkflowInfo>((w$ as workflowExecutionContextImpl).workflowInfo).HistoryBytesServer)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, err]
			}

			if ($.sliceLen(reorderedEvents) == 0) {
				break ProcessEvents
			}
			if (binaryChecksum == null) {
				$.pointerValue<__goscript_workflow.WorkflowInfo>((w$ as workflowExecutionContextImpl).workflowInfo).BinaryChecksum = common.StringPtr(await __goscript_internal_worker.getBinaryChecksum())
			} else {
				$.pointerValue<__goscript_workflow.WorkflowInfo>((w$ as workflowExecutionContextImpl).workflowInfo).BinaryChecksum = binaryChecksum
			}
			// Markers are from the events that are produced from the current decision
			for (let __goscriptRangeTarget0 = markers, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let m = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as s.HistoryEvent | $.VarRef<s.HistoryEvent> | null)
				if (!$.stringEqual(s.MarkerRecordedEventAttributes.prototype.GetMarkerName.call($.pointerValue<s.HistoryEvent>(m).MarkerRecordedEventAttributes), "LocalActivity")) {
					// local activity marker needs to be applied after decision task started event
					let __goscriptShadow0 = await (eventHandler !== null && (eventHandler as any).__isVarRef !== true && (eventHandler as any).__goValue === undefined ? ((eventHandler as any) as __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl).ProcessEvent(m, true, false) : __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl.prototype.ProcessEvent.call(eventHandler, m, true, false))
					if (__goscriptShadow0 != null) {
						return [null, __goscriptShadow0]
					}
					if ((w$ as workflowExecutionContextImpl).isWorkflowCompleted) {
						break ProcessEvents
					}
				}
			}

			for (let __goscriptRangeTarget1 = reorderedEvents, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
				let event = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as s.HistoryEvent | $.VarRef<s.HistoryEvent> | null)
				let isInReplay = (reorderedHistory !== null && (reorderedHistory as any).__isVarRef !== true && (reorderedHistory as any).__goValue === undefined ? ((reorderedHistory as any) as history).IsReplayEvent(event) : history.prototype.IsReplayEvent.call(reorderedHistory, event))
				let isLast = !isInReplay && (i == ($.sliceLen(reorderedEvents) - 1))
				if (!skipReplayCheck && isDecisionEvent((event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(event)))) {
					respondEvents = $.appendOne(respondEvents, event, $.appendZeros.nil)
				}

				if (isPreloadMarkerEvent(event)) {
					// marker events are processed separately
					continue
				}

				// Any pressure points.
				let __goscriptShadow1 = await workflowTaskHandlerImpl.prototype.executeAnyPressurePoints.call((w$ as workflowExecutionContextImpl).wth, event, isInReplay)
				if (__goscriptShadow1 != null) {
					return [null, __goscriptShadow1]
				}

				__goscriptShadow1 = await (eventHandler !== null && (eventHandler as any).__isVarRef !== true && (eventHandler as any).__goValue === undefined ? ((eventHandler as any) as __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl).ProcessEvent(event, isInReplay, isLast) : __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl.prototype.ProcessEvent.call(eventHandler, event, isInReplay, isLast))
				if (__goscriptShadow1 != null) {
					return [null, __goscriptShadow1]
				}
				if ((w$ as workflowExecutionContextImpl).isWorkflowCompleted) {
					break ProcessEvents
				}
			}

			// now apply local activity markers
			for (let __goscriptRangeTarget2 = markers, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
				let m = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as s.HistoryEvent | $.VarRef<s.HistoryEvent> | null)
				if ($.stringEqual(s.MarkerRecordedEventAttributes.prototype.GetMarkerName.call($.pointerValue<s.HistoryEvent>(m).MarkerRecordedEventAttributes), "LocalActivity")) {
					let __goscriptShadow2 = await (eventHandler !== null && (eventHandler as any).__isVarRef !== true && (eventHandler as any).__goValue === undefined ? ((eventHandler as any) as __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl).ProcessEvent(m, true, false) : __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl.prototype.ProcessEvent.call(eventHandler, m, true, false))
					if (__goscriptShadow2 != null) {
						return [null, __goscriptShadow2]
					}
					if ((w$ as workflowExecutionContextImpl).isWorkflowCompleted) {
						break ProcessEvents
					}
				}
			}
			let isReplay = ($.sliceLen(reorderedEvents) > 0) && (reorderedHistory !== null && (reorderedHistory as any).__isVarRef !== true && (reorderedHistory as any).__goValue === undefined ? ((reorderedHistory as any) as history).IsReplayEvent($.arrayIndex(reorderedEvents!, $.sliceLen(reorderedEvents) - 1)) : history.prototype.IsReplayEvent.call(reorderedHistory, $.arrayIndex(reorderedEvents!, $.sliceLen(reorderedEvents) - 1)))
			let lastDecisionEventsForReplayTest = isReplayTest && !await (reorderedHistory !== null && (reorderedHistory as any).__isVarRef !== true && (reorderedHistory as any).__goValue === undefined ? ((reorderedHistory as any) as history).HasNextDecisionEvents() : history.prototype.HasNextDecisionEvents.call(reorderedHistory))
			if (isReplay && !lastDecisionEventsForReplayTest) {
				let eventDecisions: $.Slice<s.Decision | $.VarRef<s.Decision> | null> = __goscript_internal_decision_state_machine.decisionsHelper.prototype.getDecisions.call($.pointerValue<__goscript_internal_event_handlers.workflowEnvironmentImpl>($.pointerValue<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl>(eventHandler).workflowEnvironmentImpl).decisionsHelper, true)
				if (($.sliceLen(eventDecisions) > 0) && !skipReplayCheck) {
					replayDecisions = $.appendSlice(replayDecisions, eventDecisions, $.appendZeros.nil)
				}
			}
		}

		// Non-deterministic error could happen in 2 different places:
		//   1) the replay decisions does not match to history events. This is usually due to non backwards compatible code
		// change to decider logic. For example, change calling one activity to a different activity.
		//   2) the decision state machine is trying to make illegal state transition while replay a history event (like
		// activity task completed), but the corresponding decider code that start the event has been removed. In that case
		// the replay of that event will panic on the decision state machine and the workflow will be marked as completed
		// with the panic error.
		let nonDeterministicErr: $.GoError = null! as $.GoError
		let nonDeterminismType: __goscript_internal_logging_tags.nonDeterminismDetectionType = ""
		if ((!skipReplayCheck && !(w$ as workflowExecutionContextImpl).isWorkflowCompleted) || isReplayTest) {
			// check if decisions from reply matches to the history events
			{
				let err = await __goscript_workflow_replayer_utils.matchReplayWithHistory((w$ as workflowExecutionContextImpl).workflowInfo, replayDecisions, respondEvents)
				if (err != null) {
					nonDeterministicErr = err
					nonDeterminismType = "replaycomparison"
				}
			}
		} else {
			{
				let __goscriptTuple1: any = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).getWorkflowPanicIfIllegaleStatePanic() : workflowExecutionContextImpl.prototype.getWorkflowPanicIfIllegaleStatePanic.call(w))
				let panicErr: __goscript_error.workflowPanicError | $.VarRef<__goscript_error.workflowPanicError> | null = __goscriptTuple1[0]
				let ok = __goscriptTuple1[1]
				if (ok) {
					// This is a nondeterministic execution which ended up panicking
					nonDeterministicErr = $.interfaceValue<$.GoError>(panicErr, "*internal.workflowPanicError", /* @__PURE__ */ $.pointerType("internal.workflowPanicError"))
					nonDeterminismType = "illegalstatepanic"
					// Since we know there is an error, we do the replay check to give more context in the log
					let replayErr = await __goscript_workflow_replayer_utils.matchReplayWithHistory((w$ as workflowExecutionContextImpl).workflowInfo, replayDecisions, respondEvents)
					await zap.Logger.prototype.Error.call($.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).logger, "Illegal state caused panic", $.arrayToSlice<zap.Field>([zap.String("WorkflowType", s.WorkflowType.prototype.GetName.call((task$ as s.PollForDecisionTaskResponse).WorkflowType)), zap.String("WorkflowID", s.WorkflowExecution.prototype.GetWorkflowId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)), zap.String("RunID", s.WorkflowExecution.prototype.GetRunId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)), zap.Error(nonDeterministicErr), zap.NamedError("ReplayError", replayErr)]))
				}
			}
		}

		if (nonDeterministicErr != null) {
			let scope = await metrics.TaggedScope.prototype.GetTaggedScope.call($.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).metricsScope, $.arrayToSlice<string>(["WorkflowType", s.WorkflowType.prototype.GetName.call((task$ as s.PollForDecisionTaskResponse).WorkflowType), "NonDeterminismDetectionType", nonDeterminismType]))
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? (scope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(scope)).Counter(metrics.NonDeterministicError), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await zap.Logger.prototype.Error.call($.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).logger, "non-deterministic-error", $.arrayToSlice<zap.Field>([zap.String("WorkflowType", s.WorkflowType.prototype.GetName.call((task$ as s.PollForDecisionTaskResponse).WorkflowType)), zap.String("WorkflowID", s.WorkflowExecution.prototype.GetWorkflowId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)), zap.String("RunID", s.WorkflowExecution.prototype.GetRunId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)), zap.Error(nonDeterministicErr)]))

			switch ($.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).nonDeterministicWorkflowPolicy) {
				case 1:
				{
					await $.pointerValue<__goscript_internal_event_handlers.workflowEnvironmentImpl>($.pointerValue<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl>(eventHandler).workflowEnvironmentImpl).Complete(null, $.interfaceValue<$.GoError>(await __goscript_error.NewCustomError("NonDeterministicWorkflowPolicyFailWorkflow", $.arrayToSlice<any>([(__goscriptAwait = (nonDeterministicErr !== null && (nonDeterministicErr as any).__isVarRef !== true && (nonDeterministicErr as any).__goValue === undefined ? (nonDeterministicErr as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(nonDeterministicErr)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)])), "*internal.CustomError", /* @__PURE__ */ $.pointerType("internal.CustomError")))
					break
				}
				case 0:
				{
					return [null, nonDeterministicErr]
					break
				}
				default:
				{
					$.panic("unknown mismatched workflow history policy.")
					break
				}
			}
		}

		return [await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).CompleteDecisionTask(workflowTask, true) : workflowExecutionContextImpl.prototype.CompleteDecisionTask.call(w, workflowTask, true)), null]
	}

	public async ResetIfStale(task: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null, historyIterator: __goscript_internal_public.HistoryIterator | null): globalThis.Promise<$.GoError> {
		const w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		const w$: workflowExecutionContextImpl = w == null ? $.pointerTarget<workflowExecutionContextImpl>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowExecutionContextImpl>(w)
		const task$: s.PollForDecisionTaskResponse = task == null ? $.pointerTarget<s.PollForDecisionTaskResponse>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<s.PollForDecisionTaskResponse>(task)
		if (($.sliceLen($.pointerValue<s.History>((task$ as s.PollForDecisionTaskResponse).History).Events) > 0) && (s.HistoryEvent.prototype.GetEventId.call($.arrayIndex($.pointerValue<s.History>((task$ as s.PollForDecisionTaskResponse).History).Events!, 0)) != ($.int64Add((w$ as workflowExecutionContextImpl).previousStartedEventID, 1n)))) {
			await zap.Logger.prototype.Debug.call($.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).logger, "Cached state staled, new task has unexpected events", $.arrayToSlice<zap.Field>([zap.String("WorkflowID", s.WorkflowExecution.prototype.GetWorkflowId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)), zap.String("RunID", s.WorkflowExecution.prototype.GetRunId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)), zap.Int64("CachedPreviousStartedEventID", (w$ as workflowExecutionContextImpl).previousStartedEventID), zap.Int64("TaskFirstEventID", s.HistoryEvent.prototype.GetEventId.call($.arrayIndex($.pointerValue<s.History>((task$ as s.PollForDecisionTaskResponse).History).Events!, 0))), zap.Int64("TaskStartedEventID", (task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as s.PollForDecisionTaskResponse).GetStartedEventId() : s.PollForDecisionTaskResponse.prototype.GetStartedEventId.call(task))), zap.Int64("TaskPreviousStartedEventID", (task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as s.PollForDecisionTaskResponse).GetPreviousStartedEventId() : s.PollForDecisionTaskResponse.prototype.GetPreviousStartedEventId.call(task)))]))

			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((await metrics.TaggedScope.prototype.GetTaggedScope.call($.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).metricsScope, $.arrayToSlice<string>(["WorkflowType", s.WorkflowType.prototype.GetName.call((task$ as s.PollForDecisionTaskResponse).WorkflowType)])))).Counter(metrics.StickyCacheStall), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).clearState() : workflowExecutionContextImpl.prototype.clearState.call(w))
			return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).resetStateIfDestroyed(task, historyIterator) : workflowExecutionContextImpl.prototype.resetStateIfDestroyed.call(w, task, historyIterator))
		}
		return null
	}

	public SetCurrentTask(task: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null): void {
		let w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		const w$: workflowExecutionContextImpl = w == null ? $.pointerTarget<workflowExecutionContextImpl>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowExecutionContextImpl>(w);
		;(w$ as workflowExecutionContextImpl).currentDecisionTask = task
		// do not update the previousStartedEventID for query task
		if ($.pointerValue<s.PollForDecisionTaskResponse>(task).Query == null) {
			;(w$ as workflowExecutionContextImpl).previousStartedEventID = (task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as s.PollForDecisionTaskResponse).GetStartedEventId() : s.PollForDecisionTaskResponse.prototype.GetStartedEventId.call(task))
		}
		$.assignStruct((w$ as workflowExecutionContextImpl).decisionStartTime, time.Now())
	}

	public async Unlock(err: $.GoError): globalThis.Promise<void> {
		const w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		const w$: workflowExecutionContextImpl = w == null ? $.pointerTarget<workflowExecutionContextImpl>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowExecutionContextImpl>(w)
		let cleared = false
		let cached = (__goscriptAwait = $.pointerValue<Exclude<cache.Cache, null>>((await getWorkflowCache())).Exist($.pointerValue<__goscript_workflow.WorkflowInfo>((w$ as workflowExecutionContextImpl).workflowInfo).WorkflowExecution.RunID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((((err != null) || ((w$ as workflowExecutionContextImpl).err != null)) || (w$ as workflowExecutionContextImpl).isWorkflowCompleted) || ($.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).disableStickyExecution && !(w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).hasPendingLocalActivityWork() : workflowExecutionContextImpl.prototype.hasPendingLocalActivityWork.call(w)))) {
			// TODO: in case of closed, it assumes the close decision always succeed. need server side change to return
			// error to indicate the close failure case. This should be rare case. For now, always remove the cache, and
			// if the close decision failed, the next decision will have to rebuild the state.
			if (cached) {
				// also clears state asynchronously via cache eviction
				await removeWorkflowContext($.pointerValue<__goscript_workflow.WorkflowInfo>((w$ as workflowExecutionContextImpl).workflowInfo).WorkflowExecution.RunID)
			} else {
				await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).clearState() : workflowExecutionContextImpl.prototype.clearState.call(w))
			}
			cleared = true
		}
		// there are a variety of reasons a workflow may not have been put into the cache.
		// all of them mean we need to clear the state at this point, or any running goroutines will be orphaned.
		if (!cleared && !cached) {
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).clearState() : workflowExecutionContextImpl.prototype.clearState.call(w))
		}

		void (w$ as workflowExecutionContextImpl).mutex.Unlock()
	}

	public clearCurrentTask(): void {
		let w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		const w$: workflowExecutionContextImpl = w == null ? $.pointerTarget<workflowExecutionContextImpl>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowExecutionContextImpl>(w);
		;(w$ as workflowExecutionContextImpl).newDecisions = null;
		;(w$ as workflowExecutionContextImpl).currentDecisionTask = null
	}

	public async clearState(): globalThis.Promise<void> {
		let w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		const w$: workflowExecutionContextImpl = w == null ? $.pointerTarget<workflowExecutionContextImpl>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowExecutionContextImpl>(w)
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).clearCurrentTask() : workflowExecutionContextImpl.prototype.clearCurrentTask.call(w));
		;(w$ as workflowExecutionContextImpl).isWorkflowCompleted = false;
		;(w$ as workflowExecutionContextImpl).result = null;
		;(w$ as workflowExecutionContextImpl).err = null;
		;(w$ as workflowExecutionContextImpl).previousStartedEventID = 0n;
		;(w$ as workflowExecutionContextImpl).newDecisions = null

		let eventHandler: __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl | $.VarRef<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl> | null = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).getEventHandler() : workflowExecutionContextImpl.prototype.getEventHandler.call(w))
		if (eventHandler != null) {
			// Set isReplay to true to prevent user code in defer guarded by !isReplaying() from running
			$.pointerValue<__goscript_internal_event_handlers.workflowEnvironmentImpl>($.pointerValue<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl>(eventHandler).workflowEnvironmentImpl).isReplay = true
			await (eventHandler !== null && (eventHandler as any).__isVarRef !== true && (eventHandler as any).__goValue === undefined ? ((eventHandler as any) as __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl).Close() : __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl.prototype.Close.call(eventHandler))
			void (w$ as workflowExecutionContextImpl).eventHandler.Store($.interfaceValue(null, "*internal.workflowExecutionEventHandlerImpl", /* @__PURE__ */ $.pointerType("internal.workflowExecutionEventHandlerImpl")))
		}
	}

	public completeWorkflow(result: $.Slice<number>, err: $.GoError): void {
		let w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		const w$: workflowExecutionContextImpl = w == null ? $.pointerTarget<workflowExecutionContextImpl>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowExecutionContextImpl>(w);
		;(w$ as workflowExecutionContextImpl).isWorkflowCompleted = true;
		;(w$ as workflowExecutionContextImpl).result = result;
		;(w$ as workflowExecutionContextImpl).err = err
	}

	public async createEventHandler(): globalThis.Promise<void> {
		const w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		const w$: workflowExecutionContextImpl = w == null ? $.pointerTarget<workflowExecutionContextImpl>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowExecutionContextImpl>(w)
		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).clearState() : workflowExecutionContextImpl.prototype.clearState.call(w))
		let eventHandler = await __goscript_internal_event_handlers.newWorkflowExecutionEventHandler((w$ as workflowExecutionContextImpl).workflowInfo, $.functionValue(((__receiver) => (result: $.Slice<number>, err: $.GoError) => __receiver.completeWorkflow(result, err))((w$ as workflowExecutionContextImpl)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal.(*workflowExecutionContextImpl).completeWorkflow-fm"), $.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).logger, $.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).enableLoggingInReplay, $.interfaceValue<tally.Scope | null>($.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).metricsScope, "*metrics.TaggedScope", /* @__PURE__ */ $.pointerType("metrics.TaggedScope")), $.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).registry, $.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).dataConverter, $.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).contextPropagators, $.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).tracer, $.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).workflowInterceptorFactories, ($.pointerValue<workflowTaskHandlerImpl>((w$ as workflowExecutionContextImpl).wth).featureFlags).clone())
		void (w$ as workflowExecutionContextImpl).eventHandler.Store((eventHandler as any))
	}

	public getEventHandler(): __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl | $.VarRef<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl> | null {
		const w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		let eventHandler = $.pointerValue<workflowExecutionContextImpl>(w).eventHandler.Load()
		if (eventHandler == null) {
			return null
		}
		let __goscriptTuple2: any = $.typeAssertTuple<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl | $.VarRef<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl> | null>(eventHandler, /* @__PURE__ */ $.pointerType("internal.workflowExecutionEventHandlerImpl"))
		let eventHandlerImpl: __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl | $.VarRef<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			$.panic("unknown type for workflow execution event handler")
		}
		return eventHandlerImpl
	}

	public getWorkflowPanicIfIllegaleStatePanic(): [__goscript_error.workflowPanicError | $.VarRef<__goscript_error.workflowPanicError> | null, boolean] {
		const w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		const w$: workflowExecutionContextImpl = w == null ? $.pointerTarget<workflowExecutionContextImpl>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowExecutionContextImpl>(w)
		if (!(w$ as workflowExecutionContextImpl).isWorkflowCompleted || ((w$ as workflowExecutionContextImpl).err == null)) {
			return [null, false]
		}

		let __goscriptTuple3: any = $.typeAssertTuple<__goscript_error.workflowPanicError | $.VarRef<__goscript_error.workflowPanicError> | null>((w$ as workflowExecutionContextImpl).err, /* @__PURE__ */ $.pointerType("internal.workflowPanicError"))
		let panicErr: __goscript_error.workflowPanicError | $.VarRef<__goscript_error.workflowPanicError> | null = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		let panicErr$: __goscript_error.workflowPanicError = panicErr == null ? $.pointerTarget<__goscript_error.workflowPanicError>(panicErr) : (panicErr as any).__isVarRef === true ? (panicErr as any).value : (panicErr as any).__goValue === undefined ? (panicErr as any) : $.pointerTarget<__goscript_error.workflowPanicError>(panicErr)
		if (!ok || ((panicErr$ as __goscript_error.workflowPanicError).value == null)) {
			return [null, false]
		}

		let __goscriptTuple4: any = $.typeAssertTuple<__goscript_internal_decision_state_machine.stateMachineIllegalStatePanic>((panicErr$ as __goscript_error.workflowPanicError).value, "internal.stateMachineIllegalStatePanic")
		ok = __goscriptTuple4[1]
		if (!ok) {
			return [null, false]
		}

		return [panicErr, true]
	}

	public hasPendingLocalActivityWork(): boolean {
		const w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		const w$: workflowExecutionContextImpl = w == null ? $.pointerTarget<workflowExecutionContextImpl>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowExecutionContextImpl>(w)
		let eventHandler: __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl | $.VarRef<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl> | null = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).getEventHandler() : workflowExecutionContextImpl.prototype.getEventHandler.call(w))
		return (((!(w$ as workflowExecutionContextImpl).isWorkflowCompleted && ((w$ as workflowExecutionContextImpl).currentDecisionTask != null)) && ($.pointerValue<s.PollForDecisionTaskResponse>((w$ as workflowExecutionContextImpl).currentDecisionTask).Query == null)) && (eventHandler != null)) && ($.len($.pointerValue<__goscript_internal_event_handlers.workflowEnvironmentImpl>($.pointerValue<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl>(eventHandler).workflowEnvironmentImpl).pendingLaTasks) > 0)
	}

	public async onEviction(): globalThis.Promise<void> {
		const w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		const w$: workflowExecutionContextImpl = w == null ? $.pointerTarget<workflowExecutionContextImpl>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowExecutionContextImpl>(w)
		// onEviction is run by LRU cache's removeFunc in separate goroutinue
		await (w$ as workflowExecutionContextImpl).mutex.Lock()

		// Queue a ResetStickiness request *BEFORE* calling clearState
		// because once destroyed, no sensible information
		// may be ascertained about the execution context's state,
		// nor should any of its methods be invoked.
		if ((w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).shouldResetStickyOnEviction() : workflowExecutionContextImpl.prototype.shouldResetStickyOnEviction.call(w))) {
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).queueResetStickinessTask() : workflowExecutionContextImpl.prototype.queueResetStickinessTask.call(w))
		}

		await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).clearState() : workflowExecutionContextImpl.prototype.clearState.call(w))
		void (w$ as workflowExecutionContextImpl).mutex.Unlock()
	}

	public async queueResetStickinessTask(): globalThis.Promise<void> {
		const w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		const w$: workflowExecutionContextImpl = w == null ? $.pointerTarget<workflowExecutionContextImpl>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowExecutionContextImpl>(w)
		let task: $.VarRef<resetStickinessTask> = $.varRef(new resetStickinessTask(undefined, true))
		task.value.task = (() => { const __goscriptLiteralField0 = common.StringPtr($.pointerValue<__goscript_workflow.WorkflowInfo>((w$ as workflowExecutionContextImpl).workflowInfo).Domain); return new s.ResetStickyTaskListRequest({Domain: __goscriptLiteralField0, Execution: (() => { const __goscriptLiteralField1 = common.StringPtr($.pointerValue<__goscript_workflow.WorkflowInfo>((w$ as workflowExecutionContextImpl).workflowInfo).WorkflowExecution.ID); const __goscriptLiteralField2 = common.StringPtr($.pointerValue<__goscript_workflow.WorkflowInfo>((w$ as workflowExecutionContextImpl).workflowInfo).WorkflowExecution.RunID); return new s.WorkflowExecution({WorkflowId: __goscriptLiteralField1, RunId: __goscriptLiteralField2}) })()}) })()
		// w.laTunnel could be nil for worker.ReplayHistory() because there is no worker started, in that case we don't
		// care about resetStickinessTask.
		if (((w$ as workflowExecutionContextImpl).laTunnel != null) && ($.pointerValue<__goscript_internal_task_pollers.localActivityTunnel>((w$ as workflowExecutionContextImpl).laTunnel).resultCh != null)) {
			await $.chanSend($.pointerValue<__goscript_internal_task_pollers.localActivityTunnel>((w$ as workflowExecutionContextImpl).laTunnel).resultCh, $.interfaceValue(task, "*internal.resetStickinessTask", /* @__PURE__ */ $.pointerType("internal.resetStickinessTask")))
		}
	}

	public async resetStateIfDestroyed(task: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null, historyIterator: __goscript_internal_public.HistoryIterator | null): globalThis.Promise<$.GoError> {
		const w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		// It is possible that 2 threads (one for decision task and one for query task) that both are getting this same
		// cached workflowContext. If one task finished with err, it would destroy the cached state. In that case, the
		// second task needs to reset the cache state and start from beginning of the history.
		if ((w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).IsDestroyed() : workflowExecutionContextImpl.prototype.IsDestroyed.call(w))) {
			await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).createEventHandler() : workflowExecutionContextImpl.prototype.createEventHandler.call(w))
			// reset history events if necessary
			if (!isFullHistory($.pointerValue<s.PollForDecisionTaskResponse>(task).History)) {
				{
					let [, err] = await resetHistory(task, historyIterator)
					if (err != null) {
						return err
					}
				}
			}
		}
		return null
	}

	public async retryLocalActivity(lar: __goscript_internal_task_pollers.localActivityResult | $.VarRef<__goscript_internal_task_pollers.localActivityResult> | null): globalThis.Promise<boolean> {
		const w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		const lar$: __goscript_internal_task_pollers.localActivityResult = lar == null ? $.pointerTarget<__goscript_internal_task_pollers.localActivityResult>(lar) : (lar as any).__isVarRef === true ? (lar as any).value : (lar as any).__goValue === undefined ? (lar as any) : $.pointerTarget<__goscript_internal_task_pollers.localActivityResult>(lar)
		if ((($.pointerValue<__goscript_internal_event_handlers.localActivityTask>((lar$ as __goscript_internal_task_pollers.localActivityResult).task).retryPolicy == null) || ((lar$ as __goscript_internal_task_pollers.localActivityResult).err == null)) || __goscript_error.IsCanceledError((lar$ as __goscript_internal_task_pollers.localActivityResult).err)) {
			return false
		}

		let __goscriptShadow3 = await getRetryBackoff(lar, $.markAsStructValue($.cloneStructValue(time.Now())))
		if ((__goscriptShadow3 > 0n) && (__goscriptShadow3 <= (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).GetDecisionTimeout() : workflowExecutionContextImpl.prototype.GetDecisionTimeout.call(w)))) {
			// we need a local retry
			time.AfterFunc(__goscriptShadow3, $.functionValue(async (): globalThis.Promise<void> => {
				// TODO: this should not be a separate goroutine as it introduces race condition when accessing eventHandler.
				// currently this is solved by changing eventHandler to an atomic.Value. Ideally, this retry timer should be
				// part of the event loop for processing the workflow task.
				let eventHandler: __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl | $.VarRef<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl> | null = (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowExecutionContextImpl).getEventHandler() : workflowExecutionContextImpl.prototype.getEventHandler.call(w))

				// if decision heartbeat failed, the workflow execution context will be cleared and eventHandler will be nil
				if (eventHandler == null) {
					return
				}

				{
					let [, ok] = $.mapGet<string, __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null, __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null>($.pointerValue<__goscript_internal_event_handlers.workflowEnvironmentImpl>($.pointerValue<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl>(eventHandler).workflowEnvironmentImpl).pendingLaTasks, $.pointerValue<__goscript_internal_event_handlers.localActivityTask>((lar$ as __goscript_internal_task_pollers.localActivityResult).task).activityID, null)
					if (!ok) {
						return
					}
				}

				$.pointerValue<__goscript_internal_event_handlers.localActivityTask>((lar$ as __goscript_internal_task_pollers.localActivityResult).task).attempt = (($.pointerValue<__goscript_internal_event_handlers.localActivityTask>((lar$ as __goscript_internal_task_pollers.localActivityResult).task).attempt + 1) | 0)

				if (!await __goscript_internal_task_pollers.localActivityTunnel.prototype.sendTask.call($.pointerValue<workflowExecutionContextImpl>(w).laTunnel, (lar$ as __goscript_internal_task_pollers.localActivityResult).task)) {
					$.pointerValue<__goscript_internal_event_handlers.localActivityTask>((lar$ as __goscript_internal_task_pollers.localActivityResult).task).attempt = (($.pointerValue<__goscript_internal_event_handlers.localActivityTask>((lar$ as __goscript_internal_task_pollers.localActivityResult).task).attempt - 1) | 0)
				}
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
			return true
		}
		// Backoff could be large and potentially much larger than DecisionTaskTimeout. We cannot just sleep locally for
		// retry. Because it will delay the local activity from complete which keeps the decision task open. In order to
		// keep decision task open, we have to keep "heartbeating" current decision task.
		// In that case, it is more efficient to create a server timer with backoff duration and retry when that backoff
		// timer fires. So here we will return false to indicate we don't need local retry anymore. However, we have to
		// store the current attempt and backoff to the same LocalActivityResultMarker so the replay can do the right thing.
		// The backoff timer will be created by workflow.ExecuteLocalActivity().
		;(lar$ as __goscript_internal_task_pollers.localActivityResult).backoff = __goscriptShadow3

		return false
	}

	public shouldResetStickyOnEviction(): boolean {
		const w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		const w$: workflowExecutionContextImpl = w == null ? $.pointerTarget<workflowExecutionContextImpl>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowExecutionContextImpl>(w)
		// Not all evictions from the cache warrant a call to the server
		// to reset stickiness.
		// Cases when this is redundant or unnecessary include
		// when an error was encountered during execution
		// or workflow simply completed successfully.
		return ((w$ as workflowExecutionContextImpl).err == null) && !(w$ as workflowExecutionContextImpl).isWorkflowCompleted
	}

	public skipReplayCheck(): boolean {
		const w: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = this;
		const w$: workflowExecutionContextImpl = w == null ? $.pointerTarget<workflowExecutionContextImpl>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowExecutionContextImpl>(w)
		return ($.pointerValue<s.PollForDecisionTaskResponse>((w$ as workflowExecutionContextImpl).currentDecisionTask).Query != null) || !isFullHistory($.pointerValue<s.PollForDecisionTaskResponse>((w$ as workflowExecutionContextImpl).currentDecisionTask).History)
	}

	static __typeInfo = $.registerStructType(
		"internal.workflowExecutionContextImpl",
		() => new workflowExecutionContextImpl(),
		() => [$.methodSignature("CompleteDecisionTask", [["workflowTask", /* @__PURE__ */ $.pointerType("internal.workflowTask")], ["waitLocalActivities", /* @__PURE__ */ $.basicType("bool")]], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("GetDecisionTimeout", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("IsDestroyed", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Lock", [], [], true), $.methodSignature("ProcessLocalActivityResult", [["workflowTask", /* @__PURE__ */ $.pointerType("internal.workflowTask")], ["lar", /* @__PURE__ */ $.pointerType("internal.localActivityResult")]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("ProcessWorkflowTask", [["workflowTask", /* @__PURE__ */ $.pointerType("internal.workflowTask")]], [{ kind: $.TypeKind.Interface, methods: [] }, "error"], true), $.methodSignature("ResetIfStale", [["task", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse")], ["historyIterator", "internal.HistoryIterator"]], ["error"], true), $.methodSignature("SetCurrentTask", [["task", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse")]], [], true), $.methodSignature("Unlock", [["err", "error"]], [], true), $.methodSignature("clearCurrentTask", [], [], true), $.methodSignature("clearState", [], [], true), $.methodSignature("completeWorkflow", [["result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], [], true), $.methodSignature("createEventHandler", [], [], true), $.methodSignature("getEventHandler", [], [/* @__PURE__ */ $.pointerType("internal.workflowExecutionEventHandlerImpl")], true), $.methodSignature("getWorkflowPanicIfIllegaleStatePanic", [], [/* @__PURE__ */ $.pointerType("internal.workflowPanicError"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("hasPendingLocalActivityWork", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("onEviction", [], [], true), $.methodSignature("queueResetStickinessTask", [], [], true), $.methodSignature("resetStateIfDestroyed", [["task", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse")], ["historyIterator", "internal.HistoryIterator"]], ["error"], true), $.methodSignature("retryLocalActivity", [["lar", /* @__PURE__ */ $.pointerType("internal.localActivityResult")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("shouldResetStickyOnEviction", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("skipReplayCheck", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		workflowExecutionContextImpl,
		() => [/* @__PURE__ */ $.structField("mutex", "sync.Mutex", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowStartTime", "time.Time", [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowInfo", /* @__PURE__ */ $.pointerType("internal.WorkflowInfo"), [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("wth", /* @__PURE__ */ $.pointerType("internal.workflowTaskHandlerImpl"), [3], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("eventHandler", "atomic.Value", [4], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("isWorkflowCompleted", /* @__PURE__ */ $.basicType("bool"), [5], 64, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 72, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("err", "error", [7], 96, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("previousStartedEventID", /* @__PURE__ */ $.basicType("int64"), [8], 112, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("newDecisions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.Decision")), [9], 120, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("currentDecisionTask", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse"), [10], 144, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("laTunnel", /* @__PURE__ */ $.pointerType("internal.localActivityTunnel"), [11], 152, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("decisionStartTime", "time.Time", [12], 160, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class workflowTaskHandlerImpl {
	public get domain(): string {
		return this._fields.domain
	}

	public set domain(value: string) {
		this._fields.domain = value
	}

	public get metricsScope(): metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null {
		return this._fields.metricsScope
	}

	public set metricsScope(value: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null) {
		this._fields.metricsScope = value
	}

	public get ppMgr(): __goscript_internal_pressure_points.pressurePointMgr | null {
		return this._fields.ppMgr
	}

	public set ppMgr(value: __goscript_internal_pressure_points.pressurePointMgr | null) {
		this._fields.ppMgr = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get identity(): string {
		return this._fields.identity
	}

	public set identity(value: string) {
		this._fields.identity = value
	}

	public get enableLoggingInReplay(): boolean {
		return this._fields.enableLoggingInReplay
	}

	public set enableLoggingInReplay(value: boolean) {
		this._fields.enableLoggingInReplay = value
	}

	public get disableStickyExecution(): boolean {
		return this._fields.disableStickyExecution
	}

	public set disableStickyExecution(value: boolean) {
		this._fields.disableStickyExecution = value
	}

	public get registry(): __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null {
		return this._fields.registry
	}

	public set registry(value: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null) {
		this._fields.registry = value
	}

	public get laTunnel(): __goscript_internal_task_pollers.localActivityTunnel | $.VarRef<__goscript_internal_task_pollers.localActivityTunnel> | null {
		return this._fields.laTunnel
	}

	public set laTunnel(value: __goscript_internal_task_pollers.localActivityTunnel | $.VarRef<__goscript_internal_task_pollers.localActivityTunnel> | null) {
		this._fields.laTunnel = value
	}

	public get nonDeterministicWorkflowPolicy(): __goscript_worker.NonDeterministicWorkflowPolicy {
		return this._fields.nonDeterministicWorkflowPolicy
	}

	public set nonDeterministicWorkflowPolicy(value: __goscript_worker.NonDeterministicWorkflowPolicy) {
		this._fields.nonDeterministicWorkflowPolicy = value
	}

	public get dataConverter(): __goscript_encoded.DataConverter | null {
		return this._fields.dataConverter
	}

	public set dataConverter(value: __goscript_encoded.DataConverter | null) {
		this._fields.dataConverter = value
	}

	public get contextPropagators(): $.Slice<__goscript_headers.ContextPropagator | null> {
		return this._fields.contextPropagators
	}

	public set contextPropagators(value: $.Slice<__goscript_headers.ContextPropagator | null>) {
		this._fields.contextPropagators = value
	}

	public get tracer(): opentracing.Tracer | null {
		return this._fields.tracer
	}

	public set tracer(value: opentracing.Tracer | null) {
		this._fields.tracer = value
	}

	public get workflowInterceptorFactories(): $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null> {
		return this._fields.workflowInterceptorFactories
	}

	public set workflowInterceptorFactories(value: $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>) {
		this._fields.workflowInterceptorFactories = value
	}

	public get disableStrictNonDeterminism(): boolean {
		return this._fields.disableStrictNonDeterminism
	}

	public set disableStrictNonDeterminism(value: boolean) {
		this._fields.disableStrictNonDeterminism = value
	}

	public get featureFlags(): __goscript_internal_utils.FeatureFlags {
		return this._fields.featureFlags
	}

	public set featureFlags(value: __goscript_internal_utils.FeatureFlags) {
		this._fields.featureFlags = value
	}

	public _fields: {
		domain: string
		metricsScope: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null
		ppMgr: __goscript_internal_pressure_points.pressurePointMgr | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		identity: string
		enableLoggingInReplay: boolean
		disableStickyExecution: boolean
		registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null
		laTunnel: __goscript_internal_task_pollers.localActivityTunnel | $.VarRef<__goscript_internal_task_pollers.localActivityTunnel> | null
		nonDeterministicWorkflowPolicy: __goscript_worker.NonDeterministicWorkflowPolicy
		dataConverter: __goscript_encoded.DataConverter | null
		contextPropagators: $.Slice<__goscript_headers.ContextPropagator | null>
		tracer: opentracing.Tracer | null
		workflowInterceptorFactories: $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>
		disableStrictNonDeterminism: boolean
		featureFlags: __goscript_internal_utils.FeatureFlags
	}

	constructor(init?: Partial<{domain?: string, metricsScope?: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null, ppMgr?: __goscript_internal_pressure_points.pressurePointMgr | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null, identity?: string, enableLoggingInReplay?: boolean, disableStickyExecution?: boolean, registry?: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null, laTunnel?: __goscript_internal_task_pollers.localActivityTunnel | $.VarRef<__goscript_internal_task_pollers.localActivityTunnel> | null, nonDeterministicWorkflowPolicy?: __goscript_worker.NonDeterministicWorkflowPolicy, dataConverter?: __goscript_encoded.DataConverter | null, contextPropagators?: $.Slice<__goscript_headers.ContextPropagator | null>, tracer?: opentracing.Tracer | null, workflowInterceptorFactories?: $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>, disableStrictNonDeterminism?: boolean, featureFlags?: __goscript_internal_utils.FeatureFlags}>, __goscriptValue?: boolean) {
		this._fields = {
			domain: init?.domain ?? ("" as string),
			metricsScope: init?.metricsScope ?? (null! as metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null),
			ppMgr: init?.ppMgr ?? (null! as __goscript_internal_pressure_points.pressurePointMgr | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			identity: init?.identity ?? ("" as string),
			enableLoggingInReplay: init?.enableLoggingInReplay ?? (false as boolean),
			disableStickyExecution: init?.disableStickyExecution ?? (false as boolean),
			registry: init?.registry ?? (null! as __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null),
			laTunnel: init?.laTunnel ?? (null! as __goscript_internal_task_pollers.localActivityTunnel | $.VarRef<__goscript_internal_task_pollers.localActivityTunnel> | null),
			nonDeterministicWorkflowPolicy: init?.nonDeterministicWorkflowPolicy ?? (0 as __goscript_worker.NonDeterministicWorkflowPolicy),
			dataConverter: init?.dataConverter ?? (null! as __goscript_encoded.DataConverter | null),
			contextPropagators: init?.contextPropagators ?? (null! as $.Slice<__goscript_headers.ContextPropagator | null>),
			tracer: init?.tracer ?? (null! as opentracing.Tracer | null),
			workflowInterceptorFactories: init?.workflowInterceptorFactories ?? (null! as $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>),
			disableStrictNonDeterminism: init?.disableStrictNonDeterminism ?? (false as boolean),
			featureFlags: init?.featureFlags ? init.featureFlags.clone() : new __goscript_internal_utils.FeatureFlags(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowTaskHandlerImpl {
		return new workflowTaskHandlerImpl(this, true)
	}

	public __goscriptAssign(source: workflowTaskHandlerImpl): void {
		const target = this._fields
		const values = source._fields
		target.domain = values.domain
		target.metricsScope = values.metricsScope
		target.ppMgr = $.assignFieldValue(target.ppMgr, values.ppMgr, "internal.pressurePointMgr")
		target.logger = values.logger
		target.identity = values.identity
		target.enableLoggingInReplay = values.enableLoggingInReplay
		target.disableStickyExecution = values.disableStickyExecution
		target.registry = values.registry
		target.laTunnel = values.laTunnel
		target.nonDeterministicWorkflowPolicy = values.nonDeterministicWorkflowPolicy
		target.dataConverter = $.assignFieldValue(target.dataConverter, values.dataConverter, "internal.DataConverter")
		target.contextPropagators = values.contextPropagators
		target.tracer = $.assignFieldValue(target.tracer, values.tracer, "opentracing.Tracer")
		target.workflowInterceptorFactories = values.workflowInterceptorFactories
		target.disableStrictNonDeterminism = values.disableStrictNonDeterminism
		$.assignStruct(target.featureFlags, values.featureFlags)
	}

	public async ProcessWorkflowTask(workflowTask: workflowTask | $.VarRef<workflowTask> | null, heartbeatFunc: ((response: any, startTime: time.Time) => [workflowTask | $.VarRef<workflowTask> | null, $.GoError] | globalThis.Promise<[workflowTask | $.VarRef<workflowTask> | null, $.GoError]>) | null): globalThis.Promise<[any, $.GoError]> {
		const wth: workflowTaskHandlerImpl | $.VarRef<workflowTaskHandlerImpl> | null = this;
		let completeRequest: any = null! as any
		let errRet: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		if ((workflowTask == null) || ($.pointerValue<workflowTask>(workflowTask).task == null)) {
			return [null, errors.New("nil workflow task provided")]
		}
		let task: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null = $.pointerValue<workflowTask>(workflowTask).task
		let task$: s.PollForDecisionTaskResponse = task == null ? $.pointerTarget<s.PollForDecisionTaskResponse>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<s.PollForDecisionTaskResponse>(task)
		if (((task$ as s.PollForDecisionTaskResponse).History == null) || ($.sliceLen($.pointerValue<s.History>((task$ as s.PollForDecisionTaskResponse).History).Events) == 0)) {
			;(task$ as s.PollForDecisionTaskResponse).History = new s.History({Events: $.arrayToSlice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>([])})
		}
		if (((task$ as s.PollForDecisionTaskResponse).Query == null) && ($.sliceLen($.pointerValue<s.History>((task$ as s.PollForDecisionTaskResponse).History).Events) == 0)) {
			return [null, errors.New("nil or empty history")]
		}

		if (((task$ as s.PollForDecisionTaskResponse).Query != null) && ($.len((task$ as s.PollForDecisionTaskResponse).Queries) != 0)) {
			return [null, errors.New("invalid query decision task")]
		}

		let runID = s.WorkflowExecution.prototype.GetRunId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)
		let workflowID = s.WorkflowExecution.prototype.GetWorkflowId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)
		await traceLog($.functionValue(async (): globalThis.Promise<void> => {
			await zap.Logger.prototype.Debug.call($.pointerValue<workflowTaskHandlerImpl>(wth).logger, "Processing new workflow task.", $.arrayToSlice<zap.Field>([zap.String("WorkflowType", s.WorkflowType.prototype.GetName.call((task$ as s.PollForDecisionTaskResponse).WorkflowType)), zap.String("WorkflowID", workflowID), zap.String("RunID", runID), zap.Int64("PreviousStartedEventId", (task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as s.PollForDecisionTaskResponse).GetPreviousStartedEventId() : s.PollForDecisionTaskResponse.prototype.GetPreviousStartedEventId.call(task)))]))
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))

		let __goscriptTuple5: any = await (wth !== null && (wth as any).__isVarRef !== true && (wth as any).__goValue === undefined ? ((wth as any) as workflowTaskHandlerImpl).getOrCreateWorkflowContext(task, $.pointerValue<workflowTask>(workflowTask).historyIterator) : workflowTaskHandlerImpl.prototype.getOrCreateWorkflowContext.call(wth, task, $.pointerValue<workflowTask>(workflowTask).historyIterator))
		let workflowContext: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = __goscriptTuple5[0]
		let err = __goscriptTuple5[1]
		let workflowContext$: workflowExecutionContextImpl = workflowContext == null ? $.pointerTarget<workflowExecutionContextImpl>(workflowContext) : (workflowContext as any).__isVarRef === true ? (workflowContext as any).value : (workflowContext as any).__goValue === undefined ? (workflowContext as any) : $.pointerTarget<workflowExecutionContextImpl>(workflowContext)
		if (err != null) {
			return [null, err]
		}

		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await (workflowContext !== null && (workflowContext as any).__isVarRef !== true && (workflowContext as any).__goValue === undefined ? ((workflowContext as any) as workflowExecutionContextImpl).Unlock(errRet) : workflowExecutionContextImpl.prototype.Unlock.call(workflowContext, errRet))
		})() })

		// laStopCh is closed when the worker starts shutting down. At that point the
		// local activity pool stops accepting tasks, so a pending local activity (and
		// any retry) can no longer be dispatched and its result will never arrive.
		// Without this signal the loop below would keep heartbeating the decision task
		// until the server's decisionHeartbeatTimeout (default 30m). laTunnel is nil
		// during history replay (no worker); a nil channel never selects, leaving the
		// replay path unchanged.
		let laStopCh: $.Channel<{}> | null = null! as $.Channel<{}> | null
		if ((workflowContext$ as workflowExecutionContextImpl).laTunnel != null) {
			laStopCh = $.pointerValue<__goscript_internal_task_pollers.localActivityTunnel>((workflowContext$ as workflowExecutionContextImpl).laTunnel).stopCh
		}

		let response: any = null! as any
		process_Workflow_Loop: while (true) {
			let startTime = $.markAsStructValue($.cloneStructValue(time.Now()))
			let __goscriptTuple6: any = await (workflowContext !== null && (workflowContext as any).__isVarRef !== true && (workflowContext as any).__goValue === undefined ? ((workflowContext as any) as workflowExecutionContextImpl).ProcessWorkflowTask(workflowTask) : workflowExecutionContextImpl.prototype.ProcessWorkflowTask.call(workflowContext, workflowTask))
			response = __goscriptTuple6[0]
			err = __goscriptTuple6[1]
			if ((err == null) && (response == null)) {
				wait_LocalActivity_Loop: while (true) {
					let deadlineToTrigger = $.int64(globalThis.Math.fround(0.800000011920929 * globalThis.Math.fround(globalThis.Number((workflowContext !== null && (workflowContext as any).__isVarRef !== true && (workflowContext as any).__goValue === undefined ? ((workflowContext as any) as workflowExecutionContextImpl).GetDecisionTimeout() : workflowExecutionContextImpl.prototype.GetDecisionTimeout.call(workflowContext))))))
					let delayDuration = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(startTime)).Add(deadlineToTrigger))).Sub($.markAsStructValue($.cloneStructValue(time.Now())))
					const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, any>([
						{
							id: 0,
							isSend: false,
							channel: laStopCh,
							onSelected: async (__goscriptSelect0Result) => {
								return __goscriptSelect0Result
							}
						},
						{
							id: 1,
							isSend: false,
							channel: time.After(delayDuration),
							onSelected: async (__goscriptSelect0Result) => {
								return __goscriptSelect0Result
							}
						},
						{
							id: 2,
							isSend: false,
							channel: $.pointerValue<workflowTask>(workflowTask).laResultCh,
							onSelected: async (__goscriptSelect0Result) => {
								return __goscriptSelect0Result
							}
						}
					], false)
					switch (__goscriptSelect0Value?.id) {
						case 0:
							{
								const __goscriptSelect0Result = __goscriptSelect0Value
								const __goscriptReturn0: [any, $.GoError] = [null, $.interfaceValue<$.GoError>(new decisionHeartbeatError({Message: "worker is shutting down with a pending local activity; abandoning decision task for reschedule"}), "*internal.decisionHeartbeatError", /* @__PURE__ */ $.pointerType("internal.decisionHeartbeatError"))]
								completeRequest = __goscriptReturn0[0]
								errRet = __goscriptReturn0[1]
								await __defer.dispose()
								return [completeRequest, errRet]
								break
							}
						case 1:
							{
								const __goscriptSelect0Result = __goscriptSelect0Value
								let __goscriptTuple7: any = await heartbeatFunc!(await (workflowContext !== null && (workflowContext as any).__isVarRef !== true && (workflowContext as any).__goValue === undefined ? ((workflowContext as any) as workflowExecutionContextImpl).CompleteDecisionTask(workflowTask, false) : workflowExecutionContextImpl.prototype.CompleteDecisionTask.call(workflowContext, workflowTask, false)), $.markAsStructValue($.cloneStructValue(startTime)))
								workflowTask = __goscriptTuple7[0]
								err = __goscriptTuple7[1]
								if (err != null) {
									const __goscriptReturn1: [any, $.GoError] = [null, $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField3 = await fmt.Sprintf("error sending decision heartbeat %v", (err as any)); return new decisionHeartbeatError({Message: __goscriptLiteralField3}) })()), "*internal.decisionHeartbeatError", /* @__PURE__ */ $.pointerType("internal.decisionHeartbeatError"))]
									completeRequest = __goscriptReturn1[0]
									errRet = __goscriptReturn1[1]
									await __defer.dispose()
									return [completeRequest, errRet]
								}
								if (workflowTask == null) {
									const __goscriptReturn2: [any, $.GoError] = [null, null]
									completeRequest = __goscriptReturn2[0]
									errRet = __goscriptReturn2[1]
									await __defer.dispose()
									return [completeRequest, errRet]
								}
								continue process_Workflow_Loop
								break
							}
						case 2:
							{
								const __goscriptSelect0Result = __goscriptSelect0Value
								let lar = __goscriptSelect0Result.value
								let __goscriptTuple8: any = await (workflowContext !== null && (workflowContext as any).__isVarRef !== true && (workflowContext as any).__goValue === undefined ? ((workflowContext as any) as workflowExecutionContextImpl).ProcessLocalActivityResult(workflowTask, lar) : workflowExecutionContextImpl.prototype.ProcessLocalActivityResult.call(workflowContext, workflowTask, lar))
								response = __goscriptTuple8[0]
								err = __goscriptTuple8[1]
								if ((err == null) && (response == null)) {
									// decision task is not done yet, still waiting for more local activities
									continue wait_LocalActivity_Loop
								}
								break process_Workflow_Loop
								break
							}
					}
				}
			} else {
				break process_Workflow_Loop
			}
		}
		const __goscriptReturn3: [any, $.GoError] = [response, err]
		completeRequest = __goscriptReturn3[0]
		errRet = __goscriptReturn3[1]
		await __defer.dispose()
		return [completeRequest, errRet]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async completeWorkflow(eventHandler: __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl | $.VarRef<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl> | null, task: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null, workflowContext: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null, decisions: $.Slice<s.Decision | $.VarRef<s.Decision> | null>, forceNewDecision: boolean): globalThis.Promise<any> {
		const wth: workflowTaskHandlerImpl | $.VarRef<workflowTaskHandlerImpl> | null = this;
		const wth$: workflowTaskHandlerImpl = wth == null ? $.pointerTarget<workflowTaskHandlerImpl>(wth) : (wth as any).__isVarRef === true ? (wth as any).value : (wth as any).__goValue === undefined ? (wth as any) : $.pointerTarget<workflowTaskHandlerImpl>(wth)
		const task$: s.PollForDecisionTaskResponse = task == null ? $.pointerTarget<s.PollForDecisionTaskResponse>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<s.PollForDecisionTaskResponse>(task)
		const workflowContext$: workflowExecutionContextImpl = workflowContext == null ? $.pointerTarget<workflowExecutionContextImpl>(workflowContext) : (workflowContext as any).__isVarRef === true ? (workflowContext as any).value : (workflowContext as any).__goValue === undefined ? (workflowContext as any) : $.pointerTarget<workflowExecutionContextImpl>(workflowContext)

		// for query task
		if ((task$ as s.PollForDecisionTaskResponse).Query != null) {
			let queryCompletedRequest: s.RespondQueryTaskCompletedRequest | $.VarRef<s.RespondQueryTaskCompletedRequest> | null = new s.RespondQueryTaskCompletedRequest({TaskToken: (task$ as s.PollForDecisionTaskResponse).TaskToken})
			let queryCompletedRequest$: s.RespondQueryTaskCompletedRequest = queryCompletedRequest == null ? $.pointerTarget<s.RespondQueryTaskCompletedRequest>(queryCompletedRequest) : (queryCompletedRequest as any).__isVarRef === true ? (queryCompletedRequest as any).value : (queryCompletedRequest as any).__goValue === undefined ? (queryCompletedRequest as any) : $.pointerTarget<s.RespondQueryTaskCompletedRequest>(queryCompletedRequest)
			{
				let __goscriptTuple9: any = $.typeAssertTuple<__goscript_error.PanicError | $.VarRef<__goscript_error.PanicError> | null>((workflowContext$ as workflowExecutionContextImpl).err, /* @__PURE__ */ $.pointerType("internal.PanicError"))
				let panicErr: __goscript_error.PanicError | $.VarRef<__goscript_error.PanicError> | null = __goscriptTuple9[0]
				let ok = __goscriptTuple9[1]
				if (ok) {
					// NOTE: this code path should never be executed, we should check for workflowPanicError instead of PanicError
					await zap.Logger.prototype.Warn.call((wth$ as workflowTaskHandlerImpl).logger, "Encountered PanicError in workflow query task", $.arrayToSlice<zap.Field>([zap.String("WorkflowID", s.WorkflowExecution.prototype.GetWorkflowId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)), zap.String("RunID", s.WorkflowExecution.prototype.GetRunId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)), zap.String("PanicError", await (panicErr !== null && (panicErr as any).__isVarRef !== true && (panicErr as any).__goValue === undefined ? ((panicErr as any) as __goscript_error.PanicError).Error() : __goscript_error.PanicError.prototype.Error.call(panicErr))), zap.String("PanicStack", (panicErr !== null && (panicErr as any).__isVarRef !== true && (panicErr as any).__goValue === undefined ? ((panicErr as any) as __goscript_error.PanicError).StackTrace() : __goscript_error.PanicError.prototype.StackTrace.call(panicErr)))]));

					;(queryCompletedRequest$ as s.RespondQueryTaskCompletedRequest).CompletedType = common.QueryTaskCompletedTypePtr(1);
					;(queryCompletedRequest$ as s.RespondQueryTaskCompletedRequest).ErrorMessage = common.StringPtr($.concatString("Workflow panic: ", await (panicErr !== null && (panicErr as any).__isVarRef !== true && (panicErr as any).__goValue === undefined ? ((panicErr as any) as __goscript_error.PanicError).Error() : __goscript_error.PanicError.prototype.Error.call(panicErr))))
					return $.interfaceValue(queryCompletedRequest, "*shared.RespondQueryTaskCompletedRequest", /* @__PURE__ */ $.pointerType("shared.RespondQueryTaskCompletedRequest"))
				}
			}

			{
				let __goscriptTuple10: any = $.typeAssertTuple<__goscript_error.workflowPanicError | $.VarRef<__goscript_error.workflowPanicError> | null>((workflowContext$ as workflowExecutionContextImpl).err, /* @__PURE__ */ $.pointerType("internal.workflowPanicError"))
				let workflowPanicErr: __goscript_error.workflowPanicError | $.VarRef<__goscript_error.workflowPanicError> | null = __goscriptTuple10[0]
				let ok = __goscriptTuple10[1]
				if (ok) {
					// NOTE: in this case we should return complete query task with CompletedTypeFailed
					// but we didn't check for the right error type before, this may break existing customer
					await zap.Logger.prototype.Warn.call((wth$ as workflowTaskHandlerImpl).logger, "Ignored workflow panic error for query, query result may be partial", $.arrayToSlice<zap.Field>([zap.String("WorkflowID", s.WorkflowExecution.prototype.GetWorkflowId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)), zap.String("RunID", s.WorkflowExecution.prototype.GetRunId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)), zap.String("PanicError", await (workflowPanicErr !== null && (workflowPanicErr as any).__isVarRef !== true && (workflowPanicErr as any).__goValue === undefined ? ((workflowPanicErr as any) as __goscript_error.workflowPanicError).Error() : __goscript_error.workflowPanicError.prototype.Error.call(workflowPanicErr))), zap.String("PanicStack", (workflowPanicErr !== null && (workflowPanicErr as any).__isVarRef !== true && (workflowPanicErr as any).__goValue === undefined ? ((workflowPanicErr as any) as __goscript_error.workflowPanicError).StackTrace() : __goscript_error.workflowPanicError.prototype.StackTrace.call(workflowPanicErr))), zap.Int64("PreviousStartedEventID", (task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as s.PollForDecisionTaskResponse).GetPreviousStartedEventId() : s.PollForDecisionTaskResponse.prototype.GetPreviousStartedEventId.call(task)))]))
				}
			}

			let __goscriptTuple11: any = await __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl.prototype.ProcessQuery.call(eventHandler, s.WorkflowQuery.prototype.GetQueryType.call((task$ as s.PollForDecisionTaskResponse).Query), $.pointerValue<s.WorkflowQuery>((task$ as s.PollForDecisionTaskResponse).Query).QueryArgs)
			let result: $.Slice<number> = __goscriptTuple11[0]
			let err = __goscriptTuple11[1]
			if (err != null) {
				;(queryCompletedRequest$ as s.RespondQueryTaskCompletedRequest).CompletedType = common.QueryTaskCompletedTypePtr(1);
				;(queryCompletedRequest$ as s.RespondQueryTaskCompletedRequest).ErrorMessage = common.StringPtr((__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
			} else {
				;(queryCompletedRequest$ as s.RespondQueryTaskCompletedRequest).CompletedType = common.QueryTaskCompletedTypePtr(0);
				;(queryCompletedRequest$ as s.RespondQueryTaskCompletedRequest).QueryResult = result
			}
			return $.interfaceValue(queryCompletedRequest, "*shared.RespondQueryTaskCompletedRequest", /* @__PURE__ */ $.pointerType("shared.RespondQueryTaskCompletedRequest"))
		}

		let metricsScope = await metrics.TaggedScope.prototype.GetTaggedScope.call((wth$ as workflowTaskHandlerImpl).metricsScope, $.arrayToSlice<string>(["WorkflowType", $.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<__goscript_internal_event_handlers.workflowEnvironmentImpl>($.pointerValue<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl>(eventHandler).workflowEnvironmentImpl).workflowInfo).WorkflowType.Name]))

		// fail decision task on decider panic
		{
			let __goscriptTuple12: any = $.typeAssertTuple<__goscript_error.workflowPanicError | $.VarRef<__goscript_error.workflowPanicError> | null>((workflowContext$ as workflowExecutionContextImpl).err, /* @__PURE__ */ $.pointerType("internal.workflowPanicError"))
			let panicErr: __goscript_error.workflowPanicError | $.VarRef<__goscript_error.workflowPanicError> | null = __goscriptTuple12[0]
			let ok = __goscriptTuple12[1]
			if (ok) {
				// Workflow panic
				void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.DecisionTaskPanicCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				await zap.Logger.prototype.Error.call((wth$ as workflowTaskHandlerImpl).logger, "Workflow panic.", $.arrayToSlice<zap.Field>([zap.String("WorkflowType", s.WorkflowType.prototype.GetName.call((task$ as s.PollForDecisionTaskResponse).WorkflowType)), zap.String("WorkflowID", s.WorkflowExecution.prototype.GetWorkflowId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)), zap.String("RunID", s.WorkflowExecution.prototype.GetRunId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)), zap.String("PanicError", await (panicErr !== null && (panicErr as any).__isVarRef !== true && (panicErr as any).__goValue === undefined ? ((panicErr as any) as __goscript_error.workflowPanicError).Error() : __goscript_error.workflowPanicError.prototype.Error.call(panicErr))), zap.String("PanicStack", (panicErr !== null && (panicErr as any).__isVarRef !== true && (panicErr as any).__goValue === undefined ? ((panicErr as any) as __goscript_error.workflowPanicError).StackTrace() : __goscript_error.workflowPanicError.prototype.StackTrace.call(panicErr)))]))
				return $.interfaceValue(await errorToFailDecisionTask((task$ as s.PollForDecisionTaskResponse).TaskToken, $.interfaceValue<$.GoError>(panicErr, "*internal.workflowPanicError", /* @__PURE__ */ $.pointerType("internal.workflowPanicError")), (wth$ as workflowTaskHandlerImpl).identity), "*shared.RespondDecisionTaskFailedRequest", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskFailedRequest"))
			}
		}

		// complete decision task
		let closeDecision: s.Decision | $.VarRef<s.Decision> | null = null! as s.Decision | $.VarRef<s.Decision> | null
		{
			let __goscriptTuple13: any = $.typeAssertTuple<__goscript_error.CanceledError | $.VarRef<__goscript_error.CanceledError> | null>((workflowContext$ as workflowExecutionContextImpl).err, /* @__PURE__ */ $.pointerType("internal.CanceledError"))
			let canceledErr: __goscript_error.CanceledError | $.VarRef<__goscript_error.CanceledError> | null = __goscriptTuple13[0]
			let ok = __goscriptTuple13[1]
			if (ok) {
				// Workflow cancelled
				void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.WorkflowCanceledCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				closeDecision = createNewDecision(6)
				let __goscriptTuple14: any = await __goscript_internal_utils.getErrorDetails($.interfaceValue<$.GoError>(canceledErr, "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError")), (wth$ as workflowTaskHandlerImpl).dataConverter)
				let details: $.Slice<number> = __goscriptTuple14[1]
				$.pointerValue<s.Decision>(closeDecision).CancelWorkflowExecutionDecisionAttributes = new s.CancelWorkflowExecutionDecisionAttributes({Details: details})
			} else {
				{
					let __goscriptTuple15: any = $.typeAssertTuple<__goscript_error.ContinueAsNewError | $.VarRef<__goscript_error.ContinueAsNewError> | null>((workflowContext$ as workflowExecutionContextImpl).err, /* @__PURE__ */ $.pointerType("internal.ContinueAsNewError"))
					let contErr: __goscript_error.ContinueAsNewError | $.VarRef<__goscript_error.ContinueAsNewError> | null = __goscriptTuple15[0]
					let __goscriptShadow4 = __goscriptTuple15[1]
					if (__goscriptShadow4) {
						// Continue as new error.
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.WorkflowContinueAsNewCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						closeDecision = createNewDecision(9)
						let continueAsNewAttr: s.ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<s.ContinueAsNewWorkflowExecutionDecisionAttributes> | null = (() => { const __goscriptLiteralField4 = __goscript_internal_utils.workflowTypePtr($.pointerValue<__goscript_workflow.WorkflowType>($.pointerValue<__goscript_internal_workflow.executeWorkflowParams>($.pointerValue<__goscript_error.ContinueAsNewError>(contErr).params).workflowType)); const __goscriptLiteralField5 = common.TaskListPtr(new s.TaskList({Name: $.pointerValue<__goscript_internal_workflow.executeWorkflowParams>($.pointerValue<__goscript_error.ContinueAsNewError>(contErr).params).workflowOptions.taskListName}, true)); return new s.ContinueAsNewWorkflowExecutionDecisionAttributes({WorkflowType: __goscriptLiteralField4, Input: $.pointerValue<__goscript_internal_workflow.executeWorkflowParams>($.pointerValue<__goscript_error.ContinueAsNewError>(contErr).params).input, TaskList: __goscriptLiteralField5, ExecutionStartToCloseTimeoutSeconds: $.pointerValue<__goscript_internal_workflow.executeWorkflowParams>($.pointerValue<__goscript_error.ContinueAsNewError>(contErr).params).workflowOptions.executionStartToCloseTimeoutSeconds, TaskStartToCloseTimeoutSeconds: $.pointerValue<__goscript_internal_workflow.executeWorkflowParams>($.pointerValue<__goscript_error.ContinueAsNewError>(contErr).params).workflowOptions.taskStartToCloseTimeoutSeconds, Header: $.pointerValue<__goscript_internal_workflow.executeWorkflowParams>($.pointerValue<__goscript_error.ContinueAsNewError>(contErr).params).header, Memo: $.pointerValue<__goscript_workflow.WorkflowInfo>((workflowContext$ as workflowExecutionContextImpl).workflowInfo).Memo, SearchAttributes: $.pointerValue<__goscript_workflow.WorkflowInfo>((workflowContext$ as workflowExecutionContextImpl).workflowInfo).SearchAttributes, RetryPolicy: $.pointerValue<__goscript_workflow.WorkflowInfo>((workflowContext$ as workflowExecutionContextImpl).workflowInfo).RetryPolicy}) })()
						if ($.stringLen($.pointerValue<__goscript_internal_workflow.executeWorkflowParams>($.pointerValue<__goscript_error.ContinueAsNewError>(contErr).params).workflowOptions.cronSchedule) > 0) {
							$.pointerValue<s.ContinueAsNewWorkflowExecutionDecisionAttributes>(continueAsNewAttr).CronSchedule = common.StringPtr($.pointerValue<__goscript_internal_workflow.executeWorkflowParams>($.pointerValue<__goscript_error.ContinueAsNewError>(contErr).params).workflowOptions.cronSchedule)
						}
						$.pointerValue<s.Decision>(closeDecision).ContinueAsNewWorkflowExecutionDecisionAttributes = continueAsNewAttr
					} else {
						if ((workflowContext$ as workflowExecutionContextImpl).err != null) {
							// Workflow failures
							void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.WorkflowFailedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							closeDecision = createNewDecision(4)
							let __goscriptTuple16: any = await __goscript_internal_utils.getErrorDetails((workflowContext$ as workflowExecutionContextImpl).err, (wth$ as workflowTaskHandlerImpl).dataConverter)
							let reason = __goscriptTuple16[0]
							let details: $.Slice<number> = __goscriptTuple16[1]
							$.pointerValue<s.Decision>(closeDecision).FailWorkflowExecutionDecisionAttributes = (() => { const __goscriptLiteralField6 = common.StringPtr(reason); return new s.FailWorkflowExecutionDecisionAttributes({Reason: __goscriptLiteralField6, Details: details}) })()
						} else {
							if ((workflowContext$ as workflowExecutionContextImpl).isWorkflowCompleted) {
								// Workflow completion
								void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.WorkflowCompletedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								closeDecision = createNewDecision(3)
								$.pointerValue<s.Decision>(closeDecision).CompleteWorkflowExecutionDecisionAttributes = new s.CompleteWorkflowExecutionDecisionAttributes({Result: (workflowContext$ as workflowExecutionContextImpl).result})
							}
						}
					}
				}
			}
		}

		if (closeDecision != null) {
			decisions = $.appendOne(decisions, closeDecision, $.appendZeros.nil)
			let elapsed = time.Since($.markAsStructValue($.cloneStructValue((workflowContext$ as workflowExecutionContextImpl).workflowStartTime)))
			await metrics.EmitLatency(metricsScope, metrics.WorkflowEndToEndLatency, elapsed, ($.pointerValue<metrics.SubsettableHistogram>(metrics.High1ms24h)).clone())
			forceNewDecision = false
		}

		let queryResults: globalThis.Map<string, s.WorkflowQueryResult | $.VarRef<s.WorkflowQueryResult> | null> | null = null! as globalThis.Map<string, s.WorkflowQueryResult | $.VarRef<s.WorkflowQueryResult> | null> | null
		if ($.len((task$ as s.PollForDecisionTaskResponse).Queries) != 0) {
			queryResults = $.makeMap<string, s.WorkflowQueryResult | $.VarRef<s.WorkflowQueryResult> | null>()
			for (let [queryID, query] of (task$ as s.PollForDecisionTaskResponse).Queries?.entries() ?? []) {
				let __goscriptTuple17: any = await __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl.prototype.ProcessQuery.call(eventHandler, (query !== null && (query as any).__isVarRef !== true && (query as any).__goValue === undefined ? ((query as any) as s.WorkflowQuery).GetQueryType() : s.WorkflowQuery.prototype.GetQueryType.call(query)), $.pointerValue<s.WorkflowQuery>(query).QueryArgs)
				let result: $.Slice<number> = __goscriptTuple17[0]
				let err = __goscriptTuple17[1]
				if (err != null) {
					$.mapSet(queryResults, queryID, (await (async () => { const __goscriptLiteralField7 = common.QueryResultTypePtr(1); const __goscriptLiteralField8 = common.StringPtr((__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)); return new s.WorkflowQueryResult({ResultType: __goscriptLiteralField7, ErrorMessage: __goscriptLiteralField8}) })()))
				} else {
					$.mapSet(queryResults, queryID, (() => { const __goscriptLiteralField9 = common.QueryResultTypePtr(0); return new s.WorkflowQueryResult({ResultType: __goscriptLiteralField9, Answer: result}) })())
				}
			}
		}

		return $.interfaceValue((await (async () => { const __goscriptLiteralField10 = common.StringPtr((wth$ as workflowTaskHandlerImpl).identity); const __goscriptLiteralField11 = common.BoolPtr(true); const __goscriptLiteralField12 = common.BoolPtr(forceNewDecision); const __goscriptLiteralField13 = common.StringPtr(await __goscript_internal_worker.getBinaryChecksum()); return new s.RespondDecisionTaskCompletedRequest({TaskToken: (task$ as s.PollForDecisionTaskResponse).TaskToken, Decisions: decisions, Identity: __goscriptLiteralField10, ReturnNewDecisionTask: __goscriptLiteralField11, ForceCreateNewDecisionTask: __goscriptLiteralField12, BinaryChecksum: __goscriptLiteralField13, QueryResults: queryResults}) })()), "*shared.RespondDecisionTaskCompletedRequest", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedRequest"))
	}

	public async createWorkflowContext(task: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null): globalThis.Promise<[workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null, $.GoError]> {
		const wth: workflowTaskHandlerImpl | $.VarRef<workflowTaskHandlerImpl> | null = this;
		const task$: s.PollForDecisionTaskResponse = task == null ? $.pointerTarget<s.PollForDecisionTaskResponse>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<s.PollForDecisionTaskResponse>(task)
		let h: s.History | $.VarRef<s.History> | null = (task$ as s.PollForDecisionTaskResponse).History
		let h$: s.History = h == null ? $.pointerTarget<s.History>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<s.History>(h)
		let attributes: s.WorkflowExecutionStartedEventAttributes | $.VarRef<s.WorkflowExecutionStartedEventAttributes> | null = $.pointerValue<s.HistoryEvent>($.arrayIndex((h$ as s.History).Events!, 0)).WorkflowExecutionStartedEventAttributes
		let attributes$: s.WorkflowExecutionStartedEventAttributes = attributes == null ? $.pointerTarget<s.WorkflowExecutionStartedEventAttributes>(attributes) : (attributes as any).__isVarRef === true ? (attributes as any).value : (attributes as any).__goValue === undefined ? (attributes as any) : $.pointerTarget<s.WorkflowExecutionStartedEventAttributes>(attributes)
		if (attributes == null) {
			return [null, errors.New("first history event is not WorkflowExecutionStarted")]
		}
		let taskList: s.TaskList | $.VarRef<s.TaskList> | null = (attributes$ as s.WorkflowExecutionStartedEventAttributes).TaskList
		if (taskList == null) {
			return [null, errors.New("nil TaskList in WorkflowExecutionStarted event")]
		}

		let runID = s.WorkflowExecution.prototype.GetRunId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)
		let workflowID = s.WorkflowExecution.prototype.GetWorkflowId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)

		// Setup workflow Info
		let parentWorkflowExecution: __goscript_workflow.WorkflowExecution | $.VarRef<__goscript_workflow.WorkflowExecution> | null = null! as __goscript_workflow.WorkflowExecution | $.VarRef<__goscript_workflow.WorkflowExecution> | null
		if ((attributes$ as s.WorkflowExecutionStartedEventAttributes).ParentWorkflowExecution != null) {
			parentWorkflowExecution = (() => { const __goscriptLiteralField14 = s.WorkflowExecution.prototype.GetWorkflowId.call((attributes$ as s.WorkflowExecutionStartedEventAttributes).ParentWorkflowExecution); const __goscriptLiteralField15 = s.WorkflowExecution.prototype.GetRunId.call((attributes$ as s.WorkflowExecutionStartedEventAttributes).ParentWorkflowExecution); return new __goscript_workflow.WorkflowExecution({ID: __goscriptLiteralField14, RunID: __goscriptLiteralField15}) })()
		}
		let workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null = (() => { const __goscriptLiteralField16 = (attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as s.WorkflowExecutionStartedEventAttributes).GetOriginalExecutionRunId() : s.WorkflowExecutionStartedEventAttributes.prototype.GetOriginalExecutionRunId.call(attributes)); const __goscriptLiteralField17 = __goscript_internal_utils.flowWorkflowTypeFrom(($.pointerValue<s.WorkflowType>((task$ as s.PollForDecisionTaskResponse).WorkflowType)).clone()); const __goscriptLiteralField18 = (taskList !== null && (taskList as any).__isVarRef !== true && (taskList as any).__goValue === undefined ? ((taskList as any) as s.TaskList).GetName() : s.TaskList.prototype.GetName.call(taskList)); const __goscriptLiteralField19 = (attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as s.WorkflowExecutionStartedEventAttributes).GetExecutionStartToCloseTimeoutSeconds() : s.WorkflowExecutionStartedEventAttributes.prototype.GetExecutionStartToCloseTimeoutSeconds.call(attributes)); const __goscriptLiteralField20 = (attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as s.WorkflowExecutionStartedEventAttributes).GetTaskStartToCloseTimeoutSeconds() : s.WorkflowExecutionStartedEventAttributes.prototype.GetTaskStartToCloseTimeoutSeconds.call(attributes)); const __goscriptLiteralField21 = (attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as s.WorkflowExecutionStartedEventAttributes).GetAttempt() : s.WorkflowExecutionStartedEventAttributes.prototype.GetAttempt.call(attributes)); return new __goscript_workflow.WorkflowInfo({WorkflowExecution: new __goscript_workflow.WorkflowExecution({ID: workflowID, RunID: runID}, true), OriginalRunId: __goscriptLiteralField16, WorkflowType: __goscriptLiteralField17, TaskListName: __goscriptLiteralField18, ExecutionStartToCloseTimeoutSeconds: __goscriptLiteralField19, TaskStartToCloseTimeoutSeconds: __goscriptLiteralField20, Domain: $.pointerValue<workflowTaskHandlerImpl>(wth).domain, Attempt: __goscriptLiteralField21, lastCompletionResult: (attributes$ as s.WorkflowExecutionStartedEventAttributes).LastCompletionResult, CronSchedule: (attributes$ as s.WorkflowExecutionStartedEventAttributes).CronSchedule, ContinuedExecutionRunID: (attributes$ as s.WorkflowExecutionStartedEventAttributes).ContinuedExecutionRunId, ParentWorkflowDomain: (attributes$ as s.WorkflowExecutionStartedEventAttributes).ParentWorkflowDomain, ParentWorkflowExecution: parentWorkflowExecution, Memo: (attributes$ as s.WorkflowExecutionStartedEventAttributes).Memo, SearchAttributes: (attributes$ as s.WorkflowExecutionStartedEventAttributes).SearchAttributes, RetryPolicy: (attributes$ as s.WorkflowExecutionStartedEventAttributes).RetryPolicy}) })()

		let wfStartTime = $.markAsStructValue($.cloneStructValue(time.Unix(0n, s.HistoryEvent.prototype.GetTimestamp.call($.arrayIndex((h$ as s.History).Events!, 0)))))
		return [await newWorkflowExecutionContext(wfStartTime, workflowInfo, wth), null]
	}

	public async executeAnyPressurePoints(event: s.HistoryEvent | $.VarRef<s.HistoryEvent> | null, isInReplay: boolean): globalThis.Promise<$.GoError> {
		const wth: workflowTaskHandlerImpl | $.VarRef<workflowTaskHandlerImpl> | null = this;
		const wth$: workflowTaskHandlerImpl = wth == null ? $.pointerTarget<workflowTaskHandlerImpl>(wth) : (wth as any).__isVarRef === true ? (wth as any).value : (wth as any).__goValue === undefined ? (wth as any) : $.pointerTarget<workflowTaskHandlerImpl>(wth)
		if ((((wth$ as workflowTaskHandlerImpl).ppMgr != null) && !$.markAsStructValue($.cloneStructValue(reflect.ValueOf(((wth$ as workflowTaskHandlerImpl).ppMgr as any)))).IsNil()) && !isInReplay) {
			switch ((event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(event))) {
				case s.EventTypeDecisionTaskStarted:
				{
					return $.pointerValue<Exclude<__goscript_internal_pressure_points.pressurePointMgr, null>>((wth$ as workflowTaskHandlerImpl).ppMgr).Execute("decision-task-start-timeout")
					break
				}
				case s.EventTypeActivityTaskScheduled:
				{
					return $.pointerValue<Exclude<__goscript_internal_pressure_points.pressurePointMgr, null>>((wth$ as workflowTaskHandlerImpl).ppMgr).Execute("activity-task-schedule-timeout")
					break
				}
				case s.EventTypeActivityTaskStarted:
				{
					return $.pointerValue<Exclude<__goscript_internal_pressure_points.pressurePointMgr, null>>((wth$ as workflowTaskHandlerImpl).ppMgr).Execute("activity-task-start-timeout")
					break
				}
				case s.EventTypeDecisionTaskCompleted:
				{
					return $.pointerValue<Exclude<__goscript_internal_pressure_points.pressurePointMgr, null>>((wth$ as workflowTaskHandlerImpl).ppMgr).Execute("decision-task-complete")
					break
				}
			}
		}
		return null
	}

	public async getOrCreateWorkflowContext(task: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null, historyIterator: __goscript_internal_public.HistoryIterator | null): globalThis.Promise<[workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null, $.GoError]> {
		const wth: workflowTaskHandlerImpl | $.VarRef<workflowTaskHandlerImpl> | null = this;
		let workflowContext: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = null! as workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const wth$: workflowTaskHandlerImpl = wth == null ? $.pointerTarget<workflowTaskHandlerImpl>(wth) : (wth as any).__isVarRef === true ? (wth as any).value : (wth as any).__goValue === undefined ? (wth as any) : $.pointerTarget<workflowTaskHandlerImpl>(wth)
		const task$: s.PollForDecisionTaskResponse = task == null ? $.pointerTarget<s.PollForDecisionTaskResponse>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<s.PollForDecisionTaskResponse>(task)
		let metricsScope = await metrics.TaggedScope.prototype.GetTaggedScope.call((wth$ as workflowTaskHandlerImpl).metricsScope, $.arrayToSlice<string>(["WorkflowType", s.WorkflowType.prototype.GetName.call((task$ as s.PollForDecisionTaskResponse).WorkflowType)]))
		const __goscriptDeferArg0 = metricsScope
		__defer.defer(async () => { await (async (metricsScope: tally.Scope | null): globalThis.Promise<void> => {
			if (((err == null) && (workflowContext != null)) && ($.pointerValue<workflowExecutionContextImpl>(workflowContext).laTunnel == null)) {
				$.pointerValue<workflowExecutionContextImpl>(workflowContext).laTunnel = (wth$ as workflowTaskHandlerImpl).laTunnel
			}
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Gauge, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Gauge(metrics.StickyCacheSize), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Update((__goscriptAwait = $.pointerValue<Exclude<cache.Cache, null>>((await getWorkflowCache())).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		})(__goscriptDeferArg0) })

		let runID = s.WorkflowExecution.prototype.GetRunId.call((task$ as s.PollForDecisionTaskResponse).WorkflowExecution)

		let __goscriptShadow5: s.History | $.VarRef<s.History> | null = (task$ as s.PollForDecisionTaskResponse).History
		let __goscriptShadow6 = isFullHistory
		let __goscriptShadow7 = __goscriptShadow6(__goscriptShadow5)

		workflowContext = null
		if (((task$ as s.PollForDecisionTaskResponse).Query == null) || (((task$ as s.PollForDecisionTaskResponse).Query != null) && !__goscriptShadow7)) {
			workflowContext = await getWorkflowContext(runID)
		}

		if (workflowContext != null) {
			await (workflowContext !== null && (workflowContext as any).__isVarRef !== true && (workflowContext as any).__goValue === undefined ? ((workflowContext as any) as workflowExecutionContextImpl).Lock() : workflowExecutionContextImpl.prototype.Lock.call(workflowContext))
			// add new tag on metrics scope with workflow runtime length category
			let scope = (__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Tagged($.makeMap<string, string>([["workflowruntimelength", workflowCategorizedByTimeout(workflowContext)]])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (((task$ as s.PollForDecisionTaskResponse).Query != null) && !__goscriptShadow7) {
				// query task and we have a valid cached state
				void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? (scope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(scope)).Counter(metrics.StickyCacheHit), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				if (s.HistoryEvent.prototype.GetEventId.call($.arrayIndex($.pointerValue<s.History>(__goscriptShadow5).Events!, 0)) == ($.int64Add($.pointerValue<workflowExecutionContextImpl>(workflowContext).previousStartedEventID, 1n))) {
					// non query task and we have a valid cached state
					void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? (scope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(scope)).Counter(metrics.StickyCacheHit), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				} else {
					// non query task and cached state is missing events, we need to discard the cached state and rebuild one.
					await (workflowContext !== null && (workflowContext as any).__isVarRef !== true && (workflowContext as any).__goValue === undefined ? ((workflowContext as any) as workflowExecutionContextImpl).ResetIfStale(task, historyIterator) : workflowExecutionContextImpl.prototype.ResetIfStale.call(workflowContext, task, historyIterator))
				}
			}
		} else {
			if (!__goscriptShadow7) {
				// we are getting partial history task, but cached state was already evicted.
				// we need to reset history so we get events from beginning to replay/rebuild the state
				void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (metricsScope !== null && (metricsScope as any).__isVarRef !== true && (metricsScope as any).__goValue === undefined ? (metricsScope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(metricsScope)).Counter(metrics.StickyCacheMiss), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				{
					let __goscriptTuple18: any = await resetHistory(task, historyIterator)
					__goscriptShadow5 = __goscriptTuple18[0]
					err = __goscriptTuple18[1]
					if (err != null) {
						await __defer.dispose()
						return [workflowContext, err]
					}
				}
			}

			{
				let __goscriptTuple19: any = await (wth !== null && (wth as any).__isVarRef !== true && (wth as any).__goValue === undefined ? ((wth as any) as workflowTaskHandlerImpl).createWorkflowContext(task) : workflowTaskHandlerImpl.prototype.createWorkflowContext.call(wth, task))
				workflowContext = __goscriptTuple19[0]
				err = __goscriptTuple19[1]
				if (err != null) {
					await __defer.dispose()
					return [workflowContext, err]
				}
			}

			if (!(wth$ as workflowTaskHandlerImpl).disableStickyExecution && ((task$ as s.PollForDecisionTaskResponse).Query == null)) {
				let __goscriptTuple20: any = await putWorkflowContext(runID, workflowContext)
				workflowContext = __goscriptTuple20[0]
			}
			await (workflowContext !== null && (workflowContext as any).__isVarRef !== true && (workflowContext as any).__goValue === undefined ? ((workflowContext as any) as workflowExecutionContextImpl).Lock() : workflowExecutionContextImpl.prototype.Lock.call(workflowContext))
		}

		err = await (workflowContext !== null && (workflowContext as any).__isVarRef !== true && (workflowContext as any).__goValue === undefined ? ((workflowContext as any) as workflowExecutionContextImpl).resetStateIfDestroyed(task, historyIterator) : workflowExecutionContextImpl.prototype.resetStateIfDestroyed.call(workflowContext, task, historyIterator))
		if (err != null) {
			await (workflowContext !== null && (workflowContext as any).__isVarRef !== true && (workflowContext as any).__goValue === undefined ? ((workflowContext as any) as workflowExecutionContextImpl).Unlock(err) : workflowExecutionContextImpl.prototype.Unlock.call(workflowContext, err))
		}

		await __defer.dispose()
		return [workflowContext, err]
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"internal.workflowTaskHandlerImpl",
		() => new workflowTaskHandlerImpl(),
		() => [$.methodSignature("ProcessWorkflowTask", [["workflowTask", /* @__PURE__ */ $.pointerType("internal.workflowTask")], ["heartbeatFunc", ({ kind: $.TypeKind.Function, name: "internal.decisionHeartbeatFunc", params: [{ kind: $.TypeKind.Interface, methods: [] }, "time.Time"], results: [/* @__PURE__ */ $.pointerType("internal.workflowTask"), "error"] } as $.FunctionTypeInfo)]], [["completeRequest", { kind: $.TypeKind.Interface, methods: [] }], ["errRet", "error"]], true), $.methodSignature("completeWorkflow", [["eventHandler", /* @__PURE__ */ $.pointerType("internal.workflowExecutionEventHandlerImpl")], ["task", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse")], ["workflowContext", /* @__PURE__ */ $.pointerType("internal.workflowExecutionContextImpl")], ["decisions", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.Decision"))], ["forceNewDecision", /* @__PURE__ */ $.basicType("bool")]], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("createWorkflowContext", [["task", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse")]], [/* @__PURE__ */ $.pointerType("internal.workflowExecutionContextImpl"), "error"], true), $.methodSignature("executeAnyPressurePoints", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")], ["isInReplay", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("getOrCreateWorkflowContext", [["task", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse")], ["historyIterator", "internal.HistoryIterator"]], [["workflowContext", /* @__PURE__ */ $.pointerType("internal.workflowExecutionContextImpl")], ["err", "error"]], true)],
		workflowTaskHandlerImpl,
		() => [/* @__PURE__ */ $.structField("domain", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("metricsScope", /* @__PURE__ */ $.pointerType("metrics.TaggedScope"), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("ppMgr", "internal.pressurePointMgr", [2], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [3], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("identity", /* @__PURE__ */ $.basicType("string"), [4], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("enableLoggingInReplay", /* @__PURE__ */ $.basicType("bool"), [5], 64, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("disableStickyExecution", /* @__PURE__ */ $.basicType("bool"), [6], 65, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("registry", /* @__PURE__ */ $.pointerType("internal.registry"), [7], 72, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("laTunnel", /* @__PURE__ */ $.pointerType("internal.localActivityTunnel"), [8], 80, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("nonDeterministicWorkflowPolicy", /* @__PURE__ */ $.basicType("int", "internal.NonDeterministicWorkflowPolicy"), [9], 88, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("dataConverter", "internal.DataConverter", [10], 96, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("contextPropagators", /* @__PURE__ */ $.sliceType("internal.ContextPropagator"), [11], 112, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("tracer", "opentracing.Tracer", [12], 136, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowInterceptorFactories", /* @__PURE__ */ $.sliceType("internal.WorkflowInterceptorFactory"), [13], 152, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("disableStrictNonDeterminism", /* @__PURE__ */ $.basicType("bool"), [14], 176, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("featureFlags", "internal.FeatureFlags", [15], 184, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class history {
	public get workflowTask(): workflowTask | $.VarRef<workflowTask> | null {
		return this._fields.workflowTask
	}

	public set workflowTask(value: workflowTask | $.VarRef<workflowTask> | null) {
		this._fields.workflowTask = value
	}

	public get eventsHandler(): __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl | $.VarRef<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl> | null {
		return this._fields.eventsHandler
	}

	public set eventsHandler(value: __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl | $.VarRef<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl> | null) {
		this._fields.eventsHandler = value
	}

	public get loadedEvents(): $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null> {
		return this._fields.loadedEvents
	}

	public set loadedEvents(value: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>) {
		this._fields.loadedEvents = value
	}

	public get currentIndex(): number {
		return this._fields.currentIndex
	}

	public set currentIndex(value: number) {
		this._fields.currentIndex = value
	}

	public get nextEventID(): bigint {
		return this._fields.nextEventID
	}

	public set nextEventID(value: bigint) {
		this._fields.nextEventID = value
	}

	public get lastEventID(): bigint {
		return this._fields.lastEventID
	}

	public set lastEventID(value: bigint) {
		this._fields.lastEventID = value
	}

	public get next(): $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null> {
		return this._fields.next
	}

	public set next(value: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>) {
		this._fields.next = value
	}

	public get binaryChecksum(): $.VarRef<string> | null {
		return this._fields.binaryChecksum
	}

	public set binaryChecksum(value: $.VarRef<string> | null) {
		this._fields.binaryChecksum = value
	}

	public _fields: {
		workflowTask: workflowTask | $.VarRef<workflowTask> | null
		eventsHandler: __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl | $.VarRef<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl> | null
		loadedEvents: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>
		currentIndex: number
		nextEventID: bigint
		lastEventID: bigint
		next: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>
		binaryChecksum: $.VarRef<string> | null
	}

	constructor(init?: Partial<{workflowTask?: workflowTask | $.VarRef<workflowTask> | null, eventsHandler?: __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl | $.VarRef<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl> | null, loadedEvents?: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>, currentIndex?: number, nextEventID?: bigint, lastEventID?: bigint, next?: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>, binaryChecksum?: $.VarRef<string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			workflowTask: init?.workflowTask ?? (null! as workflowTask | $.VarRef<workflowTask> | null),
			eventsHandler: init?.eventsHandler ?? (null! as __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl | $.VarRef<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl> | null),
			loadedEvents: init?.loadedEvents ?? (null! as $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>),
			currentIndex: init?.currentIndex ?? (0 as number),
			nextEventID: init?.nextEventID ?? (0n as bigint),
			lastEventID: init?.lastEventID ?? (0n as bigint),
			next: init?.next ?? (null! as $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>),
			binaryChecksum: init?.binaryChecksum ?? (null! as $.VarRef<string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): history {
		return new history(this, true)
	}

	public __goscriptAssign(source: history): void {
		const target = this._fields
		const values = source._fields
		target.workflowTask = values.workflowTask
		target.eventsHandler = values.eventsHandler
		target.loadedEvents = values.loadedEvents
		target.currentIndex = values.currentIndex
		target.nextEventID = values.nextEventID
		target.lastEventID = values.lastEventID
		target.next = values.next
		target.binaryChecksum = values.binaryChecksum
	}

	public GetWorkflowStartedEvent(): [s.HistoryEvent | $.VarRef<s.HistoryEvent> | null, $.GoError] {
		const eh: history | $.VarRef<history> | null = this;
		let events: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null> = $.pointerValue<s.History>($.pointerValue<s.PollForDecisionTaskResponse>($.pointerValue<workflowTask>($.pointerValue<history>(eh).workflowTask).task).History).Events
		if (($.sliceLen(events) == 0) || (s.HistoryEvent.prototype.GetEventType.call($.arrayIndex(events!, 0)) != 0)) {
			return [null, errors.New("unable to find WorkflowExecutionStartedEventAttributes in the history")]
		}
		return [$.arrayIndex(events!, 0), null]
	}

	public async HasNextDecisionEvents(): globalThis.Promise<boolean> {
		const eh: history | $.VarRef<history> | null = this;
		const eh$: history = eh == null ? $.pointerTarget<history>(eh) : (eh as any).__isVarRef === true ? (eh as any).value : (eh as any).__goValue === undefined ? (eh as any) : $.pointerTarget<history>(eh)
		return (($.sliceLen((eh$ as history).next) != 0) || ((eh$ as history).currentIndex != $.sliceLen((eh$ as history).loadedEvents))) || await (eh !== null && (eh as any).__isVarRef !== true && (eh as any).__goValue === undefined ? ((eh as any) as history).hasMoreEvents() : history.prototype.hasMoreEvents.call(eh))
	}

	public async IsNextDecisionFailed(): globalThis.Promise<[boolean, $.VarRef<string> | null, $.GoError]> {
		const eh: history | $.VarRef<history> | null = this;
		let isFailed: boolean = false
		let binaryChecksum: $.VarRef<string> | null = null! as $.VarRef<string> | null
		let err: $.GoError = null! as $.GoError
		const eh$: history = eh == null ? $.pointerTarget<history>(eh) : (eh as any).__isVarRef === true ? (eh as any).value : (eh as any).__goValue === undefined ? (eh as any) : $.pointerTarget<history>(eh)

		let nextIndex = (eh$ as history).currentIndex + 1
		if ((nextIndex >= $.sliceLen((eh$ as history).loadedEvents)) && await (eh !== null && (eh as any).__isVarRef !== true && (eh as any).__goValue === undefined ? ((eh as any) as history).hasMoreEvents() : history.prototype.hasMoreEvents.call(eh))) {
			{
				let __goscriptShadow8 = await (eh !== null && (eh as any).__isVarRef !== true && (eh as any).__goValue === undefined ? ((eh as any) as history).loadMoreEvents() : history.prototype.loadMoreEvents.call(eh))
				if (__goscriptShadow8 != null) {
					return [false, null, __goscriptShadow8]
				}
			}
		}

		if (nextIndex < $.sliceLen((eh$ as history).loadedEvents)) {
			let nextEvent: s.HistoryEvent | $.VarRef<s.HistoryEvent> | null = $.arrayIndex((eh$ as history).loadedEvents!, nextIndex)
			let nextEventType = (nextEvent !== null && (nextEvent as any).__isVarRef !== true && (nextEvent as any).__goValue === undefined ? ((nextEvent as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(nextEvent))
			let __goscriptShadow9 = (nextEventType == 7) || (nextEventType == 8)
			let __goscriptShadow10: $.VarRef<string> | null = null! as $.VarRef<string> | null
			if (nextEventType == 6) {
				__goscriptShadow10 = $.pointerValue<s.DecisionTaskCompletedEventAttributes>($.pointerValue<s.HistoryEvent>(nextEvent).DecisionTaskCompletedEventAttributes).BinaryChecksum
			}
			return [__goscriptShadow9, __goscriptShadow10, null]
		}
		return [false, null, null]
	}

	public IsReplayEvent(event: s.HistoryEvent | $.VarRef<s.HistoryEvent> | null): boolean {
		const eh: history | $.VarRef<history> | null = this;
		return ((event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as s.HistoryEvent).GetEventId() : s.HistoryEvent.prototype.GetEventId.call(event)) <= s.PollForDecisionTaskResponse.prototype.GetPreviousStartedEventId.call($.pointerValue<workflowTask>($.pointerValue<history>(eh).workflowTask).task)) || isDecisionEvent((event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(event)))
	}

	public async NextDecisionEvents(): globalThis.Promise<[$.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>, $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>, $.VarRef<string> | null, $.GoError]> {
		let eh: history | $.VarRef<history> | null = this;
		let result: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null> = null! as $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>
		let markers: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null> = null! as $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>
		let binaryChecksum: $.VarRef<string> | null = null! as $.VarRef<string> | null
		let err: $.GoError = null! as $.GoError
		const eh$: history = eh == null ? $.pointerTarget<history>(eh) : (eh as any).__isVarRef === true ? (eh as any).value : (eh as any).__goValue === undefined ? (eh as any) : $.pointerTarget<history>(eh)
		if ((eh$ as history).next == null) {
			let __goscriptTuple21: any = await (eh !== null && (eh as any).__isVarRef !== true && (eh as any).__goValue === undefined ? ((eh as any) as history).nextDecisionEvents() : history.prototype.nextDecisionEvents.call(eh));
			;(eh$ as history).next = __goscriptTuple21[0]
			err = __goscriptTuple21[2]
			if (err != null) {
				return [result, markers, (eh$ as history).binaryChecksum, err]
			}
		}

		result = (eh$ as history).next
		let checksum = (eh$ as history).binaryChecksum
		if ($.sliceLen(result) > 0) {
			let __goscriptTuple22: any = await (eh !== null && (eh as any).__isVarRef !== true && (eh as any).__goValue === undefined ? ((eh as any) as history).nextDecisionEvents() : history.prototype.nextDecisionEvents.call(eh));
			;(eh$ as history).next = __goscriptTuple22[0]
			markers = __goscriptTuple22[1]
			err = __goscriptTuple22[2]
		}
		return [result, markers, checksum, err]
	}

	public async getMoreEvents(): globalThis.Promise<[s.History | $.VarRef<s.History> | null, $.GoError]> {
		const eh: history | $.VarRef<history> | null = this;
		return $.pointerValue<Exclude<__goscript_internal_public.HistoryIterator, null>>($.pointerValue<workflowTask>($.pointerValue<history>(eh).workflowTask).historyIterator).GetNextPage()
	}

	public async hasMoreEvents(): globalThis.Promise<boolean> {
		const eh: history | $.VarRef<history> | null = this;
		let historyIterator = $.pointerValue<workflowTask>($.pointerValue<history>(eh).workflowTask).historyIterator
		return (historyIterator != null) && (__goscriptAwait = (historyIterator !== null && (historyIterator as any).__isVarRef !== true && (historyIterator as any).__goValue === undefined ? (historyIterator as Exclude<__goscript_internal_public.HistoryIterator, null>) : $.pointerValue<Exclude<__goscript_internal_public.HistoryIterator, null>>(historyIterator)).HasNextPage(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async loadMoreEvents(): globalThis.Promise<$.GoError> {
		let eh: history | $.VarRef<history> | null = this;
		const eh$: history = eh == null ? $.pointerTarget<history>(eh) : (eh as any).__isVarRef === true ? (eh as any).value : (eh as any).__goValue === undefined ? (eh as any) : $.pointerTarget<history>(eh)
		let __goscriptTuple23: any = await (eh !== null && (eh as any).__isVarRef !== true && (eh as any).__goValue === undefined ? ((eh as any) as history).getMoreEvents() : history.prototype.getMoreEvents.call(eh))
		let historyPage: s.History | $.VarRef<s.History> | null = __goscriptTuple23[0]
		let err = __goscriptTuple23[1]
		if (err != null) {
			return err
		}
		;(eh$ as history).loadedEvents = $.appendSlice((eh$ as history).loadedEvents, $.pointerValue<s.History>(historyPage).Events, $.appendZeros.nil)
		if (((eh$ as history).nextEventID == 0n) && ($.sliceLen((eh$ as history).loadedEvents) > 0)) {
			;(eh$ as history).nextEventID = s.HistoryEvent.prototype.GetEventId.call($.arrayIndex((eh$ as history).loadedEvents!, 0))
		}
		return null
	}

	public async nextDecisionEvents(): globalThis.Promise<[$.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>, $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>, $.GoError]> {
		let eh: history | $.VarRef<history> | null = this;
		let nextEvents: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null> = null! as $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>
		let markers: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null> = null! as $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>
		let err: $.GoError = null! as $.GoError
		const eh$: history = eh == null ? $.pointerTarget<history>(eh) : (eh as any).__isVarRef === true ? (eh as any).value : (eh as any).__goValue === undefined ? (eh as any) : $.pointerTarget<history>(eh)
		if (((eh$ as history).currentIndex == $.sliceLen((eh$ as history).loadedEvents)) && !await (eh !== null && (eh as any).__isVarRef !== true && (eh as any).__goValue === undefined ? ((eh as any) as history).hasMoreEvents() : history.prototype.hasMoreEvents.call(eh))) {
			{
				let __goscriptShadow11 = await (eh !== null && (eh as any).__isVarRef !== true && (eh as any).__goValue === undefined ? ((eh as any) as history).verifyAllEventsProcessed() : history.prototype.verifyAllEventsProcessed.call(eh))
				if (__goscriptShadow11 != null) {
					return [null, null, __goscriptShadow11]
				}
			}
			return [$.arrayToSlice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>([]), $.arrayToSlice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>([]), null]
		}

		// Process events

		OrderEvents: while (true) {
			// load more history events if needed
			while ((eh$ as history).currentIndex == $.sliceLen((eh$ as history).loadedEvents)) {
				if (!await (eh !== null && (eh as any).__isVarRef !== true && (eh as any).__goValue === undefined ? ((eh as any) as history).hasMoreEvents() : history.prototype.hasMoreEvents.call(eh))) {
					{
						err = await (eh !== null && (eh as any).__isVarRef !== true && (eh as any).__goValue === undefined ? ((eh as any) as history).verifyAllEventsProcessed() : history.prototype.verifyAllEventsProcessed.call(eh))
						if (err != null) {
							return [nextEvents, markers, err]
						}
					}
					break OrderEvents
				}
				{
					err = await (eh !== null && (eh as any).__isVarRef !== true && (eh as any).__goValue === undefined ? ((eh as any) as history).loadMoreEvents() : history.prototype.loadMoreEvents.call(eh))
					if (err != null) {
						return [nextEvents, markers, err]
					}
				}
			}

			let event: s.HistoryEvent | $.VarRef<s.HistoryEvent> | null = $.arrayIndex((eh$ as history).loadedEvents!, (eh$ as history).currentIndex)
			let eventID = (event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as s.HistoryEvent).GetEventId() : s.HistoryEvent.prototype.GetEventId.call(event))
			if (eventID != (eh$ as history).nextEventID) {
				err = fmt.Errorf("missing history events, expectedNextEventID=%v but receivedNextEventID=%v", $.basicInterfaceValue((eh$ as history).nextEventID, "int64"), $.basicInterfaceValue(eventID, "int64"))
				return [nextEvents, markers, err]
			}

			;(eh$ as history).nextEventID++

			switch ((event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(event))) {
				case s.EventTypeDecisionTaskStarted:
				{
					let [isFailed, binaryChecksum, err1] = await (eh !== null && (eh as any).__isVarRef !== true && (eh as any).__goValue === undefined ? ((eh as any) as history).IsNextDecisionFailed() : history.prototype.IsNextDecisionFailed.call(eh))
					if (err1 != null) {
						err = err1
						return [nextEvents, markers, err]
					}
					if (!isFailed) {
						;(eh$ as history).binaryChecksum = binaryChecksum;
						;(eh$ as history).currentIndex++
						nextEvents = $.appendOne(nextEvents, event, $.appendZeros.nil)
						break OrderEvents
					}
					break
				}
				case s.EventTypeDecisionTaskScheduled:
				case s.EventTypeDecisionTaskTimedOut:
				case s.EventTypeDecisionTaskFailed:
				{
					break
				}
				default:
				{
					if (isPreloadMarkerEvent(event)) {
						markers = $.appendOne(markers, event, $.appendZeros.nil)
					}
					nextEvents = $.appendOne(nextEvents, event, $.appendZeros.nil)
					break
				}
			}
			;(eh$ as history).currentIndex++
		}

		// shrink loaded events so it can be GCed
		;(eh$ as history).loadedEvents = $.goSlice((eh$ as history).loadedEvents, (eh$ as history).currentIndex, undefined);
		;(eh$ as history).currentIndex = 0

		return [nextEvents, markers, null]
	}

	public async verifyAllEventsProcessed(): globalThis.Promise<$.GoError> {
		const eh: history | $.VarRef<history> | null = this;
		const eh$: history = eh == null ? $.pointerTarget<history>(eh) : (eh as any).__isVarRef === true ? (eh as any).value : (eh as any).__goValue === undefined ? (eh as any) : $.pointerTarget<history>(eh)
		if (((eh$ as history).lastEventID > 0n) && ((eh$ as history).nextEventID <= (eh$ as history).lastEventID)) {
			return fmt.Errorf("history_events: premature end of stream, expectedLastEventID=%v but no more events after eventID=%v", $.basicInterfaceValue((eh$ as history).lastEventID, "int64"), $.basicInterfaceValue($.int64Sub((eh$ as history).nextEventID, 1n), "int64"))
		}
		if (((eh$ as history).lastEventID > 0n) && ((eh$ as history).nextEventID != ($.int64Add((eh$ as history).lastEventID, 1n)))) {
			await zap.Logger.prototype.Warn.call($.pointerValue<__goscript_internal_event_handlers.workflowEnvironmentImpl>($.pointerValue<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl>((eh$ as history).eventsHandler).workflowEnvironmentImpl).logger, "history_events: processed events past the expected lastEventID", $.arrayToSlice<zap.Field>([zap.Int64("expectedLastEventID", (eh$ as history).lastEventID), zap.Int64("processedLastEventID", $.int64Sub((eh$ as history).nextEventID, 1n))]))
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"internal.history",
		() => new history(),
		() => [$.methodSignature("GetWorkflowStartedEvent", [], [/* @__PURE__ */ $.pointerType("shared.HistoryEvent"), "error"], true), $.methodSignature("HasNextDecisionEvents", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsNextDecisionFailed", [], [["isFailed", /* @__PURE__ */ $.basicType("bool")], ["binaryChecksum", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))], ["err", "error"]], true), $.methodSignature("IsReplayEvent", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("NextDecisionEvents", [], [["result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.HistoryEvent"))], ["markers", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.HistoryEvent"))], ["binaryChecksum", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))], ["err", "error"]], true), $.methodSignature("getMoreEvents", [], [/* @__PURE__ */ $.pointerType("shared.History"), "error"], true), $.methodSignature("hasMoreEvents", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("loadMoreEvents", [], ["error"], true), $.methodSignature("nextDecisionEvents", [], [["nextEvents", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.HistoryEvent"))], ["markers", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.HistoryEvent"))], ["err", "error"]], true), $.methodSignature("verifyAllEventsProcessed", [], ["error"], true)],
		history,
		() => [/* @__PURE__ */ $.structField("workflowTask", /* @__PURE__ */ $.pointerType("internal.workflowTask"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("eventsHandler", /* @__PURE__ */ $.pointerType("internal.workflowExecutionEventHandlerImpl"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("loadedEvents", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.HistoryEvent")), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("currentIndex", /* @__PURE__ */ $.basicType("int"), [3], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("nextEventID", /* @__PURE__ */ $.basicType("int64"), [4], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("lastEventID", /* @__PURE__ */ $.basicType("int64"), [5], 56, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("next", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("shared.HistoryEvent")), [6], 64, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("binaryChecksum", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [7], 88, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class decisionHeartbeatError {
	public get Message(): string {
		return this._fields.Message
	}

	public set Message(value: string) {
		this._fields.Message = value
	}

	public _fields: {
		Message: string
	}

	constructor(init?: Partial<{Message?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Message: init?.Message ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): decisionHeartbeatError {
		return new decisionHeartbeatError(this, true)
	}

	public __goscriptAssign(source: decisionHeartbeatError): void {
		const target = this._fields
		const values = source._fields
		target.Message = values.Message
	}

	public Error(): string {
		const e = this;
		return e.Message
	}

	static __typeInfo = $.registerStructType(
		"internal.decisionHeartbeatError",
		() => new decisionHeartbeatError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		decisionHeartbeatError,
		() => [/* @__PURE__ */ $.structField("Message", /* @__PURE__ */ $.basicType("string"), [0], 0, true)]
	)
}

export class cadenceInvoker {
	public get Mutex(): sync.Mutex {
		return this._fields.Mutex
	}

	public set Mutex(value: sync.Mutex) {
		this._fields.Mutex = value
	}

	public get identity(): string {
		return this._fields.identity
	}

	public set identity(value: string) {
		this._fields.identity = value
	}

	public get service(): workflowserviceclient.Interface | null {
		return this._fields.service
	}

	public set service(value: workflowserviceclient.Interface | null) {
		this._fields.service = value
	}

	public get taskToken(): $.Slice<number> {
		return this._fields.taskToken
	}

	public set taskToken(value: $.Slice<number>) {
		this._fields.taskToken = value
	}

	public get cancelHandler(): (() => void) | null {
		return this._fields.cancelHandler
	}

	public set cancelHandler(value: (() => void) | null) {
		this._fields.cancelHandler = value
	}

	public get heartBeatTimeoutInSec(): number {
		return this._fields.heartBeatTimeoutInSec
	}

	public set heartBeatTimeoutInSec(value: number) {
		this._fields.heartBeatTimeoutInSec = value
	}

	public get hbBatchEndTimer(): time.Timer | $.VarRef<time.Timer> | null {
		return this._fields.hbBatchEndTimer
	}

	public set hbBatchEndTimer(value: time.Timer | $.VarRef<time.Timer> | null) {
		this._fields.hbBatchEndTimer = value
	}

	public get detailsToReport(): $.VarRef<$.Slice<number>> | null {
		return this._fields.detailsToReport
	}

	public set detailsToReport(value: $.VarRef<$.Slice<number>> | null) {
		this._fields.detailsToReport = value
	}

	public get lastDetailsReported(): $.VarRef<$.Slice<number>> | null {
		return this._fields.lastDetailsReported
	}

	public set lastDetailsReported(value: $.VarRef<$.Slice<number>> | null) {
		this._fields.lastDetailsReported = value
	}

	public get closeCh(): $.Channel<{}> | null {
		return this._fields.closeCh
	}

	public set closeCh(value: $.Channel<{}> | null) {
		this._fields.closeCh = value
	}

	public get workerStopChannel(): $.Channel<{}> | null {
		return this._fields.workerStopChannel
	}

	public set workerStopChannel(value: $.Channel<{}> | null) {
		this._fields.workerStopChannel = value
	}

	public get featureFlags(): __goscript_internal_utils.FeatureFlags {
		return this._fields.featureFlags
	}

	public set featureFlags(value: __goscript_internal_utils.FeatureFlags) {
		this._fields.featureFlags = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get workflowType(): string {
		return this._fields.workflowType
	}

	public set workflowType(value: string) {
		this._fields.workflowType = value
	}

	public get activityType(): string {
		return this._fields.activityType
	}

	public set activityType(value: string) {
		this._fields.activityType = value
	}

	public _fields: {
		Mutex: sync.Mutex
		identity: string
		service: workflowserviceclient.Interface | null
		taskToken: $.Slice<number>
		cancelHandler: (() => void) | null
		heartBeatTimeoutInSec: number
		hbBatchEndTimer: time.Timer | $.VarRef<time.Timer> | null
		detailsToReport: $.VarRef<$.Slice<number>> | null
		lastDetailsReported: $.VarRef<$.Slice<number>> | null
		closeCh: $.Channel<{}> | null
		workerStopChannel: $.Channel<{}> | null
		featureFlags: __goscript_internal_utils.FeatureFlags
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		workflowType: string
		activityType: string
	}

	constructor(init?: Partial<{Mutex?: sync.Mutex, identity?: string, service?: workflowserviceclient.Interface | null, taskToken?: $.Slice<number>, cancelHandler?: (() => void) | null, heartBeatTimeoutInSec?: number, hbBatchEndTimer?: time.Timer | $.VarRef<time.Timer> | null, detailsToReport?: $.VarRef<$.Slice<number>> | null, lastDetailsReported?: $.VarRef<$.Slice<number>> | null, closeCh?: $.Channel<{}> | null, workerStopChannel?: $.Channel<{}> | null, featureFlags?: __goscript_internal_utils.FeatureFlags, logger?: zap.Logger | $.VarRef<zap.Logger> | null, workflowType?: string, activityType?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Mutex: init?.Mutex ? $.markAsStructValue($.cloneStructValue(init.Mutex)) : $.markAsStructValue(new sync.Mutex()),
			identity: init?.identity ?? ("" as string),
			service: init?.service ?? (null! as workflowserviceclient.Interface | null),
			taskToken: init?.taskToken ?? (null! as $.Slice<number>),
			cancelHandler: init?.cancelHandler ?? (null! as (() => void) | null),
			heartBeatTimeoutInSec: init?.heartBeatTimeoutInSec ?? (0 as number),
			hbBatchEndTimer: init?.hbBatchEndTimer ?? (null! as time.Timer | $.VarRef<time.Timer> | null),
			detailsToReport: init?.detailsToReport ?? (null! as $.VarRef<$.Slice<number>> | null),
			lastDetailsReported: init?.lastDetailsReported ?? (null! as $.VarRef<$.Slice<number>> | null),
			closeCh: init?.closeCh ?? (null! as $.Channel<{}> | null),
			workerStopChannel: init?.workerStopChannel ?? (null! as $.Channel<{}> | null),
			featureFlags: init?.featureFlags ? init.featureFlags.clone() : new __goscript_internal_utils.FeatureFlags(undefined, true),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			workflowType: init?.workflowType ?? ("" as string),
			activityType: init?.activityType ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): cadenceInvoker {
		return new cadenceInvoker(this, true)
	}

	public __goscriptAssign(source: cadenceInvoker): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Mutex, values.Mutex)
		target.identity = values.identity
		target.service = $.assignFieldValue(target.service, values.service, "workflowserviceclient.Interface")
		target.taskToken = values.taskToken
		target.cancelHandler = values.cancelHandler
		target.heartBeatTimeoutInSec = values.heartBeatTimeoutInSec
		target.hbBatchEndTimer = values.hbBatchEndTimer
		target.detailsToReport = values.detailsToReport
		target.lastDetailsReported = values.lastDetailsReported
		target.closeCh = values.closeCh
		target.workerStopChannel = values.workerStopChannel
		$.assignStruct(target.featureFlags, values.featureFlags)
		target.logger = values.logger
		target.workflowType = values.workflowType
		target.activityType = values.activityType
	}

	public async BackgroundHeartbeat(): globalThis.Promise<$.GoError> {
		let i: cadenceInvoker | $.VarRef<cadenceInvoker> | null = this;
		using __defer = new $.DisposableStack()
		const i$: cadenceInvoker = i == null ? $.pointerTarget<cadenceInvoker>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<cadenceInvoker>(i)
		await (i$ as cadenceInvoker).Mutex.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((i$ as cadenceInvoker).Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		if ((i$ as cadenceInvoker).hbBatchEndTimer != null) {
			if ((i$ as cadenceInvoker).detailsToReport == null) {
				;(i$ as cadenceInvoker).detailsToReport = (i$ as cadenceInvoker).lastDetailsReported
			}

			return null
		}

		let details: $.Slice<number> = null! as $.Slice<number>
		if ((i$ as cadenceInvoker).detailsToReport != null) {
			details = $.pointerValue<$.Slice<number>>((i$ as cadenceInvoker).detailsToReport)
		} else {
			if ((i$ as cadenceInvoker).lastDetailsReported != null) {
				details = $.pointerValue<$.Slice<number>>((i$ as cadenceInvoker).lastDetailsReported)
			}
		}

		return await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as cadenceInvoker).heartbeatAndScheduleNextRun(details) : cadenceInvoker.prototype.heartbeatAndScheduleNextRun.call(i, details))
	}

	public async BatchHeartbeat(__goscriptParam1: $.Slice<number>): globalThis.Promise<$.GoError> {
		let i: cadenceInvoker | $.VarRef<cadenceInvoker> | null = this;
		let details: $.VarRef<$.Slice<number>> = $.varRef(__goscriptParam1)
		using __defer = new $.DisposableStack()
		const i$: cadenceInvoker = i == null ? $.pointerTarget<cadenceInvoker>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<cadenceInvoker>(i)
		await (i$ as cadenceInvoker).Mutex.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((i$ as cadenceInvoker).Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })

		if ((i$ as cadenceInvoker).hbBatchEndTimer != null) {
			// If we have started batching window, keep track of last reported progress.
			;(i$ as cadenceInvoker).detailsToReport = details
			return null
		}

		return await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as cadenceInvoker).heartbeatAndScheduleNextRun(details.value) : cadenceInvoker.prototype.heartbeatAndScheduleNextRun.call(i, details.value))
	}

	public async Close(flushBufferedHeartbeat: boolean): globalThis.Promise<void> {
		let i: cadenceInvoker | $.VarRef<cadenceInvoker> | null = this;
		using __defer = new $.DisposableStack()
		const i$: cadenceInvoker = i == null ? $.pointerTarget<cadenceInvoker>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<cadenceInvoker>(i)
		await (i$ as cadenceInvoker).Mutex.Lock()
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())((i$ as cadenceInvoker).Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })
		void (i$ as cadenceInvoker).closeCh!.close()
		if ((i$ as cadenceInvoker).hbBatchEndTimer != null) {
			time.Timer.prototype.Stop.call($.pointerValue<time.Timer>((i$ as cadenceInvoker).hbBatchEndTimer))
			if (flushBufferedHeartbeat && ((i$ as cadenceInvoker).detailsToReport != null)) {
				await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as cadenceInvoker).internalHeartBeat($.pointerValue<$.Slice<number>>((i$ as cadenceInvoker).detailsToReport)) : cadenceInvoker.prototype.internalHeartBeat.call(i, $.pointerValue<$.Slice<number>>((i$ as cadenceInvoker).detailsToReport)));
				;(i$ as cadenceInvoker).lastDetailsReported = (i$ as cadenceInvoker).detailsToReport;
				;(i$ as cadenceInvoker).detailsToReport = null
			}
		}
	}

	public async Heartbeat(details: $.Slice<number>): globalThis.Promise<$.GoError> {
		const i: cadenceInvoker | $.VarRef<cadenceInvoker> | null = this;
		using __defer = new $.DisposableStack()
		await $.pointerValue<cadenceInvoker>(i).Mutex.Lock()
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<cadenceInvoker>(i).Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee5() })

		let [, err] = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as cadenceInvoker).internalHeartBeat(details) : cadenceInvoker.prototype.internalHeartBeat.call(i, details))
		return err
	}

	public async SignalWorkflow(ctx: context.Context | null, domain: string, workflowID: string, runID: string, signalName: string, signalInput: $.Slice<number>): globalThis.Promise<$.GoError> {
		const i: cadenceInvoker | $.VarRef<cadenceInvoker> | null = this;
		const i$: cadenceInvoker = i == null ? $.pointerTarget<cadenceInvoker>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<cadenceInvoker>(i)
		return signalWorkflow(ctx, (i$ as cadenceInvoker).service, (i$ as cadenceInvoker).identity, domain, workflowID, runID, signalName, signalInput, ((i$ as cadenceInvoker).featureFlags).clone())
	}

	public async heartbeatAndScheduleNextRun(__goscriptParam2: $.Slice<number>): globalThis.Promise<$.GoError> {
		let i: cadenceInvoker | $.VarRef<cadenceInvoker> | null = this;
		let details: $.VarRef<$.Slice<number>> = $.varRef(__goscriptParam2)
		const i$: cadenceInvoker = i == null ? $.pointerTarget<cadenceInvoker>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<cadenceInvoker>(i)
		let [isActivityCancelled, err] = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as cadenceInvoker).internalHeartBeat(details.value) : cadenceInvoker.prototype.internalHeartBeat.call(i, details.value))

		// If the activity is cancelled, the activity can ignore the cancellation and do its work
		// and complete. Our cancellation is co-operative, so we will try to heartbeat.
		if ((err == null) || isActivityCancelled) {
			// We have successfully sent heartbeat, start next batching window.
			;(i$ as cadenceInvoker).lastDetailsReported = details;
			;(i$ as cadenceInvoker).detailsToReport = null

			// Create timer to fire before the threshold to report.
			let deadlineToTrigger = (i$ as cadenceInvoker).heartBeatTimeoutInSec
			if (deadlineToTrigger <= 0) {
				// If we don't have any heartbeat timeout configured.
				deadlineToTrigger = 600
			}

			// We set a deadline at 80% of the timeout.
			let duration = $.int64Mul($.int64(globalThis.Math.fround(0.800000011920929 * globalThis.Math.fround(deadlineToTrigger))), 1000000000n);
			;(i$ as cadenceInvoker).hbBatchEndTimer = time.NewTimer(duration)

			queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
				const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
					{
						id: 0,
						isSend: false,
						channel: $.pointerValue<time.Timer>((i$ as cadenceInvoker).hbBatchEndTimer).C,
					},
					{
						id: 1,
						isSend: false,
						channel: (i$ as cadenceInvoker).workerStopChannel,
					},
					{
						id: 2,
						isSend: false,
						channel: (i$ as cadenceInvoker).closeCh,
						onSelected: async (__goscriptSelect1Result) => {
							return $.selectVoidReturn()
						}
					}
				], false)
				if (__goscriptSelect1HasReturn) {
					return __goscriptSelect1Value
				}

				// We close the batch and report the progress.
				let detailsToReport: $.VarRef<$.Slice<number>> | null = null! as $.VarRef<$.Slice<number>> | null

				await (i$ as cadenceInvoker).Mutex.Lock()
				detailsToReport = (i$ as cadenceInvoker).detailsToReport
				time.Timer.prototype.Stop.call($.pointerValue<time.Timer>((i$ as cadenceInvoker).hbBatchEndTimer));
				;(i$ as cadenceInvoker).hbBatchEndTimer = null

				let __goscriptShadow12: $.GoError = null! as $.GoError
				if (detailsToReport != null) {
					__goscriptShadow12 = await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as cadenceInvoker).heartbeatAndScheduleNextRun($.pointerValue<$.Slice<number>>(detailsToReport)) : cadenceInvoker.prototype.heartbeatAndScheduleNextRun.call(i, $.pointerValue<$.Slice<number>>(detailsToReport)))
				}
				void (i$ as cadenceInvoker).Mutex.Unlock()

				// Log the error outside the lock.
				await (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? ((i as any) as cadenceInvoker).logFailedHeartBeat(__goscriptShadow12) : cadenceInvoker.prototype.logFailedHeartBeat.call(i, __goscriptShadow12))
			})() })
		}

		return err
	}

	public async internalHeartBeat(details: $.Slice<number>): globalThis.Promise<[boolean, $.GoError]> {
		const i: cadenceInvoker | $.VarRef<cadenceInvoker> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const i$: cadenceInvoker = i == null ? $.pointerTarget<cadenceInvoker>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<cadenceInvoker>(i)
		let isActivityCancelled = false
		let timeout = $.int64Mul($.int64((i$ as cadenceInvoker).heartBeatTimeoutInSec), 1000000000n)
		if (timeout <= 0n) {
			timeout = 600000000000n
		}
		let [ctx, cancel] = context.WithTimeout($.pointerValueOrNil(context.Background())!, timeout)
		const __goscriptDeferCallee6 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee6!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		let err = await recordActivityHeartbeat(ctx, (i$ as cadenceInvoker).service, (i$ as cadenceInvoker).identity, (i$ as cadenceInvoker).taskToken, details, ((i$ as cadenceInvoker).featureFlags).clone())

		{
			const __goscriptTypeSwitchValue = err
			switch (true) {
				case $.typeAssert<__goscript_error.CanceledError | $.VarRef<__goscript_error.CanceledError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.CanceledError")).ok:
					{
						void (__goscriptAwait = (i$ as cadenceInvoker).cancelHandler!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						isActivityCancelled = true
					}
					break
				case $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.EntityNotExistsError")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyCompletedError")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.DomainNotActiveError")):
					{
						void (__goscriptAwait = (i$ as cadenceInvoker).cancelHandler!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						isActivityCancelled = true
					}
					break
			}
		}

		// We don't want to bubble temporary errors to the user.
		// This error won't be return to user check RecordActivityHeartbeat().
		return [isActivityCancelled, err]
	}

	public async logFailedHeartBeat(err: $.GoError): globalThis.Promise<void> {
		const i: cadenceInvoker | $.VarRef<cadenceInvoker> | null = this;
		const i$: cadenceInvoker = i == null ? $.pointerTarget<cadenceInvoker>(i) : (i as any).__isVarRef === true ? (i as any).value : (i as any).__goValue === undefined ? (i as any) : $.pointerTarget<cadenceInvoker>(i)
		// If the error is a canceled error do not log, as this is expected.
		let canceledErr: $.VarRef<__goscript_error.CanceledError | $.VarRef<__goscript_error.CanceledError> | null> = $.varRef(null! as __goscript_error.CanceledError | $.VarRef<__goscript_error.CanceledError> | null)

		// We need to check for nil as errors.As returns false for nil. Which would cause us to log on nil.
		if ((err != null) && !errors.As($.pointerValueOrNil(err)!, $.interfaceValue(canceledErr, "**internal.CanceledError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("internal.CanceledError"))))) {
			await zap.Logger.prototype.Error.call((i$ as cadenceInvoker).logger, "Failed to send heartbeat", $.arrayToSlice<zap.Field>([zap.Error(err), zap.String("WorkflowType", (i$ as cadenceInvoker).workflowType), zap.String("ActivityType", (i$ as cadenceInvoker).activityType)]))
		}
	}

	public Lock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).Lock()
	}

	public TryLock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).TryLock()
	}

	public Unlock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).Unlock()
	}

	static __typeInfo = $.registerStructType(
		"internal.cadenceInvoker",
		() => new cadenceInvoker(),
		() => [$.methodSignature("BackgroundHeartbeat", [], ["error"], true), $.methodSignature("BatchHeartbeat", [["details", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("Close", [["flushBufferedHeartbeat", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("Heartbeat", [["details", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("SignalWorkflow", [["ctx", "context.Context"], ["domain", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["signalInput", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("heartbeatAndScheduleNextRun", [["details", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("internalHeartBeat", [["details", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("logFailedHeartBeat", [["err", "error"]], [], true), $.methodSignature("Lock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		cadenceInvoker,
		() => [/* @__PURE__ */ $.structField("Mutex", "sync.Mutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("identity", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("service", "workflowserviceclient.Interface", [2], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("taskToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("cancelHandler", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [4], 64, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("heartBeatTimeoutInSec", /* @__PURE__ */ $.basicType("int32"), [5], 72, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("hbBatchEndTimer", /* @__PURE__ */ $.pointerType("time.Timer"), [6], 80, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("detailsToReport", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [7], 88, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("lastDetailsReported", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [8], 96, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("closeCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [9], 104, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workerStopChannel", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), [10], 112, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("featureFlags", "internal.FeatureFlags", [11], 120, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [12], 136, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowType", /* @__PURE__ */ $.basicType("string"), [13], 144, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("activityType", /* @__PURE__ */ $.basicType("string"), [14], 160, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export const defaultHeartBeatIntervalInSec: number = 600

export const defaultStickyCacheSize: number = 10000

export const noRetryBackoff: time.Duration = -1n

export const defaultInstantLivedWorkflowTimeoutUpperLimitInSec: number = 1

export const defaultShortLivedWorkflowTimeoutUpperLimitInSec: number = 1800

export const defaultMediumLivedWorkflowTimeoutUpperLimitInSec: number = 28800

export function newHistory(task: workflowTask | $.VarRef<workflowTask> | null, eventsHandler: __goscript_internal_event_handlers.workflowExecutionEventHandlerImpl | $.VarRef<__goscript_internal_event_handlers.workflowExecutionEventHandlerImpl> | null): history | $.VarRef<history> | null {
	const task$: workflowTask = task == null ? $.pointerTarget<workflowTask>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<workflowTask>(task)
	let result: history | $.VarRef<history> | null = (() => { const __goscriptLiteralField22 = s.PollForDecisionTaskResponse.prototype.GetStartedEventId.call((task$ as workflowTask).task); return new history({workflowTask: task, eventsHandler: eventsHandler, loadedEvents: $.pointerValue<s.History>($.pointerValue<s.PollForDecisionTaskResponse>((task$ as workflowTask).task).History).Events, currentIndex: 0, lastEventID: __goscriptLiteralField22}) })()
	let result$: history = result == null ? $.pointerTarget<history>(result) : (result as any).__isVarRef === true ? (result as any).value : (result as any).__goValue === undefined ? (result as any) : $.pointerTarget<history>(result)
	if ($.sliceLen((result$ as history).loadedEvents) > 0) {
		;(result$ as history).nextEventID = s.HistoryEvent.prototype.GetEventId.call($.arrayIndex((result$ as history).loadedEvents!, 0))
	}
	return result
}

export function isDecisionEvent(eventType: s.EventType): boolean {
	switch (eventType) {
		case s.EventTypeWorkflowExecutionCompleted:
		case s.EventTypeWorkflowExecutionFailed:
		case s.EventTypeWorkflowExecutionCanceled:
		case s.EventTypeWorkflowExecutionContinuedAsNew:
		case s.EventTypeActivityTaskScheduled:
		case s.EventTypeActivityTaskCancelRequested:
		case s.EventTypeTimerStarted:
		case s.EventTypeTimerCanceled:
		case s.EventTypeCancelTimerFailed:
		case s.EventTypeMarkerRecorded:
		case s.EventTypeStartChildWorkflowExecutionInitiated:
		case s.EventTypeRequestCancelExternalWorkflowExecutionInitiated:
		case s.EventTypeSignalExternalWorkflowExecutionInitiated:
		case s.EventTypeUpsertWorkflowSearchAttributes:
		{
			return true
			break
		}
		default:
		{
			return false
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function isPreloadMarkerEvent(event: s.HistoryEvent | $.VarRef<s.HistoryEvent> | null): boolean {
	return (event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(event)) == 26
}

export async function newWorkflowTaskHandler(domain: string, __goscriptParam0: __goscript_internal_worker.workerExecutionParameters, ppMgr: __goscript_internal_pressure_points.pressurePointMgr | null, registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null): globalThis.Promise<__goscript_internal_public.WorkflowTaskHandler | null> {
	let params: $.VarRef<__goscript_internal_worker.workerExecutionParameters> = $.varRef(__goscriptParam0)
	await __goscript_internal_worker.ensureRequiredParams(params)
	let wth: workflowTaskHandlerImpl | $.VarRef<workflowTaskHandlerImpl> | null = (await (async () => { const __goscriptLiteralField23 = await metrics.NewTaggedScope(params.value.WorkerOptions.MetricsScope); return new workflowTaskHandlerImpl({domain: domain, logger: params.value.WorkerOptions.Logger, ppMgr: ppMgr, metricsScope: __goscriptLiteralField23, identity: params.value.WorkerOptions.Identity, enableLoggingInReplay: params.value.WorkerOptions.EnableLoggingInReplay, disableStickyExecution: params.value.WorkerOptions.DisableStickyExecution, registry: registry, nonDeterministicWorkflowPolicy: params.value.WorkerOptions.NonDeterministicWorkflowPolicy, dataConverter: params.value.WorkerOptions.DataConverter, contextPropagators: params.value.WorkerOptions.ContextPropagators, tracer: params.value.WorkerOptions.Tracer, workflowInterceptorFactories: params.value.WorkerOptions.WorkflowInterceptorChainFactories, disableStrictNonDeterminism: params.value.WorkerOptions.WorkerBugPorts.DisableStrictNonDeterminismCheck, featureFlags: params.value.WorkerOptions.FeatureFlags}) })())
	let wth$: workflowTaskHandlerImpl = wth == null ? $.pointerTarget<workflowTaskHandlerImpl>(wth) : (wth as any).__isVarRef === true ? (wth as any).value : (wth as any).__goValue === undefined ? (wth as any) : $.pointerTarget<workflowTaskHandlerImpl>(wth)

	await traceLog($.functionValue(async (): globalThis.Promise<void> => {
		await zap.Logger.prototype.Debug.call((wth$ as workflowTaskHandlerImpl).logger, "Workflow task handler is created.", $.arrayToSlice<zap.Field>([zap.String("Domain", (wth$ as workflowTaskHandlerImpl).domain), zap.Bool("disableStrictNonDeterminism", (wth$ as workflowTaskHandlerImpl).disableStrictNonDeterminism)]))
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))

	return $.interfaceValue<__goscript_internal_public.WorkflowTaskHandler | null>(wth, "*internal.workflowTaskHandlerImpl", /* @__PURE__ */ $.pointerType("internal.workflowTaskHandlerImpl"))
}

export let workflowCache: cache.Cache | null = null! as cache.Cache | null

export function __goscript_set_workflowCache(__goscriptValue: cache.Cache | null): void {
	workflowCache = __goscriptValue
}

export let stickyCacheSize: number = 10000

export function __goscript_set_stickyCacheSize(__goscriptValue: number): void {
	stickyCacheSize = __goscriptValue
}

export let initCacheOnce: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_initCacheOnce(__goscriptValue: sync.Once): void {
	$.assignStruct(initCacheOnce.value, __goscriptValue)
}

export let stickyCacheLock: $.VarRef<sync.Mutex> = $.varRef($.markAsStructValue(new sync.Mutex()))

export function __goscript_set_stickyCacheLock(__goscriptValue: sync.Mutex): void {
	$.assignStruct(stickyCacheLock.value, __goscriptValue)
}

export async function SetStickyWorkflowCacheSize(cacheSize: number): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	await stickyCacheLock.value.Lock()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())(stickyCacheLock.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })
	if (workflowCache != null) {
		$.panic("cache already created, please set cache size before worker starts.")
	}
	stickyCacheSize = cacheSize
}

export async function getWorkflowCache(): globalThis.Promise<cache.Cache | null> {
	await initCacheOnce.value.Do($.functionValue(async (): globalThis.Promise<void> => {
		using __defer = new $.DisposableStack()
		await stickyCacheLock.value.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())(stickyCacheLock.value), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		workflowCache = cache.New(stickyCacheSize, new cache.Options({RemovedFunc: $.functionValue(async (cachedEntity: any): globalThis.Promise<void> => {
			let wc: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = ((cachedEntity as any)?.__goType === "*internal.workflowExecutionContextImpl" && (cachedEntity as any).__goValue === undefined && (cachedEntity as any).__isTypedNil !== true ? ((cachedEntity as any) as workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null) : $.mustTypeAssert<workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null>(cachedEntity, /* @__PURE__ */ $.pointerType("internal.workflowExecutionContextImpl")))
			await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowExecutionContextImpl).onEviction() : workflowExecutionContextImpl.prototype.onEviction.call(wc))
		}, ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo))}))
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return workflowCache
}

export async function getWorkflowContext(runID: string): globalThis.Promise<workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null> {
	let o = (__goscriptAwait = $.pointerValue<Exclude<cache.Cache, null>>((await getWorkflowCache())).Get(runID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (o == null) {
		return null
	}
	let wc: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = ((o as any)?.__goType === "*internal.workflowExecutionContextImpl" && (o as any).__goValue === undefined && (o as any).__isTypedNil !== true ? ((o as any) as workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null) : $.mustTypeAssert<workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null>(o, /* @__PURE__ */ $.pointerType("internal.workflowExecutionContextImpl")))
	return wc
}

export async function putWorkflowContext(runID: string, wc: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null): globalThis.Promise<[workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null, $.GoError]> {
	let [existing, err] = await $.pointerValue<Exclude<cache.Cache, null>>((await getWorkflowCache())).PutIfNotExist(runID, $.interfaceValue(wc, "*internal.workflowExecutionContextImpl", /* @__PURE__ */ $.pointerType("internal.workflowExecutionContextImpl")))
	if (err != null) {
		return [null, err]
	}
	return [((existing as any)?.__goType === "*internal.workflowExecutionContextImpl" && (existing as any).__goValue === undefined && (existing as any).__isTypedNil !== true ? ((existing as any) as workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null) : $.mustTypeAssert<workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null>(existing, /* @__PURE__ */ $.pointerType("internal.workflowExecutionContextImpl"))), null]
}

export async function removeWorkflowContext(runID: string): globalThis.Promise<void> {
	void (__goscriptAwait = $.pointerValue<Exclude<cache.Cache, null>>((await getWorkflowCache())).Delete(runID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function newWorkflowExecutionContext(startTime: time.Time, workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, taskHandler: workflowTaskHandlerImpl | $.VarRef<workflowTaskHandlerImpl> | null): globalThis.Promise<workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null> {
	let workflowContext: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null = new workflowExecutionContextImpl({workflowStartTime: $.markAsStructValue($.cloneStructValue(startTime)), workflowInfo: workflowInfo, wth: taskHandler})
	await (workflowContext !== null && (workflowContext as any).__isVarRef !== true && (workflowContext as any).__goValue === undefined ? ((workflowContext as any) as workflowExecutionContextImpl).createEventHandler() : workflowExecutionContextImpl.prototype.createEventHandler.call(workflowContext))
	return workflowContext
}

export async function resetHistory(task: s.PollForDecisionTaskResponse | $.VarRef<s.PollForDecisionTaskResponse> | null, historyIterator: __goscript_internal_public.HistoryIterator | null): globalThis.Promise<[s.History | $.VarRef<s.History> | null, $.GoError]> {
	void (__goscriptAwait = (historyIterator !== null && (historyIterator as any).__isVarRef !== true && (historyIterator as any).__goValue === undefined ? (historyIterator as Exclude<__goscript_internal_public.HistoryIterator, null>) : $.pointerValue<Exclude<__goscript_internal_public.HistoryIterator, null>>(historyIterator)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let __goscriptTuple24: any = await (historyIterator !== null && (historyIterator as any).__isVarRef !== true && (historyIterator as any).__goValue === undefined ? (historyIterator as Exclude<__goscript_internal_public.HistoryIterator, null>) : $.pointerValue<Exclude<__goscript_internal_public.HistoryIterator, null>>(historyIterator)).GetNextPage()
	let firstPageHistory: s.History | $.VarRef<s.History> | null = __goscriptTuple24[0]
	let err = __goscriptTuple24[1]
	if (err != null) {
		return [null, err]
	}
	$.pointerValue<s.PollForDecisionTaskResponse>(task).History = firstPageHistory
	return [firstPageHistory, null]
}

export function isFullHistory(history: s.History | $.VarRef<s.History> | null): boolean {
	const history$: s.History = history == null ? $.pointerTarget<s.History>(history) : (history as any).__isVarRef === true ? (history as any).value : (history as any).__goValue === undefined ? (history as any) : $.pointerTarget<s.History>(history)
	if (($.sliceLen((history$ as s.History).Events) == 0) || (s.HistoryEvent.prototype.GetEventType.call($.arrayIndex((history$ as s.History).Events!, 0)) != 0)) {
		return false
	}
	return true
}

export async function getRetryBackoff(lar: __goscript_internal_task_pollers.localActivityResult | $.VarRef<__goscript_internal_task_pollers.localActivityResult> | null, now: time.Time): globalThis.Promise<time.Duration> {
	const lar$: __goscript_internal_task_pollers.localActivityResult = lar == null ? $.pointerTarget<__goscript_internal_task_pollers.localActivityResult>(lar) : (lar as any).__isVarRef === true ? (lar as any).value : (lar as any).__goValue === undefined ? (lar as any) : $.pointerTarget<__goscript_internal_task_pollers.localActivityResult>(lar)
	let p: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null = $.pointerValue<__goscript_internal_event_handlers.localActivityTask>((lar$ as __goscript_internal_task_pollers.localActivityResult).task).retryPolicy
	let errReason: string = ""
	if ($.sliceLen($.pointerValue<__goscript_client.RetryPolicy>(p).NonRetriableErrorReasons) > 0) {
		if ($.comparableEqual((lar$ as __goscript_internal_task_pollers.localActivityResult).err, $.interfaceValue<$.GoError>(__goscript_context.__goscript_get_ErrDeadlineExceeded(), "*internal.TimeoutError", /* @__PURE__ */ $.pointerType("internal.TimeoutError")))) {
			errReason = $.concatString("timeout:", await s.TimeoutType_String(s.TimeoutTypeScheduleToClose))
		} else {
			let __goscriptTuple25: any = await __goscript_internal_utils.getErrorDetails((lar$ as __goscript_internal_task_pollers.localActivityResult).err, null)
			errReason = __goscriptTuple25[0]
		}
	}
	return getRetryBackoffWithNowTime(p, $.pointerValue<__goscript_internal_event_handlers.localActivityTask>((lar$ as __goscript_internal_task_pollers.localActivityResult).task).attempt, errReason, now, $.markAsStructValue($.cloneStructValue($.pointerValue<__goscript_internal_event_handlers.localActivityTask>((lar$ as __goscript_internal_task_pollers.localActivityResult).task).expireTime)))
}

export function getRetryBackoffWithNowTime(p: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null, attempt: number, errReason: string, now: time.Time, expireTime: time.Time): time.Duration {
	const p$: __goscript_client.RetryPolicy = p == null ? $.pointerTarget<__goscript_client.RetryPolicy>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<__goscript_client.RetryPolicy>(p)
	if (((p$ as __goscript_client.RetryPolicy).MaximumAttempts == 0) && ((p$ as __goscript_client.RetryPolicy).ExpirationInterval == 0n)) {
		return -1n
	}

	if (((p$ as __goscript_client.RetryPolicy).MaximumAttempts > 0) && (attempt > $.int(((((p$ as __goscript_client.RetryPolicy).MaximumAttempts - 1) | 0)), 32))) {
		return -1n
	}

	let backoffInterval = $.int64(globalThis.Number((p$ as __goscript_client.RetryPolicy).InitialInterval) * math.Pow((p$ as __goscript_client.RetryPolicy).BackoffCoefficient, attempt))
	if (backoffInterval <= 0n) {
		// math.Pow() could overflow
		if ((p$ as __goscript_client.RetryPolicy).MaximumInterval > 0n) {
			backoffInterval = (p$ as __goscript_client.RetryPolicy).MaximumInterval
		} else {
			return -1n
		}
	}

	if (((p$ as __goscript_client.RetryPolicy).MaximumInterval > 0n) && (backoffInterval > (p$ as __goscript_client.RetryPolicy).MaximumInterval)) {
		// cap next interval to MaxInterval
		backoffInterval = (p$ as __goscript_client.RetryPolicy).MaximumInterval
	}

	let nextScheduleTime = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(now)).Add(backoffInterval)))
	if (!$.markAsStructValue($.cloneStructValue(expireTime)).IsZero() && $.markAsStructValue($.cloneStructValue(nextScheduleTime)).After($.markAsStructValue($.cloneStructValue(expireTime)))) {
		return -1n
	}

	// check if error is non-retriable
	for (let __goscriptRangeTarget3 = (p$ as __goscript_client.RetryPolicy).NonRetriableErrorReasons, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
		let er = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as string)
		if ($.stringEqual(er, errReason)) {
			return -1n
		}
	}

	return backoffInterval
}

export async function errorToFailDecisionTask(taskToken: $.Slice<number>, err: $.GoError, identity: string): globalThis.Promise<s.RespondDecisionTaskFailedRequest | $.VarRef<s.RespondDecisionTaskFailedRequest> | null> {
	let failedCause = $.varRef(13)
	let __goscriptTuple26: any = await __goscript_internal_utils.getErrorDetails(err, null)
	let details: $.Slice<number> = __goscriptTuple26[1]
	return (await (async () => { const __goscriptLiteralField24 = common.StringPtr(identity); const __goscriptLiteralField25 = common.StringPtr(await __goscript_internal_worker.getBinaryChecksum()); return new s.RespondDecisionTaskFailedRequest({TaskToken: taskToken, Cause: failedCause, Details: details, Identity: __goscriptLiteralField24, BinaryChecksum: __goscriptLiteralField25}) })())
}

export function newServiceInvoker(taskToken: $.Slice<number>, identity: string, service: workflowserviceclient.Interface | null, cancelHandler: (() => void) | null, heartBeatTimeoutInSec: number, workerStopChannel: $.Channel<{}> | null, featureFlags: __goscript_internal_utils.FeatureFlags, logger: zap.Logger | $.VarRef<zap.Logger> | null, workflowType: string, activityType: string): __goscript_activity.ServiceInvoker | null {
	return $.interfaceValue<__goscript_activity.ServiceInvoker | null>(new cadenceInvoker({taskToken: taskToken, identity: identity, service: service, cancelHandler: cancelHandler, heartBeatTimeoutInSec: heartBeatTimeoutInSec, closeCh: $.makeChannel<{}>(0, {}, "both"), workerStopChannel: workerStopChannel, featureFlags: featureFlags, logger: logger, workflowType: workflowType, activityType: activityType}), "*internal.cadenceInvoker", /* @__PURE__ */ $.pointerType("internal.cadenceInvoker"))
}

export function createNewDecision(decisionType: s.DecisionType): s.Decision | $.VarRef<s.Decision> | null {
	return (() => { const __goscriptLiteralField26 = common.DecisionTypePtr(decisionType); return new s.Decision({DecisionType: __goscriptLiteralField26}) })()
}

export async function signalWorkflow(ctx: context.Context | null, service: workflowserviceclient.Interface | null, identity: string, domain: string, workflowID: string, runID: string, signalName: string, signalInput: $.Slice<number>, featureFlags: __goscript_internal_utils.FeatureFlags): globalThis.Promise<$.GoError> {
	let request: s.SignalWorkflowExecutionRequest | $.VarRef<s.SignalWorkflowExecutionRequest> | null = (await (async () => { const __goscriptLiteralField27 = common.StringPtr(domain); const __goscriptLiteralField30 = common.StringPtr(signalName); const __goscriptLiteralField31 = common.StringPtr(identity); const __goscriptLiteralField32 = common.StringPtr(await uuid.New()); return new s.SignalWorkflowExecutionRequest({Domain: __goscriptLiteralField27, WorkflowExecution: (() => { const __goscriptLiteralField28 = common.StringPtr(workflowID); const __goscriptLiteralField29 = __goscript_internal_workflow_client.getRunID(runID); return new s.WorkflowExecution({WorkflowId: __goscriptLiteralField28, RunId: __goscriptLiteralField29}) })(), SignalName: __goscriptLiteralField30, Input: signalInput, Identity: __goscriptLiteralField31, RequestId: __goscriptLiteralField32}) })())

	return backoff2.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple27: any = await __goscript_internal_utils.newChannelContext(ctx, (featureFlags).clone(), null)
		let tchCtx = __goscriptTuple27[0]
		let cancel = __goscriptTuple27[1]
		let opt: $.Slice<yarpc.CallOption> = __goscriptTuple27[2]
		const __goscriptDeferCallee7 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee7!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		return (__goscriptAwait = (service !== null && (service as any).__isVarRef !== true && (service as any).__goValue === undefined ? (service as Exclude<workflowserviceclient.Interface, null>) : $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(service)).SignalWorkflowExecution(tchCtx, request, opt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
}

export async function recordActivityHeartbeat(ctx: context.Context | null, service: workflowserviceclient.Interface | null, identity: string, taskToken: $.Slice<number>, details: $.Slice<number>, featureFlags: __goscript_internal_utils.FeatureFlags): globalThis.Promise<$.GoError> {
	let request: s.RecordActivityTaskHeartbeatRequest | $.VarRef<s.RecordActivityTaskHeartbeatRequest> | null = (() => { const __goscriptLiteralField33 = common.StringPtr(identity); return new s.RecordActivityTaskHeartbeatRequest({TaskToken: taskToken, Details: details, Identity: __goscriptLiteralField33}) })()

	let heartbeatResponse: s.RecordActivityTaskHeartbeatResponse | $.VarRef<s.RecordActivityTaskHeartbeatResponse> | null = null! as s.RecordActivityTaskHeartbeatResponse | $.VarRef<s.RecordActivityTaskHeartbeatResponse> | null
	let heartbeatErr = await backoff2.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple28: any = await __goscript_internal_utils.newChannelContext(ctx, (featureFlags).clone(), null)
		let tchCtx = __goscriptTuple28[0]
		let cancel = __goscriptTuple28[1]
		let opt: $.Slice<yarpc.CallOption> = __goscriptTuple28[2]
		const __goscriptDeferCallee8 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee8!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		let err: $.GoError = null! as $.GoError
		let __goscriptTuple29: any = await (service !== null && (service as any).__isVarRef !== true && (service as any).__goValue === undefined ? (service as Exclude<workflowserviceclient.Interface, null>) : $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(service)).RecordActivityTaskHeartbeat(tchCtx, request, opt)
		heartbeatResponse = __goscriptTuple29[0]
		err = __goscriptTuple29[1]
		return err
	}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)

	if (((heartbeatErr == null) && (heartbeatResponse != null)) && (heartbeatResponse !== null && (heartbeatResponse as any).__isVarRef !== true && (heartbeatResponse as any).__goValue === undefined ? ((heartbeatResponse as any) as s.RecordActivityTaskHeartbeatResponse).GetCancelRequested() : s.RecordActivityTaskHeartbeatResponse.prototype.GetCancelRequested.call(heartbeatResponse))) {
		return $.interfaceValue<$.GoError>(__goscript_error.NewCanceledError(null), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError"))
	}

	return heartbeatErr
}

export async function recordActivityHeartbeatByID(ctx: context.Context | null, service: workflowserviceclient.Interface | null, identity: string, domain: string, workflowID: string, runID: string, activityID: string, details: $.Slice<number>, featureFlags: __goscript_internal_utils.FeatureFlags): globalThis.Promise<$.GoError> {
	let request: s.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<s.RecordActivityTaskHeartbeatByIDRequest> | null = (() => { const __goscriptLiteralField34 = common.StringPtr(domain); const __goscriptLiteralField35 = common.StringPtr(workflowID); const __goscriptLiteralField36 = common.StringPtr(runID); const __goscriptLiteralField37 = common.StringPtr(activityID); const __goscriptLiteralField38 = common.StringPtr(identity); return new s.RecordActivityTaskHeartbeatByIDRequest({Domain: __goscriptLiteralField34, WorkflowID: __goscriptLiteralField35, RunID: __goscriptLiteralField36, ActivityID: __goscriptLiteralField37, Details: details, Identity: __goscriptLiteralField38}) })()

	let heartbeatResponse: s.RecordActivityTaskHeartbeatResponse | $.VarRef<s.RecordActivityTaskHeartbeatResponse> | null = null! as s.RecordActivityTaskHeartbeatResponse | $.VarRef<s.RecordActivityTaskHeartbeatResponse> | null
	let heartbeatErr = await backoff2.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple30: any = await __goscript_internal_utils.newChannelContext(ctx, (featureFlags).clone(), null)
		let tchCtx = __goscriptTuple30[0]
		let cancel = __goscriptTuple30[1]
		let opt: $.Slice<yarpc.CallOption> = __goscriptTuple30[2]
		const __goscriptDeferCallee9 = cancel
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee9!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		let err: $.GoError = null! as $.GoError
		let __goscriptTuple31: any = await (service !== null && (service as any).__isVarRef !== true && (service as any).__goValue === undefined ? (service as Exclude<workflowserviceclient.Interface, null>) : $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(service)).RecordActivityTaskHeartbeatByID(tchCtx, request, opt)
		heartbeatResponse = __goscriptTuple31[0]
		err = __goscriptTuple31[1]
		return err
	}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)

	if (((heartbeatErr == null) && (heartbeatResponse != null)) && (heartbeatResponse !== null && (heartbeatResponse as any).__isVarRef !== true && (heartbeatResponse as any).__goValue === undefined ? ((heartbeatResponse as any) as s.RecordActivityTaskHeartbeatResponse).GetCancelRequested() : s.RecordActivityTaskHeartbeatResponse.prototype.GetCancelRequested.call(heartbeatResponse))) {
		return $.interfaceValue<$.GoError>(__goscript_error.NewCanceledError(null), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError"))
	}

	return heartbeatErr
}

export async function traceLog(fn: (() => void) | null): globalThis.Promise<void> {
	if (__goscript_internal_public.enableVerboseLogging) {
		void (__goscriptAwait = fn!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
}

export function workflowCategorizedByTimeout(wfContext: workflowExecutionContextImpl | $.VarRef<workflowExecutionContextImpl> | null): string {
	let executionTimeout = $.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<workflowExecutionContextImpl>(wfContext).workflowInfo).ExecutionStartToCloseTimeoutSeconds
	if (executionTimeout <= 1) {
		return "instant"
	} else {
		if (executionTimeout <= 1800) {
			return "short"
		} else {
			if (executionTimeout <= 28800) {
				return "intermediate"
			} else {
				return "long"
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptAwait: any
