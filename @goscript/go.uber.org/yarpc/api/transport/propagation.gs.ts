// Generated file based on propagation.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as time from "@goscript/time/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as ext from "@goscript/github.com/opentracing/opentracing-go/ext/index.js"

import * as opentracinglog from "@goscript/github.com/opentracing/opentracing-go/log/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as io from "@goscript/io/index.js"

import type * as iter from "@goscript/iter/index.js"

import * as __goscript_header from "./header.gs.ts"

import * as __goscript_request from "./request.gs.ts"
import "@goscript/context/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/opentracing/opentracing-go/ext/index.js"
import "@goscript/github.com/opentracing/opentracing-go/log/index.js"
import "@goscript/io/index.js"
import "./header.gs.ts"
import "./request.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/transport", ["transport.CreateOpenTracingSpan", "transport.ExtractOpenTracingSpan"])

export class CreateOpenTracingSpan {
	public get Tracer(): opentracing.Tracer | null {
		return this._fields.Tracer
	}

	public set Tracer(value: opentracing.Tracer | null) {
		this._fields.Tracer = value
	}

	public get TransportName(): string {
		return this._fields.TransportName
	}

	public set TransportName(value: string) {
		this._fields.TransportName = value
	}

	public get StartTime(): time.Time {
		return this._fields.StartTime
	}

	public set StartTime(value: time.Time) {
		this._fields.StartTime = value
	}

	public get ExtraTags(): opentracing.Tags {
		return this._fields.ExtraTags
	}

	public set ExtraTags(value: opentracing.Tags) {
		this._fields.ExtraTags = value
	}

	public _fields: {
		Tracer: opentracing.Tracer | null
		TransportName: string
		StartTime: time.Time
		ExtraTags: opentracing.Tags
	}

