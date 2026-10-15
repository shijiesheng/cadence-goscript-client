// Generated file based on compact_protocol.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript__type from "./type.gs.ts"

import * as __goscript_binary_protocol from "./binary_protocol.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import * as __goscript_messagetype from "./messagetype.gs.ts"

import * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_protocol_exception from "./protocol_exception.gs.ts"

import * as __goscript_rich_transport from "./rich_transport.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"

import * as __goscript_transport_exception from "./transport_exception.gs.ts"
import "@goscript/context/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/time/index.js"
import "./type.gs.ts"
import "./binary_protocol.gs.ts"
import "./configuration.gs.ts"
import "./header_transport.gs.ts"
import "./messagetype.gs.ts"
import "./protocol.gs.ts"
import "./protocol_exception.gs.ts"
import "./rich_transport.gs.ts"
import "./transport.gs.ts"
import "./transport_exception.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.tCompactType", "thrift.TCompactProtocolFactory", "thrift.TCompactProtocol"])

export type tCompactType = number

export class TCompactProtocolFactory {
	public get cfg(): __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null {
		return this._fields.cfg
	}

	public set cfg(value: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null) {
		this._fields.cfg = value
	}

	public _fields: {
		cfg: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null
	}

	constructor(init?: Partial<{cfg?: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			cfg: init?.cfg ?? (null! as __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TCompactProtocolFactory {
		return new TCompactProtocolFactory(this, true)
	}

	public __goscriptAssign(source: TCompactProtocolFactory): void {
		const target = this._fields
		const values = source._fields
		target.cfg = values.cfg
	}

	public async GetProtocol(trans: __goscript_transport.TTransport | null): globalThis.Promise<__goscript_protocol.TProtocol | null> {
		const p: TCompactProtocolFactory | $.VarRef<TCompactProtocolFactory> | null = this;
		return $.interfaceValue<__goscript_protocol.TProtocol | null>(await NewTCompactProtocolConf(trans, $.pointerValue<TCompactProtocolFactory>(p).cfg), "*thrift.TCompactProtocol", /* @__PURE__ */ $.pointerType("thrift.TCompactProtocol"))
	}

	public SetTConfiguration(conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): void {
		let p: TCompactProtocolFactory | $.VarRef<TCompactProtocolFactory> | null = this;
		$.pointerValue<TCompactProtocolFactory>(p).cfg = conf
	}

	static __typeInfo = $.registerStructType(
		"thrift.TCompactProtocolFactory",
		() => new TCompactProtocolFactory(),
		() => [$.methodSignature("GetProtocol", [["trans", "thrift.TTransport"]], ["thrift.TProtocol"], true), $.methodSignature("SetTConfiguration", [["conf", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true)],
		TCompactProtocolFactory,
		() => [/* @__PURE__ */ $.structField("cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export class TCompactProtocol {
	public get trans(): __goscript_transport.TRichTransport | null {
		return this._fields.trans
	}

	public set trans(value: __goscript_transport.TRichTransport | null) {
		this._fields.trans = value
	}

	public get origTransport(): __goscript_transport.TTransport | null {
		return this._fields.origTransport
	}

	public set origTransport(value: __goscript_transport.TTransport | null) {
		this._fields.origTransport = value
	}

	public get cfg(): __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null {
		return this._fields.cfg
	}

	public set cfg(value: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null) {
		this._fields.cfg = value
	}

	// Used to keep track of the last field for the current and previous structs,
	// so we can do the delta stuff.
	public get lastField(): $.Slice<number> {
		return this._fields.lastField
	}

	public set lastField(value: $.Slice<number>) {
		this._fields.lastField = value
	}

	public get lastFieldId(): number {
		return this._fields.lastFieldId
	}

	public set lastFieldId(value: number) {
		this._fields.lastFieldId = value
	}

	// If we encounter a boolean field begin, save the TField here so it can
	// have the value incorporated.
	public get booleanFieldName(): string {
		return this._fields.booleanFieldName
	}

	public set booleanFieldName(value: string) {
		this._fields.booleanFieldName = value
	}

	public get booleanFieldId(): number {
		return this._fields.booleanFieldId
	}

	public set booleanFieldId(value: number) {
		this._fields.booleanFieldId = value
	}

	public get booleanFieldPending(): boolean {
		return this._fields.booleanFieldPending
	}

	public set booleanFieldPending(value: boolean) {
		this._fields.booleanFieldPending = value
	}

	// If we read a field header, and it's a boolean field, save the boolean
	// value here so that readBool can use it.
	public get boolValue(): boolean {
		return this._fields.boolValue
	}

	public set boolValue(value: boolean) {
		this._fields.boolValue = value
	}

	public get boolValueIsNotNull(): boolean {
		return this._fields.boolValueIsNotNull
	}

	public set boolValueIsNotNull(value: boolean) {
		this._fields.boolValueIsNotNull = value
	}

	public get buffer(): Uint8Array {
		return this._fields.buffer
	}

	public set buffer(value: Uint8Array) {
		this._fields.buffer = value
	}

	public _fields: {
		trans: __goscript_transport.TRichTransport | null
		origTransport: __goscript_transport.TTransport | null
		cfg: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null
		lastField: $.Slice<number>
		lastFieldId: number
		booleanFieldName: string
		booleanFieldId: number
		booleanFieldPending: boolean
		boolValue: boolean
		boolValueIsNotNull: boolean
		buffer: Uint8Array
	}

	constructor(init?: Partial<{trans?: __goscript_transport.TRichTransport | null, origTransport?: __goscript_transport.TTransport | null, cfg?: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null, lastField?: $.Slice<number>, lastFieldId?: number, booleanFieldName?: string, booleanFieldId?: number, booleanFieldPending?: boolean, boolValue?: boolean, boolValueIsNotNull?: boolean, buffer?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			trans: init?.trans ?? (null! as __goscript_transport.TRichTransport | null),
			origTransport: init?.origTransport ?? (null! as __goscript_transport.TTransport | null),
			cfg: init?.cfg ?? (null! as __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null),
			lastField: init?.lastField ?? (null! as $.Slice<number>),
			lastFieldId: init?.lastFieldId ?? (0 as number),
			booleanFieldName: init?.booleanFieldName ?? ("" as string),
			booleanFieldId: init?.booleanFieldId ?? (0 as number),
			booleanFieldPending: init?.booleanFieldPending ?? (false as boolean),
			boolValue: init?.boolValue ?? (false as boolean),
			boolValueIsNotNull: init?.boolValueIsNotNull ?? (false as boolean),
			buffer: init?.buffer !== undefined ? $.cloneArrayValue(init.buffer, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64)) : $.arrayValue(new Uint8Array(64))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TCompactProtocol {
		return new TCompactProtocol(this, true)
	}

	public __goscriptAssign(source: TCompactProtocol): void {
		const target = this._fields
		const values = source._fields
		target.trans = $.assignFieldValue(target.trans, values.trans, "thrift.TRichTransport")
		target.origTransport = $.assignFieldValue(target.origTransport, values.origTransport, "thrift.TTransport")
		target.cfg = values.cfg
		target.lastField = values.lastField
		target.lastFieldId = values.lastFieldId
		target.booleanFieldName = values.booleanFieldName
		target.booleanFieldId = values.booleanFieldId
		target.booleanFieldPending = values.booleanFieldPending
		target.boolValue = values.boolValue
		target.boolValueIsNotNull = values.boolValueIsNotNull
		target.buffer = $.assignFieldValue(target.buffer, values.buffer, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64))
	}

	public async Flush(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let err: $.GoError = null! as $.GoError
		return (await __goscript_protocol_exception.NewTProtocolException((__goscriptAwait = $.pointerValue<Exclude<__goscript_transport.TRichTransport, null>>($.pointerValue<TCompactProtocol>(p).trans).Flush(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) as $.GoError)
	}

	public async ReadBinary(ctx: context.Context | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let value: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		const p$: TCompactProtocol = p == null ? $.pointerTarget<TCompactProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TCompactProtocol>(p)
		let [length, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).readVarint32() : TCompactProtocol.prototype.readVarint32.call(p))
		if (e != null) {
			return [null, (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)]
		}
		err = await __goscript_configuration.checkSizeForProtocol(length, (p$ as TCompactProtocol).cfg)
		if (err != null) {
			return [value, err]
		}
		if (length == 0) {
			return [new Uint8Array([]) as $.Slice<number>, null]
		}

		let __goscriptTuple0: any = await __goscript_binary_protocol.safeReadBytes(length, ((p$ as TCompactProtocol).trans as io.Reader | null))
		let buf: $.Slice<number> = __goscriptTuple0[0]
		e = __goscriptTuple0[1]
		return [buf, (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)]
	}

	public async ReadBool(ctx: context.Context | null): globalThis.Promise<[boolean, $.GoError]> {
		let p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let value: boolean = false
		let err: $.GoError = null! as $.GoError
		const p$: TCompactProtocol = p == null ? $.pointerTarget<TCompactProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TCompactProtocol>(p)
		if ((p$ as TCompactProtocol).boolValueIsNotNull) {
			;(p$ as TCompactProtocol).boolValueIsNotNull = false
			return [(p$ as TCompactProtocol).boolValue, null]
		}
		let __goscriptTuple1: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).readByteDirect() : TCompactProtocol.prototype.readByteDirect.call(p))
		let v = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		return [v == 1, err]
	}

	public async ReadByte(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let [v, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).readByteDirect() : TCompactProtocol.prototype.readByteDirect.call(p))
		if (err != null) {
			return [0, (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)]
		}
		return [$.int(v, 8), err]
	}

	public async ReadDouble(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let value: number = 0
		let err: $.GoError = null! as $.GoError
		const p$: TCompactProtocol = p == null ? $.pointerTarget<TCompactProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TCompactProtocol>(p)
		let longBits: $.Slice<number> = $.goSlice((p$ as TCompactProtocol).buffer, 0, 8)
		let [, e] = await io.ReadFull($.pointerValueOrNil(((p$ as TCompactProtocol).trans as io.Reader | null))!, longBits)
		if (e != null) {
			return [0.0, (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)]
		}
		return [math.Float64frombits((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).bytesToUint64(longBits) : TCompactProtocol.prototype.bytesToUint64.call(p, longBits))), null]
	}

	public async ReadFieldBegin(ctx: context.Context | null): globalThis.Promise<[string, __goscript__type.TType, number, $.GoError]> {
		let p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let name: string = ""
		let typeId: __goscript__type.TType = 0
		let id: number = 0
		let err: $.GoError = null! as $.GoError
		const p$: TCompactProtocol = p == null ? $.pointerTarget<TCompactProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TCompactProtocol>(p)
		let __goscriptTuple2: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).readByteDirect() : TCompactProtocol.prototype.readByteDirect.call(p))
		let t = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		if (err != null) {
			return [name, typeId, id, err]
		}

		// if it's a stop, then we can return immediately, as the struct is over.
		if ($.uint((t & 0x0f), 8) == 0) {
			return ["", 0, 0, null]
		}

		// mask off the 4 MSB of the type header. it could contain a field id delta.
		let modifier = $.int($.uintShr((t & 0xf0), 4, 8), 16)
		if (modifier == 0) {
			// not a delta. look ahead for the zigzag varint field id.
			let __goscriptTuple3: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).ReadI16(ctx) : TCompactProtocol.prototype.ReadI16.call(p, ctx))
			id = __goscriptTuple3[0]
			err = __goscriptTuple3[1]
			if (err != null) {
				return [name, typeId, id, err]
			}
		} else {
			// has a delta. add the delta to the last read field id.
			id = $.int((($.int((p$ as TCompactProtocol).lastFieldId, 16) + modifier) << 16 >> 16), 16)
		}
		let __goscriptTuple4: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).getTType($.uint(t & 0x0f, 8)) : TCompactProtocol.prototype.getTType.call(p, $.uint(t & 0x0f, 8)))
		typeId = __goscriptTuple4[0]
		let e = __goscriptTuple4[1]
		if (e != null) {
			err = (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			return [name, typeId, id, err]
		}

		// if this happens to be a boolean field, the value is encoded in the type
		if ((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).isBoolType(t) : TCompactProtocol.prototype.isBoolType.call(p, t))) {
			// save the boolean value in a special instance variable.
			;(p$ as TCompactProtocol).boolValue = ($.uint(($.uint(t, 8) & 0x0f), 8) == 1);
			;(p$ as TCompactProtocol).boolValueIsNotNull = true
		}

