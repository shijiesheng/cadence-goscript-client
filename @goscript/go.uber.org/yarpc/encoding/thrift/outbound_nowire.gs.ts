// Generated file based on outbound_nowire.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as binary from "@goscript/go.uber.org/thriftrw/protocol/binary/index.js"

import * as stream from "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import * as yarpc from "@goscript/go.uber.org/yarpc/index.js"

import * as encodingapi from "@goscript/go.uber.org/yarpc/api/encoding/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as internal from "@goscript/go.uber.org/yarpc/encoding/thrift/internal/index.js"

import * as encoding from "@goscript/go.uber.org/yarpc/pkg/encoding/index.js"

import * as errors from "@goscript/go.uber.org/yarpc/pkg/errors/index.js"

import * as procedure from "@goscript/go.uber.org/yarpc/pkg/procedure/index.js"

import * as protocol from "@goscript/go.uber.org/thriftrw/protocol/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_constants from "./constants.gs.ts"

import * as __goscript_envelope from "./envelope.gs.ts"

import * as __goscript_multiplex from "./multiplex.gs.ts"

import * as __goscript_options from "./options.gs.ts"

import * as __goscript_outbound from "./outbound.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/binary/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/go.uber.org/yarpc/index.js"
import "@goscript/go.uber.org/yarpc/api/encoding/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/encoding/thrift/internal/index.js"
import "@goscript/go.uber.org/yarpc/pkg/encoding/index.js"
import "@goscript/go.uber.org/yarpc/pkg/errors/index.js"
import "@goscript/go.uber.org/yarpc/pkg/procedure/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/index.js"
import "@goscript/io/index.js"
import "./constants.gs.ts"
import "./envelope.gs.ts"
import "./multiplex.gs.ts"
import "./options.gs.ts"
import "./outbound.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/encoding/thrift", ["thrift.NoWireClient", "thrift.noWireThriftClient"])

export type NoWireClient = {
	Call(ctx: context.Context | null, reqBody: stream.Enveloper | null, resBody: stream.BodyReader | null, opts: $.Slice<yarpc.CallOption>): $.GoError | globalThis.Promise<$.GoError>
	CallOneway(ctx: context.Context | null, reqBody: stream.Enveloper | null, opts: $.Slice<yarpc.CallOption>): [transport.Ack | null, $.GoError] | globalThis.Promise<[transport.Ack | null, $.GoError]>
	Enabled(): boolean
}

