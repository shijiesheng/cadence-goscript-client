// Generated file based on workflow_shadower_activities.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as shadower from "@goscript/go.uber.org/cadence/.gen/go/shadower/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as backoff from "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import type * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import type * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import * as __goscript_internal_logging_tags from "./internal_logging_tags.gs.ts"

import * as __goscript_internal_retry from "./internal_retry.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import type * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_replayer from "./workflow_replayer.gs.ts"
import "@goscript/context/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shadower/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/sync/index.js"
import "./activity.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./error.gs.ts"
import "./headers.gs.ts"
import "./interceptors.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_logging_tags.gs.ts"
import "./internal_retry.gs.ts"
import "./internal_utils.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_workflow.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./workflow.gs.ts"
import "./workflow_replayer.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.replayWorkflowActivityProgress"])

export class replayWorkflowActivityProgress {
	public get Result(): shadower.ReplayWorkflowActivityResult {
		return this._fields.Result
	}

	public set Result(value: shadower.ReplayWorkflowActivityResult) {
		this._fields.Result = value
	}

	public get NextExecutionIdx(): number {
		return this._fields.NextExecutionIdx
	}

	public set NextExecutionIdx(value: number) {
		this._fields.NextExecutionIdx = value
	}

	public _fields: {
		Result: shadower.ReplayWorkflowActivityResult
		NextExecutionIdx: number
	}

	constructor(init?: Partial<{Result?: shadower.ReplayWorkflowActivityResult, NextExecutionIdx?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Result: init?.Result ? init.Result.clone() : new shadower.ReplayWorkflowActivityResult(undefined, true),
			NextExecutionIdx: init?.NextExecutionIdx ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): replayWorkflowActivityProgress {
		return new replayWorkflowActivityProgress(this, true)
	}

	public __goscriptAssign(source: replayWorkflowActivityProgress): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Result, values.Result)
		target.NextExecutionIdx = values.NextExecutionIdx
	}

	static __typeInfo = $.registerStructType(
		"internal.replayWorkflowActivityProgress",
		() => new replayWorkflowActivityProgress(),
		() => [],
		replayWorkflowActivityProgress,
		() => [/* @__PURE__ */ $.structField("Result", "shadower.ReplayWorkflowActivityResult", [0], 0, true), /* @__PURE__ */ $.structField("NextExecutionIdx", /* @__PURE__ */ $.basicType("int"), [1], 24, true)]
	)
}

export const serviceClientContextKey: __goscript_internal_activity.contextKey = "serviceClient"

export const workflowReplayerContextKey: __goscript_internal_activity.contextKey = "workflowReplayer"

export const minScanWorkflowResultSize: number = 10

export const ratioToCompleteScanWorkflow: number = 4/5

export const scanWorkflowWaitPeriod: time.Duration = 100000000n

export async function scanWorkflowActivity(ctx: context.Context | null, params: shadower.ScanWorkflowActivityParams): globalThis.Promise<[shadower.ScanWorkflowActivityResult, $.GoError]> {
	let logger: zap.Logger | $.VarRef<zap.Logger> | null = await __goscript_activity.GetActivityLogger(ctx)
	let service = $.mustTypeAssert<workflowserviceclient.Interface | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("serviceClient", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "workflowserviceclient.Interface")

	let [scanResult, err] = await scanWorkflowExecutionsHelper(ctx, service, (params).clone(), logger)
	{
		const __goscriptTypeSwitchValue = err
		switch (true) {
			case $.typeAssert<shared.EntityNotExistsError | $.VarRef<shared.EntityNotExistsError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.EntityNotExistsError")).ok:
				{
					err = $.interfaceValue<$.GoError>(await __goscript_error.NewCustomError(shadower.ErrReasonDomainNotExists, $.arrayToSlice<any>([(__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)])), "*internal.CustomError", /* @__PURE__ */ $.pointerType("internal.CustomError"))
				}
				break
			case $.typeAssert<shared.BadRequestError | $.VarRef<shared.BadRequestError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.BadRequestError")).ok:
				{
					err = $.interfaceValue<$.GoError>(await __goscript_error.NewCustomError(shadower.ErrReasonInvalidQuery, $.arrayToSlice<any>([(__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)])), "*internal.CustomError", /* @__PURE__ */ $.pointerType("internal.CustomError"))
				}
				break
		}
	}
	return [(scanResult).clone(), err]
}

