// Generated file based on internal_worker_base.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as debug from "@goscript/go.uber.org/cadence/internal/common/debug/index.js"

import * as worker from "@goscript/go.uber.org/cadence/internal/worker/index.js"

import * as clockwork from "@goscript/github.com/jonboulle/clockwork/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as rate from "@goscript/golang.org/x/time/rate/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as backoff2 from "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as util from "@goscript/go.uber.org/cadence/internal/common/util/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as os from "@goscript/os/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import type * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import * as __goscript_internal_logging_tags from "./internal_logging_tags.gs.ts"

import * as __goscript_internal_poller_autoscaler from "./internal_poller_autoscaler.gs.ts"

import * as __goscript_internal_public from "./internal_public.gs.ts"

import * as __goscript_internal_task_handlers from "./internal_task_handlers.gs.ts"

import * as __goscript_internal_task_pollers from "./internal_task_pollers.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/cadence/internal/common/debug/index.js"
import "@goscript/go.uber.org/cadence/internal/worker/index.js"
import "@goscript/github.com/jonboulle/clockwork/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/golang.org/x/time/rate/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/go.uber.org/cadence/internal/common/util/index.js"
import "@goscript/os/index.js"
import "./activity.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./headers.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_logging_tags.gs.ts"
import "./internal_poller_autoscaler.gs.ts"
import "./internal_public.gs.ts"
import "./internal_task_handlers.gs.ts"
import "./internal_task_pollers.gs.ts"
import "./internal_utils.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_workflow.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./workflow.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.resultHandler", "internal.laResultHandler", "internal.localActivityResultWrapper", "internal.workflowEnvironment", "internal.workflowDefinition", "internal.baseWorkerOptions", "internal.baseWorker", "internal.polledTask"])

export type resultHandler = ((result: $.Slice<number>, err: $.GoError) => void) | null

export type laResultHandler = ((lar: localActivityResultWrapper | $.VarRef<localActivityResultWrapper> | null) => void) | null

