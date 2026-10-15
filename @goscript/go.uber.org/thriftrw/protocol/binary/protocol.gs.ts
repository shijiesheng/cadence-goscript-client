// Generated file based on protocol.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as envelope from "@goscript/go.uber.org/thriftrw/protocol/envelope/index.js"

import * as stream from "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import * as __goscript_envelope from "./envelope.gs.ts"

import * as __goscript_reader from "./reader.gs.ts"

import * as __goscript_responder from "./responder.gs.ts"

import * as __goscript_stream_envelope from "./stream_envelope.gs.ts"

import * as __goscript_stream_reader from "./stream_reader.gs.ts"

import * as __goscript_stream_writer from "./stream_writer.gs.ts"

import * as __goscript_string_post_go120 from "./string_post_go120.gs.ts"

import * as __goscript_writer from "./writer.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/envelope/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"
import "./envelope.gs.ts"
import "./reader.gs.ts"
import "./responder.gs.ts"
import "./stream_envelope.gs.ts"
import "./stream_reader.gs.ts"
import "./stream_writer.gs.ts"
import "./string_post_go120.gs.ts"
import "./writer.gs.ts"

$.registerTypePackagePath("go.uber.org/thriftrw/protocol/binary", ["binary.Protocol", "binary.errUnexpectedEnvelopeType"])

export type errUnexpectedEnvelopeType = number

