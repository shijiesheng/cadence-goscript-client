// Generated file based on query_builder.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as math from "@goscript/math/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/fmt/index.js"
import "@goscript/math/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.WorkflowStatus", "internal.QueryBuilder", "internal.queryBuilderImpl"])

export type WorkflowStatus = string

export type QueryBuilder = {
	Build(): string
	CloseTime(_p0: time.Time, _p1: time.Time): QueryBuilder | null | globalThis.Promise<QueryBuilder | null>
	ExcludeWorkflowTypes(_p0: $.Slice<string>): QueryBuilder | null | globalThis.Promise<QueryBuilder | null>
	StartTime(_p0: time.Time, _p1: time.Time): QueryBuilder | null | globalThis.Promise<QueryBuilder | null>
	WorkflowStatus(_p0: $.Slice<WorkflowStatus>): QueryBuilder | null
	WorkflowTypes(_p0: $.Slice<string>): QueryBuilder | null | globalThis.Promise<QueryBuilder | null>
}

$.registerInterfaceType(
	"internal.QueryBuilder",
	null,
	[$.methodSignature("Build", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("CloseTime", ["time.Time", "time.Time"], ["internal.QueryBuilder"]), $.methodSignature("ExcludeWorkflowTypes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["internal.QueryBuilder"]), $.methodSignature("StartTime", ["time.Time", "time.Time"], ["internal.QueryBuilder"]), $.methodSignature("WorkflowStatus", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string", "internal.WorkflowStatus"))], ["internal.QueryBuilder"]), $.methodSignature("WorkflowTypes", [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], ["internal.QueryBuilder"])]
);

export class queryBuilderImpl {
	public get builder(): strings.Builder {
		return this._fields.builder
	}

	public set builder(value: strings.Builder) {
		this._fields.builder = value
	}

	public _fields: {
		builder: strings.Builder
	}

