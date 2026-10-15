// Generated file based on history.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as apiv1 from "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"

import * as __goscript__enum from "./enum.gs.ts"

import * as __goscript_helpers from "./helpers.gs.ts"

import * as __goscript_types from "./types.gs.ts"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"
import "./enum.gs.ts"
import "./helpers.gs.ts"
import "./types.gs.ts"

export function History(t: shared.History | $.VarRef<shared.History> | null): apiv1.History | $.VarRef<apiv1.History> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField0 = HistoryEventArray($.pointerValue<shared.History>(t).Events); return new apiv1.History({Events: __goscriptLiteralField0}) })()
}

export function HistoryEventArray(t: $.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>): $.Slice<apiv1.HistoryEvent | $.VarRef<apiv1.HistoryEvent> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<apiv1.HistoryEvent | $.VarRef<apiv1.HistoryEvent> | null> = $.makeSlice<apiv1.HistoryEvent | $.VarRef<apiv1.HistoryEvent> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget0 = t, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow0.length; i++) {
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = HistoryEvent(((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null))
	}
	return v
}

export function HistoryEvent(e: shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null): apiv1.HistoryEvent | $.VarRef<apiv1.HistoryEvent> | null {
	const e$: shared.HistoryEvent = e == null ? $.pointerTarget<shared.HistoryEvent>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<shared.HistoryEvent>(e)
	if (e == null) {
		return null
	}
	let event = $.varRef((() => { const __goscriptLiteralField1 = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as shared.HistoryEvent).GetEventId() : shared.HistoryEvent.prototype.GetEventId.call(e)); const __goscriptLiteralField2 = __goscript_helpers.unixNanoToTime((e$ as shared.HistoryEvent).Timestamp); const __goscriptLiteralField3 = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as shared.HistoryEvent).GetVersion() : shared.HistoryEvent.prototype.GetVersion.call(e)); const __goscriptLiteralField4 = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as shared.HistoryEvent).GetTaskId() : shared.HistoryEvent.prototype.GetTaskId.call(e)); return $.markAsStructValue(new apiv1.HistoryEvent({EventId: __goscriptLiteralField1, EventTime: __goscriptLiteralField2, Version: __goscriptLiteralField3, TaskId: __goscriptLiteralField4})) })())
	switch ($.pointerValue<shared.EventType>((e$ as shared.HistoryEvent).EventType)) {
		case shared.EventTypeWorkflowExecutionStarted:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField5 = WorkflowExecutionStartedEventAttributes((e$ as shared.HistoryEvent).WorkflowExecutionStartedEventAttributes); return new apiv1.HistoryEvent_WorkflowExecutionStartedEventAttributes({WorkflowExecutionStartedEventAttributes: __goscriptLiteralField5}) })(), "*apiv1.HistoryEvent_WorkflowExecutionStartedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionStartedEventAttributes"))
			break
		}
		case shared.EventTypeWorkflowExecutionCompleted:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField6 = WorkflowExecutionCompletedEventAttributes((e$ as shared.HistoryEvent).WorkflowExecutionCompletedEventAttributes); return new apiv1.HistoryEvent_WorkflowExecutionCompletedEventAttributes({WorkflowExecutionCompletedEventAttributes: __goscriptLiteralField6}) })(), "*apiv1.HistoryEvent_WorkflowExecutionCompletedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionCompletedEventAttributes"))
			break
		}
		case shared.EventTypeWorkflowExecutionFailed:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField7 = WorkflowExecutionFailedEventAttributes((e$ as shared.HistoryEvent).WorkflowExecutionFailedEventAttributes); return new apiv1.HistoryEvent_WorkflowExecutionFailedEventAttributes({WorkflowExecutionFailedEventAttributes: __goscriptLiteralField7}) })(), "*apiv1.HistoryEvent_WorkflowExecutionFailedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionFailedEventAttributes"))
			break
		}
		case shared.EventTypeWorkflowExecutionTimedOut:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField8 = WorkflowExecutionTimedOutEventAttributes((e$ as shared.HistoryEvent).WorkflowExecutionTimedOutEventAttributes); return new apiv1.HistoryEvent_WorkflowExecutionTimedOutEventAttributes({WorkflowExecutionTimedOutEventAttributes: __goscriptLiteralField8}) })(), "*apiv1.HistoryEvent_WorkflowExecutionTimedOutEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionTimedOutEventAttributes"))
			break
		}
		case shared.EventTypeDecisionTaskScheduled:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField9 = DecisionTaskScheduledEventAttributes((e$ as shared.HistoryEvent).DecisionTaskScheduledEventAttributes); return new apiv1.HistoryEvent_DecisionTaskScheduledEventAttributes({DecisionTaskScheduledEventAttributes: __goscriptLiteralField9}) })(), "*apiv1.HistoryEvent_DecisionTaskScheduledEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_DecisionTaskScheduledEventAttributes"))
			break
		}
		case shared.EventTypeDecisionTaskStarted:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField10 = DecisionTaskStartedEventAttributes((e$ as shared.HistoryEvent).DecisionTaskStartedEventAttributes); return new apiv1.HistoryEvent_DecisionTaskStartedEventAttributes({DecisionTaskStartedEventAttributes: __goscriptLiteralField10}) })(), "*apiv1.HistoryEvent_DecisionTaskStartedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_DecisionTaskStartedEventAttributes"))
			break
		}
		case shared.EventTypeDecisionTaskCompleted:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField11 = DecisionTaskCompletedEventAttributes((e$ as shared.HistoryEvent).DecisionTaskCompletedEventAttributes); return new apiv1.HistoryEvent_DecisionTaskCompletedEventAttributes({DecisionTaskCompletedEventAttributes: __goscriptLiteralField11}) })(), "*apiv1.HistoryEvent_DecisionTaskCompletedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_DecisionTaskCompletedEventAttributes"))
			break
		}
		case shared.EventTypeDecisionTaskTimedOut:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField12 = DecisionTaskTimedOutEventAttributes((e$ as shared.HistoryEvent).DecisionTaskTimedOutEventAttributes); return new apiv1.HistoryEvent_DecisionTaskTimedOutEventAttributes({DecisionTaskTimedOutEventAttributes: __goscriptLiteralField12}) })(), "*apiv1.HistoryEvent_DecisionTaskTimedOutEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_DecisionTaskTimedOutEventAttributes"))
			break
		}
		case shared.EventTypeDecisionTaskFailed:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField13 = DecisionTaskFailedEventAttributes((e$ as shared.HistoryEvent).DecisionTaskFailedEventAttributes); return new apiv1.HistoryEvent_DecisionTaskFailedEventAttributes({DecisionTaskFailedEventAttributes: __goscriptLiteralField13}) })(), "*apiv1.HistoryEvent_DecisionTaskFailedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_DecisionTaskFailedEventAttributes"))
			break
		}
		case shared.EventTypeActivityTaskScheduled:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField14 = ActivityTaskScheduledEventAttributes((e$ as shared.HistoryEvent).ActivityTaskScheduledEventAttributes); return new apiv1.HistoryEvent_ActivityTaskScheduledEventAttributes({ActivityTaskScheduledEventAttributes: __goscriptLiteralField14}) })(), "*apiv1.HistoryEvent_ActivityTaskScheduledEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskScheduledEventAttributes"))
			break
		}
		case shared.EventTypeActivityTaskStarted:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField15 = ActivityTaskStartedEventAttributes((e$ as shared.HistoryEvent).ActivityTaskStartedEventAttributes); return new apiv1.HistoryEvent_ActivityTaskStartedEventAttributes({ActivityTaskStartedEventAttributes: __goscriptLiteralField15}) })(), "*apiv1.HistoryEvent_ActivityTaskStartedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskStartedEventAttributes"))
			break
		}
		case shared.EventTypeActivityTaskCompleted:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField16 = ActivityTaskCompletedEventAttributes((e$ as shared.HistoryEvent).ActivityTaskCompletedEventAttributes); return new apiv1.HistoryEvent_ActivityTaskCompletedEventAttributes({ActivityTaskCompletedEventAttributes: __goscriptLiteralField16}) })(), "*apiv1.HistoryEvent_ActivityTaskCompletedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskCompletedEventAttributes"))
			break
		}
		case shared.EventTypeActivityTaskFailed:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField17 = ActivityTaskFailedEventAttributes((e$ as shared.HistoryEvent).ActivityTaskFailedEventAttributes); return new apiv1.HistoryEvent_ActivityTaskFailedEventAttributes({ActivityTaskFailedEventAttributes: __goscriptLiteralField17}) })(), "*apiv1.HistoryEvent_ActivityTaskFailedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskFailedEventAttributes"))
			break
		}
		case shared.EventTypeActivityTaskTimedOut:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField18 = ActivityTaskTimedOutEventAttributes((e$ as shared.HistoryEvent).ActivityTaskTimedOutEventAttributes); return new apiv1.HistoryEvent_ActivityTaskTimedOutEventAttributes({ActivityTaskTimedOutEventAttributes: __goscriptLiteralField18}) })(), "*apiv1.HistoryEvent_ActivityTaskTimedOutEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskTimedOutEventAttributes"))
			break
		}
		case shared.EventTypeTimerStarted:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField19 = TimerStartedEventAttributes((e$ as shared.HistoryEvent).TimerStartedEventAttributes); return new apiv1.HistoryEvent_TimerStartedEventAttributes({TimerStartedEventAttributes: __goscriptLiteralField19}) })(), "*apiv1.HistoryEvent_TimerStartedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_TimerStartedEventAttributes"))
			break
		}
		case shared.EventTypeTimerFired:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField20 = TimerFiredEventAttributes((e$ as shared.HistoryEvent).TimerFiredEventAttributes); return new apiv1.HistoryEvent_TimerFiredEventAttributes({TimerFiredEventAttributes: __goscriptLiteralField20}) })(), "*apiv1.HistoryEvent_TimerFiredEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_TimerFiredEventAttributes"))
			break
		}
		case shared.EventTypeActivityTaskCancelRequested:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField21 = ActivityTaskCancelRequestedEventAttributes((e$ as shared.HistoryEvent).ActivityTaskCancelRequestedEventAttributes); return new apiv1.HistoryEvent_ActivityTaskCancelRequestedEventAttributes({ActivityTaskCancelRequestedEventAttributes: __goscriptLiteralField21}) })(), "*apiv1.HistoryEvent_ActivityTaskCancelRequestedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskCancelRequestedEventAttributes"))
			break
		}
		case shared.EventTypeRequestCancelActivityTaskFailed:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField22 = RequestCancelActivityTaskFailedEventAttributes((e$ as shared.HistoryEvent).RequestCancelActivityTaskFailedEventAttributes); return new apiv1.HistoryEvent_RequestCancelActivityTaskFailedEventAttributes({RequestCancelActivityTaskFailedEventAttributes: __goscriptLiteralField22}) })(), "*apiv1.HistoryEvent_RequestCancelActivityTaskFailedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_RequestCancelActivityTaskFailedEventAttributes"))
			break
		}
		case shared.EventTypeActivityTaskCanceled:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField23 = ActivityTaskCanceledEventAttributes((e$ as shared.HistoryEvent).ActivityTaskCanceledEventAttributes); return new apiv1.HistoryEvent_ActivityTaskCanceledEventAttributes({ActivityTaskCanceledEventAttributes: __goscriptLiteralField23}) })(), "*apiv1.HistoryEvent_ActivityTaskCanceledEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskCanceledEventAttributes"))
			break
		}
		case shared.EventTypeTimerCanceled:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField24 = TimerCanceledEventAttributes((e$ as shared.HistoryEvent).TimerCanceledEventAttributes); return new apiv1.HistoryEvent_TimerCanceledEventAttributes({TimerCanceledEventAttributes: __goscriptLiteralField24}) })(), "*apiv1.HistoryEvent_TimerCanceledEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_TimerCanceledEventAttributes"))
			break
		}
		case shared.EventTypeCancelTimerFailed:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField25 = CancelTimerFailedEventAttributes((e$ as shared.HistoryEvent).CancelTimerFailedEventAttributes); return new apiv1.HistoryEvent_CancelTimerFailedEventAttributes({CancelTimerFailedEventAttributes: __goscriptLiteralField25}) })(), "*apiv1.HistoryEvent_CancelTimerFailedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_CancelTimerFailedEventAttributes"))
			break
		}
		case shared.EventTypeMarkerRecorded:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField26 = MarkerRecordedEventAttributes((e$ as shared.HistoryEvent).MarkerRecordedEventAttributes); return new apiv1.HistoryEvent_MarkerRecordedEventAttributes({MarkerRecordedEventAttributes: __goscriptLiteralField26}) })(), "*apiv1.HistoryEvent_MarkerRecordedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_MarkerRecordedEventAttributes"))
			break
		}
		case shared.EventTypeWorkflowExecutionSignaled:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField27 = WorkflowExecutionSignaledEventAttributes((e$ as shared.HistoryEvent).WorkflowExecutionSignaledEventAttributes); return new apiv1.HistoryEvent_WorkflowExecutionSignaledEventAttributes({WorkflowExecutionSignaledEventAttributes: __goscriptLiteralField27}) })(), "*apiv1.HistoryEvent_WorkflowExecutionSignaledEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionSignaledEventAttributes"))
			break
		}
		case shared.EventTypeWorkflowExecutionTerminated:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField28 = WorkflowExecutionTerminatedEventAttributes((e$ as shared.HistoryEvent).WorkflowExecutionTerminatedEventAttributes); return new apiv1.HistoryEvent_WorkflowExecutionTerminatedEventAttributes({WorkflowExecutionTerminatedEventAttributes: __goscriptLiteralField28}) })(), "*apiv1.HistoryEvent_WorkflowExecutionTerminatedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionTerminatedEventAttributes"))
			break
		}
		case shared.EventTypeWorkflowExecutionCancelRequested:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField29 = WorkflowExecutionCancelRequestedEventAttributes((e$ as shared.HistoryEvent).WorkflowExecutionCancelRequestedEventAttributes); return new apiv1.HistoryEvent_WorkflowExecutionCancelRequestedEventAttributes({WorkflowExecutionCancelRequestedEventAttributes: __goscriptLiteralField29}) })(), "*apiv1.HistoryEvent_WorkflowExecutionCancelRequestedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionCancelRequestedEventAttributes"))
			break
		}
		case shared.EventTypeWorkflowExecutionCanceled:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField30 = WorkflowExecutionCanceledEventAttributes((e$ as shared.HistoryEvent).WorkflowExecutionCanceledEventAttributes); return new apiv1.HistoryEvent_WorkflowExecutionCanceledEventAttributes({WorkflowExecutionCanceledEventAttributes: __goscriptLiteralField30}) })(), "*apiv1.HistoryEvent_WorkflowExecutionCanceledEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionCanceledEventAttributes"))
			break
		}
		case shared.EventTypeRequestCancelExternalWorkflowExecutionInitiated:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField31 = RequestCancelExternalWorkflowExecutionInitiatedEventAttributes((e$ as shared.HistoryEvent).RequestCancelExternalWorkflowExecutionInitiatedEventAttributes); return new apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes({RequestCancelExternalWorkflowExecutionInitiatedEventAttributes: __goscriptLiteralField31}) })(), "*apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes"))
			break
		}
		case shared.EventTypeRequestCancelExternalWorkflowExecutionFailed:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField32 = RequestCancelExternalWorkflowExecutionFailedEventAttributes((e$ as shared.HistoryEvent).RequestCancelExternalWorkflowExecutionFailedEventAttributes); return new apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionFailedEventAttributes({RequestCancelExternalWorkflowExecutionFailedEventAttributes: __goscriptLiteralField32}) })(), "*apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionFailedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionFailedEventAttributes"))
			break
		}
		case shared.EventTypeExternalWorkflowExecutionCancelRequested:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField33 = ExternalWorkflowExecutionCancelRequestedEventAttributes((e$ as shared.HistoryEvent).ExternalWorkflowExecutionCancelRequestedEventAttributes); return new apiv1.HistoryEvent_ExternalWorkflowExecutionCancelRequestedEventAttributes({ExternalWorkflowExecutionCancelRequestedEventAttributes: __goscriptLiteralField33}) })(), "*apiv1.HistoryEvent_ExternalWorkflowExecutionCancelRequestedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ExternalWorkflowExecutionCancelRequestedEventAttributes"))
			break
		}
		case shared.EventTypeWorkflowExecutionContinuedAsNew:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField34 = WorkflowExecutionContinuedAsNewEventAttributes((e$ as shared.HistoryEvent).WorkflowExecutionContinuedAsNewEventAttributes); return new apiv1.HistoryEvent_WorkflowExecutionContinuedAsNewEventAttributes({WorkflowExecutionContinuedAsNewEventAttributes: __goscriptLiteralField34}) })(), "*apiv1.HistoryEvent_WorkflowExecutionContinuedAsNewEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionContinuedAsNewEventAttributes"))
			break
		}
		case shared.EventTypeStartChildWorkflowExecutionInitiated:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField35 = StartChildWorkflowExecutionInitiatedEventAttributes((e$ as shared.HistoryEvent).StartChildWorkflowExecutionInitiatedEventAttributes); return new apiv1.HistoryEvent_StartChildWorkflowExecutionInitiatedEventAttributes({StartChildWorkflowExecutionInitiatedEventAttributes: __goscriptLiteralField35}) })(), "*apiv1.HistoryEvent_StartChildWorkflowExecutionInitiatedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_StartChildWorkflowExecutionInitiatedEventAttributes"))
			break
		}
		case shared.EventTypeStartChildWorkflowExecutionFailed:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField36 = StartChildWorkflowExecutionFailedEventAttributes((e$ as shared.HistoryEvent).StartChildWorkflowExecutionFailedEventAttributes); return new apiv1.HistoryEvent_StartChildWorkflowExecutionFailedEventAttributes({StartChildWorkflowExecutionFailedEventAttributes: __goscriptLiteralField36}) })(), "*apiv1.HistoryEvent_StartChildWorkflowExecutionFailedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_StartChildWorkflowExecutionFailedEventAttributes"))
			break
		}
		case shared.EventTypeChildWorkflowExecutionStarted:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField37 = ChildWorkflowExecutionStartedEventAttributes((e$ as shared.HistoryEvent).ChildWorkflowExecutionStartedEventAttributes); return new apiv1.HistoryEvent_ChildWorkflowExecutionStartedEventAttributes({ChildWorkflowExecutionStartedEventAttributes: __goscriptLiteralField37}) })(), "*apiv1.HistoryEvent_ChildWorkflowExecutionStartedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionStartedEventAttributes"))
			break
		}
		case shared.EventTypeChildWorkflowExecutionCompleted:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField38 = ChildWorkflowExecutionCompletedEventAttributes((e$ as shared.HistoryEvent).ChildWorkflowExecutionCompletedEventAttributes); return new apiv1.HistoryEvent_ChildWorkflowExecutionCompletedEventAttributes({ChildWorkflowExecutionCompletedEventAttributes: __goscriptLiteralField38}) })(), "*apiv1.HistoryEvent_ChildWorkflowExecutionCompletedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionCompletedEventAttributes"))
			break
		}
		case shared.EventTypeChildWorkflowExecutionFailed:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField39 = ChildWorkflowExecutionFailedEventAttributes((e$ as shared.HistoryEvent).ChildWorkflowExecutionFailedEventAttributes); return new apiv1.HistoryEvent_ChildWorkflowExecutionFailedEventAttributes({ChildWorkflowExecutionFailedEventAttributes: __goscriptLiteralField39}) })(), "*apiv1.HistoryEvent_ChildWorkflowExecutionFailedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionFailedEventAttributes"))
			break
		}
		case shared.EventTypeChildWorkflowExecutionCanceled:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField40 = ChildWorkflowExecutionCanceledEventAttributes((e$ as shared.HistoryEvent).ChildWorkflowExecutionCanceledEventAttributes); return new apiv1.HistoryEvent_ChildWorkflowExecutionCanceledEventAttributes({ChildWorkflowExecutionCanceledEventAttributes: __goscriptLiteralField40}) })(), "*apiv1.HistoryEvent_ChildWorkflowExecutionCanceledEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionCanceledEventAttributes"))
			break
		}
		case shared.EventTypeChildWorkflowExecutionTimedOut:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField41 = ChildWorkflowExecutionTimedOutEventAttributes((e$ as shared.HistoryEvent).ChildWorkflowExecutionTimedOutEventAttributes); return new apiv1.HistoryEvent_ChildWorkflowExecutionTimedOutEventAttributes({ChildWorkflowExecutionTimedOutEventAttributes: __goscriptLiteralField41}) })(), "*apiv1.HistoryEvent_ChildWorkflowExecutionTimedOutEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionTimedOutEventAttributes"))
			break
		}
		case shared.EventTypeChildWorkflowExecutionTerminated:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField42 = ChildWorkflowExecutionTerminatedEventAttributes((e$ as shared.HistoryEvent).ChildWorkflowExecutionTerminatedEventAttributes); return new apiv1.HistoryEvent_ChildWorkflowExecutionTerminatedEventAttributes({ChildWorkflowExecutionTerminatedEventAttributes: __goscriptLiteralField42}) })(), "*apiv1.HistoryEvent_ChildWorkflowExecutionTerminatedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionTerminatedEventAttributes"))
			break
		}
		case shared.EventTypeSignalExternalWorkflowExecutionInitiated:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField43 = SignalExternalWorkflowExecutionInitiatedEventAttributes((e$ as shared.HistoryEvent).SignalExternalWorkflowExecutionInitiatedEventAttributes); return new apiv1.HistoryEvent_SignalExternalWorkflowExecutionInitiatedEventAttributes({SignalExternalWorkflowExecutionInitiatedEventAttributes: __goscriptLiteralField43}) })(), "*apiv1.HistoryEvent_SignalExternalWorkflowExecutionInitiatedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_SignalExternalWorkflowExecutionInitiatedEventAttributes"))
			break
		}
		case shared.EventTypeSignalExternalWorkflowExecutionFailed:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField44 = SignalExternalWorkflowExecutionFailedEventAttributes((e$ as shared.HistoryEvent).SignalExternalWorkflowExecutionFailedEventAttributes); return new apiv1.HistoryEvent_SignalExternalWorkflowExecutionFailedEventAttributes({SignalExternalWorkflowExecutionFailedEventAttributes: __goscriptLiteralField44}) })(), "*apiv1.HistoryEvent_SignalExternalWorkflowExecutionFailedEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_SignalExternalWorkflowExecutionFailedEventAttributes"))
			break
		}
		case shared.EventTypeExternalWorkflowExecutionSignaled:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField45 = ExternalWorkflowExecutionSignaledEventAttributes((e$ as shared.HistoryEvent).ExternalWorkflowExecutionSignaledEventAttributes); return new apiv1.HistoryEvent_ExternalWorkflowExecutionSignaledEventAttributes({ExternalWorkflowExecutionSignaledEventAttributes: __goscriptLiteralField45}) })(), "*apiv1.HistoryEvent_ExternalWorkflowExecutionSignaledEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ExternalWorkflowExecutionSignaledEventAttributes"))
			break
		}
		case shared.EventTypeUpsertWorkflowSearchAttributes:
		{
			event.value.Attributes = $.interfaceValue<apiv1.isHistoryEvent_Attributes | null>((() => { const __goscriptLiteralField46 = UpsertWorkflowSearchAttributesEventAttributes((e$ as shared.HistoryEvent).UpsertWorkflowSearchAttributesEventAttributes); return new apiv1.HistoryEvent_UpsertWorkflowSearchAttributesEventAttributes({UpsertWorkflowSearchAttributesEventAttributes: __goscriptLiteralField46}) })(), "*apiv1.HistoryEvent_UpsertWorkflowSearchAttributesEventAttributes", /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_UpsertWorkflowSearchAttributesEventAttributes"))
			break
		}
		default:
		{
			$.panic("unknown event type")
			break
		}
	}
	return event
}

