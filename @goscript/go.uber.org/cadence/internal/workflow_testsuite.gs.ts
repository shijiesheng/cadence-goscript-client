// Generated file based on workflow_testsuite.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as time from "@goscript/time/index.js"

import * as mock from "@goscript/github.com/stretchr/testify/mock/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as list from "@goscript/container/list/index.js"

import * as clock from "@goscript/github.com/facebookgo/clock/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import type * as shadower from "@goscript/go.uber.org/cadence/.gen/go/shadower/index.js"

import * as auth from "@goscript/go.uber.org/cadence/internal/common/auth/index.js"

import * as debug from "@goscript/go.uber.org/cadence/internal/common/debug/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import * as __goscript_internal_decision_state_machine from "./internal_decision_state_machine.gs.ts"

import * as __goscript_internal_event_handlers from "./internal_event_handlers.gs.ts"

import * as __goscript_internal_poller_autoscaler from "./internal_poller_autoscaler.gs.ts"

import * as __goscript_internal_pressure_points from "./internal_pressure_points.gs.ts"

import * as __goscript_internal_public from "./internal_public.gs.ts"

import * as __goscript_internal_task_handlers from "./internal_task_handlers.gs.ts"

import * as __goscript_internal_task_pollers from "./internal_task_pollers.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_internal_workflow_client from "./internal_workflow_client.gs.ts"

import * as __goscript_internal_workflow_testsuite from "./internal_workflow_testsuite.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_worker from "./worker.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"

import * as __goscript_workflow_shadower from "./workflow_shadower.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/stretchr/testify/mock/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/container/list/index.js"
import "@goscript/github.com/facebookgo/clock/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/internal/common/auth/index.js"
import "@goscript/go.uber.org/cadence/internal/common/debug/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "./activity.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./error.gs.ts"
import "./headers.gs.ts"
import "./interceptors.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_decision_state_machine.gs.ts"
import "./internal_event_handlers.gs.ts"
import "./internal_poller_autoscaler.gs.ts"
import "./internal_pressure_points.gs.ts"
import "./internal_public.gs.ts"
import "./internal_task_handlers.gs.ts"
import "./internal_task_pollers.gs.ts"
import "./internal_utils.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_worker_base.gs.ts"
import "./internal_workflow.gs.ts"
import "./internal_workflow_client.gs.ts"
import "./internal_workflow_testsuite.gs.ts"
import "./registry.gs.ts"
import "./session.gs.ts"
import "./worker.gs.ts"
import "./workflow.gs.ts"
import "./workflow_shadower.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.EncodedValues", "internal.WorkflowTestSuite", "internal.TestWorkflowEnvironment", "internal.TestActivityEnvironment", "internal.MockCallWrapper"])

export class EncodedValues {
	public get values(): $.Slice<number> {
		return this._fields.values
	}

	public set values(value: $.Slice<number>) {
		this._fields.values = value
	}

	public get dataConverter(): __goscript_encoded.DataConverter | null {
		return this._fields.dataConverter
	}

	public set dataConverter(value: __goscript_encoded.DataConverter | null) {
		this._fields.dataConverter = value
	}

	public _fields: {
		values: $.Slice<number>
		dataConverter: __goscript_encoded.DataConverter | null
	}

