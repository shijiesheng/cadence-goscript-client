// Generated file based on schedule.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as apiv1 from "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"

import * as __goscript_helpers from "./helpers.gs.ts"

import * as __goscript_types from "./types.gs.ts"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"
import "./helpers.gs.ts"
import "./types.gs.ts"

export function CreateScheduleRequest(t: shared.CreateScheduleRequest | $.VarRef<shared.CreateScheduleRequest> | null): apiv1.CreateScheduleRequest | $.VarRef<apiv1.CreateScheduleRequest> | null {
	const t$: shared.CreateScheduleRequest = t == null ? $.pointerTarget<shared.CreateScheduleRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.CreateScheduleRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField0 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.CreateScheduleRequest).GetDomain() : shared.CreateScheduleRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField1 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.CreateScheduleRequest).GetScheduleId() : shared.CreateScheduleRequest.prototype.GetScheduleId.call(t)); const __goscriptLiteralField2 = ScheduleSpec((t$ as shared.CreateScheduleRequest).Spec); const __goscriptLiteralField3 = ScheduleAction((t$ as shared.CreateScheduleRequest).Action); const __goscriptLiteralField4 = SchedulePolicies((t$ as shared.CreateScheduleRequest).Policies); const __goscriptLiteralField5 = __goscript_types.Memo((t$ as shared.CreateScheduleRequest).Memo); const __goscriptLiteralField6 = __goscript_types.SearchAttributes((t$ as shared.CreateScheduleRequest).SearchAttributes); const __goscriptLiteralField7 = ScheduleState((t$ as shared.CreateScheduleRequest).State); return new apiv1.CreateScheduleRequest({Domain: __goscriptLiteralField0, ScheduleId: __goscriptLiteralField1, Spec: __goscriptLiteralField2, Action: __goscriptLiteralField3, Policies: __goscriptLiteralField4, Memo: __goscriptLiteralField5, SearchAttributes: __goscriptLiteralField6, State: __goscriptLiteralField7}) })()
}

export function DescribeScheduleRequest(t: shared.DescribeScheduleRequest | $.VarRef<shared.DescribeScheduleRequest> | null): apiv1.DescribeScheduleRequest | $.VarRef<apiv1.DescribeScheduleRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField8 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DescribeScheduleRequest).GetDomain() : shared.DescribeScheduleRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField9 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DescribeScheduleRequest).GetScheduleId() : shared.DescribeScheduleRequest.prototype.GetScheduleId.call(t)); return new apiv1.DescribeScheduleRequest({Domain: __goscriptLiteralField8, ScheduleId: __goscriptLiteralField9}) })()
}

export function UpdateScheduleRequest(t: shared.UpdateScheduleRequest | $.VarRef<shared.UpdateScheduleRequest> | null): apiv1.UpdateScheduleRequest | $.VarRef<apiv1.UpdateScheduleRequest> | null {
	const t$: shared.UpdateScheduleRequest = t == null ? $.pointerTarget<shared.UpdateScheduleRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.UpdateScheduleRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField10 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.UpdateScheduleRequest).GetDomain() : shared.UpdateScheduleRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField11 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.UpdateScheduleRequest).GetScheduleId() : shared.UpdateScheduleRequest.prototype.GetScheduleId.call(t)); const __goscriptLiteralField12 = ScheduleSpec((t$ as shared.UpdateScheduleRequest).Spec); const __goscriptLiteralField13 = ScheduleAction((t$ as shared.UpdateScheduleRequest).Action); const __goscriptLiteralField14 = SchedulePolicies((t$ as shared.UpdateScheduleRequest).Policies); const __goscriptLiteralField15 = __goscript_types.SearchAttributes((t$ as shared.UpdateScheduleRequest).SearchAttributes); return new apiv1.UpdateScheduleRequest({Domain: __goscriptLiteralField10, ScheduleId: __goscriptLiteralField11, Spec: __goscriptLiteralField12, Action: __goscriptLiteralField13, Policies: __goscriptLiteralField14, SearchAttributes: __goscriptLiteralField15}) })()
}

export function DeleteScheduleRequest(t: shared.DeleteScheduleRequest | $.VarRef<shared.DeleteScheduleRequest> | null): apiv1.DeleteScheduleRequest | $.VarRef<apiv1.DeleteScheduleRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField16 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DeleteScheduleRequest).GetDomain() : shared.DeleteScheduleRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField17 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DeleteScheduleRequest).GetScheduleId() : shared.DeleteScheduleRequest.prototype.GetScheduleId.call(t)); return new apiv1.DeleteScheduleRequest({Domain: __goscriptLiteralField16, ScheduleId: __goscriptLiteralField17}) })()
}

