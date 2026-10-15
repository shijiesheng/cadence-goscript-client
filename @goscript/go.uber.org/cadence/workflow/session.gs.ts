// Generated file based on session.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as internal from "@goscript/go.uber.org/cadence/internal/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_context from "./context.gs.ts"
import "@goscript/go.uber.org/cadence/internal/index.js"
import "@goscript/time/index.js"
import "./context.gs.ts"

export type SessionInfo = internal.SessionInfo

export type SessionOptions = internal.SessionOptions

export let ErrSessionFailed: $.GoError = internal.ErrSessionFailed

export function __goscript_set_ErrSessionFailed(__goscriptValue: $.GoError): void {
	ErrSessionFailed = __goscriptValue
}

export async function CreateSession(ctx: __goscript_context.Context | null, sessionOptions: internal.SessionOptions | $.VarRef<internal.SessionOptions> | null): globalThis.Promise<[__goscript_context.Context | null, $.GoError]> {
	return internal.CreateSession(ctx, sessionOptions)
}

export async function RecreateSession(ctx: __goscript_context.Context | null, recreateToken: $.Slice<number>, sessionOptions: internal.SessionOptions | $.VarRef<internal.SessionOptions> | null): globalThis.Promise<[__goscript_context.Context | null, $.GoError]> {
	return internal.RecreateSession(ctx, recreateToken, sessionOptions)
}

export async function CompleteSession(ctx: __goscript_context.Context | null): globalThis.Promise<void> {
	await internal.CompleteSession(ctx)
}

export async function GetSessionInfo(ctx: __goscript_context.Context | null): globalThis.Promise<internal.SessionInfo | $.VarRef<internal.SessionInfo> | null> {
	return internal.GetSessionInfo(ctx)
}
