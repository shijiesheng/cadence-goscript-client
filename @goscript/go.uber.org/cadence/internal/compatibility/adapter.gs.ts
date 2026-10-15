// Generated file based on adapter.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as proto from "@goscript/go.uber.org/cadence/internal/compatibility/proto/index.js"

import * as thrift2 from "@goscript/go.uber.org/cadence/internal/compatibility/thrift/index.js"

import * as apiv1 from "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/compatibility/proto/index.js"
import "@goscript/go.uber.org/cadence/internal/compatibility/thrift/index.js"
import "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal/compatibility", ["compatibility.thrift2protoAdapter", "compatibility.domainAPIthriftAdapter", "compatibility.workflowAPIthriftAdapter", "compatibility.workerAPIthriftAdapter", "compatibility.visibilityAPIthriftAdapter"])

export class thrift2protoAdapter {
	public get domain(): apiv1.DomainAPIYARPCClient | null {
		return this._fields.domain
	}

	public set domain(value: apiv1.DomainAPIYARPCClient | null) {
		this._fields.domain = value
	}

	public get workflow(): apiv1.WorkflowAPIYARPCClient | null {
		return this._fields.workflow
	}

	public set workflow(value: apiv1.WorkflowAPIYARPCClient | null) {
		this._fields.workflow = value
	}

	public get worker(): apiv1.WorkerAPIYARPCClient | null {
		return this._fields.worker
	}

	public set worker(value: apiv1.WorkerAPIYARPCClient | null) {
		this._fields.worker = value
	}

	public get visibility(): apiv1.VisibilityAPIYARPCClient | null {
		return this._fields.visibility
	}

	public set visibility(value: apiv1.VisibilityAPIYARPCClient | null) {
		this._fields.visibility = value
	}

	public get schedule(): apiv1.ScheduleAPIYARPCClient | null {
		return this._fields.schedule
	}

	public set schedule(value: apiv1.ScheduleAPIYARPCClient | null) {
		this._fields.schedule = value
	}

	public _fields: {
		domain: apiv1.DomainAPIYARPCClient | null
		workflow: apiv1.WorkflowAPIYARPCClient | null
		worker: apiv1.WorkerAPIYARPCClient | null
		visibility: apiv1.VisibilityAPIYARPCClient | null
		schedule: apiv1.ScheduleAPIYARPCClient | null
	}

