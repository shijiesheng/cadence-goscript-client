// Generated file based on internal_logging_tags.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.nonDeterminismDetectionType"])

export type nonDeterminismDetectionType = string

export const tagActivityID: string = "ActivityID"

export const tagActivityType: string = "ActivityType"

export const tagActivityOutcome: string = "ActivityOutcome"

export const tagDomain: string = "Domain"

export const tagEventID: string = "EventID"

export const tagEventType: string = "EventType"

export const tagAttempt: string = "Attempt"

export const tagRunID: string = "RunID"

export const tagTaskList: string = "TaskList"

export const tagTimerID: string = "TimerID"

export const tagWorkflowID: string = "WorkflowID"

export const tagWorkflowType: string = "WorkflowType"

export const tagWorkerID: string = "WorkerID"

export const tagWorkerType: string = "WorkerType"

export const tagSideEffectID: string = "SideEffectID"

export const tagChildWorkflowID: string = "ChildWorkflowID"

export const tagLocalActivityType: string = "LocalActivityType"

export const tagLocalActivityID: string = "LocalActivityID"

export const tagQueryType: string = "QueryType"

export const tagVisibilityQuery: string = "VisibilityQuery"

export const tagPanicError: string = "PanicError"

export const tagPanicStack: string = "PanicStack"

export const causeTag: string = "pollerrorcause"

export const tagWorkflowRuntimeLength: string = "workflowruntimelength"

export const tagNonDeterminismDetectionType: string = "NonDeterminismDetectionType"

export const nonDeterminismDetectionTypeIllegalStatePanic: nonDeterminismDetectionType = "illegalstatepanic"

export const nonDeterminismDetectionTypeReplayComparison: nonDeterminismDetectionType = "replaycomparison"
