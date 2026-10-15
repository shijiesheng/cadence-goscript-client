// Generated file based on internal_schedule_convert_thrift.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as backoff from "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_internal_schedule_client from "./internal_schedule_client.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import * as __goscript_internal_workflow_client from "./internal_workflow_client.gs.ts"

import * as __goscript_schedule from "./schedule.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"
import "./client.gs.ts"
import "./encoded.gs.ts"
import "./internal_schedule_client.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_workflow_client.gs.ts"
import "./schedule.gs.ts"

export function scheduleOverlapPolicyToThrift(p: __goscript_schedule.ScheduleOverlapPolicy): $.VarRef<shared.ScheduleOverlapPolicy> | null {
	switch (p) {
		case 0:
		{
			return null
			break
		}
		case 1:
		{
			let v = $.varRef(1)
			return v
			break
		}
		case 2:
		{
			let v = $.varRef(2)
			return v
			break
		}
		case 3:
		{
			let v = $.varRef(3)
			return v
			break
		}
		case 4:
		{
			let v = $.varRef(4)
			return v
			break
		}
		case 5:
		{
			let v = $.varRef(5)
			return v
			break
		}
		default:
		{
			let v = $.varRef(0)
			return v
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function scheduleOverlapPolicyFromThrift(p: $.VarRef<shared.ScheduleOverlapPolicy> | null): __goscript_schedule.ScheduleOverlapPolicy {
	if (p == null) {
		return 0
	}
	switch ($.pointerValue<shared.ScheduleOverlapPolicy>(p)) {
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

export function scheduleCatchUpPolicyToThrift(p: __goscript_schedule.ScheduleCatchUpPolicy): $.VarRef<shared.ScheduleCatchUpPolicy> | null {
	switch (p) {
		case 0:
		{
			return null
			break
		}
		case 1:
		{
			let v = $.varRef(1)
			return v
			break
		}
		case 2:
		{
			let v = $.varRef(2)
			return v
			break
		}
		case 3:
		{
			let v = $.varRef(3)
			return v
			break
		}
		default:
		{
			let v = $.varRef(0)
			return v
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function scheduleCatchUpPolicyFromThrift(p: $.VarRef<shared.ScheduleCatchUpPolicy> | null): __goscript_schedule.ScheduleCatchUpPolicy {
	if (p == null) {
		return 0
	}
	switch ($.pointerValue<shared.ScheduleCatchUpPolicy>(p)) {
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

export function timeToThriftNano(t: time.Time): $.VarRef<bigint> | null {
	if ($.markAsStructValue($.cloneStructValue(t)).IsZero()) {
		return null
	}
	return common.Int64Ptr($.markAsStructValue($.cloneStructValue(t)).UnixNano())
}

export function thriftNanoToTime(n: $.VarRef<bigint> | null): time.Time {
	if (n == null) {
		return $.markAsStructValue(new time.Time())
	}
	return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(time.Unix(0n, $.pointerValue<bigint>(n)))).UTC()))
}

export function durationToThriftSeconds(d: time.Duration): $.VarRef<number> | null {
	if (d == 0n) {
		return null
	}
	return common.Int32Ptr(common.Int32Ceil(time.Duration_Seconds(d)))
}

export function thriftSecondsToDuration(n: $.VarRef<number> | null): time.Duration {
	if (n == null) {
		return 0n
	}
	return $.int64Mul($.int64($.pointerValue<number>(n)), 1000000000n)
}

export function scheduleSpecToThrift(spec: __goscript_schedule.ScheduleSpec | $.VarRef<__goscript_schedule.ScheduleSpec> | null): shared.ScheduleSpec | $.VarRef<shared.ScheduleSpec> | null {
	const spec$: __goscript_schedule.ScheduleSpec = spec == null ? $.pointerTarget<__goscript_schedule.ScheduleSpec>(spec) : (spec as any).__isVarRef === true ? (spec as any).value : (spec as any).__goValue === undefined ? (spec as any) : $.pointerTarget<__goscript_schedule.ScheduleSpec>(spec)
	if (spec == null) {
		return null
	}
	return (() => { const __goscriptLiteralField0 = common.StringPtr((spec$ as __goscript_schedule.ScheduleSpec).CronExpression); const __goscriptLiteralField1 = timeToThriftNano($.markAsStructValue($.cloneStructValue((spec$ as __goscript_schedule.ScheduleSpec).StartTime))); const __goscriptLiteralField2 = timeToThriftNano($.markAsStructValue($.cloneStructValue((spec$ as __goscript_schedule.ScheduleSpec).EndTime))); const __goscriptLiteralField3 = durationToThriftSeconds((spec$ as __goscript_schedule.ScheduleSpec).Jitter); return new shared.ScheduleSpec({CronExpression: __goscriptLiteralField0, StartTimeNano: __goscriptLiteralField1, EndTimeNano: __goscriptLiteralField2, JitterInSeconds: __goscriptLiteralField3}) })()
}

export function scheduleRetryPolicyToThrift(p: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null): shared.RetryPolicy | $.VarRef<shared.RetryPolicy> | null {
	const p$: __goscript_client.RetryPolicy = p == null ? $.pointerTarget<__goscript_client.RetryPolicy>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<__goscript_client.RetryPolicy>(p)
	if (p == null) {
		return null
	}
	let backoffCoeff = $.varRef((p$ as __goscript_client.RetryPolicy).BackoffCoefficient)
	if (backoffCoeff.value == 0) {
		backoffCoeff.value = backoff.DefaultBackoffCoefficient
	}
	return (() => { const __goscriptLiteralField4 = durationToThriftSeconds((p$ as __goscript_client.RetryPolicy).InitialInterval); const __goscriptLiteralField5 = durationToThriftSeconds((p$ as __goscript_client.RetryPolicy).MaximumInterval); const __goscriptLiteralField6 = durationToThriftSeconds((p$ as __goscript_client.RetryPolicy).ExpirationInterval); const __goscriptLiteralField7 = common.Int32Ptr((p$ as __goscript_client.RetryPolicy).MaximumAttempts); return new shared.RetryPolicy({InitialIntervalInSeconds: __goscriptLiteralField4, BackoffCoefficient: backoffCoeff, MaximumIntervalInSeconds: __goscriptLiteralField5, ExpirationIntervalInSeconds: __goscriptLiteralField6, MaximumAttempts: __goscriptLiteralField7, NonRetriableErrorReasons: (p$ as __goscript_client.RetryPolicy).NonRetriableErrorReasons}) })()
}

export async function encodeMemo(dc: __goscript_encoded.DataConverter | null, memo: globalThis.Map<string, any> | null): globalThis.Promise<[globalThis.Map<string, $.Slice<number>> | null, $.GoError]> {
	if ($.len(memo) == 0) {
		return [null, null]
	}
	let fields: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()
	for (let [k, v] of memo?.entries() ?? []) {
		let __goscriptTuple0: any = await __goscript_internal_worker.encodeArg(dc, v)
		let b: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, fmt.Errorf("encode memo field %q: %w", k, (err as any))]
		}
		$.mapSet(fields, k, b)
	}
	return [fields, null]
}

export async function encodeSearchAttributes(searchAttributes: globalThis.Map<string, any> | null): globalThis.Promise<[globalThis.Map<string, $.Slice<number>> | null, $.GoError]> {
	if ($.len(searchAttributes) == 0) {
		return [null, null]
	}
	let fields: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()
	for (let [k, v] of searchAttributes?.entries() ?? []) {
		let __goscriptTuple1: any = await json.Marshal(v)
		let b: $.Slice<number> = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [null, fmt.Errorf("encode search attribute %q: %w", k, (err as any))]
		}
		$.mapSet(fields, k, b)
	}
	return [fields, null]
}

export async function scheduleStartWorkflowActionToThrift(a: __goscript_schedule.ScheduleStartWorkflowAction | $.VarRef<__goscript_schedule.ScheduleStartWorkflowAction> | null, dc: __goscript_encoded.DataConverter | null): globalThis.Promise<[shared.ScheduleStartWorkflowAction | $.VarRef<shared.ScheduleStartWorkflowAction> | null, $.GoError]> {
	const a$: __goscript_schedule.ScheduleStartWorkflowAction = a == null ? $.pointerTarget<__goscript_schedule.ScheduleStartWorkflowAction>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<__goscript_schedule.ScheduleStartWorkflowAction>(a)
	if (a == null) {
		return [null, null]
	}
	if ($.stringEqual((a$ as __goscript_schedule.ScheduleStartWorkflowAction).WorkflowType, "")) {
		return [null, fmt.Errorf("StartWorkflow: %w", (__goscript_internal_schedule_client.ErrWorkflowTypeRequired as any))]
	}
	if ($.stringEqual((a$ as __goscript_schedule.ScheduleStartWorkflowAction).TaskList, "")) {
		return [null, fmt.Errorf("StartWorkflow: %w", (__goscript_internal_schedule_client.ErrTaskListRequired as any))]
	}
	if ((a$ as __goscript_schedule.ScheduleStartWorkflowAction).ExecutionStartToCloseTimeout <= 0n) {
		return [null, fmt.Errorf("StartWorkflow: %w", (__goscript_internal_schedule_client.ErrExecutionTimeoutRequired as any))]
	}
	let decisionTaskTimeout = (a$ as __goscript_schedule.ScheduleStartWorkflowAction).DecisionTaskStartToCloseTimeout
	if (decisionTaskTimeout < 0n) {
		return [null, fmt.Errorf("StartWorkflow: %w", (__goscript_internal_schedule_client.ErrNegativeDecisionTimeout as any))]
	}
	if (decisionTaskTimeout == 0n) {
		decisionTaskTimeout = 10000000000n
	}
	// Memo values are native Go values encoded with the configured DataConverter;
	// SearchAttributes are JSON-encoded. (On read they come back as raw bytes — see
	// scheduleStartWorkflowActionDescriptionFromThrift.)
	let memo: shared.Memo | $.VarRef<shared.Memo> | null = null! as shared.Memo | $.VarRef<shared.Memo> | null
	{
		let __goscriptTuple2: any = await encodeMemo(dc, (a$ as __goscript_schedule.ScheduleStartWorkflowAction).Memo)
		let fields: globalThis.Map<string, $.Slice<number>> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return [null, err]
		} else {
			if (fields != null) {
				memo = new shared.Memo({Fields: fields})
			}
		}
	}
	let searchAttr: shared.SearchAttributes | $.VarRef<shared.SearchAttributes> | null = null! as shared.SearchAttributes | $.VarRef<shared.SearchAttributes> | null
	{
		let __goscriptTuple3: any = await encodeSearchAttributes((a$ as __goscript_schedule.ScheduleStartWorkflowAction).SearchAttributes)
		let fields: globalThis.Map<string, $.Slice<number>> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			return [null, err]
		} else {
			if (fields != null) {
				searchAttr = new shared.SearchAttributes({IndexedFields: fields})
			}
		}
	}
	let input: $.Slice<number> = null! as $.Slice<number>
	if ($.sliceLen((a$ as __goscript_schedule.ScheduleStartWorkflowAction).Input) > 0) {
		input = (a$ as __goscript_schedule.ScheduleStartWorkflowAction).Input
	}
	return [(() => { const __goscriptLiteralField10 = common.StringPtr((a$ as __goscript_schedule.ScheduleStartWorkflowAction).WorkflowIDPrefix); const __goscriptLiteralField11 = durationToThriftSeconds((a$ as __goscript_schedule.ScheduleStartWorkflowAction).ExecutionStartToCloseTimeout); const __goscriptLiteralField12 = durationToThriftSeconds(decisionTaskTimeout); const __goscriptLiteralField13 = scheduleRetryPolicyToThrift((a$ as __goscript_schedule.ScheduleStartWorkflowAction).RetryPolicy); return new shared.ScheduleStartWorkflowAction({WorkflowType: (() => { const __goscriptLiteralField8 = common.StringPtr((a$ as __goscript_schedule.ScheduleStartWorkflowAction).WorkflowType); return new shared.WorkflowType({Name: __goscriptLiteralField8}) })(), TaskList: (() => { const __goscriptLiteralField9 = common.StringPtr((a$ as __goscript_schedule.ScheduleStartWorkflowAction).TaskList); return new shared.TaskList({Name: __goscriptLiteralField9}) })(), Input: input, WorkflowIdPrefix: __goscriptLiteralField10, ExecutionStartToCloseTimeoutSeconds: __goscriptLiteralField11, TaskStartToCloseTimeoutSeconds: __goscriptLiteralField12, RetryPolicy: __goscriptLiteralField13, Memo: memo, SearchAttributes: searchAttr}) })(), null]
}

export async function scheduleActionToThrift(a: __goscript_schedule.ScheduleAction | $.VarRef<__goscript_schedule.ScheduleAction> | null, dc: __goscript_encoded.DataConverter | null): globalThis.Promise<[shared.ScheduleAction | $.VarRef<shared.ScheduleAction> | null, $.GoError]> {
	const a$: __goscript_schedule.ScheduleAction = a == null ? $.pointerTarget<__goscript_schedule.ScheduleAction>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<__goscript_schedule.ScheduleAction>(a)
	if (a == null) {
		return [null, null]
	}
	if ((a$ as __goscript_schedule.ScheduleAction).StartWorkflow == null) {
		return [null, __goscript_internal_schedule_client.ErrActionStartWorkflowRequired]
	}
	let __goscriptTuple4: any = await scheduleStartWorkflowActionToThrift((a$ as __goscript_schedule.ScheduleAction).StartWorkflow, dc)
	let sw: shared.ScheduleStartWorkflowAction | $.VarRef<shared.ScheduleStartWorkflowAction> | null = __goscriptTuple4[0]
	let err = __goscriptTuple4[1]
	if (err != null) {
		return [null, err]
	}
	return [new shared.ScheduleAction({StartWorkflow: sw}), null]
}

export function schedulePoliciesToThrift(p: __goscript_schedule.SchedulePolicies | $.VarRef<__goscript_schedule.SchedulePolicies> | null): shared.SchedulePolicies | $.VarRef<shared.SchedulePolicies> | null {
	const p$: __goscript_schedule.SchedulePolicies = p == null ? $.pointerTarget<__goscript_schedule.SchedulePolicies>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<__goscript_schedule.SchedulePolicies>(p)
	if (p == null) {
		return null
	}
	return (() => { const __goscriptLiteralField14 = scheduleOverlapPolicyToThrift((p$ as __goscript_schedule.SchedulePolicies).OverlapPolicy); const __goscriptLiteralField15 = scheduleCatchUpPolicyToThrift((p$ as __goscript_schedule.SchedulePolicies).CatchUpPolicy); const __goscriptLiteralField16 = durationToThriftSeconds((p$ as __goscript_schedule.SchedulePolicies).CatchUpWindow); const __goscriptLiteralField17 = common.BoolPtr((p$ as __goscript_schedule.SchedulePolicies).PauseOnFailure); const __goscriptLiteralField18 = common.Int32Ptr((p$ as __goscript_schedule.SchedulePolicies).BufferLimit); const __goscriptLiteralField19 = common.Int32Ptr((p$ as __goscript_schedule.SchedulePolicies).ConcurrencyLimit); return new shared.SchedulePolicies({OverlapPolicy: __goscriptLiteralField14, CatchUpPolicy: __goscriptLiteralField15, CatchUpWindowInSeconds: __goscriptLiteralField16, PauseOnFailure: __goscriptLiteralField17, BufferLimit: __goscriptLiteralField18, ConcurrencyLimit: __goscriptLiteralField19}) })()
}

export async function scheduleCreateRequestToThrift(domain: string, r: __goscript_schedule.CreateScheduleRequest | $.VarRef<__goscript_schedule.CreateScheduleRequest> | null, dc: __goscript_encoded.DataConverter | null): globalThis.Promise<[shared.CreateScheduleRequest | $.VarRef<shared.CreateScheduleRequest> | null, $.GoError]> {
	const r$: __goscript_schedule.CreateScheduleRequest = r == null ? $.pointerTarget<__goscript_schedule.CreateScheduleRequest>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<__goscript_schedule.CreateScheduleRequest>(r)
	if (r == null) {
		return [null, fmt.Errorf("Create: %w", (__goscript_internal_schedule_client.ErrRequestRequired as any))]
	}
	if ($.stringEqual((r$ as __goscript_schedule.CreateScheduleRequest).ScheduleID, "")) {
		return [null, fmt.Errorf("Create: %w", (__goscript_internal_schedule_client.ErrScheduleIDRequired as any))]
	}
	if (((r$ as __goscript_schedule.CreateScheduleRequest).Spec == null) || ($.stringEqual($.pointerValue<__goscript_schedule.ScheduleSpec>((r$ as __goscript_schedule.CreateScheduleRequest).Spec).CronExpression, ""))) {
		return [null, fmt.Errorf("Create: %w", (__goscript_internal_schedule_client.ErrCronExpressionRequired as any))]
	}
	if (((r$ as __goscript_schedule.CreateScheduleRequest).Action == null) || ($.pointerValue<__goscript_schedule.ScheduleAction>((r$ as __goscript_schedule.CreateScheduleRequest).Action).StartWorkflow == null)) {
		return [null, fmt.Errorf("Create: %w", (__goscript_internal_schedule_client.ErrActionStartWorkflowRequired as any))]
	}
	let __goscriptTuple5: any = await scheduleActionToThrift((r$ as __goscript_schedule.CreateScheduleRequest).Action, dc)
	let action: shared.ScheduleAction | $.VarRef<shared.ScheduleAction> | null = __goscriptTuple5[0]
	let err = __goscriptTuple5[1]
	if (err != null) {
		return [null, err]
	}
	let memo: shared.Memo | $.VarRef<shared.Memo> | null = null! as shared.Memo | $.VarRef<shared.Memo> | null
	{
		let __goscriptTuple6: any = await encodeMemo(dc, (r$ as __goscript_schedule.CreateScheduleRequest).Memo)
		let fields: globalThis.Map<string, $.Slice<number>> | null = __goscriptTuple6[0]
		let encErr = __goscriptTuple6[1]
		if (encErr != null) {
			return [null, encErr]
		} else {
			if (fields != null) {
				memo = new shared.Memo({Fields: fields})
			}
		}
	}
	let searchAttr: shared.SearchAttributes | $.VarRef<shared.SearchAttributes> | null = null! as shared.SearchAttributes | $.VarRef<shared.SearchAttributes> | null
	{
		let __goscriptTuple7: any = await encodeSearchAttributes((r$ as __goscript_schedule.CreateScheduleRequest).SearchAttributes)
		let fields: globalThis.Map<string, $.Slice<number>> | null = __goscriptTuple7[0]
		let encErr = __goscriptTuple7[1]
		if (encErr != null) {
			return [null, encErr]
		} else {
			if (fields != null) {
				searchAttr = new shared.SearchAttributes({IndexedFields: fields})
			}
		}
	}
	return [(() => { const __goscriptLiteralField20 = common.StringPtr(domain); const __goscriptLiteralField21 = common.StringPtr((r$ as __goscript_schedule.CreateScheduleRequest).ScheduleID); const __goscriptLiteralField22 = scheduleSpecToThrift((r$ as __goscript_schedule.CreateScheduleRequest).Spec); const __goscriptLiteralField23 = schedulePoliciesToThrift((r$ as __goscript_schedule.CreateScheduleRequest).Policies); const __goscriptLiteralField24 = scheduleStateToThrift((r$ as __goscript_schedule.CreateScheduleRequest).State); return new shared.CreateScheduleRequest({Domain: __goscriptLiteralField20, ScheduleId: __goscriptLiteralField21, Spec: __goscriptLiteralField22, Action: action, Policies: __goscriptLiteralField23, Memo: memo, SearchAttributes: searchAttr, State: __goscriptLiteralField24}) })(), null]
}

export function scheduleStartWorkflowActionDescriptionToThrift(a: __goscript_schedule.ScheduleStartWorkflowActionDescription | $.VarRef<__goscript_schedule.ScheduleStartWorkflowActionDescription> | null): [shared.ScheduleStartWorkflowAction | $.VarRef<shared.ScheduleStartWorkflowAction> | null, $.GoError] {
	const a$: __goscript_schedule.ScheduleStartWorkflowActionDescription = a == null ? $.pointerTarget<__goscript_schedule.ScheduleStartWorkflowActionDescription>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<__goscript_schedule.ScheduleStartWorkflowActionDescription>(a)
	if (a == null) {
		return [null, null]
	}
	if ($.stringEqual((a$ as __goscript_schedule.ScheduleStartWorkflowActionDescription).WorkflowType, "")) {
		return [null, fmt.Errorf("StartWorkflow: %w", (__goscript_internal_schedule_client.ErrWorkflowTypeRequired as any))]
	}
	if ($.stringEqual((a$ as __goscript_schedule.ScheduleStartWorkflowActionDescription).TaskList, "")) {
		return [null, fmt.Errorf("StartWorkflow: %w", (__goscript_internal_schedule_client.ErrTaskListRequired as any))]
	}
	if ((a$ as __goscript_schedule.ScheduleStartWorkflowActionDescription).ExecutionStartToCloseTimeout <= 0n) {
		return [null, fmt.Errorf("StartWorkflow: %w", (__goscript_internal_schedule_client.ErrExecutionTimeoutRequired as any))]
	}
	let decisionTaskTimeout = (a$ as __goscript_schedule.ScheduleStartWorkflowActionDescription).DecisionTaskStartToCloseTimeout
	if (decisionTaskTimeout < 0n) {
		return [null, fmt.Errorf("StartWorkflow: %w", (__goscript_internal_schedule_client.ErrNegativeDecisionTimeout as any))]
	}
	if (decisionTaskTimeout == 0n) {
		decisionTaskTimeout = 10000000000n
	}
	let memo: shared.Memo | $.VarRef<shared.Memo> | null = null! as shared.Memo | $.VarRef<shared.Memo> | null
	if ($.len((a$ as __goscript_schedule.ScheduleStartWorkflowActionDescription).Memo) > 0) {
		memo = new shared.Memo({Fields: (a$ as __goscript_schedule.ScheduleStartWorkflowActionDescription).Memo})
	}
	let searchAttr: shared.SearchAttributes | $.VarRef<shared.SearchAttributes> | null = null! as shared.SearchAttributes | $.VarRef<shared.SearchAttributes> | null
	if ($.len((a$ as __goscript_schedule.ScheduleStartWorkflowActionDescription).SearchAttributes) > 0) {
		searchAttr = new shared.SearchAttributes({IndexedFields: (a$ as __goscript_schedule.ScheduleStartWorkflowActionDescription).SearchAttributes})
	}
	let input: $.Slice<number> = null! as $.Slice<number>
	if ($.sliceLen((a$ as __goscript_schedule.ScheduleStartWorkflowActionDescription).Input) > 0) {
		input = (a$ as __goscript_schedule.ScheduleStartWorkflowActionDescription).Input
	}
	return [(() => { const __goscriptLiteralField27 = common.StringPtr((a$ as __goscript_schedule.ScheduleStartWorkflowActionDescription).WorkflowIDPrefix); const __goscriptLiteralField28 = durationToThriftSeconds((a$ as __goscript_schedule.ScheduleStartWorkflowActionDescription).ExecutionStartToCloseTimeout); const __goscriptLiteralField29 = durationToThriftSeconds(decisionTaskTimeout); const __goscriptLiteralField30 = scheduleRetryPolicyToThrift((a$ as __goscript_schedule.ScheduleStartWorkflowActionDescription).RetryPolicy); return new shared.ScheduleStartWorkflowAction({WorkflowType: (() => { const __goscriptLiteralField25 = common.StringPtr((a$ as __goscript_schedule.ScheduleStartWorkflowActionDescription).WorkflowType); return new shared.WorkflowType({Name: __goscriptLiteralField25}) })(), TaskList: (() => { const __goscriptLiteralField26 = common.StringPtr((a$ as __goscript_schedule.ScheduleStartWorkflowActionDescription).TaskList); return new shared.TaskList({Name: __goscriptLiteralField26}) })(), Input: input, WorkflowIdPrefix: __goscriptLiteralField27, ExecutionStartToCloseTimeoutSeconds: __goscriptLiteralField28, TaskStartToCloseTimeoutSeconds: __goscriptLiteralField29, RetryPolicy: __goscriptLiteralField30, Memo: memo, SearchAttributes: searchAttr}) })(), null]
}

export function scheduleActionDescriptionToThrift(a: __goscript_schedule.ScheduleActionDescription | $.VarRef<__goscript_schedule.ScheduleActionDescription> | null): [shared.ScheduleAction | $.VarRef<shared.ScheduleAction> | null, $.GoError] {
	const a$: __goscript_schedule.ScheduleActionDescription = a == null ? $.pointerTarget<__goscript_schedule.ScheduleActionDescription>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<__goscript_schedule.ScheduleActionDescription>(a)
	if (a == null) {
		return [null, null]
	}
	if ((a$ as __goscript_schedule.ScheduleActionDescription).StartWorkflow == null) {
		return [null, __goscript_internal_schedule_client.ErrActionStartWorkflowRequired]
	}
	let __goscriptTuple8: any = scheduleStartWorkflowActionDescriptionToThrift((a$ as __goscript_schedule.ScheduleActionDescription).StartWorkflow)
	let sw: shared.ScheduleStartWorkflowAction | $.VarRef<shared.ScheduleStartWorkflowAction> | null = __goscriptTuple8[0]
	let err = __goscriptTuple8[1]
	if (err != null) {
		return [null, err]
	}
	return [new shared.ScheduleAction({StartWorkflow: sw}), null]
}

export function scheduleUpdateFromDescribe(desc: __goscript_schedule.DescribeScheduleResponse | $.VarRef<__goscript_schedule.DescribeScheduleResponse> | null, dc: __goscript_encoded.DataConverter | null): __goscript_schedule.ScheduleUpdate | $.VarRef<__goscript_schedule.ScheduleUpdate> | null {
	const desc$: __goscript_schedule.DescribeScheduleResponse = desc == null ? $.pointerTarget<__goscript_schedule.DescribeScheduleResponse>(desc) : (desc as any).__isVarRef === true ? (desc as any).value : (desc as any).__goValue === undefined ? (desc as any) : $.pointerTarget<__goscript_schedule.DescribeScheduleResponse>(desc)
	let u: __goscript_schedule.ScheduleUpdate | $.VarRef<__goscript_schedule.ScheduleUpdate> | null = new __goscript_schedule.ScheduleUpdate({dc: dc})
	let u$: __goscript_schedule.ScheduleUpdate = u == null ? $.pointerTarget<__goscript_schedule.ScheduleUpdate>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<__goscript_schedule.ScheduleUpdate>(u)
	if (desc == null) {
		return u
	}
	if ((desc$ as __goscript_schedule.DescribeScheduleResponse).Spec != null) {
		let s = $.varRef(($.pointerValue<__goscript_schedule.ScheduleSpec>((desc$ as __goscript_schedule.DescribeScheduleResponse).Spec)).clone());
		;(u$ as __goscript_schedule.ScheduleUpdate).Spec = s
	}
	if (((desc$ as __goscript_schedule.DescribeScheduleResponse).Action != null) && ($.pointerValue<__goscript_schedule.ScheduleActionDescription>((desc$ as __goscript_schedule.DescribeScheduleResponse).Action).StartWorkflow != null)) {
		let sw = $.varRef(($.pointerValue<__goscript_schedule.ScheduleStartWorkflowActionDescription>($.pointerValue<__goscript_schedule.ScheduleActionDescription>((desc$ as __goscript_schedule.DescribeScheduleResponse).Action).StartWorkflow)).clone())
		sw.value.Input = copyBytes($.pointerValue<__goscript_schedule.ScheduleStartWorkflowActionDescription>($.pointerValue<__goscript_schedule.ScheduleActionDescription>((desc$ as __goscript_schedule.DescribeScheduleResponse).Action).StartWorkflow).Input)
		if ($.pointerValue<__goscript_schedule.ScheduleStartWorkflowActionDescription>($.pointerValue<__goscript_schedule.ScheduleActionDescription>((desc$ as __goscript_schedule.DescribeScheduleResponse).Action).StartWorkflow).RetryPolicy != null) {
			let rp = $.varRef(($.pointerValue<__goscript_client.RetryPolicy>($.pointerValue<__goscript_schedule.ScheduleStartWorkflowActionDescription>($.pointerValue<__goscript_schedule.ScheduleActionDescription>((desc$ as __goscript_schedule.DescribeScheduleResponse).Action).StartWorkflow).RetryPolicy)).clone())
			rp.value.NonRetriableErrorReasons = copyStrings($.pointerValue<__goscript_client.RetryPolicy>($.pointerValue<__goscript_schedule.ScheduleStartWorkflowActionDescription>($.pointerValue<__goscript_schedule.ScheduleActionDescription>((desc$ as __goscript_schedule.DescribeScheduleResponse).Action).StartWorkflow).RetryPolicy).NonRetriableErrorReasons)
			sw.value.RetryPolicy = rp
		}
		sw.value.Memo = copyByteMap($.pointerValue<__goscript_schedule.ScheduleStartWorkflowActionDescription>($.pointerValue<__goscript_schedule.ScheduleActionDescription>((desc$ as __goscript_schedule.DescribeScheduleResponse).Action).StartWorkflow).Memo)
		sw.value.SearchAttributes = copyByteMap($.pointerValue<__goscript_schedule.ScheduleStartWorkflowActionDescription>($.pointerValue<__goscript_schedule.ScheduleActionDescription>((desc$ as __goscript_schedule.DescribeScheduleResponse).Action).StartWorkflow).SearchAttributes);
		;(u$ as __goscript_schedule.ScheduleUpdate).Action = new __goscript_schedule.ScheduleActionDescription({StartWorkflow: sw})
	}
	if ((desc$ as __goscript_schedule.DescribeScheduleResponse).Policies != null) {
		let p = $.varRef(($.pointerValue<__goscript_schedule.SchedulePolicies>((desc$ as __goscript_schedule.DescribeScheduleResponse).Policies)).clone());
		;(u$ as __goscript_schedule.ScheduleUpdate).Policies = p
	}
	;(u$ as __goscript_schedule.ScheduleUpdate).SearchAttributes = copyByteMap((desc$ as __goscript_schedule.DescribeScheduleResponse).SearchAttributes)
	return u
}

export function copyBytes(b: $.Slice<number>): $.Slice<number> {
	if (b == null) {
		return null
	}
	let out: $.Slice<number> = $.makeSlice<number>($.sliceLen(b), undefined, "byte")
	$.copy(out, b)
	return out
}

export function copyStrings(s: $.Slice<string>): $.Slice<string> {
	if (s == null) {
		return null
	}
	let out: $.Slice<string> = $.makeSlice<string>($.sliceLen(s), undefined, "string")
	$.copy(out, s)
	return out
}

export function copyByteMap(m: globalThis.Map<string, $.Slice<number>> | null): globalThis.Map<string, $.Slice<number>> | null {
	if (m == null) {
		return null
	}
	let out: globalThis.Map<string, $.Slice<number>> | null = $.makeMap<string, $.Slice<number>>()
	for (let [k, v] of m?.entries() ?? []) {
		$.mapSet(out, k, copyBytes(v))
	}
	return out
}

export function backfillRequestToThrift(domain: string, scheduleID: string, r: __goscript_schedule.BackfillRequest | $.VarRef<__goscript_schedule.BackfillRequest> | null): [shared.BackfillScheduleRequest | $.VarRef<shared.BackfillScheduleRequest> | null, $.GoError] {
	const r$: __goscript_schedule.BackfillRequest = r == null ? $.pointerTarget<__goscript_schedule.BackfillRequest>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<__goscript_schedule.BackfillRequest>(r)
	if ($.stringEqual(scheduleID, "")) {
		return [null, fmt.Errorf("Backfill: %w", (__goscript_internal_schedule_client.ErrScheduleIDRequired as any))]
	}
	if (r == null) {
		return [null, fmt.Errorf("Backfill: %w", (__goscript_internal_schedule_client.ErrRequestRequired as any))]
	}
	if ($.markAsStructValue($.cloneStructValue((r$ as __goscript_schedule.BackfillRequest).StartTime)).IsZero()) {
		return [null, fmt.Errorf("Backfill: %w", (__goscript_internal_schedule_client.ErrStartTimeRequired as any))]
	}
	if ($.markAsStructValue($.cloneStructValue((r$ as __goscript_schedule.BackfillRequest).EndTime)).IsZero()) {
		return [null, fmt.Errorf("Backfill: %w", (__goscript_internal_schedule_client.ErrEndTimeRequired as any))]
	}
	if (!$.markAsStructValue($.cloneStructValue((r$ as __goscript_schedule.BackfillRequest).EndTime)).After($.markAsStructValue($.cloneStructValue((r$ as __goscript_schedule.BackfillRequest).StartTime)))) {
		return [null, fmt.Errorf("Backfill: %w", (__goscript_internal_schedule_client.ErrEndTimeBeforeStartTime as any))]
	}
	return [(() => { const __goscriptLiteralField31 = common.StringPtr(domain); const __goscriptLiteralField32 = common.StringPtr(scheduleID); const __goscriptLiteralField33 = timeToThriftNano($.markAsStructValue($.cloneStructValue((r$ as __goscript_schedule.BackfillRequest).StartTime))); const __goscriptLiteralField34 = timeToThriftNano($.markAsStructValue($.cloneStructValue((r$ as __goscript_schedule.BackfillRequest).EndTime))); const __goscriptLiteralField35 = scheduleOverlapPolicyToThrift((r$ as __goscript_schedule.BackfillRequest).OverlapPolicy); const __goscriptLiteralField36 = common.StringPtr((r$ as __goscript_schedule.BackfillRequest).BackfillID); return new shared.BackfillScheduleRequest({Domain: __goscriptLiteralField31, ScheduleId: __goscriptLiteralField32, StartTimeNano: __goscriptLiteralField33, EndTimeNano: __goscriptLiteralField34, OverlapPolicy: __goscriptLiteralField35, BackfillId: __goscriptLiteralField36}) })(), null]
}

export function scheduleSpecFromThrift(spec: shared.ScheduleSpec | $.VarRef<shared.ScheduleSpec> | null): __goscript_schedule.ScheduleSpec | $.VarRef<__goscript_schedule.ScheduleSpec> | null {
	const spec$: shared.ScheduleSpec = spec == null ? $.pointerTarget<shared.ScheduleSpec>(spec) : (spec as any).__isVarRef === true ? (spec as any).value : (spec as any).__goValue === undefined ? (spec as any) : $.pointerTarget<shared.ScheduleSpec>(spec)
	if (spec == null) {
		return null
	}
	return (() => { const __goscriptLiteralField37 = (spec !== null && (spec as any).__isVarRef !== true && (spec as any).__goValue === undefined ? ((spec as any) as shared.ScheduleSpec).GetCronExpression() : shared.ScheduleSpec.prototype.GetCronExpression.call(spec)); const __goscriptLiteralField38 = thriftNanoToTime((spec$ as shared.ScheduleSpec).StartTimeNano); const __goscriptLiteralField39 = thriftNanoToTime((spec$ as shared.ScheduleSpec).EndTimeNano); const __goscriptLiteralField40 = thriftSecondsToDuration((spec$ as shared.ScheduleSpec).JitterInSeconds); return new __goscript_schedule.ScheduleSpec({CronExpression: __goscriptLiteralField37, StartTime: __goscriptLiteralField38, EndTime: __goscriptLiteralField39, Jitter: __goscriptLiteralField40}) })()
}

export function scheduleRetryPolicyFromThrift(p: shared.RetryPolicy | $.VarRef<shared.RetryPolicy> | null): __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null {
	const p$: shared.RetryPolicy = p == null ? $.pointerTarget<shared.RetryPolicy>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<shared.RetryPolicy>(p)
	if (p == null) {
		return null
	}
	return (() => { const __goscriptLiteralField41 = thriftSecondsToDuration((p$ as shared.RetryPolicy).InitialIntervalInSeconds); const __goscriptLiteralField42 = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as shared.RetryPolicy).GetBackoffCoefficient() : shared.RetryPolicy.prototype.GetBackoffCoefficient.call(p)); const __goscriptLiteralField43 = thriftSecondsToDuration((p$ as shared.RetryPolicy).MaximumIntervalInSeconds); const __goscriptLiteralField44 = thriftSecondsToDuration((p$ as shared.RetryPolicy).ExpirationIntervalInSeconds); const __goscriptLiteralField45 = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as shared.RetryPolicy).GetMaximumAttempts() : shared.RetryPolicy.prototype.GetMaximumAttempts.call(p)); return new __goscript_client.RetryPolicy({InitialInterval: __goscriptLiteralField41, BackoffCoefficient: __goscriptLiteralField42, MaximumInterval: __goscriptLiteralField43, ExpirationInterval: __goscriptLiteralField44, MaximumAttempts: __goscriptLiteralField45, NonRetriableErrorReasons: (p$ as shared.RetryPolicy).NonRetriableErrorReasons}) })()
}