	constructor(init?: Partial<{domain?: apiv1.DomainAPIYARPCClient | null, workflow?: apiv1.WorkflowAPIYARPCClient | null, worker?: apiv1.WorkerAPIYARPCClient | null, visibility?: apiv1.VisibilityAPIYARPCClient | null, schedule?: apiv1.ScheduleAPIYARPCClient | null}>, __goscriptValue?: boolean) {
		this._fields = {
			domain: init?.domain ?? (null! as apiv1.DomainAPIYARPCClient | null),
			workflow: init?.workflow ?? (null! as apiv1.WorkflowAPIYARPCClient | null),
			worker: init?.worker ?? (null! as apiv1.WorkerAPIYARPCClient | null),
			visibility: init?.visibility ?? (null! as apiv1.VisibilityAPIYARPCClient | null),
			schedule: init?.schedule ?? (null! as apiv1.ScheduleAPIYARPCClient | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): thrift2protoAdapter {
		return new thrift2protoAdapter(this, true)
	}

	public __goscriptAssign(source: thrift2protoAdapter): void {
		const target = this._fields
		const values = source._fields
		target.domain = $.assignFieldValue(target.domain, values.domain, "apiv1.DomainAPIYARPCClient")
		target.workflow = $.assignFieldValue(target.workflow, values.workflow, "apiv1.WorkflowAPIYARPCClient")
		target.worker = $.assignFieldValue(target.worker, values.worker, "apiv1.WorkerAPIYARPCClient")
		target.visibility = $.assignFieldValue(target.visibility, values.visibility, "apiv1.VisibilityAPIYARPCClient")
		target.schedule = $.assignFieldValue(target.schedule, values.schedule, "apiv1.ScheduleAPIYARPCClient")
	}

	public async BackfillSchedule(ctx: context.Context | null, Request: shared.BackfillScheduleRequest | $.VarRef<shared.BackfillScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.BackfillScheduleResponse | $.VarRef<shared.BackfillScheduleResponse> | null, $.GoError]> {
		const a = this;
		if (a.schedule == null) {
			return [null, $.interfaceValue<$.GoError>(errScheduleClientNotConfigured, "*shared.BadRequestError", /* @__PURE__ */ $.pointerType("shared.BadRequestError"))]
		}
		let __goscriptTuple0: any = await $.pointerValue<Exclude<apiv1.ScheduleAPIYARPCClient, null>>(a.schedule).BackfillSchedule(ctx, proto.BackfillScheduleRequest(Request), opts)
		let response: apiv1.BackfillScheduleResponse | $.VarRef<apiv1.BackfillScheduleResponse> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		return [thrift2.BackfillScheduleResponse(response), await thrift2.Error(err)]
	}

	public async CountWorkflowExecutions(ctx: context.Context | null, request: shared.CountWorkflowExecutionsRequest | $.VarRef<shared.CountWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple1: any = await $.pointerValue<Exclude<apiv1.VisibilityAPIYARPCClient, null>>(a.visibility).CountWorkflowExecutions(ctx, proto.CountWorkflowExecutionsRequest(request), opts)
		let response: apiv1.CountWorkflowExecutionsResponse | $.VarRef<apiv1.CountWorkflowExecutionsResponse> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		return [thrift2.CountWorkflowExecutionsResponse(response), await thrift2.Error(err)]
	}

	public async CreateSchedule(ctx: context.Context | null, Request: shared.CreateScheduleRequest | $.VarRef<shared.CreateScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null, $.GoError]> {
		const a = this;
		if (a.schedule == null) {
			return [null, $.interfaceValue<$.GoError>(errScheduleClientNotConfigured, "*shared.BadRequestError", /* @__PURE__ */ $.pointerType("shared.BadRequestError"))]
		}
		let __goscriptTuple2: any = await $.pointerValue<Exclude<apiv1.ScheduleAPIYARPCClient, null>>(a.schedule).CreateSchedule(ctx, proto.CreateScheduleRequest(Request), opts)
		let response: apiv1.CreateScheduleResponse | $.VarRef<apiv1.CreateScheduleResponse> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		return [thrift2.CreateScheduleResponse(response), await thrift2.Error(err)]
	}

	public async DeleteDomain(ctx: context.Context | null, DeleteRequest: shared.DeleteDomainRequest | $.VarRef<shared.DeleteDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const a = this;
		let [, err] = await $.pointerValue<Exclude<apiv1.DomainAPIYARPCClient, null>>(a.domain).DeleteDomain(ctx, proto.DeleteDomainRequest(DeleteRequest), opts)
		return err
	}

	public async DeleteSchedule(ctx: context.Context | null, Request: shared.DeleteScheduleRequest | $.VarRef<shared.DeleteScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DeleteScheduleResponse | $.VarRef<shared.DeleteScheduleResponse> | null, $.GoError]> {
		const a = this;
		if (a.schedule == null) {
			return [null, $.interfaceValue<$.GoError>(errScheduleClientNotConfigured, "*shared.BadRequestError", /* @__PURE__ */ $.pointerType("shared.BadRequestError"))]
		}
		let __goscriptTuple3: any = await $.pointerValue<Exclude<apiv1.ScheduleAPIYARPCClient, null>>(a.schedule).DeleteSchedule(ctx, proto.DeleteScheduleRequest(Request), opts)
		let response: apiv1.DeleteScheduleResponse | $.VarRef<apiv1.DeleteScheduleResponse> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		return [thrift2.DeleteScheduleResponse(response), await thrift2.Error(err)]
	}

	public async DeprecateDomain(ctx: context.Context | null, request: shared.DeprecateDomainRequest | $.VarRef<shared.DeprecateDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const a = this;
		let [, err] = await $.pointerValue<Exclude<apiv1.DomainAPIYARPCClient, null>>(a.domain).DeprecateDomain(ctx, proto.DeprecateDomainRequest(request), opts)
		return thrift2.Error(err)
	}

	public async DescribeDomain(ctx: context.Context | null, request: shared.DescribeDomainRequest | $.VarRef<shared.DescribeDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple4: any = await $.pointerValue<Exclude<apiv1.DomainAPIYARPCClient, null>>(a.domain).DescribeDomain(ctx, proto.DescribeDomainRequest(request), opts)
		let response: apiv1.DescribeDomainResponse | $.VarRef<apiv1.DescribeDomainResponse> | null = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		return [thrift2.DescribeDomainResponse(response), await thrift2.Error(err)]
	}

	public async DescribeSchedule(ctx: context.Context | null, Request: shared.DescribeScheduleRequest | $.VarRef<shared.DescribeScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null, $.GoError]> {
		const a = this;
		if (a.schedule == null) {
			return [null, $.interfaceValue<$.GoError>(errScheduleClientNotConfigured, "*shared.BadRequestError", /* @__PURE__ */ $.pointerType("shared.BadRequestError"))]
		}
		let __goscriptTuple5: any = await $.pointerValue<Exclude<apiv1.ScheduleAPIYARPCClient, null>>(a.schedule).DescribeSchedule(ctx, proto.DescribeScheduleRequest(Request), opts)
		let response: apiv1.DescribeScheduleResponse | $.VarRef<apiv1.DescribeScheduleResponse> | null = __goscriptTuple5[0]
		let err = __goscriptTuple5[1]
		return [thrift2.DescribeScheduleResponse(response), await thrift2.Error(err)]
	}

	public async DescribeTaskList(ctx: context.Context | null, request: shared.DescribeTaskListRequest | $.VarRef<shared.DescribeTaskListRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple6: any = await $.pointerValue<Exclude<apiv1.WorkflowAPIYARPCClient, null>>(a.workflow).DescribeTaskList(ctx, proto.DescribeTaskListRequest(request), opts)
		let response: apiv1.DescribeTaskListResponse | $.VarRef<apiv1.DescribeTaskListResponse> | null = __goscriptTuple6[0]
		let err = __goscriptTuple6[1]
		return [thrift2.DescribeTaskListResponse(response), await thrift2.Error(err)]
	}

	public async DescribeWorkflowExecution(ctx: context.Context | null, request: shared.DescribeWorkflowExecutionRequest | $.VarRef<shared.DescribeWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple7: any = await $.pointerValue<Exclude<apiv1.WorkflowAPIYARPCClient, null>>(a.workflow).DescribeWorkflowExecution(ctx, proto.DescribeWorkflowExecutionRequest(request), opts)
		let response: apiv1.DescribeWorkflowExecutionResponse | $.VarRef<apiv1.DescribeWorkflowExecutionResponse> | null = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		return [thrift2.DescribeWorkflowExecutionResponse(response), await thrift2.Error(err)]
	}

	public async DiagnoseWorkflowExecution(ctx: context.Context | null, request: shared.DiagnoseWorkflowExecutionRequest | $.VarRef<shared.DiagnoseWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple8: any = await $.pointerValue<Exclude<apiv1.WorkflowAPIYARPCClient, null>>(a.workflow).DiagnoseWorkflowExecution(ctx, proto.DiagnoseWorkflowExecutionRequest(request), opts)
		let response: apiv1.DiagnoseWorkflowExecutionResponse | $.VarRef<apiv1.DiagnoseWorkflowExecutionResponse> | null = __goscriptTuple8[0]
		let err = __goscriptTuple8[1]
		return [thrift2.DiagnoseWorkflowExecutionResponse(response), await thrift2.Error(err)]
	}

	public async FailoverDomain(ctx: context.Context | null, request: shared.FailoverDomainRequest | $.VarRef<shared.FailoverDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.FailoverDomainResponse | $.VarRef<shared.FailoverDomainResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple9: any = await $.pointerValue<Exclude<apiv1.DomainAPIYARPCClient, null>>(a.domain).FailoverDomain(ctx, proto.FailoverDomainRequest(request), opts)
		let response: apiv1.FailoverDomainResponse | $.VarRef<apiv1.FailoverDomainResponse> | null = __goscriptTuple9[0]
		let err = __goscriptTuple9[1]
		return [thrift2.FailoverDomainResponse(response), await thrift2.Error(err)]
	}

	public async GetClusterInfo(ctx: context.Context | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple10: any = await $.pointerValue<Exclude<apiv1.WorkflowAPIYARPCClient, null>>(a.workflow).GetClusterInfo(ctx, new apiv1.GetClusterInfoRequest(), opts)
		let response: apiv1.GetClusterInfoResponse | $.VarRef<apiv1.GetClusterInfoResponse> | null = __goscriptTuple10[0]
		let err = __goscriptTuple10[1]
		return [thrift2.GetClusterInfoResponse(response), await thrift2.Error(err)]
	}

	public async GetSearchAttributes(ctx: context.Context | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple11: any = await $.pointerValue<Exclude<apiv1.VisibilityAPIYARPCClient, null>>(a.visibility).GetSearchAttributes(ctx, new apiv1.GetSearchAttributesRequest(), opts)
		let response: apiv1.GetSearchAttributesResponse | $.VarRef<apiv1.GetSearchAttributesResponse> | null = __goscriptTuple11[0]
		let err = __goscriptTuple11[1]
		return [thrift2.GetSearchAttributesResponse(response), await thrift2.Error(err)]
	}

	public GetTaskListsByDomain(ctx: context.Context | null, Request: shared.GetTaskListsByDomainRequest | $.VarRef<shared.GetTaskListsByDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): [shared.GetTaskListsByDomainResponse | $.VarRef<shared.GetTaskListsByDomainResponse> | null, $.GoError] {
		const a = this;
		$.panic("implement me")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async GetWorkflowExecutionHistory(ctx: context.Context | null, request: shared.GetWorkflowExecutionHistoryRequest | $.VarRef<shared.GetWorkflowExecutionHistoryRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple12: any = await $.pointerValue<Exclude<apiv1.WorkflowAPIYARPCClient, null>>(a.workflow).GetWorkflowExecutionHistory(ctx, proto.GetWorkflowExecutionHistoryRequest(request), opts)
		let response: apiv1.GetWorkflowExecutionHistoryResponse | $.VarRef<apiv1.GetWorkflowExecutionHistoryResponse> | null = __goscriptTuple12[0]
		let err = __goscriptTuple12[1]
		return [thrift2.GetWorkflowExecutionHistoryResponse(response), await thrift2.Error(err)]
	}

	public async ListArchivedWorkflowExecutions(ctx: context.Context | null, request: shared.ListArchivedWorkflowExecutionsRequest | $.VarRef<shared.ListArchivedWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple13: any = await $.pointerValue<Exclude<apiv1.VisibilityAPIYARPCClient, null>>(a.visibility).ListArchivedWorkflowExecutions(ctx, proto.ListArchivedWorkflowExecutionsRequest(request), opts)
		let response: apiv1.ListArchivedWorkflowExecutionsResponse | $.VarRef<apiv1.ListArchivedWorkflowExecutionsResponse> | null = __goscriptTuple13[0]
		let err = __goscriptTuple13[1]
		return [thrift2.ListArchivedWorkflowExecutionsResponse(response), await thrift2.Error(err)]
	}

	public async ListClosedWorkflowExecutions(ctx: context.Context | null, request: shared.ListClosedWorkflowExecutionsRequest | $.VarRef<shared.ListClosedWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple14: any = await $.pointerValue<Exclude<apiv1.VisibilityAPIYARPCClient, null>>(a.visibility).ListClosedWorkflowExecutions(ctx, proto.ListClosedWorkflowExecutionsRequest(request), opts)
		let response: apiv1.ListClosedWorkflowExecutionsResponse | $.VarRef<apiv1.ListClosedWorkflowExecutionsResponse> | null = __goscriptTuple14[0]
		let err = __goscriptTuple14[1]
		return [thrift2.ListClosedWorkflowExecutionsResponse(response), await thrift2.Error(err)]
	}

	public async ListDomains(ctx: context.Context | null, request: shared.ListDomainsRequest | $.VarRef<shared.ListDomainsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple15: any = await $.pointerValue<Exclude<apiv1.DomainAPIYARPCClient, null>>(a.domain).ListDomains(ctx, proto.ListDomainsRequest(request), opts)
		let response: apiv1.ListDomainsResponse | $.VarRef<apiv1.ListDomainsResponse> | null = __goscriptTuple15[0]
		let err = __goscriptTuple15[1]
		return [thrift2.ListDomainsResponse(response), await thrift2.Error(err)]
	}

	public async ListFailoverHistory(ctx: context.Context | null, request: shared.ListFailoverHistoryRequest | $.VarRef<shared.ListFailoverHistoryRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListFailoverHistoryResponse | $.VarRef<shared.ListFailoverHistoryResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple16: any = await $.pointerValue<Exclude<apiv1.DomainAPIYARPCClient, null>>(a.domain).ListFailoverHistory(ctx, proto.ListFailoverHistoryRequest(request), opts)
		let response: apiv1.ListFailoverHistoryResponse | $.VarRef<apiv1.ListFailoverHistoryResponse> | null = __goscriptTuple16[0]
		let err = __goscriptTuple16[1]
		return [thrift2.ListFailoverHistoryResponse(response), await thrift2.Error(err)]
	}

	public async ListOpenWorkflowExecutions(ctx: context.Context | null, request: shared.ListOpenWorkflowExecutionsRequest | $.VarRef<shared.ListOpenWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple17: any = await $.pointerValue<Exclude<apiv1.VisibilityAPIYARPCClient, null>>(a.visibility).ListOpenWorkflowExecutions(ctx, proto.ListOpenWorkflowExecutionsRequest(request), opts)
		let response: apiv1.ListOpenWorkflowExecutionsResponse | $.VarRef<apiv1.ListOpenWorkflowExecutionsResponse> | null = __goscriptTuple17[0]
		let err = __goscriptTuple17[1]
		return [thrift2.ListOpenWorkflowExecutionsResponse(response), await thrift2.Error(err)]
	}

	public async ListSchedules(ctx: context.Context | null, Request: shared.ListSchedulesRequest | $.VarRef<shared.ListSchedulesRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null, $.GoError]> {
		const a = this;
		if (a.schedule == null) {
			return [null, $.interfaceValue<$.GoError>(errScheduleClientNotConfigured, "*shared.BadRequestError", /* @__PURE__ */ $.pointerType("shared.BadRequestError"))]
		}
		let __goscriptTuple18: any = await $.pointerValue<Exclude<apiv1.ScheduleAPIYARPCClient, null>>(a.schedule).ListSchedules(ctx, proto.ListSchedulesRequest(Request), opts)
		let response: apiv1.ListSchedulesResponse | $.VarRef<apiv1.ListSchedulesResponse> | null = __goscriptTuple18[0]
		let err = __goscriptTuple18[1]
		return [thrift2.ListSchedulesResponse(response), await thrift2.Error(err)]
	}

	public async ListTaskListPartitions(ctx: context.Context | null, request: shared.ListTaskListPartitionsRequest | $.VarRef<shared.ListTaskListPartitionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple19: any = await $.pointerValue<Exclude<apiv1.WorkflowAPIYARPCClient, null>>(a.workflow).ListTaskListPartitions(ctx, proto.ListTaskListPartitionsRequest(request), opts)
		let response: apiv1.ListTaskListPartitionsResponse | $.VarRef<apiv1.ListTaskListPartitionsResponse> | null = __goscriptTuple19[0]
		let err = __goscriptTuple19[1]
		return [thrift2.ListTaskListPartitionsResponse(response), await thrift2.Error(err)]
	}

	public async ListWorkflowExecutions(ctx: context.Context | null, request: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple20: any = await $.pointerValue<Exclude<apiv1.VisibilityAPIYARPCClient, null>>(a.visibility).ListWorkflowExecutions(ctx, proto.ListWorkflowExecutionsRequest(request), opts)
		let response: apiv1.ListWorkflowExecutionsResponse | $.VarRef<apiv1.ListWorkflowExecutionsResponse> | null = __goscriptTuple20[0]
		let err = __goscriptTuple20[1]
		return [thrift2.ListWorkflowExecutionsResponse(response), await thrift2.Error(err)]
	}

	public async PauseSchedule(ctx: context.Context | null, Request: shared.PauseScheduleRequest | $.VarRef<shared.PauseScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.PauseScheduleResponse | $.VarRef<shared.PauseScheduleResponse> | null, $.GoError]> {
		const a = this;
		if (a.schedule == null) {
			return [null, $.interfaceValue<$.GoError>(errScheduleClientNotConfigured, "*shared.BadRequestError", /* @__PURE__ */ $.pointerType("shared.BadRequestError"))]
		}
		let __goscriptTuple21: any = await $.pointerValue<Exclude<apiv1.ScheduleAPIYARPCClient, null>>(a.schedule).PauseSchedule(ctx, proto.PauseScheduleRequest(Request), opts)
		let response: apiv1.PauseScheduleResponse | $.VarRef<apiv1.PauseScheduleResponse> | null = __goscriptTuple21[0]
		let err = __goscriptTuple21[1]
		return [thrift2.PauseScheduleResponse(response), await thrift2.Error(err)]
	}

	public async PollForActivityTask(ctx: context.Context | null, request: shared.PollForActivityTaskRequest | $.VarRef<shared.PollForActivityTaskRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple22: any = await $.pointerValue<Exclude<apiv1.WorkerAPIYARPCClient, null>>(a.worker).PollForActivityTask(ctx, proto.PollForActivityTaskRequest(request), opts)
		let response: apiv1.PollForActivityTaskResponse | $.VarRef<apiv1.PollForActivityTaskResponse> | null = __goscriptTuple22[0]
		let err = __goscriptTuple22[1]
		return [thrift2.PollForActivityTaskResponse(response), await thrift2.Error(err)]
	}

	public async PollForDecisionTask(ctx: context.Context | null, request: shared.PollForDecisionTaskRequest | $.VarRef<shared.PollForDecisionTaskRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple23: any = await $.pointerValue<Exclude<apiv1.WorkerAPIYARPCClient, null>>(a.worker).PollForDecisionTask(ctx, proto.PollForDecisionTaskRequest(request), opts)
		let response: apiv1.PollForDecisionTaskResponse | $.VarRef<apiv1.PollForDecisionTaskResponse> | null = __goscriptTuple23[0]
		let err = __goscriptTuple23[1]
		return [thrift2.PollForDecisionTaskResponse(response), await thrift2.Error(err)]
	}

	public async QueryWorkflow(ctx: context.Context | null, request: shared.QueryWorkflowRequest | $.VarRef<shared.QueryWorkflowRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple24: any = await $.pointerValue<Exclude<apiv1.WorkflowAPIYARPCClient, null>>(a.workflow).QueryWorkflow(ctx, proto.QueryWorkflowRequest(request), opts)
		let response: apiv1.QueryWorkflowResponse | $.VarRef<apiv1.QueryWorkflowResponse> | null = __goscriptTuple24[0]
		let err = __goscriptTuple24[1]
		return [thrift2.QueryWorkflowResponse(response), await thrift2.Error(err)]
	}

	public async RecordActivityTaskHeartbeat(ctx: context.Context | null, request: shared.RecordActivityTaskHeartbeatRequest | $.VarRef<shared.RecordActivityTaskHeartbeatRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple25: any = await $.pointerValue<Exclude<apiv1.WorkerAPIYARPCClient, null>>(a.worker).RecordActivityTaskHeartbeat(ctx, proto.RecordActivityTaskHeartbeatRequest(request), opts)
		let response: apiv1.RecordActivityTaskHeartbeatResponse | $.VarRef<apiv1.RecordActivityTaskHeartbeatResponse> | null = __goscriptTuple25[0]
		let err = __goscriptTuple25[1]
		return [thrift2.RecordActivityTaskHeartbeatResponse(response), await thrift2.Error(err)]
	}

	public async RecordActivityTaskHeartbeatByID(ctx: context.Context | null, request: shared.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<shared.RecordActivityTaskHeartbeatByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple26: any = await $.pointerValue<Exclude<apiv1.WorkerAPIYARPCClient, null>>(a.worker).RecordActivityTaskHeartbeatByID(ctx, proto.RecordActivityTaskHeartbeatByIDRequest(request), opts)
		let response: apiv1.RecordActivityTaskHeartbeatByIDResponse | $.VarRef<apiv1.RecordActivityTaskHeartbeatByIDResponse> | null = __goscriptTuple26[0]
		let err = __goscriptTuple26[1]
		return [thrift2.RecordActivityTaskHeartbeatByIDResponse(response), await thrift2.Error(err)]
	}

	public async RefreshWorkflowTasks(ctx: context.Context | null, request: shared.RefreshWorkflowTasksRequest | $.VarRef<shared.RefreshWorkflowTasksRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const a = this;
		let [, err] = await $.pointerValue<Exclude<apiv1.WorkflowAPIYARPCClient, null>>(a.workflow).RefreshWorkflowTasks(ctx, proto.RefreshWorkflowTasksRequest(request), opts)
		return thrift2.Error(err)
	}

	public async RegisterDomain(ctx: context.Context | null, request: shared.RegisterDomainRequest | $.VarRef<shared.RegisterDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const a = this;
		let [, err] = await $.pointerValue<Exclude<apiv1.DomainAPIYARPCClient, null>>(a.domain).RegisterDomain(ctx, proto.RegisterDomainRequest(request), opts)
		return thrift2.Error(err)
	}

	public async RequestCancelWorkflowExecution(ctx: context.Context | null, request: shared.RequestCancelWorkflowExecutionRequest | $.VarRef<shared.RequestCancelWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const a = this;
		let [, err] = await $.pointerValue<Exclude<apiv1.WorkflowAPIYARPCClient, null>>(a.workflow).RequestCancelWorkflowExecution(ctx, proto.RequestCancelWorkflowExecutionRequest(request), opts)
		return thrift2.Error(err)
	}

	public async ResetStickyTaskList(ctx: context.Context | null, request: shared.ResetStickyTaskListRequest | $.VarRef<shared.ResetStickyTaskListRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ResetStickyTaskListResponse | $.VarRef<shared.ResetStickyTaskListResponse> | null, $.GoError]> {
		const a = this;
		let [, err] = await $.pointerValue<Exclude<apiv1.WorkerAPIYARPCClient, null>>(a.worker).ResetStickyTaskList(ctx, proto.ResetStickyTaskListRequest(request), opts)
		return [new shared.ResetStickyTaskListResponse(), await thrift2.Error(err)]
	}

	public async ResetWorkflowExecution(ctx: context.Context | null, request: shared.ResetWorkflowExecutionRequest | $.VarRef<shared.ResetWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple27: any = await $.pointerValue<Exclude<apiv1.WorkflowAPIYARPCClient, null>>(a.workflow).ResetWorkflowExecution(ctx, proto.ResetWorkflowExecutionRequest(request), opts)
		let response: apiv1.ResetWorkflowExecutionResponse | $.VarRef<apiv1.ResetWorkflowExecutionResponse> | null = __goscriptTuple27[0]
		let err = __goscriptTuple27[1]
		return [thrift2.ResetWorkflowExecutionResponse(response), await thrift2.Error(err)]
	}

	public async RespondActivityTaskCanceled(ctx: context.Context | null, request: shared.RespondActivityTaskCanceledRequest | $.VarRef<shared.RespondActivityTaskCanceledRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const a = this;
		let [, err] = await $.pointerValue<Exclude<apiv1.WorkerAPIYARPCClient, null>>(a.worker).RespondActivityTaskCanceled(ctx, proto.RespondActivityTaskCanceledRequest(request), opts)
		return thrift2.Error(err)
	}

	public async RespondActivityTaskCanceledByID(ctx: context.Context | null, request: shared.RespondActivityTaskCanceledByIDRequest | $.VarRef<shared.RespondActivityTaskCanceledByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const a = this;
		let [, err] = await $.pointerValue<Exclude<apiv1.WorkerAPIYARPCClient, null>>(a.worker).RespondActivityTaskCanceledByID(ctx, proto.RespondActivityTaskCanceledByIDRequest(request), opts)
		return thrift2.Error(err)
	}

	public async RespondActivityTaskCompleted(ctx: context.Context | null, request: shared.RespondActivityTaskCompletedRequest | $.VarRef<shared.RespondActivityTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const a = this;
		let [, err] = await $.pointerValue<Exclude<apiv1.WorkerAPIYARPCClient, null>>(a.worker).RespondActivityTaskCompleted(ctx, proto.RespondActivityTaskCompletedRequest(request), opts)
		return thrift2.Error(err)
	}

	public async RespondActivityTaskCompletedByID(ctx: context.Context | null, request: shared.RespondActivityTaskCompletedByIDRequest | $.VarRef<shared.RespondActivityTaskCompletedByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const a = this;
		let [, err] = await $.pointerValue<Exclude<apiv1.WorkerAPIYARPCClient, null>>(a.worker).RespondActivityTaskCompletedByID(ctx, proto.RespondActivityTaskCompletedByIDRequest(request), opts)
		return thrift2.Error(err)
	}

	public async RespondActivityTaskFailed(ctx: context.Context | null, request: shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const a = this;
		let [, err] = await $.pointerValue<Exclude<apiv1.WorkerAPIYARPCClient, null>>(a.worker).RespondActivityTaskFailed(ctx, proto.RespondActivityTaskFailedRequest(request), opts)
		return thrift2.Error(err)
	}

	public async RespondActivityTaskFailedByID(ctx: context.Context | null, request: shared.RespondActivityTaskFailedByIDRequest | $.VarRef<shared.RespondActivityTaskFailedByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const a = this;
		let [, err] = await $.pointerValue<Exclude<apiv1.WorkerAPIYARPCClient, null>>(a.worker).RespondActivityTaskFailedByID(ctx, proto.RespondActivityTaskFailedByIDRequest(request), opts)
		return thrift2.Error(err)
	}

	public async RespondDecisionTaskCompleted(ctx: context.Context | null, request: shared.RespondDecisionTaskCompletedRequest | $.VarRef<shared.RespondDecisionTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple28: any = await $.pointerValue<Exclude<apiv1.WorkerAPIYARPCClient, null>>(a.worker).RespondDecisionTaskCompleted(ctx, proto.RespondDecisionTaskCompletedRequest(request), opts)
		let response: apiv1.RespondDecisionTaskCompletedResponse | $.VarRef<apiv1.RespondDecisionTaskCompletedResponse> | null = __goscriptTuple28[0]
		let err = __goscriptTuple28[1]
		return [thrift2.RespondDecisionTaskCompletedResponse(response), await thrift2.Error(err)]
	}

	public async RespondDecisionTaskFailed(ctx: context.Context | null, request: shared.RespondDecisionTaskFailedRequest | $.VarRef<shared.RespondDecisionTaskFailedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const a = this;
		let [, err] = await $.pointerValue<Exclude<apiv1.WorkerAPIYARPCClient, null>>(a.worker).RespondDecisionTaskFailed(ctx, proto.RespondDecisionTaskFailedRequest(request), opts)
		return thrift2.Error(err)
	}

	public async RespondQueryTaskCompleted(ctx: context.Context | null, request: shared.RespondQueryTaskCompletedRequest | $.VarRef<shared.RespondQueryTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const a = this;
		let [, err] = await $.pointerValue<Exclude<apiv1.WorkerAPIYARPCClient, null>>(a.worker).RespondQueryTaskCompleted(ctx, proto.RespondQueryTaskCompletedRequest(request), opts)
		return thrift2.Error(err)
	}

	public async RestartWorkflowExecution(ctx: context.Context | null, request: shared.RestartWorkflowExecutionRequest | $.VarRef<shared.RestartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.RestartWorkflowExecutionResponse | $.VarRef<shared.RestartWorkflowExecutionResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple29: any = await $.pointerValue<Exclude<apiv1.WorkflowAPIYARPCClient, null>>(a.workflow).RestartWorkflowExecution(ctx, proto.RestartWorkflowExecutionRequest(request), opts)
		let response: apiv1.RestartWorkflowExecutionResponse | $.VarRef<apiv1.RestartWorkflowExecutionResponse> | null = __goscriptTuple29[0]
		let err = __goscriptTuple29[1]
		return [thrift2.RestartWorkflowExecutionResponse(response), await proto.Error(err)]
	}

	public async ScanWorkflowExecutions(ctx: context.Context | null, request: shared.ListWorkflowExecutionsRequest | $.VarRef<shared.ListWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple30: any = await $.pointerValue<Exclude<apiv1.VisibilityAPIYARPCClient, null>>(a.visibility).ScanWorkflowExecutions(ctx, proto.ScanWorkflowExecutionsRequest(request), opts)
		let response: apiv1.ScanWorkflowExecutionsResponse | $.VarRef<apiv1.ScanWorkflowExecutionsResponse> | null = __goscriptTuple30[0]
		let err = __goscriptTuple30[1]
		return [thrift2.ScanWorkflowExecutionsResponse(response), await thrift2.Error(err)]
	}

	public async SignalWithStartWorkflowExecution(ctx: context.Context | null, request: shared.SignalWithStartWorkflowExecutionRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple31: any = await $.pointerValue<Exclude<apiv1.WorkflowAPIYARPCClient, null>>(a.workflow).SignalWithStartWorkflowExecution(ctx, proto.SignalWithStartWorkflowExecutionRequest(request), opts)
		let response: apiv1.SignalWithStartWorkflowExecutionResponse | $.VarRef<apiv1.SignalWithStartWorkflowExecutionResponse> | null = __goscriptTuple31[0]
		let err = __goscriptTuple31[1]
		return [thrift2.SignalWithStartWorkflowExecutionResponse(response), await thrift2.Error(err)]
	}

	public async SignalWithStartWorkflowExecutionAsync(ctx: context.Context | null, request: shared.SignalWithStartWorkflowExecutionAsyncRequest | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<shared.SignalWithStartWorkflowExecutionAsyncResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple32: any = await $.pointerValue<Exclude<apiv1.WorkflowAPIYARPCClient, null>>(a.workflow).SignalWithStartWorkflowExecutionAsync(ctx, proto.SignalWithStartWorkflowExecutionAsyncRequest(request), opts)
		let response: apiv1.SignalWithStartWorkflowExecutionAsyncResponse | $.VarRef<apiv1.SignalWithStartWorkflowExecutionAsyncResponse> | null = __goscriptTuple32[0]
		let err = __goscriptTuple32[1]
		return [thrift2.SignalWithStartWorkflowExecutionAsyncResponse(response), await thrift2.Error(err)]
	}

	public async SignalWorkflowExecution(ctx: context.Context | null, request: shared.SignalWorkflowExecutionRequest | $.VarRef<shared.SignalWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const a = this;
		let [, err] = await $.pointerValue<Exclude<apiv1.WorkflowAPIYARPCClient, null>>(a.workflow).SignalWorkflowExecution(ctx, proto.SignalWorkflowExecutionRequest(request), opts)
		return thrift2.Error(err)
	}

	public async StartWorkflowExecution(ctx: context.Context | null, request: shared.StartWorkflowExecutionRequest | $.VarRef<shared.StartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple33: any = await $.pointerValue<Exclude<apiv1.WorkflowAPIYARPCClient, null>>(a.workflow).StartWorkflowExecution(ctx, proto.StartWorkflowExecutionRequest(request), opts)
		let response: apiv1.StartWorkflowExecutionResponse | $.VarRef<apiv1.StartWorkflowExecutionResponse> | null = __goscriptTuple33[0]
		let err = __goscriptTuple33[1]
		return [thrift2.StartWorkflowExecutionResponse(response), await thrift2.Error(err)]
	}

	public async StartWorkflowExecutionAsync(ctx: context.Context | null, request: shared.StartWorkflowExecutionAsyncRequest | $.VarRef<shared.StartWorkflowExecutionAsyncRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.StartWorkflowExecutionAsyncResponse | $.VarRef<shared.StartWorkflowExecutionAsyncResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple34: any = await $.pointerValue<Exclude<apiv1.WorkflowAPIYARPCClient, null>>(a.workflow).StartWorkflowExecutionAsync(ctx, proto.StartWorkflowExecutionAsyncRequest(request), opts)
		let response: apiv1.StartWorkflowExecutionAsyncResponse | $.VarRef<apiv1.StartWorkflowExecutionAsyncResponse> | null = __goscriptTuple34[0]
		let err = __goscriptTuple34[1]
		return [thrift2.StartWorkflowExecutionAsyncResponse(response), await thrift2.Error(err)]
	}

	public async TerminateWorkflowExecution(ctx: context.Context | null, request: shared.TerminateWorkflowExecutionRequest | $.VarRef<shared.TerminateWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const a = this;
		let [, err] = await $.pointerValue<Exclude<apiv1.WorkflowAPIYARPCClient, null>>(a.workflow).TerminateWorkflowExecution(ctx, proto.TerminateWorkflowExecutionRequest(request), opts)
		return thrift2.Error(err)
	}

	public async UnpauseSchedule(ctx: context.Context | null, Request: shared.UnpauseScheduleRequest | $.VarRef<shared.UnpauseScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.UnpauseScheduleResponse | $.VarRef<shared.UnpauseScheduleResponse> | null, $.GoError]> {
		const a = this;
		if (a.schedule == null) {
			return [null, $.interfaceValue<$.GoError>(errScheduleClientNotConfigured, "*shared.BadRequestError", /* @__PURE__ */ $.pointerType("shared.BadRequestError"))]
		}
		let __goscriptTuple35: any = await $.pointerValue<Exclude<apiv1.ScheduleAPIYARPCClient, null>>(a.schedule).UnpauseSchedule(ctx, proto.UnpauseScheduleRequest(Request), opts)
		let response: apiv1.UnpauseScheduleResponse | $.VarRef<apiv1.UnpauseScheduleResponse> | null = __goscriptTuple35[0]
		let err = __goscriptTuple35[1]
		return [thrift2.UnpauseScheduleResponse(response), await thrift2.Error(err)]
	}

	public async UpdateDomain(ctx: context.Context | null, request: shared.UpdateDomainRequest | $.VarRef<shared.UpdateDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple36: any = await $.pointerValue<Exclude<apiv1.DomainAPIYARPCClient, null>>(a.domain).UpdateDomain(ctx, proto.UpdateDomainRequest(request), opts)
		let response: apiv1.UpdateDomainResponse | $.VarRef<apiv1.UpdateDomainResponse> | null = __goscriptTuple36[0]
		let err = __goscriptTuple36[1]
		return [thrift2.UpdateDomainResponse(response), await thrift2.Error(err)]
	}

	public async UpdateSchedule(ctx: context.Context | null, Request: shared.UpdateScheduleRequest | $.VarRef<shared.UpdateScheduleRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[shared.UpdateScheduleResponse | $.VarRef<shared.UpdateScheduleResponse> | null, $.GoError]> {
		const a = this;
		if (a.schedule == null) {
			return [null, $.interfaceValue<$.GoError>(errScheduleClientNotConfigured, "*shared.BadRequestError", /* @__PURE__ */ $.pointerType("shared.BadRequestError"))]
		}
		let __goscriptTuple37: any = await $.pointerValue<Exclude<apiv1.ScheduleAPIYARPCClient, null>>(a.schedule).UpdateSchedule(ctx, proto.UpdateScheduleRequest(Request), opts)
		let response: apiv1.UpdateScheduleResponse | $.VarRef<apiv1.UpdateScheduleResponse> | null = __goscriptTuple37[0]
		let err = __goscriptTuple37[1]
		return [thrift2.UpdateScheduleResponse(response), await thrift2.Error(err)]
	}

	static __typeInfo = $.registerStructType(
		"compatibility.thrift2protoAdapter",
		() => new thrift2protoAdapter(),
		() => [{ name: "BackfillSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.BackfillScheduleResponse") }, { type: "error" }] }, { name: "CountWorkflowExecutions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.CountWorkflowExecutionsResponse") }, { type: "error" }] }, { name: "CreateSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.CreateScheduleResponse") }, { type: "error" }] }, { name: "DeleteDomain", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "DeleteSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.DeleteScheduleResponse") }, { type: "error" }] }, { name: "DeprecateDomain", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "DescribeDomain", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.DescribeDomainResponse") }, { type: "error" }] }, { name: "DescribeSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.DescribeScheduleResponse") }, { type: "error" }] }, { name: "DescribeTaskList", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.DescribeTaskListResponse") }, { type: "error" }] }, { name: "DescribeWorkflowExecution", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.DescribeWorkflowExecutionResponse") }, { type: "error" }] }, { name: "DiagnoseWorkflowExecution", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.DiagnoseWorkflowExecutionResponse") }, { type: "error" }] }, { name: "FailoverDomain", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.FailoverDomainResponse") }, { type: "error" }] }, { name: "GetClusterInfo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.ClusterInfo") }, { type: "error" }] }, { name: "GetSearchAttributes", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.GetSearchAttributesResponse") }, { type: "error" }] }, { name: "GetTaskListsByDomain", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.GetTaskListsByDomainResponse") }, { type: "error" }] }, { name: "GetWorkflowExecutionHistory", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.GetWorkflowExecutionHistoryResponse") }, { type: "error" }] }, { name: "ListArchivedWorkflowExecutions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.ListArchivedWorkflowExecutionsResponse") }, { type: "error" }] }, { name: "ListClosedWorkflowExecutions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.ListClosedWorkflowExecutionsResponse") }, { type: "error" }] }, { name: "ListDomains", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.ListDomainsResponse") }, { type: "error" }] }, { name: "ListFailoverHistory", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.ListFailoverHistoryResponse") }, { type: "error" }] }, { name: "ListOpenWorkflowExecutions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.ListOpenWorkflowExecutionsResponse") }, { type: "error" }] }, { name: "ListSchedules", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.ListSchedulesResponse") }, { type: "error" }] }, { name: "ListTaskListPartitions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.ListTaskListPartitionsResponse") }, { type: "error" }] }, { name: "ListWorkflowExecutions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse") }, { type: "error" }] }, { name: "PauseSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.PauseScheduleResponse") }, { type: "error" }] }, { name: "PollForActivityTask", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse") }, { type: "error" }] }, { name: "PollForDecisionTask", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.PollForDecisionTaskResponse") }, { type: "error" }] }, { name: "QueryWorkflow", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.QueryWorkflowResponse") }, { type: "error" }] }, { name: "RecordActivityTaskHeartbeat", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatResponse") }, { type: "error" }] }, { name: "RecordActivityTaskHeartbeatByID", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatResponse") }, { type: "error" }] }, { name: "RefreshWorkflowTasks", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "RegisterDomain", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "RequestCancelWorkflowExecution", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "ResetStickyTaskList", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.ResetStickyTaskListResponse") }, { type: "error" }] }, { name: "ResetWorkflowExecution", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.ResetWorkflowExecutionResponse") }, { type: "error" }] }, { name: "RespondActivityTaskCanceled", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "RespondActivityTaskCanceledByID", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "RespondActivityTaskCompleted", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "RespondActivityTaskCompletedByID", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "RespondActivityTaskFailed", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "RespondActivityTaskFailedByID", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "RespondDecisionTaskCompleted", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.RespondDecisionTaskCompletedResponse") }, { type: "error" }] }, { name: "RespondDecisionTaskFailed", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "RespondQueryTaskCompleted", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "RestartWorkflowExecution", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.RestartWorkflowExecutionResponse") }, { type: "error" }] }, { name: "ScanWorkflowExecutions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.ListWorkflowExecutionsResponse") }, { type: "error" }] }, { name: "SignalWithStartWorkflowExecution", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionResponse") }, { type: "error" }] }, { name: "SignalWithStartWorkflowExecutionAsync", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.SignalWithStartWorkflowExecutionAsyncResponse") }, { type: "error" }] }, { name: "SignalWorkflowExecution", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "StartWorkflowExecution", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionResponse") }, { type: "error" }] }, { name: "StartWorkflowExecutionAsync", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.StartWorkflowExecutionAsyncResponse") }, { type: "error" }] }, { name: "TerminateWorkflowExecution", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }] }, { name: "UnpauseSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.UnpauseScheduleResponse") }, { type: "error" }] }, { name: "UpdateDomain", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.UpdateDomainResponse") }, { type: "error" }] }, { name: "UpdateSchedule", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("shared.UpdateScheduleResponse") }, { type: "error" }] }],
		thrift2protoAdapter,
		() => [{ name: "domain", key: "domain", type: "apiv1.DomainAPIYARPCClient" }, { name: "workflow", key: "workflow", type: "apiv1.WorkflowAPIYARPCClient" }, { name: "worker", key: "worker", type: "apiv1.WorkerAPIYARPCClient" }, { name: "visibility", key: "visibility", type: "apiv1.VisibilityAPIYARPCClient" }, { name: "schedule", key: "schedule", type: "apiv1.ScheduleAPIYARPCClient" }]
	)
}

