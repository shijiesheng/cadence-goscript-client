// Generated file based on schedule.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as apiv1 from "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"

import * as __goscript_helpers from "./helpers.gs.ts"

import * as __goscript_types from "./types.gs.ts"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"
import "./helpers.gs.ts"
import "./types.gs.ts"

export function CreateScheduleResponse(t: apiv1.CreateScheduleResponse | $.VarRef<apiv1.CreateScheduleResponse> | null): shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null {
	if (t == null) {
		return null
	}
	return new shared.CreateScheduleResponse({ScheduleId: $.fieldRef($.pointerValue<apiv1.CreateScheduleResponse>(t)._fields, "ScheduleId")})
}

export function DescribeScheduleResponse(t: apiv1.DescribeScheduleResponse | $.VarRef<apiv1.DescribeScheduleResponse> | null): shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null {
	const t$: apiv1.DescribeScheduleResponse = t == null ? $.pointerTarget<apiv1.DescribeScheduleResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.DescribeScheduleResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField0 = ScheduleSpec((t$ as apiv1.DescribeScheduleResponse).Spec); const __goscriptLiteralField1 = ScheduleAction((t$ as apiv1.DescribeScheduleResponse).Action); const __goscriptLiteralField2 = SchedulePolicies((t$ as apiv1.DescribeScheduleResponse).Policies); const __goscriptLiteralField3 = ScheduleState((t$ as apiv1.DescribeScheduleResponse).State); const __goscriptLiteralField4 = ScheduleInfo((t$ as apiv1.DescribeScheduleResponse).Info); const __goscriptLiteralField5 = __goscript_types.Memo((t$ as apiv1.DescribeScheduleResponse).Memo); const __goscriptLiteralField6 = __goscript_types.SearchAttributes((t$ as apiv1.DescribeScheduleResponse).SearchAttributes); return new shared.DescribeScheduleResponse({Spec: __goscriptLiteralField0, Action: __goscriptLiteralField1, Policies: __goscriptLiteralField2, State: __goscriptLiteralField3, Info: __goscriptLiteralField4, Memo: __goscriptLiteralField5, SearchAttributes: __goscriptLiteralField6}) })()
}

export function UpdateScheduleResponse(t: apiv1.UpdateScheduleResponse | $.VarRef<apiv1.UpdateScheduleResponse> | null): shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null {
	if (t == null) {
		return null
	}
	return new shared.UpdateScheduleResponse()
}

export function DeleteScheduleResponse(t: apiv1.DeleteScheduleResponse | $.VarRef<apiv1.DeleteScheduleResponse> | null): shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null {
	if (t == null) {
		return null
	}
	return new shared.DeleteScheduleResponse()
}

export function PauseScheduleResponse(t: apiv1.PauseScheduleResponse | $.VarRef<apiv1.PauseScheduleResponse> | null): shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null {
	if (t == null) {
		return null
	}
	return new shared.PauseScheduleResponse()
}

export function UnpauseScheduleResponse(t: apiv1.UnpauseScheduleResponse | $.VarRef<apiv1.UnpauseScheduleResponse> | null): shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null {
	if (t == null) {
		return null
	}
	return new shared.UnpauseScheduleResponse()
}

export function BackfillScheduleResponse(t: apiv1.BackfillScheduleResponse | $.VarRef<apiv1.BackfillScheduleResponse> | null): shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null {
	if (t == null) {
		return null
	}
	return new shared.BackfillScheduleResponse()
}

export function ListSchedulesResponse(t: apiv1.ListSchedulesResponse | $.VarRef<apiv1.ListSchedulesResponse> | null): shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null {
	const t$: apiv1.ListSchedulesResponse = t == null ? $.pointerTarget<apiv1.ListSchedulesResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ListSchedulesResponse>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField7 = ScheduleListEntryArray((t$ as apiv1.ListSchedulesResponse).Schedules); return new shared.ListSchedulesResponse({Schedules: __goscriptLiteralField7, NextPageToken: (t$ as apiv1.ListSchedulesResponse).NextPageToken}) })()
}

export function ScheduleSpec(t: apiv1.ScheduleSpec | $.VarRef<apiv1.ScheduleSpec> | null): shared.ScheduleSpec | $.VarRef<shared.ScheduleSpec> | null {
	const t$: apiv1.ScheduleSpec = t == null ? $.pointerTarget<apiv1.ScheduleSpec>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ScheduleSpec>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField8 = common.StringPtr((t$ as apiv1.ScheduleSpec).CronExpression); const __goscriptLiteralField9 = __goscript_helpers.timeToUnixNano((t$ as apiv1.ScheduleSpec).StartTime); const __goscriptLiteralField10 = __goscript_helpers.timeToUnixNano((t$ as apiv1.ScheduleSpec).EndTime); const __goscriptLiteralField11 = __goscript_helpers.durationToSecondsCeil((t$ as apiv1.ScheduleSpec).Jitter); return new shared.ScheduleSpec({CronExpression: __goscriptLiteralField8, StartTimeNano: __goscriptLiteralField9, EndTimeNano: __goscriptLiteralField10, JitterInSeconds: __goscriptLiteralField11}) })()
}

