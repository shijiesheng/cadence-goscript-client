// Generated file based on serializer.go
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
import "./transport.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TSerializer", "thrift.TStruct", "thrift.TSerializerPool"])

export type TStruct = {
	Read(ctx: context.Context | null, p: __goscript_protocol.TProtocol | null): $.GoError | globalThis.Promise<$.GoError>
	Write(ctx: context.Context | null, p: __goscript_protocol.TProtocol | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"thrift.TStruct",
	null,
	[$.methodSignature("Read", [["ctx", "context.Context"], ["p", "thrift.TProtocol"]], ["error"]), $.methodSignature("Write", [["ctx", "context.Context"], ["p", "thrift.TProtocol"]], ["error"])]
);

export class TSerializer {
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

	public clone(): TSerializer {
		return new TSerializer(this, true)
	}

	public __goscriptAssign(source: TSerializer): void {
		const target = this._fields
		const values = source._fields
		target.Transport = values.Transport
		target.Protocol = $.assignFieldValue(target.Protocol, values.Protocol, "thrift.TProtocol")
	}

	public async Write(ctx: context.Context | null, msg: TStruct | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const t: TSerializer | $.VarRef<TSerializer> | null = this;
		let b: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		const t$: TSerializer = t == null ? $.pointerTarget<TSerializer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TSerializer>(t)
		$.pointerValue<bytes.Buffer>($.pointerValue<__goscript_memory_buffer.TMemoryBuffer>((t$ as TSerializer).Transport).Buffer).Reset()

		{
			err = (__goscriptAwait = (msg !== null && (msg as any).__isVarRef !== true && (msg as any).__goValue === undefined ? (msg as Exclude<TStruct, null>) : $.pointerValue<Exclude<TStruct, null>>(msg)).Write(ctx, (t$ as TSerializer).Protocol), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [b, err]
			}
		}

		{
			err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((t$ as TSerializer).Protocol).Flush(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [b, err]
			}
		}

		{
			err = __goscript_memory_buffer.TMemoryBuffer.prototype.Flush.call((t$ as TSerializer).Transport, ctx)
			if (err != null) {
				return [b, err]
			}
		}

		b = $.appendSlice(b, $.pointerValue<bytes.Buffer>($.pointerValue<__goscript_memory_buffer.TMemoryBuffer>((t$ as TSerializer).Transport).Buffer).Bytes(), $.byteSliceHint)
		return [b, err]
	}

	public async WriteString(ctx: context.Context | null, msg: TStruct | null): globalThis.Promise<[string, $.GoError]> {
		const t: TSerializer | $.VarRef<TSerializer> | null = this;
		let s: string = ""
		let err: $.GoError = null! as $.GoError
		const t$: TSerializer = t == null ? $.pointerTarget<TSerializer>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TSerializer>(t)
		$.pointerValue<bytes.Buffer>($.pointerValue<__goscript_memory_buffer.TMemoryBuffer>((t$ as TSerializer).Transport).Buffer).Reset()

		{
			err = (__goscriptAwait = (msg !== null && (msg as any).__isVarRef !== true && (msg as any).__goValue === undefined ? (msg as Exclude<TStruct, null>) : $.pointerValue<Exclude<TStruct, null>>(msg)).Write(ctx, (t$ as TSerializer).Protocol), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [s, err]
			}
		}

		{
			err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((t$ as TSerializer).Protocol).Flush(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [s, err]
			}
		}
		{
			err = __goscript_memory_buffer.TMemoryBuffer.prototype.Flush.call((t$ as TSerializer).Transport, ctx)
			if (err != null) {
				return [s, err]
			}
		}

		return [$.pointerValue<bytes.Buffer>($.pointerValue<__goscript_memory_buffer.TMemoryBuffer>((t$ as TSerializer).Transport).Buffer).String(), null]
	}

	static __typeInfo = $.registerStructType(
		"thrift.TSerializer",
		() => new TSerializer(),
		() => [$.methodSignature("Write", [["ctx", "context.Context"], ["msg", "thrift.TStruct"]], [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("WriteString", [["ctx", "context.Context"], ["msg", "thrift.TStruct"]], [["s", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true)],
		TSerializer,
		() => [/* @__PURE__ */ $.structField("Transport", /* @__PURE__ */ $.pointerType("thrift.TMemoryBuffer"), [0], 0, true), /* @__PURE__ */ $.structField("Protocol", "thrift.TProtocol", [1], 8, true)]
	)
}

export class TSerializerPool {
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

	public clone(): TSerializerPool {
		return new TSerializerPool(this, true)
	}

	public __goscriptAssign(source: TSerializerPool): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.pool, values.pool)
	}

	public async Write(ctx: context.Context | null, msg: TStruct | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const t: TSerializerPool | $.VarRef<TSerializerPool> | null = this;
		using __defer = new $.DisposableStack()
		const t$: TSerializerPool = t == null ? $.pointerTarget<TSerializerPool>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TSerializerPool>(t)
		let s: TSerializer | $.VarRef<TSerializer> | null = $.mustTypeAssert<TSerializer | $.VarRef<TSerializer> | null>(await (t$ as TSerializerPool).pool.Get(), /* @__PURE__ */ $.pointerType("thrift.TSerializer"))
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (x: any) => __receiver.Put(x))((t$ as TSerializerPool).pool), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "sync.(*Pool).Put-fm")
		const __goscriptDeferArg0 = $.interfaceValue(s, "*thrift.TSerializer", /* @__PURE__ */ $.pointerType("thrift.TSerializer"))
		__defer.defer(() => { __goscriptDeferCallee0(__goscriptDeferArg0) })
		return await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as TSerializer).Write(ctx, msg) : TSerializer.prototype.Write.call(s, ctx, msg))
	}

	public async WriteString(ctx: context.Context | null, msg: TStruct | null): globalThis.Promise<[string, $.GoError]> {
		const t: TSerializerPool | $.VarRef<TSerializerPool> | null = this;
		using __defer = new $.DisposableStack()
		const t$: TSerializerPool = t == null ? $.pointerTarget<TSerializerPool>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TSerializerPool>(t)
		let s: TSerializer | $.VarRef<TSerializer> | null = $.mustTypeAssert<TSerializer | $.VarRef<TSerializer> | null>(await (t$ as TSerializerPool).pool.Get(), /* @__PURE__ */ $.pointerType("thrift.TSerializer"))
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => (x: any) => __receiver.Put(x))((t$ as TSerializerPool).pool), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "sync.(*Pool).Put-fm")
		const __goscriptDeferArg1 = $.interfaceValue(s, "*thrift.TSerializer", /* @__PURE__ */ $.pointerType("thrift.TSerializer"))
		__defer.defer(() => { __goscriptDeferCallee1(__goscriptDeferArg1) })
		return await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as TSerializer).WriteString(ctx, msg) : TSerializer.prototype.WriteString.call(s, ctx, msg))
	}

	static __typeInfo = $.registerStructType(
		"thrift.TSerializerPool",
		() => new TSerializerPool(),
		() => [$.methodSignature("Write", [["ctx", "context.Context"], ["msg", "thrift.TStruct"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("WriteString", [["ctx", "context.Context"], ["msg", "thrift.TStruct"]], [/* @__PURE__ */ $.basicType("string"), "error"], true)],
		TSerializerPool,
		() => [/* @__PURE__ */ $.structField("pool", "sync.Pool", [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export async function NewTSerializer(): globalThis.Promise<TSerializer | $.VarRef<TSerializer> | null> {
	let transport: __goscript_memory_buffer.TMemoryBuffer | $.VarRef<__goscript_memory_buffer.TMemoryBuffer> | null = __goscript_memory_buffer.NewTMemoryBufferLen(1024)
	let protocol: __goscript_binary_protocol.TBinaryProtocol | $.VarRef<__goscript_binary_protocol.TBinaryProtocol> | null = await __goscript_binary_protocol.NewTBinaryProtocolTransport($.interfaceValue<__goscript_transport.TTransport | null>(transport, "*thrift.TMemoryBuffer", /* @__PURE__ */ $.pointerType("thrift.TMemoryBuffer")))

	return new TSerializer({Transport: transport, Protocol: $.interfaceValue<__goscript_protocol.TProtocol | null>(protocol, "*thrift.TBinaryProtocol", /* @__PURE__ */ $.pointerType("thrift.TBinaryProtocol"))})
}

export function NewTSerializerPool(f: (() => TSerializer | $.VarRef<TSerializer> | null | globalThis.Promise<TSerializer | $.VarRef<TSerializer> | null>) | null): TSerializerPool | $.VarRef<TSerializerPool> | null {
	return new TSerializerPool({pool: $.markAsStructValue(new sync.Pool({New: $.functionValue(async (): globalThis.Promise<any> => {
		return $.interfaceValue(((__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as TSerializer | $.VarRef<TSerializer> | null), "*thrift.TSerializer", /* @__PURE__ */ $.pointerType("thrift.TSerializer"))
	}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))}))})
}

export function NewTSerializerPoolSizeFactory(size: number, factory: __goscript_protocol_factory.TProtocolFactory | null): TSerializerPool | $.VarRef<TSerializerPool> | null {
	return new TSerializerPool({pool: $.markAsStructValue(new sync.Pool({New: $.functionValue(async (): globalThis.Promise<any> => {
		let transport: __goscript_memory_buffer.TMemoryBuffer | $.VarRef<__goscript_memory_buffer.TMemoryBuffer> | null = __goscript_memory_buffer.NewTMemoryBufferLen(size)
		let protocol = (__goscriptAwait = (factory !== null && (factory as any).__isVarRef !== true && (factory as any).__goValue === undefined ? (factory as Exclude<__goscript_protocol_factory.TProtocolFactory, null>) : $.pointerValue<Exclude<__goscript_protocol_factory.TProtocolFactory, null>>(factory)).GetProtocol($.interfaceValue<__goscript_transport.TTransport | null>(transport, "*thrift.TMemoryBuffer", /* @__PURE__ */ $.pointerType("thrift.TMemoryBuffer"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		return $.interfaceValue(new TSerializer({Transport: transport, Protocol: protocol}), "*thrift.TSerializer", /* @__PURE__ */ $.pointerType("thrift.TSerializer"))
	}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))}))})
}

var __goscriptAwait: any
