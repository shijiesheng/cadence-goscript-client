// Generated file based on multiplexed_protocol.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript__type from "./type.gs.ts"

import * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_messagetype from "./messagetype.gs.ts"

import * as __goscript_processor_factory from "./processor_factory.gs.ts"

import * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_protocol_exception from "./protocol_exception.gs.ts"

import type * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "./exception.gs.ts"
import "./messagetype.gs.ts"
import "./processor_factory.gs.ts"
import "./protocol.gs.ts"
import "./protocol_exception.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TMultiplexedProtocol", "thrift.TMultiplexedProcessor", "thrift.storedMessageProtocol"])

export class TMultiplexedProtocol {
	public get TProtocol(): __goscript_protocol.TProtocol | null {
		return this._fields.TProtocol
	}

	public set TProtocol(value: __goscript_protocol.TProtocol | null) {
		this._fields.TProtocol = value
	}

	public get serviceName(): string {
		return this._fields.serviceName
	}

	public set serviceName(value: string) {
		this._fields.serviceName = value
	}

	public _fields: {
		TProtocol: __goscript_protocol.TProtocol | null
		serviceName: string
	}

	constructor(init?: Partial<{TProtocol?: __goscript_protocol.TProtocol | null, serviceName?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			TProtocol: init?.TProtocol ?? (null! as __goscript_protocol.TProtocol | null),
			serviceName: init?.serviceName ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TMultiplexedProtocol {
		return new TMultiplexedProtocol(this, true)
	}

	public __goscriptAssign(source: TMultiplexedProtocol): void {
		const target = this._fields
		const values = source._fields
		target.TProtocol = $.assignFieldValue(target.TProtocol, values.TProtocol, "thrift.TProtocol")
		target.serviceName = values.serviceName
	}

	public async WriteMessageBegin(ctx: context.Context | null, name: string, typeId: __goscript_messagetype.TMessageType, seqid: number): globalThis.Promise<$.GoError> {
		const t: TMultiplexedProtocol | $.VarRef<TMultiplexedProtocol> | null = this;
		const t$: TMultiplexedProtocol = t == null ? $.pointerTarget<TMultiplexedProtocol>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TMultiplexedProtocol>(t)
		if ((typeId == 1) || (typeId == 4)) {
			return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((t$ as TMultiplexedProtocol).TProtocol).WriteMessageBegin(ctx, $.concatString(($.concatString((t$ as TMultiplexedProtocol).serviceName, ":")), name), typeId, seqid)
		} else {
			return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((t$ as TMultiplexedProtocol).TProtocol).WriteMessageBegin(ctx, name, typeId, seqid)
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async Flush(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).Flush(ctx)
	}

	public async ReadBinary(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadBinary(ctx)
	}

	public async ReadBool(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadBool(ctx)
	}

	public async ReadByte(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadByte(ctx)
	}

	public async ReadDouble(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadDouble(ctx)
	}

	public async ReadFieldBegin(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadFieldBegin(ctx)
	}

	public async ReadFieldEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadFieldEnd(ctx)
	}

	public async ReadI16(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadI16(ctx)
	}

	public async ReadI32(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadI32(ctx)
	}

	public async ReadI64(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadI64(ctx)
	}

	public async ReadListBegin(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadListBegin(ctx)
	}

	public async ReadListEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadListEnd(ctx)
	}

	public async ReadMapBegin(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadMapBegin(ctx)
	}

	public async ReadMapEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadMapEnd(ctx)
	}

	public async ReadMessageBegin(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadMessageBegin(ctx)
	}

