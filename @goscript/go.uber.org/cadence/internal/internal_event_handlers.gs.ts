// Generated file based on internal_event_handlers.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as m from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as list from "@goscript/container/list/index.js"

import type * as context2 from "@goscript/context/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import * as __goscript_internal_decision_state_machine from "./internal_decision_state_machine.gs.ts"

import * as __goscript_internal_logging_tags from "./internal_logging_tags.gs.ts"

import * as __goscript_internal_pressure_points from "./internal_pressure_points.gs.ts"

import * as __goscript_internal_public from "./internal_public.gs.ts"

import * as __goscript_internal_task_handlers from "./internal_task_handlers.gs.ts"

import * as __goscript_internal_task_pollers from "./internal_task_pollers.gs.ts"

import * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_internal_workflow_client from "./internal_workflow_client.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_worker from "./worker.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_replayer_utils from "./workflow_replayer_utils.gs.ts"

import * as __goscript_workflow_testsuite from "./workflow_testsuite.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/container/list/index.js"
import "./activity.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./error.gs.ts"
import "./headers.gs.ts"
import "./interceptors.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_decision_state_machine.gs.ts"
import "./internal_logging_tags.gs.ts"
import "./internal_pressure_points.gs.ts"
import "./internal_public.gs.ts"
import "./internal_task_handlers.gs.ts"
import "./internal_task_pollers.gs.ts"
import "./internal_time.gs.ts"
import "./internal_utils.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_worker_base.gs.ts"
import "./internal_workflow.gs.ts"
import "./internal_workflow_client.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./worker.gs.ts"
import "./workflow.gs.ts"
import "./workflow_replayer_utils.gs.ts"
import "./workflow_testsuite.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.completionHandler", "internal.workflowExecutionEventHandlerImpl", "internal.scheduledTimer", "internal.scheduledActivity", "internal.scheduledChildWorkflow", "internal.scheduledCancellation", "internal.scheduledSignal", "internal.workflowEnvironmentImpl", "internal.localActivityTask", "internal.locallyDispatchedActivityTask", "internal.localActivityMarkerData", "internal.replayAwareZapCore"])

export type completionHandler = ((result: $.Slice<number>, err: $.GoError) => void) | null

export class workflowExecutionEventHandlerImpl {
	public get workflowEnvironmentImpl(): workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null {
		return this._fields.workflowEnvironmentImpl
	}

	public set workflowEnvironmentImpl(value: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null) {
		this._fields.workflowEnvironmentImpl = value
	}

	public get workflowDefinition(): __goscript_internal_worker_base.workflowDefinition | null {
		return this._fields.workflowDefinition
	}

	public set workflowDefinition(value: __goscript_internal_worker_base.workflowDefinition | null) {
		this._fields.workflowDefinition = value
	}

	public _fields: {
		workflowEnvironmentImpl: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null
		workflowDefinition: __goscript_internal_worker_base.workflowDefinition | null
	}

