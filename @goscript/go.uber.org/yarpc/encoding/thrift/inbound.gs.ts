// Generated file based on inbound.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as io from "@goscript/io/index.js"

import * as protocol from "@goscript/go.uber.org/thriftrw/protocol/index.js"

import * as envelope2 from "@goscript/go.uber.org/thriftrw/protocol/envelope/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import * as encodingapi from "@goscript/go.uber.org/yarpc/api/encoding/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as bufferpool from "@goscript/go.uber.org/yarpc/internal/bufferpool/index.js"

import * as errors from "@goscript/go.uber.org/yarpc/pkg/errors/index.js"

import * as envelope3 from "@goscript/go.uber.org/thriftrw/envelope/index.js"

import * as binary from "@goscript/go.uber.org/thriftrw/protocol/binary/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as __goscript_constants from "./constants.gs.ts"

import * as __goscript_envelope from "./envelope.gs.ts"

import * as __goscript_register from "./register.gs.ts"

import type * as __goscript_response from "./response.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/envelope/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/go.uber.org/yarpc/api/encoding/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/internal/bufferpool/index.js"
import "@goscript/go.uber.org/yarpc/pkg/errors/index.js"
import "@goscript/go.uber.org/thriftrw/envelope/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/binary/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "./constants.gs.ts"
import "./envelope.gs.ts"
import "./register.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/encoding/thrift", ["thrift.thriftUnaryHandler", "thrift.thriftOnewayHandler"])

export class thriftUnaryHandler {
	public get UnaryHandler(): ((_p0: context.Context | null, _p1: wire.Value) => [__goscript_response.Response, $.GoError] | globalThis.Promise<[__goscript_response.Response, $.GoError]>) | null {
		return this._fields.UnaryHandler
	}

	public set UnaryHandler(value: ((_p0: context.Context | null, _p1: wire.Value) => [__goscript_response.Response, $.GoError] | globalThis.Promise<[__goscript_response.Response, $.GoError]>) | null) {
		this._fields.UnaryHandler = value
	}

	public get Protocol(): protocol.Protocol | null {
		return this._fields.Protocol
	}

	public set Protocol(value: protocol.Protocol | null) {
		this._fields.Protocol = value
	}

	public get Enveloping(): boolean {
		return this._fields.Enveloping
	}

	public set Enveloping(value: boolean) {
		this._fields.Enveloping = value
	}

	public _fields: {
		UnaryHandler: ((_p0: context.Context | null, _p1: wire.Value) => [__goscript_response.Response, $.GoError] | globalThis.Promise<[__goscript_response.Response, $.GoError]>) | null
		Protocol: protocol.Protocol | null
		Enveloping: boolean
	}

