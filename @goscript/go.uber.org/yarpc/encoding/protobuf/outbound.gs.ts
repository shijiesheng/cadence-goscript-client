// Generated file based on outbound.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as jsonpb from "@goscript/github.com/gogo/protobuf/jsonpb/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as apiencoding from "@goscript/go.uber.org/yarpc/api/encoding/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as encoding2 from "@goscript/go.uber.org/yarpc/pkg/encoding/index.js"

import * as errors from "@goscript/go.uber.org/yarpc/pkg/errors/index.js"

import * as procedure from "@goscript/go.uber.org/yarpc/pkg/procedure/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_marshal from "./marshal.gs.ts"

import * as __goscript_protobuf from "./protobuf.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/gogo/protobuf/jsonpb/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/go.uber.org/yarpc/index.js"
import "@goscript/go.uber.org/yarpc/api/encoding/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/pkg/encoding/index.js"
import "@goscript/go.uber.org/yarpc/pkg/errors/index.js"
import "@goscript/go.uber.org/yarpc/pkg/procedure/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/io/index.js"
import "./error.gs.ts"
import "./marshal.gs.ts"
import "./protobuf.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/encoding/protobuf", ["protobuf.client"])

export class client {
	public get serviceName(): string {
		return this._fields.serviceName
	}

	public set serviceName(value: string) {
		this._fields.serviceName = value
	}

	public get outboundConfig(): transport.OutboundConfig | $.VarRef<transport.OutboundConfig> | null {
		return this._fields.outboundConfig
	}

	public set outboundConfig(value: transport.OutboundConfig | $.VarRef<transport.OutboundConfig> | null) {
		this._fields.outboundConfig = value
	}

	public get encoding(): transport.Encoding {
		return this._fields.encoding
	}

	public set encoding(value: transport.Encoding) {
		this._fields.encoding = value
	}

	public get codec(): __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null {
		return this._fields.codec
	}

	public set codec(value: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null) {
		this._fields.codec = value
	}

	public _fields: {
		serviceName: string
		outboundConfig: transport.OutboundConfig | $.VarRef<transport.OutboundConfig> | null
		encoding: transport.Encoding
		codec: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null
	}

