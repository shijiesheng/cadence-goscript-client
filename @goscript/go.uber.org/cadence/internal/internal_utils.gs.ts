// Generated file based on internal_utils.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as os from "@goscript/os/index.js"

import * as signal from "@goscript/os/signal/index.js"

import * as strings from "@goscript/strings/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as time from "@goscript/time/index.js"

import * as jsonpb from "@goscript/github.com/gogo/protobuf/jsonpb/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as uuid from "@goscript/github.com/pborman/uuid/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as apiv1 from "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"

import * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as s2 from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import type * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import type * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_internal_event_handlers from "./internal_event_handlers.gs.ts"

import * as __goscript_internal_logging_tags from "./internal_logging_tags.gs.ts"

import * as __goscript_internal_schedule_convert_thrift from "./internal_schedule_convert_thrift.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import * as __goscript_version from "./version.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_testsuite from "./workflow_testsuite.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/os/index.js"
import "@goscript/os/signal/index.js"
import "@goscript/strings/index.js"
import "@goscript/syscall/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/gogo/protobuf/jsonpb/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/github.com/pborman/uuid/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/github.com/uber/cadence-idl/go/proto/api/v1/index.js"
import "@goscript/go.uber.org/yarpc/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "./encoded.gs.ts"
import "./error.gs.ts"
import "./internal_event_handlers.gs.ts"
import "./internal_logging_tags.gs.ts"
import "./internal_schedule_convert_thrift.gs.ts"
import "./internal_worker.gs.ts"
import "./version.gs.ts"
import "./workflow.gs.ts"
import "./workflow_testsuite.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.FeatureFlags", "internal.contextBuilder"])

export class FeatureFlags {
	public get WorkflowExecutionAlreadyCompletedErrorEnabled(): boolean {
		return this._fields.WorkflowExecutionAlreadyCompletedErrorEnabled
	}

	public set WorkflowExecutionAlreadyCompletedErrorEnabled(value: boolean) {
		this._fields.WorkflowExecutionAlreadyCompletedErrorEnabled = value
	}

	public get AutoforwardingEnabled(): boolean {
		return this._fields.AutoforwardingEnabled
	}

	public set AutoforwardingEnabled(value: boolean) {
		this._fields.AutoforwardingEnabled = value
	}

	// Deprecated: use AutoScalerOptions instead
	public get PollerAutoScalerEnabled(): boolean {
		return this._fields.PollerAutoScalerEnabled
	}

	public set PollerAutoScalerEnabled(value: boolean) {
		this._fields.PollerAutoScalerEnabled = value
	}

	public get EphemeralTaskListsEnabled(): boolean {
		return this._fields.EphemeralTaskListsEnabled
	}

	public set EphemeralTaskListsEnabled(value: boolean) {
		this._fields.EphemeralTaskListsEnabled = value
	}

	// MetricEmitMode controls how latency metrics are emitted (timers, histograms, or both).
	// Default: metrics.EmitHistogramsOnly (post-migration) - set automatically if not specified.
	// Set to metrics.EmitTimersOnly for legacy OSS behavior, or metrics.EmitHistogramsOnly post-migration.
	public get MetricEmitMode(): metrics.MetricEmitMode {
		return this._fields.MetricEmitMode
	}

	public set MetricEmitMode(value: metrics.MetricEmitMode) {
		this._fields.MetricEmitMode = value
	}

	public _fields: {
		WorkflowExecutionAlreadyCompletedErrorEnabled: boolean
		AutoforwardingEnabled: boolean
		PollerAutoScalerEnabled: boolean
		EphemeralTaskListsEnabled: boolean
		MetricEmitMode: metrics.MetricEmitMode
	}

