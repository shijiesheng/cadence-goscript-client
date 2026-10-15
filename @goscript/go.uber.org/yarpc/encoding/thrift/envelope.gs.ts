// Generated file based on envelope.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as protocol from "@goscript/go.uber.org/thriftrw/protocol/index.js"

import * as stream from "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/encoding/thrift", ["thrift.errUnexpectedEnvelopeType", "thrift.disableEnvelopingProtocol", "thrift.disableEnvelopingNoWireProtocol", "thrift.disableEnvelopingNoWireReader", "thrift.disableEnvelopingNoWireWriter"])

export type errUnexpectedEnvelopeType = number

$.registerNamedValueType(
	"thrift.errUnexpectedEnvelopeType",
	{Error: (receiver: any, ...args: any[]) => (errUnexpectedEnvelopeType_Error as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*thrift.errUnexpectedEnvelopeType",
	{Error: (receiver: any, ...args: any[]) => (errUnexpectedEnvelopeType_Error as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class disableEnvelopingProtocol {
	public get Protocol(): protocol.Protocol | null {
		return this._fields.Protocol
	}

	public set Protocol(value: protocol.Protocol | null) {
		this._fields.Protocol = value
	}

	// EnvelopeType to use for decoded envelopes.
	public get Type(): wire.EnvelopeType {
		return this._fields.Type
	}

	public set Type(value: wire.EnvelopeType) {
		this._fields.Type = value
	}

	public _fields: {
		Protocol: protocol.Protocol | null
		Type: wire.EnvelopeType
	}

	constructor(init?: Partial<{Protocol?: protocol.Protocol | null, Type?: wire.EnvelopeType}>, __goscriptValue?: boolean) {
		this._fields = {
			Protocol: init?.Protocol ?? (null! as protocol.Protocol | null),
			Type: init?.Type ?? (0 as wire.EnvelopeType)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): disableEnvelopingProtocol {
		return new disableEnvelopingProtocol(this, true)
	}

	public __goscriptAssign(source: disableEnvelopingProtocol): void {
		const target = this._fields
		const values = source._fields
		target.Protocol = $.assignFieldValue(target.Protocol, values.Protocol, "protocol.Protocol")
		target.Type = values.Type
	}

	public async DecodeEnveloped(r: io.ReaderAt | null): globalThis.Promise<[wire.Envelope, $.GoError]> {
		const ev = this;
		let [value, err] = await $.pointerValue<Exclude<protocol.Protocol, null>>(ev.Protocol).Decode(r, 12)
		return [new wire.Envelope({Name: "", Type: ev.Type, SeqID: 1, Value: value}, true), err]
	}

	public async EncodeEnveloped(e: wire.Envelope, w: io.Writer | null): globalThis.Promise<$.GoError> {
		const ev = this;
		return $.pointerValue<Exclude<protocol.Protocol, null>>(ev.Protocol).Encode((e.Value).clone(), w)
	}

	public async Decode(r: any, t: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protocol.Protocol | null, null>>(this.Protocol).Decode(r, t)
	}

	public async Encode(v: any, w: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protocol.Protocol | null, null>>(this.Protocol).Encode(v, w)
	}

	static __typeInfo = $.registerStructType(
		"thrift.disableEnvelopingProtocol",
		() => new disableEnvelopingProtocol(),
		() => [$.methodSignature("DecodeEnveloped", [["r", "io.ReaderAt"]], ["wire.Envelope", "error"]), $.methodSignature("EncodeEnveloped", [["e", "wire.Envelope"], ["w", "io.Writer"]], ["error"]), $.methodSignature("Decode", [["r", "io.ReaderAt"], ["t", /* @__PURE__ */ $.basicType("uint8", "wire.Type")]], ["wire.Value", "error"]), $.methodSignature("Encode", [["v", "wire.Value"], ["w", "io.Writer"]], ["error"])],
		disableEnvelopingProtocol,
		() => [/* @__PURE__ */ $.structField("Protocol", "protocol.Protocol", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType"), [1], 16, true)]
	)
}

export class disableEnvelopingNoWireProtocol {
	public get Protocol(): stream.Protocol | null {
		return this._fields.Protocol
	}

	public set Protocol(value: stream.Protocol | null) {
		this._fields.Protocol = value
	}

	// EnvelopeType to use for decoded envelopes.
	public get Type(): wire.EnvelopeType {
		return this._fields.Type
	}

	public set Type(value: wire.EnvelopeType) {
		this._fields.Type = value
	}

	public _fields: {
		Protocol: stream.Protocol | null
		Type: wire.EnvelopeType
	}

	constructor(init?: Partial<{Protocol?: stream.Protocol | null, Type?: wire.EnvelopeType}>, __goscriptValue?: boolean) {
		this._fields = {
			Protocol: init?.Protocol ?? (null! as stream.Protocol | null),
			Type: init?.Type ?? (0 as wire.EnvelopeType)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): disableEnvelopingNoWireProtocol {
		return new disableEnvelopingNoWireProtocol(this, true)
	}

	public __goscriptAssign(source: disableEnvelopingNoWireProtocol): void {
		const target = this._fields
		const values = source._fields
		target.Protocol = $.assignFieldValue(target.Protocol, values.Protocol, "stream.Protocol")
		target.Type = values.Type
	}

	public async Reader(r: io.Reader | null): globalThis.Promise<stream.Reader | null> {
		const evnw = this;
		return $.interfaceValue<stream.Reader | null>((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<stream.Protocol, null>>(evnw.Protocol).Reader(r), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new disableEnvelopingNoWireReader({Reader: __goscriptLiteralField0, Type: evnw.Type}, true) })()), "thrift.disableEnvelopingNoWireReader", "thrift.disableEnvelopingNoWireReader")
	}

	public async Writer(w: io.Writer | null): globalThis.Promise<stream.Writer | null> {
		const evnw = this;
		return $.interfaceValue<stream.Writer | null>((await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = $.pointerValue<Exclude<stream.Protocol, null>>(evnw.Protocol).Writer(w), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new disableEnvelopingNoWireWriter({Writer: __goscriptLiteralField1}, true) })()), "thrift.disableEnvelopingNoWireWriter", "thrift.disableEnvelopingNoWireWriter")
	}

	static __typeInfo = $.registerStructType(
		"thrift.disableEnvelopingNoWireProtocol",
		() => new disableEnvelopingNoWireProtocol(),
		() => [$.methodSignature("Reader", [["r", "io.Reader"]], ["stream.Reader"]), $.methodSignature("Writer", [["w", "io.Writer"]], ["stream.Writer"])],
		disableEnvelopingNoWireProtocol,
		() => [/* @__PURE__ */ $.structField("Protocol", "stream.Protocol", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType"), [1], 16, true)]
	)
}

export class disableEnvelopingNoWireReader {
	public get Reader(): stream.Reader | null {
		return this._fields.Reader
	}

	public set Reader(value: stream.Reader | null) {
		this._fields.Reader = value
	}

	public get Type(): wire.EnvelopeType {
		return this._fields.Type
	}

	public set Type(value: wire.EnvelopeType) {
		this._fields.Type = value
	}

	public _fields: {
		Reader: stream.Reader | null
		Type: wire.EnvelopeType
	}

	constructor(init?: Partial<{Reader?: stream.Reader | null, Type?: wire.EnvelopeType}>, __goscriptValue?: boolean) {
		this._fields = {
			Reader: init?.Reader ?? (null! as stream.Reader | null),
			Type: init?.Type ?? (0 as wire.EnvelopeType)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): disableEnvelopingNoWireReader {
		return new disableEnvelopingNoWireReader(this, true)
	}

	public __goscriptAssign(source: disableEnvelopingNoWireReader): void {
		const target = this._fields
		const values = source._fields
		target.Reader = $.assignFieldValue(target.Reader, values.Reader, "stream.Reader")
		target.Type = values.Type
	}

	public ReadEnvelopeBegin(): [stream.EnvelopeHeader, $.GoError] {
		const evnwr = this;
		return [new stream.EnvelopeHeader({Name: "", Type: evnwr.Type, SeqID: 1}, true), null]
	}

	public Close(): any {
		return $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).Close()
	}

	public async ReadBinary(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadBinary()
	}

	public async ReadBool(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadBool()
	}

	public async ReadDouble(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadDouble()
	}

	public ReadEnvelopeEnd(): any {
		return $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadEnvelopeEnd()
	}

	public async ReadFieldBegin(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadFieldBegin()
	}

	public ReadFieldEnd(): any {
		return $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadFieldEnd()
	}

	public async ReadInt16(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadInt16()
	}

	public async ReadInt32(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadInt32()
	}

	public async ReadInt64(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadInt64()
	}

	public async ReadInt8(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadInt8()
	}

	public async ReadListBegin(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadListBegin()
	}

	public ReadListEnd(): any {
		return $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadListEnd()
	}

	public async ReadMapBegin(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadMapBegin()
	}

	public ReadMapEnd(): any {
		return $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadMapEnd()
	}

	public async ReadSetBegin(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadSetBegin()
	}

	public ReadSetEnd(): any {
		return $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadSetEnd()
	}

	public async ReadString(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadString()
	}

	public ReadStructBegin(): any {
		return $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadStructBegin()
	}

	public ReadStructEnd(): any {
		return $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).ReadStructEnd()
	}

	public async Skip(w: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Reader | null, null>>(this.Reader).Skip(w)
	}

	static __typeInfo = $.registerStructType(
		"thrift.disableEnvelopingNoWireReader",
		() => new disableEnvelopingNoWireReader(),
		() => [$.methodSignature("ReadEnvelopeBegin", [], ["stream.EnvelopeHeader", "error"]), $.methodSignature("Close", [], ["error"]), $.methodSignature("ReadBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ReadBool", [], [/* @__PURE__ */ $.basicType("bool"), "error"]), $.methodSignature("ReadDouble", [], [/* @__PURE__ */ $.basicType("float64"), "error"]), $.methodSignature("ReadEnvelopeEnd", [], ["error"]), $.methodSignature("ReadFieldBegin", [], ["stream.FieldHeader", /* @__PURE__ */ $.basicType("bool"), "error"]), $.methodSignature("ReadFieldEnd", [], ["error"]), $.methodSignature("ReadInt16", [], [/* @__PURE__ */ $.basicType("int16"), "error"]), $.methodSignature("ReadInt32", [], [/* @__PURE__ */ $.basicType("int32"), "error"]), $.methodSignature("ReadInt64", [], [/* @__PURE__ */ $.basicType("int64"), "error"]), $.methodSignature("ReadInt8", [], [/* @__PURE__ */ $.basicType("int8"), "error"]), $.methodSignature("ReadListBegin", [], ["stream.ListHeader", "error"]), $.methodSignature("ReadListEnd", [], ["error"]), $.methodSignature("ReadMapBegin", [], ["stream.MapHeader", "error"]), $.methodSignature("ReadMapEnd", [], ["error"]), $.methodSignature("ReadSetBegin", [], ["stream.SetHeader", "error"]), $.methodSignature("ReadSetEnd", [], ["error"]), $.methodSignature("ReadString", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("ReadStructBegin", [], ["error"]), $.methodSignature("ReadStructEnd", [], ["error"]), $.methodSignature("Skip", [["w", /* @__PURE__ */ $.basicType("uint8", "wire.Type")]], ["error"])],
		disableEnvelopingNoWireReader,
		() => [/* @__PURE__ */ $.structField("Reader", "stream.Reader", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType"), [1], 16, true)]
	)
}

export class disableEnvelopingNoWireWriter {
	public get Writer(): stream.Writer | null {
		return this._fields.Writer
	}

	public set Writer(value: stream.Writer | null) {
		this._fields.Writer = value
	}

	public _fields: {
		Writer: stream.Writer | null
	}

	constructor(init?: Partial<{Writer?: stream.Writer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Writer: init?.Writer ?? (null! as stream.Writer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): disableEnvelopingNoWireWriter {
		return new disableEnvelopingNoWireWriter(this, true)
	}

	public __goscriptAssign(source: disableEnvelopingNoWireWriter): void {
		const target = this._fields
		const values = source._fields
		target.Writer = $.assignFieldValue(target.Writer, values.Writer, "stream.Writer")
	}

	public WriteEnvelopeBegin(_p0: stream.EnvelopeHeader): $.GoError {
		const evnww = this;
		return null
	}

	public Close(): any {
		return $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).Close()
	}

	public async WriteBinary(b: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteBinary(b)
	}

	public async WriteBool(b: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteBool(b)
	}

	public async WriteDouble(f: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteDouble(f)
	}

	public WriteEnvelopeEnd(): any {
		return $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteEnvelopeEnd()
	}

	public async WriteFieldBegin(f: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteFieldBegin(f)
	}

	public WriteFieldEnd(): any {
		return $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteFieldEnd()
	}

	public async WriteInt16(i: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteInt16(i)
	}

	public async WriteInt32(i: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteInt32(i)
	}

	public async WriteInt64(i: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteInt64(i)
	}

	public async WriteInt8(i: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteInt8(i)
	}

	public async WriteListBegin(l: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteListBegin(l)
	}

	public WriteListEnd(): any {
		return $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteListEnd()
	}

	public async WriteMapBegin(m: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteMapBegin(m)
	}

	public WriteMapEnd(): any {
		return $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteMapEnd()
	}

	public async WriteSetBegin(s: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteSetBegin(s)
	}

	public WriteSetEnd(): any {
		return $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteSetEnd()
	}

	public async WriteString(s: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteString(s)
	}

	public WriteStructBegin(): any {
		return $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteStructBegin()
	}

	public async WriteStructEnd(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<stream.Writer | null, null>>(this.Writer).WriteStructEnd()
	}

	static __typeInfo = $.registerStructType(
		"thrift.disableEnvelopingNoWireWriter",
		() => new disableEnvelopingNoWireWriter(),
		() => [$.methodSignature("WriteEnvelopeBegin", ["stream.EnvelopeHeader"], ["error"]), $.methodSignature("Close", [], ["error"]), $.methodSignature("WriteBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("WriteBool", [["b", /* @__PURE__ */ $.basicType("bool")]], ["error"]), $.methodSignature("WriteDouble", [["f", /* @__PURE__ */ $.basicType("float64")]], ["error"]), $.methodSignature("WriteEnvelopeEnd", [], ["error"]), $.methodSignature("WriteFieldBegin", [["f", "stream.FieldHeader"]], ["error"]), $.methodSignature("WriteFieldEnd", [], ["error"]), $.methodSignature("WriteInt16", [["i", /* @__PURE__ */ $.basicType("int16")]], ["error"]), $.methodSignature("WriteInt32", [["i", /* @__PURE__ */ $.basicType("int32")]], ["error"]), $.methodSignature("WriteInt64", [["i", /* @__PURE__ */ $.basicType("int64")]], ["error"]), $.methodSignature("WriteInt8", [["i", /* @__PURE__ */ $.basicType("int8")]], ["error"]), $.methodSignature("WriteListBegin", [["l", "stream.ListHeader"]], ["error"]), $.methodSignature("WriteListEnd", [], ["error"]), $.methodSignature("WriteMapBegin", [["m", "stream.MapHeader"]], ["error"]), $.methodSignature("WriteMapEnd", [], ["error"]), $.methodSignature("WriteSetBegin", [["s", "stream.SetHeader"]], ["error"]), $.methodSignature("WriteSetEnd", [], ["error"]), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("WriteStructBegin", [], ["error"]), $.methodSignature("WriteStructEnd", [], ["error"])],
		disableEnvelopingNoWireWriter,
		() => [/* @__PURE__ */ $.structField("Writer", "stream.Writer", [0], 0, true, { anonymous: true })]
	)
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
