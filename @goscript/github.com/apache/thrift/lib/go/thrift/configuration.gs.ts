// Generated file based on configuration.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as time from "@goscript/time/index.js"

import type * as context from "@goscript/context/index.js"

import type * as io from "@goscript/io/index.js"

import type * as __goscript__type from "./type.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_protocol_exception from "./protocol_exception.gs.ts"

import * as __goscript_protocol_factory from "./protocol_factory.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"

import * as __goscript_transport_factory from "./transport_factory.gs.ts"
import "@goscript/crypto/tls/index.js"
import "@goscript/fmt/index.js"
import "@goscript/time/index.js"
import "./header_transport.gs.ts"
import "./protocol.gs.ts"
import "./protocol_exception.gs.ts"
import "./protocol_factory.gs.ts"
import "./transport.gs.ts"
import "./transport_factory.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TConfiguration", "thrift.TConfigurationSetter", "thrift.tTransportFactoryConf", "thrift.tProtocolFactoryConf"])

export type TConfigurationSetter = {
	SetTConfiguration(_p0: TConfiguration | $.VarRef<TConfiguration> | null): void
}

$.registerInterfaceType(
	"thrift.TConfigurationSetter",
	null,
	[$.methodSignature("SetTConfiguration", [/* @__PURE__ */ $.pointerType("thrift.TConfiguration")])]
);

export class TConfiguration {
	// If <= 0, DEFAULT_MAX_MESSAGE_SIZE will be used instead.
	public get MaxMessageSize(): number {
		return this._fields.MaxMessageSize
	}

	public set MaxMessageSize(value: number) {
		this._fields.MaxMessageSize = value
	}

	// If <= 0, DEFAULT_MAX_FRAME_SIZE will be used instead.
	//
	// Also if MaxMessageSize < MaxFrameSize,
	// MaxMessageSize will be used instead.
	public get MaxFrameSize(): number {
		return this._fields.MaxFrameSize
	}

	public set MaxFrameSize(value: number) {
		this._fields.MaxFrameSize = value
	}

	// Connect and socket timeouts to be used by TSocket and TSSLSocket.
	//
	// 0 means no timeout.
	//
	// If <0, DEFAULT_CONNECT_TIMEOUT and DEFAULT_SOCKET_TIMEOUT will be
	// used.
	public get ConnectTimeout(): time.Duration {
		return this._fields.ConnectTimeout
	}

	public set ConnectTimeout(value: time.Duration) {
		this._fields.ConnectTimeout = value
	}

	public get SocketTimeout(): time.Duration {
		return this._fields.SocketTimeout
	}

	public set SocketTimeout(value: time.Duration) {
		this._fields.SocketTimeout = value
	}

	// TLS config to be used by TSSLSocket.
	public get TLSConfig(): tls.Config | $.VarRef<tls.Config> | null {
		return this._fields.TLSConfig
	}

	public set TLSConfig(value: tls.Config | $.VarRef<tls.Config> | null) {
		this._fields.TLSConfig = value
	}

	// Strict read/write configurations for TBinaryProtocol.
	//
	// BoolPtr helper function is available to use literal values.
	public get TBinaryStrictRead(): $.VarRef<boolean> | null {
		return this._fields.TBinaryStrictRead
	}

	public set TBinaryStrictRead(value: $.VarRef<boolean> | null) {
		this._fields.TBinaryStrictRead = value
	}

	public get TBinaryStrictWrite(): $.VarRef<boolean> | null {
		return this._fields.TBinaryStrictWrite
	}

	public set TBinaryStrictWrite(value: $.VarRef<boolean> | null) {
		this._fields.TBinaryStrictWrite = value
	}

	// The wrapped protocol id to be used in THeader transport/protocol.
	//
	// THeaderProtocolIDPtr and THeaderProtocolIDPtrMust helper functions
	// are provided to help filling this value.
	public get THeaderProtocolID(): $.VarRef<__goscript_header_transport.THeaderProtocolID> | null {
		return this._fields.THeaderProtocolID
	}

