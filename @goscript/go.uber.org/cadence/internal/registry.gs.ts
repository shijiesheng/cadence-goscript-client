// Generated file based on registry.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import type * as context from "@goscript/context/index.js"

import type * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import type * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import type * as zap from "@goscript/go.uber.org/zap/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import type * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import type * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import type * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_session from "./session.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/time/index.js"
import "./activity.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./headers.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_workflow.gs.ts"
import "./session.gs.ts"
import "./workflow.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.registry"])

export class registry {
	public get Mutex(): sync.Mutex {
		return this._fields.Mutex
	}

	public set Mutex(value: sync.Mutex) {
		this._fields.Mutex = value
	}

	public get workflowFuncMap(): globalThis.Map<string, __goscript_internal_workflow.workflow | null> | null {
		return this._fields.workflowFuncMap
	}

	public set workflowFuncMap(value: globalThis.Map<string, __goscript_internal_workflow.workflow | null> | null) {
		this._fields.workflowFuncMap = value
	}

	public get workflowAliasMap(): globalThis.Map<string, string> | null {
		return this._fields.workflowAliasMap
	}

	public set workflowAliasMap(value: globalThis.Map<string, string> | null) {
		this._fields.workflowAliasMap = value
	}

	public get activityFuncMap(): globalThis.Map<string, __goscript_internal_activity.activity | null> | null {
		return this._fields.activityFuncMap
	}

	public set activityFuncMap(value: globalThis.Map<string, __goscript_internal_activity.activity | null> | null) {
		this._fields.activityFuncMap = value
	}

	public get activityAliasMap(): globalThis.Map<string, string> | null {
		return this._fields.activityAliasMap
	}

	public set activityAliasMap(value: globalThis.Map<string, string> | null) {
		this._fields.activityAliasMap = value
	}

	public get next(): registry | $.VarRef<registry> | null {
		return this._fields.next
	}

	public set next(value: registry | $.VarRef<registry> | null) {
		this._fields.next = value
	}

	public _fields: {
		Mutex: sync.Mutex
		workflowFuncMap: globalThis.Map<string, __goscript_internal_workflow.workflow | null> | null
		workflowAliasMap: globalThis.Map<string, string> | null
		activityFuncMap: globalThis.Map<string, __goscript_internal_activity.activity | null> | null
		activityAliasMap: globalThis.Map<string, string> | null
		next: registry | $.VarRef<registry> | null
	}

	constructor(init?: Partial<{Mutex?: sync.Mutex, workflowFuncMap?: globalThis.Map<string, __goscript_internal_workflow.workflow | null> | null, workflowAliasMap?: globalThis.Map<string, string> | null, activityFuncMap?: globalThis.Map<string, __goscript_internal_activity.activity | null> | null, activityAliasMap?: globalThis.Map<string, string> | null, next?: registry | $.VarRef<registry> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Mutex: init?.Mutex ? $.markAsStructValue($.cloneStructValue(init.Mutex)) : $.markAsStructValue(new sync.Mutex()),
			workflowFuncMap: init?.workflowFuncMap ?? (null! as globalThis.Map<string, __goscript_internal_workflow.workflow | null> | null),
			workflowAliasMap: init?.workflowAliasMap ?? (null! as globalThis.Map<string, string> | null),
			activityFuncMap: init?.activityFuncMap ?? (null! as globalThis.Map<string, __goscript_internal_activity.activity | null> | null),
			activityAliasMap: init?.activityAliasMap ?? (null! as globalThis.Map<string, string> | null),
			next: init?.next ?? (null! as registry | $.VarRef<registry> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): registry {
		return new registry(this, true)
	}

	public __goscriptAssign(source: registry): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Mutex, values.Mutex)
		target.workflowFuncMap = values.workflowFuncMap
		target.workflowAliasMap = values.workflowAliasMap
		target.activityFuncMap = values.activityFuncMap
		target.activityAliasMap = values.activityAliasMap
		target.next = values.next
	}

