// Generated file based on worker.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import * as debug from "@goscript/go.uber.org/cadence/internal/common/debug/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as auth from "@goscript/go.uber.org/cadence/internal/common/auth/index.js"

import type * as shadower from "@goscript/go.uber.org/cadence/.gen/go/shadower/index.js"

import * as backoff from "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as worker from "@goscript/go.uber.org/cadence/internal/worker/index.js"

import * as rate from "@goscript/golang.org/x/time/rate/index.js"

import type * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import * as __goscript_internal_poller_autoscaler from "./internal_poller_autoscaler.gs.ts"

import * as __goscript_internal_task_pollers from "./internal_task_pollers.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_replayer from "./workflow_replayer.gs.ts"

import * as __goscript_workflow_shadower from "./workflow_shadower.gs.ts"

import * as __goscript_workflow_shadower_worker from "./workflow_shadower_worker.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/cadence/internal/common/debug/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/auth/index.js"
import "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/go.uber.org/cadence/internal/worker/index.js"
import "@goscript/golang.org/x/time/rate/index.js"
import "@goscript/sync/index.js"
import "./activity.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./headers.gs.ts"
import "./interceptors.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_poller_autoscaler.gs.ts"
import "./internal_task_pollers.gs.ts"
import "./internal_utils.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_worker_base.gs.ts"
import "./internal_workflow.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./workflow.gs.ts"
import "./workflow_replayer.gs.ts"
import "./workflow_shadower.gs.ts"
import "./workflow_shadower_worker.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.Worker", "internal.Registry", "internal.WorkflowRegistry", "internal.ActivityRegistry", "internal.WorkerOptions", "internal.WorkerBugPorts", "internal.NonDeterministicWorkflowPolicy"])

export type Worker = {
	GetRegisteredActivities(): $.Slice<__goscript_activity.RegistryActivityInfo | null> | globalThis.Promise<$.Slice<__goscript_activity.RegistryActivityInfo | null>>
	GetRegisteredWorkflows(): $.Slice<__goscript_workflow.RegistryWorkflowInfo | null> | globalThis.Promise<$.Slice<__goscript_workflow.RegistryWorkflowInfo | null>>
	RegisterActivity(a: any): void
	RegisterActivityWithOptions(a: any, options: __goscript_activity.RegisterActivityOptions): void
	RegisterWorkflow(w: any): void
	RegisterWorkflowWithOptions(w: any, options: __goscript_workflow.RegisterWorkflowOptions): void
	Run(): $.GoError | globalThis.Promise<$.GoError>
	Start(): $.GoError | globalThis.Promise<$.GoError>
	Stop(): void
}

$.registerInterfaceType(
	"internal.Worker",
	null,
	[$.methodSignature("GetRegisteredActivities", [], [/* @__PURE__ */ $.sliceType("internal.RegistryActivityInfo")]), $.methodSignature("GetRegisteredWorkflows", [], [/* @__PURE__ */ $.sliceType("internal.RegistryWorkflowInfo")]), $.methodSignature("RegisterActivity", [["a", { kind: $.TypeKind.Interface, methods: [] }]]), $.methodSignature("RegisterActivityWithOptions", [["a", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterActivityOptions"]]), $.methodSignature("RegisterWorkflow", [["w", { kind: $.TypeKind.Interface, methods: [] }]]), $.methodSignature("RegisterWorkflowWithOptions", [["w", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterWorkflowOptions"]]), $.methodSignature("Run", [], ["error"]), $.methodSignature("Start", [], ["error"]), $.methodSignature("Stop")]
);

export type Registry = {
	GetRegisteredActivities(): $.Slice<__goscript_activity.RegistryActivityInfo | null> | globalThis.Promise<$.Slice<__goscript_activity.RegistryActivityInfo | null>>
	GetRegisteredWorkflows(): $.Slice<__goscript_workflow.RegistryWorkflowInfo | null> | globalThis.Promise<$.Slice<__goscript_workflow.RegistryWorkflowInfo | null>>
	RegisterActivity(a: any): void
	RegisterActivityWithOptions(a: any, options: __goscript_activity.RegisterActivityOptions): void
	RegisterWorkflow(w: any): void
	RegisterWorkflowWithOptions(w: any, options: __goscript_workflow.RegisterWorkflowOptions): void
}

$.registerInterfaceType(
	"internal.Registry",
	null,
	[$.methodSignature("GetRegisteredActivities", [], [/* @__PURE__ */ $.sliceType("internal.RegistryActivityInfo")]), $.methodSignature("GetRegisteredWorkflows", [], [/* @__PURE__ */ $.sliceType("internal.RegistryWorkflowInfo")]), $.methodSignature("RegisterActivity", [["a", { kind: $.TypeKind.Interface, methods: [] }]]), $.methodSignature("RegisterActivityWithOptions", [["a", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterActivityOptions"]]), $.methodSignature("RegisterWorkflow", [["w", { kind: $.TypeKind.Interface, methods: [] }]]), $.methodSignature("RegisterWorkflowWithOptions", [["w", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterWorkflowOptions"]])]
);

export type WorkflowRegistry = {
	GetRegisteredWorkflows(): $.Slice<__goscript_workflow.RegistryWorkflowInfo | null> | globalThis.Promise<$.Slice<__goscript_workflow.RegistryWorkflowInfo | null>>
	RegisterWorkflow(w: any): void
	RegisterWorkflowWithOptions(w: any, options: __goscript_workflow.RegisterWorkflowOptions): void
}

