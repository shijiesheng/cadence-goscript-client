// Generated file based on history.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as apiv1 from "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"

import * as __goscript__enum from "./enum.gs.ts"

import * as __goscript_helpers from "./helpers.gs.ts"

import * as __goscript_types from "./types.gs.ts"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"
import "./enum.gs.ts"
import "./helpers.gs.ts"
import "./types.gs.ts"

export function History(t: apiv1.History | $.VarRef<apiv1.History> | null): shared.History | $.VarRef<shared.History> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField0 = HistoryEventArray($.pointerValue<apiv1.History>(t).Events); return new shared.History({Events: __goscriptLiteralField0}) })()
}

export function HistoryEventArray(t: $.Slice<apiv1.HistoryEvent | $.VarRef<apiv1.HistoryEvent> | null>): $.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null> = $.makeSlice<shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget0 = t, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow0.length; i++) {
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = HistoryEvent(((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as apiv1.HistoryEvent | $.VarRef<apiv1.HistoryEvent> | null))
	}
	return v
}

export function HistoryEvent(e: apiv1.HistoryEvent | $.VarRef<apiv1.HistoryEvent> | null): shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null {
	const e$: apiv1.HistoryEvent = e == null ? $.pointerTarget<apiv1.HistoryEvent>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<apiv1.HistoryEvent>(e)
	if (e == null) {
		return null
	}
	let event = $.varRef((() => { const __goscriptLiteralField1 = __goscript_helpers.timeToUnixNano((e$ as apiv1.HistoryEvent).EventTime); return new shared.HistoryEvent({EventId: $.fieldRef((e$ as apiv1.HistoryEvent)._fields, "EventId"), Timestamp: __goscriptLiteralField1, Version: $.fieldRef((e$ as apiv1.HistoryEvent)._fields, "Version"), TaskId: $.fieldRef((e$ as apiv1.HistoryEvent)._fields, "TaskId")}, true) })())
	{
		const __goscriptTypeSwitchValue = (e$ as apiv1.HistoryEvent).Attributes
		switch (true) {
			case $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionStartedEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionStartedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionStartedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_WorkflowExecutionStartedEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionStartedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionStartedEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionStartedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionStartedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeWorkflowExecutionStarted)
					event.value.WorkflowExecutionStartedEventAttributes = WorkflowExecutionStartedEventAttributes($.pointerValue<apiv1.HistoryEvent_WorkflowExecutionStartedEventAttributes>(attr).WorkflowExecutionStartedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionCompletedEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionCompletedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionCompletedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_WorkflowExecutionCompletedEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionCompletedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionCompletedEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionCompletedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionCompletedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeWorkflowExecutionCompleted)
					event.value.WorkflowExecutionCompletedEventAttributes = WorkflowExecutionCompletedEventAttributes($.pointerValue<apiv1.HistoryEvent_WorkflowExecutionCompletedEventAttributes>(attr).WorkflowExecutionCompletedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionFailedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_WorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionFailedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionFailedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeWorkflowExecutionFailed)
					event.value.WorkflowExecutionFailedEventAttributes = WorkflowExecutionFailedEventAttributes($.pointerValue<apiv1.HistoryEvent_WorkflowExecutionFailedEventAttributes>(attr).WorkflowExecutionFailedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionTimedOutEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionTimedOutEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionTimedOutEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_WorkflowExecutionTimedOutEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionTimedOutEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionTimedOutEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionTimedOutEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionTimedOutEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeWorkflowExecutionTimedOut)
					event.value.WorkflowExecutionTimedOutEventAttributes = WorkflowExecutionTimedOutEventAttributes($.pointerValue<apiv1.HistoryEvent_WorkflowExecutionTimedOutEventAttributes>(attr).WorkflowExecutionTimedOutEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_DecisionTaskScheduledEventAttributes | $.VarRef<apiv1.HistoryEvent_DecisionTaskScheduledEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_DecisionTaskScheduledEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_DecisionTaskScheduledEventAttributes | $.VarRef<apiv1.HistoryEvent_DecisionTaskScheduledEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_DecisionTaskScheduledEventAttributes | $.VarRef<apiv1.HistoryEvent_DecisionTaskScheduledEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_DecisionTaskScheduledEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeDecisionTaskScheduled)
					event.value.DecisionTaskScheduledEventAttributes = DecisionTaskScheduledEventAttributes($.pointerValue<apiv1.HistoryEvent_DecisionTaskScheduledEventAttributes>(attr).DecisionTaskScheduledEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_DecisionTaskStartedEventAttributes | $.VarRef<apiv1.HistoryEvent_DecisionTaskStartedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_DecisionTaskStartedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_DecisionTaskStartedEventAttributes | $.VarRef<apiv1.HistoryEvent_DecisionTaskStartedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_DecisionTaskStartedEventAttributes | $.VarRef<apiv1.HistoryEvent_DecisionTaskStartedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_DecisionTaskStartedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeDecisionTaskStarted)
					event.value.DecisionTaskStartedEventAttributes = DecisionTaskStartedEventAttributes($.pointerValue<apiv1.HistoryEvent_DecisionTaskStartedEventAttributes>(attr).DecisionTaskStartedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_DecisionTaskCompletedEventAttributes | $.VarRef<apiv1.HistoryEvent_DecisionTaskCompletedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_DecisionTaskCompletedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_DecisionTaskCompletedEventAttributes | $.VarRef<apiv1.HistoryEvent_DecisionTaskCompletedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_DecisionTaskCompletedEventAttributes | $.VarRef<apiv1.HistoryEvent_DecisionTaskCompletedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_DecisionTaskCompletedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeDecisionTaskCompleted)
					event.value.DecisionTaskCompletedEventAttributes = DecisionTaskCompletedEventAttributes($.pointerValue<apiv1.HistoryEvent_DecisionTaskCompletedEventAttributes>(attr).DecisionTaskCompletedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_DecisionTaskTimedOutEventAttributes | $.VarRef<apiv1.HistoryEvent_DecisionTaskTimedOutEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_DecisionTaskTimedOutEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_DecisionTaskTimedOutEventAttributes | $.VarRef<apiv1.HistoryEvent_DecisionTaskTimedOutEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_DecisionTaskTimedOutEventAttributes | $.VarRef<apiv1.HistoryEvent_DecisionTaskTimedOutEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_DecisionTaskTimedOutEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeDecisionTaskTimedOut)
					event.value.DecisionTaskTimedOutEventAttributes = DecisionTaskTimedOutEventAttributes($.pointerValue<apiv1.HistoryEvent_DecisionTaskTimedOutEventAttributes>(attr).DecisionTaskTimedOutEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_DecisionTaskFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_DecisionTaskFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_DecisionTaskFailedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_DecisionTaskFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_DecisionTaskFailedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_DecisionTaskFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_DecisionTaskFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_DecisionTaskFailedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeDecisionTaskFailed)
					event.value.DecisionTaskFailedEventAttributes = DecisionTaskFailedEventAttributes($.pointerValue<apiv1.HistoryEvent_DecisionTaskFailedEventAttributes>(attr).DecisionTaskFailedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_ActivityTaskScheduledEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskScheduledEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskScheduledEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_ActivityTaskScheduledEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskScheduledEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_ActivityTaskScheduledEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskScheduledEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskScheduledEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeActivityTaskScheduled)
					event.value.ActivityTaskScheduledEventAttributes = ActivityTaskScheduledEventAttributes($.pointerValue<apiv1.HistoryEvent_ActivityTaskScheduledEventAttributes>(attr).ActivityTaskScheduledEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_ActivityTaskStartedEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskStartedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskStartedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_ActivityTaskStartedEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskStartedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_ActivityTaskStartedEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskStartedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskStartedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeActivityTaskStarted)
					event.value.ActivityTaskStartedEventAttributes = ActivityTaskStartedEventAttributes($.pointerValue<apiv1.HistoryEvent_ActivityTaskStartedEventAttributes>(attr).ActivityTaskStartedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_ActivityTaskCompletedEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskCompletedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskCompletedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_ActivityTaskCompletedEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskCompletedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_ActivityTaskCompletedEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskCompletedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskCompletedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeActivityTaskCompleted)
					event.value.ActivityTaskCompletedEventAttributes = ActivityTaskCompletedEventAttributes($.pointerValue<apiv1.HistoryEvent_ActivityTaskCompletedEventAttributes>(attr).ActivityTaskCompletedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_ActivityTaskFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskFailedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_ActivityTaskFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskFailedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_ActivityTaskFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskFailedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeActivityTaskFailed)
					event.value.ActivityTaskFailedEventAttributes = ActivityTaskFailedEventAttributes($.pointerValue<apiv1.HistoryEvent_ActivityTaskFailedEventAttributes>(attr).ActivityTaskFailedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_ActivityTaskTimedOutEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskTimedOutEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskTimedOutEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_ActivityTaskTimedOutEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskTimedOutEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_ActivityTaskTimedOutEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskTimedOutEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskTimedOutEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeActivityTaskTimedOut)
					event.value.ActivityTaskTimedOutEventAttributes = ActivityTaskTimedOutEventAttributes($.pointerValue<apiv1.HistoryEvent_ActivityTaskTimedOutEventAttributes>(attr).ActivityTaskTimedOutEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_TimerStartedEventAttributes | $.VarRef<apiv1.HistoryEvent_TimerStartedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_TimerStartedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_TimerStartedEventAttributes | $.VarRef<apiv1.HistoryEvent_TimerStartedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_TimerStartedEventAttributes | $.VarRef<apiv1.HistoryEvent_TimerStartedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_TimerStartedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeTimerStarted)
					event.value.TimerStartedEventAttributes = TimerStartedEventAttributes($.pointerValue<apiv1.HistoryEvent_TimerStartedEventAttributes>(attr).TimerStartedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_TimerFiredEventAttributes | $.VarRef<apiv1.HistoryEvent_TimerFiredEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_TimerFiredEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_TimerFiredEventAttributes | $.VarRef<apiv1.HistoryEvent_TimerFiredEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_TimerFiredEventAttributes | $.VarRef<apiv1.HistoryEvent_TimerFiredEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_TimerFiredEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeTimerFired)
					event.value.TimerFiredEventAttributes = TimerFiredEventAttributes($.pointerValue<apiv1.HistoryEvent_TimerFiredEventAttributes>(attr).TimerFiredEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_ActivityTaskCancelRequestedEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskCancelRequestedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskCancelRequestedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_ActivityTaskCancelRequestedEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskCancelRequestedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_ActivityTaskCancelRequestedEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskCancelRequestedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskCancelRequestedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeActivityTaskCancelRequested)
					event.value.ActivityTaskCancelRequestedEventAttributes = ActivityTaskCancelRequestedEventAttributes($.pointerValue<apiv1.HistoryEvent_ActivityTaskCancelRequestedEventAttributes>(attr).ActivityTaskCancelRequestedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_RequestCancelActivityTaskFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_RequestCancelActivityTaskFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_RequestCancelActivityTaskFailedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_RequestCancelActivityTaskFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_RequestCancelActivityTaskFailedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_RequestCancelActivityTaskFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_RequestCancelActivityTaskFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_RequestCancelActivityTaskFailedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeRequestCancelActivityTaskFailed)
					event.value.RequestCancelActivityTaskFailedEventAttributes = RequestCancelActivityTaskFailedEventAttributes($.pointerValue<apiv1.HistoryEvent_RequestCancelActivityTaskFailedEventAttributes>(attr).RequestCancelActivityTaskFailedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_ActivityTaskCanceledEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskCanceledEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskCanceledEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_ActivityTaskCanceledEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskCanceledEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_ActivityTaskCanceledEventAttributes | $.VarRef<apiv1.HistoryEvent_ActivityTaskCanceledEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ActivityTaskCanceledEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeActivityTaskCanceled)
					event.value.ActivityTaskCanceledEventAttributes = ActivityTaskCanceledEventAttributes($.pointerValue<apiv1.HistoryEvent_ActivityTaskCanceledEventAttributes>(attr).ActivityTaskCanceledEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_TimerCanceledEventAttributes | $.VarRef<apiv1.HistoryEvent_TimerCanceledEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_TimerCanceledEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_TimerCanceledEventAttributes | $.VarRef<apiv1.HistoryEvent_TimerCanceledEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_TimerCanceledEventAttributes | $.VarRef<apiv1.HistoryEvent_TimerCanceledEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_TimerCanceledEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeTimerCanceled)
					event.value.TimerCanceledEventAttributes = TimerCanceledEventAttributes($.pointerValue<apiv1.HistoryEvent_TimerCanceledEventAttributes>(attr).TimerCanceledEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_CancelTimerFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_CancelTimerFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_CancelTimerFailedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_CancelTimerFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_CancelTimerFailedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_CancelTimerFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_CancelTimerFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_CancelTimerFailedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeCancelTimerFailed)
					event.value.CancelTimerFailedEventAttributes = CancelTimerFailedEventAttributes($.pointerValue<apiv1.HistoryEvent_CancelTimerFailedEventAttributes>(attr).CancelTimerFailedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_MarkerRecordedEventAttributes | $.VarRef<apiv1.HistoryEvent_MarkerRecordedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_MarkerRecordedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_MarkerRecordedEventAttributes | $.VarRef<apiv1.HistoryEvent_MarkerRecordedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_MarkerRecordedEventAttributes | $.VarRef<apiv1.HistoryEvent_MarkerRecordedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_MarkerRecordedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeMarkerRecorded)
					event.value.MarkerRecordedEventAttributes = MarkerRecordedEventAttributes($.pointerValue<apiv1.HistoryEvent_MarkerRecordedEventAttributes>(attr).MarkerRecordedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionSignaledEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionSignaledEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionSignaledEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_WorkflowExecutionSignaledEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionSignaledEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionSignaledEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionSignaledEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionSignaledEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeWorkflowExecutionSignaled)
					event.value.WorkflowExecutionSignaledEventAttributes = WorkflowExecutionSignaledEventAttributes($.pointerValue<apiv1.HistoryEvent_WorkflowExecutionSignaledEventAttributes>(attr).WorkflowExecutionSignaledEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionTerminatedEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionTerminatedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionTerminatedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_WorkflowExecutionTerminatedEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionTerminatedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionTerminatedEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionTerminatedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionTerminatedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeWorkflowExecutionTerminated)
					event.value.WorkflowExecutionTerminatedEventAttributes = WorkflowExecutionTerminatedEventAttributes($.pointerValue<apiv1.HistoryEvent_WorkflowExecutionTerminatedEventAttributes>(attr).WorkflowExecutionTerminatedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionCancelRequestedEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionCancelRequestedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionCancelRequestedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_WorkflowExecutionCancelRequestedEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionCancelRequestedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionCancelRequestedEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionCancelRequestedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionCancelRequestedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeWorkflowExecutionCancelRequested)
					event.value.WorkflowExecutionCancelRequestedEventAttributes = WorkflowExecutionCancelRequestedEventAttributes($.pointerValue<apiv1.HistoryEvent_WorkflowExecutionCancelRequestedEventAttributes>(attr).WorkflowExecutionCancelRequestedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionCanceledEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionCanceledEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionCanceledEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_WorkflowExecutionCanceledEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionCanceledEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionCanceledEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionCanceledEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionCanceledEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeWorkflowExecutionCanceled)
					event.value.WorkflowExecutionCanceledEventAttributes = WorkflowExecutionCanceledEventAttributes($.pointerValue<apiv1.HistoryEvent_WorkflowExecutionCanceledEventAttributes>(attr).WorkflowExecutionCanceledEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes | $.VarRef<apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes | $.VarRef<apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes | $.VarRef<apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeRequestCancelExternalWorkflowExecutionInitiated)
					event.value.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = RequestCancelExternalWorkflowExecutionInitiatedEventAttributes($.pointerValue<apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes>(attr).RequestCancelExternalWorkflowExecutionInitiatedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionFailedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionFailedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionFailedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeRequestCancelExternalWorkflowExecutionFailed)
					event.value.RequestCancelExternalWorkflowExecutionFailedEventAttributes = RequestCancelExternalWorkflowExecutionFailedEventAttributes($.pointerValue<apiv1.HistoryEvent_RequestCancelExternalWorkflowExecutionFailedEventAttributes>(attr).RequestCancelExternalWorkflowExecutionFailedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_ExternalWorkflowExecutionCancelRequestedEventAttributes | $.VarRef<apiv1.HistoryEvent_ExternalWorkflowExecutionCancelRequestedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ExternalWorkflowExecutionCancelRequestedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_ExternalWorkflowExecutionCancelRequestedEventAttributes | $.VarRef<apiv1.HistoryEvent_ExternalWorkflowExecutionCancelRequestedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_ExternalWorkflowExecutionCancelRequestedEventAttributes | $.VarRef<apiv1.HistoryEvent_ExternalWorkflowExecutionCancelRequestedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ExternalWorkflowExecutionCancelRequestedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeExternalWorkflowExecutionCancelRequested)
					event.value.ExternalWorkflowExecutionCancelRequestedEventAttributes = ExternalWorkflowExecutionCancelRequestedEventAttributes($.pointerValue<apiv1.HistoryEvent_ExternalWorkflowExecutionCancelRequestedEventAttributes>(attr).ExternalWorkflowExecutionCancelRequestedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionContinuedAsNewEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionContinuedAsNewEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionContinuedAsNewEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_WorkflowExecutionContinuedAsNewEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionContinuedAsNewEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_WorkflowExecutionContinuedAsNewEventAttributes | $.VarRef<apiv1.HistoryEvent_WorkflowExecutionContinuedAsNewEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_WorkflowExecutionContinuedAsNewEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeWorkflowExecutionContinuedAsNew)
					event.value.WorkflowExecutionContinuedAsNewEventAttributes = WorkflowExecutionContinuedAsNewEventAttributes($.pointerValue<apiv1.HistoryEvent_WorkflowExecutionContinuedAsNewEventAttributes>(attr).WorkflowExecutionContinuedAsNewEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_StartChildWorkflowExecutionInitiatedEventAttributes | $.VarRef<apiv1.HistoryEvent_StartChildWorkflowExecutionInitiatedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_StartChildWorkflowExecutionInitiatedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_StartChildWorkflowExecutionInitiatedEventAttributes | $.VarRef<apiv1.HistoryEvent_StartChildWorkflowExecutionInitiatedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_StartChildWorkflowExecutionInitiatedEventAttributes | $.VarRef<apiv1.HistoryEvent_StartChildWorkflowExecutionInitiatedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_StartChildWorkflowExecutionInitiatedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeStartChildWorkflowExecutionInitiated)
					event.value.StartChildWorkflowExecutionInitiatedEventAttributes = StartChildWorkflowExecutionInitiatedEventAttributes($.pointerValue<apiv1.HistoryEvent_StartChildWorkflowExecutionInitiatedEventAttributes>(attr).StartChildWorkflowExecutionInitiatedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_StartChildWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_StartChildWorkflowExecutionFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_StartChildWorkflowExecutionFailedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_StartChildWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_StartChildWorkflowExecutionFailedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_StartChildWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_StartChildWorkflowExecutionFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_StartChildWorkflowExecutionFailedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeStartChildWorkflowExecutionFailed)
					event.value.StartChildWorkflowExecutionFailedEventAttributes = StartChildWorkflowExecutionFailedEventAttributes($.pointerValue<apiv1.HistoryEvent_StartChildWorkflowExecutionFailedEventAttributes>(attr).StartChildWorkflowExecutionFailedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_ChildWorkflowExecutionStartedEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionStartedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionStartedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_ChildWorkflowExecutionStartedEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionStartedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_ChildWorkflowExecutionStartedEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionStartedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionStartedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeChildWorkflowExecutionStarted)
					event.value.ChildWorkflowExecutionStartedEventAttributes = ChildWorkflowExecutionStartedEventAttributes($.pointerValue<apiv1.HistoryEvent_ChildWorkflowExecutionStartedEventAttributes>(attr).ChildWorkflowExecutionStartedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_ChildWorkflowExecutionCompletedEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionCompletedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionCompletedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_ChildWorkflowExecutionCompletedEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionCompletedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_ChildWorkflowExecutionCompletedEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionCompletedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionCompletedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeChildWorkflowExecutionCompleted)
					event.value.ChildWorkflowExecutionCompletedEventAttributes = ChildWorkflowExecutionCompletedEventAttributes($.pointerValue<apiv1.HistoryEvent_ChildWorkflowExecutionCompletedEventAttributes>(attr).ChildWorkflowExecutionCompletedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_ChildWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionFailedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_ChildWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionFailedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_ChildWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionFailedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeChildWorkflowExecutionFailed)
					event.value.ChildWorkflowExecutionFailedEventAttributes = ChildWorkflowExecutionFailedEventAttributes($.pointerValue<apiv1.HistoryEvent_ChildWorkflowExecutionFailedEventAttributes>(attr).ChildWorkflowExecutionFailedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_ChildWorkflowExecutionCanceledEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionCanceledEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionCanceledEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_ChildWorkflowExecutionCanceledEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionCanceledEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_ChildWorkflowExecutionCanceledEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionCanceledEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionCanceledEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeChildWorkflowExecutionCanceled)
					event.value.ChildWorkflowExecutionCanceledEventAttributes = ChildWorkflowExecutionCanceledEventAttributes($.pointerValue<apiv1.HistoryEvent_ChildWorkflowExecutionCanceledEventAttributes>(attr).ChildWorkflowExecutionCanceledEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_ChildWorkflowExecutionTimedOutEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionTimedOutEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionTimedOutEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_ChildWorkflowExecutionTimedOutEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionTimedOutEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_ChildWorkflowExecutionTimedOutEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionTimedOutEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionTimedOutEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeChildWorkflowExecutionTimedOut)
					event.value.ChildWorkflowExecutionTimedOutEventAttributes = ChildWorkflowExecutionTimedOutEventAttributes($.pointerValue<apiv1.HistoryEvent_ChildWorkflowExecutionTimedOutEventAttributes>(attr).ChildWorkflowExecutionTimedOutEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_ChildWorkflowExecutionTerminatedEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionTerminatedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionTerminatedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_ChildWorkflowExecutionTerminatedEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionTerminatedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_ChildWorkflowExecutionTerminatedEventAttributes | $.VarRef<apiv1.HistoryEvent_ChildWorkflowExecutionTerminatedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ChildWorkflowExecutionTerminatedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeChildWorkflowExecutionTerminated)
					event.value.ChildWorkflowExecutionTerminatedEventAttributes = ChildWorkflowExecutionTerminatedEventAttributes($.pointerValue<apiv1.HistoryEvent_ChildWorkflowExecutionTerminatedEventAttributes>(attr).ChildWorkflowExecutionTerminatedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_SignalExternalWorkflowExecutionInitiatedEventAttributes | $.VarRef<apiv1.HistoryEvent_SignalExternalWorkflowExecutionInitiatedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_SignalExternalWorkflowExecutionInitiatedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_SignalExternalWorkflowExecutionInitiatedEventAttributes | $.VarRef<apiv1.HistoryEvent_SignalExternalWorkflowExecutionInitiatedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_SignalExternalWorkflowExecutionInitiatedEventAttributes | $.VarRef<apiv1.HistoryEvent_SignalExternalWorkflowExecutionInitiatedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_SignalExternalWorkflowExecutionInitiatedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeSignalExternalWorkflowExecutionInitiated)
					event.value.SignalExternalWorkflowExecutionInitiatedEventAttributes = SignalExternalWorkflowExecutionInitiatedEventAttributes($.pointerValue<apiv1.HistoryEvent_SignalExternalWorkflowExecutionInitiatedEventAttributes>(attr).SignalExternalWorkflowExecutionInitiatedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_SignalExternalWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_SignalExternalWorkflowExecutionFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_SignalExternalWorkflowExecutionFailedEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_SignalExternalWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_SignalExternalWorkflowExecutionFailedEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_SignalExternalWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.HistoryEvent_SignalExternalWorkflowExecutionFailedEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_SignalExternalWorkflowExecutionFailedEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeSignalExternalWorkflowExecutionFailed)
					event.value.SignalExternalWorkflowExecutionFailedEventAttributes = SignalExternalWorkflowExecutionFailedEventAttributes($.pointerValue<apiv1.HistoryEvent_SignalExternalWorkflowExecutionFailedEventAttributes>(attr).SignalExternalWorkflowExecutionFailedEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_ExternalWorkflowExecutionSignaledEventAttributes | $.VarRef<apiv1.HistoryEvent_ExternalWorkflowExecutionSignaledEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ExternalWorkflowExecutionSignaledEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_ExternalWorkflowExecutionSignaledEventAttributes | $.VarRef<apiv1.HistoryEvent_ExternalWorkflowExecutionSignaledEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_ExternalWorkflowExecutionSignaledEventAttributes | $.VarRef<apiv1.HistoryEvent_ExternalWorkflowExecutionSignaledEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_ExternalWorkflowExecutionSignaledEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeExternalWorkflowExecutionSignaled)
					event.value.ExternalWorkflowExecutionSignaledEventAttributes = ExternalWorkflowExecutionSignaledEventAttributes($.pointerValue<apiv1.HistoryEvent_ExternalWorkflowExecutionSignaledEventAttributes>(attr).ExternalWorkflowExecutionSignaledEventAttributes)
				}
				break
			case $.typeAssert<apiv1.HistoryEvent_UpsertWorkflowSearchAttributesEventAttributes | $.VarRef<apiv1.HistoryEvent_UpsertWorkflowSearchAttributesEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_UpsertWorkflowSearchAttributesEventAttributes")).ok:
				{
					let attr: apiv1.HistoryEvent_UpsertWorkflowSearchAttributesEventAttributes | $.VarRef<apiv1.HistoryEvent_UpsertWorkflowSearchAttributesEventAttributes> | null = $.typeAssert<apiv1.HistoryEvent_UpsertWorkflowSearchAttributesEventAttributes | $.VarRef<apiv1.HistoryEvent_UpsertWorkflowSearchAttributesEventAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.HistoryEvent_UpsertWorkflowSearchAttributesEventAttributes")).value
					event.value.EventType = shared.EventType_Ptr(shared.EventTypeUpsertWorkflowSearchAttributes)
					event.value.UpsertWorkflowSearchAttributesEventAttributes = UpsertWorkflowSearchAttributesEventAttributes($.pointerValue<apiv1.HistoryEvent_UpsertWorkflowSearchAttributesEventAttributes>(attr).UpsertWorkflowSearchAttributesEventAttributes)
				}
				break
			default:
				{
					let attr: any = __goscriptTypeSwitchValue
					$.panic("unknown event type")
				}
				break
		}
	}

	return event
}