	constructor(init?: Partial<{WorkflowExecutionAlreadyCompletedErrorEnabled?: boolean, AutoforwardingEnabled?: boolean, PollerAutoScalerEnabled?: boolean, EphemeralTaskListsEnabled?: boolean, MetricEmitMode?: metrics.MetricEmitMode}>, __goscriptValue?: boolean) {
		this._fields = {
			WorkflowExecutionAlreadyCompletedErrorEnabled: init?.WorkflowExecutionAlreadyCompletedErrorEnabled ?? (false as boolean),
			AutoforwardingEnabled: init?.AutoforwardingEnabled ?? (false as boolean),
			PollerAutoScalerEnabled: init?.PollerAutoScalerEnabled ?? (false as boolean),
			EphemeralTaskListsEnabled: init?.EphemeralTaskListsEnabled ?? (false as boolean),
			MetricEmitMode: init?.MetricEmitMode ?? (0 as metrics.MetricEmitMode)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FeatureFlags {
		return new FeatureFlags(this, true)
	}

	public __goscriptAssign(source: FeatureFlags): void {
		const target = this._fields
		const values = source._fields
		target.WorkflowExecutionAlreadyCompletedErrorEnabled = values.WorkflowExecutionAlreadyCompletedErrorEnabled
		target.AutoforwardingEnabled = values.AutoforwardingEnabled
		target.PollerAutoScalerEnabled = values.PollerAutoScalerEnabled
		target.EphemeralTaskListsEnabled = values.EphemeralTaskListsEnabled
		target.MetricEmitMode = values.MetricEmitMode
	}

	static __typeInfo = $.registerStructType(
		"internal.FeatureFlags",
		() => new FeatureFlags(),
		() => [],
		FeatureFlags,
		() => [/* @__PURE__ */ $.structField("WorkflowExecutionAlreadyCompletedErrorEnabled", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("AutoforwardingEnabled", /* @__PURE__ */ $.basicType("bool"), [1], 1, true), /* @__PURE__ */ $.structField("PollerAutoScalerEnabled", /* @__PURE__ */ $.basicType("bool"), [2], 2, true), /* @__PURE__ */ $.structField("EphemeralTaskListsEnabled", /* @__PURE__ */ $.basicType("bool"), [3], 3, true), /* @__PURE__ */ $.structField("MetricEmitMode", /* @__PURE__ */ $.basicType("int", "metrics.MetricEmitMode"), [4], 8, true)]
	)
}

export class contextBuilder {
	// If Timeout is zero, Build will default to defaultTimeout.
	public get Timeout(): time.Duration {
		return this._fields.Timeout
	}

	public set Timeout(value: time.Duration) {
		this._fields.Timeout = value
	}

	// ParentContext to build the new context from. If empty, context.Background() is used.
	// The new (child) context inherits a number of properties from the parent context:
	//   - context fields, accessible via `ctx.Value(key)`
	public get ParentContext(): context.Context | null {
		return this._fields.ParentContext
	}

	public set ParentContext(value: context.Context | null) {
		this._fields.ParentContext = value
	}

	public _fields: {
		Timeout: time.Duration
		ParentContext: context.Context | null
	}

	constructor(init?: Partial<{Timeout?: time.Duration, ParentContext?: context.Context | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Timeout: init?.Timeout ?? (0n as time.Duration),
			ParentContext: init?.ParentContext ?? (null! as context.Context | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): contextBuilder {
		return new contextBuilder(this, true)
	}

	public __goscriptAssign(source: contextBuilder): void {
		const target = this._fields
		const values = source._fields
		target.Timeout = values.Timeout
		target.ParentContext = $.assignFieldValue(target.ParentContext, values.ParentContext, "context.Context")
	}

	public Build(): [context.Context | null, context.CancelFunc | null] {
		const cb: contextBuilder | $.VarRef<contextBuilder> | null = this;
		const cb$: contextBuilder = cb == null ? $.pointerTarget<contextBuilder>(cb) : (cb as any).__isVarRef === true ? (cb as any).value : (cb as any).__goValue === undefined ? (cb as any) : $.pointerTarget<contextBuilder>(cb)
		let parent = (cb$ as contextBuilder).ParentContext
		if (parent == null) {
			parent = context.Background()
		}
		return context.WithTimeout($.pointerValueOrNil(parent)!, (cb$ as contextBuilder).Timeout)
	}

	static __typeInfo = $.registerStructType(
		"internal.contextBuilder",
		() => new contextBuilder(),
		() => [$.methodSignature("Build", [], ["context.Context", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo)], true)],
		contextBuilder,
		() => [/* @__PURE__ */ $.structField("Timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, true), /* @__PURE__ */ $.structField("ParentContext", "context.Context", [1], 8, true)]
	)
}

export const libraryVersionHeaderName: string = "cadence-client-library-version"

export const featureVersionHeaderName: string = "cadence-client-feature-version"

export const clientImplHeaderName: string = "cadence-client-name"

export const clientImplHeaderValue: string = "uber-go"

export const callerTypeHeaderName: string = "cadence-caller-type"

export const callerTypeHeaderValue: string = "sdk"

export const clientFeatureFlagsHeaderName: string = "cadence-client-feature-flags"

export const defaultRPCTimeout: time.Duration = 10000000000n

export const minRPCTimeout: time.Duration = 1000000000n

export const maxRPCTimeout: time.Duration = 5000000000n

export const maxQueryRPCTimeout: time.Duration = 20000000000n

export var _yarpcCallOptions: $.Slice<yarpc.CallOption>

export async function __goscript_init__yarpcCallOptions(): globalThis.Promise<void> {
	if (((_yarpcCallOptions) as any) === undefined) {
		_yarpcCallOptions = await $.arrayToSlice<yarpc.CallOption>([yarpc.WithHeader("cadence-client-library-version", "1.3.0"), yarpc.WithHeader("cadence-client-feature-version", "1.7.0"), yarpc.WithHeader("cadence-client-name", "uber-go"), yarpc.WithHeader("cadence-caller-type", "sdk")])
	}
}

export function __goscript_get__yarpcCallOptions(): $.Slice<yarpc.CallOption> {
	if (((_yarpcCallOptions) as any) === undefined) {
		throw new globalThis.Error("goscript package variable _yarpcCallOptions read before initialization")
	}
	return _yarpcCallOptions
}

export function __goscript_set__yarpcCallOptions(__goscriptValue: $.Slice<yarpc.CallOption>): void {
	_yarpcCallOptions = __goscriptValue
}

export function fromInternalFeatureFlags(featureFlags: FeatureFlags): apiv1.FeatureFlags {
	// if we are using client-side-only flags in client.FeatureFlags;
	// don't include them in shared.FeatureFlags and drop them here
	return $.markAsStructValue(new apiv1.FeatureFlags({WorkflowExecutionAlreadyCompletedErrorEnabled: featureFlags.WorkflowExecutionAlreadyCompletedErrorEnabled, AutoforwardingEnabled: featureFlags.AutoforwardingEnabled}))
}

export async function featureFlagsHeader(featureFlags: FeatureFlags): globalThis.Promise<string> {
	let marshaler: $.VarRef<jsonpb.Marshaler> = $.varRef(new jsonpb.Marshaler(undefined, true))
	let flags = $.varRef(fromInternalFeatureFlags(featureFlags))
	let [serialized, err] = await marshaler.value.MarshalToString($.interfaceValue<proto.Message | null>(flags, "*apiv1.FeatureFlags", /* @__PURE__ */ $.pointerType("apiv1.FeatureFlags")))
	if (err != null) {
		// fail open silently
		return ""
	}
	return serialized
}

export async function getYarpcCallOptions(featureFlags: FeatureFlags): globalThis.Promise<$.Slice<yarpc.CallOption>> {
	return $.appendOne((await __goscript_init__yarpcCallOptions(), __goscript_get__yarpcCallOptions()), yarpc.WithHeader("cadence-client-feature-flags", await featureFlagsHeader(featureFlags)))
}

export function chanTimeout(timeout: time.Duration): ((builder: contextBuilder | $.VarRef<contextBuilder> | null) => void) | null {
	return $.functionValue((b: contextBuilder | $.VarRef<contextBuilder> | null): void => {
		$.pointerValue<contextBuilder>(b).Timeout = timeout
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.contextBuilder")], results: [] } as $.FunctionTypeInfo))
}

export async function newChannelContextForQuery(ctx: context.Context | null, featureFlags: FeatureFlags, options: $.Slice<((builder: contextBuilder | $.VarRef<contextBuilder> | null) => void) | null>): globalThis.Promise<[context.Context | null, context.CancelFunc | null, $.Slice<yarpc.CallOption>]> {
	return newChannelContextHelper(ctx, true, (featureFlags).clone(), options)
}

export async function newChannelContext(ctx: context.Context | null, featureFlags: FeatureFlags, options: $.Slice<((builder: contextBuilder | $.VarRef<contextBuilder> | null) => void) | null>): globalThis.Promise<[context.Context | null, context.CancelFunc | null, $.Slice<yarpc.CallOption>]> {
	return newChannelContextHelper(ctx, false, (featureFlags).clone(), options)
}

export async function newChannelContextHelper(ctx: context.Context | null, isQuery: boolean, featureFlags: FeatureFlags, options: $.Slice<((builder: contextBuilder | $.VarRef<contextBuilder> | null) => void) | null>): globalThis.Promise<[context.Context | null, context.CancelFunc | null, $.Slice<yarpc.CallOption>]> {
	let rpcTimeout = 10000000000n
	if (ctx != null) {
		// Set rpc timeout less than context timeout to allow for retries when call gets lost
		let now = $.markAsStructValue($.cloneStructValue(time.Now()))
		{
			let [expiration, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
			if (ok && $.markAsStructValue($.cloneStructValue(expiration)).After($.markAsStructValue($.cloneStructValue(now)))) {
				rpcTimeout = $.int64Div($.markAsStructValue($.cloneStructValue(expiration)).Sub($.markAsStructValue($.cloneStructValue(now))), 2n)
				// Make sure to not set rpc timeout lower than minRPCTimeout
				if (rpcTimeout < 1000000000n) {
					rpcTimeout = 1000000000n
				} else {
					if ((rpcTimeout > 5000000000n) && !isQuery) {
						rpcTimeout = 5000000000n
					} else {
						if ((rpcTimeout > 20000000000n) && isQuery) {
							rpcTimeout = 20000000000n
						}
					}
				}
			}
		}
	}
	let builder: contextBuilder | $.VarRef<contextBuilder> | null = new contextBuilder({Timeout: rpcTimeout})
	if (ctx != null) {
		$.pointerValue<contextBuilder>(builder).ParentContext = ctx
	}
	for (let __goscriptRangeTarget0 = options, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as ((builder: contextBuilder | $.VarRef<contextBuilder> | null) => void) | null)
		void (__goscriptAwait = opt!(builder), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	let __goscriptTuple0: any = (builder !== null && (builder as any).__isVarRef !== true && (builder as any).__goValue === undefined ? ((builder as any) as contextBuilder).Build() : contextBuilder.prototype.Build.call(builder))
	ctx = __goscriptTuple0[0]
	let cancelFn = __goscriptTuple0[1]

	return [ctx, cancelFn, await getYarpcCallOptions(featureFlags)]
}

export async function getWorkerIdentity(tasklistName: string): globalThis.Promise<string> {
	return fmt.Sprintf("%d@%s@%s@%s", $.basicInterfaceValue(os.Getpid(), "int"), getHostName(), tasklistName, await uuid.New())
}

export function getHostName(): string {
	let [hostName, err] = os.Hostname()
	if (err != null) {
		hostName = "UnKnown"
	}
	return hostName
}

export function activityTypePtr(v: __goscript_activity.ActivityType): s2.ActivityType | $.VarRef<s2.ActivityType> | null {
	return (() => { const __goscriptLiteralField0 = common.StringPtr(v.Name); return new s2.ActivityType({Name: __goscriptLiteralField0}) })()
}

export function flowWorkflowTypeFrom(__goscriptParam0: s2.WorkflowType): __goscript_workflow.WorkflowType {
	let v: $.VarRef<s2.WorkflowType> = $.varRef(__goscriptParam0)
	return (() => { const __goscriptLiteralField1 = v.value.GetName(); return new __goscript_workflow.WorkflowType({Name: __goscriptLiteralField1}, true) })()
}

export function workflowTypePtr(t: __goscript_workflow.WorkflowType): s2.WorkflowType | $.VarRef<s2.WorkflowType> | null {
	return (() => { const __goscriptLiteralField2 = common.StringPtr(t.Name); return new s2.WorkflowType({Name: __goscriptLiteralField2}) })()
}

export async function getErrorDetails(err: $.GoError, dataConverter: __goscript_encoded.DataConverter | null): globalThis.Promise<[string, $.Slice<number>]> {
	{
		const __goscriptTypeSwitchValue = err
		switch (true) {
			case $.typeAssert<__goscript_error.CustomError | $.VarRef<__goscript_error.CustomError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.CustomError")).ok:
				{
					let err: __goscript_error.CustomError | $.VarRef<__goscript_error.CustomError> | null = $.typeAssert<__goscript_error.CustomError | $.VarRef<__goscript_error.CustomError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.CustomError")).value
					let data: $.Slice<number> = null! as $.Slice<number>
					let err0: $.GoError = null! as $.GoError
					if (err == null) {
						return ["cadenceInternal:Generic", $.stringToBytes(await fmt.Sprintf("cadence received an invalid nil `%T`. this likely means you have a typed nil which is being converted into an `error` value: https://go.dev/doc/faq#nil_error", $.interfaceValue(err, "*internal.CustomError", /* @__PURE__ */ $.pointerType("internal.CustomError"))))]
					}
					{
						const __goscriptTypeSwitchValue = $.pointerValue<__goscript_error.CustomError>(err).details
						switch (true) {
							case $.typeAssert<__goscript_error.ErrorDetailsValues>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "internal.ErrorDetailsValues")).ok:
								{
									let details: __goscript_error.ErrorDetailsValues = $.typeAssert<__goscript_error.ErrorDetailsValues>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "internal.ErrorDetailsValues")).value
									let __goscriptTuple1: any = await __goscript_internal_worker.encodeArgs(dataConverter, details)
									data = __goscriptTuple1[0]
									err0 = __goscriptTuple1[1]
								}
								break
							case $.typeAssert<__goscript_workflow_testsuite.EncodedValues | $.VarRef<__goscript_workflow_testsuite.EncodedValues> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.EncodedValues")).ok:
								{
									let details: __goscript_workflow_testsuite.EncodedValues | $.VarRef<__goscript_workflow_testsuite.EncodedValues> | null = $.typeAssert<__goscript_workflow_testsuite.EncodedValues | $.VarRef<__goscript_workflow_testsuite.EncodedValues> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.EncodedValues")).value
									data = $.pointerValue<__goscript_workflow_testsuite.EncodedValues>(details).values
								}
								break
							default:
								{
									let details: any = __goscriptTypeSwitchValue
									$.panic("unknown error type")
								}
								break
						}
					}
					if (err0 != null) {
						$.panic((err0 as any))
					}
					return [(err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? ((err as any) as __goscript_error.CustomError).Reason() : __goscript_error.CustomError.prototype.Reason.call(err)), data]
				}
				break
			case $.typeAssert<__goscript_error.CanceledError | $.VarRef<__goscript_error.CanceledError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.CanceledError")).ok:
				{
					let err: __goscript_error.CanceledError | $.VarRef<__goscript_error.CanceledError> | null = $.typeAssert<__goscript_error.CanceledError | $.VarRef<__goscript_error.CanceledError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.CanceledError")).value
					let data: $.Slice<number> = null! as $.Slice<number>
					let err0: $.GoError = null! as $.GoError
					if (err == null) {
						// treat this as a failure, not a cancel, as it likely is not a real cancel
						return ["cadenceInternal:Generic", $.stringToBytes(await fmt.Sprintf("cadence received an invalid nil `%T`. this likely means you have a typed nil which is being converted into an `error` value: https://go.dev/doc/faq#nil_error", $.interfaceValue(err, "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError"))))]
					}
					{
						const __goscriptTypeSwitchValue = $.pointerValue<__goscript_error.CanceledError>(err).details
						switch (true) {
							case $.typeAssert<__goscript_error.ErrorDetailsValues>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "internal.ErrorDetailsValues")).ok:
								{
									let details: __goscript_error.ErrorDetailsValues = $.typeAssert<__goscript_error.ErrorDetailsValues>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "internal.ErrorDetailsValues")).value
									let __goscriptTuple2: any = await __goscript_internal_worker.encodeArgs(dataConverter, details)
									data = __goscriptTuple2[0]
									err0 = __goscriptTuple2[1]
								}
								break
							case $.typeAssert<__goscript_workflow_testsuite.EncodedValues | $.VarRef<__goscript_workflow_testsuite.EncodedValues> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.EncodedValues")).ok:
								{
									let details: __goscript_workflow_testsuite.EncodedValues | $.VarRef<__goscript_workflow_testsuite.EncodedValues> | null = $.typeAssert<__goscript_workflow_testsuite.EncodedValues | $.VarRef<__goscript_workflow_testsuite.EncodedValues> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.EncodedValues")).value
									data = $.pointerValue<__goscript_workflow_testsuite.EncodedValues>(details).values
								}
								break
							default:
								{
									let details: any = __goscriptTypeSwitchValue
									$.panic("unknown error type")
								}
								break
						}
					}
					if (err0 != null) {
						$.panic((err0 as any))
					}
					return ["cadenceInternal:Canceled", data]
				}
				break
			case $.typeAssert<__goscript_error.PanicError | $.VarRef<__goscript_error.PanicError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.PanicError")).ok:
				{
					let err: __goscript_error.PanicError | $.VarRef<__goscript_error.PanicError> | null = $.typeAssert<__goscript_error.PanicError | $.VarRef<__goscript_error.PanicError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.PanicError")).value
					if (err == null) {
						// treat this as a failure, not a panic, as it likely is not a real panic
						return ["cadenceInternal:Generic", $.stringToBytes(await fmt.Sprintf("cadence received an invalid nil `%T`. this likely means you have a typed nil which is being converted into an `error` value: https://go.dev/doc/faq#nil_error", $.interfaceValue(err, "*internal.PanicError", /* @__PURE__ */ $.pointerType("internal.PanicError"))))]
					}
					let __goscriptTuple3: any = await __goscript_internal_worker.encodeArgs(dataConverter, $.arrayToSlice<any>([await (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? ((err as any) as __goscript_error.PanicError).Error() : __goscript_error.PanicError.prototype.Error.call(err)), (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? ((err as any) as __goscript_error.PanicError).StackTrace() : __goscript_error.PanicError.prototype.StackTrace.call(err))]))
					let data: $.Slice<number> = __goscriptTuple3[0]
					let err0 = __goscriptTuple3[1]
					if (err0 != null) {
						$.panic((err0 as any))
					}
					return ["cadenceInternal:Panic", data]
				}
				break
			case $.typeAssert<__goscript_error.TimeoutError | $.VarRef<__goscript_error.TimeoutError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.TimeoutError")).ok:
				{
					let err: __goscript_error.TimeoutError | $.VarRef<__goscript_error.TimeoutError> | null = $.typeAssert<__goscript_error.TimeoutError | $.VarRef<__goscript_error.TimeoutError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.TimeoutError")).value
					let data: $.Slice<number> = null! as $.Slice<number>
					let err0: $.GoError = null! as $.GoError
					if (err == null) {
						// treat this as a failure, not a timeout, as it likely is not a real timeout
						return ["cadenceInternal:Generic", $.stringToBytes(await fmt.Sprintf("cadence received an invalid nil `%T`. this likely means you have a typed nil which is being converted into an `error` value: https://go.dev/doc/faq#nil_error", $.interfaceValue(err, "*internal.TimeoutError", /* @__PURE__ */ $.pointerType("internal.TimeoutError"))))]
					}
					{
						const __goscriptTypeSwitchValue = $.pointerValue<__goscript_error.TimeoutError>(err).details
						switch (true) {
							case $.typeAssert<__goscript_error.ErrorDetailsValues>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "internal.ErrorDetailsValues")).ok:
								{
									let details: __goscript_error.ErrorDetailsValues = $.typeAssert<__goscript_error.ErrorDetailsValues>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "internal.ErrorDetailsValues")).value
									let __goscriptTuple4: any = await __goscript_internal_worker.encodeArgs(dataConverter, details)
									data = __goscriptTuple4[0]
									err0 = __goscriptTuple4[1]
								}
								break
							case $.typeAssert<__goscript_workflow_testsuite.EncodedValues | $.VarRef<__goscript_workflow_testsuite.EncodedValues> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.EncodedValues")).ok:
								{
									let details: __goscript_workflow_testsuite.EncodedValues | $.VarRef<__goscript_workflow_testsuite.EncodedValues> | null = $.typeAssert<__goscript_workflow_testsuite.EncodedValues | $.VarRef<__goscript_workflow_testsuite.EncodedValues> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("internal.EncodedValues")).value
									data = $.pointerValue<__goscript_workflow_testsuite.EncodedValues>(details).values
								}
								break
							default:
								{
									let details: any = __goscriptTypeSwitchValue
									$.panic("unknown error type")
								}
								break
						}
					}
					if (err0 != null) {
						$.panic((err0 as any))
					}
					return [await fmt.Sprintf("%v %v", "cadenceInternal:Timeout", $.namedValueInterfaceValue<any>($.pointerValue<__goscript_error.TimeoutError>(err).timeoutType, "shared.TimeoutType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), data]
				}
				break
			default:
				{
					let err: any = __goscriptTypeSwitchValue
					return ["cadenceInternal:Generic", $.stringToBytes((__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]
				}
				break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function getFailureOptions(err: $.GoError): s2.FailureOptions | $.VarRef<s2.FailureOptions> | null {
	{
		let __goscriptTuple5: any = $.typeAssertTuple<__goscript_error.CustomError | $.VarRef<__goscript_error.CustomError> | null>(err, /* @__PURE__ */ $.pointerType("internal.CustomError"))
		let asCustom: __goscript_error.CustomError | $.VarRef<__goscript_error.CustomError> | null = __goscriptTuple5[0]
		let ok = __goscriptTuple5[1]
		if (ok) {
			return (() => { const __goscriptLiteralField3 = s2.FailureCategory_Ptr((asCustom !== null && (asCustom as any).__isVarRef !== true && (asCustom as any).__goValue === undefined ? ((asCustom as any) as __goscript_error.CustomError).GetFailureCategory() : __goscript_error.CustomError.prototype.GetFailureCategory.call(asCustom))); const __goscriptLiteralField4 = __goscript_internal_schedule_convert_thrift.durationToThriftSeconds((asCustom !== null && (asCustom as any).__isVarRef !== true && (asCustom as any).__goValue === undefined ? ((asCustom as any) as __goscript_error.CustomError).GetNextRetryDelay() : __goscript_error.CustomError.prototype.GetNextRetryDelay.call(asCustom))); return new s2.FailureOptions({FailureCategory: __goscriptLiteralField3, NextRetryIntervalSeconds: __goscriptLiteralField4}) })()
		}
	}
	return null
}

export async function constructError(reason: string, details: $.Slice<number>, dataConverter: __goscript_encoded.DataConverter | null): globalThis.Promise<$.GoError> {
	if (strings.HasPrefix(reason, "cadenceInternal:Timeout")) {
		let __goscriptShadow0 = details
		let __goscriptShadow1 = __goscript_workflow_testsuite.newEncodedValues(__goscriptShadow0, dataConverter)
		let __goscriptTuple6: any = getTimeoutTypeFromErrReason(reason)
		let timeoutType = $.varRef(__goscriptTuple6[0])
		let err = __goscriptTuple6[1]
		if (err != null) {
			// prior client version uses details to indicate timeoutType
			{
				let __goscriptShadow2 = (__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<__goscript_encoded.Values, null>) : $.pointerValue<Exclude<__goscript_encoded.Values, null>>(__goscriptShadow1)).Get($.arrayToSlice<any>([$.namedValueInterfaceValue<any>(timeoutType, "*shared.TimeoutType", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (__goscriptShadow2 != null) {
					$.panic((__goscriptShadow2 as any))
				}
			}
			return $.interfaceValue<$.GoError>(__goscript_error.NewTimeoutError(timeoutType.value, null), "*internal.TimeoutError", /* @__PURE__ */ $.pointerType("internal.TimeoutError"))
		}
		return $.interfaceValue<$.GoError>(__goscript_error.NewTimeoutError(timeoutType.value, $.arrayToSlice<any>([(__goscriptShadow1 as any)])), "*internal.TimeoutError", /* @__PURE__ */ $.pointerType("internal.TimeoutError"))
	}

	switch (reason) {
		case "cadenceInternal:Panic":
		{
			let msg: $.VarRef<string> = $.varRef("")
			let st: $.VarRef<string> = $.varRef("")
			let __goscriptShadow3 = details
			let __goscriptShadow4 = __goscript_workflow_testsuite.newEncodedValues(__goscriptShadow3, dataConverter)
			void (__goscriptAwait = (__goscriptShadow4 !== null && (__goscriptShadow4 as any).__isVarRef !== true && (__goscriptShadow4 as any).__goValue === undefined ? (__goscriptShadow4 as Exclude<__goscript_encoded.Values, null>) : $.pointerValue<Exclude<__goscript_encoded.Values, null>>(__goscriptShadow4)).Get($.arrayToSlice<any>([$.interfaceValue(msg, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))), $.interfaceValue(st, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return $.interfaceValue<$.GoError>(__goscript_error.newPanicError(msg.value, st.value), "*internal.PanicError", /* @__PURE__ */ $.pointerType("internal.PanicError"))
			break
		}
		case "cadenceInternal:Generic":
		{
			return $.interfaceValue<$.GoError>(new __goscript_error.GenericError({err: $.bytesToString(details)}), "*internal.GenericError", /* @__PURE__ */ $.pointerType("internal.GenericError"))
			break
		}
		case "cadenceInternal:Canceled":
		{
			let __goscriptShadow5 = details
			let __goscriptShadow6 = __goscript_workflow_testsuite.newEncodedValues(__goscriptShadow5, dataConverter)
			return $.interfaceValue<$.GoError>(__goscript_error.NewCanceledError($.arrayToSlice<any>([(__goscriptShadow6 as any)])), "*internal.CanceledError", /* @__PURE__ */ $.pointerType("internal.CanceledError"))
			break
		}
		default:
		{
			let __goscriptShadow7 = details
			let __goscriptShadow8 = __goscript_workflow_testsuite.newEncodedValues(__goscriptShadow7, dataConverter)
			let err: __goscript_error.CustomError | $.VarRef<__goscript_error.CustomError> | null = await __goscript_error.NewCustomError(reason, $.arrayToSlice<any>([(__goscriptShadow8 as any)]))
			return $.interfaceValue<$.GoError>(err, "*internal.CustomError", /* @__PURE__ */ $.pointerType("internal.CustomError"))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function getKillSignal(): globalThis.Promise<$.Channel<os.Signal | null> | null> {
	let c: $.Channel<os.Signal | null> | null = $.makeChannel<os.Signal | null>(1, null! as os.Signal | null, "both")
	await signal.Notify(c, $.arrayToSlice<os.Signal | null>([$.namedValueInterfaceValue<os.Signal | null>(syscall.SIGINT, "syscall.Signal", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()), $.namedValueInterfaceValue<os.Signal | null>(syscall.SIGTERM, "syscall.Signal", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8())]))
	return c
}

export async function getMetricsScopeForActivity(ts: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null, workflowType: string, activityType: string): globalThis.Promise<tally.Scope | null> {
	return (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as metrics.TaggedScope).GetTaggedScope($.arrayToSlice<string>(["WorkflowType", workflowType, "ActivityType", activityType])) : metrics.TaggedScope.prototype.GetTaggedScope.call(ts, $.arrayToSlice<string>(["WorkflowType", workflowType, "ActivityType", activityType])))
}

export async function getMetricsScopeForLocalActivity(ts: metrics.TaggedScope | $.VarRef<metrics.TaggedScope> | null, workflowType: string, localActivityType: string): globalThis.Promise<tally.Scope | null> {
	return (ts !== null && (ts as any).__isVarRef !== true && (ts as any).__goValue === undefined ? ((ts as any) as metrics.TaggedScope).GetTaggedScope($.arrayToSlice<string>(["WorkflowType", workflowType, "LocalActivityType", localActivityType])) : metrics.TaggedScope.prototype.GetTaggedScope.call(ts, $.arrayToSlice<string>(["WorkflowType", workflowType, "LocalActivityType", localActivityType])))
}

export function getTimeoutTypeFromErrReason(reason: string): [s2.TimeoutType, $.GoError] {
	let timeoutTypeStr = $.sliceStringOrBytes(reason, strings.Index(reason, " ") + 1, undefined)
	let timeoutType: $.VarRef<s2.TimeoutType> = $.varRef(0)
	{
		let err = s2.TimeoutType_UnmarshalText(timeoutType, $.stringToBytes(timeoutTypeStr))
		if (err != null) {
			// this happens when the timeout error reason is constructed by an prior constructed by prior client version
			return [0, err]
		}
	}
	return [timeoutType.value, null]
}

export async function estimateHistorySize(logger: zap.Logger | $.VarRef<zap.Logger> | null, event: s2.HistoryEvent | $.VarRef<s2.HistoryEvent> | null): globalThis.Promise<number> {
	const event$: s2.HistoryEvent = event == null ? $.pointerTarget<s2.HistoryEvent>(event) : (event as any).__isVarRef === true ? (event as any).value : (event as any).__goValue === undefined ? (event as any) : $.pointerTarget<s2.HistoryEvent>(event)
	let sum = 400
	switch ((event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as s2.HistoryEvent).GetEventType() : s2.HistoryEvent.prototype.GetEventType.call(event))) {
		case s2.EventTypeWorkflowExecutionStarted:
		{
			if ((event$ as s2.HistoryEvent).WorkflowExecutionStartedEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.WorkflowExecutionStartedEventAttributes>((event$ as s2.HistoryEvent).WorkflowExecutionStartedEventAttributes).Input))
				sum = sum + ($.sliceLen($.pointerValue<s2.WorkflowExecutionStartedEventAttributes>((event$ as s2.HistoryEvent).WorkflowExecutionStartedEventAttributes).ContinuedFailureDetails))
				sum = sum + ($.sliceLen($.pointerValue<s2.WorkflowExecutionStartedEventAttributes>((event$ as s2.HistoryEvent).WorkflowExecutionStartedEventAttributes).LastCompletionResult))
				sum = sum + (sizeOf(s2.Memo.prototype.GetFields.call($.pointerValue<s2.WorkflowExecutionStartedEventAttributes>((event$ as s2.HistoryEvent).WorkflowExecutionStartedEventAttributes).Memo)))
				sum = sum + (sizeOf(s2.Header.prototype.GetFields.call($.pointerValue<s2.WorkflowExecutionStartedEventAttributes>((event$ as s2.HistoryEvent).WorkflowExecutionStartedEventAttributes).Header)))
				sum = sum + (sizeOf(s2.SearchAttributes.prototype.GetIndexedFields.call($.pointerValue<s2.WorkflowExecutionStartedEventAttributes>((event$ as s2.HistoryEvent).WorkflowExecutionStartedEventAttributes).SearchAttributes)))
			}
			break
		}
		case s2.EventTypeWorkflowExecutionCompleted:
		{
			if ((event$ as s2.HistoryEvent).WorkflowExecutionCompletedEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.WorkflowExecutionCompletedEventAttributes>((event$ as s2.HistoryEvent).WorkflowExecutionCompletedEventAttributes).Result))
			}
			break
		}
		case s2.EventTypeWorkflowExecutionSignaled:
		{
			if ((event$ as s2.HistoryEvent).WorkflowExecutionSignaledEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.WorkflowExecutionSignaledEventAttributes>((event$ as s2.HistoryEvent).WorkflowExecutionSignaledEventAttributes).Input))
			}
			break
		}
		case s2.EventTypeWorkflowExecutionFailed:
		{
			if ((event$ as s2.HistoryEvent).WorkflowExecutionFailedEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.WorkflowExecutionFailedEventAttributes>((event$ as s2.HistoryEvent).WorkflowExecutionFailedEventAttributes).Details))
			}
			break
		}
		case s2.EventTypeDecisionTaskStarted:
		{
			if ((event$ as s2.HistoryEvent).DecisionTaskStartedEventAttributes != null) {
				sum = sum + (getLengthOfStringPointer($.pointerValue<s2.DecisionTaskStartedEventAttributes>((event$ as s2.HistoryEvent).DecisionTaskStartedEventAttributes).Identity))
			}
			break
		}
		case s2.EventTypeDecisionTaskCompleted:
		{
			if ((event$ as s2.HistoryEvent).DecisionTaskCompletedEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.DecisionTaskCompletedEventAttributes>((event$ as s2.HistoryEvent).DecisionTaskCompletedEventAttributes).ExecutionContext))
				sum = sum + (getLengthOfStringPointer($.pointerValue<s2.DecisionTaskCompletedEventAttributes>((event$ as s2.HistoryEvent).DecisionTaskCompletedEventAttributes).Identity))
				sum = sum + (getLengthOfStringPointer($.pointerValue<s2.DecisionTaskCompletedEventAttributes>((event$ as s2.HistoryEvent).DecisionTaskCompletedEventAttributes).BinaryChecksum))
			}
			break
		}
		case s2.EventTypeDecisionTaskFailed:
		{
			if ((event$ as s2.HistoryEvent).DecisionTaskFailedEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.DecisionTaskFailedEventAttributes>((event$ as s2.HistoryEvent).DecisionTaskFailedEventAttributes).Details))
			}
			break
		}
		case s2.EventTypeActivityTaskScheduled:
		{
			if ((event$ as s2.HistoryEvent).ActivityTaskScheduledEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.ActivityTaskScheduledEventAttributes>((event$ as s2.HistoryEvent).ActivityTaskScheduledEventAttributes).Input))
				sum = sum + (sizeOf(s2.Header.prototype.GetFields.call($.pointerValue<s2.ActivityTaskScheduledEventAttributes>((event$ as s2.HistoryEvent).ActivityTaskScheduledEventAttributes).Header)))
			}
			break
		}
		case s2.EventTypeActivityTaskStarted:
		{
			if ((event$ as s2.HistoryEvent).ActivityTaskStartedEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.ActivityTaskStartedEventAttributes>((event$ as s2.HistoryEvent).ActivityTaskStartedEventAttributes).LastFailureDetails))
			}
			break
		}
		case s2.EventTypeActivityTaskCompleted:
		{
			if ((event$ as s2.HistoryEvent).ActivityTaskCompletedEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.ActivityTaskCompletedEventAttributes>((event$ as s2.HistoryEvent).ActivityTaskCompletedEventAttributes).Result))
				sum = sum + (getLengthOfStringPointer($.pointerValue<s2.ActivityTaskCompletedEventAttributes>((event$ as s2.HistoryEvent).ActivityTaskCompletedEventAttributes).Identity))
			}
			break
		}
		case s2.EventTypeActivityTaskFailed:
		{
			if ((event$ as s2.HistoryEvent).ActivityTaskFailedEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.ActivityTaskFailedEventAttributes>((event$ as s2.HistoryEvent).ActivityTaskFailedEventAttributes).Details))
			}
			break
		}
		case s2.EventTypeActivityTaskTimedOut:
		{
			if ((event$ as s2.HistoryEvent).ActivityTaskTimedOutEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.ActivityTaskTimedOutEventAttributes>((event$ as s2.HistoryEvent).ActivityTaskTimedOutEventAttributes).Details))
				sum = sum + ($.sliceLen($.pointerValue<s2.ActivityTaskTimedOutEventAttributes>((event$ as s2.HistoryEvent).ActivityTaskTimedOutEventAttributes).LastFailureDetails))
			}
			break
		}
		case s2.EventTypeActivityTaskCanceled:
		{
			if ((event$ as s2.HistoryEvent).ActivityTaskCanceledEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.ActivityTaskCanceledEventAttributes>((event$ as s2.HistoryEvent).ActivityTaskCanceledEventAttributes).Details))
			}
			break
		}
		case s2.EventTypeMarkerRecorded:
		{
			if ((event$ as s2.HistoryEvent).MarkerRecordedEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.MarkerRecordedEventAttributes>((event$ as s2.HistoryEvent).MarkerRecordedEventAttributes).Details))
			}
			break
		}
		case s2.EventTypeWorkflowExecutionTerminated:
		{
			if ((event$ as s2.HistoryEvent).WorkflowExecutionTerminatedEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.WorkflowExecutionTerminatedEventAttributes>((event$ as s2.HistoryEvent).WorkflowExecutionTerminatedEventAttributes).Details))
			}
			break
		}
		case s2.EventTypeWorkflowExecutionCanceled:
		{
			if ((event$ as s2.HistoryEvent).WorkflowExecutionCanceledEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.WorkflowExecutionCanceledEventAttributes>((event$ as s2.HistoryEvent).WorkflowExecutionCanceledEventAttributes).Details))
			}
			break
		}
		case s2.EventTypeWorkflowExecutionContinuedAsNew:
		{
			if ((event$ as s2.HistoryEvent).WorkflowExecutionContinuedAsNewEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.WorkflowExecutionContinuedAsNewEventAttributes>((event$ as s2.HistoryEvent).WorkflowExecutionContinuedAsNewEventAttributes).Input))
				sum = sum + ($.sliceLen($.pointerValue<s2.WorkflowExecutionContinuedAsNewEventAttributes>((event$ as s2.HistoryEvent).WorkflowExecutionContinuedAsNewEventAttributes).FailureDetails))
				sum = sum + ($.sliceLen($.pointerValue<s2.WorkflowExecutionContinuedAsNewEventAttributes>((event$ as s2.HistoryEvent).WorkflowExecutionContinuedAsNewEventAttributes).LastCompletionResult))
				sum = sum + (sizeOf(s2.Memo.prototype.GetFields.call($.pointerValue<s2.WorkflowExecutionContinuedAsNewEventAttributes>((event$ as s2.HistoryEvent).WorkflowExecutionContinuedAsNewEventAttributes).Memo)))
				sum = sum + (sizeOf(s2.Header.prototype.GetFields.call($.pointerValue<s2.WorkflowExecutionContinuedAsNewEventAttributes>((event$ as s2.HistoryEvent).WorkflowExecutionContinuedAsNewEventAttributes).Header)))
				sum = sum + (sizeOf(s2.SearchAttributes.prototype.GetIndexedFields.call($.pointerValue<s2.WorkflowExecutionContinuedAsNewEventAttributes>((event$ as s2.HistoryEvent).WorkflowExecutionContinuedAsNewEventAttributes).SearchAttributes)))
			}
			break
		}
		case s2.EventTypeStartChildWorkflowExecutionInitiated:
		{
			if ((event$ as s2.HistoryEvent).StartChildWorkflowExecutionInitiatedEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.StartChildWorkflowExecutionInitiatedEventAttributes>((event$ as s2.HistoryEvent).StartChildWorkflowExecutionInitiatedEventAttributes).Input))
				sum = sum + ($.sliceLen($.pointerValue<s2.StartChildWorkflowExecutionInitiatedEventAttributes>((event$ as s2.HistoryEvent).StartChildWorkflowExecutionInitiatedEventAttributes).Control))
				sum = sum + (sizeOf(s2.Memo.prototype.GetFields.call($.pointerValue<s2.StartChildWorkflowExecutionInitiatedEventAttributes>((event$ as s2.HistoryEvent).StartChildWorkflowExecutionInitiatedEventAttributes).Memo)))
				sum = sum + (sizeOf(s2.Header.prototype.GetFields.call($.pointerValue<s2.StartChildWorkflowExecutionInitiatedEventAttributes>((event$ as s2.HistoryEvent).StartChildWorkflowExecutionInitiatedEventAttributes).Header)))
				sum = sum + (sizeOf(s2.SearchAttributes.prototype.GetIndexedFields.call($.pointerValue<s2.StartChildWorkflowExecutionInitiatedEventAttributes>((event$ as s2.HistoryEvent).StartChildWorkflowExecutionInitiatedEventAttributes).SearchAttributes)))
			}
			break
		}
		case s2.EventTypeChildWorkflowExecutionCompleted:
		{
			if ((event$ as s2.HistoryEvent).ChildWorkflowExecutionCompletedEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.ChildWorkflowExecutionCompletedEventAttributes>((event$ as s2.HistoryEvent).ChildWorkflowExecutionCompletedEventAttributes).Result))
			}
			break
		}
		case s2.EventTypeChildWorkflowExecutionFailed:
		{
			if ((event$ as s2.HistoryEvent).ChildWorkflowExecutionFailedEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.ChildWorkflowExecutionFailedEventAttributes>((event$ as s2.HistoryEvent).ChildWorkflowExecutionFailedEventAttributes).Details))
				sum = sum + (getLengthOfStringPointer($.pointerValue<s2.ChildWorkflowExecutionFailedEventAttributes>((event$ as s2.HistoryEvent).ChildWorkflowExecutionFailedEventAttributes).Reason))
			}
			break
		}
		case s2.EventTypeChildWorkflowExecutionCanceled:
		{
			if ((event$ as s2.HistoryEvent).ChildWorkflowExecutionCanceledEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.ChildWorkflowExecutionCanceledEventAttributes>((event$ as s2.HistoryEvent).ChildWorkflowExecutionCanceledEventAttributes).Details))
			}
			break
		}
		case s2.EventTypeSignalExternalWorkflowExecutionInitiated:
		{
			if ((event$ as s2.HistoryEvent).SignalExternalWorkflowExecutionInitiatedEventAttributes != null) {
				sum = sum + ($.sliceLen($.pointerValue<s2.SignalExternalWorkflowExecutionInitiatedEventAttributes>((event$ as s2.HistoryEvent).SignalExternalWorkflowExecutionInitiatedEventAttributes).Control))
				sum = sum + ($.sliceLen($.pointerValue<s2.SignalExternalWorkflowExecutionInitiatedEventAttributes>((event$ as s2.HistoryEvent).SignalExternalWorkflowExecutionInitiatedEventAttributes).Input))
			}
			break
		}
		default:
		{
			await zap.Logger.prototype.Debug.call(logger, "unsupported event type for history size estimation", $.arrayToSlice<zap.Field>([zap.String("Event Type", await s2.EventType_String((event !== null && (event as any).__isVarRef !== true && (event as any).__goValue === undefined ? ((event as any) as s2.HistoryEvent).GetEventType() : s2.HistoryEvent.prototype.GetEventType.call(event))))]))
			break
		}
	}

	return sum
}