	constructor(init?: Partial<{UnaryHandler?: ((_p0: context.Context | null, _p1: wire.Value) => [__goscript_response.Response, $.GoError] | globalThis.Promise<[__goscript_response.Response, $.GoError]>) | null, Protocol?: protocol.Protocol | null, Enveloping?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			UnaryHandler: init?.UnaryHandler ?? (null! as ((_p0: context.Context | null, _p1: wire.Value) => [__goscript_response.Response, $.GoError] | globalThis.Promise<[__goscript_response.Response, $.GoError]>) | null),
			Protocol: init?.Protocol ?? (null! as protocol.Protocol | null),
			Enveloping: init?.Enveloping ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): thriftUnaryHandler {
		return new thriftUnaryHandler(this, true)
	}

	public __goscriptAssign(source: thriftUnaryHandler): void {
		const target = this._fields
		const values = source._fields
		target.UnaryHandler = values.UnaryHandler
		target.Protocol = $.assignFieldValue(target.Protocol, values.Protocol, "protocol.Protocol")
		target.Enveloping = values.Enveloping
	}

	public async Handle(ctx: context.Context | null, treq: transport.Request | $.VarRef<transport.Request> | null, rw: transport.ResponseWriter | null): globalThis.Promise<$.GoError> {
		const t = this;
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple0: any = await encodingapi.NewInboundCall(ctx)
		ctx = __goscriptTuple0[0]
		let call: encodingapi.InboundCall | $.VarRef<encodingapi.InboundCall> | null = __goscriptTuple0[1]

		let [bodyReader, release, err] = await getReaderAt($.pointerValue<transport.Request>(treq).Body)
		if (err != null) {
			return err
		}
		const __goscriptDeferCallee0 = release
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		let __goscriptTuple1: any = await decodeRequest(call, treq, bodyReader, 1, t.Protocol, t.Enveloping)
		let reqValue = __goscriptTuple1[0]
		let responder = __goscriptTuple1[1]
		err = __goscriptTuple1[2]
		if (err != null) {
			return err
		}

		let __goscriptTuple2: any = await t.UnaryHandler!(ctx, (reqValue).clone())
		let res = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return err
		}

		{
			let resType = (__goscriptAwait = $.pointerValue<Exclude<envelope3.Enveloper, null>>(res.Body).EnvelopeType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (resType != 2) {
				return await errors.ResponseBodyEncodeError(treq, $.namedValueInterfaceValue<$.GoError>($.int(resType, 8), "thrift.errUnexpectedEnvelopeType", {"Error": __goscript_envelope.errUnexpectedEnvelopeType_Error}, /* @__PURE__ */ $.basicType("int8", "thrift.errUnexpectedEnvelopeType")))
			}
		}

		let __goscriptTuple3: any = await $.pointerValue<Exclude<envelope3.Enveloper, null>>(res.Body).ToWire()
		let value = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return err
		}

		if (res.IsApplicationError) {
			void (__goscriptAwait = (rw !== null && (rw as any).__isVarRef !== true && (rw as any).__goValue === undefined ? (rw as Exclude<transport.ResponseWriter, null>) : $.pointerValue<Exclude<transport.ResponseWriter, null>>(rw)).SetApplicationError(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let [applicationErrorMetaSetter, ok] = $.typeAssertTuple<transport.ApplicationErrorMetaSetter | null>(rw, "transport.ApplicationErrorMetaSetter")
				if (ok) {
					void (__goscriptAwait = (applicationErrorMetaSetter !== null && (applicationErrorMetaSetter as any).__isVarRef !== true && (applicationErrorMetaSetter as any).__goValue === undefined ? (applicationErrorMetaSetter as Exclude<transport.ApplicationErrorMetaSetter, null>) : $.pointerValue<Exclude<transport.ApplicationErrorMetaSetter, null>>(applicationErrorMetaSetter)).SetApplicationErrorMeta(new transport.ApplicationErrorMeta({Details: res.ApplicationErrorDetails, Name: res.ApplicationErrorName, Code: res.ApplicationErrorCode})), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}
		}

		{
			let __goscriptShadow0 = await (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as encodingapi.InboundCall).WriteToResponse(rw) : encodingapi.InboundCall.prototype.WriteToResponse.call(call, rw))
			if (__goscriptShadow0 != null) {
				// not reachable
				return __goscriptShadow0
			}
		}

		{
			err = (__goscriptAwait = (responder !== null && (responder as any).__isVarRef !== true && (responder as any).__goValue === undefined ? (responder as Exclude<envelope2.Responder, null>) : $.pointerValue<Exclude<envelope2.Responder, null>>(responder)).EncodeResponse((value).clone(), 2, (rw as io.Writer | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return await errors.ResponseBodyEncodeError(treq, err)
			}
		}

		return null
	}

	static __typeInfo = $.registerStructType(
		"thrift.thriftUnaryHandler",
		() => new thriftUnaryHandler(),
		() => [$.methodSignature("Handle", [["ctx", "context.Context"], ["treq", /* @__PURE__ */ $.pointerType("transport.Request")], ["rw", "transport.ResponseWriter"]], ["error"])],
		thriftUnaryHandler,
		() => [/* @__PURE__ */ $.structField("UnaryHandler", ({ kind: $.TypeKind.Function, name: "thrift.UnaryHandler", params: ["context.Context", "wire.Value"], results: ["thrift.Response", "error"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("Protocol", "protocol.Protocol", [1], 8, true), /* @__PURE__ */ $.structField("Enveloping", /* @__PURE__ */ $.basicType("bool"), [2], 24, true)]
	)
}

export class thriftOnewayHandler {
	public get OnewayHandler(): ((_p0: context.Context | null, _p1: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null {
		return this._fields.OnewayHandler
	}

	public set OnewayHandler(value: ((_p0: context.Context | null, _p1: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null) {
		this._fields.OnewayHandler = value
	}

	public get Protocol(): protocol.Protocol | null {
		return this._fields.Protocol
	}

	public set Protocol(value: protocol.Protocol | null) {
		this._fields.Protocol = value
	}

	public get Enveloping(): boolean {
		return this._fields.Enveloping
	}

	public set Enveloping(value: boolean) {
		this._fields.Enveloping = value
	}

	public _fields: {
		OnewayHandler: ((_p0: context.Context | null, _p1: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null
		Protocol: protocol.Protocol | null
		Enveloping: boolean
	}

	constructor(init?: Partial<{OnewayHandler?: ((_p0: context.Context | null, _p1: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null, Protocol?: protocol.Protocol | null, Enveloping?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			OnewayHandler: init?.OnewayHandler ?? (null! as ((_p0: context.Context | null, _p1: wire.Value) => $.GoError | globalThis.Promise<$.GoError>) | null),
			Protocol: init?.Protocol ?? (null! as protocol.Protocol | null),
			Enveloping: init?.Enveloping ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): thriftOnewayHandler {
		return new thriftOnewayHandler(this, true)
	}

	public __goscriptAssign(source: thriftOnewayHandler): void {
		const target = this._fields
		const values = source._fields
		target.OnewayHandler = values.OnewayHandler
		target.Protocol = $.assignFieldValue(target.Protocol, values.Protocol, "protocol.Protocol")
		target.Enveloping = values.Enveloping
	}

	public async HandleOneway(ctx: context.Context | null, treq: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<$.GoError> {
		const t = this;
		await using __defer = new $.AsyncDisposableStack()
		let [bodyReader, release, err] = await getReaderAt($.pointerValue<transport.Request>(treq).Body)
		if (err != null) {
			return err
		}
		const __goscriptDeferCallee1 = release
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		let __goscriptTuple4: any = await encodingapi.NewInboundCall(ctx)
		ctx = __goscriptTuple4[0]
		let call: encodingapi.InboundCall | $.VarRef<encodingapi.InboundCall> | null = __goscriptTuple4[1]

		let __goscriptTuple5: any = await decodeRequest(call, treq, bodyReader, 4, t.Protocol, t.Enveloping)
		let reqValue = __goscriptTuple5[0]
		err = __goscriptTuple5[2]
		if (err != null) {
			return err
		}

		return (__goscriptAwait = t.OnewayHandler!(ctx, (reqValue).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"thrift.thriftOnewayHandler",
		() => new thriftOnewayHandler(),
		() => [$.methodSignature("HandleOneway", [["ctx", "context.Context"], ["treq", /* @__PURE__ */ $.pointerType("transport.Request")]], ["error"])],
		thriftOnewayHandler,
		() => [/* @__PURE__ */ $.structField("OnewayHandler", ({ kind: $.TypeKind.Function, name: "thrift.OnewayHandler", params: ["context.Context", "wire.Value"], results: ["error"] } as $.FunctionTypeInfo), [0], 0, true), /* @__PURE__ */ $.structField("Protocol", "protocol.Protocol", [1], 8, true), /* @__PURE__ */ $.structField("Enveloping", /* @__PURE__ */ $.basicType("bool"), [2], 24, true)]
	)
}

export async function decodeRequest(call: encodingapi.InboundCall | $.VarRef<encodingapi.InboundCall> | null, treq: transport.Request | $.VarRef<transport.Request> | null, reader: io.ReaderAt | null, reqEnvelopeType: wire.EnvelopeType, proto: protocol.Protocol | null, enveloping: boolean): globalThis.Promise<[wire.Value, envelope2.Responder | null, $.GoError]> {
	{
		let err = await errors.ExpectEncodings(treq, $.arrayToSlice<transport.Encoding>(["thrift"]))
		if (err != null) {
			return [new wire.Value(undefined, true), null, err]
		}
	}

	{
		let err = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as encodingapi.InboundCall).ReadFromRequest(treq) : encodingapi.InboundCall.prototype.ReadFromRequest.call(call, treq))
		if (err != null) {
			// not reachable
			return [new wire.Value(undefined, true), null, err]
		}
	}

	// Discover or choose the appropriate envelope
	{
		let [agnosticProto, ok] = $.typeAssertTuple<protocol.EnvelopeAgnosticProtocol | null>(proto, "protocol.EnvelopeAgnosticProtocol")
		if (ok) {
			return (agnosticProto !== null && (agnosticProto as any).__isVarRef !== true && (agnosticProto as any).__goValue === undefined ? (agnosticProto as Exclude<protocol.EnvelopeAgnosticProtocol, null>) : $.pointerValue<Exclude<protocol.EnvelopeAgnosticProtocol, null>>(agnosticProto)).DecodeRequest(reqEnvelopeType, reader)
		}
	}
	if (enveloping) {
		return decodeEnvelopedRequest(treq, reqEnvelopeType, proto, reader)
	}
	return decodeUnenvelopedRequest(proto, reader)
}

export async function decodeEnvelopedRequest(treq: transport.Request | $.VarRef<transport.Request> | null, reqEnvelopeType: wire.EnvelopeType, proto: protocol.Protocol | null, reader: io.ReaderAt | null): globalThis.Promise<[wire.Value, envelope2.Responder | null, $.GoError]> {
	let __goscriptShadow1: wire.Envelope = new wire.Envelope(undefined, true)
	let __goscriptTuple6: any = await (proto !== null && (proto as any).__isVarRef !== true && (proto as any).__goValue === undefined ? (proto as Exclude<protocol.Protocol, null>) : $.pointerValue<Exclude<protocol.Protocol, null>>(proto)).DecodeEnveloped(reader)
	__goscriptShadow1 = $.assignStruct(__goscriptShadow1, __goscriptTuple6[0])
	let err = __goscriptTuple6[1]
	if (err != null) {
		return [new wire.Value(undefined, true), null, err]
	}
	if (__goscriptShadow1.Type != reqEnvelopeType) {
		let __goscriptShadow2 = await errors.RequestBodyDecodeError(treq, $.namedValueInterfaceValue<$.GoError>($.int(__goscriptShadow1.Type, 8), "thrift.errUnexpectedEnvelopeType", {"Error": __goscript_envelope.errUnexpectedEnvelopeType_Error}, /* @__PURE__ */ $.basicType("int8", "thrift.errUnexpectedEnvelopeType")))
		return [new wire.Value(undefined, true), null, __goscriptShadow2]
	}
	let reqValue = (__goscriptShadow1.Value).clone()
	//lint:ignore SA1019 explicit use for known enveloping
	let responder = new binary.EnvelopeV1Responder({Name: __goscriptShadow1.Name, SeqID: __goscriptShadow1.SeqID}, true)
	return [(reqValue).clone(), $.interfaceValue<envelope2.Responder | null>((responder).clone(), "binary.EnvelopeV1Responder", "binary.EnvelopeV1Responder"), null]
}

export async function decodeUnenvelopedRequest(proto: protocol.Protocol | null, reader: io.ReaderAt | null): globalThis.Promise<[wire.Value, envelope2.Responder | null, $.GoError]> {
	let [reqValue, err] = await (proto !== null && (proto as any).__isVarRef !== true && (proto as any).__goValue === undefined ? (proto as Exclude<protocol.Protocol, null>) : $.pointerValue<Exclude<protocol.Protocol, null>>(proto)).Decode(reader, 12)
	if (err != null) {
		return [new wire.Value(undefined, true), null, err]
	}
	//lint:ignore SA1019 explicit use for known enveloping
	let responder = protocol.NoEnvelopeResponder
	return [(reqValue).clone(), responder, err]
}

export async function closeReader(r: io.Reader | null): globalThis.Promise<$.GoError> {
	let [closer, ok] = $.typeAssertTuple<io.Closer | null>(r, "io.Closer")
	if (!ok) {
		return null
	}

	return (closer !== null && (closer as any).__isVarRef !== true && (closer as any).__goValue === undefined ? (closer as Exclude<io.Closer, null>) : $.pointerValue<Exclude<io.Closer, null>>(closer)).Close()
}

export async function getReaderAt(body: io.Reader | null): globalThis.Promise<[io.ReaderAt | null, (() => void) | null, $.GoError]> {
	let reader: io.ReaderAt | null = null! as io.ReaderAt | null
	let release: (() => void) | null = null! as (() => void) | null
	let err: $.GoError = null! as $.GoError
	release = $.functionValue((): void => {
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
	{
		let [readerBody, ok] = $.typeAssertTuple<io.ReaderAt | null>(body, "io.ReaderAt")
		if (ok) {
			reader = readerBody
			return [reader, release, err]
		}
	}

	let buf: bufferpool.Buffer | $.VarRef<bufferpool.Buffer> | null = await bufferpool.Get()
	{
		let __goscriptTuple7: any = await (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as bufferpool.Buffer).ReadFrom(body) : bufferpool.Buffer.prototype.ReadFrom.call(buf, body))
		err = __goscriptTuple7[1]
		if (err != null) {
			return [reader, release, err]
		}
	}
	{
		err = await closeReader(body)
		if (err != null) {
			return [reader, release, err]
		}
	}
	reader = $.interfaceValue<io.ReaderAt | null>(bytes.NewReader((buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as bufferpool.Buffer).Bytes() : bufferpool.Buffer.prototype.Bytes.call(buf))), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader"))
	release = $.functionValue((): void => {
		bufferpool.Put(buf)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
	return [reader, release, err]
}

var __goscriptAwait: any
