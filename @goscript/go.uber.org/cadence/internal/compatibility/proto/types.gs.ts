// Generated file based on types.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as apiv1 from "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"

import * as __goscript__enum from "./enum.gs.ts"

import * as __goscript_helpers from "./helpers.gs.ts"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"
import "./enum.gs.ts"
import "./helpers.gs.ts"

export function Payload(data: $.Slice<number>): apiv1.Payload | $.VarRef<apiv1.Payload> | null {
	if (data == null) {
		return null
	}
	return new apiv1.Payload({Data: data})
}

export function Failure(reason: $.VarRef<string> | null, details: $.Slice<number>): apiv1.Failure | $.VarRef<apiv1.Failure> | null {
	if (reason == null) {
		return null
	}
	return new apiv1.Failure({Reason: $.pointerValue<string>(reason), Details: details})
}

export function FailureWithOptions(reason: $.VarRef<string> | null, details: $.Slice<number>, options: shared.FailureOptions | $.VarRef<shared.FailureOptions> | null): apiv1.Failure | $.VarRef<apiv1.Failure> | null {
	let failure: apiv1.Failure | $.VarRef<apiv1.Failure> | null = Failure(reason, details)
	if (failure == null) {
		return null
	}
	$.pointerValue<apiv1.Failure>(failure).Options = FailureOptions(options)
	return failure
}

export function FailureOptions(options: shared.FailureOptions | $.VarRef<shared.FailureOptions> | null): apiv1.FailureOptions | $.VarRef<apiv1.FailureOptions> | null {
	const options$: shared.FailureOptions = options == null ? $.pointerTarget<shared.FailureOptions>(options) : (options as any).__isVarRef === true ? (options as any).value : (options as any).__goValue === undefined ? (options as any) : $.pointerTarget<shared.FailureOptions>(options)
	if (options == null) {
		return null
	}
	return (() => { const __goscriptLiteralField0 = __goscript__enum.FailureCategory((options$ as shared.FailureOptions).FailureCategory); const __goscriptLiteralField1 = __goscript_helpers.secondsToDuration((options$ as shared.FailureOptions).NextRetryIntervalSeconds); return new apiv1.FailureOptions({FailureCategory: __goscriptLiteralField0, NextRetryInterval: __goscriptLiteralField1}) })()
}

export function WorkflowExecution(t: shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null): apiv1.WorkflowExecution | $.VarRef<apiv1.WorkflowExecution> | null {
	const t$: shared.WorkflowExecution = t == null ? $.pointerTarget<shared.WorkflowExecution>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.WorkflowExecution>(t)
	if (t == null) {
		return null
	}
	if (((t$ as shared.WorkflowExecution).WorkflowId == null) && ((t$ as shared.WorkflowExecution).RunId == null)) {
		return null
	}
	return (() => { const __goscriptLiteralField2 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecution).GetWorkflowId() : shared.WorkflowExecution.prototype.GetWorkflowId.call(t)); const __goscriptLiteralField3 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecution).GetRunId() : shared.WorkflowExecution.prototype.GetRunId.call(t)); return new apiv1.WorkflowExecution({WorkflowId: __goscriptLiteralField2, RunId: __goscriptLiteralField3}) })()
}

export function WorkflowRunPair(workflowID: string, runID: string): apiv1.WorkflowExecution | $.VarRef<apiv1.WorkflowExecution> | null {
	if (($.stringEqual(workflowID, "")) && ($.stringEqual(runID, ""))) {
		return null
	}
	return new apiv1.WorkflowExecution({WorkflowId: workflowID, RunId: runID})
}

export function ActivityType(t: shared.ActivityType | $.VarRef<shared.ActivityType> | null): apiv1.ActivityType | $.VarRef<apiv1.ActivityType> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField4 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityType).GetName() : shared.ActivityType.prototype.GetName.call(t)); return new apiv1.ActivityType({Name: __goscriptLiteralField4}) })()
}

export function AutoConfigHint(t: shared.AutoConfigHint | $.VarRef<shared.AutoConfigHint> | null): apiv1.AutoConfigHint | $.VarRef<apiv1.AutoConfigHint> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField5 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.AutoConfigHint).GetEnableAutoConfig() : shared.AutoConfigHint.prototype.GetEnableAutoConfig.call(t)); const __goscriptLiteralField6 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.AutoConfigHint).GetPollerWaitTimeInMs() : shared.AutoConfigHint.prototype.GetPollerWaitTimeInMs.call(t)); return new apiv1.AutoConfigHint({EnableAutoConfig: __goscriptLiteralField5, PollerWaitTimeInMs: __goscriptLiteralField6}) })()
}

export function WorkflowType(t: shared.WorkflowType | $.VarRef<shared.WorkflowType> | null): apiv1.WorkflowType | $.VarRef<apiv1.WorkflowType> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField7 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowType).GetName() : shared.WorkflowType.prototype.GetName.call(t)); return new apiv1.WorkflowType({Name: __goscriptLiteralField7}) })()
}

export function TaskList(t: shared.TaskList | $.VarRef<shared.TaskList> | null): apiv1.TaskList | $.VarRef<apiv1.TaskList> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField8 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TaskList).GetName() : shared.TaskList.prototype.GetName.call(t)); const __goscriptLiteralField9 = __goscript__enum.TaskListKind($.pointerValue<shared.TaskList>(t).Kind); const __goscriptLiteralField10 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TaskList).GetBaseName() : shared.TaskList.prototype.GetBaseName.call(t)); return new apiv1.TaskList({Name: __goscriptLiteralField8, Kind: __goscriptLiteralField9, BaseName: __goscriptLiteralField10}) })()
}

export function TaskListMetadata(t: shared.TaskListMetadata | $.VarRef<shared.TaskListMetadata> | null): apiv1.TaskListMetadata | $.VarRef<apiv1.TaskListMetadata> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField11 = __goscript_helpers.fromDoubleValue($.pointerValue<shared.TaskListMetadata>(t).MaxTasksPerSecond); return new apiv1.TaskListMetadata({MaxTasksPerSecond: __goscriptLiteralField11}) })()
}

export function RetryPolicy(t: shared.RetryPolicy | $.VarRef<shared.RetryPolicy> | null): apiv1.RetryPolicy | $.VarRef<apiv1.RetryPolicy> | null {
	const t$: shared.RetryPolicy = t == null ? $.pointerTarget<shared.RetryPolicy>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.RetryPolicy>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField12 = __goscript_helpers.secondsToDuration((t$ as shared.RetryPolicy).InitialIntervalInSeconds); const __goscriptLiteralField13 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RetryPolicy).GetBackoffCoefficient() : shared.RetryPolicy.prototype.GetBackoffCoefficient.call(t)); const __goscriptLiteralField14 = __goscript_helpers.secondsToDuration((t$ as shared.RetryPolicy).MaximumIntervalInSeconds); const __goscriptLiteralField15 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.RetryPolicy).GetMaximumAttempts() : shared.RetryPolicy.prototype.GetMaximumAttempts.call(t)); const __goscriptLiteralField16 = __goscript_helpers.secondsToDuration((t$ as shared.RetryPolicy).ExpirationIntervalInSeconds); return new apiv1.RetryPolicy({InitialInterval: __goscriptLiteralField12, BackoffCoefficient: __goscriptLiteralField13, MaximumInterval: __goscriptLiteralField14, MaximumAttempts: __goscriptLiteralField15, NonRetryableErrorReasons: (t$ as shared.RetryPolicy).NonRetriableErrorReasons, ExpirationInterval: __goscriptLiteralField16}) })()
}

