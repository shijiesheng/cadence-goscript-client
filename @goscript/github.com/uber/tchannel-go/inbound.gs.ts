// Generated file based on inbound.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as net from "@goscript/net/index.js"

import * as time from "@goscript/time/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as ext from "@goscript/github.com/opentracing/opentracing-go/ext/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as context2 from "@goscript/context/index.js"

import * as relay from "@goscript/github.com/uber/tchannel-go/relay/index.js"

import type * as arg2 from "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"

import * as tos from "@goscript/github.com/uber/tchannel-go/tos/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as io from "@goscript/io/index.js"

import * as rand from "@goscript/math/rand/index.js"

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

import type * as __goscript_systemerrcode_string from "./systemerrcode_string.gs.ts"

import * as __goscript_tracing from "./tracing.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/net/index.js"
import "@goscript/time/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/opentracing/opentracing-go/ext/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/uber/tchannel-go/relay/index.js"
import "@goscript/github.com/uber/tchannel-go/tos/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/io/index.js"
import "@goscript/math/rand/index.js"
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
import "./tracing.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.InboundCall", "tchannel.InboundCallResponse"])

export class InboundCall {
	public get reqResReader(): __goscript_reqres.reqResReader {
		return this._fields.reqResReader
	}

	public set reqResReader(value: __goscript_reqres.reqResReader) {
		this._fields.reqResReader = value
	}

	public get conn(): __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null {
		return this._fields.conn
	}

	public set conn(value: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null) {
		this._fields.conn = value
	}

	public get response(): InboundCallResponse | $.VarRef<InboundCallResponse> | null {
		return this._fields.response
	}

	public set response(value: InboundCallResponse | $.VarRef<InboundCallResponse> | null) {
		this._fields.response = value
	}

	public get serviceName(): string {
		return this._fields.serviceName
	}

	public set serviceName(value: string) {
		this._fields.serviceName = value
	}

	public get method(): $.Slice<number> {
		return this._fields.method
	}

	public set method(value: $.Slice<number>) {
		this._fields.method = value
	}

	public get methodString(): string {
		return this._fields.methodString
	}

	public set methodString(value: string) {
		this._fields.methodString = value
	}

	public get headers(): __goscript_messages.transportHeaders {
		return this._fields.headers
	}

	public set headers(value: __goscript_messages.transportHeaders) {
		this._fields.headers = value
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
		conn: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null
		response: InboundCallResponse | $.VarRef<InboundCallResponse> | null
		serviceName: string
		method: $.Slice<number>
		methodString: string
		headers: __goscript_messages.transportHeaders
		statsReporter: __goscript_stats.StatsReporter | null
		commonStatsTags: globalThis.Map<string, string> | null
	}

	constructor(init?: Partial<{reqResReader?: __goscript_reqres.reqResReader, conn?: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, response?: InboundCallResponse | $.VarRef<InboundCallResponse> | null, serviceName?: string, method?: $.Slice<number>, methodString?: string, headers?: __goscript_messages.transportHeaders, statsReporter?: __goscript_stats.StatsReporter | null, commonStatsTags?: globalThis.Map<string, string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			reqResReader: init?.reqResReader ? init.reqResReader.clone() : new __goscript_reqres.reqResReader(undefined, true),
			conn: init?.conn ?? (null! as __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null),
			response: init?.response ?? (null! as InboundCallResponse | $.VarRef<InboundCallResponse> | null),
			serviceName: init?.serviceName ?? ("" as string),
			method: init?.method ?? (null! as $.Slice<number>),
			methodString: init?.methodString ?? ("" as string),
			headers: init?.headers ?? (null! as __goscript_messages.transportHeaders),
			statsReporter: init?.statsReporter ?? (null! as __goscript_stats.StatsReporter | null),
			commonStatsTags: init?.commonStatsTags ?? (null! as globalThis.Map<string, string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): InboundCall {
		return new InboundCall(this, true)
	}

	public __goscriptAssign(source: InboundCall): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.reqResReader, values.reqResReader)
		target.conn = values.conn
		target.response = values.response
		target.serviceName = values.serviceName
		target.method = values.method
		target.methodString = values.methodString
		target.headers = values.headers
		target.statsReporter = $.assignFieldValue(target.statsReporter, values.statsReporter, "tchannel.StatsReporter")
		target.commonStatsTags = values.commonStatsTags
	}

