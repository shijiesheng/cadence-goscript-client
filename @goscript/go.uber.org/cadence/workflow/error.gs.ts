// Generated file based on error.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as internal from "@goscript/go.uber.org/cadence/internal/index.js"

import * as __goscript_context from "./context.gs.ts"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/go.uber.org/cadence/internal/index.js"
import "./context.gs.ts"

export type GenericError = internal.GenericError

export type TimeoutError = internal.TimeoutError

export type TerminatedError = internal.TerminatedError

export type PanicError = internal.PanicError

export type ContinueAsNewError = internal.ContinueAsNewError

export type UnknownExternalWorkflowExecutionError = internal.UnknownExternalWorkflowExecutionError

export async function NewContinueAsNewError(ctx: __goscript_context.Context | null, wfn: any, args: $.Slice<any>): globalThis.Promise<internal.ContinueAsNewError | $.VarRef<internal.ContinueAsNewError> | null> {
	return internal.NewContinueAsNewError(ctx, wfn, args)
}

export function NewTimeoutError(timeoutType: shared.TimeoutType, details: $.Slice<any>): internal.TimeoutError | $.VarRef<internal.TimeoutError> | null {
	return internal.NewTimeoutError(timeoutType, details)
}

export function NewHeartbeatTimeoutError(details: $.Slice<any>): internal.TimeoutError | $.VarRef<internal.TimeoutError> | null {
	return internal.NewHeartbeatTimeoutError(details)
}
