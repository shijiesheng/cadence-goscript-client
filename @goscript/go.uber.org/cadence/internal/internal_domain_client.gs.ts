// Generated file based on internal_domain_client.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as workflowserviceclient from "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"

import * as s from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as metrics from "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"

import type * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript_client from "./client.gs.ts"

import * as __goscript_internal_retry from "./internal_retry.gs.ts"

import * as __goscript_internal_utils from "./internal_utils.gs.ts"
import "@goscript/context/index.js"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/cadence/workflowserviceclient/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/cadence/internal/common/metrics/index.js"
import "@goscript/time/index.js"
import "./internal_retry.gs.ts"
import "./internal_utils.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.domainClient"])

export class domainClient {
	public get workflowService(): workflowserviceclient.Interface | null {
		return this._fields.workflowService
	}

	public set workflowService(value: workflowserviceclient.Interface | null) {
		this._fields.workflowService = value
	}

	public get metricsScope(): tally.Scope | null {
		return this._fields.metricsScope
	}

	public set metricsScope(value: tally.Scope | null) {
		this._fields.metricsScope = value
	}

	public get identity(): string {
		return this._fields.identity
	}

	public set identity(value: string) {
		this._fields.identity = value
	}

	public get featureFlags(): __goscript_internal_utils.FeatureFlags {
		return this._fields.featureFlags
	}

	public set featureFlags(value: __goscript_internal_utils.FeatureFlags) {
		this._fields.featureFlags = value
	}

	public _fields: {
		workflowService: workflowserviceclient.Interface | null
		metricsScope: tally.Scope | null
		identity: string
		featureFlags: __goscript_internal_utils.FeatureFlags
	}

