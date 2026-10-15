// Generated file based on tracer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import type * as time from "@goscript/time/index.js"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_headers from "./headers.gs.ts"

import * as __goscript_internal_activity from "./internal_activity.gs.ts"

import type * as __goscript_workflow from "./workflow.gs.ts"
import "@goscript/context/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "./context.gs.ts"
import "./headers.gs.ts"
import "./internal_activity.gs.ts"

$.registerTypePackagePath("go.uber.org/cadence/internal", ["internal.tracingReader", "internal.tracingWriter", "internal.tracingContextPropagator"])

export class tracingReader {
	public get reader(): __goscript_headers.HeaderReader | null {
		return this._fields.reader
	}

	public set reader(value: __goscript_headers.HeaderReader | null) {
		this._fields.reader = value
	}

	public _fields: {
		reader: __goscript_headers.HeaderReader | null
	}

	constructor(init?: Partial<{reader?: __goscript_headers.HeaderReader | null}>, __goscriptValue?: boolean) {
		this._fields = {
			reader: init?.reader ?? (null! as __goscript_headers.HeaderReader | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tracingReader {
		return new tracingReader(this, true)
	}

	public __goscriptAssign(source: tracingReader): void {
		const target = this._fields
		const values = source._fields
		target.reader = $.assignFieldValue(target.reader, values.reader, "internal.HeaderReader")
	}

	public async ForeachKey(handler: ((key: string, val: string) => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
		const t = this;
		return $.pointerValue<Exclude<__goscript_headers.HeaderReader, null>>(t.reader).ForEachKey($.functionValue(async (k: string, v: $.Slice<number>): globalThis.Promise<$.GoError> => {
			return handler!(k, $.bytesToString(v))
		}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], results: ["error"] } as $.FunctionTypeInfo)))
	}

	static __typeInfo = $.registerStructType(
		"internal.tracingReader",
		() => new tracingReader(),
		() => [$.methodSignature("ForeachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"])],
		tracingReader,
		() => [/* @__PURE__ */ $.structField("reader", "internal.HeaderReader", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class tracingWriter {
	public get writer(): __goscript_headers.HeaderWriter | null {
		return this._fields.writer
	}

	public set writer(value: __goscript_headers.HeaderWriter | null) {
		this._fields.writer = value
	}

	public _fields: {
		writer: __goscript_headers.HeaderWriter | null
	}

	constructor(init?: Partial<{writer?: __goscript_headers.HeaderWriter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			writer: init?.writer ?? (null! as __goscript_headers.HeaderWriter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tracingWriter {
		return new tracingWriter(this, true)
	}

	public __goscriptAssign(source: tracingWriter): void {
		const target = this._fields
		const values = source._fields
		target.writer = $.assignFieldValue(target.writer, values.writer, "internal.HeaderWriter")
	}

	public async Set(key: string, val: string): globalThis.Promise<void> {
		const t = this;
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_headers.HeaderWriter, null>>(t.writer).Set(key, $.stringToBytes(val)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"internal.tracingWriter",
		() => new tracingWriter(),
		() => [$.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("string")]])],
		tracingWriter,
		() => [/* @__PURE__ */ $.structField("writer", "internal.HeaderWriter", [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export class tracingContextPropagator {
	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public get tracer(): opentracing.Tracer | null {
		return this._fields.tracer
	}

	public set tracer(value: opentracing.Tracer | null) {
		this._fields.tracer = value
	}

	public _fields: {
		logger: zap.Logger | $.VarRef<zap.Logger> | null
		tracer: opentracing.Tracer | null
	}

	constructor(init?: Partial<{logger?: zap.Logger | $.VarRef<zap.Logger> | null, tracer?: opentracing.Tracer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			tracer: init?.tracer ?? (null! as opentracing.Tracer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tracingContextPropagator {
		return new tracingContextPropagator(this, true)
	}

	public __goscriptAssign(source: tracingContextPropagator): void {
		const target = this._fields
		const values = source._fields
		target.logger = values.logger
		target.tracer = $.assignFieldValue(target.tracer, values.tracer, "opentracing.Tracer")
	}

	public async Extract(ctx: context.Context | null, hr: __goscript_headers.HeaderReader | null): globalThis.Promise<[context.Context | null, $.GoError]> {
		const t: tracingContextPropagator | $.VarRef<tracingContextPropagator> | null = this;
		let [spanContext, err] = await $.pointerValue<Exclude<opentracing.Tracer, null>>($.pointerValue<tracingContextPropagator>(t).tracer).Extract($.namedValueInterfaceValue<any>(opentracing.TextMap, "opentracing.BuiltinFormat", {}, /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat")), $.interfaceValue(new tracingReader({reader: hr}, true), "internal.tracingReader", "internal.tracingReader"))
		if (err != null) {
			// did not find a tracing span, just return the current context
			return [ctx, null]
		}
		return [context.WithValue($.pointerValueOrNil(ctx)!, $.namedValueInterfaceValue<any>("activeSpanContextKey", "internal.contextKey", {}, /* @__PURE__ */ $.basicType("string", "internal.contextKey")), (spanContext as any)), null]
	}

	public async ExtractToWorkflow(ctx: __goscript_context.Context | null, hr: __goscript_headers.HeaderReader | null): globalThis.Promise<[__goscript_context.Context | null, $.GoError]> {
		const t: tracingContextPropagator | $.VarRef<tracingContextPropagator> | null = this;
		let [spanContext, err] = await $.pointerValue<Exclude<opentracing.Tracer, null>>($.pointerValue<tracingContextPropagator>(t).tracer).Extract($.namedValueInterfaceValue<any>(opentracing.TextMap, "opentracing.BuiltinFormat", {}, /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat")), $.interfaceValue(new tracingReader({reader: hr}, true), "internal.tracingReader", "internal.tracingReader"))
		if (err != null) {
			// did not find a tracing span, just return the current context
			return [ctx, null]
		}
		return [__goscript_context.WithSpanContext(ctx, spanContext), null]
	}

	public async Inject(ctx: context.Context | null, hw: __goscript_headers.HeaderWriter | null): globalThis.Promise<$.GoError> {
		const t: tracingContextPropagator | $.VarRef<tracingContextPropagator> | null = this;
		// retrieve span from context object
		let span = await opentracing.SpanFromContext(ctx)
		if (span == null) {
			return null
		}
		return (__goscriptAwait = $.pointerValue<Exclude<opentracing.Tracer, null>>($.pointerValue<tracingContextPropagator>(t).tracer).Inject((__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).Context(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.namedValueInterfaceValue<any>(opentracing.TextMap, "opentracing.BuiltinFormat", {}, /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat")), $.interfaceValue(new tracingWriter({writer: hw}, true), "internal.tracingWriter", "internal.tracingWriter")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async InjectFromWorkflow(ctx: __goscript_context.Context | null, hw: __goscript_headers.HeaderWriter | null): globalThis.Promise<$.GoError> {
		const t: tracingContextPropagator | $.VarRef<tracingContextPropagator> | null = this;
		// retrieve span from context object
		let spanContext = await __goscript_context.GetSpanContext(ctx)
		if (spanContext == null) {
			return null
		}
		return $.pointerValue<Exclude<opentracing.Tracer, null>>($.pointerValue<tracingContextPropagator>(t).tracer).Inject(spanContext, $.namedValueInterfaceValue<any>(opentracing.TextMap, "opentracing.BuiltinFormat", {}, /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat")), $.interfaceValue(new tracingWriter({writer: hw}, true), "internal.tracingWriter", "internal.tracingWriter"))
	}

	static __typeInfo = $.registerStructType(
		"internal.tracingContextPropagator",
		() => new tracingContextPropagator(),
		() => [$.methodSignature("Extract", [["ctx", "context.Context"], ["hr", "internal.HeaderReader"]], ["context.Context", "error"], true), $.methodSignature("ExtractToWorkflow", [["ctx", "internal.Context"], ["hr", "internal.HeaderReader"]], ["internal.Context", "error"], true), $.methodSignature("Inject", [["ctx", "context.Context"], ["hw", "internal.HeaderWriter"]], ["error"], true), $.methodSignature("InjectFromWorkflow", [["ctx", "internal.Context"], ["hw", "internal.HeaderWriter"]], ["error"], true)],
		tracingContextPropagator,
		() => [/* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [0], 0, false, { pkgPath: "go.uber.org/cadence/internal" }), /* @__PURE__ */ $.structField("tracer", "opentracing.Tracer", [1], 8, false, { pkgPath: "go.uber.org/cadence/internal" })]
	)
}

export function NewTracingContextPropagator(logger: zap.Logger | $.VarRef<zap.Logger> | null, tracer: opentracing.Tracer | null): __goscript_headers.ContextPropagator | null {
	return $.interfaceValue<__goscript_headers.ContextPropagator | null>(new tracingContextPropagator({logger: logger, tracer: tracer}), "*internal.tracingContextPropagator", /* @__PURE__ */ $.pointerType("internal.tracingContextPropagator"))
}

var __goscriptAwait: any
