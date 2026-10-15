// Generated file based on text_parser.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as encoding from "@goscript/encoding/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as time from "@goscript/time/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_decode from "./decode.gs.ts"

import * as __goscript_duration from "./duration.gs.ts"

import * as __goscript_duration_gogo from "./duration_gogo.gs.ts"

import * as __goscript_encode from "./encode.gs.ts"

import * as __goscript_extensions from "./extensions.gs.ts"

import * as __goscript_lib from "./lib.gs.ts"

import * as __goscript_properties from "./properties.gs.ts"

import * as __goscript_table_marshal from "./table_marshal.gs.ts"

import * as __goscript_timestamp from "./timestamp.gs.ts"

import * as __goscript_timestamp_gogo from "./timestamp_gogo.gs.ts"
import "@goscript/encoding/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/time/index.js"
import "@goscript/unicode/utf8/index.js"
import "./decode.gs.ts"
import "./duration.gs.ts"
import "./duration_gogo.gs.ts"
import "./encode.gs.ts"
import "./extensions.gs.ts"
import "./lib.gs.ts"
import "./properties.gs.ts"
import "./table_marshal.gs.ts"
import "./timestamp.gs.ts"
import "./timestamp_gogo.gs.ts"

$.registerTypePackagePath("github.com/gogo/protobuf/proto", ["proto.ParseError", "proto.token", "proto.textParser"])

export class ParseError {
	public get Message(): string {
		return this._fields.Message
	}

	public set Message(value: string) {
		this._fields.Message = value
	}

	public get Line(): number {
		return this._fields.Line
	}

	public set Line(value: number) {
		this._fields.Line = value
	}

	public get Offset(): number {
		return this._fields.Offset
	}

	public set Offset(value: number) {
		this._fields.Offset = value
	}

	public _fields: {
		Message: string
		Line: number
		Offset: number
	}