		// push the new field onto the field stack so we can keep the deltas going.
		;(p$ as TCompactProtocol).lastFieldId = $.int(id)
		return [name, typeId, id, err]
	}

	public ReadFieldEnd(ctx: context.Context | null): $.GoError {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return null
	}

	public async ReadI16(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let value: number = 0
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple5: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).ReadI32(ctx) : TCompactProtocol.prototype.ReadI32.call(p, ctx))
		let v = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		return [$.int(v, 16), err]
	}

	public async ReadI32(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let value: number = 0
		let err: $.GoError = null! as $.GoError
		let [v, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).readVarint32() : TCompactProtocol.prototype.readVarint32.call(p))
		if (e != null) {
			return [0, (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)]
		}
		value = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).zigzagToInt32(v) : TCompactProtocol.prototype.zigzagToInt32.call(p, v))
		return [value, null]
	}

	public async ReadI64(ctx: context.Context | null): globalThis.Promise<[bigint, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let value: bigint = 0n
		let err: $.GoError = null! as $.GoError
		let [v, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).readVarint64() : TCompactProtocol.prototype.readVarint64.call(p))
		if (e != null) {
			return [0n, (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)]
		}
		value = (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).zigzagToInt64(v) : TCompactProtocol.prototype.zigzagToInt64.call(p, v))
		return [value, null]
	}

	public async ReadListBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, number, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let elemType: __goscript__type.TType = 0
		let size: number = 0
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple6: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).readByteDirect() : TCompactProtocol.prototype.readByteDirect.call(p))
		let size_and_type = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return [elemType, size, err]
		}
		size = $.int(($.uintShr(size_and_type, 4, 8)) & 0x0f)
		if (size == 15) {
			let [size2, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).readVarint32() : TCompactProtocol.prototype.readVarint32.call(p))
			if (e != null) {
				err = (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
				return [elemType, size, err]
			}
			size = $.int(size2)
		}
		err = await __goscript_configuration.checkSizeForProtocol(4, $.pointerValue<TCompactProtocol>(p).cfg)
		if (err != null) {
			return [elemType, size, err]
		}
		let __goscriptTuple7: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).getTType($.uint(size_and_type, 8)) : TCompactProtocol.prototype.getTType.call(p, $.uint(size_and_type, 8)))
		elemType = __goscriptTuple7[0]
		let e = __goscriptTuple7[1]
		if (e != null) {
			err = (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			return [elemType, size, err]
		}
		return [elemType, size, err]
	}

	public ReadListEnd(ctx: context.Context | null): $.GoError {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return null
	}

	public async ReadMapBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, __goscript__type.TType, number, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let keyType: __goscript__type.TType = 0
		let valueType: __goscript__type.TType = 0
		let size: number = 0
		let err: $.GoError = null! as $.GoError
		let [size32, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).readVarint32() : TCompactProtocol.prototype.readVarint32.call(p))
		if (e != null) {
			err = (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			return [keyType, valueType, size, err]
		}
		err = await __goscript_configuration.checkSizeForProtocol(size32, $.pointerValue<TCompactProtocol>(p).cfg)
		if (err != null) {
			return [keyType, valueType, size, err]
		}
		size = $.int(size32)

		let keyAndValueType = 0
		if (size != 0) {
			let __goscriptTuple8: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).readByteDirect() : TCompactProtocol.prototype.readByteDirect.call(p))
			keyAndValueType = __goscriptTuple8[0]
			err = __goscriptTuple8[1]
			if (err != null) {
				return [keyType, valueType, size, err]
			}
		}
		let __goscriptTuple9: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).getTType($.uint($.uintShr(keyAndValueType, 4, 8), 8)) : TCompactProtocol.prototype.getTType.call(p, $.uint($.uintShr(keyAndValueType, 4, 8), 8)))
		keyType = __goscriptTuple9[0]
		let __goscriptTuple10: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).getTType($.uint(keyAndValueType & 0xf, 8)) : TCompactProtocol.prototype.getTType.call(p, $.uint(keyAndValueType & 0xf, 8)))
		valueType = __goscriptTuple10[0]
		return [keyType, valueType, size, err]
	}

	public ReadMapEnd(ctx: context.Context | null): $.GoError {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return null
	}

	public async ReadMessageBegin(ctx: context.Context | null): globalThis.Promise<[string, __goscript_messagetype.TMessageType, number, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let name: string = ""
		let typeId: __goscript_messagetype.TMessageType = 0
		let seqId: number = 0
		let err: $.GoError = null! as $.GoError
		let protocolId: number = 0

		let [, deadlineSet] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
		while (true) {
			let __goscriptTuple11: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).readByteDirect() : TCompactProtocol.prototype.readByteDirect.call(p))
			protocolId = __goscriptTuple11[0]
			err = __goscriptTuple11[1]
			if ((deadlineSet && await __goscript_transport_exception.isTimeoutError(err)) && ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null)) {
				// keep retrying I/O timeout errors since we still have
				// time left
				continue
			}
			// For anything else, don't retry
			break
		}
		if (err != null) {
			return [name, typeId, seqId, err]
		}

		if (protocolId != 130) {
			let e = fmt.Errorf("Expected protocol id %02x but got %02x", $.basicInterfaceValue(130, "int"), $.basicInterfaceValue(protocolId, "byte", "uint8"))
			return ["", typeId, seqId, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(4, e) as $.GoError)]
		}

		let __goscriptTuple12: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).readByteDirect() : TCompactProtocol.prototype.readByteDirect.call(p))
		let versionAndType = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		if (err != null) {
			return [name, typeId, seqId, err]
		}

		let version = $.uint(versionAndType & 31, 8)
		typeId = $.int(($.uintShr(versionAndType, 5, 8)) & 7, 32)
		if (version != 1) {
			let e = fmt.Errorf("Expected version %02x but got %02x", $.basicInterfaceValue(1, "int"), $.basicInterfaceValue(version, "byte", "uint8"))
			err = (await __goscript_protocol_exception.NewTProtocolExceptionWithType(4, e) as $.GoError)
			return [name, typeId, seqId, err]
		}
		let __goscriptTuple13: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).readVarint32() : TCompactProtocol.prototype.readVarint32.call(p))
		seqId = __goscriptTuple13[0]
		let e = __goscriptTuple13[1]
		if (e != null) {
			err = (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			return [name, typeId, seqId, err]
		}
		let __goscriptTuple14: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).ReadString(ctx) : TCompactProtocol.prototype.ReadString.call(p, ctx))
		name = __goscriptTuple14[0]
		err = __goscriptTuple14[1]
		return [name, typeId, seqId, err]
	}

	public ReadMessageEnd(ctx: context.Context | null): $.GoError {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return null
	}

	public async ReadSetBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, number, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let elemType: __goscript__type.TType = 0
		let size: number = 0
		let err: $.GoError = null! as $.GoError
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).ReadListBegin(ctx) : TCompactProtocol.prototype.ReadListBegin.call(p, ctx))
	}

	public ReadSetEnd(ctx: context.Context | null): $.GoError {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return null
	}

	public async ReadString(ctx: context.Context | null): globalThis.Promise<[string, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let value: string = ""
		let err: $.GoError = null! as $.GoError
		const p$: TCompactProtocol = p == null ? $.pointerTarget<TCompactProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TCompactProtocol>(p)
		let [length, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).readVarint32() : TCompactProtocol.prototype.readVarint32.call(p))
		if (e != null) {
			return ["", (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)]
		}
		err = await __goscript_configuration.checkSizeForProtocol(length, (p$ as TCompactProtocol).cfg)
		if (err != null) {
			return [value, err]
		}
		if (length == 0) {
			return ["", null]
		}
		if (length < 64) {
			// Avoid allocation on small reads
			let buf: $.Slice<number> = $.goSlice((p$ as TCompactProtocol).buffer, undefined, length)
			let [read, __goscriptShadow0] = await io.ReadFull($.pointerValueOrNil(((p$ as TCompactProtocol).trans as io.Reader | null))!, buf)
			return [$.bytesToString($.goSlice(buf, undefined, read)), (await __goscript_protocol_exception.NewTProtocolException(__goscriptShadow0) as $.GoError)]
		}

		let __goscriptTuple15: any = await __goscript_binary_protocol.safeReadBytes(length, ((p$ as TCompactProtocol).trans as io.Reader | null))
		let buf: $.Slice<number> = __goscriptTuple15[0]
		e = __goscriptTuple15[1]
		return [$.bytesToString(buf), (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)]
	}

	public ReadStructBegin(ctx: context.Context | null): [string, $.GoError] {
		let p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let name: string = ""
		let err: $.GoError = null! as $.GoError
		const p$: TCompactProtocol = p == null ? $.pointerTarget<TCompactProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TCompactProtocol>(p);
		;(p$ as TCompactProtocol).lastField = $.appendOne((p$ as TCompactProtocol).lastField, (p$ as TCompactProtocol).lastFieldId);
		;(p$ as TCompactProtocol).lastFieldId = 0
		return [name, err]
	}

	public async ReadStructEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		let p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		const p$: TCompactProtocol = p == null ? $.pointerTarget<TCompactProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TCompactProtocol>(p)
		// consume the last field we read off the wire.
		if ($.sliceLen((p$ as TCompactProtocol).lastField) <= 0) {
			return (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, errors.New("ReadStructEnd called without matching ReadStructBegin call before")) as $.GoError)
		}
		;(p$ as TCompactProtocol).lastFieldId = $.arrayIndex((p$ as TCompactProtocol).lastField!, $.sliceLen((p$ as TCompactProtocol).lastField) - 1);
		;(p$ as TCompactProtocol).lastField = $.goSlice((p$ as TCompactProtocol).lastField, undefined, $.sliceLen((p$ as TCompactProtocol).lastField) - 1)
		return null
	}

	public async SetTConfiguration(conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<void> {
		let p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		const p$: TCompactProtocol = p == null ? $.pointerTarget<TCompactProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TCompactProtocol>(p)
		await __goscript_configuration.PropagateTConfiguration(((p$ as TCompactProtocol).trans as any), conf)
		await __goscript_configuration.PropagateTConfiguration(((p$ as TCompactProtocol).origTransport as any), conf);
		;(p$ as TCompactProtocol).cfg = conf
	}

	public async Skip(ctx: context.Context | null, fieldType: __goscript__type.TType): globalThis.Promise<$.GoError> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let err: $.GoError = null! as $.GoError
		return __goscript_protocol.SkipDefaultDepth(ctx, $.interfaceValue<__goscript_protocol.TProtocol | null>(p, "*thrift.TCompactProtocol", /* @__PURE__ */ $.pointerType("thrift.TCompactProtocol")), fieldType)
	}

	public Transport(): __goscript_transport.TTransport | null {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return $.pointerValue<TCompactProtocol>(p).origTransport
	}

	public async WriteBinary(ctx: context.Context | null, bin: $.Slice<number>): globalThis.Promise<$.GoError> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let [, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).writeVarint32($.int($.sliceLen(bin), 32)) : TCompactProtocol.prototype.writeVarint32.call(p, $.int($.sliceLen(bin), 32)))
		if (e != null) {
			return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
		}
		if ($.sliceLen(bin) > 0) {
			let __goscriptTuple16: any = await $.pointerValue<Exclude<__goscript_transport.TRichTransport, null>>($.pointerValue<TCompactProtocol>(p).trans).Write(bin)
			e = __goscriptTuple16[1]
			return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
		}
		return null
	}

	public async WriteBool(ctx: context.Context | null, value: boolean): globalThis.Promise<$.GoError> {
		let p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		const p$: TCompactProtocol = p == null ? $.pointerTarget<TCompactProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TCompactProtocol>(p)
		let v = 2
		if (value) {
			v = 1
		}
		if ((p$ as TCompactProtocol).booleanFieldPending) {
			// we haven't written the field header yet
			let [, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).writeFieldBeginInternal(ctx, (p$ as TCompactProtocol).booleanFieldName, 2, (p$ as TCompactProtocol).booleanFieldId, v) : TCompactProtocol.prototype.writeFieldBeginInternal.call(p, ctx, (p$ as TCompactProtocol).booleanFieldName, 2, (p$ as TCompactProtocol).booleanFieldId, v));
			;(p$ as TCompactProtocol).booleanFieldPending = false
			return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
		}
		// we're not part of a field, so just write the value.
		let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).writeByteDirect(v) : TCompactProtocol.prototype.writeByteDirect.call(p, v))
		return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
	}

	public async WriteByte(ctx: context.Context | null, value: number): globalThis.Promise<$.GoError> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).writeByteDirect($.uint(value, 8)) : TCompactProtocol.prototype.writeByteDirect.call(p, $.uint(value, 8)))
		return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
	}

	public async WriteDouble(ctx: context.Context | null, value: number): globalThis.Promise<$.GoError> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		const p$: TCompactProtocol = p == null ? $.pointerTarget<TCompactProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TCompactProtocol>(p)
		let buf: $.Slice<number> = $.goSlice((p$ as TCompactProtocol).buffer, 0, 8)
		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).PutUint64(buf, math.Float64bits(value))
		let [, err] = await $.pointerValue<Exclude<__goscript_transport.TRichTransport, null>>((p$ as TCompactProtocol).trans).Write(buf)
		return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
	}

	public async WriteFieldBegin(ctx: context.Context | null, name: string, typeId: __goscript__type.TType, id: number): globalThis.Promise<$.GoError> {
		let p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		const p$: TCompactProtocol = p == null ? $.pointerTarget<TCompactProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TCompactProtocol>(p)
		if (typeId == 2) {
			// we want to possibly include the value, so we'll wait.
			let __goscriptAssign0_0: string = name
			let __goscriptAssign0_1: number = id
			let __goscriptAssign0_2: boolean = true;
			;(p$ as TCompactProtocol).booleanFieldName = __goscriptAssign0_0;
			;(p$ as TCompactProtocol).booleanFieldId = __goscriptAssign0_1;
			;(p$ as TCompactProtocol).booleanFieldPending = __goscriptAssign0_2
			return null
		}
		let [, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).writeFieldBeginInternal(ctx, name, typeId, id, 0xFF) : TCompactProtocol.prototype.writeFieldBeginInternal.call(p, ctx, name, typeId, id, 0xFF))
		return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
	}

	public WriteFieldEnd(ctx: context.Context | null): $.GoError {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return null
	}

	public async WriteFieldStop(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).writeByteDirect(0) : TCompactProtocol.prototype.writeByteDirect.call(p, 0))
		return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
	}

	public async WriteI16(ctx: context.Context | null, value: number): globalThis.Promise<$.GoError> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let [, err] = await TCompactProtocol.prototype.writeVarint32.call(p, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).int32ToZigzag($.int(value, 32)) : TCompactProtocol.prototype.int32ToZigzag.call(p, $.int(value, 32))))
		return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
	}

	public async WriteI32(ctx: context.Context | null, value: number): globalThis.Promise<$.GoError> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let [, err] = await TCompactProtocol.prototype.writeVarint32.call(p, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).int32ToZigzag(value) : TCompactProtocol.prototype.int32ToZigzag.call(p, value)))
		return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
	}

	public async WriteI64(ctx: context.Context | null, value: bigint): globalThis.Promise<$.GoError> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let [, err] = await TCompactProtocol.prototype.writeVarint64.call(p, (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).int64ToZigzag(value) : TCompactProtocol.prototype.int64ToZigzag.call(p, value)))
		return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
	}

	public async WriteListBegin(ctx: context.Context | null, elemType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let [, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).writeCollectionBegin(elemType, size) : TCompactProtocol.prototype.writeCollectionBegin.call(p, elemType, size))
		return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
	}

	public WriteListEnd(ctx: context.Context | null): $.GoError {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return null
	}

	public async WriteMapBegin(ctx: context.Context | null, keyType: __goscript__type.TType, valueType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		if (size == 0) {
			let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).writeByteDirect(0) : TCompactProtocol.prototype.writeByteDirect.call(p, 0))
			return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
		}
		let [, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).writeVarint32($.int(size, 32)) : TCompactProtocol.prototype.writeVarint32.call(p, $.int(size, 32)))
		if (err != null) {
			return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
		}
		err = await TCompactProtocol.prototype.writeByteDirect.call(p, $.uint(((($.uint((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).getCompactType(keyType) : TCompactProtocol.prototype.getCompactType.call(p, keyType)), 8) << 4) & 0xff)) | $.uint((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).getCompactType(valueType) : TCompactProtocol.prototype.getCompactType.call(p, valueType)), 8), 8))
		return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
	}

	public WriteMapEnd(ctx: context.Context | null): $.GoError {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return null
	}

	public async WriteMessageBegin(ctx: context.Context | null, name: string, typeId: __goscript_messagetype.TMessageType, seqid: number): globalThis.Promise<$.GoError> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).writeByteDirect(130) : TCompactProtocol.prototype.writeByteDirect.call(p, 130))
		if (err != null) {
			return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
		}
		err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).writeByteDirect($.uint((1 & 31) | (((($.uint(typeId, 8) << 5) & 0xff)) & 224), 8)) : TCompactProtocol.prototype.writeByteDirect.call(p, $.uint((1 & 31) | (((($.uint(typeId, 8) << 5) & 0xff)) & 224), 8)))
		if (err != null) {
			return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
		}
		let __goscriptTuple17: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).writeVarint32(seqid) : TCompactProtocol.prototype.writeVarint32.call(p, seqid))
		err = __goscriptTuple17[1]
		if (err != null) {
			return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
		}
		let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).WriteString(ctx, name) : TCompactProtocol.prototype.WriteString.call(p, ctx, name))
		return e
	}

	public WriteMessageEnd(ctx: context.Context | null): $.GoError {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return null
	}

	public async WriteSetBegin(ctx: context.Context | null, elemType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let [, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).writeCollectionBegin(elemType, size) : TCompactProtocol.prototype.writeCollectionBegin.call(p, elemType, size))
		return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
	}

	public WriteSetEnd(ctx: context.Context | null): $.GoError {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return null
	}

	public async WriteString(ctx: context.Context | null, value: string): globalThis.Promise<$.GoError> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let [, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).writeVarint32($.int($.stringLen(value), 32)) : TCompactProtocol.prototype.writeVarint32.call(p, $.int($.stringLen(value), 32)))
		if (e != null) {
			return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
		}
		if ($.stringLen(value) == 0) {
			return null
		}
		let __goscriptTuple18: any = await $.pointerValue<Exclude<__goscript_transport.TRichTransport, null>>($.pointerValue<TCompactProtocol>(p).trans).WriteString(value)
		e = __goscriptTuple18[1]
		return e
	}

	public WriteStructBegin(ctx: context.Context | null, name: string): $.GoError {
		let p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		const p$: TCompactProtocol = p == null ? $.pointerTarget<TCompactProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TCompactProtocol>(p);
		;(p$ as TCompactProtocol).lastField = $.appendOne((p$ as TCompactProtocol).lastField, (p$ as TCompactProtocol).lastFieldId);
		;(p$ as TCompactProtocol).lastFieldId = 0
		return null
	}

	public async WriteStructEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		let p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		const p$: TCompactProtocol = p == null ? $.pointerTarget<TCompactProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TCompactProtocol>(p)
		if ($.sliceLen((p$ as TCompactProtocol).lastField) <= 0) {
			return (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, errors.New("WriteStructEnd called without matching WriteStructBegin call before")) as $.GoError)
		}
		;(p$ as TCompactProtocol).lastFieldId = $.arrayIndex((p$ as TCompactProtocol).lastField!, $.sliceLen((p$ as TCompactProtocol).lastField) - 1);
		;(p$ as TCompactProtocol).lastField = $.goSlice((p$ as TCompactProtocol).lastField, undefined, $.sliceLen((p$ as TCompactProtocol).lastField) - 1)
		return null
	}

	public bytesToUint64(b: $.Slice<number>): bigint {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.LittleEndian))).Uint64(b)
	}

	public getCompactType(t: __goscript__type.TType): tCompactType {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return $.mapGet<__goscript__type.TType, tCompactType, tCompactType>(ttypeToCompactType, t, 0)[0]
	}

	public async getTType(t: tCompactType): globalThis.Promise<[__goscript__type.TType, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		switch ($.uint(t, 8) & 0x0f) {
			case 0:
			{
				return [0, null]
				break
			}
			case 2:
			case 1:
			{
				return [2, null]
				break
			}
			case 3:
			{
				return [3, null]
				break
			}
			case 4:
			{
				return [6, null]
				break
			}
			case 5:
			{
				return [8, null]
				break
			}
			case 6:
			{
				return [10, null]
				break
			}
			case 7:
			{
				return [4, null]
				break
			}
			case 8:
			{
				return [11, null]
				break
			}
			case 9:
			{
				return [15, null]
				break
			}
			case 10:
			{
				return [14, null]
				break
			}
			case 11:
			{
				return [13, null]
				break
			}
			case 12:
			{
				return [12, null]
				break
			}
		}
		return [0, (await __goscript_protocol_exception.NewTProtocolException(fmt.Errorf("don't know what type: %v", $.namedValueInterfaceValue<any>(t & 0x0f, "thrift.tCompactType", {}, /* @__PURE__ */ $.basicType("uint8", "thrift.tCompactType")))) as $.GoError)]
	}

	public int32ToZigzag(n: number): number {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return $.int((n << 1) ^ (n >> 31), 32)
	}

	public int64ToZigzag(l: bigint): bigint {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return $.int64Xor(($.int64Shl(l, 1n)), ($.int64Shr(l, 63n)))
	}

	public isBoolType(b: number): boolean {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return ($.uint((b & 0x0f), 8) == 1) || ($.uint((b & 0x0f), 8) == 2)
	}

	public async readByteDirect(): globalThis.Promise<[number, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_transport.TRichTransport, null>>($.pointerValue<TCompactProtocol>(p).trans).ReadByte()
	}

	public async readVarint32(): globalThis.Promise<[number, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		// if the wire contains the right stuff, this will just truncate the i64 we
		// read and get us the right sign.
		let [v, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).readVarint64() : TCompactProtocol.prototype.readVarint64.call(p))
		return [$.int(v, 32), err]
	}

	public async readVarint64(): globalThis.Promise<[bigint, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let shift = 0
		let result = 0n
		while (true) {
			let [b, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).readByteDirect() : TCompactProtocol.prototype.readByteDirect.call(p))
			if (err != null) {
				return [0n, err]
			}
			result = $.int64Or(result, $.int64Shl($.int64(b & 0x7f), shift))
			if ($.uint((b & 0x80), 8) != 0x80) {
				break
			}
			shift = $.uint($.uint64Add(shift, 7), 64)
		}
		return [result, null]
	}

	public async writeByteDirect(b: number): globalThis.Promise<$.GoError> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_transport.TRichTransport, null>>($.pointerValue<TCompactProtocol>(p).trans).WriteByte(b)
	}

	public async writeCollectionBegin(elemType: __goscript__type.TType, size: number): globalThis.Promise<[number, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		if (size <= 14) {
			return [1, await TCompactProtocol.prototype.writeByteDirect.call(p, $.uint($.int(size << 4, 32) | $.int((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).getCompactType(elemType) : TCompactProtocol.prototype.getCompactType.call(p, elemType)), 32), 8))]
		}
		let err = await TCompactProtocol.prototype.writeByteDirect.call(p, $.uint(0xf0 | $.uint((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).getCompactType(elemType) : TCompactProtocol.prototype.getCompactType.call(p, elemType)), 8), 8))
		if (err != null) {
			return [0, err]
		}
		let __goscriptTuple19: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).writeVarint32($.int(size, 32)) : TCompactProtocol.prototype.writeVarint32.call(p, $.int(size, 32)))
		let m = __goscriptTuple19[0]
		err = __goscriptTuple19[1]
		return [1 + m, err]
	}

	public async writeFieldBeginInternal(ctx: context.Context | null, name: string, typeId: __goscript__type.TType, id: number, typeOverride: number): globalThis.Promise<[number, $.GoError]> {
		let p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		const p$: TCompactProtocol = p == null ? $.pointerTarget<TCompactProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TCompactProtocol>(p)
		// short lastField = lastField_.pop();

		// if there's a type override, use that.
		let typeToWrite: number = 0
		if (typeOverride == 0xFF) {
			typeToWrite = $.uint((p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).getCompactType(typeId) : TCompactProtocol.prototype.getCompactType.call(p, typeId)), 8)
		} else {
			typeToWrite = typeOverride
		}
		// check if we can use delta encoding for the field id
		let fieldId = $.int(id)
		let written = 0
		if ((fieldId > (p$ as TCompactProtocol).lastFieldId) && ((fieldId - (p$ as TCompactProtocol).lastFieldId) <= 15)) {
			// write them together
			let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).writeByteDirect($.uint($.uint((fieldId - (p$ as TCompactProtocol).lastFieldId) << 4, 8) | typeToWrite, 8)) : TCompactProtocol.prototype.writeByteDirect.call(p, $.uint($.uint((fieldId - (p$ as TCompactProtocol).lastFieldId) << 4, 8) | typeToWrite, 8)))
			if (err != null) {
				return [0, err]
			}
		} else {
			// write them separate
			let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).writeByteDirect(typeToWrite) : TCompactProtocol.prototype.writeByteDirect.call(p, typeToWrite))
			if (err != null) {
				return [0, err]
			}
			err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TCompactProtocol).WriteI16(ctx, id) : TCompactProtocol.prototype.WriteI16.call(p, ctx, id))
			written = 3
			if (err != null) {
				return [0, err]
			}
		}

		;(p$ as TCompactProtocol).lastFieldId = fieldId
		return [written, null]
	}

	public async writeVarint32(n: number): globalThis.Promise<[number, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		const p$: TCompactProtocol = p == null ? $.pointerTarget<TCompactProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TCompactProtocol>(p)
		let i32buf: $.Slice<number> = $.goSlice((p$ as TCompactProtocol).buffer, 0, 5)
		let idx = 0
		for (let __goscriptSliceWindow0 = $.sliceRange(i32buf); true; ) {
			if ($.int((n & ~0x7F), 32) == 0) {
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, idx)] = $.uint(n, 8)
				idx++
				// p.writeByteDirect(byte(n));
				break
			} else {
				;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, idx)] = $.uint((n & 0x7F) | 0x80, 8)
				idx++
				// p.writeByteDirect(byte(((n & 0x7F) | 0x80)));
				let u: number = $.uint(n, 32)
				n = $.int($.uintShr(u, 7, 32), 32)
			}
		}
		return $.pointerValue<Exclude<__goscript_transport.TRichTransport, null>>((p$ as TCompactProtocol).trans).Write($.goSlice(i32buf, 0, idx))
	}

	public async writeVarint64(n: bigint): globalThis.Promise<[number, $.GoError]> {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		const p$: TCompactProtocol = p == null ? $.pointerTarget<TCompactProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TCompactProtocol>(p)
		let varint64out: $.Slice<number> = $.goSlice((p$ as TCompactProtocol).buffer, 0, 10)
		let idx = 0
		for (let __goscriptSliceWindow1 = $.sliceRange(varint64out); true; ) {
			if (($.int64And(n, -128n)) == 0n) {
				;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, idx)] = $.uint(n, 8)
				idx++
				break
			} else {
				;(__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, idx)] = $.uint($.int64Or(($.int64And(n, 127n)), 128n), 8)
				idx++
				let u: bigint = $.uint64(n)
				n = $.int64($.uint64Shr(u, 7n))
			}
		}
		return $.pointerValue<Exclude<__goscript_transport.TRichTransport, null>>((p$ as TCompactProtocol).trans).Write($.goSlice(varint64out, 0, idx))
	}

	public zigzagToInt32(n: number): number {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let u = $.uint(n, 32)
		return $.int($.int($.uintShr(u, 1, 32), 32) ^ -(n & 1), 32)
	}

	public zigzagToInt64(n: bigint): bigint {
		const p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = this;
		let u = $.uint64(n)
		return $.int64Xor($.int64($.uint64Shr(u, 1n)), -($.int64And(n, 1n)))
	}

	static __typeInfo = $.registerStructType(
		"thrift.TCompactProtocol",
		() => new TCompactProtocol(),
		() => [$.methodSignature("Flush", [["ctx", "context.Context"]], [["err", "error"]], true), $.methodSignature("ReadBinary", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("ReadBool", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]], true), $.methodSignature("ReadByte", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("int8"), "error"], true), $.methodSignature("ReadDouble", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("float64")], ["err", "error"]], true), $.methodSignature("ReadFieldBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["id", /* @__PURE__ */ $.basicType("int16")], ["err", "error"]], true), $.methodSignature("ReadFieldEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadI16", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int16")], ["err", "error"]], true), $.methodSignature("ReadI32", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int32")], ["err", "error"]], true), $.methodSignature("ReadI64", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]], true), $.methodSignature("ReadListBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ReadListEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadMapBegin", [["ctx", "context.Context"]], [["keyType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["valueType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ReadMapEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadMessageBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqId", /* @__PURE__ */ $.basicType("int32")], ["err", "error"]], true), $.methodSignature("ReadMessageEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadSetBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ReadSetEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadString", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("ReadStructBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("ReadStructEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("SetTConfiguration", [["conf", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true), $.methodSignature("Skip", [["ctx", "context.Context"], ["fieldType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")]], [["err", "error"]], true), $.methodSignature("Transport", [], ["thrift.TTransport"], true), $.methodSignature("WriteBinary", [["ctx", "context.Context"], ["bin", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("WriteBool", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("WriteByte", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int8")]], ["error"], true), $.methodSignature("WriteDouble", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("float64")]], ["error"], true), $.methodSignature("WriteFieldBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["id", /* @__PURE__ */ $.basicType("int16")]], ["error"], true), $.methodSignature("WriteFieldEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteFieldStop", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteI16", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int16")]], ["error"], true), $.methodSignature("WriteI32", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("WriteI64", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int64")]], ["error"], true), $.methodSignature("WriteListBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteListEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteMapBegin", [["ctx", "context.Context"], ["keyType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["valueType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteMapEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteMessageBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqid", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("WriteMessageEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteSetBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteSetEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteString", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("WriteStructBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("WriteStructEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("bytesToUint64", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("getCompactType", [["t", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")]], [/* @__PURE__ */ $.basicType("uint8", "thrift.tCompactType")], true), $.methodSignature("getTType", [["t", /* @__PURE__ */ $.basicType("uint8", "thrift.tCompactType")]], [/* @__PURE__ */ $.basicType("uint8", "thrift.TType"), "error"], true), $.methodSignature("int32ToZigzag", [["n", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("int64ToZigzag", [["l", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("int64")], true), $.methodSignature("isBoolType", [["b", /* @__PURE__ */ $.basicType("uint8")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("readByteDirect", [], [/* @__PURE__ */ $.basicType("uint8"), "error"], true), $.methodSignature("readVarint32", [], [/* @__PURE__ */ $.basicType("int32"), "error"], true), $.methodSignature("readVarint64", [], [/* @__PURE__ */ $.basicType("int64"), "error"], true), $.methodSignature("writeByteDirect", [["b", /* @__PURE__ */ $.basicType("uint8")]], ["error"], true), $.methodSignature("writeCollectionBegin", [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("writeFieldBeginInternal", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["id", /* @__PURE__ */ $.basicType("int16")], ["typeOverride", /* @__PURE__ */ $.basicType("uint8")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("writeVarint32", [["n", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("writeVarint64", [["n", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("zigzagToInt32", [["n", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("zigzagToInt64", [["n", /* @__PURE__ */ $.basicType("int64")]], [/* @__PURE__ */ $.basicType("int64")], true)],
		TCompactProtocol,
		() => [/* @__PURE__ */ $.structField("trans", "thrift.TRichTransport", [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("origTransport", "thrift.TTransport", [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration"), [2], 32, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("lastField", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int")), [3], 40, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("lastFieldId", /* @__PURE__ */ $.basicType("int"), [4], 64, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("booleanFieldName", /* @__PURE__ */ $.basicType("string"), [5], 72, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("booleanFieldId", /* @__PURE__ */ $.basicType("int16"), [6], 88, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("booleanFieldPending", /* @__PURE__ */ $.basicType("bool"), [7], 90, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("boolValue", /* @__PURE__ */ $.basicType("bool"), [8], 91, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("boolValueIsNotNull", /* @__PURE__ */ $.basicType("bool"), [9], 92, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("buffer", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64), [10], 93, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export const COMPACT_PROTOCOL_ID: number = 130

export const COMPACT_VERSION: number = 1

export const COMPACT_VERSION_MASK: number = 31

export const COMPACT_TYPE_MASK: number = 224

export const COMPACT_TYPE_BITS: number = 7

export const COMPACT_TYPE_SHIFT_AMOUNT: number = 5

export const COMPACT_BOOLEAN_TRUE: number = 1

export const COMPACT_BOOLEAN_FALSE: number = 2

export const COMPACT_BYTE: number = 3

export const COMPACT_I16: number = 4

export const COMPACT_I32: number = 5

export const COMPACT_I64: number = 6

export const COMPACT_DOUBLE: number = 7

export const COMPACT_BINARY: number = 8

export const COMPACT_LIST: number = 9

export const COMPACT_SET: number = 10

export const COMPACT_MAP: number = 11

export const COMPACT_STRUCT: number = 12

export let ttypeToCompactType: globalThis.Map<__goscript__type.TType, tCompactType> | null = null! as globalThis.Map<__goscript__type.TType, tCompactType> | null

export function __goscript_set_ttypeToCompactType(__goscriptValue: globalThis.Map<__goscript__type.TType, tCompactType> | null): void {
	ttypeToCompactType = __goscriptValue
}

function __goscriptInit0(): void {
	ttypeToCompactType = $.makeMap<__goscript__type.TType, tCompactType>([[0, 0], [2, 1], [3, 3], [6, 4], [8, 5], [10, 6], [4, 7], [11, 8], [15, 9], [14, 10], [13, 11], [12, 12]])
}

export function NewTCompactProtocolFactory(): TCompactProtocolFactory | $.VarRef<TCompactProtocolFactory> | null {
	return NewTCompactProtocolFactoryConf(new __goscript_configuration.TConfiguration({noPropagation: true}))
}

export function NewTCompactProtocolFactoryConf(conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): TCompactProtocolFactory | $.VarRef<TCompactProtocolFactory> | null {
	return new TCompactProtocolFactory({cfg: conf})
}

export async function NewTCompactProtocol(trans: __goscript_transport.TTransport | null): globalThis.Promise<TCompactProtocol | $.VarRef<TCompactProtocol> | null> {
	return NewTCompactProtocolConf(trans, new __goscript_configuration.TConfiguration({noPropagation: true}))
}

export async function NewTCompactProtocolConf(trans: __goscript_transport.TTransport | null, conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<TCompactProtocol | $.VarRef<TCompactProtocol> | null> {
	await __goscript_configuration.PropagateTConfiguration((trans as any), conf)
	let p: TCompactProtocol | $.VarRef<TCompactProtocol> | null = new TCompactProtocol({origTransport: trans, cfg: conf})
	let p$: TCompactProtocol = p == null ? $.pointerTarget<TCompactProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TCompactProtocol>(p)
	{
		let [et, ok] = $.typeAssertTuple<__goscript_transport.TRichTransport | null>(trans, "thrift.TRichTransport")
		if (ok) {
			;(p$ as TCompactProtocol).trans = et
		} else {
			;(p$ as TCompactProtocol).trans = $.interfaceValue<__goscript_transport.TRichTransport | null>(__goscript_rich_transport.NewTRichTransport(trans), "*thrift.RichTransport", /* @__PURE__ */ $.pointerType("thrift.RichTransport"))
		}
	}

	return p
}

var __goscriptAwait: any

export { __goscriptInit0 }