$.registerNamedValueType(
	"binary.errUnexpectedEnvelopeType",
	{Error: (receiver: any, ...args: any[]) => (errUnexpectedEnvelopeType_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*binary.errUnexpectedEnvelopeType",
	{Error: (receiver: any, ...args: any[]) => (errUnexpectedEnvelopeType_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class Protocol {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Protocol {
		return new Protocol(this, true)
	}

	public __goscriptAssign(source: Protocol): void {
	}

	public async Decode(r: io.ReaderAt | null, t: wire.Type): globalThis.Promise<[wire.Value, $.GoError]> {
		let __goscriptShadow0 = $.varRef(__goscript_reader.NewReader(r))
		let [value, , err] = await __goscriptShadow0.value.ReadValue(t, 0n)
		return [(value).clone(), err]
	}

	public async DecodeEnveloped(r: io.ReaderAt | null): globalThis.Promise<[wire.Envelope, $.GoError]> {
		let __goscriptShadow1 = $.varRef(__goscript_reader.NewReader(r))
		let [e, err] = await __goscriptShadow1.value.ReadEnveloped()
		return [(e).clone(), err]
	}

	public async DecodeRequest(et: wire.EnvelopeType, r: io.ReaderAt | null): globalThis.Promise<[wire.Value, envelope.Responder | null, $.GoError]> {
		const p: Protocol | $.VarRef<Protocol> | null = this;
		let buf: Uint8Array = $.arrayValue(new Uint8Array(2))

		// If we fail to read two bytes, the only possible valid value is the empty struct.
		{
			let [count, ] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<io.ReaderAt, null>) : $.pointerValue<Exclude<io.ReaderAt, null>>(r)).ReadAt($.goSlice(buf, 0, 2), 0n)
			if (count < 2) {
				let [val, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Protocol).Decode(r, 12) : Protocol.prototype.Decode.call(p, r, 12))
				return [(val).clone(), $.interfaceValue<envelope.Responder | null>(__goscript_responder.NoEnvelopeResponder, "*binary.noEnvelopeResponder", /* @__PURE__ */ $.pointerType("binary.noEnvelopeResponder")), err]
			}
		}

		// If length > 1, 0x00 is only a valid preamble for a non-strict enveloped request.
		if ($.arrayIndex(buf, 0) == 0x00) {
			let [e, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Protocol).DecodeEnveloped(r) : Protocol.prototype.DecodeEnveloped.call(p, r))
			if (err != null) {
				return [new wire.Value(undefined, true), $.interfaceValue<envelope.Responder | null>(__goscript_responder.NoEnvelopeResponder, "*binary.noEnvelopeResponder", /* @__PURE__ */ $.pointerType("binary.noEnvelopeResponder")), err]
			}
			if (e.Type != et) {
				return [new wire.Value(undefined, true), $.interfaceValue<envelope.Responder | null>(__goscript_responder.NoEnvelopeResponder, "*binary.noEnvelopeResponder", /* @__PURE__ */ $.pointerType("binary.noEnvelopeResponder")), $.namedValueInterfaceValue<$.GoError>($.int(e.Type, 8), "binary.errUnexpectedEnvelopeType", {"Error": errUnexpectedEnvelopeType_Error}, /* @__PURE__ */ $.basicType("int8", "binary.errUnexpectedEnvelopeType"))]
			}
			return [(e.Value).clone(), $.interfaceValue<envelope.Responder | null>(new __goscript_responder.EnvelopeV0Responder({Name: e.Name, SeqID: e.SeqID}), "*binary.EnvelopeV0Responder", /* @__PURE__ */ $.pointerType("binary.EnvelopeV0Responder")), null]
		}

		// Only strict (versioned) envelopes begin with the most significant bit set.
		// This could only be confused for a type identifier greater than 127
		// (beyond the 15 Thrift has at time of writing), or a message name longer
		// than 16MB.
		if ($.uint(($.arrayIndex(buf, 0) & 0x80), 8) > 0) {
			let [e, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Protocol).DecodeEnveloped(r) : Protocol.prototype.DecodeEnveloped.call(p, r))
			if (err != null) {
				return [new wire.Value(undefined, true), $.interfaceValue<envelope.Responder | null>(__goscript_responder.NoEnvelopeResponder, "*binary.noEnvelopeResponder", /* @__PURE__ */ $.pointerType("binary.noEnvelopeResponder")), err]
			}
			if (e.Type != et) {
				return [new wire.Value(undefined, true), $.interfaceValue<envelope.Responder | null>(__goscript_responder.NoEnvelopeResponder, "*binary.noEnvelopeResponder", /* @__PURE__ */ $.pointerType("binary.noEnvelopeResponder")), $.namedValueInterfaceValue<$.GoError>($.int(e.Type, 8), "binary.errUnexpectedEnvelopeType", {"Error": errUnexpectedEnvelopeType_Error}, /* @__PURE__ */ $.basicType("int8", "binary.errUnexpectedEnvelopeType"))]
			}
			return [(e.Value).clone(), $.interfaceValue<envelope.Responder | null>(new __goscript_responder.EnvelopeV1Responder({Name: e.Name, SeqID: e.SeqID}), "*binary.EnvelopeV1Responder", /* @__PURE__ */ $.pointerType("binary.EnvelopeV1Responder")), null]
		}

		// All other patterns are either bare structs or invalid.
		// We delegate to the struct decoder to distinguish invalid type
		// identifiers, outside the 0-15 range.
		let [val, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Protocol).Decode(r, 12) : Protocol.prototype.Decode.call(p, r, 12))
		return [(val).clone(), $.interfaceValue<envelope.Responder | null>(__goscript_responder.NoEnvelopeResponder, "*binary.noEnvelopeResponder", /* @__PURE__ */ $.pointerType("binary.noEnvelopeResponder")), err]
	}

	public async Encode(v: wire.Value, w: io.Writer | null): globalThis.Promise<$.GoError> {
		let writer: __goscript_writer.Writer | $.VarRef<__goscript_writer.Writer> | null = await __goscript_writer.BorrowWriter(w)
		let err = await (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? ((writer as any) as __goscript_writer.Writer).WriteValue((v).clone()) : __goscript_writer.Writer.prototype.WriteValue.call(writer, (v).clone()))
		__goscript_writer.ReturnWriter(writer)
		return err
	}

	public async EncodeEnveloped(e: wire.Envelope, w: io.Writer | null): globalThis.Promise<$.GoError> {
		let writer: __goscript_writer.Writer | $.VarRef<__goscript_writer.Writer> | null = await __goscript_writer.BorrowWriter(w)
		let err = await (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? ((writer as any) as __goscript_writer.Writer).WriteEnveloped(e) : __goscript_writer.Writer.prototype.WriteEnveloped.call(writer, e))
		__goscript_writer.ReturnWriter(writer)
		return err
	}

	public async ReadRequest(ctx: context.Context | null, et: wire.EnvelopeType, r: io.Reader | null, body: stream.BodyReader | null): globalThis.Promise<[stream.ResponseWriter | null, $.GoError]> {
		const p: Protocol | $.VarRef<Protocol> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		let buf: Uint8Array = $.arrayValue(new Uint8Array(2))

		// If we fail to read two bytes, the only possible valid value is the
		// empty struct.
		{
			let [count, ] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? (r as Exclude<io.Reader, null>) : $.pointerValue<Exclude<io.Reader, null>>(r)).Read($.goSlice(buf, 0, 2))
			if (count < 2) {
				let sr = await Protocol.prototype.Reader.call(p, $.interfaceValue<io.Reader | null>(bytes.NewReader($.goSlice(buf, undefined, count)), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))
				const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Close())((sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr))), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/thriftrw/protocol/stream.Reader.Close-fm")
				__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee0(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
				return [$.interfaceValue<stream.ResponseWriter | null>(__goscript_responder.NoEnvelopeResponder, "*binary.noEnvelopeResponder", /* @__PURE__ */ $.pointerType("binary.noEnvelopeResponder")), (__goscriptAwait = (body !== null && (body as any).__isVarRef !== true && (body as any).__goValue === undefined ? (body as Exclude<stream.BodyReader, null>) : $.pointerValue<Exclude<stream.BodyReader, null>>(body)).Decode(sr), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
			}
		}

		// Reset the Reader to allow for properly reading the envelope if it
		// exists.
		{
			let [seeker, ok] = $.typeAssertTuple<io.Seeker | null>(r, "io.Seeker")
			if (ok) {
				// If the reader supports seking, use that.
				{
					let [, err] = await (seeker !== null && (seeker as any).__isVarRef !== true && (seeker as any).__goValue === undefined ? (seeker as Exclude<io.Seeker, null>) : $.pointerValue<Exclude<io.Seeker, null>>(seeker)).Seek(-2n, 1)
					if (err != null) {
						return [null, err]
					}
				}
			} else {
				// Otherwise, create a new reader with the buffered bytes.
				r = io.MultiReader($.pointerValueOrNil($.interfaceValue<io.Reader | null>(bytes.NewReader($.goSlice(buf, undefined, undefined)), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")))!, $.pointerValueOrNil(r)!)
			}
		}

		let sr = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Protocol).Reader(r) : Protocol.prototype.Reader.call(p, r))
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Close())((sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr))), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "go.uber.org/thriftrw/protocol/stream.Reader.Close-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })

		switch ((true as boolean)) {
			case $.arrayIndex(buf, 0) == 0x00:
			{
				let [e, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Protocol).readEnvelopeHeader(sr, et) : Protocol.prototype.readEnvelopeHeader.call(p, sr, et))
				if (err != null) {
					return [$.interfaceValue<stream.ResponseWriter | null>(__goscript_responder.NoEnvelopeResponder, "*binary.noEnvelopeResponder", /* @__PURE__ */ $.pointerType("binary.noEnvelopeResponder")), err]
				}

				{
					let __goscriptShadow2 = (__goscriptAwait = (body !== null && (body as any).__isVarRef !== true && (body as any).__goValue === undefined ? (body as Exclude<stream.BodyReader, null>) : $.pointerValue<Exclude<stream.BodyReader, null>>(body)).Decode(sr), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (__goscriptShadow2 != null) {
						return [$.interfaceValue<stream.ResponseWriter | null>(__goscript_responder.NoEnvelopeResponder, "*binary.noEnvelopeResponder", /* @__PURE__ */ $.pointerType("binary.noEnvelopeResponder")), __goscriptShadow2]
					}
				}

				{
					let __goscriptShadow3 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadEnvelopeEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (__goscriptShadow3 != null) {
						return [$.interfaceValue<stream.ResponseWriter | null>(__goscript_responder.NoEnvelopeResponder, "*binary.noEnvelopeResponder", /* @__PURE__ */ $.pointerType("binary.noEnvelopeResponder")), __goscriptShadow3]
					}
				}

				return [$.interfaceValue<stream.ResponseWriter | null>(new __goscript_responder.EnvelopeV0Responder({Name: e.Name, SeqID: e.SeqID}), "*binary.EnvelopeV0Responder", /* @__PURE__ */ $.pointerType("binary.EnvelopeV0Responder")), null]
				break
			}
			case $.uint(($.arrayIndex(buf, 0) & 0x80), 8) > 0:
			{
				let [e, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as Protocol).readEnvelopeHeader(sr, et) : Protocol.prototype.readEnvelopeHeader.call(p, sr, et))
				if (err != null) {
					return [$.interfaceValue<stream.ResponseWriter | null>(__goscript_responder.NoEnvelopeResponder, "*binary.noEnvelopeResponder", /* @__PURE__ */ $.pointerType("binary.noEnvelopeResponder")), err]
				}

				{
					let __goscriptShadow4 = (__goscriptAwait = (body !== null && (body as any).__isVarRef !== true && (body as any).__goValue === undefined ? (body as Exclude<stream.BodyReader, null>) : $.pointerValue<Exclude<stream.BodyReader, null>>(body)).Decode(sr), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (__goscriptShadow4 != null) {
						return [$.interfaceValue<stream.ResponseWriter | null>(__goscript_responder.NoEnvelopeResponder, "*binary.noEnvelopeResponder", /* @__PURE__ */ $.pointerType("binary.noEnvelopeResponder")), __goscriptShadow4]
					}
				}

				{
					let __goscriptShadow5 = (__goscriptAwait = (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadEnvelopeEnd(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (__goscriptShadow5 != null) {
						return [$.interfaceValue<stream.ResponseWriter | null>(__goscript_responder.NoEnvelopeResponder, "*binary.noEnvelopeResponder", /* @__PURE__ */ $.pointerType("binary.noEnvelopeResponder")), __goscriptShadow5]
					}
				}

				return [$.interfaceValue<stream.ResponseWriter | null>(new __goscript_responder.EnvelopeV1Responder({Name: e.Name, SeqID: e.SeqID}), "*binary.EnvelopeV1Responder", /* @__PURE__ */ $.pointerType("binary.EnvelopeV1Responder")), null]
				break
			}
			default:
			{
				return [$.interfaceValue<stream.ResponseWriter | null>(__goscript_responder.NoEnvelopeResponder, "*binary.noEnvelopeResponder", /* @__PURE__ */ $.pointerType("binary.noEnvelopeResponder")), (__goscriptAwait = (body !== null && (body as any).__isVarRef !== true && (body as any).__goValue === undefined ? (body as Exclude<stream.BodyReader, null>) : $.pointerValue<Exclude<stream.BodyReader, null>>(body)).Decode(sr), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Reader(r: io.Reader | null): globalThis.Promise<stream.Reader | null> {
		return $.interfaceValue<stream.Reader | null>(await __goscript_stream_reader.NewStreamReader(r), "*binary.StreamReader", /* @__PURE__ */ $.pointerType("binary.StreamReader"))
	}

	public async Writer(w: io.Writer | null): globalThis.Promise<stream.Writer | null> {
		return $.interfaceValue<stream.Writer | null>(await __goscript_stream_writer.NewStreamWriter(w), "*binary.StreamWriter", /* @__PURE__ */ $.pointerType("binary.StreamWriter"))
	}

	public async readEnvelopeHeader(sr: stream.Reader | null, et: wire.EnvelopeType): globalThis.Promise<[stream.EnvelopeHeader, $.GoError]> {
		const p: Protocol | $.VarRef<Protocol> | null = this;
		let [eh, err] = await (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? (sr as Exclude<stream.Reader, null>) : $.pointerValue<Exclude<stream.Reader, null>>(sr)).ReadEnvelopeBegin()
		if (err != null) {
			return [(eh).clone(), err]
		}
		if (eh.Type != et) {
			return [(eh).clone(), $.namedValueInterfaceValue<$.GoError>($.int(eh.Type, 8), "binary.errUnexpectedEnvelopeType", {"Error": errUnexpectedEnvelopeType_Error}, /* @__PURE__ */ $.basicType("int8", "binary.errUnexpectedEnvelopeType"))]
		}
		return [(eh).clone(), err]
	}

	static __typeInfo = $.registerStructType(
		"binary.Protocol",
		() => new Protocol(),
		() => [$.methodSignature("Decode", [["r", "io.ReaderAt"], ["t", /* @__PURE__ */ $.basicType("uint8", "wire.Type")]], ["wire.Value", "error"], true), $.methodSignature("DecodeEnveloped", [["r", "io.ReaderAt"]], ["wire.Envelope", "error"], true), $.methodSignature("DecodeRequest", [["et", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType")], ["r", "io.ReaderAt"]], ["wire.Value", "envelope.Responder", "error"], true), $.methodSignature("Encode", [["v", "wire.Value"], ["w", "io.Writer"]], ["error"], true), $.methodSignature("EncodeEnveloped", [["e", "wire.Envelope"], ["w", "io.Writer"]], ["error"], true), $.methodSignature("ReadRequest", [["ctx", "context.Context"], ["et", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType")], ["r", "io.Reader"], ["body", "stream.BodyReader"]], ["stream.ResponseWriter", "error"], true), $.methodSignature("Reader", [["r", "io.Reader"]], ["stream.Reader"], true), $.methodSignature("Writer", [["w", "io.Writer"]], ["stream.Writer"], true), $.methodSignature("readEnvelopeHeader", [["sr", "stream.Reader"], ["et", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType")]], ["stream.EnvelopeHeader", "error"], true)],
		Protocol,
		() => []
	)
}

export let Default: Protocol | $.VarRef<Protocol> | null = new Protocol()

export function __goscript_set_Default(__goscriptValue: Protocol | $.VarRef<Protocol> | null): void {
	Default = __goscriptValue
}

export async function errUnexpectedEnvelopeType_Error(e: errUnexpectedEnvelopeType): globalThis.Promise<string> {
	return fmt.Sprintf("unexpected envelope type: %v", $.namedValueInterfaceValue<any>($.int(e, 8), "wire.EnvelopeType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
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