export function Header(t: shared.Header | $.VarRef<shared.Header> | null): apiv1.Header | $.VarRef<apiv1.Header> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField17 = PayloadMap($.pointerValue<shared.Header>(t).Fields); return new apiv1.Header({Fields: __goscriptLiteralField17}) })()
}

export function Memo(t: shared.Memo | $.VarRef<shared.Memo> | null): apiv1.Memo | $.VarRef<apiv1.Memo> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField18 = PayloadMap($.pointerValue<shared.Memo>(t).Fields); return new apiv1.Memo({Fields: __goscriptLiteralField18}) })()
}

export function SearchAttributes(t: shared.SearchAttributes | $.VarRef<shared.SearchAttributes> | null): apiv1.SearchAttributes | $.VarRef<apiv1.SearchAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField19 = PayloadMap($.pointerValue<shared.SearchAttributes>(t).IndexedFields); return new apiv1.SearchAttributes({IndexedFields: __goscriptLiteralField19}) })()
}

export function BadBinaries(t: shared.BadBinaries | $.VarRef<shared.BadBinaries> | null): apiv1.BadBinaries | $.VarRef<apiv1.BadBinaries> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField20 = BadBinaryInfoMap($.pointerValue<shared.BadBinaries>(t).Binaries); return new apiv1.BadBinaries({Binaries: __goscriptLiteralField20}) })()
}

export function BadBinaryInfo(t: shared.BadBinaryInfo | $.VarRef<shared.BadBinaryInfo> | null): apiv1.BadBinaryInfo | $.VarRef<apiv1.BadBinaryInfo> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField21 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.BadBinaryInfo).GetReason() : shared.BadBinaryInfo.prototype.GetReason.call(t)); const __goscriptLiteralField22 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.BadBinaryInfo).GetOperator() : shared.BadBinaryInfo.prototype.GetOperator.call(t)); const __goscriptLiteralField23 = __goscript_helpers.unixNanoToTime($.pointerValue<shared.BadBinaryInfo>(t).CreatedTimeNano); return new apiv1.BadBinaryInfo({Reason: __goscriptLiteralField21, Operator: __goscriptLiteralField22, CreatedTime: __goscriptLiteralField23}) })()
}

export function ClusterReplicationConfiguration(t: shared.ClusterReplicationConfiguration | $.VarRef<shared.ClusterReplicationConfiguration> | null): apiv1.ClusterReplicationConfiguration | $.VarRef<apiv1.ClusterReplicationConfiguration> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField24 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ClusterReplicationConfiguration).GetClusterName() : shared.ClusterReplicationConfiguration.prototype.GetClusterName.call(t)); return new apiv1.ClusterReplicationConfiguration({ClusterName: __goscriptLiteralField24}) })()
}

export function WorkflowQuery(t: shared.WorkflowQuery | $.VarRef<shared.WorkflowQuery> | null): apiv1.WorkflowQuery | $.VarRef<apiv1.WorkflowQuery> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField25 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowQuery).GetQueryType() : shared.WorkflowQuery.prototype.GetQueryType.call(t)); const __goscriptLiteralField26 = Payload($.pointerValue<shared.WorkflowQuery>(t).QueryArgs); return new apiv1.WorkflowQuery({QueryType: __goscriptLiteralField25, QueryArgs: __goscriptLiteralField26}) })()
}

export function WorkflowQueryResult(t: shared.WorkflowQueryResult | $.VarRef<shared.WorkflowQueryResult> | null): apiv1.WorkflowQueryResult | $.VarRef<apiv1.WorkflowQueryResult> | null {
	const t$: shared.WorkflowQueryResult = t == null ? $.pointerTarget<shared.WorkflowQueryResult>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.WorkflowQueryResult>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField27 = __goscript__enum.QueryResultType((t$ as shared.WorkflowQueryResult).ResultType); const __goscriptLiteralField28 = Payload((t$ as shared.WorkflowQueryResult).Answer); const __goscriptLiteralField29 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowQueryResult).GetErrorMessage() : shared.WorkflowQueryResult.prototype.GetErrorMessage.call(t)); return new apiv1.WorkflowQueryResult({ResultType: __goscriptLiteralField27, Answer: __goscriptLiteralField28, ErrorMessage: __goscriptLiteralField29}) })()
}

export function StickyExecutionAttributes(t: shared.StickyExecutionAttributes | $.VarRef<shared.StickyExecutionAttributes> | null): apiv1.StickyExecutionAttributes | $.VarRef<apiv1.StickyExecutionAttributes> | null {
	const t$: shared.StickyExecutionAttributes = t == null ? $.pointerTarget<shared.StickyExecutionAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.StickyExecutionAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField30 = TaskList((t$ as shared.StickyExecutionAttributes).WorkerTaskList); const __goscriptLiteralField31 = __goscript_helpers.secondsToDuration((t$ as shared.StickyExecutionAttributes).ScheduleToStartTimeoutSeconds); return new apiv1.StickyExecutionAttributes({WorkerTaskList: __goscriptLiteralField30, ScheduleToStartTimeout: __goscriptLiteralField31}) })()
}

export function WorkerVersionInfo(t: shared.WorkerVersionInfo | $.VarRef<shared.WorkerVersionInfo> | null): apiv1.WorkerVersionInfo | $.VarRef<apiv1.WorkerVersionInfo> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField32 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkerVersionInfo).GetImpl() : shared.WorkerVersionInfo.prototype.GetImpl.call(t)); const __goscriptLiteralField33 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkerVersionInfo).GetFeatureVersion() : shared.WorkerVersionInfo.prototype.GetFeatureVersion.call(t)); return new apiv1.WorkerVersionInfo({Impl: __goscriptLiteralField32, FeatureVersion: __goscriptLiteralField33}) })()
}

export function StartTimeFilter(t: shared.StartTimeFilter | $.VarRef<shared.StartTimeFilter> | null): apiv1.StartTimeFilter | $.VarRef<apiv1.StartTimeFilter> | null {
	const t$: shared.StartTimeFilter = t == null ? $.pointerTarget<shared.StartTimeFilter>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.StartTimeFilter>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField34 = __goscript_helpers.unixNanoToTime((t$ as shared.StartTimeFilter).EarliestTime); const __goscriptLiteralField35 = __goscript_helpers.unixNanoToTime((t$ as shared.StartTimeFilter).LatestTime); return new apiv1.StartTimeFilter({EarliestTime: __goscriptLiteralField34, LatestTime: __goscriptLiteralField35}) })()
}

export function WorkflowExecutionFilter(t: shared.WorkflowExecutionFilter | $.VarRef<shared.WorkflowExecutionFilter> | null): apiv1.WorkflowExecutionFilter | $.VarRef<apiv1.WorkflowExecutionFilter> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField36 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionFilter).GetWorkflowId() : shared.WorkflowExecutionFilter.prototype.GetWorkflowId.call(t)); const __goscriptLiteralField37 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionFilter).GetRunId() : shared.WorkflowExecutionFilter.prototype.GetRunId.call(t)); return new apiv1.WorkflowExecutionFilter({WorkflowId: __goscriptLiteralField36, RunId: __goscriptLiteralField37}) })()
}

export function WorkflowTypeFilter(t: shared.WorkflowTypeFilter | $.VarRef<shared.WorkflowTypeFilter> | null): apiv1.WorkflowTypeFilter | $.VarRef<apiv1.WorkflowTypeFilter> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField38 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowTypeFilter).GetName() : shared.WorkflowTypeFilter.prototype.GetName.call(t)); return new apiv1.WorkflowTypeFilter({Name: __goscriptLiteralField38}) })()
}

export function StatusFilter(t: $.VarRef<shared.WorkflowExecutionCloseStatus> | null): apiv1.StatusFilter | $.VarRef<apiv1.StatusFilter> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField39 = __goscript__enum.WorkflowExecutionCloseStatus(t); return new apiv1.StatusFilter({Status: __goscriptLiteralField39}) })()
}