export function ActivityTaskCancelRequestedEventAttributes(t: shared.ActivityTaskCancelRequestedEventAttributes | $.VarRef<shared.ActivityTaskCancelRequestedEventAttributes> | null): apiv1.ActivityTaskCancelRequestedEventAttributes | $.VarRef<apiv1.ActivityTaskCancelRequestedEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField47 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskCancelRequestedEventAttributes).GetActivityId() : shared.ActivityTaskCancelRequestedEventAttributes.prototype.GetActivityId.call(t)); const __goscriptLiteralField48 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskCancelRequestedEventAttributes).GetDecisionTaskCompletedEventId() : shared.ActivityTaskCancelRequestedEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); return new apiv1.ActivityTaskCancelRequestedEventAttributes({ActivityId: __goscriptLiteralField47, DecisionTaskCompletedEventId: __goscriptLiteralField48}) })()
}

export function ActivityTaskCanceledEventAttributes(t: shared.ActivityTaskCanceledEventAttributes | $.VarRef<shared.ActivityTaskCanceledEventAttributes> | null): apiv1.ActivityTaskCanceledEventAttributes | $.VarRef<apiv1.ActivityTaskCanceledEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField49 = __goscript_types.Payload($.pointerValue<shared.ActivityTaskCanceledEventAttributes>(t).Details); const __goscriptLiteralField50 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskCanceledEventAttributes).GetLatestCancelRequestedEventId() : shared.ActivityTaskCanceledEventAttributes.prototype.GetLatestCancelRequestedEventId.call(t)); const __goscriptLiteralField51 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskCanceledEventAttributes).GetScheduledEventId() : shared.ActivityTaskCanceledEventAttributes.prototype.GetScheduledEventId.call(t)); const __goscriptLiteralField52 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskCanceledEventAttributes).GetStartedEventId() : shared.ActivityTaskCanceledEventAttributes.prototype.GetStartedEventId.call(t)); const __goscriptLiteralField53 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskCanceledEventAttributes).GetIdentity() : shared.ActivityTaskCanceledEventAttributes.prototype.GetIdentity.call(t)); return new apiv1.ActivityTaskCanceledEventAttributes({Details: __goscriptLiteralField49, LatestCancelRequestedEventId: __goscriptLiteralField50, ScheduledEventId: __goscriptLiteralField51, StartedEventId: __goscriptLiteralField52, Identity: __goscriptLiteralField53}) })()
}

