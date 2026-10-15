// Generated file based on middleware.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript__type from "./type.gs.ts"

import * as __goscript_client from "./client.gs.ts"

import * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import * as __goscript_processor_factory from "./processor_factory.gs.ts"

import * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_serializer from "./serializer.gs.ts"

import type * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "./client.gs.ts"
import "./exception.gs.ts"
import "./header_transport.gs.ts"
import "./processor_factory.gs.ts"
import "./protocol.gs.ts"
import "./serializer.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.ProcessorMiddleware", "thrift.WrappedTProcessorFunction", "thrift.ClientMiddleware", "thrift.WrappedTClient"])

export type ProcessorMiddleware = ((name: string, next: __goscript_processor_factory.TProcessorFunction | null) => __goscript_processor_factory.TProcessorFunction | null | globalThis.Promise<__goscript_processor_factory.TProcessorFunction | null>) | null

export type ClientMiddleware = ((_p0: __goscript_client.TClient | null) => __goscript_client.TClient | null | globalThis.Promise<__goscript_client.TClient | null>) | null

export class WrappedTProcessorFunction {
	// Wrapped is called by WrappedTProcessorFunction.Process and should be a
	// "wrapped" call to a base TProcessorFunc.Process call.
	public get Wrapped(): ((ctx: context.Context | null, seqId: number, _in: __goscript_protocol.TProtocol | null, out: __goscript_protocol.TProtocol | null) => [boolean, __goscript_exception.TException | null] | globalThis.Promise<[boolean, __goscript_exception.TException | null]>) | null {
		return this._fields.Wrapped
	}

	public set Wrapped(value: ((ctx: context.Context | null, seqId: number, _in: __goscript_protocol.TProtocol | null, out: __goscript_protocol.TProtocol | null) => [boolean, __goscript_exception.TException | null] | globalThis.Promise<[boolean, __goscript_exception.TException | null]>) | null) {
		this._fields.Wrapped = value
	}

	public _fields: {
		Wrapped: ((ctx: context.Context | null, seqId: number, _in: __goscript_protocol.TProtocol | null, out: __goscript_protocol.TProtocol | null) => [boolean, __goscript_exception.TException | null] | globalThis.Promise<[boolean, __goscript_exception.TException | null]>) | null
	}

