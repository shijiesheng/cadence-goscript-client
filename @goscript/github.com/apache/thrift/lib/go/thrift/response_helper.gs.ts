// Generated file based on response_helper.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as io from "@goscript/io/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript__type from "./type.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import * as __goscript_header_protocol from "./header_protocol.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/context/index.js"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/io/index.js"
import "@goscript/time/index.js"
import "./configuration.gs.ts"
import "./header_protocol.gs.ts"
import "./header_transport.gs.ts"
import "./protocol.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.responseHelperKey", "thrift.TResponseHelper", "thrift.THeaderResponseHelper"])

export class responseHelperKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): responseHelperKey {
		return new responseHelperKey(this, true)
	}

	public __goscriptAssign(source: responseHelperKey): void {
	}

	static __typeInfo = $.registerStructType(
		"thrift.responseHelperKey",
		() => new responseHelperKey(),
		() => [],
		responseHelperKey,
		() => []
	)
}

export class TResponseHelper {
	public get THeaderResponseHelper(): THeaderResponseHelper | $.VarRef<THeaderResponseHelper> | null {
		return this._fields.THeaderResponseHelper
	}

	public set THeaderResponseHelper(value: THeaderResponseHelper | $.VarRef<THeaderResponseHelper> | null) {
		this._fields.THeaderResponseHelper = value
	}

	public _fields: {
		THeaderResponseHelper: THeaderResponseHelper | $.VarRef<THeaderResponseHelper> | null
	}

	constructor(init?: Partial<{THeaderResponseHelper?: THeaderResponseHelper | $.VarRef<THeaderResponseHelper> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			THeaderResponseHelper: init?.THeaderResponseHelper ?? (null! as THeaderResponseHelper | $.VarRef<THeaderResponseHelper> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TResponseHelper {
		return new TResponseHelper(this, true)
	}

	public __goscriptAssign(source: TResponseHelper): void {
		const target = this._fields
		const values = source._fields
		target.THeaderResponseHelper = values.THeaderResponseHelper
	}

	public ClearHeaders(): any {
		return $.pointerValue<THeaderResponseHelper>(this.THeaderResponseHelper).ClearHeaders()
	}

	public SetHeader(key: any, value: any): any {
		return $.pointerValue<THeaderResponseHelper>(this.THeaderResponseHelper).SetHeader(key, value)
	}

	static __typeInfo = $.registerStructType(
		"thrift.TResponseHelper",
		() => new TResponseHelper(),
		() => [$.methodSignature("ClearHeaders"), $.methodSignature("SetHeader", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]])],
		TResponseHelper,
		() => [/* @__PURE__ */ $.structField("THeaderResponseHelper", /* @__PURE__ */ $.pointerType("thrift.THeaderResponseHelper"), [0], 0, true, { anonymous: true })]
	)
}

export class THeaderResponseHelper {
	public get proto(): __goscript_header_protocol.THeaderProtocol | $.VarRef<__goscript_header_protocol.THeaderProtocol> | null {
		return this._fields.proto
	}

	public set proto(value: __goscript_header_protocol.THeaderProtocol | $.VarRef<__goscript_header_protocol.THeaderProtocol> | null) {
		this._fields.proto = value
	}

	public _fields: {
		proto: __goscript_header_protocol.THeaderProtocol | $.VarRef<__goscript_header_protocol.THeaderProtocol> | null
	}

	constructor(init?: Partial<{proto?: __goscript_header_protocol.THeaderProtocol | $.VarRef<__goscript_header_protocol.THeaderProtocol> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			proto: init?.proto ?? (null! as __goscript_header_protocol.THeaderProtocol | $.VarRef<__goscript_header_protocol.THeaderProtocol> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): THeaderResponseHelper {
		return new THeaderResponseHelper(this, true)
	}

	public __goscriptAssign(source: THeaderResponseHelper): void {
		const target = this._fields
		const values = source._fields
		target.proto = values.proto
	}

	public ClearHeaders(): void {
		const h: THeaderResponseHelper | $.VarRef<THeaderResponseHelper> | null = this;
		const h$: THeaderResponseHelper = h == null ? $.pointerTarget<THeaderResponseHelper>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<THeaderResponseHelper>(h)
		if ((h != null) && ((h$ as THeaderResponseHelper).proto != null)) {
			__goscript_header_protocol.THeaderProtocol.prototype.ClearWriteHeaders.call((h$ as THeaderResponseHelper).proto)
		}
	}

	public SetHeader(key: string, value: string): void {
		const h: THeaderResponseHelper | $.VarRef<THeaderResponseHelper> | null = this;
		const h$: THeaderResponseHelper = h == null ? $.pointerTarget<THeaderResponseHelper>(h) : (h as any).__isVarRef === true ? (h as any).value : (h as any).__goValue === undefined ? (h as any) : $.pointerTarget<THeaderResponseHelper>(h)
		if ((h != null) && ((h$ as THeaderResponseHelper).proto != null)) {
			__goscript_header_protocol.THeaderProtocol.prototype.SetWriteHeader.call((h$ as THeaderResponseHelper).proto, key, value)
		}
	}

	static __typeInfo = $.registerStructType(
		"thrift.THeaderResponseHelper",
		() => new THeaderResponseHelper(),
		() => [$.methodSignature("ClearHeaders", [], [], true), $.methodSignature("SetHeader", [["key", /* @__PURE__ */ $.basicType("string")], ["value", /* @__PURE__ */ $.basicType("string")]], [], true)],
		THeaderResponseHelper,
		() => [/* @__PURE__ */ $.structField("proto", /* @__PURE__ */ $.pointerType("thrift.THeaderProtocol"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export function NewTHeaderResponseHelper(proto: __goscript_protocol.TProtocol | null): THeaderResponseHelper | $.VarRef<THeaderResponseHelper> | null {
	{
		let __goscriptTuple0: any = $.typeAssertTuple<__goscript_header_protocol.THeaderProtocol | $.VarRef<__goscript_header_protocol.THeaderProtocol> | null>(proto, /* @__PURE__ */ $.pointerType("thrift.THeaderProtocol"))
		let hp: __goscript_header_protocol.THeaderProtocol | $.VarRef<__goscript_header_protocol.THeaderProtocol> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			return new THeaderResponseHelper({proto: hp})
		}
	}
	return null
}

export async function GetResponseHelper(ctx: context.Context | null): globalThis.Promise<[TResponseHelper, boolean]> {
	let helper: TResponseHelper = new TResponseHelper(undefined, true)
	let ok: boolean = false
	{
		let v = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new responseHelperKey(undefined, true), "thrift.responseHelperKey", "thrift.responseHelperKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (v != null) {
			let __goscriptTuple1: any = $.typeAssertTuple<TResponseHelper>(v, "thrift.TResponseHelper")
			helper = $.assignStruct(helper, __goscriptTuple1[0])
			ok = __goscriptTuple1[1]
		}
	}
	return [helper, ok]
}

export function SetResponseHelper(ctx: context.Context | null, helper: TResponseHelper): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new responseHelperKey(undefined, true), "thrift.responseHelperKey", "thrift.responseHelperKey"), $.interfaceValue((helper).clone(), "thrift.TResponseHelper", "thrift.TResponseHelper"))
}

var __goscriptAwait: any
