// Generated file based on marshal.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as jsonpb from "@goscript/github.com/gogo/protobuf/jsonpb/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as bufferpool from "@goscript/go.uber.org/yarpc/internal/bufferpool/index.js"

import * as __goscript_codec_registry from "./codec_registry.gs.ts"

import * as __goscript_protobuf from "./protobuf.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"
import "@goscript/github.com/gogo/protobuf/jsonpb/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/internal/bufferpool/index.js"
import "./codec_registry.gs.ts"
import "./protobuf.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/encoding/protobuf", ["protobuf.codec"])

export class codec {
	public get jsonMarshaler(): jsonpb.Marshaler | $.VarRef<jsonpb.Marshaler> | null {
		return this._fields.jsonMarshaler
	}

	public set jsonMarshaler(value: jsonpb.Marshaler | $.VarRef<jsonpb.Marshaler> | null) {
		this._fields.jsonMarshaler = value
	}

	public get jsonUnmarshaler(): jsonpb.Unmarshaler | $.VarRef<jsonpb.Unmarshaler> | null {
		return this._fields.jsonUnmarshaler
	}

	public set jsonUnmarshaler(value: jsonpb.Unmarshaler | $.VarRef<jsonpb.Unmarshaler> | null) {
		this._fields.jsonUnmarshaler = value
	}

	public _fields: {
		jsonMarshaler: jsonpb.Marshaler | $.VarRef<jsonpb.Marshaler> | null
		jsonUnmarshaler: jsonpb.Unmarshaler | $.VarRef<jsonpb.Unmarshaler> | null
	}

