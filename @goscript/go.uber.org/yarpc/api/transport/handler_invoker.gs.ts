// Generated file based on handler_invoker.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as log from "@goscript/log/index.js"

import * as debug from "@goscript/runtime/debug/index.js"

import * as time from "@goscript/time/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as io from "@goscript/io/index.js"

import type * as iter from "@goscript/iter/index.js"

import * as __goscript_handler from "./handler.gs.ts"

import * as __goscript_header from "./header.gs.ts"

import * as __goscript_request from "./request.gs.ts"

import * as __goscript_response from "./response.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"

import * as __goscript_type_string from "./type_string.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/log/index.js"
import "@goscript/runtime/debug/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/io/index.js"
import "./handler.gs.ts"
import "./header.gs.ts"
import "./request.gs.ts"
import "./response.gs.ts"
import "./stream.gs.ts"
import "./type_string.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/transport", ["transport.UnaryInvokeRequest", "transport.OnewayInvokeRequest", "transport.StreamInvokeRequest"])

export class UnaryInvokeRequest {
	public get Context(): context.Context | null {
		return this._fields.Context
	}

	public set Context(value: context.Context | null) {
		this._fields.Context = value
	}

	public get StartTime(): time.Time {
		return this._fields.StartTime
	}

	public set StartTime(value: time.Time) {
		this._fields.StartTime = value
	}

	public get Request(): __goscript_request.Request | $.VarRef<__goscript_request.Request> | null {
		return this._fields.Request
	}

	public set Request(value: __goscript_request.Request | $.VarRef<__goscript_request.Request> | null) {
		this._fields.Request = value
	}

	public get ResponseWriter(): __goscript_response.ResponseWriter | null {
		return this._fields.ResponseWriter
	}

	public set ResponseWriter(value: __goscript_response.ResponseWriter | null) {
		this._fields.ResponseWriter = value
	}

	public get Handler(): __goscript_handler.UnaryHandler | null {
		return this._fields.Handler
	}

	public set Handler(value: __goscript_handler.UnaryHandler | null) {
		this._fields.Handler = value
	}