export function scheduleStartWorkflowActionDescriptionFromThrift(a: shared.ScheduleStartWorkflowAction | $.VarRef<shared.ScheduleStartWorkflowAction> | null): __goscript_schedule.ScheduleStartWorkflowActionDescription | $.VarRef<__goscript_schedule.ScheduleStartWorkflowActionDescription> | null {
	const a$: shared.ScheduleStartWorkflowAction = a == null ? $.pointerTarget<shared.ScheduleStartWorkflowAction>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<shared.ScheduleStartWorkflowAction>(a)
	if (a == null) {
		return null
	}
	let out: __goscript_schedule.ScheduleStartWorkflowActionDescription | $.VarRef<__goscript_schedule.ScheduleStartWorkflowActionDescription> | null = (() => { const __goscriptLiteralField46 = shared.WorkflowType.prototype.GetName.call((a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as shared.ScheduleStartWorkflowAction).GetWorkflowType() : shared.ScheduleStartWorkflowAction.prototype.GetWorkflowType.call(a))); const __goscriptLiteralField47 = shared.TaskList.prototype.GetName.call((a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as shared.ScheduleStartWorkflowAction).GetTaskList() : shared.ScheduleStartWorkflowAction.prototype.GetTaskList.call(a))); const __goscriptLiteralField48 = (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as shared.ScheduleStartWorkflowAction).GetWorkflowIdPrefix() : shared.ScheduleStartWorkflowAction.prototype.GetWorkflowIdPrefix.call(a)); const __goscriptLiteralField49 = thriftSecondsToDuration((a$ as shared.ScheduleStartWorkflowAction).ExecutionStartToCloseTimeoutSeconds); const __goscriptLiteralField50 = thriftSecondsToDuration((a$ as shared.ScheduleStartWorkflowAction).TaskStartToCloseTimeoutSeconds); const __goscriptLiteralField51 = scheduleRetryPolicyFromThrift((a$ as shared.ScheduleStartWorkflowAction).RetryPolicy); return new __goscript_schedule.ScheduleStartWorkflowActionDescription({WorkflowType: __goscriptLiteralField46, TaskList: __goscriptLiteralField47, Input: (a$ as shared.ScheduleStartWorkflowAction).Input, WorkflowIDPrefix: __goscriptLiteralField48, ExecutionStartToCloseTimeout: __goscriptLiteralField49, DecisionTaskStartToCloseTimeout: __goscriptLiteralField50, RetryPolicy: __goscriptLiteralField51}) })()
	let out$: __goscript_schedule.ScheduleStartWorkflowActionDescription = out == null ? $.pointerTarget<__goscript_schedule.ScheduleStartWorkflowActionDescription>(out) : (out as any).__isVarRef === true ? (out as any).value : (out as any).__goValue === undefined ? (out as any) : $.pointerTarget<__goscript_schedule.ScheduleStartWorkflowActionDescription>(out)
	// Memo and SearchAttributes are returned as the raw bytes the server stores (exactly
	// as the caller encoded them on write). Decode them yourself with the DataConverter you
	// used on write. This mirrors the server (no decode on read) and matches the
	// schedule-level Memo/SA behavior on DescribeScheduleResponse.
	if ((a$ as shared.ScheduleStartWorkflowAction).Memo != null) {
		;(out$ as __goscript_schedule.ScheduleStartWorkflowActionDescription).Memo = $.pointerValue<shared.Memo>((a$ as shared.ScheduleStartWorkflowAction).Memo).Fields
	}
	if ((a$ as shared.ScheduleStartWorkflowAction).SearchAttributes != null) {
		;(out$ as __goscript_schedule.ScheduleStartWorkflowActionDescription).SearchAttributes = $.pointerValue<shared.SearchAttributes>((a$ as shared.ScheduleStartWorkflowAction).SearchAttributes).IndexedFields
	}
	return out
}