export class domainAPIthriftAdapter {
	public get service(): workflowserviceclient.Interface | null {
		return this._fields.service
	}

	public set service(value: workflowserviceclient.Interface | null) {
		this._fields.service = value
	}

	public _fields: {
		service: workflowserviceclient.Interface | null
	}

	constructor(init?: Partial<{service?: workflowserviceclient.Interface | null}>, __goscriptValue?: boolean) {
		this._fields = {
			service: init?.service ?? (null! as workflowserviceclient.Interface | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): domainAPIthriftAdapter {
		return new domainAPIthriftAdapter(this, true)
	}

	public __goscriptAssign(source: domainAPIthriftAdapter): void {
		const target = this._fields
		const values = source._fields
		target.service = $.assignFieldValue(target.service, values.service, "workflowserviceclient.Interface")
	}

	public async DeprecateDomain(ctx: context.Context | null, request: apiv1.DeprecateDomainRequest | $.VarRef<apiv1.DeprecateDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.DeprecateDomainResponse | $.VarRef<apiv1.DeprecateDomainResponse> | null, $.GoError]> {
		const a = this;
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).DeprecateDomain(ctx, thrift2.DeprecateDomainRequest(request), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [new apiv1.DeprecateDomainResponse(), await proto.Error(err)]
	}

	public async DescribeDomain(ctx: context.Context | null, request: apiv1.DescribeDomainRequest | $.VarRef<apiv1.DescribeDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.DescribeDomainResponse | $.VarRef<apiv1.DescribeDomainResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple38: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).DescribeDomain(ctx, thrift2.DescribeDomainRequest(request), opts)
		let response: shared.DescribeDomainResponse | $.VarRef<shared.DescribeDomainResponse> | null = __goscriptTuple38[0]
		let err = __goscriptTuple38[1]
		return [proto.DescribeDomainResponse(response), await proto.Error(err)]
	}

	public async ListDomains(ctx: context.Context | null, request: apiv1.ListDomainsRequest | $.VarRef<apiv1.ListDomainsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.ListDomainsResponse | $.VarRef<apiv1.ListDomainsResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple39: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).ListDomains(ctx, thrift2.ListDomainsRequest(request), opts)
		let response: shared.ListDomainsResponse | $.VarRef<shared.ListDomainsResponse> | null = __goscriptTuple39[0]
		let err = __goscriptTuple39[1]
		return [proto.ListDomainsResponse(response), await proto.Error(err)]
	}

