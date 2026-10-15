// Generated file based on workflow.pb.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as types from "@goscript/github.com/gogo/protobuf/types/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as math_bits from "@goscript/math/bits/index.js"

import * as __goscript_common_pb from "./common.pb.gs.ts"

import * as __goscript_tasklist_pb from "./tasklist.pb.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/github.com/gogo/protobuf/types/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/math/bits/index.js"
import "./common.pb.gs.ts"
import "./tasklist.pb.gs.ts"

$.registerTypePackagePath("github.com/uber/cadence-idl/go/proto/api/v1", ["apiv1.PendingActivityState", "apiv1.PendingDecisionState", "apiv1.WorkflowIdReusePolicy", "apiv1.CronOverlapPolicy", "apiv1.ParentClosePolicy", "apiv1.WorkflowExecutionCloseStatus", "apiv1.WorkflowExecutionStatus", "apiv1.ContinueAsNewInitiator", "apiv1.TimeoutType", "apiv1.DecisionTaskTimedOutCause", "apiv1.DecisionTaskFailedCause", "apiv1.ChildWorkflowExecutionFailedCause", "apiv1.CancelExternalWorkflowExecutionFailedCause", "apiv1.SignalExternalWorkflowExecutionFailedCause", "apiv1.WorkflowExecutionInfo", "apiv1.WorkflowExecutionConfiguration", "apiv1.ParentExecutionInfo", "apiv1.ExternalExecutionInfo", "apiv1.PendingActivityInfo", "apiv1.PendingChildExecutionInfo", "apiv1.PendingDecisionInfo", "apiv1.ActivityLocalDispatchInfo", "apiv1.ResetPoints", "apiv1.ResetPointInfo"])

export type PendingActivityState = number

$.registerNamedValueType(
	"apiv1.PendingActivityState",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (PendingActivityState_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (PendingActivityState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.PendingActivityState",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (PendingActivityState_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (PendingActivityState_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type PendingDecisionState = number

$.registerNamedValueType(
	"apiv1.PendingDecisionState",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (PendingDecisionState_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (PendingDecisionState_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.PendingDecisionState",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (PendingDecisionState_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (PendingDecisionState_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type WorkflowIdReusePolicy = number

$.registerNamedValueType(
	"apiv1.WorkflowIdReusePolicy",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (WorkflowIdReusePolicy_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (WorkflowIdReusePolicy_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.WorkflowIdReusePolicy",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (WorkflowIdReusePolicy_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (WorkflowIdReusePolicy_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type CronOverlapPolicy = number

$.registerNamedValueType(
	"apiv1.CronOverlapPolicy",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (CronOverlapPolicy_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (CronOverlapPolicy_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.CronOverlapPolicy",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (CronOverlapPolicy_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (CronOverlapPolicy_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type ParentClosePolicy = number

$.registerNamedValueType(
	"apiv1.ParentClosePolicy",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (ParentClosePolicy_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ParentClosePolicy_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.ParentClosePolicy",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (ParentClosePolicy_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ParentClosePolicy_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type WorkflowExecutionCloseStatus = number

$.registerNamedValueType(
	"apiv1.WorkflowExecutionCloseStatus",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (WorkflowExecutionCloseStatus_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (WorkflowExecutionCloseStatus_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.WorkflowExecutionCloseStatus",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (WorkflowExecutionCloseStatus_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (WorkflowExecutionCloseStatus_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type WorkflowExecutionStatus = number

$.registerNamedValueType(
	"apiv1.WorkflowExecutionStatus",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (WorkflowExecutionStatus_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (WorkflowExecutionStatus_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.WorkflowExecutionStatus",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (WorkflowExecutionStatus_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (WorkflowExecutionStatus_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type ContinueAsNewInitiator = number

$.registerNamedValueType(
	"apiv1.ContinueAsNewInitiator",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (ContinueAsNewInitiator_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ContinueAsNewInitiator_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.ContinueAsNewInitiator",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (ContinueAsNewInitiator_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ContinueAsNewInitiator_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type TimeoutType = number

$.registerNamedValueType(
	"apiv1.TimeoutType",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (TimeoutType_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (TimeoutType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.TimeoutType",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (TimeoutType_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (TimeoutType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type DecisionTaskTimedOutCause = number

$.registerNamedValueType(
	"apiv1.DecisionTaskTimedOutCause",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (DecisionTaskTimedOutCause_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (DecisionTaskTimedOutCause_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.DecisionTaskTimedOutCause",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (DecisionTaskTimedOutCause_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (DecisionTaskTimedOutCause_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type DecisionTaskFailedCause = number

$.registerNamedValueType(
	"apiv1.DecisionTaskFailedCause",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (DecisionTaskFailedCause_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (DecisionTaskFailedCause_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.DecisionTaskFailedCause",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (DecisionTaskFailedCause_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (DecisionTaskFailedCause_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type ChildWorkflowExecutionFailedCause = number

$.registerNamedValueType(
	"apiv1.ChildWorkflowExecutionFailedCause",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (ChildWorkflowExecutionFailedCause_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ChildWorkflowExecutionFailedCause_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.ChildWorkflowExecutionFailedCause",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (ChildWorkflowExecutionFailedCause_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (ChildWorkflowExecutionFailedCause_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type CancelExternalWorkflowExecutionFailedCause = number

$.registerNamedValueType(
	"apiv1.CancelExternalWorkflowExecutionFailedCause",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (CancelExternalWorkflowExecutionFailedCause_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (CancelExternalWorkflowExecutionFailedCause_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.CancelExternalWorkflowExecutionFailedCause",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (CancelExternalWorkflowExecutionFailedCause_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (CancelExternalWorkflowExecutionFailedCause_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type SignalExternalWorkflowExecutionFailedCause = number

$.registerNamedValueType(
	"apiv1.SignalExternalWorkflowExecutionFailedCause",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (SignalExternalWorkflowExecutionFailedCause_EnumDescriptor as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (SignalExternalWorkflowExecutionFailedCause_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*apiv1.SignalExternalWorkflowExecutionFailedCause",
	{EnumDescriptor: (receiver: any, ...args: any[]) => (SignalExternalWorkflowExecutionFailedCause_EnumDescriptor as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (SignalExternalWorkflowExecutionFailedCause_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("EnumDescriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class WorkflowExecutionInfo {
	public get WorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		return this._fields.WorkflowExecution
	}

	public set WorkflowExecution(value: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null) {
		this._fields.WorkflowExecution = value
	}

	public get Type(): __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null {
		return this._fields.Type
	}

	public set Type(value: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null) {
		this._fields.Type = value
	}

	public get StartTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.StartTime
	}

	public set StartTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.StartTime = value
	}

	public get CloseTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.CloseTime
	}

	public set CloseTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.CloseTime = value
	}

	public get CloseStatus(): WorkflowExecutionCloseStatus {
		return this._fields.CloseStatus
	}

	public set CloseStatus(value: WorkflowExecutionCloseStatus) {
		this._fields.CloseStatus = value
	}

	public get HistoryLength(): bigint {
		return this._fields.HistoryLength
	}

	public set HistoryLength(value: bigint) {
		this._fields.HistoryLength = value
	}

	public get ParentExecutionInfo(): ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null {
		return this._fields.ParentExecutionInfo
	}

	public set ParentExecutionInfo(value: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null) {
		this._fields.ParentExecutionInfo = value
	}

	public get ExecutionTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.ExecutionTime
	}

	public set ExecutionTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.ExecutionTime = value
	}

	public get Memo(): __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null {
		return this._fields.Memo
	}

	public set Memo(value: __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null) {
		this._fields.Memo = value
	}

	public get SearchAttributes(): __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null {
		return this._fields.SearchAttributes
	}

	public set SearchAttributes(value: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null) {
		this._fields.SearchAttributes = value
	}

	public get AutoResetPoints(): ResetPoints | $.VarRef<ResetPoints> | null {
		return this._fields.AutoResetPoints
	}

	public set AutoResetPoints(value: ResetPoints | $.VarRef<ResetPoints> | null) {
		this._fields.AutoResetPoints = value
	}

	public get TaskList(): string {
		return this._fields.TaskList
	}

	public set TaskList(value: string) {
		this._fields.TaskList = value
	}

	public get TaskListInfo(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		return this._fields.TaskListInfo
	}

	public set TaskListInfo(value: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null) {
		this._fields.TaskListInfo = value
	}

	public get IsCron(): boolean {
		return this._fields.IsCron
	}

	public set IsCron(value: boolean) {
		this._fields.IsCron = value
	}

	public get UpdateTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.UpdateTime
	}

	public set UpdateTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.UpdateTime = value
	}

	public get PartitionConfig(): globalThis.Map<string, string> | null {
		return this._fields.PartitionConfig
	}

	public set PartitionConfig(value: globalThis.Map<string, string> | null) {
		this._fields.PartitionConfig = value
	}

	public get CronOverlapPolicy(): CronOverlapPolicy {
		return this._fields.CronOverlapPolicy
	}

	public set CronOverlapPolicy(value: CronOverlapPolicy) {
		this._fields.CronOverlapPolicy = value
	}

	public get ActiveClusterSelectionPolicy(): __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null {
		return this._fields.ActiveClusterSelectionPolicy
	}

	public set ActiveClusterSelectionPolicy(value: __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null) {
		this._fields.ActiveClusterSelectionPolicy = value
	}

	public get CronSchedule(): string {
		return this._fields.CronSchedule
	}

	public set CronSchedule(value: string) {
		this._fields.CronSchedule = value
	}

	public get ExecutionStatus(): WorkflowExecutionStatus {
		return this._fields.ExecutionStatus
	}

	public set ExecutionStatus(value: WorkflowExecutionStatus) {
		this._fields.ExecutionStatus = value
	}

	public get ScheduledExecutionTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.ScheduledExecutionTime
	}

	public set ScheduledExecutionTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.ScheduledExecutionTime = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		WorkflowExecution: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null
		Type: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null
		StartTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		CloseTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		CloseStatus: WorkflowExecutionCloseStatus
		HistoryLength: bigint
		ParentExecutionInfo: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null
		ExecutionTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		Memo: __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null
		SearchAttributes: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null
		AutoResetPoints: ResetPoints | $.VarRef<ResetPoints> | null
		TaskList: string
		TaskListInfo: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null
		IsCron: boolean
		UpdateTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		PartitionConfig: globalThis.Map<string, string> | null
		CronOverlapPolicy: CronOverlapPolicy
		ActiveClusterSelectionPolicy: __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null
		CronSchedule: string
		ExecutionStatus: WorkflowExecutionStatus
		ScheduledExecutionTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, Type?: __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null, StartTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, CloseTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, CloseStatus?: WorkflowExecutionCloseStatus, HistoryLength?: bigint, ParentExecutionInfo?: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null, ExecutionTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, Memo?: __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null, SearchAttributes?: __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null, AutoResetPoints?: ResetPoints | $.VarRef<ResetPoints> | null, TaskList?: string, TaskListInfo?: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null, IsCron?: boolean, UpdateTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, PartitionConfig?: globalThis.Map<string, string> | null, CronOverlapPolicy?: CronOverlapPolicy, ActiveClusterSelectionPolicy?: __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null, CronSchedule?: string, ExecutionStatus?: WorkflowExecutionStatus, ScheduledExecutionTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			Type: init?.Type ?? (null! as __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null),
			StartTime: init?.StartTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			CloseTime: init?.CloseTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			CloseStatus: init?.CloseStatus ?? (0 as WorkflowExecutionCloseStatus),
			HistoryLength: init?.HistoryLength ?? (0n as bigint),
			ParentExecutionInfo: init?.ParentExecutionInfo ?? (null! as ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null),
			ExecutionTime: init?.ExecutionTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			Memo: init?.Memo ?? (null! as __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null),
			SearchAttributes: init?.SearchAttributes ?? (null! as __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null),
			AutoResetPoints: init?.AutoResetPoints ?? (null! as ResetPoints | $.VarRef<ResetPoints> | null),
			TaskList: init?.TaskList ?? ("" as string),
			TaskListInfo: init?.TaskListInfo ?? (null! as __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null),
			IsCron: init?.IsCron ?? (false as boolean),
			UpdateTime: init?.UpdateTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			PartitionConfig: init?.PartitionConfig ?? (null! as globalThis.Map<string, string> | null),
			CronOverlapPolicy: init?.CronOverlapPolicy ?? (0 as CronOverlapPolicy),
			ActiveClusterSelectionPolicy: init?.ActiveClusterSelectionPolicy ?? (null! as __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null),
			CronSchedule: init?.CronSchedule ?? ("" as string),
			ExecutionStatus: init?.ExecutionStatus ?? (0 as WorkflowExecutionStatus),
			ScheduledExecutionTime: init?.ScheduledExecutionTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkflowExecutionInfo {
		return new WorkflowExecutionInfo(this, true)
	}

	public __goscriptAssign(source: WorkflowExecutionInfo): void {
		const target = this._fields
		const values = source._fields
		target.WorkflowExecution = values.WorkflowExecution
		target.Type = values.Type
		target.StartTime = values.StartTime
		target.CloseTime = values.CloseTime
		target.CloseStatus = values.CloseStatus
		target.HistoryLength = values.HistoryLength
		target.ParentExecutionInfo = values.ParentExecutionInfo
		target.ExecutionTime = values.ExecutionTime
		target.Memo = values.Memo
		target.SearchAttributes = values.SearchAttributes
		target.AutoResetPoints = values.AutoResetPoints
		target.TaskList = values.TaskList
		target.TaskListInfo = values.TaskListInfo
		target.IsCron = values.IsCron
		target.UpdateTime = values.UpdateTime
		target.PartitionConfig = values.PartitionConfig
		target.CronOverlapPolicy = values.CronOverlapPolicy
		target.ActiveClusterSelectionPolicy = values.ActiveClusterSelectionPolicy
		target.CronSchedule = values.CronSchedule
		target.ExecutionStatus = values.ExecutionStatus
		target.ScheduledExecutionTime = values.ScheduledExecutionTime
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([0])]
	}

	public GetActiveClusterSelectionPolicy(): __goscript_common_pb.ActiveClusterSelectionPolicy | $.VarRef<__goscript_common_pb.ActiveClusterSelectionPolicy> | null {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).ActiveClusterSelectionPolicy
		}
		return null
	}

	public GetAutoResetPoints(): ResetPoints | $.VarRef<ResetPoints> | null {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).AutoResetPoints
		}
		return null
	}

	public GetCloseStatus(): WorkflowExecutionCloseStatus {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).CloseStatus
		}
		return 0
	}

	public GetCloseTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).CloseTime
		}
		return null
	}

	public GetCronOverlapPolicy(): CronOverlapPolicy {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).CronOverlapPolicy
		}
		return 0
	}

	public GetCronSchedule(): string {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).CronSchedule
		}
		return ""
	}

	public GetExecutionStatus(): WorkflowExecutionStatus {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).ExecutionStatus
		}
		return 0
	}

	public GetExecutionTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).ExecutionTime
		}
		return null
	}

	public GetHistoryLength(): bigint {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).HistoryLength
		}
		return 0n
	}

	public GetIsCron(): boolean {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).IsCron
		}
		return false
	}

	public GetMemo(): __goscript_common_pb.Memo | $.VarRef<__goscript_common_pb.Memo> | null {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).Memo
		}
		return null
	}

	public GetParentExecutionInfo(): ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).ParentExecutionInfo
		}
		return null
	}

	public GetPartitionConfig(): globalThis.Map<string, string> | null {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).PartitionConfig
		}
		return null
	}

	public GetScheduledExecutionTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).ScheduledExecutionTime
		}
		return null
	}

	public GetSearchAttributes(): __goscript_common_pb.SearchAttributes | $.VarRef<__goscript_common_pb.SearchAttributes> | null {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).SearchAttributes
		}
		return null
	}

	public GetStartTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).StartTime
		}
		return null
	}

	public GetTaskList(): string {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).TaskList
		}
		return ""
	}

	public GetTaskListInfo(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).TaskListInfo
		}
		return null
	}

	public GetType(): __goscript_common_pb.WorkflowType | $.VarRef<__goscript_common_pb.WorkflowType> | null {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).Type
		}
		return null
	}

	public GetUpdateTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).UpdateTime
		}
		return null
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionInfo>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionInfo).Size() : WorkflowExecutionInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple0: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowExecutionInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionInfo).Size() : WorkflowExecutionInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowExecutionInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		const m$: WorkflowExecutionInfo = m == null ? $.pointerTarget<WorkflowExecutionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecutionInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as WorkflowExecutionInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as WorkflowExecutionInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowExecutionInfo).XXX_unrecognized)
		}
		if ((m$ as WorkflowExecutionInfo).ScheduledExecutionTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as WorkflowExecutionInfo).ScheduledExecutionTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xaa
		}
		if ((m$ as WorkflowExecutionInfo).ExecutionStatus != 0) {
			i = encodeVarintWorkflow(dAtA, i, $.uint64((m$ as WorkflowExecutionInfo).ExecutionStatus))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa0
		}
		if ($.stringLen((m$ as WorkflowExecutionInfo).CronSchedule) > 0) {
			i = i - ($.stringLen((m$ as WorkflowExecutionInfo).CronSchedule))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowExecutionInfo).CronSchedule)
			i = encodeVarintWorkflow(dAtA, i, $.uint64($.stringLen((m$ as WorkflowExecutionInfo).CronSchedule)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x9a
		}
		if ((m$ as WorkflowExecutionInfo).ActiveClusterSelectionPolicy != null) {
			{
				let [size, err] = __goscript_common_pb.ActiveClusterSelectionPolicy.prototype.MarshalToSizedBuffer.call((m$ as WorkflowExecutionInfo).ActiveClusterSelectionPolicy, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x92
		}
		if ((m$ as WorkflowExecutionInfo).TaskListInfo != null) {
			{
				let [size, err] = __goscript_tasklist_pb.TaskList.prototype.MarshalToSizedBuffer.call((m$ as WorkflowExecutionInfo).TaskListInfo, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8a
		}
		if ((m$ as WorkflowExecutionInfo).CronOverlapPolicy != 0) {
			i = encodeVarintWorkflow(dAtA, i, $.uint64((m$ as WorkflowExecutionInfo).CronOverlapPolicy))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x80
		}
		if ($.len((m$ as WorkflowExecutionInfo).PartitionConfig) > 0) {
			for (const [k, __rangeValue] of (m$ as WorkflowExecutionInfo).PartitionConfig?.entries() ?? []) {
				let v = $.mapGet<string, string, string>((m$ as WorkflowExecutionInfo).PartitionConfig, k, "")[0]
				let baseI: number = i
				i = i - ($.stringLen(v))
				$.copy($.goSlice(dAtA, i, undefined), v)
				i = encodeVarintWorkflow(dAtA, i, $.uint64($.stringLen(v)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
				i = i - ($.stringLen(k))
				$.copy($.goSlice(dAtA, i, undefined), k)
				i = encodeVarintWorkflow(dAtA, i, $.uint64($.stringLen(k)))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
				i = encodeVarintWorkflow(dAtA, i, $.uint64(baseI - i))
				i--
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x7a
			}
		}
		if ((m$ as WorkflowExecutionInfo).UpdateTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as WorkflowExecutionInfo).UpdateTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x72
		}
		if ((m$ as WorkflowExecutionInfo).IsCron) {
			i--
			if ((m$ as WorkflowExecutionInfo).IsCron) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x68
		}
		if ($.stringLen((m$ as WorkflowExecutionInfo).TaskList) > 0) {
			i = i - ($.stringLen((m$ as WorkflowExecutionInfo).TaskList))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowExecutionInfo).TaskList)
			i = encodeVarintWorkflow(dAtA, i, $.uint64($.stringLen((m$ as WorkflowExecutionInfo).TaskList)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x62
		}
		if ((m$ as WorkflowExecutionInfo).AutoResetPoints != null) {
			{
				let [size, err] = ResetPoints.prototype.MarshalToSizedBuffer.call((m$ as WorkflowExecutionInfo).AutoResetPoints, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x5a
		}
		if ((m$ as WorkflowExecutionInfo).SearchAttributes != null) {
			{
				let [size, err] = __goscript_common_pb.SearchAttributes.prototype.MarshalToSizedBuffer.call((m$ as WorkflowExecutionInfo).SearchAttributes, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x52
		}
		if ((m$ as WorkflowExecutionInfo).Memo != null) {
			{
				let [size, err] = __goscript_common_pb.Memo.prototype.MarshalToSizedBuffer.call((m$ as WorkflowExecutionInfo).Memo, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x4a
		}
		if ((m$ as WorkflowExecutionInfo).ExecutionTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as WorkflowExecutionInfo).ExecutionTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x42
		}
		if ((m$ as WorkflowExecutionInfo).ParentExecutionInfo != null) {
			{
				let [size, err] = ParentExecutionInfo.prototype.MarshalToSizedBuffer.call((m$ as WorkflowExecutionInfo).ParentExecutionInfo, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x3a
		}
		if ((m$ as WorkflowExecutionInfo).HistoryLength != 0n) {
			i = encodeVarintWorkflow(dAtA, i, $.uint64((m$ as WorkflowExecutionInfo).HistoryLength))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x30
		}
		if ((m$ as WorkflowExecutionInfo).CloseStatus != 0) {
			i = encodeVarintWorkflow(dAtA, i, $.uint64((m$ as WorkflowExecutionInfo).CloseStatus))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x28
		}
		if ((m$ as WorkflowExecutionInfo).CloseTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as WorkflowExecutionInfo).CloseTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as WorkflowExecutionInfo).StartTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as WorkflowExecutionInfo).StartTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as WorkflowExecutionInfo).Type != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowType.prototype.MarshalToSizedBuffer.call((m$ as WorkflowExecutionInfo).Type, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as WorkflowExecutionInfo).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as WorkflowExecutionInfo).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		$.assignStruct($.pointerValue<WorkflowExecutionInfo>(m), $.markAsStructValue(new WorkflowExecutionInfo()))
	}

	public Size(): number {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		let n: number = 0
		const m$: WorkflowExecutionInfo = m == null ? $.pointerTarget<WorkflowExecutionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecutionInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as WorkflowExecutionInfo).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as WorkflowExecutionInfo).WorkflowExecution)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as WorkflowExecutionInfo).Type != null) {
			l = __goscript_common_pb.WorkflowType.prototype.Size.call((m$ as WorkflowExecutionInfo).Type)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as WorkflowExecutionInfo).StartTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as WorkflowExecutionInfo).StartTime)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as WorkflowExecutionInfo).CloseTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as WorkflowExecutionInfo).CloseTime)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as WorkflowExecutionInfo).CloseStatus != 0) {
			n = n + (1 + sovWorkflow($.uint64((m$ as WorkflowExecutionInfo).CloseStatus)))
		}
		if ((m$ as WorkflowExecutionInfo).HistoryLength != 0n) {
			n = n + (1 + sovWorkflow($.uint64((m$ as WorkflowExecutionInfo).HistoryLength)))
		}
		if ((m$ as WorkflowExecutionInfo).ParentExecutionInfo != null) {
			l = ParentExecutionInfo.prototype.Size.call((m$ as WorkflowExecutionInfo).ParentExecutionInfo)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as WorkflowExecutionInfo).ExecutionTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as WorkflowExecutionInfo).ExecutionTime)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as WorkflowExecutionInfo).Memo != null) {
			l = __goscript_common_pb.Memo.prototype.Size.call((m$ as WorkflowExecutionInfo).Memo)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as WorkflowExecutionInfo).SearchAttributes != null) {
			l = __goscript_common_pb.SearchAttributes.prototype.Size.call((m$ as WorkflowExecutionInfo).SearchAttributes)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as WorkflowExecutionInfo).AutoResetPoints != null) {
			l = ResetPoints.prototype.Size.call((m$ as WorkflowExecutionInfo).AutoResetPoints)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as WorkflowExecutionInfo).TaskList)
		if (l > 0) {
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as WorkflowExecutionInfo).IsCron) {
			n = n + (2)
		}
		if ((m$ as WorkflowExecutionInfo).UpdateTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as WorkflowExecutionInfo).UpdateTime)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ($.len((m$ as WorkflowExecutionInfo).PartitionConfig) > 0) {
			for (const [k, v] of (m$ as WorkflowExecutionInfo).PartitionConfig?.entries() ?? []) {
				k
				v
				let mapEntrySize = ((((1 + $.stringLen(k)) + sovWorkflow($.uint64($.stringLen(k)))) + 1) + $.stringLen(v)) + sovWorkflow($.uint64($.stringLen(v)))
				n = n + ((mapEntrySize + 1) + sovWorkflow($.uint64(mapEntrySize)))
			}
		}
		if ((m$ as WorkflowExecutionInfo).CronOverlapPolicy != 0) {
			n = n + (2 + sovWorkflow($.uint64((m$ as WorkflowExecutionInfo).CronOverlapPolicy)))
		}
		if ((m$ as WorkflowExecutionInfo).TaskListInfo != null) {
			l = __goscript_tasklist_pb.TaskList.prototype.Size.call((m$ as WorkflowExecutionInfo).TaskListInfo)
			n = n + ((2 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as WorkflowExecutionInfo).ActiveClusterSelectionPolicy != null) {
			l = __goscript_common_pb.ActiveClusterSelectionPolicy.prototype.Size.call((m$ as WorkflowExecutionInfo).ActiveClusterSelectionPolicy)
			n = n + ((2 + l) + sovWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as WorkflowExecutionInfo).CronSchedule)
		if (l > 0) {
			n = n + ((2 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as WorkflowExecutionInfo).ExecutionStatus != 0) {
			n = n + (2 + sovWorkflow($.uint64((m$ as WorkflowExecutionInfo).ExecutionStatus)))
		}
		if ((m$ as WorkflowExecutionInfo).ScheduledExecutionTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as WorkflowExecutionInfo).ScheduledExecutionTime)
			n = n + ((2 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as WorkflowExecutionInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as WorkflowExecutionInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionInfo")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		const m$: WorkflowExecutionInfo = m == null ? $.pointerTarget<WorkflowExecutionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecutionInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: WorkflowExecutionInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: WorkflowExecutionInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowExecution", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowExecutionInfo).WorkflowExecution == null) {
						;(m$ as WorkflowExecutionInfo).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as WorkflowExecutionInfo).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Type", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowExecutionInfo).Type == null) {
						;(m$ as WorkflowExecutionInfo).Type = new __goscript_common_pb.WorkflowType()
					}
					{
						let err = __goscript_common_pb.WorkflowType.prototype.Unmarshal.call((m$ as WorkflowExecutionInfo).Type, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowExecutionInfo).StartTime == null) {
						;(m$ as WorkflowExecutionInfo).StartTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as WorkflowExecutionInfo).StartTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field CloseTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowExecutionInfo).CloseTime == null) {
						;(m$ as WorkflowExecutionInfo).CloseTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as WorkflowExecutionInfo).CloseTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field CloseStatus", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as WorkflowExecutionInfo).CloseStatus = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++;
						;(m$ as WorkflowExecutionInfo).CloseStatus = (m$ as WorkflowExecutionInfo).CloseStatus | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 6:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field HistoryLength", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as WorkflowExecutionInfo).HistoryLength = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++;
						;(m$ as WorkflowExecutionInfo).HistoryLength = $.int64Or((m$ as WorkflowExecutionInfo).HistoryLength, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 7:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ParentExecutionInfo", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowExecutionInfo).ParentExecutionInfo == null) {
						;(m$ as WorkflowExecutionInfo).ParentExecutionInfo = new ParentExecutionInfo()
					}
					{
						let err = ParentExecutionInfo.prototype.Unmarshal.call((m$ as WorkflowExecutionInfo).ParentExecutionInfo, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 8:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ExecutionTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowExecutionInfo).ExecutionTime == null) {
						;(m$ as WorkflowExecutionInfo).ExecutionTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as WorkflowExecutionInfo).ExecutionTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 9:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Memo", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowExecutionInfo).Memo == null) {
						;(m$ as WorkflowExecutionInfo).Memo = new __goscript_common_pb.Memo()
					}
					{
						let err = __goscript_common_pb.Memo.prototype.Unmarshal.call((m$ as WorkflowExecutionInfo).Memo, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 10:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field SearchAttributes", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowExecutionInfo).SearchAttributes == null) {
						;(m$ as WorkflowExecutionInfo).SearchAttributes = new __goscript_common_pb.SearchAttributes()
					}
					{
						let err = __goscript_common_pb.SearchAttributes.prototype.Unmarshal.call((m$ as WorkflowExecutionInfo).SearchAttributes, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 11:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field AutoResetPoints", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowExecutionInfo).AutoResetPoints == null) {
						;(m$ as WorkflowExecutionInfo).AutoResetPoints = new ResetPoints()
					}
					{
						let err = ResetPoints.prototype.Unmarshal.call((m$ as WorkflowExecutionInfo).AutoResetPoints, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 12:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskList", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowExecutionInfo).TaskList = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 13:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field IsCron", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as WorkflowExecutionInfo).IsCron = (v != 0)
					break
				}
				case 14:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field UpdateTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowExecutionInfo).UpdateTime == null) {
						;(m$ as WorkflowExecutionInfo).UpdateTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as WorkflowExecutionInfo).UpdateTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 15:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field PartitionConfig", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowExecutionInfo).PartitionConfig == null) {
						;(m$ as WorkflowExecutionInfo).PartitionConfig = $.makeMap<string, string>()
					}
					let mapkey: string = ""
					let mapvalue: string = ""
					while (iNdEx < postIndex) {
						let entryPreIndex: number = iNdEx
						let __goscriptShadow0: bigint = 0n
						for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
							if (shift >= 64) {
								return ErrIntOverflowWorkflow
							}
							if (iNdEx >= l) {
								return io.ErrUnexpectedEOF
							}
							let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
							iNdEx++
							__goscriptShadow0 = $.uint64Or(__goscriptShadow0, $.uint64Shl($.uint64(b & 0x7F), shift))
							if (b < 0x80) {
								break
							}
						}
						let __goscriptShadow1 = $.int($.uint64Shr(__goscriptShadow0, 3n), 32)
						if (__goscriptShadow1 == 1) {
							let stringLenmapkey: bigint = 0n
							for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
								if (shift >= 64) {
									return ErrIntOverflowWorkflow
								}
								if (iNdEx >= l) {
									return io.ErrUnexpectedEOF
								}
								let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
								iNdEx++
								stringLenmapkey = $.uint64Or(stringLenmapkey, $.uint64Shl($.uint64(b & 0x7F), shift))
								if (b < 0x80) {
									break
								}
							}
							let intStringLenmapkey = $.int(stringLenmapkey)
							if (intStringLenmapkey < 0) {
								return ErrInvalidLengthWorkflow
							}
							let postStringIndexmapkey: number = iNdEx + intStringLenmapkey
							if (postStringIndexmapkey < 0) {
								return ErrInvalidLengthWorkflow
							}
							if (postStringIndexmapkey > l) {
								return io.ErrUnexpectedEOF
							}
							mapkey = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapkey))
							iNdEx = postStringIndexmapkey
						} else {
							if (__goscriptShadow1 == 2) {
								let stringLenmapvalue: bigint = 0n
								for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
									if (shift >= 64) {
										return ErrIntOverflowWorkflow
									}
									if (iNdEx >= l) {
										return io.ErrUnexpectedEOF
									}
									let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
									iNdEx++
									stringLenmapvalue = $.uint64Or(stringLenmapvalue, $.uint64Shl($.uint64(b & 0x7F), shift))
									if (b < 0x80) {
										break
									}
								}
								let intStringLenmapvalue = $.int(stringLenmapvalue)
								if (intStringLenmapvalue < 0) {
									return ErrInvalidLengthWorkflow
								}
								let postStringIndexmapvalue: number = iNdEx + intStringLenmapvalue
								if (postStringIndexmapvalue < 0) {
									return ErrInvalidLengthWorkflow
								}
								if (postStringIndexmapvalue > l) {
									return io.ErrUnexpectedEOF
								}
								mapvalue = $.bytesToString($.goSlice(dAtA, iNdEx, postStringIndexmapvalue))
								iNdEx = postStringIndexmapvalue
							} else {
								iNdEx = entryPreIndex
								let [skippy, err] = skipWorkflow($.goSlice(dAtA, iNdEx, undefined))
								if (err != null) {
									return err
								}
								if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
									return ErrInvalidLengthWorkflow
								}
								if ((iNdEx + skippy) > postIndex) {
									return io.ErrUnexpectedEOF
								}
								iNdEx = iNdEx + (skippy)
							}
						}
					}
					$.mapSet((m$ as WorkflowExecutionInfo).PartitionConfig, mapkey, mapvalue)
					iNdEx = postIndex
					break
				}
				case 16:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field CronOverlapPolicy", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as WorkflowExecutionInfo).CronOverlapPolicy = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++;
						;(m$ as WorkflowExecutionInfo).CronOverlapPolicy = (m$ as WorkflowExecutionInfo).CronOverlapPolicy | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 17:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskListInfo", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowExecutionInfo).TaskListInfo == null) {
						;(m$ as WorkflowExecutionInfo).TaskListInfo = new __goscript_tasklist_pb.TaskList()
					}
					{
						let err = __goscript_tasklist_pb.TaskList.prototype.Unmarshal.call((m$ as WorkflowExecutionInfo).TaskListInfo, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 18:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActiveClusterSelectionPolicy", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowExecutionInfo).ActiveClusterSelectionPolicy == null) {
						;(m$ as WorkflowExecutionInfo).ActiveClusterSelectionPolicy = new __goscript_common_pb.ActiveClusterSelectionPolicy()
					}
					{
						let err = __goscript_common_pb.ActiveClusterSelectionPolicy.prototype.Unmarshal.call((m$ as WorkflowExecutionInfo).ActiveClusterSelectionPolicy, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 19:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field CronSchedule", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowExecutionInfo).CronSchedule = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 20:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field ExecutionStatus", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as WorkflowExecutionInfo).ExecutionStatus = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++;
						;(m$ as WorkflowExecutionInfo).ExecutionStatus = (m$ as WorkflowExecutionInfo).ExecutionStatus | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 21:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduledExecutionTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowExecutionInfo).ScheduledExecutionTime == null) {
						;(m$ as WorkflowExecutionInfo).ScheduledExecutionTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as WorkflowExecutionInfo).ScheduledExecutionTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowExecutionInfo).XXX_unrecognized = $.appendSlice((m$ as WorkflowExecutionInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public async XXX_DiscardUnknown(): globalThis.Promise<void> {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		await xxx_messageInfo_WorkflowExecutionInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionInfo")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_WorkflowExecutionInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionInfo).MarshalToSizedBuffer(b) : WorkflowExecutionInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		await xxx_messageInfo_WorkflowExecutionInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionInfo")), src)
	}

	public XXX_Size(): number {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionInfo).Size() : WorkflowExecutionInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: WorkflowExecutionInfo | $.VarRef<WorkflowExecutionInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionInfo).Unmarshal(b) : WorkflowExecutionInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.WorkflowExecutionInfo",
		() => new WorkflowExecutionInfo(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetActiveClusterSelectionPolicy", [], [/* @__PURE__ */ $.pointerType("apiv1.ActiveClusterSelectionPolicy")], true), $.methodSignature("GetAutoResetPoints", [], [/* @__PURE__ */ $.pointerType("apiv1.ResetPoints")], true), $.methodSignature("GetCloseStatus", [], [/* @__PURE__ */ $.basicType("int32", "apiv1.WorkflowExecutionCloseStatus")], true), $.methodSignature("GetCloseTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetCronOverlapPolicy", [], [/* @__PURE__ */ $.basicType("int32", "apiv1.CronOverlapPolicy")], true), $.methodSignature("GetCronSchedule", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetExecutionStatus", [], [/* @__PURE__ */ $.basicType("int32", "apiv1.WorkflowExecutionStatus")], true), $.methodSignature("GetExecutionTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetHistoryLength", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetIsCron", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetMemo", [], [/* @__PURE__ */ $.pointerType("apiv1.Memo")], true), $.methodSignature("GetParentExecutionInfo", [], [/* @__PURE__ */ $.pointerType("apiv1.ParentExecutionInfo")], true), $.methodSignature("GetPartitionConfig", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("GetScheduledExecutionTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetSearchAttributes", [], [/* @__PURE__ */ $.pointerType("apiv1.SearchAttributes")], true), $.methodSignature("GetStartTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetTaskList", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetTaskListInfo", [], [/* @__PURE__ */ $.pointerType("apiv1.TaskList")], true), $.methodSignature("GetType", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowType")], true), $.methodSignature("GetUpdateTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetWorkflowExecution", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		WorkflowExecutionInfo,
		() => [/* @__PURE__ */ $.structField("WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.pointerType("apiv1.WorkflowType"), [1], 8, true, { tag: "protobuf:\"bytes,2,opt,name=type,proto3\" json:\"type,omitempty\"" }), /* @__PURE__ */ $.structField("StartTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [2], 16, true, { tag: "protobuf:\"bytes,3,opt,name=start_time,json=startTime,proto3\" json:\"start_time,omitempty\"" }), /* @__PURE__ */ $.structField("CloseTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [3], 24, true, { tag: "protobuf:\"bytes,4,opt,name=close_time,json=closeTime,proto3\" json:\"close_time,omitempty\"" }), /* @__PURE__ */ $.structField("CloseStatus", /* @__PURE__ */ $.basicType("int32", "apiv1.WorkflowExecutionCloseStatus"), [4], 32, true, { tag: "protobuf:\"varint,5,opt,name=close_status,json=closeStatus,proto3,enum=uber.cadence.api.v1.WorkflowExecutionCloseStatus\" json:\"close_status,omitempty\"" }), /* @__PURE__ */ $.structField("HistoryLength", /* @__PURE__ */ $.basicType("int64"), [5], 40, true, { tag: "protobuf:\"varint,6,opt,name=history_length,json=historyLength,proto3\" json:\"history_length,omitempty\"" }), /* @__PURE__ */ $.structField("ParentExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.ParentExecutionInfo"), [6], 48, true, { tag: "protobuf:\"bytes,7,opt,name=parent_execution_info,json=parentExecutionInfo,proto3\" json:\"parent_execution_info,omitempty\"" }), /* @__PURE__ */ $.structField("ExecutionTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [7], 56, true, { tag: "protobuf:\"bytes,8,opt,name=execution_time,json=executionTime,proto3\" json:\"execution_time,omitempty\"" }), /* @__PURE__ */ $.structField("Memo", /* @__PURE__ */ $.pointerType("apiv1.Memo"), [8], 64, true, { tag: "protobuf:\"bytes,9,opt,name=memo,proto3\" json:\"memo,omitempty\"" }), /* @__PURE__ */ $.structField("SearchAttributes", /* @__PURE__ */ $.pointerType("apiv1.SearchAttributes"), [9], 72, true, { tag: "protobuf:\"bytes,10,opt,name=search_attributes,json=searchAttributes,proto3\" json:\"search_attributes,omitempty\"" }), /* @__PURE__ */ $.structField("AutoResetPoints", /* @__PURE__ */ $.pointerType("apiv1.ResetPoints"), [10], 80, true, { tag: "protobuf:\"bytes,11,opt,name=auto_reset_points,json=autoResetPoints,proto3\" json:\"auto_reset_points,omitempty\"" }), /* @__PURE__ */ $.structField("TaskList", /* @__PURE__ */ $.basicType("string"), [11], 88, true, { tag: "protobuf:\"bytes,12,opt,name=task_list,json=taskList,proto3\" json:\"task_list,omitempty\"" }), /* @__PURE__ */ $.structField("TaskListInfo", /* @__PURE__ */ $.pointerType("apiv1.TaskList"), [12], 104, true, { tag: "protobuf:\"bytes,17,opt,name=task_list_info,json=taskListInfo,proto3\" json:\"task_list_info,omitempty\"" }), /* @__PURE__ */ $.structField("IsCron", /* @__PURE__ */ $.basicType("bool"), [13], 112, true, { tag: "protobuf:\"varint,13,opt,name=is_cron,json=isCron,proto3\" json:\"is_cron,omitempty\"" }), /* @__PURE__ */ $.structField("UpdateTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [14], 120, true, { tag: "protobuf:\"bytes,14,opt,name=update_time,json=updateTime,proto3\" json:\"update_time,omitempty\"" }), /* @__PURE__ */ $.structField("PartitionConfig", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [15], 128, true, { tag: "protobuf:\"bytes,15,rep,name=partition_config,json=partitionConfig,proto3\" json:\"partition_config,omitempty\" protobuf_key:\"bytes,1,opt,name=key,proto3\" protobuf_val:\"bytes,2,opt,name=value,proto3\"" }), /* @__PURE__ */ $.structField("CronOverlapPolicy", /* @__PURE__ */ $.basicType("int32", "apiv1.CronOverlapPolicy"), [16], 136, true, { tag: "protobuf:\"varint,16,opt,name=cron_overlap_policy,json=cronOverlapPolicy,proto3,enum=uber.cadence.api.v1.CronOverlapPolicy\" json:\"cron_overlap_policy,omitempty\"" }), /* @__PURE__ */ $.structField("ActiveClusterSelectionPolicy", /* @__PURE__ */ $.pointerType("apiv1.ActiveClusterSelectionPolicy"), [17], 144, true, { tag: "protobuf:\"bytes,18,opt,name=active_cluster_selection_policy,json=activeClusterSelectionPolicy,proto3\" json:\"active_cluster_selection_policy,omitempty\"" }), /* @__PURE__ */ $.structField("CronSchedule", /* @__PURE__ */ $.basicType("string"), [18], 152, true, { tag: "protobuf:\"bytes,19,opt,name=cron_schedule,json=cronSchedule,proto3\" json:\"cron_schedule,omitempty\"" }), /* @__PURE__ */ $.structField("ExecutionStatus", /* @__PURE__ */ $.basicType("int32", "apiv1.WorkflowExecutionStatus"), [19], 168, true, { tag: "protobuf:\"varint,20,opt,name=execution_status,json=executionStatus,proto3,enum=uber.cadence.api.v1.WorkflowExecutionStatus\" json:\"execution_status,omitempty\"" }), /* @__PURE__ */ $.structField("ScheduledExecutionTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [20], 176, true, { tag: "protobuf:\"bytes,21,opt,name=scheduled_execution_time,json=scheduledExecutionTime,proto3\" json:\"scheduled_execution_time,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [21], 184, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [22], 184, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [23], 208, true, { tag: "json:\"-\"" })]
	)
}