	constructor(init?: Partial<{jsonMarshaler?: jsonpb.Marshaler | $.VarRef<jsonpb.Marshaler> | null, jsonUnmarshaler?: jsonpb.Unmarshaler | $.VarRef<jsonpb.Unmarshaler> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			jsonMarshaler: init?.jsonMarshaler ?? (null! as jsonpb.Marshaler | $.VarRef<jsonpb.Marshaler> | null),
			jsonUnmarshaler: init?.jsonUnmarshaler ?? (null! as jsonpb.Unmarshaler | $.VarRef<jsonpb.Unmarshaler> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): codec {
		return new codec(this, true)
	}

	public __goscriptAssign(source: codec): void {
		const target = this._fields
		const values = source._fields
		target.jsonMarshaler = values.jsonMarshaler
		target.jsonUnmarshaler = values.jsonUnmarshaler
	}

	static __typeInfo = $.registerStructType(
		"protobuf.codec",
		() => new codec(),
		() => [],
		codec,
		() => [/* @__PURE__ */ $.structField("jsonMarshaler", /* @__PURE__ */ $.pointerType("jsonpb.Marshaler"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" }), /* @__PURE__ */ $.structField("jsonUnmarshaler", /* @__PURE__ */ $.pointerType("jsonpb.Unmarshaler"), [1], 8, false, { pkgPath: "go.uber.org/yarpc/encoding/protobuf" })]
	)
}

export let _bufferPool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(proto.NewBuffer($.makeSlice<number>(1024, undefined, "byte")), "*proto.Buffer", /* @__PURE__ */ $.pointerType("proto.Buffer"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set__bufferPool(__goscriptValue: sync.Pool): void {
	$.assignStruct(_bufferPool.value, __goscriptValue)
}

export function newCodec(anyResolver: jsonpb.AnyResolver | null): codec | $.VarRef<codec> | null {
	return new codec({jsonMarshaler: new jsonpb.Marshaler({AnyResolver: anyResolver}), jsonUnmarshaler: new jsonpb.Unmarshaler({AnyResolver: anyResolver, AllowUnknownFields: true})})
}

export async function unmarshal(encoding: transport.Encoding, reader: io.Reader | null, message: proto.Message | null, c: codec | $.VarRef<codec> | null): globalThis.Promise<$.GoError> {
	using __defer = new $.DisposableStack()
	let buf: bufferpool.Buffer | $.VarRef<bufferpool.Buffer> | null = await bufferpool.Get()
	const __goscriptDeferArg0 = buf
	__defer.defer(() => { bufferpool.Put(__goscriptDeferArg0) })
	{
		let [, err] = await (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as bufferpool.Buffer).ReadFrom(reader) : bufferpool.Buffer.prototype.ReadFrom.call(buf, reader))
		if (err != null) {
			return err
		}
	}
	let body: $.Slice<number> = (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as bufferpool.Buffer).Bytes() : bufferpool.Buffer.prototype.Bytes.call(buf))
	if ($.sliceLen(body) == 0) {
		return null
	}
	return await unmarshalBytes(encoding, body, message, c)
}

export async function unmarshalBytes(encoding: transport.Encoding, body: $.Slice<number>, message: proto.Message | null, c: codec | $.VarRef<codec> | null): globalThis.Promise<$.GoError> {
	let customCodec = __goscript_codec_registry.getCodec(encoding)
	if (customCodec == null) {
		return __goscript_codec_registry.newUnrecognizedEncodingError(encoding)
	}
	// For JSON encoding with custom AnyResolver, use the provided codec
	if (($.stringEqual(encoding, "json")) && (c != null)) {
		return jsonpb.Unmarshaler.prototype.Unmarshal.call($.pointerValue<codec>(c).jsonUnmarshaler, $.interfaceValue<io.Reader | null>(bytes.NewReader(body), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")), message)
	}
	return (customCodec !== null && (customCodec as any).__isVarRef !== true && (customCodec as any).__goValue === undefined ? (customCodec as Exclude<__goscript_codec_registry.Codec, null>) : $.pointerValue<Exclude<__goscript_codec_registry.Codec, null>>(customCodec)).Unmarshal(body, (message as any))
}

export async function marshal(encoding: transport.Encoding, message: proto.Message | null, c: codec | $.VarRef<codec> | null): globalThis.Promise<[$.Slice<number>, (() => void) | null, $.GoError]> {
	let customCodec = __goscript_codec_registry.getCodec(encoding)
	if (customCodec == null) {
		return [null, $.functionValue((): void => {
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), __goscript_codec_registry.newUnrecognizedEncodingError(encoding)]
	}
	// For JSON encoding with custom AnyResolver, use the provided codec
	if (($.stringEqual(encoding, "json")) && (c != null)) {
		return marshalJSON(message, c)
	}
	return (customCodec !== null && (customCodec as any).__isVarRef !== true && (customCodec as any).__goValue === undefined ? (customCodec as Exclude<__goscript_codec_registry.Codec, null>) : $.pointerValue<Exclude<__goscript_codec_registry.Codec, null>>(customCodec)).Marshal((message as any))
}

export async function marshalJSON(message: proto.Message | null, c: codec | $.VarRef<codec> | null): globalThis.Promise<[$.Slice<number>, (() => void) | null, $.GoError]> {
	let buf: bufferpool.Buffer | $.VarRef<bufferpool.Buffer> | null = await bufferpool.Get()
	let cleanup: (() => void) | null = $.functionValue((): void => {
		bufferpool.Put(buf)
	}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
	{
		let err = await jsonpb.Marshaler.prototype.Marshal.call($.pointerValue<codec>(c).jsonMarshaler, $.interfaceValue<io.Writer | null>(buf, "*bufferpool.Buffer", /* @__PURE__ */ $.pointerType("bufferpool.Buffer")), message)
		if (err != null) {
			void (__goscriptAwait = cleanup!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [null, $.functionValue((): void => {
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), err]
		}
	}
	return [(buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as bufferpool.Buffer).Bytes() : bufferpool.Buffer.prototype.Bytes.call(buf)), cleanup, null]
}

export async function getBuffer(): globalThis.Promise<proto.Buffer | $.VarRef<proto.Buffer> | null> {
	let buf: proto.Buffer | $.VarRef<proto.Buffer> | null = $.mustTypeAssert<proto.Buffer | $.VarRef<proto.Buffer> | null>(await _bufferPool.value.Get(), /* @__PURE__ */ $.pointerType("proto.Buffer"))
	void (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as proto.Buffer).Reset() : proto.Buffer.prototype.Reset.call(buf))
	return buf
}

export function putBuffer(buf: proto.Buffer | $.VarRef<proto.Buffer> | null): void {
	_bufferPool.value.Put($.interfaceValue(buf, "*proto.Buffer", /* @__PURE__ */ $.pointerType("proto.Buffer")))
}

var __goscriptAwait: any
