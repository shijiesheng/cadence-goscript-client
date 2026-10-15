// Generated file based on internal_workflow_testsuite.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as clockwork from "@goscript/github.com/jonboulle/clockwork/index.js"

import * as debug from "@goscript/go.uber.org/cadence/internal/common/debug/index.js"

import * as clock from "@goscript/github.com/facebookgo/clock/index.js"

import * as gomock from "@goscript/github.com/golang/mock/gomock/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as cron from "@goscript/github.com/robfig/cron/index.js"

import * as mock2 from "@goscript/github.com/stretchr/testify/mock/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as workflowservicetest from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowservicetest/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as list from "@goscript/container/list/index.js"

import type * as shadower from "@goscript/go.uber.org/cadence/.gen/go/shadower/index.js"

import * as auth from "@goscript/go.uber.org/cadence/internal/common/auth/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_activity_task_handler from "./activity_task_handler.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_convert from "./convert.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import * as __goscript_internal_decision_state_machine from "./internal_decision_state_machine.gs.ts"

import * as __goscript_internal_event_handlers from "./internal_event_handlers.gs.ts"

import * as __goscript_internal_logging_tags from "./internal_logging_tags.gs.ts"

import * as __goscript_internal_poller_autoscaler from "./internal_poller_autoscaler.gs.ts"

import * as __goscript_internal_pressure_points from "./internal_pressure_points.gs.ts"

import * as __goscript_internal_public from "./internal_public.gs.ts"

import * as __goscript_internal_task_handlers from "./internal_task_handlers.gs.ts"

import * as __goscript_internal_task_pollers from "./internal_task_pollers.gs.ts"

import * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_worker from "./worker.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_shadower from "./workflow_shadower.gs.ts"

import * as __goscript_workflow_testsuite from "./workflow_testsuite.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/jonboulle/clockwork/index.js"
import "@goscript/go.uber.org/cadence/internal/common/debug/index.js"
import "@goscript/github.com/facebookgo/clock/index.js"
import "@goscript/github.com/golang/mock/gomock/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/robfig/cron/index.js"
import "@goscript/github.com/stretchr/testify/mock/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/yarpc/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowservicetest/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/container/list/index.js"
import "@goscript/go.uber.org/cadence/internal/common/auth/index.js"
import "@goscript/sync/atomic/index.js"
import "./activity.gs.ts"
import "./activity_task_handler.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./convert.gs.ts"
import "./encoded.gs.ts"
import "./error.gs.ts"
import "./headers.gs.ts"
import "./interceptors.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_decision_state_machine.gs.ts"
import "./internal_event_handlers.gs.ts"
import "./internal_logging_tags.gs.ts"
import "./internal_poller_autoscaler.gs.ts"
import "./internal_pressure_points.gs.ts"
import "./internal_public.gs.ts"
import "./internal_task_handlers.gs.ts"
import "./internal_task_pollers.gs.ts"
import "./internal_time.gs.ts"
import "./internal_utils.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_worker_base.gs.ts"
import "./internal_workflow.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./worker.gs.ts"
import "./workflow.gs.ts"
import "./workflow_shadower.gs.ts"
import "./workflow_testsuite.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.testTimerHandle", "internal.testActivityHandle", "internal.testWorkflowHandle", "internal.testCallbackHandle", "internal.activityExecutorWrapper", "internal.workflowExecutorWrapper", "internal.mockWrapper", "internal.taskListSpecificActivity", "internal.testWorkflowEnvironmentShared", "internal.testWorkflowEnvironmentImpl", "internal.testSessionEnvironmentImpl", "internal.testReporter"])

export class testTimerHandle {
	public get env(): testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null {
		return this._fields.env
	}

	public set env(value: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null) {
		this._fields.env = value
	}

	public get callback(): ((result: $.Slice<number>, err: $.GoError) => void) | null {
		return this._fields.callback
	}

	public set callback(value: ((result: $.Slice<number>, err: $.GoError) => void) | null) {
		this._fields.callback = value
	}

	public get timer(): clock.Timer | $.VarRef<clock.Timer> | null {
		return this._fields.timer
	}

	public set timer(value: clock.Timer | $.VarRef<clock.Timer> | null) {
		this._fields.timer = value
	}

	public get wallTimer(): clock.Timer | $.VarRef<clock.Timer> | null {
		return this._fields.wallTimer
	}

	public set wallTimer(value: clock.Timer | $.VarRef<clock.Timer> | null) {
		this._fields.wallTimer = value
	}

	public get duration(): time.Duration {
		return this._fields.duration
	}

	public set duration(value: time.Duration) {
		this._fields.duration = value
	}

	public get mockTimeToFire(): time.Time {
		return this._fields.mockTimeToFire
	}

	public set mockTimeToFire(value: time.Time) {
		this._fields.mockTimeToFire = value
	}

	public get wallTimeToFire(): time.Time {
		return this._fields.wallTimeToFire
	}

	public set wallTimeToFire(value: time.Time) {
		this._fields.wallTimeToFire = value
	}

	public get timerID(): number {
		return this._fields.timerID
	}

	public set timerID(value: number) {
		this._fields.timerID = value
	}

	public _fields: {
		env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null
		callback: ((result: $.Slice<number>, err: $.GoError) => void) | null
		timer: clock.Timer | $.VarRef<clock.Timer> | null
		wallTimer: clock.Timer | $.VarRef<clock.Timer> | null
		duration: time.Duration
		mockTimeToFire: time.Time
		wallTimeToFire: time.Time
		timerID: number
	}

