// Generated file based on error.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as util from "@goscript/go.uber.org/cadence/internal/common/util/index.js"

import type * as context from "@goscript/context/index.js"

import type * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import type * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import type * as zap from "@goscript/go.uber.org/zap/index.js"

import * as sync from "@goscript/sync/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import type * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import type * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_testsuite from "./workflow_testsuite.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/util/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/sync/index.js"
import "./activity.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./headers.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_worker_base.gs.ts"
import "./internal_workflow.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./workflow.gs.ts"
import "./workflow_testsuite.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.CustomError", "internal.CustomErrorOption", "internal.GenericError", "internal.TimeoutError", "internal.CanceledError", "internal.TerminatedError", "internal.PanicError", "internal.workflowPanicError", "internal.NonDeterministicError", "internal.ContinueAsNewError", "internal.UnknownExternalWorkflowExecutionError", "internal.ErrorDetailsValues"])

export type CustomErrorOption = ((customError: CustomError | $.VarRef<CustomError> | null) => void) | null

export type ErrorDetailsValues = $.Slice<any>

$.registerNamedType("internal.ErrorDetailsValues", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }));

$.registerNamedValueType(
	"internal.ErrorDetailsValues",
	{Get: (receiver: any, ...args: any[]) => (ErrorDetailsValues_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), HasValues: (receiver: any, ...args: any[]) => (ErrorDetailsValues_HasValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Get", [["valuePtr", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"]), $.methodSignature("HasValues", [], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*internal.ErrorDetailsValues",
	{Get: (receiver: any, ...args: any[]) => (ErrorDetailsValues_Get as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), HasValues: (receiver: any, ...args: any[]) => (ErrorDetailsValues_HasValues as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Get", [["valuePtr", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"]), $.methodSignature("HasValues", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export class CustomError {
	public get reason(): string {
		return this._fields.reason
	}

	public set reason(value: string) {
		this._fields.reason = value
	}

	public get details(): __goscript_encoded.Values | null {
		return this._fields.details
	}

	public set details(value: __goscript_encoded.Values | null) {
		this._fields.details = value
	}

	public get failureCategory(): $.VarRef<shared.FailureCategory> | null {
		return this._fields.failureCategory
	}

	public set failureCategory(value: $.VarRef<shared.FailureCategory> | null) {
		this._fields.failureCategory = value
	}

	public get nextRetryDelay(): time.Duration {
		return this._fields.nextRetryDelay
	}

	public set nextRetryDelay(value: time.Duration) {
		this._fields.nextRetryDelay = value
	}

	public _fields: {
		reason: string
		details: __goscript_encoded.Values | null
		failureCategory: $.VarRef<shared.FailureCategory> | null
		nextRetryDelay: time.Duration
	}

	constructor(init?: Partial<{reason?: string, details?: __goscript_encoded.Values | null, failureCategory?: $.VarRef<shared.FailureCategory> | null, nextRetryDelay?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			reason: init?.reason ?? ("" as string),
			details: init?.details ?? (null! as __goscript_encoded.Values | null),
			failureCategory: init?.failureCategory ?? (null! as $.VarRef<shared.FailureCategory> | null),
			nextRetryDelay: init?.nextRetryDelay ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CustomError {
		return new CustomError(this, true)
	}

	public __goscriptAssign(source: CustomError): void {
		const target = this._fields
		const values = source._fields
		target.reason = values.reason
		target.details = $.assignFieldValue(target.details, values.details, "internal.Values")
		target.failureCategory = values.failureCategory
		target.nextRetryDelay = values.nextRetryDelay
	}

	public async Details(d: $.Slice<any>): globalThis.Promise<$.GoError> {
		const e: CustomError | $.VarRef<CustomError> | null = this;
		if (!await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as CustomError).HasDetails() : CustomError.prototype.HasDetails.call(e))) {
			return ErrNoData
		}
		return $.pointerValue<Exclude<__goscript_encoded.Values, null>>($.pointerValue<CustomError>(e).details).Get(d)
	}

	public Error(): string {
		const e: CustomError | $.VarRef<CustomError> | null = this;
		return $.pointerValue<CustomError>(e).reason
	}

	public GetFailureCategory(): shared.FailureCategory {
		const e: CustomError | $.VarRef<CustomError> | null = this;
		const e$: CustomError = e == null ? $.pointerTarget<CustomError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<CustomError>(e)
		if ((e$ as CustomError).failureCategory == null) {
			return 1
		}
		return $.pointerValue<shared.FailureCategory>((e$ as CustomError).failureCategory)
	}

	public GetNextRetryDelay(): time.Duration {
		const e: CustomError | $.VarRef<CustomError> | null = this;
		return $.pointerValue<CustomError>(e).nextRetryDelay
	}

	public async HasDetails(): globalThis.Promise<boolean> {
		const e: CustomError | $.VarRef<CustomError> | null = this;
		const e$: CustomError = e == null ? $.pointerTarget<CustomError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<CustomError>(e)
		return ((e$ as CustomError).details != null) && (__goscriptAwait = $.pointerValue<Exclude<__goscript_encoded.Values, null>>((e$ as CustomError).details).HasValues(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public Reason(): string {
		const e: CustomError | $.VarRef<CustomError> | null = this;
		return $.pointerValue<CustomError>(e).reason
	}

	static __typeInfo = $.registerStructType(
		"internal.CustomError",
		() => new CustomError(),
		() => [$.methodSignature("Details", [["d", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetFailureCategory", [], [/* @__PURE__ */ $.basicType("int32", "shared.FailureCategory")], true), $.methodSignature("GetNextRetryDelay", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("HasDetails", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Reason", [], [/* @__PURE__ */ $.basicType("string")], true)],
		CustomError,
		() => [/* @__PURE__ */ $.structField("reason", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("details", "internal.Values", [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("failureCategory", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.FailureCategory")), [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("nextRetryDelay", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 40, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class GenericError {
	public get err(): string {
		return this._fields.err
	}

	public set err(value: string) {
		this._fields.err = value
	}

	public _fields: {
		err: string
	}

	constructor(init?: Partial<{err?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): GenericError {
		return new GenericError(this, true)
	}

	public __goscriptAssign(source: GenericError): void {
		const target = this._fields
		const values = source._fields
		target.err = values.err
	}

	public Error(): string {
		const e: GenericError | $.VarRef<GenericError> | null = this;
		return $.pointerValue<GenericError>(e).err
	}

	static __typeInfo = $.registerStructType(
		"internal.GenericError",
		() => new GenericError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		GenericError,
		() => [/* @__PURE__ */ $.structField("err", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class TimeoutError {
	public get timeoutType(): shared.TimeoutType {
		return this._fields.timeoutType
	}

	public set timeoutType(value: shared.TimeoutType) {
		this._fields.timeoutType = value
	}

	public get details(): __goscript_encoded.Values | null {
		return this._fields.details
	}

	public set details(value: __goscript_encoded.Values | null) {
		this._fields.details = value
	}

	public _fields: {
		timeoutType: shared.TimeoutType
		details: __goscript_encoded.Values | null
	}

	constructor(init?: Partial<{timeoutType?: shared.TimeoutType, details?: __goscript_encoded.Values | null}>, __goscriptValue?: boolean) {
		this._fields = {
			timeoutType: init?.timeoutType ?? (0 as shared.TimeoutType),
			details: init?.details ?? (null! as __goscript_encoded.Values | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TimeoutError {
		return new TimeoutError(this, true)
	}

	public __goscriptAssign(source: TimeoutError): void {
		const target = this._fields
		const values = source._fields
		target.timeoutType = values.timeoutType
		target.details = $.assignFieldValue(target.details, values.details, "internal.Values")
	}

	public async Details(d: $.Slice<any>): globalThis.Promise<$.GoError> {
		const e: TimeoutError | $.VarRef<TimeoutError> | null = this;
		if (!await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as TimeoutError).HasDetails() : TimeoutError.prototype.HasDetails.call(e))) {
			return ErrNoData
		}
		return $.pointerValue<Exclude<__goscript_encoded.Values, null>>($.pointerValue<TimeoutError>(e).details).Get(d)
	}

	public async Error(): globalThis.Promise<string> {
		const e: TimeoutError | $.VarRef<TimeoutError> | null = this;
		return fmt.Sprintf("TimeoutType: %v", $.namedValueInterfaceValue<any>($.pointerValue<TimeoutError>(e).timeoutType, "shared.TimeoutType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
	}

	public async HasDetails(): globalThis.Promise<boolean> {
		const e: TimeoutError | $.VarRef<TimeoutError> | null = this;
		const e$: TimeoutError = e == null ? $.pointerTarget<TimeoutError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<TimeoutError>(e)
		return ((e$ as TimeoutError).details != null) && (__goscriptAwait = $.pointerValue<Exclude<__goscript_encoded.Values, null>>((e$ as TimeoutError).details).HasValues(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public TimeoutType(): shared.TimeoutType {
		const e: TimeoutError | $.VarRef<TimeoutError> | null = this;
		return $.pointerValue<TimeoutError>(e).timeoutType
	}

	static __typeInfo = $.registerStructType(
		"internal.TimeoutError",
		() => new TimeoutError(),
		() => [$.methodSignature("Details", [["d", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("HasDetails", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TimeoutType", [], [/* @__PURE__ */ $.basicType("int32", "shared.TimeoutType")], true)],
		TimeoutError,
		() => [/* @__PURE__ */ $.structField("timeoutType", /* @__PURE__ */ $.basicType("int32", "shared.TimeoutType"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("details", "internal.Values", [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class CanceledError {
	public get details(): __goscript_encoded.Values | null {
		return this._fields.details
	}

	public set details(value: __goscript_encoded.Values | null) {
		this._fields.details = value
	}

	public _fields: {
		details: __goscript_encoded.Values | null
	}

	constructor(init?: Partial<{details?: __goscript_encoded.Values | null}>, __goscriptValue?: boolean) {
		this._fields = {
			details: init?.details ?? (null! as __goscript_encoded.Values | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CanceledError {
		return new CanceledError(this, true)
	}

	public __goscriptAssign(source: CanceledError): void {
		const target = this._fields
		const values = source._fields
		target.details = $.assignFieldValue(target.details, values.details, "internal.Values")
	}

	public async Details(d: $.Slice<any>): globalThis.Promise<$.GoError> {
		const e: CanceledError | $.VarRef<CanceledError> | null = this;
		if (!await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? ((e as any) as CanceledError).HasDetails() : CanceledError.prototype.HasDetails.call(e))) {
			return ErrNoData
		}
		return $.pointerValue<Exclude<__goscript_encoded.Values, null>>($.pointerValue<CanceledError>(e).details).Get(d)
	}

	public Error(): string {
		const e: CanceledError | $.VarRef<CanceledError> | null = this;
		return "CanceledError"
	}

	public async HasDetails(): globalThis.Promise<boolean> {
		const e: CanceledError | $.VarRef<CanceledError> | null = this;
		const e$: CanceledError = e == null ? $.pointerTarget<CanceledError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<CanceledError>(e)
		return ((e$ as CanceledError).details != null) && (__goscriptAwait = $.pointerValue<Exclude<__goscript_encoded.Values, null>>((e$ as CanceledError).details).HasValues(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"internal.CanceledError",
		() => new CanceledError(),
		() => [$.methodSignature("Details", [["d", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("HasDetails", [], [/* @__PURE__ */ $.basicType("bool")], true)],
		CanceledError,
		() => [/* @__PURE__ */ $.structField("details", "internal.Values", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class TerminatedError {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TerminatedError {
		return new TerminatedError(this, true)
	}

	public __goscriptAssign(source: TerminatedError): void {
	}

	public Error(): string {
		const e: TerminatedError | $.VarRef<TerminatedError> | null = this;
		return "Terminated"
	}

	static __typeInfo = $.registerStructType(
		"internal.TerminatedError",
		() => new TerminatedError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		TerminatedError,
		() => []
	)
}

export class PanicError {
	public get value(): any {
		return this._fields.value
	}

	public set value(value: any) {
		this._fields.value = value
	}

	public get stackTrace(): string {
		return this._fields.stackTrace
	}

	public set stackTrace(value: string) {
		this._fields.stackTrace = value
	}

	public _fields: {
		value: any
		stackTrace: string
	}

	constructor(init?: Partial<{value?: any, stackTrace?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			value: init?.value ?? (null! as any),
			stackTrace: init?.stackTrace ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PanicError {
		return new PanicError(this, true)
	}

	public __goscriptAssign(source: PanicError): void {
		const target = this._fields
		const values = source._fields
		target.value = $.assignFieldValue(target.value, values.value, { kind: $.TypeKind.Interface, methods: [] })
		target.stackTrace = values.stackTrace
	}

	public async Error(): globalThis.Promise<string> {
		const e: PanicError | $.VarRef<PanicError> | null = this;
		return fmt.Sprintf("%v", $.pointerValue<PanicError>(e).value)
	}

	public StackTrace(): string {
		const e: PanicError | $.VarRef<PanicError> | null = this;
		return $.pointerValue<PanicError>(e).stackTrace
	}

	static __typeInfo = $.registerStructType(
		"internal.PanicError",
		() => new PanicError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("StackTrace", [], [/* @__PURE__ */ $.basicType("string")], true)],
		PanicError,
		() => [/* @__PURE__ */ $.structField("value", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("stackTrace", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class workflowPanicError {
	public get value(): any {
		return this._fields.value
	}

	public set value(value: any) {
		this._fields.value = value
	}

	public get stackTrace(): string {
		return this._fields.stackTrace
	}

	public set stackTrace(value: string) {
		this._fields.stackTrace = value
	}

	public _fields: {
		value: any
		stackTrace: string
	}

	constructor(init?: Partial<{value?: any, stackTrace?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			value: init?.value ?? (null! as any),
			stackTrace: init?.stackTrace ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): workflowPanicError {
		return new workflowPanicError(this, true)
	}

	public __goscriptAssign(source: workflowPanicError): void {
		const target = this._fields
		const values = source._fields
		target.value = $.assignFieldValue(target.value, values.value, { kind: $.TypeKind.Interface, methods: [] })
		target.stackTrace = values.stackTrace
	}

	public async Error(): globalThis.Promise<string> {
		const e: workflowPanicError | $.VarRef<workflowPanicError> | null = this;
		return fmt.Sprintf("%v", $.pointerValue<workflowPanicError>(e).value)
	}

	public StackTrace(): string {
		const e: workflowPanicError | $.VarRef<workflowPanicError> | null = this;
		return $.pointerValue<workflowPanicError>(e).stackTrace
	}

	static __typeInfo = $.registerStructType(
		"internal.workflowPanicError",
		() => new workflowPanicError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("StackTrace", [], [/* @__PURE__ */ $.basicType("string")], true)],
		workflowPanicError,
		() => [/* @__PURE__ */ $.structField("value", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("stackTrace", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class NonDeterministicError {
	// Reason is a relatively free-form description of what kind of non-determinism
	// was detected.
	//
	// You are *strongly* encouraged to not rely on these strings for behavior, only
	// explanation, for a few reasons.  More will likely appear in the future, they may
	// change, and there is little that can be safely decided on in an automated way.
	//
	// Currently, values roughly match the historical error strings, and are:
	//  - "missing replay decision" (The error will contain HistoryEventText, as there
	//    is at least one history event that has no matching replayed decision)
	//  - "extra replay decision" (The error will contain DecisionText, as there is
	//    at least one decision from replay that has no matching history event)
	//  - "mismatch" (Both HistoryEventText and DecisionText will exist, as there
	//    are issues with both.  This was previously shown as "history event is ...,
	//    replay decision is ..." error text.)
	public get Reason(): string {
		return this._fields.Reason
	}

	public set Reason(value: string) {
		this._fields.Reason = value
	}

	public get WorkflowType(): string {
		return this._fields.WorkflowType
	}

	public set WorkflowType(value: string) {
		this._fields.WorkflowType = value
	}

	public get WorkflowID(): string {
		return this._fields.WorkflowID
	}

	public set WorkflowID(value: string) {
		this._fields.WorkflowID = value
	}

	public get RunID(): string {
		return this._fields.RunID
	}

	public set RunID(value: string) {
		this._fields.RunID = value
	}

	public get TaskList(): string {
		return this._fields.TaskList
	}

	public set TaskList(value: string) {
		this._fields.TaskList = value
	}

	public get DomainName(): string {
		return this._fields.DomainName
	}

	public set DomainName(value: string) {
		this._fields.DomainName = value
	}

	// HistoryEventText contains a String() representation of a history
	// event (i.e. previously recorded) that is related to the problem.
	public get HistoryEventText(): string {
		return this._fields.HistoryEventText
	}

	public set HistoryEventText(value: string) {
		this._fields.HistoryEventText = value
	}

	// DecisionText contains a String() representation of a replay decision
	// event (i.e. created during replay) that is related to the problem.
	public get DecisionText(): string {
		return this._fields.DecisionText
	}

	public set DecisionText(value: string) {
		this._fields.DecisionText = value
	}

	public _fields: {
		Reason: string
		WorkflowType: string
		WorkflowID: string
		RunID: string
		TaskList: string
		DomainName: string
		HistoryEventText: string
		DecisionText: string
	}

	constructor(init?: Partial<{Reason?: string, WorkflowType?: string, WorkflowID?: string, RunID?: string, TaskList?: string, DomainName?: string, HistoryEventText?: string, DecisionText?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Reason: init?.Reason ?? ("" as string),
			WorkflowType: init?.WorkflowType ?? ("" as string),
			WorkflowID: init?.WorkflowID ?? ("" as string),
			RunID: init?.RunID ?? ("" as string),
			TaskList: init?.TaskList ?? ("" as string),
			DomainName: init?.DomainName ?? ("" as string),
			HistoryEventText: init?.HistoryEventText ?? ("" as string),
			DecisionText: init?.DecisionText ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NonDeterministicError {
		return new NonDeterministicError(this, true)
	}

	public __goscriptAssign(source: NonDeterministicError): void {
		const target = this._fields
		const values = source._fields
		target.Reason = values.Reason
		target.WorkflowType = values.WorkflowType
		target.WorkflowID = values.WorkflowID
		target.RunID = values.RunID
		target.TaskList = values.TaskList
		target.DomainName = values.DomainName
		target.HistoryEventText = values.HistoryEventText
		target.DecisionText = values.DecisionText
	}

	public async Error(): globalThis.Promise<string> {
		const e: NonDeterministicError | $.VarRef<NonDeterministicError> | null = this;
		const e$: NonDeterministicError = e == null ? $.pointerTarget<NonDeterministicError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<NonDeterministicError>(e)
		switch ((e$ as NonDeterministicError).Reason) {
			case "missing replay decision":
			{
				return $.concatString(($.concatString("nondeterministic workflow: ", "missing replay decision for ")), (e$ as NonDeterministicError).HistoryEventText)
				break
			}
			case "extra replay decision":
			{
				return $.concatString(($.concatString("nondeterministic workflow: ", "extra replay decision for ")), (e$ as NonDeterministicError).DecisionText)
				break
			}
			case "mismatch":
			{
				return $.concatString(($.concatString(($.concatString(($.concatString(($.concatString("nondeterministic workflow: ", "history event is ")), (e$ as NonDeterministicError).HistoryEventText)), ", ")), "replay decision is ")), (e$ as NonDeterministicError).DecisionText)
				break
			}
			default:
			{
				return fmt.Sprintf("unknown reason %q, history event is: %s, replay decision is: %s", (e$ as NonDeterministicError).Reason, (e$ as NonDeterministicError).HistoryEventText, (e$ as NonDeterministicError).DecisionText)
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"internal.NonDeterministicError",
		() => new NonDeterministicError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		NonDeterministicError,
		() => [/* @__PURE__ */ $.structField("Reason", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("WorkflowType", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("WorkflowID", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("RunID", /* @__PURE__ */ $.basicType("string"), [3], 48, true), /* @__PURE__ */ $.structField("TaskList", /* @__PURE__ */ $.basicType("string"), [4], 64, true), /* @__PURE__ */ $.structField("DomainName", /* @__PURE__ */ $.basicType("string"), [5], 80, true), /* @__PURE__ */ $.structField("HistoryEventText", /* @__PURE__ */ $.basicType("string"), [6], 96, true), /* @__PURE__ */ $.structField("DecisionText", /* @__PURE__ */ $.basicType("string"), [7], 112, true)]
	)
}

export class ContinueAsNewError {
	public get wfn(): any {
		return this._fields.wfn
	}

	public set wfn(value: any) {
		this._fields.wfn = value
	}

	public get args(): $.Slice<any> {
		return this._fields.args
	}

	public set args(value: $.Slice<any>) {
		this._fields.args = value
	}

	public get params(): __goscript_internal_workflow.executeWorkflowParams | $.VarRef<__goscript_internal_workflow.executeWorkflowParams> | null {
		return this._fields.params
	}

	public set params(value: __goscript_internal_workflow.executeWorkflowParams | $.VarRef<__goscript_internal_workflow.executeWorkflowParams> | null) {
		this._fields.params = value
	}

	public _fields: {
		wfn: any
		args: $.Slice<any>
		params: __goscript_internal_workflow.executeWorkflowParams | $.VarRef<__goscript_internal_workflow.executeWorkflowParams> | null
	}

	constructor(init?: Partial<{wfn?: any, args?: $.Slice<any>, params?: __goscript_internal_workflow.executeWorkflowParams | $.VarRef<__goscript_internal_workflow.executeWorkflowParams> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			wfn: init?.wfn ?? (null! as any),
			args: init?.args ?? (null! as $.Slice<any>),
			params: init?.params ?? (null! as __goscript_internal_workflow.executeWorkflowParams | $.VarRef<__goscript_internal_workflow.executeWorkflowParams> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ContinueAsNewError {
		return new ContinueAsNewError(this, true)
	}

	public __goscriptAssign(source: ContinueAsNewError): void {
		const target = this._fields
		const values = source._fields
		target.wfn = $.assignFieldValue(target.wfn, values.wfn, { kind: $.TypeKind.Interface, methods: [] })
		target.args = values.args
		target.params = values.params
	}

	public Args(): $.Slice<any> {
		const e: ContinueAsNewError | $.VarRef<ContinueAsNewError> | null = this;
		return $.pointerValue<ContinueAsNewError>(e).args
	}

	public Error(): string {
		const e: ContinueAsNewError | $.VarRef<ContinueAsNewError> | null = this;
		return "ContinueAsNew"
	}

	public Header(): shared.Header | $.VarRef<shared.Header> | null {
		const e: ContinueAsNewError | $.VarRef<ContinueAsNewError> | null = this;
		return $.pointerValue<__goscript_internal_workflow.executeWorkflowParams>($.pointerValue<ContinueAsNewError>(e).params).header
	}

	public Input(): $.Slice<number> {
		const e: ContinueAsNewError | $.VarRef<ContinueAsNewError> | null = this;
		return $.pointerValue<__goscript_internal_workflow.executeWorkflowParams>($.pointerValue<ContinueAsNewError>(e).params).input
	}

	public WorkflowIDReusePolicy(): __goscript_client.WorkflowIDReusePolicy {
		const e: ContinueAsNewError | $.VarRef<ContinueAsNewError> | null = this;
		return $.pointerValue<__goscript_internal_workflow.executeWorkflowParams>($.pointerValue<ContinueAsNewError>(e).params).workflowOptions.workflowIDReusePolicy
	}

	public WorkflowType(): __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null {
		const e: ContinueAsNewError | $.VarRef<ContinueAsNewError> | null = this;
		return $.pointerValue<__goscript_internal_workflow.executeWorkflowParams>($.pointerValue<ContinueAsNewError>(e).params).workflowType
	}

	static __typeInfo = $.registerStructType(
		"internal.ContinueAsNewError",
		() => new ContinueAsNewError(),
		() => [$.methodSignature("Args", [], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], true), $.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Header", [], [/* @__PURE__ */ $.pointerType("shared.Header")], true), $.methodSignature("Input", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("WorkflowIDReusePolicy", [], [/* @__PURE__ */ $.basicType("int", "internal.WorkflowIDReusePolicy")], true), $.methodSignature("WorkflowType", [], [/* @__PURE__ */ $.pointerType("internal.WorkflowType")], true)],
		ContinueAsNewError,
		() => [/* @__PURE__ */ $.structField("wfn", { kind: $.TypeKind.Interface, methods: [] }, [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }), [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("params", /* @__PURE__ */ $.pointerType("internal.executeWorkflowParams"), [2], 40, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class UnknownExternalWorkflowExecutionError {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UnknownExternalWorkflowExecutionError {
		return new UnknownExternalWorkflowExecutionError(this, true)
	}

	public __goscriptAssign(source: UnknownExternalWorkflowExecutionError): void {
	}

	public Error(): string {
		const e: UnknownExternalWorkflowExecutionError | $.VarRef<UnknownExternalWorkflowExecutionError> | null = this;
		return "UnknownExternalWorkflowExecution"
	}

	static __typeInfo = $.registerStructType(
		"internal.UnknownExternalWorkflowExecutionError",
		() => new UnknownExternalWorkflowExecutionError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		UnknownExternalWorkflowExecutionError,
		() => []
	)
}

export const errReasonPanic: string = "cadenceInternal:Panic"

export const errReasonGeneric: string = "cadenceInternal:Generic"

export const errReasonCanceled: string = "cadenceInternal:Canceled"

export const errReasonTimeout: string = "cadenceInternal:Timeout"

export const badNilErrMsgFmt: string = "cadence received an invalid nil `%T`. this likely means you have a typed nil which is being converted into an `error` value: https://go.dev/doc/faq#nil_error"

export let ErrNoData: $.GoError = errors.New("no data available")

export function __goscript_set_ErrNoData(__goscriptValue: $.GoError): void {
	ErrNoData = __goscriptValue
}

export let ErrTooManyArg: $.GoError = errors.New("too many arguments")

export function __goscript_set_ErrTooManyArg(__goscriptValue: $.GoError): void {
	ErrTooManyArg = __goscriptValue
}

export let ErrActivityResultPending: $.GoError = errors.New("not error: do not autocomplete, using Client.CompleteActivity() to complete")

export function __goscript_set_ErrActivityResultPending(__goscriptValue: $.GoError): void {
	ErrActivityResultPending = __goscriptValue
}

export async function NewCustomError(reason: string, details: $.Slice<any>): globalThis.Promise<CustomError | $.VarRef<CustomError> | null> {
	if (strings.HasPrefix(reason, "cadenceInternal:")) {
		$.panic("'cadenceInternal:' is reserved prefix, please use different reason")
	}
	// When return error to user, use EncodedValues as details and data is ready to be decoded by calling Get
	if ($.sliceLen(details) == 1) {
		{
			let __goscriptTuple0: any = $.typeAssertTuple<__goscript_workflow_testsuite.EncodedValues | $.VarRef<__goscript_workflow_testsuite.EncodedValues> | null>($.arrayIndex(details!, 0), /* @__PURE__ */ $.pointerType("internal.EncodedValues"))
			let d: __goscript_workflow_testsuite.EncodedValues | $.VarRef<__goscript_workflow_testsuite.EncodedValues> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				return new CustomError({reason: reason, details: $.interfaceValue<__goscript_encoded.Values | null>(d, "*internal.EncodedValues", /* @__PURE__ */ $.pointerType("internal.EncodedValues"))})
			}
		}
	}
	if (details == null) {
		// details must be a valid implementation of Values, so we use a typed-nil
		return new CustomError({reason: reason, details: $.namedValueInterfaceValue<__goscript_encoded.Values | null>((null as ErrorDetailsValues), "internal.ErrorDetailsValues", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())})
	}
	let customError: CustomError | $.VarRef<CustomError> | null = new CustomError({reason: reason})
	// CustomErrorOptions get immediately applied, everything else goes to the ErrorDetailsValues
	let detailsValues: ErrorDetailsValues = ($.makeSlice<any>(0, $.sliceLen(details)) as ErrorDetailsValues)
	for (let __goscriptRangeTarget0 = details, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let detail = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as any)
		{
			let [asOption, ok] = $.typeAssertTuple<((customError: CustomError | $.VarRef<CustomError> | null) => void) | null>(detail, ({ kind: $.TypeKind.Function, name: "internal.CustomErrorOption", params: [/* @__PURE__ */ $.pointerType("internal.CustomError")], results: [] } as $.FunctionTypeInfo))
			if (ok) {
				void (__goscriptAwait = asOption!(customError), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				continue
			}
		}
		detailsValues = ($.appendOne((detailsValues as ErrorDetailsValues), detail, $.appendZeros.nil) as ErrorDetailsValues)
	}
	$.pointerValue<CustomError>(customError).details = $.namedValueInterfaceValue<__goscript_encoded.Values | null>(detailsValues, "internal.ErrorDetailsValues", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())
	return customError
}

export function WithFailureCategory(failureCategory: shared.FailureCategory): CustomErrorOption | null {
	return $.functionValue((customError: CustomError | $.VarRef<CustomError> | null): void => {
		$.pointerValue<CustomError>(customError).failureCategory = shared.FailureCategory_Ptr(failureCategory)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.CustomError")], results: [] } as $.FunctionTypeInfo))
}

export function WithNextRetryDelay(delay: time.Duration): CustomErrorOption | null {
	return $.functionValue((customError: CustomError | $.VarRef<CustomError> | null): void => {
		$.pointerValue<CustomError>(customError).nextRetryDelay = delay
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.CustomError")], results: [] } as $.FunctionTypeInfo))
}

export function NewTimeoutError(timeoutType: shared.TimeoutType, details: $.Slice<any>): TimeoutError | $.VarRef<TimeoutError> | null {
	if ($.sliceLen(details) == 1) {
		{
			let __goscriptTuple1: any = $.typeAssertTuple<__goscript_workflow_testsuite.EncodedValues | $.VarRef<__goscript_workflow_testsuite.EncodedValues> | null>($.arrayIndex(details!, 0), /* @__PURE__ */ $.pointerType("internal.EncodedValues"))
			let d: __goscript_workflow_testsuite.EncodedValues | $.VarRef<__goscript_workflow_testsuite.EncodedValues> | null = __goscriptTuple1[0]
			let ok = __goscriptTuple1[1]
			if (ok) {
				return new TimeoutError({timeoutType: timeoutType, details: $.interfaceValue<__goscript_encoded.Values | null>(d, "*internal.EncodedValues", /* @__PURE__ */ $.pointerType("internal.EncodedValues"))})
			}
		}
	}
	return new TimeoutError({timeoutType: timeoutType, details: $.namedValueInterfaceValue<__goscript_encoded.Values | null>((details as ErrorDetailsValues), "internal.ErrorDetailsValues", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())})
}

export function NewHeartbeatTimeoutError(details: $.Slice<any>): TimeoutError | $.VarRef<TimeoutError> | null {
	return NewTimeoutError(3, details)
}

export function NewCanceledError(details: $.Slice<any>): CanceledError | $.VarRef<CanceledError> | null {
	if ($.sliceLen(details) == 1) {
		{
			let __goscriptTuple2: any = $.typeAssertTuple<__goscript_workflow_testsuite.EncodedValues | $.VarRef<__goscript_workflow_testsuite.EncodedValues> | null>($.arrayIndex(details!, 0), /* @__PURE__ */ $.pointerType("internal.EncodedValues"))
			let d: __goscript_workflow_testsuite.EncodedValues | $.VarRef<__goscript_workflow_testsuite.EncodedValues> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (ok) {
				return new CanceledError({details: $.interfaceValue<__goscript_encoded.Values | null>(d, "*internal.EncodedValues", /* @__PURE__ */ $.pointerType("internal.EncodedValues"))})
			}
		}
	}
	return new CanceledError({details: $.namedValueInterfaceValue<__goscript_encoded.Values | null>((details as ErrorDetailsValues), "internal.ErrorDetailsValues", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())})
}

export function IsCanceledError(err: $.GoError): boolean {
	let [, ok] = $.typeAssertTuple<CanceledError | $.VarRef<CanceledError> | null>(err, /* @__PURE__ */ $.pointerType("internal.CanceledError"))
	return ok
}

export async function NewContinueAsNewError(ctx: __goscript_context.Context | null, wfn: any, args: $.Slice<any>): globalThis.Promise<ContinueAsNewError | $.VarRef<ContinueAsNewError> | null> {
	// Validate type and its arguments.
	let options: __goscript_internal_workflow.workflowOptions | $.VarRef<__goscript_internal_workflow.workflowOptions> | null = await __goscript_internal_workflow.getWorkflowEnvOptions(ctx)
	let options$: __goscript_internal_workflow.workflowOptions = options == null ? $.pointerTarget<__goscript_internal_workflow.workflowOptions>(options) : (options as any).__isVarRef === true ? (options as any).value : (options as any).__goValue === undefined ? (options as any) : $.pointerTarget<__goscript_internal_workflow.workflowOptions>(options)
	if (options == null) {
		$.panic("context is missing required options for continue as new")
	}
	let env = await __goscript_internal_workflow.getWorkflowEnvironment(ctx)
	let __goscriptTuple3: any = await __goscript_internal_workflow.getValidatedWorkflowFunction(wfn, args, (options$ as __goscript_internal_workflow.workflowOptions).dataConverter, ((__goscriptAwait = (env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? (env as Exclude<__goscript_internal_worker_base.workflowEnvironment, null>) : $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>(env)).GetRegistry(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_registry.registry | $.VarRef<__goscript_registry.registry> | null))
	let workflowType: __goscript_workflow.WorkflowType | $.VarRef<__goscript_workflow.WorkflowType> | null = __goscriptTuple3[0]
	let input: $.Slice<number> = __goscriptTuple3[1]
	let err = __goscriptTuple3[2]
	if (err != null) {
		$.panic((err as any))
	}
	if (((options$ as __goscript_internal_workflow.workflowOptions).taskListName == null) || ($.stringEqual($.pointerValue<string>((options$ as __goscript_internal_workflow.workflowOptions).taskListName), ""))) {
		$.panic("invalid task list provided")
	}
	if (((options$ as __goscript_internal_workflow.workflowOptions).executionStartToCloseTimeoutSeconds == null) || ($.pointerValue<number>((options$ as __goscript_internal_workflow.workflowOptions).executionStartToCloseTimeoutSeconds) <= 0)) {
		$.panic("invalid executionStartToCloseTimeoutSeconds provided")
	}
	if (((options$ as __goscript_internal_workflow.workflowOptions).taskStartToCloseTimeoutSeconds == null) || ($.pointerValue<number>((options$ as __goscript_internal_workflow.workflowOptions).taskStartToCloseTimeoutSeconds) <= 0)) {
		$.panic("invalid taskStartToCloseTimeoutSeconds provided")
	}
	{
		let __goscriptShadow0 = await __goscript_internal_workflow.validateCronSchedule((options$ as __goscript_internal_workflow.workflowOptions).cronSchedule)
		if (__goscriptShadow0 != null) {
			$.panic((__goscriptShadow0 as any))
		}
	}

	let params: __goscript_internal_workflow.executeWorkflowParams | $.VarRef<__goscript_internal_workflow.executeWorkflowParams> | null = (await (async () => { const __goscriptLiteralField0 = await __goscript_workflow.getWorkflowHeader(ctx, (options$ as __goscript_internal_workflow.workflowOptions).contextPropagators); return new __goscript_internal_workflow.executeWorkflowParams({workflowOptions: (options$ as __goscript_internal_workflow.workflowOptions), workflowType: workflowType, input: input, header: __goscriptLiteralField0}) })())
	return new ContinueAsNewError({wfn: wfn, args: args, params: params})
}

export function newPanicError(value: any, stackTrace: string): PanicError | $.VarRef<PanicError> | null {
	return new PanicError({value: value, stackTrace: stackTrace})
}

export function newWorkflowPanicError(value: any, stackTrace: string): workflowPanicError | $.VarRef<workflowPanicError> | null {
	return new workflowPanicError({value: value, stackTrace: stackTrace})
}

export function newTerminatedError(): TerminatedError | $.VarRef<TerminatedError> | null {
	return new TerminatedError()
}

export function newUnknownExternalWorkflowExecutionError(): UnknownExternalWorkflowExecutionError | $.VarRef<UnknownExternalWorkflowExecutionError> | null {
	return new UnknownExternalWorkflowExecutionError()
}

export function ErrorDetailsValues_HasValues(b: ErrorDetailsValues): boolean {
	return (b != null) && ($.sliceLen((b as ErrorDetailsValues)) != 0)
}

export async function ErrorDetailsValues_Get(b: ErrorDetailsValues, valuePtr: $.Slice<any>): globalThis.Promise<$.GoError> {
	if (!ErrorDetailsValues_HasValues(b)) {
		return ErrNoData
	}
	if ($.sliceLen(valuePtr) > $.sliceLen((b as ErrorDetailsValues))) {
		return ErrTooManyArg
	}
	for (let __goscriptRangeTarget1 = valuePtr, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow0 = $.sliceRange(b), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let item = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as any)
		let target = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf(item))).Elem()))
		let val = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as any))))
		if (!(__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(val)).Type()).AssignableTo($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(target)).Type())!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			return fmt.Errorf("unable to decode argument: cannot set %v value to %v field", ($.markAsStructValue($.cloneStructValue(val)).Type() as any), ($.markAsStructValue($.cloneStructValue(target)).Type() as any))
		}
		$.markAsStructValue($.cloneStructValue(target)).Set($.markAsStructValue($.cloneStructValue(val)))
	}
	return null
}

export async function NewNonDeterminsticError(reason: string, info: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, history: shared.HistoryEvent | $.VarRef<shared.HistoryEvent> | null, decision: shared.Decision | $.VarRef<shared.Decision> | null): globalThis.Promise<$.GoError> {
	const info$: __goscript_workflow.WorkflowInfo = info == null ? $.pointerTarget<__goscript_workflow.WorkflowInfo>(info) : (info as any).__isVarRef === true ? (info as any).value : (info as any).__goValue === undefined ? (info as any) : $.pointerTarget<__goscript_workflow.WorkflowInfo>(info)
	let historyText: string = ""
	if (history != null) {
		historyText = await util.HistoryEventToString(history)
	}
	let decisionText: string = ""
	if (decision != null) {
		decisionText = await util.DecisionToString(decision)
	}
	return $.interfaceValue<$.GoError>(new NonDeterministicError({Reason: reason, WorkflowType: (info$ as __goscript_workflow.WorkflowInfo).WorkflowType.Name, WorkflowID: (info$ as __goscript_workflow.WorkflowInfo).WorkflowExecution.ID, RunID: (info$ as __goscript_workflow.WorkflowInfo).WorkflowExecution.RunID, TaskList: (info$ as __goscript_workflow.WorkflowInfo).TaskListName, DomainName: (info$ as __goscript_workflow.WorkflowInfo).Domain, HistoryEventText: historyText, DecisionText: decisionText}), "*internal.NonDeterministicError", /* @__PURE__ */ $.pointerType("internal.NonDeterministicError"))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Encode: (receiver: any, ...args: any[]) => (shared.TimeoutType_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (shared.TimeoutType_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (shared.TimeoutType_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (shared.TimeoutType_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (shared.TimeoutType_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (shared.TimeoutType_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (shared.TimeoutType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (shared.TimeoutType_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
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
	return __goscriptStatic3$value ??= ({Get: (receiver: any, ...args: any[]) => (ErrorDetailsValues_Get as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), HasValues: (receiver: any, ...args: any[]) => (ErrorDetailsValues_HasValues as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "internal.ErrorDetailsValues"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Get", [["valuePtr", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"]), $.methodSignature("HasValues", [], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptAwait: any
