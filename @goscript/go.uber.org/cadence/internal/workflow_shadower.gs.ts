// Generated file based on workflow_shadower.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as clock2 from "@goscript/github.com/facebookgo/clock/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as shadower from "@goscript/go.uber.org/cadence/.gen/go/shadower/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as util from "@goscript/go.uber.org/cadence/internal/common/util/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import type * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import * as __goscript_internal_logging_tags from "./internal_logging_tags.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import type * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_query_builder from "./query_builder.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_replayer from "./workflow_replayer.gs.ts"

import * as __goscript_workflow_shadower_activities from "./workflow_shadower_activities.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/facebookgo/clock/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shadower/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/cadence/internal/common/util/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "./activity.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./headers.gs.ts"
import "./interceptors.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_logging_tags.gs.ts"
import "./internal_utils.gs.ts"
import "./internal_workflow.gs.ts"
import "./query_builder.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./workflow.gs.ts"
import "./workflow_replayer.gs.ts"
import "./workflow_shadower_activities.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.ShadowOptions", "internal.TimeFilter", "internal.ShadowMode", "internal.ShadowExitCondition", "internal.WorkflowShadower"])

export type ShadowMode = number

$.registerNamedValueType(
	"internal.ShadowMode",
	{toThriftPtr: (receiver: any, ...args: any[]) => (ShadowMode_toThriftPtr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("toThriftPtr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shadower.Mode"))])]
);

$.registerNamedValueType(
	"*internal.ShadowMode",
	{toThriftPtr: (receiver: any, ...args: any[]) => (ShadowMode_toThriftPtr as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("toThriftPtr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shadower.Mode"))])]
);

export class TimeFilter {
	public get MinTimestamp(): time.Time {
		return this._fields.MinTimestamp
	}

	public set MinTimestamp(value: time.Time) {
		this._fields.MinTimestamp = value
	}

	public get MaxTimestamp(): time.Time {
		return this._fields.MaxTimestamp
	}

	public set MaxTimestamp(value: time.Time) {
		this._fields.MaxTimestamp = value
	}

	public _fields: {
		MinTimestamp: time.Time
		MaxTimestamp: time.Time
	}

	constructor(init?: Partial<{MinTimestamp?: time.Time, MaxTimestamp?: time.Time}>, __goscriptValue?: boolean) {
		this._fields = {
			MinTimestamp: init?.MinTimestamp ? $.markAsStructValue($.cloneStructValue(init.MinTimestamp)) : $.markAsStructValue(new time.Time()),
			MaxTimestamp: init?.MaxTimestamp ? $.markAsStructValue($.cloneStructValue(init.MaxTimestamp)) : $.markAsStructValue(new time.Time())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TimeFilter {
		return new TimeFilter(this, true)
	}

	public __goscriptAssign(source: TimeFilter): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.MinTimestamp, values.MinTimestamp)
		$.assignStruct(target.MaxTimestamp, values.MaxTimestamp)
	}

	public isEmpty(): boolean {
		const t: TimeFilter | $.VarRef<TimeFilter> | null = this;
		const t$: TimeFilter = t == null ? $.pointerTarget<TimeFilter>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TimeFilter>(t)
		if (t == null) {
			return true
		}

		return $.markAsStructValue($.cloneStructValue((t$ as TimeFilter).MinTimestamp)).IsZero() && $.markAsStructValue($.cloneStructValue((t$ as TimeFilter).MaxTimestamp)).IsZero()
	}

	public validateAndPopulateFields(): $.GoError {
		let t: TimeFilter | $.VarRef<TimeFilter> | null = this;
		const t$: TimeFilter = t == null ? $.pointerTarget<TimeFilter>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TimeFilter>(t)
		if ($.markAsStructValue($.cloneStructValue((t$ as TimeFilter).MaxTimestamp)).IsZero()) {
			$.assignStruct((t$ as TimeFilter).MaxTimestamp, __goscript_query_builder.maxTimestamp)
		}

		if ($.markAsStructValue($.cloneStructValue((t$ as TimeFilter).MaxTimestamp)).Before($.markAsStructValue($.cloneStructValue((t$ as TimeFilter).MinTimestamp)))) {
			return errors.New("maxTimestamp should be after minTimestamp")
		}

		return null
	}

