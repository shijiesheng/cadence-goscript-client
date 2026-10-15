// Generated file based on types.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as apiv1 from "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"

import * as __goscript__enum from "./enum.gs.ts"

import * as __goscript_helpers from "./helpers.gs.ts"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"
import "./enum.gs.ts"
import "./helpers.gs.ts"

export function Payload(p: apiv1.Payload | $.VarRef<apiv1.Payload> | null): $.Slice<number> {
	const p$: apiv1.Payload = p == null ? $.pointerTarget<apiv1.Payload>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<apiv1.Payload>(p)
	if (p == null) {
		return null
	}
	if ((p$ as apiv1.Payload).Data == null) {
		// protoPayload will not generate this case
		// however, Data field will be dropped by the encoding if it's empty
		// and receiver side will see nil for the Data field
		// since we already know p is not nil, Data field must be an empty byte array
		return new Uint8Array([]) as $.Slice<number>
	}
	return (p$ as apiv1.Payload).Data
}

export function Domain(__goscriptParam0: string): $.VarRef<string> | null {
	let domain: $.VarRef<string> = $.varRef(__goscriptParam0)
	if ($.stringEqual(domain.value, "")) {
		return null
	}
	return domain
}

export function FailureReason(failure: apiv1.Failure | $.VarRef<apiv1.Failure> | null): $.VarRef<string> | null {
	if (failure == null) {
		return null
	}
	return $.fieldRef($.pointerValue<apiv1.Failure>(failure)._fields, "Reason")
}

export function FailureDetails(failure: apiv1.Failure | $.VarRef<apiv1.Failure> | null): $.Slice<number> {
	if (failure == null) {
		return null
	}
	return $.pointerValue<apiv1.Failure>(failure).Details
}

export function FailureOptions(failure: apiv1.Failure | $.VarRef<apiv1.Failure> | null): shared.FailureOptions | $.VarRef<shared.FailureOptions> | null {
	const failure$: apiv1.Failure = failure == null ? $.pointerTarget<apiv1.Failure>(failure) : (failure as any).__isVarRef === true ? (failure as any).value : (failure as any).__goValue === undefined ? (failure as any) : $.pointerTarget<apiv1.Failure>(failure)
	if ((failure == null) || ((failure$ as apiv1.Failure).Options == null)) {
		return null
	}
	return (() => { const __goscriptLiteralField0 = __goscript__enum.FailureCategory(apiv1.FailureOptions.prototype.GetFailureCategory.call((failure$ as apiv1.Failure).Options)); const __goscriptLiteralField1 = __goscript_helpers.durationToSeconds(apiv1.FailureOptions.prototype.GetNextRetryInterval.call((failure$ as apiv1.Failure).Options)); return new shared.FailureOptions({FailureCategory: __goscriptLiteralField0, NextRetryIntervalSeconds: __goscriptLiteralField1}) })()
}

export function WorkflowExecution(t: apiv1.WorkflowExecution | $.VarRef<apiv1.WorkflowExecution> | null): shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null {
	const t$: apiv1.WorkflowExecution = t == null ? $.pointerTarget<apiv1.WorkflowExecution>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.WorkflowExecution>(t)
	if (t == null) {
		return null
	}
	return new shared.WorkflowExecution({WorkflowId: $.fieldRef((t$ as apiv1.WorkflowExecution)._fields, "WorkflowId"), RunId: $.fieldRef((t$ as apiv1.WorkflowExecution)._fields, "RunId")})
}

export function WorkflowID(t: apiv1.WorkflowExecution | $.VarRef<apiv1.WorkflowExecution> | null): $.VarRef<string> | null {
	if (t == null) {
		return null
	}
	return $.fieldRef($.pointerValue<apiv1.WorkflowExecution>(t)._fields, "WorkflowId")
}

export function RunID(t: apiv1.WorkflowExecution | $.VarRef<apiv1.WorkflowExecution> | null): $.VarRef<string> | null {
	if (t == null) {
		return null
	}
	return $.fieldRef($.pointerValue<apiv1.WorkflowExecution>(t)._fields, "RunId")
}

export function ActivityType(t: apiv1.ActivityType | $.VarRef<apiv1.ActivityType> | null): shared.ActivityType | $.VarRef<shared.ActivityType> | null {
	if (t == null) {
		return null
	}
	return new shared.ActivityType({Name: $.fieldRef($.pointerValue<apiv1.ActivityType>(t)._fields, "Name")})
}

export function AutoConfigHint(t: apiv1.AutoConfigHint | $.VarRef<apiv1.AutoConfigHint> | null): shared.AutoConfigHint | $.VarRef<shared.AutoConfigHint> | null {
	const t$: apiv1.AutoConfigHint = t == null ? $.pointerTarget<apiv1.AutoConfigHint>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.AutoConfigHint>(t)
	if (t == null) {
		return null
	}
	return new shared.AutoConfigHint({EnableAutoConfig: $.fieldRef((t$ as apiv1.AutoConfigHint)._fields, "EnableAutoConfig"), PollerWaitTimeInMs: $.fieldRef((t$ as apiv1.AutoConfigHint)._fields, "PollerWaitTimeInMs")})
}

export function WorkflowType(t: apiv1.WorkflowType | $.VarRef<apiv1.WorkflowType> | null): shared.WorkflowType | $.VarRef<shared.WorkflowType> | null {
	if (t == null) {
		return null
	}
	return new shared.WorkflowType({Name: $.fieldRef($.pointerValue<apiv1.WorkflowType>(t)._fields, "Name")})
}

export function TaskList(t: apiv1.TaskList | $.VarRef<apiv1.TaskList> | null): shared.TaskList | $.VarRef<shared.TaskList> | null {
	const t$: apiv1.TaskList = t == null ? $.pointerTarget<apiv1.TaskList>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.TaskList>(t)
	if (t == null) {
		return null
	}
	let baseName: $.VarRef<string> | null = null! as $.VarRef<string> | null
	if (!$.stringEqual((t$ as apiv1.TaskList).BaseName, "")) {
		baseName = $.fieldRef((t$ as apiv1.TaskList)._fields, "BaseName")
	}
	return (() => { const __goscriptLiteralField2 = __goscript__enum.TaskListKind((t$ as apiv1.TaskList).Kind); return new shared.TaskList({Name: $.fieldRef((t$ as apiv1.TaskList)._fields, "Name"), Kind: __goscriptLiteralField2, BaseName: baseName}) })()
}

export function TaskListMetadata(t: apiv1.TaskListMetadata | $.VarRef<apiv1.TaskListMetadata> | null): shared.TaskListMetadata | $.VarRef<shared.TaskListMetadata> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField3 = __goscript_helpers.toDoubleValue($.pointerValue<apiv1.TaskListMetadata>(t).MaxTasksPerSecond); return new shared.TaskListMetadata({MaxTasksPerSecond: __goscriptLiteralField3}) })()
}

export function RetryPolicy(t: apiv1.RetryPolicy | $.VarRef<apiv1.RetryPolicy> | null): shared.RetryPolicy | $.VarRef<shared.RetryPolicy> | null {
	const t$: apiv1.RetryPolicy = t == null ? $.pointerTarget<apiv1.RetryPolicy>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.RetryPolicy>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField4 = __goscript_helpers.durationToSeconds((t$ as apiv1.RetryPolicy).InitialInterval); const __goscriptLiteralField5 = __goscript_helpers.durationToSeconds((t$ as apiv1.RetryPolicy).MaximumInterval); const __goscriptLiteralField6 = __goscript_helpers.durationToSeconds((t$ as apiv1.RetryPolicy).ExpirationInterval); return new shared.RetryPolicy({InitialIntervalInSeconds: __goscriptLiteralField4, BackoffCoefficient: $.fieldRef((t$ as apiv1.RetryPolicy)._fields, "BackoffCoefficient"), MaximumIntervalInSeconds: __goscriptLiteralField5, MaximumAttempts: $.fieldRef((t$ as apiv1.RetryPolicy)._fields, "MaximumAttempts"), NonRetriableErrorReasons: (t$ as apiv1.RetryPolicy).NonRetryableErrorReasons, ExpirationIntervalInSeconds: __goscriptLiteralField6}) })()
}

