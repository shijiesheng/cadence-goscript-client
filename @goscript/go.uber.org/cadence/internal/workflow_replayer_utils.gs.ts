// Generated file based on workflow_replayer_utils.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as s from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_internal_decision_state_machine from "./internal_decision_state_machine.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_replayer from "./workflow_replayer.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "./error.gs.ts"
import "./internal_decision_state_machine.gs.ts"
import "./workflow.gs.ts"
import "./workflow_replayer.gs.ts"

export async function matchReplayWithHistory(info: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, replayDecisions: $.Slice<s.Decision | $.VarRef<s.Decision> | null>, historyEvents: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>): globalThis.Promise<$.GoError> {
	let di = 0
	let hi = 0
	let hSize = $.sliceLen(historyEvents)
	let dSize = $.sliceLen(replayDecisions)
	matchLoop: for (let __goscriptSliceWindow0 = $.sliceRange(historyEvents), __goscriptSliceWindow1 = $.sliceRange(replayDecisions); (hi < hSize) || (di < dSize); ) {
		let e: s.HistoryEvent | $.VarRef<s.HistoryEvent> | null = null! as s.HistoryEvent | $.VarRef<s.HistoryEvent> | null
		if (hi < hSize) {
			e = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, hi)] as s.HistoryEvent | $.VarRef<s.HistoryEvent> | null)
			if (skipDeterministicCheckForUpsertChangeVersion(historyEvents, hi)) {
				hi = hi + (2)
				continue matchLoop
			}
			if (skipDeterministicCheckForEvent(e)) {
				hi++
				continue matchLoop
			}
		}

		let d: s.Decision | $.VarRef<s.Decision> | null = null! as s.Decision | $.VarRef<s.Decision> | null
		if (di < dSize) {
			d = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, di)] as s.Decision | $.VarRef<s.Decision> | null)
			if (skipDeterministicCheckForDecision(d)) {
				di++
				continue matchLoop
			}
		}

		if (d == null) {
			return __goscript_error.NewNonDeterminsticError("missing replay decision", info, e, null)
		}

		if (e == null) {
			return __goscript_error.NewNonDeterminsticError("extra replay decision", info, null, d)
		}

		if (!isDecisionMatchEvent(d, e, false)) {
			return __goscript_error.NewNonDeterminsticError("mismatch", info, e, d)
		}

		di++
		hi++
	}
	return null
}

export function lastPartOfName(name: string): string {
	name = strings.TrimSuffix(name, "-fm")
	let lastDotIdx = strings.LastIndex(name, ".")
	if ((lastDotIdx < 0) || (lastDotIdx == ($.stringLen(name) - 1))) {
		return name
	}
	return $.sliceStringOrBytes(name, lastDotIdx + 1, undefined)
}

export function skipDeterministicCheckForEvent(e: s.HistoryEvent | $.VarRef<s.HistoryEvent> | null): boolean {
	if ((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) == 26) {
		let markerName = s.MarkerRecordedEventAttributes.prototype.GetMarkerName.call($.pointerValue<s.HistoryEvent>(e).MarkerRecordedEventAttributes)
		if (($.stringEqual(markerName, "Version")) || ($.stringEqual(markerName, "MutableSideEffect"))) {
			return true
		}
	}
	return false
}

export function skipDeterministicCheckForUpsertChangeVersion(events: $.Slice<s.HistoryEvent | $.VarRef<s.HistoryEvent> | null>, idx: number): boolean {
	let e: s.HistoryEvent | $.VarRef<s.HistoryEvent> | null = $.arrayIndex(events!, idx)
	if (((((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) == 26) && ($.stringEqual(s.MarkerRecordedEventAttributes.prototype.GetMarkerName.call($.pointerValue<s.HistoryEvent>(e).MarkerRecordedEventAttributes), "Version"))) && (idx < ($.sliceLen(events) - 1))) && (s.HistoryEvent.prototype.GetEventType.call($.arrayIndex(events!, idx + 1)) == 41)) {
		{
			let [, ok] = $.mapGet<string, $.Slice<number>, $.Slice<number>>($.pointerValue<s.SearchAttributes>($.pointerValue<s.UpsertWorkflowSearchAttributesEventAttributes>($.pointerValue<s.HistoryEvent>($.arrayIndex(events!, idx + 1)).UpsertWorkflowSearchAttributesEventAttributes).SearchAttributes).IndexedFields, "CadenceChangeVersion", null)
			if (ok) {
				return true
			}
		}
	}
	return false
}