export function PayloadMap(t: globalThis.Map<string, $.Slice<number>> | null): globalThis.Map<string, apiv1.Payload | $.VarRef<apiv1.Payload> | null> | null {
	if (t == null) {
		return null
	}
	let v: globalThis.Map<string, apiv1.Payload | $.VarRef<apiv1.Payload> | null> | null = $.makeMap<string, apiv1.Payload | $.VarRef<apiv1.Payload> | null>()
	for (let [key, __rangeValue] of t?.entries() ?? []) {
		$.mapSet(v, key, Payload($.mapGet<string, $.Slice<number>, $.Slice<number>>(t, key, null)[0]))
	}
	return v
}

export function BadBinaryInfoMap(t: globalThis.Map<string, shared.BadBinaryInfo | $.VarRef<shared.BadBinaryInfo> | null> | null): globalThis.Map<string, apiv1.BadBinaryInfo | $.VarRef<apiv1.BadBinaryInfo> | null> | null {
	if (t == null) {
		return null
	}
	let v: globalThis.Map<string, apiv1.BadBinaryInfo | $.VarRef<apiv1.BadBinaryInfo> | null> | null = $.makeMap<string, apiv1.BadBinaryInfo | $.VarRef<apiv1.BadBinaryInfo> | null>()
	for (let [key, __rangeValue] of t?.entries() ?? []) {
		$.mapSet(v, key, BadBinaryInfo($.mapGet<string, shared.BadBinaryInfo | $.VarRef<shared.BadBinaryInfo> | null, shared.BadBinaryInfo | $.VarRef<shared.BadBinaryInfo> | null>(t, key, null)[0]))
	}
	return v
}

export function ClusterReplicationConfigurationArray(t: $.Slice<shared.ClusterReplicationConfiguration | $.VarRef<shared.ClusterReplicationConfiguration> | null>): $.Slice<apiv1.ClusterReplicationConfiguration | $.VarRef<apiv1.ClusterReplicationConfiguration> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<apiv1.ClusterReplicationConfiguration | $.VarRef<apiv1.ClusterReplicationConfiguration> | null> = $.makeSlice<apiv1.ClusterReplicationConfiguration | $.VarRef<apiv1.ClusterReplicationConfiguration> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget0 = t, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow0.length; i++) {
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = ClusterReplicationConfiguration(((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as shared.ClusterReplicationConfiguration | $.VarRef<shared.ClusterReplicationConfiguration> | null))
	}
	return v
}

export function WorkflowQueryResultMap(t: globalThis.Map<string, shared.WorkflowQueryResult | $.VarRef<shared.WorkflowQueryResult> | null> | null): globalThis.Map<string, apiv1.WorkflowQueryResult | $.VarRef<apiv1.WorkflowQueryResult> | null> | null {
	if (t == null) {
		return null
	}
	let v: globalThis.Map<string, apiv1.WorkflowQueryResult | $.VarRef<apiv1.WorkflowQueryResult> | null> | null = $.makeMap<string, apiv1.WorkflowQueryResult | $.VarRef<apiv1.WorkflowQueryResult> | null>()
	for (let [key, __rangeValue] of t?.entries() ?? []) {
		$.mapSet(v, key, WorkflowQueryResult($.mapGet<string, shared.WorkflowQueryResult | $.VarRef<shared.WorkflowQueryResult> | null, shared.WorkflowQueryResult | $.VarRef<shared.WorkflowQueryResult> | null>(t, key, null)[0]))
	}
	return v
}

export function DataBlob(t: shared.DataBlob | $.VarRef<shared.DataBlob> | null): apiv1.DataBlob | $.VarRef<apiv1.DataBlob> | null {
	const t$: shared.DataBlob = t == null ? $.pointerTarget<shared.DataBlob>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.DataBlob>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField40 = __goscript__enum.EncodingType((t$ as shared.DataBlob).EncodingType); return new apiv1.DataBlob({EncodingType: __goscriptLiteralField40, Data: (t$ as shared.DataBlob).Data}) })()
}

export function ExternalExecutionInfo(we: shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null, initiatedID: $.VarRef<bigint> | null): apiv1.ExternalExecutionInfo | $.VarRef<apiv1.ExternalExecutionInfo> | null {
	if ((we == null) && (initiatedID == null)) {
		return null
	}
	if ((we == null) || (initiatedID == null)) {
		$.panic("either all or none external execution info fields must be set")
	}
	return (() => { const __goscriptLiteralField41 = WorkflowExecution(we); return new apiv1.ExternalExecutionInfo({WorkflowExecution: __goscriptLiteralField41, InitiatedId: $.pointerValue<bigint>(initiatedID)}) })()
}

export function ResetPoints(t: shared.ResetPoints | $.VarRef<shared.ResetPoints> | null): apiv1.ResetPoints | $.VarRef<apiv1.ResetPoints> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField42 = ResetPointInfoArray($.pointerValue<shared.ResetPoints>(t).Points); return new apiv1.ResetPoints({Points: __goscriptLiteralField42}) })()
}

export function ResetPointInfo(t: shared.ResetPointInfo | $.VarRef<shared.ResetPointInfo> | null): apiv1.ResetPointInfo | $.VarRef<apiv1.ResetPointInfo> | null {
	const t$: shared.ResetPointInfo = t == null ? $.pointerTarget<shared.ResetPointInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ResetPointInfo>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField43 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ResetPointInfo).GetBinaryChecksum() : shared.ResetPointInfo.prototype.GetBinaryChecksum.call(t)); const __goscriptLiteralField44 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ResetPointInfo).GetRunId() : shared.ResetPointInfo.prototype.GetRunId.call(t)); const __goscriptLiteralField45 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ResetPointInfo).GetFirstDecisionCompletedId() : shared.ResetPointInfo.prototype.GetFirstDecisionCompletedId.call(t)); const __goscriptLiteralField46 = __goscript_helpers.unixNanoToTime((t$ as shared.ResetPointInfo).CreatedTimeNano); const __goscriptLiteralField47 = __goscript_helpers.unixNanoToTime((t$ as shared.ResetPointInfo).ExpiringTimeNano); const __goscriptLiteralField48 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ResetPointInfo).GetResettable() : shared.ResetPointInfo.prototype.GetResettable.call(t)); return new apiv1.ResetPointInfo({BinaryChecksum: __goscriptLiteralField43, RunId: __goscriptLiteralField44, FirstDecisionCompletedId: __goscriptLiteralField45, CreatedTime: __goscriptLiteralField46, ExpiringTime: __goscriptLiteralField47, Resettable: __goscriptLiteralField48}) })()
}

export function PollerInfo(t: shared.PollerInfo | $.VarRef<shared.PollerInfo> | null): apiv1.PollerInfo | $.VarRef<apiv1.PollerInfo> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField49 = __goscript_helpers.unixNanoToTime($.pointerValue<shared.PollerInfo>(t).LastAccessTime); const __goscriptLiteralField50 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PollerInfo).GetIdentity() : shared.PollerInfo.prototype.GetIdentity.call(t)); const __goscriptLiteralField51 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PollerInfo).GetRatePerSecond() : shared.PollerInfo.prototype.GetRatePerSecond.call(t)); return new apiv1.PollerInfo({LastAccessTime: __goscriptLiteralField49, Identity: __goscriptLiteralField50, RatePerSecond: __goscriptLiteralField51}) })()
}