export function ScheduleAction(t: apiv1.ScheduleAction | $.VarRef<apiv1.ScheduleAction> | null): shared.ScheduleAction | $.VarRef<shared.ScheduleAction> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField12 = ScheduleStartWorkflowAction($.pointerValue<apiv1.ScheduleAction>(t).StartWorkflow); return new shared.ScheduleAction({StartWorkflow: __goscriptLiteralField12}) })()
}

export function ScheduleStartWorkflowAction(t: apiv1.ScheduleAction_StartWorkflowAction | $.VarRef<apiv1.ScheduleAction_StartWorkflowAction> | null): shared.ScheduleStartWorkflowAction | $.VarRef<shared.ScheduleStartWorkflowAction> | null {
	const t$: apiv1.ScheduleAction_StartWorkflowAction = t == null ? $.pointerTarget<apiv1.ScheduleAction_StartWorkflowAction>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ScheduleAction_StartWorkflowAction>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField13 = __goscript_types.WorkflowType((t$ as apiv1.ScheduleAction_StartWorkflowAction).WorkflowType); const __goscriptLiteralField14 = __goscript_types.TaskList((t$ as apiv1.ScheduleAction_StartWorkflowAction).TaskList); const __goscriptLiteralField15 = __goscript_types.Payload((t$ as apiv1.ScheduleAction_StartWorkflowAction).Input); const __goscriptLiteralField16 = common.StringPtr((t$ as apiv1.ScheduleAction_StartWorkflowAction).WorkflowIdPrefix); const __goscriptLiteralField17 = __goscript_helpers.durationToSeconds((t$ as apiv1.ScheduleAction_StartWorkflowAction).ExecutionStartToCloseTimeout); const __goscriptLiteralField18 = __goscript_helpers.durationToSeconds((t$ as apiv1.ScheduleAction_StartWorkflowAction).TaskStartToCloseTimeout); const __goscriptLiteralField19 = __goscript_types.RetryPolicy((t$ as apiv1.ScheduleAction_StartWorkflowAction).RetryPolicy); const __goscriptLiteralField20 = __goscript_types.Memo((t$ as apiv1.ScheduleAction_StartWorkflowAction).Memo); const __goscriptLiteralField21 = __goscript_types.SearchAttributes((t$ as apiv1.ScheduleAction_StartWorkflowAction).SearchAttributes); return new shared.ScheduleStartWorkflowAction({WorkflowType: __goscriptLiteralField13, TaskList: __goscriptLiteralField14, Input: __goscriptLiteralField15, WorkflowIdPrefix: __goscriptLiteralField16, ExecutionStartToCloseTimeoutSeconds: __goscriptLiteralField17, TaskStartToCloseTimeoutSeconds: __goscriptLiteralField18, RetryPolicy: __goscriptLiteralField19, Memo: __goscriptLiteralField20, SearchAttributes: __goscriptLiteralField21}) })()
}

export function SchedulePolicies(t: apiv1.SchedulePolicies | $.VarRef<apiv1.SchedulePolicies> | null): shared.SchedulePolicies | $.VarRef<shared.SchedulePolicies> | null {
	const t$: apiv1.SchedulePolicies = t == null ? $.pointerTarget<apiv1.SchedulePolicies>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.SchedulePolicies>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField22 = ScheduleOverlapPolicy((t$ as apiv1.SchedulePolicies).OverlapPolicy); const __goscriptLiteralField23 = ScheduleCatchUpPolicy((t$ as apiv1.SchedulePolicies).CatchUpPolicy); const __goscriptLiteralField24 = __goscript_helpers.durationToSeconds((t$ as apiv1.SchedulePolicies).CatchUpWindow); const __goscriptLiteralField25 = common.BoolPtr((t$ as apiv1.SchedulePolicies).PauseOnFailure); const __goscriptLiteralField26 = common.Int32Ptr((t$ as apiv1.SchedulePolicies).BufferLimit); const __goscriptLiteralField27 = common.Int32Ptr((t$ as apiv1.SchedulePolicies).ConcurrencyLimit); return new shared.SchedulePolicies({OverlapPolicy: __goscriptLiteralField22, CatchUpPolicy: __goscriptLiteralField23, CatchUpWindowInSeconds: __goscriptLiteralField24, PauseOnFailure: __goscriptLiteralField25, BufferLimit: __goscriptLiteralField26, ConcurrencyLimit: __goscriptLiteralField27}) })()
}