	constructor(init?: Partial<{Wrapped?: ((ctx: context.Context | null, seqId: number, _in: __goscript_protocol.TProtocol | null, out: __goscript_protocol.TProtocol | null) => [boolean, __goscript_exception.TException | null] | globalThis.Promise<[boolean, __goscript_exception.TException | null]>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Wrapped: init?.Wrapped ?? (null! as ((ctx: context.Context | null, seqId: number, _in: __goscript_protocol.TProtocol | null, out: __goscript_protocol.TProtocol | null) => [boolean, __goscript_exception.TException | null] | globalThis.Promise<[boolean, __goscript_exception.TException | null]>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WrappedTProcessorFunction {
		return new WrappedTProcessorFunction(this, true)
	}

	public __goscriptAssign(source: WrappedTProcessorFunction): void {
		const target = this._fields
		const values = source._fields
		target.Wrapped = values.Wrapped
	}

	public async Process(ctx: context.Context | null, seqID: number, _in: __goscript_protocol.TProtocol | null, out: __goscript_protocol.TProtocol | null): globalThis.Promise<[boolean, __goscript_exception.TException | null]> {
		const p = this;
		return p.Wrapped!(ctx, seqID, _in, out)
	}

	static __typeInfo = $.registerStructType(
		"thrift.WrappedTProcessorFunction",
		() => new WrappedTProcessorFunction(),
		() => [$.methodSignature("Process", [["ctx", "context.Context"], ["seqID", /* @__PURE__ */ $.basicType("int32")], ["in", "thrift.TProtocol"], ["out", "thrift.TProtocol"]], [/* @__PURE__ */ $.basicType("bool"), "thrift.TException"])],
		WrappedTProcessorFunction,
		() => [/* @__PURE__ */ $.structField("Wrapped", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("int32"), "thrift.TProtocol", "thrift.TProtocol"], results: [/* @__PURE__ */ $.basicType("bool"), "thrift.TException"] } as $.FunctionTypeInfo), [0], 0, true)]
	)
}

export class WrappedTClient {
	public get Wrapped(): ((ctx: context.Context | null, method: string, args: __goscript_serializer.TStruct | null, result: __goscript_serializer.TStruct | null) => [__goscript_client.ResponseMeta, $.GoError] | globalThis.Promise<[__goscript_client.ResponseMeta, $.GoError]>) | null {
		return this._fields.Wrapped
	}

	public set Wrapped(value: ((ctx: context.Context | null, method: string, args: __goscript_serializer.TStruct | null, result: __goscript_serializer.TStruct | null) => [__goscript_client.ResponseMeta, $.GoError] | globalThis.Promise<[__goscript_client.ResponseMeta, $.GoError]>) | null) {
		this._fields.Wrapped = value
	}

	public _fields: {
		Wrapped: ((ctx: context.Context | null, method: string, args: __goscript_serializer.TStruct | null, result: __goscript_serializer.TStruct | null) => [__goscript_client.ResponseMeta, $.GoError] | globalThis.Promise<[__goscript_client.ResponseMeta, $.GoError]>) | null
	}

	constructor(init?: Partial<{Wrapped?: ((ctx: context.Context | null, method: string, args: __goscript_serializer.TStruct | null, result: __goscript_serializer.TStruct | null) => [__goscript_client.ResponseMeta, $.GoError] | globalThis.Promise<[__goscript_client.ResponseMeta, $.GoError]>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Wrapped: init?.Wrapped ?? (null! as ((ctx: context.Context | null, method: string, args: __goscript_serializer.TStruct | null, result: __goscript_serializer.TStruct | null) => [__goscript_client.ResponseMeta, $.GoError] | globalThis.Promise<[__goscript_client.ResponseMeta, $.GoError]>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): WrappedTClient {
		return new WrappedTClient(this, true)
	}

	public __goscriptAssign(source: WrappedTClient): void {
		const target = this._fields
		const values = source._fields
		target.Wrapped = values.Wrapped
	}

	public async Call(ctx: context.Context | null, method: string, args: __goscript_serializer.TStruct | null, result: __goscript_serializer.TStruct | null): globalThis.Promise<[__goscript_client.ResponseMeta, $.GoError]> {
		const c = this;
		return c.Wrapped!(ctx, method, args, result)
	}

	static __typeInfo = $.registerStructType(
		"thrift.WrappedTClient",
		() => new WrappedTClient(),
		() => [$.methodSignature("Call", [["ctx", "context.Context"], ["method", /* @__PURE__ */ $.basicType("string")], ["args", "thrift.TStruct"], ["result", "thrift.TStruct"]], ["thrift.ResponseMeta", "error"])],
		WrappedTClient,
		() => [/* @__PURE__ */ $.structField("Wrapped", ({ kind: $.TypeKind.Function, params: ["context.Context", /* @__PURE__ */ $.basicType("string"), "thrift.TStruct", "thrift.TStruct"], results: ["thrift.ResponseMeta", "error"] } as $.FunctionTypeInfo), [0], 0, true)]
	)
}

export async function WrapProcessor(processor: __goscript_processor_factory.TProcessor | null, middlewares: $.Slice<ProcessorMiddleware | null>): globalThis.Promise<__goscript_processor_factory.TProcessor | null> {
	for (const [name, processorFunc] of ((__goscriptAwait = (processor !== null && (processor as any).__isVarRef !== true && (processor as any).__goValue === undefined ? (processor as Exclude<__goscript_processor_factory.TProcessor, null>) : $.pointerValue<Exclude<__goscript_processor_factory.TProcessor, null>>(processor)).ProcessorMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<string, __goscript_processor_factory.TProcessorFunction | null> | null)?.entries() ?? []) {
		let wrapped: __goscript_processor_factory.TProcessorFunction | null = processorFunc
		// Add middlewares in reverse so the first in the list is the outermost.
		for (let __goscriptSliceWindow0 = $.sliceRange(middlewares), i = $.sliceLen(middlewares) - 1; i >= 0; i--) {
			wrapped = (__goscriptAwait = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as ProcessorMiddleware | null)!(name, wrapped), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		void (__goscriptAwait = (processor !== null && (processor as any).__isVarRef !== true && (processor as any).__goValue === undefined ? (processor as Exclude<__goscript_processor_factory.TProcessor, null>) : $.pointerValue<Exclude<__goscript_processor_factory.TProcessor, null>>(processor)).AddToProcessorMap(name, wrapped), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return processor
}

export async function WrapClient(client: __goscript_client.TClient | null, middlewares: $.Slice<ClientMiddleware | null>): globalThis.Promise<__goscript_client.TClient | null> {
	// Add middlewares in reverse so the first in the list is the outermost.
	for (let __goscriptSliceWindow1 = $.sliceRange(middlewares), i = $.sliceLen(middlewares) - 1; i >= 0; i--) {
		client = (__goscriptAwait = ((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i)] as ClientMiddleware | null)!(client), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return client
}

var __goscriptAwait: any