export function ActivityTaskCompletedEventAttributes(t: shared.ActivityTaskCompletedEventAttributes | $.VarRef<shared.ActivityTaskCompletedEventAttributes> | null): apiv1.ActivityTaskCompletedEventAttributes | $.VarRef<apiv1.ActivityTaskCompletedEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField54 = __goscript_types.Payload($.pointerValue<shared.ActivityTaskCompletedEventAttributes>(t).Result); const __goscriptLiteralField55 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskCompletedEventAttributes).GetScheduledEventId() : shared.ActivityTaskCompletedEventAttributes.prototype.GetScheduledEventId.call(t)); const __goscriptLiteralField56 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskCompletedEventAttributes).GetStartedEventId() : shared.ActivityTaskCompletedEventAttributes.prototype.GetStartedEventId.call(t)); const __goscriptLiteralField57 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskCompletedEventAttributes).GetIdentity() : shared.ActivityTaskCompletedEventAttributes.prototype.GetIdentity.call(t)); return new apiv1.ActivityTaskCompletedEventAttributes({Result: __goscriptLiteralField54, ScheduledEventId: __goscriptLiteralField55, StartedEventId: __goscriptLiteralField56, Identity: __goscriptLiteralField57}) })()
}

export function ActivityTaskFailedEventAttributes(t: shared.ActivityTaskFailedEventAttributes | $.VarRef<shared.ActivityTaskFailedEventAttributes> | null): apiv1.ActivityTaskFailedEventAttributes | $.VarRef<apiv1.ActivityTaskFailedEventAttributes> | null {
	const t$: shared.ActivityTaskFailedEventAttributes = t == null ? $.pointerTarget<shared.ActivityTaskFailedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ActivityTaskFailedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField58 = __goscript_types.FailureWithOptions((t$ as shared.ActivityTaskFailedEventAttributes).Reason, (t$ as shared.ActivityTaskFailedEventAttributes).Details, (t$ as shared.ActivityTaskFailedEventAttributes).FailureOptions); const __goscriptLiteralField59 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskFailedEventAttributes).GetScheduledEventId() : shared.ActivityTaskFailedEventAttributes.prototype.GetScheduledEventId.call(t)); const __goscriptLiteralField60 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskFailedEventAttributes).GetStartedEventId() : shared.ActivityTaskFailedEventAttributes.prototype.GetStartedEventId.call(t)); const __goscriptLiteralField61 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskFailedEventAttributes).GetIdentity() : shared.ActivityTaskFailedEventAttributes.prototype.GetIdentity.call(t)); return new apiv1.ActivityTaskFailedEventAttributes({Failure: __goscriptLiteralField58, ScheduledEventId: __goscriptLiteralField59, StartedEventId: __goscriptLiteralField60, Identity: __goscriptLiteralField61}) })()
}

export function ActivityTaskScheduledEventAttributes(t: shared.ActivityTaskScheduledEventAttributes | $.VarRef<shared.ActivityTaskScheduledEventAttributes> | null): apiv1.ActivityTaskScheduledEventAttributes | $.VarRef<apiv1.ActivityTaskScheduledEventAttributes> | null {
	const t$: shared.ActivityTaskScheduledEventAttributes = t == null ? $.pointerTarget<shared.ActivityTaskScheduledEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ActivityTaskScheduledEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField62 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskScheduledEventAttributes).GetActivityId() : shared.ActivityTaskScheduledEventAttributes.prototype.GetActivityId.call(t)); const __goscriptLiteralField63 = __goscript_types.ActivityType((t$ as shared.ActivityTaskScheduledEventAttributes).ActivityType); const __goscriptLiteralField64 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskScheduledEventAttributes).GetDomain() : shared.ActivityTaskScheduledEventAttributes.prototype.GetDomain.call(t)); const __goscriptLiteralField65 = __goscript_types.TaskList((t$ as shared.ActivityTaskScheduledEventAttributes).TaskList); const __goscriptLiteralField66 = __goscript_types.Payload((t$ as shared.ActivityTaskScheduledEventAttributes).Input); const __goscriptLiteralField67 = __goscript_helpers.secondsToDuration((t$ as shared.ActivityTaskScheduledEventAttributes).ScheduleToCloseTimeoutSeconds); const __goscriptLiteralField68 = __goscript_helpers.secondsToDuration((t$ as shared.ActivityTaskScheduledEventAttributes).ScheduleToStartTimeoutSeconds); const __goscriptLiteralField69 = __goscript_helpers.secondsToDuration((t$ as shared.ActivityTaskScheduledEventAttributes).StartToCloseTimeoutSeconds); const __goscriptLiteralField70 = __goscript_helpers.secondsToDuration((t$ as shared.ActivityTaskScheduledEventAttributes).HeartbeatTimeoutSeconds); const __goscriptLiteralField71 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskScheduledEventAttributes).GetDecisionTaskCompletedEventId() : shared.ActivityTaskScheduledEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); const __goscriptLiteralField72 = __goscript_types.RetryPolicy((t$ as shared.ActivityTaskScheduledEventAttributes).RetryPolicy); const __goscriptLiteralField73 = __goscript_types.Header((t$ as shared.ActivityTaskScheduledEventAttributes).Header); return new apiv1.ActivityTaskScheduledEventAttributes({ActivityId: __goscriptLiteralField62, ActivityType: __goscriptLiteralField63, Domain: __goscriptLiteralField64, TaskList: __goscriptLiteralField65, Input: __goscriptLiteralField66, ScheduleToCloseTimeout: __goscriptLiteralField67, ScheduleToStartTimeout: __goscriptLiteralField68, StartToCloseTimeout: __goscriptLiteralField69, HeartbeatTimeout: __goscriptLiteralField70, DecisionTaskCompletedEventId: __goscriptLiteralField71, RetryPolicy: __goscriptLiteralField72, Header: __goscriptLiteralField73}) })()
}

export function ActivityTaskStartedEventAttributes(t: shared.ActivityTaskStartedEventAttributes | $.VarRef<shared.ActivityTaskStartedEventAttributes> | null): apiv1.ActivityTaskStartedEventAttributes | $.VarRef<apiv1.ActivityTaskStartedEventAttributes> | null {
	const t$: shared.ActivityTaskStartedEventAttributes = t == null ? $.pointerTarget<shared.ActivityTaskStartedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ActivityTaskStartedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField74 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskStartedEventAttributes).GetScheduledEventId() : shared.ActivityTaskStartedEventAttributes.prototype.GetScheduledEventId.call(t)); const __goscriptLiteralField75 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskStartedEventAttributes).GetIdentity() : shared.ActivityTaskStartedEventAttributes.prototype.GetIdentity.call(t)); const __goscriptLiteralField76 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskStartedEventAttributes).GetRequestId() : shared.ActivityTaskStartedEventAttributes.prototype.GetRequestId.call(t)); const __goscriptLiteralField77 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskStartedEventAttributes).GetAttempt() : shared.ActivityTaskStartedEventAttributes.prototype.GetAttempt.call(t)); const __goscriptLiteralField78 = __goscript_types.FailureWithOptions((t$ as shared.ActivityTaskStartedEventAttributes).LastFailureReason, (t$ as shared.ActivityTaskStartedEventAttributes).LastFailureDetails, (t$ as shared.ActivityTaskStartedEventAttributes).LastFailureOptions); return new apiv1.ActivityTaskStartedEventAttributes({ScheduledEventId: __goscriptLiteralField74, Identity: __goscriptLiteralField75, RequestId: __goscriptLiteralField76, Attempt: __goscriptLiteralField77, LastFailure: __goscriptLiteralField78}) })()
}

export function ActivityTaskTimedOutEventAttributes(t: shared.ActivityTaskTimedOutEventAttributes | $.VarRef<shared.ActivityTaskTimedOutEventAttributes> | null): apiv1.ActivityTaskTimedOutEventAttributes | $.VarRef<apiv1.ActivityTaskTimedOutEventAttributes> | null {
	const t$: shared.ActivityTaskTimedOutEventAttributes = t == null ? $.pointerTarget<shared.ActivityTaskTimedOutEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ActivityTaskTimedOutEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField79 = __goscript_types.Payload((t$ as shared.ActivityTaskTimedOutEventAttributes).Details); const __goscriptLiteralField80 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskTimedOutEventAttributes).GetScheduledEventId() : shared.ActivityTaskTimedOutEventAttributes.prototype.GetScheduledEventId.call(t)); const __goscriptLiteralField81 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityTaskTimedOutEventAttributes).GetStartedEventId() : shared.ActivityTaskTimedOutEventAttributes.prototype.GetStartedEventId.call(t)); const __goscriptLiteralField82 = __goscript__enum.TimeoutType((t$ as shared.ActivityTaskTimedOutEventAttributes).TimeoutType); const __goscriptLiteralField83 = __goscript_types.FailureWithOptions((t$ as shared.ActivityTaskTimedOutEventAttributes).LastFailureReason, (t$ as shared.ActivityTaskTimedOutEventAttributes).LastFailureDetails, (t$ as shared.ActivityTaskTimedOutEventAttributes).LastFailureOptions); return new apiv1.ActivityTaskTimedOutEventAttributes({Details: __goscriptLiteralField79, ScheduledEventId: __goscriptLiteralField80, StartedEventId: __goscriptLiteralField81, TimeoutType: __goscriptLiteralField82, LastFailure: __goscriptLiteralField83}) })()
}