export async function scanWorkflowExecutionsHelper(ctx: context.Context | null, service: workflowserviceclient.Interface | null, __goscriptParam0: shadower.ScanWorkflowActivityParams, logger: zap.Logger | $.VarRef<zap.Logger> | null): globalThis.Promise<[shadower.ScanWorkflowActivityResult, $.GoError]> {
	let params: $.VarRef<shadower.ScanWorkflowActivityParams> = $.varRef(__goscriptParam0)
	let completionTime: time.Time = $.markAsStructValue(new time.Time())
	{
		let [deadline, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
		if (ok) {
			let now = $.markAsStructValue($.cloneStructValue(time.Now()))
			let activityTimeout = $.markAsStructValue($.cloneStructValue(deadline)).Sub($.markAsStructValue($.cloneStructValue(now)))
			completionTime = $.assignStruct(completionTime, $.markAsStructValue($.cloneStructValue(now)).Add($.int64(globalThis.Math.fround(0.800000011920929 * globalThis.Math.fround(globalThis.Number(activityTimeout))))))
		}
	}

	let request: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null = new shared.ListWorkflowExecutionsRequest({Domain: params.value.Domain, Query: params.value.WorkflowQuery, NextPageToken: params.value.NextPageToken, PageSize: params.value.PageSize})
	let request$: shared.ListWorkflowExecutionsRequest = request == null ? $.pointerTarget<shared.ListWorkflowExecutionsRequest>(request) : (request as any).__isVarRef === true ? (request as any).value : (request as any).__goValue === undefined ? (request as any) : $.pointerTarget<shared.ListWorkflowExecutionsRequest>(request)

	let result = new shadower.ScanWorkflowActivityResult(undefined, true)
	while (true) {
		let resp: shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null = null! as shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null
		{
			let err = await backoff.Retry(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
				let __goscriptTuple0: any = await __goscript_internal_utils.newChannelContext(ctx, new __goscript_internal_utils.FeatureFlags(undefined, true), null)
				let tchCtx = __goscriptTuple0[0]
				let cancel = __goscriptTuple0[1]
				let opt: $.Slice<yarpc.CallOption> = __goscriptTuple0[2]

				let __goscriptShadow0: $.GoError = null! as $.GoError
				let __goscriptTuple1: any = await (service !== null && (service as any).__isVarRef !== true && (service as any).__goValue === undefined ? (service as Exclude<workflowserviceclient.Interface, null>) : $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(service)).ScanWorkflowExecutions(tchCtx, request, opt)
				resp = __goscriptTuple1[0]
				__goscriptShadow0 = __goscriptTuple1[1]
				void (__goscriptAwait = cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

				return __goscriptShadow0
			}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)), await __goscript_internal_retry.createDynamicServiceRetryPolicy(ctx), __goscript_internal_retry.isServiceTransientError)
			if (err != null) {
				await zap.Logger.prototype.Error.call(logger, "Failed to scan workflow executions", $.arrayToSlice<zap.Field>([zap.String("Domain", params.value.GetDomain()), zap.String("VisibilityQuery", params.value.GetWorkflowQuery()), zap.Error(err)]))
				return [new shadower.ScanWorkflowActivityResult(undefined, true), err]
			}
		}

		for (let __goscriptRangeTarget0 = $.pointerValue<shared.ListWorkflowExecutionsResponse>(resp).Executions, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let execution = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as shared.WorkflowExecutionInfo | $.VarRef<shared.WorkflowExecutionInfo> | null)
			if (await shouldReplay(params.value.GetSamplingRate())) {
				result.Executions = $.appendOne(result.Executions, $.pointerValue<shared.WorkflowExecutionInfo>(execution).Execution, $.appendZeros.nil)
			}
		}

		;(request$ as shared.ListWorkflowExecutionsRequest).NextPageToken = $.pointerValue<shared.ListWorkflowExecutionsResponse>(resp).NextPageToken
		if ((($.sliceLen((request$ as shared.ListWorkflowExecutionsRequest).NextPageToken) == 0) || ($.sliceLen(result.Executions) >= 10)) || (!$.markAsStructValue($.cloneStructValue(completionTime)).IsZero() && $.markAsStructValue($.cloneStructValue(time.Now())).After($.markAsStructValue($.cloneStructValue(completionTime))))) {
			result.NextPageToken = (request$ as shared.ListWorkflowExecutionsRequest).NextPageToken
			break
		}

		await time.Sleep(100000000n)
	}

	return [(result).clone(), null]
}

