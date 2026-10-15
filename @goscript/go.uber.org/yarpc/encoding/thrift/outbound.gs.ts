// Generated file based on outbound.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as envelope2 from "@goscript/go.uber.org/thriftrw/envelope/index.js"

import * as protocol from "@goscript/go.uber.org/thriftrw/protocol/index.js"

import * as binary from "@goscript/go.uber.org/thriftrw/protocol/binary/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as encodingapi from "@goscript/go.uber.org/yarpc/api/encoding/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as internal from "@goscript/go.uber.org/yarpc/encoding/thrift/internal/index.js"

import * as encoding from "@goscript/go.uber.org/yarpc/pkg/encoding/index.js"

import * as errors from "@goscript/go.uber.org/yarpc/pkg/errors/index.js"

import * as procedure from "@goscript/go.uber.org/yarpc/pkg/procedure/index.js"

import * as __goscript_constants from "./constants.gs.ts"

import * as __goscript_envelope from "./envelope.gs.ts"

import * as __goscript_multiplex from "./multiplex.gs.ts"

import * as __goscript_options from "./options.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/thriftrw/envelope/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/binary/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/go.uber.org/yarpc/index.js"
import "@goscript/go.uber.org/yarpc/api/encoding/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/encoding/thrift/internal/index.js"
import "@goscript/go.uber.org/yarpc/pkg/encoding/index.js"
import "@goscript/go.uber.org/yarpc/pkg/errors/index.js"
import "@goscript/go.uber.org/yarpc/pkg/procedure/index.js"
import "./constants.gs.ts"
import "./envelope.gs.ts"
import "./multiplex.gs.ts"
import "./options.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/encoding/thrift", ["thrift.Client", "thrift.Config", "thrift.thriftClient", "thrift.thriftException"])

export type Client = {
	Call(ctx: context.Context | null, reqBody: envelope2.Enveloper | null, opts: $.Slice<yarpc.CallOption>): [wire.Value, $.GoError] | globalThis.Promise<[wire.Value, $.GoError]>
	CallOneway(ctx: context.Context | null, reqBody: envelope2.Enveloper | null, opts: $.Slice<yarpc.CallOption>): [transport.Ack | null, $.GoError] | globalThis.Promise<[transport.Ack | null, $.GoError]>
}

