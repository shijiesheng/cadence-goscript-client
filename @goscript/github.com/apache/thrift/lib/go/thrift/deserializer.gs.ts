// Generated file based on deserializer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as sync from "@goscript/sync/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import type * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript__type from "./type.gs.ts"

import * as __goscript_binary_protocol from "./binary_protocol.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import * as __goscript_memory_buffer from "./memory_buffer.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_protocol_factory from "./protocol_factory.gs.ts"

import * as __goscript_serializer from "./serializer.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "@goscript/sync/index.js"
import "@goscript/bytes/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/time/index.js"
import "./binary_protocol.gs.ts"
import "./configuration.gs.ts"
import "./header_transport.gs.ts"
import "./memory_buffer.gs.ts"
import "./protocol.gs.ts"
import "./protocol_factory.gs.ts"
import "./serializer.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TDeserializer", "thrift.TDeserializerPool"])

export class TDeserializer {
	public get Transport(): __goscript_memory_buffer.TMemoryBuffer | $.VarRef<__goscript_memory_buffer.TMemoryBuffer> | null {
		return this._fields.Transport
	}

	public set Transport(value: __goscript_memory_buffer.TMemoryBuffer | $.VarRef<__goscript_memory_buffer.TMemoryBuffer> | null) {
		this._fields.Transport = value
	}

	public get Protocol(): __goscript_protocol.TProtocol | null {
		return this._fields.Protocol
	}

	public set Protocol(value: __goscript_protocol.TProtocol | null) {
		this._fields.Protocol = value
	}

	public _fields: {
		Transport: __goscript_memory_buffer.TMemoryBuffer | $.VarRef<__goscript_memory_buffer.TMemoryBuffer> | null
		Protocol: __goscript_protocol.TProtocol | null
	}

