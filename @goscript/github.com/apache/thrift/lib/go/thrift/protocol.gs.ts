// Generated file based on protocol.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript__type from "./type.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import * as __goscript_protocol_exception from "./protocol_exception.gs.ts"

import type * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "./type.gs.ts"
import "./protocol_exception.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TProtocol"])

export type TProtocol = {
	Flush(ctx: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
	ReadBinary(ctx: context.Context | null): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	ReadBool(ctx: context.Context | null): [boolean, $.GoError] | globalThis.Promise<[boolean, $.GoError]>
	ReadByte(ctx: context.Context | null): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	ReadDouble(ctx: context.Context | null): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	ReadFieldBegin(ctx: context.Context | null): [string, __goscript__type.TType, number, $.GoError] | globalThis.Promise<[string, __goscript__type.TType, number, $.GoError]>
	ReadFieldEnd(ctx: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
	ReadI16(ctx: context.Context | null): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	ReadI32(ctx: context.Context | null): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
	ReadI64(ctx: context.Context | null): [bigint, $.GoError] | globalThis.Promise<[bigint, $.GoError]>
	ReadListBegin(ctx: context.Context | null): [__goscript__type.TType, number, $.GoError] | globalThis.Promise<[__goscript__type.TType, number, $.GoError]>
	ReadListEnd(ctx: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
	ReadMapBegin(ctx: context.Context | null): [__goscript__type.TType, __goscript__type.TType, number, $.GoError] | globalThis.Promise<[__goscript__type.TType, __goscript__type.TType, number, $.GoError]>
	ReadMapEnd(ctx: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
	ReadMessageBegin(ctx: context.Context | null): [string, __goscript_messagetype.TMessageType, number, $.GoError] | globalThis.Promise<[string, __goscript_messagetype.TMessageType, number, $.GoError]>
	ReadMessageEnd(ctx: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
	ReadSetBegin(ctx: context.Context | null): [__goscript__type.TType, number, $.GoError] | globalThis.Promise<[__goscript__type.TType, number, $.GoError]>
	ReadSetEnd(ctx: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
	ReadString(ctx: context.Context | null): [string, $.GoError] | globalThis.Promise<[string, $.GoError]>
	ReadStructBegin(ctx: context.Context | null): [string, $.GoError] | globalThis.Promise<[string, $.GoError]>
	ReadStructEnd(ctx: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
	Skip(ctx: context.Context | null, fieldType: __goscript__type.TType): $.GoError | globalThis.Promise<$.GoError>
	Transport(): __goscript_transport.TTransport | null | globalThis.Promise<__goscript_transport.TTransport | null>
	WriteBinary(ctx: context.Context | null, value: $.Slice<number>): $.GoError | globalThis.Promise<$.GoError>
	WriteBool(ctx: context.Context | null, value: boolean): $.GoError | globalThis.Promise<$.GoError>
	WriteByte(ctx: context.Context | null, value: number): $.GoError | globalThis.Promise<$.GoError>
	WriteDouble(ctx: context.Context | null, value: number): $.GoError | globalThis.Promise<$.GoError>
	WriteFieldBegin(ctx: context.Context | null, name: string, typeId: __goscript__type.TType, id: number): $.GoError | globalThis.Promise<$.GoError>
	WriteFieldEnd(ctx: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
	WriteFieldStop(ctx: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
	WriteI16(ctx: context.Context | null, value: number): $.GoError | globalThis.Promise<$.GoError>
	WriteI32(ctx: context.Context | null, value: number): $.GoError | globalThis.Promise<$.GoError>
	WriteI64(ctx: context.Context | null, value: bigint): $.GoError | globalThis.Promise<$.GoError>
	WriteListBegin(ctx: context.Context | null, elemType: __goscript__type.TType, size: number): $.GoError | globalThis.Promise<$.GoError>
	WriteListEnd(ctx: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
	WriteMapBegin(ctx: context.Context | null, keyType: __goscript__type.TType, valueType: __goscript__type.TType, size: number): $.GoError | globalThis.Promise<$.GoError>
	WriteMapEnd(ctx: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
	WriteMessageBegin(ctx: context.Context | null, name: string, typeId: __goscript_messagetype.TMessageType, seqid: number): $.GoError | globalThis.Promise<$.GoError>
	WriteMessageEnd(ctx: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
	WriteSetBegin(ctx: context.Context | null, elemType: __goscript__type.TType, size: number): $.GoError | globalThis.Promise<$.GoError>
	WriteSetEnd(ctx: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
	WriteString(ctx: context.Context | null, value: string): $.GoError | globalThis.Promise<$.GoError>
	WriteStructBegin(ctx: context.Context | null, name: string): $.GoError | globalThis.Promise<$.GoError>
	WriteStructEnd(ctx: context.Context | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"thrift.TProtocol",
	null,
	[$.methodSignature("Flush", [["ctx", "context.Context"]], [["err", "error"]]), $.methodSignature("ReadBinary", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]]), $.methodSignature("ReadBool", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]]), $.methodSignature("ReadByte", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int8")], ["err", "error"]]), $.methodSignature("ReadDouble", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("float64")], ["err", "error"]]), $.methodSignature("ReadFieldBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["id", /* @__PURE__ */ $.basicType("int16")], ["err", "error"]]), $.methodSignature("ReadFieldEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("ReadI16", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int16")], ["err", "error"]]), $.methodSignature("ReadI32", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int32")], ["err", "error"]]), $.methodSignature("ReadI64", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]]), $.methodSignature("ReadListBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadListEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("ReadMapBegin", [["ctx", "context.Context"]], [["keyType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["valueType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadMapEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("ReadMessageBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqid", /* @__PURE__ */ $.basicType("int32")], ["err", "error"]]), $.methodSignature("ReadMessageEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("ReadSetBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]]), $.methodSignature("ReadSetEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("ReadString", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("string")], ["err", "error"]]), $.methodSignature("ReadStructBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["err", "error"]]), $.methodSignature("ReadStructEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("Skip", [["ctx", "context.Context"], ["fieldType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")]], [["err", "error"]]), $.methodSignature("Transport", [], ["thrift.TTransport"]), $.methodSignature("WriteBinary", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("WriteBool", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("bool")]], ["error"]), $.methodSignature("WriteByte", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int8")]], ["error"]), $.methodSignature("WriteDouble", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("float64")]], ["error"]), $.methodSignature("WriteFieldBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["id", /* @__PURE__ */ $.basicType("int16")]], ["error"]), $.methodSignature("WriteFieldEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteFieldStop", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteI16", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int16")]], ["error"]), $.methodSignature("WriteI32", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int32")]], ["error"]), $.methodSignature("WriteI64", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int64")]], ["error"]), $.methodSignature("WriteListBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("WriteListEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteMapBegin", [["ctx", "context.Context"], ["keyType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["valueType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("WriteMapEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteMessageBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqid", /* @__PURE__ */ $.basicType("int32")]], ["error"]), $.methodSignature("WriteMessageEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteSetBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"]), $.methodSignature("WriteSetEnd", [["ctx", "context.Context"]], ["error"]), $.methodSignature("WriteString", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("WriteStructBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("WriteStructEnd", [["ctx", "context.Context"]], ["error"])]
);

export const VERSION_MASK: number = 4294901760

export const VERSION_1: number = 2147549184

export const DEFAULT_RECURSION_DEPTH: number = 64

export async function SkipDefaultDepth(ctx: context.Context | null, prot: TProtocol | null, typeId: __goscript__type.TType): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	return Skip(ctx, prot, typeId, 64)
}

export async function Skip(ctx: context.Context | null, self: TProtocol | null, fieldType: __goscript__type.TType, maxDepth: number): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError

	if (maxDepth <= 0) {
		return (await __goscript_protocol_exception.NewTProtocolExceptionWithType(6, errors.New("Depth limit exceeded")) as $.GoError)
	}

	switch (fieldType) {
		case 2:
		{
			let __goscriptTuple0: any = await (self !== null && (self as any).__isVarRef !== true && (self as any).__goValue === undefined ? (self as Exclude<TProtocol, null>) : $.pointerValue<Exclude<TProtocol, null>>(self)).ReadBool(ctx)
			err = __goscriptTuple0[1]
			return err
			break
		}
		case 3:
		{
			let __goscriptTuple1: any = await (self !== null && (self as any).__isVarRef !== true && (self as any).__goValue === undefined ? (self as Exclude<TProtocol, null>) : $.pointerValue<Exclude<TProtocol, null>>(self)).ReadByte(ctx)
			err = __goscriptTuple1[1]
			return err
			break
		}
		case 6:
		{
			let __goscriptTuple2: any = await (self !== null && (self as any).__isVarRef !== true && (self as any).__goValue === undefined ? (self as Exclude<TProtocol, null>) : $.pointerValue<Exclude<TProtocol, null>>(self)).ReadI16(ctx)
			err = __goscriptTuple2[1]
			return err
			break
		}
		case 8:
		{
			let __goscriptTuple3: any = await (self !== null && (self as any).__isVarRef !== true && (self as any).__goValue === undefined ? (self as Exclude<TProtocol, null>) : $.pointerValue<Exclude<TProtocol, null>>(self)).ReadI32(ctx)
			err = __goscriptTuple3[1]
			return err
			break
		}
		case 10:
		{
			let __goscriptTuple4: any = await (self !== null && (self as any).__isVarRef !== true && (self as any).__goValue === undefined ? (self as Exclude<TProtocol, null>) : $.pointerValue<Exclude<TProtocol, null>>(self)).ReadI64(ctx)
			err = __goscriptTuple4[1]
			return err
			break
		}
		case 4:
		{
			let __goscriptTuple5: any = await (self !== null && (self as any).__isVarRef !== true && (self as any).__goValue === undefined ? (self as Exclude<TProtocol, null>) : $.pointerValue<Exclude<TProtocol, null>>(self)).ReadDouble(ctx)
			err = __goscriptTuple5[1]
			return err
			break
		}
		case 11:
		{
			let __goscriptTuple6: any = await (self !== null && (self as any).__isVarRef !== true && (self as any).__goValue === undefined ? (self as Exclude<TProtocol, null>) : $.pointerValue<Exclude<TProtocol, null>>(self)).ReadString(ctx)
			err = __goscriptTuple6[1]
			return err
			break
		}
		case 12:
		{
			{
				let __goscriptTuple7: any = await (self !== null && (self as any).__isVarRef !== true && (self as any).__goValue === undefined ? (self as Exclude<TProtocol, null>) : $.pointerValue<Exclude<TProtocol, null>>(self)).ReadStructBegin(ctx)
				err = __goscriptTuple7[1]
				if (err != null) {
					return err
				}
			}
			while (true) {
				let [, typeId, , __goscriptShadow0] = await (self !== null && (self as any).__isVarRef !== true && (self as any).__goValue === undefined ? (self as Exclude<TProtocol, null>) : $.pointerValue<Exclude<TProtocol, null>>(self)).ReadFieldBegin(ctx)
				if (__goscriptShadow0 != null) {
					return __goscriptShadow0
				}
				if (typeId == 0) {
					break
				}
				__goscriptShadow0 = await Skip(ctx, self, typeId, maxDepth - 1)
				if (__goscriptShadow0 != null) {
					return __goscriptShadow0
				}
				void (__goscriptAwait = (self !== null && (self as any).__isVarRef !== true && (self as any).__goValue === undefined ? (self as Exclude<TProtocol, null>) : $.pointerValue<Exclude<TProtocol, null>>(self)).ReadFieldEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			return (self !== null && (self as any).__isVarRef !== true && (self as any).__goValue === undefined ? (self as Exclude<TProtocol, null>) : $.pointerValue<Exclude<TProtocol, null>>(self)).ReadStructEnd(ctx)
			break
		}
		case 13:
		{
			let [keyType, valueType, size, __goscriptShadow1] = await (self !== null && (self as any).__isVarRef !== true && (self as any).__goValue === undefined ? (self as Exclude<TProtocol, null>) : $.pointerValue<Exclude<TProtocol, null>>(self)).ReadMapBegin(ctx)
			if (__goscriptShadow1 != null) {
				return __goscriptShadow1
			}
			for (let i = 0; i < size; i++) {
				let __goscriptShadow2 = await Skip(ctx, self, keyType, maxDepth - 1)
				if (__goscriptShadow2 != null) {
					return __goscriptShadow2
				}

				__goscriptShadow2 = await Skip(ctx, self, valueType, maxDepth - 1)
				if (__goscriptShadow2 != null) {
					return __goscriptShadow2
				}
			}
			return (self !== null && (self as any).__isVarRef !== true && (self as any).__goValue === undefined ? (self as Exclude<TProtocol, null>) : $.pointerValue<Exclude<TProtocol, null>>(self)).ReadMapEnd(ctx)
			break
		}
		case 14:
		{
			let [elemType, size, __goscriptShadow3] = await (self !== null && (self as any).__isVarRef !== true && (self as any).__goValue === undefined ? (self as Exclude<TProtocol, null>) : $.pointerValue<Exclude<TProtocol, null>>(self)).ReadSetBegin(ctx)
			if (__goscriptShadow3 != null) {
				return __goscriptShadow3
			}
			for (let i = 0; i < size; i++) {
				let __goscriptShadow4 = await Skip(ctx, self, elemType, maxDepth - 1)
				if (__goscriptShadow4 != null) {
					return __goscriptShadow4
				}
			}
			return (self !== null && (self as any).__isVarRef !== true && (self as any).__goValue === undefined ? (self as Exclude<TProtocol, null>) : $.pointerValue<Exclude<TProtocol, null>>(self)).ReadSetEnd(ctx)
			break
		}
		case 15:
		{
			let [elemType, size, __goscriptShadow5] = await (self !== null && (self as any).__isVarRef !== true && (self as any).__goValue === undefined ? (self as Exclude<TProtocol, null>) : $.pointerValue<Exclude<TProtocol, null>>(self)).ReadListBegin(ctx)
			if (__goscriptShadow5 != null) {
				return __goscriptShadow5
			}
			for (let i = 0; i < size; i++) {
				let __goscriptShadow6 = await Skip(ctx, self, elemType, maxDepth - 1)
				if (__goscriptShadow6 != null) {
					return __goscriptShadow6
				}
			}
			return (self !== null && (self as any).__isVarRef !== true && (self as any).__goValue === undefined ? (self as Exclude<TProtocol, null>) : $.pointerValue<Exclude<TProtocol, null>>(self)).ReadListEnd(ctx)
			break
		}
		default:
		{
			return (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, fmt.Errorf("Unknown data type %d", $.namedValueInterfaceValue<any>(fieldType, "thrift.TType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))) as $.GoError)
			break
		}
	}
	return null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript__type.TType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "thrift.TType"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
