// Generated file based on internal_retry.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as time from "@goscript/time/index.js"

import * as s from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as backoff from "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"

import * as __goscript_internal_worker_base from "./internal_worker_base.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/common/backoff/index.js"
import "./internal_worker_base.gs.ts"

export const retryServiceOperationInitialInterval: time.Duration = 20000000n

export const retryServiceOperationExpirationInterval: time.Duration = 60000000000n

export const retryServiceOperationBackoff: number = 6/5

export async function createDynamicServiceRetryPolicy(ctx: context.Context | null): globalThis.Promise<backoff.RetryPolicy | null> {
	let timeout = 60000000000n
	if (ctx != null) {
		let now = $.markAsStructValue($.cloneStructValue(time.Now()))
		{
			let [expiration, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
			if (ok && $.markAsStructValue($.cloneStructValue(expiration)).After($.markAsStructValue($.cloneStructValue(now)))) {
				timeout = $.markAsStructValue($.cloneStructValue(expiration)).Sub($.markAsStructValue($.cloneStructValue(now)))
			}
		}
	}
	let initialInterval = 20000000n
	let maximumInterval = $.int64Div(timeout, 10n)
	if (maximumInterval < 20000000n) {
		maximumInterval = 20000000n
	}

	let policy: backoff.ExponentialRetryPolicy | $.VarRef<backoff.ExponentialRetryPolicy> | null = backoff.NewExponentialRetryPolicy(initialInterval)
	void (policy !== null && (policy as any).__isVarRef !== true && (policy as any).__goValue === undefined ? ((policy as any) as backoff.ExponentialRetryPolicy).SetBackoffCoefficient(6/5) : backoff.ExponentialRetryPolicy.prototype.SetBackoffCoefficient.call(policy, 6/5))
	void (policy !== null && (policy as any).__isVarRef !== true && (policy as any).__goValue === undefined ? ((policy as any) as backoff.ExponentialRetryPolicy).SetMaximumInterval(maximumInterval) : backoff.ExponentialRetryPolicy.prototype.SetMaximumInterval.call(policy, maximumInterval))
	void (policy !== null && (policy as any).__isVarRef !== true && (policy as any).__goValue === undefined ? ((policy as any) as backoff.ExponentialRetryPolicy).SetExpirationInterval(timeout) : backoff.ExponentialRetryPolicy.prototype.SetExpirationInterval.call(policy, timeout))
	return $.interfaceValue<backoff.RetryPolicy | null>(policy, "*backoff.ExponentialRetryPolicy", /* @__PURE__ */ $.pointerType("backoff.ExponentialRetryPolicy"))
}

export function isServiceTransientError(err: $.GoError): boolean {
	// check intentionally-not-retried error types via errors.As.
	//
	// sadly we cannot build this into a list of error values / types to range over, as that
	// would turn the variable passed as the &target into e.g. an interface{} or an error,
	// which is compatible with ALL errors, so all are .As(err, &target).
	//
	// so we're left with this mess.  it's not even generics-friendly.
	// at least this pattern lets it be done inline without exposing the variable.
	{
		let target: $.VarRef<s.AccessDeniedError | $.VarRef<s.AccessDeniedError> | null> = $.varRef(null)
		if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(target, "**shared.AccessDeniedError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("shared.AccessDeniedError"))))) {
			return false
		}
	}
	{
		let target: $.VarRef<s.BadRequestError | $.VarRef<s.BadRequestError> | null> = $.varRef(null)
		if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(target, "**shared.BadRequestError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("shared.BadRequestError"))))) {
			return false
		}
	}
	{
		let target: $.VarRef<s.CancellationAlreadyRequestedError | $.VarRef<s.CancellationAlreadyRequestedError> | null> = $.varRef(null)
		if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(target, "**shared.CancellationAlreadyRequestedError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("shared.CancellationAlreadyRequestedError"))))) {
			return false
		}
	}
	{
		let target: $.VarRef<s.ClientVersionNotSupportedError | $.VarRef<s.ClientVersionNotSupportedError> | null> = $.varRef(null)
		if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(target, "**shared.ClientVersionNotSupportedError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("shared.ClientVersionNotSupportedError"))))) {
			return false
		}
	}
	{
		let target: $.VarRef<s.DomainAlreadyExistsError | $.VarRef<s.DomainAlreadyExistsError> | null> = $.varRef(null)
		if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(target, "**shared.DomainAlreadyExistsError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("shared.DomainAlreadyExistsError"))))) {
			return false
		}
	}
	{
		let target: $.VarRef<s.DomainNotActiveError | $.VarRef<s.DomainNotActiveError> | null> = $.varRef(null)
		if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(target, "**shared.DomainNotActiveError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("shared.DomainNotActiveError"))))) {
			return false
		}
	}
	{
		let target: $.VarRef<s.EntityNotExistsError | $.VarRef<s.EntityNotExistsError> | null> = $.varRef(null)
		if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(target, "**shared.EntityNotExistsError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("shared.EntityNotExistsError"))))) {
			return false
		}
	}
	{
		let target: $.VarRef<s.FeatureNotEnabledError | $.VarRef<s.FeatureNotEnabledError> | null> = $.varRef(null)
		if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(target, "**shared.FeatureNotEnabledError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("shared.FeatureNotEnabledError"))))) {
			return false
		}
	}
	{
		let target: $.VarRef<s.LimitExceededError | $.VarRef<s.LimitExceededError> | null> = $.varRef(null)
		if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(target, "**shared.LimitExceededError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("shared.LimitExceededError"))))) {
			return false
		}
	}
	{
		let target: $.VarRef<s.QueryFailedError | $.VarRef<s.QueryFailedError> | null> = $.varRef(null)
		if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(target, "**shared.QueryFailedError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("shared.QueryFailedError"))))) {
			return false
		}
	}
	{
		let target: $.VarRef<s.WorkflowExecutionAlreadyCompletedError | $.VarRef<s.WorkflowExecutionAlreadyCompletedError> | null> = $.varRef(null)
		if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(target, "**shared.WorkflowExecutionAlreadyCompletedError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyCompletedError"))))) {
			return false
		}
	}
	{
		let target: $.VarRef<s.WorkflowExecutionAlreadyStartedError | $.VarRef<s.WorkflowExecutionAlreadyStartedError> | null> = $.varRef(null)
		if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(target, "**shared.WorkflowExecutionAlreadyStartedError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyStartedError"))))) {
			return false
		}
	}

	// shutdowns are not retryable, of course
	if (errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(__goscript_internal_worker_base.errShutdown)!)) {
		return false
	}

	{
		let target: $.VarRef<s.ServiceBusyError | $.VarRef<s.ServiceBusyError> | null> = $.varRef(null)
		if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(target, "**shared.ServiceBusyError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.pointerType("shared.ServiceBusyError"))))) {
			return true
		}
	}

	// s.InternalServiceError
	// s.ServiceBusyError (must retry after a delay, but it is transient)
	// server-side-only error types (as they should not reach clients)
	// and all other `error` types
	return true
}

export async function retryWhileTransientError(ctx: context.Context | null, fn: (() => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
	return backoff.Retry(ctx, fn, await createDynamicServiceRetryPolicy(ctx), isServiceTransientError)
}