export function scheduleActionDescriptionFromThrift(a: shared.ScheduleAction | $.VarRef<shared.ScheduleAction> | null): __goscript_schedule.ScheduleActionDescription | $.VarRef<__goscript_schedule.ScheduleActionDescription> | null {
	if (a == null) {
		return null
	}
	return (() => { const __goscriptLiteralField52 = scheduleStartWorkflowActionDescriptionFromThrift($.pointerValue<shared.ScheduleAction>(a).StartWorkflow); return new __goscript_schedule.ScheduleActionDescription({StartWorkflow: __goscriptLiteralField52}) })()
}

export function schedulePoliciesFromThrift(p: shared.SchedulePolicies | $.VarRef<shared.SchedulePolicies> | null): __goscript_schedule.SchedulePolicies | $.VarRef<__goscript_schedule.SchedulePolicies> | null {
	const p$: shared.SchedulePolicies = p == null ? $.pointerTarget<shared.SchedulePolicies>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<shared.SchedulePolicies>(p)
	if (p == null) {
		return null
	}
	return (() => { const __goscriptLiteralField53 = scheduleOverlapPolicyFromThrift((p$ as shared.SchedulePolicies).OverlapPolicy); const __goscriptLiteralField54 = scheduleCatchUpPolicyFromThrift((p$ as shared.SchedulePolicies).CatchUpPolicy); const __goscriptLiteralField55 = thriftSecondsToDuration((p$ as shared.SchedulePolicies).CatchUpWindowInSeconds); const __goscriptLiteralField56 = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as shared.SchedulePolicies).GetPauseOnFailure() : shared.SchedulePolicies.prototype.GetPauseOnFailure.call(p)); const __goscriptLiteralField57 = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as shared.SchedulePolicies).GetBufferLimit() : shared.SchedulePolicies.prototype.GetBufferLimit.call(p)); const __goscriptLiteralField58 = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as shared.SchedulePolicies).GetConcurrencyLimit() : shared.SchedulePolicies.prototype.GetConcurrencyLimit.call(p)); return new __goscript_schedule.SchedulePolicies({OverlapPolicy: __goscriptLiteralField53, CatchUpPolicy: __goscriptLiteralField54, CatchUpWindow: __goscriptLiteralField55, PauseOnFailure: __goscriptLiteralField56, BufferLimit: __goscriptLiteralField57, ConcurrencyLimit: __goscriptLiteralField58}) })()
}

