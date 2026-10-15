// Generated file based on simple_json_protocol.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as base64 from "@goscript/encoding/base64/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript__type from "./type.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import type * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import * as __goscript_messagetype from "./messagetype.gs.ts"

import * as __goscript_numeric from "./numeric.gs.ts"

import * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_protocol_exception from "./protocol_exception.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/encoding/base64/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/strconv/index.js"
import "@goscript/crypto/tls/index.js"
import "@goscript/time/index.js"
import "./type.gs.ts"
import "./configuration.gs.ts"
import "./header_transport.gs.ts"
import "./messagetype.gs.ts"
import "./numeric.gs.ts"
import "./protocol.gs.ts"
import "./protocol_exception.gs.ts"
import "./transport.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift._ParseContext", "thrift.jsonContextStack", "thrift.TSimpleJSONProtocol", "thrift.TSimpleJSONProtocolFactory"])

export type _ParseContext = number

$.registerNamedValueType(
	"thrift._ParseContext",
	{String: (receiver: any, ...args: any[]) => (_ParseContext_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*thrift._ParseContext",
	{String: (receiver: any, ...args: any[]) => (_ParseContext_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type jsonContextStack = $.Slice<_ParseContext>

$.registerNamedType("thrift.jsonContextStack", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int", "thrift._ParseContext")));

$.registerNamedValueType(
	"thrift.jsonContextStack",
	{peek: (receiver: any, ...args: any[]) => (jsonContextStack_peek as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("peek", [], [["v", /* @__PURE__ */ $.basicType("int", "thrift._ParseContext")], ["ok", /* @__PURE__ */ $.basicType("bool")]])]
);

$.registerNamedValueType(
	"*thrift.jsonContextStack",
	{peek: (receiver: any, ...args: any[]) => (jsonContextStack_peek as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), pop: (receiver: any, ...args: any[]) => (jsonContextStack_pop as any)(receiver, ...$.stripGenericTypeArgs(args)), push: (receiver: any, ...args: any[]) => (jsonContextStack_push as any)(receiver, ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("peek", [], [["v", /* @__PURE__ */ $.basicType("int", "thrift._ParseContext")], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("pop", [], [["v", /* @__PURE__ */ $.basicType("int", "thrift._ParseContext")], ["ok", /* @__PURE__ */ $.basicType("bool")]]), $.methodSignature("push", [["v", /* @__PURE__ */ $.basicType("int", "thrift._ParseContext")]])]
);

export class TSimpleJSONProtocol {
	public get trans(): __goscript_transport.TTransport | null {
		return this._fields.trans
	}

	public set trans(value: __goscript_transport.TTransport | null) {
		this._fields.trans = value
	}

	public get cfg(): __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null {
		return this._fields.cfg
	}

	public set cfg(value: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null) {
		this._fields.cfg = value
	}

	public get parseContextStack(): jsonContextStack {
		return this._fields.parseContextStack
	}

	public set parseContextStack(value: jsonContextStack) {
		this._fields.parseContextStack = value
	}

	public get dumpContext(): jsonContextStack {
		return this._fields.dumpContext
	}

	public set dumpContext(value: jsonContextStack) {
		this._fields.dumpContext = value
	}

	public get writer(): bufio.Writer | $.VarRef<bufio.Writer> | null {
		return this._fields.writer
	}

	public set writer(value: bufio.Writer | $.VarRef<bufio.Writer> | null) {
		this._fields.writer = value
	}

	public get reader(): bufio.Reader | $.VarRef<bufio.Reader> | null {
		return this._fields.reader
	}

	public set reader(value: bufio.Reader | $.VarRef<bufio.Reader> | null) {
		this._fields.reader = value
	}

	public _fields: {
		trans: __goscript_transport.TTransport | null
		cfg: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null
		parseContextStack: jsonContextStack
		dumpContext: jsonContextStack
		writer: bufio.Writer | $.VarRef<bufio.Writer> | null
		reader: bufio.Reader | $.VarRef<bufio.Reader> | null
	}

	constructor(init?: Partial<{trans?: __goscript_transport.TTransport | null, cfg?: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null, parseContextStack?: jsonContextStack, dumpContext?: jsonContextStack, writer?: bufio.Writer | $.VarRef<bufio.Writer> | null, reader?: bufio.Reader | $.VarRef<bufio.Reader> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			trans: init?.trans ?? (null! as __goscript_transport.TTransport | null),
			cfg: init?.cfg ?? (null! as __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null),
			parseContextStack: init?.parseContextStack ?? (null! as jsonContextStack),
			dumpContext: init?.dumpContext ?? (null! as jsonContextStack),
			writer: init?.writer ?? (null! as bufio.Writer | $.VarRef<bufio.Writer> | null),
			reader: init?.reader ?? (null! as bufio.Reader | $.VarRef<bufio.Reader> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TSimpleJSONProtocol {
		return new TSimpleJSONProtocol(this, true)
	}

	public __goscriptAssign(source: TSimpleJSONProtocol): void {
		const target = this._fields
		const values = source._fields
		target.trans = $.assignFieldValue(target.trans, values.trans, "thrift.TTransport")
		target.cfg = values.cfg
		target.parseContextStack = values.parseContextStack
		target.dumpContext = values.dumpContext
		target.writer = values.writer
		target.reader = values.reader
	}

	public async Flush(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let err: $.GoError = null! as $.GoError
		return (await __goscript_protocol_exception.NewTProtocolException(await bufio.Writer.prototype.Flush.call($.pointerValue<TSimpleJSONProtocol>(p).writer)) as $.GoError)
	}

	public async OutputBool(value: boolean): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputPreValue() : TSimpleJSONProtocol.prototype.OutputPreValue.call(p))
			if (e != null) {
				return e
			}
		}
		let v: string = ""
		if (value) {
			v = $.bytesToString(JSON_TRUE)
		} else {
			v = $.bytesToString(JSON_FALSE)
		}
		let [cxt, ok] = jsonContextStack_peek($.pointerValue<TSimpleJSONProtocol>(p).dumpContext)
		if (!ok) {
			return ((await __goscript_init_errEmptyJSONContextStack(), __goscript_get_errEmptyJSONContextStack()) as $.GoError)
		}
		switch (cxt) {
			case 4:
			case 5:
			{
				v = await jsonQuote(v)
				break
			}
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputStringData(v) : TSimpleJSONProtocol.prototype.OutputStringData.call(p, v))
			if (e != null) {
				return e
			}
		}
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputPostValue() : TSimpleJSONProtocol.prototype.OutputPostValue.call(p))
	}

	public async OutputElemListBegin(elemType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputListBegin() : TSimpleJSONProtocol.prototype.OutputListBegin.call(p))
			if (e != null) {
				return e
			}
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputI64($.int64(elemType)) : TSimpleJSONProtocol.prototype.OutputI64.call(p, $.int64(elemType)))
			if (e != null) {
				return e
			}
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputI64($.int64(size)) : TSimpleJSONProtocol.prototype.OutputI64.call(p, $.int64(size)))
			if (e != null) {
				return e
			}
		}
		return null
	}

	public async OutputF64(value: number): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputPreValue() : TSimpleJSONProtocol.prototype.OutputPreValue.call(p))
			if (e != null) {
				return e
			}
		}
		let v: string = ""
		if (math.IsNaN(value)) {
			v = $.concatString(($.concatString($.runeToString(JSON_QUOTE), JSON_NAN)), $.runeToString(JSON_QUOTE))
		} else {
			if (math.IsInf(value, 1)) {
				v = $.concatString(($.concatString($.runeToString(JSON_QUOTE), JSON_INFINITY)), $.runeToString(JSON_QUOTE))
			} else {
				if (math.IsInf(value, -1)) {
					v = $.concatString(($.concatString($.runeToString(JSON_QUOTE), JSON_NEGATIVE_INFINITY)), $.runeToString(JSON_QUOTE))
				} else {
					let [cxt, ok] = jsonContextStack_peek($.pointerValue<TSimpleJSONProtocol>(p).dumpContext)
					if (!ok) {
						return ((await __goscript_init_errEmptyJSONContextStack(), __goscript_get_errEmptyJSONContextStack()) as $.GoError)
					}
					v = strconv.FormatFloat(value, 103, -1, 64)
					switch (cxt) {
						case 4:
						case 5:
						{
							v = $.concatString(($.concatString($.runeToString(JSON_QUOTE), v)), $.runeToString(JSON_QUOTE))
							break
						}
					}
				}
			}
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputStringData(v) : TSimpleJSONProtocol.prototype.OutputStringData.call(p, v))
			if (e != null) {
				return e
			}
		}
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputPostValue() : TSimpleJSONProtocol.prototype.OutputPostValue.call(p))
	}

	public async OutputI64(value: bigint): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputPreValue() : TSimpleJSONProtocol.prototype.OutputPreValue.call(p))
			if (e != null) {
				return e
			}
		}
		let [cxt, ok] = jsonContextStack_peek($.pointerValue<TSimpleJSONProtocol>(p).dumpContext)
		if (!ok) {
			return ((await __goscript_init_errEmptyJSONContextStack(), __goscript_get_errEmptyJSONContextStack()) as $.GoError)
		}
		let v = strconv.FormatInt(value, 10)
		switch (cxt) {
			case 4:
			case 5:
			{
				v = await jsonQuote(v)
				break
			}
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputStringData(v) : TSimpleJSONProtocol.prototype.OutputStringData.call(p, v))
			if (e != null) {
				return e
			}
		}
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputPostValue() : TSimpleJSONProtocol.prototype.OutputPostValue.call(p))
	}

	public async OutputListBegin(): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputPreValue() : TSimpleJSONProtocol.prototype.OutputPreValue.call(p))
			if (e != null) {
				return e
			}
		}
		{
			let [, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).write(JSON_LBRACKET) : TSimpleJSONProtocol.prototype.write.call(p, JSON_LBRACKET))
			if (e != null) {
				return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			}
		}
		jsonContextStack_push($.fieldRef($.pointerValue<TSimpleJSONProtocol>(p)._fields, "dumpContext"), 2)
		return null
	}

	public async OutputListEnd(): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		{
			let [, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).write(JSON_RBRACKET) : TSimpleJSONProtocol.prototype.write.call(p, JSON_RBRACKET))
			if (e != null) {
				return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			}
		}
		let [, ok] = jsonContextStack_pop($.fieldRef($.pointerValue<TSimpleJSONProtocol>(p)._fields, "dumpContext"))
		if (!ok) {
			return ((await __goscript_init_errEmptyJSONContextStack(), __goscript_get_errEmptyJSONContextStack()) as $.GoError)
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputPostValue() : TSimpleJSONProtocol.prototype.OutputPostValue.call(p))
			if (e != null) {
				return e
			}
		}
		return null
	}

	public async OutputNull(): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputPreValue() : TSimpleJSONProtocol.prototype.OutputPreValue.call(p))
			if (e != null) {
				return e
			}
		}
		{
			let [, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).write(JSON_NULL) : TSimpleJSONProtocol.prototype.write.call(p, JSON_NULL))
			if (e != null) {
				return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			}
		}
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputPostValue() : TSimpleJSONProtocol.prototype.OutputPostValue.call(p))
	}

	public async OutputObjectBegin(): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputPreValue() : TSimpleJSONProtocol.prototype.OutputPreValue.call(p))
			if (e != null) {
				return e
			}
		}
		{
			let [, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).write(JSON_LBRACE) : TSimpleJSONProtocol.prototype.write.call(p, JSON_LBRACE))
			if (e != null) {
				return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			}
		}
		jsonContextStack_push($.fieldRef($.pointerValue<TSimpleJSONProtocol>(p)._fields, "dumpContext"), 4)
		return null
	}

	public async OutputObjectEnd(): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		{
			let [, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).write(JSON_RBRACE) : TSimpleJSONProtocol.prototype.write.call(p, JSON_RBRACE))
			if (e != null) {
				return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			}
		}
		let [, ok] = jsonContextStack_pop($.fieldRef($.pointerValue<TSimpleJSONProtocol>(p)._fields, "dumpContext"))
		if (!ok) {
			return ((await __goscript_init_errEmptyJSONContextStack(), __goscript_get_errEmptyJSONContextStack()) as $.GoError)
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputPostValue() : TSimpleJSONProtocol.prototype.OutputPostValue.call(p))
			if (e != null) {
				return e
			}
		}
		return null
	}

	public async OutputPostValue(): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		let [cxt, ok] = jsonContextStack_peek((p$ as TSimpleJSONProtocol).dumpContext)
		if (!ok) {
			return ((await __goscript_init_errEmptyJSONContextStack(), __goscript_get_errEmptyJSONContextStack()) as $.GoError)
		}
		switch (cxt) {
			case 2:
			{
				jsonContextStack_pop($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "dumpContext"))
				jsonContextStack_push($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "dumpContext"), 3)
				break
			}
			case 4:
			{
				jsonContextStack_pop($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "dumpContext"))
				jsonContextStack_push($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "dumpContext"), 6)
				break
			}
			case 5:
			{
				jsonContextStack_pop($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "dumpContext"))
				jsonContextStack_push($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "dumpContext"), 6)
				break
			}
			case 6:
			{
				jsonContextStack_pop($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "dumpContext"))
				jsonContextStack_push($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "dumpContext"), 5)
				break
			}
		}
		return null
	}

	public async OutputPreValue(): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let [cxt, ok] = jsonContextStack_peek($.pointerValue<TSimpleJSONProtocol>(p).dumpContext)
		if (!ok) {
			return ((await __goscript_init_errEmptyJSONContextStack(), __goscript_get_errEmptyJSONContextStack()) as $.GoError)
		}
		switch (cxt) {
			case 3:
			case 5:
			{
				{
					let [, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).write(JSON_COMMA) : TSimpleJSONProtocol.prototype.write.call(p, JSON_COMMA))
					if (e != null) {
						return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
					}
				}
				break
			}
			case 6:
			{
				{
					let [, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).write(JSON_COLON) : TSimpleJSONProtocol.prototype.write.call(p, JSON_COLON))
					if (e != null) {
						return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
					}
				}
				break
			}
		}
		return null
	}

	public async OutputString(s: string): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputPreValue() : TSimpleJSONProtocol.prototype.OutputPreValue.call(p))
			if (e != null) {
				return e
			}
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputStringData(await jsonQuote(s)) : TSimpleJSONProtocol.prototype.OutputStringData.call(p, await jsonQuote(s)))
			if (e != null) {
				return e
			}
		}
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputPostValue() : TSimpleJSONProtocol.prototype.OutputPostValue.call(p))
	}

	public async OutputStringData(s: string): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let [, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).write($.stringToBytes(s)) : TSimpleJSONProtocol.prototype.write.call(p, $.stringToBytes(s)))
		return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
	}

	public async ParseBase64EncodedBody(): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let __goscriptTuple0: any = await bufio.Reader.prototype.ReadBytes.call($.pointerValue<TSimpleJSONProtocol>(p).reader, JSON_QUOTE)
		let line: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [line, (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)]
		}
		let line2: $.Slice<number> = $.goSlice(line, 0, $.sliceLen(line) - 1)
		let l = $.sliceLen(line2)
		if ((l % 4) != 0) {
			let pad = 4 - (l % 4)
			let fill = $.arrayValue(new Uint8Array([61, 61, 61]))
			line2 = $.appendSlice(line2, $.goSlice(fill, undefined, pad), $.byteSliceHint)
			l = $.sliceLen(line2)
		}
		let output: $.Slice<number> = $.makeSlice<number>(base64.Encoding.prototype.DecodedLen.call(base64.StdEncoding, l), undefined, "byte")
		let __goscriptTuple1: any = base64.Encoding.prototype.Decode.call(base64.StdEncoding, output, line2)
		let n = __goscriptTuple1[0]
		err = __goscriptTuple1[1]
		return [$.goSlice(output, 0, n), (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)]
	}

	public async ParseElemListBegin(): globalThis.Promise<[__goscript__type.TType, number, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let elemType: __goscript__type.TType = 0
		let size: number = 0
		let e: $.GoError = null! as $.GoError
		{
			let [isNull, __goscriptShadow0] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseListBegin() : TSimpleJSONProtocol.prototype.ParseListBegin.call(p))
			if (isNull || (__goscriptShadow0 != null)) {
				return [1, 0, __goscriptShadow0]
			}
		}
		let [bElemType, , err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseI64() : TSimpleJSONProtocol.prototype.ParseI64.call(p))
		elemType = $.uint(bElemType, 8)
		if (err != null) {
			return [elemType, size, err]
		}
		let __goscriptTuple2: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseI64() : TSimpleJSONProtocol.prototype.ParseI64.call(p))
		let nSize = __goscriptTuple2[0]
		err = __goscriptTuple2[2]
		if (err != null) {
			return [elemType, 0, err]
		}
		err = await __goscript_configuration.checkSizeForProtocol($.int(nSize, 32), $.pointerValue<TSimpleJSONProtocol>(p).cfg)
		if (err != null) {
			return [elemType, 0, err]
		}
		size = $.int(nSize)
		return [elemType, size, null]
	}

	public async ParseF64(): globalThis.Promise<[number, boolean, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		{
			let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParsePreValue() : TSimpleJSONProtocol.prototype.ParsePreValue.call(p))
			if (err != null) {
				return [0, false, err]
			}
		}
		let value: number = 0
		let isnull: boolean = false
		if (await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).safePeekContains(JSON_NULL) : TSimpleJSONProtocol.prototype.safePeekContains.call(p, JSON_NULL))) {
			await bufio.Reader.prototype.Read.call($.pointerValue<TSimpleJSONProtocol>(p).reader, $.makeSlice<number>($.sliceLen(JSON_NULL), undefined, "byte"))
			isnull = true
		} else {
			let [num, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).readNumeric() : TSimpleJSONProtocol.prototype.readNumeric.call(p))
			isnull = (num == null)
			if (!isnull) {
				value = (__goscriptAwait = (num !== null && (num as any).__isVarRef !== true && (num as any).__goValue === undefined ? (num as Exclude<__goscript_numeric.Numeric, null>) : $.pointerValue<Exclude<__goscript_numeric.Numeric, null>>(num)).Float64(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if (err != null) {
				return [value, isnull, err]
			}
		}
		return [value, isnull, await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParsePostValue() : TSimpleJSONProtocol.prototype.ParsePostValue.call(p))]
	}

	public async ParseI64(): globalThis.Promise<[bigint, boolean, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		{
			let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParsePreValue() : TSimpleJSONProtocol.prototype.ParsePreValue.call(p))
			if (err != null) {
				return [0n, false, err]
			}
		}
		let value: bigint = 0n
		let isnull: boolean = false
		if (await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).safePeekContains(JSON_NULL) : TSimpleJSONProtocol.prototype.safePeekContains.call(p, JSON_NULL))) {
			await bufio.Reader.prototype.Read.call($.pointerValue<TSimpleJSONProtocol>(p).reader, $.makeSlice<number>($.sliceLen(JSON_NULL), undefined, "byte"))
			isnull = true
		} else {
			let [num, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).readNumeric() : TSimpleJSONProtocol.prototype.readNumeric.call(p))
			isnull = (num == null)
			if (!isnull) {
				value = (__goscriptAwait = (num !== null && (num as any).__isVarRef !== true && (num as any).__goValue === undefined ? (num as Exclude<__goscript_numeric.Numeric, null>) : $.pointerValue<Exclude<__goscript_numeric.Numeric, null>>(num)).Int64(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if (err != null) {
				return [value, isnull, err]
			}
		}
		return [value, isnull, await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParsePostValue() : TSimpleJSONProtocol.prototype.ParsePostValue.call(p))]
	}

	public async ParseListBegin(): globalThis.Promise<[boolean, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let isNull: boolean = false
		let err: $.GoError = null! as $.GoError
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParsePreValue() : TSimpleJSONProtocol.prototype.ParsePreValue.call(p))
			if (e != null) {
				return [false, e]
			}
		}
		let b: $.Slice<number> = null! as $.Slice<number>
		let __goscriptTuple3: any = await bufio.Reader.prototype.Peek.call((p$ as TSimpleJSONProtocol).reader, 1)
		b = __goscriptTuple3[0]
		err = __goscriptTuple3[1]
		if (err != null) {
			return [false, err]
		}
		if (($.sliceLen(b) >= 1) && ($.arrayIndex(b!, 0) == $.arrayIndex(JSON_LBRACKET!, 0))) {
			jsonContextStack_push($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "parseContextStack"), 2)
			await bufio.Reader.prototype.ReadByte.call((p$ as TSimpleJSONProtocol).reader)
			isNull = false
		} else {
			if (await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).safePeekContains(JSON_NULL) : TSimpleJSONProtocol.prototype.safePeekContains.call(p, JSON_NULL))) {
				isNull = true
			} else {
				err = fmt.Errorf("Expected \"null\" or \"[\", received %q", $.interfaceValue(b, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
			}
		}
		return [isNull, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, err) as $.GoError)]
	}

	public async ParseListEnd(): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		{
			let [isNull, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).readIfNull() : TSimpleJSONProtocol.prototype.readIfNull.call(p))
			if (isNull || (err != null)) {
				return err
			}
		}
		let [cxt, ] = jsonContextStack_peek((p$ as TSimpleJSONProtocol).parseContextStack)
		if (cxt != 3) {
			let e = fmt.Errorf("Expected to be in the List Context, but not in List Context (%d)", $.namedValueInterfaceValue<any>(cxt, "thrift._ParseContext", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			return (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)
		}
		let [line, err] = await bufio.Reader.prototype.ReadString.call((p$ as TSimpleJSONProtocol).reader, $.arrayIndex(JSON_RBRACKET!, 0))
		if (err != null) {
			return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
		}
		for (let __goscriptRunes0 = $.stringRunes(line); __goscriptRunes0.next(); ) {
			const char = __goscriptRunes0.rune
			switch (char) {
				default:
				{
					let e = fmt.Errorf("Expecting end of list \"]\", but found: \"%v\"", line)
					return (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)
					break
				}
				case 32:
				case 10:
				case 13:
				case 9:
				case $.int($.arrayIndex(JSON_RBRACKET!, 0), 32):
				{
					break
				}
			}
		}
		jsonContextStack_pop($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "parseContextStack"))
		{
			let [__goscriptShadow1, ok] = jsonContextStack_peek((p$ as TSimpleJSONProtocol).parseContextStack)
			if (!ok) {
				return ((await __goscript_init_errEmptyJSONContextStack(), __goscript_get_errEmptyJSONContextStack()) as $.GoError)
			} else {
				if (__goscriptShadow1 == 1) {
					return null
				}
			}
		}
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParsePostValue() : TSimpleJSONProtocol.prototype.ParsePostValue.call(p))
	}

	public async ParseObjectEnd(): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		{
			let [isNull, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).readIfNull() : TSimpleJSONProtocol.prototype.readIfNull.call(p))
			if (isNull || (err != null)) {
				return err
			}
		}
		let [cxt, ] = jsonContextStack_peek((p$ as TSimpleJSONProtocol).parseContextStack)
		if ((cxt != 4) && (cxt != 5)) {
			let e = fmt.Errorf("Expected to be in the Object Context, but not in Object Context (%d)", $.namedValueInterfaceValue<any>(cxt, "thrift._ParseContext", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))
			return (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)
		}
		let [line, err] = await bufio.Reader.prototype.ReadString.call((p$ as TSimpleJSONProtocol).reader, $.arrayIndex(JSON_RBRACE!, 0))
		if (err != null) {
			return (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)
		}
		for (let __goscriptRunes1 = $.stringRunes(line); __goscriptRunes1.next(); ) {
			const char = __goscriptRunes1.rune
			switch (char) {
				default:
				{
					let e = fmt.Errorf("Expecting end of object \"}\", but found: \"%s\"", line)
					return (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)
					break
				}
				case 32:
				case 10:
				case 13:
				case 9:
				case 125:
				{
					break
				}
			}
		}
		jsonContextStack_pop($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "parseContextStack"))
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParsePostValue() : TSimpleJSONProtocol.prototype.ParsePostValue.call(p))
	}

	public async ParseObjectStart(): globalThis.Promise<[boolean, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		{
			let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParsePreValue() : TSimpleJSONProtocol.prototype.ParsePreValue.call(p))
			if (err != null) {
				return [false, err]
			}
		}
		let b: $.Slice<number> = null! as $.Slice<number>
		let __goscriptTuple4: any = await bufio.Reader.prototype.Peek.call((p$ as TSimpleJSONProtocol).reader, 1)
		b = __goscriptTuple4[0]
		let err = __goscriptTuple4[1]
		if (err != null) {
			return [false, err]
		}
		if (($.sliceLen(b) > 0) && ($.arrayIndex(b!, 0) == $.arrayIndex(JSON_LBRACE!, 0))) {
			await bufio.Reader.prototype.ReadByte.call((p$ as TSimpleJSONProtocol).reader)
			jsonContextStack_push($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "parseContextStack"), 4)
			return [false, null]
		} else {
			if (await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).safePeekContains(JSON_NULL) : TSimpleJSONProtocol.prototype.safePeekContains.call(p, JSON_NULL))) {
				return [true, null]
			}
		}
		let e = fmt.Errorf("Expected '{' or null, but found '%s'", $.bytesToString(b))
		return [false, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
	}

	public async ParsePostValue(): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).readNonSignificantWhitespace() : TSimpleJSONProtocol.prototype.readNonSignificantWhitespace.call(p))
			if (e != null) {
				return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			}
		}
		let [cxt, ok] = jsonContextStack_peek((p$ as TSimpleJSONProtocol).parseContextStack)
		if (!ok) {
			return ((await __goscript_init_errEmptyJSONContextStack(), __goscript_get_errEmptyJSONContextStack()) as $.GoError)
		}
		switch (cxt) {
			case 2:
			{
				jsonContextStack_pop($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "parseContextStack"))
				jsonContextStack_push($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "parseContextStack"), 3)
				break
			}
			case 4:
			case 5:
			{
				jsonContextStack_pop($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "parseContextStack"))
				jsonContextStack_push($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "parseContextStack"), 6)
				break
			}
			case 6:
			{
				jsonContextStack_pop($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "parseContextStack"))
				jsonContextStack_push($.fieldRef((p$ as TSimpleJSONProtocol)._fields, "parseContextStack"), 5)
				break
			}
		}
		return null
	}

	public async ParsePreValue(): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).readNonSignificantWhitespace() : TSimpleJSONProtocol.prototype.readNonSignificantWhitespace.call(p))
			if (e != null) {
				return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			}
		}
		let [cxt, ok] = jsonContextStack_peek((p$ as TSimpleJSONProtocol).parseContextStack)
		if (!ok) {
			return ((await __goscript_init_errEmptyJSONContextStack(), __goscript_get_errEmptyJSONContextStack()) as $.GoError)
		}
		let __goscriptTuple5: any = await bufio.Reader.prototype.Peek.call((p$ as TSimpleJSONProtocol).reader, 1)
		let b: $.Slice<number> = __goscriptTuple5[0]
		switch (cxt) {
			case 3:
			{
				if ($.sliceLen(b) > 0) {
					switch ($.arrayIndex(b!, 0)) {
						case $.arrayIndex(JSON_RBRACKET!, 0):
						{
							return null
							break
						}
						case $.arrayIndex(JSON_COMMA!, 0):
						{
							await bufio.Reader.prototype.ReadByte.call((p$ as TSimpleJSONProtocol).reader)
							{
								let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).readNonSignificantWhitespace() : TSimpleJSONProtocol.prototype.readNonSignificantWhitespace.call(p))
								if (e != null) {
									return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
								}
							}
							return null
							break
						}
						default:
						{
							let e = fmt.Errorf("Expected \"]\" or \",\" in list context, but found \"%s\"", $.bytesToString(b))
							return (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)
							break
						}
					}
				}
				break
			}
			case 5:
			{
				if ($.sliceLen(b) > 0) {
					switch ($.arrayIndex(b!, 0)) {
						case $.arrayIndex(JSON_RBRACE!, 0):
						{
							return null
							break
						}
						case $.arrayIndex(JSON_COMMA!, 0):
						{
							await bufio.Reader.prototype.ReadByte.call((p$ as TSimpleJSONProtocol).reader)
							{
								let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).readNonSignificantWhitespace() : TSimpleJSONProtocol.prototype.readNonSignificantWhitespace.call(p))
								if (e != null) {
									return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
								}
							}
							return null
							break
						}
						default:
						{
							let e = fmt.Errorf("Expected \"}\" or \",\" in object context, but found \"%s\"", $.bytesToString(b))
							return (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)
							break
						}
					}
				}
				break
			}
			case 6:
			{
				if ($.sliceLen(b) > 0) {
					switch ($.arrayIndex(b!, 0)) {
						case $.arrayIndex(JSON_COLON!, 0):
						{
							await bufio.Reader.prototype.ReadByte.call((p$ as TSimpleJSONProtocol).reader)
							{
								let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).readNonSignificantWhitespace() : TSimpleJSONProtocol.prototype.readNonSignificantWhitespace.call(p))
								if (e != null) {
									return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
								}
							}
							return null
							break
						}
						default:
						{
							let e = fmt.Errorf("Expected \":\" in object context, but found \"%s\"", $.bytesToString(b))
							return (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)
							break
						}
					}
				}
				break
			}
		}
		return null
	}

	public async ParseQuotedStringBody(): globalThis.Promise<[string, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let [line, err] = await bufio.Reader.prototype.ReadString.call($.pointerValue<TSimpleJSONProtocol>(p).reader, JSON_QUOTE)
		if (err != null) {
			return ["", (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)]
		}
		let l = $.stringLen(line)
		// count number of escapes to see if we need to keep going
		let i = 1
		for (; i < l; i++) {
			if ($.indexString(line, (l - i) - 1) != 92) {
				break
			}
		}
		if ((i & 0x01) == 1) {
			return [line, null]
		}
		let __goscriptTuple6: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseQuotedStringBody() : TSimpleJSONProtocol.prototype.ParseQuotedStringBody.call(p))
		let s = __goscriptTuple6[0]
		err = __goscriptTuple6[1]
		if (err != null) {
			return ["", (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)]
		}
		let v = $.concatString(line, s)
		return [v, null]
	}

	public async ParseStringBody(): globalThis.Promise<[string, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let [line, err] = await bufio.Reader.prototype.ReadString.call($.pointerValue<TSimpleJSONProtocol>(p).reader, JSON_QUOTE)
		if (err != null) {
			return ["", (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)]
		}
		let l = $.stringLen(line)
		// count number of escapes to see if we need to keep going
		let i = 1
		for (; i < l; i++) {
			if ($.indexString(line, (l - i) - 1) != 92) {
				break
			}
		}
		if ((i & 0x01) == 1) {
			let [v, ok] = await jsonUnquote($.concatString($.runeToString(JSON_QUOTE), line))
			if (!ok) {
				return ["", (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)]
			}
			return [v, null]
		}
		let __goscriptTuple7: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseQuotedStringBody() : TSimpleJSONProtocol.prototype.ParseQuotedStringBody.call(p))
		let s = __goscriptTuple7[0]
		err = __goscriptTuple7[1]
		if (err != null) {
			return ["", (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)]
		}
		let str = $.concatString(($.concatString($.runeToString(JSON_QUOTE), line)), s)
		let [v, ok] = await jsonUnquote(str)
		if (!ok) {
			let e = fmt.Errorf("Unable to parse as JSON string %s", str)
			return ["", (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
		}
		return [v, null]
	}

	public async ReadBinary(ctx: context.Context | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		let v: $.Slice<number> = null! as $.Slice<number>
		{
			let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParsePreValue() : TSimpleJSONProtocol.prototype.ParsePreValue.call(p))
			if (err != null) {
				return [null, err]
			}
		}
		let __goscriptTuple8: any = await bufio.Reader.prototype.Peek.call((p$ as TSimpleJSONProtocol).reader, 1)
		let f: $.Slice<number> = __goscriptTuple8[0]
		if (($.sliceLen(f) > 0) && ($.arrayIndex(f!, 0) == JSON_QUOTE)) {
			await bufio.Reader.prototype.ReadByte.call((p$ as TSimpleJSONProtocol).reader)
			let __goscriptTuple9: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseBase64EncodedBody() : TSimpleJSONProtocol.prototype.ParseBase64EncodedBody.call(p))
			let value: $.Slice<number> = __goscriptTuple9[0]
			let err = __goscriptTuple9[1]
			v = value
			if (err != null) {
				return [v, err]
			}
		} else {
			if (($.sliceLen(f) > 0) && ($.arrayIndex(f!, 0) == $.arrayIndex(JSON_NULL!, 0))) {
				let b: $.Slice<number> = $.makeSlice<number>($.sliceLen(JSON_NULL), undefined, "byte")
				let [, err] = await bufio.Reader.prototype.Read.call((p$ as TSimpleJSONProtocol).reader, b)
				if (err != null) {
					return [v, (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)]
				}
				if (!$.stringEqual($.bytesToString(b), $.bytesToString(JSON_NULL))) {
					let e = fmt.Errorf("Expected a JSON string, found unquoted data started with %s", $.bytesToString(b))
					return [v, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
				}
			} else {
				let e = fmt.Errorf("Expected a JSON string, found unquoted data started with %s", $.bytesToString(f))
				return [v, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
			}
		}

		return [v, await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParsePostValue() : TSimpleJSONProtocol.prototype.ParsePostValue.call(p))]
	}

	public async ReadBool(ctx: context.Context | null): globalThis.Promise<[boolean, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		let value: boolean = false

		{
			let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParsePreValue() : TSimpleJSONProtocol.prototype.ParsePreValue.call(p))
			if (err != null) {
				return [value, err]
			}
		}
		let __goscriptTuple10: any = await bufio.Reader.prototype.Peek.call((p$ as TSimpleJSONProtocol).reader, 1)
		let f: $.Slice<number> = __goscriptTuple10[0]
		if ($.sliceLen(f) > 0) {
			switch ($.arrayIndex(f!, 0)) {
				case $.arrayIndex(JSON_TRUE!, 0):
				{
					let b: $.Slice<number> = $.makeSlice<number>($.sliceLen(JSON_TRUE), undefined, "byte")
					let [, err] = await bufio.Reader.prototype.Read.call((p$ as TSimpleJSONProtocol).reader, b)
					if (err != null) {
						return [false, (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)]
					}
					if ($.stringEqual($.bytesToString(b), $.bytesToString(JSON_TRUE))) {
						value = true
					} else {
						let e = fmt.Errorf("Expected \"true\" but found: %s", $.bytesToString(b))
						return [value, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
					}
					break
				}
				case $.arrayIndex(JSON_FALSE!, 0):
				{
					let b: $.Slice<number> = $.makeSlice<number>($.sliceLen(JSON_FALSE), undefined, "byte")
					let [, err] = await bufio.Reader.prototype.Read.call((p$ as TSimpleJSONProtocol).reader, b)
					if (err != null) {
						return [false, (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)]
					}
					if ($.stringEqual($.bytesToString(b), $.bytesToString(JSON_FALSE))) {
						value = false
					} else {
						let e = fmt.Errorf("Expected \"false\" but found: %s", $.bytesToString(b))
						return [value, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
					}
					break
				}
				case $.arrayIndex(JSON_NULL!, 0):
				{
					let b: $.Slice<number> = $.makeSlice<number>($.sliceLen(JSON_NULL), undefined, "byte")
					let [, err] = await bufio.Reader.prototype.Read.call((p$ as TSimpleJSONProtocol).reader, b)
					if (err != null) {
						return [false, (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)]
					}
					if ($.stringEqual($.bytesToString(b), $.bytesToString(JSON_NULL))) {
						value = false
					} else {
						let e = fmt.Errorf("Expected \"null\" but found: %s", $.bytesToString(b))
						return [value, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
					}
					break
				}
				default:
				{
					let e = fmt.Errorf("Expected \"true\", \"false\", or \"null\" but found: %s", $.bytesToString(f))
					return [value, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
					break
				}
			}
		}
		return [value, await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParsePostValue() : TSimpleJSONProtocol.prototype.ParsePostValue.call(p))]
	}

	public async ReadByte(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let [v, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ReadI64(ctx) : TSimpleJSONProtocol.prototype.ReadI64.call(p, ctx))
		return [$.int(v, 8), err]
	}

	public async ReadDouble(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let [v, , err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseF64() : TSimpleJSONProtocol.prototype.ParseF64.call(p))
		return [v, err]
	}

	public async ReadFieldBegin(ctx: context.Context | null): globalThis.Promise<[string, __goscript__type.TType, number, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		{
			let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParsePreValue() : TSimpleJSONProtocol.prototype.ParsePreValue.call(p))
			if (err != null) {
				return ["", 0, 0, err]
			}
		}
		let __goscriptTuple11: any = await bufio.Reader.prototype.Peek.call((p$ as TSimpleJSONProtocol).reader, 1)
		let b: $.Slice<number> = __goscriptTuple11[0]
		if ($.sliceLen(b) > 0) {
			switch ($.arrayIndex(b!, 0)) {
				case $.arrayIndex(JSON_RBRACE!, 0):
				{
					return ["", 0, 0, null]
					break
				}
				case JSON_QUOTE:
				{
					await bufio.Reader.prototype.ReadByte.call((p$ as TSimpleJSONProtocol).reader)
					let [name, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseStringBody() : TSimpleJSONProtocol.prototype.ParseStringBody.call(p))
					// simplejson is not meant to be read back into thrift
					// - see http://wiki.apache.org/thrift/ThriftUsageJava
					// - use JSON instead
					if (err != null) {
						return [name, 0, 0, err]
					}
					return [name, 0, -1, await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParsePostValue() : TSimpleJSONProtocol.prototype.ParsePostValue.call(p))]
					break
				}
			}
			let e = fmt.Errorf("Expected \"}\" or '\"', but found: '%s'", $.bytesToString(b))
			return ["", 0, 0, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
		}
		return ["", 0, 0, (await __goscript_protocol_exception.NewTProtocolException(io.EOF) as $.GoError)]
	}

	public ReadFieldEnd(ctx: context.Context | null): $.GoError {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return null
	}

	public async ReadI16(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let [v, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ReadI64(ctx) : TSimpleJSONProtocol.prototype.ReadI64.call(p, ctx))
		return [$.int(v, 16), err]
	}

	public async ReadI32(ctx: context.Context | null): globalThis.Promise<[number, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let [v, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ReadI64(ctx) : TSimpleJSONProtocol.prototype.ReadI64.call(p, ctx))
		return [$.int(v, 32), err]
	}

	public async ReadI64(ctx: context.Context | null): globalThis.Promise<[bigint, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let [v, , err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseI64() : TSimpleJSONProtocol.prototype.ParseI64.call(p))
		return [v, err]
	}

	public async ReadListBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, number, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let elemType: __goscript__type.TType = 0
		let size: number = 0
		let e: $.GoError = null! as $.GoError
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseElemListBegin() : TSimpleJSONProtocol.prototype.ParseElemListBegin.call(p))
	}

	public async ReadListEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseListEnd() : TSimpleJSONProtocol.prototype.ParseListEnd.call(p))
	}

	public async ReadMapBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, __goscript__type.TType, number, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let keyType: __goscript__type.TType = 0
		let valueType: __goscript__type.TType = 0
		let size: number = 0
		let e: $.GoError = null! as $.GoError
		{
			let [isNull, __goscriptShadow2] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseListBegin() : TSimpleJSONProtocol.prototype.ParseListBegin.call(p))
			if (isNull || (__goscriptShadow2 != null)) {
				return [1, 1, 0, __goscriptShadow2]
			}
		}

		// read keyType
		let __goscriptTuple12: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ReadByte(ctx) : TSimpleJSONProtocol.prototype.ReadByte.call(p, ctx))
		let bKeyType = __goscriptTuple12[0]
		e = __goscriptTuple12[1]
		keyType = $.uint(bKeyType, 8)
		if (e != null) {
			return [keyType, valueType, size, e]
		}

		// read valueType
		let __goscriptTuple13: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ReadByte(ctx) : TSimpleJSONProtocol.prototype.ReadByte.call(p, ctx))
		let bValueType = __goscriptTuple13[0]
		e = __goscriptTuple13[1]
		valueType = $.uint(bValueType, 8)
		if (e != null) {
			return [keyType, valueType, size, e]
		}

		// read size
		let [iSize, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ReadI64(ctx) : TSimpleJSONProtocol.prototype.ReadI64.call(p, ctx))
		if (err != null) {
			return [keyType, valueType, 0, err]
		}
		err = await __goscript_configuration.checkSizeForProtocol($.int(size, 32), $.pointerValue<TSimpleJSONProtocol>(p).cfg)
		if (err != null) {
			return [keyType, valueType, 0, err]
		}
		size = $.int(iSize)
		return [keyType, valueType, size, err]
	}

	public async ReadMapEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseListEnd() : TSimpleJSONProtocol.prototype.ParseListEnd.call(p))
	}

	public async ReadMessageBegin(ctx: context.Context | null): globalThis.Promise<[string, __goscript_messagetype.TMessageType, number, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let name: string = ""
		let typeId: __goscript_messagetype.TMessageType = 0
		let seqId: number = 0
		let err: $.GoError = null! as $.GoError
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).resetContextStack() : TSimpleJSONProtocol.prototype.resetContextStack.call(p))
		{
			let [isNull, __goscriptShadow3] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseListBegin() : TSimpleJSONProtocol.prototype.ParseListBegin.call(p))
			if (isNull || (__goscriptShadow3 != null)) {
				return [name, typeId, seqId, __goscriptShadow3]
			}
		}
		{
			let __goscriptTuple14: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ReadString(ctx) : TSimpleJSONProtocol.prototype.ReadString.call(p, ctx))
			name = __goscriptTuple14[0]
			err = __goscriptTuple14[1]
			if (err != null) {
				return [name, typeId, seqId, err]
			}
		}
		let __goscriptTuple15: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ReadByte(ctx) : TSimpleJSONProtocol.prototype.ReadByte.call(p, ctx))
		let bTypeId = __goscriptTuple15[0]
		err = __goscriptTuple15[1]
		typeId = $.int(bTypeId, 32)
		if (err != null) {
			return [name, typeId, seqId, err]
		}
		{
			let __goscriptTuple16: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ReadI32(ctx) : TSimpleJSONProtocol.prototype.ReadI32.call(p, ctx))
			seqId = __goscriptTuple16[0]
			err = __goscriptTuple16[1]
			if (err != null) {
				return [name, typeId, seqId, err]
			}
		}
		return [name, typeId, seqId, null]
	}

	public async ReadMessageEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseListEnd() : TSimpleJSONProtocol.prototype.ParseListEnd.call(p))
	}

	public async ReadSetBegin(ctx: context.Context | null): globalThis.Promise<[__goscript__type.TType, number, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let elemType: __goscript__type.TType = 0
		let size: number = 0
		let e: $.GoError = null! as $.GoError
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseElemListBegin() : TSimpleJSONProtocol.prototype.ParseElemListBegin.call(p))
	}

	public async ReadSetEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseListEnd() : TSimpleJSONProtocol.prototype.ParseListEnd.call(p))
	}

	public async ReadString(ctx: context.Context | null): globalThis.Promise<[string, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		let v: string = ""
		{
			let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParsePreValue() : TSimpleJSONProtocol.prototype.ParsePreValue.call(p))
			if (err != null) {
				return [v, err]
			}
		}
		let __goscriptTuple17: any = await bufio.Reader.prototype.Peek.call((p$ as TSimpleJSONProtocol).reader, 1)
		let f: $.Slice<number> = __goscriptTuple17[0]
		if (($.sliceLen(f) > 0) && ($.arrayIndex(f!, 0) == JSON_QUOTE)) {
			await bufio.Reader.prototype.ReadByte.call((p$ as TSimpleJSONProtocol).reader)
			let [value, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseStringBody() : TSimpleJSONProtocol.prototype.ParseStringBody.call(p))
			v = value
			if (err != null) {
				return [v, err]
			}
		} else {
			if (($.sliceLen(f) > 0) && ($.arrayIndex(f!, 0) == $.arrayIndex(JSON_NULL!, 0))) {
				let b: $.Slice<number> = $.makeSlice<number>($.sliceLen(JSON_NULL), undefined, "byte")
				let [, err] = await bufio.Reader.prototype.Read.call((p$ as TSimpleJSONProtocol).reader, b)
				if (err != null) {
					return [v, (await __goscript_protocol_exception.NewTProtocolException(err) as $.GoError)]
				}
				if (!$.stringEqual($.bytesToString(b), $.bytesToString(JSON_NULL))) {
					let e = fmt.Errorf("Expected a JSON string, found unquoted data started with %s", $.bytesToString(b))
					return [v, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
				}
			} else {
				let e = fmt.Errorf("Expected a JSON string, found unquoted data started with %s", $.bytesToString(f))
				return [v, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
			}
		}
		return [v, await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParsePostValue() : TSimpleJSONProtocol.prototype.ParsePostValue.call(p))]
	}

	public async ReadStructBegin(ctx: context.Context | null): globalThis.Promise<[string, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let name: string = ""
		let err: $.GoError = null! as $.GoError
		let __goscriptTuple18: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseObjectStart() : TSimpleJSONProtocol.prototype.ParseObjectStart.call(p))
		err = __goscriptTuple18[1]
		return ["", err]
	}

	public async ReadStructEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).ParseObjectEnd() : TSimpleJSONProtocol.prototype.ParseObjectEnd.call(p))
	}

	public async SetTConfiguration(conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<void> {
		let p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		await __goscript_configuration.PropagateTConfiguration(((p$ as TSimpleJSONProtocol).trans as any), conf);
		;(p$ as TSimpleJSONProtocol).cfg = conf
	}

	public async Skip(ctx: context.Context | null, fieldType: __goscript__type.TType): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		let err: $.GoError = null! as $.GoError
		return __goscript_protocol.SkipDefaultDepth(ctx, $.interfaceValue<__goscript_protocol.TProtocol | null>(p, "*thrift.TSimpleJSONProtocol", /* @__PURE__ */ $.pointerType("thrift.TSimpleJSONProtocol")), fieldType)
	}

	public Transport(): __goscript_transport.TTransport | null {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return $.pointerValue<TSimpleJSONProtocol>(p).trans
	}

	public async WriteBinary(ctx: context.Context | null, v: $.Slice<number>): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		// JSON library only takes in a string,
		// not an arbitrary byte array, to ensure bytes are transmitted
		// efficiently we must convert this into a valid JSON string
		// therefore we use base64 encoding to avoid excessive escaping/quoting
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputPreValue() : TSimpleJSONProtocol.prototype.OutputPreValue.call(p))
			if (e != null) {
				return e
			}
		}
		{
			let [, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).write(JSON_QUOTE_BYTES) : TSimpleJSONProtocol.prototype.write.call(p, JSON_QUOTE_BYTES))
			if (e != null) {
				return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			}
		}
		let writer = base64.NewEncoder(base64.StdEncoding, $.interfaceValue<io.Writer | null>((p$ as TSimpleJSONProtocol).writer, "*bufio.Writer", /* @__PURE__ */ $.pointerType("bufio.Writer")))
		{
			let [, e] = await (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? (writer as Exclude<io.WriteCloser, null>) : $.pointerValue<Exclude<io.WriteCloser, null>>(writer)).Write(v)
			if (e != null) {
				bufio.Writer.prototype.Reset.call((p$ as TSimpleJSONProtocol).writer, ((p$ as TSimpleJSONProtocol).trans as io.Writer | null))
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
			let [, e] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).write(JSON_QUOTE_BYTES) : TSimpleJSONProtocol.prototype.write.call(p, JSON_QUOTE_BYTES))
			if (e != null) {
				return (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)
			}
		}
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputPostValue() : TSimpleJSONProtocol.prototype.OutputPostValue.call(p))
	}

	public async WriteBool(ctx: context.Context | null, b: boolean): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputBool(b) : TSimpleJSONProtocol.prototype.OutputBool.call(p, b))
	}

	public async WriteByte(ctx: context.Context | null, b: number): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).WriteI32(ctx, $.int(b, 32)) : TSimpleJSONProtocol.prototype.WriteI32.call(p, ctx, $.int(b, 32)))
	}

	public async WriteDouble(ctx: context.Context | null, v: number): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputF64(v) : TSimpleJSONProtocol.prototype.OutputF64.call(p, v))
	}

	public async WriteFieldBegin(ctx: context.Context | null, name: string, typeId: __goscript__type.TType, id: number): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).WriteString(ctx, name) : TSimpleJSONProtocol.prototype.WriteString.call(p, ctx, name))
			if (e != null) {
				return e
			}
		}
		return null
	}

	public WriteFieldEnd(ctx: context.Context | null): $.GoError {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return null
	}

	public WriteFieldStop(ctx: context.Context | null): $.GoError {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return null
	}

	public async WriteI16(ctx: context.Context | null, v: number): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).WriteI32(ctx, $.int(v, 32)) : TSimpleJSONProtocol.prototype.WriteI32.call(p, ctx, $.int(v, 32)))
	}

	public async WriteI32(ctx: context.Context | null, v: number): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputI64($.int64(v)) : TSimpleJSONProtocol.prototype.OutputI64.call(p, $.int64(v)))
	}

	public async WriteI64(ctx: context.Context | null, v: bigint): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputI64($.int64(v)) : TSimpleJSONProtocol.prototype.OutputI64.call(p, $.int64(v)))
	}

	public async WriteListBegin(ctx: context.Context | null, elemType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputElemListBegin(elemType, size) : TSimpleJSONProtocol.prototype.OutputElemListBegin.call(p, elemType, size))
	}

	public async WriteListEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputListEnd() : TSimpleJSONProtocol.prototype.OutputListEnd.call(p))
	}

	public async WriteMapBegin(ctx: context.Context | null, keyType: __goscript__type.TType, valueType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputListBegin() : TSimpleJSONProtocol.prototype.OutputListBegin.call(p))
			if (e != null) {
				return e
			}
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).WriteByte(ctx, $.int(keyType, 8)) : TSimpleJSONProtocol.prototype.WriteByte.call(p, ctx, $.int(keyType, 8)))
			if (e != null) {
				return e
			}
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).WriteByte(ctx, $.int(valueType, 8)) : TSimpleJSONProtocol.prototype.WriteByte.call(p, ctx, $.int(valueType, 8)))
			if (e != null) {
				return e
			}
		}
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).WriteI32(ctx, $.int(size, 32)) : TSimpleJSONProtocol.prototype.WriteI32.call(p, ctx, $.int(size, 32)))
	}

	public async WriteMapEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputListEnd() : TSimpleJSONProtocol.prototype.OutputListEnd.call(p))
	}

	public async WriteMessageBegin(ctx: context.Context | null, name: string, typeId: __goscript_messagetype.TMessageType, seqId: number): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).resetContextStack() : TSimpleJSONProtocol.prototype.resetContextStack.call(p))
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputListBegin() : TSimpleJSONProtocol.prototype.OutputListBegin.call(p))
			if (e != null) {
				return e
			}
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).WriteString(ctx, name) : TSimpleJSONProtocol.prototype.WriteString.call(p, ctx, name))
			if (e != null) {
				return e
			}
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).WriteByte(ctx, $.int(typeId, 8)) : TSimpleJSONProtocol.prototype.WriteByte.call(p, ctx, $.int(typeId, 8)))
			if (e != null) {
				return e
			}
		}
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).WriteI32(ctx, seqId) : TSimpleJSONProtocol.prototype.WriteI32.call(p, ctx, seqId))
			if (e != null) {
				return e
			}
		}
		return null
	}

	public async WriteMessageEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputListEnd() : TSimpleJSONProtocol.prototype.OutputListEnd.call(p))
	}

	public async WriteSetBegin(ctx: context.Context | null, elemType: __goscript__type.TType, size: number): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputElemListBegin(elemType, size) : TSimpleJSONProtocol.prototype.OutputElemListBegin.call(p, elemType, size))
	}

	public async WriteSetEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputListEnd() : TSimpleJSONProtocol.prototype.OutputListEnd.call(p))
	}

	public async WriteString(ctx: context.Context | null, v: string): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputString(v) : TSimpleJSONProtocol.prototype.OutputString.call(p, v))
	}

	public async WriteStructBegin(ctx: context.Context | null, name: string): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		{
			let e = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputObjectBegin() : TSimpleJSONProtocol.prototype.OutputObjectBegin.call(p))
			if (e != null) {
				return e
			}
		}
		return null
	}

	public async WriteStructEnd(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).OutputObjectEnd() : TSimpleJSONProtocol.prototype.OutputObjectEnd.call(p))
	}

	public async readIfNull(): globalThis.Promise<[boolean, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		let cont = true
		while (cont) {
			let __goscriptTuple19: any = await bufio.Reader.prototype.Peek.call((p$ as TSimpleJSONProtocol).reader, 1)
			let b: $.Slice<number> = __goscriptTuple19[0]
			if ($.sliceLen(b) < 1) {
				return [false, null]
			}
			switch ($.arrayIndex(b!, 0)) {
				default:
				{
					return [false, null]
					break
				}
				case $.arrayIndex(JSON_NULL!, 0):
				{
					cont = false
					break
				}
				case 32:
				case 10:
				case 13:
				case 9:
				{
					await bufio.Reader.prototype.ReadByte.call((p$ as TSimpleJSONProtocol).reader)
					break
				}
			}
		}
		if (await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).safePeekContains(JSON_NULL) : TSimpleJSONProtocol.prototype.safePeekContains.call(p, JSON_NULL))) {
			await bufio.Reader.prototype.Read.call((p$ as TSimpleJSONProtocol).reader, $.makeSlice<number>($.sliceLen(JSON_NULL), undefined, "byte"))
			return [true, null]
		}
		return [false, null]
	}

	public async readNonSignificantWhitespace(): globalThis.Promise<$.GoError> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		while (true) {
			let __goscriptTuple20: any = await bufio.Reader.prototype.Peek.call((p$ as TSimpleJSONProtocol).reader, 1)
			let b: $.Slice<number> = __goscriptTuple20[0]
			if ($.sliceLen(b) < 1) {
				return null
			}
			switch ($.arrayIndex(b!, 0)) {
				case 32:
				case 13:
				case 10:
				case 9:
				{
					await bufio.Reader.prototype.ReadByte.call((p$ as TSimpleJSONProtocol).reader)
					continue
					break
				}
			}
			break
		}
		return null
	}

	public async readNumeric(): globalThis.Promise<[__goscript_numeric.Numeric | null, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		let [isNull, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).readIfNull() : TSimpleJSONProtocol.prototype.readIfNull.call(p))
		if (isNull || (err != null)) {
			return [__goscript_numeric.NUMERIC_NULL, err]
		}
		let hasDecimalPoint = false
		let nextCanBeSign = true
		let hasE = false
		let MAX_LEN = 40
		let buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null = bytes.NewBuffer($.makeSlice<number>(0, MAX_LEN, "byte"))
		let continueFor = true
		let inQuotes = false
		while (continueFor) {
			let [c, __goscriptShadow4] = await bufio.Reader.prototype.ReadByte.call((p$ as TSimpleJSONProtocol).reader)
			if (__goscriptShadow4 != null) {
				if ($.comparableEqual(__goscriptShadow4, io.EOF)) {
					break
				}
				return [__goscript_numeric.NUMERIC_NULL, (await __goscript_protocol_exception.NewTProtocolException(__goscriptShadow4) as $.GoError)]
			}
			switch (c) {
				case 48:
				case 49:
				case 50:
				case 51:
				case 52:
				case 53:
				case 54:
				case 55:
				case 56:
				case 57:
				{
					bytes.Buffer.prototype.WriteByte.call($.pointerValue<bytes.Buffer>(buf), c)
					nextCanBeSign = false
					break
				}
				case 46:
				{
					if (hasDecimalPoint) {
						let e = fmt.Errorf("Unable to parse number with multiple decimal points '%s.'", bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(buf)))
						return [__goscript_numeric.NUMERIC_NULL, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
					}
					if (hasE) {
						let e = fmt.Errorf("Unable to parse number with decimal points in the exponent '%s.'", bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(buf)))
						return [__goscript_numeric.NUMERIC_NULL, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
					}
					bytes.Buffer.prototype.WriteByte.call($.pointerValue<bytes.Buffer>(buf), c)
					let __goscriptAssign0_0: boolean = true
					let __goscriptAssign0_1: boolean = false
					hasDecimalPoint = __goscriptAssign0_0
					nextCanBeSign = __goscriptAssign0_1
					break
				}
				case 101:
				case 69:
				{
					if (hasE) {
						let e = fmt.Errorf("Unable to parse number with multiple exponents '%s%c'", bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(buf)), $.basicInterfaceValue(c, "byte", "uint8"))
						return [__goscript_numeric.NUMERIC_NULL, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
					}
					bytes.Buffer.prototype.WriteByte.call($.pointerValue<bytes.Buffer>(buf), c)
					let __goscriptAssign1_0: boolean = true
					let __goscriptAssign1_1: boolean = true
					hasE = __goscriptAssign1_0
					nextCanBeSign = __goscriptAssign1_1
					break
				}
				case 45:
				case 43:
				{
					if (!nextCanBeSign) {
						let e = fmt.Errorf("Negative sign within number")
						return [__goscript_numeric.NUMERIC_NULL, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
					}
					bytes.Buffer.prototype.WriteByte.call($.pointerValue<bytes.Buffer>(buf), c)
					nextCanBeSign = false
					break
				}
				case 32:
				case 0:
				case 9:
				case 10:
				case 13:
				case $.arrayIndex(JSON_RBRACE!, 0):
				case $.arrayIndex(JSON_RBRACKET!, 0):
				case $.arrayIndex(JSON_COMMA!, 0):
				case $.arrayIndex(JSON_COLON!, 0):
				{
					bufio.Reader.prototype.UnreadByte.call((p$ as TSimpleJSONProtocol).reader)
					continueFor = false
					break
				}
				case $.indexString(JSON_NAN, 0):
				{
					if (bytes.Buffer.prototype.Len.call($.pointerValue<bytes.Buffer>(buf)) == 0) {
						let buffer: $.Slice<number> = $.makeSlice<number>($.stringLen(JSON_NAN), undefined, "byte")
						$.sliceElems(buffer!)[$.sliceSlot(buffer!, 0)] = c
						let [, e] = await bufio.Reader.prototype.Read.call((p$ as TSimpleJSONProtocol).reader, $.goSlice(buffer, 1, undefined))
						if (e != null) {
							return [__goscript_numeric.NUMERIC_NULL, (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)]
						}
						if (!$.stringEqual(JSON_NAN, $.bytesToString(buffer))) {
							let __goscriptShadow5 = mismatch(JSON_NAN, $.bytesToString(buffer))
							return [__goscript_numeric.NUMERIC_NULL, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, __goscriptShadow5) as $.GoError)]
						}
						if (inQuotes) {
							await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).readQuoteIfNext() : TSimpleJSONProtocol.prototype.readQuoteIfNext.call(p))
						}
						return [__goscript_numeric.NAN, null]
					} else {
						let e = fmt.Errorf("Unable to parse number starting with character '%c'", $.basicInterfaceValue(c, "byte", "uint8"))
						return [__goscript_numeric.NUMERIC_NULL, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
					}
					break
				}
				case $.indexString(JSON_INFINITY, 0):
				{
					if ((bytes.Buffer.prototype.Len.call($.pointerValue<bytes.Buffer>(buf)) == 0) || ((bytes.Buffer.prototype.Len.call($.pointerValue<bytes.Buffer>(buf)) == 1) && ($.uint($.arrayIndex(bytes.Buffer.prototype.Bytes.call($.pointerValue<bytes.Buffer>(buf))!, 0), 8) == 43))) {
						let buffer: $.Slice<number> = $.makeSlice<number>($.stringLen(JSON_INFINITY), undefined, "byte")
						$.sliceElems(buffer!)[$.sliceSlot(buffer!, 0)] = c
						let [, e] = await bufio.Reader.prototype.Read.call((p$ as TSimpleJSONProtocol).reader, $.goSlice(buffer, 1, undefined))
						if (e != null) {
							return [__goscript_numeric.NUMERIC_NULL, (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)]
						}
						if (!$.stringEqual(JSON_INFINITY, $.bytesToString(buffer))) {
							let __goscriptShadow6 = mismatch(JSON_INFINITY, $.bytesToString(buffer))
							return [__goscript_numeric.NUMERIC_NULL, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, __goscriptShadow6) as $.GoError)]
						}
						if (inQuotes) {
							await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).readQuoteIfNext() : TSimpleJSONProtocol.prototype.readQuoteIfNext.call(p))
						}
						return [__goscript_numeric.INFINITY, null]
					} else {
						if ((bytes.Buffer.prototype.Len.call($.pointerValue<bytes.Buffer>(buf)) == 1) && ($.uint($.arrayIndex(bytes.Buffer.prototype.Bytes.call($.pointerValue<bytes.Buffer>(buf))!, 0), 8) == $.indexString(JSON_NEGATIVE_INFINITY, 0))) {
							let buffer: $.Slice<number> = $.makeSlice<number>($.stringLen(JSON_NEGATIVE_INFINITY), undefined, "byte")
							$.sliceElems(buffer!)[$.sliceSlot(buffer!, 0)] = $.indexString(JSON_NEGATIVE_INFINITY, 0)
							$.sliceElems(buffer!)[$.sliceSlot(buffer!, 1)] = c
							let [, e] = await bufio.Reader.prototype.Read.call((p$ as TSimpleJSONProtocol).reader, $.goSlice(buffer, 2, undefined))
							if (e != null) {
								return [__goscript_numeric.NUMERIC_NULL, (await __goscript_protocol_exception.NewTProtocolException(e) as $.GoError)]
							}
							if (!$.stringEqual(JSON_NEGATIVE_INFINITY, $.bytesToString(buffer))) {
								let __goscriptShadow7 = mismatch(JSON_NEGATIVE_INFINITY, $.bytesToString(buffer))
								return [__goscript_numeric.NUMERIC_NULL, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, __goscriptShadow7) as $.GoError)]
							}
							if (inQuotes) {
								await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleJSONProtocol).readQuoteIfNext() : TSimpleJSONProtocol.prototype.readQuoteIfNext.call(p))
							}
							return [__goscript_numeric.NEGATIVE_INFINITY, null]
						} else {
							let e = fmt.Errorf("Unable to parse number starting with character '%c' due to existing buffer %s", $.basicInterfaceValue(c, "byte", "uint8"), bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(buf)))
							return [__goscript_numeric.NUMERIC_NULL, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
						}
					}
					break
				}
				case JSON_QUOTE:
				{
					if (!inQuotes) {
						inQuotes = true
					}
					break
				}
				default:
				{
					let e = fmt.Errorf("Unable to parse number starting with character '%c'", $.basicInterfaceValue(c, "byte", "uint8"))
					return [__goscript_numeric.NUMERIC_NULL, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
					break
				}
			}
		}
		if (bytes.Buffer.prototype.Len.call($.pointerValue<bytes.Buffer>(buf)) == 0) {
			let e = fmt.Errorf("Unable to parse number from empty string ''")
			return [__goscript_numeric.NUMERIC_NULL, (await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, e) as $.GoError)]
		}
		return [__goscript_numeric.NewNumericFromJSONString(bytes.Buffer.prototype.String.call($.pointerValue<bytes.Buffer>(buf)), false), null]
	}

	public async readQuoteIfNext(): globalThis.Promise<void> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		let __goscriptTuple21: any = await bufio.Reader.prototype.Peek.call((p$ as TSimpleJSONProtocol).reader, 1)
		let b: $.Slice<number> = __goscriptTuple21[0]
		if (($.sliceLen(b) > 0) && ($.arrayIndex(b!, 0) == JSON_QUOTE)) {
			await bufio.Reader.prototype.ReadByte.call((p$ as TSimpleJSONProtocol).reader)
		}
	}

	public resetContextStack(): void {
		let p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p);
		;(p$ as TSimpleJSONProtocol).parseContextStack = ($.arrayToSlice<_ParseContext>([1]) as jsonContextStack);
		;(p$ as TSimpleJSONProtocol).dumpContext = ($.arrayToSlice<_ParseContext>([1]) as jsonContextStack)
	}

	public async safePeekContains(b: $.Slice<number>): globalThis.Promise<boolean> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		for (let __goscriptSliceWindow0 = $.sliceRange(b), i = 0; i < __goscriptSliceWindow0.length; i++) {
			let __goscriptTuple22: any = await bufio.Reader.prototype.Peek.call($.pointerValue<TSimpleJSONProtocol>(p).reader, i + 1)
			let a: $.Slice<number> = __goscriptTuple22[0]
			if (($.sliceLen(a) < (i + 1)) || ($.arrayIndex(a!, i) != ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number))) {
				return false
			}
		}
		return true
	}

	public async write(b: $.Slice<number>): globalThis.Promise<[number, $.GoError]> {
		const p: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = this;
		const p$: TSimpleJSONProtocol = p == null ? $.pointerTarget<TSimpleJSONProtocol>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleJSONProtocol>(p)
		let [n, err] = await bufio.Writer.prototype.Write.call((p$ as TSimpleJSONProtocol).writer, b)
		if (err != null) {
			bufio.Writer.prototype.Reset.call((p$ as TSimpleJSONProtocol).writer, ((p$ as TSimpleJSONProtocol).trans as io.Writer | null))
		}
		return [n, err]
	}

	static __typeInfo = $.registerStructType(
		"thrift.TSimpleJSONProtocol",
		() => new TSimpleJSONProtocol(),
		() => [$.methodSignature("Flush", [["ctx", "context.Context"]], [["err", "error"]], true), $.methodSignature("OutputBool", [["value", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("OutputElemListBegin", [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("OutputF64", [["value", /* @__PURE__ */ $.basicType("float64")]], ["error"], true), $.methodSignature("OutputI64", [["value", /* @__PURE__ */ $.basicType("int64")]], ["error"], true), $.methodSignature("OutputListBegin", [], ["error"], true), $.methodSignature("OutputListEnd", [], ["error"], true), $.methodSignature("OutputNull", [], ["error"], true), $.methodSignature("OutputObjectBegin", [], ["error"], true), $.methodSignature("OutputObjectEnd", [], ["error"], true), $.methodSignature("OutputPostValue", [], ["error"], true), $.methodSignature("OutputPreValue", [], ["error"], true), $.methodSignature("OutputString", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("OutputStringData", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("ParseBase64EncodedBody", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("ParseElemListBegin", [], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["e", "error"]], true), $.methodSignature("ParseF64", [], [/* @__PURE__ */ $.basicType("float64"), /* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("ParseI64", [], [/* @__PURE__ */ $.basicType("int64"), /* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("ParseListBegin", [], [["isNull", /* @__PURE__ */ $.basicType("bool")], ["err", "error"]], true), $.methodSignature("ParseListEnd", [], ["error"], true), $.methodSignature("ParseObjectEnd", [], ["error"], true), $.methodSignature("ParseObjectStart", [], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("ParsePostValue", [], ["error"], true), $.methodSignature("ParsePreValue", [], ["error"], true), $.methodSignature("ParseQuotedStringBody", [], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("ParseStringBody", [], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("ReadBinary", [["ctx", "context.Context"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("ReadBool", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("ReadByte", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("int8"), "error"], true), $.methodSignature("ReadDouble", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("float64"), "error"], true), $.methodSignature("ReadFieldBegin", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("uint8", "thrift.TType"), /* @__PURE__ */ $.basicType("int16"), "error"], true), $.methodSignature("ReadFieldEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadI16", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("int16"), "error"], true), $.methodSignature("ReadI32", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("int32"), "error"], true), $.methodSignature("ReadI64", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("int64"), "error"], true), $.methodSignature("ReadListBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["e", "error"]], true), $.methodSignature("ReadListEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadMapBegin", [["ctx", "context.Context"]], [["keyType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["valueType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["e", "error"]], true), $.methodSignature("ReadMapEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadMessageBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqId", /* @__PURE__ */ $.basicType("int32")], ["err", "error"]], true), $.methodSignature("ReadMessageEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadSetBegin", [["ctx", "context.Context"]], [["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")], ["e", "error"]], true), $.methodSignature("ReadSetEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("ReadString", [["ctx", "context.Context"]], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("ReadStructBegin", [["ctx", "context.Context"]], [["name", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], true), $.methodSignature("ReadStructEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("SetTConfiguration", [["conf", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true), $.methodSignature("Skip", [["ctx", "context.Context"], ["fieldType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")]], [["err", "error"]], true), $.methodSignature("Transport", [], ["thrift.TTransport"], true), $.methodSignature("WriteBinary", [["ctx", "context.Context"], ["v", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("WriteBool", [["ctx", "context.Context"], ["b", /* @__PURE__ */ $.basicType("bool")]], ["error"], true), $.methodSignature("WriteByte", [["ctx", "context.Context"], ["b", /* @__PURE__ */ $.basicType("int8")]], ["error"], true), $.methodSignature("WriteDouble", [["ctx", "context.Context"], ["v", /* @__PURE__ */ $.basicType("float64")]], ["error"], true), $.methodSignature("WriteFieldBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["id", /* @__PURE__ */ $.basicType("int16")]], ["error"], true), $.methodSignature("WriteFieldEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteFieldStop", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteI16", [["ctx", "context.Context"], ["v", /* @__PURE__ */ $.basicType("int16")]], ["error"], true), $.methodSignature("WriteI32", [["ctx", "context.Context"], ["v", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("WriteI64", [["ctx", "context.Context"], ["v", /* @__PURE__ */ $.basicType("int64")]], ["error"], true), $.methodSignature("WriteListBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteListEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteMapBegin", [["ctx", "context.Context"], ["keyType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["valueType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteMapEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteMessageBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")], ["typeId", /* @__PURE__ */ $.basicType("int32", "thrift.TMessageType")], ["seqId", /* @__PURE__ */ $.basicType("int32")]], ["error"], true), $.methodSignature("WriteMessageEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteSetBegin", [["ctx", "context.Context"], ["elemType", /* @__PURE__ */ $.basicType("uint8", "thrift.TType")], ["size", /* @__PURE__ */ $.basicType("int")]], ["error"], true), $.methodSignature("WriteSetEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("WriteString", [["ctx", "context.Context"], ["v", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("WriteStructBegin", [["ctx", "context.Context"], ["name", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("WriteStructEnd", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("readIfNull", [], [/* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("readNonSignificantWhitespace", [], ["error"], true), $.methodSignature("readNumeric", [], ["thrift.Numeric", "error"], true), $.methodSignature("readQuoteIfNext", [], [], true), $.methodSignature("resetContextStack", [], [], true), $.methodSignature("safePeekContains", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("write", [["b", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("int"), "error"], true)],
		TSimpleJSONProtocol,
		() => [/* @__PURE__ */ $.structField("trans", "thrift.TTransport", [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration"), [1], 16, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("parseContextStack", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int", "thrift._ParseContext"), "thrift.jsonContextStack"), [2], 24, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("dumpContext", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int", "thrift._ParseContext"), "thrift.jsonContextStack"), [3], 48, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("writer", /* @__PURE__ */ $.pointerType("bufio.Writer"), [4], 72, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("reader", /* @__PURE__ */ $.pointerType("bufio.Reader"), [5], 80, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export class TSimpleJSONProtocolFactory {
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

	public clone(): TSimpleJSONProtocolFactory {
		return new TSimpleJSONProtocolFactory(this, true)
	}

	public __goscriptAssign(source: TSimpleJSONProtocolFactory): void {
		const target = this._fields
		const values = source._fields
		target.cfg = values.cfg
	}

	public async GetProtocol(trans: __goscript_transport.TTransport | null): globalThis.Promise<__goscript_protocol.TProtocol | null> {
		const p: TSimpleJSONProtocolFactory | $.VarRef<TSimpleJSONProtocolFactory> | null = this;
		return $.interfaceValue<__goscript_protocol.TProtocol | null>(await NewTSimpleJSONProtocolConf(trans, $.pointerValue<TSimpleJSONProtocolFactory>(p).cfg), "*thrift.TSimpleJSONProtocol", /* @__PURE__ */ $.pointerType("thrift.TSimpleJSONProtocol"))
	}

	public SetTConfiguration(conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): void {
		let p: TSimpleJSONProtocolFactory | $.VarRef<TSimpleJSONProtocolFactory> | null = this;
		$.pointerValue<TSimpleJSONProtocolFactory>(p).cfg = conf
	}

	static __typeInfo = $.registerStructType(
		"thrift.TSimpleJSONProtocolFactory",
		() => new TSimpleJSONProtocolFactory(),
		() => [$.methodSignature("GetProtocol", [["trans", "thrift.TTransport"]], ["thrift.TProtocol"], true), $.methodSignature("SetTConfiguration", [["conf", /* @__PURE__ */ $.pointerType("thrift.TConfiguration")]], [], true)],
		TSimpleJSONProtocolFactory,
		() => [/* @__PURE__ */ $.structField("cfg", /* @__PURE__ */ $.pointerType("thrift.TConfiguration"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export const _CONTEXT_INVALID: _ParseContext = 0

export const _CONTEXT_IN_TOPLEVEL: _ParseContext = 1

export const _CONTEXT_IN_LIST_FIRST: _ParseContext = 2

export const _CONTEXT_IN_LIST: _ParseContext = 3

export const _CONTEXT_IN_OBJECT_FIRST: _ParseContext = 4

export const _CONTEXT_IN_OBJECT_NEXT_KEY: _ParseContext = 5

export const _CONTEXT_IN_OBJECT_NEXT_VALUE: _ParseContext = 6

export function _ParseContext_String(p: _ParseContext): string {
	switch (p) {
		case 1:
		{
			return "TOPLEVEL"
			break
		}
		case 2:
		{
			return "LIST-FIRST"
			break
		}
		case 3:
		{
			return "LIST"
			break
		}
		case 4:
		{
			return "OBJECT-FIRST"
			break
		}
		case 5:
		{
			return "OBJECT-NEXT-KEY"
			break
		}
		case 6:
		{
			return "OBJECT-NEXT-VALUE"
			break
		}
	}
	return "UNKNOWN-PARSE-CONTEXT"
}

export function jsonContextStack_push(s: $.VarRef<jsonContextStack> | null, v: _ParseContext): void {
	s!.value = ($.appendOne(($.pointerValue<jsonContextStack>(s) as jsonContextStack), v) as jsonContextStack)
}

export function jsonContextStack_peek(s: jsonContextStack): [_ParseContext, boolean] {
	let v: _ParseContext = 0
	let ok: boolean = false
	let l = $.sliceLen((s as jsonContextStack))
	if (l <= 0) {
		return [v, ok]
	}
	return [$.arrayIndex(s!, l - 1), true]
}

export function jsonContextStack_pop(s: $.VarRef<jsonContextStack> | null): [_ParseContext, boolean] {
	let v: _ParseContext = 0
	let ok: boolean = false
	let l = $.sliceLen(($.pointerValue<jsonContextStack>(s) as jsonContextStack))
	if (l <= 0) {
		return [v, ok]
	}
	v = $.arrayIndex(($.pointerValue<jsonContextStack>(s))!, l - 1)
	s!.value = ($.goSlice(($.pointerValue<jsonContextStack>(s)), 0, l - 1) as jsonContextStack)
	return [v, true]
}

export var errEmptyJSONContextStack: __goscript_protocol_exception.TProtocolException | null

export async function __goscript_init_errEmptyJSONContextStack(): globalThis.Promise<void> {
	if (((errEmptyJSONContextStack) as any) === undefined) {
		errEmptyJSONContextStack = await __goscript_protocol_exception.NewTProtocolExceptionWithType(1, errors.New("Unexpected empty json protocol context stack"))
	}
}

export function __goscript_get_errEmptyJSONContextStack(): __goscript_protocol_exception.TProtocolException | null {
	if (((errEmptyJSONContextStack) as any) === undefined) {
		throw new globalThis.Error("goscript package variable errEmptyJSONContextStack read before initialization")
	}
	return errEmptyJSONContextStack
}

export function __goscript_set_errEmptyJSONContextStack(__goscriptValue: __goscript_protocol_exception.TProtocolException | null): void {
	errEmptyJSONContextStack = __goscriptValue
}

export async function NewTSimpleJSONProtocol(t: __goscript_transport.TTransport | null): globalThis.Promise<TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null> {
	return NewTSimpleJSONProtocolConf(t, new __goscript_configuration.TConfiguration({noPropagation: true}))
}

export async function NewTSimpleJSONProtocolConf(t: __goscript_transport.TTransport | null, conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): globalThis.Promise<TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null> {
	await __goscript_configuration.PropagateTConfiguration((t as any), conf)
	let v: TSimpleJSONProtocol | $.VarRef<TSimpleJSONProtocol> | null = (() => { const __goscriptLiteralField0 = bufio.NewWriter((t as io.Writer | null)); const __goscriptLiteralField1 = bufio.NewReader((t as io.Reader | null)); return new TSimpleJSONProtocol({trans: t, cfg: conf, writer: __goscriptLiteralField0, reader: __goscriptLiteralField1}) })()
	let v$: TSimpleJSONProtocol = v == null ? $.pointerTarget<TSimpleJSONProtocol>(v) : (v as any).__isVarRef === true ? (v as any).value : (v as any).__goValue === undefined ? (v as any) : $.pointerTarget<TSimpleJSONProtocol>(v)
	jsonContextStack_push($.fieldRef((v$ as TSimpleJSONProtocol)._fields, "parseContextStack"), 1)
	jsonContextStack_push($.fieldRef((v$ as TSimpleJSONProtocol)._fields, "dumpContext"), 1)
	return v
}

export function NewTSimpleJSONProtocolFactory(): TSimpleJSONProtocolFactory | $.VarRef<TSimpleJSONProtocolFactory> | null {
	return new TSimpleJSONProtocolFactory({cfg: new __goscript_configuration.TConfiguration({noPropagation: true})})
}

export function NewTSimpleJSONProtocolFactoryConf(conf: __goscript_configuration.TConfiguration | $.VarRef<__goscript_configuration.TConfiguration> | null): TSimpleJSONProtocolFactory | $.VarRef<TSimpleJSONProtocolFactory> | null {
	return new TSimpleJSONProtocolFactory({cfg: conf})
}

export let JSON_COMMA: $.Slice<number> = null! as $.Slice<number>

export function __goscript_set_JSON_COMMA(__goscriptValue: $.Slice<number>): void {
	JSON_COMMA = __goscriptValue
}

export let JSON_COLON: $.Slice<number> = null! as $.Slice<number>

export function __goscript_set_JSON_COLON(__goscriptValue: $.Slice<number>): void {
	JSON_COLON = __goscriptValue
}

export let JSON_LBRACE: $.Slice<number> = null! as $.Slice<number>

export function __goscript_set_JSON_LBRACE(__goscriptValue: $.Slice<number>): void {
	JSON_LBRACE = __goscriptValue
}

export let JSON_RBRACE: $.Slice<number> = null! as $.Slice<number>

export function __goscript_set_JSON_RBRACE(__goscriptValue: $.Slice<number>): void {
	JSON_RBRACE = __goscriptValue
}

export let JSON_LBRACKET: $.Slice<number> = null! as $.Slice<number>

export function __goscript_set_JSON_LBRACKET(__goscriptValue: $.Slice<number>): void {
	JSON_LBRACKET = __goscriptValue
}

export let JSON_RBRACKET: $.Slice<number> = null! as $.Slice<number>

export function __goscript_set_JSON_RBRACKET(__goscriptValue: $.Slice<number>): void {
	JSON_RBRACKET = __goscriptValue
}

export let JSON_QUOTE: number = 0

export function __goscript_set_JSON_QUOTE(__goscriptValue: number): void {
	JSON_QUOTE = __goscriptValue
}

export let JSON_QUOTE_BYTES: $.Slice<number> = null! as $.Slice<number>

export function __goscript_set_JSON_QUOTE_BYTES(__goscriptValue: $.Slice<number>): void {
	JSON_QUOTE_BYTES = __goscriptValue
}

export let JSON_NULL: $.Slice<number> = null! as $.Slice<number>

export function __goscript_set_JSON_NULL(__goscriptValue: $.Slice<number>): void {
	JSON_NULL = __goscriptValue
}

export let JSON_TRUE: $.Slice<number> = null! as $.Slice<number>

export function __goscript_set_JSON_TRUE(__goscriptValue: $.Slice<number>): void {
	JSON_TRUE = __goscriptValue
}

export let JSON_FALSE: $.Slice<number> = null! as $.Slice<number>

export function __goscript_set_JSON_FALSE(__goscriptValue: $.Slice<number>): void {
	JSON_FALSE = __goscriptValue
}

export let JSON_INFINITY: string = ""

export function __goscript_set_JSON_INFINITY(__goscriptValue: string): void {
	JSON_INFINITY = __goscriptValue
}

export let JSON_NEGATIVE_INFINITY: string = ""

export function __goscript_set_JSON_NEGATIVE_INFINITY(__goscriptValue: string): void {
	JSON_NEGATIVE_INFINITY = __goscriptValue
}

export let JSON_NAN: string = ""

export function __goscript_set_JSON_NAN(__goscriptValue: string): void {
	JSON_NAN = __goscriptValue
}

export let JSON_INFINITY_BYTES: $.Slice<number> = null! as $.Slice<number>

export function __goscript_set_JSON_INFINITY_BYTES(__goscriptValue: $.Slice<number>): void {
	JSON_INFINITY_BYTES = __goscriptValue
}

export let JSON_NEGATIVE_INFINITY_BYTES: $.Slice<number> = null! as $.Slice<number>

export function __goscript_set_JSON_NEGATIVE_INFINITY_BYTES(__goscriptValue: $.Slice<number>): void {
	JSON_NEGATIVE_INFINITY_BYTES = __goscriptValue
}

export let JSON_NAN_BYTES: $.Slice<number> = null! as $.Slice<number>

export function __goscript_set_JSON_NAN_BYTES(__goscriptValue: $.Slice<number>): void {
	JSON_NAN_BYTES = __goscriptValue
}

function __goscriptInit0(): void {
	JSON_COMMA = new Uint8Array([44]) as $.Slice<number>
	JSON_COLON = new Uint8Array([58]) as $.Slice<number>
	JSON_LBRACE = new Uint8Array([123]) as $.Slice<number>
	JSON_RBRACE = new Uint8Array([125]) as $.Slice<number>
	JSON_LBRACKET = new Uint8Array([91]) as $.Slice<number>
	JSON_RBRACKET = new Uint8Array([93]) as $.Slice<number>
	JSON_QUOTE = 34
	JSON_QUOTE_BYTES = new Uint8Array([34]) as $.Slice<number>
	JSON_NULL = new Uint8Array([110, 117, 108, 108]) as $.Slice<number>
	JSON_TRUE = new Uint8Array([116, 114, 117, 101]) as $.Slice<number>
	JSON_FALSE = new Uint8Array([102, 97, 108, 115, 101]) as $.Slice<number>
	JSON_INFINITY = "Infinity"
	JSON_NEGATIVE_INFINITY = "-Infinity"
	JSON_NAN = "NaN"
	JSON_INFINITY_BYTES = new Uint8Array([73, 110, 102, 105, 110, 105, 116, 121]) as $.Slice<number>
	JSON_NEGATIVE_INFINITY_BYTES = new Uint8Array([45, 73, 110, 102, 105, 110, 105, 116, 121]) as $.Slice<number>
	JSON_NAN_BYTES = new Uint8Array([78, 97, 78]) as $.Slice<number>
}

export async function jsonQuote(s: string): globalThis.Promise<string> {
	let __goscriptTuple23: any = await json.Marshal(s)
	let b: $.Slice<number> = __goscriptTuple23[0]
	let s1 = $.bytesToString(b)
	return s1
}

export async function jsonUnquote(s: string): globalThis.Promise<[string, boolean]> {
	let s1 = $.varRef<string>("")
	let err = await json.Unmarshal($.stringToBytes(s), $.interfaceValue(s1, "*string", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("string"))))
	return [$.pointerValue<string>(s1), err == null]
}

export function mismatch(expected: string, actual: string): $.GoError {
	return fmt.Errorf("Expected '%s' but found '%s' while parsing JSON.", expected, actual)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (_ParseContext_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "thrift._ParseContext"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any

export { __goscriptInit0 }