$.registerInterfaceType(
	"internal.WorkflowRegistry",
	null,
	[$.methodSignature("GetRegisteredWorkflows", [], [/* @__PURE__ */ $.sliceType("internal.RegistryWorkflowInfo")]), $.methodSignature("RegisterWorkflow", [["w", { kind: $.TypeKind.Interface, methods: [] }]]), $.methodSignature("RegisterWorkflowWithOptions", [["w", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterWorkflowOptions"]])]
);

export type ActivityRegistry = {
	GetRegisteredActivities(): $.Slice<__goscript_activity.RegistryActivityInfo | null> | globalThis.Promise<$.Slice<__goscript_activity.RegistryActivityInfo | null>>
	RegisterActivity(a: any): void
	RegisterActivityWithOptions(a: any, options: __goscript_activity.RegisterActivityOptions): void
}

$.registerInterfaceType(
	"internal.ActivityRegistry",
	null,
	[$.methodSignature("GetRegisteredActivities", [], [/* @__PURE__ */ $.sliceType("internal.RegistryActivityInfo")]), $.methodSignature("RegisterActivity", [["a", { kind: $.TypeKind.Interface, methods: [] }]]), $.methodSignature("RegisterActivityWithOptions", [["a", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterActivityOptions"]])]
);

export type NonDeterministicWorkflowPolicy = number

export class WorkerBugPorts {
	// Optional: Disable strict non-determinism checks for workflow.
	// There are some non-determinism cases which are missed by original implementation and a fix is on the way.
	// The fix will be toggleable by this parameter.
	// Default: false, which means strict non-determinism checks are enabled.
	//
	// Deprecated: All bugports are always deprecated and may be removed at any time
	public get DisableStrictNonDeterminismCheck(): boolean {
		return this._fields.DisableStrictNonDeterminismCheck
	}

	public set DisableStrictNonDeterminismCheck(value: boolean) {
		this._fields.DisableStrictNonDeterminismCheck = value
	}

	public _fields: {
		DisableStrictNonDeterminismCheck: boolean
	}

	constructor(init?: Partial<{DisableStrictNonDeterminismCheck?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			DisableStrictNonDeterminismCheck: init?.DisableStrictNonDeterminismCheck ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkerBugPorts {
		return new WorkerBugPorts(this, true)
	}

	public __goscriptAssign(source: WorkerBugPorts): void {
		const target = this._fields
		const values = source._fields
		target.DisableStrictNonDeterminismCheck = values.DisableStrictNonDeterminismCheck
	}

	static __typeInfo = $.registerStructType(
		"internal.WorkerBugPorts",
		() => new WorkerBugPorts(),
		() => [],
		WorkerBugPorts,
		() => [/* @__PURE__ */ $.structField("DisableStrictNonDeterminismCheck", /* @__PURE__ */ $.basicType("bool"), [0], 0, true)]
	)
}

export class WorkerOptions {
	// Optional: To set the maximum concurrent activity executions this worker can have.
	// The zero value of this uses the default value.
	// default: defaultMaxConcurrentActivityExecutionSize(1k)
	public get MaxConcurrentActivityExecutionSize(): number {
		return this._fields.MaxConcurrentActivityExecutionSize
	}

	public set MaxConcurrentActivityExecutionSize(value: number) {
		this._fields.MaxConcurrentActivityExecutionSize = value
	}

	// Optional: Sets the rate limiting on number of activities that can be executed per second per
	// worker. This can be used to limit resources used by the worker.
	// Notice that the number is represented in float, so that you can set it to less than
	// 1 if needed. For example, set the number to 0.1 means you want your activity to be executed
	// once for every 10 seconds. This can be used to protect down stream services from flooding.
	// The zero value of this uses the default value. Default: 100k
	public get WorkerActivitiesPerSecond(): number {
		return this._fields.WorkerActivitiesPerSecond
	}

	public set WorkerActivitiesPerSecond(value: number) {
		this._fields.WorkerActivitiesPerSecond = value
	}

	// Optional: To set the maximum concurrent local activity executions this worker can have.
	// The zero value of this uses the default value.
	// default: 1k
	public get MaxConcurrentLocalActivityExecutionSize(): number {
		return this._fields.MaxConcurrentLocalActivityExecutionSize
	}

	public set MaxConcurrentLocalActivityExecutionSize(value: number) {
		this._fields.MaxConcurrentLocalActivityExecutionSize = value
	}

	// Optional: Sets the rate limiting on number of local activities that can be executed per second per
	// worker. This can be used to limit resources used by the worker.
	// Notice that the number is represented in float, so that you can set it to less than
	// 1 if needed. For example, set the number to 0.1 means you want your local activity to be executed
	// once for every 10 seconds. This can be used to protect down stream services from flooding.
	// The zero value of this uses the default value. Default: 100k
	public get WorkerLocalActivitiesPerSecond(): number {
		return this._fields.WorkerLocalActivitiesPerSecond
	}

	public set WorkerLocalActivitiesPerSecond(value: number) {
		this._fields.WorkerLocalActivitiesPerSecond = value
	}

	// Optional: Sets the rate limiting on number of activities that can be executed per second.
	// This is managed by the server and controls activities per second for your entire tasklist
	// whereas WorkerActivityTasksPerSecond controls activities only per worker.
	// Notice that the number is represented in float, so that you can set it to less than
	// 1 if needed. For example, set the number to 0.1 means you want your activity to be executed
	// once for every 10 seconds. This can be used to protect down stream services from flooding.
	// The zero value of this uses the default value. Default: 100k
	public get TaskListActivitiesPerSecond(): number {
		return this._fields.TaskListActivitiesPerSecond
	}

	public set TaskListActivitiesPerSecond(value: number) {
		this._fields.TaskListActivitiesPerSecond = value
	}

	// optional: Sets the maximum number of goroutines that will concurrently poll the
	// cadence-server to retrieve activity tasks. Changing this value will affect the
	// rate at which the worker is able to consume tasks from a task list.
	// Default value is 2
	// NOTE: if AutoScalerOptions.Enabled is set to true, this value will be ignored and AutoScalerOptions.PollerMaxCount will be used instead
	public get MaxConcurrentActivityTaskPollers(): number {
		return this._fields.MaxConcurrentActivityTaskPollers
	}

	public set MaxConcurrentActivityTaskPollers(value: number) {
		this._fields.MaxConcurrentActivityTaskPollers = value
	}

	// optional: Sets the minimum number of goroutines that will concurrently poll the
	// cadence-server to retrieve activity tasks. Changing this value will NOT affect the
	// rate at which the worker is able to consume tasks from a task list,
	// unless FeatureFlags.PollerAutoScalerEnabled is set to true.
	// Default value is 1
	// Deprecated: No effect and use AutoScalerOptions instead.
	public get MinConcurrentActivityTaskPollers(): number {
		return this._fields.MinConcurrentActivityTaskPollers
	}

	public set MinConcurrentActivityTaskPollers(value: number) {
		this._fields.MinConcurrentActivityTaskPollers = value
	}

	// Optional: To set the maximum concurrent decision task executions this worker can have.
	// The zero value of this uses the default value.
	// default: defaultMaxConcurrentTaskExecutionSize(1k)
	public get MaxConcurrentDecisionTaskExecutionSize(): number {
		return this._fields.MaxConcurrentDecisionTaskExecutionSize
	}

	public set MaxConcurrentDecisionTaskExecutionSize(value: number) {
		this._fields.MaxConcurrentDecisionTaskExecutionSize = value
	}

	// Optional: Sets the rate limiting on number of decision tasks that can be executed per second per
	// worker. This can be used to limit resources used by the worker.
	// The zero value of this uses the default value. Default: 100k
	public get WorkerDecisionTasksPerSecond(): number {
		return this._fields.WorkerDecisionTasksPerSecond
	}

	public set WorkerDecisionTasksPerSecond(value: number) {
		this._fields.WorkerDecisionTasksPerSecond = value
	}

	// optional: Sets the maximum number of goroutines that will concurrently poll the
	// cadence-server to retrieve decision tasks. Changing this value will affect the
	// rate at which the worker is able to consume tasks from a task list.
	// Default value is 2
	// NOTE: if AutoScalerOptions.Enabled is set to true, this value will be the initial value of poller count that scales automatically
	public get MaxConcurrentDecisionTaskPollers(): number {
		return this._fields.MaxConcurrentDecisionTaskPollers
	}

	public set MaxConcurrentDecisionTaskPollers(value: number) {
		this._fields.MaxConcurrentDecisionTaskPollers = value
	}

	// optional: Sets the minimum number of goroutines that will concurrently poll the
	// cadence-server to retrieve decision tasks. If FeatureFlags.PollerAutoScalerEnabled is set to true,
	// changing this value will NOT affect the rate at which the worker is able to consume tasks from a task list.
	// Default value is 2
	// Deprecated: NO effect and use AutoScalerOptions instead.
	public get MinConcurrentDecisionTaskPollers(): number {
		return this._fields.MinConcurrentDecisionTaskPollers
	}

	public set MinConcurrentDecisionTaskPollers(value: number) {
		this._fields.MinConcurrentDecisionTaskPollers = value
	}

	// optional: Sets the interval of poller autoscaling, between which poller autoscaler changes the poller count
	// based on poll result. It takes effect if FeatureFlags.PollerAutoScalerEnabled is set to true.
	// Default value is 1 min
	// Deprecated: Use AutoScalerOptions instead.
	public get PollerAutoScalerCooldown(): time.Duration {
		return this._fields.PollerAutoScalerCooldown
	}

	public set PollerAutoScalerCooldown(value: time.Duration) {
		this._fields.PollerAutoScalerCooldown = value
	}

	// optional: Sets the target utilization rate between [0,1].
	// Utilization Rate = pollResultWithTask / (pollResultWithTask + pollResultWithNoTask)
	// It takes effect if FeatureFlags.PollerAutoScalerEnabled is set to true.
	// Default value is 0.6
	// Deprecated: not used any more
	public get PollerAutoScalerTargetUtilization(): number {
		return this._fields.PollerAutoScalerTargetUtilization
	}

	public set PollerAutoScalerTargetUtilization(value: number) {
		this._fields.PollerAutoScalerTargetUtilization = value
	}

	// optional: Sets whether to start dry run mode of autoscaler.
	// Default value is false
	// Deprecated: not used any more
	public get PollerAutoScalerDryRun(): boolean {
		return this._fields.PollerAutoScalerDryRun
	}

	public set PollerAutoScalerDryRun(value: boolean) {
		this._fields.PollerAutoScalerDryRun = value
	}

	// optional: Sets the options for poller autoscaler
	public get AutoScalerOptions(): __goscript_internal_poller_autoscaler.AutoScalerOptions {
		return this._fields.AutoScalerOptions
	}

	public set AutoScalerOptions(value: __goscript_internal_poller_autoscaler.AutoScalerOptions) {
		this._fields.AutoScalerOptions = value
	}

	// Optional: Sets an identify that can be used to track this host for debugging.
	// default: default identity that include hostname, groupName and process ID.
	public get Identity(): string {
		return this._fields.Identity
	}

	public set Identity(value: string) {
		this._fields.Identity = value
	}

	// Optional: Sets a unique identity for this worker, used verbatim as its sticky tasklist name.
	// It must be unique per worker instance (per domain+tasklist per process); do not reuse the same
	// value across NewWorker calls or replicas, or sticky decision tasks may be routed to the wrong worker.
	// default: same value as Identity if Identity is also unset, otherwise a distinct generated value.
	public get UniqueIdentity(): string {
		return this._fields.UniqueIdentity
	}

	public set UniqueIdentity(value: string) {
		this._fields.UniqueIdentity = value
	}

	// Optional: Defines the 'zone' or the failure group that the worker belongs to
	public get IsolationGroup(): string {
		return this._fields.IsolationGroup
	}

	public set IsolationGroup(value: string) {
		this._fields.IsolationGroup = value
	}

	// Optional: Metrics to be reported. Metrics emitted by the cadence client are not prometheus compatible by
	// default. To ensure metrics are compatible with prometheus make sure to create tally scope with sanitizer
	// options set.
	// var (
	// _safeCharacters = []rune{'_'}
	// _sanitizeOptions = tally.SanitizeOptions{
	// 	NameCharacters: tally.ValidCharacters{
	// 		Ranges:     tally.AlphanumericRange,
	// 		Characters: _safeCharacters,
	// 	},
	// 		KeyCharacters: tally.ValidCharacters{
	// 			Ranges:     tally.AlphanumericRange,
	// 			Characters: _safeCharacters,
	// 		},
	// 		ValueCharacters: tally.ValidCharacters{
	// 			Ranges:     tally.AlphanumericRange,
	// 			Characters: _safeCharacters,
	// 		},
	// 		ReplacementCharacter: tally.DefaultReplacementCharacter,
	// 	}
	// )
	// opts := tally.ScopeOptions{
	// 	Reporter:        reporter,
	// 	SanitizeOptions: &_sanitizeOptions,
	// }
	// scope, _ := tally.NewRootScope(opts, time.Second)
	// default: no metrics.
	public get MetricsScope(): tally.Scope | null {
		return this._fields.MetricsScope
	}

	public set MetricsScope(value: tally.Scope | null) {
		this._fields.MetricsScope = value
	}

	// Optional: Logger framework can use to log.
	// default: default logger provided.
	public get Logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.Logger
	}

	public set Logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.Logger = value
	}

	// Optional: Enable logging in replay.
	// In the workflow code you can use workflow.GetLogger(ctx) to write logs. By default, the logger will skip log
	// entry during replay mode so you won't see duplicate logs. This option will enable the logging in replay mode.
	// This is only useful for debugging purpose.
	// default: false
	public get EnableLoggingInReplay(): boolean {
		return this._fields.EnableLoggingInReplay
	}

	public set EnableLoggingInReplay(value: boolean) {
		this._fields.EnableLoggingInReplay = value
	}

	// Optional: Enable logging of workflow lifecycle events.
	// When enabled, the worker logs a message when each activity attempt starts and when it ends,
	// including the outcome (succeeded / failed / canceled / timeout / pending / failed_to_report).
	// Note: this currently covers activity attempts only
	// default: false
	public get EnableWorkflowLifecycleLogging(): boolean {
		return this._fields.EnableWorkflowLifecycleLogging
	}

	public set EnableWorkflowLifecycleLogging(value: boolean) {
		this._fields.EnableWorkflowLifecycleLogging = value
	}

	// Optional: Disable running workflow workers.
	// default: false
	public get DisableWorkflowWorker(): boolean {
		return this._fields.DisableWorkflowWorker
	}

	public set DisableWorkflowWorker(value: boolean) {
		this._fields.DisableWorkflowWorker = value
	}

	// Optional: Disable running activity workers.
	// default: false
	public get DisableActivityWorker(): boolean {
		return this._fields.DisableActivityWorker
	}

	public set DisableActivityWorker(value: boolean) {
		this._fields.DisableActivityWorker = value
	}

	// Optional: Disable sticky execution.
	// default: false
	// Sticky Execution is to run the decision tasks for one workflow execution on same worker host. This is an
	// optimization for workflow execution. When sticky execution is enabled, worker keeps the workflow state in
	// memory. New decision task contains the new history events will be dispatched to the same worker. If this
	// worker crashes, the sticky decision task will timeout after StickyScheduleToStartTimeout, and cadence server
	// will clear the stickiness for that workflow execution and automatically reschedule a new decision task that
	// is available for any worker to pick up and resume the progress.
	public get DisableStickyExecution(): boolean {
		return this._fields.DisableStickyExecution
	}

	public set DisableStickyExecution(value: boolean) {
		this._fields.DisableStickyExecution = value
	}

	// Optional: Sticky schedule to start timeout.
	// default: 5s
	// The resolution is seconds. See details about StickyExecution on the comments for DisableStickyExecution.
	public get StickyScheduleToStartTimeout(): time.Duration {
		return this._fields.StickyScheduleToStartTimeout
	}

	public set StickyScheduleToStartTimeout(value: time.Duration) {
		this._fields.StickyScheduleToStartTimeout = value
	}

	// Optional: sets context for activity. The context can be used to pass any configuration to activity
	// like common logger for all activities.
	public get BackgroundActivityContext(): context.Context | null {
		return this._fields.BackgroundActivityContext
	}

	public set BackgroundActivityContext(value: context.Context | null) {
		this._fields.BackgroundActivityContext = value
	}

	// Optional: Sets how decision worker deals with non-deterministic history events
	// (presumably arising from non-deterministic workflow definitions or non-backward compatible workflow definition changes).
	// default: NonDeterministicWorkflowPolicyBlockWorkflow, which just logs error but reply nothing back to server
	public get NonDeterministicWorkflowPolicy(): NonDeterministicWorkflowPolicy {
		return this._fields.NonDeterministicWorkflowPolicy
	}

	public set NonDeterministicWorkflowPolicy(value: NonDeterministicWorkflowPolicy) {
		this._fields.NonDeterministicWorkflowPolicy = value
	}

	// Optional: Sets DataConverter to customize serialization/deserialization of arguments in Cadence
	// default: defaultDataConverter, an combination of thriftEncoder and jsonEncoder
	public get DataConverter(): __goscript_encoded.DataConverter | null {
		return this._fields.DataConverter
	}

	public set DataConverter(value: __goscript_encoded.DataConverter | null) {
		this._fields.DataConverter = value
	}

	// Optional: worker graceful shutdown timeout
	// default: 0s
	public get WorkerStopTimeout(): time.Duration {
		return this._fields.WorkerStopTimeout
	}

	public set WorkerStopTimeout(value: time.Duration) {
		this._fields.WorkerStopTimeout = value
	}

	// Optional: Enable running session workers.
	// Session workers is for activities within a session.
	// Enable this option to allow worker to process sessions.
	// default: false
	public get EnableSessionWorker(): boolean {
		return this._fields.EnableSessionWorker
	}

	public set EnableSessionWorker(value: boolean) {
		this._fields.EnableSessionWorker = value
	}

	// Optional: Sets the maximum number of concurrently running sessions the resource support.
	// default: 1000
	public get MaxConcurrentSessionExecutionSize(): number {
		return this._fields.MaxConcurrentSessionExecutionSize
	}

	public set MaxConcurrentSessionExecutionSize(value: number) {
		this._fields.MaxConcurrentSessionExecutionSize = value
	}

	// Optional: Specifies factories used to instantiate workflow interceptor chain
	// The chain is instantiated per each replay of a workflow execution
	public get WorkflowInterceptorChainFactories(): $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null> {
		return this._fields.WorkflowInterceptorChainFactories
	}

	public set WorkflowInterceptorChainFactories(value: $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>) {
		this._fields.WorkflowInterceptorChainFactories = value
	}

	// Optional: Sets ContextPropagators that allows users to control the context information passed through a workflow
	// default: no ContextPropagators
	public get ContextPropagators(): $.Slice<__goscript_headers.ContextPropagator | null> {
		return this._fields.ContextPropagators
	}

	public set ContextPropagators(value: $.Slice<__goscript_headers.ContextPropagator | null>) {
		this._fields.ContextPropagators = value
	}

	// Optional: Sets opentracing Tracer that is to be used to emit tracing information
	// default: no tracer - opentracing.NoopTracer
	public get Tracer(): opentracing.Tracer | null {
		return this._fields.Tracer
	}

	public set Tracer(value: opentracing.Tracer | null) {
		this._fields.Tracer = value
	}

	// Optional: Enable worker for running shadowing workflows to replay existing workflows
	// If set to true:
	// 1. Worker will run in shadow mode and all other workers (decision, activity, session)
	// will be disabled to prevent them from updating existing workflow states.
	// 2. DataConverter, WorkflowInterceptorChainFactories, ContextPropagators, Tracer will be
	// used as ReplayOptions and forwarded to the underlying WorkflowReplayer.
	// The actual shadower activity worker will not use them.
	// 3. TaskList will become Domain-TaskList, to prevent conflict across domains as there's
	// only one shadowing domain which is responsible for shadowing workflows for all domains.
	// default: false
	public get EnableShadowWorker(): boolean {
		return this._fields.EnableShadowWorker
	}

	public set EnableShadowWorker(value: boolean) {
		this._fields.EnableShadowWorker = value
	}

	// Optional: Configures shadowing workflow
	// default: please check the documentation for ShadowOptions for default options
	public get ShadowOptions(): __goscript_workflow_shadower.ShadowOptions {
		return this._fields.ShadowOptions
	}

	public set ShadowOptions(value: __goscript_workflow_shadower.ShadowOptions) {
		this._fields.ShadowOptions = value
	}

	// Optional: Flags to turn on/off some server side options
	// default: all the features in the struct are turned off
	public get FeatureFlags(): __goscript_internal_utils.FeatureFlags {
		return this._fields.FeatureFlags
	}

	public set FeatureFlags(value: __goscript_internal_utils.FeatureFlags) {
		this._fields.FeatureFlags = value
	}

	// Optional: Authorization interface to get the Auth Token
	// default: No provider
	public get Authorization(): auth.AuthorizationProvider | null {
		return this._fields.Authorization
	}

	public set Authorization(value: auth.AuthorizationProvider | null) {
		this._fields.Authorization = value
	}

	// Optional: See WorkerBugPorts for more details
	//
	// Deprecated: All bugports are always deprecated and may be removed at any time.
	public get WorkerBugPorts(): WorkerBugPorts {
		return this._fields.WorkerBugPorts
	}

	public set WorkerBugPorts(value: WorkerBugPorts) {
		this._fields.WorkerBugPorts = value
	}

	// Optional: WorkerStats provides a set of methods that can be used to collect
	// stats on the Worker for debugging purposes.
	// default: noop implementation provided
	// Deprecated: in development and very likely to change
	public get WorkerStats(): debug.WorkerStats {
		return this._fields.WorkerStats
	}

	public set WorkerStats(value: debug.WorkerStats) {
		this._fields.WorkerStats = value
	}

	public _fields: {
		MaxConcurrentActivityExecutionSize: number
		WorkerActivitiesPerSecond: number
		MaxConcurrentLocalActivityExecutionSize: number
		WorkerLocalActivitiesPerSecond: number
		TaskListActivitiesPerSecond: number
		MaxConcurrentActivityTaskPollers: number
		MinConcurrentActivityTaskPollers: number
		MaxConcurrentDecisionTaskExecutionSize: number
		WorkerDecisionTasksPerSecond: number
		MaxConcurrentDecisionTaskPollers: number
		MinConcurrentDecisionTaskPollers: number
		PollerAutoScalerCooldown: time.Duration
		PollerAutoScalerTargetUtilization: number
		PollerAutoScalerDryRun: boolean
		AutoScalerOptions: __goscript_internal_poller_autoscaler.AutoScalerOptions
		Identity: string
		UniqueIdentity: string
		IsolationGroup: string
		MetricsScope: tally.Scope | null
		Logger: zap.Logger | $.VarRef<zap.Logger> | null
		EnableLoggingInReplay: boolean
		EnableWorkflowLifecycleLogging: boolean
		DisableWorkflowWorker: boolean
		DisableActivityWorker: boolean
		DisableStickyExecution: boolean
		StickyScheduleToStartTimeout: time.Duration
		BackgroundActivityContext: context.Context | null
		NonDeterministicWorkflowPolicy: NonDeterministicWorkflowPolicy
		DataConverter: __goscript_encoded.DataConverter | null
		WorkerStopTimeout: time.Duration
		EnableSessionWorker: boolean
		MaxConcurrentSessionExecutionSize: number
		WorkflowInterceptorChainFactories: $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>
		ContextPropagators: $.Slice<__goscript_headers.ContextPropagator | null>
		Tracer: opentracing.Tracer | null
		EnableShadowWorker: boolean
		ShadowOptions: __goscript_workflow_shadower.ShadowOptions
		FeatureFlags: __goscript_internal_utils.FeatureFlags
		Authorization: auth.AuthorizationProvider | null
		WorkerBugPorts: WorkerBugPorts
		WorkerStats: debug.WorkerStats
	}

	constructor(init?: Partial<{MaxConcurrentActivityExecutionSize?: number, WorkerActivitiesPerSecond?: number, MaxConcurrentLocalActivityExecutionSize?: number, WorkerLocalActivitiesPerSecond?: number, TaskListActivitiesPerSecond?: number, MaxConcurrentActivityTaskPollers?: number, MinConcurrentActivityTaskPollers?: number, MaxConcurrentDecisionTaskExecutionSize?: number, WorkerDecisionTasksPerSecond?: number, MaxConcurrentDecisionTaskPollers?: number, MinConcurrentDecisionTaskPollers?: number, PollerAutoScalerCooldown?: time.Duration, PollerAutoScalerTargetUtilization?: number, PollerAutoScalerDryRun?: boolean, AutoScalerOptions?: __goscript_internal_poller_autoscaler.AutoScalerOptions, Identity?: string, UniqueIdentity?: string, IsolationGroup?: string, MetricsScope?: tally.Scope | null, Logger?: zap.Logger | $.VarRef<zap.Logger> | null, EnableLoggingInReplay?: boolean, EnableWorkflowLifecycleLogging?: boolean, DisableWorkflowWorker?: boolean, DisableActivityWorker?: boolean, DisableStickyExecution?: boolean, StickyScheduleToStartTimeout?: time.Duration, BackgroundActivityContext?: context.Context | null, NonDeterministicWorkflowPolicy?: NonDeterministicWorkflowPolicy, DataConverter?: __goscript_encoded.DataConverter | null, WorkerStopTimeout?: time.Duration, EnableSessionWorker?: boolean, MaxConcurrentSessionExecutionSize?: number, WorkflowInterceptorChainFactories?: $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>, ContextPropagators?: $.Slice<__goscript_headers.ContextPropagator | null>, Tracer?: opentracing.Tracer | null, EnableShadowWorker?: boolean, ShadowOptions?: __goscript_workflow_shadower.ShadowOptions, FeatureFlags?: __goscript_internal_utils.FeatureFlags, Authorization?: auth.AuthorizationProvider | null, WorkerBugPorts?: WorkerBugPorts, WorkerStats?: debug.WorkerStats}>, __goscriptValue?: boolean) {
		this._fields = {
			MaxConcurrentActivityExecutionSize: init?.MaxConcurrentActivityExecutionSize ?? (0 as number),
			WorkerActivitiesPerSecond: init?.WorkerActivitiesPerSecond ?? (0 as number),
			MaxConcurrentLocalActivityExecutionSize: init?.MaxConcurrentLocalActivityExecutionSize ?? (0 as number),
			WorkerLocalActivitiesPerSecond: init?.WorkerLocalActivitiesPerSecond ?? (0 as number),
			TaskListActivitiesPerSecond: init?.TaskListActivitiesPerSecond ?? (0 as number),
			MaxConcurrentActivityTaskPollers: init?.MaxConcurrentActivityTaskPollers ?? (0 as number),
			MinConcurrentActivityTaskPollers: init?.MinConcurrentActivityTaskPollers ?? (0 as number),
			MaxConcurrentDecisionTaskExecutionSize: init?.MaxConcurrentDecisionTaskExecutionSize ?? (0 as number),
			WorkerDecisionTasksPerSecond: init?.WorkerDecisionTasksPerSecond ?? (0 as number),
			MaxConcurrentDecisionTaskPollers: init?.MaxConcurrentDecisionTaskPollers ?? (0 as number),
			MinConcurrentDecisionTaskPollers: init?.MinConcurrentDecisionTaskPollers ?? (0 as number),
			PollerAutoScalerCooldown: init?.PollerAutoScalerCooldown ?? (0n as time.Duration),
			PollerAutoScalerTargetUtilization: init?.PollerAutoScalerTargetUtilization ?? (0 as number),
			PollerAutoScalerDryRun: init?.PollerAutoScalerDryRun ?? (false as boolean),
			AutoScalerOptions: init?.AutoScalerOptions ? init.AutoScalerOptions.clone() : new __goscript_internal_poller_autoscaler.AutoScalerOptions(undefined, true),
			Identity: init?.Identity ?? ("" as string),
			UniqueIdentity: init?.UniqueIdentity ?? ("" as string),
			IsolationGroup: init?.IsolationGroup ?? ("" as string),
			MetricsScope: init?.MetricsScope ?? (null! as tally.Scope | null),
			Logger: init?.Logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			EnableLoggingInReplay: init?.EnableLoggingInReplay ?? (false as boolean),
			EnableWorkflowLifecycleLogging: init?.EnableWorkflowLifecycleLogging ?? (false as boolean),
			DisableWorkflowWorker: init?.DisableWorkflowWorker ?? (false as boolean),
			DisableActivityWorker: init?.DisableActivityWorker ?? (false as boolean),
			DisableStickyExecution: init?.DisableStickyExecution ?? (false as boolean),
			StickyScheduleToStartTimeout: init?.StickyScheduleToStartTimeout ?? (0n as time.Duration),
			BackgroundActivityContext: init?.BackgroundActivityContext ?? (null! as context.Context | null),
			NonDeterministicWorkflowPolicy: init?.NonDeterministicWorkflowPolicy ?? (0 as NonDeterministicWorkflowPolicy),
			DataConverter: init?.DataConverter ?? (null! as __goscript_encoded.DataConverter | null),
			WorkerStopTimeout: init?.WorkerStopTimeout ?? (0n as time.Duration),
			EnableSessionWorker: init?.EnableSessionWorker ?? (false as boolean),
			MaxConcurrentSessionExecutionSize: init?.MaxConcurrentSessionExecutionSize ?? (0 as number),
			WorkflowInterceptorChainFactories: init?.WorkflowInterceptorChainFactories ?? (null! as $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>),
			ContextPropagators: init?.ContextPropagators ?? (null! as $.Slice<__goscript_headers.ContextPropagator | null>),
			Tracer: init?.Tracer ?? (null! as opentracing.Tracer | null),
			EnableShadowWorker: init?.EnableShadowWorker ?? (false as boolean),
			ShadowOptions: init?.ShadowOptions ? init.ShadowOptions.clone() : new __goscript_workflow_shadower.ShadowOptions(undefined, true),
			FeatureFlags: init?.FeatureFlags ? init.FeatureFlags.clone() : new __goscript_internal_utils.FeatureFlags(undefined, true),
			Authorization: init?.Authorization ?? (null! as auth.AuthorizationProvider | null),
			WorkerBugPorts: init?.WorkerBugPorts ? init.WorkerBugPorts.clone() : new WorkerBugPorts(undefined, true),
			WorkerStats: init?.WorkerStats ? init.WorkerStats.clone() : new debug.WorkerStats(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkerOptions {
		return new WorkerOptions(this, true)
	}

	public __goscriptAssign(source: WorkerOptions): void {
		const target = this._fields
		const values = source._fields
		target.MaxConcurrentActivityExecutionSize = values.MaxConcurrentActivityExecutionSize
		target.WorkerActivitiesPerSecond = values.WorkerActivitiesPerSecond
		target.MaxConcurrentLocalActivityExecutionSize = values.MaxConcurrentLocalActivityExecutionSize
		target.WorkerLocalActivitiesPerSecond = values.WorkerLocalActivitiesPerSecond
		target.TaskListActivitiesPerSecond = values.TaskListActivitiesPerSecond
		target.MaxConcurrentActivityTaskPollers = values.MaxConcurrentActivityTaskPollers
		target.MinConcurrentActivityTaskPollers = values.MinConcurrentActivityTaskPollers
		target.MaxConcurrentDecisionTaskExecutionSize = values.MaxConcurrentDecisionTaskExecutionSize
		target.WorkerDecisionTasksPerSecond = values.WorkerDecisionTasksPerSecond
		target.MaxConcurrentDecisionTaskPollers = values.MaxConcurrentDecisionTaskPollers
		target.MinConcurrentDecisionTaskPollers = values.MinConcurrentDecisionTaskPollers
		target.PollerAutoScalerCooldown = values.PollerAutoScalerCooldown
		target.PollerAutoScalerTargetUtilization = values.PollerAutoScalerTargetUtilization
		target.PollerAutoScalerDryRun = values.PollerAutoScalerDryRun
		$.assignStruct(target.AutoScalerOptions, values.AutoScalerOptions)
		target.Identity = values.Identity
		target.UniqueIdentity = values.UniqueIdentity
		target.IsolationGroup = values.IsolationGroup
		target.MetricsScope = $.assignFieldValue(target.MetricsScope, values.MetricsScope, "tally.Scope")
		target.Logger = values.Logger
		target.EnableLoggingInReplay = values.EnableLoggingInReplay
		target.EnableWorkflowLifecycleLogging = values.EnableWorkflowLifecycleLogging
		target.DisableWorkflowWorker = values.DisableWorkflowWorker
		target.DisableActivityWorker = values.DisableActivityWorker
		target.DisableStickyExecution = values.DisableStickyExecution
		target.StickyScheduleToStartTimeout = values.StickyScheduleToStartTimeout
		target.BackgroundActivityContext = $.assignFieldValue(target.BackgroundActivityContext, values.BackgroundActivityContext, "context.Context")
		target.NonDeterministicWorkflowPolicy = values.NonDeterministicWorkflowPolicy
		target.DataConverter = $.assignFieldValue(target.DataConverter, values.DataConverter, "internal.DataConverter")
		target.WorkerStopTimeout = values.WorkerStopTimeout
		target.EnableSessionWorker = values.EnableSessionWorker
		target.MaxConcurrentSessionExecutionSize = values.MaxConcurrentSessionExecutionSize
		target.WorkflowInterceptorChainFactories = values.WorkflowInterceptorChainFactories
		target.ContextPropagators = values.ContextPropagators
		target.Tracer = $.assignFieldValue(target.Tracer, values.Tracer, "opentracing.Tracer")
		target.EnableShadowWorker = values.EnableShadowWorker
		$.assignStruct(target.ShadowOptions, values.ShadowOptions)
		$.assignStruct(target.FeatureFlags, values.FeatureFlags)
		target.Authorization = $.assignFieldValue(target.Authorization, values.Authorization, "auth.AuthorizationProvider")
		$.assignStruct(target.WorkerBugPorts, values.WorkerBugPorts)
		$.assignStruct(target.WorkerStats, values.WorkerStats)
	}

	public Validate(): $.GoError {
		const o = this;
		// decision task pollers must be >= 2 or unset if sticky tasklist is enabled https://github.com/uber-go/cadence-client/issues/1369
		if (!o.DisableStickyExecution && (o.MaxConcurrentDecisionTaskPollers == 1)) {
			return fmt.Errorf("DecisionTaskPollers must be >= 2 or use default value")
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"internal.WorkerOptions",
		() => new WorkerOptions(),
		() => [$.methodSignature("Validate", [], ["error"])],
		WorkerOptions,
		() => [/* @__PURE__ */ $.structField("MaxConcurrentActivityExecutionSize", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("WorkerActivitiesPerSecond", /* @__PURE__ */ $.basicType("float64"), [1], 8, true), /* @__PURE__ */ $.structField("MaxConcurrentLocalActivityExecutionSize", /* @__PURE__ */ $.basicType("int"), [2], 16, true), /* @__PURE__ */ $.structField("WorkerLocalActivitiesPerSecond", /* @__PURE__ */ $.basicType("float64"), [3], 24, true), /* @__PURE__ */ $.structField("TaskListActivitiesPerSecond", /* @__PURE__ */ $.basicType("float64"), [4], 32, true), /* @__PURE__ */ $.structField("MaxConcurrentActivityTaskPollers", /* @__PURE__ */ $.basicType("int"), [5], 40, true), /* @__PURE__ */ $.structField("MinConcurrentActivityTaskPollers", /* @__PURE__ */ $.basicType("int"), [6], 48, true), /* @__PURE__ */ $.structField("MaxConcurrentDecisionTaskExecutionSize", /* @__PURE__ */ $.basicType("int"), [7], 56, true), /* @__PURE__ */ $.structField("WorkerDecisionTasksPerSecond", /* @__PURE__ */ $.basicType("float64"), [8], 64, true), /* @__PURE__ */ $.structField("MaxConcurrentDecisionTaskPollers", /* @__PURE__ */ $.basicType("int"), [9], 72, true), /* @__PURE__ */ $.structField("MinConcurrentDecisionTaskPollers", /* @__PURE__ */ $.basicType("int"), [10], 80, true), /* @__PURE__ */ $.structField("PollerAutoScalerCooldown", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [11], 88, true), /* @__PURE__ */ $.structField("PollerAutoScalerTargetUtilization", /* @__PURE__ */ $.basicType("float64"), [12], 96, true), /* @__PURE__ */ $.structField("PollerAutoScalerDryRun", /* @__PURE__ */ $.basicType("bool"), [13], 104, true), /* @__PURE__ */ $.structField("AutoScalerOptions", "internal.AutoScalerOptions", [14], 112, true), /* @__PURE__ */ $.structField("Identity", /* @__PURE__ */ $.basicType("string"), [15], 168, true), /* @__PURE__ */ $.structField("UniqueIdentity", /* @__PURE__ */ $.basicType("string"), [16], 184, true), /* @__PURE__ */ $.structField("IsolationGroup", /* @__PURE__ */ $.basicType("string"), [17], 200, true), /* @__PURE__ */ $.structField("MetricsScope", "tally.Scope", [18], 216, true), /* @__PURE__ */ $.structField("Logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [19], 232, true), /* @__PURE__ */ $.structField("EnableLoggingInReplay", /* @__PURE__ */ $.basicType("bool"), [20], 240, true), /* @__PURE__ */ $.structField("EnableWorkflowLifecycleLogging", /* @__PURE__ */ $.basicType("bool"), [21], 241, true), /* @__PURE__ */ $.structField("DisableWorkflowWorker", /* @__PURE__ */ $.basicType("bool"), [22], 242, true), /* @__PURE__ */ $.structField("DisableActivityWorker", /* @__PURE__ */ $.basicType("bool"), [23], 243, true), /* @__PURE__ */ $.structField("DisableStickyExecution", /* @__PURE__ */ $.basicType("bool"), [24], 244, true), /* @__PURE__ */ $.structField("StickyScheduleToStartTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [25], 248, true), /* @__PURE__ */ $.structField("BackgroundActivityContext", "context.Context", [26], 256, true), /* @__PURE__ */ $.structField("NonDeterministicWorkflowPolicy", /* @__PURE__ */ $.basicType("int", "internal.NonDeterministicWorkflowPolicy"), [27], 272, true), /* @__PURE__ */ $.structField("DataConverter", "internal.DataConverter", [28], 280, true), /* @__PURE__ */ $.structField("WorkerStopTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [29], 296, true), /* @__PURE__ */ $.structField("EnableSessionWorker", /* @__PURE__ */ $.basicType("bool"), [30], 304, true), /* @__PURE__ */ $.structField("MaxConcurrentSessionExecutionSize", /* @__PURE__ */ $.basicType("int"), [31], 312, true), /* @__PURE__ */ $.structField("WorkflowInterceptorChainFactories", /* @__PURE__ */ $.sliceType("internal.WorkflowInterceptorFactory"), [32], 320, true), /* @__PURE__ */ $.structField("ContextPropagators", /* @__PURE__ */ $.sliceType("internal.ContextPropagator"), [33], 344, true), /* @__PURE__ */ $.structField("Tracer", "opentracing.Tracer", [34], 368, true), /* @__PURE__ */ $.structField("EnableShadowWorker", /* @__PURE__ */ $.basicType("bool"), [35], 384, true), /* @__PURE__ */ $.structField("ShadowOptions", "internal.ShadowOptions", [36], 392, true), /* @__PURE__ */ $.structField("FeatureFlags", "internal.FeatureFlags", [37], 616, true), /* @__PURE__ */ $.structField("Authorization", "auth.AuthorizationProvider", [38], 632, true), /* @__PURE__ */ $.structField("WorkerBugPorts", "internal.WorkerBugPorts", [39], 648, true), /* @__PURE__ */ $.structField("WorkerStats", "debug.WorkerStats", [40], 656, true)]
	)
}

export const NonDeterministicWorkflowPolicyBlockWorkflow: NonDeterministicWorkflowPolicy = 0

export const NonDeterministicWorkflowPolicyFailWorkflow: NonDeterministicWorkflowPolicy = 1

export async function NewWorker(service: workflowserviceclient.Interface | null, domain: string, taskList: string, options: WorkerOptions): globalThis.Promise<[Worker | null, $.GoError]> {
	const __goscriptReturn0 = await __goscript_internal_worker.newAggregatedWorker(service, domain, taskList, options)
	return [$.interfaceValue<Worker | null>(__goscriptReturn0[0], "*internal.aggregatedWorker", /* @__PURE__ */ $.pointerType("internal.aggregatedWorker")), __goscriptReturn0[1]]
	throw new globalThis.Error("goscript: unreachable return")
}

export async function ReplayWorkflowExecution(ctx: context.Context | null, service: workflowserviceclient.Interface | null, logger: zap.Logger | $.VarRef<zap.Logger> | null, domain: string, execution: __goscript_workflow.WorkflowExecution): globalThis.Promise<$.GoError> {
	let r: __goscript_workflow_replayer.WorkflowReplayer | $.VarRef<__goscript_workflow_replayer.WorkflowReplayer> | null = await __goscript_workflow_replayer.NewWorkflowReplayer()
	return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as __goscript_workflow_replayer.WorkflowReplayer).ReplayWorkflowExecution(ctx, service, logger, domain, (execution).clone()) : __goscript_workflow_replayer.WorkflowReplayer.prototype.ReplayWorkflowExecution.call(r, ctx, service, logger, domain, (execution).clone()))
}

export async function ReplayWorkflowHistory(logger: zap.Logger | $.VarRef<zap.Logger> | null, history: shared.History | $.VarRef<shared.History> | null): globalThis.Promise<$.GoError> {
	let r: __goscript_workflow_replayer.WorkflowReplayer | $.VarRef<__goscript_workflow_replayer.WorkflowReplayer> | null = await __goscript_workflow_replayer.NewWorkflowReplayer()
	return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as __goscript_workflow_replayer.WorkflowReplayer).ReplayWorkflowHistory(logger, history) : __goscript_workflow_replayer.WorkflowReplayer.prototype.ReplayWorkflowHistory.call(r, logger, history))
}

export async function ReplayWorkflowHistoryFromJSONFile(logger: zap.Logger | $.VarRef<zap.Logger> | null, jsonfileName: string): globalThis.Promise<$.GoError> {
	let r: __goscript_workflow_replayer.WorkflowReplayer | $.VarRef<__goscript_workflow_replayer.WorkflowReplayer> | null = await __goscript_workflow_replayer.NewWorkflowReplayer()
	return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as __goscript_workflow_replayer.WorkflowReplayer).ReplayWorkflowHistoryFromJSONFile(logger, jsonfileName) : __goscript_workflow_replayer.WorkflowReplayer.prototype.ReplayWorkflowHistoryFromJSONFile.call(r, logger, jsonfileName))
}

export async function ReplayPartialWorkflowHistoryFromJSONFile(logger: zap.Logger | $.VarRef<zap.Logger> | null, jsonfileName: string, lastEventID: bigint): globalThis.Promise<$.GoError> {
	let r: __goscript_workflow_replayer.WorkflowReplayer | $.VarRef<__goscript_workflow_replayer.WorkflowReplayer> | null = await __goscript_workflow_replayer.NewWorkflowReplayer()
	return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as __goscript_workflow_replayer.WorkflowReplayer).ReplayPartialWorkflowHistoryFromJSONFile(logger, jsonfileName, lastEventID) : __goscript_workflow_replayer.WorkflowReplayer.prototype.ReplayPartialWorkflowHistoryFromJSONFile.call(r, logger, jsonfileName, lastEventID))
}