	public async RegisterDomain(ctx: context.Context | null, request: apiv1.RegisterDomainRequest | $.VarRef<apiv1.RegisterDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.RegisterDomainResponse | $.VarRef<apiv1.RegisterDomainResponse> | null, $.GoError]> {
		const a = this;
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).RegisterDomain(ctx, thrift2.RegisterDomainRequest(request), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [new apiv1.RegisterDomainResponse(), await proto.Error(err)]
	}

	public async UpdateDomain(ctx: context.Context | null, request: apiv1.UpdateDomainRequest | $.VarRef<apiv1.UpdateDomainRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.UpdateDomainResponse | $.VarRef<apiv1.UpdateDomainResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple40: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).UpdateDomain(ctx, thrift2.UpdateDomainRequest(request), opts)
		let response: shared.UpdateDomainResponse | $.VarRef<shared.UpdateDomainResponse> | null = __goscriptTuple40[0]
		let err = __goscriptTuple40[1]
		return [proto.UpdateDomainResponse(response), await proto.Error(err)]
	}

	static __typeInfo = $.registerStructType(
		"compatibility.domainAPIthriftAdapter",
		() => new domainAPIthriftAdapter(),
		() => [{ name: "DeprecateDomain", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.DeprecateDomainResponse") }, { type: "error" }] }, { name: "DescribeDomain", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.DescribeDomainResponse") }, { type: "error" }] }, { name: "ListDomains", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ListDomainsResponse") }, { type: "error" }] }, { name: "RegisterDomain", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RegisterDomainResponse") }, { type: "error" }] }, { name: "UpdateDomain", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.UpdateDomainResponse") }, { type: "error" }] }],
		domainAPIthriftAdapter,
		() => [{ name: "service", key: "service", type: "workflowserviceclient.Interface" }]
	)
}

