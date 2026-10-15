// Generated file based on decision.go
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

export function DecisionArray(t: $.Slice<apiv1.Decision | $.VarRef<apiv1.Decision> | null>): $.Slice<shared.Decision | $.VarRef<shared.Decision> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<shared.Decision | $.VarRef<shared.Decision> | null> = $.makeSlice<shared.Decision | $.VarRef<shared.Decision> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget0 = t, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow0.length; i++) {
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = Decision(((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as apiv1.Decision | $.VarRef<apiv1.Decision> | null))
	}
	return v
}

export function Decision(d: apiv1.Decision | $.VarRef<apiv1.Decision> | null): shared.Decision | $.VarRef<shared.Decision> | null {
	if (d == null) {
		return null
	}
	let decision = $.varRef(new shared.Decision(undefined, true))
	{
		const __goscriptTypeSwitchValue = $.pointerValue<apiv1.Decision>(d).Attributes
		switch (true) {
			case $.typeAssert<apiv1.Decision_ScheduleActivityTaskDecisionAttributes | $.VarRef<apiv1.Decision_ScheduleActivityTaskDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_ScheduleActivityTaskDecisionAttributes")).ok:
				{
					let attr: apiv1.Decision_ScheduleActivityTaskDecisionAttributes | $.VarRef<apiv1.Decision_ScheduleActivityTaskDecisionAttributes> | null = $.typeAssert<apiv1.Decision_ScheduleActivityTaskDecisionAttributes | $.VarRef<apiv1.Decision_ScheduleActivityTaskDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_ScheduleActivityTaskDecisionAttributes")).value
					decision.value.DecisionType = shared.DecisionType_Ptr(shared.DecisionTypeScheduleActivityTask)
					let a: apiv1.ScheduleActivityTaskDecisionAttributes | $.VarRef<apiv1.ScheduleActivityTaskDecisionAttributes> | null = $.pointerValue<apiv1.Decision_ScheduleActivityTaskDecisionAttributes>(attr).ScheduleActivityTaskDecisionAttributes
					let a$: apiv1.ScheduleActivityTaskDecisionAttributes = a == null ? $.pointerTarget<apiv1.ScheduleActivityTaskDecisionAttributes>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<apiv1.ScheduleActivityTaskDecisionAttributes>(a)
					decision.value.ScheduleActivityTaskDecisionAttributes = (() => { const __goscriptLiteralField0 = __goscript_types.ActivityType((a$ as apiv1.ScheduleActivityTaskDecisionAttributes).ActivityType); const __goscriptLiteralField1 = __goscript_types.TaskList((a$ as apiv1.ScheduleActivityTaskDecisionAttributes).TaskList); const __goscriptLiteralField2 = __goscript_types.Payload((a$ as apiv1.ScheduleActivityTaskDecisionAttributes).Input); const __goscriptLiteralField3 = __goscript_helpers.durationToSeconds((a$ as apiv1.ScheduleActivityTaskDecisionAttributes).ScheduleToCloseTimeout); const __goscriptLiteralField4 = __goscript_helpers.durationToSeconds((a$ as apiv1.ScheduleActivityTaskDecisionAttributes).ScheduleToStartTimeout); const __goscriptLiteralField5 = __goscript_helpers.durationToSeconds((a$ as apiv1.ScheduleActivityTaskDecisionAttributes).StartToCloseTimeout); const __goscriptLiteralField6 = __goscript_helpers.durationToSeconds((a$ as apiv1.ScheduleActivityTaskDecisionAttributes).HeartbeatTimeout); const __goscriptLiteralField7 = __goscript_types.RetryPolicy((a$ as apiv1.ScheduleActivityTaskDecisionAttributes).RetryPolicy); const __goscriptLiteralField8 = __goscript_types.Header((a$ as apiv1.ScheduleActivityTaskDecisionAttributes).Header); return new shared.ScheduleActivityTaskDecisionAttributes({ActivityId: $.fieldRef((a$ as apiv1.ScheduleActivityTaskDecisionAttributes)._fields, "ActivityId"), ActivityType: __goscriptLiteralField0, Domain: $.fieldRef((a$ as apiv1.ScheduleActivityTaskDecisionAttributes)._fields, "Domain"), TaskList: __goscriptLiteralField1, Input: __goscriptLiteralField2, ScheduleToCloseTimeoutSeconds: __goscriptLiteralField3, ScheduleToStartTimeoutSeconds: __goscriptLiteralField4, StartToCloseTimeoutSeconds: __goscriptLiteralField5, HeartbeatTimeoutSeconds: __goscriptLiteralField6, RetryPolicy: __goscriptLiteralField7, Header: __goscriptLiteralField8, RequestLocalDispatch: $.fieldRef((a$ as apiv1.ScheduleActivityTaskDecisionAttributes)._fields, "RequestLocalDispatch")}) })()
				}
				break
			case $.typeAssert<apiv1.Decision_StartTimerDecisionAttributes | $.VarRef<apiv1.Decision_StartTimerDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_StartTimerDecisionAttributes")).ok:
				{
					let attr: apiv1.Decision_StartTimerDecisionAttributes | $.VarRef<apiv1.Decision_StartTimerDecisionAttributes> | null = $.typeAssert<apiv1.Decision_StartTimerDecisionAttributes | $.VarRef<apiv1.Decision_StartTimerDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_StartTimerDecisionAttributes")).value
					decision.value.DecisionType = shared.DecisionType_Ptr(shared.DecisionTypeStartTimer)
					let a: apiv1.StartTimerDecisionAttributes | $.VarRef<apiv1.StartTimerDecisionAttributes> | null = $.pointerValue<apiv1.Decision_StartTimerDecisionAttributes>(attr).StartTimerDecisionAttributes
					let a$: apiv1.StartTimerDecisionAttributes = a == null ? $.pointerTarget<apiv1.StartTimerDecisionAttributes>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<apiv1.StartTimerDecisionAttributes>(a)
					decision.value.StartTimerDecisionAttributes = (() => { const __goscriptLiteralField9 = __goscript_helpers.int32To64(__goscript_helpers.durationToSeconds((a$ as apiv1.StartTimerDecisionAttributes).StartToFireTimeout)); return new shared.StartTimerDecisionAttributes({TimerId: $.fieldRef((a$ as apiv1.StartTimerDecisionAttributes)._fields, "TimerId"), StartToFireTimeoutSeconds: __goscriptLiteralField9}) })()
				}
				break
			case $.typeAssert<apiv1.Decision_CompleteWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_CompleteWorkflowExecutionDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_CompleteWorkflowExecutionDecisionAttributes")).ok:
				{
					let attr: apiv1.Decision_CompleteWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_CompleteWorkflowExecutionDecisionAttributes> | null = $.typeAssert<apiv1.Decision_CompleteWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_CompleteWorkflowExecutionDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_CompleteWorkflowExecutionDecisionAttributes")).value
					decision.value.DecisionType = shared.DecisionType_Ptr(shared.DecisionTypeCompleteWorkflowExecution)
					let a: apiv1.CompleteWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.CompleteWorkflowExecutionDecisionAttributes> | null = $.pointerValue<apiv1.Decision_CompleteWorkflowExecutionDecisionAttributes>(attr).CompleteWorkflowExecutionDecisionAttributes
					decision.value.CompleteWorkflowExecutionDecisionAttributes = (() => { const __goscriptLiteralField10 = __goscript_types.Payload($.pointerValue<apiv1.CompleteWorkflowExecutionDecisionAttributes>(a).Result); return new shared.CompleteWorkflowExecutionDecisionAttributes({Result: __goscriptLiteralField10}) })()
				}
				break
			case $.typeAssert<apiv1.Decision_FailWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_FailWorkflowExecutionDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_FailWorkflowExecutionDecisionAttributes")).ok:
				{
					let attr: apiv1.Decision_FailWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_FailWorkflowExecutionDecisionAttributes> | null = $.typeAssert<apiv1.Decision_FailWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_FailWorkflowExecutionDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_FailWorkflowExecutionDecisionAttributes")).value
					decision.value.DecisionType = shared.DecisionType_Ptr(shared.DecisionTypeFailWorkflowExecution)
					let a: apiv1.FailWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.FailWorkflowExecutionDecisionAttributes> | null = $.pointerValue<apiv1.Decision_FailWorkflowExecutionDecisionAttributes>(attr).FailWorkflowExecutionDecisionAttributes
					let a$: apiv1.FailWorkflowExecutionDecisionAttributes = a == null ? $.pointerTarget<apiv1.FailWorkflowExecutionDecisionAttributes>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<apiv1.FailWorkflowExecutionDecisionAttributes>(a)
					decision.value.FailWorkflowExecutionDecisionAttributes = (() => { const __goscriptLiteralField11 = __goscript_types.FailureReason((a$ as apiv1.FailWorkflowExecutionDecisionAttributes).Failure); const __goscriptLiteralField12 = __goscript_types.FailureDetails((a$ as apiv1.FailWorkflowExecutionDecisionAttributes).Failure); return new shared.FailWorkflowExecutionDecisionAttributes({Reason: __goscriptLiteralField11, Details: __goscriptLiteralField12}) })()
				}
				break
			case $.typeAssert<apiv1.Decision_RequestCancelActivityTaskDecisionAttributes | $.VarRef<apiv1.Decision_RequestCancelActivityTaskDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_RequestCancelActivityTaskDecisionAttributes")).ok:
				{
					let attr: apiv1.Decision_RequestCancelActivityTaskDecisionAttributes | $.VarRef<apiv1.Decision_RequestCancelActivityTaskDecisionAttributes> | null = $.typeAssert<apiv1.Decision_RequestCancelActivityTaskDecisionAttributes | $.VarRef<apiv1.Decision_RequestCancelActivityTaskDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_RequestCancelActivityTaskDecisionAttributes")).value
					decision.value.DecisionType = shared.DecisionType_Ptr(shared.DecisionTypeRequestCancelActivityTask)
					let a: apiv1.RequestCancelActivityTaskDecisionAttributes | $.VarRef<apiv1.RequestCancelActivityTaskDecisionAttributes> | null = $.pointerValue<apiv1.Decision_RequestCancelActivityTaskDecisionAttributes>(attr).RequestCancelActivityTaskDecisionAttributes
					decision.value.RequestCancelActivityTaskDecisionAttributes = new shared.RequestCancelActivityTaskDecisionAttributes({ActivityId: $.fieldRef($.pointerValue<apiv1.RequestCancelActivityTaskDecisionAttributes>(a)._fields, "ActivityId")})
				}
				break
			case $.typeAssert<apiv1.Decision_CancelTimerDecisionAttributes | $.VarRef<apiv1.Decision_CancelTimerDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_CancelTimerDecisionAttributes")).ok:
				{
					let attr: apiv1.Decision_CancelTimerDecisionAttributes | $.VarRef<apiv1.Decision_CancelTimerDecisionAttributes> | null = $.typeAssert<apiv1.Decision_CancelTimerDecisionAttributes | $.VarRef<apiv1.Decision_CancelTimerDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_CancelTimerDecisionAttributes")).value
					decision.value.DecisionType = shared.DecisionType_Ptr(shared.DecisionTypeCancelTimer)
					let a: apiv1.CancelTimerDecisionAttributes | $.VarRef<apiv1.CancelTimerDecisionAttributes> | null = $.pointerValue<apiv1.Decision_CancelTimerDecisionAttributes>(attr).CancelTimerDecisionAttributes
					decision.value.CancelTimerDecisionAttributes = new shared.CancelTimerDecisionAttributes({TimerId: $.fieldRef($.pointerValue<apiv1.CancelTimerDecisionAttributes>(a)._fields, "TimerId")})
				}
				break
			case $.typeAssert<apiv1.Decision_CancelWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_CancelWorkflowExecutionDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_CancelWorkflowExecutionDecisionAttributes")).ok:
				{
					let attr: apiv1.Decision_CancelWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_CancelWorkflowExecutionDecisionAttributes> | null = $.typeAssert<apiv1.Decision_CancelWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_CancelWorkflowExecutionDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_CancelWorkflowExecutionDecisionAttributes")).value
					decision.value.DecisionType = shared.DecisionType_Ptr(shared.DecisionTypeCancelWorkflowExecution)
					let a: apiv1.CancelWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.CancelWorkflowExecutionDecisionAttributes> | null = $.pointerValue<apiv1.Decision_CancelWorkflowExecutionDecisionAttributes>(attr).CancelWorkflowExecutionDecisionAttributes
					decision.value.CancelWorkflowExecutionDecisionAttributes = (() => { const __goscriptLiteralField13 = __goscript_types.Payload($.pointerValue<apiv1.CancelWorkflowExecutionDecisionAttributes>(a).Details); return new shared.CancelWorkflowExecutionDecisionAttributes({Details: __goscriptLiteralField13}) })()
				}
				break
			case $.typeAssert<apiv1.Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes")).ok:
				{
					let attr: apiv1.Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = $.typeAssert<apiv1.Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes")).value
					decision.value.DecisionType = shared.DecisionType_Ptr(shared.DecisionTypeRequestCancelExternalWorkflowExecution)
					let a: apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes> | null = $.pointerValue<apiv1.Decision_RequestCancelExternalWorkflowExecutionDecisionAttributes>(attr).RequestCancelExternalWorkflowExecutionDecisionAttributes
					let a$: apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes = a == null ? $.pointerTarget<apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes>(a)
					decision.value.RequestCancelExternalWorkflowExecutionDecisionAttributes = (() => { const __goscriptLiteralField14 = __goscript_types.WorkflowID((a$ as apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes).WorkflowExecution); const __goscriptLiteralField15 = __goscript_types.RunID((a$ as apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes).WorkflowExecution); return new shared.RequestCancelExternalWorkflowExecutionDecisionAttributes({Domain: $.fieldRef((a$ as apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes)._fields, "Domain"), WorkflowId: __goscriptLiteralField14, RunId: __goscriptLiteralField15, Control: (a$ as apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes).Control, ChildWorkflowOnly: $.fieldRef((a$ as apiv1.RequestCancelExternalWorkflowExecutionDecisionAttributes)._fields, "ChildWorkflowOnly")}) })()
				}
				break
			case $.typeAssert<apiv1.Decision_RecordMarkerDecisionAttributes | $.VarRef<apiv1.Decision_RecordMarkerDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_RecordMarkerDecisionAttributes")).ok:
				{
					let attr: apiv1.Decision_RecordMarkerDecisionAttributes | $.VarRef<apiv1.Decision_RecordMarkerDecisionAttributes> | null = $.typeAssert<apiv1.Decision_RecordMarkerDecisionAttributes | $.VarRef<apiv1.Decision_RecordMarkerDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_RecordMarkerDecisionAttributes")).value
					decision.value.DecisionType = shared.DecisionType_Ptr(shared.DecisionTypeRecordMarker)
					let a: apiv1.RecordMarkerDecisionAttributes | $.VarRef<apiv1.RecordMarkerDecisionAttributes> | null = $.pointerValue<apiv1.Decision_RecordMarkerDecisionAttributes>(attr).RecordMarkerDecisionAttributes
					let a$: apiv1.RecordMarkerDecisionAttributes = a == null ? $.pointerTarget<apiv1.RecordMarkerDecisionAttributes>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<apiv1.RecordMarkerDecisionAttributes>(a)
					decision.value.RecordMarkerDecisionAttributes = (() => { const __goscriptLiteralField16 = __goscript_types.Payload((a$ as apiv1.RecordMarkerDecisionAttributes).Details); const __goscriptLiteralField17 = __goscript_types.Header((a$ as apiv1.RecordMarkerDecisionAttributes).Header); return new shared.RecordMarkerDecisionAttributes({MarkerName: $.fieldRef((a$ as apiv1.RecordMarkerDecisionAttributes)._fields, "MarkerName"), Details: __goscriptLiteralField16, Header: __goscriptLiteralField17}) })()
				}
				break
			case $.typeAssert<apiv1.Decision_ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_ContinueAsNewWorkflowExecutionDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_ContinueAsNewWorkflowExecutionDecisionAttributes")).ok:
				{
					let attr: apiv1.Decision_ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_ContinueAsNewWorkflowExecutionDecisionAttributes> | null = $.typeAssert<apiv1.Decision_ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_ContinueAsNewWorkflowExecutionDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_ContinueAsNewWorkflowExecutionDecisionAttributes")).value
					decision.value.DecisionType = shared.DecisionType_Ptr(shared.DecisionTypeContinueAsNewWorkflowExecution)
					let a: apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes> | null = $.pointerValue<apiv1.Decision_ContinueAsNewWorkflowExecutionDecisionAttributes>(attr).ContinueAsNewWorkflowExecutionDecisionAttributes
					let a$: apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes = a == null ? $.pointerTarget<apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes>(a)
					decision.value.ContinueAsNewWorkflowExecutionDecisionAttributes = (() => { const __goscriptLiteralField18 = __goscript_types.WorkflowType((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes).WorkflowType); const __goscriptLiteralField19 = __goscript_types.TaskList((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes).TaskList); const __goscriptLiteralField20 = __goscript_types.Payload((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes).Input); const __goscriptLiteralField21 = __goscript_helpers.durationToSeconds((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes).ExecutionStartToCloseTimeout); const __goscriptLiteralField22 = __goscript_helpers.durationToSeconds((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes).TaskStartToCloseTimeout); const __goscriptLiteralField23 = __goscript_helpers.durationToSeconds((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes).BackoffStartInterval); const __goscriptLiteralField24 = __goscript_types.RetryPolicy((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes).RetryPolicy); const __goscriptLiteralField25 = __goscript__enum.ContinueAsNewInitiator((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes).Initiator); const __goscriptLiteralField26 = __goscript_types.FailureReason((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes).Failure); const __goscriptLiteralField27 = __goscript_types.FailureDetails((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes).Failure); const __goscriptLiteralField28 = __goscript_types.Payload((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes).LastCompletionResult); const __goscriptLiteralField29 = __goscript_types.Header((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes).Header); const __goscriptLiteralField30 = __goscript_types.Memo((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes).Memo); const __goscriptLiteralField31 = __goscript_types.SearchAttributes((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes).SearchAttributes); const __goscriptLiteralField32 = __goscript_helpers.durationToSeconds((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes).JitterStart); const __goscriptLiteralField33 = __goscript__enum.CronOverlapPolicy((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes).CronOverlapPolicy); const __goscriptLiteralField34 = __goscript_types.ActiveClusterSelectionPolicy((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes).ActiveClusterSelectionPolicy); return new shared.ContinueAsNewWorkflowExecutionDecisionAttributes({WorkflowType: __goscriptLiteralField18, TaskList: __goscriptLiteralField19, Input: __goscriptLiteralField20, ExecutionStartToCloseTimeoutSeconds: __goscriptLiteralField21, TaskStartToCloseTimeoutSeconds: __goscriptLiteralField22, BackoffStartIntervalInSeconds: __goscriptLiteralField23, RetryPolicy: __goscriptLiteralField24, Initiator: __goscriptLiteralField25, FailureReason: __goscriptLiteralField26, FailureDetails: __goscriptLiteralField27, LastCompletionResult: __goscriptLiteralField28, CronSchedule: $.fieldRef((a$ as apiv1.ContinueAsNewWorkflowExecutionDecisionAttributes)._fields, "CronSchedule"), Header: __goscriptLiteralField29, Memo: __goscriptLiteralField30, SearchAttributes: __goscriptLiteralField31, JitterStartSeconds: __goscriptLiteralField32, CronOverlapPolicy: __goscriptLiteralField33, ActiveClusterSelectionPolicy: __goscriptLiteralField34}) })()
				}
				break
			case $.typeAssert<apiv1.Decision_StartChildWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_StartChildWorkflowExecutionDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_StartChildWorkflowExecutionDecisionAttributes")).ok:
				{
					let attr: apiv1.Decision_StartChildWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_StartChildWorkflowExecutionDecisionAttributes> | null = $.typeAssert<apiv1.Decision_StartChildWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_StartChildWorkflowExecutionDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_StartChildWorkflowExecutionDecisionAttributes")).value
					decision.value.DecisionType = shared.DecisionType_Ptr(shared.DecisionTypeStartChildWorkflowExecution)
					let a: apiv1.StartChildWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.StartChildWorkflowExecutionDecisionAttributes> | null = $.pointerValue<apiv1.Decision_StartChildWorkflowExecutionDecisionAttributes>(attr).StartChildWorkflowExecutionDecisionAttributes
					let a$: apiv1.StartChildWorkflowExecutionDecisionAttributes = a == null ? $.pointerTarget<apiv1.StartChildWorkflowExecutionDecisionAttributes>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<apiv1.StartChildWorkflowExecutionDecisionAttributes>(a)
					decision.value.StartChildWorkflowExecutionDecisionAttributes = (() => { const __goscriptLiteralField35 = __goscript_types.WorkflowType((a$ as apiv1.StartChildWorkflowExecutionDecisionAttributes).WorkflowType); const __goscriptLiteralField36 = __goscript_types.TaskList((a$ as apiv1.StartChildWorkflowExecutionDecisionAttributes).TaskList); const __goscriptLiteralField37 = __goscript_types.Payload((a$ as apiv1.StartChildWorkflowExecutionDecisionAttributes).Input); const __goscriptLiteralField38 = __goscript_helpers.durationToSeconds((a$ as apiv1.StartChildWorkflowExecutionDecisionAttributes).ExecutionStartToCloseTimeout); const __goscriptLiteralField39 = __goscript_helpers.durationToSeconds((a$ as apiv1.StartChildWorkflowExecutionDecisionAttributes).TaskStartToCloseTimeout); const __goscriptLiteralField40 = __goscript__enum.ParentClosePolicy((a$ as apiv1.StartChildWorkflowExecutionDecisionAttributes).ParentClosePolicy); const __goscriptLiteralField41 = __goscript__enum.WorkflowIDReusePolicy((a$ as apiv1.StartChildWorkflowExecutionDecisionAttributes).WorkflowIdReusePolicy); const __goscriptLiteralField42 = __goscript_types.RetryPolicy((a$ as apiv1.StartChildWorkflowExecutionDecisionAttributes).RetryPolicy); const __goscriptLiteralField43 = __goscript_types.Header((a$ as apiv1.StartChildWorkflowExecutionDecisionAttributes).Header); const __goscriptLiteralField44 = __goscript_types.Memo((a$ as apiv1.StartChildWorkflowExecutionDecisionAttributes).Memo); const __goscriptLiteralField45 = __goscript_types.SearchAttributes((a$ as apiv1.StartChildWorkflowExecutionDecisionAttributes).SearchAttributes); const __goscriptLiteralField46 = __goscript__enum.CronOverlapPolicy((a$ as apiv1.StartChildWorkflowExecutionDecisionAttributes).CronOverlapPolicy); const __goscriptLiteralField47 = __goscript_types.ActiveClusterSelectionPolicy((a$ as apiv1.StartChildWorkflowExecutionDecisionAttributes).ActiveClusterSelectionPolicy); return new shared.StartChildWorkflowExecutionDecisionAttributes({Domain: $.fieldRef((a$ as apiv1.StartChildWorkflowExecutionDecisionAttributes)._fields, "Domain"), WorkflowId: $.fieldRef((a$ as apiv1.StartChildWorkflowExecutionDecisionAttributes)._fields, "WorkflowId"), WorkflowType: __goscriptLiteralField35, TaskList: __goscriptLiteralField36, Input: __goscriptLiteralField37, ExecutionStartToCloseTimeoutSeconds: __goscriptLiteralField38, TaskStartToCloseTimeoutSeconds: __goscriptLiteralField39, ParentClosePolicy: __goscriptLiteralField40, Control: (a$ as apiv1.StartChildWorkflowExecutionDecisionAttributes).Control, WorkflowIdReusePolicy: __goscriptLiteralField41, RetryPolicy: __goscriptLiteralField42, CronSchedule: $.fieldRef((a$ as apiv1.StartChildWorkflowExecutionDecisionAttributes)._fields, "CronSchedule"), Header: __goscriptLiteralField43, Memo: __goscriptLiteralField44, SearchAttributes: __goscriptLiteralField45, CronOverlapPolicy: __goscriptLiteralField46, ActiveClusterSelectionPolicy: __goscriptLiteralField47}) })()
				}
				break
			case $.typeAssert<apiv1.Decision_SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_SignalExternalWorkflowExecutionDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_SignalExternalWorkflowExecutionDecisionAttributes")).ok:
				{
					let attr: apiv1.Decision_SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_SignalExternalWorkflowExecutionDecisionAttributes> | null = $.typeAssert<apiv1.Decision_SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.Decision_SignalExternalWorkflowExecutionDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_SignalExternalWorkflowExecutionDecisionAttributes")).value
					decision.value.DecisionType = shared.DecisionType_Ptr(shared.DecisionTypeSignalExternalWorkflowExecution)
					let a: apiv1.SignalExternalWorkflowExecutionDecisionAttributes | $.VarRef<apiv1.SignalExternalWorkflowExecutionDecisionAttributes> | null = $.pointerValue<apiv1.Decision_SignalExternalWorkflowExecutionDecisionAttributes>(attr).SignalExternalWorkflowExecutionDecisionAttributes
					let a$: apiv1.SignalExternalWorkflowExecutionDecisionAttributes = a == null ? $.pointerTarget<apiv1.SignalExternalWorkflowExecutionDecisionAttributes>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<apiv1.SignalExternalWorkflowExecutionDecisionAttributes>(a)
					decision.value.SignalExternalWorkflowExecutionDecisionAttributes = (() => { const __goscriptLiteralField48 = __goscript_types.WorkflowExecution((a$ as apiv1.SignalExternalWorkflowExecutionDecisionAttributes).WorkflowExecution); const __goscriptLiteralField49 = __goscript_types.Payload((a$ as apiv1.SignalExternalWorkflowExecutionDecisionAttributes).Input); return new shared.SignalExternalWorkflowExecutionDecisionAttributes({Domain: $.fieldRef((a$ as apiv1.SignalExternalWorkflowExecutionDecisionAttributes)._fields, "Domain"), Execution: __goscriptLiteralField48, SignalName: $.fieldRef((a$ as apiv1.SignalExternalWorkflowExecutionDecisionAttributes)._fields, "SignalName"), Input: __goscriptLiteralField49, Control: (a$ as apiv1.SignalExternalWorkflowExecutionDecisionAttributes).Control, ChildWorkflowOnly: $.fieldRef((a$ as apiv1.SignalExternalWorkflowExecutionDecisionAttributes)._fields, "ChildWorkflowOnly")}) })()
				}
				break
			case $.typeAssert<apiv1.Decision_UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<apiv1.Decision_UpsertWorkflowSearchAttributesDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_UpsertWorkflowSearchAttributesDecisionAttributes")).ok:
				{
					let attr: apiv1.Decision_UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<apiv1.Decision_UpsertWorkflowSearchAttributesDecisionAttributes> | null = $.typeAssert<apiv1.Decision_UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<apiv1.Decision_UpsertWorkflowSearchAttributesDecisionAttributes> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("apiv1.Decision_UpsertWorkflowSearchAttributesDecisionAttributes")).value
					decision.value.DecisionType = shared.DecisionType_Ptr(shared.DecisionTypeUpsertWorkflowSearchAttributes)
					let a: apiv1.UpsertWorkflowSearchAttributesDecisionAttributes | $.VarRef<apiv1.UpsertWorkflowSearchAttributesDecisionAttributes> | null = $.pointerValue<apiv1.Decision_UpsertWorkflowSearchAttributesDecisionAttributes>(attr).UpsertWorkflowSearchAttributesDecisionAttributes
					decision.value.UpsertWorkflowSearchAttributesDecisionAttributes = (() => { const __goscriptLiteralField50 = __goscript_types.SearchAttributes($.pointerValue<apiv1.UpsertWorkflowSearchAttributesDecisionAttributes>(a).SearchAttributes); return new shared.UpsertWorkflowSearchAttributesDecisionAttributes({SearchAttributes: __goscriptLiteralField50}) })()
				}
				break
			default:
				{
					let attr: any = __goscriptTypeSwitchValue
					$.panic("unknown decision type")
				}
				break
		}
	}
	return decision
}
