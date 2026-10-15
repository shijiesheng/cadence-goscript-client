// Generated file based on service_wrapper.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal/common/isolationgroup", ["isolationgroup.workflowServiceIsolationGroupWrapper"])

export class workflowServiceIsolationGroupWrapper {
	public get service(): workflowserviceclient.Interface | null {
		return this._fields.service
	}

	public set service(value: workflowserviceclient.Interface | null) {
		this._fields.service = value
	}

	public get isolationGroupIdentifier(): string {
		return this._fields.isolationGroupIdentifier
	}

	public set isolationGroupIdentifier(value: string) {
		this._fields.isolationGroupIdentifier = value
	}

	public _fields: {
		service: workflowserviceclient.Interface | null
		isolationGroupIdentifier: string
	}

	constructor(init?: Partial<{service?: workflowserviceclient.Interface | null, isolationGroupIdentifier?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			service: init?.service ?? (null! as workflowserviceclient.Interface | null),
			isolationGroupIdentifier: init?.isolationGroupIdentifier ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowServiceIsolationGroupWrapper {
		return new workflowServiceIsolationGroupWrapper(this, true)
	}

	public __goscriptAssign(source: workflowServiceIsolationGroupWrapper): void {
		const target = this._fields
		const values = source._fields
		target.service = $.assignFieldValue(target.service, values.service, "workflowserviceclient.Interface")
		target.isolationGroupIdentifier = values.isolationGroupIdentifier
	}

	public async BackfillSchedule(ctx: context.Context | null, Request: shared.BackfillScheduleRequest | $.VarRef<shared.BackfillScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		return $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).BackfillSchedule(ctx, Request, opts)
	}

	public async CountWorkflowExecutions(ctx: context.Context | null, request: shared.CountWorkflowExecutionsRequest | $.VarRef<shared.CountWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple0: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).CountWorkflowExecutions(ctx, request, opts)
		let result: shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		return [result, err]
	}

