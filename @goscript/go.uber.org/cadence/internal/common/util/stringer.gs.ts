// Generated file based on stringer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as s from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

export async function anyToString(d: any): globalThis.Promise<string> {
	let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(d)))
	switch ($.markAsStructValue($.cloneStructValue(v)).Kind()) {
		case reflect.Ptr:
		{
			return anyToString($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Elem())).Interface())
			break
		}
		case reflect.Struct:
		{
			let buf: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
			let t = reflect.TypeOf(d)
			buf.value.WriteString("(")
			for (let i = 0; i < $.markAsStructValue($.cloneStructValue(v)).NumField(); i++) {
				let f = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Field(i)))
				if ($.markAsStructValue($.cloneStructValue(f)).Kind() == 0) {
					continue
				}
				let fieldValue = await valueToString(f)
				if ($.stringLen(fieldValue) == 0) {
					continue
				}
				if (buf.value.Len() > 1) {
					buf.value.WriteString(", ")
				}
				buf.value.WriteString(await fmt.Sprintf("%s:%s", ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Field(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Name, fieldValue))
			}
			buf.value.WriteString(")")
			return buf.value.String()
			break
		}
		default:
		{
			return fmt.Sprint(d)
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function valueToString(v: reflect.Value): globalThis.Promise<string> {
	switch ($.markAsStructValue($.cloneStructValue(v)).Kind()) {
		case reflect.Ptr:
		{
			return valueToString($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Elem())))
			break
		}
		case reflect.Struct:
		{
			return anyToString($.markAsStructValue($.cloneStructValue(v)).Interface())
			break
		}
		case reflect.Invalid:
		{
			return ""
			break
		}
		case reflect.Slice:
		{
			if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8) {
				return fmt.Sprintf("[%v]", $.bytesToString($.markAsStructValue($.cloneStructValue(v)).Bytes()))
			}
			return fmt.Sprintf("[len=%d]", $.basicInterfaceValue($.markAsStructValue($.cloneStructValue(v)).Len(), "int"))
			break
		}
		default:
		{
			return fmt.Sprint($.markAsStructValue($.cloneStructValue(v)).Interface())
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function HistoryEventToString(e: s.HistoryEvent | $.VarRef<s.HistoryEvent> | null): globalThis.Promise<string> {
	let data = getHistoryEventData(e)

	return $.concatString(($.concatString(await s.EventType_String((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e))), ": ")), await anyToString(data))
}

