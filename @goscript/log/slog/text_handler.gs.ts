// Generated file based on text_handler.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as encoding from "@goscript/encoding/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as sync from "@goscript/sync/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as buffer from "@goscript/log/slog/internal/buffer/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_attr from "./attr.gs.ts"

import * as __goscript_handler from "./handler.gs.ts"

import * as __goscript_json_handler from "./json_handler.gs.ts"

import * as __goscript_level from "./level.gs.ts"

import type * as __goscript_record from "./record.gs.ts"

import * as __goscript_value from "./value.gs.ts"
import "@goscript/context/index.js"
import "@goscript/encoding/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strconv/index.js"
import "@goscript/sync/index.js"
import "@goscript/unicode/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/log/slog/internal/buffer/index.js"
import "@goscript/time/index.js"
import "./attr.gs.ts"
import "./handler.gs.ts"
import "./json_handler.gs.ts"
import "./level.gs.ts"
import "./value.gs.ts"

$.registerTypePackagePath("log/slog", ["slog.TextHandler"])

export class TextHandler {
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

	public __goscriptClone(): TextHandler {
		return new TextHandler(this, true)
	}

	public __goscriptAssign(source: TextHandler): void {
		const target = this._fields
		const values = source._fields
		target.commonHandler = values.commonHandler
	}

	public async Enabled(_p0: context.Context | null, level: __goscript_level.Level): globalThis.Promise<boolean> {
		const h: TextHandler | $.VarRef<TextHandler> | null = this;
		return __goscript_handler.commonHandler.prototype.enabled.call($.pointerValue<TextHandler>(h).commonHandler, level)
	}

	public async Handle(_p0: context.Context | null, r: __goscript_record.Record): globalThis.Promise<$.GoError> {
		const h: TextHandler | $.VarRef<TextHandler> | null = this;
		return __goscript_handler.commonHandler.prototype.handle.call($.pointerValue<TextHandler>(h).commonHandler, r)
	}

	public async WithAttrs(attrs: $.Slice<__goscript_attr.Attr>): globalThis.Promise<__goscript_handler.Handler | null> {
		const h: TextHandler | $.VarRef<TextHandler> | null = this;
		return $.interfaceValue<__goscript_handler.Handler | null>((await (async () => { const __goscriptLiteralField0 = await __goscript_handler.commonHandler.prototype.withAttrs.call($.pointerValue<TextHandler>(h).commonHandler, attrs); return new TextHandler({commonHandler: __goscriptLiteralField0}) })()), "*slog.TextHandler", /* @__PURE__ */ $.pointerType("slog.TextHandler"))
	}

	public WithGroup(name: string): __goscript_handler.Handler | null {
		const h: TextHandler | $.VarRef<TextHandler> | null = this;
		return $.interfaceValue<__goscript_handler.Handler | null>((() => { const __goscriptLiteralField1 = __goscript_handler.commonHandler.prototype.withGroup.call($.pointerValue<TextHandler>(h).commonHandler, name); return new TextHandler({commonHandler: __goscriptLiteralField1}) })(), "*slog.TextHandler", /* @__PURE__ */ $.pointerType("slog.TextHandler"))
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
		"slog.TextHandler",
		() => new TextHandler(),
		() => [$.methodSignature("Enabled", [["_", "context.Context"], ["level", /* @__PURE__ */ $.basicType("int", "slog.Level")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Handle", [["_", "context.Context"], ["r", "slog.Record"]], ["error"], true), $.methodSignature("WithAttrs", [["attrs", /* @__PURE__ */ $.sliceType("slog.Attr")]], ["slog.Handler"], true), $.methodSignature("WithGroup", [["name", /* @__PURE__ */ $.basicType("string")]], ["slog.Handler"], true), $.methodSignature("attrSep", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("clone", [], [/* @__PURE__ */ $.pointerType("slog.commonHandler")]), $.methodSignature("enabled", [["l", /* @__PURE__ */ $.basicType("int", "slog.Level")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("handle", [["r", "slog.Record"]], ["error"]), $.methodSignature("newHandleState", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"), "buffer.Buffer"))], ["freeBuf", /* @__PURE__ */ $.basicType("bool")], ["sep", /* @__PURE__ */ $.basicType("string")]], ["slog.handleState"]), $.methodSignature("withAttrs", [["as", /* @__PURE__ */ $.sliceType("slog.Attr")]], [/* @__PURE__ */ $.pointerType("slog.commonHandler")]), $.methodSignature("withGroup", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.pointerType("slog.commonHandler")])],
		TextHandler,
		() => [/* @__PURE__ */ $.structField("commonHandler", /* @__PURE__ */ $.pointerType("slog.commonHandler"), [0], 0, false, { pkgPath: "log/slog", anonymous: true })]
	)
}

export function NewTextHandler(w: io.Writer | null, opts: __goscript_handler.HandlerOptions | $.VarRef<__goscript_handler.HandlerOptions> | null): TextHandler | $.VarRef<TextHandler> | null {
	if (opts == null) {
		opts = new __goscript_handler.HandlerOptions()
	}
	return new TextHandler({commonHandler: new __goscript_handler.commonHandler({json: false, w: w, opts: ($.pointerValue<__goscript_handler.HandlerOptions>(opts)).clone(), mu: new sync.Mutex()})})
}

