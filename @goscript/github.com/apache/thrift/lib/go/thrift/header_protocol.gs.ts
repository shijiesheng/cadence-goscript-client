// Generated file based on header_protocol.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript__type from "./type.gs.ts"

import * as __goscript_application_exception from "./application_exception.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import * as __goscript_messagetype from "./messagetype.gs.ts"

import * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_protocol_factory from "./protocol_factory.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/io/index.js"
import "@goscript/time/index.js"
import "./application_exception.gs.ts"
import "./configuration.gs.ts"
import "./header_transport.gs.ts"
import "./messagetype.gs.ts"
import "./protocol.gs.ts"
import "./protocol_factory.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.THeaderProtocol", "thrift.tHeaderProtocolFactory"])

export class THeaderProtocol {
	public get transport(): __goscript_header_transport.THeaderTransport | $.VarRef<__goscript_header_transport.THeaderTransport> | null {
		return this._fields.transport
	}

	public set transport(value: __goscript_header_transport.THeaderTransport | $.VarRef<__goscript_header_transport.THeaderTransport> | null) {
		this._fields.transport = value
	}

	// Will be initialized on first read/write.
	public get protocol(): __goscript_protocol.TProtocol | null {
		return this._fields.protocol
	}

	public set protocol(value: __goscript_protocol.TProtocol | null) {
		this._fields.protocol = value
	}

	public get cfg(): __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null {
		return this._fields.cfg
	}

	public set cfg(value: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null) {
		this._fields.cfg = value
	}

	public _fields: {
		transport: __goscript_header_transport.THeaderTransport | $.VarRef<__goscript_header_transport.THeaderTransport> | null
		protocol: __goscript_protocol.TProtocol | null
		cfg: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null
	}

	constructor(init?: Partial<{transport?: __goscript_header_transport.THeaderTransport | $.VarRef<__goscript_header_transport.THeaderTransport> | null, protocol?: __goscript_protocol.TProtocol | null, cfg?: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			transport: init?.transport ?? (null! as __goscript_header_transport.THeaderTransport | $.VarRef<__goscript_header_transport.THeaderTransport> | null),
			protocol: init?.protocol ?? (null! as __goscript_protocol.TProtocol | null),
			cfg: init?.cfg ?? (null! as __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): THeaderProtocol {
		return new THeaderProtocol(this, true)
	}

	public __goscriptAssign(source: THeaderProtocol): void {
		const target = this._fields
		const values = source._fields
		target.transport = values.transport
		target.protocol = $.assignFieldValue(target.protocol, values.protocol, "thrift.TProtocol")
		target.cfg = values.cfg
	}

	public async AddTransform(transform: __goscript_header_transport.THeaderTransformID): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return __goscript_header_transport.THeaderTransport.prototype.AddTransform.call($.pointerValue<THeaderProtocol>(p).transport, transform)
	}

	public ClearWriteHeaders(): void {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		__goscript_header_transport.THeaderTransport.prototype.ClearWriteHeaders.call($.pointerValue<THeaderProtocol>(p).transport)
	}

	public async Flush(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return __goscript_header_transport.THeaderTransport.prototype.Flush.call($.pointerValue<THeaderProtocol>(p).transport, ctx)
	}

	public GetReadHeaders(): __goscript_header_transport.THeaderMap {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return __goscript_header_transport.THeaderTransport.prototype.GetReadHeaders.call($.pointerValue<THeaderProtocol>(p).transport)
	}

	public async ReadBinary(ctx: context.Context | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		let value: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadBinary(ctx)
	}

	public async ReadBool(ctx: context.Context | null): globalThis.Promise<[boolean, $.GoError]> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		let value: boolean = false
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadBool(ctx)
	}

	public async ReadByte(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		let value: number = 0
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadByte(ctx)
	}

	public async ReadDouble(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		let value: number = 0
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadDouble(ctx)
	}

