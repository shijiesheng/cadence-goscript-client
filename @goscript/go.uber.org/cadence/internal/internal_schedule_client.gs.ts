// Generated file based on internal_schedule_client.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import type * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import type * as zap from "@goscript/go.uber.org/zap/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import type * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import * as __goscript_internal_retry from "./internal_retry.gs.ts"

import * as __goscript_internal_schedule_convert_thrift from "./internal_schedule_convert_thrift.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import type * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import type * as __goscript_internal_workflow_client from "./internal_workflow_client.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_schedule from "./schedule.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./activity.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./headers.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_retry.gs.ts"
import "./internal_schedule_convert_thrift.gs.ts"
import "./internal_utils.gs.ts"
import "./internal_workflow.gs.ts"
import "./registry.gs.ts"
import "./schedule.gs.ts"
import "./session.gs.ts"
import "./workflow.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.ScheduleClient", "internal.scheduleClient"])

export type ScheduleClient = {
	Backfill(ctx: context.Context | null, scheduleID: string, request: __goscript_schedule.BackfillRequest | $.VarRef<__goscript_schedule.BackfillRequest> | null): $.GoError | globalThis.Promise<$.GoError>
	Create(ctx: context.Context | null, request: __goscript_schedule.CreateScheduleRequest | $.VarRef<__goscript_schedule.CreateScheduleRequest> | null): [string, $.GoError] | globalThis.Promise<[string, $.GoError]>
	Delete(ctx: context.Context | null, scheduleID: string): $.GoError | globalThis.Promise<$.GoError>
	Describe(ctx: context.Context | null, scheduleID: string): [__goscript_schedule.DescribeScheduleResponse | $.VarRef<__goscript_schedule.DescribeScheduleResponse> | null, $.GoError] | globalThis.Promise<[__goscript_schedule.DescribeScheduleResponse | $.VarRef<__goscript_schedule.DescribeScheduleResponse> | null, $.GoError]>
	List(ctx: context.Context | null, pageSize: number, nextPageToken: $.Slice<number>): [__goscript_schedule.ListSchedulesResponse | $.VarRef<__goscript_schedule.ListSchedulesResponse> | null, $.GoError] | globalThis.Promise<[__goscript_schedule.ListSchedulesResponse | $.VarRef<__goscript_schedule.ListSchedulesResponse> | null, $.GoError]>
	Pause(ctx: context.Context | null, scheduleID: string, reason: string): $.GoError | globalThis.Promise<$.GoError>
	Unpause(ctx: context.Context | null, scheduleID: string, reason: string, catchUpPolicy: __goscript_schedule.ScheduleCatchUpPolicy): $.GoError | globalThis.Promise<$.GoError>
	Update(ctx: context.Context | null, scheduleID: string, mutate: ((_p0: __goscript_schedule.ScheduleUpdate | $.VarRef<__goscript_schedule.ScheduleUpdate> | null) => $.GoError | globalThis.Promise<$.GoError>) | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"internal.ScheduleClient",
	null,
	[$.methodSignature("Backfill", [["ctx", "context.Context"], ["scheduleID", /* @__PURE__ */ $.basicType("string")], ["request", /* @__PURE__ */ $.pointerType("internal.BackfillRequest")]], ["error"]), $.methodSignature("Create", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("internal.CreateScheduleRequest")]], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("Delete", [["ctx", "context.Context"], ["scheduleID", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("Describe", [["ctx", "context.Context"], ["scheduleID", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("internal.DescribeScheduleResponse"), "error"]), $.methodSignature("List", [["ctx", "context.Context"], ["pageSize", /* @__PURE__ */ $.basicType("int32")], ["nextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("internal.ListSchedulesResponse"), "error"]), $.methodSignature("Pause", [["ctx", "context.Context"], ["scheduleID", /* @__PURE__ */ $.basicType("string")], ["reason", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("Unpause", [["ctx", "context.Context"], ["scheduleID", /* @__PURE__ */ $.basicType("string")], ["reason", /* @__PURE__ */ $.basicType("string")], ["catchUpPolicy", /* @__PURE__ */ $.basicType("int", "internal.ScheduleCatchUpPolicy")]], ["error"]), $.methodSignature("Update", [["ctx", "context.Context"], ["scheduleID", /* @__PURE__ */ $.basicType("string")], ["mutate", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.ScheduleUpdate")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"])]
);

export class scheduleClient {
	public get workflowService(): workflowserviceclient.Interface | null {
		return this._fields.workflowService
	}

	public set workflowService(value: workflowserviceclient.Interface | null) {
		this._fields.workflowService = value
	}

	public get domain(): string {
		return this._fields.domain
	}

	public set domain(value: string) {
		this._fields.domain = value
	}

	public get identity(): string {
		return this._fields.identity
	}

	public set identity(value: string) {
		this._fields.identity = value
	}

	public get dataConverter(): __goscript_encoded.DataConverter | null {
		return this._fields.dataConverter
	}

	public set dataConverter(value: __goscript_encoded.DataConverter | null) {
		this._fields.dataConverter = value
	}

	public get featureFlags(): __goscript_internal_utils.FeatureFlags {
		return this._fields.featureFlags
	}

	public set featureFlags(value: __goscript_internal_utils.FeatureFlags) {
		this._fields.featureFlags = value
	}

	public _fields: {
		workflowService: workflowserviceclient.Interface | null
		domain: string
		identity: string
		dataConverter: __goscript_encoded.DataConverter | null
		featureFlags: __goscript_internal_utils.FeatureFlags
	}

	constructor(init?: Partial<{workflowService?: workflowserviceclient.Interface | null, domain?: string, identity?: string, dataConverter?: __goscript_encoded.DataConverter | null, featureFlags?: __goscript_internal_utils.FeatureFlags}>, __goscriptValue?: boolean) {
		this._fields = {
			workflowService: init?.workflowService ?? (null! as workflowserviceclient.Interface | null),
			domain: init?.domain ?? ("" as string),
			identity: init?.identity ?? ("" as string),
			dataConverter: init?.dataConverter ?? (null! as __goscript_encoded.DataConverter | null),
			featureFlags: init?.featureFlags ? init.featureFlags.clone() : new __goscript_internal_utils.FeatureFlags(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): scheduleClient {
		return new scheduleClient(this, true)
	}

	public __goscriptAssign(source: scheduleClient): void {
		const target = this._fields
		const values = source._fields
		target.workflowService = $.assignFieldValue(target.workflowService, values.workflowService, "workflowserviceclient.Interface")
		target.domain = values.domain
		target.identity = values.identity
		target.dataConverter = $.assignFieldValue(target.dataConverter, values.dataConverter, "internal.DataConverter")
		$.assignStruct(target.featureFlags, values.featureFlags)
	}

	public async Backfill(ctx: context.Context | null, scheduleID: string, request: __goscript_schedule.BackfillRequest | $.VarRef<__goscript_schedule.BackfillRequest> | null): globalThis.Promise<$.GoError> {
		const sc: scheduleClient | $.VarRef<scheduleClient> | null = this;
		const sc$: scheduleClient = sc == null ? $.pointerTarget<scheduleClient>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<scheduleClient>(sc)
		let __goscriptTuple0: any = __goscript_internal_schedule_convert_thrift.backfillRequestToThrift((sc$ as scheduleClient).domain, scheduleID, request)
		let thriftReq: shared.BackfillScheduleRequest | $.VarRef<shared.BackfillScheduleRequest> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return err
		}
		return __goscript_internal_retry.retryWhileTransientError(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple1: any = await __goscript_internal_utils.newChannelContext(ctx, ((sc$ as scheduleClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple1[0]
			let cancel = __goscriptTuple1[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple1[2]
			const __goscriptDeferCallee0 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let [, rpcErr] = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((sc$ as scheduleClient).workflowService).BackfillSchedule(tchCtx, thriftReq, opt)
			return rpcErr
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async Create(ctx: context.Context | null, request: __goscript_schedule.CreateScheduleRequest | $.VarRef<__goscript_schedule.CreateScheduleRequest> | null): globalThis.Promise<[string, $.GoError]> {
		const sc: scheduleClient | $.VarRef<scheduleClient> | null = this;
		const sc$: scheduleClient = sc == null ? $.pointerTarget<scheduleClient>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<scheduleClient>(sc)
		let __goscriptTuple2: any = await __goscript_internal_schedule_convert_thrift.scheduleCreateRequestToThrift((sc$ as scheduleClient).domain, request, (sc$ as scheduleClient).dataConverter)
		let thriftReq: shared.CreateScheduleRequest | $.VarRef<shared.CreateScheduleRequest> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return ["", err]
		}
		let scheduleID: string = ""
		err = await __goscript_internal_retry.retryWhileTransientError(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple3: any = await __goscript_internal_utils.newChannelContext(ctx, ((sc$ as scheduleClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple3[0]
			let cancel = __goscriptTuple3[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple3[2]
			const __goscriptDeferCallee1 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let __goscriptTuple4: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((sc$ as scheduleClient).workflowService).CreateSchedule(tchCtx, thriftReq, opt)
			let resp: shared.CreateScheduleResponse | $.VarRef<shared.CreateScheduleResponse> | null = __goscriptTuple4[0]
			let rpcErr = __goscriptTuple4[1]
			if ((rpcErr == null) && (resp != null)) {
				scheduleID = (resp !== null && (resp as any).__isVarRef !== true && (resp as any).__goValue === undefined ? ((resp as any) as shared.CreateScheduleResponse).GetScheduleId() : shared.CreateScheduleResponse.prototype.GetScheduleId.call(resp))
			}
			return rpcErr
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
		return [scheduleID, err]
	}

	public async Delete(ctx: context.Context | null, scheduleID: string): globalThis.Promise<$.GoError> {
		const sc: scheduleClient | $.VarRef<scheduleClient> | null = this;
		const sc$: scheduleClient = sc == null ? $.pointerTarget<scheduleClient>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<scheduleClient>(sc)
		if ($.stringEqual(scheduleID, "")) {
			return fmt.Errorf("Delete: %w", (ErrScheduleIDRequired as any))
		}
		let req: shared.DeleteScheduleRequest | $.VarRef<shared.DeleteScheduleRequest> | null = (() => { const __goscriptLiteralField0 = common.StringPtr((sc$ as scheduleClient).domain); const __goscriptLiteralField1 = common.StringPtr(scheduleID); return new shared.DeleteScheduleRequest({Domain: __goscriptLiteralField0, ScheduleId: __goscriptLiteralField1}) })()
		return __goscript_internal_retry.retryWhileTransientError(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple5: any = await __goscript_internal_utils.newChannelContext(ctx, ((sc$ as scheduleClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple5[0]
			let cancel = __goscriptTuple5[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple5[2]
			const __goscriptDeferCallee2 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee2!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let [, rpcErr] = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((sc$ as scheduleClient).workflowService).DeleteSchedule(tchCtx, req, opt)
			return rpcErr
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async Describe(ctx: context.Context | null, scheduleID: string): globalThis.Promise<[__goscript_schedule.DescribeScheduleResponse | $.VarRef<__goscript_schedule.DescribeScheduleResponse> | null, $.GoError]> {
		const sc: scheduleClient | $.VarRef<scheduleClient> | null = this;
		const sc$: scheduleClient = sc == null ? $.pointerTarget<scheduleClient>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<scheduleClient>(sc)
		if ($.stringEqual(scheduleID, "")) {
			return [null, fmt.Errorf("Describe: %w", (ErrScheduleIDRequired as any))]
		}
		let req: shared.DescribeScheduleRequest | $.VarRef<shared.DescribeScheduleRequest> | null = (() => { const __goscriptLiteralField2 = common.StringPtr((sc$ as scheduleClient).domain); const __goscriptLiteralField3 = common.StringPtr(scheduleID); return new shared.DescribeScheduleRequest({Domain: __goscriptLiteralField2, ScheduleId: __goscriptLiteralField3}) })()
		let thriftResp: shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null = null! as shared.DescribeScheduleResponse | $.VarRef<shared.DescribeScheduleResponse> | null
		let err = await __goscript_internal_retry.retryWhileTransientError(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple6: any = await __goscript_internal_utils.newChannelContext(ctx, ((sc$ as scheduleClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple6[0]
			let cancel = __goscriptTuple6[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple6[2]
			const __goscriptDeferCallee3 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee3!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let rpcErr: $.GoError = null! as $.GoError
			let __goscriptTuple7: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((sc$ as scheduleClient).workflowService).DescribeSchedule(tchCtx, req, opt)
			thriftResp = __goscriptTuple7[0]
			rpcErr = __goscriptTuple7[1]
			return rpcErr
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
		if (err != null) {
			return [null, err]
		}
		return [__goscript_internal_schedule_convert_thrift.describeScheduleResponseFromThrift(thriftResp), null]
	}

	public async List(ctx: context.Context | null, pageSize: number, nextPageToken: $.Slice<number>): globalThis.Promise<[__goscript_schedule.ListSchedulesResponse | $.VarRef<__goscript_schedule.ListSchedulesResponse> | null, $.GoError]> {
		const sc: scheduleClient | $.VarRef<scheduleClient> | null = this;
		const sc$: scheduleClient = sc == null ? $.pointerTarget<scheduleClient>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<scheduleClient>(sc)
		let req: shared.ListSchedulesRequest | $.VarRef<shared.ListSchedulesRequest> | null = (() => { const __goscriptLiteralField4 = common.StringPtr((sc$ as scheduleClient).domain); const __goscriptLiteralField5 = common.Int32Ptr(pageSize); return new shared.ListSchedulesRequest({Domain: __goscriptLiteralField4, PageSize: __goscriptLiteralField5, NextPageToken: nextPageToken}) })()
		let thriftResp: shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null = null! as shared.ListSchedulesResponse | $.VarRef<shared.ListSchedulesResponse> | null
		let err = await __goscript_internal_retry.retryWhileTransientError(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple8: any = await __goscript_internal_utils.newChannelContext(ctx, ((sc$ as scheduleClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple8[0]
			let cancel = __goscriptTuple8[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple8[2]
			const __goscriptDeferCallee4 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee4!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let rpcErr: $.GoError = null! as $.GoError
			let __goscriptTuple9: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((sc$ as scheduleClient).workflowService).ListSchedules(tchCtx, req, opt)
			thriftResp = __goscriptTuple9[0]
			rpcErr = __goscriptTuple9[1]
			return rpcErr
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
		if (err != null) {
			return [null, err]
		}
		return [__goscript_internal_schedule_convert_thrift.listSchedulesResponseFromThrift(thriftResp), null]
	}

	public async Pause(ctx: context.Context | null, scheduleID: string, reason: string): globalThis.Promise<$.GoError> {
		const sc: scheduleClient | $.VarRef<scheduleClient> | null = this;
		const sc$: scheduleClient = sc == null ? $.pointerTarget<scheduleClient>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<scheduleClient>(sc)
		if ($.stringEqual(scheduleID, "")) {
			return fmt.Errorf("Pause: %w", (ErrScheduleIDRequired as any))
		}
		let req: shared.PauseScheduleRequest | $.VarRef<shared.PauseScheduleRequest> | null = (() => { const __goscriptLiteralField6 = common.StringPtr((sc$ as scheduleClient).domain); const __goscriptLiteralField7 = common.StringPtr(scheduleID); const __goscriptLiteralField8 = common.StringPtr(reason); const __goscriptLiteralField9 = common.StringPtr((sc$ as scheduleClient).identity); return new shared.PauseScheduleRequest({Domain: __goscriptLiteralField6, ScheduleId: __goscriptLiteralField7, Reason: __goscriptLiteralField8, Identity: __goscriptLiteralField9}) })()
		return __goscript_internal_retry.retryWhileTransientError(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple10: any = await __goscript_internal_utils.newChannelContext(ctx, ((sc$ as scheduleClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple10[0]
			let cancel = __goscriptTuple10[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple10[2]
			const __goscriptDeferCallee5 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee5!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let [, rpcErr] = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((sc$ as scheduleClient).workflowService).PauseSchedule(tchCtx, req, opt)
			return rpcErr
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async Unpause(ctx: context.Context | null, scheduleID: string, reason: string, catchUpPolicy: __goscript_schedule.ScheduleCatchUpPolicy): globalThis.Promise<$.GoError> {
		const sc: scheduleClient | $.VarRef<scheduleClient> | null = this;
		const sc$: scheduleClient = sc == null ? $.pointerTarget<scheduleClient>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<scheduleClient>(sc)
		if ($.stringEqual(scheduleID, "")) {
			return fmt.Errorf("Unpause: %w", (ErrScheduleIDRequired as any))
		}
		let req: shared.UnpauseScheduleRequest | $.VarRef<shared.UnpauseScheduleRequest> | null = (() => { const __goscriptLiteralField10 = common.StringPtr((sc$ as scheduleClient).domain); const __goscriptLiteralField11 = common.StringPtr(scheduleID); const __goscriptLiteralField12 = common.StringPtr(reason); const __goscriptLiteralField13 = __goscript_internal_schedule_convert_thrift.scheduleCatchUpPolicyToThrift(catchUpPolicy); return new shared.UnpauseScheduleRequest({Domain: __goscriptLiteralField10, ScheduleId: __goscriptLiteralField11, Reason: __goscriptLiteralField12, CatchUpPolicy: __goscriptLiteralField13}) })()
		return __goscript_internal_retry.retryWhileTransientError(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple11: any = await __goscript_internal_utils.newChannelContext(ctx, ((sc$ as scheduleClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple11[0]
			let cancel = __goscriptTuple11[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple11[2]
			const __goscriptDeferCallee6 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee6!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let [, rpcErr] = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((sc$ as scheduleClient).workflowService).UnpauseSchedule(tchCtx, req, opt)
			return rpcErr
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async Update(ctx: context.Context | null, scheduleID: string, mutate: ((_p0: __goscript_schedule.ScheduleUpdate | $.VarRef<__goscript_schedule.ScheduleUpdate> | null) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
		const sc: scheduleClient | $.VarRef<scheduleClient> | null = this;
		const sc$: scheduleClient = sc == null ? $.pointerTarget<scheduleClient>(sc) : (sc as any).__isVarRef === true ? (sc as any).value : (sc as any).__goValue === undefined ? (sc as any) : $.pointerTarget<scheduleClient>(sc)
		if ($.stringEqual(scheduleID, "")) {
			return fmt.Errorf("Update: %w", (ErrScheduleIDRequired as any))
		}
		if (mutate == null) {
			return fmt.Errorf("Update: %w", (ErrMutateFunctionRequired as any))
		}

		// Read current state; keep `desc` as the baseline for change detection.
		let __goscriptTuple12: any = await (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? ((sc as any) as scheduleClient).Describe(ctx, scheduleID) : scheduleClient.prototype.Describe.call(sc, ctx, scheduleID))
		let desc: __goscript_schedule.DescribeScheduleResponse | $.VarRef<__goscript_schedule.DescribeScheduleResponse> | null = __goscriptTuple12[0]
		let err = __goscriptTuple12[1]
		let desc$: __goscript_schedule.DescribeScheduleResponse = desc == null ? $.pointerTarget<__goscript_schedule.DescribeScheduleResponse>(desc) : (desc as any).__isVarRef === true ? (desc as any).value : (desc as any).__goValue === undefined ? (desc as any) : $.pointerTarget<__goscript_schedule.DescribeScheduleResponse>(desc)
		if (err != null) {
			return fmt.Errorf("Update: describe failed: %w", (err as any))
		}

		let cur: __goscript_schedule.ScheduleUpdate | $.VarRef<__goscript_schedule.ScheduleUpdate> | null = __goscript_internal_schedule_convert_thrift.scheduleUpdateFromDescribe(desc, (sc$ as scheduleClient).dataConverter)
		let cur$: __goscript_schedule.ScheduleUpdate = cur == null ? $.pointerTarget<__goscript_schedule.ScheduleUpdate>(cur) : (cur as any).__isVarRef === true ? (cur as any).value : (cur as any).__goValue === undefined ? (cur as any) : $.pointerTarget<__goscript_schedule.ScheduleUpdate>(cur)
		{
			let __goscriptShadow0 = (__goscriptAwait = mutate!(cur), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow0 != null) {
				return __goscriptShadow0
			}
		}

		// Send only the top-level fields the caller actually changed. Untouched fields are
		// omitted so the server preserves them (top-level merge).
		//
		// A field is sent only when its new value is non-nil/non-empty and differs from the
		// baseline. Top-level fields therefore cannot be cleared via the callback: nil-ing one
		// (e.g. cur.Policies = nil) is treated as "no change", not "clear" — clearing isn't
		// expressible on the wire (an omitted field is preserved by the server's top-level merge).
		let req: shared.UpdateScheduleRequest | $.VarRef<shared.UpdateScheduleRequest> | null = (() => { const __goscriptLiteralField14 = common.StringPtr((sc$ as scheduleClient).domain); const __goscriptLiteralField15 = common.StringPtr(scheduleID); return new shared.UpdateScheduleRequest({Domain: __goscriptLiteralField14, ScheduleId: __goscriptLiteralField15}) })()
		let req$: shared.UpdateScheduleRequest = req == null ? $.pointerTarget<shared.UpdateScheduleRequest>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<shared.UpdateScheduleRequest>(req)
		let changed = false
		if (((cur$ as __goscript_schedule.ScheduleUpdate).Spec != null) && !reflect.DeepEqual($.interfaceValue((cur$ as __goscript_schedule.ScheduleUpdate).Spec, "*internal.ScheduleSpec", /* @__PURE__ */ $.pointerType("internal.ScheduleSpec")), $.interfaceValue((desc$ as __goscript_schedule.DescribeScheduleResponse).Spec, "*internal.ScheduleSpec", /* @__PURE__ */ $.pointerType("internal.ScheduleSpec")))) {
			if ($.stringEqual($.pointerValue<__goscript_schedule.ScheduleSpec>((cur$ as __goscript_schedule.ScheduleUpdate).Spec).CronExpression, "")) {
				return fmt.Errorf("Update: %w", (ErrCronExpressionRequired as any))
			}
			;(req$ as shared.UpdateScheduleRequest).Spec = __goscript_internal_schedule_convert_thrift.scheduleSpecToThrift((cur$ as __goscript_schedule.ScheduleUpdate).Spec)
			changed = true
		}
		if (((cur$ as __goscript_schedule.ScheduleUpdate).Action != null) && !reflect.DeepEqual($.interfaceValue((cur$ as __goscript_schedule.ScheduleUpdate).Action, "*internal.ScheduleActionDescription", /* @__PURE__ */ $.pointerType("internal.ScheduleActionDescription")), $.interfaceValue((desc$ as __goscript_schedule.DescribeScheduleResponse).Action, "*internal.ScheduleActionDescription", /* @__PURE__ */ $.pointerType("internal.ScheduleActionDescription")))) {
			let __goscriptTuple13: any = __goscript_internal_schedule_convert_thrift.scheduleActionDescriptionToThrift((cur$ as __goscript_schedule.ScheduleUpdate).Action)
			let action: shared.ScheduleAction | $.VarRef<shared.ScheduleAction> | null = __goscriptTuple13[0]
			let aerr = __goscriptTuple13[1]
			if (aerr != null) {
				return aerr
			}
			;(req$ as shared.UpdateScheduleRequest).Action = action
			changed = true
		}
		if (((cur$ as __goscript_schedule.ScheduleUpdate).Policies != null) && !reflect.DeepEqual($.interfaceValue((cur$ as __goscript_schedule.ScheduleUpdate).Policies, "*internal.SchedulePolicies", /* @__PURE__ */ $.pointerType("internal.SchedulePolicies")), $.interfaceValue((desc$ as __goscript_schedule.DescribeScheduleResponse).Policies, "*internal.SchedulePolicies", /* @__PURE__ */ $.pointerType("internal.SchedulePolicies")))) {
			;(req$ as shared.UpdateScheduleRequest).Policies = __goscript_internal_schedule_convert_thrift.schedulePoliciesToThrift((cur$ as __goscript_schedule.ScheduleUpdate).Policies)
			changed = true
		}
		// SearchAttributes are only sent when non-empty (same can't-clear rationale as above).
		if (($.len((cur$ as __goscript_schedule.ScheduleUpdate).SearchAttributes) > 0) && !reflect.DeepEqual($.interfaceValue((cur$ as __goscript_schedule.ScheduleUpdate).SearchAttributes, "map[string][]byte", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))), $.interfaceValue((desc$ as __goscript_schedule.DescribeScheduleResponse).SearchAttributes, "map[string][]byte", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))) {
			;(req$ as shared.UpdateScheduleRequest).SearchAttributes = new shared.SearchAttributes({IndexedFields: (cur$ as __goscript_schedule.ScheduleUpdate).SearchAttributes})
			changed = true
		}
		if (!changed) {
			// Nothing changed — don't issue a no-op UpdateSchedule RPC.
			return null
		}

		return __goscript_internal_retry.retryWhileTransientError(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple14: any = await __goscript_internal_utils.newChannelContext(ctx, ((sc$ as scheduleClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple14[0]
			let cancel = __goscriptTuple14[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple14[2]
			const __goscriptDeferCallee7 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee7!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let [, rpcErr] = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((sc$ as scheduleClient).workflowService).UpdateSchedule(tchCtx, req, opt)
			return rpcErr
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	static __typeInfo = $.registerStructType(
		"internal.scheduleClient",
		() => new scheduleClient(),
		() => [$.methodSignature("Backfill", [["ctx", "context.Context"], ["scheduleID", /* @__PURE__ */ $.basicType("string")], ["request", /* @__PURE__ */ $.pointerType("internal.BackfillRequest")]], ["error"], true), $.methodSignature("Create", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("internal.CreateScheduleRequest")]], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("Delete", [["ctx", "context.Context"], ["scheduleID", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("Describe", [["ctx", "context.Context"], ["scheduleID", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("internal.DescribeScheduleResponse"), "error"], true), $.methodSignature("List", [["ctx", "context.Context"], ["pageSize", /* @__PURE__ */ $.basicType("int32")], ["nextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.pointerType("internal.ListSchedulesResponse"), "error"], true), $.methodSignature("Pause", [["ctx", "context.Context"], ["scheduleID", /* @__PURE__ */ $.basicType("string")], ["reason", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("Unpause", [["ctx", "context.Context"], ["scheduleID", /* @__PURE__ */ $.basicType("string")], ["reason", /* @__PURE__ */ $.basicType("string")], ["catchUpPolicy", /* @__PURE__ */ $.basicType("int", "internal.ScheduleCatchUpPolicy")]], ["error"], true), $.methodSignature("Update", [["ctx", "context.Context"], ["scheduleID", /* @__PURE__ */ $.basicType("string")], ["mutate", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.ScheduleUpdate")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"], true)],
		scheduleClient,
		() => [/* @__PURE__ */ $.structField("workflowService", "workflowserviceclient.Interface", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("domain", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("identity", /* @__PURE__ */ $.basicType("string"), [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("dataConverter", "internal.DataConverter", [3], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("featureFlags", "internal.FeatureFlags", [4], 64, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export let ErrScheduleIDRequired: $.GoError = errors.New("scheduleID is required")

export function __goscript_set_ErrScheduleIDRequired(__goscriptValue: $.GoError): void {
	ErrScheduleIDRequired = __goscriptValue
}

export let ErrMutateFunctionRequired: $.GoError = errors.New("mutate function is required")

export function __goscript_set_ErrMutateFunctionRequired(__goscriptValue: $.GoError): void {
	ErrMutateFunctionRequired = __goscriptValue
}

export let ErrCronExpressionRequired: $.GoError = errors.New("Spec.CronExpression must not be empty")

export function __goscript_set_ErrCronExpressionRequired(__goscriptValue: $.GoError): void {
	ErrCronExpressionRequired = __goscriptValue
}

export let ErrRequestRequired: $.GoError = errors.New("request is required")

export function __goscript_set_ErrRequestRequired(__goscriptValue: $.GoError): void {
	ErrRequestRequired = __goscriptValue
}

export let ErrActionStartWorkflowRequired: $.GoError = errors.New("Action.StartWorkflow is required")

export function __goscript_set_ErrActionStartWorkflowRequired(__goscriptValue: $.GoError): void {
	ErrActionStartWorkflowRequired = __goscriptValue
}

export let ErrWorkflowTypeRequired: $.GoError = errors.New("WorkflowType is required")

export function __goscript_set_ErrWorkflowTypeRequired(__goscriptValue: $.GoError): void {
	ErrWorkflowTypeRequired = __goscriptValue
}

export let ErrTaskListRequired: $.GoError = errors.New("TaskList is required")

export function __goscript_set_ErrTaskListRequired(__goscriptValue: $.GoError): void {
	ErrTaskListRequired = __goscriptValue
}

export let ErrExecutionTimeoutRequired: $.GoError = errors.New("ExecutionStartToCloseTimeout is required")

export function __goscript_set_ErrExecutionTimeoutRequired(__goscriptValue: $.GoError): void {
	ErrExecutionTimeoutRequired = __goscriptValue
}

export let ErrNegativeDecisionTimeout: $.GoError = errors.New("DecisionTaskStartToCloseTimeout must not be negative")

export function __goscript_set_ErrNegativeDecisionTimeout(__goscriptValue: $.GoError): void {
	ErrNegativeDecisionTimeout = __goscriptValue
}

export let ErrStartTimeRequired: $.GoError = errors.New("StartTime is required")

export function __goscript_set_ErrStartTimeRequired(__goscriptValue: $.GoError): void {
	ErrStartTimeRequired = __goscriptValue
}

export let ErrEndTimeRequired: $.GoError = errors.New("EndTime is required")

export function __goscript_set_ErrEndTimeRequired(__goscriptValue: $.GoError): void {
	ErrEndTimeRequired = __goscriptValue
}

export let ErrEndTimeBeforeStartTime: $.GoError = errors.New("EndTime must be after StartTime")

export function __goscript_set_ErrEndTimeBeforeStartTime(__goscriptValue: $.GoError): void {
	ErrEndTimeBeforeStartTime = __goscriptValue
}

var __goscriptAwait: any