export function ActivityTaskCancelRequestedEventAttributes(t: apiv1.ActivityTaskCancelRequestedEventAttributes | $.VarRef<apiv1.ActivityTaskCancelRequestedEventAttributes> | null): shared.ActivityTaskCancelRequestedEventAttributes | $.VarRef<shared.ActivityTaskCancelRequestedEventAttributes> | null {
	const t$: apiv1.ActivityTaskCancelRequestedEventAttributes = t == null ? $.pointerTarget<apiv1.ActivityTaskCancelRequestedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ActivityTaskCancelRequestedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return new shared.ActivityTaskCancelRequestedEventAttributes({ActivityId: $.fieldRef((t$ as apiv1.ActivityTaskCancelRequestedEventAttributes)._fields, "ActivityId"), DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.ActivityTaskCancelRequestedEventAttributes)._fields, "DecisionTaskCompletedEventId")})
}

export function ActivityTaskCanceledEventAttributes(t: apiv1.ActivityTaskCanceledEventAttributes | $.VarRef<apiv1.ActivityTaskCanceledEventAttributes> | null): shared.ActivityTaskCanceledEventAttributes | $.VarRef<shared.ActivityTaskCanceledEventAttributes> | null {
	const t$: apiv1.ActivityTaskCanceledEventAttributes = t == null ? $.pointerTarget<apiv1.ActivityTaskCanceledEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ActivityTaskCanceledEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField2 = __goscript_types.Payload((t$ as apiv1.ActivityTaskCanceledEventAttributes).Details); return new shared.ActivityTaskCanceledEventAttributes({Details: __goscriptLiteralField2, LatestCancelRequestedEventId: $.fieldRef((t$ as apiv1.ActivityTaskCanceledEventAttributes)._fields, "LatestCancelRequestedEventId"), ScheduledEventId: $.fieldRef((t$ as apiv1.ActivityTaskCanceledEventAttributes)._fields, "ScheduledEventId"), StartedEventId: $.fieldRef((t$ as apiv1.ActivityTaskCanceledEventAttributes)._fields, "StartedEventId"), Identity: $.fieldRef((t$ as apiv1.ActivityTaskCanceledEventAttributes)._fields, "Identity")}) })()
}

