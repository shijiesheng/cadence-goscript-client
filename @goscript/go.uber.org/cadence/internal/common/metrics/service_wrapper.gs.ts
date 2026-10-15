// Generated file based on service_wrapper.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as __goscript_constants from "./constants.gs.ts"

import * as __goscript_emit from "./emit.gs.ts"

import * as __goscript_histograms from "./histograms.gs.ts"
import "@goscript/context/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/yarpc/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "./constants.gs.ts"
import "./emit.gs.ts"
import "./histograms.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal/common/metrics", ["metrics.workflowServiceMetricsWrapper", "metrics.operationScope"])

export class workflowServiceMetricsWrapper {
	public get service(): workflowserviceclient.Interface | null {
		return this._fields.service
	}

	public set service(value: workflowserviceclient.Interface | null) {
		this._fields.service = value
	}

	public get scope(): tally.Scope | null {
		return this._fields.scope
	}

	public set scope(value: tally.Scope | null) {
		this._fields.scope = value
	}

	public get childScopes(): globalThis.Map<string, tally.Scope | null> | null {
		return this._fields.childScopes
	}

	public set childScopes(value: globalThis.Map<string, tally.Scope | null> | null) {
		this._fields.childScopes = value
	}

	public get mutex(): sync.Mutex {
		return this._fields.mutex
	}

	public set mutex(value: sync.Mutex) {
		this._fields.mutex = value
	}

	public _fields: {
		service: workflowserviceclient.Interface | null
		scope: tally.Scope | null
		childScopes: globalThis.Map<string, tally.Scope | null> | null
		mutex: sync.Mutex
	}