export async function appendTextValue(s: __goscript_handler.handleState | $.VarRef<__goscript_handler.handleState> | null, v: __goscript_value.Value): globalThis.Promise<$.GoError> {
	const s$: __goscript_handler.handleState = s == null ? $.pointerTarget<__goscript_handler.handleState>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<__goscript_handler.handleState>(s)
	switch (v.Kind()) {
		case 5:
		{
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_handler.handleState).appendString(v.str()) : __goscript_handler.handleState.prototype.appendString.call(s, v.str()))
			break
		}
		case 6:
		{
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_handler.handleState).appendTime(await v.time()) : __goscript_handler.handleState.prototype.appendTime.call(s, await v.time()))
			break
		}
		case 0:
		{
			{
				let [ta, ok] = $.typeAssertTuple<encoding.TextAppender | null>(v._any, "encoding.TextAppender")
				if (ok) {
					let buf: $.Slice<number> = null! as $.Slice<number>
					let __goscriptTuple0: any = await (ta !== null && (ta as any).__isVarRef !== true && (ta as any).__goValue === undefined ? (ta as Exclude<encoding.TextAppender, null>) : $.pointerValue<Exclude<encoding.TextAppender, null>>(ta)).AppendText(buf)
					buf = __goscriptTuple0[0]
					let err = __goscriptTuple0[1]
					if (err != null) {
						return err
					}
					// TODO: append directly to buffer when possible
					await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_handler.handleState).appendString($.bytesToString(buf)) : __goscript_handler.handleState.prototype.appendString.call(s, $.bytesToString(buf)))
					return null
				} else {
					{
						let [tm, __goscriptShadow0] = $.typeAssertTuple<encoding.TextMarshaler | null>(v._any, "encoding.TextMarshaler")
						if (__goscriptShadow0) {
							let __goscriptTuple1: any = await (tm !== null && (tm as any).__isVarRef !== true && (tm as any).__goValue === undefined ? (tm as Exclude<encoding.TextMarshaler, null>) : $.pointerValue<Exclude<encoding.TextMarshaler, null>>(tm)).MarshalText()
							let data: $.Slice<number> = __goscriptTuple1[0]
							let err = __goscriptTuple1[1]
							if (err != null) {
								return err
							}
							// TODO: avoid the conversion to string.
							await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_handler.handleState).appendString($.bytesToString(data)) : __goscript_handler.handleState.prototype.appendString.call(s, $.bytesToString(data)))
							return null
						}
					}
				}
			}
			{
				let __goscriptTuple2: any = await byteSlice(v._any)
				let bs: $.Slice<number> = __goscriptTuple2[0]
				let ok = __goscriptTuple2[1]
				if (ok) {
					// As of Go 1.19, this only allocates for strings longer than 32 bytes.
					buffer.Buffer_WriteString((s$ as __goscript_handler.handleState).buf, strconv.Quote($.bytesToString(bs)))
					return null
				}
			}
			await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as __goscript_handler.handleState).appendString(await fmt.Sprintf("%+v", await v.Any())) : __goscript_handler.handleState.prototype.appendString.call(s, await fmt.Sprintf("%+v", await v.Any())))
			break
		}
		default:
		{
			;(s$ as __goscript_handler.handleState).buf!.value = (await v.append($.pointerValue<buffer.Buffer>((s$ as __goscript_handler.handleState).buf)) as buffer.Buffer)
			break
		}
	}
	return null
}

export async function byteSlice(a: any): globalThis.Promise<[$.Slice<number>, boolean]> {
	{
		let __goscriptTuple3: any = $.typeAssertTuple<$.Slice<number>>(a, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
		let bs: $.Slice<number> = __goscriptTuple3[0]
		let ok = __goscriptTuple3[1]
		if (ok) {
			return [bs, true]
		}
	}
	// Like Printf's %s, we allow both the slice type and the byte element type to be named.
	let t = reflect.TypeOf(a)
	if (((t != null) && ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23)) && ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8)) {
		return [$.markAsStructValue($.cloneStructValue(reflect.ValueOf(a))).Bytes(), true]
	}
	return [null, false]
}

export function needsQuoting(s: string): boolean {
	if ($.stringLen(s) == 0) {
		return true
	}
	for (let i = 0; i < $.stringLen(s); ) {
		let b = $.indexString(s, i)
		if (b < 128) {
			// Quote anything except a backslash that would need quoting in a
			// JSON string, as well as space and '='
			if ((b != 92) && (((b == 32) || (b == 61)) || !$.arrayIndex(__goscript_json_handler.safeSet, b))) {
				return true
			}
			i++
			continue
		}
		let [r, size] = utf8.DecodeRuneInString($.sliceStringOrBytes(s, i, undefined))
		if (((r == 65533) || unicode.IsSpace(r)) || !unicode.IsPrint(r)) {
			return true
		}
		i = i + (size)
	}
	return false
}

var __goscriptAwait: any