export class WorkflowExecutionConfiguration {
	public get TaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		return this._fields.TaskList
	}

	public set TaskList(value: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null) {
		this._fields.TaskList = value
	}

	public get ExecutionStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.ExecutionStartToCloseTimeout
	}

	public set ExecutionStartToCloseTimeout(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.ExecutionStartToCloseTimeout = value
	}

	public get TaskStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		return this._fields.TaskStartToCloseTimeout
	}

	public set TaskStartToCloseTimeout(value: types.Duration | $.VarRef<types.Duration> | null) {
		this._fields.TaskStartToCloseTimeout = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		TaskList: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null
		ExecutionStartToCloseTimeout: types.Duration | $.VarRef<types.Duration> | null
		TaskStartToCloseTimeout: types.Duration | $.VarRef<types.Duration> | null
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{TaskList?: __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null, ExecutionStartToCloseTimeout?: types.Duration | $.VarRef<types.Duration> | null, TaskStartToCloseTimeout?: types.Duration | $.VarRef<types.Duration> | null, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			TaskList: init?.TaskList ?? (null! as __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null),
			ExecutionStartToCloseTimeout: init?.ExecutionStartToCloseTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			TaskStartToCloseTimeout: init?.TaskStartToCloseTimeout ?? (null! as types.Duration | $.VarRef<types.Duration> | null),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkflowExecutionConfiguration {
		return new WorkflowExecutionConfiguration(this, true)
	}

	public __goscriptAssign(source: WorkflowExecutionConfiguration): void {
		const target = this._fields
		const values = source._fields
		target.TaskList = values.TaskList
		target.ExecutionStartToCloseTimeout = values.ExecutionStartToCloseTimeout
		target.TaskStartToCloseTimeout = values.TaskStartToCloseTimeout
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([1])]
	}

	public GetExecutionStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: WorkflowExecutionConfiguration | $.VarRef<WorkflowExecutionConfiguration> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionConfiguration>(m).ExecutionStartToCloseTimeout
		}
		return null
	}

	public GetTaskList(): __goscript_tasklist_pb.TaskList | $.VarRef<__goscript_tasklist_pb.TaskList> | null {
		const m: WorkflowExecutionConfiguration | $.VarRef<WorkflowExecutionConfiguration> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionConfiguration>(m).TaskList
		}
		return null
	}

	public GetTaskStartToCloseTimeout(): types.Duration | $.VarRef<types.Duration> | null {
		const m: WorkflowExecutionConfiguration | $.VarRef<WorkflowExecutionConfiguration> | null = this;
		if (m != null) {
			return $.pointerValue<WorkflowExecutionConfiguration>(m).TaskStartToCloseTimeout
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: WorkflowExecutionConfiguration | $.VarRef<WorkflowExecutionConfiguration> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionConfiguration).Size() : WorkflowExecutionConfiguration.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple1: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionConfiguration).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowExecutionConfiguration.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowExecutionConfiguration | $.VarRef<WorkflowExecutionConfiguration> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionConfiguration).Size() : WorkflowExecutionConfiguration.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionConfiguration).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : WorkflowExecutionConfiguration.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: WorkflowExecutionConfiguration | $.VarRef<WorkflowExecutionConfiguration> | null = this;
		const m$: WorkflowExecutionConfiguration = m == null ? $.pointerTarget<WorkflowExecutionConfiguration>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecutionConfiguration>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as WorkflowExecutionConfiguration).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as WorkflowExecutionConfiguration).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as WorkflowExecutionConfiguration).XXX_unrecognized)
		}
		if ((m$ as WorkflowExecutionConfiguration).TaskStartToCloseTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as WorkflowExecutionConfiguration).TaskStartToCloseTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as WorkflowExecutionConfiguration).ExecutionStartToCloseTimeout != null) {
			{
				let [size, err] = types.Duration.prototype.MarshalToSizedBuffer.call((m$ as WorkflowExecutionConfiguration).ExecutionStartToCloseTimeout, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as WorkflowExecutionConfiguration).TaskList != null) {
			{
				let [size, err] = __goscript_tasklist_pb.TaskList.prototype.MarshalToSizedBuffer.call((m$ as WorkflowExecutionConfiguration).TaskList, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: WorkflowExecutionConfiguration | $.VarRef<WorkflowExecutionConfiguration> | null = this;
		$.assignStruct($.pointerValue<WorkflowExecutionConfiguration>(m), $.markAsStructValue(new WorkflowExecutionConfiguration()))
	}

	public Size(): number {
		const m: WorkflowExecutionConfiguration | $.VarRef<WorkflowExecutionConfiguration> | null = this;
		let n: number = 0
		const m$: WorkflowExecutionConfiguration = m == null ? $.pointerTarget<WorkflowExecutionConfiguration>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecutionConfiguration>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as WorkflowExecutionConfiguration).TaskList != null) {
			l = __goscript_tasklist_pb.TaskList.prototype.Size.call((m$ as WorkflowExecutionConfiguration).TaskList)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as WorkflowExecutionConfiguration).ExecutionStartToCloseTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as WorkflowExecutionConfiguration).ExecutionStartToCloseTimeout)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as WorkflowExecutionConfiguration).TaskStartToCloseTimeout != null) {
			l = types.Duration.prototype.Size.call((m$ as WorkflowExecutionConfiguration).TaskStartToCloseTimeout)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as WorkflowExecutionConfiguration).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as WorkflowExecutionConfiguration).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: WorkflowExecutionConfiguration | $.VarRef<WorkflowExecutionConfiguration> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionConfiguration", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionConfiguration")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: WorkflowExecutionConfiguration | $.VarRef<WorkflowExecutionConfiguration> | null = this;
		const m$: WorkflowExecutionConfiguration = m == null ? $.pointerTarget<WorkflowExecutionConfiguration>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<WorkflowExecutionConfiguration>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: WorkflowExecutionConfiguration: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: WorkflowExecutionConfiguration: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskList", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowExecutionConfiguration).TaskList == null) {
						;(m$ as WorkflowExecutionConfiguration).TaskList = new __goscript_tasklist_pb.TaskList()
					}
					{
						let err = __goscript_tasklist_pb.TaskList.prototype.Unmarshal.call((m$ as WorkflowExecutionConfiguration).TaskList, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ExecutionStartToCloseTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowExecutionConfiguration).ExecutionStartToCloseTimeout == null) {
						;(m$ as WorkflowExecutionConfiguration).ExecutionStartToCloseTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as WorkflowExecutionConfiguration).ExecutionStartToCloseTimeout, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskStartToCloseTimeout", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as WorkflowExecutionConfiguration).TaskStartToCloseTimeout == null) {
						;(m$ as WorkflowExecutionConfiguration).TaskStartToCloseTimeout = new types.Duration()
					}
					{
						let err = types.Duration.prototype.Unmarshal.call((m$ as WorkflowExecutionConfiguration).TaskStartToCloseTimeout, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as WorkflowExecutionConfiguration).XXX_unrecognized = $.appendSlice((m$ as WorkflowExecutionConfiguration).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public async XXX_DiscardUnknown(): globalThis.Promise<void> {
		const m: WorkflowExecutionConfiguration | $.VarRef<WorkflowExecutionConfiguration> | null = this;
		await xxx_messageInfo_WorkflowExecutionConfiguration.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionConfiguration", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionConfiguration")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: WorkflowExecutionConfiguration | $.VarRef<WorkflowExecutionConfiguration> | null = this;
		if (deterministic) {
			return xxx_messageInfo_WorkflowExecutionConfiguration.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionConfiguration", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionConfiguration")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionConfiguration).MarshalToSizedBuffer(b) : WorkflowExecutionConfiguration.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: WorkflowExecutionConfiguration | $.VarRef<WorkflowExecutionConfiguration> | null = this;
		await xxx_messageInfo_WorkflowExecutionConfiguration.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.WorkflowExecutionConfiguration", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionConfiguration")), src)
	}

	public XXX_Size(): number {
		const m: WorkflowExecutionConfiguration | $.VarRef<WorkflowExecutionConfiguration> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionConfiguration).Size() : WorkflowExecutionConfiguration.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: WorkflowExecutionConfiguration | $.VarRef<WorkflowExecutionConfiguration> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as WorkflowExecutionConfiguration).Unmarshal(b) : WorkflowExecutionConfiguration.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.WorkflowExecutionConfiguration",
		() => new WorkflowExecutionConfiguration(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetExecutionStartToCloseTimeout", [], [/* @__PURE__ */ $.pointerType("types.Duration")], true), $.methodSignature("GetTaskList", [], [/* @__PURE__ */ $.pointerType("apiv1.TaskList")], true), $.methodSignature("GetTaskStartToCloseTimeout", [], [/* @__PURE__ */ $.pointerType("types.Duration")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		WorkflowExecutionConfiguration,
		() => [/* @__PURE__ */ $.structField("TaskList", /* @__PURE__ */ $.pointerType("apiv1.TaskList"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=task_list,json=taskList,proto3\" json:\"task_list,omitempty\"" }), /* @__PURE__ */ $.structField("ExecutionStartToCloseTimeout", /* @__PURE__ */ $.pointerType("types.Duration"), [1], 8, true, { tag: "protobuf:\"bytes,2,opt,name=execution_start_to_close_timeout,json=executionStartToCloseTimeout,proto3\" json:\"execution_start_to_close_timeout,omitempty\"" }), /* @__PURE__ */ $.structField("TaskStartToCloseTimeout", /* @__PURE__ */ $.pointerType("types.Duration"), [2], 16, true, { tag: "protobuf:\"bytes,3,opt,name=task_start_to_close_timeout,json=taskStartToCloseTimeout,proto3\" json:\"task_start_to_close_timeout,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [3], 24, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 24, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [5], 48, true, { tag: "json:\"-\"" })]
	)
}