export function skipDeterministicCheckForDecision(d: s.Decision | $.VarRef<s.Decision> | null): boolean {
	if ((d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as s.Decision).GetDecisionType() : s.Decision.prototype.GetDecisionType.call(d)) == 8) {
		let markerName = s.RecordMarkerDecisionAttributes.prototype.GetMarkerName.call($.pointerValue<s.Decision>(d).RecordMarkerDecisionAttributes)
		if (($.stringEqual(markerName, "Version")) || ($.stringEqual(markerName, "MutableSideEffect"))) {
			return true
		}
	}
	return false
}

export function isDecisionMatchEvent(d: s.Decision | $.VarRef<s.Decision> | null, e: s.HistoryEvent | $.VarRef<s.HistoryEvent> | null, strictMode: boolean): boolean {
	const d$: s.Decision = d == null ? $.pointerTarget<s.Decision>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<s.Decision>(d)
	const e$: s.HistoryEvent = e == null ? $.pointerTarget<s.HistoryEvent>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<s.HistoryEvent>(e)
	switch ((d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as s.Decision).GetDecisionType() : s.Decision.prototype.GetDecisionType.call(d))) {
		case s.DecisionTypeScheduleActivityTask:
		{
			if ((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) != 9) {
				return false
			}
			let eventAttributes: s.ActivityTaskScheduledEventAttributes | $.VarRef<s.ActivityTaskScheduledEventAttributes> | null = (e$ as s.HistoryEvent).ActivityTaskScheduledEventAttributes
			let eventAttributes$: s.ActivityTaskScheduledEventAttributes = eventAttributes == null ? $.pointerTarget<s.ActivityTaskScheduledEventAttributes>(eventAttributes) : (eventAttributes as any).__isVarRef === true ? (eventAttributes as any).value : (eventAttributes as any).__goValue === undefined ? (eventAttributes as any) : $.pointerTarget<s.ActivityTaskScheduledEventAttributes>(eventAttributes)
			let decisionAttributes: s.ScheduleActivityTaskDecisionAttributes | $.VarRef<s.ScheduleActivityTaskDecisionAttributes> | null = (d$ as s.Decision).ScheduleActivityTaskDecisionAttributes
			let decisionAttributes$: s.ScheduleActivityTaskDecisionAttributes = decisionAttributes == null ? $.pointerTarget<s.ScheduleActivityTaskDecisionAttributes>(decisionAttributes) : (decisionAttributes as any).__isVarRef === true ? (decisionAttributes as any).value : (decisionAttributes as any).__goValue === undefined ? (decisionAttributes as any) : $.pointerTarget<s.ScheduleActivityTaskDecisionAttributes>(decisionAttributes)

			if ((((!$.stringEqual((eventAttributes !== null && (eventAttributes as any).__isVarRef !== true && (eventAttributes as any).__goValue === undefined ? ((eventAttributes as any) as s.ActivityTaskScheduledEventAttributes).GetActivityId() : s.ActivityTaskScheduledEventAttributes.prototype.GetActivityId.call(eventAttributes)), (decisionAttributes !== null && (decisionAttributes as any).__isVarRef !== true && (decisionAttributes as any).__goValue === undefined ? ((decisionAttributes as any) as s.ScheduleActivityTaskDecisionAttributes).GetActivityId() : s.ScheduleActivityTaskDecisionAttributes.prototype.GetActivityId.call(decisionAttributes)))) || (!$.stringEqual(lastPartOfName(s.ActivityType.prototype.GetName.call((eventAttributes$ as s.ActivityTaskScheduledEventAttributes).ActivityType)), lastPartOfName(s.ActivityType.prototype.GetName.call((decisionAttributes$ as s.ScheduleActivityTaskDecisionAttributes).ActivityType))))) || (strictMode && (!$.stringEqual(s.TaskList.prototype.GetName.call((eventAttributes$ as s.ActivityTaskScheduledEventAttributes).TaskList), s.TaskList.prototype.GetName.call((decisionAttributes$ as s.ScheduleActivityTaskDecisionAttributes).TaskList))))) || (strictMode && (bytes.Compare((eventAttributes$ as s.ActivityTaskScheduledEventAttributes).Input, (decisionAttributes$ as s.ScheduleActivityTaskDecisionAttributes).Input) != 0))) {
				return false
			}

			return true
			break
		}
		case s.DecisionTypeRequestCancelActivityTask:
		{
			if ((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) != 14) {
				return false
			}
			let decisionAttributes: s.RequestCancelActivityTaskDecisionAttributes | $.VarRef<s.RequestCancelActivityTaskDecisionAttributes> | null = (d$ as s.Decision).RequestCancelActivityTaskDecisionAttributes
			let eventAttributes: s.ActivityTaskCancelRequestedEventAttributes | $.VarRef<s.ActivityTaskCancelRequestedEventAttributes> | null = (e$ as s.HistoryEvent).ActivityTaskCancelRequestedEventAttributes
			if (!$.stringEqual((eventAttributes !== null && (eventAttributes as any).__isVarRef !== true && (eventAttributes as any).__goValue === undefined ? ((eventAttributes as any) as s.ActivityTaskCancelRequestedEventAttributes).GetActivityId() : s.ActivityTaskCancelRequestedEventAttributes.prototype.GetActivityId.call(eventAttributes)), (decisionAttributes !== null && (decisionAttributes as any).__isVarRef !== true && (decisionAttributes as any).__goValue === undefined ? ((decisionAttributes as any) as s.RequestCancelActivityTaskDecisionAttributes).GetActivityId() : s.RequestCancelActivityTaskDecisionAttributes.prototype.GetActivityId.call(decisionAttributes)))) {
				return false
			}

			return true
			break
		}
		case s.DecisionTypeStartTimer:
		{
			if ((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) != 17) {
				return false
			}
			let eventAttributes: s.TimerStartedEventAttributes | $.VarRef<s.TimerStartedEventAttributes> | null = (e$ as s.HistoryEvent).TimerStartedEventAttributes
			let decisionAttributes: s.StartTimerDecisionAttributes | $.VarRef<s.StartTimerDecisionAttributes> | null = (d$ as s.Decision).StartTimerDecisionAttributes

			if ((!$.stringEqual((eventAttributes !== null && (eventAttributes as any).__isVarRef !== true && (eventAttributes as any).__goValue === undefined ? ((eventAttributes as any) as s.TimerStartedEventAttributes).GetTimerId() : s.TimerStartedEventAttributes.prototype.GetTimerId.call(eventAttributes)), (decisionAttributes !== null && (decisionAttributes as any).__isVarRef !== true && (decisionAttributes as any).__goValue === undefined ? ((decisionAttributes as any) as s.StartTimerDecisionAttributes).GetTimerId() : s.StartTimerDecisionAttributes.prototype.GetTimerId.call(decisionAttributes)))) || (strictMode && ((eventAttributes !== null && (eventAttributes as any).__isVarRef !== true && (eventAttributes as any).__goValue === undefined ? ((eventAttributes as any) as s.TimerStartedEventAttributes).GetStartToFireTimeoutSeconds() : s.TimerStartedEventAttributes.prototype.GetStartToFireTimeoutSeconds.call(eventAttributes)) != (decisionAttributes !== null && (decisionAttributes as any).__isVarRef !== true && (decisionAttributes as any).__goValue === undefined ? ((decisionAttributes as any) as s.StartTimerDecisionAttributes).GetStartToFireTimeoutSeconds() : s.StartTimerDecisionAttributes.prototype.GetStartToFireTimeoutSeconds.call(decisionAttributes))))) {
				return false
			}

			return true
			break
		}
		case s.DecisionTypeCancelTimer:
		{
			if (((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) != 20) && ((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) != 19)) {
				return false
			}
			let decisionAttributes: s.CancelTimerDecisionAttributes | $.VarRef<s.CancelTimerDecisionAttributes> | null = (d$ as s.Decision).CancelTimerDecisionAttributes
			if ((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) == 20) {
				let eventAttributes: s.TimerCanceledEventAttributes | $.VarRef<s.TimerCanceledEventAttributes> | null = (e$ as s.HistoryEvent).TimerCanceledEventAttributes
				if (!$.stringEqual((eventAttributes !== null && (eventAttributes as any).__isVarRef !== true && (eventAttributes as any).__goValue === undefined ? ((eventAttributes as any) as s.TimerCanceledEventAttributes).GetTimerId() : s.TimerCanceledEventAttributes.prototype.GetTimerId.call(eventAttributes)), (decisionAttributes !== null && (decisionAttributes as any).__isVarRef !== true && (decisionAttributes as any).__goValue === undefined ? ((decisionAttributes as any) as s.CancelTimerDecisionAttributes).GetTimerId() : s.CancelTimerDecisionAttributes.prototype.GetTimerId.call(decisionAttributes)))) {
					return false
				}
			} else {
				if ((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) == 19) {
					let eventAttributes: s.CancelTimerFailedEventAttributes | $.VarRef<s.CancelTimerFailedEventAttributes> | null = (e$ as s.HistoryEvent).CancelTimerFailedEventAttributes
					if (!$.stringEqual((eventAttributes !== null && (eventAttributes as any).__isVarRef !== true && (eventAttributes as any).__goValue === undefined ? ((eventAttributes as any) as s.CancelTimerFailedEventAttributes).GetTimerId() : s.CancelTimerFailedEventAttributes.prototype.GetTimerId.call(eventAttributes)), (decisionAttributes !== null && (decisionAttributes as any).__isVarRef !== true && (decisionAttributes as any).__goValue === undefined ? ((decisionAttributes as any) as s.CancelTimerDecisionAttributes).GetTimerId() : s.CancelTimerDecisionAttributes.prototype.GetTimerId.call(decisionAttributes)))) {
						return false
					}
				}
			}

			return true
			break
		}
		case s.DecisionTypeCompleteWorkflowExecution:
		{
			if ((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) != 1) {
				return false
			}
			if (strictMode) {
				let eventAttributes: s.WorkflowExecutionCompletedEventAttributes | $.VarRef<s.WorkflowExecutionCompletedEventAttributes> | null = (e$ as s.HistoryEvent).WorkflowExecutionCompletedEventAttributes
				let decisionAttributes: s.CompleteWorkflowExecutionDecisionAttributes | $.VarRef<s.CompleteWorkflowExecutionDecisionAttributes> | null = (d$ as s.Decision).CompleteWorkflowExecutionDecisionAttributes

				if (bytes.Compare($.pointerValue<s.WorkflowExecutionCompletedEventAttributes>(eventAttributes).Result, $.pointerValue<s.CompleteWorkflowExecutionDecisionAttributes>(decisionAttributes).Result) != 0) {
					return false
				}
			}

			return true
			break
		}
		case s.DecisionTypeFailWorkflowExecution:
		{
			if ((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) != 2) {
				return false
			}
			if (strictMode) {
				let eventAttributes: s.WorkflowExecutionFailedEventAttributes | $.VarRef<s.WorkflowExecutionFailedEventAttributes> | null = (e$ as s.HistoryEvent).WorkflowExecutionFailedEventAttributes
				let decisionAttributes: s.FailWorkflowExecutionDecisionAttributes | $.VarRef<s.FailWorkflowExecutionDecisionAttributes> | null = (d$ as s.Decision).FailWorkflowExecutionDecisionAttributes

				if ((!$.stringEqual((eventAttributes !== null && (eventAttributes as any).__isVarRef !== true && (eventAttributes as any).__goValue === undefined ? ((eventAttributes as any) as s.WorkflowExecutionFailedEventAttributes).GetReason() : s.WorkflowExecutionFailedEventAttributes.prototype.GetReason.call(eventAttributes)), (decisionAttributes !== null && (decisionAttributes as any).__isVarRef !== true && (decisionAttributes as any).__goValue === undefined ? ((decisionAttributes as any) as s.FailWorkflowExecutionDecisionAttributes).GetReason() : s.FailWorkflowExecutionDecisionAttributes.prototype.GetReason.call(decisionAttributes)))) || (bytes.Compare($.pointerValue<s.WorkflowExecutionFailedEventAttributes>(eventAttributes).Details, $.pointerValue<s.FailWorkflowExecutionDecisionAttributes>(decisionAttributes).Details) != 0)) {
					return false
				}
			}

			return true
			break
		}
		case s.DecisionTypeRecordMarker:
		{
			if ((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) != 26) {
				return false
			}
			let eventAttributes: s.MarkerRecordedEventAttributes | $.VarRef<s.MarkerRecordedEventAttributes> | null = (e$ as s.HistoryEvent).MarkerRecordedEventAttributes
			let decisionAttributes: s.RecordMarkerDecisionAttributes | $.VarRef<s.RecordMarkerDecisionAttributes> | null = (d$ as s.Decision).RecordMarkerDecisionAttributes
			if (!$.stringEqual((eventAttributes !== null && (eventAttributes as any).__isVarRef !== true && (eventAttributes as any).__goValue === undefined ? ((eventAttributes as any) as s.MarkerRecordedEventAttributes).GetMarkerName() : s.MarkerRecordedEventAttributes.prototype.GetMarkerName.call(eventAttributes)), (decisionAttributes !== null && (decisionAttributes as any).__isVarRef !== true && (decisionAttributes as any).__goValue === undefined ? ((decisionAttributes as any) as s.RecordMarkerDecisionAttributes).GetMarkerName() : s.RecordMarkerDecisionAttributes.prototype.GetMarkerName.call(decisionAttributes)))) {
				return false
			}

			return true
			break
		}
		case s.DecisionTypeRequestCancelExternalWorkflowExecution:
		{
			if ((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) != 23) {
				return false
			}
			let eventAttributes: s.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes | $.VarRef<s.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes> | null = (e$ as s.HistoryEvent).RequestCancelExternalWorkflowExecutionInitiatedEventAttributes
			let decisionAttributes: s.RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<s.RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = (d$ as s.Decision).RequestCancelExternalWorkflowExecutionDecisionAttributes
			if (checkDomainsInDecisionAndEvent((eventAttributes !== null && (eventAttributes as any).__isVarRef !== true && (eventAttributes as any).__goValue === undefined ? ((eventAttributes as any) as s.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes).GetDomain() : s.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.GetDomain.call(eventAttributes)), (decisionAttributes !== null && (decisionAttributes as any).__isVarRef !== true && (decisionAttributes as any).__goValue === undefined ? ((decisionAttributes as any) as s.RequestCancelExternalWorkflowExecutionDecisionAttributes).GetDomain() : s.RequestCancelExternalWorkflowExecutionDecisionAttributes.prototype.GetDomain.call(decisionAttributes))) || (!$.stringEqual(s.WorkflowExecution.prototype.GetWorkflowId.call($.pointerValue<s.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes>(eventAttributes).WorkflowExecution), (decisionAttributes !== null && (decisionAttributes as any).__isVarRef !== true && (decisionAttributes as any).__goValue === undefined ? ((decisionAttributes as any) as s.RequestCancelExternalWorkflowExecutionDecisionAttributes).GetWorkflowId() : s.RequestCancelExternalWorkflowExecutionDecisionAttributes.prototype.GetWorkflowId.call(decisionAttributes))))) {
				return false
			}

			return true
			break
		}
		case s.DecisionTypeSignalExternalWorkflowExecution:
		{
			if ((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) != 38) {
				return false
			}
			let eventAttributes: s.SignalExternalWorkflowExecutionInitiatedEventAttributes | $.VarRef<s.SignalExternalWorkflowExecutionInitiatedEventAttributes> | null = (e$ as s.HistoryEvent).SignalExternalWorkflowExecutionInitiatedEventAttributes
			let decisionAttributes: s.SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<s.SignalExternalWorkflowExecutionDecisionAttributes> | null = (d$ as s.Decision).SignalExternalWorkflowExecutionDecisionAttributes
			if ((checkDomainsInDecisionAndEvent((eventAttributes !== null && (eventAttributes as any).__isVarRef !== true && (eventAttributes as any).__goValue === undefined ? ((eventAttributes as any) as s.SignalExternalWorkflowExecutionInitiatedEventAttributes).GetDomain() : s.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.GetDomain.call(eventAttributes)), (decisionAttributes !== null && (decisionAttributes as any).__isVarRef !== true && (decisionAttributes as any).__goValue === undefined ? ((decisionAttributes as any) as s.SignalExternalWorkflowExecutionDecisionAttributes).GetDomain() : s.SignalExternalWorkflowExecutionDecisionAttributes.prototype.GetDomain.call(decisionAttributes))) || (!$.stringEqual((eventAttributes !== null && (eventAttributes as any).__isVarRef !== true && (eventAttributes as any).__goValue === undefined ? ((eventAttributes as any) as s.SignalExternalWorkflowExecutionInitiatedEventAttributes).GetSignalName() : s.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.GetSignalName.call(eventAttributes)), (decisionAttributes !== null && (decisionAttributes as any).__isVarRef !== true && (decisionAttributes as any).__goValue === undefined ? ((decisionAttributes as any) as s.SignalExternalWorkflowExecutionDecisionAttributes).GetSignalName() : s.SignalExternalWorkflowExecutionDecisionAttributes.prototype.GetSignalName.call(decisionAttributes))))) || (!$.stringEqual(s.WorkflowExecution.prototype.GetWorkflowId.call($.pointerValue<s.SignalExternalWorkflowExecutionInitiatedEventAttributes>(eventAttributes).WorkflowExecution), s.WorkflowExecution.prototype.GetWorkflowId.call($.pointerValue<s.SignalExternalWorkflowExecutionDecisionAttributes>(decisionAttributes).Execution)))) {
				return false
			}

			return true
			break
		}
		case s.DecisionTypeCancelWorkflowExecution:
		{
			if ((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) != 22) {
				return false
			}
			if (strictMode) {
				let eventAttributes: s.WorkflowExecutionCanceledEventAttributes | $.VarRef<s.WorkflowExecutionCanceledEventAttributes> | null = (e$ as s.HistoryEvent).WorkflowExecutionCanceledEventAttributes
				let decisionAttributes: s.CancelWorkflowExecutionDecisionAttributes | $.VarRef<s.CancelWorkflowExecutionDecisionAttributes> | null = (d$ as s.Decision).CancelWorkflowExecutionDecisionAttributes
				if (bytes.Compare($.pointerValue<s.WorkflowExecutionCanceledEventAttributes>(eventAttributes).Details, $.pointerValue<s.CancelWorkflowExecutionDecisionAttributes>(decisionAttributes).Details) != 0) {
					return false
				}
			}
			return true
			break
		}
		case s.DecisionTypeContinueAsNewWorkflowExecution:
		{
			if ((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) != 29) {
				return false
			}

			return true
			break
		}
		case s.DecisionTypeStartChildWorkflowExecution:
		{
			if ((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) != 30) {
				return false
			}
			let eventAttributes: s.StartChildWorkflowExecutionInitiatedEventAttributes | $.VarRef<s.StartChildWorkflowExecutionInitiatedEventAttributes> | null = (e$ as s.HistoryEvent).StartChildWorkflowExecutionInitiatedEventAttributes
			let eventAttributes$: s.StartChildWorkflowExecutionInitiatedEventAttributes = eventAttributes == null ? $.pointerTarget<s.StartChildWorkflowExecutionInitiatedEventAttributes>(eventAttributes) : (eventAttributes as any).__isVarRef === true ? (eventAttributes as any).value : (eventAttributes as any).__goValue === undefined ? (eventAttributes as any) : $.pointerTarget<s.StartChildWorkflowExecutionInitiatedEventAttributes>(eventAttributes)
			let decisionAttributes: s.StartChildWorkflowExecutionDecisionAttributes | $.VarRef<s.StartChildWorkflowExecutionDecisionAttributes> | null = (d$ as s.Decision).StartChildWorkflowExecutionDecisionAttributes
			let decisionAttributes$: s.StartChildWorkflowExecutionDecisionAttributes = decisionAttributes == null ? $.pointerTarget<s.StartChildWorkflowExecutionDecisionAttributes>(decisionAttributes) : (decisionAttributes as any).__isVarRef === true ? (decisionAttributes as any).value : (decisionAttributes as any).__goValue === undefined ? (decisionAttributes as any) : $.pointerTarget<s.StartChildWorkflowExecutionDecisionAttributes>(decisionAttributes)
			if (((!$.stringEqual(lastPartOfName(s.WorkflowType.prototype.GetName.call((eventAttributes$ as s.StartChildWorkflowExecutionInitiatedEventAttributes).WorkflowType)), lastPartOfName(s.WorkflowType.prototype.GetName.call((decisionAttributes$ as s.StartChildWorkflowExecutionDecisionAttributes).WorkflowType)))) || (strictMode && checkDomainsInDecisionAndEvent((eventAttributes !== null && (eventAttributes as any).__isVarRef !== true && (eventAttributes as any).__goValue === undefined ? ((eventAttributes as any) as s.StartChildWorkflowExecutionInitiatedEventAttributes).GetDomain() : s.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.GetDomain.call(eventAttributes)), (decisionAttributes !== null && (decisionAttributes as any).__isVarRef !== true && (decisionAttributes as any).__goValue === undefined ? ((decisionAttributes as any) as s.StartChildWorkflowExecutionDecisionAttributes).GetDomain() : s.StartChildWorkflowExecutionDecisionAttributes.prototype.GetDomain.call(decisionAttributes))))) || (strictMode && (!$.stringEqual(s.TaskList.prototype.GetName.call((eventAttributes$ as s.StartChildWorkflowExecutionInitiatedEventAttributes).TaskList), s.TaskList.prototype.GetName.call((decisionAttributes$ as s.StartChildWorkflowExecutionDecisionAttributes).TaskList))))) {
				return false
			}

			return true
			break
		}
		case s.DecisionTypeUpsertWorkflowSearchAttributes:
		{
			if ((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e)) != 41) {
				return false
			}
			let eventAttributes: s.UpsertWorkflowSearchAttributesEventAttributes | $.VarRef<s.UpsertWorkflowSearchAttributesEventAttributes> | null = (e$ as s.HistoryEvent).UpsertWorkflowSearchAttributesEventAttributes
			let decisionAttributes: s.UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<s.UpsertWorkflowSearchAttributesDecisionAttributes> | null = (d$ as s.Decision).UpsertWorkflowSearchAttributesDecisionAttributes
			if (strictMode && !isSearchAttributesMatched($.pointerValue<s.UpsertWorkflowSearchAttributesEventAttributes>(eventAttributes).SearchAttributes, $.pointerValue<s.UpsertWorkflowSearchAttributesDecisionAttributes>(decisionAttributes).SearchAttributes)) {
				return false
			}
			return true
			break
		}
	}

	return false
}

export function isSearchAttributesMatched(attrFromEvent: s.SearchAttributes | $.VarRef<s.SearchAttributes> | null, attrFromDecision: s.SearchAttributes | $.VarRef<s.SearchAttributes> | null): boolean {
	if ((attrFromEvent != null) && (attrFromDecision != null)) {
		return reflect.DeepEqual($.interfaceValue($.pointerValue<s.SearchAttributes>(attrFromEvent).IndexedFields, "map[string][]byte", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))), $.interfaceValue($.pointerValue<s.SearchAttributes>(attrFromDecision).IndexedFields, "map[string][]byte", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
	}
	return (attrFromEvent == null) && (attrFromDecision == null)
}

export function checkDomainsInDecisionAndEvent(eventDomainName: string, decisionDomainName: string): boolean {
	if (($.stringEqual(decisionDomainName, "")) || __goscript_workflow_replayer.IsReplayDomain(decisionDomainName)) {
		return false
	}
	return !$.stringEqual(eventDomainName, decisionDomainName)
}
