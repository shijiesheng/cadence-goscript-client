// Generated file based on multiplex.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as strings from "@goscript/strings/index.js"

import * as protocol from "@goscript/go.uber.org/thriftrw/protocol/index.js"

import * as stream from "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/io/index.js"
import "@goscript/strings/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/index.js"
import "@goscript/go.uber.org/thriftrw/protocol/stream/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"

$.registerTypePackagePath("go.uber.org/yarpc/encoding/thrift", ["thrift.multiplexedOutboundProtocol", "thrift.multiplexedOutboundNoWireProtocol", "thrift.multiplexedNoWireWriter", "thrift.multiplexedNoWireReader"])

export class multiplexedOutboundProtocol {
	public get Protocol(): protocol.Protocol | null {
		return this._fields.Protocol
	}

	public set Protocol(value: protocol.Protocol | null) {
		this._fields.Protocol = value
	}

	// Name of the Thrift service
	public get Service(): string {
		return this._fields.Service
	}

	public set Service(value: string) {
		this._fields.Service = value
	}

	public _fields: {
		Protocol: protocol.Protocol | null
		Service: string
	}

	constructor(init?: Partial<{Protocol?: protocol.Protocol | null, Service?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Protocol: init?.Protocol ?? (null! as protocol.Protocol | null),
			Service: init?.Service ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): multiplexedOutboundProtocol {
		return new multiplexedOutboundProtocol(this, true)
	}

	public __goscriptAssign(source: multiplexedOutboundProtocol): void {
		const target = this._fields
		const values = source._fields
		target.Protocol = $.assignFieldValue(target.Protocol, values.Protocol, "protocol.Protocol")
		target.Service = values.Service
	}

	public async DecodeEnveloped(r: io.ReaderAt | null): globalThis.Promise<[wire.Envelope, $.GoError]> {
		const m = this;
		let [e, err] = await $.pointerValue<Exclude<protocol.Protocol, null>>(m.Protocol).DecodeEnveloped(r)
		e.Name = strings.TrimPrefix(e.Name, $.concatString(m.Service, ":"))
		return [(e).clone(), err]
	}

	public async EncodeEnveloped(e: wire.Envelope, w: io.Writer | null): globalThis.Promise<$.GoError> {
		const m = this;
		e.Name = $.concatString(($.concatString(m.Service, ":")), e.Name)
		return $.pointerValue<Exclude<protocol.Protocol, null>>(m.Protocol).EncodeEnveloped((e).clone(), w)
	}

	public async Decode(r: any, t: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protocol.Protocol | null, null>>(this.Protocol).Decode(r, t)
	}

	public async Encode(v: any, w: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<protocol.Protocol | null, null>>(this.Protocol).Encode(v, w)
	}

	static __typeInfo = $.registerStructType(
		"thrift.multiplexedOutboundProtocol",
		() => new multiplexedOutboundProtocol(),
		() => [$.methodSignature("DecodeEnveloped", [["r", "io.ReaderAt"]], ["wire.Envelope", "error"]), $.methodSignature("EncodeEnveloped", [["e", "wire.Envelope"], ["w", "io.Writer"]], ["error"]), $.methodSignature("Decode", [["r", "io.ReaderAt"], ["t", /* @__PURE__ */ $.basicType("uint8", "wire.Type")]], ["wire.Value", "error"]), $.methodSignature("Encode", [["v", "wire.Value"], ["w", "io.Writer"]], ["error"])],
		multiplexedOutboundProtocol,
		() => [/* @__PURE__ */ $.structField("Protocol", "protocol.Protocol", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Service", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

export class multiplexedOutboundNoWireProtocol {
	public get Protocol(): stream.Protocol | null {
		return this._fields.Protocol
	}

	public set Protocol(value: stream.Protocol | null) {
		this._fields.Protocol = value
	}

	public get Service(): string {
		return this._fields.Service
	}

	public set Service(value: string) {
		this._fields.Service = value
	}

	public _fields: {
		Protocol: stream.Protocol | null
		Service: string
	}

	constructor(init?: Partial<{Protocol?: stream.Protocol | null, Service?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Protocol: init?.Protocol ?? (null! as stream.Protocol | null),
			Service: init?.Service ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): multiplexedOutboundNoWireProtocol {
		return new multiplexedOutboundNoWireProtocol(this, true)
	}

	public __goscriptAssign(source: multiplexedOutboundNoWireProtocol): void {
		const target = this._fields
		const values = source._fields
		target.Protocol = $.assignFieldValue(target.Protocol, values.Protocol, "stream.Protocol")
		target.Service = values.Service
	}

	public async Reader(r: io.Reader | null): globalThis.Promise<stream.Reader | null> {
		const m = this;
		return $.interfaceValue<stream.Reader | null>((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<stream.Protocol, null>>(m.Protocol).Reader(r), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new multiplexedNoWireReader({Reader: __goscriptLiteralField0, Service: m.Service}, true) })()), "thrift.multiplexedNoWireReader", "thrift.multiplexedNoWireReader")
	}

	public async Writer(w: io.Writer | null): globalThis.Promise<stream.Writer | null> {
		const m = this;
		return $.interfaceValue<stream.Writer | null>((await (async () => { const __goscriptLiteralField1 = (__goscriptAwait = $.pointerValue<Exclude<stream.Protocol, null>>(m.Protocol).Writer(w), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new multiplexedNoWireWriter({Writer: __goscriptLiteralField1, Service: m.Service}, true) })()), "thrift.multiplexedNoWireWriter", "thrift.multiplexedNoWireWriter")
	}

	static __typeInfo = $.registerStructType(
		"thrift.multiplexedOutboundNoWireProtocol",
		() => new multiplexedOutboundNoWireProtocol(),
		() => [$.methodSignature("Reader", [["r", "io.Reader"]], ["stream.Reader"]), $.methodSignature("Writer", [["w", "io.Writer"]], ["stream.Writer"])],
		multiplexedOutboundNoWireProtocol,
		() => [/* @__PURE__ */ $.structField("Protocol", "stream.Protocol", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Service", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

export class multiplexedNoWireWriter {
	public get Writer(): stream.Writer | null {
		return this._fields.Writer
	}

	public set Writer(value: stream.Writer | null) {
		this._fields.Writer = value
	}

	public get Service(): string {
		return this._fields.Service
	}

	public set Service(value: string) {
		this._fields.Service = value
	}

	public _fields: {
		Writer: stream.Writer | null
		Service: string
	}

	constructor(init?: Partial<{Writer?: stream.Writer | null, Service?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Writer: init?.Writer ?? (null! as stream.Writer | null),
			Service: init?.Service ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): multiplexedNoWireWriter {
		return new multiplexedNoWireWriter(this, true)
	}

	public __goscriptAssign(source: multiplexedNoWireWriter): void {
		const target = this._fields
		const values = source._fields
		target.Writer = $.assignFieldValue(target.Writer, values.Writer, "stream.Writer")
		target.Service = values.Service
	}

	public async WriteEnvelopeBegin(eh: stream.EnvelopeHeader): globalThis.Promise<$.GoError> {
		const w = this;
		eh.Name = $.concatString(($.concatString(w.Service, ":")), eh.Name)
		return $.pointerValue<Exclude<stream.Writer, null>>(w.Writer).WriteEnvelopeBegin((eh).clone())
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
		"thrift.multiplexedNoWireWriter",
		() => new multiplexedNoWireWriter(),
		() => [$.methodSignature("WriteEnvelopeBegin", [["eh", "stream.EnvelopeHeader"]], ["error"]), $.methodSignature("Close", [], ["error"]), $.methodSignature("WriteBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("WriteBool", [["b", /* @__PURE__ */ $.basicType("bool")]], ["error"]), $.methodSignature("WriteDouble", [["f", /* @__PURE__ */ $.basicType("float64")]], ["error"]), $.methodSignature("WriteEnvelopeEnd", [], ["error"]), $.methodSignature("WriteFieldBegin", [["f", "stream.FieldHeader"]], ["error"]), $.methodSignature("WriteFieldEnd", [], ["error"]), $.methodSignature("WriteInt16", [["i", /* @__PURE__ */ $.basicType("int16")]], ["error"]), $.methodSignature("WriteInt32", [["i", /* @__PURE__ */ $.basicType("int32")]], ["error"]), $.methodSignature("WriteInt64", [["i", /* @__PURE__ */ $.basicType("int64")]], ["error"]), $.methodSignature("WriteInt8", [["i", /* @__PURE__ */ $.basicType("int8")]], ["error"]), $.methodSignature("WriteListBegin", [["l", "stream.ListHeader"]], ["error"]), $.methodSignature("WriteListEnd", [], ["error"]), $.methodSignature("WriteMapBegin", [["m", "stream.MapHeader"]], ["error"]), $.methodSignature("WriteMapEnd", [], ["error"]), $.methodSignature("WriteSetBegin", [["s", "stream.SetHeader"]], ["error"]), $.methodSignature("WriteSetEnd", [], ["error"]), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("WriteStructBegin", [], ["error"]), $.methodSignature("WriteStructEnd", [], ["error"])],
		multiplexedNoWireWriter,
		() => [/* @__PURE__ */ $.structField("Writer", "stream.Writer", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Service", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

export class multiplexedNoWireReader {
	public get Reader(): stream.Reader | null {
		return this._fields.Reader
	}

	public set Reader(value: stream.Reader | null) {
		this._fields.Reader = value
	}

	public get Service(): string {
		return this._fields.Service
	}

	public set Service(value: string) {
		this._fields.Service = value
	}

	public _fields: {
		Reader: stream.Reader | null
		Service: string
	}

	constructor(init?: Partial<{Reader?: stream.Reader | null, Service?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			Reader: init?.Reader ?? (null! as stream.Reader | null),
			Service: init?.Service ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): multiplexedNoWireReader {
		return new multiplexedNoWireReader(this, true)
	}

	public __goscriptAssign(source: multiplexedNoWireReader): void {
		const target = this._fields
		const values = source._fields
		target.Reader = $.assignFieldValue(target.Reader, values.Reader, "stream.Reader")
		target.Service = values.Service
	}

	public async ReadEnvelopeBegin(): globalThis.Promise<[stream.EnvelopeHeader, $.GoError]> {
		const r = this;
		let [eh, err] = await $.pointerValue<Exclude<stream.Reader, null>>(r.Reader).ReadEnvelopeBegin()
		eh.Name = strings.TrimPrefix(eh.Name, $.concatString(r.Service, ":"))
		return [(eh).clone(), err]
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
		"thrift.multiplexedNoWireReader",
		() => new multiplexedNoWireReader(),
		() => [$.methodSignature("ReadEnvelopeBegin", [], ["stream.EnvelopeHeader", "error"]), $.methodSignature("Close", [], ["error"]), $.methodSignature("ReadBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ReadBool", [], [/* @__PURE__ */ $.basicType("bool"), "error"]), $.methodSignature("ReadDouble", [], [/* @__PURE__ */ $.basicType("float64"), "error"]), $.methodSignature("ReadEnvelopeEnd", [], ["error"]), $.methodSignature("ReadFieldBegin", [], ["stream.FieldHeader", /* @__PURE__ */ $.basicType("bool"), "error"]), $.methodSignature("ReadFieldEnd", [], ["error"]), $.methodSignature("ReadInt16", [], [/* @__PURE__ */ $.basicType("int16"), "error"]), $.methodSignature("ReadInt32", [], [/* @__PURE__ */ $.basicType("int32"), "error"]), $.methodSignature("ReadInt64", [], [/* @__PURE__ */ $.basicType("int64"), "error"]), $.methodSignature("ReadInt8", [], [/* @__PURE__ */ $.basicType("int8"), "error"]), $.methodSignature("ReadListBegin", [], ["stream.ListHeader", "error"]), $.methodSignature("ReadListEnd", [], ["error"]), $.methodSignature("ReadMapBegin", [], ["stream.MapHeader", "error"]), $.methodSignature("ReadMapEnd", [], ["error"]), $.methodSignature("ReadSetBegin", [], ["stream.SetHeader", "error"]), $.methodSignature("ReadSetEnd", [], ["error"]), $.methodSignature("ReadString", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("ReadStructBegin", [], ["error"]), $.methodSignature("ReadStructEnd", [], ["error"]), $.methodSignature("Skip", [["w", /* @__PURE__ */ $.basicType("uint8", "wire.Type")]], ["error"])],
		multiplexedNoWireReader,
		() => [/* @__PURE__ */ $.structField("Reader", "stream.Reader", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("Service", /* @__PURE__ */ $.basicType("string"), [1], 16, true)]
	)
}

var __goscriptAwait: any