export function getHistoryEventData(e: s.HistoryEvent | $.VarRef<s.HistoryEvent> | null): any {
	const e$: s.HistoryEvent = e == null ? $.pointerTarget<s.HistoryEvent>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<s.HistoryEvent>(e)
	switch ((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as s.HistoryEvent).GetEventType() : s.HistoryEvent.prototype.GetEventType.call(e))) {
		case s.EventTypeWorkflowExecutionStarted:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).WorkflowExecutionStartedEventAttributes, "*shared.WorkflowExecutionStartedEventAttributes", /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionStartedEventAttributes"))
			break
		}
		case s.EventTypeWorkflowExecutionCompleted:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).WorkflowExecutionCompletedEventAttributes, "*shared.WorkflowExecutionCompletedEventAttributes", /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionCompletedEventAttributes"))
			break
		}
		case s.EventTypeWorkflowExecutionFailed:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).WorkflowExecutionFailedEventAttributes, "*shared.WorkflowExecutionFailedEventAttributes", /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionFailedEventAttributes"))
			break
		}
		case s.EventTypeWorkflowExecutionTimedOut:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).WorkflowExecutionTimedOutEventAttributes, "*shared.WorkflowExecutionTimedOutEventAttributes", /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionTimedOutEventAttributes"))
			break
		}
		case s.EventTypeDecisionTaskScheduled:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).DecisionTaskScheduledEventAttributes, "*shared.DecisionTaskScheduledEventAttributes", /* @__PURE__ */ $.pointerType("shared.DecisionTaskScheduledEventAttributes"))
			break
		}
		case s.EventTypeDecisionTaskStarted:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).DecisionTaskStartedEventAttributes, "*shared.DecisionTaskStartedEventAttributes", /* @__PURE__ */ $.pointerType("shared.DecisionTaskStartedEventAttributes"))
			break
		}
		case s.EventTypeDecisionTaskCompleted:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).DecisionTaskCompletedEventAttributes, "*shared.DecisionTaskCompletedEventAttributes", /* @__PURE__ */ $.pointerType("shared.DecisionTaskCompletedEventAttributes"))
			break
		}
		case s.EventTypeDecisionTaskTimedOut:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).DecisionTaskTimedOutEventAttributes, "*shared.DecisionTaskTimedOutEventAttributes", /* @__PURE__ */ $.pointerType("shared.DecisionTaskTimedOutEventAttributes"))
			break
		}
		case s.EventTypeActivityTaskScheduled:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).ActivityTaskScheduledEventAttributes, "*shared.ActivityTaskScheduledEventAttributes", /* @__PURE__ */ $.pointerType("shared.ActivityTaskScheduledEventAttributes"))
			break
		}
		case s.EventTypeActivityTaskStarted:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).ActivityTaskStartedEventAttributes, "*shared.ActivityTaskStartedEventAttributes", /* @__PURE__ */ $.pointerType("shared.ActivityTaskStartedEventAttributes"))
			break
		}
		case s.EventTypeActivityTaskCompleted:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).ActivityTaskCompletedEventAttributes, "*shared.ActivityTaskCompletedEventAttributes", /* @__PURE__ */ $.pointerType("shared.ActivityTaskCompletedEventAttributes"))
			break
		}
		case s.EventTypeActivityTaskFailed:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).ActivityTaskFailedEventAttributes, "*shared.ActivityTaskFailedEventAttributes", /* @__PURE__ */ $.pointerType("shared.ActivityTaskFailedEventAttributes"))
			break
		}
		case s.EventTypeActivityTaskTimedOut:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).ActivityTaskTimedOutEventAttributes, "*shared.ActivityTaskTimedOutEventAttributes", /* @__PURE__ */ $.pointerType("shared.ActivityTaskTimedOutEventAttributes"))
			break
		}
		case s.EventTypeActivityTaskCancelRequested:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).ActivityTaskCancelRequestedEventAttributes, "*shared.ActivityTaskCancelRequestedEventAttributes", /* @__PURE__ */ $.pointerType("shared.ActivityTaskCancelRequestedEventAttributes"))
			break
		}
		case s.EventTypeRequestCancelActivityTaskFailed:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).RequestCancelActivityTaskFailedEventAttributes, "*shared.RequestCancelActivityTaskFailedEventAttributes", /* @__PURE__ */ $.pointerType("shared.RequestCancelActivityTaskFailedEventAttributes"))
			break
		}
		case s.EventTypeActivityTaskCanceled:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).ActivityTaskCanceledEventAttributes, "*shared.ActivityTaskCanceledEventAttributes", /* @__PURE__ */ $.pointerType("shared.ActivityTaskCanceledEventAttributes"))
			break
		}
		case s.EventTypeTimerStarted:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).TimerStartedEventAttributes, "*shared.TimerStartedEventAttributes", /* @__PURE__ */ $.pointerType("shared.TimerStartedEventAttributes"))
			break
		}
		case s.EventTypeTimerFired:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).TimerFiredEventAttributes, "*shared.TimerFiredEventAttributes", /* @__PURE__ */ $.pointerType("shared.TimerFiredEventAttributes"))
			break
		}
		case s.EventTypeCancelTimerFailed:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).CancelTimerFailedEventAttributes, "*shared.CancelTimerFailedEventAttributes", /* @__PURE__ */ $.pointerType("shared.CancelTimerFailedEventAttributes"))
			break
		}
		case s.EventTypeTimerCanceled:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).TimerCanceledEventAttributes, "*shared.TimerCanceledEventAttributes", /* @__PURE__ */ $.pointerType("shared.TimerCanceledEventAttributes"))
			break
		}
		case s.EventTypeMarkerRecorded:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).MarkerRecordedEventAttributes, "*shared.MarkerRecordedEventAttributes", /* @__PURE__ */ $.pointerType("shared.MarkerRecordedEventAttributes"))
			break
		}
		case s.EventTypeWorkflowExecutionTerminated:
		{
			return $.interfaceValue((e$ as s.HistoryEvent).WorkflowExecutionTerminatedEventAttributes, "*shared.WorkflowExecutionTerminatedEventAttributes", /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionTerminatedEventAttributes"))
			break
		}
		default:
		{
			return $.interfaceValue(e, "*shared.HistoryEvent", /* @__PURE__ */ $.pointerType("shared.HistoryEvent"))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function DecisionToString(d: s.Decision | $.VarRef<s.Decision> | null): globalThis.Promise<string> {
	let data = decisionGetData(d)

	return $.concatString(($.concatString(await s.DecisionType_String((d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as s.Decision).GetDecisionType() : s.Decision.prototype.GetDecisionType.call(d))), ": ")), await anyToString(data))
}

export function decisionGetData(d: s.Decision | $.VarRef<s.Decision> | null): any {
	const d$: s.Decision = d == null ? $.pointerTarget<s.Decision>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<s.Decision>(d)
	switch ((d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as s.Decision).GetDecisionType() : s.Decision.prototype.GetDecisionType.call(d))) {
		case s.DecisionTypeScheduleActivityTask:
		{
			return $.interfaceValue((d$ as s.Decision).ScheduleActivityTaskDecisionAttributes, "*shared.ScheduleActivityTaskDecisionAttributes", /* @__PURE__ */ $.pointerType("shared.ScheduleActivityTaskDecisionAttributes"))
			break
		}
		case s.DecisionTypeRequestCancelActivityTask:
		{
			return $.interfaceValue((d$ as s.Decision).RequestCancelActivityTaskDecisionAttributes, "*shared.RequestCancelActivityTaskDecisionAttributes", /* @__PURE__ */ $.pointerType("shared.RequestCancelActivityTaskDecisionAttributes"))
			break
		}
		case s.DecisionTypeStartTimer:
		{
			return $.interfaceValue((d$ as s.Decision).StartTimerDecisionAttributes, "*shared.StartTimerDecisionAttributes", /* @__PURE__ */ $.pointerType("shared.StartTimerDecisionAttributes"))
			break
		}
		case s.DecisionTypeCancelTimer:
		{
			return $.interfaceValue((d$ as s.Decision).CancelTimerDecisionAttributes, "*shared.CancelTimerDecisionAttributes", /* @__PURE__ */ $.pointerType("shared.CancelTimerDecisionAttributes"))
			break
		}
		case s.DecisionTypeCompleteWorkflowExecution:
		{
			return $.interfaceValue((d$ as s.Decision).CompleteWorkflowExecutionDecisionAttributes, "*shared.CompleteWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("shared.CompleteWorkflowExecutionDecisionAttributes"))
			break
		}
		case s.DecisionTypeFailWorkflowExecution:
		{
			return $.interfaceValue((d$ as s.Decision).FailWorkflowExecutionDecisionAttributes, "*shared.FailWorkflowExecutionDecisionAttributes", /* @__PURE__ */ $.pointerType("shared.FailWorkflowExecutionDecisionAttributes"))
			break
		}
		case s.DecisionTypeRecordMarker:
		{
			return $.interfaceValue((d$ as s.Decision).RecordMarkerDecisionAttributes, "*shared.RecordMarkerDecisionAttributes", /* @__PURE__ */ $.pointerType("shared.RecordMarkerDecisionAttributes"))
			break
		}
		default:
		{
			return $.interfaceValue(d, "*shared.Decision", /* @__PURE__ */ $.pointerType("shared.Decision"))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptAwait: any