export type workflowEnvironment = {
	AddSession(sessionInfo: __goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null): void
	Complete(result: $.Slice<number>, err: $.GoError): void
	ExecuteActivity(parameters: __goscript_internal_activity.executeActivityParams, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): __goscript_internal_activity.activityInfo | $.VarRef<__goscript_internal_activity.activityInfo> | null | globalThis.Promise<__goscript_internal_activity.activityInfo | $.VarRef<__goscript_internal_activity.activityInfo> | null>
	ExecuteChildWorkflow(params: __goscript_internal_workflow.executeWorkflowParams, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null, startedHandler: ((r: __goscript_workflow.WorkflowExecution, e: $.GoError) => void) | null): $.GoError | globalThis.Promise<$.GoError>
	ExecuteLocalActivity(params: __goscript_internal_activity.executeLocalActivityParams, callback: ((lar: localActivityResultWrapper | $.VarRef<localActivityResultWrapper> | null) => void) | null): __goscript_internal_activity.localActivityInfo | $.VarRef<__goscript_internal_activity.localActivityInfo> | null | globalThis.Promise<__goscript_internal_activity.localActivityInfo | $.VarRef<__goscript_internal_activity.localActivityInfo> | null>
	GetContextPropagators(): $.Slice<__goscript_headers.ContextPropagator | null>
	GetDataConverter(): __goscript_encoded.DataConverter | null
	GetFeatureFlags(): __goscript_internal_utils.FeatureFlags
	GetLogger(): zap.Logger | $.VarRef<zap.Logger> | null
	GetMetricsScope(): tally.Scope | null
	GetRegistry(): __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null
	GetTracer(): opentracing.Tracer | null
	GetVersion(changeID: string, minSupported: __goscript_workflow.Version, maxSupported: __goscript_workflow.Version, opts: $.Slice<__goscript_workflow.GetVersionOption | null>): __goscript_workflow.Version | globalThis.Promise<__goscript_workflow.Version>
	GetWorkflowInterceptors(): $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>
	IsReplaying(): boolean
	MutableSideEffect(id: string, f: (() => any | globalThis.Promise<any>) | null, equals: ((a: any, b: any) => boolean | globalThis.Promise<boolean>) | null): __goscript_encoded.Value | null | globalThis.Promise<__goscript_encoded.Value | null>
	NewTimer(d: time.Duration, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): __goscript_internal_time.timerInfo | $.VarRef<__goscript_internal_time.timerInfo> | null | globalThis.Promise<__goscript_internal_time.timerInfo | $.VarRef<__goscript_internal_time.timerInfo> | null>
	Now(): time.Time | globalThis.Promise<time.Time>
	RegisterCancelHandler(handler: (() => void) | null): void
	RegisterQueryHandler(handler: ((queryType: string, queryArgs: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null): void
	RegisterSignalHandler(handler: ((name: string, input: $.Slice<number>) => void) | null): void
	RemoveSession(sessionID: string): void
	RequestCancelActivity(activityID: string): void
	RequestCancelChildWorkflow(domainName: string, workflowID: string): void
	RequestCancelExternalWorkflow(domainName: string, workflowID: string, runID: string, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): void
	RequestCancelLocalActivity(activityID: string): void
	RequestCancelTimer(timerID: string): void
	SideEffect(f: (() => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): void
	SignalExternalWorkflow(domainName: string, workflowID: string, runID: string, signalName: string, input: $.Slice<number>, arg: any, childWorkflowOnly: boolean, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): void
	UpsertSearchAttributes(attributes: globalThis.Map<string, any> | null): $.GoError | globalThis.Promise<$.GoError>
	WorkflowInfo(): __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null
}

$.registerInterfaceType(
	"internal.workflowEnvironment",
	null,
	[$.methodSignature("AddSession", [["sessionInfo", /* @__PURE__ */ $.pointerType("internal.SessionInfo")]]), $.methodSignature("Complete", [["result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]]), $.methodSignature("ExecuteActivity", [["parameters", "internal.executeActivityParams"], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.activityInfo")]), $.methodSignature("ExecuteChildWorkflow", [["params", "internal.executeWorkflowParams"], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)], ["startedHandler", ({ kind: $.TypeKind.Function, params: ["internal.WorkflowExecution", "error"], results: [] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("ExecuteLocalActivity", [["params", "internal.executeLocalActivityParams"], ["callback", ({ kind: $.TypeKind.Function, name: "internal.laResultHandler", params: [/* @__PURE__ */ $.pointerType("internal.localActivityResultWrapper")], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.localActivityInfo")]), $.methodSignature("GetContextPropagators", [], [/* @__PURE__ */ $.sliceType("internal.ContextPropagator")]), $.methodSignature("GetDataConverter", [], ["internal.DataConverter"]), $.methodSignature("GetFeatureFlags", [], ["internal.FeatureFlags"]), $.methodSignature("GetLogger", [], [/* @__PURE__ */ $.pointerType("zap.Logger")]), $.methodSignature("GetMetricsScope", [], ["tally.Scope"]), $.methodSignature("GetRegistry", [], [/* @__PURE__ */ $.pointerType("internal.registry")]), $.methodSignature("GetTracer", [], ["opentracing.Tracer"]), $.methodSignature("GetVersion", [["changeID", /* @__PURE__ */ $.basicType("string")], ["minSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")], ["maxSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")], ["opts", /* @__PURE__ */ $.sliceType("internal.GetVersionOption")]], [/* @__PURE__ */ $.basicType("int", "internal.Version")]), $.methodSignature("GetWorkflowInterceptors", [], [/* @__PURE__ */ $.sliceType("internal.WorkflowInterceptorFactory")]), $.methodSignature("IsReplaying", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MutableSideEffect", [["id", /* @__PURE__ */ $.basicType("string")], ["f", ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)], ["equals", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], ["internal.Value"]), $.methodSignature("NewTimer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.timerInfo")]), $.methodSignature("Now", [], ["time.Time"]), $.methodSignature("RegisterCancelHandler", [["handler", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]]), $.methodSignature("RegisterQueryHandler", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)]]), $.methodSignature("RegisterSignalHandler", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [] } as $.FunctionTypeInfo)]]), $.methodSignature("RemoveSession", [["sessionID", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("RequestCancelActivity", [["activityID", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("RequestCancelChildWorkflow", [["domainName", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("RequestCancelExternalWorkflow", [["domainName", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]]), $.methodSignature("RequestCancelLocalActivity", [["activityID", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("RequestCancelTimer", [["timerID", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("SideEffect", [["f", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]]), $.methodSignature("SignalExternalWorkflow", [["domainName", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["arg", { kind: $.TypeKind.Interface, methods: [] }], ["childWorkflowOnly", /* @__PURE__ */ $.basicType("bool")], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]]), $.methodSignature("UpsertSearchAttributes", [["attributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })]], ["error"]), $.methodSignature("WorkflowInfo", [], [/* @__PURE__ */ $.pointerType("internal.WorkflowInfo")])]
);

export type workflowDefinition = {
	Close(): void
	Execute(env: workflowEnvironment | null, header: shared.Header | $.VarRef<shared.Header> | null, input: $.Slice<number>): void
	KnownQueryTypes(): $.Slice<string> | globalThis.Promise<$.Slice<string>>
	OnDecisionTaskStarted(): void
	StackTrace(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"internal.workflowDefinition",
	null,
	[$.methodSignature("Close"), $.methodSignature("Execute", [["env", "internal.workflowEnvironment"], ["header", /* @__PURE__ */ $.pointerType("shared.Header")], ["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]]), $.methodSignature("KnownQueryTypes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]), $.methodSignature("OnDecisionTaskStarted"), $.methodSignature("StackTrace", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class localActivityResultWrapper {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get result(): $.Slice<number> {
		return this._fields.result
	}

	public set result(value: $.Slice<number>) {
		this._fields.result = value
	}

	public get attempt(): number {
		return this._fields.attempt
	}

	public set attempt(value: number) {
		this._fields.attempt = value
	}

	public get backoff(): time.Duration {
		return this._fields.backoff
	}

	public set backoff(value: time.Duration) {
		this._fields.backoff = value
	}

	public _fields: {
		err: $.GoError
		result: $.Slice<number>
		attempt: number
		backoff: time.Duration
	}

	constructor(init?: Partial<{err?: $.GoError, result?: $.Slice<number>, attempt?: number, backoff?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError),
			result: init?.result ?? (null! as $.Slice<number>),
			attempt: init?.attempt ?? (0 as number),
			backoff: init?.backoff ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): localActivityResultWrapper {
		return new localActivityResultWrapper(this, true)
	}

	public __goscriptAssign(source: localActivityResultWrapper): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.result = values.result
		target.attempt = values.attempt
		target.backoff = values.backoff
	}

	static __typeInfo = $.registerStructType(
		"internal.localActivityResultWrapper",
		() => new localActivityResultWrapper(),
		() => [],
		localActivityResultWrapper,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("attempt", /* @__PURE__ */ $.basicType("int32"), [2], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("backoff", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 48, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class baseWorkerOptions {
	public get pollerAutoScaler(): __goscript_internal_poller_autoscaler.AutoScalerOptions {
		return this._fields.pollerAutoScaler
	}

	public set pollerAutoScaler(value: __goscript_internal_poller_autoscaler.AutoScalerOptions) {
		this._fields.pollerAutoScaler = value
	}

	public get pollerCountWithoutAutoScaling(): number {
		return this._fields.pollerCountWithoutAutoScaling
	}

	public set pollerCountWithoutAutoScaling(value: number) {
		this._fields.pollerCountWithoutAutoScaling = value
	}

	public get pollerRate(): number {
		return this._fields.pollerRate
	}

	public set pollerRate(value: number) {
		this._fields.pollerRate = value
	}

	public get maxConcurrentTask(): number {
		return this._fields.maxConcurrentTask
	}

	public set maxConcurrentTask(value: number) {
		this._fields.maxConcurrentTask = value
	}

	public get maxTaskPerSecond(): number {
		return this._fields.maxTaskPerSecond
	}

	public set maxTaskPerSecond(value: number) {
		this._fields.maxTaskPerSecond = value
	}

	public get taskWorker(): __goscript_internal_task_pollers.taskPoller | null {
		return this._fields.taskWorker
	}

	public set taskWorker(value: __goscript_internal_task_pollers.taskPoller | null) {
		this._fields.taskWorker = value
	}

	public get identity(): string {
		return this._fields.identity
	}

	public set identity(value: string) {
		this._fields.identity = value
	}

	public get workerType(): string {
		return this._fields.workerType
	}

	public set workerType(value: string) {
		this._fields.workerType = value
	}

	public get shutdownTimeout(): time.Duration {
		return this._fields.shutdownTimeout
	}

	public set shutdownTimeout(value: time.Duration) {
		this._fields.shutdownTimeout = value
	}

	public get userContextCancel(): (() => void) | null {
		return this._fields.userContextCancel
	}

	public set userContextCancel(value: (() => void) | null) {
		this._fields.userContextCancel = value
	}

	public get host(): string {
		return this._fields.host
	}

	public set host(value: string) {
		this._fields.host = value
	}

	public get pollerTracker(): debug.PollerTracker | null {
		return this._fields.pollerTracker
	}

	public set pollerTracker(value: debug.PollerTracker | null) {
		this._fields.pollerTracker = value
	}

	public _fields: {
		pollerAutoScaler: __goscript_internal_poller_autoscaler.AutoScalerOptions
		pollerCountWithoutAutoScaling: number
		pollerRate: number
		maxConcurrentTask: number
		maxTaskPerSecond: number
		taskWorker: __goscript_internal_task_pollers.taskPoller | null
		identity: string
		workerType: string
		shutdownTimeout: time.Duration
		userContextCancel: (() => void) | null
		host: string
		pollerTracker: debug.PollerTracker | null
	}

	constructor(init?: Partial<{pollerAutoScaler?: __goscript_internal_poller_autoscaler.AutoScalerOptions, pollerCountWithoutAutoScaling?: number, pollerRate?: number, maxConcurrentTask?: number, maxTaskPerSecond?: number, taskWorker?: __goscript_internal_task_pollers.taskPoller | null, identity?: string, workerType?: string, shutdownTimeout?: time.Duration, userContextCancel?: (() => void) | null, host?: string, pollerTracker?: debug.PollerTracker | null}>, __goscriptValue?: boolean) {
		this._fields = {
			pollerAutoScaler: init?.pollerAutoScaler ? init.pollerAutoScaler.clone() : new __goscript_internal_poller_autoscaler.AutoScalerOptions(undefined, true),
			pollerCountWithoutAutoScaling: init?.pollerCountWithoutAutoScaling ?? (0 as number),
			pollerRate: init?.pollerRate ?? (0 as number),
			maxConcurrentTask: init?.maxConcurrentTask ?? (0 as number),
			maxTaskPerSecond: init?.maxTaskPerSecond ?? (0 as number),
			taskWorker: init?.taskWorker ?? (null! as __goscript_internal_task_pollers.taskPoller | null),
			identity: init?.identity ?? ("" as string),
			workerType: init?.workerType ?? ("" as string),
			shutdownTimeout: init?.shutdownTimeout ?? (0n as time.Duration),
			userContextCancel: init?.userContextCancel ?? (null! as (() => void) | null),
			host: init?.host ?? ("" as string),
			pollerTracker: init?.pollerTracker ?? (null! as debug.PollerTracker | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): baseWorkerOptions {
		return new baseWorkerOptions(this, true)
	}

	public __goscriptAssign(source: baseWorkerOptions): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.pollerAutoScaler, values.pollerAutoScaler)
		target.pollerCountWithoutAutoScaling = values.pollerCountWithoutAutoScaling
		target.pollerRate = values.pollerRate
		target.maxConcurrentTask = values.maxConcurrentTask
		target.maxTaskPerSecond = values.maxTaskPerSecond
		target.taskWorker = $.assignFieldValue(target.taskWorker, values.taskWorker, "internal.taskPoller")
		target.identity = values.identity
		target.workerType = values.workerType
		target.shutdownTimeout = values.shutdownTimeout
		target.userContextCancel = values.userContextCancel
		target.host = values.host
		target.pollerTracker = $.assignFieldValue(target.pollerTracker, values.pollerTracker, "debug.PollerTracker")
	}

	static __typeInfo = $.registerStructType(
		"internal.baseWorkerOptions",
		() => new baseWorkerOptions(),
		() => [],
		baseWorkerOptions,
		() => [/* @__PURE__ */ $.structField("pollerAutoScaler", "internal.AutoScalerOptions", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("pollerCountWithoutAutoScaling", /* @__PURE__ */ $.basicType("int"), [1], 56, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("pollerRate", /* @__PURE__ */ $.basicType("int"), [2], 64, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("maxConcurrentTask", /* @__PURE__ */ $.basicType("int"), [3], 72, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("maxTaskPerSecond", /* @__PURE__ */ $.basicType("float64"), [4], 80, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("taskWorker", "internal.taskPoller", [5], 88, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("identity", /* @__PURE__ */ $.basicType("string"), [6], 104, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workerType", /* @__PURE__ */ $.basicType("string"), [7], 120, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("shutdownTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [8], 136, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("userContextCancel", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [9], 144, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("host", /* @__PURE__ */ $.basicType("string"), [10], 152, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("pollerTracker", "debug.PollerTracker", [11], 168, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class baseWorker {
	public get options(): baseWorkerOptions {
		return this._fields.options
	}

	public set options(value: baseWorkerOptions) {
		this._fields.options = value
	}

	public get isWorkerStarted(): boolean {
		return this._fields.isWorkerStarted
	}

	public set isWorkerStarted(value: boolean) {
		this._fields.isWorkerStarted = value
	}

	public get shutdownCh(): $.Channel<{}> | null {
		return this._fields.shutdownCh
	}

	public set shutdownCh(value: $.Channel<{}> | null) {
		this._fields.shutdownCh = value
	}

	public get shutdownWG(): sync.WaitGroup {
		return this._fields.shutdownWG
	}

	public set shutdownWG(value: sync.WaitGroup) {
		this._fields.shutdownWG = value
	}

	public get pollLimiter(): rate.Limiter | $.VarRef<rate.Limiter> | null {
		return this._fields.pollLimiter
	}

	public set pollLimiter(value: rate.Limiter | $.VarRef<rate.Limiter> | null) {
		this._fields.pollLimiter = value
	}

	public get taskLimiter(): rate.Limiter | $.VarRef<rate.Limiter> | null {
		return this._fields.taskLimiter
	}

	public set taskLimiter(value: rate.Limiter | $.VarRef<rate.Limiter> | null) {
		this._fields.taskLimiter = value
	}

	public get limiterContext(): context.Context | null {
		return this._fields.limiterContext
	}

	public set limiterContext(value: context.Context | null) {
		this._fields.limiterContext = value
	}

	public get limiterContextCancel(): ((cause: $.GoError) => void) | null {
		return this._fields.limiterContextCancel
	}

	public set limiterContextCancel(value: ((cause: $.GoError) => void) | null) {
		this._fields.limiterContextCancel = value
	}

	public get retrier(): backoff2.ConcurrentRetrier | $.VarRef<backoff2.ConcurrentRetrier> | null {
		return this._fields.retrier
	}

	public set retrier(value: backoff2.ConcurrentRetrier | $.VarRef<backoff2.ConcurrentRetrier> | null) {
		this._fields.retrier = value
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

	public get concurrency(): worker.ConcurrencyLimit | $.VarRef<worker.ConcurrencyLimit> | null {
		return this._fields.concurrency
	}

	public set concurrency(value: worker.ConcurrencyLimit | $.VarRef<worker.ConcurrencyLimit> | null) {
		this._fields.concurrency = value
	}

	public get concurrencyAutoScaler(): worker.ConcurrencyAutoScaler | $.VarRef<worker.ConcurrencyAutoScaler> | null {
		return this._fields.concurrencyAutoScaler
	}

	public set concurrencyAutoScaler(value: worker.ConcurrencyAutoScaler | $.VarRef<worker.ConcurrencyAutoScaler> | null) {
		this._fields.concurrencyAutoScaler = value
	}

	public get taskQueueCh(): $.Channel<any> | null {
		return this._fields.taskQueueCh
	}

	public set taskQueueCh(value: $.Channel<any> | null) {
		this._fields.taskQueueCh = value
	}

	public get sessionTokenBucket(): __goscript_session.sessionTokenBucket | $.VarRef<__goscript_session.sessionTokenBucket> | null {
		return this._fields.sessionTokenBucket
	}

	public set sessionTokenBucket(value: __goscript_session.sessionTokenBucket | $.VarRef<__goscript_session.sessionTokenBucket> | null) {
		this._fields.sessionTokenBucket = value
	}

	public _fields: {
		options: baseWorkerOptions
		isWorkerStarted: boolean
		shutdownCh: $.Channel<{}> | null
		shutdownWG: sync.WaitGroup
		pollLimiter: rate.Limiter | $.VarRef<rate.Limiter> | null
		taskLimiter: rate.Limiter | $.VarRef<rate.Limiter> | null
		limiterContext: context.Context | null
		limiterContextCancel: ((cause: $.GoError) => void) | null
		retrier: backoff2.ConcurrentRetrier | $.VarRef<backoff2.ConcurrentRetrier> | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		metricsScope: tally.Scope | null
		concurrency: worker.ConcurrencyLimit | $.VarRef<worker.ConcurrencyLimit> | null
		concurrencyAutoScaler: worker.ConcurrencyAutoScaler | $.VarRef<worker.ConcurrencyAutoScaler> | null
		taskQueueCh: $.Channel<any> | null
		sessionTokenBucket: __goscript_session.sessionTokenBucket | $.VarRef<__goscript_session.sessionTokenBucket> | null
	}

	constructor(init?: Partial<{options?: baseWorkerOptions, isWorkerStarted?: boolean, shutdownCh?: $.Channel<{}> | null, shutdownWG?: sync.WaitGroup, pollLimiter?: rate.Limiter | $.VarRef<rate.Limiter> | null, taskLimiter?: rate.Limiter | $.VarRef<rate.Limiter> | null, limiterContext?: context.Context | null, limiterContextCancel?: ((cause: $.GoError) => void) | null, retrier?: backoff2.ConcurrentRetrier | $.VarRef<backoff2.ConcurrentRetrier> | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null, metricsScope?: tally.Scope | null, concurrency?: worker.ConcurrencyLimit | $.VarRef<worker.ConcurrencyLimit> | null, concurrencyAutoScaler?: worker.ConcurrencyAutoScaler | $.VarRef<worker.ConcurrencyAutoScaler> | null, taskQueueCh?: $.Channel<any> | null, sessionTokenBucket?: __goscript_session.sessionTokenBucket | $.VarRef<__goscript_session.sessionTokenBucket> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			options: init?.options ? init.options.clone() : new baseWorkerOptions(undefined, true),
			isWorkerStarted: init?.isWorkerStarted ?? (false as boolean),
			shutdownCh: init?.shutdownCh ?? (null! as $.Channel<{}> | null),
			shutdownWG: init?.shutdownWG ? $.markAsStructValue($.cloneStructValue(init.shutdownWG)) : $.markAsStructValue(new sync.WaitGroup()),
			pollLimiter: init?.pollLimiter ?? (null! as rate.Limiter | $.VarRef<rate.Limiter> | null),
			taskLimiter: init?.taskLimiter ?? (null! as rate.Limiter | $.VarRef<rate.Limiter> | null),
			limiterContext: init?.limiterContext ?? (null! as context.Context | null),
			limiterContextCancel: init?.limiterContextCancel ?? (null! as ((cause: $.GoError) => void) | null),
			retrier: init?.retrier ?? (null! as backoff2.ConcurrentRetrier | $.VarRef<backoff2.ConcurrentRetrier> | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			metricsScope: init?.metricsScope ?? (null! as tally.Scope | null),
			concurrency: init?.concurrency ?? (null! as worker.ConcurrencyLimit | $.VarRef<worker.ConcurrencyLimit> | null),
			concurrencyAutoScaler: init?.concurrencyAutoScaler ?? (null! as worker.ConcurrencyAutoScaler | $.VarRef<worker.ConcurrencyAutoScaler> | null),
			taskQueueCh: init?.taskQueueCh ?? (null! as $.Channel<any> | null),
			sessionTokenBucket: init?.sessionTokenBucket ?? (null! as __goscript_session.sessionTokenBucket | $.VarRef<__goscript_session.sessionTokenBucket> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): baseWorker {
		return new baseWorker(this, true)
	}

	public __goscriptAssign(source: baseWorker): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.options, values.options)
		target.isWorkerStarted = values.isWorkerStarted
		target.shutdownCh = values.shutdownCh
		$.assignStruct(target.shutdownWG, values.shutdownWG)
		target.pollLimiter = values.pollLimiter
		target.taskLimiter = values.taskLimiter
		target.limiterContext = $.assignFieldValue(target.limiterContext, values.limiterContext, "context.Context")
		target.limiterContextCancel = values.limiterContextCancel
		target.retrier = values.retrier
		target.logger = values.logger
		target.metricsScope = $.assignFieldValue(target.metricsScope, values.metricsScope, "tally.Scope")
		target.concurrency = values.concurrency
		target.concurrencyAutoScaler = values.concurrencyAutoScaler
		target.taskQueueCh = values.taskQueueCh
		target.sessionTokenBucket = values.sessionTokenBucket
	}

	public async Run(): globalThis.Promise<void> {
		const bw: baseWorker | $.VarRef<baseWorker> | null = this;
		await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as baseWorker).Start() : baseWorker.prototype.Start.call(bw))
		let d = await $.chanRecv(await __goscript_internal_utils.getKillSignal())
		await __goscript_internal_task_handlers.traceLog($.functionValue(async (): globalThis.Promise<void> => {
			await zap.Logger.prototype.Info.call($.pointerValue<baseWorker>(bw).logger, "Worker has been killed", $.arrayToSlice<zap.Field>([zap.String("Signal", (__goscriptAwait = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? (d as Exclude<os.Signal, null>) : $.pointerValue<Exclude<os.Signal, null>>(d)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]))
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as baseWorker).Stop() : baseWorker.prototype.Stop.call(bw))
	}

	public async Start(): globalThis.Promise<void> {
		let bw: baseWorker | $.VarRef<baseWorker> | null = this;
		const bw$: baseWorker = bw == null ? $.pointerTarget<baseWorker>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<baseWorker>(bw)
		if ((bw$ as baseWorker).isWorkerStarted) {
			return
		}

		void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((bw$ as baseWorker).metricsScope).Counter(metrics.WorkerStartCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		await worker.ConcurrencyAutoScaler.prototype.Start.call((bw$ as baseWorker).concurrencyAutoScaler)

		let maxPollerCount = (bw$ as baseWorker).options.pollerCountWithoutAutoScaling
		if ((bw$ as baseWorker).options.pollerAutoScaler.Enabled) {
			maxPollerCount = (bw$ as baseWorker).options.pollerAutoScaler.PollerMaxCount
		}
		for (let i = 0; i < maxPollerCount; i++) {
			void (bw$ as baseWorker).shutdownWG.Add(1)
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.runPoller())((bw$ as baseWorker)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal.(*baseWorker).runPoller-fm")
			queueMicrotask(async () => { await __goscriptDeferCallee0() })
		}

		void (bw$ as baseWorker).shutdownWG.Add(1)
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.runTaskDispatcher())((bw$ as baseWorker)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal.(*baseWorker).runTaskDispatcher-fm")
		queueMicrotask(async () => { await __goscriptDeferCallee1() });

		;(bw$ as baseWorker).isWorkerStarted = true
		await __goscript_internal_task_handlers.traceLog($.functionValue(async (): globalThis.Promise<void> => {
			await zap.Logger.prototype.Info.call((bw$ as baseWorker).logger, "Started Worker", $.arrayToSlice<zap.Field>([zap.Int("PollerCountWithoutAutoScaling", (bw$ as baseWorker).options.pollerCountWithoutAutoScaling), zap.Int("MaxConcurrentTask", (bw$ as baseWorker).options.maxConcurrentTask), zap.Float64("MaxTaskPerSecond", (bw$ as baseWorker).options.maxTaskPerSecond), zap.Bool("AutoscalerEnabled", (bw$ as baseWorker).options.pollerAutoScaler.Enabled), zap.Int("AutoscalerPollerMaxCount", (bw$ as baseWorker).options.pollerAutoScaler.PollerMaxCount), zap.Int("AutoscalerPollerMinCount", (bw$ as baseWorker).options.pollerAutoScaler.PollerMinCount), zap.Int("AutoscalerPollerInitialCount", (bw$ as baseWorker).options.pollerAutoScaler.PollerInitCount)]))
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	}

	public async Stop(): globalThis.Promise<void> {
		const bw: baseWorker | $.VarRef<baseWorker> | null = this;
		const bw$: baseWorker = bw == null ? $.pointerTarget<baseWorker>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<baseWorker>(bw)
		if (!(bw$ as baseWorker).isWorkerStarted) {
			return
		}
		void (bw$ as baseWorker).shutdownCh!.close()
		void (__goscriptAwait = (bw$ as baseWorker).limiterContextCancel!(errShutdown), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await worker.ConcurrencyAutoScaler.prototype.Stop.call((bw$ as baseWorker).concurrencyAutoScaler)

		{
			let success = await util.AwaitWaitGroup($.fieldRef((bw$ as baseWorker)._fields, "shutdownWG"), (bw$ as baseWorker).options.shutdownTimeout)
			if (!success) {
				await __goscript_internal_task_handlers.traceLog($.functionValue(async (): globalThis.Promise<void> => {
					await zap.Logger.prototype.Info.call((bw$ as baseWorker).logger, "Worker graceful shutdown timed out.", $.arrayToSlice<zap.Field>([zap.Duration("Shutdown timeout", (bw$ as baseWorker).options.shutdownTimeout)]))
				}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
			}
		}

		// Close context
		if ((bw$ as baseWorker).options.userContextCancel != null) {
			void (__goscriptAwait = (bw$ as baseWorker).options.userContextCancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return
	}

	public async isShutdown(): globalThis.Promise<boolean> {
		const bw: baseWorker | $.VarRef<baseWorker> | null = this;
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, boolean>([
			{
				id: 0,
				isSend: false,
				channel: $.pointerValue<baseWorker>(bw).shutdownCh,
				onSelected: async (__goscriptSelect0Result) => {
					return true
				}
			},
			{
				id: -1,
				isSend: false,
				channel: null,
				onSelected: async (__goscriptSelect0Result) => {
					return false
				}
			}
		], true)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async pollTask(): globalThis.Promise<void> {
		const bw: baseWorker | $.VarRef<baseWorker> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const bw$: baseWorker = bw == null ? $.pointerTarget<baseWorker>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<baseWorker>(bw)
		let err: $.GoError = null! as $.GoError
		let task: any = null! as any

		{
			let pErr = (__goscriptAwait = $.pointerValue<Exclude<worker.Permit, null>>($.pointerValue<worker.ConcurrencyLimit>((bw$ as baseWorker).concurrency).PollerPermit).Acquire((bw$ as baseWorker).limiterContext), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (pErr == null) {
				const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Release())($.pointerValue<Exclude<worker.Permit, null>>($.pointerValue<worker.ConcurrencyLimit>((bw$ as baseWorker).concurrency).PollerPermit)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal/worker.Permit.Release-fm")
				__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee2(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			} else {
				if (!errors.Is($.pointerValueOrNil(context.Cause($.pointerValueOrNil((bw$ as baseWorker).limiterContext)!))!, $.pointerValueOrNil(errShutdown)!)) {
					await zap.Logger.prototype.Warn.call((bw$ as baseWorker).logger, "poller permit acquire error", $.arrayToSlice<zap.Field>([zap.Error(pErr)]))
				}
				return
			}
		}

		await backoff2.ConcurrentRetrier.prototype.Throttle.call((bw$ as baseWorker).retrier)
		if (((bw$ as baseWorker).pollLimiter == null) || (await rate.Limiter.prototype.Wait.call((bw$ as baseWorker).pollLimiter, (bw$ as baseWorker).limiterContext) == null)) {
			let __goscriptTuple0: any = await $.pointerValue<Exclude<__goscript_internal_task_pollers.taskPoller, null>>((bw$ as baseWorker).options.taskWorker).PollTask()
			task = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			if ((err != null) && __goscript_internal_public.enableVerboseLogging) {
				await zap.Logger.prototype.Debug.call((bw$ as baseWorker).logger, "Failed to poll for task.", $.arrayToSlice<zap.Field>([zap.Error(err)]))
			}
			if (err != null) {
				if (isNonRetriableError(err)) {
					await zap.Logger.prototype.Error.call((bw$ as baseWorker).logger, "Worker received non-retriable error from PollTask; continue polling.", $.arrayToSlice<zap.Field>([zap.Error(err)]))
				}
				await backoff2.ConcurrentRetrier.prototype.Failed.call((bw$ as baseWorker).retrier)
			} else {
				await backoff2.ConcurrentRetrier.prototype.Succeeded.call((bw$ as baseWorker).retrier)
				{
					let [t, ok] = $.typeAssertTuple<__goscript_internal_task_handlers.autoConfigHintAwareTask | null>(task, "internal.autoConfigHintAwareTask")
					if (ok) {
						await worker.ConcurrencyAutoScaler.prototype.ProcessPollerHint.call((bw$ as baseWorker).concurrencyAutoScaler, ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<__goscript_internal_task_handlers.autoConfigHintAwareTask, null>) : $.pointerValue<Exclude<__goscript_internal_task_handlers.autoConfigHintAwareTask, null>>(t)).getAutoConfigHint(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as shared.AutoConfigHint | $.VarRef<shared.AutoConfigHint> | null))
					}
				}
			}
		}

		if (task != null) {
			const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: true,
					channel: (bw$ as baseWorker).taskQueueCh,
					value: new polledTask({task: task}),
				},
				{
					id: 1,
					isSend: false,
					channel: (bw$ as baseWorker).shutdownCh,
				}
			], false)
			if (__goscriptSelect1HasReturn) {
				return __goscriptSelect1Value
			}
		} else {
			void (__goscriptAwait = $.pointerValue<Exclude<worker.Permit, null>>($.pointerValue<worker.ConcurrencyLimit>((bw$ as baseWorker).concurrency).TaskPermit).Release(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async processTask(task: any): globalThis.Promise<void> {
		const bw: baseWorker | $.VarRef<baseWorker> | null = this;
		const __defer = new $.AsyncDisposableStack()
		try {
			const bw$: baseWorker = bw == null ? $.pointerTarget<baseWorker>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<baseWorker>(bw)
			const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Done())((bw$ as baseWorker).shutdownWG), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*WaitGroup).Done-fm")
			__defer.defer(() => { __goscriptDeferCallee3() })
			// If the task is from poller, after processing it we would need to request a new poll. Otherwise, the task is from
			// local activity worker, we don't need a new poll from server.
			let __goscriptTuple1: any = $.typeAssertTuple<polledTask | $.VarRef<polledTask> | null>(task, /* @__PURE__ */ $.pointerType("internal.polledTask"))
			let __goscriptShadow0: polledTask | $.VarRef<polledTask> | null = __goscriptTuple1[0]
			let isPolledTask = __goscriptTuple1[1]
			if (isPolledTask) {
				task = $.pointerValue<polledTask>(__goscriptShadow0).task
			}
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				{
					let p = $.recover()
					if (p != null) {
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((bw$ as baseWorker).metricsScope).Counter(metrics.WorkerPanicCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						let topLine = await fmt.Sprintf("base worker for %s [panic]:", (bw$ as baseWorker).options.workerType)
						let st = await __goscript_internal_workflow.getStackTraceRaw(topLine, 7, 0)
						await zap.Logger.prototype.Error.call((bw$ as baseWorker).logger, "Unhandled panic.", $.arrayToSlice<zap.Field>([zap.String("PanicError", await fmt.Sprintf("%v", p)), zap.String("PanicStack", st)]))
					}
				}

				if (isPolledTask) {
					void (__goscriptAwait = $.pointerValue<Exclude<worker.Permit, null>>($.pointerValue<worker.ConcurrencyLimit>((bw$ as baseWorker).concurrency).TaskPermit).Release(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			})() })
			let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_task_pollers.taskPoller, null>>((bw$ as baseWorker).options.taskWorker).ProcessTask(task), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				if (__goscript_internal_task_pollers.isClientSideError(err)) {
					await zap.Logger.prototype.Info.call((bw$ as baseWorker).logger, "Task processing failed with client side error", $.arrayToSlice<zap.Field>([zap.Error(err)]))
				} else {
					await zap.Logger.prototype.Info.call((bw$ as baseWorker).logger, "Task processing failed with error", $.arrayToSlice<zap.Field>([zap.Error(err)]))
				}
			}
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
	}

	public async runPoller(): globalThis.Promise<void> {
		const bw: baseWorker | $.VarRef<baseWorker> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const bw$: baseWorker = bw == null ? $.pointerTarget<baseWorker>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<baseWorker>(bw)
		const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Done())((bw$ as baseWorker).shutdownWG), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*WaitGroup).Done-fm")
		__defer.defer(() => { __goscriptDeferCallee4() })
		const __goscriptDeferCallee5 = $.functionValue(((__receiver) => () => __receiver.Stop())($.pointerValue<Exclude<debug.Stopper, null>>((__goscriptAwait = $.pointerValue<Exclude<debug.PollerTracker, null>>((bw$ as baseWorker).options.pollerTracker).Start(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal/common/debug.Stopper.Stop-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee5(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		void (__goscriptAwait = $.pointerValue<Exclude<tally.Counter, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((bw$ as baseWorker).metricsScope).Counter(metrics.PollerStartCounter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inc(1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		while (true) {
			let __goscriptTuple2: any = await $.pointerValue<Exclude<worker.Permit, null>>($.pointerValue<worker.ConcurrencyLimit>((bw$ as baseWorker).concurrency).TaskPermit).AcquireChan((bw$ as baseWorker).limiterContext)
			let permitChannel: $.Channel<{}> | null = __goscriptTuple2[0]
			let channelDone: (() => void) | null = __goscriptTuple2[1]
			const [__goscriptSelect2HasReturn, __goscriptSelect2Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: (bw$ as baseWorker).shutdownCh,
					onSelected: async (__goscriptSelect2Result) => {
						void (__goscriptAwait = channelDone!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						return $.selectVoidReturn()
					}
				},
				{
					id: 1,
					isSend: false,
					channel: permitChannel,
					onSelected: async (__goscriptSelect2Result) => {
						void (__goscriptAwait = channelDone!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						// TODO move to a centralized place inside the worker
						// emit metrics on concurrent task permit quota and current task permit count
						// NOTE task permit doesn't mean there is a task running, it still needs to poll until it gets a task to process
						// thus the metrics is only an estimated value of how many tasks are running concurrently
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Histogram, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((bw$ as baseWorker).metricsScope).Histogram(metrics.ConcurrentTaskQuota, $.namedValueInterfaceValue<tally.Buckets | null>(concurrentTaskHistogramBuckets, "tally.ValueBuckets", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).RecordValue((__goscriptAwait = $.pointerValue<Exclude<worker.Permit, null>>($.pointerValue<worker.ConcurrencyLimit>((bw$ as baseWorker).concurrency).TaskPermit).Quota(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						void (__goscriptAwait = $.pointerValue<Exclude<tally.Histogram, null>>((__goscriptAwait = $.pointerValue<Exclude<tally.Scope, null>>((bw$ as baseWorker).metricsScope).Histogram(metrics.PollerRequestBufferUsage, $.namedValueInterfaceValue<tally.Buckets | null>(concurrentTaskHistogramBuckets, "tally.ValueBuckets", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).RecordValue((__goscriptAwait = $.pointerValue<Exclude<worker.Permit, null>>($.pointerValue<worker.ConcurrencyLimit>((bw$ as baseWorker).concurrency).TaskPermit).Count(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if ((bw$ as baseWorker).sessionTokenBucket != null) {
							await __goscript_session.sessionTokenBucket.prototype.waitForAvailableToken.call((bw$ as baseWorker).sessionTokenBucket)
						}
						await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as baseWorker).pollTask() : baseWorker.prototype.pollTask.call(bw))
					}
				}
			], false)
			if (__goscriptSelect2HasReturn) {
				return __goscriptSelect2Value
			}
		}
	}

	public async runTaskDispatcher(): globalThis.Promise<void> {
		const bw: baseWorker | $.VarRef<baseWorker> | null = this;
		using __defer = new $.DisposableStack()
		const bw$: baseWorker = bw == null ? $.pointerTarget<baseWorker>(bw) : (bw as any).__isVarRef === true ? (bw as any).value : (bw as any).__goValue === undefined ? (bw as any) : $.pointerTarget<baseWorker>(bw)
		const __goscriptDeferCallee6 = $.functionValue(((__receiver) => () => __receiver.Done())((bw$ as baseWorker).shutdownWG), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*WaitGroup).Done-fm")
		__defer.defer(() => { __goscriptDeferCallee6() })

		while (true) {
			// wait for new task or shutdown
			const [__goscriptSelect3HasReturn, __goscriptSelect3Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: (bw$ as baseWorker).shutdownCh,
					onSelected: async (__goscriptSelect3Result) => {
						return $.selectVoidReturn()
					}
				},
				{
					id: 1,
					isSend: false,
					channel: (bw$ as baseWorker).taskQueueCh,
					onSelected: async (__goscriptSelect3Result) => {
						let task = __goscriptSelect3Result.value
						let [, isPolledTask] = $.typeAssertTuple<polledTask | $.VarRef<polledTask> | null>(task, /* @__PURE__ */ $.pointerType("internal.polledTask"))
						if (isPolledTask && (await rate.Limiter.prototype.Wait.call((bw$ as baseWorker).taskLimiter, (bw$ as baseWorker).limiterContext) != null)) {
							if (await (bw !== null && (bw as any).__isVarRef !== true && (bw as any).__goValue === undefined ? ((bw as any) as baseWorker).isShutdown() : baseWorker.prototype.isShutdown.call(bw))) {
								return $.selectVoidReturn()
							}
						}
						void (bw$ as baseWorker).shutdownWG.Add(1)
						const __goscriptDeferCallee7 = $.functionValue(((__receiver) => (task: any) => __receiver.processTask(task))((bw$ as baseWorker)), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal.(*baseWorker).processTask-fm")
						const __goscriptDeferArg0 = task
						queueMicrotask(async () => { await __goscriptDeferCallee7(__goscriptDeferArg0) })
					}
				}
			], false)
			if (__goscriptSelect3HasReturn) {
				return __goscriptSelect3Value
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"internal.baseWorker",
		() => new baseWorker(),
		() => [$.methodSignature("Run", [], [], true), $.methodSignature("Start", [], [], true), $.methodSignature("Stop", [], [], true), $.methodSignature("isShutdown", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("pollTask", [], [], true), $.methodSignature("processTask", [["task", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("runPoller", [], [], true), $.methodSignature("runTaskDispatcher", [], [], true)],
		baseWorker,
		() => [/* @__PURE__ */ $.structField("options", "internal.baseWorkerOptions", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("isWorkerStarted", /* @__PURE__ */ $.basicType("bool"), [1], 184, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("shutdownCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [2], 192, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("shutdownWG", "sync.WaitGroup", [3], 200, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("pollLimiter", /* @__PURE__ */ $.pointerType("rate.Limiter"), [4], 216, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("taskLimiter", /* @__PURE__ */ $.pointerType("rate.Limiter"), [5], 224, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("limiterContext", "context.Context", [6], 232, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("limiterContextCancel", ({ kind: $.TypeKind.Function, name: "context.CancelCauseFunc", params: ["error"], results: [] } as $.FunctionTypeInfo), [7], 248, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("retrier", /* @__PURE__ */ $.pointerType("backoff.ConcurrentRetrier"), [8], 256, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [9], 264, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("metricsScope", "tally.Scope", [10], 272, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("concurrency", /* @__PURE__ */ $.pointerType("worker.ConcurrencyLimit"), [11], 288, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("concurrencyAutoScaler", /* @__PURE__ */ $.pointerType("worker.ConcurrencyAutoScaler"), [12], 296, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("taskQueueCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Interface, methods: [] }, "both"), [13], 304, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("sessionTokenBucket", /* @__PURE__ */ $.pointerType("internal.sessionTokenBucket"), [14], 312, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class polledTask {
	public get task(): any {
		return this._fields.task
	}

	public set task(value: any) {
		this._fields.task = value
	}

	public _fields: {
		task: any
	}

	constructor(init?: Partial<{task?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			task: init?.task ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): polledTask {
		return new polledTask(this, true)
	}

	public __goscriptAssign(source: polledTask): void {
		const target = this._fields
		const values = source._fields
		target.task = $.assignFieldValue(target.task, values.task, { kind: $.TypeKind.Interface, methods: [] })
	}

	static __typeInfo = $.registerStructType(
		"internal.polledTask",
		() => new polledTask(),
		() => [],
		polledTask,
		() => [/* @__PURE__ */ $.structField("task", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export const retryPollOperationInitialInterval: time.Duration = 20000000n

export const retryPollOperationMaxInterval: time.Duration = 10000000000n

export let pollOperationRetryPolicy: backoff2.RetryPolicy | null = createPollRetryPolicy()

export function __goscript_set_pollOperationRetryPolicy(__goscriptValue: backoff2.RetryPolicy | null): void {
	pollOperationRetryPolicy = __goscriptValue
}

export let concurrentTaskHistogramBuckets: tally.ValueBuckets = ($.arrayToSlice<number>([0, 10, 20, 50, 100, 150, 200, 400, 600, 800, 1000, 1500, 2000, 3000, 5000, 10000]) as tally.ValueBuckets)

export function __goscript_set_concurrentTaskHistogramBuckets(__goscriptValue: tally.ValueBuckets): void {
	concurrentTaskHistogramBuckets = __goscriptValue
}

export let errShutdown: $.GoError = errors.New("worker shutting down")

export function __goscript_set_errShutdown(__goscriptValue: $.GoError): void {
	errShutdown = __goscriptValue
}

export function createPollRetryPolicy(): backoff2.RetryPolicy | null {
	let policy: backoff2.ExponentialRetryPolicy | $.VarRef<backoff2.ExponentialRetryPolicy> | null = backoff2.NewExponentialRetryPolicy(20000000n)
	void (policy !== null && (policy as any).__isVarRef !== true && (policy as any).__goValue === undefined ? ((policy as any) as backoff2.ExponentialRetryPolicy).SetMaximumInterval(10000000000n) : backoff2.ExponentialRetryPolicy.prototype.SetMaximumInterval.call(policy, 10000000000n))

	// NOTE: We don't use expiration interval since we don't use retries from retrier class.
	// We use it to calculate next backoff. We have additional layer that is built on poller
	// in the worker layer for to add some middleware for any poll retry that includes
	// (a) rate limiting across pollers (b) back-off across pollers when server is busy
	void (policy !== null && (policy as any).__isVarRef !== true && (policy as any).__goValue === undefined ? ((policy as any) as backoff2.ExponentialRetryPolicy).SetExpirationInterval(0n) : backoff2.ExponentialRetryPolicy.prototype.SetExpirationInterval.call(policy, 0n))
	return $.interfaceValue<backoff2.RetryPolicy | null>(policy, "*backoff.ExponentialRetryPolicy", /* @__PURE__ */ $.pointerType("backoff.ExponentialRetryPolicy"))
}

export async function newBaseWorker(options: baseWorkerOptions, logger: zap.Logger | $.VarRef<zap.Logger> | null, metricsScope: tally.Scope | null, sessionTokenBucket: __goscript_session.sessionTokenBucket | $.VarRef<__goscript_session.sessionTokenBucket> | null): globalThis.Promise<baseWorker | $.VarRef<baseWorker> | null> {
	let [ctx, cancel] = context.WithCancelCause($.pointerValueOrNil(context.Background())!)
	logger = await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).With($.arrayToSlice<zap.Field>([zap.String("WorkerType", options.workerType)])) : zap.Logger.prototype.With.call(logger, $.arrayToSlice<zap.Field>([zap.String("WorkerType", options.workerType)])))
	metricsScope = await __goscript_internal_worker.tagScope(metricsScope, $.arrayToSlice<string>(["WorkerType", options.workerType]))

	let concurrency: worker.ConcurrencyLimit | $.VarRef<worker.ConcurrencyLimit> | null = (() => { const __goscriptLiteralField0 = worker.NewResizablePermit(options.pollerCountWithoutAutoScaling); const __goscriptLiteralField1 = worker.NewResizablePermit(options.maxConcurrentTask); return new worker.ConcurrencyLimit({PollerPermit: __goscriptLiteralField0, TaskPermit: __goscriptLiteralField1}) })()

	let concurrencyAS: worker.ConcurrencyAutoScaler | $.VarRef<worker.ConcurrencyAutoScaler> | null = null! as worker.ConcurrencyAutoScaler | $.VarRef<worker.ConcurrencyAutoScaler> | null
	{
		let pollerOptions = (options.pollerAutoScaler).clone()
		if (pollerOptions.Enabled) {
			concurrency = (() => { const __goscriptLiteralField2 = worker.NewResizablePermit(pollerOptions.PollerInitCount); const __goscriptLiteralField3 = worker.NewResizablePermit(options.maxConcurrentTask); return new worker.ConcurrencyLimit({PollerPermit: __goscriptLiteralField2, TaskPermit: __goscriptLiteralField3}) })()
			concurrencyAS = await worker.NewConcurrencyAutoScaler((() => { const __goscriptLiteralField4 = clockwork.NewRealClock(); return new worker.ConcurrencyAutoScalerInput({Concurrency: concurrency, Cooldown: pollerOptions.Cooldown, PollerMaxCount: pollerOptions.PollerMaxCount, PollerMinCount: pollerOptions.PollerMinCount, PollerWaitTimeUpperBound: pollerOptions.PollerWaitTimeUpperBound, PollerWaitTimeLowerBound: pollerOptions.PollerWaitTimeLowerBound, Logger: logger, Scope: metricsScope, Clock: __goscriptLiteralField4}, true) })())
		}
	}

	let bw: baseWorker | $.VarRef<baseWorker> | null = (await (async () => { const __goscriptLiteralField5 = rate.NewLimiter(options.maxTaskPerSecond, 1); const __goscriptLiteralField6 = await backoff2.NewConcurrentRetrier(pollOperationRetryPolicy); return new baseWorker({options: options, shutdownCh: $.makeChannel<{}>(0, {}, "both"), taskLimiter: __goscriptLiteralField5, retrier: __goscriptLiteralField6, logger: logger, metricsScope: metricsScope, concurrency: concurrency, concurrencyAutoScaler: concurrencyAS, taskQueueCh: $.makeChannel<any>(0, null! as any, "both"), limiterContext: ctx, limiterContextCancel: cancel, sessionTokenBucket: sessionTokenBucket}) })())
	if (options.pollerRate > 0) {
		$.pointerValue<baseWorker>(bw).pollLimiter = rate.NewLimiter(options.pollerRate, 1)
	}
	return bw
}

export function isNonRetriableError(err: $.GoError): boolean {
	if (err == null) {
		return false
	}
	{
		const __goscriptTypeSwitchValue = err
		switch (true) {
			case $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.BadRequestError")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.ClientVersionNotSupportedError")):
				{
					return true
				}
				break
		}
	}
	return false
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({AsDurations: (receiver: any, ...args: any[]) => (tally.ValueBuckets_AsDurations as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), AsValues: (receiver: any, ...args: any[]) => (tally.ValueBuckets_AsValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Len: (receiver: any, ...args: any[]) => (tally.ValueBuckets_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Less: (receiver: any, ...args: any[]) => (tally.ValueBuckets_Less as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (tally.ValueBuckets_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Swap: (receiver: any, ...args: any[]) => (tally.ValueBuckets_Swap as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"), "tally.ValueBuckets"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("AsDurations", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))]), $.methodSignature("AsValues", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("float64"))]), $.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Less", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Swap", [["i", /* @__PURE__ */ $.basicType("int")], ["j", /* @__PURE__ */ $.basicType("int")]])])
}

var __goscriptAwait: any