	constructor(init?: Partial<{service?: workflowserviceclient.Interface | null, scope?: tally.Scope | null, childScopes?: globalThis.Map<string, tally.Scope | null> | null, mutex?: sync.Mutex}>, __goscriptValue?: boolean) {
		this._fields = {
			service: init?.service ?? (null! as workflowserviceclient.Interface | null),
			scope: init?.scope ?? (null! as tally.Scope | null),
			childScopes: init?.childScopes ?? (null! as globalThis.Map<string, tally.Scope | null> | null),
			mutex: init?.mutex ? $.markAsStructValue($.cloneStructValue(init.mutex)) : $.markAsStructValue(new sync.Mutex())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowServiceMetricsWrapper {
		return new workflowServiceMetricsWrapper(this, true)
	}

	public __goscriptAssign(source: workflowServiceMetricsWrapper): void {
		const target = this._fields
		const values = source._fields
		target.service = $.assignFieldValue(target.service, values.service, "workflowserviceclient.Interface")
		target.scope = $.assignFieldValue(target.scope, values.scope, "tally.Scope")
		target.childScopes = values.childScopes
		$.assignStruct(target.mutex, values.mutex)
	}

	public async BackfillSchedule(ctx: context.Context | null, Request: shared.BackfillScheduleRequest | $.VarRef<shared.BackfillScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-BackfillSchedule") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-BackfillSchedule"))
		let __goscriptTuple0: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).BackfillSchedule(ctx, Request, opts)
		let result: shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async CountWorkflowExecutions(ctx: context.Context | null, request: shared.CountWorkflowExecutionsRequest | $.VarRef<shared.CountWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-CountWorkflowExecutions") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-CountWorkflowExecutions"))
		let __goscriptTuple1: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).CountWorkflowExecutions(ctx, request, opts)
		let result: shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async CreateSchedule(ctx: context.Context | null, Request: shared.CreateScheduleRequest | $.VarRef<shared.CreateScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-CreateSchedule") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-CreateSchedule"))
		let __goscriptTuple2: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).CreateSchedule(ctx, Request, opts)
		let result: shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async DeleteDomain(ctx: context.Context | null, request: shared.DeleteDomainRequest | $.VarRef<shared.DeleteDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-DeleteDomain") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-DeleteDomain"))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).DeleteDomain(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return err
	}

	public async DeleteSchedule(ctx: context.Context | null, Request: shared.DeleteScheduleRequest | $.VarRef<shared.DeleteScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-DeleteSchedule") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-DeleteSchedule"))
		let __goscriptTuple3: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).DeleteSchedule(ctx, Request, opts)
		let result: shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async DeprecateDomain(ctx: context.Context | null, request: shared.DeprecateDomainRequest | $.VarRef<shared.DeprecateDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-DeprecateDomain") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-DeprecateDomain"))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).DeprecateDomain(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return err
	}

	public async DescribeDomain(ctx: context.Context | null, request: shared.DescribeDomainRequest | $.VarRef<shared.DescribeDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-DescribeDomain") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-DescribeDomain"))
		let __goscriptTuple4: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).DescribeDomain(ctx, request, opts)
		let result: shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async DescribeSchedule(ctx: context.Context | null, Request: shared.DescribeScheduleRequest | $.VarRef<shared.DescribeScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-DescribeSchedule") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-DescribeSchedule"))
		let __goscriptTuple5: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).DescribeSchedule(ctx, Request, opts)
		let result: shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null = __goscriptTuple5[0]
		let err = __goscriptTuple5[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async DescribeTaskList(ctx: context.Context | null, request: shared.DescribeTaskListRequest | $.VarRef<shared.DescribeTaskListRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-DescribeTaskList") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-DescribeTaskList"))
		let __goscriptTuple6: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).DescribeTaskList(ctx, request, opts)
		let result: shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null = __goscriptTuple6[0]
		let err = __goscriptTuple6[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async DescribeWorkflowExecution(ctx: context.Context | null, request: shared.DescribeWorkflowExecutionRequest | $.VarRef<shared.DescribeWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-DescribeWorkflowExecution") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-DescribeWorkflowExecution"))
		let __goscriptTuple7: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).DescribeWorkflowExecution(ctx, request, opts)
		let result: shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async DiagnoseWorkflowExecution(ctx: context.Context | null, request: shared.DiagnoseWorkflowExecutionRequest | $.VarRef<shared.DiagnoseWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-DiagnoseWorkflowExecution") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-DiagnoseWorkflowExecution"))
		let __goscriptTuple8: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).DiagnoseWorkflowExecution(ctx, request, opts)
		let result: shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null = __goscriptTuple8[0]
		let err = __goscriptTuple8[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async FailoverDomain(ctx: context.Context | null, request: shared.FailoverDomainRequest | $.VarRef<shared.FailoverDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-FailoverDomain") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-FailoverDomain"))
		let __goscriptTuple9: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).FailoverDomain(ctx, request, opts)
		let result: shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null = __goscriptTuple9[0]
		let err = __goscriptTuple9[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async GetClusterInfo(ctx: context.Context | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-GetClusterInfo") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-GetClusterInfo"))
		let __goscriptTuple10: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).GetClusterInfo(ctx, opts)
		let result: shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null = __goscriptTuple10[0]
		let err = __goscriptTuple10[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async GetSearchAttributes(ctx: context.Context | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-GetSearchAttributes") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-GetSearchAttributes"))
		let __goscriptTuple11: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).GetSearchAttributes(ctx, opts)
		let result: shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null = __goscriptTuple11[0]
		let err = __goscriptTuple11[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async GetTaskListsByDomain(ctx: context.Context | null, request: shared.GetTaskListsByDomainRequest | $.VarRef<shared.GetTaskListsByDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-GetTaskListsByDomain") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-GetTaskListsByDomain"))
		let __goscriptTuple12: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).GetTaskListsByDomain(ctx, request, opts)
		let result: shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null = __goscriptTuple12[0]
		let err = __goscriptTuple12[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async GetWorkflowExecutionHistory(ctx: context.Context | null, request: shared.GetWorkflowExecutionHistoryRequest | $.VarRef<shared.GetWorkflowExecutionHistoryRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-GetWorkflowExecutionHistory") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-GetWorkflowExecutionHistory"))
		let __goscriptTuple13: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).GetWorkflowExecutionHistory(ctx, request, opts)
		let result: shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null = __goscriptTuple13[0]
		let err = __goscriptTuple13[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async ListArchivedWorkflowExecutions(ctx: context.Context | null, request: shared.ListArchivedWorkflowExecutionsRequest | $.VarRef<shared.ListArchivedWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-ListArchivedWorkflowExecutions") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-ListArchivedWorkflowExecutions"))
		let __goscriptTuple14: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).ListArchivedWorkflowExecutions(ctx, request, opts)
		let result: shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null = __goscriptTuple14[0]
		let err = __goscriptTuple14[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async ListClosedWorkflowExecutions(ctx: context.Context | null, request: shared.ListClosedWorkflowExecutionsRequest | $.VarRef<shared.ListClosedWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-ListClosedWorkflowExecutions") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-ListClosedWorkflowExecutions"))
		let __goscriptTuple15: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).ListClosedWorkflowExecutions(ctx, request, opts)
		let result: shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null = __goscriptTuple15[0]
		let err = __goscriptTuple15[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async ListDomains(ctx: context.Context | null, request: shared.ListDomainsRequest | $.VarRef<shared.ListDomainsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-ListDomains") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-ListDomains"))
		let __goscriptTuple16: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).ListDomains(ctx, request, opts)
		let result: shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null = __goscriptTuple16[0]
		let err = __goscriptTuple16[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async ListFailoverHistory(ctx: context.Context | null, request: shared.ListFailoverHistoryRequest | $.VarRef<shared.ListFailoverHistoryRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-ListFailoverHistory") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-ListFailoverHistory"))
		let __goscriptTuple17: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).ListFailoverHistory(ctx, request, opts)
		let result: shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null = __goscriptTuple17[0]
		let err = __goscriptTuple17[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async ListOpenWorkflowExecutions(ctx: context.Context | null, request: shared.ListOpenWorkflowExecutionsRequest | $.VarRef<shared.ListOpenWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-ListOpenWorkflowExecutions") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-ListOpenWorkflowExecutions"))
		let __goscriptTuple18: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).ListOpenWorkflowExecutions(ctx, request, opts)
		let result: shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null = __goscriptTuple18[0]
		let err = __goscriptTuple18[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async ListSchedules(ctx: context.Context | null, Request: shared.ListSchedulesRequest | $.VarRef<shared.ListSchedulesRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-ListSchedules") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-ListSchedules"))
		let __goscriptTuple19: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).ListSchedules(ctx, Request, opts)
		let result: shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null = __goscriptTuple19[0]
		let err = __goscriptTuple19[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async ListTaskListPartitions(ctx: context.Context | null, request: shared.ListTaskListPartitionsRequest | $.VarRef<shared.ListTaskListPartitionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-ListTaskListPartitions") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-ListTaskListPartitions"))
		let __goscriptTuple20: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).ListTaskListPartitions(ctx, request, opts)
		let result: shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null = __goscriptTuple20[0]
		let err = __goscriptTuple20[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async ListWorkflowExecutions(ctx: context.Context | null, request: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-ListWorkflowExecutions") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-ListWorkflowExecutions"))
		let __goscriptTuple21: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).ListWorkflowExecutions(ctx, request, opts)
		let result: shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null = __goscriptTuple21[0]
		let err = __goscriptTuple21[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async PauseSchedule(ctx: context.Context | null, Request: shared.PauseScheduleRequest | $.VarRef<shared.PauseScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-PauseSchedule") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-PauseSchedule"))
		let __goscriptTuple22: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).PauseSchedule(ctx, Request, opts)
		let result: shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null = __goscriptTuple22[0]
		let err = __goscriptTuple22[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async PollForActivityTask(ctx: context.Context | null, request: shared.PollForActivityTaskRequest | $.VarRef<shared.PollForActivityTaskRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-PollForActivityTask") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-PollForActivityTask"))
		let __goscriptTuple23: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).PollForActivityTask(ctx, request, opts)
		let result: shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null = __goscriptTuple23[0]
		let err = __goscriptTuple23[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async PollForDecisionTask(ctx: context.Context | null, request: shared.PollForDecisionTaskRequest | $.VarRef<shared.PollForDecisionTaskRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-PollForDecisionTask") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-PollForDecisionTask"))
		let __goscriptTuple24: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).PollForDecisionTask(ctx, request, opts)
		let result: shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null = __goscriptTuple24[0]
		let err = __goscriptTuple24[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async QueryWorkflow(ctx: context.Context | null, request: shared.QueryWorkflowRequest | $.VarRef<shared.QueryWorkflowRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-QueryWorkflow") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-QueryWorkflow"))
		let __goscriptTuple25: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).QueryWorkflow(ctx, request, opts)
		let result: shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null = __goscriptTuple25[0]
		let err = __goscriptTuple25[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async RecordActivityTaskHeartbeat(ctx: context.Context | null, request: shared.RecordActivityTaskHeartbeatRequest | $.VarRef<shared.RecordActivityTaskHeartbeatRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-RecordActivityTaskHeartbeat") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-RecordActivityTaskHeartbeat"))
		let __goscriptTuple26: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).RecordActivityTaskHeartbeat(ctx, request, opts)
		let result: shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null = __goscriptTuple26[0]
		let err = __goscriptTuple26[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async RecordActivityTaskHeartbeatByID(ctx: context.Context | null, request: shared.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<shared.RecordActivityTaskHeartbeatByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-RecordActivityTaskHeartbeatByID") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-RecordActivityTaskHeartbeatByID"))
		let __goscriptTuple27: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).RecordActivityTaskHeartbeatByID(ctx, request, opts)
		let result: shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null = __goscriptTuple27[0]
		let err = __goscriptTuple27[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async RefreshWorkflowTasks(ctx: context.Context | null, request: shared.RefreshWorkflowTasksRequest | $.VarRef<shared.RefreshWorkflowTasksRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-RefreshWorkflowTasks") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-RefreshWorkflowTasks"))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).RefreshWorkflowTasks(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return err
	}

	public async RegisterDomain(ctx: context.Context | null, request: shared.RegisterDomainRequest | $.VarRef<shared.RegisterDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-RegisterDomain") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-RegisterDomain"))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).RegisterDomain(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return err
	}

	public async RequestCancelWorkflowExecution(ctx: context.Context | null, request: shared.RequestCancelWorkflowExecutionRequest | $.VarRef<shared.RequestCancelWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-RequestCancelWorkflowExecution") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-RequestCancelWorkflowExecution"))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).RequestCancelWorkflowExecution(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return err
	}

	public async ResetStickyTaskList(ctx: context.Context | null, request: shared.ResetStickyTaskListRequest | $.VarRef<shared.ResetStickyTaskListRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-ResetStickyTaskList") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-ResetStickyTaskList"))
		let __goscriptTuple28: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).ResetStickyTaskList(ctx, request, opts)
		let result: shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null = __goscriptTuple28[0]
		let err = __goscriptTuple28[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async ResetWorkflowExecution(ctx: context.Context | null, request: shared.ResetWorkflowExecutionRequest | $.VarRef<shared.ResetWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-ResetWorkflowExecution") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-ResetWorkflowExecution"))
		let __goscriptTuple29: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).ResetWorkflowExecution(ctx, request, opts)
		let result: shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null = __goscriptTuple29[0]
		let err = __goscriptTuple29[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async RespondActivityTaskCanceled(ctx: context.Context | null, request: shared.RespondActivityTaskCanceledRequest | $.VarRef<shared.RespondActivityTaskCanceledRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-RespondActivityTaskCanceled") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-RespondActivityTaskCanceled"))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).RespondActivityTaskCanceled(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return err
	}

	public async RespondActivityTaskCanceledByID(ctx: context.Context | null, request: shared.RespondActivityTaskCanceledByIDRequest | $.VarRef<shared.RespondActivityTaskCanceledByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-RespondActivityTaskCanceledByID") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-RespondActivityTaskCanceledByID"))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).RespondActivityTaskCanceledByID(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return err
	}

	public async RespondActivityTaskCompleted(ctx: context.Context | null, request: shared.RespondActivityTaskCompletedRequest | $.VarRef<shared.RespondActivityTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-RespondActivityTaskCompleted") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-RespondActivityTaskCompleted"))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).RespondActivityTaskCompleted(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return err
	}

	public async RespondActivityTaskCompletedByID(ctx: context.Context | null, request: shared.RespondActivityTaskCompletedByIDRequest | $.VarRef<shared.RespondActivityTaskCompletedByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-RespondActivityTaskCompletedByID") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-RespondActivityTaskCompletedByID"))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).RespondActivityTaskCompletedByID(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return err
	}

	public async RespondActivityTaskFailed(ctx: context.Context | null, request: shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-RespondActivityTaskFailed") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-RespondActivityTaskFailed"))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).RespondActivityTaskFailed(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return err
	}

	public async RespondActivityTaskFailedByID(ctx: context.Context | null, request: shared.RespondActivityTaskFailedByIDRequest | $.VarRef<shared.RespondActivityTaskFailedByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-RespondActivityTaskFailedByID") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-RespondActivityTaskFailedByID"))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).RespondActivityTaskFailedByID(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return err
	}

	public async RespondDecisionTaskCompleted(ctx: context.Context | null, request: shared.RespondDecisionTaskCompletedRequest | $.VarRef<shared.RespondDecisionTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-RespondDecisionTaskCompleted") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-RespondDecisionTaskCompleted"))
		let __goscriptTuple30: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).RespondDecisionTaskCompleted(ctx, request, opts)
		let response: shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null = __goscriptTuple30[0]
		let err = __goscriptTuple30[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [response, err]
	}

	public async RespondDecisionTaskFailed(ctx: context.Context | null, request: shared.RespondDecisionTaskFailedRequest | $.VarRef<shared.RespondDecisionTaskFailedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-RespondDecisionTaskFailed") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-RespondDecisionTaskFailed"))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).RespondDecisionTaskFailed(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return err
	}

	public async RespondQueryTaskCompleted(ctx: context.Context | null, request: shared.RespondQueryTaskCompletedRequest | $.VarRef<shared.RespondQueryTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-RespondQueryTaskCompleted") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-RespondQueryTaskCompleted"))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).RespondQueryTaskCompleted(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return err
	}

	public async RestartWorkflowExecution(ctx: context.Context | null, request: shared.RestartWorkflowExecutionRequest | $.VarRef<shared.RestartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-RestartWorkflowExecution") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-RestartWorkflowExecution"))
		let __goscriptTuple31: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).RestartWorkflowExecution(ctx, request, opts)
		let resp: shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null = __goscriptTuple31[0]
		let err = __goscriptTuple31[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [resp, err]
	}

	public async ScanWorkflowExecutions(ctx: context.Context | null, request: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-ScanWorkflowExecutions") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-ScanWorkflowExecutions"))
		let __goscriptTuple32: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).ScanWorkflowExecutions(ctx, request, opts)
		let result: shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null = __goscriptTuple32[0]
		let err = __goscriptTuple32[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async SignalWithStartWorkflowExecution(ctx: context.Context | null, request: shared.SignalWithStartWorkflowExecutionRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-SignalWithStartWorkflowExecution") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-SignalWithStartWorkflowExecution"))
		let __goscriptTuple33: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).SignalWithStartWorkflowExecution(ctx, request, opts)
		let result: shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null = __goscriptTuple33[0]
		let err = __goscriptTuple33[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async SignalWithStartWorkflowExecutionAsync(ctx: context.Context | null, request: shared.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-SignalWithStartWorkflowExecutionAsync") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-SignalWithStartWorkflowExecutionAsync"))
		let __goscriptTuple34: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).SignalWithStartWorkflowExecutionAsync(ctx, request, opts)
		let result: shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null = __goscriptTuple34[0]
		let err = __goscriptTuple34[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async SignalWorkflowExecution(ctx: context.Context | null, request: shared.SignalWorkflowExecutionRequest | $.VarRef<shared.SignalWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-SignalWorkflowExecution") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-SignalWorkflowExecution"))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).SignalWorkflowExecution(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return err
	}

	public async StartWorkflowExecution(ctx: context.Context | null, request: shared.StartWorkflowExecutionRequest | $.VarRef<shared.StartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-StartWorkflowExecution") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-StartWorkflowExecution"))
		let __goscriptTuple35: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).StartWorkflowExecution(ctx, request, opts)
		let result: shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null = __goscriptTuple35[0]
		let err = __goscriptTuple35[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async StartWorkflowExecutionAsync(ctx: context.Context | null, request: shared.StartWorkflowExecutionAsyncRequest | $.VarRef<shared.StartWorkflowExecutionAsyncRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-StartWorkflowExecutionAsync") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-StartWorkflowExecutionAsync"))
		let __goscriptTuple36: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).StartWorkflowExecutionAsync(ctx, request, opts)
		let result: shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null = __goscriptTuple36[0]
		let err = __goscriptTuple36[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async TerminateWorkflowExecution(ctx: context.Context | null, request: shared.TerminateWorkflowExecutionRequest | $.VarRef<shared.TerminateWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-TerminateWorkflowExecution") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-TerminateWorkflowExecution"))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).TerminateWorkflowExecution(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return err
	}

	public async UnpauseSchedule(ctx: context.Context | null, Request: shared.UnpauseScheduleRequest | $.VarRef<shared.UnpauseScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-UnpauseSchedule") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-UnpauseSchedule"))
		let __goscriptTuple37: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).UnpauseSchedule(ctx, Request, opts)
		let result: shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null = __goscriptTuple37[0]
		let err = __goscriptTuple37[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async UpdateDomain(ctx: context.Context | null, request: shared.UpdateDomainRequest | $.VarRef<shared.UpdateDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-UpdateDomain") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-UpdateDomain"))
		let __goscriptTuple38: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).UpdateDomain(ctx, request, opts)
		let result: shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null = __goscriptTuple38[0]
		let err = __goscriptTuple38[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async UpdateSchedule(ctx: context.Context | null, Request: shared.UpdateScheduleRequest | $.VarRef<shared.UpdateScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null, $.GoError]> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope: operationScope | $.VarRef<operationScope> | null = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getOperationScope("cadence-UpdateSchedule") : workflowServiceMetricsWrapper.prototype.getOperationScope.call(w, "cadence-UpdateSchedule"))
		let __goscriptTuple39: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceMetricsWrapper>(w).service).UpdateSchedule(ctx, Request, opts)
		let result: shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null = __goscriptTuple39[0]
		let err = __goscriptTuple39[1]
		await (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? ((scope as any) as operationScope).handleError(err) : operationScope.prototype.handleError.call(scope, err))
		return [result, err]
	}

	public async getOperationScope(scopeName: string): globalThis.Promise<operationScope | $.VarRef<operationScope> | null> {
		const w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		let scope = await (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceMetricsWrapper).getScope(scopeName) : workflowServiceMetricsWrapper.prototype.getScope.call(w, scopeName))
		void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = (scope !== null && (scope as any).__isVarRef !== true && (scope as any).__goValue === undefined ? (scope as Exclude<tally.Scope, null>) : $.pointerValue<Exclude<tally.Scope, null>>(scope)).Counter("cadence-request"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		return (() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(time.Now())); return new operationScope({scope: scope, startTime: __goscriptLiteralField0}) })()
	}

	public async getScope(scopeName: string): globalThis.Promise<tally.Scope | null> {
		let w: workflowServiceMetricsWrapper | $.VarRef<workflowServiceMetricsWrapper> | null = this;
		const w$: workflowServiceMetricsWrapper = w == null ? $.pointerTarget<workflowServiceMetricsWrapper>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowServiceMetricsWrapper>(w)
		await (w$ as workflowServiceMetricsWrapper).mutex.Lock()
		let [scope, ok] = $.mapGet<string, tally.Scope | null, tally.Scope | null>((w$ as workflowServiceMetricsWrapper).childScopes, scopeName, null)
		if (ok) {
			void (w$ as workflowServiceMetricsWrapper).mutex.Unlock()
			return scope
		}
		scope = (__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((w$ as workflowServiceMetricsWrapper).scope).SubScope(scopeName), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		$.mapSet((w$ as workflowServiceMetricsWrapper).childScopes, scopeName, scope)
		void (w$ as workflowServiceMetricsWrapper).mutex.Unlock()
		return scope
	}

	static __typeInfo = $.registerStructType(
		"metrics.workflowServiceMetricsWrapper",
		() => new workflowServiceMetricsWrapper(),
		() => [$.methodSignature("BackfillSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.BackfillScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.BackfillScheduleResponse"), "error"], true), $.methodSignature("CountWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.CountWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.CountWorkflowExecutionsResponse"), "error"], true), $.methodSignature("CreateSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.CreateScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.CreateScheduleResponse"), "error"], true), $.methodSignature("DeleteDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.DeleteDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("DeleteSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.DeleteScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DeleteScheduleResponse"), "error"], true), $.methodSignature("DeprecateDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.DeprecateDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("DescribeDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.DescribeDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DescribeDomainResponse"), "error"], true), $.methodSignature("DescribeSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.DescribeScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DescribeScheduleResponse"), "error"], true), $.methodSignature("DescribeTaskList", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.DescribeTaskListRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DescribeTaskListResponse"), "error"], true), $.methodSignature("DescribeWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.DescribeWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DescribeWorkflowExecutionResponse"), "error"], true), $.methodSignature("DiagnoseWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.DiagnoseWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DiagnoseWorkflowExecutionResponse"), "error"], true), $.methodSignature("FailoverDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.FailoverDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.FailoverDomainResponse"), "error"], true), $.methodSignature("GetClusterInfo", [["ctx", "context.Context"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ClusterInfo"), "error"], true), $.methodSignature("GetSearchAttributes", [["ctx", "context.Context"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.GetSearchAttributesResponse"), "error"], true), $.methodSignature("GetTaskListsByDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.GetTaskListsByDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.GetTaskListsByDomainResponse"), "error"], true), $.methodSignature("GetWorkflowExecutionHistory", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.GetWorkflowExecutionHistoryRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.GetWorkflowExecutionHistoryResponse"), "error"], true), $.methodSignature("ListArchivedWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListArchivedWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListArchivedWorkflowExecutionsResponse"), "error"], true), $.methodSignature("ListClosedWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListClosedWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListClosedWorkflowExecutionsResponse"), "error"], true), $.methodSignature("ListDomains", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListDomainsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListDomainsResponse"), "error"], true), $.methodSignature("ListFailoverHistory", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListFailoverHistoryRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListFailoverHistoryResponse"), "error"], true), $.methodSignature("ListOpenWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListOpenWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListOpenWorkflowExecutionsResponse"), "error"], true), $.methodSignature("ListSchedules", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.ListSchedulesRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListSchedulesResponse"), "error"], true), $.methodSignature("ListTaskListPartitions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListTaskListPartitionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListTaskListPartitionsResponse"), "error"], true), $.methodSignature("ListWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse"), "error"], true), $.methodSignature("PauseSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.PauseScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.PauseScheduleResponse"), "error"], true), $.methodSignature("PollForActivityTask", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.PollForActivityTaskRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse"), "error"], true), $.methodSignature("PollForDecisionTask", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse"), "error"], true), $.methodSignature("QueryWorkflow", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.QueryWorkflowRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.QueryWorkflowResponse"), "error"], true), $.methodSignature("RecordActivityTaskHeartbeat", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatResponse"), "error"], true), $.methodSignature("RecordActivityTaskHeartbeatByID", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatResponse"), "error"], true), $.methodSignature("RefreshWorkflowTasks", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RefreshWorkflowTasksRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RegisterDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RegisterDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RequestCancelWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RequestCancelWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("ResetStickyTaskList", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ResetStickyTaskListRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ResetStickyTaskListResponse"), "error"], true), $.methodSignature("ResetWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ResetWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ResetWorkflowExecutionResponse"), "error"], true), $.methodSignature("RespondActivityTaskCanceled", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RespondActivityTaskCanceledByID", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RespondActivityTaskCompleted", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RespondActivityTaskCompletedByID", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RespondActivityTaskFailed", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RespondActivityTaskFailedByID", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RespondDecisionTaskCompleted", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedResponse"), "error"], true), $.methodSignature("RespondDecisionTaskFailed", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskFailedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RespondQueryTaskCompleted", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondQueryTaskCompletedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RestartWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RestartWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.RestartWorkflowExecutionResponse"), "error"], true), $.methodSignature("ScanWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse"), "error"], true), $.methodSignature("SignalWithStartWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionResponse"), "error"], true), $.methodSignature("SignalWithStartWorkflowExecutionAsync", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionAsyncRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionAsyncResponse"), "error"], true), $.methodSignature("SignalWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.SignalWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("StartWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionResponse"), "error"], true), $.methodSignature("StartWorkflowExecutionAsync", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionAsyncRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionAsyncResponse"), "error"], true), $.methodSignature("TerminateWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.TerminateWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("UnpauseSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.UnpauseScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.UnpauseScheduleResponse"), "error"], true), $.methodSignature("UpdateDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.UpdateDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.UpdateDomainResponse"), "error"], true), $.methodSignature("UpdateSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.UpdateScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.UpdateScheduleResponse"), "error"], true), $.methodSignature("getOperationScope", [["scopeName", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("metrics.operationScope")], true), $.methodSignature("getScope", [["scopeName", /* @__PURE__ */ $.basicType("string")]], ["tally.Scope"], true)],
		workflowServiceMetricsWrapper,
		() => [/* @__PURE__ */ $.structField("service", "workflowserviceclient.Interface", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("scope", "tally.Scope", [1], 16, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("childScopes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tally.Scope"), [2], 32, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("mutex", "sync.Mutex", [3], 40, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" })]
	)
}

export class operationScope {
	public get scope(): tally.Scope | null {
		return this._fields.scope
	}

	public set scope(value: tally.Scope | null) {
		this._fields.scope = value
	}

	public get startTime(): time.Time {
		return this._fields.startTime
	}

	public set startTime(value: time.Time) {
		this._fields.startTime = value
	}

	public _fields: {
		scope: tally.Scope | null
		startTime: time.Time
	}

	constructor(init?: Partial<{scope?: tally.Scope | null, startTime?: time.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			scope: init?.scope ?? (null! as tally.Scope | null),
			startTime: init?.startTime ? $.markAsStructValue($.cloneStructValue(init.startTime)) : $.markAsStructValue(new time.Time())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): operationScope {
		return new operationScope(this, true)
	}

	public __goscriptAssign(source: operationScope): void {
		const target = this._fields
		const values = source._fields
		target.scope = $.assignFieldValue(target.scope, values.scope, "tally.Scope")
		$.assignStruct(target.startTime, values.startTime)
	}

	public async handleError(err: $.GoError): globalThis.Promise<void> {
		const s: operationScope | $.VarRef<operationScope> | null = this;
		const s$: operationScope = s == null ? $.pointerTarget<operationScope>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<operationScope>(s)
		await __goscript_emit.EmitLatency((s$ as operationScope).scope, "cadence-latency", time.Since($.markAsStructValue($.cloneStructValue((s$ as operationScope).startTime))), (__goscript_histograms.Default1ms100s).clone())
		if (err != null) {
			{
				const __goscriptTypeSwitchValue = err
				switch (true) {
					case $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.EntityNotExistsError")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.BadRequestError")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.DomainAlreadyExistsError")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyStartedError")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyCompletedError")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.QueryFailedError")):
						{
							void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((s$ as operationScope).scope).Counter("cadence-invalid-request"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
						break
					default:
						{
							void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((s$ as operationScope).scope).Counter("cadence-error"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
						break
				}
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"metrics.operationScope",
		() => new operationScope(),
		() => [$.methodSignature("handleError", [["err", "error"]], [], true)],
		operationScope,
		() => [/* @__PURE__ */ $.structField("scope", "tally.Scope", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" }), /* @__PURE__ */ $.structField("startTime", "time.Time", [1], 16, false, { pkgPath: "go.uber.org/cadence/internal/common/metrics" })]
	)
}

export const scopeNameDeprecateDomain: string = "cadence-DeprecateDomain"

export const scopeNameDescribeDomain: string = "cadence-DescribeDomain"

export const scopeNameListDomains: string = "cadence-ListDomains"

export const scopeNameGetWorkflowExecutionHistory: string = "cadence-GetWorkflowExecutionHistory"

export const scopeNameGetWorkflowExecutionRawHistory: string = "cadence-GetWorkflowExecutionRawHistory"

export const scopeNamePollForWorkflowExecutionRawHistory: string = "cadence-PollForWorkflowExecutionRawHistory"

export const scopeNameListClosedWorkflowExecutions: string = "cadence-ListClosedWorkflowExecutions"

export const scopeNameListOpenWorkflowExecutions: string = "cadence-ListOpenWorkflowExecutions"

export const scopeNameListWorkflowExecutions: string = "cadence-ListWorkflowExecutions"

export const scopeNameListArchivedWorkflowExecutions: string = "cadence-ListArchivedWorkflowExecutions"

export const scopeNameScanWorkflowExecutions: string = "cadence-ScanWorkflowExecutions"

export const scopeNameCountWorkflowExecutions: string = "cadence-CountWorkflowExecutions"

export const scopeNamePollForActivityTask: string = "cadence-PollForActivityTask"

export const scopeNamePollForDecisionTask: string = "cadence-PollForDecisionTask"

export const scopeNameRecordActivityTaskHeartbeat: string = "cadence-RecordActivityTaskHeartbeat"

export const scopeNameRecordActivityTaskHeartbeatByID: string = "cadence-RecordActivityTaskHeartbeatByID"

export const scopeNameRegisterDomain: string = "cadence-RegisterDomain"

export const scopeNameRequestCancelWorkflowExecution: string = "cadence-RequestCancelWorkflowExecution"

export const scopeNameRespondActivityTaskCanceled: string = "cadence-RespondActivityTaskCanceled"

export const scopeNameRespondActivityTaskCompleted: string = "cadence-RespondActivityTaskCompleted"

export const scopeNameRespondActivityTaskFailed: string = "cadence-RespondActivityTaskFailed"

export const scopeNameRespondActivityTaskCanceledByID: string = "cadence-RespondActivityTaskCanceledByID"

export const scopeNameRespondActivityTaskCompletedByID: string = "cadence-RespondActivityTaskCompletedByID"

export const scopeNameRespondActivityTaskFailedByID: string = "cadence-RespondActivityTaskFailedByID"

export const scopeNameRespondDecisionTaskCompleted: string = "cadence-RespondDecisionTaskCompleted"

export const scopeNameRespondDecisionTaskFailed: string = "cadence-RespondDecisionTaskFailed"

export const scopeNameSignalWorkflowExecution: string = "cadence-SignalWorkflowExecution"

export const scopeNameSignalWithStartWorkflowExecution: string = "cadence-SignalWithStartWorkflowExecution"

export const scopeNameSignalWithStartWorkflowExecutionAsync: string = "cadence-SignalWithStartWorkflowExecutionAsync"

export const scopeNameStartWorkflowExecution: string = "cadence-StartWorkflowExecution"

export const scopeNameStartWorkflowExecutionAsync: string = "cadence-StartWorkflowExecutionAsync"

export const scopeNameTerminateWorkflowExecution: string = "cadence-TerminateWorkflowExecution"

export const scopeNameResetWorkflowExecution: string = "cadence-ResetWorkflowExecution"

export const scopeNameUpdateDomain: string = "cadence-UpdateDomain"

export const scopeNameQueryWorkflow: string = "cadence-QueryWorkflow"

export const scopeNameDescribeTaskList: string = "cadence-DescribeTaskList"

export const scopeNameRespondQueryTaskCompleted: string = "cadence-RespondQueryTaskCompleted"

export const scopeNameDescribeWorkflowExecution: string = "cadence-DescribeWorkflowExecution"

export const scopeNameDiagnoseWorkflowExecution: string = "cadence-DiagnoseWorkflowExecution"

export const scopeNameResetStickyTaskList: string = "cadence-ResetStickyTaskList"

export const scopeNameGetSearchAttributes: string = "cadence-GetSearchAttributes"

export const scopeNameListTaskListPartitions: string = "cadence-ListTaskListPartitions"

export const scopeNameGetClusterInfo: string = "cadence-GetClusterInfo"

export const scopeRefreshWorkflowTasks: string = "cadence-RefreshWorkflowTasks"

export const scopeNameGetTaskListsByDomain: string = "cadence-GetTaskListsByDomain"

export const scopeRestartWorkflowExecution: string = "cadence-RestartWorkflowExecution"

export const scopeDeleteDomain: string = "cadence-DeleteDomain"

export const scopeNameFailoverDomain: string = "cadence-FailoverDomain"

export const scopeNameListFailoverHistory: string = "cadence-ListFailoverHistory"

export const scopeNameBackfillSchedule: string = "cadence-BackfillSchedule"

export const scopeNameCreateSchedule: string = "cadence-CreateSchedule"

export const scopeNameDeleteSchedule: string = "cadence-DeleteSchedule"

export const scopeNameDescribeSchedule: string = "cadence-DescribeSchedule"

export const scopeNameListSchedules: string = "cadence-ListSchedules"

export const scopeNamePauseSchedule: string = "cadence-PauseSchedule"

export const scopeNameUnpauseSchedule: string = "cadence-UnpauseSchedule"

export const scopeNameUpdateSchedule: string = "cadence-UpdateSchedule"

export function NewWorkflowServiceWrapper(service: workflowserviceclient.Interface | null, scope: tally.Scope | null): workflowserviceclient.Interface | null {
	return $.interfaceValue<workflowserviceclient.Interface | null>(new workflowServiceMetricsWrapper({service: service, scope: scope, childScopes: $.makeMap<string, tally.Scope | null>()}), "*metrics.workflowServiceMetricsWrapper", /* @__PURE__ */ $.pointerType("metrics.workflowServiceMetricsWrapper"))
}

var __goscriptAwait: any
