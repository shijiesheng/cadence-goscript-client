// Generated file based on debug_protocol.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import type * as io from "@goscript/io/index.js"

import type * as log from "@goscript/log/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript__type from "./type.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import * as __goscript_logger from "./logger.gs.ts"

import * as __goscript_messagetype from "./messagetype.gs.ts"

import * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_protocol_factory from "./protocol_factory.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/time/index.js"
import "./type.gs.ts"
import "./configuration.gs.ts"
import "./header_transport.gs.ts"
import "./logger.gs.ts"
import "./messagetype.gs.ts"
import "./protocol.gs.ts"
import "./protocol_factory.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TDebugProtocol", "thrift.TDebugProtocolFactory"])

export class TDebugProtocol {
	// Required. The actual TProtocol to do the read/write.
	public get Delegate(): __goscript_protocol.TProtocol | null {
		return this._fields.Delegate
	}

	public set Delegate(value: __goscript_protocol.TProtocol | null) {
		this._fields.Delegate = value
	}

	// Optional. The logger and prefix to log all the args/return values
	// from Delegate TProtocol calls.
	//
	// If Logger is nil, StdLogger using stdlib log package with os.Stderr
	// will be used. If disable logging is desired, set Logger to NopLogger
	// explicitly instead of leaving it as nil/unset.
	public get Logger(): ((msg: string) => void) | null {
		return this._fields.Logger
	}

	public set Logger(value: ((msg: string) => void) | null) {
		this._fields.Logger = value
	}

	public get LogPrefix(): string {
		return this._fields.LogPrefix
	}

	public set LogPrefix(value: string) {
		this._fields.LogPrefix = value
	}

	// Optional. An TProtocol to duplicate everything read/written from Delegate.
	//
	// A typical use case of this is to use TSimpleJSONProtocol wrapping
	// TMemoryBuffer in a middleware to json logging requests/responses.
	//
	// This feature is not available from TDebugProtocolFactory. In order to
	// use it you have to construct TDebugProtocol directly, or set DuplicateTo
	// field after getting a TDebugProtocol from the factory.
	public get DuplicateTo(): __goscript_protocol.TProtocol | null {
		return this._fields.DuplicateTo
	}

	public set DuplicateTo(value: __goscript_protocol.TProtocol | null) {
		this._fields.DuplicateTo = value
	}

	public _fields: {
		Delegate: __goscript_protocol.TProtocol | null
		Logger: ((msg: string) => void) | null
		LogPrefix: string
		DuplicateTo: __goscript_protocol.TProtocol | null
	}