	static __typeInfo = $.registerStructType(
		"internal.TimeFilter",
		() => new TimeFilter(),
		() => [$.methodSignature("isEmpty", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("validateAndPopulateFields", [], ["error"], true)],
		TimeFilter,
		() => [/* @__PURE__ */ $.structField("MinTimestamp", "time.Time", [0], 0, true), /* @__PURE__ */ $.structField("MaxTimestamp", "time.Time", [1], 24, true)]
	)
}

export class ShadowExitCondition {
	// Optional: Expiration interval for shadowing.
	// Shadowing will exit when this interval has passed.
	// default: no expiration interval
	public get ExpirationInterval(): time.Duration {
		return this._fields.ExpirationInterval
	}

	public set ExpirationInterval(value: time.Duration) {
		this._fields.ExpirationInterval = value
	}

	// Optional: Target number of shadowed workflows.
	// Shadowing will exit after this number is reached.
	// default: no limit on shadow count
	public get ShadowCount(): number {
		return this._fields.ShadowCount
	}

	public set ShadowCount(value: number) {
		this._fields.ShadowCount = value
	}

	public _fields: {
		ExpirationInterval: time.Duration
		ShadowCount: number
	}

	constructor(init?: Partial<{ExpirationInterval?: time.Duration, ShadowCount?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ExpirationInterval: init?.ExpirationInterval ?? (0n as time.Duration),
			ShadowCount: init?.ShadowCount ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ShadowExitCondition {
		return new ShadowExitCondition(this, true)
	}

	public __goscriptAssign(source: ShadowExitCondition): void {
		const target = this._fields
		const values = source._fields
		target.ExpirationInterval = values.ExpirationInterval
		target.ShadowCount = values.ShadowCount
	}

	public toThriftPtr(): shadower.ExitCondition | $.VarRef<shadower.ExitCondition> | null {
		const e = this;
		return (() => { const __goscriptLiteralField0 = common.Int32Ptr($.int(e.ShadowCount, 32)); const __goscriptLiteralField1 = common.Int32Ptr($.int(time.Duration_Seconds(e.ExpirationInterval), 32)); return new shadower.ExitCondition({ShadowCount: __goscriptLiteralField0, ExpirationIntervalInSeconds: __goscriptLiteralField1}) })()
	}

	static __typeInfo = $.registerStructType(
		"internal.ShadowExitCondition",
		() => new ShadowExitCondition(),
		() => [$.methodSignature("toThriftPtr", [], [/* @__PURE__ */ $.pointerType("shadower.ExitCondition")])],
		ShadowExitCondition,
		() => [/* @__PURE__ */ $.structField("ExpirationInterval", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, true), /* @__PURE__ */ $.structField("ShadowCount", /* @__PURE__ */ $.basicType("int"), [1], 8, true)]
	)
}

export class ShadowOptions {
	// Optional: Workflow visibility query for getting workflows that should be replayed
	// if specified, WorkflowTypes, WorkflowStatus, WorkflowStartTimeFilter fields must not be specified.
	// default: empty query, which matches all workflows
	public get WorkflowQuery(): string {
		return this._fields.WorkflowQuery
	}

	public set WorkflowQuery(value: string) {
		this._fields.WorkflowQuery = value
	}

	// Optional: A list of workflow type names.
	// The list will be used to construct WorkflowQuery. Only workflows with types listed will be replayed.
	// default: empty list, which matches all workflow types
	public get WorkflowTypes(): $.Slice<string> {
		return this._fields.WorkflowTypes
	}

	public set WorkflowTypes(value: $.Slice<string>) {
		this._fields.WorkflowTypes = value
	}

	// Optional: A list of workflow type names that need to be excluded in the query.
	// The list will be used to construct WorkflowQuery.The listed workflow types will be excluded from replay.
	// default: empty list, which matches all workflow types
	public get ExcludeTypes(): $.Slice<string> {
		return this._fields.ExcludeTypes
	}

	public set ExcludeTypes(value: $.Slice<string>) {
		this._fields.ExcludeTypes = value
	}

	// Optional: A list of workflow status.
	// The list will be used to construct WorkflowQuery. Only workflows with status listed will be replayed.
	// accepted values (case-insensitive): OPEN, CLOSED, ALL, COMPLETED, FAILED, CANCELED, TERMINATED, CONTINUED_AS_NEW, TIMED_OUT
	// default: OPEN, which matches only open workflows
	public get WorkflowStatus(): $.Slice<string> {
		return this._fields.WorkflowStatus
	}

	public set WorkflowStatus(value: $.Slice<string>) {
		this._fields.WorkflowStatus = value
	}

	// Optional: Min and Max workflow start timestamp.
	// Timestamps will be used to construct WorkflowQuery. Only workflows started within the time range will be replayed.
	// default: no time filter, which matches all workflow start timestamp
	public get WorkflowStartTimeFilter(): TimeFilter {
		return this._fields.WorkflowStartTimeFilter
	}

	public set WorkflowStartTimeFilter(value: TimeFilter) {
		this._fields.WorkflowStartTimeFilter = value
	}

	// Optional: Min and Max workflow close timestamp.
	// Timestamps will be used to construct WorkflowQuery. Only workflows closed within the time range will be replayed. If this filter is being used along with the thee StartTime filter then make sure the Min Close time stamp
	// is within the range of Start timestamp.
	// default: no time filter, which matches all workflow closed timestamp
	public get WorkflowCloseTimeFilter(): TimeFilter {
		return this._fields.WorkflowCloseTimeFilter
	}

	public set WorkflowCloseTimeFilter(value: TimeFilter) {
		this._fields.WorkflowCloseTimeFilter = value
	}

	// Optional: sampling rate for the workflows matches WorkflowQuery
	// only sampled workflows will be replayed
	// default: 1.0
	public get SamplingRate(): number {
		return this._fields.SamplingRate
	}

	public set SamplingRate(value: number) {
		this._fields.SamplingRate = value
	}

	// Optional: sets if shadowing should continue after all workflows matches the WorkflowQuery have been replayed.
	// If set to ShadowModeContinuous, ExitCondition must be specified.
	// default: ShadowModeNormal, which means shadowing will complete after all workflows have been replayed
	public get Mode(): ShadowMode {
		return this._fields.Mode
	}

	public set Mode(value: ShadowMode) {
		this._fields.Mode = value
	}

	// Required if Mode is set to ShadowModeContinuous: controls when shadowing should complete
	public get ExitCondition(): ShadowExitCondition {
		return this._fields.ExitCondition
	}

	public set ExitCondition(value: ShadowExitCondition) {
		this._fields.ExitCondition = value
	}

	// Optional: workflow shadowing concurrency (# of concurrent workflow replay activities)
	// Note: this field only applies to shadow worker. For the local WorkflowShadower,
	// the concurrency will always be 1.
	// An error will be returned if it's set to be larger than 1 when used to NewWorkflowShadower
	// default: 1
	public get Concurrency(): number {
		return this._fields.Concurrency
	}

	public set Concurrency(value: number) {
		this._fields.Concurrency = value
	}

	public _fields: {
		WorkflowQuery: string
		WorkflowTypes: $.Slice<string>
		ExcludeTypes: $.Slice<string>
		WorkflowStatus: $.Slice<string>
		WorkflowStartTimeFilter: TimeFilter
		WorkflowCloseTimeFilter: TimeFilter
		SamplingRate: number
		Mode: ShadowMode
		ExitCondition: ShadowExitCondition
		Concurrency: number
	}

	constructor(init?: Partial<{WorkflowQuery?: string, WorkflowTypes?: $.Slice<string>, ExcludeTypes?: $.Slice<string>, WorkflowStatus?: $.Slice<string>, WorkflowStartTimeFilter?: TimeFilter, WorkflowCloseTimeFilter?: TimeFilter, SamplingRate?: number, Mode?: ShadowMode, ExitCondition?: ShadowExitCondition, Concurrency?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			WorkflowQuery: init?.WorkflowQuery ?? ("" as string),
			WorkflowTypes: init?.WorkflowTypes ?? (null! as $.Slice<string>),
			ExcludeTypes: init?.ExcludeTypes ?? (null! as $.Slice<string>),
			WorkflowStatus: init?.WorkflowStatus ?? (null! as $.Slice<string>),
			WorkflowStartTimeFilter: init?.WorkflowStartTimeFilter ? init.WorkflowStartTimeFilter.clone() : new TimeFilter(undefined, true),
			WorkflowCloseTimeFilter: init?.WorkflowCloseTimeFilter ? init.WorkflowCloseTimeFilter.clone() : new TimeFilter(undefined, true),
			SamplingRate: init?.SamplingRate ?? (0 as number),
			Mode: init?.Mode ?? (0 as ShadowMode),
			ExitCondition: init?.ExitCondition ? init.ExitCondition.clone() : new ShadowExitCondition(undefined, true),
			Concurrency: init?.Concurrency ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ShadowOptions {
		return new ShadowOptions(this, true)
	}

	public __goscriptAssign(source: ShadowOptions): void {
		const target = this._fields
		const values = source._fields
		target.WorkflowQuery = values.WorkflowQuery
		target.WorkflowTypes = values.WorkflowTypes
		target.ExcludeTypes = values.ExcludeTypes
		target.WorkflowStatus = values.WorkflowStatus
		$.assignStruct(target.WorkflowStartTimeFilter, values.WorkflowStartTimeFilter)
		$.assignStruct(target.WorkflowCloseTimeFilter, values.WorkflowCloseTimeFilter)
		target.SamplingRate = values.SamplingRate
		target.Mode = values.Mode
		$.assignStruct(target.ExitCondition, values.ExitCondition)
		target.Concurrency = values.Concurrency
	}

	public async validateAndPopulateFields(): globalThis.Promise<$.GoError> {
		let o: ShadowOptions | $.VarRef<ShadowOptions> | null = this;
		const o$: ShadowOptions = o == null ? $.pointerTarget<ShadowOptions>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<ShadowOptions>(o)
		let exitConditionSpecified = ((o$ as ShadowOptions).ExitCondition.ExpirationInterval > 0n) || ((o$ as ShadowOptions).ExitCondition.ShadowCount > 0)
		if (((o$ as ShadowOptions).Mode == 1) && !exitConditionSpecified) {
			return errors.New("exit condition must be specified if shadow mode is set to continuous")
		}

		if (((o$ as ShadowOptions).SamplingRate < 0) || ((o$ as ShadowOptions).SamplingRate > 1)) {
			return errors.New("sampling rate should be in range [0, 1]")
		}

		if (($.stringLen((o$ as ShadowOptions).WorkflowQuery) != 0) && ((($.sliceLen((o$ as ShadowOptions).WorkflowTypes) != 0) || ($.sliceLen((o$ as ShadowOptions).WorkflowStatus) != 0)) || !(o$ as ShadowOptions).WorkflowStartTimeFilter.isEmpty())) {
			return errors.New("workflow types, status, start time and close time filter can't be specified when workflow query is specified")
		}

		if ($.stringLen((o$ as ShadowOptions).WorkflowQuery) == 0) {
			let queryBuilder = __goscript_query_builder.NewQueryBuilder()

			if ($.sliceLen((o$ as ShadowOptions).WorkflowTypes) > 0) {
				void (__goscriptAwait = (queryBuilder !== null && (queryBuilder as any).__isVarRef !== true && (queryBuilder as any).__goValue === undefined ? (queryBuilder as Exclude<__goscript_query_builder.QueryBuilder, null>) : $.pointerValue<Exclude<__goscript_query_builder.QueryBuilder, null>>(queryBuilder)).WorkflowTypes((o$ as ShadowOptions).WorkflowTypes), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}

			if ($.sliceLen((o$ as ShadowOptions).ExcludeTypes) > 0) {
				void (__goscriptAwait = (queryBuilder !== null && (queryBuilder as any).__isVarRef !== true && (queryBuilder as any).__goValue === undefined ? (queryBuilder as Exclude<__goscript_query_builder.QueryBuilder, null>) : $.pointerValue<Exclude<__goscript_query_builder.QueryBuilder, null>>(queryBuilder)).ExcludeWorkflowTypes((o$ as ShadowOptions).ExcludeTypes), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}

			let statuses: $.Slice<__goscript_query_builder.WorkflowStatus> = $.makeSlice<__goscript_query_builder.WorkflowStatus>(0, $.sliceLen((o$ as ShadowOptions).WorkflowStatus), "string")
			for (let __goscriptRangeTarget0 = (o$ as ShadowOptions).WorkflowStatus, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
				let statusString = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
				let [status, err] = __goscript_query_builder.ToWorkflowStatus(statusString)
				if (err != null) {
					return err
				}
				statuses = $.appendOne(statuses, status)
			}
			//All the open statuses are taken by default. This list seems to not work as expected.
			//TODO: verify that the status list works as expected. currently all wfs of all types get picked up.
			if ($.sliceLen(statuses) == 0) {
				statuses = $.arrayToSlice<__goscript_query_builder.WorkflowStatus>(["OPEN"])
			}
			void (__goscriptAwait = (queryBuilder !== null && (queryBuilder as any).__isVarRef !== true && (queryBuilder as any).__goValue === undefined ? (queryBuilder as Exclude<__goscript_query_builder.QueryBuilder, null>) : $.pointerValue<Exclude<__goscript_query_builder.QueryBuilder, null>>(queryBuilder)).WorkflowStatus(statuses), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

			if (!(o$ as ShadowOptions).WorkflowStartTimeFilter.isEmpty()) {
				{
					let err = (o$ as ShadowOptions).WorkflowStartTimeFilter.validateAndPopulateFields()
					if (err != null) {
						return fmt.Errorf("invalid start time filter, error: %v", (err as any))
					}
				}
				void (__goscriptAwait = (queryBuilder !== null && (queryBuilder as any).__isVarRef !== true && (queryBuilder as any).__goValue === undefined ? (queryBuilder as Exclude<__goscript_query_builder.QueryBuilder, null>) : $.pointerValue<Exclude<__goscript_query_builder.QueryBuilder, null>>(queryBuilder)).StartTime($.markAsStructValue($.cloneStructValue((o$ as ShadowOptions).WorkflowStartTimeFilter.MinTimestamp)), $.markAsStructValue($.cloneStructValue((o$ as ShadowOptions).WorkflowStartTimeFilter.MaxTimestamp))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}

			if (!(o$ as ShadowOptions).WorkflowCloseTimeFilter.isEmpty()) {
				{
					let err = (o$ as ShadowOptions).WorkflowCloseTimeFilter.validateAndPopulateFields()
					if (err != null) {
						return fmt.Errorf("invalid close time filter, error: %v", (err as any))
					}
				}
				void (__goscriptAwait = (queryBuilder !== null && (queryBuilder as any).__isVarRef !== true && (queryBuilder as any).__goValue === undefined ? (queryBuilder as Exclude<__goscript_query_builder.QueryBuilder, null>) : $.pointerValue<Exclude<__goscript_query_builder.QueryBuilder, null>>(queryBuilder)).CloseTime($.markAsStructValue($.cloneStructValue((o$ as ShadowOptions).WorkflowCloseTimeFilter.MinTimestamp)), $.markAsStructValue($.cloneStructValue((o$ as ShadowOptions).WorkflowCloseTimeFilter.MaxTimestamp))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			;(o$ as ShadowOptions).WorkflowQuery = (__goscriptAwait = (queryBuilder !== null && (queryBuilder as any).__isVarRef !== true && (queryBuilder as any).__goValue === undefined ? (queryBuilder as Exclude<__goscript_query_builder.QueryBuilder, null>) : $.pointerValue<Exclude<__goscript_query_builder.QueryBuilder, null>>(queryBuilder)).Build(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		if ((o$ as ShadowOptions).SamplingRate == 0) {
			// if not set, defaults to replay all workflows
			;(o$ as ShadowOptions).SamplingRate = 1
		}

		if ((o$ as ShadowOptions).Concurrency == 0) {
			// if not set, defaults to 1
			;(o$ as ShadowOptions).Concurrency = 1
		}

		return null
	}

	static __typeInfo = $.registerStructType(
		"internal.ShadowOptions",
		() => new ShadowOptions(),
		() => [$.methodSignature("validateAndPopulateFields", [], ["error"], true)],
		ShadowOptions,
		() => [/* @__PURE__ */ $.structField("WorkflowQuery", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("WorkflowTypes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [1], 16, true), /* @__PURE__ */ $.structField("ExcludeTypes", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 40, true), /* @__PURE__ */ $.structField("WorkflowStatus", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [3], 64, true), /* @__PURE__ */ $.structField("WorkflowStartTimeFilter", "internal.TimeFilter", [4], 88, true), /* @__PURE__ */ $.structField("WorkflowCloseTimeFilter", "internal.TimeFilter", [5], 136, true), /* @__PURE__ */ $.structField("SamplingRate", /* @__PURE__ */ $.basicType("float64"), [6], 184, true), /* @__PURE__ */ $.structField("Mode", /* @__PURE__ */ $.basicType("int", "internal.ShadowMode"), [7], 192, true), /* @__PURE__ */ $.structField("ExitCondition", "internal.ShadowExitCondition", [8], 200, true), /* @__PURE__ */ $.structField("Concurrency", /* @__PURE__ */ $.basicType("int"), [9], 216, true)]
	)
}

export class WorkflowShadower {
	public get service(): workflowserviceclient.Interface | null {
		return this._fields.service
	}

	public set service(value: workflowserviceclient.Interface | null) {
		this._fields.service = value
	}

	public get domain(): string {
		return this._fields.domain
	}

	public set domain(value: string) {
		this._fields.domain = value
	}

	public get shadowOptions(): ShadowOptions {
		return this._fields.shadowOptions
	}

	public set shadowOptions(value: ShadowOptions) {
		this._fields.shadowOptions = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get replayer(): __goscript_workflow_replayer.WorkflowReplayer | $.VarRef<__goscript_workflow_replayer.WorkflowReplayer> | null {
		return this._fields.replayer
	}

	public set replayer(value: __goscript_workflow_replayer.WorkflowReplayer | $.VarRef<__goscript_workflow_replayer.WorkflowReplayer> | null) {
		this._fields.replayer = value
	}

	public get status(): number {
		return this._fields.status
	}

	public set status(value: number) {
		this._fields.status = value
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

	public get clock(): clock2.Clock | null {
		return this._fields.clock
	}

	public set clock(value: clock2.Clock | null) {
		this._fields.clock = value
	}

	public _fields: {
		service: workflowserviceclient.Interface | null
		domain: string
		shadowOptions: ShadowOptions
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		replayer: __goscript_workflow_replayer.WorkflowReplayer | $.VarRef<__goscript_workflow_replayer.WorkflowReplayer> | null
		status: number
		shutdownCh: $.Channel<{}> | null
		shutdownWG: sync.WaitGroup
		clock: clock2.Clock | null
	}

	constructor(init?: Partial<{service?: workflowserviceclient.Interface | null, domain?: string, shadowOptions?: ShadowOptions, logger?: zap.Logger | $.VarRef<zap.Logger> | null, replayer?: __goscript_workflow_replayer.WorkflowReplayer | $.VarRef<__goscript_workflow_replayer.WorkflowReplayer> | null, status?: number, shutdownCh?: $.Channel<{}> | null, shutdownWG?: sync.WaitGroup, clock?: clock2.Clock | null}>, __goscriptValue?: boolean) {
		this._fields = {
			service: init?.service ?? (null! as workflowserviceclient.Interface | null),
			domain: init?.domain ?? ("" as string),
			shadowOptions: init?.shadowOptions ? init.shadowOptions.clone() : new ShadowOptions(undefined, true),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			replayer: init?.replayer ?? (null! as __goscript_workflow_replayer.WorkflowReplayer | $.VarRef<__goscript_workflow_replayer.WorkflowReplayer> | null),
			status: init?.status ?? (0 as number),
			shutdownCh: init?.shutdownCh ?? (null! as $.Channel<{}> | null),
			shutdownWG: init?.shutdownWG ? $.markAsStructValue($.cloneStructValue(init.shutdownWG)) : $.markAsStructValue(new sync.WaitGroup()),
			clock: init?.clock ?? (null! as clock2.Clock | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkflowShadower {
		return new WorkflowShadower(this, true)
	}

	public __goscriptAssign(source: WorkflowShadower): void {
		const target = this._fields
		const values = source._fields
		target.service = $.assignFieldValue(target.service, values.service, "workflowserviceclient.Interface")
		target.domain = values.domain
		$.assignStruct(target.shadowOptions, values.shadowOptions)
		target.logger = values.logger
		target.replayer = values.replayer
		target.status = values.status
		target.shutdownCh = values.shutdownCh
		$.assignStruct(target.shutdownWG, values.shutdownWG)
		target.clock = $.assignFieldValue(target.clock, values.clock, "clock.Clock")
	}

	public async GetRegisteredWorkflows(): globalThis.Promise<$.Slice<__goscript_workflow.RegistryWorkflowInfo | null>> {
		const s: WorkflowShadower | $.VarRef<WorkflowShadower> | null = this;
		return __goscript_workflow_replayer.WorkflowReplayer.prototype.GetRegisteredWorkflows.call($.pointerValue<WorkflowShadower>(s).replayer)
	}

	public async RegisterWorkflow(w: any): globalThis.Promise<void> {
		const s: WorkflowShadower | $.VarRef<WorkflowShadower> | null = this;
		await __goscript_workflow_replayer.WorkflowReplayer.prototype.RegisterWorkflow.call($.pointerValue<WorkflowShadower>(s).replayer, w)
	}

	public async RegisterWorkflowWithOptions(w: any, options: __goscript_workflow.RegisterWorkflowOptions): globalThis.Promise<void> {
		const s: WorkflowShadower | $.VarRef<WorkflowShadower> | null = this;
		await __goscript_workflow_replayer.WorkflowReplayer.prototype.RegisterWorkflowWithOptions.call($.pointerValue<WorkflowShadower>(s).replayer, w, options)
	}

	public async Run(): globalThis.Promise<$.GoError> {
		const s: WorkflowShadower | $.VarRef<WorkflowShadower> | null = this;
		if (!atomic.CompareAndSwapInt32($.fieldRef($.pointerValue<WorkflowShadower>(s)._fields, "status"), 0, 1)) {
			return errors.New("Workflow shadower already started")
		}

		return (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as WorkflowShadower).shadowWorker() : WorkflowShadower.prototype.shadowWorker.call(s))
	}

	public async Stop(): globalThis.Promise<void> {
		const s: WorkflowShadower | $.VarRef<WorkflowShadower> | null = this;
		const s$: WorkflowShadower = s == null ? $.pointerTarget<WorkflowShadower>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<WorkflowShadower>(s)
		if (!atomic.CompareAndSwapInt32($.fieldRef((s$ as WorkflowShadower)._fields, "status"), 1, 2)) {
			return
		}

		void (s$ as WorkflowShadower).shutdownCh!.close()

		{
			let success = await util.AwaitWaitGroup($.fieldRef((s$ as WorkflowShadower)._fields, "shutdownWG"), 60000000000n)
			if (!success) {
				await zap.Logger.prototype.Warn.call((s$ as WorkflowShadower).logger, "Workflow Shadower timedout on shutdown", null)
			}
		}
	}

	public async shadowWorker(): globalThis.Promise<$.GoError> {
		const s: WorkflowShadower | $.VarRef<WorkflowShadower> | null = this;
		using __defer = new $.DisposableStack()
		const s$: WorkflowShadower = s == null ? $.pointerTarget<WorkflowShadower>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<WorkflowShadower>(s)
		void (s$ as WorkflowShadower).shutdownWG.Add(1)
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Done())((s$ as WorkflowShadower).shutdownWG), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*WaitGroup).Done-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		let scanRequest = (() => { const __goscriptLiteralField2 = common.StringPtr((s$ as WorkflowShadower).domain); const __goscriptLiteralField3 = common.StringPtr((s$ as WorkflowShadower).shadowOptions.WorkflowQuery); const __goscriptLiteralField4 = common.Float64Ptr((s$ as WorkflowShadower).shadowOptions.SamplingRate); return new shadower.ScanWorkflowActivityParams({Domain: __goscriptLiteralField2, WorkflowQuery: __goscriptLiteralField3, SamplingRate: __goscriptLiteralField4}, true) })()
		await zap.Logger.prototype.Info.call((s$ as WorkflowShadower).logger, "Shadow workflow query", $.arrayToSlice<zap.Field>([zap.String("VisibilityQuery", (s$ as WorkflowShadower).shadowOptions.WorkflowQuery)]))

		let ctx = context.Background()
		let expirationTime = $.markAsStructValue($.cloneStructValue(time.Unix(0n, 9223372036854775807n)))
		if ((s$ as WorkflowShadower).shadowOptions.ExitCondition.ExpirationInterval != 0n) {
			expirationTime = $.assignStruct(expirationTime, $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<clock2.Clock, null>>((s$ as WorkflowShadower).clock).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Add((s$ as WorkflowShadower).shadowOptions.ExitCondition.ExpirationInterval))
		}

		let replayCount = 0
		let maxReplayCount = $.int("9223372036854775807", 64)
		if ((s$ as WorkflowShadower).shadowOptions.ExitCondition.ShadowCount != 0) {
			maxReplayCount = (s$ as WorkflowShadower).shadowOptions.ExitCondition.ShadowCount
		}
		await rand.Seed($.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<clock2.Clock, null>>((s$ as WorkflowShadower).clock).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).UnixNano())
		while (true) {
			let [scanResult, err] = await __goscript_workflow_shadower_activities.scanWorkflowExecutionsHelper(ctx, (s$ as WorkflowShadower).service, (scanRequest).clone(), (s$ as WorkflowShadower).logger)
			if (err != null) {
				return err
			}

			for (let __goscriptRangeTarget1 = scanResult.Executions, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
				let execution = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as shared.WorkflowExecution | $.VarRef<shared.WorkflowExecution> | null)
				if ($.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<clock2.Clock, null>>((s$ as WorkflowShadower).clock).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).After($.markAsStructValue($.cloneStructValue(expirationTime)))) {
					return null
				}

				let [success, __goscriptShadow0] = await __goscript_workflow_shadower_activities.replayWorkflowExecutionHelper(ctx, (s$ as WorkflowShadower).replayer, (s$ as WorkflowShadower).service, (s$ as WorkflowShadower).logger, (s$ as WorkflowShadower).domain, (() => { const __goscriptLiteralField5 = (execution !== null && (execution as any).__isVarRef !== true && (execution as any).__goValue === undefined ? ((execution as any) as shared.WorkflowExecution).GetWorkflowId() : shared.WorkflowExecution.prototype.GetWorkflowId.call(execution)); const __goscriptLiteralField6 = (execution !== null && (execution as any).__isVarRef !== true && (execution as any).__goValue === undefined ? ((execution as any) as shared.WorkflowExecution).GetRunId() : shared.WorkflowExecution.prototype.GetRunId.call(execution)); return new __goscript_workflow.WorkflowExecution({ID: __goscriptLiteralField5, RunID: __goscriptLiteralField6}, true) })())
				if (__goscriptShadow0 != null) {
					return __goscriptShadow0
				}
				if (success) {
					replayCount++
				}

				if (replayCount == maxReplayCount) {
					return null
				}
			}

			if ($.sliceLen(scanResult.NextPageToken) == 0) {
				if (((s$ as WorkflowShadower).shadowOptions.Mode == 0) || $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<clock2.Clock, null>>((s$ as WorkflowShadower).clock).Now(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Add(300000000000n))).After($.markAsStructValue($.cloneStructValue(expirationTime)))) {
					return null
				}

				void (__goscriptAwait = $.pointerValue<Exclude<clock2.Clock, null>>((s$ as WorkflowShadower).clock).Sleep(300000000000n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}

			scanRequest.NextPageToken = scanResult.NextPageToken
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"internal.WorkflowShadower",
		() => new WorkflowShadower(),
		() => [$.methodSignature("GetRegisteredWorkflows", [], [/* @__PURE__ */ $.sliceType("internal.RegistryWorkflowInfo")], true), $.methodSignature("RegisterWorkflow", [["w", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("RegisterWorkflowWithOptions", [["w", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterWorkflowOptions"]], [], true), $.methodSignature("Run", [], ["error"], true), $.methodSignature("Stop", [], [], true), $.methodSignature("shadowWorker", [], ["error"], true)],
		WorkflowShadower,
		() => [/* @__PURE__ */ $.structField("service", "workflowserviceclient.Interface", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("domain", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("shadowOptions", "internal.ShadowOptions", [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [3], 256, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("replayer", /* @__PURE__ */ $.pointerType("internal.WorkflowReplayer"), [4], 264, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("status", /* @__PURE__ */ $.basicType("int32"), [5], 272, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("shutdownCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [6], 280, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("shutdownWG", "sync.WaitGroup", [7], 288, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("clock", "clock.Clock", [8], 304, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export const statusInitialized: number = 0

export const statusStarted: number = 1

export const statusStopped: number = 2

export const defaultWaitDurationPerIteration: time.Duration = 300000000000n

export const ShadowModeNormal: ShadowMode = 0

export const ShadowModeContinuous: ShadowMode = 1

export async function NewWorkflowShadower(service: workflowserviceclient.Interface | null, domain: string, __goscriptParam0: ShadowOptions, replayOptions: __goscript_workflow_replayer.ReplayOptions, logger: zap.Logger | $.VarRef<zap.Logger> | null): globalThis.Promise<[WorkflowShadower | $.VarRef<WorkflowShadower> | null, $.GoError]> {
	let shadowOptions: $.VarRef<ShadowOptions> = $.varRef(__goscriptParam0)
	if ($.stringLen(domain) == 0) {
		return [null, errors.New("domain is not set")]
	}

	{
		let err = await shadowOptions.value.validateAndPopulateFields()
		if (err != null) {
			return [null, err]
		}
	}

	if (shadowOptions.value.Concurrency > 1) {
		return [null, errors.New("local workflow shadower doesn't support concurrency > 1")]
	}

	if (logger == null) {
		logger = zap.NewNop()
	}

	return [(await (async () => { const __goscriptLiteralField7 = await __goscript_workflow_replayer.NewWorkflowReplayerWithOptions((replayOptions).clone()); const __goscriptLiteralField8 = clock2.New(); return new WorkflowShadower({service: service, domain: domain, shadowOptions: shadowOptions.value, logger: logger, replayer: __goscriptLiteralField7, status: 0, shutdownCh: $.makeChannel<{}>(0, {}, "both"), clock: __goscriptLiteralField8}) })()), null]
}

export async function ShadowMode_toThriftPtr(m: ShadowMode): globalThis.Promise<$.VarRef<shadower.Mode> | null> {
	switch (m) {
		case 0:
		{
			return shadower.Mode_Ptr(shadower.ModeNormal)
			break
		}
		case 1:
		{
			return shadower.Mode_Ptr(shadower.ModeContinuous)
			break
		}
		default:
		{
			$.panic(await fmt.Sprintf("unknown shadow mode %v", $.namedValueInterfaceValue<any>(m, "internal.ShadowMode", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({toThriftPtr: (receiver: any, ...args: any[]) => (ShadowMode_toThriftPtr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "internal.ShadowMode"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("toThriftPtr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shadower.Mode"))])])
}

var __goscriptAwait: any