export function TaskListStatus(t: shared.TaskListStatus | $.VarRef<shared.TaskListStatus> | null): apiv1.TaskListStatus | $.VarRef<apiv1.TaskListStatus> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField52 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TaskListStatus).GetBacklogCountHint() : shared.TaskListStatus.prototype.GetBacklogCountHint.call(t)); const __goscriptLiteralField53 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TaskListStatus).GetReadLevel() : shared.TaskListStatus.prototype.GetReadLevel.call(t)); const __goscriptLiteralField54 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TaskListStatus).GetAckLevel() : shared.TaskListStatus.prototype.GetAckLevel.call(t)); const __goscriptLiteralField55 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TaskListStatus).GetRatePerSecond() : shared.TaskListStatus.prototype.GetRatePerSecond.call(t)); const __goscriptLiteralField56 = TaskIDBlock($.pointerValue<shared.TaskListStatus>(t).TaskIDBlock); return new apiv1.TaskListStatus({BacklogCountHint: __goscriptLiteralField52, ReadLevel: __goscriptLiteralField53, AckLevel: __goscriptLiteralField54, RatePerSecond: __goscriptLiteralField55, TaskIdBlock: __goscriptLiteralField56}) })()
}

export function TaskIDBlock(t: shared.TaskIDBlock | $.VarRef<shared.TaskIDBlock> | null): apiv1.TaskIDBlock | $.VarRef<apiv1.TaskIDBlock> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField57 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TaskIDBlock).GetStartID() : shared.TaskIDBlock.prototype.GetStartID.call(t)); const __goscriptLiteralField58 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TaskIDBlock).GetEndID() : shared.TaskIDBlock.prototype.GetEndID.call(t)); return new apiv1.TaskIDBlock({StartId: __goscriptLiteralField57, EndId: __goscriptLiteralField58}) })()
}

export function WorkflowExecutionConfiguration(t: shared.WorkflowExecutionConfiguration | $.VarRef<shared.WorkflowExecutionConfiguration> | null): apiv1.WorkflowExecutionConfiguration | $.VarRef<apiv1.WorkflowExecutionConfiguration> | null {
	const t$: shared.WorkflowExecutionConfiguration = t == null ? $.pointerTarget<shared.WorkflowExecutionConfiguration>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.WorkflowExecutionConfiguration>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField59 = TaskList((t$ as shared.WorkflowExecutionConfiguration).TaskList); const __goscriptLiteralField60 = __goscript_helpers.secondsToDuration((t$ as shared.WorkflowExecutionConfiguration).ExecutionStartToCloseTimeoutSeconds); const __goscriptLiteralField61 = __goscript_helpers.secondsToDuration((t$ as shared.WorkflowExecutionConfiguration).TaskStartToCloseTimeoutSeconds); return new apiv1.WorkflowExecutionConfiguration({TaskList: __goscriptLiteralField59, ExecutionStartToCloseTimeout: __goscriptLiteralField60, TaskStartToCloseTimeout: __goscriptLiteralField61}) })()
}

export function WorkflowExecutionInfo(t: shared.WorkflowExecutionInfo | $.VarRef<shared.WorkflowExecutionInfo> | null): apiv1.WorkflowExecutionInfo | $.VarRef<apiv1.WorkflowExecutionInfo> | null {
	const t$: shared.WorkflowExecutionInfo = t == null ? $.pointerTarget<shared.WorkflowExecutionInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.WorkflowExecutionInfo>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField62 = WorkflowExecution((t$ as shared.WorkflowExecutionInfo).Execution); const __goscriptLiteralField63 = WorkflowType((t$ as shared.WorkflowExecutionInfo).Type); const __goscriptLiteralField64 = __goscript_helpers.unixNanoToTime((t$ as shared.WorkflowExecutionInfo).StartTime); const __goscriptLiteralField65 = __goscript_helpers.unixNanoToTime((t$ as shared.WorkflowExecutionInfo).CloseTime); const __goscriptLiteralField66 = __goscript__enum.WorkflowExecutionCloseStatus((t$ as shared.WorkflowExecutionInfo).CloseStatus); const __goscriptLiteralField67 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionInfo).GetHistoryLength() : shared.WorkflowExecutionInfo.prototype.GetHistoryLength.call(t)); const __goscriptLiteralField68 = ParentExecutionInfo2((t$ as shared.WorkflowExecutionInfo).ParentDomainId, (t$ as shared.WorkflowExecutionInfo).ParentExecution); const __goscriptLiteralField69 = __goscript_helpers.unixNanoToTime((t$ as shared.WorkflowExecutionInfo).ExecutionTime); const __goscriptLiteralField70 = Memo((t$ as shared.WorkflowExecutionInfo).Memo); const __goscriptLiteralField71 = SearchAttributes((t$ as shared.WorkflowExecutionInfo).SearchAttributes); const __goscriptLiteralField72 = ResetPoints((t$ as shared.WorkflowExecutionInfo).AutoResetPoints); const __goscriptLiteralField73 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionInfo).GetTaskList() : shared.WorkflowExecutionInfo.prototype.GetTaskList.call(t)); const __goscriptLiteralField74 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.WorkflowExecutionInfo).GetIsCron() : shared.WorkflowExecutionInfo.prototype.GetIsCron.call(t)); const __goscriptLiteralField75 = __goscript__enum.CronOverlapPolicy((t$ as shared.WorkflowExecutionInfo).CronOverlapPolicy); return new apiv1.WorkflowExecutionInfo({WorkflowExecution: __goscriptLiteralField62, Type: __goscriptLiteralField63, StartTime: __goscriptLiteralField64, CloseTime: __goscriptLiteralField65, CloseStatus: __goscriptLiteralField66, HistoryLength: __goscriptLiteralField67, ParentExecutionInfo: __goscriptLiteralField68, ExecutionTime: __goscriptLiteralField69, Memo: __goscriptLiteralField70, SearchAttributes: __goscriptLiteralField71, AutoResetPoints: __goscriptLiteralField72, TaskList: __goscriptLiteralField73, IsCron: __goscriptLiteralField74, CronOverlapPolicy: __goscriptLiteralField75}) })()
}

export function ParentExecutionInfo(domainID: $.VarRef<string> | null, domainName: $.VarRef<string> | null, we: shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null, initiatedID: $.VarRef<bigint> | null): apiv1.ParentExecutionInfo | $.VarRef<apiv1.ParentExecutionInfo> | null {
	if ((((domainID == null) && (domainName == null)) && (we == null)) && (initiatedID == null)) {
		return null
	}
	if (((domainName == null) || (we == null)) || (initiatedID == null)) {
		$.panic("either all or none parent execution info must be set")
	}

	// Domain ID was added to unify parent execution info in several places.
	// However it may not be present:
	// - on older histories
	// - if conversion involves thrift data types
	// Fallback to empty string in those cases
	let parentDomainID = ""
	if (domainID != null) {
		parentDomainID = $.pointerValue<string>(domainID)
	}

	return (() => { const __goscriptLiteralField76 = WorkflowExecution(we); return new apiv1.ParentExecutionInfo({DomainId: parentDomainID, DomainName: $.pointerValue<string>(domainName), WorkflowExecution: __goscriptLiteralField76, InitiatedId: $.pointerValue<bigint>(initiatedID)}) })()
}

export function ParentExecutionInfo2(domainID: $.VarRef<string> | null, we: shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null): apiv1.ParentExecutionInfo | $.VarRef<apiv1.ParentExecutionInfo> | null {
	if ((domainID == null) && (we == null)) {
		return null
	}

	return (() => { const __goscriptLiteralField77 = WorkflowExecution(we); return new apiv1.ParentExecutionInfo({DomainId: $.pointerValue<string>(domainID), WorkflowExecution: __goscriptLiteralField77}) })()
}