export function Header(t: apiv1.Header | $.VarRef<apiv1.Header> | null): shared.Header | $.VarRef<shared.Header> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField7 = PayloadMap($.pointerValue<apiv1.Header>(t).Fields); return new shared.Header({Fields: __goscriptLiteralField7}) })()
}

export function Memo(t: apiv1.Memo | $.VarRef<apiv1.Memo> | null): shared.Memo | $.VarRef<shared.Memo> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField8 = PayloadMap($.pointerValue<apiv1.Memo>(t).Fields); return new shared.Memo({Fields: __goscriptLiteralField8}) })()
}

export function SearchAttributes(t: apiv1.SearchAttributes | $.VarRef<apiv1.SearchAttributes> | null): shared.SearchAttributes | $.VarRef<shared.SearchAttributes> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField9 = PayloadMap($.pointerValue<apiv1.SearchAttributes>(t).IndexedFields); return new shared.SearchAttributes({IndexedFields: __goscriptLiteralField9}) })()
}

export function BadBinaries(t: apiv1.BadBinaries | $.VarRef<apiv1.BadBinaries> | null): shared.BadBinaries | $.VarRef<shared.BadBinaries> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField10 = BadBinaryInfoMap($.pointerValue<apiv1.BadBinaries>(t).Binaries); return new shared.BadBinaries({Binaries: __goscriptLiteralField10}) })()
}

export function BadBinaryInfo(t: apiv1.BadBinaryInfo | $.VarRef<apiv1.BadBinaryInfo> | null): shared.BadBinaryInfo | $.VarRef<shared.BadBinaryInfo> | null {
	const t$: apiv1.BadBinaryInfo = t == null ? $.pointerTarget<apiv1.BadBinaryInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.BadBinaryInfo>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField11 = __goscript_helpers.timeToUnixNano((t$ as apiv1.BadBinaryInfo).CreatedTime); return new shared.BadBinaryInfo({Reason: $.fieldRef((t$ as apiv1.BadBinaryInfo)._fields, "Reason"), Operator: $.fieldRef((t$ as apiv1.BadBinaryInfo)._fields, "Operator"), CreatedTimeNano: __goscriptLiteralField11}) })()
}

export function ClusterReplicationConfiguration(t: apiv1.ClusterReplicationConfiguration | $.VarRef<apiv1.ClusterReplicationConfiguration> | null): shared.ClusterReplicationConfiguration | $.VarRef<shared.ClusterReplicationConfiguration> | null {
	if (t == null) {
		return null
	}
	return new shared.ClusterReplicationConfiguration({ClusterName: $.fieldRef($.pointerValue<apiv1.ClusterReplicationConfiguration>(t)._fields, "ClusterName")})
}

export function WorkflowQuery(t: apiv1.WorkflowQuery | $.VarRef<apiv1.WorkflowQuery> | null): shared.WorkflowQuery | $.VarRef<shared.WorkflowQuery> | null {
	const t$: apiv1.WorkflowQuery = t == null ? $.pointerTarget<apiv1.WorkflowQuery>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.WorkflowQuery>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField12 = Payload((t$ as apiv1.WorkflowQuery).QueryArgs); return new shared.WorkflowQuery({QueryType: $.fieldRef((t$ as apiv1.WorkflowQuery)._fields, "QueryType"), QueryArgs: __goscriptLiteralField12}) })()
}

export function WorkflowQueryResult(t: apiv1.WorkflowQueryResult | $.VarRef<apiv1.WorkflowQueryResult> | null): shared.WorkflowQueryResult | $.VarRef<shared.WorkflowQueryResult> | null {
	const t$: apiv1.WorkflowQueryResult = t == null ? $.pointerTarget<apiv1.WorkflowQueryResult>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.WorkflowQueryResult>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField13 = __goscript__enum.QueryResultType((t$ as apiv1.WorkflowQueryResult).ResultType); const __goscriptLiteralField14 = Payload((t$ as apiv1.WorkflowQueryResult).Answer); return new shared.WorkflowQueryResult({ResultType: __goscriptLiteralField13, Answer: __goscriptLiteralField14, ErrorMessage: $.fieldRef((t$ as apiv1.WorkflowQueryResult)._fields, "ErrorMessage")}) })()
}

export function StickyExecutionAttributes(t: apiv1.StickyExecutionAttributes | $.VarRef<apiv1.StickyExecutionAttributes> | null): shared.StickyExecutionAttributes | $.VarRef<shared.StickyExecutionAttributes> | null {
	const t$: apiv1.StickyExecutionAttributes = t == null ? $.pointerTarget<apiv1.StickyExecutionAttributes>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.StickyExecutionAttributes>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField15 = TaskList((t$ as apiv1.StickyExecutionAttributes).WorkerTaskList); const __goscriptLiteralField16 = __goscript_helpers.durationToSeconds((t$ as apiv1.StickyExecutionAttributes).ScheduleToStartTimeout); return new shared.StickyExecutionAttributes({WorkerTaskList: __goscriptLiteralField15, ScheduleToStartTimeoutSeconds: __goscriptLiteralField16}) })()
}

export function WorkerVersionInfo(t: apiv1.WorkerVersionInfo | $.VarRef<apiv1.WorkerVersionInfo> | null): shared.WorkerVersionInfo | $.VarRef<shared.WorkerVersionInfo> | null {
	const t$: apiv1.WorkerVersionInfo = t == null ? $.pointerTarget<apiv1.WorkerVersionInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.WorkerVersionInfo>(t)
	if (t == null) {
		return null
	}
	return new shared.WorkerVersionInfo({Impl: $.fieldRef((t$ as apiv1.WorkerVersionInfo)._fields, "Impl"), FeatureVersion: $.fieldRef((t$ as apiv1.WorkerVersionInfo)._fields, "FeatureVersion")})
}

export function StartTimeFilter(t: apiv1.StartTimeFilter | $.VarRef<apiv1.StartTimeFilter> | null): shared.StartTimeFilter | $.VarRef<shared.StartTimeFilter> | null {
	const t$: apiv1.StartTimeFilter = t == null ? $.pointerTarget<apiv1.StartTimeFilter>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.StartTimeFilter>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField17 = __goscript_helpers.timeToUnixNano((t$ as apiv1.StartTimeFilter).EarliestTime); const __goscriptLiteralField18 = __goscript_helpers.timeToUnixNano((t$ as apiv1.StartTimeFilter).LatestTime); return new shared.StartTimeFilter({EarliestTime: __goscriptLiteralField17, LatestTime: __goscriptLiteralField18}) })()
}

export function WorkflowExecutionFilter(t: apiv1.WorkflowExecutionFilter | $.VarRef<apiv1.WorkflowExecutionFilter> | null): shared.WorkflowExecutionFilter | $.VarRef<shared.WorkflowExecutionFilter> | null {
	const t$: apiv1.WorkflowExecutionFilter = t == null ? $.pointerTarget<apiv1.WorkflowExecutionFilter>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.WorkflowExecutionFilter>(t)
	if (t == null) {
		return null
	}
	return new shared.WorkflowExecutionFilter({WorkflowId: $.fieldRef((t$ as apiv1.WorkflowExecutionFilter)._fields, "WorkflowId"), RunId: $.fieldRef((t$ as apiv1.WorkflowExecutionFilter)._fields, "RunId")})
}