export class workflowAPIthriftAdapter {
	public get service(): workflowserviceclient.Interface | null {
		return this._fields.service
	}

	public set service(value: workflowserviceclient.Interface | null) {
		this._fields.service = value
	}

	public _fields: {
		service: workflowserviceclient.Interface | null
	}

	constructor(init?: Partial<{service?: workflowserviceclient.Interface | null}>, __goscriptValue?: boolean) {
		this._fields = {
			service: init?.service ?? (null! as workflowserviceclient.Interface | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowAPIthriftAdapter {
		return new workflowAPIthriftAdapter(this, true)
	}

	public __goscriptAssign(source: workflowAPIthriftAdapter): void {
		const target = this._fields
		const values = source._fields
		target.service = $.assignFieldValue(target.service, values.service, "workflowserviceclient.Interface")
	}

	public async DescribeTaskList(ctx: context.Context | null, request: apiv1.DescribeTaskListRequest | $.VarRef<apiv1.DescribeTaskListRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.DescribeTaskListResponse | $.VarRef<apiv1.DescribeTaskListResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple41: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).DescribeTaskList(ctx, thrift2.DescribeTaskListRequest(request), opts)
		let response: shared.DescribeTaskListResponse | $.VarRef<shared.DescribeTaskListResponse> | null = __goscriptTuple41[0]
		let err = __goscriptTuple41[1]
		return [proto.DescribeTaskListResponse(response), await proto.Error(err)]
	}

	public async DescribeWorkflowExecution(ctx: context.Context | null, request: apiv1.DescribeWorkflowExecutionRequest | $.VarRef<apiv1.DescribeWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.DescribeWorkflowExecutionResponse | $.VarRef<apiv1.DescribeWorkflowExecutionResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple42: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).DescribeWorkflowExecution(ctx, thrift2.DescribeWorkflowExecutionRequest(request), opts)
		let response: shared.DescribeWorkflowExecutionResponse | $.VarRef<shared.DescribeWorkflowExecutionResponse> | null = __goscriptTuple42[0]
		let err = __goscriptTuple42[1]
		return [proto.DescribeWorkflowExecutionResponse(response), await proto.Error(err)]
	}

	public async DiagnoseWorkflowExecution(ctx: context.Context | null, request: apiv1.DiagnoseWorkflowExecutionRequest | $.VarRef<apiv1.DiagnoseWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.DiagnoseWorkflowExecutionResponse | $.VarRef<apiv1.DiagnoseWorkflowExecutionResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple43: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).DiagnoseWorkflowExecution(ctx, thrift2.DiagnoseWorkflowExecutionRequest(request), opts)
		let response: shared.DiagnoseWorkflowExecutionResponse | $.VarRef<shared.DiagnoseWorkflowExecutionResponse> | null = __goscriptTuple43[0]
		let err = __goscriptTuple43[1]
		return [proto.DiagnoseWorkflowExecutionResponse(response), await proto.Error(err)]
	}

