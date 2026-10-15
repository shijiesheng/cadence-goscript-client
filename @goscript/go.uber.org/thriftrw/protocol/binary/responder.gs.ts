// Generated file based on responder.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as stream from "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"

import type * as context from "@goscript/context/index.js"

import type * as envelope from "@goscript/go.uber.org/thriftrw/protocol/envelope/index.js"

import * as __goscript_envelope from "./envelope.gs.ts"

import * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_stream_envelope from "./stream_envelope.gs.ts"

import * as __goscript_stream_writer from "./stream_writer.gs.ts"

import * as __goscript_string_post_go120 from "./string_post_go120.gs.ts"

import * as __goscript_writer from "./writer.gs.ts"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"
import "./envelope.gs.ts"
import "./protocol.gs.ts"
import "./stream_envelope.gs.ts"
import "./stream_writer.gs.ts"
import "./string_post_go120.gs.ts"
import "./writer.gs.ts"

$.registerTypePackagePath("go.uber.org/thriftrw/protocol/binary", ["binary.Responder", "binary.noEnvelopeResponder", "binary.EnvelopeV0Responder", "binary.EnvelopeV1Responder"])

export type Responder = {
	EncodeResponse(v: wire.Value, t: wire.EnvelopeType, w: io.Writer | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"binary.Responder",
	null,
	[$.methodSignature("EncodeResponse", [["v", "wire.Value"], ["t", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType")], ["w", "io.Writer"]], ["error"])]
);

export class noEnvelopeResponder {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): noEnvelopeResponder {
		return new noEnvelopeResponder(this, true)
	}

	public __goscriptAssign(source: noEnvelopeResponder): void {
	}

	public async EncodeResponse(v: wire.Value, t: wire.EnvelopeType, w: io.Writer | null): globalThis.Promise<$.GoError> {
		return __goscript_protocol.Protocol.prototype.Encode.call(__goscript_protocol.Default, v, w)
	}

	public async WriteResponse(et: wire.EnvelopeType, w: io.Writer | null, ev: stream.Enveloper | null): globalThis.Promise<$.GoError> {
		using __defer = new $.DisposableStack()
		let writer: __goscript_stream_writer.StreamWriter | $.VarRef<__goscript_stream_writer.StreamWriter> | null = await __goscript_stream_writer.NewStreamWriter(w)
		__defer.defer(() => { (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? ((writer as any) as __goscript_stream_writer.StreamWriter).Close() : __goscript_stream_writer.StreamWriter.prototype.Close.call(writer)) })

		return (__goscriptAwait = (ev !== null && (ev as any).__isVarRef !== true && (ev as any).__goValue === undefined ? (ev as Exclude<stream.Enveloper, null>) : $.pointerValue<Exclude<stream.Enveloper, null>>(ev)).Encode($.interfaceValue<stream.Writer | null>(writer, "*binary.StreamWriter", /* @__PURE__ */ $.pointerType("binary.StreamWriter"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"binary.noEnvelopeResponder",
		() => new noEnvelopeResponder(),
		() => [$.methodSignature("EncodeResponse", [["v", "wire.Value"], ["t", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType")], ["w", "io.Writer"]], ["error"]), $.methodSignature("WriteResponse", [["et", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType")], ["w", "io.Writer"], ["ev", "stream.Enveloper"]], ["error"])],
		noEnvelopeResponder,
		() => []
	)
}

export class EnvelopeV0Responder {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get SeqID(): number {
		return this._fields.SeqID
	}

	public set SeqID(value: number) {
		this._fields.SeqID = value
	}

	public _fields: {
		Name: string
		SeqID: number
	}

	constructor(init?: Partial<{Name?: string, SeqID?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			SeqID: init?.SeqID ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EnvelopeV0Responder {
		return new EnvelopeV0Responder(this, true)
	}

	public __goscriptAssign(source: EnvelopeV0Responder): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.SeqID = values.SeqID
	}

	public async EncodeResponse(v: wire.Value, t: wire.EnvelopeType, w: io.Writer | null): globalThis.Promise<$.GoError> {
		const r = this;
		let writer: __goscript_writer.Writer | $.VarRef<__goscript_writer.Writer> | null = await __goscript_writer.BorrowWriter(w)
		let err = await (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? ((writer as any) as __goscript_writer.Writer).WriteLegacyEnveloped(new wire.Envelope({Name: r.Name, Type: t, SeqID: r.SeqID, Value: v}, true)) : __goscript_writer.Writer.prototype.WriteLegacyEnveloped.call(writer, new wire.Envelope({Name: r.Name, Type: t, SeqID: r.SeqID, Value: v}, true)))
		__goscript_writer.ReturnWriter(writer)
		return err
	}

	public async WriteResponse(et: wire.EnvelopeType, w: io.Writer | null, ev: stream.Enveloper | null): globalThis.Promise<$.GoError> {
		const r = this;
		using __defer = new $.DisposableStack()
		let writer: __goscript_stream_writer.StreamWriter | $.VarRef<__goscript_stream_writer.StreamWriter> | null = await __goscript_stream_writer.NewStreamWriter(w)
		__defer.defer(() => { (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? ((writer as any) as __goscript_stream_writer.StreamWriter).Close() : __goscript_stream_writer.StreamWriter.prototype.Close.call(writer)) })

		{
			let err = await (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? ((writer as any) as __goscript_stream_writer.StreamWriter).WriteLegacyEnvelopeBegin(new stream.EnvelopeHeader({Name: r.Name, Type: et, SeqID: r.SeqID}, true)) : __goscript_stream_writer.StreamWriter.prototype.WriteLegacyEnvelopeBegin.call(writer, new stream.EnvelopeHeader({Name: r.Name, Type: et, SeqID: r.SeqID}, true)))
			if (err != null) {
				return err
			}
		}

		{
			let err = (__goscriptAwait = (ev !== null && (ev as any).__isVarRef !== true && (ev as any).__goValue === undefined ? (ev as Exclude<stream.Enveloper, null>) : $.pointerValue<Exclude<stream.Enveloper, null>>(ev)).Encode($.interfaceValue<stream.Writer | null>(writer, "*binary.StreamWriter", /* @__PURE__ */ $.pointerType("binary.StreamWriter"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		return (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? ((writer as any) as __goscript_stream_writer.StreamWriter).WriteLegacyEnvelopeEnd() : __goscript_stream_writer.StreamWriter.prototype.WriteLegacyEnvelopeEnd.call(writer))
	}

	static __typeInfo = $.registerStructType(
		"binary.EnvelopeV0Responder",
		() => new EnvelopeV0Responder(),
		() => [$.methodSignature("EncodeResponse", [["v", "wire.Value"], ["t", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType")], ["w", "io.Writer"]], ["error"]), $.methodSignature("WriteResponse", [["et", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType")], ["w", "io.Writer"], ["ev", "stream.Enveloper"]], ["error"])],
		EnvelopeV0Responder,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("SeqID", /* @__PURE__ */ $.basicType("int32"), [1], 16, true)]
	)
}

export class EnvelopeV1Responder {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get SeqID(): number {
		return this._fields.SeqID
	}

	public set SeqID(value: number) {
		this._fields.SeqID = value
	}

	public _fields: {
		Name: string
		SeqID: number
	}

	constructor(init?: Partial<{Name?: string, SeqID?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			SeqID: init?.SeqID ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EnvelopeV1Responder {
		return new EnvelopeV1Responder(this, true)
	}

	public __goscriptAssign(source: EnvelopeV1Responder): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.SeqID = values.SeqID
	}

	public async EncodeResponse(v: wire.Value, t: wire.EnvelopeType, w: io.Writer | null): globalThis.Promise<$.GoError> {
		const r = this;
		let writer: __goscript_writer.Writer | $.VarRef<__goscript_writer.Writer> | null = await __goscript_writer.BorrowWriter(w)
		let err = await (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? ((writer as any) as __goscript_writer.Writer).WriteEnveloped(new wire.Envelope({Name: r.Name, Type: t, SeqID: r.SeqID, Value: v}, true)) : __goscript_writer.Writer.prototype.WriteEnveloped.call(writer, new wire.Envelope({Name: r.Name, Type: t, SeqID: r.SeqID, Value: v}, true)))
		__goscript_writer.ReturnWriter(writer)
		return err
	}

	public async WriteResponse(et: wire.EnvelopeType, w: io.Writer | null, ev: stream.Enveloper | null): globalThis.Promise<$.GoError> {
		const r = this;
		using __defer = new $.DisposableStack()
		let writer: __goscript_stream_writer.StreamWriter | $.VarRef<__goscript_stream_writer.StreamWriter> | null = await __goscript_stream_writer.NewStreamWriter(w)
		__defer.defer(() => { (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? ((writer as any) as __goscript_stream_writer.StreamWriter).Close() : __goscript_stream_writer.StreamWriter.prototype.Close.call(writer)) })

		{
			let err = await (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? ((writer as any) as __goscript_stream_writer.StreamWriter).WriteEnvelopeBegin(new stream.EnvelopeHeader({Name: r.Name, Type: et, SeqID: r.SeqID}, true)) : __goscript_stream_writer.StreamWriter.prototype.WriteEnvelopeBegin.call(writer, new stream.EnvelopeHeader({Name: r.Name, Type: et, SeqID: r.SeqID}, true)))
			if (err != null) {
				return err
			}
		}

		{
			let err = (__goscriptAwait = (ev !== null && (ev as any).__isVarRef !== true && (ev as any).__goValue === undefined ? (ev as Exclude<stream.Enveloper, null>) : $.pointerValue<Exclude<stream.Enveloper, null>>(ev)).Encode($.interfaceValue<stream.Writer | null>(writer, "*binary.StreamWriter", /* @__PURE__ */ $.pointerType("binary.StreamWriter"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		return (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? ((writer as any) as __goscript_stream_writer.StreamWriter).WriteEnvelopeEnd() : __goscript_stream_writer.StreamWriter.prototype.WriteEnvelopeEnd.call(writer))
	}

	static __typeInfo = $.registerStructType(
		"binary.EnvelopeV1Responder",
		() => new EnvelopeV1Responder(),
		() => [$.methodSignature("EncodeResponse", [["v", "wire.Value"], ["t", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType")], ["w", "io.Writer"]], ["error"]), $.methodSignature("WriteResponse", [["et", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType")], ["w", "io.Writer"], ["ev", "stream.Enveloper"]], ["error"])],
		EnvelopeV1Responder,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("SeqID", /* @__PURE__ */ $.basicType("int32"), [1], 16, true)]
	)
}

export let NoEnvelopeResponder: noEnvelopeResponder | $.VarRef<noEnvelopeResponder> | null = new noEnvelopeResponder()

export function __goscript_set_NoEnvelopeResponder(__goscriptValue: noEnvelopeResponder | $.VarRef<noEnvelopeResponder> | null): void {
	NoEnvelopeResponder = __goscriptValue
}

var __goscriptAwait: any