export function schedulePauseInfoFromThrift(pi: shared.SchedulePauseInfo | $.VarRef<shared.SchedulePauseInfo> | null): __goscript_schedule.SchedulePauseInfo | $.VarRef<__goscript_schedule.SchedulePauseInfo> | null {
	if (pi == null) {
		return null
	}
	return (() => { const __goscriptLiteralField59 = (pi !== null && (pi as any).__isVarRef !== true && (pi as any).__goValue === undefined ? ((pi as any) as shared.SchedulePauseInfo).GetReason() : shared.SchedulePauseInfo.prototype.GetReason.call(pi)); const __goscriptLiteralField60 = thriftNanoToTime($.pointerValue<shared.SchedulePauseInfo>(pi).PausedTimeNano); const __goscriptLiteralField61 = (pi !== null && (pi as any).__isVarRef !== true && (pi as any).__goValue === undefined ? ((pi as any) as shared.SchedulePauseInfo).GetPausedBy() : shared.SchedulePauseInfo.prototype.GetPausedBy.call(pi)); return new __goscript_schedule.SchedulePauseInfo({Reason: __goscriptLiteralField59, PausedAt: __goscriptLiteralField60, PausedBy: __goscriptLiteralField61}) })()
}

export function scheduleStateFromThrift(st: shared.ScheduleState | $.VarRef<shared.ScheduleState> | null): __goscript_schedule.ScheduleState | $.VarRef<__goscript_schedule.ScheduleState> | null {
	if (st == null) {
		return null
	}
	return (() => { const __goscriptLiteralField62 = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as shared.ScheduleState).GetPaused() : shared.ScheduleState.prototype.GetPaused.call(st)); const __goscriptLiteralField63 = schedulePauseInfoFromThrift($.pointerValue<shared.ScheduleState>(st).PauseInfo); return new __goscript_schedule.ScheduleState({Paused: __goscriptLiteralField62, PauseInfo: __goscriptLiteralField63}) })()
}