export class ParentExecutionInfo {
	public get DomainId(): string {
		return this._fields.DomainId
	}

	public set DomainId(value: string) {
		this._fields.DomainId = value
	}

	public get DomainName(): string {
		return this._fields.DomainName
	}

	public set DomainName(value: string) {
		this._fields.DomainName = value
	}

	public get WorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		return this._fields.WorkflowExecution
	}

	public set WorkflowExecution(value: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null) {
		this._fields.WorkflowExecution = value
	}

	public get InitiatedId(): bigint {
		return this._fields.InitiatedId
	}

	public set InitiatedId(value: bigint) {
		this._fields.InitiatedId = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		DomainId: string
		DomainName: string
		WorkflowExecution: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null
		InitiatedId: bigint
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{DomainId?: string, DomainName?: string, WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, InitiatedId?: bigint, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			DomainId: init?.DomainId ?? ("" as string),
			DomainName: init?.DomainName ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			InitiatedId: init?.InitiatedId ?? (0n as bigint),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ParentExecutionInfo {
		return new ParentExecutionInfo(this, true)
	}

	public __goscriptAssign(source: ParentExecutionInfo): void {
		const target = this._fields
		const values = source._fields
		target.DomainId = values.DomainId
		target.DomainName = values.DomainName
		target.WorkflowExecution = values.WorkflowExecution
		target.InitiatedId = values.InitiatedId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([2])]
	}

	public GetDomainId(): string {
		const m: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ParentExecutionInfo>(m).DomainId
		}
		return ""
	}

	public GetDomainName(): string {
		const m: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ParentExecutionInfo>(m).DomainName
		}
		return ""
	}

	public GetInitiatedId(): bigint {
		const m: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ParentExecutionInfo>(m).InitiatedId
		}
		return 0n
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ParentExecutionInfo>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ParentExecutionInfo).Size() : ParentExecutionInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple2: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ParentExecutionInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ParentExecutionInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ParentExecutionInfo).Size() : ParentExecutionInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ParentExecutionInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ParentExecutionInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null = this;
		const m$: ParentExecutionInfo = m == null ? $.pointerTarget<ParentExecutionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ParentExecutionInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ParentExecutionInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ParentExecutionInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ParentExecutionInfo).XXX_unrecognized)
		}
		if ((m$ as ParentExecutionInfo).InitiatedId != 0n) {
			i = encodeVarintWorkflow(dAtA, i, $.uint64((m$ as ParentExecutionInfo).InitiatedId))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x20
		}
		if ((m$ as ParentExecutionInfo).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as ParentExecutionInfo).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ($.stringLen((m$ as ParentExecutionInfo).DomainName) > 0) {
			i = i - ($.stringLen((m$ as ParentExecutionInfo).DomainName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ParentExecutionInfo).DomainName)
			i = encodeVarintWorkflow(dAtA, i, $.uint64($.stringLen((m$ as ParentExecutionInfo).DomainName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as ParentExecutionInfo).DomainId) > 0) {
			i = i - ($.stringLen((m$ as ParentExecutionInfo).DomainId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ParentExecutionInfo).DomainId)
			i = encodeVarintWorkflow(dAtA, i, $.uint64($.stringLen((m$ as ParentExecutionInfo).DomainId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null = this;
		$.assignStruct($.pointerValue<ParentExecutionInfo>(m), $.markAsStructValue(new ParentExecutionInfo()))
	}

	public Size(): number {
		const m: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null = this;
		let n: number = 0
		const m$: ParentExecutionInfo = m == null ? $.pointerTarget<ParentExecutionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ParentExecutionInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ParentExecutionInfo).DomainId)
		if (l > 0) {
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as ParentExecutionInfo).DomainName)
		if (l > 0) {
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as ParentExecutionInfo).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as ParentExecutionInfo).WorkflowExecution)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as ParentExecutionInfo).InitiatedId != 0n) {
			n = n + (1 + sovWorkflow($.uint64((m$ as ParentExecutionInfo).InitiatedId)))
		}
		if ((m$ as ParentExecutionInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ParentExecutionInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ParentExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.ParentExecutionInfo")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null = this;
		const m$: ParentExecutionInfo = m == null ? $.pointerTarget<ParentExecutionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ParentExecutionInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow2 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: ParentExecutionInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ParentExecutionInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field DomainId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ParentExecutionInfo).DomainId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field DomainName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ParentExecutionInfo).DomainName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowExecution", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ParentExecutionInfo).WorkflowExecution == null) {
						;(m$ as ParentExecutionInfo).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as ParentExecutionInfo).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field InitiatedId", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ParentExecutionInfo).InitiatedId = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, iNdEx)] as number)
						iNdEx++;
						;(m$ as ParentExecutionInfo).InitiatedId = $.int64Or((m$ as ParentExecutionInfo).InitiatedId, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ParentExecutionInfo).XXX_unrecognized = $.appendSlice((m$ as ParentExecutionInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public async XXX_DiscardUnknown(): globalThis.Promise<void> {
		const m: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null = this;
		await xxx_messageInfo_ParentExecutionInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ParentExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.ParentExecutionInfo")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ParentExecutionInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ParentExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.ParentExecutionInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ParentExecutionInfo).MarshalToSizedBuffer(b) : ParentExecutionInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null = this;
		await xxx_messageInfo_ParentExecutionInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ParentExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.ParentExecutionInfo")), src)
	}

	public XXX_Size(): number {
		const m: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ParentExecutionInfo).Size() : ParentExecutionInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ParentExecutionInfo | $.VarRef<ParentExecutionInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ParentExecutionInfo).Unmarshal(b) : ParentExecutionInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ParentExecutionInfo",
		() => new ParentExecutionInfo(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDomainId", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetDomainName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetInitiatedId", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetWorkflowExecution", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ParentExecutionInfo,
		() => [/* @__PURE__ */ $.structField("DomainId", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=domain_id,json=domainId,proto3\" json:\"domain_id,omitempty\"" }), /* @__PURE__ */ $.structField("DomainName", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=domain_name,json=domainName,proto3\" json:\"domain_name,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), [2], 32, true, { tag: "protobuf:\"bytes,3,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }), /* @__PURE__ */ $.structField("InitiatedId", /* @__PURE__ */ $.basicType("int64"), [3], 40, true, { tag: "protobuf:\"varint,4,opt,name=initiated_id,json=initiatedId,proto3\" json:\"initiated_id,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [4], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [6], 72, true, { tag: "json:\"-\"" })]
	)
}

export class ExternalExecutionInfo {
	public get WorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		return this._fields.WorkflowExecution
	}

	public set WorkflowExecution(value: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null) {
		this._fields.WorkflowExecution = value
	}

	public get InitiatedId(): bigint {
		return this._fields.InitiatedId
	}

	public set InitiatedId(value: bigint) {
		this._fields.InitiatedId = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		WorkflowExecution: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null
		InitiatedId: bigint
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, InitiatedId?: bigint, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			InitiatedId: init?.InitiatedId ?? (0n as bigint),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExternalExecutionInfo {
		return new ExternalExecutionInfo(this, true)
	}

	public __goscriptAssign(source: ExternalExecutionInfo): void {
		const target = this._fields
		const values = source._fields
		target.WorkflowExecution = values.WorkflowExecution
		target.InitiatedId = values.InitiatedId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([3])]
	}

	public GetInitiatedId(): bigint {
		const m: ExternalExecutionInfo | $.VarRef<ExternalExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ExternalExecutionInfo>(m).InitiatedId
		}
		return 0n
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: ExternalExecutionInfo | $.VarRef<ExternalExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ExternalExecutionInfo>(m).WorkflowExecution
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ExternalExecutionInfo | $.VarRef<ExternalExecutionInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ExternalExecutionInfo).Size() : ExternalExecutionInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple3: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ExternalExecutionInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ExternalExecutionInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ExternalExecutionInfo | $.VarRef<ExternalExecutionInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ExternalExecutionInfo).Size() : ExternalExecutionInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ExternalExecutionInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ExternalExecutionInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ExternalExecutionInfo | $.VarRef<ExternalExecutionInfo> | null = this;
		const m$: ExternalExecutionInfo = m == null ? $.pointerTarget<ExternalExecutionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ExternalExecutionInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ExternalExecutionInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ExternalExecutionInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ExternalExecutionInfo).XXX_unrecognized)
		}
		if ((m$ as ExternalExecutionInfo).InitiatedId != 0n) {
			i = encodeVarintWorkflow(dAtA, i, $.uint64((m$ as ExternalExecutionInfo).InitiatedId))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x10
		}
		if ((m$ as ExternalExecutionInfo).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as ExternalExecutionInfo).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ExternalExecutionInfo | $.VarRef<ExternalExecutionInfo> | null = this;
		$.assignStruct($.pointerValue<ExternalExecutionInfo>(m), $.markAsStructValue(new ExternalExecutionInfo()))
	}

	public Size(): number {
		const m: ExternalExecutionInfo | $.VarRef<ExternalExecutionInfo> | null = this;
		let n: number = 0
		const m$: ExternalExecutionInfo = m == null ? $.pointerTarget<ExternalExecutionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ExternalExecutionInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as ExternalExecutionInfo).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as ExternalExecutionInfo).WorkflowExecution)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as ExternalExecutionInfo).InitiatedId != 0n) {
			n = n + (1 + sovWorkflow($.uint64((m$ as ExternalExecutionInfo).InitiatedId)))
		}
		if ((m$ as ExternalExecutionInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ExternalExecutionInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ExternalExecutionInfo | $.VarRef<ExternalExecutionInfo> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ExternalExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.ExternalExecutionInfo")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ExternalExecutionInfo | $.VarRef<ExternalExecutionInfo> | null = this;
		const m$: ExternalExecutionInfo = m == null ? $.pointerTarget<ExternalExecutionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ExternalExecutionInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow3 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: ExternalExecutionInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ExternalExecutionInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowExecution", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ExternalExecutionInfo).WorkflowExecution == null) {
						;(m$ as ExternalExecutionInfo).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as ExternalExecutionInfo).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field InitiatedId", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ExternalExecutionInfo).InitiatedId = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, iNdEx)] as number)
						iNdEx++;
						;(m$ as ExternalExecutionInfo).InitiatedId = $.int64Or((m$ as ExternalExecutionInfo).InitiatedId, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ExternalExecutionInfo).XXX_unrecognized = $.appendSlice((m$ as ExternalExecutionInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public async XXX_DiscardUnknown(): globalThis.Promise<void> {
		const m: ExternalExecutionInfo | $.VarRef<ExternalExecutionInfo> | null = this;
		await xxx_messageInfo_ExternalExecutionInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ExternalExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.ExternalExecutionInfo")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ExternalExecutionInfo | $.VarRef<ExternalExecutionInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ExternalExecutionInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ExternalExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.ExternalExecutionInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ExternalExecutionInfo).MarshalToSizedBuffer(b) : ExternalExecutionInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ExternalExecutionInfo | $.VarRef<ExternalExecutionInfo> | null = this;
		await xxx_messageInfo_ExternalExecutionInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ExternalExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.ExternalExecutionInfo")), src)
	}

	public XXX_Size(): number {
		const m: ExternalExecutionInfo | $.VarRef<ExternalExecutionInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ExternalExecutionInfo).Size() : ExternalExecutionInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ExternalExecutionInfo | $.VarRef<ExternalExecutionInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ExternalExecutionInfo).Unmarshal(b) : ExternalExecutionInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ExternalExecutionInfo",
		() => new ExternalExecutionInfo(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetInitiatedId", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetWorkflowExecution", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ExternalExecutionInfo,
		() => [/* @__PURE__ */ $.structField("WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }), /* @__PURE__ */ $.structField("InitiatedId", /* @__PURE__ */ $.basicType("int64"), [1], 8, true, { tag: "protobuf:\"varint,2,opt,name=initiated_id,json=initiatedId,proto3\" json:\"initiated_id,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [2], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 16, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [4], 40, true, { tag: "json:\"-\"" })]
	)
}

export class PendingActivityInfo {
	public get ActivityId(): string {
		return this._fields.ActivityId
	}

	public set ActivityId(value: string) {
		this._fields.ActivityId = value
	}

	public get ActivityType(): __goscript_common_pb.ActivityType | $.VarRef<__goscript_common_pb.ActivityType> | null {
		return this._fields.ActivityType
	}

	public set ActivityType(value: __goscript_common_pb.ActivityType | $.VarRef<__goscript_common_pb.ActivityType> | null) {
		this._fields.ActivityType = value
	}

	public get State(): PendingActivityState {
		return this._fields.State
	}

	public set State(value: PendingActivityState) {
		this._fields.State = value
	}

	public get HeartbeatDetails(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		return this._fields.HeartbeatDetails
	}

	public set HeartbeatDetails(value: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null) {
		this._fields.HeartbeatDetails = value
	}

	public get LastHeartbeatTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.LastHeartbeatTime
	}

	public set LastHeartbeatTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.LastHeartbeatTime = value
	}

	public get LastStartedTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.LastStartedTime
	}

	public set LastStartedTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.LastStartedTime = value
	}

	public get Attempt(): number {
		return this._fields.Attempt
	}

	public set Attempt(value: number) {
		this._fields.Attempt = value
	}

	public get MaximumAttempts(): number {
		return this._fields.MaximumAttempts
	}

	public set MaximumAttempts(value: number) {
		this._fields.MaximumAttempts = value
	}

	public get ScheduledTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.ScheduledTime
	}

	public set ScheduledTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.ScheduledTime = value
	}

	public get ExpirationTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.ExpirationTime
	}

	public set ExpirationTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.ExpirationTime = value
	}

	public get LastFailure(): __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null {
		return this._fields.LastFailure
	}

	public set LastFailure(value: __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null) {
		this._fields.LastFailure = value
	}

	public get LastWorkerIdentity(): string {
		return this._fields.LastWorkerIdentity
	}

	public set LastWorkerIdentity(value: string) {
		this._fields.LastWorkerIdentity = value
	}

	public get StartedWorkerIdentity(): string {
		return this._fields.StartedWorkerIdentity
	}

	public set StartedWorkerIdentity(value: string) {
		this._fields.StartedWorkerIdentity = value
	}

	public get ScheduleId(): bigint {
		return this._fields.ScheduleId
	}

	public set ScheduleId(value: bigint) {
		this._fields.ScheduleId = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		ActivityId: string
		ActivityType: __goscript_common_pb.ActivityType | $.VarRef<__goscript_common_pb.ActivityType> | null
		State: PendingActivityState
		HeartbeatDetails: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null
		LastHeartbeatTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		LastStartedTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		Attempt: number
		MaximumAttempts: number
		ScheduledTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		ExpirationTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		LastFailure: __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null
		LastWorkerIdentity: string
		StartedWorkerIdentity: string
		ScheduleId: bigint
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{ActivityId?: string, ActivityType?: __goscript_common_pb.ActivityType | $.VarRef<__goscript_common_pb.ActivityType> | null, State?: PendingActivityState, HeartbeatDetails?: __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null, LastHeartbeatTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, LastStartedTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, Attempt?: number, MaximumAttempts?: number, ScheduledTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, ExpirationTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, LastFailure?: __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null, LastWorkerIdentity?: string, StartedWorkerIdentity?: string, ScheduleId?: bigint, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ActivityId: init?.ActivityId ?? ("" as string),
			ActivityType: init?.ActivityType ?? (null! as __goscript_common_pb.ActivityType | $.VarRef<__goscript_common_pb.ActivityType> | null),
			State: init?.State ?? (0 as PendingActivityState),
			HeartbeatDetails: init?.HeartbeatDetails ?? (null! as __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null),
			LastHeartbeatTime: init?.LastHeartbeatTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			LastStartedTime: init?.LastStartedTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			Attempt: init?.Attempt ?? (0 as number),
			MaximumAttempts: init?.MaximumAttempts ?? (0 as number),
			ScheduledTime: init?.ScheduledTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			ExpirationTime: init?.ExpirationTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			LastFailure: init?.LastFailure ?? (null! as __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null),
			LastWorkerIdentity: init?.LastWorkerIdentity ?? ("" as string),
			StartedWorkerIdentity: init?.StartedWorkerIdentity ?? ("" as string),
			ScheduleId: init?.ScheduleId ?? (0n as bigint),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PendingActivityInfo {
		return new PendingActivityInfo(this, true)
	}

	public __goscriptAssign(source: PendingActivityInfo): void {
		const target = this._fields
		const values = source._fields
		target.ActivityId = values.ActivityId
		target.ActivityType = values.ActivityType
		target.State = values.State
		target.HeartbeatDetails = values.HeartbeatDetails
		target.LastHeartbeatTime = values.LastHeartbeatTime
		target.LastStartedTime = values.LastStartedTime
		target.Attempt = values.Attempt
		target.MaximumAttempts = values.MaximumAttempts
		target.ScheduledTime = values.ScheduledTime
		target.ExpirationTime = values.ExpirationTime
		target.LastFailure = values.LastFailure
		target.LastWorkerIdentity = values.LastWorkerIdentity
		target.StartedWorkerIdentity = values.StartedWorkerIdentity
		target.ScheduleId = values.ScheduleId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([4])]
	}

	public GetActivityId(): string {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingActivityInfo>(m).ActivityId
		}
		return ""
	}

	public GetActivityType(): __goscript_common_pb.ActivityType | $.VarRef<__goscript_common_pb.ActivityType> | null {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingActivityInfo>(m).ActivityType
		}
		return null
	}

	public GetAttempt(): number {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingActivityInfo>(m).Attempt
		}
		return 0
	}

	public GetExpirationTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingActivityInfo>(m).ExpirationTime
		}
		return null
	}

	public GetHeartbeatDetails(): __goscript_common_pb.Payload | $.VarRef<__goscript_common_pb.Payload> | null {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingActivityInfo>(m).HeartbeatDetails
		}
		return null
	}

	public GetLastFailure(): __goscript_common_pb.Failure | $.VarRef<__goscript_common_pb.Failure> | null {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingActivityInfo>(m).LastFailure
		}
		return null
	}

	public GetLastHeartbeatTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingActivityInfo>(m).LastHeartbeatTime
		}
		return null
	}

	public GetLastStartedTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingActivityInfo>(m).LastStartedTime
		}
		return null
	}

	public GetLastWorkerIdentity(): string {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingActivityInfo>(m).LastWorkerIdentity
		}
		return ""
	}

	public GetMaximumAttempts(): number {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingActivityInfo>(m).MaximumAttempts
		}
		return 0
	}

	public GetScheduleId(): bigint {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingActivityInfo>(m).ScheduleId
		}
		return 0n
	}

	public GetScheduledTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingActivityInfo>(m).ScheduledTime
		}
		return null
	}

	public GetStartedWorkerIdentity(): string {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingActivityInfo>(m).StartedWorkerIdentity
		}
		return ""
	}

	public GetState(): PendingActivityState {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingActivityInfo>(m).State
		}
		return 0
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingActivityInfo).Size() : PendingActivityInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple4: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingActivityInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PendingActivityInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple4[0]
		err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingActivityInfo).Size() : PendingActivityInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingActivityInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PendingActivityInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		const m$: PendingActivityInfo = m == null ? $.pointerTarget<PendingActivityInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PendingActivityInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as PendingActivityInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as PendingActivityInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PendingActivityInfo).XXX_unrecognized)
		}
		if ((m$ as PendingActivityInfo).ScheduleId != 0n) {
			i = encodeVarintWorkflow(dAtA, i, $.uint64((m$ as PendingActivityInfo).ScheduleId))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x70
		}
		if ($.stringLen((m$ as PendingActivityInfo).StartedWorkerIdentity) > 0) {
			i = i - ($.stringLen((m$ as PendingActivityInfo).StartedWorkerIdentity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PendingActivityInfo).StartedWorkerIdentity)
			i = encodeVarintWorkflow(dAtA, i, $.uint64($.stringLen((m$ as PendingActivityInfo).StartedWorkerIdentity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x6a
		}
		if ($.stringLen((m$ as PendingActivityInfo).LastWorkerIdentity) > 0) {
			i = i - ($.stringLen((m$ as PendingActivityInfo).LastWorkerIdentity))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PendingActivityInfo).LastWorkerIdentity)
			i = encodeVarintWorkflow(dAtA, i, $.uint64($.stringLen((m$ as PendingActivityInfo).LastWorkerIdentity)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x62
		}
		if ((m$ as PendingActivityInfo).LastFailure != null) {
			{
				let [size, err] = __goscript_common_pb.Failure.prototype.MarshalToSizedBuffer.call((m$ as PendingActivityInfo).LastFailure, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x5a
		}
		if ((m$ as PendingActivityInfo).ExpirationTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as PendingActivityInfo).ExpirationTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x52
		}
		if ((m$ as PendingActivityInfo).ScheduledTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as PendingActivityInfo).ScheduledTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x4a
		}
		if ((m$ as PendingActivityInfo).MaximumAttempts != 0) {
			i = encodeVarintWorkflow(dAtA, i, $.uint64((m$ as PendingActivityInfo).MaximumAttempts))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x40
		}
		if ((m$ as PendingActivityInfo).Attempt != 0) {
			i = encodeVarintWorkflow(dAtA, i, $.uint64((m$ as PendingActivityInfo).Attempt))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x38
		}
		if ((m$ as PendingActivityInfo).LastStartedTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as PendingActivityInfo).LastStartedTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x32
		}
		if ((m$ as PendingActivityInfo).LastHeartbeatTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as PendingActivityInfo).LastHeartbeatTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as PendingActivityInfo).HeartbeatDetails != null) {
			{
				let [size, err] = __goscript_common_pb.Payload.prototype.MarshalToSizedBuffer.call((m$ as PendingActivityInfo).HeartbeatDetails, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as PendingActivityInfo).State != 0) {
			i = encodeVarintWorkflow(dAtA, i, $.uint64((m$ as PendingActivityInfo).State))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x18
		}
		if ((m$ as PendingActivityInfo).ActivityType != null) {
			{
				let [size, err] = __goscript_common_pb.ActivityType.prototype.MarshalToSizedBuffer.call((m$ as PendingActivityInfo).ActivityType, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as PendingActivityInfo).ActivityId) > 0) {
			i = i - ($.stringLen((m$ as PendingActivityInfo).ActivityId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PendingActivityInfo).ActivityId)
			i = encodeVarintWorkflow(dAtA, i, $.uint64($.stringLen((m$ as PendingActivityInfo).ActivityId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		$.assignStruct($.pointerValue<PendingActivityInfo>(m), $.markAsStructValue(new PendingActivityInfo()))
	}

	public Size(): number {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		let n: number = 0
		const m$: PendingActivityInfo = m == null ? $.pointerTarget<PendingActivityInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PendingActivityInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as PendingActivityInfo).ActivityId)
		if (l > 0) {
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as PendingActivityInfo).ActivityType != null) {
			l = __goscript_common_pb.ActivityType.prototype.Size.call((m$ as PendingActivityInfo).ActivityType)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as PendingActivityInfo).State != 0) {
			n = n + (1 + sovWorkflow($.uint64((m$ as PendingActivityInfo).State)))
		}
		if ((m$ as PendingActivityInfo).HeartbeatDetails != null) {
			l = __goscript_common_pb.Payload.prototype.Size.call((m$ as PendingActivityInfo).HeartbeatDetails)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as PendingActivityInfo).LastHeartbeatTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as PendingActivityInfo).LastHeartbeatTime)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as PendingActivityInfo).LastStartedTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as PendingActivityInfo).LastStartedTime)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as PendingActivityInfo).Attempt != 0) {
			n = n + (1 + sovWorkflow($.uint64((m$ as PendingActivityInfo).Attempt)))
		}
		if ((m$ as PendingActivityInfo).MaximumAttempts != 0) {
			n = n + (1 + sovWorkflow($.uint64((m$ as PendingActivityInfo).MaximumAttempts)))
		}
		if ((m$ as PendingActivityInfo).ScheduledTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as PendingActivityInfo).ScheduledTime)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as PendingActivityInfo).ExpirationTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as PendingActivityInfo).ExpirationTime)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as PendingActivityInfo).LastFailure != null) {
			l = __goscript_common_pb.Failure.prototype.Size.call((m$ as PendingActivityInfo).LastFailure)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as PendingActivityInfo).LastWorkerIdentity)
		if (l > 0) {
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as PendingActivityInfo).StartedWorkerIdentity)
		if (l > 0) {
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as PendingActivityInfo).ScheduleId != 0n) {
			n = n + (1 + sovWorkflow($.uint64((m$ as PendingActivityInfo).ScheduleId)))
		}
		if ((m$ as PendingActivityInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as PendingActivityInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.PendingActivityInfo", /* @__PURE__ */ $.pointerType("apiv1.PendingActivityInfo")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		const m$: PendingActivityInfo = m == null ? $.pointerTarget<PendingActivityInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PendingActivityInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow4 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: PendingActivityInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: PendingActivityInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActivityId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PendingActivityInfo).ActivityId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActivityType", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PendingActivityInfo).ActivityType == null) {
						;(m$ as PendingActivityInfo).ActivityType = new __goscript_common_pb.ActivityType()
					}
					{
						let err = __goscript_common_pb.ActivityType.prototype.Unmarshal.call((m$ as PendingActivityInfo).ActivityType, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field State", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as PendingActivityInfo).State = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++;
						;(m$ as PendingActivityInfo).State = (m$ as PendingActivityInfo).State | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field HeartbeatDetails", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PendingActivityInfo).HeartbeatDetails == null) {
						;(m$ as PendingActivityInfo).HeartbeatDetails = new __goscript_common_pb.Payload()
					}
					{
						let err = __goscript_common_pb.Payload.prototype.Unmarshal.call((m$ as PendingActivityInfo).HeartbeatDetails, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field LastHeartbeatTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PendingActivityInfo).LastHeartbeatTime == null) {
						;(m$ as PendingActivityInfo).LastHeartbeatTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as PendingActivityInfo).LastHeartbeatTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field LastStartedTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PendingActivityInfo).LastStartedTime == null) {
						;(m$ as PendingActivityInfo).LastStartedTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as PendingActivityInfo).LastStartedTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 7:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Attempt", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as PendingActivityInfo).Attempt = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++;
						;(m$ as PendingActivityInfo).Attempt = (m$ as PendingActivityInfo).Attempt | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 8:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field MaximumAttempts", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as PendingActivityInfo).MaximumAttempts = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++;
						;(m$ as PendingActivityInfo).MaximumAttempts = (m$ as PendingActivityInfo).MaximumAttempts | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 9:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduledTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PendingActivityInfo).ScheduledTime == null) {
						;(m$ as PendingActivityInfo).ScheduledTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as PendingActivityInfo).ScheduledTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 10:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ExpirationTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PendingActivityInfo).ExpirationTime == null) {
						;(m$ as PendingActivityInfo).ExpirationTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as PendingActivityInfo).ExpirationTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 11:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field LastFailure", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PendingActivityInfo).LastFailure == null) {
						;(m$ as PendingActivityInfo).LastFailure = new __goscript_common_pb.Failure()
					}
					{
						let err = __goscript_common_pb.Failure.prototype.Unmarshal.call((m$ as PendingActivityInfo).LastFailure, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 12:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field LastWorkerIdentity", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PendingActivityInfo).LastWorkerIdentity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 13:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartedWorkerIdentity", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PendingActivityInfo).StartedWorkerIdentity = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 14:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduleId", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as PendingActivityInfo).ScheduleId = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, iNdEx)] as number)
						iNdEx++;
						;(m$ as PendingActivityInfo).ScheduleId = $.int64Or((m$ as PendingActivityInfo).ScheduleId, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PendingActivityInfo).XXX_unrecognized = $.appendSlice((m$ as PendingActivityInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public async XXX_DiscardUnknown(): globalThis.Promise<void> {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		await xxx_messageInfo_PendingActivityInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.PendingActivityInfo", /* @__PURE__ */ $.pointerType("apiv1.PendingActivityInfo")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_PendingActivityInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.PendingActivityInfo", /* @__PURE__ */ $.pointerType("apiv1.PendingActivityInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingActivityInfo).MarshalToSizedBuffer(b) : PendingActivityInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		await xxx_messageInfo_PendingActivityInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.PendingActivityInfo", /* @__PURE__ */ $.pointerType("apiv1.PendingActivityInfo")), src)
	}

	public XXX_Size(): number {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingActivityInfo).Size() : PendingActivityInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: PendingActivityInfo | $.VarRef<PendingActivityInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingActivityInfo).Unmarshal(b) : PendingActivityInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.PendingActivityInfo",
		() => new PendingActivityInfo(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetActivityId", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetActivityType", [], [/* @__PURE__ */ $.pointerType("apiv1.ActivityType")], true), $.methodSignature("GetAttempt", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetExpirationTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetHeartbeatDetails", [], [/* @__PURE__ */ $.pointerType("apiv1.Payload")], true), $.methodSignature("GetLastFailure", [], [/* @__PURE__ */ $.pointerType("apiv1.Failure")], true), $.methodSignature("GetLastHeartbeatTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetLastStartedTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetLastWorkerIdentity", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetMaximumAttempts", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetScheduleId", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetScheduledTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetStartedWorkerIdentity", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetState", [], [/* @__PURE__ */ $.basicType("int32", "apiv1.PendingActivityState")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		PendingActivityInfo,
		() => [/* @__PURE__ */ $.structField("ActivityId", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=activity_id,json=activityId,proto3\" json:\"activity_id,omitempty\"" }), /* @__PURE__ */ $.structField("ActivityType", /* @__PURE__ */ $.pointerType("apiv1.ActivityType"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=activity_type,json=activityType,proto3\" json:\"activity_type,omitempty\"" }), /* @__PURE__ */ $.structField("State", /* @__PURE__ */ $.basicType("int32", "apiv1.PendingActivityState"), [2], 24, true, { tag: "protobuf:\"varint,3,opt,name=state,proto3,enum=uber.cadence.api.v1.PendingActivityState\" json:\"state,omitempty\"" }), /* @__PURE__ */ $.structField("HeartbeatDetails", /* @__PURE__ */ $.pointerType("apiv1.Payload"), [3], 32, true, { tag: "protobuf:\"bytes,4,opt,name=heartbeat_details,json=heartbeatDetails,proto3\" json:\"heartbeat_details,omitempty\"" }), /* @__PURE__ */ $.structField("LastHeartbeatTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [4], 40, true, { tag: "protobuf:\"bytes,5,opt,name=last_heartbeat_time,json=lastHeartbeatTime,proto3\" json:\"last_heartbeat_time,omitempty\"" }), /* @__PURE__ */ $.structField("LastStartedTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [5], 48, true, { tag: "protobuf:\"bytes,6,opt,name=last_started_time,json=lastStartedTime,proto3\" json:\"last_started_time,omitempty\"" }), /* @__PURE__ */ $.structField("Attempt", /* @__PURE__ */ $.basicType("int32"), [6], 56, true, { tag: "protobuf:\"varint,7,opt,name=attempt,proto3\" json:\"attempt,omitempty\"" }), /* @__PURE__ */ $.structField("MaximumAttempts", /* @__PURE__ */ $.basicType("int32"), [7], 60, true, { tag: "protobuf:\"varint,8,opt,name=maximum_attempts,json=maximumAttempts,proto3\" json:\"maximum_attempts,omitempty\"" }), /* @__PURE__ */ $.structField("ScheduledTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [8], 64, true, { tag: "protobuf:\"bytes,9,opt,name=scheduled_time,json=scheduledTime,proto3\" json:\"scheduled_time,omitempty\"" }), /* @__PURE__ */ $.structField("ExpirationTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [9], 72, true, { tag: "protobuf:\"bytes,10,opt,name=expiration_time,json=expirationTime,proto3\" json:\"expiration_time,omitempty\"" }), /* @__PURE__ */ $.structField("LastFailure", /* @__PURE__ */ $.pointerType("apiv1.Failure"), [10], 80, true, { tag: "protobuf:\"bytes,11,opt,name=last_failure,json=lastFailure,proto3\" json:\"last_failure,omitempty\"" }), /* @__PURE__ */ $.structField("LastWorkerIdentity", /* @__PURE__ */ $.basicType("string"), [11], 88, true, { tag: "protobuf:\"bytes,12,opt,name=last_worker_identity,json=lastWorkerIdentity,proto3\" json:\"last_worker_identity,omitempty\"" }), /* @__PURE__ */ $.structField("StartedWorkerIdentity", /* @__PURE__ */ $.basicType("string"), [12], 104, true, { tag: "protobuf:\"bytes,13,opt,name=started_worker_identity,json=startedWorkerIdentity,proto3\" json:\"started_worker_identity,omitempty\"" }), /* @__PURE__ */ $.structField("ScheduleId", /* @__PURE__ */ $.basicType("int64"), [13], 120, true, { tag: "protobuf:\"varint,14,opt,name=schedule_id,json=scheduleId,proto3\" json:\"schedule_id,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [14], 128, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [15], 128, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [16], 152, true, { tag: "json:\"-\"" })]
	)
}