export function ActivityTaskCompletedEventAttributes(t: apiv1.ActivityTaskCompletedEventAttributes | $.VarRef<apiv1.ActivityTaskCompletedEventAttributes> | null): shared.ActivityTaskCompletedEventAttributes | $.VarRef<shared.ActivityTaskCompletedEventAttributes> | null {
	const t$: apiv1.ActivityTaskCompletedEventAttributes = t == null ? $.pointerTarget<apiv1.ActivityTaskCompletedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ActivityTaskCompletedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField3 = __goscript_types.Payload((t$ as apiv1.ActivityTaskCompletedEventAttributes).Result); return new shared.ActivityTaskCompletedEventAttributes({Result: __goscriptLiteralField3, ScheduledEventId: $.fieldRef((t$ as apiv1.ActivityTaskCompletedEventAttributes)._fields, "ScheduledEventId"), StartedEventId: $.fieldRef((t$ as apiv1.ActivityTaskCompletedEventAttributes)._fields, "StartedEventId"), Identity: $.fieldRef((t$ as apiv1.ActivityTaskCompletedEventAttributes)._fields, "Identity")}) })()
}

export function ActivityTaskFailedEventAttributes(t: apiv1.ActivityTaskFailedEventAttributes | $.VarRef<apiv1.ActivityTaskFailedEventAttributes> | null): shared.ActivityTaskFailedEventAttributes | $.VarRef<shared.ActivityTaskFailedEventAttributes> | null {
	const t$: apiv1.ActivityTaskFailedEventAttributes = t == null ? $.pointerTarget<apiv1.ActivityTaskFailedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ActivityTaskFailedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField4 = __goscript_types.FailureReason((t$ as apiv1.ActivityTaskFailedEventAttributes).Failure); const __goscriptLiteralField5 = __goscript_types.FailureDetails((t$ as apiv1.ActivityTaskFailedEventAttributes).Failure); const __goscriptLiteralField6 = __goscript_types.FailureOptions((t$ as apiv1.ActivityTaskFailedEventAttributes).Failure); return new shared.ActivityTaskFailedEventAttributes({Reason: __goscriptLiteralField4, Details: __goscriptLiteralField5, FailureOptions: __goscriptLiteralField6, ScheduledEventId: $.fieldRef((t$ as apiv1.ActivityTaskFailedEventAttributes)._fields, "ScheduledEventId"), StartedEventId: $.fieldRef((t$ as apiv1.ActivityTaskFailedEventAttributes)._fields, "StartedEventId"), Identity: $.fieldRef((t$ as apiv1.ActivityTaskFailedEventAttributes)._fields, "Identity")}) })()
}

export function ActivityTaskScheduledEventAttributes(t: apiv1.ActivityTaskScheduledEventAttributes | $.VarRef<apiv1.ActivityTaskScheduledEventAttributes> | null): shared.ActivityTaskScheduledEventAttributes | $.VarRef<shared.ActivityTaskScheduledEventAttributes> | null {
	const t$: apiv1.ActivityTaskScheduledEventAttributes = t == null ? $.pointerTarget<apiv1.ActivityTaskScheduledEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ActivityTaskScheduledEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField7 = __goscript_types.ActivityType((t$ as apiv1.ActivityTaskScheduledEventAttributes).ActivityType); const __goscriptLiteralField8 = __goscript_types.TaskList((t$ as apiv1.ActivityTaskScheduledEventAttributes).TaskList); const __goscriptLiteralField9 = __goscript_types.Payload((t$ as apiv1.ActivityTaskScheduledEventAttributes).Input); const __goscriptLiteralField10 = __goscript_helpers.durationToSeconds((t$ as apiv1.ActivityTaskScheduledEventAttributes).ScheduleToCloseTimeout); const __goscriptLiteralField11 = __goscript_helpers.durationToSeconds((t$ as apiv1.ActivityTaskScheduledEventAttributes).ScheduleToStartTimeout); const __goscriptLiteralField12 = __goscript_helpers.durationToSeconds((t$ as apiv1.ActivityTaskScheduledEventAttributes).StartToCloseTimeout); const __goscriptLiteralField13 = __goscript_helpers.durationToSeconds((t$ as apiv1.ActivityTaskScheduledEventAttributes).HeartbeatTimeout); const __goscriptLiteralField14 = __goscript_types.RetryPolicy((t$ as apiv1.ActivityTaskScheduledEventAttributes).RetryPolicy); const __goscriptLiteralField15 = __goscript_types.Header((t$ as apiv1.ActivityTaskScheduledEventAttributes).Header); return new shared.ActivityTaskScheduledEventAttributes({ActivityId: $.fieldRef((t$ as apiv1.ActivityTaskScheduledEventAttributes)._fields, "ActivityId"), ActivityType: __goscriptLiteralField7, Domain: $.fieldRef((t$ as apiv1.ActivityTaskScheduledEventAttributes)._fields, "Domain"), TaskList: __goscriptLiteralField8, Input: __goscriptLiteralField9, ScheduleToCloseTimeoutSeconds: __goscriptLiteralField10, ScheduleToStartTimeoutSeconds: __goscriptLiteralField11, StartToCloseTimeoutSeconds: __goscriptLiteralField12, HeartbeatTimeoutSeconds: __goscriptLiteralField13, DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.ActivityTaskScheduledEventAttributes)._fields, "DecisionTaskCompletedEventId"), RetryPolicy: __goscriptLiteralField14, Header: __goscriptLiteralField15}) })()
}

