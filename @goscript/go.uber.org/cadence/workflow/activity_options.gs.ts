// Generated file based on activity_options.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as internal from "@goscript/go.uber.org/cadence/internal/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/cadence/internal/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "./context.gs.ts"
import "./workflow.gs.ts"

export type ActivityOptions = internal.ActivityOptions

export type LocalActivityOptions = internal.LocalActivityOptions

export type RetryPolicy = internal.RetryPolicy

export async function WithActivityOptions(ctx: __goscript_context.Context | null, options: ActivityOptions): globalThis.Promise<__goscript_context.Context | null> {
	return internal.WithActivityOptions(ctx, options)
}

export async function WithLocalActivityOptions(ctx: __goscript_context.Context | null, options: LocalActivityOptions): globalThis.Promise<__goscript_context.Context | null> {
	return internal.WithLocalActivityOptions(ctx, options)
}

export async function WithTaskList(ctx: __goscript_context.Context | null, name: string): globalThis.Promise<__goscript_context.Context | null> {
	return internal.WithTaskList(ctx, name)
}

export async function GetActivityTaskList(ctx: __goscript_context.Context | null): globalThis.Promise<string> {
	let tl = await internal.GetActivityTaskList(ctx)
	if ((tl != null) && (!$.stringEqual($.pointerValue<string>(tl), ""))) {
		return $.pointerValue<string>(tl)
	}
	return $.pointerValue<__goscript_workflow.Info>(await __goscript_workflow.GetInfo(ctx)).TaskListName
}

export async function GetActivityOptions(ctx: __goscript_context.Context | null): globalThis.Promise<internal.ActivityOptions | $.VarRef<internal.ActivityOptions> | null> {
	return internal.GetActivityOptions(ctx)
}

export async function WithScheduleToCloseTimeout(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<__goscript_context.Context | null> {
	return internal.WithScheduleToCloseTimeout(ctx, d)
}

export async function WithScheduleToStartTimeout(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<__goscript_context.Context | null> {
	return internal.WithScheduleToStartTimeout(ctx, d)
}

export async function WithStartToCloseTimeout(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<__goscript_context.Context | null> {
	return internal.WithStartToCloseTimeout(ctx, d)
}

export async function WithHeartbeatTimeout(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<__goscript_context.Context | null> {
	return internal.WithHeartbeatTimeout(ctx, d)
}

export async function WithWaitForCancellation(ctx: __goscript_context.Context | null, wait: boolean): globalThis.Promise<__goscript_context.Context | null> {
	return internal.WithWaitForCancellation(ctx, wait)
}

export async function WithRetryPolicy(ctx: __goscript_context.Context | null, retryPolicy: RetryPolicy): globalThis.Promise<__goscript_context.Context | null> {
	return internal.WithRetryPolicy(ctx, (retryPolicy).clone())
}