export function PauseScheduleRequest(t: shared.PauseScheduleRequest | $.VarRef<shared.PauseScheduleRequest> | null): apiv1.PauseScheduleRequest | $.VarRef<apiv1.PauseScheduleRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField18 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PauseScheduleRequest).GetDomain() : shared.PauseScheduleRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField19 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PauseScheduleRequest).GetScheduleId() : shared.PauseScheduleRequest.prototype.GetScheduleId.call(t)); const __goscriptLiteralField20 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PauseScheduleRequest).GetReason() : shared.PauseScheduleRequest.prototype.GetReason.call(t)); const __goscriptLiteralField21 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PauseScheduleRequest).GetIdentity() : shared.PauseScheduleRequest.prototype.GetIdentity.call(t)); return new apiv1.PauseScheduleRequest({Domain: __goscriptLiteralField18, ScheduleId: __goscriptLiteralField19, Reason: __goscriptLiteralField20, Identity: __goscriptLiteralField21}) })()
}

export function UnpauseScheduleRequest(t: shared.UnpauseScheduleRequest | $.VarRef<shared.UnpauseScheduleRequest> | null): apiv1.UnpauseScheduleRequest | $.VarRef<apiv1.UnpauseScheduleRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField22 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.UnpauseScheduleRequest).GetDomain() : shared.UnpauseScheduleRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField23 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.UnpauseScheduleRequest).GetScheduleId() : shared.UnpauseScheduleRequest.prototype.GetScheduleId.call(t)); const __goscriptLiteralField24 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.UnpauseScheduleRequest).GetReason() : shared.UnpauseScheduleRequest.prototype.GetReason.call(t)); const __goscriptLiteralField25 = ScheduleCatchUpPolicy($.pointerValue<shared.UnpauseScheduleRequest>(t).CatchUpPolicy); return new apiv1.UnpauseScheduleRequest({Domain: __goscriptLiteralField22, ScheduleId: __goscriptLiteralField23, Reason: __goscriptLiteralField24, CatchUpPolicy: __goscriptLiteralField25}) })()
}

export function BackfillScheduleRequest(t: shared.BackfillScheduleRequest | $.VarRef<shared.BackfillScheduleRequest> | null): apiv1.BackfillScheduleRequest | $.VarRef<apiv1.BackfillScheduleRequest> | null {
	const t$: shared.BackfillScheduleRequest = t == null ? $.pointerTarget<shared.BackfillScheduleRequest>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.BackfillScheduleRequest>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField26 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.BackfillScheduleRequest).GetDomain() : shared.BackfillScheduleRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField27 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.BackfillScheduleRequest).GetScheduleId() : shared.BackfillScheduleRequest.prototype.GetScheduleId.call(t)); const __goscriptLiteralField28 = __goscript_helpers.unixNanoToTime((t$ as shared.BackfillScheduleRequest).StartTimeNano); const __goscriptLiteralField29 = __goscript_helpers.unixNanoToTime((t$ as shared.BackfillScheduleRequest).EndTimeNano); const __goscriptLiteralField30 = ScheduleOverlapPolicy((t$ as shared.BackfillScheduleRequest).OverlapPolicy); const __goscriptLiteralField31 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.BackfillScheduleRequest).GetBackfillId() : shared.BackfillScheduleRequest.prototype.GetBackfillId.call(t)); return new apiv1.BackfillScheduleRequest({Domain: __goscriptLiteralField26, ScheduleId: __goscriptLiteralField27, StartTime: __goscriptLiteralField28, EndTime: __goscriptLiteralField29, OverlapPolicy: __goscriptLiteralField30, BackfillId: __goscriptLiteralField31}) })()
}

export function ListSchedulesRequest(t: shared.ListSchedulesRequest | $.VarRef<shared.ListSchedulesRequest> | null): apiv1.ListSchedulesRequest | $.VarRef<apiv1.ListSchedulesRequest> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField32 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ListSchedulesRequest).GetDomain() : shared.ListSchedulesRequest.prototype.GetDomain.call(t)); const __goscriptLiteralField33 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ListSchedulesRequest).GetPageSize() : shared.ListSchedulesRequest.prototype.GetPageSize.call(t)); return new apiv1.ListSchedulesRequest({Domain: __goscriptLiteralField32, PageSize: __goscriptLiteralField33, NextPageToken: $.pointerValue<shared.ListSchedulesRequest>(t).NextPageToken}) })()
}

