// Generated file based on activity.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as time from "@goscript/time/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import type * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import * as __goscript_internal_logging_tags from "./internal_logging_tags.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import type * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import type * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_testsuite from "./workflow_testsuite.gs.ts"
import "@goscript/context/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/sync/index.js"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./error.gs.ts"
import "./headers.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_logging_tags.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_workflow.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./workflow.gs.ts"
import "./workflow_testsuite.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.RegistryActivityInfo", "internal.ActivityType", "internal.ActivityInfo", "internal.RegisterActivityOptions", "internal.ActivityOptions", "internal.LocalActivityOptions", "internal.ServiceInvoker"])

export type RegistryActivityInfo = {
	ActivityType(): ActivityType
	GetFunction(): any
}

$.registerInterfaceType(
	"internal.RegistryActivityInfo",
	null,
	[$.methodSignature("ActivityType", [], ["internal.ActivityType"]), $.methodSignature("GetFunction", [], [{ kind: $.TypeKind.Interface, methods: [] }])]
);

export type ServiceInvoker = {
	BackgroundHeartbeat(): $.GoError | globalThis.Promise<$.GoError>
	BatchHeartbeat(details: $.Slice<number>): $.GoError | globalThis.Promise<$.GoError>
	Close(flushBufferedHeartbeat: boolean): void
	Heartbeat(details: $.Slice<number>): $.GoError | globalThis.Promise<$.GoError>
	SignalWorkflow(ctx: context.Context | null, domain: string, workflowID: string, runID: string, signalName: string, signalInput: $.Slice<number>): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"internal.ServiceInvoker",
	null,
	[$.methodSignature("BackgroundHeartbeat", [], ["error"]), $.methodSignature("BatchHeartbeat", [["details", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("Close", [["flushBufferedHeartbeat", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Heartbeat", [["details", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("SignalWorkflow", [["ctx", "context.Context"], ["domain", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["signalInput", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export class ActivityType {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Path(): string {
		return this._fields.Path
	}

	public set Path(value: string) {
		this._fields.Path = value
	}

	public _fields: {
		Name: string
		Path: string
	}

	constructor(init?: Partial<{Name?: string, Path?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Path: init?.Path ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ActivityType {
		return new ActivityType(this, true)
	}

	public __goscriptAssign(source: ActivityType): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Path = values.Path
	}

	static __typeInfo = $.registerStructType(
		"internal.ActivityType",
		() => new ActivityType(),
		() => [],
		ActivityType,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Path", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

export class ActivityInfo {
	public get TaskToken(): $.Slice<number> {
		return this._fields.TaskToken
	}

	public set TaskToken(value: $.Slice<number>) {
		this._fields.TaskToken = value
	}

	public get WorkflowType(): __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null {
		return this._fields.WorkflowType
	}

	public set WorkflowType(value: __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null) {
		this._fields.WorkflowType = value
	}

	public get WorkflowDomain(): string {
		return this._fields.WorkflowDomain
	}

	public set WorkflowDomain(value: string) {
		this._fields.WorkflowDomain = value
	}

	public get WorkflowExecution(): __goscript_workflow.WorkflowExecution {
		return this._fields.WorkflowExecution
	}

	public set WorkflowExecution(value: __goscript_workflow.WorkflowExecution) {
		this._fields.WorkflowExecution = value
	}

	public get ActivityID(): string {
		return this._fields.ActivityID
	}

	public set ActivityID(value: string) {
		this._fields.ActivityID = value
	}

	public get ActivityType(): ActivityType {
		return this._fields.ActivityType
	}

	public set ActivityType(value: ActivityType) {
		this._fields.ActivityType = value
	}

	public get TaskList(): string {
		return this._fields.TaskList
	}

	public set TaskList(value: string) {
		this._fields.TaskList = value
	}

	public get HeartbeatTimeout(): time.Duration {
		return this._fields.HeartbeatTimeout
	}

	public set HeartbeatTimeout(value: time.Duration) {
		this._fields.HeartbeatTimeout = value
	}

	public get ScheduledTimestamp(): time.Time {
		return this._fields.ScheduledTimestamp
	}

	public set ScheduledTimestamp(value: time.Time) {
		this._fields.ScheduledTimestamp = value
	}

	public get StartedTimestamp(): time.Time {
		return this._fields.StartedTimestamp
	}

	public set StartedTimestamp(value: time.Time) {
		this._fields.StartedTimestamp = value
	}

	public get Deadline(): time.Time {
		return this._fields.Deadline
	}

	public set Deadline(value: time.Time) {
		this._fields.Deadline = value
	}

	public get Attempt(): number {
		return this._fields.Attempt
	}

	public set Attempt(value: number) {
		this._fields.Attempt = value
	}

	public _fields: {
		TaskToken: $.Slice<number>
		WorkflowType: __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null
		WorkflowDomain: string
		WorkflowExecution: __goscript_workflow.WorkflowExecution
		ActivityID: string
		ActivityType: ActivityType
		TaskList: string
		HeartbeatTimeout: time.Duration
		ScheduledTimestamp: time.Time
		StartedTimestamp: time.Time
		Deadline: time.Time
		Attempt: number
	}

	constructor(init?: Partial<{TaskToken?: $.Slice<number>, WorkflowType?: __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null, WorkflowDomain?: string, WorkflowExecution?: __goscript_workflow.WorkflowExecution, ActivityID?: string, ActivityType?: ActivityType, TaskList?: string, HeartbeatTimeout?: time.Duration, ScheduledTimestamp?: time.Time, StartedTimestamp?: time.Time, Deadline?: time.Time, Attempt?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			TaskToken: init?.TaskToken ?? (null! as $.Slice<number>),
			WorkflowType: init?.WorkflowType ?? (null! as __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null),
			WorkflowDomain: init?.WorkflowDomain ?? ("" as string),
			WorkflowExecution: init?.WorkflowExecution ? init.WorkflowExecution.clone() : new __goscript_workflow.WorkflowExecution(undefined, true),
			ActivityID: init?.ActivityID ?? ("" as string),
			ActivityType: init?.ActivityType ? init.ActivityType.clone() : new ActivityType(undefined, true),
			TaskList: init?.TaskList ?? ("" as string),
			HeartbeatTimeout: init?.HeartbeatTimeout ?? (0n as time.Duration),
			ScheduledTimestamp: init?.ScheduledTimestamp ? $.markAsStructValue($.cloneStructValue(init.ScheduledTimestamp)) : $.markAsStructValue(new time.Time()),
			StartedTimestamp: init?.StartedTimestamp ? $.markAsStructValue($.cloneStructValue(init.StartedTimestamp)) : $.markAsStructValue(new time.Time()),
			Deadline: init?.Deadline ? $.markAsStructValue($.cloneStructValue(init.Deadline)) : $.markAsStructValue(new time.Time()),
			Attempt: init?.Attempt ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ActivityInfo {
		return new ActivityInfo(this, true)
	}

	public __goscriptAssign(source: ActivityInfo): void {
		const target = this._fields
		const values = source._fields
		target.TaskToken = values.TaskToken
		target.WorkflowType = values.WorkflowType
		target.WorkflowDomain = values.WorkflowDomain
		$.assignStruct(target.WorkflowExecution, values.WorkflowExecution)
		target.ActivityID = values.ActivityID
		$.assignStruct(target.ActivityType, values.ActivityType)
		target.TaskList = values.TaskList
		target.HeartbeatTimeout = values.HeartbeatTimeout
		$.assignStruct(target.ScheduledTimestamp, values.ScheduledTimestamp)
		$.assignStruct(target.StartedTimestamp, values.StartedTimestamp)
		$.assignStruct(target.Deadline, values.Deadline)
		target.Attempt = values.Attempt
	}

	static __typeInfo = $.registerStructType(
		"internal.ActivityInfo",
		() => new ActivityInfo(),
		() => [],
		ActivityInfo,
		() => [/* @__PURE__ */ $.structField("TaskToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, true), /* @__PURE__ */ $.structField("WorkflowType", /* @__PURE__ */ $.pointerType("internal.WorkflowType"), [1], 24, true), /* @__PURE__ */ $.structField("WorkflowDomain", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("WorkflowExecution", "internal.WorkflowExecution", [3], 48, true), /* @__PURE__ */ $.structField("ActivityID", /* @__PURE__ */ $.basicType("string"), [4], 80, true), /* @__PURE__ */ $.structField("ActivityType", "internal.ActivityType", [5], 96, true), /* @__PURE__ */ $.structField("TaskList", /* @__PURE__ */ $.basicType("string"), [6], 128, true), /* @__PURE__ */ $.structField("HeartbeatTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [7], 144, true), /* @__PURE__ */ $.structField("ScheduledTimestamp", "time.Time", [8], 152, true), /* @__PURE__ */ $.structField("StartedTimestamp", "time.Time", [9], 176, true), /* @__PURE__ */ $.structField("Deadline", "time.Time", [10], 200, true), /* @__PURE__ */ $.structField("Attempt", /* @__PURE__ */ $.basicType("int32"), [11], 224, true)]
	)
}

export class RegisterActivityOptions {
	// When an activity is a function the name is an actual activity type name.
	// When an activity is part of a structure then each member of the structure becomes an activity with
	// this Name as a prefix + activity function name.
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// Activity type name is equal to function name instead of fully qualified
	// name including function package (and struct type if used).
	// This option has no effect when explicit Name is provided.
	public get EnableShortName(): boolean {
		return this._fields.EnableShortName
	}

	public set EnableShortName(value: boolean) {
		this._fields.EnableShortName = value
	}

	public get DisableAlreadyRegisteredCheck(): boolean {
		return this._fields.DisableAlreadyRegisteredCheck
	}

	public set DisableAlreadyRegisteredCheck(value: boolean) {
		this._fields.DisableAlreadyRegisteredCheck = value
	}

	// Automatically send heartbeats for this activity at an interval that is less than the HeartbeatTimeout.
	// This option has no effect if the activity is executed with a HeartbeatTimeout of 0.
	// Default: false
	public get EnableAutoHeartbeat(): boolean {
		return this._fields.EnableAutoHeartbeat
	}

	public set EnableAutoHeartbeat(value: boolean) {
		this._fields.EnableAutoHeartbeat = value
	}

	public _fields: {
		Name: string
		EnableShortName: boolean
		DisableAlreadyRegisteredCheck: boolean
		EnableAutoHeartbeat: boolean
	}

	constructor(init?: Partial<{Name?: string, EnableShortName?: boolean, DisableAlreadyRegisteredCheck?: boolean, EnableAutoHeartbeat?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			EnableShortName: init?.EnableShortName ?? (false as boolean),
			DisableAlreadyRegisteredCheck: init?.DisableAlreadyRegisteredCheck ?? (false as boolean),
			EnableAutoHeartbeat: init?.EnableAutoHeartbeat ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RegisterActivityOptions {
		return new RegisterActivityOptions(this, true)
	}

	public __goscriptAssign(source: RegisterActivityOptions): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.EnableShortName = values.EnableShortName
		target.DisableAlreadyRegisteredCheck = values.DisableAlreadyRegisteredCheck
		target.EnableAutoHeartbeat = values.EnableAutoHeartbeat
	}

	static __typeInfo = $.registerStructType(
		"internal.RegisterActivityOptions",
		() => new RegisterActivityOptions(),
		() => [],
		RegisterActivityOptions,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("EnableShortName", /* @__PURE__ */ $.basicType("bool"), [1], 16, true), /* @__PURE__ */ $.structField("DisableAlreadyRegisteredCheck", /* @__PURE__ */ $.basicType("bool"), [2], 17, true), /* @__PURE__ */ $.structField("EnableAutoHeartbeat", /* @__PURE__ */ $.basicType("bool"), [3], 18, true)]
	)
}

export class ActivityOptions {
	// TaskList that the activity needs to be scheduled on.
	// optional: The default task list with the same name as the workflow task list.
	public get TaskList(): string {
		return this._fields.TaskList
	}

	public set TaskList(value: string) {
		this._fields.TaskList = value
	}

	// ScheduleToCloseTimeout - The end to end timeout for the activity needed.
	// The zero value of this uses default value.
	// Optional: The default value is the sum of ScheduleToStartTimeout and StartToCloseTimeout
	public get ScheduleToCloseTimeout(): time.Duration {
		return this._fields.ScheduleToCloseTimeout
	}

	public set ScheduleToCloseTimeout(value: time.Duration) {
		this._fields.ScheduleToCloseTimeout = value
	}

	// ScheduleToStartTimeout - The queue timeout before the activity starts executed.
	// Mandatory: No default.
	public get ScheduleToStartTimeout(): time.Duration {
		return this._fields.ScheduleToStartTimeout
	}

	public set ScheduleToStartTimeout(value: time.Duration) {
		this._fields.ScheduleToStartTimeout = value
	}

	// StartToCloseTimeout - The timeout from the start of execution to end of it.
	// Mandatory: No default.
	public get StartToCloseTimeout(): time.Duration {
		return this._fields.StartToCloseTimeout
	}

	public set StartToCloseTimeout(value: time.Duration) {
		this._fields.StartToCloseTimeout = value
	}

	// HeartbeatTimeout - The periodic timeout while the activity is in execution. This is
	// the max interval the server needs to hear at-least one ping from the activity.
	// Optional: Default zero, means no heart beating is needed.
	public get HeartbeatTimeout(): time.Duration {
		return this._fields.HeartbeatTimeout
	}

	public set HeartbeatTimeout(value: time.Duration) {
		this._fields.HeartbeatTimeout = value
	}

	// WaitForCancellation - Whether to wait for cancelled activity to be completed(
	// activity can be failed, completed, cancel accepted)
	// Optional: default false
	public get WaitForCancellation(): boolean {
		return this._fields.WaitForCancellation
	}

	public set WaitForCancellation(value: boolean) {
		this._fields.WaitForCancellation = value
	}

	// ActivityID - Business level activity ID, this is not needed for most of the cases if you have
	// to specify this then talk to cadence team. This is something will be done in future.
	// Optional: default empty string
	public get ActivityID(): string {
		return this._fields.ActivityID
	}

	public set ActivityID(value: string) {
		this._fields.ActivityID = value
	}

	// RetryPolicy specify how to retry activity if error happens. When RetryPolicy.ExpirationInterval is specified
	// and it is larger than the activity's ScheduleToStartTimeout, then the ExpirationInterval will override activity's
	// ScheduleToStartTimeout. This is to avoid retrying on ScheduleToStartTimeout error which only happen when worker
	// is not picking up the task within the timeout. Retrying ScheduleToStartTimeout does not make sense as it just
	// mark the task as failed and create a new task and put back in the queue waiting worker to pick again. Cadence
	// server also make sure the ScheduleToStartTimeout will not be larger than the workflow's timeout.
	// Same apply to ScheduleToCloseTimeout. See more details about RetryPolicy on the doc for RetryPolicy.
	// Optional: default is no retry
	public get RetryPolicy(): __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null {
		return this._fields.RetryPolicy
	}

	public set RetryPolicy(value: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null) {
		this._fields.RetryPolicy = value
	}

	public _fields: {
		TaskList: string
		ScheduleToCloseTimeout: time.Duration
		ScheduleToStartTimeout: time.Duration
		StartToCloseTimeout: time.Duration
		HeartbeatTimeout: time.Duration
		WaitForCancellation: boolean
		ActivityID: string
		RetryPolicy: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null
	}

	constructor(init?: Partial<{TaskList?: string, ScheduleToCloseTimeout?: time.Duration, ScheduleToStartTimeout?: time.Duration, StartToCloseTimeout?: time.Duration, HeartbeatTimeout?: time.Duration, WaitForCancellation?: boolean, ActivityID?: string, RetryPolicy?: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			TaskList: init?.TaskList ?? ("" as string),
			ScheduleToCloseTimeout: init?.ScheduleToCloseTimeout ?? (0n as time.Duration),
			ScheduleToStartTimeout: init?.ScheduleToStartTimeout ?? (0n as time.Duration),
			StartToCloseTimeout: init?.StartToCloseTimeout ?? (0n as time.Duration),
			HeartbeatTimeout: init?.HeartbeatTimeout ?? (0n as time.Duration),
			WaitForCancellation: init?.WaitForCancellation ?? (false as boolean),
			ActivityID: init?.ActivityID ?? ("" as string),
			RetryPolicy: init?.RetryPolicy ?? (null! as __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ActivityOptions {
		return new ActivityOptions(this, true)
	}

	public __goscriptAssign(source: ActivityOptions): void {
		const target = this._fields
		const values = source._fields
		target.TaskList = values.TaskList
		target.ScheduleToCloseTimeout = values.ScheduleToCloseTimeout
		target.ScheduleToStartTimeout = values.ScheduleToStartTimeout
		target.StartToCloseTimeout = values.StartToCloseTimeout
		target.HeartbeatTimeout = values.HeartbeatTimeout
		target.WaitForCancellation = values.WaitForCancellation
		target.ActivityID = values.ActivityID
		target.RetryPolicy = values.RetryPolicy
	}

	static __typeInfo = $.registerStructType(
		"internal.ActivityOptions",
		() => new ActivityOptions(),
		() => [],
		ActivityOptions,
		() => [/* @__PURE__ */ $.structField("TaskList", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("ScheduleToCloseTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 16, true), /* @__PURE__ */ $.structField("ScheduleToStartTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 24, true), /* @__PURE__ */ $.structField("StartToCloseTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 32, true), /* @__PURE__ */ $.structField("HeartbeatTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [4], 40, true), /* @__PURE__ */ $.structField("WaitForCancellation", /* @__PURE__ */ $.basicType("bool"), [5], 48, true), /* @__PURE__ */ $.structField("ActivityID", /* @__PURE__ */ $.basicType("string"), [6], 56, true), /* @__PURE__ */ $.structField("RetryPolicy", /* @__PURE__ */ $.pointerType("internal.RetryPolicy"), [7], 72, true)]
	)
}

export class LocalActivityOptions {
	// ScheduleToCloseTimeout - The end to end timeout for the local activity.
	// This field is required.
	public get ScheduleToCloseTimeout(): time.Duration {
		return this._fields.ScheduleToCloseTimeout
	}

	public set ScheduleToCloseTimeout(value: time.Duration) {
		this._fields.ScheduleToCloseTimeout = value
	}

	// RetryPolicy specify how to retry activity if error happens.
	// Optional: default is no retry
	public get RetryPolicy(): __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null {
		return this._fields.RetryPolicy
	}

	public set RetryPolicy(value: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null) {
		this._fields.RetryPolicy = value
	}

	public _fields: {
		ScheduleToCloseTimeout: time.Duration
		RetryPolicy: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null
	}

	constructor(init?: Partial<{ScheduleToCloseTimeout?: time.Duration, RetryPolicy?: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ScheduleToCloseTimeout: init?.ScheduleToCloseTimeout ?? (0n as time.Duration),
			RetryPolicy: init?.RetryPolicy ?? (null! as __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LocalActivityOptions {
		return new LocalActivityOptions(this, true)
	}

	public __goscriptAssign(source: LocalActivityOptions): void {
		const target = this._fields
		const values = source._fields
		target.ScheduleToCloseTimeout = values.ScheduleToCloseTimeout
		target.RetryPolicy = values.RetryPolicy
	}

	static __typeInfo = $.registerStructType(
		"internal.LocalActivityOptions",
		() => new LocalActivityOptions(),
		() => [],
		LocalActivityOptions,
		() => [/* @__PURE__ */ $.structField("ScheduleToCloseTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, true), /* @__PURE__ */ $.structField("RetryPolicy", /* @__PURE__ */ $.pointerType("internal.RetryPolicy"), [1], 8, true)]
	)
}

export async function RegisterActivity(activityFunc: any): globalThis.Promise<void> {
	await RegisterActivityWithOptions(activityFunc, new RegisterActivityOptions(undefined, true))
}

export async function RegisterActivityWithOptions(activityFunc: any, opts: RegisterActivityOptions): globalThis.Promise<void> {
	let __goscriptShadow0: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null = await __goscript_registry.getGlobalRegistry()
	await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as __goscript_registry.registry).RegisterActivityWithOptions(activityFunc, opts) : __goscript_registry.registry.prototype.RegisterActivityWithOptions.call(__goscriptShadow0, activityFunc, opts))
}

export async function GetActivityInfo(ctx: context.Context | null): globalThis.Promise<ActivityInfo> {
	let env: __goscript_internal_activity.activityEnvironment | $.VarRef<__goscript_internal_activity.activityEnvironment> | null = await __goscript_internal_activity.getActivityEnv(ctx)
	let env$: __goscript_internal_activity.activityEnvironment = env == null ? $.pointerTarget<__goscript_internal_activity.activityEnvironment>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<__goscript_internal_activity.activityEnvironment>(env)
	return new ActivityInfo({ActivityID: (env$ as __goscript_internal_activity.activityEnvironment).activityID, ActivityType: (env$ as __goscript_internal_activity.activityEnvironment).activityType, TaskToken: (env$ as __goscript_internal_activity.activityEnvironment).taskToken, WorkflowExecution: (env$ as __goscript_internal_activity.activityEnvironment).workflowExecution, HeartbeatTimeout: (env$ as __goscript_internal_activity.activityEnvironment).heartbeatTimeout, Deadline: $.markAsStructValue($.cloneStructValue((env$ as __goscript_internal_activity.activityEnvironment).deadline)), ScheduledTimestamp: $.markAsStructValue($.cloneStructValue((env$ as __goscript_internal_activity.activityEnvironment).scheduledTimestamp)), StartedTimestamp: $.markAsStructValue($.cloneStructValue((env$ as __goscript_internal_activity.activityEnvironment).startedTimestamp)), TaskList: (env$ as __goscript_internal_activity.activityEnvironment).taskList, Attempt: (env$ as __goscript_internal_activity.activityEnvironment).attempt, WorkflowType: (env$ as __goscript_internal_activity.activityEnvironment).workflowType, WorkflowDomain: (env$ as __goscript_internal_activity.activityEnvironment).workflowDomain}, true)
}

export async function HasActivityInfo(ctx: context.Context | null): globalThis.Promise<boolean> {
	return __goscript_internal_activity.hasActivityEnv(ctx)
}

export async function HasHeartbeatDetails(ctx: context.Context | null): globalThis.Promise<boolean> {
	let env: __goscript_internal_activity.activityEnvironment | $.VarRef<__goscript_internal_activity.activityEnvironment> | null = await __goscript_internal_activity.getActivityEnv(ctx)
	return $.sliceLen($.pointerValue<__goscript_internal_activity.activityEnvironment>(env).heartbeatDetails) > 0
}

export async function GetHeartbeatDetails(ctx: context.Context | null, d: $.Slice<any>): globalThis.Promise<$.GoError> {
	let env: __goscript_internal_activity.activityEnvironment | $.VarRef<__goscript_internal_activity.activityEnvironment> | null = await __goscript_internal_activity.getActivityEnv(ctx)
	let env$: __goscript_internal_activity.activityEnvironment = env == null ? $.pointerTarget<__goscript_internal_activity.activityEnvironment>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<__goscript_internal_activity.activityEnvironment>(env)
	if ($.sliceLen((env$ as __goscript_internal_activity.activityEnvironment).heartbeatDetails) == 0) {
		return __goscript_error.ErrNoData
	}
	let encoded = __goscript_workflow_testsuite.newEncodedValues((env$ as __goscript_internal_activity.activityEnvironment).heartbeatDetails, (env$ as __goscript_internal_activity.activityEnvironment).dataConverter)
	return (encoded !== null && (encoded as any).__isVarRef !== true && (encoded as any).__goValue === undefined ? (encoded as Exclude<__goscript_encoded.Values, null>) : $.pointerValue<Exclude<__goscript_encoded.Values, null>>(encoded)).Get(d)
}

export async function GetActivityLogger(ctx: context.Context | null): globalThis.Promise<zap.Logger | $.VarRef<zap.Logger> | null> {
	let env: __goscript_internal_activity.activityEnvironment | $.VarRef<__goscript_internal_activity.activityEnvironment> | null = await __goscript_internal_activity.getActivityEnv(ctx)
	return $.pointerValue<__goscript_internal_activity.activityEnvironment>(env).logger
}

export async function GetActivityMetricsScope(ctx: context.Context | null): globalThis.Promise<tally.Scope | null> {
	let env: __goscript_internal_activity.activityEnvironment | $.VarRef<__goscript_internal_activity.activityEnvironment> | null = await __goscript_internal_activity.getActivityEnv(ctx)
	return $.pointerValue<__goscript_internal_activity.activityEnvironment>(env).metricsScope
}

export async function GetWorkerStopChannel(ctx: context.Context | null): globalThis.Promise<$.Channel<{}> | null> {
	let env: __goscript_internal_activity.activityEnvironment | $.VarRef<__goscript_internal_activity.activityEnvironment> | null = await __goscript_internal_activity.getActivityEnv(ctx)
	return $.pointerValue<__goscript_internal_activity.activityEnvironment>(env).workerStopChannel
}

export async function RecordActivityHeartbeat(ctx: context.Context | null, details: $.Slice<any>): globalThis.Promise<void> {
	let env: __goscript_internal_activity.activityEnvironment | $.VarRef<__goscript_internal_activity.activityEnvironment> | null = await __goscript_internal_activity.getActivityEnv(ctx)
	let env$: __goscript_internal_activity.activityEnvironment = env == null ? $.pointerTarget<__goscript_internal_activity.activityEnvironment>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<__goscript_internal_activity.activityEnvironment>(env)
	if ((env$ as __goscript_internal_activity.activityEnvironment).isLocalActivity) {
		// no-op for local activity
		return
	}
	let data: $.Slice<number> = null! as $.Slice<number>
	let err: $.GoError = null! as $.GoError
	// We would like to be a able to pass in "nil" as part of details(that is no progress to report to)
	if (($.sliceLen(details) != 1) || ($.arrayIndex(details!, 0) != null)) {
		let __goscriptTuple0: any = await __goscript_internal_worker.encodeArgs(await __goscript_internal_worker.getDataConverterFromActivityCtx(ctx), details)
		data = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			$.panic((err as any))
		}
	}
	err = (__goscriptAwait = $.pointerValue<Exclude<ServiceInvoker, null>>((env$ as __goscript_internal_activity.activityEnvironment).serviceInvoker).BatchHeartbeat(data), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (err != null) {
		let log: zap.Logger | $.VarRef<zap.Logger> | null = await GetActivityLogger(ctx)
		await (log !== null && (log as any).__isVarRef !== true && (log as any).__goValue === undefined ? ((log as any) as zap.Logger).Debug("RecordActivityHeartbeat With Error:", $.arrayToSlice<zap.Field>([zap.Error(err)])) : zap.Logger.prototype.Debug.call(log, "RecordActivityHeartbeat With Error:", $.arrayToSlice<zap.Field>([zap.Error(err)])))
	}
}

export async function WithActivityTask(ctx: context.Context | null, task: shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null, taskList: string, invoker: ServiceInvoker | null, logger: zap.Logger | $.VarRef<zap.Logger> | null, scope: tally.Scope | null, dataConverter: __goscript_encoded.DataConverter | null, workerStopChannel: $.Channel<{}> | null, contextPropagators: $.Slice<__goscript_headers.ContextPropagator | null>, tracer: opentracing.Tracer | null): globalThis.Promise<context.Context | null> {
	const task$: shared.PollForActivityTaskResponse = task == null ? $.pointerTarget<shared.PollForActivityTaskResponse>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<shared.PollForActivityTaskResponse>(task)
	let deadline: time.Time = $.markAsStructValue(new time.Time())
	let scheduled = $.markAsStructValue($.cloneStructValue(time.Unix(0n, (task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as shared.PollForActivityTaskResponse).GetScheduledTimestampOfThisAttempt() : shared.PollForActivityTaskResponse.prototype.GetScheduledTimestampOfThisAttempt.call(task)))))
	let started = $.markAsStructValue($.cloneStructValue(time.Unix(0n, (task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as shared.PollForActivityTaskResponse).GetStartedTimestamp() : shared.PollForActivityTaskResponse.prototype.GetStartedTimestamp.call(task)))))
	let scheduleToCloseTimeout = $.int64Mul($.int64((task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as shared.PollForActivityTaskResponse).GetScheduleToCloseTimeoutSeconds() : shared.PollForActivityTaskResponse.prototype.GetScheduleToCloseTimeoutSeconds.call(task))), 1000000000n)
	let startToCloseTimeout = $.int64Mul($.int64((task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as shared.PollForActivityTaskResponse).GetStartToCloseTimeoutSeconds() : shared.PollForActivityTaskResponse.prototype.GetStartToCloseTimeoutSeconds.call(task))), 1000000000n)
	let heartbeatTimeout = $.int64Mul($.int64((task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as shared.PollForActivityTaskResponse).GetHeartbeatTimeoutSeconds() : shared.PollForActivityTaskResponse.prototype.GetHeartbeatTimeoutSeconds.call(task))), 1000000000n)
	let scheduleToCloseDeadline = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(scheduled)).Add(scheduleToCloseTimeout)))
	let startToCloseDeadline = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(started)).Add(startToCloseTimeout)))
	// Minimum of the two deadlines.
	if ($.markAsStructValue($.cloneStructValue(scheduleToCloseDeadline)).Before($.markAsStructValue($.cloneStructValue(startToCloseDeadline)))) {
		deadline = $.assignStruct(deadline, scheduleToCloseDeadline)
	} else {
		deadline = $.assignStruct(deadline, startToCloseDeadline)
	}

	// keep in sync with local activity logger tags
	logger = await zap.Logger.prototype.With.call(logger, $.arrayToSlice<zap.Field>([new zapcore.Field({Key: "ActivityID", Type: 15, String: $.pointerValue<string>((task$ as shared.PollForActivityTaskResponse).ActivityId)}, true), new zapcore.Field({Key: "ActivityType", Type: 15, String: $.pointerValue<string>($.pointerValue<shared.ActivityType>((task$ as shared.PollForActivityTaskResponse).ActivityType).Name)}, true), new zapcore.Field({Key: "WorkflowType", Type: 15, String: $.pointerValue<string>($.pointerValue<shared.WorkflowType>((task$ as shared.PollForActivityTaskResponse).WorkflowType).Name)}, true), new zapcore.Field({Key: "WorkflowID", Type: 15, String: $.pointerValue<string>($.pointerValue<shared.WorkflowExecution>((task$ as shared.PollForActivityTaskResponse).WorkflowExecution).WorkflowId)}, true), new zapcore.Field({Key: "RunID", Type: 15, String: $.pointerValue<string>($.pointerValue<shared.WorkflowExecution>((task$ as shared.PollForActivityTaskResponse).WorkflowExecution).RunId)}, true), (() => { const __goscriptLiteralField0 = $.int64((task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as shared.PollForActivityTaskResponse).GetAttempt() : shared.PollForActivityTaskResponse.prototype.GetAttempt.call(task))); return new zapcore.Field({Key: "Attempt", Type: 11, Integer: __goscriptLiteralField0}, true) })()]))

	return context.WithValue($.pointerValueOrNil(ctx)!, $.namedValueInterfaceValue<any>("activityEnv", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey")), $.interfaceValue((() => { const __goscriptLiteralField1 = (task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as shared.PollForActivityTaskResponse).GetAttempt() : shared.PollForActivityTaskResponse.prototype.GetAttempt.call(task)); return new __goscript_internal_activity.activityEnvironment({taskToken: (task$ as shared.PollForActivityTaskResponse).TaskToken, serviceInvoker: invoker, activityType: new ActivityType({Name: $.pointerValue<string>($.pointerValue<shared.ActivityType>((task$ as shared.PollForActivityTaskResponse).ActivityType).Name)}, true), activityID: $.pointerValue<string>((task$ as shared.PollForActivityTaskResponse).ActivityId), workflowExecution: new __goscript_workflow.WorkflowExecution({RunID: $.pointerValue<string>($.pointerValue<shared.WorkflowExecution>((task$ as shared.PollForActivityTaskResponse).WorkflowExecution).RunId), ID: $.pointerValue<string>($.pointerValue<shared.WorkflowExecution>((task$ as shared.PollForActivityTaskResponse).WorkflowExecution).WorkflowId)}, true), logger: logger, metricsScope: scope, deadline: $.markAsStructValue($.cloneStructValue(deadline)), heartbeatTimeout: heartbeatTimeout, scheduledTimestamp: $.markAsStructValue($.cloneStructValue(scheduled)), startedTimestamp: $.markAsStructValue($.cloneStructValue(started)), taskList: taskList, dataConverter: dataConverter, attempt: __goscriptLiteralField1, heartbeatDetails: (task$ as shared.PollForActivityTaskResponse).HeartbeatDetails, workflowType: new __goscript_workflow.WorkflowType({Name: $.pointerValue<string>($.pointerValue<shared.WorkflowType>((task$ as shared.PollForActivityTaskResponse).WorkflowType).Name)}), workflowDomain: $.pointerValue<string>((task$ as shared.PollForActivityTaskResponse).WorkflowDomain), workerStopChannel: workerStopChannel, contextPropagators: contextPropagators, tracer: tracer}) })(), "*internal.activityEnvironment", /* @__PURE__ */ $.pointerType("internal.activityEnvironment")))
}

var __goscriptAwait: any
