// Generated file based on globaltracer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as log from "@goscript/github.com/opentracing/opentracing-go/log/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_noop from "./noop.gs.ts"

import * as __goscript_span from "./span.gs.ts"

import * as __goscript_tracer from "./tracer.gs.ts"
import "@goscript/github.com/opentracing/opentracing-go/log/index.js"
import "@goscript/time/index.js"
import "./noop.gs.ts"
import "./span.gs.ts"
import "./tracer.gs.ts"

$.registerTypePackagePath("github.com/opentracing/opentracing-go", ["opentracing.registeredTracer"])

export class registeredTracer {
	public get tracer(): __goscript_tracer.Tracer | null {
		return this._fields.tracer
	}

	public set tracer(value: __goscript_tracer.Tracer | null) {
		this._fields.tracer = value
	}

	public get isRegistered(): boolean {
		return this._fields.isRegistered
	}

	public set isRegistered(value: boolean) {
		this._fields.isRegistered = value
	}

	public _fields: {
		tracer: __goscript_tracer.Tracer | null
		isRegistered: boolean
	}

	constructor(init?: Partial<{tracer?: __goscript_tracer.Tracer | null, isRegistered?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			tracer: init?.tracer ?? (null! as __goscript_tracer.Tracer | null),
			isRegistered: init?.isRegistered ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): registeredTracer {
		return new registeredTracer(this, true)
	}

	public __goscriptAssign(source: registeredTracer): void {
		const target = this._fields
		const values = source._fields
		target.tracer = $.assignFieldValue(target.tracer, values.tracer, "opentracing.Tracer")
		target.isRegistered = values.isRegistered
	}

	static __typeInfo = $.registerStructType(
		"opentracing.registeredTracer",
		() => new registeredTracer(),
		() => [],
		registeredTracer,
		() => [/* @__PURE__ */ $.structField("tracer", "opentracing.Tracer", [0], 0, false, { pkgPath: "github.com/opentracing/opentracing-go" }), /* @__PURE__ */ $.structField("isRegistered", /* @__PURE__ */ $.basicType("bool"), [1], 16, false, { pkgPath: "github.com/opentracing/opentracing-go" })]
	)
}

export var globalTracer: registeredTracer

export function __goscript_init_globalTracer(): void {
	if (((globalTracer) as any) === undefined) {
		globalTracer = new registeredTracer({tracer: $.interfaceValue<__goscript_tracer.Tracer | null>(new __goscript_noop.NoopTracer(undefined, true), "opentracing.NoopTracer", "opentracing.NoopTracer"), isRegistered: false}, true)
	}
}

export function __goscript_get_globalTracer(): registeredTracer {
	if (((globalTracer) as any) === undefined) {
		__goscript_init_globalTracer()
	}
	return globalTracer
}

export function __goscript_set_globalTracer(__goscriptValue: registeredTracer): void {
	$.assignStruct(globalTracer, __goscriptValue)
}

export function SetGlobalTracer(tracer: __goscript_tracer.Tracer | null): void {
	__goscript_set_globalTracer(new registeredTracer({tracer: tracer, isRegistered: true}, true))
}

export function GlobalTracer(): __goscript_tracer.Tracer | null {
	return __goscript_get_globalTracer().tracer
}

export async function StartSpan(operationName: string, opts: $.Slice<__goscript_tracer.StartSpanOption | null>): globalThis.Promise<__goscript_span.Span | null> {
	return $.pointerValue<Exclude<__goscript_tracer.Tracer, null>>(__goscript_get_globalTracer().tracer).StartSpan(operationName, opts)
}

export function InitGlobalTracer(tracer: __goscript_tracer.Tracer | null): void {
	SetGlobalTracer(tracer)
}

export function IsGlobalTracerRegistered(): boolean {
	return __goscript_get_globalTracer().isRegistered
}

var __goscriptAwait: any