	public async GetClusterInfo(ctx: context.Context | null, request: apiv1.GetClusterInfoRequest | $.VarRef<apiv1.GetClusterInfoRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.GetClusterInfoResponse | $.VarRef<apiv1.GetClusterInfoResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple44: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).GetClusterInfo(ctx, opts)
		let response: shared.ClusterInfo | $.VarRef<shared.ClusterInfo> | null = __goscriptTuple44[0]
		let err = __goscriptTuple44[1]
		return [proto.GetClusterInfoResponse(response), await proto.Error(err)]
	}

	public async GetWorkflowExecutionHistory(ctx: context.Context | null, request: apiv1.GetWorkflowExecutionHistoryRequest | $.VarRef<apiv1.GetWorkflowExecutionHistoryRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.GetWorkflowExecutionHistoryResponse | $.VarRef<apiv1.GetWorkflowExecutionHistoryResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple45: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).GetWorkflowExecutionHistory(ctx, thrift2.GetWorkflowExecutionHistoryRequest(request), opts)
		let response: shared.GetWorkflowExecutionHistoryResponse | $.VarRef<shared.GetWorkflowExecutionHistoryResponse> | null = __goscriptTuple45[0]
		let err = __goscriptTuple45[1]
		return [proto.GetWorkflowExecutionHistoryResponse(response), await proto.Error(err)]
	}

	public async ListTaskListPartitions(ctx: context.Context | null, request: apiv1.ListTaskListPartitionsRequest | $.VarRef<apiv1.ListTaskListPartitionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.ListTaskListPartitionsResponse | $.VarRef<apiv1.ListTaskListPartitionsResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple46: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).ListTaskListPartitions(ctx, thrift2.ListTaskListPartitionsRequest(request), opts)
		let response: shared.ListTaskListPartitionsResponse | $.VarRef<shared.ListTaskListPartitionsResponse> | null = __goscriptTuple46[0]
		let err = __goscriptTuple46[1]
		return [proto.ListTaskListPartitionsResponse(response), await proto.Error(err)]
	}

	public async QueryWorkflow(ctx: context.Context | null, request: apiv1.QueryWorkflowRequest | $.VarRef<apiv1.QueryWorkflowRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.QueryWorkflowResponse | $.VarRef<apiv1.QueryWorkflowResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple47: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).QueryWorkflow(ctx, thrift2.QueryWorkflowRequest(request), opts)
		let response: shared.QueryWorkflowResponse | $.VarRef<shared.QueryWorkflowResponse> | null = __goscriptTuple47[0]
		let err = __goscriptTuple47[1]
		return [proto.QueryWorkflowResponse(response), await proto.Error(err)]
	}

	public async RequestCancelWorkflowExecution(ctx: context.Context | null, request: apiv1.RequestCancelWorkflowExecutionRequest | $.VarRef<apiv1.RequestCancelWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.RequestCancelWorkflowExecutionResponse | $.VarRef<apiv1.RequestCancelWorkflowExecutionResponse> | null, $.GoError]> {
		const a = this;
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).RequestCancelWorkflowExecution(ctx, thrift2.RequestCancelWorkflowExecutionRequest(request), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [new apiv1.RequestCancelWorkflowExecutionResponse(), await proto.Error(err)]
	}

	public async ResetWorkflowExecution(ctx: context.Context | null, request: apiv1.ResetWorkflowExecutionRequest | $.VarRef<apiv1.ResetWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.ResetWorkflowExecutionResponse | $.VarRef<apiv1.ResetWorkflowExecutionResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple48: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).ResetWorkflowExecution(ctx, thrift2.ResetWorkflowExecutionRequest(request), opts)
		let response: shared.ResetWorkflowExecutionResponse | $.VarRef<shared.ResetWorkflowExecutionResponse> | null = __goscriptTuple48[0]
		let err = __goscriptTuple48[1]
		return [proto.ResetWorkflowExecutionResponse(response), await proto.Error(err)]
	}

	public async SignalWithStartWorkflowExecution(ctx: context.Context | null, request: apiv1.SignalWithStartWorkflowExecutionRequest | $.VarRef<apiv1.SignalWithStartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.SignalWithStartWorkflowExecutionResponse | $.VarRef<apiv1.SignalWithStartWorkflowExecutionResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple49: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).SignalWithStartWorkflowExecution(ctx, thrift2.SignalWithStartWorkflowExecutionRequest(request), opts)
		let response: shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null = __goscriptTuple49[0]
		let err = __goscriptTuple49[1]
		return [proto.SignalWithStartWorkflowExecutionResponse(response), await proto.Error(err)]
	}

	public async SignalWorkflowExecution(ctx: context.Context | null, request: apiv1.SignalWorkflowExecutionRequest | $.VarRef<apiv1.SignalWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.SignalWorkflowExecutionResponse | $.VarRef<apiv1.SignalWorkflowExecutionResponse> | null, $.GoError]> {
		const a = this;
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).SignalWorkflowExecution(ctx, thrift2.SignalWorkflowExecutionRequest(request), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [new apiv1.SignalWorkflowExecutionResponse(), await proto.Error(err)]
	}

	public async StartWorkflowExecution(ctx: context.Context | null, request: apiv1.StartWorkflowExecutionRequest | $.VarRef<apiv1.StartWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.StartWorkflowExecutionResponse | $.VarRef<apiv1.StartWorkflowExecutionResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple50: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).StartWorkflowExecution(ctx, thrift2.StartWorkflowExecutionRequest(request), opts)
		let response: shared.StartWorkflowExecutionResponse | $.VarRef<shared.StartWorkflowExecutionResponse> | null = __goscriptTuple50[0]
		let err = __goscriptTuple50[1]
		return [proto.StartWorkflowExecutionResponse(response), await proto.Error(err)]
	}

	public async TerminateWorkflowExecution(ctx: context.Context | null, request: apiv1.TerminateWorkflowExecutionRequest | $.VarRef<apiv1.TerminateWorkflowExecutionRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.TerminateWorkflowExecutionResponse | $.VarRef<apiv1.TerminateWorkflowExecutionResponse> | null, $.GoError]> {
		const a = this;
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).TerminateWorkflowExecution(ctx, thrift2.TerminateWorkflowExecutionRequest(request), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [new apiv1.TerminateWorkflowExecutionResponse(), await proto.Error(err)]
	}

	static __typeInfo = $.registerStructType(
		"compatibility.workflowAPIthriftAdapter",
		() => new workflowAPIthriftAdapter(),
		() => [{ name: "DescribeTaskList", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.DescribeTaskListResponse") }, { type: "error" }] }, { name: "DescribeWorkflowExecution", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.DescribeWorkflowExecutionResponse") }, { type: "error" }] }, { name: "DiagnoseWorkflowExecution", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.DiagnoseWorkflowExecutionResponse") }, { type: "error" }] }, { name: "GetClusterInfo", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.GetClusterInfoResponse") }, { type: "error" }] }, { name: "GetWorkflowExecutionHistory", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.GetWorkflowExecutionHistoryResponse") }, { type: "error" }] }, { name: "ListTaskListPartitions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ListTaskListPartitionsResponse") }, { type: "error" }] }, { name: "QueryWorkflow", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.QueryWorkflowResponse") }, { type: "error" }] }, { name: "RequestCancelWorkflowExecution", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RequestCancelWorkflowExecutionResponse") }, { type: "error" }] }, { name: "ResetWorkflowExecution", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ResetWorkflowExecutionResponse") }, { type: "error" }] }, { name: "SignalWithStartWorkflowExecution", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.SignalWithStartWorkflowExecutionResponse") }, { type: "error" }] }, { name: "SignalWorkflowExecution", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.SignalWorkflowExecutionResponse") }, { type: "error" }] }, { name: "StartWorkflowExecution", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.StartWorkflowExecutionResponse") }, { type: "error" }] }, { name: "TerminateWorkflowExecution", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.TerminateWorkflowExecutionResponse") }, { type: "error" }] }],
		workflowAPIthriftAdapter,
		() => [{ name: "service", key: "service", type: "workflowserviceclient.Interface" }]
	)
}

