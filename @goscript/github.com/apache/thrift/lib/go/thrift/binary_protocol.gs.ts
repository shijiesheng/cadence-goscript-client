// Generated file based on binary_protocol.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript__type from "./type.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import * as __goscript_messagetype from "./messagetype.gs.ts"

import * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_protocol_exception from "./protocol_exception.gs.ts"

import * as __goscript_rich_transport from "./rich_transport.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"

import * as __goscript_transport_exception from "./transport_exception.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/time/index.js"
import "./type.gs.ts"
import "./configuration.gs.ts"
import "./header_transport.gs.ts"
import "./messagetype.gs.ts"
import "./protocol.gs.ts"
import "./protocol_exception.gs.ts"
import "./rich_transport.gs.ts"
import "./transport.gs.ts"
import "./transport_exception.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TBinaryProtocol", "thrift.TBinaryProtocolFactory"])

export class TBinaryProtocol {
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
		buffer: Uint8Array
	}

	constructor(init?: Partial<{trans?: __goscript_transport.TRichTransport | null, origTransport?: __goscript_transport.TTransport | null, cfg?: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null, buffer?: Uint8Array}>, __goscriptValue?: boolean) {
		this._fields = {
			trans: init?.trans ?? (null! as __goscript_transport.TRichTransport | null),
			origTransport: init?.origTransport ?? (null! as __goscript_transport.TTransport | null),
			cfg: init?.cfg ?? (null! as __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null),
			buffer: init?.buffer !== undefined ? $.cloneArrayValue(init.buffer, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64)) : $.arrayValue(new Uint8Array(64))
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TBinaryProtocol {
		return new TBinaryProtocol(this, true)
	}

	public __goscriptAssign(source: TBinaryProtocol): void {
		const target = this._fields
		const values = source._fields
		target.trans = $.assignFieldValue(target.trans, values.trans, "thrift.TRichTransport")
		target.origTransport = $.assignFieldValue(target.origTransport, values.origTransport, "thrift.TTransport")
		target.cfg = values.cfg
		target.buffer = $.assignFieldValue(target.buffer, values.buffer, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64))
	}

	public async Flush(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let err: $.GoError = null! as $.GoError
		return (await __goscript_protocol_exception.NewTProtocolException((__goscriptAwait = $.pointerValue<Exclude<__goscript_transport.TRichTransport, null>>($.pointerValue<TBinaryProtocol>(p).trans).Flush(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) as $.GoError)
	}

	public async ReadBinary(ctx: context.Context | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		const p$: TBinaryProtocol = p == null ? $.pointerTarget<TBinaryProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TBinaryProtocol>(p)
		let [size, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).ReadI32(ctx) : TBinaryProtocol.prototype.ReadI32.call(p, ctx))
		if (e != null) {
			return [null, e]
		}
		{
			let err = await __goscript_configuration.checkSizeForProtocol(size, (p$ as TBinaryProtocol).cfg)
			if (err != null) {
				return [null, err]
			}
		}

		let __goscriptTuple0: any = await safeReadBytes(size, ((p$ as TBinaryProtocol).trans as io.Reader | null))
		let buf: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		return [buf, (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)]
	}

	public async ReadBool(ctx: context.Context | null): globalThis.Promise<[boolean, $.GoError]> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let [b, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).ReadByte(ctx) : TBinaryProtocol.prototype.ReadByte.call(p, ctx))
		let v = true
		if (b != 1) {
			v = false
		}
		return [v, e]
	}

	public async ReadByte(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let [v, err] = await $.pointerValue<Exclude<__goscript_transport.TRichTransport, null>>($.pointerValue<TBinaryProtocol>(p).trans).ReadByte()
		return [$.int(v, 8), err]
	}

	public async ReadDouble(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let value: number = 0
		let err: $.GoError = null! as $.GoError
		let buf: $.Slice<number> = $.goSlice($.pointerValue<TBinaryProtocol>(p).buffer, 0, 8)
		err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).readAll(ctx, buf) : TBinaryProtocol.prototype.readAll.call(p, ctx, buf))
		value = math.Float64frombits($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint64(buf))
		return [value, err]
	}

	public async ReadFieldBegin(ctx: context.Context | null): globalThis.Promise<[string, __goscript__type.TType, number, $.GoError]> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let name: string = ""
		let typeId: __goscript__type.TType = 0
		let seqId: number = 0
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple1: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).ReadByte(ctx) : TBinaryProtocol.prototype.ReadByte.call(p, ctx))
		let t = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		typeId = $.uint(t, 8)
		if (err != null) {
			return [name, typeId, seqId, err]
		}
		if (t != 0) {
			let __goscriptTuple2: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).ReadI16(ctx) : TBinaryProtocol.prototype.ReadI16.call(p, ctx))
			seqId = __goscriptTuple2[0]
			err = __goscriptTuple2[1]
		}
		return [name, typeId, seqId, err]
	}

	public ReadFieldEnd(ctx: context.Context | null): $.GoError {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		return null
	}

	public async ReadI16(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let value: number = 0
		let err: $.GoError = null! as $.GoError
		let buf: $.Slice<number> = $.goSlice($.pointerValue<TBinaryProtocol>(p).buffer, 0, 2)
		err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).readAll(ctx, buf) : TBinaryProtocol.prototype.readAll.call(p, ctx, buf))
		value = $.int($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint16(buf), 16)
		return [value, err]
	}

	public async ReadI32(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let value: number = 0
		let err: $.GoError = null! as $.GoError
		let buf: $.Slice<number> = $.goSlice($.pointerValue<TBinaryProtocol>(p).buffer, 0, 4)
		err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).readAll(ctx, buf) : TBinaryProtocol.prototype.readAll.call(p, ctx, buf))
		value = $.int($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32(buf), 32)
		return [value, err]
	}

	public async ReadI64(ctx: context.Context | null): globalThis.Promise<[bigint, $.GoError]> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let value: bigint = 0n
		let err: $.GoError = null! as $.GoError
		let buf: $.Slice<number> = $.goSlice($.pointerValue<TBinaryProtocol>(p).buffer, 0, 8)
		err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).readAll(ctx, buf) : TBinaryProtocol.prototype.readAll.call(p, ctx, buf))
		value = $.int64($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint64(buf))
		return [value, err]
	}

	public async ReadListBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, number, $.GoError]> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let elemType: __goscript__type.TType = 0
		let size: number = 0
		let err: $.GoError = null! as $.GoError
		let [b, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).ReadByte(ctx) : TBinaryProtocol.prototype.ReadByte.call(p, ctx))
		if (e != null) {
			err = (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			return [elemType, size, err]
		}
		elemType = $.uint(b, 8)
		let __goscriptTuple3: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).ReadI32(ctx) : TBinaryProtocol.prototype.ReadI32.call(p, ctx))
		let size32 = __goscriptTuple3[0]
		e = __goscriptTuple3[1]
		if (e != null) {
			err = (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			return [elemType, size, err]
		}
		err = await __goscript_configuration.checkSizeForProtocol(size32, $.pointerValue<TBinaryProtocol>(p).cfg)
		if (err != null) {
			return [elemType, size, err]
		}
		size = $.int(size32)

		return [elemType, size, err]
	}

	public ReadListEnd(ctx: context.Context | null): $.GoError {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		return null
	}

	public async ReadMapBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, __goscript__type.TType, number, $.GoError]> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let kType: __goscript__type.TType = 0
		let vType: __goscript__type.TType = 0
		let size: number = 0
		let err: $.GoError = null! as $.GoError
		let [k, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).ReadByte(ctx) : TBinaryProtocol.prototype.ReadByte.call(p, ctx))
		if (e != null) {
			err = (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			return [kType, vType, size, err]
		}
		kType = $.uint(k, 8)
		let __goscriptTuple4: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).ReadByte(ctx) : TBinaryProtocol.prototype.ReadByte.call(p, ctx))
		let v = __goscriptTuple4[0]
		e = __goscriptTuple4[1]
		if (e != null) {
			err = (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			return [kType, vType, size, err]
		}
		vType = $.uint(v, 8)
		let __goscriptTuple5: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).ReadI32(ctx) : TBinaryProtocol.prototype.ReadI32.call(p, ctx))
		let size32 = __goscriptTuple5[0]
		e = __goscriptTuple5[1]
		if (e != null) {
			err = (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			return [kType, vType, size, err]
		}
		err = await __goscript_configuration.checkSizeForProtocol(size32, $.pointerValue<TBinaryProtocol>(p).cfg)
		if (err != null) {
			return [kType, vType, size, err]
		}
		size = $.int(size32)
		return [kType, vType, size, null]
	}

	public ReadMapEnd(ctx: context.Context | null): $.GoError {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		return null
	}

	public async ReadMessageBegin(ctx: context.Context | null): globalThis.Promise<[string, __goscript_messagetype.TMessageType, number, $.GoError]> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let name: string = ""
		let typeId: __goscript_messagetype.TMessageType = 0
		let seqId: number = 0
		let err: $.GoError = null! as $.GoError
		let [size, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).ReadI32(ctx) : TBinaryProtocol.prototype.ReadI32.call(p, ctx))
		if (e != null) {
			return ["", typeId, 0, (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)]
		}
		if (size < 0) {
			typeId = $.int(size & 0x0ff, 32)
			let version = $.int64($.int64And($.int64(size), 4294901760n))
			if (version != 2147549184n) {
				return [name, typeId, seqId, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(4, fmt.Errorf("Bad version in ReadMessageBegin")) as $.GoError)]
			}
			let __goscriptTuple6: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).ReadString(ctx) : TBinaryProtocol.prototype.ReadString.call(p, ctx))
			name = __goscriptTuple6[0]
			e = __goscriptTuple6[1]
			if (e != null) {
				return [name, typeId, seqId, (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)]
			}
			let __goscriptTuple7: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).ReadI32(ctx) : TBinaryProtocol.prototype.ReadI32.call(p, ctx))
			seqId = __goscriptTuple7[0]
			e = __goscriptTuple7[1]
			if (e != null) {
				return [name, typeId, seqId, (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)]
			}
			return [name, typeId, seqId, null]
		}
		if (__goscript_configuration.TConfiguration.prototype.GetTBinaryStrictRead.call($.pointerValue<TBinaryProtocol>(p).cfg)) {
			return [name, typeId, seqId, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(4, fmt.Errorf("Missing version in ReadMessageBegin")) as $.GoError)]
		}
		let __goscriptTuple8: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).readStringBody(size) : TBinaryProtocol.prototype.readStringBody.call(p, size))
		name = __goscriptTuple8[0]
		let e2 = __goscriptTuple8[1]
		if (e2 != null) {
			return [name, typeId, seqId, e2]
		}
		let [b, e3] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).ReadByte(ctx) : TBinaryProtocol.prototype.ReadByte.call(p, ctx))
		if (e3 != null) {
			return [name, typeId, seqId, e3]
		}
		typeId = $.int(b, 32)
		let __goscriptTuple9: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).ReadI32(ctx) : TBinaryProtocol.prototype.ReadI32.call(p, ctx))
		seqId = __goscriptTuple9[0]
		let e4 = __goscriptTuple9[1]
		if (e4 != null) {
			return [name, typeId, seqId, e4]
		}
		return [name, typeId, seqId, null]
	}

	public ReadMessageEnd(ctx: context.Context | null): $.GoError {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		return null
	}

	public async ReadSetBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, number, $.GoError]> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let elemType: __goscript__type.TType = 0
		let size: number = 0
		let err: $.GoError = null! as $.GoError
		let [b, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).ReadByte(ctx) : TBinaryProtocol.prototype.ReadByte.call(p, ctx))
		if (e != null) {
			err = (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			return [elemType, size, err]
		}
		elemType = $.uint(b, 8)
		let __goscriptTuple10: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).ReadI32(ctx) : TBinaryProtocol.prototype.ReadI32.call(p, ctx))
		let size32 = __goscriptTuple10[0]
		e = __goscriptTuple10[1]
		if (e != null) {
			err = (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			return [elemType, size, err]
		}
		err = await __goscript_configuration.checkSizeForProtocol(size32, $.pointerValue<TBinaryProtocol>(p).cfg)
		if (err != null) {
			return [elemType, size, err]
		}
		size = $.int(size32)
		return [elemType, size, null]
	}

	public ReadSetEnd(ctx: context.Context | null): $.GoError {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		return null
	}

	public async ReadString(ctx: context.Context | null): globalThis.Promise<[string, $.GoError]> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let value: string = ""
		let err: $.GoError = null! as $.GoError
		const p$: TBinaryProtocol = p == null ? $.pointerTarget<TBinaryProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TBinaryProtocol>(p)
		let [size, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).ReadI32(ctx) : TBinaryProtocol.prototype.ReadI32.call(p, ctx))
		if (e != null) {
			return ["", e]
		}
		err = await __goscript_configuration.checkSizeForProtocol(size, (p$ as TBinaryProtocol).cfg)
		if (err != null) {
			return [value, err]
		}
		if (size == 0) {
			return ["", null]
		}
		if (size < 64) {
			// Avoid allocation on small reads
			let buf: $.Slice<number> = $.goSlice((p$ as TBinaryProtocol).buffer, undefined, size)
			let [read, __goscriptShadow0] = await io.ReadFull($.pointerValueOrNil(((p$ as TBinaryProtocol).trans as io.Reader | null))!, buf)
			return [$.bytesToString($.goSlice(buf, undefined, read)), (await __goscript_protocol_exception.NewTProtocolException(__goscriptShadow0) as $.GoError)]
		}

		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).readStringBody(size) : TBinaryProtocol.prototype.readStringBody.call(p, size))
	}

	public ReadStructBegin(ctx: context.Context | null): [string, $.GoError] {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let name: string = ""
		let err: $.GoError = null! as $.GoError
		return [name, err]
	}

	public ReadStructEnd(ctx: context.Context | null): $.GoError {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		return null
	}

	public async SetTConfiguration(conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<void> {
		let p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		const p$: TBinaryProtocol = p == null ? $.pointerTarget<TBinaryProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TBinaryProtocol>(p)
		await __goscript_configuration.PropagateTConfiguration(((p$ as TBinaryProtocol).trans as any), conf)
		await __goscript_configuration.PropagateTConfiguration(((p$ as TBinaryProtocol).origTransport as any), conf);
		;(p$ as TBinaryProtocol).cfg = conf
	}

	public async Skip(ctx: context.Context | null, fieldType: __goscript__type.TType): globalThis.Promise<$.GoError> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let err: $.GoError = null! as $.GoError
		return __goscript_protocol.SkipDefaultDepth(ctx, $.interfaceValue<__goscript_protocol.TProtocol | null>(p, "*thrift.TBinaryProtocol", /* @__PURE__ */ $.pointerType("thrift.TBinaryProtocol")), fieldType)
	}

	public Transport(): __goscript_transport.TTransport | null {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		return $.pointerValue<TBinaryProtocol>(p).origTransport
	}

	public async WriteBinary(ctx: context.Context | null, value: $.Slice<number>): globalThis.Promise<$.GoError> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteI32(ctx, $.int($.sliceLen(value), 32)) : TBinaryProtocol.prototype.WriteI32.call(p, ctx, $.int($.sliceLen(value), 32)))
		if (e != null) {
			return e
		}
		let [, err] = await $.pointerValue<Exclude<__goscript_transport.TRichTransport, null>>($.pointerValue<TBinaryProtocol>(p).trans).Write(value)
		return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
	}

	public async WriteBool(ctx: context.Context | null, value: boolean): globalThis.Promise<$.GoError> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		if (value) {
			return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteByte(ctx, 1) : TBinaryProtocol.prototype.WriteByte.call(p, ctx, 1))
		}
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteByte(ctx, 0) : TBinaryProtocol.prototype.WriteByte.call(p, ctx, 0))
	}

	public async WriteByte(ctx: context.Context | null, value: number): globalThis.Promise<$.GoError> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let e = (__goscriptAwait = $.pointerValue<Exclude<__goscript_transport.TRichTransport, null>>($.pointerValue<TBinaryProtocol>(p).trans).WriteByte($.uint(value, 8)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
	}

	public async WriteDouble(ctx: context.Context | null, value: number): globalThis.Promise<$.GoError> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteI64(ctx, $.int64(math.Float64bits(value))) : TBinaryProtocol.prototype.WriteI64.call(p, ctx, $.int64(math.Float64bits(value))))
	}

	public async WriteFieldBegin(ctx: context.Context | null, name: string, typeId: __goscript__type.TType, id: number): globalThis.Promise<$.GoError> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteByte(ctx, $.int(typeId, 8)) : TBinaryProtocol.prototype.WriteByte.call(p, ctx, $.int(typeId, 8)))
		if (e != null) {
			return e
		}
		e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteI16(ctx, id) : TBinaryProtocol.prototype.WriteI16.call(p, ctx, id))
		return e
	}

	public WriteFieldEnd(ctx: context.Context | null): $.GoError {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		return null
	}

	public async WriteFieldStop(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteByte(ctx, 0) : TBinaryProtocol.prototype.WriteByte.call(p, ctx, 0))
		return e
	}

	public async WriteI16(ctx: context.Context | null, value: number): globalThis.Promise<$.GoError> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		const p$: TBinaryProtocol = p == null ? $.pointerTarget<TBinaryProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TBinaryProtocol>(p)
		let v: $.Slice<number> = $.goSlice((p$ as TBinaryProtocol).buffer, 0, 2)
		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint16(v, $.uint(value, 16))
		let [, e] = await $.pointerValue<Exclude<__goscript_transport.TRichTransport, null>>((p$ as TBinaryProtocol).trans).Write(v)
		return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
	}

	public async WriteI32(ctx: context.Context | null, value: number): globalThis.Promise<$.GoError> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		const p$: TBinaryProtocol = p == null ? $.pointerTarget<TBinaryProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TBinaryProtocol>(p)
		let v: $.Slice<number> = $.goSlice((p$ as TBinaryProtocol).buffer, 0, 4)
		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint32(v, $.uint(value, 32))
		let [, e] = await $.pointerValue<Exclude<__goscript_transport.TRichTransport, null>>((p$ as TBinaryProtocol).trans).Write(v)
		return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
	}

	public async WriteI64(ctx: context.Context | null, value: bigint): globalThis.Promise<$.GoError> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		const p$: TBinaryProtocol = p == null ? $.pointerTarget<TBinaryProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TBinaryProtocol>(p)
		let v: $.Slice<number> = $.goSlice((p$ as TBinaryProtocol).buffer, 0, 8)
		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint64(v, $.uint64(value))
		let [, err] = await $.pointerValue<Exclude<__goscript_transport.TRichTransport, null>>((p$ as TBinaryProtocol).trans).Write(v)
		return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
	}

	public async WriteListBegin(ctx: context.Context | null, elemType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteByte(ctx, $.int(elemType, 8)) : TBinaryProtocol.prototype.WriteByte.call(p, ctx, $.int(elemType, 8)))
		if (e != null) {
			return e
		}
		e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteI32(ctx, $.int(size, 32)) : TBinaryProtocol.prototype.WriteI32.call(p, ctx, $.int(size, 32)))
		return e
	}

	public WriteListEnd(ctx: context.Context | null): $.GoError {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		return null
	}

	public async WriteMapBegin(ctx: context.Context | null, keyType: __goscript__type.TType, valueType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteByte(ctx, $.int(keyType, 8)) : TBinaryProtocol.prototype.WriteByte.call(p, ctx, $.int(keyType, 8)))
		if (e != null) {
			return e
		}
		e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteByte(ctx, $.int(valueType, 8)) : TBinaryProtocol.prototype.WriteByte.call(p, ctx, $.int(valueType, 8)))
		if (e != null) {
			return e
		}
		e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteI32(ctx, $.int(size, 32)) : TBinaryProtocol.prototype.WriteI32.call(p, ctx, $.int(size, 32)))
		return e
	}

	public WriteMapEnd(ctx: context.Context | null): $.GoError {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		return null
	}

	public async WriteMessageBegin(ctx: context.Context | null, name: string, typeId: __goscript_messagetype.TMessageType, seqId: number): globalThis.Promise<$.GoError> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		if (__goscript_configuration.TConfiguration.prototype.GetTBinaryStrictWrite.call($.pointerValue<TBinaryProtocol>(p).cfg)) {
			let version = $.uint($.uint(2147549184, 32) | $.uint(typeId, 32), 32)
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteI32(ctx, $.int(version, 32)) : TBinaryProtocol.prototype.WriteI32.call(p, ctx, $.int(version, 32)))
			if (e != null) {
				return e
			}
			e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteString(ctx, name) : TBinaryProtocol.prototype.WriteString.call(p, ctx, name))
			if (e != null) {
				return e
			}
			e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteI32(ctx, seqId) : TBinaryProtocol.prototype.WriteI32.call(p, ctx, seqId))
			return e
		} else {
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteString(ctx, name) : TBinaryProtocol.prototype.WriteString.call(p, ctx, name))
			if (e != null) {
				return e
			}
			e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteByte(ctx, $.int(typeId, 8)) : TBinaryProtocol.prototype.WriteByte.call(p, ctx, $.int(typeId, 8)))
			if (e != null) {
				return e
			}
			e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteI32(ctx, seqId) : TBinaryProtocol.prototype.WriteI32.call(p, ctx, seqId))
			return e
		}
		return null
	}

	public WriteMessageEnd(ctx: context.Context | null): $.GoError {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		return null
	}

	public async WriteSetBegin(ctx: context.Context | null, elemType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteByte(ctx, $.int(elemType, 8)) : TBinaryProtocol.prototype.WriteByte.call(p, ctx, $.int(elemType, 8)))
		if (e != null) {
			return e
		}
		e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteI32(ctx, $.int(size, 32)) : TBinaryProtocol.prototype.WriteI32.call(p, ctx, $.int(size, 32)))
		return e
	}

	public WriteSetEnd(ctx: context.Context | null): $.GoError {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		return null
	}

	public async WriteString(ctx: context.Context | null, value: string): globalThis.Promise<$.GoError> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TBinaryProtocol).WriteI32(ctx, $.int($.stringLen(value), 32)) : TBinaryProtocol.prototype.WriteI32.call(p, ctx, $.int($.stringLen(value), 32)))
		if (e != null) {
			return e
		}
		let [, err] = await $.pointerValue<Exclude<__goscript_transport.TRichTransport, null>>($.pointerValue<TBinaryProtocol>(p).trans).WriteString(value)
		return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
	}

	public WriteStructBegin(ctx: context.Context | null, name: string): $.GoError {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		return null
	}

	public WriteStructEnd(ctx: context.Context | null): $.GoError {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		return null
	}

	public async readAll(ctx: context.Context | null, buf: $.Slice<number>): globalThis.Promise<$.GoError> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let err: $.GoError = null! as $.GoError
		let read: number = 0
		let [, deadlineSet] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
		while (true) {
			let __goscriptTuple11: any = await io.ReadFull($.pointerValueOrNil(($.pointerValue<TBinaryProtocol>(p).trans as io.Reader | null))!, buf)
			read = __goscriptTuple11[0]
			err = __goscriptTuple11[1]
			if (((deadlineSet && (read == 0)) && await __goscript_transport_exception.isTimeoutError(err)) && ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null)) {
				// This is I/O timeout without anything read,
				// and we still have time left, keep retrying.
				continue
			}
			// For anything else, don't retry
			break
		}
		return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
	}

	public async readStringBody(size: number): globalThis.Promise<[string, $.GoError]> {
		const p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = this;
		let value: string = ""
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple12: any = await safeReadBytes(size, ($.pointerValue<TBinaryProtocol>(p).trans as io.Reader | null))
		let buf: $.Slice<number> = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		return [$.bytesToString(buf), (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)]
	}

	static __typeInfo = $.registerStructType(
		"thrift.TBinaryProtocol",
		() => new TBinaryProtocol(),
		() => [$.methodSignature("Flush", [["ctx", "context.Context"]], [["err", "error"]], true), $.methodSignature("ReadBinary", [["ctx", "context.Context"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("ReadBool", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("ReadByte", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("int8"), "error"], true), $.methodSignature("ReadDouble", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("float64")], ["err", "error"]], true), $.methodSignature("ReadFieldBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["seqId", /* @__PURE__ */ $.basicType("int16")], ["err", "error"]], true), $.methodSignature("ReadFieldEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadI16", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int16")], ["err", "error"]], true), $.methodSignature("ReadI32", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int32")], ["err", "error"]], true), $.methodSignature("ReadI64", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]], true), $.methodSignature("ReadListBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ReadListEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadMapBegin", [["ctx", "context.Context"]], [["kType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["vType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ReadMapEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadMessageBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqId", /* @__PURE__ */ $.basicType("int32")], ["err", "error"]], true), $.methodSignature("ReadMessageEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadSetBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ReadSetEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadString", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("ReadStructBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("ReadStructEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("SetTConfiguration", [["conf", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true), $.methodSignature("Skip", [["ctx", "context.Context"], ["fieldType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")]], [["err", "error"]], true), $.methodSignature("Transport", [], ["thrift.TTransport"], true), $.methodSignature("WriteBinary", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("WriteBool", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("WriteByte", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int8")]], ["error"], true), $.methodSignature("WriteDouble", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("float64")]], ["error"], true), $.methodSignature("WriteFieldBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["id", /* @__PURE__ */ $.basicType("int16")]], ["error"], true), $.methodSignature("WriteFieldEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteFieldStop", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteI16", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int16")]], ["error"], true), $.methodSignature("WriteI32", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("WriteI64", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int64")]], ["error"], true), $.methodSignature("WriteListBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteListEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteMapBegin", [["ctx", "context.Context"], ["keyType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["valueType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteMapEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteMessageBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqId", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("WriteMessageEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteSetBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteSetEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteString", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("WriteStructBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("WriteStructEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("readAll", [["ctx", "context.Context"], ["buf", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["err", "error"]], true), $.methodSignature("readStringBody", [["size", /* @__PURE__ */ $.basicType("int32")]], [["value", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true)],
		TBinaryProtocol,
		() => [/* @__PURE__ */ $.structField("trans", "thrift.TRichTransport", [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("origTransport", "thrift.TTransport", [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration"), [2], 32, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("buffer", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 64), [3], 40, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export class TBinaryProtocolFactory {
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

	public clone(): TBinaryProtocolFactory {
		return new TBinaryProtocolFactory(this, true)
	}

	public __goscriptAssign(source: TBinaryProtocolFactory): void {
		const target = this._fields
		const values = source._fields
		target.cfg = values.cfg
	}

	public async GetProtocol(t: __goscript_transport.TTransport | null): globalThis.Promise<__goscript_protocol.TProtocol | null> {
		const p: TBinaryProtocolFactory | $.VarRef<TBinaryProtocolFactory> | null = this;
		return $.interfaceValue<__goscript_protocol.TProtocol | null>(await NewTBinaryProtocolConf(t, $.pointerValue<TBinaryProtocolFactory>(p).cfg), "*thrift.TBinaryProtocol", /* @__PURE__ */ $.pointerType("thrift.TBinaryProtocol"))
	}

	public SetTConfiguration(conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): void {
		let p: TBinaryProtocolFactory | $.VarRef<TBinaryProtocolFactory> | null = this;
		$.pointerValue<TBinaryProtocolFactory>(p).cfg = conf
	}

	static __typeInfo = $.registerStructType(
		"thrift.TBinaryProtocolFactory",
		() => new TBinaryProtocolFactory(),
		() => [$.methodSignature("GetProtocol", [["t", "thrift.TTransport"]], ["thrift.TProtocol"], true), $.methodSignature("SetTConfiguration", [["conf", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true)],
		TBinaryProtocolFactory,
		() => [/* @__PURE__ */ $.structField("cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export async function NewTBinaryProtocolTransport(t: __goscript_transport.TTransport | null): globalThis.Promise<TBinaryProtocol | $.VarRef<TBinaryProtocol> | null> {
	return NewTBinaryProtocolConf(t, new __goscript_configuration.TConfiguration({noPropagation: true}))
}

export async function NewTBinaryProtocol(t: __goscript_transport.TTransport | null, __goscriptParam0: boolean, __goscriptParam1: boolean): globalThis.Promise<TBinaryProtocol | $.VarRef<TBinaryProtocol> | null> {
	let strictRead: $.VarRef<boolean> = $.varRef(__goscriptParam0)
	let strictWrite: $.VarRef<boolean> = $.varRef(__goscriptParam1)
	return NewTBinaryProtocolConf(t, new __goscript_configuration.TConfiguration({TBinaryStrictRead: strictRead, TBinaryStrictWrite: strictWrite, noPropagation: true}))
}

export async function NewTBinaryProtocolConf(t: __goscript_transport.TTransport | null, conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<TBinaryProtocol | $.VarRef<TBinaryProtocol> | null> {
	await __goscript_configuration.PropagateTConfiguration((t as any), conf)
	let p: TBinaryProtocol | $.VarRef<TBinaryProtocol> | null = new TBinaryProtocol({origTransport: t, cfg: conf})
	let p$: TBinaryProtocol = p == null ? $.pointerTarget<TBinaryProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TBinaryProtocol>(p)
	{
		let [et, ok] = $.typeAssertTuple<__goscript_transport.TRichTransport | null>(t, "thrift.TRichTransport")
		if (ok) {
			;(p$ as TBinaryProtocol).trans = et
		} else {
			;(p$ as TBinaryProtocol).trans = $.interfaceValue<__goscript_transport.TRichTransport | null>(__goscript_rich_transport.NewTRichTransport(t), "*thrift.RichTransport", /* @__PURE__ */ $.pointerType("thrift.RichTransport"))
		}
	}
	return p
}

export function NewTBinaryProtocolFactoryDefault(): TBinaryProtocolFactory | $.VarRef<TBinaryProtocolFactory> | null {
	return NewTBinaryProtocolFactoryConf(new __goscript_configuration.TConfiguration({noPropagation: true}))
}

export function NewTBinaryProtocolFactory(__goscriptParam2: boolean, __goscriptParam3: boolean): TBinaryProtocolFactory | $.VarRef<TBinaryProtocolFactory> | null {
	let strictRead: $.VarRef<boolean> = $.varRef(__goscriptParam2)
	let strictWrite: $.VarRef<boolean> = $.varRef(__goscriptParam3)
	return NewTBinaryProtocolFactoryConf(new __goscript_configuration.TConfiguration({TBinaryStrictRead: strictRead, TBinaryStrictWrite: strictWrite, noPropagation: true}))
}

export function NewTBinaryProtocolFactoryConf(conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): TBinaryProtocolFactory | $.VarRef<TBinaryProtocolFactory> | null {
	return new TBinaryProtocolFactory({cfg: conf})
}

export async function safeReadBytes(size: number, trans: io.Reader | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
	if (size < 0) {
		return [null, null]
	}

	let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = new bytes.Buffer()
	let [, err] = await io.CopyN($.pointerValueOrNil($.interfaceValue<io.Writer | null>(buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!, $.pointerValueOrNil(trans)!, $.int64(size))
	return [bytes.Buffer.prototype.Bytes.call($.pointerValue<bytes.Buffer>(buf)), err]
}

var __goscriptAwait: any
