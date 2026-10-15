// Generated file based on stream.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as io from "@goscript/io/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as metrics from "@goscript/go.uber.org/net/metrics/index.js"

import type * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_call from "./call.gs.ts"

import * as __goscript_extractor from "./extractor.gs.ts"

import * as __goscript_graph from "./graph.gs.ts"
import "@goscript/context/index.js"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/net/metrics/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/time/index.js"
import "./call.gs.ts"
import "./extractor.gs.ts"
import "./graph.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/internal/observability", ["observability.streamWrapper", "observability.nopCloser"])

export class streamWrapper {
	public get StreamCloser(): transport.StreamCloser | null {
		return this._fields.StreamCloser
	}

	public set StreamCloser(value: transport.StreamCloser | null) {
		this._fields.StreamCloser = value
	}

	public get call(): __goscript_call.call {
		return this._fields.call
	}

	public set call(value: __goscript_call.call) {
		this._fields.call = value
	}

	public get edge(): __goscript_graph.streamEdge | $.VarRef<__goscript_graph.streamEdge> | null {
		return this._fields.edge
	}

	public set edge(value: __goscript_graph.streamEdge | $.VarRef<__goscript_graph.streamEdge> | null) {
		this._fields.edge = value
	}

	public get logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.logger
	}

	public set logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.logger = value
	}

	public _fields: {
		StreamCloser: transport.StreamCloser | null
		call: __goscript_call.call
		edge: __goscript_graph.streamEdge | $.VarRef<__goscript_graph.streamEdge> | null
		logger: zap.Logger | $.VarRef<zap.Logger> | null
	}

	constructor(init?: Partial<{StreamCloser?: transport.StreamCloser | null, call?: __goscript_call.call, edge?: __goscript_graph.streamEdge | $.VarRef<__goscript_graph.streamEdge> | null, logger?: zap.Logger | $.VarRef<zap.Logger> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			StreamCloser: init?.StreamCloser ?? (null! as transport.StreamCloser | null),
			call: init?.call ? init.call.clone() : new __goscript_call.call(undefined, true),
			edge: init?.edge ?? (null! as __goscript_graph.streamEdge | $.VarRef<__goscript_graph.streamEdge> | null),
			logger: init?.logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): streamWrapper {
		return new streamWrapper(this, true)
	}

	public __goscriptAssign(source: streamWrapper): void {
		const target = this._fields
		const values = source._fields
		target.StreamCloser = $.assignFieldValue(target.StreamCloser, values.StreamCloser, "transport.StreamCloser")
		$.assignStruct(target.call, values.call)
		target.edge = values.edge
		target.logger = values.logger
	}

	public async Close(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const s: streamWrapper | $.VarRef<streamWrapper> | null = this;
		const s$: streamWrapper = s == null ? $.pointerTarget<streamWrapper>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<streamWrapper>(s)
		let err = (__goscriptAwait = $.pointerValue<Exclude<transport.StreamCloser, null>>((s$ as streamWrapper).StreamCloser).Close(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await $.markAsStructValue($.cloneStructValue((s$ as streamWrapper).call)).EndStream(err)
		return err
	}

	public async Headers(): globalThis.Promise<[transport.Headers, $.GoError]> {
		const s: streamWrapper | $.VarRef<streamWrapper> | null = this;
		return transport.ReadStreamHeaders(($.pointerValue<streamWrapper>(s).StreamCloser as transport.Stream | null))
	}

	public async ReceiveMessage(ctx: context.Context | null): globalThis.Promise<[transport.StreamMessage | $.VarRef<transport.StreamMessage> | null, $.GoError]> {
		const s: streamWrapper | $.VarRef<streamWrapper> | null = this;
		const s$: streamWrapper = s == null ? $.pointerTarget<streamWrapper>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<streamWrapper>(s)
		// TODO: handle panic for metrics
		let __goscriptTuple0: any = await $.pointerValue<Exclude<transport.StreamCloser, null>>((s$ as streamWrapper).StreamCloser).ReceiveMessage(ctx)
		let msg: transport.StreamMessage | $.VarRef<transport.StreamMessage> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (((err == null) && (msg != null)) && ($.stringEqual((s$ as streamWrapper).call.direction, "inbound"))) {
			metrics.Histogram.prototype.IncBucket.call($.pointerValue<__goscript_graph.streamEdge>((s$ as streamWrapper).edge).streamRequestPayloadSizes, $.int64($.pointerValue<transport.StreamMessage>(msg).BodySize))
		}
		// Receiving EOF does not constitute an error for the purposes of metrics and alerts.
		// This is the only special case.
		// All other log events treat EOF as an error, including when sending a
		// message or concluding a handshake.
		let success = (err == null) || ($.comparableEqual(err, io.EOF))
		await $.markAsStructValue($.cloneStructValue((s$ as streamWrapper).call)).logStreamEvent(err, success, "Successfully received stream message", "Error receiving stream message", null)

		metrics.Counter.prototype.Inc.call($.pointerValue<__goscript_graph.streamEdge>((s$ as streamWrapper).edge).receives)
		if (success) {
			metrics.Counter.prototype.Inc.call($.pointerValue<__goscript_graph.streamEdge>((s$ as streamWrapper).edge).receiveSuccesses)
			return [msg, err]
		}

		{
			let __goscriptTuple1: any = await metrics.CounterVector.prototype.Get.call($.pointerValue<__goscript_graph.streamEdge>((s$ as streamWrapper).edge).receiveFailures, $.arrayToSlice<string>(["error", await __goscript_call.errToMetricString(err)]))
			let recvFailureCounter: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple1[0]
			let err2 = __goscriptTuple1[1]
			if (err2 != null) {
				await zap.Logger.prototype.DPanic.call((s$ as streamWrapper).logger, "could not retrieve receive failure counter", $.arrayToSlice<zap.Field>([zap.Error(err2)]))
			} else {
				void (recvFailureCounter !== null && (recvFailureCounter as any).__isVarRef !== true && (recvFailureCounter as any).__goValue === undefined ? ((recvFailureCounter as any) as metrics.Counter).Inc() : metrics.Counter.prototype.Inc.call(recvFailureCounter))
			}
		}

		return [msg, err]
	}

	public async SendHeaders(headers: transport.Headers): globalThis.Promise<$.GoError> {
		const s: streamWrapper | $.VarRef<streamWrapper> | null = this;
		return transport.SendStreamHeaders(($.pointerValue<streamWrapper>(s).StreamCloser as transport.Stream | null), headers)
	}

	public async SendMessage(ctx: context.Context | null, msg: transport.StreamMessage | $.VarRef<transport.StreamMessage> | null): globalThis.Promise<$.GoError> {
		const s: streamWrapper | $.VarRef<streamWrapper> | null = this;
		const s$: streamWrapper = s == null ? $.pointerTarget<streamWrapper>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<streamWrapper>(s)
		// TODO: handle panic for metrics
		if (($.stringEqual((s$ as streamWrapper).call.direction, "inbound")) && (msg != null)) {
			metrics.Histogram.prototype.IncBucket.call($.pointerValue<__goscript_graph.streamEdge>((s$ as streamWrapper).edge).streamResponsePayloadSizes, $.int64($.pointerValue<transport.StreamMessage>(msg).BodySize))
		}

		let err = (__goscriptAwait = $.pointerValue<Exclude<transport.StreamCloser, null>>((s$ as streamWrapper).StreamCloser).SendMessage(ctx, msg), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await $.markAsStructValue($.cloneStructValue((s$ as streamWrapper).call)).logStreamEvent(err, err == null, "Successfully sent stream message", "Error sending stream message", null)

		metrics.Counter.prototype.Inc.call($.pointerValue<__goscript_graph.streamEdge>((s$ as streamWrapper).edge).sends)
		if (err == null) {
			metrics.Counter.prototype.Inc.call($.pointerValue<__goscript_graph.streamEdge>((s$ as streamWrapper).edge).sendSuccesses)
			return null
		}

		{
			let __goscriptTuple2: any = await metrics.CounterVector.prototype.Get.call($.pointerValue<__goscript_graph.streamEdge>((s$ as streamWrapper).edge).sendFailures, $.arrayToSlice<string>(["error", await __goscript_call.errToMetricString(err)]))
			let sendFailuresCounter: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple2[0]
			let err2 = __goscriptTuple2[1]
			if (err2 != null) {
				await zap.Logger.prototype.DPanic.call((s$ as streamWrapper).logger, "could not retrieve send failure counter", $.arrayToSlice<zap.Field>([zap.Error(err2)]))
			} else {
				void (sendFailuresCounter !== null && (sendFailuresCounter as any).__isVarRef !== true && (sendFailuresCounter as any).__goValue === undefined ? ((sendFailuresCounter as any) as metrics.Counter).Inc() : metrics.Counter.prototype.Inc.call(sendFailuresCounter))
			}
		}
		return err
	}

	public async Context(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.StreamCloser | null, null>>(this.StreamCloser).Context()
	}

	public async Request(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.StreamCloser | null, null>>(this.StreamCloser).Request()
	}

	static __typeInfo = $.registerStructType(
		"observability.streamWrapper",
		() => new streamWrapper(),
		() => [$.methodSignature("Close", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("Headers", [], ["transport.Headers", "error"], true), $.methodSignature("ReceiveMessage", [["ctx", "context.Context"]], [/* @__PURE__ */ $.pointerType("transport.StreamMessage"), "error"], true), $.methodSignature("SendHeaders", [["headers", "transport.Headers"]], ["error"], true), $.methodSignature("SendMessage", [["ctx", "context.Context"], ["msg", /* @__PURE__ */ $.pointerType("transport.StreamMessage")]], ["error"], true), $.methodSignature("Context", [], ["context.Context"]), $.methodSignature("Request", [], [/* @__PURE__ */ $.pointerType("transport.StreamRequest")])],
		streamWrapper,
		() => [/* @__PURE__ */ $.structField("StreamCloser", "transport.StreamCloser", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("call", "observability.call", [1], 16, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("edge", /* @__PURE__ */ $.pointerType("observability.streamEdge"), [2], 112, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [3], 120, false, { pkgPath: "go.uber.org/yarpc/internal/observability" })]
	)
}

export class nopCloser {
	public get Stream(): transport.Stream | null {
		return this._fields.Stream
	}

	public set Stream(value: transport.Stream | null) {
		this._fields.Stream = value
	}

	public _fields: {
		Stream: transport.Stream | null
	}

	constructor(init?: Partial<{Stream?: transport.Stream | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Stream: init?.Stream ?? (null! as transport.Stream | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nopCloser {
		return new nopCloser(this, true)
	}

	public __goscriptAssign(source: nopCloser): void {
		const target = this._fields
		const values = source._fields
		target.Stream = $.assignFieldValue(target.Stream, values.Stream, "transport.Stream")
	}

	public Close(ctx: context.Context | null): $.GoError {
		const c = this;
		return null
	}

	public async SendHeaders(headers: transport.Headers): globalThis.Promise<$.GoError> {
		const c = this;
		return transport.SendStreamHeaders(c.Stream, headers)
	}

	public async Context(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.Stream | null, null>>(this.Stream).Context()
	}

	public async ReceiveMessage(_p0: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.Stream | null, null>>(this.Stream).ReceiveMessage(_p0)
	}

	public async Request(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.Stream | null, null>>(this.Stream).Request()
	}

	public async SendMessage(_p0: any, _p1: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<transport.Stream | null, null>>(this.Stream).SendMessage(_p0, _p1)
	}

	static __typeInfo = $.registerStructType(
		"observability.nopCloser",
		() => new nopCloser(),
		() => [$.methodSignature("Close", [["ctx", "context.Context"]], ["error"]), $.methodSignature("SendHeaders", [["headers", "transport.Headers"]], ["error"]), $.methodSignature("Context", [], ["context.Context"]), $.methodSignature("ReceiveMessage", ["context.Context"], [/* @__PURE__ */ $.pointerType("transport.StreamMessage"), "error"]), $.methodSignature("Request", [], [/* @__PURE__ */ $.pointerType("transport.StreamRequest")]), $.methodSignature("SendMessage", ["context.Context", /* @__PURE__ */ $.pointerType("transport.StreamMessage")], ["error"])],
		nopCloser,
		() => [/* @__PURE__ */ $.structField("Stream", "transport.Stream", [0], 0, true, { anonymous: true })]
	)
}

export const _successfulStreamReceive: string = "Successfully received stream message"

export const _successfulStreamSend: string = "Successfully sent stream message"

export const _errorStreamReceive: string = "Error receiving stream message"

export const _errorStreamSend: string = "Error sending stream message"

var __goscriptAwait: any