export function ActivityTaskStartedEventAttributes(t: apiv1.ActivityTaskStartedEventAttributes | $.VarRef<apiv1.ActivityTaskStartedEventAttributes> | null): shared.ActivityTaskStartedEventAttributes | $.VarRef<shared.ActivityTaskStartedEventAttributes> | null {
	const t$: apiv1.ActivityTaskStartedEventAttributes = t == null ? $.pointerTarget<apiv1.ActivityTaskStartedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ActivityTaskStartedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField16 = __goscript_types.FailureReason((t$ as apiv1.ActivityTaskStartedEventAttributes).LastFailure); const __goscriptLiteralField17 = __goscript_types.FailureDetails((t$ as apiv1.ActivityTaskStartedEventAttributes).LastFailure); const __goscriptLiteralField18 = __goscript_types.FailureOptions((t$ as apiv1.ActivityTaskStartedEventAttributes).LastFailure); return new shared.ActivityTaskStartedEventAttributes({ScheduledEventId: $.fieldRef((t$ as apiv1.ActivityTaskStartedEventAttributes)._fields, "ScheduledEventId"), Identity: $.fieldRef((t$ as apiv1.ActivityTaskStartedEventAttributes)._fields, "Identity"), RequestId: $.fieldRef((t$ as apiv1.ActivityTaskStartedEventAttributes)._fields, "RequestId"), Attempt: $.fieldRef((t$ as apiv1.ActivityTaskStartedEventAttributes)._fields, "Attempt"), LastFailureReason: __goscriptLiteralField16, LastFailureDetails: __goscriptLiteralField17, LastFailureOptions: __goscriptLiteralField18}) })()
}

export function ActivityTaskTimedOutEventAttributes(t: apiv1.ActivityTaskTimedOutEventAttributes | $.VarRef<apiv1.ActivityTaskTimedOutEventAttributes> | null): shared.ActivityTaskTimedOutEventAttributes | $.VarRef<shared.ActivityTaskTimedOutEventAttributes> | null {
	const t$: apiv1.ActivityTaskTimedOutEventAttributes = t == null ? $.pointerTarget<apiv1.ActivityTaskTimedOutEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ActivityTaskTimedOutEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField19 = __goscript_types.Payload((t$ as apiv1.ActivityTaskTimedOutEventAttributes).Details); const __goscriptLiteralField20 = __goscript__enum.TimeoutType((t$ as apiv1.ActivityTaskTimedOutEventAttributes).TimeoutType); const __goscriptLiteralField21 = __goscript_types.FailureReason((t$ as apiv1.ActivityTaskTimedOutEventAttributes).LastFailure); const __goscriptLiteralField22 = __goscript_types.FailureDetails((t$ as apiv1.ActivityTaskTimedOutEventAttributes).LastFailure); const __goscriptLiteralField23 = __goscript_types.FailureOptions((t$ as apiv1.ActivityTaskTimedOutEventAttributes).LastFailure); return new shared.ActivityTaskTimedOutEventAttributes({Details: __goscriptLiteralField19, ScheduledEventId: $.fieldRef((t$ as apiv1.ActivityTaskTimedOutEventAttributes)._fields, "ScheduledEventId"), StartedEventId: $.fieldRef((t$ as apiv1.ActivityTaskTimedOutEventAttributes)._fields, "StartedEventId"), TimeoutType: __goscriptLiteralField20, LastFailureReason: __goscriptLiteralField21, LastFailureDetails: __goscriptLiteralField22, LastFailureOptions: __goscriptLiteralField23}) })()
}

export function CancelTimerFailedEventAttributes(t: apiv1.CancelTimerFailedEventAttributes | $.VarRef<apiv1.CancelTimerFailedEventAttributes> | null): shared.CancelTimerFailedEventAttributes | $.VarRef<shared.CancelTimerFailedEventAttributes> | null {
	const t$: apiv1.CancelTimerFailedEventAttributes = t == null ? $.pointerTarget<apiv1.CancelTimerFailedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.CancelTimerFailedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return new shared.CancelTimerFailedEventAttributes({TimerId: $.fieldRef((t$ as apiv1.CancelTimerFailedEventAttributes)._fields, "TimerId"), Cause: $.fieldRef((t$ as apiv1.CancelTimerFailedEventAttributes)._fields, "Cause"), DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.CancelTimerFailedEventAttributes)._fields, "DecisionTaskCompletedEventId"), Identity: $.fieldRef((t$ as apiv1.CancelTimerFailedEventAttributes)._fields, "Identity")})
}

export function ChildWorkflowExecutionCanceledEventAttributes(t: apiv1.ChildWorkflowExecutionCanceledEventAttributes | $.VarRef<apiv1.ChildWorkflowExecutionCanceledEventAttributes> | null): shared.ChildWorkflowExecutionCanceledEventAttributes | $.VarRef<shared.ChildWorkflowExecutionCanceledEventAttributes> | null {
	const t$: apiv1.ChildWorkflowExecutionCanceledEventAttributes = t == null ? $.pointerTarget<apiv1.ChildWorkflowExecutionCanceledEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ChildWorkflowExecutionCanceledEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField24 = __goscript_types.WorkflowExecution((t$ as apiv1.ChildWorkflowExecutionCanceledEventAttributes).WorkflowExecution); const __goscriptLiteralField25 = __goscript_types.WorkflowType((t$ as apiv1.ChildWorkflowExecutionCanceledEventAttributes).WorkflowType); const __goscriptLiteralField26 = __goscript_types.Payload((t$ as apiv1.ChildWorkflowExecutionCanceledEventAttributes).Details); return new shared.ChildWorkflowExecutionCanceledEventAttributes({Domain: $.fieldRef((t$ as apiv1.ChildWorkflowExecutionCanceledEventAttributes)._fields, "Domain"), WorkflowExecution: __goscriptLiteralField24, WorkflowType: __goscriptLiteralField25, InitiatedEventId: $.fieldRef((t$ as apiv1.ChildWorkflowExecutionCanceledEventAttributes)._fields, "InitiatedEventId"), StartedEventId: $.fieldRef((t$ as apiv1.ChildWorkflowExecutionCanceledEventAttributes)._fields, "StartedEventId"), Details: __goscriptLiteralField26}) })()
}

export function ChildWorkflowExecutionCompletedEventAttributes(t: apiv1.ChildWorkflowExecutionCompletedEventAttributes | $.VarRef<apiv1.ChildWorkflowExecutionCompletedEventAttributes> | null): shared.ChildWorkflowExecutionCompletedEventAttributes | $.VarRef<shared.ChildWorkflowExecutionCompletedEventAttributes> | null {
	const t$: apiv1.ChildWorkflowExecutionCompletedEventAttributes = t == null ? $.pointerTarget<apiv1.ChildWorkflowExecutionCompletedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ChildWorkflowExecutionCompletedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField27 = __goscript_types.WorkflowExecution((t$ as apiv1.ChildWorkflowExecutionCompletedEventAttributes).WorkflowExecution); const __goscriptLiteralField28 = __goscript_types.WorkflowType((t$ as apiv1.ChildWorkflowExecutionCompletedEventAttributes).WorkflowType); const __goscriptLiteralField29 = __goscript_types.Payload((t$ as apiv1.ChildWorkflowExecutionCompletedEventAttributes).Result); return new shared.ChildWorkflowExecutionCompletedEventAttributes({Domain: $.fieldRef((t$ as apiv1.ChildWorkflowExecutionCompletedEventAttributes)._fields, "Domain"), WorkflowExecution: __goscriptLiteralField27, WorkflowType: __goscriptLiteralField28, InitiatedEventId: $.fieldRef((t$ as apiv1.ChildWorkflowExecutionCompletedEventAttributes)._fields, "InitiatedEventId"), StartedEventId: $.fieldRef((t$ as apiv1.ChildWorkflowExecutionCompletedEventAttributes)._fields, "StartedEventId"), Result: __goscriptLiteralField29}) })()
}

export function ChildWorkflowExecutionFailedEventAttributes(t: apiv1.ChildWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.ChildWorkflowExecutionFailedEventAttributes> | null): shared.ChildWorkflowExecutionFailedEventAttributes | $.VarRef<shared.ChildWorkflowExecutionFailedEventAttributes> | null {
	const t$: apiv1.ChildWorkflowExecutionFailedEventAttributes = t == null ? $.pointerTarget<apiv1.ChildWorkflowExecutionFailedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ChildWorkflowExecutionFailedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField30 = __goscript_types.WorkflowExecution((t$ as apiv1.ChildWorkflowExecutionFailedEventAttributes).WorkflowExecution); const __goscriptLiteralField31 = __goscript_types.WorkflowType((t$ as apiv1.ChildWorkflowExecutionFailedEventAttributes).WorkflowType); const __goscriptLiteralField32 = __goscript_types.FailureReason((t$ as apiv1.ChildWorkflowExecutionFailedEventAttributes).Failure); const __goscriptLiteralField33 = __goscript_types.FailureDetails((t$ as apiv1.ChildWorkflowExecutionFailedEventAttributes).Failure); return new shared.ChildWorkflowExecutionFailedEventAttributes({Domain: $.fieldRef((t$ as apiv1.ChildWorkflowExecutionFailedEventAttributes)._fields, "Domain"), WorkflowExecution: __goscriptLiteralField30, WorkflowType: __goscriptLiteralField31, InitiatedEventId: $.fieldRef((t$ as apiv1.ChildWorkflowExecutionFailedEventAttributes)._fields, "InitiatedEventId"), StartedEventId: $.fieldRef((t$ as apiv1.ChildWorkflowExecutionFailedEventAttributes)._fields, "StartedEventId"), Reason: __goscriptLiteralField32, Details: __goscriptLiteralField33}) })()
}

export function ChildWorkflowExecutionStartedEventAttributes(t: apiv1.ChildWorkflowExecutionStartedEventAttributes | $.VarRef<apiv1.ChildWorkflowExecutionStartedEventAttributes> | null): shared.ChildWorkflowExecutionStartedEventAttributes | $.VarRef<shared.ChildWorkflowExecutionStartedEventAttributes> | null {
	const t$: apiv1.ChildWorkflowExecutionStartedEventAttributes = t == null ? $.pointerTarget<apiv1.ChildWorkflowExecutionStartedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ChildWorkflowExecutionStartedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField34 = __goscript_types.WorkflowExecution((t$ as apiv1.ChildWorkflowExecutionStartedEventAttributes).WorkflowExecution); const __goscriptLiteralField35 = __goscript_types.WorkflowType((t$ as apiv1.ChildWorkflowExecutionStartedEventAttributes).WorkflowType); const __goscriptLiteralField36 = __goscript_types.Header((t$ as apiv1.ChildWorkflowExecutionStartedEventAttributes).Header); return new shared.ChildWorkflowExecutionStartedEventAttributes({Domain: $.fieldRef((t$ as apiv1.ChildWorkflowExecutionStartedEventAttributes)._fields, "Domain"), WorkflowExecution: __goscriptLiteralField34, WorkflowType: __goscriptLiteralField35, InitiatedEventId: $.fieldRef((t$ as apiv1.ChildWorkflowExecutionStartedEventAttributes)._fields, "InitiatedEventId"), Header: __goscriptLiteralField36}) })()
}

