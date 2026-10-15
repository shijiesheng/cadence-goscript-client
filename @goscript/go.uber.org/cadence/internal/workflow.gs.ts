// Generated file based on workflow.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as s2 from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import type * as context from "@goscript/context/index.js"

import type * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_convert from "./convert.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import type * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_workflow_testsuite from "./workflow_testsuite.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/sync/index.js"
import "./activity.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./convert.gs.ts"
import "./encoded.gs.ts"
import "./error.gs.ts"
import "./headers.gs.ts"
import "./interceptors.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_worker_base.gs.ts"
import "./internal_workflow.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./workflow_testsuite.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.Channel", "internal.Selector", "internal.WaitGroup", "internal.Future", "internal.Settable", "internal.ChildWorkflowFuture", "internal.RegistryWorkflowInfo", "internal.WorkflowType", "internal.WorkflowExecution", "internal.WorkflowExecutionAsync", "internal.EncodedValue", "internal.Version", "internal.ChildWorkflowOptions", "internal.Bugports", "internal.RegisterWorkflowOptions", "internal.needRetryError", "internal.WorkflowInfo", "internal.GetVersionOption", "internal.getVersionConfig", "internal.customVersionOption", "internal.useMinVersionOption"])

export type Channel = {
	Close(): void
	Receive(ctx: __goscript_context.Context | null, valuePtr: any): boolean | globalThis.Promise<boolean>
	ReceiveAsync(valuePtr: any): boolean | globalThis.Promise<boolean>
	ReceiveAsyncWithMoreFlag(valuePtr: any): [boolean, boolean] | globalThis.Promise<[boolean, boolean]>
	Send(ctx: __goscript_context.Context | null, v: any): void
	SendAsync(v: any): boolean | globalThis.Promise<boolean>
}