export function CancelTimerFailedEventAttributes(t: shared.CancelTimerFailedEventAttributes | $.VarRef<shared.CancelTimerFailedEventAttributes> | null): apiv1.CancelTimerFailedEventAttributes | $.VarRef<apiv1.CancelTimerFailedEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField84 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.CancelTimerFailedEventAttributes).GetTimerId() : shared.CancelTimerFailedEventAttributes.prototype.GetTimerId.call(t)); const __goscriptLiteralField85 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.CancelTimerFailedEventAttributes).GetCause() : shared.CancelTimerFailedEventAttributes.prototype.GetCause.call(t)); const __goscriptLiteralField86 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.CancelTimerFailedEventAttributes).GetDecisionTaskCompletedEventId() : shared.CancelTimerFailedEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); const __goscriptLiteralField87 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.CancelTimerFailedEventAttributes).GetIdentity() : shared.CancelTimerFailedEventAttributes.prototype.GetIdentity.call(t)); return new apiv1.CancelTimerFailedEventAttributes({TimerId: __goscriptLiteralField84, Cause: __goscriptLiteralField85, DecisionTaskCompletedEventId: __goscriptLiteralField86, Identity: __goscriptLiteralField87}) })()
}

export function ChildWorkflowExecutionCanceledEventAttributes(t: shared.ChildWorkflowExecutionCanceledEventAttributes | $.VarRef<shared.ChildWorkflowExecutionCanceledEventAttributes> | null): apiv1.ChildWorkflowExecutionCanceledEventAttributes | $.VarRef<apiv1.ChildWorkflowExecutionCanceledEventAttributes> | null {
	const t$: shared.ChildWorkflowExecutionCanceledEventAttributes = t == null ? $.pointerTarget<shared.ChildWorkflowExecutionCanceledEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ChildWorkflowExecutionCanceledEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField88 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ChildWorkflowExecutionCanceledEventAttributes).GetDomain() : shared.ChildWorkflowExecutionCanceledEventAttributes.prototype.GetDomain.call(t)); const __goscriptLiteralField89 = __goscript_types.WorkflowExecution((t$ as shared.ChildWorkflowExecutionCanceledEventAttributes).WorkflowExecution); const __goscriptLiteralField90 = __goscript_types.WorkflowType((t$ as shared.ChildWorkflowExecutionCanceledEventAttributes).WorkflowType); const __goscriptLiteralField91 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ChildWorkflowExecutionCanceledEventAttributes).GetInitiatedEventId() : shared.ChildWorkflowExecutionCanceledEventAttributes.prototype.GetInitiatedEventId.call(t)); const __goscriptLiteralField92 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ChildWorkflowExecutionCanceledEventAttributes).GetStartedEventId() : shared.ChildWorkflowExecutionCanceledEventAttributes.prototype.GetStartedEventId.call(t)); const __goscriptLiteralField93 = __goscript_types.Payload((t$ as shared.ChildWorkflowExecutionCanceledEventAttributes).Details); return new apiv1.ChildWorkflowExecutionCanceledEventAttributes({Domain: __goscriptLiteralField88, WorkflowExecution: __goscriptLiteralField89, WorkflowType: __goscriptLiteralField90, InitiatedEventId: __goscriptLiteralField91, StartedEventId: __goscriptLiteralField92, Details: __goscriptLiteralField93}) })()
}

export function ChildWorkflowExecutionCompletedEventAttributes(t: shared.ChildWorkflowExecutionCompletedEventAttributes | $.VarRef<shared.ChildWorkflowExecutionCompletedEventAttributes> | null): apiv1.ChildWorkflowExecutionCompletedEventAttributes | $.VarRef<apiv1.ChildWorkflowExecutionCompletedEventAttributes> | null {
	const t$: shared.ChildWorkflowExecutionCompletedEventAttributes = t == null ? $.pointerTarget<shared.ChildWorkflowExecutionCompletedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ChildWorkflowExecutionCompletedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField94 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ChildWorkflowExecutionCompletedEventAttributes).GetDomain() : shared.ChildWorkflowExecutionCompletedEventAttributes.prototype.GetDomain.call(t)); const __goscriptLiteralField95 = __goscript_types.WorkflowExecution((t$ as shared.ChildWorkflowExecutionCompletedEventAttributes).WorkflowExecution); const __goscriptLiteralField96 = __goscript_types.WorkflowType((t$ as shared.ChildWorkflowExecutionCompletedEventAttributes).WorkflowType); const __goscriptLiteralField97 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ChildWorkflowExecutionCompletedEventAttributes).GetInitiatedEventId() : shared.ChildWorkflowExecutionCompletedEventAttributes.prototype.GetInitiatedEventId.call(t)); const __goscriptLiteralField98 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ChildWorkflowExecutionCompletedEventAttributes).GetStartedEventId() : shared.ChildWorkflowExecutionCompletedEventAttributes.prototype.GetStartedEventId.call(t)); const __goscriptLiteralField99 = __goscript_types.Payload((t$ as shared.ChildWorkflowExecutionCompletedEventAttributes).Result); return new apiv1.ChildWorkflowExecutionCompletedEventAttributes({Domain: __goscriptLiteralField94, WorkflowExecution: __goscriptLiteralField95, WorkflowType: __goscriptLiteralField96, InitiatedEventId: __goscriptLiteralField97, StartedEventId: __goscriptLiteralField98, Result: __goscriptLiteralField99}) })()
}

export function ChildWorkflowExecutionFailedEventAttributes(t: shared.ChildWorkflowExecutionFailedEventAttributes | $.VarRef<shared.ChildWorkflowExecutionFailedEventAttributes> | null): apiv1.ChildWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.ChildWorkflowExecutionFailedEventAttributes> | null {
	const t$: shared.ChildWorkflowExecutionFailedEventAttributes = t == null ? $.pointerTarget<shared.ChildWorkflowExecutionFailedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ChildWorkflowExecutionFailedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField100 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ChildWorkflowExecutionFailedEventAttributes).GetDomain() : shared.ChildWorkflowExecutionFailedEventAttributes.prototype.GetDomain.call(t)); const __goscriptLiteralField101 = __goscript_types.WorkflowExecution((t$ as shared.ChildWorkflowExecutionFailedEventAttributes).WorkflowExecution); const __goscriptLiteralField102 = __goscript_types.WorkflowType((t$ as shared.ChildWorkflowExecutionFailedEventAttributes).WorkflowType); const __goscriptLiteralField103 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ChildWorkflowExecutionFailedEventAttributes).GetInitiatedEventId() : shared.ChildWorkflowExecutionFailedEventAttributes.prototype.GetInitiatedEventId.call(t)); const __goscriptLiteralField104 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ChildWorkflowExecutionFailedEventAttributes).GetStartedEventId() : shared.ChildWorkflowExecutionFailedEventAttributes.prototype.GetStartedEventId.call(t)); const __goscriptLiteralField105 = __goscript_types.Failure((t$ as shared.ChildWorkflowExecutionFailedEventAttributes).Reason, (t$ as shared.ChildWorkflowExecutionFailedEventAttributes).Details); return new apiv1.ChildWorkflowExecutionFailedEventAttributes({Domain: __goscriptLiteralField100, WorkflowExecution: __goscriptLiteralField101, WorkflowType: __goscriptLiteralField102, InitiatedEventId: __goscriptLiteralField103, StartedEventId: __goscriptLiteralField104, Failure: __goscriptLiteralField105}) })()
}

export function ChildWorkflowExecutionStartedEventAttributes(t: shared.ChildWorkflowExecutionStartedEventAttributes | $.VarRef<shared.ChildWorkflowExecutionStartedEventAttributes> | null): apiv1.ChildWorkflowExecutionStartedEventAttributes | $.VarRef<apiv1.ChildWorkflowExecutionStartedEventAttributes> | null {
	const t$: shared.ChildWorkflowExecutionStartedEventAttributes = t == null ? $.pointerTarget<shared.ChildWorkflowExecutionStartedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ChildWorkflowExecutionStartedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField106 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ChildWorkflowExecutionStartedEventAttributes).GetDomain() : shared.ChildWorkflowExecutionStartedEventAttributes.prototype.GetDomain.call(t)); const __goscriptLiteralField107 = __goscript_types.WorkflowExecution((t$ as shared.ChildWorkflowExecutionStartedEventAttributes).WorkflowExecution); const __goscriptLiteralField108 = __goscript_types.WorkflowType((t$ as shared.ChildWorkflowExecutionStartedEventAttributes).WorkflowType); const __goscriptLiteralField109 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ChildWorkflowExecutionStartedEventAttributes).GetInitiatedEventId() : shared.ChildWorkflowExecutionStartedEventAttributes.prototype.GetInitiatedEventId.call(t)); const __goscriptLiteralField110 = __goscript_types.Header((t$ as shared.ChildWorkflowExecutionStartedEventAttributes).Header); return new apiv1.ChildWorkflowExecutionStartedEventAttributes({Domain: __goscriptLiteralField106, WorkflowExecution: __goscriptLiteralField107, WorkflowType: __goscriptLiteralField108, InitiatedEventId: __goscriptLiteralField109, Header: __goscriptLiteralField110}) })()
}

export function ChildWorkflowExecutionTerminatedEventAttributes(t: shared.ChildWorkflowExecutionTerminatedEventAttributes | $.VarRef<shared.ChildWorkflowExecutionTerminatedEventAttributes> | null): apiv1.ChildWorkflowExecutionTerminatedEventAttributes | $.VarRef<apiv1.ChildWorkflowExecutionTerminatedEventAttributes> | null {
	const t$: shared.ChildWorkflowExecutionTerminatedEventAttributes = t == null ? $.pointerTarget<shared.ChildWorkflowExecutionTerminatedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ChildWorkflowExecutionTerminatedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField111 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ChildWorkflowExecutionTerminatedEventAttributes).GetDomain() : shared.ChildWorkflowExecutionTerminatedEventAttributes.prototype.GetDomain.call(t)); const __goscriptLiteralField112 = __goscript_types.WorkflowExecution((t$ as shared.ChildWorkflowExecutionTerminatedEventAttributes).WorkflowExecution); const __goscriptLiteralField113 = __goscript_types.WorkflowType((t$ as shared.ChildWorkflowExecutionTerminatedEventAttributes).WorkflowType); const __goscriptLiteralField114 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ChildWorkflowExecutionTerminatedEventAttributes).GetInitiatedEventId() : shared.ChildWorkflowExecutionTerminatedEventAttributes.prototype.GetInitiatedEventId.call(t)); const __goscriptLiteralField115 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ChildWorkflowExecutionTerminatedEventAttributes).GetStartedEventId() : shared.ChildWorkflowExecutionTerminatedEventAttributes.prototype.GetStartedEventId.call(t)); return new apiv1.ChildWorkflowExecutionTerminatedEventAttributes({Domain: __goscriptLiteralField111, WorkflowExecution: __goscriptLiteralField112, WorkflowType: __goscriptLiteralField113, InitiatedEventId: __goscriptLiteralField114, StartedEventId: __goscriptLiteralField115}) })()
}

export function ChildWorkflowExecutionTimedOutEventAttributes(t: shared.ChildWorkflowExecutionTimedOutEventAttributes | $.VarRef<shared.ChildWorkflowExecutionTimedOutEventAttributes> | null): apiv1.ChildWorkflowExecutionTimedOutEventAttributes | $.VarRef<apiv1.ChildWorkflowExecutionTimedOutEventAttributes> | null {
	const t$: shared.ChildWorkflowExecutionTimedOutEventAttributes = t == null ? $.pointerTarget<shared.ChildWorkflowExecutionTimedOutEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ChildWorkflowExecutionTimedOutEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField116 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ChildWorkflowExecutionTimedOutEventAttributes).GetDomain() : shared.ChildWorkflowExecutionTimedOutEventAttributes.prototype.GetDomain.call(t)); const __goscriptLiteralField117 = __goscript_types.WorkflowExecution((t$ as shared.ChildWorkflowExecutionTimedOutEventAttributes).WorkflowExecution); const __goscriptLiteralField118 = __goscript_types.WorkflowType((t$ as shared.ChildWorkflowExecutionTimedOutEventAttributes).WorkflowType); const __goscriptLiteralField119 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ChildWorkflowExecutionTimedOutEventAttributes).GetInitiatedEventId() : shared.ChildWorkflowExecutionTimedOutEventAttributes.prototype.GetInitiatedEventId.call(t)); const __goscriptLiteralField120 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ChildWorkflowExecutionTimedOutEventAttributes).GetStartedEventId() : shared.ChildWorkflowExecutionTimedOutEventAttributes.prototype.GetStartedEventId.call(t)); const __goscriptLiteralField121 = __goscript__enum.TimeoutType((t$ as shared.ChildWorkflowExecutionTimedOutEventAttributes).TimeoutType); return new apiv1.ChildWorkflowExecutionTimedOutEventAttributes({Domain: __goscriptLiteralField116, WorkflowExecution: __goscriptLiteralField117, WorkflowType: __goscriptLiteralField118, InitiatedEventId: __goscriptLiteralField119, StartedEventId: __goscriptLiteralField120, TimeoutType: __goscriptLiteralField121}) })()
}

