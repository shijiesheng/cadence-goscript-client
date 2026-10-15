// Generated file based on codec_registry.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as jsonpb from "@goscript/github.com/gogo/protobuf/jsonpb/index.js"

import * as proto from "@goscript/github.com/gogo/protobuf/proto/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as bufferpool from "@goscript/go.uber.org/yarpc/internal/bufferpool/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_marshal from "./marshal.gs.ts"

import * as __goscript_protobuf from "./protobuf.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/github.com/gogo/protobuf/jsonpb/index.js"
import "@goscript/github.com/gogo/protobuf/proto/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "@goscript/go.uber.org/yarpc/internal/bufferpool/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "./marshal.gs.ts"
import "./protobuf.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/encoding/protobuf", ["protobuf.Codec", "protobuf.protoCodec", "protobuf.jsonCodec"])

export type Codec = {
	Marshal(v: any): [$.Slice<number>, (() => void) | null, $.GoError] | globalThis.Promise<[$.Slice<number>, (() => void) | null, $.GoError]>
	Name(): transport.Encoding
	Unmarshal(data: $.Slice<number>, v: any): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"protobuf.Codec",
	null,
	[$.methodSignature("Marshal", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["cleanup", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)], ["err", "error"]]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "transport.Encoding")]), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["v", { kind: $.TypeKind.Interface, methods: [] }]], ["error"])]
);

export class protoCodec {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): protoCodec {
		return new protoCodec(this, true)
	}

	public __goscriptAssign(source: protoCodec): void {
	}

	public async Marshal(v: any): globalThis.Promise<[$.Slice<number>, (() => void) | null, $.GoError]> {
		const c: protoCodec | $.VarRef<protoCodec> | null = this;
		let [msg, ok] = $.typeAssertTuple<proto.Message | null>(v, "proto.Message")
		if (!ok) {
			return [null, $.functionValue((): void => {
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), newNotProtoMessageError(v)]
		}
		let buf: proto.Buffer | $.VarRef<proto.Buffer> | null = await __goscript_marshal.getBuffer()
		{
			let err = await (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as proto.Buffer).Marshal(msg) : proto.Buffer.prototype.Marshal.call(buf, msg))
			if (err != null) {
				__goscript_marshal.putBuffer(buf)
				return [null, $.functionValue((): void => {
				}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), err]
			}
		}
		return [(buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as proto.Buffer).Bytes() : proto.Buffer.prototype.Bytes.call(buf)), $.functionValue((): void => {
			__goscript_marshal.putBuffer(buf)
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), null]
	}

	public Name(): transport.Encoding {
		const c: protoCodec | $.VarRef<protoCodec> | null = this;
		return "proto"
	}

	public async Unmarshal(data: $.Slice<number>, v: any): globalThis.Promise<$.GoError> {
		const c: protoCodec | $.VarRef<protoCodec> | null = this;
		let [msg, ok] = $.typeAssertTuple<proto.Message | null>(v, "proto.Message")
		if (!ok) {
			return newNotProtoMessageError(v)
		}
		return proto.Unmarshal(data, msg)
	}

	static __typeInfo = $.registerStructType(
		"protobuf.protoCodec",
		() => new protoCodec(),
		() => [$.methodSignature("Marshal", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "error"], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "transport.Encoding")], true), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["v", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true)],
		protoCodec,
		() => []
	)
}

export class jsonCodec {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): jsonCodec {
		return new jsonCodec(this, true)
	}

	public __goscriptAssign(source: jsonCodec): void {
	}

	public async Marshal(v: any): globalThis.Promise<[$.Slice<number>, (() => void) | null, $.GoError]> {
		const c: jsonCodec | $.VarRef<jsonCodec> | null = this;
		let [msg, ok] = $.typeAssertTuple<proto.Message | null>(v, "proto.Message")
		if (!ok) {
			return [null, $.functionValue((): void => {
			}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), newNotProtoMessageError(v)]
		}
		let buf: bufferpool.Buffer | $.VarRef<bufferpool.Buffer> | null = await bufferpool.Get()
		{
			let err = await (defaultJSONMarshaler !== null && (defaultJSONMarshaler as any).__isVarRef !== true && (defaultJSONMarshaler as any).__goValue === undefined ? ((defaultJSONMarshaler as any) as jsonpb.Marshaler).Marshal($.interfaceValue<io.Writer | null>(buf, "*bufferpool.Buffer", /* @__PURE__ */ $.pointerType("bufferpool.Buffer")), msg) : jsonpb.Marshaler.prototype.Marshal.call(defaultJSONMarshaler, $.interfaceValue<io.Writer | null>(buf, "*bufferpool.Buffer", /* @__PURE__ */ $.pointerType("bufferpool.Buffer")), msg))
			if (err != null) {
				bufferpool.Put(buf)
				return [null, $.functionValue((): void => {
				}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), err]
			}
		}
		return [(buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? ((buf as any) as bufferpool.Buffer).Bytes() : bufferpool.Buffer.prototype.Bytes.call(buf)), $.functionValue((): void => {
			bufferpool.Put(buf)
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)), null]
	}

	public Name(): transport.Encoding {
		const c: jsonCodec | $.VarRef<jsonCodec> | null = this;
		return "json"
	}

	public async Unmarshal(data: $.Slice<number>, v: any): globalThis.Promise<$.GoError> {
		const c: jsonCodec | $.VarRef<jsonCodec> | null = this;
		let [msg, ok] = $.typeAssertTuple<proto.Message | null>(v, "proto.Message")
		if (!ok) {
			return newNotProtoMessageError(v)
		}
		return jsonpb.Unmarshaler.prototype.Unmarshal.call(defaultJSONUnmarshaler, $.interfaceValue<io.Reader | null>(bytes.NewReader(data), "*bytes.Reader", /* @__PURE__ */ $.pointerType("bytes.Reader")), msg)
	}

	static __typeInfo = $.registerStructType(
		"protobuf.jsonCodec",
		() => new jsonCodec(),
		() => [$.methodSignature("Marshal", [["v", { kind: $.TypeKind.Interface, methods: [] }]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "error"], true), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "transport.Encoding")], true), $.methodSignature("Unmarshal", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["v", { kind: $.TypeKind.Interface, methods: [] }]], ["error"], true)],
		jsonCodec,
		() => []
	)
}