export function WorkflowTypeFilter(t: apiv1.WorkflowTypeFilter | $.VarRef<apiv1.WorkflowTypeFilter> | null): shared.WorkflowTypeFilter | $.VarRef<shared.WorkflowTypeFilter> | null {
	if (t == null) {
		return null
	}
	return new shared.WorkflowTypeFilter({Name: $.fieldRef($.pointerValue<apiv1.WorkflowTypeFilter>(t)._fields, "Name")})
}

export function StatusFilter(t: apiv1.StatusFilter | $.VarRef<apiv1.StatusFilter> | null): $.VarRef<shared.WorkflowExecutionCloseStatus> | null {
	if (t == null) {
		return null
	}
	return __goscript__enum.WorkflowExecutionCloseStatus($.pointerValue<apiv1.StatusFilter>(t).Status)
}

export function PayloadMap(t: globalThis.Map<string, apiv1.Payload | $.VarRef<apiv1.Payload> | null> | null): globalThis.Map<string, $.Slice<number>> | null {
	if (t == null) {
		return null
	}
	let v: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()
	for (let [key, __rangeValue] of t?.entries() ?? []) {
		$.mapSet(v, key, Payload($.mapGet<string, apiv1.Payload | $.VarRef<apiv1.Payload> | null, apiv1.Payload | $.VarRef<apiv1.Payload> | null>(t, key, null)[0]))
	}
	return v
}

export function BadBinaryInfoMap(t: globalThis.Map<string, apiv1.BadBinaryInfo | $.VarRef<apiv1.BadBinaryInfo> | null> | null): globalThis.Map<string, shared.BadBinaryInfo | $.VarRef<shared.BadBinaryInfo> | null> | null {
	if (t == null) {
		return null
	}
	let v: globalThis.Map<string, shared.BadBinaryInfo | $.VarRef<shared.BadBinaryInfo> | null> | null = $.makeMap<string, shared.BadBinaryInfo | $.VarRef<shared.BadBinaryInfo> | null>()
	for (let [key, __rangeValue] of t?.entries() ?? []) {
		$.mapSet(v, key, BadBinaryInfo($.mapGet<string, apiv1.BadBinaryInfo | $.VarRef<apiv1.BadBinaryInfo> | null, apiv1.BadBinaryInfo | $.VarRef<apiv1.BadBinaryInfo> | null>(t, key, null)[0]))
	}
	return v
}

export function ClusterReplicationConfigurationArray(t: $.Slice<apiv1.ClusterReplicationConfiguration | $.VarRef<apiv1.ClusterReplicationConfiguration> | null>): $.Slice<shared.ClusterReplicationConfiguration | $.VarRef<shared.ClusterReplicationConfiguration> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<shared.ClusterReplicationConfiguration | $.VarRef<shared.ClusterReplicationConfiguration> | null> = $.makeSlice<shared.ClusterReplicationConfiguration | $.VarRef<shared.ClusterReplicationConfiguration> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget0 = t, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow0.length; i++) {
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = ClusterReplicationConfiguration(((__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] as apiv1.ClusterReplicationConfiguration | $.VarRef<apiv1.ClusterReplicationConfiguration> | null))
	}
	return v
}

export function WorkflowQueryResultMap(t: globalThis.Map<string, apiv1.WorkflowQueryResult | $.VarRef<apiv1.WorkflowQueryResult> | null> | null): globalThis.Map<string, shared.WorkflowQueryResult | $.VarRef<shared.WorkflowQueryResult> | null> | null {
	if (t == null) {
		return null
	}
	let v: globalThis.Map<string, shared.WorkflowQueryResult | $.VarRef<shared.WorkflowQueryResult> | null> | null = $.makeMap<string, shared.WorkflowQueryResult | $.VarRef<shared.WorkflowQueryResult> | null>()
	for (let [key, __rangeValue] of t?.entries() ?? []) {
		$.mapSet(v, key, WorkflowQueryResult($.mapGet<string, apiv1.WorkflowQueryResult | $.VarRef<apiv1.WorkflowQueryResult> | null, apiv1.WorkflowQueryResult | $.VarRef<apiv1.WorkflowQueryResult> | null>(t, key, null)[0]))
	}
	return v
}

export function DataBlob(t: apiv1.DataBlob | $.VarRef<apiv1.DataBlob> | null): shared.DataBlob | $.VarRef<shared.DataBlob> | null {
	const t$: apiv1.DataBlob = t == null ? $.pointerTarget<apiv1.DataBlob>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.DataBlob>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField19 = __goscript__enum.EncodingType((t$ as apiv1.DataBlob).EncodingType); return new shared.DataBlob({EncodingType: __goscriptLiteralField19, Data: (t$ as apiv1.DataBlob).Data}) })()
}

export function ExternalInitiatedID(t: apiv1.ExternalExecutionInfo | $.VarRef<apiv1.ExternalExecutionInfo> | null): $.VarRef<bigint> | null {
	if (t == null) {
		return null
	}
	return $.fieldRef($.pointerValue<apiv1.ExternalExecutionInfo>(t)._fields, "InitiatedId")
}

export function ExternalWorkflowExecution(t: apiv1.ExternalExecutionInfo | $.VarRef<apiv1.ExternalExecutionInfo> | null): shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null {
	if (t == null) {
		return null
	}
	return WorkflowExecution($.pointerValue<apiv1.ExternalExecutionInfo>(t).WorkflowExecution)
}

export function ResetPoints(t: apiv1.ResetPoints | $.VarRef<apiv1.ResetPoints> | null): shared.ResetPoints | $.VarRef<shared.ResetPoints> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField20 = ResetPointInfoArray($.pointerValue<apiv1.ResetPoints>(t).Points); return new shared.ResetPoints({Points: __goscriptLiteralField20}) })()
}

export function ResetPointInfo(t: apiv1.ResetPointInfo | $.VarRef<apiv1.ResetPointInfo> | null): shared.ResetPointInfo | $.VarRef<shared.ResetPointInfo> | null {
	const t$: apiv1.ResetPointInfo = t == null ? $.pointerTarget<apiv1.ResetPointInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ResetPointInfo>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField21 = __goscript_helpers.timeToUnixNano((t$ as apiv1.ResetPointInfo).CreatedTime); const __goscriptLiteralField22 = __goscript_helpers.timeToUnixNano((t$ as apiv1.ResetPointInfo).ExpiringTime); return new shared.ResetPointInfo({BinaryChecksum: $.fieldRef((t$ as apiv1.ResetPointInfo)._fields, "BinaryChecksum"), RunId: $.fieldRef((t$ as apiv1.ResetPointInfo)._fields, "RunId"), FirstDecisionCompletedId: $.fieldRef((t$ as apiv1.ResetPointInfo)._fields, "FirstDecisionCompletedId"), CreatedTimeNano: __goscriptLiteralField21, ExpiringTimeNano: __goscriptLiteralField22, Resettable: $.fieldRef((t$ as apiv1.ResetPointInfo)._fields, "Resettable")}) })()
}