export function scheduleStateToThrift(s: __goscript_schedule.ScheduleState | $.VarRef<__goscript_schedule.ScheduleState> | null): shared.ScheduleState | $.VarRef<shared.ScheduleState> | null {
	const s$: __goscript_schedule.ScheduleState = s == null ? $.pointerTarget<__goscript_schedule.ScheduleState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_schedule.ScheduleState>(s)
	if (s == null) {
		return null
	}
	return (() => { const __goscriptLiteralField64 = common.BoolPtr((s$ as __goscript_schedule.ScheduleState).Paused); const __goscriptLiteralField65 = schedulePauseInfoToThrift((s$ as __goscript_schedule.ScheduleState).PauseInfo); return new shared.ScheduleState({Paused: __goscriptLiteralField64, PauseInfo: __goscriptLiteralField65}) })()
}

export function schedulePauseInfoToThrift(pi: __goscript_schedule.SchedulePauseInfo | $.VarRef<__goscript_schedule.SchedulePauseInfo> | null): shared.SchedulePauseInfo | $.VarRef<shared.SchedulePauseInfo> | null {
	const pi$: __goscript_schedule.SchedulePauseInfo = pi == null ? $.pointerTarget<__goscript_schedule.SchedulePauseInfo>(pi) : (pi as any).__isVarRef === true ? (pi as any).value : (pi as any).__goValue === undefined ? (pi as any) : $.pointerTarget<__goscript_schedule.SchedulePauseInfo>(pi)
	if (pi == null) {
		return null
	}
	// PausedAt is intentionally not sent: it is server-populated (set to CreateTime
	// by the scheduler workflow on first execution) and ignored by the server on input.
	return (() => { const __goscriptLiteralField66 = common.StringPtr((pi$ as __goscript_schedule.SchedulePauseInfo).Reason); const __goscriptLiteralField67 = common.StringPtr((pi$ as __goscript_schedule.SchedulePauseInfo).PausedBy); return new shared.SchedulePauseInfo({Reason: __goscriptLiteralField66, PausedBy: __goscriptLiteralField67}) })()
}

