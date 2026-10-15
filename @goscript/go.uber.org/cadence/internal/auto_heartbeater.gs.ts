// Generated file based on auto_heartbeater.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as time from "@goscript/time/index.js"

import * as clockwork from "@goscript/github.com/jonboulle/clockwork/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_internal_logging_tags from "./internal_logging_tags.gs.ts"
import "@goscript/context/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/jonboulle/clockwork/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "./activity.gs.ts"
import "./error.gs.ts"
import "./internal_logging_tags.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.autoHeartbeater"])

export class autoHeartbeater {
	public get stopCh(): $.Channel<{}> | null {
		return this._fields.stopCh
	}

	public set stopCh(value: $.Channel<{}> | null) {
		this._fields.stopCh = value
	}

	public get invoker(): __goscript_activity.ServiceInvoker | null {
		return this._fields.invoker
	}

	public set invoker(value: __goscript_activity.ServiceInvoker | null) {
		this._fields.invoker = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get clock(): clockwork.Clock | null {
		return this._fields.clock
	}

	public set clock(value: clockwork.Clock | null) {
		this._fields.clock = value
	}

	public get activityType(): string {
		return this._fields.activityType
	}

	public set activityType(value: string) {
		this._fields.activityType = value
	}

	public get execution(): shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null {
		return this._fields.execution
	}

	public set execution(value: shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null) {
		this._fields.execution = value
	}

	public _fields: {
		stopCh: $.Channel<{}> | null
		invoker: __goscript_activity.ServiceInvoker | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		clock: clockwork.Clock | null
		activityType: string
		execution: shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null
	}

	constructor(init?: Partial<{stopCh?: $.Channel<{}> | null, invoker?: __goscript_activity.ServiceInvoker | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null, clock?: clockwork.Clock | null, activityType?: string, execution?: shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			stopCh: init?.stopCh ?? (null! as $.Channel<{}> | null),
			invoker: init?.invoker ?? (null! as __goscript_activity.ServiceInvoker | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			clock: init?.clock ?? (null! as clockwork.Clock | null),
			activityType: init?.activityType ?? ("" as string),
			execution: init?.execution ?? (null! as shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): autoHeartbeater {
		return new autoHeartbeater(this, true)
	}

	public __goscriptAssign(source: autoHeartbeater): void {
		const target = this._fields
		const values = source._fields
		target.stopCh = values.stopCh
		target.invoker = $.assignFieldValue(target.invoker, values.invoker, "internal.ServiceInvoker")
		target.logger = values.logger
		target.clock = $.assignFieldValue(target.clock, values.clock, "clockwork.Clock")
		target.activityType = values.activityType
		target.execution = values.execution
	}

	public async Run(ctx: context.Context | null, timeout: time.Duration): globalThis.Promise<void> {
		const a: autoHeartbeater | $.VarRef<autoHeartbeater> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const a$: autoHeartbeater = a == null ? $.pointerTarget<autoHeartbeater>(a) : (a as any).__isVarRef === true ? (a as any).value : (a as any).__goValue === undefined ? (a as any) : $.pointerTarget<autoHeartbeater>(a)
		let autoHbInterval = $.int64Div(timeout, 2n)
		let ticker = (__goscriptAwait = $.pointerValue<Exclude<clockwork.Clock, null>>((a$ as autoHeartbeater).clock).NewTicker(autoHbInterval), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Stop())((ticker !== null && (ticker as any).__isVarRef !== true && (ticker as any).__goValue === undefined ? (ticker as Exclude<clockwork.Ticker, null>) : $.pointerValue<Exclude<clockwork.Ticker, null>>(ticker))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/jonboulle/clockwork.Ticker.Stop-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		while (true) {
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: (a$ as autoHeartbeater).stopCh,
					onSelected: async (__goscriptSelect0Result) => {
						return $.selectVoidReturn()
					}
				},
				{
					id: 1,
					isSend: false,
					channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
					onSelected: async (__goscriptSelect0Result) => {
						return $.selectVoidReturn()
					}
				},
				{
					id: 2,
					isSend: false,
					channel: ((__goscriptAwait = (ticker !== null && (ticker as any).__isVarRef !== true && (ticker as any).__goValue === undefined ? (ticker as Exclude<clockwork.Ticker, null>) : $.pointerValue<Exclude<clockwork.Ticker, null>>(ticker)).Chan(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<time.Time> | null),
					onSelected: async (__goscriptSelect0Result) => {
						let hbErr = (__goscriptAwait = $.pointerValue<Exclude<__goscript_activity.ServiceInvoker, null>>((a$ as autoHeartbeater).invoker).BackgroundHeartbeat(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						if ((hbErr != null) && !__goscript_error.IsCanceledError(hbErr)) {
							await zap.Logger.prototype.Error.call((a$ as autoHeartbeater).logger, "Activity auto heartbeat error.", $.arrayToSlice<zap.Field>([zap.String("WorkflowID", shared.WorkflowExecution.prototype.GetWorkflowId.call((a$ as autoHeartbeater).execution)), zap.String("RunID", shared.WorkflowExecution.prototype.GetRunId.call((a$ as autoHeartbeater).execution)), zap.String("ActivityType", (a$ as autoHeartbeater).activityType), zap.Error(hbErr)]))
						}
					}
				}
			], false)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"internal.autoHeartbeater",
		() => new autoHeartbeater(),
		() => [$.methodSignature("Run", [["ctx", "context.Context"], ["timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true)],
		autoHeartbeater,
		() => [/* @__PURE__ */ $.structField("stopCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("invoker", "internal.ServiceInvoker", [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [2], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("clock", "clockwork.Clock", [3], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("activityType", /* @__PURE__ */ $.basicType("string"), [4], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("execution", /* @__PURE__ */ $.pointerType("shared.WorkflowExecution"), [5], 64, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export function newHeartbeater(stopChannel: $.Channel<{}> | null, invoker: __goscript_activity.ServiceInvoker | null, logger: zap.Logger | $.VarRef<zap.Logger> | null, clock: clockwork.Clock | null, activityType: string, execution: shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null): autoHeartbeater | $.VarRef<autoHeartbeater> | null {
	return new autoHeartbeater({stopCh: stopChannel, invoker: invoker, logger: logger, clock: clock, activityType: activityType, execution: execution})
}

var __goscriptAwait: any