export function DecisionTaskFailedEventAttributes(t: shared.DecisionTaskFailedEventAttributes | $.VarRef<shared.DecisionTaskFailedEventAttributes> | null): apiv1.DecisionTaskFailedEventAttributes | $.VarRef<apiv1.DecisionTaskFailedEventAttributes> | null {
	const t$: shared.DecisionTaskFailedEventAttributes = t == null ? $.pointerTarget<shared.DecisionTaskFailedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.DecisionTaskFailedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField122 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskFailedEventAttributes).GetScheduledEventId() : shared.DecisionTaskFailedEventAttributes.prototype.GetScheduledEventId.call(t)); const __goscriptLiteralField123 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskFailedEventAttributes).GetStartedEventId() : shared.DecisionTaskFailedEventAttributes.prototype.GetStartedEventId.call(t)); const __goscriptLiteralField124 = __goscript__enum.DecisionTaskFailedCause((t$ as shared.DecisionTaskFailedEventAttributes).Cause); const __goscriptLiteralField125 = __goscript_types.Failure((t$ as shared.DecisionTaskFailedEventAttributes).Reason, (t$ as shared.DecisionTaskFailedEventAttributes).Details); const __goscriptLiteralField126 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskFailedEventAttributes).GetIdentity() : shared.DecisionTaskFailedEventAttributes.prototype.GetIdentity.call(t)); const __goscriptLiteralField127 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskFailedEventAttributes).GetBaseRunId() : shared.DecisionTaskFailedEventAttributes.prototype.GetBaseRunId.call(t)); const __goscriptLiteralField128 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskFailedEventAttributes).GetNewRunId() : shared.DecisionTaskFailedEventAttributes.prototype.GetNewRunId.call(t)); const __goscriptLiteralField129 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskFailedEventAttributes).GetForkEventVersion() : shared.DecisionTaskFailedEventAttributes.prototype.GetForkEventVersion.call(t)); const __goscriptLiteralField130 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskFailedEventAttributes).GetBinaryChecksum() : shared.DecisionTaskFailedEventAttributes.prototype.GetBinaryChecksum.call(t)); return new apiv1.DecisionTaskFailedEventAttributes({ScheduledEventId: __goscriptLiteralField122, StartedEventId: __goscriptLiteralField123, Cause: __goscriptLiteralField124, Failure: __goscriptLiteralField125, Identity: __goscriptLiteralField126, BaseRunId: __goscriptLiteralField127, NewRunId: __goscriptLiteralField128, ForkEventVersion: __goscriptLiteralField129, BinaryChecksum: __goscriptLiteralField130}) })()
}

export function DecisionTaskScheduledEventAttributes(t: shared.DecisionTaskScheduledEventAttributes | $.VarRef<shared.DecisionTaskScheduledEventAttributes> | null): apiv1.DecisionTaskScheduledEventAttributes | $.VarRef<apiv1.DecisionTaskScheduledEventAttributes> | null {
	const t$: shared.DecisionTaskScheduledEventAttributes = t == null ? $.pointerTarget<shared.DecisionTaskScheduledEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.DecisionTaskScheduledEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField131 = __goscript_types.TaskList((t$ as shared.DecisionTaskScheduledEventAttributes).TaskList); const __goscriptLiteralField132 = __goscript_helpers.secondsToDuration((t$ as shared.DecisionTaskScheduledEventAttributes).StartToCloseTimeoutSeconds); const __goscriptLiteralField133 = $.int((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskScheduledEventAttributes).GetAttempt() : shared.DecisionTaskScheduledEventAttributes.prototype.GetAttempt.call(t)), 32); return new apiv1.DecisionTaskScheduledEventAttributes({TaskList: __goscriptLiteralField131, StartToCloseTimeout: __goscriptLiteralField132, Attempt: __goscriptLiteralField133}) })()
}

export function DecisionTaskStartedEventAttributes(t: shared.DecisionTaskStartedEventAttributes | $.VarRef<shared.DecisionTaskStartedEventAttributes> | null): apiv1.DecisionTaskStartedEventAttributes | $.VarRef<apiv1.DecisionTaskStartedEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField134 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskStartedEventAttributes).GetScheduledEventId() : shared.DecisionTaskStartedEventAttributes.prototype.GetScheduledEventId.call(t)); const __goscriptLiteralField135 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskStartedEventAttributes).GetIdentity() : shared.DecisionTaskStartedEventAttributes.prototype.GetIdentity.call(t)); const __goscriptLiteralField136 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskStartedEventAttributes).GetRequestId() : shared.DecisionTaskStartedEventAttributes.prototype.GetRequestId.call(t)); return new apiv1.DecisionTaskStartedEventAttributes({ScheduledEventId: __goscriptLiteralField134, Identity: __goscriptLiteralField135, RequestId: __goscriptLiteralField136}) })()
}

export function DecisionTaskCompletedEventAttributes(t: shared.DecisionTaskCompletedEventAttributes | $.VarRef<shared.DecisionTaskCompletedEventAttributes> | null): apiv1.DecisionTaskCompletedEventAttributes | $.VarRef<apiv1.DecisionTaskCompletedEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField137 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskCompletedEventAttributes).GetScheduledEventId() : shared.DecisionTaskCompletedEventAttributes.prototype.GetScheduledEventId.call(t)); const __goscriptLiteralField138 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskCompletedEventAttributes).GetStartedEventId() : shared.DecisionTaskCompletedEventAttributes.prototype.GetStartedEventId.call(t)); const __goscriptLiteralField139 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskCompletedEventAttributes).GetIdentity() : shared.DecisionTaskCompletedEventAttributes.prototype.GetIdentity.call(t)); const __goscriptLiteralField140 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskCompletedEventAttributes).GetBinaryChecksum() : shared.DecisionTaskCompletedEventAttributes.prototype.GetBinaryChecksum.call(t)); return new apiv1.DecisionTaskCompletedEventAttributes({ScheduledEventId: __goscriptLiteralField137, StartedEventId: __goscriptLiteralField138, Identity: __goscriptLiteralField139, BinaryChecksum: __goscriptLiteralField140, ExecutionContext: $.pointerValue<shared.DecisionTaskCompletedEventAttributes>(t).ExecutionContext}) })()
}

export function DecisionTaskTimedOutEventAttributes(t: shared.DecisionTaskTimedOutEventAttributes | $.VarRef<shared.DecisionTaskTimedOutEventAttributes> | null): apiv1.DecisionTaskTimedOutEventAttributes | $.VarRef<apiv1.DecisionTaskTimedOutEventAttributes> | null {
	const t$: shared.DecisionTaskTimedOutEventAttributes = t == null ? $.pointerTarget<shared.DecisionTaskTimedOutEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.DecisionTaskTimedOutEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField141 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskTimedOutEventAttributes).GetScheduledEventId() : shared.DecisionTaskTimedOutEventAttributes.prototype.GetScheduledEventId.call(t)); const __goscriptLiteralField142 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskTimedOutEventAttributes).GetStartedEventId() : shared.DecisionTaskTimedOutEventAttributes.prototype.GetStartedEventId.call(t)); const __goscriptLiteralField143 = __goscript__enum.TimeoutType((t$ as shared.DecisionTaskTimedOutEventAttributes).TimeoutType); const __goscriptLiteralField144 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskTimedOutEventAttributes).GetBaseRunId() : shared.DecisionTaskTimedOutEventAttributes.prototype.GetBaseRunId.call(t)); const __goscriptLiteralField145 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskTimedOutEventAttributes).GetNewRunId() : shared.DecisionTaskTimedOutEventAttributes.prototype.GetNewRunId.call(t)); const __goscriptLiteralField146 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskTimedOutEventAttributes).GetForkEventVersion() : shared.DecisionTaskTimedOutEventAttributes.prototype.GetForkEventVersion.call(t)); const __goscriptLiteralField147 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DecisionTaskTimedOutEventAttributes).GetReason() : shared.DecisionTaskTimedOutEventAttributes.prototype.GetReason.call(t)); const __goscriptLiteralField148 = __goscript__enum.DecisionTaskTimedOutCause((t$ as shared.DecisionTaskTimedOutEventAttributes).Cause); return new apiv1.DecisionTaskTimedOutEventAttributes({ScheduledEventId: __goscriptLiteralField141, StartedEventId: __goscriptLiteralField142, TimeoutType: __goscriptLiteralField143, BaseRunId: __goscriptLiteralField144, NewRunId: __goscriptLiteralField145, ForkEventVersion: __goscriptLiteralField146, Reason: __goscriptLiteralField147, Cause: __goscriptLiteralField148}) })()
}

export function ExternalWorkflowExecutionCancelRequestedEventAttributes(t: shared.ExternalWorkflowExecutionCancelRequestedEventAttributes | $.VarRef<shared.ExternalWorkflowExecutionCancelRequestedEventAttributes> | null): apiv1.ExternalWorkflowExecutionCancelRequestedEventAttributes | $.VarRef<apiv1.ExternalWorkflowExecutionCancelRequestedEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField149 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ExternalWorkflowExecutionCancelRequestedEventAttributes).GetInitiatedEventId() : shared.ExternalWorkflowExecutionCancelRequestedEventAttributes.prototype.GetInitiatedEventId.call(t)); const __goscriptLiteralField150 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ExternalWorkflowExecutionCancelRequestedEventAttributes).GetDomain() : shared.ExternalWorkflowExecutionCancelRequestedEventAttributes.prototype.GetDomain.call(t)); const __goscriptLiteralField151 = __goscript_types.WorkflowExecution($.pointerValue<shared.ExternalWorkflowExecutionCancelRequestedEventAttributes>(t).WorkflowExecution); return new apiv1.ExternalWorkflowExecutionCancelRequestedEventAttributes({InitiatedEventId: __goscriptLiteralField149, Domain: __goscriptLiteralField150, WorkflowExecution: __goscriptLiteralField151}) })()
}

export function ExternalWorkflowExecutionSignaledEventAttributes(t: shared.ExternalWorkflowExecutionSignaledEventAttributes | $.VarRef<shared.ExternalWorkflowExecutionSignaledEventAttributes> | null): apiv1.ExternalWorkflowExecutionSignaledEventAttributes | $.VarRef<apiv1.ExternalWorkflowExecutionSignaledEventAttributes> | null {
	const t$: shared.ExternalWorkflowExecutionSignaledEventAttributes = t == null ? $.pointerTarget<shared.ExternalWorkflowExecutionSignaledEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ExternalWorkflowExecutionSignaledEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField152 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ExternalWorkflowExecutionSignaledEventAttributes).GetInitiatedEventId() : shared.ExternalWorkflowExecutionSignaledEventAttributes.prototype.GetInitiatedEventId.call(t)); const __goscriptLiteralField153 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ExternalWorkflowExecutionSignaledEventAttributes).GetDomain() : shared.ExternalWorkflowExecutionSignaledEventAttributes.prototype.GetDomain.call(t)); const __goscriptLiteralField154 = __goscript_types.WorkflowExecution((t$ as shared.ExternalWorkflowExecutionSignaledEventAttributes).WorkflowExecution); return new apiv1.ExternalWorkflowExecutionSignaledEventAttributes({InitiatedEventId: __goscriptLiteralField152, Domain: __goscriptLiteralField153, WorkflowExecution: __goscriptLiteralField154, Control: (t$ as shared.ExternalWorkflowExecutionSignaledEventAttributes).Control}) })()
}

