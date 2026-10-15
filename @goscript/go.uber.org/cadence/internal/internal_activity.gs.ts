// Generated file based on internal_activity.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as time from "@goscript/time/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import type * as __goscript_interceptors from "./interceptors.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import type * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import type * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/sync/index.js"
import "./activity.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./headers.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_workflow.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./workflow.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.activity", "internal.activityInfo", "internal.localActivityInfo", "internal.activityOptions", "internal.localActivityOptions", "internal.executeActivityParams", "internal.executeLocalActivityParams", "internal.asyncActivityClient", "internal.localActivityClient", "internal.activityEnvironment", "internal.contextKey"])

export type activity = {
	ActivityType(): __goscript_activity.ActivityType
	Execute(ctx: context.Context | null, input: $.Slice<number>): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	GetFunction(): any
	GetOptions(): __goscript_activity.RegisterActivityOptions
}

$.registerInterfaceType(
	"internal.activity",
	null,
	[$.methodSignature("ActivityType", [], ["internal.ActivityType"]), $.methodSignature("Execute", [["ctx", "context.Context"], ["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("GetFunction", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("GetOptions", [], ["internal.RegisterActivityOptions"])]
);

export type asyncActivityClient = {
	ExecuteActivity(parameters: executeActivityParams, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): activityInfo | $.VarRef<activityInfo> | null | globalThis.Promise<activityInfo | $.VarRef<activityInfo> | null>
	RequestCancelActivity(activityID: string): void
}

$.registerInterfaceType(
	"internal.asyncActivityClient",
	null,
	[$.methodSignature("ExecuteActivity", [["parameters", "internal.executeActivityParams"], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.activityInfo")]), $.methodSignature("RequestCancelActivity", [["activityID", /* @__PURE__ */ $.basicType("string")]])]
);

export type localActivityClient = {
	ExecuteLocalActivity(params: executeLocalActivityParams, callback: ((lar: __goscript_internal_worker_base.localActivityResultWrapper | $.VarRef<__goscript_internal_worker_base.localActivityResultWrapper> | null) => void) | null): localActivityInfo | $.VarRef<localActivityInfo> | null | globalThis.Promise<localActivityInfo | $.VarRef<localActivityInfo> | null>
	RequestCancelLocalActivity(activityID: string): void
}

$.registerInterfaceType(
	"internal.localActivityClient",
	null,
	[$.methodSignature("ExecuteLocalActivity", [["params", "internal.executeLocalActivityParams"], ["callback", ({ kind: $.TypeKind.Function, name: "internal.laResultHandler", params: [/* @__PURE__ */ $.pointerType("internal.localActivityResultWrapper")], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.localActivityInfo")]), $.methodSignature("RequestCancelLocalActivity", [["activityID", /* @__PURE__ */ $.basicType("string")]])]
);

export type contextKey = string

export class activityInfo {
	public get activityID(): string {
		return this._fields.activityID
	}

	public set activityID(value: string) {
		this._fields.activityID = value
	}

	public _fields: {
		activityID: string
	}

	constructor(init?: Partial<{activityID?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			activityID: init?.activityID ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): activityInfo {
		return new activityInfo(this, true)
	}

	public __goscriptAssign(source: activityInfo): void {
		const target = this._fields
		const values = source._fields
		target.activityID = values.activityID
	}

	static __typeInfo = $.registerStructType(
		"internal.activityInfo",
		() => new activityInfo(),
		() => [],
		activityInfo,
		() => [/* @__PURE__ */ $.structField("activityID", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class localActivityInfo {
	public get activityID(): string {
		return this._fields.activityID
	}

	public set activityID(value: string) {
		this._fields.activityID = value
	}

	public _fields: {
		activityID: string
	}

	constructor(init?: Partial<{activityID?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			activityID: init?.activityID ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): localActivityInfo {
		return new localActivityInfo(this, true)
	}

	public __goscriptAssign(source: localActivityInfo): void {
		const target = this._fields
		const values = source._fields
		target.activityID = values.activityID
	}

	static __typeInfo = $.registerStructType(
		"internal.localActivityInfo",
		() => new localActivityInfo(),
		() => [],
		localActivityInfo,
		() => [/* @__PURE__ */ $.structField("activityID", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class activityOptions {
	public get ActivityID(): $.VarRef<string> | null {
		return this._fields.ActivityID
	}

	public set ActivityID(value: $.VarRef<string> | null) {
		this._fields.ActivityID = value
	}

	public get TaskListName(): string {
		return this._fields.TaskListName
	}

	public set TaskListName(value: string) {
		this._fields.TaskListName = value
	}

	public get TaskListKind(): shared.TaskListKind {
		return this._fields.TaskListKind
	}

	public set TaskListKind(value: shared.TaskListKind) {
		this._fields.TaskListKind = value
	}

	public get ScheduleToCloseTimeoutSeconds(): number {
		return this._fields.ScheduleToCloseTimeoutSeconds
	}

	public set ScheduleToCloseTimeoutSeconds(value: number) {
		this._fields.ScheduleToCloseTimeoutSeconds = value
	}

	public get ScheduleToStartTimeoutSeconds(): number {
		return this._fields.ScheduleToStartTimeoutSeconds
	}

	public set ScheduleToStartTimeoutSeconds(value: number) {
		this._fields.ScheduleToStartTimeoutSeconds = value
	}

	public get StartToCloseTimeoutSeconds(): number {
		return this._fields.StartToCloseTimeoutSeconds
	}

	public set StartToCloseTimeoutSeconds(value: number) {
		this._fields.StartToCloseTimeoutSeconds = value
	}

	public get HeartbeatTimeoutSeconds(): number {
		return this._fields.HeartbeatTimeoutSeconds
	}

	public set HeartbeatTimeoutSeconds(value: number) {
		this._fields.HeartbeatTimeoutSeconds = value
	}

	public get WaitForCancellation(): boolean {
		return this._fields.WaitForCancellation
	}

	public set WaitForCancellation(value: boolean) {
		this._fields.WaitForCancellation = value
	}

	public get OriginalTaskListName(): string {
		return this._fields.OriginalTaskListName
	}

	public set OriginalTaskListName(value: string) {
		this._fields.OriginalTaskListName = value
	}

	public get RetryPolicy(): shared.RetryPolicy | $.VarRef<shared.RetryPolicy> | null {
		return this._fields.RetryPolicy
	}

	public set RetryPolicy(value: shared.RetryPolicy | $.VarRef<shared.RetryPolicy> | null) {
		this._fields.RetryPolicy = value
	}

	public _fields: {
		ActivityID: $.VarRef<string> | null
		TaskListName: string
		TaskListKind: shared.TaskListKind
		ScheduleToCloseTimeoutSeconds: number
		ScheduleToStartTimeoutSeconds: number
		StartToCloseTimeoutSeconds: number
		HeartbeatTimeoutSeconds: number
		WaitForCancellation: boolean
		OriginalTaskListName: string
		RetryPolicy: shared.RetryPolicy | $.VarRef<shared.RetryPolicy> | null
	}

	constructor(init?: Partial<{ActivityID?: $.VarRef<string> | null, TaskListName?: string, TaskListKind?: shared.TaskListKind, ScheduleToCloseTimeoutSeconds?: number, ScheduleToStartTimeoutSeconds?: number, StartToCloseTimeoutSeconds?: number, HeartbeatTimeoutSeconds?: number, WaitForCancellation?: boolean, OriginalTaskListName?: string, RetryPolicy?: shared.RetryPolicy | $.VarRef<shared.RetryPolicy> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ActivityID: init?.ActivityID ?? (null! as $.VarRef<string> | null),
			TaskListName: init?.TaskListName ?? ("" as string),
			TaskListKind: init?.TaskListKind ?? (0 as shared.TaskListKind),
			ScheduleToCloseTimeoutSeconds: init?.ScheduleToCloseTimeoutSeconds ?? (0 as number),
			ScheduleToStartTimeoutSeconds: init?.ScheduleToStartTimeoutSeconds ?? (0 as number),
			StartToCloseTimeoutSeconds: init?.StartToCloseTimeoutSeconds ?? (0 as number),
			HeartbeatTimeoutSeconds: init?.HeartbeatTimeoutSeconds ?? (0 as number),
			WaitForCancellation: init?.WaitForCancellation ?? (false as boolean),
			OriginalTaskListName: init?.OriginalTaskListName ?? ("" as string),
			RetryPolicy: init?.RetryPolicy ?? (null! as shared.RetryPolicy | $.VarRef<shared.RetryPolicy> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): activityOptions {
		return new activityOptions(this, true)
	}

	public __goscriptAssign(source: activityOptions): void {
		const target = this._fields
		const values = source._fields
		target.ActivityID = values.ActivityID
		target.TaskListName = values.TaskListName
		target.TaskListKind = values.TaskListKind
		target.ScheduleToCloseTimeoutSeconds = values.ScheduleToCloseTimeoutSeconds
		target.ScheduleToStartTimeoutSeconds = values.ScheduleToStartTimeoutSeconds
		target.StartToCloseTimeoutSeconds = values.StartToCloseTimeoutSeconds
		target.HeartbeatTimeoutSeconds = values.HeartbeatTimeoutSeconds
		target.WaitForCancellation = values.WaitForCancellation
		target.OriginalTaskListName = values.OriginalTaskListName
		target.RetryPolicy = values.RetryPolicy
	}

	static __typeInfo = $.registerStructType(
		"internal.activityOptions",
		() => new activityOptions(),
		() => [],
		activityOptions,
		() => [/* @__PURE__ */ $.structField("ActivityID", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [0], 0, true), /* @__PURE__ */ $.structField("TaskListName", /* @__PURE__ */ $.basicType("string"), [1], 8, true), /* @__PURE__ */ $.structField("TaskListKind", /* @__PURE__ */ $.basicType("int32", "shared.TaskListKind"), [2], 24, true), /* @__PURE__ */ $.structField("ScheduleToCloseTimeoutSeconds", /* @__PURE__ */ $.basicType("int32"), [3], 28, true), /* @__PURE__ */ $.structField("ScheduleToStartTimeoutSeconds", /* @__PURE__ */ $.basicType("int32"), [4], 32, true), /* @__PURE__ */ $.structField("StartToCloseTimeoutSeconds", /* @__PURE__ */ $.basicType("int32"), [5], 36, true), /* @__PURE__ */ $.structField("HeartbeatTimeoutSeconds", /* @__PURE__ */ $.basicType("int32"), [6], 40, true), /* @__PURE__ */ $.structField("WaitForCancellation", /* @__PURE__ */ $.basicType("bool"), [7], 44, true), /* @__PURE__ */ $.structField("OriginalTaskListName", /* @__PURE__ */ $.basicType("string"), [8], 48, true), /* @__PURE__ */ $.structField("RetryPolicy", /* @__PURE__ */ $.pointerType("shared.RetryPolicy"), [9], 64, true)]
	)
}

export class localActivityOptions {
	public get ScheduleToCloseTimeoutSeconds(): number {
		return this._fields.ScheduleToCloseTimeoutSeconds
	}

	public set ScheduleToCloseTimeoutSeconds(value: number) {
		this._fields.ScheduleToCloseTimeoutSeconds = value
	}

	public get RetryPolicy(): __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null {
		return this._fields.RetryPolicy
	}

	public set RetryPolicy(value: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null) {
		this._fields.RetryPolicy = value
	}

	public _fields: {
		ScheduleToCloseTimeoutSeconds: number
		RetryPolicy: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null
	}

	constructor(init?: Partial<{ScheduleToCloseTimeoutSeconds?: number, RetryPolicy?: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ScheduleToCloseTimeoutSeconds: init?.ScheduleToCloseTimeoutSeconds ?? (0 as number),
			RetryPolicy: init?.RetryPolicy ?? (null! as __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): localActivityOptions {
		return new localActivityOptions(this, true)
	}

	public __goscriptAssign(source: localActivityOptions): void {
		const target = this._fields
		const values = source._fields
		target.ScheduleToCloseTimeoutSeconds = values.ScheduleToCloseTimeoutSeconds
		target.RetryPolicy = values.RetryPolicy
	}

	static __typeInfo = $.registerStructType(
		"internal.localActivityOptions",
		() => new localActivityOptions(),
		() => [],
		localActivityOptions,
		() => [/* @__PURE__ */ $.structField("ScheduleToCloseTimeoutSeconds", /* @__PURE__ */ $.basicType("int32"), [0], 0, true), /* @__PURE__ */ $.structField("RetryPolicy", /* @__PURE__ */ $.pointerType("internal.RetryPolicy"), [1], 8, true)]
	)
}

export class executeActivityParams {
	public get activityOptions(): activityOptions {
		return this._fields.activityOptions
	}

	public set activityOptions(value: activityOptions) {
		this._fields.activityOptions = value
	}

	public get ActivityType(): __goscript_activity.ActivityType {
		return this._fields.ActivityType
	}

	public set ActivityType(value: __goscript_activity.ActivityType) {
		this._fields.ActivityType = value
	}

	public get Input(): $.Slice<number> {
		return this._fields.Input
	}

	public set Input(value: $.Slice<number>) {
		this._fields.Input = value
	}

	public get DataConverter(): __goscript_encoded.DataConverter | null {
		return this._fields.DataConverter
	}

	public set DataConverter(value: __goscript_encoded.DataConverter | null) {
		this._fields.DataConverter = value
	}

	public get Header(): shared.Header | $.VarRef<shared.Header> | null {
		return this._fields.Header
	}

	public set Header(value: shared.Header | $.VarRef<shared.Header> | null) {
		this._fields.Header = value
	}

	public _fields: {
		activityOptions: activityOptions
		ActivityType: __goscript_activity.ActivityType
		Input: $.Slice<number>
		DataConverter: __goscript_encoded.DataConverter | null
		Header: shared.Header | $.VarRef<shared.Header> | null
	}

	constructor(init?: Partial<{activityOptions?: activityOptions, ActivityType?: __goscript_activity.ActivityType, Input?: $.Slice<number>, DataConverter?: __goscript_encoded.DataConverter | null, Header?: shared.Header | $.VarRef<shared.Header> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			activityOptions: init?.activityOptions ? init.activityOptions.clone() : new activityOptions(undefined, true),
			ActivityType: init?.ActivityType ? init.ActivityType.clone() : new __goscript_activity.ActivityType(undefined, true),
			Input: init?.Input ?? (null! as $.Slice<number>),
			DataConverter: init?.DataConverter ?? (null! as __goscript_encoded.DataConverter | null),
			Header: init?.Header ?? (null! as shared.Header | $.VarRef<shared.Header> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): executeActivityParams {
		return new executeActivityParams(this, true)
	}

	public __goscriptAssign(source: executeActivityParams): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.activityOptions, values.activityOptions)
		$.assignStruct(target.ActivityType, values.ActivityType)
		target.Input = values.Input
		target.DataConverter = $.assignFieldValue(target.DataConverter, values.DataConverter, "internal.DataConverter")
		target.Header = values.Header
	}

	static __typeInfo = $.registerStructType(
		"internal.executeActivityParams",
		() => new executeActivityParams(),
		() => [],
		executeActivityParams,
		() => [/* @__PURE__ */ $.structField("activityOptions", "internal.activityOptions", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("ActivityType", "internal.ActivityType", [1], 72, true), /* @__PURE__ */ $.structField("Input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 104, true), /* @__PURE__ */ $.structField("DataConverter", "internal.DataConverter", [3], 128, true), /* @__PURE__ */ $.structField("Header", /* @__PURE__ */ $.pointerType("shared.Header"), [4], 144, true)]
	)
}

export class executeLocalActivityParams {
	public get localActivityOptions(): localActivityOptions {
		return this._fields.localActivityOptions
	}

	public set localActivityOptions(value: localActivityOptions) {
		this._fields.localActivityOptions = value
	}

	public get ActivityFn(): any {
		return this._fields.ActivityFn
	}

	public set ActivityFn(value: any) {
		this._fields.ActivityFn = value
	}

	public get ActivityType(): string {
		return this._fields.ActivityType
	}

	public set ActivityType(value: string) {
		this._fields.ActivityType = value
	}

	public get InputArgs(): $.Slice<any> {
		return this._fields.InputArgs
	}

	public set InputArgs(value: $.Slice<any>) {
		this._fields.InputArgs = value
	}

	public get WorkflowInfo(): __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null {
		return this._fields.WorkflowInfo
	}

	public set WorkflowInfo(value: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null) {
		this._fields.WorkflowInfo = value
	}

	public get DataConverter(): __goscript_encoded.DataConverter | null {
		return this._fields.DataConverter
	}

	public set DataConverter(value: __goscript_encoded.DataConverter | null) {
		this._fields.DataConverter = value
	}

	public get Attempt(): number {
		return this._fields.Attempt
	}

	public set Attempt(value: number) {
		this._fields.Attempt = value
	}

	public get ScheduledTime(): time.Time {
		return this._fields.ScheduledTime
	}

	public set ScheduledTime(value: time.Time) {
		this._fields.ScheduledTime = value
	}

	public get Header(): shared.Header | $.VarRef<shared.Header> | null {
		return this._fields.Header
	}

	public set Header(value: shared.Header | $.VarRef<shared.Header> | null) {
		this._fields.Header = value
	}

	public _fields: {
		localActivityOptions: localActivityOptions
		ActivityFn: any
		ActivityType: string
		InputArgs: $.Slice<any>
		WorkflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null
		DataConverter: __goscript_encoded.DataConverter | null
		Attempt: number
		ScheduledTime: time.Time
		Header: shared.Header | $.VarRef<shared.Header> | null
	}

	constructor(init?: Partial<{localActivityOptions?: localActivityOptions, ActivityFn?: any, ActivityType?: string, InputArgs?: $.Slice<any>, WorkflowInfo?: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, DataConverter?: __goscript_encoded.DataConverter | null, Attempt?: number, ScheduledTime?: time.Time, Header?: shared.Header | $.VarRef<shared.Header> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			localActivityOptions: init?.localActivityOptions ? init.localActivityOptions.clone() : new localActivityOptions(undefined, true),
			ActivityFn: init?.ActivityFn ?? (null! as any),
			ActivityType: init?.ActivityType ?? ("" as string),
			InputArgs: init?.InputArgs ?? (null! as $.Slice<any>),
			WorkflowInfo: init?.WorkflowInfo ?? (null! as __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null),
			DataConverter: init?.DataConverter ?? (null! as __goscript_encoded.DataConverter | null),
			Attempt: init?.Attempt ?? (0 as number),
			ScheduledTime: init?.ScheduledTime ? $.markAsStructValue($.cloneStructValue(init.ScheduledTime)) : $.markAsStructValue(new time.Time()),
			Header: init?.Header ?? (null! as shared.Header | $.VarRef<shared.Header> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): executeLocalActivityParams {
		return new executeLocalActivityParams(this, true)
	}

	public __goscriptAssign(source: executeLocalActivityParams): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.localActivityOptions, values.localActivityOptions)
		target.ActivityFn = $.assignFieldValue(target.ActivityFn, values.ActivityFn, { kind: $.TypeKind.Interface, methods: [] })
		target.ActivityType = values.ActivityType
		target.InputArgs = values.InputArgs
		target.WorkflowInfo = values.WorkflowInfo
		target.DataConverter = $.assignFieldValue(target.DataConverter, values.DataConverter, "internal.DataConverter")
		target.Attempt = values.Attempt
		$.assignStruct(target.ScheduledTime, values.ScheduledTime)
		target.Header = values.Header
	}

	static __typeInfo = $.registerStructType(
		"internal.executeLocalActivityParams",
		() => new executeLocalActivityParams(),
		() => [],
		executeLocalActivityParams,
		() => [/* @__PURE__ */ $.structField("localActivityOptions", "internal.localActivityOptions", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("ActivityFn", { kind: $.TypeKind.Interface, methods: [] }, [1], 16, true), /* @__PURE__ */ $.structField("ActivityType", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("InputArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [3], 48, true), /* @__PURE__ */ $.structField("WorkflowInfo", /* @__PURE__ */ $.pointerType("internal.WorkflowInfo"), [4], 72, true), /* @__PURE__ */ $.structField("DataConverter", "internal.DataConverter", [5], 80, true), /* @__PURE__ */ $.structField("Attempt", /* @__PURE__ */ $.basicType("int32"), [6], 96, true), /* @__PURE__ */ $.structField("ScheduledTime", "time.Time", [7], 104, true), /* @__PURE__ */ $.structField("Header", /* @__PURE__ */ $.pointerType("shared.Header"), [8], 128, true)]
	)
}

export class activityEnvironment {
	public get taskToken(): $.Slice<number> {
		return this._fields.taskToken
	}

	public set taskToken(value: $.Slice<number>) {
		this._fields.taskToken = value
	}

	public get workflowExecution(): __goscript_workflow.WorkflowExecution {
		return this._fields.workflowExecution
	}

	public set workflowExecution(value: __goscript_workflow.WorkflowExecution) {
		this._fields.workflowExecution = value
	}

	public get activityID(): string {
		return this._fields.activityID
	}

	public set activityID(value: string) {
		this._fields.activityID = value
	}

	public get activityType(): __goscript_activity.ActivityType {
		return this._fields.activityType
	}

	public set activityType(value: __goscript_activity.ActivityType) {
		this._fields.activityType = value
	}

	public get serviceInvoker(): __goscript_activity.ServiceInvoker | null {
		return this._fields.serviceInvoker
	}

	public set serviceInvoker(value: __goscript_activity.ServiceInvoker | null) {
		this._fields.serviceInvoker = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get metricsScope(): tally.Scope | null {
		return this._fields.metricsScope
	}

	public set metricsScope(value: tally.Scope | null) {
		this._fields.metricsScope = value
	}

	public get isLocalActivity(): boolean {
		return this._fields.isLocalActivity
	}

	public set isLocalActivity(value: boolean) {
		this._fields.isLocalActivity = value
	}

	public get heartbeatTimeout(): time.Duration {
		return this._fields.heartbeatTimeout
	}

	public set heartbeatTimeout(value: time.Duration) {
		this._fields.heartbeatTimeout = value
	}

	public get deadline(): time.Time {
		return this._fields.deadline
	}

	public set deadline(value: time.Time) {
		this._fields.deadline = value
	}

	public get scheduledTimestamp(): time.Time {
		return this._fields.scheduledTimestamp
	}

	public set scheduledTimestamp(value: time.Time) {
		this._fields.scheduledTimestamp = value
	}

	public get startedTimestamp(): time.Time {
		return this._fields.startedTimestamp
	}

	public set startedTimestamp(value: time.Time) {
		this._fields.startedTimestamp = value
	}

	public get taskList(): string {
		return this._fields.taskList
	}

	public set taskList(value: string) {
		this._fields.taskList = value
	}

	public get dataConverter(): __goscript_encoded.DataConverter | null {
		return this._fields.dataConverter
	}

	public set dataConverter(value: __goscript_encoded.DataConverter | null) {
		this._fields.dataConverter = value
	}

	public get attempt(): number {
		return this._fields.attempt
	}

	public set attempt(value: number) {
		this._fields.attempt = value
	}

	public get heartbeatDetails(): $.Slice<number> {
		return this._fields.heartbeatDetails
	}

	public set heartbeatDetails(value: $.Slice<number>) {
		this._fields.heartbeatDetails = value
	}

	public get workflowType(): __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null {
		return this._fields.workflowType
	}

	public set workflowType(value: __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null) {
		this._fields.workflowType = value
	}

	public get workflowDomain(): string {
		return this._fields.workflowDomain
	}

	public set workflowDomain(value: string) {
		this._fields.workflowDomain = value
	}

	public get workerStopChannel(): $.Channel<{}> | null {
		return this._fields.workerStopChannel
	}

	public set workerStopChannel(value: $.Channel<{}> | null) {
		this._fields.workerStopChannel = value
	}

	public get contextPropagators(): $.Slice<__goscript_headers.ContextPropagator | null> {
		return this._fields.contextPropagators
	}

	public set contextPropagators(value: $.Slice<__goscript_headers.ContextPropagator | null>) {
		this._fields.contextPropagators = value
	}

	public get tracer(): opentracing.Tracer | null {
		return this._fields.tracer
	}

	public set tracer(value: opentracing.Tracer | null) {
		this._fields.tracer = value
	}

	public _fields: {
		taskToken: $.Slice<number>
		workflowExecution: __goscript_workflow.WorkflowExecution
		activityID: string
		activityType: __goscript_activity.ActivityType
		serviceInvoker: __goscript_activity.ServiceInvoker | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		metricsScope: tally.Scope | null
		isLocalActivity: boolean
		heartbeatTimeout: time.Duration
		deadline: time.Time
		scheduledTimestamp: time.Time
		startedTimestamp: time.Time
		taskList: string
		dataConverter: __goscript_encoded.DataConverter | null
		attempt: number
		heartbeatDetails: $.Slice<number>
		workflowType: __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null
		workflowDomain: string
		workerStopChannel: $.Channel<{}> | null
		contextPropagators: $.Slice<__goscript_headers.ContextPropagator | null>
		tracer: opentracing.Tracer | null
	}

	constructor(init?: Partial<{taskToken?: $.Slice<number>, workflowExecution?: __goscript_workflow.WorkflowExecution, activityID?: string, activityType?: __goscript_activity.ActivityType, serviceInvoker?: __goscript_activity.ServiceInvoker | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null, metricsScope?: tally.Scope | null, isLocalActivity?: boolean, heartbeatTimeout?: time.Duration, deadline?: time.Time, scheduledTimestamp?: time.Time, startedTimestamp?: time.Time, taskList?: string, dataConverter?: __goscript_encoded.DataConverter | null, attempt?: number, heartbeatDetails?: $.Slice<number>, workflowType?: __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null, workflowDomain?: string, workerStopChannel?: $.Channel<{}> | null, contextPropagators?: $.Slice<__goscript_headers.ContextPropagator | null>, tracer?: opentracing.Tracer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			taskToken: init?.taskToken ?? (null! as $.Slice<number>),
			workflowExecution: init?.workflowExecution ? init.workflowExecution.clone() : new __goscript_workflow.WorkflowExecution(undefined, true),
			activityID: init?.activityID ?? ("" as string),
			activityType: init?.activityType ? init.activityType.clone() : new __goscript_activity.ActivityType(undefined, true),
			serviceInvoker: init?.serviceInvoker ?? (null! as __goscript_activity.ServiceInvoker | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			metricsScope: init?.metricsScope ?? (null! as tally.Scope | null),
			isLocalActivity: init?.isLocalActivity ?? (false as boolean),
			heartbeatTimeout: init?.heartbeatTimeout ?? (0n as time.Duration),
			deadline: init?.deadline ? $.markAsStructValue($.cloneStructValue(init.deadline)) : $.markAsStructValue(new time.Time()),
			scheduledTimestamp: init?.scheduledTimestamp ? $.markAsStructValue($.cloneStructValue(init.scheduledTimestamp)) : $.markAsStructValue(new time.Time()),
			startedTimestamp: init?.startedTimestamp ? $.markAsStructValue($.cloneStructValue(init.startedTimestamp)) : $.markAsStructValue(new time.Time()),
			taskList: init?.taskList ?? ("" as string),
			dataConverter: init?.dataConverter ?? (null! as __goscript_encoded.DataConverter | null),
			attempt: init?.attempt ?? (0 as number),
			heartbeatDetails: init?.heartbeatDetails ?? (null! as $.Slice<number>),
			workflowType: init?.workflowType ?? (null! as __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null),
			workflowDomain: init?.workflowDomain ?? ("" as string),
			workerStopChannel: init?.workerStopChannel ?? (null! as $.Channel<{}> | null),
			contextPropagators: init?.contextPropagators ?? (null! as $.Slice<__goscript_headers.ContextPropagator | null>),
			tracer: init?.tracer ?? (null! as opentracing.Tracer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): activityEnvironment {
		return new activityEnvironment(this, true)
	}

	public __goscriptAssign(source: activityEnvironment): void {
		const target = this._fields
		const values = source._fields
		target.taskToken = values.taskToken
		$.assignStruct(target.workflowExecution, values.workflowExecution)
		target.activityID = values.activityID
		$.assignStruct(target.activityType, values.activityType)
		target.serviceInvoker = $.assignFieldValue(target.serviceInvoker, values.serviceInvoker, "internal.ServiceInvoker")
		target.logger = values.logger
		target.metricsScope = $.assignFieldValue(target.metricsScope, values.metricsScope, "tally.Scope")
		target.isLocalActivity = values.isLocalActivity
		target.heartbeatTimeout = values.heartbeatTimeout
		$.assignStruct(target.deadline, values.deadline)
		$.assignStruct(target.scheduledTimestamp, values.scheduledTimestamp)
		$.assignStruct(target.startedTimestamp, values.startedTimestamp)
		target.taskList = values.taskList
		target.dataConverter = $.assignFieldValue(target.dataConverter, values.dataConverter, "internal.DataConverter")
		target.attempt = values.attempt
		target.heartbeatDetails = values.heartbeatDetails
		target.workflowType = values.workflowType
		target.workflowDomain = values.workflowDomain
		target.workerStopChannel = values.workerStopChannel
		target.contextPropagators = values.contextPropagators
		target.tracer = $.assignFieldValue(target.tracer, values.tracer, "opentracing.Tracer")
	}

	static __typeInfo = $.registerStructType(
		"internal.activityEnvironment",
		() => new activityEnvironment(),
		() => [],
		activityEnvironment,
		() => [/* @__PURE__ */ $.structField("taskToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowExecution", "internal.WorkflowExecution", [1], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("activityID", /* @__PURE__ */ $.basicType("string"), [2], 56, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("activityType", "internal.ActivityType", [3], 72, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("serviceInvoker", "internal.ServiceInvoker", [4], 104, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [5], 120, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("metricsScope", "tally.Scope", [6], 128, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("isLocalActivity", /* @__PURE__ */ $.basicType("bool"), [7], 144, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("heartbeatTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [8], 152, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("deadline", "time.Time", [9], 160, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("scheduledTimestamp", "time.Time", [10], 184, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("startedTimestamp", "time.Time", [11], 208, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("taskList", /* @__PURE__ */ $.basicType("string"), [12], 232, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("dataConverter", "internal.DataConverter", [13], 248, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("attempt", /* @__PURE__ */ $.basicType("int32"), [14], 264, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("heartbeatDetails", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [15], 272, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowType", /* @__PURE__ */ $.pointerType("internal.WorkflowType"), [16], 296, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowDomain", /* @__PURE__ */ $.basicType("string"), [17], 304, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workerStopChannel", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), [18], 320, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("contextPropagators", /* @__PURE__ */ $.sliceType("internal.ContextPropagator"), [19], 328, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("tracer", "opentracing.Tracer", [20], 352, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export const activityEnvContextKey: contextKey = "activityEnv"

export const activityOptionsContextKey: contextKey = "activityOptions"

export const localActivityOptionsContextKey: contextKey = "localActivityOptions"

export async function getActivityEnv(ctx: context.Context | null): globalThis.Promise<activityEnvironment | $.VarRef<activityEnvironment> | null> {
	let env = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("activityEnv", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (env == null) {
		$.panic("getActivityEnv: Not an activity context")
	}
	return ((env as any)?.__goType === "*internal.activityEnvironment" && (env as any).__goValue === undefined && (env as any).__isTypedNil !== true ? ((env as any) as activityEnvironment | $.VarRef<activityEnvironment> | null) : $.mustTypeAssert<activityEnvironment | $.VarRef<activityEnvironment> | null>(env, /* @__PURE__ */ $.pointerType("internal.activityEnvironment")))
}

export async function hasActivityEnv(ctx: context.Context | null): globalThis.Promise<boolean> {
	let env = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("activityEnv", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return env != null
}

export async function getActivityOptions(ctx: __goscript_context.Context | null): globalThis.Promise<activityOptions | $.VarRef<activityOptions> | null> {
	let eap = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("activityOptions", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (eap == null) {
		return null
	}
	return ((eap as any)?.__goType === "*internal.activityOptions" && (eap as any).__goValue === undefined && (eap as any).__isTypedNil !== true ? ((eap as any) as activityOptions | $.VarRef<activityOptions> | null) : $.mustTypeAssert<activityOptions | $.VarRef<activityOptions> | null>(eap, /* @__PURE__ */ $.pointerType("internal.activityOptions")))
}

export async function getLocalActivityOptions(ctx: __goscript_context.Context | null): globalThis.Promise<localActivityOptions | $.VarRef<localActivityOptions> | null> {
	let opts = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("localActivityOptions", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (opts == null) {
		return null
	}
	return ((opts as any)?.__goType === "*internal.localActivityOptions" && (opts as any).__goValue === undefined && (opts as any).__isTypedNil !== true ? ((opts as any) as localActivityOptions | $.VarRef<localActivityOptions> | null) : $.mustTypeAssert<localActivityOptions | $.VarRef<localActivityOptions> | null>(opts, /* @__PURE__ */ $.pointerType("internal.localActivityOptions")))
}

export async function getValidatedActivityOptions(ctx: __goscript_context.Context | null): globalThis.Promise<[activityOptions | $.VarRef<activityOptions> | null, $.GoError]> {
	let p: activityOptions | $.VarRef<activityOptions> | null = await getActivityOptions(ctx)
	let p$: activityOptions = p == null ? $.pointerTarget<activityOptions>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<activityOptions>(p)
	if (p == null) {
		// We need task list as a compulsory parameter. This can be removed after registration
		return [null, __goscript_workflow.errActivityParamsBadRequest]
	}
	if ($.stringEqual((p$ as activityOptions).TaskListName, "")) {
		// We default to origin task list name.
		;(p$ as activityOptions).TaskListName = (p$ as activityOptions).OriginalTaskListName
	}
	if ((p$ as activityOptions).ScheduleToStartTimeoutSeconds <= 0) {
		return [null, errors.New("missing or negative ScheduleToStartTimeoutSeconds")]
	}
	if ((p$ as activityOptions).StartToCloseTimeoutSeconds <= 0) {
		return [null, errors.New("missing or negative StartToCloseTimeoutSeconds")]
	}
	if ((p$ as activityOptions).ScheduleToCloseTimeoutSeconds < 0) {
		return [null, errors.New("invalid negative ScheduleToCloseTimeoutSeconds")]
	}
	if ((p$ as activityOptions).ScheduleToCloseTimeoutSeconds == 0) {
		// This is a optional parameter, we default to sum of the other two timeouts.
		;(p$ as activityOptions).ScheduleToCloseTimeoutSeconds = $.int((((p$ as activityOptions).ScheduleToStartTimeoutSeconds + (p$ as activityOptions).StartToCloseTimeoutSeconds) | 0), 32)
	}
	if ((p$ as activityOptions).HeartbeatTimeoutSeconds < 0) {
		return [null, errors.New("invalid negative HeartbeatTimeoutSeconds")]
	}
	{
		let err = validateRetryPolicy((p$ as activityOptions).RetryPolicy)
		if (err != null) {
			return [null, err]
		}
	}

	return [p, null]
}

export async function getValidatedLocalActivityOptions(ctx: __goscript_context.Context | null): globalThis.Promise<[localActivityOptions | $.VarRef<localActivityOptions> | null, $.GoError]> {
	let p: localActivityOptions | $.VarRef<localActivityOptions> | null = await getLocalActivityOptions(ctx)
	if (p == null) {
		return [null, __goscript_workflow.errLocalActivityParamsBadRequest]
	}
	if ($.pointerValue<localActivityOptions>(p).ScheduleToCloseTimeoutSeconds <= 0) {
		return [null, errors.New("missing or negative ScheduleToCloseTimeoutSeconds")]
	}

	return [p, null]
}

export function validateRetryPolicy(p: shared.RetryPolicy | $.VarRef<shared.RetryPolicy> | null): $.GoError {
	if (p == null) {
		return null
	}

	if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as shared.RetryPolicy).GetInitialIntervalInSeconds() : shared.RetryPolicy.prototype.GetInitialIntervalInSeconds.call(p)) <= 0) {
		return errors.New("missing or negative InitialIntervalInSeconds on retry policy")
	}
	if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as shared.RetryPolicy).GetMaximumIntervalInSeconds() : shared.RetryPolicy.prototype.GetMaximumIntervalInSeconds.call(p)) < 0) {
		return errors.New("negative MaximumIntervalInSeconds on retry policy is invalid")
	}
	if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as shared.RetryPolicy).GetMaximumIntervalInSeconds() : shared.RetryPolicy.prototype.GetMaximumIntervalInSeconds.call(p)) == 0) {
		// if not set, default to 100x of initial interval
		$.pointerValue<shared.RetryPolicy>(p).MaximumIntervalInSeconds = common.Int32Ptr($.int(globalThis.Math.imul(100, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as shared.RetryPolicy).GetInitialIntervalInSeconds() : shared.RetryPolicy.prototype.GetInitialIntervalInSeconds.call(p))), 32))
	}
	if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as shared.RetryPolicy).GetMaximumAttempts() : shared.RetryPolicy.prototype.GetMaximumAttempts.call(p)) < 0) {
		return errors.New("negative MaximumAttempts on retry policy is invalid")
	}
	if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as shared.RetryPolicy).GetExpirationIntervalInSeconds() : shared.RetryPolicy.prototype.GetExpirationIntervalInSeconds.call(p)) < 0) {
		return errors.New("ExpirationIntervalInSeconds cannot be less than 0 on retry policy")
	}
	if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as shared.RetryPolicy).GetBackoffCoefficient() : shared.RetryPolicy.prototype.GetBackoffCoefficient.call(p)) < 1) {
		return errors.New("BackoffCoefficient on retry policy cannot be less than 1.0")
	}
	if (((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as shared.RetryPolicy).GetMaximumAttempts() : shared.RetryPolicy.prototype.GetMaximumAttempts.call(p)) == 0) && ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as shared.RetryPolicy).GetExpirationIntervalInSeconds() : shared.RetryPolicy.prototype.GetExpirationIntervalInSeconds.call(p)) == 0)) {
		return errors.New("both MaximumAttempts and ExpirationIntervalInSeconds on retry policy are not set, at least one of them must be set")
	}

	return null
}

export async function validateFunctionArgs(f: any, args: $.Slice<any>, isWorkflow: boolean): globalThis.Promise<$.GoError> {
	let fType = reflect.TypeOf(f)
	if ((fType == null) || ((__goscriptAwait = (fType !== null && (fType as any).__isVarRef !== true && (fType as any).__goValue === undefined ? (fType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 19)) {
		return fmt.Errorf("Provided type: %v is not a function type", f)
	}
	let fnName = __goscript_internal_worker.getFunctionName(f)

	let fnArgIndex = 0
	// Skip Context function argument.
	if ((__goscriptAwait = (fType !== null && (fType as any).__isVarRef !== true && (fType as any).__goValue === undefined ? (fType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fType)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0) {
		if (isWorkflow && await __goscript_internal_worker.isWorkflowContext((__goscriptAwait = (fType !== null && (fType as any).__isVarRef !== true && (fType as any).__goValue === undefined ? (fType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fType)).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			fnArgIndex++
		}
		if (!isWorkflow && await isActivityContext((__goscriptAwait = (fType !== null && (fType as any).__isVarRef !== true && (fType as any).__goValue === undefined ? (fType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fType)).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			fnArgIndex++
		}
	}

	// Validate provided args match with function order match.
	if (((__goscriptAwait = (fType !== null && (fType as any).__isVarRef !== true && (fType as any).__goValue === undefined ? (fType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fType)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - fnArgIndex) != $.sliceLen(args)) {
		return fmt.Errorf("expected %d args for function: %v but found %v", $.basicInterfaceValue((__goscriptAwait = (fType !== null && (fType as any).__isVarRef !== true && (fType as any).__goValue === undefined ? (fType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fType)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) - fnArgIndex, "int"), fnName, $.basicInterfaceValue($.sliceLen(args), "int"))
	}

	for (let __goscriptSliceWindow0 = $.sliceRange(args), i = 0; fnArgIndex < (__goscriptAwait = (fType !== null && (fType as any).__isVarRef !== true && (fType as any).__goValue === undefined ? (fType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fType)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); [fnArgIndex, i] = [fnArgIndex + 1, i + 1]) {
		let fnArgType = (__goscriptAwait = (fType !== null && (fType as any).__isVarRef !== true && (fType as any).__goValue === undefined ? (fType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fType)).In(fnArgIndex), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let argType = reflect.TypeOf(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as any))
		if ((argType != null) && !(__goscriptAwait = (argType !== null && (argType as any).__isVarRef !== true && (argType as any).__goValue === undefined ? (argType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(argType)).AssignableTo($.pointerValueOrNil(fnArgType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return fmt.Errorf("cannot assign function argument: %d from type: %s to type: %s", $.basicInterfaceValue(fnArgIndex + 1, "int"), (argType as any), (fnArgType as any))
		}
	}

	return null
}

export async function getValidatedActivityFunction(f: any, args: $.Slice<any>, registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null): globalThis.Promise<[__goscript_activity.ActivityType | $.VarRef<__goscript_activity.ActivityType> | null, $.GoError]> {
	let fnName = ""
	let fType = reflect.TypeOf(f)
	switch (await getKind(fType)) {
		case reflect.String:
		{
			fnName = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(f))).String()
			break
		}
		case reflect.Func:
		{
			{
				let err = await validateFunctionArgs(f, args, false)
				if (err != null) {
					return [null, err]
				}
			}
			fnName = __goscript_internal_worker.getFunctionName(f)
			{
				let [alias, ok] = await (registry !== null && (registry as any).__isVarRef !== true && (registry as any).__goValue === undefined ? ((registry as any) as __goscript_registry.registry).getActivityAlias(fnName) : __goscript_registry.registry.prototype.getActivityAlias.call(registry, fnName))
				if (ok) {
					fnName = alias
				}
			}
			break
		}
		default:
		{
			return [null, fmt.Errorf("invalid type 'f' parameter provided, it can be either activity function or name of the activity: %v", f)]
			break
		}
	}

	return [new __goscript_activity.ActivityType({Name: fnName}), null]
}

export async function getKind(fType: reflect.Type | null): globalThis.Promise<reflect.Kind> {
	if (fType == null) {
		return 0
	}
	return (fType !== null && (fType as any).__isVarRef !== true && (fType as any).__goValue === undefined ? (fType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fType)).Kind()
}

export async function isActivityContext(inType: reflect.Type | null): globalThis.Promise<boolean> {
	let contextElem = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.interfaceValue(null, "*context.Context", /* @__PURE__ */ $.pointerType("context.Context")))).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return (inType != null) && (__goscriptAwait = (inType !== null && (inType as any).__isVarRef !== true && (inType as any).__goValue === undefined ? (inType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(inType)).Implements($.pointerValueOrNil(contextElem)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function validateFunctionAndGetResults(f: any, values: $.Slice<reflect.Value>, dataConverter: __goscript_encoded.DataConverter | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let resultSize = $.sliceLen(values)

	if ((resultSize < 1) || (resultSize > 2)) {
		let fnName = __goscript_internal_worker.getFunctionName(f)
		return [null, fmt.Errorf("the function: %v signature returns %d results, it is expecting to return either error or (result, error)", fnName, $.basicInterfaceValue(resultSize, "int"))]
	}

	let result: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError

	// Parse result
	if (resultSize > 1) {
		let retValue = $.markAsStructValue($.cloneStructValue($.arrayIndex(values!, 0)))
		if (($.markAsStructValue($.cloneStructValue(retValue)).Kind() != 22) || !$.markAsStructValue($.cloneStructValue(retValue)).IsNil()) {
			let __goscriptTuple0: any = await __goscript_internal_worker.encodeArg(dataConverter, $.markAsStructValue($.cloneStructValue(retValue)).Interface())
			result = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			if (err != null) {
				return [null, err]
			}
		}
	}

	// Parse error.
	let errValue = $.markAsStructValue($.cloneStructValue($.arrayIndex(values!, resultSize - 1)))
	if ($.markAsStructValue($.cloneStructValue(errValue)).IsNil()) {
		return [result, null]
	}
	let [errInterface, ok] = $.typeAssertTuple<$.GoError>($.markAsStructValue($.cloneStructValue(errValue)).Interface(), "error")
	if (!ok) {
		return [null, fmt.Errorf("Failed to parse error result as it is not of error interface: %v", $.interfaceValue($.markAsStructValue($.cloneStructValue(errValue)), "reflect.Value", "reflect.Value"))]
	}
	return [result, errInterface]
}

export async function serializeResults(f: any, results: $.Slice<any>, dataConverter: __goscript_encoded.DataConverter | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	let result: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	// results contain all results including error
	let resultSize = $.sliceLen(results)

	if ((resultSize < 1) || (resultSize > 2)) {
		let fnName = __goscript_internal_worker.getFunctionName(f)
		err = fmt.Errorf("the function: %v signature returns %d results, it is expecting to return either error or (result, error)", fnName, $.basicInterfaceValue(resultSize, "int"))
		return [result, err]
	}
	if (resultSize > 1) {
		let retValue = $.arrayIndex(results!, 0)
		if (retValue != null) {
			let __goscriptTuple1: any = await __goscript_internal_worker.encodeArg(dataConverter, retValue)
			result = __goscriptTuple1[0]
			err = __goscriptTuple1[1]
			if (err != null) {
				return [null, err]
			}
		}
	}
	let errResult = $.arrayIndex(results!, resultSize - 1)
	if (errResult != null) {
		let ok: boolean = false
		let __goscriptTuple2: any = $.typeAssertTuple<$.GoError>(errResult, "error")
		err = __goscriptTuple2[0]
		ok = __goscriptTuple2[1]
		if (!ok) {
			err = fmt.Errorf("failed to serialize error result as it is not of error interface: %v", errResult)
		}
	}
	return [result, err]
}

export async function deSerializeFnResultFromFnType(fnType: reflect.Type | null, result: $.Slice<number>, to: any, dataConverter: __goscript_encoded.DataConverter | null): globalThis.Promise<$.GoError> {
	if ((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 19) {
		return fmt.Errorf("expecting only function type but got type: %v", (fnType as any))
	}

	// We already validated during registration that it either have (result, error) (or) just error.
	if ((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) <= 1) {
		return null
	} else {
		if ((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 2) {
			if (result == null) {
				return null
			}
			let err = await __goscript_internal_worker.decodeArg(dataConverter, result, to)
			if (err != null) {
				return err
			}
		}
	}
	return null
}

export async function deSerializeFunctionResult(f: any, result: $.Slice<number>, to: any, dataConverter: __goscript_encoded.DataConverter | null, registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null): globalThis.Promise<$.GoError> {
	let fType = reflect.TypeOf(f)
	if (dataConverter == null) {
		dataConverter = __goscript_encoded.getDefaultDataConverter()
	}

	switch (await getKind(fType)) {
		case reflect.Func:
		{
			return deSerializeFnResultFromFnType(fType, result, to, dataConverter)
			break
		}
		case reflect.String:
		{
			let fnName = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(f))).String()
			{
				let [__goscriptShadow0, ok] = await (registry !== null && (registry as any).__isVarRef !== true && (registry as any).__goValue === undefined ? ((registry as any) as __goscript_registry.registry).GetActivity(fnName) : __goscript_registry.registry.prototype.GetActivity.call(registry, fnName))
				if (ok) {
					return deSerializeFnResultFromFnType(reflect.TypeOf((__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<activity, null>) : $.pointerValue<Exclude<activity, null>>(__goscriptShadow0)).GetFunction(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), result, to, dataConverter)
				}
			}
			break
		}
	}

	// For everything we return result.
	return __goscript_internal_worker.decodeArg(dataConverter, result, to)
}

export async function setActivityParametersIfNotExist(ctx: __goscript_context.Context | null): globalThis.Promise<__goscript_context.Context | null> {
	let params: activityOptions | $.VarRef<activityOptions> | null = await getActivityOptions(ctx)
	let newParams: $.VarRef<activityOptions> = $.varRef(new activityOptions(undefined, true))
	if (params != null) {
		newParams.value = $.assignStruct(newParams.value, $.pointerValue<activityOptions>(params))
		if ($.pointerValue<activityOptions>(params).RetryPolicy != null) {
			let newRetryPolicy: $.VarRef<shared.RetryPolicy> = $.varRef(new shared.RetryPolicy(undefined, true))
			newRetryPolicy.value = $.assignStruct(newRetryPolicy.value, $.pointerValue<shared.RetryPolicy>(newParams.value.RetryPolicy))
			newParams.value.RetryPolicy = newRetryPolicy
		}
	}
	return __goscript_context.WithValue(ctx, $.namedValueInterfaceValue<any>("activityOptions", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey")), $.interfaceValue(newParams, "*internal.activityOptions", /* @__PURE__ */ $.pointerType("internal.activityOptions")))
}

export async function setLocalActivityParametersIfNotExist(ctx: __goscript_context.Context | null): globalThis.Promise<__goscript_context.Context | null> {
	let params: localActivityOptions | $.VarRef<localActivityOptions> | null = await getLocalActivityOptions(ctx)
	let newParams: $.VarRef<localActivityOptions> = $.varRef(new localActivityOptions(undefined, true))
	if (params != null) {
		newParams.value = $.assignStruct(newParams.value, $.pointerValue<localActivityOptions>(params))
	}
	return __goscript_context.WithValue(ctx, $.namedValueInterfaceValue<any>("localActivityOptions", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey")), $.interfaceValue(newParams, "*internal.localActivityOptions", /* @__PURE__ */ $.pointerType("internal.localActivityOptions")))
}

var __goscriptAwait: any