export function backfillInfoFromThrift(b: shared.BackfillInfo | $.VarRef<shared.BackfillInfo> | null): __goscript_schedule.BackfillInfo | $.VarRef<__goscript_schedule.BackfillInfo> | null {
	const b$: shared.BackfillInfo = b == null ? $.pointerTarget<shared.BackfillInfo>(b) : (b as any).__isVarRef === true ? (b as any).value : (b as any).__goValue === undefined ? (b as any) : $.pointerTarget<shared.BackfillInfo>(b)
	if (b == null) {
		return null
	}
	return (() => { const __goscriptLiteralField68 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as shared.BackfillInfo).GetBackfillId() : shared.BackfillInfo.prototype.GetBackfillId.call(b)); const __goscriptLiteralField69 = thriftNanoToTime((b$ as shared.BackfillInfo).StartTimeNano); const __goscriptLiteralField70 = thriftNanoToTime((b$ as shared.BackfillInfo).EndTimeNano); const __goscriptLiteralField71 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as shared.BackfillInfo).GetRunsCompleted() : shared.BackfillInfo.prototype.GetRunsCompleted.call(b)); const __goscriptLiteralField72 = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? ((b as any) as shared.BackfillInfo).GetRunsTotal() : shared.BackfillInfo.prototype.GetRunsTotal.call(b)); return new __goscript_schedule.BackfillInfo({BackfillID: __goscriptLiteralField68, StartTime: __goscriptLiteralField69, EndTime: __goscriptLiteralField70, RunsCompleted: __goscriptLiteralField71, RunsTotal: __goscriptLiteralField72}) })()
}