export class PendingChildExecutionInfo {
	public get WorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		return this._fields.WorkflowExecution
	}

	public set WorkflowExecution(value: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null) {
		this._fields.WorkflowExecution = value
	}

	public get WorkflowTypeName(): string {
		return this._fields.WorkflowTypeName
	}

	public set WorkflowTypeName(value: string) {
		this._fields.WorkflowTypeName = value
	}

	public get InitiatedId(): bigint {
		return this._fields.InitiatedId
	}

	public set InitiatedId(value: bigint) {
		this._fields.InitiatedId = value
	}

	public get ParentClosePolicy(): ParentClosePolicy {
		return this._fields.ParentClosePolicy
	}

	public set ParentClosePolicy(value: ParentClosePolicy) {
		this._fields.ParentClosePolicy = value
	}

	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		WorkflowExecution: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null
		WorkflowTypeName: string
		InitiatedId: bigint
		ParentClosePolicy: ParentClosePolicy
		Domain: string
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{WorkflowExecution?: __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null, WorkflowTypeName?: string, InitiatedId?: bigint, ParentClosePolicy?: ParentClosePolicy, Domain?: string, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			WorkflowExecution: init?.WorkflowExecution ?? (null! as __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null),
			WorkflowTypeName: init?.WorkflowTypeName ?? ("" as string),
			InitiatedId: init?.InitiatedId ?? (0n as bigint),
			ParentClosePolicy: init?.ParentClosePolicy ?? (0 as ParentClosePolicy),
			Domain: init?.Domain ?? ("" as string),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PendingChildExecutionInfo {
		return new PendingChildExecutionInfo(this, true)
	}

	public __goscriptAssign(source: PendingChildExecutionInfo): void {
		const target = this._fields
		const values = source._fields
		target.WorkflowExecution = values.WorkflowExecution
		target.WorkflowTypeName = values.WorkflowTypeName
		target.InitiatedId = values.InitiatedId
		target.ParentClosePolicy = values.ParentClosePolicy
		target.Domain = values.Domain
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([5])]
	}

	public GetDomain(): string {
		const m: PendingChildExecutionInfo | $.VarRef<PendingChildExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingChildExecutionInfo>(m).Domain
		}
		return ""
	}

	public GetInitiatedId(): bigint {
		const m: PendingChildExecutionInfo | $.VarRef<PendingChildExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingChildExecutionInfo>(m).InitiatedId
		}
		return 0n
	}

	public GetParentClosePolicy(): ParentClosePolicy {
		const m: PendingChildExecutionInfo | $.VarRef<PendingChildExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingChildExecutionInfo>(m).ParentClosePolicy
		}
		return 0
	}

	public GetWorkflowExecution(): __goscript_common_pb.WorkflowExecution | $.VarRef<__goscript_common_pb.WorkflowExecution> | null {
		const m: PendingChildExecutionInfo | $.VarRef<PendingChildExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingChildExecutionInfo>(m).WorkflowExecution
		}
		return null
	}

	public GetWorkflowTypeName(): string {
		const m: PendingChildExecutionInfo | $.VarRef<PendingChildExecutionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingChildExecutionInfo>(m).WorkflowTypeName
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: PendingChildExecutionInfo | $.VarRef<PendingChildExecutionInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingChildExecutionInfo).Size() : PendingChildExecutionInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple5: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingChildExecutionInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PendingChildExecutionInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PendingChildExecutionInfo | $.VarRef<PendingChildExecutionInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingChildExecutionInfo).Size() : PendingChildExecutionInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingChildExecutionInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PendingChildExecutionInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PendingChildExecutionInfo | $.VarRef<PendingChildExecutionInfo> | null = this;
		const m$: PendingChildExecutionInfo = m == null ? $.pointerTarget<PendingChildExecutionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PendingChildExecutionInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as PendingChildExecutionInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as PendingChildExecutionInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PendingChildExecutionInfo).XXX_unrecognized)
		}
		if ($.stringLen((m$ as PendingChildExecutionInfo).Domain) > 0) {
			i = i - ($.stringLen((m$ as PendingChildExecutionInfo).Domain))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PendingChildExecutionInfo).Domain)
			i = encodeVarintWorkflow(dAtA, i, $.uint64($.stringLen((m$ as PendingChildExecutionInfo).Domain)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as PendingChildExecutionInfo).ParentClosePolicy != 0) {
			i = encodeVarintWorkflow(dAtA, i, $.uint64((m$ as PendingChildExecutionInfo).ParentClosePolicy))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x20
		}
		if ((m$ as PendingChildExecutionInfo).InitiatedId != 0n) {
			i = encodeVarintWorkflow(dAtA, i, $.uint64((m$ as PendingChildExecutionInfo).InitiatedId))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x18
		}
		if ($.stringLen((m$ as PendingChildExecutionInfo).WorkflowTypeName) > 0) {
			i = i - ($.stringLen((m$ as PendingChildExecutionInfo).WorkflowTypeName))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PendingChildExecutionInfo).WorkflowTypeName)
			i = encodeVarintWorkflow(dAtA, i, $.uint64($.stringLen((m$ as PendingChildExecutionInfo).WorkflowTypeName)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as PendingChildExecutionInfo).WorkflowExecution != null) {
			{
				let [size, err] = __goscript_common_pb.WorkflowExecution.prototype.MarshalToSizedBuffer.call((m$ as PendingChildExecutionInfo).WorkflowExecution, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: PendingChildExecutionInfo | $.VarRef<PendingChildExecutionInfo> | null = this;
		$.assignStruct($.pointerValue<PendingChildExecutionInfo>(m), $.markAsStructValue(new PendingChildExecutionInfo()))
	}

	public Size(): number {
		const m: PendingChildExecutionInfo | $.VarRef<PendingChildExecutionInfo> | null = this;
		let n: number = 0
		const m$: PendingChildExecutionInfo = m == null ? $.pointerTarget<PendingChildExecutionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PendingChildExecutionInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as PendingChildExecutionInfo).WorkflowExecution != null) {
			l = __goscript_common_pb.WorkflowExecution.prototype.Size.call((m$ as PendingChildExecutionInfo).WorkflowExecution)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as PendingChildExecutionInfo).WorkflowTypeName)
		if (l > 0) {
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as PendingChildExecutionInfo).InitiatedId != 0n) {
			n = n + (1 + sovWorkflow($.uint64((m$ as PendingChildExecutionInfo).InitiatedId)))
		}
		if ((m$ as PendingChildExecutionInfo).ParentClosePolicy != 0) {
			n = n + (1 + sovWorkflow($.uint64((m$ as PendingChildExecutionInfo).ParentClosePolicy)))
		}
		l = $.stringLen((m$ as PendingChildExecutionInfo).Domain)
		if (l > 0) {
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as PendingChildExecutionInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as PendingChildExecutionInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: PendingChildExecutionInfo | $.VarRef<PendingChildExecutionInfo> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.PendingChildExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.PendingChildExecutionInfo")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: PendingChildExecutionInfo | $.VarRef<PendingChildExecutionInfo> | null = this;
		const m$: PendingChildExecutionInfo = m == null ? $.pointerTarget<PendingChildExecutionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PendingChildExecutionInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow5 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: PendingChildExecutionInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: PendingChildExecutionInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowExecution", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PendingChildExecutionInfo).WorkflowExecution == null) {
						;(m$ as PendingChildExecutionInfo).WorkflowExecution = new __goscript_common_pb.WorkflowExecution()
					}
					{
						let err = __goscript_common_pb.WorkflowExecution.prototype.Unmarshal.call((m$ as PendingChildExecutionInfo).WorkflowExecution, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field WorkflowTypeName", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PendingChildExecutionInfo).WorkflowTypeName = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field InitiatedId", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as PendingChildExecutionInfo).InitiatedId = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++;
						;(m$ as PendingChildExecutionInfo).InitiatedId = $.int64Or((m$ as PendingChildExecutionInfo).InitiatedId, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 4:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field ParentClosePolicy", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as PendingChildExecutionInfo).ParentClosePolicy = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++;
						;(m$ as PendingChildExecutionInfo).ParentClosePolicy = (m$ as PendingChildExecutionInfo).ParentClosePolicy | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Domain", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PendingChildExecutionInfo).Domain = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PendingChildExecutionInfo).XXX_unrecognized = $.appendSlice((m$ as PendingChildExecutionInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public async XXX_DiscardUnknown(): globalThis.Promise<void> {
		const m: PendingChildExecutionInfo | $.VarRef<PendingChildExecutionInfo> | null = this;
		await xxx_messageInfo_PendingChildExecutionInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.PendingChildExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.PendingChildExecutionInfo")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: PendingChildExecutionInfo | $.VarRef<PendingChildExecutionInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_PendingChildExecutionInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.PendingChildExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.PendingChildExecutionInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingChildExecutionInfo).MarshalToSizedBuffer(b) : PendingChildExecutionInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: PendingChildExecutionInfo | $.VarRef<PendingChildExecutionInfo> | null = this;
		await xxx_messageInfo_PendingChildExecutionInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.PendingChildExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.PendingChildExecutionInfo")), src)
	}

	public XXX_Size(): number {
		const m: PendingChildExecutionInfo | $.VarRef<PendingChildExecutionInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingChildExecutionInfo).Size() : PendingChildExecutionInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: PendingChildExecutionInfo | $.VarRef<PendingChildExecutionInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingChildExecutionInfo).Unmarshal(b) : PendingChildExecutionInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.PendingChildExecutionInfo",
		() => new PendingChildExecutionInfo(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetDomain", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetInitiatedId", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetParentClosePolicy", [], [/* @__PURE__ */ $.basicType("int32", "apiv1.ParentClosePolicy")], true), $.methodSignature("GetWorkflowExecution", [], [/* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution")], true), $.methodSignature("GetWorkflowTypeName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		PendingChildExecutionInfo,
		() => [/* @__PURE__ */ $.structField("WorkflowExecution", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecution"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=workflow_execution,json=workflowExecution,proto3\" json:\"workflow_execution,omitempty\"" }), /* @__PURE__ */ $.structField("WorkflowTypeName", /* @__PURE__ */ $.basicType("string"), [1], 8, true, { tag: "protobuf:\"bytes,2,opt,name=workflow_type_name,json=workflowTypeName,proto3\" json:\"workflow_type_name,omitempty\"" }), /* @__PURE__ */ $.structField("InitiatedId", /* @__PURE__ */ $.basicType("int64"), [2], 24, true, { tag: "protobuf:\"varint,3,opt,name=initiated_id,json=initiatedId,proto3\" json:\"initiated_id,omitempty\"" }), /* @__PURE__ */ $.structField("ParentClosePolicy", /* @__PURE__ */ $.basicType("int32", "apiv1.ParentClosePolicy"), [3], 32, true, { tag: "protobuf:\"varint,4,opt,name=parent_close_policy,json=parentClosePolicy,proto3,enum=uber.cadence.api.v1.ParentClosePolicy\" json:\"parent_close_policy,omitempty\"" }), /* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [4], 40, true, { tag: "protobuf:\"bytes,5,opt,name=domain,proto3\" json:\"domain,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [5], 56, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 56, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [7], 80, true, { tag: "json:\"-\"" })]
	)
}

export class PendingDecisionInfo {
	public get State(): PendingDecisionState {
		return this._fields.State
	}

	public set State(value: PendingDecisionState) {
		this._fields.State = value
	}

	public get ScheduledTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.ScheduledTime
	}

	public set ScheduledTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.ScheduledTime = value
	}

	public get StartedTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.StartedTime
	}

	public set StartedTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.StartedTime = value
	}

	public get Attempt(): number {
		return this._fields.Attempt
	}

	public set Attempt(value: number) {
		this._fields.Attempt = value
	}

	public get OriginalScheduledTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.OriginalScheduledTime
	}

	public set OriginalScheduledTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.OriginalScheduledTime = value
	}

	public get ScheduleId(): bigint {
		return this._fields.ScheduleId
	}

	public set ScheduleId(value: bigint) {
		this._fields.ScheduleId = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		State: PendingDecisionState
		ScheduledTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		StartedTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		Attempt: number
		OriginalScheduledTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		ScheduleId: bigint
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{State?: PendingDecisionState, ScheduledTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, StartedTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, Attempt?: number, OriginalScheduledTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, ScheduleId?: bigint, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			State: init?.State ?? (0 as PendingDecisionState),
			ScheduledTime: init?.ScheduledTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			StartedTime: init?.StartedTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			Attempt: init?.Attempt ?? (0 as number),
			OriginalScheduledTime: init?.OriginalScheduledTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			ScheduleId: init?.ScheduleId ?? (0n as bigint),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PendingDecisionInfo {
		return new PendingDecisionInfo(this, true)
	}

	public __goscriptAssign(source: PendingDecisionInfo): void {
		const target = this._fields
		const values = source._fields
		target.State = values.State
		target.ScheduledTime = values.ScheduledTime
		target.StartedTime = values.StartedTime
		target.Attempt = values.Attempt
		target.OriginalScheduledTime = values.OriginalScheduledTime
		target.ScheduleId = values.ScheduleId
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([6])]
	}

	public GetAttempt(): number {
		const m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingDecisionInfo>(m).Attempt
		}
		return 0
	}

	public GetOriginalScheduledTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingDecisionInfo>(m).OriginalScheduledTime
		}
		return null
	}

	public GetScheduleId(): bigint {
		const m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingDecisionInfo>(m).ScheduleId
		}
		return 0n
	}

	public GetScheduledTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingDecisionInfo>(m).ScheduledTime
		}
		return null
	}

	public GetStartedTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingDecisionInfo>(m).StartedTime
		}
		return null
	}

	public GetState(): PendingDecisionState {
		const m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		if (m != null) {
			return $.pointerValue<PendingDecisionInfo>(m).State
		}
		return 0
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingDecisionInfo).Size() : PendingDecisionInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple6: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingDecisionInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PendingDecisionInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingDecisionInfo).Size() : PendingDecisionInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingDecisionInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : PendingDecisionInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		const m$: PendingDecisionInfo = m == null ? $.pointerTarget<PendingDecisionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PendingDecisionInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as PendingDecisionInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as PendingDecisionInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as PendingDecisionInfo).XXX_unrecognized)
		}
		if ((m$ as PendingDecisionInfo).ScheduleId != 0n) {
			i = encodeVarintWorkflow(dAtA, i, $.uint64((m$ as PendingDecisionInfo).ScheduleId))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x30
		}
		if ((m$ as PendingDecisionInfo).OriginalScheduledTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as PendingDecisionInfo).OriginalScheduledTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as PendingDecisionInfo).Attempt != 0) {
			i = encodeVarintWorkflow(dAtA, i, $.uint64((m$ as PendingDecisionInfo).Attempt))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x20
		}
		if ((m$ as PendingDecisionInfo).StartedTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as PendingDecisionInfo).StartedTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as PendingDecisionInfo).ScheduledTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as PendingDecisionInfo).ScheduledTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ((m$ as PendingDecisionInfo).State != 0) {
			i = encodeVarintWorkflow(dAtA, i, $.uint64((m$ as PendingDecisionInfo).State))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x8
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		$.assignStruct($.pointerValue<PendingDecisionInfo>(m), $.markAsStructValue(new PendingDecisionInfo()))
	}

	public Size(): number {
		const m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		let n: number = 0
		const m$: PendingDecisionInfo = m == null ? $.pointerTarget<PendingDecisionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PendingDecisionInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ((m$ as PendingDecisionInfo).State != 0) {
			n = n + (1 + sovWorkflow($.uint64((m$ as PendingDecisionInfo).State)))
		}
		if ((m$ as PendingDecisionInfo).ScheduledTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as PendingDecisionInfo).ScheduledTime)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as PendingDecisionInfo).StartedTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as PendingDecisionInfo).StartedTime)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as PendingDecisionInfo).Attempt != 0) {
			n = n + (1 + sovWorkflow($.uint64((m$ as PendingDecisionInfo).Attempt)))
		}
		if ((m$ as PendingDecisionInfo).OriginalScheduledTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as PendingDecisionInfo).OriginalScheduledTime)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as PendingDecisionInfo).ScheduleId != 0n) {
			n = n + (1 + sovWorkflow($.uint64((m$ as PendingDecisionInfo).ScheduleId)))
		}
		if ((m$ as PendingDecisionInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as PendingDecisionInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.PendingDecisionInfo", /* @__PURE__ */ $.pointerType("apiv1.PendingDecisionInfo")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		const m$: PendingDecisionInfo = m == null ? $.pointerTarget<PendingDecisionInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<PendingDecisionInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow6 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: PendingDecisionInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: PendingDecisionInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field State", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as PendingDecisionInfo).State = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++;
						;(m$ as PendingDecisionInfo).State = (m$ as PendingDecisionInfo).State | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduledTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PendingDecisionInfo).ScheduledTime == null) {
						;(m$ as PendingDecisionInfo).ScheduledTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as PendingDecisionInfo).ScheduledTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartedTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PendingDecisionInfo).StartedTime == null) {
						;(m$ as PendingDecisionInfo).StartedTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as PendingDecisionInfo).StartedTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Attempt", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as PendingDecisionInfo).Attempt = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++;
						;(m$ as PendingDecisionInfo).Attempt = (m$ as PendingDecisionInfo).Attempt | ($.int($.int(b & 0x7F, 32) << shift, 32))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field OriginalScheduledTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as PendingDecisionInfo).OriginalScheduledTime == null) {
						;(m$ as PendingDecisionInfo).OriginalScheduledTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as PendingDecisionInfo).OriginalScheduledTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduleId", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as PendingDecisionInfo).ScheduleId = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, iNdEx)] as number)
						iNdEx++;
						;(m$ as PendingDecisionInfo).ScheduleId = $.int64Or((m$ as PendingDecisionInfo).ScheduleId, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as PendingDecisionInfo).XXX_unrecognized = $.appendSlice((m$ as PendingDecisionInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public async XXX_DiscardUnknown(): globalThis.Promise<void> {
		const m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		await xxx_messageInfo_PendingDecisionInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.PendingDecisionInfo", /* @__PURE__ */ $.pointerType("apiv1.PendingDecisionInfo")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_PendingDecisionInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.PendingDecisionInfo", /* @__PURE__ */ $.pointerType("apiv1.PendingDecisionInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingDecisionInfo).MarshalToSizedBuffer(b) : PendingDecisionInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		await xxx_messageInfo_PendingDecisionInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.PendingDecisionInfo", /* @__PURE__ */ $.pointerType("apiv1.PendingDecisionInfo")), src)
	}

	public XXX_Size(): number {
		const m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingDecisionInfo).Size() : PendingDecisionInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: PendingDecisionInfo | $.VarRef<PendingDecisionInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as PendingDecisionInfo).Unmarshal(b) : PendingDecisionInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.PendingDecisionInfo",
		() => new PendingDecisionInfo(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetAttempt", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetOriginalScheduledTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetScheduleId", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetScheduledTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetStartedTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetState", [], [/* @__PURE__ */ $.basicType("int32", "apiv1.PendingDecisionState")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		PendingDecisionInfo,
		() => [/* @__PURE__ */ $.structField("State", /* @__PURE__ */ $.basicType("int32", "apiv1.PendingDecisionState"), [0], 0, true, { tag: "protobuf:\"varint,1,opt,name=state,proto3,enum=uber.cadence.api.v1.PendingDecisionState\" json:\"state,omitempty\"" }), /* @__PURE__ */ $.structField("ScheduledTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [1], 8, true, { tag: "protobuf:\"bytes,2,opt,name=scheduled_time,json=scheduledTime,proto3\" json:\"scheduled_time,omitempty\"" }), /* @__PURE__ */ $.structField("StartedTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [2], 16, true, { tag: "protobuf:\"bytes,3,opt,name=started_time,json=startedTime,proto3\" json:\"started_time,omitempty\"" }), /* @__PURE__ */ $.structField("Attempt", /* @__PURE__ */ $.basicType("int32"), [3], 24, true, { tag: "protobuf:\"varint,4,opt,name=attempt,proto3\" json:\"attempt,omitempty\"" }), /* @__PURE__ */ $.structField("OriginalScheduledTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [4], 32, true, { tag: "protobuf:\"bytes,5,opt,name=original_scheduled_time,json=originalScheduledTime,proto3\" json:\"original_scheduled_time,omitempty\"" }), /* @__PURE__ */ $.structField("ScheduleId", /* @__PURE__ */ $.basicType("int64"), [5], 40, true, { tag: "protobuf:\"varint,6,opt,name=schedule_id,json=scheduleId,proto3\" json:\"schedule_id,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [6], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [7], 48, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [8], 72, true, { tag: "json:\"-\"" })]
	)
}