export function ChildWorkflowExecutionTerminatedEventAttributes(t: apiv1.ChildWorkflowExecutionTerminatedEventAttributes | $.VarRef<apiv1.ChildWorkflowExecutionTerminatedEventAttributes> | null): shared.ChildWorkflowExecutionTerminatedEventAttributes | $.VarRef<shared.ChildWorkflowExecutionTerminatedEventAttributes> | null {
	const t$: apiv1.ChildWorkflowExecutionTerminatedEventAttributes = t == null ? $.pointerTarget<apiv1.ChildWorkflowExecutionTerminatedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ChildWorkflowExecutionTerminatedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField37 = __goscript_types.WorkflowExecution((t$ as apiv1.ChildWorkflowExecutionTerminatedEventAttributes).WorkflowExecution); const __goscriptLiteralField38 = __goscript_types.WorkflowType((t$ as apiv1.ChildWorkflowExecutionTerminatedEventAttributes).WorkflowType); return new shared.ChildWorkflowExecutionTerminatedEventAttributes({Domain: $.fieldRef((t$ as apiv1.ChildWorkflowExecutionTerminatedEventAttributes)._fields, "Domain"), WorkflowExecution: __goscriptLiteralField37, WorkflowType: __goscriptLiteralField38, InitiatedEventId: $.fieldRef((t$ as apiv1.ChildWorkflowExecutionTerminatedEventAttributes)._fields, "InitiatedEventId"), StartedEventId: $.fieldRef((t$ as apiv1.ChildWorkflowExecutionTerminatedEventAttributes)._fields, "StartedEventId")}) })()
}

export function ChildWorkflowExecutionTimedOutEventAttributes(t: apiv1.ChildWorkflowExecutionTimedOutEventAttributes | $.VarRef<apiv1.ChildWorkflowExecutionTimedOutEventAttributes> | null): shared.ChildWorkflowExecutionTimedOutEventAttributes | $.VarRef<shared.ChildWorkflowExecutionTimedOutEventAttributes> | null {
	const t$: apiv1.ChildWorkflowExecutionTimedOutEventAttributes = t == null ? $.pointerTarget<apiv1.ChildWorkflowExecutionTimedOutEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ChildWorkflowExecutionTimedOutEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField39 = __goscript_types.WorkflowExecution((t$ as apiv1.ChildWorkflowExecutionTimedOutEventAttributes).WorkflowExecution); const __goscriptLiteralField40 = __goscript_types.WorkflowType((t$ as apiv1.ChildWorkflowExecutionTimedOutEventAttributes).WorkflowType); const __goscriptLiteralField41 = __goscript__enum.TimeoutType((t$ as apiv1.ChildWorkflowExecutionTimedOutEventAttributes).TimeoutType); return new shared.ChildWorkflowExecutionTimedOutEventAttributes({Domain: $.fieldRef((t$ as apiv1.ChildWorkflowExecutionTimedOutEventAttributes)._fields, "Domain"), WorkflowExecution: __goscriptLiteralField39, WorkflowType: __goscriptLiteralField40, InitiatedEventId: $.fieldRef((t$ as apiv1.ChildWorkflowExecutionTimedOutEventAttributes)._fields, "InitiatedEventId"), StartedEventId: $.fieldRef((t$ as apiv1.ChildWorkflowExecutionTimedOutEventAttributes)._fields, "StartedEventId"), TimeoutType: __goscriptLiteralField41}) })()
}

export function DecisionTaskFailedEventAttributes(t: apiv1.DecisionTaskFailedEventAttributes | $.VarRef<apiv1.DecisionTaskFailedEventAttributes> | null): shared.DecisionTaskFailedEventAttributes | $.VarRef<shared.DecisionTaskFailedEventAttributes> | null {
	const t$: apiv1.DecisionTaskFailedEventAttributes = t == null ? $.pointerTarget<apiv1.DecisionTaskFailedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.DecisionTaskFailedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField42 = __goscript__enum.DecisionTaskFailedCause((t$ as apiv1.DecisionTaskFailedEventAttributes).Cause); const __goscriptLiteralField43 = __goscript_types.FailureReason((t$ as apiv1.DecisionTaskFailedEventAttributes).Failure); const __goscriptLiteralField44 = __goscript_types.FailureDetails((t$ as apiv1.DecisionTaskFailedEventAttributes).Failure); return new shared.DecisionTaskFailedEventAttributes({ScheduledEventId: $.fieldRef((t$ as apiv1.DecisionTaskFailedEventAttributes)._fields, "ScheduledEventId"), StartedEventId: $.fieldRef((t$ as apiv1.DecisionTaskFailedEventAttributes)._fields, "StartedEventId"), Cause: __goscriptLiteralField42, Reason: __goscriptLiteralField43, Details: __goscriptLiteralField44, Identity: $.fieldRef((t$ as apiv1.DecisionTaskFailedEventAttributes)._fields, "Identity"), BaseRunId: $.fieldRef((t$ as apiv1.DecisionTaskFailedEventAttributes)._fields, "BaseRunId"), NewRunId: $.fieldRef((t$ as apiv1.DecisionTaskFailedEventAttributes)._fields, "NewRunId"), ForkEventVersion: $.fieldRef((t$ as apiv1.DecisionTaskFailedEventAttributes)._fields, "ForkEventVersion"), BinaryChecksum: $.fieldRef((t$ as apiv1.DecisionTaskFailedEventAttributes)._fields, "BinaryChecksum")}) })()
}

export function DecisionTaskScheduledEventAttributes(t: apiv1.DecisionTaskScheduledEventAttributes | $.VarRef<apiv1.DecisionTaskScheduledEventAttributes> | null): shared.DecisionTaskScheduledEventAttributes | $.VarRef<shared.DecisionTaskScheduledEventAttributes> | null {
	const t$: apiv1.DecisionTaskScheduledEventAttributes = t == null ? $.pointerTarget<apiv1.DecisionTaskScheduledEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.DecisionTaskScheduledEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField45 = __goscript_types.TaskList((t$ as apiv1.DecisionTaskScheduledEventAttributes).TaskList); const __goscriptLiteralField46 = __goscript_helpers.durationToSeconds((t$ as apiv1.DecisionTaskScheduledEventAttributes).StartToCloseTimeout); const __goscriptLiteralField47 = common.Int64Ptr($.int64((t$ as apiv1.DecisionTaskScheduledEventAttributes).Attempt)); return new shared.DecisionTaskScheduledEventAttributes({TaskList: __goscriptLiteralField45, StartToCloseTimeoutSeconds: __goscriptLiteralField46, Attempt: __goscriptLiteralField47}) })()
}

export function DecisionTaskStartedEventAttributes(t: apiv1.DecisionTaskStartedEventAttributes | $.VarRef<apiv1.DecisionTaskStartedEventAttributes> | null): shared.DecisionTaskStartedEventAttributes | $.VarRef<shared.DecisionTaskStartedEventAttributes> | null {
	const t$: apiv1.DecisionTaskStartedEventAttributes = t == null ? $.pointerTarget<apiv1.DecisionTaskStartedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.DecisionTaskStartedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return new shared.DecisionTaskStartedEventAttributes({ScheduledEventId: $.fieldRef((t$ as apiv1.DecisionTaskStartedEventAttributes)._fields, "ScheduledEventId"), Identity: $.fieldRef((t$ as apiv1.DecisionTaskStartedEventAttributes)._fields, "Identity"), RequestId: $.fieldRef((t$ as apiv1.DecisionTaskStartedEventAttributes)._fields, "RequestId")})
}

export function DecisionTaskCompletedEventAttributes(t: apiv1.DecisionTaskCompletedEventAttributes | $.VarRef<apiv1.DecisionTaskCompletedEventAttributes> | null): shared.DecisionTaskCompletedEventAttributes | $.VarRef<shared.DecisionTaskCompletedEventAttributes> | null {
	const t$: apiv1.DecisionTaskCompletedEventAttributes = t == null ? $.pointerTarget<apiv1.DecisionTaskCompletedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.DecisionTaskCompletedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return new shared.DecisionTaskCompletedEventAttributes({ScheduledEventId: $.fieldRef((t$ as apiv1.DecisionTaskCompletedEventAttributes)._fields, "ScheduledEventId"), StartedEventId: $.fieldRef((t$ as apiv1.DecisionTaskCompletedEventAttributes)._fields, "StartedEventId"), Identity: $.fieldRef((t$ as apiv1.DecisionTaskCompletedEventAttributes)._fields, "Identity"), BinaryChecksum: $.fieldRef((t$ as apiv1.DecisionTaskCompletedEventAttributes)._fields, "BinaryChecksum"), ExecutionContext: (t$ as apiv1.DecisionTaskCompletedEventAttributes).ExecutionContext})
}

export function DecisionTaskTimedOutEventAttributes(t: apiv1.DecisionTaskTimedOutEventAttributes | $.VarRef<apiv1.DecisionTaskTimedOutEventAttributes> | null): shared.DecisionTaskTimedOutEventAttributes | $.VarRef<shared.DecisionTaskTimedOutEventAttributes> | null {
	const t$: apiv1.DecisionTaskTimedOutEventAttributes = t == null ? $.pointerTarget<apiv1.DecisionTaskTimedOutEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.DecisionTaskTimedOutEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField48 = __goscript__enum.TimeoutType((t$ as apiv1.DecisionTaskTimedOutEventAttributes).TimeoutType); const __goscriptLiteralField49 = __goscript__enum.DecisionTaskTimedOutCause((t$ as apiv1.DecisionTaskTimedOutEventAttributes).Cause); return new shared.DecisionTaskTimedOutEventAttributes({ScheduledEventId: $.fieldRef((t$ as apiv1.DecisionTaskTimedOutEventAttributes)._fields, "ScheduledEventId"), StartedEventId: $.fieldRef((t$ as apiv1.DecisionTaskTimedOutEventAttributes)._fields, "StartedEventId"), TimeoutType: __goscriptLiteralField48, BaseRunId: $.fieldRef((t$ as apiv1.DecisionTaskTimedOutEventAttributes)._fields, "BaseRunId"), NewRunId: $.fieldRef((t$ as apiv1.DecisionTaskTimedOutEventAttributes)._fields, "NewRunId"), ForkEventVersion: $.fieldRef((t$ as apiv1.DecisionTaskTimedOutEventAttributes)._fields, "ForkEventVersion"), Reason: $.fieldRef((t$ as apiv1.DecisionTaskTimedOutEventAttributes)._fields, "Reason"), Cause: __goscriptLiteralField49}) })()
}

export function ExternalWorkflowExecutionCancelRequestedEventAttributes(t: apiv1.ExternalWorkflowExecutionCancelRequestedEventAttributes | $.VarRef<apiv1.ExternalWorkflowExecutionCancelRequestedEventAttributes> | null): shared.ExternalWorkflowExecutionCancelRequestedEventAttributes | $.VarRef<shared.ExternalWorkflowExecutionCancelRequestedEventAttributes> | null {
	const t$: apiv1.ExternalWorkflowExecutionCancelRequestedEventAttributes = t == null ? $.pointerTarget<apiv1.ExternalWorkflowExecutionCancelRequestedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ExternalWorkflowExecutionCancelRequestedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField50 = __goscript_types.WorkflowExecution((t$ as apiv1.ExternalWorkflowExecutionCancelRequestedEventAttributes).WorkflowExecution); return new shared.ExternalWorkflowExecutionCancelRequestedEventAttributes({InitiatedEventId: $.fieldRef((t$ as apiv1.ExternalWorkflowExecutionCancelRequestedEventAttributes)._fields, "InitiatedEventId"), Domain: $.fieldRef((t$ as apiv1.ExternalWorkflowExecutionCancelRequestedEventAttributes)._fields, "Domain"), WorkflowExecution: __goscriptLiteralField50}) })()
}