export let _codecs: globalThis.Map<transport.Encoding, Codec | null> | null = $.makeMap<transport.Encoding, Codec | null>()

export function __goscript_set__codecs(__goscriptValue: globalThis.Map<transport.Encoding, Codec | null> | null): void {
	_codecs = __goscriptValue
}

function __goscriptInit0(): void {
	$.mapSet(_codecs, "proto", $.interfaceValue<Codec | null>(new protoCodec(), "*protobuf.protoCodec", /* @__PURE__ */ $.pointerType("protobuf.protoCodec")))
	$.mapSet(_codecs, "json", $.interfaceValue<Codec | null>(new jsonCodec(), "*protobuf.jsonCodec", /* @__PURE__ */ $.pointerType("protobuf.jsonCodec")))
}

export async function RegisterCodec(codec: Codec | null): globalThis.Promise<void> {
	$.mapSet(_codecs, (__goscriptAwait = (codec !== null && (codec as any).__isVarRef !== true && (codec as any).__goValue === undefined ? (codec as Exclude<Codec, null>) : $.pointerValue<Exclude<Codec, null>>(codec)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), codec)
}

export function GetCodecForEncoding(enc: transport.Encoding): [Codec | null, boolean] {
	let [__goscriptShadow0, ok] = $.mapGet<transport.Encoding, Codec | null, Codec | null>(_codecs, enc, null)
	return [__goscriptShadow0, ok]
}

export function GetCodecNames(): $.Slice<transport.Encoding> {
	let names: $.Slice<transport.Encoding> = $.makeSlice<transport.Encoding>(0, $.len(_codecs), "string")
	for (const [name, __rangeValue] of _codecs?.entries() ?? []) {
		names = $.appendOne(names, name)
	}
	return names
}

export function getCodec(enc: transport.Encoding): Codec | null {
	return $.mapGet<transport.Encoding, Codec | null, Codec | null>(_codecs, enc, null)[0]
}

export let defaultJSONMarshaler: jsonpb.Marshaler | $.VarRef<jsonpb.Marshaler> | null = new jsonpb.Marshaler()

export function __goscript_set_defaultJSONMarshaler(__goscriptValue: jsonpb.Marshaler | $.VarRef<jsonpb.Marshaler> | null): void {
	defaultJSONMarshaler = __goscriptValue
}

export let defaultJSONUnmarshaler: jsonpb.Unmarshaler | $.VarRef<jsonpb.Unmarshaler> | null = new jsonpb.Unmarshaler({AllowUnknownFields: true})

export function __goscript_set_defaultJSONUnmarshaler(__goscriptValue: jsonpb.Unmarshaler | $.VarRef<jsonpb.Unmarshaler> | null): void {
	defaultJSONUnmarshaler = __goscriptValue
}

export function newNotProtoMessageError(v: any): $.GoError {
	return $.interfaceValue<$.GoError>(yarpcerrors.Newf(13, "expected proto.Message, got %T", $.arrayToSlice<any>([v])), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

export function newUnrecognizedEncodingError(encoding: transport.Encoding): $.GoError {
	return $.interfaceValue<$.GoError>(yarpcerrors.Newf(13, "encoding.Expect should have handled encoding %q but did not", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(encoding, "transport.Encoding", {}, /* @__PURE__ */ $.basicType("string", "transport.Encoding"))])), "*yarpcerrors.Status", /* @__PURE__ */ $.pointerType("yarpcerrors.Status"))
}

var __goscriptAwait: any

export { __goscriptInit0 }