	public get Logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.Logger
	}

	public set Logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.Logger = value
	}

	public _fields: {
		Context: context.Context | null
		StartTime: time.Time
		Request: __goscript_request.Request | $.VarRef<__goscript_request.Request> | null
		ResponseWriter: __goscript_response.ResponseWriter | null
		Handler: __goscript_handler.UnaryHandler | null
		Logger: zap.Logger | $.VarRef<zap.Logger> | null
	}

	constructor(init?: Partial<{Context?: context.Context | null, StartTime?: time.Time, Request?: __goscript_request.Request | $.VarRef<__goscript_request.Request> | null, ResponseWriter?: __goscript_response.ResponseWriter | null, Handler?: __goscript_handler.UnaryHandler | null, Logger?: zap.Logger | $.VarRef<zap.Logger> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Context: init?.Context ?? (null! as context.Context | null),
			StartTime: init?.StartTime ? $.markAsStructValue($.cloneStructValue(init.StartTime)) : $.markAsStructValue(new time.Time()),
			Request: init?.Request ?? (null! as __goscript_request.Request | $.VarRef<__goscript_request.Request> | null),
			ResponseWriter: init?.ResponseWriter ?? (null! as __goscript_response.ResponseWriter | null),
			Handler: init?.Handler ?? (null! as __goscript_handler.UnaryHandler | null),
			Logger: init?.Logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): UnaryInvokeRequest {
		return new UnaryInvokeRequest(this, true)
	}

	public __goscriptAssign(source: UnaryInvokeRequest): void {
		const target = this._fields
		const values = source._fields
		target.Context = $.assignFieldValue(target.Context, values.Context, "context.Context")
		$.assignStruct(target.StartTime, values.StartTime)
		target.Request = values.Request
		target.ResponseWriter = $.assignFieldValue(target.ResponseWriter, values.ResponseWriter, "transport.ResponseWriter")
		target.Handler = $.assignFieldValue(target.Handler, values.Handler, "transport.UnaryHandler")
		target.Logger = values.Logger
	}

	static __typeInfo = $.registerStructType(
		"transport.UnaryInvokeRequest",
		() => new UnaryInvokeRequest(),
		() => [],
		UnaryInvokeRequest,
		() => [/* @__PURE__ */ $.structField("Context", "context.Context", [0], 0, true), /* @__PURE__ */ $.structField("StartTime", "time.Time", [1], 16, true), /* @__PURE__ */ $.structField("Request", /* @__PURE__ */ $.pointerType("transport.Request"), [2], 40, true), /* @__PURE__ */ $.structField("ResponseWriter", "transport.ResponseWriter", [3], 48, true), /* @__PURE__ */ $.structField("Handler", "transport.UnaryHandler", [4], 64, true), /* @__PURE__ */ $.structField("Logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [5], 80, true)]
	)
}

export class OnewayInvokeRequest {
	public get Context(): context.Context | null {
		return this._fields.Context
	}

	public set Context(value: context.Context | null) {
		this._fields.Context = value
	}

	public get Request(): __goscript_request.Request | $.VarRef<__goscript_request.Request> | null {
		return this._fields.Request
	}

	public set Request(value: __goscript_request.Request | $.VarRef<__goscript_request.Request> | null) {
		this._fields.Request = value
	}

	public get Handler(): __goscript_handler.OnewayHandler | null {
		return this._fields.Handler
	}

	public set Handler(value: __goscript_handler.OnewayHandler | null) {
		this._fields.Handler = value
	}

	public get Logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.Logger
	}

	public set Logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.Logger = value
	}

	public _fields: {
		Context: context.Context | null
		Request: __goscript_request.Request | $.VarRef<__goscript_request.Request> | null
		Handler: __goscript_handler.OnewayHandler | null
		Logger: zap.Logger | $.VarRef<zap.Logger> | null
	}

	constructor(init?: Partial<{Context?: context.Context | null, Request?: __goscript_request.Request | $.VarRef<__goscript_request.Request> | null, Handler?: __goscript_handler.OnewayHandler | null, Logger?: zap.Logger | $.VarRef<zap.Logger> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Context: init?.Context ?? (null! as context.Context | null),
			Request: init?.Request ?? (null! as __goscript_request.Request | $.VarRef<__goscript_request.Request> | null),
			Handler: init?.Handler ?? (null! as __goscript_handler.OnewayHandler | null),
			Logger: init?.Logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OnewayInvokeRequest {
		return new OnewayInvokeRequest(this, true)
	}

	public __goscriptAssign(source: OnewayInvokeRequest): void {
		const target = this._fields
		const values = source._fields
		target.Context = $.assignFieldValue(target.Context, values.Context, "context.Context")
		target.Request = values.Request
		target.Handler = $.assignFieldValue(target.Handler, values.Handler, "transport.OnewayHandler")
		target.Logger = values.Logger
	}

	static __typeInfo = $.registerStructType(
		"transport.OnewayInvokeRequest",
		() => new OnewayInvokeRequest(),
		() => [],
		OnewayInvokeRequest,
		() => [/* @__PURE__ */ $.structField("Context", "context.Context", [0], 0, true), /* @__PURE__ */ $.structField("Request", /* @__PURE__ */ $.pointerType("transport.Request"), [1], 16, true), /* @__PURE__ */ $.structField("Handler", "transport.OnewayHandler", [2], 24, true), /* @__PURE__ */ $.structField("Logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [3], 40, true)]
	)
}

export class StreamInvokeRequest {
	public get Stream(): __goscript_stream.ServerStream | $.VarRef<__goscript_stream.ServerStream> | null {
		return this._fields.Stream
	}

	public set Stream(value: __goscript_stream.ServerStream | $.VarRef<__goscript_stream.ServerStream> | null) {
		this._fields.Stream = value
	}

	public get Handler(): __goscript_handler.StreamHandler | null {
		return this._fields.Handler
	}

	public set Handler(value: __goscript_handler.StreamHandler | null) {
		this._fields.Handler = value
	}

	public get Logger(): zap.Logger | $.VarRef<zap.Logger> | null {
		return this._fields.Logger
	}

	public set Logger(value: zap.Logger | $.VarRef<zap.Logger> | null) {
		this._fields.Logger = value
	}

	public _fields: {
		Stream: __goscript_stream.ServerStream | $.VarRef<__goscript_stream.ServerStream> | null
		Handler: __goscript_handler.StreamHandler | null
		Logger: zap.Logger | $.VarRef<zap.Logger> | null
	}

	constructor(init?: Partial<{Stream?: __goscript_stream.ServerStream | $.VarRef<__goscript_stream.ServerStream> | null, Handler?: __goscript_handler.StreamHandler | null, Logger?: zap.Logger | $.VarRef<zap.Logger> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Stream: init?.Stream ?? (null! as __goscript_stream.ServerStream | $.VarRef<__goscript_stream.ServerStream> | null),
			Handler: init?.Handler ?? (null! as __goscript_handler.StreamHandler | null),
			Logger: init?.Logger ?? (null! as zap.Logger | $.VarRef<zap.Logger> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StreamInvokeRequest {
		return new StreamInvokeRequest(this, true)
	}

	public __goscriptAssign(source: StreamInvokeRequest): void {
		const target = this._fields
		const values = source._fields
		target.Stream = values.Stream
		target.Handler = $.assignFieldValue(target.Handler, values.Handler, "transport.StreamHandler")
		target.Logger = values.Logger
	}

	static __typeInfo = $.registerStructType(
		"transport.StreamInvokeRequest",
		() => new StreamInvokeRequest(),
		() => [],
		StreamInvokeRequest,
		() => [/* @__PURE__ */ $.structField("Stream", /* @__PURE__ */ $.pointerType("transport.ServerStream"), [0], 0, true), /* @__PURE__ */ $.structField("Handler", "transport.StreamHandler", [1], 8, true), /* @__PURE__ */ $.structField("Logger", /* @__PURE__ */ $.pointerType("zap.Logger"), [2], 24, true)]
	)
}

export async function InvokeUnaryHandler(i: UnaryInvokeRequest): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	const __defer = new $.AsyncDisposableStack()
	try {
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			{
				let r = $.recover()
				if (r != null) {
					err = await handlePanic(1, i.Logger, r, __goscript_request.Request.prototype.ToRequestMeta.call(i.Request))
				}
			}
		})() })

		err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_handler.UnaryHandler, null>>(i.Handler).Handle(i.Context, i.Request, i.ResponseWriter), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// The handler stopped work on context deadline.
		if (($.comparableEqual(err, context.DeadlineExceeded)) && ($.comparableEqual(err, (__goscriptAwait = $.pointerValue<Exclude<context.Context, null>>(i.Context).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)))) {
			let [deadline, ] = await $.pointerValue<Exclude<context.Context, null>>(i.Context).Deadline()
			err = $.interfaceValue<$.GoError>(yarpcerrors.Newf(4, "call to procedure %q of service %q from caller %q timed out after %v", $.arrayToSlice<any>([$.pointerValue<__goscript_request.Request>(i.Request).Procedure, $.pointerValue<__goscript_request.Request>(i.Request).Service, $.pointerValue<__goscript_request.Request>(i.Request).Caller, $.namedValueInterfaceValue<any>($.markAsStructValue($.cloneStructValue(deadline)).Sub($.markAsStructValue($.cloneStructValue(i.StartTime))), "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())])), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
		}
		const __goscriptReturn0: $.GoError = err
		err = __goscriptReturn0
		await __defer.dispose()
		return err
		await __defer.dispose()
	} catch (e) {
		await __defer.disposePanic(e)
		if (!$.recovered(e)) {
			throw e
		}
	}
	return err
}

export async function InvokeOnewayHandler(i: OnewayInvokeRequest): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	const __defer = new $.AsyncDisposableStack()
	try {
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			{
				let r = $.recover()
				if (r != null) {
					err = await handlePanic(2, i.Logger, r, __goscript_request.Request.prototype.ToRequestMeta.call(i.Request))
				}
			}
		})() })

		const __goscriptReturn1: $.GoError = (__goscriptAwait = $.pointerValue<Exclude<__goscript_handler.OnewayHandler, null>>(i.Handler).HandleOneway(i.Context, i.Request), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		err = __goscriptReturn1
		await __defer.dispose()
		return err
		await __defer.dispose()
	} catch (e) {
		await __defer.disposePanic(e)
		if (!$.recovered(e)) {
			throw e
		}
	}
	return err
}

export async function InvokeStreamHandler(i: StreamInvokeRequest): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	const __defer = new $.AsyncDisposableStack()
	try {
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			{
				let r = $.recover()
				if (r != null) {
					err = await handlePanic(3, i.Logger, r, $.pointerValue<__goscript_stream.StreamRequest>(await __goscript_stream.ServerStream.prototype.Request.call(i.Stream)).Meta)
				}
			}
		})() })

		const __goscriptReturn2: $.GoError = (__goscriptAwait = $.pointerValue<Exclude<__goscript_handler.StreamHandler, null>>(i.Handler).HandleStream(i.Stream), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		err = __goscriptReturn2
		await __defer.dispose()
		return err
		await __defer.dispose()
	} catch (e) {
		await __defer.disposePanic(e)
		if (!$.recovered(e)) {
			throw e
		}
	}
	return err
}

