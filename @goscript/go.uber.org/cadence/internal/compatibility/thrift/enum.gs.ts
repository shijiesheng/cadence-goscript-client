// Generated file based on enum.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as apiv1 from "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"

export function TaskListKind(t: apiv1.TaskListKind): $.VarRef<shared.TaskListKind> | null {
	switch (t) {
		case apiv1.TaskListKind_TASK_LIST_KIND_INVALID:
		{
			return null
			break
		}
		case apiv1.TaskListKind_TASK_LIST_KIND_NORMAL:
		{
			return shared.TaskListKind_Ptr(shared.TaskListKindNormal)
			break
		}
		case apiv1.TaskListKind_TASK_LIST_KIND_STICKY:
		{
			return shared.TaskListKind_Ptr(shared.TaskListKindSticky)
			break
		}
		case apiv1.TaskListKind_TASK_LIST_KIND_EPHEMERAL:
		{
			return shared.TaskListKind_Ptr(shared.TaskListKindEphemeral)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function TaskListType(t: apiv1.TaskListType): $.VarRef<shared.TaskListType> | null {
	if (t == 0) {
		return null
	}
	switch (t) {
		case apiv1.TaskListType_TASK_LIST_TYPE_DECISION:
		{
			return shared.TaskListType_Ptr(shared.TaskListTypeDecision)
			break
		}
		case apiv1.TaskListType_TASK_LIST_TYPE_ACTIVITY:
		{
			return shared.TaskListType_Ptr(shared.TaskListTypeActivity)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function EventFilterType(t: apiv1.EventFilterType): $.VarRef<shared.HistoryEventFilterType> | null {
	if (t == 0) {
		return null
	}
	switch (t) {
		case apiv1.EventFilterType_EVENT_FILTER_TYPE_ALL_EVENT:
		{
			return shared.HistoryEventFilterType_Ptr(shared.HistoryEventFilterTypeAllEvent)
			break
		}
		case apiv1.EventFilterType_EVENT_FILTER_TYPE_CLOSE_EVENT:
		{
			return shared.HistoryEventFilterType_Ptr(shared.HistoryEventFilterTypeCloseEvent)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function QueryRejectCondition(t: apiv1.QueryRejectCondition): $.VarRef<shared.QueryRejectCondition> | null {
	if (t == 0) {
		return null
	}
	switch (t) {
		case apiv1.QueryRejectCondition_QUERY_REJECT_CONDITION_NOT_OPEN:
		{
			return shared.QueryRejectCondition_Ptr(shared.QueryRejectConditionNotOpen)
			break
		}
		case apiv1.QueryRejectCondition_QUERY_REJECT_CONDITION_NOT_COMPLETED_CLEANLY:
		{
			return shared.QueryRejectCondition_Ptr(shared.QueryRejectConditionNotCompletedCleanly)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function QueryConsistencyLevel(t: apiv1.QueryConsistencyLevel): $.VarRef<shared.QueryConsistencyLevel> | null {
	if (t == 0) {
		return null
	}
	switch (t) {
		case apiv1.QueryConsistencyLevel_QUERY_CONSISTENCY_LEVEL_EVENTUAL:
		{
			return shared.QueryConsistencyLevel_Ptr(shared.QueryConsistencyLevelEventual)
			break
		}
		case apiv1.QueryConsistencyLevel_QUERY_CONSISTENCY_LEVEL_STRONG:
		{
			return shared.QueryConsistencyLevel_Ptr(shared.QueryConsistencyLevelStrong)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function ContinueAsNewInitiator(t: apiv1.ContinueAsNewInitiator): $.VarRef<shared.ContinueAsNewInitiator> | null {
	switch (t) {
		case apiv1.ContinueAsNewInitiator_CONTINUE_AS_NEW_INITIATOR_INVALID:
		{
			return null
			break
		}
		case apiv1.ContinueAsNewInitiator_CONTINUE_AS_NEW_INITIATOR_DECIDER:
		{
			return shared.ContinueAsNewInitiator_Ptr(shared.ContinueAsNewInitiatorDecider)
			break
		}
		case apiv1.ContinueAsNewInitiator_CONTINUE_AS_NEW_INITIATOR_RETRY_POLICY:
		{
			return shared.ContinueAsNewInitiator_Ptr(shared.ContinueAsNewInitiatorRetryPolicy)
			break
		}
		case apiv1.ContinueAsNewInitiator_CONTINUE_AS_NEW_INITIATOR_CRON_SCHEDULE:
		{
			return shared.ContinueAsNewInitiator_Ptr(shared.ContinueAsNewInitiatorCronSchedule)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function WorkflowIDReusePolicy(t: apiv1.WorkflowIdReusePolicy): $.VarRef<shared.WorkflowIdReusePolicy> | null {
	switch (t) {
		case apiv1.WorkflowIdReusePolicy_WORKFLOW_ID_REUSE_POLICY_INVALID:
		{
			return null
			break
		}
		case apiv1.WorkflowIdReusePolicy_WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY:
		{
			return shared.WorkflowIdReusePolicy_Ptr(shared.WorkflowIdReusePolicyAllowDuplicateFailedOnly)
			break
		}
		case apiv1.WorkflowIdReusePolicy_WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE:
		{
			return shared.WorkflowIdReusePolicy_Ptr(shared.WorkflowIdReusePolicyAllowDuplicate)
			break
		}
		case apiv1.WorkflowIdReusePolicy_WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE:
		{
			return shared.WorkflowIdReusePolicy_Ptr(shared.WorkflowIdReusePolicyRejectDuplicate)
			break
		}
		case apiv1.WorkflowIdReusePolicy_WORKFLOW_ID_REUSE_POLICY_TERMINATE_IF_RUNNING:
		{
			return shared.WorkflowIdReusePolicy_Ptr(shared.WorkflowIdReusePolicyTerminateIfRunning)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function QueryResultType(t: apiv1.QueryResultType): $.VarRef<shared.QueryResultType> | null {
	if (t == 0) {
		return null
	}
	switch (t) {
		case apiv1.QueryResultType_QUERY_RESULT_TYPE_ANSWERED:
		{
			return shared.QueryResultType_Ptr(shared.QueryResultTypeAnswered)
			break
		}
		case apiv1.QueryResultType_QUERY_RESULT_TYPE_FAILED:
		{
			return shared.QueryResultType_Ptr(shared.QueryResultTypeFailed)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function ArchivalStatus(t: apiv1.ArchivalStatus): $.VarRef<shared.ArchivalStatus> | null {
	switch (t) {
		case apiv1.ArchivalStatus_ARCHIVAL_STATUS_INVALID:
		{
			return null
			break
		}
		case apiv1.ArchivalStatus_ARCHIVAL_STATUS_DISABLED:
		{
			return shared.ArchivalStatus_Ptr(shared.ArchivalStatusDisabled)
			break
		}
		case apiv1.ArchivalStatus_ARCHIVAL_STATUS_ENABLED:
		{
			return shared.ArchivalStatus_Ptr(shared.ArchivalStatusEnabled)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function ParentClosePolicy(t: apiv1.ParentClosePolicy): $.VarRef<shared.ParentClosePolicy> | null {
	switch (t) {
		case apiv1.ParentClosePolicy_PARENT_CLOSE_POLICY_INVALID:
		{
			return null
			break
		}
		case apiv1.ParentClosePolicy_PARENT_CLOSE_POLICY_ABANDON:
		{
			return shared.ParentClosePolicy_Ptr(shared.ParentClosePolicyAbandon)
			break
		}
		case apiv1.ParentClosePolicy_PARENT_CLOSE_POLICY_REQUEST_CANCEL:
		{
			return shared.ParentClosePolicy_Ptr(shared.ParentClosePolicyRequestCancel)
			break
		}
		case apiv1.ParentClosePolicy_PARENT_CLOSE_POLICY_TERMINATE:
		{
			return shared.ParentClosePolicy_Ptr(shared.ParentClosePolicyTerminate)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function DecisionTaskFailedCause(t: apiv1.DecisionTaskFailedCause): $.VarRef<shared.DecisionTaskFailedCause> | null {
	switch (t) {
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_INVALID:
		{
			return null
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_UNHANDLED_DECISION:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseUnhandledDecision)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_SCHEDULE_ACTIVITY_ATTRIBUTES:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseBadScheduleActivityAttributes)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_ACTIVITY_ATTRIBUTES:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseBadRequestCancelActivityAttributes)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_START_TIMER_ATTRIBUTES:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseBadStartTimerAttributes)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_CANCEL_TIMER_ATTRIBUTES:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseBadCancelTimerAttributes)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_RECORD_MARKER_ATTRIBUTES:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseBadRecordMarkerAttributes)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_COMPLETE_WORKFLOW_EXECUTION_ATTRIBUTES:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseBadCompleteWorkflowExecutionAttributes)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_FAIL_WORKFLOW_EXECUTION_ATTRIBUTES:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseBadFailWorkflowExecutionAttributes)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_CANCEL_WORKFLOW_EXECUTION_ATTRIBUTES:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseBadCancelWorkflowExecutionAttributes)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_ATTRIBUTES:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseBadRequestCancelExternalWorkflowExecutionAttributes)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_CONTINUE_AS_NEW_ATTRIBUTES:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseBadContinueAsNewAttributes)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_START_TIMER_DUPLICATE_ID:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseStartTimerDuplicateID)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_RESET_STICKY_TASK_LIST:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseResetStickyTasklist)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_WORKFLOW_WORKER_UNHANDLED_FAILURE:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseWorkflowWorkerUnhandledFailure)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_SIGNAL_WORKFLOW_EXECUTION_ATTRIBUTES:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseBadSignalWorkflowExecutionAttributes)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_START_CHILD_EXECUTION_ATTRIBUTES:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseBadStartChildExecutionAttributes)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_FORCE_CLOSE_DECISION:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseForceCloseDecision)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_FAILOVER_CLOSE_DECISION:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseFailoverCloseDecision)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_SIGNAL_INPUT_SIZE:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseBadSignalInputSize)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_RESET_WORKFLOW:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseResetWorkflow)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_BINARY:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseBadBinary)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_SCHEDULE_ACTIVITY_DUPLICATE_ID:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseScheduleActivityDuplicateID)
			break
		}
		case apiv1.DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_SEARCH_ATTRIBUTES:
		{
			return shared.DecisionTaskFailedCause_Ptr(shared.DecisionTaskFailedCauseBadSearchAttributes)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function WorkflowExecutionCloseStatus(t: apiv1.WorkflowExecutionCloseStatus): $.VarRef<shared.WorkflowExecutionCloseStatus> | null {
	switch (t) {
		case apiv1.WorkflowExecutionCloseStatus_WORKFLOW_EXECUTION_CLOSE_STATUS_INVALID:
		{
			return null
			break
		}
		case apiv1.WorkflowExecutionCloseStatus_WORKFLOW_EXECUTION_CLOSE_STATUS_COMPLETED:
		{
			return shared.WorkflowExecutionCloseStatus_Ptr(shared.WorkflowExecutionCloseStatusCompleted)
			break
		}
		case apiv1.WorkflowExecutionCloseStatus_WORKFLOW_EXECUTION_CLOSE_STATUS_FAILED:
		{
			return shared.WorkflowExecutionCloseStatus_Ptr(shared.WorkflowExecutionCloseStatusFailed)
			break
		}
		case apiv1.WorkflowExecutionCloseStatus_WORKFLOW_EXECUTION_CLOSE_STATUS_CANCELED:
		{
			return shared.WorkflowExecutionCloseStatus_Ptr(shared.WorkflowExecutionCloseStatusCanceled)
			break
		}
		case apiv1.WorkflowExecutionCloseStatus_WORKFLOW_EXECUTION_CLOSE_STATUS_TERMINATED:
		{
			return shared.WorkflowExecutionCloseStatus_Ptr(shared.WorkflowExecutionCloseStatusTerminated)
			break
		}
		case apiv1.WorkflowExecutionCloseStatus_WORKFLOW_EXECUTION_CLOSE_STATUS_CONTINUED_AS_NEW:
		{
			return shared.WorkflowExecutionCloseStatus_Ptr(shared.WorkflowExecutionCloseStatusContinuedAsNew)
			break
		}
		case apiv1.WorkflowExecutionCloseStatus_WORKFLOW_EXECUTION_CLOSE_STATUS_TIMED_OUT:
		{
			return shared.WorkflowExecutionCloseStatus_Ptr(shared.WorkflowExecutionCloseStatusTimedOut)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function QueryTaskCompletedType(t: apiv1.QueryResultType): $.VarRef<shared.QueryTaskCompletedType> | null {
	if (t == 0) {
		return null
	}
	switch (t) {
		case apiv1.QueryResultType_QUERY_RESULT_TYPE_ANSWERED:
		{
			return shared.QueryTaskCompletedType_Ptr(shared.QueryTaskCompletedTypeCompleted)
			break
		}
		case apiv1.QueryResultType_QUERY_RESULT_TYPE_FAILED:
		{
			return shared.QueryTaskCompletedType_Ptr(shared.QueryTaskCompletedTypeFailed)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function DomainStatus(t: apiv1.DomainStatus): $.VarRef<shared.DomainStatus> | null {
	switch (t) {
		case apiv1.DomainStatus_DOMAIN_STATUS_INVALID:
		{
			return null
			break
		}
		case apiv1.DomainStatus_DOMAIN_STATUS_REGISTERED:
		{
			return shared.DomainStatus_Ptr(shared.DomainStatusRegistered)
			break
		}
		case apiv1.DomainStatus_DOMAIN_STATUS_DEPRECATED:
		{
			return shared.DomainStatus_Ptr(shared.DomainStatusDeprecated)
			break
		}
		case apiv1.DomainStatus_DOMAIN_STATUS_DELETED:
		{
			return shared.DomainStatus_Ptr(shared.DomainStatusDeleted)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function PendingActivityState(t: apiv1.PendingActivityState): $.VarRef<shared.PendingActivityState> | null {
	switch (t) {
		case apiv1.PendingActivityState_PENDING_ACTIVITY_STATE_INVALID:
		{
			return null
			break
		}
		case apiv1.PendingActivityState_PENDING_ACTIVITY_STATE_SCHEDULED:
		{
			return shared.PendingActivityState_Ptr(shared.PendingActivityStateScheduled)
			break
		}
		case apiv1.PendingActivityState_PENDING_ACTIVITY_STATE_STARTED:
		{
			return shared.PendingActivityState_Ptr(shared.PendingActivityStateStarted)
			break
		}
		case apiv1.PendingActivityState_PENDING_ACTIVITY_STATE_CANCEL_REQUESTED:
		{
			return shared.PendingActivityState_Ptr(shared.PendingActivityStateCancelRequested)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function PendingDecisionState(t: apiv1.PendingDecisionState): $.VarRef<shared.PendingDecisionState> | null {
	switch (t) {
		case apiv1.PendingDecisionState_PENDING_DECISION_STATE_INVALID:
		{
			return null
			break
		}
		case apiv1.PendingDecisionState_PENDING_DECISION_STATE_SCHEDULED:
		{
			return shared.PendingDecisionState_Ptr(shared.PendingDecisionStateScheduled)
			break
		}
		case apiv1.PendingDecisionState_PENDING_DECISION_STATE_STARTED:
		{
			return shared.PendingDecisionState_Ptr(shared.PendingDecisionStateStarted)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function IndexedValueType(t: apiv1.IndexedValueType): shared.IndexedValueType {
	switch (t) {
		case apiv1.IndexedValueType_INDEXED_VALUE_TYPE_INVALID:
		{
			$.panic("received IndexedValueType_INDEXED_VALUE_TYPE_INVALID")
			break
		}
		case apiv1.IndexedValueType_INDEXED_VALUE_TYPE_STRING:
		{
			return 0
			break
		}
		case apiv1.IndexedValueType_INDEXED_VALUE_TYPE_KEYWORD:
		{
			return 1
			break
		}
		case apiv1.IndexedValueType_INDEXED_VALUE_TYPE_INT:
		{
			return 2
			break
		}
		case apiv1.IndexedValueType_INDEXED_VALUE_TYPE_DOUBLE:
		{
			return 3
			break
		}
		case apiv1.IndexedValueType_INDEXED_VALUE_TYPE_BOOL:
		{
			return 4
			break
		}
		case apiv1.IndexedValueType_INDEXED_VALUE_TYPE_DATETIME:
		{
			return 5
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function EncodingType(t: apiv1.EncodingType): $.VarRef<shared.EncodingType> | null {
	switch (t) {
		case apiv1.EncodingType_ENCODING_TYPE_INVALID:
		{
			return null
			break
		}
		case apiv1.EncodingType_ENCODING_TYPE_THRIFTRW:
		{
			return shared.EncodingType_Ptr(shared.EncodingTypeThriftRW)
			break
		}
		case apiv1.EncodingType_ENCODING_TYPE_JSON:
		{
			return shared.EncodingType_Ptr(shared.EncodingTypeJSON)
			break
		}
		case apiv1.EncodingType_ENCODING_TYPE_PROTO3:
		{
			$.panic("not supported yet")
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function TimeoutType(t: apiv1.TimeoutType): $.VarRef<shared.TimeoutType> | null {
	switch (t) {
		case apiv1.TimeoutType_TIMEOUT_TYPE_INVALID:
		{
			return null
			break
		}
		case apiv1.TimeoutType_TIMEOUT_TYPE_START_TO_CLOSE:
		{
			return shared.TimeoutType_Ptr(shared.TimeoutTypeStartToClose)
			break
		}
		case apiv1.TimeoutType_TIMEOUT_TYPE_SCHEDULE_TO_START:
		{
			return shared.TimeoutType_Ptr(shared.TimeoutTypeScheduleToStart)
			break
		}
		case apiv1.TimeoutType_TIMEOUT_TYPE_SCHEDULE_TO_CLOSE:
		{
			return shared.TimeoutType_Ptr(shared.TimeoutTypeScheduleToClose)
			break
		}
		case apiv1.TimeoutType_TIMEOUT_TYPE_HEARTBEAT:
		{
			return shared.TimeoutType_Ptr(shared.TimeoutTypeHeartbeat)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function DecisionTaskTimedOutCause(t: apiv1.DecisionTaskTimedOutCause): $.VarRef<shared.DecisionTaskTimedOutCause> | null {
	switch (t) {
		case apiv1.DecisionTaskTimedOutCause_DECISION_TASK_TIMED_OUT_CAUSE_INVALID:
		{
			return null
			break
		}
		case apiv1.DecisionTaskTimedOutCause_DECISION_TASK_TIMED_OUT_CAUSE_TIMEOUT:
		{
			return shared.DecisionTaskTimedOutCause_Ptr(shared.DecisionTaskTimedOutCauseTimeout)
			break
		}
		case apiv1.DecisionTaskTimedOutCause_DECISION_TASK_TIMED_OUT_CAUSE_RESET:
		{
			return shared.DecisionTaskTimedOutCause_Ptr(shared.DecisionTaskTimedOutCauseReset)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function CancelExternalWorkflowExecutionFailedCause(t: apiv1.CancelExternalWorkflowExecutionFailedCause): $.VarRef<shared.CancelExternalWorkflowExecutionFailedCause> | null {
	switch (t) {
		case apiv1.CancelExternalWorkflowExecutionFailedCause_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_INVALID:
		{
			return null
			break
		}
		case apiv1.CancelExternalWorkflowExecutionFailedCause_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION:
		{
			return shared.CancelExternalWorkflowExecutionFailedCause_Ptr(shared.CancelExternalWorkflowExecutionFailedCauseUnknownExternalWorkflowExecution)
			break
		}
		case apiv1.CancelExternalWorkflowExecutionFailedCause_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_COMPLETED:
		{
			return shared.CancelExternalWorkflowExecutionFailedCause_Ptr(shared.CancelExternalWorkflowExecutionFailedCauseWorkflowAlreadyCompleted)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function SignalExternalWorkflowExecutionFailedCause(t: apiv1.SignalExternalWorkflowExecutionFailedCause): $.VarRef<shared.SignalExternalWorkflowExecutionFailedCause> | null {
	switch (t) {
		case apiv1.SignalExternalWorkflowExecutionFailedCause_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_INVALID:
		{
			return null
			break
		}
		case apiv1.SignalExternalWorkflowExecutionFailedCause_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION:
		{
			return shared.SignalExternalWorkflowExecutionFailedCause_Ptr(shared.SignalExternalWorkflowExecutionFailedCauseUnknownExternalWorkflowExecution)
			break
		}
		case apiv1.SignalExternalWorkflowExecutionFailedCause_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_COMPLETED:
		{
			return shared.SignalExternalWorkflowExecutionFailedCause_Ptr(shared.SignalExternalWorkflowExecutionFailedCauseWorkflowAlreadyCompleted)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function ChildWorkflowExecutionFailedCause(t: apiv1.ChildWorkflowExecutionFailedCause): $.VarRef<shared.ChildWorkflowExecutionFailedCause> | null {
	switch (t) {
		case apiv1.ChildWorkflowExecutionFailedCause_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_INVALID:
		{
			return null
			break
		}
		case apiv1.ChildWorkflowExecutionFailedCause_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_RUNNING:
		{
			return shared.ChildWorkflowExecutionFailedCause_Ptr(shared.ChildWorkflowExecutionFailedCauseWorkflowAlreadyRunning)
			break
		}
	}
	$.panic("unexpected enum value")
	throw new globalThis.Error("goscript: unreachable return")
}

export function CronOverlapPolicy(t: apiv1.CronOverlapPolicy): $.VarRef<shared.CronOverlapPolicy> | null {
	switch (t) {
		case apiv1.CronOverlapPolicy_CRON_OVERLAP_POLICY_INVALID:
		{
			return null
			break
		}
		case apiv1.CronOverlapPolicy_CRON_OVERLAP_POLICY_SKIPPED:
		{
			return shared.CronOverlapPolicy_Ptr(shared.CronOverlapPolicySkipped)
			break
		}
		case apiv1.CronOverlapPolicy_CRON_OVERLAP_POLICY_BUFFER_ONE:
		{
			return shared.CronOverlapPolicy_Ptr(shared.CronOverlapPolicyBufferone)
			break
		}
	}
	// we treat any unknown value as invalid
	return null
}

export function FailoverType(t: apiv1.FailoverType): $.VarRef<shared.FailoverType> | null {
	switch (t) {
		case apiv1.FailoverType_FAILOVER_TYPE_INVALID:
		{
			return shared.FailoverType_Ptr(shared.FailoverTypeInvalid)
			break
		}
		case apiv1.FailoverType_FAILOVER_TYPE_FORCE:
		{
			return shared.FailoverType_Ptr(shared.FailoverTypeForce)
			break
		}
		case apiv1.FailoverType_FAILOVER_TYPE_GRACEFUL:
		{
			return shared.FailoverType_Ptr(shared.FailoverTypeGraceful)
			break
		}
	}
	return shared.FailoverType_Ptr(shared.FailoverTypeInvalid)
}

export function FailureCategory(t: apiv1.FailureCategory): $.VarRef<shared.FailureCategory> | null {
	switch (t) {
		case apiv1.FailureCategory_FAILURE_CATEGORY_INVALID:
		{
			return null
			break
		}
		case apiv1.FailureCategory_FAILURE_CATEGORY_POLL:
		{
			return shared.FailureCategory_Ptr(shared.FailureCategoryPoll)
			break
		}
		case apiv1.FailureCategory_FAILURE_CATEGORY_STANDARD:
		{
			return shared.FailureCategory_Ptr(shared.FailureCategoryStandard)
			break
		}
		case apiv1.FailureCategory_FAILURE_CATEGORY_FATAL:
		{
			return shared.FailureCategory_Ptr(shared.FailureCategoryFatal)
			break
		}
	}
	return null
}
