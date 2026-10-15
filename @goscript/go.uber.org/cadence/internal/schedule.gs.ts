// Generated file based on schedule.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_internal_schedule_convert_thrift from "./internal_schedule_convert_thrift.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/time/index.js"
import "./client.gs.ts"
import "./encoded.gs.ts"
import "./internal_schedule_convert_thrift.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.ScheduleOverlapPolicy", "internal.ScheduleCatchUpPolicy", "internal.ScheduleSpec", "internal.ScheduleStartWorkflowAction", "internal.ScheduleAction", "internal.ScheduleStartWorkflowActionDescription", "internal.ScheduleActionDescription", "internal.SchedulePolicies", "internal.SchedulePauseInfo", "internal.ScheduleState", "internal.BackfillInfo", "internal.ScheduleInfo", "internal.ScheduleListEntry", "internal.CreateScheduleRequest", "internal.ScheduleUpdate", "internal.BackfillRequest", "internal.DescribeScheduleResponse", "internal.ListSchedulesResponse"])

export type ScheduleOverlapPolicy = number

export type ScheduleCatchUpPolicy = number

export class ScheduleSpec {
	// CronExpression is a standard five-field cron expression (e.g. "0 2 * * *" for 2 AM daily).
	public get CronExpression(): string {
		return this._fields.CronExpression
	}

	public set CronExpression(value: string) {
		this._fields.CronExpression = value
	}

	// StartTime is the earliest time at which the schedule may trigger. Zero means no lower bound.
	public get StartTime(): time.Time {
		return this._fields.StartTime
	}

	public set StartTime(value: time.Time) {
		this._fields.StartTime = value
	}

	// EndTime is the latest time at which the schedule may trigger. Zero means no upper bound.
	public get EndTime(): time.Time {
		return this._fields.EndTime
	}

	public set EndTime(value: time.Time) {
		this._fields.EndTime = value
	}

	// Jitter adds a random delay up to this duration after each nominal trigger time.
	public get Jitter(): time.Duration {
		return this._fields.Jitter
	}

	public set Jitter(value: time.Duration) {
		this._fields.Jitter = value
	}

	public _fields: {
		CronExpression: string
		StartTime: time.Time
		EndTime: time.Time
		Jitter: time.Duration
	}

