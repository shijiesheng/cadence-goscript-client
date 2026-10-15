// Generated file based on processor_factory.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript__type from "./type.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import type * as __goscript_protocol from "./protocol.gs.ts"

import type * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TProcessor", "thrift.TProcessorFunction", "thrift.TProcessorFactory", "thrift.tProcessorFactory", "thrift.TProcessorFunctionFactory", "thrift.tProcessorFunctionFactory"])

export type TProcessor = {
	AddToProcessorMap(_p0: string, _p1: TProcessorFunction | null): void
	Process(ctx: context.Context | null, _in: __goscript_protocol.TProtocol | null, out: __goscript_protocol.TProtocol | null): [boolean, __goscript_exception.TException | null] | globalThis.Promise<[boolean, __goscript_exception.TException | null]>
	ProcessorMap(): globalThis.Map<string, TProcessorFunction | null> | null | globalThis.Promise<globalThis.Map<string, TProcessorFunction | null> | null>
}

$.registerInterfaceType(
	"thrift.TProcessor",
	null,
	[$.methodSignature("AddToProcessorMap", [/* @__PURE__ */ $.basicType("string"), "thrift.TProcessorFunction"]), $.methodSignature("Process", [["ctx", "context.Context"], ["in", "thrift.TProtocol"], ["out", "thrift.TProtocol"]], [/* @__PURE__ */ $.basicType("bool"), "thrift.TException"]), $.methodSignature("ProcessorMap", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "thrift.TProcessorFunction")])]
);

export type TProcessorFunction = {
	Process(ctx: context.Context | null, seqId: number, _in: __goscript_protocol.TProtocol | null, out: __goscript_protocol.TProtocol | null): [boolean, __goscript_exception.TException | null] | globalThis.Promise<[boolean, __goscript_exception.TException | null]>
}

$.registerInterfaceType(
	"thrift.TProcessorFunction",
	null,
	[$.methodSignature("Process", [["ctx", "context.Context"], ["seqId", /* @__PURE__ */ $.basicType("int32")], ["in", "thrift.TProtocol"], ["out", "thrift.TProtocol"]], [/* @__PURE__ */ $.basicType("bool"), "thrift.TException"])]
);

export type TProcessorFactory = {
	GetProcessor(trans: __goscript_transport.TTransport | null): TProcessor | null
}

$.registerInterfaceType(
	"thrift.TProcessorFactory",
	null,
	[$.methodSignature("GetProcessor", [["trans", "thrift.TTransport"]], ["thrift.TProcessor"])]
);

export type TProcessorFunctionFactory = {
	GetProcessorFunction(trans: __goscript_transport.TTransport | null): TProcessorFunction | null
}

$.registerInterfaceType(
	"thrift.TProcessorFunctionFactory",
	null,
	[$.methodSignature("GetProcessorFunction", [["trans", "thrift.TTransport"]], ["thrift.TProcessorFunction"])]
);

export class tProcessorFactory {
	public get processor(): TProcessor | null {
		return this._fields.processor
	}

	public set processor(value: TProcessor | null) {
		this._fields.processor = value
	}

	public _fields: {
		processor: TProcessor | null
	}

	constructor(init?: Partial<{processor?: TProcessor | null}>, __goscriptValue?: boolean) {
		this._fields = {
			processor: init?.processor ?? (null! as TProcessor | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tProcessorFactory {
		return new tProcessorFactory(this, true)
	}

	public __goscriptAssign(source: tProcessorFactory): void {
		const target = this._fields
		const values = source._fields
		target.processor = $.assignFieldValue(target.processor, values.processor, "thrift.TProcessor")
	}

	public GetProcessor(trans: __goscript_transport.TTransport | null): TProcessor | null {
		const p: tProcessorFactory | $.VarRef<tProcessorFactory> | null = this;
		return $.pointerValue<tProcessorFactory>(p).processor
	}

	static __typeInfo = $.registerStructType(
		"thrift.tProcessorFactory",
		() => new tProcessorFactory(),
		() => [$.methodSignature("GetProcessor", [["trans", "thrift.TTransport"]], ["thrift.TProcessor"], true)],
		tProcessorFactory,
		() => [/* @__PURE__ */ $.structField("processor", "thrift.TProcessor", [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export class tProcessorFunctionFactory {
	public get processor(): TProcessorFunction | null {
		return this._fields.processor
	}

	public set processor(value: TProcessorFunction | null) {
		this._fields.processor = value
	}

	public _fields: {
		processor: TProcessorFunction | null
	}

	constructor(init?: Partial<{processor?: TProcessorFunction | null}>, __goscriptValue?: boolean) {
		this._fields = {
			processor: init?.processor ?? (null! as TProcessorFunction | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tProcessorFunctionFactory {
		return new tProcessorFunctionFactory(this, true)
	}

	public __goscriptAssign(source: tProcessorFunctionFactory): void {
		const target = this._fields
		const values = source._fields
		target.processor = $.assignFieldValue(target.processor, values.processor, "thrift.TProcessorFunction")
	}

	public GetProcessorFunction(trans: __goscript_transport.TTransport | null): TProcessorFunction | null {
		const p: tProcessorFunctionFactory | $.VarRef<tProcessorFunctionFactory> | null = this;
		return $.pointerValue<tProcessorFunctionFactory>(p).processor
	}

	static __typeInfo = $.registerStructType(
		"thrift.tProcessorFunctionFactory",
		() => new tProcessorFunctionFactory(),
		() => [$.methodSignature("GetProcessorFunction", [["trans", "thrift.TTransport"]], ["thrift.TProcessorFunction"], true)],
		tProcessorFunctionFactory,
		() => [/* @__PURE__ */ $.structField("processor", "thrift.TProcessorFunction", [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export function NewTProcessorFactory(p: TProcessor | null): TProcessorFactory | null {
	return $.interfaceValue<TProcessorFactory | null>(new tProcessorFactory({processor: p}), "*thrift.tProcessorFactory", /* @__PURE__ */ $.pointerType("thrift.tProcessorFactory"))
}

export function NewTProcessorFunctionFactory(p: TProcessorFunction | null): TProcessorFunctionFactory | null {
	return $.interfaceValue<TProcessorFunctionFactory | null>(new tProcessorFunctionFactory({processor: p}), "*thrift.tProcessorFunctionFactory", /* @__PURE__ */ $.pointerType("thrift.tProcessorFunctionFactory"))
}