	constructor(init?: Partial<{env?: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null, callback?: ((result: $.Slice<number>, err: $.GoError) => void) | null, timer?: clock.Timer | $.VarRef<clock.Timer> | null, wallTimer?: clock.Timer | $.VarRef<clock.Timer> | null, duration?: time.Duration, mockTimeToFire?: time.Time, wallTimeToFire?: time.Time, timerID?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			env: init?.env ?? (null! as testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null),
			callback: init?.callback ?? (null! as ((result: $.Slice<number>, err: $.GoError) => void) | null),
			timer: init?.timer ?? (null! as clock.Timer | $.VarRef<clock.Timer> | null),
			wallTimer: init?.wallTimer ?? (null! as clock.Timer | $.VarRef<clock.Timer> | null),
			duration: init?.duration ?? (0n as time.Duration),
			mockTimeToFire: init?.mockTimeToFire ? $.markAsStructValue($.cloneStructValue(init.mockTimeToFire)) : $.markAsStructValue(new time.Time()),
			wallTimeToFire: init?.wallTimeToFire ? $.markAsStructValue($.cloneStructValue(init.wallTimeToFire)) : $.markAsStructValue(new time.Time()),
			timerID: init?.timerID ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): testTimerHandle {
		return new testTimerHandle(this, true)
	}

	public __goscriptAssign(source: testTimerHandle): void {
		const target = this._fields
		const values = source._fields
		target.env = values.env
		target.callback = values.callback
		target.timer = values.timer
		target.wallTimer = values.wallTimer
		target.duration = values.duration
		$.assignStruct(target.mockTimeToFire, values.mockTimeToFire)
		$.assignStruct(target.wallTimeToFire, values.wallTimeToFire)
		target.timerID = values.timerID
	}

	static __typeInfo = $.registerStructType(
		"internal.testTimerHandle",
		() => new testTimerHandle(),
		() => [],
		testTimerHandle,
		() => [/* @__PURE__ */ $.structField("env", /* @__PURE__ */ $.pointerType("internal.testWorkflowEnvironmentImpl"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("timer", /* @__PURE__ */ $.pointerType("clock.Timer"), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("wallTimer", /* @__PURE__ */ $.pointerType("clock.Timer"), [3], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("duration", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [4], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("mockTimeToFire", "time.Time", [5], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("wallTimeToFire", "time.Time", [6], 64, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("timerID", /* @__PURE__ */ $.basicType("int"), [7], 88, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class testActivityHandle {
	public get callback(): ((result: $.Slice<number>, err: $.GoError) => void) | null {
		return this._fields.callback
	}

	public set callback(value: ((result: $.Slice<number>, err: $.GoError) => void) | null) {
		this._fields.callback = value
	}

	public get activityType(): string {
		return this._fields.activityType
	}

	public set activityType(value: string) {
		this._fields.activityType = value
	}

	public get heartbeatDetails(): $.Slice<number> {
		return this._fields.heartbeatDetails
	}

	public set heartbeatDetails(value: $.Slice<number>) {
		this._fields.heartbeatDetails = value
	}

	public _fields: {
		callback: ((result: $.Slice<number>, err: $.GoError) => void) | null
		activityType: string
		heartbeatDetails: $.Slice<number>
	}

	constructor(init?: Partial<{callback?: ((result: $.Slice<number>, err: $.GoError) => void) | null, activityType?: string, heartbeatDetails?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			callback: init?.callback ?? (null! as ((result: $.Slice<number>, err: $.GoError) => void) | null),
			activityType: init?.activityType ?? ("" as string),
			heartbeatDetails: init?.heartbeatDetails ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): testActivityHandle {
		return new testActivityHandle(this, true)
	}

	public __goscriptAssign(source: testActivityHandle): void {
		const target = this._fields
		const values = source._fields
		target.callback = values.callback
		target.activityType = values.activityType
		target.heartbeatDetails = values.heartbeatDetails
	}

	static __typeInfo = $.registerStructType(
		"internal.testActivityHandle",
		() => new testActivityHandle(),
		() => [],
		testActivityHandle,
		() => [/* @__PURE__ */ $.structField("callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("activityType", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("heartbeatDetails", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 24, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class testWorkflowHandle {
	public get env(): testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null {
		return this._fields.env
	}

	public set env(value: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null) {
		this._fields.env = value
	}

	public get callback(): ((result: $.Slice<number>, err: $.GoError) => void) | null {
		return this._fields.callback
	}

	public set callback(value: ((result: $.Slice<number>, err: $.GoError) => void) | null) {
		this._fields.callback = value
	}

	public get handled(): boolean {
		return this._fields.handled
	}

	public set handled(value: boolean) {
		this._fields.handled = value
	}

	public get params(): __goscript_internal_workflow.executeWorkflowParams | $.VarRef<__goscript_internal_workflow.executeWorkflowParams> | null {
		return this._fields.params
	}

	public set params(value: __goscript_internal_workflow.executeWorkflowParams | $.VarRef<__goscript_internal_workflow.executeWorkflowParams> | null) {
		this._fields.params = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public _fields: {
		env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null
		callback: ((result: $.Slice<number>, err: $.GoError) => void) | null
		handled: boolean
		params: __goscript_internal_workflow.executeWorkflowParams | $.VarRef<__goscript_internal_workflow.executeWorkflowParams> | null
		err: $.GoError
	}

	constructor(init?: Partial<{env?: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null, callback?: ((result: $.Slice<number>, err: $.GoError) => void) | null, handled?: boolean, params?: __goscript_internal_workflow.executeWorkflowParams | $.VarRef<__goscript_internal_workflow.executeWorkflowParams> | null, err?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			env: init?.env ?? (null! as testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null),
			callback: init?.callback ?? (null! as ((result: $.Slice<number>, err: $.GoError) => void) | null),
			handled: init?.handled ?? (false as boolean),
			params: init?.params ?? (null! as __goscript_internal_workflow.executeWorkflowParams | $.VarRef<__goscript_internal_workflow.executeWorkflowParams> | null),
			err: init?.err ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): testWorkflowHandle {
		return new testWorkflowHandle(this, true)
	}

	public __goscriptAssign(source: testWorkflowHandle): void {
		const target = this._fields
		const values = source._fields
		target.env = values.env
		target.callback = values.callback
		target.handled = values.handled
		target.params = values.params
		target.err = $.assignFieldValue(target.err, values.err, "error")
	}

	public async rerun(asChild: boolean): globalThis.Promise<boolean> {
		const h: testWorkflowHandle | $.VarRef<testWorkflowHandle> | null = this;
		const h$: testWorkflowHandle = h == null ? $.pointerTarget<testWorkflowHandle>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<testWorkflowHandle>(h)
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = (h$ as testWorkflowHandle).env
		let env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		if (asChild && !(env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).isChildWorkflow() : testWorkflowEnvironmentImpl.prototype.isChildWorkflow.call(env))) {
			return false
		}
		if (!asChild && (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).isChildWorkflow() : testWorkflowEnvironmentImpl.prototype.isChildWorkflow.call(env))) {
			return false
		}
		let params: __goscript_internal_workflow.executeWorkflowParams | $.VarRef<__goscript_internal_workflow.executeWorkflowParams> | null = (h$ as testWorkflowHandle).params
		let params$: __goscript_internal_workflow.executeWorkflowParams = params == null ? $.pointerTarget<__goscript_internal_workflow.executeWorkflowParams>(params) : (params as any).__isVarRef === true ? (params as any).value : (params as any).__goValue === undefined ? (params as any) : $.pointerTarget<__goscript_internal_workflow.executeWorkflowParams>(params)

		// pass down the last completion result
		let result: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
		if ((env$ as testWorkflowEnvironmentImpl).testResult != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_encoded.Value, null>>((env$ as testWorkflowEnvironmentImpl).testResult).Get($.interfaceValue(result, "*[]byte", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if ($.sliceLen(result.value) == 0) {
			// not successful run this time, carry over from whatever previous run pass to this run.
			result.value = $.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).lastCompletionResult
		}
		if (asChild) {
			;(params$ as __goscript_internal_workflow.executeWorkflowParams).lastCompletionResult = result.value

			if (((params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.retryPolicy != null) && ((env$ as testWorkflowEnvironmentImpl).testError != null)) {
				let [errReason, ] = await __goscript_internal_utils.getErrorDetails((env$ as testWorkflowEnvironmentImpl).testError, (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)))
				let expireTime: time.Time = $.markAsStructValue(new time.Time())
				if (shared.RetryPolicy.prototype.GetExpirationIntervalInSeconds.call((params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.retryPolicy) > 0) {
					expireTime = $.assignStruct(expireTime, $.markAsStructValue($.cloneStructValue((params$ as __goscript_internal_workflow.executeWorkflowParams).scheduledTime)).Add($.int64Mul(1000000000n, $.int64(shared.RetryPolicy.prototype.GetExpirationIntervalInSeconds.call((params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.retryPolicy)))))
				}
				let backoff = getRetryBackoffFromThriftRetryPolicy((params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.retryPolicy, $.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).Attempt, errReason, await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).Now() : testWorkflowEnvironmentImpl.prototype.Now.call(env)), expireTime)
				if (backoff > 0n) {
					// remove the current child workflow from the pending child workflow map because
					// the childWorkflowID will be the same for retry run.
					$.deleteMapEntry($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningWorkflows, $.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).WorkflowExecution.ID);
					;(params$ as __goscript_internal_workflow.executeWorkflowParams).attempt = (((params$ as __goscript_internal_workflow.executeWorkflowParams).attempt + 1) | 0)
					await testWorkflowEnvironmentImpl.prototype.executeChildWorkflowWithDelay.call((env$ as testWorkflowEnvironmentImpl).parentEnv, backoff, ((params$ as __goscript_internal_workflow.executeWorkflowParams)).clone(), (h$ as testWorkflowHandle).callback, (null as ((r: __goscript_workflow.WorkflowExecution, e: $.GoError) => void) | null))
					return true
				}
			}
			if ($.stringLen((params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.cronSchedule) > 0) {
				if (($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).cronMaxIterations < 0) || (($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).cronMaxIterations > 0) && ((env$ as testWorkflowEnvironmentImpl).cronIterations < $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).cronMaxIterations))) {
					let [schedule, err] = await cron.ParseStandard((params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.cronSchedule)
					if (err != null) {
						$.panic((fmt.Errorf("invalid cron schedule %v, err: %v", (params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.cronSchedule, (err as any)) as any))
					}
					let workflowNow = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).Now() : testWorkflowEnvironmentImpl.prototype.Now.call(env))))).In(time.UTC)))
					let backoff = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (schedule !== null && (schedule as any).__isVarRef !== true && (schedule as any).__goValue === undefined ? (schedule as Exclude<cron.Schedule, null>) : $.pointerValue<Exclude<cron.Schedule, null>>(schedule)).Next($.markAsStructValue($.cloneStructValue(workflowNow))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Sub($.markAsStructValue($.cloneStructValue(workflowNow)))
					if (backoff > 0n) {
						;(env$ as testWorkflowEnvironmentImpl).cronIterations++
						$.deleteMapEntry($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningWorkflows, $.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).WorkflowExecution.ID);
						;(params$ as __goscript_internal_workflow.executeWorkflowParams).attempt = 0
						$.assignStruct((params$ as __goscript_internal_workflow.executeWorkflowParams).scheduledTime, await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).Now() : testWorkflowEnvironmentImpl.prototype.Now.call(env)))
						await testWorkflowEnvironmentImpl.prototype.executeChildWorkflowWithDelay.call((env$ as testWorkflowEnvironmentImpl).parentEnv, backoff, ((params$ as __goscript_internal_workflow.executeWorkflowParams)).clone(), (h$ as testWorkflowHandle).callback, (null as ((r: __goscript_workflow.WorkflowExecution, e: $.GoError) => void) | null))
						return true
					}
				}
			}
		} else {
			// Re-run a non-Child workflow if it has a Cron Schedule
			if ($.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<testWorkflowEnvironmentImpl>((h$ as testWorkflowHandle).env).workflowInfo).CronSchedule != null) {
				if (($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).cronMaxIterations < 0) || (($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).cronMaxIterations > 0) && ((env$ as testWorkflowEnvironmentImpl).cronIterations < $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).cronMaxIterations))) {
					let cronSchedule = $.pointerValue<string>($.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<testWorkflowEnvironmentImpl>((h$ as testWorkflowHandle).env).workflowInfo).CronSchedule)
					if ($.stringLen(cronSchedule) == 0) {
						return false
					}
					let [schedule, err] = await cron.ParseStandard(cronSchedule)
					if (err != null) {
						$.panic((fmt.Errorf("invalid cron schedule %v, err: %v", cronSchedule, (err as any)) as any))
					}
					let workflowNow = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).Now() : testWorkflowEnvironmentImpl.prototype.Now.call(env))))).In(time.UTC)))
					let backoff = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (schedule !== null && (schedule as any).__isVarRef !== true && (schedule as any).__goValue === undefined ? (schedule as Exclude<cron.Schedule, null>) : $.pointerValue<Exclude<cron.Schedule, null>>(schedule)).Next($.markAsStructValue($.cloneStructValue(workflowNow))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Sub($.markAsStructValue($.cloneStructValue(workflowNow)))
					if (backoff > 0n) {
						;(env$ as testWorkflowEnvironmentImpl).cronIterations++
						// Prepare the env for the next iteration
						$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount--
						await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).setLastCompletionResult($.interfaceValue(result.value, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))) : testWorkflowEnvironmentImpl.prototype.setLastCompletionResult.call(env, $.interfaceValue(result.value, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
						// Since MainLoop is already running, we just want to execute the dispatcher
						// which will run the Workflow,
						await testWorkflowEnvironmentImpl.prototype.registerDelayedCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
							$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount++
							let __goscriptTuple0: any = await testWorkflowEnvironmentImpl.prototype.getWorkflowDefinition.call(env, ($.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).WorkflowType).clone());
							;(env$ as testWorkflowEnvironmentImpl).workflowDef = __goscriptTuple0[0]
							// Use the existing headers and input
							void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowDefinition, null>>((env$ as testWorkflowEnvironmentImpl).workflowDef).Execute($.interfaceValue<__goscript_internal_worker_base.workflowEnvironment | null>(env, "*internal.testWorkflowEnvironmentImpl", /* @__PURE__ */ $.pointerType("internal.testWorkflowEnvironmentImpl")), $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).header, (env$ as testWorkflowEnvironmentImpl).workflowInput), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
							await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).startDecisionTask() : testWorkflowEnvironmentImpl.prototype.startDecisionTask.call(env))
						}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), $.int64Sub(backoff, backoff))
						return true
					}
				}
			}
		}

		return false
	}

	static __typeInfo = $.registerStructType(
		"internal.testWorkflowHandle",
		() => new testWorkflowHandle(),
		() => [$.methodSignature("rerun", [["asChild", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("bool")], true)],
		testWorkflowHandle,
		() => [/* @__PURE__ */ $.structField("env", /* @__PURE__ */ $.pointerType("internal.testWorkflowEnvironmentImpl"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("handled", /* @__PURE__ */ $.basicType("bool"), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("params", /* @__PURE__ */ $.pointerType("internal.executeWorkflowParams"), [3], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("err", "error", [4], 32, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class testCallbackHandle {
	public get callback(): (() => void) | null {
		return this._fields.callback
	}

	public set callback(value: (() => void) | null) {
		this._fields.callback = value
	}

	public get startDecisionTask(): boolean {
		return this._fields.startDecisionTask
	}

	public set startDecisionTask(value: boolean) {
		this._fields.startDecisionTask = value
	}

	public get env(): testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null {
		return this._fields.env
	}

	public set env(value: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null) {
		this._fields.env = value
	}

	public _fields: {
		callback: (() => void) | null
		startDecisionTask: boolean
		env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null
	}

	constructor(init?: Partial<{callback?: (() => void) | null, startDecisionTask?: boolean, env?: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			callback: init?.callback ?? (null! as (() => void) | null),
			startDecisionTask: init?.startDecisionTask ?? (false as boolean),
			env: init?.env ?? (null! as testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): testCallbackHandle {
		return new testCallbackHandle(this, true)
	}

	public __goscriptAssign(source: testCallbackHandle): void {
		const target = this._fields
		const values = source._fields
		target.callback = values.callback
		target.startDecisionTask = values.startDecisionTask
		target.env = values.env
	}

	public async processCallback(): globalThis.Promise<void> {
		const c: testCallbackHandle | $.VarRef<testCallbackHandle> | null = this;
		using __defer = new $.DisposableStack()
		const c$: testCallbackHandle = c == null ? $.pointerTarget<testCallbackHandle>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<testCallbackHandle>(c)
		await $.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>((c$ as testCallbackHandle).env).testWorkflowEnvironmentShared).locker.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>((c$ as testCallbackHandle).env).testWorkflowEnvironmentShared).locker), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		void (__goscriptAwait = (c$ as testCallbackHandle).callback!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((c$ as testCallbackHandle).startDecisionTask) {
			await testWorkflowEnvironmentImpl.prototype.startDecisionTask.call((c$ as testCallbackHandle).env)
		}
	}

	static __typeInfo = $.registerStructType(
		"internal.testCallbackHandle",
		() => new testCallbackHandle(),
		() => [$.methodSignature("processCallback", [], [], true)],
		testCallbackHandle,
		() => [/* @__PURE__ */ $.structField("callback", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("startDecisionTask", /* @__PURE__ */ $.basicType("bool"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("env", /* @__PURE__ */ $.pointerType("internal.testWorkflowEnvironmentImpl"), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class activityExecutorWrapper {
	public get activityExecutor(): __goscript_internal_worker.activityExecutor | $.VarRef<__goscript_internal_worker.activityExecutor> | null {
		return this._fields.activityExecutor
	}

	public set activityExecutor(value: __goscript_internal_worker.activityExecutor | $.VarRef<__goscript_internal_worker.activityExecutor> | null) {
		this._fields.activityExecutor = value
	}

	public get env(): testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null {
		return this._fields.env
	}

	public set env(value: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null) {
		this._fields.env = value
	}

	public _fields: {
		activityExecutor: __goscript_internal_worker.activityExecutor | $.VarRef<__goscript_internal_worker.activityExecutor> | null
		env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null
	}

	constructor(init?: Partial<{activityExecutor?: __goscript_internal_worker.activityExecutor | $.VarRef<__goscript_internal_worker.activityExecutor> | null, env?: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			activityExecutor: init?.activityExecutor ?? (null! as __goscript_internal_worker.activityExecutor | $.VarRef<__goscript_internal_worker.activityExecutor> | null),
			env: init?.env ?? (null! as testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): activityExecutorWrapper {
		return new activityExecutorWrapper(this, true)
	}

	public __goscriptAssign(source: activityExecutorWrapper): void {
		const target = this._fields
		const values = source._fields
		target.activityExecutor = values.activityExecutor
		target.env = values.env
	}

	public async Execute(ctx: context.Context | null, input: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const a: activityExecutorWrapper | $.VarRef<activityExecutorWrapper> | null = this;
		const a$: activityExecutorWrapper = a == null ? $.pointerTarget<activityExecutorWrapper>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<activityExecutorWrapper>(a)
		let __goscriptShadow0 = $.varRef(await __goscript_activity.GetActivityInfo(ctx))
		let dc = await __goscript_internal_worker.getDataConverterFromActivityCtx(ctx)
		if ($.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>((a$ as activityExecutorWrapper).env).testWorkflowEnvironmentShared).onActivityStartedListener != null) {
			let waitCh: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
			await testWorkflowEnvironmentImpl.prototype.postCallback.call((a$ as activityExecutorWrapper).env, $.functionValue(async (): globalThis.Promise<void> => {
				await $.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>((a$ as activityExecutorWrapper).env).testWorkflowEnvironmentShared).onActivityStartedListener!(__goscriptShadow0, ctx, __goscript_workflow_testsuite.newEncodedValues(input, dc))
				waitCh!.close()
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), false)
			await $.chanRecv(waitCh)
		}

		let m: mockWrapper | $.VarRef<mockWrapper> | null = new mockWrapper({env: (a$ as activityExecutorWrapper).env, name: $.pointerValue<__goscript_internal_worker.activityExecutor>((a$ as activityExecutorWrapper).activityExecutor).name, fn: $.pointerValue<__goscript_internal_worker.activityExecutor>((a$ as activityExecutorWrapper).activityExecutor).fn, isWorkflow: false, dataConverter: dc})
		{
			let mockRet: mock2.Arguments = (await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mockWrapper).getMockReturn((ctx as any), input) : mockWrapper.prototype.getMockReturn.call(m, (ctx as any), input)) as mock2.Arguments)
			if (mockRet != null) {
				return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mockWrapper).executeMock((ctx as any), input, (mockRet as mock2.Arguments)) : mockWrapper.prototype.executeMock.call(m, (ctx as any), input, (mockRet as mock2.Arguments)))
			}
		}

		return __goscript_internal_worker.activityExecutor.prototype.Execute.call((a$ as activityExecutorWrapper).activityExecutor, ctx, input)
	}

	public async ExecuteWithActualArgs(ctx: context.Context | null, inputArgs: $.Slice<any>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const a: activityExecutorWrapper | $.VarRef<activityExecutorWrapper> | null = this;
		const a$: activityExecutorWrapper = a == null ? $.pointerTarget<activityExecutorWrapper>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<activityExecutorWrapper>(a)
		let __goscriptShadow1 = $.varRef(await __goscript_activity.GetActivityInfo(ctx))
		if ($.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>((a$ as activityExecutorWrapper).env).testWorkflowEnvironmentShared).onLocalActivityStartedListener != null) {
			let waitCh: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
			await testWorkflowEnvironmentImpl.prototype.postCallback.call((a$ as activityExecutorWrapper).env, $.functionValue(async (): globalThis.Promise<void> => {
				await $.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>((a$ as activityExecutorWrapper).env).testWorkflowEnvironmentShared).onLocalActivityStartedListener!(__goscriptShadow1, ctx, inputArgs)
				waitCh!.close()
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), false)
			await $.chanRecv(waitCh)
		}

		let m: mockWrapper | $.VarRef<mockWrapper> | null = new mockWrapper({env: (a$ as activityExecutorWrapper).env, name: $.pointerValue<__goscript_internal_worker.activityExecutor>((a$ as activityExecutorWrapper).activityExecutor).name, fn: $.pointerValue<__goscript_internal_worker.activityExecutor>((a$ as activityExecutorWrapper).activityExecutor).fn, isWorkflow: false})
		{
			let mockRet: mock2.Arguments = (await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mockWrapper).getMockReturnWithActualArgs((ctx as any), inputArgs) : mockWrapper.prototype.getMockReturnWithActualArgs.call(m, (ctx as any), inputArgs)) as mock2.Arguments)
			if (mockRet != null) {
				return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mockWrapper).executeMockWithActualArgs((ctx as any), inputArgs, (mockRet as mock2.Arguments)) : mockWrapper.prototype.executeMockWithActualArgs.call(m, (ctx as any), inputArgs, (mockRet as mock2.Arguments)))
			}
		}

		return __goscript_internal_worker.activityExecutor.prototype.ExecuteWithActualArgs.call((a$ as activityExecutorWrapper).activityExecutor, ctx, inputArgs)
	}

	public ActivityType(): any {
		return $.pointerValue<__goscript_internal_worker.activityExecutor>(this.activityExecutor).ActivityType()
	}

	public GetFunction(): any {
		return $.pointerValue<__goscript_internal_worker.activityExecutor>(this.activityExecutor).GetFunction()
	}

	public GetOptions(): any {
		return $.pointerValue<__goscript_internal_worker.activityExecutor>(this.activityExecutor).GetOptions()
	}

	public async executeWithActualArgsWithoutParseResult(ctx: any, actualArgs: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_internal_worker.activityExecutor>(this.activityExecutor).executeWithActualArgsWithoutParseResult(ctx, actualArgs)
	}

	static __typeInfo = $.registerStructType(
		"internal.activityExecutorWrapper",
		() => new activityExecutorWrapper(),
		() => [$.methodSignature("Execute", [["ctx", "context.Context"], ["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("ExecuteWithActualArgs", [["ctx", "context.Context"], ["inputArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("ActivityType", [], ["internal.ActivityType"]), $.methodSignature("GetFunction", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("GetOptions", [], ["internal.RegisterActivityOptions"]), $.methodSignature("executeWithActualArgsWithoutParseResult", [["ctx", "context.Context"], ["actualArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType("reflect.Value")])],
		activityExecutorWrapper,
		() => [/* @__PURE__ */ $.structField("activityExecutor", /* @__PURE__ */ $.pointerType("internal.activityExecutor"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("env", /* @__PURE__ */ $.pointerType("internal.testWorkflowEnvironmentImpl"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class workflowExecutorWrapper {
	public get workflowExecutor(): __goscript_internal_worker.workflowExecutor | $.VarRef<__goscript_internal_worker.workflowExecutor> | null {
		return this._fields.workflowExecutor
	}

	public set workflowExecutor(value: __goscript_internal_worker.workflowExecutor | $.VarRef<__goscript_internal_worker.workflowExecutor> | null) {
		this._fields.workflowExecutor = value
	}

	public get env(): testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null {
		return this._fields.env
	}

	public set env(value: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null) {
		this._fields.env = value
	}

	public _fields: {
		workflowExecutor: __goscript_internal_worker.workflowExecutor | $.VarRef<__goscript_internal_worker.workflowExecutor> | null
		env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null
	}

	constructor(init?: Partial<{workflowExecutor?: __goscript_internal_worker.workflowExecutor | $.VarRef<__goscript_internal_worker.workflowExecutor> | null, env?: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			workflowExecutor: init?.workflowExecutor ?? (null! as __goscript_internal_worker.workflowExecutor | $.VarRef<__goscript_internal_worker.workflowExecutor> | null),
			env: init?.env ?? (null! as testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowExecutorWrapper {
		return new workflowExecutorWrapper(this, true)
	}

	public __goscriptAssign(source: workflowExecutorWrapper): void {
		const target = this._fields
		const values = source._fields
		target.workflowExecutor = values.workflowExecutor
		target.env = values.env
	}

	public async Execute(ctx: __goscript_context.Context | null, input: $.Slice<number>): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const w: workflowExecutorWrapper | $.VarRef<workflowExecutorWrapper> | null = this;
		let result: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		const w$: workflowExecutorWrapper = w == null ? $.pointerTarget<workflowExecutorWrapper>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<workflowExecutorWrapper>(w)
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = (w$ as workflowExecutorWrapper).env
		let env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		if ((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).isChildWorkflow() : testWorkflowEnvironmentImpl.prototype.isChildWorkflow.call(env)) && ($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onChildWorkflowStartedListener != null)) {
			void (__goscriptAwait = $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onChildWorkflowStartedListener!(await __goscript_workflow.GetWorkflowInfo(ctx), ctx, __goscript_workflow_testsuite.newEncodedValues(input, testWorkflowEnvironmentImpl.prototype.GetDataConverter.call((w$ as workflowExecutorWrapper).env))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		if (!(env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).isChildWorkflow() : testWorkflowEnvironmentImpl.prototype.isChildWorkflow.call(env))) {
			// This is to prevent auto-forwarding mock clock before main workflow starts. For child workflow, we increase
			// the counter in env.ExecuteChildWorkflow(). We cannot do it here for child workflow, because we need to make
			// sure the counter is increased before returning from ExecuteChildWorkflow().
			$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount++
		}

		let m: mockWrapper | $.VarRef<mockWrapper> | null = (() => { const __goscriptLiteralField0 = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)); return new mockWrapper({env: env, name: $.pointerValue<__goscript_internal_worker.workflowExecutor>((w$ as workflowExecutorWrapper).workflowExecutor).workflowType, fn: $.pointerValue<__goscript_internal_worker.workflowExecutor>((w$ as workflowExecutorWrapper).workflowExecutor).fn, isWorkflow: true, dataConverter: __goscriptLiteralField0}) })()
		// This method is called by workflow's dispatcher. In this test suite, it is run in the main loop. We cannot block
		// the main loop, but the mock could block if it is configured to wait. So we need to use a separate goroutinue to
		// run the mock, and resume after mock call returns.
		let mockReadyChannel = await __goscript_workflow.NewChannel(ctx)
		// Make a copy of the context for getMockReturn() call to avoid race condition.
		// Use existing interceptors from env.
		let envInterceptor: __goscript_internal_workflow.workflowEnvironmentInterceptor | $.VarRef<__goscript_internal_workflow.workflowEnvironmentInterceptor> | null = new __goscript_internal_workflow.workflowEnvironmentInterceptor({env: $.interfaceValue<__goscript_internal_worker_base.workflowEnvironment | null>(env, "*internal.testWorkflowEnvironmentImpl", /* @__PURE__ */ $.pointerType("internal.testWorkflowEnvironmentImpl"))})
		let ctxCopy = await __goscript_internal_workflow.newWorkflowContext($.interfaceValue<__goscript_internal_worker_base.workflowEnvironment | null>((w$ as workflowExecutorWrapper).env, "*internal.testWorkflowEnvironmentImpl", /* @__PURE__ */ $.pointerType("internal.testWorkflowEnvironmentImpl")), $.interfaceValue<__goscript_interceptors.WorkflowInterceptor | null>(envInterceptor, "*internal.workflowEnvironmentInterceptor", /* @__PURE__ */ $.pointerType("internal.workflowEnvironmentInterceptor")), envInterceptor)
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			// getMockReturn could block if mock is configured to wait. The returned mockRet is what has been configured
			// for the mock by using MockCallWrapper.Return(). The mockRet could be mock values or mock function. We process
			// the returned mockRet by calling executeMock() later in the main thread after it is send over via mockReadyChannel.
			let mockRet: mock2.Arguments = (await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mockWrapper).getMockReturn((ctxCopy as any), input) : mockWrapper.prototype.getMockReturn.call(m, (ctxCopy as any), input)) as mock2.Arguments)
			await testWorkflowEnvironmentImpl.prototype.postCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
				void (__goscriptAwait = (mockReadyChannel !== null && (mockReadyChannel as any).__isVarRef !== true && (mockReadyChannel as any).__goValue === undefined ? (mockReadyChannel as Exclude<__goscript_workflow.Channel, null>) : $.pointerValue<Exclude<__goscript_workflow.Channel, null>>(mockReadyChannel)).SendAsync($.namedValueInterfaceValue<any>(mockRet, "mock.Arguments", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), true)
		})() })

		let mockRet: $.VarRef<mock2.Arguments> = $.varRef(null! as mock2.Arguments)
		// This will block workflow dispatcher (on cadence channel), which the dispatcher understand and will return from
		// ExecuteUntilAllBlocked() so the main loop is not blocked. The dispatcher will unblock when getMockReturn() returns.
		void (__goscriptAwait = (mockReadyChannel !== null && (mockReadyChannel as any).__isVarRef !== true && (mockReadyChannel as any).__goValue === undefined ? (mockReadyChannel as Exclude<__goscript_workflow.Channel, null>) : $.pointerValue<Exclude<__goscript_workflow.Channel, null>>(mockReadyChannel)).Receive(ctx, $.namedValueInterfaceValue<any>(mockRet, "*mock.Arguments", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic2())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// reduce runningCount to allow auto-forwarding mock clock after current workflow dispatcher run is blocked (aka
		// ExecuteUntilAllBlocked() returns).
		$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount--

		let childWE = ($.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).WorkflowExecution).clone()
		let startedErr: $.GoError = null! as $.GoError
		if (mockRet.value != null) {
			// workflow was mocked.
			let __goscriptTuple1: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mockWrapper).executeMock((ctx as any), input, (mockRet.value as mock2.Arguments)) : mockWrapper.prototype.executeMock.call(m, (ctx as any), input, (mockRet.value as mock2.Arguments)))
			result = __goscriptTuple1[0]
			err = __goscriptTuple1[1]
			if ((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).isChildWorkflow() : testWorkflowEnvironmentImpl.prototype.isChildWorkflow.call(env)) && ($.comparableEqual(err, __goscript_workflow_testsuite.ErrMockStartChildWorkflowFailed))) {
				let __goscriptAssign0_0: __goscript_workflow.WorkflowExecution = new __goscript_workflow.WorkflowExecution(undefined, true)
				let __goscriptAssign0_1: $.GoError = err
				childWE = $.assignStruct(childWE, __goscriptAssign0_0)
				startedErr = __goscriptAssign0_1
			}
		}

		if ((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).isChildWorkflow() : testWorkflowEnvironmentImpl.prototype.isChildWorkflow.call(env)) && ((env$ as testWorkflowEnvironmentImpl).startedHandler != null)) {
			// notify parent that child workflow is started
			await testWorkflowEnvironmentImpl.prototype.postCallback.call((env$ as testWorkflowEnvironmentImpl).parentEnv, $.functionValue(async (): globalThis.Promise<void> => {
				await (env$ as testWorkflowEnvironmentImpl).startedHandler!((childWE).clone(), startedErr)
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), true)
		}

		if (mockRet.value != null) {
			return [result, err]
		}

		// no mock, so call the actual workflow
		return __goscript_internal_worker.workflowExecutor.prototype.Execute.call((w$ as workflowExecutorWrapper).workflowExecutor, ctx, input)
	}

	public GetFunction(): any {
		return $.pointerValue<__goscript_internal_worker.workflowExecutor>(this.workflowExecutor).GetFunction()
	}

	public WorkflowType(): any {
		return $.pointerValue<__goscript_internal_worker.workflowExecutor>(this.workflowExecutor).WorkflowType()
	}

	static __typeInfo = $.registerStructType(
		"internal.workflowExecutorWrapper",
		() => new workflowExecutorWrapper(),
		() => [$.methodSignature("Execute", [["ctx", "internal.Context"], ["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("GetFunction", [], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("WorkflowType", [], ["internal.WorkflowType"])],
		workflowExecutorWrapper,
		() => [/* @__PURE__ */ $.structField("workflowExecutor", /* @__PURE__ */ $.pointerType("internal.workflowExecutor"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("env", /* @__PURE__ */ $.pointerType("internal.testWorkflowEnvironmentImpl"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class mockWrapper {
	public get env(): testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null {
		return this._fields.env
	}

	public set env(value: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null) {
		this._fields.env = value
	}

	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get fn(): any {
		return this._fields.fn
	}

	public set fn(value: any) {
		this._fields.fn = value
	}

	public get isWorkflow(): boolean {
		return this._fields.isWorkflow
	}

	public set isWorkflow(value: boolean) {
		this._fields.isWorkflow = value
	}

	public get dataConverter(): __goscript_encoded.DataConverter | null {
		return this._fields.dataConverter
	}

	public set dataConverter(value: __goscript_encoded.DataConverter | null) {
		this._fields.dataConverter = value
	}

	public _fields: {
		env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null
		name: string
		fn: any
		isWorkflow: boolean
		dataConverter: __goscript_encoded.DataConverter | null
	}

	constructor(init?: Partial<{env?: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null, name?: string, fn?: any, isWorkflow?: boolean, dataConverter?: __goscript_encoded.DataConverter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			env: init?.env ?? (null! as testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null),
			name: init?.name ?? ("" as string),
			fn: init?.fn ?? (null! as any),
			isWorkflow: init?.isWorkflow ?? (false as boolean),
			dataConverter: init?.dataConverter ?? (null! as __goscript_encoded.DataConverter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): mockWrapper {
		return new mockWrapper(this, true)
	}

	public __goscriptAssign(source: mockWrapper): void {
		const target = this._fields
		const values = source._fields
		target.env = values.env
		target.name = values.name
		target.fn = $.assignFieldValue(target.fn, values.fn, { kind: $.TypeKind.Interface, methods: [] })
		target.isWorkflow = values.isWorkflow
		target.dataConverter = $.assignFieldValue(target.dataConverter, values.dataConverter, "internal.DataConverter")
	}

	public async executeMock(ctx: any, input: $.Slice<number>, mockRet: mock2.Arguments): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: mockWrapper | $.VarRef<mockWrapper> | null = this;
		let result: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		const __defer = new $.AsyncDisposableStack()
		try {
			const m$: mockWrapper = m == null ? $.pointerTarget<mockWrapper>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<mockWrapper>(m)
			// have to handle panics here to support calling ExecuteChildWorkflow(...).GetChildWorkflowExecution().Get(...)
			// when a child is mocked.
			__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
				{
					let r = $.recover()
					if (r != null) {
						let st = await __goscript_internal_workflow.getStackTrace("executeMock", "panic", 4)
						err = $.interfaceValue<$.GoError>(__goscript_error.newPanicError(r, st), "*internal.PanicError", /* @__PURE__ */ $.pointerType("internal.PanicError"))
					}
				}
			})() })

			let fnName = (m$ as mockWrapper).name
			// check if mock returns function which must match to the actual function.
			{
				let mockFn = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mockWrapper).getMockFn((mockRet as mock2.Arguments)) : mockWrapper.prototype.getMockFn.call(m, (mockRet as mock2.Arguments)))
				if (mockFn != null) {
					// we found a mock function that matches to actual function, so call that mockFn
					if ((m$ as mockWrapper).isWorkflow) {
						let executor: __goscript_internal_worker.workflowExecutor | $.VarRef<__goscript_internal_worker.workflowExecutor> | null = new __goscript_internal_worker.workflowExecutor({workflowType: fnName, fn: mockFn})
						const __goscriptReturn6: [$.Slice<number>, $.GoError] = await (executor !== null && (executor as any).__isVarRef !== true && (executor as any).__goValue === undefined ? ((executor as any) as __goscript_internal_worker.workflowExecutor).Execute($.mustTypeAssert<__goscript_context.Context | null>(ctx, "internal.Context"), input) : __goscript_internal_worker.workflowExecutor.prototype.Execute.call(executor, $.mustTypeAssert<__goscript_context.Context | null>(ctx, "internal.Context"), input))
						result = __goscriptReturn6[0]
						err = __goscriptReturn6[1]
						await __defer.dispose()
						return [result, err]
					}
					let executor: __goscript_internal_worker.activityExecutor | $.VarRef<__goscript_internal_worker.activityExecutor> | null = new __goscript_internal_worker.activityExecutor({name: fnName, fn: mockFn})
					const __goscriptReturn8: [$.Slice<number>, $.GoError] = await (executor !== null && (executor as any).__isVarRef !== true && (executor as any).__goValue === undefined ? ((executor as any) as __goscript_internal_worker.activityExecutor).Execute($.mustTypeAssert<context.Context | null>(ctx, "context.Context"), input) : __goscript_internal_worker.activityExecutor.prototype.Execute.call(executor, $.mustTypeAssert<context.Context | null>(ctx, "context.Context"), input))
					result = __goscriptReturn8[0]
					err = __goscriptReturn8[1]
					await __defer.dispose()
					return [result, err]
				}
			}

			const __goscriptReturn10: [$.Slice<number>, $.GoError] = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mockWrapper).getMockValue((mockRet as mock2.Arguments)) : mockWrapper.prototype.getMockValue.call(m, (mockRet as mock2.Arguments)))
			result = __goscriptReturn10[0]
			err = __goscriptReturn10[1]
			await __defer.dispose()
			return [result, err]
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return [result, err]
	}

	public async executeMockWithActualArgs(ctx: any, inputArgs: $.Slice<any>, mockRet: mock2.Arguments): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: mockWrapper | $.VarRef<mockWrapper> | null = this;
		let fnName = $.pointerValue<mockWrapper>(m).name
		// check if mock returns function which must match to the actual function.
		{
			let mockFn = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mockWrapper).getMockFn((mockRet as mock2.Arguments)) : mockWrapper.prototype.getMockFn.call(m, (mockRet as mock2.Arguments)))
			if (mockFn != null) {
				let executor: __goscript_internal_worker.activityExecutor | $.VarRef<__goscript_internal_worker.activityExecutor> | null = new __goscript_internal_worker.activityExecutor({name: fnName, fn: mockFn})
				return (executor !== null && (executor as any).__isVarRef !== true && (executor as any).__goValue === undefined ? ((executor as any) as __goscript_internal_worker.activityExecutor).ExecuteWithActualArgs($.mustTypeAssert<context.Context | null>(ctx, "context.Context"), inputArgs) : __goscript_internal_worker.activityExecutor.prototype.ExecuteWithActualArgs.call(executor, $.mustTypeAssert<context.Context | null>(ctx, "context.Context"), inputArgs))
			}
		}

		return (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mockWrapper).getMockValue((mockRet as mock2.Arguments)) : mockWrapper.prototype.getMockValue.call(m, (mockRet as mock2.Arguments)))
	}

	public async getCtxArg(ctx: any): globalThis.Promise<$.Slice<any>> {
		const m: mockWrapper | $.VarRef<mockWrapper> | null = this;
		const m$: mockWrapper = m == null ? $.pointerTarget<mockWrapper>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<mockWrapper>(m)
		let fnType = reflect.TypeOf((m$ as mockWrapper).fn)
		if ((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumIn(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) > 0) {
			if ((!(m$ as mockWrapper).isWorkflow && await __goscript_internal_activity.isActivityContext((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) || ((m$ as mockWrapper).isWorkflow && await __goscript_internal_worker.isWorkflowContext((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).In(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))) {
				return $.arrayToSlice<any>([ctx])
			}
		}
		return null
	}

	public async getMockFn(mockRet: mock2.Arguments): globalThis.Promise<any> {
		const m: mockWrapper | $.VarRef<mockWrapper> | null = this;
		const m$: mockWrapper = m == null ? $.pointerTarget<mockWrapper>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<mockWrapper>(m)
		let fnName = (m$ as mockWrapper).name
		let mockRetLen = $.sliceLen((mockRet as mock2.Arguments))
		if (mockRetLen == 0) {
			$.panic(await fmt.Sprintf("mock of %v has no returns", fnName))
		}

		let fnType = reflect.TypeOf((m$ as mockWrapper).fn)
		// check if mock returns function which must match to the actual function.
		let mockFn = await mock2.Arguments_Get(mockRet, 0)
		let mockFnType = reflect.TypeOf(mockFn)
		if ((mockFnType != null) && ((__goscriptAwait = (mockFnType !== null && (mockFnType as any).__isVarRef !== true && (mockFnType as any).__goValue === undefined ? (mockFnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(mockFnType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 19)) {
			if (!$.comparableEqual(mockFnType, fnType)) {
				$.panic(await fmt.Sprintf("mock of %v has incorrect return function, expected %v, but actual is %v", fnName, (fnType as any), (mockFnType as any)))
			}
			return mockFn
		}
		return null
	}

	public async getMockReturn(ctx: any, input: $.Slice<number>): globalThis.Promise<mock2.Arguments> {
		const m: mockWrapper | $.VarRef<mockWrapper> | null = this;
		let retArgs: mock2.Arguments = null! as mock2.Arguments
		const m$: mockWrapper = m == null ? $.pointerTarget<mockWrapper>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<mockWrapper>(m)
		{
			let [, ok] = $.mapGet<string, {}, {}>($.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>((m$ as mockWrapper).env).testWorkflowEnvironmentShared).expectedMockCalls, (m$ as mockWrapper).name, {})
			if (!ok) {
				// no mock
				return (null as mock2.Arguments)
			}
		}

		let fnType = reflect.TypeOf((m$ as mockWrapper).fn)
		let __goscriptTuple2: any = await __goscript_internal_worker.decodeArgs((m$ as mockWrapper).dataConverter, fnType, input)
		let reflectArgs: $.Slice<reflect.Value> = __goscriptTuple2[0]
		let err = __goscriptTuple2[1]
		if (err != null) {
			$.panic(await fmt.Sprintf("Decode error: %v in %v of type %T", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (m$ as mockWrapper).name, (m$ as mockWrapper).fn))
		}
		let realArgs: $.Slice<any> = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mockWrapper).getCtxArg(ctx) : mockWrapper.prototype.getCtxArg.call(m, ctx))
		for (let __goscriptRangeTarget0 = reflectArgs, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let arg = $.markAsStructValue($.cloneStructValue((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as reflect.Value)))
			realArgs = $.appendOne(realArgs, $.markAsStructValue($.cloneStructValue(arg)).Interface(), $.appendZeros.nil)
		}

		return (await mock2.Mock.prototype.MethodCalled.call($.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>((m$ as mockWrapper).env).testWorkflowEnvironmentShared).mock, (m$ as mockWrapper).name, realArgs) as mock2.Arguments)
	}

	public async getMockReturnWithActualArgs(ctx: any, inputArgs: $.Slice<any>): globalThis.Promise<mock2.Arguments> {
		const m: mockWrapper | $.VarRef<mockWrapper> | null = this;
		let retArgs: mock2.Arguments = null! as mock2.Arguments
		const m$: mockWrapper = m == null ? $.pointerTarget<mockWrapper>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<mockWrapper>(m)
		{
			let [, ok] = $.mapGet<string, {}, {}>($.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>((m$ as mockWrapper).env).testWorkflowEnvironmentShared).expectedMockCalls, (m$ as mockWrapper).name, {})
			if (!ok) {
				// no mock
				return (null as mock2.Arguments)
			}
		}

		let realArgs: $.Slice<any> = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mockWrapper).getCtxArg(ctx) : mockWrapper.prototype.getCtxArg.call(m, ctx))
		realArgs = $.appendSlice(realArgs, inputArgs, $.appendZeros.nil)
		return (await mock2.Mock.prototype.MethodCalled.call($.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>((m$ as mockWrapper).env).testWorkflowEnvironmentShared).mock, (m$ as mockWrapper).name, realArgs) as mock2.Arguments)
	}

	public async getMockValue(mockRet: mock2.Arguments): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const m: mockWrapper | $.VarRef<mockWrapper> | null = this;
		const m$: mockWrapper = m == null ? $.pointerTarget<mockWrapper>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<mockWrapper>(m)
		let fnName = (m$ as mockWrapper).name
		let mockRetLen = $.sliceLen((mockRet as mock2.Arguments))
		let fnType = reflect.TypeOf((m$ as mockWrapper).fn)
		// check if mockRet have same types as function's return types
		if (mockRetLen != (__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			$.panic(await fmt.Sprintf("mock of %v has incorrect number of returns, expected %d, but actual is %d", fnName, $.basicInterfaceValue((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).NumOut(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "int"), $.basicInterfaceValue(mockRetLen, "int")))
		}
		// we already verified function either has 1 return value (error) or 2 return values (result, error)
		let retErr: $.GoError = null! as $.GoError
		let mockErr = $.arrayIndex(mockRet!, mockRetLen - 1)
		if (mockErr == null) {
			retErr = null
		} else {
			{
				let [err, ok] = $.typeAssertTuple<$.GoError>(mockErr, "error")
				if (ok) {
					retErr = err
				} else {
					$.panic(await fmt.Sprintf("mock of %v has incorrect return type, expected error, but actual is %T (%v)", fnName, mockErr, mockErr))
				}
			}
		}

		switch (mockRetLen) {
			case 1:
			{
				return [null, retErr]
				break
			}
			case 2:
			{
				let expectedType = (__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Out(0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				let mockResult = $.arrayIndex(mockRet!, 0)
				if (mockResult == null) {
					switch ((__goscriptAwait = (expectedType !== null && (expectedType as any).__isVarRef !== true && (expectedType as any).__goValue === undefined ? (expectedType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(expectedType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						case reflect.Ptr:
						case reflect.Interface:
						case reflect.Map:
						case reflect.Slice:
						case reflect.Array:
						{
							return [null, retErr]
							break
						}
						default:
						{
							$.panic(await fmt.Sprintf("mock of %v has incorrect return type, expected %v, but actual is %T (%v)", fnName, (expectedType as any), mockResult, mockResult))
							break
						}
					}
				} else {
					if (!(__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf(mockResult)).AssignableTo($.pointerValueOrNil(expectedType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
						$.panic(await fmt.Sprintf("mock of %v has incorrect return type, expected %v, but actual is %T (%v)", fnName, (expectedType as any), mockResult, mockResult))
					}
					let __goscriptTuple3: any = await __goscript_internal_worker.encodeArg(testWorkflowEnvironmentImpl.prototype.GetDataConverter.call((m$ as mockWrapper).env), mockResult)
					let result: $.Slice<number> = __goscriptTuple3[0]
					let encodeErr = __goscriptTuple3[1]
					if (encodeErr != null) {
						$.panic(await fmt.Sprintf("encode result from mock of %v failed: %v", fnName, (encodeErr as any)))
					}
					return [result, retErr]
				}
				break
			}
			default:
			{
				$.panic("mock should either have 1 return value (error) or 2 return values (result, error)")
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"internal.mockWrapper",
		() => new mockWrapper(),
		() => [$.methodSignature("executeMock", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["mockRet", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")]], [["result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("executeMockWithActualArgs", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["inputArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], ["mockRet", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("getCtxArg", [["ctx", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], true), $.methodSignature("getMockFn", [["mockRet", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")]], [{ kind: $.TypeKind.Interface, methods: [] }], true), $.methodSignature("getMockReturn", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["retArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")]], true), $.methodSignature("getMockReturnWithActualArgs", [["ctx", { kind: $.TypeKind.Interface, methods: [] }], ["inputArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [["retArgs", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")]], true), $.methodSignature("getMockValue", [["mockRet", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true)],
		mockWrapper,
		() => [/* @__PURE__ */ $.structField("env", /* @__PURE__ */ $.pointerType("internal.testWorkflowEnvironmentImpl"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("fn", { kind: $.TypeKind.Interface, methods: [] }, [2], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("isWorkflow", /* @__PURE__ */ $.basicType("bool"), [3], 40, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("dataConverter", "internal.DataConverter", [4], 48, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class taskListSpecificActivity {
	public get fn(): any {
		return this._fields.fn
	}

	public set fn(value: any) {
		this._fields.fn = value
	}

	public get taskLists(): globalThis.Map<string, {}> | null {
		return this._fields.taskLists
	}

	public set taskLists(value: globalThis.Map<string, {}> | null) {
		this._fields.taskLists = value
	}

	public _fields: {
		fn: any
		taskLists: globalThis.Map<string, {}> | null
	}

	constructor(init?: Partial<{fn?: any, taskLists?: globalThis.Map<string, {}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			fn: init?.fn ?? (null! as any),
			taskLists: init?.taskLists ?? (null! as globalThis.Map<string, {}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): taskListSpecificActivity {
		return new taskListSpecificActivity(this, true)
	}

	public __goscriptAssign(source: taskListSpecificActivity): void {
		const target = this._fields
		const values = source._fields
		target.fn = $.assignFieldValue(target.fn, values.fn, { kind: $.TypeKind.Interface, methods: [] })
		target.taskLists = values.taskLists
	}

	static __typeInfo = $.registerStructType(
		"internal.taskListSpecificActivity",
		() => new taskListSpecificActivity(),
		() => [],
		taskListSpecificActivity,
		() => [/* @__PURE__ */ $.structField("fn", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("taskLists", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class testWorkflowEnvironmentShared {
	public get locker(): sync.Mutex {
		return this._fields.locker
	}

	public set locker(value: sync.Mutex) {
		this._fields.locker = value
	}

	public get testSuite(): __goscript_workflow_testsuite.WorkflowTestSuite | $.VarRef<__goscript_workflow_testsuite.WorkflowTestSuite> | null {
		return this._fields.testSuite
	}

	public set testSuite(value: __goscript_workflow_testsuite.WorkflowTestSuite | $.VarRef<__goscript_workflow_testsuite.WorkflowTestSuite> | null) {
		this._fields.testSuite = value
	}

	public get taskListSpecificActivities(): globalThis.Map<string, taskListSpecificActivity | $.VarRef<taskListSpecificActivity> | null> | null {
		return this._fields.taskListSpecificActivities
	}

	public set taskListSpecificActivities(value: globalThis.Map<string, taskListSpecificActivity | $.VarRef<taskListSpecificActivity> | null> | null) {
		this._fields.taskListSpecificActivities = value
	}

	public get mock(): mock2.Mock | $.VarRef<mock2.Mock> | null {
		return this._fields.mock
	}

	public set mock(value: mock2.Mock | $.VarRef<mock2.Mock> | null) {
		this._fields.mock = value
	}

	public get service(): workflowserviceclient.Interface | null {
		return this._fields.service
	}

	public set service(value: workflowserviceclient.Interface | null) {
		this._fields.service = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get metricsScope(): metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null {
		return this._fields.metricsScope
	}

	public set metricsScope(value: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null) {
		this._fields.metricsScope = value
	}

	public get ctxProps(): $.Slice<__goscript_headers.ContextPropagator | null> {
		return this._fields.ctxProps
	}

	public set ctxProps(value: $.Slice<__goscript_headers.ContextPropagator | null>) {
		this._fields.ctxProps = value
	}

	public get mockClock(): clock.Mock | $.VarRef<clock.Mock> | null {
		return this._fields.mockClock
	}

	public set mockClock(value: clock.Mock | $.VarRef<clock.Mock> | null) {
		this._fields.mockClock = value
	}

	public get wallClock(): clock.Clock | null {
		return this._fields.wallClock
	}

	public set wallClock(value: clock.Clock | null) {
		this._fields.wallClock = value
	}

	public get startTime(): time.Time {
		return this._fields.startTime
	}

	public set startTime(value: time.Time) {
		this._fields.startTime = value
	}

	public get callbackChannel(): $.Channel<testCallbackHandle> | null {
		return this._fields.callbackChannel
	}

	public set callbackChannel(value: $.Channel<testCallbackHandle> | null) {
		this._fields.callbackChannel = value
	}

	public get testTimeout(): time.Duration {
		return this._fields.testTimeout
	}

	public set testTimeout(value: time.Duration) {
		this._fields.testTimeout = value
	}

	public get header(): shared.Header | $.VarRef<shared.Header> | null {
		return this._fields.header
	}

	public set header(value: shared.Header | $.VarRef<shared.Header> | null) {
		this._fields.header = value
	}

	public get counterID(): number {
		return this._fields.counterID
	}

	public set counterID(value: number) {
		this._fields.counterID = value
	}

	public get activities(): globalThis.Map<string, testActivityHandle | $.VarRef<testActivityHandle> | null> | null {
		return this._fields.activities
	}

	public set activities(value: globalThis.Map<string, testActivityHandle | $.VarRef<testActivityHandle> | null> | null) {
		this._fields.activities = value
	}

	public get localActivities(): globalThis.Map<string, __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null> | null {
		return this._fields.localActivities
	}

	public set localActivities(value: globalThis.Map<string, __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null> | null) {
		this._fields.localActivities = value
	}

	public get timers(): globalThis.Map<string, testTimerHandle | $.VarRef<testTimerHandle> | null> | null {
		return this._fields.timers
	}

	public set timers(value: globalThis.Map<string, testTimerHandle | $.VarRef<testTimerHandle> | null> | null) {
		this._fields.timers = value
	}

	public get runningWorkflows(): globalThis.Map<string, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null> | null {
		return this._fields.runningWorkflows
	}

	public set runningWorkflows(value: globalThis.Map<string, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null> | null) {
		this._fields.runningWorkflows = value
	}

	public get runningCount(): number {
		return this._fields.runningCount
	}

	public set runningCount(value: number) {
		this._fields.runningCount = value
	}

	public get expectedMockCalls(): globalThis.Map<string, {}> | null {
		return this._fields.expectedMockCalls
	}

	public set expectedMockCalls(value: globalThis.Map<string, {}> | null) {
		this._fields.expectedMockCalls = value
	}

	public get onActivityStartedListener(): ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, ctx: context.Context | null, args: __goscript_encoded.Values | null) => void) | null {
		return this._fields.onActivityStartedListener
	}

	public set onActivityStartedListener(value: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, ctx: context.Context | null, args: __goscript_encoded.Values | null) => void) | null) {
		this._fields.onActivityStartedListener = value
	}

	public get onActivityCompletedListener(): ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null {
		return this._fields.onActivityCompletedListener
	}

	public set onActivityCompletedListener(value: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null) {
		this._fields.onActivityCompletedListener = value
	}

	public get onActivityCanceledListener(): ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null) => void) | null {
		return this._fields.onActivityCanceledListener
	}

	public set onActivityCanceledListener(value: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null) => void) | null) {
		this._fields.onActivityCanceledListener = value
	}

	public get onLocalActivityStartedListener(): ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, ctx: context.Context | null, args: $.Slice<any>) => void) | null {
		return this._fields.onLocalActivityStartedListener
	}

	public set onLocalActivityStartedListener(value: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, ctx: context.Context | null, args: $.Slice<any>) => void) | null) {
		this._fields.onLocalActivityStartedListener = value
	}

	public get onLocalActivityCompletedListener(): ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null {
		return this._fields.onLocalActivityCompletedListener
	}

	public set onLocalActivityCompletedListener(value: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null) {
		this._fields.onLocalActivityCompletedListener = value
	}

	public get onLocalActivityCanceledListener(): ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null) => void) | null {
		return this._fields.onLocalActivityCanceledListener
	}

	public set onLocalActivityCanceledListener(value: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null) => void) | null) {
		this._fields.onLocalActivityCanceledListener = value
	}

	public get onActivityHeartbeatListener(): ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, details: __goscript_encoded.Values | null) => void) | null {
		return this._fields.onActivityHeartbeatListener
	}

	public set onActivityHeartbeatListener(value: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, details: __goscript_encoded.Values | null) => void) | null) {
		this._fields.onActivityHeartbeatListener = value
	}

	public get onChildWorkflowStartedListener(): ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, ctx: __goscript_context.Context | null, args: __goscript_encoded.Values | null) => void) | null {
		return this._fields.onChildWorkflowStartedListener
	}

	public set onChildWorkflowStartedListener(value: ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, ctx: __goscript_context.Context | null, args: __goscript_encoded.Values | null) => void) | null) {
		this._fields.onChildWorkflowStartedListener = value
	}

	public get onChildWorkflowCompletedListener(): ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null {
		return this._fields.onChildWorkflowCompletedListener
	}

	public set onChildWorkflowCompletedListener(value: ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null) {
		this._fields.onChildWorkflowCompletedListener = value
	}

	public get onChildWorkflowCanceledListener(): ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null) => void) | null {
		return this._fields.onChildWorkflowCanceledListener
	}

	public set onChildWorkflowCanceledListener(value: ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null) => void) | null) {
		this._fields.onChildWorkflowCanceledListener = value
	}

	public get onTimerScheduledListener(): ((timerID: string, duration: time.Duration) => void) | null {
		return this._fields.onTimerScheduledListener
	}

	public set onTimerScheduledListener(value: ((timerID: string, duration: time.Duration) => void) | null) {
		this._fields.onTimerScheduledListener = value
	}

	public get onTimerFiredListener(): ((timerID: string) => void) | null {
		return this._fields.onTimerFiredListener
	}

	public set onTimerFiredListener(value: ((timerID: string) => void) | null) {
		this._fields.onTimerFiredListener = value
	}

	public get onTimerCancelledListener(): ((timerID: string) => void) | null {
		return this._fields.onTimerCancelledListener
	}

	public set onTimerCancelledListener(value: ((timerID: string) => void) | null) {
		this._fields.onTimerCancelledListener = value
	}

	public get cronMaxIterations(): number {
		return this._fields.cronMaxIterations
	}

	public set cronMaxIterations(value: number) {
		this._fields.cronMaxIterations = value
	}

	public _fields: {
		locker: sync.Mutex
		testSuite: __goscript_workflow_testsuite.WorkflowTestSuite | $.VarRef<__goscript_workflow_testsuite.WorkflowTestSuite> | null
		taskListSpecificActivities: globalThis.Map<string, taskListSpecificActivity | $.VarRef<taskListSpecificActivity> | null> | null
		mock: mock2.Mock | $.VarRef<mock2.Mock> | null
		service: workflowserviceclient.Interface | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		metricsScope: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null
		ctxProps: $.Slice<__goscript_headers.ContextPropagator | null>
		mockClock: clock.Mock | $.VarRef<clock.Mock> | null
		wallClock: clock.Clock | null
		startTime: time.Time
		callbackChannel: $.Channel<testCallbackHandle> | null
		testTimeout: time.Duration
		header: shared.Header | $.VarRef<shared.Header> | null
		counterID: number
		activities: globalThis.Map<string, testActivityHandle | $.VarRef<testActivityHandle> | null> | null
		localActivities: globalThis.Map<string, __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null> | null
		timers: globalThis.Map<string, testTimerHandle | $.VarRef<testTimerHandle> | null> | null
		runningWorkflows: globalThis.Map<string, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null> | null
		runningCount: number
		expectedMockCalls: globalThis.Map<string, {}> | null
		onActivityStartedListener: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, ctx: context.Context | null, args: __goscript_encoded.Values | null) => void) | null
		onActivityCompletedListener: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null
		onActivityCanceledListener: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null) => void) | null
		onLocalActivityStartedListener: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, ctx: context.Context | null, args: $.Slice<any>) => void) | null
		onLocalActivityCompletedListener: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null
		onLocalActivityCanceledListener: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null) => void) | null
		onActivityHeartbeatListener: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, details: __goscript_encoded.Values | null) => void) | null
		onChildWorkflowStartedListener: ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, ctx: __goscript_context.Context | null, args: __goscript_encoded.Values | null) => void) | null
		onChildWorkflowCompletedListener: ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null
		onChildWorkflowCanceledListener: ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null) => void) | null
		onTimerScheduledListener: ((timerID: string, duration: time.Duration) => void) | null
		onTimerFiredListener: ((timerID: string) => void) | null
		onTimerCancelledListener: ((timerID: string) => void) | null
		cronMaxIterations: number
	}

	constructor(init?: Partial<{locker?: sync.Mutex, testSuite?: __goscript_workflow_testsuite.WorkflowTestSuite | $.VarRef<__goscript_workflow_testsuite.WorkflowTestSuite> | null, taskListSpecificActivities?: globalThis.Map<string, taskListSpecificActivity | $.VarRef<taskListSpecificActivity> | null> | null, mock?: mock2.Mock | $.VarRef<mock2.Mock> | null, service?: workflowserviceclient.Interface | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null, metricsScope?: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null, ctxProps?: $.Slice<__goscript_headers.ContextPropagator | null>, mockClock?: clock.Mock | $.VarRef<clock.Mock> | null, wallClock?: clock.Clock | null, startTime?: time.Time, callbackChannel?: $.Channel<testCallbackHandle> | null, testTimeout?: time.Duration, header?: shared.Header | $.VarRef<shared.Header> | null, counterID?: number, activities?: globalThis.Map<string, testActivityHandle | $.VarRef<testActivityHandle> | null> | null, localActivities?: globalThis.Map<string, __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null> | null, timers?: globalThis.Map<string, testTimerHandle | $.VarRef<testTimerHandle> | null> | null, runningWorkflows?: globalThis.Map<string, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null> | null, runningCount?: number, expectedMockCalls?: globalThis.Map<string, {}> | null, onActivityStartedListener?: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, ctx: context.Context | null, args: __goscript_encoded.Values | null) => void) | null, onActivityCompletedListener?: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null, onActivityCanceledListener?: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null) => void) | null, onLocalActivityStartedListener?: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, ctx: context.Context | null, args: $.Slice<any>) => void) | null, onLocalActivityCompletedListener?: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null, onLocalActivityCanceledListener?: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null) => void) | null, onActivityHeartbeatListener?: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, details: __goscript_encoded.Values | null) => void) | null, onChildWorkflowStartedListener?: ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, ctx: __goscript_context.Context | null, args: __goscript_encoded.Values | null) => void) | null, onChildWorkflowCompletedListener?: ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null, onChildWorkflowCanceledListener?: ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null) => void) | null, onTimerScheduledListener?: ((timerID: string, duration: time.Duration) => void) | null, onTimerFiredListener?: ((timerID: string) => void) | null, onTimerCancelledListener?: ((timerID: string) => void) | null, cronMaxIterations?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			locker: init?.locker ? $.markAsStructValue($.cloneStructValue(init.locker)) : $.markAsStructValue(new sync.Mutex()),
			testSuite: init?.testSuite ?? (null! as __goscript_workflow_testsuite.WorkflowTestSuite | $.VarRef<__goscript_workflow_testsuite.WorkflowTestSuite> | null),
			taskListSpecificActivities: init?.taskListSpecificActivities ?? (null! as globalThis.Map<string, taskListSpecificActivity | $.VarRef<taskListSpecificActivity> | null> | null),
			mock: init?.mock ?? (null! as mock2.Mock | $.VarRef<mock2.Mock> | null),
			service: init?.service ?? (null! as workflowserviceclient.Interface | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			metricsScope: init?.metricsScope ?? (null! as metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null),
			ctxProps: init?.ctxProps ?? (null! as $.Slice<__goscript_headers.ContextPropagator | null>),
			mockClock: init?.mockClock ?? (null! as clock.Mock | $.VarRef<clock.Mock> | null),
			wallClock: init?.wallClock ?? (null! as clock.Clock | null),
			startTime: init?.startTime ? $.markAsStructValue($.cloneStructValue(init.startTime)) : $.markAsStructValue(new time.Time()),
			callbackChannel: init?.callbackChannel ?? (null! as $.Channel<testCallbackHandle> | null),
			testTimeout: init?.testTimeout ?? (0n as time.Duration),
			header: init?.header ?? (null! as shared.Header | $.VarRef<shared.Header> | null),
			counterID: init?.counterID ?? (0 as number),
			activities: init?.activities ?? (null! as globalThis.Map<string, testActivityHandle | $.VarRef<testActivityHandle> | null> | null),
			localActivities: init?.localActivities ?? (null! as globalThis.Map<string, __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null> | null),
			timers: init?.timers ?? (null! as globalThis.Map<string, testTimerHandle | $.VarRef<testTimerHandle> | null> | null),
			runningWorkflows: init?.runningWorkflows ?? (null! as globalThis.Map<string, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null> | null),
			runningCount: init?.runningCount ?? (0 as number),
			expectedMockCalls: init?.expectedMockCalls ?? (null! as globalThis.Map<string, {}> | null),
			onActivityStartedListener: init?.onActivityStartedListener ?? (null! as ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, ctx: context.Context | null, args: __goscript_encoded.Values | null) => void) | null),
			onActivityCompletedListener: init?.onActivityCompletedListener ?? (null! as ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null),
			onActivityCanceledListener: init?.onActivityCanceledListener ?? (null! as ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null) => void) | null),
			onLocalActivityStartedListener: init?.onLocalActivityStartedListener ?? (null! as ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, ctx: context.Context | null, args: $.Slice<any>) => void) | null),
			onLocalActivityCompletedListener: init?.onLocalActivityCompletedListener ?? (null! as ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null),
			onLocalActivityCanceledListener: init?.onLocalActivityCanceledListener ?? (null! as ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null) => void) | null),
			onActivityHeartbeatListener: init?.onActivityHeartbeatListener ?? (null! as ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, details: __goscript_encoded.Values | null) => void) | null),
			onChildWorkflowStartedListener: init?.onChildWorkflowStartedListener ?? (null! as ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, ctx: __goscript_context.Context | null, args: __goscript_encoded.Values | null) => void) | null),
			onChildWorkflowCompletedListener: init?.onChildWorkflowCompletedListener ?? (null! as ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null),
			onChildWorkflowCanceledListener: init?.onChildWorkflowCanceledListener ?? (null! as ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null) => void) | null),
			onTimerScheduledListener: init?.onTimerScheduledListener ?? (null! as ((timerID: string, duration: time.Duration) => void) | null),
			onTimerFiredListener: init?.onTimerFiredListener ?? (null! as ((timerID: string) => void) | null),
			onTimerCancelledListener: init?.onTimerCancelledListener ?? (null! as ((timerID: string) => void) | null),
			cronMaxIterations: init?.cronMaxIterations ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): testWorkflowEnvironmentShared {
		return new testWorkflowEnvironmentShared(this, true)
	}

	public __goscriptAssign(source: testWorkflowEnvironmentShared): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.locker, values.locker)
		target.testSuite = values.testSuite
		target.taskListSpecificActivities = values.taskListSpecificActivities
		target.mock = values.mock
		target.service = $.assignFieldValue(target.service, values.service, "workflowserviceclient.Interface")
		target.logger = values.logger
		target.metricsScope = values.metricsScope
		target.ctxProps = values.ctxProps
		target.mockClock = values.mockClock
		target.wallClock = $.assignFieldValue(target.wallClock, values.wallClock, "clock.Clock")
		$.assignStruct(target.startTime, values.startTime)
		target.callbackChannel = values.callbackChannel
		target.testTimeout = values.testTimeout
		target.header = values.header
		target.counterID = values.counterID
		target.activities = values.activities
		target.localActivities = values.localActivities
		target.timers = values.timers
		target.runningWorkflows = values.runningWorkflows
		target.runningCount = values.runningCount
		target.expectedMockCalls = values.expectedMockCalls
		target.onActivityStartedListener = values.onActivityStartedListener
		target.onActivityCompletedListener = values.onActivityCompletedListener
		target.onActivityCanceledListener = values.onActivityCanceledListener
		target.onLocalActivityStartedListener = values.onLocalActivityStartedListener
		target.onLocalActivityCompletedListener = values.onLocalActivityCompletedListener
		target.onLocalActivityCanceledListener = values.onLocalActivityCanceledListener
		target.onActivityHeartbeatListener = values.onActivityHeartbeatListener
		target.onChildWorkflowStartedListener = values.onChildWorkflowStartedListener
		target.onChildWorkflowCompletedListener = values.onChildWorkflowCompletedListener
		target.onChildWorkflowCanceledListener = values.onChildWorkflowCanceledListener
		target.onTimerScheduledListener = values.onTimerScheduledListener
		target.onTimerFiredListener = values.onTimerFiredListener
		target.onTimerCancelledListener = values.onTimerCancelledListener
		target.cronMaxIterations = values.cronMaxIterations
	}

	static __typeInfo = $.registerStructType(
		"internal.testWorkflowEnvironmentShared",
		() => new testWorkflowEnvironmentShared(),
		() => [],
		testWorkflowEnvironmentShared,
		() => [/* @__PURE__ */ $.structField("locker", "sync.Mutex", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("testSuite", /* @__PURE__ */ $.pointerType("internal.WorkflowTestSuite"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("taskListSpecificActivities", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("internal.taskListSpecificActivity")), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("mock", /* @__PURE__ */ $.pointerType("mock.Mock"), [3], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("service", "workflowserviceclient.Interface", [4], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [5], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("metricsScope", /* @__PURE__ */ $.pointerType("metrics.TaggedScope"), [6], 56, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("ctxProps", /* @__PURE__ */ $.sliceType("internal.ContextPropagator"), [7], 64, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("mockClock", /* @__PURE__ */ $.pointerType("clock.Mock"), [8], 88, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("wallClock", "clock.Clock", [9], 96, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("startTime", "time.Time", [10], 112, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("callbackChannel", /* @__PURE__ */ $.channelType("internal.testCallbackHandle", "both"), [11], 136, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("testTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [12], 144, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("header", /* @__PURE__ */ $.pointerType("shared.Header"), [13], 152, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("counterID", /* @__PURE__ */ $.basicType("int"), [14], 160, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("activities", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("internal.testActivityHandle")), [15], 168, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("localActivities", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("internal.localActivityTask")), [16], 176, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("timers", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("internal.testTimerHandle")), [17], 184, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("runningWorkflows", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("internal.testWorkflowHandle")), [18], 192, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("runningCount", /* @__PURE__ */ $.basicType("int"), [19], 200, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("expectedMockCalls", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [20], 208, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("onActivityStartedListener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.ActivityInfo"), "context.Context", "internal.Values"], results: [] } as $.FunctionTypeInfo), [21], 216, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("onActivityCompletedListener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.ActivityInfo"), "internal.Value", "error"], results: [] } as $.FunctionTypeInfo), [22], 224, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("onActivityCanceledListener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.ActivityInfo")], results: [] } as $.FunctionTypeInfo), [23], 232, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("onLocalActivityStartedListener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.ActivityInfo"), "context.Context", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [] } as $.FunctionTypeInfo), [24], 240, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("onLocalActivityCompletedListener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.ActivityInfo"), "internal.Value", "error"], results: [] } as $.FunctionTypeInfo), [25], 248, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("onLocalActivityCanceledListener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.ActivityInfo")], results: [] } as $.FunctionTypeInfo), [26], 256, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("onActivityHeartbeatListener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.ActivityInfo"), "internal.Values"], results: [] } as $.FunctionTypeInfo), [27], 264, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("onChildWorkflowStartedListener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.WorkflowInfo"), "internal.Context", "internal.Values"], results: [] } as $.FunctionTypeInfo), [28], 272, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("onChildWorkflowCompletedListener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.WorkflowInfo"), "internal.Value", "error"], results: [] } as $.FunctionTypeInfo), [29], 280, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("onChildWorkflowCanceledListener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.WorkflowInfo")], results: [] } as $.FunctionTypeInfo), [30], 288, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("onTimerScheduledListener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int64", "time.Duration")], results: [] } as $.FunctionTypeInfo), [31], 296, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("onTimerFiredListener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), [32], 304, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("onTimerCancelledListener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), [33], 312, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("cronMaxIterations", /* @__PURE__ */ $.basicType("int"), [34], 320, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class testWorkflowEnvironmentImpl {
	public get testWorkflowEnvironmentShared(): testWorkflowEnvironmentShared | $.VarRef<testWorkflowEnvironmentShared> | null {
		return this._fields.testWorkflowEnvironmentShared
	}

	public set testWorkflowEnvironmentShared(value: testWorkflowEnvironmentShared | $.VarRef<testWorkflowEnvironmentShared> | null) {
		this._fields.testWorkflowEnvironmentShared = value
	}

	public get parentEnv(): testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null {
		return this._fields.parentEnv
	}

	public set parentEnv(value: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null) {
		this._fields.parentEnv = value
	}

	public get registry(): __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null {
		return this._fields.registry
	}

	public set registry(value: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null) {
		this._fields.registry = value
	}

	public get workflowInterceptors(): $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null> {
		return this._fields.workflowInterceptors
	}

	public set workflowInterceptors(value: $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>) {
		this._fields.workflowInterceptors = value
	}

	public get workflowInfo(): __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null {
		return this._fields.workflowInfo
	}

	public set workflowInfo(value: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null) {
		this._fields.workflowInfo = value
	}

	public get workflowDef(): __goscript_internal_worker_base.workflowDefinition | null {
		return this._fields.workflowDef
	}

	public set workflowDef(value: __goscript_internal_worker_base.workflowDefinition | null) {
		this._fields.workflowDef = value
	}

	public get changeVersions(): globalThis.Map<string, __goscript_workflow.Version> | null {
		return this._fields.changeVersions
	}

	public set changeVersions(value: globalThis.Map<string, __goscript_workflow.Version> | null) {
		this._fields.changeVersions = value
	}

	public get openSessions(): globalThis.Map<string, __goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null> | null {
		return this._fields.openSessions
	}

	public set openSessions(value: globalThis.Map<string, __goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null> | null) {
		this._fields.openSessions = value
	}

	public get workflowCancelHandler(): (() => void) | null {
		return this._fields.workflowCancelHandler
	}

	public set workflowCancelHandler(value: (() => void) | null) {
		this._fields.workflowCancelHandler = value
	}

	public get signalHandler(): ((name: string, input: $.Slice<number>) => void) | null {
		return this._fields.signalHandler
	}

	public set signalHandler(value: ((name: string, input: $.Slice<number>) => void) | null) {
		this._fields.signalHandler = value
	}

	public get queryHandler(): ((_p0: string, _p1: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null {
		return this._fields.queryHandler
	}

	public set queryHandler(value: ((_p0: string, _p1: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null) {
		this._fields.queryHandler = value
	}

	public get startedHandler(): ((r: __goscript_workflow.WorkflowExecution, e: $.GoError) => void) | null {
		return this._fields.startedHandler
	}

	public set startedHandler(value: ((r: __goscript_workflow.WorkflowExecution, e: $.GoError) => void) | null) {
		this._fields.startedHandler = value
	}

	public get isTestCompleted(): boolean {
		return this._fields.isTestCompleted
	}

	public set isTestCompleted(value: boolean) {
		this._fields.isTestCompleted = value
	}

	public get testResult(): __goscript_encoded.Value | null {
		return this._fields.testResult
	}

	public set testResult(value: __goscript_encoded.Value | null) {
		this._fields.testResult = value
	}

	public get testError(): $.GoError {
		return this._fields.testError
	}

	public set testError(value: $.GoError) {
		this._fields.testError = value
	}

	public get doneChannel(): $.Channel<{}> | null {
		return this._fields.doneChannel
	}

	public set doneChannel(value: $.Channel<{}> | null) {
		this._fields.doneChannel = value
	}

	public get workerOptions(): __goscript_worker.WorkerOptions {
		return this._fields.workerOptions
	}

	public set workerOptions(value: __goscript_worker.WorkerOptions) {
		this._fields.workerOptions = value
	}

	public get executionTimeout(): time.Duration {
		return this._fields.executionTimeout
	}

	public set executionTimeout(value: time.Duration) {
		this._fields.executionTimeout = value
	}

	public get heartbeatDetails(): $.Slice<number> {
		return this._fields.heartbeatDetails
	}

	public set heartbeatDetails(value: $.Slice<number>) {
		this._fields.heartbeatDetails = value
	}

	public get workerStopChannel(): $.Channel<{}> | null {
		return this._fields.workerStopChannel
	}

	public set workerStopChannel(value: $.Channel<{}> | null) {
		this._fields.workerStopChannel = value
	}

	public get sessionEnvironment(): testSessionEnvironmentImpl | $.VarRef<testSessionEnvironmentImpl> | null {
		return this._fields.sessionEnvironment
	}

	public set sessionEnvironment(value: testSessionEnvironmentImpl | $.VarRef<testSessionEnvironmentImpl> | null) {
		this._fields.sessionEnvironment = value
	}

	public get cronSchedule(): string {
		return this._fields.cronSchedule
	}

	public set cronSchedule(value: string) {
		this._fields.cronSchedule = value
	}

	public get cronIterations(): number {
		return this._fields.cronIterations
	}

	public set cronIterations(value: number) {
		this._fields.cronIterations = value
	}

	public get workflowInput(): $.Slice<number> {
		return this._fields.workflowInput
	}

	public set workflowInput(value: $.Slice<number>) {
		this._fields.workflowInput = value
	}

	public get cronOverlapPolicy(): shared.CronOverlapPolicy {
		return this._fields.cronOverlapPolicy
	}

	public set cronOverlapPolicy(value: shared.CronOverlapPolicy) {
		this._fields.cronOverlapPolicy = value
	}

	public _fields: {
		testWorkflowEnvironmentShared: testWorkflowEnvironmentShared | $.VarRef<testWorkflowEnvironmentShared> | null
		parentEnv: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null
		registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null
		workflowInterceptors: $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>
		workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null
		workflowDef: __goscript_internal_worker_base.workflowDefinition | null
		changeVersions: globalThis.Map<string, __goscript_workflow.Version> | null
		openSessions: globalThis.Map<string, __goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null> | null
		workflowCancelHandler: (() => void) | null
		signalHandler: ((name: string, input: $.Slice<number>) => void) | null
		queryHandler: ((_p0: string, _p1: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null
		startedHandler: ((r: __goscript_workflow.WorkflowExecution, e: $.GoError) => void) | null
		isTestCompleted: boolean
		testResult: __goscript_encoded.Value | null
		testError: $.GoError
		doneChannel: $.Channel<{}> | null
		workerOptions: __goscript_worker.WorkerOptions
		executionTimeout: time.Duration
		heartbeatDetails: $.Slice<number>
		workerStopChannel: $.Channel<{}> | null
		sessionEnvironment: testSessionEnvironmentImpl | $.VarRef<testSessionEnvironmentImpl> | null
		cronSchedule: string
		cronIterations: number
		workflowInput: $.Slice<number>
		cronOverlapPolicy: shared.CronOverlapPolicy
	}

	constructor(init?: Partial<{testWorkflowEnvironmentShared?: testWorkflowEnvironmentShared | $.VarRef<testWorkflowEnvironmentShared> | null, parentEnv?: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null, registry?: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null, workflowInterceptors?: $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>, workflowInfo?: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, workflowDef?: __goscript_internal_worker_base.workflowDefinition | null, changeVersions?: globalThis.Map<string, __goscript_workflow.Version> | null, openSessions?: globalThis.Map<string, __goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null> | null, workflowCancelHandler?: (() => void) | null, signalHandler?: ((name: string, input: $.Slice<number>) => void) | null, queryHandler?: ((_p0: string, _p1: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null, startedHandler?: ((r: __goscript_workflow.WorkflowExecution, e: $.GoError) => void) | null, isTestCompleted?: boolean, testResult?: __goscript_encoded.Value | null, testError?: $.GoError, doneChannel?: $.Channel<{}> | null, workerOptions?: __goscript_worker.WorkerOptions, executionTimeout?: time.Duration, heartbeatDetails?: $.Slice<number>, workerStopChannel?: $.Channel<{}> | null, sessionEnvironment?: testSessionEnvironmentImpl | $.VarRef<testSessionEnvironmentImpl> | null, cronSchedule?: string, cronIterations?: number, workflowInput?: $.Slice<number>, cronOverlapPolicy?: shared.CronOverlapPolicy}>, __goscriptValue?: boolean) {
		this._fields = {
			testWorkflowEnvironmentShared: init?.testWorkflowEnvironmentShared ?? (null! as testWorkflowEnvironmentShared | $.VarRef<testWorkflowEnvironmentShared> | null),
			parentEnv: init?.parentEnv ?? (null! as testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null),
			registry: init?.registry ?? (null! as __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null),
			workflowInterceptors: init?.workflowInterceptors ?? (null! as $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null>),
			workflowInfo: init?.workflowInfo ?? (null! as __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null),
			workflowDef: init?.workflowDef ?? (null! as __goscript_internal_worker_base.workflowDefinition | null),
			changeVersions: init?.changeVersions ?? (null! as globalThis.Map<string, __goscript_workflow.Version> | null),
			openSessions: init?.openSessions ?? (null! as globalThis.Map<string, __goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null> | null),
			workflowCancelHandler: init?.workflowCancelHandler ?? (null! as (() => void) | null),
			signalHandler: init?.signalHandler ?? (null! as ((name: string, input: $.Slice<number>) => void) | null),
			queryHandler: init?.queryHandler ?? (null! as ((_p0: string, _p1: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null),
			startedHandler: init?.startedHandler ?? (null! as ((r: __goscript_workflow.WorkflowExecution, e: $.GoError) => void) | null),
			isTestCompleted: init?.isTestCompleted ?? (false as boolean),
			testResult: init?.testResult ?? (null! as __goscript_encoded.Value | null),
			testError: init?.testError ?? (null! as $.GoError),
			doneChannel: init?.doneChannel ?? (null! as $.Channel<{}> | null),
			workerOptions: init?.workerOptions ? init.workerOptions.clone() : new __goscript_worker.WorkerOptions(undefined, true),
			executionTimeout: init?.executionTimeout ?? (0n as time.Duration),
			heartbeatDetails: init?.heartbeatDetails ?? (null! as $.Slice<number>),
			workerStopChannel: init?.workerStopChannel ?? (null! as $.Channel<{}> | null),
			sessionEnvironment: init?.sessionEnvironment ?? (null! as testSessionEnvironmentImpl | $.VarRef<testSessionEnvironmentImpl> | null),
			cronSchedule: init?.cronSchedule ?? ("" as string),
			cronIterations: init?.cronIterations ?? (0 as number),
			workflowInput: init?.workflowInput ?? (null! as $.Slice<number>),
			cronOverlapPolicy: init?.cronOverlapPolicy ?? (0 as shared.CronOverlapPolicy)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): testWorkflowEnvironmentImpl {
		return new testWorkflowEnvironmentImpl(this, true)
	}

	public __goscriptAssign(source: testWorkflowEnvironmentImpl): void {
		const target = this._fields
		const values = source._fields
		target.testWorkflowEnvironmentShared = values.testWorkflowEnvironmentShared
		target.parentEnv = values.parentEnv
		target.registry = values.registry
		target.workflowInterceptors = values.workflowInterceptors
		target.workflowInfo = values.workflowInfo
		target.workflowDef = $.assignFieldValue(target.workflowDef, values.workflowDef, "internal.workflowDefinition")
		target.changeVersions = values.changeVersions
		target.openSessions = values.openSessions
		target.workflowCancelHandler = values.workflowCancelHandler
		target.signalHandler = values.signalHandler
		target.queryHandler = values.queryHandler
		target.startedHandler = values.startedHandler
		target.isTestCompleted = values.isTestCompleted
		target.testResult = $.assignFieldValue(target.testResult, values.testResult, "internal.Value")
		target.testError = $.assignFieldValue(target.testError, values.testError, "error")
		target.doneChannel = values.doneChannel
		$.assignStruct(target.workerOptions, values.workerOptions)
		target.executionTimeout = values.executionTimeout
		target.heartbeatDetails = values.heartbeatDetails
		target.workerStopChannel = values.workerStopChannel
		target.sessionEnvironment = values.sessionEnvironment
		target.cronSchedule = values.cronSchedule
		target.cronIterations = values.cronIterations
		target.workflowInput = values.workflowInput
		target.cronOverlapPolicy = values.cronOverlapPolicy
	}

	public AddSession(sessionInfo: __goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null): void {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		$.mapSet($.pointerValue<testWorkflowEnvironmentImpl>(env).openSessions, $.pointerValue<__goscript_session.SessionInfo>(sessionInfo).SessionID, sessionInfo)
	}

	public async Complete(result: $.Slice<number>, err: $.GoError): globalThis.Promise<void> {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		if ((env$ as testWorkflowEnvironmentImpl).isTestCompleted) {
			await zap.Logger.prototype.Debug.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger, "Workflow already completed.", null)
			return
		}
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowDefinition, null>>((env$ as testWorkflowEnvironmentImpl).workflowDef).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		{
			let [, ok] = $.typeAssertTuple<__goscript_error.CanceledError | $.VarRef<__goscript_error.CanceledError> | null>(err, /* @__PURE__ */ $.pointerType("internal.CanceledError"))
			if (ok && ((env$ as testWorkflowEnvironmentImpl).workflowCancelHandler != null)) {
				void (__goscriptAwait = (env$ as testWorkflowEnvironmentImpl).workflowCancelHandler!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		let dc = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env))
		// Test is potentially not over, for parent Cron workflows
		if ((!(env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).isChildWorkflow() : testWorkflowEnvironmentImpl.prototype.isChildWorkflow.call(env)) && !(env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).IsCron() : testWorkflowEnvironmentImpl.prototype.IsCron.call(env))) || (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).isChildWorkflow() : testWorkflowEnvironmentImpl.prototype.isChildWorkflow.call(env))) {
			;(env$ as testWorkflowEnvironmentImpl).isTestCompleted = true
		}

		if (err != null) {
			{
				const __goscriptTypeSwitchValue = err
				switch (true) {
					case $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.CanceledError")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.ContinueAsNewError")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.TimeoutError")) || $.is(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyStartedError")):
						{
							let err = __goscriptTypeSwitchValue
							;(env$ as testWorkflowEnvironmentImpl).testError = err
						}
						break
					case $.typeAssert<__goscript_error.workflowPanicError | $.VarRef<__goscript_error.workflowPanicError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.workflowPanicError")).ok:
						{
							let err: __goscript_error.workflowPanicError | $.VarRef<__goscript_error.workflowPanicError> | null = $.typeAssert<__goscript_error.workflowPanicError | $.VarRef<__goscript_error.workflowPanicError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.workflowPanicError")).value
							;(env$ as testWorkflowEnvironmentImpl).testError = $.interfaceValue<$.GoError>(__goscript_error.newPanicError($.pointerValue<__goscript_error.workflowPanicError>(err).value, $.pointerValue<__goscript_error.workflowPanicError>(err).stackTrace), "*internal.PanicError", /* @__PURE__ */ $.pointerType("internal.PanicError"))
						}
						break
					default:
						{
							let err: any = __goscriptTypeSwitchValue
							let __goscriptTuple4: any = await __goscript_internal_utils.getErrorDetails(err, dc)
							let reason = __goscriptTuple4[0]
							let details: $.Slice<number> = __goscriptTuple4[1];
							;(env$ as testWorkflowEnvironmentImpl).testError = await __goscript_internal_utils.constructError(reason, details, dc)
						}
						break
				}
			}
		} else {
			;(env$ as testWorkflowEnvironmentImpl).testResult = __goscript_workflow.newEncodedValue(result, dc)
		}

		// Only close on:
		// 1. Child-Workflows
		// 2. non-cron Workflows
		if ((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).isChildWorkflow() : testWorkflowEnvironmentImpl.prototype.isChildWorkflow.call(env)) && !(env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).IsCron() : testWorkflowEnvironmentImpl.prototype.IsCron.call(env))) {
			void (env$ as testWorkflowEnvironmentImpl).doneChannel!.close()
		}

		if ((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).isChildWorkflow() : testWorkflowEnvironmentImpl.prototype.isChildWorkflow.call(env))) {
			// this is completion of child workflow
			let childWorkflowID = $.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).WorkflowExecution.ID
			{
				let __goscriptTuple5: any = $.mapGet<string, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningWorkflows, childWorkflowID, null)
				let childWorkflowHandle: testWorkflowHandle | $.VarRef<testWorkflowHandle> | null = __goscriptTuple5[0]
				let ok = __goscriptTuple5[1]
				if (ok && !$.pointerValue<testWorkflowHandle>(childWorkflowHandle).handled) {
					// It is possible that child workflow could complete after cancellation. In that case, childWorkflowHandle
					// would have already been removed from the runningWorkflows map by RequestCancelWorkflow().
					$.pointerValue<testWorkflowHandle>(childWorkflowHandle).handled = true
					// check if a retry is needed
					if (await (childWorkflowHandle !== null && (childWorkflowHandle as any).__isVarRef !== true && (childWorkflowHandle as any).__goValue === undefined ? ((childWorkflowHandle as any) as testWorkflowHandle).rerun(true) : testWorkflowHandle.prototype.rerun.call(childWorkflowHandle, true))) {
						// rerun requested, so we don't want to post the error to parent workflow, return here.
						return
					}

					// no rerun, child workflow is done.
					await testWorkflowEnvironmentImpl.prototype.postCallback.call((env$ as testWorkflowEnvironmentImpl).parentEnv, $.functionValue(async (): globalThis.Promise<void> => {
						// deliver result
						$.pointerValue<testWorkflowHandle>(childWorkflowHandle).err = (env$ as testWorkflowEnvironmentImpl).testError
						await $.pointerValue<testWorkflowHandle>(childWorkflowHandle).callback!(result, (env$ as testWorkflowEnvironmentImpl).testError)
						if ($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onChildWorkflowCompletedListener != null) {
							await $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onChildWorkflowCompletedListener!((env$ as testWorkflowEnvironmentImpl).workflowInfo, (env$ as testWorkflowEnvironmentImpl).testResult, (env$ as testWorkflowEnvironmentImpl).testError)
						}
					}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), true)
				}
			}
		} else {
			if ((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).IsCron() : testWorkflowEnvironmentImpl.prototype.IsCron.call(env))) {
				let workflowID = $.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).WorkflowExecution.ID
				{
					let __goscriptTuple6: any = $.mapGet<string, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningWorkflows, workflowID, null)
					let workflowHandle: testWorkflowHandle | $.VarRef<testWorkflowHandle> | null = __goscriptTuple6[0]
					let ok = __goscriptTuple6[1]
					if (ok) {
						// On rerun, consider Workflow as not-handled
						if (await (workflowHandle !== null && (workflowHandle as any).__isVarRef !== true && (workflowHandle as any).__goValue === undefined ? ((workflowHandle as any) as testWorkflowHandle).rerun(false) : testWorkflowHandle.prototype.rerun.call(workflowHandle, false))) {
							return
						}
					}
				}
			}
		}
		// No Reruns....Test is Complete
		;(env$ as testWorkflowEnvironmentImpl).isTestCompleted = true
	}

	public async CompleteActivity(taskToken: $.Slice<number>, result: any, err: $.GoError): globalThis.Promise<$.GoError> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		if (taskToken == null) {
			return errors.New("nil task token provided")
		}
		let data: $.Slice<number> = null! as $.Slice<number>
		if (result != null) {
			let encodeErr: $.GoError = null! as $.GoError
			let __goscriptTuple7: any = await __goscript_internal_worker.encodeArg((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)), result)
			data = __goscriptTuple7[0]
			encodeErr = __goscriptTuple7[1]
			if (encodeErr != null) {
				return encodeErr
			}
		}

		let activityID = $.bytesToString(taskToken)
		await testWorkflowEnvironmentImpl.prototype.postCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
			let __goscriptTuple8: any = await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).getActivityHandle(activityID) : testWorkflowEnvironmentImpl.prototype.getActivityHandle.call(env, activityID))
			let activityHandle: testActivityHandle | $.VarRef<testActivityHandle> | null = __goscriptTuple8[0]
			let ok = __goscriptTuple8[1]
			if (!ok) {
				await zap.Logger.prototype.Debug.call($.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>(env).testWorkflowEnvironmentShared).logger, "CompleteActivity: ActivityID not found, could be already completed or cancelled.", $.arrayToSlice<zap.Field>([zap.String("ActivityID", activityID)]))
				return
			}
			let request = await __goscript_internal_task_pollers.convertActivityResultToRespondRequest("test-identity", taskToken, data, err, (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)))
			await testWorkflowEnvironmentImpl.prototype.handleActivityResult.call(env, activityID, request, $.pointerValue<testActivityHandle>(activityHandle).activityType, (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)))
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), false)

		return null
	}

	public async ExecuteActivity(parameters: __goscript_internal_activity.executeActivityParams, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): globalThis.Promise<__goscript_internal_activity.activityInfo | $.VarRef<__goscript_internal_activity.activityInfo> | null> {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		let activityID: string = ""
		if ((parameters.activityOptions.ActivityID == null) || ($.stringEqual($.pointerValue<string>(parameters.activityOptions.ActivityID), ""))) {
			activityID = await getStringID((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).nextID() : testWorkflowEnvironmentImpl.prototype.nextID.call(env)))
		} else {
			activityID = $.pointerValue<string>(parameters.activityOptions.ActivityID)
		}
		let __goscriptShadow2: __goscript_internal_activity.activityInfo | $.VarRef<__goscript_internal_activity.activityInfo> | null = new __goscript_internal_activity.activityInfo({activityID: activityID})
		let task: shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null = newTestActivityTask("default-test-workflow-id", "default-test-run-id", $.pointerValue<__goscript_internal_activity.activityInfo>(__goscriptShadow2).activityID, "default-test-workflow-type-name", "default-test-domain-name", (parameters).clone())

		let taskHandler = await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).newTestActivityTaskHandler(parameters.activityOptions.TaskListName, parameters.DataConverter) : testWorkflowEnvironmentImpl.prototype.newTestActivityTaskHandler.call(env, parameters.activityOptions.TaskListName, parameters.DataConverter))
		let activityHandle: testActivityHandle | $.VarRef<testActivityHandle> | null = new testActivityHandle({callback: callback, activityType: parameters.ActivityType.Name})

		await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).setActivityHandle($.pointerValue<__goscript_internal_activity.activityInfo>(__goscriptShadow2).activityID, activityHandle) : testWorkflowEnvironmentImpl.prototype.setActivityHandle.call(env, $.pointerValue<__goscript_internal_activity.activityInfo>(__goscriptShadow2).activityID, activityHandle))
		$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount++
		// activity runs in separate goroutinue outside of workflow dispatcher
		// do callback in a defer to handle calls to runtime.Goexit inside the activity (which is done by t.FailNow)
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			const __defer = new $.AsyncDisposableStack()
			try {
				let result: any = null! as any
				__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
					let panicErr = $.recover()
					if ((result == null) && (panicErr == null)) {
						let reason = $.varRef("activity called runtime.Goexit")
						result = $.interfaceValue(new shared.RespondActivityTaskFailedRequest({Reason: reason}), "*shared.RespondActivityTaskFailedRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest"))
					} else {
						if (panicErr != null) {
							let reason = $.varRef("cadenceInternal:Panic")
							let __goscriptTuple9: any = await $.pointerValue<Exclude<__goscript_encoded.DataConverter, null>>((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env))).ToData($.arrayToSlice<any>([await fmt.Sprintf("%v", panicErr)]))
							let details: $.Slice<number> = __goscriptTuple9[0]
							result = $.interfaceValue(new shared.RespondActivityTaskFailedRequest({Reason: reason, Details: details}), "*shared.RespondActivityTaskFailedRequest", /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest"))
						}
					}
					// post activity result to workflow dispatcher
					await testWorkflowEnvironmentImpl.prototype.postCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
						await testWorkflowEnvironmentImpl.prototype.handleActivityResult.call(env, $.pointerValue<__goscript_internal_activity.activityInfo>(__goscriptShadow2).activityID, result, parameters.ActivityType.Name, parameters.DataConverter)
						$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount--
					}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), false)
				})() })
				result = await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).executeActivityWithRetryForTest(taskHandler, (parameters).clone(), task) : testWorkflowEnvironmentImpl.prototype.executeActivityWithRetryForTest.call(env, taskHandler, (parameters).clone(), task))
				await __defer.dispose()
			} catch (e) {
				await __defer.disposePanic(e)
				if (!$.recovered(e)) {
					throw e
				}
			}
		})() })

		return __goscriptShadow2
	}

	public async ExecuteChildWorkflow(params: __goscript_internal_workflow.executeWorkflowParams, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null, startedHandler: ((r: __goscript_workflow.WorkflowExecution, e: $.GoError) => void) | null): globalThis.Promise<$.GoError> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		return (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).executeChildWorkflowWithDelay(0n, (params).clone(), callback, startedHandler) : testWorkflowEnvironmentImpl.prototype.executeChildWorkflowWithDelay.call(env, 0n, (params).clone(), callback, startedHandler))
	}

	public async ExecuteLocalActivity(params: __goscript_internal_activity.executeLocalActivityParams, callback: ((lar: __goscript_internal_worker_base.localActivityResultWrapper | $.VarRef<__goscript_internal_worker_base.localActivityResultWrapper> | null) => void) | null): globalThis.Promise<__goscript_internal_activity.localActivityInfo | $.VarRef<__goscript_internal_activity.localActivityInfo> | null> {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		let activityID = await getStringID((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).nextID() : testWorkflowEnvironmentImpl.prototype.nextID.call(env)))
		let wOptions = __goscript_internal_worker.AugmentWorkerOptions(((env$ as testWorkflowEnvironmentImpl).workerOptions).clone())
		let ae: __goscript_internal_worker.activityExecutor | $.VarRef<__goscript_internal_worker.activityExecutor> | null = (await (async () => { const __goscriptLiteralField1 = await __goscript_internal_worker.getActivityFunctionName((env$ as testWorkflowEnvironmentImpl).registry, params.ActivityFn); return new __goscript_internal_worker.activityExecutor({name: __goscriptLiteralField1, fn: params.ActivityFn}) })())
		{
			let __goscriptTuple10: any = await __goscript_internal_activity.getValidatedActivityFunction(params.ActivityFn, params.InputArgs, (env$ as testWorkflowEnvironmentImpl).registry)
			let at: __goscript_activity.ActivityType | $.VarRef<__goscript_activity.ActivityType> | null = __goscriptTuple10[0]
			if (at != null) {
				// local activity could be registered, if so use the registered name. This name is only used to find a mock.
				$.pointerValue<__goscript_internal_worker.activityExecutor>(ae).name = $.pointerValue<__goscript_activity.ActivityType>(at).Name
			}
		}
		let aew: activityExecutorWrapper | $.VarRef<activityExecutorWrapper> | null = new activityExecutorWrapper({activityExecutor: ae, env: env})

		// substitute the local activity function so we could replace with mock if it is supplied.
		params.ActivityFn = $.interfaceValue($.functionValue(async (ctx: context.Context | null, inputArgs: $.Slice<any>): globalThis.Promise<[$.Slice<number>, $.GoError]> => {
			return await (aew !== null && (aew as any).__isVarRef !== true && (aew as any).__goValue === undefined ? ((aew as any) as activityExecutorWrapper).ExecuteWithActualArgs(ctx, params.InputArgs) : activityExecutorWrapper.prototype.ExecuteWithActualArgs.call(aew, ctx, params.InputArgs))
		}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], isVariadic: true } as $.FunctionTypeInfo)), "func(ctx context.Context, inputArgs ...interface{}) ([]byte, error)", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], isVariadic: true } as $.FunctionTypeInfo))

		let task: __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null = __goscript_internal_event_handlers.newLocalActivityTask((params).clone(), callback, activityID)
		let taskHandler = $.varRef((await (async () => { const __goscriptLiteralField2 = await metrics.NewTaggedScope(wOptions.MetricsScope); const __goscriptLiteralField3 = debug.NewNoopActivityTracker(); return new __goscript_internal_task_pollers.localActivityTaskHandler({userContext: wOptions.BackgroundActivityContext, metricsScope: __goscriptLiteralField2, logger: wOptions.Logger, dataConverter: wOptions.DataConverter, tracer: wOptions.Tracer, contextPropagators: wOptions.ContextPropagators, activityTracker: __goscriptLiteralField3}, true) })()))

		$.mapSet($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).localActivities, activityID, task)
		$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount++

		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			let result: __goscript_internal_task_pollers.localActivityResult | $.VarRef<__goscript_internal_task_pollers.localActivityResult> | null = await taskHandler.value.executeLocalActivityTask(task)
			await testWorkflowEnvironmentImpl.prototype.postCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
				await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).handleLocalActivityResult(result) : testWorkflowEnvironmentImpl.prototype.handleLocalActivityResult.call(env, result))
				$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount--
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), false)
		})() })

		return new __goscript_internal_activity.localActivityInfo({activityID: activityID})
	}

	public GetContextPropagators(): $.Slice<__goscript_headers.ContextPropagator | null> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		return $.pointerValue<testWorkflowEnvironmentImpl>(env).workerOptions.ContextPropagators
	}

	public GetDataConverter(): __goscript_encoded.DataConverter | null {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		return $.pointerValue<testWorkflowEnvironmentImpl>(env).workerOptions.DataConverter
	}

	public GetFeatureFlags(): __goscript_internal_utils.FeatureFlags {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		return ($.pointerValue<testWorkflowEnvironmentImpl>(env).workerOptions.FeatureFlags).clone()
	}

	public GetLogger(): zap.Logger | $.VarRef<zap.Logger> | null {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		return $.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>(env).testWorkflowEnvironmentShared).logger
	}

	public GetMetricsScope(): tally.Scope | null {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		return $.pointerValue<testWorkflowEnvironmentImpl>(env).workerOptions.MetricsScope
	}

	public async GetRegisteredActivities(): globalThis.Promise<$.Slice<__goscript_activity.RegistryActivityInfo | null>> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		let activities: $.Slice<__goscript_internal_activity.activity | null> = await __goscript_registry.registry.prototype.getRegisteredActivities.call($.pointerValue<testWorkflowEnvironmentImpl>(env).registry)
		let result: $.Slice<__goscript_activity.RegistryActivityInfo | null> = null! as $.Slice<__goscript_activity.RegistryActivityInfo | null>
		for (let __goscriptRangeTarget1 = activities, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let a = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_internal_activity.activity | null)
			result = $.appendOne(result, (a as __goscript_activity.RegistryActivityInfo | null), $.appendZeros.nil)
		}
		return result
	}

	public async GetRegisteredWorkflows(): globalThis.Promise<$.Slice<__goscript_workflow.RegistryWorkflowInfo | null>> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		let workflows: $.Slice<__goscript_internal_workflow.workflow | null> = await __goscript_registry.registry.prototype.GetRegisteredWorkflows.call($.pointerValue<testWorkflowEnvironmentImpl>(env).registry)
		let result: $.Slice<__goscript_workflow.RegistryWorkflowInfo | null> = null! as $.Slice<__goscript_workflow.RegistryWorkflowInfo | null>
		for (let __goscriptRangeTarget2 = workflows, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let wf = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as __goscript_internal_workflow.workflow | null)
			result = $.appendOne(result, (wf as __goscript_workflow.RegistryWorkflowInfo | null), $.appendZeros.nil)
		}
		return result
	}

	public GetRegistry(): __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		return $.pointerValue<testWorkflowEnvironmentImpl>(env).registry
	}

	public GetTracer(): opentracing.Tracer | null {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		if ((env$ as testWorkflowEnvironmentImpl).workerOptions.Tracer == null) {
			return $.interfaceValue<opentracing.Tracer | null>(new opentracing.NoopTracer(undefined, true), "opentracing.NoopTracer", "opentracing.NoopTracer")
		}
		return (env$ as testWorkflowEnvironmentImpl).workerOptions.Tracer
	}

	public async GetVersion(changeID: string, minSupported: __goscript_workflow.Version, maxSupported: __goscript_workflow.Version, opts: $.Slice<__goscript_workflow.GetVersionOption | null>): globalThis.Promise<__goscript_workflow.Version> {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		let retVersion: __goscript_workflow.Version = 0
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		{
			let [mockVersion, ok] = await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).getMockedVersion(changeID, changeID, minSupported, maxSupported) : testWorkflowEnvironmentImpl.prototype.getMockedVersion.call(env, changeID, changeID, minSupported, maxSupported))
			if (ok) {
				// GetVersion for changeID is mocked
				await testWorkflowEnvironmentImpl.prototype.UpsertSearchAttributes.call(env, await __goscript_internal_event_handlers.createSearchAttributesForChangeVersion(changeID, mockVersion, (env$ as testWorkflowEnvironmentImpl).changeVersions))
				$.mapSet((env$ as testWorkflowEnvironmentImpl).changeVersions, changeID, mockVersion)
				return mockVersion
			}
		}
		{
			let [mockVersion, ok] = await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).getMockedVersion(mock2.Anything, changeID, minSupported, maxSupported) : testWorkflowEnvironmentImpl.prototype.getMockedVersion.call(env, mock2.Anything, changeID, minSupported, maxSupported))
			if (ok) {
				// GetVersion is mocked with any changeID.
				await testWorkflowEnvironmentImpl.prototype.UpsertSearchAttributes.call(env, await __goscript_internal_event_handlers.createSearchAttributesForChangeVersion(changeID, mockVersion, (env$ as testWorkflowEnvironmentImpl).changeVersions))
				$.mapSet((env$ as testWorkflowEnvironmentImpl).changeVersions, changeID, mockVersion)
				return mockVersion
			}
		}

		// no mock setup, so call regular path
		{
			let [version, ok] = $.mapGet<string, __goscript_workflow.Version, __goscript_workflow.Version>((env$ as testWorkflowEnvironmentImpl).changeVersions, changeID, 0)
			if (ok) {
				await __goscript_internal_event_handlers.validateVersion(changeID, version, minSupported, maxSupported)
				return version
			}
		}

		// Apply the functional options to get the configuration
		let config: __goscript_workflow.getVersionConfig | $.VarRef<__goscript_workflow.getVersionConfig> | null = new __goscript_workflow.getVersionConfig()
		let config$: __goscript_workflow.getVersionConfig = config == null ? $.pointerTarget<__goscript_workflow.getVersionConfig>(config) : (config as any).__isVarRef === true ? (config as any).value : (config as any).__goValue === undefined ? (config as any) : $.pointerTarget<__goscript_workflow.getVersionConfig>(config)
		for (let __goscriptRangeTarget3 = opts, __goscriptRangeWindow3 = $.sliceRange(__goscriptRangeTarget3), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow3.length; __rangeIndex++) {
			let opt = (__goscriptRangeWindow3.backing[__goscriptRangeWindow3.offset + __rangeIndex] as __goscript_workflow.GetVersionOption | null)
			void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<__goscript_workflow.GetVersionOption, null>) : $.pointerValue<Exclude<__goscript_workflow.GetVersionOption, null>>(opt)).apply(config), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		// Determine the version to use based on the options provided
		let version: __goscript_workflow.Version = 0
		switch ((true as boolean)) {
			case (config$ as __goscript_workflow.getVersionConfig).CustomVersion != null:
			{
				version = $.pointerValue<__goscript_workflow.Version>((config$ as __goscript_workflow.getVersionConfig).CustomVersion)
				break
			}
			case (config$ as __goscript_workflow.getVersionConfig).UseMinVersion:
			{
				version = minSupported
				break
			}
			default:
			{
				version = maxSupported
				break
			}
		}

		// Validate the version against the min and max supported versions
		// ensuring it is within the acceptable range
		await __goscript_internal_event_handlers.validateVersion(changeID, version, minSupported, maxSupported)

		// If the version is not the DefaultVersion, update search attributes
		// Keeping the DefaultVersion as a special case where no search attributes are updated
		if (version != -1) {
			await testWorkflowEnvironmentImpl.prototype.UpsertSearchAttributes.call(env, await __goscript_internal_event_handlers.createSearchAttributesForChangeVersion(changeID, version, (env$ as testWorkflowEnvironmentImpl).changeVersions))
		}

		// Store the version to ensure that the version is stable
		// during the workflow execution
		$.mapSet((env$ as testWorkflowEnvironmentImpl).changeVersions, changeID, version)
		return version
	}

	public GetWorkflowInterceptors(): $.Slice<__goscript_interceptors.WorkflowInterceptorFactory | null> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		return $.pointerValue<testWorkflowEnvironmentImpl>(env).workflowInterceptors
	}

	public IsCron(): boolean {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		// this test environment never replay
		return ($.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).CronSchedule != null) && ($.stringLen($.pointerValue<string>($.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).CronSchedule)) > 0)
	}

	public IsReplaying(): boolean {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		// this test environment never replay
		return false
	}

	public async MutableSideEffect(id: string, f: (() => any | globalThis.Promise<any>) | null, equals: ((a: any, b: any) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<__goscript_encoded.Value | null> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		return __goscript_workflow.newEncodedValue(await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).encodeValue((__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) : testWorkflowEnvironmentImpl.prototype.encodeValue.call(env, (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))), (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)))
	}

	public async NewTimer(d: time.Duration, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): globalThis.Promise<__goscript_internal_time.timerInfo | $.VarRef<__goscript_internal_time.timerInfo> | null> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		return (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).newTimer(d, callback, true) : testWorkflowEnvironmentImpl.prototype.newTimer.call(env, d, callback, true))
	}

	public async Now(): globalThis.Promise<time.Time> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		return clock.Mock.prototype.Now.call($.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>(env).testWorkflowEnvironmentShared).mockClock)
	}

	public async RegisterActivity(a: any): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		await __goscript_registry.registry.prototype.RegisterActivity.call($.pointerValue<testWorkflowEnvironmentImpl>(env).registry, a)
	}

	public async RegisterActivityWithOptions(a: any, options: __goscript_activity.RegisterActivityOptions): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		await __goscript_registry.registry.prototype.RegisterActivityWithOptions.call($.pointerValue<testWorkflowEnvironmentImpl>(env).registry, a, options)
	}

	public RegisterCancelHandler(handler: (() => void) | null): void {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		$.pointerValue<testWorkflowEnvironmentImpl>(env).workflowCancelHandler = handler
	}

	public RegisterQueryHandler(handler: ((_p0: string, _p1: $.Slice<number>) => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null): void {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		$.pointerValue<testWorkflowEnvironmentImpl>(env).queryHandler = handler
	}

	public RegisterSignalHandler(handler: ((name: string, input: $.Slice<number>) => void) | null): void {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		$.pointerValue<testWorkflowEnvironmentImpl>(env).signalHandler = handler
	}

	public async RegisterWorkflow(w: any): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		await __goscript_registry.registry.prototype.RegisterWorkflow.call($.pointerValue<testWorkflowEnvironmentImpl>(env).registry, w)
	}

	public async RegisterWorkflowWithOptions(w: any, options: __goscript_workflow.RegisterWorkflowOptions): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		await __goscript_registry.registry.prototype.RegisterWorkflowWithOptions.call($.pointerValue<testWorkflowEnvironmentImpl>(env).registry, w, options)
	}

	public RemoveSession(sessionID: string): void {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		$.deleteMapEntry($.pointerValue<testWorkflowEnvironmentImpl>(env).openSessions, sessionID)
	}

	public async RequestCancelActivity(activityID: string): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		let __goscriptTuple11: any = await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).getActivityHandle(activityID) : testWorkflowEnvironmentImpl.prototype.getActivityHandle.call(env, activityID))
		let handle: testActivityHandle | $.VarRef<testActivityHandle> | null = __goscriptTuple11[0]
		let ok = __goscriptTuple11[1]
		let handle$: testActivityHandle = handle == null ? $.pointerTarget<testActivityHandle>(handle) : (handle as any).__isVarRef === true ? (handle as any).value : (handle as any).__goValue === undefined ? (handle as any) : $.pointerTarget<testActivityHandle>(handle)
		if (!ok) {
			await zap.Logger.prototype.Debug.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger, "RequestCancelActivity failed, Activity not exists or already completed.", $.arrayToSlice<zap.Field>([zap.String("ActivityID", activityID)]))
			return
		}
		let __goscriptShadow3: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).getActivityInfo(activityID, (handle$ as testActivityHandle).activityType) : testWorkflowEnvironmentImpl.prototype.getActivityInfo.call(env, activityID, (handle$ as testActivityHandle).activityType))
		await zap.Logger.prototype.Debug.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger, "RequestCancelActivity", $.arrayToSlice<zap.Field>([zap.String("ActivityID", activityID)]))
		await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).deleteHandle(activityID) : testWorkflowEnvironmentImpl.prototype.deleteHandle.call(env, activityID))
		await testWorkflowEnvironmentImpl.prototype.postCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
			await (handle$ as testActivityHandle).callback!(null, $.interfaceValue<$.GoError>(__goscript_error.NewCanceledError(null), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError")))
			if ($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onActivityCanceledListener != null) {
				await $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onActivityCanceledListener!(__goscriptShadow3)
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), true)
	}

	public async RequestCancelChildWorkflow(domainName: string, workflowID: string): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		{
			let __goscriptTuple12: any = $.mapGet<string, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null>($.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>(env).testWorkflowEnvironmentShared).runningWorkflows, workflowID, null)
			let childHandle: testWorkflowHandle | $.VarRef<testWorkflowHandle> | null = __goscriptTuple12[0]
			let ok = __goscriptTuple12[1]
			if (ok && !$.pointerValue<testWorkflowHandle>(childHandle).handled) {
				// current workflow is a parent workflow, and we are canceling a child workflow
				let childEnv: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = $.pointerValue<testWorkflowHandle>(childHandle).env
				await testWorkflowEnvironmentImpl.prototype.cancelWorkflow.call(childEnv, $.functionValue((result: $.Slice<number>, err: $.GoError): void => {
				}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)))
				return
			}
		}
	}

	public async RequestCancelExternalWorkflow(domainName: string, workflowID: string, runID: string, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): globalThis.Promise<void> {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		if ($.stringEqual($.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).WorkflowExecution.ID, workflowID)) {
			// cancel current workflow
			void (__goscriptAwait = (env$ as testWorkflowEnvironmentImpl).workflowCancelHandler!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			// check if current workflow is a child workflow
			if ((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).isChildWorkflow() : testWorkflowEnvironmentImpl.prototype.isChildWorkflow.call(env)) && ($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onChildWorkflowCanceledListener != null)) {
				await testWorkflowEnvironmentImpl.prototype.postCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
					await $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onChildWorkflowCanceledListener!((env$ as testWorkflowEnvironmentImpl).workflowInfo)
				}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), false)
			}
			return
		} else {
			{
				let __goscriptTuple13: any = $.mapGet<string, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningWorkflows, workflowID, null)
				let childHandle: testWorkflowHandle | $.VarRef<testWorkflowHandle> | null = __goscriptTuple13[0]
				let ok = __goscriptTuple13[1]
				if (ok && !$.pointerValue<testWorkflowHandle>(childHandle).handled) {
					// current workflow is a parent workflow, and we are canceling a child workflow
					if (!$.pointerValue<__goscript_internal_workflow.executeWorkflowParams>($.pointerValue<testWorkflowHandle>(childHandle).params).workflowOptions.waitForCancellation) {
						await testWorkflowEnvironmentImpl.prototype.Complete.call($.pointerValue<testWorkflowHandle>(childHandle).env, null, $.interfaceValue<$.GoError>(__goscript_context.__goscript_get_ErrCanceled(), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError")))
					}
					let childEnv: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = $.pointerValue<testWorkflowHandle>(childHandle).env
					await testWorkflowEnvironmentImpl.prototype.postCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
						void (__goscriptAwait = callback!(null, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), true)
					await (childEnv !== null && (childEnv as any).__isVarRef !== true && (childEnv as any).__goValue === undefined ? ((childEnv as any) as testWorkflowEnvironmentImpl).cancelWorkflow(callback) : testWorkflowEnvironmentImpl.prototype.cancelWorkflow.call(childEnv, callback))
					return
				}
			}
		}

		// target workflow is not child workflow, we need the mock. The mock needs to be called in a separate goroutinue
		// so it can block and wait on the requested delay time (if configured). If we run it in main thread, and the mock
		// configured to delay, it will block the main loop which stops the world.
		$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount++
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			let args: $.Slice<any> = $.arrayToSlice<any>([domainName, workflowID, runID])
			// below call will panic if mock is not properly setup.
			let mockRet: mock2.Arguments = (await mock2.Mock.prototype.MethodCalled.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).mock, "workflow.RequestCancelExternalWorkflow", args) as mock2.Arguments)
			let m: mockWrapper | $.VarRef<mockWrapper> | null = new mockWrapper({name: "workflow.RequestCancelExternalWorkflow", fn: $.interfaceValue($.goFunc(mockFnRequestCancelExternalWorkflow, "go.uber.org/cadence/internal.mockFnRequestCancelExternalWorkflow"), "func(domainName string, workflowID string, runID string) error", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo))})
			let err: $.GoError = null! as $.GoError
			{
				let mockFn = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mockWrapper).getMockFn((mockRet as mock2.Arguments)) : mockWrapper.prototype.getMockFn.call(m, (mockRet as mock2.Arguments)))
				if (mockFn != null) {
					let executor: __goscript_internal_worker.activityExecutor | $.VarRef<__goscript_internal_worker.activityExecutor> | null = new __goscript_internal_worker.activityExecutor({name: "workflow.RequestCancelExternalWorkflow", fn: mockFn})
					let __goscriptTuple14: any = await (executor !== null && (executor as any).__isVarRef !== true && (executor as any).__goValue === undefined ? ((executor as any) as __goscript_internal_worker.activityExecutor).ExecuteWithActualArgs(null, args) : __goscript_internal_worker.activityExecutor.prototype.ExecuteWithActualArgs.call(executor, null, args))
					err = __goscriptTuple14[1]
				} else {
					let __goscriptTuple15: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mockWrapper).getMockValue((mockRet as mock2.Arguments)) : mockWrapper.prototype.getMockValue.call(m, (mockRet as mock2.Arguments)))
					err = __goscriptTuple15[1]
				}
			}
			await testWorkflowEnvironmentImpl.prototype.postCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
				void (__goscriptAwait = callback!(null, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount--
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), true)
		})() })
	}

	public async RequestCancelLocalActivity(activityID: string): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		let __goscriptTuple16: any = $.mapGet<string, __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null, __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).localActivities, activityID, null)
		let task: __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null = __goscriptTuple16[0]
		let ok = __goscriptTuple16[1]
		let task$: __goscript_internal_event_handlers.localActivityTask = task == null ? $.pointerTarget<__goscript_internal_event_handlers.localActivityTask>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<__goscript_internal_event_handlers.localActivityTask>(task)
		if (!ok) {
			await zap.Logger.prototype.Debug.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger, "RequestCancelLocalActivity failed, LocalActivity not exists or already completed.", $.arrayToSlice<zap.Field>([zap.String("ActivityID", activityID)]))
			return
		}
		let __goscriptShadow4: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null = testWorkflowEnvironmentImpl.prototype.getActivityInfo.call(env, activityID, await __goscript_internal_worker.getActivityFunctionName((env$ as testWorkflowEnvironmentImpl).registry, $.pointerValue<__goscript_internal_activity.executeLocalActivityParams>((task$ as __goscript_internal_event_handlers.localActivityTask).params).ActivityFn))
		await zap.Logger.prototype.Debug.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger, "RequestCancelLocalActivity", $.arrayToSlice<zap.Field>([zap.String("ActivityID", activityID)]))
		$.deleteMapEntry($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).localActivities, activityID)
		await testWorkflowEnvironmentImpl.prototype.postCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
			let lar: __goscript_internal_worker_base.localActivityResultWrapper | $.VarRef<__goscript_internal_worker_base.localActivityResultWrapper> | null = new __goscript_internal_worker_base.localActivityResultWrapper({err: $.interfaceValue<$.GoError>(__goscript_context.__goscript_get_ErrCanceled(), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError")), backoff: -1n})
			await (task$ as __goscript_internal_event_handlers.localActivityTask).callback!(lar)
			if ($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onLocalActivityCanceledListener != null) {
				await $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onLocalActivityCanceledListener!(__goscriptShadow4)
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), true)
	}

	public async RequestCancelTimer(timerID: string): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		await zap.Logger.prototype.Debug.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger, "RequestCancelTimer", $.arrayToSlice<zap.Field>([zap.String("TimerID", timerID)]))
		let __goscriptTuple17: any = $.mapGet<string, testTimerHandle | $.VarRef<testTimerHandle> | null, testTimerHandle | $.VarRef<testTimerHandle> | null>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).timers, timerID, null)
		let timerHandle: testTimerHandle | $.VarRef<testTimerHandle> | null = __goscriptTuple17[0]
		let ok = __goscriptTuple17[1]
		let timerHandle$: testTimerHandle = timerHandle == null ? $.pointerTarget<testTimerHandle>(timerHandle) : (timerHandle as any).__isVarRef === true ? (timerHandle as any).value : (timerHandle as any).__goValue === undefined ? (timerHandle as any) : $.pointerTarget<testTimerHandle>(timerHandle)
		if (!ok) {
			await zap.Logger.prototype.Debug.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger, "RequestCancelTimer failed, TimerID not exists.", $.arrayToSlice<zap.Field>([zap.String("TimerID", timerID)]))
			return
		}

		$.deleteMapEntry($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).timers, timerID)
		await clock.Timer.prototype.Stop.call((timerHandle$ as testTimerHandle).timer)
		await testWorkflowEnvironmentImpl.prototype.postCallback.call((timerHandle$ as testTimerHandle).env, $.functionValue(async (): globalThis.Promise<void> => {
			await (timerHandle$ as testTimerHandle).callback!(null, $.interfaceValue<$.GoError>(__goscript_error.NewCanceledError(null), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError")))
			if ($.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>((timerHandle$ as testTimerHandle).env).testWorkflowEnvironmentShared).onTimerCancelledListener != null) {
				await $.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>((timerHandle$ as testTimerHandle).env).testWorkflowEnvironmentShared).onTimerCancelledListener!(timerID)
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), true)
	}

	public async SideEffect(f: (() => [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>) | null, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		void (__goscriptAwait = callback!(...((await f!()) as [$.Slice<number>, $.GoError])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async SignalExternalWorkflow(domainName: string, workflowID: string, runID: string, signalName: string, input: $.Slice<number>, arg: any, childWorkflowOnly: boolean, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): globalThis.Promise<void> {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		// check if target workflow is a known workflow
		{
			let __goscriptTuple18: any = $.mapGet<string, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningWorkflows, workflowID, null)
			let childHandle: testWorkflowHandle | $.VarRef<testWorkflowHandle> | null = __goscriptTuple18[0]
			let ok = __goscriptTuple18[1]
			if (ok) {
				// target workflow is a child
				let childEnv: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = $.pointerValue<testWorkflowHandle>(childHandle).env
				let childEnv$: testWorkflowEnvironmentImpl = childEnv == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(childEnv) : (childEnv as any).__isVarRef === true ? (childEnv as any).value : (childEnv as any).__goValue === undefined ? (childEnv as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(childEnv)
				if ((childEnv$ as testWorkflowEnvironmentImpl).isTestCompleted) {
					// child already completed (NOTE: we have only one failed cause now)
					let err: __goscript_error.UnknownExternalWorkflowExecutionError | $.VarRef<__goscript_error.UnknownExternalWorkflowExecutionError> | null = __goscript_error.newUnknownExternalWorkflowExecutionError()
					void (__goscriptAwait = callback!(null, $.interfaceValue<$.GoError>(err, "*internal.UnknownExternalWorkflowExecutionError", /* @__PURE__ */ $.pointerType("internal.UnknownExternalWorkflowExecutionError"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				} else {
					void (__goscriptAwait = (childEnv$ as testWorkflowEnvironmentImpl).signalHandler!(signalName, input), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					void (__goscriptAwait = callback!(null, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				await (childEnv !== null && (childEnv as any).__isVarRef !== true && (childEnv as any).__goValue === undefined ? ((childEnv as any) as testWorkflowEnvironmentImpl).postCallback($.functionValue((): void => {
				}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), true) : testWorkflowEnvironmentImpl.prototype.postCallback.call(childEnv, $.functionValue((): void => {
				}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), true))
				return
			}
		}

		// here we signal a child workflow but we cannot find it
		if (childWorkflowOnly) {
			let err: __goscript_error.UnknownExternalWorkflowExecutionError | $.VarRef<__goscript_error.UnknownExternalWorkflowExecutionError> | null = __goscript_error.newUnknownExternalWorkflowExecutionError()
			void (__goscriptAwait = callback!(null, $.interfaceValue<$.GoError>(err, "*internal.UnknownExternalWorkflowExecutionError", /* @__PURE__ */ $.pointerType("internal.UnknownExternalWorkflowExecutionError"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}

		// target workflow is not child workflow, we need the mock. The mock needs to be called in a separate goroutinue
		// so it can block and wait on the requested delay time (if configured). If we run it in main thread, and the mock
		// configured to delay, it will block the main loop which stops the world.
		$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount++
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			let args: $.Slice<any> = $.arrayToSlice<any>([domainName, workflowID, runID, signalName, arg])
			// below call will panic if mock is not properly setup.
			let mockRet: mock2.Arguments = (await mock2.Mock.prototype.MethodCalled.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).mock, "workflow.SignalExternalWorkflow", args) as mock2.Arguments)
			let m: mockWrapper | $.VarRef<mockWrapper> | null = new mockWrapper({name: "workflow.SignalExternalWorkflow", fn: $.interfaceValue($.goFunc(mockFnSignalExternalWorkflow, "go.uber.org/cadence/internal.mockFnSignalExternalWorkflow"), "func(domainName string, workflowID string, runID string, signalName string, arg interface{}) error", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }], results: ["error"] } as $.FunctionTypeInfo))})
			let err: $.GoError = null! as $.GoError
			{
				let mockFn = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mockWrapper).getMockFn((mockRet as mock2.Arguments)) : mockWrapper.prototype.getMockFn.call(m, (mockRet as mock2.Arguments)))
				if (mockFn != null) {
					let executor: __goscript_internal_worker.activityExecutor | $.VarRef<__goscript_internal_worker.activityExecutor> | null = new __goscript_internal_worker.activityExecutor({name: "workflow.SignalExternalWorkflow", fn: mockFn})
					let __goscriptTuple19: any = await (executor !== null && (executor as any).__isVarRef !== true && (executor as any).__goValue === undefined ? ((executor as any) as __goscript_internal_worker.activityExecutor).ExecuteWithActualArgs(null, args) : __goscript_internal_worker.activityExecutor.prototype.ExecuteWithActualArgs.call(executor, null, args))
					err = __goscriptTuple19[1]
				} else {
					let __goscriptTuple20: any = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mockWrapper).getMockValue((mockRet as mock2.Arguments)) : mockWrapper.prototype.getMockValue.call(m, (mockRet as mock2.Arguments)))
					err = __goscriptTuple20[1]
				}
			}
			await testWorkflowEnvironmentImpl.prototype.postCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
				void (__goscriptAwait = callback!(null, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount--
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), true)
		})() })
	}

	public async UpsertSearchAttributes(attributes: globalThis.Map<string, any> | null): globalThis.Promise<$.GoError> {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		let mockMethod = "workflow.UpsertSearchAttributes"
		{
			let [, ok] = $.mapGet<string, {}, {}>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).expectedMockCalls, mockMethod, {})
			if (ok) {
				// mock found, check if return is error
				let args: $.Slice<any> = $.arrayToSlice<any>([$.interfaceValue(attributes, "map[string]interface{}", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))])
				let mockRet: mock2.Arguments = (await mock2.Mock.prototype.MethodCalled.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).mock, mockMethod, args) as mock2.Arguments)
				if ($.sliceLen((mockRet as mock2.Arguments)) > 1) {
					$.panic(await fmt.Sprintf("mock of UpsertSearchAttributes should return only one error"))
				}
				if (($.sliceLen((mockRet as mock2.Arguments)) == 1) && ($.arrayIndex(mockRet!, 0) != null)) {
					return $.mustTypeAssert<$.GoError>($.arrayIndex(mockRet!, 0), "error")
				}
			}
		}

		let __goscriptTuple21: any = await __goscript_internal_event_handlers.validateAndSerializeSearchAttributes(attributes)
		let attr: shared.SearchAttributes | $.VarRef<shared.SearchAttributes> | null = __goscriptTuple21[0]
		let err = __goscriptTuple21[1]
		$.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).SearchAttributes = __goscript_internal_event_handlers.mergeSearchAttributes($.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).SearchAttributes, attr)
		return err
	}

	public WorkflowInfo(): __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		return $.pointerValue<testWorkflowEnvironmentImpl>(env).workflowInfo
	}

	public async autoFireNextTimer(): globalThis.Promise<boolean> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		if ($.len($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).timers) == 0) {
			return false
		}

		// find next timer
		let nextTimer: testTimerHandle | $.VarRef<testTimerHandle> | null = null! as testTimerHandle | $.VarRef<testTimerHandle> | null
		for (const [__rangeKey, t] of $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).timers?.entries() ?? []) {
			if (nextTimer == null) {
				nextTimer = t
			} else {
				if ($.markAsStructValue($.cloneStructValue($.pointerValue<testTimerHandle>(t).mockTimeToFire)).Before($.markAsStructValue($.cloneStructValue($.pointerValue<testTimerHandle>(nextTimer).mockTimeToFire))) || ($.markAsStructValue($.cloneStructValue($.pointerValue<testTimerHandle>(t).mockTimeToFire)).Equal($.markAsStructValue($.cloneStructValue($.pointerValue<testTimerHandle>(nextTimer).mockTimeToFire))) && ($.pointerValue<testTimerHandle>(t).timerID < $.pointerValue<testTimerHandle>(nextTimer).timerID))) {
					nextTimer = t
				}
			}
		}

		// function to fire timer
		let fireTimer: ((th: testTimerHandle | $.VarRef<testTimerHandle> | null) => void) | null = $.functionValue(async (th: testTimerHandle | $.VarRef<testTimerHandle> | null): globalThis.Promise<void> => {
			let skipDuration = $.markAsStructValue($.cloneStructValue($.pointerValue<testTimerHandle>(th).mockTimeToFire)).Sub(await clock.Mock.prototype.Now.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).mockClock))
			await zap.Logger.prototype.Debug.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger, "Auto fire timer", $.arrayToSlice<zap.Field>([zap.Int("TimerID", $.pointerValue<testTimerHandle>(th).timerID), zap.Duration("TimerDuration", $.pointerValue<testTimerHandle>(th).duration), zap.Duration("TimeSkipped", skipDuration)]))

			// Move mockClock forward, this will fire the timer, and the timer callback will remove timer from timers.
			await clock.Mock.prototype.Add.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).mockClock, skipDuration)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.testTimerHandle")], results: [] } as $.FunctionTypeInfo))

		// fire timer if there is no running activity
		if ($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount == 0) {
			if ($.pointerValue<testTimerHandle>(nextTimer).wallTimer != null) {
				await clock.Timer.prototype.Stop.call($.pointerValue<testTimerHandle>(nextTimer).wallTimer)
				$.pointerValue<testTimerHandle>(nextTimer).wallTimer = null
			}
			void (__goscriptAwait = fireTimer!(nextTimer), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return true
		}

		let durationToFire = $.markAsStructValue($.cloneStructValue($.pointerValue<testTimerHandle>(nextTimer).mockTimeToFire)).Sub(await clock.Mock.prototype.Now.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).mockClock))
		let wallTimeToFire = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<clock.Clock, null>>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).wallClock).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Add(durationToFire)))

		if (($.pointerValue<testTimerHandle>(nextTimer).wallTimer != null) && $.markAsStructValue($.cloneStructValue($.pointerValue<testTimerHandle>(nextTimer).wallTimeToFire)).Before($.markAsStructValue($.cloneStructValue(wallTimeToFire)))) {
			// nextTimer already set, meaning we already have a wall clock timer for the nextTimer setup earlier. And the
			// previously scheduled wall time to fire is before the wallTimeToFire calculated this time. This could happen
			// if workflow was blocked while there was activity running, and when that activity completed, there are some
			// other activities still running while the nextTimer is still that same nextTimer. In that case, we should not
			// reset the wall time to fire for the nextTimer.
			return false
		}
		if ($.pointerValue<testTimerHandle>(nextTimer).wallTimer != null) {
			// wallTimer was scheduled, but the wall time to fire should be earlier based on current calculation.
			await clock.Timer.prototype.Stop.call($.pointerValue<testTimerHandle>(nextTimer).wallTimer)
		}

		// there is running activities, we would fire next timer only if wall time passed by nextTimer duration.
		let __goscriptAssign1_0: time.Time = $.markAsStructValue($.cloneStructValue(wallTimeToFire))
		let __goscriptAssign1_1: clock.Timer | $.VarRef<clock.Timer> | null = ((__goscriptAwait = $.pointerValue<Exclude<clock.Clock, null>>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).wallClock).AfterFunc(durationToFire, $.functionValue(async (): globalThis.Promise<void> => {
			// make sure it is running in the main loop
			await testWorkflowEnvironmentImpl.prototype.postCallback.call($.pointerValue<testTimerHandle>(nextTimer).env, $.functionValue(async (): globalThis.Promise<void> => {
				{
					let __goscriptTuple22: any = $.mapGet<string, testTimerHandle | $.VarRef<testTimerHandle> | null, testTimerHandle | $.VarRef<testTimerHandle> | null>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).timers, await getStringID($.pointerValue<testTimerHandle>(nextTimer).timerID), null)
					let timerHandle: testTimerHandle | $.VarRef<testTimerHandle> | null = __goscriptTuple22[0]
					let ok = __goscriptTuple22[1]
					if (ok) {
						void (__goscriptAwait = fireTimer!(timerHandle), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), true)
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as clock.Timer | $.VarRef<clock.Timer> | null)
		$.assignStruct($.pointerValue<testTimerHandle>(nextTimer).wallTimeToFire, __goscriptAssign1_0)
		$.pointerValue<testTimerHandle>(nextTimer).wallTimer = __goscriptAssign1_1

		return false
	}

	public async cancelWorkflow(callback: ((result: $.Slice<number>, err: $.GoError) => void) | null): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		await testWorkflowEnvironmentImpl.prototype.postCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
			// RequestCancelWorkflow needs to be run in main thread
			await testWorkflowEnvironmentImpl.prototype.RequestCancelExternalWorkflow.call(env, $.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).Domain, $.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).WorkflowExecution.ID, $.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).WorkflowExecution.RunID, callback)
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), true)
	}

	public async deleteHandle(activityID: string): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		$.deleteMapEntry($.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>(env).testWorkflowEnvironmentShared).activities, await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).makeUniqueID(activityID) : testWorkflowEnvironmentImpl.prototype.makeUniqueID.call(env, activityID)))
	}

	public async encodeValue(value: any): globalThis.Promise<$.Slice<number>> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		let __goscriptTuple23: any = await $.pointerValue<Exclude<__goscript_encoded.DataConverter, null>>((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env))).ToData($.arrayToSlice<any>([value]))
		let blob: $.Slice<number> = __goscriptTuple23[0]
		let err = __goscriptTuple23[1]
		if (err != null) {
			$.panic((err as any))
		}
		return blob
	}

	public async executeActivity(activityFn: any, args: $.Slice<any>): globalThis.Promise<[__goscript_encoded.Value | null, $.GoError]> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		return testWorkflowEnvironmentImpl.prototype.executeActivityWithOptions.call(env, new __goscript_internal_activity.activityOptions({ScheduleToCloseTimeoutSeconds: 600, StartToCloseTimeoutSeconds: 600}, true), activityFn, args)
	}

	public async executeActivityWithOptions(activityOptions: __goscript_internal_activity.activityOptions, activityFn: any, args: $.Slice<any>): globalThis.Promise<[__goscript_encoded.Value | null, $.GoError]> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		let __goscriptTuple24: any = await __goscript_internal_activity.getValidatedActivityFunction(activityFn, args, (env$ as testWorkflowEnvironmentImpl).registry)
		let activityType: __goscript_activity.ActivityType | $.VarRef<__goscript_activity.ActivityType> | null = __goscriptTuple24[0]
		let err = __goscriptTuple24[1]
		if (err != null) {
			$.panic((err as any))
		}

		let __goscriptTuple25: any = await __goscript_internal_worker.encodeArgs((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)), args)
		let input: $.Slice<number> = __goscriptTuple25[0]
		err = __goscriptTuple25[1]
		if (err != null) {
			$.panic((err as any))
		}

		let params = new __goscript_internal_activity.executeActivityParams({activityOptions: activityOptions, ActivityType: $.pointerValue<__goscript_activity.ActivityType>(activityType), Input: input, Header: $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).header}, true)

		let task: shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null = newTestActivityTask("default-test-workflow-id", "default-test-run-id", "0", "default-test-workflow-type-name", "default-test-domain-name", params)
		let task$: shared.PollForActivityTaskResponse = task == null ? $.pointerTarget<shared.PollForActivityTaskResponse>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<shared.PollForActivityTaskResponse>(task);

		;(task$ as shared.PollForActivityTaskResponse).HeartbeatDetails = (env$ as testWorkflowEnvironmentImpl).heartbeatDetails

		// ensure activityFn is registered to defaultTestTaskList
		let taskHandler = await testWorkflowEnvironmentImpl.prototype.newTestActivityTaskHandler.call(env, "default-test-tasklist", (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)))
		let __goscriptTuple26: any = await (taskHandler !== null && (taskHandler as any).__isVarRef !== true && (taskHandler as any).__goValue === undefined ? (taskHandler as Exclude<__goscript_internal_public.ActivityTaskHandler, null>) : $.pointerValue<Exclude<__goscript_internal_public.ActivityTaskHandler, null>>(taskHandler)).Execute("default-test-tasklist", task)
		let result = __goscriptTuple26[0]
		err = __goscriptTuple26[1]
		if (err != null) {
			if ($.comparableEqual(err, context.DeadlineExceeded)) {
				await zap.Logger.prototype.Debug.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger, await fmt.Sprintf("Activity %v timed out", $.interfaceValue($.pointerValue<shared.ActivityType>((task$ as shared.PollForActivityTaskResponse).ActivityType).Name, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))), null)
				return [null, $.interfaceValue<$.GoError>(__goscript_error.NewTimeoutError(0, $.arrayToSlice<any>([(__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>(context.DeadlineExceeded).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)])), "*internal.TimeoutError", /* @__PURE__ */ $.pointerType("internal.TimeoutError"))]
			}
			let topLine = await fmt.Sprintf("activity for %s [panic]:", "default-test-tasklist")
			let st = await __goscript_internal_workflow.getStackTraceRaw(topLine, 7, 0)
			return [null, $.interfaceValue<$.GoError>(__goscript_error.newPanicError((__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), st), "*internal.PanicError", /* @__PURE__ */ $.pointerType("internal.PanicError"))]
		}

		if ($.comparableEqual(result, __goscript_error.ErrActivityResultPending)) {
			return [null, __goscript_error.ErrActivityResultPending]
		}

		{
			const __goscriptTypeSwitchValue = result
			switch (true) {
				case $.typeAssert<shared.RespondActivityTaskCanceledRequest | $.VarRef<shared.RespondActivityTaskCanceledRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledRequest")).ok:
					{
						let request: shared.RespondActivityTaskCanceledRequest | $.VarRef<shared.RespondActivityTaskCanceledRequest> | null = $.typeAssert<shared.RespondActivityTaskCanceledRequest | $.VarRef<shared.RespondActivityTaskCanceledRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledRequest")).value
						let details = __goscript_workflow_testsuite.newEncodedValues($.pointerValue<shared.RespondActivityTaskCanceledRequest>(request).Details, (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)))
						return [null, $.interfaceValue<$.GoError>(__goscript_error.NewCanceledError($.arrayToSlice<any>([(details as any)])), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError"))]
					}
					break
				case $.typeAssert<shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest")).ok:
					{
						let request: shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null = $.typeAssert<shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest")).value
						return [null, await __goscript_internal_utils.constructError((request !== null && (request as any).__isVarRef !== true && (request as any).__goValue === undefined ? ((request as any) as shared.RespondActivityTaskFailedRequest).GetReason() : shared.RespondActivityTaskFailedRequest.prototype.GetReason.call(request)), $.pointerValue<shared.RespondActivityTaskFailedRequest>(request).Details, (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)))]
					}
					break
				case $.typeAssert<shared.RespondActivityTaskCompletedRequest | $.VarRef<shared.RespondActivityTaskCompletedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedRequest")).ok:
					{
						let request: shared.RespondActivityTaskCompletedRequest | $.VarRef<shared.RespondActivityTaskCompletedRequest> | null = $.typeAssert<shared.RespondActivityTaskCompletedRequest | $.VarRef<shared.RespondActivityTaskCompletedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedRequest")).value
						return [__goscript_workflow.newEncodedValue($.pointerValue<shared.RespondActivityTaskCompletedRequest>(request).Result, (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env))), null]
					}
					break
				default:
					{
						let request: any = __goscriptTypeSwitchValue
						return [null, fmt.Errorf("unsupported respond type %T", result)]
					}
					break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async executeActivityWithRetryForTest(taskHandler: __goscript_internal_public.ActivityTaskHandler | null, parameters: __goscript_internal_activity.executeActivityParams, task: shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null): globalThis.Promise<any> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		let result: any = null! as any
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		const task$: shared.PollForActivityTaskResponse = task == null ? $.pointerTarget<shared.PollForActivityTaskResponse>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<shared.PollForActivityTaskResponse>(task)
		let expireTime: time.Time = $.markAsStructValue(new time.Time())
		if ((parameters.activityOptions.RetryPolicy != null) && (shared.RetryPolicy.prototype.GetExpirationIntervalInSeconds.call(parameters.activityOptions.RetryPolicy) > 0)) {
			expireTime = $.assignStruct(expireTime, $.markAsStructValue($.cloneStructValue((await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).Now() : testWorkflowEnvironmentImpl.prototype.Now.call(env))))).Add($.int64Mul(1000000000n, $.int64(shared.RetryPolicy.prototype.GetExpirationIntervalInSeconds.call(parameters.activityOptions.RetryPolicy)))))
		}

		while (true) {
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple27: any = await (taskHandler !== null && (taskHandler as any).__isVarRef !== true && (taskHandler as any).__goValue === undefined ? (taskHandler as Exclude<__goscript_internal_public.ActivityTaskHandler, null>) : $.pointerValue<Exclude<__goscript_internal_public.ActivityTaskHandler, null>>(taskHandler)).Execute(parameters.activityOptions.TaskListName, task)
			result = __goscriptTuple27[0]
			err = __goscriptTuple27[1]
			if (err != null) {
				if ($.comparableEqual(err, context.DeadlineExceeded)) {
					return (err as any)
				}
				$.panic((err as any))
			}

			// check if a retry is needed
			{
				let __goscriptTuple28: any = $.typeAssertTuple<shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null>(result, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest"))
				let request: shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null = __goscriptTuple28[0]
				let ok = __goscriptTuple28[1]
				if (ok && (parameters.activityOptions.RetryPolicy != null)) {
					let p: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null = __goscript_convert.convertFromThriftRetryPolicy(parameters.activityOptions.RetryPolicy)
					let backoff = __goscript_internal_task_handlers.getRetryBackoffWithNowTime(p, (task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as shared.PollForActivityTaskResponse).GetAttempt() : shared.PollForActivityTaskResponse.prototype.GetAttempt.call(task)), $.pointerValue<string>($.pointerValue<shared.RespondActivityTaskFailedRequest>(request).Reason), await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).Now() : testWorkflowEnvironmentImpl.prototype.Now.call(env)), expireTime)
					if (backoff > 0n) {
						// need a retry
						let waitCh: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")

						// register the delayed call back first, otherwise other timers may be fired before the retry timer
						// is enqueued.
						await testWorkflowEnvironmentImpl.prototype.registerDelayedCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
							$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount++;
							;(task$ as shared.PollForActivityTaskResponse).Attempt = common.Int32Ptr($.int((((task !== null && (task as any).__isVarRef !== true && (task as any).__goValue === undefined ? ((task as any) as shared.PollForActivityTaskResponse).GetAttempt() : shared.PollForActivityTaskResponse.prototype.GetAttempt.call(task)) + 1) | 0), 32))
							let activityID = $.bytesToString((task$ as shared.PollForActivityTaskResponse).TaskToken)
							{
								let __goscriptTuple29: any = await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).getActivityHandle(activityID) : testWorkflowEnvironmentImpl.prototype.getActivityHandle.call(env, activityID))
								let ah: testActivityHandle | $.VarRef<testActivityHandle> | null = __goscriptTuple29[0]
								let __goscriptShadow5 = __goscriptTuple29[1]
								if (__goscriptShadow5) {
									;(task$ as shared.PollForActivityTaskResponse).HeartbeatDetails = $.pointerValue<testActivityHandle>(ah).heartbeatDetails
								}
							}
							waitCh!.close()
						}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), backoff)
						await testWorkflowEnvironmentImpl.prototype.postCallback.call(env, $.functionValue((): void => {
							$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount--
						}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), false)

						await $.chanRecv(waitCh)
						continue
					}
				}
			}

			// no retry
			break
		}

		return result
	}

	public async executeChildWorkflowWithDelay(delayStart: time.Duration, __goscriptParam0: __goscript_internal_workflow.executeWorkflowParams, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null, startedHandler: ((r: __goscript_workflow.WorkflowExecution, e: $.GoError) => void) | null): globalThis.Promise<$.GoError> {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		let params: $.VarRef<__goscript_internal_workflow.executeWorkflowParams> = $.varRef(__goscriptParam0)
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		let __goscriptTuple30: any = await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).newTestWorkflowEnvironmentForChild(params, callback, startedHandler) : testWorkflowEnvironmentImpl.prototype.newTestWorkflowEnvironmentForChild.call(env, params, callback, startedHandler))
		let childEnv: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = __goscriptTuple30[0]
		let err = __goscriptTuple30[1]
		if (err != null) {
			await zap.SugaredLogger.prototype.Infof.call(zap.Logger.prototype.Sugar.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger), "ExecuteChildWorkflow failed: %v", $.arrayToSlice<any>([(err as any)]))
			return err
		}

		await zap.SugaredLogger.prototype.Infof.call(zap.Logger.prototype.Sugar.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger), "ExecuteChildWorkflow: %v", $.arrayToSlice<any>([$.pointerValue<__goscript_workflow.WorkflowType>(params.value.workflowType).Name]))
		$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount++

		// run child workflow in separate goroutinue
		const __goscriptDeferArg0 = delayStart
		const __goscriptDeferArg1 = $.pointerValue<__goscript_workflow.WorkflowType>(params.value.workflowType).Name
		const __goscriptDeferArg2 = params.value.input
		queueMicrotask(async () => { await (childEnv !== null && (childEnv as any).__isVarRef !== true && (childEnv as any).__goValue === undefined ? ((childEnv as any) as testWorkflowEnvironmentImpl).executeWorkflowInternal(__goscriptDeferArg0, __goscriptDeferArg1, __goscriptDeferArg2) : testWorkflowEnvironmentImpl.prototype.executeWorkflowInternal.call(childEnv, __goscriptDeferArg0, __goscriptDeferArg1, __goscriptDeferArg2)) })

		return null
	}

	public async executeLocalActivity(activityFn: any, args: $.Slice<any>): globalThis.Promise<[__goscript_encoded.Value | null, $.GoError]> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		let val: __goscript_encoded.Value | null = null! as __goscript_encoded.Value | null
		let err: $.GoError = null! as $.GoError
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		let params = $.varRef(new __goscript_internal_activity.executeLocalActivityParams({localActivityOptions: (() => { const __goscriptLiteralField4 = common.Int32Ceil(time.Duration_Seconds($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).testTimeout)); return new __goscript_internal_activity.localActivityOptions({ScheduleToCloseTimeoutSeconds: __goscriptLiteralField4}, true) })(), ActivityFn: activityFn, InputArgs: args, WorkflowInfo: (env$ as testWorkflowEnvironmentImpl).workflowInfo}, true))
		let task: __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null = new __goscript_internal_event_handlers.localActivityTask({activityID: "test-local-activity", params: params, callback: $.functionValue((lar: __goscript_internal_worker_base.localActivityResultWrapper | $.VarRef<__goscript_internal_worker_base.localActivityResultWrapper> | null): void => {
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.localActivityResultWrapper")], results: [] } as $.FunctionTypeInfo))})
		let taskHandler = $.varRef((() => { const __goscriptLiteralField5 = debug.NewNoopActivityTracker(); return new __goscript_internal_task_pollers.localActivityTaskHandler({userContext: (env$ as testWorkflowEnvironmentImpl).workerOptions.BackgroundActivityContext, metricsScope: $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).metricsScope, logger: $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger, tracer: $.interfaceValue<opentracing.Tracer | null>(new opentracing.NoopTracer(undefined, true), "opentracing.NoopTracer", "opentracing.NoopTracer"), activityTracker: __goscriptLiteralField5}, true) })())

		let result: __goscript_internal_task_pollers.localActivityResult | $.VarRef<__goscript_internal_task_pollers.localActivityResult> | null = await taskHandler.value.executeLocalActivityTask(task)
		let result$: __goscript_internal_task_pollers.localActivityResult = result == null ? $.pointerTarget<__goscript_internal_task_pollers.localActivityResult>(result) : (result as any).__isVarRef === true ? (result as any).value : (result as any).__goValue === undefined ? (result as any) : $.pointerTarget<__goscript_internal_task_pollers.localActivityResult>(result)
		if ((result$ as __goscript_internal_task_pollers.localActivityResult).err != null) {
			return [null, (result$ as __goscript_internal_task_pollers.localActivityResult).err]
		}
		return [__goscript_workflow.newEncodedValue((result$ as __goscript_internal_task_pollers.localActivityResult).result, (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env))), null]
	}

	public async executeWorkflow(workflowFn: any, args: $.Slice<any>): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		let fType = reflect.TypeOf(workflowFn)
		if (await __goscript_internal_activity.getKind(fType) == 19) {
			await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).RegisterWorkflowWithOptions(workflowFn, new __goscript_workflow.RegisterWorkflowOptions({DisableAlreadyRegisteredCheck: true}, true)) : testWorkflowEnvironmentImpl.prototype.RegisterWorkflowWithOptions.call(env, workflowFn, new __goscript_workflow.RegisterWorkflowOptions({DisableAlreadyRegisteredCheck: true}, true)))
		}
		let __goscriptTuple31: any = await __goscript_internal_workflow.getValidatedWorkflowFunction(workflowFn, args, (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)), (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetRegistry() : testWorkflowEnvironmentImpl.prototype.GetRegistry.call(env)))
		let workflowType: __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null = __goscriptTuple31[0]
		let input: $.Slice<number> = __goscriptTuple31[1]
		let err = __goscriptTuple31[2]
		if (err != null) {
			$.panic((err as any))
		}
		await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).executeWorkflowInternal(0n, $.pointerValue<__goscript_workflow.WorkflowType>(workflowType).Name, input) : testWorkflowEnvironmentImpl.prototype.executeWorkflowInternal.call(env, 0n, $.pointerValue<__goscript_workflow.WorkflowType>(workflowType).Name, input))
	}

	public async executeWorkflowInternal(delayStart: time.Duration, workflowType: string, input: $.Slice<number>): globalThis.Promise<void> {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		await $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).locker.Lock()
		if (!$.stringEqual($.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).WorkflowType.Name, "workflow-type-not-specified")) {
			// Current TestWorkflowEnvironment only support to run one workflow.
			// Created task to support testing multiple workflows with one env instance
			// https://github.com/uber-go/cadence-client/issues/616
			$.panic(await fmt.Sprintf("Current TestWorkflowEnvironment is used to execute %v. Please create a new TestWorkflowEnvironment for %v.", $.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).WorkflowType.Name, workflowType))
		}
		$.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).WorkflowType.Name = workflowType
		$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).locker.Unlock()

		let [__goscriptShadow6, err] = await testWorkflowEnvironmentImpl.prototype.getWorkflowDefinition.call(env, ($.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).WorkflowType).clone())
		if (err != null) {
			$.panic((err as any))
		}
		;(env$ as testWorkflowEnvironmentImpl).workflowDef = __goscriptShadow6;
		// Store the Workflow input for potential Cron
		;(env$ as testWorkflowEnvironmentImpl).workflowInput = input

		// env.workflowDef.Execute() method will execute dispatcher. We want the dispatcher to only run in main loop.
		// In case of child workflow, this executeWorkflowInternal() is run in separate goroutinue, so use postCallback
		// to make sure workflowDef.Execute() is run in main loop.
		await testWorkflowEnvironmentImpl.prototype.postCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowDefinition, null>>((env$ as testWorkflowEnvironmentImpl).workflowDef).Execute($.interfaceValue<__goscript_internal_worker_base.workflowEnvironment | null>(env, "*internal.testWorkflowEnvironmentImpl", /* @__PURE__ */ $.pointerType("internal.testWorkflowEnvironmentImpl")), $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).header, input), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			// kick off first decision task to start the workflow
			if (delayStart == 0n) {
				await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).startDecisionTask() : testWorkflowEnvironmentImpl.prototype.startDecisionTask.call(env))
			} else {
				// we need to delayStart start workflow, decrease runningCount so mockClock could auto forward
				$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount--
				await testWorkflowEnvironmentImpl.prototype.registerDelayedCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
					$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount++
					await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).startDecisionTask() : testWorkflowEnvironmentImpl.prototype.startDecisionTask.call(env))
				}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), delayStart)
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), false)

		if ((env$ as testWorkflowEnvironmentImpl).executionTimeout > 0n) {
			let timeoutDuration = $.int64Add((env$ as testWorkflowEnvironmentImpl).executionTimeout, delayStart)
			await testWorkflowEnvironmentImpl.prototype.registerDelayedCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
				if (!(env$ as testWorkflowEnvironmentImpl).isTestCompleted) {
					await testWorkflowEnvironmentImpl.prototype.Complete.call(env, null, $.interfaceValue<$.GoError>(__goscript_context.__goscript_get_ErrDeadlineExceeded(), "*internal.TimeoutError", /* @__PURE__ */ $.pointerType("internal.TimeoutError")))
				}
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), timeoutDuration)
		}
		await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).startMainLoop() : testWorkflowEnvironmentImpl.prototype.startMainLoop.call(env))
	}

	public async getActivityHandle(activityID: string): globalThis.Promise<[testActivityHandle | $.VarRef<testActivityHandle> | null, boolean]> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		let __goscriptTuple32: any = $.mapGet<string, testActivityHandle | $.VarRef<testActivityHandle> | null, testActivityHandle | $.VarRef<testActivityHandle> | null>($.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>(env).testWorkflowEnvironmentShared).activities, await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).makeUniqueID(activityID) : testWorkflowEnvironmentImpl.prototype.makeUniqueID.call(env, activityID)), null)
		let handle: testActivityHandle | $.VarRef<testActivityHandle> | null = __goscriptTuple32[0]
		let ok = __goscriptTuple32[1]
		return [handle, ok]
	}

	public getActivityInfo(activityID: string, activityType: string): __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		return new __goscript_activity.ActivityInfo({ActivityID: activityID, ActivityType: new __goscript_activity.ActivityType({Name: activityType}, true), TaskToken: $.stringToBytes(activityID), WorkflowExecution: $.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<testWorkflowEnvironmentImpl>(env).workflowInfo).WorkflowExecution})
	}

	public async getMockRunFn(callWrapper: __goscript_workflow_testsuite.MockCallWrapper | $.VarRef<__goscript_workflow_testsuite.MockCallWrapper> | null): globalThis.Promise<((args: mock2.Arguments) => void) | null> {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		using __defer = new $.DisposableStack()
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		await $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).locker.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).locker), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		$.mapSet($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).expectedMockCalls, $.pointerValue<mock2.Call>($.pointerValue<__goscript_workflow_testsuite.MockCallWrapper>(callWrapper).call).Method, {})
		return $.functionValue(async (args: mock2.Arguments): globalThis.Promise<void> => {
			await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).runBeforeMockCallReturns(callWrapper, (args as mock2.Arguments)) : testWorkflowEnvironmentImpl.prototype.runBeforeMockCallReturns.call(env, callWrapper, (args as mock2.Arguments)))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], results: [] } as $.FunctionTypeInfo))
	}

	public async getMockedVersion(mockedChangeID: string, changeID: string, minSupported: __goscript_workflow.Version, maxSupported: __goscript_workflow.Version): globalThis.Promise<[__goscript_workflow.Version, boolean]> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		let mockMethod = await getMockMethodForGetVersion(mockedChangeID)
		{
			let [, ok] = $.mapGet<string, {}, {}>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).expectedMockCalls, mockMethod, {})
			if (!ok) {
				// mock not found
				return [-1, false]
			}
		}

		let args: $.Slice<any> = $.arrayToSlice<any>([changeID, $.namedValueInterfaceValue<any>(minSupported, "internal.Version", {}, /* @__PURE__ */ $.basicType("int", "internal.Version")), $.namedValueInterfaceValue<any>(maxSupported, "internal.Version", {}, /* @__PURE__ */ $.basicType("int", "internal.Version"))])
		// below call will panic if mock is not properly setup.
		let mockRet: mock2.Arguments = (await mock2.Mock.prototype.MethodCalled.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).mock, mockMethod, args) as mock2.Arguments)
		let m: mockWrapper | $.VarRef<mockWrapper> | null = new mockWrapper({name: "workflow.GetVersion", fn: $.interfaceValue($.goFunc(mockFnGetVersion, "go.uber.org/cadence/internal.mockFnGetVersion"), "func(changeID string, minSupported internal.Version, maxSupported internal.Version) internal.Version", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int", "internal.Version"), /* @__PURE__ */ $.basicType("int", "internal.Version")], results: [/* @__PURE__ */ $.basicType("int", "internal.Version")] } as $.FunctionTypeInfo))})
		{
			let mockFn = await (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? ((m as any) as mockWrapper).getMockFn((mockRet as mock2.Arguments)) : mockWrapper.prototype.getMockFn.call(m, (mockRet as mock2.Arguments)))
			if (mockFn != null) {
				let executor: __goscript_internal_worker.activityExecutor | $.VarRef<__goscript_internal_worker.activityExecutor> | null = new __goscript_internal_worker.activityExecutor({name: "workflow.GetVersion", fn: mockFn})
				let reflectValues: $.Slice<reflect.Value> = await (executor !== null && (executor as any).__isVarRef !== true && (executor as any).__goValue === undefined ? ((executor as any) as __goscript_internal_worker.activityExecutor).executeWithActualArgsWithoutParseResult(null, args) : __goscript_internal_worker.activityExecutor.prototype.executeWithActualArgsWithoutParseResult.call(executor, null, args))
				if (($.sliceLen(reflectValues) != 1) || !(__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.markAsStructValue($.cloneStructValue($.arrayIndex(reflectValues!, 0))).Interface())).AssignableTo($.pointerValueOrNil(reflect.TypeOf($.namedValueInterfaceValue<any>(-1, "internal.Version", {}, /* @__PURE__ */ $.basicType("int", "internal.Version"))))!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
					$.panic(await fmt.Sprintf("mock of GetVersion has incorrect return type, expected workflow.Version, but actual is %T (%v)", $.markAsStructValue($.cloneStructValue($.arrayIndex(reflectValues!, 0))).Interface(), $.markAsStructValue($.cloneStructValue($.arrayIndex(reflectValues!, 0))).Interface()))
				}
				return [$.mustTypeAssert<__goscript_workflow.Version>($.markAsStructValue($.cloneStructValue($.arrayIndex(reflectValues!, 0))).Interface(), /* @__PURE__ */ $.basicType("int", "internal.Version")), true]
			}
		}

		if (($.sliceLen((mockRet as mock2.Arguments)) != 1) || !(__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.arrayIndex(mockRet!, 0))).AssignableTo($.pointerValueOrNil(reflect.TypeOf($.namedValueInterfaceValue<any>(-1, "internal.Version", {}, /* @__PURE__ */ $.basicType("int", "internal.Version"))))!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			$.panic(await fmt.Sprintf("mock of GetVersion has incorrect return type, expected workflow.Version, but actual is %T (%v)", $.arrayIndex(mockRet!, 0), $.arrayIndex(mockRet!, 0)))
		}
		return [$.mustTypeAssert<__goscript_workflow.Version>($.arrayIndex(mockRet!, 0), /* @__PURE__ */ $.basicType("int", "internal.Version")), true]
	}

	public async getWorkflowDefinition(wt: __goscript_workflow.WorkflowType): globalThis.Promise<[__goscript_internal_worker_base.workflowDefinition | null, $.GoError]> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		let [wf, ok] = await __goscript_registry.registry.prototype.getWorkflowFn.call((env$ as testWorkflowEnvironmentImpl).registry, wt.Name)
		if (!ok) {
			let supported = strings.Join(await __goscript_registry.registry.prototype.GetRegisteredWorkflowTypes.call((env$ as testWorkflowEnvironmentImpl).registry), ", ")
			return [null, fmt.Errorf("unable to find workflow type: %v. Supported types: [%v]", wt.Name, supported)]
		}
		let wd: workflowExecutorWrapper | $.VarRef<workflowExecutorWrapper> | null = new workflowExecutorWrapper({workflowExecutor: new __goscript_internal_worker.workflowExecutor({workflowType: wt.Name, fn: wf}), env: env})
		return [$.interfaceValue<__goscript_internal_worker_base.workflowDefinition | null>(__goscript_internal_workflow.newSyncWorkflowDefinition($.interfaceValue<__goscript_internal_workflow.workflow | null>(wd, "*internal.workflowExecutorWrapper", /* @__PURE__ */ $.pointerType("internal.workflowExecutorWrapper"))), "*internal.syncWorkflowDefinition", /* @__PURE__ */ $.pointerType("internal.syncWorkflowDefinition")), null]
	}

	public async handleActivityResult(activityID: string, result: any, activityType: string, dataConverter: __goscript_encoded.DataConverter | null): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		await zap.Logger.prototype.Debug.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger, await fmt.Sprintf("handleActivityResult: %T.", result), $.arrayToSlice<zap.Field>([zap.String("ActivityID", activityID), zap.String("ActivityType", activityType)]))
		let __goscriptShadow7: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).getActivityInfo(activityID, activityType) : testWorkflowEnvironmentImpl.prototype.getActivityInfo.call(env, activityID, activityType))
		if ($.comparableEqual(result, __goscript_error.ErrActivityResultPending)) {
			// In case activity returns ErrActivityResultPending, the respond will be nil, and we don't need to do anything.
			// Activity will need to complete asynchronously using CompleteActivity().
			if ($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onActivityCompletedListener != null) {
				void (__goscriptAwait = $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onActivityCompletedListener!(__goscriptShadow7, null, __goscript_error.ErrActivityResultPending), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return
		}

		// this is running in dispatcher
		let __goscriptTuple33: any = await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).getActivityHandle(activityID) : testWorkflowEnvironmentImpl.prototype.getActivityHandle.call(env, activityID))
		let activityHandle: testActivityHandle | $.VarRef<testActivityHandle> | null = __goscriptTuple33[0]
		let ok = __goscriptTuple33[1]
		let activityHandle$: testActivityHandle = activityHandle == null ? $.pointerTarget<testActivityHandle>(activityHandle) : (activityHandle as any).__isVarRef === true ? (activityHandle as any).value : (activityHandle as any).__goValue === undefined ? (activityHandle as any) : $.pointerTarget<testActivityHandle>(activityHandle)
		if (!ok) {
			await zap.Logger.prototype.Debug.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger, "handleActivityResult: ActivityID not exists, could be already completed or cancelled.", $.arrayToSlice<zap.Field>([zap.String("ActivityID", activityID)]))
			return
		}

		$.deleteMapEntry($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).activities, activityID)

		let blob: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError

		{
			const __goscriptTypeSwitchValue = result
			switch (true) {
				case $.typeAssert<shared.RespondActivityTaskCanceledRequest | $.VarRef<shared.RespondActivityTaskCanceledRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledRequest")).ok:
					{
						let request: shared.RespondActivityTaskCanceledRequest | $.VarRef<shared.RespondActivityTaskCanceledRequest> | null = $.typeAssert<shared.RespondActivityTaskCanceledRequest | $.VarRef<shared.RespondActivityTaskCanceledRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCanceledRequest")).value
						let details = __goscript_workflow_testsuite.newEncodedValues($.pointerValue<shared.RespondActivityTaskCanceledRequest>(request).Details, dataConverter)
						err = $.interfaceValue<$.GoError>(__goscript_error.NewCanceledError($.arrayToSlice<any>([(details as any)])), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError"))
						void (__goscriptAwait = (activityHandle$ as testActivityHandle).callback!(null, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
				case $.typeAssert<shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest")).ok:
					{
						let request: shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null = $.typeAssert<shared.RespondActivityTaskFailedRequest | $.VarRef<shared.RespondActivityTaskFailedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskFailedRequest")).value
						err = await __goscript_internal_utils.constructError($.pointerValue<string>($.pointerValue<shared.RespondActivityTaskFailedRequest>(request).Reason), $.pointerValue<shared.RespondActivityTaskFailedRequest>(request).Details, dataConverter)
						void (__goscriptAwait = (activityHandle$ as testActivityHandle).callback!(null, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
				case $.typeAssert<shared.RespondActivityTaskCompletedRequest | $.VarRef<shared.RespondActivityTaskCompletedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedRequest")).ok:
					{
						let request: shared.RespondActivityTaskCompletedRequest | $.VarRef<shared.RespondActivityTaskCompletedRequest> | null = $.typeAssert<shared.RespondActivityTaskCompletedRequest | $.VarRef<shared.RespondActivityTaskCompletedRequest> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("shared.RespondActivityTaskCompletedRequest")).value
						blob = $.pointerValue<shared.RespondActivityTaskCompletedRequest>(request).Result
						void (__goscriptAwait = (activityHandle$ as testActivityHandle).callback!(blob, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
				default:
					{
						let request: any = __goscriptTypeSwitchValue
						if ($.comparableEqual(result, context.DeadlineExceeded)) {
							err = $.interfaceValue<$.GoError>(__goscript_error.NewTimeoutError(0, $.arrayToSlice<any>([(__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>(context.DeadlineExceeded).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)])), "*internal.TimeoutError", /* @__PURE__ */ $.pointerType("internal.TimeoutError"))
							void (__goscriptAwait = (activityHandle$ as testActivityHandle).callback!(null, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						} else {
							$.panic(await fmt.Sprintf("unsupported respond type %T", result))
						}
					}
					break
			}
		}

		if ($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onActivityCompletedListener != null) {
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onActivityCompletedListener!(__goscriptShadow7, null, err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				void (__goscriptAwait = $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onActivityCompletedListener!(__goscriptShadow7, __goscript_workflow.newEncodedValue(blob, dataConverter), null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).startDecisionTask() : testWorkflowEnvironmentImpl.prototype.startDecisionTask.call(env))
	}

	public async handleLocalActivityResult(result: __goscript_internal_task_pollers.localActivityResult | $.VarRef<__goscript_internal_task_pollers.localActivityResult> | null): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		const result$: __goscript_internal_task_pollers.localActivityResult = result == null ? $.pointerTarget<__goscript_internal_task_pollers.localActivityResult>(result) : (result as any).__isVarRef === true ? (result as any).value : (result as any).__goValue === undefined ? (result as any) : $.pointerTarget<__goscript_internal_task_pollers.localActivityResult>(result)
		let activityID = $.pointerValue<__goscript_internal_event_handlers.localActivityTask>((result$ as __goscript_internal_task_pollers.localActivityResult).task).activityID
		let activityType = await __goscript_internal_worker.getActivityFunctionName((env$ as testWorkflowEnvironmentImpl).registry, $.pointerValue<__goscript_internal_activity.executeLocalActivityParams>($.pointerValue<__goscript_internal_event_handlers.localActivityTask>((result$ as __goscript_internal_task_pollers.localActivityResult).task).params).ActivityFn)
		await zap.Logger.prototype.Debug.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger, await fmt.Sprintf("handleLocalActivityResult: Err: %v, Result: %v.", ((result$ as __goscript_internal_task_pollers.localActivityResult).err as any), $.bytesToString((result$ as __goscript_internal_task_pollers.localActivityResult).result)), $.arrayToSlice<zap.Field>([zap.String("ActivityID", activityID), zap.String("ActivityType", activityType)]))

		let __goscriptShadow8: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).getActivityInfo(activityID, activityType) : testWorkflowEnvironmentImpl.prototype.getActivityInfo.call(env, activityID, activityType))
		let __goscriptTuple34: any = $.mapGet<string, __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null, __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).localActivities, activityID, null)
		let task: __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null = __goscriptTuple34[0]
		let ok = __goscriptTuple34[1]
		let task$: __goscript_internal_event_handlers.localActivityTask = task == null ? $.pointerTarget<__goscript_internal_event_handlers.localActivityTask>(task) : (task as any).__isVarRef === true ? (task as any).value : (task as any).__goValue === undefined ? (task as any) : $.pointerTarget<__goscript_internal_event_handlers.localActivityTask>(task)
		if (!ok) {
			await zap.Logger.prototype.Debug.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger, "handleLocalActivityResult: ActivityID not exists, could be already completed or cancelled.", $.arrayToSlice<zap.Field>([zap.String("ActivityID", activityID)]))
			return
		}

		$.deleteMapEntry($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).localActivities, activityID)
		let encodedErr: $.GoError = null! as $.GoError
		if ((result$ as __goscript_internal_task_pollers.localActivityResult).err != null) {
			let __goscriptTuple35: any = await __goscript_internal_utils.getErrorDetails((result$ as __goscript_internal_task_pollers.localActivityResult).err, (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)))
			let errReason = __goscriptTuple35[0]
			let errDetails: $.Slice<number> = __goscriptTuple35[1]
			encodedErr = await __goscript_internal_utils.constructError(errReason, errDetails, (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)))
		}
		let lar: __goscript_internal_worker_base.localActivityResultWrapper | $.VarRef<__goscript_internal_worker_base.localActivityResultWrapper> | null = new __goscript_internal_worker_base.localActivityResultWrapper({err: encodedErr, result: (result$ as __goscript_internal_task_pollers.localActivityResult).result, backoff: -1n})
		let lar$: __goscript_internal_worker_base.localActivityResultWrapper = lar == null ? $.pointerTarget<__goscript_internal_worker_base.localActivityResultWrapper>(lar) : (lar as any).__isVarRef === true ? (lar as any).value : (lar as any).__goValue === undefined ? (lar as any) : $.pointerTarget<__goscript_internal_worker_base.localActivityResultWrapper>(lar)
		if (($.pointerValue<__goscript_internal_event_handlers.localActivityTask>((result$ as __goscript_internal_task_pollers.localActivityResult).task).retryPolicy != null) && ((result$ as __goscript_internal_task_pollers.localActivityResult).err != null)) {
			;(lar$ as __goscript_internal_worker_base.localActivityResultWrapper).backoff = await __goscript_internal_task_handlers.getRetryBackoff(result, await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).Now() : testWorkflowEnvironmentImpl.prototype.Now.call(env)));
			;(lar$ as __goscript_internal_worker_base.localActivityResultWrapper).attempt = (task$ as __goscript_internal_event_handlers.localActivityTask).attempt
		}
		void (__goscriptAwait = (task$ as __goscript_internal_event_handlers.localActivityTask).callback!(lar), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onLocalActivityCompletedListener != null) {
			if ((result$ as __goscript_internal_task_pollers.localActivityResult).err != null) {
				void (__goscriptAwait = $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onLocalActivityCompletedListener!(__goscriptShadow8, null, (result$ as __goscript_internal_task_pollers.localActivityResult).err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				void (__goscriptAwait = $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onLocalActivityCompletedListener!(__goscriptShadow8, __goscript_workflow.newEncodedValue((result$ as __goscript_internal_task_pollers.localActivityResult).result, (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env))), null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).startDecisionTask() : testWorkflowEnvironmentImpl.prototype.startDecisionTask.call(env))
	}

	public isChildWorkflow(): boolean {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		return $.pointerValue<testWorkflowEnvironmentImpl>(env).parentEnv != null
	}

	public async makeUniqueID(id: string): globalThis.Promise<string> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		// ActivityID is unique per workflow, but different workflow could have same activityID.
		// Make the key unique globally as we share the same collection for all running workflows in test.
		return fmt.Sprintf("%v_%v", $.pointerValue<__goscript_workflow.WorkflowInfo>((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).WorkflowInfo() : testWorkflowEnvironmentImpl.prototype.WorkflowInfo.call(env))).WorkflowExecution.RunID, id)
	}

	public async newTestActivityTaskHandler(taskList: string, dataConverter: __goscript_encoded.DataConverter | null): globalThis.Promise<__goscript_internal_public.ActivityTaskHandler | null> {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		let wOptions = __goscript_internal_worker.AugmentWorkerOptions(((env$ as testWorkflowEnvironmentImpl).workerOptions).clone())
		wOptions.DataConverter = dataConverter
		let params = $.varRef(new __goscript_internal_worker.workerExecutionParameters({WorkerOptions: wOptions, TaskList: (() => { const __goscriptLiteralField6 = common.StringPtr(taskList); const __goscriptLiteralField7 = shared.TaskListKind_Ptr(shared.TaskListKindNormal); return new shared.TaskList({Name: __goscriptLiteralField6, Kind: __goscriptLiteralField7}) })(), UserContext: wOptions.BackgroundActivityContext, WorkerStopChannel: (env$ as testWorkflowEnvironmentImpl).workerStopChannel}, true))
		await __goscript_internal_worker.ensureRequiredParams(params)
		if (params.value.UserContext == null) {
			params.value.UserContext = context.Background()
		}
		if ((env$ as testWorkflowEnvironmentImpl).sessionEnvironment == null) {
			;(env$ as testWorkflowEnvironmentImpl).sessionEnvironment = newTestSessionEnvironment(env, params, wOptions.MaxConcurrentSessionExecutionSize)
		}
		params.value.UserContext = context.WithValue($.pointerValueOrNil(params.value.UserContext)!, $.namedValueInterfaceValue<any>("sessionEnvironment", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey")), $.interfaceValue((env$ as testWorkflowEnvironmentImpl).sessionEnvironment, "*internal.testSessionEnvironmentImpl", /* @__PURE__ */ $.pointerType("internal.testSessionEnvironmentImpl")))
		let __goscriptShadow9: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null = (env$ as testWorkflowEnvironmentImpl).registry
		if ($.sliceLen(await (__goscriptShadow9 !== null && (__goscriptShadow9 as any).__isVarRef !== true && (__goscriptShadow9 as any).__goValue === undefined ? ((__goscriptShadow9 as any) as __goscript_registry.registry).getRegisteredActivities() : __goscript_registry.registry.prototype.getRegisteredActivities.call(__goscriptShadow9))) == 0) {
			$.panic(await fmt.Sprintf("no activity is registered for tasklist '%v'", taskList))
		}

		let getActivity: ((name: string) => __goscript_internal_activity.activity | null | globalThis.Promise<__goscript_internal_activity.activity | null>) | null = $.functionValue(async (name: string): globalThis.Promise<__goscript_internal_activity.activity | null> => {
			let __goscriptTuple36: any = $.mapGet<string, taskListSpecificActivity | $.VarRef<taskListSpecificActivity> | null, taskListSpecificActivity | $.VarRef<taskListSpecificActivity> | null>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).taskListSpecificActivities, name, null)
			let tlsa: taskListSpecificActivity | $.VarRef<taskListSpecificActivity> | null = __goscriptTuple36[0]
			let ok = __goscriptTuple36[1]
			if (ok) {
				let [, __goscriptShadow10] = $.mapGet<string, {}, {}>($.pointerValue<taskListSpecificActivity>(tlsa).taskLists, taskList, {})
				if (!__goscriptShadow10) {
					// activity are bind to specific task list but not to current task list
					return null
				}
			}

			let __goscriptTuple37: any = await (__goscriptShadow9 !== null && (__goscriptShadow9 as any).__isVarRef !== true && (__goscriptShadow9 as any).__goValue === undefined ? ((__goscriptShadow9 as any) as __goscript_registry.registry).GetActivity(name) : __goscript_registry.registry.prototype.GetActivity.call(__goscriptShadow9, name))
			let __goscriptShadow11 = __goscriptTuple37[0]
			ok = __goscriptTuple37[1]
			if (!ok) {
				return null
			}
			let ae: __goscript_internal_worker.activityExecutor | $.VarRef<__goscript_internal_worker.activityExecutor> | null = (await (async () => { const __goscriptLiteralField8 = (__goscriptAwait = (__goscriptShadow11 !== null && (__goscriptShadow11 as any).__isVarRef !== true && (__goscriptShadow11 as any).__goValue === undefined ? (__goscriptShadow11 as Exclude<__goscript_internal_activity.activity, null>) : $.pointerValue<Exclude<__goscript_internal_activity.activity, null>>(__goscriptShadow11)).GetFunction(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_internal_worker.activityExecutor({name: ((__goscriptAwait = (__goscriptShadow11 !== null && (__goscriptShadow11 as any).__isVarRef !== true && (__goscriptShadow11 as any).__goValue === undefined ? (__goscriptShadow11 as Exclude<__goscript_internal_activity.activity, null>) : $.pointerValue<Exclude<__goscript_internal_activity.activity, null>>(__goscriptShadow11)).ActivityType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_activity.ActivityType).Name, fn: __goscriptLiteralField8}) })())
			let ae$: __goscript_internal_worker.activityExecutor = ae == null ? $.pointerTarget<__goscript_internal_worker.activityExecutor>(ae) : (ae as any).__isVarRef === true ? (ae as any).value : (ae as any).__goValue === undefined ? (ae as any) : $.pointerTarget<__goscript_internal_worker.activityExecutor>(ae)

			// Special handling for session creation and completion activities.
			// If real creation activity is used, it will block timers from autofiring.
			if ($.stringEqual((ae$ as __goscript_internal_worker.activityExecutor).name, "internalSessionCreationActivity")) {
				;(ae$ as __goscript_internal_worker.activityExecutor).fn = $.interfaceValue($.goFunc(__goscript_session.sessionCreationActivityForTest, "go.uber.org/cadence/internal.sessionCreationActivityForTest"), "func(ctx context.Context, sessionID string) error", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo))
			}
			if ($.stringEqual((ae$ as __goscript_internal_worker.activityExecutor).name, "internalSessionCompletionActivity")) {
				;(ae$ as __goscript_internal_worker.activityExecutor).fn = $.interfaceValue($.goFunc(__goscript_session.sessionCompletionActivityForTest, "go.uber.org/cadence/internal.sessionCompletionActivityForTest"), "func(ctx context.Context, sessionID string) error", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo))
			}

			return $.interfaceValue<__goscript_internal_activity.activity | null>(new activityExecutorWrapper({activityExecutor: ae, env: env}), "*internal.activityExecutorWrapper", /* @__PURE__ */ $.pointerType("internal.activityExecutorWrapper"))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: ["internal.activity"] } as $.FunctionTypeInfo))

		let taskHandler = await __goscript_activity_task_handler.newActivityTaskHandlerWithCustomProvider($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).service, (params.value).clone(), __goscriptShadow9, getActivity, clockwork.NewRealClock())
		return taskHandler
	}

	public async newTestWorkflowEnvironmentForChild(params: __goscript_internal_workflow.executeWorkflowParams | $.VarRef<__goscript_internal_workflow.executeWorkflowParams> | null, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null, startedHandler: ((r: __goscript_workflow.WorkflowExecution, e: $.GoError) => void) | null): globalThis.Promise<[testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null, $.GoError]> {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		const params$: __goscript_internal_workflow.executeWorkflowParams = params == null ? $.pointerTarget<__goscript_internal_workflow.executeWorkflowParams>(params) : (params as any).__isVarRef === true ? (params as any).value : (params as any).__goValue === undefined ? (params as any) : $.pointerTarget<__goscript_internal_workflow.executeWorkflowParams>(params)
		// create a new test env
		let childEnv: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = await newTestWorkflowEnvironmentImpl($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).testSuite, (env$ as testWorkflowEnvironmentImpl).registry)
		let childEnv$: testWorkflowEnvironmentImpl = childEnv == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(childEnv) : (childEnv as any).__isVarRef === true ? (childEnv as any).value : (childEnv as any).__goValue === undefined ? (childEnv as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(childEnv);
		;(childEnv$ as testWorkflowEnvironmentImpl).parentEnv = env;
		;(childEnv$ as testWorkflowEnvironmentImpl).startedHandler = startedHandler;
		;(childEnv$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared = (env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared
		$.assignStruct((childEnv$ as testWorkflowEnvironmentImpl).workerOptions, (env$ as testWorkflowEnvironmentImpl).workerOptions);
		;(childEnv$ as testWorkflowEnvironmentImpl).workerOptions.DataConverter = (params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.dataConverter;
		;(childEnv$ as testWorkflowEnvironmentImpl).workflowInterceptors = (env$ as testWorkflowEnvironmentImpl).workflowInterceptors;
		;(childEnv$ as testWorkflowEnvironmentImpl).registry = (env$ as testWorkflowEnvironmentImpl).registry

		if ($.stringEqual((params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.workflowID, "")) {
			;(params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.workflowID = $.concatString(($.concatString($.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).WorkflowExecution.RunID, "_")), await getStringID((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).nextID() : testWorkflowEnvironmentImpl.prototype.nextID.call(env))))
		}
		let cronSchedule: $.VarRef<string> | null = null! as $.VarRef<string> | null
		if ($.stringLen((params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.cronSchedule) > 0) {
			cronSchedule = $.fieldRef((params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions._fields, "cronSchedule")
		}
		// set workflow info data for child workflow
		$.pointerValue<testWorkflowEnvironmentShared>((childEnv$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).header = (params$ as __goscript_internal_workflow.executeWorkflowParams).header
		$.pointerValue<__goscript_workflow.WorkflowInfo>((childEnv$ as testWorkflowEnvironmentImpl).workflowInfo).Attempt = (params$ as __goscript_internal_workflow.executeWorkflowParams).attempt
		$.pointerValue<__goscript_workflow.WorkflowInfo>((childEnv$ as testWorkflowEnvironmentImpl).workflowInfo).WorkflowExecution.ID = (params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.workflowID
		$.pointerValue<__goscript_workflow.WorkflowInfo>((childEnv$ as testWorkflowEnvironmentImpl).workflowInfo).WorkflowExecution.RunID = $.concatString((params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.workflowID, "_RunID")
		$.pointerValue<__goscript_workflow.WorkflowInfo>((childEnv$ as testWorkflowEnvironmentImpl).workflowInfo).Domain = $.pointerValue<string>((params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.domain)
		$.pointerValue<__goscript_workflow.WorkflowInfo>((childEnv$ as testWorkflowEnvironmentImpl).workflowInfo).TaskListName = $.pointerValue<string>((params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.taskListName)
		$.pointerValue<__goscript_workflow.WorkflowInfo>((childEnv$ as testWorkflowEnvironmentImpl).workflowInfo).ExecutionStartToCloseTimeoutSeconds = $.pointerValue<number>((params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.executionStartToCloseTimeoutSeconds)
		$.pointerValue<__goscript_workflow.WorkflowInfo>((childEnv$ as testWorkflowEnvironmentImpl).workflowInfo).TaskStartToCloseTimeoutSeconds = $.pointerValue<number>((params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.taskStartToCloseTimeoutSeconds)
		$.pointerValue<__goscript_workflow.WorkflowInfo>((childEnv$ as testWorkflowEnvironmentImpl).workflowInfo).lastCompletionResult = (params$ as __goscript_internal_workflow.executeWorkflowParams).lastCompletionResult
		$.pointerValue<__goscript_workflow.WorkflowInfo>((childEnv$ as testWorkflowEnvironmentImpl).workflowInfo).CronSchedule = cronSchedule
		$.pointerValue<__goscript_workflow.WorkflowInfo>((childEnv$ as testWorkflowEnvironmentImpl).workflowInfo).ParentWorkflowDomain = $.fieldRef($.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo)._fields, "Domain")
		$.pointerValue<__goscript_workflow.WorkflowInfo>((childEnv$ as testWorkflowEnvironmentImpl).workflowInfo).ParentWorkflowExecution = $.fieldRef($.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo)._fields, "WorkflowExecution");
		;(childEnv$ as testWorkflowEnvironmentImpl).executionTimeout = $.int64Mul($.int64($.pointerValue<number>((params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.executionStartToCloseTimeoutSeconds)), 1000000000n);
		;(childEnv$ as testWorkflowEnvironmentImpl).cronOverlapPolicy = (params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.cronOverlapPolicy
		{
			let __goscriptTuple38: any = $.mapGet<string, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningWorkflows, (params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.workflowID, null)
			let workflowHandler: testWorkflowHandle | $.VarRef<testWorkflowHandle> | null = __goscriptTuple38[0]
			let ok = __goscriptTuple38[1]
			if (ok) {
				// duplicate workflow ID
				if (!$.pointerValue<testWorkflowHandle>(workflowHandler).handled) {
					return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField9 = common.StringPtr("Workflow execution already started"); return new shared.WorkflowExecutionAlreadyStartedError({Message: __goscriptLiteralField9}) })(), "*shared.WorkflowExecutionAlreadyStartedError", /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyStartedError"))]
				}
				if ((params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.workflowIDReusePolicy == 2) {
					return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField10 = common.StringPtr("Workflow execution already started"); return new shared.WorkflowExecutionAlreadyStartedError({Message: __goscriptLiteralField10}) })(), "*shared.WorkflowExecutionAlreadyStartedError", /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyStartedError"))]
				}
				if (($.pointerValue<testWorkflowHandle>(workflowHandler).err == null) && ((params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.workflowIDReusePolicy == 0)) {
					return [null, $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField11 = common.StringPtr("Workflow execution already started"); return new shared.WorkflowExecutionAlreadyStartedError({Message: __goscriptLiteralField11}) })(), "*shared.WorkflowExecutionAlreadyStartedError", /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyStartedError"))]
				}
			}
		}

		$.mapSet($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningWorkflows, (params$ as __goscript_internal_workflow.executeWorkflowParams).workflowOptions.workflowID, new testWorkflowHandle({env: childEnv, callback: callback, params: params}))

		return [childEnv, null]
	}

	public async newTimer(d: time.Duration, callback: ((result: $.Slice<number>, err: $.GoError) => void) | null, notifyListener: boolean): globalThis.Promise<__goscript_internal_time.timerInfo | $.VarRef<__goscript_internal_time.timerInfo> | null> {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		let nextID = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).nextID() : testWorkflowEnvironmentImpl.prototype.nextID.call(env))
		let __goscriptShadow12: __goscript_internal_time.timerInfo | $.VarRef<__goscript_internal_time.timerInfo> | null = (await (async () => { const __goscriptLiteralField12 = await getStringID(nextID); return new __goscript_internal_time.timerInfo({timerID: __goscriptLiteralField12}) })())
		let timer: clock.Timer | $.VarRef<clock.Timer> | null = await clock.Mock.prototype.AfterFunc.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).mockClock, d, $.functionValue(async (): globalThis.Promise<void> => {
			$.deleteMapEntry($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).timers, $.pointerValue<__goscript_internal_time.timerInfo>(__goscriptShadow12).timerID)
			await testWorkflowEnvironmentImpl.prototype.postCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
				void (__goscriptAwait = callback!(null, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (notifyListener && ($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onTimerFiredListener != null)) {
					void (__goscriptAwait = $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onTimerFiredListener!($.pointerValue<__goscript_internal_time.timerInfo>(__goscriptShadow12).timerID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), true)
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		$.mapSet($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).timers, $.pointerValue<__goscript_internal_time.timerInfo>(__goscriptShadow12).timerID, (await (async () => { const __goscriptLiteralField13 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue((await clock.Mock.prototype.Now.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).mockClock)))).Add(d))); const __goscriptLiteralField14 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<clock.Clock, null>>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).wallClock).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Add(d))); return new testTimerHandle({env: env, callback: callback, timer: timer, mockTimeToFire: __goscriptLiteralField13, wallTimeToFire: __goscriptLiteralField14, duration: d, timerID: nextID}) })()))
		if (notifyListener && ($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onTimerScheduledListener != null)) {
			void (__goscriptAwait = $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onTimerScheduledListener!($.pointerValue<__goscript_internal_time.timerInfo>(__goscriptShadow12).timerID, d), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return __goscriptShadow12
	}

	public nextID(): number {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		let activityID = $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).counterID
		$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).counterID++
		return activityID
	}

	public async postCallback(cb: (() => void) | null, startDecisionTask: boolean): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		await $.chanSend($.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>(env).testWorkflowEnvironmentShared).callbackChannel, new testCallbackHandle({callback: cb, startDecisionTask: startDecisionTask, env: env}, true))
	}

	public async queryWorkflow(queryType: string, args: $.Slice<any>): globalThis.Promise<[__goscript_encoded.Value | null, $.GoError]> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		let __goscriptTuple39: any = await __goscript_internal_worker.encodeArgs((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)), args)
		let data: $.Slice<number> = __goscriptTuple39[0]
		let err = __goscriptTuple39[1]
		if (err != null) {
			return [null, err]
		}
		let __goscriptTuple40: any = await $.pointerValue<testWorkflowEnvironmentImpl>(env).queryHandler!(queryType, data)
		let blob: $.Slice<number> = __goscriptTuple40[0]
		err = __goscriptTuple40[1]
		if (err != null) {
			return [null, err]
		}
		return [__goscript_workflow.newEncodedValue(blob, (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env))), null]
	}

	public async registerDelayedCallback(f: (() => void) | null, delayDuration: time.Duration): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		let timerCallback: ((result: $.Slice<number>, err: $.GoError) => void) | null = $.functionValue(async (result: $.Slice<number>, err: $.GoError): globalThis.Promise<void> => {
			void (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo))
		if (delayDuration == 0n) {
			await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).postCallback(f, false) : testWorkflowEnvironmentImpl.prototype.postCallback.call(env, f, false))
			return
		}
		let mainLoopCallback: (() => void) | null = $.functionValue(async (): globalThis.Promise<void> => {
			await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).newTimer(delayDuration, timerCallback, false) : testWorkflowEnvironmentImpl.prototype.newTimer.call(env, delayDuration, timerCallback, false))
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
		await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).postCallback(mainLoopCallback, false) : testWorkflowEnvironmentImpl.prototype.postCallback.call(env, mainLoopCallback, false))
	}

	public async runBeforeMockCallReturns(call: __goscript_workflow_testsuite.MockCallWrapper | $.VarRef<__goscript_workflow_testsuite.MockCallWrapper> | null, args: mock2.Arguments): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		const call$: __goscript_workflow_testsuite.MockCallWrapper = call == null ? $.pointerTarget<__goscript_workflow_testsuite.MockCallWrapper>(call) : (call as any).__isVarRef === true ? (call as any).value : (call as any).__goValue === undefined ? (call as any) : $.pointerTarget<__goscript_workflow_testsuite.MockCallWrapper>(call)
		let waitDuration: time.Duration = 0n
		if ((call$ as __goscript_workflow_testsuite.MockCallWrapper).waitDuration != null) {
			waitDuration = (__goscriptAwait = (call$ as __goscript_workflow_testsuite.MockCallWrapper).waitDuration!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		if (waitDuration > 0n) {
			// we want this mock call to block until the wait duration is elapsed (on workflow clock).
			let waitCh: $.Channel<time.Time> | null = $.makeChannel<time.Time>(0, $.markAsStructValue(new time.Time()), "both")
			await testWorkflowEnvironmentImpl.prototype.registerDelayedCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
				$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount++
				await $.chanSend(waitCh, await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).Now() : testWorkflowEnvironmentImpl.prototype.Now.call(env)))
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), waitDuration)

			// make sure decrease runningCount after delayed callback is posted
			await testWorkflowEnvironmentImpl.prototype.postCallback.call(env, $.functionValue((): void => {
				$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningCount--
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), false)
			await $.chanRecv(waitCh)
		}

		// run the actual runFn if it was setup
		if ((call$ as __goscript_workflow_testsuite.MockCallWrapper).runFn != null) {
			void (__goscriptAwait = (call$ as __goscript_workflow_testsuite.MockCallWrapper).runFn!((args as mock2.Arguments)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async setActivityHandle(activityID: string, handle: testActivityHandle | $.VarRef<testActivityHandle> | null): globalThis.Promise<void> {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		$.mapSet($.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>(env).testWorkflowEnvironmentShared).activities, await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).makeUniqueID(activityID) : testWorkflowEnvironmentImpl.prototype.makeUniqueID.call(env, activityID)), handle)
	}

	public async setActivityTaskList(tasklist: string, activityFns: $.Slice<any>): globalThis.Promise<void> {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		for (let __goscriptRangeTarget4 = activityFns, __goscriptRangeWindow4 = $.sliceRange(__goscriptRangeTarget4), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow4.length; __rangeIndex++) {
			let activityFn = (__goscriptRangeWindow4.backing[__goscriptRangeWindow4.offset + __rangeIndex] as any)
			let fnName = await __goscript_internal_worker.getActivityFunctionName((env$ as testWorkflowEnvironmentImpl).registry, activityFn)
			let __goscriptTuple41: any = $.mapGet<string, taskListSpecificActivity | $.VarRef<taskListSpecificActivity> | null, taskListSpecificActivity | $.VarRef<taskListSpecificActivity> | null>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).taskListSpecificActivities, fnName, null)
			let taskListActivity: taskListSpecificActivity | $.VarRef<taskListSpecificActivity> | null = __goscriptTuple41[0]
			let ok = __goscriptTuple41[1]
			if (!ok) {
				taskListActivity = new taskListSpecificActivity({fn: activityFn, taskLists: $.makeMap<string, {}>()})
				$.mapSet($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).taskListSpecificActivities, fnName, taskListActivity)
			}
			$.mapSet($.pointerValue<taskListSpecificActivity>(taskListActivity).taskLists, tasklist, {})
		}
	}

	public setCronMaxIterationas(cronMaxIterations: number): void {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		$.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>(env).testWorkflowEnvironmentShared).cronMaxIterations = cronMaxIterations
	}

	public setCronSchedule(__goscriptParam1: string): void {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		let cronSchedule: $.VarRef<string> = $.varRef(__goscriptParam1)
		$.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<testWorkflowEnvironmentImpl>(env).workflowInfo).CronSchedule = cronSchedule
	}

	public async setHeartbeatDetails(details: any): globalThis.Promise<void> {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		let __goscriptTuple42: any = await __goscript_internal_worker.encodeArg((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)), details)
		let data: $.Slice<number> = __goscriptTuple42[0]
		let err = __goscriptTuple42[1]
		if (err != null) {
			$.panic((err as any))
		}
		$.pointerValue<testWorkflowEnvironmentImpl>(env).heartbeatDetails = data
	}

	public async setLastCompletionResult(result: any): globalThis.Promise<void> {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		let __goscriptTuple43: any = await __goscript_internal_worker.encodeArg((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)), result)
		let data: $.Slice<number> = __goscriptTuple43[0]
		let err = __goscriptTuple43[1]
		if (err != null) {
			$.panic((err as any))
		}
		$.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<testWorkflowEnvironmentImpl>(env).workflowInfo).lastCompletionResult = data
	}

	public async setStartTime(startTime: time.Time): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		// move forward the mock clock to start time.
		if ($.markAsStructValue($.cloneStructValue(startTime)).IsZero()) {
			// if start time not set, use current clock time
			startTime = $.assignStruct(startTime, ((__goscriptAwait = $.pointerValue<Exclude<clock.Clock, null>>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).wallClock).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))
		}
		await clock.Mock.prototype.Add.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).mockClock, $.markAsStructValue($.cloneStructValue(startTime)).Sub(await clock.Mock.prototype.Now.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).mockClock)))
	}

	public setWorkerOptions(options: __goscript_worker.WorkerOptions): void {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		if ($.stringLen(options.Identity) > 0) {
			;(env$ as testWorkflowEnvironmentImpl).workerOptions.Identity = options.Identity
		}
		if (options.BackgroundActivityContext != null) {
			;(env$ as testWorkflowEnvironmentImpl).workerOptions.BackgroundActivityContext = options.BackgroundActivityContext
		}
		if (options.MetricsScope != null) {
			;(env$ as testWorkflowEnvironmentImpl).workerOptions.MetricsScope = options.MetricsScope
		}
		if (options.DataConverter != null) {
			;(env$ as testWorkflowEnvironmentImpl).workerOptions.DataConverter = options.DataConverter
		}
		// Uncomment when resourceID is exposed to user.
		// if options.SessionResourceID != "" {
		// 	env.workerOptions.SessionResourceID = options.SessionResourceID
		// }
		if (options.MaxConcurrentSessionExecutionSize != 0) {
			;(env$ as testWorkflowEnvironmentImpl).workerOptions.MaxConcurrentSessionExecutionSize = options.MaxConcurrentSessionExecutionSize
		}
		if ($.sliceLen(options.ContextPropagators) > 0) {
			;(env$ as testWorkflowEnvironmentImpl).workerOptions.ContextPropagators = options.ContextPropagators
		}
		if (options.Logger != null) {
			;(env$ as testWorkflowEnvironmentImpl).workerOptions.Logger = options.Logger
		}
		;(env$ as testWorkflowEnvironmentImpl).workflowInterceptors = options.WorkflowInterceptorChainFactories
	}

	public setWorkerStopChannel(c: $.Channel<{}> | null): void {
		let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		$.pointerValue<testWorkflowEnvironmentImpl>(env).workerStopChannel = c
	}

	public async signalWorkflow(name: string, input: any, startDecisionTask: boolean): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		let __goscriptTuple44: any = await __goscript_internal_worker.encodeArg((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)), input)
		let data: $.Slice<number> = __goscriptTuple44[0]
		let err = __goscriptTuple44[1]
		if (err != null) {
			$.panic((err as any))
		}
		await testWorkflowEnvironmentImpl.prototype.postCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
			await $.pointerValue<testWorkflowEnvironmentImpl>(env).signalHandler!(name, data)
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), startDecisionTask)
	}

	public async signalWorkflowByID(workflowID: string, signalName: string, input: any): globalThis.Promise<$.GoError> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		let __goscriptTuple45: any = await __goscript_internal_worker.encodeArg((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env)), input)
		let data: $.Slice<number> = __goscriptTuple45[0]
		let err = __goscriptTuple45[1]
		if (err != null) {
			$.panic((err as any))
		}

		{
			let __goscriptTuple46: any = $.mapGet<string, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null>($.pointerValue<testWorkflowEnvironmentShared>($.pointerValue<testWorkflowEnvironmentImpl>(env).testWorkflowEnvironmentShared).runningWorkflows, workflowID, null)
			let workflowHandle: testWorkflowHandle | $.VarRef<testWorkflowHandle> | null = __goscriptTuple46[0]
			let ok = __goscriptTuple46[1]
			if (ok) {
				if ($.pointerValue<testWorkflowHandle>(workflowHandle).handled) {
					return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField15 = await fmt.Sprintf("Workflow %v already completed", workflowID); return new shared.WorkflowExecutionAlreadyCompletedError({Message: __goscriptLiteralField15}) })()), "*shared.WorkflowExecutionAlreadyCompletedError", /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyCompletedError"))
				}
				await testWorkflowEnvironmentImpl.prototype.postCallback.call($.pointerValue<testWorkflowHandle>(workflowHandle).env, $.functionValue(async (): globalThis.Promise<void> => {
					await $.pointerValue<testWorkflowEnvironmentImpl>($.pointerValue<testWorkflowHandle>(workflowHandle).env).signalHandler!(signalName, data)
				}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), true)
				return null
			}
		}

		return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField16 = await fmt.Sprintf("Workflow %v not exists", workflowID); return new shared.EntityNotExistsError({Message: __goscriptLiteralField16}) })()), "*shared.EntityNotExistsError", /* @__PURE__ */ $.pointerType("shared.EntityNotExistsError"))
	}

	public async startDecisionTask(): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		if (!(env$ as testWorkflowEnvironmentImpl).isTestCompleted) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowDefinition, null>>((env$ as testWorkflowEnvironmentImpl).workflowDef).OnDecisionTaskStarted(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async startMainLoop(): globalThis.Promise<void> {
		const env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = this;
		const env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)
		if ((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).isChildWorkflow() : testWorkflowEnvironmentImpl.prototype.isChildWorkflow.call(env))) {
			// child workflow rely on parent workflow's main loop to process events
			await $.chanRecv((env$ as testWorkflowEnvironmentImpl).doneChannel)
			return
		}

		while (!(env$ as testWorkflowEnvironmentImpl).isTestCompleted) {
			// use non-blocking-select to check if there is anything pending in the main thread.
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).callbackChannel,
					onSelected: async (__goscriptSelect0Result) => {
						let c = __goscriptSelect0Result.value
						await c.value.processCallback()
					}
				},
				{
					id: -1,
					isSend: false,
					channel: null,
					onSelected: async (__goscriptSelect0Result) => {
						if (!await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).autoFireNextTimer() : testWorkflowEnvironmentImpl.prototype.autoFireNextTimer.call(env))) {
							if ((env$ as testWorkflowEnvironmentImpl).isTestCompleted) {
								return $.selectVoidReturn()
							}

							// no timer to fire, wait for things to do or timeout.
							const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, void>([
								{
									id: 0,
									isSend: false,
									channel: $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).callbackChannel,
									onSelected: async (__goscriptSelect1Result) => {
										let c = __goscriptSelect1Result.value
										await c.value.processCallback()
									}
								},
								{
									id: 1,
									isSend: false,
									channel: time.After($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).testTimeout),
									onSelected: async (__goscriptSelect1Result) => {
										let panicMsg = await fmt.Sprintf("test timeout: %v, workflow stack: %v", $.namedValueInterfaceValue<any>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).testTimeout, "time.Duration", __goscriptStatic5(), __goscriptStatic6(), __goscriptStatic7()), (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowDefinition, null>>((env$ as testWorkflowEnvironmentImpl).workflowDef).StackTrace(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
										$.panic(panicMsg)
									}
								}
							], false)
							if (__goscriptSelect1HasReturn) {
								return __goscriptSelect1Value
							}
						}
					}
				}
			], true)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"internal.testWorkflowEnvironmentImpl",
		() => new testWorkflowEnvironmentImpl(),
		() => [$.methodSignature("AddSession", [["sessionInfo", /* @__PURE__ */ $.pointerType("internal.SessionInfo")]], [], true), $.methodSignature("Complete", [["result", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], [], true), $.methodSignature("CompleteActivity", [["taskToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["result", { kind: $.TypeKind.Interface, methods: [] }], ["err", "error"]], ["error"], true), $.methodSignature("ExecuteActivity", [["parameters", "internal.executeActivityParams"], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.activityInfo")], true), $.methodSignature("ExecuteChildWorkflow", [["params", "internal.executeWorkflowParams"], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)], ["startedHandler", ({ kind: $.TypeKind.Function, params: ["internal.WorkflowExecution", "error"], results: [] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("ExecuteLocalActivity", [["params", "internal.executeLocalActivityParams"], ["callback", ({ kind: $.TypeKind.Function, name: "internal.laResultHandler", params: [/* @__PURE__ */ $.pointerType("internal.localActivityResultWrapper")], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.localActivityInfo")], true), $.methodSignature("GetContextPropagators", [], [/* @__PURE__ */ $.sliceType("internal.ContextPropagator")], true), $.methodSignature("GetDataConverter", [], ["internal.DataConverter"], true), $.methodSignature("GetFeatureFlags", [], ["internal.FeatureFlags"], true), $.methodSignature("GetLogger", [], [/* @__PURE__ */ $.pointerType("zap.Logger")], true), $.methodSignature("GetMetricsScope", [], ["tally.Scope"], true), $.methodSignature("GetRegisteredActivities", [], [/* @__PURE__ */ $.sliceType("internal.RegistryActivityInfo")], true), $.methodSignature("GetRegisteredWorkflows", [], [/* @__PURE__ */ $.sliceType("internal.RegistryWorkflowInfo")], true), $.methodSignature("GetRegistry", [], [/* @__PURE__ */ $.pointerType("internal.registry")], true), $.methodSignature("GetTracer", [], ["opentracing.Tracer"], true), $.methodSignature("GetVersion", [["changeID", /* @__PURE__ */ $.basicType("string")], ["minSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")], ["maxSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")], ["opts", /* @__PURE__ */ $.sliceType("internal.GetVersionOption")]], [["retVersion", /* @__PURE__ */ $.basicType("int", "internal.Version")]], true), $.methodSignature("GetWorkflowInterceptors", [], [/* @__PURE__ */ $.sliceType("internal.WorkflowInterceptorFactory")], true), $.methodSignature("IsCron", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsReplaying", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MutableSideEffect", [["id", /* @__PURE__ */ $.basicType("string")], ["f", ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)], ["equals", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], ["internal.Value"], true), $.methodSignature("NewTimer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.timerInfo")], true), $.methodSignature("Now", [], ["time.Time"], true), $.methodSignature("RegisterActivity", [["a", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("RegisterActivityWithOptions", [["a", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterActivityOptions"]], [], true), $.methodSignature("RegisterCancelHandler", [["handler", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("RegisterQueryHandler", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("RegisterSignalHandler", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("RegisterWorkflow", [["w", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("RegisterWorkflowWithOptions", [["w", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterWorkflowOptions"]], [], true), $.methodSignature("RemoveSession", [["sessionID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("RequestCancelActivity", [["activityID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("RequestCancelChildWorkflow", [["domainName", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("RequestCancelExternalWorkflow", [["domainName", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("RequestCancelLocalActivity", [["activityID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("RequestCancelTimer", [["timerID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("SideEffect", [["f", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo)], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("SignalExternalWorkflow", [["domainName", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["arg", { kind: $.TypeKind.Interface, methods: [] }], ["childWorkflowOnly", /* @__PURE__ */ $.basicType("bool")], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("UpsertSearchAttributes", [["attributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("WorkflowInfo", [], [/* @__PURE__ */ $.pointerType("internal.WorkflowInfo")], true), $.methodSignature("autoFireNextTimer", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("cancelWorkflow", [["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("deleteHandle", [["activityID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("encodeValue", [["value", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("executeActivity", [["activityFn", { kind: $.TypeKind.Interface, methods: [] }], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.Value", "error"], true), $.methodSignature("executeActivityWithOptions", [["activityOptions", "internal.activityOptions"], ["activityFn", { kind: $.TypeKind.Interface, methods: [] }], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.Value", "error"], true), $.methodSignature("executeActivityWithRetryForTest", [["taskHandler", "internal.ActivityTaskHandler"], ["parameters", "internal.executeActivityParams"], ["task", /* @__PURE__ */ $.pointerType("shared.PollForActivityTaskResponse")]], [["result", { kind: $.TypeKind.Interface, methods: [] }]], true), $.methodSignature("executeChildWorkflowWithDelay", [["delayStart", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["params", "internal.executeWorkflowParams"], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)], ["startedHandler", ({ kind: $.TypeKind.Function, params: ["internal.WorkflowExecution", "error"], results: [] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("executeLocalActivity", [["activityFn", { kind: $.TypeKind.Interface, methods: [] }], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [["val", "internal.Value"], ["err", "error"]], true), $.methodSignature("executeWorkflow", [["workflowFn", { kind: $.TypeKind.Interface, methods: [] }], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("executeWorkflowInternal", [["delayStart", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["workflowType", /* @__PURE__ */ $.basicType("string")], ["input", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [], true), $.methodSignature("getActivityHandle", [["activityID", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("internal.testActivityHandle"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getActivityInfo", [["activityID", /* @__PURE__ */ $.basicType("string")], ["activityType", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("internal.ActivityInfo")], true), $.methodSignature("getMockRunFn", [["callWrapper", /* @__PURE__ */ $.pointerType("internal.MockCallWrapper")]], [({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], results: [] } as $.FunctionTypeInfo)], true), $.methodSignature("getMockedVersion", [["mockedChangeID", /* @__PURE__ */ $.basicType("string")], ["changeID", /* @__PURE__ */ $.basicType("string")], ["minSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")], ["maxSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")]], [/* @__PURE__ */ $.basicType("int", "internal.Version"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getWorkflowDefinition", [["wt", "internal.WorkflowType"]], ["internal.workflowDefinition", "error"], true), $.methodSignature("handleActivityResult", [["activityID", /* @__PURE__ */ $.basicType("string")], ["result", { kind: $.TypeKind.Interface, methods: [] }], ["activityType", /* @__PURE__ */ $.basicType("string")], ["dataConverter", "internal.DataConverter"]], [], true), $.methodSignature("handleLocalActivityResult", [["result", /* @__PURE__ */ $.pointerType("internal.localActivityResult")]], [], true), $.methodSignature("isChildWorkflow", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("makeUniqueID", [["id", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("newTestActivityTaskHandler", [["taskList", /* @__PURE__ */ $.basicType("string")], ["dataConverter", "internal.DataConverter"]], ["internal.ActivityTaskHandler"], true), $.methodSignature("newTestWorkflowEnvironmentForChild", [["params", /* @__PURE__ */ $.pointerType("internal.executeWorkflowParams")], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)], ["startedHandler", ({ kind: $.TypeKind.Function, params: ["internal.WorkflowExecution", "error"], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.testWorkflowEnvironmentImpl"), "error"], true), $.methodSignature("newTimer", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["callback", ({ kind: $.TypeKind.Function, name: "internal.resultHandler", params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)], ["notifyListener", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("internal.timerInfo")], true), $.methodSignature("nextID", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("postCallback", [["cb", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)], ["startDecisionTask", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("queryWorkflow", [["queryType", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.Value", "error"], true), $.methodSignature("registerDelayedCallback", [["f", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)], ["delayDuration", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("runBeforeMockCallReturns", [["call", /* @__PURE__ */ $.pointerType("internal.MockCallWrapper")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")]], [], true), $.methodSignature("setActivityHandle", [["activityID", /* @__PURE__ */ $.basicType("string")], ["handle", /* @__PURE__ */ $.pointerType("internal.testActivityHandle")]], [], true), $.methodSignature("setActivityTaskList", [["tasklist", /* @__PURE__ */ $.basicType("string")], ["activityFns", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("setCronMaxIterationas", [["cronMaxIterations", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("setCronSchedule", [["cronSchedule", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("setHeartbeatDetails", [["details", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("setLastCompletionResult", [["result", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("setStartTime", [["startTime", "time.Time"]], [], true), $.methodSignature("setWorkerOptions", [["options", "internal.WorkerOptions"]], [], true), $.methodSignature("setWorkerStopChannel", [["c", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both")]], [], true), $.methodSignature("signalWorkflow", [["name", /* @__PURE__ */ $.basicType("string")], ["input", { kind: $.TypeKind.Interface, methods: [] }], ["startDecisionTask", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("signalWorkflowByID", [["workflowID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["input", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("startDecisionTask", [], [], true), $.methodSignature("startMainLoop", [], [], true)],
		testWorkflowEnvironmentImpl,
		() => [/* @__PURE__ */ $.structField("testWorkflowEnvironmentShared", /* @__PURE__ */ $.pointerType("internal.testWorkflowEnvironmentShared"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("parentEnv", /* @__PURE__ */ $.pointerType("internal.testWorkflowEnvironmentImpl"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("registry", /* @__PURE__ */ $.pointerType("internal.registry"), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowInterceptors", /* @__PURE__ */ $.sliceType("internal.WorkflowInterceptorFactory"), [3], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowInfo", /* @__PURE__ */ $.pointerType("internal.WorkflowInfo"), [4], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowDef", "internal.workflowDefinition", [5], 56, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("changeVersions", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int", "internal.Version")), [6], 72, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("openSessions", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.pointerType("internal.SessionInfo")), [7], 80, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowCancelHandler", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [8], 88, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("signalHandler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [] } as $.FunctionTypeInfo), [9], 96, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("queryHandler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"] } as $.FunctionTypeInfo), [10], 104, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("startedHandler", ({ kind: $.TypeKind.Function, params: ["internal.WorkflowExecution", "error"], results: [] } as $.FunctionTypeInfo), [11], 112, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("isTestCompleted", /* @__PURE__ */ $.basicType("bool"), [12], 120, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("testResult", "internal.Value", [13], 128, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("testError", "error", [14], 144, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("doneChannel", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [15], 160, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workerOptions", "internal.WorkerOptions", [16], 168, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("executionTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [17], 856, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("heartbeatDetails", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [18], 864, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workerStopChannel", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [19], 888, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("sessionEnvironment", /* @__PURE__ */ $.pointerType("internal.testSessionEnvironmentImpl"), [20], 896, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("cronSchedule", /* @__PURE__ */ $.basicType("string"), [21], 904, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("cronIterations", /* @__PURE__ */ $.basicType("int"), [22], 920, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowInput", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [23], 928, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("cronOverlapPolicy", /* @__PURE__ */ $.basicType("int32", "shared.CronOverlapPolicy"), [24], 952, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class testSessionEnvironmentImpl {
	public get sessionEnvironmentImpl(): __goscript_session.sessionEnvironmentImpl | $.VarRef<__goscript_session.sessionEnvironmentImpl> | null {
		return this._fields.sessionEnvironmentImpl
	}

	public set sessionEnvironmentImpl(value: __goscript_session.sessionEnvironmentImpl | $.VarRef<__goscript_session.sessionEnvironmentImpl> | null) {
		this._fields.sessionEnvironmentImpl = value
	}

	public get testWorkflowEnvironment(): testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null {
		return this._fields.testWorkflowEnvironment
	}

	public set testWorkflowEnvironment(value: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null) {
		this._fields.testWorkflowEnvironment = value
	}

	public _fields: {
		sessionEnvironmentImpl: __goscript_session.sessionEnvironmentImpl | $.VarRef<__goscript_session.sessionEnvironmentImpl> | null
		testWorkflowEnvironment: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null
	}

	constructor(init?: Partial<{sessionEnvironmentImpl?: __goscript_session.sessionEnvironmentImpl | $.VarRef<__goscript_session.sessionEnvironmentImpl> | null, testWorkflowEnvironment?: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			sessionEnvironmentImpl: init?.sessionEnvironmentImpl ?? (null! as __goscript_session.sessionEnvironmentImpl | $.VarRef<__goscript_session.sessionEnvironmentImpl> | null),
			testWorkflowEnvironment: init?.testWorkflowEnvironment ?? (null! as testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): testSessionEnvironmentImpl {
		return new testSessionEnvironmentImpl(this, true)
	}

	public __goscriptAssign(source: testSessionEnvironmentImpl): void {
		const target = this._fields
		const values = source._fields
		target.sessionEnvironmentImpl = values.sessionEnvironmentImpl
		target.testWorkflowEnvironment = values.testWorkflowEnvironment
	}

	public async SignalCreationResponse(ctx: context.Context | null, sessionID: string): globalThis.Promise<$.GoError> {
		const t: testSessionEnvironmentImpl | $.VarRef<testSessionEnvironmentImpl> | null = this;
		const t$: testSessionEnvironmentImpl = t == null ? $.pointerTarget<testSessionEnvironmentImpl>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<testSessionEnvironmentImpl>(t)
		await testWorkflowEnvironmentImpl.prototype.signalWorkflow.call((t$ as testSessionEnvironmentImpl).testWorkflowEnvironment, sessionID, $.interfaceValue(__goscript_session.sessionEnvironmentImpl.prototype.getCreationResponse.call((t$ as testSessionEnvironmentImpl).sessionEnvironmentImpl), "*internal.sessionCreationResponse", /* @__PURE__ */ $.pointerType("internal.sessionCreationResponse")), true)
		return null
	}

	public async AddSessionToken(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_session.sessionEnvironmentImpl>(this.sessionEnvironmentImpl).AddSessionToken()
	}

	public async CompleteSession(sessionID: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_session.sessionEnvironmentImpl>(this.sessionEnvironmentImpl).CompleteSession(sessionID)
	}

	public async CreateSession(ctx: any, sessionID: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_session.sessionEnvironmentImpl>(this.sessionEnvironmentImpl).CreateSession(ctx, sessionID)
	}

	public GetResourceSpecificTasklist(): any {
		return $.pointerValue<__goscript_session.sessionEnvironmentImpl>(this.sessionEnvironmentImpl).GetResourceSpecificTasklist()
	}

	public GetTokenBucket(): any {
		return $.pointerValue<__goscript_session.sessionEnvironmentImpl>(this.sessionEnvironmentImpl).GetTokenBucket()
	}

	public Lock(): any {
		return $.pointerValue<any>($.pointerValue<__goscript_session.sessionEnvironmentImpl>(this.sessionEnvironmentImpl).Mutex).Lock()
	}

	public TryLock(): any {
		return $.pointerValue<any>($.pointerValue<__goscript_session.sessionEnvironmentImpl>(this.sessionEnvironmentImpl).Mutex).TryLock()
	}

	public Unlock(): any {
		return $.pointerValue<any>($.pointerValue<__goscript_session.sessionEnvironmentImpl>(this.sessionEnvironmentImpl).Mutex).Unlock()
	}

	public getCreationResponse(): any {
		return $.pointerValue<__goscript_session.sessionEnvironmentImpl>(this.sessionEnvironmentImpl).getCreationResponse()
	}

	static __typeInfo = $.registerStructType(
		"internal.testSessionEnvironmentImpl",
		() => new testSessionEnvironmentImpl(),
		() => [$.methodSignature("SignalCreationResponse", [["ctx", "context.Context"], ["sessionID", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("AddSessionToken"), $.methodSignature("CompleteSession", [["sessionID", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("CreateSession", [["ctx", "context.Context"], ["sessionID", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), "error"]), $.methodSignature("GetResourceSpecificTasklist", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("GetTokenBucket", [], [/* @__PURE__ */ $.pointerType("internal.sessionTokenBucket")]), $.methodSignature("Lock"), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Unlock"), $.methodSignature("getCreationResponse", [], [/* @__PURE__ */ $.pointerType("internal.sessionCreationResponse")])],
		testSessionEnvironmentImpl,
		() => [/* @__PURE__ */ $.structField("sessionEnvironmentImpl", /* @__PURE__ */ $.pointerType("internal.sessionEnvironmentImpl"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal", anonymous: true }), /* @__PURE__ */ $.structField("testWorkflowEnvironment", /* @__PURE__ */ $.pointerType("internal.testWorkflowEnvironmentImpl"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class testReporter {
	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public _fields: {
		logger: zap.Logger | $.VarRef<zap.Logger> | null
	}

	constructor(init?: Partial<{logger?: zap.Logger | $.VarRef<zap.Logger> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): testReporter {
		return new testReporter(this, true)
	}

	public __goscriptAssign(source: testReporter): void {
		const target = this._fields
		const values = source._fields
		target.logger = values.logger
	}

	public async Errorf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const t: testReporter | $.VarRef<testReporter> | null = this;
		await zap.Logger.prototype.Error.call($.pointerValue<testReporter>(t).logger, await fmt.Sprintf(format, ...(args ?? [])), null)
	}

	public async Fatalf(format: string, args: $.Slice<any>): globalThis.Promise<void> {
		const t: testReporter | $.VarRef<testReporter> | null = this;
		await zap.Logger.prototype.Fatal.call($.pointerValue<testReporter>(t).logger, await fmt.Sprintf(format, ...(args ?? [])), null)
	}

	static __typeInfo = $.registerStructType(
		"internal.testReporter",
		() => new testReporter(),
		() => [$.methodSignature("Errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("Fatalf", [["format", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true)],
		testReporter,
		() => [/* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export const defaultTestDomain: string = "default-test-domain"

export const defaultTestTaskList: string = "default-test-tasklist"

export const defaultTestWorkflowID: string = "default-test-workflow-id"

export const defaultTestRunID: string = "default-test-run-id"

export const defaultTestWorkflowTypeName: string = "default-test-workflow-type-name"

export const defaultTestDomainName: string = "default-test-domain-name"

export const workflowTypeNotSpecified: string = "workflow-type-not-specified"

export async function newTestWorkflowEnvironmentImpl(s: __goscript_workflow_testsuite.WorkflowTestSuite | $.VarRef<__goscript_workflow_testsuite.WorkflowTestSuite> | null, parentRegistry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null): globalThis.Promise<testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null> {
	const s$: __goscript_workflow_testsuite.WorkflowTestSuite = s == null ? $.pointerTarget<__goscript_workflow_testsuite.WorkflowTestSuite>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_workflow_testsuite.WorkflowTestSuite>(s)
	let r: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null = null! as __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null
	if (parentRegistry == null) {
		r = await __goscript_registry.newRegistry()
		await __goscript_registry.registry.prototype.RegisterActivityWithOptions.call(r, $.interfaceValue($.goFunc(__goscript_session.sessionCreationActivity, "go.uber.org/cadence/internal.sessionCreationActivity"), "func(ctx context.Context, sessionID string) error", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)), new __goscript_activity.RegisterActivityOptions({Name: "internalSessionCreationActivity"}, true))
		await __goscript_registry.registry.prototype.RegisterActivityWithOptions.call(r, $.interfaceValue($.goFunc(__goscript_session.sessionCompletionActivity, "go.uber.org/cadence/internal.sessionCompletionActivity"), "func(ctx context.Context, sessionID string) error", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)), new __goscript_activity.RegisterActivityOptions({Name: "internalSessionCompletionActivity"}, true))
	} else {
		r = parentRegistry
	}

	let env: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null = new testWorkflowEnvironmentImpl({testWorkflowEnvironmentShared: (await (async () => { const __goscriptLiteralField17 = await metrics.NewTaggedScope((s$ as __goscript_workflow_testsuite.WorkflowTestSuite).scope); const __goscriptLiteralField18 = clock.NewMock(); const __goscriptLiteralField19 = clock.New(); return new testWorkflowEnvironmentShared({testSuite: s, taskListSpecificActivities: $.makeMap<string, taskListSpecificActivity | $.VarRef<taskListSpecificActivity> | null>(), logger: (s$ as __goscript_workflow_testsuite.WorkflowTestSuite).logger, metricsScope: __goscriptLiteralField17, mockClock: __goscriptLiteralField18, wallClock: __goscriptLiteralField19, timers: $.makeMap<string, testTimerHandle | $.VarRef<testTimerHandle> | null>(), activities: $.makeMap<string, testActivityHandle | $.VarRef<testActivityHandle> | null>(), localActivities: $.makeMap<string, __goscript_internal_event_handlers.localActivityTask | $.VarRef<__goscript_internal_event_handlers.localActivityTask> | null>(), runningWorkflows: $.makeMap<string, testWorkflowHandle | $.VarRef<testWorkflowHandle> | null>(), callbackChannel: $.makeChannel<testCallbackHandle>(1000, new testCallbackHandle(undefined, true), "both"), testTimeout: 3000000000n, expectedMockCalls: $.makeMap<string, {}>(), cronMaxIterations: -1}) })()), workflowInfo: new __goscript_workflow.WorkflowInfo({Domain: "default-test-domain", WorkflowExecution: new __goscript_workflow.WorkflowExecution({ID: "default-test-workflow-id", RunID: "default-test-run-id"}, true), WorkflowType: new __goscript_workflow.WorkflowType({Name: "workflow-type-not-specified"}, true), TaskListName: "default-test-tasklist", ExecutionStartToCloseTimeoutSeconds: 1, TaskStartToCloseTimeoutSeconds: 1}), registry: r, changeVersions: $.makeMap<string, __goscript_workflow.Version>(), openSessions: $.makeMap<string, __goscript_session.SessionInfo | $.VarRef<__goscript_session.SessionInfo> | null>(), doneChannel: $.makeChannel<{}>(0, {}, "both"), workerStopChannel: $.makeChannel<{}>(0, {}, "both"), cronIterations: 0})
	let env$: testWorkflowEnvironmentImpl = env == null ? $.pointerTarget<testWorkflowEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<testWorkflowEnvironmentImpl>(env)

	// move forward the mock clock to start time.
	await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).setStartTime($.markAsStructValue($.cloneStructValue(time.Now()))) : testWorkflowEnvironmentImpl.prototype.setStartTime.call(env, $.markAsStructValue($.cloneStructValue(time.Now()))))

	// put current workflow as a running workflow so child can send signal to parent
	let __goscriptShadow13: testWorkflowHandle | $.VarRef<testWorkflowHandle> | null = new testWorkflowHandle({env: env, callback: $.functionValue((result: $.Slice<number>, err: $.GoError): void => {
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo))})
	if (($.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).CronSchedule != null) && ($.stringLen($.pointerValue<string>($.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).CronSchedule)) > 0)) {
		$.pointerValue<__goscript_internal_workflow.executeWorkflowParams>($.pointerValue<testWorkflowHandle>(__goscriptShadow13).params).workflowOptions.cronSchedule = $.pointerValue<string>($.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).CronSchedule)
	}
	$.mapSet($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).runningWorkflows, $.pointerValue<__goscript_workflow.WorkflowInfo>((env$ as testWorkflowEnvironmentImpl).workflowInfo).WorkflowExecution.ID, __goscriptShadow13)

	if ($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger == null) {
		let __goscriptTuple47: any = await zap.NewDevelopment(null)
		let logger: zap.Logger | $.VarRef<zap.Logger> | null = __goscriptTuple47[0]
		$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger = logger
	}
	if ($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).metricsScope == null) {
		$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).metricsScope = await metrics.NewTaggedScope((s$ as __goscript_workflow_testsuite.WorkflowTestSuite).scope)
	}
	$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).ctxProps = (s$ as __goscript_workflow_testsuite.WorkflowTestSuite).ctxProps
	$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).header = (s$ as __goscript_workflow_testsuite.WorkflowTestSuite).header

	// setup mock service
	let mockCtrl: gomock.Controller | $.VarRef<gomock.Controller> | null = await gomock.NewController($.interfaceValue<gomock.TestReporter | null>(new testReporter({logger: $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger}), "*internal.testReporter", /* @__PURE__ */ $.pointerType("internal.testReporter")))
	let mockService: workflowservicetest.MockClient | $.VarRef<workflowservicetest.MockClient> | null = workflowservicetest.NewMockClient(mockCtrl)

	let mockHeartbeatFn: ((c: context.Context | null, r: shared.RecordActivityTaskHeartbeatRequest | $.VarRef<shared.RecordActivityTaskHeartbeatRequest> | null, opts: $.Slice<yarpc.CallOption>) => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (c: context.Context | null, r: shared.RecordActivityTaskHeartbeatRequest | $.VarRef<shared.RecordActivityTaskHeartbeatRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> => {
		let activityID = $.bytesToString($.pointerValue<shared.RecordActivityTaskHeartbeatRequest>(r).TaskToken)
		await $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).locker.Lock()
		let __goscriptTuple48: any = await (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).getActivityHandle(activityID) : testWorkflowEnvironmentImpl.prototype.getActivityHandle.call(env, activityID))
		let activityHandle: testActivityHandle | $.VarRef<testActivityHandle> | null = __goscriptTuple48[0]
		let ok = __goscriptTuple48[1]
		let activityHandle$: testActivityHandle = activityHandle == null ? $.pointerTarget<testActivityHandle>(activityHandle) : (activityHandle as any).__isVarRef === true ? (activityHandle as any).value : (activityHandle as any).__goValue === undefined ? (activityHandle as any) : $.pointerTarget<testActivityHandle>(activityHandle)
		$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).locker.Unlock()
		if (!ok) {
			await zap.Logger.prototype.Debug.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger, "RecordActivityTaskHeartbeat: ActivityID not found, could be already completed or cancelled.", $.arrayToSlice<zap.Field>([zap.String("ActivityID", activityID)]))
			return $.interfaceValue<$.GoError>(new shared.EntityNotExistsError(), "*shared.EntityNotExistsError", /* @__PURE__ */ $.pointerType("shared.EntityNotExistsError"))
		}
		;(activityHandle$ as testActivityHandle).heartbeatDetails = $.pointerValue<shared.RecordActivityTaskHeartbeatRequest>(r).Details
		let __goscriptShadow14: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).getActivityInfo(activityID, (activityHandle$ as testActivityHandle).activityType) : testWorkflowEnvironmentImpl.prototype.getActivityInfo.call(env, activityID, (activityHandle$ as testActivityHandle).activityType))
		await testWorkflowEnvironmentImpl.prototype.postCallback.call(env, $.functionValue(async (): globalThis.Promise<void> => {
			if ($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onActivityHeartbeatListener != null) {
				await $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).onActivityHeartbeatListener!(__goscriptShadow14, __goscript_workflow_testsuite.newEncodedValues($.pointerValue<shared.RecordActivityTaskHeartbeatRequest>(r).Details, (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as testWorkflowEnvironmentImpl).GetDataConverter() : testWorkflowEnvironmentImpl.prototype.GetDataConverter.call(env))))
			}
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), false)

		await zap.Logger.prototype.Debug.call($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger, "RecordActivityTaskHeartbeat", $.arrayToSlice<zap.Field>([zap.String("ActivityID", activityID)]))
		return null
	}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], results: ["error"], isVariadic: true } as $.FunctionTypeInfo))

	let callOptions: $.Slice<any> = null! as $.Slice<any>
	let yarpcCallOptions: $.Slice<yarpc.CallOption> = await __goscript_internal_utils.getYarpcCallOptions(new __goscript_internal_utils.FeatureFlags(undefined, true))
	for (let __goscriptRangeTarget5 = yarpcCallOptions, __goscriptRangeWindow5 = $.sliceRange(__goscriptRangeTarget5), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow5.length; __rangeIndex++) {
		callOptions = $.appendOne(callOptions, (gomock.Any() as any), $.appendZeros.nil)
	}
	let em: gomock.Call | $.VarRef<gomock.Call> | null = await gomock.Call.prototype.Return.call(await $.pointerValue<any>((mockService !== null && (mockService as any).__isVarRef !== true && (mockService as any).__goValue === undefined ? ((mockService as any) as workflowservicetest.MockClient).EXPECT() : workflowservicetest.MockClient.prototype.EXPECT.call(mockService))).RecordActivityTaskHeartbeat((gomock.Any() as any), (gomock.Any() as any), callOptions), $.arrayToSlice<any>([$.interfaceValue((() => { const __goscriptLiteralField20 = common.BoolPtr(false); return new shared.RecordActivityTaskHeartbeatResponse({CancelRequested: __goscriptLiteralField20}) })(), "*shared.RecordActivityTaskHeartbeatResponse", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatResponse")), null]))
	gomock.Call.prototype.AnyTimes.call(await gomock.Call.prototype.Do.call(em, $.interfaceValue($.functionValue(async (ctx: context.Context | null, r: shared.RecordActivityTaskHeartbeatRequest | $.VarRef<shared.RecordActivityTaskHeartbeatRequest> | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<void> => {
		// TODO: The following will hit a data race in the gomock code where the Do() action is executed outside
		// the lock and setting return value from inside the action is going to run into races.
		// err := mockHeartbeatFn(ctx, r, opts)
		// em.Return(&shared.RecordActivityTaskHeartbeatResponse{CancelRequested: common.BoolPtr(false)}, err)
		void (__goscriptAwait = mockHeartbeatFn!(ctx, r, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}, ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], results: [], isVariadic: true } as $.FunctionTypeInfo)), "func(ctx context.Context, r *shared.RecordActivityTaskHeartbeatRequest, opts ...yarpc.CallOption)", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.pointerType("shared.RecordActivityTaskHeartbeatRequest"), /* @__PURE__ */ $.sliceType("yarpc.CallOption")], results: [], isVariadic: true } as $.FunctionTypeInfo))))

	$.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).service = $.interfaceValue<workflowserviceclient.Interface | null>(mockService, "*workflowservicetest.MockClient", /* @__PURE__ */ $.pointerType("workflowservicetest.MockClient"))

	$.assignStruct((env$ as testWorkflowEnvironmentImpl).workerOptions.FeatureFlags, new __goscript_internal_utils.FeatureFlags({EphemeralTaskListsEnabled: true}, true))
	if ((env$ as testWorkflowEnvironmentImpl).workerOptions.Logger == null) {
		;(env$ as testWorkflowEnvironmentImpl).workerOptions.Logger = $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).logger
	}
	if ((env$ as testWorkflowEnvironmentImpl).workerOptions.MetricsScope == null) {
		;(env$ as testWorkflowEnvironmentImpl).workerOptions.MetricsScope = $.interfaceValue<tally.Scope | null>($.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).metricsScope, "*metrics.TaggedScope", /* @__PURE__ */ $.pointerType("metrics.TaggedScope"))
	}
	if ((env$ as testWorkflowEnvironmentImpl).workerOptions.DataConverter == null) {
		;(env$ as testWorkflowEnvironmentImpl).workerOptions.DataConverter = __goscript_encoded.getDefaultDataConverter()
	}
	if ($.sliceLen((env$ as testWorkflowEnvironmentImpl).workerOptions.ContextPropagators) == 0) {
		;(env$ as testWorkflowEnvironmentImpl).workerOptions.ContextPropagators = $.pointerValue<testWorkflowEnvironmentShared>((env$ as testWorkflowEnvironmentImpl).testWorkflowEnvironmentShared).ctxProps
	}

	return env
}

export function getRetryBackoffFromThriftRetryPolicy(tp: shared.RetryPolicy | $.VarRef<shared.RetryPolicy> | null, attempt: number, errReason: string, now: time.Time, expireTime: time.Time): time.Duration {
	if (tp == null) {
		return -1n
	}

	let p: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null = __goscript_convert.convertFromThriftRetryPolicy(tp)
	return __goscript_internal_task_handlers.getRetryBackoffWithNowTime(p, attempt, errReason, now, expireTime)
}

export function newTestActivityTask(workflowID: string, runID: string, activityID: string, workflowTypeName: string, domainName: string, params: __goscript_internal_activity.executeActivityParams): shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null {
	let task: shared.PollForActivityTaskResponse | $.VarRef<shared.PollForActivityTaskResponse> | null = (() => { const __goscriptLiteralField23 = common.StringPtr(activityID); const __goscriptLiteralField25 = common.Int64Ptr($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano()); const __goscriptLiteralField26 = common.Int32Ptr(params.activityOptions.ScheduleToCloseTimeoutSeconds); const __goscriptLiteralField27 = common.Int64Ptr($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano()); const __goscriptLiteralField28 = common.Int64Ptr($.markAsStructValue($.cloneStructValue(time.Now())).UnixNano()); const __goscriptLiteralField29 = common.Int32Ptr(params.activityOptions.StartToCloseTimeoutSeconds); const __goscriptLiteralField30 = common.Int32Ptr(params.activityOptions.HeartbeatTimeoutSeconds); const __goscriptLiteralField31 = common.Int32Ptr(0); const __goscriptLiteralField33 = common.StringPtr(domainName); return new shared.PollForActivityTaskResponse({WorkflowExecution: (() => { const __goscriptLiteralField21 = common.StringPtr(workflowID); const __goscriptLiteralField22 = common.StringPtr(runID); return new shared.WorkflowExecution({WorkflowId: __goscriptLiteralField21, RunId: __goscriptLiteralField22}) })(), ActivityId: __goscriptLiteralField23, TaskToken: $.stringToBytes(activityID), ActivityType: (() => { const __goscriptLiteralField24 = common.StringPtr(params.ActivityType.Name); return new shared.ActivityType({Name: __goscriptLiteralField24}) })(), Input: params.Input, ScheduledTimestamp: __goscriptLiteralField25, ScheduleToCloseTimeoutSeconds: __goscriptLiteralField26, ScheduledTimestampOfThisAttempt: __goscriptLiteralField27, StartedTimestamp: __goscriptLiteralField28, StartToCloseTimeoutSeconds: __goscriptLiteralField29, HeartbeatTimeoutSeconds: __goscriptLiteralField30, Attempt: __goscriptLiteralField31, WorkflowType: (() => { const __goscriptLiteralField32 = common.StringPtr(workflowTypeName); return new shared.WorkflowType({Name: __goscriptLiteralField32}) })(), WorkflowDomain: __goscriptLiteralField33, Header: params.Header}) })()
	return task
}

export async function getMockMethodForGetVersion(changeID: string): globalThis.Promise<string> {
	return fmt.Sprintf("%v_%v", "workflow.GetVersion", changeID)
}

export async function getStringID(intID: number): globalThis.Promise<string> {
	return fmt.Sprintf("%d", $.basicInterfaceValue(intID, "int"))
}

export function newTestSessionEnvironment(testWorkflowEnvironment: testWorkflowEnvironmentImpl | $.VarRef<testWorkflowEnvironmentImpl> | null, params: __goscript_internal_worker.workerExecutionParameters | $.VarRef<__goscript_internal_worker.workerExecutionParameters> | null, concurrentSessionExecutionSize: number): testSessionEnvironmentImpl | $.VarRef<testSessionEnvironmentImpl> | null {
	let resourceID = $.pointerValue<__goscript_internal_worker.workerExecutionParameters>(params).SessionResourceID
	if ($.stringEqual(resourceID, "")) {
		resourceID = "testResourceID"
	}
	if (concurrentSessionExecutionSize == 0) {
		concurrentSessionExecutionSize = 1000
	}

	return new testSessionEnvironmentImpl({sessionEnvironmentImpl: $.mustTypeAssert<__goscript_session.sessionEnvironmentImpl | $.VarRef<__goscript_session.sessionEnvironmentImpl> | null>(__goscript_session.newSessionEnvironment(resourceID, concurrentSessionExecutionSize), /* @__PURE__ */ $.pointerType("internal.sessionEnvironmentImpl")), testWorkflowEnvironment: testWorkflowEnvironment})
}

export function mockFnSignalExternalWorkflow(domainName: string, workflowID: string, runID: string, signalName: string, arg: any): $.GoError {
	return null
}

export function mockFnRequestCancelExternalWorkflow(domainName: string, workflowID: string, runID: string): $.GoError {
	return null
}

export function mockFnGetVersion(changeID: string, minSupported: __goscript_workflow.Version, maxSupported: __goscript_workflow.Version): __goscript_workflow.Version {
	return -1
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Assert: (receiver: any, ...args: any[]) => (mock2.Arguments_Assert as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Bool: (receiver: any, ...args: any[]) => (mock2.Arguments_Bool as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Diff: (receiver: any, ...args: any[]) => (mock2.Arguments_Diff as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Error: (receiver: any, ...args: any[]) => (mock2.Arguments_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (mock2.Arguments_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Int: (receiver: any, ...args: any[]) => (mock2.Arguments_Int as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Is: (receiver: any, ...args: any[]) => (mock2.Arguments_Is as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (mock2.Arguments_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Assert", [["t", "mock.TestingT"], ["objects", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Bool", [["index", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Diff", [["objects", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int")]), $.methodSignature("Error", [["index", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("Get", [["index", /* @__PURE__ */ $.basicType("int")]], [{ kind: $.TypeKind.Interface, methods: [] }]), $.methodSignature("Int", [["index", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("Is", [["objects", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [["indexOrNil", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int"))]], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Assert: (receiver: any, ...args: any[]) => (mock2.Arguments_Assert as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Bool: (receiver: any, ...args: any[]) => (mock2.Arguments_Bool as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Diff: (receiver: any, ...args: any[]) => (mock2.Arguments_Diff as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Error: (receiver: any, ...args: any[]) => (mock2.Arguments_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Get: (receiver: any, ...args: any[]) => (mock2.Arguments_Get as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Int: (receiver: any, ...args: any[]) => (mock2.Arguments_Int as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Is: (receiver: any, ...args: any[]) => (mock2.Arguments_Is as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (mock2.Arguments_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptAwait: any
