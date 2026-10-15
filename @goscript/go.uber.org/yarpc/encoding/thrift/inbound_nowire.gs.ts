// Generated file based on inbound_nowire.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as io from "@goscript/io/index.js"

import * as multierr from "@goscript/go.uber.org/multierr/index.js"

import * as stream from "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import * as encodingapi from "@goscript/go.uber.org/yarpc/api/encoding/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as errors from "@goscript/go.uber.org/yarpc/pkg/errors/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as __goscript_constants from "./constants.gs.ts"

import * as __goscript_envelope from "./envelope.gs.ts"

import * as __goscript_inbound from "./inbound.gs.ts"

import * as __goscript_response from "./response.gs.ts"
import "@goscript/context/index.js"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/multierr/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/go.uber.org/yarpc/api/encoding/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/pkg/errors/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "./constants.gs.ts"
import "./envelope.gs.ts"
import "./inbound.gs.ts"
import "./response.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/encoding/thrift", ["thrift.NoWireCall", "thrift.NoWireHandler", "thrift.thriftNoWireHandler"])

export type NoWireHandler = {
	HandleNoWire(_p0: context.Context | null, _p1: NoWireCall | $.VarRef<NoWireCall> | null): [__goscript_response.NoWireResponse, $.GoError]
}

$.registerInterfaceType(
	"thrift.NoWireHandler",
	null,
	[$.methodSignature("HandleNoWire", ["context.Context", /* @__PURE__ */ $.pointerType("thrift.NoWireCall")], ["thrift.NoWireResponse", "error"])]
);

export class NoWireCall {
	public get Reader(): io.Reader | null {
		return this._fields.Reader
	}

	public set Reader(value: io.Reader | null) {
		this._fields.Reader = value
	}

	public get RequestReader(): stream.RequestReader | null {
		return this._fields.RequestReader
	}

	public set RequestReader(value: stream.RequestReader | null) {
		this._fields.RequestReader = value
	}

	public get EnvelopeType(): wire.EnvelopeType {
		return this._fields.EnvelopeType
	}

	public set EnvelopeType(value: wire.EnvelopeType) {
		this._fields.EnvelopeType = value
	}

	public _fields: {
		Reader: io.Reader | null
		RequestReader: stream.RequestReader | null
		EnvelopeType: wire.EnvelopeType
	}

