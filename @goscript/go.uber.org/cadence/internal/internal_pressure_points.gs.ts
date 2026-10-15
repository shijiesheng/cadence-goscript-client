// Generated file based on internal_pressure_points.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as time from "@goscript/time/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as context from "@goscript/context/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import type * as shadower from "@goscript/go.uber.org/cadence/.gen/go/shadower/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as auth from "@goscript/go.uber.org/cadence/internal/common/auth/index.js"

import * as backoff from "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"

import * as debug from "@goscript/go.uber.org/cadence/internal/common/debug/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as worker2 from "@goscript/go.uber.org/cadence/internal/worker/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as rate from "@goscript/golang.org/x/time/rate/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import * as __goscript_internal_event_handlers from "./internal_event_handlers.gs.ts"

import * as __goscript_internal_poller_autoscaler from "./internal_poller_autoscaler.gs.ts"

import * as __goscript_internal_task_pollers from "./internal_task_pollers.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_worker from "./worker.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_shadower from "./workflow_shadower.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/strconv/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/auth/index.js"
import "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"
import "@goscript/go.uber.org/cadence/internal/common/debug/index.js"
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
import "./internal_event_handlers.gs.ts"
import "./internal_poller_autoscaler.gs.ts"
import "./internal_task_pollers.gs.ts"
import "./internal_utils.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_worker_base.gs.ts"
import "./internal_workflow.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./worker.gs.ts"
import "./workflow.gs.ts"
import "./workflow_shadower.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.pressurePointMgr", "internal.pressurePointMgrImpl"])

export type pressurePointMgr = {
	Execute(pressurePointName: string): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"internal.pressurePointMgr",
	null,
	[$.methodSignature("Execute", [["pressurePointName", /* @__PURE__ */ $.basicType("string")]], ["error"])]
);

export class pressurePointMgrImpl {
	public get config(): globalThis.Map<string, globalThis.Map<string, string> | null> | null {
		return this._fields.config
	}

	public set config(value: globalThis.Map<string, globalThis.Map<string, string> | null> | null) {
		this._fields.config = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public _fields: {
		config: globalThis.Map<string, globalThis.Map<string, string> | null> | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
	}

	constructor(init?: Partial<{config?: globalThis.Map<string, globalThis.Map<string, string> | null> | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			config: init?.config ?? (null! as globalThis.Map<string, globalThis.Map<string, string> | null> | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pressurePointMgrImpl {
		return new pressurePointMgrImpl(this, true)
	}

	public __goscriptAssign(source: pressurePointMgrImpl): void {
		const target = this._fields
		const values = source._fields
		target.config = values.config
		target.logger = values.logger
	}

	public async Execute(pressurePointName: string): globalThis.Promise<$.GoError> {
		const p: pressurePointMgrImpl | $.VarRef<pressurePointMgrImpl> | null = this;
		const p$: pressurePointMgrImpl = p == null ? $.pointerTarget<pressurePointMgrImpl>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<pressurePointMgrImpl>(p)
		{
			let __goscriptTuple0: any = $.mapGet<string, globalThis.Map<string, string> | null, globalThis.Map<string, string> | null>((p$ as pressurePointMgrImpl).config, pressurePointName, null)
			let config: globalThis.Map<string, string> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				// If probability is configured.
				{
					let [value, ok2] = $.mapGet<string, string, string>(config, "probability", "")
					if (ok2) {
						{
							let [probability, err] = strconv.Atoi(value)
							if (err == null) {
								if (await rand.Int31n(100) < $.int(probability, 32)) {
									// Drop the task.
									await zap.Logger.prototype.Debug.call((p$ as pressurePointMgrImpl).logger, "pressurePointMgrImpl.Execute drop task.", $.arrayToSlice<zap.Field>([zap.String("PressurePointName", pressurePointName), zap.Int("probability", probability)]))
									return errors.New("pressurepoint configured")
								}
							}
						}
					} else {
						{
							let [__goscriptShadow0, ok3] = $.mapGet<string, string, string>(config, "sleep", "")
							if (ok3) {
								{
									let [timeout, err] = strconv.Atoi(__goscriptShadow0)
									if (err == null) {
										if (timeout > 0) {
											await zap.Logger.prototype.Debug.call((p$ as pressurePointMgrImpl).logger, "pressurePointMgrImpl.Execute sleep.", $.arrayToSlice<zap.Field>([zap.String("PressurePointName", pressurePointName), zap.Int("DurationSeconds", timeout)]))
											let d = $.int64Mul($.int64(timeout), 1000000000n)
											await time.Sleep(d)
											return null
										}
									}
								}
							}
						}
					}
				}
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"internal.pressurePointMgrImpl",
		() => new pressurePointMgrImpl(),
		() => [$.methodSignature("Execute", [["pressurePointName", /* @__PURE__ */ $.basicType("string")]], ["error"], true)],
		pressurePointMgrImpl,
		() => [/* @__PURE__ */ $.structField("config", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export const pressurePointTypeDecisionTaskStartTimeout: string = "decision-task-start-timeout"

export const pressurePointTypeDecisionTaskCompleted: string = "decision-task-complete"

export const pressurePointTypeActivityTaskScheduleTimeout: string = "activity-task-schedule-timeout"

export const pressurePointTypeActivityTaskStartTimeout: string = "activity-task-start-timeout"

export const pressurePointConfigProbability: string = "probability"

export const pressurePointConfigSleep: string = "sleep"

export const workerOptionsConfig: string = "worker-options"

export const workerOptionsConfigConcurrentPollRoutineSize: string = "ConcurrentPollRoutineSize"

export async function newWorkflowWorkerWithPressurePoints(service: workflowserviceclient.Interface | null, domain: string, params: __goscript_internal_worker.workerExecutionParameters, pressurePoints: globalThis.Map<string, globalThis.Map<string, string> | null> | null, registry: __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null): globalThis.Promise<__goscript_internal_worker.workflowWorker | $.VarRef<__goscript_internal_worker.workflowWorker> | null> {
	let worker: __goscript_internal_worker.workflowWorker | $.VarRef<__goscript_internal_worker.workflowWorker> | null = null! as __goscript_internal_worker.workflowWorker | $.VarRef<__goscript_internal_worker.workflowWorker> | null
	return __goscript_internal_worker.newWorkflowWorker(service, domain, params, $.interfaceValue<pressurePointMgr | null>(new pressurePointMgrImpl({config: pressurePoints, logger: params.WorkerOptions.Logger}), "*internal.pressurePointMgrImpl", /* @__PURE__ */ $.pointerType("internal.pressurePointMgrImpl")), registry, null)
}
