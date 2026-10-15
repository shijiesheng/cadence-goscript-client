// Generated file based on stream.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as io from "@goscript/io/index.js"

import * as wire from "@goscript/go.uber.org/thriftrw/wire/index.js"
import "@goscript/io/index.js"
import "@goscript/go.uber.org/thriftrw/wire/index.js"

$.registerTypePackagePath("go.uber.org/thriftrw/protocol/stream", ["stream.Protocol", "stream.EnvelopeHeader", "stream.FieldHeader", "stream.MapHeader", "stream.SetHeader", "stream.ListHeader", "stream.Writer", "stream.Reader"])

export type Protocol = {
	Reader(r: io.Reader | null): Reader | null | globalThis.Promise<Reader | null>
	Writer(w: io.Writer | null): Writer | null | globalThis.Promise<Writer | null>
}

$.registerInterfaceType(
	"stream.Protocol",
	null,
	[$.methodSignature("Reader", [["r", "io.Reader"]], ["stream.Reader"]), $.methodSignature("Writer", [["w", "io.Writer"]], ["stream.Writer"])]
);

export type Writer = {
	Close(): $.GoError
	WriteBinary(b: $.Slice<number>): $.GoError | globalThis.Promise<$.GoError>
	WriteBool(b: boolean): $.GoError | globalThis.Promise<$.GoError>
	WriteDouble(f: number): $.GoError | globalThis.Promise<$.GoError>
	WriteEnvelopeBegin(eh: EnvelopeHeader): $.GoError | globalThis.Promise<$.GoError>
	WriteEnvelopeEnd(): $.GoError
	WriteFieldBegin(f: FieldHeader): $.GoError | globalThis.Promise<$.GoError>
	WriteFieldEnd(): $.GoError
	WriteInt16(i: number): $.GoError | globalThis.Promise<$.GoError>
	WriteInt32(i: number): $.GoError | globalThis.Promise<$.GoError>
	WriteInt64(i: bigint): $.GoError | globalThis.Promise<$.GoError>
	WriteInt8(i: number): $.GoError | globalThis.Promise<$.GoError>
	WriteListBegin(l: ListHeader): $.GoError | globalThis.Promise<$.GoError>
	WriteListEnd(): $.GoError
	WriteMapBegin(m: MapHeader): $.GoError | globalThis.Promise<$.GoError>
	WriteMapEnd(): $.GoError
	WriteSetBegin(s: SetHeader): $.GoError | globalThis.Promise<$.GoError>
	WriteSetEnd(): $.GoError
	WriteString(s: string): $.GoError | globalThis.Promise<$.GoError>
	WriteStructBegin(): $.GoError
	WriteStructEnd(): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"stream.Writer",
	null,
	[$.methodSignature("Close", [], ["error"]), $.methodSignature("WriteBinary", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("WriteBool", [["b", /* @__PURE__ */ $.basicType("bool")]], ["error"]), $.methodSignature("WriteDouble", [["f", /* @__PURE__ */ $.basicType("float64")]], ["error"]), $.methodSignature("WriteEnvelopeBegin", [["eh", "stream.EnvelopeHeader"]], ["error"]), $.methodSignature("WriteEnvelopeEnd", [], ["error"]), $.methodSignature("WriteFieldBegin", [["f", "stream.FieldHeader"]], ["error"]), $.methodSignature("WriteFieldEnd", [], ["error"]), $.methodSignature("WriteInt16", [["i", /* @__PURE__ */ $.basicType("int16")]], ["error"]), $.methodSignature("WriteInt32", [["i", /* @__PURE__ */ $.basicType("int32")]], ["error"]), $.methodSignature("WriteInt64", [["i", /* @__PURE__ */ $.basicType("int64")]], ["error"]), $.methodSignature("WriteInt8", [["i", /* @__PURE__ */ $.basicType("int8")]], ["error"]), $.methodSignature("WriteListBegin", [["l", "stream.ListHeader"]], ["error"]), $.methodSignature("WriteListEnd", [], ["error"]), $.methodSignature("WriteMapBegin", [["m", "stream.MapHeader"]], ["error"]), $.methodSignature("WriteMapEnd", [], ["error"]), $.methodSignature("WriteSetBegin", [["s", "stream.SetHeader"]], ["error"]), $.methodSignature("WriteSetEnd", [], ["error"]), $.methodSignature("WriteString", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("WriteStructBegin", [], ["error"]), $.methodSignature("WriteStructEnd", [], ["error"])]
);

export type Reader = {
	Close(): $.GoError
	ReadBinary(): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	ReadBool(): [boolean, $.GoError] | globalThis.Promise<[boolean, $.GoError]>
	ReadDouble(): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	ReadEnvelopeBegin(): [EnvelopeHeader, $.GoError] | globalThis.Promise<[EnvelopeHeader, $.GoError]>
	ReadEnvelopeEnd(): $.GoError
	ReadFieldBegin(): [FieldHeader, boolean, $.GoError] | globalThis.Promise<[FieldHeader, boolean, $.GoError]>
	ReadFieldEnd(): $.GoError
	ReadInt16(): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	ReadInt32(): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	ReadInt64(): [bigint, $.GoError] | globalThis.Promise<[bigint, $.GoError]>
	ReadInt8(): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	ReadListBegin(): [ListHeader, $.GoError] | globalThis.Promise<[ListHeader, $.GoError]>
	ReadListEnd(): $.GoError
	ReadMapBegin(): [MapHeader, $.GoError] | globalThis.Promise<[MapHeader, $.GoError]>
	ReadMapEnd(): $.GoError
	ReadSetBegin(): [SetHeader, $.GoError] | globalThis.Promise<[SetHeader, $.GoError]>
	ReadSetEnd(): $.GoError
	ReadString(): [string, $.GoError] | globalThis.Promise<[string, $.GoError]>
	ReadStructBegin(): $.GoError
	ReadStructEnd(): $.GoError
	Skip(w: wire.Type): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"stream.Reader",
	null,
	[$.methodSignature("Close", [], ["error"]), $.methodSignature("ReadBinary", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ReadBool", [], [/* @__PURE__ */ $.basicType("bool"), "error"]), $.methodSignature("ReadDouble", [], [/* @__PURE__ */ $.basicType("float64"), "error"]), $.methodSignature("ReadEnvelopeBegin", [], ["stream.EnvelopeHeader", "error"]), $.methodSignature("ReadEnvelopeEnd", [], ["error"]), $.methodSignature("ReadFieldBegin", [], ["stream.FieldHeader", /* @__PURE__ */ $.basicType("bool"), "error"]), $.methodSignature("ReadFieldEnd", [], ["error"]), $.methodSignature("ReadInt16", [], [/* @__PURE__ */ $.basicType("int16"), "error"]), $.methodSignature("ReadInt32", [], [/* @__PURE__ */ $.basicType("int32"), "error"]), $.methodSignature("ReadInt64", [], [/* @__PURE__ */ $.basicType("int64"), "error"]), $.methodSignature("ReadInt8", [], [/* @__PURE__ */ $.basicType("int8"), "error"]), $.methodSignature("ReadListBegin", [], ["stream.ListHeader", "error"]), $.methodSignature("ReadListEnd", [], ["error"]), $.methodSignature("ReadMapBegin", [], ["stream.MapHeader", "error"]), $.methodSignature("ReadMapEnd", [], ["error"]), $.methodSignature("ReadSetBegin", [], ["stream.SetHeader", "error"]), $.methodSignature("ReadSetEnd", [], ["error"]), $.methodSignature("ReadString", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("ReadStructBegin", [], ["error"]), $.methodSignature("ReadStructEnd", [], ["error"]), $.methodSignature("Skip", [["w", /* @__PURE__ */ $.basicType("uint8", "wire.Type")]], ["error"])]
);

export class EnvelopeHeader {
	public get Name(): string {
		return this._fields.Name
	}

	public set Name(value: string) {
		this._fields.Name = value
	}

	public get Type(): wire.EnvelopeType {
		return this._fields.Type
	}

	public set Type(value: wire.EnvelopeType) {
		this._fields.Type = value
	}

	public get SeqID(): number {
		return this._fields.SeqID
	}

	public set SeqID(value: number) {
		this._fields.SeqID = value
	}

	public _fields: {
		Name: string
		Type: wire.EnvelopeType
		SeqID: number
	}

	constructor(init?: Partial<{Name?: string, Type?: wire.EnvelopeType, SeqID?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Name: init?.Name ?? ("" as string),
			Type: init?.Type ?? (0 as wire.EnvelopeType),
			SeqID: init?.SeqID ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EnvelopeHeader {
		return new EnvelopeHeader(this, true)
	}

	public __goscriptAssign(source: EnvelopeHeader): void {
		const target = this._fields
		const values = source._fields
		target.Name = values.Name
		target.Type = values.Type
		target.SeqID = values.SeqID
	}

	static __typeInfo = $.registerStructType(
		"stream.EnvelopeHeader",
		() => new EnvelopeHeader(),
		() => [],
		EnvelopeHeader,
		() => [/* @__PURE__ */ $.structField("Name", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("int8", "wire.EnvelopeType"), [1], 16, true), /* @__PURE__ */ $.structField("SeqID", /* @__PURE__ */ $.basicType("int32"), [2], 20, true)]
	)
}

export class FieldHeader {
	public get ID(): number {
		return this._fields.ID
	}

	public set ID(value: number) {
		this._fields.ID = value
	}

	public get Type(): wire.Type {
		return this._fields.Type
	}

	public set Type(value: wire.Type) {
		this._fields.Type = value
	}

	public _fields: {
		ID: number
		Type: wire.Type
	}

	constructor(init?: Partial<{ID?: number, Type?: wire.Type}>, __goscriptValue?: boolean) {
		this._fields = {
			ID: init?.ID ?? (0 as number),
			Type: init?.Type ?? (0 as wire.Type)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FieldHeader {
		return new FieldHeader(this, true)
	}

	public __goscriptAssign(source: FieldHeader): void {
		const target = this._fields
		const values = source._fields
		target.ID = values.ID
		target.Type = values.Type
	}

	static __typeInfo = $.registerStructType(
		"stream.FieldHeader",
		() => new FieldHeader(),
		() => [],
		FieldHeader,
		() => [/* @__PURE__ */ $.structField("ID", /* @__PURE__ */ $.basicType("int16"), [0], 0, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("uint8", "wire.Type"), [1], 2, true)]
	)
}

export class MapHeader {
	public get KeyType(): wire.Type {
		return this._fields.KeyType
	}

	public set KeyType(value: wire.Type) {
		this._fields.KeyType = value
	}

	public get ValueType(): wire.Type {
		return this._fields.ValueType
	}

	public set ValueType(value: wire.Type) {
		this._fields.ValueType = value
	}

	public get Length(): number {
		return this._fields.Length
	}

	public set Length(value: number) {
		this._fields.Length = value
	}

	public _fields: {
		KeyType: wire.Type
		ValueType: wire.Type
		Length: number
	}

	constructor(init?: Partial<{KeyType?: wire.Type, ValueType?: wire.Type, Length?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			KeyType: init?.KeyType ?? (0 as wire.Type),
			ValueType: init?.ValueType ?? (0 as wire.Type),
			Length: init?.Length ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MapHeader {
		return new MapHeader(this, true)
	}

	public __goscriptAssign(source: MapHeader): void {
		const target = this._fields
		const values = source._fields
		target.KeyType = values.KeyType
		target.ValueType = values.ValueType
		target.Length = values.Length
	}

	static __typeInfo = $.registerStructType(
		"stream.MapHeader",
		() => new MapHeader(),
		() => [],
		MapHeader,
		() => [/* @__PURE__ */ $.structField("KeyType", /* @__PURE__ */ $.basicType("uint8", "wire.Type"), [0], 0, true), /* @__PURE__ */ $.structField("ValueType", /* @__PURE__ */ $.basicType("uint8", "wire.Type"), [1], 1, true), /* @__PURE__ */ $.structField("Length", /* @__PURE__ */ $.basicType("int"), [2], 8, true)]
	)
}

export class SetHeader {
	public get Length(): number {
		return this._fields.Length
	}

	public set Length(value: number) {
		this._fields.Length = value
	}

	public get Type(): wire.Type {
		return this._fields.Type
	}

	public set Type(value: wire.Type) {
		this._fields.Type = value
	}

	public _fields: {
		Length: number
		Type: wire.Type
	}

	constructor(init?: Partial<{Length?: number, Type?: wire.Type}>, __goscriptValue?: boolean) {
		this._fields = {
			Length: init?.Length ?? (0 as number),
			Type: init?.Type ?? (0 as wire.Type)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): SetHeader {
		return new SetHeader(this, true)
	}

	public __goscriptAssign(source: SetHeader): void {
		const target = this._fields
		const values = source._fields
		target.Length = values.Length
		target.Type = values.Type
	}

	static __typeInfo = $.registerStructType(
		"stream.SetHeader",
		() => new SetHeader(),
		() => [],
		SetHeader,
		() => [/* @__PURE__ */ $.structField("Length", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("uint8", "wire.Type"), [1], 8, true)]
	)
}

export class ListHeader {
	public get Length(): number {
		return this._fields.Length
	}

	public set Length(value: number) {
		this._fields.Length = value
	}

	public get Type(): wire.Type {
		return this._fields.Type
	}

	public set Type(value: wire.Type) {
		this._fields.Type = value
	}

	public _fields: {
		Length: number
		Type: wire.Type
	}

	constructor(init?: Partial<{Length?: number, Type?: wire.Type}>, __goscriptValue?: boolean) {
		this._fields = {
			Length: init?.Length ?? (0 as number),
			Type: init?.Type ?? (0 as wire.Type)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ListHeader {
		return new ListHeader(this, true)
	}

	public __goscriptAssign(source: ListHeader): void {
		const target = this._fields
		const values = source._fields
		target.Length = values.Length
		target.Type = values.Type
	}

	static __typeInfo = $.registerStructType(
		"stream.ListHeader",
		() => new ListHeader(),
		() => [],
		ListHeader,
		() => [/* @__PURE__ */ $.structField("Length", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("Type", /* @__PURE__ */ $.basicType("uint8", "wire.Type"), [1], 8, true)]
	)
}