	constructor(init?: Partial<{CronExpression?: string, StartTime?: time.Time, EndTime?: time.Time, Jitter?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			CronExpression: init?.CronExpression ?? ("" as string),
			StartTime: init?.StartTime ? $.markAsStructValue($.cloneStructValue(init.StartTime)) : $.markAsStructValue(new time.Time()),
			EndTime: init?.EndTime ? $.markAsStructValue($.cloneStructValue(init.EndTime)) : $.markAsStructValue(new time.Time()),
			Jitter: init?.Jitter ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScheduleSpec {
		return new ScheduleSpec(this, true)
	}

	public __goscriptAssign(source: ScheduleSpec): void {
		const target = this._fields
		const values = source._fields
		target.CronExpression = values.CronExpression
		$.assignStruct(target.StartTime, values.StartTime)
		$.assignStruct(target.EndTime, values.EndTime)
		target.Jitter = values.Jitter
	}

	static __typeInfo = $.registerStructType(
		"internal.ScheduleSpec",
		() => new ScheduleSpec(),
		() => [],
		ScheduleSpec,
		() => [/* @__PURE__ */ $.structField("CronExpression", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("StartTime", "time.Time", [1], 16, true), /* @__PURE__ */ $.structField("EndTime", "time.Time", [2], 40, true), /* @__PURE__ */ $.structField("Jitter", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 64, true)]
	)
}

export class ScheduleStartWorkflowAction {
	// WorkflowType is the registered name of the workflow function to execute. Required.
	public get WorkflowType(): string {
		return this._fields.WorkflowType
	}

	public set WorkflowType(value: string) {
		this._fields.WorkflowType = value
	}

	// TaskList is the task list on which the workflow will run. Required.
	public get TaskList(): string {
		return this._fields.TaskList
	}

	public set TaskList(value: string) {
		this._fields.TaskList = value
	}

	// Input is the pre-encoded binary payload passed as input to the workflow on each run.
	// Encode using your configured DataConverter or json.Marshal for simple types.
	public get Input(): $.Slice<number> {
		return this._fields.Input
	}

	public set Input(value: $.Slice<number>) {
		this._fields.Input = value
	}

	// WorkflowIDPrefix is prepended to a server-generated suffix to form each run's workflow ID.
	// If empty, the server uses the schedule ID as the prefix.
	public get WorkflowIDPrefix(): string {
		return this._fields.WorkflowIDPrefix
	}

	public set WorkflowIDPrefix(value: string) {
		this._fields.WorkflowIDPrefix = value
	}

	// ExecutionStartToCloseTimeout is the maximum duration for the entire workflow execution. Required.
	public get ExecutionStartToCloseTimeout(): time.Duration {
		return this._fields.ExecutionStartToCloseTimeout
	}

	public set ExecutionStartToCloseTimeout(value: time.Duration) {
		this._fields.ExecutionStartToCloseTimeout = value
	}

	// DecisionTaskStartToCloseTimeout is the maximum duration for a single decision task.
	// If zero, defaults to 10s. The server rejects values <= 0, so a zero value must be defaulted client-side.
	public get DecisionTaskStartToCloseTimeout(): time.Duration {
		return this._fields.DecisionTaskStartToCloseTimeout
	}

	public set DecisionTaskStartToCloseTimeout(value: time.Duration) {
		this._fields.DecisionTaskStartToCloseTimeout = value
	}

	// RetryPolicy is the retry policy applied to each triggered workflow run. Optional.
	public get RetryPolicy(): __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null {
		return this._fields.RetryPolicy
	}

	public set RetryPolicy(value: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null) {
		this._fields.RetryPolicy = value
	}

	// Memo is additional metadata attached to each triggered workflow run. Optional.
	// Values are native Go values; the SDK encodes each one with the configured DataConverter.
	public get Memo(): globalThis.Map<string, any> | null {
		return this._fields.Memo
	}

	public set Memo(value: globalThis.Map<string, any> | null) {
		this._fields.Memo = value
	}

	// SearchAttributes are indexed attributes attached to each triggered workflow run. Optional.
	// Values are native Go values; the SDK JSON-encodes each one.
	public get SearchAttributes(): globalThis.Map<string, any> | null {
		return this._fields.SearchAttributes
	}

	public set SearchAttributes(value: globalThis.Map<string, any> | null) {
		this._fields.SearchAttributes = value
	}

	public _fields: {
		WorkflowType: string
		TaskList: string
		Input: $.Slice<number>
		WorkflowIDPrefix: string
		ExecutionStartToCloseTimeout: time.Duration
		DecisionTaskStartToCloseTimeout: time.Duration
		RetryPolicy: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null
		Memo: globalThis.Map<string, any> | null
		SearchAttributes: globalThis.Map<string, any> | null
	}

	constructor(init?: Partial<{WorkflowType?: string, TaskList?: string, Input?: $.Slice<number>, WorkflowIDPrefix?: string, ExecutionStartToCloseTimeout?: time.Duration, DecisionTaskStartToCloseTimeout?: time.Duration, RetryPolicy?: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null, Memo?: globalThis.Map<string, any> | null, SearchAttributes?: globalThis.Map<string, any> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			WorkflowType: init?.WorkflowType ?? ("" as string),
			TaskList: init?.TaskList ?? ("" as string),
			Input: init?.Input ?? (null! as $.Slice<number>),
			WorkflowIDPrefix: init?.WorkflowIDPrefix ?? ("" as string),
			ExecutionStartToCloseTimeout: init?.ExecutionStartToCloseTimeout ?? (0n as time.Duration),
			DecisionTaskStartToCloseTimeout: init?.DecisionTaskStartToCloseTimeout ?? (0n as time.Duration),
			RetryPolicy: init?.RetryPolicy ?? (null! as __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null),
			Memo: init?.Memo ?? (null! as globalThis.Map<string, any> | null),
			SearchAttributes: init?.SearchAttributes ?? (null! as globalThis.Map<string, any> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScheduleStartWorkflowAction {
		return new ScheduleStartWorkflowAction(this, true)
	}

	public __goscriptAssign(source: ScheduleStartWorkflowAction): void {
		const target = this._fields
		const values = source._fields
		target.WorkflowType = values.WorkflowType
		target.TaskList = values.TaskList
		target.Input = values.Input
		target.WorkflowIDPrefix = values.WorkflowIDPrefix
		target.ExecutionStartToCloseTimeout = values.ExecutionStartToCloseTimeout
		target.DecisionTaskStartToCloseTimeout = values.DecisionTaskStartToCloseTimeout
		target.RetryPolicy = values.RetryPolicy
		target.Memo = values.Memo
		target.SearchAttributes = values.SearchAttributes
	}

	static __typeInfo = $.registerStructType(
		"internal.ScheduleStartWorkflowAction",
		() => new ScheduleStartWorkflowAction(),
		() => [],
		ScheduleStartWorkflowAction,
		() => [/* @__PURE__ */ $.structField("WorkflowType", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("TaskList", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 32, true), /* @__PURE__ */ $.structField("WorkflowIDPrefix", /* @__PURE__ */ $.basicType("string"), [3], 56, true), /* @__PURE__ */ $.structField("ExecutionStartToCloseTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [4], 72, true), /* @__PURE__ */ $.structField("DecisionTaskStartToCloseTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [5], 80, true), /* @__PURE__ */ $.structField("RetryPolicy", /* @__PURE__ */ $.pointerType("internal.RetryPolicy"), [6], 88, true), /* @__PURE__ */ $.structField("Memo", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }), [7], 96, true), /* @__PURE__ */ $.structField("SearchAttributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }), [8], 104, true)]
	)
}

export class ScheduleAction {
	// StartWorkflow starts a new workflow execution on each trigger.
	public get StartWorkflow(): ScheduleStartWorkflowAction | $.VarRef<ScheduleStartWorkflowAction> | null {
		return this._fields.StartWorkflow
	}

	public set StartWorkflow(value: ScheduleStartWorkflowAction | $.VarRef<ScheduleStartWorkflowAction> | null) {
		this._fields.StartWorkflow = value
	}

	public _fields: {
		StartWorkflow: ScheduleStartWorkflowAction | $.VarRef<ScheduleStartWorkflowAction> | null
	}

	constructor(init?: Partial<{StartWorkflow?: ScheduleStartWorkflowAction | $.VarRef<ScheduleStartWorkflowAction> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			StartWorkflow: init?.StartWorkflow ?? (null! as ScheduleStartWorkflowAction | $.VarRef<ScheduleStartWorkflowAction> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScheduleAction {
		return new ScheduleAction(this, true)
	}

	public __goscriptAssign(source: ScheduleAction): void {
		const target = this._fields
		const values = source._fields
		target.StartWorkflow = values.StartWorkflow
	}

	static __typeInfo = $.registerStructType(
		"internal.ScheduleAction",
		() => new ScheduleAction(),
		() => [],
		ScheduleAction,
		() => [/* @__PURE__ */ $.structField("StartWorkflow", /* @__PURE__ */ $.pointerType("internal.ScheduleStartWorkflowAction"), [0], 0, true)]
	)
}

export class ScheduleStartWorkflowActionDescription {
	public get WorkflowType(): string {
		return this._fields.WorkflowType
	}

	public set WorkflowType(value: string) {
		this._fields.WorkflowType = value
	}

	public get TaskList(): string {
		return this._fields.TaskList
	}

	public set TaskList(value: string) {
		this._fields.TaskList = value
	}

	public get Input(): $.Slice<number> {
		return this._fields.Input
	}

	public set Input(value: $.Slice<number>) {
		this._fields.Input = value
	}

	public get WorkflowIDPrefix(): string {
		return this._fields.WorkflowIDPrefix
	}

	public set WorkflowIDPrefix(value: string) {
		this._fields.WorkflowIDPrefix = value
	}

	public get ExecutionStartToCloseTimeout(): time.Duration {
		return this._fields.ExecutionStartToCloseTimeout
	}

	public set ExecutionStartToCloseTimeout(value: time.Duration) {
		this._fields.ExecutionStartToCloseTimeout = value
	}

	public get DecisionTaskStartToCloseTimeout(): time.Duration {
		return this._fields.DecisionTaskStartToCloseTimeout
	}

	public set DecisionTaskStartToCloseTimeout(value: time.Duration) {
		this._fields.DecisionTaskStartToCloseTimeout = value
	}

	public get RetryPolicy(): __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null {
		return this._fields.RetryPolicy
	}

	public set RetryPolicy(value: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null) {
		this._fields.RetryPolicy = value
	}

	// Memo contains the raw encoded bytes of each memo field; decode with your DataConverter.
	public get Memo(): globalThis.Map<string, $.Slice<number>> | null {
		return this._fields.Memo
	}

	public set Memo(value: globalThis.Map<string, $.Slice<number>> | null) {
		this._fields.Memo = value
	}

	// SearchAttributes contains the raw encoded bytes of each attribute (typically JSON).
	public get SearchAttributes(): globalThis.Map<string, $.Slice<number>> | null {
		return this._fields.SearchAttributes
	}

	public set SearchAttributes(value: globalThis.Map<string, $.Slice<number>> | null) {
		this._fields.SearchAttributes = value
	}

	public _fields: {
		WorkflowType: string
		TaskList: string
		Input: $.Slice<number>
		WorkflowIDPrefix: string
		ExecutionStartToCloseTimeout: time.Duration
		DecisionTaskStartToCloseTimeout: time.Duration
		RetryPolicy: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null
		Memo: globalThis.Map<string, $.Slice<number>> | null
		SearchAttributes: globalThis.Map<string, $.Slice<number>> | null
	}

	constructor(init?: Partial<{WorkflowType?: string, TaskList?: string, Input?: $.Slice<number>, WorkflowIDPrefix?: string, ExecutionStartToCloseTimeout?: time.Duration, DecisionTaskStartToCloseTimeout?: time.Duration, RetryPolicy?: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null, Memo?: globalThis.Map<string, $.Slice<number>> | null, SearchAttributes?: globalThis.Map<string, $.Slice<number>> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			WorkflowType: init?.WorkflowType ?? ("" as string),
			TaskList: init?.TaskList ?? ("" as string),
			Input: init?.Input ?? (null! as $.Slice<number>),
			WorkflowIDPrefix: init?.WorkflowIDPrefix ?? ("" as string),
			ExecutionStartToCloseTimeout: init?.ExecutionStartToCloseTimeout ?? (0n as time.Duration),
			DecisionTaskStartToCloseTimeout: init?.DecisionTaskStartToCloseTimeout ?? (0n as time.Duration),
			RetryPolicy: init?.RetryPolicy ?? (null! as __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null),
			Memo: init?.Memo ?? (null! as globalThis.Map<string, $.Slice<number>> | null),
			SearchAttributes: init?.SearchAttributes ?? (null! as globalThis.Map<string, $.Slice<number>> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScheduleStartWorkflowActionDescription {
		return new ScheduleStartWorkflowActionDescription(this, true)
	}

	public __goscriptAssign(source: ScheduleStartWorkflowActionDescription): void {
		const target = this._fields
		const values = source._fields
		target.WorkflowType = values.WorkflowType
		target.TaskList = values.TaskList
		target.Input = values.Input
		target.WorkflowIDPrefix = values.WorkflowIDPrefix
		target.ExecutionStartToCloseTimeout = values.ExecutionStartToCloseTimeout
		target.DecisionTaskStartToCloseTimeout = values.DecisionTaskStartToCloseTimeout
		target.RetryPolicy = values.RetryPolicy
		target.Memo = values.Memo
		target.SearchAttributes = values.SearchAttributes
	}

	static __typeInfo = $.registerStructType(
		"internal.ScheduleStartWorkflowActionDescription",
		() => new ScheduleStartWorkflowActionDescription(),
		() => [],
		ScheduleStartWorkflowActionDescription,
		() => [/* @__PURE__ */ $.structField("WorkflowType", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("TaskList", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 32, true), /* @__PURE__ */ $.structField("WorkflowIDPrefix", /* @__PURE__ */ $.basicType("string"), [3], 56, true), /* @__PURE__ */ $.structField("ExecutionStartToCloseTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [4], 72, true), /* @__PURE__ */ $.structField("DecisionTaskStartToCloseTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [5], 80, true), /* @__PURE__ */ $.structField("RetryPolicy", /* @__PURE__ */ $.pointerType("internal.RetryPolicy"), [6], 88, true), /* @__PURE__ */ $.structField("Memo", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [7], 96, true), /* @__PURE__ */ $.structField("SearchAttributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [8], 104, true)]
	)
}

export class ScheduleActionDescription {
	public get StartWorkflow(): ScheduleStartWorkflowActionDescription | $.VarRef<ScheduleStartWorkflowActionDescription> | null {
		return this._fields.StartWorkflow
	}

	public set StartWorkflow(value: ScheduleStartWorkflowActionDescription | $.VarRef<ScheduleStartWorkflowActionDescription> | null) {
		this._fields.StartWorkflow = value
	}

	public _fields: {
		StartWorkflow: ScheduleStartWorkflowActionDescription | $.VarRef<ScheduleStartWorkflowActionDescription> | null
	}

	constructor(init?: Partial<{StartWorkflow?: ScheduleStartWorkflowActionDescription | $.VarRef<ScheduleStartWorkflowActionDescription> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			StartWorkflow: init?.StartWorkflow ?? (null! as ScheduleStartWorkflowActionDescription | $.VarRef<ScheduleStartWorkflowActionDescription> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScheduleActionDescription {
		return new ScheduleActionDescription(this, true)
	}

	public __goscriptAssign(source: ScheduleActionDescription): void {
		const target = this._fields
		const values = source._fields
		target.StartWorkflow = values.StartWorkflow
	}

	static __typeInfo = $.registerStructType(
		"internal.ScheduleActionDescription",
		() => new ScheduleActionDescription(),
		() => [],
		ScheduleActionDescription,
		() => [/* @__PURE__ */ $.structField("StartWorkflow", /* @__PURE__ */ $.pointerType("internal.ScheduleStartWorkflowActionDescription"), [0], 0, true)]
	)
}

export class SchedulePolicies {
	// OverlapPolicy defines what happens when a new run is triggered while a previous run is active.
	public get OverlapPolicy(): ScheduleOverlapPolicy {
		return this._fields.OverlapPolicy
	}

	public set OverlapPolicy(value: ScheduleOverlapPolicy) {
		this._fields.OverlapPolicy = value
	}

	// CatchUpPolicy defines how missed runs are handled when the schedule resumes from pause.
	public get CatchUpPolicy(): ScheduleCatchUpPolicy {
		return this._fields.CatchUpPolicy
	}

	public set CatchUpPolicy(value: ScheduleCatchUpPolicy) {
		this._fields.CatchUpPolicy = value
	}

	// CatchUpWindow is the maximum time window the server looks back for missed runs on resume.
	// Zero means the server uses its configured default.
	public get CatchUpWindow(): time.Duration {
		return this._fields.CatchUpWindow
	}

	public set CatchUpWindow(value: time.Duration) {
		this._fields.CatchUpWindow = value
	}

	// PauseOnFailure automatically pauses the schedule if a triggered workflow run fails.
	public get PauseOnFailure(): boolean {
		return this._fields.PauseOnFailure
	}

	public set PauseOnFailure(value: boolean) {
		this._fields.PauseOnFailure = value
	}

	// BufferLimit caps the number of buffered runs when OverlapPolicy is Buffer (0 = no user limit, server cap applies).
	public get BufferLimit(): number {
		return this._fields.BufferLimit
	}

	public set BufferLimit(value: number) {
		this._fields.BufferLimit = value
	}

	// ConcurrencyLimit caps the number of concurrent runs when OverlapPolicy is Concurrent (0 = unlimited, server cap applies).
	public get ConcurrencyLimit(): number {
		return this._fields.ConcurrencyLimit
	}

	public set ConcurrencyLimit(value: number) {
		this._fields.ConcurrencyLimit = value
	}

	public _fields: {
		OverlapPolicy: ScheduleOverlapPolicy
		CatchUpPolicy: ScheduleCatchUpPolicy
		CatchUpWindow: time.Duration
		PauseOnFailure: boolean
		BufferLimit: number
		ConcurrencyLimit: number
	}

	constructor(init?: Partial<{OverlapPolicy?: ScheduleOverlapPolicy, CatchUpPolicy?: ScheduleCatchUpPolicy, CatchUpWindow?: time.Duration, PauseOnFailure?: boolean, BufferLimit?: number, ConcurrencyLimit?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			OverlapPolicy: init?.OverlapPolicy ?? (0 as ScheduleOverlapPolicy),
			CatchUpPolicy: init?.CatchUpPolicy ?? (0 as ScheduleCatchUpPolicy),
			CatchUpWindow: init?.CatchUpWindow ?? (0n as time.Duration),
			PauseOnFailure: init?.PauseOnFailure ?? (false as boolean),
			BufferLimit: init?.BufferLimit ?? (0 as number),
			ConcurrencyLimit: init?.ConcurrencyLimit ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SchedulePolicies {
		return new SchedulePolicies(this, true)
	}

	public __goscriptAssign(source: SchedulePolicies): void {
		const target = this._fields
		const values = source._fields
		target.OverlapPolicy = values.OverlapPolicy
		target.CatchUpPolicy = values.CatchUpPolicy
		target.CatchUpWindow = values.CatchUpWindow
		target.PauseOnFailure = values.PauseOnFailure
		target.BufferLimit = values.BufferLimit
		target.ConcurrencyLimit = values.ConcurrencyLimit
	}

	static __typeInfo = $.registerStructType(
		"internal.SchedulePolicies",
		() => new SchedulePolicies(),
		() => [],
		SchedulePolicies,
		() => [/* @__PURE__ */ $.structField("OverlapPolicy", /* @__PURE__ */ $.basicType("int", "internal.ScheduleOverlapPolicy"), [0], 0, true), /* @__PURE__ */ $.structField("CatchUpPolicy", /* @__PURE__ */ $.basicType("int", "internal.ScheduleCatchUpPolicy"), [1], 8, true), /* @__PURE__ */ $.structField("CatchUpWindow", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 16, true), /* @__PURE__ */ $.structField("PauseOnFailure", /* @__PURE__ */ $.basicType("bool"), [3], 24, true), /* @__PURE__ */ $.structField("BufferLimit", /* @__PURE__ */ $.basicType("int32"), [4], 28, true), /* @__PURE__ */ $.structField("ConcurrencyLimit", /* @__PURE__ */ $.basicType("int32"), [5], 32, true)]
	)
}

export class SchedulePauseInfo {
	public get Reason(): string {
		return this._fields.Reason
	}

	public set Reason(value: string) {
		this._fields.Reason = value
	}

	public get PausedAt(): time.Time {
		return this._fields.PausedAt
	}

	public set PausedAt(value: time.Time) {
		this._fields.PausedAt = value
	}

	public get PausedBy(): string {
		return this._fields.PausedBy
	}

	public set PausedBy(value: string) {
		this._fields.PausedBy = value
	}

	public _fields: {
		Reason: string
		PausedAt: time.Time
		PausedBy: string
	}

	constructor(init?: Partial<{Reason?: string, PausedAt?: time.Time, PausedBy?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Reason: init?.Reason ?? ("" as string),
			PausedAt: init?.PausedAt ? $.markAsStructValue($.cloneStructValue(init.PausedAt)) : $.markAsStructValue(new time.Time()),
			PausedBy: init?.PausedBy ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SchedulePauseInfo {
		return new SchedulePauseInfo(this, true)
	}

	public __goscriptAssign(source: SchedulePauseInfo): void {
		const target = this._fields
		const values = source._fields
		target.Reason = values.Reason
		$.assignStruct(target.PausedAt, values.PausedAt)
		target.PausedBy = values.PausedBy
	}

	static __typeInfo = $.registerStructType(
		"internal.SchedulePauseInfo",
		() => new SchedulePauseInfo(),
		() => [],
		SchedulePauseInfo,
		() => [/* @__PURE__ */ $.structField("Reason", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("PausedAt", "time.Time", [1], 16, true), /* @__PURE__ */ $.structField("PausedBy", /* @__PURE__ */ $.basicType("string"), [2], 40, true)]
	)
}

export class ScheduleState {
	public get Paused(): boolean {
		return this._fields.Paused
	}

	public set Paused(value: boolean) {
		this._fields.Paused = value
	}

	public get PauseInfo(): SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null {
		return this._fields.PauseInfo
	}

	public set PauseInfo(value: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null) {
		this._fields.PauseInfo = value
	}

	public _fields: {
		Paused: boolean
		PauseInfo: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null
	}

	constructor(init?: Partial<{Paused?: boolean, PauseInfo?: SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Paused: init?.Paused ?? (false as boolean),
			PauseInfo: init?.PauseInfo ?? (null! as SchedulePauseInfo | $.VarRef<SchedulePauseInfo> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScheduleState {
		return new ScheduleState(this, true)
	}

	public __goscriptAssign(source: ScheduleState): void {
		const target = this._fields
		const values = source._fields
		target.Paused = values.Paused
		target.PauseInfo = values.PauseInfo
	}

	static __typeInfo = $.registerStructType(
		"internal.ScheduleState",
		() => new ScheduleState(),
		() => [],
		ScheduleState,
		() => [/* @__PURE__ */ $.structField("Paused", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("PauseInfo", /* @__PURE__ */ $.pointerType("internal.SchedulePauseInfo"), [1], 8, true)]
	)
}

export class BackfillInfo {
	public get BackfillID(): string {
		return this._fields.BackfillID
	}

	public set BackfillID(value: string) {
		this._fields.BackfillID = value
	}

	public get StartTime(): time.Time {
		return this._fields.StartTime
	}

	public set StartTime(value: time.Time) {
		this._fields.StartTime = value
	}

	public get EndTime(): time.Time {
		return this._fields.EndTime
	}

	public set EndTime(value: time.Time) {
		this._fields.EndTime = value
	}

	public get RunsCompleted(): number {
		return this._fields.RunsCompleted
	}

	public set RunsCompleted(value: number) {
		this._fields.RunsCompleted = value
	}

	public get RunsTotal(): number {
		return this._fields.RunsTotal
	}

	public set RunsTotal(value: number) {
		this._fields.RunsTotal = value
	}

	public _fields: {
		BackfillID: string
		StartTime: time.Time
		EndTime: time.Time
		RunsCompleted: number
		RunsTotal: number
	}

	constructor(init?: Partial<{BackfillID?: string, StartTime?: time.Time, EndTime?: time.Time, RunsCompleted?: number, RunsTotal?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			BackfillID: init?.BackfillID ?? ("" as string),
			StartTime: init?.StartTime ? $.markAsStructValue($.cloneStructValue(init.StartTime)) : $.markAsStructValue(new time.Time()),
			EndTime: init?.EndTime ? $.markAsStructValue($.cloneStructValue(init.EndTime)) : $.markAsStructValue(new time.Time()),
			RunsCompleted: init?.RunsCompleted ?? (0 as number),
			RunsTotal: init?.RunsTotal ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BackfillInfo {
		return new BackfillInfo(this, true)
	}

	public __goscriptAssign(source: BackfillInfo): void {
		const target = this._fields
		const values = source._fields
		target.BackfillID = values.BackfillID
		$.assignStruct(target.StartTime, values.StartTime)
		$.assignStruct(target.EndTime, values.EndTime)
		target.RunsCompleted = values.RunsCompleted
		target.RunsTotal = values.RunsTotal
	}

	static __typeInfo = $.registerStructType(
		"internal.BackfillInfo",
		() => new BackfillInfo(),
		() => [],
		BackfillInfo,
		() => [/* @__PURE__ */ $.structField("BackfillID", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("StartTime", "time.Time", [1], 16, true), /* @__PURE__ */ $.structField("EndTime", "time.Time", [2], 40, true), /* @__PURE__ */ $.structField("RunsCompleted", /* @__PURE__ */ $.basicType("int32"), [3], 64, true), /* @__PURE__ */ $.structField("RunsTotal", /* @__PURE__ */ $.basicType("int32"), [4], 68, true)]
	)
}

export class ScheduleInfo {
	public get LastRunTime(): time.Time {
		return this._fields.LastRunTime
	}

	public set LastRunTime(value: time.Time) {
		this._fields.LastRunTime = value
	}

	public get NextRunTime(): time.Time {
		return this._fields.NextRunTime
	}

	public set NextRunTime(value: time.Time) {
		this._fields.NextRunTime = value
	}

	public get TotalRuns(): bigint {
		return this._fields.TotalRuns
	}

	public set TotalRuns(value: bigint) {
		this._fields.TotalRuns = value
	}

	public get CreateTime(): time.Time {
		return this._fields.CreateTime
	}

	public set CreateTime(value: time.Time) {
		this._fields.CreateTime = value
	}

	public get LastUpdateTime(): time.Time {
		return this._fields.LastUpdateTime
	}

	public set LastUpdateTime(value: time.Time) {
		this._fields.LastUpdateTime = value
	}

	public get OngoingBackfills(): $.Slice<BackfillInfo | $.VarRef<BackfillInfo> | null> {
		return this._fields.OngoingBackfills
	}

	public set OngoingBackfills(value: $.Slice<BackfillInfo | $.VarRef<BackfillInfo> | null>) {
		this._fields.OngoingBackfills = value
	}

	// MissedRuns is the number of scheduled fires the server failed to start.
	public get MissedRuns(): bigint {
		return this._fields.MissedRuns
	}

	public set MissedRuns(value: bigint) {
		this._fields.MissedRuns = value
	}

	// SkippedRuns is the number of runs that were skipped due to the overlap policy.
	public get SkippedRuns(): bigint {
		return this._fields.SkippedRuns
	}

	public set SkippedRuns(value: bigint) {
		this._fields.SkippedRuns = value
	}

	// BufferedFireCount is the number of runs currently waiting in the buffer to be started.
	public get BufferedFireCount(): bigint {
		return this._fields.BufferedFireCount
	}

	public set BufferedFireCount(value: bigint) {
		this._fields.BufferedFireCount = value
	}

	// RunningWorkflowCount is the number of workflows actively running under this schedule.
	public get RunningWorkflowCount(): bigint {
		return this._fields.RunningWorkflowCount
	}

	public set RunningWorkflowCount(value: bigint) {
		this._fields.RunningWorkflowCount = value
	}

	public _fields: {
		LastRunTime: time.Time
		NextRunTime: time.Time
		TotalRuns: bigint
		CreateTime: time.Time
		LastUpdateTime: time.Time
		OngoingBackfills: $.Slice<BackfillInfo | $.VarRef<BackfillInfo> | null>
		MissedRuns: bigint
		SkippedRuns: bigint
		BufferedFireCount: bigint
		RunningWorkflowCount: bigint
	}

	constructor(init?: Partial<{LastRunTime?: time.Time, NextRunTime?: time.Time, TotalRuns?: bigint, CreateTime?: time.Time, LastUpdateTime?: time.Time, OngoingBackfills?: $.Slice<BackfillInfo | $.VarRef<BackfillInfo> | null>, MissedRuns?: bigint, SkippedRuns?: bigint, BufferedFireCount?: bigint, RunningWorkflowCount?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			LastRunTime: init?.LastRunTime ? $.markAsStructValue($.cloneStructValue(init.LastRunTime)) : $.markAsStructValue(new time.Time()),
			NextRunTime: init?.NextRunTime ? $.markAsStructValue($.cloneStructValue(init.NextRunTime)) : $.markAsStructValue(new time.Time()),
			TotalRuns: init?.TotalRuns ?? (0n as bigint),
			CreateTime: init?.CreateTime ? $.markAsStructValue($.cloneStructValue(init.CreateTime)) : $.markAsStructValue(new time.Time()),
			LastUpdateTime: init?.LastUpdateTime ? $.markAsStructValue($.cloneStructValue(init.LastUpdateTime)) : $.markAsStructValue(new time.Time()),
			OngoingBackfills: init?.OngoingBackfills ?? (null! as $.Slice<BackfillInfo | $.VarRef<BackfillInfo> | null>),
			MissedRuns: init?.MissedRuns ?? (0n as bigint),
			SkippedRuns: init?.SkippedRuns ?? (0n as bigint),
			BufferedFireCount: init?.BufferedFireCount ?? (0n as bigint),
			RunningWorkflowCount: init?.RunningWorkflowCount ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScheduleInfo {
		return new ScheduleInfo(this, true)
	}

	public __goscriptAssign(source: ScheduleInfo): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.LastRunTime, values.LastRunTime)
		$.assignStruct(target.NextRunTime, values.NextRunTime)
		target.TotalRuns = values.TotalRuns
		$.assignStruct(target.CreateTime, values.CreateTime)
		$.assignStruct(target.LastUpdateTime, values.LastUpdateTime)
		target.OngoingBackfills = values.OngoingBackfills
		target.MissedRuns = values.MissedRuns
		target.SkippedRuns = values.SkippedRuns
		target.BufferedFireCount = values.BufferedFireCount
		target.RunningWorkflowCount = values.RunningWorkflowCount
	}

	static __typeInfo = $.registerStructType(
		"internal.ScheduleInfo",
		() => new ScheduleInfo(),
		() => [],
		ScheduleInfo,
		() => [/* @__PURE__ */ $.structField("LastRunTime", "time.Time", [0], 0, true), /* @__PURE__ */ $.structField("NextRunTime", "time.Time", [1], 24, true), /* @__PURE__ */ $.structField("TotalRuns", /* @__PURE__ */ $.basicType("int64"), [2], 48, true), /* @__PURE__ */ $.structField("CreateTime", "time.Time", [3], 56, true), /* @__PURE__ */ $.structField("LastUpdateTime", "time.Time", [4], 80, true), /* @__PURE__ */ $.structField("OngoingBackfills", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("internal.BackfillInfo")), [5], 104, true), /* @__PURE__ */ $.structField("MissedRuns", /* @__PURE__ */ $.basicType("int64"), [6], 128, true), /* @__PURE__ */ $.structField("SkippedRuns", /* @__PURE__ */ $.basicType("int64"), [7], 136, true), /* @__PURE__ */ $.structField("BufferedFireCount", /* @__PURE__ */ $.basicType("int64"), [8], 144, true), /* @__PURE__ */ $.structField("RunningWorkflowCount", /* @__PURE__ */ $.basicType("int64"), [9], 152, true)]
	)
}

export class ScheduleListEntry {
	public get ScheduleID(): string {
		return this._fields.ScheduleID
	}

	public set ScheduleID(value: string) {
		this._fields.ScheduleID = value
	}

	public get WorkflowType(): string {
		return this._fields.WorkflowType
	}

	public set WorkflowType(value: string) {
		this._fields.WorkflowType = value
	}

	public get State(): ScheduleState | $.VarRef<ScheduleState> | null {
		return this._fields.State
	}

	public set State(value: ScheduleState | $.VarRef<ScheduleState> | null) {
		this._fields.State = value
	}

	public get CronExpression(): string {
		return this._fields.CronExpression
	}

	public set CronExpression(value: string) {
		this._fields.CronExpression = value
	}

	public _fields: {
		ScheduleID: string
		WorkflowType: string
		State: ScheduleState | $.VarRef<ScheduleState> | null
		CronExpression: string
	}

	constructor(init?: Partial<{ScheduleID?: string, WorkflowType?: string, State?: ScheduleState | $.VarRef<ScheduleState> | null, CronExpression?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			ScheduleID: init?.ScheduleID ?? ("" as string),
			WorkflowType: init?.WorkflowType ?? ("" as string),
			State: init?.State ?? (null! as ScheduleState | $.VarRef<ScheduleState> | null),
			CronExpression: init?.CronExpression ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScheduleListEntry {
		return new ScheduleListEntry(this, true)
	}

	public __goscriptAssign(source: ScheduleListEntry): void {
		const target = this._fields
		const values = source._fields
		target.ScheduleID = values.ScheduleID
		target.WorkflowType = values.WorkflowType
		target.State = values.State
		target.CronExpression = values.CronExpression
	}

	static __typeInfo = $.registerStructType(
		"internal.ScheduleListEntry",
		() => new ScheduleListEntry(),
		() => [],
		ScheduleListEntry,
		() => [/* @__PURE__ */ $.structField("ScheduleID", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("WorkflowType", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("State", /* @__PURE__ */ $.pointerType("internal.ScheduleState"), [2], 32, true), /* @__PURE__ */ $.structField("CronExpression", /* @__PURE__ */ $.basicType("string"), [3], 40, true)]
	)
}

export class CreateScheduleRequest {
	// ScheduleID is the client-provided unique identifier for the schedule within the domain. Required.
	public get ScheduleID(): string {
		return this._fields.ScheduleID
	}

	public set ScheduleID(value: string) {
		this._fields.ScheduleID = value
	}

	// Spec defines when the schedule triggers. Required.
	public get Spec(): ScheduleSpec | $.VarRef<ScheduleSpec> | null {
		return this._fields.Spec
	}

	public set Spec(value: ScheduleSpec | $.VarRef<ScheduleSpec> | null) {
		this._fields.Spec = value
	}

	// Action defines what the schedule does when it triggers. Required.
	public get Action(): ScheduleAction | $.VarRef<ScheduleAction> | null {
		return this._fields.Action
	}

	public set Action(value: ScheduleAction | $.VarRef<ScheduleAction> | null) {
		this._fields.Action = value
	}

	// Policies controls the runtime behavior. Optional; server defaults apply for unset fields.
	public get Policies(): SchedulePolicies | $.VarRef<SchedulePolicies> | null {
		return this._fields.Policies
	}

	public set Policies(value: SchedulePolicies | $.VarRef<SchedulePolicies> | null) {
		this._fields.Policies = value
	}

	// Memo is metadata attached to the schedule itself (not to each triggered run).
	// Values are encoded using the DataConverter configured on the ScheduleClient. Optional.
	public get Memo(): globalThis.Map<string, any> | null {
		return this._fields.Memo
	}

	public set Memo(value: globalThis.Map<string, any> | null) {
		this._fields.Memo = value
	}

	// SearchAttributes are indexed attributes on the schedule itself. Optional.
	// Values are JSON-encoded.
	public get SearchAttributes(): globalThis.Map<string, any> | null {
		return this._fields.SearchAttributes
	}

	public set SearchAttributes(value: globalThis.Map<string, any> | null) {
		this._fields.SearchAttributes = value
	}

	// State, if set and Paused is true, starts the schedule in a paused state
	// immediately without requiring a subsequent PauseSchedule call. Optional.
	public get State(): ScheduleState | $.VarRef<ScheduleState> | null {
		return this._fields.State
	}

	public set State(value: ScheduleState | $.VarRef<ScheduleState> | null) {
		this._fields.State = value
	}

	public _fields: {
		ScheduleID: string
		Spec: ScheduleSpec | $.VarRef<ScheduleSpec> | null
		Action: ScheduleAction | $.VarRef<ScheduleAction> | null
		Policies: SchedulePolicies | $.VarRef<SchedulePolicies> | null
		Memo: globalThis.Map<string, any> | null
		SearchAttributes: globalThis.Map<string, any> | null
		State: ScheduleState | $.VarRef<ScheduleState> | null
	}

	constructor(init?: Partial<{ScheduleID?: string, Spec?: ScheduleSpec | $.VarRef<ScheduleSpec> | null, Action?: ScheduleAction | $.VarRef<ScheduleAction> | null, Policies?: SchedulePolicies | $.VarRef<SchedulePolicies> | null, Memo?: globalThis.Map<string, any> | null, SearchAttributes?: globalThis.Map<string, any> | null, State?: ScheduleState | $.VarRef<ScheduleState> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ScheduleID: init?.ScheduleID ?? ("" as string),
			Spec: init?.Spec ?? (null! as ScheduleSpec | $.VarRef<ScheduleSpec> | null),
			Action: init?.Action ?? (null! as ScheduleAction | $.VarRef<ScheduleAction> | null),
			Policies: init?.Policies ?? (null! as SchedulePolicies | $.VarRef<SchedulePolicies> | null),
			Memo: init?.Memo ?? (null! as globalThis.Map<string, any> | null),
			SearchAttributes: init?.SearchAttributes ?? (null! as globalThis.Map<string, any> | null),
			State: init?.State ?? (null! as ScheduleState | $.VarRef<ScheduleState> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CreateScheduleRequest {
		return new CreateScheduleRequest(this, true)
	}

	public __goscriptAssign(source: CreateScheduleRequest): void {
		const target = this._fields
		const values = source._fields
		target.ScheduleID = values.ScheduleID
		target.Spec = values.Spec
		target.Action = values.Action
		target.Policies = values.Policies
		target.Memo = values.Memo
		target.SearchAttributes = values.SearchAttributes
		target.State = values.State
	}

	static __typeInfo = $.registerStructType(
		"internal.CreateScheduleRequest",
		() => new CreateScheduleRequest(),
		() => [],
		CreateScheduleRequest,
		() => [/* @__PURE__ */ $.structField("ScheduleID", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Spec", /* @__PURE__ */ $.pointerType("internal.ScheduleSpec"), [1], 16, true), /* @__PURE__ */ $.structField("Action", /* @__PURE__ */ $.pointerType("internal.ScheduleAction"), [2], 24, true), /* @__PURE__ */ $.structField("Policies", /* @__PURE__ */ $.pointerType("internal.SchedulePolicies"), [3], 32, true), /* @__PURE__ */ $.structField("Memo", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }), [4], 40, true), /* @__PURE__ */ $.structField("SearchAttributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }), [5], 48, true), /* @__PURE__ */ $.structField("State", /* @__PURE__ */ $.pointerType("internal.ScheduleState"), [6], 56, true)]
	)
}

export class ScheduleUpdate {
	// Spec is the schedule's trigger specification.
	public get Spec(): ScheduleSpec | $.VarRef<ScheduleSpec> | null {
		return this._fields.Spec
	}

	public set Spec(value: ScheduleSpec | $.VarRef<ScheduleSpec> | null) {
		this._fields.Spec = value
	}

	// Action is the schedule's action (reuses the read type; Memo/SearchAttributes are raw bytes).
	public get Action(): ScheduleActionDescription | $.VarRef<ScheduleActionDescription> | null {
		return this._fields.Action
	}

	public set Action(value: ScheduleActionDescription | $.VarRef<ScheduleActionDescription> | null) {
		this._fields.Action = value
	}

	// Policies are the schedule's runtime policies.
	public get Policies(): SchedulePolicies | $.VarRef<SchedulePolicies> | null {
		return this._fields.Policies
	}

	public set Policies(value: SchedulePolicies | $.VarRef<SchedulePolicies> | null) {
		this._fields.Policies = value
	}

	// SearchAttributes are the schedule-level indexed attributes, as raw encoded bytes.
	public get SearchAttributes(): globalThis.Map<string, $.Slice<number>> | null {
		return this._fields.SearchAttributes
	}

	public set SearchAttributes(value: globalThis.Map<string, $.Slice<number>> | null) {
		this._fields.SearchAttributes = value
	}

	// dc encodes values for the Set* helpers; populated by the SDK.
	public get dc(): __goscript_encoded.DataConverter | null {
		return this._fields.dc
	}

	public set dc(value: __goscript_encoded.DataConverter | null) {
		this._fields.dc = value
	}

	public _fields: {
		Spec: ScheduleSpec | $.VarRef<ScheduleSpec> | null
		Action: ScheduleActionDescription | $.VarRef<ScheduleActionDescription> | null
		Policies: SchedulePolicies | $.VarRef<SchedulePolicies> | null
		SearchAttributes: globalThis.Map<string, $.Slice<number>> | null
		dc: __goscript_encoded.DataConverter | null
	}

	constructor(init?: Partial<{Spec?: ScheduleSpec | $.VarRef<ScheduleSpec> | null, Action?: ScheduleActionDescription | $.VarRef<ScheduleActionDescription> | null, Policies?: SchedulePolicies | $.VarRef<SchedulePolicies> | null, SearchAttributes?: globalThis.Map<string, $.Slice<number>> | null, dc?: __goscript_encoded.DataConverter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Spec: init?.Spec ?? (null! as ScheduleSpec | $.VarRef<ScheduleSpec> | null),
			Action: init?.Action ?? (null! as ScheduleActionDescription | $.VarRef<ScheduleActionDescription> | null),
			Policies: init?.Policies ?? (null! as SchedulePolicies | $.VarRef<SchedulePolicies> | null),
			SearchAttributes: init?.SearchAttributes ?? (null! as globalThis.Map<string, $.Slice<number>> | null),
			dc: init?.dc ?? (null! as __goscript_encoded.DataConverter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ScheduleUpdate {
		return new ScheduleUpdate(this, true)
	}

	public __goscriptAssign(source: ScheduleUpdate): void {
		const target = this._fields
		const values = source._fields
		target.Spec = values.Spec
		target.Action = values.Action
		target.Policies = values.Policies
		target.SearchAttributes = values.SearchAttributes
		target.dc = $.assignFieldValue(target.dc, values.dc, "internal.DataConverter")
	}

	public async SetActionMemo(memo: globalThis.Map<string, any> | null): globalThis.Promise<$.GoError> {
		let u: ScheduleUpdate | $.VarRef<ScheduleUpdate> | null = this;
		const u$: ScheduleUpdate = u == null ? $.pointerTarget<ScheduleUpdate>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<ScheduleUpdate>(u)
		if (((u$ as ScheduleUpdate).Action == null) || ($.pointerValue<ScheduleActionDescription>((u$ as ScheduleUpdate).Action).StartWorkflow == null)) {
			return errors.New("SetActionMemo: Action.StartWorkflow is nil")
		}
		let __goscriptTuple0: any = await __goscript_internal_schedule_convert_thrift.encodeMemo((u$ as ScheduleUpdate).dc, memo)
		let encoded: globalThis.Map<string, $.Slice<number>> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return err
		}
		$.pointerValue<ScheduleStartWorkflowActionDescription>($.pointerValue<ScheduleActionDescription>((u$ as ScheduleUpdate).Action).StartWorkflow).Memo = encoded
		return null
	}

	public async SetActionSearchAttributes(searchAttributes: globalThis.Map<string, any> | null): globalThis.Promise<$.GoError> {
		let u: ScheduleUpdate | $.VarRef<ScheduleUpdate> | null = this;
		const u$: ScheduleUpdate = u == null ? $.pointerTarget<ScheduleUpdate>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<ScheduleUpdate>(u)
		if (((u$ as ScheduleUpdate).Action == null) || ($.pointerValue<ScheduleActionDescription>((u$ as ScheduleUpdate).Action).StartWorkflow == null)) {
			return errors.New("SetActionSearchAttributes: Action.StartWorkflow is nil")
		}
		let __goscriptTuple1: any = await __goscript_internal_schedule_convert_thrift.encodeSearchAttributes(searchAttributes)
		let encoded: globalThis.Map<string, $.Slice<number>> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return err
		}
		$.pointerValue<ScheduleStartWorkflowActionDescription>($.pointerValue<ScheduleActionDescription>((u$ as ScheduleUpdate).Action).StartWorkflow).SearchAttributes = encoded
		return null
	}

	public async SetSearchAttributes(searchAttributes: globalThis.Map<string, any> | null): globalThis.Promise<$.GoError> {
		let u: ScheduleUpdate | $.VarRef<ScheduleUpdate> | null = this;
		let __goscriptTuple2: any = await __goscript_internal_schedule_convert_thrift.encodeSearchAttributes(searchAttributes)
		let encoded: globalThis.Map<string, $.Slice<number>> | null = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			return err
		}
		$.pointerValue<ScheduleUpdate>(u).SearchAttributes = encoded
		return null
	}

	static __typeInfo = $.registerStructType(
		"internal.ScheduleUpdate",
		() => new ScheduleUpdate(),
		() => [$.methodSignature("SetActionMemo", [["memo", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("SetActionSearchAttributes", [["searchAttributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("SetSearchAttributes", [["searchAttributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })]], ["error"], true)],
		ScheduleUpdate,
		() => [/* @__PURE__ */ $.structField("Spec", /* @__PURE__ */ $.pointerType("internal.ScheduleSpec"), [0], 0, true), /* @__PURE__ */ $.structField("Action", /* @__PURE__ */ $.pointerType("internal.ScheduleActionDescription"), [1], 8, true), /* @__PURE__ */ $.structField("Policies", /* @__PURE__ */ $.pointerType("internal.SchedulePolicies"), [2], 16, true), /* @__PURE__ */ $.structField("SearchAttributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [3], 24, true), /* @__PURE__ */ $.structField("dc", "internal.DataConverter", [4], 32, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class BackfillRequest {
	// StartTime is the beginning of the backfill window. Required.
	public get StartTime(): time.Time {
		return this._fields.StartTime
	}

	public set StartTime(value: time.Time) {
		this._fields.StartTime = value
	}

	// EndTime is the end of the backfill window. Required.
	public get EndTime(): time.Time {
		return this._fields.EndTime
	}

	public set EndTime(value: time.Time) {
		this._fields.EndTime = value
	}

	// OverlapPolicy controls how backfill runs interact with any currently active runs.
	// Unspecified defers to the schedule's configured OverlapPolicy.
	public get OverlapPolicy(): ScheduleOverlapPolicy {
		return this._fields.OverlapPolicy
	}

	public set OverlapPolicy(value: ScheduleOverlapPolicy) {
		this._fields.OverlapPolicy = value
	}

	// BackfillID is a client-provided identifier used for idempotency and progress tracking.
	// The server generates a UUID if empty.
	public get BackfillID(): string {
		return this._fields.BackfillID
	}

	public set BackfillID(value: string) {
		this._fields.BackfillID = value
	}

	public _fields: {
		StartTime: time.Time
		EndTime: time.Time
		OverlapPolicy: ScheduleOverlapPolicy
		BackfillID: string
	}

	constructor(init?: Partial<{StartTime?: time.Time, EndTime?: time.Time, OverlapPolicy?: ScheduleOverlapPolicy, BackfillID?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			StartTime: init?.StartTime ? $.markAsStructValue($.cloneStructValue(init.StartTime)) : $.markAsStructValue(new time.Time()),
			EndTime: init?.EndTime ? $.markAsStructValue($.cloneStructValue(init.EndTime)) : $.markAsStructValue(new time.Time()),
			OverlapPolicy: init?.OverlapPolicy ?? (0 as ScheduleOverlapPolicy),
			BackfillID: init?.BackfillID ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): BackfillRequest {
		return new BackfillRequest(this, true)
	}

	public __goscriptAssign(source: BackfillRequest): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.StartTime, values.StartTime)
		$.assignStruct(target.EndTime, values.EndTime)
		target.OverlapPolicy = values.OverlapPolicy
		target.BackfillID = values.BackfillID
	}

	static __typeInfo = $.registerStructType(
		"internal.BackfillRequest",
		() => new BackfillRequest(),
		() => [],
		BackfillRequest,
		() => [/* @__PURE__ */ $.structField("StartTime", "time.Time", [0], 0, true), /* @__PURE__ */ $.structField("EndTime", "time.Time", [1], 24, true), /* @__PURE__ */ $.structField("OverlapPolicy", /* @__PURE__ */ $.basicType("int", "internal.ScheduleOverlapPolicy"), [2], 48, true), /* @__PURE__ */ $.structField("BackfillID", /* @__PURE__ */ $.basicType("string"), [3], 56, true)]
	)
}

export class DescribeScheduleResponse {
	public get Spec(): ScheduleSpec | $.VarRef<ScheduleSpec> | null {
		return this._fields.Spec
	}

	public set Spec(value: ScheduleSpec | $.VarRef<ScheduleSpec> | null) {
		this._fields.Spec = value
	}

	public get Action(): ScheduleActionDescription | $.VarRef<ScheduleActionDescription> | null {
		return this._fields.Action
	}

	public set Action(value: ScheduleActionDescription | $.VarRef<ScheduleActionDescription> | null) {
		this._fields.Action = value
	}

	public get Policies(): SchedulePolicies | $.VarRef<SchedulePolicies> | null {
		return this._fields.Policies
	}

	public set Policies(value: SchedulePolicies | $.VarRef<SchedulePolicies> | null) {
		this._fields.Policies = value
	}

	public get State(): ScheduleState | $.VarRef<ScheduleState> | null {
		return this._fields.State
	}

	public set State(value: ScheduleState | $.VarRef<ScheduleState> | null) {
		this._fields.State = value
	}

	public get Info(): ScheduleInfo | $.VarRef<ScheduleInfo> | null {
		return this._fields.Info
	}

	public set Info(value: ScheduleInfo | $.VarRef<ScheduleInfo> | null) {
		this._fields.Info = value
	}

	// Memo contains the raw DataConverter-encoded bytes of each memo field.
	// Decode individual values using your configured DataConverter.
	public get Memo(): globalThis.Map<string, $.Slice<number>> | null {
		return this._fields.Memo
	}

	public set Memo(value: globalThis.Map<string, $.Slice<number>> | null) {
		this._fields.Memo = value
	}

	// SearchAttributes contains the raw JSON-encoded bytes of each search attribute.
	public get SearchAttributes(): globalThis.Map<string, $.Slice<number>> | null {
		return this._fields.SearchAttributes
	}

	public set SearchAttributes(value: globalThis.Map<string, $.Slice<number>> | null) {
		this._fields.SearchAttributes = value
	}

	public _fields: {
		Spec: ScheduleSpec | $.VarRef<ScheduleSpec> | null
		Action: ScheduleActionDescription | $.VarRef<ScheduleActionDescription> | null
		Policies: SchedulePolicies | $.VarRef<SchedulePolicies> | null
		State: ScheduleState | $.VarRef<ScheduleState> | null
		Info: ScheduleInfo | $.VarRef<ScheduleInfo> | null
		Memo: globalThis.Map<string, $.Slice<number>> | null
		SearchAttributes: globalThis.Map<string, $.Slice<number>> | null
	}

	constructor(init?: Partial<{Spec?: ScheduleSpec | $.VarRef<ScheduleSpec> | null, Action?: ScheduleActionDescription | $.VarRef<ScheduleActionDescription> | null, Policies?: SchedulePolicies | $.VarRef<SchedulePolicies> | null, State?: ScheduleState | $.VarRef<ScheduleState> | null, Info?: ScheduleInfo | $.VarRef<ScheduleInfo> | null, Memo?: globalThis.Map<string, $.Slice<number>> | null, SearchAttributes?: globalThis.Map<string, $.Slice<number>> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Spec: init?.Spec ?? (null! as ScheduleSpec | $.VarRef<ScheduleSpec> | null),
			Action: init?.Action ?? (null! as ScheduleActionDescription | $.VarRef<ScheduleActionDescription> | null),
			Policies: init?.Policies ?? (null! as SchedulePolicies | $.VarRef<SchedulePolicies> | null),
			State: init?.State ?? (null! as ScheduleState | $.VarRef<ScheduleState> | null),
			Info: init?.Info ?? (null! as ScheduleInfo | $.VarRef<ScheduleInfo> | null),
			Memo: init?.Memo ?? (null! as globalThis.Map<string, $.Slice<number>> | null),
			SearchAttributes: init?.SearchAttributes ?? (null! as globalThis.Map<string, $.Slice<number>> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DescribeScheduleResponse {
		return new DescribeScheduleResponse(this, true)
	}

	public __goscriptAssign(source: DescribeScheduleResponse): void {
		const target = this._fields
		const values = source._fields
		target.Spec = values.Spec
		target.Action = values.Action
		target.Policies = values.Policies
		target.State = values.State
		target.Info = values.Info
		target.Memo = values.Memo
		target.SearchAttributes = values.SearchAttributes
	}

	static __typeInfo = $.registerStructType(
		"internal.DescribeScheduleResponse",
		() => new DescribeScheduleResponse(),
		() => [],
		DescribeScheduleResponse,
		() => [/* @__PURE__ */ $.structField("Spec", /* @__PURE__ */ $.pointerType("internal.ScheduleSpec"), [0], 0, true), /* @__PURE__ */ $.structField("Action", /* @__PURE__ */ $.pointerType("internal.ScheduleActionDescription"), [1], 8, true), /* @__PURE__ */ $.structField("Policies", /* @__PURE__ */ $.pointerType("internal.SchedulePolicies"), [2], 16, true), /* @__PURE__ */ $.structField("State", /* @__PURE__ */ $.pointerType("internal.ScheduleState"), [3], 24, true), /* @__PURE__ */ $.structField("Info", /* @__PURE__ */ $.pointerType("internal.ScheduleInfo"), [4], 32, true), /* @__PURE__ */ $.structField("Memo", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [5], 40, true), /* @__PURE__ */ $.structField("SearchAttributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), [6], 48, true)]
	)
}

export class ListSchedulesResponse {
	public get Schedules(): $.Slice<ScheduleListEntry | $.VarRef<ScheduleListEntry> | null> {
		return this._fields.Schedules
	}

	public set Schedules(value: $.Slice<ScheduleListEntry | $.VarRef<ScheduleListEntry> | null>) {
		this._fields.Schedules = value
	}

	public get NextPageToken(): $.Slice<number> {
		return this._fields.NextPageToken
	}

	public set NextPageToken(value: $.Slice<number>) {
		this._fields.NextPageToken = value
	}

	public _fields: {
		Schedules: $.Slice<ScheduleListEntry | $.VarRef<ScheduleListEntry> | null>
		NextPageToken: $.Slice<number>
	}

	constructor(init?: Partial<{Schedules?: $.Slice<ScheduleListEntry | $.VarRef<ScheduleListEntry> | null>, NextPageToken?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			Schedules: init?.Schedules ?? (null! as $.Slice<ScheduleListEntry | $.VarRef<ScheduleListEntry> | null>),
			NextPageToken: init?.NextPageToken ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListSchedulesResponse {
		return new ListSchedulesResponse(this, true)
	}

	public __goscriptAssign(source: ListSchedulesResponse): void {
		const target = this._fields
		const values = source._fields
		target.Schedules = values.Schedules
		target.NextPageToken = values.NextPageToken
	}

	static __typeInfo = $.registerStructType(
		"internal.ListSchedulesResponse",
		() => new ListSchedulesResponse(),
		() => [],
		ListSchedulesResponse,
		() => [/* @__PURE__ */ $.structField("Schedules", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("internal.ScheduleListEntry")), [0], 0, true), /* @__PURE__ */ $.structField("NextPageToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 24, true)]
	)
}

export const ScheduleOverlapPolicyUnspecified: ScheduleOverlapPolicy = 0

export const ScheduleOverlapPolicySkipNew: ScheduleOverlapPolicy = 1

export const ScheduleOverlapPolicyBuffer: ScheduleOverlapPolicy = 2

export const ScheduleOverlapPolicyConcurrent: ScheduleOverlapPolicy = 3

export const ScheduleOverlapPolicyCancelPrevious: ScheduleOverlapPolicy = 4

export const ScheduleOverlapPolicyTerminatePrevious: ScheduleOverlapPolicy = 5

export const ScheduleCatchUpPolicyUnspecified: ScheduleCatchUpPolicy = 0

export const ScheduleCatchUpPolicySkip: ScheduleCatchUpPolicy = 1

export const ScheduleCatchUpPolicyOne: ScheduleCatchUpPolicy = 2

export const ScheduleCatchUpPolicyAll: ScheduleCatchUpPolicy = 3
