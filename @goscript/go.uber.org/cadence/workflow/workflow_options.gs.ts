// Generated file based on workflow_options.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as encoded from "@goscript/go.uber.org/cadence/encoded/index.js"

import * as internal from "@goscript/go.uber.org/cadence/internal/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_workflow from "./workflow.gs.ts"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/cadence/encoded/index.js"
import "@goscript/go.uber.org/cadence/internal/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "./context.gs.ts"
import "./workflow.gs.ts"

export async function WithChildOptions(ctx: __goscript_context.Context | null, cwo: __goscript_workflow.ChildWorkflowOptions): globalThis.Promise<__goscript_context.Context | null> {
	return internal.WithChildWorkflowOptions(ctx, cwo)
}

export async function WithWorkflowDomain(ctx: __goscript_context.Context | null, name: string): globalThis.Promise<__goscript_context.Context | null> {
	return internal.WithWorkflowDomain(ctx, name)
}

export async function WithWorkflowTaskList(ctx: __goscript_context.Context | null, name: string): globalThis.Promise<__goscript_context.Context | null> {
	return internal.WithWorkflowTaskList(ctx, name)
}

export async function WithCronSchedule(ctx: __goscript_context.Context | null, cronSchedule: string): globalThis.Promise<__goscript_context.Context | null> {
	return internal.WithCronSchedule(ctx, cronSchedule)
}

export async function GetWorkflowTaskList(ctx: __goscript_context.Context | null): globalThis.Promise<string> {
	let tl = await internal.GetWorkflowTaskList(ctx)
	if ((tl != null) && (!$.stringEqual($.pointerValue<string>(tl), ""))) {
		return $.pointerValue<string>(tl)
	}
	return $.pointerValue<__goscript_workflow.Info>(await __goscript_workflow.GetInfo(ctx)).TaskListName
}

export async function WithWorkflowID(ctx: __goscript_context.Context | null, workflowID: string): globalThis.Promise<__goscript_context.Context | null> {
	return internal.WithWorkflowID(ctx, workflowID)
}

export async function WithExecutionStartToCloseTimeout(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<__goscript_context.Context | null> {
	return internal.WithExecutionStartToCloseTimeout(ctx, d)
}

export async function WithWorkflowTaskStartToCloseTimeout(ctx: __goscript_context.Context | null, d: time.Duration): globalThis.Promise<__goscript_context.Context | null> {
	return internal.WithWorkflowTaskStartToCloseTimeout(ctx, d)
}

export async function WithDataConverter(ctx: __goscript_context.Context | null, dc: encoded.DataConverter | null): globalThis.Promise<__goscript_context.Context | null> {
	return internal.WithDataConverter(ctx, dc)
}
