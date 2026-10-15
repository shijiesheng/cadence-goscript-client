// Generated file based on propagation.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as time from "@goscript/time/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"
import "@goscript/context/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "./context.gs.ts"
import "./internal_activity.gs.ts"

export const spanNameExecuteWorkflow: string = "cadence-ExecuteWorkflow"

export const spanNameExecuteActivity: string = "cadence-ExecuteActivity"

export const spanNameExecuteLocalActivity: string = "cadence-ExecuteLocalActivity"

export const tagCadenceWorkflowType: string = "cadenceWorkflowType"

export const tagCadenceActivityType: string = "cadenceActivityType"

export const tagCadenceWorkflowID: string = "cadenceWorkflowID"

export const tagCadenceRunID: string = "cadenceRunID"

export const tagCadenceIsCron: string = "cadenceIsCron"

export async function createOpenTracingWorkflowSpan(ctx: context.Context | null, tracer: opentracing.Tracer | null, start: time.Time, workflowType: string, workflowID: string, isCron: boolean): globalThis.Promise<[context.Context | null, opentracing.Span | null]> {
	let tags: opentracing.Tags = $.makeMap<string, any>([["cadenceWorkflowID", workflowID], ["cadenceIsCron", isCron]])
	let parent: opentracing.SpanContext | null = null! as opentracing.SpanContext | null
	{
		let parentSpan = await opentracing.SpanFromContext(ctx)
		if (parentSpan != null) {
			parent = (__goscriptAwait = (parentSpan !== null && (parentSpan as any).__isVarRef !== true && (parentSpan as any).__goValue === undefined ? (parentSpan as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(parentSpan)).Context(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			{
				let [spanCtx, ok] = $.typeAssertTuple<opentracing.SpanContext | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("activeSpanContextKey", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "opentracing.SpanContext")
				if (ok) {
					parent = spanCtx
				}
			}
		}
	}
	return startOpenTracingSpan(ctx, tracer, start, workflowType, tags, parent)
}

export async function createOpenTracingSpanFromHeaders(ctx: context.Context | null, tracer: opentracing.Tracer | null, start: time.Time, name: string, tags: opentracing.Tags): globalThis.Promise<[context.Context | null, opentracing.Span | null]> {
	let parent: opentracing.SpanContext | null = null! as opentracing.SpanContext | null
	{
		let [spanCtx, ok] = $.typeAssertTuple<opentracing.SpanContext | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.namedValueInterfaceValue<any>("activeSpanContextKey", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "opentracing.SpanContext")
		if (ok) {
			parent = spanCtx
		}
	}
	return startOpenTracingSpan(ctx, tracer, start, name, tags, parent)
}

export async function startOpenTracingSpan(ctx: context.Context | null, tracer: opentracing.Tracer | null, start: time.Time, name: string, tags: opentracing.Tags, parent: opentracing.SpanContext | null): globalThis.Promise<[context.Context | null, opentracing.Span | null]> {
	let opts: $.Slice<opentracing.StartSpanOption | null> = $.arrayToSlice<opentracing.StartSpanOption | null>([$.interfaceValue<opentracing.StartSpanOption | null>(($.namedStructConversion<opentracing.StartTime>(start)).clone(), "opentracing.StartTime", "opentracing.StartTime"), $.namedValueInterfaceValue<opentracing.StartSpanOption | null>(tags, "opentracing.Tags", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())])
	if (parent != null) {
		opts = $.appendOne(opts, $.interfaceValue<opentracing.StartSpanOption | null>(opentracing.FollowsFrom(parent), "opentracing.SpanReference", "opentracing.SpanReference"), $.appendZeros.nil)
	}

	let span = (__goscriptAwait = (tracer !== null && (tracer as any).__isVarRef !== true && (tracer as any).__goValue === undefined ? (tracer as Exclude<opentracing.Tracer, null>) : $.pointerValue<Exclude<opentracing.Tracer, null>>(tracer)).StartSpan(name, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	{
		let [, ok] = $.typeAssertTuple<opentracing.NoopTracer>(tracer, "opentracing.NoopTracer")
		if (!ok) {
			ctx = await opentracing.ContextWithSpan(ctx, span)
		}
	}
	return [ctx, span]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Apply: (receiver: any, ...args: any[]) => (opentracing.Tags_Apply as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ("opentracing.Tags")
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Apply", [["o", /* @__PURE__ */ $.pointerType("opentracing.StartSpanOptions")]])])
}

var __goscriptAwait: any