	constructor(init?: Partial<{workflowEnvironmentImpl?: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null, workflowDefinition?: __goscript_internal_worker_base.workflowDefinition | null}>, __goscriptValue?: boolean) {
		this._fields = {
			workflowEnvironmentImpl: init?.workflowEnvironmentImpl ?? (null! as workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null),
			workflowDefinition: init?.workflowDefinition ?? (null! as __goscript_internal_worker_base.workflowDefinition | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowExecutionEventHandlerImpl {
		return new workflowExecutionEventHandlerImpl(this, true)
	}

	public __goscriptAssign(source: workflowExecutionEventHandlerImpl): void {
		const target = this._fields
		const values = source._fields
		target.workflowEnvironmentImpl = values.workflowEnvironmentImpl
		target.workflowDefinition = $.assignFieldValue(target.workflowDefinition, values.workflowDefinition, "internal.workflowDefinition")
	}

	public async Close(): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		const weh$: workflowExecutionEventHandlerImpl = weh == null ? $.pointerTarget<workflowExecutionEventHandlerImpl>(weh) : (weh as any).__isVarRef === true ? (weh as any).value : (weh as any).__goValue === undefined ? (weh as any) : $.pointerTarget<workflowExecutionEventHandlerImpl>(weh)
		if ((weh$ as workflowExecutionEventHandlerImpl).workflowDefinition != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowDefinition, null>>((weh$ as workflowExecutionEventHandlerImpl).workflowDefinition).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async KnownQueryTypes(): globalThis.Promise<$.Slice<string>> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		return $.pointerValue<Exclude<__goscript_internal_worker_base.workflowDefinition, null>>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowDefinition).KnownQueryTypes()
	}

	public async ProcessEvent(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null, isReplay: boolean, isLast: boolean): globalThis.Promise<$.GoError> {
		let weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		let err: $.GoError = null! as $.GoError
		const __defer = new $.AsyncDisposableStack()
		try {
			const weh$: workflowExecutionEventHandlerImpl = weh == null ? $.pointerTarget<workflowExecutionEventHandlerImpl>(weh) : (weh as any).__isVarRef === true ? (weh as any).value : (weh as any).__goValue === undefined ? (weh as any) : $.pointerTarget<workflowExecutionEventHandlerImpl>(weh)
			const event$: m.HistoryEvent = event == null ? $.pointerTarget<m.HistoryEvent>(event) : (event as any).__isVarRef === true ? (event as any).value : (event as any).__goValue === undefined ? (event as any) : $.pointerTarget<m.HistoryEvent>(event)
			if (event == null) {
				return errors.New("nil event provided")
			}
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				{
					let p = $.recover()
					if (p != null) {
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).metricsScope).Counter(metrics.DecisionTaskPanicCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						let topLine = await fmt.Sprintf("process event for %s [panic]:", $.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).workflowInfo).TaskListName)
						let st = await __goscript_internal_workflow.getStackTraceRaw(topLine, 7, 0)
						await zap.Logger.prototype.Error.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).logger, "ProcessEvent panic.", $.arrayToSlice<zap.Field>([zap.String("PanicError", await fmt.Sprintf("%v", p)), zap.String("PanicStack", st)]))

						await $.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).Complete(null, $.interfaceValue<$.GoError>(__goscript_error.newWorkflowPanicError(p, st), "*internal.workflowPanicError", /* @__PURE__ */ $.pointerType("internal.workflowPanicError")))
					}
				}
			})() })

			$.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).isReplay = isReplay
			await __goscript_internal_task_handlers.traceLog($.functionValue(async (): globalThis.Promise<void> => {
				await zap.Logger.prototype.Debug.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).logger, "ProcessEvent", $.arrayToSlice<zap.Field>([zap.Int64("EventID", (event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as m.HistoryEvent).GetEventId() : m.HistoryEvent.prototype.GetEventId.call(event))), zap.String("EventType", await m.EventType_String((event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as m.HistoryEvent).GetEventType() : m.HistoryEvent.prototype.GetEventType.call(event))))]))
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))

			switch ((event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as m.HistoryEvent).GetEventType() : m.HistoryEvent.prototype.GetEventType.call(event))) {
				case m.EventTypeWorkflowExecutionCompleted:
				case m.EventTypeWorkflowExecutionTimedOut:
				case m.EventTypeWorkflowExecutionFailed:
				case m.EventTypeDecisionTaskScheduled:
				case m.EventTypeDecisionTaskTimedOut:
				case m.EventTypeDecisionTaskFailed:
				case m.EventTypeActivityTaskStarted:
				case m.EventTypeDecisionTaskCompleted:
				case m.EventTypeWorkflowExecutionCanceled:
				case m.EventTypeWorkflowExecutionContinuedAsNew:
				{
					break
				}
				case m.EventTypeWorkflowExecutionStarted:
				{
					err = await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleWorkflowExecutionStarted((event$ as m.HistoryEvent).WorkflowExecutionStartedEventAttributes) : workflowExecutionEventHandlerImpl.prototype.handleWorkflowExecutionStarted.call(weh, (event$ as m.HistoryEvent).WorkflowExecutionStartedEventAttributes))
					break
				}
				case m.EventTypeDecisionTaskStarted:
				{
					$.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).SetCurrentReplayTime($.markAsStructValue($.cloneStructValue(time.Unix(0n, (event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as m.HistoryEvent).GetTimestamp() : m.HistoryEvent.prototype.GetTimestamp.call(event))))))
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowDefinition, null>>((weh$ as workflowExecutionEventHandlerImpl).workflowDefinition).OnDecisionTaskStarted(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					// Set replay decisionStarted eventID
					$.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).workflowInfo).DecisionStartedEventID = (event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as m.HistoryEvent).GetEventId() : m.HistoryEvent.prototype.GetEventId.call(event))
					break
				}
				case m.EventTypeActivityTaskScheduled:
				{
					await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleActivityTaskScheduled.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, (event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as m.HistoryEvent).GetEventId() : m.HistoryEvent.prototype.GetEventId.call(event)), m.ActivityTaskScheduledEventAttributes.prototype.GetActivityId.call((event$ as m.HistoryEvent).ActivityTaskScheduledEventAttributes))
					break
				}
				case m.EventTypeActivityTaskCompleted:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleActivityTaskCompleted(event) : workflowExecutionEventHandlerImpl.prototype.handleActivityTaskCompleted.call(weh, event))
					break
				}
				case m.EventTypeActivityTaskFailed:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleActivityTaskFailed(event) : workflowExecutionEventHandlerImpl.prototype.handleActivityTaskFailed.call(weh, event))
					break
				}
				case m.EventTypeActivityTaskTimedOut:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleActivityTaskTimedOut(event) : workflowExecutionEventHandlerImpl.prototype.handleActivityTaskTimedOut.call(weh, event))
					break
				}
				case m.EventTypeActivityTaskCancelRequested:
				{
					await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleActivityTaskCancelRequested.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, m.ActivityTaskCancelRequestedEventAttributes.prototype.GetActivityId.call((event$ as m.HistoryEvent).ActivityTaskCancelRequestedEventAttributes))
					break
				}
				case m.EventTypeRequestCancelActivityTaskFailed:
				{
					await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleRequestCancelActivityTaskFailed.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, m.RequestCancelActivityTaskFailedEventAttributes.prototype.GetActivityId.call((event$ as m.HistoryEvent).RequestCancelActivityTaskFailedEventAttributes))
					break
				}
				case m.EventTypeActivityTaskCanceled:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleActivityTaskCanceled(event) : workflowExecutionEventHandlerImpl.prototype.handleActivityTaskCanceled.call(weh, event))
					break
				}
				case m.EventTypeTimerStarted:
				{
					await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleTimerStarted.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, m.TimerStartedEventAttributes.prototype.GetTimerId.call((event$ as m.HistoryEvent).TimerStartedEventAttributes))
					break
				}
				case m.EventTypeTimerFired:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleTimerFired(event) : workflowExecutionEventHandlerImpl.prototype.handleTimerFired.call(weh, event))
					break
				}
				case m.EventTypeTimerCanceled:
				{
					await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleTimerCanceled.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, m.TimerCanceledEventAttributes.prototype.GetTimerId.call((event$ as m.HistoryEvent).TimerCanceledEventAttributes))
					break
				}
				case m.EventTypeCancelTimerFailed:
				{
					await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleCancelTimerFailed.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, m.CancelTimerFailedEventAttributes.prototype.GetTimerId.call((event$ as m.HistoryEvent).CancelTimerFailedEventAttributes))
					break
				}
				case m.EventTypeWorkflowExecutionCancelRequested:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleWorkflowExecutionCancelRequested() : workflowExecutionEventHandlerImpl.prototype.handleWorkflowExecutionCancelRequested.call(weh))
					break
				}
				case m.EventTypeRequestCancelExternalWorkflowExecutionInitiated:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleRequestCancelExternalWorkflowExecutionInitiated(event) : workflowExecutionEventHandlerImpl.prototype.handleRequestCancelExternalWorkflowExecutionInitiated.call(weh, event))
					break
				}
				case m.EventTypeRequestCancelExternalWorkflowExecutionFailed:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleRequestCancelExternalWorkflowExecutionFailed(event) : workflowExecutionEventHandlerImpl.prototype.handleRequestCancelExternalWorkflowExecutionFailed.call(weh, event))
					break
				}
				case m.EventTypeExternalWorkflowExecutionCancelRequested:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleExternalWorkflowExecutionCancelRequested(event) : workflowExecutionEventHandlerImpl.prototype.handleExternalWorkflowExecutionCancelRequested.call(weh, event))
					break
				}
				case m.EventTypeWorkflowExecutionSignaled:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleWorkflowExecutionSignaled((event$ as m.HistoryEvent).WorkflowExecutionSignaledEventAttributes) : workflowExecutionEventHandlerImpl.prototype.handleWorkflowExecutionSignaled.call(weh, (event$ as m.HistoryEvent).WorkflowExecutionSignaledEventAttributes))
					break
				}
				case m.EventTypeSignalExternalWorkflowExecutionInitiated:
				{
					let signalID = $.bytesToString($.pointerValue<m.SignalExternalWorkflowExecutionInitiatedEventAttributes>((event$ as m.HistoryEvent).SignalExternalWorkflowExecutionInitiatedEventAttributes).Control)
					await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleSignalExternalWorkflowExecutionInitiated.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, (event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as m.HistoryEvent).GetEventId() : m.HistoryEvent.prototype.GetEventId.call(event)), signalID)
					break
				}
				case m.EventTypeSignalExternalWorkflowExecutionFailed:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleSignalExternalWorkflowExecutionFailed(event) : workflowExecutionEventHandlerImpl.prototype.handleSignalExternalWorkflowExecutionFailed.call(weh, event))
					break
				}
				case m.EventTypeExternalWorkflowExecutionSignaled:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleSignalExternalWorkflowExecutionCompleted(event) : workflowExecutionEventHandlerImpl.prototype.handleSignalExternalWorkflowExecutionCompleted.call(weh, event))
					break
				}
				case m.EventTypeMarkerRecorded:
				{
					err = await workflowExecutionEventHandlerImpl.prototype.handleMarkerRecorded.call(weh, (event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as m.HistoryEvent).GetEventId() : m.HistoryEvent.prototype.GetEventId.call(event)), (event$ as m.HistoryEvent).MarkerRecordedEventAttributes)
					break
				}
				case m.EventTypeStartChildWorkflowExecutionInitiated:
				{
					await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleStartChildWorkflowExecutionInitiated.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, m.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.GetWorkflowId.call((event$ as m.HistoryEvent).StartChildWorkflowExecutionInitiatedEventAttributes))
					break
				}
				case m.EventTypeStartChildWorkflowExecutionFailed:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleStartChildWorkflowExecutionFailed(event) : workflowExecutionEventHandlerImpl.prototype.handleStartChildWorkflowExecutionFailed.call(weh, event))
					break
				}
				case m.EventTypeChildWorkflowExecutionStarted:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleChildWorkflowExecutionStarted(event) : workflowExecutionEventHandlerImpl.prototype.handleChildWorkflowExecutionStarted.call(weh, event))
					break
				}
				case m.EventTypeChildWorkflowExecutionCompleted:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleChildWorkflowExecutionCompleted(event) : workflowExecutionEventHandlerImpl.prototype.handleChildWorkflowExecutionCompleted.call(weh, event))
					break
				}
				case m.EventTypeChildWorkflowExecutionFailed:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleChildWorkflowExecutionFailed(event) : workflowExecutionEventHandlerImpl.prototype.handleChildWorkflowExecutionFailed.call(weh, event))
					break
				}
				case m.EventTypeChildWorkflowExecutionCanceled:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleChildWorkflowExecutionCanceled(event) : workflowExecutionEventHandlerImpl.prototype.handleChildWorkflowExecutionCanceled.call(weh, event))
					break
				}
				case m.EventTypeChildWorkflowExecutionTimedOut:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleChildWorkflowExecutionTimedOut(event) : workflowExecutionEventHandlerImpl.prototype.handleChildWorkflowExecutionTimedOut.call(weh, event))
					break
				}
				case m.EventTypeChildWorkflowExecutionTerminated:
				{
					await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleChildWorkflowExecutionTerminated(event) : workflowExecutionEventHandlerImpl.prototype.handleChildWorkflowExecutionTerminated.call(weh, event))
					break
				}
				case m.EventTypeUpsertWorkflowSearchAttributes:
				{
					void (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleUpsertWorkflowSearchAttributes(event) : workflowExecutionEventHandlerImpl.prototype.handleUpsertWorkflowSearchAttributes.call(weh, event))
					break
				}
				default:
				{
					await zap.Logger.prototype.Error.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).logger, "unknown event type", $.arrayToSlice<zap.Field>([zap.Int64("EventID", (event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as m.HistoryEvent).GetEventId() : m.HistoryEvent.prototype.GetEventId.call(event))), zap.String("EventType", await m.EventType_String((event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as m.HistoryEvent).GetEventType() : m.HistoryEvent.prototype.GetEventType.call(event))))]))
					break
				}
			}

			if (err != null) {
				const __goscriptReturn0: $.GoError = err
				err = __goscriptReturn0
				await __defer.dispose()
				return err
			}

			let historySum = await __goscript_internal_utils.estimateHistorySize($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).logger, event)
			atomic.AddInt64($.fieldRef($.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).workflowInfo)._fields, "TotalHistoryBytes"), $.int64(historySum))

			// When replaying histories to get stack trace or current state the last event might be not
			// decision started. So always call OnDecisionTaskStarted on the last event.
			// Don't call for EventType_DecisionTaskStarted as it was already called when handling it.
			if (isLast && ((event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as m.HistoryEvent).GetEventType() : m.HistoryEvent.prototype.GetEventType.call(event)) != 5)) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowDefinition, null>>((weh$ as workflowExecutionEventHandlerImpl).workflowDefinition).OnDecisionTaskStarted(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}

			const __goscriptReturn1: $.GoError = null
			err = __goscriptReturn1
			await __defer.dispose()
			return err
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return err
	}

	public async ProcessLocalActivityResult(lar: __goscript_internal_task_pollers.localActivityResult | $.VarRef<__goscript_internal_task_pollers.localActivityResult> | null): globalThis.Promise<$.GoError> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		const weh$: workflowExecutionEventHandlerImpl = weh == null ? $.pointerTarget<workflowExecutionEventHandlerImpl>(weh) : (weh as any).__isVarRef === true ? (weh as any).value : (weh as any).__goValue === undefined ? (weh as any) : $.pointerTarget<workflowExecutionEventHandlerImpl>(weh)
		const lar$: __goscript_internal_task_pollers.localActivityResult = lar == null ? $.pointerTarget<__goscript_internal_task_pollers.localActivityResult>(lar) : (lar as any).__isVarRef === true ? (lar as any).value : (lar as any).__goValue === undefined ? (lar as any) : $.pointerTarget<__goscript_internal_task_pollers.localActivityResult>(lar)
		// convert local activity result and error to marker data
		let lamd = (() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).currentReplayTime)).Add($.markAsStructValue($.cloneStructValue(time.Now())).Sub($.markAsStructValue($.cloneStructValue($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).currentLocalTime)))))); return new localActivityMarkerData({ActivityID: $.pointerValue<localActivityTask>((lar$ as __goscript_internal_task_pollers.localActivityResult).task).activityID, ActivityType: $.pointerValue<__goscript_internal_activity.executeLocalActivityParams>($.pointerValue<localActivityTask>((lar$ as __goscript_internal_task_pollers.localActivityResult).task).params).ActivityType, ReplayTime: __goscriptLiteralField0, Attempt: $.pointerValue<localActivityTask>((lar$ as __goscript_internal_task_pollers.localActivityResult).task).attempt}, true) })()
		if ((lar$ as __goscript_internal_task_pollers.localActivityResult).err != null) {
			let __goscriptTuple0: any = await __goscript_internal_utils.getErrorDetails((lar$ as __goscript_internal_task_pollers.localActivityResult).err, $.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).GetDataConverter())
			let errReason = __goscriptTuple0[0]
			let errDetails: $.Slice<number> = __goscriptTuple0[1]
			lamd.ErrReason = errReason
			lamd.ErrJSON = $.bytesToString(errDetails)
			lamd.Backoff = (lar$ as __goscript_internal_task_pollers.localActivityResult).backoff
		} else {
			lamd.ResultJSON = $.bytesToString((lar$ as __goscript_internal_task_pollers.localActivityResult).result)
		}

		// encode marker data
		let __goscriptTuple1: any = await $.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).encodeArg($.interfaceValue((lamd).clone(), "internal.localActivityMarkerData", "internal.localActivityMarkerData"))
		let markerData: $.Slice<number> = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return err
		}

		// create marker event for local activity result
		let markerEvent: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null = (() => { const __goscriptLiteralField1 = common.EventTypePtr(26); return new m.HistoryEvent({EventType: __goscriptLiteralField1, MarkerRecordedEventAttributes: (() => { const __goscriptLiteralField2 = common.StringPtr("LocalActivity"); return new m.MarkerRecordedEventAttributes({MarkerName: __goscriptLiteralField2, Details: markerData}) })()}) })()

		// apply the local activity result to workflow
		return (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).ProcessEvent(markerEvent, false, false) : workflowExecutionEventHandlerImpl.prototype.ProcessEvent.call(weh, markerEvent, false, false))
	}

	public async ProcessQuery(queryType: string, queryArgs: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		const weh$: workflowExecutionEventHandlerImpl = weh == null ? $.pointerTarget<workflowExecutionEventHandlerImpl>(weh) : (weh as any).__isVarRef === true ? (weh as any).value : (weh as any).__goValue === undefined ? (weh as any) : $.pointerTarget<workflowExecutionEventHandlerImpl>(weh)
		switch (queryType) {
			case "__stack_trace":
			{
				return $.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).encodeArg(await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).StackTrace() : workflowExecutionEventHandlerImpl.prototype.StackTrace.call(weh)))
				break
			}
			case "__open_sessions":
			{
				return $.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).encodeArg($.interfaceValue($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).getOpenSessions(), "[]*internal.SessionInfo", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("internal.SessionInfo"))))
				break
			}
			case "__query_types":
			{
				return $.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).encodeArg($.interfaceValue(await (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).KnownQueryTypes() : workflowExecutionEventHandlerImpl.prototype.KnownQueryTypes.call(weh)), "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))))
				break
			}
			default:
			{
				let __goscriptTuple2: any = await $.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).queryHandler!(queryType, queryArgs)
				let result: $.Slice<number> = __goscriptTuple2[0]
				let err = __goscriptTuple2[1]
				if (err != null) {
					return [null, err]
				}

				let resultSize = $.sliceLen(result)
				if (resultSize > 2000000) {
					await zap.Logger.prototype.Error.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).logger, "Query result size exceeds limit.", $.arrayToSlice<zap.Field>([zap.String("QueryType", queryType), zap.String("WorkflowID", $.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).workflowInfo).WorkflowExecution.ID), zap.String("RunID", $.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).workflowInfo).WorkflowExecution.RunID)]))
					return [null, fmt.Errorf("query result size (%v) exceeds limit (%v)", $.basicInterfaceValue(resultSize, "int"), $.basicInterfaceValue(2000000, "int"))]
				}

				return [result, null]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async StackTrace(): globalThis.Promise<string> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		return $.pointerValue<Exclude<__goscript_internal_worker_base.workflowDefinition, null>>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowDefinition).StackTrace()
	}

	public async handleActivityTaskCanceled(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		const weh$: workflowExecutionEventHandlerImpl = weh == null ? $.pointerTarget<workflowExecutionEventHandlerImpl>(weh) : (weh as any).__isVarRef === true ? (weh as any).value : (weh as any).__goValue === undefined ? (weh as any) : $.pointerTarget<workflowExecutionEventHandlerImpl>(weh)
		let activityID = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.getActivityID.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, event)
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleActivityTaskCanceled.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, activityID)
		let __goscriptShadow0: scheduledActivity | $.VarRef<scheduledActivity> | null = $.mustTypeAssert<scheduledActivity | $.VarRef<scheduledActivity> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledActivity"))
		if ($.pointerValue<scheduledActivity>(__goscriptShadow0).handled) {
			return
		}

		if ((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).isDone(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) || !$.pointerValue<scheduledActivity>(__goscriptShadow0).waitForCancelRequest) {
			// Clear this so we don't have a recursive call that while executing might call the cancel one.
			let details = __goscript_workflow_testsuite.newEncodedValues($.pointerValue<m.ActivityTaskCanceledEventAttributes>($.pointerValue<m.HistoryEvent>(event).ActivityTaskCanceledEventAttributes).Details, $.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).GetDataConverter())
			let err: __goscript_error.CanceledError | $.VarRef<__goscript_error.CanceledError> | null = __goscript_error.NewCanceledError($.arrayToSlice<any>([(details as any)]))
			await scheduledActivity.prototype.handle.call(__goscriptShadow0, null, $.interfaceValue<$.GoError>(err, "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError")))
		}
	}

	public async handleActivityTaskCompleted(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		const weh$: workflowExecutionEventHandlerImpl = weh == null ? $.pointerTarget<workflowExecutionEventHandlerImpl>(weh) : (weh as any).__isVarRef === true ? (weh as any).value : (weh as any).__goValue === undefined ? (weh as any) : $.pointerTarget<workflowExecutionEventHandlerImpl>(weh)
		let activityID = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.getActivityID.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, event)
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleActivityTaskClosed.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, activityID)
		let __goscriptShadow1: scheduledActivity | $.VarRef<scheduledActivity> | null = $.mustTypeAssert<scheduledActivity | $.VarRef<scheduledActivity> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledActivity"))
		if ($.pointerValue<scheduledActivity>(__goscriptShadow1).handled) {
			return
		}
		await scheduledActivity.prototype.handle.call(__goscriptShadow1, $.pointerValue<m.ActivityTaskCompletedEventAttributes>($.pointerValue<m.HistoryEvent>(event).ActivityTaskCompletedEventAttributes).Result, null)
	}

	public async handleActivityTaskFailed(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		const weh$: workflowExecutionEventHandlerImpl = weh == null ? $.pointerTarget<workflowExecutionEventHandlerImpl>(weh) : (weh as any).__isVarRef === true ? (weh as any).value : (weh as any).__goValue === undefined ? (weh as any) : $.pointerTarget<workflowExecutionEventHandlerImpl>(weh)
		let activityID = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.getActivityID.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, event)
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleActivityTaskClosed.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, activityID)
		let __goscriptShadow2: scheduledActivity | $.VarRef<scheduledActivity> | null = $.mustTypeAssert<scheduledActivity | $.VarRef<scheduledActivity> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledActivity"))
		if ($.pointerValue<scheduledActivity>(__goscriptShadow2).handled) {
			return
		}

		let attributes: m.ActivityTaskFailedEventAttributes | $.VarRef<m.ActivityTaskFailedEventAttributes> | null = $.pointerValue<m.HistoryEvent>(event).ActivityTaskFailedEventAttributes
		let attributes$: m.ActivityTaskFailedEventAttributes = attributes == null ? $.pointerTarget<m.ActivityTaskFailedEventAttributes>(attributes) : (attributes as any).__isVarRef === true ? (attributes as any).value : (attributes as any).__goValue === undefined ? (attributes as any) : $.pointerTarget<m.ActivityTaskFailedEventAttributes>(attributes)
		let err = await __goscript_internal_utils.constructError($.pointerValue<string>((attributes$ as m.ActivityTaskFailedEventAttributes).Reason), (attributes$ as m.ActivityTaskFailedEventAttributes).Details, $.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).GetDataConverter())
		await (__goscriptShadow2 !== null && (__goscriptShadow2 as any).__isVarRef !== true && (__goscriptShadow2 as any).__goValue === undefined ? ((__goscriptShadow2 as any) as scheduledActivity).handle(null, err) : scheduledActivity.prototype.handle.call(__goscriptShadow2, null, err))
	}

	public async handleActivityTaskTimedOut(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		const weh$: workflowExecutionEventHandlerImpl = weh == null ? $.pointerTarget<workflowExecutionEventHandlerImpl>(weh) : (weh as any).__isVarRef === true ? (weh as any).value : (weh as any).__goValue === undefined ? (weh as any) : $.pointerTarget<workflowExecutionEventHandlerImpl>(weh)
		let activityID = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.getActivityID.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, event)
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleActivityTaskClosed.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, activityID)
		let __goscriptShadow3: scheduledActivity | $.VarRef<scheduledActivity> | null = $.mustTypeAssert<scheduledActivity | $.VarRef<scheduledActivity> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledActivity"))
		if ($.pointerValue<scheduledActivity>(__goscriptShadow3).handled) {
			return
		}

		let err: $.GoError = null! as $.GoError
		let attributes: m.ActivityTaskTimedOutEventAttributes | $.VarRef<m.ActivityTaskTimedOutEventAttributes> | null = $.pointerValue<m.HistoryEvent>(event).ActivityTaskTimedOutEventAttributes
		let attributes$: m.ActivityTaskTimedOutEventAttributes = attributes == null ? $.pointerTarget<m.ActivityTaskTimedOutEventAttributes>(attributes) : (attributes as any).__isVarRef === true ? (attributes as any).value : (attributes as any).__goValue === undefined ? (attributes as any) : $.pointerTarget<m.ActivityTaskTimedOutEventAttributes>(attributes)
		if (($.stringLen((attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as m.ActivityTaskTimedOutEventAttributes).GetLastFailureReason() : m.ActivityTaskTimedOutEventAttributes.prototype.GetLastFailureReason.call(attributes))) > 0) && ((attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as m.ActivityTaskTimedOutEventAttributes).GetTimeoutType() : m.ActivityTaskTimedOutEventAttributes.prototype.GetTimeoutType.call(attributes)) == 0)) {
			// When retry activity timeout, it is possible that previous attempts got other customer timeout errors.
			// To stabilize the error type, we always return the customer error.
			// See more details of background: https://github.com/uber/cadence/issues/2627
			err = await __goscript_internal_utils.constructError((attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as m.ActivityTaskTimedOutEventAttributes).GetLastFailureReason() : m.ActivityTaskTimedOutEventAttributes.prototype.GetLastFailureReason.call(attributes)), (attributes$ as m.ActivityTaskTimedOutEventAttributes).LastFailureDetails, $.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).GetDataConverter())
		} else {
			let details = __goscript_workflow_testsuite.newEncodedValues((attributes$ as m.ActivityTaskTimedOutEventAttributes).Details, $.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).GetDataConverter())
			err = $.interfaceValue<$.GoError>(__goscript_error.NewTimeoutError((attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as m.ActivityTaskTimedOutEventAttributes).GetTimeoutType() : m.ActivityTaskTimedOutEventAttributes.prototype.GetTimeoutType.call(attributes)), $.arrayToSlice<any>([(details as any)])), "*internal.TimeoutError", /* @__PURE__ */ $.pointerType("internal.TimeoutError"))
		}
		await (__goscriptShadow3 !== null && (__goscriptShadow3 as any).__isVarRef !== true && (__goscriptShadow3 as any).__goValue === undefined ? ((__goscriptShadow3 as any) as scheduledActivity).handle(null, err) : scheduledActivity.prototype.handle.call(__goscriptShadow3, null, err))
	}

	public async handleChildWorkflowExecutionCanceled(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		let attributes: m.ChildWorkflowExecutionCanceledEventAttributes | $.VarRef<m.ChildWorkflowExecutionCanceledEventAttributes> | null = $.pointerValue<m.HistoryEvent>(event).ChildWorkflowExecutionCanceledEventAttributes
		let attributes$: m.ChildWorkflowExecutionCanceledEventAttributes = attributes == null ? $.pointerTarget<m.ChildWorkflowExecutionCanceledEventAttributes>(attributes) : (attributes as any).__isVarRef === true ? (attributes as any).value : (attributes as any).__goValue === undefined ? (attributes as any) : $.pointerTarget<m.ChildWorkflowExecutionCanceledEventAttributes>(attributes)
		let childWorkflowID = m.WorkflowExecution.prototype.GetWorkflowId.call((attributes$ as m.ChildWorkflowExecutionCanceledEventAttributes).WorkflowExecution)
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleChildWorkflowExecutionCanceled.call($.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).decisionsHelper, childWorkflowID)
		let childWorkflow: scheduledChildWorkflow | $.VarRef<scheduledChildWorkflow> | null = $.mustTypeAssert<scheduledChildWorkflow | $.VarRef<scheduledChildWorkflow> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledChildWorkflow"))
		if ($.pointerValue<scheduledChildWorkflow>(childWorkflow).handled) {
			return
		}
		let details = __goscript_workflow_testsuite.newEncodedValues((attributes$ as m.ChildWorkflowExecutionCanceledEventAttributes).Details, $.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).GetDataConverter())
		let err: __goscript_error.CanceledError | $.VarRef<__goscript_error.CanceledError> | null = __goscript_error.NewCanceledError($.arrayToSlice<any>([(details as any)]))
		await scheduledChildWorkflow.prototype.handle.call(childWorkflow, null, $.interfaceValue<$.GoError>(err, "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError")))
	}

	public async handleChildWorkflowExecutionCompleted(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		let attributes: m.ChildWorkflowExecutionCompletedEventAttributes | $.VarRef<m.ChildWorkflowExecutionCompletedEventAttributes> | null = $.pointerValue<m.HistoryEvent>(event).ChildWorkflowExecutionCompletedEventAttributes
		let attributes$: m.ChildWorkflowExecutionCompletedEventAttributes = attributes == null ? $.pointerTarget<m.ChildWorkflowExecutionCompletedEventAttributes>(attributes) : (attributes as any).__isVarRef === true ? (attributes as any).value : (attributes as any).__goValue === undefined ? (attributes as any) : $.pointerTarget<m.ChildWorkflowExecutionCompletedEventAttributes>(attributes)
		let childWorkflowID = m.WorkflowExecution.prototype.GetWorkflowId.call((attributes$ as m.ChildWorkflowExecutionCompletedEventAttributes).WorkflowExecution)
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleChildWorkflowExecutionClosed.call($.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).decisionsHelper, childWorkflowID)
		let childWorkflow: scheduledChildWorkflow | $.VarRef<scheduledChildWorkflow> | null = $.mustTypeAssert<scheduledChildWorkflow | $.VarRef<scheduledChildWorkflow> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledChildWorkflow"))
		if ($.pointerValue<scheduledChildWorkflow>(childWorkflow).handled) {
			return
		}
		await (childWorkflow !== null && (childWorkflow as any).__isVarRef !== true && (childWorkflow as any).__goValue === undefined ? ((childWorkflow as any) as scheduledChildWorkflow).handle((attributes$ as m.ChildWorkflowExecutionCompletedEventAttributes).Result, null) : scheduledChildWorkflow.prototype.handle.call(childWorkflow, (attributes$ as m.ChildWorkflowExecutionCompletedEventAttributes).Result, null))
	}

	public async handleChildWorkflowExecutionFailed(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		let attributes: m.ChildWorkflowExecutionFailedEventAttributes | $.VarRef<m.ChildWorkflowExecutionFailedEventAttributes> | null = $.pointerValue<m.HistoryEvent>(event).ChildWorkflowExecutionFailedEventAttributes
		let attributes$: m.ChildWorkflowExecutionFailedEventAttributes = attributes == null ? $.pointerTarget<m.ChildWorkflowExecutionFailedEventAttributes>(attributes) : (attributes as any).__isVarRef === true ? (attributes as any).value : (attributes as any).__goValue === undefined ? (attributes as any) : $.pointerTarget<m.ChildWorkflowExecutionFailedEventAttributes>(attributes)
		let childWorkflowID = m.WorkflowExecution.prototype.GetWorkflowId.call((attributes$ as m.ChildWorkflowExecutionFailedEventAttributes).WorkflowExecution)
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleChildWorkflowExecutionClosed.call($.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).decisionsHelper, childWorkflowID)
		let childWorkflow: scheduledChildWorkflow | $.VarRef<scheduledChildWorkflow> | null = $.mustTypeAssert<scheduledChildWorkflow | $.VarRef<scheduledChildWorkflow> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledChildWorkflow"))
		if ($.pointerValue<scheduledChildWorkflow>(childWorkflow).handled) {
			return
		}

		let err = await __goscript_internal_utils.constructError((attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as m.ChildWorkflowExecutionFailedEventAttributes).GetReason() : m.ChildWorkflowExecutionFailedEventAttributes.prototype.GetReason.call(attributes)), (attributes$ as m.ChildWorkflowExecutionFailedEventAttributes).Details, $.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).GetDataConverter())
		await (childWorkflow !== null && (childWorkflow as any).__isVarRef !== true && (childWorkflow as any).__goValue === undefined ? ((childWorkflow as any) as scheduledChildWorkflow).handle(null, err) : scheduledChildWorkflow.prototype.handle.call(childWorkflow, null, err))
	}

	public async handleChildWorkflowExecutionStarted(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		let attributes: m.ChildWorkflowExecutionStartedEventAttributes | $.VarRef<m.ChildWorkflowExecutionStartedEventAttributes> | null = $.pointerValue<m.HistoryEvent>(event).ChildWorkflowExecutionStartedEventAttributes
		let attributes$: m.ChildWorkflowExecutionStartedEventAttributes = attributes == null ? $.pointerTarget<m.ChildWorkflowExecutionStartedEventAttributes>(attributes) : (attributes as any).__isVarRef === true ? (attributes as any).value : (attributes as any).__goValue === undefined ? (attributes as any) : $.pointerTarget<m.ChildWorkflowExecutionStartedEventAttributes>(attributes)
		let childWorkflowID = m.WorkflowExecution.prototype.GetWorkflowId.call((attributes$ as m.ChildWorkflowExecutionStartedEventAttributes).WorkflowExecution)
		let childRunID = m.WorkflowExecution.prototype.GetRunId.call((attributes$ as m.ChildWorkflowExecutionStartedEventAttributes).WorkflowExecution)
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleChildWorkflowExecutionStarted.call($.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).decisionsHelper, childWorkflowID)
		let childWorkflow: scheduledChildWorkflow | $.VarRef<scheduledChildWorkflow> | null = $.mustTypeAssert<scheduledChildWorkflow | $.VarRef<scheduledChildWorkflow> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledChildWorkflow"))
		let childWorkflow$: scheduledChildWorkflow = childWorkflow == null ? $.pointerTarget<scheduledChildWorkflow>(childWorkflow) : (childWorkflow as any).__isVarRef === true ? (childWorkflow as any).value : (childWorkflow as any).__goValue === undefined ? (childWorkflow as any) : $.pointerTarget<scheduledChildWorkflow>(childWorkflow)
		if ((childWorkflow$ as scheduledChildWorkflow).handled) {
			return
		}

		let childWorkflowExecution = new __goscript_workflow.WorkflowExecution({ID: childWorkflowID, RunID: childRunID}, true)
		void (__goscriptAwait = (childWorkflow$ as scheduledChildWorkflow).startedCallback!((childWorkflowExecution).clone(), null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async handleChildWorkflowExecutionTerminated(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		let attributes: m.ChildWorkflowExecutionTerminatedEventAttributes | $.VarRef<m.ChildWorkflowExecutionTerminatedEventAttributes> | null = $.pointerValue<m.HistoryEvent>(event).ChildWorkflowExecutionTerminatedEventAttributes
		let childWorkflowID = m.WorkflowExecution.prototype.GetWorkflowId.call($.pointerValue<m.ChildWorkflowExecutionTerminatedEventAttributes>(attributes).WorkflowExecution)
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleChildWorkflowExecutionClosed.call($.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).decisionsHelper, childWorkflowID)
		let childWorkflow: scheduledChildWorkflow | $.VarRef<scheduledChildWorkflow> | null = $.mustTypeAssert<scheduledChildWorkflow | $.VarRef<scheduledChildWorkflow> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledChildWorkflow"))
		if ($.pointerValue<scheduledChildWorkflow>(childWorkflow).handled) {
			return
		}
		let err: __goscript_error.TerminatedError | $.VarRef<__goscript_error.TerminatedError> | null = __goscript_error.newTerminatedError()
		await scheduledChildWorkflow.prototype.handle.call(childWorkflow, null, $.interfaceValue<$.GoError>(err, "*internal.TerminatedError", /* @__PURE__ */ $.pointerType("internal.TerminatedError")))
	}

	public async handleChildWorkflowExecutionTimedOut(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		let attributes: m.ChildWorkflowExecutionTimedOutEventAttributes | $.VarRef<m.ChildWorkflowExecutionTimedOutEventAttributes> | null = $.pointerValue<m.HistoryEvent>(event).ChildWorkflowExecutionTimedOutEventAttributes
		let childWorkflowID = m.WorkflowExecution.prototype.GetWorkflowId.call($.pointerValue<m.ChildWorkflowExecutionTimedOutEventAttributes>(attributes).WorkflowExecution)
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleChildWorkflowExecutionClosed.call($.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).decisionsHelper, childWorkflowID)
		let childWorkflow: scheduledChildWorkflow | $.VarRef<scheduledChildWorkflow> | null = $.mustTypeAssert<scheduledChildWorkflow | $.VarRef<scheduledChildWorkflow> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledChildWorkflow"))
		if ($.pointerValue<scheduledChildWorkflow>(childWorkflow).handled) {
			return
		}
		let err: __goscript_error.TimeoutError | $.VarRef<__goscript_error.TimeoutError> | null = __goscript_error.NewTimeoutError((attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as m.ChildWorkflowExecutionTimedOutEventAttributes).GetTimeoutType() : m.ChildWorkflowExecutionTimedOutEventAttributes.prototype.GetTimeoutType.call(attributes)), null)
		await (childWorkflow !== null && (childWorkflow as any).__isVarRef !== true && (childWorkflow as any).__goValue === undefined ? ((childWorkflow as any) as scheduledChildWorkflow).handle(null, $.interfaceValue<$.GoError>(err, "*internal.TimeoutError", /* @__PURE__ */ $.pointerType("internal.TimeoutError"))) : scheduledChildWorkflow.prototype.handle.call(childWorkflow, null, $.interfaceValue<$.GoError>(err, "*internal.TimeoutError", /* @__PURE__ */ $.pointerType("internal.TimeoutError"))))
	}

	public async handleExternalWorkflowExecutionCancelRequested(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		// For cancellation of child workflow only, we do not use cancellation ID
		// for cancellation of external workflow, we have to use cancellation ID
		let attributes: m.ExternalWorkflowExecutionCancelRequestedEventAttributes | $.VarRef<m.ExternalWorkflowExecutionCancelRequestedEventAttributes> | null = $.pointerValue<m.HistoryEvent>(event).ExternalWorkflowExecutionCancelRequestedEventAttributes
		let workflowID = m.WorkflowExecution.prototype.GetWorkflowId.call($.pointerValue<m.ExternalWorkflowExecutionCancelRequestedEventAttributes>(attributes).WorkflowExecution)
		let [isExternal, decision] = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleExternalWorkflowExecutionCancelRequested.call($.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).decisionsHelper, (attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as m.ExternalWorkflowExecutionCancelRequestedEventAttributes).GetInitiatedEventId() : m.ExternalWorkflowExecutionCancelRequestedEventAttributes.prototype.GetInitiatedEventId.call(attributes)), workflowID)
		if (isExternal) {
			// for cancel external workflow, we need to set the future
			let cancellation: scheduledCancellation | $.VarRef<scheduledCancellation> | null = $.mustTypeAssert<scheduledCancellation | $.VarRef<scheduledCancellation> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledCancellation"))
			if ($.pointerValue<scheduledCancellation>(cancellation).handled) {
				return
			}
			await (cancellation !== null && (cancellation as any).__isVarRef !== true && (cancellation as any).__goValue === undefined ? ((cancellation as any) as scheduledCancellation).handle(null, null) : scheduledCancellation.prototype.handle.call(cancellation, null, null))
		}
	}

	public async handleLocalActivityMarker(markerData: $.Slice<number>): globalThis.Promise<$.GoError> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		const weh$: workflowExecutionEventHandlerImpl = weh == null ? $.pointerTarget<workflowExecutionEventHandlerImpl>(weh) : (weh as any).__isVarRef === true ? (weh as any).value : (weh as any).__goValue === undefined ? (weh as any) : $.pointerTarget<workflowExecutionEventHandlerImpl>(weh)
		let lamd: $.VarRef<localActivityMarkerData> = $.varRef(new localActivityMarkerData(undefined, true))
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_encoded.Value, null>>(__goscript_workflow.newEncodedValue(markerData, $.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).dataConverter)).Get($.interfaceValue(lamd, "*internal.localActivityMarkerData", /* @__PURE__ */ $.pointerType("internal.localActivityMarkerData"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		{
			let __goscriptTuple3: any = $.mapGet<string, localActivityTask | $.VarRef<localActivityTask> | null, localActivityTask | $.VarRef<localActivityTask> | null>($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).pendingLaTasks, lamd.value.ActivityID, null)
			let la: localActivityTask | $.VarRef<localActivityTask> | null = __goscriptTuple3[0]
			let ok = __goscriptTuple3[1]
			if (ok) {
				if (($.stringLen(lamd.value.ActivityType) > 0) && (!$.stringEqual(__goscript_workflow_replayer_utils.lastPartOfName(lamd.value.ActivityType), __goscript_workflow_replayer_utils.lastPartOfName($.pointerValue<__goscript_internal_activity.executeLocalActivityParams>($.pointerValue<localActivityTask>(la).params).ActivityType)))) {
					// history marker mismatch to the current code.
					let panicMsg = await fmt.Sprintf("code execute local activity %v, but history event found %v, markerData: %v", $.pointerValue<__goscript_internal_activity.executeLocalActivityParams>($.pointerValue<localActivityTask>(la).params).ActivityType, lamd.value.ActivityType, $.bytesToString(markerData))
					__goscript_internal_decision_state_machine.panicIllegalState(panicMsg)
				}
				await __goscript_internal_decision_state_machine.decisionsHelper.prototype.recordLocalActivityMarker.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).decisionsHelper, lamd.value.ActivityID, markerData)
				$.deleteMapEntry($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).pendingLaTasks, lamd.value.ActivityID)
				$.deleteMapEntry($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).unstartedLaTasks, lamd.value.ActivityID)
				let lar: __goscript_internal_worker_base.localActivityResultWrapper | $.VarRef<__goscript_internal_worker_base.localActivityResultWrapper> | null = new __goscript_internal_worker_base.localActivityResultWrapper()
				let lar$: __goscript_internal_worker_base.localActivityResultWrapper = lar == null ? $.pointerTarget<__goscript_internal_worker_base.localActivityResultWrapper>(lar) : (lar as any).__isVarRef === true ? (lar as any).value : (lar as any).__goValue === undefined ? (lar as any) : $.pointerTarget<__goscript_internal_worker_base.localActivityResultWrapper>(lar)
				if ($.stringLen(lamd.value.ErrReason) > 0) {
					;(lar$ as __goscript_internal_worker_base.localActivityResultWrapper).attempt = lamd.value.Attempt;
					;(lar$ as __goscript_internal_worker_base.localActivityResultWrapper).backoff = lamd.value.Backoff;
					;(lar$ as __goscript_internal_worker_base.localActivityResultWrapper).err = await __goscript_internal_utils.constructError(lamd.value.ErrReason, $.stringToBytes(lamd.value.ErrJSON), $.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).GetDataConverter())
				} else {
					if ($.stringLen(lamd.value.ResultJSON) > 0) {
						;(lar$ as __goscript_internal_worker_base.localActivityResultWrapper).result = $.stringToBytes(lamd.value.ResultJSON)
					}
				}
				void (__goscriptAwait = $.pointerValue<localActivityTask>(la).callback!(lar), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

				// update time
				$.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).SetCurrentReplayTime($.markAsStructValue($.cloneStructValue(lamd.value.ReplayTime)))

				// resume workflow execution after apply local activity result
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowDefinition, null>>((weh$ as workflowExecutionEventHandlerImpl).workflowDefinition).OnDecisionTaskStarted(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		return null
	}

	public async handleMarkerRecorded(eventID: bigint, attributes: m.MarkerRecordedEventAttributes | $.VarRef<m.MarkerRecordedEventAttributes> | null): globalThis.Promise<$.GoError> {
		let weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		const weh$: workflowExecutionEventHandlerImpl = weh == null ? $.pointerTarget<workflowExecutionEventHandlerImpl>(weh) : (weh as any).__isVarRef === true ? (weh as any).value : (weh as any).__goValue === undefined ? (weh as any) : $.pointerTarget<workflowExecutionEventHandlerImpl>(weh)
		const attributes$: m.MarkerRecordedEventAttributes = attributes == null ? $.pointerTarget<m.MarkerRecordedEventAttributes>(attributes) : (attributes as any).__isVarRef === true ? (attributes as any).value : (attributes as any).__goValue === undefined ? (attributes as any) : $.pointerTarget<m.MarkerRecordedEventAttributes>(attributes)
		let encodedValues = __goscript_workflow_testsuite.newEncodedValues((attributes$ as m.MarkerRecordedEventAttributes).Details, $.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).dataConverter)
		switch ((attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as m.MarkerRecordedEventAttributes).GetMarkerName() : m.MarkerRecordedEventAttributes.prototype.GetMarkerName.call(attributes))) {
			case "SideEffect":
			{
				let sideEffectID: $.VarRef<number> = $.varRef(0)
				let result: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
				let err = (__goscriptAwait = (encodedValues !== null && (encodedValues as any).__isVarRef !== true && (encodedValues as any).__goValue === undefined ? (encodedValues as Exclude<__goscript_encoded.Values, null>) : $.pointerValue<Exclude<__goscript_encoded.Values, null>>(encodedValues)).Get($.arrayToSlice<any>([$.interfaceValue(sideEffectID, "*int32", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32"))), $.interfaceValue(result, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return fmt.Errorf("extract side effect: %w", (err as any))
				}
				$.mapSet($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).sideEffectResult, sideEffectID.value, result.value)
				return null
				break
			}
			case "Version":
			{
				let changeID: $.VarRef<string> = $.varRef("")
				let version: $.VarRef<__goscript_workflow.Version> = $.varRef(0)
				let err = (__goscriptAwait = (encodedValues !== null && (encodedValues as any).__isVarRef !== true && (encodedValues as any).__goValue === undefined ? (encodedValues as Exclude<__goscript_encoded.Values, null>) : $.pointerValue<Exclude<__goscript_encoded.Values, null>>(encodedValues)).Get($.arrayToSlice<any>([$.interfaceValue(changeID, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))), $.interfaceValue(version, "*internal.Version", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "internal.Version")))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return fmt.Errorf("extract change id: %w", (err as any))
				}
				$.mapSet($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).changeVersions, changeID.value, version.value)
				return null
				break
			}
			case "LocalActivity":
			{
				return (weh !== null && (weh as any).__isVarRef !== true && (weh as any).__goValue === undefined ? ((weh as any) as workflowExecutionEventHandlerImpl).handleLocalActivityMarker((attributes$ as m.MarkerRecordedEventAttributes).Details) : workflowExecutionEventHandlerImpl.prototype.handleLocalActivityMarker.call(weh, (attributes$ as m.MarkerRecordedEventAttributes).Details))
				break
			}
			case "MutableSideEffect":
			{
				let fixedID: $.VarRef<string> = $.varRef("")
				let result: $.VarRef<string> = $.varRef("")
				let err = (__goscriptAwait = (encodedValues !== null && (encodedValues as any).__isVarRef !== true && (encodedValues as any).__goValue === undefined ? (encodedValues as Exclude<__goscript_encoded.Values, null>) : $.pointerValue<Exclude<__goscript_encoded.Values, null>>(encodedValues)).Get($.arrayToSlice<any>([$.interfaceValue(fixedID, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))), $.interfaceValue(result, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return fmt.Errorf("extract fixed id: %w", (err as any))
				}
				$.mapSet($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).mutableSideEffect, fixedID.value, $.stringToBytes(result.value))
				return null
				break
			}
			default:
			{
				return fmt.Errorf("unknown marker name \"%v\" for eventID \"%v\"", (attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as m.MarkerRecordedEventAttributes).GetMarkerName() : m.MarkerRecordedEventAttributes.prototype.GetMarkerName.call(attributes)), $.basicInterfaceValue(eventID, "int64"))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async handleRequestCancelExternalWorkflowExecutionFailed(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		// For cancellation of child workflow only, we do not use cancellation ID
		// for cancellation of external workflow, we have to use cancellation ID
		let attributes: m.RequestCancelExternalWorkflowExecutionFailedEventAttributes | $.VarRef<m.RequestCancelExternalWorkflowExecutionFailedEventAttributes> | null = $.pointerValue<m.HistoryEvent>(event).RequestCancelExternalWorkflowExecutionFailedEventAttributes
		let workflowID = m.WorkflowExecution.prototype.GetWorkflowId.call($.pointerValue<m.RequestCancelExternalWorkflowExecutionFailedEventAttributes>(attributes).WorkflowExecution)
		let [isExternal, decision] = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleRequestCancelExternalWorkflowExecutionFailed.call($.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).decisionsHelper, (attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as m.RequestCancelExternalWorkflowExecutionFailedEventAttributes).GetInitiatedEventId() : m.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.GetInitiatedEventId.call(attributes)), workflowID)
		if (isExternal) {
			// for cancel external workflow, we need to set the future
			let cancellation: scheduledCancellation | $.VarRef<scheduledCancellation> | null = $.mustTypeAssert<scheduledCancellation | $.VarRef<scheduledCancellation> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledCancellation"))
			if ($.pointerValue<scheduledCancellation>(cancellation).handled) {
				return
			}
			let err = fmt.Errorf("cancel external workflow failed, %v", $.namedValueInterfaceValue<any>((attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as m.RequestCancelExternalWorkflowExecutionFailedEventAttributes).GetCause() : m.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.GetCause.call(attributes)), "shared.CancelExternalWorkflowExecutionFailedCause", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			await (cancellation !== null && (cancellation as any).__isVarRef !== true && (cancellation as any).__goValue === undefined ? ((cancellation as any) as scheduledCancellation).handle(null, err) : scheduledCancellation.prototype.handle.call(cancellation, null, err))
		}
	}

	public async handleRequestCancelExternalWorkflowExecutionInitiated(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		// For cancellation of child workflow only, we do not use cancellation ID
		// for cancellation of external workflow, we have to use cancellation ID
		let attribute: m.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes | $.VarRef<m.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes> | null = $.pointerValue<m.HistoryEvent>(event).RequestCancelExternalWorkflowExecutionInitiatedEventAttributes
		let attribute$: m.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = attribute == null ? $.pointerTarget<m.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes>(attribute) : (attribute as any).__isVarRef === true ? (attribute as any).value : (attribute as any).__goValue === undefined ? (attribute as any) : $.pointerTarget<m.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes>(attribute)
		let workflowID = m.WorkflowExecution.prototype.GetWorkflowId.call((attribute$ as m.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes).WorkflowExecution)
		let cancellationID = $.bytesToString((attribute$ as m.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes).Control)
		await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleRequestCancelExternalWorkflowExecutionInitiated.call($.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).decisionsHelper, (event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as m.HistoryEvent).GetEventId() : m.HistoryEvent.prototype.GetEventId.call(event)), workflowID, cancellationID)
	}

	public async handleSignalExternalWorkflowExecutionCompleted(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		let attributes: m.ExternalWorkflowExecutionSignaledEventAttributes | $.VarRef<m.ExternalWorkflowExecutionSignaledEventAttributes> | null = $.pointerValue<m.HistoryEvent>(event).ExternalWorkflowExecutionSignaledEventAttributes
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleSignalExternalWorkflowExecutionCompleted.call($.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).decisionsHelper, (attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as m.ExternalWorkflowExecutionSignaledEventAttributes).GetInitiatedEventId() : m.ExternalWorkflowExecutionSignaledEventAttributes.prototype.GetInitiatedEventId.call(attributes)))
		let signal: scheduledSignal | $.VarRef<scheduledSignal> | null = $.mustTypeAssert<scheduledSignal | $.VarRef<scheduledSignal> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledSignal"))
		if ($.pointerValue<scheduledSignal>(signal).handled) {
			return
		}
		await (signal !== null && (signal as any).__isVarRef !== true && (signal as any).__goValue === undefined ? ((signal as any) as scheduledSignal).handle(null, null) : scheduledSignal.prototype.handle.call(signal, null, null))
	}

	public async handleSignalExternalWorkflowExecutionFailed(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		let attributes: m.SignalExternalWorkflowExecutionFailedEventAttributes | $.VarRef<m.SignalExternalWorkflowExecutionFailedEventAttributes> | null = $.pointerValue<m.HistoryEvent>(event).SignalExternalWorkflowExecutionFailedEventAttributes
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleSignalExternalWorkflowExecutionFailed.call($.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).decisionsHelper, (attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as m.SignalExternalWorkflowExecutionFailedEventAttributes).GetInitiatedEventId() : m.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.GetInitiatedEventId.call(attributes)))
		let signal: scheduledSignal | $.VarRef<scheduledSignal> | null = $.mustTypeAssert<scheduledSignal | $.VarRef<scheduledSignal> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledSignal"))
		if ($.pointerValue<scheduledSignal>(signal).handled) {
			return
		}

		let err: $.GoError = null! as $.GoError
		switch ((attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as m.SignalExternalWorkflowExecutionFailedEventAttributes).GetCause() : m.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.GetCause.call(attributes))) {
			case shared.SignalExternalWorkflowExecutionFailedCauseUnknownExternalWorkflowExecution:
			{
				err = $.interfaceValue<$.GoError>(__goscript_error.newUnknownExternalWorkflowExecutionError(), "*internal.UnknownExternalWorkflowExecutionError", /* @__PURE__ */ $.pointerType("internal.UnknownExternalWorkflowExecutionError"))
				break
			}
			default:
			{
				err = fmt.Errorf("signal external workflow failed, %v", $.namedValueInterfaceValue<any>((attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as m.SignalExternalWorkflowExecutionFailedEventAttributes).GetCause() : m.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.GetCause.call(attributes)), "shared.SignalExternalWorkflowExecutionFailedCause", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()))
				break
			}
		}

		await (signal !== null && (signal as any).__isVarRef !== true && (signal as any).__goValue === undefined ? ((signal as any) as scheduledSignal).handle(null, err) : scheduledSignal.prototype.handle.call(signal, null, err))
	}

	public async handleStartChildWorkflowExecutionFailed(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		let attributes: m.StartChildWorkflowExecutionFailedEventAttributes | $.VarRef<m.StartChildWorkflowExecutionFailedEventAttributes> | null = $.pointerValue<m.HistoryEvent>(event).StartChildWorkflowExecutionFailedEventAttributes
		let childWorkflowID = (attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as m.StartChildWorkflowExecutionFailedEventAttributes).GetWorkflowId() : m.StartChildWorkflowExecutionFailedEventAttributes.prototype.GetWorkflowId.call(attributes))
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleStartChildWorkflowExecutionFailed.call($.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).decisionsHelper, childWorkflowID)
		let childWorkflow: scheduledChildWorkflow | $.VarRef<scheduledChildWorkflow> | null = $.mustTypeAssert<scheduledChildWorkflow | $.VarRef<scheduledChildWorkflow> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledChildWorkflow"))
		let childWorkflow$: scheduledChildWorkflow = childWorkflow == null ? $.pointerTarget<scheduledChildWorkflow>(childWorkflow) : (childWorkflow as any).__isVarRef === true ? (childWorkflow as any).value : (childWorkflow as any).__goValue === undefined ? (childWorkflow as any) : $.pointerTarget<scheduledChildWorkflow>(childWorkflow)
		if ((childWorkflow$ as scheduledChildWorkflow).handled) {
			return
		}

		let err: m.WorkflowExecutionAlreadyStartedError | $.VarRef<m.WorkflowExecutionAlreadyStartedError> | null = (() => { const __goscriptLiteralField3 = common.StringPtr("Workflow execution already started"); return new m.WorkflowExecutionAlreadyStartedError({Message: __goscriptLiteralField3}) })()
		void (__goscriptAwait = (childWorkflow$ as scheduledChildWorkflow).startedCallback!(new __goscript_workflow.WorkflowExecution(undefined, true), $.interfaceValue<$.GoError>(err, "*shared.WorkflowExecutionAlreadyStartedError", /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyStartedError"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await scheduledChildWorkflow.prototype.handle.call(childWorkflow, null, $.interfaceValue<$.GoError>(err, "*shared.WorkflowExecutionAlreadyStartedError", /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyStartedError")))
	}

	public async handleTimerFired(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		let timerID = m.TimerFiredEventAttributes.prototype.GetTimerId.call($.pointerValue<m.HistoryEvent>(event).TimerFiredEventAttributes)
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.handleTimerClosed.call($.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).decisionsHelper, timerID)
		let timer: scheduledTimer | $.VarRef<scheduledTimer> | null = $.mustTypeAssert<scheduledTimer | $.VarRef<scheduledTimer> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledTimer"))
		if ($.pointerValue<scheduledTimer>(timer).handled) {
			return
		}

		await (timer !== null && (timer as any).__isVarRef !== true && (timer as any).__goValue === undefined ? ((timer as any) as scheduledTimer).handle(null, null) : scheduledTimer.prototype.handle.call(timer, null, null))
	}

	public handleUpsertWorkflowSearchAttributes(event: m.HistoryEvent | $.VarRef<m.HistoryEvent> | null): void {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		$.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).updateWorkflowInfoWithSearchAttributes($.pointerValue<m.UpsertWorkflowSearchAttributesEventAttributes>($.pointerValue<m.HistoryEvent>(event).UpsertWorkflowSearchAttributesEventAttributes).SearchAttributes)
	}

	public async handleWorkflowExecutionCancelRequested(): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		void (__goscriptAwait = $.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).cancelHandler!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async handleWorkflowExecutionSignaled(attributes: m.WorkflowExecutionSignaledEventAttributes | $.VarRef<m.WorkflowExecutionSignaledEventAttributes> | null): globalThis.Promise<void> {
		const weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		void (__goscriptAwait = $.pointerValue<workflowEnvironmentImpl>($.pointerValue<workflowExecutionEventHandlerImpl>(weh).workflowEnvironmentImpl).signalHandler!((attributes !== null && (attributes as any).__isVarRef !== true && (attributes as any).__goValue === undefined ? ((attributes as any) as m.WorkflowExecutionSignaledEventAttributes).GetSignalName() : m.WorkflowExecutionSignaledEventAttributes.prototype.GetSignalName.call(attributes)), $.pointerValue<m.WorkflowExecutionSignaledEventAttributes>(attributes).Input), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async handleWorkflowExecutionStarted(attributes: m.WorkflowExecutionStartedEventAttributes | $.VarRef<m.WorkflowExecutionStartedEventAttributes> | null): globalThis.Promise<$.GoError> {
		let weh: workflowExecutionEventHandlerImpl | $.VarRef<workflowExecutionEventHandlerImpl> | null = this;
		let err: $.GoError = null! as $.GoError
		const weh$: workflowExecutionEventHandlerImpl = weh == null ? $.pointerTarget<workflowExecutionEventHandlerImpl>(weh) : (weh as any).__isVarRef === true ? (weh as any).value : (weh as any).__goValue === undefined ? (weh as any) : $.pointerTarget<workflowExecutionEventHandlerImpl>(weh)
		const attributes$: m.WorkflowExecutionStartedEventAttributes = attributes == null ? $.pointerTarget<m.WorkflowExecutionStartedEventAttributes>(attributes) : (attributes as any).__isVarRef === true ? (attributes as any).value : (attributes as any).__goValue === undefined ? (attributes as any) : $.pointerTarget<m.WorkflowExecutionStartedEventAttributes>(attributes)
		let __goscriptTuple4: any = await __goscript_registry.registry.prototype.getWorkflowDefinition.call($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).registry, ($.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<workflowEnvironmentImpl>((weh$ as workflowExecutionEventHandlerImpl).workflowEnvironmentImpl).workflowInfo).WorkflowType).clone());
		;(weh$ as workflowExecutionEventHandlerImpl).workflowDefinition = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return err
		}

		// Invoke the workflow.
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowDefinition, null>>((weh$ as workflowExecutionEventHandlerImpl).workflowDefinition).Execute($.interfaceValue<__goscript_internal_worker_base.workflowEnvironment | null>(weh, "*internal.workflowExecutionEventHandlerImpl", /* @__PURE__ */ $.pointerType("internal.workflowExecutionEventHandlerImpl")), (attributes$ as m.WorkflowExecutionStartedEventAttributes).Header, (attributes$ as m.WorkflowExecutionStartedEventAttributes).Input), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	public AddSession(sessionInfo: any): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).AddSession(sessionInfo)
	}

	public async Complete(result: any, err: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).Complete(result, err)
	}

	public async ExecuteActivity(parameters: any, callback: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).ExecuteActivity(parameters, callback)
	}

	public async ExecuteChildWorkflow(params: any, callback: any, startedHandler: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).ExecuteChildWorkflow(params, callback, startedHandler)
	}

	public async ExecuteLocalActivity(params: any, callback: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).ExecuteLocalActivity(params, callback)
	}

	public GenerateSequence(): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).GenerateSequence()
	}

	public async GenerateSequenceID(): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).GenerateSequenceID()
	}

	public GetContextPropagators(): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).GetContextPropagators()
	}

	public GetDataConverter(): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).GetDataConverter()
	}

	public GetFeatureFlags(): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).GetFeatureFlags()
	}

	public GetLogger(): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).GetLogger()
	}

	public GetMetricsScope(): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).GetMetricsScope()
	}

	public GetRegistry(): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).GetRegistry()
	}

	public GetTracer(): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).GetTracer()
	}

	public async GetVersion(changeID: any, minSupported: any, maxSupported: any, opts: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).GetVersion(changeID, minSupported, maxSupported, opts)
	}

	public GetWorkflowInterceptors(): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).GetWorkflowInterceptors()
	}

	public IsReplaying(): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).IsReplaying()
	}

	public async MutableSideEffect(id: any, f: any, equals: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).MutableSideEffect(id, f, equals)
	}

	public async NewTimer(d: any, callback: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).NewTimer(d, callback)
	}

	public Now(): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).Now()
	}

	public RegisterCancelHandler(handler: any): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).RegisterCancelHandler(handler)
	}

	public RegisterQueryHandler(handler: any): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).RegisterQueryHandler(handler)
	}

	public RegisterSignalHandler(handler: any): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).RegisterSignalHandler(handler)
	}

	public RemoveSession(sessionID: any): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).RemoveSession(sessionID)
	}

	public async RequestCancelActivity(activityID: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).RequestCancelActivity(activityID)
	}

	public async RequestCancelChildWorkflow(domainName: any, workflowID: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).RequestCancelChildWorkflow(domainName, workflowID)
	}

	public async RequestCancelExternalWorkflow(domainName: any, workflowID: any, runID: any, callback: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).RequestCancelExternalWorkflow(domainName, workflowID, runID, callback)
	}

	public async RequestCancelLocalActivity(activityID: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).RequestCancelLocalActivity(activityID)
	}

	public async RequestCancelTimer(timerID: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).RequestCancelTimer(timerID)
	}

	public SetCurrentReplayTime(replayTime: any): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).SetCurrentReplayTime(replayTime)
	}

	public async SideEffect(f: any, callback: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).SideEffect(f, callback)
	}

	public async SignalExternalWorkflow(domainName: any, workflowID: any, runID: any, signalName: any, input: any, _p5: any, childWorkflowOnly: any, callback: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).SignalExternalWorkflow(domainName, workflowID, runID, signalName, input, _p5, childWorkflowOnly, callback)
	}

	public async UpsertSearchAttributes(attributes: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).UpsertSearchAttributes(attributes)
	}

	public WorkflowInfo(): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).WorkflowInfo()
	}

	public async encodeArg(arg: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).encodeArg(arg)
	}

	public async encodeValue(value: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).encodeValue(value)
	}

	public getOpenSessions(): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).getOpenSessions()
	}

	public async isEqualValue(newValue: any, encodedOldValue: any, equals: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).isEqualValue(newValue, encodedOldValue, equals)
	}

	public async recordMutableSideEffect(id: any, data: any): globalThis.Promise<any> {
		return await $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).recordMutableSideEffect(id, data)
	}

	public updateWorkflowInfoWithSearchAttributes(attributes: any): any {
		return $.pointerValue<workflowEnvironmentImpl>(this.workflowEnvironmentImpl).updateWorkflowInfoWithSearchAttributes(attributes)
	}

	static __typeInfo = $.registerStructType(
		"internal.workflowExecutionEventHandlerImpl",
		() => new workflowExecutionEventHandlerImpl(),
		() => [$.methodSignature("Close", [], [], true), $.methodSignature("KnownQueryTypes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("ProcessEvent", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")], ["isReplay", /* @__PURE__ */ $.basicType("bool")], ["isLast", /* @__PURE__ */ $.basicType("bool")]], [["err", "error"]], true), $.methodSignature("ProcessLocalActivityResult", [["lar", /* @__PURE__ */ $.pointerType("internal.localActivityResult")]], ["error"], true), $.methodSignature("ProcessQuery", [["queryType", /* @__PURE__ */ $.basicType("string")], ["queryArgs", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("StackTrace", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("handleActivityTaskCanceled", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleActivityTaskCompleted", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleActivityTaskFailed", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleActivityTaskTimedOut", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleChildWorkflowExecutionCanceled", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleChildWorkflowExecutionCompleted", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleChildWorkflowExecutionFailed", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleChildWorkflowExecutionStarted", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleChildWorkflowExecutionTerminated", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleChildWorkflowExecutionTimedOut", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleExternalWorkflowExecutionCancelRequested", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleLocalActivityMarker", [["markerData", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("handleMarkerRecorded", [["eventID", /* @__PURE__ */ $.basicType("int64")], ["attributes", /* @__PURE__ */ $.pointerType("shared.MarkerRecordedEventAttributes")]], ["error"], true), $.methodSignature("handleRequestCancelExternalWorkflowExecutionFailed", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleRequestCancelExternalWorkflowExecutionInitiated", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleSignalExternalWorkflowExecutionCompleted", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleSignalExternalWorkflowExecutionFailed", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleStartChildWorkflowExecutionFailed", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleTimerFired", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleUpsertWorkflowSearchAttributes", [["event", /* @__PURE__ */ $.pointerType("shared.HistoryEvent")]], [], true), $.methodSignature("handleWorkflowExecutionCancelRequested", [], [], true), $.methodSignature("handleWorkflowExecutionSignaled", [["attributes", /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionSignaledEventAttributes")]], [], true), $.methodSignature("handleWorkflowExecutionStarted", [["attributes", /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionStartedEventAttributes")]], [["err", "error"]], true), $.methodSignature("AddSession", [["sessionInfo", /* @__PURE__ */ $.pointerType("internal.SessionInfo")]]), $.methodSignature("Complete", [["result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]]), $.methodSignature("ExecuteActivity", [["parameters", "internal.executeActivityParams"], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.activityInfo")]), $.methodSignature("ExecuteChildWorkflow", [["params", "internal.executeWorkflowParams"], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)], ["startedHandler", ({ kind: $.TypeKind.Function, params: ["internal.WorkflowExecution", "error"], results: [] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("ExecuteLocalActivity", [["params", "internal.executeLocalActivityParams"], ["callback", ({ kind: $.TypeKind.Function, name: "internal.laResultHandler", params: [/* @__PURE__ */ $.pointerType("internal.localActivityResultWrapper")], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.localActivityInfo")]), $.methodSignature("GenerateSequence", [], [/* @__PURE__ */ $.basicType("int32")]), $.methodSignature("GenerateSequenceID", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("GetContextPropagators", [], [/* @__PURE__ */ $.sliceType("internal.ContextPropagator")]), $.methodSignature("GetDataConverter", [], ["internal.DataConverter"]), $.methodSignature("GetFeatureFlags", [], ["internal.FeatureFlags"]), $.methodSignature("GetLogger", [], [/* @__PURE__ */ $.pointerType("zap.Logger")]), $.methodSignature("GetMetricsScope", [], ["tally.Scope"]), $.methodSignature("GetRegistry", [], [/* @__PURE__ */ $.pointerType("internal.registry")]), $.methodSignature("GetTracer", [], ["opentracing.Tracer"]), $.methodSignature("GetVersion", [["changeID", /* @__PURE__ */ $.basicType("string")], ["minSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")], ["maxSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")], ["opts", /* @__PURE__ */ $.sliceType("internal.GetVersionOption")]], [/* @__PURE__ */ $.basicType("int", "internal.Version")]), $.methodSignature("GetWorkflowInterceptors", [], [/* @__PURE__ */ $.sliceType("internal.WorkflowInterceptorFactory")]), $.methodSignature("IsReplaying", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MutableSideEffect", [["id", /* @__PURE__ */ $.basicType("string")], ["f", ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)], ["equals", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], ["internal.Value"]), $.methodSignature("NewTimer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.timerInfo")]), $.methodSignature("Now", [], ["time.Time"]), $.methodSignature("RegisterCancelHandler", [["handler", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]]), $.methodSignature("RegisterQueryHandler", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)]]), $.methodSignature("RegisterSignalHandler", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [] } as $.FunctionTypeInfo)]]), $.methodSignature("RemoveSession", [["sessionID", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("RequestCancelActivity", [["activityID", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("RequestCancelChildWorkflow", [["domainName", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("RequestCancelExternalWorkflow", [["domainName", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]]), $.methodSignature("RequestCancelLocalActivity", [["activityID", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("RequestCancelTimer", [["timerID", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("SetCurrentReplayTime", [["replayTime", "time.Time"]]), $.methodSignature("SideEffect", [["f", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]]), $.methodSignature("SignalExternalWorkflow", [["domainName", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["_", { kind: $.TypeKind.Interface, methods: [] }], ["childWorkflowOnly", /* @__PURE__ */ $.basicType("bool")], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]]), $.methodSignature("UpsertSearchAttributes", [["attributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })]], ["error"]), $.methodSignature("WorkflowInfo", [], [/* @__PURE__ */ $.pointerType("internal.WorkflowInfo")]), $.methodSignature("encodeArg", [["arg", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("encodeValue", [["value", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]), $.methodSignature("getOpenSessions", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("internal.SessionInfo"))]), $.methodSignature("isEqualValue", [["newValue", { kind: $.TypeKind.Interface, methods: [] }], ["encodedOldValue", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["equals", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("recordMutableSideEffect", [["id", /* @__PURE__ */ $.basicType("string")], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["internal.Value"]), $.methodSignature("updateWorkflowInfoWithSearchAttributes", [["attributes", /* @__PURE__ */ $.pointerType("shared.SearchAttributes")]])],
		workflowExecutionEventHandlerImpl,
		() => [/* @__PURE__ */ $.structField("workflowEnvironmentImpl", /* @__PURE__ */ $.pointerType("internal.workflowEnvironmentImpl"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("workflowDefinition", "internal.workflowDefinition", [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class scheduledTimer {
	public get callback(): ((result: $.Slice<number>, err: $.GoError) => void) | null {
		return this._fields.callback
	}

	public set callback(value: ((result: $.Slice<number>, err: $.GoError) => void) | null) {
		this._fields.callback = value
	}

	public get handled(): boolean {
		return this._fields.handled
	}

	public set handled(value: boolean) {
		this._fields.handled = value
	}

	public _fields: {
		callback: ((result: $.Slice<number>, err: $.GoError) => void) | null
		handled: boolean
	}

	constructor(init?: Partial<{callback?: ((result: $.Slice<number>, err: $.GoError) => void) | null, handled?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			callback: init?.callback ?? (null! as ((result: $.Slice<number>, err: $.GoError) => void) | null),
			handled: init?.handled ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): scheduledTimer {
		return new scheduledTimer(this, true)
	}

	public __goscriptAssign(source: scheduledTimer): void {
		const target = this._fields
		const values = source._fields
		target.callback = values.callback
		target.handled = values.handled
	}

	public async handle(result: $.Slice<number>, err: $.GoError): globalThis.Promise<void> {
		let s: scheduledTimer | $.VarRef<scheduledTimer> | null = this;
		const s$: scheduledTimer = s == null ? $.pointerTarget<scheduledTimer>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scheduledTimer>(s)
		if ((s$ as scheduledTimer).handled) {
			$.panic(await fmt.Sprintf("timer already handled %v", $.interfaceValue(s, "*internal.scheduledTimer", /* @__PURE__ */ $.pointerType("internal.scheduledTimer"))))
		}
		;(s$ as scheduledTimer).handled = true
		void (__goscriptAwait = (s$ as scheduledTimer).callback!(result, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"internal.scheduledTimer",
		() => new scheduledTimer(),
		() => [$.methodSignature("handle", [["result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], [], true)],
		scheduledTimer,
		() => [/* @__PURE__ */ $.structField("callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("handled", /* @__PURE__ */ $.basicType("bool"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class scheduledActivity {
	public get callback(): ((result: $.Slice<number>, err: $.GoError) => void) | null {
		return this._fields.callback
	}

	public set callback(value: ((result: $.Slice<number>, err: $.GoError) => void) | null) {
		this._fields.callback = value
	}

	public get waitForCancelRequest(): boolean {
		return this._fields.waitForCancelRequest
	}

	public set waitForCancelRequest(value: boolean) {
		this._fields.waitForCancelRequest = value
	}

	public get handled(): boolean {
		return this._fields.handled
	}

	public set handled(value: boolean) {
		this._fields.handled = value
	}

	public _fields: {
		callback: ((result: $.Slice<number>, err: $.GoError) => void) | null
		waitForCancelRequest: boolean
		handled: boolean
	}

	constructor(init?: Partial<{callback?: ((result: $.Slice<number>, err: $.GoError) => void) | null, waitForCancelRequest?: boolean, handled?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			callback: init?.callback ?? (null! as ((result: $.Slice<number>, err: $.GoError) => void) | null),
			waitForCancelRequest: init?.waitForCancelRequest ?? (false as boolean),
			handled: init?.handled ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): scheduledActivity {
		return new scheduledActivity(this, true)
	}

	public __goscriptAssign(source: scheduledActivity): void {
		const target = this._fields
		const values = source._fields
		target.callback = values.callback
		target.waitForCancelRequest = values.waitForCancelRequest
		target.handled = values.handled
	}

	public async handle(result: $.Slice<number>, err: $.GoError): globalThis.Promise<void> {
		let s: scheduledActivity | $.VarRef<scheduledActivity> | null = this;
		const s$: scheduledActivity = s == null ? $.pointerTarget<scheduledActivity>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scheduledActivity>(s)
		if ((s$ as scheduledActivity).handled) {
			$.panic(await fmt.Sprintf("activity already handled %v", $.interfaceValue(s, "*internal.scheduledActivity", /* @__PURE__ */ $.pointerType("internal.scheduledActivity"))))
		}
		;(s$ as scheduledActivity).handled = true
		void (__goscriptAwait = (s$ as scheduledActivity).callback!(result, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"internal.scheduledActivity",
		() => new scheduledActivity(),
		() => [$.methodSignature("handle", [["result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], [], true)],
		scheduledActivity,
		() => [/* @__PURE__ */ $.structField("callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("waitForCancelRequest", /* @__PURE__ */ $.basicType("bool"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("handled", /* @__PURE__ */ $.basicType("bool"), [2], 9, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class scheduledChildWorkflow {
	public get resultCallback(): ((result: $.Slice<number>, err: $.GoError) => void) | null {
		return this._fields.resultCallback
	}

	public set resultCallback(value: ((result: $.Slice<number>, err: $.GoError) => void) | null) {
		this._fields.resultCallback = value
	}

	public get startedCallback(): ((r: __goscript_workflow.WorkflowExecution, e: $.GoError) => void) | null {
		return this._fields.startedCallback
	}

	public set startedCallback(value: ((r: __goscript_workflow.WorkflowExecution, e: $.GoError) => void) | null) {
		this._fields.startedCallback = value
	}

	public get waitForCancellation(): boolean {
		return this._fields.waitForCancellation
	}

	public set waitForCancellation(value: boolean) {
		this._fields.waitForCancellation = value
	}

	public get handled(): boolean {
		return this._fields.handled
	}

	public set handled(value: boolean) {
		this._fields.handled = value
	}

	public _fields: {
		resultCallback: ((result: $.Slice<number>, err: $.GoError) => void) | null
		startedCallback: ((r: __goscript_workflow.WorkflowExecution, e: $.GoError) => void) | null
		waitForCancellation: boolean
		handled: boolean
	}

	constructor(init?: Partial<{resultCallback?: ((result: $.Slice<number>, err: $.GoError) => void) | null, startedCallback?: ((r: __goscript_workflow.WorkflowExecution, e: $.GoError) => void) | null, waitForCancellation?: boolean, handled?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			resultCallback: init?.resultCallback ?? (null! as ((result: $.Slice<number>, err: $.GoError) => void) | null),
			startedCallback: init?.startedCallback ?? (null! as ((r: __goscript_workflow.WorkflowExecution, e: $.GoError) => void) | null),
			waitForCancellation: init?.waitForCancellation ?? (false as boolean),
			handled: init?.handled ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): scheduledChildWorkflow {
		return new scheduledChildWorkflow(this, true)
	}

	public __goscriptAssign(source: scheduledChildWorkflow): void {
		const target = this._fields
		const values = source._fields
		target.resultCallback = values.resultCallback
		target.startedCallback = values.startedCallback
		target.waitForCancellation = values.waitForCancellation
		target.handled = values.handled
	}

	public async handle(result: $.Slice<number>, err: $.GoError): globalThis.Promise<void> {
		let s: scheduledChildWorkflow | $.VarRef<scheduledChildWorkflow> | null = this;
		const s$: scheduledChildWorkflow = s == null ? $.pointerTarget<scheduledChildWorkflow>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scheduledChildWorkflow>(s)
		if ((s$ as scheduledChildWorkflow).handled) {
			$.panic(await fmt.Sprintf("child workflow already handled %v", $.interfaceValue(s, "*internal.scheduledChildWorkflow", /* @__PURE__ */ $.pointerType("internal.scheduledChildWorkflow"))))
		}
		;(s$ as scheduledChildWorkflow).handled = true
		void (__goscriptAwait = (s$ as scheduledChildWorkflow).resultCallback!(result, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"internal.scheduledChildWorkflow",
		() => new scheduledChildWorkflow(),
		() => [$.methodSignature("handle", [["result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], [], true)],
		scheduledChildWorkflow,
		() => [/* @__PURE__ */ $.structField("resultCallback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("startedCallback", ({ kind: $.TypeKind.Function, params: ["internal.WorkflowExecution", "error"], results: [] } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("waitForCancellation", /* @__PURE__ */ $.basicType("bool"), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("handled", /* @__PURE__ */ $.basicType("bool"), [3], 17, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class scheduledCancellation {
	public get callback(): ((result: $.Slice<number>, err: $.GoError) => void) | null {
		return this._fields.callback
	}

	public set callback(value: ((result: $.Slice<number>, err: $.GoError) => void) | null) {
		this._fields.callback = value
	}

	public get handled(): boolean {
		return this._fields.handled
	}

	public set handled(value: boolean) {
		this._fields.handled = value
	}

	public _fields: {
		callback: ((result: $.Slice<number>, err: $.GoError) => void) | null
		handled: boolean
	}

	constructor(init?: Partial<{callback?: ((result: $.Slice<number>, err: $.GoError) => void) | null, handled?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			callback: init?.callback ?? (null! as ((result: $.Slice<number>, err: $.GoError) => void) | null),
			handled: init?.handled ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): scheduledCancellation {
		return new scheduledCancellation(this, true)
	}

	public __goscriptAssign(source: scheduledCancellation): void {
		const target = this._fields
		const values = source._fields
		target.callback = values.callback
		target.handled = values.handled
	}

	public async handle(result: $.Slice<number>, err: $.GoError): globalThis.Promise<void> {
		let s: scheduledCancellation | $.VarRef<scheduledCancellation> | null = this;
		const s$: scheduledCancellation = s == null ? $.pointerTarget<scheduledCancellation>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scheduledCancellation>(s)
		if ((s$ as scheduledCancellation).handled) {
			$.panic(await fmt.Sprintf("cancellation already handled %v", $.interfaceValue(s, "*internal.scheduledCancellation", /* @__PURE__ */ $.pointerType("internal.scheduledCancellation"))))
		}
		;(s$ as scheduledCancellation).handled = true
		void (__goscriptAwait = (s$ as scheduledCancellation).callback!(result, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"internal.scheduledCancellation",
		() => new scheduledCancellation(),
		() => [$.methodSignature("handle", [["result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], [], true)],
		scheduledCancellation,
		() => [/* @__PURE__ */ $.structField("callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("handled", /* @__PURE__ */ $.basicType("bool"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class scheduledSignal {
	public get callback(): ((result: $.Slice<number>, err: $.GoError) => void) | null {
		return this._fields.callback
	}

	public set callback(value: ((result: $.Slice<number>, err: $.GoError) => void) | null) {
		this._fields.callback = value
	}

	public get handled(): boolean {
		return this._fields.handled
	}

	public set handled(value: boolean) {
		this._fields.handled = value
	}

	public _fields: {
		callback: ((result: $.Slice<number>, err: $.GoError) => void) | null
		handled: boolean
	}

	constructor(init?: Partial<{callback?: ((result: $.Slice<number>, err: $.GoError) => void) | null, handled?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			callback: init?.callback ?? (null! as ((result: $.Slice<number>, err: $.GoError) => void) | null),
			handled: init?.handled ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): scheduledSignal {
		return new scheduledSignal(this, true)
	}

	public __goscriptAssign(source: scheduledSignal): void {
		const target = this._fields
		const values = source._fields
		target.callback = values.callback
		target.handled = values.handled
	}

	public async handle(result: $.Slice<number>, err: $.GoError): globalThis.Promise<void> {
		let s: scheduledSignal | $.VarRef<scheduledSignal> | null = this;
		const s$: scheduledSignal = s == null ? $.pointerTarget<scheduledSignal>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<scheduledSignal>(s)
		if ((s$ as scheduledSignal).handled) {
			$.panic(await fmt.Sprintf("signal already handled %v", $.interfaceValue(s, "*internal.scheduledSignal", /* @__PURE__ */ $.pointerType("internal.scheduledSignal"))))
		}
		;(s$ as scheduledSignal).handled = true
		void (__goscriptAwait = (s$ as scheduledSignal).callback!(result, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"internal.scheduledSignal",
		() => new scheduledSignal(),
		() => [$.methodSignature("handle", [["result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], [], true)],
		scheduledSignal,
		() => [/* @__PURE__ */ $.structField("callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("handled", /* @__PURE__ */ $.basicType("bool"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class workflowEnvironmentImpl {
	public get workflowInfo(): __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null {
		return this._fields.workflowInfo
	}

	public set workflowInfo(value: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null) {
		this._fields.workflowInfo = value
	}

	public get decisionsHelper(): __goscript_internal_decision_state_machine.decisionsHelper | $.VarRef<__goscript_internal_decision_state_machine.decisionsHelper> | null {
		return this._fields.decisionsHelper
	}

	public set decisionsHelper(value: __goscript_internal_decision_state_machine.decisionsHelper | $.VarRef<__goscript_internal_decision_state_machine.decisionsHelper> | null) {
		this._fields.decisionsHelper = value
	}

	public get sideEffectResult(): globalThis.Map<number, $.Slice<number>> | null {
		return this._fields.sideEffectResult
	}

	public set sideEffectResult(value: globalThis.Map<number, $.Slice<number>> | null) {
		this._fields.sideEffectResult = value
	}

	public get changeVersions(): globalThis.Map<string, __goscript_workflow.Version> | null {
		return this._fields.changeVersions
	}

	public set changeVersions(value: globalThis.Map<string, __goscript_workflow.Version> | null) {
		this._fields.changeVersions = value
	}

	public get pendingLaTasks(): globalThis.Map<string, localActivityTask | $.VarRef<localActivityTask> | null> | null {
		return this._fields.pendingLaTasks
	}

	public set pendingLaTasks(value: globalThis.Map<string, localActivityTask | $.VarRef<localActivityTask> | null> | null) {
		this._fields.pendingLaTasks = value
	}

	public get mutableSideEffect(): globalThis.Map<string, $.Slice<number>> | null {
		return this._fields.mutableSideEffect
	}

	public set mutableSideEffect(value: globalThis.Map<string, $.Slice<number>> | null) {
		this._fields.mutableSideEffect = value
	}

	public get unstartedLaTasks(): globalThis.Map<string, {}> | null {
		return this._fields.unstartedLaTasks
	}

	public set unstartedLaTasks(value: globalThis.Map<string, {}> | null) {
		this._fields.unstartedLaTasks = value
	}

	public get openSessions(): globalThis.Map<string, __goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null> | null {
		return this._fields.openSessions
	}

	public set openSessions(value: globalThis.Map<string, __goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null> | null) {
		this._fields.openSessions = value
	}

	public get counterID(): number {
		return this._fields.counterID
	}

	public set counterID(value: number) {
		this._fields.counterID = value
	}

	public get currentReplayTime(): time.Time {
		return this._fields.currentReplayTime
	}

	public set currentReplayTime(value: time.Time) {
		this._fields.currentReplayTime = value
	}

	public get currentLocalTime(): time.Time {
		return this._fields.currentLocalTime
	}

	public set currentLocalTime(value: time.Time) {
		this._fields.currentLocalTime = value
	}

	public get completeHandler(): ((result: $.Slice<number>, err: $.GoError) => void) | null {
		return this._fields.completeHandler
	}

	public set completeHandler(value: ((result: $.Slice<number>, err: $.GoError) => void) | null) {
		this._fields.completeHandler = value
	}

	public get cancelHandler(): (() => void) | null {
		return this._fields.cancelHandler
	}

	public set cancelHandler(value: (() => void) | null) {
		this._fields.cancelHandler = value
	}

	public get signalHandler(): ((name: string, input: $.Slice<number>) => void) | null {
		return this._fields.signalHandler
	}

	public set signalHandler(value: ((name: string, input: $.Slice<number>) => void) | null) {
		this._fields.signalHandler = value
	}

	public get queryHandler(): ((queryType: string, queryArgs: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null {
		return this._fields.queryHandler
	}

	public set queryHandler(value: ((queryType: string, queryArgs: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null) {
		this._fields.queryHandler = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get isReplay(): boolean {
		return this._fields.isReplay
	}

	public set isReplay(value: boolean) {
		this._fields.isReplay = value
	}

	public get enableLoggingInReplay(): boolean {
		return this._fields.enableLoggingInReplay
	}

	public set enableLoggingInReplay(value: boolean) {
		this._fields.enableLoggingInReplay = value
	}

	public get metricsScope(): tally.Scope | null {
		return this._fields.metricsScope
	}

	public set metricsScope(value: tally.Scope | null) {
		this._fields.metricsScope = value
	}

	public get registry(): __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null {
		return this._fields.registry
	}

	public set registry(value: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null) {
		this._fields.registry = value
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

	public get featureFlags(): __goscript_internal_utils.FeatureFlags {
		return this._fields.featureFlags
	}

	public set featureFlags(value: __goscript_internal_utils.FeatureFlags) {
		this._fields.featureFlags = value
	}

	public _fields: {
		workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null
		decisionsHelper: __goscript_internal_decision_state_machine.decisionsHelper | $.VarRef<__goscript_internal_decision_state_machine.decisionsHelper> | null
		sideEffectResult: globalThis.Map<number, $.Slice<number>> | null
		changeVersions: globalThis.Map<string, __goscript_workflow.Version> | null
		pendingLaTasks: globalThis.Map<string, localActivityTask | $.VarRef<localActivityTask> | null> | null
		mutableSideEffect: globalThis.Map<string, $.Slice<number>> | null
		unstartedLaTasks: globalThis.Map<string, {}> | null
		openSessions: globalThis.Map<string, __goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null> | null
		counterID: number
		currentReplayTime: time.Time
		currentLocalTime: time.Time
		completeHandler: ((result: $.Slice<number>, err: $.GoError) => void) | null
		cancelHandler: (() => void) | null
		signalHandler: ((name: string, input: $.Slice<number>) => void) | null
		queryHandler: ((queryType: string, queryArgs: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		isReplay: boolean
		enableLoggingInReplay: boolean
		metricsScope: tally.Scope | null
		registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null
		dataConverter: __goscript_encoded.DataConverter | null
		contextPropagators: $.Slice<__goscript_headers.ContextPropagator | null>
		tracer: opentracing.Tracer | null
		workflowInterceptorFactories: $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>
		featureFlags: __goscript_internal_utils.FeatureFlags
	}

	constructor(init?: Partial<{workflowInfo?: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, decisionsHelper?: __goscript_internal_decision_state_machine.decisionsHelper | $.VarRef<__goscript_internal_decision_state_machine.decisionsHelper> | null, sideEffectResult?: globalThis.Map<number, $.Slice<number>> | null, changeVersions?: globalThis.Map<string, __goscript_workflow.Version> | null, pendingLaTasks?: globalThis.Map<string, localActivityTask | $.VarRef<localActivityTask> | null> | null, mutableSideEffect?: globalThis.Map<string, $.Slice<number>> | null, unstartedLaTasks?: globalThis.Map<string, {}> | null, openSessions?: globalThis.Map<string, __goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null> | null, counterID?: number, currentReplayTime?: time.Time, currentLocalTime?: time.Time, completeHandler?: ((result: $.Slice<number>, err: $.GoError) => void) | null, cancelHandler?: (() => void) | null, signalHandler?: ((name: string, input: $.Slice<number>) => void) | null, queryHandler?: ((queryType: string, queryArgs: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null, isReplay?: boolean, enableLoggingInReplay?: boolean, metricsScope?: tally.Scope | null, registry?: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null, dataConverter?: __goscript_encoded.DataConverter | null, contextPropagators?: $.Slice<__goscript_headers.ContextPropagator | null>, tracer?: opentracing.Tracer | null, workflowInterceptorFactories?: $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>, featureFlags?: __goscript_internal_utils.FeatureFlags}>, __goscriptValue?: boolean) {
		this._fields = {
			workflowInfo: init?.workflowInfo ?? (null! as __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null),
			decisionsHelper: init?.decisionsHelper ?? (null! as __goscript_internal_decision_state_machine.decisionsHelper | $.VarRef<__goscript_internal_decision_state_machine.decisionsHelper> | null),
			sideEffectResult: init?.sideEffectResult ?? (null! as globalThis.Map<number, $.Slice<number>> | null),
			changeVersions: init?.changeVersions ?? (null! as globalThis.Map<string, __goscript_workflow.Version> | null),
			pendingLaTasks: init?.pendingLaTasks ?? (null! as globalThis.Map<string, localActivityTask | $.VarRef<localActivityTask> | null> | null),
			mutableSideEffect: init?.mutableSideEffect ?? (null! as globalThis.Map<string, $.Slice<number>> | null),
			unstartedLaTasks: init?.unstartedLaTasks ?? (null! as globalThis.Map<string, {}> | null),
			openSessions: init?.openSessions ?? (null! as globalThis.Map<string, __goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null> | null),
			counterID: init?.counterID ?? (0 as number),
			currentReplayTime: init?.currentReplayTime ? $.markAsStructValue($.cloneStructValue(init.currentReplayTime)) : $.markAsStructValue(new time.Time()),
			currentLocalTime: init?.currentLocalTime ? $.markAsStructValue($.cloneStructValue(init.currentLocalTime)) : $.markAsStructValue(new time.Time()),
			completeHandler: init?.completeHandler ?? (null! as ((result: $.Slice<number>, err: $.GoError) => void) | null),
			cancelHandler: init?.cancelHandler ?? (null! as (() => void) | null),
			signalHandler: init?.signalHandler ?? (null! as ((name: string, input: $.Slice<number>) => void) | null),
			queryHandler: init?.queryHandler ?? (null! as ((queryType: string, queryArgs: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			isReplay: init?.isReplay ?? (false as boolean),
			enableLoggingInReplay: init?.enableLoggingInReplay ?? (false as boolean),
			metricsScope: init?.metricsScope ?? (null! as tally.Scope | null),
			registry: init?.registry ?? (null! as __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null),
			dataConverter: init?.dataConverter ?? (null! as __goscript_encoded.DataConverter | null),
			contextPropagators: init?.contextPropagators ?? (null! as $.Slice<__goscript_headers.ContextPropagator | null>),
			tracer: init?.tracer ?? (null! as opentracing.Tracer | null),
			workflowInterceptorFactories: init?.workflowInterceptorFactories ?? (null! as $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>),
			featureFlags: init?.featureFlags ? init.featureFlags.clone() : new __goscript_internal_utils.FeatureFlags(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowEnvironmentImpl {
		return new workflowEnvironmentImpl(this, true)
	}

	public __goscriptAssign(source: workflowEnvironmentImpl): void {
		const target = this._fields
		const values = source._fields
		target.workflowInfo = values.workflowInfo
		target.decisionsHelper = values.decisionsHelper
		target.sideEffectResult = values.sideEffectResult
		target.changeVersions = values.changeVersions
		target.pendingLaTasks = values.pendingLaTasks
		target.mutableSideEffect = values.mutableSideEffect
		target.unstartedLaTasks = values.unstartedLaTasks
		target.openSessions = values.openSessions
		target.counterID = values.counterID
		$.assignStruct(target.currentReplayTime, values.currentReplayTime)
		$.assignStruct(target.currentLocalTime, values.currentLocalTime)
		target.completeHandler = values.completeHandler
		target.cancelHandler = values.cancelHandler
		target.signalHandler = values.signalHandler
		target.queryHandler = values.queryHandler
		target.logger = values.logger
		target.isReplay = values.isReplay
		target.enableLoggingInReplay = values.enableLoggingInReplay
		target.metricsScope = $.assignFieldValue(target.metricsScope, values.metricsScope, "tally.Scope")
		target.registry = values.registry
		target.dataConverter = $.assignFieldValue(target.dataConverter, values.dataConverter, "internal.DataConverter")
		target.contextPropagators = values.contextPropagators
		target.tracer = $.assignFieldValue(target.tracer, values.tracer, "opentracing.Tracer")
		target.workflowInterceptorFactories = values.workflowInterceptorFactories
		$.assignStruct(target.featureFlags, values.featureFlags)
	}

	public AddSession(sessionInfo: __goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null): void {
		let wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		$.mapSet($.pointerValue<workflowEnvironmentImpl>(wc).openSessions, $.pointerValue<__goscript_session.SessionInfo>(sessionInfo).SessionID, sessionInfo)
	}

	public async Complete(result: $.Slice<number>, err: $.GoError): globalThis.Promise<void> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		void (__goscriptAwait = $.pointerValue<workflowEnvironmentImpl>(wc).completeHandler!(result, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async ExecuteActivity(parameters: __goscript_internal_activity.executeActivityParams, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): globalThis.Promise<__goscript_internal_activity.activityInfo | $.VarRef<__goscript_internal_activity.activityInfo> | null> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		const wc$: workflowEnvironmentImpl = wc == null ? $.pointerTarget<workflowEnvironmentImpl>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowEnvironmentImpl>(wc)
		let scheduleTaskAttr: m.ScheduleActivityTaskDecisionAttributes | $.VarRef<m.ScheduleActivityTaskDecisionAttributes> | null = new m.ScheduleActivityTaskDecisionAttributes()
		let scheduleTaskAttr$: m.ScheduleActivityTaskDecisionAttributes = scheduleTaskAttr == null ? $.pointerTarget<m.ScheduleActivityTaskDecisionAttributes>(scheduleTaskAttr) : (scheduleTaskAttr as any).__isVarRef === true ? (scheduleTaskAttr as any).value : (scheduleTaskAttr as any).__goValue === undefined ? (scheduleTaskAttr as any) : $.pointerTarget<m.ScheduleActivityTaskDecisionAttributes>(scheduleTaskAttr)
		if ((parameters.activityOptions.ActivityID == null) || ($.stringEqual($.pointerValue<string>(parameters.activityOptions.ActivityID), ""))) {
			;(scheduleTaskAttr$ as m.ScheduleActivityTaskDecisionAttributes).ActivityId = common.StringPtr(await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).GenerateSequenceID() : workflowEnvironmentImpl.prototype.GenerateSequenceID.call(wc)))
		} else {
			;(scheduleTaskAttr$ as m.ScheduleActivityTaskDecisionAttributes).ActivityId = parameters.activityOptions.ActivityID
		}
		let activityID = (scheduleTaskAttr !== null && (scheduleTaskAttr as any).__isVarRef !== true && (scheduleTaskAttr as any).__goValue === undefined ? ((scheduleTaskAttr as any) as m.ScheduleActivityTaskDecisionAttributes).GetActivityId() : m.ScheduleActivityTaskDecisionAttributes.prototype.GetActivityId.call(scheduleTaskAttr));
		;(scheduleTaskAttr$ as m.ScheduleActivityTaskDecisionAttributes).ActivityType = __goscript_internal_utils.activityTypePtr(parameters.ActivityType);
		;(scheduleTaskAttr$ as m.ScheduleActivityTaskDecisionAttributes).TaskList = common.TaskListPtr((() => { const __goscriptLiteralField4 = common.StringPtr(parameters.activityOptions.TaskListName); const __goscriptLiteralField5 = m.TaskListKind_Ptr(parameters.activityOptions.TaskListKind); return new m.TaskList({Name: __goscriptLiteralField4, Kind: __goscriptLiteralField5}, true) })());
		;(scheduleTaskAttr$ as m.ScheduleActivityTaskDecisionAttributes).Input = parameters.Input;
		;(scheduleTaskAttr$ as m.ScheduleActivityTaskDecisionAttributes).ScheduleToCloseTimeoutSeconds = common.Int32Ptr(parameters.activityOptions.ScheduleToCloseTimeoutSeconds);
		;(scheduleTaskAttr$ as m.ScheduleActivityTaskDecisionAttributes).StartToCloseTimeoutSeconds = common.Int32Ptr(parameters.activityOptions.StartToCloseTimeoutSeconds);
		;(scheduleTaskAttr$ as m.ScheduleActivityTaskDecisionAttributes).ScheduleToStartTimeoutSeconds = common.Int32Ptr(parameters.activityOptions.ScheduleToStartTimeoutSeconds);
		;(scheduleTaskAttr$ as m.ScheduleActivityTaskDecisionAttributes).HeartbeatTimeoutSeconds = common.Int32Ptr(parameters.activityOptions.HeartbeatTimeoutSeconds);
		;(scheduleTaskAttr$ as m.ScheduleActivityTaskDecisionAttributes).RetryPolicy = parameters.activityOptions.RetryPolicy;
		;(scheduleTaskAttr$ as m.ScheduleActivityTaskDecisionAttributes).Header = parameters.Header

		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.scheduleActivityTask.call((wc$ as workflowEnvironmentImpl).decisionsHelper, scheduleTaskAttr)
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).setData($.interfaceValue(new scheduledActivity({callback: callback, waitForCancelRequest: parameters.activityOptions.WaitForCancellation}), "*internal.scheduledActivity", /* @__PURE__ */ $.pointerType("internal.scheduledActivity"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		await zap.Logger.prototype.Debug.call((wc$ as workflowEnvironmentImpl).logger, "ExecuteActivity", $.arrayToSlice<zap.Field>([zap.String("ActivityID", activityID), zap.String("ActivityType", m.ActivityType.prototype.GetName.call((scheduleTaskAttr$ as m.ScheduleActivityTaskDecisionAttributes).ActivityType))]))

		return new __goscript_internal_activity.activityInfo({activityID: activityID})
	}

	public async ExecuteChildWorkflow(params: __goscript_internal_workflow.executeWorkflowParams, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null, startedHandler: ((r: __goscript_workflow.WorkflowExecution, e: $.GoError) => void) | null): globalThis.Promise<$.GoError> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		const wc$: workflowEnvironmentImpl = wc == null ? $.pointerTarget<workflowEnvironmentImpl>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowEnvironmentImpl>(wc)
		if ($.stringEqual(params.workflowOptions.workflowID, "")) {
			if (!$.stringEqual($.pointerValue<__goscript_workflow.WorkflowInfo>((wc$ as workflowEnvironmentImpl).workflowInfo).OriginalRunId, "")) {
				params.workflowOptions.workflowID = $.concatString(($.concatString($.pointerValue<__goscript_workflow.WorkflowInfo>((wc$ as workflowEnvironmentImpl).workflowInfo).OriginalRunId, "_")), await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).GenerateSequenceID() : workflowEnvironmentImpl.prototype.GenerateSequenceID.call(wc)))
			} else {
				params.workflowOptions.workflowID = $.concatString(($.concatString($.pointerValue<__goscript_workflow.WorkflowInfo>((wc$ as workflowEnvironmentImpl).workflowInfo).WorkflowExecution.RunID, "_")), await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).GenerateSequenceID() : workflowEnvironmentImpl.prototype.GenerateSequenceID.call(wc)))
			}
		}
		let __goscriptTuple5: any = await __goscript_internal_workflow_client.getWorkflowMemo(params.workflowOptions.memo, (wc$ as workflowEnvironmentImpl).dataConverter)
		let memo: m.Memo | $.VarRef<m.Memo> | null = __goscriptTuple5[0]
		let err = __goscriptTuple5[1]
		if (err != null) {
			return err
		}
		let __goscriptTuple6: any = await __goscript_internal_workflow_client.serializeSearchAttributes(params.workflowOptions.searchAttributes)
		let searchAttr: m.SearchAttributes | $.VarRef<m.SearchAttributes> | null = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return err
		}

		let attributes: m.StartChildWorkflowExecutionDecisionAttributes | $.VarRef<m.StartChildWorkflowExecutionDecisionAttributes> | null = new m.StartChildWorkflowExecutionDecisionAttributes()
		let attributes$: m.StartChildWorkflowExecutionDecisionAttributes = attributes == null ? $.pointerTarget<m.StartChildWorkflowExecutionDecisionAttributes>(attributes) : (attributes as any).__isVarRef === true ? (attributes as any).value : (attributes as any).__goValue === undefined ? (attributes as any) : $.pointerTarget<m.StartChildWorkflowExecutionDecisionAttributes>(attributes);

		;(attributes$ as m.StartChildWorkflowExecutionDecisionAttributes).Domain = params.workflowOptions.domain;
		;(attributes$ as m.StartChildWorkflowExecutionDecisionAttributes).TaskList = new m.TaskList({Name: params.workflowOptions.taskListName});
		;(attributes$ as m.StartChildWorkflowExecutionDecisionAttributes).WorkflowId = common.StringPtr(params.workflowOptions.workflowID);
		;(attributes$ as m.StartChildWorkflowExecutionDecisionAttributes).ExecutionStartToCloseTimeoutSeconds = params.workflowOptions.executionStartToCloseTimeoutSeconds;
		;(attributes$ as m.StartChildWorkflowExecutionDecisionAttributes).TaskStartToCloseTimeoutSeconds = params.workflowOptions.taskStartToCloseTimeoutSeconds;
		;(attributes$ as m.StartChildWorkflowExecutionDecisionAttributes).Input = params.input;
		;(attributes$ as m.StartChildWorkflowExecutionDecisionAttributes).WorkflowType = __goscript_internal_utils.workflowTypePtr($.pointerValue<__goscript_workflow.WorkflowType>(params.workflowType));
		;(attributes$ as m.StartChildWorkflowExecutionDecisionAttributes).WorkflowIdReusePolicy = await __goscript_client.WorkflowIDReusePolicy_toThriftPtr(params.workflowOptions.workflowIDReusePolicy);
		;(attributes$ as m.StartChildWorkflowExecutionDecisionAttributes).ParentClosePolicy = await __goscript_client.ParentClosePolicy_toThriftPtr(params.workflowOptions.parentClosePolicy);
		;(attributes$ as m.StartChildWorkflowExecutionDecisionAttributes).RetryPolicy = params.workflowOptions.retryPolicy;
		;(attributes$ as m.StartChildWorkflowExecutionDecisionAttributes).Header = params.header;
		;(attributes$ as m.StartChildWorkflowExecutionDecisionAttributes).Memo = memo;
		;(attributes$ as m.StartChildWorkflowExecutionDecisionAttributes).SearchAttributes = searchAttr
		if ($.stringLen(params.workflowOptions.cronSchedule) > 0) {
			;(attributes$ as m.StartChildWorkflowExecutionDecisionAttributes).CronSchedule = common.StringPtr(params.workflowOptions.cronSchedule)
		}

		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.startChildWorkflowExecution.call((wc$ as workflowEnvironmentImpl).decisionsHelper, attributes)
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).setData($.interfaceValue(new scheduledChildWorkflow({resultCallback: callback, startedCallback: startedHandler, waitForCancellation: params.workflowOptions.waitForCancellation}), "*internal.scheduledChildWorkflow", /* @__PURE__ */ $.pointerType("internal.scheduledChildWorkflow"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		await zap.Logger.prototype.Debug.call((wc$ as workflowEnvironmentImpl).logger, "ExecuteChildWorkflow", $.arrayToSlice<zap.Field>([zap.String("ChildWorkflowID", params.workflowOptions.workflowID), zap.String("WorkflowType", $.pointerValue<__goscript_workflow.WorkflowType>(params.workflowType).Name)]))

		return null
	}

	public async ExecuteLocalActivity(params: __goscript_internal_activity.executeLocalActivityParams, callback: ((lar: __goscript_internal_worker_base.localActivityResultWrapper | $.VarRef<__goscript_internal_worker_base.localActivityResultWrapper> | null) => void) | null): globalThis.Promise<__goscript_internal_activity.localActivityInfo | $.VarRef<__goscript_internal_activity.localActivityInfo> | null> {
		let wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		const wc$: workflowEnvironmentImpl = wc == null ? $.pointerTarget<workflowEnvironmentImpl>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowEnvironmentImpl>(wc)
		let activityID = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).GenerateSequenceID() : workflowEnvironmentImpl.prototype.GenerateSequenceID.call(wc))
		let task: localActivityTask | $.VarRef<localActivityTask> | null = newLocalActivityTask((params).clone(), callback, activityID)

		$.mapSet((wc$ as workflowEnvironmentImpl).pendingLaTasks, activityID, task)
		$.mapSet((wc$ as workflowEnvironmentImpl).unstartedLaTasks, activityID, {})
		return new __goscript_internal_activity.localActivityInfo({activityID: activityID})
	}

	public GenerateSequence(): number {
		let wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		const wc$: workflowEnvironmentImpl = wc == null ? $.pointerTarget<workflowEnvironmentImpl>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowEnvironmentImpl>(wc)
		let result = (wc$ as workflowEnvironmentImpl).counterID;
		;(wc$ as workflowEnvironmentImpl).counterID = (((wc$ as workflowEnvironmentImpl).counterID + 1) | 0)
		return result
	}

	public async GenerateSequenceID(): globalThis.Promise<string> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		return fmt.Sprintf("%d", $.basicInterfaceValue((wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).GenerateSequence() : workflowEnvironmentImpl.prototype.GenerateSequence.call(wc)), "int32"))
	}

	public GetContextPropagators(): $.Slice<__goscript_headers.ContextPropagator | null> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		return $.pointerValue<workflowEnvironmentImpl>(wc).contextPropagators
	}

	public GetDataConverter(): __goscript_encoded.DataConverter | null {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		return $.pointerValue<workflowEnvironmentImpl>(wc).dataConverter
	}

	public GetFeatureFlags(): __goscript_internal_utils.FeatureFlags {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		return ($.pointerValue<workflowEnvironmentImpl>(wc).featureFlags).clone()
	}

	public GetLogger(): zap.Logger | $.VarRef<zap.Logger> | null {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		return $.pointerValue<workflowEnvironmentImpl>(wc).logger
	}

	public GetMetricsScope(): tally.Scope | null {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		return $.pointerValue<workflowEnvironmentImpl>(wc).metricsScope
	}

	public GetRegistry(): __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		return $.pointerValue<workflowEnvironmentImpl>(wc).registry
	}

	public GetTracer(): opentracing.Tracer | null {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		const wc$: workflowEnvironmentImpl = wc == null ? $.pointerTarget<workflowEnvironmentImpl>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowEnvironmentImpl>(wc)
		if ((wc$ as workflowEnvironmentImpl).tracer == null) {
			return $.interfaceValue<opentracing.Tracer | null>(new opentracing.NoopTracer(undefined, true), "opentracing.NoopTracer", "opentracing.NoopTracer")
		}
		return (wc$ as workflowEnvironmentImpl).tracer
	}

	public async GetVersion(changeID: string, minSupported: __goscript_workflow.Version, maxSupported: __goscript_workflow.Version, opts: $.Slice<__goscript_workflow.GetVersionOption | null>): globalThis.Promise<__goscript_workflow.Version> {
		let wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		const wc$: workflowEnvironmentImpl = wc == null ? $.pointerTarget<workflowEnvironmentImpl>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowEnvironmentImpl>(wc)
		// Check if the changeID already has a version assigned
		// If it does, validate the version against the min and max supported versions
		// ensuring it is within the acceptable range
		{
			let [version, ok] = $.mapGet<string, __goscript_workflow.Version, __goscript_workflow.Version>((wc$ as workflowEnvironmentImpl).changeVersions, changeID, 0)
			if (ok) {
				await validateVersion(changeID, version, minSupported, maxSupported)
				return version
			}
		}

		// Apply the functional options to get the configuration
		let config: __goscript_workflow.getVersionConfig | $.VarRef<__goscript_workflow.getVersionConfig> | null = new __goscript_workflow.getVersionConfig()
		let config$: __goscript_workflow.getVersionConfig = config == null ? $.pointerTarget<__goscript_workflow.getVersionConfig>(config) : (config as any).__isVarRef === true ? (config as any).value : (config as any).__goValue === undefined ? (config as any) : $.pointerTarget<__goscript_workflow.getVersionConfig>(config)
		for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_workflow.GetVersionOption | null)
			void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<__goscript_workflow.GetVersionOption, null>) : $.pointerValue<Exclude<__goscript_workflow.GetVersionOption, null>>(opt)).apply(config), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		let version: __goscript_workflow.Version = 0
		switch ((true as boolean)) {
			case (wc$ as workflowEnvironmentImpl).isReplay:
			{
				version = -1
				break
			}
			case (config$ as __goscript_workflow.getVersionConfig).CustomVersion != null:
			{
				version = $.pointerValue<__goscript_workflow.Version>((config$ as __goscript_workflow.getVersionConfig).CustomVersion)
				break
			}
			case (config$ as __goscript_workflow.getVersionConfig).UseMinVersion:
			{
				version = minSupported
				break
			}
			default:
			{
				version = maxSupported
				break
			}
		}

		// Validate the version against the min and max supported versions
		// ensuring it is within the acceptable range
		await validateVersion(changeID, version, minSupported, maxSupported)

		// If the version is not the DefaultVersion, and it's not a replay, record it and update search attributes
		// Keeping the DefaultVersion as a special case where no version marker is recorded
		if (!(wc$ as workflowEnvironmentImpl).isReplay && (version != -1)) {
			// Record the version marker and update search attributes
			await __goscript_internal_decision_state_machine.decisionsHelper.prototype.recordVersionMarker.call((wc$ as workflowEnvironmentImpl).decisionsHelper, changeID, version, (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).GetDataConverter() : workflowEnvironmentImpl.prototype.GetDataConverter.call(wc)))
			let err = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).UpsertSearchAttributes(await createSearchAttributesForChangeVersion(changeID, version, (wc$ as workflowEnvironmentImpl).changeVersions)) : workflowEnvironmentImpl.prototype.UpsertSearchAttributes.call(wc, await createSearchAttributesForChangeVersion(changeID, version, (wc$ as workflowEnvironmentImpl).changeVersions)))
			if (err != null) {
				await zap.Logger.prototype.Warn.call((wc$ as workflowEnvironmentImpl).logger, "UpsertSearchAttributes failed", $.arrayToSlice<zap.Field>([zap.Error(err)]))
			}
		}

		// Store the version to ensure that the version is stable
		// during the workflow execution
		$.mapSet((wc$ as workflowEnvironmentImpl).changeVersions, changeID, version)
		return version
	}

	public GetWorkflowInterceptors(): $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		return $.pointerValue<workflowEnvironmentImpl>(wc).workflowInterceptorFactories
	}

	public IsReplaying(): boolean {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		return $.pointerValue<workflowEnvironmentImpl>(wc).isReplay
	}

	public async MutableSideEffect(id: string, f: (() => any | globalThis.Promise<any>) | null, equals: ((a: any, b: any) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<__goscript_encoded.Value | null> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		const wc$: workflowEnvironmentImpl = wc == null ? $.pointerTarget<workflowEnvironmentImpl>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowEnvironmentImpl>(wc)
		{
			let __goscriptTuple7: any = $.mapGet<string, $.Slice<number>, $.Slice<number>>((wc$ as workflowEnvironmentImpl).mutableSideEffect, id, null)
			let result: $.Slice<number> = __goscriptTuple7[0]
			let ok = __goscriptTuple7[1]
			if (ok) {
				let encodedResult = __goscript_workflow.newEncodedValue(result, (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).GetDataConverter() : workflowEnvironmentImpl.prototype.GetDataConverter.call(wc)))
				if ((wc$ as workflowEnvironmentImpl).isReplay) {
					return encodedResult
				}

				let newValue = (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).isEqualValue(newValue, result, equals) : workflowEnvironmentImpl.prototype.isEqualValue.call(wc, newValue, result, equals))) {
					return encodedResult
				}

				return workflowEnvironmentImpl.prototype.recordMutableSideEffect.call(wc, id, await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).encodeValue(newValue) : workflowEnvironmentImpl.prototype.encodeValue.call(wc, newValue)))
			}
		}

		if ((wc$ as workflowEnvironmentImpl).isReplay) {
			// This should not happen
			$.panic(await fmt.Sprintf("Non deterministic workflow code change detected. MutableSideEffect API call doesn't have a correspondent event in the workflow history. MutableSideEffect ID: %s", id))
		}

		return workflowEnvironmentImpl.prototype.recordMutableSideEffect.call(wc, id, await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).encodeValue((__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) : workflowEnvironmentImpl.prototype.encodeValue.call(wc, (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))))
	}

	public async NewTimer(d: time.Duration, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): globalThis.Promise<__goscript_internal_time.timerInfo | $.VarRef<__goscript_internal_time.timerInfo> | null> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		const wc$: workflowEnvironmentImpl = wc == null ? $.pointerTarget<workflowEnvironmentImpl>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowEnvironmentImpl>(wc)
		let durationInSeconds = common.Int64Ceil(time.Duration_Seconds(d))
		if (durationInSeconds < 0n) {
			void (__goscriptAwait = callback!(null, fmt.Errorf("negative duration provided %v", $.basicInterfaceValue(durationInSeconds, "int64"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return null
		}
		if (durationInSeconds == 0n) {
			void (__goscriptAwait = callback!(null, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return null
		}

		let timerID = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).GenerateSequenceID() : workflowEnvironmentImpl.prototype.GenerateSequenceID.call(wc))
		let startTimerAttr: m.StartTimerDecisionAttributes | $.VarRef<m.StartTimerDecisionAttributes> | null = new m.StartTimerDecisionAttributes()
		let startTimerAttr$: m.StartTimerDecisionAttributes = startTimerAttr == null ? $.pointerTarget<m.StartTimerDecisionAttributes>(startTimerAttr) : (startTimerAttr as any).__isVarRef === true ? (startTimerAttr as any).value : (startTimerAttr as any).__goValue === undefined ? (startTimerAttr as any) : $.pointerTarget<m.StartTimerDecisionAttributes>(startTimerAttr);
		;(startTimerAttr$ as m.StartTimerDecisionAttributes).TimerId = common.StringPtr(timerID);
		;(startTimerAttr$ as m.StartTimerDecisionAttributes).StartToFireTimeoutSeconds = common.Int64Ptr(durationInSeconds)

		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.startTimer.call((wc$ as workflowEnvironmentImpl).decisionsHelper, startTimerAttr)
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).setData($.interfaceValue(new scheduledTimer({callback: callback}), "*internal.scheduledTimer", /* @__PURE__ */ $.pointerType("internal.scheduledTimer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		await zap.Logger.prototype.Debug.call((wc$ as workflowEnvironmentImpl).logger, "NewTimer", $.arrayToSlice<zap.Field>([zap.String("TimerID", (startTimerAttr !== null && (startTimerAttr as any).__isVarRef !== true && (startTimerAttr as any).__goValue === undefined ? ((startTimerAttr as any) as m.StartTimerDecisionAttributes).GetTimerId() : m.StartTimerDecisionAttributes.prototype.GetTimerId.call(startTimerAttr))), zap.Duration("Duration", d), zap.Int64("DurationInSeconds", durationInSeconds)]))

		return new __goscript_internal_time.timerInfo({timerID: timerID})
	}

	public Now(): time.Time {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<workflowEnvironmentImpl>(wc).currentReplayTime))
	}

	public RegisterCancelHandler(handler: (() => void) | null): void {
		let wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		$.pointerValue<workflowEnvironmentImpl>(wc).cancelHandler = handler
	}

	public RegisterQueryHandler(handler: ((_p0: string, _p1: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null): void {
		let wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		$.pointerValue<workflowEnvironmentImpl>(wc).queryHandler = handler
	}

	public RegisterSignalHandler(handler: ((name: string, input: $.Slice<number>) => void) | null): void {
		let wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		$.pointerValue<workflowEnvironmentImpl>(wc).signalHandler = handler
	}

	public RemoveSession(sessionID: string): void {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		$.deleteMapEntry($.pointerValue<workflowEnvironmentImpl>(wc).openSessions, sessionID)
	}

	public async RequestCancelActivity(activityID: string): globalThis.Promise<void> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		const wc$: workflowEnvironmentImpl = wc == null ? $.pointerTarget<workflowEnvironmentImpl>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowEnvironmentImpl>(wc)
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.requestCancelActivityTask.call((wc$ as workflowEnvironmentImpl).decisionsHelper, activityID)
		let __goscriptShadow4: scheduledActivity | $.VarRef<scheduledActivity> | null = $.mustTypeAssert<scheduledActivity | $.VarRef<scheduledActivity> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledActivity"))
		if ($.pointerValue<scheduledActivity>(__goscriptShadow4).handled) {
			return
		}

		if ((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).isDone(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) || !$.pointerValue<scheduledActivity>(__goscriptShadow4).waitForCancelRequest) {
			await scheduledActivity.prototype.handle.call(__goscriptShadow4, null, $.interfaceValue<$.GoError>(__goscript_context.__goscript_get_ErrCanceled(), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError")))
		}

		await zap.Logger.prototype.Debug.call((wc$ as workflowEnvironmentImpl).logger, "RequestCancelActivity", $.arrayToSlice<zap.Field>([zap.String("ActivityID", activityID)]))
	}

	public async RequestCancelChildWorkflow(domainName: string, workflowID: string): globalThis.Promise<void> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		// For cancellation of child workflow only, we do not use cancellation ID and run ID
		let isChildWorkflowOnly = true
		let cancellationID = ""
		let runID = ""
		await __goscript_internal_decision_state_machine.decisionsHelper.prototype.requestCancelExternalWorkflowExecution.call($.pointerValue<workflowEnvironmentImpl>(wc).decisionsHelper, domainName, workflowID, runID, cancellationID, isChildWorkflowOnly)
	}

	public async RequestCancelExternalWorkflow(domainName: string, workflowID: string, runID: string, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): globalThis.Promise<void> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		// for cancellation of external workflow, we have to use cancellation ID and set isChildWorkflowOnly to false
		let isChildWorkflowOnly = false
		let cancellationID = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).GenerateSequenceID() : workflowEnvironmentImpl.prototype.GenerateSequenceID.call(wc))
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.requestCancelExternalWorkflowExecution.call($.pointerValue<workflowEnvironmentImpl>(wc).decisionsHelper, domainName, workflowID, runID, cancellationID, isChildWorkflowOnly)
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).setData($.interfaceValue(new scheduledCancellation({callback: callback}), "*internal.scheduledCancellation", /* @__PURE__ */ $.pointerType("internal.scheduledCancellation"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async RequestCancelLocalActivity(activityID: string): globalThis.Promise<void> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		{
			let __goscriptTuple8: any = $.mapGet<string, localActivityTask | $.VarRef<localActivityTask> | null, localActivityTask | $.VarRef<localActivityTask> | null>($.pointerValue<workflowEnvironmentImpl>(wc).pendingLaTasks, activityID, null)
			let task: localActivityTask | $.VarRef<localActivityTask> | null = __goscriptTuple8[0]
			let ok = __goscriptTuple8[1]
			if (ok) {
				await (task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as localActivityTask).cancel() : localActivityTask.prototype.cancel.call(task))
			}
		}
	}

	public async RequestCancelTimer(timerID: string): globalThis.Promise<void> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		const wc$: workflowEnvironmentImpl = wc == null ? $.pointerTarget<workflowEnvironmentImpl>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowEnvironmentImpl>(wc)
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.cancelTimer.call((wc$ as workflowEnvironmentImpl).decisionsHelper, timerID)
		let timer: scheduledTimer | $.VarRef<scheduledTimer> | null = $.mustTypeAssert<scheduledTimer | $.VarRef<scheduledTimer> | null>((__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).getData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.scheduledTimer"))
		if ($.pointerValue<scheduledTimer>(timer).handled) {
			return
		}
		await scheduledTimer.prototype.handle.call(timer, null, $.interfaceValue<$.GoError>(__goscript_context.__goscript_get_ErrCanceled(), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError")))
		await zap.Logger.prototype.Debug.call((wc$ as workflowEnvironmentImpl).logger, "RequestCancelTimer", $.arrayToSlice<zap.Field>([zap.String("TimerID", timerID)]))
	}

	public SetCurrentReplayTime(replayTime: time.Time): void {
		let wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		const wc$: workflowEnvironmentImpl = wc == null ? $.pointerTarget<workflowEnvironmentImpl>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowEnvironmentImpl>(wc)
		if ($.markAsStructValue($.cloneStructValue(replayTime)).Before($.markAsStructValue($.cloneStructValue((wc$ as workflowEnvironmentImpl).currentReplayTime)))) {
			return
		}
		$.assignStruct((wc$ as workflowEnvironmentImpl).currentReplayTime, replayTime)
		$.assignStruct((wc$ as workflowEnvironmentImpl).currentLocalTime, time.Now())
	}

	public async SideEffect(f: (() => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): globalThis.Promise<void> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		const wc$: workflowEnvironmentImpl = wc == null ? $.pointerTarget<workflowEnvironmentImpl>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowEnvironmentImpl>(wc)
		let sideEffectID = (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).GenerateSequence() : workflowEnvironmentImpl.prototype.GenerateSequence.call(wc))
		let details: $.Slice<number> = null! as $.Slice<number>
		let result: $.Slice<number> = null! as $.Slice<number>
		if ((wc$ as workflowEnvironmentImpl).isReplay) {
			let ok: boolean = false
			let __goscriptTuple9: any = $.mapGet<number, $.Slice<number>, $.Slice<number>>((wc$ as workflowEnvironmentImpl).sideEffectResult, sideEffectID, null)
			result = __goscriptTuple9[0]
			ok = __goscriptTuple9[1]
			if (!ok) {
				let keys: $.Slice<number> = $.makeSlice<number>(0, $.len((wc$ as workflowEnvironmentImpl).sideEffectResult), "number")
				for (const [k, __rangeValue] of (wc$ as workflowEnvironmentImpl).sideEffectResult?.entries() ?? []) {
					keys = $.appendOne(keys, $.int(k, 32))
				}
				$.panic(await fmt.Sprintf("No cached result found for side effectID=%v. KnownSideEffects=%v", $.basicInterfaceValue(sideEffectID, "int32"), $.interfaceValue(keys, "[]int32", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int32")))))
			}
			await zap.Logger.prototype.Debug.call((wc$ as workflowEnvironmentImpl).logger, "SideEffect returning already calculated result.", $.arrayToSlice<zap.Field>([zap.Int32("SideEffectID", sideEffectID)]))
			details = result
		} else {
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple10: any = await f!()
			result = __goscriptTuple10[0]
			err = __goscriptTuple10[1]
			if (err != null) {
				void (__goscriptAwait = callback!(result, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return
			}
			let __goscriptTuple11: any = await __goscript_internal_worker.encodeArgs((wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).GetDataConverter() : workflowEnvironmentImpl.prototype.GetDataConverter.call(wc)), $.arrayToSlice<any>([$.basicInterfaceValue(sideEffectID, "int32"), $.interfaceValue(result, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))
			details = __goscriptTuple11[0]
			err = __goscriptTuple11[1]
			if (err != null) {
				void (__goscriptAwait = callback!(null, fmt.Errorf("failure encoding sideEffectID: %v", (err as any))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return
			}
		}

		await __goscript_internal_decision_state_machine.decisionsHelper.prototype.recordSideEffectMarker.call((wc$ as workflowEnvironmentImpl).decisionsHelper, sideEffectID, details)

		void (__goscriptAwait = callback!(result, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await zap.Logger.prototype.Debug.call((wc$ as workflowEnvironmentImpl).logger, "SideEffect Marker added", $.arrayToSlice<zap.Field>([zap.Int32("SideEffectID", sideEffectID)]))
	}

	public async SignalExternalWorkflow(domainName: string, workflowID: string, runID: string, signalName: string, input: $.Slice<number>, _p5: any, childWorkflowOnly: boolean, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): globalThis.Promise<void> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;

		let signalID = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).GenerateSequenceID() : workflowEnvironmentImpl.prototype.GenerateSequenceID.call(wc))
		let decision = await __goscript_internal_decision_state_machine.decisionsHelper.prototype.signalExternalWorkflowExecution.call($.pointerValue<workflowEnvironmentImpl>(wc).decisionsHelper, domainName, workflowID, runID, signalName, input, signalID, childWorkflowOnly)
		void (__goscriptAwait = (decision !== null && (decision as any).__isVarRef !== true && (decision as any).__goValue === undefined ? (decision as Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>) : $.pointerValue<Exclude<__goscript_internal_decision_state_machine.decisionStateMachine, null>>(decision)).setData($.interfaceValue(new scheduledSignal({callback: callback}), "*internal.scheduledSignal", /* @__PURE__ */ $.pointerType("internal.scheduledSignal"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async UpsertSearchAttributes(attributes: globalThis.Map<string, any> | null): globalThis.Promise<$.GoError> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		// This has to be used in workflowEnvironment implementations instead of in Workflow for testsuite mock purpose.
		let __goscriptTuple12: any = await validateAndSerializeSearchAttributes(attributes)
		let attr: m.SearchAttributes | $.VarRef<m.SearchAttributes> | null = __goscriptTuple12[0]
		let err = __goscriptTuple12[1]
		if (err != null) {
			return err
		}

		let upsertID: string = ""
		{
			let [changeVersion, ok] = $.mapGet<string, any, any>(attributes, "CadenceChangeVersion", null)
			if (ok) {
				// to ensure backward compatibility on searchable GetVersion, use latest changeVersion as upsertID
				upsertID = $.arrayIndex($.mustTypeAssert<$.Slice<string>>(changeVersion, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))!, 0)
			} else {
				upsertID = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).GenerateSequenceID() : workflowEnvironmentImpl.prototype.GenerateSequenceID.call(wc))
			}
		}

		await __goscript_internal_decision_state_machine.decisionsHelper.prototype.upsertSearchAttributes.call($.pointerValue<workflowEnvironmentImpl>(wc).decisionsHelper, upsertID, attr)
		void (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).updateWorkflowInfoWithSearchAttributes(attr) : workflowEnvironmentImpl.prototype.updateWorkflowInfoWithSearchAttributes.call(wc, attr))
		return null
	}

	public WorkflowInfo(): __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		return $.pointerValue<workflowEnvironmentImpl>(wc).workflowInfo
	}

	public async encodeArg(arg: any): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		return $.pointerValue<Exclude<__goscript_encoded.DataConverter, null>>((wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).GetDataConverter() : workflowEnvironmentImpl.prototype.GetDataConverter.call(wc))).ToData($.arrayToSlice<any>([arg]))
	}

	public async encodeValue(value: any): globalThis.Promise<$.Slice<number>> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		let __goscriptTuple13: any = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).encodeArg(value) : workflowEnvironmentImpl.prototype.encodeArg.call(wc, value))
		let blob: $.Slice<number> = __goscriptTuple13[0]
		let err = __goscriptTuple13[1]
		if (err != null) {
			$.panic((err as any))
		}
		return blob
	}

	public getOpenSessions(): $.Slice<__goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		const wc$: workflowEnvironmentImpl = wc == null ? $.pointerTarget<workflowEnvironmentImpl>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowEnvironmentImpl>(wc)
		let openSessions: $.Slice<__goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null> = $.makeSlice<__goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null>(0, $.len((wc$ as workflowEnvironmentImpl).openSessions))
		for (const [__rangeKey, info] of (wc$ as workflowEnvironmentImpl).openSessions?.entries() ?? []) {
			openSessions = $.appendOne(openSessions, info, $.appendZeros.nil)
		}
		return openSessions
	}

	public async isEqualValue(newValue: any, encodedOldValue: $.Slice<number>, equals: ((a: any, b: any) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<boolean> {
		const wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		if (newValue == null) {
			// new value is nil
			let newEncodedValue: $.Slice<number> = await (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).encodeValue(null) : workflowEnvironmentImpl.prototype.encodeValue.call(wc, null))
			return bytes.Equal(newEncodedValue, encodedOldValue)
		}

		let oldValue = await decodeValue(__goscript_workflow.newEncodedValue(encodedOldValue, (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).GetDataConverter() : workflowEnvironmentImpl.prototype.GetDataConverter.call(wc))), newValue)
		return equals!(newValue, oldValue)
	}

	public async recordMutableSideEffect(id: string, data: $.Slice<number>): globalThis.Promise<__goscript_encoded.Value | null> {
		let wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		const wc$: workflowEnvironmentImpl = wc == null ? $.pointerTarget<workflowEnvironmentImpl>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowEnvironmentImpl>(wc)
		let __goscriptTuple14: any = await __goscript_internal_worker.encodeArgs((wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).GetDataConverter() : workflowEnvironmentImpl.prototype.GetDataConverter.call(wc)), $.arrayToSlice<any>([id, $.bytesToString(data)]))
		let details: $.Slice<number> = __goscriptTuple14[0]
		let err = __goscriptTuple14[1]
		if (err != null) {
			$.panic((err as any))
		}
		await __goscript_internal_decision_state_machine.decisionsHelper.prototype.recordMutableSideEffectMarker.call((wc$ as workflowEnvironmentImpl).decisionsHelper, id, details)
		$.mapSet((wc$ as workflowEnvironmentImpl).mutableSideEffect, id, data)
		return __goscript_workflow.newEncodedValue(data, (wc !== null && (wc as any).__isVarRef !== true && (wc as any).__goValue === undefined ? ((wc as any) as workflowEnvironmentImpl).GetDataConverter() : workflowEnvironmentImpl.prototype.GetDataConverter.call(wc)))
	}

	public updateWorkflowInfoWithSearchAttributes(attributes: m.SearchAttributes | $.VarRef<m.SearchAttributes> | null): void {
		let wc: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = this;
		const wc$: workflowEnvironmentImpl = wc == null ? $.pointerTarget<workflowEnvironmentImpl>(wc) : (wc as any).__isVarRef === true ? (wc as any).value : (wc as any).__goValue === undefined ? (wc as any) : $.pointerTarget<workflowEnvironmentImpl>(wc)
		$.pointerValue<__goscript_workflow.WorkflowInfo>((wc$ as workflowEnvironmentImpl).workflowInfo).SearchAttributes = mergeSearchAttributes($.pointerValue<__goscript_workflow.WorkflowInfo>((wc$ as workflowEnvironmentImpl).workflowInfo).SearchAttributes, attributes)
	}

	static __typeInfo = $.registerStructType(
		"internal.workflowEnvironmentImpl",
		() => new workflowEnvironmentImpl(),
		() => [$.methodSignature("AddSession", [["sessionInfo", /* @__PURE__ */ $.pointerType("internal.SessionInfo")]], [], true), $.methodSignature("Complete", [["result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], [], true), $.methodSignature("ExecuteActivity", [["parameters", "internal.executeActivityParams"], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.activityInfo")], true), $.methodSignature("ExecuteChildWorkflow", [["params", "internal.executeWorkflowParams"], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)], ["startedHandler", ({ kind: $.TypeKind.Function, params: ["internal.WorkflowExecution", "error"], results: [] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("ExecuteLocalActivity", [["params", "internal.executeLocalActivityParams"], ["callback", ({ kind: $.TypeKind.Function, name: "internal.laResultHandler", params: [/* @__PURE__ */ $.pointerType("internal.localActivityResultWrapper")], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.localActivityInfo")], true), $.methodSignature("GenerateSequence", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GenerateSequenceID", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetContextPropagators", [], [/* @__PURE__ */ $.sliceType("internal.ContextPropagator")], true), $.methodSignature("GetDataConverter", [], ["internal.DataConverter"], true), $.methodSignature("GetFeatureFlags", [], ["internal.FeatureFlags"], true), $.methodSignature("GetLogger", [], [/* @__PURE__ */ $.pointerType("zap.Logger")], true), $.methodSignature("GetMetricsScope", [], ["tally.Scope"], true), $.methodSignature("GetRegistry", [], [/* @__PURE__ */ $.pointerType("internal.registry")], true), $.methodSignature("GetTracer", [], ["opentracing.Tracer"], true), $.methodSignature("GetVersion", [["changeID", /* @__PURE__ */ $.basicType("string")], ["minSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")], ["maxSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")], ["opts", /* @__PURE__ */ $.sliceType("internal.GetVersionOption")]], [/* @__PURE__ */ $.basicType("int", "internal.Version")], true), $.methodSignature("GetWorkflowInterceptors", [], [/* @__PURE__ */ $.sliceType("internal.WorkflowInterceptorFactory")], true), $.methodSignature("IsReplaying", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MutableSideEffect", [["id", /* @__PURE__ */ $.basicType("string")], ["f", ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)], ["equals", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], ["internal.Value"], true), $.methodSignature("NewTimer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.timerInfo")], true), $.methodSignature("Now", [], ["time.Time"], true), $.methodSignature("RegisterCancelHandler", [["handler", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("RegisterQueryHandler", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("RegisterSignalHandler", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("RemoveSession", [["sessionID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("RequestCancelActivity", [["activityID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("RequestCancelChildWorkflow", [["domainName", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("RequestCancelExternalWorkflow", [["domainName", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("RequestCancelLocalActivity", [["activityID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("RequestCancelTimer", [["timerID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("SetCurrentReplayTime", [["replayTime", "time.Time"]], [], true), $.methodSignature("SideEffect", [["f", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("SignalExternalWorkflow", [["domainName", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["_", { kind: $.TypeKind.Interface, methods: [] }], ["childWorkflowOnly", /* @__PURE__ */ $.basicType("bool")], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("UpsertSearchAttributes", [["attributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("WorkflowInfo", [], [/* @__PURE__ */ $.pointerType("internal.WorkflowInfo")], true), $.methodSignature("encodeArg", [["arg", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("encodeValue", [["value", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("getOpenSessions", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("internal.SessionInfo"))], true), $.methodSignature("isEqualValue", [["newValue", { kind: $.TypeKind.Interface, methods: [] }], ["encodedOldValue", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["equals", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("recordMutableSideEffect", [["id", /* @__PURE__ */ $.basicType("string")], ["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["internal.Value"], true), $.methodSignature("updateWorkflowInfoWithSearchAttributes", [["attributes", /* @__PURE__ */ $.pointerType("shared.SearchAttributes")]], [], true)],
		workflowEnvironmentImpl,
		() => [/* @__PURE__ */ $.structField("workflowInfo", /* @__PURE__ */ $.pointerType("internal.WorkflowInfo"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("decisionsHelper", /* @__PURE__ */ $.pointerType("internal.decisionsHelper"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("sideEffectResult", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("changeVersions", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int", "internal.Version")), [3], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("pendingLaTasks", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("internal.localActivityTask")), [4], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("mutableSideEffect", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [5], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("unstartedLaTasks", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [6], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("openSessions", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("internal.SessionInfo")), [7], 56, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("counterID", /* @__PURE__ */ $.basicType("int32"), [8], 64, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("currentReplayTime", "time.Time", [9], 72, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("currentLocalTime", "time.Time", [10], 96, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("completeHandler", ({ kind: $.TypeKind.Function, name: "internal.completionHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo), [11], 120, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("cancelHandler", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [12], 128, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("signalHandler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [] } as $.FunctionTypeInfo), [13], 136, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("queryHandler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo), [14], 144, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [15], 152, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("isReplay", /* @__PURE__ */ $.basicType("bool"), [16], 160, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("enableLoggingInReplay", /* @__PURE__ */ $.basicType("bool"), [17], 161, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("metricsScope", "tally.Scope", [18], 168, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("registry", /* @__PURE__ */ $.pointerType("internal.registry"), [19], 184, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("dataConverter", "internal.DataConverter", [20], 192, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("contextPropagators", /* @__PURE__ */ $.sliceType("internal.ContextPropagator"), [21], 208, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("tracer", "opentracing.Tracer", [22], 232, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowInterceptorFactories", /* @__PURE__ */ $.sliceType("internal.WorkflowInterceptorFactory"), [23], 248, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("featureFlags", "internal.FeatureFlags", [24], 272, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class localActivityTask {
	public get Mutex(): sync.Mutex {
		return this._fields.Mutex
	}

	public set Mutex(value: sync.Mutex) {
		this._fields.Mutex = value
	}

	public get workflowTask(): __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null {
		return this._fields.workflowTask
	}

	public set workflowTask(value: __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null) {
		this._fields.workflowTask = value
	}

	public get activityID(): string {
		return this._fields.activityID
	}

	public set activityID(value: string) {
		this._fields.activityID = value
	}

	public get params(): __goscript_internal_activity.executeLocalActivityParams | $.VarRef<__goscript_internal_activity.executeLocalActivityParams> | null {
		return this._fields.params
	}

	public set params(value: __goscript_internal_activity.executeLocalActivityParams | $.VarRef<__goscript_internal_activity.executeLocalActivityParams> | null) {
		this._fields.params = value
	}

	public get callback(): ((lar: __goscript_internal_worker_base.localActivityResultWrapper | $.VarRef<__goscript_internal_worker_base.localActivityResultWrapper> | null) => void) | null {
		return this._fields.callback
	}

	public set callback(value: ((lar: __goscript_internal_worker_base.localActivityResultWrapper | $.VarRef<__goscript_internal_worker_base.localActivityResultWrapper> | null) => void) | null) {
		this._fields.callback = value
	}

	public get wc(): __goscript_internal_task_handlers.workflowExecutionContextImpl | $.VarRef<__goscript_internal_task_handlers.workflowExecutionContextImpl> | null {
		return this._fields.wc
	}

	public set wc(value: __goscript_internal_task_handlers.workflowExecutionContextImpl | $.VarRef<__goscript_internal_task_handlers.workflowExecutionContextImpl> | null) {
		this._fields.wc = value
	}

	public get canceled(): boolean {
		return this._fields.canceled
	}

	public set canceled(value: boolean) {
		this._fields.canceled = value
	}

	public get cancelFunc(): (() => void) | null {
		return this._fields.cancelFunc
	}

	public set cancelFunc(value: (() => void) | null) {
		this._fields.cancelFunc = value
	}

	public get attempt(): number {
		return this._fields.attempt
	}

	public set attempt(value: number) {
		this._fields.attempt = value
	}

	public get retryPolicy(): __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null {
		return this._fields.retryPolicy
	}

	public set retryPolicy(value: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null) {
		this._fields.retryPolicy = value
	}

	public get expireTime(): time.Time {
		return this._fields.expireTime
	}

	public set expireTime(value: time.Time) {
		this._fields.expireTime = value
	}

	public get header(): m.Header | $.VarRef<m.Header> | null {
		return this._fields.header
	}

	public set header(value: m.Header | $.VarRef<m.Header> | null) {
		this._fields.header = value
	}

	public _fields: {
		Mutex: sync.Mutex
		workflowTask: __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null
		activityID: string
		params: __goscript_internal_activity.executeLocalActivityParams | $.VarRef<__goscript_internal_activity.executeLocalActivityParams> | null
		callback: ((lar: __goscript_internal_worker_base.localActivityResultWrapper | $.VarRef<__goscript_internal_worker_base.localActivityResultWrapper> | null) => void) | null
		wc: __goscript_internal_task_handlers.workflowExecutionContextImpl | $.VarRef<__goscript_internal_task_handlers.workflowExecutionContextImpl> | null
		canceled: boolean
		cancelFunc: (() => void) | null
		attempt: number
		retryPolicy: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null
		expireTime: time.Time
		header: m.Header | $.VarRef<m.Header> | null
	}

	constructor(init?: Partial<{Mutex?: sync.Mutex, workflowTask?: __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null, activityID?: string, params?: __goscript_internal_activity.executeLocalActivityParams | $.VarRef<__goscript_internal_activity.executeLocalActivityParams> | null, callback?: ((lar: __goscript_internal_worker_base.localActivityResultWrapper | $.VarRef<__goscript_internal_worker_base.localActivityResultWrapper> | null) => void) | null, wc?: __goscript_internal_task_handlers.workflowExecutionContextImpl | $.VarRef<__goscript_internal_task_handlers.workflowExecutionContextImpl> | null, canceled?: boolean, cancelFunc?: (() => void) | null, attempt?: number, retryPolicy?: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null, expireTime?: time.Time, header?: m.Header | $.VarRef<m.Header> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Mutex: init?.Mutex ? $.markAsStructValue($.cloneStructValue(init.Mutex)) : $.markAsStructValue(new sync.Mutex()),
			workflowTask: init?.workflowTask ?? (null! as __goscript_internal_task_handlers.workflowTask | $.VarRef<__goscript_internal_task_handlers.workflowTask> | null),
			activityID: init?.activityID ?? ("" as string),
			params: init?.params ?? (null! as __goscript_internal_activity.executeLocalActivityParams | $.VarRef<__goscript_internal_activity.executeLocalActivityParams> | null),
			callback: init?.callback ?? (null! as ((lar: __goscript_internal_worker_base.localActivityResultWrapper | $.VarRef<__goscript_internal_worker_base.localActivityResultWrapper> | null) => void) | null),
			wc: init?.wc ?? (null! as __goscript_internal_task_handlers.workflowExecutionContextImpl | $.VarRef<__goscript_internal_task_handlers.workflowExecutionContextImpl> | null),
			canceled: init?.canceled ?? (false as boolean),
			cancelFunc: init?.cancelFunc ?? (null! as (() => void) | null),
			attempt: init?.attempt ?? (0 as number),
			retryPolicy: init?.retryPolicy ?? (null! as __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null),
			expireTime: init?.expireTime ? $.markAsStructValue($.cloneStructValue(init.expireTime)) : $.markAsStructValue(new time.Time()),
			header: init?.header ?? (null! as m.Header | $.VarRef<m.Header> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): localActivityTask {
		return new localActivityTask(this, true)
	}

	public __goscriptAssign(source: localActivityTask): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Mutex, values.Mutex)
		target.workflowTask = values.workflowTask
		target.activityID = values.activityID
		target.params = values.params
		target.callback = values.callback
		target.wc = values.wc
		target.canceled = values.canceled
		target.cancelFunc = values.cancelFunc
		target.attempt = values.attempt
		target.retryPolicy = values.retryPolicy
		$.assignStruct(target.expireTime, values.expireTime)
		target.header = values.header
	}

	public async cancel(): globalThis.Promise<void> {
		let t: localActivityTask | $.VarRef<localActivityTask> | null = this;
		const t$: localActivityTask = t == null ? $.pointerTarget<localActivityTask>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<localActivityTask>(t)
		await (t$ as localActivityTask).Mutex.Lock();
		;(t$ as localActivityTask).canceled = true
		if ((t$ as localActivityTask).cancelFunc != null) {
			void (__goscriptAwait = (t$ as localActivityTask).cancelFunc!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		void (t$ as localActivityTask).Mutex.Unlock()
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
		"internal.localActivityTask",
		() => new localActivityTask(),
		() => [$.methodSignature("cancel", [], [], true), $.methodSignature("Lock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		localActivityTask,
		() => [/* @__PURE__ */ $.structField("Mutex", "sync.Mutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("workflowTask", /* @__PURE__ */ $.pointerType("internal.workflowTask"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("activityID", /* @__PURE__ */ $.basicType("string"), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("params", /* @__PURE__ */ $.pointerType("internal.executeLocalActivityParams"), [3], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("callback", ({ kind: $.TypeKind.Function, name: "internal.laResultHandler", params: [/* @__PURE__ */ $.pointerType("internal.localActivityResultWrapper")], results: [] } as $.FunctionTypeInfo), [4], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("wc", /* @__PURE__ */ $.pointerType("internal.workflowExecutionContextImpl"), [5], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("canceled", /* @__PURE__ */ $.basicType("bool"), [6], 56, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("cancelFunc", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [7], 64, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("attempt", /* @__PURE__ */ $.basicType("int32"), [8], 72, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("retryPolicy", /* @__PURE__ */ $.pointerType("internal.RetryPolicy"), [9], 80, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("expireTime", "time.Time", [10], 88, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("header", /* @__PURE__ */ $.pointerType("shared.Header"), [11], 112, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class locallyDispatchedActivityTask {
	// used to notify the poller the response from server is completed and the task is ready
	public get readyCh(): $.Channel<boolean> | null {
		return this._fields.readyCh
	}

	public set readyCh(value: $.Channel<boolean> | null) {
		this._fields.readyCh = value
	}

	public get TaskToken(): $.Slice<number> {
		return this._fields.TaskToken
	}

	public set TaskToken(value: $.Slice<number>) {
		this._fields.TaskToken = value
	}

	public get WorkflowExecution(): m.WorkflowExecution | $.VarRef<m.WorkflowExecution> | null {
		return this._fields.WorkflowExecution
	}

	public set WorkflowExecution(value: m.WorkflowExecution | $.VarRef<m.WorkflowExecution> | null) {
		this._fields.WorkflowExecution = value
	}

	public get ActivityID(): $.VarRef<string> | null {
		return this._fields.ActivityID
	}

	public set ActivityID(value: $.VarRef<string> | null) {
		this._fields.ActivityID = value
	}

	public get ActivityType(): m.ActivityType | $.VarRef<m.ActivityType> | null {
		return this._fields.ActivityType
	}

	public set ActivityType(value: m.ActivityType | $.VarRef<m.ActivityType> | null) {
		this._fields.ActivityType = value
	}

	public get Input(): $.Slice<number> {
		return this._fields.Input
	}

	public set Input(value: $.Slice<number>) {
		this._fields.Input = value
	}

	public get ScheduledTimestamp(): $.VarRef<bigint> | null {
		return this._fields.ScheduledTimestamp
	}

	public set ScheduledTimestamp(value: $.VarRef<bigint> | null) {
		this._fields.ScheduledTimestamp = value
	}

	public get ScheduleToCloseTimeoutSeconds(): $.VarRef<number> | null {
		return this._fields.ScheduleToCloseTimeoutSeconds
	}

	public set ScheduleToCloseTimeoutSeconds(value: $.VarRef<number> | null) {
		this._fields.ScheduleToCloseTimeoutSeconds = value
	}

	public get StartedTimestamp(): $.VarRef<bigint> | null {
		return this._fields.StartedTimestamp
	}

	public set StartedTimestamp(value: $.VarRef<bigint> | null) {
		this._fields.StartedTimestamp = value
	}

	public get StartToCloseTimeoutSeconds(): $.VarRef<number> | null {
		return this._fields.StartToCloseTimeoutSeconds
	}

	public set StartToCloseTimeoutSeconds(value: $.VarRef<number> | null) {
		this._fields.StartToCloseTimeoutSeconds = value
	}

	public get HeartbeatTimeoutSeconds(): $.VarRef<number> | null {
		return this._fields.HeartbeatTimeoutSeconds
	}

	public set HeartbeatTimeoutSeconds(value: $.VarRef<number> | null) {
		this._fields.HeartbeatTimeoutSeconds = value
	}

	public get ScheduledTimestampOfThisAttempt(): $.VarRef<bigint> | null {
		return this._fields.ScheduledTimestampOfThisAttempt
	}

	public set ScheduledTimestampOfThisAttempt(value: $.VarRef<bigint> | null) {
		this._fields.ScheduledTimestampOfThisAttempt = value
	}

	public get WorkflowType(): m.WorkflowType | $.VarRef<m.WorkflowType> | null {
		return this._fields.WorkflowType
	}

	public set WorkflowType(value: m.WorkflowType | $.VarRef<m.WorkflowType> | null) {
		this._fields.WorkflowType = value
	}

	public get WorkflowDomain(): $.VarRef<string> | null {
		return this._fields.WorkflowDomain
	}

	public set WorkflowDomain(value: $.VarRef<string> | null) {
		this._fields.WorkflowDomain = value
	}

	public get Header(): m.Header | $.VarRef<m.Header> | null {
		return this._fields.Header
	}

	public set Header(value: m.Header | $.VarRef<m.Header> | null) {
		this._fields.Header = value
	}

	public _fields: {
		readyCh: $.Channel<boolean> | null
		TaskToken: $.Slice<number>
		WorkflowExecution: m.WorkflowExecution | $.VarRef<m.WorkflowExecution> | null
		ActivityID: $.VarRef<string> | null
		ActivityType: m.ActivityType | $.VarRef<m.ActivityType> | null
		Input: $.Slice<number>
		ScheduledTimestamp: $.VarRef<bigint> | null
		ScheduleToCloseTimeoutSeconds: $.VarRef<number> | null
		StartedTimestamp: $.VarRef<bigint> | null
		StartToCloseTimeoutSeconds: $.VarRef<number> | null
		HeartbeatTimeoutSeconds: $.VarRef<number> | null
		ScheduledTimestampOfThisAttempt: $.VarRef<bigint> | null
		WorkflowType: m.WorkflowType | $.VarRef<m.WorkflowType> | null
		WorkflowDomain: $.VarRef<string> | null
		Header: m.Header | $.VarRef<m.Header> | null
	}

	constructor(init?: Partial<{readyCh?: $.Channel<boolean> | null, TaskToken?: $.Slice<number>, WorkflowExecution?: m.WorkflowExecution | $.VarRef<m.WorkflowExecution> | null, ActivityID?: $.VarRef<string> | null, ActivityType?: m.ActivityType | $.VarRef<m.ActivityType> | null, Input?: $.Slice<number>, ScheduledTimestamp?: $.VarRef<bigint> | null, ScheduleToCloseTimeoutSeconds?: $.VarRef<number> | null, StartedTimestamp?: $.VarRef<bigint> | null, StartToCloseTimeoutSeconds?: $.VarRef<number> | null, HeartbeatTimeoutSeconds?: $.VarRef<number> | null, ScheduledTimestampOfThisAttempt?: $.VarRef<bigint> | null, WorkflowType?: m.WorkflowType | $.VarRef<m.WorkflowType> | null, WorkflowDomain?: $.VarRef<string> | null, Header?: m.Header | $.VarRef<m.Header> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			readyCh: init?.readyCh ?? (null! as $.Channel<boolean> | null),
			TaskToken: init?.TaskToken ?? (null! as $.Slice<number>),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as m.WorkflowExecution | $.VarRef<m.WorkflowExecution> | null),
			ActivityID: init?.ActivityID ?? (null! as $.VarRef<string> | null),
			ActivityType: init?.ActivityType ?? (null! as m.ActivityType | $.VarRef<m.ActivityType> | null),
			Input: init?.Input ?? (null! as $.Slice<number>),
			ScheduledTimestamp: init?.ScheduledTimestamp ?? (null! as $.VarRef<bigint> | null),
			ScheduleToCloseTimeoutSeconds: init?.ScheduleToCloseTimeoutSeconds ?? (null! as $.VarRef<number> | null),
			StartedTimestamp: init?.StartedTimestamp ?? (null! as $.VarRef<bigint> | null),
			StartToCloseTimeoutSeconds: init?.StartToCloseTimeoutSeconds ?? (null! as $.VarRef<number> | null),
			HeartbeatTimeoutSeconds: init?.HeartbeatTimeoutSeconds ?? (null! as $.VarRef<number> | null),
			ScheduledTimestampOfThisAttempt: init?.ScheduledTimestampOfThisAttempt ?? (null! as $.VarRef<bigint> | null),
			WorkflowType: init?.WorkflowType ?? (null! as m.WorkflowType | $.VarRef<m.WorkflowType> | null),
			WorkflowDomain: init?.WorkflowDomain ?? (null! as $.VarRef<string> | null),
			Header: init?.Header ?? (null! as m.Header | $.VarRef<m.Header> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): locallyDispatchedActivityTask {
		return new locallyDispatchedActivityTask(this, true)
	}

	public __goscriptAssign(source: locallyDispatchedActivityTask): void {
		const target = this._fields
		const values = source._fields
		target.readyCh = values.readyCh
		target.TaskToken = values.TaskToken
		target.WorkflowExecution = values.WorkflowExecution
		target.ActivityID = values.ActivityID
		target.ActivityType = values.ActivityType
		target.Input = values.Input
		target.ScheduledTimestamp = values.ScheduledTimestamp
		target.ScheduleToCloseTimeoutSeconds = values.ScheduleToCloseTimeoutSeconds
		target.StartedTimestamp = values.StartedTimestamp
		target.StartToCloseTimeoutSeconds = values.StartToCloseTimeoutSeconds
		target.HeartbeatTimeoutSeconds = values.HeartbeatTimeoutSeconds
		target.ScheduledTimestampOfThisAttempt = values.ScheduledTimestampOfThisAttempt
		target.WorkflowType = values.WorkflowType
		target.WorkflowDomain = values.WorkflowDomain
		target.Header = values.Header
	}

	static __typeInfo = $.registerStructType(
		"internal.locallyDispatchedActivityTask",
		() => new locallyDispatchedActivityTask(),
		() => [],
		locallyDispatchedActivityTask,
		() => [/* @__PURE__ */ $.structField("readyCh", /* @__PURE__ */ $.channelType(/* @__PURE__ */ $.basicType("bool"), "both"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("TaskToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, true), /* @__PURE__ */ $.structField("WorkflowExecution", /* @__PURE__ */ $.pointerType("shared.WorkflowExecution"), [2], 32, true), /* @__PURE__ */ $.structField("ActivityID", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [3], 40, true), /* @__PURE__ */ $.structField("ActivityType", /* @__PURE__ */ $.pointerType("shared.ActivityType"), [4], 48, true), /* @__PURE__ */ $.structField("Input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 56, true), /* @__PURE__ */ $.structField("ScheduledTimestamp", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [6], 80, true), /* @__PURE__ */ $.structField("ScheduleToCloseTimeoutSeconds", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [7], 88, true), /* @__PURE__ */ $.structField("StartedTimestamp", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [8], 96, true), /* @__PURE__ */ $.structField("StartToCloseTimeoutSeconds", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [9], 104, true), /* @__PURE__ */ $.structField("HeartbeatTimeoutSeconds", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32")), [10], 112, true), /* @__PURE__ */ $.structField("ScheduledTimestampOfThisAttempt", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64")), [11], 120, true), /* @__PURE__ */ $.structField("WorkflowType", /* @__PURE__ */ $.pointerType("shared.WorkflowType"), [12], 128, true), /* @__PURE__ */ $.structField("WorkflowDomain", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [13], 136, true), /* @__PURE__ */ $.structField("Header", /* @__PURE__ */ $.pointerType("shared.Header"), [14], 144, true)]
	)
}

export class localActivityMarkerData {
	public get ActivityID(): string {
		return this._fields.ActivityID
	}

	public set ActivityID(value: string) {
		this._fields.ActivityID = value
	}

	public get ActivityType(): string {
		return this._fields.ActivityType
	}

	public set ActivityType(value: string) {
		this._fields.ActivityType = value
	}

	public get ErrReason(): string {
		return this._fields.ErrReason
	}

	public set ErrReason(value: string) {
		this._fields.ErrReason = value
	}

	public get ErrJSON(): string {
		return this._fields.ErrJSON
	}

	public set ErrJSON(value: string) {
		this._fields.ErrJSON = value
	}

	public get ResultJSON(): string {
		return this._fields.ResultJSON
	}

	public set ResultJSON(value: string) {
		this._fields.ResultJSON = value
	}

	public get ReplayTime(): time.Time {
		return this._fields.ReplayTime
	}

	public set ReplayTime(value: time.Time) {
		this._fields.ReplayTime = value
	}

	public get Attempt(): number {
		return this._fields.Attempt
	}

	public set Attempt(value: number) {
		this._fields.Attempt = value
	}

	public get Backoff(): time.Duration {
		return this._fields.Backoff
	}

	public set Backoff(value: time.Duration) {
		this._fields.Backoff = value
	}

	public _fields: {
		ActivityID: string
		ActivityType: string
		ErrReason: string
		ErrJSON: string
		ResultJSON: string
		ReplayTime: time.Time
		Attempt: number
		Backoff: time.Duration
	}

	constructor(init?: Partial<{ActivityID?: string, ActivityType?: string, ErrReason?: string, ErrJSON?: string, ResultJSON?: string, ReplayTime?: time.Time, Attempt?: number, Backoff?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			ActivityID: init?.ActivityID ?? ("" as string),
			ActivityType: init?.ActivityType ?? ("" as string),
			ErrReason: init?.ErrReason ?? ("" as string),
			ErrJSON: init?.ErrJSON ?? ("" as string),
			ResultJSON: init?.ResultJSON ?? ("" as string),
			ReplayTime: init?.ReplayTime ? $.markAsStructValue($.cloneStructValue(init.ReplayTime)) : $.markAsStructValue(new time.Time()),
			Attempt: init?.Attempt ?? (0 as number),
			Backoff: init?.Backoff ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): localActivityMarkerData {
		return new localActivityMarkerData(this, true)
	}

	public __goscriptAssign(source: localActivityMarkerData): void {
		const target = this._fields
		const values = source._fields
		target.ActivityID = values.ActivityID
		target.ActivityType = values.ActivityType
		target.ErrReason = values.ErrReason
		target.ErrJSON = values.ErrJSON
		target.ResultJSON = values.ResultJSON
		$.assignStruct(target.ReplayTime, values.ReplayTime)
		target.Attempt = values.Attempt
		target.Backoff = values.Backoff
	}

	static __typeInfo = $.registerStructType(
		"internal.localActivityMarkerData",
		() => new localActivityMarkerData(),
		() => [],
		localActivityMarkerData,
		() => [/* @__PURE__ */ $.structField("ActivityID", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "json:\"activityId,omitempty\"" }), /* @__PURE__ */ $.structField("ActivityType", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "json:\"activityType,omitempty\"" }), /* @__PURE__ */ $.structField("ErrReason", /* @__PURE__ */ $.basicType("string"), [2], 32, true, { tag: "json:\"errReason,omitempty\"" }), /* @__PURE__ */ $.structField("ErrJSON", /* @__PURE__ */ $.basicType("string"), [3], 48, true, { tag: "json:\"errJson,omitempty\"" }), /* @__PURE__ */ $.structField("ResultJSON", /* @__PURE__ */ $.basicType("string"), [4], 64, true, { tag: "json:\"resultJson,omitempty\"" }), /* @__PURE__ */ $.structField("ReplayTime", "time.Time", [5], 80, true, { tag: "json:\"replayTime,omitempty\"" }), /* @__PURE__ */ $.structField("Attempt", /* @__PURE__ */ $.basicType("int32"), [6], 104, true, { tag: "json:\"attempt,omitempty\"" }), /* @__PURE__ */ $.structField("Backoff", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [7], 112, true, { tag: "json:\"backoff,omitempty\"" })]
	)
}

export class replayAwareZapCore {
	public get Core(): zapcore.Core | null {
		return this._fields.Core
	}

	public set Core(value: zapcore.Core | null) {
		this._fields.Core = value
	}

	public get isReplay(): $.VarRef<boolean> | null {
		return this._fields.isReplay
	}

	public set isReplay(value: $.VarRef<boolean> | null) {
		this._fields.isReplay = value
	}

	public get enableLoggingInReplay(): $.VarRef<boolean> | null {
		return this._fields.enableLoggingInReplay
	}

	public set enableLoggingInReplay(value: $.VarRef<boolean> | null) {
		this._fields.enableLoggingInReplay = value
	}

	public _fields: {
		Core: zapcore.Core | null
		isReplay: $.VarRef<boolean> | null
		enableLoggingInReplay: $.VarRef<boolean> | null
	}

	constructor(init?: Partial<{Core?: zapcore.Core | null, isReplay?: $.VarRef<boolean> | null, enableLoggingInReplay?: $.VarRef<boolean> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Core: init?.Core ?? (null! as zapcore.Core | null),
			isReplay: init?.isReplay ?? (null! as $.VarRef<boolean> | null),
			enableLoggingInReplay: init?.enableLoggingInReplay ?? (null! as $.VarRef<boolean> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): replayAwareZapCore {
		return new replayAwareZapCore(this, true)
	}

	public __goscriptAssign(source: replayAwareZapCore): void {
		const target = this._fields
		const values = source._fields
		target.Core = $.assignFieldValue(target.Core, values.Core, "zapcore.Core")
		target.isReplay = values.isReplay
		target.enableLoggingInReplay = values.enableLoggingInReplay
	}

	public async Check(entry: zapcore.Entry, checkedEntry: zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null): globalThis.Promise<zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null> {
		const c: replayAwareZapCore | $.VarRef<replayAwareZapCore> | null = this;
		const c$: replayAwareZapCore = c == null ? $.pointerTarget<replayAwareZapCore>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<replayAwareZapCore>(c)
		if ($.pointerValue<boolean>((c$ as replayAwareZapCore).isReplay) && !$.pointerValue<boolean>((c$ as replayAwareZapCore).enableLoggingInReplay)) {
			return checkedEntry
		}
		return $.pointerValue<Exclude<zapcore.Core, null>>((c$ as replayAwareZapCore).Core).Check((entry).clone(), checkedEntry)
	}

	public async With(fields: $.Slice<zapcore.Field>): globalThis.Promise<zapcore.Core | null> {
		const c: replayAwareZapCore | $.VarRef<replayAwareZapCore> | null = this;
		const c$: replayAwareZapCore = c == null ? $.pointerTarget<replayAwareZapCore>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<replayAwareZapCore>(c)
		let coreWithFields = (__goscriptAwait = $.pointerValue<Exclude<zapcore.Core, null>>((c$ as replayAwareZapCore).Core).With(fields), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return $.interfaceValue<zapcore.Core | null>(new replayAwareZapCore({Core: coreWithFields, isReplay: (c$ as replayAwareZapCore).isReplay, enableLoggingInReplay: (c$ as replayAwareZapCore).enableLoggingInReplay}), "*internal.replayAwareZapCore", /* @__PURE__ */ $.pointerType("internal.replayAwareZapCore"))
	}

	public async Enabled(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<zapcore.Core | null, null>>(this.Core).Enabled(_p0)
	}

	public async Sync(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<zapcore.Core | null, null>>(this.Core).Sync()
	}

	public async Write(_p0: any, _p1: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<zapcore.Core | null, null>>(this.Core).Write(_p0, _p1)
	}

	static __typeInfo = $.registerStructType(
		"internal.replayAwareZapCore",
		() => new replayAwareZapCore(),
		() => [$.methodSignature("Check", [["entry", "zapcore.Entry"], ["checkedEntry", /* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")]], [/* @__PURE__ */ $.pointerType("zapcore.CheckedEntry")], true), $.methodSignature("With", [["fields", /* @__PURE__ */ $.sliceType("zapcore.Field")]], ["zapcore.Core"], true), $.methodSignature("Enabled", [/* @__PURE__ */ $.basicType("int8", "zapcore.Level")], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Sync", [], ["error"]), $.methodSignature("Write", ["zapcore.Entry", /* @__PURE__ */ $.sliceType("zapcore.Field")], ["error"])],
		replayAwareZapCore,
		() => [/* @__PURE__ */ $.structField("Core", "zapcore.Core", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("isReplay", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("enableLoggingInReplay", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), [2], 24, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export const queryResultSizeLimit: number = 2000000

export const historySizeEstimationBuffer: number = 400

export function wrapLogger(isReplay: $.VarRef<boolean> | null, enableLoggingInReplay: $.VarRef<boolean> | null): ((_p0: zapcore.Core | null) => zapcore.Core | null | globalThis.Promise<zapcore.Core | null>) | null {
	return $.functionValue((c: zapcore.Core | null): zapcore.Core | null => {
		return $.interfaceValue<zapcore.Core | null>(new replayAwareZapCore({Core: c, isReplay: isReplay, enableLoggingInReplay: enableLoggingInReplay}), "*internal.replayAwareZapCore", /* @__PURE__ */ $.pointerType("internal.replayAwareZapCore"))
	}, ({ kind: $.TypeKind.Function, params: ["zapcore.Core"], results: ["zapcore.Core"] } as $.FunctionTypeInfo))
}

export async function newWorkflowExecutionEventHandler(workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, completeHandler: ((result: $.Slice<number>, err: $.GoError) => void) | null, logger: zap.Logger | $.VarRef<zap.Logger> | null, enableLoggingInReplay: boolean, scope: tally.Scope | null, registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null, dataConverter: __goscript_encoded.DataConverter | null, contextPropagators: $.Slice<__goscript_headers.ContextPropagator | null>, tracer: opentracing.Tracer | null, workflowInterceptorFactories: $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>, featureFlags: __goscript_internal_utils.FeatureFlags): globalThis.Promise<__goscript_internal_task_handlers.workflowExecutionEventHandler | null> {
	const workflowInfo$: __goscript_workflow.WorkflowInfo = workflowInfo == null ? $.pointerTarget<__goscript_workflow.WorkflowInfo>(workflowInfo) : (workflowInfo as any).__isVarRef === true ? (workflowInfo as any).value : (workflowInfo as any).__goValue === undefined ? (workflowInfo as any) : $.pointerTarget<__goscript_workflow.WorkflowInfo>(workflowInfo)
	let context: workflowEnvironmentImpl | $.VarRef<workflowEnvironmentImpl> | null = (() => { const __goscriptLiteralField6 = __goscript_internal_decision_state_machine.newDecisionsHelper(); return new workflowEnvironmentImpl({workflowInfo: workflowInfo, decisionsHelper: __goscriptLiteralField6, sideEffectResult: $.makeMap<number, $.Slice<number>>(), mutableSideEffect: $.makeMap<string, $.Slice<number>>(), changeVersions: $.makeMap<string, __goscript_workflow.Version>(), pendingLaTasks: $.makeMap<string, localActivityTask | $.VarRef<localActivityTask> | null>(), unstartedLaTasks: $.makeMap<string, {}>(), openSessions: $.makeMap<string, __goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null>(), completeHandler: completeHandler, enableLoggingInReplay: enableLoggingInReplay, registry: registry, dataConverter: dataConverter, contextPropagators: contextPropagators, tracer: tracer, workflowInterceptorFactories: workflowInterceptorFactories, featureFlags: featureFlags}) })()
	let context$: workflowEnvironmentImpl = context == null ? $.pointerTarget<workflowEnvironmentImpl>(context) : (context as any).__isVarRef === true ? (context as any).value : (context as any).__goValue === undefined ? (context as any) : $.pointerTarget<workflowEnvironmentImpl>(context);
	;(context$ as workflowEnvironmentImpl).logger = await zap.Logger.prototype.WithOptions.call(await zap.Logger.prototype.With.call(logger, $.arrayToSlice<zap.Field>([new zapcore.Field({Key: "WorkflowType", Type: 15, String: (workflowInfo$ as __goscript_workflow.WorkflowInfo).WorkflowType.Name}, true), new zapcore.Field({Key: "WorkflowID", Type: 15, String: (workflowInfo$ as __goscript_workflow.WorkflowInfo).WorkflowExecution.ID}, true), new zapcore.Field({Key: "RunID", Type: 15, String: (workflowInfo$ as __goscript_workflow.WorkflowInfo).WorkflowExecution.RunID}, true)])), $.arrayToSlice<zap.Option | null>([await zap.WrapCore(wrapLogger($.fieldRef((context$ as workflowEnvironmentImpl)._fields, "isReplay"), $.fieldRef((context$ as workflowEnvironmentImpl)._fields, "enableLoggingInReplay")))]))

	if (scope != null) {
		;(context$ as workflowEnvironmentImpl).metricsScope = await __goscript_internal_worker.tagScope(metrics.WrapScope($.fieldRef((context$ as workflowEnvironmentImpl)._fields, "isReplay"), scope, $.interfaceValue<metrics.Clock | null>(context, "*internal.workflowEnvironmentImpl", /* @__PURE__ */ $.pointerType("internal.workflowEnvironmentImpl"))), $.arrayToSlice<string>(["WorkflowType", (workflowInfo$ as __goscript_workflow.WorkflowInfo).WorkflowType.Name]))
	}

	return $.interfaceValue<__goscript_internal_task_handlers.workflowExecutionEventHandler | null>(new workflowExecutionEventHandlerImpl({workflowEnvironmentImpl: context, workflowDefinition: null}), "*internal.workflowExecutionEventHandlerImpl", /* @__PURE__ */ $.pointerType("internal.workflowExecutionEventHandlerImpl"))
}

export function mergeSearchAttributes(current: m.SearchAttributes | $.VarRef<m.SearchAttributes> | null, upsert: m.SearchAttributes | $.VarRef<m.SearchAttributes> | null): m.SearchAttributes | $.VarRef<m.SearchAttributes> | null {
	if ((current == null) || ($.len($.pointerValue<m.SearchAttributes>(current).IndexedFields) == 0)) {
		if ((upsert == null) || ($.len($.pointerValue<m.SearchAttributes>(upsert).IndexedFields) == 0)) {
			return null
		}
		current = new m.SearchAttributes({IndexedFields: $.makeMap<string, $.Slice<number>>()})
	}

	let fields: globalThis.Map<string, $.Slice<number>> | null = $.pointerValue<m.SearchAttributes>(current).IndexedFields
	for (let [k, v] of $.pointerValue<m.SearchAttributes>(upsert).IndexedFields?.entries() ?? []) {
		$.mapSet(fields, k, v)
	}
	return current
}

export async function validateAndSerializeSearchAttributes(attributes: globalThis.Map<string, any> | null): globalThis.Promise<[m.SearchAttributes | $.VarRef<m.SearchAttributes> | null, $.GoError]> {
	if ($.len(attributes) == 0) {
		return [null, __goscript_workflow.errSearchAttributesNotSet]
	}
	let __goscriptTuple15: any = await __goscript_internal_workflow_client.serializeSearchAttributes(attributes)
	let attr: m.SearchAttributes | $.VarRef<m.SearchAttributes> | null = __goscriptTuple15[0]
	let err = __goscriptTuple15[1]
	if (err != null) {
		return [null, err]
	}
	return [attr, null]
}

export function newLocalActivityTask(__goscriptParam0: __goscript_internal_activity.executeLocalActivityParams, callback: __goscript_internal_worker_base.laResultHandler | null, activityID: string): localActivityTask | $.VarRef<localActivityTask> | null {
	let params: $.VarRef<__goscript_internal_activity.executeLocalActivityParams> = $.varRef(__goscriptParam0)
	let task: localActivityTask | $.VarRef<localActivityTask> | null = new localActivityTask({activityID: activityID, params: params, callback: callback, retryPolicy: params.value.localActivityOptions.RetryPolicy, attempt: params.value.Attempt, header: params.value.Header})

	if ((params.value.localActivityOptions.RetryPolicy != null) && ($.pointerValue<__goscript_client.RetryPolicy>(params.value.localActivityOptions.RetryPolicy).ExpirationInterval > 0n)) {
		$.assignStruct($.pointerValue<localActivityTask>(task).expireTime, $.markAsStructValue($.cloneStructValue(params.value.ScheduledTime)).Add($.pointerValue<__goscript_client.RetryPolicy>(params.value.localActivityOptions.RetryPolicy).ExpirationInterval))
	}
	return task
}

export async function validateVersion(changeID: string, version: __goscript_workflow.Version, minSupported: __goscript_workflow.Version, maxSupported: __goscript_workflow.Version): globalThis.Promise<void> {
	if (version < minSupported) {
		$.panic(await fmt.Sprintf($.concatString("Workflow code removed support of version %v. ", "for \"%v\" changeID. The oldest supported version is %v"), $.namedValueInterfaceValue<any>(version, "internal.Version", {}, /* @__PURE__ */ $.basicType("int", "internal.Version")), changeID, $.namedValueInterfaceValue<any>(minSupported, "internal.Version", {}, /* @__PURE__ */ $.basicType("int", "internal.Version"))))
	}
	if (version > maxSupported) {
		$.panic(await fmt.Sprintf($.concatString("Workflow code is too old to support version %v ", "for \"%v\" changeID. The maximum supported version is %v"), $.namedValueInterfaceValue<any>(version, "internal.Version", {}, /* @__PURE__ */ $.basicType("int", "internal.Version")), changeID, $.namedValueInterfaceValue<any>(maxSupported, "internal.Version", {}, /* @__PURE__ */ $.basicType("int", "internal.Version"))))
	}
}

export async function createSearchAttributesForChangeVersion(changeID: string, version: __goscript_workflow.Version, existingChangeVersions: globalThis.Map<string, __goscript_workflow.Version> | null): globalThis.Promise<globalThis.Map<string, any> | null> {
	return $.makeMap<string, any>([["CadenceChangeVersion", $.interfaceValue(await getChangeVersions(changeID, version, existingChangeVersions), "[]string", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")))]])
}

export async function getChangeVersions(changeID: string, version: __goscript_workflow.Version, existingChangeVersions: globalThis.Map<string, __goscript_workflow.Version> | null): globalThis.Promise<$.Slice<string>> {
	let res: $.Slice<string> = $.arrayToSlice<string>([await getChangeVersion(changeID, version)])
	for (const [k, v] of existingChangeVersions?.entries() ?? []) {
		res = $.appendOne(res, await getChangeVersion(k, v))
	}
	return res
}

export async function getChangeVersion(changeID: string, version: __goscript_workflow.Version): globalThis.Promise<string> {
	return fmt.Sprintf("%s-%v", changeID, $.namedValueInterfaceValue<any>(version, "internal.Version", {}, /* @__PURE__ */ $.basicType("int", "internal.Version")))
}

export async function decodeValue(encodedValue: __goscript_encoded.Value | null, value: any): globalThis.Promise<any> {
	// We need to decode oldValue out of encodedValue, first we need to prepare valuePtr as the same type as value
	let valuePtr = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(reflect.TypeOf(value))!))).Interface()
	{
		let err = (__goscriptAwait = (encodedValue !== null && (encodedValue as any).__isVarRef !== true && (encodedValue as any).__goValue === undefined ? (encodedValue as Exclude<__goscript_encoded.Value, null>) : $.pointerValue<Exclude<__goscript_encoded.Value, null>>(encodedValue)).Get(valuePtr), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			$.panic((err as any))
		}
	}
	let decodedValue = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf(valuePtr))).Elem())).Interface()
	return decodedValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Encode: (receiver: any, ...args: any[]) => (m.CancelExternalWorkflowExecutionFailedCause_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (m.CancelExternalWorkflowExecutionFailedCause_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (m.CancelExternalWorkflowExecutionFailedCause_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (m.CancelExternalWorkflowExecutionFailedCause_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (m.CancelExternalWorkflowExecutionFailedCause_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (m.CancelExternalWorkflowExecutionFailedCause_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (m.CancelExternalWorkflowExecutionFailedCause_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (m.CancelExternalWorkflowExecutionFailedCause_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "shared.CancelExternalWorkflowExecutionFailedCause"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shared.CancelExternalWorkflowExecutionFailedCause")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.CancelExternalWorkflowExecutionFailedCause"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Encode: (receiver: any, ...args: any[]) => (m.SignalExternalWorkflowExecutionFailedCause_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (m.SignalExternalWorkflowExecutionFailedCause_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (m.SignalExternalWorkflowExecutionFailedCause_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (m.SignalExternalWorkflowExecutionFailedCause_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (m.SignalExternalWorkflowExecutionFailedCause_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (m.SignalExternalWorkflowExecutionFailedCause_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (m.SignalExternalWorkflowExecutionFailedCause_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (m.SignalExternalWorkflowExecutionFailedCause_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int32", "shared.SignalExternalWorkflowExecutionFailedCause"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shared.SignalExternalWorkflowExecutionFailedCause")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.SignalExternalWorkflowExecutionFailedCause"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])])
}

var __goscriptAwait: any