export class ActivityLocalDispatchInfo {
	public get ActivityId(): string {
		return this._fields.ActivityId
	}

	public set ActivityId(value: string) {
		this._fields.ActivityId = value
	}

	public get ScheduledTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.ScheduledTime
	}

	public set ScheduledTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.ScheduledTime = value
	}

	public get StartedTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.StartedTime
	}

	public set StartedTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.StartedTime = value
	}

	public get ScheduledTimeOfThisAttempt(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.ScheduledTimeOfThisAttempt
	}

	public set ScheduledTimeOfThisAttempt(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.ScheduledTimeOfThisAttempt = value
	}

	public get TaskToken(): $.Slice<number> {
		return this._fields.TaskToken
	}

	public set TaskToken(value: $.Slice<number>) {
		this._fields.TaskToken = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		ActivityId: string
		ScheduledTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		StartedTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		ScheduledTimeOfThisAttempt: types.Timestamp | $.VarRef<types.Timestamp> | null
		TaskToken: $.Slice<number>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{ActivityId?: string, ScheduledTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, StartedTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, ScheduledTimeOfThisAttempt?: types.Timestamp | $.VarRef<types.Timestamp> | null, TaskToken?: $.Slice<number>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ActivityId: init?.ActivityId ?? ("" as string),
			ScheduledTime: init?.ScheduledTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			StartedTime: init?.StartedTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			ScheduledTimeOfThisAttempt: init?.ScheduledTimeOfThisAttempt ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			TaskToken: init?.TaskToken ?? (null! as $.Slice<number>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ActivityLocalDispatchInfo {
		return new ActivityLocalDispatchInfo(this, true)
	}

	public __goscriptAssign(source: ActivityLocalDispatchInfo): void {
		const target = this._fields
		const values = source._fields
		target.ActivityId = values.ActivityId
		target.ScheduledTime = values.ScheduledTime
		target.StartedTime = values.StartedTime
		target.ScheduledTimeOfThisAttempt = values.ScheduledTimeOfThisAttempt
		target.TaskToken = values.TaskToken
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([7])]
	}

	public GetActivityId(): string {
		const m: ActivityLocalDispatchInfo | $.VarRef<ActivityLocalDispatchInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ActivityLocalDispatchInfo>(m).ActivityId
		}
		return ""
	}

	public GetScheduledTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: ActivityLocalDispatchInfo | $.VarRef<ActivityLocalDispatchInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ActivityLocalDispatchInfo>(m).ScheduledTime
		}
		return null
	}

	public GetScheduledTimeOfThisAttempt(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: ActivityLocalDispatchInfo | $.VarRef<ActivityLocalDispatchInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ActivityLocalDispatchInfo>(m).ScheduledTimeOfThisAttempt
		}
		return null
	}

	public GetStartedTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: ActivityLocalDispatchInfo | $.VarRef<ActivityLocalDispatchInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ActivityLocalDispatchInfo>(m).StartedTime
		}
		return null
	}

	public GetTaskToken(): $.Slice<number> {
		const m: ActivityLocalDispatchInfo | $.VarRef<ActivityLocalDispatchInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ActivityLocalDispatchInfo>(m).TaskToken
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ActivityLocalDispatchInfo | $.VarRef<ActivityLocalDispatchInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActivityLocalDispatchInfo).Size() : ActivityLocalDispatchInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple7: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActivityLocalDispatchInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ActivityLocalDispatchInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ActivityLocalDispatchInfo | $.VarRef<ActivityLocalDispatchInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActivityLocalDispatchInfo).Size() : ActivityLocalDispatchInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActivityLocalDispatchInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ActivityLocalDispatchInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ActivityLocalDispatchInfo | $.VarRef<ActivityLocalDispatchInfo> | null = this;
		const m$: ActivityLocalDispatchInfo = m == null ? $.pointerTarget<ActivityLocalDispatchInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ActivityLocalDispatchInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ActivityLocalDispatchInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ActivityLocalDispatchInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ActivityLocalDispatchInfo).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as ActivityLocalDispatchInfo).TaskToken) > 0) {
			i = i - ($.sliceLen((m$ as ActivityLocalDispatchInfo).TaskToken))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ActivityLocalDispatchInfo).TaskToken)
			i = encodeVarintWorkflow(dAtA, i, $.uint64($.sliceLen((m$ as ActivityLocalDispatchInfo).TaskToken)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as ActivityLocalDispatchInfo).ScheduledTimeOfThisAttempt != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as ActivityLocalDispatchInfo).ScheduledTimeOfThisAttempt, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as ActivityLocalDispatchInfo).StartedTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as ActivityLocalDispatchInfo).StartedTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x1a
		}
		if ((m$ as ActivityLocalDispatchInfo).ScheduledTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as ActivityLocalDispatchInfo).ScheduledTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as ActivityLocalDispatchInfo).ActivityId) > 0) {
			i = i - ($.stringLen((m$ as ActivityLocalDispatchInfo).ActivityId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ActivityLocalDispatchInfo).ActivityId)
			i = encodeVarintWorkflow(dAtA, i, $.uint64($.stringLen((m$ as ActivityLocalDispatchInfo).ActivityId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ActivityLocalDispatchInfo | $.VarRef<ActivityLocalDispatchInfo> | null = this;
		$.assignStruct($.pointerValue<ActivityLocalDispatchInfo>(m), $.markAsStructValue(new ActivityLocalDispatchInfo()))
	}

	public Size(): number {
		const m: ActivityLocalDispatchInfo | $.VarRef<ActivityLocalDispatchInfo> | null = this;
		let n: number = 0
		const m$: ActivityLocalDispatchInfo = m == null ? $.pointerTarget<ActivityLocalDispatchInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ActivityLocalDispatchInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ActivityLocalDispatchInfo).ActivityId)
		if (l > 0) {
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as ActivityLocalDispatchInfo).ScheduledTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as ActivityLocalDispatchInfo).ScheduledTime)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as ActivityLocalDispatchInfo).StartedTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as ActivityLocalDispatchInfo).StartedTime)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as ActivityLocalDispatchInfo).ScheduledTimeOfThisAttempt != null) {
			l = types.Timestamp.prototype.Size.call((m$ as ActivityLocalDispatchInfo).ScheduledTimeOfThisAttempt)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		l = $.sliceLen((m$ as ActivityLocalDispatchInfo).TaskToken)
		if (l > 0) {
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as ActivityLocalDispatchInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ActivityLocalDispatchInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ActivityLocalDispatchInfo | $.VarRef<ActivityLocalDispatchInfo> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ActivityLocalDispatchInfo", /* @__PURE__ */ $.pointerType("apiv1.ActivityLocalDispatchInfo")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ActivityLocalDispatchInfo | $.VarRef<ActivityLocalDispatchInfo> | null = this;
		const m$: ActivityLocalDispatchInfo = m == null ? $.pointerTarget<ActivityLocalDispatchInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ActivityLocalDispatchInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow7 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: ActivityLocalDispatchInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ActivityLocalDispatchInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ActivityId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ActivityLocalDispatchInfo).ActivityId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduledTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ActivityLocalDispatchInfo).ScheduledTime == null) {
						;(m$ as ActivityLocalDispatchInfo).ScheduledTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as ActivityLocalDispatchInfo).ScheduledTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field StartedTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ActivityLocalDispatchInfo).StartedTime == null) {
						;(m$ as ActivityLocalDispatchInfo).StartedTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as ActivityLocalDispatchInfo).StartedTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ScheduledTimeOfThisAttempt", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ActivityLocalDispatchInfo).ScheduledTimeOfThisAttempt == null) {
						;(m$ as ActivityLocalDispatchInfo).ScheduledTimeOfThisAttempt = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as ActivityLocalDispatchInfo).ScheduledTimeOfThisAttempt, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field TaskToken", $.basicInterfaceValue(wireType, "int"))
					}
					let byteLen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, iNdEx)] as number)
						iNdEx++
						byteLen = byteLen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (byteLen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + byteLen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ActivityLocalDispatchInfo).TaskToken = $.appendSlice($.goSlice((m$ as ActivityLocalDispatchInfo).TaskToken, undefined, 0), $.goSlice(dAtA, iNdEx, postIndex), $.byteSliceHint)
					if ((m$ as ActivityLocalDispatchInfo).TaskToken == null) {
						;(m$ as ActivityLocalDispatchInfo).TaskToken = new Uint8Array([]) as $.Slice<number>
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ActivityLocalDispatchInfo).XXX_unrecognized = $.appendSlice((m$ as ActivityLocalDispatchInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public async XXX_DiscardUnknown(): globalThis.Promise<void> {
		const m: ActivityLocalDispatchInfo | $.VarRef<ActivityLocalDispatchInfo> | null = this;
		await xxx_messageInfo_ActivityLocalDispatchInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ActivityLocalDispatchInfo", /* @__PURE__ */ $.pointerType("apiv1.ActivityLocalDispatchInfo")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ActivityLocalDispatchInfo | $.VarRef<ActivityLocalDispatchInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ActivityLocalDispatchInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ActivityLocalDispatchInfo", /* @__PURE__ */ $.pointerType("apiv1.ActivityLocalDispatchInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActivityLocalDispatchInfo).MarshalToSizedBuffer(b) : ActivityLocalDispatchInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ActivityLocalDispatchInfo | $.VarRef<ActivityLocalDispatchInfo> | null = this;
		await xxx_messageInfo_ActivityLocalDispatchInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ActivityLocalDispatchInfo", /* @__PURE__ */ $.pointerType("apiv1.ActivityLocalDispatchInfo")), src)
	}

	public XXX_Size(): number {
		const m: ActivityLocalDispatchInfo | $.VarRef<ActivityLocalDispatchInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActivityLocalDispatchInfo).Size() : ActivityLocalDispatchInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ActivityLocalDispatchInfo | $.VarRef<ActivityLocalDispatchInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ActivityLocalDispatchInfo).Unmarshal(b) : ActivityLocalDispatchInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ActivityLocalDispatchInfo",
		() => new ActivityLocalDispatchInfo(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetActivityId", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetScheduledTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetScheduledTimeOfThisAttempt", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetStartedTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetTaskToken", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ActivityLocalDispatchInfo,
		() => [/* @__PURE__ */ $.structField("ActivityId", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=activity_id,json=activityId,proto3\" json:\"activity_id,omitempty\"" }), /* @__PURE__ */ $.structField("ScheduledTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=scheduled_time,json=scheduledTime,proto3\" json:\"scheduled_time,omitempty\"" }), /* @__PURE__ */ $.structField("StartedTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [2], 24, true, { tag: "protobuf:\"bytes,3,opt,name=started_time,json=startedTime,proto3\" json:\"started_time,omitempty\"" }), /* @__PURE__ */ $.structField("ScheduledTimeOfThisAttempt", /* @__PURE__ */ $.pointerType("types.Timestamp"), [3], 32, true, { tag: "protobuf:\"bytes,4,opt,name=scheduled_time_of_this_attempt,json=scheduledTimeOfThisAttempt,proto3\" json:\"scheduled_time_of_this_attempt,omitempty\"" }), /* @__PURE__ */ $.structField("TaskToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 40, true, { tag: "protobuf:\"bytes,5,opt,name=task_token,json=taskToken,proto3\" json:\"task_token,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [5], 64, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [6], 64, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [7], 88, true, { tag: "json:\"-\"" })]
	)
}

export class ResetPoints {
	public get Points(): $.Slice<ResetPointInfo | $.VarRef<ResetPointInfo> | null> {
		return this._fields.Points
	}

	public set Points(value: $.Slice<ResetPointInfo | $.VarRef<ResetPointInfo> | null>) {
		this._fields.Points = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		Points: $.Slice<ResetPointInfo | $.VarRef<ResetPointInfo> | null>
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{Points?: $.Slice<ResetPointInfo | $.VarRef<ResetPointInfo> | null>, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Points: init?.Points ?? (null! as $.Slice<ResetPointInfo | $.VarRef<ResetPointInfo> | null>),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ResetPoints {
		return new ResetPoints(this, true)
	}

	public __goscriptAssign(source: ResetPoints): void {
		const target = this._fields
		const values = source._fields
		target.Points = values.Points
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([8])]
	}

	public GetPoints(): $.Slice<ResetPointInfo | $.VarRef<ResetPointInfo> | null> {
		const m: ResetPoints | $.VarRef<ResetPoints> | null = this;
		if (m != null) {
			return $.pointerValue<ResetPoints>(m).Points
		}
		return null
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ResetPoints | $.VarRef<ResetPoints> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetPoints).Size() : ResetPoints.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple8: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetPoints).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ResetPoints.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple8[0]
		err = __goscriptTuple8[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ResetPoints | $.VarRef<ResetPoints> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetPoints).Size() : ResetPoints.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetPoints).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ResetPoints.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ResetPoints | $.VarRef<ResetPoints> | null = this;
		const m$: ResetPoints = m == null ? $.pointerTarget<ResetPoints>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetPoints>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ResetPoints).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ResetPoints).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResetPoints).XXX_unrecognized)
		}
		if ($.sliceLen((m$ as ResetPoints).Points) > 0) {
			for (let __goscriptSliceWindow8 = $.sliceRange(dAtA), iNdEx = $.sliceLen((m$ as ResetPoints).Points) - 1; iNdEx >= 0; iNdEx--) {
				{
					let [size, err] = ResetPointInfo.prototype.MarshalToSizedBuffer.call($.arrayIndex((m$ as ResetPoints).Points!, iNdEx), $.goSlice(dAtA, undefined, i))
					if (err != null) {
						return [0, err]
					}
					i = i - (size)
					i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
				}
				i--;
				;(__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, i)] = 0xa
			}
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ResetPoints | $.VarRef<ResetPoints> | null = this;
		$.assignStruct($.pointerValue<ResetPoints>(m), $.markAsStructValue(new ResetPoints()))
	}

	public Size(): number {
		const m: ResetPoints | $.VarRef<ResetPoints> | null = this;
		let n: number = 0
		const m$: ResetPoints = m == null ? $.pointerTarget<ResetPoints>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetPoints>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		if ($.sliceLen((m$ as ResetPoints).Points) > 0) {
			for (let __goscriptRangeTarget0 = (m$ as ResetPoints).Points, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let e = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as ResetPointInfo | $.VarRef<ResetPointInfo> | null)
				l = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as ResetPointInfo).Size() : ResetPointInfo.prototype.Size.call(e))
				n = n + ((1 + l) + sovWorkflow($.uint64(l)))
			}
		}
		if ((m$ as ResetPoints).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ResetPoints).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ResetPoints | $.VarRef<ResetPoints> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetPoints", /* @__PURE__ */ $.pointerType("apiv1.ResetPoints")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ResetPoints | $.VarRef<ResetPoints> | null = this;
		const m$: ResetPoints = m == null ? $.pointerTarget<ResetPoints>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetPoints>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow9 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: ResetPoints: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ResetPoints: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field Points", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResetPoints).Points = $.appendOne((m$ as ResetPoints).Points, new ResetPointInfo(), $.appendZeros.nil)
					{
						let err = ResetPointInfo.prototype.Unmarshal.call($.arrayIndex((m$ as ResetPoints).Points!, $.sliceLen((m$ as ResetPoints).Points) - 1), $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResetPoints).XXX_unrecognized = $.appendSlice((m$ as ResetPoints).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public async XXX_DiscardUnknown(): globalThis.Promise<void> {
		const m: ResetPoints | $.VarRef<ResetPoints> | null = this;
		await xxx_messageInfo_ResetPoints.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetPoints", /* @__PURE__ */ $.pointerType("apiv1.ResetPoints")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ResetPoints | $.VarRef<ResetPoints> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ResetPoints.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ResetPoints", /* @__PURE__ */ $.pointerType("apiv1.ResetPoints")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetPoints).MarshalToSizedBuffer(b) : ResetPoints.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ResetPoints | $.VarRef<ResetPoints> | null = this;
		await xxx_messageInfo_ResetPoints.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetPoints", /* @__PURE__ */ $.pointerType("apiv1.ResetPoints")), src)
	}

	public XXX_Size(): number {
		const m: ResetPoints | $.VarRef<ResetPoints> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetPoints).Size() : ResetPoints.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ResetPoints | $.VarRef<ResetPoints> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetPoints).Unmarshal(b) : ResetPoints.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ResetPoints",
		() => new ResetPoints(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetPoints", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.ResetPointInfo"))], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ResetPoints,
		() => [/* @__PURE__ */ $.structField("Points", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("apiv1.ResetPointInfo")), [0], 0, true, { tag: "protobuf:\"bytes,1,rep,name=points,proto3\" json:\"points,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [1], 24, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 24, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [3], 48, true, { tag: "json:\"-\"" })]
	)
}

export class ResetPointInfo {
	public get BinaryChecksum(): string {
		return this._fields.BinaryChecksum
	}

	public set BinaryChecksum(value: string) {
		this._fields.BinaryChecksum = value
	}

	public get RunId(): string {
		return this._fields.RunId
	}

	public set RunId(value: string) {
		this._fields.RunId = value
	}

	public get FirstDecisionCompletedId(): bigint {
		return this._fields.FirstDecisionCompletedId
	}

	public set FirstDecisionCompletedId(value: bigint) {
		this._fields.FirstDecisionCompletedId = value
	}

