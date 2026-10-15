// Generated file based on middleware.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as sync from "@goscript/sync/index.js"

import * as metrics from "@goscript/go.uber.org/net/metrics/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_call from "./call.gs.ts"

import * as __goscript_extractor from "./extractor.gs.ts"

import * as __goscript_graph from "./graph.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"
import "@goscript/context/index.js"
import "@goscript/sync/index.js"
import "@goscript/go.uber.org/net/metrics/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/io/index.js"
import "@goscript/time/index.js"
import "./call.gs.ts"
import "./extractor.gs.ts"
import "./graph.gs.ts"
import "./stream.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/internal/observability", ["observability.writer", "observability.Middleware", "observability.Config", "observability.LevelsConfig", "observability.DirectionalLevelsConfig"])

export class writer {
	public get ResponseWriter(): transport.ResponseWriter | null {
		return this._fields.ResponseWriter
	}

	public set ResponseWriter(value: transport.ResponseWriter | null) {
		this._fields.ResponseWriter = value
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

	public get responseSize(): number {
		return this._fields.responseSize
	}

	public set responseSize(value: number) {
		this._fields.responseSize = value
	}

	public _fields: {
		ResponseWriter: transport.ResponseWriter | null
		isApplicationError: boolean
		applicationErrorMeta: transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null
		responseSize: number
	}

	constructor(init?: Partial<{ResponseWriter?: transport.ResponseWriter | null, isApplicationError?: boolean, applicationErrorMeta?: transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null, responseSize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			ResponseWriter: init?.ResponseWriter ?? (null! as transport.ResponseWriter | null),
			isApplicationError: init?.isApplicationError ?? (false as boolean),
			applicationErrorMeta: init?.applicationErrorMeta ?? (null! as transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null),
			responseSize: init?.responseSize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): writer {
		return new writer(this, true)
	}

	public __goscriptAssign(source: writer): void {
		const target = this._fields
		const values = source._fields
		target.ResponseWriter = $.assignFieldValue(target.ResponseWriter, values.ResponseWriter, "transport.ResponseWriter")
		target.isApplicationError = values.isApplicationError
		target.applicationErrorMeta = values.applicationErrorMeta
		target.responseSize = values.responseSize
	}

	public async SetApplicationError(): globalThis.Promise<void> {
		let w: writer | $.VarRef<writer> | null = this;
		const w$: writer = w == null ? $.pointerTarget<writer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<writer>(w);
		;(w$ as writer).isApplicationError = true
		void (__goscriptAwait = $.pointerValue<Exclude<transport.ResponseWriter, null>>((w$ as writer).ResponseWriter).SetApplicationError(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async SetApplicationErrorMeta(applicationErrorMeta: transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null): globalThis.Promise<void> {
		let w: writer | $.VarRef<writer> | null = this;
		const w$: writer = w == null ? $.pointerTarget<writer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<writer>(w)
		if (applicationErrorMeta == null) {
			return
		}

		;(w$ as writer).applicationErrorMeta = applicationErrorMeta
		{
			let [appErrMetaSetter, ok] = $.typeAssertTuple<transport.ApplicationErrorMetaSetter | null>((w$ as writer).ResponseWriter, "transport.ApplicationErrorMetaSetter")
			if (ok) {
				void (__goscriptAwait = (appErrMetaSetter !== null && (appErrMetaSetter as any).__isVarRef !== true && (appErrMetaSetter as any).__goValue === undefined ? (appErrMetaSetter as Exclude<transport.ApplicationErrorMetaSetter, null>) : $.pointerValue<Exclude<transport.ApplicationErrorMetaSetter, null>>(appErrMetaSetter)).SetApplicationErrorMeta(applicationErrorMeta), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let w: writer | $.VarRef<writer> | null = this;
		let n: number = 0
		let err: $.GoError = null! as $.GoError
		const w$: writer = w == null ? $.pointerTarget<writer>(w) : (w as any).__isVarRef === true ? (w as any).value : (w as any).__goValue === undefined ? (w as any) : $.pointerTarget<writer>(w);
		;(w$ as writer).responseSize = (w$ as writer).responseSize + ($.sliceLen(p))
		return $.pointerValue<Exclude<transport.ResponseWriter, null>>((w$ as writer).ResponseWriter).Write(p)
	}

	public free(): void {
		const w: writer | $.VarRef<writer> | null = this;
		_writerPool.value.Put($.interfaceValue(w, "*observability.writer", /* @__PURE__ */ $.pointerType("observability.writer")))
	}

	public AddHeaders(_p0: any): any {
		return $.pointerValue<Exclude<transport.ResponseWriter | null, null>>(this.ResponseWriter).AddHeaders(_p0)
	}

	static __typeInfo = $.registerStructType(
		"observability.writer",
		() => new writer(),
		() => [$.methodSignature("SetApplicationError", [], [], true), $.methodSignature("SetApplicationErrorMeta", [["applicationErrorMeta", /* @__PURE__ */ $.pointerType("transport.ApplicationErrorMeta")]], [], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("free", [], [], true), $.methodSignature("AddHeaders", ["transport.Headers"])],
		writer,
		() => [/* @__PURE__ */ $.structField("ResponseWriter", "transport.ResponseWriter", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("isApplicationError", /* @__PURE__ */ $.basicType("bool"), [1], 16, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("applicationErrorMeta", /* @__PURE__ */ $.pointerType("transport.ApplicationErrorMeta"), [2], 24, false, { pkgPath: "go.uber.org/yarpc/internal/observability" }), /* @__PURE__ */ $.structField("responseSize", /* @__PURE__ */ $.basicType("int"), [3], 32, false, { pkgPath: "go.uber.org/yarpc/internal/observability" })]
	)
}

export class Middleware {
	public get graph(): __goscript_graph.graph {
		return this._fields.graph
	}

	public set graph(value: __goscript_graph.graph) {
		this._fields.graph = value
	}

	public _fields: {
		graph: __goscript_graph.graph
	}

	constructor(init?: Partial<{graph?: __goscript_graph.graph}>, __goscriptValue?: boolean) {
		this._fields = {
			graph: init?.graph ? init.graph.clone() : new __goscript_graph.graph(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Middleware {
		return new Middleware(this, true)
	}

	public __goscriptAssign(source: Middleware): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.graph, values.graph)
	}

	public async Call(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null, out: transport.UnaryOutbound | null): globalThis.Promise<[transport.Response | $.VarRef<transport.Response> | null, $.GoError]> {
		const m: Middleware | $.VarRef<Middleware> | null = this;
		const __defer = new $.AsyncDisposableStack()
		try {
			let __goscriptShadow0 = await $.pointerValue<Middleware>(m).graph.begin(ctx, 1, "outbound", req)
			const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (call: __goscript_call.call, transportType: transport.Type) => __receiver.handlePanicForCall(call, transportType))($.pointerValue<Middleware>(m)), ({ kind: $.TypeKind.Function, params: ["observability.call", /* @__PURE__ */ $.basicType("int", "transport.Type")], results: [] } as $.FunctionTypeInfo), "go.uber.org/yarpc/internal/observability.(*Middleware).handlePanicForCall-fm")
			const __goscriptDeferArg0 = (__goscriptShadow0).clone()
			__defer.defer(async () => { await __goscriptDeferCallee0(__goscriptDeferArg0, 1) })

			let __goscriptTuple0: any = await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<transport.UnaryOutbound, null>) : $.pointerValue<Exclude<transport.UnaryOutbound, null>>(out)).Call(ctx, req)
			let res: transport.Response | $.VarRef<transport.Response> | null = __goscriptTuple0[0]
			let err = __goscriptTuple0[1]
			let res$: transport.Response = res == null ? $.pointerTarget<transport.Response>(res) : (res as any).__isVarRef === true ? (res as any).value : (res as any).__goValue === undefined ? (res as any) : $.pointerTarget<transport.Response>(res)

			let isApplicationError = false
			let applicationErrorMeta: transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null = null! as transport.ApplicationErrorMeta | $.VarRef<transport.ApplicationErrorMeta> | null
			let responseSize: number = 0
			if (res != null) {
				isApplicationError = (res$ as transport.Response).ApplicationError
				applicationErrorMeta = (res$ as transport.Response).ApplicationErrorMeta
				responseSize = (res$ as transport.Response).BodySize
			}
			let callRes = new __goscript_call.callResult({err: err, isApplicationError: isApplicationError, applicationErrorMeta: applicationErrorMeta, requestSize: $.pointerValue<transport.Request>(req).BodySize, responseSize: responseSize}, true)
			await __goscriptShadow0.EndCallWithAppError(callRes)
			return [res, err]
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return [null! as transport.Response | $.VarRef<transport.Response> | null, null! as $.GoError]
	}

	public async CallOneway(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null, out: transport.OnewayOutbound | null): globalThis.Promise<[transport.Ack | null, $.GoError]> {
		const m: Middleware | $.VarRef<Middleware> | null = this;
		const __defer = new $.AsyncDisposableStack()
		try {
			let __goscriptShadow1 = await $.pointerValue<Middleware>(m).graph.begin(ctx, 2, "outbound", req)
			const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (call: __goscript_call.call, transportType: transport.Type) => __receiver.handlePanicForCall(call, transportType))($.pointerValue<Middleware>(m)), ({ kind: $.TypeKind.Function, params: ["observability.call", /* @__PURE__ */ $.basicType("int", "transport.Type")], results: [] } as $.FunctionTypeInfo), "go.uber.org/yarpc/internal/observability.(*Middleware).handlePanicForCall-fm")
			const __goscriptDeferArg1 = (__goscriptShadow1).clone()
			__defer.defer(async () => { await __goscriptDeferCallee1(__goscriptDeferArg1, 2) })

			let [ack, err] = await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<transport.OnewayOutbound, null>) : $.pointerValue<Exclude<transport.OnewayOutbound, null>>(out)).CallOneway(ctx, req)
			await __goscriptShadow1.End(new __goscript_call.callResult({err: err, requestSize: $.pointerValue<transport.Request>(req).BodySize}, true))
			return [ack, err]
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return [null! as transport.Ack | null, null! as $.GoError]
	}

	public async CallStream(ctx: context.Context | null, request: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null, out: transport.StreamOutbound | null): globalThis.Promise<[transport.ClientStream | $.VarRef<transport.ClientStream> | null, $.GoError]> {
		const m: Middleware | $.VarRef<Middleware> | null = this;
		const __defer = new $.AsyncDisposableStack()
		try {
			let __goscriptShadow2 = await $.pointerValue<Middleware>(m).graph.begin(ctx, 3, "outbound", transport.RequestMeta.prototype.ToRequest.call($.pointerValue<transport.StreamRequest>(request).Meta))
			const __goscriptDeferCallee2 = $.functionValue(((__receiver) => (call: __goscript_call.call, transportType: transport.Type) => __receiver.handlePanicForCall(call, transportType))($.pointerValue<Middleware>(m)), ({ kind: $.TypeKind.Function, params: ["observability.call", /* @__PURE__ */ $.basicType("int", "transport.Type")], results: [] } as $.FunctionTypeInfo), "go.uber.org/yarpc/internal/observability.(*Middleware).handlePanicForCall-fm")
			const __goscriptDeferArg2 = (__goscriptShadow2).clone()
			__defer.defer(async () => { await __goscriptDeferCallee2(__goscriptDeferArg2, 3) })

			// TODO: metrics for outbound stream and inbound stream are not reported
			// in the same way. HandleStream increases the metric calls by 1 before passing
			// the request while CallStream does it after passing the request.
			// In case of panics in CallStream, the metrics calls will not be increased
			// while it will in HandleStream.
			let __goscriptTuple1: any = await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<transport.StreamOutbound, null>) : $.pointerValue<Exclude<transport.StreamOutbound, null>>(out)).CallStream(ctx, request)
			let clientStream: transport.ClientStream | $.VarRef<transport.ClientStream> | null = __goscriptTuple1[0]
			let err = __goscriptTuple1[1]
			await $.markAsStructValue($.cloneStructValue(__goscriptShadow2)).EndStreamHandshakeWithError(err)
			if (err != null) {
				return [null, err]
			}
			return [await $.markAsStructValue($.cloneStructValue(__goscriptShadow2)).WrapClientStream(clientStream), null]
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return [null! as transport.ClientStream | $.VarRef<transport.ClientStream> | null, null! as $.GoError]
	}

	public async Handle(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null, w: transport.ResponseWriter | null, h: transport.UnaryHandler | null): globalThis.Promise<$.GoError> {
		const m: Middleware | $.VarRef<Middleware> | null = this;
		const __defer = new $.AsyncDisposableStack()
		try {
			let __goscriptShadow3 = await $.pointerValue<Middleware>(m).graph.begin(ctx, 1, "inbound", req)
			const __goscriptDeferCallee3 = $.functionValue(((__receiver) => (call: __goscript_call.call, transportType: transport.Type) => __receiver.handlePanicForCall(call, transportType))($.pointerValue<Middleware>(m)), ({ kind: $.TypeKind.Function, params: ["observability.call", /* @__PURE__ */ $.basicType("int", "transport.Type")], results: [] } as $.FunctionTypeInfo), "go.uber.org/yarpc/internal/observability.(*Middleware).handlePanicForCall-fm")
			const __goscriptDeferArg3 = (__goscriptShadow3).clone()
			__defer.defer(async () => { await __goscriptDeferCallee3(__goscriptDeferArg3, 1) })

			let wrappedWriter: writer | $.VarRef<writer> | null = await newWriter(w)
			let wrappedWriter$: writer = wrappedWriter == null ? $.pointerTarget<writer>(wrappedWriter) : (wrappedWriter as any).__isVarRef === true ? (wrappedWriter as any).value : (wrappedWriter as any).__goValue === undefined ? (wrappedWriter as any) : $.pointerTarget<writer>(wrappedWriter)
			let err = (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<transport.UnaryHandler, null>) : $.pointerValue<Exclude<transport.UnaryHandler, null>>(h)).Handle(ctx, req, $.interfaceValue<transport.ResponseWriter | null>(wrappedWriter, "*observability.writer", /* @__PURE__ */ $.pointerType("observability.writer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			let ctxErr = await ctxErrOverride(ctx, req)

			await __goscriptShadow3.EndHandleWithAppError(new __goscript_call.callResult({err: err, ctxOverrideErr: ctxErr, isApplicationError: (wrappedWriter$ as writer).isApplicationError, applicationErrorMeta: (wrappedWriter$ as writer).applicationErrorMeta, requestSize: $.pointerValue<transport.Request>(req).BodySize, responseSize: (wrappedWriter$ as writer).responseSize}, true))

			if (ctxErr != null) {
				err = ctxErr
			}
			void (wrappedWriter !== null && (wrappedWriter as any).__isVarRef !== true && (wrappedWriter as any).__goValue === undefined ? ((wrappedWriter as any) as writer).free() : writer.prototype.free.call(wrappedWriter))
			return err
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return null! as $.GoError
	}

	public async HandleOneway(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null, h: transport.OnewayHandler | null): globalThis.Promise<$.GoError> {
		const m: Middleware | $.VarRef<Middleware> | null = this;
		const __defer = new $.AsyncDisposableStack()
		try {
			let __goscriptShadow4 = await $.pointerValue<Middleware>(m).graph.begin(ctx, 2, "inbound", req)
			const __goscriptDeferCallee4 = $.functionValue(((__receiver) => (call: __goscript_call.call, transportType: transport.Type) => __receiver.handlePanicForCall(call, transportType))($.pointerValue<Middleware>(m)), ({ kind: $.TypeKind.Function, params: ["observability.call", /* @__PURE__ */ $.basicType("int", "transport.Type")], results: [] } as $.FunctionTypeInfo), "go.uber.org/yarpc/internal/observability.(*Middleware).handlePanicForCall-fm")
			const __goscriptDeferArg4 = (__goscriptShadow4).clone()
			__defer.defer(async () => { await __goscriptDeferCallee4(__goscriptDeferArg4, 2) })

			let err = (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<transport.OnewayHandler, null>) : $.pointerValue<Exclude<transport.OnewayHandler, null>>(h)).HandleOneway(ctx, req), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await __goscriptShadow4.End(new __goscript_call.callResult({err: err, requestSize: $.pointerValue<transport.Request>(req).BodySize}, true))
			return err
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return null! as $.GoError
	}

	public async HandleStream(serverStream: transport.ServerStream | $.VarRef<transport.ServerStream> | null, h: transport.StreamHandler | null): globalThis.Promise<$.GoError> {
		const m: Middleware | $.VarRef<Middleware> | null = this;
		const __defer = new $.AsyncDisposableStack()
		try {
			let __goscriptShadow5 = await $.pointerValue<Middleware>(m).graph.begin(await (serverStream !== null && (serverStream as any).__isVarRef !== true && (serverStream as any).__goValue === undefined ? ((serverStream as any) as transport.ServerStream).Context() : transport.ServerStream.prototype.Context.call(serverStream)), 3, "inbound", transport.RequestMeta.prototype.ToRequest.call($.pointerValue<transport.StreamRequest>(await (serverStream !== null && (serverStream as any).__isVarRef !== true && (serverStream as any).__goValue === undefined ? ((serverStream as any) as transport.ServerStream).Request() : transport.ServerStream.prototype.Request.call(serverStream))).Meta))
			const __goscriptDeferCallee5 = $.functionValue(((__receiver) => (call: __goscript_call.call, transportType: transport.Type) => __receiver.handlePanicForCall(call, transportType))($.pointerValue<Middleware>(m)), ({ kind: $.TypeKind.Function, params: ["observability.call", /* @__PURE__ */ $.basicType("int", "transport.Type")], results: [] } as $.FunctionTypeInfo), "go.uber.org/yarpc/internal/observability.(*Middleware).handlePanicForCall-fm")
			const __goscriptDeferArg5 = (__goscriptShadow5).clone()
			__defer.defer(async () => { await __goscriptDeferCallee5(__goscriptDeferArg5, 3) })

			await __goscriptShadow5.EndStreamHandshake()
			let err = (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<transport.StreamHandler, null>) : $.pointerValue<Exclude<transport.StreamHandler, null>>(h)).HandleStream(await $.markAsStructValue($.cloneStructValue(__goscriptShadow5)).WrapServerStream(serverStream)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await $.markAsStructValue($.cloneStructValue(__goscriptShadow5)).EndStream(err)
			return err
			await __defer.dispose()
		} catch (e) {
			await __defer.disposePanic(e)
			if (!$.recovered(e)) {
				throw e
			}
		}
		return null! as $.GoError
	}

	public async handlePanicForCall(call: __goscript_call.call, transportType: transport.Type): globalThis.Promise<void> {
		const m: Middleware | $.VarRef<Middleware> | null = this;
		// We only want to emit panic metrics without actually recovering from it
		// Actual recovery from a panic happens at top of the stack in transport's Handler Invoker
		// As this middleware is the one and only one with Metrics responsibility, we just panic again after
		// checking for panic without actually recovering from it.
		{
			let e = $.recover()
			if (e != null) {
				let err = yarpcerrors.InternalErrorf("panic %v", $.arrayToSlice<any>([e]))
				// Emit only the panic metrics
				if (transportType == 3) {
					await $.markAsStructValue($.cloneStructValue(call)).EndStreamWithPanic(err)
				} else {
					await $.markAsStructValue($.cloneStructValue(call)).EndWithPanic(err)
				}
				$.panic(e)
			}
		}
	}

	static __typeInfo = $.registerStructType(
		"observability.Middleware",
		() => new Middleware(),
		() => [$.methodSignature("Call", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["out", "transport.UnaryOutbound"]], [/* @__PURE__ */ $.pointerType("transport.Response"), "error"], true), $.methodSignature("CallOneway", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["out", "transport.OnewayOutbound"]], ["transport.Ack", "error"], true), $.methodSignature("CallStream", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.StreamRequest")], ["out", "transport.StreamOutbound"]], [/* @__PURE__ */ $.pointerType("transport.ClientStream"), "error"], true), $.methodSignature("Handle", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["w", "transport.ResponseWriter"], ["h", "transport.UnaryHandler"]], ["error"], true), $.methodSignature("HandleOneway", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["h", "transport.OnewayHandler"]], ["error"], true), $.methodSignature("HandleStream", [["serverStream", /* @__PURE__ */ $.pointerType("transport.ServerStream")], ["h", "transport.StreamHandler"]], ["error"], true), $.methodSignature("handlePanicForCall", [["call", "observability.call"], ["transportType", /* @__PURE__ */ $.basicType("int", "transport.Type")]], [], true)],
		Middleware,
		() => [/* @__PURE__ */ $.structField("graph", "observability.graph", [0], 0, false, { pkgPath: "go.uber.org/yarpc/internal/observability" })]
	)
}

export class DirectionalLevelsConfig {
	// Log level used to log successful calls.
	//
	// Defaults to DebugLevel.
	public get Success(): $.VarRef<zapcore.Level> | null {
		return this._fields.Success
	}

	public set Success(value: $.VarRef<zapcore.Level> | null) {
		this._fields.Success = value
	}

	// Log level used to log failed calls.
	// This includes low-level network errors, TChannel error frames, etc.
	//
	// Defaults to ErrorLevel.
	// Deprecated in favor of ServerError and ClientError.
	public get Failure(): $.VarRef<zapcore.Level> | null {
		return this._fields.Failure
	}

	public set Failure(value: $.VarRef<zapcore.Level> | null) {
		this._fields.Failure = value
	}

	// Log level used to log calls that failed with an application error.
	// All Thrift exceptions are considered application errors.
	//
	// Defaults to ErrorLevel.
	// Deprecated in favor of ServerError and ClientError.
	public get ApplicationError(): $.VarRef<zapcore.Level> | null {
		return this._fields.ApplicationError
	}

	public set ApplicationError(value: $.VarRef<zapcore.Level> | null) {
		this._fields.ApplicationError = value
	}

	// Log level used to log calls that failed with an server error.
	//
	// Defaults to ErrorLevel.
	public get ServerError(): $.VarRef<zapcore.Level> | null {
		return this._fields.ServerError
	}

	public set ServerError(value: $.VarRef<zapcore.Level> | null) {
		this._fields.ServerError = value
	}

	// Log level used to log calls that failed with an client error.
	// All Thrift exceptions are considered application errors if
	// there are not annotated with the option rpc.code.
	//
	// Defaults to WarnLevel for inbound requests, ErrorLevel for outbound requests.
	public get ClientError(): $.VarRef<zapcore.Level> | null {
		return this._fields.ClientError
	}

	public set ClientError(value: $.VarRef<zapcore.Level> | null) {
		this._fields.ClientError = value
	}

	public _fields: {
		Success: $.VarRef<zapcore.Level> | null
		Failure: $.VarRef<zapcore.Level> | null
		ApplicationError: $.VarRef<zapcore.Level> | null
		ServerError: $.VarRef<zapcore.Level> | null
		ClientError: $.VarRef<zapcore.Level> | null
	}

	constructor(init?: Partial<{Success?: $.VarRef<zapcore.Level> | null, Failure?: $.VarRef<zapcore.Level> | null, ApplicationError?: $.VarRef<zapcore.Level> | null, ServerError?: $.VarRef<zapcore.Level> | null, ClientError?: $.VarRef<zapcore.Level> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Success: init?.Success ?? (null! as $.VarRef<zapcore.Level> | null),
			Failure: init?.Failure ?? (null! as $.VarRef<zapcore.Level> | null),
			ApplicationError: init?.ApplicationError ?? (null! as $.VarRef<zapcore.Level> | null),
			ServerError: init?.ServerError ?? (null! as $.VarRef<zapcore.Level> | null),
			ClientError: init?.ClientError ?? (null! as $.VarRef<zapcore.Level> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): DirectionalLevelsConfig {
		return new DirectionalLevelsConfig(this, true)
	}

	public __goscriptAssign(source: DirectionalLevelsConfig): void {
		const target = this._fields
		const values = source._fields
		target.Success = values.Success
		target.Failure = values.Failure
		target.ApplicationError = values.ApplicationError
		target.ServerError = values.ServerError
		target.ClientError = values.ClientError
	}

	static __typeInfo = $.registerStructType(
		"observability.DirectionalLevelsConfig",
		() => new DirectionalLevelsConfig(),
		() => [],
		DirectionalLevelsConfig,
		() => [/* @__PURE__ */ $.structField("Success", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [0], 0, true), /* @__PURE__ */ $.structField("Failure", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [1], 8, true), /* @__PURE__ */ $.structField("ApplicationError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [2], 16, true), /* @__PURE__ */ $.structField("ServerError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [3], 24, true), /* @__PURE__ */ $.structField("ClientError", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int8", "zapcore.Level")), [4], 32, true)]
	)
}

export class LevelsConfig {
	public get Default(): DirectionalLevelsConfig {
		return this._fields.Default
	}

	public set Default(value: DirectionalLevelsConfig) {
		this._fields.Default = value
	}

	public get Inbound(): DirectionalLevelsConfig {
		return this._fields.Inbound
	}

	public set Inbound(value: DirectionalLevelsConfig) {
		this._fields.Inbound = value
	}

	public get Outbound(): DirectionalLevelsConfig {
		return this._fields.Outbound
	}

	public set Outbound(value: DirectionalLevelsConfig) {
		this._fields.Outbound = value
	}

	public _fields: {
		Default: DirectionalLevelsConfig
		Inbound: DirectionalLevelsConfig
		Outbound: DirectionalLevelsConfig
	}

	constructor(init?: Partial<{Default?: DirectionalLevelsConfig, Inbound?: DirectionalLevelsConfig, Outbound?: DirectionalLevelsConfig}>, __goscriptValue?: boolean) {
		this._fields = {
			Default: init?.Default ? init.Default.clone() : new DirectionalLevelsConfig(undefined, true),
			Inbound: init?.Inbound ? init.Inbound.clone() : new DirectionalLevelsConfig(undefined, true),
			Outbound: init?.Outbound ? init.Outbound.clone() : new DirectionalLevelsConfig(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): LevelsConfig {
		return new LevelsConfig(this, true)
	}

	public __goscriptAssign(source: LevelsConfig): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Default, values.Default)
		$.assignStruct(target.Inbound, values.Inbound)
		$.assignStruct(target.Outbound, values.Outbound)
	}

	static __typeInfo = $.registerStructType(
		"observability.LevelsConfig",
		() => new LevelsConfig(),
		() => [],
		LevelsConfig,
		() => [/* @__PURE__ */ $.structField("Default", "observability.DirectionalLevelsConfig", [0], 0, true), /* @__PURE__ */ $.structField("Inbound", "observability.DirectionalLevelsConfig", [1], 40, true), /* @__PURE__ */ $.structField("Outbound", "observability.DirectionalLevelsConfig", [2], 80, true)]
	)
}

export class Config {
	// Logger to which messages will be logged.
	public get Logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.Logger
	}

	public set Logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.Logger = value
	}

	// Scope to which metrics are emitted.
	public get Scope(): metrics.Scope | $.VarRef<metrics.Scope> | null {
		return this._fields.Scope
	}

	public set Scope(value: metrics.Scope | $.VarRef<metrics.Scope> | null) {
		this._fields.Scope = value
	}

	// MetricTagsBlocklist of metric tags being suppressed from being tagged on
	// metrics emitted by the middleware.
	public get MetricTagsBlocklist(): $.Slice<string> {
		return this._fields.MetricTagsBlocklist
	}

	public set MetricTagsBlocklist(value: $.Slice<string>) {
		this._fields.MetricTagsBlocklist = value
	}

	// ContextExtractor Extracts request-scoped information from the context for logging.
	public get ContextExtractor(): ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null {
		return this._fields.ContextExtractor
	}

	public set ContextExtractor(value: ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null) {
		this._fields.ContextExtractor = value
	}

	// Levels specify log levels for various classes of requests.
	public get Levels(): LevelsConfig {
		return this._fields.Levels
	}

	public set Levels(value: LevelsConfig) {
		this._fields.Levels = value
	}

	public _fields: {
		Logger: zap.Logger | $.VarRef<zap.Logger> | null
		Scope: metrics.Scope | $.VarRef<metrics.Scope> | null
		MetricTagsBlocklist: $.Slice<string>
		ContextExtractor: ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null
		Levels: LevelsConfig
	}

	constructor(init?: Partial<{Logger?: zap.Logger | $.VarRef<zap.Logger> | null, Scope?: metrics.Scope | $.VarRef<metrics.Scope> | null, MetricTagsBlocklist?: $.Slice<string>, ContextExtractor?: ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null, Levels?: LevelsConfig}>, __goscriptValue?: boolean) {
		this._fields = {
			Logger: init?.Logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null),
			Scope: init?.Scope ?? (null! as metrics.Scope | $.VarRef<metrics.Scope> | null),
			MetricTagsBlocklist: init?.MetricTagsBlocklist ?? (null! as $.Slice<string>),
			ContextExtractor: init?.ContextExtractor ?? (null! as ((_p0: context.Context | null) => zapcore.Field | globalThis.Promise<zapcore.Field>) | null),
			Levels: init?.Levels ? init.Levels.clone() : new LevelsConfig(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Config {
		return new Config(this, true)
	}

	public __goscriptAssign(source: Config): void {
		const target = this._fields
		const values = source._fields
		target.Logger = values.Logger
		target.Scope = values.Scope
		target.MetricTagsBlocklist = values.MetricTagsBlocklist
		target.ContextExtractor = values.ContextExtractor
		$.assignStruct(target.Levels, values.Levels)
	}

	static __typeInfo = $.registerStructType(
		"observability.Config",
		() => new Config(),
		() => [],
		Config,
		() => [/* @__PURE__ */ $.structField("Logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [0], 0, true), /* @__PURE__ */ $.structField("Scope", /* @__PURE__ */ $.pointerType("metrics.Scope"), [1], 8, true), /* @__PURE__ */ $.structField("MetricTagsBlocklist", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [2], 16, true), /* @__PURE__ */ $.structField("ContextExtractor", ({ kind: $.TypeKind.Function, name: "observability.ContextExtractor", params: ["context.Context"], results: ["zapcore.Field"] } as $.FunctionTypeInfo), [3], 40, true), /* @__PURE__ */ $.structField("Levels", "observability.LevelsConfig", [4], 48, true)]
	)
}

export let _writerPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(new writer(), "*observability.writer", /* @__PURE__ */ $.pointerType("observability.writer"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set__writerPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(_writerPool.value, __goscriptValue)
}

export async function newWriter(rw: transport.ResponseWriter | null): globalThis.Promise<writer | $.VarRef<writer> | null> {
	let w: writer | $.VarRef<writer> | null = $.mustTypeAssert<writer | $.VarRef<writer> | null>(await _writerPool.value.Get(), /* @__PURE__ */ $.pointerType("observability.writer"))
	$.assignStruct($.pointerValue<writer>(w), new writer({ResponseWriter: rw}, true))
	return w
}

export function NewMiddleware(cfg: Config): Middleware | $.VarRef<Middleware> | null {
	let m: Middleware | $.VarRef<Middleware> | null = (() => { const __goscriptLiteralField0 = __goscript_graph.newGraph(cfg.Scope, cfg.Logger, cfg.ContextExtractor, cfg.MetricTagsBlocklist); return new Middleware({graph: __goscriptLiteralField0}) })()
	let m$: Middleware = m == null ? $.pointerTarget<Middleware>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<Middleware>(m)

	// Apply the default levels
	applyLogLevelsConfig($.fieldRef((m$ as Middleware).graph._fields, "inboundLevels"), $.fieldRef(cfg.Levels._fields, "Default"))
	applyLogLevelsConfig($.fieldRef((m$ as Middleware).graph._fields, "outboundLevels"), $.fieldRef(cfg.Levels._fields, "Default"))
	// Override with direction-specific levels
	applyLogLevelsConfig($.fieldRef((m$ as Middleware).graph._fields, "inboundLevels"), $.fieldRef(cfg.Levels._fields, "Inbound"))
	applyLogLevelsConfig($.fieldRef((m$ as Middleware).graph._fields, "outboundLevels"), $.fieldRef(cfg.Levels._fields, "Outbound"))

	return m
}

export function applyLogLevelsConfig(dst: __goscript_call.levels | $.VarRef<__goscript_call.levels> | null, src: DirectionalLevelsConfig | $.VarRef<DirectionalLevelsConfig> | null): void {
	const dst$: __goscript_call.levels = dst == null ? $.pointerTarget<__goscript_call.levels>(dst) : (dst as any).__isVarRef === true ? (dst as any).value : (dst as any).__goValue === undefined ? (dst as any) : $.pointerTarget<__goscript_call.levels>(dst)
	const src$: DirectionalLevelsConfig = src == null ? $.pointerTarget<DirectionalLevelsConfig>(src) : (src as any).__isVarRef === true ? (src as any).value : (src as any).__goValue === undefined ? (src as any) : $.pointerTarget<DirectionalLevelsConfig>(src)
	{
		let level: $.VarRef<zapcore.Level> | null = (src$ as DirectionalLevelsConfig).Success
		if (level != null) {
			;(dst$ as __goscript_call.levels).success = $.pointerValue<zapcore.Level>((src$ as DirectionalLevelsConfig).Success)
		}
	}
	{
		let level: $.VarRef<zapcore.Level> | null = (src$ as DirectionalLevelsConfig).Failure
		if (level != null) {
			;(dst$ as __goscript_call.levels).useApplicationErrorFailureLevels = true;
			;(dst$ as __goscript_call.levels).failure = $.pointerValue<zapcore.Level>((src$ as DirectionalLevelsConfig).Failure)
		}
	}
	{
		let level: $.VarRef<zapcore.Level> | null = (src$ as DirectionalLevelsConfig).ApplicationError
		if (level != null) {
			;(dst$ as __goscript_call.levels).useApplicationErrorFailureLevels = true;
			;(dst$ as __goscript_call.levels).applicationError = $.pointerValue<zapcore.Level>((src$ as DirectionalLevelsConfig).ApplicationError)
		}
	}
	{
		let level: $.VarRef<zapcore.Level> | null = (src$ as DirectionalLevelsConfig).ServerError
		if (level != null) {
			;(dst$ as __goscript_call.levels).serverError = $.pointerValue<zapcore.Level>((src$ as DirectionalLevelsConfig).ServerError)
		}
	}
	{
		let level: $.VarRef<zapcore.Level> | null = (src$ as DirectionalLevelsConfig).ClientError
		if (level != null) {
			;(dst$ as __goscript_call.levels).clientError = $.pointerValue<zapcore.Level>((src$ as DirectionalLevelsConfig).ClientError)
		}
	}
}

export async function ctxErrOverride(ctx: context.Context | null, req: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<$.GoError> {
	let ctxErr: $.GoError = null! as $.GoError
	const req$: transport.Request = req == null ? $.pointerTarget<transport.Request>(req) : (req as any).__isVarRef === true ? (req as any).value : (req as any).__goValue === undefined ? (req as any) : $.pointerTarget<transport.Request>(req)
	if ($.comparableEqual((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), context.DeadlineExceeded)) {
		return yarpcerrors.DeadlineExceededErrorf("call to procedure %q of service %q from caller %q timed out", $.arrayToSlice<any>([(req$ as transport.Request).Procedure, (req$ as transport.Request).Service, (req$ as transport.Request).Caller]))
	}

	if ($.comparableEqual((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), context.Canceled)) {
		return yarpcerrors.CancelledErrorf("call to procedure %q of service %q from caller %q was canceled", $.arrayToSlice<any>([(req$ as transport.Request).Procedure, (req$ as transport.Request).Service, (req$ as transport.Request).Caller]))
	}

	return null
}

var __goscriptAwait: any
