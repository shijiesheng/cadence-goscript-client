// Generated file based on outbound.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as ext from "@goscript/github.com/opentracing/opentracing-go/ext/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as context2 from "@goscript/context/index.js"

import * as relay from "@goscript/github.com/uber/tchannel-go/relay/index.js"

import type * as arg2 from "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"

import * as tos from "@goscript/github.com/uber/tchannel-go/tos/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as io from "@goscript/io/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as __goscript__arguments from "./arguments.gs.ts"

import * as __goscript_calloptions from "./calloptions.gs.ts"

import * as __goscript_channel from "./channel.gs.ts"

import type * as __goscript_channelstate_string from "./channelstate_string.gs.ts"

import * as __goscript_checksum from "./checksum.gs.ts"

import * as __goscript_connection from "./connection.gs.ts"

import * as __goscript_connection_direction from "./connection_direction.gs.ts"

import * as __goscript_connectionstate_string from "./connectionstate_string.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_errors from "./errors.gs.ts"

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

import * as __goscript_systemerrcode_string from "./systemerrcode_string.gs.ts"

import * as __goscript_tracing from "./tracing.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/opentracing/opentracing-go/ext/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/uber/tchannel-go/relay/index.js"
import "@goscript/github.com/uber/tchannel-go/tos/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/io/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/syscall/index.js"
import "./arguments.gs.ts"
import "./calloptions.gs.ts"
import "./channel.gs.ts"
import "./checksum.gs.ts"
import "./connection.gs.ts"
import "./connection_direction.gs.ts"
import "./connectionstate_string.gs.ts"
import "./context.gs.ts"
import "./errors.gs.ts"
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
import "./systemerrcode_string.gs.ts"
import "./tracing.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.OutboundCall", "tchannel.OutboundCallResponse"])

export class OutboundCall {
	public get reqResWriter(): __goscript_reqres.reqResWriter {
		return this._fields.reqResWriter
	}

	public set reqResWriter(value: __goscript_reqres.reqResWriter) {
		this._fields.reqResWriter = value
	}

	public get callReq(): __goscript_messages.callReq {
		return this._fields.callReq
	}

	public set callReq(value: __goscript_messages.callReq) {
		this._fields.callReq = value
	}

	public get response(): OutboundCallResponse | $.VarRef<OutboundCallResponse> | null {
		return this._fields.response
	}

	public set response(value: OutboundCallResponse | $.VarRef<OutboundCallResponse> | null) {
		this._fields.response = value
	}

	public get statsReporter(): __goscript_stats.StatsReporter | null {
		return this._fields.statsReporter
	}

	public set statsReporter(value: __goscript_stats.StatsReporter | null) {
		this._fields.statsReporter = value
	}

	public get commonStatsTags(): globalThis.Map<string, string> | null {
		return this._fields.commonStatsTags
	}

	public set commonStatsTags(value: globalThis.Map<string, string> | null) {
		this._fields.commonStatsTags = value
	}

	public _fields: {
		reqResWriter: __goscript_reqres.reqResWriter
		callReq: __goscript_messages.callReq
		response: OutboundCallResponse | $.VarRef<OutboundCallResponse> | null
		statsReporter: __goscript_stats.StatsReporter | null
		commonStatsTags: globalThis.Map<string, string> | null
	}