export function PollerInfo(t: apiv1.PollerInfo | $.VarRef<apiv1.PollerInfo> | null): shared.PollerInfo | $.VarRef<shared.PollerInfo> | null {
	const t$: apiv1.PollerInfo = t == null ? $.pointerTarget<apiv1.PollerInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.PollerInfo>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField23 = __goscript_helpers.timeToUnixNano((t$ as apiv1.PollerInfo).LastAccessTime); return new shared.PollerInfo({LastAccessTime: __goscriptLiteralField23, Identity: $.fieldRef((t$ as apiv1.PollerInfo)._fields, "Identity"), RatePerSecond: $.fieldRef((t$ as apiv1.PollerInfo)._fields, "RatePerSecond")}) })()
}

export function TaskListStatus(t: apiv1.TaskListStatus | $.VarRef<apiv1.TaskListStatus> | null): shared.TaskListStatus | $.VarRef<shared.TaskListStatus> | null {
	const t$: apiv1.TaskListStatus = t == null ? $.pointerTarget<apiv1.TaskListStatus>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.TaskListStatus>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField24 = TaskIDBlock((t$ as apiv1.TaskListStatus).TaskIdBlock); return new shared.TaskListStatus({BacklogCountHint: $.fieldRef((t$ as apiv1.TaskListStatus)._fields, "BacklogCountHint"), ReadLevel: $.fieldRef((t$ as apiv1.TaskListStatus)._fields, "ReadLevel"), AckLevel: $.fieldRef((t$ as apiv1.TaskListStatus)._fields, "AckLevel"), RatePerSecond: $.fieldRef((t$ as apiv1.TaskListStatus)._fields, "RatePerSecond"), TaskIDBlock: __goscriptLiteralField24}) })()
}

export function TaskIDBlock(t: apiv1.TaskIDBlock | $.VarRef<apiv1.TaskIDBlock> | null): shared.TaskIDBlock | $.VarRef<shared.TaskIDBlock> | null {
	const t$: apiv1.TaskIDBlock = t == null ? $.pointerTarget<apiv1.TaskIDBlock>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.TaskIDBlock>(t)
	if (t == null) {
		return null
	}
	return new shared.TaskIDBlock({StartID: $.fieldRef((t$ as apiv1.TaskIDBlock)._fields, "StartId"), EndID: $.fieldRef((t$ as apiv1.TaskIDBlock)._fields, "EndId")})
}

export function WorkflowExecutionConfiguration(t: apiv1.WorkflowExecutionConfiguration | $.VarRef<apiv1.WorkflowExecutionConfiguration> | null): shared.WorkflowExecutionConfiguration | $.VarRef<shared.WorkflowExecutionConfiguration> | null {
	const t$: apiv1.WorkflowExecutionConfiguration = t == null ? $.pointerTarget<apiv1.WorkflowExecutionConfiguration>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.WorkflowExecutionConfiguration>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField25 = TaskList((t$ as apiv1.WorkflowExecutionConfiguration).TaskList); const __goscriptLiteralField26 = __goscript_helpers.durationToSeconds((t$ as apiv1.WorkflowExecutionConfiguration).ExecutionStartToCloseTimeout); const __goscriptLiteralField27 = __goscript_helpers.durationToSeconds((t$ as apiv1.WorkflowExecutionConfiguration).TaskStartToCloseTimeout); return new shared.WorkflowExecutionConfiguration({TaskList: __goscriptLiteralField25, ExecutionStartToCloseTimeoutSeconds: __goscriptLiteralField26, TaskStartToCloseTimeoutSeconds: __goscriptLiteralField27}) })()
}

export function WorkflowExecutionInfo(t: apiv1.WorkflowExecutionInfo | $.VarRef<apiv1.WorkflowExecutionInfo> | null): shared.WorkflowExecutionInfo | $.VarRef<shared.WorkflowExecutionInfo> | null {
	const t$: apiv1.WorkflowExecutionInfo = t == null ? $.pointerTarget<apiv1.WorkflowExecutionInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.WorkflowExecutionInfo>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField28 = WorkflowExecution((t$ as apiv1.WorkflowExecutionInfo).WorkflowExecution); const __goscriptLiteralField29 = WorkflowType((t$ as apiv1.WorkflowExecutionInfo).Type); const __goscriptLiteralField30 = __goscript_helpers.timeToUnixNano((t$ as apiv1.WorkflowExecutionInfo).StartTime); const __goscriptLiteralField31 = __goscript_helpers.timeToUnixNano((t$ as apiv1.WorkflowExecutionInfo).CloseTime); const __goscriptLiteralField32 = __goscript__enum.WorkflowExecutionCloseStatus((t$ as apiv1.WorkflowExecutionInfo).CloseStatus); const __goscriptLiteralField33 = ParentDomainID((t$ as apiv1.WorkflowExecutionInfo).ParentExecutionInfo); const __goscriptLiteralField34 = ParentWorkflowExecution((t$ as apiv1.WorkflowExecutionInfo).ParentExecutionInfo); const __goscriptLiteralField35 = __goscript_helpers.timeToUnixNano((t$ as apiv1.WorkflowExecutionInfo).ExecutionTime); const __goscriptLiteralField36 = Memo((t$ as apiv1.WorkflowExecutionInfo).Memo); const __goscriptLiteralField37 = SearchAttributes((t$ as apiv1.WorkflowExecutionInfo).SearchAttributes); const __goscriptLiteralField38 = ResetPoints((t$ as apiv1.WorkflowExecutionInfo).AutoResetPoints); const __goscriptLiteralField39 = __goscript__enum.CronOverlapPolicy((t$ as apiv1.WorkflowExecutionInfo).CronOverlapPolicy); const __goscriptLiteralField40 = ActiveClusterSelectionPolicy((t$ as apiv1.WorkflowExecutionInfo).ActiveClusterSelectionPolicy); return new shared.WorkflowExecutionInfo({Execution: __goscriptLiteralField28, Type: __goscriptLiteralField29, StartTime: __goscriptLiteralField30, CloseTime: __goscriptLiteralField31, CloseStatus: __goscriptLiteralField32, HistoryLength: $.fieldRef((t$ as apiv1.WorkflowExecutionInfo)._fields, "HistoryLength"), ParentDomainId: __goscriptLiteralField33, ParentExecution: __goscriptLiteralField34, ExecutionTime: __goscriptLiteralField35, Memo: __goscriptLiteralField36, SearchAttributes: __goscriptLiteralField37, AutoResetPoints: __goscriptLiteralField38, TaskList: $.fieldRef((t$ as apiv1.WorkflowExecutionInfo)._fields, "TaskList"), IsCron: $.fieldRef((t$ as apiv1.WorkflowExecutionInfo)._fields, "IsCron"), CronOverlapPolicy: __goscriptLiteralField39, ActiveClusterSelectionPolicy: __goscriptLiteralField40}) })()
}

export function ParentDomainID(pei: apiv1.ParentExecutionInfo | $.VarRef<apiv1.ParentExecutionInfo> | null): $.VarRef<string> | null {
	if (pei == null) {
		return null
	}
	return $.fieldRef($.pointerValue<apiv1.ParentExecutionInfo>(pei)._fields, "DomainId")
}

export function ParentDomainName(pei: apiv1.ParentExecutionInfo | $.VarRef<apiv1.ParentExecutionInfo> | null): $.VarRef<string> | null {
	if (pei == null) {
		return null
	}
	return $.fieldRef($.pointerValue<apiv1.ParentExecutionInfo>(pei)._fields, "DomainName")
}

export function ParentInitiatedID(pei: apiv1.ParentExecutionInfo | $.VarRef<apiv1.ParentExecutionInfo> | null): $.VarRef<bigint> | null {
	if (pei == null) {
		return null
	}
	return $.fieldRef($.pointerValue<apiv1.ParentExecutionInfo>(pei)._fields, "InitiatedId")
}

