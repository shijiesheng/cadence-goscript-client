// Generated file based on call.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as io from "@goscript/io/index.js"

import * as metrics from "@goscript/go.uber.org/net/metrics/index.js"

import * as __goscript_extractor from "./extractor.gs.ts"

import * as __goscript_graph from "./graph.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/net/metrics/index.js"
import "./extractor.gs.ts"
import "./graph.gs.ts"
import "./stream.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/internal/observability", ["observability.call", "observability.callResult", "observability.levels"])

export class call {
	public get edge(): __goscript_graph.edge | $.VarRef<__goscript_graph.edge> | null {
		return this._fields.edge
	}

	public set edge(value: __goscript_graph.edge | $.VarRef<__goscript_graph.edge> | null) {
		this._fields.edge = value
	}

	public get extract(): ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null {
		return this._fields.extract
	}

	public set extract(value: ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null) {
		this._fields.extract = value
	}

	public get started(): time.Time {
		return this._fields.started
	}

	public set started(value: time.Time) {
		this._fields.started = value
	}

	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public get req(): transport.Request | $.VarRef<transport.Request> | null {
		return this._fields.req
	}

	public set req(value: transport.Request | $.VarRef<transport.Request> | null) {
		this._fields.req = value
	}

	public get rpcType(): transport.Type {
		return this._fields.rpcType
	}

	public set rpcType(value: transport.Type) {
		this._fields.rpcType = value
	}

	public get direction(): __goscript_graph.directionName {
		return this._fields.direction
	}

	public set direction(value: __goscript_graph.directionName) {
		this._fields.direction = value
	}

	public get levels(): levels | $.VarRef<levels> | null {
		return this._fields.levels
	}

	public set levels(value: levels | $.VarRef<levels> | null) {
		this._fields.levels = value
	}

	public _fields: {
		edge: __goscript_graph.edge | $.VarRef<__goscript_graph.edge> | null
		extract: ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null
		started: time.Time
		ctx: context.Context | null
		req: transport.Request | $.VarRef<transport.Request> | null
		rpcType: transport.Type
		direction: __goscript_graph.directionName
		levels: levels | $.VarRef<levels> | null
	}