	constructor(init?: Partial<{serviceName?: string, outboundConfig?: transport.OutboundConfig | $.VarRef<transport.OutboundConfig> | null, encoding?: transport.Encoding, codec?: __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			serviceName: init?.serviceName ?? ("" as string),
			outboundConfig: init?.outboundConfig ?? (null! as transport.OutboundConfig | $.VarRef<transport.OutboundConfig> | null),
			encoding: init?.encoding ?? ("" as transport.Encoding),
			codec: init?.codec ?? (null! as __goscript_marshal.codec | $.VarRef<__goscript_marshal.codec> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): client {
		return new client(this, true)
	}

	public __goscriptAssign(source: client): void {
		const target = this._fields
		const values = source._fields
		target.serviceName = values.serviceName
		target.outboundConfig = values.outboundConfig
		target.encoding = values.encoding
		target.codec = values.codec
	}

	public async Call(ctx: context.Context | null, requestMethodName: string, request: proto.Message | null, newResponse: (() => proto.Message | null | globalThis.Promise<proto.Message | null>) | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[proto.Message | null, $.GoError]> {
		const c: client | $.VarRef<client> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const c$: client = c == null ? $.pointerTarget<client>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<client>(c)
		let __goscriptTuple0: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as client).buildTransportRequest(ctx, requestMethodName, request, options) : client.prototype.buildTransportRequest.call(c, ctx, requestMethodName, request, options))
		ctx = __goscriptTuple0[0]
		let call: apiencoding.OutboundCall | $.VarRef<apiencoding.OutboundCall> | null = __goscriptTuple0[1]
		let transportRequest: transport.Request | $.VarRef<transport.Request> | null = __goscriptTuple0[2]
		let cleanup: (() => void) | null = __goscriptTuple0[3]
		let err = __goscriptTuple0[4]
		let transportRequest$: transport.Request = transportRequest == null ? $.pointerTarget<transport.Request>(transportRequest) : (transportRequest as any).__isVarRef === true ? (transportRequest as any).value : (transportRequest as any).__goValue === undefined ? (transportRequest as any) : $.pointerTarget<transport.Request>(transportRequest)
		if (cleanup != null) {
			const __goscriptDeferCallee0 = cleanup
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		}
		if (err != null) {
			return [null, err]
		}
		let unaryOutbound = $.pointerValue<transport.OutboundConfig>((c$ as client).outboundConfig).Outbounds.Unary
		if (unaryOutbound == null) {
			return [null, yarpcerrors.InternalErrorf("no unary outbounds for OutboundConfig %s", $.arrayToSlice<any>([$.pointerValue<transport.OutboundConfig>((c$ as client).outboundConfig).CallerName]))]
		}
		let __goscriptTuple1: any = await (unaryOutbound !== null && (unaryOutbound as any).__isVarRef !== true && (unaryOutbound as any).__goValue === undefined ? (unaryOutbound as Exclude<transport.UnaryOutbound, null>) : $.pointerValue<Exclude<transport.UnaryOutbound, null>>(unaryOutbound)).Call(ctx, transportRequest)
		let transportResponse: transport.Response | $.VarRef<transport.Response> | null = __goscriptTuple1[0]
		let appErr = __goscriptTuple1[1]
		let transportResponse$: transport.Response = transportResponse == null ? $.pointerTarget<transport.Response>(transportResponse) : (transportResponse as any).__isVarRef === true ? (transportResponse as any).value : (transportResponse as any).__goValue === undefined ? (transportResponse as any) : $.pointerTarget<transport.Response>(transportResponse)
		appErr = await __goscript_error.convertFromYARPCError((transportRequest$ as transport.Request).Encoding, appErr, (c$ as client).codec)
		if (transportResponse == null) {
			return [null, appErr]
		}
		if ((transportResponse$ as transport.Response).Body != null) {
			// thrift is not checking the error, should be consistent
			const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Close())($.pointerValue<Exclude<io.ReadCloser, null>>((transportResponse$ as transport.Response).Body)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "io.Closer.Close-fm")
			__defer.defer(async () => { await __goscriptDeferCallee1() })
		}
		{
			let [, __goscriptShadow0] = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as apiencoding.OutboundCall).ReadFromResponse(ctx, transportResponse) : apiencoding.OutboundCall.prototype.ReadFromResponse.call(call, ctx, transportResponse))
			if (__goscriptShadow0 != null) {
				return [null, __goscriptShadow0]
			}
		}
		let response: proto.Message | null = null! as proto.Message | null
		if ((transportResponse$ as transport.Response).Body != null) {
			response = (__goscriptAwait = newResponse!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			{
				let __goscriptShadow1 = await __goscript_marshal.unmarshal((transportRequest$ as transport.Request).Encoding, ((transportResponse$ as transport.Response).Body as io.Reader | null), response, (c$ as client).codec)
				if (__goscriptShadow1 != null) {
					return [null, await errors.ResponseBodyDecodeError(transportRequest, __goscriptShadow1)]
				}
			}
		}
		return [response, appErr]
	}

	public async CallOneway(ctx: context.Context | null, requestMethodName: string, request: proto.Message | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[transport.Ack | null, $.GoError]> {
		const c: client | $.VarRef<client> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const c$: client = c == null ? $.pointerTarget<client>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<client>(c)
		let __goscriptTuple2: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? ((c as any) as client).buildTransportRequest(ctx, requestMethodName, request, options) : client.prototype.buildTransportRequest.call(c, ctx, requestMethodName, request, options))
		ctx = __goscriptTuple2[0]
		let transportRequest: transport.Request | $.VarRef<transport.Request> | null = __goscriptTuple2[2]
		let cleanup: (() => void) | null = __goscriptTuple2[3]
		let err = __goscriptTuple2[4]
		if (cleanup != null) {
			const __goscriptDeferCallee2 = cleanup
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee2!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		}
		if (err != null) {
			return [null, err]
		}
		let onewayOutbound = $.pointerValue<transport.OutboundConfig>((c$ as client).outboundConfig).Outbounds.Oneway
		if (onewayOutbound == null) {
			return [null, yarpcerrors.InternalErrorf("no oneway outbounds for OutboundConfig %s", $.arrayToSlice<any>([$.pointerValue<transport.OutboundConfig>((c$ as client).outboundConfig).CallerName]))]
		}
		let __goscriptTuple3: any = await (onewayOutbound !== null && (onewayOutbound as any).__isVarRef !== true && (onewayOutbound as any).__goValue === undefined ? (onewayOutbound as Exclude<transport.OnewayOutbound, null>) : $.pointerValue<Exclude<transport.OnewayOutbound, null>>(onewayOutbound)).CallOneway(ctx, transportRequest)
		let ack = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		return [ack, await __goscript_error.convertFromYARPCError($.pointerValue<transport.Request>(transportRequest).Encoding, err, (c$ as client).codec)]
	}

	public async CallStream(ctx: context.Context | null, requestMethodName: string, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[__goscript_protobuf.ClientStream | $.VarRef<__goscript_protobuf.ClientStream> | null, $.GoError]> {
		const c: client | $.VarRef<client> | null = this;
		const c$: client = c == null ? $.pointerTarget<client>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<client>(c)
		let streamRequest: transport.StreamRequest | $.VarRef<transport.StreamRequest> | null = new transport.StreamRequest({Meta: (() => { const __goscriptLiteralField0 = procedure.ToName((c$ as client).serviceName, requestMethodName); return new transport.RequestMeta({Caller: $.pointerValue<transport.OutboundConfig>((c$ as client).outboundConfig).CallerName, Service: $.pointerValue<transport.OutboundConfig>((c$ as client).outboundConfig).Outbounds.ServiceName, Procedure: __goscriptLiteralField0, Encoding: (c$ as client).encoding}) })()})
		let streamRequest$: transport.StreamRequest = streamRequest == null ? $.pointerTarget<transport.StreamRequest>(streamRequest) : (streamRequest as any).__isVarRef === true ? (streamRequest as any).value : (streamRequest as any).__goValue === undefined ? (streamRequest as any) : $.pointerTarget<transport.StreamRequest>(streamRequest)
		let __goscriptTuple4: any = apiencoding.NewStreamOutboundCall(encoding2.FromOptions(opts))
		let call: apiencoding.OutboundCall | $.VarRef<apiencoding.OutboundCall> | null = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		if (err != null) {
			return [null, err]
		}
		let __goscriptTuple5: any = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as apiencoding.OutboundCall).WriteToRequestMeta(ctx, (streamRequest$ as transport.StreamRequest).Meta) : apiencoding.OutboundCall.prototype.WriteToRequestMeta.call(call, ctx, (streamRequest$ as transport.StreamRequest).Meta))
		ctx = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}
		if ((!$.stringEqual($.pointerValue<transport.RequestMeta>((streamRequest$ as transport.StreamRequest).Meta).Encoding, "proto")) && (!$.stringEqual($.pointerValue<transport.RequestMeta>((streamRequest$ as transport.StreamRequest).Meta).Encoding, "json"))) {
			return [null, yarpcerrors.InternalErrorf("can only use encodings %q or %q, but %q was specified", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>("proto", "transport.Encoding", {}, /* @__PURE__ */ $.basicType("string", "transport.Encoding")), $.namedValueInterfaceValue<any>("json", "transport.Encoding", {}, /* @__PURE__ */ $.basicType("string", "transport.Encoding")), $.namedValueInterfaceValue<any>($.pointerValue<transport.RequestMeta>((streamRequest$ as transport.StreamRequest).Meta).Encoding, "transport.Encoding", {}, /* @__PURE__ */ $.basicType("string", "transport.Encoding"))]))]
		}
		let streamOutbound = $.pointerValue<transport.OutboundConfig>((c$ as client).outboundConfig).Outbounds.Stream
		if (streamOutbound == null) {
			return [null, yarpcerrors.InternalErrorf("no stream outbounds for OutboundConfig %s", $.arrayToSlice<any>([$.pointerValue<transport.OutboundConfig>((c$ as client).outboundConfig).CallerName]))]
		}
		let __goscriptTuple6: any = await (streamOutbound !== null && (streamOutbound as any).__isVarRef !== true && (streamOutbound as any).__goValue === undefined ? (streamOutbound as Exclude<transport.StreamOutbound, null>) : $.pointerValue<Exclude<transport.StreamOutbound, null>>(streamOutbound)).CallStream(ctx, streamRequest)
		let stream: transport.ClientStream | $.VarRef<transport.ClientStream> | null = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return [null, await __goscript_error.convertFromYARPCError($.pointerValue<transport.RequestMeta>((streamRequest$ as transport.StreamRequest).Meta).Encoding, err, (c$ as client).codec)]
		}
		return [new __goscript_protobuf.ClientStream({stream: stream, codec: (c$ as client).codec}), null]
	}

	public async buildTransportRequest(ctx: context.Context | null, requestMethodName: string, request: proto.Message | null, options: $.Slice<yarpc.CallOption>): globalThis.Promise<[context.Context | null, apiencoding.OutboundCall | $.VarRef<apiencoding.OutboundCall> | null, transport.Request | $.VarRef<transport.Request> | null, (() => void) | null, $.GoError]> {
		const c: client | $.VarRef<client> | null = this;
		const c$: client = c == null ? $.pointerTarget<client>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<client>(c)
		let transportRequest: transport.Request | $.VarRef<transport.Request> | null = (() => { const __goscriptLiteralField1 = procedure.ToName((c$ as client).serviceName, requestMethodName); return new transport.Request({Caller: $.pointerValue<transport.OutboundConfig>((c$ as client).outboundConfig).CallerName, Service: $.pointerValue<transport.OutboundConfig>((c$ as client).outboundConfig).Outbounds.ServiceName, Procedure: __goscriptLiteralField1, Encoding: (c$ as client).encoding}) })()
		let transportRequest$: transport.Request = transportRequest == null ? $.pointerTarget<transport.Request>(transportRequest) : (transportRequest as any).__isVarRef === true ? (transportRequest as any).value : (transportRequest as any).__goValue === undefined ? (transportRequest as any) : $.pointerTarget<transport.Request>(transportRequest)
		let call: apiencoding.OutboundCall | $.VarRef<apiencoding.OutboundCall> | null = apiencoding.NewOutboundCall(encoding2.FromOptions(options))
		let __goscriptTuple7: any = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as apiencoding.OutboundCall).WriteToRequest(ctx, transportRequest) : apiencoding.OutboundCall.prototype.WriteToRequest.call(call, ctx, transportRequest))
		ctx = __goscriptTuple7[0]
		let err = __goscriptTuple7[1]
		if (err != null) {
			return [null, null, null, (null as (() => void) | null), err]
		}
		if ((!$.stringEqual((transportRequest$ as transport.Request).Encoding, "proto")) && (!$.stringEqual((transportRequest$ as transport.Request).Encoding, "json"))) {
			return [null, null, null, (null as (() => void) | null), $.interfaceValue<$.GoError>(yarpcerrors.Newf(13, "can only use encodings %q or %q, but %q was specified", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>("proto", "transport.Encoding", {}, /* @__PURE__ */ $.basicType("string", "transport.Encoding")), $.namedValueInterfaceValue<any>("json", "transport.Encoding", {}, /* @__PURE__ */ $.basicType("string", "transport.Encoding")), $.namedValueInterfaceValue<any>((transportRequest$ as transport.Request).Encoding, "transport.Encoding", {}, /* @__PURE__ */ $.basicType("string", "transport.Encoding"))])), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))]
		}
		if (request != null) {
			let __goscriptTuple8: any = await __goscript_marshal.marshal((transportRequest$ as transport.Request).Encoding, request, (c$ as client).codec)
			let requestData: $.Slice<number> = __goscriptTuple8[0]
			let cleanup: (() => void) | null = __goscriptTuple8[1]
			let __goscriptShadow2 = __goscriptTuple8[2]
			if (__goscriptShadow2 != null) {
				return [null, null, null, cleanup, await errors.RequestBodyEncodeError(transportRequest, __goscriptShadow2)]
			}
			if (requestData != null) {
				;(transportRequest$ as transport.Request).Body = $.interfaceValue<io.Reader | null>(bytes.NewReader(requestData), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader"));
				;(transportRequest$ as transport.Request).BodySize = $.sliceLen(requestData)
			}
			return [ctx, call, transportRequest, cleanup, null]
		}
		return [ctx, call, transportRequest, (null as (() => void) | null), null]
	}

	static __typeInfo = $.registerStructType(
		"protobuf.client",
		() => new client(),
		() => [$.methodSignature("Call", [["ctx", "context.Context"], ["requestMethodName", /* @__PURE__ */ $.basicType("string")], ["request", "proto.Message"], ["newResponse", ({ kind: $.TypeKind.Function, params: [], results: ["proto.Message"] } as $.FunctionTypeInfo)], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["proto.Message", "error"], true), $.methodSignature("CallOneway", [["ctx", "context.Context"], ["requestMethodName", /* @__PURE__ */ $.basicType("string")], ["request", "proto.Message"], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["transport.Ack", "error"], true), $.methodSignature("CallStream", [["ctx", "context.Context"], ["requestMethodName", /* @__PURE__ */ $.basicType("string")], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], [/* @__PURE__ */ $.pointerType("protobuf.ClientStream"), "error"], true), $.methodSignature("buildTransportRequest", [["ctx", "context.Context"], ["requestMethodName", /* @__PURE__ */ $.basicType("string")], ["request", "proto.Message"], ["options", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["context.Context", /* @__PURE__ */ $.pointerType("encoding.OutboundCall"), /* @__PURE__ */ $.pointerType("transport.Request"), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "error"], true)],
		client,
		() => [/* @__PURE__ */ $.structField("serviceName", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" }), /* @__PURE__ */ $.structField("outboundConfig", /* @__PURE__ */ $.pointerType("transport.OutboundConfig"), [1], 16, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" }), /* @__PURE__ */ $.structField("encoding", /* @__PURE__ */ $.basicType("string", "transport.Encoding"), [2], 24, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" }), /* @__PURE__ */ $.structField("codec", /* @__PURE__ */ $.pointerType("protobuf.codec"), [3], 40, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" })]
	)
}

export async function newClient(serviceName: string, clientConfig: transport.ClientConfig | null, anyResolver: jsonpb.AnyResolver | null, options: $.Slice<__goscript_protobuf.ClientOption | null>): globalThis.Promise<client | $.VarRef<client> | null> {
	let outboundConfig: transport.OutboundConfig | $.VarRef<transport.OutboundConfig> | null = await toOutboundConfig(clientConfig)
	let __goscriptShadow3: client | $.VarRef<client> | null = (() => { const __goscriptLiteralField2 = __goscript_marshal.newCodec(anyResolver); return new client({serviceName: serviceName, outboundConfig: outboundConfig, encoding: "proto", codec: __goscriptLiteralField2}) })()
	for (let __goscriptRangeTarget0 = options, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let option = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_protobuf.ClientOption | null)
		void (__goscriptAwait = (option !== null && (option as any).__isVarRef !== true && (option as any).__goValue === undefined ? (option as Exclude<__goscript_protobuf.ClientOption, null>) : $.pointerValue<Exclude<__goscript_protobuf.ClientOption, null>>(option)).apply(__goscriptShadow3), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return __goscriptShadow3
}

export async function toOutboundConfig(cc: transport.ClientConfig | null): globalThis.Promise<transport.OutboundConfig | $.VarRef<transport.OutboundConfig> | null> {
	{
		let __goscriptTuple9: any = $.typeAssertTuple<transport.OutboundConfig | $.VarRef<transport.OutboundConfig> | null>(cc, /* @__PURE__ */ $.pointerType("transport.OutboundConfig"))
		let outboundConfig: transport.OutboundConfig | $.VarRef<transport.OutboundConfig> | null = __goscriptTuple9[0]
		let ok = __goscriptTuple9[1]
		if (ok) {
			return outboundConfig
		}
	}
	// If the config is not an *OutboundConfig we assume the only Outbound is
	// unary and create our own outbound config.
	// If there is no unary outbound, this function will panic, but, we're kinda
	// stuck with that. (and why the hell are you passing a oneway-only client
	// config to protobuf anyway?).
	return (await (async () => { const __goscriptLiteralField3 = (__goscriptAwait = (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? (cc as Exclude<transport.ClientConfig, null>) : $.pointerValue<Exclude<transport.ClientConfig, null>>(cc)).Caller(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new transport.OutboundConfig({CallerName: __goscriptLiteralField3, Outbounds: (await (async () => { const __goscriptLiteralField4 = (__goscriptAwait = (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? (cc as Exclude<transport.ClientConfig, null>) : $.pointerValue<Exclude<transport.ClientConfig, null>>(cc)).Service(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField5 = (__goscriptAwait = (cc !== null && (cc as any).__isVarRef !== true && (cc as any).__goValue === undefined ? (cc as Exclude<transport.ClientConfig, null>) : $.pointerValue<Exclude<transport.ClientConfig, null>>(cc)).GetUnaryOutbound(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new transport.Outbounds({ServiceName: __goscriptLiteralField4, Unary: __goscriptLiteralField5}, true) })())}) })())
}

var __goscriptAwait: any