export function ScheduleState(t: apiv1.ScheduleState | $.VarRef<apiv1.ScheduleState> | null): shared.ScheduleState | $.VarRef<shared.ScheduleState> | null {
	const t$: apiv1.ScheduleState = t == null ? $.pointerTarget<apiv1.ScheduleState>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ScheduleState>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField28 = common.BoolPtr((t$ as apiv1.ScheduleState).Paused); const __goscriptLiteralField29 = SchedulePauseInfo((t$ as apiv1.ScheduleState).PauseInfo); return new shared.ScheduleState({Paused: __goscriptLiteralField28, PauseInfo: __goscriptLiteralField29}) })()
}

export function SchedulePauseInfo(t: apiv1.SchedulePauseInfo | $.VarRef<apiv1.SchedulePauseInfo> | null): shared.SchedulePauseInfo | $.VarRef<shared.SchedulePauseInfo> | null {
	const t$: apiv1.SchedulePauseInfo = t == null ? $.pointerTarget<apiv1.SchedulePauseInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.SchedulePauseInfo>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField30 = common.StringPtr((t$ as apiv1.SchedulePauseInfo).Reason); const __goscriptLiteralField31 = __goscript_helpers.timeToUnixNano((t$ as apiv1.SchedulePauseInfo).PausedAt); const __goscriptLiteralField32 = common.StringPtr((t$ as apiv1.SchedulePauseInfo).PausedBy); return new shared.SchedulePauseInfo({Reason: __goscriptLiteralField30, PausedTimeNano: __goscriptLiteralField31, PausedBy: __goscriptLiteralField32}) })()
}

export function ScheduleInfo(t: apiv1.ScheduleInfo | $.VarRef<apiv1.ScheduleInfo> | null): shared.ScheduleInfo | $.VarRef<shared.ScheduleInfo> | null {
	const t$: apiv1.ScheduleInfo = t == null ? $.pointerTarget<apiv1.ScheduleInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ScheduleInfo>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField33 = __goscript_helpers.timeToUnixNano((t$ as apiv1.ScheduleInfo).LastRunTime); const __goscriptLiteralField34 = __goscript_helpers.timeToUnixNano((t$ as apiv1.ScheduleInfo).NextRunTime); const __goscriptLiteralField35 = common.Int64Ptr((t$ as apiv1.ScheduleInfo).TotalRuns); const __goscriptLiteralField36 = __goscript_helpers.timeToUnixNano((t$ as apiv1.ScheduleInfo).CreateTime); const __goscriptLiteralField37 = __goscript_helpers.timeToUnixNano((t$ as apiv1.ScheduleInfo).LastUpdateTime); const __goscriptLiteralField38 = BackfillInfoArray((t$ as apiv1.ScheduleInfo).OngoingBackfills); const __goscriptLiteralField39 = common.Int64Ptr((t$ as apiv1.ScheduleInfo).MissedRuns); const __goscriptLiteralField40 = common.Int64Ptr((t$ as apiv1.ScheduleInfo).SkippedRuns); const __goscriptLiteralField41 = common.Int64Ptr((t$ as apiv1.ScheduleInfo).BufferedFireCount); const __goscriptLiteralField42 = common.Int64Ptr((t$ as apiv1.ScheduleInfo).RunningWorkflowCount); return new shared.ScheduleInfo({LastRunTimeNano: __goscriptLiteralField33, NextRunTimeNano: __goscriptLiteralField34, TotalRuns: __goscriptLiteralField35, CreateTimeNano: __goscriptLiteralField36, LastUpdateTimeNano: __goscriptLiteralField37, OngoingBackfills: __goscriptLiteralField38, MissedRuns: __goscriptLiteralField39, SkippedRuns: __goscriptLiteralField40, BufferedFireCount: __goscriptLiteralField41, RunningWorkflowCount: __goscriptLiteralField42}) })()
}

export function BackfillInfo(t: apiv1.BackfillInfo | $.VarRef<apiv1.BackfillInfo> | null): shared.BackfillInfo | $.VarRef<shared.BackfillInfo> | null {
	const t$: apiv1.BackfillInfo = t == null ? $.pointerTarget<apiv1.BackfillInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.BackfillInfo>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField43 = common.StringPtr((t$ as apiv1.BackfillInfo).BackfillId); const __goscriptLiteralField44 = __goscript_helpers.timeToUnixNano((t$ as apiv1.BackfillInfo).StartTime); const __goscriptLiteralField45 = __goscript_helpers.timeToUnixNano((t$ as apiv1.BackfillInfo).EndTime); const __goscriptLiteralField46 = common.Int32Ptr((t$ as apiv1.BackfillInfo).RunsCompleted); const __goscriptLiteralField47 = common.Int32Ptr((t$ as apiv1.BackfillInfo).RunsTotal); return new shared.BackfillInfo({BackfillId: __goscriptLiteralField43, StartTimeNano: __goscriptLiteralField44, EndTimeNano: __goscriptLiteralField45, RunsCompleted: __goscriptLiteralField46, RunsTotal: __goscriptLiteralField47}) })()
}