export function ExternalWorkflowExecutionSignaledEventAttributes(t: apiv1.ExternalWorkflowExecutionSignaledEventAttributes | $.VarRef<apiv1.ExternalWorkflowExecutionSignaledEventAttributes> | null): shared.ExternalWorkflowExecutionSignaledEventAttributes | $.VarRef<shared.ExternalWorkflowExecutionSignaledEventAttributes> | null {
	const t$: apiv1.ExternalWorkflowExecutionSignaledEventAttributes = t == null ? $.pointerTarget<apiv1.ExternalWorkflowExecutionSignaledEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ExternalWorkflowExecutionSignaledEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField51 = __goscript_types.WorkflowExecution((t$ as apiv1.ExternalWorkflowExecutionSignaledEventAttributes).WorkflowExecution); return new shared.ExternalWorkflowExecutionSignaledEventAttributes({InitiatedEventId: $.fieldRef((t$ as apiv1.ExternalWorkflowExecutionSignaledEventAttributes)._fields, "InitiatedEventId"), Domain: $.fieldRef((t$ as apiv1.ExternalWorkflowExecutionSignaledEventAttributes)._fields, "Domain"), WorkflowExecution: __goscriptLiteralField51, Control: (t$ as apiv1.ExternalWorkflowExecutionSignaledEventAttributes).Control}) })()
}

export function MarkerRecordedEventAttributes(t: apiv1.MarkerRecordedEventAttributes | $.VarRef<apiv1.MarkerRecordedEventAttributes> | null): shared.MarkerRecordedEventAttributes | $.VarRef<shared.MarkerRecordedEventAttributes> | null {
	const t$: apiv1.MarkerRecordedEventAttributes = t == null ? $.pointerTarget<apiv1.MarkerRecordedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.MarkerRecordedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField52 = __goscript_types.Payload((t$ as apiv1.MarkerRecordedEventAttributes).Details); const __goscriptLiteralField53 = __goscript_types.Header((t$ as apiv1.MarkerRecordedEventAttributes).Header); return new shared.MarkerRecordedEventAttributes({MarkerName: $.fieldRef((t$ as apiv1.MarkerRecordedEventAttributes)._fields, "MarkerName"), Details: __goscriptLiteralField52, DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.MarkerRecordedEventAttributes)._fields, "DecisionTaskCompletedEventId"), Header: __goscriptLiteralField53}) })()
}

export function RequestCancelActivityTaskFailedEventAttributes(t: apiv1.RequestCancelActivityTaskFailedEventAttributes | $.VarRef<apiv1.RequestCancelActivityTaskFailedEventAttributes> | null): shared.RequestCancelActivityTaskFailedEventAttributes | $.VarRef<shared.RequestCancelActivityTaskFailedEventAttributes> | null {
	const t$: apiv1.RequestCancelActivityTaskFailedEventAttributes = t == null ? $.pointerTarget<apiv1.RequestCancelActivityTaskFailedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RequestCancelActivityTaskFailedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return new shared.RequestCancelActivityTaskFailedEventAttributes({ActivityId: $.fieldRef((t$ as apiv1.RequestCancelActivityTaskFailedEventAttributes)._fields, "ActivityId"), Cause: $.fieldRef((t$ as apiv1.RequestCancelActivityTaskFailedEventAttributes)._fields, "Cause"), DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.RequestCancelActivityTaskFailedEventAttributes)._fields, "DecisionTaskCompletedEventId")})
}

export function RequestCancelExternalWorkflowExecutionFailedEventAttributes(t: apiv1.RequestCancelExternalWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.RequestCancelExternalWorkflowExecutionFailedEventAttributes> | null): shared.RequestCancelExternalWorkflowExecutionFailedEventAttributes | $.VarRef<shared.RequestCancelExternalWorkflowExecutionFailedEventAttributes> | null {
	const t$: apiv1.RequestCancelExternalWorkflowExecutionFailedEventAttributes = t == null ? $.pointerTarget<apiv1.RequestCancelExternalWorkflowExecutionFailedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RequestCancelExternalWorkflowExecutionFailedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField54 = __goscript__enum.CancelExternalWorkflowExecutionFailedCause((t$ as apiv1.RequestCancelExternalWorkflowExecutionFailedEventAttributes).Cause); const __goscriptLiteralField55 = __goscript_types.WorkflowExecution((t$ as apiv1.RequestCancelExternalWorkflowExecutionFailedEventAttributes).WorkflowExecution); return new shared.RequestCancelExternalWorkflowExecutionFailedEventAttributes({Cause: __goscriptLiteralField54, DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.RequestCancelExternalWorkflowExecutionFailedEventAttributes)._fields, "DecisionTaskCompletedEventId"), Domain: $.fieldRef((t$ as apiv1.RequestCancelExternalWorkflowExecutionFailedEventAttributes)._fields, "Domain"), WorkflowExecution: __goscriptLiteralField55, InitiatedEventId: $.fieldRef((t$ as apiv1.RequestCancelExternalWorkflowExecutionFailedEventAttributes)._fields, "InitiatedEventId"), Control: (t$ as apiv1.RequestCancelExternalWorkflowExecutionFailedEventAttributes).Control}) })()
}

export function RequestCancelExternalWorkflowExecutionInitiatedEventAttributes(t: apiv1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes | $.VarRef<apiv1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes> | null): shared.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes | $.VarRef<shared.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes> | null {
	const t$: apiv1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = t == null ? $.pointerTarget<apiv1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField56 = __goscript_types.WorkflowExecution((t$ as apiv1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes).WorkflowExecution); return new shared.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes({DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes)._fields, "DecisionTaskCompletedEventId"), Domain: $.fieldRef((t$ as apiv1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes)._fields, "Domain"), WorkflowExecution: __goscriptLiteralField56, Control: (t$ as apiv1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes).Control, ChildWorkflowOnly: $.fieldRef((t$ as apiv1.RequestCancelExternalWorkflowExecutionInitiatedEventAttributes)._fields, "ChildWorkflowOnly")}) })()
}

export function SignalExternalWorkflowExecutionFailedEventAttributes(t: apiv1.SignalExternalWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.SignalExternalWorkflowExecutionFailedEventAttributes> | null): shared.SignalExternalWorkflowExecutionFailedEventAttributes | $.VarRef<shared.SignalExternalWorkflowExecutionFailedEventAttributes> | null {
	const t$: apiv1.SignalExternalWorkflowExecutionFailedEventAttributes = t == null ? $.pointerTarget<apiv1.SignalExternalWorkflowExecutionFailedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.SignalExternalWorkflowExecutionFailedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField57 = __goscript__enum.SignalExternalWorkflowExecutionFailedCause((t$ as apiv1.SignalExternalWorkflowExecutionFailedEventAttributes).Cause); const __goscriptLiteralField58 = __goscript_types.WorkflowExecution((t$ as apiv1.SignalExternalWorkflowExecutionFailedEventAttributes).WorkflowExecution); return new shared.SignalExternalWorkflowExecutionFailedEventAttributes({Cause: __goscriptLiteralField57, DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.SignalExternalWorkflowExecutionFailedEventAttributes)._fields, "DecisionTaskCompletedEventId"), Domain: $.fieldRef((t$ as apiv1.SignalExternalWorkflowExecutionFailedEventAttributes)._fields, "Domain"), WorkflowExecution: __goscriptLiteralField58, InitiatedEventId: $.fieldRef((t$ as apiv1.SignalExternalWorkflowExecutionFailedEventAttributes)._fields, "InitiatedEventId"), Control: (t$ as apiv1.SignalExternalWorkflowExecutionFailedEventAttributes).Control}) })()
}

export function SignalExternalWorkflowExecutionInitiatedEventAttributes(t: apiv1.SignalExternalWorkflowExecutionInitiatedEventAttributes | $.VarRef<apiv1.SignalExternalWorkflowExecutionInitiatedEventAttributes> | null): shared.SignalExternalWorkflowExecutionInitiatedEventAttributes | $.VarRef<shared.SignalExternalWorkflowExecutionInitiatedEventAttributes> | null {
	const t$: apiv1.SignalExternalWorkflowExecutionInitiatedEventAttributes = t == null ? $.pointerTarget<apiv1.SignalExternalWorkflowExecutionInitiatedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.SignalExternalWorkflowExecutionInitiatedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField59 = __goscript_types.WorkflowExecution((t$ as apiv1.SignalExternalWorkflowExecutionInitiatedEventAttributes).WorkflowExecution); const __goscriptLiteralField60 = __goscript_types.Payload((t$ as apiv1.SignalExternalWorkflowExecutionInitiatedEventAttributes).Input); return new shared.SignalExternalWorkflowExecutionInitiatedEventAttributes({DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.SignalExternalWorkflowExecutionInitiatedEventAttributes)._fields, "DecisionTaskCompletedEventId"), Domain: $.fieldRef((t$ as apiv1.SignalExternalWorkflowExecutionInitiatedEventAttributes)._fields, "Domain"), WorkflowExecution: __goscriptLiteralField59, SignalName: $.fieldRef((t$ as apiv1.SignalExternalWorkflowExecutionInitiatedEventAttributes)._fields, "SignalName"), Input: __goscriptLiteralField60, Control: (t$ as apiv1.SignalExternalWorkflowExecutionInitiatedEventAttributes).Control, ChildWorkflowOnly: $.fieldRef((t$ as apiv1.SignalExternalWorkflowExecutionInitiatedEventAttributes)._fields, "ChildWorkflowOnly")}) })()
}

export function StartChildWorkflowExecutionFailedEventAttributes(t: apiv1.StartChildWorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.StartChildWorkflowExecutionFailedEventAttributes> | null): shared.StartChildWorkflowExecutionFailedEventAttributes | $.VarRef<shared.StartChildWorkflowExecutionFailedEventAttributes> | null {
	const t$: apiv1.StartChildWorkflowExecutionFailedEventAttributes = t == null ? $.pointerTarget<apiv1.StartChildWorkflowExecutionFailedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.StartChildWorkflowExecutionFailedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField61 = __goscript_types.WorkflowType((t$ as apiv1.StartChildWorkflowExecutionFailedEventAttributes).WorkflowType); const __goscriptLiteralField62 = __goscript__enum.ChildWorkflowExecutionFailedCause((t$ as apiv1.StartChildWorkflowExecutionFailedEventAttributes).Cause); return new shared.StartChildWorkflowExecutionFailedEventAttributes({Domain: $.fieldRef((t$ as apiv1.StartChildWorkflowExecutionFailedEventAttributes)._fields, "Domain"), WorkflowId: $.fieldRef((t$ as apiv1.StartChildWorkflowExecutionFailedEventAttributes)._fields, "WorkflowId"), WorkflowType: __goscriptLiteralField61, Cause: __goscriptLiteralField62, Control: (t$ as apiv1.StartChildWorkflowExecutionFailedEventAttributes).Control, InitiatedEventId: $.fieldRef((t$ as apiv1.StartChildWorkflowExecutionFailedEventAttributes)._fields, "InitiatedEventId"), DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.StartChildWorkflowExecutionFailedEventAttributes)._fields, "DecisionTaskCompletedEventId")}) })()
}

