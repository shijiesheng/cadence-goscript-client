// Generated file based on tracing.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import * as trand from "@goscript/github.com/uber/tchannel-go/trand/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as ext from "@goscript/github.com/opentracing/opentracing-go/ext/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as context2 from "@goscript/context/index.js"

import * as relay from "@goscript/github.com/uber/tchannel-go/relay/index.js"

import type * as arg2 from "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"

import * as tos from "@goscript/github.com/uber/tchannel-go/tos/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import type * as io from "@goscript/io/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as syscall from "@goscript/syscall/index.js"

import type * as __goscript__arguments from "./arguments.gs.ts"

import * as __goscript_calloptions from "./calloptions.gs.ts"

import * as __goscript_channel from "./channel.gs.ts"

import type * as __goscript_channelstate_string from "./channelstate_string.gs.ts"

import * as __goscript_checksum from "./checksum.gs.ts"

import * as __goscript_connection from "./connection.gs.ts"

import * as __goscript_connection_direction from "./connection_direction.gs.ts"

import * as __goscript_connectionstate_string from "./connectionstate_string.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_fragmenting_reader from "./fragmenting_reader.gs.ts"

import * as __goscript_fragmenting_writer from "./fragmenting_writer.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_frame_pool from "./frame_pool.gs.ts"

import * as __goscript_handlers from "./handlers.gs.ts"

import * as __goscript_health from "./health.gs.ts"

import type * as __goscript_idle_sweep from "./idle_sweep.gs.ts"

import * as __goscript_inbound from "./inbound.gs.ts"

import * as __goscript_introspection from "./introspection.gs.ts"

import * as __goscript_logger from "./logger.gs.ts"

import * as __goscript_messages from "./messages.gs.ts"

import * as __goscript_messagetype_string from "./messagetype_string.gs.ts"

import * as __goscript_mex from "./mex.gs.ts"

import * as __goscript_outbound from "./outbound.gs.ts"

import * as __goscript_peer from "./peer.gs.ts"

import * as __goscript_peer_heap from "./peer_heap.gs.ts"

import * as __goscript_peer_strategies from "./peer_strategies.gs.ts"

import * as __goscript_preinit_connection from "./preinit_connection.gs.ts"

import * as __goscript_relay from "./relay.gs.ts"

import * as __goscript_relay_api from "./relay_api.gs.ts"

import * as __goscript_relay_messages from "./relay_messages.gs.ts"

import * as __goscript_relay_timer_pool from "./relay_timer_pool.gs.ts"

import * as __goscript_reqres from "./reqres.gs.ts"

import * as __goscript_reqresreaderstate_string from "./reqresreaderstate_string.gs.ts"

import * as __goscript_reqreswriterstate_string from "./reqreswriterstate_string.gs.ts"

import * as __goscript_retry from "./retry.gs.ts"

import * as __goscript_retryon_string from "./retryon_string.gs.ts"

import * as __goscript_root_peer_list from "./root_peer_list.gs.ts"

import * as __goscript_sockio_non_unix from "./sockio_non_unix.gs.ts"

import * as __goscript_stats from "./stats.gs.ts"

import * as __goscript_subchannel from "./subchannel.gs.ts"

import * as __goscript_tracing_keys from "./tracing_keys.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/uber/tchannel-go/trand/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/opentracing/opentracing-go/ext/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/uber/tchannel-go/relay/index.js"
import "@goscript/github.com/uber/tchannel-go/tos/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/syscall/index.js"
import "./calloptions.gs.ts"
import "./channel.gs.ts"
import "./checksum.gs.ts"
import "./connection.gs.ts"
import "./connection_direction.gs.ts"
import "./connectionstate_string.gs.ts"
import "./context.gs.ts"
import "./fragmenting_reader.gs.ts"
import "./fragmenting_writer.gs.ts"
import "./frame.gs.ts"
import "./frame_pool.gs.ts"
import "./handlers.gs.ts"
import "./health.gs.ts"
import "./inbound.gs.ts"
import "./introspection.gs.ts"
import "./logger.gs.ts"
import "./messages.gs.ts"
import "./messagetype_string.gs.ts"
import "./mex.gs.ts"
import "./outbound.gs.ts"
import "./peer.gs.ts"
import "./peer_heap.gs.ts"
import "./peer_strategies.gs.ts"
import "./preinit_connection.gs.ts"
import "./relay.gs.ts"
import "./relay_api.gs.ts"
import "./relay_messages.gs.ts"
import "./relay_timer_pool.gs.ts"
import "./reqres.gs.ts"
import "./reqresreaderstate_string.gs.ts"
import "./reqreswriterstate_string.gs.ts"
import "./retry.gs.ts"
import "./retryon_string.gs.ts"
import "./root_peer_list.gs.ts"
import "./sockio_non_unix.gs.ts"
import "./stats.gs.ts"
import "./subchannel.gs.ts"
import "./tracing_keys.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.Span", "tchannel.injectableSpan", "tchannel.tracerProvider"])

