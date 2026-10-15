// Generated file based on interceptors.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"
import "@goscript/time/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./workflow.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.WorkflowInterceptorFactory", "internal.WorkflowInterceptor", "internal.WorkflowInterceptorBase"])

export type WorkflowInterceptorFactory = {
	NewInterceptor(info: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, next: WorkflowInterceptor | null): WorkflowInterceptor | null
}

$.registerInterfaceType(
	"internal.WorkflowInterceptorFactory",
	null,
	[$.methodSignature("NewInterceptor", [["info", /* @__PURE__ */ $.pointerType("internal.WorkflowInfo")], ["next", "internal.WorkflowInterceptor"]], ["internal.WorkflowInterceptor"])]
);

export type WorkflowInterceptor = {
	ExecuteActivity(ctx: __goscript_context.Context | null, activityType: string, args: $.Slice<any>): __goscript_workflow.Future | null | globalThis.Promise<__goscript_workflow.Future | null>
	ExecuteChildWorkflow(ctx: __goscript_context.Context | null, childWorkflowType: string, args: $.Slice<any>): __goscript_workflow.ChildWorkflowFuture | null | globalThis.Promise<__goscript_workflow.ChildWorkflowFuture | null>
	ExecuteLocalActivity(ctx: __goscript_context.Context | null, activityType: string, args: $.Slice<any>): __goscript_workflow.Future | null | globalThis.Promise<__goscript_workflow.Future | null>
	ExecuteWorkflow(ctx: __goscript_context.Context | null, workflowType: string, args: $.Slice<any>): $.Slice<any> | globalThis.Promise<$.Slice<any>>
	GetLastCompletionResult(ctx: __goscript_context.Context | null, d: $.Slice<any>): $.GoError | globalThis.Promise<$.GoError>
	GetLogger(ctx: __goscript_context.Context | null): zap.Logger | $.VarRef<zap.Logger> | null | globalThis.Promise<zap.Logger | $.VarRef<zap.Logger> | null>
	GetMetricsScope(ctx: __goscript_context.Context | null): tally.Scope | null | globalThis.Promise<tally.Scope | null>
	GetSignalChannel(ctx: __goscript_context.Context | null, signalName: string): __goscript_workflow.Channel | null | globalThis.Promise<__goscript_workflow.Channel | null>
	GetVersion(ctx: __goscript_context.Context | null, changeID: string, minSupported: __goscript_workflow.Version, maxSupported: __goscript_workflow.Version, opts: $.Slice<__goscript_workflow.GetVersionOption | null>): __goscript_workflow.Version | globalThis.Promise<__goscript_workflow.Version>
	GetWorkflowInfo(ctx: __goscript_context.Context | null): __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null | globalThis.Promise<__goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null>
	HasLastCompletionResult(ctx: __goscript_context.Context | null): boolean | globalThis.Promise<boolean>
	IsReplaying(ctx: __goscript_context.Context | null): boolean | globalThis.Promise<boolean>
	MutableSideEffect(ctx: __goscript_context.Context | null, id: string, f: ((ctx: __goscript_context.Context | null) => any | globalThis.Promise<any>) | null, equals: ((a: any, b: any) => boolean | globalThis.Promise<boolean>) | null): __goscript_encoded.Value | null | globalThis.Promise<__goscript_encoded.Value | null>
	NewTimer(ctx: __goscript_context.Context | null, d: time.Duration): __goscript_workflow.Future | null | globalThis.Promise<__goscript_workflow.Future | null>
	Now(ctx: __goscript_context.Context | null): time.Time | globalThis.Promise<time.Time>
	RequestCancelExternalWorkflow(ctx: __goscript_context.Context | null, workflowID: string, runID: string): __goscript_workflow.Future | null | globalThis.Promise<__goscript_workflow.Future | null>
	SetQueryHandler(ctx: __goscript_context.Context | null, queryType: string, handler: any): $.GoError | globalThis.Promise<$.GoError>
	SideEffect(ctx: __goscript_context.Context | null, f: ((ctx: __goscript_context.Context | null) => any | globalThis.Promise<any>) | null): __goscript_encoded.Value | null | globalThis.Promise<__goscript_encoded.Value | null>
	SignalExternalWorkflow(ctx: __goscript_context.Context | null, workflowID: string, runID: string, signalName: string, arg: any): __goscript_workflow.Future | null | globalThis.Promise<__goscript_workflow.Future | null>
	Sleep(ctx: __goscript_context.Context | null, d: time.Duration): $.GoError | globalThis.Promise<$.GoError>
	UpsertSearchAttributes(ctx: __goscript_context.Context | null, attributes: globalThis.Map<string, any> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"internal.WorkflowInterceptor",
	null,
	[$.methodSignature("ExecuteActivity", [["ctx", "internal.Context"], ["activityType", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.Future"]), $.methodSignature("ExecuteChildWorkflow", [["ctx", "internal.Context"], ["childWorkflowType", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.ChildWorkflowFuture"]), $.methodSignature("ExecuteLocalActivity", [["ctx", "internal.Context"], ["activityType", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.Future"]), $.methodSignature("ExecuteWorkflow", [["ctx", "internal.Context"], ["workflowType", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]), $.methodSignature("GetLastCompletionResult", [["ctx", "internal.Context"], ["d", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"]), $.methodSignature("GetLogger", [["ctx", "internal.Context"]], [/* @__PURE__ */ $.pointerType("zap.Logger")]), $.methodSignature("GetMetricsScope", [["ctx", "internal.Context"]], ["tally.Scope"]), $.methodSignature("GetSignalChannel", [["ctx", "internal.Context"], ["signalName", /* @__PURE__ */ $.basicType("string")]], ["internal.Channel"]), $.methodSignature("GetVersion", [["ctx", "internal.Context"], ["changeID", /* @__PURE__ */ $.basicType("string")], ["minSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")], ["maxSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")], ["opts", /* @__PURE__ */ $.sliceType("internal.GetVersionOption")]], [/* @__PURE__ */ $.basicType("int", "internal.Version")]), $.methodSignature("GetWorkflowInfo", [["ctx", "internal.Context"]], [/* @__PURE__ */ $.pointerType("internal.WorkflowInfo")]), $.methodSignature("HasLastCompletionResult", [["ctx", "internal.Context"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsReplaying", [["ctx", "internal.Context"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MutableSideEffect", [["ctx", "internal.Context"], ["id", /* @__PURE__ */ $.basicType("string")], ["f", ({ kind: $.TypeKind.Function, params: ["internal.Context"], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)], ["equals", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], ["internal.Value"]), $.methodSignature("NewTimer", [["ctx", "internal.Context"], ["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["internal.Future"]), $.methodSignature("Now", [["ctx", "internal.Context"]], ["time.Time"]), $.methodSignature("RequestCancelExternalWorkflow", [["ctx", "internal.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")]], ["internal.Future"]), $.methodSignature("SetQueryHandler", [["ctx", "internal.Context"], ["queryType", /* @__PURE__ */ $.basicType("string")], ["handler", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("SideEffect", [["ctx", "internal.Context"], ["f", ({ kind: $.TypeKind.Function, params: ["internal.Context"], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], ["internal.Value"]), $.methodSignature("SignalExternalWorkflow", [["ctx", "internal.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["arg", { kind: $.TypeKind.Interface, methods: [] }]], ["internal.Future"]), $.methodSignature("Sleep", [["ctx", "internal.Context"], ["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [["err", "error"]]), $.methodSignature("UpsertSearchAttributes", [["ctx", "internal.Context"], ["attributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })]], ["error"])]
);

export class WorkflowInterceptorBase {
	public get Next(): WorkflowInterceptor | null {
		return this._fields.Next
	}

	public set Next(value: WorkflowInterceptor | null) {
		this._fields.Next = value
	}

	public _fields: {
		Next: WorkflowInterceptor | null
	}

	constructor(init?: Partial<{Next?: WorkflowInterceptor | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Next: init?.Next ?? (null! as WorkflowInterceptor | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkflowInterceptorBase {
		return new WorkflowInterceptorBase(this, true)
	}

	public __goscriptAssign(source: WorkflowInterceptorBase): void {
		const target = this._fields
		const values = source._fields
		target.Next = $.assignFieldValue(target.Next, values.Next, "internal.WorkflowInterceptor")
	}

	public async ExecuteActivity(ctx: __goscript_context.Context | null, activityType: string, args: $.Slice<any>): globalThis.Promise<__goscript_workflow.Future | null> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).ExecuteActivity(ctx, activityType, args)
	}

	public async ExecuteChildWorkflow(ctx: __goscript_context.Context | null, childWorkflowType: string, args: $.Slice<any>): globalThis.Promise<__goscript_workflow.ChildWorkflowFuture | null> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).ExecuteChildWorkflow(ctx, childWorkflowType, args)
	}

	public async ExecuteLocalActivity(ctx: __goscript_context.Context | null, activityType: string, args: $.Slice<any>): globalThis.Promise<__goscript_workflow.Future | null> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).ExecuteLocalActivity(ctx, activityType, args)
	}

	public async ExecuteWorkflow(ctx: __goscript_context.Context | null, workflowType: string, args: $.Slice<any>): globalThis.Promise<$.Slice<any>> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).ExecuteWorkflow(ctx, workflowType, args)
	}

	public async GetLastCompletionResult(ctx: __goscript_context.Context | null, d: $.Slice<any>): globalThis.Promise<$.GoError> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).GetLastCompletionResult(ctx, d)
	}

	public async GetLogger(ctx: __goscript_context.Context | null): globalThis.Promise<zap.Logger | $.VarRef<zap.Logger> | null> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).GetLogger(ctx)
	}

	public async GetMetricsScope(ctx: __goscript_context.Context | null): globalThis.Promise<tally.Scope | null> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).GetMetricsScope(ctx)
	}

	public async GetSignalChannel(ctx: __goscript_context.Context | null, signalName: string): globalThis.Promise<__goscript_workflow.Channel | null> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).GetSignalChannel(ctx, signalName)
	}

	public async GetVersion(ctx: __goscript_context.Context | null, changeID: string, minSupported: __goscript_workflow.Version, maxSupported: __goscript_workflow.Version, opts: $.Slice<__goscript_workflow.GetVersionOption | null>): globalThis.Promise<__goscript_workflow.Version> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).GetVersion(ctx, changeID, minSupported, maxSupported, opts)
	}

	public async GetWorkflowInfo(ctx: __goscript_context.Context | null): globalThis.Promise<__goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).GetWorkflowInfo(ctx)
	}

	public async HasLastCompletionResult(ctx: __goscript_context.Context | null): globalThis.Promise<boolean> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).HasLastCompletionResult(ctx)
	}

	public async IsReplaying(ctx: __goscript_context.Context | null): globalThis.Promise<boolean> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).IsReplaying(ctx)
	}

	public async MutableSideEffect(ctx: __goscript_context.Context | null, id: string, f: ((ctx: __goscript_context.Context | null) => any | globalThis.Promise<any>) | null, equals: ((a: any, b: any) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<__goscript_encoded.Value | null> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).MutableSideEffect(ctx, id, f, equals)
	}

	public async NewTimer(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<__goscript_workflow.Future | null> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).NewTimer(ctx, d)
	}

	public async Now(ctx: __goscript_context.Context | null): globalThis.Promise<time.Time> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).Now(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time)))
	}

	public async RequestCancelExternalWorkflow(ctx: __goscript_context.Context | null, workflowID: string, runID: string): globalThis.Promise<__goscript_workflow.Future | null> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).RequestCancelExternalWorkflow(ctx, workflowID, runID)
	}

	public async SetQueryHandler(ctx: __goscript_context.Context | null, queryType: string, handler: any): globalThis.Promise<$.GoError> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).SetQueryHandler(ctx, queryType, handler)
	}

	public async SideEffect(ctx: __goscript_context.Context | null, f: ((ctx: __goscript_context.Context | null) => any | globalThis.Promise<any>) | null): globalThis.Promise<__goscript_encoded.Value | null> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).SideEffect(ctx, f)
	}

	public async SignalExternalWorkflow(ctx: __goscript_context.Context | null, workflowID: string, runID: string, signalName: string, arg: any): globalThis.Promise<__goscript_workflow.Future | null> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).SignalExternalWorkflow(ctx, workflowID, runID, signalName, arg)
	}

	public async Sleep(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<$.GoError> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).Sleep(ctx, d)
	}

	public async UpsertSearchAttributes(ctx: __goscript_context.Context | null, attributes: globalThis.Map<string, any> | null): globalThis.Promise<$.GoError> {
		const t: WorkflowInterceptorBase | $.VarRef<WorkflowInterceptorBase> | null = this;
		return $.pointerValue<Exclude<WorkflowInterceptor, null>>($.pointerValue<WorkflowInterceptorBase>(t).Next).UpsertSearchAttributes(ctx, attributes)
	}

	static __typeInfo = $.registerStructType(
		"internal.WorkflowInterceptorBase",
		() => new WorkflowInterceptorBase(),
		() => [$.methodSignature("ExecuteActivity", [["ctx", "internal.Context"], ["activityType", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.Future"], true), $.methodSignature("ExecuteChildWorkflow", [["ctx", "internal.Context"], ["childWorkflowType", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.ChildWorkflowFuture"], true), $.methodSignature("ExecuteLocalActivity", [["ctx", "internal.Context"], ["activityType", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.Future"], true), $.methodSignature("ExecuteWorkflow", [["ctx", "internal.Context"], ["workflowType", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], true), $.methodSignature("GetLastCompletionResult", [["ctx", "internal.Context"], ["d", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("GetLogger", [["ctx", "internal.Context"]], [/* @__PURE__ */ $.pointerType("zap.Logger")], true), $.methodSignature("GetMetricsScope", [["ctx", "internal.Context"]], ["tally.Scope"], true), $.methodSignature("GetSignalChannel", [["ctx", "internal.Context"], ["signalName", /* @__PURE__ */ $.basicType("string")]], ["internal.Channel"], true), $.methodSignature("GetVersion", [["ctx", "internal.Context"], ["changeID", /* @__PURE__ */ $.basicType("string")], ["minSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")], ["maxSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")], ["opts", /* @__PURE__ */ $.sliceType("internal.GetVersionOption")]], [/* @__PURE__ */ $.basicType("int", "internal.Version")], true), $.methodSignature("GetWorkflowInfo", [["ctx", "internal.Context"]], [/* @__PURE__ */ $.pointerType("internal.WorkflowInfo")], true), $.methodSignature("HasLastCompletionResult", [["ctx", "internal.Context"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("IsReplaying", [["ctx", "internal.Context"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MutableSideEffect", [["ctx", "internal.Context"], ["id", /* @__PURE__ */ $.basicType("string")], ["f", ({ kind: $.TypeKind.Function, params: ["internal.Context"], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)], ["equals", ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }, { kind: $.TypeKind.Interface, methods: [] }], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]], ["internal.Value"], true), $.methodSignature("NewTimer", [["ctx", "internal.Context"], ["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["internal.Future"], true), $.methodSignature("Now", [["ctx", "internal.Context"]], ["time.Time"], true), $.methodSignature("RequestCancelExternalWorkflow", [["ctx", "internal.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")]], ["internal.Future"], true), $.methodSignature("SetQueryHandler", [["ctx", "internal.Context"], ["queryType", /* @__PURE__ */ $.basicType("string")], ["handler", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("SideEffect", [["ctx", "internal.Context"], ["f", ({ kind: $.TypeKind.Function, params: ["internal.Context"], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo)]], ["internal.Value"], true), $.methodSignature("SignalExternalWorkflow", [["ctx", "internal.Context"], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["arg", { kind: $.TypeKind.Interface, methods: [] }]], ["internal.Future"], true), $.methodSignature("Sleep", [["ctx", "internal.Context"], ["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [["err", "error"]], true), $.methodSignature("UpsertSearchAttributes", [["ctx", "internal.Context"], ["attributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })]], ["error"], true)],
		WorkflowInterceptorBase,
		() => [/* @__PURE__ */ $.structField("Next", "internal.WorkflowInterceptor", [0], 0, true)]
	)
}

var __goscriptAwait: any