	constructor(init?: Partial<{values?: $.Slice<number>, dataConverter?: __goscript_encoded.DataConverter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			values: init?.values ?? (null! as $.Slice<number>),
			dataConverter: init?.dataConverter ?? (null! as __goscript_encoded.DataConverter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EncodedValues {
		return new EncodedValues(this, true)
	}

	public __goscriptAssign(source: EncodedValues): void {
		const target = this._fields
		const values = source._fields
		target.values = values.values
		target.dataConverter = $.assignFieldValue(target.dataConverter, values.dataConverter, "internal.DataConverter")
	}

	public async Get(valuePtr: $.Slice<any>): globalThis.Promise<$.GoError> {
		const b = this;
		if (!b.HasValues()) {
			return __goscript_error.ErrNoData
		}
		return $.pointerValue<Exclude<__goscript_encoded.DataConverter, null>>(b.dataConverter).FromData(b.values, valuePtr)
	}

	public HasValues(): boolean {
		const b = this;
		return b.values != null
	}

	static __typeInfo = $.registerStructType(
		"internal.EncodedValues",
		() => new EncodedValues(),
		() => [$.methodSignature("Get", [["valuePtr", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"]), $.methodSignature("HasValues", [], [/* @__PURE__ */ $.basicType("bool")])],
		EncodedValues,
		() => [/* @__PURE__ */ $.structField("values", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("dataConverter", "internal.DataConverter", [1], 24, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class WorkflowTestSuite {
	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get scope(): tally.Scope | null {
		return this._fields.scope
	}

	public set scope(value: tally.Scope | null) {
		this._fields.scope = value
	}

	public get ctxProps(): $.Slice<__goscript_headers.ContextPropagator | null> {
		return this._fields.ctxProps
	}

	public set ctxProps(value: $.Slice<__goscript_headers.ContextPropagator | null>) {
		this._fields.ctxProps = value
	}

	public get header(): shared.Header | $.VarRef<shared.Header> | null {
		return this._fields.header
	}

	public set header(value: shared.Header | $.VarRef<shared.Header> | null) {
		this._fields.header = value
	}

	public _fields: {
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		scope: tally.Scope | null
		ctxProps: $.Slice<__goscript_headers.ContextPropagator | null>
		header: shared.Header | $.VarRef<shared.Header> | null
	}

	constructor(init?: Partial<{logger?: zap.Logger | $.VarRef<zap.Logger> | null, scope?: tally.Scope | null, ctxProps?: $.Slice<__goscript_headers.ContextPropagator | null>, header?: shared.Header | $.VarRef<shared.Header> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			scope: init?.scope ?? (null! as tally.Scope | null),
			ctxProps: init?.ctxProps ?? (null! as $.Slice<__goscript_headers.ContextPropagator | null>),
			header: init?.header ?? (null! as shared.Header | $.VarRef<shared.Header> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WorkflowTestSuite {
		return new WorkflowTestSuite(this, true)
	}

	public __goscriptAssign(source: WorkflowTestSuite): void {
		const target = this._fields
		const values = source._fields
		target.logger = values.logger
		target.scope = $.assignFieldValue(target.scope, values.scope, "tally.Scope")
		target.ctxProps = values.ctxProps
		target.header = values.header
	}

	public GetLogger(): zap.Logger | $.VarRef<zap.Logger> | null {
		const s: WorkflowTestSuite | $.VarRef<WorkflowTestSuite> | null = this;
		return $.pointerValue<WorkflowTestSuite>(s).logger
	}

	public async NewTestActivityEnvironment(): globalThis.Promise<TestActivityEnvironment | $.VarRef<TestActivityEnvironment> | null> {
		const s: WorkflowTestSuite | $.VarRef<WorkflowTestSuite> | null = this;
		return (await (async () => { const __goscriptLiteralField0 = await __goscript_internal_workflow_testsuite.newTestWorkflowEnvironmentImpl(s, null); return new TestActivityEnvironment({impl: __goscriptLiteralField0}) })())
	}

	public async NewTestWorkflowEnvironment(): globalThis.Promise<TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null> {
		const s: WorkflowTestSuite | $.VarRef<WorkflowTestSuite> | null = this;
		return (await (async () => { const __goscriptLiteralField1 = await __goscript_internal_workflow_testsuite.newTestWorkflowEnvironmentImpl(s, null); return new TestWorkflowEnvironment({impl: __goscriptLiteralField1}) })())
	}

	public SetContextPropagators(ctxProps: $.Slice<__goscript_headers.ContextPropagator | null>): void {
		let s: WorkflowTestSuite | $.VarRef<WorkflowTestSuite> | null = this;
		$.pointerValue<WorkflowTestSuite>(s).ctxProps = ctxProps
	}

	public SetHeader(header: shared.Header | $.VarRef<shared.Header> | null): void {
		let s: WorkflowTestSuite | $.VarRef<WorkflowTestSuite> | null = this;
		$.pointerValue<WorkflowTestSuite>(s).header = header
	}

	public SetLogger(logger: zap.Logger | $.VarRef<zap.Logger> | null): void {
		let s: WorkflowTestSuite | $.VarRef<WorkflowTestSuite> | null = this;
		$.pointerValue<WorkflowTestSuite>(s).logger = logger
	}

	public SetMetricsScope(scope: tally.Scope | null): void {
		let s: WorkflowTestSuite | $.VarRef<WorkflowTestSuite> | null = this;
		$.pointerValue<WorkflowTestSuite>(s).scope = scope
	}

	static __typeInfo = $.registerStructType(
		"internal.WorkflowTestSuite",
		() => new WorkflowTestSuite(),
		() => [$.methodSignature("GetLogger", [], [/* @__PURE__ */ $.pointerType("zap.Logger")], true), $.methodSignature("NewTestActivityEnvironment", [], [/* @__PURE__ */ $.pointerType("internal.TestActivityEnvironment")], true), $.methodSignature("NewTestWorkflowEnvironment", [], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetContextPropagators", [["ctxProps", /* @__PURE__ */ $.sliceType("internal.ContextPropagator")]], [], true), $.methodSignature("SetHeader", [["header", /* @__PURE__ */ $.pointerType("shared.Header")]], [], true), $.methodSignature("SetLogger", [["logger", /* @__PURE__ */ $.pointerType("zap.Logger")]], [], true), $.methodSignature("SetMetricsScope", [["scope", "tally.Scope"]], [], true)],
		WorkflowTestSuite,
		() => [/* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("scope", "tally.Scope", [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("ctxProps", /* @__PURE__ */ $.sliceType("internal.ContextPropagator"), [2], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("header", /* @__PURE__ */ $.pointerType("shared.Header"), [3], 48, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class TestWorkflowEnvironment {
	public get Mock(): mock.Mock {
		return this._fields.Mock
	}

	public set Mock(value: mock.Mock) {
		this._fields.Mock = value
	}

	public get impl(): __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl | $.VarRef<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl> | null {
		return this._fields.impl
	}

	public set impl(value: __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl | $.VarRef<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl> | null) {
		this._fields.impl = value
	}

	public _fields: {
		Mock: mock.Mock
		impl: __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl | $.VarRef<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl> | null
	}

	constructor(init?: Partial<{Mock?: mock.Mock, impl?: __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl | $.VarRef<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Mock: init?.Mock ? init.Mock.clone() : new mock.Mock(undefined, true),
			impl: init?.impl ?? (null! as __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl | $.VarRef<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TestWorkflowEnvironment {
		return new TestWorkflowEnvironment(this, true)
	}

	public __goscriptAssign(source: TestWorkflowEnvironment): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Mock, values.Mock)
		target.impl = values.impl
	}

	public async CancelWorkflow(): globalThis.Promise<void> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		await __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.cancelWorkflow.call($.pointerValue<TestWorkflowEnvironment>(t).impl, $.functionValue((result: $.Slice<number>, err: $.GoError): void => {
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], results: [] } as $.FunctionTypeInfo)))
	}

	public async CompleteActivity(taskToken: $.Slice<number>, result: any, err: $.GoError): globalThis.Promise<$.GoError> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		return __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.CompleteActivity.call($.pointerValue<TestWorkflowEnvironment>(t).impl, taskToken, result, err)
	}

	public async ExecuteWorkflow(workflowFn: any, args: $.Slice<any>): globalThis.Promise<void> {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		const t$: TestWorkflowEnvironment = t == null ? $.pointerTarget<TestWorkflowEnvironment>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TestWorkflowEnvironment>(t)
		$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentShared>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>((t$ as TestWorkflowEnvironment).impl).testWorkflowEnvironmentShared).mock = $.fieldRef((t$ as TestWorkflowEnvironment)._fields, "Mock")
		await __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.executeWorkflow.call((t$ as TestWorkflowEnvironment).impl, workflowFn, args)
	}

	public async GetRegisteredActivities(): globalThis.Promise<$.Slice<__goscript_activity.RegistryActivityInfo | null>> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		return __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.GetRegisteredActivities.call($.pointerValue<TestWorkflowEnvironment>(t).impl)
	}

	public async GetRegisteredWorkflows(): globalThis.Promise<$.Slice<__goscript_workflow.RegistryWorkflowInfo | null>> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		return __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.GetRegisteredWorkflows.call($.pointerValue<TestWorkflowEnvironment>(t).impl)
	}

	public GetWorkflowError(): $.GoError {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		return $.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestWorkflowEnvironment>(t).impl).testError
	}

	public async GetWorkflowResult(valuePtr: any): globalThis.Promise<$.GoError> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		const t$: TestWorkflowEnvironment = t == null ? $.pointerTarget<TestWorkflowEnvironment>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TestWorkflowEnvironment>(t)
		if (!$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>((t$ as TestWorkflowEnvironment).impl).isTestCompleted) {
			$.panic("workflow is not completed")
		}
		if (((($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>((t$ as TestWorkflowEnvironment).impl).testError != null) || ($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>((t$ as TestWorkflowEnvironment).impl).testResult == null)) || ((__goscriptAwait = $.pointerValue<Exclude<__goscript_encoded.Value, null>>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>((t$ as TestWorkflowEnvironment).impl).testResult).HasValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == false)) || (valuePtr == null)) {
			return $.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>((t$ as TestWorkflowEnvironment).impl).testError
		}
		return $.pointerValue<Exclude<__goscript_encoded.Value, null>>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>((t$ as TestWorkflowEnvironment).impl).testResult).Get(valuePtr)
	}

	public IsWorkflowCompleted(): boolean {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		return $.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestWorkflowEnvironment>(t).impl).isTestCompleted
	}

	public async Now(): globalThis.Promise<time.Time> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		return __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.Now.call($.pointerValue<TestWorkflowEnvironment>(t).impl)
	}

	public async OnActivity(activity: any, args: $.Slice<any>): globalThis.Promise<MockCallWrapper | $.VarRef<MockCallWrapper> | null> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		const t$: TestWorkflowEnvironment = t == null ? $.pointerTarget<TestWorkflowEnvironment>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TestWorkflowEnvironment>(t)
		let fType = reflect.TypeOf(activity)
		let call: mock.Call | $.VarRef<mock.Call> | null = null! as mock.Call | $.VarRef<mock.Call> | null
		switch ((__goscriptAwait = (fType !== null && (fType as any).__isVarRef !== true && (fType as any).__goValue === undefined ? (fType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case reflect.Func:
			{
				let fnType = reflect.TypeOf(activity)
				{
					let err = await __goscript_internal_worker.validateFnFormat(fnType, false)
					if (err != null) {
						$.panic((err as any))
					}
				}
				let fnName = await __goscript_internal_worker.getActivityFunctionName($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>((t$ as TestWorkflowEnvironment).impl).registry, activity)
				call = await (t$ as TestWorkflowEnvironment).Mock.On(fnName, args)
				break
			}
			case reflect.String:
			{
				call = await (t$ as TestWorkflowEnvironment).Mock.On($.mustTypeAssert<string>(activity, /* @__PURE__ */ $.basicType("string")), args)
				break
			}
			default:
			{
				$.panic("activity must be function or string")
				break
			}
		}

		return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as TestWorkflowEnvironment).wrapCall(call) : TestWorkflowEnvironment.prototype.wrapCall.call(t, call))
	}

	public async OnGetVersion(changeID: string, minSupported: __goscript_workflow.Version, maxSupported: __goscript_workflow.Version): globalThis.Promise<MockCallWrapper | $.VarRef<MockCallWrapper> | null> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		let call: mock.Call | $.VarRef<mock.Call> | null = await $.pointerValue<TestWorkflowEnvironment>(t).Mock.On(await __goscript_internal_workflow_testsuite.getMockMethodForGetVersion(changeID), $.arrayToSlice<any>([changeID, $.namedValueInterfaceValue<any>(minSupported, "internal.Version", {}, /* @__PURE__ */ $.basicType("int", "internal.Version")), $.namedValueInterfaceValue<any>(maxSupported, "internal.Version", {}, /* @__PURE__ */ $.basicType("int", "internal.Version"))]))
		return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as TestWorkflowEnvironment).wrapCall(call) : TestWorkflowEnvironment.prototype.wrapCall.call(t, call))
	}

	public async OnRequestCancelExternalWorkflow(domainName: string, workflowID: string, runID: string): globalThis.Promise<MockCallWrapper | $.VarRef<MockCallWrapper> | null> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		let call: mock.Call | $.VarRef<mock.Call> | null = await $.pointerValue<TestWorkflowEnvironment>(t).Mock.On("workflow.RequestCancelExternalWorkflow", $.arrayToSlice<any>([domainName, workflowID, runID]))
		return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as TestWorkflowEnvironment).wrapCall(call) : TestWorkflowEnvironment.prototype.wrapCall.call(t, call))
	}

	public async OnSignalExternalWorkflow(domainName: any, workflowID: any, runID: any, signalName: any, arg: any): globalThis.Promise<MockCallWrapper | $.VarRef<MockCallWrapper> | null> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		let call: mock.Call | $.VarRef<mock.Call> | null = await $.pointerValue<TestWorkflowEnvironment>(t).Mock.On("workflow.SignalExternalWorkflow", $.arrayToSlice<any>([domainName, workflowID, runID, signalName, arg]))
		return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as TestWorkflowEnvironment).wrapCall(call) : TestWorkflowEnvironment.prototype.wrapCall.call(t, call))
	}

	public async OnUpsertSearchAttributes(attributes: globalThis.Map<string, any> | null): globalThis.Promise<MockCallWrapper | $.VarRef<MockCallWrapper> | null> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		let call: mock.Call | $.VarRef<mock.Call> | null = await $.pointerValue<TestWorkflowEnvironment>(t).Mock.On("workflow.UpsertSearchAttributes", $.arrayToSlice<any>([$.interfaceValue(attributes, "map[string]interface{}", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] }))]))
		return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as TestWorkflowEnvironment).wrapCall(call) : TestWorkflowEnvironment.prototype.wrapCall.call(t, call))
	}

	public async OnWorkflow(workflow: any, args: $.Slice<any>): globalThis.Promise<MockCallWrapper | $.VarRef<MockCallWrapper> | null> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		const t$: TestWorkflowEnvironment = t == null ? $.pointerTarget<TestWorkflowEnvironment>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TestWorkflowEnvironment>(t)
		let fType = reflect.TypeOf(workflow)
		let call: mock.Call | $.VarRef<mock.Call> | null = null! as mock.Call | $.VarRef<mock.Call> | null
		switch ((__goscriptAwait = (fType !== null && (fType as any).__isVarRef !== true && (fType as any).__goValue === undefined ? (fType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case reflect.Func:
			{
				let fnType = reflect.TypeOf(workflow)
				{
					let err = await __goscript_internal_worker.validateFnFormat(fnType, true)
					if (err != null) {
						$.panic((err as any))
					}
				}
				let fnName = await __goscript_internal_worker.getWorkflowFunctionName($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>((t$ as TestWorkflowEnvironment).impl).registry, workflow)
				{
					let [alias, ok] = await __goscript_registry.registry.prototype.getWorkflowAlias.call($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>((t$ as TestWorkflowEnvironment).impl).registry, fnName)
					if (ok) {
						fnName = alias
					}
				}
				call = await (t$ as TestWorkflowEnvironment).Mock.On(fnName, args)
				break
			}
			case reflect.String:
			{
				call = await (t$ as TestWorkflowEnvironment).Mock.On($.mustTypeAssert<string>(workflow, /* @__PURE__ */ $.basicType("string")), args)
				break
			}
			default:
			{
				$.panic("activity must be function or string")
				break
			}
		}

		return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as TestWorkflowEnvironment).wrapCall(call) : TestWorkflowEnvironment.prototype.wrapCall.call(t, call))
	}

	public async QueryWorkflow(queryType: string, args: $.Slice<any>): globalThis.Promise<[__goscript_encoded.Value | null, $.GoError]> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		return __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.queryWorkflow.call($.pointerValue<TestWorkflowEnvironment>(t).impl, queryType, args)
	}

	public async RegisterActivity(a: any): globalThis.Promise<void> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		await __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.RegisterActivity.call($.pointerValue<TestWorkflowEnvironment>(t).impl, a)
	}

	public async RegisterActivityWithOptions(a: any, options: __goscript_activity.RegisterActivityOptions): globalThis.Promise<void> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		const t$: TestWorkflowEnvironment = t == null ? $.pointerTarget<TestWorkflowEnvironment>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TestWorkflowEnvironment>(t)
		if ($.sliceLen((t$ as TestWorkflowEnvironment).Mock.ExpectedCalls) > 0) {
			$.panic("RegisterActivity calls cannot follow mock related ones like OnActivity or similar")
		}
		await __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.RegisterActivityWithOptions.call((t$ as TestWorkflowEnvironment).impl, a, options)
	}

	public async RegisterDelayedCallback(callback: (() => void) | null, delayDuration: time.Duration): globalThis.Promise<void> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		await __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.registerDelayedCallback.call($.pointerValue<TestWorkflowEnvironment>(t).impl, callback, delayDuration)
	}

	public async RegisterWorkflow(w: any): globalThis.Promise<void> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		await __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.RegisterWorkflow.call($.pointerValue<TestWorkflowEnvironment>(t).impl, w)
	}

	public async RegisterWorkflowWithOptions(w: any, options: __goscript_workflow.RegisterWorkflowOptions): globalThis.Promise<void> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		const t$: TestWorkflowEnvironment = t == null ? $.pointerTarget<TestWorkflowEnvironment>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TestWorkflowEnvironment>(t)
		if ($.sliceLen((t$ as TestWorkflowEnvironment).Mock.ExpectedCalls) > 0) {
			$.panic("RegisterWorkflow calls cannot follow mock related ones like OnWorkflow or similar")
		}
		await __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.RegisterWorkflowWithOptions.call((t$ as TestWorkflowEnvironment).impl, w, options)
	}

	public async SetActivityTaskList(tasklist: string, activityFn: $.Slice<any>): globalThis.Promise<void> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		await __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.setActivityTaskList.call($.pointerValue<TestWorkflowEnvironment>(t).impl, tasklist, activityFn)
	}

	public async SetLastCompletionResult(result: any): globalThis.Promise<void> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		await __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.setLastCompletionResult.call($.pointerValue<TestWorkflowEnvironment>(t).impl, result)
	}

	public async SetMemoOnStart(memo: globalThis.Map<string, any> | null): globalThis.Promise<$.GoError> {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		const t$: TestWorkflowEnvironment = t == null ? $.pointerTarget<TestWorkflowEnvironment>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TestWorkflowEnvironment>(t)
		let __goscriptTuple0: any = await __goscript_internal_workflow_client.getWorkflowMemo(memo, __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.GetDataConverter.call((t$ as TestWorkflowEnvironment).impl))
		let memoStruct: shared.Memo | $.VarRef<shared.Memo> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return err
		}
		$.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>((t$ as TestWorkflowEnvironment).impl).workflowInfo).Memo = memoStruct
		return null
	}

	public SetOnActivityCanceledListener(listener: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null) => void) | null): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentShared>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestWorkflowEnvironment>(t).impl).testWorkflowEnvironmentShared).onActivityCanceledListener = listener
		return t
	}

	public SetOnActivityCompletedListener(listener: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentShared>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestWorkflowEnvironment>(t).impl).testWorkflowEnvironmentShared).onActivityCompletedListener = listener
		return t
	}

	public SetOnActivityHeartbeatListener(listener: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, details: __goscript_encoded.Values | null) => void) | null): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentShared>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestWorkflowEnvironment>(t).impl).testWorkflowEnvironmentShared).onActivityHeartbeatListener = listener
		return t
	}

	public SetOnActivityStartedListener(listener: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, ctx: context.Context | null, args: __goscript_encoded.Values | null) => void) | null): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentShared>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestWorkflowEnvironment>(t).impl).testWorkflowEnvironmentShared).onActivityStartedListener = listener
		return t
	}

	public SetOnChildWorkflowCanceledListener(listener: ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null) => void) | null): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentShared>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestWorkflowEnvironment>(t).impl).testWorkflowEnvironmentShared).onChildWorkflowCanceledListener = listener
		return t
	}

	public SetOnChildWorkflowCompletedListener(listener: ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentShared>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestWorkflowEnvironment>(t).impl).testWorkflowEnvironmentShared).onChildWorkflowCompletedListener = listener
		return t
	}

	public SetOnChildWorkflowStartedListener(listener: ((workflowInfo: __goscript_workflow.WorkflowInfo | $.VarRef<__goscript_workflow.WorkflowInfo> | null, ctx: __goscript_context.Context | null, args: __goscript_encoded.Values | null) => void) | null): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentShared>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestWorkflowEnvironment>(t).impl).testWorkflowEnvironmentShared).onChildWorkflowStartedListener = listener
		return t
	}

	public SetOnLocalActivityCanceledListener(listener: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null) => void) | null): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentShared>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestWorkflowEnvironment>(t).impl).testWorkflowEnvironmentShared).onLocalActivityCanceledListener = listener
		return t
	}

	public SetOnLocalActivityCompletedListener(listener: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, result: __goscript_encoded.Value | null, err: $.GoError) => void) | null): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentShared>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestWorkflowEnvironment>(t).impl).testWorkflowEnvironmentShared).onLocalActivityCompletedListener = listener
		return t
	}

	public SetOnLocalActivityStartedListener(listener: ((activityInfo: __goscript_activity.ActivityInfo | $.VarRef<__goscript_activity.ActivityInfo> | null, ctx: context.Context | null, args: $.Slice<any>) => void) | null): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentShared>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestWorkflowEnvironment>(t).impl).testWorkflowEnvironmentShared).onLocalActivityStartedListener = listener
		return t
	}

	public SetOnTimerCancelledListener(listener: ((timerID: string) => void) | null): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentShared>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestWorkflowEnvironment>(t).impl).testWorkflowEnvironmentShared).onTimerCancelledListener = listener
		return t
	}

	public SetOnTimerFiredListener(listener: ((timerID: string) => void) | null): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentShared>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestWorkflowEnvironment>(t).impl).testWorkflowEnvironmentShared).onTimerFiredListener = listener
		return t
	}

	public SetOnTimerScheduledListener(listener: ((timerID: string, duration: time.Duration) => void) | null): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentShared>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestWorkflowEnvironment>(t).impl).testWorkflowEnvironmentShared).onTimerScheduledListener = listener
		return t
	}

	public async SetSearchAttributesOnStart(searchAttributes: globalThis.Map<string, any> | null): globalThis.Promise<$.GoError> {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		let __goscriptTuple1: any = await __goscript_internal_workflow_client.serializeSearchAttributes(searchAttributes)
		let attr: shared.SearchAttributes | $.VarRef<shared.SearchAttributes> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return err
		}
		$.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestWorkflowEnvironment>(t).impl).workflowInfo).SearchAttributes = attr
		return null
	}

	public async SetStartTime(startTime: time.Time): globalThis.Promise<void> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		await __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.setStartTime.call($.pointerValue<TestWorkflowEnvironment>(t).impl, $.markAsStructValue($.cloneStructValue(startTime)))
	}

	public SetTestTimeout(idleTimeout: time.Duration): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentShared>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestWorkflowEnvironment>(t).impl).testWorkflowEnvironmentShared).testTimeout = idleTimeout
		return t
	}

	public SetWorkerOptions(options: __goscript_worker.WorkerOptions): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.setWorkerOptions.call($.pointerValue<TestWorkflowEnvironment>(t).impl, options)
		return t
	}

	public SetWorkerStopChannel(c: $.Channel<{}> | null): void {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.setWorkerStopChannel.call($.pointerValue<TestWorkflowEnvironment>(t).impl, c)
	}

	public SetWorkflowCronMaxIterations(maxIterations: number): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.setCronMaxIterationas.call($.pointerValue<TestWorkflowEnvironment>(t).impl, maxIterations)
		return t
	}

	public SetWorkflowCronSchedule(cron: string): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.setCronSchedule.call($.pointerValue<TestWorkflowEnvironment>(t).impl, cron)
		return t
	}

	public SetWorkflowTimeout(executionTimeout: time.Duration): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		let t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		const t$: TestWorkflowEnvironment = t == null ? $.pointerTarget<TestWorkflowEnvironment>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TestWorkflowEnvironment>(t)
		$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>((t$ as TestWorkflowEnvironment).impl).executionTimeout = executionTimeout
		$.pointerValue<__goscript_workflow.WorkflowInfo>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>((t$ as TestWorkflowEnvironment).impl).workflowInfo).ExecutionStartToCloseTimeoutSeconds = $.int(time.Duration_Seconds(executionTimeout), 32)
		return t
	}

	public async SignalWorkflow(name: string, input: any): globalThis.Promise<void> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		await __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.signalWorkflow.call($.pointerValue<TestWorkflowEnvironment>(t).impl, name, input, true)
	}

	public async SignalWorkflowByID(workflowID: string, signalName: string, input: any): globalThis.Promise<$.GoError> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		return __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.signalWorkflowByID.call($.pointerValue<TestWorkflowEnvironment>(t).impl, workflowID, signalName, input)
	}

	public async SignalWorkflowSkippingDecision(name: string, input: any): globalThis.Promise<void> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		await __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.signalWorkflow.call($.pointerValue<TestWorkflowEnvironment>(t).impl, name, input, false)
	}

	public async wrapCall(call: mock.Call | $.VarRef<mock.Call> | null): globalThis.Promise<MockCallWrapper | $.VarRef<MockCallWrapper> | null> {
		const t: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null = this;
		let callWrapper: MockCallWrapper | $.VarRef<MockCallWrapper> | null = new MockCallWrapper({call: call, env: t})
		await mock.Call.prototype.Run.call(call, await __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.getMockRunFn.call($.pointerValue<TestWorkflowEnvironment>(t).impl, callWrapper))
		return callWrapper
	}

	public async AssertCalled(t: any, methodName: any, _arguments: any): globalThis.Promise<any> {
		return await $.pointerValue<mock.Mock>(this.Mock).AssertCalled(t, methodName, _arguments)
	}

	public async AssertExpectations(t: any): globalThis.Promise<any> {
		return await $.pointerValue<mock.Mock>(this.Mock).AssertExpectations(t)
	}

	public async AssertNotCalled(t: any, methodName: any, _arguments: any): globalThis.Promise<any> {
		return await $.pointerValue<mock.Mock>(this.Mock).AssertNotCalled(t, methodName, _arguments)
	}

	public async AssertNumberOfCalls(t: any, methodName: any, expectedCalls: any): globalThis.Promise<any> {
		return await $.pointerValue<mock.Mock>(this.Mock).AssertNumberOfCalls(t, methodName, expectedCalls)
	}

	public async Called(_arguments: any): globalThis.Promise<any> {
		return await $.pointerValue<mock.Mock>(this.Mock).Called(_arguments)
	}

	public async IsMethodCallable(t: any, methodName: any, _arguments: any): globalThis.Promise<any> {
		return await $.pointerValue<mock.Mock>(this.Mock).IsMethodCallable(t, methodName, _arguments)
	}

	public async MethodCalled(methodName: any, _arguments: any): globalThis.Promise<any> {
		return await $.pointerValue<mock.Mock>(this.Mock).MethodCalled(methodName, _arguments)
	}

	public async On(methodName: any, _arguments: any): globalThis.Promise<any> {
		return await $.pointerValue<mock.Mock>(this.Mock).On(methodName, _arguments)
	}

	public async String(): globalThis.Promise<any> {
		return await $.pointerValue<mock.Mock>(this.Mock).String()
	}

	public async Test(t: any): globalThis.Promise<any> {
		return await $.pointerValue<mock.Mock>(this.Mock).Test(t)
	}

	public TestData(): any {
		return $.pointerValue<mock.Mock>(this.Mock).TestData()
	}

	static __typeInfo = $.registerStructType(
		"internal.TestWorkflowEnvironment",
		() => new TestWorkflowEnvironment(),
		() => [$.methodSignature("CancelWorkflow", [], [], true), $.methodSignature("CompleteActivity", [["taskToken", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["result", { kind: $.TypeKind.Interface, methods: [] }], ["err", "error"]], ["error"], true), $.methodSignature("ExecuteWorkflow", [["workflowFn", { kind: $.TypeKind.Interface, methods: [] }], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("GetRegisteredActivities", [], [/* @__PURE__ */ $.sliceType("internal.RegistryActivityInfo")], true), $.methodSignature("GetRegisteredWorkflows", [], [/* @__PURE__ */ $.sliceType("internal.RegistryWorkflowInfo")], true), $.methodSignature("GetWorkflowError", [], ["error"], true), $.methodSignature("GetWorkflowResult", [["valuePtr", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("IsWorkflowCompleted", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Now", [], ["time.Time"], true), $.methodSignature("OnActivity", [["activity", { kind: $.TypeKind.Interface, methods: [] }], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("internal.MockCallWrapper")], true), $.methodSignature("OnGetVersion", [["changeID", /* @__PURE__ */ $.basicType("string")], ["minSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")], ["maxSupported", /* @__PURE__ */ $.basicType("int", "internal.Version")]], [/* @__PURE__ */ $.pointerType("internal.MockCallWrapper")], true), $.methodSignature("OnRequestCancelExternalWorkflow", [["domainName", /* @__PURE__ */ $.basicType("string")], ["workflowID", /* @__PURE__ */ $.basicType("string")], ["runID", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("internal.MockCallWrapper")], true), $.methodSignature("OnSignalExternalWorkflow", [["domainName", { kind: $.TypeKind.Interface, methods: [] }], ["workflowID", { kind: $.TypeKind.Interface, methods: [] }], ["runID", { kind: $.TypeKind.Interface, methods: [] }], ["signalName", { kind: $.TypeKind.Interface, methods: [] }], ["arg", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.pointerType("internal.MockCallWrapper")], true), $.methodSignature("OnUpsertSearchAttributes", [["attributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("internal.MockCallWrapper")], true), $.methodSignature("OnWorkflow", [["workflow", { kind: $.TypeKind.Interface, methods: [] }], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("internal.MockCallWrapper")], true), $.methodSignature("QueryWorkflow", [["queryType", /* @__PURE__ */ $.basicType("string")], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.Value", "error"], true), $.methodSignature("RegisterActivity", [["a", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("RegisterActivityWithOptions", [["a", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterActivityOptions"]], [], true), $.methodSignature("RegisterDelayedCallback", [["callback", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)], ["delayDuration", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [], true), $.methodSignature("RegisterWorkflow", [["w", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("RegisterWorkflowWithOptions", [["w", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterWorkflowOptions"]], [], true), $.methodSignature("SetActivityTaskList", [["tasklist", /* @__PURE__ */ $.basicType("string")], ["activityFn", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true), $.methodSignature("SetLastCompletionResult", [["result", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("SetMemoOnStart", [["memo", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("SetOnActivityCanceledListener", [["listener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.ActivityInfo")], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetOnActivityCompletedListener", [["listener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.ActivityInfo"), "internal.Value", "error"], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetOnActivityHeartbeatListener", [["listener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.ActivityInfo"), "internal.Values"], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetOnActivityStartedListener", [["listener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.ActivityInfo"), "context.Context", "internal.Values"], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetOnChildWorkflowCanceledListener", [["listener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.WorkflowInfo")], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetOnChildWorkflowCompletedListener", [["listener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.WorkflowInfo"), "internal.Value", "error"], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetOnChildWorkflowStartedListener", [["listener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.WorkflowInfo"), "internal.Context", "internal.Values"], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetOnLocalActivityCanceledListener", [["listener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.ActivityInfo")], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetOnLocalActivityCompletedListener", [["listener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.ActivityInfo"), "internal.Value", "error"], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetOnLocalActivityStartedListener", [["listener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("internal.ActivityInfo"), "context.Context", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetOnTimerCancelledListener", [["listener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetOnTimerFiredListener", [["listener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetOnTimerScheduledListener", [["listener", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int64", "time.Duration")], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetSearchAttributesOnStart", [["searchAttributes", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("SetStartTime", [["startTime", "time.Time"]], [], true), $.methodSignature("SetTestTimeout", [["idleTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetWorkerOptions", [["options", "internal.WorkerOptions"]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetWorkerStopChannel", [["c", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both")]], [], true), $.methodSignature("SetWorkflowCronMaxIterations", [["maxIterations", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetWorkflowCronSchedule", [["cron", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SetWorkflowTimeout", [["executionTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment")], true), $.methodSignature("SignalWorkflow", [["name", /* @__PURE__ */ $.basicType("string")], ["input", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("SignalWorkflowByID", [["workflowID", /* @__PURE__ */ $.basicType("string")], ["signalName", /* @__PURE__ */ $.basicType("string")], ["input", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true), $.methodSignature("SignalWorkflowSkippingDecision", [["name", /* @__PURE__ */ $.basicType("string")], ["input", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("wrapCall", [["call", /* @__PURE__ */ $.pointerType("mock.Call")]], [/* @__PURE__ */ $.pointerType("internal.MockCallWrapper")], true), $.methodSignature("AssertCalled", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("AssertExpectations", [["t", "mock.TestingT"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("AssertNotCalled", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("AssertNumberOfCalls", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["expectedCalls", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Called", [["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], true), $.methodSignature("IsMethodCallable", [["t", "mock.TestingT"], ["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("MethodCalled", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], true), $.methodSignature("On", [["methodName", /* @__PURE__ */ $.basicType("string")], ["arguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("mock.Call")], true), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Test", [["t", "mock.TestingT"]], [], true), $.methodSignature("TestData", [], ["objx.Map"], true)],
		TestWorkflowEnvironment,
		() => [/* @__PURE__ */ $.structField("Mock", "mock.Mock", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("impl", /* @__PURE__ */ $.pointerType("internal.testWorkflowEnvironmentImpl"), [1], 80, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class TestActivityEnvironment {
	public get impl(): __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl | $.VarRef<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl> | null {
		return this._fields.impl
	}

	public set impl(value: __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl | $.VarRef<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl> | null) {
		this._fields.impl = value
	}

	public _fields: {
		impl: __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl | $.VarRef<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl> | null
	}

	constructor(init?: Partial<{impl?: __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl | $.VarRef<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			impl: init?.impl ?? (null! as __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl | $.VarRef<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TestActivityEnvironment {
		return new TestActivityEnvironment(this, true)
	}

	public __goscriptAssign(source: TestActivityEnvironment): void {
		const target = this._fields
		const values = source._fields
		target.impl = values.impl
	}

	public async ExecuteActivity(activityFn: any, args: $.Slice<any>): globalThis.Promise<[__goscript_encoded.Value | null, $.GoError]> {
		const t: TestActivityEnvironment | $.VarRef<TestActivityEnvironment> | null = this;
		return __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.executeActivity.call($.pointerValue<TestActivityEnvironment>(t).impl, activityFn, args)
	}

	public async ExecuteLocalActivity(activityFn: any, args: $.Slice<any>): globalThis.Promise<[__goscript_encoded.Value | null, $.GoError]> {
		const t: TestActivityEnvironment | $.VarRef<TestActivityEnvironment> | null = this;
		let val: __goscript_encoded.Value | null = null! as __goscript_encoded.Value | null
		let err: $.GoError = null! as $.GoError
		return __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.executeLocalActivity.call($.pointerValue<TestActivityEnvironment>(t).impl, activityFn, args)
	}

	public async GetRegisteredActivities(): globalThis.Promise<$.Slice<__goscript_activity.RegistryActivityInfo | null>> {
		const t: TestActivityEnvironment | $.VarRef<TestActivityEnvironment> | null = this;
		return __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.GetRegisteredActivities.call($.pointerValue<TestActivityEnvironment>(t).impl)
	}

	public async RegisterActivity(a: any): globalThis.Promise<void> {
		const t: TestActivityEnvironment | $.VarRef<TestActivityEnvironment> | null = this;
		await __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.RegisterActivity.call($.pointerValue<TestActivityEnvironment>(t).impl, a)
	}

	public async RegisterActivityWithOptions(a: any, options: __goscript_activity.RegisterActivityOptions): globalThis.Promise<void> {
		const t: TestActivityEnvironment | $.VarRef<TestActivityEnvironment> | null = this;
		await __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.RegisterActivityWithOptions.call($.pointerValue<TestActivityEnvironment>(t).impl, a, options)
	}

	public async SetHeartbeatDetails(details: any): globalThis.Promise<void> {
		const t: TestActivityEnvironment | $.VarRef<TestActivityEnvironment> | null = this;
		await __goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.setHeartbeatDetails.call($.pointerValue<TestActivityEnvironment>(t).impl, details)
	}

	public SetTestTimeout(idleTimeout: time.Duration): TestActivityEnvironment | $.VarRef<TestActivityEnvironment> | null {
		let t: TestActivityEnvironment | $.VarRef<TestActivityEnvironment> | null = this;
		$.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentShared>($.pointerValue<__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl>($.pointerValue<TestActivityEnvironment>(t).impl).testWorkflowEnvironmentShared).testTimeout = idleTimeout
		return t
	}

	public SetWorkerOptions(options: __goscript_worker.WorkerOptions): TestActivityEnvironment | $.VarRef<TestActivityEnvironment> | null {
		const t: TestActivityEnvironment | $.VarRef<TestActivityEnvironment> | null = this;
		__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.setWorkerOptions.call($.pointerValue<TestActivityEnvironment>(t).impl, options)
		return t
	}

	public SetWorkerStopChannel(c: $.Channel<{}> | null): void {
		const t: TestActivityEnvironment | $.VarRef<TestActivityEnvironment> | null = this;
		__goscript_internal_workflow_testsuite.testWorkflowEnvironmentImpl.prototype.setWorkerStopChannel.call($.pointerValue<TestActivityEnvironment>(t).impl, c)
	}

	static __typeInfo = $.registerStructType(
		"internal.TestActivityEnvironment",
		() => new TestActivityEnvironment(),
		() => [$.methodSignature("ExecuteActivity", [["activityFn", { kind: $.TypeKind.Interface, methods: [] }], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["internal.Value", "error"], true), $.methodSignature("ExecuteLocalActivity", [["activityFn", { kind: $.TypeKind.Interface, methods: [] }], ["args", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [["val", "internal.Value"], ["err", "error"]], true), $.methodSignature("GetRegisteredActivities", [], [/* @__PURE__ */ $.sliceType("internal.RegistryActivityInfo")], true), $.methodSignature("RegisterActivity", [["a", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("RegisterActivityWithOptions", [["a", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterActivityOptions"]], [], true), $.methodSignature("SetHeartbeatDetails", [["details", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("SetTestTimeout", [["idleTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("internal.TestActivityEnvironment")], true), $.methodSignature("SetWorkerOptions", [["options", "internal.WorkerOptions"]], [/* @__PURE__ */ $.pointerType("internal.TestActivityEnvironment")], true), $.methodSignature("SetWorkerStopChannel", [["c", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both")]], [], true)],
		TestActivityEnvironment,
		() => [/* @__PURE__ */ $.structField("impl", /* @__PURE__ */ $.pointerType("internal.testWorkflowEnvironmentImpl"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class MockCallWrapper {
	public get call(): mock.Call | $.VarRef<mock.Call> | null {
		return this._fields.call
	}

	public set call(value: mock.Call | $.VarRef<mock.Call> | null) {
		this._fields.call = value
	}

	public get env(): TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null {
		return this._fields.env
	}

	public set env(value: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null) {
		this._fields.env = value
	}

	public get runFn(): ((args: mock.Arguments) => void) | null {
		return this._fields.runFn
	}

	public set runFn(value: ((args: mock.Arguments) => void) | null) {
		this._fields.runFn = value
	}

	public get waitDuration(): (() => time.Duration | globalThis.Promise<time.Duration>) | null {
		return this._fields.waitDuration
	}

	public set waitDuration(value: (() => time.Duration | globalThis.Promise<time.Duration>) | null) {
		this._fields.waitDuration = value
	}

	public _fields: {
		call: mock.Call | $.VarRef<mock.Call> | null
		env: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null
		runFn: ((args: mock.Arguments) => void) | null
		waitDuration: (() => time.Duration | globalThis.Promise<time.Duration>) | null
	}

	constructor(init?: Partial<{call?: mock.Call | $.VarRef<mock.Call> | null, env?: TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null, runFn?: ((args: mock.Arguments) => void) | null, waitDuration?: (() => time.Duration | globalThis.Promise<time.Duration>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			call: init?.call ?? (null! as mock.Call | $.VarRef<mock.Call> | null),
			env: init?.env ?? (null! as TestWorkflowEnvironment | $.VarRef<TestWorkflowEnvironment> | null),
			runFn: init?.runFn ?? (null! as ((args: mock.Arguments) => void) | null),
			waitDuration: init?.waitDuration ?? (null! as (() => time.Duration | globalThis.Promise<time.Duration>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MockCallWrapper {
		return new MockCallWrapper(this, true)
	}

	public __goscriptAssign(source: MockCallWrapper): void {
		const target = this._fields
		const values = source._fields
		target.call = values.call
		target.env = values.env
		target.runFn = values.runFn
		target.waitDuration = values.waitDuration
	}

	public After(d: time.Duration): MockCallWrapper | $.VarRef<MockCallWrapper> | null {
		let c: MockCallWrapper | $.VarRef<MockCallWrapper> | null = this;
		$.pointerValue<MockCallWrapper>(c).waitDuration = $.functionValue((): time.Duration => {
			return d
		}, ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("int64", "time.Duration")] } as $.FunctionTypeInfo))
		return c
	}

	public AfterFn(fn: (() => time.Duration | globalThis.Promise<time.Duration>) | null): MockCallWrapper | $.VarRef<MockCallWrapper> | null {
		let c: MockCallWrapper | $.VarRef<MockCallWrapper> | null = this;
		$.pointerValue<MockCallWrapper>(c).waitDuration = fn
		return c
	}

	public async Maybe(): globalThis.Promise<MockCallWrapper | $.VarRef<MockCallWrapper> | null> {
		const c: MockCallWrapper | $.VarRef<MockCallWrapper> | null = this;
		await mock.Call.prototype.Maybe.call($.pointerValue<MockCallWrapper>(c).call)
		return c
	}

	public async Once(): globalThis.Promise<MockCallWrapper | $.VarRef<MockCallWrapper> | null> {
		const c: MockCallWrapper | $.VarRef<MockCallWrapper> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as MockCallWrapper).Times(1) : MockCallWrapper.prototype.Times.call(c, 1))
	}

	public async Return(returnArguments: $.Slice<any>): globalThis.Promise<MockCallWrapper | $.VarRef<MockCallWrapper> | null> {
		const c: MockCallWrapper | $.VarRef<MockCallWrapper> | null = this;
		await mock.Call.prototype.Return.call($.pointerValue<MockCallWrapper>(c).call, returnArguments)
		return c
	}

	public Run(fn: ((args: mock.Arguments) => void) | null): MockCallWrapper | $.VarRef<MockCallWrapper> | null {
		let c: MockCallWrapper | $.VarRef<MockCallWrapper> | null = this;
		$.pointerValue<MockCallWrapper>(c).runFn = fn
		return c
	}

	public async Times(i: number): globalThis.Promise<MockCallWrapper | $.VarRef<MockCallWrapper> | null> {
		const c: MockCallWrapper | $.VarRef<MockCallWrapper> | null = this;
		await mock.Call.prototype.Times.call($.pointerValue<MockCallWrapper>(c).call, i)
		return c
	}

	public async Twice(): globalThis.Promise<MockCallWrapper | $.VarRef<MockCallWrapper> | null> {
		const c: MockCallWrapper | $.VarRef<MockCallWrapper> | null = this;
		return (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as MockCallWrapper).Times(2) : MockCallWrapper.prototype.Times.call(c, 2))
	}

	static __typeInfo = $.registerStructType(
		"internal.MockCallWrapper",
		() => new MockCallWrapper(),
		() => [$.methodSignature("After", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.pointerType("internal.MockCallWrapper")], true), $.methodSignature("AfterFn", [["fn", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("int64", "time.Duration")] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.MockCallWrapper")], true), $.methodSignature("Maybe", [], [/* @__PURE__ */ $.pointerType("internal.MockCallWrapper")], true), $.methodSignature("Once", [], [/* @__PURE__ */ $.pointerType("internal.MockCallWrapper")], true), $.methodSignature("Return", [["returnArguments", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("internal.MockCallWrapper")], true), $.methodSignature("Run", [["fn", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], results: [] } as $.FunctionTypeInfo)]], [/* @__PURE__ */ $.pointerType("internal.MockCallWrapper")], true), $.methodSignature("Times", [["i", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.pointerType("internal.MockCallWrapper")], true), $.methodSignature("Twice", [], [/* @__PURE__ */ $.pointerType("internal.MockCallWrapper")], true)],
		MockCallWrapper,
		() => [/* @__PURE__ */ $.structField("call", /* @__PURE__ */ $.pointerType("mock.Call"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("env", /* @__PURE__ */ $.pointerType("internal.TestWorkflowEnvironment"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("runFn", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] }, "mock.Arguments")], results: [] } as $.FunctionTypeInfo), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("waitDuration", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("int64", "time.Duration")] } as $.FunctionTypeInfo), [3], 24, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export const mockMethodForSignalExternalWorkflow: string = "workflow.SignalExternalWorkflow"

export const mockMethodForRequestCancelExternalWorkflow: string = "workflow.RequestCancelExternalWorkflow"

export const mockMethodForGetVersion: string = "workflow.GetVersion"

export const mockMethodForUpsertSearchAttributes: string = "workflow.UpsertSearchAttributes"

export function newEncodedValues(values: $.Slice<number>, dc: __goscript_encoded.DataConverter | null): __goscript_encoded.Values | null {
	if (dc == null) {
		dc = __goscript_encoded.getDefaultDataConverter()
	}
	return $.interfaceValue<__goscript_encoded.Values | null>(new EncodedValues({values: values, dataConverter: dc}), "*internal.EncodedValues", /* @__PURE__ */ $.pointerType("internal.EncodedValues"))
}

export let ErrMockStartChildWorkflowFailed: $.GoError = fmt.Errorf("start child workflow failed: %v", $.namedValueInterfaceValue<any>(shared.ChildWorkflowExecutionFailedCauseWorkflowAlreadyRunning, "shared.ChildWorkflowExecutionFailedCause", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))

export function __goscript_set_ErrMockStartChildWorkflowFailed(__goscriptValue: $.GoError): void {
	ErrMockStartChildWorkflowFailed = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Encode: (receiver: any, ...args: any[]) => (shared.ChildWorkflowExecutionFailedCause_Encode as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Equals: (receiver: any, ...args: any[]) => (shared.ChildWorkflowExecutionFailedCause_Equals as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalJSON: (receiver: any, ...args: any[]) => (shared.ChildWorkflowExecutionFailedCause_MarshalJSON as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalLogObject: (receiver: any, ...args: any[]) => (shared.ChildWorkflowExecutionFailedCause_MarshalLogObject as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), MarshalText: (receiver: any, ...args: any[]) => (shared.ChildWorkflowExecutionFailedCause_MarshalText as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Ptr: (receiver: any, ...args: any[]) => (shared.ChildWorkflowExecutionFailedCause_Ptr as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (shared.ChildWorkflowExecutionFailedCause_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), ToWire: (receiver: any, ...args: any[]) => (shared.ChildWorkflowExecutionFailedCause_ToWire as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int32", "shared.ChildWorkflowExecutionFailedCause"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Encode", [["sw", "stream.Writer"]], ["error"]), $.methodSignature("Equals", [["rhs", /* @__PURE__ */ $.basicType("int32", "shared.ChildWorkflowExecutionFailedCause")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("MarshalJSON", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("MarshalText", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Ptr", [], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "shared.ChildWorkflowExecutionFailedCause"))]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])])
}

var __goscriptAwait: any