export function BackfillInfoArray(t: $.Slice<apiv1.BackfillInfo | $.VarRef<apiv1.BackfillInfo> | null>): $.Slice<shared.BackfillInfo | $.VarRef<shared.BackfillInfo> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<shared.BackfillInfo | $.VarRef<shared.BackfillInfo> | null> = $.makeSlice<shared.BackfillInfo | $.VarRef<shared.BackfillInfo> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget0 = t, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let e = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as apiv1.BackfillInfo | $.VarRef<apiv1.BackfillInfo> | null);
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = BackfillInfo(e)
	}
	return v
}

export function ScheduleListEntry(t: apiv1.ScheduleListEntry | $.VarRef<apiv1.ScheduleListEntry> | null): shared.ScheduleListEntry | $.VarRef<shared.ScheduleListEntry> | null {
	const t$: apiv1.ScheduleListEntry = t == null ? $.pointerTarget<apiv1.ScheduleListEntry>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ScheduleListEntry>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField48 = common.StringPtr((t$ as apiv1.ScheduleListEntry).ScheduleId); const __goscriptLiteralField49 = __goscript_types.WorkflowType((t$ as apiv1.ScheduleListEntry).WorkflowType); const __goscriptLiteralField50 = ScheduleState((t$ as apiv1.ScheduleListEntry).State); const __goscriptLiteralField51 = common.StringPtr((t$ as apiv1.ScheduleListEntry).CronExpression); return new shared.ScheduleListEntry({ScheduleId: __goscriptLiteralField48, WorkflowType: __goscriptLiteralField49, State: __goscriptLiteralField50, CronExpression: __goscriptLiteralField51}) })()
}

export function ScheduleListEntryArray(t: $.Slice<apiv1.ScheduleListEntry | $.VarRef<apiv1.ScheduleListEntry> | null>): $.Slice<shared.ScheduleListEntry | $.VarRef<shared.ScheduleListEntry> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<shared.ScheduleListEntry | $.VarRef<shared.ScheduleListEntry> | null> = $.makeSlice<shared.ScheduleListEntry | $.VarRef<shared.ScheduleListEntry> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget1 = t, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow1 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let e = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as apiv1.ScheduleListEntry | $.VarRef<apiv1.ScheduleListEntry> | null);
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = ScheduleListEntry(e)
	}
	return v
}

export function ScheduleOverlapPolicy(t: apiv1.ScheduleOverlapPolicy): $.VarRef<shared.ScheduleOverlapPolicy> | null {
	let v: $.VarRef<shared.ScheduleOverlapPolicy> = $.varRef(0)
	switch (t) {
		case apiv1.ScheduleOverlapPolicy_SCHEDULE_OVERLAP_POLICY_SKIP_NEW:
		{
			v.value = 1
			break
		}
		case apiv1.ScheduleOverlapPolicy_SCHEDULE_OVERLAP_POLICY_BUFFER:
		{
			v.value = 2
			break
		}
		case apiv1.ScheduleOverlapPolicy_SCHEDULE_OVERLAP_POLICY_CONCURRENT:
		{
			v.value = 3
			break
		}
		case apiv1.ScheduleOverlapPolicy_SCHEDULE_OVERLAP_POLICY_CANCEL_PREVIOUS:
		{
			v.value = 4
			break
		}
		case apiv1.ScheduleOverlapPolicy_SCHEDULE_OVERLAP_POLICY_TERMINATE_PREVIOUS:
		{
			v.value = 5
			break
		}
		default:
		{
			v.value = 0
			break
		}
	}
	return v
}

export function ScheduleCatchUpPolicy(t: apiv1.ScheduleCatchUpPolicy): $.VarRef<shared.ScheduleCatchUpPolicy> | null {
	let v: $.VarRef<shared.ScheduleCatchUpPolicy> = $.varRef(0)
	switch (t) {
		case apiv1.ScheduleCatchUpPolicy_SCHEDULE_CATCH_UP_POLICY_SKIP:
		{
			v.value = 1
			break
		}
		case apiv1.ScheduleCatchUpPolicy_SCHEDULE_CATCH_UP_POLICY_ONE:
		{
			v.value = 2
			break
		}
		case apiv1.ScheduleCatchUpPolicy_SCHEDULE_CATCH_UP_POLICY_ALL:
		{
			v.value = 3
			break
		}
		default:
		{
			v.value = 0
			break
		}
	}
	return v
}