export function PendingActivityInfo(t: shared.PendingActivityInfo | $.VarRef<shared.PendingActivityInfo> | null): apiv1.PendingActivityInfo | $.VarRef<apiv1.PendingActivityInfo> | null {
	const t$: shared.PendingActivityInfo = t == null ? $.pointerTarget<shared.PendingActivityInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.PendingActivityInfo>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField78 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PendingActivityInfo).GetActivityID() : shared.PendingActivityInfo.prototype.GetActivityID.call(t)); const __goscriptLiteralField79 = ActivityType((t$ as shared.PendingActivityInfo).ActivityType); const __goscriptLiteralField80 = __goscript__enum.PendingActivityState((t$ as shared.PendingActivityInfo).State); const __goscriptLiteralField81 = Payload((t$ as shared.PendingActivityInfo).HeartbeatDetails); const __goscriptLiteralField82 = __goscript_helpers.unixNanoToTime((t$ as shared.PendingActivityInfo).LastHeartbeatTimestamp); const __goscriptLiteralField83 = __goscript_helpers.unixNanoToTime((t$ as shared.PendingActivityInfo).LastStartedTimestamp); const __goscriptLiteralField84 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PendingActivityInfo).GetAttempt() : shared.PendingActivityInfo.prototype.GetAttempt.call(t)); const __goscriptLiteralField85 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PendingActivityInfo).GetMaximumAttempts() : shared.PendingActivityInfo.prototype.GetMaximumAttempts.call(t)); const __goscriptLiteralField86 = __goscript_helpers.unixNanoToTime((t$ as shared.PendingActivityInfo).ScheduledTimestamp); const __goscriptLiteralField87 = __goscript_helpers.unixNanoToTime((t$ as shared.PendingActivityInfo).ExpirationTimestamp); const __goscriptLiteralField88 = FailureWithOptions((t$ as shared.PendingActivityInfo).LastFailureReason, (t$ as shared.PendingActivityInfo).LastFailureDetails, (t$ as shared.PendingActivityInfo).LastFailureOptions); const __goscriptLiteralField89 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PendingActivityInfo).GetLastWorkerIdentity() : shared.PendingActivityInfo.prototype.GetLastWorkerIdentity.call(t)); return new apiv1.PendingActivityInfo({ActivityId: __goscriptLiteralField78, ActivityType: __goscriptLiteralField79, State: __goscriptLiteralField80, HeartbeatDetails: __goscriptLiteralField81, LastHeartbeatTime: __goscriptLiteralField82, LastStartedTime: __goscriptLiteralField83, Attempt: __goscriptLiteralField84, MaximumAttempts: __goscriptLiteralField85, ScheduledTime: __goscriptLiteralField86, ExpirationTime: __goscriptLiteralField87, LastFailure: __goscriptLiteralField88, LastWorkerIdentity: __goscriptLiteralField89}) })()
}

export function PendingChildExecutionInfo(t: shared.PendingChildExecutionInfo | $.VarRef<shared.PendingChildExecutionInfo> | null): apiv1.PendingChildExecutionInfo | $.VarRef<apiv1.PendingChildExecutionInfo> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField90 = WorkflowRunPair((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PendingChildExecutionInfo).GetWorkflowID() : shared.PendingChildExecutionInfo.prototype.GetWorkflowID.call(t)), (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PendingChildExecutionInfo).GetRunID() : shared.PendingChildExecutionInfo.prototype.GetRunID.call(t))); const __goscriptLiteralField91 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PendingChildExecutionInfo).GetWorkflowTypName() : shared.PendingChildExecutionInfo.prototype.GetWorkflowTypName.call(t)); const __goscriptLiteralField92 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PendingChildExecutionInfo).GetInitiatedID() : shared.PendingChildExecutionInfo.prototype.GetInitiatedID.call(t)); const __goscriptLiteralField93 = __goscript__enum.ParentClosePolicy($.pointerValue<shared.PendingChildExecutionInfo>(t).ParentClosePolicy); return new apiv1.PendingChildExecutionInfo({WorkflowExecution: __goscriptLiteralField90, WorkflowTypeName: __goscriptLiteralField91, InitiatedId: __goscriptLiteralField92, ParentClosePolicy: __goscriptLiteralField93}) })()
}

export function PendingDecisionInfo(t: shared.PendingDecisionInfo | $.VarRef<shared.PendingDecisionInfo> | null): apiv1.PendingDecisionInfo | $.VarRef<apiv1.PendingDecisionInfo> | null {
	const t$: shared.PendingDecisionInfo = t == null ? $.pointerTarget<shared.PendingDecisionInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.PendingDecisionInfo>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField94 = __goscript__enum.PendingDecisionState((t$ as shared.PendingDecisionInfo).State); const __goscriptLiteralField95 = __goscript_helpers.unixNanoToTime((t$ as shared.PendingDecisionInfo).ScheduledTimestamp); const __goscriptLiteralField96 = __goscript_helpers.unixNanoToTime((t$ as shared.PendingDecisionInfo).StartedTimestamp); const __goscriptLiteralField97 = $.int((t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PendingDecisionInfo).GetAttempt() : shared.PendingDecisionInfo.prototype.GetAttempt.call(t)), 32); const __goscriptLiteralField98 = __goscript_helpers.unixNanoToTime((t$ as shared.PendingDecisionInfo).OriginalScheduledTimestamp); return new apiv1.PendingDecisionInfo({State: __goscriptLiteralField94, ScheduledTime: __goscriptLiteralField95, StartedTime: __goscriptLiteralField96, Attempt: __goscriptLiteralField97, OriginalScheduledTime: __goscriptLiteralField98}) })()
}

export function ActivityLocalDispatchInfo(t: shared.ActivityLocalDispatchInfo | $.VarRef<shared.ActivityLocalDispatchInfo> | null): apiv1.ActivityLocalDispatchInfo | $.VarRef<apiv1.ActivityLocalDispatchInfo> | null {
	const t$: shared.ActivityLocalDispatchInfo = t == null ? $.pointerTarget<shared.ActivityLocalDispatchInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ActivityLocalDispatchInfo>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField99 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActivityLocalDispatchInfo).GetActivityId() : shared.ActivityLocalDispatchInfo.prototype.GetActivityId.call(t)); const __goscriptLiteralField100 = __goscript_helpers.unixNanoToTime((t$ as shared.ActivityLocalDispatchInfo).ScheduledTimestamp); const __goscriptLiteralField101 = __goscript_helpers.unixNanoToTime((t$ as shared.ActivityLocalDispatchInfo).StartedTimestamp); const __goscriptLiteralField102 = __goscript_helpers.unixNanoToTime((t$ as shared.ActivityLocalDispatchInfo).ScheduledTimestampOfThisAttempt); return new apiv1.ActivityLocalDispatchInfo({ActivityId: __goscriptLiteralField99, ScheduledTime: __goscriptLiteralField100, StartedTime: __goscriptLiteralField101, ScheduledTimeOfThisAttempt: __goscriptLiteralField102, TaskToken: (t$ as shared.ActivityLocalDispatchInfo).TaskToken}) })()
}

export function SupportedClientVersions(t: shared.SupportedClientVersions | $.VarRef<shared.SupportedClientVersions> | null): apiv1.SupportedClientVersions | $.VarRef<apiv1.SupportedClientVersions> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField103 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SupportedClientVersions).GetGoSdk() : shared.SupportedClientVersions.prototype.GetGoSdk.call(t)); const __goscriptLiteralField104 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.SupportedClientVersions).GetJavaSdk() : shared.SupportedClientVersions.prototype.GetJavaSdk.call(t)); return new apiv1.SupportedClientVersions({GoSdk: __goscriptLiteralField103, JavaSdk: __goscriptLiteralField104}) })()
}

