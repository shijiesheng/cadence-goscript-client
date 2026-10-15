// Generated file based on json_handler.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as json2 from "@goscript/encoding/json/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as goexperiment from "@goscript/internal/goexperiment/index.js"

import * as io from "@goscript/io/index.js"

import * as buffer from "@goscript/log/slog/internal/buffer/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_attr from "./attr.gs.ts"

import * as __goscript_handler from "./handler.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import type * as __goscript_record from "./record.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/internal/goexperiment/index.js"
import "@goscript/io/index.js"
import "@goscript/log/slog/internal/buffer/index.js"
import "@goscript/strconv/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/unicode/utf8/index.js"
import "./attr.gs.ts"
import "./handler.gs.ts"
import "./level.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("log/slog", ["slog.JSONHandler", "slog.jsonEncoder"])

export class JSONHandler {
	public get commonHandler(): __goscript_handler.commonHandler | $.VarRef<__goscript_handler.commonHandler> | null {
		return this._fields.commonHandler
	}

	public set commonHandler(value: __goscript_handler.commonHandler | $.VarRef<__goscript_handler.commonHandler> | null) {
		this._fields.commonHandler = value
	}

	public _fields: {
		commonHandler: __goscript_handler.commonHandler | $.VarRef<__goscript_handler.commonHandler> | null
	}

