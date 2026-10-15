// Generated file based on zlib_transport.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as zlib from "@goscript/compress/zlib/index.js"

import * as context from "@goscript/context/index.js"

import * as io from "@goscript/io/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript__type from "./type.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import type * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"

import * as __goscript_transport_exception from "./transport_exception.gs.ts"

import * as __goscript_transport_factory from "./transport_factory.gs.ts"
import "@goscript/compress/zlib/index.js"
import "@goscript/context/index.js"
import "@goscript/io/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/time/index.js"
import "./configuration.gs.ts"
import "./header_transport.gs.ts"
import "./transport.gs.ts"
import "./transport_exception.gs.ts"
import "./transport_factory.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TZlibTransportFactory", "thrift.TZlibTransport"])

export class TZlibTransportFactory {
	public get level(): number {
		return this._fields.level
	}

	public set level(value: number) {
		this._fields.level = value
	}

	public get factory(): __goscript_transport_factory.TTransportFactory | null {
		return this._fields.factory
	}

	public set factory(value: __goscript_transport_factory.TTransportFactory | null) {
		this._fields.factory = value
	}

	public _fields: {
		level: number
		factory: __goscript_transport_factory.TTransportFactory | null
	}

	constructor(init?: Partial<{level?: number, factory?: __goscript_transport_factory.TTransportFactory | null}>, __goscriptValue?: boolean) {
		this._fields = {
			level: init?.level ?? (0 as number),
			factory: init?.factory ?? (null! as __goscript_transport_factory.TTransportFactory | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TZlibTransportFactory {
		return new TZlibTransportFactory(this, true)
	}

	public __goscriptAssign(source: TZlibTransportFactory): void {
		const target = this._fields
		const values = source._fields
		target.level = values.level
		target.factory = $.assignFieldValue(target.factory, values.factory, "thrift.TTransportFactory")
	}

	public async GetTransport(trans: __goscript_transport.TTransport | null): globalThis.Promise<[__goscript_transport.TTransport | null, $.GoError]> {
		const p: TZlibTransportFactory | $.VarRef<TZlibTransportFactory> | null = this;
		const p$: TZlibTransportFactory = p == null ? $.pointerTarget<TZlibTransportFactory>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TZlibTransportFactory>(p)
		if ((p$ as TZlibTransportFactory).factory != null) {
			// wrap other factory
			let err: $.GoError = null! as $.GoError
			let __goscriptTuple0: any = await $.pointerValue<Exclude<__goscript_transport_factory.TTransportFactory, null>>((p$ as TZlibTransportFactory).factory).GetTransport(trans)
			trans = __goscriptTuple0[0]
			err = __goscriptTuple0[1]
			if (err != null) {
				return [null, err]
			}
		}
		const __goscriptReturn0 = NewTZlibTransport(trans, (p$ as TZlibTransportFactory).level)
		return [$.interfaceValue<__goscript_transport.TTransport | null>(__goscriptReturn0[0], "*thrift.TZlibTransport", /* @__PURE__ */ $.pointerType("thrift.TZlibTransport")), __goscriptReturn0[1]]
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"thrift.TZlibTransportFactory",
		() => new TZlibTransportFactory(),
		() => [$.methodSignature("GetTransport", [["trans", "thrift.TTransport"]], ["thrift.TTransport", "error"], true)],
		TZlibTransportFactory,
		() => [/* @__PURE__ */ $.structField("level", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("factory", "thrift.TTransportFactory", [1], 8, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export class TZlibTransport {
	public get reader(): io.ReadCloser | null {
		return this._fields.reader
	}

	public set reader(value: io.ReadCloser | null) {
		this._fields.reader = value
	}

	public get transport(): __goscript_transport.TTransport | null {
		return this._fields.transport
	}

	public set transport(value: __goscript_transport.TTransport | null) {
		this._fields.transport = value
	}

	public get writer(): zlib.Writer | $.VarRef<zlib.Writer> | null {
		return this._fields.writer
	}

	public set writer(value: zlib.Writer | $.VarRef<zlib.Writer> | null) {
		this._fields.writer = value
	}

	public _fields: {
		reader: io.ReadCloser | null
		transport: __goscript_transport.TTransport | null
		writer: zlib.Writer | $.VarRef<zlib.Writer> | null
	}

	constructor(init?: Partial<{reader?: io.ReadCloser | null, transport?: __goscript_transport.TTransport | null, writer?: zlib.Writer | $.VarRef<zlib.Writer> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			reader: init?.reader ?? (null! as io.ReadCloser | null),
			transport: init?.transport ?? (null! as __goscript_transport.TTransport | null),
			writer: init?.writer ?? (null! as zlib.Writer | $.VarRef<zlib.Writer> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TZlibTransport {
		return new TZlibTransport(this, true)
	}

	public __goscriptAssign(source: TZlibTransport): void {
		const target = this._fields
		const values = source._fields
		target.reader = $.assignFieldValue(target.reader, values.reader, "io.ReadCloser")
		target.transport = $.assignFieldValue(target.transport, values.transport, "thrift.TTransport")
		target.writer = values.writer
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const z: TZlibTransport | $.VarRef<TZlibTransport> | null = this;
		const z$: TZlibTransport = z == null ? $.pointerTarget<TZlibTransport>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<TZlibTransport>(z)
		if ((z$ as TZlibTransport).reader != null) {
			{
				let err = await $.pointerValue<Exclude<io.ReadCloser, null>>((z$ as TZlibTransport).reader).Close()
				if (err != null) {
					return err
				}
			}
		}
		{
			let err = await zlib.Writer.prototype.Close.call($.pointerValue<zlib.Writer>((z$ as TZlibTransport).writer))
			if (err != null) {
				return err
			}
		}
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>((z$ as TZlibTransport).transport).Close()
	}

	public async Flush(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const z: TZlibTransport | $.VarRef<TZlibTransport> | null = this;
		const z$: TZlibTransport = z == null ? $.pointerTarget<TZlibTransport>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<TZlibTransport>(z)
		{
			let err = await zlib.Writer.prototype.Flush.call($.pointerValue<zlib.Writer>((z$ as TZlibTransport).writer))
			if (err != null) {
				return err
			}
		}
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>((z$ as TZlibTransport).transport).Flush(ctx)
	}

	public async IsOpen(): globalThis.Promise<boolean> {
		const z: TZlibTransport | $.VarRef<TZlibTransport> | null = this;
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>($.pointerValue<TZlibTransport>(z).transport).IsOpen()
	}

	public async Open(): globalThis.Promise<$.GoError> {
		const z: TZlibTransport | $.VarRef<TZlibTransport> | null = this;
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>($.pointerValue<TZlibTransport>(z).transport).Open()
	}

	public async Read(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		let z: TZlibTransport | $.VarRef<TZlibTransport> | null = this;
		const z$: TZlibTransport = z == null ? $.pointerTarget<TZlibTransport>(z) : (z as any).__isVarRef === true ? (z as any).value : (z as any).__goValue === undefined ? (z as any) : $.pointerTarget<TZlibTransport>(z)
		if ((z$ as TZlibTransport).reader == null) {
			let [r, err] = await zlib.NewReader($.pointerValueOrNil(((z$ as TZlibTransport).transport as io.Reader | null))!)
			if (err != null) {
				return [0, (await __goscript_transport_exception.NewTTransportExceptionFromError(err) as $.GoError)]
			}
			;(z$ as TZlibTransport).reader = r
		}

		return $.pointerValue<Exclude<io.ReadCloser, null>>((z$ as TZlibTransport).reader).Read(p)
	}

	public async RemainingBytes(): globalThis.Promise<bigint> {
		const z: TZlibTransport | $.VarRef<TZlibTransport> | null = this;
		return $.pointerValue<Exclude<__goscript_transport.TTransport, null>>($.pointerValue<TZlibTransport>(z).transport).RemainingBytes()
	}

	public async SetTConfiguration(conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<void> {
		const z: TZlibTransport | $.VarRef<TZlibTransport> | null = this;
		await __goscript_configuration.PropagateTConfiguration(($.pointerValue<TZlibTransport>(z).transport as any), conf)
	}

	public async Write(p: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const z: TZlibTransport | $.VarRef<TZlibTransport> | null = this;
		return zlib.Writer.prototype.Write.call($.pointerValue<zlib.Writer>($.pointerValue<TZlibTransport>(z).writer), p)
	}

	static __typeInfo = $.registerStructType(
		"thrift.TZlibTransport",
		() => new TZlibTransport(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Flush", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("IsOpen", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Open", [], ["error"], true), $.methodSignature("Read", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true), $.methodSignature("RemainingBytes", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("SetTConfiguration", [["conf", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		TZlibTransport,
		() => [/* @__PURE__ */ $.structField("reader", "io.ReadCloser", [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("transport", "thrift.TTransport", [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("writer", /* @__PURE__ */ $.pointerType("zlib.Writer"), [2], 32, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export function NewTZlibTransportFactory(level: number): TZlibTransportFactory | $.VarRef<TZlibTransportFactory> | null {
	return new TZlibTransportFactory({level: level, factory: null})
}

export function NewTZlibTransportFactoryWithFactory(level: number, factory: __goscript_transport_factory.TTransportFactory | null): TZlibTransportFactory | $.VarRef<TZlibTransportFactory> | null {
	return new TZlibTransportFactory({level: level, factory: factory})
}

export function NewTZlibTransport(trans: __goscript_transport.TTransport | null, level: number): [TZlibTransport | $.VarRef<TZlibTransport> | null, $.GoError] {
	let __goscriptTuple1: any = zlib.NewWriterLevel($.pointerValueOrNil((trans as io.Writer | null))!, level)
	let w: zlib.Writer | $.VarRef<zlib.Writer> | null = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (err != null) {
		return [null, err]
	}

	return [new TZlibTransport({writer: w, transport: trans}), null]
}

var __goscriptAwait: any