	constructor(init?: Partial<{Tracer?: opentracing.Tracer | null, TransportName?: string, StartTime?: time.Time, ExtraTags?: opentracing.Tags}>, __goscriptValue?: boolean) {
		this._fields = {
			Tracer: init?.Tracer ?? (null! as opentracing.Tracer | null),
			TransportName: init?.TransportName ?? ("" as string),
			StartTime: init?.StartTime ? $.markAsStructValue($.cloneStructValue(init.StartTime)) : $.markAsStructValue(new time.Time()),
			ExtraTags: init?.ExtraTags ?? (null! as opentracing.Tags)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CreateOpenTracingSpan {
		return new CreateOpenTracingSpan(this, true)
	}

	public __goscriptAssign(source: CreateOpenTracingSpan): void {
		const target = this._fields
		const values = source._fields
		target.Tracer = $.assignFieldValue(target.Tracer, values.Tracer, "opentracing.Tracer")
		target.TransportName = values.TransportName
		$.assignStruct(target.StartTime, values.StartTime)
		target.ExtraTags = values.ExtraTags
	}

	public async Do(ctx: context.Context | null, req: __goscript_request.Request | $.VarRef<__goscript_request.Request> | null): globalThis.Promise<[context.Context | null, opentracing.Span | null]> {
		const c: CreateOpenTracingSpan | $.VarRef<CreateOpenTracingSpan> | null = this;
		const c$: CreateOpenTracingSpan = c == null ? $.pointerTarget<CreateOpenTracingSpan>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<CreateOpenTracingSpan>(c)
		const req$: __goscript_request.Request = req == null ? $.pointerTarget<__goscript_request.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<__goscript_request.Request>(req)
		let parent: opentracing.SpanContext | null = null! as opentracing.SpanContext | null
		{
			let parentSpan = await opentracing.SpanFromContext(ctx)
			if (parentSpan != null) {
				parent = (__goscriptAwait = (parentSpan !== null && (parentSpan as any).__isVarRef !== true && (parentSpan as any).__goValue === undefined ? (parentSpan as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(parentSpan)).Context(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		let tags: opentracing.Tags = $.makeMap<string, any>([["rpc.caller", (req$ as __goscript_request.Request).Caller], ["rpc.service", (req$ as __goscript_request.Request).Service], ["rpc.encoding", $.namedValueInterfaceValue<any>((req$ as __goscript_request.Request).Encoding, "transport.Encoding", {}, /* @__PURE__ */ $.basicType("string", "transport.Encoding"))], ["rpc.transport", (c$ as CreateOpenTracingSpan).TransportName]])
		for (let [k, v] of (c$ as CreateOpenTracingSpan).ExtraTags?.entries() ?? []) {
			$.mapSet(tags, k, v)
		}
		let span = (__goscriptAwait = $.pointerValue<Exclude<opentracing.Tracer, null>>((c$ as CreateOpenTracingSpan).Tracer).StartSpan((req$ as __goscript_request.Request).Procedure, $.arrayToSlice<opentracing.StartSpanOption | null>([$.interfaceValue<opentracing.StartSpanOption | null>(($.namedStructConversion<opentracing.StartTime>((c$ as CreateOpenTracingSpan).StartTime)).clone(), "opentracing.StartTime", "opentracing.StartTime"), $.interfaceValue<opentracing.StartSpanOption | null>(opentracing.ChildOf(parent), "opentracing.SpanReference", "opentracing.SpanReference"), $.namedValueInterfaceValue<opentracing.StartSpanOption | null>(tags, "opentracing.Tags", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await ext.StringTagName_Set(ext.PeerService, span, (req$ as __goscript_request.Request).Service)
		await $.markAsStructValue($.cloneStructValue($.pointerValue<opentracing.Tag>(ext.SpanKindRPCClient))).Set(span)

		ctx = await opentracing.ContextWithSpan(ctx, span)
		return [ctx, span]
	}

	static __typeInfo = $.registerStructType(
		"transport.CreateOpenTracingSpan",
		() => new CreateOpenTracingSpan(),
		() => [$.methodSignature("Do", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")]], ["context.Context", "opentracing.Span"], true)],
		CreateOpenTracingSpan,
		() => [/* @__PURE__ */ $.structField("Tracer", "opentracing.Tracer", [0], 0, true), /* @__PURE__ */ $.structField("TransportName", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("StartTime", "time.Time", [2], 32, true), /* @__PURE__ */ $.structField("ExtraTags", "opentracing.Tags", [3], 56, true)]
	)
}

export class ExtractOpenTracingSpan {
	public get ParentSpanContext(): opentracing.SpanContext | null {
		return this._fields.ParentSpanContext
	}

	public set ParentSpanContext(value: opentracing.SpanContext | null) {
		this._fields.ParentSpanContext = value
	}

	public get Tracer(): opentracing.Tracer | null {
		return this._fields.Tracer
	}

	public set Tracer(value: opentracing.Tracer | null) {
		this._fields.Tracer = value
	}

	public get TransportName(): string {
		return this._fields.TransportName
	}

	public set TransportName(value: string) {
		this._fields.TransportName = value
	}

	public get StartTime(): time.Time {
		return this._fields.StartTime
	}

	public set StartTime(value: time.Time) {
		this._fields.StartTime = value
	}

	public get ExtraTags(): opentracing.Tags {
		return this._fields.ExtraTags
	}

	public set ExtraTags(value: opentracing.Tags) {
		this._fields.ExtraTags = value
	}

	public _fields: {
		ParentSpanContext: opentracing.SpanContext | null
		Tracer: opentracing.Tracer | null
		TransportName: string
		StartTime: time.Time
		ExtraTags: opentracing.Tags
	}

	constructor(init?: Partial<{ParentSpanContext?: opentracing.SpanContext | null, Tracer?: opentracing.Tracer | null, TransportName?: string, StartTime?: time.Time, ExtraTags?: opentracing.Tags}>, __goscriptValue?: boolean) {
		this._fields = {
			ParentSpanContext: init?.ParentSpanContext ?? (null! as opentracing.SpanContext | null),
			Tracer: init?.Tracer ?? (null! as opentracing.Tracer | null),
			TransportName: init?.TransportName ?? ("" as string),
			StartTime: init?.StartTime ? $.markAsStructValue($.cloneStructValue(init.StartTime)) : $.markAsStructValue(new time.Time()),
			ExtraTags: init?.ExtraTags ?? (null! as opentracing.Tags)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ExtractOpenTracingSpan {
		return new ExtractOpenTracingSpan(this, true)
	}

	public __goscriptAssign(source: ExtractOpenTracingSpan): void {
		const target = this._fields
		const values = source._fields
		target.ParentSpanContext = $.assignFieldValue(target.ParentSpanContext, values.ParentSpanContext, "opentracing.SpanContext")
		target.Tracer = $.assignFieldValue(target.Tracer, values.Tracer, "opentracing.Tracer")
		target.TransportName = values.TransportName
		$.assignStruct(target.StartTime, values.StartTime)
		target.ExtraTags = values.ExtraTags
	}

	public async Do(ctx: context.Context | null, req: __goscript_request.Request | $.VarRef<__goscript_request.Request> | null): globalThis.Promise<[context.Context | null, opentracing.Span | null]> {
		const e: ExtractOpenTracingSpan | $.VarRef<ExtractOpenTracingSpan> | null = this;
		const e$: ExtractOpenTracingSpan = e == null ? $.pointerTarget<ExtractOpenTracingSpan>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<ExtractOpenTracingSpan>(e)
		const req$: __goscript_request.Request = req == null ? $.pointerTarget<__goscript_request.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<__goscript_request.Request>(req)
		let tags: opentracing.Tags = $.makeMap<string, any>([["rpc.caller", (req$ as __goscript_request.Request).Caller], ["rpc.service", (req$ as __goscript_request.Request).Service], ["rpc.encoding", $.namedValueInterfaceValue<any>((req$ as __goscript_request.Request).Encoding, "transport.Encoding", {}, /* @__PURE__ */ $.basicType("string", "transport.Encoding"))], ["rpc.transport", (e$ as ExtractOpenTracingSpan).TransportName]])
		for (let [k, v] of (e$ as ExtractOpenTracingSpan).ExtraTags?.entries() ?? []) {
			$.mapSet(tags, k, v)
		}
		let span = (__goscriptAwait = $.pointerValue<Exclude<opentracing.Tracer, null>>((e$ as ExtractOpenTracingSpan).Tracer).StartSpan((req$ as __goscript_request.Request).Procedure, $.arrayToSlice<opentracing.StartSpanOption | null>([$.interfaceValue<opentracing.StartSpanOption | null>(($.namedStructConversion<opentracing.StartTime>((e$ as ExtractOpenTracingSpan).StartTime)).clone(), "opentracing.StartTime", "opentracing.StartTime"), $.namedValueInterfaceValue<opentracing.StartSpanOption | null>(tags, "opentracing.Tags", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), ext.RPCServerOption((e$ as ExtractOpenTracingSpan).ParentSpanContext)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await ext.StringTagName_Set(ext.PeerService, span, (req$ as __goscript_request.Request).Caller)
		await $.markAsStructValue($.cloneStructValue($.pointerValue<opentracing.Tag>(ext.SpanKindRPCServer))).Set(span)

		ctx = await opentracing.ContextWithSpan(ctx, span)
		return [ctx, span]
	}

	static __typeInfo = $.registerStructType(
		"transport.ExtractOpenTracingSpan",
		() => new ExtractOpenTracingSpan(),
		() => [$.methodSignature("Do", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")]], ["context.Context", "opentracing.Span"], true)],
		ExtractOpenTracingSpan,
		() => [/* @__PURE__ */ $.structField("ParentSpanContext", "opentracing.SpanContext", [0], 0, true), /* @__PURE__ */ $.structField("Tracer", "opentracing.Tracer", [1], 16, true), /* @__PURE__ */ $.structField("TransportName", /* @__PURE__ */ $.basicType("string"), [2], 32, true), /* @__PURE__ */ $.structField("StartTime", "time.Time", [3], 48, true), /* @__PURE__ */ $.structField("ExtraTags", "opentracing.Tags", [4], 72, true)]
	)
}

export async function UpdateSpanWithErr(span: opentracing.Span | null, err: $.GoError): globalThis.Promise<$.GoError> {
	if (err != null) {
		void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetTag("error", true), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).LogFields($.arrayToSlice<opentracinglog.Field>([opentracinglog.String("event", (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return err
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