	constructor(init?: Partial<{workflowService?: workflowserviceclient.Interface | null, metricsScope?: tally.Scope | null, identity?: string, featureFlags?: __goscript_internal_utils.FeatureFlags}>, __goscriptValue?: boolean) {
		this._fields = {
			workflowService: init?.workflowService ?? (null! as workflowserviceclient.Interface | null),
			metricsScope: init?.metricsScope ?? (null! as tally.Scope | null),
			identity: init?.identity ?? ("" as string),
			featureFlags: init?.featureFlags ? init.featureFlags.clone() : new __goscript_internal_utils.FeatureFlags(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): domainClient {
		return new domainClient(this, true)
	}

	public __goscriptAssign(source: domainClient): void {
		const target = this._fields
		const values = source._fields
		target.workflowService = $.assignFieldValue(target.workflowService, values.workflowService, "workflowserviceclient.Interface")
		target.metricsScope = $.assignFieldValue(target.metricsScope, values.metricsScope, "tally.Scope")
		target.identity = values.identity
		$.assignStruct(target.featureFlags, values.featureFlags)
	}

	public async Describe(ctx: context.Context | null, name: string): globalThis.Promise<[s.DescribeDomainResponse | $.VarRef<s.DescribeDomainResponse> | null, $.GoError]> {
		const dc: domainClient | $.VarRef<domainClient> | null = this;
		const dc$: domainClient = dc == null ? $.pointerTarget<domainClient>(dc) : (dc as any).__isVarRef === true ? (dc as any).value : (dc as any).__goValue === undefined ? (dc as any) : $.pointerTarget<domainClient>(dc)
		let request: s.DescribeDomainRequest | $.VarRef<s.DescribeDomainRequest> | null = (() => { const __goscriptLiteralField0 = common.StringPtr(name); return new s.DescribeDomainRequest({Name: __goscriptLiteralField0}) })()

		let response: s.DescribeDomainResponse | $.VarRef<s.DescribeDomainResponse> | null = null! as s.DescribeDomainResponse | $.VarRef<s.DescribeDomainResponse> | null
		let err = await __goscript_internal_retry.retryWhileTransientError(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple0: any = await __goscript_internal_utils.newChannelContext(ctx, ((dc$ as domainClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple0[0]
			let cancel = __goscriptTuple0[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple0[2]
			const __goscriptDeferCallee0 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let __goscriptShadow0: $.GoError = null! as $.GoError
			let __goscriptTuple1: any = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((dc$ as domainClient).workflowService).DescribeDomain(tchCtx, request, opt)
			response = __goscriptTuple1[0]
			__goscriptShadow0 = __goscriptTuple1[1]
			return __goscriptShadow0
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
		if (err != null) {
			return [null, err]
		}
		return [response, null]
	}

	public async Failover(ctx: context.Context | null, request: s.FailoverDomainRequest | $.VarRef<s.FailoverDomainRequest> | null): globalThis.Promise<$.GoError> {
		const dc: domainClient | $.VarRef<domainClient> | null = this;
		const dc$: domainClient = dc == null ? $.pointerTarget<domainClient>(dc) : (dc as any).__isVarRef === true ? (dc as any).value : (dc as any).__goValue === undefined ? (dc as any) : $.pointerTarget<domainClient>(dc)
		return __goscript_internal_retry.retryWhileTransientError(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple2: any = await __goscript_internal_utils.newChannelContext(ctx, ((dc$ as domainClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple2[0]
			let cancel = __goscriptTuple2[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple2[2]
			const __goscriptDeferCallee1 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let [, err] = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((dc$ as domainClient).workflowService).FailoverDomain(tchCtx, request, opt)
			return err
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async Register(ctx: context.Context | null, request: s.RegisterDomainRequest | $.VarRef<s.RegisterDomainRequest> | null): globalThis.Promise<$.GoError> {
		const dc: domainClient | $.VarRef<domainClient> | null = this;
		const dc$: domainClient = dc == null ? $.pointerTarget<domainClient>(dc) : (dc as any).__isVarRef === true ? (dc as any).value : (dc as any).__goValue === undefined ? (dc as any) : $.pointerTarget<domainClient>(dc)
		return __goscript_internal_retry.retryWhileTransientError(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple3: any = await __goscript_internal_utils.newChannelContext(ctx, ((dc$ as domainClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple3[0]
			let cancel = __goscriptTuple3[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple3[2]
			const __goscriptDeferCallee2 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee2!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			return (__goscriptAwait = $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((dc$ as domainClient).workflowService).RegisterDomain(tchCtx, request, opt), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	public async Update(ctx: context.Context | null, request: s.UpdateDomainRequest | $.VarRef<s.UpdateDomainRequest> | null): globalThis.Promise<$.GoError> {
		const dc: domainClient | $.VarRef<domainClient> | null = this;
		const dc$: domainClient = dc == null ? $.pointerTarget<domainClient>(dc) : (dc as any).__isVarRef === true ? (dc as any).value : (dc as any).__goValue === undefined ? (dc as any) : $.pointerTarget<domainClient>(dc)
		return __goscript_internal_retry.retryWhileTransientError(ctx, $.functionValue(async (): globalThis.Promise<$.GoError> => {
			await using __defer = new $.AsyncDisposableStack()
			let __goscriptTuple4: any = await __goscript_internal_utils.newChannelContext(ctx, ((dc$ as domainClient).featureFlags).clone(), null)
			let tchCtx = __goscriptTuple4[0]
			let cancel = __goscriptTuple4[1]
			let opt: $.Slice<yarpc.CallOption> = __goscriptTuple4[2]
			const __goscriptDeferCallee3 = cancel
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee3!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			let [, err] = await $.pointerValue<Exclude<workflowserviceclient.Interface, null>>((dc$ as domainClient).workflowService).UpdateDomain(tchCtx, request, opt)
			return err
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
	}

	static __typeInfo = $.registerStructType(
		"internal.domainClient",
		() => new domainClient(),
		() => [$.methodSignature("Describe", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("shared.DescribeDomainResponse"), "error"], true), $.methodSignature("Failover", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.FailoverDomainRequest")]], ["error"], true), $.methodSignature("Register", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.RegisterDomainRequest")]], ["error"], true), $.methodSignature("Update", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("shared.UpdateDomainRequest")]], ["error"], true)],
		domainClient,
		() => [/* @__PURE__ */ $.structField("workflowService", "workflowserviceclient.Interface", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("metricsScope", "tally.Scope", [1], 16, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("identity", /* @__PURE__ */ $.basicType("string"), [2], 32, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("featureFlags", "internal.FeatureFlags", [3], 48, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

var __goscriptAwait: any
