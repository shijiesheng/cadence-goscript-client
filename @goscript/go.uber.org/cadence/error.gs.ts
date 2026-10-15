// Generated file based on error.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as internal from "@goscript/go.uber.org/cadence/internal/index.js"

import * as workflow from "@goscript/go.uber.org/cadence/workflow/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/index.js"
import "@goscript/go.uber.org/cadence/workflow/index.js"

export type CustomError = internal.CustomError

export type CustomErrorOption = ((customError: internal.CustomError | $.VarRef<internal.CustomError> | null) => void) | null

export type CanceledError = internal.CanceledError

export type NonDeterministicError = internal.NonDeterministicError

export let ErrNoData: $.GoError = internal.ErrNoData

export function __goscript_set_ErrNoData(__goscriptValue: $.GoError): void {
	ErrNoData = __goscriptValue
}

export async function NewCustomError(reason: string, details: $.Slice<any>): globalThis.Promise<internal.CustomError | $.VarRef<internal.CustomError> | null> {
	return internal.NewCustomError(reason, details)
}

export function WithFailureCategory(failureCategory: shared.FailureCategory): CustomErrorOption {
	return internal.WithFailureCategory(failureCategory)
}

export function WithNextRetryDelay(delay: time.Duration): CustomErrorOption {
	return internal.WithNextRetryDelay(delay)
}

export function NewCanceledError(details: $.Slice<any>): internal.CanceledError | $.VarRef<internal.CanceledError> | null {
	return internal.NewCanceledError(details)
}

export function IsCustomError(err: $.GoError): boolean {
	let [, ok] = $.typeAssertTuple<internal.CustomError | $.VarRef<internal.CustomError> | null>(err, /* @__PURE__ */ $.pointerType("internal.CustomError"))
	return ok
}

export function IsWorkflowExecutionAlreadyStartedError(err: $.GoError): boolean {
	let [, ok] = $.typeAssertTuple<shared.WorkflowExecutionAlreadyStartedError | $.VarRef<shared.WorkflowExecutionAlreadyStartedError> | null>(err, /* @__PURE__ */ $.pointerType("shared.WorkflowExecutionAlreadyStartedError"))
	return ok
}

export function IsCanceledError(err: $.GoError): boolean {
	let [, ok] = $.typeAssertTuple<internal.CanceledError | $.VarRef<internal.CanceledError> | null>(err, /* @__PURE__ */ $.pointerType("internal.CanceledError"))
	return ok
}

export function IsGenericError(err: $.GoError): boolean {
	let [, ok] = $.typeAssertTuple<internal.GenericError | $.VarRef<internal.GenericError> | null>(err, /* @__PURE__ */ $.pointerType("internal.GenericError"))
	return ok
}

export function IsTimeoutError(err: $.GoError): boolean {
	let [, ok] = $.typeAssertTuple<internal.TimeoutError | $.VarRef<internal.TimeoutError> | null>(err, /* @__PURE__ */ $.pointerType("internal.TimeoutError"))
	return ok
}

export function IsTerminatedError(err: $.GoError): boolean {
	let [, ok] = $.typeAssertTuple<internal.TerminatedError | $.VarRef<internal.TerminatedError> | null>(err, /* @__PURE__ */ $.pointerType("internal.TerminatedError"))
	return ok
}

export function IsPanicError(err: $.GoError): boolean {
	let [, ok] = $.typeAssertTuple<internal.PanicError | $.VarRef<internal.PanicError> | null>(err, /* @__PURE__ */ $.pointerType("internal.PanicError"))
	return ok
}