export class workerAPIthriftAdapter {
	public get service(): workflowserviceclient.Interface | null {
		return this._fields.service
	}

	public set service(value: workflowserviceclient.Interface | null) {
		this._fields.service = value
	}

	public _fields: {
		service: workflowserviceclient.Interface | null
	}

	constructor(init?: Partial<{service?: workflowserviceclient.Interface | null}>, __goscriptValue?: boolean) {
		this._fields = {
			service: init?.service ?? (null! as workflowserviceclient.Interface | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workerAPIthriftAdapter {
		return new workerAPIthriftAdapter(this, true)
	}

	public __goscriptAssign(source: workerAPIthriftAdapter): void {
		const target = this._fields
		const values = source._fields
		target.service = $.assignFieldValue(target.service, values.service, "workflowserviceclient.Interface")
	}

	public async PollForActivityTask(ctx: context.Context | null, request: apiv1.PollForActivityTaskRequest | $.VarRef<apiv1.PollForActivityTaskRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.PollForActivityTaskResponse | $.VarRef<apiv1.PollForActivityTaskResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple51: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).PollForActivityTask(ctx, thrift2.PollForActivityTaskRequest(request), opts)
		let response: shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null = __goscriptTuple51[0]
		let err = __goscriptTuple51[1]
		return [proto.PollForActivityTaskResponse(response), await proto.Error(err)]
	}

	public async PollForDecisionTask(ctx: context.Context | null, request: apiv1.PollForDecisionTaskRequest | $.VarRef<apiv1.PollForDecisionTaskRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.PollForDecisionTaskResponse | $.VarRef<apiv1.PollForDecisionTaskResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple52: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).PollForDecisionTask(ctx, thrift2.PollForDecisionTaskRequest(request), opts)
		let response: shared.PollForDecisionTaskResponse | $.VarRef<shared.PollForDecisionTaskResponse> | null = __goscriptTuple52[0]
		let err = __goscriptTuple52[1]
		return [proto.PollForDecisionTaskResponse(response), await proto.Error(err)]
	}

	public async RecordActivityTaskHeartbeat(ctx: context.Context | null, request: apiv1.RecordActivityTaskHeartbeatRequest | $.VarRef<apiv1.RecordActivityTaskHeartbeatRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.RecordActivityTaskHeartbeatResponse | $.VarRef<apiv1.RecordActivityTaskHeartbeatResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple53: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).RecordActivityTaskHeartbeat(ctx, thrift2.RecordActivityTaskHeartbeatRequest(request), opts)
		let response: shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null = __goscriptTuple53[0]
		let err = __goscriptTuple53[1]
		return [proto.RecordActivityTaskHeartbeatResponse(response), await proto.Error(err)]
	}

	public async RecordActivityTaskHeartbeatByID(ctx: context.Context | null, request: apiv1.RecordActivityTaskHeartbeatByIDRequest | $.VarRef<apiv1.RecordActivityTaskHeartbeatByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.RecordActivityTaskHeartbeatByIDResponse | $.VarRef<apiv1.RecordActivityTaskHeartbeatByIDResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple54: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).RecordActivityTaskHeartbeatByID(ctx, thrift2.RecordActivityTaskHeartbeatByIDRequest(request), opts)
		let response: shared.RecordActivityTaskHeartbeatResponse | $.VarRef<shared.RecordActivityTaskHeartbeatResponse> | null = __goscriptTuple54[0]
		let err = __goscriptTuple54[1]
		return [proto.RecordActivityTaskHeartbeatByIDResponse(response), await proto.Error(err)]
	}

	public async ResetStickyTaskList(ctx: context.Context | null, request: apiv1.ResetStickyTaskListRequest | $.VarRef<apiv1.ResetStickyTaskListRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.ResetStickyTaskListResponse | $.VarRef<apiv1.ResetStickyTaskListResponse> | null, $.GoError]> {
		const a = this;
		let [, err] = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).ResetStickyTaskList(ctx, thrift2.ResetStickyTaskListRequest(request), opts)
		return [new apiv1.ResetStickyTaskListResponse(), await proto.Error(err)]
	}

	public async RespondActivityTaskCanceled(ctx: context.Context | null, request: apiv1.RespondActivityTaskCanceledRequest | $.VarRef<apiv1.RespondActivityTaskCanceledRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.RespondActivityTaskCanceledResponse | $.VarRef<apiv1.RespondActivityTaskCanceledResponse> | null, $.GoError]> {
		const a = this;
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).RespondActivityTaskCanceled(ctx, thrift2.RespondActivityTaskCanceledRequest(request), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [new apiv1.RespondActivityTaskCanceledResponse(), await proto.Error(err)]
	}

	public async RespondActivityTaskCanceledByID(ctx: context.Context | null, request: apiv1.RespondActivityTaskCanceledByIDRequest | $.VarRef<apiv1.RespondActivityTaskCanceledByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.RespondActivityTaskCanceledByIDResponse | $.VarRef<apiv1.RespondActivityTaskCanceledByIDResponse> | null, $.GoError]> {
		const a = this;
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).RespondActivityTaskCanceledByID(ctx, thrift2.RespondActivityTaskCanceledByIDRequest(request), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [new apiv1.RespondActivityTaskCanceledByIDResponse(), await proto.Error(err)]
	}

	public async RespondActivityTaskCompleted(ctx: context.Context | null, request: apiv1.RespondActivityTaskCompletedRequest | $.VarRef<apiv1.RespondActivityTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.RespondActivityTaskCompletedResponse | $.VarRef<apiv1.RespondActivityTaskCompletedResponse> | null, $.GoError]> {
		const a = this;
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).RespondActivityTaskCompleted(ctx, thrift2.RespondActivityTaskCompletedRequest(request), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [new apiv1.RespondActivityTaskCompletedResponse(), await proto.Error(err)]
	}

	public async RespondActivityTaskCompletedByID(ctx: context.Context | null, request: apiv1.RespondActivityTaskCompletedByIDRequest | $.VarRef<apiv1.RespondActivityTaskCompletedByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.RespondActivityTaskCompletedByIDResponse | $.VarRef<apiv1.RespondActivityTaskCompletedByIDResponse> | null, $.GoError]> {
		const a = this;
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).RespondActivityTaskCompletedByID(ctx, thrift2.RespondActivityTaskCompletedByIDRequest(request), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [new apiv1.RespondActivityTaskCompletedByIDResponse(), await proto.Error(err)]
	}

	public async RespondActivityTaskFailed(ctx: context.Context | null, request: apiv1.RespondActivityTaskFailedRequest | $.VarRef<apiv1.RespondActivityTaskFailedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.RespondActivityTaskFailedResponse | $.VarRef<apiv1.RespondActivityTaskFailedResponse> | null, $.GoError]> {
		const a = this;
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).RespondActivityTaskFailed(ctx, thrift2.RespondActivityTaskFailedRequest(request), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [new apiv1.RespondActivityTaskFailedResponse(), await proto.Error(err)]
	}

	public async RespondActivityTaskFailedByID(ctx: context.Context | null, request: apiv1.RespondActivityTaskFailedByIDRequest | $.VarRef<apiv1.RespondActivityTaskFailedByIDRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.RespondActivityTaskFailedByIDResponse | $.VarRef<apiv1.RespondActivityTaskFailedByIDResponse> | null, $.GoError]> {
		const a = this;
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).RespondActivityTaskFailedByID(ctx, thrift2.RespondActivityTaskFailedByIDRequest(request), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [new apiv1.RespondActivityTaskFailedByIDResponse(), await proto.Error(err)]
	}

	public async RespondDecisionTaskCompleted(ctx: context.Context | null, request: apiv1.RespondDecisionTaskCompletedRequest | $.VarRef<apiv1.RespondDecisionTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.RespondDecisionTaskCompletedResponse | $.VarRef<apiv1.RespondDecisionTaskCompletedResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple55: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).RespondDecisionTaskCompleted(ctx, thrift2.RespondDecisionTaskCompletedRequest(request), opts)
		let response: shared.RespondDecisionTaskCompletedResponse | $.VarRef<shared.RespondDecisionTaskCompletedResponse> | null = __goscriptTuple55[0]
		let err = __goscriptTuple55[1]
		return [proto.RespondDecisionTaskCompletedResponse(response), await proto.Error(err)]
	}

	public async RespondDecisionTaskFailed(ctx: context.Context | null, request: apiv1.RespondDecisionTaskFailedRequest | $.VarRef<apiv1.RespondDecisionTaskFailedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.RespondDecisionTaskFailedResponse | $.VarRef<apiv1.RespondDecisionTaskFailedResponse> | null, $.GoError]> {
		const a = this;
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).RespondDecisionTaskFailed(ctx, thrift2.RespondDecisionTaskFailedRequest(request), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [new apiv1.RespondDecisionTaskFailedResponse(), await proto.Error(err)]
	}

	public async RespondQueryTaskCompleted(ctx: context.Context | null, request: apiv1.RespondQueryTaskCompletedRequest | $.VarRef<apiv1.RespondQueryTaskCompletedRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.RespondQueryTaskCompletedResponse | $.VarRef<apiv1.RespondQueryTaskCompletedResponse> | null, $.GoError]> {
		const a = this;
		let err = (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).RespondQueryTaskCompleted(ctx, thrift2.RespondQueryTaskCompletedRequest(request), opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [new apiv1.RespondQueryTaskCompletedResponse(), await proto.Error(err)]
	}

	static __typeInfo = $.registerStructType(
		"compatibility.workerAPIthriftAdapter",
		() => new workerAPIthriftAdapter(),
		() => [{ name: "PollForActivityTask", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.PollForActivityTaskResponse") }, { type: "error" }] }, { name: "PollForDecisionTask", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.PollForDecisionTaskResponse") }, { type: "error" }] }, { name: "RecordActivityTaskHeartbeat", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatResponse") }, { type: "error" }] }, { name: "RecordActivityTaskHeartbeatByID", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RecordActivityTaskHeartbeatByIDResponse") }, { type: "error" }] }, { name: "ResetStickyTaskList", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ResetStickyTaskListResponse") }, { type: "error" }] }, { name: "RespondActivityTaskCanceled", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledResponse") }, { type: "error" }] }, { name: "RespondActivityTaskCanceledByID", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCanceledByIDResponse") }, { type: "error" }] }, { name: "RespondActivityTaskCompleted", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedResponse") }, { type: "error" }] }, { name: "RespondActivityTaskCompletedByID", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskCompletedByIDResponse") }, { type: "error" }] }, { name: "RespondActivityTaskFailed", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedResponse") }, { type: "error" }] }, { name: "RespondActivityTaskFailedByID", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RespondActivityTaskFailedByIDResponse") }, { type: "error" }] }, { name: "RespondDecisionTaskCompleted", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskCompletedResponse") }, { type: "error" }] }, { name: "RespondDecisionTaskFailed", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RespondDecisionTaskFailedResponse") }, { type: "error" }] }, { name: "RespondQueryTaskCompleted", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.RespondQueryTaskCompletedResponse") }, { type: "error" }] }],
		workerAPIthriftAdapter,
		() => [{ name: "service", key: "service", type: "workflowserviceclient.Interface" }]
	)
}