export async function shouldReplay(probability: number): globalThis.Promise<boolean> {
	if (probability == 0) {
		return true
	}

	return await rand.Float64() <= probability
}

export async function replayWorkflowActivity(ctx: context.Context | null, __goscriptParam1: shadower.ReplayWorkflowActivityParams): globalThis.Promise<[shadower.ReplayWorkflowActivityResult, $.GoError]> {
	let params: $.VarRef<shadower.ReplayWorkflowActivityParams> = $.varRef(__goscriptParam1)
	let logger: zap.Logger | $.VarRef<zap.Logger> | null = await __goscript_activity.GetActivityLogger(ctx)
	let scope = await __goscript_internal_worker.tagScope(await __goscript_activity.GetActivityMetricsScope(ctx), $.arrayToSlice<string>(["Domain", params.value.GetDomain(), "TaskList", (await __goscript_activity.GetActivityInfo(ctx)).TaskList]))
	let service = $.mustTypeAssert<workflowserviceclient.Interface | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("serviceClient", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "workflowserviceclient.Interface")
	let replayer: __goscript_workflow_replayer.WorkflowReplayer | $.VarRef<__goscript_workflow_replayer.WorkflowReplayer> | null = $.mustTypeAssert<__goscript_workflow_replayer.WorkflowReplayer | $.VarRef<__goscript_workflow_replayer.WorkflowReplayer> | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("workflowReplayer", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("internal.WorkflowReplayer"))

	let progress: $.VarRef<replayWorkflowActivityProgress> = $.varRef(new replayWorkflowActivityProgress(undefined, true))
	{
		let err = await __goscript_activity.GetHeartbeatDetails(ctx, $.arrayToSlice<any>([$.interfaceValue(progress, "*internal.replayWorkflowActivityProgress", /* @__PURE__ */ $.pointerType("internal.replayWorkflowActivityProgress"))]))
		if (err != null) {
			progress.value = $.assignStruct(progress.value, new replayWorkflowActivityProgress({NextExecutionIdx: 0, Result: (() => { const __goscriptLiteralField0 = common.Int32Ptr(0); const __goscriptLiteralField1 = common.Int32Ptr(0); const __goscriptLiteralField2 = common.Int32Ptr(0); return new shadower.ReplayWorkflowActivityResult({Succeeded: __goscriptLiteralField0, Skipped: __goscriptLiteralField1, Failed: __goscriptLiteralField2}, true) })()}, true))
		}
	}

	// following code assumes all pointers in progress.Result are not nil, this is ensured by:
	//   1. if not previous progress, init to pointer to 0
	//   2. if has previous progress, the progress uploaded during heartbeat has non nil pointers

	for (let __goscriptRangeTarget1 = $.goSlice(params.value.Executions, progress.value.NextExecutionIdx, undefined), __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let execution = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null)
		if (execution == null) {
			continue
		}

		let sw: metrics.DualStopwatch | $.VarRef<metrics.DualStopwatch> | null = await metrics.StartLatency(scope, metrics.ReplayLatency, ($.pointerValue<metrics.SubsettableHistogram>(metrics.Default1ms100s)).clone())
		let [success, err] = await replayWorkflowExecutionHelper(ctx, replayer, service, logger, params.value.GetDomain(), (() => { const __goscriptLiteralField3 = (execution !== null && (execution as any).__isVarRef !== true && (execution as any).__goValue === undefined ? ((execution as any) as shared.WorkflowExecution).GetWorkflowId() : shared.WorkflowExecution.prototype.GetWorkflowId.call(execution)); const __goscriptLiteralField4 = (execution !== null && (execution as any).__isVarRef !== true && (execution as any).__goValue === undefined ? ((execution as any) as shared.WorkflowExecution).GetRunId() : shared.WorkflowExecution.prototype.GetRunId.call(execution)); return new __goscript_workflow.WorkflowExecution({ID: __goscriptLiteralField3, RunID: __goscriptLiteralField4}, true) })())
		if (err != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? (scope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(scope)).Counter(metrics.ReplayFailedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			progress.value.Result.Failed!.value++
			if (await isWorkflowTypeNotRegisteredError(err)) {
				// this should fail the replay workflow as it requires worker deployment to fix the workflow registration.
				return [(progress.value.Result).clone(), $.interfaceValue<$.GoError>(await __goscript_error.NewCustomError(shadower.ErrReasonWorkflowTypeNotRegistered, $.arrayToSlice<any>([(__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)])), "*internal.CustomError", /* @__PURE__ */ $.pointerType("internal.CustomError"))]
			}
		} else {
			if (success) {
				void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? (scope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(scope)).Counter(metrics.ReplaySucceedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				progress.value.Result.Succeeded!.value++
			} else {
				void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? (scope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(scope)).Counter(metrics.ReplaySkippedCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				progress.value.Result.Skipped!.value++
			}
		}
		await (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? ((sw as any) as metrics.DualStopwatch).Stop() : metrics.DualStopwatch.prototype.Stop.call(sw))

		progress.value.NextExecutionIdx++
		await __goscript_activity.RecordActivityHeartbeat(ctx, $.arrayToSlice<any>([$.interfaceValue((progress.value).clone(), "internal.replayWorkflowActivityProgress", "internal.replayWorkflowActivityProgress")]))
	}

	return [(progress.value.Result).clone(), null]
}

export async function replayWorkflowExecutionHelper(ctx: context.Context | null, replayer: __goscript_workflow_replayer.WorkflowReplayer | $.VarRef<__goscript_workflow_replayer.WorkflowReplayer> | null, service: workflowserviceclient.Interface | null, logger: zap.Logger | $.VarRef<zap.Logger> | null, domain: string, execution: __goscript_workflow.WorkflowExecution): globalThis.Promise<[boolean, $.GoError]> {
	let taggedLogger: zap.Logger | $.VarRef<zap.Logger> | null = await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).With($.arrayToSlice<zap.Field>([zap.String("WorkflowID", execution.ID), zap.String("RunID", execution.RunID)])) : zap.Logger.prototype.With.call(logger, $.arrayToSlice<zap.Field>([zap.String("WorkflowID", execution.ID), zap.String("RunID", execution.RunID)])))

	let err = await (replayer !== null && (replayer as any).__isVarRef !== true && (replayer as any).__goValue === undefined ? ((replayer as any) as __goscript_workflow_replayer.WorkflowReplayer).ReplayWorkflowExecution(ctx, service, logger, domain, (execution).clone()) : __goscript_workflow_replayer.WorkflowReplayer.prototype.ReplayWorkflowExecution.call(replayer, ctx, service, logger, domain, (execution).clone()))
	if (err == null) {
		await (taggedLogger !== null && (taggedLogger as any).__isVarRef !== true && (taggedLogger as any).__goValue === undefined ? ((taggedLogger as any) as zap.Logger).Info("Successfully replayed workflow", null) : zap.Logger.prototype.Info.call(taggedLogger, "Successfully replayed workflow", null))
		return [true, null]
	}

	if (await isNondeterministicErr(err) || await isWorkflowTypeNotRegisteredError(err)) {
		await (taggedLogger !== null && (taggedLogger as any).__isVarRef !== true && (taggedLogger as any).__goValue === undefined ? ((taggedLogger as any) as zap.Logger).Error("Replay workflow failed", $.arrayToSlice<zap.Field>([zap.Error(err)])) : zap.Logger.prototype.Error.call(taggedLogger, "Replay workflow failed", $.arrayToSlice<zap.Field>([zap.Error(err)])))
		return [false, err]
	}

	await (taggedLogger !== null && (taggedLogger as any).__isVarRef !== true && (taggedLogger as any).__goValue === undefined ? ((taggedLogger as any) as zap.Logger).Info("Skipped replaying workflow", $.arrayToSlice<zap.Field>([zap.Error(err)])) : zap.Logger.prototype.Info.call(taggedLogger, "Skipped replaying workflow", $.arrayToSlice<zap.Field>([zap.Error(err)])))
	return [false, null]
}

export async function isNondeterministicErr(err: $.GoError): globalThis.Promise<boolean> {
	// There're a few expected replay errors, for example:
	//   1. errReplayHistoryTooShort
	//   2. workflow not exist
	//   3. internal service error when reading workflow history
	// since we can't get an exhaustive list of expected errors, we only treat replay as failed
	// when we are sure the error is due to non-determinisim to make sure there's no false positive.
	// as shadowing doesn't guarantee to catch all nondeterministic errors.
	return strings.Contains((__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "nondeterministic")
}

export async function isWorkflowTypeNotRegisteredError(err: $.GoError): globalThis.Promise<boolean> {
	return strings.Contains((__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "unable to find workflow type")
}

var __goscriptAwait: any