	constructor(init?: Partial<{builder?: strings.Builder}>, __goscriptValue?: boolean) {
		this._fields = {
			builder: init?.builder ? $.markAsStructValue($.cloneStructValue(init.builder)) : $.markAsStructValue(new strings.Builder())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): queryBuilderImpl {
		return new queryBuilderImpl(this, true)
	}

	public __goscriptAssign(source: queryBuilderImpl): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.builder, values.builder)
	}

	public Build(): string {
		const q: queryBuilderImpl | $.VarRef<queryBuilderImpl> | null = this;
		return $.pointerValue<queryBuilderImpl>(q).builder.String()
	}

	public async CloseTime(minCloseTime: time.Time, maxCloseTime: time.Time): globalThis.Promise<QueryBuilder | null> {
		const q: queryBuilderImpl | $.VarRef<queryBuilderImpl> | null = this;
		let CloseTimeQueries: $.Slice<string> = $.makeSlice<string>(0, 2, "string")
		if (!$.markAsStructValue($.cloneStructValue(minCloseTime)).IsZero()) {
			CloseTimeQueries = $.appendOne(CloseTimeQueries, await fmt.Sprintf($.concatString("CloseTime", " >= %v"), $.basicInterfaceValue($.markAsStructValue($.cloneStructValue(minCloseTime)).UnixNano(), "int64")))
		}
		if (!$.markAsStructValue($.cloneStructValue(maxCloseTime)).Equal($.markAsStructValue($.cloneStructValue(maxTimestamp)))) {
			CloseTimeQueries = $.appendOne(CloseTimeQueries, await fmt.Sprintf($.concatString("CloseTime", " <= %v"), $.basicInterfaceValue($.markAsStructValue($.cloneStructValue(maxCloseTime)).UnixNano(), "int64")))
		}

		void (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as queryBuilderImpl).appendPartialQuery(strings.Join(CloseTimeQueries, " and ")) : queryBuilderImpl.prototype.appendPartialQuery.call(q, strings.Join(CloseTimeQueries, " and ")))
		return $.interfaceValue<QueryBuilder | null>(q, "*internal.queryBuilderImpl", /* @__PURE__ */ $.pointerType("internal.queryBuilderImpl"))
	}

	public async ExcludeWorkflowTypes(types: $.Slice<string>): globalThis.Promise<QueryBuilder | null> {
		const q: queryBuilderImpl | $.VarRef<queryBuilderImpl> | null = this;
		if ($.sliceLen(types) == 0) {
			return $.interfaceValue<QueryBuilder | null>(q, "*internal.queryBuilderImpl", /* @__PURE__ */ $.pointerType("internal.queryBuilderImpl"))
		}
		let excludeTypeQueries: $.Slice<string> = $.makeSlice<string>(0, $.sliceLen(types), "string")
		for (let __goscriptRangeTarget0 = types, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let workflowType = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
			excludeTypeQueries = $.appendOne(excludeTypeQueries, await fmt.Sprintf($.concatString("WorkflowType", " != \"%v\""), workflowType))
		}
		void (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as queryBuilderImpl).appendPartialQuery(strings.Join(excludeTypeQueries, " and ")) : queryBuilderImpl.prototype.appendPartialQuery.call(q, strings.Join(excludeTypeQueries, " and ")))
		return $.interfaceValue<QueryBuilder | null>(q, "*internal.queryBuilderImpl", /* @__PURE__ */ $.pointerType("internal.queryBuilderImpl"))
	}

	public async StartTime(minStartTime: time.Time, maxStartTime: time.Time): globalThis.Promise<QueryBuilder | null> {
		const q: queryBuilderImpl | $.VarRef<queryBuilderImpl> | null = this;
		let startTimeQueries: $.Slice<string> = $.makeSlice<string>(0, 2, "string")
		if (!$.markAsStructValue($.cloneStructValue(minStartTime)).IsZero()) {
			startTimeQueries = $.appendOne(startTimeQueries, await fmt.Sprintf($.concatString("StartTime", " >= %v"), $.basicInterfaceValue($.markAsStructValue($.cloneStructValue(minStartTime)).UnixNano(), "int64")))
		}
		if (!$.markAsStructValue($.cloneStructValue(maxStartTime)).Equal($.markAsStructValue($.cloneStructValue(maxTimestamp)))) {
			startTimeQueries = $.appendOne(startTimeQueries, await fmt.Sprintf($.concatString("StartTime", " <= %v"), $.basicInterfaceValue($.markAsStructValue($.cloneStructValue(maxStartTime)).UnixNano(), "int64")))
		}

		void (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as queryBuilderImpl).appendPartialQuery(strings.Join(startTimeQueries, " and ")) : queryBuilderImpl.prototype.appendPartialQuery.call(q, strings.Join(startTimeQueries, " and ")))
		return $.interfaceValue<QueryBuilder | null>(q, "*internal.queryBuilderImpl", /* @__PURE__ */ $.pointerType("internal.queryBuilderImpl"))
	}

	public WorkflowStatus(statuses: $.Slice<WorkflowStatus>): QueryBuilder | null {
		const q: queryBuilderImpl | $.VarRef<queryBuilderImpl> | null = this;
		let workflowStatusQueries: $.Slice<string> = $.makeSlice<string>(0, $.sliceLen(statuses), "string")
		for (let __goscriptRangeTarget1 = statuses, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let status = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as WorkflowStatus)
			let statusQuery: string = ""
			switch (status) {
				case "OPEN":
				{
					statusQuery = $.concatString("CloseTime", " = missing")
					break
				}
				case "CLOSED":
				{
					statusQuery = $.concatString("CloseTime", " != missing")
					break
				}
				case "ALL":
				{
					return $.interfaceValue<QueryBuilder | null>(q, "*internal.queryBuilderImpl", /* @__PURE__ */ $.pointerType("internal.queryBuilderImpl"))
					break
				}
				default:
				{
					statusQuery = $.concatString(($.concatString(($.concatString("CloseStatus", " = \"")), status)), "\"")
					break
				}
			}
			workflowStatusQueries = $.appendOne(workflowStatusQueries, statusQuery)
		}
		void (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as queryBuilderImpl).appendPartialQuery(strings.Join(workflowStatusQueries, " or ")) : queryBuilderImpl.prototype.appendPartialQuery.call(q, strings.Join(workflowStatusQueries, " or ")))
		return $.interfaceValue<QueryBuilder | null>(q, "*internal.queryBuilderImpl", /* @__PURE__ */ $.pointerType("internal.queryBuilderImpl"))
	}

	public async WorkflowTypes(types: $.Slice<string>): globalThis.Promise<QueryBuilder | null> {
		const q: queryBuilderImpl | $.VarRef<queryBuilderImpl> | null = this;
		let workflowTypeQueries: $.Slice<string> = $.makeSlice<string>(0, $.sliceLen(types), "string")
		for (let __goscriptRangeTarget2 = types, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
			let workflowType = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
			workflowTypeQueries = $.appendOne(workflowTypeQueries, await fmt.Sprintf($.concatString("WorkflowType", " = \"%v\""), workflowType))
		}
		void (q !== null && (q as any).__isVarRef !== true && (q as any).__goValue === undefined ? ((q as any) as queryBuilderImpl).appendPartialQuery(strings.Join(workflowTypeQueries, " or ")) : queryBuilderImpl.prototype.appendPartialQuery.call(q, strings.Join(workflowTypeQueries, " or ")))
		return $.interfaceValue<QueryBuilder | null>(q, "*internal.queryBuilderImpl", /* @__PURE__ */ $.pointerType("internal.queryBuilderImpl"))
	}

	public appendPartialQuery(query: string): void {
		const q: queryBuilderImpl | $.VarRef<queryBuilderImpl> | null = this;
		const q$: queryBuilderImpl = q == null ? $.pointerTarget<queryBuilderImpl>(q) : (q as any).__isVarRef === true ? (q as any).value : (q as any).__goValue === undefined ? (q as any) : $.pointerTarget<queryBuilderImpl>(q)
		if ($.stringLen(query) == 0) {
			return
		}

		if ((q$ as queryBuilderImpl).builder.Len() != 0) {
			void (q$ as queryBuilderImpl).builder.WriteString(" and ")
		}

		void (q$ as queryBuilderImpl).builder.WriteRune(40)
		void (q$ as queryBuilderImpl).builder.WriteString(query)
		void (q$ as queryBuilderImpl).builder.WriteRune(41)
	}

	static __typeInfo = $.registerStructType(
		"internal.queryBuilderImpl",
		() => new queryBuilderImpl(),
		() => [$.methodSignature("Build", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("CloseTime", [["minCloseTime", "time.Time"], ["maxCloseTime", "time.Time"]], ["internal.QueryBuilder"], true), $.methodSignature("ExcludeWorkflowTypes", [["types", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["internal.QueryBuilder"], true), $.methodSignature("StartTime", [["minStartTime", "time.Time"], ["maxStartTime", "time.Time"]], ["internal.QueryBuilder"], true), $.methodSignature("WorkflowStatus", [["statuses", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string", "internal.WorkflowStatus"))]], ["internal.QueryBuilder"], true), $.methodSignature("WorkflowTypes", [["types", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], ["internal.QueryBuilder"], true), $.methodSignature("appendPartialQuery", [["query", /* @__PURE__ */ $.basicType("string")]], [], true)],
		queryBuilderImpl,
		() => [/* @__PURE__ */ $.structField("builder", "strings.Builder", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export const WorkflowStatusOpen: WorkflowStatus = "OPEN"

export const WorkflowStatusClosed: WorkflowStatus = "CLOSED"

export const WorkflowStatusALL: WorkflowStatus = "ALL"

export const keyWorkflowType: string = "WorkflowType"

export const keyCloseStatus: string = "CloseStatus"

export const keyStartTime: string = "StartTime"

export const keyCloseTime: string = "CloseTime"

export let WorkflowStatusCompleted: WorkflowStatus = await shared.WorkflowExecutionCloseStatus_String(shared.WorkflowExecutionCloseStatusCompleted)

export function __goscript_set_WorkflowStatusCompleted(__goscriptValue: WorkflowStatus): void {
	WorkflowStatusCompleted = __goscriptValue
}

export let WorkflowStatusFailed: WorkflowStatus = await shared.WorkflowExecutionCloseStatus_String(shared.WorkflowExecutionCloseStatusFailed)

export function __goscript_set_WorkflowStatusFailed(__goscriptValue: WorkflowStatus): void {
	WorkflowStatusFailed = __goscriptValue
}

export let WorkflowStatusCanceled: WorkflowStatus = await shared.WorkflowExecutionCloseStatus_String(shared.WorkflowExecutionCloseStatusCanceled)

export function __goscript_set_WorkflowStatusCanceled(__goscriptValue: WorkflowStatus): void {
	WorkflowStatusCanceled = __goscriptValue
}

export let WorkflowStatusTerminated: WorkflowStatus = await shared.WorkflowExecutionCloseStatus_String(shared.WorkflowExecutionCloseStatusTerminated)

export function __goscript_set_WorkflowStatusTerminated(__goscriptValue: WorkflowStatus): void {
	WorkflowStatusTerminated = __goscriptValue
}

export let WorkflowStatusContinuedAsNew: WorkflowStatus = await shared.WorkflowExecutionCloseStatus_String(shared.WorkflowExecutionCloseStatusContinuedAsNew)

export function __goscript_set_WorkflowStatusContinuedAsNew(__goscriptValue: WorkflowStatus): void {
	WorkflowStatusContinuedAsNew = __goscriptValue
}

export let WorkflowStatusTimedOut: WorkflowStatus = await shared.WorkflowExecutionCloseStatus_String(shared.WorkflowExecutionCloseStatusTimedOut)

export function __goscript_set_WorkflowStatusTimedOut(__goscriptValue: WorkflowStatus): void {
	WorkflowStatusTimedOut = __goscriptValue
}

export let maxTimestamp: time.Time = $.markAsStructValue($.cloneStructValue(time.Unix(0n, 9223372036854775807n)))

export function __goscript_set_maxTimestamp(__goscriptValue: time.Time): void {
	$.assignStruct(maxTimestamp, __goscriptValue)
}

export function NewQueryBuilder(): QueryBuilder | null {
	return $.interfaceValue<QueryBuilder | null>(new queryBuilderImpl(), "*internal.queryBuilderImpl", /* @__PURE__ */ $.pointerType("internal.queryBuilderImpl"))
}

export function ToWorkflowStatus(statusString: string): [WorkflowStatus, $.GoError] {
	let status = strings.ToUpper(statusString)
	switch (status) {
		case "OPEN":
		case "CLOSED":
		case WorkflowStatusCompleted:
		case WorkflowStatusFailed:
		case WorkflowStatusCanceled:
		case WorkflowStatusTerminated:
		case WorkflowStatusContinuedAsNew:
		case WorkflowStatusTimedOut:
		case "ALL":
		{
			return [status, null]
			break
		}
		default:
		{
			return ["", fmt.Errorf("unknown workflow status: %v", statusString)]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}