$.registerInterfaceType(
	"internal.Channel",
	null,
	[$.methodSignature("Close"), $.methodSignature("Receive", [["ctx", "internal.Context"], ["valuePtr", { kind: $.TypeKind.Interface, methods: [] }]], [["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("ReceiveAsync", [["valuePtr", { kind: $.TypeKind.Interface, methods: [] }]], [["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("ReceiveAsyncWithMoreFlag", [["valuePtr", { kind: $.TypeKind.Interface, methods: [] }]], [["ok", /* @__PURE__ */ $.basicType("bool")], ["more", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("Send", [["ctx", "internal.Context"], ["v", { kind: $.TypeKind.Interface, methods: [] }]]), $.methodSignature("SendAsync", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [["ok", /* @__PURE__ */ $.basicType("bool")]])]
);

export type Selector = {
	AddDefault(f: (() => void) | null): void
	AddFuture(future: Future | null, f: ((f: Future | null) => void) | null): Selector | null
	AddReceive(c: Channel | null, f: ((c: Channel | null, ok: boolean) => void) | null): Selector | null
	AddSend(c: Channel | null, v: any, f: (() => void) | null): Selector | null
	Select(ctx: __goscript_context.Context | null): void
}

$.registerInterfaceType(
	"internal.Selector",
	null,
	[$.methodSignature("AddDefault", [["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]]), $.methodSignature("AddFuture", [["future", "internal.Future"], ["f", ({ kind: $.TypeKind.Function, params: ["internal.Future"], results: [] } as $.FunctionTypeInfo)]], ["internal.Selector"]), $.methodSignature("AddReceive", [["c", "internal.Channel"], ["f", ({ kind: $.TypeKind.Function, params: ["internal.Channel", /* @__PURE__ */ $.basicType("bool")], results: [] } as $.FunctionTypeInfo)]], ["internal.Selector"]), $.methodSignature("AddSend", [["c", "internal.Channel"], ["v", { kind: $.TypeKind.Interface, methods: [] }], ["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], ["internal.Selector"]), $.methodSignature("Select", [["ctx", "internal.Context"]])]
);

export type WaitGroup = {
	Add(delta: number): void
	Done(): void
	Wait(ctx: __goscript_context.Context | null): void
}

$.registerInterfaceType(
	"internal.WaitGroup",
	null,
	[$.methodSignature("Add", [["delta", /* @__PURE__ */ $.basicType("int")]]), $.methodSignature("Done"), $.methodSignature("Wait", [["ctx", "internal.Context"]])]
);

export type Future = {
	Get(ctx: __goscript_context.Context | null, valuePtr: any): $.GoError | globalThis.Promise<$.GoError>
	IsReady(): boolean | globalThis.Promise<boolean>
}

$.registerInterfaceType(
	"internal.Future",
	null,
	[$.methodSignature("Get", [["ctx", "internal.Context"], ["valuePtr", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("IsReady", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type Settable = {
	Chain(future: Future | null): void
	Set(value: any, err: $.GoError): void
	SetError(err: $.GoError): void
	SetValue(value: any): void
}

$.registerInterfaceType(
	"internal.Settable",
	null,
	[$.methodSignature("Chain", [["future", "internal.Future"]]), $.methodSignature("Set", [["value", { kind: $.TypeKind.Interface, methods: [] }], ["err", "error"]]), $.methodSignature("SetError", [["err", "error"]]), $.methodSignature("SetValue", [["value", { kind: $.TypeKind.Interface, methods: [] }]])]
);

export type ChildWorkflowFuture = {
	Get(ctx: __goscript_context.Context | null, valuePtr: any): $.GoError | globalThis.Promise<$.GoError>
	GetChildWorkflowExecution(): Future | null
	IsReady(): boolean | globalThis.Promise<boolean>
	SignalChildWorkflow(ctx: __goscript_context.Context | null, signalName: string, data: any): Future | null | globalThis.Promise<Future | null>
}

$.registerInterfaceType(
	"internal.ChildWorkflowFuture",
	null,
	[$.methodSignature("Get", [["ctx", "internal.Context"], ["valuePtr", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("GetChildWorkflowExecution", [], ["internal.Future"]), $.methodSignature("IsReady", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("SignalChildWorkflow", [["ctx", "internal.Context"], ["signalName", /* @__PURE__ */ $.basicType("string")], ["data", { kind: $.TypeKind.Interface, methods: [] }]], ["internal.Future"])]
);

export type RegistryWorkflowInfo = {
	GetFunction(): any
	WorkflowType(): WorkflowType
}

$.registerInterfaceType(
	"internal.RegistryWorkflowInfo",
	null,
	[$.methodSignature("GetFunction", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("WorkflowType", [], ["internal.WorkflowType"])]
);

export type Version = number

export type GetVersionOption = {
	apply(_p0: getVersionConfig | $.VarRef<getVersionConfig> | null): void
}

$.registerInterfaceType(
	"internal.GetVersionOption",
	null,
	[$.methodSignature("apply", [/* @__PURE__ */ $.pointerType("internal.getVersionConfig")])]
);

export type customVersionOption = number

$.registerNamedValueType(
	"internal.customVersionOption",
	{apply: (receiver: any, ...args: any[]) => (customVersionOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [["config", /* @__PURE__ */ $.pointerType("internal.getVersionConfig")]])]
);

$.registerNamedValueType(
	"*internal.customVersionOption",
	{apply: (receiver: any, ...args: any[]) => (customVersionOption_apply as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("apply", [["config", /* @__PURE__ */ $.pointerType("internal.getVersionConfig")]])]
);

export class WorkflowType {
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

	public clone(): WorkflowType {
		return new WorkflowType(this, true)
	}

	public __goscriptAssign(source: WorkflowType): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Path = values.Path
	}

	static __typeInfo = $.registerStructType(
		"internal.WorkflowType",
		() => new WorkflowType(),
		() => [],
		WorkflowType,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Path", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

export class WorkflowExecution {
	public get ID(): string {
		return this._fields.ID
	}

	public set ID(value: string) {
		this._fields.ID = value
	}

	public get RunID(): string {
		return this._fields.RunID
	}

	public set RunID(value: string) {
		this._fields.RunID = value
	}

	public _fields: {
		ID: string
		RunID: string
	}

	constructor(init?: Partial<{ID?: string, RunID?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			ID: init?.ID ?? ("" as string),
			RunID: init?.RunID ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkflowExecution {
		return new WorkflowExecution(this, true)
	}

	public __goscriptAssign(source: WorkflowExecution): void {
		const target = this._fields
		const values = source._fields
		target.ID = values.ID
		target.RunID = values.RunID
	}

	static __typeInfo = $.registerStructType(
		"internal.WorkflowExecution",
		() => new WorkflowExecution(),
		() => [],
		WorkflowExecution,
		() => [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("RunID", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

export class WorkflowExecutionAsync {
	public get ID(): string {
		return this._fields.ID
	}

	public set ID(value: string) {
		this._fields.ID = value
	}

	public _fields: {
		ID: string
	}

	constructor(init?: Partial<{ID?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			ID: init?.ID ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkflowExecutionAsync {
		return new WorkflowExecutionAsync(this, true)
	}

	public __goscriptAssign(source: WorkflowExecutionAsync): void {
		const target = this._fields
		const values = source._fields
		target.ID = values.ID
	}

	static __typeInfo = $.registerStructType(
		"internal.WorkflowExecutionAsync",
		() => new WorkflowExecutionAsync(),
		() => [],
		WorkflowExecutionAsync,
		() => [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("string"), [0], 0, true)]
	)
}

export class EncodedValue {
	public get value(): $.Slice<number> {
		return this._fields.value
	}

	public set value(value: $.Slice<number>) {
		this._fields.value = value
	}

	public get dataConverter(): __goscript_encoded.DataConverter | null {
		return this._fields.dataConverter
	}

	public set dataConverter(value: __goscript_encoded.DataConverter | null) {
		this._fields.dataConverter = value
	}

	public _fields: {
		value: $.Slice<number>
		dataConverter: __goscript_encoded.DataConverter | null
	}

	constructor(init?: Partial<{value?: $.Slice<number>, dataConverter?: __goscript_encoded.DataConverter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			value: init?.value ?? (null! as $.Slice<number>),
			dataConverter: init?.dataConverter ?? (null! as __goscript_encoded.DataConverter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EncodedValue {
		return new EncodedValue(this, true)
	}

	public __goscriptAssign(source: EncodedValue): void {
		const target = this._fields
		const values = source._fields
		target.value = values.value
		target.dataConverter = $.assignFieldValue(target.dataConverter, values.dataConverter, "internal.DataConverter")
	}

	public async Get(valuePtr: any): globalThis.Promise<$.GoError> {
		const b = this;
		if (!b.HasValue()) {
			return __goscript_error.ErrNoData
		}
		return __goscript_internal_worker.decodeArg(b.dataConverter, b.value, valuePtr)
	}

	public HasValue(): boolean {
		const b = this;
		return b.value != null
	}

	static __typeInfo = $.registerStructType(
		"internal.EncodedValue",
		() => new EncodedValue(),
		() => [$.methodSignature("Get", [["valuePtr", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("HasValue", [], [/* @__PURE__ */ $.basicType("bool")])],
		EncodedValue,
		() => [/* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("dataConverter", "internal.DataConverter", [1], 24, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class Bugports {
	// StartChildWorkflowsOnCanceledContext allows emulating older, buggy behavior that existed prior to v0.18.4.
	//
	// Prior to the fix, child workflows would be started and keep running when their context was canceled in two
	// situations:
	// 1) when the context was canceled before ExecuteChildWorkflow is called, and
	// 2) when the context was canceled after ExecuteChildWorkflow but before the child workflow was started.
	//
	// 1 is unfortunately easy to trigger, though many workflows will encounter an error earlier and not reach the
	// child-workflow-executing code.  2 is expected to be very rare in practice.
	//
	// To permanently emulate old behavior, use a disconnected context when starting child workflows, and
	// cancel it only after `childfuture.GetWorkflowExecution().Get(...)` returns.  This can be used when this flag
	// is removed in the future.
	//
	// If you have currently-broken workflows and need to repair them, there are two primary options:
	//
	// 1: Check the BinaryChecksum value of your new deploy and/or of the decision that is currently failing
	// workflows.  Then set this flag when replaying history on those not-fixed checksums.  Concretely, this means
	// checking both `workflow.GetInfo(ctx).BinaryChecksum` (note that sufficiently old clients may not have
	// recorded a value, and it may be nil) and `workflow.IsReplaying(ctx)`.
	//
	// 2: Reset broken workflows back to either before the buggy behavior was recorded, or before the fixed behavior
	// was deployed.  A "bad binary" reset type can do the latter in bulk, see the CLI's
	// `cadence workflow reset-batch --reset_type BadBinary --help` for details.  For the former, check the failing
	// histories, identify the point at which the bug occurred, and reset to prior to that decision task.
	//
	// Added in 0.18.4, this may be removed in or after v0.19.0, so please migrate off of it ASAP.
	//
	// Deprecated: All bugports are always deprecated and may be removed at any time.
	public get StartChildWorkflowsOnCanceledContext(): boolean {
		return this._fields.StartChildWorkflowsOnCanceledContext
	}

	public set StartChildWorkflowsOnCanceledContext(value: boolean) {
		this._fields.StartChildWorkflowsOnCanceledContext = value
	}

	public _fields: {
		StartChildWorkflowsOnCanceledContext: boolean
	}

	constructor(init?: Partial<{StartChildWorkflowsOnCanceledContext?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			StartChildWorkflowsOnCanceledContext: init?.StartChildWorkflowsOnCanceledContext ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Bugports {
		return new Bugports(this, true)
	}

	public __goscriptAssign(source: Bugports): void {
		const target = this._fields
		const values = source._fields
		target.StartChildWorkflowsOnCanceledContext = values.StartChildWorkflowsOnCanceledContext
	}

	static __typeInfo = $.registerStructType(
		"internal.Bugports",
		() => new Bugports(),
		() => [],
		Bugports,
		() => [/* @__PURE__ */ $.structField("StartChildWorkflowsOnCanceledContext", /* @__PURE__ */ $.basicType("bool"), [0], 0, true)]
	)
}

export class ChildWorkflowOptions {
	// Domain of the child workflow.
	// Optional: the current workflow (parent)'s domain will be used if this is not provided.
	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	// WorkflowID of the child workflow to be scheduled.
	// Optional: an auto generated workflowID will be used if this is not provided.
	public get WorkflowID(): string {
		return this._fields.WorkflowID
	}

	public set WorkflowID(value: string) {
		this._fields.WorkflowID = value
	}

	// TaskList that the child workflow needs to be scheduled on.
	// Optional: the parent workflow task list will be used if this is not provided.
	public get TaskList(): string {
		return this._fields.TaskList
	}

	public set TaskList(value: string) {
		this._fields.TaskList = value
	}

	// ExecutionStartToCloseTimeout - The end to end timeout for the child workflow execution.
	// Mandatory: no default
	public get ExecutionStartToCloseTimeout(): time.Duration {
		return this._fields.ExecutionStartToCloseTimeout
	}

	public set ExecutionStartToCloseTimeout(value: time.Duration) {
		this._fields.ExecutionStartToCloseTimeout = value
	}

	// TaskStartToCloseTimeout - The decision task timeout for the child workflow.
	// Optional: default is 10s if this is not provided (or if 0 is provided).
	public get TaskStartToCloseTimeout(): time.Duration {
		return this._fields.TaskStartToCloseTimeout
	}

	public set TaskStartToCloseTimeout(value: time.Duration) {
		this._fields.TaskStartToCloseTimeout = value
	}

	// WaitForCancellation - Whether to wait for cancelled child workflow to be ended (child workflow can be ended
	// as: completed/failed/timedout/terminated/canceled)
	// Optional: default false
	public get WaitForCancellation(): boolean {
		return this._fields.WaitForCancellation
	}

	public set WaitForCancellation(value: boolean) {
		this._fields.WaitForCancellation = value
	}

	// WorkflowIDReusePolicy - Whether server allow reuse of workflow ID, can be useful
	// for dedup logic if set to WorkflowIdReusePolicyRejectDuplicate
	public get WorkflowIDReusePolicy(): __goscript_client.WorkflowIDReusePolicy {
		return this._fields.WorkflowIDReusePolicy
	}

	public set WorkflowIDReusePolicy(value: __goscript_client.WorkflowIDReusePolicy) {
		this._fields.WorkflowIDReusePolicy = value
	}

	// RetryPolicy specify how to retry child workflow if error happens.
	// Optional: default is no retry
	public get RetryPolicy(): __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null {
		return this._fields.RetryPolicy
	}

	public set RetryPolicy(value: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null) {
		this._fields.RetryPolicy = value
	}

	// CronSchedule - Optional cron schedule for workflow. If a cron schedule is specified, the workflow will run
	// as a cron based on the schedule. The scheduling will be based on UTC time. Schedule for next run only happen
	// after the current run is completed/failed/timeout. If a RetryPolicy is also supplied, and the workflow failed
	// or timeout, the workflow will be retried based on the retry policy. While the workflow is retrying, it won't
	// schedule its next run. If next schedule is due while workflow is running (or retrying), then it will skip that
	// schedule. Cron workflow will not stop until it is terminated or cancelled (by returning cadence.CanceledError).
	// The cron spec is as following:
	// ┌───────────── minute (0 - 59)
	// │ ┌───────────── hour (0 - 23)
	// │ │ ┌───────────── day of the month (1 - 31)
	// │ │ │ ┌───────────── month (1 - 12)
	// │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday)
	// │ │ │ │ │
	// │ │ │ │ │
	// * * * * *
	public get CronSchedule(): string {
		return this._fields.CronSchedule
	}

	public set CronSchedule(value: string) {
		this._fields.CronSchedule = value
	}

	// Memo - Optional non-indexed info that will be shown in list workflow.
	public get Memo(): globalThis.Map<string, any> | null {
		return this._fields.Memo
	}

	public set Memo(value: globalThis.Map<string, any> | null) {
		this._fields.Memo = value
	}

	// SearchAttributes - Optional indexed info that can be used in query of List/Scan/Count workflow APIs (only
	// supported when Cadence server is using ElasticSearch). The key and value type must be registered on Cadence server side.
	// Use GetSearchAttributes API to get valid key and corresponding value type.
	public get SearchAttributes(): globalThis.Map<string, any> | null {
		return this._fields.SearchAttributes
	}

	public set SearchAttributes(value: globalThis.Map<string, any> | null) {
		this._fields.SearchAttributes = value
	}

	// ParentClosePolicy - Optional policy to decide what to do for the child.
	// Default is Terminate (if onboarded to this feature)
	public get ParentClosePolicy(): __goscript_client.ParentClosePolicy {
		return this._fields.ParentClosePolicy
	}

	public set ParentClosePolicy(value: __goscript_client.ParentClosePolicy) {
		this._fields.ParentClosePolicy = value
	}

	// Bugports allows opt-in enabling of older, possibly buggy behavior, primarily intended to allow temporarily
	// emulating old behavior until a fix is deployed.
	//
	// Bugports are always deprecated and may be removed in future versions.
	// Generally speaking they will *likely* remain in place for one minor version, and then they may be removed to
	// allow cleaning up the additional code complexity that they cause.
	//
	// Deprecated: All bugports are always deprecated and may be removed at any time.
	public get Bugports(): Bugports {
		return this._fields.Bugports
	}

	public set Bugports(value: Bugports) {
		this._fields.Bugports = value
	}

	public _fields: {
		Domain: string
		WorkflowID: string
		TaskList: string
		ExecutionStartToCloseTimeout: time.Duration
		TaskStartToCloseTimeout: time.Duration
		WaitForCancellation: boolean
		WorkflowIDReusePolicy: __goscript_client.WorkflowIDReusePolicy
		RetryPolicy: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null
		CronSchedule: string
		Memo: globalThis.Map<string, any> | null
		SearchAttributes: globalThis.Map<string, any> | null
		ParentClosePolicy: __goscript_client.ParentClosePolicy
		Bugports: Bugports
	}

	constructor(init?: Partial<{Domain?: string, WorkflowID?: string, TaskList?: string, ExecutionStartToCloseTimeout?: time.Duration, TaskStartToCloseTimeout?: time.Duration, WaitForCancellation?: boolean, WorkflowIDReusePolicy?: __goscript_client.WorkflowIDReusePolicy, RetryPolicy?: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null, CronSchedule?: string, Memo?: globalThis.Map<string, any> | null, SearchAttributes?: globalThis.Map<string, any> | null, ParentClosePolicy?: __goscript_client.ParentClosePolicy, Bugports?: Bugports}>, __goscriptValue?: boolean) {
		this._fields = {
			Domain: init?.Domain ?? ("" as string),
			WorkflowID: init?.WorkflowID ?? ("" as string),
			TaskList: init?.TaskList ?? ("" as string),
			ExecutionStartToCloseTimeout: init?.ExecutionStartToCloseTimeout ?? (0n as time.Duration),
			TaskStartToCloseTimeout: init?.TaskStartToCloseTimeout ?? (0n as time.Duration),
			WaitForCancellation: init?.WaitForCancellation ?? (false as boolean),
			WorkflowIDReusePolicy: init?.WorkflowIDReusePolicy ?? (0 as __goscript_client.WorkflowIDReusePolicy),
			RetryPolicy: init?.RetryPolicy ?? (null! as __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null),
			CronSchedule: init?.CronSchedule ?? ("" as string),
			Memo: init?.Memo ?? (null! as globalThis.Map<string, any> | null),
			SearchAttributes: init?.SearchAttributes ?? (null! as globalThis.Map<string, any> | null),
			ParentClosePolicy: init?.ParentClosePolicy ?? (0 as __goscript_client.ParentClosePolicy),
			Bugports: init?.Bugports ? init.Bugports.clone() : new Bugports(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ChildWorkflowOptions {
		return new ChildWorkflowOptions(this, true)
	}

	public __goscriptAssign(source: ChildWorkflowOptions): void {
		const target = this._fields
		const values = source._fields
		target.Domain = values.Domain
		target.WorkflowID = values.WorkflowID
		target.TaskList = values.TaskList
		target.ExecutionStartToCloseTimeout = values.ExecutionStartToCloseTimeout
		target.TaskStartToCloseTimeout = values.TaskStartToCloseTimeout
		target.WaitForCancellation = values.WaitForCancellation
		target.WorkflowIDReusePolicy = values.WorkflowIDReusePolicy
		target.RetryPolicy = values.RetryPolicy
		target.CronSchedule = values.CronSchedule
		target.Memo = values.Memo
		target.SearchAttributes = values.SearchAttributes
		target.ParentClosePolicy = values.ParentClosePolicy
		$.assignStruct(target.Bugports, values.Bugports)
	}

	static __typeInfo = $.registerStructType(
		"internal.ChildWorkflowOptions",
		() => new ChildWorkflowOptions(),
		() => [],
		ChildWorkflowOptions,
		() => [/* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("WorkflowID", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("TaskList", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("ExecutionStartToCloseTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 48, true), /* @__PURE__ */ $.structField("TaskStartToCloseTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [4], 56, true), /* @__PURE__ */ $.structField("WaitForCancellation", /* @__PURE__ */ $.basicType("bool"), [5], 64, true), /* @__PURE__ */ $.structField("WorkflowIDReusePolicy", /* @__PURE__ */ $.basicType("int", "internal.WorkflowIDReusePolicy"), [6], 72, true), /* @__PURE__ */ $.structField("RetryPolicy", /* @__PURE__ */ $.pointerType("internal.RetryPolicy"), [7], 80, true), /* @__PURE__ */ $.structField("CronSchedule", /* @__PURE__ */ $.basicType("string"), [8], 88, true), /* @__PURE__ */ $.structField("Memo", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }), [9], 104, true), /* @__PURE__ */ $.structField("SearchAttributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }), [10], 112, true), /* @__PURE__ */ $.structField("ParentClosePolicy", /* @__PURE__ */ $.basicType("int", "internal.ParentClosePolicy"), [11], 120, true), /* @__PURE__ */ $.structField("Bugports", "internal.Bugports", [12], 128, true)]
	)
}

export class RegisterWorkflowOptions {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	// Workflow type name is equal to function name instead of fully qualified name including function package.
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

	public _fields: {
		Name: string
		EnableShortName: boolean
		DisableAlreadyRegisteredCheck: boolean
	}

	constructor(init?: Partial<{Name?: string, EnableShortName?: boolean, DisableAlreadyRegisteredCheck?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			EnableShortName: init?.EnableShortName ?? (false as boolean),
			DisableAlreadyRegisteredCheck: init?.DisableAlreadyRegisteredCheck ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RegisterWorkflowOptions {
		return new RegisterWorkflowOptions(this, true)
	}

	public __goscriptAssign(source: RegisterWorkflowOptions): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.EnableShortName = values.EnableShortName
		target.DisableAlreadyRegisteredCheck = values.DisableAlreadyRegisteredCheck
	}

	static __typeInfo = $.registerStructType(
		"internal.RegisterWorkflowOptions",
		() => new RegisterWorkflowOptions(),
		() => [],
		RegisterWorkflowOptions,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("EnableShortName", /* @__PURE__ */ $.basicType("bool"), [1], 16, true), /* @__PURE__ */ $.structField("DisableAlreadyRegisteredCheck", /* @__PURE__ */ $.basicType("bool"), [2], 17, true)]
	)
}

export class needRetryError {
	public get Backoff(): time.Duration {
		return this._fields.Backoff
	}

	public set Backoff(value: time.Duration) {
		this._fields.Backoff = value
	}

	public get Attempt(): number {
		return this._fields.Attempt
	}

	public set Attempt(value: number) {
		this._fields.Attempt = value
	}

	public _fields: {
		Backoff: time.Duration
		Attempt: number
	}

	constructor(init?: Partial<{Backoff?: time.Duration, Attempt?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Backoff: init?.Backoff ?? (0n as time.Duration),
			Attempt: init?.Attempt ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): needRetryError {
		return new needRetryError(this, true)
	}

	public __goscriptAssign(source: needRetryError): void {
		const target = this._fields
		const values = source._fields
		target.Backoff = values.Backoff
		target.Attempt = values.Attempt
	}

	public async Error(): globalThis.Promise<string> {
		const e: needRetryError | $.VarRef<needRetryError> | null = this;
		const e$: needRetryError = e == null ? $.pointerTarget<needRetryError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<needRetryError>(e)
		return fmt.Sprintf("Retry backoff: %v, Attempt: %v", $.namedValueInterfaceValue<any>((e$ as needRetryError).Backoff, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue((e$ as needRetryError).Attempt, "int32"))
	}

	static __typeInfo = $.registerStructType(
		"internal.needRetryError",
		() => new needRetryError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		needRetryError,
		() => [/* @__PURE__ */ $.structField("Backoff", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, true), /* @__PURE__ */ $.structField("Attempt", /* @__PURE__ */ $.basicType("int32"), [1], 8, true)]
	)
}

export class WorkflowInfo {
	public get WorkflowExecution(): WorkflowExecution {
		return this._fields.WorkflowExecution
	}

	public set WorkflowExecution(value: WorkflowExecution) {
		this._fields.WorkflowExecution = value
	}

	// The original runID before resetting. Using it instead of current runID can make workflow decision determinstic after reset
	// revive:disable-next-line this is an public field that is already exposed
	public get OriginalRunId(): string {
		return this._fields.OriginalRunId
	}

	public set OriginalRunId(value: string) {
		this._fields.OriginalRunId = value
	}

	public get WorkflowType(): WorkflowType {
		return this._fields.WorkflowType
	}

	public set WorkflowType(value: WorkflowType) {
		this._fields.WorkflowType = value
	}

	public get TaskListName(): string {
		return this._fields.TaskListName
	}

	public set TaskListName(value: string) {
		this._fields.TaskListName = value
	}

	public get ExecutionStartToCloseTimeoutSeconds(): number {
		return this._fields.ExecutionStartToCloseTimeoutSeconds
	}

	public set ExecutionStartToCloseTimeoutSeconds(value: number) {
		this._fields.ExecutionStartToCloseTimeoutSeconds = value
	}

	public get TaskStartToCloseTimeoutSeconds(): number {
		return this._fields.TaskStartToCloseTimeoutSeconds
	}

	public set TaskStartToCloseTimeoutSeconds(value: number) {
		this._fields.TaskStartToCloseTimeoutSeconds = value
	}

	public get Domain(): string {
		return this._fields.Domain
	}

	public set Domain(value: string) {
		this._fields.Domain = value
	}

	public get Attempt(): number {
		return this._fields.Attempt
	}

	public set Attempt(value: number) {
		this._fields.Attempt = value
	}

	public get lastCompletionResult(): $.Slice<number> {
		return this._fields.lastCompletionResult
	}

	public set lastCompletionResult(value: $.Slice<number>) {
		this._fields.lastCompletionResult = value
	}

	public get CronSchedule(): $.VarRef<string> | null {
		return this._fields.CronSchedule
	}

	public set CronSchedule(value: $.VarRef<string> | null) {
		this._fields.CronSchedule = value
	}

	public get ContinuedExecutionRunID(): $.VarRef<string> | null {
		return this._fields.ContinuedExecutionRunID
	}

	public set ContinuedExecutionRunID(value: $.VarRef<string> | null) {
		this._fields.ContinuedExecutionRunID = value
	}

	public get ParentWorkflowDomain(): $.VarRef<string> | null {
		return this._fields.ParentWorkflowDomain
	}

	public set ParentWorkflowDomain(value: $.VarRef<string> | null) {
		this._fields.ParentWorkflowDomain = value
	}

	public get ParentWorkflowExecution(): WorkflowExecution | $.VarRef<WorkflowExecution> | null {
		return this._fields.ParentWorkflowExecution
	}

	public set ParentWorkflowExecution(value: WorkflowExecution | $.VarRef<WorkflowExecution> | null) {
		this._fields.ParentWorkflowExecution = value
	}

	public get Memo(): s2.Memo | $.VarRef<s2.Memo> | null {
		return this._fields.Memo
	}

	public set Memo(value: s2.Memo | $.VarRef<s2.Memo> | null) {
		this._fields.Memo = value
	}

	public get SearchAttributes(): s2.SearchAttributes | $.VarRef<s2.SearchAttributes> | null {
		return this._fields.SearchAttributes
	}

	public set SearchAttributes(value: s2.SearchAttributes | $.VarRef<s2.SearchAttributes> | null) {
		this._fields.SearchAttributes = value
	}

	public get BinaryChecksum(): $.VarRef<string> | null {
		return this._fields.BinaryChecksum
	}

	public set BinaryChecksum(value: $.VarRef<string> | null) {
		this._fields.BinaryChecksum = value
	}

	public get DecisionStartedEventID(): bigint {
		return this._fields.DecisionStartedEventID
	}

	public set DecisionStartedEventID(value: bigint) {
		this._fields.DecisionStartedEventID = value
	}

	public get RetryPolicy(): s2.RetryPolicy | $.VarRef<s2.RetryPolicy> | null {
		return this._fields.RetryPolicy
	}

	public set RetryPolicy(value: s2.RetryPolicy | $.VarRef<s2.RetryPolicy> | null) {
		this._fields.RetryPolicy = value
	}

	public get TotalHistoryBytes(): bigint {
		return this._fields.TotalHistoryBytes
	}

	public set TotalHistoryBytes(value: bigint) {
		this._fields.TotalHistoryBytes = value
	}

	public get HistoryBytesServer(): bigint {
		return this._fields.HistoryBytesServer
	}

	public set HistoryBytesServer(value: bigint) {
		this._fields.HistoryBytesServer = value
	}

	public get HistoryCount(): bigint {
		return this._fields.HistoryCount
	}

	public set HistoryCount(value: bigint) {
		this._fields.HistoryCount = value
	}

	public _fields: {
		WorkflowExecution: WorkflowExecution
		OriginalRunId: string
		WorkflowType: WorkflowType
		TaskListName: string
		ExecutionStartToCloseTimeoutSeconds: number
		TaskStartToCloseTimeoutSeconds: number
		Domain: string
		Attempt: number
		lastCompletionResult: $.Slice<number>
		CronSchedule: $.VarRef<string> | null
		ContinuedExecutionRunID: $.VarRef<string> | null
		ParentWorkflowDomain: $.VarRef<string> | null
		ParentWorkflowExecution: WorkflowExecution | $.VarRef<WorkflowExecution> | null
		Memo: s2.Memo | $.VarRef<s2.Memo> | null
		SearchAttributes: s2.SearchAttributes | $.VarRef<s2.SearchAttributes> | null
		BinaryChecksum: $.VarRef<string> | null
		DecisionStartedEventID: bigint
		RetryPolicy: s2.RetryPolicy | $.VarRef<s2.RetryPolicy> | null
		TotalHistoryBytes: bigint
		HistoryBytesServer: bigint
		HistoryCount: bigint
	}

	constructor(init?: Partial<{WorkflowExecution?: WorkflowExecution, OriginalRunId?: string, WorkflowType?: WorkflowType, TaskListName?: string, ExecutionStartToCloseTimeoutSeconds?: number, TaskStartToCloseTimeoutSeconds?: number, Domain?: string, Attempt?: number, lastCompletionResult?: $.Slice<number>, CronSchedule?: $.VarRef<string> | null, ContinuedExecutionRunID?: $.VarRef<string> | null, ParentWorkflowDomain?: $.VarRef<string> | null, ParentWorkflowExecution?: WorkflowExecution | $.VarRef<WorkflowExecution> | null, Memo?: s2.Memo | $.VarRef<s2.Memo> | null, SearchAttributes?: s2.SearchAttributes | $.VarRef<s2.SearchAttributes> | null, BinaryChecksum?: $.VarRef<string> | null, DecisionStartedEventID?: bigint, RetryPolicy?: s2.RetryPolicy | $.VarRef<s2.RetryPolicy> | null, TotalHistoryBytes?: bigint, HistoryBytesServer?: bigint, HistoryCount?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			WorkflowExecution: init?.WorkflowExecution ? init.WorkflowExecution.clone() : new WorkflowExecution(undefined, true),
			OriginalRunId: init?.OriginalRunId ?? ("" as string),
			WorkflowType: init?.WorkflowType ? init.WorkflowType.clone() : new WorkflowType(undefined, true),
			TaskListName: init?.TaskListName ?? ("" as string),
			ExecutionStartToCloseTimeoutSeconds: init?.ExecutionStartToCloseTimeoutSeconds ?? (0 as number),
			TaskStartToCloseTimeoutSeconds: init?.TaskStartToCloseTimeoutSeconds ?? (0 as number),
			Domain: init?.Domain ?? ("" as string),
			Attempt: init?.Attempt ?? (0 as number),
			lastCompletionResult: init?.lastCompletionResult ?? (null! as $.Slice<number>),
			CronSchedule: init?.CronSchedule ?? (null! as $.VarRef<string> | null),
			ContinuedExecutionRunID: init?.ContinuedExecutionRunID ?? (null! as $.VarRef<string> | null),
			ParentWorkflowDomain: init?.ParentWorkflowDomain ?? (null! as $.VarRef<string> | null),
			ParentWorkflowExecution: init?.ParentWorkflowExecution ?? (null! as WorkflowExecution | $.VarRef<WorkflowExecution> | null),
			Memo: init?.Memo ?? (null! as s2.Memo | $.VarRef<s2.Memo> | null),
			SearchAttributes: init?.SearchAttributes ?? (null! as s2.SearchAttributes | $.VarRef<s2.SearchAttributes> | null),
			BinaryChecksum: init?.BinaryChecksum ?? (null! as $.VarRef<string> | null),
			DecisionStartedEventID: init?.DecisionStartedEventID ?? (0n as bigint),
			RetryPolicy: init?.RetryPolicy ?? (null! as s2.RetryPolicy | $.VarRef<s2.RetryPolicy> | null),
			TotalHistoryBytes: init?.TotalHistoryBytes ?? (0n as bigint),
			HistoryBytesServer: init?.HistoryBytesServer ?? (0n as bigint),
			HistoryCount: init?.HistoryCount ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkflowInfo {
		return new WorkflowInfo(this, true)
	}

	public __goscriptAssign(source: WorkflowInfo): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.WorkflowExecution, values.WorkflowExecution)
		target.OriginalRunId = values.OriginalRunId
		$.assignStruct(target.WorkflowType, values.WorkflowType)
		target.TaskListName = values.TaskListName
		target.ExecutionStartToCloseTimeoutSeconds = values.ExecutionStartToCloseTimeoutSeconds
		target.TaskStartToCloseTimeoutSeconds = values.TaskStartToCloseTimeoutSeconds
		target.Domain = values.Domain
		target.Attempt = values.Attempt
		target.lastCompletionResult = values.lastCompletionResult
		target.CronSchedule = values.CronSchedule
		target.ContinuedExecutionRunID = values.ContinuedExecutionRunID
		target.ParentWorkflowDomain = values.ParentWorkflowDomain
		target.ParentWorkflowExecution = values.ParentWorkflowExecution
		target.Memo = values.Memo
		target.SearchAttributes = values.SearchAttributes
		target.BinaryChecksum = values.BinaryChecksum
		target.DecisionStartedEventID = values.DecisionStartedEventID
		target.RetryPolicy = values.RetryPolicy
		target.TotalHistoryBytes = values.TotalHistoryBytes
		target.HistoryBytesServer = values.HistoryBytesServer
		target.HistoryCount = values.HistoryCount
	}

	public async GetBinaryChecksum(): globalThis.Promise<string> {
		const wInfo: WorkflowInfo | $.VarRef<WorkflowInfo> | null = this;
		const wInfo$: WorkflowInfo = wInfo == null ? $.pointerTarget<WorkflowInfo>(wInfo) : (wInfo as any).__isVarRef === true ? (wInfo as any).value : (wInfo as any).__goValue === undefined ? (wInfo as any) : $.pointerTarget<WorkflowInfo>(wInfo)
		if ((wInfo$ as WorkflowInfo).BinaryChecksum == null) {
			return __goscript_internal_worker.getBinaryChecksum()
		}
		return $.pointerValue<string>((wInfo$ as WorkflowInfo).BinaryChecksum)
	}

	public GetDecisionStartedEventID(): bigint {
		const wInfo: WorkflowInfo | $.VarRef<WorkflowInfo> | null = this;
		return $.pointerValue<WorkflowInfo>(wInfo).DecisionStartedEventID
	}

	static __typeInfo = $.registerStructType(
		"internal.WorkflowInfo",
		() => new WorkflowInfo(),
		() => [$.methodSignature("GetBinaryChecksum", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetDecisionStartedEventID", [], [/* @__PURE__ */ $.basicType("int64")], true)],
		WorkflowInfo,
		() => [/* @__PURE__ */ $.structField("WorkflowExecution", "internal.WorkflowExecution", [0], 0, true), /* @__PURE__ */ $.structField("OriginalRunId", /* @__PURE__ */ $.basicType("string"), [1], 32, true), /* @__PURE__ */ $.structField("WorkflowType", "internal.WorkflowType", [2], 48, true), /* @__PURE__ */ $.structField("TaskListName", /* @__PURE__ */ $.basicType("string"), [3], 80, true), /* @__PURE__ */ $.structField("ExecutionStartToCloseTimeoutSeconds", /* @__PURE__ */ $.basicType("int32"), [4], 96, true), /* @__PURE__ */ $.structField("TaskStartToCloseTimeoutSeconds", /* @__PURE__ */ $.basicType("int32"), [5], 100, true), /* @__PURE__ */ $.structField("Domain", /* @__PURE__ */ $.basicType("string"), [6], 104, true), /* @__PURE__ */ $.structField("Attempt", /* @__PURE__ */ $.basicType("int32"), [7], 120, true), /* @__PURE__ */ $.structField("lastCompletionResult", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [8], 128, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("CronSchedule", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [9], 152, true), /* @__PURE__ */ $.structField("ContinuedExecutionRunID", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [10], 160, true), /* @__PURE__ */ $.structField("ParentWorkflowDomain", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [11], 168, true), /* @__PURE__ */ $.structField("ParentWorkflowExecution", /* @__PURE__ */ $.pointerType("internal.WorkflowExecution"), [12], 176, true), /* @__PURE__ */ $.structField("Memo", /* @__PURE__ */ $.pointerType("shared.Memo"), [13], 184, true), /* @__PURE__ */ $.structField("SearchAttributes", /* @__PURE__ */ $.pointerType("shared.SearchAttributes"), [14], 192, true), /* @__PURE__ */ $.structField("BinaryChecksum", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")), [15], 200, true), /* @__PURE__ */ $.structField("DecisionStartedEventID", /* @__PURE__ */ $.basicType("int64"), [16], 208, true), /* @__PURE__ */ $.structField("RetryPolicy", /* @__PURE__ */ $.pointerType("shared.RetryPolicy"), [17], 216, true), /* @__PURE__ */ $.structField("TotalHistoryBytes", /* @__PURE__ */ $.basicType("int64"), [18], 224, true), /* @__PURE__ */ $.structField("HistoryBytesServer", /* @__PURE__ */ $.basicType("int64"), [19], 232, true), /* @__PURE__ */ $.structField("HistoryCount", /* @__PURE__ */ $.basicType("int64"), [20], 240, true)]
	)
}

export class getVersionConfig {
	// CustomVersion is used to force GetVersion to return a specific version
	// instead of maxSupported version. Set up via ExecuteWithVersion option.
	public get CustomVersion(): $.VarRef<Version> | null {
		return this._fields.CustomVersion
	}

	public set CustomVersion(value: $.VarRef<Version> | null) {
		this._fields.CustomVersion = value
	}

	// UseMinVersion is used to force GetVersion to return minSupported version
	// instead of maxSupported version. Set up via ExecuteWithMinVersion option.
	public get UseMinVersion(): boolean {
		return this._fields.UseMinVersion
	}

	public set UseMinVersion(value: boolean) {
		this._fields.UseMinVersion = value
	}

	public _fields: {
		CustomVersion: $.VarRef<Version> | null
		UseMinVersion: boolean
	}

	constructor(init?: Partial<{CustomVersion?: $.VarRef<Version> | null, UseMinVersion?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			CustomVersion: init?.CustomVersion ?? (null! as $.VarRef<Version> | null),
			UseMinVersion: init?.UseMinVersion ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): getVersionConfig {
		return new getVersionConfig(this, true)
	}

	public __goscriptAssign(source: getVersionConfig): void {
		const target = this._fields
		const values = source._fields
		target.CustomVersion = values.CustomVersion
		target.UseMinVersion = values.UseMinVersion
	}

	static __typeInfo = $.registerStructType(
		"internal.getVersionConfig",
		() => new getVersionConfig(),
		() => [],
		getVersionConfig,
		() => [/* @__PURE__ */ $.structField("CustomVersion", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int", "internal.Version")), [0], 0, true), /* @__PURE__ */ $.structField("UseMinVersion", /* @__PURE__ */ $.basicType("bool"), [1], 8, true)]
	)
}

export class useMinVersionOption {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): useMinVersionOption {
		return new useMinVersionOption(this, true)
	}

	public __goscriptAssign(source: useMinVersionOption): void {
	}

	public apply(config: getVersionConfig | $.VarRef<getVersionConfig> | null): void {
		$.pointerValue<getVersionConfig>(config).UseMinVersion = true
	}

	static __typeInfo = $.registerStructType(
		"internal.useMinVersionOption",
		() => new useMinVersionOption(),
		() => [$.methodSignature("apply", [["config", /* @__PURE__ */ $.pointerType("internal.getVersionConfig")]])],
		useMinVersionOption,
		() => []
	)
}

export const DefaultVersion: Version = -1

export const CadenceChangeVersion: string = "CadenceChangeVersion"

export let errDomainNotSet: $.GoError = errors.New("domain is not set")

export function __goscript_set_errDomainNotSet(__goscriptValue: $.GoError): void {
	errDomainNotSet = __goscriptValue
}

export let errTaskListNotSet: $.GoError = errors.New("task list is not set")

export function __goscript_set_errTaskListNotSet(__goscriptValue: $.GoError): void {
	errTaskListNotSet = __goscriptValue
}

export let errWorkflowIDNotSet: $.GoError = errors.New("workflowId is not set")

export function __goscript_set_errWorkflowIDNotSet(__goscriptValue: $.GoError): void {
	errWorkflowIDNotSet = __goscriptValue
}

export let errLocalActivityParamsBadRequest: $.GoError = errors.New("missing local activity parameters through context, check LocalActivityOptions")

export function __goscript_set_errLocalActivityParamsBadRequest(__goscriptValue: $.GoError): void {
	errLocalActivityParamsBadRequest = __goscriptValue
}

export let errActivityParamsBadRequest: $.GoError = errors.New("missing activity parameters through context, check ActivityOptions")

export function __goscript_set_errActivityParamsBadRequest(__goscriptValue: $.GoError): void {
	errActivityParamsBadRequest = __goscriptValue
}

export let errWorkflowOptionBadRequest: $.GoError = errors.New("missing workflow options through context, check WorkflowOptions")

export function __goscript_set_errWorkflowOptionBadRequest(__goscriptValue: $.GoError): void {
	errWorkflowOptionBadRequest = __goscriptValue
}

export let errSearchAttributesNotSet: $.GoError = errors.New("search attributes is empty")

export function __goscript_set_errSearchAttributesNotSet(__goscriptValue: $.GoError): void {
	errSearchAttributesNotSet = __goscriptValue
}

export async function RegisterWorkflow(workflowFunc: any): globalThis.Promise<void> {
	await RegisterWorkflowWithOptions(workflowFunc, new RegisterWorkflowOptions(undefined, true))
}

export async function RegisterWorkflowWithOptions(workflowFunc: any, opts: RegisterWorkflowOptions): globalThis.Promise<void> {
	let __goscriptShadow0: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null = await __goscript_registry.getGlobalRegistry()
	await (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? ((__goscriptShadow0 as any) as __goscript_registry.registry).RegisterWorkflowWithOptions(workflowFunc, opts) : __goscript_registry.registry.prototype.RegisterWorkflowWithOptions.call(__goscriptShadow0, workflowFunc, opts))
}

export async function GetRegisteredWorkflowTypes(): globalThis.Promise<$.Slice<string>> {
	let __goscriptShadow1: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null = await __goscript_registry.getGlobalRegistry()
	return (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? ((__goscriptShadow1 as any) as __goscript_registry.registry).GetRegisteredWorkflowTypes() : __goscript_registry.registry.prototype.GetRegisteredWorkflowTypes.call(__goscriptShadow1))
}

export async function Await(ctx: __goscript_context.Context | null, condition: (() => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<$.GoError> {
	using __defer = new $.DisposableStack()
	let state: __goscript_internal_workflow.coroutineState | $.VarRef<__goscript_internal_workflow.coroutineState> | null = await __goscript_internal_workflow.getState(ctx)
	__defer.defer(() => { (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_internal_workflow.coroutineState).unblocked() : __goscript_internal_workflow.coroutineState.prototype.unblocked.call(state)) })

	while (!(__goscriptAwait = condition!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
		let doneCh = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		// TODO: Consider always returning a channel
		if (doneCh != null) {
			{
				let [, more] = await (doneCh !== null && (doneCh as any).__isVarRef !== true && (doneCh as any).__goValue === undefined ? (doneCh as Exclude<Channel, null>) : $.pointerValue<Exclude<Channel, null>>(doneCh)).ReceiveAsyncWithMoreFlag(null)
				if (!more) {
					return $.interfaceValue<$.GoError>(__goscript_error.NewCanceledError($.arrayToSlice<any>(["Await context cancelled"])), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError"))
				}
			}
		}
		await (state !== null && (state as any).__isVarRef !== true && (state as any).__goValue === undefined ? ((state as any) as __goscript_internal_workflow.coroutineState)["yield"]("Await") : __goscript_internal_workflow.coroutineState.prototype.yield.call(state, "Await"))
	}
	return null
}

export async function NewChannel(ctx: __goscript_context.Context | null): globalThis.Promise<Channel | null> {
	let state: __goscript_internal_workflow.coroutineState | $.VarRef<__goscript_internal_workflow.coroutineState> | null = await __goscript_internal_workflow.getState(ctx)
	let state$: __goscript_internal_workflow.coroutineState = state == null ? $.pointerTarget<__goscript_internal_workflow.coroutineState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_internal_workflow.coroutineState>(state)
	$.pointerValue<__goscript_internal_workflow.dispatcherImpl>((state$ as __goscript_internal_workflow.coroutineState).dispatcher).channelSequence++
	return NewNamedChannel(ctx, await fmt.Sprintf("chan-%v", $.basicInterfaceValue($.pointerValue<__goscript_internal_workflow.dispatcherImpl>((state$ as __goscript_internal_workflow.coroutineState).dispatcher).channelSequence, "int")))
}

export async function NewNamedChannel(ctx: __goscript_context.Context | null, name: string): globalThis.Promise<Channel | null> {
	let env = await __goscript_internal_workflow.getWorkflowEnvironment(ctx)
	return $.interfaceValue<Channel | null>((await (async () => { const __goscriptLiteralField0 = await __goscript_internal_workflow.getDataConverterFromWorkflowContext(ctx); return new __goscript_internal_workflow.channelImpl({name: name, dataConverter: __goscriptLiteralField0, env: env}) })()), "*internal.channelImpl", /* @__PURE__ */ $.pointerType("internal.channelImpl"))
}

export async function NewBufferedChannel(ctx: __goscript_context.Context | null, size: number): globalThis.Promise<Channel | null> {
	let env = await __goscript_internal_workflow.getWorkflowEnvironment(ctx)
	return $.interfaceValue<Channel | null>((await (async () => { const __goscriptLiteralField1 = await __goscript_internal_workflow.getDataConverterFromWorkflowContext(ctx); return new __goscript_internal_workflow.channelImpl({size: size, dataConverter: __goscriptLiteralField1, env: env}) })()), "*internal.channelImpl", /* @__PURE__ */ $.pointerType("internal.channelImpl"))
}

export async function NewNamedBufferedChannel(ctx: __goscript_context.Context | null, name: string, size: number): globalThis.Promise<Channel | null> {
	let env = await __goscript_internal_workflow.getWorkflowEnvironment(ctx)
	return $.interfaceValue<Channel | null>((await (async () => { const __goscriptLiteralField2 = await __goscript_internal_workflow.getDataConverterFromWorkflowContext(ctx); return new __goscript_internal_workflow.channelImpl({name: name, size: size, dataConverter: __goscriptLiteralField2, env: env}) })()), "*internal.channelImpl", /* @__PURE__ */ $.pointerType("internal.channelImpl"))
}

export async function NewSelector(ctx: __goscript_context.Context | null): globalThis.Promise<Selector | null> {
	let state: __goscript_internal_workflow.coroutineState | $.VarRef<__goscript_internal_workflow.coroutineState> | null = await __goscript_internal_workflow.getState(ctx)
	let state$: __goscript_internal_workflow.coroutineState = state == null ? $.pointerTarget<__goscript_internal_workflow.coroutineState>(state) : (state as any).__isVarRef === true ? (state as any).value : (state as any).__goValue === undefined ? (state as any) : $.pointerTarget<__goscript_internal_workflow.coroutineState>(state)
	$.pointerValue<__goscript_internal_workflow.dispatcherImpl>((state$ as __goscript_internal_workflow.coroutineState).dispatcher).selectorSequence++
	return NewNamedSelector(ctx, await fmt.Sprintf("selector-%v", $.basicInterfaceValue($.pointerValue<__goscript_internal_workflow.dispatcherImpl>((state$ as __goscript_internal_workflow.coroutineState).dispatcher).selectorSequence, "int")))
}

export function NewNamedSelector(ctx: __goscript_context.Context | null, name: string): Selector | null {
	return $.interfaceValue<Selector | null>(new __goscript_internal_workflow.selectorImpl({name: name}), "*internal.selectorImpl", /* @__PURE__ */ $.pointerType("internal.selectorImpl"))
}

export async function NewWaitGroup(ctx: __goscript_context.Context | null): globalThis.Promise<WaitGroup | null> {
	let [f, __goscriptShadow2] = await NewFuture(ctx)
	return $.interfaceValue<WaitGroup | null>(new __goscript_internal_workflow.waitGroupImpl({future: f, settable: __goscriptShadow2}), "*internal.waitGroupImpl", /* @__PURE__ */ $.pointerType("internal.waitGroupImpl"))
}

export async function Go(ctx: __goscript_context.Context | null, f: ((ctx: __goscript_context.Context | null) => void) | null): globalThis.Promise<void> {
	let state: __goscript_internal_workflow.coroutineState | $.VarRef<__goscript_internal_workflow.coroutineState> | null = await __goscript_internal_workflow.getState(ctx)
	await __goscript_internal_workflow.dispatcherImpl.prototype.newCoroutine.call($.pointerValue<__goscript_internal_workflow.coroutineState>(state).dispatcher, ctx, f)
}

export async function GoNamed(ctx: __goscript_context.Context | null, name: string, f: ((ctx: __goscript_context.Context | null) => void) | null): globalThis.Promise<void> {
	let state: __goscript_internal_workflow.coroutineState | $.VarRef<__goscript_internal_workflow.coroutineState> | null = await __goscript_internal_workflow.getState(ctx)
	await __goscript_internal_workflow.dispatcherImpl.prototype.newNamedCoroutine.call($.pointerValue<__goscript_internal_workflow.coroutineState>(state).dispatcher, ctx, name, f)
}

export async function NewFuture(ctx: __goscript_context.Context | null): globalThis.Promise<[Future | null, Settable | null]> {
	let impl: __goscript_internal_workflow.futureImpl | $.VarRef<__goscript_internal_workflow.futureImpl> | null = new __goscript_internal_workflow.futureImpl({channel: $.mustTypeAssert<__goscript_internal_workflow.channelImpl | $.VarRef<__goscript_internal_workflow.channelImpl> | null>(await NewChannel(ctx), /* @__PURE__ */ $.pointerType("internal.channelImpl"))})
	return [$.interfaceValue<Future | null>(impl, "*internal.futureImpl", /* @__PURE__ */ $.pointerType("internal.futureImpl")), $.interfaceValue<Settable | null>(impl, "*internal.futureImpl", /* @__PURE__ */ $.pointerType("internal.futureImpl"))]
}

export async function ExecuteActivity(ctx: __goscript_context.Context | null, activity: any, args: $.Slice<any>): globalThis.Promise<Future | null> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	let __goscriptShadow3: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null = await __goscript_internal_workflow.getRegistryFromWorkflowContext(ctx)
	let activityType = await __goscript_internal_worker.getActivityFunctionName(__goscriptShadow3, activity)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).ExecuteActivity(ctx, activityType, args)
}

export async function ExecuteLocalActivity(ctx: __goscript_context.Context | null, activity: any, args: $.Slice<any>): globalThis.Promise<Future | null> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	let env = await __goscript_internal_workflow.getWorkflowEnvironment(ctx)
	let activityType = await __goscript_internal_worker.getActivityFunctionName(((__goscriptAwait = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? (env as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(env)).GetRegistry(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null), activity)
	ctx = __goscript_context.WithValue(ctx, "localActivityFn", activity)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).ExecuteLocalActivity(ctx, activityType, args)
}

export async function ExecuteChildWorkflow(ctx: __goscript_context.Context | null, childWorkflow: any, args: $.Slice<any>): globalThis.Promise<ChildWorkflowFuture | null> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	let env = await __goscript_internal_workflow.getWorkflowEnvironment(ctx)
	let workflowType = await __goscript_internal_worker.getWorkflowFunctionName(((__goscriptAwait = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? (env as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(env)).GetRegistry(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null), childWorkflow)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).ExecuteChildWorkflow(ctx, workflowType, args)
}

export async function getWorkflowHeader(ctx: __goscript_context.Context | null, ctxProps: $.Slice<__goscript_headers.ContextPropagator | null>): globalThis.Promise<s2.Header | $.VarRef<s2.Header> | null> {
	let header: s2.Header | $.VarRef<s2.Header> | null = new s2.Header({Fields: $.makeMap<string, $.Slice<number>>()})
	let writer = __goscript_headers.NewHeaderWriter(header)
	for (let __goscriptRangeTarget0 = ctxProps, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let ctxProp = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_headers.ContextPropagator | null)
		void (__goscriptAwait = (ctxProp !== null && (ctxProp as any).__isVarRef !== true && (ctxProp as any).__goValue === undefined ? (ctxProp as Exclude<__goscript_headers.ContextPropagator, null>) : $.pointerValue<Exclude<__goscript_headers.ContextPropagator, null>>(ctxProp)).InjectFromWorkflow(ctx, writer), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return header
}

export async function GetWorkflowInfo(ctx: __goscript_context.Context | null): globalThis.Promise<WorkflowInfo | $.VarRef<WorkflowInfo> | null> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).GetWorkflowInfo(ctx)
}

export async function GetLogger(ctx: __goscript_context.Context | null): globalThis.Promise<zap.Logger | $.VarRef<zap.Logger> | null> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).GetLogger(ctx)
}

export async function GetMetricsScope(ctx: __goscript_context.Context | null): globalThis.Promise<tally.Scope | null> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).GetMetricsScope(ctx)
}

export async function GetTotalEstimatedHistoryBytes(ctx: __goscript_context.Context | null): globalThis.Promise<bigint> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return $.pointerValue<WorkflowInfo>(((__goscriptAwait = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).GetWorkflowInfo(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as WorkflowInfo | $.VarRef<WorkflowInfo> | null)).TotalHistoryBytes
}

export async function GetHistoryCount(ctx: __goscript_context.Context | null): globalThis.Promise<bigint> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return $.pointerValue<WorkflowInfo>(((__goscriptAwait = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).GetWorkflowInfo(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as WorkflowInfo | $.VarRef<WorkflowInfo> | null)).HistoryCount
}

export async function Now(ctx: __goscript_context.Context | null): globalThis.Promise<time.Time> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(((__goscriptAwait = (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).Now(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).UTC()))
}

export async function NewTimer(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<Future | null> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).NewTimer(ctx, d)
}

export async function Sleep(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).Sleep(ctx, d)
}

export async function RequestCancelExternalWorkflow(ctx: __goscript_context.Context | null, workflowID: string, runID: string): globalThis.Promise<Future | null> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).RequestCancelExternalWorkflow(ctx, workflowID, runID)
}

export async function SignalExternalWorkflow(ctx: __goscript_context.Context | null, workflowID: string, runID: string, signalName: string, arg: any): globalThis.Promise<Future | null> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).SignalExternalWorkflow(ctx, workflowID, runID, signalName, arg)
}

export async function signalExternalWorkflow(ctx: __goscript_context.Context | null, workflowID: string, runID: string, signalName: string, arg: any, childWorkflowOnly: boolean): globalThis.Promise<Future | null> {
	let env = await __goscript_internal_workflow.getWorkflowEnvironment(ctx)
	let ctx1 = await __goscript_internal_workflow.setWorkflowEnvOptionsIfNotExist(ctx)
	let options: __goscript_internal_workflow.workflowOptions | $.VarRef<__goscript_internal_workflow.workflowOptions> | null = await __goscript_internal_workflow.getWorkflowEnvOptions(ctx1)
	let options$: __goscript_internal_workflow.workflowOptions = options == null ? $.pointerTarget<__goscript_internal_workflow.workflowOptions>(options) : (options as any).__isVarRef === true ? (options as any).value : (options as any).__goValue === undefined ? (options as any) : $.pointerTarget<__goscript_internal_workflow.workflowOptions>(options)
	let [future, settable] = await NewFuture(ctx1)

	if (((options$ as __goscript_internal_workflow.workflowOptions).domain == null) || ($.stringEqual($.pointerValue<string>((options$ as __goscript_internal_workflow.workflowOptions).domain), ""))) {
		void (__goscriptAwait = (settable !== null && (settable as any).__isVarRef !== true && (settable as any).__goValue === undefined ? (settable as Exclude<Settable, null>) : $.pointerValue<Exclude<Settable, null>>(settable)).Set(null, errDomainNotSet), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return future
	}

	if ($.stringEqual(workflowID, "")) {
		void (__goscriptAwait = (settable !== null && (settable as any).__isVarRef !== true && (settable as any).__goValue === undefined ? (settable as Exclude<Settable, null>) : $.pointerValue<Exclude<Settable, null>>(settable)).Set(null, errWorkflowIDNotSet), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return future
	}

	let __goscriptTuple0: any = await __goscript_internal_worker.encodeArg((options$ as __goscript_internal_workflow.workflowOptions).dataConverter, arg)
	let input: $.Slice<number> = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		void (__goscriptAwait = (settable !== null && (settable as any).__isVarRef !== true && (settable as any).__goValue === undefined ? (settable as Exclude<Settable, null>) : $.pointerValue<Exclude<Settable, null>>(settable)).Set(null, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return future
	}

	let resultCallback: ((result: $.Slice<number>, err: $.GoError) => void) | null = $.functionValue(async (result: $.Slice<number>, err: $.GoError): globalThis.Promise<void> => {
		void (__goscriptAwait = (settable !== null && (settable as any).__isVarRef !== true && (settable as any).__goValue === undefined ? (settable as Exclude<Settable, null>) : $.pointerValue<Exclude<Settable, null>>(settable)).Set($.interfaceValue(result, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo))
	void (__goscriptAwait = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? (env as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(env)).SignalExternalWorkflow($.pointerValue<string>((options$ as __goscript_internal_workflow.workflowOptions).domain), workflowID, runID, signalName, input, arg, childWorkflowOnly, resultCallback), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	return future
}

export async function UpsertSearchAttributes(ctx: __goscript_context.Context | null, attributes: globalThis.Map<string, any> | null): globalThis.Promise<$.GoError> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).UpsertSearchAttributes(ctx, attributes)
}

export async function WithChildWorkflowOptions(ctx: __goscript_context.Context | null, cwo: ChildWorkflowOptions): globalThis.Promise<__goscript_context.Context | null> {
	let ctx1 = await __goscript_internal_workflow.setWorkflowEnvOptionsIfNotExist(ctx)
	let wfOptions: __goscript_internal_workflow.workflowOptions | $.VarRef<__goscript_internal_workflow.workflowOptions> | null = await __goscript_internal_workflow.getWorkflowEnvOptions(ctx1)
	let wfOptions$: __goscript_internal_workflow.workflowOptions = wfOptions == null ? $.pointerTarget<__goscript_internal_workflow.workflowOptions>(wfOptions) : (wfOptions as any).__isVarRef === true ? (wfOptions as any).value : (wfOptions as any).__goValue === undefined ? (wfOptions as any) : $.pointerTarget<__goscript_internal_workflow.workflowOptions>(wfOptions);
	;(wfOptions$ as __goscript_internal_workflow.workflowOptions).domain = common.StringPtr(cwo.Domain);
	;(wfOptions$ as __goscript_internal_workflow.workflowOptions).taskListName = common.StringPtr(cwo.TaskList);
	;(wfOptions$ as __goscript_internal_workflow.workflowOptions).workflowID = cwo.WorkflowID;
	;(wfOptions$ as __goscript_internal_workflow.workflowOptions).executionStartToCloseTimeoutSeconds = common.Int32Ptr(common.Int32Ceil(time.Duration_Seconds(cwo.ExecutionStartToCloseTimeout)));
	;(wfOptions$ as __goscript_internal_workflow.workflowOptions).taskStartToCloseTimeoutSeconds = common.Int32Ptr(common.Int32Ceil(time.Duration_Seconds(cwo.TaskStartToCloseTimeout)));
	;(wfOptions$ as __goscript_internal_workflow.workflowOptions).waitForCancellation = cwo.WaitForCancellation;
	;(wfOptions$ as __goscript_internal_workflow.workflowOptions).workflowIDReusePolicy = cwo.WorkflowIDReusePolicy;
	;(wfOptions$ as __goscript_internal_workflow.workflowOptions).retryPolicy = __goscript_convert.convertRetryPolicy(cwo.RetryPolicy)
	if (!$.stringEqual(cwo.CronSchedule, "")) {
		;(wfOptions$ as __goscript_internal_workflow.workflowOptions).cronSchedule = cwo.CronSchedule
	}
	;(wfOptions$ as __goscript_internal_workflow.workflowOptions).memo = cwo.Memo;
	;(wfOptions$ as __goscript_internal_workflow.workflowOptions).searchAttributes = cwo.SearchAttributes;
	;(wfOptions$ as __goscript_internal_workflow.workflowOptions).parentClosePolicy = cwo.ParentClosePolicy
	$.assignStruct((wfOptions$ as __goscript_internal_workflow.workflowOptions).bugports, cwo.Bugports)

	return ctx1
}

export async function WithWorkflowDomain(ctx: __goscript_context.Context | null, name: string): globalThis.Promise<__goscript_context.Context | null> {
	let ctx1 = await __goscript_internal_workflow.setWorkflowEnvOptionsIfNotExist(ctx)
	$.pointerValue<__goscript_internal_workflow.workflowOptions>(await __goscript_internal_workflow.getWorkflowEnvOptions(ctx1)).domain = common.StringPtr(name)
	return ctx1
}

export async function WithWorkflowTaskList(ctx: __goscript_context.Context | null, name: string): globalThis.Promise<__goscript_context.Context | null> {
	let ctx1 = await __goscript_internal_workflow.setWorkflowEnvOptionsIfNotExist(ctx)
	$.pointerValue<__goscript_internal_workflow.workflowOptions>(await __goscript_internal_workflow.getWorkflowEnvOptions(ctx1)).taskListName = common.StringPtr(name)
	return ctx1
}

export async function WithCronSchedule(ctx: __goscript_context.Context | null, cronSchedule: string): globalThis.Promise<__goscript_context.Context | null> {
	let ctx1 = await __goscript_internal_workflow.setWorkflowEnvOptionsIfNotExist(ctx)
	$.pointerValue<__goscript_internal_workflow.workflowOptions>(await __goscript_internal_workflow.getWorkflowEnvOptions(ctx1)).cronSchedule = cronSchedule
	return ctx1
}

export async function GetWorkflowTaskList(ctx: __goscript_context.Context | null): globalThis.Promise<$.VarRef<string> | null> {
	let wo: __goscript_internal_workflow.workflowOptions | $.VarRef<__goscript_internal_workflow.workflowOptions> | null = await __goscript_internal_workflow.getWorkflowEnvOptions(ctx)
	let wo$: __goscript_internal_workflow.workflowOptions = wo == null ? $.pointerTarget<__goscript_internal_workflow.workflowOptions>(wo) : (wo as any).__isVarRef === true ? (wo as any).value : (wo as any).__goValue === undefined ? (wo as any) : $.pointerTarget<__goscript_internal_workflow.workflowOptions>(wo)
	if ((wo == null) || ((wo$ as __goscript_internal_workflow.workflowOptions).taskListName == null)) {
		return null
	}
	let tl = $.varRef($.pointerValue<string>((wo$ as __goscript_internal_workflow.workflowOptions).taskListName))
	return tl
}

export async function WithWorkflowID(ctx: __goscript_context.Context | null, workflowID: string): globalThis.Promise<__goscript_context.Context | null> {
	let ctx1 = await __goscript_internal_workflow.setWorkflowEnvOptionsIfNotExist(ctx)
	$.pointerValue<__goscript_internal_workflow.workflowOptions>(await __goscript_internal_workflow.getWorkflowEnvOptions(ctx1)).workflowID = workflowID
	return ctx1
}

export async function WithExecutionStartToCloseTimeout(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<__goscript_context.Context | null> {
	let ctx1 = await __goscript_internal_workflow.setWorkflowEnvOptionsIfNotExist(ctx)
	$.pointerValue<__goscript_internal_workflow.workflowOptions>(await __goscript_internal_workflow.getWorkflowEnvOptions(ctx1)).executionStartToCloseTimeoutSeconds = common.Int32Ptr(common.Int32Ceil(time.Duration_Seconds(d)))
	return ctx1
}

export async function WithWorkflowTaskStartToCloseTimeout(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<__goscript_context.Context | null> {
	let ctx1 = await __goscript_internal_workflow.setWorkflowEnvOptionsIfNotExist(ctx)
	$.pointerValue<__goscript_internal_workflow.workflowOptions>(await __goscript_internal_workflow.getWorkflowEnvOptions(ctx1)).taskStartToCloseTimeoutSeconds = common.Int32Ptr(common.Int32Ceil(time.Duration_Seconds(d)))
	return ctx1
}

export async function WithDataConverter(ctx: __goscript_context.Context | null, dc: __goscript_encoded.DataConverter | null): globalThis.Promise<__goscript_context.Context | null> {
	if (dc == null) {
		$.panic("data converter is nil for WithDataConverter")
	}
	let ctx1 = await __goscript_internal_workflow.setWorkflowEnvOptionsIfNotExist(ctx)
	$.pointerValue<__goscript_internal_workflow.workflowOptions>(await __goscript_internal_workflow.getWorkflowEnvOptions(ctx1)).dataConverter = dc
	return ctx1
}

export async function withContextPropagators(ctx: __goscript_context.Context | null, contextPropagators: $.Slice<__goscript_headers.ContextPropagator | null>): globalThis.Promise<__goscript_context.Context | null> {
	let ctx1 = await __goscript_internal_workflow.setWorkflowEnvOptionsIfNotExist(ctx)
	$.pointerValue<__goscript_internal_workflow.workflowOptions>(await __goscript_internal_workflow.getWorkflowEnvOptions(ctx1)).contextPropagators = contextPropagators
	return ctx1
}

export async function GetSignalChannel(ctx: __goscript_context.Context | null, signalName: string): globalThis.Promise<Channel | null> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).GetSignalChannel(ctx, signalName)
}

export function newEncodedValue(value: $.Slice<number>, dc: __goscript_encoded.DataConverter | null): __goscript_encoded.Value | null {
	if (dc == null) {
		dc = __goscript_encoded.getDefaultDataConverter()
	}
	return $.interfaceValue<__goscript_encoded.Value | null>(new EncodedValue({value: value, dataConverter: dc}), "*internal.EncodedValue", /* @__PURE__ */ $.pointerType("internal.EncodedValue"))
}

export async function SideEffect(ctx: __goscript_context.Context | null, f: ((ctx: __goscript_context.Context | null) => any | globalThis.Promise<any>) | null): globalThis.Promise<__goscript_encoded.Value | null> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).SideEffect(ctx, f)
}

export async function MutableSideEffect(ctx: __goscript_context.Context | null, id: string, f: ((ctx: __goscript_context.Context | null) => any | globalThis.Promise<any>) | null, equals: ((a: any, b: any) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<__goscript_encoded.Value | null> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).MutableSideEffect(ctx, id, f, equals)
}

export function customVersionOption_apply(c: customVersionOption, config: getVersionConfig | $.VarRef<getVersionConfig> | null): void {
	let version = $.varRef($.int(c))
	$.pointerValue<getVersionConfig>(config).CustomVersion = version
}

export function ExecuteWithVersion(version: Version): GetVersionOption | null {
	return $.namedValueInterfaceValue<GetVersionOption | null>($.int(version), "internal.customVersionOption", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())
}

export function ExecuteWithMinVersion(): GetVersionOption | null {
	return $.interfaceValue<GetVersionOption | null>(new useMinVersionOption(undefined, true), "internal.useMinVersionOption", "internal.useMinVersionOption")
}

export async function GetVersion(ctx: __goscript_context.Context | null, changeID: string, minSupported: Version, maxSupported: Version, opts: $.Slice<GetVersionOption | null>): globalThis.Promise<Version> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).GetVersion(ctx, changeID, minSupported, maxSupported, opts)
}

export async function SetQueryHandler(ctx: __goscript_context.Context | null, queryType: string, handler: any): globalThis.Promise<$.GoError> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).SetQueryHandler(ctx, queryType, handler)
}

export async function IsReplaying(ctx: __goscript_context.Context | null): globalThis.Promise<boolean> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).IsReplaying(ctx)
}

export async function HasLastCompletionResult(ctx: __goscript_context.Context | null): globalThis.Promise<boolean> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).HasLastCompletionResult(ctx)
}

export async function GetLastCompletionResult(ctx: __goscript_context.Context | null, d: $.Slice<any>): globalThis.Promise<$.GoError> {
	let i = await __goscript_internal_workflow.getWorkflowInterceptor(ctx)
	return (i !== null && (i as any).__isVarRef !== true && (i as any).__goValue === undefined ? (i as Exclude<__goscript_interceptors.WorkflowInterceptor, null>) : $.pointerValue<Exclude<__goscript_interceptors.WorkflowInterceptor, null>>(i)).GetLastCompletionResult(ctx, d)
}

export async function WithActivityOptions(ctx: __goscript_context.Context | null, options: __goscript_activity.ActivityOptions): globalThis.Promise<__goscript_context.Context | null> {
	let ctx1 = await __goscript_internal_activity.setActivityParametersIfNotExist(ctx)
	let eap: __goscript_internal_activity.activityOptions | $.VarRef<__goscript_internal_activity.activityOptions> | null = await __goscript_internal_activity.getActivityOptions(ctx1)
	let eap$: __goscript_internal_activity.activityOptions = eap == null ? $.pointerTarget<__goscript_internal_activity.activityOptions>(eap) : (eap as any).__isVarRef === true ? (eap as any).value : (eap as any).__goValue === undefined ? (eap as any) : $.pointerTarget<__goscript_internal_activity.activityOptions>(eap);

	;(eap$ as __goscript_internal_activity.activityOptions).TaskListName = options.TaskList;
	;(eap$ as __goscript_internal_activity.activityOptions).ScheduleToCloseTimeoutSeconds = common.Int32Ceil(time.Duration_Seconds(options.ScheduleToCloseTimeout));
	;(eap$ as __goscript_internal_activity.activityOptions).StartToCloseTimeoutSeconds = common.Int32Ceil(time.Duration_Seconds(options.StartToCloseTimeout));
	;(eap$ as __goscript_internal_activity.activityOptions).ScheduleToStartTimeoutSeconds = common.Int32Ceil(time.Duration_Seconds(options.ScheduleToStartTimeout));
	;(eap$ as __goscript_internal_activity.activityOptions).HeartbeatTimeoutSeconds = common.Int32Ceil(time.Duration_Seconds(options.HeartbeatTimeout));
	;(eap$ as __goscript_internal_activity.activityOptions).WaitForCancellation = options.WaitForCancellation;
	;(eap$ as __goscript_internal_activity.activityOptions).ActivityID = common.StringPtr(options.ActivityID);
	;(eap$ as __goscript_internal_activity.activityOptions).RetryPolicy = __goscript_convert.convertRetryPolicy(options.RetryPolicy)
	return ctx1
}

export async function WithLocalActivityOptions(ctx: __goscript_context.Context | null, options: __goscript_activity.LocalActivityOptions): globalThis.Promise<__goscript_context.Context | null> {
	let ctx1 = await __goscript_internal_activity.setLocalActivityParametersIfNotExist(ctx)
	let opts: __goscript_internal_activity.localActivityOptions | $.VarRef<__goscript_internal_activity.localActivityOptions> | null = await __goscript_internal_activity.getLocalActivityOptions(ctx1)
	let opts$: __goscript_internal_activity.localActivityOptions = opts == null ? $.pointerTarget<__goscript_internal_activity.localActivityOptions>(opts) : (opts as any).__isVarRef === true ? (opts as any).value : (opts as any).__goValue === undefined ? (opts as any) : $.pointerTarget<__goscript_internal_activity.localActivityOptions>(opts);

	;(opts$ as __goscript_internal_activity.localActivityOptions).ScheduleToCloseTimeoutSeconds = common.Int32Ceil(time.Duration_Seconds(options.ScheduleToCloseTimeout));
	;(opts$ as __goscript_internal_activity.localActivityOptions).RetryPolicy = options.RetryPolicy
	return ctx1
}

export async function WithTaskList(ctx: __goscript_context.Context | null, name: string): globalThis.Promise<__goscript_context.Context | null> {
	let ctx1 = await __goscript_internal_activity.setActivityParametersIfNotExist(ctx)
	$.pointerValue<__goscript_internal_activity.activityOptions>(await __goscript_internal_activity.getActivityOptions(ctx1)).TaskListName = name
	return ctx1
}

export async function GetActivityTaskList(ctx: __goscript_context.Context | null): globalThis.Promise<$.VarRef<string> | null> {
	let ao: __goscript_internal_activity.activityOptions | $.VarRef<__goscript_internal_activity.activityOptions> | null = await __goscript_internal_activity.getActivityOptions(ctx)
	if (ao == null) {
		return null
	}
	let tl = $.varRef($.pointerValue<__goscript_internal_activity.activityOptions>(ao).TaskListName)
	return tl
}

export async function GetActivityOptions(ctx: __goscript_context.Context | null): globalThis.Promise<__goscript_activity.ActivityOptions | $.VarRef<__goscript_activity.ActivityOptions> | null> {
	let ao: __goscript_internal_activity.activityOptions | $.VarRef<__goscript_internal_activity.activityOptions> | null = await __goscript_internal_activity.getActivityOptions(ctx)
	let ao$: __goscript_internal_activity.activityOptions = ao == null ? $.pointerTarget<__goscript_internal_activity.activityOptions>(ao) : (ao as any).__isVarRef === true ? (ao as any).value : (ao as any).__goValue === undefined ? (ao as any) : $.pointerTarget<__goscript_internal_activity.activityOptions>(ao)
	if (ao == null) {
		return null
	}
	let opts = $.varRef(new __goscript_activity.ActivityOptions({TaskList: (ao$ as __goscript_internal_activity.activityOptions).TaskListName, ScheduleToCloseTimeout: $.int64Mul($.int64((ao$ as __goscript_internal_activity.activityOptions).ScheduleToCloseTimeoutSeconds), 1000000000n), ScheduleToStartTimeout: $.int64Mul($.int64((ao$ as __goscript_internal_activity.activityOptions).ScheduleToStartTimeoutSeconds), 1000000000n), StartToCloseTimeout: $.int64Mul($.int64((ao$ as __goscript_internal_activity.activityOptions).StartToCloseTimeoutSeconds), 1000000000n), HeartbeatTimeout: $.int64Mul($.int64((ao$ as __goscript_internal_activity.activityOptions).HeartbeatTimeoutSeconds), 1000000000n), WaitForCancellation: (ao$ as __goscript_internal_activity.activityOptions).WaitForCancellation}, true))
	if ((ao$ as __goscript_internal_activity.activityOptions).ActivityID != null) {
		opts.value.ActivityID = $.pointerValue<string>((ao$ as __goscript_internal_activity.activityOptions).ActivityID)
	}
	if ((ao$ as __goscript_internal_activity.activityOptions).RetryPolicy != null) {
		opts.value.RetryPolicy = __goscript_convert.convertFromThriftRetryPolicy((ao$ as __goscript_internal_activity.activityOptions).RetryPolicy)
	}
	return opts
}

export async function WithScheduleToCloseTimeout(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<__goscript_context.Context | null> {
	let ctx1 = await __goscript_internal_activity.setActivityParametersIfNotExist(ctx)
	$.pointerValue<__goscript_internal_activity.activityOptions>(await __goscript_internal_activity.getActivityOptions(ctx1)).ScheduleToCloseTimeoutSeconds = common.Int32Ceil(time.Duration_Seconds(d))
	return ctx1
}

export async function WithScheduleToStartTimeout(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<__goscript_context.Context | null> {
	let ctx1 = await __goscript_internal_activity.setActivityParametersIfNotExist(ctx)
	$.pointerValue<__goscript_internal_activity.activityOptions>(await __goscript_internal_activity.getActivityOptions(ctx1)).ScheduleToStartTimeoutSeconds = common.Int32Ceil(time.Duration_Seconds(d))
	return ctx1
}

export async function WithStartToCloseTimeout(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<__goscript_context.Context | null> {
	let ctx1 = await __goscript_internal_activity.setActivityParametersIfNotExist(ctx)
	$.pointerValue<__goscript_internal_activity.activityOptions>(await __goscript_internal_activity.getActivityOptions(ctx1)).StartToCloseTimeoutSeconds = common.Int32Ceil(time.Duration_Seconds(d))
	return ctx1
}

export async function WithHeartbeatTimeout(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<__goscript_context.Context | null> {
	let ctx1 = await __goscript_internal_activity.setActivityParametersIfNotExist(ctx)
	$.pointerValue<__goscript_internal_activity.activityOptions>(await __goscript_internal_activity.getActivityOptions(ctx1)).HeartbeatTimeoutSeconds = common.Int32Ceil(time.Duration_Seconds(d))
	return ctx1
}

export async function WithWaitForCancellation(ctx: __goscript_context.Context | null, wait: boolean): globalThis.Promise<__goscript_context.Context | null> {
	let ctx1 = await __goscript_internal_activity.setActivityParametersIfNotExist(ctx)
	$.pointerValue<__goscript_internal_activity.activityOptions>(await __goscript_internal_activity.getActivityOptions(ctx1)).WaitForCancellation = wait
	return ctx1
}

export async function WithRetryPolicy(ctx: __goscript_context.Context | null, __goscriptParam0: __goscript_client.RetryPolicy): globalThis.Promise<__goscript_context.Context | null> {
	let retryPolicy: $.VarRef<__goscript_client.RetryPolicy> = $.varRef(__goscriptParam0)
	let ctx1 = await __goscript_internal_activity.setActivityParametersIfNotExist(ctx)
	$.pointerValue<__goscript_internal_activity.activityOptions>(await __goscript_internal_activity.getActivityOptions(ctx1)).RetryPolicy = __goscript_convert.convertRetryPolicy(retryPolicy)
	return ctx1
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({apply: (receiver: any, ...args: any[]) => (customVersionOption_apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int", "internal.customVersionOption"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("apply", [["config", /* @__PURE__ */ $.pointerType("internal.getVersionConfig")]])])
}

var __goscriptAwait: any