export function scheduleInfoFromThrift(si: shared.ScheduleInfo | $.VarRef<shared.ScheduleInfo> | null): __goscript_schedule.ScheduleInfo | $.VarRef<__goscript_schedule.ScheduleInfo> | null {
	const si$: shared.ScheduleInfo = si == null ? $.pointerTarget<shared.ScheduleInfo>(si) : (si as any).__isVarRef === true ? (si as any).value : (si as any).__goValue === undefined ? (si as any) : $.pointerTarget<shared.ScheduleInfo>(si)
	if (si == null) {
		return null
	}
	let ongoing: $.Slice<__goscript_schedule.BackfillInfo | $.VarRef<__goscript_schedule.BackfillInfo> | null> = null! as $.Slice<__goscript_schedule.BackfillInfo | $.VarRef<__goscript_schedule.BackfillInfo> | null>
	if ((si$ as shared.ScheduleInfo).OngoingBackfills != null) {
		ongoing = $.makeSlice<__goscript_schedule.BackfillInfo | $.VarRef<__goscript_schedule.BackfillInfo> | null>($.sliceLen((si$ as shared.ScheduleInfo).OngoingBackfills))
		for (let __goscriptRangeTarget0 = (si$ as shared.ScheduleInfo).OngoingBackfills, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(ongoing), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let b = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as shared.BackfillInfo | $.VarRef<shared.BackfillInfo> | null);
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = backfillInfoFromThrift(b)
		}
	}
	return (() => { const __goscriptLiteralField73 = thriftNanoToTime((si$ as shared.ScheduleInfo).LastRunTimeNano); const __goscriptLiteralField74 = thriftNanoToTime((si$ as shared.ScheduleInfo).NextRunTimeNano); const __goscriptLiteralField75 = (si !== null && (si as any).__isVarRef !== true && (si as any).__goValue === undefined ? ((si as any) as shared.ScheduleInfo).GetTotalRuns() : shared.ScheduleInfo.prototype.GetTotalRuns.call(si)); const __goscriptLiteralField76 = thriftNanoToTime((si$ as shared.ScheduleInfo).CreateTimeNano); const __goscriptLiteralField77 = thriftNanoToTime((si$ as shared.ScheduleInfo).LastUpdateTimeNano); const __goscriptLiteralField78 = (si !== null && (si as any).__isVarRef !== true && (si as any).__goValue === undefined ? ((si as any) as shared.ScheduleInfo).GetMissedRuns() : shared.ScheduleInfo.prototype.GetMissedRuns.call(si)); const __goscriptLiteralField79 = (si !== null && (si as any).__isVarRef !== true && (si as any).__goValue === undefined ? ((si as any) as shared.ScheduleInfo).GetSkippedRuns() : shared.ScheduleInfo.prototype.GetSkippedRuns.call(si)); const __goscriptLiteralField80 = (si !== null && (si as any).__isVarRef !== true && (si as any).__goValue === undefined ? ((si as any) as shared.ScheduleInfo).GetBufferedFireCount() : shared.ScheduleInfo.prototype.GetBufferedFireCount.call(si)); const __goscriptLiteralField81 = (si !== null && (si as any).__isVarRef !== true && (si as any).__goValue === undefined ? ((si as any) as shared.ScheduleInfo).GetRunningWorkflowCount() : shared.ScheduleInfo.prototype.GetRunningWorkflowCount.call(si)); return new __goscript_schedule.ScheduleInfo({LastRunTime: __goscriptLiteralField73, NextRunTime: __goscriptLiteralField74, TotalRuns: __goscriptLiteralField75, CreateTime: __goscriptLiteralField76, LastUpdateTime: __goscriptLiteralField77, OngoingBackfills: ongoing, MissedRuns: __goscriptLiteralField78, SkippedRuns: __goscriptLiteralField79, BufferedFireCount: __goscriptLiteralField80, RunningWorkflowCount: __goscriptLiteralField81}) })()
}