export function ScheduleSpec(t: shared.ScheduleSpec | $.VarRef<shared.ScheduleSpec> | null): apiv1.ScheduleSpec | $.VarRef<apiv1.ScheduleSpec> | null {
	const t$: shared.ScheduleSpec = t == null ? $.pointerTarget<shared.ScheduleSpec>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ScheduleSpec>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField34 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ScheduleSpec).GetCronExpression() : shared.ScheduleSpec.prototype.GetCronExpression.call(t)); const __goscriptLiteralField35 = __goscript_helpers.unixNanoToTime((t$ as shared.ScheduleSpec).StartTimeNano); const __goscriptLiteralField36 = __goscript_helpers.unixNanoToTime((t$ as shared.ScheduleSpec).EndTimeNano); const __goscriptLiteralField37 = __goscript_helpers.secondsToDuration((t$ as shared.ScheduleSpec).JitterInSeconds); return new apiv1.ScheduleSpec({CronExpression: __goscriptLiteralField34, StartTime: __goscriptLiteralField35, EndTime: __goscriptLiteralField36, Jitter: __goscriptLiteralField37}) })()
}

export function ScheduleAction(t: shared.ScheduleAction | $.VarRef<shared.ScheduleAction> | null): apiv1.ScheduleAction | $.VarRef<apiv1.ScheduleAction> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField38 = ScheduleStartWorkflowAction($.pointerValue<shared.ScheduleAction>(t).StartWorkflow); return new apiv1.ScheduleAction({StartWorkflow: __goscriptLiteralField38}) })()
}

export function ScheduleStartWorkflowAction(t: shared.ScheduleStartWorkflowAction | $.VarRef<shared.ScheduleStartWorkflowAction> | null): apiv1.ScheduleAction_StartWorkflowAction | $.VarRef<apiv1.ScheduleAction_StartWorkflowAction> | null {
	const t$: shared.ScheduleStartWorkflowAction = t == null ? $.pointerTarget<shared.ScheduleStartWorkflowAction>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ScheduleStartWorkflowAction>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField39 = __goscript_types.WorkflowType((t$ as shared.ScheduleStartWorkflowAction).WorkflowType); const __goscriptLiteralField40 = __goscript_types.TaskList((t$ as shared.ScheduleStartWorkflowAction).TaskList); const __goscriptLiteralField41 = __goscript_types.Payload((t$ as shared.ScheduleStartWorkflowAction).Input); const __goscriptLiteralField42 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ScheduleStartWorkflowAction).GetWorkflowIdPrefix() : shared.ScheduleStartWorkflowAction.prototype.GetWorkflowIdPrefix.call(t)); const __goscriptLiteralField43 = __goscript_helpers.secondsToDuration((t$ as shared.ScheduleStartWorkflowAction).ExecutionStartToCloseTimeoutSeconds); const __goscriptLiteralField44 = __goscript_helpers.secondsToDuration((t$ as shared.ScheduleStartWorkflowAction).TaskStartToCloseTimeoutSeconds); const __goscriptLiteralField45 = __goscript_types.RetryPolicy((t$ as shared.ScheduleStartWorkflowAction).RetryPolicy); const __goscriptLiteralField46 = __goscript_types.Memo((t$ as shared.ScheduleStartWorkflowAction).Memo); const __goscriptLiteralField47 = __goscript_types.SearchAttributes((t$ as shared.ScheduleStartWorkflowAction).SearchAttributes); return new apiv1.ScheduleAction_StartWorkflowAction({WorkflowType: __goscriptLiteralField39, TaskList: __goscriptLiteralField40, Input: __goscriptLiteralField41, WorkflowIdPrefix: __goscriptLiteralField42, ExecutionStartToCloseTimeout: __goscriptLiteralField43, TaskStartToCloseTimeout: __goscriptLiteralField44, RetryPolicy: __goscriptLiteralField45, Memo: __goscriptLiteralField46, SearchAttributes: __goscriptLiteralField47}) })()
}