export function DescribeDomainResponseDomain(t: shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null): apiv1.Domain | $.VarRef<apiv1.Domain> | null {
	const t$: shared.DescribeDomainResponse = t == null ? $.pointerTarget<shared.DescribeDomainResponse>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.DescribeDomainResponse>(t)
	if (t == null) {
		return null
	}
	let domain = $.varRef((() => { const __goscriptLiteralField105 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DescribeDomainResponse).GetFailoverVersion() : shared.DescribeDomainResponse.prototype.GetFailoverVersion.call(t)); const __goscriptLiteralField106 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.DescribeDomainResponse).GetIsGlobalDomain() : shared.DescribeDomainResponse.prototype.GetIsGlobalDomain.call(t)); return $.markAsStructValue(new apiv1.Domain({FailoverVersion: __goscriptLiteralField105, IsGlobalDomain: __goscriptLiteralField106})) })())
	{
		let info: shared.DomainInfo | $.VarRef<shared.DomainInfo> | null = (t$ as shared.DescribeDomainResponse).DomainInfo
		if (info != null) {
			domain.value.Id = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? ((info as any) as shared.DomainInfo).GetUUID() : shared.DomainInfo.prototype.GetUUID.call(info))
			domain.value.Name = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? ((info as any) as shared.DomainInfo).GetName() : shared.DomainInfo.prototype.GetName.call(info))
			domain.value.Status = __goscript__enum.DomainStatus($.pointerValue<shared.DomainInfo>(info).Status)
			domain.value.Description = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? ((info as any) as shared.DomainInfo).GetDescription() : shared.DomainInfo.prototype.GetDescription.call(info))
			domain.value.OwnerEmail = (info !== null && (info as any).__isVarRef !== true && (info as any).__goValue === undefined ? ((info as any) as shared.DomainInfo).GetOwnerEmail() : shared.DomainInfo.prototype.GetOwnerEmail.call(info))
			domain.value.Data = $.pointerValue<shared.DomainInfo>(info).Data
		}
	}
	{
		let config: shared.DomainConfiguration | $.VarRef<shared.DomainConfiguration> | null = (t$ as shared.DescribeDomainResponse).Configuration
		if (config != null) {
			domain.value.WorkflowExecutionRetentionPeriod = __goscript_helpers.daysToDuration($.pointerValue<shared.DomainConfiguration>(config).WorkflowExecutionRetentionPeriodInDays)
			domain.value.BadBinaries = BadBinaries($.pointerValue<shared.DomainConfiguration>(config).BadBinaries)
			domain.value.HistoryArchivalStatus = __goscript__enum.ArchivalStatus($.pointerValue<shared.DomainConfiguration>(config).HistoryArchivalStatus)
			domain.value.HistoryArchivalUri = (config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as shared.DomainConfiguration).GetHistoryArchivalURI() : shared.DomainConfiguration.prototype.GetHistoryArchivalURI.call(config))
			domain.value.VisibilityArchivalStatus = __goscript__enum.ArchivalStatus($.pointerValue<shared.DomainConfiguration>(config).VisibilityArchivalStatus)
			domain.value.VisibilityArchivalUri = (config !== null && (config as any).__isVarRef !== true && (config as any).__goValue === undefined ? ((config as any) as shared.DomainConfiguration).GetVisibilityArchivalURI() : shared.DomainConfiguration.prototype.GetVisibilityArchivalURI.call(config))
		}
	}
	{
		let repl: shared.DomainReplicationConfiguration | $.VarRef<shared.DomainReplicationConfiguration> | null = (t$ as shared.DescribeDomainResponse).ReplicationConfiguration
		if (repl != null) {
			domain.value.ActiveClusterName = (repl !== null && (repl as any).__isVarRef !== true && (repl as any).__goValue === undefined ? ((repl as any) as shared.DomainReplicationConfiguration).GetActiveClusterName() : shared.DomainReplicationConfiguration.prototype.GetActiveClusterName.call(repl))
			domain.value.Clusters = ClusterReplicationConfigurationArray($.pointerValue<shared.DomainReplicationConfiguration>(repl).Clusters)
			domain.value.ActiveClusters = ActiveClusters($.pointerValue<shared.DomainReplicationConfiguration>(repl).ActiveClusters)
		}
	}
	return domain
}

export function TaskListPartitionMetadata(t: shared.TaskListPartitionMetadata | $.VarRef<shared.TaskListPartitionMetadata> | null): apiv1.TaskListPartitionMetadata | $.VarRef<apiv1.TaskListPartitionMetadata> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField107 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TaskListPartitionMetadata).GetKey() : shared.TaskListPartitionMetadata.prototype.GetKey.call(t)); const __goscriptLiteralField108 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.TaskListPartitionMetadata).GetOwnerHostName() : shared.TaskListPartitionMetadata.prototype.GetOwnerHostName.call(t)); return new apiv1.TaskListPartitionMetadata({Key: __goscriptLiteralField107, OwnerHostName: __goscriptLiteralField108}) })()
}

export function QueryRejected(t: shared.QueryRejected | $.VarRef<shared.QueryRejected> | null): apiv1.QueryRejected | $.VarRef<apiv1.QueryRejected> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField109 = __goscript__enum.WorkflowExecutionCloseStatus($.pointerValue<shared.QueryRejected>(t).CloseStatus); return new apiv1.QueryRejected({CloseStatus: __goscriptLiteralField109}) })()
}

export function PollerInfoArray(t: $.Slice<shared.PollerInfo | $.VarRef<shared.PollerInfo> | null>): $.Slice<apiv1.PollerInfo | $.VarRef<apiv1.PollerInfo> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<apiv1.PollerInfo | $.VarRef<apiv1.PollerInfo> | null> = $.makeSlice<apiv1.PollerInfo | $.VarRef<apiv1.PollerInfo> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget1 = t, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow1 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow1.length; i++) {
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = PollerInfo(((__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] as shared.PollerInfo | $.VarRef<shared.PollerInfo> | null))
	}
	return v
}

export function ResetPointInfoArray(t: $.Slice<shared.ResetPointInfo | $.VarRef<shared.ResetPointInfo> | null>): $.Slice<apiv1.ResetPointInfo | $.VarRef<apiv1.ResetPointInfo> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<apiv1.ResetPointInfo | $.VarRef<apiv1.ResetPointInfo> | null> = $.makeSlice<apiv1.ResetPointInfo | $.VarRef<apiv1.ResetPointInfo> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget2 = t, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow2 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow2.length; i++) {
		;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = ResetPointInfo(((__goscriptRangeWindow2.backing as any[])[__goscriptRangeWindow2.offset + i] as shared.ResetPointInfo | $.VarRef<shared.ResetPointInfo> | null))
	}
	return v
}

export function PendingActivityInfoArray(t: $.Slice<shared.PendingActivityInfo | $.VarRef<shared.PendingActivityInfo> | null>): $.Slice<apiv1.PendingActivityInfo | $.VarRef<apiv1.PendingActivityInfo> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<apiv1.PendingActivityInfo | $.VarRef<apiv1.PendingActivityInfo> | null> = $.makeSlice<apiv1.PendingActivityInfo | $.VarRef<apiv1.PendingActivityInfo> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget3 = t, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __goscriptSliceWindow3 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow3.length; i++) {
		;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] = PendingActivityInfo(((__goscriptRangeWindow3.backing as any[])[__goscriptRangeWindow3.offset + i] as shared.PendingActivityInfo | $.VarRef<shared.PendingActivityInfo> | null))
	}
	return v
}

