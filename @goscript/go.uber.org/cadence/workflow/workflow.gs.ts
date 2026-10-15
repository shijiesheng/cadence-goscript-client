// Generated file based on workflow.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as tally from "@goscript/github.com/uber-go/tally/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as encoded from "@goscript/go.uber.org/cadence/encoded/index.js"

import * as internal from "@goscript/go.uber.org/cadence/internal/index.js"

import * as shared from "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_context from "./context.gs.ts"

import type * as __goscript_deterministic_wrappers from "./deterministic_wrappers.gs.ts"
import "@goscript/github.com/uber-go/tally/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/cadence/encoded/index.js"
import "@goscript/go.uber.org/cadence/internal/index.js"
import "@goscript/go.uber.org/cadence/.gen/go/shared/index.js"
import "@goscript/time/index.js"
import "./context.gs.ts"

export type ChildWorkflowFuture = internal.ChildWorkflowFuture | null

export type Type = internal.WorkflowType

export type Execution = internal.WorkflowExecution

export type ExecutionAsync = internal.WorkflowExecutionAsync

export type Version = internal.Version

export type ChildWorkflowOptions = internal.ChildWorkflowOptions

export type Bugports = internal.Bugports

export type RegisterOptions = internal.RegisterWorkflowOptions

export type Info = internal.WorkflowInfo

export type RegistryInfo = internal.RegistryWorkflowInfo | null

export type GetVersionOption = internal.GetVersionOption | null

export const DefaultVersion: Version = -1

export async function Register(workflowFunc: any): globalThis.Promise<void> {
	await internal.RegisterWorkflow(workflowFunc)
}

export async function RegisterWithOptions(workflowFunc: any, opts: RegisterOptions): globalThis.Promise<void> {
	await internal.RegisterWorkflowWithOptions(workflowFunc, opts)
}

export async function GetRegisteredWorkflowTypes(): globalThis.Promise<$.Slice<string>> {
	return internal.GetRegisteredWorkflowTypes()
}

export async function ExecuteActivity(ctx: __goscript_context.Context | null, activity: any, args: $.Slice<any>): globalThis.Promise<__goscript_deterministic_wrappers.Future | null> {
	return internal.ExecuteActivity(ctx, activity, args)
}

export async function ExecuteLocalActivity(ctx: __goscript_context.Context | null, activity: any, args: $.Slice<any>): globalThis.Promise<__goscript_deterministic_wrappers.Future | null> {
	return internal.ExecuteLocalActivity(ctx, activity, args)
}

export async function ExecuteChildWorkflow(ctx: __goscript_context.Context | null, childWorkflow: any, args: $.Slice<any>): globalThis.Promise<ChildWorkflowFuture | null> {
	return internal.ExecuteChildWorkflow(ctx, childWorkflow, args)
}

export async function GetInfo(ctx: __goscript_context.Context | null): globalThis.Promise<internal.WorkflowInfo | $.VarRef<internal.WorkflowInfo> | null> {
	return internal.GetWorkflowInfo(ctx)
}

export async function GetLogger(ctx: __goscript_context.Context | null): globalThis.Promise<zap.Logger | $.VarRef<zap.Logger> | null> {
	return internal.GetLogger(ctx)
}

export async function GetUnhandledSignalNames(ctx: __goscript_context.Context | null): globalThis.Promise<$.Slice<string>> {
	return internal.GetUnhandledSignalNames(ctx)
}

export async function GetMetricsScope(ctx: __goscript_context.Context | null): globalThis.Promise<tally.Scope | null> {
	return internal.GetMetricsScope(ctx)
}

export async function GetTotalHistoryBytes(ctx: __goscript_context.Context | null): globalThis.Promise<bigint> {
	return internal.GetTotalEstimatedHistoryBytes(ctx)
}

export async function GetHistoryCount(ctx: __goscript_context.Context | null): globalThis.Promise<bigint> {
	return internal.GetHistoryCount(ctx)
}

export async function RequestCancelExternalWorkflow(ctx: __goscript_context.Context | null, workflowID: string, runID: string): globalThis.Promise<__goscript_deterministic_wrappers.Future | null> {
	return internal.RequestCancelExternalWorkflow(ctx, workflowID, runID)
}

export async function SignalExternalWorkflow(ctx: __goscript_context.Context | null, workflowID: string, runID: string, signalName: string, arg: any): globalThis.Promise<__goscript_deterministic_wrappers.Future | null> {
	return internal.SignalExternalWorkflow(ctx, workflowID, runID, signalName, arg)
}

export async function GetSignalChannel(ctx: __goscript_context.Context | null, signalName: string): globalThis.Promise<__goscript_deterministic_wrappers.Channel | null> {
	return internal.GetSignalChannel(ctx, signalName)
}

export async function SideEffect(ctx: __goscript_context.Context | null, f: ((ctx: __goscript_context.Context | null) => any | globalThis.Promise<any>) | null): globalThis.Promise<encoded.Value | null> {
	return internal.SideEffect(ctx, f)
}

export async function MutableSideEffect(ctx: __goscript_context.Context | null, id: string, f: ((ctx: __goscript_context.Context | null) => any | globalThis.Promise<any>) | null, equals: ((a: any, b: any) => boolean | globalThis.Promise<boolean>) | null): globalThis.Promise<encoded.Value | null> {
	return internal.MutableSideEffect(ctx, id, f, equals)
}

export function ExecuteWithVersion(version: Version): GetVersionOption | null {
	return internal.ExecuteWithVersion(version)
}

export function ExecuteWithMinVersion(): GetVersionOption | null {
	return internal.ExecuteWithMinVersion()
}

export async function GetVersion(ctx: __goscript_context.Context | null, changeID: string, minSupported: Version, maxSupported: Version, opts: $.Slice<GetVersionOption | null>): globalThis.Promise<Version> {
	return internal.GetVersion(ctx, changeID, minSupported, maxSupported, opts)
}

export async function SetQueryHandler(ctx: __goscript_context.Context | null, queryType: string, handler: any): globalThis.Promise<$.GoError> {
	return internal.SetQueryHandler(ctx, queryType, handler)
}

export async function IsReplaying(ctx: __goscript_context.Context | null): globalThis.Promise<boolean> {
	return internal.IsReplaying(ctx)
}

export async function HasLastCompletionResult(ctx: __goscript_context.Context | null): globalThis.Promise<boolean> {
	return internal.HasLastCompletionResult(ctx)
}

export async function GetLastCompletionResult(ctx: __goscript_context.Context | null, d: $.Slice<any>): globalThis.Promise<$.GoError> {
	return internal.GetLastCompletionResult(ctx, d)
}

export async function UpsertSearchAttributes(ctx: __goscript_context.Context | null, attributes: globalThis.Map<string, any> | null): globalThis.Promise<$.GoError> {
	return internal.UpsertSearchAttributes(ctx, attributes)
}