export function SchedulePolicies(t: shared.SchedulePolicies | $.VarRef<shared.SchedulePolicies> | null): apiv1.SchedulePolicies | $.VarRef<apiv1.SchedulePolicies> | null {
	const t$: shared.SchedulePolicies = t == null ? $.pointerTarget<shared.SchedulePolicies>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.SchedulePolicies>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField48 = ScheduleOverlapPolicy((t$ as shared.SchedulePolicies).OverlapPolicy); const __goscriptLiteralField49 = ScheduleCatchUpPolicy((t$ as shared.SchedulePolicies).CatchUpPolicy); const __goscriptLiteralField50 = __goscript_helpers.secondsToDuration((t$ as shared.SchedulePolicies).CatchUpWindowInSeconds); const __goscriptLiteralField51 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SchedulePolicies).GetPauseOnFailure() : shared.SchedulePolicies.prototype.GetPauseOnFailure.call(t)); const __goscriptLiteralField52 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SchedulePolicies).GetBufferLimit() : shared.SchedulePolicies.prototype.GetBufferLimit.call(t)); const __goscriptLiteralField53 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SchedulePolicies).GetConcurrencyLimit() : shared.SchedulePolicies.prototype.GetConcurrencyLimit.call(t)); return new apiv1.SchedulePolicies({OverlapPolicy: __goscriptLiteralField48, CatchUpPolicy: __goscriptLiteralField49, CatchUpWindow: __goscriptLiteralField50, PauseOnFailure: __goscriptLiteralField51, BufferLimit: __goscriptLiteralField52, ConcurrencyLimit: __goscriptLiteralField53}) })()
}

export function ScheduleOverlapPolicy(t: $.VarRef<shared.ScheduleOverlapPolicy> | null): apiv1.ScheduleOverlapPolicy {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.ScheduleOverlapPolicy>(t)) {
		case shared.ScheduleOverlapPolicySkipNew:
		{
			return 1
			break
		}
		case shared.ScheduleOverlapPolicyBuffer:
		{
			return 2
			break
		}
		case shared.ScheduleOverlapPolicyConcurrent:
		{
			return 3
			break
		}
		case shared.ScheduleOverlapPolicyCancelPrevious:
		{
			return 4
			break
		}
		case shared.ScheduleOverlapPolicyTerminatePrevious:
		{
			return 5
			break
		}
		default:
		{
			return 0
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function ScheduleCatchUpPolicy(t: $.VarRef<shared.ScheduleCatchUpPolicy> | null): apiv1.ScheduleCatchUpPolicy {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.ScheduleCatchUpPolicy>(t)) {
		case shared.ScheduleCatchUpPolicySkip:
		{
			return 1
			break
		}
		case shared.ScheduleCatchUpPolicyOne:
		{
			return 2
			break
		}
		case shared.ScheduleCatchUpPolicyAll:
		{
			return 3
			break
		}
		default:
		{
			return 0
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function SchedulePauseInfo(t: shared.SchedulePauseInfo | $.VarRef<shared.SchedulePauseInfo> | null): apiv1.SchedulePauseInfo | $.VarRef<apiv1.SchedulePauseInfo> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField54 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SchedulePauseInfo).GetReason() : shared.SchedulePauseInfo.prototype.GetReason.call(t)); const __goscriptLiteralField55 = __goscript_helpers.unixNanoToTime($.pointerValue<shared.SchedulePauseInfo>(t).PausedTimeNano); const __goscriptLiteralField56 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SchedulePauseInfo).GetPausedBy() : shared.SchedulePauseInfo.prototype.GetPausedBy.call(t)); return new apiv1.SchedulePauseInfo({Reason: __goscriptLiteralField54, PausedAt: __goscriptLiteralField55, PausedBy: __goscriptLiteralField56}) })()
}

export function ScheduleState(t: shared.ScheduleState | $.VarRef<shared.ScheduleState> | null): apiv1.ScheduleState | $.VarRef<apiv1.ScheduleState> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField57 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ScheduleState).GetPaused() : shared.ScheduleState.prototype.GetPaused.call(t)); const __goscriptLiteralField58 = SchedulePauseInfo($.pointerValue<shared.ScheduleState>(t).PauseInfo); return new apiv1.ScheduleState({Paused: __goscriptLiteralField57, PauseInfo: __goscriptLiteralField58}) })()
}

export function BackfillInfo(t: shared.BackfillInfo | $.VarRef<shared.BackfillInfo> | null): apiv1.BackfillInfo | $.VarRef<apiv1.BackfillInfo> | null {
	const t$: shared.BackfillInfo = t == null ? $.pointerTarget<shared.BackfillInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.BackfillInfo>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField59 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.BackfillInfo).GetBackfillId() : shared.BackfillInfo.prototype.GetBackfillId.call(t)); const __goscriptLiteralField60 = __goscript_helpers.unixNanoToTime((t$ as shared.BackfillInfo).StartTimeNano); const __goscriptLiteralField61 = __goscript_helpers.unixNanoToTime((t$ as shared.BackfillInfo).EndTimeNano); const __goscriptLiteralField62 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.BackfillInfo).GetRunsCompleted() : shared.BackfillInfo.prototype.GetRunsCompleted.call(t)); const __goscriptLiteralField63 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.BackfillInfo).GetRunsTotal() : shared.BackfillInfo.prototype.GetRunsTotal.call(t)); return new apiv1.BackfillInfo({BackfillId: __goscriptLiteralField59, StartTime: __goscriptLiteralField60, EndTime: __goscriptLiteralField61, RunsCompleted: __goscriptLiteralField62, RunsTotal: __goscriptLiteralField63}) })()
}