export function ParentWorkflowExecution(pei: apiv1.ParentExecutionInfo | $.VarRef<apiv1.ParentExecutionInfo> | null): shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null {
	if (pei == null) {
		return null
	}
	return WorkflowExecution($.pointerValue<apiv1.ParentExecutionInfo>(pei).WorkflowExecution)
}

export function PendingActivityInfo(t: apiv1.PendingActivityInfo | $.VarRef<apiv1.PendingActivityInfo> | null): shared.PendingActivityInfo | $.VarRef<shared.PendingActivityInfo> | null {
	const t$: apiv1.PendingActivityInfo = t == null ? $.pointerTarget<apiv1.PendingActivityInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.PendingActivityInfo>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField41 = ActivityType((t$ as apiv1.PendingActivityInfo).ActivityType); const __goscriptLiteralField42 = __goscript__enum.PendingActivityState((t$ as apiv1.PendingActivityInfo).State); const __goscriptLiteralField43 = Payload((t$ as apiv1.PendingActivityInfo).HeartbeatDetails); const __goscriptLiteralField44 = __goscript_helpers.timeToUnixNano((t$ as apiv1.PendingActivityInfo).LastHeartbeatTime); const __goscriptLiteralField45 = __goscript_helpers.timeToUnixNano((t$ as apiv1.PendingActivityInfo).LastStartedTime); const __goscriptLiteralField46 = __goscript_helpers.timeToUnixNano((t$ as apiv1.PendingActivityInfo).ScheduledTime); const __goscriptLiteralField47 = __goscript_helpers.timeToUnixNano((t$ as apiv1.PendingActivityInfo).ExpirationTime); const __goscriptLiteralField48 = FailureReason((t$ as apiv1.PendingActivityInfo).LastFailure); const __goscriptLiteralField49 = FailureDetails((t$ as apiv1.PendingActivityInfo).LastFailure); const __goscriptLiteralField50 = FailureOptions((t$ as apiv1.PendingActivityInfo).LastFailure); return new shared.PendingActivityInfo({ActivityID: $.fieldRef((t$ as apiv1.PendingActivityInfo)._fields, "ActivityId"), ActivityType: __goscriptLiteralField41, State: __goscriptLiteralField42, HeartbeatDetails: __goscriptLiteralField43, LastHeartbeatTimestamp: __goscriptLiteralField44, LastStartedTimestamp: __goscriptLiteralField45, Attempt: $.fieldRef((t$ as apiv1.PendingActivityInfo)._fields, "Attempt"), MaximumAttempts: $.fieldRef((t$ as apiv1.PendingActivityInfo)._fields, "MaximumAttempts"), ScheduledTimestamp: __goscriptLiteralField46, ExpirationTimestamp: __goscriptLiteralField47, LastFailureReason: __goscriptLiteralField48, LastFailureDetails: __goscriptLiteralField49, LastFailureOptions: __goscriptLiteralField50, LastWorkerIdentity: $.fieldRef((t$ as apiv1.PendingActivityInfo)._fields, "LastWorkerIdentity")}) })()
}

export function PendingChildExecutionInfo(t: apiv1.PendingChildExecutionInfo | $.VarRef<apiv1.PendingChildExecutionInfo> | null): shared.PendingChildExecutionInfo | $.VarRef<shared.PendingChildExecutionInfo> | null {
	const t$: apiv1.PendingChildExecutionInfo = t == null ? $.pointerTarget<apiv1.PendingChildExecutionInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.PendingChildExecutionInfo>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField51 = WorkflowID((t$ as apiv1.PendingChildExecutionInfo).WorkflowExecution); const __goscriptLiteralField52 = RunID((t$ as apiv1.PendingChildExecutionInfo).WorkflowExecution); const __goscriptLiteralField53 = __goscript__enum.ParentClosePolicy((t$ as apiv1.PendingChildExecutionInfo).ParentClosePolicy); return new shared.PendingChildExecutionInfo({WorkflowID: __goscriptLiteralField51, RunID: __goscriptLiteralField52, WorkflowTypName: $.fieldRef((t$ as apiv1.PendingChildExecutionInfo)._fields, "WorkflowTypeName"), InitiatedID: $.fieldRef((t$ as apiv1.PendingChildExecutionInfo)._fields, "InitiatedId"), ParentClosePolicy: __goscriptLiteralField53}) })()
}

export function PendingDecisionInfo(t: apiv1.PendingDecisionInfo | $.VarRef<apiv1.PendingDecisionInfo> | null): shared.PendingDecisionInfo | $.VarRef<shared.PendingDecisionInfo> | null {
	const t$: apiv1.PendingDecisionInfo = t == null ? $.pointerTarget<apiv1.PendingDecisionInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.PendingDecisionInfo>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField54 = __goscript__enum.PendingDecisionState((t$ as apiv1.PendingDecisionInfo).State); const __goscriptLiteralField55 = __goscript_helpers.timeToUnixNano((t$ as apiv1.PendingDecisionInfo).ScheduledTime); const __goscriptLiteralField56 = __goscript_helpers.timeToUnixNano((t$ as apiv1.PendingDecisionInfo).StartedTime); const __goscriptLiteralField57 = common.Int64Ptr($.int64((t$ as apiv1.PendingDecisionInfo).Attempt)); const __goscriptLiteralField58 = __goscript_helpers.timeToUnixNano((t$ as apiv1.PendingDecisionInfo).OriginalScheduledTime); return new shared.PendingDecisionInfo({State: __goscriptLiteralField54, ScheduledTimestamp: __goscriptLiteralField55, StartedTimestamp: __goscriptLiteralField56, Attempt: __goscriptLiteralField57, OriginalScheduledTimestamp: __goscriptLiteralField58}) })()
}

export function ActivityLocalDispatchInfo(t: apiv1.ActivityLocalDispatchInfo | $.VarRef<apiv1.ActivityLocalDispatchInfo> | null): shared.ActivityLocalDispatchInfo | $.VarRef<shared.ActivityLocalDispatchInfo> | null {
	const t$: apiv1.ActivityLocalDispatchInfo = t == null ? $.pointerTarget<apiv1.ActivityLocalDispatchInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ActivityLocalDispatchInfo>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField59 = __goscript_helpers.timeToUnixNano((t$ as apiv1.ActivityLocalDispatchInfo).ScheduledTime); const __goscriptLiteralField60 = __goscript_helpers.timeToUnixNano((t$ as apiv1.ActivityLocalDispatchInfo).StartedTime); const __goscriptLiteralField61 = __goscript_helpers.timeToUnixNano((t$ as apiv1.ActivityLocalDispatchInfo).ScheduledTimeOfThisAttempt); return new shared.ActivityLocalDispatchInfo({ActivityId: $.fieldRef((t$ as apiv1.ActivityLocalDispatchInfo)._fields, "ActivityId"), ScheduledTimestamp: __goscriptLiteralField59, StartedTimestamp: __goscriptLiteralField60, ScheduledTimestampOfThisAttempt: __goscriptLiteralField61, TaskToken: (t$ as apiv1.ActivityLocalDispatchInfo).TaskToken}) })()
}

export function SupportedClientVersions(t: apiv1.SupportedClientVersions | $.VarRef<apiv1.SupportedClientVersions> | null): shared.SupportedClientVersions | $.VarRef<shared.SupportedClientVersions> | null {
	const t$: apiv1.SupportedClientVersions = t == null ? $.pointerTarget<apiv1.SupportedClientVersions>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.SupportedClientVersions>(t)
	if (t == null) {
		return null
	}
	return new shared.SupportedClientVersions({GoSdk: $.fieldRef((t$ as apiv1.SupportedClientVersions)._fields, "GoSdk"), JavaSdk: $.fieldRef((t$ as apiv1.SupportedClientVersions)._fields, "JavaSdk")})
}