	constructor(init?: Partial<{Transport?: __goscript_memory_buffer.TMemoryBuffer | $.VarRef<__goscript_memory_buffer.TMemoryBuffer> | null, Protocol?: __goscript_protocol.TProtocol | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Transport: init?.Transport ?? (null! as __goscript_memory_buffer.TMemoryBuffer | $.VarRef<__goscript_memory_buffer.TMemoryBuffer> | null),
			Protocol: init?.Protocol ?? (null! as __goscript_protocol.TProtocol | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TDeserializer {
		return new TDeserializer(this, true)
	}

	public __goscriptAssign(source: TDeserializer): void {
		const target = this._fields
		const values = source._fields
		target.Transport = values.Transport
		target.Protocol = $.assignFieldValue(target.Protocol, values.Protocol, "thrift.TProtocol")
	}

	public async Read(ctx: context.Context | null, msg: __goscript_serializer.TStruct | null, b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const t: TDeserializer | $.VarRef<TDeserializer> | null = this;
		let err: $.GoError = null! as $.GoError
		const t$: TDeserializer = t == null ? $.pointerTarget<TDeserializer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TDeserializer>(t)
		$.pointerValue<bytes.Buffer>($.pointerValue<__goscript_memory_buffer.TMemoryBuffer>((t$ as TDeserializer).Transport).Buffer).Reset()

		err = null
		{
			let __goscriptTuple0: any = $.pointerValue<bytes.Buffer>($.pointerValue<__goscript_memory_buffer.TMemoryBuffer>((t$ as TDeserializer).Transport).Buffer).Write(b)
			err = __goscriptTuple0[1]
			if (err != null) {
				return err
			}
		}
		{
			err = (__goscriptAwait = (msg !== null && (msg as any).__isVarRef !== true && (msg as any).__goValue === undefined ? (msg as Exclude<__goscript_serializer.TStruct, null>) : $.pointerValue<Exclude<__goscript_serializer.TStruct, null>>(msg)).Read(ctx, (t$ as TDeserializer).Protocol), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
		return err
	}

	public async ReadString(ctx: context.Context | null, msg: __goscript_serializer.TStruct | null, s: string): globalThis.Promise<$.GoError> {
		const t: TDeserializer | $.VarRef<TDeserializer> | null = this;
		let err: $.GoError = null! as $.GoError
		const t$: TDeserializer = t == null ? $.pointerTarget<TDeserializer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TDeserializer>(t)
		$.pointerValue<bytes.Buffer>($.pointerValue<__goscript_memory_buffer.TMemoryBuffer>((t$ as TDeserializer).Transport).Buffer).Reset()

		err = null
		{
			let __goscriptTuple1: any = $.pointerValue<bytes.Buffer>($.pointerValue<__goscript_memory_buffer.TMemoryBuffer>((t$ as TDeserializer).Transport).Buffer).Write($.stringToBytes(s))
			err = __goscriptTuple1[1]
			if (err != null) {
				return err
			}
		}
		{
			err = (__goscriptAwait = (msg !== null && (msg as any).__isVarRef !== true && (msg as any).__goValue === undefined ? (msg as Exclude<__goscript_serializer.TStruct, null>) : $.pointerValue<Exclude<__goscript_serializer.TStruct, null>>(msg)).Read(ctx, (t$ as TDeserializer).Protocol), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
		return err
	}

	static __typeInfo = $.registerStructType(
		"thrift.TDeserializer",
		() => new TDeserializer(),
		() => [$.methodSignature("Read", [["ctx", "context.Context"], ["msg", "thrift.TStruct"], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["err", "error"]], true), $.methodSignature("ReadString", [["ctx", "context.Context"], ["msg", "thrift.TStruct"], ["s", /* @__PURE__ */ $.basicType("string")]], [["err", "error"]], true)],
		TDeserializer,
		() => [/* @__PURE__ */ $.structField("Transport", /* @__PURE__ */ $.pointerType("thrift.TMemoryBuffer"), [0], 0, true), /* @__PURE__ */ $.structField("Protocol", "thrift.TProtocol", [1], 8, true)]
	)
}

export class TDeserializerPool {
	public get pool(): sync.Pool {
		return this._fields.pool
	}

	public set pool(value: sync.Pool) {
		this._fields.pool = value
	}

	public _fields: {
		pool: sync.Pool
	}

	constructor(init?: Partial<{pool?: sync.Pool}>, __goscriptValue?: boolean) {
		this._fields = {
			pool: init?.pool ? $.markAsStructValue($.cloneStructValue(init.pool)) : $.markAsStructValue(new sync.Pool())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TDeserializerPool {
		return new TDeserializerPool(this, true)
	}

	public __goscriptAssign(source: TDeserializerPool): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.pool, values.pool)
	}

	public async Read(ctx: context.Context | null, msg: __goscript_serializer.TStruct | null, b: $.Slice<number>): globalThis.Promise<$.GoError> {
		const t: TDeserializerPool | $.VarRef<TDeserializerPool> | null = this;
		using __defer = new $.DisposableStack()
		const t$: TDeserializerPool = t == null ? $.pointerTarget<TDeserializerPool>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TDeserializerPool>(t)
		let d: TDeserializer | $.VarRef<TDeserializer> | null = $.mustTypeAssert<TDeserializer | $.VarRef<TDeserializer> | null>(await (t$ as TDeserializerPool).pool.Get(), /* @__PURE__ */ $.pointerType("thrift.TDeserializer"))
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (x: any) => __receiver.Put(x))((t$ as TDeserializerPool).pool), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "sync.(*Pool).Put-fm")
		const __goscriptDeferArg0 = $.interfaceValue(d, "*thrift.TDeserializer", /* @__PURE__ */ $.pointerType("thrift.TDeserializer"))
		__defer.defer(() => { __goscriptDeferCallee0(__goscriptDeferArg0) })
		return await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as TDeserializer).Read(ctx, msg, b) : TDeserializer.prototype.Read.call(d, ctx, msg, b))
	}

	public async ReadString(ctx: context.Context | null, msg: __goscript_serializer.TStruct | null, s: string): globalThis.Promise<$.GoError> {
		const t: TDeserializerPool | $.VarRef<TDeserializerPool> | null = this;
		using __defer = new $.DisposableStack()
		const t$: TDeserializerPool = t == null ? $.pointerTarget<TDeserializerPool>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TDeserializerPool>(t)
		let d: TDeserializer | $.VarRef<TDeserializer> | null = $.mustTypeAssert<TDeserializer | $.VarRef<TDeserializer> | null>(await (t$ as TDeserializerPool).pool.Get(), /* @__PURE__ */ $.pointerType("thrift.TDeserializer"))
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (x: any) => __receiver.Put(x))((t$ as TDeserializerPool).pool), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "sync.(*Pool).Put-fm")
		const __goscriptDeferArg1 = $.interfaceValue(d, "*thrift.TDeserializer", /* @__PURE__ */ $.pointerType("thrift.TDeserializer"))
		__defer.defer(() => { __goscriptDeferCallee1(__goscriptDeferArg1) })
		return await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as TDeserializer).ReadString(ctx, msg, s) : TDeserializer.prototype.ReadString.call(d, ctx, msg, s))
	}

	static __typeInfo = $.registerStructType(
		"thrift.TDeserializerPool",
		() => new TDeserializerPool(),
		() => [$.methodSignature("Read", [["ctx", "context.Context"], ["msg", "thrift.TStruct"], ["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("ReadString", [["ctx", "context.Context"], ["msg", "thrift.TStruct"], ["s", /* @__PURE__ */ $.basicType("string")]], ["error"], true)],
		TDeserializerPool,
		() => [/* @__PURE__ */ $.structField("pool", "sync.Pool", [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export async function NewTDeserializer(): globalThis.Promise<TDeserializer | $.VarRef<TDeserializer> | null> {
	let transport: __goscript_memory_buffer.TMemoryBuffer | $.VarRef<__goscript_memory_buffer.TMemoryBuffer> | null = __goscript_memory_buffer.NewTMemoryBufferLen(1024)
	let protocol: __goscript_binary_protocol.TBinaryProtocol | $.VarRef<__goscript_binary_protocol.TBinaryProtocol> | null = await __goscript_binary_protocol.NewTBinaryProtocolTransport($.interfaceValue<__goscript_transport.TTransport | null>(transport, "*thrift.TMemoryBuffer", /* @__PURE__ */ $.pointerType("thrift.TMemoryBuffer")))

	return new TDeserializer({Transport: transport, Protocol: $.interfaceValue<__goscript_protocol.TProtocol | null>(protocol, "*thrift.TBinaryProtocol", /* @__PURE__ */ $.pointerType("thrift.TBinaryProtocol"))})
}

export function NewTDeserializerPool(f: (() => TDeserializer | $.VarRef<TDeserializer> | null | globalThis.Promise<TDeserializer | $.VarRef<TDeserializer> | null>) | null): TDeserializerPool | $.VarRef<TDeserializerPool> | null {
	return new TDeserializerPool({pool: $.markAsStructValue(new sync.Pool({New: $.functionValue(async (): globalThis.Promise<any> => {
		return $.interfaceValue(((__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as TDeserializer | $.VarRef<TDeserializer> | null), "*thrift.TDeserializer", /* @__PURE__ */ $.pointerType("thrift.TDeserializer"))
	}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))}))})
}

export function NewTDeserializerPoolSizeFactory(size: number, factory: __goscript_protocol_factory.TProtocolFactory | null): TDeserializerPool | $.VarRef<TDeserializerPool> | null {
	return new TDeserializerPool({pool: $.markAsStructValue(new sync.Pool({New: $.functionValue(async (): globalThis.Promise<any> => {
		let transport: __goscript_memory_buffer.TMemoryBuffer | $.VarRef<__goscript_memory_buffer.TMemoryBuffer> | null = __goscript_memory_buffer.NewTMemoryBufferLen(size)
		let protocol = (__goscriptAwait = (factory !== null && (factory as any).__isVarRef !== true && (factory as any).__goValue === undefined ? (factory as Exclude<__goscript_protocol_factory.TProtocolFactory, null>) : $.pointerValue<Exclude<__goscript_protocol_factory.TProtocolFactory, null>>(factory)).GetProtocol($.interfaceValue<__goscript_transport.TTransport | null>(transport, "*thrift.TMemoryBuffer", /* @__PURE__ */ $.pointerType("thrift.TMemoryBuffer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		return $.interfaceValue(new TDeserializer({Transport: transport, Protocol: protocol}), "*thrift.TDeserializer", /* @__PURE__ */ $.pointerType("thrift.TDeserializer"))
	}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))}))})
}

var __goscriptAwait: any