export function StartChildWorkflowExecutionInitiatedEventAttributes(t: apiv1.StartChildWorkflowExecutionInitiatedEventAttributes | $.VarRef<apiv1.StartChildWorkflowExecutionInitiatedEventAttributes> | null): shared.StartChildWorkflowExecutionInitiatedEventAttributes | $.VarRef<shared.StartChildWorkflowExecutionInitiatedEventAttributes> | null {
	const t$: apiv1.StartChildWorkflowExecutionInitiatedEventAttributes = t == null ? $.pointerTarget<apiv1.StartChildWorkflowExecutionInitiatedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.StartChildWorkflowExecutionInitiatedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField63 = __goscript_types.WorkflowType((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes).WorkflowType); const __goscriptLiteralField64 = __goscript_types.TaskList((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes).TaskList); const __goscriptLiteralField65 = __goscript_types.Payload((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes).Input); const __goscriptLiteralField66 = __goscript_helpers.durationToSeconds((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes).ExecutionStartToCloseTimeout); const __goscriptLiteralField67 = __goscript_helpers.durationToSeconds((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes).TaskStartToCloseTimeout); const __goscriptLiteralField68 = __goscript__enum.ParentClosePolicy((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes).ParentClosePolicy); const __goscriptLiteralField69 = __goscript__enum.WorkflowIDReusePolicy((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes).WorkflowIdReusePolicy); const __goscriptLiteralField70 = __goscript_types.RetryPolicy((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes).RetryPolicy); const __goscriptLiteralField71 = __goscript_types.Header((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes).Header); const __goscriptLiteralField72 = __goscript_types.Memo((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes).Memo); const __goscriptLiteralField73 = __goscript_types.SearchAttributes((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes).SearchAttributes); const __goscriptLiteralField74 = __goscript_helpers.durationToSeconds((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes).DelayStart); const __goscriptLiteralField75 = __goscript_helpers.durationToSeconds((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes).JitterStart); const __goscriptLiteralField76 = __goscript_helpers.timeToUnixNano((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes).FirstRunAt); return new shared.StartChildWorkflowExecutionInitiatedEventAttributes({Domain: $.fieldRef((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes)._fields, "Domain"), WorkflowId: $.fieldRef((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes)._fields, "WorkflowId"), WorkflowType: __goscriptLiteralField63, TaskList: __goscriptLiteralField64, Input: __goscriptLiteralField65, ExecutionStartToCloseTimeoutSeconds: __goscriptLiteralField66, TaskStartToCloseTimeoutSeconds: __goscriptLiteralField67, ParentClosePolicy: __goscriptLiteralField68, Control: (t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes).Control, DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes)._fields, "DecisionTaskCompletedEventId"), WorkflowIdReusePolicy: __goscriptLiteralField69, RetryPolicy: __goscriptLiteralField70, CronSchedule: $.fieldRef((t$ as apiv1.StartChildWorkflowExecutionInitiatedEventAttributes)._fields, "CronSchedule"), Header: __goscriptLiteralField71, Memo: __goscriptLiteralField72, SearchAttributes: __goscriptLiteralField73, DelayStartSeconds: __goscriptLiteralField74, JitterStartSeconds: __goscriptLiteralField75, FirstRunAtTimestamp: __goscriptLiteralField76}) })()
}

export function TimerCanceledEventAttributes(t: apiv1.TimerCanceledEventAttributes | $.VarRef<apiv1.TimerCanceledEventAttributes> | null): shared.TimerCanceledEventAttributes | $.VarRef<shared.TimerCanceledEventAttributes> | null {
	const t$: apiv1.TimerCanceledEventAttributes = t == null ? $.pointerTarget<apiv1.TimerCanceledEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.TimerCanceledEventAttributes>(t)
	if (t == null) {
		return null
	}
	return new shared.TimerCanceledEventAttributes({TimerId: $.fieldRef((t$ as apiv1.TimerCanceledEventAttributes)._fields, "TimerId"), StartedEventId: $.fieldRef((t$ as apiv1.TimerCanceledEventAttributes)._fields, "StartedEventId"), DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.TimerCanceledEventAttributes)._fields, "DecisionTaskCompletedEventId"), Identity: $.fieldRef((t$ as apiv1.TimerCanceledEventAttributes)._fields, "Identity")})
}

export function TimerFiredEventAttributes(t: apiv1.TimerFiredEventAttributes | $.VarRef<apiv1.TimerFiredEventAttributes> | null): shared.TimerFiredEventAttributes | $.VarRef<shared.TimerFiredEventAttributes> | null {
	const t$: apiv1.TimerFiredEventAttributes = t == null ? $.pointerTarget<apiv1.TimerFiredEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.TimerFiredEventAttributes>(t)
	if (t == null) {
		return null
	}
	return new shared.TimerFiredEventAttributes({TimerId: $.fieldRef((t$ as apiv1.TimerFiredEventAttributes)._fields, "TimerId"), StartedEventId: $.fieldRef((t$ as apiv1.TimerFiredEventAttributes)._fields, "StartedEventId")})
}

export function TimerStartedEventAttributes(t: apiv1.TimerStartedEventAttributes | $.VarRef<apiv1.TimerStartedEventAttributes> | null): shared.TimerStartedEventAttributes | $.VarRef<shared.TimerStartedEventAttributes> | null {
	const t$: apiv1.TimerStartedEventAttributes = t == null ? $.pointerTarget<apiv1.TimerStartedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.TimerStartedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField77 = __goscript_helpers.int32To64(__goscript_helpers.durationToSeconds((t$ as apiv1.TimerStartedEventAttributes).StartToFireTimeout)); return new shared.TimerStartedEventAttributes({TimerId: $.fieldRef((t$ as apiv1.TimerStartedEventAttributes)._fields, "TimerId"), StartToFireTimeoutSeconds: __goscriptLiteralField77, DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.TimerStartedEventAttributes)._fields, "DecisionTaskCompletedEventId")}) })()
}

export function UpsertWorkflowSearchAttributesEventAttributes(t: apiv1.UpsertWorkflowSearchAttributesEventAttributes | $.VarRef<apiv1.UpsertWorkflowSearchAttributesEventAttributes> | null): shared.UpsertWorkflowSearchAttributesEventAttributes | $.VarRef<shared.UpsertWorkflowSearchAttributesEventAttributes> | null {
	const t$: apiv1.UpsertWorkflowSearchAttributesEventAttributes = t == null ? $.pointerTarget<apiv1.UpsertWorkflowSearchAttributesEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.UpsertWorkflowSearchAttributesEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField78 = __goscript_types.SearchAttributes((t$ as apiv1.UpsertWorkflowSearchAttributesEventAttributes).SearchAttributes); return new shared.UpsertWorkflowSearchAttributesEventAttributes({DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.UpsertWorkflowSearchAttributesEventAttributes)._fields, "DecisionTaskCompletedEventId"), SearchAttributes: __goscriptLiteralField78}) })()
}

export function WorkflowExecutionCancelRequestedEventAttributes(t: apiv1.WorkflowExecutionCancelRequestedEventAttributes | $.VarRef<apiv1.WorkflowExecutionCancelRequestedEventAttributes> | null): shared.WorkflowExecutionCancelRequestedEventAttributes | $.VarRef<shared.WorkflowExecutionCancelRequestedEventAttributes> | null {
	const t$: apiv1.WorkflowExecutionCancelRequestedEventAttributes = t == null ? $.pointerTarget<apiv1.WorkflowExecutionCancelRequestedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.WorkflowExecutionCancelRequestedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField79 = __goscript_types.ExternalInitiatedID((t$ as apiv1.WorkflowExecutionCancelRequestedEventAttributes).ExternalExecutionInfo); const __goscriptLiteralField80 = __goscript_types.ExternalWorkflowExecution((t$ as apiv1.WorkflowExecutionCancelRequestedEventAttributes).ExternalExecutionInfo); return new shared.WorkflowExecutionCancelRequestedEventAttributes({Cause: $.fieldRef((t$ as apiv1.WorkflowExecutionCancelRequestedEventAttributes)._fields, "Cause"), ExternalInitiatedEventId: __goscriptLiteralField79, ExternalWorkflowExecution: __goscriptLiteralField80, Identity: $.fieldRef((t$ as apiv1.WorkflowExecutionCancelRequestedEventAttributes)._fields, "Identity")}) })()
}

export function WorkflowExecutionCanceledEventAttributes(t: apiv1.WorkflowExecutionCanceledEventAttributes | $.VarRef<apiv1.WorkflowExecutionCanceledEventAttributes> | null): shared.WorkflowExecutionCanceledEventAttributes | $.VarRef<shared.WorkflowExecutionCanceledEventAttributes> | null {
	const t$: apiv1.WorkflowExecutionCanceledEventAttributes = t == null ? $.pointerTarget<apiv1.WorkflowExecutionCanceledEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.WorkflowExecutionCanceledEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField81 = __goscript_types.Payload((t$ as apiv1.WorkflowExecutionCanceledEventAttributes).Details); return new shared.WorkflowExecutionCanceledEventAttributes({DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.WorkflowExecutionCanceledEventAttributes)._fields, "DecisionTaskCompletedEventId"), Details: __goscriptLiteralField81}) })()
}

export function WorkflowExecutionCompletedEventAttributes(t: apiv1.WorkflowExecutionCompletedEventAttributes | $.VarRef<apiv1.WorkflowExecutionCompletedEventAttributes> | null): shared.WorkflowExecutionCompletedEventAttributes | $.VarRef<shared.WorkflowExecutionCompletedEventAttributes> | null {
	const t$: apiv1.WorkflowExecutionCompletedEventAttributes = t == null ? $.pointerTarget<apiv1.WorkflowExecutionCompletedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.WorkflowExecutionCompletedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField82 = __goscript_types.Payload((t$ as apiv1.WorkflowExecutionCompletedEventAttributes).Result); return new shared.WorkflowExecutionCompletedEventAttributes({Result: __goscriptLiteralField82, DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.WorkflowExecutionCompletedEventAttributes)._fields, "DecisionTaskCompletedEventId")}) })()
}