export function MarkerRecordedEventAttributes(t: shared.MarkerRecordedEventAttributes | $.VarRef<shared.MarkerRecordedEventAttributes> | null): apiv1.MarkerRecordedEventAttributes | $.VarRef<apiv1.MarkerRecordedEventAttributes> | null {
	const t$: shared.MarkerRecordedEventAttributes = t == null ? $.pointerTarget<shared.MarkerRecordedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.MarkerRecordedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField155 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.MarkerRecordedEventAttributes).GetMarkerName() : shared.MarkerRecordedEventAttributes.prototype.GetMarkerName.call(t)); const __goscriptLiteralField156 = __goscript_types.Payload((t$ as shared.MarkerRecordedEventAttributes).Details); const __goscriptLiteralField157 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.MarkerRecordedEventAttributes).GetDecisionTaskCompletedEventId() : shared.MarkerRecordedEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); const __goscriptLiteralField158 = __goscript_types.Header((t$ as shared.MarkerRecordedEventAttributes).Header); return new apiv1.MarkerRecordedEventAttributes({MarkerName: __goscriptLiteralField155, Details: __goscriptLiteralField156, DecisionTaskCompletedEventId: __goscriptLiteralField157, Header: __goscriptLiteralField158}) })()
}

export function RequestCancelActivityTaskFailedEventAttributes(t: shared.RequestCancelActivityTaskFailedEventAttributes | $.VarRef<shared.RequestCancelActivityTaskFailedEventAttributes> | null): apiv1.RequestCancelActivityTaskFailedEventAttributes | $.VarRef<apiv1.RequestCancelActivityTaskFailedEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField159 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RequestCancelActivityTaskFailedEventAttributes).GetActivityId() : shared.RequestCancelActivityTaskFailedEventAttributes.prototype.GetActivityId.call(t)); const __goscriptLiteralField160 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RequestCancelActivityTaskFailedEventAttributes).GetCause() : shared.RequestCancelActivityTaskFailedEventAttributes.prototype.GetCause.call(t)); const __goscriptLiteralField161 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RequestCancelActivityTaskFailedEventAttributes).GetDecisionTaskCompletedEventId() : shared.RequestCancelActivityTaskFailedEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); return new apiv1.RequestCancelActivityTaskFailedEventAttributes({ActivityId: __goscriptLiteralField159, Cause: __goscriptLiteralField160, DecisionTaskCompletedEventId: __goscriptLiteralField161}) })()
}

export function RequestCancelExternalWorkflowExecutionFailedEventAttributes(t: shared.RequestCancelExternalWorkflowExecutionFailedEventAttributes | $.VarRef<shared.RequestCancelExternalWorkflowExecutionFailedEventAttributes> | null): apiv1.RequestCancelExternalWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.RequestCancelExternalWorkflowExecutionFailedEventAttributes> | null {
	const t$: shared.RequestCancelExternalWorkflowExecutionFailedEventAttributes = t == null ? $.pointerTarget<shared.RequestCancelExternalWorkflowExecutionFailedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.RequestCancelExternalWorkflowExecutionFailedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField162 = __goscript__enum.CancelExternalWorkflowExecutionFailedCause((t$ as shared.RequestCancelExternalWorkflowExecutionFailedEventAttributes).Cause); const __goscriptLiteralField163 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RequestCancelExternalWorkflowExecutionFailedEventAttributes).GetDecisionTaskCompletedEventId() : shared.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); const __goscriptLiteralField164 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RequestCancelExternalWorkflowExecutionFailedEventAttributes).GetDomain() : shared.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.GetDomain.call(t)); const __goscriptLiteralField165 = __goscript_types.WorkflowExecution((t$ as shared.RequestCancelExternalWorkflowExecutionFailedEventAttributes).WorkflowExecution); const __goscriptLiteralField166 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RequestCancelExternalWorkflowExecutionFailedEventAttributes).GetInitiatedEventId() : shared.RequestCancelExternalWorkflowExecutionFailedEventAttributes.prototype.GetInitiatedEventId.call(t)); return new apiv1.RequestCancelExternalWorkflowExecutionFailedEventAttributes({Cause: __goscriptLiteralField162, DecisionTaskCompletedEventId: __goscriptLiteralField163, Domain: __goscriptLiteralField164, WorkflowExecution: __goscriptLiteralField165, InitiatedEventId: __goscriptLiteralField166, Control: (t$ as shared.RequestCancelExternalWorkflowExecutionFailedEventAttributes).Control}) })()
}

export function RequestCancelExternalWorkflowExecutionInitiatedEventAttributes(t: shared.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes | $.VarRef<shared.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes> | null): apiv1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes | $.VarRef<apiv1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes> | null {
	const t$: shared.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = t == null ? $.pointerTarget<shared.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField167 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes).GetDecisionTaskCompletedEventId() : shared.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); const __goscriptLiteralField168 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes).GetDomain() : shared.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.GetDomain.call(t)); const __goscriptLiteralField169 = __goscript_types.WorkflowExecution((t$ as shared.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes).WorkflowExecution); const __goscriptLiteralField170 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes).GetChildWorkflowOnly() : shared.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes.prototype.GetChildWorkflowOnly.call(t)); return new apiv1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes({DecisionTaskCompletedEventId: __goscriptLiteralField167, Domain: __goscriptLiteralField168, WorkflowExecution: __goscriptLiteralField169, Control: (t$ as shared.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes).Control, ChildWorkflowOnly: __goscriptLiteralField170}) })()
}

export function SignalExternalWorkflowExecutionFailedEventAttributes(t: shared.SignalExternalWorkflowExecutionFailedEventAttributes | $.VarRef<shared.SignalExternalWorkflowExecutionFailedEventAttributes> | null): apiv1.SignalExternalWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.SignalExternalWorkflowExecutionFailedEventAttributes> | null {
	const t$: shared.SignalExternalWorkflowExecutionFailedEventAttributes = t == null ? $.pointerTarget<shared.SignalExternalWorkflowExecutionFailedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.SignalExternalWorkflowExecutionFailedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField171 = __goscript__enum.SignalExternalWorkflowExecutionFailedCause((t$ as shared.SignalExternalWorkflowExecutionFailedEventAttributes).Cause); const __goscriptLiteralField172 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalExternalWorkflowExecutionFailedEventAttributes).GetDecisionTaskCompletedEventId() : shared.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); const __goscriptLiteralField173 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalExternalWorkflowExecutionFailedEventAttributes).GetDomain() : shared.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.GetDomain.call(t)); const __goscriptLiteralField174 = __goscript_types.WorkflowExecution((t$ as shared.SignalExternalWorkflowExecutionFailedEventAttributes).WorkflowExecution); const __goscriptLiteralField175 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalExternalWorkflowExecutionFailedEventAttributes).GetInitiatedEventId() : shared.SignalExternalWorkflowExecutionFailedEventAttributes.prototype.GetInitiatedEventId.call(t)); return new apiv1.SignalExternalWorkflowExecutionFailedEventAttributes({Cause: __goscriptLiteralField171, DecisionTaskCompletedEventId: __goscriptLiteralField172, Domain: __goscriptLiteralField173, WorkflowExecution: __goscriptLiteralField174, InitiatedEventId: __goscriptLiteralField175, Control: (t$ as shared.SignalExternalWorkflowExecutionFailedEventAttributes).Control}) })()
}

export function SignalExternalWorkflowExecutionInitiatedEventAttributes(t: shared.SignalExternalWorkflowExecutionInitiatedEventAttributes | $.VarRef<shared.SignalExternalWorkflowExecutionInitiatedEventAttributes> | null): apiv1.SignalExternalWorkflowExecutionInitiatedEventAttributes | $.VarRef<apiv1.SignalExternalWorkflowExecutionInitiatedEventAttributes> | null {
	const t$: shared.SignalExternalWorkflowExecutionInitiatedEventAttributes = t == null ? $.pointerTarget<shared.SignalExternalWorkflowExecutionInitiatedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.SignalExternalWorkflowExecutionInitiatedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField176 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalExternalWorkflowExecutionInitiatedEventAttributes).GetDecisionTaskCompletedEventId() : shared.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); const __goscriptLiteralField177 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalExternalWorkflowExecutionInitiatedEventAttributes).GetDomain() : shared.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.GetDomain.call(t)); const __goscriptLiteralField178 = __goscript_types.WorkflowExecution((t$ as shared.SignalExternalWorkflowExecutionInitiatedEventAttributes).WorkflowExecution); const __goscriptLiteralField179 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalExternalWorkflowExecutionInitiatedEventAttributes).GetSignalName() : shared.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.GetSignalName.call(t)); const __goscriptLiteralField180 = __goscript_types.Payload((t$ as shared.SignalExternalWorkflowExecutionInitiatedEventAttributes).Input); const __goscriptLiteralField181 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SignalExternalWorkflowExecutionInitiatedEventAttributes).GetChildWorkflowOnly() : shared.SignalExternalWorkflowExecutionInitiatedEventAttributes.prototype.GetChildWorkflowOnly.call(t)); return new apiv1.SignalExternalWorkflowExecutionInitiatedEventAttributes({DecisionTaskCompletedEventId: __goscriptLiteralField176, Domain: __goscriptLiteralField177, WorkflowExecution: __goscriptLiteralField178, SignalName: __goscriptLiteralField179, Input: __goscriptLiteralField180, Control: (t$ as shared.SignalExternalWorkflowExecutionInitiatedEventAttributes).Control, ChildWorkflowOnly: __goscriptLiteralField181}) })()
}

export function StartChildWorkflowExecutionFailedEventAttributes(t: shared.StartChildWorkflowExecutionFailedEventAttributes | $.VarRef<shared.StartChildWorkflowExecutionFailedEventAttributes> | null): apiv1.StartChildWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.StartChildWorkflowExecutionFailedEventAttributes> | null {
	const t$: shared.StartChildWorkflowExecutionFailedEventAttributes = t == null ? $.pointerTarget<shared.StartChildWorkflowExecutionFailedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.StartChildWorkflowExecutionFailedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField182 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.StartChildWorkflowExecutionFailedEventAttributes).GetDomain() : shared.StartChildWorkflowExecutionFailedEventAttributes.prototype.GetDomain.call(t)); const __goscriptLiteralField183 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.StartChildWorkflowExecutionFailedEventAttributes).GetWorkflowId() : shared.StartChildWorkflowExecutionFailedEventAttributes.prototype.GetWorkflowId.call(t)); const __goscriptLiteralField184 = __goscript_types.WorkflowType((t$ as shared.StartChildWorkflowExecutionFailedEventAttributes).WorkflowType); const __goscriptLiteralField185 = __goscript__enum.ChildWorkflowExecutionFailedCause((t$ as shared.StartChildWorkflowExecutionFailedEventAttributes).Cause); const __goscriptLiteralField186 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.StartChildWorkflowExecutionFailedEventAttributes).GetInitiatedEventId() : shared.StartChildWorkflowExecutionFailedEventAttributes.prototype.GetInitiatedEventId.call(t)); const __goscriptLiteralField187 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.StartChildWorkflowExecutionFailedEventAttributes).GetDecisionTaskCompletedEventId() : shared.StartChildWorkflowExecutionFailedEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); return new apiv1.StartChildWorkflowExecutionFailedEventAttributes({Domain: __goscriptLiteralField182, WorkflowId: __goscriptLiteralField183, WorkflowType: __goscriptLiteralField184, Cause: __goscriptLiteralField185, Control: (t$ as shared.StartChildWorkflowExecutionFailedEventAttributes).Control, InitiatedEventId: __goscriptLiteralField186, DecisionTaskCompletedEventId: __goscriptLiteralField187}) })()
}