	public async ReadMessageEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadMessageEnd(ctx)
	}

	public async ReadSetBegin(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadSetBegin(ctx)
	}

	public async ReadSetEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadSetEnd(ctx)
	}

	public async ReadString(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadString(ctx)
	}

	public async ReadStructBegin(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadStructBegin(ctx)
	}

	public async ReadStructEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadStructEnd(ctx)
	}

	public async Skip(ctx: any, fieldType: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).Skip(ctx, fieldType)
	}

	public async Transport(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).Transport()
	}

	public async WriteBinary(ctx: any, value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteBinary(ctx, value)
	}

	public async WriteBool(ctx: any, value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteBool(ctx, value)
	}

	public async WriteByte(ctx: any, value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteByte(ctx, value)
	}

	public async WriteDouble(ctx: any, value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteDouble(ctx, value)
	}

	public async WriteFieldBegin(ctx: any, name: any, typeId: any, id: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteFieldBegin(ctx, name, typeId, id)
	}

	public async WriteFieldEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteFieldEnd(ctx)
	}

	public async WriteFieldStop(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteFieldStop(ctx)
	}

	public async WriteI16(ctx: any, value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteI16(ctx, value)
	}

	public async WriteI32(ctx: any, value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteI32(ctx, value)
	}

	public async WriteI64(ctx: any, value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteI64(ctx, value)
	}

	public async WriteListBegin(ctx: any, elemType: any, size: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteListBegin(ctx, elemType, size)
	}

	public async WriteListEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteListEnd(ctx)
	}

	public async WriteMapBegin(ctx: any, keyType: any, valueType: any, size: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteMapBegin(ctx, keyType, valueType, size)
	}

	public async WriteMapEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteMapEnd(ctx)
	}

	public async WriteMessageEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteMessageEnd(ctx)
	}

	public async WriteSetBegin(ctx: any, elemType: any, size: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteSetBegin(ctx, elemType, size)
	}

	public async WriteSetEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteSetEnd(ctx)
	}

	public async WriteString(ctx: any, value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteString(ctx, value)
	}

	public async WriteStructBegin(ctx: any, name: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteStructBegin(ctx, name)
	}

	public async WriteStructEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteStructEnd(ctx)
	}

	static __typeInfo = $.registerStructType(
		"thrift.TMultiplexedProtocol",
		() => new TMultiplexedProtocol(),
		() => [$.methodSignature("WriteMessageBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqid", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("Flush", [["ctx", "context.Context"]], [["err", "error"]]), $.methodSignature("ReadBinary", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]]), $.methodSignature("ReadBool", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]]), $.methodSignature("ReadByte", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int8")], ["err", "error"]]), $.methodSignature("ReadDouble", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("float64")], ["err", "error"]]), $.methodSignature("ReadFieldBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["id", /* @__PURE__ */ $.basicType("int16")], ["err", "error"]]), $.methodSignature("ReadFieldEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("ReadI16", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int16")], ["err", "error"]]), $.methodSignature("ReadI32", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int32")], ["err", "error"]]), $.methodSignature("ReadI64", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]]), $.methodSignature("ReadListBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadListEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("ReadMapBegin", [["ctx", "context.Context"]], [["keyType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["valueType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadMapEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("ReadMessageBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqid", /* @__PURE__ */ $.basicType("int32")], ["err", "error"]]), $.methodSignature("ReadMessageEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("ReadSetBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadSetEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("ReadString", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("string")], ["err", "error"]]), $.methodSignature("ReadStructBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["err", "error"]]), $.methodSignature("ReadStructEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("Skip", [["ctx", "context.Context"], ["fieldType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")]], [["err", "error"]]), $.methodSignature("Transport", [], ["thrift.TTransport"]), $.methodSignature("WriteBinary", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("WriteBool", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("bool")]], ["error"]), $.methodSignature("WriteByte", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int8")]], ["error"]), $.methodSignature("WriteDouble", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("float64")]], ["error"]), $.methodSignature("WriteFieldBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["id", /* @__PURE__ */ $.basicType("int16")]], ["error"]), $.methodSignature("WriteFieldEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteFieldStop", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteI16", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int16")]], ["error"]), $.methodSignature("WriteI32", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int32")]], ["error"]), $.methodSignature("WriteI64", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int64")]], ["error"]), $.methodSignature("WriteListBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("WriteListEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteMapBegin", [["ctx", "context.Context"], ["keyType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["valueType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("WriteMapEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteMessageEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteSetBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("WriteSetEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteString", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("WriteStructBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("WriteStructEnd", [["ctx", "context.Context"]], ["error"])],
		TMultiplexedProtocol,
		() => [/* @__PURE__ */ $.structField("TProtocol", "thrift.TProtocol", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("serviceName", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export class TMultiplexedProcessor {
	public get serviceProcessorMap(): globalThis.Map<string, __goscript_processor_factory.TProcessor | null> | null {
		return this._fields.serviceProcessorMap
	}

	public set serviceProcessorMap(value: globalThis.Map<string, __goscript_processor_factory.TProcessor | null> | null) {
		this._fields.serviceProcessorMap = value
	}

	public get DefaultProcessor(): __goscript_processor_factory.TProcessor | null {
		return this._fields.DefaultProcessor
	}

	public set DefaultProcessor(value: __goscript_processor_factory.TProcessor | null) {
		this._fields.DefaultProcessor = value
	}

	public _fields: {
		serviceProcessorMap: globalThis.Map<string, __goscript_processor_factory.TProcessor | null> | null
		DefaultProcessor: __goscript_processor_factory.TProcessor | null
	}

	constructor(init?: Partial<{serviceProcessorMap?: globalThis.Map<string, __goscript_processor_factory.TProcessor | null> | null, DefaultProcessor?: __goscript_processor_factory.TProcessor | null}>, __goscriptValue?: boolean) {
		this._fields = {
			serviceProcessorMap: init?.serviceProcessorMap ?? (null! as globalThis.Map<string, __goscript_processor_factory.TProcessor | null> | null),
			DefaultProcessor: init?.DefaultProcessor ?? (null! as __goscript_processor_factory.TProcessor | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TMultiplexedProcessor {
		return new TMultiplexedProcessor(this, true)
	}

	public __goscriptAssign(source: TMultiplexedProcessor): void {
		const target = this._fields
		const values = source._fields
		target.serviceProcessorMap = values.serviceProcessorMap
		target.DefaultProcessor = $.assignFieldValue(target.DefaultProcessor, values.DefaultProcessor, "thrift.TProcessor")
	}

	public async AddToProcessorMap(name: string, processorFunc: __goscript_processor_factory.TProcessorFunction | null): globalThis.Promise<void> {
		const t: TMultiplexedProcessor | $.VarRef<TMultiplexedProcessor> | null = this;
		const t$: TMultiplexedProcessor = t == null ? $.pointerTarget<TMultiplexedProcessor>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TMultiplexedProcessor>(t)
		let components: $.Slice<string> = strings.SplitN(name, ":", 2)
		if ($.sliceLen(components) != 2) {
			if (((t$ as TMultiplexedProcessor).DefaultProcessor != null) && ($.sliceLen(components) == 1)) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_processor_factory.TProcessor, null>>((t$ as TMultiplexedProcessor).DefaultProcessor).AddToProcessorMap($.arrayIndex(components!, 0), processorFunc), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return
		}
		let processorName = $.arrayIndex(components!, 0)
		let funcName = $.arrayIndex(components!, 1)
		{
			let [processor, ok] = $.mapGet<string, __goscript_processor_factory.TProcessor | null, __goscript_processor_factory.TProcessor | null>((t$ as TMultiplexedProcessor).serviceProcessorMap, processorName, null)
			if (ok) {
				void (__goscriptAwait = (processor !== null && (processor as any).__isVarRef !== true && (processor as any).__goValue === undefined ? (processor as Exclude<__goscript_processor_factory.TProcessor, null>) : $.pointerValue<Exclude<__goscript_processor_factory.TProcessor, null>>(processor)).AddToProcessorMap(funcName, processorFunc), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
	}

	public async Process(ctx: context.Context | null, _in: __goscript_protocol.TProtocol | null, out: __goscript_protocol.TProtocol | null): globalThis.Promise<[boolean, __goscript_exception.TException | null]> {
		const t: TMultiplexedProcessor | $.VarRef<TMultiplexedProcessor> | null = this;
		const t$: TMultiplexedProcessor = t == null ? $.pointerTarget<TMultiplexedProcessor>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TMultiplexedProcessor>(t)
		let [name, typeId, seqid, err] = await (_in !== null && (_in as any).__isVarRef !== true && (_in as any).__goValue === undefined ? (_in as Exclude<__goscript_protocol.TProtocol, null>) : $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>(_in)).ReadMessageBegin(ctx)
		if (err != null) {
			return [false, (await __goscript_protocol_exception.NewTProtocolException(err) as __goscript_exception.TException | null)]
		}
		if ((typeId != 1) && (typeId != 4)) {
			return [false, (await __goscript_protocol_exception.NewTProtocolException(fmt.Errorf("Unexpected message type %v", $.namedValueInterfaceValue<any>(typeId, "thrift.TMessageType", {}, /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")))) as __goscript_exception.TException | null)]
		}
		//extract the service name
		let v: $.Slice<string> = strings.SplitN(name, ":", 2)
		if ($.sliceLen(v) != 2) {
			if ((t$ as TMultiplexedProcessor).DefaultProcessor != null) {
				let smb: storedMessageProtocol | $.VarRef<storedMessageProtocol> | null = NewStoredMessageProtocol(_in, name, typeId, seqid)
				return $.pointerValue<Exclude<__goscript_processor_factory.TProcessor, null>>((t$ as TMultiplexedProcessor).DefaultProcessor).Process(ctx, $.interfaceValue<__goscript_protocol.TProtocol | null>(smb, "*thrift.storedMessageProtocol", /* @__PURE__ */ $.pointerType("thrift.storedMessageProtocol")), out)
			}
			return [false, (await __goscript_protocol_exception.NewTProtocolException(fmt.Errorf("Service name not found in message name: %s.  Did you forget to use a TMultiplexProtocol in your client?", name)) as __goscript_exception.TException | null)]
		}
		let [actualProcessor, ok] = $.mapGet<string, __goscript_processor_factory.TProcessor | null, __goscript_processor_factory.TProcessor | null>((t$ as TMultiplexedProcessor).serviceProcessorMap, $.arrayIndex(v!, 0), null)
		if (!ok) {
			return [false, (await __goscript_protocol_exception.NewTProtocolException(fmt.Errorf("Service name not found: %s.  Did you forget to call registerProcessor()?", $.arrayIndex(v!, 0))) as __goscript_exception.TException | null)]
		}
		let smb: storedMessageProtocol | $.VarRef<storedMessageProtocol> | null = NewStoredMessageProtocol(_in, $.arrayIndex(v!, 1), typeId, seqid)
		return (actualProcessor !== null && (actualProcessor as any).__isVarRef !== true && (actualProcessor as any).__goValue === undefined ? (actualProcessor as Exclude<__goscript_processor_factory.TProcessor, null>) : $.pointerValue<Exclude<__goscript_processor_factory.TProcessor, null>>(actualProcessor)).Process(ctx, $.interfaceValue<__goscript_protocol.TProtocol | null>(smb, "*thrift.storedMessageProtocol", /* @__PURE__ */ $.pointerType("thrift.storedMessageProtocol")), out)
	}

	public async ProcessorMap(): globalThis.Promise<globalThis.Map<string, __goscript_processor_factory.TProcessorFunction | null> | null> {
		const t: TMultiplexedProcessor | $.VarRef<TMultiplexedProcessor> | null = this;
		const t$: TMultiplexedProcessor = t == null ? $.pointerTarget<TMultiplexedProcessor>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TMultiplexedProcessor>(t)
		let processorFuncMap: globalThis.Map<string, __goscript_processor_factory.TProcessorFunction | null> | null = $.makeMap<string, __goscript_processor_factory.TProcessorFunction | null>()
		for (const [name, processor] of (t$ as TMultiplexedProcessor).serviceProcessorMap?.entries() ?? []) {
			for (const [method, processorFunc] of ((__goscriptAwait = (processor !== null && (processor as any).__isVarRef !== true && (processor as any).__goValue === undefined ? (processor as Exclude<__goscript_processor_factory.TProcessor, null>) : $.pointerValue<Exclude<__goscript_processor_factory.TProcessor, null>>(processor)).ProcessorMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<string, __goscript_processor_factory.TProcessorFunction | null> | null)?.entries() ?? []) {
				let processorFuncName = $.concatString(($.concatString(name, ":")), method)
				$.mapSet(processorFuncMap, processorFuncName, processorFunc)
			}
		}
		if ((t$ as TMultiplexedProcessor).DefaultProcessor != null) {
			for (let [method, processorFunc] of ((__goscriptAwait = $.pointerValue<Exclude<__goscript_processor_factory.TProcessor, null>>((t$ as TMultiplexedProcessor).DefaultProcessor).ProcessorMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as globalThis.Map<string, __goscript_processor_factory.TProcessorFunction | null> | null)?.entries() ?? []) {
				$.mapSet(processorFuncMap, method, processorFunc)
			}
		}
		return processorFuncMap
	}

	public RegisterDefault(processor: __goscript_processor_factory.TProcessor | null): void {
		let t: TMultiplexedProcessor | $.VarRef<TMultiplexedProcessor> | null = this;
		$.pointerValue<TMultiplexedProcessor>(t).DefaultProcessor = processor
	}

	public RegisterProcessor(name: string, processor: __goscript_processor_factory.TProcessor | null): void {
		let t: TMultiplexedProcessor | $.VarRef<TMultiplexedProcessor> | null = this;
		const t$: TMultiplexedProcessor = t == null ? $.pointerTarget<TMultiplexedProcessor>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TMultiplexedProcessor>(t)
		if ((t$ as TMultiplexedProcessor).serviceProcessorMap == null) {
			;(t$ as TMultiplexedProcessor).serviceProcessorMap = $.makeMap<string, __goscript_processor_factory.TProcessor | null>()
		}
		$.mapSet((t$ as TMultiplexedProcessor).serviceProcessorMap, name, processor)
	}

	static __typeInfo = $.registerStructType(
		"thrift.TMultiplexedProcessor",
		() => new TMultiplexedProcessor(),
		() => [$.methodSignature("AddToProcessorMap", [["name", /* @__PURE__ */ $.basicType("string")], ["processorFunc", "thrift.TProcessorFunction"]], [], true), $.methodSignature("Process", [["ctx", "context.Context"], ["in", "thrift.TProtocol"], ["out", "thrift.TProtocol"]], [/* @__PURE__ */ $.basicType("bool"), "thrift.TException"], true), $.methodSignature("ProcessorMap", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "thrift.TProcessorFunction")], true), $.methodSignature("RegisterDefault", [["processor", "thrift.TProcessor"]], [], true), $.methodSignature("RegisterProcessor", [["name", /* @__PURE__ */ $.basicType("string")], ["processor", "thrift.TProcessor"]], [], true)],
		TMultiplexedProcessor,
		() => [/* @__PURE__ */ $.structField("serviceProcessorMap", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "thrift.TProcessor"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("DefaultProcessor", "thrift.TProcessor", [1], 8, true)]
	)
}

export class storedMessageProtocol {
	public get TProtocol(): __goscript_protocol.TProtocol | null {
		return this._fields.TProtocol
	}

	public set TProtocol(value: __goscript_protocol.TProtocol | null) {
		this._fields.TProtocol = value
	}

	public get name(): string {
		return this._fields.name
	}

	public set name(value: string) {
		this._fields.name = value
	}

	public get typeId(): __goscript_messagetype.TMessageType {
		return this._fields.typeId
	}

	public set typeId(value: __goscript_messagetype.TMessageType) {
		this._fields.typeId = value
	}

	public get seqid(): number {
		return this._fields.seqid
	}

	public set seqid(value: number) {
		this._fields.seqid = value
	}

	public _fields: {
		TProtocol: __goscript_protocol.TProtocol | null
		name: string
		typeId: __goscript_messagetype.TMessageType
		seqid: number
	}

	constructor(init?: Partial<{TProtocol?: __goscript_protocol.TProtocol | null, name?: string, typeId?: __goscript_messagetype.TMessageType, seqid?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			TProtocol: init?.TProtocol ?? (null! as __goscript_protocol.TProtocol | null),
			name: init?.name ?? ("" as string),
			typeId: init?.typeId ?? (0 as __goscript_messagetype.TMessageType),
			seqid: init?.seqid ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): storedMessageProtocol {
		return new storedMessageProtocol(this, true)
	}

	public __goscriptAssign(source: storedMessageProtocol): void {
		const target = this._fields
		const values = source._fields
		target.TProtocol = $.assignFieldValue(target.TProtocol, values.TProtocol, "thrift.TProtocol")
		target.name = values.name
		target.typeId = values.typeId
		target.seqid = values.seqid
	}

	public ReadMessageBegin(ctx: context.Context | null): [string, __goscript_messagetype.TMessageType, number, $.GoError] {
		const s: storedMessageProtocol | $.VarRef<storedMessageProtocol> | null = this;
		let name: string = ""
		let typeId: __goscript_messagetype.TMessageType = 0
		let seqid: number = 0
		let err: $.GoError = null! as $.GoError
		const s$: storedMessageProtocol = s == null ? $.pointerTarget<storedMessageProtocol>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<storedMessageProtocol>(s)
		return [(s$ as storedMessageProtocol).name, (s$ as storedMessageProtocol).typeId, (s$ as storedMessageProtocol).seqid, null]
	}

	public async Flush(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).Flush(ctx)
	}

	public async ReadBinary(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadBinary(ctx)
	}

	public async ReadBool(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadBool(ctx)
	}

	public async ReadByte(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadByte(ctx)
	}

	public async ReadDouble(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadDouble(ctx)
	}

	public async ReadFieldBegin(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadFieldBegin(ctx)
	}

	public async ReadFieldEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadFieldEnd(ctx)
	}

	public async ReadI16(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadI16(ctx)
	}

	public async ReadI32(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadI32(ctx)
	}

	public async ReadI64(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadI64(ctx)
	}

	public async ReadListBegin(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadListBegin(ctx)
	}

	public async ReadListEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadListEnd(ctx)
	}

	public async ReadMapBegin(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadMapBegin(ctx)
	}

	public async ReadMapEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadMapEnd(ctx)
	}

	public async ReadMessageEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadMessageEnd(ctx)
	}

	public async ReadSetBegin(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadSetBegin(ctx)
	}

	public async ReadSetEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadSetEnd(ctx)
	}

	public async ReadString(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadString(ctx)
	}

	public async ReadStructBegin(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadStructBegin(ctx)
	}

	public async ReadStructEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).ReadStructEnd(ctx)
	}

	public async Skip(ctx: any, fieldType: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).Skip(ctx, fieldType)
	}

	public async Transport(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).Transport()
	}

	public async WriteBinary(ctx: any, value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteBinary(ctx, value)
	}

	public async WriteBool(ctx: any, value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteBool(ctx, value)
	}

	public async WriteByte(ctx: any, value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteByte(ctx, value)
	}

	public async WriteDouble(ctx: any, value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteDouble(ctx, value)
	}

	public async WriteFieldBegin(ctx: any, name: any, typeId: any, id: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteFieldBegin(ctx, name, typeId, id)
	}

	public async WriteFieldEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteFieldEnd(ctx)
	}

	public async WriteFieldStop(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteFieldStop(ctx)
	}

	public async WriteI16(ctx: any, value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteI16(ctx, value)
	}

	public async WriteI32(ctx: any, value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteI32(ctx, value)
	}

	public async WriteI64(ctx: any, value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteI64(ctx, value)
	}

	public async WriteListBegin(ctx: any, elemType: any, size: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteListBegin(ctx, elemType, size)
	}

	public async WriteListEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteListEnd(ctx)
	}

	public async WriteMapBegin(ctx: any, keyType: any, valueType: any, size: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteMapBegin(ctx, keyType, valueType, size)
	}

	public async WriteMapEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteMapEnd(ctx)
	}

	public async WriteMessageBegin(ctx: any, name: any, typeId: any, seqid: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteMessageBegin(ctx, name, typeId, seqid)
	}

	public async WriteMessageEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteMessageEnd(ctx)
	}

	public async WriteSetBegin(ctx: any, elemType: any, size: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteSetBegin(ctx, elemType, size)
	}

	public async WriteSetEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteSetEnd(ctx)
	}

	public async WriteString(ctx: any, value: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteString(ctx, value)
	}

	public async WriteStructBegin(ctx: any, name: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteStructBegin(ctx, name)
	}

	public async WriteStructEnd(ctx: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<__goscript_protocol.TProtocol | null, null>>(this.TProtocol).WriteStructEnd(ctx)
	}

	static __typeInfo = $.registerStructType(
		"thrift.storedMessageProtocol",
		() => new storedMessageProtocol(),
		() => [$.methodSignature("ReadMessageBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqid", /* @__PURE__ */ $.basicType("int32")], ["err", "error"]], true), $.methodSignature("Flush", [["ctx", "context.Context"]], [["err", "error"]]), $.methodSignature("ReadBinary", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]]), $.methodSignature("ReadBool", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]]), $.methodSignature("ReadByte", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int8")], ["err", "error"]]), $.methodSignature("ReadDouble", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("float64")], ["err", "error"]]), $.methodSignature("ReadFieldBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["id", /* @__PURE__ */ $.basicType("int16")], ["err", "error"]]), $.methodSignature("ReadFieldEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("ReadI16", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int16")], ["err", "error"]]), $.methodSignature("ReadI32", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int32")], ["err", "error"]]), $.methodSignature("ReadI64", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]]), $.methodSignature("ReadListBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadListEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("ReadMapBegin", [["ctx", "context.Context"]], [["keyType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["valueType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadMapEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("ReadMessageEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("ReadSetBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadSetEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("ReadString", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("string")], ["err", "error"]]), $.methodSignature("ReadStructBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["err", "error"]]), $.methodSignature("ReadStructEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("Skip", [["ctx", "context.Context"], ["fieldType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")]], [["err", "error"]]), $.methodSignature("Transport", [], ["thrift.TTransport"]), $.methodSignature("WriteBinary", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("WriteBool", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("bool")]], ["error"]), $.methodSignature("WriteByte", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int8")]], ["error"]), $.methodSignature("WriteDouble", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("float64")]], ["error"]), $.methodSignature("WriteFieldBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["id", /* @__PURE__ */ $.basicType("int16")]], ["error"]), $.methodSignature("WriteFieldEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteFieldStop", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteI16", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int16")]], ["error"]), $.methodSignature("WriteI32", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int32")]], ["error"]), $.methodSignature("WriteI64", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int64")]], ["error"]), $.methodSignature("WriteListBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("WriteListEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteMapBegin", [["ctx", "context.Context"], ["keyType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["valueType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("WriteMapEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteMessageBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqid", /* @__PURE__ */ $.basicType("int32")]], ["error"]), $.methodSignature("WriteMessageEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteSetBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("WriteSetEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteString", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("WriteStructBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("WriteStructEnd", [["ctx", "context.Context"]], ["error"])],
		storedMessageProtocol,
		() => [/* @__PURE__ */ $.structField("TProtocol", "thrift.TProtocol", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("name", /* @__PURE__ */ $.basicType("string"), [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("typeId", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType"), [2], 32, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("seqid", /* @__PURE__ */ $.basicType("int32"), [3], 36, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export const MULTIPLEXED_SEPARATOR: string = ":"

export function NewTMultiplexedProtocol(protocol: __goscript_protocol.TProtocol | null, serviceName: string): TMultiplexedProtocol | $.VarRef<TMultiplexedProtocol> | null {
	return new TMultiplexedProtocol({TProtocol: protocol, serviceName: serviceName})
}

export function NewTMultiplexedProcessor(): TMultiplexedProcessor | $.VarRef<TMultiplexedProcessor> | null {
	return new TMultiplexedProcessor({serviceProcessorMap: $.makeMap<string, __goscript_processor_factory.TProcessor | null>()})
}

export function NewStoredMessageProtocol(protocol: __goscript_protocol.TProtocol | null, name: string, typeId: __goscript_messagetype.TMessageType, seqid: number): storedMessageProtocol | $.VarRef<storedMessageProtocol> | null {
	return new storedMessageProtocol({TProtocol: protocol, name: name, typeId: typeId, seqid: seqid})
}

var __goscriptAwait: any