export function DescribeDomainResponseDomain(t: apiv1.Domain | $.VarRef<apiv1.Domain> | null): shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null {
	const t$: apiv1.Domain = t == null ? $.pointerTarget<apiv1.Domain>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.Domain>(t)
	if (t == null) {
		return null
	}
	return new shared.DescribeDomainResponse({DomainInfo: (() => { const __goscriptLiteralField62 = __goscript__enum.DomainStatus((t$ as apiv1.Domain).Status); return new shared.DomainInfo({Name: $.fieldRef((t$ as apiv1.Domain)._fields, "Name"), Status: __goscriptLiteralField62, Description: $.fieldRef((t$ as apiv1.Domain)._fields, "Description"), OwnerEmail: $.fieldRef((t$ as apiv1.Domain)._fields, "OwnerEmail"), Data: (t$ as apiv1.Domain).Data, UUID: $.fieldRef((t$ as apiv1.Domain)._fields, "Id")}) })(), Configuration: (() => { const __goscriptLiteralField63 = __goscript_helpers.durationToDays((t$ as apiv1.Domain).WorkflowExecutionRetentionPeriod); const __goscriptLiteralField64 = __goscript_helpers.boolPtr(true); const __goscriptLiteralField65 = BadBinaries((t$ as apiv1.Domain).BadBinaries); const __goscriptLiteralField66 = __goscript__enum.ArchivalStatus((t$ as apiv1.Domain).HistoryArchivalStatus); const __goscriptLiteralField67 = __goscript__enum.ArchivalStatus((t$ as apiv1.Domain).VisibilityArchivalStatus); return new shared.DomainConfiguration({WorkflowExecutionRetentionPeriodInDays: __goscriptLiteralField63, EmitMetric: __goscriptLiteralField64, BadBinaries: __goscriptLiteralField65, HistoryArchivalStatus: __goscriptLiteralField66, HistoryArchivalURI: $.fieldRef((t$ as apiv1.Domain)._fields, "HistoryArchivalUri"), VisibilityArchivalStatus: __goscriptLiteralField67, VisibilityArchivalURI: $.fieldRef((t$ as apiv1.Domain)._fields, "VisibilityArchivalUri")}) })(), ReplicationConfiguration: (() => { const __goscriptLiteralField68 = ClusterReplicationConfigurationArray((t$ as apiv1.Domain).Clusters); const __goscriptLiteralField69 = ActiveClusters((t$ as apiv1.Domain).ActiveClusters); return new shared.DomainReplicationConfiguration({ActiveClusterName: $.fieldRef((t$ as apiv1.Domain)._fields, "ActiveClusterName"), Clusters: __goscriptLiteralField68, ActiveClusters: __goscriptLiteralField69}) })(), FailoverVersion: $.fieldRef((t$ as apiv1.Domain)._fields, "FailoverVersion"), IsGlobalDomain: $.fieldRef((t$ as apiv1.Domain)._fields, "IsGlobalDomain")})
}

export function TaskListPartitionMetadata(t: apiv1.TaskListPartitionMetadata | $.VarRef<apiv1.TaskListPartitionMetadata> | null): shared.TaskListPartitionMetadata | $.VarRef<shared.TaskListPartitionMetadata> | null {
	const t$: apiv1.TaskListPartitionMetadata = t == null ? $.pointerTarget<apiv1.TaskListPartitionMetadata>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.TaskListPartitionMetadata>(t)
	if (t == null) {
		return null
	}
	return new shared.TaskListPartitionMetadata({Key: $.fieldRef((t$ as apiv1.TaskListPartitionMetadata)._fields, "Key"), OwnerHostName: $.fieldRef((t$ as apiv1.TaskListPartitionMetadata)._fields, "OwnerHostName")})
}

export function QueryRejected(t: apiv1.QueryRejected | $.VarRef<apiv1.QueryRejected> | null): shared.QueryRejected | $.VarRef<shared.QueryRejected> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField70 = __goscript__enum.WorkflowExecutionCloseStatus($.pointerValue<apiv1.QueryRejected>(t).CloseStatus); return new shared.QueryRejected({CloseStatus: __goscriptLiteralField70}) })()
}

export function PollerInfoArray(t: $.Slice<apiv1.PollerInfo | $.VarRef<apiv1.PollerInfo> | null>): $.Slice<shared.PollerInfo | $.VarRef<shared.PollerInfo> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<shared.PollerInfo | $.VarRef<shared.PollerInfo> | null> = $.makeSlice<shared.PollerInfo | $.VarRef<shared.PollerInfo> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget1 = t, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow1 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow1.length; i++) {
		;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = PollerInfo(((__goscriptRangeWindow1.backing as any[])[__goscriptRangeWindow1.offset + i] as apiv1.PollerInfo | $.VarRef<apiv1.PollerInfo> | null))
	}
	return v
}

export function ResetPointInfoArray(t: $.Slice<apiv1.ResetPointInfo | $.VarRef<apiv1.ResetPointInfo> | null>): $.Slice<shared.ResetPointInfo | $.VarRef<shared.ResetPointInfo> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<shared.ResetPointInfo | $.VarRef<shared.ResetPointInfo> | null> = $.makeSlice<shared.ResetPointInfo | $.VarRef<shared.ResetPointInfo> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget2 = t, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __goscriptSliceWindow2 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow2.length; i++) {
		;(__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] = ResetPointInfo(((__goscriptRangeWindow2.backing as any[])[__goscriptRangeWindow2.offset + i] as apiv1.ResetPointInfo | $.VarRef<apiv1.ResetPointInfo> | null))
	}
	return v
}

export function PendingActivityInfoArray(t: $.Slice<apiv1.PendingActivityInfo | $.VarRef<apiv1.PendingActivityInfo> | null>): $.Slice<shared.PendingActivityInfo | $.VarRef<shared.PendingActivityInfo> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<shared.PendingActivityInfo | $.VarRef<shared.PendingActivityInfo> | null> = $.makeSlice<shared.PendingActivityInfo | $.VarRef<shared.PendingActivityInfo> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget3 = t, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __goscriptSliceWindow3 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow3.length; i++) {
		;(__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] = PendingActivityInfo(((__goscriptRangeWindow3.backing as any[])[__goscriptRangeWindow3.offset + i] as apiv1.PendingActivityInfo | $.VarRef<apiv1.PendingActivityInfo> | null))
	}
	return v
}

export function PendingChildExecutionInfoArray(t: $.Slice<apiv1.PendingChildExecutionInfo | $.VarRef<apiv1.PendingChildExecutionInfo> | null>): $.Slice<shared.PendingChildExecutionInfo | $.VarRef<shared.PendingChildExecutionInfo> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<shared.PendingChildExecutionInfo | $.VarRef<shared.PendingChildExecutionInfo> | null> = $.makeSlice<shared.PendingChildExecutionInfo | $.VarRef<shared.PendingChildExecutionInfo> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget4 = t, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __goscriptSliceWindow4 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow4.length; i++) {
		;(__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] = PendingChildExecutionInfo(((__goscriptRangeWindow4.backing as any[])[__goscriptRangeWindow4.offset + i] as apiv1.PendingChildExecutionInfo | $.VarRef<apiv1.PendingChildExecutionInfo> | null))
	}
	return v
}