	public async CreateSchedule(ctx: context.Context | null, Request: shared.CreateScheduleRequest | $.VarRef<shared.CreateScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		return $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).CreateSchedule(ctx, Request, opts)
	}

	public async DeleteDomain(ctx: context.Context | null, DeleteRequest: shared.DeleteDomainRequest | $.VarRef<shared.DeleteDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		return $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).DeleteDomain(ctx, DeleteRequest, opts)
	}

	public async DeleteSchedule(ctx: context.Context | null, Request: shared.DeleteScheduleRequest | $.VarRef<shared.DeleteScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		return $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).DeleteSchedule(ctx, Request, opts)
	}

	public async DeprecateDomain(ctx: context.Context | null, request: shared.DeprecateDomainRequest | $.VarRef<shared.DeprecateDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		return $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).DeprecateDomain(ctx, request, opts)
	}

	public async DescribeDomain(ctx: context.Context | null, request: shared.DescribeDomainRequest | $.VarRef<shared.DescribeDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple1: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).DescribeDomain(ctx, request, opts)
		let result: shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		return [result, err]
	}

	public async DescribeSchedule(ctx: context.Context | null, Request: shared.DescribeScheduleRequest | $.VarRef<shared.DescribeScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		return $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).DescribeSchedule(ctx, Request, opts)
	}

	public async DescribeTaskList(ctx: context.Context | null, request: shared.DescribeTaskListRequest | $.VarRef<shared.DescribeTaskListRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple2: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).DescribeTaskList(ctx, request, opts)
		let result: shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		return [result, err]
	}

	public async DescribeWorkflowExecution(ctx: context.Context | null, request: shared.DescribeWorkflowExecutionRequest | $.VarRef<shared.DescribeWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple3: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).DescribeWorkflowExecution(ctx, request, opts)
		let result: shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		return [result, err]
	}

	public async DiagnoseWorkflowExecution(ctx: context.Context | null, request: shared.DiagnoseWorkflowExecutionRequest | $.VarRef<shared.DiagnoseWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple4: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).DiagnoseWorkflowExecution(ctx, request, opts)
		let result: shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		return [result, err]
	}

	public async FailoverDomain(ctx: context.Context | null, request: shared.FailoverDomainRequest | $.VarRef<shared.FailoverDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple5: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).FailoverDomain(ctx, request, opts)
		let result: shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null = __goscriptTuple5[0]
		let err = __goscriptTuple5[1]
		return [result, err]
	}

	public async GetClusterInfo(ctx: context.Context | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple6: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).GetClusterInfo(ctx, opts)
		let result: shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null = __goscriptTuple6[0]
		let err = __goscriptTuple6[1]
		return [result, err]
	}

	public async GetSearchAttributes(ctx: context.Context | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple7: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).GetSearchAttributes(ctx, opts)
		let result: shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		return [result, err]
	}

	public async GetTaskListsByDomain(ctx: context.Context | null, request: shared.GetTaskListsByDomainRequest | $.VarRef<shared.GetTaskListsByDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple8: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).GetTaskListsByDomain(ctx, request, opts)
		let result: shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null = __goscriptTuple8[0]
		let err = __goscriptTuple8[1]
		return [result, err]
	}

	public async GetWorkflowExecutionHistory(ctx: context.Context | null, request: shared.GetWorkflowExecutionHistoryRequest | $.VarRef<shared.GetWorkflowExecutionHistoryRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple9: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).GetWorkflowExecutionHistory(ctx, request, opts)
		let result: shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null = __goscriptTuple9[0]
		let err = __goscriptTuple9[1]
		return [result, err]
	}

	public async ListArchivedWorkflowExecutions(ctx: context.Context | null, request: shared.ListArchivedWorkflowExecutionsRequest | $.VarRef<shared.ListArchivedWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple10: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).ListArchivedWorkflowExecutions(ctx, request, opts)
		let result: shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null = __goscriptTuple10[0]
		let err = __goscriptTuple10[1]
		return [result, err]
	}

	public async ListClosedWorkflowExecutions(ctx: context.Context | null, request: shared.ListClosedWorkflowExecutionsRequest | $.VarRef<shared.ListClosedWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple11: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).ListClosedWorkflowExecutions(ctx, request, opts)
		let result: shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null = __goscriptTuple11[0]
		let err = __goscriptTuple11[1]
		return [result, err]
	}

	public async ListDomains(ctx: context.Context | null, request: shared.ListDomainsRequest | $.VarRef<shared.ListDomainsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple12: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).ListDomains(ctx, request, opts)
		let result: shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null = __goscriptTuple12[0]
		let err = __goscriptTuple12[1]
		return [result, err]
	}

	public async ListFailoverHistory(ctx: context.Context | null, request: shared.ListFailoverHistoryRequest | $.VarRef<shared.ListFailoverHistoryRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple13: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).ListFailoverHistory(ctx, request, opts)
		let result: shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null = __goscriptTuple13[0]
		let err = __goscriptTuple13[1]
		return [result, err]
	}

	public async ListOpenWorkflowExecutions(ctx: context.Context | null, request: shared.ListOpenWorkflowExecutionsRequest | $.VarRef<shared.ListOpenWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple14: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).ListOpenWorkflowExecutions(ctx, request, opts)
		let result: shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null = __goscriptTuple14[0]
		let err = __goscriptTuple14[1]
		return [result, err]
	}

	public async ListSchedules(ctx: context.Context | null, Request: shared.ListSchedulesRequest | $.VarRef<shared.ListSchedulesRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		return $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).ListSchedules(ctx, Request, opts)
	}

	public async ListTaskListPartitions(ctx: context.Context | null, request: shared.ListTaskListPartitionsRequest | $.VarRef<shared.ListTaskListPartitionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple15: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).ListTaskListPartitions(ctx, request, opts)
		let result: shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null = __goscriptTuple15[0]
		let err = __goscriptTuple15[1]
		return [result, err]
	}

	public async ListWorkflowExecutions(ctx: context.Context | null, request: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple16: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).ListWorkflowExecutions(ctx, request, opts)
		let result: shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null = __goscriptTuple16[0]
		let err = __goscriptTuple16[1]
		return [result, err]
	}

	public async PauseSchedule(ctx: context.Context | null, Request: shared.PauseScheduleRequest | $.VarRef<shared.PauseScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		return $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).PauseSchedule(ctx, Request, opts)
	}

	public async PollForActivityTask(ctx: context.Context | null, request: shared.PollForActivityTaskRequest | $.VarRef<shared.PollForActivityTaskRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple17: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).PollForActivityTask(ctx, request, opts)
		let result: shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null = __goscriptTuple17[0]
		let err = __goscriptTuple17[1]
		return [result, err]
	}

	public async PollForDecisionTask(ctx: context.Context | null, request: shared.PollForDecisionTaskRequest | $.VarRef<shared.PollForDecisionTaskRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple18: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).PollForDecisionTask(ctx, request, opts)
		let result: shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null = __goscriptTuple18[0]
		let err = __goscriptTuple18[1]
		return [result, err]
	}

	public async QueryWorkflow(ctx: context.Context | null, request: shared.QueryWorkflowRequest | $.VarRef<shared.QueryWorkflowRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple19: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).QueryWorkflow(ctx, request, opts)
		let result: shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null = __goscriptTuple19[0]
		let err = __goscriptTuple19[1]
		return [result, err]
	}

	public async RecordActivityTaskHeartbeat(ctx: context.Context | null, request: shared.RecordActivityTaskHeartbeatRequest | $.VarRef<shared.RecordActivityTaskHeartbeatRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple20: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).RecordActivityTaskHeartbeat(ctx, request, opts)
		let result: shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null = __goscriptTuple20[0]
		let err = __goscriptTuple20[1]
		return [result, err]
	}

	public async RecordActivityTaskHeartbeatByID(ctx: context.Context | null, request: shared.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<shared.RecordActivityTaskHeartbeatByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple21: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).RecordActivityTaskHeartbeatByID(ctx, request, opts)
		let result: shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null = __goscriptTuple21[0]
		let err = __goscriptTuple21[1]
		return [result, err]
	}

	public async RefreshWorkflowTasks(ctx: context.Context | null, request: shared.RefreshWorkflowTasksRequest | $.VarRef<shared.RefreshWorkflowTasksRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).RefreshWorkflowTasks(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RegisterDomain(ctx: context.Context | null, request: shared.RegisterDomainRequest | $.VarRef<shared.RegisterDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).RegisterDomain(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RequestCancelWorkflowExecution(ctx: context.Context | null, request: shared.RequestCancelWorkflowExecutionRequest | $.VarRef<shared.RequestCancelWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).RequestCancelWorkflowExecution(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async ResetStickyTaskList(ctx: context.Context | null, request: shared.ResetStickyTaskListRequest | $.VarRef<shared.ResetStickyTaskListRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple22: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).ResetStickyTaskList(ctx, request, opts)
		let result: shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null = __goscriptTuple22[0]
		let err = __goscriptTuple22[1]
		return [result, err]
	}

	public async ResetWorkflowExecution(ctx: context.Context | null, request: shared.ResetWorkflowExecutionRequest | $.VarRef<shared.ResetWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple23: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).ResetWorkflowExecution(ctx, request, opts)
		let result: shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null = __goscriptTuple23[0]
		let err = __goscriptTuple23[1]
		return [result, err]
	}

	public async RespondActivityTaskCanceled(ctx: context.Context | null, request: shared.RespondActivityTaskCanceledRequest | $.VarRef<shared.RespondActivityTaskCanceledRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).RespondActivityTaskCanceled(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RespondActivityTaskCanceledByID(ctx: context.Context | null, request: shared.RespondActivityTaskCanceledByIDRequest | $.VarRef<shared.RespondActivityTaskCanceledByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).RespondActivityTaskCanceledByID(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RespondActivityTaskCompleted(ctx: context.Context | null, request: shared.RespondActivityTaskCompletedRequest | $.VarRef<shared.RespondActivityTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).RespondActivityTaskCompleted(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RespondActivityTaskCompletedByID(ctx: context.Context | null, request: shared.RespondActivityTaskCompletedByIDRequest | $.VarRef<shared.RespondActivityTaskCompletedByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).RespondActivityTaskCompletedByID(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RespondActivityTaskFailed(ctx: context.Context | null, request: shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).RespondActivityTaskFailed(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RespondActivityTaskFailedByID(ctx: context.Context | null, request: shared.RespondActivityTaskFailedByIDRequest | $.VarRef<shared.RespondActivityTaskFailedByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).RespondActivityTaskFailedByID(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RespondDecisionTaskCompleted(ctx: context.Context | null, request: shared.RespondDecisionTaskCompletedRequest | $.VarRef<shared.RespondDecisionTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple24: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).RespondDecisionTaskCompleted(ctx, request, opts)
		let response: shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null = __goscriptTuple24[0]
		let err = __goscriptTuple24[1]
		return [response, err]
	}

	public async RespondDecisionTaskFailed(ctx: context.Context | null, request: shared.RespondDecisionTaskFailedRequest | $.VarRef<shared.RespondDecisionTaskFailedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).RespondDecisionTaskFailed(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RespondQueryTaskCompleted(ctx: context.Context | null, request: shared.RespondQueryTaskCompletedRequest | $.VarRef<shared.RespondQueryTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).RespondQueryTaskCompleted(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async RestartWorkflowExecution(ctx: context.Context | null, request: shared.RestartWorkflowExecutionRequest | $.VarRef<shared.RestartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		return $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).RestartWorkflowExecution(ctx, request, opts)
	}

	public async ScanWorkflowExecutions(ctx: context.Context | null, request: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple25: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).ScanWorkflowExecutions(ctx, request, opts)
		let result: shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null = __goscriptTuple25[0]
		let err = __goscriptTuple25[1]
		return [result, err]
	}

	public async SignalWithStartWorkflowExecution(ctx: context.Context | null, request: shared.SignalWithStartWorkflowExecutionRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple26: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).SignalWithStartWorkflowExecution(ctx, request, opts)
		let result: shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null = __goscriptTuple26[0]
		let err = __goscriptTuple26[1]
		return [result, err]
	}

	public async SignalWithStartWorkflowExecutionAsync(ctx: context.Context | null, request: shared.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple27: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).SignalWithStartWorkflowExecutionAsync(ctx, request, opts)
		let result: shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null = __goscriptTuple27[0]
		let err = __goscriptTuple27[1]
		return [result, err]
	}

	public async SignalWorkflowExecution(ctx: context.Context | null, request: shared.SignalWorkflowExecutionRequest | $.VarRef<shared.SignalWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).SignalWorkflowExecution(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async StartWorkflowExecution(ctx: context.Context | null, request: shared.StartWorkflowExecutionRequest | $.VarRef<shared.StartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple28: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).StartWorkflowExecution(ctx, request, opts)
		let result: shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null = __goscriptTuple28[0]
		let err = __goscriptTuple28[1]
		return [result, err]
	}

	public async StartWorkflowExecutionAsync(ctx: context.Context | null, request: shared.StartWorkflowExecutionAsyncRequest | $.VarRef<shared.StartWorkflowExecutionAsyncRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple29: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).StartWorkflowExecutionAsync(ctx, request, opts)
		let result: shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null = __goscriptTuple29[0]
		let err = __goscriptTuple29[1]
		return [result, err]
	}

	public async TerminateWorkflowExecution(ctx: context.Context | null, request: shared.TerminateWorkflowExecutionRequest | $.VarRef<shared.TerminateWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).TerminateWorkflowExecution(ctx, request, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return err
	}

	public async UnpauseSchedule(ctx: context.Context | null, Request: shared.UnpauseScheduleRequest | $.VarRef<shared.UnpauseScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		return $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).UnpauseSchedule(ctx, Request, opts)
	}

	public async UpdateDomain(ctx: context.Context | null, request: shared.UpdateDomainRequest | $.VarRef<shared.UpdateDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		let __goscriptTuple30: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).UpdateDomain(ctx, request, opts)
		let result: shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null = __goscriptTuple30[0]
		let err = __goscriptTuple30[1]
		return [result, err]
	}

	public async UpdateSchedule(ctx: context.Context | null, Request: shared.UpdateScheduleRequest | $.VarRef<shared.UpdateScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null, $.GoError]> {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		opts = $.appendOne(opts, (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as workflowServiceIsolationGroupWrapper).getIsolationGroupIdentifier() : workflowServiceIsolationGroupWrapper.prototype.getIsolationGroupIdentifier.call(w)))
		return $.pointerValue<Exclude<workflowserviceclient.Interface, null>>($.pointerValue<workflowServiceIsolationGroupWrapper>(w).service).UpdateSchedule(ctx, Request, opts)
	}

	public getIsolationGroupIdentifier(): yarpc.CallOption {
		const w: workflowServiceIsolationGroupWrapper | $.VarRef<workflowServiceIsolationGroupWrapper> | null = this;
		return yarpc.WithHeader("cadence-client-isolation-group", $.pointerValue<workflowServiceIsolationGroupWrapper>(w).isolationGroupIdentifier)
	}

	static __typeInfo = $.registerStructType(
		"isolationgroup.workflowServiceIsolationGroupWrapper",
		() => new workflowServiceIsolationGroupWrapper(),
		() => [$.methodSignature("BackfillSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.BackfillScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.BackfillScheduleResponse"), "error"], true), $.methodSignature("CountWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.CountWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.CountWorkflowExecutionsResponse"), "error"], true), $.methodSignature("CreateSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.CreateScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.CreateScheduleResponse"), "error"], true), $.methodSignature("DeleteDomain", [["ctx", "context.Context"], ["DeleteRequest", /* @__PURE__ */ $.pointerType("shared.DeleteDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("DeleteSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.DeleteScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DeleteScheduleResponse"), "error"], true), $.methodSignature("DeprecateDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.DeprecateDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("DescribeDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.DescribeDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DescribeDomainResponse"), "error"], true), $.methodSignature("DescribeSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.DescribeScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DescribeScheduleResponse"), "error"], true), $.methodSignature("DescribeTaskList", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.DescribeTaskListRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DescribeTaskListResponse"), "error"], true), $.methodSignature("DescribeWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.DescribeWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DescribeWorkflowExecutionResponse"), "error"], true), $.methodSignature("DiagnoseWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.DiagnoseWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.DiagnoseWorkflowExecutionResponse"), "error"], true), $.methodSignature("FailoverDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.FailoverDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.FailoverDomainResponse"), "error"], true), $.methodSignature("GetClusterInfo", [["ctx", "context.Context"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ClusterInfo"), "error"], true), $.methodSignature("GetSearchAttributes", [["ctx", "context.Context"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.GetSearchAttributesResponse"), "error"], true), $.methodSignature("GetTaskListsByDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.GetTaskListsByDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.GetTaskListsByDomainResponse"), "error"], true), $.methodSignature("GetWorkflowExecutionHistory", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.GetWorkflowExecutionHistoryRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.GetWorkflowExecutionHistoryResponse"), "error"], true), $.methodSignature("ListArchivedWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListArchivedWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListArchivedWorkflowExecutionsResponse"), "error"], true), $.methodSignature("ListClosedWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListClosedWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListClosedWorkflowExecutionsResponse"), "error"], true), $.methodSignature("ListDomains", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListDomainsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListDomainsResponse"), "error"], true), $.methodSignature("ListFailoverHistory", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListFailoverHistoryRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListFailoverHistoryResponse"), "error"], true), $.methodSignature("ListOpenWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListOpenWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListOpenWorkflowExecutionsResponse"), "error"], true), $.methodSignature("ListSchedules", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.ListSchedulesRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListSchedulesResponse"), "error"], true), $.methodSignature("ListTaskListPartitions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListTaskListPartitionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListTaskListPartitionsResponse"), "error"], true), $.methodSignature("ListWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse"), "error"], true), $.methodSignature("PauseSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.PauseScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.PauseScheduleResponse"), "error"], true), $.methodSignature("PollForActivityTask", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.PollForActivityTaskRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse"), "error"], true), $.methodSignature("PollForDecisionTask", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse"), "error"], true), $.methodSignature("QueryWorkflow", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.QueryWorkflowRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.QueryWorkflowResponse"), "error"], true), $.methodSignature("RecordActivityTaskHeartbeat", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatResponse"), "error"], true), $.methodSignature("RecordActivityTaskHeartbeatByID", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatResponse"), "error"], true), $.methodSignature("RefreshWorkflowTasks", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RefreshWorkflowTasksRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RegisterDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RegisterDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RequestCancelWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RequestCancelWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("ResetStickyTaskList", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ResetStickyTaskListRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ResetStickyTaskListResponse"), "error"], true), $.methodSignature("ResetWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ResetWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ResetWorkflowExecutionResponse"), "error"], true), $.methodSignature("RespondActivityTaskCanceled", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RespondActivityTaskCanceledByID", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RespondActivityTaskCompleted", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RespondActivityTaskCompletedByID", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RespondActivityTaskFailed", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RespondActivityTaskFailedByID", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedByIDRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RespondDecisionTaskCompleted", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedResponse"), "error"], true), $.methodSignature("RespondDecisionTaskFailed", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskFailedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RespondQueryTaskCompleted", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RespondQueryTaskCompletedRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("RestartWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RestartWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.RestartWorkflowExecutionResponse"), "error"], true), $.methodSignature("ScanWorkflowExecutions", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse"), "error"], true), $.methodSignature("SignalWithStartWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionResponse"), "error"], true), $.methodSignature("SignalWithStartWorkflowExecutionAsync", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionAsyncRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionAsyncResponse"), "error"], true), $.methodSignature("SignalWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.SignalWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("StartWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionResponse"), "error"], true), $.methodSignature("StartWorkflowExecutionAsync", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionAsyncRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionAsyncResponse"), "error"], true), $.methodSignature("TerminateWorkflowExecution", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.TerminateWorkflowExecutionRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"], true), $.methodSignature("UnpauseSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.UnpauseScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.UnpauseScheduleResponse"), "error"], true), $.methodSignature("UpdateDomain", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.UpdateDomainRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.UpdateDomainResponse"), "error"], true), $.methodSignature("UpdateSchedule", [["ctx", "context.Context"], ["Request", /* @__PURE__ */ $.pointerType("shared.UpdateScheduleRequest")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("shared.UpdateScheduleResponse"), "error"], true), $.methodSignature("getIsolationGroupIdentifier", [], ["yarpc.CallOption"], true)],
		workflowServiceIsolationGroupWrapper,
		() => [/* @__PURE__ */ $.structField("service", "workflowserviceclient.Interface", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal/common/isolationgroup" }), /* @__PURE__ */ $.structField("isolationGroupIdentifier", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal/common/isolationgroup" })]
	)
}

export const isolationGroupHeader: string = "cadence-client-isolation-group"

export function NewWorkflowServiceWrapper(service: workflowserviceclient.Interface | null, isolationGroup: string): workflowserviceclient.Interface | null {
	return $.interfaceValue<workflowserviceclient.Interface | null>(new workflowServiceIsolationGroupWrapper({service: service, isolationGroupIdentifier: isolationGroup}), "*isolationgroup.workflowServiceIsolationGroupWrapper", /* @__PURE__ */ $.pointerType("isolationgroup.workflowServiceIsolationGroupWrapper"))
}

var __goscriptAwait: any