	public set THeaderProtocolID(value: $.VarRef<__goscript_header_transport.THeaderProtocolID> | null) {
		this._fields.THeaderProtocolID = value
	}

	// Used internally by deprecated constructors, to avoid overriding
	// underlying TTransport/TProtocol's cfg by accidental propagations.
	//
	// For external users this is always false.
	public get noPropagation(): boolean {
		return this._fields.noPropagation
	}

	public set noPropagation(value: boolean) {
		this._fields.noPropagation = value
	}

	public _fields: {
		MaxMessageSize: number
		MaxFrameSize: number
		ConnectTimeout: time.Duration
		SocketTimeout: time.Duration
		TLSConfig: tls.Config | $.VarRef<tls.Config> | null
		TBinaryStrictRead: $.VarRef<boolean> | null
		TBinaryStrictWrite: $.VarRef<boolean> | null
		THeaderProtocolID: $.VarRef<__goscript_header_transport.THeaderProtocolID> | null
		noPropagation: boolean
	}

	constructor(init?: Partial<{MaxMessageSize?: number, MaxFrameSize?: number, ConnectTimeout?: time.Duration, SocketTimeout?: time.Duration, TLSConfig?: tls.Config | $.VarRef<tls.Config> | null, TBinaryStrictRead?: $.VarRef<boolean> | null, TBinaryStrictWrite?: $.VarRef<boolean> | null, THeaderProtocolID?: $.VarRef<__goscript_header_transport.THeaderProtocolID> | null, noPropagation?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			MaxMessageSize: init?.MaxMessageSize ?? (0 as number),
			MaxFrameSize: init?.MaxFrameSize ?? (0 as number),
			ConnectTimeout: init?.ConnectTimeout ?? (0n as time.Duration),
			SocketTimeout: init?.SocketTimeout ?? (0n as time.Duration),
			TLSConfig: init?.TLSConfig ?? (null! as tls.Config | $.VarRef<tls.Config> | null),
			TBinaryStrictRead: init?.TBinaryStrictRead ?? (null! as $.VarRef<boolean> | null),
			TBinaryStrictWrite: init?.TBinaryStrictWrite ?? (null! as $.VarRef<boolean> | null),
			THeaderProtocolID: init?.THeaderProtocolID ?? (null! as $.VarRef<__goscript_header_transport.THeaderProtocolID> | null),
			noPropagation: init?.noPropagation ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TConfiguration {
		return new TConfiguration(this, true)
	}

	public __goscriptAssign(source: TConfiguration): void {
		const target = this._fields
		const values = source._fields
		target.MaxMessageSize = values.MaxMessageSize
		target.MaxFrameSize = values.MaxFrameSize
		target.ConnectTimeout = values.ConnectTimeout
		target.SocketTimeout = values.SocketTimeout
		target.TLSConfig = values.TLSConfig
		target.TBinaryStrictRead = values.TBinaryStrictRead
		target.TBinaryStrictWrite = values.TBinaryStrictWrite
		target.THeaderProtocolID = values.THeaderProtocolID
		target.noPropagation = values.noPropagation
	}

	public GetConnectTimeout(): time.Duration {
		const tc: TConfiguration | $.VarRef<TConfiguration> | null = this;
		const tc$: TConfiguration = tc == null ? $.pointerTarget<TConfiguration>(tc) : (tc as any).__isVarRef === true ? (tc as any).value : (tc as any).__goValue === undefined ? (tc as any) : $.pointerTarget<TConfiguration>(tc)
		if ((tc == null) || ((tc$ as TConfiguration).ConnectTimeout < 0n)) {
			return 0n
		}
		return (tc$ as TConfiguration).ConnectTimeout
	}

	public GetMaxFrameSize(): number {
		const tc: TConfiguration | $.VarRef<TConfiguration> | null = this;
		if (tc == null) {
			return 16384000
		}
		let maxFrameSize = $.pointerValue<TConfiguration>(tc).MaxFrameSize
		if (maxFrameSize <= 0) {
			maxFrameSize = 16384000
		}
		{
			let maxMessageSize = (tc !== null && (tc as any).__isVarRef !== true && (tc as any).__goValue === undefined ? ((tc as any) as TConfiguration).GetMaxMessageSize() : TConfiguration.prototype.GetMaxMessageSize.call(tc))
			if (maxMessageSize < maxFrameSize) {
				return maxMessageSize
			}
		}
		return maxFrameSize
	}

	public GetMaxMessageSize(): number {
		const tc: TConfiguration | $.VarRef<TConfiguration> | null = this;
		const tc$: TConfiguration = tc == null ? $.pointerTarget<TConfiguration>(tc) : (tc as any).__isVarRef === true ? (tc as any).value : (tc as any).__goValue === undefined ? (tc as any) : $.pointerTarget<TConfiguration>(tc)
		if ((tc == null) || ((tc$ as TConfiguration).MaxMessageSize <= 0)) {
			return 104857600
		}
		return (tc$ as TConfiguration).MaxMessageSize
	}

	public GetSocketTimeout(): time.Duration {
		const tc: TConfiguration | $.VarRef<TConfiguration> | null = this;
		const tc$: TConfiguration = tc == null ? $.pointerTarget<TConfiguration>(tc) : (tc as any).__isVarRef === true ? (tc as any).value : (tc as any).__goValue === undefined ? (tc as any) : $.pointerTarget<TConfiguration>(tc)
		if ((tc == null) || ((tc$ as TConfiguration).SocketTimeout < 0n)) {
			return 0n
		}
		return (tc$ as TConfiguration).SocketTimeout
	}

	public GetTBinaryStrictRead(): boolean {
		const tc: TConfiguration | $.VarRef<TConfiguration> | null = this;
		const tc$: TConfiguration = tc == null ? $.pointerTarget<TConfiguration>(tc) : (tc as any).__isVarRef === true ? (tc as any).value : (tc as any).__goValue === undefined ? (tc as any) : $.pointerTarget<TConfiguration>(tc)
		if ((tc == null) || ((tc$ as TConfiguration).TBinaryStrictRead == null)) {
			return false
		}
		return $.pointerValue<boolean>((tc$ as TConfiguration).TBinaryStrictRead)
	}

	public GetTBinaryStrictWrite(): boolean {
		const tc: TConfiguration | $.VarRef<TConfiguration> | null = this;
		const tc$: TConfiguration = tc == null ? $.pointerTarget<TConfiguration>(tc) : (tc as any).__isVarRef === true ? (tc as any).value : (tc as any).__goValue === undefined ? (tc as any) : $.pointerTarget<TConfiguration>(tc)
		if ((tc == null) || ((tc$ as TConfiguration).TBinaryStrictWrite == null)) {
			return true
		}
		return $.pointerValue<boolean>((tc$ as TConfiguration).TBinaryStrictWrite)
	}

	public async GetTHeaderProtocolID(): globalThis.Promise<__goscript_header_transport.THeaderProtocolID> {
		const tc: TConfiguration | $.VarRef<TConfiguration> | null = this;
		const tc$: TConfiguration = tc == null ? $.pointerTarget<TConfiguration>(tc) : (tc as any).__isVarRef === true ? (tc as any).value : (tc as any).__goValue === undefined ? (tc as any) : $.pointerTarget<TConfiguration>(tc)
		if ((tc == null) || ((tc$ as TConfiguration).THeaderProtocolID == null)) {
			return 0
		}
		let protoID = $.pointerValue<__goscript_header_transport.THeaderProtocolID>((tc$ as TConfiguration).THeaderProtocolID)
		{
			let err = await __goscript_header_transport.THeaderProtocolID_Validate(protoID)
			if (err != null) {
				return 0
			}
		}
		return protoID
	}

	public GetTLSConfig(): tls.Config | $.VarRef<tls.Config> | null {
		const tc: TConfiguration | $.VarRef<TConfiguration> | null = this;
		if (tc == null) {
			return null
		}
		return $.pointerValue<TConfiguration>(tc).TLSConfig
	}

	static __typeInfo = $.registerStructType(
		"thrift.TConfiguration",
		() => new TConfiguration(),
		() => [$.methodSignature("GetConnectTimeout", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("GetMaxFrameSize", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetMaxMessageSize", [], [/* @__PURE__ */ $.basicType("int32")], true), $.methodSignature("GetSocketTimeout", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true), $.methodSignature("GetTBinaryStrictRead", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetTBinaryStrictWrite", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("GetTHeaderProtocolID", [], [/* @__PURE__ */ $.basicType("int32", "thrift.THeaderProtocolID")], true), $.methodSignature("GetTLSConfig", [], [/* @__PURE__ */ $.pointerType("tls.Config")], true)],
		TConfiguration,
		() => [/* @__PURE__ */ $.structField("MaxMessageSize", /* @__PURE__ */ $.basicType("int32"), [0], 0, true), /* @__PURE__ */ $.structField("MaxFrameSize", /* @__PURE__ */ $.basicType("int32"), [1], 4, true), /* @__PURE__ */ $.structField("ConnectTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 8, true), /* @__PURE__ */ $.structField("SocketTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [3], 16, true), /* @__PURE__ */ $.structField("TLSConfig", /* @__PURE__ */ $.pointerType("tls.Config"), [4], 24, true), /* @__PURE__ */ $.structField("TBinaryStrictRead", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), [5], 32, true), /* @__PURE__ */ $.structField("TBinaryStrictWrite", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("bool")), [6], 40, true), /* @__PURE__ */ $.structField("THeaderProtocolID", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int32", "thrift.THeaderProtocolID")), [7], 48, true), /* @__PURE__ */ $.structField("noPropagation", /* @__PURE__ */ $.basicType("bool"), [8], 56, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export class tTransportFactoryConf {
	public get delegate(): __goscript_transport_factory.TTransportFactory | null {
		return this._fields.delegate
	}

	public set delegate(value: __goscript_transport_factory.TTransportFactory | null) {
		this._fields.delegate = value
	}

	public get cfg(): TConfiguration | $.VarRef<TConfiguration> | null {
		return this._fields.cfg
	}

	public set cfg(value: TConfiguration | $.VarRef<TConfiguration> | null) {
		this._fields.cfg = value
	}

	public _fields: {
		delegate: __goscript_transport_factory.TTransportFactory | null
		cfg: TConfiguration | $.VarRef<TConfiguration> | null
	}

	constructor(init?: Partial<{delegate?: __goscript_transport_factory.TTransportFactory | null, cfg?: TConfiguration | $.VarRef<TConfiguration> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			delegate: init?.delegate ?? (null! as __goscript_transport_factory.TTransportFactory | null),
			cfg: init?.cfg ?? (null! as TConfiguration | $.VarRef<TConfiguration> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tTransportFactoryConf {
		return new tTransportFactoryConf(this, true)
	}

	public __goscriptAssign(source: tTransportFactoryConf): void {
		const target = this._fields
		const values = source._fields
		target.delegate = $.assignFieldValue(target.delegate, values.delegate, "thrift.TTransportFactory")
		target.cfg = values.cfg
	}

	public async GetTransport(orig: __goscript_transport.TTransport | null): globalThis.Promise<[__goscript_transport.TTransport | null, $.GoError]> {
		const f: tTransportFactoryConf | $.VarRef<tTransportFactoryConf> | null = this;
		const f$: tTransportFactoryConf = f == null ? $.pointerTarget<tTransportFactoryConf>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<tTransportFactoryConf>(f)
		let [trans, err] = await $.pointerValue<Exclude<__goscript_transport_factory.TTransportFactory, null>>((f$ as tTransportFactoryConf).delegate).GetTransport(orig)
		if (err == null) {
			await PropagateTConfiguration((orig as any), (f$ as tTransportFactoryConf).cfg)
			await PropagateTConfiguration((trans as any), (f$ as tTransportFactoryConf).cfg)
		}
		return [trans, err]
	}

	public async SetTConfiguration(cfg: TConfiguration | $.VarRef<TConfiguration> | null): globalThis.Promise<void> {
		let f: tTransportFactoryConf | $.VarRef<tTransportFactoryConf> | null = this;
		const f$: tTransportFactoryConf = f == null ? $.pointerTarget<tTransportFactoryConf>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<tTransportFactoryConf>(f)
		await PropagateTConfiguration(((f$ as tTransportFactoryConf).delegate as any), (f$ as tTransportFactoryConf).cfg);
		;(f$ as tTransportFactoryConf).cfg = cfg
	}

	static __typeInfo = $.registerStructType(
		"thrift.tTransportFactoryConf",
		() => new tTransportFactoryConf(),
		() => [$.methodSignature("GetTransport", [["orig", "thrift.TTransport"]], ["thrift.TTransport", "error"], true), $.methodSignature("SetTConfiguration", [["cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true)],
		tTransportFactoryConf,
		() => [/* @__PURE__ */ $.structField("delegate", "thrift.TTransportFactory", [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration"), [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export class tProtocolFactoryConf {
	public get delegate(): __goscript_protocol_factory.TProtocolFactory | null {
		return this._fields.delegate
	}

	public set delegate(value: __goscript_protocol_factory.TProtocolFactory | null) {
		this._fields.delegate = value
	}

	public get cfg(): TConfiguration | $.VarRef<TConfiguration> | null {
		return this._fields.cfg
	}

	public set cfg(value: TConfiguration | $.VarRef<TConfiguration> | null) {
		this._fields.cfg = value
	}

	public _fields: {
		delegate: __goscript_protocol_factory.TProtocolFactory | null
		cfg: TConfiguration | $.VarRef<TConfiguration> | null
	}

	constructor(init?: Partial<{delegate?: __goscript_protocol_factory.TProtocolFactory | null, cfg?: TConfiguration | $.VarRef<TConfiguration> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			delegate: init?.delegate ?? (null! as __goscript_protocol_factory.TProtocolFactory | null),
			cfg: init?.cfg ?? (null! as TConfiguration | $.VarRef<TConfiguration> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tProtocolFactoryConf {
		return new tProtocolFactoryConf(this, true)
	}

	public __goscriptAssign(source: tProtocolFactoryConf): void {
		const target = this._fields
		const values = source._fields
		target.delegate = $.assignFieldValue(target.delegate, values.delegate, "thrift.TProtocolFactory")
		target.cfg = values.cfg
	}

	public async GetProtocol(trans: __goscript_transport.TTransport | null): globalThis.Promise<__goscript_protocol.TProtocol | null> {
		const f: tProtocolFactoryConf | $.VarRef<tProtocolFactoryConf> | null = this;
		const f$: tProtocolFactoryConf = f == null ? $.pointerTarget<tProtocolFactoryConf>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<tProtocolFactoryConf>(f)
		let proto = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol_factory.TProtocolFactory, null>>((f$ as tProtocolFactoryConf).delegate).GetProtocol(trans), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await PropagateTConfiguration((trans as any), (f$ as tProtocolFactoryConf).cfg)
		await PropagateTConfiguration((proto as any), (f$ as tProtocolFactoryConf).cfg)
		return proto
	}

	public async SetTConfiguration(cfg: TConfiguration | $.VarRef<TConfiguration> | null): globalThis.Promise<void> {
		let f: tProtocolFactoryConf | $.VarRef<tProtocolFactoryConf> | null = this;
		const f$: tProtocolFactoryConf = f == null ? $.pointerTarget<tProtocolFactoryConf>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<tProtocolFactoryConf>(f)
		await PropagateTConfiguration(((f$ as tProtocolFactoryConf).delegate as any), (f$ as tProtocolFactoryConf).cfg);
		;(f$ as tProtocolFactoryConf).cfg = cfg
	}

	static __typeInfo = $.registerStructType(
		"thrift.tProtocolFactoryConf",
		() => new tProtocolFactoryConf(),
		() => [$.methodSignature("GetProtocol", [["trans", "thrift.TTransport"]], ["thrift.TProtocol"], true), $.methodSignature("SetTConfiguration", [["cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true)],
		tProtocolFactoryConf,
		() => [/* @__PURE__ */ $.structField("delegate", "thrift.TProtocolFactory", [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration"), [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export const DEFAULT_MAX_MESSAGE_SIZE: number = 104857600

export const DEFAULT_MAX_FRAME_SIZE: number = 16384000

export const DEFAULT_TBINARY_STRICT_READ: boolean = false

export const DEFAULT_TBINARY_STRICT_WRITE: boolean = true

export const DEFAULT_CONNECT_TIMEOUT: number = 0

export const DEFAULT_SOCKET_TIMEOUT: number = 0

export async function THeaderProtocolIDPtr(__goscriptParam0: __goscript_header_transport.THeaderProtocolID): globalThis.Promise<[$.VarRef<__goscript_header_transport.THeaderProtocolID> | null, $.GoError]> {
	let id: $.VarRef<__goscript_header_transport.THeaderProtocolID> = $.varRef(__goscriptParam0)
	let err = await __goscript_header_transport.THeaderProtocolID_Validate(id.value)
	if (err != null) {
		id.value = 0
	}
	return [id, err]
}

export async function THeaderProtocolIDPtrMust(id: __goscript_header_transport.THeaderProtocolID): globalThis.Promise<$.VarRef<__goscript_header_transport.THeaderProtocolID> | null> {
	let __goscriptTuple0: any = await THeaderProtocolIDPtr(id)
	let ptr: $.VarRef<__goscript_header_transport.THeaderProtocolID> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		$.panic((err as any))
	}
	return ptr
}

export async function PropagateTConfiguration(impl: any, cfg: TConfiguration | $.VarRef<TConfiguration> | null): globalThis.Promise<void> {
	if ((cfg == null) || $.pointerValue<TConfiguration>(cfg).noPropagation) {
		return
	}

	{
		let [setter, ok] = $.typeAssertTuple<TConfigurationSetter | null>(impl, "thrift.TConfigurationSetter")
		if (ok) {
			void (__goscriptAwait = (setter !== null && (setter as any).__isVarRef !== true && (setter as any).__goValue === undefined ? (setter as Exclude<TConfigurationSetter, null>) : $.pointerValue<Exclude<TConfigurationSetter, null>>(setter)).SetTConfiguration(cfg), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}
}

export async function checkSizeForProtocol(size: number, cfg: TConfiguration | $.VarRef<TConfiguration> | null): globalThis.Promise<$.GoError> {
	if (size < 0) {
		return (await __goscript_protocol_exception.NewTProtocolExceptionWithType(2, fmt.Errorf("negative size: %d", $.basicInterfaceValue(size, "int32"))) as $.GoError)
	}
	if (size > (cfg !== null && (cfg as any).__isVarRef !== true && (cfg as any).__goValue === undefined ? ((cfg as any) as TConfiguration).GetMaxMessageSize() : TConfiguration.prototype.GetMaxMessageSize.call(cfg))) {
		return (await __goscript_protocol_exception.NewTProtocolExceptionWithType(3, fmt.Errorf("size exceeded max allowed: %d", $.basicInterfaceValue(size, "int32"))) as $.GoError)
	}
	return null
}

export function TTransportFactoryConf(delegate: __goscript_transport_factory.TTransportFactory | null, conf: TConfiguration | $.VarRef<TConfiguration> | null): __goscript_transport_factory.TTransportFactory | null {
	return $.interfaceValue<__goscript_transport_factory.TTransportFactory | null>(new tTransportFactoryConf({delegate: delegate, cfg: conf}), "*thrift.tTransportFactoryConf", /* @__PURE__ */ $.pointerType("thrift.tTransportFactoryConf"))
}

export function TProtocolFactoryConf(delegate: __goscript_protocol_factory.TProtocolFactory | null, conf: TConfiguration | $.VarRef<TConfiguration> | null): __goscript_protocol_factory.TProtocolFactory | null {
	return $.interfaceValue<__goscript_protocol_factory.TProtocolFactory | null>(new tProtocolFactoryConf({delegate: delegate, cfg: conf}), "*thrift.tProtocolFactoryConf", /* @__PURE__ */ $.pointerType("thrift.tProtocolFactoryConf"))
}

var __goscriptAwait: any
