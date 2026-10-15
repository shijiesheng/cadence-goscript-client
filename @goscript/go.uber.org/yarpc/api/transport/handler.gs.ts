// Generated file based on handler.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as time from "@goscript/time/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as zap from "@goscript/go.uber.org/zap/index.js"

import * as io from "@goscript/io/index.js"

import type * as iter from "@goscript/iter/index.js"

import * as __goscript_handler_invoker from "./handler_invoker.gs.ts"

import * as __goscript_header from "./header.gs.ts"

import * as __goscript_request from "./request.gs.ts"

import * as __goscript_response from "./response.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"

import * as __goscript_type_string from "./type_string.gs.ts"
import "@goscript/context/index.js"
import "@goscript/time/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"
import "@goscript/strconv/index.js"
import "@goscript/go.uber.org/zap/index.js"
import "@goscript/io/index.js"
import "./handler_invoker.gs.ts"
import "./header.gs.ts"
import "./request.gs.ts"
import "./response.gs.ts"
import "./stream.gs.ts"
import "./type_string.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/transport", ["transport.Type", "transport.HandlerSpec", "transport.UnaryHandler", "transport.OnewayHandler", "transport.StreamHandler"])

export type Type = number

$.registerNamedValueType(
	"transport.Type",
	{String: (receiver: any, ...args: any[]) => (__goscript_type_string.Type_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*transport.Type",
	{String: (receiver: any, ...args: any[]) => (__goscript_type_string.Type_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type UnaryHandler = {
	Handle(ctx: context.Context | null, req: __goscript_request.Request | $.VarRef<__goscript_request.Request> | null, resw: __goscript_response.ResponseWriter | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"transport.UnaryHandler",
	null,
	[$.methodSignature("Handle", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")], ["resw", "transport.ResponseWriter"]], ["error"])]
);

export type OnewayHandler = {
	HandleOneway(ctx: context.Context | null, req: __goscript_request.Request | $.VarRef<__goscript_request.Request> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"transport.OnewayHandler",
	null,
	[$.methodSignature("HandleOneway", [["ctx", "context.Context"], ["req", /* @__PURE__ */ $.pointerType("transport.Request")]], ["error"])]
);

export type StreamHandler = {
	HandleStream(stream: __goscript_stream.ServerStream | $.VarRef<__goscript_stream.ServerStream> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"transport.StreamHandler",
	null,
	[$.methodSignature("HandleStream", [["stream", /* @__PURE__ */ $.pointerType("transport.ServerStream")]], ["error"])]
);

export class HandlerSpec {
	public get t(): Type {
		return this._fields.t
	}

	public set t(value: Type) {
		this._fields.t = value
	}

	public get unaryHandler(): UnaryHandler | null {
		return this._fields.unaryHandler
	}

	public set unaryHandler(value: UnaryHandler | null) {
		this._fields.unaryHandler = value
	}

	public get onewayHandler(): OnewayHandler | null {
		return this._fields.onewayHandler
	}

	public set onewayHandler(value: OnewayHandler | null) {
		this._fields.onewayHandler = value
	}

	public get streamHandler(): StreamHandler | null {
		return this._fields.streamHandler
	}

	public set streamHandler(value: StreamHandler | null) {
		this._fields.streamHandler = value
	}

	public _fields: {
		t: Type
		unaryHandler: UnaryHandler | null
		onewayHandler: OnewayHandler | null
		streamHandler: StreamHandler | null
	}

	constructor(init?: Partial<{t?: Type, unaryHandler?: UnaryHandler | null, onewayHandler?: OnewayHandler | null, streamHandler?: StreamHandler | null}>, __goscriptValue?: boolean) {
		this._fields = {
			t: init?.t ?? (0 as Type),
			unaryHandler: init?.unaryHandler ?? (null! as UnaryHandler | null),
			onewayHandler: init?.onewayHandler ?? (null! as OnewayHandler | null),
			streamHandler: init?.streamHandler ?? (null! as StreamHandler | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HandlerSpec {
		return new HandlerSpec(this, true)
	}

	public __goscriptAssign(source: HandlerSpec): void {
		const target = this._fields
		const values = source._fields
		target.t = values.t
		target.unaryHandler = $.assignFieldValue(target.unaryHandler, values.unaryHandler, "transport.UnaryHandler")
		target.onewayHandler = $.assignFieldValue(target.onewayHandler, values.onewayHandler, "transport.OnewayHandler")
		target.streamHandler = $.assignFieldValue(target.streamHandler, values.streamHandler, "transport.StreamHandler")
	}

	public async MarshalLogObject(enc: zapcore.ObjectEncoder | null): globalThis.Promise<$.GoError> {
		const h = this;
		void (__goscriptAwait = (enc !== null && (enc as any).__isVarRef !== true && (enc as any).__goValue === undefined ? (enc as Exclude<zapcore.ObjectEncoder, null>) : $.pointerValue<Exclude<zapcore.ObjectEncoder, null>>(enc)).AddString("rpcType", __goscript_type_string.Type_String(h.t)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	public Oneway(): OnewayHandler | null {
		const h = this;
		return h.onewayHandler
	}

	public Stream(): StreamHandler | null {
		const h = this;
		return h.streamHandler
	}

	public Type(): Type {
		const h = this;
		return h.t
	}

	public Unary(): UnaryHandler | null {
		const h = this;
		return h.unaryHandler
	}

	static __typeInfo = $.registerStructType(
		"transport.HandlerSpec",
		() => new HandlerSpec(),
		() => [$.methodSignature("MarshalLogObject", [["enc", "zapcore.ObjectEncoder"]], ["error"]), $.methodSignature("Oneway", [], ["transport.OnewayHandler"]), $.methodSignature("Stream", [], ["transport.StreamHandler"]), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("int", "transport.Type")]), $.methodSignature("Unary", [], ["transport.UnaryHandler"])],
		HandlerSpec,
		() => [/* @__PURE__ */ $.structField("t", /* @__PURE__ */ $.basicType("int", "transport.Type"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/api/transport" }), /* @__PURE__ */ $.structField("unaryHandler", "transport.UnaryHandler", [1], 8, false, { pkgPath: "go.uber.org/yarpc/api/transport" }), /* @__PURE__ */ $.structField("onewayHandler", "transport.OnewayHandler", [2], 24, false, { pkgPath: "go.uber.org/yarpc/api/transport" }), /* @__PURE__ */ $.structField("streamHandler", "transport.StreamHandler", [3], 40, false, { pkgPath: "go.uber.org/yarpc/api/transport" })]
	)
}

export const Unary: Type = 1

export const Oneway: Type = 2

export const Streaming: Type = 3

export function NewUnaryHandlerSpec(handler: UnaryHandler | null): HandlerSpec {
	return new HandlerSpec({t: 1, unaryHandler: handler}, true)
}

export function NewOnewayHandlerSpec(handler: OnewayHandler | null): HandlerSpec {
	return new HandlerSpec({t: 2, onewayHandler: handler}, true)
}

export function NewStreamHandlerSpec(handler: StreamHandler | null): HandlerSpec {
	return new HandlerSpec({t: 3, streamHandler: handler}, true)
}

export async function DispatchUnaryHandler(ctx: context.Context | null, h: UnaryHandler | null, start: time.Time, req: __goscript_request.Request | $.VarRef<__goscript_request.Request> | null, resq: __goscript_response.ResponseWriter | null): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	return __goscript_handler_invoker.InvokeUnaryHandler(new __goscript_handler_invoker.UnaryInvokeRequest({Context: ctx, StartTime: $.markAsStructValue($.cloneStructValue(start)), Request: req, ResponseWriter: resq, Handler: h}, true))
}

export async function DispatchOnewayHandler(ctx: context.Context | null, h: OnewayHandler | null, req: __goscript_request.Request | $.VarRef<__goscript_request.Request> | null): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	return __goscript_handler_invoker.InvokeOnewayHandler(new __goscript_handler_invoker.OnewayInvokeRequest({Context: ctx, Request: req, Handler: h}, true))
}

export async function DispatchStreamHandler(h: StreamHandler | null, stream: __goscript_stream.ServerStream | $.VarRef<__goscript_stream.ServerStream> | null): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	return __goscript_handler_invoker.InvokeStreamHandler(new __goscript_handler_invoker.StreamInvokeRequest({Stream: stream, Handler: h}, true))
}

var __goscriptAwait: any