	constructor(init?: Partial<{Reader?: io.Reader | null, RequestReader?: stream.RequestReader | null, EnvelopeType?: wire.EnvelopeType}>, __goscriptValue?: boolean) {
		this._fields = {
			Reader: init?.Reader ?? (null! as io.Reader | null),
			RequestReader: init?.RequestReader ?? (null! as stream.RequestReader | null),
			EnvelopeType: init?.EnvelopeType ?? (0 as wire.EnvelopeType)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): NoWireCall {
		return new NoWireCall(this, true)
	}

	public __goscriptAssign(source: NoWireCall): void {
		const target = this._fields
		const values = source._fields
		target.Reader = $.assignFieldValue(target.Reader, values.Reader, "io.Reader")
		target.RequestReader = $.assignFieldValue(target.RequestReader, values.RequestReader, "stream.RequestReader")
		target.EnvelopeType = values.EnvelopeType
	}

	static __typeInfo = $.registerStructType(
		"thrift.NoWireCall",
		() => new NoWireCall(),
		() => [],
		NoWireCall,
		() => [/* @__PURE__ */ $.structField("Reader", "io.Reader", [0], 0, true), /* @__PURE__ */ $.structField("RequestReader", "stream.RequestReader", [1], 16, true), /* @__PURE__ */ $.structField("EnvelopeType", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType"), [2], 32, true)]
	)
}

export class thriftNoWireHandler {
	public get Handler(): NoWireHandler | null {
		return this._fields.Handler
	}

	public set Handler(value: NoWireHandler | null) {
		this._fields.Handler = value
	}

	public get RequestReader(): stream.RequestReader | null {
		return this._fields.RequestReader
	}

	public set RequestReader(value: stream.RequestReader | null) {
		this._fields.RequestReader = value
	}

	public _fields: {
		Handler: NoWireHandler | null
		RequestReader: stream.RequestReader | null
	}

	constructor(init?: Partial<{Handler?: NoWireHandler | null, RequestReader?: stream.RequestReader | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Handler: init?.Handler ?? (null! as NoWireHandler | null),
			RequestReader: init?.RequestReader ?? (null! as stream.RequestReader | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): thriftNoWireHandler {
		return new thriftNoWireHandler(this, true)
	}

	public __goscriptAssign(source: thriftNoWireHandler): void {
		const target = this._fields
		const values = source._fields
		target.Handler = $.assignFieldValue(target.Handler, values.Handler, "thrift.NoWireHandler")
		target.RequestReader = $.assignFieldValue(target.RequestReader, values.RequestReader, "stream.RequestReader")
	}

	public async Handle(ctx: context.Context | null, treq: transport.Request | $.VarRef<transport.Request> | null, rw: transport.ResponseWriter | null): globalThis.Promise<$.GoError> {
		const t = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple0: any = await encodingapi.NewInboundCall(ctx)
		ctx = __goscriptTuple0[0]
		let call: encodingapi.InboundCall | $.VarRef<encodingapi.InboundCall> | null = __goscriptTuple0[1]
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			err = multierr.Append(err, await __goscript_inbound.closeReader($.pointerValue<transport.Request>(treq).Body))
		})() })

		let __goscriptTuple1: any = await t.decodeAndHandle(ctx, call, treq, rw, 1)
		let res = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			const __goscriptReturn0: $.GoError = err
			err = __goscriptReturn0
			await __defer.dispose()
			return err
		}

		{
			let resType = (__goscriptAwait = $.pointerValue<Exclude<stream.Enveloper, null>>(res.Body).EnvelopeType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (resType != 2) {
				const __goscriptReturn1: $.GoError = await errors.ResponseBodyEncodeError(treq, $.namedValueInterfaceValue<$.GoError>($.int(resType, 8), "thrift.errUnexpectedEnvelopeType", {"Error": __goscript_envelope.errUnexpectedEnvelopeType_Error}, /* @__PURE__ */ $.basicType("int8", "thrift.errUnexpectedEnvelopeType")))
				err = __goscriptReturn1
				await __defer.dispose()
				return err
			}
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
				const __goscriptReturn2: $.GoError = __goscriptShadow0
				err = __goscriptReturn2
				await __defer.dispose()
				return err
			}
		}

		{
			let __goscriptShadow1 = (__goscriptAwait = $.pointerValue<Exclude<stream.ResponseWriter, null>>(res.ResponseWriter).WriteResponse(2, (rw as io.Writer | null), res.Body), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow1 != null) {
				const __goscriptReturn3: $.GoError = await errors.ResponseBodyEncodeError(treq, __goscriptShadow1)
				err = __goscriptReturn3
				await __defer.dispose()
				return err
			}
		}

		const __goscriptReturn4: $.GoError = null
		err = __goscriptReturn4
		await __defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async HandleOneway(ctx: context.Context | null, treq: transport.Request | $.VarRef<transport.Request> | null): globalThis.Promise<$.GoError> {
		const t = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		let __goscriptTuple2: any = await encodingapi.NewInboundCall(ctx)
		ctx = __goscriptTuple2[0]
		let call: encodingapi.InboundCall | $.VarRef<encodingapi.InboundCall> | null = __goscriptTuple2[1]
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			err = multierr.Append(err, await __goscript_inbound.closeReader($.pointerValue<transport.Request>(treq).Body))
		})() })

		let __goscriptTuple3: any = await t.decodeAndHandle(ctx, call, treq, null, 4)
		err = __goscriptTuple3[1]
		const __goscriptReturn5: $.GoError = err
		err = __goscriptReturn5
		await __defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async decodeAndHandle(ctx: context.Context | null, call: encodingapi.InboundCall | $.VarRef<encodingapi.InboundCall> | null, treq: transport.Request | $.VarRef<transport.Request> | null, rw: transport.ResponseWriter | null, reqEnvelopeType: wire.EnvelopeType): globalThis.Promise<[__goscript_response.NoWireResponse, $.GoError]> {
		const t = this;
		{
			let err = await errors.ExpectEncodings(treq, $.arrayToSlice<transport.Encoding>(["thrift"]))
			if (err != null) {
				return [(__goscript_get__emptyResponse()).clone(), err]
			}
		}

		{
			let err = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as encodingapi.InboundCall).ReadFromRequest(treq) : encodingapi.InboundCall.prototype.ReadFromRequest.call(call, treq))
			if (err != null) {
				return [(__goscript_get__emptyResponse()).clone(), err]
			}
		}

		let nwc = $.varRef(new NoWireCall({Reader: $.pointerValue<transport.Request>(treq).Body, EnvelopeType: reqEnvelopeType, RequestReader: t.RequestReader}, true))

		return $.pointerValue<Exclude<NoWireHandler, null>>(t.Handler).HandleNoWire(ctx, nwc)
	}

	static __typeInfo = $.registerStructType(
		"thrift.thriftNoWireHandler",
		() => new thriftNoWireHandler(),
		() => [$.methodSignature("Handle", [["ctx", "context.Context"], ["treq", /* @__PURE__ */ $.pointerType("transport.Request")], ["rw", "transport.ResponseWriter"]], [["err", "error"]]), $.methodSignature("HandleOneway", [["ctx", "context.Context"], ["treq", /* @__PURE__ */ $.pointerType("transport.Request")]], [["err", "error"]]), $.methodSignature("decodeAndHandle", [["ctx", "context.Context"], ["call", /* @__PURE__ */ $.pointerType("encoding.InboundCall")], ["treq", /* @__PURE__ */ $.pointerType("transport.Request")], ["rw", "transport.ResponseWriter"], ["reqEnvelopeType", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType")]], ["thrift.NoWireResponse", "error"])],
		thriftNoWireHandler,
		() => [/* @__PURE__ */ $.structField("Handler", "thrift.NoWireHandler", [0], 0, true), /* @__PURE__ */ $.structField("RequestReader", "stream.RequestReader", [1], 16, true)]
	)
}

export var _emptyResponse: __goscript_response.NoWireResponse

export function __goscript_init__emptyResponse(): void {
	if (((_emptyResponse) as any) === undefined) {
		_emptyResponse = new __goscript_response.NoWireResponse(undefined, true)
	}
}

export function __goscript_get__emptyResponse(): __goscript_response.NoWireResponse {
	if (((_emptyResponse) as any) === undefined) {
		__goscript_init__emptyResponse()
	}
	return _emptyResponse
}

export function __goscript_set__emptyResponse(__goscriptValue: __goscript_response.NoWireResponse): void {
	$.assignStruct(_emptyResponse, __goscriptValue)
}

var __goscriptAwait: any