export function StartChildWorkflowExecutionInitiatedEventAttributes(t: shared.StartChildWorkflowExecutionInitiatedEventAttributes | $.VarRef<shared.StartChildWorkflowExecutionInitiatedEventAttributes> | null): apiv1.StartChildWorkflowExecutionInitiatedEventAttributes | $.VarRef<apiv1.StartChildWorkflowExecutionInitiatedEventAttributes> | null {
	const t$: shared.StartChildWorkflowExecutionInitiatedEventAttributes = t == null ? $.pointerTarget<shared.StartChildWorkflowExecutionInitiatedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.StartChildWorkflowExecutionInitiatedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField188 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.StartChildWorkflowExecutionInitiatedEventAttributes).GetDomain() : shared.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.GetDomain.call(t)); const __goscriptLiteralField189 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.StartChildWorkflowExecutionInitiatedEventAttributes).GetWorkflowId() : shared.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.GetWorkflowId.call(t)); const __goscriptLiteralField190 = __goscript_types.WorkflowType((t$ as shared.StartChildWorkflowExecutionInitiatedEventAttributes).WorkflowType); const __goscriptLiteralField191 = __goscript_types.TaskList((t$ as shared.StartChildWorkflowExecutionInitiatedEventAttributes).TaskList); const __goscriptLiteralField192 = __goscript_types.Payload((t$ as shared.StartChildWorkflowExecutionInitiatedEventAttributes).Input); const __goscriptLiteralField193 = __goscript_helpers.secondsToDuration((t$ as shared.StartChildWorkflowExecutionInitiatedEventAttributes).ExecutionStartToCloseTimeoutSeconds); const __goscriptLiteralField194 = __goscript_helpers.secondsToDuration((t$ as shared.StartChildWorkflowExecutionInitiatedEventAttributes).TaskStartToCloseTimeoutSeconds); const __goscriptLiteralField195 = __goscript__enum.ParentClosePolicy((t$ as shared.StartChildWorkflowExecutionInitiatedEventAttributes).ParentClosePolicy); const __goscriptLiteralField196 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.StartChildWorkflowExecutionInitiatedEventAttributes).GetDecisionTaskCompletedEventId() : shared.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); const __goscriptLiteralField197 = __goscript__enum.WorkflowIDReusePolicy((t$ as shared.StartChildWorkflowExecutionInitiatedEventAttributes).WorkflowIdReusePolicy); const __goscriptLiteralField198 = __goscript_types.RetryPolicy((t$ as shared.StartChildWorkflowExecutionInitiatedEventAttributes).RetryPolicy); const __goscriptLiteralField199 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.StartChildWorkflowExecutionInitiatedEventAttributes).GetCronSchedule() : shared.StartChildWorkflowExecutionInitiatedEventAttributes.prototype.GetCronSchedule.call(t)); const __goscriptLiteralField200 = __goscript_types.Header((t$ as shared.StartChildWorkflowExecutionInitiatedEventAttributes).Header); const __goscriptLiteralField201 = __goscript_types.Memo((t$ as shared.StartChildWorkflowExecutionInitiatedEventAttributes).Memo); const __goscriptLiteralField202 = __goscript_types.SearchAttributes((t$ as shared.StartChildWorkflowExecutionInitiatedEventAttributes).SearchAttributes); const __goscriptLiteralField203 = __goscript_helpers.secondsToDuration((t$ as shared.StartChildWorkflowExecutionInitiatedEventAttributes).DelayStartSeconds); const __goscriptLiteralField204 = __goscript_helpers.secondsToDuration((t$ as shared.StartChildWorkflowExecutionInitiatedEventAttributes).JitterStartSeconds); const __goscriptLiteralField205 = __goscript_helpers.unixNanoToTime((t$ as shared.StartChildWorkflowExecutionInitiatedEventAttributes).FirstRunAtTimestamp); return new apiv1.StartChildWorkflowExecutionInitiatedEventAttributes({Domain: __goscriptLiteralField188, WorkflowId: __goscriptLiteralField189, WorkflowType: __goscriptLiteralField190, TaskList: __goscriptLiteralField191, Input: __goscriptLiteralField192, ExecutionStartToCloseTimeout: __goscriptLiteralField193, TaskStartToCloseTimeout: __goscriptLiteralField194, ParentClosePolicy: __goscriptLiteralField195, Control: (t$ as shared.StartChildWorkflowExecutionInitiatedEventAttributes).Control, DecisionTaskCompletedEventId: __goscriptLiteralField196, WorkflowIdReusePolicy: __goscriptLiteralField197, RetryPolicy: __goscriptLiteralField198, CronSchedule: __goscriptLiteralField199, Header: __goscriptLiteralField200, Memo: __goscriptLiteralField201, SearchAttributes: __goscriptLiteralField202, DelayStart: __goscriptLiteralField203, JitterStart: __goscriptLiteralField204, FirstRunAt: __goscriptLiteralField205}) })()
}

export function TimerCanceledEventAttributes(t: shared.TimerCanceledEventAttributes | $.VarRef<shared.TimerCanceledEventAttributes> | null): apiv1.TimerCanceledEventAttributes | $.VarRef<apiv1.TimerCanceledEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField206 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TimerCanceledEventAttributes).GetTimerId() : shared.TimerCanceledEventAttributes.prototype.GetTimerId.call(t)); const __goscriptLiteralField207 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TimerCanceledEventAttributes).GetStartedEventId() : shared.TimerCanceledEventAttributes.prototype.GetStartedEventId.call(t)); const __goscriptLiteralField208 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TimerCanceledEventAttributes).GetDecisionTaskCompletedEventId() : shared.TimerCanceledEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); const __goscriptLiteralField209 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TimerCanceledEventAttributes).GetIdentity() : shared.TimerCanceledEventAttributes.prototype.GetIdentity.call(t)); return new apiv1.TimerCanceledEventAttributes({TimerId: __goscriptLiteralField206, StartedEventId: __goscriptLiteralField207, DecisionTaskCompletedEventId: __goscriptLiteralField208, Identity: __goscriptLiteralField209}) })()
}

export function TimerFiredEventAttributes(t: shared.TimerFiredEventAttributes | $.VarRef<shared.TimerFiredEventAttributes> | null): apiv1.TimerFiredEventAttributes | $.VarRef<apiv1.TimerFiredEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField210 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TimerFiredEventAttributes).GetTimerId() : shared.TimerFiredEventAttributes.prototype.GetTimerId.call(t)); const __goscriptLiteralField211 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TimerFiredEventAttributes).GetStartedEventId() : shared.TimerFiredEventAttributes.prototype.GetStartedEventId.call(t)); return new apiv1.TimerFiredEventAttributes({TimerId: __goscriptLiteralField210, StartedEventId: __goscriptLiteralField211}) })()
}

export function TimerStartedEventAttributes(t: shared.TimerStartedEventAttributes | $.VarRef<shared.TimerStartedEventAttributes> | null): apiv1.TimerStartedEventAttributes | $.VarRef<apiv1.TimerStartedEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField212 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TimerStartedEventAttributes).GetTimerId() : shared.TimerStartedEventAttributes.prototype.GetTimerId.call(t)); const __goscriptLiteralField213 = __goscript_helpers.secondsToDuration(__goscript_helpers.int64To32($.pointerValue<shared.TimerStartedEventAttributes>(t).StartToFireTimeoutSeconds)); const __goscriptLiteralField214 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TimerStartedEventAttributes).GetDecisionTaskCompletedEventId() : shared.TimerStartedEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); return new apiv1.TimerStartedEventAttributes({TimerId: __goscriptLiteralField212, StartToFireTimeout: __goscriptLiteralField213, DecisionTaskCompletedEventId: __goscriptLiteralField214}) })()
}

export function UpsertWorkflowSearchAttributesEventAttributes(t: shared.UpsertWorkflowSearchAttributesEventAttributes | $.VarRef<shared.UpsertWorkflowSearchAttributesEventAttributes> | null): apiv1.UpsertWorkflowSearchAttributesEventAttributes | $.VarRef<apiv1.UpsertWorkflowSearchAttributesEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField215 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.UpsertWorkflowSearchAttributesEventAttributes).GetDecisionTaskCompletedEventId() : shared.UpsertWorkflowSearchAttributesEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); const __goscriptLiteralField216 = __goscript_types.SearchAttributes($.pointerValue<shared.UpsertWorkflowSearchAttributesEventAttributes>(t).SearchAttributes); return new apiv1.UpsertWorkflowSearchAttributesEventAttributes({DecisionTaskCompletedEventId: __goscriptLiteralField215, SearchAttributes: __goscriptLiteralField216}) })()
}

export function WorkflowExecutionCancelRequestedEventAttributes(t: shared.WorkflowExecutionCancelRequestedEventAttributes | $.VarRef<shared.WorkflowExecutionCancelRequestedEventAttributes> | null): apiv1.WorkflowExecutionCancelRequestedEventAttributes | $.VarRef<apiv1.WorkflowExecutionCancelRequestedEventAttributes> | null {
	const t$: shared.WorkflowExecutionCancelRequestedEventAttributes = t == null ? $.pointerTarget<shared.WorkflowExecutionCancelRequestedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.WorkflowExecutionCancelRequestedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField217 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionCancelRequestedEventAttributes).GetCause() : shared.WorkflowExecutionCancelRequestedEventAttributes.prototype.GetCause.call(t)); const __goscriptLiteralField218 = __goscript_types.ExternalExecutionInfo((t$ as shared.WorkflowExecutionCancelRequestedEventAttributes).ExternalWorkflowExecution, (t$ as shared.WorkflowExecutionCancelRequestedEventAttributes).ExternalInitiatedEventId); const __goscriptLiteralField219 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionCancelRequestedEventAttributes).GetIdentity() : shared.WorkflowExecutionCancelRequestedEventAttributes.prototype.GetIdentity.call(t)); return new apiv1.WorkflowExecutionCancelRequestedEventAttributes({Cause: __goscriptLiteralField217, ExternalExecutionInfo: __goscriptLiteralField218, Identity: __goscriptLiteralField219}) })()
}

export function WorkflowExecutionCanceledEventAttributes(t: shared.WorkflowExecutionCanceledEventAttributes | $.VarRef<shared.WorkflowExecutionCanceledEventAttributes> | null): apiv1.WorkflowExecutionCanceledEventAttributes | $.VarRef<apiv1.WorkflowExecutionCanceledEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField220 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionCanceledEventAttributes).GetDecisionTaskCompletedEventId() : shared.WorkflowExecutionCanceledEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); const __goscriptLiteralField221 = __goscript_types.Payload($.pointerValue<shared.WorkflowExecutionCanceledEventAttributes>(t).Details); return new apiv1.WorkflowExecutionCanceledEventAttributes({DecisionTaskCompletedEventId: __goscriptLiteralField220, Details: __goscriptLiteralField221}) })()
}

export function WorkflowExecutionCompletedEventAttributes(t: shared.WorkflowExecutionCompletedEventAttributes | $.VarRef<shared.WorkflowExecutionCompletedEventAttributes> | null): apiv1.WorkflowExecutionCompletedEventAttributes | $.VarRef<apiv1.WorkflowExecutionCompletedEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField222 = __goscript_types.Payload($.pointerValue<shared.WorkflowExecutionCompletedEventAttributes>(t).Result); const __goscriptLiteralField223 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionCompletedEventAttributes).GetDecisionTaskCompletedEventId() : shared.WorkflowExecutionCompletedEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); return new apiv1.WorkflowExecutionCompletedEventAttributes({Result: __goscriptLiteralField222, DecisionTaskCompletedEventId: __goscriptLiteralField223}) })()
}