export function sizeOf(o: globalThis.Map<string, $.Slice<number>> | null): number {
	let sum = 0
	for (const [k, v] of o?.entries() ?? []) {
		sum = sum + ($.stringLen(k) + $.sliceLen(v))
	}
	return sum
}

export function getLengthOfStringPointer(s: $.VarRef<string> | null): number {
	if (s == null) {
		return 0
	}
	return $.stringLen($.pointerValue<string>(s))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Encode: (receiver: any, ...args: any[]) => (s2.TimeoutType_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (s2.TimeoutType_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (s2.TimeoutType_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (s2.TimeoutType_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (s2.TimeoutType_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (s2.TimeoutType_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (s2.TimeoutType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (s2.TimeoutType_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "shared.TimeoutType"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shared.TimeoutType")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.TimeoutType"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Decode: (receiver: any, ...args: any[]) => (s2.TimeoutType_Decode as any)(receiver, ...$.stripGenericTypeArgs(args)), Encode: (receiver: any, ...args: any[]) => (s2.TimeoutType_Encode as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (s2.TimeoutType_Equals as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), FromWire: (receiver: any, ...args: any[]) => (s2.TimeoutType_FromWire as any)(receiver, ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (s2.TimeoutType_MarshalJSON as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (s2.TimeoutType_MarshalLogObject as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (s2.TimeoutType_MarshalText as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (s2.TimeoutType_Ptr as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (s2.TimeoutType_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (s2.TimeoutType_ToWire as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), UnmarshalJSON: (receiver: any, ...args: any[]) => (s2.TimeoutType_UnmarshalJSON as any)(receiver, ...$.stripGenericTypeArgs(args)), UnmarshalText: (receiver: any, ...args: any[]) => (s2.TimeoutType_UnmarshalText as any)(receiver, ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.TimeoutType")))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Decode", [["sr", "stream.Reader"]], ["error"]), $.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shared.TimeoutType")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("FromWire", [["w", "wire.Value"]], ["error"]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.TimeoutType"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"]), $.methodSignature("UnmarshalJSON", [["text", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("UnmarshalText", [["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({Signal: (receiver: any, ...args: any[]) => (syscall.Signal_Signal as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (syscall.Signal_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.basicType("int", "syscall.Signal"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("Signal"), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
