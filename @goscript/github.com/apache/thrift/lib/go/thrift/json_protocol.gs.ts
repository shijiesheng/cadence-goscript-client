// Generated file based on json_protocol.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as base64 from "@goscript/encoding/base64/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript__type from "./type.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import * as __goscript_messagetype from "./messagetype.gs.ts"

import type * as __goscript_numeric from "./numeric.gs.ts"

import * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_protocol_exception from "./protocol_exception.gs.ts"

import * as __goscript_simple_json_protocol from "./simple_json_protocol.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "@goscript/encoding/base64/index.js"
import "@goscript/fmt/index.js"
import "@goscript/bufio/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/io/index.js"
import "@goscript/time/index.js"
import "./type.gs.ts"
import "./configuration.gs.ts"
import "./header_transport.gs.ts"
import "./messagetype.gs.ts"
import "./protocol.gs.ts"
import "./protocol_exception.gs.ts"
import "./simple_json_protocol.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TJSONProtocol", "thrift.TJSONProtocolFactory"])

export class TJSONProtocol {
	public get TSimpleJSONProtocol(): __goscript_simple_json_protocol.TSimpleJSONProtocol | $.VarRef<__goscript_simple_json_protocol.TSimpleJSONProtocol> | null {
		return this._fields.TSimpleJSONProtocol
	}

	public set TSimpleJSONProtocol(value: __goscript_simple_json_protocol.TSimpleJSONProtocol | $.VarRef<__goscript_simple_json_protocol.TSimpleJSONProtocol> | null) {
		this._fields.TSimpleJSONProtocol = value
	}

	public _fields: {
		TSimpleJSONProtocol: __goscript_simple_json_protocol.TSimpleJSONProtocol | $.VarRef<__goscript_simple_json_protocol.TSimpleJSONProtocol> | null
	}