	public async Arg2Reader(): globalThis.Promise<[__goscript__arguments.ArgReader | null, $.GoError]> {
		const call: InboundCall | $.VarRef<InboundCall> | null = this;
		return $.pointerValue<InboundCall>(call).reqResReader.arg2Reader()
	}

	public async Arg3Reader(): globalThis.Promise<[__goscript__arguments.ArgReader | null, $.GoError]> {
		const call: InboundCall | $.VarRef<InboundCall> | null = this;
		return $.pointerValue<InboundCall>(call).reqResReader.arg3Reader()
	}

	public CallOptions(): __goscript_calloptions.CallOptions | $.VarRef<__goscript_calloptions.CallOptions> | null {
		const call: InboundCall | $.VarRef<InboundCall> | null = this;
		return (() => { const __goscriptLiteralField0 = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as InboundCall).CallerName() : InboundCall.prototype.CallerName.call(call)); const __goscriptLiteralField1 = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as InboundCall).Format() : InboundCall.prototype.Format.call(call)); const __goscriptLiteralField2 = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as InboundCall).ShardKey() : InboundCall.prototype.ShardKey.call(call)); const __goscriptLiteralField3 = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as InboundCall).RoutingDelegate() : InboundCall.prototype.RoutingDelegate.call(call)); const __goscriptLiteralField4 = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as InboundCall).RoutingKey() : InboundCall.prototype.RoutingKey.call(call)); return new __goscript_calloptions.CallOptions({CallerName: __goscriptLiteralField0, Format: __goscriptLiteralField1, ShardKey: __goscriptLiteralField2, RoutingDelegate: __goscriptLiteralField3, RoutingKey: __goscriptLiteralField4}) })()
	}

	public CallerName(): string {
		const call: InboundCall | $.VarRef<InboundCall> | null = this;
		return $.mapGet<__goscript_messages.TransportHeaderName, string, string>($.pointerValue<InboundCall>(call).headers, "cn", "")[0]
	}

	public Connection(): net.Conn | null {
		const call: InboundCall | $.VarRef<InboundCall> | null = this;
		return $.pointerValue<__goscript_connection.Connection>($.pointerValue<InboundCall>(call).conn).conn
	}

	public Format(): __goscript_calloptions.Format {
		const call: InboundCall | $.VarRef<InboundCall> | null = this;
		return $.mapGet<__goscript_messages.TransportHeaderName, string, string>($.pointerValue<InboundCall>(call).headers, "as", "")[0]
	}

	public LocalPeer(): __goscript_connection.LocalPeerInfo {
		const call: InboundCall | $.VarRef<InboundCall> | null = this;
		return ($.pointerValue<__goscript_connection.Connection>($.pointerValue<InboundCall>(call).conn).localPeerInfo).clone()
	}

	public Method(): $.Slice<number> {
		const call: InboundCall | $.VarRef<InboundCall> | null = this;
		return $.pointerValue<InboundCall>(call).method
	}

	public MethodString(): string {
		const call: InboundCall | $.VarRef<InboundCall> | null = this;
		return $.pointerValue<InboundCall>(call).methodString
	}

	public RemotePeer(): __goscript_connection.PeerInfo {
		const call: InboundCall | $.VarRef<InboundCall> | null = this;
		return __goscript_connection.Connection.prototype.RemotePeerInfo.call($.pointerValue<InboundCall>(call).conn)
	}

	public Response(): InboundCallResponse | $.VarRef<InboundCallResponse> | null {
		let call: InboundCall | $.VarRef<InboundCall> | null = this;
		const call$: InboundCall = call == null ? $.pointerTarget<InboundCall>(call) : (call as any).__isVarRef === true ? (call as any).value : (call as any).__goValue === undefined ? (call as any) : $.pointerTarget<InboundCall>(call)
		if ((call$ as InboundCall).reqResReader.err != null) {
			// While reading Thrift, we cannot distinguish between malformed Thrift and other errors,
			// and so we may try to respond with a bad request. We should ensure that the response
			// is marked as failed if the request has failed so that we don't try to shutdown the exchange
			// a second time.
			$.pointerValue<InboundCallResponse>((call$ as InboundCall).response).reqResWriter.err = (call$ as InboundCall).reqResReader.err
		}
		return (call$ as InboundCall).response
	}

	public RoutingDelegate(): string {
		const call: InboundCall | $.VarRef<InboundCall> | null = this;
		return $.mapGet<__goscript_messages.TransportHeaderName, string, string>($.pointerValue<InboundCall>(call).headers, "rd", "")[0]
	}

	public RoutingKey(): string {
		const call: InboundCall | $.VarRef<InboundCall> | null = this;
		return $.mapGet<__goscript_messages.TransportHeaderName, string, string>($.pointerValue<InboundCall>(call).headers, "rk", "")[0]
	}

	public ServiceName(): string {
		const call: InboundCall | $.VarRef<InboundCall> | null = this;
		return $.pointerValue<InboundCall>(call).serviceName
	}

	public ShardKey(): string {
		const call: InboundCall | $.VarRef<InboundCall> | null = this;
		return $.mapGet<__goscript_messages.TransportHeaderName, string, string>($.pointerValue<InboundCall>(call).headers, "sk", "")[0]
	}

	public createStatsTags(connectionTags: globalThis.Map<string, string> | null): void {
		let call: InboundCall | $.VarRef<InboundCall> | null = this;
		const call$: InboundCall = call == null ? $.pointerTarget<InboundCall>(call) : (call as any).__isVarRef === true ? (call as any).value : (call as any).__goValue === undefined ? (call as any) : $.pointerTarget<InboundCall>(call);
		;(call$ as InboundCall).commonStatsTags = $.makeMap<string, string>([["calling-service", (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as InboundCall).CallerName() : InboundCall.prototype.CallerName.call(call))]])
		for (let [k, v] of connectionTags?.entries() ?? []) {
			$.mapSet((call$ as InboundCall).commonStatsTags, k, v)
		}
	}

	public doneReading(unexpected: $.GoError): void {
		const call: InboundCall | $.VarRef<InboundCall> | null = this;
	}

	public async readMethod(): globalThis.Promise<$.GoError> {
		let call: InboundCall | $.VarRef<InboundCall> | null = this;
		const call$: InboundCall = call == null ? $.pointerTarget<InboundCall>(call) : (call as any).__isVarRef === true ? (call as any).value : (call as any).__goValue === undefined ? (call as any) : $.pointerTarget<InboundCall>(call)
		let arg1: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
		{
			let err = await $.markAsStructValue($.cloneStructValue(__goscript__arguments.NewArgReader(...((await (call$ as InboundCall).reqResReader.arg1Reader()) as [__goscript__arguments.ArgReader | null, $.GoError])))).Read(arg1)
			if (err != null) {
				return (call$ as InboundCall).reqResReader.failed(err)
			}
		}

		;(call$ as InboundCall).method = arg1.value;
		;(call$ as InboundCall).methodString = $.bytesToString(arg1.value)
		return null
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
		"tchannel.InboundCall",
		() => new InboundCall(),
		() => [$.methodSignature("Arg2Reader", [], ["tchannel.ArgReader", "error"], true), $.methodSignature("Arg3Reader", [], ["tchannel.ArgReader", "error"], true), $.methodSignature("CallOptions", [], [/* @__PURE__ */ $.pointerType("tchannel.CallOptions")], true), $.methodSignature("CallerName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("Connection", [], ["net.Conn"], true), $.methodSignature("Format", [], [/* @__PURE__ */ $.basicType("string", "tchannel.Format")], true), $.methodSignature("LocalPeer", [], ["tchannel.LocalPeerInfo"], true), $.methodSignature("Method", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], true), $.methodSignature("MethodString", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("RemotePeer", [], ["tchannel.PeerInfo"], true), $.methodSignature("Response", [], [/* @__PURE__ */ $.pointerType("tchannel.InboundCallResponse")], true), $.methodSignature("RoutingDelegate", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("RoutingKey", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ServiceName", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("ShardKey", [], [/* @__PURE__ */ $.basicType("string")], true), $.methodSignature("createStatsTags", [["connectionTags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string"))]], [], true), $.methodSignature("doneReading", [["unexpected", "error"]], [], true), $.methodSignature("readMethod", [], ["error"], true), $.methodSignature("arg1Reader", [], ["tchannel.ArgReader", "error"], true), $.methodSignature("arg2Reader", [], ["tchannel.ArgReader", "error"], true), $.methodSignature("arg3Reader", [], ["tchannel.ArgReader", "error"], true), $.methodSignature("argReader", [["last", /* @__PURE__ */ $.basicType("bool")], ["inState", /* @__PURE__ */ $.basicType("int", "tchannel.reqResReaderState")], ["outState", /* @__PURE__ */ $.basicType("int", "tchannel.reqResReaderState")]], ["tchannel.ArgReader", "error"], true), $.methodSignature("failed", [["err", "error"]], ["error"], true), $.methodSignature("recvNextFragment", [["initial", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.pointerType("tchannel.readableFragment"), "error"], true), $.methodSignature("releasePreviousFragment", [], [], true)],
		InboundCall,
		() => [/* @__PURE__ */ $.structField("reqResReader", "tchannel.reqResReader", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go", anonymous: true }), /* @__PURE__ */ $.structField("conn", /* @__PURE__ */ $.pointerType("tchannel.Connection"), [1], 80, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("response", /* @__PURE__ */ $.pointerType("tchannel.InboundCallResponse"), [2], 88, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("serviceName", /* @__PURE__ */ $.basicType("string"), [3], 96, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("method", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 112, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("methodString", /* @__PURE__ */ $.basicType("string"), [5], 136, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("headers", "tchannel.transportHeaders", [6], 152, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("statsReporter", "tchannel.StatsReporter", [7], 160, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("commonStatsTags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [8], 176, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class InboundCallResponse {
	public get reqResWriter(): __goscript_reqres.reqResWriter {
		return this._fields.reqResWriter
	}

	public set reqResWriter(value: __goscript_reqres.reqResWriter) {
		this._fields.reqResWriter = value
	}

	public get call(): InboundCall | $.VarRef<InboundCall> | null {
		return this._fields.call
	}

	public set call(value: InboundCall | $.VarRef<InboundCall> | null) {
		this._fields.call = value
	}

	public get cancel(): (() => void) | null {
		return this._fields.cancel
	}

	public set cancel(value: (() => void) | null) {
		this._fields.cancel = value
	}

	// calledAt is the time the inbound call was routed to the application.
	public get calledAt(): time.Time {
		return this._fields.calledAt
	}

	public set calledAt(value: time.Time) {
		this._fields.calledAt = value
	}

	public get timeNow(): (() => time.Time | globalThis.Promise<time.Time>) | null {
		return this._fields.timeNow
	}

	public set timeNow(value: (() => time.Time | globalThis.Promise<time.Time>) | null) {
		this._fields.timeNow = value
	}

	public get applicationError(): boolean {
		return this._fields.applicationError
	}

	public set applicationError(value: boolean) {
		this._fields.applicationError = value
	}

	public get systemError(): boolean {
		return this._fields.systemError
	}

	public set systemError(value: boolean) {
		this._fields.systemError = value
	}

	public get headers(): __goscript_messages.transportHeaders {
		return this._fields.headers
	}

	public set headers(value: __goscript_messages.transportHeaders) {
		this._fields.headers = value
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
		reqResWriter: __goscript_reqres.reqResWriter
		call: InboundCall | $.VarRef<InboundCall> | null
		cancel: (() => void) | null
		calledAt: time.Time
		timeNow: (() => time.Time | globalThis.Promise<time.Time>) | null
		applicationError: boolean
		systemError: boolean
		headers: __goscript_messages.transportHeaders
		span: opentracing.Span | null
		statsReporter: __goscript_stats.StatsReporter | null
		commonStatsTags: globalThis.Map<string, string> | null
	}

	constructor(init?: Partial<{reqResWriter?: __goscript_reqres.reqResWriter, call?: InboundCall | $.VarRef<InboundCall> | null, cancel?: (() => void) | null, calledAt?: time.Time, timeNow?: (() => time.Time | globalThis.Promise<time.Time>) | null, applicationError?: boolean, systemError?: boolean, headers?: __goscript_messages.transportHeaders, span?: opentracing.Span | null, statsReporter?: __goscript_stats.StatsReporter | null, commonStatsTags?: globalThis.Map<string, string> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			reqResWriter: init?.reqResWriter ? init.reqResWriter.clone() : new __goscript_reqres.reqResWriter(undefined, true),
			call: init?.call ?? (null! as InboundCall | $.VarRef<InboundCall> | null),
			cancel: init?.cancel ?? (null! as (() => void) | null),
			calledAt: init?.calledAt ? $.markAsStructValue($.cloneStructValue(init.calledAt)) : $.markAsStructValue(new time.Time()),
			timeNow: init?.timeNow ?? (null! as (() => time.Time | globalThis.Promise<time.Time>) | null),
			applicationError: init?.applicationError ?? (false as boolean),
			systemError: init?.systemError ?? (false as boolean),
			headers: init?.headers ?? (null! as __goscript_messages.transportHeaders),
			span: init?.span ?? (null! as opentracing.Span | null),
			statsReporter: init?.statsReporter ?? (null! as __goscript_stats.StatsReporter | null),
			commonStatsTags: init?.commonStatsTags ?? (null! as globalThis.Map<string, string> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): InboundCallResponse {
		return new InboundCallResponse(this, true)
	}

	public __goscriptAssign(source: InboundCallResponse): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.reqResWriter, values.reqResWriter)
		target.call = values.call
		target.cancel = values.cancel
		$.assignStruct(target.calledAt, values.calledAt)
		target.timeNow = values.timeNow
		target.applicationError = values.applicationError
		target.systemError = values.systemError
		target.headers = values.headers
		target.span = $.assignFieldValue(target.span, values.span, "opentracing.Span")
		target.statsReporter = $.assignFieldValue(target.statsReporter, values.statsReporter, "tchannel.StatsReporter")
		target.commonStatsTags = values.commonStatsTags
	}

	public async Arg2Writer(): globalThis.Promise<[__goscript__arguments.ArgWriter | null, $.GoError]> {
		const response: InboundCallResponse | $.VarRef<InboundCallResponse> | null = this;
		{
			let err = await $.markAsStructValue($.cloneStructValue(__goscript__arguments.NewArgWriter(...(await (async () => { const __goscriptTupleArg0 = await $.pointerValue<InboundCallResponse>(response).reqResWriter.arg1Writer(); return [(__goscriptTupleArg0[0] as io.WriteCloser | null), __goscriptTupleArg0[1]] as [io.WriteCloser | null, $.GoError] })())))).Write(null)
			if (err != null) {
				return [null, err]
			}
		}
		return $.pointerValue<InboundCallResponse>(response).reqResWriter.arg2Writer()
	}

	public async Arg3Writer(): globalThis.Promise<[__goscript__arguments.ArgWriter | null, $.GoError]> {
		const response: InboundCallResponse | $.VarRef<InboundCallResponse> | null = this;
		return $.pointerValue<InboundCallResponse>(response).reqResWriter.arg3Writer()
	}

	public async Blackhole(): globalThis.Promise<void> {
		const response: InboundCallResponse | $.VarRef<InboundCallResponse> | null = this;
		void (__goscriptAwait = $.pointerValue<InboundCallResponse>(response).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async SendSystemError(err: $.GoError): globalThis.Promise<$.GoError> {
		let response: InboundCallResponse | $.VarRef<InboundCallResponse> | null = this;
		const response$: InboundCallResponse = response == null ? $.pointerTarget<InboundCallResponse>(response) : (response as any).__isVarRef === true ? (response as any).value : (response as any).__goValue === undefined ? (response as any) : $.pointerTarget<InboundCallResponse>(response)
		if ((response$ as InboundCallResponse).reqResWriter.err != null) {
			return (response$ as InboundCallResponse).reqResWriter.err
		}
		// Fail all future attempts to read fragments
		;(response$ as InboundCallResponse).reqResWriter.state = 3;
		;(response$ as InboundCallResponse).systemError = true
		await (response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as InboundCallResponse).setSpanErrorDetails(err) : InboundCallResponse.prototype.setSpanErrorDetails.call(response, err))
		await (response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as InboundCallResponse).doneSending() : InboundCallResponse.prototype.doneSending.call(response))
		await $.pointerValue<InboundCall>((response$ as InboundCallResponse).call).reqResReader.releasePreviousFragment()

		let span: __goscript_tracing.Span | $.VarRef<__goscript_tracing.Span> | null = await __goscript_tracing.CurrentSpan($.pointerValue<__goscript_mex.messageExchange>((response$ as InboundCallResponse).reqResWriter.mex).ctx)

		return __goscript_connection.Connection.prototype.SendSystemError.call((response$ as InboundCallResponse).reqResWriter.conn, $.pointerValue<__goscript_mex.messageExchange>((response$ as InboundCallResponse).reqResWriter.mex).msgID, ($.pointerValue<__goscript_tracing.Span>(span)).clone(), err)
	}

	public async SetApplicationError(): globalThis.Promise<$.GoError> {
		let response: InboundCallResponse | $.VarRef<InboundCallResponse> | null = this;
		const response$: InboundCallResponse = response == null ? $.pointerTarget<InboundCallResponse>(response) : (response as any).__isVarRef === true ? (response as any).value : (response as any).__goValue === undefined ? (response as any) : $.pointerTarget<InboundCallResponse>(response)
		if ((response$ as InboundCallResponse).reqResWriter.state > 1) {
			return (response$ as InboundCallResponse).reqResWriter.failed($.interfaceValue<$.GoError>(new __goscript_reqres.errReqResWriterStateMismatch({state: (response$ as InboundCallResponse).reqResWriter.state, expectedState: 1}, true), "tchannel.errReqResWriterStateMismatch", "tchannel.errReqResWriterStateMismatch"))
		}
		;(response$ as InboundCallResponse).applicationError = true
		await (response !== null && (response as any).__isVarRef !== true && (response as any).__goValue === undefined ? ((response as any) as InboundCallResponse).setSpanErrorDetails(null) : InboundCallResponse.prototype.setSpanErrorDetails.call(response, null))
		return null
	}

	public async doneSending(): globalThis.Promise<void> {
		const response: InboundCallResponse | $.VarRef<InboundCallResponse> | null = this;
		const response$: InboundCallResponse = response == null ? $.pointerTarget<InboundCallResponse>(response) : (response as any).__isVarRef === true ? (response as any).value : (response as any).__goValue === undefined ? (response as any) : $.pointerTarget<InboundCallResponse>(response)
		// TODO(prashant): Move this to when the message is actually being sent.
		let now = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = (response$ as InboundCallResponse).timeNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time)))

		{
			let span = (response$ as InboundCallResponse).span
			if (span != null) {
				if ((response$ as InboundCallResponse).applicationError || (response$ as InboundCallResponse).systemError) {
					await ext.BoolTagName_Set(ext.Error, span, true)
				}
				void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).FinishWithOptions(new opentracing.FinishOptions({FinishTime: $.markAsStructValue($.cloneStructValue(now))}, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		let latency = $.markAsStructValue($.cloneStructValue(now)).Sub($.markAsStructValue($.cloneStructValue((response$ as InboundCallResponse).calledAt)))
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_stats.StatsReporter, null>>((response$ as InboundCallResponse).statsReporter).RecordTimer("inbound.calls.latency", (response$ as InboundCallResponse).commonStatsTags, latency), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		if ((response$ as InboundCallResponse).systemError) {
		} else {
			if ((response$ as InboundCallResponse).applicationError) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_stats.StatsReporter, null>>((response$ as InboundCallResponse).statsReporter).IncCounter("inbound.calls.app-errors", (response$ as InboundCallResponse).commonStatsTags, 1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_stats.StatsReporter, null>>((response$ as InboundCallResponse).statsReporter).IncCounter("inbound.calls.success", (response$ as InboundCallResponse).commonStatsTags, 1n), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}

		// Cancel the context since the response is complete.
		void (__goscriptAwait = (response$ as InboundCallResponse).cancel!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// The message exchange is still open if there are no errors, call shutdown.
		if ((response$ as InboundCallResponse).reqResWriter.err == null) {
			await __goscript_mex.messageExchange.prototype.shutdown.call((response$ as InboundCallResponse).reqResWriter.mex)
		}
	}

	public async setSpanErrorDetails(err: $.GoError): globalThis.Promise<void> {
		const response: InboundCallResponse | $.VarRef<InboundCallResponse> | null = this;
		const response$: InboundCallResponse = response == null ? $.pointerTarget<InboundCallResponse>(response) : (response as any).__isVarRef === true ? (response as any).value : (response as any).__goValue === undefined ? (response as any) : $.pointerTarget<InboundCallResponse>(response)
		{
			let span = (response$ as InboundCallResponse).span
			if (span != null) {
				if ((response$ as InboundCallResponse).applicationError || (response$ as InboundCallResponse).systemError) {
					let errorType = "application"
					if ((response$ as InboundCallResponse).systemError) {
						errorType = "system"
						// if the error is a system error, set the error code as a span tag
						void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetTag("rpc.tchannel.system_error_code", await __goscript_errors.SystemErrCode_MetricsKey(__goscript_errors.GetSystemErrorCode(err))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					void (__goscriptAwait = (span !== null && (span as any).__isVarRef !== true && (span as any).__goValue === undefined ? (span as Exclude<opentracing.Span, null>) : $.pointerValue<Exclude<opentracing.Span, null>>(span)).SetTag("rpc.tchannel.error_type", errorType), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		}
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
		"tchannel.InboundCallResponse",
		() => new InboundCallResponse(),
		() => [$.methodSignature("Arg2Writer", [], ["tchannel.ArgWriter", "error"], true), $.methodSignature("Arg3Writer", [], ["tchannel.ArgWriter", "error"], true), $.methodSignature("Blackhole", [], [], true), $.methodSignature("SendSystemError", [["err", "error"]], ["error"], true), $.methodSignature("SetApplicationError", [], ["error"], true), $.methodSignature("doneSending", [], [], true), $.methodSignature("setSpanErrorDetails", [["err", "error"]], [], true), $.methodSignature("arg1Writer", [], ["tchannel.ArgWriter", "error"], true), $.methodSignature("arg2Writer", [], ["tchannel.ArgWriter", "error"], true), $.methodSignature("arg3Writer", [], ["tchannel.ArgWriter", "error"], true), $.methodSignature("argWriter", [["last", /* @__PURE__ */ $.basicType("bool")], ["inState", /* @__PURE__ */ $.basicType("int", "tchannel.reqResWriterState")], ["outState", /* @__PURE__ */ $.basicType("int", "tchannel.reqResWriterState")]], ["tchannel.ArgWriter", "error"], true), $.methodSignature("failed", [["err", "error"]], ["error"], true), $.methodSignature("flushFragment", [["fragment", /* @__PURE__ */ $.pointerType("tchannel.writableFragment")]], ["error"], true), $.methodSignature("newFragment", [["initial", /* @__PURE__ */ $.basicType("bool")], ["checksum", "tchannel.Checksum"]], [/* @__PURE__ */ $.pointerType("tchannel.writableFragment"), "error"], true)],
		InboundCallResponse,
		() => [/* @__PURE__ */ $.structField("reqResWriter", "tchannel.reqResWriter", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go", anonymous: true }), /* @__PURE__ */ $.structField("call", /* @__PURE__ */ $.pointerType("tchannel.InboundCall"), [1], 72, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("cancel", ({ kind: $.TypeKind.Function, name: "context.CancelFunc", params: [], results: [] } as $.FunctionTypeInfo), [2], 80, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("calledAt", "time.Time", [3], 88, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("timeNow", ({ kind: $.TypeKind.Function, params: [], results: ["time.Time"] } as $.FunctionTypeInfo), [4], 112, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("applicationError", /* @__PURE__ */ $.basicType("bool"), [5], 120, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("systemError", /* @__PURE__ */ $.basicType("bool"), [6], 121, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("headers", "tchannel.transportHeaders", [7], 128, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("span", "opentracing.Span", [8], 136, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("statsReporter", "tchannel.StatsReporter", [9], 152, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("commonStatsTags", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("string")), [10], 168, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export const systemErrorType: string = "system"

export const appErrorType: string = "application"

export let errInboundRequestAlreadyActive: $.GoError = errors.New("inbound request is already active; possible duplicate client id")

export function __goscript_set_errInboundRequestAlreadyActive(__goscriptValue: $.GoError): void {
	errInboundRequestAlreadyActive = __goscriptValue
}

var __goscriptAwait: any