export function IndexedValueTypeMap(t: globalThis.Map<string, apiv1.IndexedValueType> | null): globalThis.Map<string, shared.IndexedValueType> | null {
	if (t == null) {
		return null
	}
	let v: globalThis.Map<string, shared.IndexedValueType> | null = $.makeMap<string, shared.IndexedValueType>()
	for (let [key, __rangeValue] of t?.entries() ?? []) {
		$.mapSet(v, key, __goscript__enum.IndexedValueType($.mapGet<string, apiv1.IndexedValueType, apiv1.IndexedValueType>(t, key, 0)[0]))
	}
	return v
}

export function DataBlobArray(t: $.Slice<apiv1.DataBlob | $.VarRef<apiv1.DataBlob> | null>): $.Slice<shared.DataBlob | $.VarRef<shared.DataBlob> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<shared.DataBlob | $.VarRef<shared.DataBlob> | null> = $.makeSlice<shared.DataBlob | $.VarRef<shared.DataBlob> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget5 = t, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __goscriptSliceWindow5 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow5.length; i++) {
		;(__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] = DataBlob(((__goscriptRangeWindow5.backing as any[])[__goscriptRangeWindow5.offset + i] as apiv1.DataBlob | $.VarRef<apiv1.DataBlob> | null))
	}
	return v
}

export function WorkflowExecutionInfoArray(t: $.Slice<apiv1.WorkflowExecutionInfo | $.VarRef<apiv1.WorkflowExecutionInfo> | null>): $.Slice<shared.WorkflowExecutionInfo | $.VarRef<shared.WorkflowExecutionInfo> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<shared.WorkflowExecutionInfo | $.VarRef<shared.WorkflowExecutionInfo> | null> = $.makeSlice<shared.WorkflowExecutionInfo | $.VarRef<shared.WorkflowExecutionInfo> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget6 = t, __goscriptRangeWindow6 = $.sliceRange(__goscriptRangeTarget6), __goscriptSliceWindow6 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow6.length; i++) {
		;(__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, i)] = WorkflowExecutionInfo(((__goscriptRangeWindow6.backing as any[])[__goscriptRangeWindow6.offset + i] as apiv1.WorkflowExecutionInfo | $.VarRef<apiv1.WorkflowExecutionInfo> | null))
	}
	return v
}

export function DescribeDomainResponseArray(t: $.Slice<apiv1.Domain | $.VarRef<apiv1.Domain> | null>): $.Slice<shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null> = $.makeSlice<shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget7 = t, __goscriptRangeWindow7 = $.sliceRange(__goscriptRangeTarget7), __goscriptSliceWindow7 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow7.length; i++) {
		;(__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] = DescribeDomainResponseDomain(((__goscriptRangeWindow7.backing as any[])[__goscriptRangeWindow7.offset + i] as apiv1.Domain | $.VarRef<apiv1.Domain> | null))
	}
	return v
}

export function TaskListPartitionMetadataArray(t: $.Slice<apiv1.TaskListPartitionMetadata | $.VarRef<apiv1.TaskListPartitionMetadata> | null>): $.Slice<shared.TaskListPartitionMetadata | $.VarRef<shared.TaskListPartitionMetadata> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<shared.TaskListPartitionMetadata | $.VarRef<shared.TaskListPartitionMetadata> | null> = $.makeSlice<shared.TaskListPartitionMetadata | $.VarRef<shared.TaskListPartitionMetadata> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget8 = t, __goscriptRangeWindow8 = $.sliceRange(__goscriptRangeTarget8), __goscriptSliceWindow8 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow8.length; i++) {
		;(__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, i)] = TaskListPartitionMetadata(((__goscriptRangeWindow8.backing as any[])[__goscriptRangeWindow8.offset + i] as apiv1.TaskListPartitionMetadata | $.VarRef<apiv1.TaskListPartitionMetadata> | null))
	}
	return v
}

export function WorkflowQueryMap(t: globalThis.Map<string, apiv1.WorkflowQuery | $.VarRef<apiv1.WorkflowQuery> | null> | null): globalThis.Map<string, shared.WorkflowQuery | $.VarRef<shared.WorkflowQuery> | null> | null {
	if (t == null) {
		return null
	}
	let v: globalThis.Map<string, shared.WorkflowQuery | $.VarRef<shared.WorkflowQuery> | null> | null = $.makeMap<string, shared.WorkflowQuery | $.VarRef<shared.WorkflowQuery> | null>()
	for (let [key, __rangeValue] of t?.entries() ?? []) {
		$.mapSet(v, key, WorkflowQuery($.mapGet<string, apiv1.WorkflowQuery | $.VarRef<apiv1.WorkflowQuery> | null, apiv1.WorkflowQuery | $.VarRef<apiv1.WorkflowQuery> | null>(t, key, null)[0]))
	}
	return v
}

export function ActivityLocalDispatchInfoMap(t: globalThis.Map<string, apiv1.ActivityLocalDispatchInfo | $.VarRef<apiv1.ActivityLocalDispatchInfo> | null> | null): globalThis.Map<string, shared.ActivityLocalDispatchInfo | $.VarRef<shared.ActivityLocalDispatchInfo> | null> | null {
	if (t == null) {
		return null
	}
	let v: globalThis.Map<string, shared.ActivityLocalDispatchInfo | $.VarRef<shared.ActivityLocalDispatchInfo> | null> | null = $.makeMap<string, shared.ActivityLocalDispatchInfo | $.VarRef<shared.ActivityLocalDispatchInfo> | null>()
	for (let [key, __rangeValue] of t?.entries() ?? []) {
		$.mapSet(v, key, ActivityLocalDispatchInfo($.mapGet<string, apiv1.ActivityLocalDispatchInfo | $.VarRef<apiv1.ActivityLocalDispatchInfo> | null, apiv1.ActivityLocalDispatchInfo | $.VarRef<apiv1.ActivityLocalDispatchInfo> | null>(t, key, null)[0]))
	}
	return v
}

export function ActiveClusterSelectionPolicy(t: apiv1.ActiveClusterSelectionPolicy | $.VarRef<apiv1.ActiveClusterSelectionPolicy> | null): shared.ActiveClusterSelectionPolicy | $.VarRef<shared.ActiveClusterSelectionPolicy> | null {
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField71 = ClusterAttribute($.pointerValue<apiv1.ActiveClusterSelectionPolicy>(t).ClusterAttribute); return new shared.ActiveClusterSelectionPolicy({ClusterAttribute: __goscriptLiteralField71}) })()
}

export function ClusterAttribute(t: apiv1.ClusterAttribute | $.VarRef<apiv1.ClusterAttribute> | null): shared.ClusterAttribute | $.VarRef<shared.ClusterAttribute> | null {
	const t$: apiv1.ClusterAttribute = t == null ? $.pointerTarget<apiv1.ClusterAttribute>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ClusterAttribute>(t)
	if (t == null) {
		return null
	}
	return new shared.ClusterAttribute({Scope: $.fieldRef((t$ as apiv1.ClusterAttribute)._fields, "Scope"), Name: $.fieldRef((t$ as apiv1.ClusterAttribute)._fields, "Name")})
}

export function ActiveClusters(t: apiv1.ActiveClusters | $.VarRef<apiv1.ActiveClusters> | null): shared.ActiveClusters | $.VarRef<shared.ActiveClusters> | null {
	const t$: apiv1.ActiveClusters = t == null ? $.pointerTarget<apiv1.ActiveClusters>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ActiveClusters>(t)
	if (t == null) {
		return null
	}
	let activeClustersByClusterAttribute: globalThis.Map<string, shared.ClusterAttributeScope | $.VarRef<shared.ClusterAttributeScope> | null> | null = null! as globalThis.Map<string, shared.ClusterAttributeScope | $.VarRef<shared.ClusterAttributeScope> | null> | null
	if ((t$ as apiv1.ActiveClusters).ActiveClustersByClusterAttribute != null) {
		activeClustersByClusterAttribute = $.makeMap<string, shared.ClusterAttributeScope | $.VarRef<shared.ClusterAttributeScope> | null>()
		for (let [scopeType, scope] of (t$ as apiv1.ActiveClusters).ActiveClustersByClusterAttribute?.entries() ?? []) {
			$.mapSet(activeClustersByClusterAttribute, scopeType, ClusterAttributeScope(scope))
		}
	}

	return new shared.ActiveClusters({ActiveClustersByClusterAttribute: activeClustersByClusterAttribute})
}

