// Generated file based on session.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as uuid from "@goscript/github.com/pborman/uuid/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as backoff from "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as __goscript_activity from "./activity.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_encoded from "./encoded.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import type * as __goscript_interceptors from "./interceptors.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import type * as __goscript_internal_time from "./internal_time.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"

import * as __goscript_internal_worker from "./internal_worker.gs.ts"

import * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"

import * as __goscript_internal_workflow from "./internal_workflow.gs.ts"

import * as __goscript_registry from "./registry.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/pborman/uuid/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "./activity.gs.ts"
import "./client.gs.ts"
import "./context.gs.ts"
import "./encoded.gs.ts"
import "./error.gs.ts"
import "./headers.gs.ts"
import "./internal_activity.gs.ts"
import "./internal_utils.gs.ts"
import "./internal_worker.gs.ts"
import "./internal_worker_base.gs.ts"
import "./internal_workflow.gs.ts"
import "./registry.gs.ts"
import "./workflow.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.SessionInfo", "internal.SessionOptions", "internal.recreateSessionParams", "internal.sessionState", "internal.sessionTokenBucket", "internal.sessionEnvironment", "internal.sessionEnvironmentImpl", "internal.sessionCreationResponse"])

export type sessionState = number

export type sessionEnvironment = {
	AddSessionToken(): void
	CompleteSession(sessionID: string): void
	CreateSession(ctx: context.Context | null, sessionID: string): [$.Channel<{}> | null, $.GoError] | globalThis.Promise<[$.Channel<{}> | null, $.GoError]>
	GetResourceSpecificTasklist(): string
	GetTokenBucket(): sessionTokenBucket | $.VarRef<sessionTokenBucket> | null
	SignalCreationResponse(ctx: context.Context | null, sessionID: string): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"internal.sessionEnvironment",
	null,
	[$.methodSignature("AddSessionToken"), $.methodSignature("CompleteSession", [["sessionID", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("CreateSession", [["ctx", "context.Context"], ["sessionID", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), "error"]), $.methodSignature("GetResourceSpecificTasklist", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("GetTokenBucket", [], [/* @__PURE__ */ $.pointerType("internal.sessionTokenBucket")]), $.methodSignature("SignalCreationResponse", [["ctx", "context.Context"], ["sessionID", /* @__PURE__ */ $.basicType("string")]], ["error"])]
);

export class SessionInfo {
	public get SessionID(): string {
		return this._fields.SessionID
	}

	public set SessionID(value: string) {
		this._fields.SessionID = value
	}

	public get HostName(): string {
		return this._fields.HostName
	}

	public set HostName(value: string) {
		this._fields.HostName = value
	}

	public get resourceID(): string {
		return this._fields.resourceID
	}

	public set resourceID(value: string) {
		this._fields.resourceID = value
	}

	public get tasklist(): string {
		return this._fields.tasklist
	}

	public set tasklist(value: string) {
		this._fields.tasklist = value
	}

	public get sessionState(): sessionState {
		return this._fields.sessionState
	}

	public set sessionState(value: sessionState) {
		this._fields.sessionState = value
	}

	public get sessionCancelFunc(): (() => void) | null {
		return this._fields.sessionCancelFunc
	}

	public set sessionCancelFunc(value: (() => void) | null) {
		this._fields.sessionCancelFunc = value
	}

	public get completionCtx(): __goscript_context.Context | null {
		return this._fields.completionCtx
	}

	public set completionCtx(value: __goscript_context.Context | null) {
		this._fields.completionCtx = value
	}

	public _fields: {
		SessionID: string
		HostName: string
		resourceID: string
		tasklist: string
		sessionState: sessionState
		sessionCancelFunc: (() => void) | null
		completionCtx: __goscript_context.Context | null
	}

	constructor(init?: Partial<{SessionID?: string, HostName?: string, resourceID?: string, tasklist?: string, sessionState?: sessionState, sessionCancelFunc?: (() => void) | null, completionCtx?: __goscript_context.Context | null}>, __goscriptValue?: boolean) {
		this._fields = {
			SessionID: init?.SessionID ?? ("" as string),
			HostName: init?.HostName ?? ("" as string),
			resourceID: init?.resourceID ?? ("" as string),
			tasklist: init?.tasklist ?? ("" as string),
			sessionState: init?.sessionState ?? (0 as sessionState),
			sessionCancelFunc: init?.sessionCancelFunc ?? (null! as (() => void) | null),
			completionCtx: init?.completionCtx ?? (null! as __goscript_context.Context | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SessionInfo {
		return new SessionInfo(this, true)
	}

	public __goscriptAssign(source: SessionInfo): void {
		const target = this._fields
		const values = source._fields
		target.SessionID = values.SessionID
		target.HostName = values.HostName
		target.resourceID = values.resourceID
		target.tasklist = values.tasklist
		target.sessionState = values.sessionState
		target.sessionCancelFunc = values.sessionCancelFunc
		target.completionCtx = $.assignFieldValue(target.completionCtx, values.completionCtx, "internal.Context")
	}

	public async GetRecreateToken(): globalThis.Promise<$.Slice<number>> {
		const s: SessionInfo | $.VarRef<SessionInfo> | null = this;
		let params = $.varRef(new recreateSessionParams({Tasklist: $.pointerValue<SessionInfo>(s).tasklist}, true))
		return mustSerializeRecreateToken(params)
	}

	static __typeInfo = $.registerStructType(
		"internal.SessionInfo",
		() => new SessionInfo(),
		() => [$.methodSignature("GetRecreateToken", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true)],
		SessionInfo,
		() => [/* @__PURE__ */ $.structField("SessionID", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("HostName", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("resourceID", /* @__PURE__ */ $.basicType("string"), [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("tasklist", /* @__PURE__ */ $.basicType("string"), [3], 48, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("sessionState", /* @__PURE__ */ $.basicType("int", "internal.sessionState"), [4], 64, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("sessionCancelFunc", ({ kind: $.TypeKind.Function, name: "internal.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [5], 72, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("completionCtx", "internal.Context", [6], 80, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class SessionOptions {
	public get ExecutionTimeout(): time.Duration {
		return this._fields.ExecutionTimeout
	}

	public set ExecutionTimeout(value: time.Duration) {
		this._fields.ExecutionTimeout = value
	}

	public get CreationTimeout(): time.Duration {
		return this._fields.CreationTimeout
	}

	public set CreationTimeout(value: time.Duration) {
		this._fields.CreationTimeout = value
	}

	public get HeartbeatTimeout(): time.Duration {
		return this._fields.HeartbeatTimeout
	}

	public set HeartbeatTimeout(value: time.Duration) {
		this._fields.HeartbeatTimeout = value
	}

	public _fields: {
		ExecutionTimeout: time.Duration
		CreationTimeout: time.Duration
		HeartbeatTimeout: time.Duration
	}

	constructor(init?: Partial<{ExecutionTimeout?: time.Duration, CreationTimeout?: time.Duration, HeartbeatTimeout?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			ExecutionTimeout: init?.ExecutionTimeout ?? (0n as time.Duration),
			CreationTimeout: init?.CreationTimeout ?? (0n as time.Duration),
			HeartbeatTimeout: init?.HeartbeatTimeout ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SessionOptions {
		return new SessionOptions(this, true)
	}

	public __goscriptAssign(source: SessionOptions): void {
		const target = this._fields
		const values = source._fields
		target.ExecutionTimeout = values.ExecutionTimeout
		target.CreationTimeout = values.CreationTimeout
		target.HeartbeatTimeout = values.HeartbeatTimeout
	}

	static __typeInfo = $.registerStructType(
		"internal.SessionOptions",
		() => new SessionOptions(),
		() => [],
		SessionOptions,
		() => [/* @__PURE__ */ $.structField("ExecutionTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, true), /* @__PURE__ */ $.structField("CreationTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 8, true), /* @__PURE__ */ $.structField("HeartbeatTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 16, true)]
	)
}

export class recreateSessionParams {
	public get Tasklist(): string {
		return this._fields.Tasklist
	}

	public set Tasklist(value: string) {
		this._fields.Tasklist = value
	}

	public _fields: {
		Tasklist: string
	}

	constructor(init?: Partial<{Tasklist?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Tasklist: init?.Tasklist ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): recreateSessionParams {
		return new recreateSessionParams(this, true)
	}

	public __goscriptAssign(source: recreateSessionParams): void {
		const target = this._fields
		const values = source._fields
		target.Tasklist = values.Tasklist
	}

	static __typeInfo = $.registerStructType(
		"internal.recreateSessionParams",
		() => new recreateSessionParams(),
		() => [],
		recreateSessionParams,
		() => [/* @__PURE__ */ $.structField("Tasklist", /* @__PURE__ */ $.basicType("string"), [0], 0, true)]
	)
}

export class sessionTokenBucket {
	public get Cond(): sync.Cond | $.VarRef<sync.Cond> | null {
		return this._fields.Cond
	}

	public set Cond(value: sync.Cond | $.VarRef<sync.Cond> | null) {
		this._fields.Cond = value
	}

	public get availableToken(): number {
		return this._fields.availableToken
	}

	public set availableToken(value: number) {
		this._fields.availableToken = value
	}

	public _fields: {
		Cond: sync.Cond | $.VarRef<sync.Cond> | null
		availableToken: number
	}

	constructor(init?: Partial<{Cond?: sync.Cond | $.VarRef<sync.Cond> | null, availableToken?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Cond: init?.Cond ?? (null! as sync.Cond | $.VarRef<sync.Cond> | null),
			availableToken: init?.availableToken ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sessionTokenBucket {
		return new sessionTokenBucket(this, true)
	}

	public __goscriptAssign(source: sessionTokenBucket): void {
		const target = this._fields
		const values = source._fields
		target.Cond = values.Cond
		target.availableToken = values.availableToken
	}

	public async addToken(): globalThis.Promise<void> {
		let t: sessionTokenBucket | $.VarRef<sessionTokenBucket> | null = this;
		const t$: sessionTokenBucket = t == null ? $.pointerTarget<sessionTokenBucket>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<sessionTokenBucket>(t)
		await $.pointerValue<Exclude<sync.Locker, null>>($.pointerValue<sync.Cond>((t$ as sessionTokenBucket).Cond).L).Lock();
		;(t$ as sessionTokenBucket).availableToken++
		void (__goscriptAwait = $.pointerValue<Exclude<sync.Locker, null>>($.pointerValue<sync.Cond>((t$ as sessionTokenBucket).Cond).L).Unlock(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		$.pointerValue<sync.Cond>((t$ as sessionTokenBucket).Cond).Signal()
	}

	public async getToken(): globalThis.Promise<boolean> {
		let t: sessionTokenBucket | $.VarRef<sessionTokenBucket> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const t$: sessionTokenBucket = t == null ? $.pointerTarget<sessionTokenBucket>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<sessionTokenBucket>(t)
		await $.pointerValue<Exclude<sync.Locker, null>>($.pointerValue<sync.Cond>((t$ as sessionTokenBucket).Cond).L).Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<Exclude<sync.Locker, null>>($.pointerValue<sync.Cond>((t$ as sessionTokenBucket).Cond).L)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.Locker.Unlock-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		if ((t$ as sessionTokenBucket).availableToken == 0) {
			return false
		}
		;(t$ as sessionTokenBucket).availableToken--
		return true
	}

	public async waitForAvailableToken(): globalThis.Promise<void> {
		const t: sessionTokenBucket | $.VarRef<sessionTokenBucket> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const t$: sessionTokenBucket = t == null ? $.pointerTarget<sessionTokenBucket>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<sessionTokenBucket>(t)
		await $.pointerValue<Exclude<sync.Locker, null>>($.pointerValue<sync.Cond>((t$ as sessionTokenBucket).Cond).L).Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<Exclude<sync.Locker, null>>($.pointerValue<sync.Cond>((t$ as sessionTokenBucket).Cond).L)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.Locker.Unlock-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		while ((t$ as sessionTokenBucket).availableToken == 0) {
			await $.pointerValue<sync.Cond>((t$ as sessionTokenBucket).Cond).Wait()
		}
	}

	public Broadcast(): any {
		return $.pointerValue<sync.Cond>(this.Cond).Broadcast()
	}

	public Signal(): any {
		return $.pointerValue<sync.Cond>(this.Cond).Signal()
	}

	public Wait(): any {
		return $.pointerValue<sync.Cond>(this.Cond).Wait()
	}

	static __typeInfo = $.registerStructType(
		"internal.sessionTokenBucket",
		() => new sessionTokenBucket(),
		() => [$.methodSignature("addToken", [], [], true), $.methodSignature("getToken", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("waitForAvailableToken", [], [], true), $.methodSignature("Broadcast"), $.methodSignature("Signal"), $.methodSignature("Wait")],
		sessionTokenBucket,
		() => [/* @__PURE__ */ $.structField("Cond", /* @__PURE__ */ $.pointerType("sync.Cond"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("availableToken", /* @__PURE__ */ $.basicType("int"), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class sessionEnvironmentImpl {
	public get Mutex(): sync.Mutex | $.VarRef<sync.Mutex> | null {
		return this._fields.Mutex
	}

	public set Mutex(value: sync.Mutex | $.VarRef<sync.Mutex> | null) {
		this._fields.Mutex = value
	}

	public get doneChanMap(): globalThis.Map<string, $.Channel<{}> | null> | null {
		return this._fields.doneChanMap
	}

	public set doneChanMap(value: globalThis.Map<string, $.Channel<{}> | null> | null) {
		this._fields.doneChanMap = value
	}

	public get resourceID(): string {
		return this._fields.resourceID
	}

	public set resourceID(value: string) {
		this._fields.resourceID = value
	}

	public get resourceSpecificTasklist(): string {
		return this._fields.resourceSpecificTasklist
	}

	public set resourceSpecificTasklist(value: string) {
		this._fields.resourceSpecificTasklist = value
	}

	public get sessionTokenBucket(): sessionTokenBucket | $.VarRef<sessionTokenBucket> | null {
		return this._fields.sessionTokenBucket
	}

	public set sessionTokenBucket(value: sessionTokenBucket | $.VarRef<sessionTokenBucket> | null) {
		this._fields.sessionTokenBucket = value
	}

	public _fields: {
		Mutex: sync.Mutex | $.VarRef<sync.Mutex> | null
		doneChanMap: globalThis.Map<string, $.Channel<{}> | null> | null
		resourceID: string
		resourceSpecificTasklist: string
		sessionTokenBucket: sessionTokenBucket | $.VarRef<sessionTokenBucket> | null
	}

	constructor(init?: Partial<{Mutex?: sync.Mutex | $.VarRef<sync.Mutex> | null, doneChanMap?: globalThis.Map<string, $.Channel<{}> | null> | null, resourceID?: string, resourceSpecificTasklist?: string, sessionTokenBucket?: sessionTokenBucket | $.VarRef<sessionTokenBucket> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Mutex: init?.Mutex ?? (null! as sync.Mutex | $.VarRef<sync.Mutex> | null),
			doneChanMap: init?.doneChanMap ?? (null! as globalThis.Map<string, $.Channel<{}> | null> | null),
			resourceID: init?.resourceID ?? ("" as string),
			resourceSpecificTasklist: init?.resourceSpecificTasklist ?? ("" as string),
			sessionTokenBucket: init?.sessionTokenBucket ?? (null! as sessionTokenBucket | $.VarRef<sessionTokenBucket> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sessionEnvironmentImpl {
		return new sessionEnvironmentImpl(this, true)
	}

	public __goscriptAssign(source: sessionEnvironmentImpl): void {
		const target = this._fields
		const values = source._fields
		target.Mutex = values.Mutex
		target.doneChanMap = values.doneChanMap
		target.resourceID = values.resourceID
		target.resourceSpecificTasklist = values.resourceSpecificTasklist
		target.sessionTokenBucket = values.sessionTokenBucket
	}

	public async AddSessionToken(): globalThis.Promise<void> {
		const env: sessionEnvironmentImpl | $.VarRef<sessionEnvironmentImpl> | null = this;
		await sessionTokenBucket.prototype.addToken.call($.pointerValue<sessionEnvironmentImpl>(env).sessionTokenBucket)
	}

	public async CompleteSession(sessionID: string): globalThis.Promise<void> {
		const env: sessionEnvironmentImpl | $.VarRef<sessionEnvironmentImpl> | null = this;
		using __defer = new $.DisposableStack()
		const env$: sessionEnvironmentImpl = env == null ? $.pointerTarget<sessionEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<sessionEnvironmentImpl>(env)
		await $.pointerValue<sync.Mutex>((env$ as sessionEnvironmentImpl).Mutex).Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<sync.Mutex>((env$ as sessionEnvironmentImpl).Mutex)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		{
			let __goscriptTuple0: any = $.mapGet<string, $.Channel<{}> | null, $.Channel<{}> | null>((env$ as sessionEnvironmentImpl).doneChanMap, sessionID, null)
			let doneChan: $.Channel<{}> | null = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				$.deleteMapEntry((env$ as sessionEnvironmentImpl).doneChanMap, sessionID)
				doneChan!.close()
			}
		}
	}

	public async CreateSession(ctx: context.Context | null, sessionID: string): globalThis.Promise<[$.Channel<{}> | null, $.GoError]> {
		let env: sessionEnvironmentImpl | $.VarRef<sessionEnvironmentImpl> | null = this;
		using __defer = new $.DisposableStack()
		const env$: sessionEnvironmentImpl = env == null ? $.pointerTarget<sessionEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<sessionEnvironmentImpl>(env)
		if (!await sessionTokenBucket.prototype.getToken.call((env$ as sessionEnvironmentImpl).sessionTokenBucket)) {
			return [null, $.interfaceValue<$.GoError>(await __goscript_error.NewCustomError("too many outstanding sessions", null), "*internal.CustomError", /* @__PURE__ */ $.pointerType("internal.CustomError"))]
		}

		await $.pointerValue<sync.Mutex>((env$ as sessionEnvironmentImpl).Mutex).Lock()
		const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<sync.Mutex>((env$ as sessionEnvironmentImpl).Mutex)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee3() })
		let doneCh: $.Channel<{}> | null = $.makeChannel<{}>(0, {}, "both")
		$.mapSet((env$ as sessionEnvironmentImpl).doneChanMap, sessionID, doneCh)
		return [doneCh, null]
	}

	public GetResourceSpecificTasklist(): string {
		const env: sessionEnvironmentImpl | $.VarRef<sessionEnvironmentImpl> | null = this;
		return $.pointerValue<sessionEnvironmentImpl>(env).resourceSpecificTasklist
	}

	public GetTokenBucket(): sessionTokenBucket | $.VarRef<sessionTokenBucket> | null {
		const env: sessionEnvironmentImpl | $.VarRef<sessionEnvironmentImpl> | null = this;
		return $.pointerValue<sessionEnvironmentImpl>(env).sessionTokenBucket
	}

	public async SignalCreationResponse(ctx: context.Context | null, sessionID: string): globalThis.Promise<$.GoError> {
		const env: sessionEnvironmentImpl | $.VarRef<sessionEnvironmentImpl> | null = this;
		let activityEnv: __goscript_internal_activity.activityEnvironment | $.VarRef<__goscript_internal_activity.activityEnvironment> | null = await __goscript_internal_activity.getActivityEnv(ctx)
		let activityEnv$: __goscript_internal_activity.activityEnvironment = activityEnv == null ? $.pointerTarget<__goscript_internal_activity.activityEnvironment>(activityEnv) : (activityEnv as any).__isVarRef === true ? (activityEnv as any).value : (activityEnv as any).__goValue === undefined ? (activityEnv as any) : $.pointerTarget<__goscript_internal_activity.activityEnvironment>(activityEnv)

		let __goscriptTuple1: any = await __goscript_internal_worker.encodeArg(__goscript_encoded.getDefaultDataConverter(), $.interfaceValue((env !== null && (env as any).__isVarRef !== true && (env as any).__goValue === undefined ? ((env as any) as sessionEnvironmentImpl).getCreationResponse() : sessionEnvironmentImpl.prototype.getCreationResponse.call(env)), "*internal.sessionCreationResponse", /* @__PURE__ */ $.pointerType("internal.sessionCreationResponse")))
		let signalInput: $.Slice<number> = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return err
		}

		return $.pointerValue<Exclude<__goscript_activity.ServiceInvoker, null>>((activityEnv$ as __goscript_internal_activity.activityEnvironment).serviceInvoker).SignalWorkflow(ctx, (activityEnv$ as __goscript_internal_activity.activityEnvironment).workflowDomain, (activityEnv$ as __goscript_internal_activity.activityEnvironment).workflowExecution.ID, (activityEnv$ as __goscript_internal_activity.activityEnvironment).workflowExecution.RunID, sessionID, signalInput)
	}

	public getCreationResponse(): sessionCreationResponse | $.VarRef<sessionCreationResponse> | null {
		const env: sessionEnvironmentImpl | $.VarRef<sessionEnvironmentImpl> | null = this;
		const env$: sessionEnvironmentImpl = env == null ? $.pointerTarget<sessionEnvironmentImpl>(env) : (env as any).__isVarRef === true ? (env as any).value : (env as any).__goValue === undefined ? (env as any) : $.pointerTarget<sessionEnvironmentImpl>(env)
		return (() => { const __goscriptLiteralField0 = __goscript_internal_utils.getHostName(); return new sessionCreationResponse({Tasklist: (env$ as sessionEnvironmentImpl).resourceSpecificTasklist, ResourceID: (env$ as sessionEnvironmentImpl).resourceID, HostName: __goscriptLiteralField0}) })()
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
		"internal.sessionEnvironmentImpl",
		() => new sessionEnvironmentImpl(),
		() => [$.methodSignature("AddSessionToken", [], [], true), $.methodSignature("CompleteSession", [["sessionID", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("CreateSession", [["ctx", "context.Context"], ["sessionID", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive"), "error"], true), $.methodSignature("GetResourceSpecificTasklist", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("GetTokenBucket", [], [/* @__PURE__ */ $.pointerType("internal.sessionTokenBucket")], true), $.methodSignature("SignalCreationResponse", [["ctx", "context.Context"], ["sessionID", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("getCreationResponse", [], [/* @__PURE__ */ $.pointerType("internal.sessionCreationResponse")], true), $.methodSignature("Lock"), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Unlock")],
		sessionEnvironmentImpl,
		() => [/* @__PURE__ */ $.structField("Mutex", /* @__PURE__ */ $.pointerType("sync.Mutex"), [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("doneChanMap", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both")), [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("resourceID", /* @__PURE__ */ $.basicType("string"), [2], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("resourceSpecificTasklist", /* @__PURE__ */ $.basicType("string"), [3], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("sessionTokenBucket", /* @__PURE__ */ $.pointerType("internal.sessionTokenBucket"), [4], 48, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class sessionCreationResponse {
	public get Tasklist(): string {
		return this._fields.Tasklist
	}

	public set Tasklist(value: string) {
		this._fields.Tasklist = value
	}

	public get HostName(): string {
		return this._fields.HostName
	}

	public set HostName(value: string) {
		this._fields.HostName = value
	}

	public get ResourceID(): string {
		return this._fields.ResourceID
	}

	public set ResourceID(value: string) {
		this._fields.ResourceID = value
	}

	public _fields: {
		Tasklist: string
		HostName: string
		ResourceID: string
	}

	constructor(init?: Partial<{Tasklist?: string, HostName?: string, ResourceID?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Tasklist: init?.Tasklist ?? ("" as string),
			HostName: init?.HostName ?? ("" as string),
			ResourceID: init?.ResourceID ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sessionCreationResponse {
		return new sessionCreationResponse(this, true)
	}

	public __goscriptAssign(source: sessionCreationResponse): void {
		const target = this._fields
		const values = source._fields
		target.Tasklist = values.Tasklist
		target.HostName = values.HostName
		target.ResourceID = values.ResourceID
	}

	static __typeInfo = $.registerStructType(
		"internal.sessionCreationResponse",
		() => new sessionCreationResponse(),
		() => [],
		sessionCreationResponse,
		() => [/* @__PURE__ */ $.structField("Tasklist", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("HostName", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("ResourceID", /* @__PURE__ */ $.basicType("string"), [2], 32, true)]
	)
}

export const sessionStateOpen: sessionState = 0

export const sessionStateFailed: sessionState = 1

export const sessionStateClosed: sessionState = 2

export const sessionInfoContextKey: __goscript_internal_activity.contextKey = "sessionInfo"

export const sessionEnvironmentContextKey: __goscript_internal_activity.contextKey = "sessionEnvironment"

export const sessionCreationActivityName: string = "internalSessionCreationActivity"

export const sessionCompletionActivityName: string = "internalSessionCompletionActivity"

export const errTooManySessionsMsg: string = "too many outstanding sessions"

export const defaultSessionHeartbeatTimeout: time.Duration = 20000000000n

export const maxSessionHeartbeatInterval: time.Duration = 10000000000n

export let ErrSessionFailed: $.GoError = errors.New("session has failed")

export function __goscript_set_ErrSessionFailed(__goscriptValue: $.GoError): void {
	ErrSessionFailed = __goscriptValue
}

export let errFoundExistingOpenSession: $.GoError = errors.New("found exisiting open session in the context")

export function __goscript_set_errFoundExistingOpenSession(__goscriptValue: $.GoError): void {
	errFoundExistingOpenSession = __goscriptValue
}

export async function CreateSession(ctx: __goscript_context.Context | null, sessionOptions: SessionOptions | $.VarRef<SessionOptions> | null): globalThis.Promise<[__goscript_context.Context | null, $.GoError]> {
	let options: __goscript_internal_activity.activityOptions | $.VarRef<__goscript_internal_activity.activityOptions> | null = await __goscript_internal_activity.getActivityOptions(ctx)
	let options$: __goscript_internal_activity.activityOptions = options == null ? $.pointerTarget<__goscript_internal_activity.activityOptions>(options) : (options as any).__isVarRef === true ? (options as any).value : (options as any).__goValue === undefined ? (options as any) : $.pointerTarget<__goscript_internal_activity.activityOptions>(options)
	let baseTasklist = (options$ as __goscript_internal_activity.activityOptions).TaskListName
	if ($.stringEqual(baseTasklist, "")) {
		baseTasklist = (options$ as __goscript_internal_activity.activityOptions).OriginalTaskListName
	}
	return createSession(ctx, getCreationTasklist(baseTasklist), sessionOptions, true)
}

export async function RecreateSession(ctx: __goscript_context.Context | null, recreateToken: $.Slice<number>, sessionOptions: SessionOptions | $.VarRef<SessionOptions> | null): globalThis.Promise<[__goscript_context.Context | null, $.GoError]> {
	let __goscriptTuple2: any = await deserializeRecreateToken(recreateToken)
	let recreateParams: recreateSessionParams | $.VarRef<recreateSessionParams> | null = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if (err != null) {
		return [null, fmt.Errorf("failed to deserilalize recreate token: %v", (err as any))]
	}
	return createSession(ctx, $.pointerValue<recreateSessionParams>(recreateParams).Tasklist, sessionOptions, true)
}

export async function CompleteSession(ctx: __goscript_context.Context | null): globalThis.Promise<void> {
	let sessionInfo: SessionInfo | $.VarRef<SessionInfo> | null = await getSessionInfo(ctx)
	let sessionInfo$: SessionInfo = sessionInfo == null ? $.pointerTarget<SessionInfo>(sessionInfo) : (sessionInfo as any).__isVarRef === true ? (sessionInfo as any).value : (sessionInfo as any).__goValue === undefined ? (sessionInfo as any) : $.pointerTarget<SessionInfo>(sessionInfo)
	if ((sessionInfo == null) || ((sessionInfo$ as SessionInfo).sessionState != 0)) {
		return
	}

	// first cancel both the creation activity and all user activities
	// this will cancel the ctx passed into this function
	void (__goscriptAwait = (sessionInfo$ as SessionInfo).sessionCancelFunc!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	// then execute then completion activity using the completionCtx, which is not cancelled.
	let completionCtx = await __goscript_workflow.WithActivityOptions((sessionInfo$ as SessionInfo).completionCtx, new __goscript_activity.ActivityOptions({ScheduleToStartTimeout: 3000000000n, StartToCloseTimeout: 3000000000n}, true))

	// even though the creation activity has been cancelled, the session worker doesn't know. The worker will wait until
	// next heartbeat to figure out that the workflow is completed and then release the resource. We need to make sure the
	// completion activity is executed before the workflow exits.
	// the tasklist will be overrided to use the one stored in sessionInfo.
	let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_workflow.Future, null>>((await __goscript_workflow.ExecuteActivity(completionCtx, "internalSessionCompletionActivity", $.arrayToSlice<any>([(sessionInfo$ as SessionInfo).SessionID])))).Get(completionCtx, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (err != null) {
		await zap.Logger.prototype.Warn.call(await __goscript_workflow.GetLogger(completionCtx), "Complete session activity failed", $.arrayToSlice<zap.Field>([zap.Error(err)]))
	}

	;(sessionInfo$ as SessionInfo).sessionState = 2
	void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>((await __goscript_internal_workflow.getWorkflowEnvironment(ctx))).RemoveSession((sessionInfo$ as SessionInfo).SessionID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	await zap.Logger.prototype.Debug.call(await __goscript_workflow.GetLogger(ctx), "Completed session", $.arrayToSlice<zap.Field>([zap.String("sessionID", (sessionInfo$ as SessionInfo).SessionID)]))
}

export async function GetSessionInfo(ctx: __goscript_context.Context | null): globalThis.Promise<SessionInfo | $.VarRef<SessionInfo> | null> {
	let info: SessionInfo | $.VarRef<SessionInfo> | null = await getSessionInfo(ctx)
	if (info == null) {
		await zap.Logger.prototype.Warn.call(await __goscript_workflow.GetLogger(ctx), "Context contains no session information", null)
	}
	return info
}

export async function getSessionInfo(ctx: __goscript_context.Context | null): globalThis.Promise<SessionInfo | $.VarRef<SessionInfo> | null> {
	let info = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<__goscript_context.Context, null>) : $.pointerValue<Exclude<__goscript_context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("sessionInfo", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	if (info == null) {
		return null
	}
	return ((info as any)?.__goType === "*internal.SessionInfo" && (info as any).__goValue === undefined && (info as any).__isTypedNil !== true ? ((info as any) as SessionInfo | $.VarRef<SessionInfo> | null) : $.mustTypeAssert<SessionInfo | $.VarRef<SessionInfo> | null>(info, /* @__PURE__ */ $.pointerType("internal.SessionInfo")))
}

export function setSessionInfo(ctx: __goscript_context.Context | null, sessionInfo: SessionInfo | $.VarRef<SessionInfo> | null): __goscript_context.Context | null {
	return __goscript_context.WithValue(ctx, $.namedValueInterfaceValue<any>("sessionInfo", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey")), $.interfaceValue(sessionInfo, "*internal.SessionInfo", /* @__PURE__ */ $.pointerType("internal.SessionInfo")))
}

export async function createSession(ctx: __goscript_context.Context | null, creationTasklist: string, options: SessionOptions | $.VarRef<SessionOptions> | null, retryable: boolean): globalThis.Promise<[__goscript_context.Context | null, $.GoError]> {
	const options$: SessionOptions = options == null ? $.pointerTarget<SessionOptions>(options) : (options as any).__isVarRef === true ? (options as any).value : (options as any).__goValue === undefined ? (options as any) : $.pointerTarget<SessionOptions>(options)
	let logger: zap.Logger | $.VarRef<zap.Logger> | null = await __goscript_workflow.GetLogger(ctx)
	await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Debug("Start creating session", null) : zap.Logger.prototype.Debug.call(logger, "Start creating session", null))
	{
		let prevSessionInfo: SessionInfo | $.VarRef<SessionInfo> | null = await getSessionInfo(ctx)
		if ((prevSessionInfo != null) && ($.pointerValue<SessionInfo>(prevSessionInfo).sessionState == 0)) {
			return [null, errFoundExistingOpenSession]
		}
	}
	let [sessionID, err] = await generateSessionID(ctx)
	if (err != null) {
		return [null, err]
	}

	let tasklistChan = await __goscript_workflow.GetSignalChannel(ctx, sessionID)
	// Retry is only needed when creating new session and the error returned is NewCustomError(errTooManySessionsMsg)
	let retryPolicy: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null = new __goscript_client.RetryPolicy({InitialInterval: 1000000000n, BackoffCoefficient: 1.1, MaximumInterval: 10000000000n, ExpirationInterval: (options$ as SessionOptions).CreationTimeout, NonRetriableErrorReasons: $.arrayToSlice<string>(["cadenceInternal:Panic", "cadenceInternal:Generic", "cadenceInternal:Timeout START_TO_CLOSE", "cadenceInternal:Timeout HEARTBEAT"])})

	let heartbeatTimeout = 20000000000n
	if ((options$ as SessionOptions).HeartbeatTimeout != 0n) {
		heartbeatTimeout = (options$ as SessionOptions).HeartbeatTimeout
	}
	let ao = new __goscript_activity.ActivityOptions({TaskList: creationTasklist, ScheduleToStartTimeout: (options$ as SessionOptions).CreationTimeout, StartToCloseTimeout: (options$ as SessionOptions).ExecutionTimeout, HeartbeatTimeout: heartbeatTimeout}, true)
	if (retryable) {
		ao.RetryPolicy = retryPolicy
	}

	let sessionInfo: SessionInfo | $.VarRef<SessionInfo> | null = new SessionInfo({SessionID: sessionID, sessionState: 0})
	let sessionInfo$: SessionInfo = sessionInfo == null ? $.pointerTarget<SessionInfo>(sessionInfo) : (sessionInfo as any).__isVarRef === true ? (sessionInfo as any).value : (sessionInfo as any).__goValue === undefined ? (sessionInfo as any) : $.pointerTarget<SessionInfo>(sessionInfo)
	let completionCtx = setSessionInfo(ctx, sessionInfo);
	;(sessionInfo$ as SessionInfo).completionCtx = completionCtx

	// create sessionCtx as a child ctx as the completionCtx for two reasons:
	//   1. completionCtx still needs the session information
	//   2. When completing session, we need to cancel both creation activity and all user activities, but
	//      we can't cancel the completionCtx.
	let [sessionCtx, sessionCancelFunc] = await __goscript_context.WithCancel(completionCtx)
	let creationCtx = await __goscript_workflow.WithActivityOptions(sessionCtx, ao)
	let creationFuture = await __goscript_workflow.ExecuteActivity(creationCtx, "internalSessionCreationActivity", $.arrayToSlice<any>([sessionID]))

	let creationErr: $.GoError = null! as $.GoError
	let creationResponse: $.VarRef<sessionCreationResponse> = $.varRef(new sessionCreationResponse(undefined, true))
	let s = await __goscript_workflow.NewSelector(creationCtx)
	void (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<__goscript_workflow.Selector, null>) : $.pointerValue<Exclude<__goscript_workflow.Selector, null>>(s)).AddReceive(tasklistChan, $.functionValue(async (c: __goscript_workflow.Channel | null, more: boolean): globalThis.Promise<void> => {
		void (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_workflow.Channel, null>) : $.pointerValue<Exclude<__goscript_workflow.Channel, null>>(c)).Receive(creationCtx, $.interfaceValue(creationResponse, "*internal.sessionCreationResponse", /* @__PURE__ */ $.pointerType("internal.sessionCreationResponse"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}, ({ kind: $.TypeKind.Function, params: ["internal.Channel", /* @__PURE__ */ $.basicType("bool")], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	void (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<__goscript_workflow.Selector, null>) : $.pointerValue<Exclude<__goscript_workflow.Selector, null>>(s)).AddFuture(creationFuture, $.functionValue(async (f: __goscript_workflow.Future | null): globalThis.Promise<void> => {
		// activity stoped before signal is received, must be creation timeout.
		creationErr = (__goscriptAwait = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? (f as Exclude<__goscript_workflow.Future, null>) : $.pointerValue<Exclude<__goscript_workflow.Future, null>>(f)).Get(creationCtx, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await zap.Logger.prototype.Debug.call(await __goscript_workflow.GetLogger(creationCtx), "Failed to create session", $.arrayToSlice<zap.Field>([zap.String("sessionID", sessionID), zap.Error(creationErr)]))
	}, ({ kind: $.TypeKind.Function, params: ["internal.Future"], results: [] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	void (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<__goscript_workflow.Selector, null>) : $.pointerValue<Exclude<__goscript_workflow.Selector, null>>(s)).Select(creationCtx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	if (creationErr != null) {
		void (__goscriptAwait = sessionCancelFunc!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return [null, creationErr]
	}

	;(sessionInfo$ as SessionInfo).tasklist = creationResponse.value.Tasklist;
	;(sessionInfo$ as SessionInfo).resourceID = creationResponse.value.ResourceID;
	;(sessionInfo$ as SessionInfo).HostName = creationResponse.value.HostName;
	;(sessionInfo$ as SessionInfo).sessionCancelFunc = sessionCancelFunc

	await __goscript_workflow.Go(creationCtx, $.functionValue(async (creationCtx: __goscript_context.Context | null): globalThis.Promise<void> => {
		let __goscriptShadow0 = (__goscriptAwait = (creationFuture !== null && (creationFuture as any).__isVarRef !== true && (creationFuture as any).__goValue === undefined ? (creationFuture as Exclude<__goscript_workflow.Future, null>) : $.pointerValue<Exclude<__goscript_workflow.Future, null>>(creationFuture)).Get(creationCtx, null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (__goscriptShadow0 == null) {
			return
		}
		{
			let [, ok] = $.typeAssertTuple<__goscript_error.CanceledError | $.VarRef<__goscript_error.CanceledError> | null>(__goscriptShadow0, /* @__PURE__ */ $.pointerType("internal.CanceledError"))
			if (!ok) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>((await __goscript_internal_workflow.getWorkflowEnvironment(creationCtx))).RemoveSession(sessionID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				await zap.Logger.prototype.Debug.call(await __goscript_workflow.GetLogger(creationCtx), "Session failed", $.arrayToSlice<zap.Field>([zap.String("sessionID", sessionID), zap.Error(__goscriptShadow0)]));
				;(sessionInfo$ as SessionInfo).sessionState = 1
				void (__goscriptAwait = sessionCancelFunc!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}, ({ kind: $.TypeKind.Function, params: ["internal.Context"], results: [] } as $.FunctionTypeInfo)))

	await (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? ((logger as any) as zap.Logger).Debug("Created session", $.arrayToSlice<zap.Field>([zap.String("sessionID", sessionID)])) : zap.Logger.prototype.Debug.call(logger, "Created session", $.arrayToSlice<zap.Field>([zap.String("sessionID", sessionID)])))
	void (__goscriptAwait = $.pointerValue<Exclude<__goscript_internal_worker_base.workflowEnvironment, null>>((await __goscript_internal_workflow.getWorkflowEnvironment(ctx))).AddSession(sessionInfo), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return [sessionCtx, null]
}

export async function generateSessionID(ctx: __goscript_context.Context | null): globalThis.Promise<[string, $.GoError]> {
	let sessionID: $.VarRef<string> = $.varRef("")
	let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_encoded.Value, null>>((await __goscript_workflow.SideEffect(ctx, $.functionValue(async (ctx: __goscript_context.Context | null): globalThis.Promise<any> => {
		return await uuid.New()
	}, ({ kind: $.TypeKind.Function, params: ["internal.Context"], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))))).Get($.interfaceValue(sessionID, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string")))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return [sessionID.value, err]
}

export function getCreationTasklist(base: string): string {
	return $.concatString(base, "__internal_session_creation")
}

export function getResourceSpecificTasklist(resourceID: string): string {
	return $.concatString(($.concatString(resourceID, "@")), __goscript_internal_utils.getHostName())
}

export async function sessionCreationActivity(ctx: context.Context | null, sessionID: string): globalThis.Promise<$.GoError> {
	await using __defer = new $.AsyncDisposableStack()
	let [sessionEnv, ok] = $.typeAssertTuple<sessionEnvironment | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("sessionEnvironment", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "internal.sessionEnvironment")
	if (!ok) {
		$.panic("no session environment in context")
	}

	let __goscriptTuple3: any = await (sessionEnv !== null && (sessionEnv as any).__isVarRef !== true && (sessionEnv as any).__goValue === undefined ? (sessionEnv as Exclude<sessionEnvironment, null>) : $.pointerValue<Exclude<sessionEnvironment, null>>(sessionEnv)).CreateSession(ctx, sessionID)
	let doneCh: $.Channel<{}> | null = __goscriptTuple3[0]
	let err = __goscriptTuple3[1]
	if (err != null) {
		return err
	}

	const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.AddSessionToken())((sessionEnv !== null && (sessionEnv as any).__isVarRef !== true && (sessionEnv as any).__goValue === undefined ? (sessionEnv as Exclude<sessionEnvironment, null>) : $.pointerValue<Exclude<sessionEnvironment, null>>(sessionEnv))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "go.uber.org/cadence/internal.sessionEnvironment.AddSessionToken-fm")
	__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee4(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

	{
		let __goscriptShadow1 = (__goscriptAwait = (sessionEnv !== null && (sessionEnv as any).__isVarRef !== true && (sessionEnv as any).__goValue === undefined ? (sessionEnv as Exclude<sessionEnvironment, null>) : $.pointerValue<Exclude<sessionEnvironment, null>>(sessionEnv)).SignalCreationResponse(ctx, sessionID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (__goscriptShadow1 != null) {
			return __goscriptShadow1
		}
	}

	let activityEnv: __goscript_internal_activity.activityEnvironment | $.VarRef<__goscript_internal_activity.activityEnvironment> | null = await __goscript_internal_activity.getActivityEnv(ctx)
	let activityEnv$: __goscript_internal_activity.activityEnvironment = activityEnv == null ? $.pointerTarget<__goscript_internal_activity.activityEnvironment>(activityEnv) : (activityEnv as any).__isVarRef === true ? (activityEnv as any).value : (activityEnv as any).__goValue === undefined ? (activityEnv as any) : $.pointerTarget<__goscript_internal_activity.activityEnvironment>(activityEnv)
	let heartbeatInterval = $.int64Div((activityEnv$ as __goscript_internal_activity.activityEnvironment).heartbeatTimeout, 3n)
	if (heartbeatInterval > 10000000000n) {
		heartbeatInterval = 10000000000n
	}
	let ticker: time.Ticker | $.VarRef<time.Ticker> | null = time.NewTicker(heartbeatInterval)
	__defer.defer(() => { time.Ticker.prototype.Stop.call($.pointerValue<time.Ticker>(ticker)) })

	let heartbeatRetryPolicy: backoff.ExponentialRetryPolicy | $.VarRef<backoff.ExponentialRetryPolicy> | null = backoff.NewExponentialRetryPolicy(1000000000n)
	void (heartbeatRetryPolicy !== null && (heartbeatRetryPolicy as any).__isVarRef !== true && (heartbeatRetryPolicy as any).__goValue === undefined ? ((heartbeatRetryPolicy as any) as backoff.ExponentialRetryPolicy).SetMaximumInterval(2000000000n) : backoff.ExponentialRetryPolicy.prototype.SetMaximumInterval.call(heartbeatRetryPolicy, 2000000000n))
	void (heartbeatRetryPolicy !== null && (heartbeatRetryPolicy as any).__isVarRef !== true && (heartbeatRetryPolicy as any).__goValue === undefined ? ((heartbeatRetryPolicy as any) as backoff.ExponentialRetryPolicy).SetExpirationInterval(heartbeatInterval) : backoff.ExponentialRetryPolicy.prototype.SetExpirationInterval.call(heartbeatRetryPolicy, heartbeatInterval))

	while (true) {
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect0Result) => {
					void (__goscriptAwait = (sessionEnv !== null && (sessionEnv as any).__isVarRef !== true && (sessionEnv as any).__goValue === undefined ? (sessionEnv as Exclude<sessionEnvironment, null>) : $.pointerValue<Exclude<sessionEnvironment, null>>(sessionEnv)).CompleteSession(sessionID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					return (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			},
			{
				id: 1,
				isSend: false,
				channel: $.pointerValue<time.Ticker>(ticker).C,
				onSelected: async (__goscriptSelect0Result) => {
					let heartbeatOp: (() => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (): globalThis.Promise<$.GoError> => {
						// here we skip the internal heartbeat batching, as otherwise the activity has only once chance
						// for heartbeating and if that failed, the entire session will get fail due to heartbeat timeout.
						// since the heartbeat interval is controlled by the session framework, we don't need to worry about
						// calling heartbeat too frequently and causing trouble for the sever. (note the min heartbeat timeout
						// is 1 sec.)
						return $.pointerValue<Exclude<__goscript_activity.ServiceInvoker, null>>((activityEnv$ as __goscript_internal_activity.activityEnvironment).serviceInvoker).Heartbeat(new Uint8Array([]) as $.Slice<number>)
					}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo))
					let isRetryable: ((_p0: $.GoError) => boolean | globalThis.Promise<boolean>) | null = $.functionValue(async (_p0: $.GoError): globalThis.Promise<boolean> => {
						// there will be two types of error here:
						// 1. transient errors like timeout, in which case we should not fail the session
						// 2. non-retryable errors like activity cancelled, activity not found or domain
						// not active. In those cases, the internal implementation will cancel the context,
						// so in the next iteration, ctx.Done() will be selected. Here we rely on the heartbeat
						// internal implementation to tell which error is non-retryable.
						const [__goscriptSelect1HasReturn, __goscriptSelect1Value] = await $.selectStatement<any, boolean>([
							{
								id: 0,
								isSend: false,
								channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
								onSelected: async (__goscriptSelect1Result) => {
									return false
								}
							},
							{
								id: -1,
								isSend: false,
								channel: null,
								onSelected: async (__goscriptSelect1Result) => {
									return true
								}
							}
						], true)
						if (__goscriptSelect1HasReturn) {
							return __goscriptSelect1Value
						}
						throw new globalThis.Error("unreachable select")
					}, ({ kind: $.TypeKind.Function, params: ["error"], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))
					let __goscriptShadow2 = await backoff.Retry(ctx, heartbeatOp, $.interfaceValue<backoff.RetryPolicy | null>(heartbeatRetryPolicy, "*backoff.ExponentialRetryPolicy", /* @__PURE__ */ $.pointerType("backoff.ExponentialRetryPolicy")), isRetryable)
					if (__goscriptShadow2 != null) {
						await zap.Logger.prototype.Info.call(await __goscript_activity.GetActivityLogger(ctx), "session heartbeat failed", $.arrayToSlice<zap.Field>([zap.Error(__goscriptShadow2), zap.String("sessionID", sessionID)]))
					}
				}
			},
			{
				id: 2,
				isSend: false,
				channel: doneCh,
				onSelected: async (__goscriptSelect0Result) => {
					return null
				}
			}
		], false)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function sessionCompletionActivity(ctx: context.Context | null, sessionID: string): globalThis.Promise<$.GoError> {
	let [sessionEnv, ok] = $.typeAssertTuple<sessionEnvironment | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("sessionEnvironment", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "internal.sessionEnvironment")
	if (!ok) {
		$.panic("no session environment in context")
	}
	void (__goscriptAwait = (sessionEnv !== null && (sessionEnv as any).__isVarRef !== true && (sessionEnv as any).__goValue === undefined ? (sessionEnv as Exclude<sessionEnvironment, null>) : $.pointerValue<Exclude<sessionEnvironment, null>>(sessionEnv)).CompleteSession(sessionID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return null
}

export function isSessionCreationActivity(activity: any): boolean {
	let [activityName, ok] = $.typeAssertTuple<string>(activity, /* @__PURE__ */ $.basicType("string"))
	return ok && ($.stringEqual(activityName, "internalSessionCreationActivity"))
}

export async function mustSerializeRecreateToken(params: recreateSessionParams | $.VarRef<recreateSessionParams> | null): globalThis.Promise<$.Slice<number>> {
	let dc = __goscript_encoded.getDefaultDataConverter()
	let __goscriptTuple4: any = await (dc !== null && (dc as any).__isVarRef !== true && (dc as any).__goValue === undefined ? (dc as Exclude<__goscript_encoded.DataConverter, null>) : $.pointerValue<Exclude<__goscript_encoded.DataConverter, null>>(dc)).ToData($.arrayToSlice<any>([$.interfaceValue(params, "*internal.recreateSessionParams", /* @__PURE__ */ $.pointerType("internal.recreateSessionParams"))]))
	let token: $.Slice<number> = __goscriptTuple4[0]
	let err = __goscriptTuple4[1]
	if (err != null) {
		$.panic((err as any))
	}
	return token
}

export async function deserializeRecreateToken(token: $.Slice<number>): globalThis.Promise<[recreateSessionParams | $.VarRef<recreateSessionParams> | null, $.GoError]> {
	let dc = __goscript_encoded.getDefaultDataConverter()
	let recreateParams: $.VarRef<recreateSessionParams> = $.varRef(new recreateSessionParams(undefined, true))
	let err = (__goscriptAwait = (dc !== null && (dc as any).__isVarRef !== true && (dc as any).__goValue === undefined ? (dc as Exclude<__goscript_encoded.DataConverter, null>) : $.pointerValue<Exclude<__goscript_encoded.DataConverter, null>>(dc)).FromData(token, $.arrayToSlice<any>([$.interfaceValue(recreateParams, "*internal.recreateSessionParams", /* @__PURE__ */ $.pointerType("internal.recreateSessionParams"))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return [recreateParams, err]
}

export function newSessionTokenBucket(concurrentSessionExecutionSize: number): sessionTokenBucket | $.VarRef<sessionTokenBucket> | null {
	return (() => { const __goscriptLiteralField1 = sync.NewCond($.pointerValueOrNil($.interfaceValue<sync.Locker | null>(new sync.Mutex(), "*sync.Mutex", /* @__PURE__ */ $.pointerType("sync.Mutex")))!); return new sessionTokenBucket({Cond: __goscriptLiteralField1, availableToken: concurrentSessionExecutionSize}) })()
}

export function newSessionEnvironment(resourceID: string, concurrentSessionExecutionSize: number): sessionEnvironment | null {
	return $.interfaceValue<sessionEnvironment | null>((() => { const __goscriptLiteralField2 = getResourceSpecificTasklist(resourceID); const __goscriptLiteralField3 = newSessionTokenBucket(concurrentSessionExecutionSize); return new sessionEnvironmentImpl({Mutex: new sync.Mutex(), doneChanMap: $.makeMap<string, $.Channel<{}> | null>(), resourceID: resourceID, resourceSpecificTasklist: __goscriptLiteralField2, sessionTokenBucket: __goscriptLiteralField3}) })(), "*internal.sessionEnvironmentImpl", /* @__PURE__ */ $.pointerType("internal.sessionEnvironmentImpl"))
}

export async function sessionCreationActivityForTest(ctx: context.Context | null, sessionID: string): globalThis.Promise<$.GoError> {
	let sessionEnv = $.mustTypeAssert<sessionEnvironment | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("sessionEnvironment", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "internal.sessionEnvironment")

	{
		let [, err] = await (sessionEnv !== null && (sessionEnv as any).__isVarRef !== true && (sessionEnv as any).__goValue === undefined ? (sessionEnv as Exclude<sessionEnvironment, null>) : $.pointerValue<Exclude<sessionEnvironment, null>>(sessionEnv)).CreateSession(ctx, sessionID)
		if (err != null) {
			return err
		}
	}

	return (sessionEnv !== null && (sessionEnv as any).__isVarRef !== true && (sessionEnv as any).__goValue === undefined ? (sessionEnv as Exclude<sessionEnvironment, null>) : $.pointerValue<Exclude<sessionEnvironment, null>>(sessionEnv)).SignalCreationResponse(ctx, sessionID)
}

export async function sessionCompletionActivityForTest(ctx: context.Context | null, sessionID: string): globalThis.Promise<$.GoError> {
	let sessionEnv = $.mustTypeAssert<sessionEnvironment | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("sessionEnvironment", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "internal.sessionEnvironment")

	void (__goscriptAwait = (sessionEnv !== null && (sessionEnv as any).__isVarRef !== true && (sessionEnv as any).__goValue === undefined ? (sessionEnv as Exclude<sessionEnvironment, null>) : $.pointerValue<Exclude<sessionEnvironment, null>>(sessionEnv)).CompleteSession(sessionID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	// Add session token in the completion activity.
	void (__goscriptAwait = (sessionEnv !== null && (sessionEnv as any).__isVarRef !== true && (sessionEnv as any).__goValue === undefined ? (sessionEnv as Exclude<sessionEnvironment, null>) : $.pointerValue<Exclude<sessionEnvironment, null>>(sessionEnv)).AddSessionToken(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return null
}

var __goscriptAwait: any