	constructor(init?: Partial<{Delegate?: __goscript_protocol.TProtocol | null, Logger?: ((msg: string) => void) | null, LogPrefix?: string, DuplicateTo?: __goscript_protocol.TProtocol | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Delegate: init?.Delegate ?? (null! as __goscript_protocol.TProtocol | null),
			Logger: init?.Logger ?? (null! as ((msg: string) => void) | null),
			LogPrefix: init?.LogPrefix ?? ("" as string),
			DuplicateTo: init?.DuplicateTo ?? (null! as __goscript_protocol.TProtocol | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TDebugProtocol {
		return new TDebugProtocol(this, true)
	}

	public __goscriptAssign(source: TDebugProtocol): void {
		const target = this._fields
		const values = source._fields
		target.Delegate = $.assignFieldValue(target.Delegate, values.Delegate, "thrift.TProtocol")
		target.Logger = values.Logger
		target.LogPrefix = values.LogPrefix
		target.DuplicateTo = $.assignFieldValue(target.DuplicateTo, values.DuplicateTo, "thrift.TProtocol")
	}

	public async Flush(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).Flush(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sFlush() (err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sFlush() (err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).Flush(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async ReadBinary(ctx: context.Context | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let value: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let __goscriptTuple0: any = await $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadBinary(ctx)
		value = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		await TDebugProtocol.prototype.logf.call(tdp, "%sReadBinary() (value=%#v, err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.interfaceValue(value, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteBinary(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [value, err]
	}

	public async ReadBool(ctx: context.Context | null): globalThis.Promise<[boolean, $.GoError]> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let value: boolean = false
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let __goscriptTuple1: any = await $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadBool(ctx)
		value = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sReadBool() (value=%#v, err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, value, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sReadBool() (value=%#v, err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, value, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteBool(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [value, err]
	}

	public async ReadByte(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let value: number = 0
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let __goscriptTuple2: any = await $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadByte(ctx)
		value = __goscriptTuple2[0]
		err = __goscriptTuple2[1]
		await TDebugProtocol.prototype.logf.call(tdp, "%sReadByte() (value=%#v, err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.basicInterfaceValue(value, "int8"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteByte(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [value, err]
	}

	public async ReadDouble(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let value: number = 0
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let __goscriptTuple3: any = await $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadDouble(ctx)
		value = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		await TDebugProtocol.prototype.logf.call(tdp, "%sReadDouble() (value=%#v, err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.basicInterfaceValue(value, "float64"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteDouble(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [value, err]
	}

	public async ReadFieldBegin(ctx: context.Context | null): globalThis.Promise<[string, __goscript__type.TType, number, $.GoError]> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let name: string = ""
		let typeId: __goscript__type.TType = 0
		let id: number = 0
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let __goscriptTuple4: any = await $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadFieldBegin(ctx)
		name = __goscriptTuple4[0]
		typeId = __goscriptTuple4[1]
		id = __goscriptTuple4[2]
		err = __goscriptTuple4[3]
		await TDebugProtocol.prototype.logf.call(tdp, "%sReadFieldBegin() (name=%#v, typeId=%#v, id=%#v, err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, name, $.namedValueInterfaceValue<any>(typeId, "thrift.TType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(id, "int16"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteFieldBegin(ctx, name, typeId, id), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [name, typeId, id, err]
	}

	public async ReadFieldEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadFieldEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sReadFieldEnd() err=%#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sReadFieldEnd() err=%#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteFieldEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async ReadI16(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let value: number = 0
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let __goscriptTuple5: any = await $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadI16(ctx)
		value = __goscriptTuple5[0]
		err = __goscriptTuple5[1]
		await TDebugProtocol.prototype.logf.call(tdp, "%sReadI16() (value=%#v, err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.basicInterfaceValue(value, "int16"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteI16(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [value, err]
	}

	public async ReadI32(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let value: number = 0
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let __goscriptTuple6: any = await $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadI32(ctx)
		value = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		await TDebugProtocol.prototype.logf.call(tdp, "%sReadI32() (value=%#v, err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.basicInterfaceValue(value, "int32"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteI32(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [value, err]
	}

	public async ReadI64(ctx: context.Context | null): globalThis.Promise<[bigint, $.GoError]> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let value: bigint = 0n
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let __goscriptTuple7: any = await $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadI64(ctx)
		value = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		await TDebugProtocol.prototype.logf.call(tdp, "%sReadI64() (value=%#v, err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.basicInterfaceValue(value, "int64"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteI64(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [value, err]
	}

	public async ReadListBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, number, $.GoError]> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let elemType: __goscript__type.TType = 0
		let size: number = 0
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let __goscriptTuple8: any = await $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadListBegin(ctx)
		elemType = __goscriptTuple8[0]
		size = __goscriptTuple8[1]
		err = __goscriptTuple8[2]
		await TDebugProtocol.prototype.logf.call(tdp, "%sReadListBegin() (elemType=%#v, size=%#v, err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.namedValueInterfaceValue<any>(elemType, "thrift.TType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(size, "int"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteListBegin(ctx, elemType, size), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [elemType, size, err]
	}

	public async ReadListEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadListEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sReadListEnd() err=%#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sReadListEnd() err=%#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteListEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async ReadMapBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, __goscript__type.TType, number, $.GoError]> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let keyType: __goscript__type.TType = 0
		let valueType: __goscript__type.TType = 0
		let size: number = 0
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let __goscriptTuple9: any = await $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadMapBegin(ctx)
		keyType = __goscriptTuple9[0]
		valueType = __goscriptTuple9[1]
		size = __goscriptTuple9[2]
		err = __goscriptTuple9[3]
		await TDebugProtocol.prototype.logf.call(tdp, "%sReadMapBegin() (keyType=%#v, valueType=%#v, size=%#v, err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.namedValueInterfaceValue<any>(keyType, "thrift.TType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(valueType, "thrift.TType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(size, "int"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteMapBegin(ctx, keyType, valueType, size), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [keyType, valueType, size, err]
	}

	public async ReadMapEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadMapEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sReadMapEnd() err=%#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sReadMapEnd() err=%#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteMapEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async ReadMessageBegin(ctx: context.Context | null): globalThis.Promise<[string, __goscript_messagetype.TMessageType, number, $.GoError]> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let name: string = ""
		let typeId: __goscript_messagetype.TMessageType = 0
		let seqid: number = 0
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let __goscriptTuple10: any = await $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadMessageBegin(ctx)
		name = __goscriptTuple10[0]
		typeId = __goscriptTuple10[1]
		seqid = __goscriptTuple10[2]
		err = __goscriptTuple10[3]
		await TDebugProtocol.prototype.logf.call(tdp, "%sReadMessageBegin() (name=%#v, typeId=%#v, seqid=%#v, err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, name, $.namedValueInterfaceValue<any>(typeId, "thrift.TMessageType", {}, /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")), $.basicInterfaceValue(seqid, "int32"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteMessageBegin(ctx, name, typeId, seqid), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [name, typeId, seqid, err]
	}

	public async ReadMessageEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadMessageEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sReadMessageEnd() err=%#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sReadMessageEnd() err=%#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteMessageEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async ReadSetBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, number, $.GoError]> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let elemType: __goscript__type.TType = 0
		let size: number = 0
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let __goscriptTuple11: any = await $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadSetBegin(ctx)
		elemType = __goscriptTuple11[0]
		size = __goscriptTuple11[1]
		err = __goscriptTuple11[2]
		await TDebugProtocol.prototype.logf.call(tdp, "%sReadSetBegin() (elemType=%#v, size=%#v, err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.namedValueInterfaceValue<any>(elemType, "thrift.TType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(size, "int"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteSetBegin(ctx, elemType, size), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [elemType, size, err]
	}

	public async ReadSetEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadSetEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sReadSetEnd() err=%#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sReadSetEnd() err=%#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteSetEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async ReadString(ctx: context.Context | null): globalThis.Promise<[string, $.GoError]> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let value: string = ""
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let __goscriptTuple12: any = await $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadString(ctx)
		value = __goscriptTuple12[0]
		err = __goscriptTuple12[1]
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sReadString() (value=%#v, err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, value, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sReadString() (value=%#v, err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, value, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteString(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [value, err]
	}

	public async ReadStructBegin(ctx: context.Context | null): globalThis.Promise<[string, $.GoError]> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let name: string = ""
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let __goscriptTuple13: any = await $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadStructBegin(ctx)
		name = __goscriptTuple13[0]
		err = __goscriptTuple13[1]
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sReadStructBegin() (name%#v, err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, name, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sReadStructBegin() (name%#v, err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, name, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteStructBegin(ctx, name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return [name, err]
	}

	public async ReadStructEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).ReadStructEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sReadStructEnd() err=%#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sReadStructEnd() err=%#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteStructEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async SetTConfiguration(conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<void> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		await __goscript_configuration.PropagateTConfiguration(((tdp$ as TDebugProtocol).Delegate as any), conf)
		await __goscript_configuration.PropagateTConfiguration(((tdp$ as TDebugProtocol).DuplicateTo as any), conf)
	}

	public async Skip(ctx: context.Context | null, fieldType: __goscript__type.TType): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		let err: $.GoError = null! as $.GoError
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).Skip(ctx, fieldType), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await TDebugProtocol.prototype.logf.call(tdp, "%sSkip(fieldType=%#v) (err=%#v)", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.namedValueInterfaceValue<any>(fieldType, "thrift.TType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).Skip(ctx, fieldType), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async Transport(): globalThis.Promise<__goscript_transport.TTransport | null> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		return $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>($.pointerValue<TDebugProtocol>(tdp).Delegate).Transport()
	}

	public async WriteBinary(ctx: context.Context | null, value: $.Slice<number>): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteBinary(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await TDebugProtocol.prototype.logf.call(tdp, "%sWriteBinary(value=%#v) => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.interfaceValue(value, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteBinary(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteBool(ctx: context.Context | null, value: boolean): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteBool(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sWriteBool(value=%#v) => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, value, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sWriteBool(value=%#v) => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, value, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteBool(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteByte(ctx: context.Context | null, value: number): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteByte(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await TDebugProtocol.prototype.logf.call(tdp, "%sWriteByte(value=%#v) => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.basicInterfaceValue(value, "int8"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteByte(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteDouble(ctx: context.Context | null, value: number): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteDouble(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await TDebugProtocol.prototype.logf.call(tdp, "%sWriteDouble(value=%#v) => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.basicInterfaceValue(value, "float64"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteDouble(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteFieldBegin(ctx: context.Context | null, name: string, typeId: __goscript__type.TType, id: number): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteFieldBegin(ctx, name, typeId, id), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await TDebugProtocol.prototype.logf.call(tdp, "%sWriteFieldBegin(name=%#v, typeId=%#v, id%#v) => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, name, $.namedValueInterfaceValue<any>(typeId, "thrift.TType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(id, "int16"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteFieldBegin(ctx, name, typeId, id), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteFieldEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteFieldEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sWriteFieldEnd() => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sWriteFieldEnd() => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteFieldEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteFieldStop(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteFieldStop(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sWriteFieldStop() => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sWriteFieldStop() => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteFieldStop(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteI16(ctx: context.Context | null, value: number): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteI16(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await TDebugProtocol.prototype.logf.call(tdp, "%sWriteI16(value=%#v) => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.basicInterfaceValue(value, "int16"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteI16(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteI32(ctx: context.Context | null, value: number): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteI32(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await TDebugProtocol.prototype.logf.call(tdp, "%sWriteI32(value=%#v) => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.basicInterfaceValue(value, "int32"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteI32(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteI64(ctx: context.Context | null, value: bigint): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteI64(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await TDebugProtocol.prototype.logf.call(tdp, "%sWriteI64(value=%#v) => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.basicInterfaceValue(value, "int64"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteI64(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteListBegin(ctx: context.Context | null, elemType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteListBegin(ctx, elemType, size), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await TDebugProtocol.prototype.logf.call(tdp, "%sWriteListBegin(elemType=%#v, size=%#v) => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.namedValueInterfaceValue<any>(elemType, "thrift.TType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(size, "int"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteListBegin(ctx, elemType, size), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteListEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteListEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sWriteListEnd() => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sWriteListEnd() => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteListEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteMapBegin(ctx: context.Context | null, keyType: __goscript__type.TType, valueType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteMapBegin(ctx, keyType, valueType, size), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await TDebugProtocol.prototype.logf.call(tdp, "%sWriteMapBegin(keyType=%#v, valueType=%#v, size=%#v) => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.namedValueInterfaceValue<any>(keyType, "thrift.TType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(valueType, "thrift.TType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(size, "int"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteMapBegin(ctx, keyType, valueType, size), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteMapEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteMapEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sWriteMapEnd() => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sWriteMapEnd() => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteMapEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteMessageBegin(ctx: context.Context | null, name: string, typeId: __goscript_messagetype.TMessageType, seqid: number): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteMessageBegin(ctx, name, typeId, seqid), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await TDebugProtocol.prototype.logf.call(tdp, "%sWriteMessageBegin(name=%#v, typeId=%#v, seqid=%#v) => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, name, $.namedValueInterfaceValue<any>(typeId, "thrift.TMessageType", {}, /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")), $.basicInterfaceValue(seqid, "int32"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteMessageBegin(ctx, name, typeId, seqid), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteMessageEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteMessageEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sWriteMessageEnd() => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sWriteMessageEnd() => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteMessageEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteSetBegin(ctx: context.Context | null, elemType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteSetBegin(ctx, elemType, size), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await TDebugProtocol.prototype.logf.call(tdp, "%sWriteSetBegin(elemType=%#v, size=%#v) => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, $.namedValueInterfaceValue<any>(elemType, "thrift.TType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.basicInterfaceValue(size, "int"), (err as any)]))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteSetBegin(ctx, elemType, size), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteSetEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteSetEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sWriteSetEnd() => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sWriteSetEnd() => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteSetEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteString(ctx: context.Context | null, value: string): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteString(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sWriteString(value=%#v) => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, value, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sWriteString(value=%#v) => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, value, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteString(ctx, value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteStructBegin(ctx: context.Context | null, name: string): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteStructBegin(ctx, name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sWriteStructBegin(name=%#v) => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, name, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sWriteStructBegin(name=%#v) => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, name, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteStructBegin(ctx, name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async WriteStructEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		const tdp$: TDebugProtocol = tdp == null ? $.pointerTarget<TDebugProtocol>(tdp) : (tdp as any).__isVarRef === true ? (tdp as any).value : (tdp as any).__goValue === undefined ? (tdp as any) : $.pointerTarget<TDebugProtocol>(tdp)
		let err = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).Delegate).WriteStructEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (tdp !== null && (tdp as any).__isVarRef !== true && (tdp as any).__goValue === undefined ? ((tdp as any) as TDebugProtocol).logf("%sWriteStructEnd() => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])) : TDebugProtocol.prototype.logf.call(tdp, "%sWriteStructEnd() => %#v", $.arrayToSlice<any>([(tdp$ as TDebugProtocol).LogPrefix, (err as any)])))
		if ((tdp$ as TDebugProtocol).DuplicateTo != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol.TProtocol, null>>((tdp$ as TDebugProtocol).DuplicateTo).WriteStructEnd(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return err
	}

	public async logf(format: string, v: $.Slice<any>): globalThis.Promise<void> {
		const tdp: TDebugProtocol | $.VarRef<TDebugProtocol> | null = this;
		void (__goscriptAwait = (await __goscript_logger.fallbackLogger($.pointerValue<TDebugProtocol>(tdp).Logger))!(await fmt.Sprintf(format, ...(v ?? []))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	static __typeInfo = $.registerStructType(
		"thrift.TDebugProtocol",
		() => new TDebugProtocol(),
		() => [$.methodSignature("Flush", [["ctx", "context.Context"]], [["err", "error"]], true), $.methodSignature("ReadBinary", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))], ["err", "error"]], true), $.methodSignature("ReadBool", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]], true), $.methodSignature("ReadByte", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int8")], ["err", "error"]], true), $.methodSignature("ReadDouble", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("float64")], ["err", "error"]], true), $.methodSignature("ReadFieldBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["id", /* @__PURE__ */ $.basicType("int16")], ["err", "error"]], true), $.methodSignature("ReadFieldEnd", [["ctx", "context.Context"]], [["err", "error"]], true), $.methodSignature("ReadI16", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int16")], ["err", "error"]], true), $.methodSignature("ReadI32", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int32")], ["err", "error"]], true), $.methodSignature("ReadI64", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("int64")], ["err", "error"]], true), $.methodSignature("ReadListBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ReadListEnd", [["ctx", "context.Context"]], [["err", "error"]], true), $.methodSignature("ReadMapBegin", [["ctx", "context.Context"]], [["keyType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["valueType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ReadMapEnd", [["ctx", "context.Context"]], [["err", "error"]], true), $.methodSignature("ReadMessageBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqid", /* @__PURE__ */ $.basicType("int32")], ["err", "error"]], true), $.methodSignature("ReadMessageEnd", [["ctx", "context.Context"]], [["err", "error"]], true), $.methodSignature("ReadSetBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["err", "error"]], true), $.methodSignature("ReadSetEnd", [["ctx", "context.Context"]], [["err", "error"]], true), $.methodSignature("ReadString", [["ctx", "context.Context"]], [["value", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("ReadStructBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("ReadStructEnd", [["ctx", "context.Context"]], [["err", "error"]], true), $.methodSignature("SetTConfiguration", [["conf", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true), $.methodSignature("Skip", [["ctx", "context.Context"], ["fieldType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")]], [["err", "error"]], true), $.methodSignature("Transport", [], ["thrift.TTransport"], true), $.methodSignature("WriteBinary", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("WriteBool", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("WriteByte", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int8")]], ["error"], true), $.methodSignature("WriteDouble", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("float64")]], ["error"], true), $.methodSignature("WriteFieldBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["id", /* @__PURE__ */ $.basicType("int16")]], ["error"], true), $.methodSignature("WriteFieldEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteFieldStop", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteI16", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int16")]], ["error"], true), $.methodSignature("WriteI32", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("WriteI64", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("int64")]], ["error"], true), $.methodSignature("WriteListBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteListEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteMapBegin", [["ctx", "context.Context"], ["keyType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["valueType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteMapEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteMessageBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqid", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("WriteMessageEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteSetBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteSetEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteString", [["ctx", "context.Context"], ["value", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("WriteStructBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("WriteStructEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("logf", [["format", /* @__PURE__ */ $.basicType("string")], ["v", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [], true)],
		TDebugProtocol,
		() => [/* @__PURE__ */ $.structField("Delegate", "thrift.TProtocol", [0], 0, true), /* @__PURE__ */ $.structField("Logger", ({ kind: $.TypeKind.Function, name: "thrift.Logger", params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), [1], 16, true), /* @__PURE__ */ $.structField("LogPrefix", /* @__PURE__ */ $.basicType("string"), [2], 24, true), /* @__PURE__ */ $.structField("DuplicateTo", "thrift.TProtocol", [3], 40, true)]
	)
}

export class TDebugProtocolFactory {
	public get Underlying(): __goscript_protocol_factory.TProtocolFactory | null {
		return this._fields.Underlying
	}

	public set Underlying(value: __goscript_protocol_factory.TProtocolFactory | null) {
		this._fields.Underlying = value
	}

	public get LogPrefix(): string {
		return this._fields.LogPrefix
	}

	public set LogPrefix(value: string) {
		this._fields.LogPrefix = value
	}

	public get Logger(): ((msg: string) => void) | null {
		return this._fields.Logger
	}

	public set Logger(value: ((msg: string) => void) | null) {
		this._fields.Logger = value
	}

	public _fields: {
		Underlying: __goscript_protocol_factory.TProtocolFactory | null
		LogPrefix: string
		Logger: ((msg: string) => void) | null
	}

	constructor(init?: Partial<{Underlying?: __goscript_protocol_factory.TProtocolFactory | null, LogPrefix?: string, Logger?: ((msg: string) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Underlying: init?.Underlying ?? (null! as __goscript_protocol_factory.TProtocolFactory | null),
			LogPrefix: init?.LogPrefix ?? ("" as string),
			Logger: init?.Logger ?? (null! as ((msg: string) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TDebugProtocolFactory {
		return new TDebugProtocolFactory(this, true)
	}

	public __goscriptAssign(source: TDebugProtocolFactory): void {
		const target = this._fields
		const values = source._fields
		target.Underlying = $.assignFieldValue(target.Underlying, values.Underlying, "thrift.TProtocolFactory")
		target.LogPrefix = values.LogPrefix
		target.Logger = values.Logger
	}

	public async GetProtocol(trans: __goscript_transport.TTransport | null): globalThis.Promise<__goscript_protocol.TProtocol | null> {
		const t: TDebugProtocolFactory | $.VarRef<TDebugProtocolFactory> | null = this;
		const t$: TDebugProtocolFactory = t == null ? $.pointerTarget<TDebugProtocolFactory>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<TDebugProtocolFactory>(t)
		return $.interfaceValue<__goscript_protocol.TProtocol | null>((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol_factory.TProtocolFactory, null>>((t$ as TDebugProtocolFactory).Underlying).GetProtocol(trans), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); const __goscriptLiteralField1 = await __goscript_logger.fallbackLogger((t$ as TDebugProtocolFactory).Logger); return new TDebugProtocol({Delegate: __goscriptLiteralField0, LogPrefix: (t$ as TDebugProtocolFactory).LogPrefix, Logger: __goscriptLiteralField1}) })()), "*thrift.TDebugProtocol", /* @__PURE__ */ $.pointerType("thrift.TDebugProtocol"))
	}

	static __typeInfo = $.registerStructType(
		"thrift.TDebugProtocolFactory",
		() => new TDebugProtocolFactory(),
		() => [$.methodSignature("GetProtocol", [["trans", "thrift.TTransport"]], ["thrift.TProtocol"], true)],
		TDebugProtocolFactory,
		() => [/* @__PURE__ */ $.structField("Underlying", "thrift.TProtocolFactory", [0], 0, true), /* @__PURE__ */ $.structField("LogPrefix", /* @__PURE__ */ $.basicType("string"), [1], 16, true), /* @__PURE__ */ $.structField("Logger", ({ kind: $.TypeKind.Function, name: "thrift.Logger", params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), [2], 32, true)]
	)
}

export async function NewTDebugProtocolFactory(underlying: __goscript_protocol_factory.TProtocolFactory | null, logPrefix: string): globalThis.Promise<TDebugProtocolFactory | $.VarRef<TDebugProtocolFactory> | null> {
	return (await (async () => { const __goscriptLiteralField2 = await __goscript_logger.StdLogger(null); return new TDebugProtocolFactory({Underlying: underlying, LogPrefix: logPrefix, Logger: __goscriptLiteralField2}) })())
}

export function NewTDebugProtocolFactoryWithLogger(underlying: __goscript_protocol_factory.TProtocolFactory | null, logPrefix: string, logger: __goscript_logger.Logger | null): TDebugProtocolFactory | $.VarRef<TDebugProtocolFactory> | null {
	return new TDebugProtocolFactory({Underlying: underlying, LogPrefix: logPrefix, Logger: logger})
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