	public async ReadFieldBegin(ctx: context.Context | null): globalThis.Promise<[string, __goscript__type.TType, number, $.GoError]> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		let name: string = ""
		let typeID: __goscript__type.TType = 0
		let id: number = 0
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadFieldBegin(ctx)
	}

	public async ReadFieldEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadFieldEnd(ctx)
	}

	public async ReadFrame(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return __goscript_header_transport.THeaderTransport.prototype.ReadFrame.call($.pointerValue<THeaderProtocol>(p).transport, ctx)
	}

	public async ReadI16(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		let value: number = 0
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadI16(ctx)
	}

	public async ReadI32(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		let value: number = 0
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadI32(ctx)
	}

	public async ReadI64(ctx: context.Context | null): globalThis.Promise<[bigint, $.GoError]> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		let value: bigint = 0n
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadI64(ctx)
	}

	public async ReadListBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, number, $.GoError]> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		let elemType: __goscript__type.TType = 0
		let size: number = 0
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadListBegin(ctx)
	}

	public async ReadListEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadListEnd(ctx)
	}

	public async ReadMapBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, __goscript__type.TType, number, $.GoError]> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		let keyType: __goscript__type.TType = 0
		let valueType: __goscript__type.TType = 0
		let size: number = 0
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadMapBegin(ctx)
	}

	public async ReadMapEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadMapEnd(ctx)
	}

	public async ReadMessageBegin(ctx: context.Context | null): globalThis.Promise<[string, __goscript_messagetype.TMessageType, number, $.GoError]> {
		let p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		let name: string = ""
		let typeID: __goscript_messagetype.TMessageType = 0
		let seqID: number = 0
		let err: $.GoError = null! as $.GoError
		const p$: THeaderProtocol = p == null ? $.pointerTarget<THeaderProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<THeaderProtocol>(p)
		{
			err = await __goscript_header_transport.THeaderTransport.prototype.ReadFrame.call((p$ as THeaderProtocol).transport, ctx)
			if (err != null) {
				return [name, typeID, seqID, err]
			}
		}

		let newProto: __goscript_protocol.TProtocol | null = null! as __goscript_protocol.TProtocol | null
		let __goscriptTuple0: any = await __goscript_header_transport.THeaderProtocolID_GetProtocol(__goscript_header_transport.THeaderTransport.prototype.Protocol.call((p$ as THeaderProtocol).transport), $.interfaceValue<__goscript_transport.TTransport | null>((p$ as THeaderProtocol).transport, "*thrift.THeaderTransport", /* @__PURE__ */ $.pointerType("thrift.THeaderTransport")))
		newProto = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			let tAppExc: $.VarRef<__goscript_application_exception.TApplicationException | null> = $.varRef(null! as __goscript_application_exception.TApplicationException | null)
			if (!errors.As($.pointerValueOrNil(err)!, $.interfaceValue(tAppExc, "*thrift.TApplicationException", /* @__PURE__ */ $.pointerType("thrift.TApplicationException")))) {
				return [name, typeID, seqID, err]
			}
			{
				let e = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((p$ as THeaderProtocol).protocol).WriteMessageBegin(ctx, "", 3, seqID), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (e != null) {
					return [name, typeID, seqID, err]
				}
			}
			{
				let e = (__goscriptAwait = $.pointerValue<Exclude<__goscript_application_exception.TApplicationException, null>>(tAppExc.value).Write(ctx, (p$ as THeaderProtocol).protocol), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (e != null) {
					return [name, typeID, seqID, err]
				}
			}
			{
				let e = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((p$ as THeaderProtocol).protocol).WriteMessageEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (e != null) {
					return [name, typeID, seqID, err]
				}
			}
			{
				let e = await __goscript_header_transport.THeaderTransport.prototype.Flush.call((p$ as THeaderProtocol).transport, ctx)
				if (e != null) {
					return [name, typeID, seqID, err]
				}
			}
			return [name, typeID, seqID, err]
		}
		await __goscript_configuration.PropagateTConfiguration((newProto as any), (p$ as THeaderProtocol).cfg);
		;(p$ as THeaderProtocol).protocol = newProto

		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((p$ as THeaderProtocol).protocol).ReadMessageBegin(ctx)
	}

	public async ReadMessageEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadMessageEnd(ctx)
	}

	public async ReadSetBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, number, $.GoError]> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		let elemType: __goscript__type.TType = 0
		let size: number = 0
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadSetBegin(ctx)
	}

	public async ReadSetEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadSetEnd(ctx)
	}

	public async ReadString(ctx: context.Context | null): globalThis.Promise<[string, $.GoError]> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		let value: string = ""
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadString(ctx)
	}

	public async ReadStructBegin(ctx: context.Context | null): globalThis.Promise<[string, $.GoError]> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		let name: string = ""
		let err: $.GoError = null! as $.GoError
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadStructBegin(ctx)
	}

	public async ReadStructEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).ReadStructEnd(ctx)
	}

	public async SetTConfiguration(cfg: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<void> {
		let p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		const p$: THeaderProtocol = p == null ? $.pointerTarget<THeaderProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<THeaderProtocol>(p)
		await __goscript_configuration.PropagateTConfiguration($.interfaceValue((p$ as THeaderProtocol).transport, "*thrift.THeaderTransport", /* @__PURE__ */ $.pointerType("thrift.THeaderTransport")), cfg)
		await __goscript_configuration.PropagateTConfiguration(((p$ as THeaderProtocol).protocol as any), cfg);
		;(p$ as THeaderProtocol).cfg = cfg
	}

	public SetWriteHeader(key: string, value: string): void {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		__goscript_header_transport.THeaderTransport.prototype.SetWriteHeader.call($.pointerValue<THeaderProtocol>(p).transport, key, value)
	}

	public async Skip(ctx: context.Context | null, fieldType: __goscript__type.TType): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).Skip(ctx, fieldType)
	}

	public Transport(): __goscript_transport.TTransport | null {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.interfaceValue<__goscript_transport.TTransport | null>($.pointerValue<THeaderProtocol>(p).transport, "*thrift.THeaderTransport", /* @__PURE__ */ $.pointerType("thrift.THeaderTransport"))
	}

	public async WriteBinary(ctx: context.Context | null, value: $.Slice<number>): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteBinary(ctx, value)
	}

	public async WriteBool(ctx: context.Context | null, value: boolean): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteBool(ctx, value)
	}

	public async WriteByte(ctx: context.Context | null, value: number): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteByte(ctx, value)
	}

	public async WriteDouble(ctx: context.Context | null, value: number): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteDouble(ctx, value)
	}

	public async WriteFieldBegin(ctx: context.Context | null, name: string, typeID: __goscript__type.TType, id: number): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteFieldBegin(ctx, name, typeID, id)
	}

	public async WriteFieldEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteFieldEnd(ctx)
	}

	public async WriteFieldStop(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteFieldStop(ctx)
	}

	public async WriteI16(ctx: context.Context | null, value: number): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteI16(ctx, value)
	}

	public async WriteI32(ctx: context.Context | null, value: number): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteI32(ctx, value)
	}

	public async WriteI64(ctx: context.Context | null, value: bigint): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteI64(ctx, value)
	}

	public async WriteListBegin(ctx: context.Context | null, elemType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteListBegin(ctx, elemType, size)
	}

	public async WriteListEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteListEnd(ctx)
	}

	public async WriteMapBegin(ctx: context.Context | null, keyType: __goscript__type.TType, valueType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteMapBegin(ctx, keyType, valueType, size)
	}

	public async WriteMapEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteMapEnd(ctx)
	}

	public async WriteMessageBegin(ctx: context.Context | null, name: string, typeID: __goscript_messagetype.TMessageType, seqID: number): globalThis.Promise<$.GoError> {
		let p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		const p$: THeaderProtocol = p == null ? $.pointerTarget<THeaderProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<THeaderProtocol>(p)
		let [newProto, err] = await __goscript_header_transport.THeaderProtocolID_GetProtocol(__goscript_header_transport.THeaderTransport.prototype.Protocol.call((p$ as THeaderProtocol).transport), $.interfaceValue<__goscript_transport.TTransport | null>((p$ as THeaderProtocol).transport, "*thrift.THeaderTransport", /* @__PURE__ */ $.pointerType("thrift.THeaderTransport")))
		if (err != null) {
			return err
		}
		await __goscript_configuration.PropagateTConfiguration((newProto as any), (p$ as THeaderProtocol).cfg);
		;(p$ as THeaderProtocol).protocol = newProto
		$.pointerValue<__goscript_header_transport.THeaderTransport>((p$ as THeaderProtocol).transport).SequenceID = seqID
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((p$ as THeaderProtocol).protocol).WriteMessageBegin(ctx, name, typeID, seqID)
	}

	public async WriteMessageEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		const p$: THeaderProtocol = p == null ? $.pointerTarget<THeaderProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<THeaderProtocol>(p)
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((p$ as THeaderProtocol).protocol).WriteMessageEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
		return __goscript_header_transport.THeaderTransport.prototype.Flush.call((p$ as THeaderProtocol).transport, ctx)
	}

	public async WriteSetBegin(ctx: context.Context | null, elemType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteSetBegin(ctx, elemType, size)
	}

	public async WriteSetEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteSetEnd(ctx)
	}

	public async WriteString(ctx: context.Context | null, value: string): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteString(ctx, value)
	}

	public async WriteStructBegin(ctx: context.Context | null, name: string): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteStructBegin(ctx, name)
	}

	public async WriteStructEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: THeaderProtocol | $.VarRef<THeaderProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<THeaderProtocol>(p).protocol).WriteStructEnd(ctx)
	}

	static __typeInfo = $.registerStructType(
		"thrift.THeaderProtocol",
		() => new THeaderProtocol(),
		() => [$.methodSignature("AddTransform", [["transform", /* @__PURE__ */ $.basicType("int32", "thrift.THeaderTransformID")]], ["error"], true), $.methodSignature("ClearWriteHeaders", [], [], true), $.methodSignature("Flush", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("GetReadHeaders", [], ["thrift.THeaderMap"], true), $.methodSignature("ReadBinary", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("ReadBool", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]], true), $.methodSignature("ReadByte", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int8")], ["err", "error"]], true), $.methodSignature("ReadDouble", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("float64")], ["err", "error"]], true), $.methodSignature("ReadFieldBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["typeID", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["id", /* @__PURE__ */ $.basicType("int16")], ["err", "error"]], true), $.methodSignature("ReadFieldEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadFrame", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadI16", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int16")], ["err", "error"]], true), $.methodSignature("ReadI32", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int32")], ["err", "error"]], true), $.methodSignature("ReadI64", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]], true), $.methodSignature("ReadListBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ReadListEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadMapBegin", [["ctx", "context.Context"]], [["keyType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["valueType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ReadMapEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadMessageBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["typeID", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqID", /* @__PURE__ */ $.basicType("int32")], ["err", "error"]], true), $.methodSignature("ReadMessageEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadSetBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ReadSetEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadString", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("ReadStructBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("ReadStructEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("SetTConfiguration", [["cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true), $.methodSignature("SetWriteHeader", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("Skip", [["ctx", "context.Context"], ["fieldType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")]], ["error"], true), $.methodSignature("Transport", [], ["thrift.TTransport"], true), $.methodSignature("WriteBinary", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("WriteBool", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("WriteByte", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int8")]], ["error"], true), $.methodSignature("WriteDouble", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("float64")]], ["error"], true), $.methodSignature("WriteFieldBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeID", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["id", /* @__PURE__ */ $.basicType("int16")]], ["error"], true), $.methodSignature("WriteFieldEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteFieldStop", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteI16", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int16")]], ["error"], true), $.methodSignature("WriteI32", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("WriteI64", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int64")]], ["error"], true), $.methodSignature("WriteListBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteListEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteMapBegin", [["ctx", "context.Context"], ["keyType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["valueType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteMapEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteMessageBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeID", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqID", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("WriteMessageEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteSetBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteSetEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteString", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("WriteStructBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("WriteStructEnd", [["ctx", "context.Context"]], ["error"], true)],
		THeaderProtocol,
		() => [/* @__PURE__ */ $.structField("transport", /* @__PURE__ */ $.pointerType("thrift.THeaderTransport"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("protocol", "thrift.TProtocol", [1], 8, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration"), [2], 24, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export class tHeaderProtocolFactory {
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

	public clone(): tHeaderProtocolFactory {
		return new tHeaderProtocolFactory(this, true)
	}

	public __goscriptAssign(source: tHeaderProtocolFactory): void {
		const target = this._fields
		const values = source._fields
		target.cfg = values.cfg
	}

	public async GetProtocol(trans: __goscript_transport.TTransport | null): globalThis.Promise<__goscript_protocol.TProtocol | null> {
		const f = this;
		return $.interfaceValue<__goscript_protocol.TProtocol | null>(await newTHeaderProtocolConf(trans, f.cfg), "*thrift.THeaderProtocol", /* @__PURE__ */ $.pointerType("thrift.THeaderProtocol"))
	}

	public SetTConfiguration(cfg: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): void {
		let f: tHeaderProtocolFactory | $.VarRef<tHeaderProtocolFactory> | null = this;
		$.pointerValue<tHeaderProtocolFactory>(f).cfg = cfg
	}

	static __typeInfo = $.registerStructType(
		"thrift.tHeaderProtocolFactory",
		() => new tHeaderProtocolFactory(),
		() => [$.methodSignature("GetProtocol", [["trans", "thrift.TTransport"]], ["thrift.TProtocol"]), $.methodSignature("SetTConfiguration", [["cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true)],
		tHeaderProtocolFactory,
		() => [/* @__PURE__ */ $.structField("cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export async function NewTHeaderProtocol(trans: __goscript_transport.TTransport | null): globalThis.Promise<THeaderProtocol | $.VarRef<THeaderProtocol> | null> {
	return newTHeaderProtocolConf(trans, new __goscript_configuration.TConfiguration({noPropagation: true}))
}

export async function NewTHeaderProtocolConf(trans: __goscript_transport.TTransport | null, conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<THeaderProtocol | $.VarRef<THeaderProtocol> | null> {
	return newTHeaderProtocolConf(trans, conf)
}

export async function newTHeaderProtocolConf(trans: __goscript_transport.TTransport | null, cfg: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<THeaderProtocol | $.VarRef<THeaderProtocol> | null> {
	let t: __goscript_header_transport.THeaderTransport | $.VarRef<__goscript_header_transport.THeaderTransport> | null = await __goscript_header_transport.NewTHeaderTransportConf(trans, cfg)
	let [p, ] = await __goscript_header_transport.THeaderProtocolID_GetProtocol((await __goscript_configuration.TConfiguration.prototype.GetTHeaderProtocolID.call($.pointerValue<__goscript_header_transport.THeaderTransport>(t).cfg)), $.interfaceValue<__goscript_transport.TTransport | null>(t, "*thrift.THeaderTransport", /* @__PURE__ */ $.pointerType("thrift.THeaderTransport")))
	await __goscript_configuration.PropagateTConfiguration((p as any), cfg)
	return new THeaderProtocol({transport: t, protocol: p, cfg: cfg})
}

export function NewTHeaderProtocolFactory(): __goscript_protocol_factory.TProtocolFactory | null {
	return NewTHeaderProtocolFactoryConf(new __goscript_configuration.TConfiguration({noPropagation: true}))
}

export function NewTHeaderProtocolFactoryConf(conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): __goscript_protocol_factory.TProtocolFactory | null {
	return $.interfaceValue<__goscript_protocol_factory.TProtocolFactory | null>(new tHeaderProtocolFactory({cfg: conf}, true), "thrift.tHeaderProtocolFactory", "thrift.tHeaderProtocolFactory")
}

var __goscriptAwait: any