	constructor(init?: Partial<{edge?: __goscript_graph.edge | $.VarRef<__goscript_graph.edge> | null, extract?: ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null, started?: time.Time, ctx?: context.Context | null, req?: transport.Request | $.VarRef<transport.Request> | null, rpcType?: transport.Type, direction?: __goscript_graph.directionName, levels?: levels | $.VarRef<levels> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			edge: init?.edge ?? (null! as __goscript_graph.edge | $.VarRef<__goscript_graph.edge> | null),
			extract: init?.extract ?? (null! as ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null),
			started: init?.started ? $.markAsStructValue($.cloneStructValue(init.started)) : $.markAsStructValue(new time.Time()),
			ctx: init?.ctx ?? (null! as context.Context | null),
			req: init?.req ?? (null! as transport.Request | $.VarRef<transport.Request> | null),
			rpcType: init?.rpcType ?? (0 as transport.Type),
			direction: init?.direction ?? ("" as __goscript_graph.directionName),
			levels: init?.levels ?? (null! as levels | $.VarRef<levels> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): call {
		return new call(this, true)
	}

	public __goscriptAssign(source: call): void {
		const target = this._fields
		const values = source._fields
		target.edge = values.edge
		target.extract = values.extract
		$.assignStruct(target.started, values.started)
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
		target.req = values.req
		target.rpcType = values.rpcType
		target.direction = values.direction
		target.levels = values.levels
	}

	public async End(res: callResult): globalThis.Promise<void> {
		const c = this;
		await c.endWithAppError((res).clone(), null)
	}

	public async EndCallWithAppError(res: callResult): globalThis.Promise<void> {
		const c = this;
		await c.endWithAppError((res).clone(), null)
	}

	public async EndHandleWithAppError(res: callResult): globalThis.Promise<void> {
		const c = this;
		if (res.ctxOverrideErr == null) {
			await c.endWithAppError((res).clone(), null)
			return
		}

		// We'll override the user's response with the appropriate context error. Also, log
		// the dropped response.
		let droppedField: zap.Field = new zapcore.Field(undefined, true)
		if (res.isApplicationError && (res.err == null)) {
			droppedField = $.assignStruct(droppedField, zap.String("dropped", "dropped application error due to context timeout or cancelation"))
		} else {
			if (res.err != null) {
				droppedField = $.assignStruct(droppedField, zap.String("dropped", await fmt.Sprintf("dropped error due to context timeout or cancelation: %v", (res.err as any))))
			} else {
				droppedField = $.assignStruct(droppedField, zap.String("dropped", "dropped handler success due to context timeout or cancelation"))
			}
		}

		await c.endWithAppError(new callResult({err: res.ctxOverrideErr, requestSize: res.requestSize, responseSize: res.responseSize}, true), $.arrayToSlice<zap.Field>([(droppedField).clone()]))
	}

	public async EndStream(err: $.GoError): globalThis.Promise<void> {
		const c = this;
		let elapsed = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = __goscript_graph._timeNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Sub($.markAsStructValue($.cloneStructValue(c.started)))
		await $.markAsStructValue($.cloneStructValue(c)).logStreamEvent(err, err == null, "Successfully closed stream", "Error closing stream", $.arrayToSlice<zap.Field>([zap.Duration("duration", elapsed)]))

		metrics.Gauge.prototype.Dec.call($.pointerValue<__goscript_graph.streamEdge>($.pointerValue<__goscript_graph.edge>(c.edge).streaming).streamsActive)
		metrics.Histogram.prototype.Observe.call($.pointerValue<__goscript_graph.streamEdge>($.pointerValue<__goscript_graph.edge>(c.edge).streaming).streamDurations, elapsed)
		await $.markAsStructValue($.cloneStructValue(c)).emitStreamError(err)
	}

	public async EndStreamHandshake(): globalThis.Promise<void> {
		const c = this;
		await $.markAsStructValue($.cloneStructValue(c)).EndStreamHandshakeWithError(null)
	}

	public async EndStreamHandshakeWithError(err: $.GoError): globalThis.Promise<void> {
		const c = this;
		await $.markAsStructValue($.cloneStructValue(c)).logStreamEvent(err, err == null, "Successfully created stream", "Error creating stream", null)

		metrics.Counter.prototype.Inc.call($.pointerValue<__goscript_graph.edge>(c.edge).calls)
		if (err == null) {
			metrics.Counter.prototype.Inc.call($.pointerValue<__goscript_graph.edge>(c.edge).successes)
			metrics.Gauge.prototype.Inc.call($.pointerValue<__goscript_graph.streamEdge>($.pointerValue<__goscript_graph.edge>(c.edge).streaming).streamsActive)
			return
		}

		await $.markAsStructValue($.cloneStructValue(c)).emitStreamError(err)
	}

	public async EndStreamWithPanic(err: $.GoError): globalThis.Promise<void> {
		const c = this;
		metrics.Counter.prototype.Inc.call($.pointerValue<__goscript_graph.edge>(c.edge).panics)
		await $.markAsStructValue($.cloneStructValue(c)).EndStream(err)
	}

	public async EndWithPanic(err: $.GoError): globalThis.Promise<void> {
		const c = this;
		metrics.Counter.prototype.Inc.call($.pointerValue<__goscript_graph.edge>(c.edge).panics)
		await $.markAsStructValue($.cloneStructValue(c)).endWithAppError(new callResult({err: err}, true), null)
	}

	public async WrapClientStream(stream: transport.ClientStream | $.VarRef<transport.ClientStream> | null): globalThis.Promise<transport.ClientStream | $.VarRef<transport.ClientStream> | null> {
		const c = this;
		let __goscriptTuple0: any = transport.NewClientStream($.interfaceValue<transport.StreamCloser | null>(new __goscript_stream.streamWrapper({StreamCloser: $.interfaceValue<transport.StreamCloser | null>(stream, "*transport.ClientStream", /* @__PURE__ */ $.pointerType("transport.ClientStream")), call: c, edge: $.pointerValue<__goscript_graph.edge>(c.edge).streaming, logger: $.pointerValue<__goscript_graph.edge>(c.edge).logger}), "*observability.streamWrapper", /* @__PURE__ */ $.pointerType("observability.streamWrapper")), null)
		let wrapped: transport.ClientStream | $.VarRef<transport.ClientStream> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {

			await zap.Logger.prototype.DPanic.call($.pointerValue<__goscript_graph.edge>(c.edge).logger, "transport.ClientStream wrapping should never fail, streaming metrics are disabled", null)
			wrapped = stream
		}
		return wrapped
	}

	public async WrapServerStream(stream: transport.ServerStream | $.VarRef<transport.ServerStream> | null): globalThis.Promise<transport.ServerStream | $.VarRef<transport.ServerStream> | null> {
		const c = this;
		let __goscriptTuple1: any = transport.NewServerStream($.interfaceValue<transport.Stream | null>(new __goscript_stream.streamWrapper({StreamCloser: $.interfaceValue<transport.StreamCloser | null>(new __goscript_stream.nopCloser({Stream: $.interfaceValue<transport.Stream | null>(stream, "*transport.ServerStream", /* @__PURE__ */ $.pointerType("transport.ServerStream"))}, true), "observability.nopCloser", "observability.nopCloser"), call: c, edge: $.pointerValue<__goscript_graph.edge>(c.edge).streaming, logger: $.pointerValue<__goscript_graph.edge>(c.edge).logger}), "*observability.streamWrapper", /* @__PURE__ */ $.pointerType("observability.streamWrapper")), null)
		let wrapped: transport.ServerStream | $.VarRef<transport.ServerStream> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {

			await zap.Logger.prototype.DPanic.call($.pointerValue<__goscript_graph.edge>(c.edge).logger, "transport.ServerStream wrapping should never fail, streaming metrics are disabled", null)
			wrapped = stream
		}
		return wrapped
	}

	public async emitStreamError(err: $.GoError): globalThis.Promise<void> {
		const c = this;
		if (err == null) {
			return
		}

		if (!await yarpcerrors.IsStatus(err)) {
			{
				let __goscriptTuple2: any = await metrics.CounterVector.prototype.Get.call($.pointerValue<__goscript_graph.edge>(c.edge).serverFailures, $.arrayToSlice<string>(["error", "unknown_internal_yarpc", "error_name", "__not_set__"]))
				let counter: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple2[0]
				let __goscriptShadow0 = __goscriptTuple2[1]
				if (__goscriptShadow0 == null) {
					void (counter !== null && (counter as any).__isVarRef !== true && (counter as any).__goValue === undefined ? ((counter as any) as metrics.Counter).Inc() : metrics.Counter.prototype.Inc.call(counter))
				}
			}
			return
		}

		// Emit finer grained metrics since the error is a yarpcerrors.Status.
		let errCode = yarpcerrors.Status.prototype.Code.call(await yarpcerrors.FromError(err))

		switch (yarpcerrors.GetFaultTypeFromCode(yarpcerrors.Status.prototype.Code.call(await yarpcerrors.FromError(err)))) {
			case yarpcerrors.ClientFault:
			{
				{
					let __goscriptTuple3: any = await metrics.CounterVector.prototype.Get.call($.pointerValue<__goscript_graph.edge>(c.edge).callerFailures, $.arrayToSlice<string>(["error", yarpcerrors.Code_String(errCode), "error_name", "__not_set__"]))
					let counter: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple3[0]
					let err2 = __goscriptTuple3[1]
					if (err2 != null) {
						await zap.Logger.prototype.DPanic.call($.pointerValue<__goscript_graph.edge>(c.edge).logger, "could not retrieve caller failures counter", $.arrayToSlice<zap.Field>([zap.Error(err2)]))
					} else {
						void (counter !== null && (counter as any).__isVarRef !== true && (counter as any).__goValue === undefined ? ((counter as any) as metrics.Counter).Inc() : metrics.Counter.prototype.Inc.call(counter))
					}
				}
				break
			}
			case yarpcerrors.ServerFault:
			{
				{
					let __goscriptTuple4: any = await metrics.CounterVector.prototype.Get.call($.pointerValue<__goscript_graph.edge>(c.edge).serverFailures, $.arrayToSlice<string>(["error", yarpcerrors.Code_String(errCode), "error_name", "__not_set__"]))
					let counter: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple4[0]
					let err2 = __goscriptTuple4[1]
					if (err2 != null) {
						await zap.Logger.prototype.DPanic.call($.pointerValue<__goscript_graph.edge>(c.edge).logger, "could not retrieve server failures counter", $.arrayToSlice<zap.Field>([zap.Error(err2)]))
					} else {
						void (counter !== null && (counter as any).__isVarRef !== true && (counter as any).__goValue === undefined ? ((counter as any) as metrics.Counter).Inc() : metrics.Counter.prototype.Inc.call(counter))
					}
				}
				break
			}
			default:
			{
				{
					let __goscriptTuple5: any = await metrics.CounterVector.prototype.Get.call($.pointerValue<__goscript_graph.edge>(c.edge).serverFailures, $.arrayToSlice<string>(["error", yarpcerrors.Code_String(errCode), "error_name", "__not_set__"]))
					let counter: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple5[0]
					let err2 = __goscriptTuple5[1]
					if (err2 != null) {
						await zap.Logger.prototype.DPanic.call($.pointerValue<__goscript_graph.edge>(c.edge).logger, "could not retrieve server failures counter", $.arrayToSlice<zap.Field>([zap.Error(err2)]))
					} else {
						void (counter !== null && (counter as any).__isVarRef !== true && (counter as any).__goValue === undefined ? ((counter as any) as metrics.Counter).Inc() : metrics.Counter.prototype.Inc.call(counter))
					}
				}
				break
			}
		}
	}

	public async endLogs(elapsed: time.Duration, err: $.GoError, isApplicationError: boolean, applicationErrorMeta: transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null, extraLogFields: $.Slice<zap.Field>): globalThis.Promise<void> {
		const c = this;
		const applicationErrorMeta$: transport.ApplicationErrorMeta = applicationErrorMeta == null ? $.pointerTarget<transport.ApplicationErrorMeta>(applicationErrorMeta) : (applicationErrorMeta as any).__isVarRef === true ? (applicationErrorMeta as any).value : (applicationErrorMeta as any).__goValue === undefined ? (applicationErrorMeta as any) : $.pointerTarget<transport.ApplicationErrorMeta>(applicationErrorMeta)
		let appErrBitWithNoError = isApplicationError && (err == null)

		let ce: zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null = null! as zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null
		if ((err == null) && !isApplicationError) {
			let msg = "Handled inbound request."
			if (!$.stringEqual(c.direction, "inbound")) {
				msg = "Made outbound call."
			}
			ce = await zap.Logger.prototype.Check.call($.pointerValue<__goscript_graph.edge>(c.edge).logger, $.pointerValue<levels>(c.levels).success, msg)
		} else {
			let msg = "Error handling inbound request."
			if (!$.stringEqual(c.direction, "inbound")) {
				msg = "Error making outbound call."
			}

			let lvl: zapcore.Level = 0
			// use applicationError and failure logging levels
			// this is deprecated and will only be used by yarpc service
			// which have added configuration for loggers.
			if ($.pointerValue<levels>(c.levels).useApplicationErrorFailureLevels) {
				lvl = $.pointerValue<levels>(c.levels).failure

				// For logging purposes, application errors are
				//  - Thrift exceptions (appErrBitWithNoError == true)
				//  - `yarpcerror`s with error details (ie created with `encoding/protobuf.NewError`)
				//
				// This will be the least surprising behavior for users migrating from
				// Thrift exceptions to Protobuf error details.
				//
				// Unfortunately, all errors returned from a Protobuf handler are marked as
				// an application error on the 'transport.ResponseWriter'. Therefore, we
				// distinguish an application error from a regular error by inspecting if an
				// error detail was set.
				//
				// https://github.com/yarpc/yarpc-go/pull/1912
				let hasErrDetails = $.sliceLen(yarpcerrors.Status.prototype.Details.call(await yarpcerrors.FromError(err))) > 0
				if (appErrBitWithNoError || (isApplicationError && hasErrDetails)) {
					lvl = $.pointerValue<levels>(c.levels).applicationError
				}
			} else {
				let code: $.VarRef<yarpcerrors.Code> | null = null! as $.VarRef<yarpcerrors.Code> | null
				lvl = $.pointerValue<levels>(c.levels).serverError

				if (appErrBitWithNoError) {
					if ((applicationErrorMeta != null) && ((applicationErrorMeta$ as transport.ApplicationErrorMeta).Code != null)) {
						code = (applicationErrorMeta$ as transport.ApplicationErrorMeta).Code
					} else {
						lvl = $.pointerValue<levels>(c.levels).clientError
					}
				}

				if (err != null) {
					let __goscriptShadow1 = $.varRef(yarpcerrors.Status.prototype.Code.call(await yarpcerrors.FromError(err)))
					code = __goscriptShadow1
				}

				if (code != null) {
					{
						let fault = yarpcerrors.GetFaultTypeFromCode($.pointerValue<yarpcerrors.Code>(code))
						if (fault == 1) {
							lvl = $.pointerValue<levels>(c.levels).clientError
						}
					}
				}
			}

			ce = await zap.Logger.prototype.Check.call($.pointerValue<__goscript_graph.edge>(c.edge).logger, lvl, msg)
		}

		if (ce == null) {
			return
		}

		let fields: $.Slice<zapcore.Field> = $.makeSlice<zapcore.Field>(0, 10 + $.sliceLen(extraLogFields), undefined, () => new zapcore.Field(undefined, true))
		fields = $.appendOne(fields, zap.String("rpcType", transport.Type_String(c.rpcType)))
		fields = $.appendOne(fields, zap.Duration("latency", elapsed))
		fields = $.appendOne(fields, zap.Bool("successful", (err == null) && !isApplicationError))
		fields = $.appendOne(fields, (((__goscriptAwait = c.extract!(c.ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as zapcore.Field)).clone())

		// It would be nice for metricProcedure() to return zap.Skip(), but there
		// are a bunch of unit tests that fail with the included empty field.
		let metricProcedureField = metricProcedure($.pointerValue<transport.Request>(c.req).Procedure, $.pointerValue<transport.Request>(c.req).Encoding)
		if (!$.stringEqual(metricProcedureField, "")) {
			fields = $.appendOne(fields, zap.String("metricProcedure", metricProcedureField))
		}

		{
			let [deadlineTime, ok] = await $.pointerValue<Exclude<context.Context, null>>(c.ctx).Deadline()
			if (ok) {
				fields = $.appendOne(fields, zap.Duration("timeout", $.markAsStructValue($.cloneStructValue(deadlineTime)).Sub($.markAsStructValue($.cloneStructValue(c.started)))))
			}
		}

		if (appErrBitWithNoError) {
			fields = $.appendOne(fields, zap.String("error", "application_error"))
			if (applicationErrorMeta != null) {
				if ((applicationErrorMeta$ as transport.ApplicationErrorMeta).Code != null) {
					fields = $.appendOne(fields, zap.String("errorCode", yarpcerrors.Code_String($.pointerValue<yarpcerrors.Code>((applicationErrorMeta$ as transport.ApplicationErrorMeta).Code))))
				}
				if (!$.stringEqual((applicationErrorMeta$ as transport.ApplicationErrorMeta).Name, "")) {
					fields = $.appendOne(fields, zap.String("errorName", (applicationErrorMeta$ as transport.ApplicationErrorMeta).Name))
				}
				if (!$.stringEqual((applicationErrorMeta$ as transport.ApplicationErrorMeta).Details, "")) {
					fields = $.appendOne(fields, zap.String("errorDetails", (applicationErrorMeta$ as transport.ApplicationErrorMeta).Details))
				}
			}
		} else {
			if (isApplicationError) {
				fields = $.appendOne(fields, zap.Error(err))
				fields = $.appendOne(fields, zap.String("errorCode", yarpcerrors.Code_String(yarpcerrors.Status.prototype.Code.call(await yarpcerrors.FromError(err)))))
				if (applicationErrorMeta != null) {
					// ignore transport.ApplicationErrorMeta#Code, since we should get this
					// directly from the error
					if (!$.stringEqual((applicationErrorMeta$ as transport.ApplicationErrorMeta).Name, "")) {
						fields = $.appendOne(fields, zap.String("errorName", (applicationErrorMeta$ as transport.ApplicationErrorMeta).Name))
					}
					if (!$.stringEqual((applicationErrorMeta$ as transport.ApplicationErrorMeta).Details, "")) {
						fields = $.appendOne(fields, zap.String("errorDetails", (applicationErrorMeta$ as transport.ApplicationErrorMeta).Details))
					}
				}
			} else {
				if (err != null) {
					fields = $.appendOne(fields, zap.Error(err))
					fields = $.appendOne(fields, zap.String("errorCode", yarpcerrors.Code_String(yarpcerrors.Status.prototype.Code.call(await yarpcerrors.FromError(err)))))
				}
			}
		}

		fields = $.appendSlice(fields, extraLogFields)
		await (ce !== null && (ce as any).__isVarRef !== true && (ce as any).__goValue === undefined ? ((ce as any) as zapcore.CheckedEntry).Write(fields) : zapcore.CheckedEntry.prototype.Write.call(ce, fields))
	}

	public async endStats(elapsed: time.Duration, res: callResult): globalThis.Promise<void> {
		const c = this;
		metrics.Counter.prototype.Inc.call($.pointerValue<__goscript_graph.edge>(c.edge).calls)

		{
			let [deadlineTime, ok] = await $.pointerValue<Exclude<context.Context, null>>(c.ctx).Deadline()
			if (ok) {
				metrics.Histogram.prototype.Observe.call($.pointerValue<__goscript_graph.edge>(c.edge).ttls, $.markAsStructValue($.cloneStructValue(deadlineTime)).Sub($.markAsStructValue($.cloneStructValue(c.started))))
			}
		}

		metrics.Histogram.prototype.IncBucket.call($.pointerValue<__goscript_graph.edge>(c.edge).requestPayloadSizes, $.int64(res.requestSize))

		if ((res.err == null) && !res.isApplicationError) {
			metrics.Counter.prototype.Inc.call($.pointerValue<__goscript_graph.edge>(c.edge).successes)
			metrics.Histogram.prototype.Observe.call($.pointerValue<__goscript_graph.edge>(c.edge).latencies, elapsed)

			if (c.rpcType == 1) {
				metrics.Histogram.prototype.IncBucket.call($.pointerValue<__goscript_graph.edge>(c.edge).responsePayloadSizes, $.int64(res.responseSize))
			}
			return
		}

		let appErrorName = "__not_set__"
		if ((res.applicationErrorMeta != null) && (!$.stringEqual($.pointerValue<transport.ApplicationErrorMeta>(res.applicationErrorMeta).Name, ""))) {
			appErrorName = $.pointerValue<transport.ApplicationErrorMeta>(res.applicationErrorMeta).Name
		}

		if (await yarpcerrors.IsStatus(res.err)) {
			let status: yarpcerrors.Status | $.VarRef<yarpcerrors.Status> | null = await yarpcerrors.FromError(res.err)
			let errCode = (status !== null && (status as any).__isVarRef !== true && (status as any).__goValue === undefined ? ((status as any) as yarpcerrors.Status).Code() : yarpcerrors.Status.prototype.Code.call(status))
			await $.markAsStructValue($.cloneStructValue(c)).endStatsFromFault(elapsed, errCode, appErrorName)
			return
		}

		if (res.isApplicationError) {
			if ((res.applicationErrorMeta != null) && ($.pointerValue<transport.ApplicationErrorMeta>(res.applicationErrorMeta).Code != null)) {
				await $.markAsStructValue($.cloneStructValue(c)).endStatsFromFault(elapsed, $.pointerValue<yarpcerrors.Code>($.pointerValue<transport.ApplicationErrorMeta>(res.applicationErrorMeta).Code), appErrorName)
				return
			}

			// It is an application error but not a Status and no YARPC Code is found.
			// Assume it's a caller's fault and emit generic error data.
			metrics.Histogram.prototype.Observe.call($.pointerValue<__goscript_graph.edge>(c.edge).callerErrLatencies, elapsed)

			{
				let __goscriptTuple6: any = await metrics.CounterVector.prototype.Get.call($.pointerValue<__goscript_graph.edge>(c.edge).callerFailures, $.arrayToSlice<string>(["error", "application_error", "error_name", appErrorName]))
				let counter: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple6[0]
				let err = __goscriptTuple6[1]
				if (err == null) {
					void (counter !== null && (counter as any).__isVarRef !== true && (counter as any).__goValue === undefined ? ((counter as any) as metrics.Counter).Inc() : metrics.Counter.prototype.Inc.call(counter))
				}
			}
			return
		}

		metrics.Histogram.prototype.Observe.call($.pointerValue<__goscript_graph.edge>(c.edge).serverErrLatencies, elapsed)
		{
			let __goscriptTuple7: any = await metrics.CounterVector.prototype.Get.call($.pointerValue<__goscript_graph.edge>(c.edge).serverFailures, $.arrayToSlice<string>(["error", "unknown_internal_yarpc", "error_name", "__not_set__"]))
			let counter: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple7[0]
			let err = __goscriptTuple7[1]
			if (err == null) {
				void (counter !== null && (counter as any).__isVarRef !== true && (counter as any).__goValue === undefined ? ((counter as any) as metrics.Counter).Inc() : metrics.Counter.prototype.Inc.call(counter))
			}
		}
	}

	public async endStatsFromFault(elapsed: time.Duration, code: yarpcerrors.Code, applicationErrorName: string): globalThis.Promise<void> {
		const c = this;
		switch (yarpcerrors.GetFaultTypeFromCode(code)) {
			case yarpcerrors.ClientFault:
			{
				metrics.Histogram.prototype.Observe.call($.pointerValue<__goscript_graph.edge>(c.edge).callerErrLatencies, elapsed)
				{
					let __goscriptTuple8: any = await metrics.CounterVector.prototype.Get.call($.pointerValue<__goscript_graph.edge>(c.edge).callerFailures, $.arrayToSlice<string>(["error", yarpcerrors.Code_String(code), "error_name", applicationErrorName]))
					let counter: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple8[0]
					let err = __goscriptTuple8[1]
					if (err == null) {
						void (counter !== null && (counter as any).__isVarRef !== true && (counter as any).__goValue === undefined ? ((counter as any) as metrics.Counter).Inc() : metrics.Counter.prototype.Inc.call(counter))
					}
				}
				break
			}
			case yarpcerrors.ServerFault:
			{
				metrics.Histogram.prototype.Observe.call($.pointerValue<__goscript_graph.edge>(c.edge).serverErrLatencies, elapsed)
				{
					let __goscriptTuple9: any = await metrics.CounterVector.prototype.Get.call($.pointerValue<__goscript_graph.edge>(c.edge).serverFailures, $.arrayToSlice<string>(["error", yarpcerrors.Code_String(code), "error_name", applicationErrorName]))
					let counter: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple9[0]
					let err = __goscriptTuple9[1]
					if (err == null) {
						void (counter !== null && (counter as any).__isVarRef !== true && (counter as any).__goValue === undefined ? ((counter as any) as metrics.Counter).Inc() : metrics.Counter.prototype.Inc.call(counter))
					}
				}
				if (code == 4) {
					{
						let [deadlineTime, ok] = await $.pointerValue<Exclude<context.Context, null>>(c.ctx).Deadline()
						if (ok) {
							metrics.Histogram.prototype.Observe.call($.pointerValue<__goscript_graph.edge>(c.edge).timeoutTtls, $.markAsStructValue($.cloneStructValue(deadlineTime)).Sub($.markAsStructValue($.cloneStructValue(c.started))))
						}
					}
				}
				break
			}
			default:
			{
				metrics.Histogram.prototype.Observe.call($.pointerValue<__goscript_graph.edge>(c.edge).serverErrLatencies, elapsed)
				{
					let __goscriptTuple10: any = await metrics.CounterVector.prototype.Get.call($.pointerValue<__goscript_graph.edge>(c.edge).serverFailures, $.arrayToSlice<string>(["error", yarpcerrors.Code_String(code), "error_name", applicationErrorName]))
					let counter: metrics.Counter | $.VarRef<metrics.Counter> | null = __goscriptTuple10[0]
					let err = __goscriptTuple10[1]
					if (err == null) {
						void (counter !== null && (counter as any).__isVarRef !== true && (counter as any).__goValue === undefined ? ((counter as any) as metrics.Counter).Inc() : metrics.Counter.prototype.Inc.call(counter))
					}
				}
				break
			}
		}
	}

	public async endWithAppError(res: callResult, extraLogFields: $.Slice<zap.Field>): globalThis.Promise<void> {
		const c = this;
		let elapsed = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = __goscript_graph._timeNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).Sub($.markAsStructValue($.cloneStructValue(c.started)))
		await $.markAsStructValue($.cloneStructValue(c)).endLogs(elapsed, res.err, res.isApplicationError, res.applicationErrorMeta, extraLogFields)
		await $.markAsStructValue($.cloneStructValue(c)).endStats(elapsed, res)
	}

	public async logStreamEvent(err: $.GoError, success: boolean, succMsg: string, errMsg: string, extraFields: $.Slice<zap.Field>): globalThis.Promise<void> {
		const c = this;
		let ce: zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null = null! as zapcore.CheckedEntry | $.VarRef<zapcore.CheckedEntry> | null
		// Success is usually only when the error is nil.
		// The only exception is when emitting an error from ReceiveMessage, which
		// returns EOF when the stream closes normally.
		if (success) {
			ce = await zap.Logger.prototype.Check.call($.pointerValue<__goscript_graph.edge>(c.edge).logger, $.pointerValue<levels>(c.levels).success, succMsg)
		} else {
			let lvl: zapcore.Level = 0
			if ($.pointerValue<levels>(c.levels).useApplicationErrorFailureLevels) {
				lvl = $.pointerValue<levels>(c.levels).failure
			} else {
				lvl = $.pointerValue<levels>(c.levels).serverError
				let code = yarpcerrors.Status.prototype.Code.call(await yarpcerrors.FromError(err))
				{
					let fault = yarpcerrors.GetFaultTypeFromCode(code)
					if (fault == 1) {
						lvl = $.pointerValue<levels>(c.levels).clientError
					}
				}
			}

			ce = await zap.Logger.prototype.Check.call($.pointerValue<__goscript_graph.edge>(c.edge).logger, lvl, errMsg)
		}

		let fields: $.Slice<zap.Field> = $.arrayToSlice<zap.Field>([zap.String("rpcType", transport.Type_String(c.rpcType)), zap.Bool("successful", success), (((__goscriptAwait = c.extract!(c.ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as zapcore.Field)).clone(), zap.Error(err)])
		fields = $.appendSlice(fields, extraFields)

		await (ce !== null && (ce as any).__isVarRef !== true && (ce as any).__goValue === undefined ? ((ce as any) as zapcore.CheckedEntry).Write(fields) : zapcore.CheckedEntry.prototype.Write.call(ce, fields))
	}

	static __typeInfo = $.registerStructType(
		"observability.call",
		() => new call(),
		() => [$.methodSignature("End", [["res", "observability.callResult"]]), $.methodSignature("EndCallWithAppError", [["res", "observability.callResult"]]), $.methodSignature("EndHandleWithAppError", [["res", "observability.callResult"]]), $.methodSignature("EndStream", [["err", "error"]]), $.methodSignature("EndStreamHandshake"), $.methodSignature("EndStreamHandshakeWithError", [["err", "error"]]), $.methodSignature("EndStreamWithPanic", [["err", "error"]]), $.methodSignature("EndWithPanic", [["err", "error"]]), $.methodSignature("WrapClientStream", [["stream", /* @__PURE__ */ $.pointerType("transport.ClientStream")]], [/* @__PURE__ */ $.pointerType("transport.ClientStream")]), $.methodSignature("WrapServerStream", [["stream", /* @__PURE__ */ $.pointerType("transport.ServerStream")]], [/* @__PURE__ */ $.pointerType("transport.ServerStream")]), $.methodSignature("emitStreamError", [["err", "error"]]), $.methodSignature("endLogs", [["elapsed", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["err", "error"], ["isApplicationError", /* @__PURE__ */ $.basicType("bool")], ["applicationErrorMeta", /* @__PURE__ */ $.pointerType("transport.ApplicationErrorMeta")], ["extraLogFields", /* @__PURE__ */ $.sliceType("zapcore.Field")]]), $.methodSignature("endStats", [["elapsed", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["res", "observability.callResult"]]), $.methodSignature("endStatsFromFault", [["elapsed", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["code", /* @__PURE__ */ $.basicType("int", "yarpcerrors.Code")], ["applicationErrorName", /* @__PURE__ */ $.basicType("string")]]), $.methodSignature("endWithAppError", [["res", "observability.callResult"], ["extraLogFields", /* @__PURE__ */ $.sliceType("zapcore.Field")]]), $.methodSignature("logStreamEvent", [["err", "error"], ["success", /* @__PURE__ */ $.basicType("bool")], ["succMsg", /* @__PURE__ */ $.basicType("string")], ["errMsg", /* @__PURE__ */ $.basicType("string")], ["extraFields", /* @__PURE__ */ $.sliceType("zapcore.Field")]])],
		call,
		() => [/* @__PURE__ */ $.structField("edge", /* @__PURE__ */ $.pointerType("observability.edge"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("extract", ({ kind: $.TypeKind.Function, name: "observability.ContextExtractor", params: ["context.Context"], results: ["zapcore.Field"] } as $.FunctionTypeInfo), [1], 8, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("started", "time.Time", [2], 16, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("ctx", "context.Context", [3], 40, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("req", /* @__PURE__ */ $.pointerType("transport.Request"), [4], 56, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("rpcType", /* @__PURE__ */ $.basicType("int", "transport.Type"), [5], 64, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("direction", /* @__PURE__ */ $.basicType("string", "observability.directionName"), [6], 72, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("levels", /* @__PURE__ */ $.pointerType("observability.levels"), [7], 88, false, { pkgPath: "go.uber.org/yarpc/internal/observability" })]
	)
}

export class callResult {
	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get ctxOverrideErr(): $.GoError {
		return this._fields.ctxOverrideErr
	}

	public set ctxOverrideErr(value: $.GoError) {
		this._fields.ctxOverrideErr = value
	}

	public get isApplicationError(): boolean {
		return this._fields.isApplicationError
	}

	public set isApplicationError(value: boolean) {
		this._fields.isApplicationError = value
	}

	public get applicationErrorMeta(): transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null {
		return this._fields.applicationErrorMeta
	}

	public set applicationErrorMeta(value: transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null) {
		this._fields.applicationErrorMeta = value
	}

	public get requestSize(): number {
		return this._fields.requestSize
	}

	public set requestSize(value: number) {
		this._fields.requestSize = value
	}

	public get responseSize(): number {
		return this._fields.responseSize
	}

	public set responseSize(value: number) {
		this._fields.responseSize = value
	}

	public _fields: {
		err: $.GoError
		ctxOverrideErr: $.GoError
		isApplicationError: boolean
		applicationErrorMeta: transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null
		requestSize: number
		responseSize: number
	}

	constructor(init?: Partial<{err?: $.GoError, ctxOverrideErr?: $.GoError, isApplicationError?: boolean, applicationErrorMeta?: transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null, requestSize?: number, responseSize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			err: init?.err ?? (null! as $.GoError),
			ctxOverrideErr: init?.ctxOverrideErr ?? (null! as $.GoError),
			isApplicationError: init?.isApplicationError ?? (false as boolean),
			applicationErrorMeta: init?.applicationErrorMeta ?? (null! as transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null),
			requestSize: init?.requestSize ?? (0 as number),
			responseSize: init?.responseSize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): callResult {
		return new callResult(this, true)
	}

	public __goscriptAssign(source: callResult): void {
		const target = this._fields
		const values = source._fields
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.ctxOverrideErr = $.assignFieldValue(target.ctxOverrideErr, values.ctxOverrideErr, "error")
		target.isApplicationError = values.isApplicationError
		target.applicationErrorMeta = values.applicationErrorMeta
		target.requestSize = values.requestSize
		target.responseSize = values.responseSize
	}

	static __typeInfo = $.registerStructType(
		"observability.callResult",
		() => new callResult(),
		() => [],
		callResult,
		() => [/* @__PURE__ */ $.structField("err", "error", [0], 0, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("ctxOverrideErr", "error", [1], 16, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("isApplicationError", /* @__PURE__ */ $.basicType("bool"), [2], 32, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("applicationErrorMeta", /* @__PURE__ */ $.pointerType("transport.ApplicationErrorMeta"), [3], 40, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("requestSize", /* @__PURE__ */ $.basicType("int"), [4], 48, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("responseSize", /* @__PURE__ */ $.basicType("int"), [5], 56, false, { pkgPath: "go.uber.org/yarpc/internal/observability" })]
	)
}

export class levels {
	public get success(): zapcore.Level {
		return this._fields.success
	}

	public set success(value: zapcore.Level) {
		this._fields.success = value
	}

	public get failure(): zapcore.Level {
		return this._fields.failure
	}

	public set failure(value: zapcore.Level) {
		this._fields.failure = value
	}

	public get applicationError(): zapcore.Level {
		return this._fields.applicationError
	}

	public set applicationError(value: zapcore.Level) {
		this._fields.applicationError = value
	}

	public get serverError(): zapcore.Level {
		return this._fields.serverError
	}

	public set serverError(value: zapcore.Level) {
		this._fields.serverError = value
	}

	public get clientError(): zapcore.Level {
		return this._fields.clientError
	}

	public set clientError(value: zapcore.Level) {
		this._fields.clientError = value
	}

	// useApplicationErrorFailureLevels is used to know which levels should be
	// used between applicationError/failure and clientError/serverError.
	// by default serverError and clientError will be used.
	// useApplicationErrorFailureLevels should be set to true if applicationError
	// or failure are set.
	public get useApplicationErrorFailureLevels(): boolean {
		return this._fields.useApplicationErrorFailureLevels
	}

	public set useApplicationErrorFailureLevels(value: boolean) {
		this._fields.useApplicationErrorFailureLevels = value
	}

	public _fields: {
		success: zapcore.Level
		failure: zapcore.Level
		applicationError: zapcore.Level
		serverError: zapcore.Level
		clientError: zapcore.Level
		useApplicationErrorFailureLevels: boolean
	}

	constructor(init?: Partial<{success?: zapcore.Level, failure?: zapcore.Level, applicationError?: zapcore.Level, serverError?: zapcore.Level, clientError?: zapcore.Level, useApplicationErrorFailureLevels?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			success: init?.success ?? (0 as zapcore.Level),
			failure: init?.failure ?? (0 as zapcore.Level),
			applicationError: init?.applicationError ?? (0 as zapcore.Level),
			serverError: init?.serverError ?? (0 as zapcore.Level),
			clientError: init?.clientError ?? (0 as zapcore.Level),
			useApplicationErrorFailureLevels: init?.useApplicationErrorFailureLevels ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): levels {
		return new levels(this, true)
	}

	public __goscriptAssign(source: levels): void {
		const target = this._fields
		const values = source._fields
		target.success = values.success
		target.failure = values.failure
		target.applicationError = values.applicationError
		target.serverError = values.serverError
		target.clientError = values.clientError
		target.useApplicationErrorFailureLevels = values.useApplicationErrorFailureLevels
	}

	static __typeInfo = $.registerStructType(
		"observability.levels",
		() => new levels(),
		() => [],
		levels,
		() => [/* @__PURE__ */ $.structField("success", /* @__PURE__ */ $.basicType("int8", "zapcore.Level"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("failure", /* @__PURE__ */ $.basicType("int8", "zapcore.Level"), [1], 1, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("applicationError", /* @__PURE__ */ $.basicType("int8", "zapcore.Level"), [2], 2, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("serverError", /* @__PURE__ */ $.basicType("int8", "zapcore.Level"), [3], 3, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("clientError", /* @__PURE__ */ $.basicType("int8", "zapcore.Level"), [4], 4, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("useApplicationErrorFailureLevels", /* @__PURE__ */ $.basicType("bool"), [5], 5, false, { pkgPath: "go.uber.org/yarpc/internal/observability" })]
	)
}

export const _error: string = "error"

export const _errorNameMetricsKey: string = "error_name"

export const _notSet: string = "__not_set__"

export const _errorNameLogKey: string = "errorName"

export const _errorCodeLogKey: string = "errorCode"

export const _errorDetailsLogKey: string = "errorDetails"

export const _successfulInbound: string = "Handled inbound request."

export const _successfulOutbound: string = "Made outbound call."

export const _errorInbound: string = "Error handling inbound request."

export const _errorOutbound: string = "Error making outbound call."

export const _successStreamOpen: string = "Successfully created stream"

export const _successStreamClose: string = "Successfully closed stream"

export const _errorStreamOpen: string = "Error creating stream"

export const _errorStreamClose: string = "Error closing stream"

export const _dropped: string = "dropped"

export const _droppedAppErrLog: string = "dropped application error due to context timeout or cancelation"

export const _droppedErrLogFmt: string = "dropped error due to context timeout or cancelation: %v"

export const _droppedSuccessLog: string = "dropped handler success due to context timeout or cancelation"

export function metricProcedure(procedure: string, encoding: string): string {
	if ($.stringEqual(procedure, "")) {
		return "__no_procedure__"
	}

	if (((!$.stringEqual(encoding, "proto")) && (!$.stringEqual(encoding, "json"))) && (!$.stringEqual(encoding, "thrift"))) {
		return ""
	}

	return encodeMetricProcedure(procedure, $.stringEqual(encoding, "thrift"))
}

export function encodeMetricProcedure(procedure: string, thrift: boolean): string {
	let b: $.Slice<number> = $.stringToBytes(procedure)
	let w: number = 0

	for (let __goscriptSliceWindow0 = $.sliceRange(b), i = 0; i < __goscriptSliceWindow0.length; i++) {
		if (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number) == 46) {
			w = 0
			continue
		}

		if (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number) == 58) {
			if (thrift) {
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, w)] = 45
				w++;
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, w)] = 45
			} else {
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, w)] = 47
			}

			i++
		} else {
			if ((65 <= ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number)) && (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number) <= 90)) {
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, w)] = $.uint(((((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number) + 32) & 0xff), 8)
			} else {
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, w)] = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number)
			}
		}

		w++
	}

	return $.bytesToString($.goSlice(b, undefined, w))
}

export async function errToMetricString(err: $.GoError): globalThis.Promise<string> {
	if (await yarpcerrors.IsStatus(err)) {
		return yarpcerrors.Code_String(yarpcerrors.Status.prototype.Code.call(await yarpcerrors.FromError(err)))
	}
	return "unknown_internal_yarpc"
}

var __goscriptAwait: any