	public async GetActivity(fnName: string): globalThis.Promise<[__goscript_internal_activity.activity | null, boolean]> {
		const r: registry | $.VarRef<registry> | null = this;
		const r$: registry = r == null ? $.pointerTarget<registry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<registry>(r)
		await (r$ as registry).Mutex.Lock()
		let [a, ok] = $.mapGet<string, __goscript_internal_activity.activity | null, __goscript_internal_activity.activity | null>((r$ as registry).activityFuncMap, fnName, null)
		if (!ok) {
			let __goscriptTuple0: any = $.mapGet<string, __goscript_internal_activity.activity | null, __goscript_internal_activity.activity | null>((r$ as registry).activityFuncMap, strings.TrimSuffix(fnName, "-fm"), null)
			a = __goscriptTuple0[0]
			ok = __goscriptTuple0[1]
		}
		if (!ok && ((r$ as registry).next != null)) {
			void (r$ as registry).Mutex.Unlock()
			return registry.prototype.GetActivity.call((r$ as registry).next, fnName)
		}
		void (r$ as registry).Mutex.Unlock()
		return [a, ok]
	}

	public async GetRegisteredWorkflowTypes(): globalThis.Promise<$.Slice<string>> {
		const r: registry | $.VarRef<registry> | null = this;
		const r$: registry = r == null ? $.pointerTarget<registry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<registry>(r)
		await (r$ as registry).Mutex.Lock()
		let result: $.Slice<string> = null! as $.Slice<string>
		for (const [t, __rangeValue] of (r$ as registry).workflowFuncMap?.entries() ?? []) {
			result = $.appendOne(result, t)
		}
		void (r$ as registry).Mutex.Unlock()
		if ((r$ as registry).next != null) {
			let nextTypes: $.Slice<string> = await registry.prototype.GetRegisteredWorkflowTypes.call((r$ as registry).next)
			result = $.appendSlice(result, nextTypes)
		}
		return result
	}

	public async GetRegisteredWorkflows(): globalThis.Promise<$.Slice<__goscript_internal_workflow.workflow | null>> {
		const r: registry | $.VarRef<registry> | null = this;
		const r$: registry = r == null ? $.pointerTarget<registry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<registry>(r)
		await (r$ as registry).Mutex.Lock()
		let result: $.Slice<__goscript_internal_workflow.workflow | null> = null! as $.Slice<__goscript_internal_workflow.workflow | null>
		for (const [__rangeKey, wf] of (r$ as registry).workflowFuncMap?.entries() ?? []) {
			result = $.appendOne(result, wf, $.appendZeros.nil)
		}
		void (r$ as registry).Mutex.Unlock()
		if ((r$ as registry).next != null) {
			let nextWFs: $.Slice<__goscript_internal_workflow.workflow | null> = await registry.prototype.GetRegisteredWorkflows.call((r$ as registry).next)
			result = $.appendSlice(result, nextWFs, $.appendZeros.nil)
		}
		return result
	}