export type tracerProvider = {
	Tracer(): opentracing.Tracer | null
}

$.registerInterfaceType(
	"tchannel.tracerProvider",
	null,
	[$.methodSignature("Tracer", [], ["opentracing.Tracer"])]
);

export class Span {
	public get traceID(): bigint {
		return this._fields.traceID
	}

	public set traceID(value: bigint) {
		this._fields.traceID = value
	}

	public get parentID(): bigint {
		return this._fields.parentID
	}

	public set parentID(value: bigint) {
		this._fields.parentID = value
	}

	public get spanID(): bigint {
		return this._fields.spanID
	}

	public set spanID(value: bigint) {
		this._fields.spanID = value
	}

	public get flags(): number {
		return this._fields.flags
	}

	public set flags(value: number) {
		this._fields.flags = value
	}

	public _fields: {
		traceID: bigint
		parentID: bigint
		spanID: bigint
		flags: number
	}

	constructor(init?: Partial<{traceID?: bigint, parentID?: bigint, spanID?: bigint, flags?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			traceID: init?.traceID ?? (0n as bigint),
			parentID: init?.parentID ?? (0n as bigint),
			spanID: init?.spanID ?? (0n as bigint),
			flags: init?.flags ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Span {
		return new Span(this, true)
	}

	public __goscriptAssign(source: Span): void {
		const target = this._fields
		const values = source._fields
		target.traceID = values.traceID
		target.parentID = values.parentID
		target.spanID = values.spanID
		target.flags = values.flags
	}

	public Flags(): number {
		const s = this;
		return s.flags
	}

	public ParentID(): bigint {
		const s = this;
		return s.parentID
	}

	public SpanID(): bigint {
		const s = this;
		return s.spanID
	}

	public async String(): globalThis.Promise<string> {
		const s = this;
		return fmt.Sprintf("TraceID=%x,ParentID=%x,SpanID=%x", $.basicInterfaceValue(s.traceID, "uint64"), $.basicInterfaceValue(s.parentID, "uint64"), $.basicInterfaceValue(s.spanID, "uint64"))
	}

	public TraceID(): bigint {
		const s = this;
		return s.traceID
	}

	public async initRandom(): globalThis.Promise<void> {
		let s: Span | $.VarRef<Span> | null = this;
		const s$: Span = s == null ? $.pointerTarget<Span>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Span>(s);
		;(s$ as Span).traceID = $.uint64(await (traceRng !== null && (traceRng as any).__isVarRef !== true && (traceRng as any).__goValue === undefined ? ((traceRng as any) as rand.Rand).Int63() : rand.Rand.prototype.Int63.call(traceRng)));
		;(s$ as Span).spanID = (s$ as Span).traceID;
		;(s$ as Span).parentID = 0n
	}

	public read(r: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null): $.GoError {
		let s: Span | $.VarRef<Span> | null = this;
		const s$: Span = s == null ? $.pointerTarget<Span>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Span>(s);
		;(s$ as Span).spanID = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadUint64() : typed.ReadBuffer.prototype.ReadUint64.call(r));
		;(s$ as Span).parentID = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadUint64() : typed.ReadBuffer.prototype.ReadUint64.call(r));
		;(s$ as Span).traceID = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadUint64() : typed.ReadBuffer.prototype.ReadUint64.call(r));
		;(s$ as Span).flags = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).ReadSingleByte() : typed.ReadBuffer.prototype.ReadSingleByte.call(r))
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as typed.ReadBuffer).Err() : typed.ReadBuffer.prototype.Err.call(r))
	}

	public write(w: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null): $.GoError {
		const s: Span | $.VarRef<Span> | null = this;
		const s$: Span = s == null ? $.pointerTarget<Span>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Span>(s)
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteUint64((s$ as Span).spanID) : typed.WriteBuffer.prototype.WriteUint64.call(w, (s$ as Span).spanID))
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteUint64((s$ as Span).parentID) : typed.WriteBuffer.prototype.WriteUint64.call(w, (s$ as Span).parentID))
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteUint64((s$ as Span).traceID) : typed.WriteBuffer.prototype.WriteUint64.call(w, (s$ as Span).traceID))
		void (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).WriteSingleByte((s$ as Span).flags) : typed.WriteBuffer.prototype.WriteSingleByte.call(w, (s$ as Span).flags))
		return (w !== null && (w as any).__isVarRef !== true && (w as any).__goValue === undefined ? ((w as any) as typed.WriteBuffer).Err() : typed.WriteBuffer.prototype.Err.call(w))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.Span",
		() => new Span(),
		() => [$.methodSignature("Flags", [], [/* @__PURE__ */ $.basicType("uint8")]), $.methodSignature("ParentID", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("SpanID", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("TraceID", [], [/* @__PURE__ */ $.basicType("uint64")]), $.methodSignature("initRandom", [], [], true), $.methodSignature("read", [["r", /* @__PURE__ */ $.pointerType("typed.ReadBuffer")]], ["error"], true), $.methodSignature("write", [["w", /* @__PURE__ */ $.pointerType("typed.WriteBuffer")]], ["error"], true)],
		Span,
		() => [/* @__PURE__ */ $.structField("traceID", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("parentID", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("spanID", /* @__PURE__ */ $.basicType("uint64"), [2], 16, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("flags", /* @__PURE__ */ $.basicType("uint8"), [3], 24, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class injectableSpan {
	public get traceID(): bigint {
		return this._fields.traceID
	}

	public set traceID(value: bigint) {
		this._fields.traceID = value
	}

	public get parentID(): bigint {
		return this._fields.parentID
	}

	public set parentID(value: bigint) {
		this._fields.parentID = value
	}

	public get spanID(): bigint {
		return this._fields.spanID
	}

	public set spanID(value: bigint) {
		this._fields.spanID = value
	}

	public get flags(): number {
		return this._fields.flags
	}

	public set flags(value: number) {
		this._fields.flags = value
	}

	public _fields: {
		traceID: bigint
		parentID: bigint
		spanID: bigint
		flags: number
	}

	constructor(init?: Partial<{traceID?: bigint, parentID?: bigint, spanID?: bigint, flags?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			traceID: init?.traceID ?? (0n as bigint),
			parentID: init?.parentID ?? (0n as bigint),
			spanID: init?.spanID ?? (0n as bigint),
			flags: init?.flags ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): injectableSpan {
		return new injectableSpan(this, true)
	}

	public __goscriptAssign(source: injectableSpan): void {
		const target = this._fields
		const values = source._fields
		target.traceID = values.traceID
		target.parentID = values.parentID
		target.spanID = values.spanID
		target.flags = values.flags
	}

	public SetFlags(flags: number): void {
		let s: injectableSpan | $.VarRef<injectableSpan> | null = this;
		$.pointerValue<injectableSpan>(s).flags = flags
	}

	public SetParentID(parentID: bigint): void {
		let s: injectableSpan | $.VarRef<injectableSpan> | null = this;
		$.pointerValue<injectableSpan>(s).parentID = parentID
	}

	public SetSpanID(spanID: bigint): void {
		let s: injectableSpan | $.VarRef<injectableSpan> | null = this;
		$.pointerValue<injectableSpan>(s).spanID = spanID
	}

	public SetTraceID(traceID: bigint): void {
		let s: injectableSpan | $.VarRef<injectableSpan> | null = this;
		$.pointerValue<injectableSpan>(s).traceID = traceID
	}

	public async initFromOpenTracing(span: opentracing.Span | null): globalThis.Promise<$.GoError> {
		const s: injectableSpan | $.VarRef<injectableSpan> | null = this;
		return (__goscriptAwait = $.pointerValue<Exclude<opentracing.Tracer, null>>((__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).Tracer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inject((__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).Context(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "zipkin-span-format", $.interfaceValue(s, "*tchannel.injectableSpan", /* @__PURE__ */ $.pointerType("tchannel.injectableSpan"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.injectableSpan",
		() => new injectableSpan(),
		() => [$.methodSignature("SetFlags", [["flags", /* @__PURE__ */ $.basicType("uint8")]], [], true), $.methodSignature("SetParentID", [["parentID", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("SetSpanID", [["spanID", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("SetTraceID", [["traceID", /* @__PURE__ */ $.basicType("uint64")]], [], true), $.methodSignature("initFromOpenTracing", [["span", "opentracing.Span"]], ["error"], true)],
		injectableSpan,
		() => [/* @__PURE__ */ $.structField("traceID", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("parentID", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("spanID", /* @__PURE__ */ $.basicType("uint64"), [2], 16, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("flags", /* @__PURE__ */ $.basicType("uint8"), [3], 24, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export const zipkinSpanFormat: string = "zipkin-span-format"

export let traceRng: rand.Rand | $.VarRef<rand.Rand> | null = await trand.NewSeeded()

export function __goscript_set_traceRng(__goscriptValue: rand.Rand | $.VarRef<rand.Rand> | null): void {
	traceRng = __goscriptValue
}

export let emptySpan: $.VarRef<Span> = $.varRef(new Span(undefined, true))

export function __goscript_set_emptySpan(__goscriptValue: Span): void {
	$.assignStruct(emptySpan.value, __goscriptValue)
}

export async function CurrentSpan(ctx: context.Context | null): globalThis.Promise<Span | $.VarRef<Span> | null> {
	{
		let sp = await opentracing.SpanFromContext(ctx)
		if (sp != null) {
			let injectable: $.VarRef<injectableSpan> = $.varRef(new injectableSpan(undefined, true))
			{
				let err = await injectable.value.initFromOpenTracing(sp)
				if (err == null) {
					let span = $.varRef(((() => { const __goscriptConvert0 = injectable.value; return $.markAsStructValue(new Span({traceID: __goscriptConvert0.traceID, parentID: __goscriptConvert0.parentID, spanID: __goscriptConvert0.spanID, flags: __goscriptConvert0.flags})) })()).clone())
					return span
				}
			}
		}
	}
	return emptySpan
}

export async function InjectOutboundSpan(response: __goscript_outbound.OutboundCallResponse | $.VarRef<__goscript_outbound.OutboundCallResponse> | null, headers: globalThis.Map<string, string> | null): globalThis.Promise<globalThis.Map<string, string> | null> {
	const response$: __goscript_outbound.OutboundCallResponse = response == null ? $.pointerTarget<__goscript_outbound.OutboundCallResponse>(response) : (response as any).__isVarRef === true ? (response as any).value : (response as any).__goValue === undefined ? (response as any) : $.pointerTarget<__goscript_outbound.OutboundCallResponse>(response)
	let span = (response$ as __goscript_outbound.OutboundCallResponse).span
	if (span == null) {
		return headers
	}
	let newHeaders: globalThis.Map<string, string> | null = $.makeMap<string, string>()
	let carrier: __goscript_tracing_keys.tracingHeadersCarrier = newHeaders
	{
		let err = (__goscriptAwait = $.pointerValue<Exclude<opentracing.Tracer, null>>((__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).Tracer(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Inject((__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).Context(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), $.namedValueInterfaceValue<any>(opentracing.TextMap, "opentracing.BuiltinFormat", {}, /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat")), $.namedValueInterfaceValue<any>(carrier, "tchannel.tracingHeadersCarrier", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			// Something had to go seriously wrong for Inject to fail, usually a setup problem.
			// A good Tracer implementation may also emit a metric.
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((response$ as __goscript_outbound.OutboundCallResponse).reqResReader.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error("Failed to inject tracing span."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
	if ($.len(newHeaders) == 0) {
		return headers
	}
	for (let [k, v] of headers?.entries() ?? []) {
		// Some applications propagate all inbound application headers to outbound calls (issue #682).
		// If those headers include tracing headers we want to make sure to keep the new tracing headers.
		{
			let [, ok] = $.mapGet<string, string, string>(newHeaders, k, "")
			if (!ok) {
				$.mapSet(newHeaders, k, v)
			}
		}
	}
	return newHeaders
}

export async function ExtractInboundSpan(ctx: context.Context | null, call: __goscript_inbound.InboundCall | $.VarRef<__goscript_inbound.InboundCall> | null, headers: globalThis.Map<string, string> | null, tracer: opentracing.Tracer | null): globalThis.Promise<context.Context | null> {
	let __goscriptShadow0: opentracing.Span | null = $.pointerValue<__goscript_inbound.InboundCallResponse>((call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).Response() : __goscript_inbound.InboundCall.prototype.Response.call(call))).span
	if (__goscriptShadow0 != null) {
		if (headers != null) {
			// extract SpanContext from headers, but do not start another span with it,
			// just get the baggage and copy to the already created span
			let carrier: __goscript_tracing_keys.tracingHeadersCarrier = headers
			{
				let [sc, err] = await (tracer !== null && (tracer as any).__isVarRef !== true && (tracer as any).__goValue === undefined ? (tracer as Exclude<opentracing.Tracer, null>) : $.pointerValue<Exclude<opentracing.Tracer, null>>(tracer)).Extract($.namedValueInterfaceValue<any>(opentracing.TextMap, "opentracing.BuiltinFormat", {}, /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat")), $.namedValueInterfaceValue<any>(carrier, "tchannel.tracingHeadersCarrier", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
				if (err == null) {
					void (__goscriptAwait = (sc !== null && (sc as any).__isVarRef !== true && (sc as any).__goValue === undefined ? (sc as Exclude<opentracing.SpanContext, null>) : $.pointerValue<Exclude<opentracing.SpanContext, null>>(sc)).ForeachBaggageItem($.functionValue(async (k: string, v: string): globalThis.Promise<boolean> => {
						void (__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(__goscriptShadow0)).SetBaggageItem(k, v), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						return true
					}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
			__goscript_tracing_keys.tracingHeadersCarrier_RemoveTracingKeys(carrier)
		}
	} else {
		let parent: opentracing.SpanContext | null = null! as opentracing.SpanContext | null
		if (headers != null) {
			let carrier: __goscript_tracing_keys.tracingHeadersCarrier = headers
			{
				let [p, err] = await (tracer !== null && (tracer as any).__isVarRef !== true && (tracer as any).__goValue === undefined ? (tracer as Exclude<opentracing.Tracer, null>) : $.pointerValue<Exclude<opentracing.Tracer, null>>(tracer)).Extract($.namedValueInterfaceValue<any>(opentracing.TextMap, "opentracing.BuiltinFormat", {}, /* @__PURE__ */ $.basicType("uint8", "opentracing.BuiltinFormat")), $.namedValueInterfaceValue<any>(carrier, "tchannel.tracingHeadersCarrier", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
				if (err == null) {
					parent = p
				}
			}
			__goscript_tracing_keys.tracingHeadersCarrier_RemoveTracingKeys(carrier)
		}
		__goscriptShadow0 = (__goscriptAwait = (tracer !== null && (tracer as any).__isVarRef !== true && (tracer as any).__goValue === undefined ? (tracer as Exclude<opentracing.Tracer, null>) : $.pointerValue<Exclude<opentracing.Tracer, null>>(tracer)).StartSpan((call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).MethodString() : __goscript_inbound.InboundCall.prototype.MethodString.call(call)), $.arrayToSlice<opentracing.StartSpanOption | null>([ext.RPCServerOption(parent)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await ext.StringTagName_Set(ext.PeerService, __goscriptShadow0, (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).CallerName() : __goscript_inbound.InboundCall.prototype.CallerName.call(call)))
		void (__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(__goscriptShadow0)).SetTag("as", (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).Format() : __goscript_inbound.InboundCall.prototype.Format.call(call))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await __goscript_connection.Connection.prototype.setPeerHostPort.call($.pointerValue<__goscript_inbound.InboundCall>(call).conn, __goscriptShadow0)
		$.pointerValue<__goscript_inbound.InboundCallResponse>((call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).Response() : __goscript_inbound.InboundCall.prototype.Response.call(call))).span = __goscriptShadow0
	}
	return opentracing.ContextWithSpan(ctx, __goscriptShadow0)
}

export async function TracerFromRegistrar(registrar: __goscript_channel.Registrar | null): globalThis.Promise<opentracing.Tracer | null> {
	{
		let __goscriptTuple0: any = $.typeAssertTuple<tracerProvider | null>(registrar, "tchannel.tracerProvider")
		let __goscriptShadow1 = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			return (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<tracerProvider, null>) : $.pointerValue<Exclude<tracerProvider, null>>(__goscriptShadow1)).Tracer()
		}
	}
	return opentracing.GlobalTracer()
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({ForeachKey: (receiver: any, ...args: any[]) => (__goscript_tracing_keys.tracingHeadersCarrier_ForeachKey as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), RemoveTracingKeys: (receiver: any, ...args: any[]) => (__goscript_tracing_keys.tracingHeadersCarrier_RemoveTracingKeys as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Set: (receiver: any, ...args: any[]) => (__goscript_tracing_keys.tracingHeadersCarrier_Set as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= ("tchannel.tracingHeadersCarrier")
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("ForeachKey", [["handler", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)]], ["error"]), $.methodSignature("RemoveTracingKeys"), $.methodSignature("Set", [["key", /* @__PURE__ */ $.basicType("string")], ["val", /* @__PURE__ */ $.basicType("string")]])])
}

var __goscriptAwait: any
