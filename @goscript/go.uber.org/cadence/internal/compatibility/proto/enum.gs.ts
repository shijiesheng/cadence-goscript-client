// Generated file based on enum.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as apiv1 from "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"

export function TaskListKind(t: $.VarRef<shared.TaskListKind> | null): apiv1.TaskListKind {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.TaskListKind>(t)) {
		case shared.TaskListKindNormal:
		{
			return 1
			break
		}
		case shared.TaskListKindSticky:
		{
			return 2
			break
		}
		case shared.TaskListKindEphemeral:
		{
			return 3
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function TaskListType(t: $.VarRef<shared.TaskListType> | null): apiv1.TaskListType {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.TaskListType>(t)) {
		case shared.TaskListTypeDecision:
		{
			return 1
			break
		}
		case shared.TaskListTypeActivity:
		{
			return 2
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function EventFilterType(t: $.VarRef<shared.HistoryEventFilterType> | null): apiv1.EventFilterType {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.HistoryEventFilterType>(t)) {
		case shared.HistoryEventFilterTypeAllEvent:
		{
			return 1
			break
		}
		case shared.HistoryEventFilterTypeCloseEvent:
		{
			return 2
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function QueryRejectCondition(t: $.VarRef<shared.QueryRejectCondition> | null): apiv1.QueryRejectCondition {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.QueryRejectCondition>(t)) {
		case shared.QueryRejectConditionNotOpen:
		{
			return 1
			break
		}
		case shared.QueryRejectConditionNotCompletedCleanly:
		{
			return 2
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function QueryConsistencyLevel(t: $.VarRef<shared.QueryConsistencyLevel> | null): apiv1.QueryConsistencyLevel {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.QueryConsistencyLevel>(t)) {
		case shared.QueryConsistencyLevelEventual:
		{
			return 1
			break
		}
		case shared.QueryConsistencyLevelStrong:
		{
			return 2
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function ContinueAsNewInitiator(t: $.VarRef<shared.ContinueAsNewInitiator> | null): apiv1.ContinueAsNewInitiator {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.ContinueAsNewInitiator>(t)) {
		case shared.ContinueAsNewInitiatorDecider:
		{
			return 1
			break
		}
		case shared.ContinueAsNewInitiatorRetryPolicy:
		{
			return 2
			break
		}
		case shared.ContinueAsNewInitiatorCronSchedule:
		{
			return 3
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function WorkflowIDReusePolicy(t: $.VarRef<shared.WorkflowIdReusePolicy> | null): apiv1.WorkflowIdReusePolicy {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.WorkflowIdReusePolicy>(t)) {
		case shared.WorkflowIdReusePolicyAllowDuplicateFailedOnly:
		{
			return 1
			break
		}
		case shared.WorkflowIdReusePolicyAllowDuplicate:
		{
			return 2
			break
		}
		case shared.WorkflowIdReusePolicyRejectDuplicate:
		{
			return 3
			break
		}
		case shared.WorkflowIdReusePolicyTerminateIfRunning:
		{
			return 4
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function QueryResultType(t: $.VarRef<shared.QueryResultType> | null): apiv1.QueryResultType {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.QueryResultType>(t)) {
		case shared.QueryResultTypeAnswered:
		{
			return 1
			break
		}
		case shared.QueryResultTypeFailed:
		{
			return 2
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function ArchivalStatus(t: $.VarRef<shared.ArchivalStatus> | null): apiv1.ArchivalStatus {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.ArchivalStatus>(t)) {
		case shared.ArchivalStatusDisabled:
		{
			return 1
			break
		}
		case shared.ArchivalStatusEnabled:
		{
			return 2
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function ParentClosePolicy(t: $.VarRef<shared.ParentClosePolicy> | null): apiv1.ParentClosePolicy {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.ParentClosePolicy>(t)) {
		case shared.ParentClosePolicyAbandon:
		{
			return 1
			break
		}
		case shared.ParentClosePolicyRequestCancel:
		{
			return 2
			break
		}
		case shared.ParentClosePolicyTerminate:
		{
			return 3
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function DecisionTaskFailedCause(t: $.VarRef<shared.DecisionTaskFailedCause> | null): apiv1.DecisionTaskFailedCause {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.DecisionTaskFailedCause>(t)) {
		case shared.DecisionTaskFailedCauseUnhandledDecision:
		{
			return 1
			break
		}
		case shared.DecisionTaskFailedCauseBadScheduleActivityAttributes:
		{
			return 2
			break
		}
		case shared.DecisionTaskFailedCauseBadRequestCancelActivityAttributes:
		{
			return 3
			break
		}
		case shared.DecisionTaskFailedCauseBadStartTimerAttributes:
		{
			return 4
			break
		}
		case shared.DecisionTaskFailedCauseBadCancelTimerAttributes:
		{
			return 5
			break
		}
		case shared.DecisionTaskFailedCauseBadRecordMarkerAttributes:
		{
			return 6
			break
		}
		case shared.DecisionTaskFailedCauseBadCompleteWorkflowExecutionAttributes:
		{
			return 7
			break
		}
		case shared.DecisionTaskFailedCauseBadFailWorkflowExecutionAttributes:
		{
			return 8
			break
		}
		case shared.DecisionTaskFailedCauseBadCancelWorkflowExecutionAttributes:
		{
			return 9
			break
		}
		case shared.DecisionTaskFailedCauseBadRequestCancelExternalWorkflowExecutionAttributes:
		{
			return 10
			break
		}
		case shared.DecisionTaskFailedCauseBadContinueAsNewAttributes:
		{
			return 11
			break
		}
		case shared.DecisionTaskFailedCauseStartTimerDuplicateID:
		{
			return 12
			break
		}
		case shared.DecisionTaskFailedCauseResetStickyTasklist:
		{
			return 13
			break
		}
		case shared.DecisionTaskFailedCauseWorkflowWorkerUnhandledFailure:
		{
			return 14
			break
		}
		case shared.DecisionTaskFailedCauseBadSignalWorkflowExecutionAttributes:
		{
			return 15
			break
		}
		case shared.DecisionTaskFailedCauseBadStartChildExecutionAttributes:
		{
			return 16
			break
		}
		case shared.DecisionTaskFailedCauseForceCloseDecision:
		{
			return 17
			break
		}
		case shared.DecisionTaskFailedCauseFailoverCloseDecision:
		{
			return 18
			break
		}
		case shared.DecisionTaskFailedCauseBadSignalInputSize:
		{
			return 19
			break
		}
		case shared.DecisionTaskFailedCauseResetWorkflow:
		{
			return 20
			break
		}
		case shared.DecisionTaskFailedCauseBadBinary:
		{
			return 21
			break
		}
		case shared.DecisionTaskFailedCauseScheduleActivityDuplicateID:
		{
			return 22
			break
		}
		case shared.DecisionTaskFailedCauseBadSearchAttributes:
		{
			return 23
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function WorkflowExecutionCloseStatus(t: $.VarRef<shared.WorkflowExecutionCloseStatus> | null): apiv1.WorkflowExecutionCloseStatus {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.WorkflowExecutionCloseStatus>(t)) {
		case shared.WorkflowExecutionCloseStatusCompleted:
		{
			return 1
			break
		}
		case shared.WorkflowExecutionCloseStatusFailed:
		{
			return 2
			break
		}
		case shared.WorkflowExecutionCloseStatusCanceled:
		{
			return 3
			break
		}
		case shared.WorkflowExecutionCloseStatusTerminated:
		{
			return 4
			break
		}
		case shared.WorkflowExecutionCloseStatusContinuedAsNew:
		{
			return 5
			break
		}
		case shared.WorkflowExecutionCloseStatusTimedOut:
		{
			return 6
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function QueryTaskCompletedType(t: $.VarRef<shared.QueryTaskCompletedType> | null): apiv1.QueryResultType {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.QueryTaskCompletedType>(t)) {
		case shared.QueryTaskCompletedTypeCompleted:
		{
			return 1
			break
		}
		case shared.QueryTaskCompletedTypeFailed:
		{
			return 2
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function DomainStatus(t: $.VarRef<shared.DomainStatus> | null): apiv1.DomainStatus {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.DomainStatus>(t)) {
		case shared.DomainStatusRegistered:
		{
			return 1
			break
		}
		case shared.DomainStatusDeprecated:
		{
			return 2
			break
		}
		case shared.DomainStatusDeleted:
		{
			return 3
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function PendingActivityState(t: $.VarRef<shared.PendingActivityState> | null): apiv1.PendingActivityState {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.PendingActivityState>(t)) {
		case shared.PendingActivityStateScheduled:
		{
			return 1
			break
		}
		case shared.PendingActivityStateStarted:
		{
			return 2
			break
		}
		case shared.PendingActivityStateCancelRequested:
		{
			return 3
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function PendingDecisionState(t: $.VarRef<shared.PendingDecisionState> | null): apiv1.PendingDecisionState {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.PendingDecisionState>(t)) {
		case shared.PendingDecisionStateScheduled:
		{
			return 1
			break
		}
		case shared.PendingDecisionStateStarted:
		{
			return 2
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function IndexedValueType(t: shared.IndexedValueType): apiv1.IndexedValueType {
	switch (t) {
		case shared.IndexedValueTypeString:
		{
			return 1
			break
		}
		case shared.IndexedValueTypeKeyword:
		{
			return 2
			break
		}
		case shared.IndexedValueTypeInt:
		{
			return 3
			break
		}
		case shared.IndexedValueTypeDouble:
		{
			return 4
			break
		}
		case shared.IndexedValueTypeBool:
		{
			return 5
			break
		}
		case shared.IndexedValueTypeDatetime:
		{
			return 6
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function EncodingType(t: $.VarRef<shared.EncodingType> | null): apiv1.EncodingType {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.EncodingType>(t)) {
		case shared.EncodingTypeThriftRW:
		{
			return 1
			break
		}
		case shared.EncodingTypeJSON:
		{
			return 2
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function TimeoutType(t: $.VarRef<shared.TimeoutType> | null): apiv1.TimeoutType {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.TimeoutType>(t)) {
		case shared.TimeoutTypeStartToClose:
		{
			return 1
			break
		}
		case shared.TimeoutTypeScheduleToStart:
		{
			return 2
			break
		}
		case shared.TimeoutTypeScheduleToClose:
		{
			return 3
			break
		}
		case shared.TimeoutTypeHeartbeat:
		{
			return 4
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function DecisionTaskTimedOutCause(t: $.VarRef<shared.DecisionTaskTimedOutCause> | null): apiv1.DecisionTaskTimedOutCause {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.DecisionTaskTimedOutCause>(t)) {
		case shared.DecisionTaskTimedOutCauseTimeout:
		{
			return 1
			break
		}
		case shared.DecisionTaskTimedOutCauseReset:
		{
			return 2
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function CancelExternalWorkflowExecutionFailedCause(t: $.VarRef<shared.CancelExternalWorkflowExecutionFailedCause> | null): apiv1.CancelExternalWorkflowExecutionFailedCause {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.CancelExternalWorkflowExecutionFailedCause>(t)) {
		case shared.CancelExternalWorkflowExecutionFailedCauseUnknownExternalWorkflowExecution:
		{
			return 1
			break
		}
		case shared.CancelExternalWorkflowExecutionFailedCauseWorkflowAlreadyCompleted:
		{
			return 2
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function SignalExternalWorkflowExecutionFailedCause(t: $.VarRef<shared.SignalExternalWorkflowExecutionFailedCause> | null): apiv1.SignalExternalWorkflowExecutionFailedCause {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.SignalExternalWorkflowExecutionFailedCause>(t)) {
		case shared.SignalExternalWorkflowExecutionFailedCauseUnknownExternalWorkflowExecution:
		{
			return 1
			break
		}
		case shared.SignalExternalWorkflowExecutionFailedCauseWorkflowAlreadyCompleted:
		{
			return 2
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function ChildWorkflowExecutionFailedCause(t: $.VarRef<shared.ChildWorkflowExecutionFailedCause> | null): apiv1.ChildWorkflowExecutionFailedCause {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.ChildWorkflowExecutionFailedCause>(t)) {
		case shared.ChildWorkflowExecutionFailedCauseWorkflowAlreadyRunning:
		{
			return 1
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function CronOverlapPolicy(t: $.VarRef<shared.CronOverlapPolicy> | null): apiv1.CronOverlapPolicy {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.CronOverlapPolicy>(t)) {
		case shared.CronOverlapPolicySkipped:
		{
			return 1
			break
		}
		case shared.CronOverlapPolicyBufferone:
		{
			return 2
			break
		}
	}
	return 0
}

export function FailoverType(t: $.VarRef<shared.FailoverType> | null): apiv1.FailoverType {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.FailoverType>(t)) {
		case shared.FailoverTypeInvalid:
		{
			return 0
			break
		}
		case shared.FailoverTypeForce:
		{
			return 1
			break
		}
		case shared.FailoverTypeGraceful:
		{
			return 2
			break
		}
	}
	return 0
}

export function FailureCategory(t: $.VarRef<shared.FailureCategory> | null): apiv1.FailureCategory {
	if (t == null) {
		return 0
	}
	switch ($.pointerValue<shared.FailureCategory>(t)) {
		case shared.FailureCategoryPoll:
		{
			return 1
			break
		}
		case shared.FailureCategoryStandard:
		{
			return 2
			break
		}
		case shared.FailureCategoryFatal:
		{
			return 3
			break
		}
	}
	return 0
}