	public async RegisterActivity(af: any): globalThis.Promise<void> {
		const r: registry | $.VarRef<registry> | null = this;
		await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as registry).RegisterActivityWithOptions(af, new __goscript_activity.RegisterActivityOptions(undefined, true)) : registry.prototype.RegisterActivityWithOptions.call(r, af, new __goscript_activity.RegisterActivityOptions(undefined, true)))
	}

	public async RegisterActivityWithOptions(af: any, options: __goscript_activity.RegisterActivityOptions): globalThis.Promise<void> {
		const r: registry | $.VarRef<registry> | null = this;
		let fnType = reflect.TypeOf(af)
		let err: $.GoError = null! as $.GoError
		if (((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (fnType !== null && (fnType as any).__isVarRef !== true && (fnType as any).__goValue === undefined ? (fnType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(fnType)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 25)) {
			err = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as registry).registerActivityStruct(af, options) : registry.prototype.registerActivityStruct.call(r, af, options))
		} else {
			err = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as registry).registerActivityFunction(af, options) : registry.prototype.registerActivityFunction.call(r, af, options))
		}

		if (err != null) {
			$.panic((err as any))
		}
	}

	public async RegisterWorkflow(af: any): globalThis.Promise<void> {
		const r: registry | $.VarRef<registry> | null = this;
		await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as registry).RegisterWorkflowWithOptions(af, new __goscript_workflow.RegisterWorkflowOptions(undefined, true)) : registry.prototype.RegisterWorkflowWithOptions.call(r, af, new __goscript_workflow.RegisterWorkflowOptions(undefined, true)))
	}

	public async RegisterWorkflowWithOptions(wf: any, options: __goscript_workflow.RegisterWorkflowOptions): globalThis.Promise<void> {
		let r: registry | $.VarRef<registry> | null = this;
		using __defer = new $.DisposableStack()
		const r$: registry = r == null ? $.pointerTarget<registry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<registry>(r)
		// Validate that it is a function
		let fnType = reflect.TypeOf(wf)
		{
			let err = await __goscript_internal_worker.validateFnFormat(fnType, true)
			if (err != null) {
				$.panic((err as any))
			}
		}
		let fnName = __goscript_internal_worker.getFunctionName(wf)
		let alias = options.Name
		let registerName = fnName

		if (options.EnableShortName) {
			registerName = getShortFunctionName(fnName)
		}
		if ($.stringLen(alias) > 0) {
			registerName = alias
		}

		await (r$ as registry).Mutex.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((r$ as registry).Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		if (!options.DisableAlreadyRegisteredCheck) {
			{
				let [, ok] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as registry).getWorkflowNoLock(registerName) : registry.prototype.getWorkflowNoLock.call(r, registerName))
				if (ok) {
					$.panic(await fmt.Sprintf("workflow name \"%v\" is already registered", registerName))
				}
			}
		}
		$.mapSet((r$ as registry).workflowFuncMap, registerName, $.interfaceValue<__goscript_internal_workflow.workflow | null>(new __goscript_internal_worker.workflowExecutor({workflowType: registerName, fn: wf, path: fnName}), "*internal.workflowExecutor", /* @__PURE__ */ $.pointerType("internal.workflowExecutor")))
		if (($.stringLen(alias) > 0) || options.EnableShortName) {
			$.mapSet((r$ as registry).workflowAliasMap, fnName, registerName)
		}
	}

	public async addActivityWithLock(fnName: string, a: __goscript_internal_activity.activity | null): globalThis.Promise<void> {
		let r: registry | $.VarRef<registry> | null = this;
		using __defer = new $.DisposableStack()
		await $.pointerValue<registry>(r).Mutex.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<registry>(r).Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		$.mapSet($.pointerValue<registry>(r).activityFuncMap, fnName, a)
	}

	public async getActivityAlias(fnName: string): globalThis.Promise<[string, boolean]> {
		const r: registry | $.VarRef<registry> | null = this;
		const r$: registry = r == null ? $.pointerTarget<registry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<registry>(r)
		await (r$ as registry).Mutex.Lock()
		let [alias, ok] = $.mapGet<string, string, string>((r$ as registry).activityAliasMap, fnName, "")
		if (!ok && ((r$ as registry).next != null)) {
			void (r$ as registry).Mutex.Unlock()
			return registry.prototype.getActivityAlias.call((r$ as registry).next, fnName)
		}
		void (r$ as registry).Mutex.Unlock()
		return [alias, ok]
	}

	public getActivityNoLock(registerName: string): [__goscript_internal_activity.activity | null, boolean] {
		const r: registry | $.VarRef<registry> | null = this;
		const r$: registry = r == null ? $.pointerTarget<registry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<registry>(r)
		let [a, ok] = $.mapGet<string, __goscript_internal_activity.activity | null, __goscript_internal_activity.activity | null>((r$ as registry).activityFuncMap, registerName, null)
		if (!ok && ((r$ as registry).next != null)) {
			return registry.prototype.getActivityNoLock.call((r$ as registry).next, registerName)
		}
		return [a, ok]
	}

	public async getRegisteredActivities(): globalThis.Promise<$.Slice<__goscript_internal_activity.activity | null>> {
		const r: registry | $.VarRef<registry> | null = this;
		const r$: registry = r == null ? $.pointerTarget<registry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<registry>(r)
		await (r$ as registry).Mutex.Lock()
		let activities: $.Slice<__goscript_internal_activity.activity | null> = $.makeSlice<__goscript_internal_activity.activity | null>(0, $.len((r$ as registry).activityFuncMap))
		for (const [__rangeKey, a] of (r$ as registry).activityFuncMap?.entries() ?? []) {
			activities = $.appendOne(activities, a, $.appendZeros.nil)
		}
		void (r$ as registry).Mutex.Unlock()
		if ((r$ as registry).next != null) {
			let nextActivities: $.Slice<__goscript_internal_activity.activity | null> = await registry.prototype.getRegisteredActivities.call((r$ as registry).next)
			activities = $.appendSlice(activities, nextActivities, $.appendZeros.nil)
		}
		return activities
	}

	public async getWorkflowAlias(fnName: string): globalThis.Promise<[string, boolean]> {
		const r: registry | $.VarRef<registry> | null = this;
		const r$: registry = r == null ? $.pointerTarget<registry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<registry>(r)
		await (r$ as registry).Mutex.Lock()
		let [alias, ok] = $.mapGet<string, string, string>((r$ as registry).workflowAliasMap, fnName, "")
		if (!ok && ((r$ as registry).next != null)) {
			void (r$ as registry).Mutex.Unlock()
			return registry.prototype.getWorkflowAlias.call((r$ as registry).next, fnName)
		}
		void (r$ as registry).Mutex.Unlock()
		return [alias, ok]
	}

	public async getWorkflowDefinition(wt: __goscript_workflow.WorkflowType): globalThis.Promise<[__goscript_internal_worker_base.workflowDefinition | null, $.GoError]> {
		const r: registry | $.VarRef<registry> | null = this;
		let lookup = __goscript_internal_worker.getFunctionName(wt.Name)
		{
			let [alias, ok] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as registry).getWorkflowAlias(lookup) : registry.prototype.getWorkflowAlias.call(r, lookup))
			if (ok) {
				lookup = alias
			}
		}
		let [wf, ok] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as registry).getWorkflowFn(lookup) : registry.prototype.getWorkflowFn.call(r, lookup))
		if (!ok) {
			let supported = strings.Join(await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as registry).GetRegisteredWorkflowTypes() : registry.prototype.GetRegisteredWorkflowTypes.call(r)), ", ")
			return [null, fmt.Errorf($.concatString("unable to find workflow type", ": %v. Supported types: [%v]"), lookup, supported)]
		}
		let wd: __goscript_internal_worker.workflowExecutor | $.VarRef<__goscript_internal_worker.workflowExecutor> | null = new __goscript_internal_worker.workflowExecutor({workflowType: lookup, fn: wf})
		return [$.interfaceValue<__goscript_internal_worker_base.workflowDefinition | null>(__goscript_internal_workflow.newSyncWorkflowDefinition($.interfaceValue<__goscript_internal_workflow.workflow | null>(wd, "*internal.workflowExecutor", /* @__PURE__ */ $.pointerType("internal.workflowExecutor"))), "*internal.syncWorkflowDefinition", /* @__PURE__ */ $.pointerType("internal.syncWorkflowDefinition")), null]
	}

	public async getWorkflowFn(fnName: string): globalThis.Promise<[any, boolean]> {
		const r: registry | $.VarRef<registry> | null = this;
		const r$: registry = r == null ? $.pointerTarget<registry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<registry>(r)
		await (r$ as registry).Mutex.Lock()
		let [wf, ok] = $.mapGet<string, __goscript_internal_workflow.workflow | null, __goscript_internal_workflow.workflow | null>((r$ as registry).workflowFuncMap, fnName, null)
		if (!ok) {
			let __goscriptTuple1: any = $.mapGet<string, __goscript_internal_workflow.workflow | null, __goscript_internal_workflow.workflow | null>((r$ as registry).workflowFuncMap, strings.TrimSuffix(fnName, "-fm"), null)
			wf = __goscriptTuple1[0]
			ok = __goscriptTuple1[1]
		}
		if (!ok && ((r$ as registry).next != null)) {
			void (r$ as registry).Mutex.Unlock()
			return registry.prototype.getWorkflowFn.call((r$ as registry).next, fnName)
		}
		void (r$ as registry).Mutex.Unlock()
		if (ok) {
			return [(__goscriptAwait = (wf !== null && (wf as any).__isVarRef !== true && (wf as any).__goValue === undefined ? (wf as Exclude<__goscript_internal_workflow.workflow, null>) : $.pointerValue<Exclude<__goscript_internal_workflow.workflow, null>>(wf)).GetFunction(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), ok]
		}
		return [null, ok]
	}

	public async getWorkflowNoLock(registerName: string): globalThis.Promise<[any, boolean]> {
		const r: registry | $.VarRef<registry> | null = this;
		const r$: registry = r == null ? $.pointerTarget<registry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<registry>(r)
		let [a, ok] = $.mapGet<string, __goscript_internal_workflow.workflow | null, __goscript_internal_workflow.workflow | null>((r$ as registry).workflowFuncMap, registerName, null)
		if (!ok && ((r$ as registry).next != null)) {
			return registry.prototype.getWorkflowNoLock.call((r$ as registry).next, registerName)
		}
		if (ok) {
			return [(__goscriptAwait = (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? (a as Exclude<__goscript_internal_workflow.workflow, null>) : $.pointerValue<Exclude<__goscript_internal_workflow.workflow, null>>(a)).GetFunction(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), ok]
		}
		return [null, ok]
	}

	public async registerActivityFunction(af: any, options: __goscript_activity.RegisterActivityOptions): globalThis.Promise<$.GoError> {
		let r: registry | $.VarRef<registry> | null = this;
		using __defer = new $.DisposableStack()
		const r$: registry = r == null ? $.pointerTarget<registry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<registry>(r)
		let fnType = reflect.TypeOf(af)
		{
			let err = await __goscript_internal_worker.validateFnFormat(fnType, false)
			if (err != null) {
				return fmt.Errorf("failed to register activity method: %v", (err as any))
			}
		}

		let fnName = __goscript_internal_worker.getFunctionName(af)
		let alias = options.Name
		let registerName = fnName

		if (options.EnableShortName) {
			registerName = getShortFunctionName(fnName)
		}
		if ($.stringLen(alias) > 0) {
			registerName = alias
		}

		await (r$ as registry).Mutex.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((r$ as registry).Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		if (!options.DisableAlreadyRegisteredCheck) {
			{
				let [, ok] = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as registry).getActivityNoLock(registerName) : registry.prototype.getActivityNoLock.call(r, registerName))
				if (ok) {
					return fmt.Errorf("activity type \"%v\" is already registered", registerName)
				}
			}
		}
		$.mapSet((r$ as registry).activityFuncMap, registerName, $.interfaceValue<__goscript_internal_activity.activity | null>(new __goscript_internal_worker.activityExecutor({name: registerName, fn: af, options: options, path: fnName}), "*internal.activityExecutor", /* @__PURE__ */ $.pointerType("internal.activityExecutor")))
		if (($.stringLen(alias) > 0) || options.EnableShortName) {
			$.mapSet((r$ as registry).activityAliasMap, fnName, registerName)
		}

		return null
	}

	public async registerActivityStruct(aStruct: any, options: __goscript_activity.RegisterActivityOptions): globalThis.Promise<$.GoError> {
		let r: registry | $.VarRef<registry> | null = this;
		using __defer = new $.DisposableStack()
		const r$: registry = r == null ? $.pointerTarget<registry>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<registry>(r)
		await (r$ as registry).Mutex.Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((r$ as registry).Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })

		let structValue = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(aStruct)))
		let structType = $.markAsStructValue($.cloneStructValue(structValue)).Type()
		let count = 0
		for (let i = 0; i < $.markAsStructValue($.cloneStructValue(structValue)).NumMethod(); i++) {
			let methodValue = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(structValue)).Method(i)))
			let method = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (structType !== null && (structType as any).__isVarRef !== true && (structType as any).__goValue === undefined ? (structType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(structType)).Method(i), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.Method)))
			// skip private method
			if (!$.stringEqual(method.PkgPath, "")) {
				continue
			}
			let methodName = __goscript_internal_worker.getFunctionName($.markAsStructValue($.cloneStructValue(method.Func)).Interface())
			{
				let err = await __goscript_internal_worker.validateFnFormat(method.Type, false)
				if (err != null) {
					return fmt.Errorf("failed to register activity method %v of %v: %e", methodName, (__goscriptAwait = (structType !== null && (structType as any).__isVarRef !== true && (structType as any).__goValue === undefined ? (structType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(structType)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (err as any))
				}
			}

			let structPrefix = options.Name
			let registerName = methodName

			if (options.EnableShortName) {
				registerName = getShortFunctionName(methodName)
			}
			if ($.stringLen(structPrefix) > 0) {
				registerName = $.concatString(structPrefix, getShortFunctionName(methodName))
			}

			if (!options.DisableAlreadyRegisteredCheck) {
				{
					let [, ok] = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as registry).getActivityNoLock(registerName) : registry.prototype.getActivityNoLock.call(r, registerName))
					if (ok) {
						return fmt.Errorf("activity type \"%v\" is already registered", registerName)
					}
				}
			}
			$.mapSet((r$ as registry).activityFuncMap, registerName, $.interfaceValue<__goscript_internal_activity.activity | null>((() => { const __goscriptLiteralField1 = $.markAsStructValue($.cloneStructValue(methodValue)).Interface(); return new __goscript_internal_worker.activityExecutor({name: registerName, fn: __goscriptLiteralField1, options: options, path: methodName}) })(), "*internal.activityExecutor", /* @__PURE__ */ $.pointerType("internal.activityExecutor")))
			if (($.stringLen(structPrefix) > 0) || options.EnableShortName) {
				$.mapSet((r$ as registry).activityAliasMap, methodName, registerName)
			}
			count++
		}

		if (count == 0) {
			return fmt.Errorf("no activities (public methods) found in %v structure", (__goscriptAwait = (structType !== null && (structType as any).__isVarRef !== true && (structType as any).__goValue === undefined ? (structType as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(structType)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
		}

		return null
	}

	public Lock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).Lock()
	}

	public TryLock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).TryLock()
	}

	public Unlock(): any {
		return $.pointerValue<sync.Mutex>(this.Mutex).Unlock()
	}

	static __typeInfo = $.registerStructType(
		"internal.registry",
		() => new registry(),
		() => [$.methodSignature("GetActivity", [["fnName", /* @__PURE__ */ $.basicType("string")]], ["internal.activity", /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetRegisteredWorkflowTypes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("GetRegisteredWorkflows", [], [/* @__PURE__ */ $.sliceType("internal.workflow")], true), $.methodSignature("RegisterActivity", [["af", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("RegisterActivityWithOptions", [["af", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterActivityOptions"]], [], true), $.methodSignature("RegisterWorkflow", [["af", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("RegisterWorkflowWithOptions", [["wf", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterWorkflowOptions"]], [], true), $.methodSignature("addActivityWithLock", [["fnName", /* @__PURE__ */ $.basicType("string")], ["a", "internal.activity"]], [], true), $.methodSignature("getActivityAlias", [["fnName", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getActivityNoLock", [["registerName", /* @__PURE__ */ $.basicType("string")]], ["internal.activity", /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getRegisteredActivities", [], [/* @__PURE__ */ $.sliceType("internal.activity")], true), $.methodSignature("getWorkflowAlias", [["fnName", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getWorkflowDefinition", [["wt", "internal.WorkflowType"]], ["internal.workflowDefinition", "error"], true), $.methodSignature("getWorkflowFn", [["fnName", /* @__PURE__ */ $.basicType("string")]], [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("getWorkflowNoLock", [["registerName", /* @__PURE__ */ $.basicType("string")]], [{ kind: $.TypeKind.Interface, methods: [] }, /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("registerActivityFunction", [["af", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterActivityOptions"]], ["error"], true), $.methodSignature("registerActivityStruct", [["aStruct", { kind: $.TypeKind.Interface, methods: [] }], ["options", "internal.RegisterActivityOptions"]], ["error"], true), $.methodSignature("Lock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		registry,
		() => [/* @__PURE__ */ $.structField("Mutex", "sync.Mutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("workflowFuncMap", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "internal.workflow"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("workflowAliasMap", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("activityFuncMap", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "internal.activity"), [3], 24, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("activityAliasMap", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [4], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("next", /* @__PURE__ */ $.pointerType("internal.registry"), [5], 40, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export const errMsgUnknownWorkflowType: string = "unable to find workflow type"

export let once: $.VarRef<sync.Once> = $.varRef($.markAsStructValue(new sync.Once()))

export function __goscript_set_once(__goscriptValue: sync.Once): void {
	$.assignStruct(once.value, __goscriptValue)
}

export let globalRegistry: registry | $.VarRef<registry> | null = null! as registry | $.VarRef<registry> | null

export function __goscript_set_globalRegistry(__goscriptValue: registry | $.VarRef<registry> | null): void {
	globalRegistry = __goscriptValue
}

export async function newRegistry(): globalThis.Promise<registry | $.VarRef<registry> | null> {
	return (await (async () => { const __goscriptLiteralField0 = await getGlobalRegistry(); return new registry({workflowFuncMap: $.makeMap<string, __goscript_internal_workflow.workflow | null>(), workflowAliasMap: $.makeMap<string, string>(), activityFuncMap: $.makeMap<string, __goscript_internal_activity.activity | null>(), activityAliasMap: $.makeMap<string, string>(), next: __goscriptLiteralField0}) })())
}

export async function getGlobalRegistry(): globalThis.Promise<registry | $.VarRef<registry> | null> {
	await once.value.Do($.functionValue((): void => {
		globalRegistry = new registry({workflowFuncMap: $.makeMap<string, __goscript_internal_workflow.workflow | null>(), workflowAliasMap: $.makeMap<string, string>(), activityFuncMap: $.makeMap<string, __goscript_internal_activity.activity | null>(), activityAliasMap: $.makeMap<string, string>()})
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
	return globalRegistry
}

export function getShortFunctionName(fnName: string): string {
	let elements: $.Slice<string> = strings.Split(fnName, ".")
	return $.arrayIndex(elements!, $.sliceLen(elements) - 1)
}

var __goscriptAwait: any