	constructor(init?: Partial<{reqResWriter?: __goscript_reqres.reqResWriter, callReq?: __goscript_messages.callReq, response?: OutboundCallResponse | $.VarRef<OutboundCallResponse> | null, statsReporter?: __goscript_stats.StatsReporter | null, commonStatsTags?: globalThis.Map<string, string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			reqResWriter: init?.reqResWriter ? init.reqResWriter.clone() : new __goscript_reqres.reqResWriter(undefined, true),
			callReq: init?.callReq ? init.callReq.clone() : new __goscript_messages.callReq(undefined, true),
			response: init?.response ?? (null! as OutboundCallResponse | $.VarRef<OutboundCallResponse> | null),
			statsReporter: init?.statsReporter ?? (null! as __goscript_stats.StatsReporter | null),
			commonStatsTags: init?.commonStatsTags ?? (null! as globalThis.Map<string, string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OutboundCall {
		return new OutboundCall(this, true)
	}

	public __goscriptAssign(source: OutboundCall): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.reqResWriter, values.reqResWriter)
		$.assignStruct(target.callReq, values.callReq)
		target.response = values.response
		target.statsReporter = $.assignFieldValue(target.statsReporter, values.statsReporter, "tchannel.StatsReporter")
		target.commonStatsTags = values.commonStatsTags
	}

	public async Arg2Writer(): globalThis.Promise<[__goscript__arguments.ArgWriter | null, $.GoError]> {
		const call: OutboundCall | $.VarRef<OutboundCall> | null = this;
		return $.pointerValue<OutboundCall>(call).reqResWriter.arg2Writer()
	}

	public async Arg3Writer(): globalThis.Promise<[__goscript__arguments.ArgWriter | null, $.GoError]> {
		const call: OutboundCall | $.VarRef<OutboundCall> | null = this;
		return $.pointerValue<OutboundCall>(call).reqResWriter.arg3Writer()
	}

	public LocalPeer(): __goscript_connection.LocalPeerInfo {
		const call: OutboundCall | $.VarRef<OutboundCall> | null = this;
		return ($.pointerValue<__goscript_connection.Connection>($.pointerValue<OutboundCall>(call).reqResWriter.conn).localPeerInfo).clone()
	}

	public RemotePeer(): __goscript_connection.PeerInfo {
		const call: OutboundCall | $.VarRef<OutboundCall> | null = this;
		return __goscript_connection.Connection.prototype.RemotePeerInfo.call($.pointerValue<OutboundCall>(call).reqResWriter.conn)
	}

	public Response(): OutboundCallResponse | $.VarRef<OutboundCallResponse> | null {
		const call: OutboundCall | $.VarRef<OutboundCall> | null = this;
		return $.pointerValue<OutboundCall>(call).response
	}

	public createStatsTags(connectionTags: globalThis.Map<string, string> | null, callOptions: __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null, method: string): void {
		let call: OutboundCall | $.VarRef<OutboundCall> | null = this;
		const call$: OutboundCall = call == null ? $.pointerTarget<OutboundCall>(call) : (call as any).__isVarRef === true ? (call as any).value : (call as any).__goValue === undefined ? (call as any) : $.pointerTarget<OutboundCall>(call);
		;(call$ as OutboundCall).commonStatsTags = $.makeMap<string, string>([["target-service", (call$ as OutboundCall).callReq.Service]])
		for (let [k, v] of connectionTags?.entries() ?? []) {
			$.mapSet((call$ as OutboundCall).commonStatsTags, k, v)
		}
		if (!$.stringEqual($.pointerValue<__goscript_calloptions.CallOptions>(callOptions).Format, "http")) {
			$.mapSet((call$ as OutboundCall).commonStatsTags, "target-endpoint", method)
		}
	}

	public doneSending(): void {
		const call: OutboundCall | $.VarRef<OutboundCall> | null = this;
	}

	public async writeMethod(method: $.Slice<number>): globalThis.Promise<$.GoError> {
		const call: OutboundCall | $.VarRef<OutboundCall> | null = this;
		const call$: OutboundCall = call == null ? $.pointerTarget<OutboundCall>(call) : (call as any).__isVarRef === true ? (call as any).value : (call as any).__goValue === undefined ? (call as any) : $.pointerTarget<OutboundCall>(call)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_stats.StatsReporter, null>>((call$ as OutboundCall).statsReporter).IncCounter("outbound.calls.send", (call$ as OutboundCall).commonStatsTags, 1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return $.markAsStructValue($.cloneStructValue(__goscript__arguments.NewArgWriter(...(await (async () => { const __goscriptTupleArg0 = await (call$ as OutboundCall).reqResWriter.arg1Writer(); return [(__goscriptTupleArg0[0] as io.WriteCloser | null), __goscriptTupleArg0[1]] as [io.WriteCloser | null, $.GoError] })())))).Write(method)
	}

	public async arg1Writer(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reqres.reqResWriter>(this.reqResWriter).arg1Writer()
	}

	public async arg2Writer(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reqres.reqResWriter>(this.reqResWriter).arg2Writer()
	}

	public async arg3Writer(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reqres.reqResWriter>(this.reqResWriter).arg3Writer()
	}

	public async argWriter(last: any, inState: any, outState: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reqres.reqResWriter>(this.reqResWriter).argWriter(last, inState, outState)
	}

	public async failed(err: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reqres.reqResWriter>(this.reqResWriter).failed(err)
	}

	public async flushFragment(fragment: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reqres.reqResWriter>(this.reqResWriter).flushFragment(fragment)
	}

	public async newFragment(initial: any, checksum: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reqres.reqResWriter>(this.reqResWriter).newFragment(initial, checksum)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.OutboundCall",
		() => new OutboundCall(),
		() => [$.methodSignature("Arg2Writer", [], ["tchannel.ArgWriter", "error"], true), $.methodSignature("Arg3Writer", [], ["tchannel.ArgWriter", "error"], true), $.methodSignature("LocalPeer", [], ["tchannel.LocalPeerInfo"], true), $.methodSignature("RemotePeer", [], ["tchannel.PeerInfo"], true), $.methodSignature("Response", [], [/* @__PURE__ */ $.pointerType("tchannel.OutboundCallResponse")], true), $.methodSignature("createStatsTags", [["connectionTags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))], ["callOptions", /* @__PURE__ */ $.pointerType("tchannel.CallOptions")], ["method", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("doneSending", [], [], true), $.methodSignature("writeMethod", [["method", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("arg1Writer", [], ["tchannel.ArgWriter", "error"], true), $.methodSignature("arg2Writer", [], ["tchannel.ArgWriter", "error"], true), $.methodSignature("arg3Writer", [], ["tchannel.ArgWriter", "error"], true), $.methodSignature("argWriter", [["last", /* @__PURE__ */ $.basicType("bool")], ["inState", /* @__PURE__ */ $.basicType("int", "tchannel.reqResWriterState")], ["outState", /* @__PURE__ */ $.basicType("int", "tchannel.reqResWriterState")]], ["tchannel.ArgWriter", "error"], true), $.methodSignature("failed", [["err", "error"]], ["error"], true), $.methodSignature("flushFragment", [["fragment", /* @__PURE__ */ $.pointerType("tchannel.writableFragment")]], ["error"], true), $.methodSignature("newFragment", [["initial", /* @__PURE__ */ $.basicType("bool")], ["checksum", "tchannel.Checksum"]], [/* @__PURE__ */ $.pointerType("tchannel.writableFragment"), "error"], true)],
		OutboundCall,
		() => [/* @__PURE__ */ $.structField("reqResWriter", "tchannel.reqResWriter", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go", anonymous: true }), /* @__PURE__ */ $.structField("callReq", "tchannel.callReq", [1], 72, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("response", /* @__PURE__ */ $.pointerType("tchannel.OutboundCallResponse"), [2], 144, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("statsReporter", "tchannel.StatsReporter", [3], 152, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("commonStatsTags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [4], 168, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class OutboundCallResponse {
	public get reqResReader(): __goscript_reqres.reqResReader {
		return this._fields.reqResReader
	}

	public set reqResReader(value: __goscript_reqres.reqResReader) {
		this._fields.reqResReader = value
	}

	public get callRes(): __goscript_messages.callRes {
		return this._fields.callRes
	}

	public set callRes(value: __goscript_messages.callRes) {
		this._fields.callRes = value
	}

	public get requestState(): __goscript_retry.RequestState | $.VarRef<__goscript_retry.RequestState> | null {
		return this._fields.requestState
	}

	public set requestState(value: __goscript_retry.RequestState | $.VarRef<__goscript_retry.RequestState> | null) {
		this._fields.requestState = value
	}

	// startedAt is the time at which the outbound call was started.
	public get startedAt(): time.Time {
		return this._fields.startedAt
	}

	public set startedAt(value: time.Time) {
		this._fields.startedAt = value
	}

	public get timeNow(): (() => time.Time | globalThis.Promise<time.Time>) | null {
		return this._fields.timeNow
	}

	public set timeNow(value: (() => time.Time | globalThis.Promise<time.Time>) | null) {
		this._fields.timeNow = value
	}

	public get span(): opentracing.Span | null {
		return this._fields.span
	}

	public set span(value: opentracing.Span | null) {
		this._fields.span = value
	}

	public get statsReporter(): __goscript_stats.StatsReporter | null {
		return this._fields.statsReporter
	}

	public set statsReporter(value: __goscript_stats.StatsReporter | null) {
		this._fields.statsReporter = value
	}

	public get commonStatsTags(): globalThis.Map<string, string> | null {
		return this._fields.commonStatsTags
	}

	public set commonStatsTags(value: globalThis.Map<string, string> | null) {
		this._fields.commonStatsTags = value
	}

	public _fields: {
		reqResReader: __goscript_reqres.reqResReader
		callRes: __goscript_messages.callRes
		requestState: __goscript_retry.RequestState | $.VarRef<__goscript_retry.RequestState> | null
		startedAt: time.Time
		timeNow: (() => time.Time | globalThis.Promise<time.Time>) | null
		span: opentracing.Span | null
		statsReporter: __goscript_stats.StatsReporter | null
		commonStatsTags: globalThis.Map<string, string> | null
	}

	constructor(init?: Partial<{reqResReader?: __goscript_reqres.reqResReader, callRes?: __goscript_messages.callRes, requestState?: __goscript_retry.RequestState | $.VarRef<__goscript_retry.RequestState> | null, startedAt?: time.Time, timeNow?: (() => time.Time | globalThis.Promise<time.Time>) | null, span?: opentracing.Span | null, statsReporter?: __goscript_stats.StatsReporter | null, commonStatsTags?: globalThis.Map<string, string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			reqResReader: init?.reqResReader ? init.reqResReader.clone() : new __goscript_reqres.reqResReader(undefined, true),
			callRes: init?.callRes ? init.callRes.clone() : new __goscript_messages.callRes(undefined, true),
			requestState: init?.requestState ?? (null! as __goscript_retry.RequestState | $.VarRef<__goscript_retry.RequestState> | null),
			startedAt: init?.startedAt ? $.markAsStructValue($.cloneStructValue(init.startedAt)) : $.markAsStructValue(new time.Time()),
			timeNow: init?.timeNow ?? (null! as (() => time.Time | globalThis.Promise<time.Time>) | null),
			span: init?.span ?? (null! as opentracing.Span | null),
			statsReporter: init?.statsReporter ?? (null! as __goscript_stats.StatsReporter | null),
			commonStatsTags: init?.commonStatsTags ?? (null! as globalThis.Map<string, string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OutboundCallResponse {
		return new OutboundCallResponse(this, true)
	}

	public __goscriptAssign(source: OutboundCallResponse): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.reqResReader, values.reqResReader)
		$.assignStruct(target.callRes, values.callRes)
		target.requestState = values.requestState
		$.assignStruct(target.startedAt, values.startedAt)
		target.timeNow = values.timeNow
		target.span = $.assignFieldValue(target.span, values.span, "opentracing.Span")
		target.statsReporter = $.assignFieldValue(target.statsReporter, values.statsReporter, "tchannel.StatsReporter")
		target.commonStatsTags = values.commonStatsTags
	}

	public ApplicationError(): boolean {
		const response: OutboundCallResponse | $.VarRef<OutboundCallResponse> | null = this;
		// TODO(mmihic): Wait for first fragment
		return $.pointerValue<OutboundCallResponse>(response).callRes.ResponseCode == 1
	}

	public async Arg2Reader(): globalThis.Promise<[__goscript__arguments.ArgReader | null, $.GoError]> {
		const response: OutboundCallResponse | $.VarRef<OutboundCallResponse> | null = this;
		let method: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
		{
			let err = await $.markAsStructValue($.cloneStructValue(__goscript__arguments.NewArgReader(...((await $.pointerValue<OutboundCallResponse>(response).reqResReader.arg1Reader()) as [__goscript__arguments.ArgReader | null, $.GoError])))).Read(method)
			if (err != null) {
				return [null, err]
			}
		}

		return $.pointerValue<OutboundCallResponse>(response).reqResReader.arg2Reader()
	}

	public async Arg3Reader(): globalThis.Promise<[__goscript__arguments.ArgReader | null, $.GoError]> {
		const response: OutboundCallResponse | $.VarRef<OutboundCallResponse> | null = this;
		return $.pointerValue<OutboundCallResponse>(response).reqResReader.arg3Reader()
	}

	public Format(): __goscript_calloptions.Format {
		const response: OutboundCallResponse | $.VarRef<OutboundCallResponse> | null = this;
		return $.mapGet<__goscript_messages.TransportHeaderName, string, string>($.pointerValue<OutboundCallResponse>(response).callRes.Headers, "as", "")[0]
	}

	public async doneReading(unexpected: $.GoError): globalThis.Promise<void> {
		const response: OutboundCallResponse | $.VarRef<OutboundCallResponse> | null = this;
		const response$: OutboundCallResponse = response == null ? $.pointerTarget<OutboundCallResponse>(response) : (response as any).__isVarRef === true ? (response as any).value : (response as any).__goValue === undefined ? (response as any) : $.pointerTarget<OutboundCallResponse>(response)
		let now = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (response$ as OutboundCallResponse).timeNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time)))

		let isSuccess = (unexpected == null) && !(response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as OutboundCallResponse).ApplicationError() : OutboundCallResponse.prototype.ApplicationError.call(response))
		let lastAttempt = isSuccess || !__goscript_retry.RequestState.prototype.HasRetries.call((response$ as OutboundCallResponse).requestState, unexpected)

		// TODO how should this work with retries?
		{
			let span = (response$ as OutboundCallResponse).span
			if (span != null) {
				if (unexpected != null) {
					void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).LogEventWithPayload("error", (unexpected as any)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				if (!isSuccess && lastAttempt) {
					await ext.BoolTagName_Set(ext.Error, span, true)
				}
				void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).FinishWithOptions(new opentracing.FinishOptions({FinishTime: $.markAsStructValue($.cloneStructValue(now))}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		let latency = $.markAsStructValue($.cloneStructValue(now)).Sub($.markAsStructValue($.cloneStructValue((response$ as OutboundCallResponse).startedAt)))
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_stats.StatsReporter, null>>((response$ as OutboundCallResponse).statsReporter).RecordTimer("outbound.calls.per-attempt.latency", (response$ as OutboundCallResponse).commonStatsTags, latency), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (lastAttempt) {
			let requestLatency = __goscript_retry.RequestState.prototype.SinceStart.call((response$ as OutboundCallResponse).requestState, now, latency)
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_stats.StatsReporter, null>>((response$ as OutboundCallResponse).statsReporter).RecordTimer("outbound.calls.latency", (response$ as OutboundCallResponse).commonStatsTags, requestLatency), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		{
			let retryCount = __goscript_retry.RequestState.prototype.RetryCount.call((response$ as OutboundCallResponse).requestState)
			if (retryCount > 0) {
				let retryTags: globalThis.Map<string, string> | null = cloneTags((response$ as OutboundCallResponse).commonStatsTags)
				$.mapSet(retryTags, "retry-count", await fmt.Sprint($.basicInterfaceValue(retryCount, "int")))
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_stats.StatsReporter, null>>((response$ as OutboundCallResponse).statsReporter).IncCounter("outbound.calls.retries", retryTags, 1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		if (unexpected != null) {
		} else {
			if ((response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as OutboundCallResponse).ApplicationError() : OutboundCallResponse.prototype.ApplicationError.call(response))) {
				// TODO(prashant): Figure out how to add "type" to tags, which TChannel does not know about.
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_stats.StatsReporter, null>>((response$ as OutboundCallResponse).statsReporter).IncCounter("outbound.calls.per-attempt.app-errors", (response$ as OutboundCallResponse).commonStatsTags, 1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (lastAttempt) {
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_stats.StatsReporter, null>>((response$ as OutboundCallResponse).statsReporter).IncCounter("outbound.calls.app-errors", (response$ as OutboundCallResponse).commonStatsTags, 1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			} else {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_stats.StatsReporter, null>>((response$ as OutboundCallResponse).statsReporter).IncCounter("outbound.calls.success", (response$ as OutboundCallResponse).commonStatsTags, 1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		await __goscript_mex.messageExchange.prototype.shutdown.call((response$ as OutboundCallResponse).reqResReader.mex)
	}

	public async arg1Reader(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reqres.reqResReader>(this.reqResReader).arg1Reader()
	}

	public async arg2Reader(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reqres.reqResReader>(this.reqResReader).arg2Reader()
	}

	public async arg3Reader(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reqres.reqResReader>(this.reqResReader).arg3Reader()
	}

	public async argReader(last: any, inState: any, outState: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reqres.reqResReader>(this.reqResReader).argReader(last, inState, outState)
	}

	public async failed(err: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reqres.reqResReader>(this.reqResReader).failed(err)
	}

	public async recvNextFragment(initial: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reqres.reqResReader>(this.reqResReader).recvNextFragment(initial)
	}

	public async releasePreviousFragment(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_reqres.reqResReader>(this.reqResReader).releasePreviousFragment()
	}

	static __typeInfo = $.registerStructType(
		"tchannel.OutboundCallResponse",
		() => new OutboundCallResponse(),
		() => [$.methodSignature("ApplicationError", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Arg2Reader", [], ["tchannel.ArgReader", "error"], true), $.methodSignature("Arg3Reader", [], ["tchannel.ArgReader", "error"], true), $.methodSignature("Format", [], [/* @__PURE__ */ $.basicType("string", "tchannel.Format")], true), $.methodSignature("doneReading", [["unexpected", "error"]], [], true), $.methodSignature("arg1Reader", [], ["tchannel.ArgReader", "error"], true), $.methodSignature("arg2Reader", [], ["tchannel.ArgReader", "error"], true), $.methodSignature("arg3Reader", [], ["tchannel.ArgReader", "error"], true), $.methodSignature("argReader", [["last", /* @__PURE__ */ $.basicType("bool")], ["inState", /* @__PURE__ */ $.basicType("int", "tchannel.reqResReaderState")], ["outState", /* @__PURE__ */ $.basicType("int", "tchannel.reqResReaderState")]], ["tchannel.ArgReader", "error"], true), $.methodSignature("failed", [["err", "error"]], ["error"], true), $.methodSignature("recvNextFragment", [["initial", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("tchannel.readableFragment"), "error"], true), $.methodSignature("releasePreviousFragment", [], [], true)],
		OutboundCallResponse,
		() => [/* @__PURE__ */ $.structField("reqResReader", "tchannel.reqResReader", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go", anonymous: true }), /* @__PURE__ */ $.structField("callRes", "tchannel.callRes", [1], 80, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("requestState", /* @__PURE__ */ $.pointerType("tchannel.RequestState"), [2], 128, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("startedAt", "time.Time", [3], 136, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("timeNow", ({ kind: $.TypeKind.Function, params: [], results: ["time.Time"] } as $.FunctionTypeInfo), [4], 160, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("span", "opentracing.Span", [5], 168, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("statsReporter", "tchannel.StatsReporter", [6], 184, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("commonStatsTags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [7], 200, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export const maxMethodSize: number = 16384

export function cloneTags(tags: globalThis.Map<string, string> | null): globalThis.Map<string, string> | null {
	let newTags: globalThis.Map<string, string> | null = $.makeMap<string, string>()
	for (let [k, v] of tags?.entries() ?? []) {
		$.mapSet(newTags, k, v)
	}
	return newTags
}

export async function validateCall(ctx: context.Context | null, serviceName: string, methodName: string, callOpts: __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null): globalThis.Promise<$.GoError> {
	if ($.stringEqual(serviceName, "")) {
		return __goscript_channel.ErrNoServiceName
	}

	if ($.stringLen(methodName) > 16384) {
		return __goscript_errors.ErrMethodTooLarge
	}

	{
		let [, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context2.Context, null>) : $.pointerValue<Exclude<context2.Context, null>>(ctx)).Deadline()
		if (!ok) {
			return __goscript_errors.ErrTimeoutRequired
		}
	}

	return null
}

var __goscriptAwait: any