	public get CreatedTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.CreatedTime
	}

	public set CreatedTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.CreatedTime = value
	}

	public get ExpiringTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		return this._fields.ExpiringTime
	}

	public set ExpiringTime(value: types.Timestamp | $.VarRef<types.Timestamp> | null) {
		this._fields.ExpiringTime = value
	}

	public get Resettable(): boolean {
		return this._fields.Resettable
	}

	public set Resettable(value: boolean) {
		this._fields.Resettable = value
	}

	public get XXX_NoUnkeyedLiteral(): {} {
		return this._fields.XXX_NoUnkeyedLiteral
	}

	public set XXX_NoUnkeyedLiteral(value: {}) {
		this._fields.XXX_NoUnkeyedLiteral = value
	}

	public get XXX_unrecognized(): $.Slice<number> {
		return this._fields.XXX_unrecognized
	}

	public set XXX_unrecognized(value: $.Slice<number>) {
		this._fields.XXX_unrecognized = value
	}

	public get XXX_sizecache(): number {
		return this._fields.XXX_sizecache
	}

	public set XXX_sizecache(value: number) {
		this._fields.XXX_sizecache = value
	}

	public _fields: {
		BinaryChecksum: string
		RunId: string
		FirstDecisionCompletedId: bigint
		CreatedTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		ExpiringTime: types.Timestamp | $.VarRef<types.Timestamp> | null
		Resettable: boolean
		XXX_NoUnkeyedLiteral: {}
		XXX_unrecognized: $.Slice<number>
		XXX_sizecache: number
	}

	constructor(init?: Partial<{BinaryChecksum?: string, RunId?: string, FirstDecisionCompletedId?: bigint, CreatedTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, ExpiringTime?: types.Timestamp | $.VarRef<types.Timestamp> | null, Resettable?: boolean, XXX_NoUnkeyedLiteral?: {}, XXX_unrecognized?: $.Slice<number>, XXX_sizecache?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			BinaryChecksum: init?.BinaryChecksum ?? ("" as string),
			RunId: init?.RunId ?? ("" as string),
			FirstDecisionCompletedId: init?.FirstDecisionCompletedId ?? (0n as bigint),
			CreatedTime: init?.CreatedTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			ExpiringTime: init?.ExpiringTime ?? (null! as types.Timestamp | $.VarRef<types.Timestamp> | null),
			Resettable: init?.Resettable ?? (false as boolean),
			XXX_NoUnkeyedLiteral: init?.XXX_NoUnkeyedLiteral ?? ({} as {}),
			XXX_unrecognized: init?.XXX_unrecognized ?? (null! as $.Slice<number>),
			XXX_sizecache: init?.XXX_sizecache ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ResetPointInfo {
		return new ResetPointInfo(this, true)
	}

	public __goscriptAssign(source: ResetPointInfo): void {
		const target = this._fields
		const values = source._fields
		target.BinaryChecksum = values.BinaryChecksum
		target.RunId = values.RunId
		target.FirstDecisionCompletedId = values.FirstDecisionCompletedId
		target.CreatedTime = values.CreatedTime
		target.ExpiringTime = values.ExpiringTime
		target.Resettable = values.Resettable
		target.XXX_NoUnkeyedLiteral = $.assignFieldValue(target.XXX_NoUnkeyedLiteral, values.XXX_NoUnkeyedLiteral, { kind: $.TypeKind.Struct, methods: [], fields: [] })
		target.XXX_unrecognized = values.XXX_unrecognized
		target.XXX_sizecache = values.XXX_sizecache
	}

	public Descriptor(): [$.Slice<number>, $.Slice<number>] {
		return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([9])]
	}

	public GetBinaryChecksum(): string {
		const m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ResetPointInfo>(m).BinaryChecksum
		}
		return ""
	}

	public GetCreatedTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ResetPointInfo>(m).CreatedTime
		}
		return null
	}

	public GetExpiringTime(): types.Timestamp | $.VarRef<types.Timestamp> | null {
		const m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ResetPointInfo>(m).ExpiringTime
		}
		return null
	}

	public GetFirstDecisionCompletedId(): bigint {
		const m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ResetPointInfo>(m).FirstDecisionCompletedId
		}
		return 0n
	}

	public GetResettable(): boolean {
		const m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ResetPointInfo>(m).Resettable
		}
		return false
	}

	public GetRunId(): string {
		const m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		if (m != null) {
			return $.pointerValue<ResetPointInfo>(m).RunId
		}
		return ""
	}

	public Marshal(): [$.Slice<number>, $.GoError] {
		const m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		let dAtA: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetPointInfo).Size() : ResetPointInfo.prototype.Size.call(m))
		dAtA = $.makeSlice<number>(size, undefined, "byte")
		let __goscriptTuple9: any = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetPointInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ResetPointInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
		let n = __goscriptTuple9[0]
		err = __goscriptTuple9[1]
		if (err != null) {
			return [null, err]
		}
		return [$.goSlice(dAtA, undefined, n), null]
	}

	public MarshalTo(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		let size = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetPointInfo).Size() : ResetPointInfo.prototype.Size.call(m))
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetPointInfo).MarshalToSizedBuffer($.goSlice(dAtA, undefined, size)) : ResetPointInfo.prototype.MarshalToSizedBuffer.call(m, $.goSlice(dAtA, undefined, size)))
	}

	public MarshalToSizedBuffer(dAtA: $.Slice<number>): [number, $.GoError] {
		const m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		const m$: ResetPointInfo = m == null ? $.pointerTarget<ResetPointInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetPointInfo>(m)
		let i = $.sliceLen(dAtA)
		i
		let l: number = 0
		l
		if ((m$ as ResetPointInfo).XXX_unrecognized != null) {
			i = i - ($.sliceLen((m$ as ResetPointInfo).XXX_unrecognized))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResetPointInfo).XXX_unrecognized)
		}
		if ((m$ as ResetPointInfo).Resettable) {
			i--
			if ((m$ as ResetPointInfo).Resettable) {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 1
			} else {
				$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x30
		}
		if ((m$ as ResetPointInfo).ExpiringTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as ResetPointInfo).ExpiringTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x2a
		}
		if ((m$ as ResetPointInfo).CreatedTime != null) {
			{
				let [size, err] = types.Timestamp.prototype.MarshalToSizedBuffer.call((m$ as ResetPointInfo).CreatedTime, $.goSlice(dAtA, undefined, i))
				if (err != null) {
					return [0, err]
				}
				i = i - (size)
				i = encodeVarintWorkflow(dAtA, i, $.uint64(size))
			}
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x22
		}
		if ((m$ as ResetPointInfo).FirstDecisionCompletedId != 0n) {
			i = encodeVarintWorkflow(dAtA, i, $.uint64((m$ as ResetPointInfo).FirstDecisionCompletedId))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x18
		}
		if ($.stringLen((m$ as ResetPointInfo).RunId) > 0) {
			i = i - ($.stringLen((m$ as ResetPointInfo).RunId))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResetPointInfo).RunId)
			i = encodeVarintWorkflow(dAtA, i, $.uint64($.stringLen((m$ as ResetPointInfo).RunId)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0x12
		}
		if ($.stringLen((m$ as ResetPointInfo).BinaryChecksum) > 0) {
			i = i - ($.stringLen((m$ as ResetPointInfo).BinaryChecksum))
			$.copy($.goSlice(dAtA, i, undefined), (m$ as ResetPointInfo).BinaryChecksum)
			i = encodeVarintWorkflow(dAtA, i, $.uint64($.stringLen((m$ as ResetPointInfo).BinaryChecksum)))
			i--
			$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, i)] = 0xa
		}
		return [$.sliceLen(dAtA) - i, null]
	}

	public ProtoMessage(): void {
	}

	public Reset(): void {
		let m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		$.assignStruct($.pointerValue<ResetPointInfo>(m), $.markAsStructValue(new ResetPointInfo()))
	}

	public Size(): number {
		const m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		let n: number = 0
		const m$: ResetPointInfo = m == null ? $.pointerTarget<ResetPointInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetPointInfo>(m)
		if (m == null) {
			return 0
		}
		let l: number = 0
		l
		l = $.stringLen((m$ as ResetPointInfo).BinaryChecksum)
		if (l > 0) {
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		l = $.stringLen((m$ as ResetPointInfo).RunId)
		if (l > 0) {
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as ResetPointInfo).FirstDecisionCompletedId != 0n) {
			n = n + (1 + sovWorkflow($.uint64((m$ as ResetPointInfo).FirstDecisionCompletedId)))
		}
		if ((m$ as ResetPointInfo).CreatedTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as ResetPointInfo).CreatedTime)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as ResetPointInfo).ExpiringTime != null) {
			l = types.Timestamp.prototype.Size.call((m$ as ResetPointInfo).ExpiringTime)
			n = n + ((1 + l) + sovWorkflow($.uint64(l)))
		}
		if ((m$ as ResetPointInfo).Resettable) {
			n = n + (2)
		}
		if ((m$ as ResetPointInfo).XXX_unrecognized != null) {
			n = n + ($.sliceLen((m$ as ResetPointInfo).XXX_unrecognized))
		}
		return n
	}

	public String(): string {
		const m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		return await proto.CompactTextString($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetPointInfo", /* @__PURE__ */ $.pointerType("apiv1.ResetPointInfo")))
	}

	public Unmarshal(dAtA: $.Slice<number>): $.GoError {
		let m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		const m$: ResetPointInfo = m == null ? $.pointerTarget<ResetPointInfo>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<ResetPointInfo>(m)
		let l = $.sliceLen(dAtA)
		let iNdEx = 0
		for (let __goscriptSliceWindow10 = $.sliceRange(dAtA); iNdEx < l; ) {
			let preIndex: number = iNdEx
			let wire: bigint = 0n
			for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
				if (shift >= 64) {
					return ErrIntOverflowWorkflow
				}
				if (iNdEx >= l) {
					return io.ErrUnexpectedEOF
				}
				let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
				iNdEx++
				wire = $.uint64Or(wire, $.uint64Shl($.uint64(b & 0x7F), shift))
				if (b < 0x80) {
					break
				}
			}
			let fieldNum = $.int($.uint64Shr(wire, 3n), 32)
			let wireType = $.int($.uint64And(wire, 7n))
			if (wireType == 4) {
				return fmt.Errorf("proto: ResetPointInfo: wiretype end group for non-group")
			}
			if (fieldNum <= 0) {
				return fmt.Errorf("proto: ResetPointInfo: illegal tag %d (wire type %d)", $.basicInterfaceValue(fieldNum, "int32"), $.basicInterfaceValue(wire, "uint64"))
			}
			switch (fieldNum) {
				case 1:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field BinaryChecksum", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResetPointInfo).BinaryChecksum = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 2:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field RunId", $.basicInterfaceValue(wireType, "int"))
					}
					let stringLen: bigint = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++
						stringLen = $.uint64Or(stringLen, $.uint64Shl($.uint64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					let intStringLen = $.int(stringLen)
					if (intStringLen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + intStringLen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResetPointInfo).RunId = $.bytesToString($.goSlice(dAtA, iNdEx, postIndex))
					iNdEx = postIndex
					break
				}
				case 3:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field FirstDecisionCompletedId", $.basicInterfaceValue(wireType, "int"))
					}
					;(m$ as ResetPointInfo).FirstDecisionCompletedId = 0n
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++;
						;(m$ as ResetPointInfo).FirstDecisionCompletedId = $.int64Or((m$ as ResetPointInfo).FirstDecisionCompletedId, $.int64Shl($.int64(b & 0x7F), shift))
						if (b < 0x80) {
							break
						}
					}
					break
				}
				case 4:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field CreatedTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ResetPointInfo).CreatedTime == null) {
						;(m$ as ResetPointInfo).CreatedTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as ResetPointInfo).CreatedTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 5:
				{
					if (wireType != 2) {
						return fmt.Errorf("proto: wrong wireType = %d for field ExpiringTime", $.basicInterfaceValue(wireType, "int"))
					}
					let msglen: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++
						msglen = msglen | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					if (msglen < 0) {
						return ErrInvalidLengthWorkflow
					}
					let postIndex: number = iNdEx + msglen
					if (postIndex < 0) {
						return ErrInvalidLengthWorkflow
					}
					if (postIndex > l) {
						return io.ErrUnexpectedEOF
					}
					if ((m$ as ResetPointInfo).ExpiringTime == null) {
						;(m$ as ResetPointInfo).ExpiringTime = new types.Timestamp()
					}
					{
						let err = types.Timestamp.prototype.Unmarshal.call((m$ as ResetPointInfo).ExpiringTime, $.goSlice(dAtA, iNdEx, postIndex))
						if (err != null) {
							return err
						}
					}
					iNdEx = postIndex
					break
				}
				case 6:
				{
					if (wireType != 0) {
						return fmt.Errorf("proto: wrong wireType = %d for field Resettable", $.basicInterfaceValue(wireType, "int"))
					}
					let v: number = 0
					for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
						if (shift >= 64) {
							return ErrIntOverflowWorkflow
						}
						if (iNdEx >= l) {
							return io.ErrUnexpectedEOF
						}
						let b = ((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, iNdEx)] as number)
						iNdEx++
						v = v | ($.int(b & 0x7F) << shift)
						if (b < 0x80) {
							break
						}
					}
					;(m$ as ResetPointInfo).Resettable = (v != 0)
					break
				}
				default:
				{
					iNdEx = preIndex
					let [skippy, err] = skipWorkflow($.goSlice(dAtA, iNdEx, undefined))
					if (err != null) {
						return err
					}
					if ((skippy < 0) || ((iNdEx + skippy) < 0)) {
						return ErrInvalidLengthWorkflow
					}
					if ((iNdEx + skippy) > l) {
						return io.ErrUnexpectedEOF
					}
					;(m$ as ResetPointInfo).XXX_unrecognized = $.appendSlice((m$ as ResetPointInfo).XXX_unrecognized, $.goSlice(dAtA, iNdEx, iNdEx + skippy), $.byteSliceHint)
					iNdEx = iNdEx + (skippy)
					break
				}
			}
		}

		if (iNdEx > l) {
			return io.ErrUnexpectedEOF
		}
		return null
	}

	public async XXX_DiscardUnknown(): globalThis.Promise<void> {
		const m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		await xxx_messageInfo_ResetPointInfo.value.DiscardUnknown($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetPointInfo", /* @__PURE__ */ $.pointerType("apiv1.ResetPointInfo")))
	}

	public async XXX_Marshal(b: $.Slice<number>, deterministic: boolean): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		if (deterministic) {
			return xxx_messageInfo_ResetPointInfo.value.Marshal(b, $.interfaceValue<proto.Message | null>(m, "*apiv1.ResetPointInfo", /* @__PURE__ */ $.pointerType("apiv1.ResetPointInfo")), deterministic)
		} else {
			b = $.goSlice(b, undefined, $.cap(b))
			let [n, err] = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetPointInfo).MarshalToSizedBuffer(b) : ResetPointInfo.prototype.MarshalToSizedBuffer.call(m, b))
			if (err != null) {
				return [null, err]
			}
			return [$.goSlice(b, undefined, n), null]
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async XXX_Merge(src: proto.Message | null): globalThis.Promise<void> {
		const m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		await xxx_messageInfo_ResetPointInfo.value.Merge($.interfaceValue<proto.Message | null>(m, "*apiv1.ResetPointInfo", /* @__PURE__ */ $.pointerType("apiv1.ResetPointInfo")), src)
	}

	public XXX_Size(): number {
		const m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetPointInfo).Size() : ResetPointInfo.prototype.Size.call(m))
	}

	public XXX_Unmarshal(b: $.Slice<number>): $.GoError {
		const m: ResetPointInfo | $.VarRef<ResetPointInfo> | null = this;
		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as ResetPointInfo).Unmarshal(b) : ResetPointInfo.prototype.Unmarshal.call(m, b))
	}

	static __typeInfo = $.registerStructType(
		"apiv1.ResetPointInfo",
		() => new ResetPointInfo(),
		() => [$.methodSignature("Descriptor", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))], true), $.methodSignature("GetBinaryChecksum", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetCreatedTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetExpiringTime", [], [/* @__PURE__ */ $.pointerType("types.Timestamp")], true), $.methodSignature("GetFirstDecisionCompletedId", [], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("GetResettable", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetRunId", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Marshal", [], [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("MarshalTo", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("MarshalToSizedBuffer", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("ProtoMessage", [], [], true), $.methodSignature("Reset", [], [], true), $.methodSignature("Size", [], [["n", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Unmarshal", [["dAtA", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("XXX_DiscardUnknown", [], [], true), $.methodSignature("XXX_Marshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["deterministic", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("XXX_Merge", [["src", "proto.Message"]], [], true), $.methodSignature("XXX_Size", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("XXX_Unmarshal", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true)],
		ResetPointInfo,
		() => [/* @__PURE__ */ $.structField("BinaryChecksum", /* @__PURE__ */ $.basicType("string"), [0], 0, true, { tag: "protobuf:\"bytes,1,opt,name=binary_checksum,json=binaryChecksum,proto3\" json:\"binary_checksum,omitempty\"" }), /* @__PURE__ */ $.structField("RunId", /* @__PURE__ */ $.basicType("string"), [1], 16, true, { tag: "protobuf:\"bytes,2,opt,name=run_id,json=runId,proto3\" json:\"run_id,omitempty\"" }), /* @__PURE__ */ $.structField("FirstDecisionCompletedId", /* @__PURE__ */ $.basicType("int64"), [2], 32, true, { tag: "protobuf:\"varint,3,opt,name=first_decision_completed_id,json=firstDecisionCompletedId,proto3\" json:\"first_decision_completed_id,omitempty\"" }), /* @__PURE__ */ $.structField("CreatedTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [3], 40, true, { tag: "protobuf:\"bytes,4,opt,name=created_time,json=createdTime,proto3\" json:\"created_time,omitempty\"" }), /* @__PURE__ */ $.structField("ExpiringTime", /* @__PURE__ */ $.pointerType("types.Timestamp"), [4], 48, true, { tag: "protobuf:\"bytes,5,opt,name=expiring_time,json=expiringTime,proto3\" json:\"expiring_time,omitempty\"" }), /* @__PURE__ */ $.structField("Resettable", /* @__PURE__ */ $.basicType("bool"), [5], 56, true, { tag: "protobuf:\"varint,6,opt,name=resettable,proto3\" json:\"resettable,omitempty\"" }), /* @__PURE__ */ $.structField("XXX_NoUnkeyedLiteral", { kind: $.TypeKind.Struct, methods: [], fields: [] }, [6], 57, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_unrecognized", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [7], 64, true, { tag: "json:\"-\"" }), /* @__PURE__ */ $.structField("XXX_sizecache", /* @__PURE__ */ $.basicType("int32"), [8], 88, true, { tag: "json:\"-\"" })]
	)
}

export const PendingActivityState_PENDING_ACTIVITY_STATE_INVALID: PendingActivityState = 0

export const PendingActivityState_PENDING_ACTIVITY_STATE_SCHEDULED: PendingActivityState = 1

export const PendingActivityState_PENDING_ACTIVITY_STATE_STARTED: PendingActivityState = 2

export const PendingActivityState_PENDING_ACTIVITY_STATE_CANCEL_REQUESTED: PendingActivityState = 3

export const PendingDecisionState_PENDING_DECISION_STATE_INVALID: PendingDecisionState = 0

export const PendingDecisionState_PENDING_DECISION_STATE_SCHEDULED: PendingDecisionState = 1

export const PendingDecisionState_PENDING_DECISION_STATE_STARTED: PendingDecisionState = 2

export const WorkflowIdReusePolicy_WORKFLOW_ID_REUSE_POLICY_INVALID: WorkflowIdReusePolicy = 0

export const WorkflowIdReusePolicy_WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY: WorkflowIdReusePolicy = 1

export const WorkflowIdReusePolicy_WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE: WorkflowIdReusePolicy = 2

export const WorkflowIdReusePolicy_WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE: WorkflowIdReusePolicy = 3

export const WorkflowIdReusePolicy_WORKFLOW_ID_REUSE_POLICY_TERMINATE_IF_RUNNING: WorkflowIdReusePolicy = 4

export const CronOverlapPolicy_CRON_OVERLAP_POLICY_INVALID: CronOverlapPolicy = 0

export const CronOverlapPolicy_CRON_OVERLAP_POLICY_SKIPPED: CronOverlapPolicy = 1

export const CronOverlapPolicy_CRON_OVERLAP_POLICY_BUFFER_ONE: CronOverlapPolicy = 2

export const ParentClosePolicy_PARENT_CLOSE_POLICY_INVALID: ParentClosePolicy = 0

export const ParentClosePolicy_PARENT_CLOSE_POLICY_ABANDON: ParentClosePolicy = 1

export const ParentClosePolicy_PARENT_CLOSE_POLICY_REQUEST_CANCEL: ParentClosePolicy = 2

export const ParentClosePolicy_PARENT_CLOSE_POLICY_TERMINATE: ParentClosePolicy = 3

export const WorkflowExecutionCloseStatus_WORKFLOW_EXECUTION_CLOSE_STATUS_INVALID: WorkflowExecutionCloseStatus = 0

export const WorkflowExecutionCloseStatus_WORKFLOW_EXECUTION_CLOSE_STATUS_COMPLETED: WorkflowExecutionCloseStatus = 1

export const WorkflowExecutionCloseStatus_WORKFLOW_EXECUTION_CLOSE_STATUS_FAILED: WorkflowExecutionCloseStatus = 2

export const WorkflowExecutionCloseStatus_WORKFLOW_EXECUTION_CLOSE_STATUS_CANCELED: WorkflowExecutionCloseStatus = 3

export const WorkflowExecutionCloseStatus_WORKFLOW_EXECUTION_CLOSE_STATUS_TERMINATED: WorkflowExecutionCloseStatus = 4

export const WorkflowExecutionCloseStatus_WORKFLOW_EXECUTION_CLOSE_STATUS_CONTINUED_AS_NEW: WorkflowExecutionCloseStatus = 5

export const WorkflowExecutionCloseStatus_WORKFLOW_EXECUTION_CLOSE_STATUS_TIMED_OUT: WorkflowExecutionCloseStatus = 6

export const WorkflowExecutionStatus_WORKFLOW_EXECUTION_STATUS_INVALID: WorkflowExecutionStatus = 0

export const WorkflowExecutionStatus_WORKFLOW_EXECUTION_STATUS_PENDING: WorkflowExecutionStatus = 1

export const WorkflowExecutionStatus_WORKFLOW_EXECUTION_STATUS_STARTED: WorkflowExecutionStatus = 2

export const WorkflowExecutionStatus_WORKFLOW_EXECUTION_STATUS_COMPLETED: WorkflowExecutionStatus = 3

export const WorkflowExecutionStatus_WORKFLOW_EXECUTION_STATUS_FAILED: WorkflowExecutionStatus = 4

export const WorkflowExecutionStatus_WORKFLOW_EXECUTION_STATUS_CANCELED: WorkflowExecutionStatus = 5

export const WorkflowExecutionStatus_WORKFLOW_EXECUTION_STATUS_TERMINATED: WorkflowExecutionStatus = 6

export const WorkflowExecutionStatus_WORKFLOW_EXECUTION_STATUS_CONTINUED_AS_NEW: WorkflowExecutionStatus = 7

export const WorkflowExecutionStatus_WORKFLOW_EXECUTION_STATUS_TIMED_OUT: WorkflowExecutionStatus = 8

export const ContinueAsNewInitiator_CONTINUE_AS_NEW_INITIATOR_INVALID: ContinueAsNewInitiator = 0

export const ContinueAsNewInitiator_CONTINUE_AS_NEW_INITIATOR_DECIDER: ContinueAsNewInitiator = 1

export const ContinueAsNewInitiator_CONTINUE_AS_NEW_INITIATOR_RETRY_POLICY: ContinueAsNewInitiator = 2

export const ContinueAsNewInitiator_CONTINUE_AS_NEW_INITIATOR_CRON_SCHEDULE: ContinueAsNewInitiator = 3

export const TimeoutType_TIMEOUT_TYPE_INVALID: TimeoutType = 0

export const TimeoutType_TIMEOUT_TYPE_START_TO_CLOSE: TimeoutType = 1

export const TimeoutType_TIMEOUT_TYPE_SCHEDULE_TO_START: TimeoutType = 2

export const TimeoutType_TIMEOUT_TYPE_SCHEDULE_TO_CLOSE: TimeoutType = 3

export const TimeoutType_TIMEOUT_TYPE_HEARTBEAT: TimeoutType = 4

export const DecisionTaskTimedOutCause_DECISION_TASK_TIMED_OUT_CAUSE_INVALID: DecisionTaskTimedOutCause = 0

export const DecisionTaskTimedOutCause_DECISION_TASK_TIMED_OUT_CAUSE_TIMEOUT: DecisionTaskTimedOutCause = 1

export const DecisionTaskTimedOutCause_DECISION_TASK_TIMED_OUT_CAUSE_RESET: DecisionTaskTimedOutCause = 2

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_INVALID: DecisionTaskFailedCause = 0

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_UNHANDLED_DECISION: DecisionTaskFailedCause = 1

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_SCHEDULE_ACTIVITY_ATTRIBUTES: DecisionTaskFailedCause = 2

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_ACTIVITY_ATTRIBUTES: DecisionTaskFailedCause = 3

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_START_TIMER_ATTRIBUTES: DecisionTaskFailedCause = 4

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_CANCEL_TIMER_ATTRIBUTES: DecisionTaskFailedCause = 5

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_RECORD_MARKER_ATTRIBUTES: DecisionTaskFailedCause = 6

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_COMPLETE_WORKFLOW_EXECUTION_ATTRIBUTES: DecisionTaskFailedCause = 7

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_FAIL_WORKFLOW_EXECUTION_ATTRIBUTES: DecisionTaskFailedCause = 8

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_CANCEL_WORKFLOW_EXECUTION_ATTRIBUTES: DecisionTaskFailedCause = 9

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_ATTRIBUTES: DecisionTaskFailedCause = 10

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_CONTINUE_AS_NEW_ATTRIBUTES: DecisionTaskFailedCause = 11

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_START_TIMER_DUPLICATE_ID: DecisionTaskFailedCause = 12

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_RESET_STICKY_TASK_LIST: DecisionTaskFailedCause = 13

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_WORKFLOW_WORKER_UNHANDLED_FAILURE: DecisionTaskFailedCause = 14

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_SIGNAL_WORKFLOW_EXECUTION_ATTRIBUTES: DecisionTaskFailedCause = 15

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_START_CHILD_EXECUTION_ATTRIBUTES: DecisionTaskFailedCause = 16

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_FORCE_CLOSE_DECISION: DecisionTaskFailedCause = 17

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_FAILOVER_CLOSE_DECISION: DecisionTaskFailedCause = 18

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_SIGNAL_INPUT_SIZE: DecisionTaskFailedCause = 19

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_RESET_WORKFLOW: DecisionTaskFailedCause = 20

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_BINARY: DecisionTaskFailedCause = 21

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_SCHEDULE_ACTIVITY_DUPLICATE_ID: DecisionTaskFailedCause = 22

export const DecisionTaskFailedCause_DECISION_TASK_FAILED_CAUSE_BAD_SEARCH_ATTRIBUTES: DecisionTaskFailedCause = 23

export const ChildWorkflowExecutionFailedCause_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_INVALID: ChildWorkflowExecutionFailedCause = 0

export const ChildWorkflowExecutionFailedCause_CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_RUNNING: ChildWorkflowExecutionFailedCause = 1

export const CancelExternalWorkflowExecutionFailedCause_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_INVALID: CancelExternalWorkflowExecutionFailedCause = 0

export const CancelExternalWorkflowExecutionFailedCause_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION: CancelExternalWorkflowExecutionFailedCause = 1

export const CancelExternalWorkflowExecutionFailedCause_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_COMPLETED: CancelExternalWorkflowExecutionFailedCause = 2

export const SignalExternalWorkflowExecutionFailedCause_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_INVALID: SignalExternalWorkflowExecutionFailedCause = 0

export const SignalExternalWorkflowExecutionFailedCause_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION: SignalExternalWorkflowExecutionFailedCause = 1

export const SignalExternalWorkflowExecutionFailedCause_SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_COMPLETED: SignalExternalWorkflowExecutionFailedCause = 2

export let PendingActivityState_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "PENDING_ACTIVITY_STATE_INVALID"], [1, "PENDING_ACTIVITY_STATE_SCHEDULED"], [2, "PENDING_ACTIVITY_STATE_STARTED"], [3, "PENDING_ACTIVITY_STATE_CANCEL_REQUESTED"]])

export function __goscript_set_PendingActivityState_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	PendingActivityState_name = __goscriptValue
}

export let PendingActivityState_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["PENDING_ACTIVITY_STATE_INVALID", 0], ["PENDING_ACTIVITY_STATE_SCHEDULED", 1], ["PENDING_ACTIVITY_STATE_STARTED", 2], ["PENDING_ACTIVITY_STATE_CANCEL_REQUESTED", 3]])

export function __goscript_set_PendingActivityState_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	PendingActivityState_value = __goscriptValue
}

export function PendingActivityState_String(x: PendingActivityState): string {
	return proto.EnumName(PendingActivityState_name, $.int(x, 32))
}

export function PendingActivityState_EnumDescriptor(recv: PendingActivityState): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([0])]
}

export let PendingDecisionState_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "PENDING_DECISION_STATE_INVALID"], [1, "PENDING_DECISION_STATE_SCHEDULED"], [2, "PENDING_DECISION_STATE_STARTED"]])

export function __goscript_set_PendingDecisionState_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	PendingDecisionState_name = __goscriptValue
}

export let PendingDecisionState_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["PENDING_DECISION_STATE_INVALID", 0], ["PENDING_DECISION_STATE_SCHEDULED", 1], ["PENDING_DECISION_STATE_STARTED", 2]])

export function __goscript_set_PendingDecisionState_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	PendingDecisionState_value = __goscriptValue
}

export function PendingDecisionState_String(x: PendingDecisionState): string {
	return proto.EnumName(PendingDecisionState_name, $.int(x, 32))
}