$.registerInterfaceType(
	"thrift.NoWireClient",
	null,
	[$.methodSignature("Call", [["ctx", "context.Context"], ["reqBody", "stream.Enveloper"], ["resBody", "stream.BodyReader"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"]), $.methodSignature("CallOneway", [["ctx", "context.Context"], ["reqBody", "stream.Enveloper"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["transport.Ack", "error"]), $.methodSignature("Enabled", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export class noWireThriftClient {
	public get cc(): transport.ClientConfig | null {
		return this._fields.cc
	}

	public set cc(value: transport.ClientConfig | null) {
		this._fields.cc = value
	}

	public get p(): stream.Protocol | null {
		return this._fields.p
	}

	public set p(value: stream.Protocol | null) {
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

	public get NoWire(): boolean {
		return this._fields.NoWire
	}

	public set NoWire(value: boolean) {
		this._fields.NoWire = value
	}

	public _fields: {
		cc: transport.ClientConfig | null
		p: stream.Protocol | null
		thriftService: string
		Enveloping: boolean
		NoWire: boolean
	}

	constructor(init?: Partial<{cc?: transport.ClientConfig | null, p?: stream.Protocol | null, thriftService?: string, Enveloping?: boolean, NoWire?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			cc: init?.cc ?? (null! as transport.ClientConfig | null),
			p: init?.p ?? (null! as stream.Protocol | null),
			thriftService: init?.thriftService ?? ("" as string),
			Enveloping: init?.Enveloping ?? (false as boolean),
			NoWire: init?.NoWire ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): noWireThriftClient {
		return new noWireThriftClient(this, true)
	}

	public __goscriptAssign(source: noWireThriftClient): void {
		const target = this._fields
		const values = source._fields
		target.cc = $.assignFieldValue(target.cc, values.cc, "transport.ClientConfig")
		target.p = $.assignFieldValue(target.p, values.p, "stream.Protocol")
		target.thriftService = values.thriftService
		target.Enveloping = values.Enveloping
		target.NoWire = values.NoWire
	}

	public async Call(ctx: context.Context | null, reqBody: stream.Enveloper | null, resBody: stream.BodyReader | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<$.GoError> {
		const c = this;
		await using __defer = new $.AsyncDisposableStack()
		// Code generated for Thrift client calls will probably be something like
		// this:
		//
		// 	func (c *MyServiceClient) someMethod(ctx context.Context, arg1 Arg1Type, arg2 arg2Type, opts ...yarpc.CallOption) (returnValue, error) {
		// 		var result myservice.SomeMethodResult
		// 		args := myservice.SomeMethodHelper.Args(arg1, arg2)
		// 		err := c.client.Call(ctx, args, result, opts...)
		//
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
			return err
		}

		let call: encodingapi.OutboundCall | $.VarRef<encodingapi.OutboundCall> | null = encodingapi.NewOutboundCall(encoding.FromOptions(opts))
		let __goscriptTuple1: any = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as encodingapi.OutboundCall).WriteToRequest(ctx, treq) : encodingapi.OutboundCall.prototype.WriteToRequest.call(call, ctx, treq))
		ctx = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		if (err != null) {
			return err
		}

		let __goscriptTuple2: any = await (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<transport.UnaryOutbound, null>) : $.pointerValue<Exclude<transport.UnaryOutbound, null>>(out)).Call(ctx, treq)
		let tres: transport.Response | $.VarRef<transport.Response> | null = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		let tres$: transport.Response = tres == null ? $.pointerTarget<transport.Response>(tres) : (tres as any).__isVarRef === true ? (tres as any).value : (tres as any).__goValue === undefined ? (tres as any) : $.pointerTarget<transport.Response>(tres)
		if (err != null) {
			return err
		}
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Close())($.pointerValue<Exclude<io.ReadCloser, null>>((tres$ as transport.Response).Body)), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "io.Closer.Close-fm")
		__defer.defer(async () => { await __goscriptDeferCallee0() })

		{
			let [, __goscriptShadow0] = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as encodingapi.OutboundCall).ReadFromResponse(ctx, tres) : encodingapi.OutboundCall.prototype.ReadFromResponse.call(call, ctx, tres))
			if (__goscriptShadow0 != null) {
				return __goscriptShadow0
			}
		}

		let sr = (__goscriptAwait = (proto !== null && (proto as any).__isVarRef !== true && (proto as any).__goValue === undefined ? (proto as Exclude<stream.Protocol, null>) : $.pointerValue<Exclude<stream.Protocol, null>>(proto)).Reader(((tres$ as transport.Response).Body as io.Reader | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Close())((sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr))), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/thriftrw/protocol/stream.Reader.Close-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		let __goscriptTuple3: any = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadEnvelopeBegin()
		let envelope = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return await errors.ResponseBodyDecodeError(treq, err)
		}

		switch (envelope.Type) {
			case wire.Reply:
			{
				{
					let __goscriptShadow1 = (__goscriptAwait = (resBody !== null && (resBody as any).__isVarRef !== true && (resBody as any).__goValue === undefined ? (resBody as Exclude<stream.BodyReader, null>) : $.pointerValue<Exclude<stream.BodyReader, null>>(resBody)).Decode(sr), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (__goscriptShadow1 != null) {
						return __goscriptShadow1
					}
				}
				return (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadEnvelopeEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				break
			}
			case wire.Exception:
			{
				let exc: $.VarRef<internal.TApplicationException> = $.varRef(new internal.TApplicationException(undefined, true))
				{
					let __goscriptShadow2 = await exc.value.Decode(sr)
					if (__goscriptShadow2 != null) {
						return await errors.ResponseBodyDecodeError(treq, __goscriptShadow2)
					}
				}
				__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
					;(__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadEnvelopeEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				})() })

				return $.interfaceValue<$.GoError>(new __goscript_outbound.thriftException({Service: (treq$ as transport.Request).Service, Procedure: (treq$ as transport.Request).Procedure, Reason: exc}, true), "thrift.thriftException", "thrift.thriftException")
				break
			}
			default:
			{
				return await errors.ResponseBodyDecodeError(treq, $.namedValueInterfaceValue<$.GoError>($.int(envelope.Type, 8), "thrift.errUnexpectedEnvelopeType", {"Error": __goscript_envelope.errUnexpectedEnvelopeType_Error}, /* @__PURE__ */ $.basicType("int8", "thrift.errUnexpectedEnvelopeType")))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async CallOneway(ctx: context.Context | null, reqBody: stream.Enveloper | null, opts: $.Slice<yarpc.CallOption>): globalThis.Promise<[transport.Ack | null, $.GoError]> {
		const c = this;
		let out = (__goscriptAwait = $.pointerValue<Exclude<transport.ClientConfig, null>>(c.cc).GetOnewayOutbound(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let __goscriptTuple4: any = await c.buildTransportRequest(reqBody)
		let treq: transport.Request | $.VarRef<transport.Request> | null = __goscriptTuple4[0]
		let err = __goscriptTuple4[2]
		if (err != null) {
			return [null, err]
		}

		let call: encodingapi.OutboundCall | $.VarRef<encodingapi.OutboundCall> | null = encodingapi.NewOutboundCall(encoding.FromOptions(opts))
		let __goscriptTuple5: any = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as encodingapi.OutboundCall).WriteToRequest(ctx, treq) : encodingapi.OutboundCall.prototype.WriteToRequest.call(call, ctx, treq))
		ctx = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		if (err != null) {
			return [null, err]
		}

		return (out !== null && (out as any).__isVarRef !== true && (out as any).__goValue === undefined ? (out as Exclude<transport.OnewayOutbound, null>) : $.pointerValue<Exclude<transport.OnewayOutbound, null>>(out)).CallOneway(ctx, treq)
	}

	public Enabled(): boolean {
		const c = this;
		return c.NoWire
	}

	public async buildTransportRequest(reqBody: stream.Enveloper | null): globalThis.Promise<[transport.Request | $.VarRef<transport.Request> | null, stream.Protocol | null, $.GoError]> {
		const c = this;
		await using __defer = new $.AsyncDisposableStack()
		let proto = c.p
		if (!c.Enveloping) {
			proto = $.interfaceValue<stream.Protocol | null>(new __goscript_envelope.disableEnvelopingNoWireProtocol({Protocol: proto, Type: 2}, true), "thrift.disableEnvelopingNoWireProtocol", "thrift.disableEnvelopingNoWireProtocol")
		}

		let treq = $.varRef((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<transport.ClientConfig, null>>(c.cc).Caller(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField1 = (__goscriptAwait = $.pointerValue<Exclude<transport.ClientConfig, null>>(c.cc).Service(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField2 = procedure.ToName(c.thriftService, (__goscriptAwait = (reqBody !== null && (reqBody as any).__isVarRef !== true && (reqBody as any).__goValue === undefined ? (reqBody as Exclude<stream.Enveloper, null>) : $.pointerValue<Exclude<stream.Enveloper, null>>(reqBody)).MethodName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)); return new transport.Request({Caller: __goscriptLiteralField0, Service: __goscriptLiteralField1, Encoding: "thrift", Procedure: __goscriptLiteralField2}, true) })()))

		let envType = (__goscriptAwait = (reqBody !== null && (reqBody as any).__isVarRef !== true && (reqBody as any).__goValue === undefined ? (reqBody as Exclude<stream.Enveloper, null>) : $.pointerValue<Exclude<stream.Enveloper, null>>(reqBody)).EnvelopeType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if ((envType != 1) && (envType != 4)) {
			return [null, null, await errors.RequestBodyEncodeError(treq, $.namedValueInterfaceValue<$.GoError>($.int(envType, 8), "thrift.errUnexpectedEnvelopeType", {"Error": __goscript_envelope.errUnexpectedEnvelopeType_Error}, /* @__PURE__ */ $.basicType("int8", "thrift.errUnexpectedEnvelopeType")))]
		}

		let buffer: $.VarRef<bytes.Buffer> = $.varRef($.markAsStructValue(new bytes.Buffer()))
		let sw = (__goscriptAwait = (proto !== null && (proto as any).__isVarRef !== true && (proto as any).__goValue === undefined ? (proto as Exclude<stream.Protocol, null>) : $.pointerValue<Exclude<stream.Protocol, null>>(proto)).Writer($.interfaceValue<io.Writer | null>(buffer, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Close())((sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw))), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/thriftrw/protocol/stream.Writer.Close-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee2(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		{
			let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteEnvelopeBegin((await (async () => { const __goscriptLiteralField3 = (__goscriptAwait = (reqBody !== null && (reqBody as any).__isVarRef !== true && (reqBody as any).__goValue === undefined ? (reqBody as Exclude<stream.Enveloper, null>) : $.pointerValue<Exclude<stream.Enveloper, null>>(reqBody)).MethodName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new stream.EnvelopeHeader({Name: __goscriptLiteralField3, Type: envType, SeqID: 1}, true) })())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, null, await errors.RequestBodyEncodeError(treq, err)]
			}
		}

		{
			let err = (__goscriptAwait = (reqBody !== null && (reqBody as any).__isVarRef !== true && (reqBody as any).__goValue === undefined ? (reqBody as Exclude<stream.Enveloper, null>) : $.pointerValue<Exclude<stream.Enveloper, null>>(reqBody)).Encode(sw), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, null, await errors.RequestBodyEncodeError(treq, err)]
			}
		}

		{
			let err = (__goscriptAwait = (sw !== null && (sw as any).__isVarRef !== true && (sw as any).__goValue === undefined ? (sw as Exclude<stream.Writer, null>) : $.pointerValue<Exclude<stream.Writer, null>>(sw)).WriteEnvelopeEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [null, null, await errors.RequestBodyEncodeError(treq, err)]
			}
		}

		treq.value.Body = $.interfaceValue<io.Reader | null>(buffer, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer"))
		treq.value.BodySize = buffer.value.Len()
		return [treq, proto, null]
	}

	static __typeInfo = $.registerStructType(
		"thrift.noWireThriftClient",
		() => new noWireThriftClient(),
		() => [$.methodSignature("Call", [["ctx", "context.Context"], ["reqBody", "stream.Enveloper"], ["resBody", "stream.BodyReader"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["error"]), $.methodSignature("CallOneway", [["ctx", "context.Context"], ["reqBody", "stream.Enveloper"], ["opts", /* @__PURE__ */ $.sliceType("yarpc.CallOption")]], ["transport.Ack", "error"]), $.methodSignature("Enabled", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("buildTransportRequest", [["reqBody", "stream.Enveloper"]], [/* @__PURE__ */ $.pointerType("transport.Request"), "stream.Protocol", "error"])],
		noWireThriftClient,
		() => [/* @__PURE__ */ $.structField("cc", "transport.ClientConfig", [0], 0, false, { pkgPath: "go.uber.org/yarpc/encoding/thrift" }), /* @__PURE__ */ $.structField("p", "stream.Protocol", [1], 16, false, { pkgPath: "go.uber.org/yarpc/encoding/thrift" }), /* @__PURE__ */ $.structField("thriftService", /* @__PURE__ */ $.basicType("string"), [2], 32, false, { pkgPath: "go.uber.org/yarpc/encoding/thrift" }), /* @__PURE__ */ $.structField("Enveloping", /* @__PURE__ */ $.basicType("bool"), [3], 48, true), /* @__PURE__ */ $.structField("NoWire", /* @__PURE__ */ $.basicType("bool"), [4], 49, true)]
	)
}

export async function NewNoWire(c: __goscript_outbound.Config, opts: $.Slice<__goscript_options.ClientOption | null>): globalThis.Promise<NoWireClient | null> {
	// Code generated for Thrift client instantiation will probably be something
	// like this:
	//
	// 	func New(cc transport.ClientConfig, opts ...ClientOption) *MyServiceClient {
	// 		c := thrift.NewNoWire(thrift.Config{
	// 			Service: "MyService",
	// 			ClientConfig: cc,
	// 			Protocol: binary.Default,
	// 		}, opts...)
	// 		return &MyServiceClient{client: c}
	// 	}
	//
	// So Config is really the internal config as far as consumers of the
	// generated client are concerned.

	// default NoWire to true because this is the our final state to achieve
	// but we still allow users to opt out by overriding NoWire to false.
	let cc = $.varRef(new __goscript_options.clientConfig({NoWire: true}, true))
	for (let __goscriptRangeTarget0 = opts, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let opt = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_options.ClientOption | null)
		void (__goscriptAwait = (opt !== null && (opt as any).__isVarRef !== true && (opt as any).__goValue === undefined ? (opt as Exclude<__goscript_options.ClientOption, null>) : $.pointerValue<Exclude<__goscript_options.ClientOption, null>>(opt)).applyClientOption(cc), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	let p: stream.Protocol | null = $.interfaceValue<stream.Protocol | null>(binary.Default, "*binary.Protocol", /* @__PURE__ */ $.pointerType("binary.Protocol"))
	if (cc.value.Protocol != null) {
		{
			let [val, ok] = $.typeAssertTuple<stream.Protocol | null>(cc.value.Protocol, "stream.Protocol")
			if (ok) {
				p = val
			} else {
				$.panic(await fmt.Sprintf("Protocol config option provided, NewNoWire expects provided protocol %T to implement stream.Protocol", (cc.value.Protocol as any)))
			}
		}
	}

	let svc = c.Service
	if (!$.stringEqual(cc.value.ServiceName, "")) {
		svc = cc.value.ServiceName
	}

	if (cc.value.Multiplexed) {
		p = $.interfaceValue<stream.Protocol | null>(new __goscript_multiplex.multiplexedOutboundNoWireProtocol({Protocol: p, Service: svc}, true), "thrift.multiplexedOutboundNoWireProtocol", "thrift.multiplexedOutboundNoWireProtocol")
	}

	return $.interfaceValue<NoWireClient | null>(new noWireThriftClient({p: p, cc: c.ClientConfig, thriftService: svc, Enveloping: cc.value.Enveloping, NoWire: cc.value.NoWire}, true), "thrift.noWireThriftClient", "thrift.noWireThriftClient")
}

var __goscriptAwait: any
