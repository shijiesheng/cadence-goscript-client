// Generated file based on outbound.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import type * as fmt from "@goscript/fmt/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import type * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import * as io from "@goscript/io/index.js"

import type * as iter from "@goscript/iter/index.js"

import type * as __goscript_ack from "./ack.gs.ts"

import * as __goscript_header from "./header.gs.ts"

import type * as __goscript_lifecycle from "./lifecycle.gs.ts"

import * as __goscript_request from "./request.gs.ts"

import * as __goscript_response from "./response.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"

import type * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/io/index.js"
import "./header.gs.ts"
import "./request.gs.ts"
import "./response.gs.ts"
import "./stream.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/api/transport", ["transport.Outbound", "transport.Namer", "transport.UnaryOutbound", "transport.OnewayOutbound", "transport.StreamOutbound", "transport.Outbounds"])

export type Outbound = {
	IsRunning(): boolean | globalThis.Promise<boolean>
	Start(): $.GoError | globalThis.Promise<$.GoError>
	Stop(): $.GoError | globalThis.Promise<$.GoError>
	Transports(): $.Slice<__goscript_transport.Transport | null> | globalThis.Promise<$.Slice<__goscript_transport.Transport | null>>
}

$.registerInterfaceType(
	"transport.Outbound",
	null,
	[$.methodSignature("IsRunning", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Start", [], ["error"]), $.methodSignature("Stop", [], ["error"]), $.methodSignature("Transports", [], [/* @__PURE__ */ $.sliceType("transport.Transport")])]
);

export type Namer = {
	TransportName(): string | globalThis.Promise<string>
}

$.registerInterfaceType(
	"transport.Namer",
	null,
	[$.methodSignature("TransportName", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type UnaryOutbound = {
	Call(ctx: context.Context | null, request: __goscript_request.Request | $.VarRef<__goscript_request.Request> | null): [__goscript_response.Response | $.VarRef<__goscript_response.Response> | null, $.GoError] | globalThis.Promise<[__goscript_response.Response | $.VarRef<__goscript_response.Response> | null, $.GoError]>
	IsRunning(): boolean | globalThis.Promise<boolean>
	Start(): $.GoError | globalThis.Promise<$.GoError>
	Stop(): $.GoError | globalThis.Promise<$.GoError>
	Transports(): $.Slice<__goscript_transport.Transport | null> | globalThis.Promise<$.Slice<__goscript_transport.Transport | null>>
}

$.registerInterfaceType(
	"transport.UnaryOutbound",
	null,
	[$.methodSignature("Call", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")]], [/* @__PURE__ */ $.pointerType("transport.Response"), "error"]), $.methodSignature("IsRunning", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Start", [], ["error"]), $.methodSignature("Stop", [], ["error"]), $.methodSignature("Transports", [], [/* @__PURE__ */ $.sliceType("transport.Transport")])]
);

export type OnewayOutbound = {
	CallOneway(ctx: context.Context | null, request: __goscript_request.Request | $.VarRef<__goscript_request.Request> | null): [__goscript_ack.Ack | null, $.GoError] | globalThis.Promise<[__goscript_ack.Ack | null, $.GoError]>
	IsRunning(): boolean | globalThis.Promise<boolean>
	Start(): $.GoError | globalThis.Promise<$.GoError>
	Stop(): $.GoError | globalThis.Promise<$.GoError>
	Transports(): $.Slice<__goscript_transport.Transport | null> | globalThis.Promise<$.Slice<__goscript_transport.Transport | null>>
}

$.registerInterfaceType(
	"transport.OnewayOutbound",
	null,
	[$.methodSignature("CallOneway", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.Request")]], ["transport.Ack", "error"]), $.methodSignature("IsRunning", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Start", [], ["error"]), $.methodSignature("Stop", [], ["error"]), $.methodSignature("Transports", [], [/* @__PURE__ */ $.sliceType("transport.Transport")])]
);

export type StreamOutbound = {
	CallStream(ctx: context.Context | null, request: __goscript_stream.StreamRequest | $.VarRef<__goscript_stream.StreamRequest> | null): [__goscript_stream.ClientStream | $.VarRef<__goscript_stream.ClientStream> | null, $.GoError] | globalThis.Promise<[__goscript_stream.ClientStream | $.VarRef<__goscript_stream.ClientStream> | null, $.GoError]>
	IsRunning(): boolean | globalThis.Promise<boolean>
	Start(): $.GoError | globalThis.Promise<$.GoError>
	Stop(): $.GoError | globalThis.Promise<$.GoError>
	Transports(): $.Slice<__goscript_transport.Transport | null> | globalThis.Promise<$.Slice<__goscript_transport.Transport | null>>
}

$.registerInterfaceType(
	"transport.StreamOutbound",
	null,
	[$.methodSignature("CallStream", [["ctx", "context.Context"], ["request", /* @__PURE__ */ $.pointerType("transport.StreamRequest")]], [/* @__PURE__ */ $.pointerType("transport.ClientStream"), "error"]), $.methodSignature("IsRunning", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Start", [], ["error"]), $.methodSignature("Stop", [], ["error"]), $.methodSignature("Transports", [], [/* @__PURE__ */ $.sliceType("transport.Transport")])]
);

export class Outbounds {
	public get ServiceName(): string {
		return this._fields.ServiceName
	}

	public set ServiceName(value: string) {
		this._fields.ServiceName = value
	}

	// If set, this is the unary outbound which sends a request and waits for
	// the response.
	public get Unary(): UnaryOutbound | null {
		return this._fields.Unary
	}

	public set Unary(value: UnaryOutbound | null) {
		this._fields.Unary = value
	}

	// If set, this is the oneway outbound which sends the request and
	// continues once the message has been delivered.
	public get Oneway(): OnewayOutbound | null {
		return this._fields.Oneway
	}

	public set Oneway(value: OnewayOutbound | null) {
		this._fields.Oneway = value
	}

	// If set, this is the stream outbound which creates a ClientStream that can
	// be used to continuously send/recv requests over the connection.
	public get Stream(): StreamOutbound | null {
		return this._fields.Stream
	}

	public set Stream(value: StreamOutbound | null) {
		this._fields.Stream = value
	}

	public _fields: {
		ServiceName: string
		Unary: UnaryOutbound | null
		Oneway: OnewayOutbound | null
		Stream: StreamOutbound | null
	}

	constructor(init?: Partial<{ServiceName?: string, Unary?: UnaryOutbound | null, Oneway?: OnewayOutbound | null, Stream?: StreamOutbound | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ServiceName: init?.ServiceName ?? ("" as string),
			Unary: init?.Unary ?? (null! as UnaryOutbound | null),
			Oneway: init?.Oneway ?? (null! as OnewayOutbound | null),
			Stream: init?.Stream ?? (null! as StreamOutbound | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Outbounds {
		return new Outbounds(this, true)
	}

	public __goscriptAssign(source: Outbounds): void {
		const target = this._fields
		const values = source._fields
		target.ServiceName = values.ServiceName
		target.Unary = $.assignFieldValue(target.Unary, values.Unary, "transport.UnaryOutbound")
		target.Oneway = $.assignFieldValue(target.Oneway, values.Oneway, "transport.OnewayOutbound")
		target.Stream = $.assignFieldValue(target.Stream, values.Stream, "transport.StreamOutbound")
	}

	static __typeInfo = $.registerStructType(
		"transport.Outbounds",
		() => new Outbounds(),
		() => [],
		Outbounds,
		() => [/* @__PURE__ */ $.structField("ServiceName", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Unary", "transport.UnaryOutbound", [1], 16, true), /* @__PURE__ */ $.structField("Oneway", "transport.OnewayOutbound", [2], 32, true), /* @__PURE__ */ $.structField("Stream", "transport.StreamOutbound", [3], 48, true)]
	)
}