export function PendingDecisionState_EnumDescriptor(recv: PendingDecisionState): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([1])]
}

export let WorkflowIdReusePolicy_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "WORKFLOW_ID_REUSE_POLICY_INVALID"], [1, "WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY"], [2, "WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE"], [3, "WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE"], [4, "WORKFLOW_ID_REUSE_POLICY_TERMINATE_IF_RUNNING"]])

export function __goscript_set_WorkflowIdReusePolicy_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	WorkflowIdReusePolicy_name = __goscriptValue
}

export let WorkflowIdReusePolicy_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["WORKFLOW_ID_REUSE_POLICY_INVALID", 0], ["WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY", 1], ["WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE", 2], ["WORKFLOW_ID_REUSE_POLICY_REJECT_DUPLICATE", 3], ["WORKFLOW_ID_REUSE_POLICY_TERMINATE_IF_RUNNING", 4]])

export function __goscript_set_WorkflowIdReusePolicy_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	WorkflowIdReusePolicy_value = __goscriptValue
}

export function WorkflowIdReusePolicy_String(x: WorkflowIdReusePolicy): string {
	return proto.EnumName(WorkflowIdReusePolicy_name, $.int(x, 32))
}

export function WorkflowIdReusePolicy_EnumDescriptor(recv: WorkflowIdReusePolicy): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([2])]
}

export let CronOverlapPolicy_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "CRON_OVERLAP_POLICY_INVALID"], [1, "CRON_OVERLAP_POLICY_SKIPPED"], [2, "CRON_OVERLAP_POLICY_BUFFER_ONE"]])

export function __goscript_set_CronOverlapPolicy_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	CronOverlapPolicy_name = __goscriptValue
}

export let CronOverlapPolicy_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["CRON_OVERLAP_POLICY_INVALID", 0], ["CRON_OVERLAP_POLICY_SKIPPED", 1], ["CRON_OVERLAP_POLICY_BUFFER_ONE", 2]])

export function __goscript_set_CronOverlapPolicy_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	CronOverlapPolicy_value = __goscriptValue
}

export function CronOverlapPolicy_String(x: CronOverlapPolicy): string {
	return proto.EnumName(CronOverlapPolicy_name, $.int(x, 32))
}

export function CronOverlapPolicy_EnumDescriptor(recv: CronOverlapPolicy): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([3])]
}

export let ParentClosePolicy_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "PARENT_CLOSE_POLICY_INVALID"], [1, "PARENT_CLOSE_POLICY_ABANDON"], [2, "PARENT_CLOSE_POLICY_REQUEST_CANCEL"], [3, "PARENT_CLOSE_POLICY_TERMINATE"]])

export function __goscript_set_ParentClosePolicy_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	ParentClosePolicy_name = __goscriptValue
}

export let ParentClosePolicy_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["PARENT_CLOSE_POLICY_INVALID", 0], ["PARENT_CLOSE_POLICY_ABANDON", 1], ["PARENT_CLOSE_POLICY_REQUEST_CANCEL", 2], ["PARENT_CLOSE_POLICY_TERMINATE", 3]])

export function __goscript_set_ParentClosePolicy_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	ParentClosePolicy_value = __goscriptValue
}

export function ParentClosePolicy_String(x: ParentClosePolicy): string {
	return proto.EnumName(ParentClosePolicy_name, $.int(x, 32))
}

export function ParentClosePolicy_EnumDescriptor(recv: ParentClosePolicy): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([4])]
}

export let WorkflowExecutionCloseStatus_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "WORKFLOW_EXECUTION_CLOSE_STATUS_INVALID"], [1, "WORKFLOW_EXECUTION_CLOSE_STATUS_COMPLETED"], [2, "WORKFLOW_EXECUTION_CLOSE_STATUS_FAILED"], [3, "WORKFLOW_EXECUTION_CLOSE_STATUS_CANCELED"], [4, "WORKFLOW_EXECUTION_CLOSE_STATUS_TERMINATED"], [5, "WORKFLOW_EXECUTION_CLOSE_STATUS_CONTINUED_AS_NEW"], [6, "WORKFLOW_EXECUTION_CLOSE_STATUS_TIMED_OUT"]])

export function __goscript_set_WorkflowExecutionCloseStatus_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	WorkflowExecutionCloseStatus_name = __goscriptValue
}

export let WorkflowExecutionCloseStatus_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["WORKFLOW_EXECUTION_CLOSE_STATUS_INVALID", 0], ["WORKFLOW_EXECUTION_CLOSE_STATUS_COMPLETED", 1], ["WORKFLOW_EXECUTION_CLOSE_STATUS_FAILED", 2], ["WORKFLOW_EXECUTION_CLOSE_STATUS_CANCELED", 3], ["WORKFLOW_EXECUTION_CLOSE_STATUS_TERMINATED", 4], ["WORKFLOW_EXECUTION_CLOSE_STATUS_CONTINUED_AS_NEW", 5], ["WORKFLOW_EXECUTION_CLOSE_STATUS_TIMED_OUT", 6]])

export function __goscript_set_WorkflowExecutionCloseStatus_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	WorkflowExecutionCloseStatus_value = __goscriptValue
}

export function WorkflowExecutionCloseStatus_String(x: WorkflowExecutionCloseStatus): string {
	return proto.EnumName(WorkflowExecutionCloseStatus_name, $.int(x, 32))
}

export function WorkflowExecutionCloseStatus_EnumDescriptor(recv: WorkflowExecutionCloseStatus): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([5])]
}

export let WorkflowExecutionStatus_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "WORKFLOW_EXECUTION_STATUS_INVALID"], [1, "WORKFLOW_EXECUTION_STATUS_PENDING"], [2, "WORKFLOW_EXECUTION_STATUS_STARTED"], [3, "WORKFLOW_EXECUTION_STATUS_COMPLETED"], [4, "WORKFLOW_EXECUTION_STATUS_FAILED"], [5, "WORKFLOW_EXECUTION_STATUS_CANCELED"], [6, "WORKFLOW_EXECUTION_STATUS_TERMINATED"], [7, "WORKFLOW_EXECUTION_STATUS_CONTINUED_AS_NEW"], [8, "WORKFLOW_EXECUTION_STATUS_TIMED_OUT"]])

export function __goscript_set_WorkflowExecutionStatus_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	WorkflowExecutionStatus_name = __goscriptValue
}

export let WorkflowExecutionStatus_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["WORKFLOW_EXECUTION_STATUS_INVALID", 0], ["WORKFLOW_EXECUTION_STATUS_PENDING", 1], ["WORKFLOW_EXECUTION_STATUS_STARTED", 2], ["WORKFLOW_EXECUTION_STATUS_COMPLETED", 3], ["WORKFLOW_EXECUTION_STATUS_FAILED", 4], ["WORKFLOW_EXECUTION_STATUS_CANCELED", 5], ["WORKFLOW_EXECUTION_STATUS_TERMINATED", 6], ["WORKFLOW_EXECUTION_STATUS_CONTINUED_AS_NEW", 7], ["WORKFLOW_EXECUTION_STATUS_TIMED_OUT", 8]])

export function __goscript_set_WorkflowExecutionStatus_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	WorkflowExecutionStatus_value = __goscriptValue
}

export function WorkflowExecutionStatus_String(x: WorkflowExecutionStatus): string {
	return proto.EnumName(WorkflowExecutionStatus_name, $.int(x, 32))
}

export function WorkflowExecutionStatus_EnumDescriptor(recv: WorkflowExecutionStatus): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([6])]
}

export let ContinueAsNewInitiator_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "CONTINUE_AS_NEW_INITIATOR_INVALID"], [1, "CONTINUE_AS_NEW_INITIATOR_DECIDER"], [2, "CONTINUE_AS_NEW_INITIATOR_RETRY_POLICY"], [3, "CONTINUE_AS_NEW_INITIATOR_CRON_SCHEDULE"]])

export function __goscript_set_ContinueAsNewInitiator_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	ContinueAsNewInitiator_name = __goscriptValue
}

export let ContinueAsNewInitiator_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["CONTINUE_AS_NEW_INITIATOR_INVALID", 0], ["CONTINUE_AS_NEW_INITIATOR_DECIDER", 1], ["CONTINUE_AS_NEW_INITIATOR_RETRY_POLICY", 2], ["CONTINUE_AS_NEW_INITIATOR_CRON_SCHEDULE", 3]])

export function __goscript_set_ContinueAsNewInitiator_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	ContinueAsNewInitiator_value = __goscriptValue
}

export function ContinueAsNewInitiator_String(x: ContinueAsNewInitiator): string {
	return proto.EnumName(ContinueAsNewInitiator_name, $.int(x, 32))
}

export function ContinueAsNewInitiator_EnumDescriptor(recv: ContinueAsNewInitiator): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([7])]
}

export let TimeoutType_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "TIMEOUT_TYPE_INVALID"], [1, "TIMEOUT_TYPE_START_TO_CLOSE"], [2, "TIMEOUT_TYPE_SCHEDULE_TO_START"], [3, "TIMEOUT_TYPE_SCHEDULE_TO_CLOSE"], [4, "TIMEOUT_TYPE_HEARTBEAT"]])

export function __goscript_set_TimeoutType_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	TimeoutType_name = __goscriptValue
}

export let TimeoutType_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["TIMEOUT_TYPE_INVALID", 0], ["TIMEOUT_TYPE_START_TO_CLOSE", 1], ["TIMEOUT_TYPE_SCHEDULE_TO_START", 2], ["TIMEOUT_TYPE_SCHEDULE_TO_CLOSE", 3], ["TIMEOUT_TYPE_HEARTBEAT", 4]])

export function __goscript_set_TimeoutType_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	TimeoutType_value = __goscriptValue
}

export function TimeoutType_String(x: TimeoutType): string {
	return proto.EnumName(TimeoutType_name, $.int(x, 32))
}

export function TimeoutType_EnumDescriptor(recv: TimeoutType): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([8])]
}

export let DecisionTaskTimedOutCause_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "DECISION_TASK_TIMED_OUT_CAUSE_INVALID"], [1, "DECISION_TASK_TIMED_OUT_CAUSE_TIMEOUT"], [2, "DECISION_TASK_TIMED_OUT_CAUSE_RESET"]])

export function __goscript_set_DecisionTaskTimedOutCause_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	DecisionTaskTimedOutCause_name = __goscriptValue
}

export let DecisionTaskTimedOutCause_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["DECISION_TASK_TIMED_OUT_CAUSE_INVALID", 0], ["DECISION_TASK_TIMED_OUT_CAUSE_TIMEOUT", 1], ["DECISION_TASK_TIMED_OUT_CAUSE_RESET", 2]])

export function __goscript_set_DecisionTaskTimedOutCause_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	DecisionTaskTimedOutCause_value = __goscriptValue
}

export function DecisionTaskTimedOutCause_String(x: DecisionTaskTimedOutCause): string {
	return proto.EnumName(DecisionTaskTimedOutCause_name, $.int(x, 32))
}

export function DecisionTaskTimedOutCause_EnumDescriptor(recv: DecisionTaskTimedOutCause): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([9])]
}

export let DecisionTaskFailedCause_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "DECISION_TASK_FAILED_CAUSE_INVALID"], [1, "DECISION_TASK_FAILED_CAUSE_UNHANDLED_DECISION"], [2, "DECISION_TASK_FAILED_CAUSE_BAD_SCHEDULE_ACTIVITY_ATTRIBUTES"], [3, "DECISION_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_ACTIVITY_ATTRIBUTES"], [4, "DECISION_TASK_FAILED_CAUSE_BAD_START_TIMER_ATTRIBUTES"], [5, "DECISION_TASK_FAILED_CAUSE_BAD_CANCEL_TIMER_ATTRIBUTES"], [6, "DECISION_TASK_FAILED_CAUSE_BAD_RECORD_MARKER_ATTRIBUTES"], [7, "DECISION_TASK_FAILED_CAUSE_BAD_COMPLETE_WORKFLOW_EXECUTION_ATTRIBUTES"], [8, "DECISION_TASK_FAILED_CAUSE_BAD_FAIL_WORKFLOW_EXECUTION_ATTRIBUTES"], [9, "DECISION_TASK_FAILED_CAUSE_BAD_CANCEL_WORKFLOW_EXECUTION_ATTRIBUTES"], [10, "DECISION_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_ATTRIBUTES"], [11, "DECISION_TASK_FAILED_CAUSE_BAD_CONTINUE_AS_NEW_ATTRIBUTES"], [12, "DECISION_TASK_FAILED_CAUSE_START_TIMER_DUPLICATE_ID"], [13, "DECISION_TASK_FAILED_CAUSE_RESET_STICKY_TASK_LIST"], [14, "DECISION_TASK_FAILED_CAUSE_WORKFLOW_WORKER_UNHANDLED_FAILURE"], [15, "DECISION_TASK_FAILED_CAUSE_BAD_SIGNAL_WORKFLOW_EXECUTION_ATTRIBUTES"], [16, "DECISION_TASK_FAILED_CAUSE_BAD_START_CHILD_EXECUTION_ATTRIBUTES"], [17, "DECISION_TASK_FAILED_CAUSE_FORCE_CLOSE_DECISION"], [18, "DECISION_TASK_FAILED_CAUSE_FAILOVER_CLOSE_DECISION"], [19, "DECISION_TASK_FAILED_CAUSE_BAD_SIGNAL_INPUT_SIZE"], [20, "DECISION_TASK_FAILED_CAUSE_RESET_WORKFLOW"], [21, "DECISION_TASK_FAILED_CAUSE_BAD_BINARY"], [22, "DECISION_TASK_FAILED_CAUSE_SCHEDULE_ACTIVITY_DUPLICATE_ID"], [23, "DECISION_TASK_FAILED_CAUSE_BAD_SEARCH_ATTRIBUTES"]])

export function __goscript_set_DecisionTaskFailedCause_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	DecisionTaskFailedCause_name = __goscriptValue
}

export let DecisionTaskFailedCause_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["DECISION_TASK_FAILED_CAUSE_INVALID", 0], ["DECISION_TASK_FAILED_CAUSE_UNHANDLED_DECISION", 1], ["DECISION_TASK_FAILED_CAUSE_BAD_SCHEDULE_ACTIVITY_ATTRIBUTES", 2], ["DECISION_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_ACTIVITY_ATTRIBUTES", 3], ["DECISION_TASK_FAILED_CAUSE_BAD_START_TIMER_ATTRIBUTES", 4], ["DECISION_TASK_FAILED_CAUSE_BAD_CANCEL_TIMER_ATTRIBUTES", 5], ["DECISION_TASK_FAILED_CAUSE_BAD_RECORD_MARKER_ATTRIBUTES", 6], ["DECISION_TASK_FAILED_CAUSE_BAD_COMPLETE_WORKFLOW_EXECUTION_ATTRIBUTES", 7], ["DECISION_TASK_FAILED_CAUSE_BAD_FAIL_WORKFLOW_EXECUTION_ATTRIBUTES", 8], ["DECISION_TASK_FAILED_CAUSE_BAD_CANCEL_WORKFLOW_EXECUTION_ATTRIBUTES", 9], ["DECISION_TASK_FAILED_CAUSE_BAD_REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION_ATTRIBUTES", 10], ["DECISION_TASK_FAILED_CAUSE_BAD_CONTINUE_AS_NEW_ATTRIBUTES", 11], ["DECISION_TASK_FAILED_CAUSE_START_TIMER_DUPLICATE_ID", 12], ["DECISION_TASK_FAILED_CAUSE_RESET_STICKY_TASK_LIST", 13], ["DECISION_TASK_FAILED_CAUSE_WORKFLOW_WORKER_UNHANDLED_FAILURE", 14], ["DECISION_TASK_FAILED_CAUSE_BAD_SIGNAL_WORKFLOW_EXECUTION_ATTRIBUTES", 15], ["DECISION_TASK_FAILED_CAUSE_BAD_START_CHILD_EXECUTION_ATTRIBUTES", 16], ["DECISION_TASK_FAILED_CAUSE_FORCE_CLOSE_DECISION", 17], ["DECISION_TASK_FAILED_CAUSE_FAILOVER_CLOSE_DECISION", 18], ["DECISION_TASK_FAILED_CAUSE_BAD_SIGNAL_INPUT_SIZE", 19], ["DECISION_TASK_FAILED_CAUSE_RESET_WORKFLOW", 20], ["DECISION_TASK_FAILED_CAUSE_BAD_BINARY", 21], ["DECISION_TASK_FAILED_CAUSE_SCHEDULE_ACTIVITY_DUPLICATE_ID", 22], ["DECISION_TASK_FAILED_CAUSE_BAD_SEARCH_ATTRIBUTES", 23]])

export function __goscript_set_DecisionTaskFailedCause_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	DecisionTaskFailedCause_value = __goscriptValue
}

export function DecisionTaskFailedCause_String(x: DecisionTaskFailedCause): string {
	return proto.EnumName(DecisionTaskFailedCause_name, $.int(x, 32))
}

export function DecisionTaskFailedCause_EnumDescriptor(recv: DecisionTaskFailedCause): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([10])]
}

export let ChildWorkflowExecutionFailedCause_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_INVALID"], [1, "CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_RUNNING"]])

export function __goscript_set_ChildWorkflowExecutionFailedCause_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	ChildWorkflowExecutionFailedCause_name = __goscriptValue
}

export let ChildWorkflowExecutionFailedCause_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_INVALID", 0], ["CHILD_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_RUNNING", 1]])

export function __goscript_set_ChildWorkflowExecutionFailedCause_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	ChildWorkflowExecutionFailedCause_value = __goscriptValue
}

export function ChildWorkflowExecutionFailedCause_String(x: ChildWorkflowExecutionFailedCause): string {
	return proto.EnumName(ChildWorkflowExecutionFailedCause_name, $.int(x, 32))
}

export function ChildWorkflowExecutionFailedCause_EnumDescriptor(recv: ChildWorkflowExecutionFailedCause): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([11])]
}

export let CancelExternalWorkflowExecutionFailedCause_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_INVALID"], [1, "CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION"], [2, "CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_COMPLETED"]])

export function __goscript_set_CancelExternalWorkflowExecutionFailedCause_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	CancelExternalWorkflowExecutionFailedCause_name = __goscriptValue
}

export let CancelExternalWorkflowExecutionFailedCause_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_INVALID", 0], ["CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION", 1], ["CANCEL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_COMPLETED", 2]])

export function __goscript_set_CancelExternalWorkflowExecutionFailedCause_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	CancelExternalWorkflowExecutionFailedCause_value = __goscriptValue
}

export function CancelExternalWorkflowExecutionFailedCause_String(x: CancelExternalWorkflowExecutionFailedCause): string {
	return proto.EnumName(CancelExternalWorkflowExecutionFailedCause_name, $.int(x, 32))
}

export function CancelExternalWorkflowExecutionFailedCause_EnumDescriptor(recv: CancelExternalWorkflowExecutionFailedCause): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([12])]
}

export let SignalExternalWorkflowExecutionFailedCause_name: globalThis.Map<number, string> | null = $.makeMap<number, string>([[0, "SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_INVALID"], [1, "SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION"], [2, "SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_COMPLETED"]])

export function __goscript_set_SignalExternalWorkflowExecutionFailedCause_name(__goscriptValue: globalThis.Map<number, string> | null): void {
	SignalExternalWorkflowExecutionFailedCause_name = __goscriptValue
}

export let SignalExternalWorkflowExecutionFailedCause_value: globalThis.Map<string, number> | null = $.makeMap<string, number>([["SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_INVALID", 0], ["SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_UNKNOWN_EXTERNAL_WORKFLOW_EXECUTION", 1], ["SIGNAL_EXTERNAL_WORKFLOW_EXECUTION_FAILED_CAUSE_WORKFLOW_ALREADY_COMPLETED", 2]])

export function __goscript_set_SignalExternalWorkflowExecutionFailedCause_value(__goscriptValue: globalThis.Map<string, number> | null): void {
	SignalExternalWorkflowExecutionFailedCause_value = __goscriptValue
}

export function SignalExternalWorkflowExecutionFailedCause_String(x: SignalExternalWorkflowExecutionFailedCause): string {
	return proto.EnumName(SignalExternalWorkflowExecutionFailedCause_name, $.int(x, 32))
}

export function SignalExternalWorkflowExecutionFailedCause_EnumDescriptor(recv: SignalExternalWorkflowExecutionFailedCause): [$.Slice<number>, $.Slice<number>] {
	return [fileDescriptor_2775eefb5053680f, $.arrayToSlice<number>([13])]
}

export let xxx_messageInfo_WorkflowExecutionInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_WorkflowExecutionInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_WorkflowExecutionInfo.value, __goscriptValue)
}

export let xxx_messageInfo_WorkflowExecutionConfiguration: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_WorkflowExecutionConfiguration(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_WorkflowExecutionConfiguration.value, __goscriptValue)
}

export let xxx_messageInfo_ParentExecutionInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ParentExecutionInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ParentExecutionInfo.value, __goscriptValue)
}

export let xxx_messageInfo_ExternalExecutionInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ExternalExecutionInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ExternalExecutionInfo.value, __goscriptValue)
}

export let xxx_messageInfo_PendingActivityInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_PendingActivityInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_PendingActivityInfo.value, __goscriptValue)
}

export let xxx_messageInfo_PendingChildExecutionInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_PendingChildExecutionInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_PendingChildExecutionInfo.value, __goscriptValue)
}

export let xxx_messageInfo_PendingDecisionInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_PendingDecisionInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_PendingDecisionInfo.value, __goscriptValue)
}

export let xxx_messageInfo_ActivityLocalDispatchInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ActivityLocalDispatchInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ActivityLocalDispatchInfo.value, __goscriptValue)
}

export let xxx_messageInfo_ResetPoints: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ResetPoints(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ResetPoints.value, __goscriptValue)
}

export let xxx_messageInfo_ResetPointInfo: $.VarRef<proto.InternalMessageInfo> = $.varRef(new proto.InternalMessageInfo(undefined, true))

export function __goscript_set_xxx_messageInfo_ResetPointInfo(__goscriptValue: proto.InternalMessageInfo): void {
	$.assignStruct(xxx_messageInfo_ResetPointInfo.value, __goscriptValue)
}

async function __goscriptInit0(): globalThis.Promise<void> {
	proto.RegisterEnum("uber.cadence.api.v1.PendingActivityState", PendingActivityState_name, PendingActivityState_value)
	proto.RegisterEnum("uber.cadence.api.v1.PendingDecisionState", PendingDecisionState_name, PendingDecisionState_value)
	proto.RegisterEnum("uber.cadence.api.v1.WorkflowIdReusePolicy", WorkflowIdReusePolicy_name, WorkflowIdReusePolicy_value)
	proto.RegisterEnum("uber.cadence.api.v1.CronOverlapPolicy", CronOverlapPolicy_name, CronOverlapPolicy_value)
	proto.RegisterEnum("uber.cadence.api.v1.ParentClosePolicy", ParentClosePolicy_name, ParentClosePolicy_value)
	proto.RegisterEnum("uber.cadence.api.v1.WorkflowExecutionCloseStatus", WorkflowExecutionCloseStatus_name, WorkflowExecutionCloseStatus_value)
	proto.RegisterEnum("uber.cadence.api.v1.WorkflowExecutionStatus", WorkflowExecutionStatus_name, WorkflowExecutionStatus_value)
	proto.RegisterEnum("uber.cadence.api.v1.ContinueAsNewInitiator", ContinueAsNewInitiator_name, ContinueAsNewInitiator_value)
	proto.RegisterEnum("uber.cadence.api.v1.TimeoutType", TimeoutType_name, TimeoutType_value)
	proto.RegisterEnum("uber.cadence.api.v1.DecisionTaskTimedOutCause", DecisionTaskTimedOutCause_name, DecisionTaskTimedOutCause_value)
	proto.RegisterEnum("uber.cadence.api.v1.DecisionTaskFailedCause", DecisionTaskFailedCause_name, DecisionTaskFailedCause_value)
	proto.RegisterEnum("uber.cadence.api.v1.ChildWorkflowExecutionFailedCause", ChildWorkflowExecutionFailedCause_name, ChildWorkflowExecutionFailedCause_value)
	proto.RegisterEnum("uber.cadence.api.v1.CancelExternalWorkflowExecutionFailedCause", CancelExternalWorkflowExecutionFailedCause_name, CancelExternalWorkflowExecutionFailedCause_value)
	proto.RegisterEnum("uber.cadence.api.v1.SignalExternalWorkflowExecutionFailedCause", SignalExternalWorkflowExecutionFailedCause_name, SignalExternalWorkflowExecutionFailedCause_value)
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.WorkflowExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionInfo")), "uber.cadence.api.v1.WorkflowExecutionInfo")
	await proto.RegisterMapType($.interfaceValue(null, "map[string]string", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))), "uber.cadence.api.v1.WorkflowExecutionInfo.PartitionConfigEntry")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.WorkflowExecutionConfiguration", /* @__PURE__ */ $.pointerType("apiv1.WorkflowExecutionConfiguration")), "uber.cadence.api.v1.WorkflowExecutionConfiguration")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ParentExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.ParentExecutionInfo")), "uber.cadence.api.v1.ParentExecutionInfo")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ExternalExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.ExternalExecutionInfo")), "uber.cadence.api.v1.ExternalExecutionInfo")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.PendingActivityInfo", /* @__PURE__ */ $.pointerType("apiv1.PendingActivityInfo")), "uber.cadence.api.v1.PendingActivityInfo")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.PendingChildExecutionInfo", /* @__PURE__ */ $.pointerType("apiv1.PendingChildExecutionInfo")), "uber.cadence.api.v1.PendingChildExecutionInfo")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.PendingDecisionInfo", /* @__PURE__ */ $.pointerType("apiv1.PendingDecisionInfo")), "uber.cadence.api.v1.PendingDecisionInfo")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ActivityLocalDispatchInfo", /* @__PURE__ */ $.pointerType("apiv1.ActivityLocalDispatchInfo")), "uber.cadence.api.v1.ActivityLocalDispatchInfo")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ResetPoints", /* @__PURE__ */ $.pointerType("apiv1.ResetPoints")), "uber.cadence.api.v1.ResetPoints")
	await proto.RegisterType($.interfaceValue<proto.Message | null>(null, "*apiv1.ResetPointInfo", /* @__PURE__ */ $.pointerType("apiv1.ResetPointInfo")), "uber.cadence.api.v1.ResetPointInfo")
}