	constructor(init?: Partial<{Message?: string, Line?: number, Offset?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Message: init?.Message ?? ("" as string),
			Line: init?.Line ?? (0 as number),
			Offset: init?.Offset ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ParseError {
		return new ParseError(this, true)
	}

	public __goscriptAssign(source: ParseError): void {
		const target = this._fields
		const values = source._fields
		target.Message = values.Message
		target.Line = values.Line
		target.Offset = values.Offset
	}

	public async Error(): globalThis.Promise<string> {
		const p: ParseError | $.VarRef<ParseError> | null = this;
		const p$: ParseError = p == null ? $.pointerTarget<ParseError>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<ParseError>(p)
		if ((p$ as ParseError).Line == 1) {
			// show offset only for first line
			return fmt.Sprintf("line 1.%d: %v", $.basicInterfaceValue((p$ as ParseError).Offset, "int"), (p$ as ParseError).Message)
		}
		return fmt.Sprintf("line %d: %v", $.basicInterfaceValue((p$ as ParseError).Line, "int"), (p$ as ParseError).Message)
	}

	static __typeInfo = $.registerStructType(
		"proto.ParseError",
		() => new ParseError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		ParseError,
		() => [/* @__PURE__ */ $.structField("Message", /* @__PURE__ */ $.basicType("string"), [0], 0, true), /* @__PURE__ */ $.structField("Line", /* @__PURE__ */ $.basicType("int"), [1], 16, true), /* @__PURE__ */ $.structField("Offset", /* @__PURE__ */ $.basicType("int"), [2], 24, true)]
	)
}

export class token {
	public get value(): string {
		return this._fields.value
	}

	public set value(value: string) {
		this._fields.value = value
	}

	public get err(): ParseError | $.VarRef<ParseError> | null {
		return this._fields.err
	}

	public set err(value: ParseError | $.VarRef<ParseError> | null) {
		this._fields.err = value
	}

	public get line(): number {
		return this._fields.line
	}

	public set line(value: number) {
		this._fields.line = value
	}

	public get offset(): number {
		return this._fields.offset
	}

	public set offset(value: number) {
		this._fields.offset = value
	}

	public get unquoted(): string {
		return this._fields.unquoted
	}

	public set unquoted(value: string) {
		this._fields.unquoted = value
	}

	public _fields: {
		value: string
		err: ParseError | $.VarRef<ParseError> | null
		line: number
		offset: number
		unquoted: string
	}

	constructor(init?: Partial<{value?: string, err?: ParseError | $.VarRef<ParseError> | null, line?: number, offset?: number, unquoted?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			value: init?.value ?? ("" as string),
			err: init?.err ?? (null! as ParseError | $.VarRef<ParseError> | null),
			line: init?.line ?? (0 as number),
			offset: init?.offset ?? (0 as number),
			unquoted: init?.unquoted ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): token {
		return new token(this, true)
	}

	public __goscriptAssign(source: token): void {
		const target = this._fields
		const values = source._fields
		target.value = values.value
		target.err = values.err
		target.line = values.line
		target.offset = values.offset
		target.unquoted = values.unquoted
	}

	public async String(): globalThis.Promise<string> {
		const t: token | $.VarRef<token> | null = this;
		const t$: token = t == null ? $.pointerTarget<token>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<token>(t)
		if ((t$ as token).err == null) {
			return fmt.Sprintf("%q (line=%d, offset=%d)", (t$ as token).value, $.basicInterfaceValue((t$ as token).line, "int"), $.basicInterfaceValue((t$ as token).offset, "int"))
		}
		return fmt.Sprintf("parse error: %v", $.interfaceValue((t$ as token).err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError")))
	}

	static __typeInfo = $.registerStructType(
		"proto.token",
		() => new token(),
		() => [$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")], true)],
		token,
		() => [/* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("err", /* @__PURE__ */ $.pointerType("proto.ParseError"), [1], 16, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("line", /* @__PURE__ */ $.basicType("int"), [2], 24, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("offset", /* @__PURE__ */ $.basicType("int"), [3], 32, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("unquoted", /* @__PURE__ */ $.basicType("string"), [4], 40, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export class textParser {
	public get s(): string {
		return this._fields.s
	}

	public set s(value: string) {
		this._fields.s = value
	}

	public get done(): boolean {
		return this._fields.done
	}

	public set done(value: boolean) {
		this._fields.done = value
	}

	public get backed(): boolean {
		return this._fields.backed
	}

	public set backed(value: boolean) {
		this._fields.backed = value
	}

	public get offset(): number {
		return this._fields.offset
	}

	public set offset(value: number) {
		this._fields.offset = value
	}

	public get line(): number {
		return this._fields.line
	}

	public set line(value: number) {
		this._fields.line = value
	}

	public get cur(): token {
		return this._fields.cur
	}

	public set cur(value: token) {
		this._fields.cur = value
	}

	public _fields: {
		s: string
		done: boolean
		backed: boolean
		offset: number
		line: number
		cur: token
	}

	constructor(init?: Partial<{s?: string, done?: boolean, backed?: boolean, offset?: number, line?: number, cur?: token}>, __goscriptValue?: boolean) {
		this._fields = {
			s: init?.s ?? ("" as string),
			done: init?.done ?? (false as boolean),
			backed: init?.backed ?? (false as boolean),
			offset: init?.offset ?? (0 as number),
			line: init?.line ?? (0 as number),
			cur: init?.cur ? init.cur.clone() : new token(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): textParser {
		return new textParser(this, true)
	}

	public __goscriptAssign(source: textParser): void {
		const target = this._fields
		const values = source._fields
		target.s = values.s
		target.done = values.done
		target.backed = values.backed
		target.offset = values.offset
		target.line = values.line
		$.assignStruct(target.cur, values.cur)
	}

	public async advance(): globalThis.Promise<void> {
		let p: textParser | $.VarRef<textParser> | null = this;
		const p$: textParser = p == null ? $.pointerTarget<textParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<textParser>(p)
		// Skip whitespace
		void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).skipWhitespace() : textParser.prototype.skipWhitespace.call(p))
		if ((p$ as textParser).done) {
			return
		}

		// Start of non-whitespace
		;(p$ as textParser).cur.err = null
		let __goscriptAssign0_0: number = (p$ as textParser).offset
		let __goscriptAssign0_1: number = (p$ as textParser).line;
		;(p$ as textParser).cur.offset = __goscriptAssign0_0;
		;(p$ as textParser).cur.line = __goscriptAssign0_1;
		;(p$ as textParser).cur.unquoted = ""
		switch ($.indexString((p$ as textParser).s, 0)) {
			case 60:
			case 62:
			case 123:
			case 125:
			case 58:
			case 91:
			case 93:
			case 59:
			case 44:
			case 47:
			{
				let __goscriptAssign1_0: string = $.sliceStringOrBytes((p$ as textParser).s, 0, 1)
				let __goscriptAssign1_1: string = $.sliceStringOrBytes((p$ as textParser).s, 1, $.stringLen((p$ as textParser).s));
				;(p$ as textParser).cur.value = __goscriptAssign1_0;
				;(p$ as textParser).s = __goscriptAssign1_1
				break
			}
			case 34:
			case 39:
			{
				let i = 1
				while (((i < $.stringLen((p$ as textParser).s)) && ($.indexString((p$ as textParser).s, i) != $.indexString((p$ as textParser).s, 0))) && ($.indexString((p$ as textParser).s, i) != 10)) {
					if (($.indexString((p$ as textParser).s, i) == 92) && ((i + 1) < $.stringLen((p$ as textParser).s))) {
						// skip escaped char
						i++
					}
					i++
				}
				if ((i >= $.stringLen((p$ as textParser).s)) || ($.indexString((p$ as textParser).s, i) != $.indexString((p$ as textParser).s, 0))) {
					await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("unmatched quote", null) : textParser.prototype.errorf.call(p, "unmatched quote", null))
					return
				}
				let [unq, err] = unquoteC($.sliceStringOrBytes((p$ as textParser).s, 1, i), $.int($.indexString((p$ as textParser).s, 0), 32))
				if (err != null) {
					await textParser.prototype.errorf.call(p, "invalid quoted string %s: %v", $.arrayToSlice<any>([$.sliceStringOrBytes((p$ as textParser).s, 0, i + 1), (err as any)]))
					return
				}
				let __goscriptAssign2_0: string = $.sliceStringOrBytes((p$ as textParser).s, 0, i + 1)
				let __goscriptAssign2_1: string = $.sliceStringOrBytes((p$ as textParser).s, i + 1, $.stringLen((p$ as textParser).s));
				;(p$ as textParser).cur.value = __goscriptAssign2_0;
				;(p$ as textParser).s = __goscriptAssign2_1;
				;(p$ as textParser).cur.unquoted = unq
				break
			}
			default:
			{
				let i = 0
				while ((i < $.stringLen((p$ as textParser).s)) && isIdentOrNumberChar($.indexString((p$ as textParser).s, i))) {
					i++
				}
				if (i == 0) {
					await textParser.prototype.errorf.call(p, "unexpected byte %#x", $.arrayToSlice<any>([$.basicInterfaceValue($.indexString((p$ as textParser).s, 0), "byte", "uint8")]))
					return
				}
				let __goscriptAssign3_0: string = $.sliceStringOrBytes((p$ as textParser).s, 0, i)
				let __goscriptAssign3_1: string = $.sliceStringOrBytes((p$ as textParser).s, i, $.stringLen((p$ as textParser).s));
				;(p$ as textParser).cur.value = __goscriptAssign3_0;
				;(p$ as textParser).s = __goscriptAssign3_1
				break
			}
		}
		;(p$ as textParser).offset = (p$ as textParser).offset + ($.stringLen((p$ as textParser).cur.value))
	}

	public back(): void {
		let p: textParser | $.VarRef<textParser> | null = this;
		$.pointerValue<textParser>(p).backed = true
	}

	public async checkForColon(props: __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null, typ: reflect.Type | null): globalThis.Promise<ParseError | $.VarRef<ParseError> | null> {
		const p: textParser | $.VarRef<textParser> | null = this;
		let tok: token | $.VarRef<token> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
		let tok$: token = tok == null ? $.pointerTarget<token>(tok) : (tok as any).__isVarRef === true ? (tok as any).value : (tok as any).__goValue === undefined ? (tok as any) : $.pointerTarget<token>(tok)
		if ((tok$ as token).err != null) {
			return (tok$ as token).err
		}
		if (!$.stringEqual((tok$ as token).value, ":")) {
			// Colon is optional when the field is a group or message.
			let needColon = true
			switch ($.pointerValue<__goscript_properties.Properties>(props).Wire) {
				case "group":
				{
					needColon = false
					break
				}
				case "bytes":
				{
					if ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
						// *T or *string
						if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) {
							break
						}
					} else {
						if ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) {
							// []T or []*T
							if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 22) {
								break
							}
						} else {
							if ((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 24) {
								// The proto3 exception is for a string field,
								// which requires a colon.
								break
							}
						}
					}
					needColon = false
					break
				}
			}
			if (needColon) {
				return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("expected ':', found %q", $.arrayToSlice<any>([(tok$ as token).value])) : textParser.prototype.errorf.call(p, "expected ':', found %q", $.arrayToSlice<any>([(tok$ as token).value])))
			}
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).back() : textParser.prototype.back.call(p))
		}
		return null
	}

	public async consumeExtName(): globalThis.Promise<[string, $.GoError]> {
		const p: textParser | $.VarRef<textParser> | null = this;
		let tok: token | $.VarRef<token> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
		if ($.pointerValue<token>(tok).err != null) {
			return ["", $.interfaceValue<$.GoError>($.pointerValue<token>(tok).err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))]
		}

		// If extension name or type url is quoted, it's a single token.
		if ((($.stringLen($.pointerValue<token>(tok).value) > 2) && isQuote($.indexString($.pointerValue<token>(tok).value, 0))) && ($.indexString($.pointerValue<token>(tok).value, $.stringLen($.pointerValue<token>(tok).value) - 1) == $.indexString($.pointerValue<token>(tok).value, 0))) {
			let [name, err] = unquoteC($.sliceStringOrBytes($.pointerValue<token>(tok).value, 1, $.stringLen($.pointerValue<token>(tok).value) - 1), $.int($.indexString($.pointerValue<token>(tok).value, 0), 32))
			if (err != null) {
				return ["", err]
			}
			return [name, await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).consumeToken("]") : textParser.prototype.consumeToken.call(p, "]"))]
		}

		// Consume everything up to "]"
		let parts: $.Slice<string> = null! as $.Slice<string>
		while (!$.stringEqual($.pointerValue<token>(tok).value, "]")) {
			parts = $.appendOne(parts, $.pointerValue<token>(tok).value)
			tok = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
			if ($.pointerValue<token>(tok).err != null) {
				return ["", $.interfaceValue<$.GoError>(await textParser.prototype.errorf.call(p, "unrecognized type_url or extension name: %s", $.arrayToSlice<any>([$.interfaceValue($.pointerValue<token>(tok).err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))])), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))]
			}
			if ($.pointerValue<textParser>(p).done && (!$.stringEqual($.pointerValue<token>(tok).value, "]"))) {
				return ["", $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("unclosed type_url or extension name", null) : textParser.prototype.errorf.call(p, "unclosed type_url or extension name", null)), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))]
			}
		}
		return [strings.Join(parts, ""), null]
	}

	public async consumeOptionalSeparator(): globalThis.Promise<$.GoError> {
		const p: textParser | $.VarRef<textParser> | null = this;
		let tok: token | $.VarRef<token> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
		let tok$: token = tok == null ? $.pointerTarget<token>(tok) : (tok as any).__isVarRef === true ? (tok as any).value : (tok as any).__goValue === undefined ? (tok as any) : $.pointerTarget<token>(tok)
		if ((tok$ as token).err != null) {
			return $.interfaceValue<$.GoError>((tok$ as token).err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
		}
		if ((!$.stringEqual((tok$ as token).value, ";")) && (!$.stringEqual((tok$ as token).value, ","))) {
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).back() : textParser.prototype.back.call(p))
		}
		return null
	}

	public async consumeToken(s: string): globalThis.Promise<$.GoError> {
		const p: textParser | $.VarRef<textParser> | null = this;
		let tok: token | $.VarRef<token> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
		let tok$: token = tok == null ? $.pointerTarget<token>(tok) : (tok as any).__isVarRef === true ? (tok as any).value : (tok as any).__goValue === undefined ? (tok as any) : $.pointerTarget<token>(tok)
		if ((tok$ as token).err != null) {
			return $.interfaceValue<$.GoError>((tok$ as token).err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
		}
		if (!$.stringEqual((tok$ as token).value, s)) {
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).back() : textParser.prototype.back.call(p))
			return $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("expected %q, found %q", $.arrayToSlice<any>([s, (tok$ as token).value])) : textParser.prototype.errorf.call(p, "expected %q, found %q", $.arrayToSlice<any>([s, (tok$ as token).value]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
		}
		return null
	}

	public async errorf(format: string, a: $.Slice<any>): globalThis.Promise<ParseError | $.VarRef<ParseError> | null> {
		let p: textParser | $.VarRef<textParser> | null = this;
		const p$: textParser = p == null ? $.pointerTarget<textParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<textParser>(p)
		let pe: ParseError | $.VarRef<ParseError> | null = (await (async () => { const __goscriptLiteralField0 = await fmt.Sprintf(format, ...(a ?? [])); return new ParseError({Message: __goscriptLiteralField0, Line: (p$ as textParser).cur.line, Offset: (p$ as textParser).cur.offset}) })());
		;(p$ as textParser).cur.err = pe;
		;(p$ as textParser).done = true
		return pe
	}

	public async missingRequiredFieldError(sv: reflect.Value): globalThis.Promise<__goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null> {
		const p: textParser | $.VarRef<textParser> | null = this;
		let st = $.markAsStructValue($.cloneStructValue(sv)).Type()
		let sprops: __goscript_properties.StructProperties | $.VarRef<__goscript_properties.StructProperties> | null = await __goscript_properties.GetProperties(st)
		for (let i = 0; i < (__goscriptAwait = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? (st as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(st)).NumField(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); i++) {
			if (!__goscript_encode.isNil($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(sv)).Field(i))))) {
				continue
			}

			let props: __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null = $.arrayIndex($.pointerValue<__goscript_properties.StructProperties>(sprops).Prop!, i)
			let props$: __goscript_properties.Properties = props == null ? $.pointerTarget<__goscript_properties.Properties>(props) : (props as any).__isVarRef === true ? (props as any).value : (props as any).__goValue === undefined ? (props as any) : $.pointerTarget<__goscript_properties.Properties>(props)
			if ((props$ as __goscript_properties.Properties).Required) {
				return (await (async () => { const __goscriptLiteralField1 = await fmt.Sprintf("%v.%v", (st as any), (props$ as __goscript_properties.Properties).OrigName); return new __goscript_lib.RequiredNotSetError({field: __goscriptLiteralField1}) })())
			}
		}
		return (await (async () => { const __goscriptLiteralField2 = await fmt.Sprintf("%v.<unknown field name>", (st as any)); return new __goscript_lib.RequiredNotSetError({field: __goscriptLiteralField2}) })())
	}

	public async next(): globalThis.Promise<token | $.VarRef<token> | null> {
		let p: textParser | $.VarRef<textParser> | null = this;
		const p$: textParser = p == null ? $.pointerTarget<textParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<textParser>(p)
		if ((p$ as textParser).backed || (p$ as textParser).done) {
			;(p$ as textParser).backed = false
			return $.fieldRef((p$ as textParser)._fields, "cur")
		}
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).advance() : textParser.prototype.advance.call(p))
		if ((p$ as textParser).done) {
			;(p$ as textParser).cur.value = ""
		} else {
			if (($.stringLen((p$ as textParser).cur.value) > 0) && isQuote($.indexString((p$ as textParser).cur.value, 0))) {
				// Look for multiple quoted strings separated by whitespace,
				// and concatenate them.
				let cat = ((p$ as textParser).cur).clone()
				while (true) {
					void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).skipWhitespace() : textParser.prototype.skipWhitespace.call(p))
					if ((p$ as textParser).done || !isQuote($.indexString((p$ as textParser).s, 0))) {
						break
					}
					await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).advance() : textParser.prototype.advance.call(p))
					if ((p$ as textParser).cur.err != null) {
						return $.fieldRef((p$ as textParser)._fields, "cur")
					}
					cat.value = $.concatString(cat.value, $.concatString(" ", (p$ as textParser).cur.value))
					cat.unquoted = $.concatString(cat.unquoted, (p$ as textParser).cur.unquoted)
				}
				;(p$ as textParser).done = false
				$.assignStruct((p$ as textParser).cur, cat)
			}
		}
		return $.fieldRef((p$ as textParser)._fields, "cur")
	}

	public async readAny(v: reflect.Value, props: __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null): globalThis.Promise<$.GoError> {
		const p: textParser | $.VarRef<textParser> | null = this;
		const props$: __goscript_properties.Properties = props == null ? $.pointerTarget<__goscript_properties.Properties>(props) : (props as any).__isVarRef === true ? (props as any).value : (props as any).__goValue === undefined ? (props as any) : $.pointerTarget<__goscript_properties.Properties>(props)
		let tok: token | $.VarRef<token> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
		let tok$: token = tok == null ? $.pointerTarget<token>(tok) : (tok as any).__isVarRef === true ? (tok as any).value : (tok as any).__goValue === undefined ? (tok as any) : $.pointerTarget<token>(tok)
		if ((tok$ as token).err != null) {
			return $.interfaceValue<$.GoError>((tok$ as token).err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
		}
		if ($.stringEqual((tok$ as token).value, "")) {
			return $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("unexpected EOF", null) : textParser.prototype.errorf.call(p, "unexpected EOF", null)), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
		}
		if ($.stringLen((props$ as __goscript_properties.Properties).CustomType) > 0) {
			if ((props$ as __goscript_properties.Properties).Repeated) {
				let t = reflect.TypeOf($.markAsStructValue($.cloneStructValue(v)).Interface())
				if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) {
					let tc = reflect.TypeOf($.interfaceValue($.varRef<__goscript_encode.Marshaler | null>(null! as __goscript_encode.Marshaler | null), "*proto.Marshaler", /* @__PURE__ */ $.pointerType("proto.Marshaler")))
					let ok = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Implements($.pointerValueOrNil((__goscriptAwait = (tc !== null && (tc as any).__isVarRef !== true && (tc as any).__goValue === undefined ? (tc as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(tc)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (ok) {
						let fv = $.markAsStructValue($.cloneStructValue(v))
						let flen = $.markAsStructValue($.cloneStructValue(fv)).Len()
						if (flen == $.markAsStructValue($.cloneStructValue(fv)).Cap()) {
							let nav = $.markAsStructValue($.cloneStructValue(reflect.MakeSlice($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(v)).Type())!, flen, (2 * flen) + 1)))
							reflect.Copy($.markAsStructValue($.cloneStructValue(nav)), $.markAsStructValue($.cloneStructValue(fv)))
							$.markAsStructValue($.cloneStructValue(fv)).Set($.markAsStructValue($.cloneStructValue(nav)))
						}
						$.markAsStructValue($.cloneStructValue(fv)).SetLen(flen + 1)

						// Read one.
						void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).back() : textParser.prototype.back.call(p))
						return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).readAny($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(fv)).Index(flen))), props) : textParser.prototype.readAny.call(p, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(fv)).Index(flen))), props))
					}
				}
			}
			if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.markAsStructValue($.cloneStructValue(v)).Interface())).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
				let __goscriptShadow0 = $.mustTypeAssert<__goscript_decode.Unmarshaler | null>($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((props$ as __goscript_properties.Properties).ctype).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Interface(), "proto.Unmarshaler")
				let err = (__goscriptAwait = (__goscriptShadow0 !== null && (__goscriptShadow0 as any).__isVarRef !== true && (__goscriptShadow0 as any).__goValue === undefined ? (__goscriptShadow0 as Exclude<__goscript_decode.Unmarshaler, null>) : $.pointerValue<Exclude<__goscript_decode.Unmarshaler, null>>(__goscriptShadow0)).Unmarshal($.stringToBytes((tok$ as token).unquoted)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return $.interfaceValue<$.GoError>(await textParser.prototype.errorf.call(p, "%v %v: %v", $.arrayToSlice<any>([(err as any), ($.markAsStructValue($.cloneStructValue(v)).Type() as any), (tok$ as token).value])), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
				}
				$.markAsStructValue($.cloneStructValue(v)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf((__goscriptShadow0 as any)))))
			} else {
				let __goscriptShadow1 = $.mustTypeAssert<__goscript_decode.Unmarshaler | null>($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(reflect.TypeOf($.markAsStructValue($.cloneStructValue(v)).Interface()))!))).Interface(), "proto.Unmarshaler")
				let err = (__goscriptAwait = (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as Exclude<__goscript_decode.Unmarshaler, null>) : $.pointerValue<Exclude<__goscript_decode.Unmarshaler, null>>(__goscriptShadow1)).Unmarshal($.stringToBytes((tok$ as token).unquoted)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (err != null) {
					return $.interfaceValue<$.GoError>(await textParser.prototype.errorf.call(p, "%v %v: %v", $.arrayToSlice<any>([(err as any), ($.markAsStructValue($.cloneStructValue(v)).Type() as any), (tok$ as token).value])), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
				}
				$.markAsStructValue($.cloneStructValue(v)).Set($.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(reflect.ValueOf((__goscriptShadow1 as any))))))))
			}
			return null
		}
		if ((props$ as __goscript_properties.Properties).StdTime) {
			let fv = $.markAsStructValue($.cloneStructValue(v))
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).back() : textParser.prototype.back.call(p));
			;(props$ as __goscript_properties.Properties).StdTime = false
			let tproto: __goscript_timestamp_gogo.timestamp | $.VarRef<__goscript_timestamp_gogo.timestamp> | null = new __goscript_timestamp_gogo.timestamp()
			let err = await textParser.prototype.readAny.call(p, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(tproto, "*proto.timestamp", /* @__PURE__ */ $.pointerType("proto.timestamp"))))).Elem())), props);
			;(props$ as __goscript_properties.Properties).StdTime = true
			if (err != null) {
				return err
			}
			let __goscriptTuple0: any = __goscript_timestamp.timestampFromProto(tproto)
			let tim = $.varRef(__goscriptTuple0[0])
			err = __goscriptTuple0[1]
			if (err != null) {
				return err
			}
			if ((props$ as __goscript_properties.Properties).Repeated) {
				let t = reflect.TypeOf($.markAsStructValue($.cloneStructValue(v)).Interface())
				if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) {
					if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
						let ts: $.Slice<time.Time | $.VarRef<time.Time> | null> = $.mustTypeAssert<$.Slice<time.Time | $.VarRef<time.Time> | null>>($.markAsStructValue($.cloneStructValue(fv)).Interface(), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("time.Time")))
						ts = $.appendOne(ts, tim, $.appendZeros.nil)
						$.markAsStructValue($.cloneStructValue(fv)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(ts, "[]*time.Time", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("time.Time")))))))
						return null
					} else {
						let ts: $.Slice<time.Time> = $.mustTypeAssert<$.Slice<time.Time>>($.markAsStructValue($.cloneStructValue(fv)).Interface(), /* @__PURE__ */ $.sliceType("time.Time"))
						ts = $.appendOne(ts, $.markAsStructValue($.cloneStructValue(tim.value)))
						$.markAsStructValue($.cloneStructValue(fv)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(ts, "[]time.Time", /* @__PURE__ */ $.sliceType("time.Time"))))))
						return null
					}
				}
			}
			if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.markAsStructValue($.cloneStructValue(v)).Interface())).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
				$.markAsStructValue($.cloneStructValue(v)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(tim, "*time.Time", /* @__PURE__ */ $.pointerType("time.Time"))))))
			} else {
				$.markAsStructValue($.cloneStructValue(v)).Set($.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(tim, "*time.Time", /* @__PURE__ */ $.pointerType("time.Time")))))))))
			}
			return null
		}
		if ((props$ as __goscript_properties.Properties).StdDuration) {
			let fv = $.markAsStructValue($.cloneStructValue(v))
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).back() : textParser.prototype.back.call(p));
			;(props$ as __goscript_properties.Properties).StdDuration = false
			let dproto: __goscript_duration_gogo.duration | $.VarRef<__goscript_duration_gogo.duration> | null = new __goscript_duration_gogo.duration()
			let err = await textParser.prototype.readAny.call(p, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(dproto, "*proto.duration", /* @__PURE__ */ $.pointerType("proto.duration"))))).Elem())), props);
			;(props$ as __goscript_properties.Properties).StdDuration = true
			if (err != null) {
				return err
			}
			let __goscriptTuple1: any = __goscript_duration.durationFromProto(dproto)
			let dur = $.varRef(__goscriptTuple1[0])
			err = __goscriptTuple1[1]
			if (err != null) {
				return err
			}
			if ((props$ as __goscript_properties.Properties).Repeated) {
				let t = reflect.TypeOf($.markAsStructValue($.cloneStructValue(v)).Interface())
				if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 23) {
					if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
						let ds: $.Slice<$.VarRef<time.Duration> | null> = $.mustTypeAssert<$.Slice<$.VarRef<time.Duration> | null>>($.markAsStructValue($.cloneStructValue(fv)).Interface(), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))))
						ds = $.appendOne(ds, dur, $.appendZeros.nil)
						$.markAsStructValue($.cloneStructValue(fv)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(ds, "[]*time.Duration", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))))))))
						return null
					} else {
						let ds: $.Slice<time.Duration> = $.mustTypeAssert<$.Slice<time.Duration>>($.markAsStructValue($.cloneStructValue(fv)).Interface(), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration")))
						ds = $.appendOne(ds, dur.value)
						$.markAsStructValue($.cloneStructValue(fv)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(ds, "[]time.Duration", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("int64", "time.Duration")))))))
						return null
					}
				}
			}
			if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf($.markAsStructValue($.cloneStructValue(v)).Interface())).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
				$.markAsStructValue($.cloneStructValue(v)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.namedValueInterfaceValue<any>(dur, "*time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))))
			} else {
				$.markAsStructValue($.cloneStructValue(v)).Set($.markAsStructValue($.cloneStructValue(reflect.Indirect($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.namedValueInterfaceValue<any>(dur, "*time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()))))))))
			}
			return null
		}
		{
			let fv = $.markAsStructValue($.cloneStructValue(v))
			switch ($.markAsStructValue($.cloneStructValue(fv)).Kind()) {
				case reflect.Slice:
				{
					let at = $.markAsStructValue($.cloneStructValue(v)).Type()
					if ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (at !== null && (at as any).__isVarRef !== true && (at as any).__goValue === undefined ? (at as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(at)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 8) {
						// Special case for []byte
						if (($.indexString((tok$ as token).value, 0) != 34) && ($.indexString((tok$ as token).value, 0) != 39)) {
							// Deliberately written out here, as the error after
							// this switch statement would write "invalid []byte: ...",
							// which is not as user-friendly.
							return $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("invalid string: %v", $.arrayToSlice<any>([(tok$ as token).value])) : textParser.prototype.errorf.call(p, "invalid string: %v", $.arrayToSlice<any>([(tok$ as token).value]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
						}
						let bytes: $.Slice<number> = $.stringToBytes((tok$ as token).unquoted)
						$.markAsStructValue($.cloneStructValue(fv)).Set($.markAsStructValue($.cloneStructValue(reflect.ValueOf($.interfaceValue(bytes, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))))
						return null
					}
					// Repeated field.
					if ($.stringEqual((tok$ as token).value, "[")) {
						// Repeated field with list notation, like [1,2,3].
						while (true) {
							$.markAsStructValue($.cloneStructValue(fv)).Set($.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(fv)), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (at !== null && (at as any).__isVarRef !== true && (at as any).__goValue === undefined ? (at as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(at)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Elem()))))))
							let err = await textParser.prototype.readAny.call(p, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(fv)).Index($.markAsStructValue($.cloneStructValue(fv)).Len() - 1))), props)
							if (err != null) {
								return err
							}
							let ntok: token | $.VarRef<token> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
							let ntok$: token = ntok == null ? $.pointerTarget<token>(ntok) : (ntok as any).__isVarRef === true ? (ntok as any).value : (ntok as any).__goValue === undefined ? (ntok as any) : $.pointerTarget<token>(ntok)
							if ((ntok$ as token).err != null) {
								return $.interfaceValue<$.GoError>((ntok$ as token).err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
							}
							if ($.stringEqual((ntok$ as token).value, "]")) {
								break
							}
							if (!$.stringEqual((ntok$ as token).value, ",")) {
								return $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("Expected ']' or ',' found %q", $.arrayToSlice<any>([(ntok$ as token).value])) : textParser.prototype.errorf.call(p, "Expected ']' or ',' found %q", $.arrayToSlice<any>([(ntok$ as token).value]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
							}
						}
						return null
					}
					// One value of the repeated field.
					void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).back() : textParser.prototype.back.call(p))
					$.markAsStructValue($.cloneStructValue(fv)).Set($.markAsStructValue($.cloneStructValue(reflect.Append($.markAsStructValue($.cloneStructValue(fv)), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (at !== null && (at as any).__isVarRef !== true && (at as any).__goValue === undefined ? (at as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(at)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Elem()))))))
					return textParser.prototype.readAny.call(p, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(fv)).Index($.markAsStructValue($.cloneStructValue(fv)).Len() - 1))), props)
					break
				}
				case reflect.Bool:
				{
					switch ((tok$ as token).value) {
						case "true":
						case "1":
						case "t":
						case "True":
						{
							$.markAsStructValue($.cloneStructValue(fv)).SetBool(true)
							return null
							break
						}
						case "false":
						case "0":
						case "f":
						case "False":
						{
							$.markAsStructValue($.cloneStructValue(fv)).SetBool(false)
							return null
							break
						}
					}
					break
				}
				case reflect.Float32:
				case reflect.Float64:
				{
					let __goscriptShadow2 = (tok$ as token).value
					// Ignore 'f' for compatibility with output generated by C++, but don't
					// remove 'f' when the value is "-inf" or "inf".
					if ((strings.HasSuffix(__goscriptShadow2, "f") && (!$.stringEqual((tok$ as token).value, "-inf"))) && (!$.stringEqual((tok$ as token).value, "inf"))) {
						__goscriptShadow2 = $.sliceStringOrBytes(__goscriptShadow2, undefined, $.stringLen(__goscriptShadow2) - 1)
					}
					{
						let [f, err] = strconv.ParseFloat(__goscriptShadow2, (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(fv)).Type()).Bits(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
						if (err == null) {
							$.markAsStructValue($.cloneStructValue(fv)).SetFloat(f)
							return null
						}
					}
					break
				}
				case reflect.Int8:
				{
					{
						let [x, err] = strconv.ParseInt((tok$ as token).value, 0, 8)
						if (err == null) {
							$.markAsStructValue($.cloneStructValue(fv)).SetInt(x)
							return null
						}
					}
					break
				}
				case reflect.Int16:
				{
					{
						let [x, err] = strconv.ParseInt((tok$ as token).value, 0, 16)
						if (err == null) {
							$.markAsStructValue($.cloneStructValue(fv)).SetInt(x)
							return null
						}
					}
					break
				}
				case reflect.Int32:
				{
					{
						let [x, err] = strconv.ParseInt((tok$ as token).value, 0, 32)
						if (err == null) {
							$.markAsStructValue($.cloneStructValue(fv)).SetInt(x)
							return null
						}
					}

					if ($.stringLen((props$ as __goscript_properties.Properties).Enum) == 0) {
						break
					}
					let __goscriptTuple2: any = $.mapGet<string, globalThis.Map<string, number> | null, globalThis.Map<string, number> | null>(__goscript_properties.enumValueMaps, (props$ as __goscript_properties.Properties).Enum, null)
					let m: globalThis.Map<string, number> | null = __goscriptTuple2[0]
					let ok = __goscriptTuple2[1]
					if (!ok) {
						break
					}
					let __goscriptTuple3: any = $.mapGet<string, number, number>(m, (tok$ as token).value, 0)
					let x = __goscriptTuple3[0]
					ok = __goscriptTuple3[1]
					if (!ok) {
						break
					}
					$.markAsStructValue($.cloneStructValue(fv)).SetInt($.int64(x))
					return null
					break
				}
				case reflect.Int64:
				{
					{
						let [x, err] = strconv.ParseInt((tok$ as token).value, 0, 64)
						if (err == null) {
							$.markAsStructValue($.cloneStructValue(fv)).SetInt(x)
							return null
						}
					}
					break
				}
				case reflect.Ptr:
				{
					void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).back() : textParser.prototype.back.call(p))
					$.markAsStructValue($.cloneStructValue(fv)).Set($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(fv)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))))
					return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).readAny($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(fv)).Elem())), props) : textParser.prototype.readAny.call(p, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(fv)).Elem())), props))
					break
				}
				case reflect.String:
				{
					if (($.indexString((tok$ as token).value, 0) == 34) || ($.indexString((tok$ as token).value, 0) == 39)) {
						$.markAsStructValue($.cloneStructValue(fv)).SetString((tok$ as token).unquoted)
						return null
					}
					break
				}
				case reflect.Struct:
				{
					let terminator: string = ""
					switch ((tok$ as token).value) {
						case "{":
						{
							terminator = "}"
							break
						}
						case "<":
						{
							terminator = ">"
							break
						}
						default:
						{
							return $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("expected '{' or '<', found %q", $.arrayToSlice<any>([(tok$ as token).value])) : textParser.prototype.errorf.call(p, "expected '{' or '<', found %q", $.arrayToSlice<any>([(tok$ as token).value]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
							break
						}
					}
					// TODO: Handle nested messages which implement encoding.TextUnmarshaler.
					return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).readStruct(fv, terminator) : textParser.prototype.readStruct.call(p, fv, terminator))
					break
				}
				case reflect.Uint8:
				{
					{
						let [x, err] = strconv.ParseUint((tok$ as token).value, 0, 8)
						if (err == null) {
							$.markAsStructValue($.cloneStructValue(fv)).SetUint(x)
							return null
						}
					}
					break
				}
				case reflect.Uint16:
				{
					{
						let [x, err] = strconv.ParseUint((tok$ as token).value, 0, 16)
						if (err == null) {
							$.markAsStructValue($.cloneStructValue(fv)).SetUint(x)
							return null
						}
					}
					break
				}
				case reflect.Uint32:
				{
					{
						let [x, err] = strconv.ParseUint((tok$ as token).value, 0, 32)
						if (err == null) {
							$.markAsStructValue($.cloneStructValue(fv)).SetUint($.uint64(x))
							return null
						}
					}
					break
				}
				case reflect.Uint64:
				{
					{
						let [x, err] = strconv.ParseUint((tok$ as token).value, 0, 64)
						if (err == null) {
							$.markAsStructValue($.cloneStructValue(fv)).SetUint(x)
							return null
						}
					}
					break
				}
			}
		}
		return $.interfaceValue<$.GoError>(await textParser.prototype.errorf.call(p, "invalid %v: %v", $.arrayToSlice<any>([($.markAsStructValue($.cloneStructValue(v)).Type() as any), (tok$ as token).value])), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
	}

	public async readStruct(sv: reflect.Value, terminator: string): globalThis.Promise<$.GoError> {
		const p: textParser | $.VarRef<textParser> | null = this;
		let st = $.markAsStructValue($.cloneStructValue(sv)).Type()
		let sprops: __goscript_properties.StructProperties | $.VarRef<__goscript_properties.StructProperties> | null = await __goscript_properties.GetProperties(st)
		let sprops$: __goscript_properties.StructProperties = sprops == null ? $.pointerTarget<__goscript_properties.StructProperties>(sprops) : (sprops as any).__isVarRef === true ? (sprops as any).value : (sprops as any).__goValue === undefined ? (sprops as any) : $.pointerTarget<__goscript_properties.StructProperties>(sprops)
		let reqCount = (sprops$ as __goscript_properties.StructProperties).reqCount
		let reqFieldErr: $.GoError = null! as $.GoError
		let fieldSet: globalThis.Map<string, boolean> | null = $.makeMap<string, boolean>()
		// A struct is a sequence of "name: value", terminated by one of
		// '>' or '}', or the end of the input.  A name may also be
		// "[extension]" or "[type/url]".
		//
		// The whole struct can also be an expanded Any message, like:
		// [type/url] < ... struct contents ... >
		while (true) {
			let tok: token | $.VarRef<token> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
			if ($.pointerValue<token>(tok).err != null) {
				return $.interfaceValue<$.GoError>($.pointerValue<token>(tok).err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
			}
			if ($.stringEqual($.pointerValue<token>(tok).value, terminator)) {
				break
			}
			if ($.stringEqual($.pointerValue<token>(tok).value, "[")) {
				// Looks like an extension or an Any.
				//
				// TODO: Check whether we need to handle
				// namespace rooted names (e.g. ".something.Foo").
				let [extName, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).consumeExtName() : textParser.prototype.consumeExtName.call(p))
				if (err != null) {
					return err
				}

				{
					let s = strings.LastIndex(extName, "/")
					if (s >= 0) {
						// If it contains a slash, it's an Any type URL.
						let messageName = $.sliceStringOrBytes(extName, s + 1, undefined)
						let mt = __goscript_properties.MessageType(messageName)
						if (mt == null) {
							return $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("unrecognized message %q in google.protobuf.Any", $.arrayToSlice<any>([messageName])) : textParser.prototype.errorf.call(p, "unrecognized message %q in google.protobuf.Any", $.arrayToSlice<any>([messageName]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
						}
						tok = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
						if ($.pointerValue<token>(tok).err != null) {
							return $.interfaceValue<$.GoError>($.pointerValue<token>(tok).err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
						}
						// consume an optional colon
						if ($.stringEqual($.pointerValue<token>(tok).value, ":")) {
							tok = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
							if ($.pointerValue<token>(tok).err != null) {
								return $.interfaceValue<$.GoError>($.pointerValue<token>(tok).err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
							}
						}
						let __goscriptShadow3: string = ""
						switch ($.pointerValue<token>(tok).value) {
							case "<":
							{
								__goscriptShadow3 = ">"
								break
							}
							case "{":
							{
								__goscriptShadow3 = "}"
								break
							}
							default:
							{
								return $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("expected '{' or '<', found %q", $.arrayToSlice<any>([$.pointerValue<token>(tok).value])) : textParser.prototype.errorf.call(p, "expected '{' or '<', found %q", $.arrayToSlice<any>([$.pointerValue<token>(tok).value]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
								break
							}
						}
						let v = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(mt)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
						{
							let pe = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).readStruct($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Elem())), __goscriptShadow3) : textParser.prototype.readStruct.call(p, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Elem())), __goscriptShadow3))
							if (pe != null) {
								return pe
							}
						}
						let __goscriptTuple4: any = await __goscript_table_marshal.Marshal($.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(v)).Interface(), "proto.Message"))
						let b: $.Slice<number> = __goscriptTuple4[0]
						let __goscriptShadow4 = __goscriptTuple4[1]
						if (__goscriptShadow4 != null) {
							return $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("failed to marshal message of type %q: %v", $.arrayToSlice<any>([messageName, (__goscriptShadow4 as any)])) : textParser.prototype.errorf.call(p, "failed to marshal message of type %q: %v", $.arrayToSlice<any>([messageName, (__goscriptShadow4 as any)]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
						}
						if ($.mapGet<string, boolean, boolean>(fieldSet, "type_url", false)[0]) {
							return $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("Any message unpacked multiple times, or %q already set", $.arrayToSlice<any>(["type_url"])) : textParser.prototype.errorf.call(p, "Any message unpacked multiple times, or %q already set", $.arrayToSlice<any>(["type_url"]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
						}
						if ($.mapGet<string, boolean, boolean>(fieldSet, "value", false)[0]) {
							return $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("Any message unpacked multiple times, or %q already set", $.arrayToSlice<any>(["value"])) : textParser.prototype.errorf.call(p, "Any message unpacked multiple times, or %q already set", $.arrayToSlice<any>(["value"]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
						}
						$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(sv)).FieldByName("TypeUrl"))).SetString(extName)
						$.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(sv)).FieldByName("Value"))).SetBytes(b)
						$.mapSet(fieldSet, "type_url", true)
						$.mapSet(fieldSet, "value", true)
						continue
					}
				}

				let desc: __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null = null! as __goscript_extensions.ExtensionDesc | $.VarRef<__goscript_extensions.ExtensionDesc> | null
				// This could be faster, but it's functional.
				// TODO: Do something smarter than a linear scan.
				for (const [__rangeKey, d] of (await __goscript_extensions.RegisteredExtensions($.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(st)!))).Interface(), "proto.Message")))?.entries() ?? []) {
					if ($.stringEqual($.pointerValue<__goscript_extensions.ExtensionDesc>(d).Name, extName)) {
						desc = d
						break
					}
				}
				if (desc == null) {
					return $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("unrecognized extension %q", $.arrayToSlice<any>([extName])) : textParser.prototype.errorf.call(p, "unrecognized extension %q", $.arrayToSlice<any>([extName]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
				}

				let props: __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null = new __goscript_properties.Properties()
				await (props !== null && (props as any).__isVarRef !== true && (props as any).__goValue === undefined ? ((props as any) as __goscript_properties.Properties).Parse($.pointerValue<__goscript_extensions.ExtensionDesc>(desc).Tag) : __goscript_properties.Properties.prototype.Parse.call(props, $.pointerValue<__goscript_extensions.ExtensionDesc>(desc).Tag))

				let typ = reflect.TypeOf($.pointerValue<__goscript_extensions.ExtensionDesc>(desc).ExtensionType)
				{
					let __goscriptShadow5: ParseError | $.VarRef<ParseError> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).checkForColon(props, typ) : textParser.prototype.checkForColon.call(p, props, typ))
					if (__goscriptShadow5 != null) {
						return $.interfaceValue<$.GoError>(__goscriptShadow5, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
					}
				}

				let rep = await (desc !== null && (desc as any).__isVarRef !== true && (desc as any).__goValue === undefined ? ((desc as any) as __goscript_extensions.ExtensionDesc).repeated() : __goscript_extensions.ExtensionDesc.prototype.repeated.call(desc))

				// Read the extension structure, and set it in
				// the value we're constructing.
				let ext: reflect.Value = $.markAsStructValue(new reflect.Value())
				if (!rep) {
					ext = $.assignStruct(ext, $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil(typ)!))).Elem())
				} else {
					ext = $.assignStruct(ext, $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = (typ !== null && (typ as any).__isVarRef !== true && (typ as any).__goValue === undefined ? (typ as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(typ)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Elem())
				}
				{
					let __goscriptShadow6 = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).readAny(ext, props) : textParser.prototype.readAny.call(p, ext, props))
					if (__goscriptShadow6 != null) {
						{
							let [, ok] = $.typeAssertTuple<__goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null>(__goscriptShadow6, /* @__PURE__ */ $.pointerType("proto.RequiredNotSetError"))
							if (!ok) {
								return __goscriptShadow6
							}
						}
						reqFieldErr = __goscriptShadow6
					}
				}
				let ep = $.mustTypeAssert<__goscript_lib.Message | null>($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(sv)).Addr())).Interface(), "proto.Message")
				if (!rep) {
					await __goscript_extensions.SetExtension(ep, desc, $.markAsStructValue($.cloneStructValue(ext)).Interface())
				} else {
					let [old, __goscriptShadow7] = await __goscript_extensions.GetExtension(ep, desc)
					let sl: reflect.Value = $.markAsStructValue(new reflect.Value())
					if (__goscriptShadow7 == null) {
						sl = $.assignStruct(sl, reflect.ValueOf(old))
					} else {
						sl = $.assignStruct(sl, reflect.MakeSlice($.pointerValueOrNil(typ)!, 0, 1))
					}
					sl = $.assignStruct(sl, reflect.Append($.markAsStructValue($.cloneStructValue(sl)), $.markAsStructValue($.cloneStructValue(ext))))
					await __goscript_extensions.SetExtension(ep, desc, $.markAsStructValue($.cloneStructValue(sl)).Interface())
				}
				{
					let __goscriptShadow8 = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).consumeOptionalSeparator() : textParser.prototype.consumeOptionalSeparator.call(p))
					if (__goscriptShadow8 != null) {
						return __goscriptShadow8
					}
				}
				continue
			}

			// This is a normal, non-extension field.
			let name = $.pointerValue<token>(tok).value
			let dst: reflect.Value = $.markAsStructValue(new reflect.Value())
			let __goscriptTuple5: any = structFieldByName(sprops, name)
			let fi = __goscriptTuple5[0]
			let props: __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null = __goscriptTuple5[1]
			let ok = __goscriptTuple5[2]
			if (ok) {
				dst = $.assignStruct(dst, $.markAsStructValue($.cloneStructValue(sv)).Field(fi))
			} else {
				{
					let __goscriptTuple6: any = $.mapGet<string, __goscript_properties.OneofProperties | $.VarRef<__goscript_properties.OneofProperties> | null, __goscript_properties.OneofProperties | $.VarRef<__goscript_properties.OneofProperties> | null>((sprops$ as __goscript_properties.StructProperties).OneofTypes, name, null)
					let oop: __goscript_properties.OneofProperties | $.VarRef<__goscript_properties.OneofProperties> | null = __goscriptTuple6[0]
					let __goscriptShadow9 = __goscriptTuple6[1]
					if (__goscriptShadow9) {
						// It is a oneof.
						props = $.pointerValue<__goscript_properties.OneofProperties>(oop).Prop
						let nv = $.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.pointerValue<__goscript_properties.OneofProperties>(oop).Type).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!)))
						dst = $.assignStruct(dst, $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(nv)).Elem())).Field(0))
						let __goscriptShadow10 = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(sv)).Field($.pointerValue<__goscript_properties.OneofProperties>(oop).Field)))
						if (!$.markAsStructValue($.cloneStructValue(__goscriptShadow10)).IsNil()) {
							return $.interfaceValue<$.GoError>(await textParser.prototype.errorf.call(p, "field '%s' would overwrite already parsed oneof '%s'", $.arrayToSlice<any>([name, ((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(sv)).Type()).Field($.pointerValue<__goscript_properties.OneofProperties>(oop).Field), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as reflect.StructField).Name])), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
						}
						$.markAsStructValue($.cloneStructValue(__goscriptShadow10)).Set($.markAsStructValue($.cloneStructValue(nv)))
					}
				}
			}
			if (!$.markAsStructValue($.cloneStructValue(dst)).IsValid()) {
				return $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("unknown field name %q in %v", $.arrayToSlice<any>([name, (st as any)])) : textParser.prototype.errorf.call(p, "unknown field name %q in %v", $.arrayToSlice<any>([name, (st as any)]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
			}

			if ($.markAsStructValue($.cloneStructValue(dst)).Kind() == 21) {
				// Consume any colon.
				{
					let err: ParseError | $.VarRef<ParseError> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).checkForColon(props, $.markAsStructValue($.cloneStructValue(dst)).Type()) : textParser.prototype.checkForColon.call(p, props, $.markAsStructValue($.cloneStructValue(dst)).Type()))
					if (err != null) {
						return $.interfaceValue<$.GoError>(err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
					}
				}

				// Construct the map if it doesn't already exist.
				if ($.markAsStructValue($.cloneStructValue(dst)).IsNil()) {
					$.markAsStructValue($.cloneStructValue(dst)).Set($.markAsStructValue($.cloneStructValue(reflect.MakeMap($.pointerValueOrNil($.markAsStructValue($.cloneStructValue(dst)).Type())!))))
				}
				let key = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(dst)).Type()).Key(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Elem()))
				let val = $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(reflect.New($.pointerValueOrNil((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(dst)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))!))).Elem()))

				// The map entry should be this sequence of tokens:
				//	< key : KEY value : VALUE >
				// However, implementations may omit key or value, and technically
				// we should support them in any order.  See b/28924776 for a time
				// this went wrong.

				let __goscriptShadow11: token | $.VarRef<token> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
				let __goscriptShadow12: string = ""
				switch ($.pointerValue<token>(__goscriptShadow11).value) {
					case "<":
					{
						__goscriptShadow12 = ">"
						break
					}
					case "{":
					{
						__goscriptShadow12 = "}"
						break
					}
					default:
					{
						return $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("expected '{' or '<', found %q", $.arrayToSlice<any>([$.pointerValue<token>(__goscriptShadow11).value])) : textParser.prototype.errorf.call(p, "expected '{' or '<', found %q", $.arrayToSlice<any>([$.pointerValue<token>(__goscriptShadow11).value]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
						break
					}
				}
				while (true) {
					let __goscriptShadow13: token | $.VarRef<token> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
					if ($.pointerValue<token>(__goscriptShadow13).err != null) {
						return $.interfaceValue<$.GoError>($.pointerValue<token>(__goscriptShadow13).err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
					}
					if ($.stringEqual($.pointerValue<token>(__goscriptShadow13).value, __goscriptShadow12)) {
						break
					}
					switch ($.pointerValue<token>(__goscriptShadow13).value) {
						case "key":
						{
							{
								let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).consumeToken(":") : textParser.prototype.consumeToken.call(p, ":"))
								if (err != null) {
									return err
								}
							}
							{
								let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).readAny(key, $.pointerValue<__goscript_properties.Properties>(props).MapKeyProp) : textParser.prototype.readAny.call(p, key, $.pointerValue<__goscript_properties.Properties>(props).MapKeyProp))
								if (err != null) {
									return err
								}
							}
							{
								let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).consumeOptionalSeparator() : textParser.prototype.consumeOptionalSeparator.call(p))
								if (err != null) {
									return err
								}
							}
							break
						}
						case "value":
						{
							{
								let err: ParseError | $.VarRef<ParseError> | null = await textParser.prototype.checkForColon.call(p, $.pointerValue<__goscript_properties.Properties>(props).MapValProp, (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(dst)).Type()).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
								if (err != null) {
									return $.interfaceValue<$.GoError>(err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
								}
							}
							{
								let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).readAny(val, $.pointerValue<__goscript_properties.Properties>(props).MapValProp) : textParser.prototype.readAny.call(p, val, $.pointerValue<__goscript_properties.Properties>(props).MapValProp))
								if (err != null) {
									return err
								}
							}
							{
								let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).consumeOptionalSeparator() : textParser.prototype.consumeOptionalSeparator.call(p))
								if (err != null) {
									return err
								}
							}
							break
						}
						default:
						{
							void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).back() : textParser.prototype.back.call(p))
							return $.interfaceValue<$.GoError>(await textParser.prototype.errorf.call(p, "expected \"key\", \"value\", or %q, found %q", $.arrayToSlice<any>([__goscriptShadow12, $.pointerValue<token>(__goscriptShadow13).value])), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
							break
						}
					}
				}

				$.markAsStructValue($.cloneStructValue(dst)).SetMapIndex($.markAsStructValue($.cloneStructValue(key)), $.markAsStructValue($.cloneStructValue(val)))
				continue
			}

			// Check that it's not already set if it's not a repeated field.
			if (!$.pointerValue<__goscript_properties.Properties>(props).Repeated && $.mapGet<string, boolean, boolean>(fieldSet, name, false)[0]) {
				return $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("non-repeated field %q was repeated", $.arrayToSlice<any>([name])) : textParser.prototype.errorf.call(p, "non-repeated field %q was repeated", $.arrayToSlice<any>([name]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
			}

			{
				let err: ParseError | $.VarRef<ParseError> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).checkForColon(props, $.markAsStructValue($.cloneStructValue(dst)).Type()) : textParser.prototype.checkForColon.call(p, props, $.markAsStructValue($.cloneStructValue(dst)).Type()))
				if (err != null) {
					return $.interfaceValue<$.GoError>(err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
				}
			}

			// Parse into the field.
			$.mapSet(fieldSet, name, true)
			{
				let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).readAny(dst, props) : textParser.prototype.readAny.call(p, dst, props))
				if (err != null) {
					{
						let [, __goscriptShadow14] = $.typeAssertTuple<__goscript_lib.RequiredNotSetError | $.VarRef<__goscript_lib.RequiredNotSetError> | null>(err, /* @__PURE__ */ $.pointerType("proto.RequiredNotSetError"))
						if (!__goscriptShadow14) {
							return err
						}
					}
					reqFieldErr = err
				}
			}
			if ($.pointerValue<__goscript_properties.Properties>(props).Required) {
				reqCount--
			}

			{
				let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).consumeOptionalSeparator() : textParser.prototype.consumeOptionalSeparator.call(p))
				if (err != null) {
					return err
				}
			}
		}

		if (reqCount > 0) {
			return $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).missingRequiredFieldError(sv) : textParser.prototype.missingRequiredFieldError.call(p, sv)), "*proto.RequiredNotSetError", /* @__PURE__ */ $.pointerType("proto.RequiredNotSetError"))
		}
		return reqFieldErr
	}

	public skipWhitespace(): void {
		let p: textParser | $.VarRef<textParser> | null = this;
		const p$: textParser = p == null ? $.pointerTarget<textParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<textParser>(p)
		let i = 0
		while ((i < $.stringLen((p$ as textParser).s)) && (isWhitespace($.indexString((p$ as textParser).s, i)) || ($.indexString((p$ as textParser).s, i) == 35))) {
			if ($.indexString((p$ as textParser).s, i) == 35) {
				// comment; skip to end of line or input
				while ((i < $.stringLen((p$ as textParser).s)) && ($.indexString((p$ as textParser).s, i) != 10)) {
					i++
				}
				if (i == $.stringLen((p$ as textParser).s)) {
					break
				}
			}
			if ($.indexString((p$ as textParser).s, i) == 10) {
				;(p$ as textParser).line++
			}
			i++
		}
		;(p$ as textParser).offset = (p$ as textParser).offset + (i);
		;(p$ as textParser).s = $.sliceStringOrBytes((p$ as textParser).s, i, $.stringLen((p$ as textParser).s))
		if ($.stringLen((p$ as textParser).s) == 0) {
			;(p$ as textParser).done = true
		}
	}

	static __typeInfo = $.registerStructType(
		"proto.textParser",
		() => new textParser(),
		() => [$.methodSignature("advance", [], [], true), $.methodSignature("back", [], [], true), $.methodSignature("checkForColon", [["props", /* @__PURE__ */ $.pointerType("proto.Properties")], ["typ", "reflect.Type"]], [/* @__PURE__ */ $.pointerType("proto.ParseError")], true), $.methodSignature("consumeExtName", [], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("consumeOptionalSeparator", [], ["error"], true), $.methodSignature("consumeToken", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("proto.ParseError")], true), $.methodSignature("missingRequiredFieldError", [["sv", "reflect.Value"]], [/* @__PURE__ */ $.pointerType("proto.RequiredNotSetError")], true), $.methodSignature("next", [], [/* @__PURE__ */ $.pointerType("proto.token")], true), $.methodSignature("readAny", [["v", "reflect.Value"], ["props", /* @__PURE__ */ $.pointerType("proto.Properties")]], ["error"], true), $.methodSignature("readStruct", [["sv", "reflect.Value"], ["terminator", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("skipWhitespace", [], [], true)],
		textParser,
		() => [/* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.basicType("bool"), [1], 16, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("backed", /* @__PURE__ */ $.basicType("bool"), [2], 17, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("offset", /* @__PURE__ */ $.basicType("int"), [3], 24, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("line", /* @__PURE__ */ $.basicType("int"), [4], 32, false, { pkgPath: "github.com/gogo/protobuf/proto" }), /* @__PURE__ */ $.structField("cur", "proto.token", [5], 40, false, { pkgPath: "github.com/gogo/protobuf/proto" })]
	)
}

export const anyRepeatedlyUnpacked: string = "Any message unpacked multiple times, or %q already set"

export function newTextParser(s: string): textParser | $.VarRef<textParser> | null {
	let p: textParser | $.VarRef<textParser> | null = new textParser()
	let p$: textParser = p == null ? $.pointerTarget<textParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<textParser>(p);
	;(p$ as textParser).s = s;
	;(p$ as textParser).line = 1;
	;(p$ as textParser).cur.line = 1
	return p
}

export function isIdentOrNumberChar(c: number): boolean {
	switch ((true as boolean)) {
		case (65 <= c) && (c <= 90):
		case (97 <= c) && (c <= 122):
		{
			return true
			break
		}
		case (48 <= c) && (c <= 57):
		{
			return true
			break
		}
	}
	switch (c) {
		case 45:
		case 43:
		case 46:
		case 95:
		{
			return true
			break
		}
	}
	return false
}

export function isWhitespace(c: number): boolean {
	switch (c) {
		case 32:
		case 9:
		case 10:
		case 13:
		{
			return true
			break
		}
	}
	return false
}

export function isQuote(c: number): boolean {
	switch (c) {
		case 34:
		case 39:
		{
			return true
			break
		}
	}
	return false
}

export let errBadUTF8: $.GoError = errors.New("proto: bad UTF-8")

export function __goscript_set_errBadUTF8(__goscriptValue: $.GoError): void {
	errBadUTF8 = __goscriptValue
}

export function unquoteC(s: string, quote: number): [string, $.GoError] {
	// This is based on C++'s tokenizer.cc.
	// Despite its name, this is *not* parsing C syntax.
	// For instance, "\0" is an invalid quoted string.

	// Avoid allocation in trivial cases.
	let simple = true
	for (let __goscriptRunes0 = $.stringRunes(s); __goscriptRunes0.next(); ) {
		const r = __goscriptRunes0.rune
		if ((r == 92) || (r == quote)) {
			simple = false
			break
		}
	}
	if (simple) {
		return [s, null]
	}

	let buf: $.Slice<number> = $.makeSlice<number>(0, globalThis.Math.trunc((3 * $.stringLen(s)) / 2), "byte")
	while ($.stringLen(s) > 0) {
		let [r, n] = utf8.DecodeRuneInString(s)
		if ((r == 65533) && (n == 1)) {
			return ["", errBadUTF8]
		}
		s = $.sliceStringOrBytes(s, n, undefined)
		if (r != 92) {
			if (r < 128) {
				buf = $.append(buf, $.uint($.uint(r, 8), 8), $.byteSliceHint)
			} else {
				buf = $.appendSlice(buf, $.stringToBytes($.runeToString(r)), $.byteSliceHint)
			}
			continue
		}

		let [ch, tail, err] = unescape(s)
		if (err != null) {
			return ["", err]
		}
		buf = $.appendSlice(buf, $.stringToBytes(ch), $.byteSliceHint)
		s = tail
	}
	return [$.bytesToString(buf), null]
}

export function unescape(s: string): [string, string, $.GoError] {
	let ch: string = ""
	let tail: string = ""
	let err: $.GoError = null! as $.GoError
	let [r, n] = utf8.DecodeRuneInString(s)
	if ((r == 65533) && (n == 1)) {
		return ["", "", errBadUTF8]
	}
	s = $.sliceStringOrBytes(s, n, undefined)
	switch (r) {
		case 97:
		{
			return ["\x07", s, null]
			break
		}
		case 98:
		{
			return ["\x08", s, null]
			break
		}
		case 102:
		{
			return ["\x0c", s, null]
			break
		}
		case 110:
		{
			return ["\n", s, null]
			break
		}
		case 114:
		{
			return ["\r", s, null]
			break
		}
		case 116:
		{
			return ["\t", s, null]
			break
		}
		case 118:
		{
			return ["\x0b", s, null]
			break
		}
		case 63:
		{
			return ["?", s, null]
			break
		}
		case 39:
		case 34:
		case 92:
		{
			return [$.runeToString(r), s, null]
			break
		}
		case 48:
		case 49:
		case 50:
		case 51:
		case 52:
		case 53:
		case 54:
		case 55:
		{
			if ($.stringLen(s) < 2) {
				return ["", "", fmt.Errorf("\\%c requires 2 following digits", $.basicInterfaceValue(r, "rune", "int32"))]
			}
			let ss = $.concatString($.runeToString(r), $.sliceStringOrBytes(s, undefined, 2))
			s = $.sliceStringOrBytes(s, 2, undefined)
			let [i, __goscriptShadow15] = strconv.ParseUint(ss, 8, 8)
			if (__goscriptShadow15 != null) {
				return ["", "", fmt.Errorf("\\%s contains non-octal digits", ss)]
			}
			return [$.bytesToString(new Uint8Array([$.uint(i, 8)]) as $.Slice<number>), s, null]
			break
		}
		case 120:
		case 88:
		case 117:
		case 85:
		{
			let __goscriptShadow16: number = 0
			switch (r) {
				case 120:
				case 88:
				{
					__goscriptShadow16 = 2
					break
				}
				case 117:
				{
					__goscriptShadow16 = 4
					break
				}
				case 85:
				{
					__goscriptShadow16 = 8
					break
				}
			}
			if ($.stringLen(s) < __goscriptShadow16) {
				return ["", "", fmt.Errorf("\\%c requires %d following digits", $.basicInterfaceValue(r, "rune", "int32"), $.basicInterfaceValue(__goscriptShadow16, "int"))]
			}
			let ss = $.sliceStringOrBytes(s, undefined, __goscriptShadow16)
			s = $.sliceStringOrBytes(s, __goscriptShadow16, undefined)
			let [i, __goscriptShadow17] = strconv.ParseUint(ss, 16, 64)
			if (__goscriptShadow17 != null) {
				return ["", "", fmt.Errorf("\\%c%s contains non-hexadecimal digits", $.basicInterfaceValue(r, "rune", "int32"), ss)]
			}
			if ((r == 120) || (r == 88)) {
				return [$.bytesToString(new Uint8Array([$.uint(i, 8)]) as $.Slice<number>), s, null]
			}
			if (i > 1114111n) {
				return ["", "", fmt.Errorf("\\%c%s is not a valid Unicode code point", $.basicInterfaceValue(r, "rune", "int32"), ss)]
			}
			return [$.runeToString($.int(i, 32)), s, null]
			break
		}
	}
	return ["", "", fmt.Errorf("unknown escape \\%c", $.basicInterfaceValue(r, "rune", "int32"))]
}

export function structFieldByName(sprops: __goscript_properties.StructProperties | $.VarRef<__goscript_properties.StructProperties> | null, name: string): [number, __goscript_properties.Properties | $.VarRef<__goscript_properties.Properties> | null, boolean] {
	const sprops$: __goscript_properties.StructProperties = sprops == null ? $.pointerTarget<__goscript_properties.StructProperties>(sprops) : (sprops as any).__isVarRef === true ? (sprops as any).value : (sprops as any).__goValue === undefined ? (sprops as any) : $.pointerTarget<__goscript_properties.StructProperties>(sprops)
	let [i, ok] = $.mapGet<string, number, number>((sprops$ as __goscript_properties.StructProperties).decoderOrigNames, name, 0)
	if (ok) {
		return [i, $.arrayIndex((sprops$ as __goscript_properties.StructProperties).Prop!, i), true]
	}
	return [-1, null, false]
}

export async function UnmarshalText(s: string, pb: __goscript_lib.Message | null): globalThis.Promise<$.GoError> {
	{
		let [um, ok] = $.typeAssertTuple<encoding.TextUnmarshaler | null>(pb, "encoding.TextUnmarshaler")
		if (ok) {
			return (um !== null && (um as any).__isVarRef !== true && (um as any).__goValue === undefined ? (um as Exclude<encoding.TextUnmarshaler, null>) : $.pointerValue<Exclude<encoding.TextUnmarshaler, null>>(um)).UnmarshalText($.stringToBytes(s))
		}
	}
	void (__goscriptAwait = (pb !== null && (pb as any).__isVarRef !== true && (pb as any).__goValue === undefined ? (pb as Exclude<__goscript_lib.Message, null>) : $.pointerValue<Exclude<__goscript_lib.Message, null>>(pb)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf((pb as any))))
	return textParser.prototype.readStruct.call(newTextParser(s), $.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(v)).Elem())), "")
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration")))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptAwait: any