$.registerInterfaceType(
	"thrift.Client",
	null,
	[$.methodSignature("Call", [["ctx", "context.Context"], ["reqBody", "envelope.Enveloper"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["wire.Value", "error"]), $.methodSignature("CallOneway", [["ctx", "context.Context"], ["reqBody", "envelope.Enveloper"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["transport.Ack", "error"])]
);

export class Config {
	// Name of the Thrift service. This is the name used in the Thrift file
	// with the 'service' keyword.
	public get Service(): string {
		return this._fields.Service
	}

	public set Service(value: string) {
		this._fields.Service = value
	}

	// ClientConfig through which requests will be sent. Required.
	public get ClientConfig(): transport.ClientConfig | null {
		return this._fields.ClientConfig
	}

	public set ClientConfig(value: transport.ClientConfig | null) {
		this._fields.ClientConfig = value
	}

	public _fields: {
		Service: string
		ClientConfig: transport.ClientConfig | null
	}

	constructor(init?: Partial<{Service?: string, ClientConfig?: transport.ClientConfig | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Service: init?.Service ?? ("" as string),
			ClientConfig: init?.ClientConfig ?? (null! as transport.ClientConfig | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Config {
		return new Config(this, true)
	}

	public __goscriptAssign(source: Config): void {
		const target = this._fields
		const values = source._fields
		target.Service = values.Service
		target.ClientConfig = $.assignFieldValue(target.ClientConfig, values.ClientConfig, "transport.ClientConfig")
	}

	static __typeInfo = $.registerStructType(
		"thrift.Config",
		() => new Config(),
		() => [],
		Config,
		() => [/* @__PURE__ */ $.structField("Service", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("ClientConfig", "transport.ClientConfig", [1], 16, true)]
	)
}

export class thriftClient {
	public get cc(): transport.ClientConfig | null {
		return this._fields.cc
	}

	public set cc(value: transport.ClientConfig | null) {
		this._fields.cc = value
	}

	public get p(): protocol.Protocol | null {
		return this._fields.p
	}

	public set p(value: protocol.Protocol | null) {
		this._fields.p = value
	}

	// name of the Thrift service
	public get thriftService(): string {
		return this._fields.thriftService
	}

	public set thriftService(value: string) {
		this._fields.thriftService = value
	}

	public get Enveloping(): boolean {
		return this._fields.Enveloping
	}

	public set Enveloping(value: boolean) {
		this._fields.Enveloping = value
	}

	public _fields: {
		cc: transport.ClientConfig | null
		p: protocol.Protocol | null
		thriftService: string
		Enveloping: boolean
	}

	constructor(init?: Partial<{cc?: transport.ClientConfig | null, p?: protocol.Protocol | null, thriftService?: string, Enveloping?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			cc: init?.cc ?? (null! as transport.ClientConfig | null),
			p: init?.p ?? (null! as protocol.Protocol | null),
			thriftService: init?.thriftService ?? ("" as string),
			Enveloping: init?.Enveloping ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): thriftClient {
		return new thriftClient(this, true)
	}

	public __goscriptAssign(source: thriftClient): void {
		const target = this._fields
		const values = source._fields
		target.cc = $.assignFieldValue(target.cc, values.cc, "transport.ClientConfig")
		target.p = $.assignFieldValue(target.p, values.p, "protocol.Protocol")
		target.thriftService = values.thriftService
		target.Enveloping = values.Enveloping
	}

	public async Call(ctx: context.Context | null, reqBody: envelope2.Enveloper | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[wire.Value, $.GoError]> {
		const c = this;
		await using __defer = new $.AsyncDisposableStack()
		// Code generated for Thrift client calls will probably be something like
		// this:
		//
		// 	func (c *MyServiceClient) someMethod(ctx context.Context, arg1 Arg1Type, arg2 arg2Type, opts ...yarpc.CallOption) (returnValue, error) {
		// 		args := myservice.SomeMethodHelper.Args(arg1, arg2)
		// 		resBody, err := c.client.Call(ctx, args, opts...)
		// 		var result myservice.SomeMethodResult
		// 		if err = result.FromWire(resBody); err != nil {
		// 			return nil, err
		// 		}
		// 		success, err := myservice.SomeMethodHelper.UnwrapResponse(&result)
		// 		return success, err
		// 	}

		let out = (__goscriptAwait = $.pointerValue<Exclude<transport.ClientConfig, null>>(c.cc).GetUnaryOutbound(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let __goscriptTuple0: any = await c.buildTransportRequest(reqBody)
		let treq: transport.Request | $.VarRef<transport.Request> | null = __goscriptTuple0[0]
		let proto = __goscriptTuple0[1]
		let err = __goscriptTuple0[2]
		let treq$: transport.Request = treq == null ? $.pointerTarget<transport.Request>(treq) : (treq as any).__isVarRef === true ? (treq as any).value : (treq as any).__goValue === undefined ? (treq as any) : $.pointerTarget<transport.Request>(treq)
		if (err != null) {
			return [new wire.Value(undefined, true), err]
		}

		let call: encodingapi.OutboundCall | $.VarRef<encodingapi.OutboundCall> | null = encodingapi.NewOutboundCall(encoding.FromOptions(opts))
		let __goscriptTuple1: any = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as encodingapi.OutboundCall).WriteToRequest(ctx, treq) : encodingapi.OutboundCall.prototype.WriteToRequest.call(call, ctx, treq))
		ctx = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return [new wire.Value(undefined, true), err]
		}

		let __goscriptTuple2: any = await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<transport.UnaryOutbound, null>) : $.pointerValue<Exclude<transport.UnaryOutbound, null>>(out)).Call(ctx, treq)
		let tres: transport.Response | $.VarRef<transport.Response> | null = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		let tres$: transport.Response = tres == null ? $.pointerTarget<transport.Response>(tres) : (tres as any).__isVarRef === true ? (tres as any).value : (tres as any).__goValue === undefined ? (tres as any) : $.pointerTarget<transport.Response>(tres)
		if (err != null) {
			return [new wire.Value(undefined, true), err]
		}
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Close())($.pointerValue<Exclude<io.ReadCloser, null>>((tres$ as transport.Response).Body)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "io.Closer.Close-fm")
		__defer.defer(async () => { await __goscriptDeferCallee0() })

		{
			let __goscriptTuple3: any = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as encodingapi.OutboundCall).ReadFromResponse(ctx, tres) : encodingapi.OutboundCall.prototype.ReadFromResponse.call(call, ctx, tres))
			err = __goscriptTuple3[1]
			if (err != null) {
				return [new wire.Value(undefined, true), err]
			}
		}

		let bodyReader: io.ReaderAt | null = null! as io.ReaderAt | null

		// optimization for avoiding additional buffer copy as tchannel outbound
		// already decodes the body into io.ReaderAt compatible type
		// thrift deserializer reads sets, maps, and lists lazily which makes
		// buffer pool unusable as response handling is out of scope of this method
		{
			let [body, ok] = $.typeAssertTuple<io.ReaderAt | null>((tres$ as transport.Response).Body, "io.ReaderAt")
			if (ok) {
				bodyReader = body
			} else {
				let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = bytes.NewBuffer($.makeSlice<number>(0, 1024, "byte"))
				{
					let __goscriptTuple4: any = await bytes.Buffer.prototype.ReadFrom.call($.pointerValue<bytes.Buffer>(buf), $.pointerValueOrNil(((tres$ as transport.Response).Body as io.Reader | null))!)
					err = __goscriptTuple4[1]
					if (err != null) {
						return [new wire.Value(undefined, true), err]
					}
				}
				bodyReader = $.interfaceValue<io.ReaderAt | null>(bytes.NewReader(bytes.Buffer.prototype.Bytes.call($.pointerValue<bytes.Buffer>(buf))), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader"))
			}
		}

		let __goscriptTuple5: any = await (proto !== null && (proto as any).__isVarRef !== true && (proto as any).__goValue === undefined ? (proto as Exclude<protocol.Protocol, null>) : $.pointerValue<Exclude<protocol.Protocol, null>>(proto)).DecodeEnveloped(bodyReader)
		let __goscriptShadow0 = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [new wire.Value(undefined, true), await errors.ResponseBodyDecodeError(treq, err)]
		}

		switch (__goscriptShadow0.Type) {
			case wire.Reply:
			{
				return [(__goscriptShadow0.Value).clone(), null]
				break
			}
			case wire.Exception:
			{
				let exc: $.VarRef<internal.TApplicationException> = $.varRef(new internal.TApplicationException(undefined, true))
				{
					let __goscriptShadow1 = exc.value.FromWire((__goscriptShadow0.Value).clone())
					if (__goscriptShadow1 != null) {
						return [new wire.Value(undefined, true), await errors.ResponseBodyDecodeError(treq, __goscriptShadow1)]
					}
				}
				return [new wire.Value(undefined, true), $.interfaceValue<$.GoError>(new thriftException({Service: (treq$ as transport.Request).Service, Procedure: (treq$ as transport.Request).Procedure, Reason: exc}, true), "thrift.thriftException", "thrift.thriftException")]
				break
			}
			default:
			{
				return [new wire.Value(undefined, true), await errors.ResponseBodyDecodeError(treq, $.namedValueInterfaceValue<$.GoError>($.int(__goscriptShadow0.Type, 8), "thrift.errUnexpectedEnvelopeType", {"Error": __goscript_envelope.errUnexpectedEnvelopeType_Error}, /* @__PURE__ */ $.basicType("int8", "thrift.errUnexpectedEnvelopeType")))]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async CallOneway(ctx: context.Context | null, reqBody: envelope2.Enveloper | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[transport.Ack | null, $.GoError]> {
		const c = this;
		let out = (__goscriptAwait = $.pointerValue<Exclude<transport.ClientConfig, null>>(c.cc).GetOnewayOutbound(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let __goscriptTuple6: any = await c.buildTransportRequest(reqBody)
		let treq: transport.Request | $.VarRef<transport.Request> | null = __goscriptTuple6[0]
		let err = __goscriptTuple6[2]
		if (err != null) {
			return [null, err]
		}

		let call: encodingapi.OutboundCall | $.VarRef<encodingapi.OutboundCall> | null = encodingapi.NewOutboundCall(encoding.FromOptions(opts))
		let __goscriptTuple7: any = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as encodingapi.OutboundCall).WriteToRequest(ctx, treq) : encodingapi.OutboundCall.prototype.WriteToRequest.call(call, ctx, treq))
		ctx = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return [null, err]
		}

		return (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<transport.OnewayOutbound, null>) : $.pointerValue<Exclude<transport.OnewayOutbound, null>>(out)).CallOneway(ctx, treq)
	}

	public async buildTransportRequest(reqBody: envelope2.Enveloper | null): globalThis.Promise<[transport.Request | $.VarRef<transport.Request> | null, protocol.Protocol | null, $.GoError]> {
		const c = this;
		let proto = c.p
		if (!c.Enveloping) {
			proto = $.interfaceValue<protocol.Protocol | null>(new __goscript_envelope.disableEnvelopingProtocol({Protocol: proto, Type: 2}, true), "thrift.disableEnvelopingProtocol", "thrift.disableEnvelopingProtocol")
		}

		let treq = $.varRef((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<transport.ClientConfig, null>>(c.cc).Caller(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField1 = (__goscriptAwait = $.pointerValue<Exclude<transport.ClientConfig, null>>(c.cc).Service(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField2 = procedure.ToName(c.thriftService, (__goscriptAwait = (reqBody !== null && (reqBody as any).__isVarRef !== true && (reqBody as any).__goValue === undefined ? (reqBody as Exclude<envelope2.Enveloper, null>) : $.pointerValue<Exclude<envelope2.Enveloper, null>>(reqBody)).MethodName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)); return new transport.Request({Caller: __goscriptLiteralField0, Service: __goscriptLiteralField1, Encoding: "thrift", Procedure: __goscriptLiteralField2}, true) })()))

		let [value, err] = await (reqBody !== null && (reqBody as any).__isVarRef !== true && (reqBody as any).__goValue === undefined ? (reqBody as Exclude<envelope2.Enveloper, null>) : $.pointerValue<Exclude<envelope2.Enveloper, null>>(reqBody)).ToWire()
		if (err != null) {
			// ToWire validates the request. If it failed, we should return the error
			// as-is because it's not an encoding error.
			return [null, null, err]
		}

		let reqEnvelopeType = (__goscriptAwait = (reqBody !== null && (reqBody as any).__isVarRef !== true && (reqBody as any).__goValue === undefined ? (reqBody as Exclude<envelope2.Enveloper, null>) : $.pointerValue<Exclude<envelope2.Enveloper, null>>(reqBody)).EnvelopeType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((reqEnvelopeType != 1) && (reqEnvelopeType != 4)) {
			return [null, null, await errors.RequestBodyEncodeError(treq, $.namedValueInterfaceValue<$.GoError>($.int(reqEnvelopeType, 8), "thrift.errUnexpectedEnvelopeType", {"Error": __goscript_envelope.errUnexpectedEnvelopeType_Error}, /* @__PURE__ */ $.basicType("int8", "thrift.errUnexpectedEnvelopeType")))]
		}

		let buffer: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
		err = (__goscriptAwait = (proto !== null && (proto as any).__isVarRef !== true && (proto as any).__goValue === undefined ? (proto as Exclude<protocol.Protocol, null>) : $.pointerValue<Exclude<protocol.Protocol, null>>(proto)).EncodeEnveloped((await (async () => { const __goscriptLiteralField3 = (__goscriptAwait = (reqBody !== null && (reqBody as any).__isVarRef !== true && (reqBody as any).__goValue === undefined ? (reqBody as Exclude<envelope2.Enveloper, null>) : $.pointerValue<Exclude<envelope2.Enveloper, null>>(reqBody)).MethodName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new wire.Envelope({Name: __goscriptLiteralField3, Type: reqEnvelopeType, SeqID: 1, Value: value}, true) })()), $.interfaceValue<io.Writer | null>(buffer, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			return [null, null, await errors.RequestBodyEncodeError(treq, err)]
		}

		treq.value.Body = $.interfaceValue<io.Reader | null>(buffer, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"))
		treq.value.BodySize = buffer.value.Len()
		return [treq, proto, null]
	}

	static __typeInfo = $.registerStructType(
		"thrift.thriftClient",
		() => new thriftClient(),
		() => [$.methodSignature("Call", [["ctx", "context.Context"], ["reqBody", "envelope.Enveloper"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["wire.Value", "error"]), $.methodSignature("CallOneway", [["ctx", "context.Context"], ["reqBody", "envelope.Enveloper"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["transport.Ack", "error"]), $.methodSignature("buildTransportRequest", [["reqBody", "envelope.Enveloper"]], [/* @__PURE__ */ $.pointerType("transport.Request"), "protocol.Protocol", "error"])],
		thriftClient,
		() => [/* @__PURE__ */ $.structField("cc", "transport.ClientConfig", [0], 0, false, { pkgPath: "go.uber.org/yarpc/encoding/thrift" }), /* @__PURE__ */ $.structField("p", "protocol.Protocol", [1], 16, false, { pkgPath: "go.uber.org/yarpc/encoding/thrift" }), /* @__PURE__ */ $.structField("thriftService", /* @__PURE__ */ $.basicType("string"), [2], 32, false, { pkgPath: "go.uber.org/yarpc/encoding/thrift" }), /* @__PURE__ */ $.structField("Enveloping", /* @__PURE__ */ $.basicType("bool"), [3], 48, true)]
	)
}

export class thriftException {
	public get Service(): string {
		return this._fields.Service
	}

	public set Service(value: string) {
		this._fields.Service = value
	}

	public get Procedure(): string {
		return this._fields.Procedure
	}

	public set Procedure(value: string) {
		this._fields.Procedure = value
	}

	public get Reason(): internal.TApplicationException | $.VarRef<internal.TApplicationException> | null {
		return this._fields.Reason
	}

	public set Reason(value: internal.TApplicationException | $.VarRef<internal.TApplicationException> | null) {
		this._fields.Reason = value
	}

	public _fields: {
		Service: string
		Procedure: string
		Reason: internal.TApplicationException | $.VarRef<internal.TApplicationException> | null
	}

	constructor(init?: Partial<{Service?: string, Procedure?: string, Reason?: internal.TApplicationException | $.VarRef<internal.TApplicationException> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Service: init?.Service ?? ("" as string),
			Procedure: init?.Procedure ?? ("" as string),
			Reason: init?.Reason ?? (null! as internal.TApplicationException | $.VarRef<internal.TApplicationException> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): thriftException {
		return new thriftException(this, true)
	}

	public __goscriptAssign(source: thriftException): void {
		const target = this._fields
		const values = source._fields
		target.Service = values.Service
		target.Procedure = values.Procedure
		target.Reason = values.Reason
	}

	public async Error(): globalThis.Promise<string> {
		const e = this;
		return fmt.Sprintf("thrift request to procedure %q of service %q encountered an internal failure: %v", e.Procedure, e.Service, $.interfaceValue(e.Reason, "*internal.TApplicationException", /* @__PURE__ */ $.pointerType("internal.TApplicationException")))
	}

	static __typeInfo = $.registerStructType(
		"thrift.thriftException",
		() => new thriftException(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		thriftException,
		() => [/* @__PURE__ */ $.structField("Service", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Procedure", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Reason", /* @__PURE__ */ $.pointerType("internal.TApplicationException"), [2], 32, true)]
	)
}

export function New(c: Config, opts: $.Slice<__goscript_options.ClientOption | null>): Client | null {
	// Code generated for Thrift client instantiation will probably be something
	// like this:
	//
	// 	func New(cc transport.ClientConfig, opts ...ClientOption) *MyServiceClient {
	// 		c := thrift.New(thrift.Config{
	// 			Service: "MyService",
	// 			ClientConfig: cc,
	// 			Protocol: protocol.Binary,
	// 		}, opts...)
	// 		return &MyServiceClient{client: c}
	// 	}
	//
	// So Config is really the internal config as far as consumers of the
	// generated client are concerned.

	let cc: $.VarRef<__goscript_options.clientConfig> = $.varRef(new __goscript_options.clientConfig(undefined, true))
	for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_options.ClientOption | null)
		void (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<__goscript_options.ClientOption, null>) : $.pointerValue<Exclude<__goscript_options.ClientOption, null>>(opt)).applyClientOption(cc)
	}

	let p: protocol.Protocol | null = $.interfaceValue<protocol.Protocol | null>(binary.Default, "*binary.Protocol", /* @__PURE__ */ $.pointerType("binary.Protocol"))
	if (cc.value.Protocol != null) {
		p = cc.value.Protocol
	}

	let svc = c.Service
	if (!$.stringEqual(cc.value.ServiceName, "")) {
		svc = cc.value.ServiceName
	}

	if (cc.value.Multiplexed) {
		p = $.interfaceValue<protocol.Protocol | null>(new __goscript_multiplex.multiplexedOutboundProtocol({Protocol: p, Service: svc}, true), "thrift.multiplexedOutboundProtocol", "thrift.multiplexedOutboundProtocol")
	}

	return $.interfaceValue<Client | null>(new thriftClient({p: p, cc: c.ClientConfig, thriftService: svc, Enveloping: cc.value.Enveloping}, true), "thrift.thriftClient", "thrift.thriftClient")
}

var __goscriptAwait: any