export function WorkflowExecutionContinuedAsNewEventAttributes(t: apiv1.WorkflowExecutionContinuedAsNewEventAttributes | $.VarRef<apiv1.WorkflowExecutionContinuedAsNewEventAttributes> | null): shared.WorkflowExecutionContinuedAsNewEventAttributes | $.VarRef<shared.WorkflowExecutionContinuedAsNewEventAttributes> | null {
	const t$: apiv1.WorkflowExecutionContinuedAsNewEventAttributes = t == null ? $.pointerTarget<apiv1.WorkflowExecutionContinuedAsNewEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.WorkflowExecutionContinuedAsNewEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField83 = __goscript_types.WorkflowType((t$ as apiv1.WorkflowExecutionContinuedAsNewEventAttributes).WorkflowType); const __goscriptLiteralField84 = __goscript_types.TaskList((t$ as apiv1.WorkflowExecutionContinuedAsNewEventAttributes).TaskList); const __goscriptLiteralField85 = __goscript_types.Payload((t$ as apiv1.WorkflowExecutionContinuedAsNewEventAttributes).Input); const __goscriptLiteralField86 = __goscript_helpers.durationToSeconds((t$ as apiv1.WorkflowExecutionContinuedAsNewEventAttributes).ExecutionStartToCloseTimeout); const __goscriptLiteralField87 = __goscript_helpers.durationToSeconds((t$ as apiv1.WorkflowExecutionContinuedAsNewEventAttributes).TaskStartToCloseTimeout); const __goscriptLiteralField88 = __goscript_helpers.durationToSeconds((t$ as apiv1.WorkflowExecutionContinuedAsNewEventAttributes).BackoffStartInterval); const __goscriptLiteralField89 = __goscript__enum.ContinueAsNewInitiator((t$ as apiv1.WorkflowExecutionContinuedAsNewEventAttributes).Initiator); const __goscriptLiteralField90 = __goscript_types.FailureReason((t$ as apiv1.WorkflowExecutionContinuedAsNewEventAttributes).Failure); const __goscriptLiteralField91 = __goscript_types.FailureDetails((t$ as apiv1.WorkflowExecutionContinuedAsNewEventAttributes).Failure); const __goscriptLiteralField92 = __goscript_types.Payload((t$ as apiv1.WorkflowExecutionContinuedAsNewEventAttributes).LastCompletionResult); const __goscriptLiteralField93 = __goscript_types.Header((t$ as apiv1.WorkflowExecutionContinuedAsNewEventAttributes).Header); const __goscriptLiteralField94 = __goscript_types.Memo((t$ as apiv1.WorkflowExecutionContinuedAsNewEventAttributes).Memo); const __goscriptLiteralField95 = __goscript_types.SearchAttributes((t$ as apiv1.WorkflowExecutionContinuedAsNewEventAttributes).SearchAttributes); return new shared.WorkflowExecutionContinuedAsNewEventAttributes({NewExecutionRunId: $.fieldRef((t$ as apiv1.WorkflowExecutionContinuedAsNewEventAttributes)._fields, "NewExecutionRunId"), WorkflowType: __goscriptLiteralField83, TaskList: __goscriptLiteralField84, Input: __goscriptLiteralField85, ExecutionStartToCloseTimeoutSeconds: __goscriptLiteralField86, TaskStartToCloseTimeoutSeconds: __goscriptLiteralField87, DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.WorkflowExecutionContinuedAsNewEventAttributes)._fields, "DecisionTaskCompletedEventId"), BackoffStartIntervalInSeconds: __goscriptLiteralField88, Initiator: __goscriptLiteralField89, FailureReason: __goscriptLiteralField90, FailureDetails: __goscriptLiteralField91, LastCompletionResult: __goscriptLiteralField92, Header: __goscriptLiteralField93, Memo: __goscriptLiteralField94, SearchAttributes: __goscriptLiteralField95}) })()
}

export function WorkflowExecutionFailedEventAttributes(t: apiv1.WorkflowExecutionFailedEventAttributes | $.VarRef<apiv1.WorkflowExecutionFailedEventAttributes> | null): shared.WorkflowExecutionFailedEventAttributes | $.VarRef<shared.WorkflowExecutionFailedEventAttributes> | null {
	const t$: apiv1.WorkflowExecutionFailedEventAttributes = t == null ? $.pointerTarget<apiv1.WorkflowExecutionFailedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.WorkflowExecutionFailedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField96 = __goscript_types.FailureReason((t$ as apiv1.WorkflowExecutionFailedEventAttributes).Failure); const __goscriptLiteralField97 = __goscript_types.FailureDetails((t$ as apiv1.WorkflowExecutionFailedEventAttributes).Failure); return new shared.WorkflowExecutionFailedEventAttributes({Reason: __goscriptLiteralField96, Details: __goscriptLiteralField97, DecisionTaskCompletedEventId: $.fieldRef((t$ as apiv1.WorkflowExecutionFailedEventAttributes)._fields, "DecisionTaskCompletedEventId")}) })()
}

export function WorkflowExecutionSignaledEventAttributes(t: apiv1.WorkflowExecutionSignaledEventAttributes | $.VarRef<apiv1.WorkflowExecutionSignaledEventAttributes> | null): shared.WorkflowExecutionSignaledEventAttributes | $.VarRef<shared.WorkflowExecutionSignaledEventAttributes> | null {
	const t$: apiv1.WorkflowExecutionSignaledEventAttributes = t == null ? $.pointerTarget<apiv1.WorkflowExecutionSignaledEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.WorkflowExecutionSignaledEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField98 = __goscript_types.Payload((t$ as apiv1.WorkflowExecutionSignaledEventAttributes).Input); return new shared.WorkflowExecutionSignaledEventAttributes({SignalName: $.fieldRef((t$ as apiv1.WorkflowExecutionSignaledEventAttributes)._fields, "SignalName"), Input: __goscriptLiteralField98, Identity: $.fieldRef((t$ as apiv1.WorkflowExecutionSignaledEventAttributes)._fields, "Identity")}) })()
}

export function WorkflowExecutionStartedEventAttributes(t: apiv1.WorkflowExecutionStartedEventAttributes | $.VarRef<apiv1.WorkflowExecutionStartedEventAttributes> | null): shared.WorkflowExecutionStartedEventAttributes | $.VarRef<shared.WorkflowExecutionStartedEventAttributes> | null {
	const t$: apiv1.WorkflowExecutionStartedEventAttributes = t == null ? $.pointerTarget<apiv1.WorkflowExecutionStartedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.WorkflowExecutionStartedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField99 = __goscript_types.WorkflowType((t$ as apiv1.WorkflowExecutionStartedEventAttributes).WorkflowType); const __goscriptLiteralField100 = __goscript_types.ParentDomainName((t$ as apiv1.WorkflowExecutionStartedEventAttributes).ParentExecutionInfo); const __goscriptLiteralField101 = __goscript_types.ParentWorkflowExecution((t$ as apiv1.WorkflowExecutionStartedEventAttributes).ParentExecutionInfo); const __goscriptLiteralField102 = __goscript_types.ParentInitiatedID((t$ as apiv1.WorkflowExecutionStartedEventAttributes).ParentExecutionInfo); const __goscriptLiteralField103 = __goscript_types.TaskList((t$ as apiv1.WorkflowExecutionStartedEventAttributes).TaskList); const __goscriptLiteralField104 = __goscript_types.Payload((t$ as apiv1.WorkflowExecutionStartedEventAttributes).Input); const __goscriptLiteralField105 = __goscript_helpers.durationToSeconds((t$ as apiv1.WorkflowExecutionStartedEventAttributes).ExecutionStartToCloseTimeout); const __goscriptLiteralField106 = __goscript_helpers.durationToSeconds((t$ as apiv1.WorkflowExecutionStartedEventAttributes).TaskStartToCloseTimeout); const __goscriptLiteralField107 = __goscript__enum.ContinueAsNewInitiator((t$ as apiv1.WorkflowExecutionStartedEventAttributes).Initiator); const __goscriptLiteralField108 = __goscript_types.FailureReason((t$ as apiv1.WorkflowExecutionStartedEventAttributes).ContinuedFailure); const __goscriptLiteralField109 = __goscript_types.FailureDetails((t$ as apiv1.WorkflowExecutionStartedEventAttributes).ContinuedFailure); const __goscriptLiteralField110 = __goscript_types.Payload((t$ as apiv1.WorkflowExecutionStartedEventAttributes).LastCompletionResult); const __goscriptLiteralField111 = __goscript_types.RetryPolicy((t$ as apiv1.WorkflowExecutionStartedEventAttributes).RetryPolicy); const __goscriptLiteralField112 = __goscript_helpers.timeToUnixNano((t$ as apiv1.WorkflowExecutionStartedEventAttributes).ExpirationTime); const __goscriptLiteralField113 = __goscript_helpers.durationToSeconds((t$ as apiv1.WorkflowExecutionStartedEventAttributes).FirstDecisionTaskBackoff); const __goscriptLiteralField114 = __goscript_types.Memo((t$ as apiv1.WorkflowExecutionStartedEventAttributes).Memo); const __goscriptLiteralField115 = __goscript_types.SearchAttributes((t$ as apiv1.WorkflowExecutionStartedEventAttributes).SearchAttributes); const __goscriptLiteralField116 = __goscript_types.ResetPoints((t$ as apiv1.WorkflowExecutionStartedEventAttributes).PrevAutoResetPoints); const __goscriptLiteralField117 = __goscript_types.Header((t$ as apiv1.WorkflowExecutionStartedEventAttributes).Header); return new shared.WorkflowExecutionStartedEventAttributes({WorkflowType: __goscriptLiteralField99, ParentWorkflowDomain: __goscriptLiteralField100, ParentWorkflowExecution: __goscriptLiteralField101, ParentInitiatedEventId: __goscriptLiteralField102, TaskList: __goscriptLiteralField103, Input: __goscriptLiteralField104, ExecutionStartToCloseTimeoutSeconds: __goscriptLiteralField105, TaskStartToCloseTimeoutSeconds: __goscriptLiteralField106, ContinuedExecutionRunId: $.fieldRef((t$ as apiv1.WorkflowExecutionStartedEventAttributes)._fields, "ContinuedExecutionRunId"), Initiator: __goscriptLiteralField107, ContinuedFailureReason: __goscriptLiteralField108, ContinuedFailureDetails: __goscriptLiteralField109, LastCompletionResult: __goscriptLiteralField110, OriginalExecutionRunId: $.fieldRef((t$ as apiv1.WorkflowExecutionStartedEventAttributes)._fields, "OriginalExecutionRunId"), Identity: $.fieldRef((t$ as apiv1.WorkflowExecutionStartedEventAttributes)._fields, "Identity"), FirstExecutionRunId: $.fieldRef((t$ as apiv1.WorkflowExecutionStartedEventAttributes)._fields, "FirstExecutionRunId"), RetryPolicy: __goscriptLiteralField111, Attempt: $.fieldRef((t$ as apiv1.WorkflowExecutionStartedEventAttributes)._fields, "Attempt"), ExpirationTimestamp: __goscriptLiteralField112, CronSchedule: $.fieldRef((t$ as apiv1.WorkflowExecutionStartedEventAttributes)._fields, "CronSchedule"), FirstDecisionTaskBackoffSeconds: __goscriptLiteralField113, Memo: __goscriptLiteralField114, SearchAttributes: __goscriptLiteralField115, PrevAutoResetPoints: __goscriptLiteralField116, Header: __goscriptLiteralField117}) })()
}

export function WorkflowExecutionTerminatedEventAttributes(t: apiv1.WorkflowExecutionTerminatedEventAttributes | $.VarRef<apiv1.WorkflowExecutionTerminatedEventAttributes> | null): shared.WorkflowExecutionTerminatedEventAttributes | $.VarRef<shared.WorkflowExecutionTerminatedEventAttributes> | null {
	const t$: apiv1.WorkflowExecutionTerminatedEventAttributes = t == null ? $.pointerTarget<apiv1.WorkflowExecutionTerminatedEventAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.WorkflowExecutionTerminatedEventAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField118 = __goscript_types.Payload((t$ as apiv1.WorkflowExecutionTerminatedEventAttributes).Details); return new shared.WorkflowExecutionTerminatedEventAttributes({Reason: $.fieldRef((t$ as apiv1.WorkflowExecutionTerminatedEventAttributes)._fields, "Reason"), Details: __goscriptLiteralField118, Identity: $.fieldRef((t$ as apiv1.WorkflowExecutionTerminatedEventAttributes)._fields, "Identity")}) })()
}

export function WorkflowExecutionTimedOutEventAttributes(t: apiv1.WorkflowExecutionTimedOutEventAttributes | $.VarRef<apiv1.WorkflowExecutionTimedOutEventAttributes> | null): shared.WorkflowExecutionTimedOutEventAttributes | $.VarRef<shared.WorkflowExecutionTimedOutEventAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField119 = __goscript__enum.TimeoutType($.pointerValue<apiv1.WorkflowExecutionTimedOutEventAttributes>(t).TimeoutType); return new shared.WorkflowExecutionTimedOutEventAttributes({TimeoutType: __goscriptLiteralField119}) })()
}
