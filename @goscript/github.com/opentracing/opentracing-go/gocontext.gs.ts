// Generated file based on gocontext.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as log from "@goscript/github.com/opentracing/opentracing-go/log/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_ext from "./ext.gs.ts"

import * as __goscript_globaltracer from "./globaltracer.gs.ts"

import * as __goscript_span from "./span.gs.ts"

import * as __goscript_tracer from "./tracer.gs.ts"
import "@goscript/context/index.js"
import "@goscript/github.com/opentracing/opentracing-go/log/index.js"
import "@goscript/time/index.js"
import "./ext.gs.ts"
import "./globaltracer.gs.ts"
import "./span.gs.ts"
import "./tracer.gs.ts"

$.registerTypePackagePath("github.com/opentracing/opentracing-go", ["opentracing.contextKey"])

export class contextKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): contextKey {
		return new contextKey(this, true)
	}

	public __goscriptAssign(source: contextKey): void {
	}

	static __typeInfo = $.registerStructType(
		"opentracing.contextKey",
		() => new contextKey(),
		() => [],
		contextKey,
		() => []
	)
}

export let activeSpanKey: contextKey = new contextKey(undefined, true)

export function __goscript_set_activeSpanKey(__goscriptValue: contextKey): void {
	$.assignStruct(activeSpanKey, __goscriptValue)
}

export async function ContextWithSpan(ctx: context.Context | null, span: __goscript_span.Span | null): globalThis.Promise<context.Context | null> {
	if (span != null) {
		{
			let [tracerWithHook, ok] = $.typeAssertTuple<__goscript_ext.TracerContextWithSpanExtension | null>((__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<__goscript_span.Span, null>) : $.pointerValue<Exclude<__goscript_span.Span, null>>(span)).Tracer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "opentracing.TracerContextWithSpanExtension")
			if (ok) {
				ctx = (__goscriptAwait = (tracerWithHook !== null && (tracerWithHook as any).__isVarRef !== true && (tracerWithHook as any).__goValue === undefined ? (tracerWithHook as Exclude<__goscript_ext.TracerContextWithSpanExtension, null>) : $.pointerValue<Exclude<__goscript_ext.TracerContextWithSpanExtension, null>>(tracerWithHook)).ContextWithSpanHook(ctx, span), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue((activeSpanKey).clone(), "opentracing.contextKey", "opentracing.contextKey"), (span as any))
}

export async function SpanFromContext(ctx: context.Context | null): globalThis.Promise<__goscript_span.Span | null> {
	let val = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue((activeSpanKey).clone(), "opentracing.contextKey", "opentracing.contextKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	{
		let [sp, ok] = $.typeAssertTuple<__goscript_span.Span | null>(val, "opentracing.Span")
		if (ok) {
			return sp
		}
	}
	return null
}

export async function StartSpanFromContext(ctx: context.Context | null, operationName: string, opts: $.Slice<__goscript_tracer.StartSpanOption | null>): globalThis.Promise<[__goscript_span.Span | null, context.Context | null]> {
	return StartSpanFromContextWithTracer(ctx, __goscript_globaltracer.GlobalTracer(), operationName, opts)
}

export async function StartSpanFromContextWithTracer(ctx: context.Context | null, tracer: __goscript_tracer.Tracer | null, operationName: string, opts: $.Slice<__goscript_tracer.StartSpanOption | null>): globalThis.Promise<[__goscript_span.Span | null, context.Context | null]> {
	{
		let parentSpan = await SpanFromContext(ctx)
		if (parentSpan != null) {
			opts = $.appendOne(opts, $.interfaceValue<__goscript_tracer.StartSpanOption | null>(__goscript_tracer.ChildOf((__goscriptAwait = (parentSpan !== null && (parentSpan as any).__isVarRef !== true && (parentSpan as any).__goValue === undefined ? (parentSpan as Exclude<__goscript_span.Span, null>) : $.pointerValue<Exclude<__goscript_span.Span, null>>(parentSpan)).Context(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), "opentracing.SpanReference", "opentracing.SpanReference"), $.appendZeros.nil)
		}
	}
	let span = (__goscriptAwait = (tracer !== null && (tracer as any).__isVarRef !== true && (tracer as any).__goValue === undefined ? (tracer as Exclude<__goscript_tracer.Tracer, null>) : $.pointerValue<Exclude<__goscript_tracer.Tracer, null>>(tracer)).StartSpan(operationName, opts), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return [span, await ContextWithSpan(ctx, span)]
}

var __goscriptAwait: any