export function scheduleListEntryFromThrift(e: shared.ScheduleListEntry | $.VarRef<shared.ScheduleListEntry> | null): __goscript_schedule.ScheduleListEntry | $.VarRef<__goscript_schedule.ScheduleListEntry> | null {
	if (e == null) {
		return null
	}
	return (() => { const __goscriptLiteralField82 = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as shared.ScheduleListEntry).GetScheduleId() : shared.ScheduleListEntry.prototype.GetScheduleId.call(e)); const __goscriptLiteralField83 = shared.WorkflowType.prototype.GetName.call((e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as shared.ScheduleListEntry).GetWorkflowType() : shared.ScheduleListEntry.prototype.GetWorkflowType.call(e))); const __goscriptLiteralField84 = scheduleStateFromThrift($.pointerValue<shared.ScheduleListEntry>(e).State); const __goscriptLiteralField85 = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as shared.ScheduleListEntry).GetCronExpression() : shared.ScheduleListEntry.prototype.GetCronExpression.call(e)); return new __goscript_schedule.ScheduleListEntry({ScheduleID: __goscriptLiteralField82, WorkflowType: __goscriptLiteralField83, State: __goscriptLiteralField84, CronExpression: __goscriptLiteralField85}) })()
}

export function describeScheduleResponseFromThrift(r: shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null): __goscript_schedule.DescribeScheduleResponse | $.VarRef<__goscript_schedule.DescribeScheduleResponse> | null {
	const r$: shared.DescribeScheduleResponse = r == null ? $.pointerTarget<shared.DescribeScheduleResponse>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<shared.DescribeScheduleResponse>(r)
	if (r == null) {
		return null
	}
	// Schedule-level and action-level Memo/SearchAttributes are all returned as raw
	// encoded bytes (map[string][]byte), exactly as the server stores them — decode
	// them with the DataConverter you used on write.
	let memo: globalThis.Map<string, $.Slice<number>> | null = null! as globalThis.Map<string, $.Slice<number>> | null
	if ((r$ as shared.DescribeScheduleResponse).Memo != null) {
		memo = $.pointerValue<shared.Memo>((r$ as shared.DescribeScheduleResponse).Memo).Fields
	}
	let searchAttr: globalThis.Map<string, $.Slice<number>> | null = null! as globalThis.Map<string, $.Slice<number>> | null
	if ((r$ as shared.DescribeScheduleResponse).SearchAttributes != null) {
		searchAttr = $.pointerValue<shared.SearchAttributes>((r$ as shared.DescribeScheduleResponse).SearchAttributes).IndexedFields
	}
	return (() => { const __goscriptLiteralField86 = scheduleSpecFromThrift((r$ as shared.DescribeScheduleResponse).Spec); const __goscriptLiteralField87 = scheduleActionDescriptionFromThrift((r$ as shared.DescribeScheduleResponse).Action); const __goscriptLiteralField88 = schedulePoliciesFromThrift((r$ as shared.DescribeScheduleResponse).Policies); const __goscriptLiteralField89 = scheduleStateFromThrift((r$ as shared.DescribeScheduleResponse).State); const __goscriptLiteralField90 = scheduleInfoFromThrift((r$ as shared.DescribeScheduleResponse).Info); return new __goscript_schedule.DescribeScheduleResponse({Spec: __goscriptLiteralField86, Action: __goscriptLiteralField87, Policies: __goscriptLiteralField88, State: __goscriptLiteralField89, Info: __goscriptLiteralField90, Memo: memo, SearchAttributes: searchAttr}) })()
}

export function listSchedulesResponseFromThrift(r: shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null): __goscript_schedule.ListSchedulesResponse | $.VarRef<__goscript_schedule.ListSchedulesResponse> | null {
	const r$: shared.ListSchedulesResponse = r == null ? $.pointerTarget<shared.ListSchedulesResponse>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<shared.ListSchedulesResponse>(r)
	if (r == null) {
		return null
	}
	let entries: $.Slice<__goscript_schedule.ScheduleListEntry | $.VarRef<__goscript_schedule.ScheduleListEntry> | null> = null! as $.Slice<__goscript_schedule.ScheduleListEntry | $.VarRef<__goscript_schedule.ScheduleListEntry> | null>
	if ((r$ as shared.ListSchedulesResponse).Schedules != null) {
		entries = $.makeSlice<__goscript_schedule.ScheduleListEntry | $.VarRef<__goscript_schedule.ScheduleListEntry> | null>($.sliceLen((r$ as shared.ListSchedulesResponse).Schedules))
		for (let __goscriptRangeTarget1 = (r$ as shared.ListSchedulesResponse).Schedules, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow1 = $.sliceRange(entries), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let e = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as shared.ScheduleListEntry | $.VarRef<shared.ScheduleListEntry> | null);
			;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] = scheduleListEntryFromThrift(e)
		}
	}
	return new __goscript_schedule.ListSchedulesResponse({Schedules: entries, NextPageToken: (r$ as shared.ListSchedulesResponse).NextPageToken})
}