export class visibilityAPIthriftAdapter {
	public get service(): workflowserviceclient.Interface | null {
		return this._fields.service
	}

	public set service(value: workflowserviceclient.Interface | null) {
		this._fields.service = value
	}

	public _fields: {
		service: workflowserviceclient.Interface | null
	}

	constructor(init?: Partial<{service?: workflowserviceclient.Interface | null}>, __goscriptValue?: boolean) {
		this._fields = {
			service: init?.service ?? (null! as workflowserviceclient.Interface | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): visibilityAPIthriftAdapter {
		return new visibilityAPIthriftAdapter(this, true)
	}

	public __goscriptAssign(source: visibilityAPIthriftAdapter): void {
		const target = this._fields
		const values = source._fields
		target.service = $.assignFieldValue(target.service, values.service, "workflowserviceclient.Interface")
	}

	public async CountWorkflowExecutions(ctx: context.Context | null, request: apiv1.CountWorkflowExecutionsRequest | $.VarRef<apiv1.CountWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.CountWorkflowExecutionsResponse | $.VarRef<apiv1.CountWorkflowExecutionsResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple56: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).CountWorkflowExecutions(ctx, thrift2.CountWorkflowExecutionsRequest(request), opts)
		let response: shared.CountWorkflowExecutionsResponse | $.VarRef<shared.CountWorkflowExecutionsResponse> | null = __goscriptTuple56[0]
		let err = __goscriptTuple56[1]
		return [proto.CountWorkflowExecutionsResponse(response), await proto.Error(err)]
	}

	public async GetSearchAttributes(ctx: context.Context | null, request: apiv1.GetSearchAttributesRequest | $.VarRef<apiv1.GetSearchAttributesRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.GetSearchAttributesResponse | $.VarRef<apiv1.GetSearchAttributesResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple57: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).GetSearchAttributes(ctx, opts)
		let response: shared.GetSearchAttributesResponse | $.VarRef<shared.GetSearchAttributesResponse> | null = __goscriptTuple57[0]
		let err = __goscriptTuple57[1]
		return [proto.GetSearchAttributesResponse(response), await proto.Error(err)]
	}

	public async ListArchivedWorkflowExecutions(ctx: context.Context | null, request: apiv1.ListArchivedWorkflowExecutionsRequest | $.VarRef<apiv1.ListArchivedWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.ListArchivedWorkflowExecutionsResponse | $.VarRef<apiv1.ListArchivedWorkflowExecutionsResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple58: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).ListArchivedWorkflowExecutions(ctx, thrift2.ListArchivedWorkflowExecutionsRequest(request), opts)
		let response: shared.ListArchivedWorkflowExecutionsResponse | $.VarRef<shared.ListArchivedWorkflowExecutionsResponse> | null = __goscriptTuple58[0]
		let err = __goscriptTuple58[1]
		return [proto.ListArchivedWorkflowExecutionsResponse(response), await proto.Error(err)]
	}

	public async ListClosedWorkflowExecutions(ctx: context.Context | null, request: apiv1.ListClosedWorkflowExecutionsRequest | $.VarRef<apiv1.ListClosedWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.ListClosedWorkflowExecutionsResponse | $.VarRef<apiv1.ListClosedWorkflowExecutionsResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple59: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).ListClosedWorkflowExecutions(ctx, thrift2.ListClosedWorkflowExecutionsRequest(request), opts)
		let response: shared.ListClosedWorkflowExecutionsResponse | $.VarRef<shared.ListClosedWorkflowExecutionsResponse> | null = __goscriptTuple59[0]
		let err = __goscriptTuple59[1]
		return [proto.ListClosedWorkflowExecutionsResponse(response), await proto.Error(err)]
	}

	public async ListOpenWorkflowExecutions(ctx: context.Context | null, request: apiv1.ListOpenWorkflowExecutionsRequest | $.VarRef<apiv1.ListOpenWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.ListOpenWorkflowExecutionsResponse | $.VarRef<apiv1.ListOpenWorkflowExecutionsResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple60: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).ListOpenWorkflowExecutions(ctx, thrift2.ListOpenWorkflowExecutionsRequest(request), opts)
		let response: shared.ListOpenWorkflowExecutionsResponse | $.VarRef<shared.ListOpenWorkflowExecutionsResponse> | null = __goscriptTuple60[0]
		let err = __goscriptTuple60[1]
		return [proto.ListOpenWorkflowExecutionsResponse(response), await proto.Error(err)]
	}

	public async ListWorkflowExecutions(ctx: context.Context | null, request: apiv1.ListWorkflowExecutionsRequest | $.VarRef<apiv1.ListWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.ListWorkflowExecutionsResponse | $.VarRef<apiv1.ListWorkflowExecutionsResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple61: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).ListWorkflowExecutions(ctx, thrift2.ListWorkflowExecutionsRequest(request), opts)
		let response: shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null = __goscriptTuple61[0]
		let err = __goscriptTuple61[1]
		return [proto.ListWorkflowExecutionsResponse(response), await proto.Error(err)]
	}

	public async ScanWorkflowExecutions(ctx: context.Context | null, request: apiv1.ScanWorkflowExecutionsRequest | $.VarRef<apiv1.ScanWorkflowExecutionsRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[apiv1.ScanWorkflowExecutionsResponse | $.VarRef<apiv1.ScanWorkflowExecutionsResponse> | null, $.GoError]> {
		const a = this;
		let __goscriptTuple62: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>(a.service).ScanWorkflowExecutions(ctx, thrift2.ScanWorkflowExecutionsRequest(request), opts)
		let response: shared.ListWorkflowExecutionsResponse | $.VarRef<shared.ListWorkflowExecutionsResponse> | null = __goscriptTuple62[0]
		let err = __goscriptTuple62[1]
		return [proto.ScanWorkflowExecutionsResponse(response), await proto.Error(err)]
	}

	static __typeInfo = $.registerStructType(
		"compatibility.visibilityAPIthriftAdapter",
		() => new visibilityAPIthriftAdapter(),
		() => [{ name: "CountWorkflowExecutions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.CountWorkflowExecutionsResponse") }, { type: "error" }] }, { name: "GetSearchAttributes", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.GetSearchAttributesResponse") }, { type: "error" }] }, { name: "ListArchivedWorkflowExecutions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ListArchivedWorkflowExecutionsResponse") }, { type: "error" }] }, { name: "ListClosedWorkflowExecutions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ListClosedWorkflowExecutionsResponse") }, { type: "error" }] }, { name: "ListOpenWorkflowExecutions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ListOpenWorkflowExecutionsResponse") }, { type: "error" }] }, { name: "ListWorkflowExecutions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ListWorkflowExecutionsResponse") }, { type: "error" }] }, { name: "ScanWorkflowExecutions", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("apiv1.ScanWorkflowExecutionsResponse") }, { type: "error" }] }],
		visibilityAPIthriftAdapter,
		() => [{ name: "service", key: "service", type: "workflowserviceclient.Interface" }]
	)
}

export function NewThrift2ProtoAdapter(domain: apiv1.DomainAPIYARPCClient | null, workflow: apiv1.WorkflowAPIYARPCClient | null, worker: apiv1.WorkerAPIYARPCClient | null, visibility: apiv1.VisibilityAPIYARPCClient | null, schedule: apiv1.ScheduleAPIYARPCClient | null): workflowserviceclient.Interface | null {
	return $.interfaceValue<workflowserviceclient.Interface | null>(new thrift2protoAdapter({domain: domain, workflow: workflow, worker: worker, visibility: visibility, schedule: schedule}, true), "compatibility.thrift2protoAdapter", "compatibility.thrift2protoAdapter")
}

export let errScheduleClientNotConfigured: shared.BadRequestError | $.VarRef<shared.BadRequestError> | null = new shared.BadRequestError({Message: "schedule API not configured: provide a ScheduleAPIYARPCClient when constructing the adapter"})

export function __goscript_set_errScheduleClientNotConfigured(__goscriptValue: shared.BadRequestError | $.VarRef<shared.BadRequestError> | null): void {
	errScheduleClientNotConfigured = __goscriptValue
}

export function NewDomainAPITriftAdapter(thrift: workflowserviceclient.Interface | null): domainAPIthriftAdapter {
	return new domainAPIthriftAdapter({service: thrift}, true)
}

export function NewWorkflowAPITriftAdapter(thrift: workflowserviceclient.Interface | null): workflowAPIthriftAdapter {
	return new workflowAPIthriftAdapter({service: thrift}, true)
}

export function NewWorkerAPITriftAdapter(thrift: workflowserviceclient.Interface | null): workerAPIthriftAdapter {
	return new workerAPIthriftAdapter({service: thrift}, true)
}

export function NewVisibilityAPITriftAdapter(thrift: workflowserviceclient.Interface | null): visibilityAPIthriftAdapter {
	return new visibilityAPIthriftAdapter({service: thrift}, true)
}

var __goscriptAwait: any