export function WorkflowExecutionContinuedAsNewEventAttributes(t: shared.WorkflowExecutionContinuedAsNewEventAttributes | $.VarRef<shared.WorkflowExecutionContinuedAsNewEventAttributes> | null): apiv1.WorkflowExecutionContinuedAsNewEventAttributes | $.VarRef<apiv1.WorkflowExecutionContinuedAsNewEventAttributes> | null {
	const t$: shared.WorkflowExecutionContinuedAsNewEventAttributes = t == null ? $.pointerTarget<shared.WorkflowExecutionContinuedAsNewEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.WorkflowExecutionContinuedAsNewEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField224 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionContinuedAsNewEventAttributes).GetNewExecutionRunId() : shared.WorkflowExecutionContinuedAsNewEventAttributes.prototype.GetNewExecutionRunId.call(t)); const __goscriptLiteralField225 = __goscript_types.WorkflowType((t$ as shared.WorkflowExecutionContinuedAsNewEventAttributes).WorkflowType); const __goscriptLiteralField226 = __goscript_types.TaskList((t$ as shared.WorkflowExecutionContinuedAsNewEventAttributes).TaskList); const __goscriptLiteralField227 = __goscript_types.Payload((t$ as shared.WorkflowExecutionContinuedAsNewEventAttributes).Input); const __goscriptLiteralField228 = __goscript_helpers.secondsToDuration((t$ as shared.WorkflowExecutionContinuedAsNewEventAttributes).ExecutionStartToCloseTimeoutSeconds); const __goscriptLiteralField229 = __goscript_helpers.secondsToDuration((t$ as shared.WorkflowExecutionContinuedAsNewEventAttributes).TaskStartToCloseTimeoutSeconds); const __goscriptLiteralField230 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionContinuedAsNewEventAttributes).GetDecisionTaskCompletedEventId() : shared.WorkflowExecutionContinuedAsNewEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); const __goscriptLiteralField231 = __goscript_helpers.secondsToDuration((t$ as shared.WorkflowExecutionContinuedAsNewEventAttributes).BackoffStartIntervalInSeconds); const __goscriptLiteralField232 = __goscript__enum.ContinueAsNewInitiator((t$ as shared.WorkflowExecutionContinuedAsNewEventAttributes).Initiator); const __goscriptLiteralField233 = __goscript_types.Failure((t$ as shared.WorkflowExecutionContinuedAsNewEventAttributes).FailureReason, (t$ as shared.WorkflowExecutionContinuedAsNewEventAttributes).FailureDetails); const __goscriptLiteralField234 = __goscript_types.Payload((t$ as shared.WorkflowExecutionContinuedAsNewEventAttributes).LastCompletionResult); const __goscriptLiteralField235 = __goscript_types.Header((t$ as shared.WorkflowExecutionContinuedAsNewEventAttributes).Header); const __goscriptLiteralField236 = __goscript_types.Memo((t$ as shared.WorkflowExecutionContinuedAsNewEventAttributes).Memo); const __goscriptLiteralField237 = __goscript_types.SearchAttributes((t$ as shared.WorkflowExecutionContinuedAsNewEventAttributes).SearchAttributes); return new apiv1.WorkflowExecutionContinuedAsNewEventAttributes({NewExecutionRunId: __goscriptLiteralField224, WorkflowType: __goscriptLiteralField225, TaskList: __goscriptLiteralField226, Input: __goscriptLiteralField227, ExecutionStartToCloseTimeout: __goscriptLiteralField228, TaskStartToCloseTimeout: __goscriptLiteralField229, DecisionTaskCompletedEventId: __goscriptLiteralField230, BackoffStartInterval: __goscriptLiteralField231, Initiator: __goscriptLiteralField232, Failure: __goscriptLiteralField233, LastCompletionResult: __goscriptLiteralField234, Header: __goscriptLiteralField235, Memo: __goscriptLiteralField236, SearchAttributes: __goscriptLiteralField237}) })()
}

export function WorkflowExecutionFailedEventAttributes(t: shared.WorkflowExecutionFailedEventAttributes | $.VarRef<shared.WorkflowExecutionFailedEventAttributes> | null): apiv1.WorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.WorkflowExecutionFailedEventAttributes> | null {
	const t$: shared.WorkflowExecutionFailedEventAttributes = t == null ? $.pointerTarget<shared.WorkflowExecutionFailedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.WorkflowExecutionFailedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField238 = __goscript_types.Failure((t$ as shared.WorkflowExecutionFailedEventAttributes).Reason, (t$ as shared.WorkflowExecutionFailedEventAttributes).Details); const __goscriptLiteralField239 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionFailedEventAttributes).GetDecisionTaskCompletedEventId() : shared.WorkflowExecutionFailedEventAttributes.prototype.GetDecisionTaskCompletedEventId.call(t)); return new apiv1.WorkflowExecutionFailedEventAttributes({Failure: __goscriptLiteralField238, DecisionTaskCompletedEventId: __goscriptLiteralField239}) })()
}

export function WorkflowExecutionSignaledEventAttributes(t: shared.WorkflowExecutionSignaledEventAttributes | $.VarRef<shared.WorkflowExecutionSignaledEventAttributes> | null): apiv1.WorkflowExecutionSignaledEventAttributes | $.VarRef<apiv1.WorkflowExecutionSignaledEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField240 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionSignaledEventAttributes).GetSignalName() : shared.WorkflowExecutionSignaledEventAttributes.prototype.GetSignalName.call(t)); const __goscriptLiteralField241 = __goscript_types.Payload($.pointerValue<shared.WorkflowExecutionSignaledEventAttributes>(t).Input); const __goscriptLiteralField242 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionSignaledEventAttributes).GetIdentity() : shared.WorkflowExecutionSignaledEventAttributes.prototype.GetIdentity.call(t)); return new apiv1.WorkflowExecutionSignaledEventAttributes({SignalName: __goscriptLiteralField240, Input: __goscriptLiteralField241, Identity: __goscriptLiteralField242}) })()
}

export function WorkflowExecutionStartedEventAttributes(t: shared.WorkflowExecutionStartedEventAttributes | $.VarRef<shared.WorkflowExecutionStartedEventAttributes> | null): apiv1.WorkflowExecutionStartedEventAttributes | $.VarRef<apiv1.WorkflowExecutionStartedEventAttributes> | null {
	const t$: shared.WorkflowExecutionStartedEventAttributes = t == null ? $.pointerTarget<shared.WorkflowExecutionStartedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.WorkflowExecutionStartedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField243 = __goscript_types.WorkflowType((t$ as shared.WorkflowExecutionStartedEventAttributes).WorkflowType); const __goscriptLiteralField244 = __goscript_types.ParentExecutionInfo(null, (t$ as shared.WorkflowExecutionStartedEventAttributes).ParentWorkflowDomain, (t$ as shared.WorkflowExecutionStartedEventAttributes).ParentWorkflowExecution, (t$ as shared.WorkflowExecutionStartedEventAttributes).ParentInitiatedEventId); const __goscriptLiteralField245 = __goscript_types.TaskList((t$ as shared.WorkflowExecutionStartedEventAttributes).TaskList); const __goscriptLiteralField246 = __goscript_types.Payload((t$ as shared.WorkflowExecutionStartedEventAttributes).Input); const __goscriptLiteralField247 = __goscript_helpers.secondsToDuration((t$ as shared.WorkflowExecutionStartedEventAttributes).ExecutionStartToCloseTimeoutSeconds); const __goscriptLiteralField248 = __goscript_helpers.secondsToDuration((t$ as shared.WorkflowExecutionStartedEventAttributes).TaskStartToCloseTimeoutSeconds); const __goscriptLiteralField249 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionStartedEventAttributes).GetContinuedExecutionRunId() : shared.WorkflowExecutionStartedEventAttributes.prototype.GetContinuedExecutionRunId.call(t)); const __goscriptLiteralField250 = __goscript__enum.ContinueAsNewInitiator((t$ as shared.WorkflowExecutionStartedEventAttributes).Initiator); const __goscriptLiteralField251 = __goscript_types.Failure((t$ as shared.WorkflowExecutionStartedEventAttributes).ContinuedFailureReason, (t$ as shared.WorkflowExecutionStartedEventAttributes).ContinuedFailureDetails); const __goscriptLiteralField252 = __goscript_types.Payload((t$ as shared.WorkflowExecutionStartedEventAttributes).LastCompletionResult); const __goscriptLiteralField253 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionStartedEventAttributes).GetOriginalExecutionRunId() : shared.WorkflowExecutionStartedEventAttributes.prototype.GetOriginalExecutionRunId.call(t)); const __goscriptLiteralField254 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionStartedEventAttributes).GetIdentity() : shared.WorkflowExecutionStartedEventAttributes.prototype.GetIdentity.call(t)); const __goscriptLiteralField255 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionStartedEventAttributes).GetFirstExecutionRunId() : shared.WorkflowExecutionStartedEventAttributes.prototype.GetFirstExecutionRunId.call(t)); const __goscriptLiteralField256 = __goscript_types.RetryPolicy((t$ as shared.WorkflowExecutionStartedEventAttributes).RetryPolicy); const __goscriptLiteralField257 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionStartedEventAttributes).GetAttempt() : shared.WorkflowExecutionStartedEventAttributes.prototype.GetAttempt.call(t)); const __goscriptLiteralField258 = __goscript_helpers.unixNanoToTime((t$ as shared.WorkflowExecutionStartedEventAttributes).ExpirationTimestamp); const __goscriptLiteralField259 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionStartedEventAttributes).GetCronSchedule() : shared.WorkflowExecutionStartedEventAttributes.prototype.GetCronSchedule.call(t)); const __goscriptLiteralField260 = __goscript_helpers.secondsToDuration((t$ as shared.WorkflowExecutionStartedEventAttributes).FirstDecisionTaskBackoffSeconds); const __goscriptLiteralField261 = __goscript_types.Memo((t$ as shared.WorkflowExecutionStartedEventAttributes).Memo); const __goscriptLiteralField262 = __goscript_types.SearchAttributes((t$ as shared.WorkflowExecutionStartedEventAttributes).SearchAttributes); const __goscriptLiteralField263 = __goscript_types.ResetPoints((t$ as shared.WorkflowExecutionStartedEventAttributes).PrevAutoResetPoints); const __goscriptLiteralField264 = __goscript_types.Header((t$ as shared.WorkflowExecutionStartedEventAttributes).Header); return new apiv1.WorkflowExecutionStartedEventAttributes({WorkflowType: __goscriptLiteralField243, ParentExecutionInfo: __goscriptLiteralField244, TaskList: __goscriptLiteralField245, Input: __goscriptLiteralField246, ExecutionStartToCloseTimeout: __goscriptLiteralField247, TaskStartToCloseTimeout: __goscriptLiteralField248, ContinuedExecutionRunId: __goscriptLiteralField249, Initiator: __goscriptLiteralField250, ContinuedFailure: __goscriptLiteralField251, LastCompletionResult: __goscriptLiteralField252, OriginalExecutionRunId: __goscriptLiteralField253, Identity: __goscriptLiteralField254, FirstExecutionRunId: __goscriptLiteralField255, RetryPolicy: __goscriptLiteralField256, Attempt: __goscriptLiteralField257, ExpirationTime: __goscriptLiteralField258, CronSchedule: __goscriptLiteralField259, FirstDecisionTaskBackoff: __goscriptLiteralField260, Memo: __goscriptLiteralField261, SearchAttributes: __goscriptLiteralField262, PrevAutoResetPoints: __goscriptLiteralField263, Header: __goscriptLiteralField264}) })()
}

export function WorkflowExecutionTerminatedEventAttributes(t: shared.WorkflowExecutionTerminatedEventAttributes | $.VarRef<shared.WorkflowExecutionTerminatedEventAttributes> | null): apiv1.WorkflowExecutionTerminatedEventAttributes | $.VarRef<apiv1.WorkflowExecutionTerminatedEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField265 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionTerminatedEventAttributes).GetReason() : shared.WorkflowExecutionTerminatedEventAttributes.prototype.GetReason.call(t)); const __goscriptLiteralField266 = __goscript_types.Payload($.pointerValue<shared.WorkflowExecutionTerminatedEventAttributes>(t).Details); const __goscriptLiteralField267 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionTerminatedEventAttributes).GetIdentity() : shared.WorkflowExecutionTerminatedEventAttributes.prototype.GetIdentity.call(t)); return new apiv1.WorkflowExecutionTerminatedEventAttributes({Reason: __goscriptLiteralField265, Details: __goscriptLiteralField266, Identity: __goscriptLiteralField267}) })()
}

export function WorkflowExecutionTimedOutEventAttributes(t: shared.WorkflowExecutionTimedOutEventAttributes | $.VarRef<shared.WorkflowExecutionTimedOutEventAttributes> | null): apiv1.WorkflowExecutionTimedOutEventAttributes | $.VarRef<apiv1.WorkflowExecutionTimedOutEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField268 = __goscript__enum.TimeoutType($.pointerValue<shared.WorkflowExecutionTimedOutEventAttributes>(t).TimeoutType); return new apiv1.WorkflowExecutionTimedOutEventAttributes({TimeoutType: __goscriptLiteralField268}) })()
}