	constructor(init?: Partial<{TSimpleJSONProtocol?: __goscript_simple_json_protocol.TSimpleJSONProtocol | $.VarRef<__goscript_simple_json_protocol.TSimpleJSONProtocol> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			TSimpleJSONProtocol: init?.TSimpleJSONProtocol ?? (null! as __goscript_simple_json_protocol.TSimpleJSONProtocol | $.VarRef<__goscript_simple_json_protocol.TSimpleJSONProtocol> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TJSONProtocol {
		return new TJSONProtocol(this, true)
	}

	public __goscriptAssign(source: TJSONProtocol): void {
		const target = this._fields
		const values = source._fields
		target.TSimpleJSONProtocol = values.TSimpleJSONProtocol
	}

	public async Flush(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		let err: $.GoError = null! as $.GoError
		const p$: TJSONProtocol = p == null ? $.pointerTarget<TJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TJSONProtocol>(p)
		err = await bufio.Writer.prototype.Flush.call($.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).writer)
		if (err == null) {
			err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_transport.TTransport, null>>($.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).trans).Flush(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
	}

	public async OutputElemListBegin(elemType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		{
			let e = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputListBegin()
			if (e != null) {
				return e
			}
		}
		let [s, e1] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).TypeIdToString(elemType) : TJSONProtocol.prototype.TypeIdToString.call(p, elemType))
		if (e1 != null) {
			return e1
		}
		{
			let e = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputString(s)
			if (e != null) {
				return e
			}
		}
		{
			let e = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputI64($.int64(size))
			if (e != null) {
				return e
			}
		}
		return null
	}

	public async ParseElemListBegin(): globalThis.Promise<[__goscript__type.TType, number, $.GoError]> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		let elemType: __goscript__type.TType = 0
		let size: number = 0
		let e: $.GoError = null! as $.GoError
		{
			let [isNull, __goscriptShadow0] = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).ParseListBegin()
			if (isNull || (__goscriptShadow0 != null)) {
				return [1, 0, __goscriptShadow0]
			}
		}
		// We don't really use the ctx in ReadString implementation,
		// so this is safe for now.
		// We might want to add context to ParseElemListBegin if we start to use
		// ctx in ReadString implementation in the future.
		let [sElemType, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).ReadString(context.Background()) : TJSONProtocol.prototype.ReadString.call(p, context.Background()))
		if (err != null) {
			return [1, size, err]
		}
		let __goscriptTuple0: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).StringToTypeId(sElemType) : TJSONProtocol.prototype.StringToTypeId.call(p, sElemType))
		elemType = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			return [elemType, size, err]
		}
		let __goscriptTuple1: any = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).ParseI64()
		let nSize = __goscriptTuple1[0]
		err = __goscriptTuple1[2]
		if (err != null) {
			return [elemType, 0, err]
		}
		err = await __goscript_configuration.checkSizeForProtocol($.int(nSize, 32), $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).cfg)
		if (err != null) {
			return [elemType, 0, err]
		}
		size = $.int(nSize)
		return [elemType, size, null]
	}

	public async ReadBinary(ctx: context.Context | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		const p$: TJSONProtocol = p == null ? $.pointerTarget<TJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TJSONProtocol>(p)
		let v: $.Slice<number> = null! as $.Slice<number>
		{
			let err = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).ParsePreValue()
			if (err != null) {
				return [null, err]
			}
		}
		let __goscriptTuple2: any = await bufio.Reader.prototype.Peek.call($.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).reader, 1)
		let f: $.Slice<number> = __goscriptTuple2[0]
		if (($.sliceLen(f) > 0) && ($.arrayIndex(f!, 0) == __goscript_simple_json_protocol.JSON_QUOTE)) {
			await bufio.Reader.prototype.ReadByte.call($.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).reader)
			let __goscriptTuple3: any = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).ParseBase64EncodedBody()
			let value: $.Slice<number> = __goscriptTuple3[0]
			let err = __goscriptTuple3[1]
			v = value
			if (err != null) {
				return [v, err]
			}
		} else {
			if (($.sliceLen(f) > 0) && ($.arrayIndex(f!, 0) == $.arrayIndex(__goscript_simple_json_protocol.JSON_NULL!, 0))) {
				let b: $.Slice<number> = $.makeSlice<number>($.sliceLen(__goscript_simple_json_protocol.JSON_NULL), undefined, "byte")
				let [, err] = await bufio.Reader.prototype.Read.call($.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).reader, b)
				if (err != null) {
					return [v, (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)]
				}
				if (!$.stringEqual($.bytesToString(b), $.bytesToString(__goscript_simple_json_protocol.JSON_NULL))) {
					let e = fmt.Errorf("Expected a JSON string, found unquoted data started with %s", $.bytesToString(b))
					return [v, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
				}
			} else {
				let e = fmt.Errorf("Expected a JSON string, found unquoted data started with %s", $.bytesToString(f))
				return [v, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
			}
		}

		return [v, await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).ParsePostValue()]
	}

	public async ReadBool(ctx: context.Context | null): globalThis.Promise<[boolean, $.GoError]> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		let [value, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).ReadI32(ctx) : TJSONProtocol.prototype.ReadI32.call(p, ctx))
		return [(value != 0), err]
	}

	public async ReadByte(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		let [v, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).ReadI64(ctx) : TJSONProtocol.prototype.ReadI64.call(p, ctx))
		return [$.int(v, 8), err]
	}

	public async ReadDouble(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		let [v, , err] = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).ParseF64()
		return [v, err]
	}

	public async ReadFieldBegin(ctx: context.Context | null): globalThis.Promise<[string, __goscript__type.TType, number, $.GoError]> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		let __goscriptTuple4: any = await bufio.Reader.prototype.Peek.call($.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).reader, 1)
		let b: $.Slice<number> = __goscriptTuple4[0]
		if ((($.sliceLen(b) < 1) || ($.arrayIndex(b!, 0) == $.arrayIndex(__goscript_simple_json_protocol.JSON_RBRACE!, 0))) || ($.arrayIndex(b!, 0) == $.arrayIndex(__goscript_simple_json_protocol.JSON_RBRACKET!, 0))) {
			return ["", 0, -1, null]
		}
		let [fieldId, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).ReadI16(ctx) : TJSONProtocol.prototype.ReadI16.call(p, ctx))
		if (err != null) {
			return ["", 0, fieldId, err]
		}
		{
			let __goscriptTuple5: any = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).ParseObjectStart()
			err = __goscriptTuple5[1]
			if (err != null) {
				return ["", 0, fieldId, err]
			}
		}
		let __goscriptTuple6: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).ReadString(ctx) : TJSONProtocol.prototype.ReadString.call(p, ctx))
		let sType = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return ["", 0, fieldId, err]
		}
		let __goscriptTuple7: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).StringToTypeId(sType) : TJSONProtocol.prototype.StringToTypeId.call(p, sType))
		let fType = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		return ["", fType, fieldId, err]
	}

	public async ReadFieldEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).ParseObjectEnd()
	}

	public async ReadI16(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		let [v, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).ReadI64(ctx) : TJSONProtocol.prototype.ReadI64.call(p, ctx))
		return [$.int(v, 16), err]
	}

	public async ReadI32(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		let [v, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).ReadI64(ctx) : TJSONProtocol.prototype.ReadI64.call(p, ctx))
		return [$.int(v, 32), err]
	}

	public async ReadI64(ctx: context.Context | null): globalThis.Promise<[bigint, $.GoError]> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		let [v, , err] = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).ParseI64()
		return [v, err]
	}

	public async ReadListBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, number, $.GoError]> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		let elemType: __goscript__type.TType = 0
		let size: number = 0
		let e: $.GoError = null! as $.GoError
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).ParseElemListBegin() : TJSONProtocol.prototype.ParseElemListBegin.call(p))
	}

	public async ReadListEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).ParseListEnd()
	}

	public async ReadMapBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, __goscript__type.TType, number, $.GoError]> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		let keyType: __goscript__type.TType = 0
		let valueType: __goscript__type.TType = 0
		let size: number = 0
		let e: $.GoError = null! as $.GoError
		{
			let [isNull, __goscriptShadow1] = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).ParseListBegin()
			if (isNull || (__goscriptShadow1 != null)) {
				return [1, 1, 0, __goscriptShadow1]
			}
		}

		// read keyType
		let __goscriptTuple8: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).ReadString(ctx) : TJSONProtocol.prototype.ReadString.call(p, ctx))
		let sKeyType = __goscriptTuple8[0]
		e = __goscriptTuple8[1]
		if (e != null) {
			return [keyType, valueType, size, e]
		}
		let __goscriptTuple9: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).StringToTypeId(sKeyType) : TJSONProtocol.prototype.StringToTypeId.call(p, sKeyType))
		keyType = __goscriptTuple9[0]
		e = __goscriptTuple9[1]
		if (e != null) {
			return [keyType, valueType, size, e]
		}

		// read valueType
		let __goscriptTuple10: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).ReadString(ctx) : TJSONProtocol.prototype.ReadString.call(p, ctx))
		let sValueType = __goscriptTuple10[0]
		e = __goscriptTuple10[1]
		if (e != null) {
			return [keyType, valueType, size, e]
		}
		let __goscriptTuple11: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).StringToTypeId(sValueType) : TJSONProtocol.prototype.StringToTypeId.call(p, sValueType))
		valueType = __goscriptTuple11[0]
		e = __goscriptTuple11[1]
		if (e != null) {
			return [keyType, valueType, size, e]
		}

		// read size
		let [iSize, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).ReadI64(ctx) : TJSONProtocol.prototype.ReadI64.call(p, ctx))
		if (err != null) {
			return [keyType, valueType, size, err]
		}
		err = await __goscript_configuration.checkSizeForProtocol($.int(iSize, 32), $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).cfg)
		if (err != null) {
			return [keyType, valueType, 0, err]
		}
		size = $.int(iSize)

		let __goscriptTuple12: any = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).ParseObjectStart()
		e = __goscriptTuple12[1]
		return [keyType, valueType, size, e]
	}

	public async ReadMapEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		let e = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).ParseObjectEnd()
		if (e != null) {
			return e
		}
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).ParseListEnd()
	}

	public async ReadMessageBegin(ctx: context.Context | null): globalThis.Promise<[string, __goscript_messagetype.TMessageType, number, $.GoError]> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		let name: string = ""
		let typeId: __goscript_messagetype.TMessageType = 0
		let seqId: number = 0
		let err: $.GoError = null! as $.GoError
		$.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).resetContextStack()
		{
			let [isNull, __goscriptShadow2] = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).ParseListBegin()
			if (isNull || (__goscriptShadow2 != null)) {
				return [name, typeId, seqId, __goscriptShadow2]
			}
		}
		let __goscriptTuple13: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).ReadI32(ctx) : TJSONProtocol.prototype.ReadI32.call(p, ctx))
		let version = __goscriptTuple13[0]
		err = __goscriptTuple13[1]
		if (err != null) {
			return [name, typeId, seqId, err]
		}
		if (version != 1) {
			let e = fmt.Errorf("Unknown Protocol version %d, expected version %d", $.basicInterfaceValue(version, "int32"), $.basicInterfaceValue(1, "int"))
			return [name, typeId, seqId, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
		}
		{
			let __goscriptTuple14: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).ReadString(ctx) : TJSONProtocol.prototype.ReadString.call(p, ctx))
			name = __goscriptTuple14[0]
			err = __goscriptTuple14[1]
			if (err != null) {
				return [name, typeId, seqId, err]
			}
		}
		let __goscriptTuple15: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).ReadByte(ctx) : TJSONProtocol.prototype.ReadByte.call(p, ctx))
		let bTypeId = __goscriptTuple15[0]
		err = __goscriptTuple15[1]
		typeId = $.int(bTypeId, 32)
		if (err != null) {
			return [name, typeId, seqId, err]
		}
		{
			let __goscriptTuple16: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).ReadI32(ctx) : TJSONProtocol.prototype.ReadI32.call(p, ctx))
			seqId = __goscriptTuple16[0]
			err = __goscriptTuple16[1]
			if (err != null) {
				return [name, typeId, seqId, err]
			}
		}
		return [name, typeId, seqId, null]
	}

	public async ReadMessageEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		let err = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).ParseListEnd()
		return err
	}

	public async ReadSetBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, number, $.GoError]> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		let elemType: __goscript__type.TType = 0
		let size: number = 0
		let e: $.GoError = null! as $.GoError
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).ParseElemListBegin() : TJSONProtocol.prototype.ParseElemListBegin.call(p))
	}

	public async ReadSetEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).ParseListEnd()
	}

	public async ReadString(ctx: context.Context | null): globalThis.Promise<[string, $.GoError]> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		const p$: TJSONProtocol = p == null ? $.pointerTarget<TJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TJSONProtocol>(p)
		let v: string = ""
		{
			let err = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).ParsePreValue()
			if (err != null) {
				return [v, err]
			}
		}
		let __goscriptTuple17: any = await bufio.Reader.prototype.Peek.call($.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).reader, 1)
		let f: $.Slice<number> = __goscriptTuple17[0]
		if (($.sliceLen(f) > 0) && ($.arrayIndex(f!, 0) == __goscript_simple_json_protocol.JSON_QUOTE)) {
			await bufio.Reader.prototype.ReadByte.call($.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).reader)
			let [value, err] = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).ParseStringBody()
			v = value
			if (err != null) {
				return [v, err]
			}
		} else {
			if (($.sliceLen(f) > 0) && ($.arrayIndex(f!, 0) == $.arrayIndex(__goscript_simple_json_protocol.JSON_NULL!, 0))) {
				let b: $.Slice<number> = $.makeSlice<number>($.sliceLen(__goscript_simple_json_protocol.JSON_NULL), undefined, "byte")
				let [, err] = await bufio.Reader.prototype.Read.call($.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).reader, b)
				if (err != null) {
					return [v, (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)]
				}
				if (!$.stringEqual($.bytesToString(b), $.bytesToString(__goscript_simple_json_protocol.JSON_NULL))) {
					let e = fmt.Errorf("Expected a JSON string, found unquoted data started with %s", $.bytesToString(b))
					return [v, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
				}
			} else {
				let e = fmt.Errorf("Expected a JSON string, found unquoted data started with %s", $.bytesToString(f))
				return [v, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
			}
		}
		return [v, await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).ParsePostValue()]
	}

	public async ReadStructBegin(ctx: context.Context | null): globalThis.Promise<[string, $.GoError]> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		let name: string = ""
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple18: any = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).ParseObjectStart()
		err = __goscriptTuple18[1]
		return ["", err]
	}

	public async ReadStructEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).ParseObjectEnd()
	}

	public async Skip(ctx: context.Context | null, fieldType: __goscript__type.TType): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		let err: $.GoError = null! as $.GoError
		return __goscript_protocol.SkipDefaultDepth(ctx, $.interfaceValue<__goscript_protocol.TProtocol | null>(p, "*thrift.TJSONProtocol", /* @__PURE__ */ $.pointerType("thrift.TJSONProtocol")), fieldType)
	}

	public async StringToTypeId(fieldType: string): globalThis.Promise<[__goscript__type.TType, $.GoError]> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		switch (fieldType) {
			case "tf":
			{
				return [2, null]
				break
			}
			case "i8":
			{
				return [3, null]
				break
			}
			case "i16":
			{
				return [6, null]
				break
			}
			case "i32":
			{
				return [8, null]
				break
			}
			case "i64":
			{
				return [10, null]
				break
			}
			case "dbl":
			{
				return [4, null]
				break
			}
			case "str":
			{
				return [11, null]
				break
			}
			case "rec":
			{
				return [12, null]
				break
			}
			case "map":
			{
				return [13, null]
				break
			}
			case "set":
			{
				return [14, null]
				break
			}
			case "lst":
			{
				return [15, null]
				break
			}
		}

		let e = fmt.Errorf("Unknown type identifier: %s", fieldType)
		return [0, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
	}

	public Transport(): __goscript_transport.TTransport | null {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).trans
	}

	public async TypeIdToString(fieldType: __goscript__type.TType): globalThis.Promise<[string, $.GoError]> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		switch ($.uint(fieldType, 8)) {
			case 2:
			{
				return ["tf", null]
				break
			}
			case 3:
			{
				return ["i8", null]
				break
			}
			case 6:
			{
				return ["i16", null]
				break
			}
			case 8:
			{
				return ["i32", null]
				break
			}
			case 10:
			{
				return ["i64", null]
				break
			}
			case 4:
			{
				return ["dbl", null]
				break
			}
			case 11:
			{
				return ["str", null]
				break
			}
			case 12:
			{
				return ["rec", null]
				break
			}
			case 13:
			{
				return ["map", null]
				break
			}
			case 14:
			{
				return ["set", null]
				break
			}
			case 15:
			{
				return ["lst", null]
				break
			}
		}

		let e = fmt.Errorf("Unknown fieldType: %d", $.basicInterfaceValue($.int(fieldType), "int"))
		return ["", (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
	}

	public async WriteBinary(ctx: context.Context | null, v: $.Slice<number>): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		const p$: TJSONProtocol = p == null ? $.pointerTarget<TJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TJSONProtocol>(p)
		// JSON library only takes in a string,
		// not an arbitrary byte array, to ensure bytes are transmitted
		// efficiently we must convert this into a valid JSON string
		// therefore we use base64 encoding to avoid excessive escaping/quoting
		{
			let e = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).OutputPreValue()
			if (e != null) {
				return e
			}
		}
		{
			let [, e] = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).write(__goscript_simple_json_protocol.JSON_QUOTE_BYTES)
			if (e != null) {
				return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			}
		}
		let writer = base64.NewEncoder(base64.StdEncoding, $.interfaceValue<io.Writer | null>($.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).writer, "*bufio.Writer", /* @__PURE__ */ $.pointerType("bufio.Writer")))
		{
			let [, e] = await (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? (writer as Exclude<io.WriteCloser, null>) : $.pointerValue<Exclude<io.WriteCloser, null>>(writer)).Write(v)
			if (e != null) {
				bufio.Writer.prototype.Reset.call($.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).writer, ($.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).trans as io.Writer | null))
				return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			}
		}
		{
			let e = await (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? (writer as Exclude<io.WriteCloser, null>) : $.pointerValue<Exclude<io.WriteCloser, null>>(writer)).Close()
			if (e != null) {
				return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			}
		}
		{
			let [, e] = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).write(__goscript_simple_json_protocol.JSON_QUOTE_BYTES)
			if (e != null) {
				return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			}
		}
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((p$ as TJSONProtocol).TSimpleJSONProtocol).OutputPostValue()
	}

	public async WriteBool(ctx: context.Context | null, b: boolean): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		if (b) {
			return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).WriteI32(ctx, 1) : TJSONProtocol.prototype.WriteI32.call(p, ctx, 1))
		}
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).WriteI32(ctx, 0) : TJSONProtocol.prototype.WriteI32.call(p, ctx, 0))
	}

	public async WriteByte(ctx: context.Context | null, b: number): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).WriteI32(ctx, $.int(b, 32)) : TJSONProtocol.prototype.WriteI32.call(p, ctx, $.int(b, 32)))
	}

	public async WriteDouble(ctx: context.Context | null, v: number): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputF64(v)
	}

	public async WriteFieldBegin(ctx: context.Context | null, name: string, typeId: __goscript__type.TType, id: number): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).WriteI16(ctx, id) : TJSONProtocol.prototype.WriteI16.call(p, ctx, id))
			if (e != null) {
				return e
			}
		}
		{
			let e = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputObjectBegin()
			if (e != null) {
				return e
			}
		}
		let [s, e1] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).TypeIdToString(typeId) : TJSONProtocol.prototype.TypeIdToString.call(p, typeId))
		if (e1 != null) {
			return e1
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).WriteString(ctx, s) : TJSONProtocol.prototype.WriteString.call(p, ctx, s))
			if (e != null) {
				return e
			}
		}
		return null
	}

	public async WriteFieldEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputObjectEnd()
	}

	public WriteFieldStop(ctx: context.Context | null): $.GoError {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return null
	}

	public async WriteI16(ctx: context.Context | null, v: number): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).WriteI32(ctx, $.int(v, 32)) : TJSONProtocol.prototype.WriteI32.call(p, ctx, $.int(v, 32)))
	}

	public async WriteI32(ctx: context.Context | null, v: number): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputI64($.int64(v))
	}

	public async WriteI64(ctx: context.Context | null, v: bigint): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputI64($.int64(v))
	}

	public async WriteListBegin(ctx: context.Context | null, elemType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).OutputElemListBegin(elemType, size) : TJSONProtocol.prototype.OutputElemListBegin.call(p, elemType, size))
	}

	public async WriteListEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputListEnd()
	}

	public async WriteMapBegin(ctx: context.Context | null, keyType: __goscript__type.TType, valueType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		{
			let e = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputListBegin()
			if (e != null) {
				return e
			}
		}
		let [s, e1] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).TypeIdToString(keyType) : TJSONProtocol.prototype.TypeIdToString.call(p, keyType))
		if (e1 != null) {
			return e1
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).WriteString(ctx, s) : TJSONProtocol.prototype.WriteString.call(p, ctx, s))
			if (e != null) {
				return e
			}
		}
		let __goscriptTuple19: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).TypeIdToString(valueType) : TJSONProtocol.prototype.TypeIdToString.call(p, valueType))
		s = __goscriptTuple19[0]
		e1 = __goscriptTuple19[1]
		if (e1 != null) {
			return e1
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).WriteString(ctx, s) : TJSONProtocol.prototype.WriteString.call(p, ctx, s))
			if (e != null) {
				return e
			}
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).WriteI64(ctx, $.int64(size)) : TJSONProtocol.prototype.WriteI64.call(p, ctx, $.int64(size)))
			if (e != null) {
				return e
			}
		}
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputObjectBegin()
	}

	public async WriteMapEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		{
			let e = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputObjectEnd()
			if (e != null) {
				return e
			}
		}
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputListEnd()
	}

	public async WriteMessageBegin(ctx: context.Context | null, name: string, typeId: __goscript_messagetype.TMessageType, seqId: number): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		$.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).resetContextStack()
		{
			let e = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputListBegin()
			if (e != null) {
				return e
			}
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).WriteI32(ctx, 1) : TJSONProtocol.prototype.WriteI32.call(p, ctx, 1))
			if (e != null) {
				return e
			}
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).WriteString(ctx, name) : TJSONProtocol.prototype.WriteString.call(p, ctx, name))
			if (e != null) {
				return e
			}
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).WriteByte(ctx, $.int(typeId, 8)) : TJSONProtocol.prototype.WriteByte.call(p, ctx, $.int(typeId, 8)))
			if (e != null) {
				return e
			}
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).WriteI32(ctx, seqId) : TJSONProtocol.prototype.WriteI32.call(p, ctx, seqId))
			if (e != null) {
				return e
			}
		}
		return null
	}

	public async WriteMessageEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputListEnd()
	}

	public async WriteSetBegin(ctx: context.Context | null, elemType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TJSONProtocol).OutputElemListBegin(elemType, size) : TJSONProtocol.prototype.OutputElemListBegin.call(p, elemType, size))
	}

	public async WriteSetEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputListEnd()
	}

	public async WriteString(ctx: context.Context | null, v: string): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputString(v)
	}

	public async WriteStructBegin(ctx: context.Context | null, name: string): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		{
			let e = await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputObjectBegin()
			if (e != null) {
				return e
			}
		}
		return null
	}

	public async WriteStructEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TJSONProtocol | $.VarRef<TJSONProtocol> | null = this;
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>($.pointerValue<TJSONProtocol>(p).TSimpleJSONProtocol).OutputObjectEnd()
	}

	public async OutputBool(value: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).OutputBool(value)
	}

	public async OutputF64(value: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).OutputF64(value)
	}

	public async OutputI64(value: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).OutputI64(value)
	}

	public async OutputListBegin(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).OutputListBegin()
	}

	public async OutputListEnd(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).OutputListEnd()
	}

	public async OutputNull(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).OutputNull()
	}

	public async OutputObjectBegin(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).OutputObjectBegin()
	}

	public async OutputObjectEnd(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).OutputObjectEnd()
	}

	public async OutputPostValue(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).OutputPostValue()
	}

	public async OutputPreValue(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).OutputPreValue()
	}

	public async OutputString(s: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).OutputString(s)
	}

	public async OutputStringData(s: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).OutputStringData(s)
	}

	public async ParseBase64EncodedBody(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).ParseBase64EncodedBody()
	}

	public async ParseF64(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).ParseF64()
	}

	public async ParseI64(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).ParseI64()
	}

	public async ParseListBegin(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).ParseListBegin()
	}

	public async ParseListEnd(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).ParseListEnd()
	}

	public async ParseObjectEnd(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).ParseObjectEnd()
	}

	public async ParseObjectStart(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).ParseObjectStart()
	}

	public async ParsePostValue(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).ParsePostValue()
	}

	public async ParsePreValue(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).ParsePreValue()
	}

	public async ParseQuotedStringBody(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).ParseQuotedStringBody()
	}

	public async ParseStringBody(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).ParseStringBody()
	}

	public async SetTConfiguration(conf: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).SetTConfiguration(conf)
	}

	public async readIfNull(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).readIfNull()
	}

	public async readNonSignificantWhitespace(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).readNonSignificantWhitespace()
	}

	public async readNumeric(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).readNumeric()
	}

	public async readQuoteIfNext(): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).readQuoteIfNext()
	}

	public resetContextStack(): any {
		return $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).resetContextStack()
	}

	public async safePeekContains(b: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).safePeekContains(b)
	}

	public async write(b: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>(this.TSimpleJSONProtocol).write(b)
	}

	static __typeInfo = $.registerStructType(
		"thrift.TJSONProtocol",
		() => new TJSONProtocol(),
		() => [$.methodSignature("Flush", [["ctx", "context.Context"]], [["err", "error"]], true), $.methodSignature("OutputElemListBegin", [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("ParseElemListBegin", [], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["e", "error"]], true), $.methodSignature("ReadBinary", [["ctx", "context.Context"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("ReadBool", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("ReadByte", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("int8"), "error"], true), $.methodSignature("ReadDouble", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("float64"), "error"], true), $.methodSignature("ReadFieldBegin", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint8", "thrift.TType"), /* @__PURE__ */ $.basicType("int16"), "error"], true), $.methodSignature("ReadFieldEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadI16", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("int16"), "error"], true), $.methodSignature("ReadI32", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("int32"), "error"], true), $.methodSignature("ReadI64", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("int64"), "error"], true), $.methodSignature("ReadListBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["e", "error"]], true), $.methodSignature("ReadListEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadMapBegin", [["ctx", "context.Context"]], [["keyType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["valueType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["e", "error"]], true), $.methodSignature("ReadMapEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadMessageBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqId", /* @__PURE__ */ $.basicType("int32")], ["err", "error"]], true), $.methodSignature("ReadMessageEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadSetBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["e", "error"]], true), $.methodSignature("ReadSetEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadString", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("ReadStructBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("ReadStructEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("Skip", [["ctx", "context.Context"], ["fieldType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")]], [["err", "error"]], true), $.methodSignature("StringToTypeId", [["fieldType", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.basicType("uint8", "thrift.TType"), "error"], true), $.methodSignature("Transport", [], ["thrift.TTransport"], true), $.methodSignature("TypeIdToString", [["fieldType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")]], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("WriteBinary", [["ctx", "context.Context"], ["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("WriteBool", [["ctx", "context.Context"], ["b", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("WriteByte", [["ctx", "context.Context"], ["b", /* @__PURE__ */ $.basicType("int8")]], ["error"], true), $.methodSignature("WriteDouble", [["ctx", "context.Context"], ["v", /* @__PURE__ */ $.basicType("float64")]], ["error"], true), $.methodSignature("WriteFieldBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["id", /* @__PURE__ */ $.basicType("int16")]], ["error"], true), $.methodSignature("WriteFieldEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteFieldStop", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteI16", [["ctx", "context.Context"], ["v", /* @__PURE__ */ $.basicType("int16")]], ["error"], true), $.methodSignature("WriteI32", [["ctx", "context.Context"], ["v", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("WriteI64", [["ctx", "context.Context"], ["v", /* @__PURE__ */ $.basicType("int64")]], ["error"], true), $.methodSignature("WriteListBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteListEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteMapBegin", [["ctx", "context.Context"], ["keyType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["valueType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteMapEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteMessageBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqId", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("WriteMessageEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteSetBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteSetEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteString", [["ctx", "context.Context"], ["v", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("WriteStructBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("WriteStructEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("OutputBool", [["value", /* @__PURE__ */ $.basicType("bool")]], ["error"]), $.methodSignature("OutputF64", [["value", /* @__PURE__ */ $.basicType("float64")]], ["error"]), $.methodSignature("OutputI64", [["value", /* @__PURE__ */ $.basicType("int64")]], ["error"]), $.methodSignature("OutputListBegin", [], ["error"]), $.methodSignature("OutputListEnd", [], ["error"]), $.methodSignature("OutputNull", [], ["error"]), $.methodSignature("OutputObjectBegin", [], ["error"]), $.methodSignature("OutputObjectEnd", [], ["error"]), $.methodSignature("OutputPostValue", [], ["error"]), $.methodSignature("OutputPreValue", [], ["error"]), $.methodSignature("OutputString", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("OutputStringData", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"]), $.methodSignature("ParseBase64EncodedBody", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("ParseF64", [], [/* @__PURE__ */ $.basicType("float64"), /* @__PURE__ */ $.basicType("bool"), "error"]), $.methodSignature("ParseI64", [], [/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("bool"), "error"]), $.methodSignature("ParseListBegin", [], [["isNull", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]]), $.methodSignature("ParseListEnd", [], ["error"]), $.methodSignature("ParseObjectEnd", [], ["error"]), $.methodSignature("ParseObjectStart", [], [/* @__PURE__ */ $.basicType("bool"), "error"]), $.methodSignature("ParsePostValue", [], ["error"]), $.methodSignature("ParsePreValue", [], ["error"]), $.methodSignature("ParseQuotedStringBody", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("ParseStringBody", [], [/* @__PURE__ */ $.basicType("string"), "error"]), $.methodSignature("SetTConfiguration", [["conf", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]]), $.methodSignature("readIfNull", [], [/* @__PURE__ */ $.basicType("bool"), "error"]), $.methodSignature("readNonSignificantWhitespace", [], ["error"]), $.methodSignature("readNumeric", [], ["thrift.Numeric", "error"]), $.methodSignature("readQuoteIfNext"), $.methodSignature("resetContextStack"), $.methodSignature("safePeekContains", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"])],
		TJSONProtocol,
		() => [/* @__PURE__ */ $.structField("TSimpleJSONProtocol", /* @__PURE__ */ $.pointerType("thrift.TSimpleJSONProtocol"), [0], 0, true, { anonymous: true })]
	)
}

export class TJSONProtocolFactory {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TJSONProtocolFactory {
		return new TJSONProtocolFactory(this, true)
	}

	public __goscriptAssign(source: TJSONProtocolFactory): void {
	}

	public async GetProtocol(trans: __goscript_transport.TTransport | null): globalThis.Promise<__goscript_protocol.TProtocol | null> {
		const p: TJSONProtocolFactory | $.VarRef<TJSONProtocolFactory> | null = this;
		return $.interfaceValue<__goscript_protocol.TProtocol | null>(await NewTJSONProtocol(trans), "*thrift.TJSONProtocol", /* @__PURE__ */ $.pointerType("thrift.TJSONProtocol"))
	}

	static __typeInfo = $.registerStructType(
		"thrift.TJSONProtocolFactory",
		() => new TJSONProtocolFactory(),
		() => [$.methodSignature("GetProtocol", [["trans", "thrift.TTransport"]], ["thrift.TProtocol"], true)],
		TJSONProtocolFactory,
		() => []
	)
}

export const THRIFT_JSON_PROTOCOL_VERSION: number = 1

export async function NewTJSONProtocol(t: __goscript_transport.TTransport | null): globalThis.Promise<TJSONProtocol | $.VarRef<TJSONProtocol> | null> {
	let v: TJSONProtocol | $.VarRef<TJSONProtocol> | null = (await (async () => { const __goscriptLiteralField0 = await __goscript_simple_json_protocol.NewTSimpleJSONProtocol(t); return new TJSONProtocol({TSimpleJSONProtocol: __goscriptLiteralField0}) })())
	let v$: TJSONProtocol = v == null ? $.pointerTarget<TJSONProtocol>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<TJSONProtocol>(v)
	__goscript_simple_json_protocol.jsonContextStack_push($.fieldRef($.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((v$ as TJSONProtocol).TSimpleJSONProtocol)._fields, "parseContextStack"), 1)
	__goscript_simple_json_protocol.jsonContextStack_push($.fieldRef($.pointerValue<__goscript_simple_json_protocol.TSimpleJSONProtocol>((v$ as TJSONProtocol).TSimpleJSONProtocol)._fields, "dumpContext"), 1)
	return v
}

export function NewTJSONProtocolFactory(): TJSONProtocolFactory | $.VarRef<TJSONProtocolFactory> | null {
	return new TJSONProtocolFactory()
}

var __goscriptAwait: any