export function PendingChildExecutionInfoArray(t: $.Slice<shared.PendingChildExecutionInfo | $.VarRef<shared.PendingChildExecutionInfo> | null>): $.Slice<apiv1.PendingChildExecutionInfo | $.VarRef<apiv1.PendingChildExecutionInfo> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<apiv1.PendingChildExecutionInfo | $.VarRef<apiv1.PendingChildExecutionInfo> | null> = $.makeSlice<apiv1.PendingChildExecutionInfo | $.VarRef<apiv1.PendingChildExecutionInfo> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget4 = t, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __goscriptSliceWindow4 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow4.length; i++) {
		;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] = PendingChildExecutionInfo(((__goscriptRangeWindow4.backing as any[])[__goscriptRangeWindow4.offset + i] as shared.PendingChildExecutionInfo | $.VarRef<shared.PendingChildExecutionInfo> | null))
	}
	return v
}

export function IndexedValueTypeMap(t: globalThis.Map<string, shared.IndexedValueType> | null): globalThis.Map<string, apiv1.IndexedValueType> | null {
	if (t == null) {
		return null
	}
	let v: globalThis.Map<string, apiv1.IndexedValueType> | null = $.makeMap<string, apiv1.IndexedValueType>()
	for (let [key, __rangeValue] of t?.entries() ?? []) {
		$.mapSet(v, key, __goscript__enum.IndexedValueType($.mapGet<string, shared.IndexedValueType, shared.IndexedValueType>(t, key, 0)[0]))
	}
	return v
}

export function DataBlobArray(t: $.Slice<shared.DataBlob | $.VarRef<shared.DataBlob> | null>): $.Slice<apiv1.DataBlob | $.VarRef<apiv1.DataBlob> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<apiv1.DataBlob | $.VarRef<apiv1.DataBlob> | null> = $.makeSlice<apiv1.DataBlob | $.VarRef<apiv1.DataBlob> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget5 = t, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __goscriptSliceWindow5 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow5.length; i++) {
		;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] = DataBlob(((__goscriptRangeWindow5.backing as any[])[__goscriptRangeWindow5.offset + i] as shared.DataBlob | $.VarRef<shared.DataBlob> | null))
	}
	return v
}

export function WorkflowExecutionInfoArray(t: $.Slice<shared.WorkflowExecutionInfo | $.VarRef<shared.WorkflowExecutionInfo> | null>): $.Slice<apiv1.WorkflowExecutionInfo | $.VarRef<apiv1.WorkflowExecutionInfo> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<apiv1.WorkflowExecutionInfo | $.VarRef<apiv1.WorkflowExecutionInfo> | null> = $.makeSlice<apiv1.WorkflowExecutionInfo | $.VarRef<apiv1.WorkflowExecutionInfo> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget6 = t, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __goscriptSliceWindow6 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow6.length; i++) {
		;(__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i)] = WorkflowExecutionInfo(((__goscriptRangeWindow6.backing as any[])[__goscriptRangeWindow6.offset + i] as shared.WorkflowExecutionInfo | $.VarRef<shared.WorkflowExecutionInfo> | null))
	}
	return v
}

export function DescribeDomainResponseArray(t: $.Slice<shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null>): $.Slice<apiv1.Domain | $.VarRef<apiv1.Domain> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<apiv1.Domain | $.VarRef<apiv1.Domain> | null> = $.makeSlice<apiv1.Domain | $.VarRef<apiv1.Domain> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget7 = t, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __goscriptSliceWindow7 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow7.length; i++) {
		;(__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] = DescribeDomainResponseDomain(((__goscriptRangeWindow7.backing as any[])[__goscriptRangeWindow7.offset + i] as shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null))
	}
	return v
}

export function TaskListPartitionMetadataArray(t: $.Slice<shared.TaskListPartitionMetadata | $.VarRef<shared.TaskListPartitionMetadata> | null>): $.Slice<apiv1.TaskListPartitionMetadata | $.VarRef<apiv1.TaskListPartitionMetadata> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<apiv1.TaskListPartitionMetadata | $.VarRef<apiv1.TaskListPartitionMetadata> | null> = $.makeSlice<apiv1.TaskListPartitionMetadata | $.VarRef<apiv1.TaskListPartitionMetadata> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget8 = t, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __goscriptSliceWindow8 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow8.length; i++) {
		;(__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, i)] = TaskListPartitionMetadata(((__goscriptRangeWindow8.backing as any[])[__goscriptRangeWindow8.offset + i] as shared.TaskListPartitionMetadata | $.VarRef<shared.TaskListPartitionMetadata> | null))
	}
	return v
}

export function WorkflowQueryMap(t: globalThis.Map<string, shared.WorkflowQuery | $.VarRef<shared.WorkflowQuery> | null> | null): globalThis.Map<string, apiv1.WorkflowQuery | $.VarRef<apiv1.WorkflowQuery> | null> | null {
	if (t == null) {
		return null
	}
	let v: globalThis.Map<string, apiv1.WorkflowQuery | $.VarRef<apiv1.WorkflowQuery> | null> | null = $.makeMap<string, apiv1.WorkflowQuery | $.VarRef<apiv1.WorkflowQuery> | null>()
	for (let [key, __rangeValue] of t?.entries() ?? []) {
		$.mapSet(v, key, WorkflowQuery($.mapGet<string, shared.WorkflowQuery | $.VarRef<shared.WorkflowQuery> | null, shared.WorkflowQuery | $.VarRef<shared.WorkflowQuery> | null>(t, key, null)[0]))
	}
	return v
}

export function ActivityLocalDispatchInfoMap(t: globalThis.Map<string, shared.ActivityLocalDispatchInfo | $.VarRef<shared.ActivityLocalDispatchInfo> | null> | null): globalThis.Map<string, apiv1.ActivityLocalDispatchInfo | $.VarRef<apiv1.ActivityLocalDispatchInfo> | null> | null {
	if (t == null) {
		return null
	}
	let v: globalThis.Map<string, apiv1.ActivityLocalDispatchInfo | $.VarRef<apiv1.ActivityLocalDispatchInfo> | null> | null = $.makeMap<string, apiv1.ActivityLocalDispatchInfo | $.VarRef<apiv1.ActivityLocalDispatchInfo> | null>()
	for (let [key, __rangeValue] of t?.entries() ?? []) {
		$.mapSet(v, key, ActivityLocalDispatchInfo($.mapGet<string, shared.ActivityLocalDispatchInfo | $.VarRef<shared.ActivityLocalDispatchInfo> | null, shared.ActivityLocalDispatchInfo | $.VarRef<shared.ActivityLocalDispatchInfo> | null>(t, key, null)[0]))
	}
	return v
}

export function ActiveClusterSelectionPolicy(t: shared.ActiveClusterSelectionPolicy | $.VarRef<shared.ActiveClusterSelectionPolicy> | null): apiv1.ActiveClusterSelectionPolicy | $.VarRef<apiv1.ActiveClusterSelectionPolicy> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField110 = ClusterAttribute($.pointerValue<shared.ActiveClusterSelectionPolicy>(t).ClusterAttribute); return new apiv1.ActiveClusterSelectionPolicy({ClusterAttribute: __goscriptLiteralField110}) })()
}

export function ClusterAttribute(t: shared.ClusterAttribute | $.VarRef<shared.ClusterAttribute> | null): apiv1.ClusterAttribute | $.VarRef<apiv1.ClusterAttribute> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField111 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ClusterAttribute).GetScope() : shared.ClusterAttribute.prototype.GetScope.call(t)); const __goscriptLiteralField112 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ClusterAttribute).GetName() : shared.ClusterAttribute.prototype.GetName.call(t)); return new apiv1.ClusterAttribute({Scope: __goscriptLiteralField111, Name: __goscriptLiteralField112}) })()
}