export function ScheduleInfo(t: shared.ScheduleInfo | $.VarRef<shared.ScheduleInfo> | null): apiv1.ScheduleInfo | $.VarRef<apiv1.ScheduleInfo> | null {
	const t$: shared.ScheduleInfo = t == null ? $.pointerTarget<shared.ScheduleInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ScheduleInfo>(t)
	if (t == null) {
		return null
	}
	let ongoing: $.Slice<apiv1.BackfillInfo | $.VarRef<apiv1.BackfillInfo> | null> = null! as $.Slice<apiv1.BackfillInfo | $.VarRef<apiv1.BackfillInfo> | null>
	if ((t$ as shared.ScheduleInfo).OngoingBackfills != null) {
		ongoing = $.makeSlice<apiv1.BackfillInfo | $.VarRef<apiv1.BackfillInfo> | null>($.sliceLen((t$ as shared.ScheduleInfo).OngoingBackfills))
		for (let __goscriptRangeTarget0 = (t$ as shared.ScheduleInfo).OngoingBackfills, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(ongoing), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let b = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as shared.BackfillInfo | $.VarRef<shared.BackfillInfo> | null);
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = BackfillInfo(b)
		}
	}
	return (() => { const __goscriptLiteralField64 = __goscript_helpers.unixNanoToTime((t$ as shared.ScheduleInfo).LastRunTimeNano); const __goscriptLiteralField65 = __goscript_helpers.unixNanoToTime((t$ as shared.ScheduleInfo).NextRunTimeNano); const __goscriptLiteralField66 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ScheduleInfo).GetTotalRuns() : shared.ScheduleInfo.prototype.GetTotalRuns.call(t)); const __goscriptLiteralField67 = __goscript_helpers.unixNanoToTime((t$ as shared.ScheduleInfo).CreateTimeNano); const __goscriptLiteralField68 = __goscript_helpers.unixNanoToTime((t$ as shared.ScheduleInfo).LastUpdateTimeNano); const __goscriptLiteralField69 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ScheduleInfo).GetMissedRuns() : shared.ScheduleInfo.prototype.GetMissedRuns.call(t)); const __goscriptLiteralField70 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ScheduleInfo).GetSkippedRuns() : shared.ScheduleInfo.prototype.GetSkippedRuns.call(t)); const __goscriptLiteralField71 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ScheduleInfo).GetBufferedFireCount() : shared.ScheduleInfo.prototype.GetBufferedFireCount.call(t)); const __goscriptLiteralField72 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ScheduleInfo).GetRunningWorkflowCount() : shared.ScheduleInfo.prototype.GetRunningWorkflowCount.call(t)); return new apiv1.ScheduleInfo({LastRunTime: __goscriptLiteralField64, NextRunTime: __goscriptLiteralField65, TotalRuns: __goscriptLiteralField66, CreateTime: __goscriptLiteralField67, LastUpdateTime: __goscriptLiteralField68, OngoingBackfills: ongoing, MissedRuns: __goscriptLiteralField69, SkippedRuns: __goscriptLiteralField70, BufferedFireCount: __goscriptLiteralField71, RunningWorkflowCount: __goscriptLiteralField72}) })()
}

export function ScheduleListEntry(t: shared.ScheduleListEntry | $.VarRef<shared.ScheduleListEntry> | null): apiv1.ScheduleListEntry | $.VarRef<apiv1.ScheduleListEntry> | null {
	const t$: shared.ScheduleListEntry = t == null ? $.pointerTarget<shared.ScheduleListEntry>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ScheduleListEntry>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField73 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ScheduleListEntry).GetScheduleId() : shared.ScheduleListEntry.prototype.GetScheduleId.call(t)); const __goscriptLiteralField74 = __goscript_types.WorkflowType((t$ as shared.ScheduleListEntry).WorkflowType); const __goscriptLiteralField75 = ScheduleState((t$ as shared.ScheduleListEntry).State); const __goscriptLiteralField76 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ScheduleListEntry).GetCronExpression() : shared.ScheduleListEntry.prototype.GetCronExpression.call(t)); return new apiv1.ScheduleListEntry({ScheduleId: __goscriptLiteralField73, WorkflowType: __goscriptLiteralField74, State: __goscriptLiteralField75, CronExpression: __goscriptLiteralField76}) })()
}
