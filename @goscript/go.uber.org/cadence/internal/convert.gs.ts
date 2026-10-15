// Generated file based on convert.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as s from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as common from "@goscript/go.uber.org/cadence/internal/common/index.js"

import * as backoff from "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"

import * as __goscript_client from "./client.gs.ts"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/index.js"
import "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"
import "./client.gs.ts"

export function convertRetryPolicy(retryPolicy: __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null): s.RetryPolicy | $.VarRef<s.RetryPolicy> | null {
	const retryPolicy$: __goscript_client.RetryPolicy = retryPolicy == null ? $.pointerTarget<__goscript_client.RetryPolicy>(retryPolicy) : (retryPolicy as any).__isVarRef === true ? (retryPolicy as any).value : (retryPolicy as any).__goValue === undefined ? (retryPolicy as any) : $.pointerTarget<__goscript_client.RetryPolicy>(retryPolicy)
	if (retryPolicy == null) {
		return null
	}
	let thriftRetryPolicy = $.varRef((() => { const __goscriptLiteralField0 = common.Int32Ptr(common.Int32Ceil(time.Duration_Seconds((retryPolicy$ as __goscript_client.RetryPolicy).InitialInterval))); const __goscriptLiteralField1 = common.Int32Ptr(common.Int32Ceil(time.Duration_Seconds((retryPolicy$ as __goscript_client.RetryPolicy).MaximumInterval))); const __goscriptLiteralField2 = common.Int32Ptr(common.Int32Ceil(time.Duration_Seconds((retryPolicy$ as __goscript_client.RetryPolicy).ExpirationInterval))); return new s.RetryPolicy({InitialIntervalInSeconds: __goscriptLiteralField0, MaximumIntervalInSeconds: __goscriptLiteralField1, BackoffCoefficient: $.fieldRef((retryPolicy$ as __goscript_client.RetryPolicy)._fields, "BackoffCoefficient"), MaximumAttempts: $.fieldRef((retryPolicy$ as __goscript_client.RetryPolicy)._fields, "MaximumAttempts"), NonRetriableErrorReasons: (retryPolicy$ as __goscript_client.RetryPolicy).NonRetriableErrorReasons, ExpirationIntervalInSeconds: __goscriptLiteralField2}, true) })())
	if ($.pointerValue<number>(thriftRetryPolicy.value.BackoffCoefficient) == 0) {
		thriftRetryPolicy.value.BackoffCoefficient = common.Float64Ptr(backoff.DefaultBackoffCoefficient)
	}
	return thriftRetryPolicy
}

export function convertFromThriftRetryPolicy(p: s.RetryPolicy | $.VarRef<s.RetryPolicy> | null): __goscript_client.RetryPolicy | $.VarRef<__goscript_client.RetryPolicy> | null {
	if (p == null) {
		return null
	}
	return (() => { const __goscriptLiteralField3 = $.int64Mul(1000000000n, $.int64((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as s.RetryPolicy).GetInitialIntervalInSeconds() : s.RetryPolicy.prototype.GetInitialIntervalInSeconds.call(p)))); const __goscriptLiteralField4 = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as s.RetryPolicy).GetBackoffCoefficient() : s.RetryPolicy.prototype.GetBackoffCoefficient.call(p)); const __goscriptLiteralField5 = $.int64Mul(1000000000n, $.int64((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as s.RetryPolicy).GetMaximumIntervalInSeconds() : s.RetryPolicy.prototype.GetMaximumIntervalInSeconds.call(p)))); const __goscriptLiteralField6 = $.int64Mul(1000000000n, $.int64((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as s.RetryPolicy).GetExpirationIntervalInSeconds() : s.RetryPolicy.prototype.GetExpirationIntervalInSeconds.call(p)))); const __goscriptLiteralField7 = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as s.RetryPolicy).GetMaximumAttempts() : s.RetryPolicy.prototype.GetMaximumAttempts.call(p)); return new __goscript_client.RetryPolicy({InitialInterval: __goscriptLiteralField3, BackoffCoefficient: __goscriptLiteralField4, MaximumInterval: __goscriptLiteralField5, ExpirationInterval: __goscriptLiteralField6, MaximumAttempts: __goscriptLiteralField7, NonRetriableErrorReasons: $.pointerValue<s.RetryPolicy>(p).NonRetriableErrorReasons}) })()
}

export function convertActiveClusterSelectionPolicy(policy: __goscript_client.ActiveClusterSelectionPolicy | $.VarRef<__goscript_client.ActiveClusterSelectionPolicy> | null): [s.ActiveClusterSelectionPolicy | $.VarRef<s.ActiveClusterSelectionPolicy> | null, $.GoError] {
	if (policy == null) {
		return [null, null]
	}
	return [(() => { const __goscriptLiteralField8 = convertClusterAttribute($.pointerValue<__goscript_client.ActiveClusterSelectionPolicy>(policy).ClusterAttribute); return new s.ActiveClusterSelectionPolicy({ClusterAttribute: __goscriptLiteralField8}) })(), null]
}

export function convertClusterAttribute(attr: __goscript_client.ClusterAttribute | $.VarRef<__goscript_client.ClusterAttribute> | null): s.ClusterAttribute | $.VarRef<s.ClusterAttribute> | null {
	const attr$: __goscript_client.ClusterAttribute = attr == null ? $.pointerTarget<__goscript_client.ClusterAttribute>(attr) : (attr as any).__isVarRef === true ? (attr as any).value : (attr as any).__goValue === undefined ? (attr as any) : $.pointerTarget<__goscript_client.ClusterAttribute>(attr)
	if (attr == null) {
		return null
	}
	return new s.ClusterAttribute({Scope: $.fieldRef((attr$ as __goscript_client.ClusterAttribute)._fields, "Scope"), Name: $.fieldRef((attr$ as __goscript_client.ClusterAttribute)._fields, "Name")})
}

export function convertQueryConsistencyLevel(level: __goscript_client.QueryConsistencyLevel): $.VarRef<s.QueryConsistencyLevel> | null {
	switch (level) {
		case 1:
		{
			return s.QueryConsistencyLevel_Ptr(s.QueryConsistencyLevelEventual)
			break
		}
		case 2:
		{
			return s.QueryConsistencyLevel_Ptr(s.QueryConsistencyLevelStrong)
			break
		}
		default:
		{
			return null
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}