async function __goscriptInit1(): globalThis.Promise<void> {
	proto.RegisterFile("uber/cadence/api/v1/workflow.proto", fileDescriptor_2775eefb5053680f)
}

export let fileDescriptor_2775eefb5053680f: $.Slice<number> = new Uint8Array([31, 139, 8, 0, 0, 0, 0, 0, 2, 255, 196, 90, 205, 111, 219, 200, 21, 47, 37, 219, 177, 159, 100, 155, 30, 219, 177, 242, 177, 142, 227, 221, 100, 29, 117, 99, 175, 179, 223, 155, 110, 83, 154, 162, 19, 38, 10, 165, 142, 168, 120, 189, 40, 74, 208, 210, 216, 102, 35, 137, 2, 57, 74, 226, 123, 129, 246, 218, 158, 22, 61, 245, 15, 40, 80, 20, 61, 244, 84, 244, 218, 75, 129, 158, 122, 46, 114, 41, 250, 95, 20, 51, 28, 74, 164, 68, 137, 114, 11, 108, 111, 230, 155, 223, 239, 205, 155, 247, 53, 143, 180, 96, 187, 119, 66, 188, 189, 134, 221, 36, 157, 6, 217, 179, 187, 206, 222, 171, 253, 189, 215, 174, 247, 242, 180, 229, 190, 222, 237, 122, 46, 117, 209, 42, 195, 236, 10, 204, 174, 221, 117, 118, 95, 237, 95, 223, 60, 115, 221, 179, 22, 217, 227, 144, 147, 222, 233, 94, 179, 231, 217, 212, 113, 59, 1, 233, 250, 173, 225, 117, 234, 180, 137, 79, 237, 118, 87, 0, 182, 146, 118, 110, 184, 237, 118, 95, 69, 162, 109, 212, 246, 95, 182, 28, 159, 6, 152, 237, 111, 243, 176, 126, 36, 204, 213, 222, 144, 70, 143, 153, 160, 119, 78, 93, 84, 7, 20, 158, 195, 34, 225, 74, 65, 218, 146, 118, 114, 15, 238, 238, 38, 28, 105, 119, 68, 15, 94, 121, 61, 44, 66, 159, 192, 12, 189, 232, 146, 66, 134, 43, 186, 61, 81, 145, 121, 209, 37, 152, 195, 209, 23, 0, 62, 181, 61, 106, 49, 55, 20, 178, 156, 124, 125, 55, 240, 209, 110, 232, 163, 93, 51, 244, 17, 94, 224, 104, 246, 204, 168, 141, 150, 235, 147, 128, 58, 147, 78, 229, 104, 78, 53, 33, 31, 80, 125, 106, 211, 158, 95, 152, 221, 146, 118, 150, 30, 236, 79, 119, 122, 149, 49, 107, 156, 136, 115, 141, 193, 3, 186, 3, 75, 231, 142, 79, 93, 239, 194, 106, 145, 206, 25, 61, 47, 204, 109, 73, 59, 89, 188, 40, 164, 101, 46, 68, 63, 129, 245, 174, 237, 145, 14, 29, 184, 223, 114, 58, 167, 110, 225, 10, 63, 194, 78, 162, 21, 85, 206, 136, 69, 18, 175, 118, 71, 133, 72, 129, 165, 129, 90, 238, 153, 249, 84, 207, 44, 246, 25, 220, 59, 247, 97, 166, 77, 218, 110, 97, 129, 19, 175, 37, 218, 243, 156, 180, 93, 204, 97, 8, 195, 138, 79, 108, 175, 113, 110, 217, 148, 122, 206, 73, 143, 18, 191, 0, 156, 123, 39, 145, 91, 227, 104, 165, 15, 198, 178, 63, 36, 65, 101, 88, 177, 123, 212, 181, 60, 226, 19, 106, 117, 93, 167, 67, 253, 66, 142, 235, 220, 74, 212, 137, 25, 176, 202, 113, 120, 153, 81, 35, 2, 116, 3, 22, 88, 121, 88, 172, 62, 10, 249, 45, 105, 103, 1, 207, 51, 65, 217, 241, 41, 82, 97, 169, 191, 24, 196, 97, 133, 239, 243, 78, 226, 62, 166, 160, 225, 124, 168, 128, 123, 125, 3, 174, 56, 190, 213, 240, 220, 78, 97, 113, 75, 218, 153, 199, 115, 142, 175, 122, 110, 7, 61, 132, 92, 175, 219, 180, 169, 200, 210, 165, 212, 88, 64, 0, 231, 129, 248, 25, 200, 93, 219, 163, 14, 143, 101, 195, 237, 156, 58, 103, 133, 229, 173, 236, 78, 238, 193, 163, 233, 82, 149, 217, 198, 82, 39, 80, 161, 114, 13, 90, 135, 122, 23, 120, 185, 27, 151, 162, 23, 176, 202, 204, 183, 220, 87, 196, 107, 217, 93, 171, 235, 182, 156, 198, 69, 65, 230, 149, 145, 220, 23, 216, 1, 43, 1, 188, 202, 209, 120, 165, 49, 44, 66, 111, 224, 150, 221, 160, 206, 43, 98, 53, 90, 61, 159, 18, 207, 242, 73, 139, 52, 248, 145, 196, 30, 136, 59, 37, 185, 250, 20, 206, 85, 3, 106, 45, 100, 138, 237, 110, 218, 19, 86, 209, 187, 176, 200, 79, 228, 55, 206, 73, 179, 215, 34, 133, 85, 30, 249, 60, 19, 214, 132, 12, 29, 129, 60, 40, 23, 209, 13, 214, 248, 153, 63, 152, 206, 197, 162, 17, 44, 147, 184, 0, 153, 80, 8, 55, 110, 90, 67, 21, 185, 158, 154, 5, 87, 251, 92, 45, 90, 154, 215, 15, 96, 45, 41, 156, 72, 134, 236, 75, 114, 193, 187, 248, 2, 102, 127, 162, 53, 152, 125, 101, 183, 122, 65, 67, 94, 192, 193, 195, 151, 153, 207, 165, 237, 111, 51, 176, 57, 218, 212, 184, 50, 113, 85, 161, 47, 163, 5, 35, 77, 83, 14, 131, 122, 178, 97, 43, 230, 81, 214, 219, 93, 107, 208, 169, 221, 30, 21, 151, 196, 181, 17, 7, 148, 132, 1, 248, 102, 212, 157, 30, 53, 93, 53, 236, 221, 110, 143, 162, 35, 184, 193, 205, 27, 163, 61, 155, 166, 125, 131, 177, 19, 20, 111, 255, 77, 130, 213, 132, 78, 203, 26, 72, 211, 109, 219, 78, 199, 114, 154, 194, 201, 243, 129, 64, 111, 162, 91, 144, 19, 139, 29, 187, 29, 250, 27, 2, 145, 97, 183, 201, 152, 27, 55, 251, 191, 222, 184, 183, 33, 239, 116, 28, 234, 216, 148, 52, 153, 93, 51, 252, 178, 201, 245, 101, 122, 115, 251, 87, 18, 172, 107, 111, 40, 241, 58, 118, 235, 59, 153, 2, 134, 109, 202, 140, 218, 244, 167, 57, 88, 173, 146, 78, 211, 233, 156, 241, 226, 118, 232, 5, 183, 232, 22, 228, 108, 241, 60, 240, 50, 132, 34, 189, 137, 14, 97, 177, 15, 72, 29, 53, 66, 213, 124, 212, 200, 219, 145, 39, 244, 8, 102, 89, 161, 7, 211, 198, 210, 131, 123, 201, 247, 109, 220, 66, 86, 212, 4, 7, 60, 164, 195, 202, 57, 177, 61, 122, 66, 108, 106, 53, 9, 181, 157, 150, 47, 230, 143, 155, 99, 46, 239, 139, 150, 107, 55, 177, 220, 167, 149, 2, 22, 122, 10, 171, 45, 219, 167, 214, 64, 31, 111, 16, 179, 169, 13, 98, 133, 209, 158, 132, 44, 126, 91, 28, 2, 23, 6, 85, 65, 154, 129, 166, 185, 84, 77, 203, 140, 84, 11, 56, 92, 79, 1, 174, 216, 148, 146, 118, 151, 242, 137, 100, 22, 135, 143, 232, 30, 200, 109, 251, 141, 211, 238, 181, 45, 33, 242, 249, 116, 49, 139, 151, 133, 92, 17, 98, 54, 134, 12, 218, 31, 183, 100, 33, 125, 12, 233, 51, 184, 29, 42, 44, 147, 55, 93, 39, 168, 217, 64, 7, 164, 234, 88, 26, 80, 184, 146, 71, 144, 231, 78, 57, 181, 157, 86, 207, 35, 98, 134, 72, 14, 211, 97, 128, 193, 57, 198, 16, 15, 232, 67, 88, 227, 10, 88, 174, 19, 207, 114, 154, 164, 67, 29, 122, 33, 198, 8, 196, 214, 142, 248, 146, 46, 86, 208, 167, 176, 17, 134, 96, 152, 180, 200, 73, 235, 98, 121, 136, 119, 11, 114, 161, 3, 88, 1, 44, 241, 210, 129, 80, 164, 55, 183, 255, 152, 129, 107, 34, 47, 213, 115, 167, 213, 252, 78, 42, 250, 131, 136, 90, 86, 117, 209, 38, 39, 191, 142, 12, 244, 188, 213, 13, 215, 127, 118, 164, 254, 217, 160, 33, 198, 223, 160, 107, 139, 33, 96, 102, 194, 160, 17, 180, 100, 222, 169, 195, 65, 163, 59, 44, 66, 87, 97, 46, 232, 185, 188, 122, 22, 176, 120, 218, 254, 87, 166, 223, 111, 74, 164, 225, 248, 161, 191, 250, 109, 64, 74, 111, 3, 33, 49, 214, 6, 70, 83, 60, 115, 217, 20, 255, 10, 242, 177, 106, 77, 127, 255, 201, 249, 201, 149, 58, 19, 175, 84, 12, 27, 174, 231, 156, 57, 29, 187, 101, 13, 25, 153, 222, 91, 214, 67, 106, 45, 102, 236, 80, 126, 206, 141, 228, 231, 159, 51, 112, 45, 108, 152, 101, 183, 97, 183, 74, 142, 223, 181, 105, 227, 124, 186, 254, 254, 255, 247, 231, 79, 97, 51, 110, 129, 229, 158, 90, 244, 220, 241, 173, 168, 155, 39, 43, 188, 30, 179, 168, 114, 106, 158, 59, 190, 232, 138, 232, 29, 0, 62, 183, 80, 247, 37, 9, 210, 52, 143, 249, 160, 101, 50, 193, 246, 83, 200, 69, 223, 90, 30, 194, 156, 120, 241, 145, 248, 204, 255, 110, 202, 139, 15, 127, 39, 20, 148, 237, 223, 103, 96, 41, 190, 132, 222, 135, 229, 19, 167, 99, 123, 23, 86, 227, 156, 52, 94, 250, 189, 182, 8, 194, 82, 32, 86, 133, 20, 173, 195, 156, 215, 235, 132, 215, 247, 2, 158, 245, 122, 108, 206, 249, 10, 110, 156, 58, 158, 207, 174, 188, 160, 26, 172, 134, 219, 238, 182, 72, 172, 212, 11, 28, 18, 214, 139, 26, 2, 56, 61, 223, 240, 136, 221, 143, 77, 186, 43, 115, 2, 47, 26, 249, 34, 111, 237, 78, 231, 108, 218, 60, 206, 135, 4, 174, 96, 19, 128, 191, 77, 82, 251, 164, 21, 220, 139, 243, 56, 34, 41, 254, 65, 130, 181, 164, 91, 31, 109, 195, 102, 85, 51, 74, 186, 241, 216, 82, 84, 83, 127, 161, 155, 199, 86, 205, 84, 76, 205, 210, 141, 23, 74, 89, 47, 201, 223, 67, 239, 193, 214, 24, 76, 77, 125, 162, 149, 234, 101, 173, 36, 75, 19, 52, 213, 76, 5, 155, 90, 73, 206, 160, 239, 195, 251, 99, 48, 170, 98, 168, 90, 217, 194, 218, 143, 235, 90, 141, 129, 179, 197, 159, 15, 108, 142, 181, 168, 232, 78, 37, 77, 213, 107, 122, 197, 152, 100, 243, 16, 102, 140, 205, 195, 168, 208, 230, 226, 47, 50, 131, 143, 77, 122, 19, 147, 94, 191, 41, 191, 7, 91, 71, 21, 252, 236, 176, 92, 57, 178, 244, 146, 133, 181, 122, 77, 179, 170, 149, 178, 174, 30, 71, 44, 249, 28, 62, 30, 139, 82, 202, 76, 90, 170, 87, 203, 186, 202, 118, 61, 84, 244, 178, 86, 178, 42, 70, 249, 88, 150, 208, 7, 176, 51, 45, 83, 206, 160, 251, 112, 111, 44, 26, 107, 79, 53, 213, 140, 192, 179, 104, 31, 238, 143, 133, 155, 26, 126, 174, 27, 220, 161, 135, 22, 174, 27, 134, 110, 60, 150, 103, 138, 23, 176, 50, 242, 86, 140, 110, 193, 13, 21, 87, 12, 171, 242, 66, 195, 101, 165, 58, 122, 254, 49, 128, 218, 51, 189, 90, 13, 131, 144, 4, 56, 168, 31, 30, 106, 216, 170, 24, 154, 156, 41, 254, 86, 130, 149, 145, 139, 146, 169, 174, 42, 88, 51, 76, 75, 45, 87, 146, 124, 63, 6, 160, 28, 40, 70, 169, 98, 200, 18, 186, 11, 219, 73, 0, 145, 134, 34, 43, 229, 12, 186, 13, 239, 36, 225, 250, 142, 146, 179, 197, 127, 103, 224, 230, 164, 207, 105, 44, 249, 251, 30, 215, 190, 214, 212, 186, 201, 210, 45, 208, 199, 146, 174, 94, 139, 88, 30, 141, 230, 24, 176, 90, 121, 94, 45, 107, 38, 247, 97, 17, 238, 166, 193, 131, 220, 146, 51, 177, 180, 26, 167, 154, 159, 155, 85, 33, 218, 133, 98, 26, 186, 239, 133, 146, 60, 131, 62, 134, 15, 211, 13, 55, 76, 221, 168, 107, 37, 75, 169, 89, 134, 118, 36, 207, 78, 115, 92, 83, 127, 206, 74, 163, 110, 202, 115, 197, 95, 102, 97, 99, 204, 199, 10, 116, 7, 110, 39, 168, 26, 113, 240, 68, 152, 104, 10, 178, 52, 25, 54, 104, 108, 239, 195, 187, 227, 97, 131, 64, 101, 99, 61, 99, 4, 40, 66, 52, 195, 210, 114, 130, 186, 48, 56, 179, 104, 7, 222, 27, 143, 139, 132, 101, 110, 76, 24, 199, 5, 228, 202, 228, 3, 13, 66, 49, 95, 252, 139, 4, 87, 85, 183, 67, 157, 78, 143, 40, 190, 65, 94, 235, 193, 56, 236, 122, 204, 119, 161, 102, 161, 216, 210, 13, 221, 212, 21, 179, 130, 227, 145, 24, 15, 99, 109, 185, 164, 225, 32, 197, 199, 195, 176, 102, 226, 99, 81, 149, 193, 61, 51, 30, 203, 155, 77, 120, 11, 200, 217, 226, 239, 36, 200, 137, 111, 36, 252, 21, 186, 0, 107, 236, 128, 149, 186, 105, 153, 199, 85, 45, 222, 78, 98, 43, 60, 254, 150, 89, 9, 18, 53, 104, 101, 113, 128, 216, 133, 97, 56, 88, 206, 76, 196, 4, 122, 178, 232, 58, 92, 141, 97, 158, 104, 10, 54, 15, 52, 197, 148, 103, 138, 191, 145, 224, 90, 120, 31, 154, 108, 188, 114, 218, 164, 89, 233, 81, 213, 238, 249, 4, 221, 131, 59, 253, 155, 204, 84, 106, 207, 6, 177, 178, 84, 133, 181, 248, 193, 105, 82, 161, 194, 4, 89, 98, 217, 48, 25, 138, 181, 154, 102, 202, 153, 226, 63, 114, 176, 17, 53, 142, 189, 104, 146, 102, 96, 218, 93, 216, 142, 43, 17, 183, 221, 176, 93, 251, 112, 127, 2, 174, 110, 60, 81, 140, 18, 123, 14, 65, 178, 132, 30, 193, 195, 9, 148, 3, 165, 52, 240, 114, 127, 238, 80, 76, 19, 235, 7, 117, 83, 171, 201, 25, 164, 129, 146, 162, 32, 126, 37, 36, 170, 201, 162, 47, 224, 147, 52, 59, 130, 148, 209, 159, 107, 56, 74, 157, 65, 95, 194, 167, 41, 84, 177, 243, 8, 119, 22, 61, 132, 207, 82, 173, 87, 43, 184, 100, 61, 87, 240, 179, 56, 121, 14, 233, 160, 165, 109, 44, 250, 151, 149, 208, 17, 34, 170, 174, 76, 225, 69, 38, 72, 81, 51, 143, 30, 131, 58, 157, 43, 38, 43, 90, 64, 95, 131, 121, 185, 168, 106, 95, 155, 26, 54, 148, 52, 205, 128, 190, 130, 47, 82, 157, 22, 239, 63, 17, 122, 14, 125, 6, 31, 77, 160, 71, 115, 100, 48, 27, 234, 37, 57, 143, 62, 129, 253, 9, 68, 94, 133, 86, 205, 212, 213, 103, 199, 193, 114, 89, 175, 153, 242, 34, 250, 17, 252, 96, 2, 173, 127, 88, 246, 135, 134, 35, 37, 198, 96, 117, 172, 201, 75, 83, 196, 164, 166, 63, 78, 247, 220, 50, 82, 225, 209, 84, 37, 162, 62, 209, 203, 165, 100, 37, 50, 250, 8, 246, 38, 40, 57, 172, 96, 85, 19, 195, 67, 191, 73, 172, 160, 79, 225, 193, 36, 146, 162, 151, 217, 4, 58, 204, 67, 108, 162, 153, 238, 232, 186, 81, 173, 155, 86, 77, 255, 70, 147, 87, 217, 68, 147, 26, 169, 208, 87, 242, 218, 104, 51, 30, 217, 228, 64, 55, 20, 124, 44, 175, 167, 228, 222, 104, 163, 139, 165, 208, 213, 105, 142, 163, 41, 88, 125, 18, 245, 248, 6, 187, 117, 110, 243, 239, 114, 35, 99, 87, 180, 197, 239, 195, 253, 32, 110, 9, 89, 48, 166, 219, 31, 192, 15, 167, 163, 244, 215, 149, 50, 214, 148, 210, 113, 255, 197, 68, 42, 254, 58, 3, 69, 213, 238, 52, 72, 43, 252, 127, 192, 68, 43, 31, 194, 103, 83, 212, 251, 24, 123, 143, 160, 118, 89, 114, 221, 120, 102, 84, 142, 140, 73, 4, 89, 66, 6, 60, 189, 172, 226, 17, 151, 12, 38, 205, 12, 119, 74, 205, 57, 227, 255, 28, 153, 206, 41, 34, 141, 255, 59, 167, 92, 150, 60, 181, 83, 46, 171, 120, 146, 83, 14, 156, 191, 190, 221, 148, 254, 254, 118, 83, 250, 231, 219, 77, 9, 54, 26, 110, 59, 233, 187, 211, 193, 98, 232, 170, 170, 231, 82, 183, 42, 125, 179, 127, 230, 208, 243, 222, 201, 110, 195, 109, 239, 69, 127, 160, 114, 223, 105, 182, 246, 206, 220, 224, 7, 47, 226, 215, 42, 15, 237, 174, 243, 106, 255, 100, 142, 203, 62, 250, 79, 0, 0, 0, 255, 255, 40, 23, 243, 3, 109, 35, 0, 0]) as $.Slice<number>

export function __goscript_set_fileDescriptor_2775eefb5053680f(__goscriptValue: $.Slice<number>): void {
	fileDescriptor_2775eefb5053680f = __goscriptValue
}

export function encodeVarintWorkflow(dAtA: $.Slice<number>, offset: number, v: bigint): number {
	offset = offset - (sovWorkflow(v))
	let base = offset
	for (let __goscriptSliceWindow11 = $.sliceRange(dAtA); v >= 128n; ) {
		;(__goscriptSliceWindow11.backing as any[])[$.windowSlot(__goscriptSliceWindow11, offset)] = $.uint($.uint64Or(($.uint64And(v, 127n)), 128n), 8)
		v = $.uint64Shr(v, 7n)
		offset++
	}
	$.sliceElems(dAtA!)[$.sliceSlot(dAtA!, offset)] = $.uint(v, 8)
	return base
}

export function sovWorkflow(x: bigint): number {
	let n: number = 0
	return globalThis.Math.trunc((math_bits.Len64($.uint64Or(x, 1n)) + 6) / 7)
}

export function sozWorkflow(x: bigint): number {
	let n: number = 0
	return sovWorkflow($.uint64($.uint64Xor(($.uint64Shl(x, 1n)), $.uint64(($.int64Shr($.int64(x), 63n))))))
}

export function skipWorkflow(dAtA: $.Slice<number>): [number, $.GoError] {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	let l = $.sliceLen(dAtA)
	let iNdEx = 0
	let depth = 0
	for (let __goscriptSliceWindow12 = $.sliceRange(dAtA); iNdEx < l; ) {
		let wire: bigint = 0n
		for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
			if (shift >= 64) {
				return [0, ErrIntOverflowWorkflow]
			}
			if (iNdEx >= l) {
				return [0, io.ErrUnexpectedEOF]
			}
			let b = ((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, iNdEx)] as number)
			iNdEx++
			wire = $.uint64Or(wire, $.uint64Shl(($.uint64And($.uint64(b), 127n)), shift))
			if (b < 0x80) {
				break
			}
		}
		let wireType = $.int($.uint64And(wire, 7n))
		switch (wireType) {
			case 0:
			{
				for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
					if (shift >= 64) {
						return [0, ErrIntOverflowWorkflow]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					iNdEx++
					if (((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, iNdEx - 1)] as number) < 0x80) {
						break
					}
				}
				break
			}
			case 1:
			{
				iNdEx = iNdEx + (8)
				break
			}
			case 2:
			{
				let length: number = 0
				for (let shift = 0; ; shift = $.uint($.uint64Add(shift, 7), 64)) {
					if (shift >= 64) {
						return [0, ErrIntOverflowWorkflow]
					}
					if (iNdEx >= l) {
						return [0, io.ErrUnexpectedEOF]
					}
					let b = ((__goscriptSliceWindow12.backing as any[])[$.windowSlot(__goscriptSliceWindow12, iNdEx)] as number)
					iNdEx++
					length = length | (($.int(b) & 0x7F) << shift)
					if (b < 0x80) {
						break
					}
				}
				if (length < 0) {
					return [0, ErrInvalidLengthWorkflow]
				}
				iNdEx = iNdEx + (length)
				break
			}
			case 3:
			{
				depth++
				break
			}
			case 4:
			{
				if (depth == 0) {
					return [0, ErrUnexpectedEndOfGroupWorkflow]
				}
				depth--
				break
			}
			case 5:
			{
				iNdEx = iNdEx + (4)
				break
			}
			default:
			{
				return [0, fmt.Errorf("proto: illegal wireType %d", $.basicInterfaceValue(wireType, "int"))]
				break
			}
		}
		if (iNdEx < 0) {
			return [0, ErrInvalidLengthWorkflow]
		}
		if (depth == 0) {
			return [iNdEx, null]
		}
	}
	return [0, io.ErrUnexpectedEOF]
}

export let ErrInvalidLengthWorkflow: $.GoError = fmt.Errorf("proto: negative length found during unmarshaling")

export function __goscript_set_ErrInvalidLengthWorkflow(__goscriptValue: $.GoError): void {
	ErrInvalidLengthWorkflow = __goscriptValue
}

export let ErrIntOverflowWorkflow: $.GoError = fmt.Errorf("proto: integer overflow")

export function __goscript_set_ErrIntOverflowWorkflow(__goscriptValue: $.GoError): void {
	ErrIntOverflowWorkflow = __goscriptValue
}

export let ErrUnexpectedEndOfGroupWorkflow: $.GoError = fmt.Errorf("proto: unexpected end of group")

export function __goscript_set_ErrUnexpectedEndOfGroupWorkflow(__goscriptValue: $.GoError): void {
	ErrUnexpectedEndOfGroupWorkflow = __goscriptValue
}

export { __goscriptInit0 }

export { __goscriptInit1 }
