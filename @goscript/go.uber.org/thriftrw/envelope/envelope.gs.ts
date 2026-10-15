// Generated file based on envelope.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as exception from "@goscript/go.uber.org/thriftrw/internal/envelope/exception/index.js"

import * as protocol from "@goscript/go.uber.org/thriftrw/protocol/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/thriftrw/internal/envelope/exception/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"

$.registerTypePackagePath("go.uber.org/thriftrw/envelope", ["envelope.Enveloper"])

export type Enveloper = {
	EnvelopeType(): wire.EnvelopeType
	MethodName(): string
	ToWire(): [wire.Value, $.GoError]
}

$.registerInterfaceType(
	"envelope.Enveloper",
	null,
	[$.methodSignature("EnvelopeType", [], [/* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType")]), $.methodSignature("MethodName", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("ToWire", [], ["wire.Value", "error"])]
);

export async function Write(p: protocol.Protocol | null, w: io.Writer | null, seqID: number, e: Enveloper | null): globalThis.Promise<$.GoError> {
	let [body, err] = await (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<Enveloper, null>) : $.pointerValue<Exclude<Enveloper, null>>(e)).ToWire()
	if (err != null) {
		return err
	}
	return (__goscriptAwait = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? (p as Exclude<protocol.Protocol, null>) : $.pointerValue<Exclude<protocol.Protocol, null>>(p)).EncodeEnveloped((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<Enveloper, null>) : $.pointerValue<Exclude<Enveloper, null>>(e)).MethodName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField1 = (__goscriptAwait = (e !== null && (e as any).__isVarRef !== true && (e as any).__goValue === undefined ? (e as Exclude<Enveloper, null>) : $.pointerValue<Exclude<Enveloper, null>>(e)).EnvelopeType(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new wire.Envelope({SeqID: seqID, Name: __goscriptLiteralField0, Type: __goscriptLiteralField1, Value: body}, true) })()), w), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function ReadReply(p: protocol.Protocol | null, r: io.ReaderAt | null): globalThis.Promise<[wire.Value, number, $.GoError]> {
	let seqID: number = 0
	let [envelope, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? (p as Exclude<protocol.Protocol, null>) : $.pointerValue<Exclude<protocol.Protocol, null>>(p)).DecodeEnveloped(r)
	if (err != null) {
		return [new wire.Value(undefined, true), 0, err]
	}

	switch ((true as boolean)) {
		case envelope.Type == 2:
		{
			return [(envelope.Value).clone(), envelope.SeqID, null]
			break
		}
		case envelope.Type != 3:
		{
			return [(envelope.Value).clone(), envelope.SeqID, fmt.Errorf("unknown envelope type for reply, got %v", $.namedValueInterfaceValue<any>(envelope.Type, "wire.EnvelopeType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))]
			break
		}
	}

	// Decode the exception payload.
	let ex: exception.TApplicationException | $.VarRef<exception.TApplicationException> | null = new exception.TApplicationException()
	{
		let __goscriptShadow0 = (ex !== null && (ex as any).__isVarRef !== true && (ex as any).__goValue === undefined ? ((ex as any) as exception.TApplicationException).FromWire((envelope.Value).clone()) : exception.TApplicationException.prototype.FromWire.call(ex, (envelope.Value).clone()))
		if (__goscriptShadow0 != null) {
			return [(envelope.Value).clone(), envelope.SeqID, fmt.Errorf("failed to decode exception: %v", (__goscriptShadow0 as any))]
		}
	}

	return [(envelope.Value).clone(), envelope.SeqID, $.interfaceValue<$.GoError>(ex, "*exception.TApplicationException", /* @__PURE__ */ $.pointerType("exception.TApplicationException"))]
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (wire.EnvelopeType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