export async function handlePanic(rpcType: __goscript_handler.Type, logger: zap.Logger | $.VarRef<zap.Logger> | null, recovered: any, reqMeta: __goscript_request.RequestMeta | $.VarRef<__goscript_request.RequestMeta> | null): globalThis.Promise<$.GoError> {
	let err = fmt.Errorf("panic: %v", recovered)
	if (logger != null) {
		await logPanic(rpcType, logger, err, reqMeta)
		return err
	}
	await log.Printf("%s handler panicked: %v\n%s", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(rpcType, "transport.Type", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5()), recovered, $.interfaceValue(debug.Stack(), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))
	return err
}

export async function logPanic(rpcType: __goscript_handler.Type, logger: zap.Logger | $.VarRef<zap.Logger> | null, err: $.GoError, reqMeta: __goscript_request.RequestMeta | $.VarRef<__goscript_request.RequestMeta> | null): globalThis.Promise<void> {
	const reqMeta$: __goscript_request.RequestMeta = reqMeta == null ? $.pointerTarget<__goscript_request.RequestMeta>(reqMeta) : (reqMeta as any).__isVarRef === true ? (reqMeta as any).value : (reqMeta as any).__goValue === undefined ? (reqMeta as any) : $.pointerTarget<__goscript_request.RequestMeta>(reqMeta)
	await zap.Logger.prototype.Error.call(logger, await fmt.Sprintf("%s handler panicked", $.namedValueInterfaceValue<any>(rpcType, "transport.Type", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())), $.arrayToSlice<zap.Field>([zap.String("service", (reqMeta$ as __goscript_request.RequestMeta).Service), zap.String("transport", (reqMeta$ as __goscript_request.RequestMeta).Transport), zap.String("procedure", (reqMeta$ as __goscript_request.RequestMeta).Procedure), zap.String("encoding", (reqMeta$ as __goscript_request.RequestMeta).Encoding), zap.String("caller", (reqMeta$ as __goscript_request.RequestMeta).Caller), zap.Error(err), await zap.Stack("stack")]))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_type_string.Type_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int", "transport.Type"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
