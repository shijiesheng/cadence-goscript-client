// Generated file based on noop.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as log from "@goscript/github.com/opentracing/opentracing-go/log/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_propagation from "./propagation.gs.ts"

import * as __goscript_span from "./span.gs.ts"

import * as __goscript_tracer from "./tracer.gs.ts"
import "@goscript/github.com/opentracing/opentracing-go/log/index.js"
import "@goscript/time/index.js"
import "./propagation.gs.ts"
import "./span.gs.ts"
import "./tracer.gs.ts"

$.registerTypePackagePath("github.com/opentracing/opentracing-go", ["opentracing.NoopTracer", "opentracing.noopSpan", "opentracing.noopSpanContext"])

export class NoopTracer {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NoopTracer {
		return new NoopTracer(this, true)
	}

	public __goscriptAssign(source: NoopTracer): void {
	}

	public Extract(format: any, carrier: any): [__goscript_span.SpanContext | null, $.GoError] {
		const n = this;
		return [null, __goscript_propagation.ErrSpanContextNotFound]
	}

	public Inject(sp: __goscript_span.SpanContext | null, format: any, carrier: any): $.GoError {
		const n = this;
		return null
	}

	public StartSpan(operationName: string, opts: $.Slice<__goscript_tracer.StartSpanOption | null>): __goscript_span.Span | null {
		const n = this;
		return defaultNoopSpan
	}

	static __typeInfo = $.registerStructType(
		"opentracing.NoopTracer",
		() => new NoopTracer(),
		() => [$.methodSignature("Extract", [["format", { kind: $.TypeKind.Interface, methods: [] }], ["carrier", { kind: $.TypeKind.Interface, methods: [] }]], ["opentracing.SpanContext", "error"]), $.methodSignature("Inject", [["sp", "opentracing.SpanContext"], ["format", { kind: $.TypeKind.Interface, methods: [] }], ["carrier", { kind: $.TypeKind.Interface, methods: [] }]], ["error"]), $.methodSignature("StartSpan", [["operationName", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.sliceType("opentracing.StartSpanOption")]], ["opentracing.Span"])],
		NoopTracer,
		() => []
	)
}

export class noopSpan {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): noopSpan {
		return new noopSpan(this, true)
	}

	public __goscriptAssign(source: noopSpan): void {
	}

	public BaggageItem(key: string): string {
		const n = this;
		return ""
	}

	public Context(): __goscript_span.SpanContext | null {
		const n = this;
		return defaultNoopSpanContext
	}

	public Finish(): void {
		const n = this;
	}

	public FinishWithOptions(opts: __goscript_span.FinishOptions): void {
		const n = this;
	}

	public Log(data: __goscript_span.LogData): void {
		const n = this;
	}

	public LogEvent(event: string): void {
		const n = this;
	}

	public LogEventWithPayload(event: string, payload: any): void {
		const n = this;
	}

	public LogFields(fields: $.Slice<log.Field>): void {
		const n = this;
	}

	public LogKV(keyVals: $.Slice<any>): void {
		const n = this;
	}

	public SetBaggageItem(key: string, val: string): __goscript_span.Span | null {
		const n = this;
		return $.interfaceValue<__goscript_span.Span | null>((n).clone(), "opentracing.noopSpan", "opentracing.noopSpan")
	}

	public SetOperationName(operationName: string): __goscript_span.Span | null {
		const n = this;
		return $.interfaceValue<__goscript_span.Span | null>((n).clone(), "opentracing.noopSpan", "opentracing.noopSpan")
	}

	public SetTag(key: string, value: any): __goscript_span.Span | null {
		const n = this;
		return $.interfaceValue<__goscript_span.Span | null>((n).clone(), "opentracing.noopSpan", "opentracing.noopSpan")
	}

	public Tracer(): __goscript_tracer.Tracer | null {
		const n = this;
		return defaultNoopTracer
	}

	static __typeInfo = $.registerStructType(
		"opentracing.noopSpan",
		() => new noopSpan(),
		() => [$.methodSignature("BaggageItem", [["key", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Context", [], ["opentracing.SpanContext"]), $.methodSignature("Finish"), $.methodSignature("FinishWithOptions", [["opts", "opentracing.FinishOptions"]]), $.methodSignature("Log", [["data", "opentracing.LogData"]]), $.methodSignature("LogEvent", [["event", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("LogEventWithPayload", [["event", /* @__PURE__ */ $.basicType("string")], ["payload", { kind: $.TypeKind.Interface, methods: [] }]]), $.methodSignature("LogFields", [["fields", /* @__PURE__ */ $.sliceType("log.Field")]]), $.methodSignature("LogKV", [["keyVals", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]]), $.methodSignature("SetBaggageItem", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("string")]], ["opentracing.Span"]), $.methodSignature("SetOperationName", [["operationName", /* @__PURE__ */ $.basicType("string")]], ["opentracing.Span"]), $.methodSignature("SetTag", [["key", /* @__PURE__ */ $.basicType("string")], ["value", { kind: $.TypeKind.Interface, methods: [] }]], ["opentracing.Span"]), $.methodSignature("Tracer", [], ["opentracing.Tracer"])],
		noopSpan,
		() => []
	)
}

export class noopSpanContext {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): noopSpanContext {
		return new noopSpanContext(this, true)
	}

	public __goscriptAssign(source: noopSpanContext): void {
	}

	public ForeachBaggageItem(handler: ((k: string, v: string) => boolean | globalThis.Promise<boolean>) | null): void {
		const n = this;
	}

	static __typeInfo = $.registerStructType(
		"opentracing.noopSpanContext",
		() => new noopSpanContext(),
		() => [$.methodSignature("ForeachBaggageItem", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo)]])],
		noopSpanContext,
		() => []
	)
}

export const emptyString: string = ""

export let defaultNoopSpanContext: __goscript_span.SpanContext | null = $.interfaceValue<__goscript_span.SpanContext | null>(new noopSpanContext(undefined, true), "opentracing.noopSpanContext", "opentracing.noopSpanContext")

export function __goscript_set_defaultNoopSpanContext(__goscriptValue: __goscript_span.SpanContext | null): void {
	defaultNoopSpanContext = __goscriptValue
}

export let defaultNoopSpan: __goscript_span.Span | null = $.interfaceValue<__goscript_span.Span | null>(new noopSpan(undefined, true), "opentracing.noopSpan", "opentracing.noopSpan")

export function __goscript_set_defaultNoopSpan(__goscriptValue: __goscript_span.Span | null): void {
	defaultNoopSpan = __goscriptValue
}

export let defaultNoopTracer: __goscript_tracer.Tracer | null = $.interfaceValue<__goscript_tracer.Tracer | null>(new NoopTracer(undefined, true), "opentracing.NoopTracer", "opentracing.NoopTracer")

export function __goscript_set_defaultNoopTracer(__goscriptValue: __goscript_tracer.Tracer | null): void {
	defaultNoopTracer = __goscriptValue
}