export function ClusterAttributeScope(t: apiv1.ClusterAttributeScope | $.VarRef<apiv1.ClusterAttributeScope> | null): shared.ClusterAttributeScope | $.VarRef<shared.ClusterAttributeScope> | null {
	const t$: apiv1.ClusterAttributeScope = t == null ? $.pointerTarget<apiv1.ClusterAttributeScope>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ClusterAttributeScope>(t)
	if (t == null) {
		return null
	}
	let clusterAttributes: globalThis.Map<string, shared.ActiveClusterInfo | $.VarRef<shared.ActiveClusterInfo> | null> | null = null! as globalThis.Map<string, shared.ActiveClusterInfo | $.VarRef<shared.ActiveClusterInfo> | null> | null
	if ($.len((t$ as apiv1.ClusterAttributeScope).ClusterAttributes) > 0) {
		clusterAttributes = $.makeMap<string, shared.ActiveClusterInfo | $.VarRef<shared.ActiveClusterInfo> | null>()
		for (let [name, clusterInfo] of (t$ as apiv1.ClusterAttributeScope).ClusterAttributes?.entries() ?? []) {
			$.mapSet(clusterAttributes, name, ActiveClusterInfo(clusterInfo))
		}
	}

	return new shared.ClusterAttributeScope({ClusterAttributes: clusterAttributes})
}

export function ActiveClusterInfo(t: apiv1.ActiveClusterInfo | $.VarRef<apiv1.ActiveClusterInfo> | null): shared.ActiveClusterInfo | $.VarRef<shared.ActiveClusterInfo> | null {
	const t$: apiv1.ActiveClusterInfo = t == null ? $.pointerTarget<apiv1.ActiveClusterInfo>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ActiveClusterInfo>(t)
	if (t == null) {
		return null
	}
	return new shared.ActiveClusterInfo({ActiveClusterName: $.fieldRef((t$ as apiv1.ActiveClusterInfo)._fields, "ActiveClusterName"), FailoverVersion: $.fieldRef((t$ as apiv1.ActiveClusterInfo)._fields, "FailoverVersion")})
}

export function ClusterFailoverArray(t: $.Slice<apiv1.ClusterFailover | $.VarRef<apiv1.ClusterFailover> | null>): $.Slice<shared.ClusterFailover | $.VarRef<shared.ClusterFailover> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<shared.ClusterFailover | $.VarRef<shared.ClusterFailover> | null> = $.makeSlice<shared.ClusterFailover | $.VarRef<shared.ClusterFailover> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget9 = t, __goscriptRangeWindow9 = $.sliceRange(__goscriptRangeTarget9), __goscriptSliceWindow9 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow9.length; i++) {
		;(__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, i)] = ClusterFailover(((__goscriptRangeWindow9.backing as any[])[__goscriptRangeWindow9.offset + i] as apiv1.ClusterFailover | $.VarRef<apiv1.ClusterFailover> | null))
	}
	return v
}

export function ClusterFailover(t: apiv1.ClusterFailover | $.VarRef<apiv1.ClusterFailover> | null): shared.ClusterFailover | $.VarRef<shared.ClusterFailover> | null {
	const t$: apiv1.ClusterFailover = t == null ? $.pointerTarget<apiv1.ClusterFailover>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.ClusterFailover>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField72 = ActiveClusterInfo((t$ as apiv1.ClusterFailover).FromCluster); const __goscriptLiteralField73 = ActiveClusterInfo((t$ as apiv1.ClusterFailover).ToCluster); const __goscriptLiteralField74 = ClusterAttribute((t$ as apiv1.ClusterFailover).ClusterAttribute); return new shared.ClusterFailover({FromCluster: __goscriptLiteralField72, ToCluster: __goscriptLiteralField73, ClusterAttribute: __goscriptLiteralField74}) })()
}

export function FailoverEventArray(t: $.Slice<apiv1.FailoverEvent | $.VarRef<apiv1.FailoverEvent> | null>): $.Slice<shared.FailoverEvent | $.VarRef<shared.FailoverEvent> | null> {
	if (t == null) {
		return null
	}
	let v: $.Slice<shared.FailoverEvent | $.VarRef<shared.FailoverEvent> | null> = $.makeSlice<shared.FailoverEvent | $.VarRef<shared.FailoverEvent> | null>($.sliceLen(t))
	for (let __goscriptRangeTarget10 = t, __goscriptRangeWindow10 = $.sliceRange(__goscriptRangeTarget10), __goscriptSliceWindow10 = $.sliceRange(v), i = 0; i < __goscriptRangeWindow10.length; i++) {
		;(__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, i)] = FailoverEvent(((__goscriptRangeWindow10.backing as any[])[__goscriptRangeWindow10.offset + i] as apiv1.FailoverEvent | $.VarRef<apiv1.FailoverEvent> | null))
	}
	return v
}

export function FailoverEvent(t: apiv1.FailoverEvent | $.VarRef<apiv1.FailoverEvent> | null): shared.FailoverEvent | $.VarRef<shared.FailoverEvent> | null {
	const t$: apiv1.FailoverEvent = t == null ? $.pointerTarget<apiv1.FailoverEvent>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.FailoverEvent>(t)
	if (t == null) {
		return null
	}
	return (() => { const __goscriptLiteralField75 = __goscript_helpers.timeToUnixNano((t$ as apiv1.FailoverEvent).CreatedTime); const __goscriptLiteralField76 = __goscript__enum.FailoverType((t$ as apiv1.FailoverEvent).FailoverType); const __goscriptLiteralField77 = ClusterFailoverArray((t$ as apiv1.FailoverEvent).ClusterFailovers); return new shared.FailoverEvent({ID: $.fieldRef((t$ as apiv1.FailoverEvent)._fields, "Id"), CreatedTime: __goscriptLiteralField75, FailoverType: __goscriptLiteralField76, ClusterFailovers: __goscriptLiteralField77}) })()
}

export function PaginationOptions(t: apiv1.PaginationOptions | $.VarRef<apiv1.PaginationOptions> | null): shared.PaginationOptions | $.VarRef<shared.PaginationOptions> | null {
	const t$: apiv1.PaginationOptions = t == null ? $.pointerTarget<apiv1.PaginationOptions>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<apiv1.PaginationOptions>(t)
	if (t == null) {
		return null
	}
	return new shared.PaginationOptions({PageSize: $.fieldRef((t$ as apiv1.PaginationOptions)._fields, "PageSize"), NextPageToken: (t$ as apiv1.PaginationOptions).NextPageToken})
}

export function ListFailoverHistoryRequestFilters(t: apiv1.ListFailoverHistoryRequestFilters | $.VarRef<apiv1.ListFailoverHistoryRequestFilters> | null): shared.ListFailoverHistoryRequestFilters | $.VarRef<shared.ListFailoverHistoryRequestFilters> | null {
	if (t == null) {
		return null
	}
	return new shared.ListFailoverHistoryRequestFilters({DomainID: $.fieldRef($.pointerValue<apiv1.ListFailoverHistoryRequestFilters>(t)._fields, "DomainId")})
}