export function ActiveClusters(t: shared.ActiveClusters | $.VarRef<shared.ActiveClusters> | null): apiv1.ActiveClusters | $.VarRef<apiv1.ActiveClusters> | null {
	const t$: shared.ActiveClusters = t == null ? $.pointerTarget<shared.ActiveClusters>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ActiveClusters>(t)
	if (t == null) {
		return null
	}
	let activeClustersByClusterAttribute: globalThis.Map<string, apiv1.ClusterAttributeScope | $.VarRef<apiv1.ClusterAttributeScope> | null> | null = null! as globalThis.Map<string, apiv1.ClusterAttributeScope | $.VarRef<apiv1.ClusterAttributeScope> | null> | null
	if ((t$ as shared.ActiveClusters).ActiveClustersByClusterAttribute != null) {
		activeClustersByClusterAttribute = $.makeMap<string, apiv1.ClusterAttributeScope | $.VarRef<apiv1.ClusterAttributeScope> | null>()
		for (let [scopeType, scope] of (t$ as shared.ActiveClusters).ActiveClustersByClusterAttribute?.entries() ?? []) {
			$.mapSet(activeClustersByClusterAttribute, scopeType, ClusterAttributeScope(scope))
		}
	}

	return new apiv1.ActiveClusters({ActiveClustersByClusterAttribute: activeClustersByClusterAttribute})
}

export function ClusterAttributeScope(t: shared.ClusterAttributeScope | $.VarRef<shared.ClusterAttributeScope> | null): apiv1.ClusterAttributeScope | $.VarRef<apiv1.ClusterAttributeScope> | null {
	const t$: shared.ClusterAttributeScope = t == null ? $.pointerTarget<shared.ClusterAttributeScope>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ClusterAttributeScope>(t)
	if (t == null) {
		return null
	}
	let clusterAttributes: globalThis.Map<string, apiv1.ActiveClusterInfo | $.VarRef<apiv1.ActiveClusterInfo> | null> | null = null! as globalThis.Map<string, apiv1.ActiveClusterInfo | $.VarRef<apiv1.ActiveClusterInfo> | null> | null
	if ($.len((t$ as shared.ClusterAttributeScope).ClusterAttributes) > 0) {
		clusterAttributes = $.makeMap<string, apiv1.ActiveClusterInfo | $.VarRef<apiv1.ActiveClusterInfo> | null>()
		for (let [name, clusterInfo] of (t$ as shared.ClusterAttributeScope).ClusterAttributes?.entries() ?? []) {
			$.mapSet(clusterAttributes, name, ActiveClusterInfo(clusterInfo))
		}
	}

	return new apiv1.ClusterAttributeScope({ClusterAttributes: clusterAttributes})
}

export function ActiveClusterInfo(t: shared.ActiveClusterInfo | $.VarRef<shared.ActiveClusterInfo> | null): apiv1.ActiveClusterInfo | $.VarRef<apiv1.ActiveClusterInfo> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField113 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActiveClusterInfo).GetActiveClusterName() : shared.ActiveClusterInfo.prototype.GetActiveClusterName.call(t)); const __goscriptLiteralField114 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ActiveClusterInfo).GetFailoverVersion() : shared.ActiveClusterInfo.prototype.GetFailoverVersion.call(t)); return new apiv1.ActiveClusterInfo({ActiveClusterName: __goscriptLiteralField113, FailoverVersion: __goscriptLiteralField114}) })()
}

export function ClusterFailoverArray(t: $.Slice<shared.ClusterFailover | $.VarRef<shared.ClusterFailover> | null>): $.Slice<apiv1.ClusterFailover | $.VarRef<apiv1.ClusterFailover> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<apiv1.ClusterFailover | $.VarRef<apiv1.ClusterFailover> | null> = $.makeSlice<apiv1.ClusterFailover | $.VarRef<apiv1.ClusterFailover> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget9 = t, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __goscriptSliceWindow9 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow9.length; i++) {
		;(__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, i)] = ClusterFailover(((__goscriptRangeWindow9.backing as any[])[__goscriptRangeWindow9.offset + i] as shared.ClusterFailover | $.VarRef<shared.ClusterFailover> | null))
	}
	return v
}

export function ClusterFailover(t: shared.ClusterFailover | $.VarRef<shared.ClusterFailover> | null): apiv1.ClusterFailover | $.VarRef<apiv1.ClusterFailover> | null {
	const t$: shared.ClusterFailover = t == null ? $.pointerTarget<shared.ClusterFailover>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.ClusterFailover>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField115 = ActiveClusterInfo((t$ as shared.ClusterFailover).FromCluster); const __goscriptLiteralField116 = ActiveClusterInfo((t$ as shared.ClusterFailover).ToCluster); const __goscriptLiteralField117 = ClusterAttribute((t$ as shared.ClusterFailover).ClusterAttribute); return new apiv1.ClusterFailover({FromCluster: __goscriptLiteralField115, ToCluster: __goscriptLiteralField116, ClusterAttribute: __goscriptLiteralField117}) })()
}

export function FailoverEventArray(t: $.Slice<shared.FailoverEvent | $.VarRef<shared.FailoverEvent> | null>): $.Slice<apiv1.FailoverEvent | $.VarRef<apiv1.FailoverEvent> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<apiv1.FailoverEvent | $.VarRef<apiv1.FailoverEvent> | null> = $.makeSlice<apiv1.FailoverEvent | $.VarRef<apiv1.FailoverEvent> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget10 = t, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __goscriptSliceWindow10 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow10.length; i++) {
		;(__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, i)] = FailoverEvent(((__goscriptRangeWindow10.backing as any[])[__goscriptRangeWindow10.offset + i] as shared.FailoverEvent | $.VarRef<shared.FailoverEvent> | null))
	}
	return v
}

export function FailoverEvent(t: shared.FailoverEvent | $.VarRef<shared.FailoverEvent> | null): apiv1.FailoverEvent | $.VarRef<apiv1.FailoverEvent> | null {
	const t$: shared.FailoverEvent = t == null ? $.pointerTarget<shared.FailoverEvent>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<shared.FailoverEvent>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField118 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.FailoverEvent).GetID() : shared.FailoverEvent.prototype.GetID.call(t)); const __goscriptLiteralField119 = __goscript_helpers.unixNanoToTime((t$ as shared.FailoverEvent).CreatedTime); const __goscriptLiteralField120 = __goscript__enum.FailoverType((t$ as shared.FailoverEvent).FailoverType); const __goscriptLiteralField121 = ClusterFailoverArray((t$ as shared.FailoverEvent).ClusterFailovers); return new apiv1.FailoverEvent({Id: __goscriptLiteralField118, CreatedTime: __goscriptLiteralField119, FailoverType: __goscriptLiteralField120, ClusterFailovers: __goscriptLiteralField121}) })()
}

export function PaginationOptions(t: shared.PaginationOptions | $.VarRef<shared.PaginationOptions> | null): apiv1.PaginationOptions | $.VarRef<apiv1.PaginationOptions> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField122 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.PaginationOptions).GetPageSize() : shared.PaginationOptions.prototype.GetPageSize.call(t)); return new apiv1.PaginationOptions({PageSize: __goscriptLiteralField122, NextPageToken: $.pointerValue<shared.PaginationOptions>(t).NextPageToken}) })()
}

export function ListFailoverHistoryRequestFilters(t: shared.ListFailoverHistoryRequestFilters | $.VarRef<shared.ListFailoverHistoryRequestFilters> | null): apiv1.ListFailoverHistoryRequestFilters | $.VarRef<apiv1.ListFailoverHistoryRequestFilters> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField123 = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as shared.ListFailoverHistoryRequestFilters).GetDomainID() : shared.ListFailoverHistoryRequestFilters.prototype.GetDomainID.call(t)); return new apiv1.ListFailoverHistoryRequestFilters({DomainId: __goscriptLiteralField123}) })()
}