	constructor(init?: Partial<{commonHandler?: __goscript_handler.commonHandler | $.VarRef<__goscript_handler.commonHandler> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			commonHandler: init?.commonHandler ?? (null! as __goscript_handler.commonHandler | $.VarRef<__goscript_handler.commonHandler> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public __goscriptClone(): JSONHandler {
		return new JSONHandler(this, true)
	}

	public __goscriptAssign(source: JSONHandler): void {
		const target = this._fields
		const values = source._fields
		target.commonHandler = values.commonHandler
	}

	public async Enabled(_p0: context.Context | null, level: __goscript_level.Level): globalThis.Promise<boolean> {
		const h: JSONHandler | $.VarRef<JSONHandler> | null = this;
		return __goscript_handler.commonHandler.prototype.enabled.call($.pointerValue<JSONHandler>(h).commonHandler, level)
	}

	public async Handle(_p0: context.Context | null, r: __goscript_record.Record): globalThis.Promise<$.GoError> {
		const h: JSONHandler | $.VarRef<JSONHandler> | null = this;
		return __goscript_handler.commonHandler.prototype.handle.call($.pointerValue<JSONHandler>(h).commonHandler, r)
	}

	public async WithAttrs(attrs: $.Slice<__goscript_attr.Attr>): globalThis.Promise<__goscript_handler.Handler | null> {
		const h: JSONHandler | $.VarRef<JSONHandler> | null = this;
		return $.interfaceValue<__goscript_handler.Handler | null>((await (async () => { const __goscriptLiteralField0 = await __goscript_handler.commonHandler.prototype.withAttrs.call($.pointerValue<JSONHandler>(h).commonHandler, attrs); return new JSONHandler({commonHandler: __goscriptLiteralField0}) })()), "*slog.JSONHandler", /* @__PURE__ */ $.pointerType("slog.JSONHandler"))
	}

	public WithGroup(name: string): __goscript_handler.Handler | null {
		const h: JSONHandler | $.VarRef<JSONHandler> | null = this;
		return $.interfaceValue<__goscript_handler.Handler | null>((() => { const __goscriptLiteralField1 = __goscript_handler.commonHandler.prototype.withGroup.call($.pointerValue<JSONHandler>(h).commonHandler, name); return new JSONHandler({commonHandler: __goscriptLiteralField1}) })(), "*slog.JSONHandler", /* @__PURE__ */ $.pointerType("slog.JSONHandler"))
	}

	public attrSep(): any {
		return $.pointerValue<__goscript_handler.commonHandler>(this.commonHandler).attrSep()
	}

	public clone(): any {
		return $.pointerValue<__goscript_handler.commonHandler>(this.commonHandler).clone()
	}

	public async enabled(l: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_handler.commonHandler>(this.commonHandler).enabled(l)
	}

	public async handle(r: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_handler.commonHandler>(this.commonHandler).handle(r)
	}

	public async newHandleState(buf: any, freeBuf: any, sep: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_handler.commonHandler>(this.commonHandler).newHandleState(buf, freeBuf, sep)
	}

	public async withAttrs(_as: any): globalThis.Promise<any> {
		return await $.pointerValue<__goscript_handler.commonHandler>(this.commonHandler).withAttrs(_as)
	}

	public withGroup(name: any): any {
		return $.pointerValue<__goscript_handler.commonHandler>(this.commonHandler).withGroup(name)
	}

	static __typeInfo = $.registerStructType(
		"slog.JSONHandler",
		() => new JSONHandler(),
		() => [$.methodSignature("Enabled", [["_", "context.Context"], ["level", /* @__PURE__ */ $.basicType("int", "slog.Level")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Handle", [["_", "context.Context"], ["r", "slog.Record"]], ["error"], true), $.methodSignature("WithAttrs", [["attrs", /* @__PURE__ */ $.sliceType("slog.Attr")]], ["slog.Handler"], true), $.methodSignature("WithGroup", [["name", /* @__PURE__ */ $.basicType("string")]], ["slog.Handler"], true), $.methodSignature("attrSep", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("clone", [], [/* @__PURE__ */ $.pointerType("slog.commonHandler")]), $.methodSignature("enabled", [["l", /* @__PURE__ */ $.basicType("int", "slog.Level")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("handle", [["r", "slog.Record"]], ["error"]), $.methodSignature("newHandleState", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "buffer.Buffer"))], ["freeBuf", /* @__PURE__ */ $.basicType("bool")], ["sep", /* @__PURE__ */ $.basicType("string")]], ["slog.handleState"]), $.methodSignature("withAttrs", [["as", /* @__PURE__ */ $.sliceType("slog.Attr")]], [/* @__PURE__ */ $.pointerType("slog.commonHandler")]), $.methodSignature("withGroup", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("slog.commonHandler")])],
		JSONHandler,
		() => [/* @__PURE__ */ $.structField("commonHandler", /* @__PURE__ */ $.pointerType("slog.commonHandler"), [0], 0, false, { pkgPath: "log/slog", anonymous: true })]
	)
}

export class jsonEncoder {
	public get buf(): bytes.Buffer | $.VarRef<bytes.Buffer> | null {
		return this._fields.buf
	}

	public set buf(value: bytes.Buffer | $.VarRef<bytes.Buffer> | null) {
		this._fields.buf = value
	}

	// Use a json.Encoder to avoid escaping HTML.
	public get json(): json2.Encoder | $.VarRef<json2.Encoder> | null {
		return this._fields.json
	}

	public set json(value: json2.Encoder | $.VarRef<json2.Encoder> | null) {
		this._fields.json = value
	}

	public _fields: {
		buf: bytes.Buffer | $.VarRef<bytes.Buffer> | null
		json: json2.Encoder | $.VarRef<json2.Encoder> | null
	}

	constructor(init?: Partial<{buf?: bytes.Buffer | $.VarRef<bytes.Buffer> | null, json?: json2.Encoder | $.VarRef<json2.Encoder> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			buf: init?.buf ?? (null! as bytes.Buffer | $.VarRef<bytes.Buffer> | null),
			json: init?.json ?? (null! as json2.Encoder | $.VarRef<json2.Encoder> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): jsonEncoder {
		return new jsonEncoder(this, true)
	}

	public __goscriptAssign(source: jsonEncoder): void {
		const target = this._fields
		const values = source._fields
		target.buf = values.buf
		target.json = values.json
	}

	static __typeInfo = $.registerStructType(
		"slog.jsonEncoder",
		() => new jsonEncoder(),
		() => [],
		jsonEncoder,
		() => [/* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.pointerType("bytes.Buffer"), [0], 0, false, { pkgPath: "log/slog" }), /* @__PURE__ */ $.structField("json", /* @__PURE__ */ $.pointerType("json.Encoder"), [1], 8, false, { pkgPath: "log/slog" })]
	)
}

export const hex: string = "0123456789abcdef"

export function NewJSONHandler(w: io.Writer | null, opts: __goscript_handler.HandlerOptions | $.VarRef<__goscript_handler.HandlerOptions> | null): JSONHandler | $.VarRef<JSONHandler> | null {
	if (opts == null) {
		opts = new __goscript_handler.HandlerOptions()
	}
	return new JSONHandler({commonHandler: new __goscript_handler.commonHandler({json: true, w: w, opts: ($.pointerValue<__goscript_handler.HandlerOptions>(opts)).clone(), mu: new sync.Mutex()})})
}

export async function appendJSONTime(s: __goscript_handler.handleState | $.VarRef<__goscript_handler.handleState> | null, t: time.Time): globalThis.Promise<void> {
	const s$: __goscript_handler.handleState = s == null ? $.pointerTarget<__goscript_handler.handleState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_handler.handleState>(s)
	{
		let y = $.markAsStructValue($.cloneStructValue(t)).Year()
		if ((y < 0) || (y >= 10000)) {
			// RFC 3339 is clear that years are 4 digits exactly.
			// See golang.org/issue/4556#c15 for more discussion.
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_handler.handleState).appendError(errors.New("time.Time year outside of range [0,9999]")) : __goscript_handler.handleState.prototype.appendError.call(s, errors.New("time.Time year outside of range [0,9999]")))
			return
		}
	}
	buffer.Buffer_WriteByte((s$ as __goscript_handler.handleState).buf, 34);
	;(s$ as __goscript_handler.handleState).buf!.value = ($.markAsStructValue($.cloneStructValue(t)).AppendFormat($.pointerValue<buffer.Buffer>((s$ as __goscript_handler.handleState).buf), time.RFC3339Nano) as buffer.Buffer)
	buffer.Buffer_WriteByte((s$ as __goscript_handler.handleState).buf, 34)
}

export async function appendJSONValue(s: __goscript_handler.handleState | $.VarRef<__goscript_handler.handleState> | null, v: __goscript_value.Value): globalThis.Promise<$.GoError> {
	const s$: __goscript_handler.handleState = s == null ? $.pointerTarget<__goscript_handler.handleState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_handler.handleState>(s)
	switch (v.Kind()) {
		case 5:
		{
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_handler.handleState).appendString(v.str()) : __goscript_handler.handleState.prototype.appendString.call(s, v.str()))
			break
		}
		case 4:
		{
			;(s$ as __goscript_handler.handleState).buf!.value = (strconv.AppendInt($.pointerValue<buffer.Buffer>((s$ as __goscript_handler.handleState).buf), await v.Int64(), 10) as buffer.Buffer)
			break
		}
		case 7:
		{
			;(s$ as __goscript_handler.handleState).buf!.value = (strconv.AppendUint($.pointerValue<buffer.Buffer>((s$ as __goscript_handler.handleState).buf), await v.Uint64(), 10) as buffer.Buffer)
			break
		}
		case 3:
		{
			{
				let err = await appendJSONMarshal((s$ as __goscript_handler.handleState).buf, $.basicInterfaceValue(await v.Float64(), "float64"))
				if (err != null) {
					return err
				}
			}
			break
		}
		case 1:
		{
			;(s$ as __goscript_handler.handleState).buf!.value = (strconv.AppendBool($.pointerValue<buffer.Buffer>((s$ as __goscript_handler.handleState).buf), await v.Bool()) as buffer.Buffer)
			break
		}
		case 2:
		{
			;(s$ as __goscript_handler.handleState).buf!.value = (strconv.AppendInt($.pointerValue<buffer.Buffer>((s$ as __goscript_handler.handleState).buf), $.int64(await v.Duration()), 10) as buffer.Buffer)
			break
		}
		case 6:
		{
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_handler.handleState).appendTime(await v.Time()) : __goscript_handler.handleState.prototype.appendTime.call(s, await v.Time()))
			break
		}
		case 0:
		{
			let a = await v.Any()
			let [, jm] = $.typeAssertTuple<json2.Marshaler | null>(a, "json.Marshaler")
			{
				let [err, ok] = $.typeAssertTuple<$.GoError>(a, "error")
				if (ok && !jm) {
					await __goscript_handler.handleState.prototype.appendString.call(s, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				} else {
					return appendJSONMarshal((s$ as __goscript_handler.handleState).buf, a)
				}
			}
			break
		}
		default:
		{
			$.panic(await fmt.Sprintf("bad kind: %s", $.namedValueInterfaceValue<any>(v.Kind(), "slog.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
			break
		}
	}
	return null
}

export let jsonEncoderPool: sync.Pool | $.VarRef<sync.Pool> | null = new sync.Pool({New: $.functionValue((): any => {
	let enc: jsonEncoder | $.VarRef<jsonEncoder> | null = new jsonEncoder({buf: new bytes.Buffer()})
	$.pointerValue<jsonEncoder>(enc).json = json2.NewEncoder($.pointerValueOrNil($.interfaceValue<io.Writer | null>($.pointerValue<jsonEncoder>(enc).buf, "*bytes.Buffer", /* @__PURE__ */ $.pointerType("bytes.Buffer")))!)
	json2.Encoder.prototype.SetEscapeHTML.call($.pointerValue<json2.Encoder>($.pointerValue<jsonEncoder>(enc).json), false)
	return $.interfaceValue(enc, "*slog.jsonEncoder", /* @__PURE__ */ $.pointerType("slog.jsonEncoder"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})

export function __goscript_set_jsonEncoderPool(__goscriptValue: sync.Pool | $.VarRef<sync.Pool> | null): void {
	jsonEncoderPool = __goscriptValue
}

export async function appendJSONMarshal(buf: $.VarRef<buffer.Buffer> | null, v: any): globalThis.Promise<$.GoError> {
	using __defer = new $.DisposableStack()
	let j: jsonEncoder | $.VarRef<jsonEncoder> | null = $.mustTypeAssert<jsonEncoder | $.VarRef<jsonEncoder> | null>(await sync.Pool.prototype.Get.call($.pointerValue<sync.Pool>(jsonEncoderPool)), /* @__PURE__ */ $.pointerType("slog.jsonEncoder"))
	let j$: jsonEncoder = j == null ? $.pointerTarget<jsonEncoder>(j) : (j as any).__isVarRef === true ? (j as any).value : (j as any).__goValue === undefined ? (j as any) : $.pointerTarget<jsonEncoder>(j)
	__defer.defer(() => { ((): void => {
		// To reduce peak allocation, return only smaller buffers to the pool.
		const maxBufferSize: number = 16384
		if (bytes.Buffer.prototype.Cap.call($.pointerValue<bytes.Buffer>((j$ as jsonEncoder).buf)) > 16384) {
			return
		}
		bytes.Buffer.prototype.Reset.call($.pointerValue<bytes.Buffer>((j$ as jsonEncoder).buf))
		sync.Pool.prototype.Put.call($.pointerValue<sync.Pool>(jsonEncoderPool), $.interfaceValue(j, "*slog.jsonEncoder", /* @__PURE__ */ $.pointerType("slog.jsonEncoder")))
	})() })

	{
		let err = await json2.Encoder.prototype.Encode.call($.pointerValue<json2.Encoder>((j$ as jsonEncoder).json), v)
		if (err != null) {
			return err
		}
	}

	let bs: $.Slice<number> = bytes.Buffer.prototype.Bytes.call($.pointerValue<bytes.Buffer>((j$ as jsonEncoder).buf))
	buffer.Buffer_Write(buf, $.goSlice(bs, undefined, $.sliceLen(bs) - 1))
	return null
}

export async function appendEscapedJSONString(buf: $.Slice<number>, s: string): globalThis.Promise<$.Slice<number>> {
	let char: ((b: number) => void) | null = $.functionValue((b: number): void => {
		buf = $.append(buf, $.uint(b, 8), $.byteSliceHint)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("uint8")], results: [] } as $.FunctionTypeInfo))
	let str: ((s: string) => void) | null = $.functionValue((s: string): void => {
		buf = $.appendSlice(buf, $.stringToBytes(s), $.byteSliceHint)
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo))

	let start = 0
	for (let i = 0; i < $.stringLen(s); ) {
		{
			let b = $.indexString(s, i)
			if (b < 128) {
				if ($.arrayIndex(safeSet, b)) {
					i++
					continue
				}
				if (start < i) {
					void (__goscriptAwait = str!($.sliceStringOrBytes(s, start, i)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				void (__goscriptAwait = char!(92), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				switch (b) {
					case 92:
					case 34:
					{
						void (__goscriptAwait = char!(b), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						break
					}
					case 10:
					{
						void (__goscriptAwait = char!(110), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						break
					}
					case 13:
					{
						void (__goscriptAwait = char!(114), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						break
					}
					case 9:
					{
						void (__goscriptAwait = char!(116), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						break
					}
					default:
					{
						void (__goscriptAwait = str!("u00"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						void (__goscriptAwait = char!($.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", $.uintShr(b, 4, 8))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						void (__goscriptAwait = char!($.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", b & 0xF)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						break
					}
				}
				i++
				start = i
				continue
			}
		}
		let [c, size] = utf8.DecodeRuneInString($.sliceStringOrBytes(s, i, undefined))
		if ((c == 65533) && (size == 1)) {
			if (start < i) {
				void (__goscriptAwait = str!($.sliceStringOrBytes(s, start, i)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			if (goexperiment.JSONv2) {
				void (__goscriptAwait = str!("\xef\xbf\xbd"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			} else {
				void (__goscriptAwait = str!("\\ufffd"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			i = i + (size)
			start = i
			continue
		}
		// U+2028 is LINE SEPARATOR.
		// U+2029 is PARAGRAPH SEPARATOR.
		// They are both technically valid characters in JSON strings,
		// but don't work in JSONP, which has to be evaluated as JavaScript,
		// and can lead to security holes there. It is valid JSON to
		// escape them, so we do so unconditionally.
		// See http://timelessrepo.com/json-isnt-a-javascript-subset for discussion.
		if ((c == 8232) || (c == 8233)) {
			if (start < i) {
				void (__goscriptAwait = str!($.sliceStringOrBytes(s, start, i)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			void (__goscriptAwait = str!("\\u202"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = char!($.indexByteString("\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x61\x62\x63\x64\x65\x66", c & 0xF)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			i = i + (size)
			start = i
			continue
		}
		i = i + (size)
	}
	if (start < $.stringLen(s)) {
		void (__goscriptAwait = str!($.sliceStringOrBytes(s, start, undefined)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}
	return buf
}

export let safeSet: boolean[] = $.arrayValue([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true])

export function __goscript_set_safeSet(__goscriptValue: boolean[]): void {
	safeSet = __goscriptValue
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_value.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int", "slog.Kind"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
