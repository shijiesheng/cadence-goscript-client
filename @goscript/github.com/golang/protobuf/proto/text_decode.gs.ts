// Generated file based on text_decode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as encoding from "@goscript/encoding/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as prototext from "@goscript/google.golang.org/protobuf/encoding/prototext/index.js"

import * as protoV2 from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as protoregistry from "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"

import * as protowire from "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"

import * as protoiface from "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"

import * as __goscript_proto from "./proto.gs.ts"
import "@goscript/encoding/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/google.golang.org/protobuf/encoding/prototext/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoregistry/index.js"
import "@goscript/google.golang.org/protobuf/encoding/protowire/index.js"
import "@goscript/google.golang.org/protobuf/runtime/protoiface/index.js"
import "./proto.gs.ts"

$.registerTypePackagePath("github.com/golang/protobuf/proto", ["proto.ParseError", "proto.textParser", "proto.token"])

export class ParseError {
	public get Message(): string {
		return this._fields.Message
	}

	public set Message(value: string) {
		this._fields.Message = value
	}

	// Deprecated: Do not use.
	public get Line(): number {
		return this._fields.Line
	}

	public set Line(value: number) {
		this._fields.Line = value
	}

	// Deprecated: Do not use.
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
		const e: ParseError | $.VarRef<ParseError> | null = this;
		const e$: ParseError = e == null ? $.pointerTarget<ParseError>(e) : (e as any).__isVarRef === true ? (e as any).value : (e as any).__goValue === undefined ? (e as any) : $.pointerTarget<ParseError>(e)
		if (false) {
			return (e$ as ParseError).Message
		}
		if ((e$ as ParseError).Line == 1) {
			return fmt.Sprintf("line 1.%d: %v", $.basicInterfaceValue((e$ as ParseError).Offset, "int"), (e$ as ParseError).Message)
		}
		return fmt.Sprintf("line %d: %v", $.basicInterfaceValue((e$ as ParseError).Line, "int"), (e$ as ParseError).Message)
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

	static __typeInfo = $.registerStructType(
		"proto.token",
		() => new token(),
		() => [],
		token,
		() => [/* @__PURE__ */ $.structField("value", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "github.com/golang/protobuf/proto" }), /* @__PURE__ */ $.structField("err", /* @__PURE__ */ $.pointerType("proto.ParseError"), [1], 16, false, { pkgPath: "github.com/golang/protobuf/proto" }), /* @__PURE__ */ $.structField("line", /* @__PURE__ */ $.basicType("int"), [2], 24, false, { pkgPath: "github.com/golang/protobuf/proto" }), /* @__PURE__ */ $.structField("offset", /* @__PURE__ */ $.basicType("int"), [3], 32, false, { pkgPath: "github.com/golang/protobuf/proto" }), /* @__PURE__ */ $.structField("unquoted", /* @__PURE__ */ $.basicType("string"), [4], 40, false, { pkgPath: "github.com/golang/protobuf/proto" })]
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

	public async checkForColon(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<ParseError | $.VarRef<ParseError> | null> {
		const p: textParser | $.VarRef<textParser> | null = this;
		let tok: token | $.VarRef<token> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
		let tok$: token = tok == null ? $.pointerTarget<token>(tok) : (tok as any).__isVarRef === true ? (tok as any).value : (tok as any).__goValue === undefined ? (tok as any) : $.pointerTarget<token>(tok)
		if ((tok$ as token).err != null) {
			return (tok$ as token).err
		}
		if (!$.stringEqual((tok$ as token).value, ":")) {
			if ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null) {
				return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("expected ':', found %q", $.arrayToSlice<any>([(tok$ as token).value])) : textParser.prototype.errorf.call(p, "expected ':', found %q", $.arrayToSlice<any>([(tok$ as token).value])))
			}
			void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).back() : textParser.prototype.back.call(p))
		}
		return null
	}

	public async consumeExtensionOrAnyName(): globalThis.Promise<[string, $.GoError]> {
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
		let pe: ParseError | $.VarRef<ParseError> | null = (await (async () => { const __goscriptLiteralField1 = await fmt.Sprintf(format, ...(a ?? [])); return new ParseError({Message: __goscriptLiteralField1, Line: (p$ as textParser).cur.line, Offset: (p$ as textParser).cur.offset}) })());
		;(p$ as textParser).cur.err = pe;
		;(p$ as textParser).done = true
		return pe
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

	public async unmarshalExtensionOrAny(m: protoreflect.Message | null, seen: globalThis.Map<protoreflect.FieldNumber, boolean> | null): globalThis.Promise<$.GoError> {
		const p: textParser | $.VarRef<textParser> | null = this;
		let [name, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).consumeExtensionOrAnyName() : textParser.prototype.consumeExtensionOrAnyName.call(p))
		if (err != null) {
			return err
		}

		// If it contains a slash, it's an Any type URL.
		{
			let slashIdx = strings.LastIndex(name, "/")
			if (slashIdx >= 0) {
				let tok: token | $.VarRef<token> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
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

				let terminator: string = ""
				switch ($.pointerValue<token>(tok).value) {
					case "<":
					{
						terminator = ">"
						break
					}
					case "{":
					{
						terminator = "}"
						break
					}
					default:
					{
						return $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("expected '{' or '<', found %q", $.arrayToSlice<any>([$.pointerValue<token>(tok).value])) : textParser.prototype.errorf.call(p, "expected '{' or '<', found %q", $.arrayToSlice<any>([$.pointerValue<token>(tok).value]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
						break
					}
				}

				let [mt, __goscriptShadow0] = await protoregistry.Types.prototype.FindMessageByURL.call(protoregistry.GlobalTypes, name)
				if (__goscriptShadow0 != null) {
					return $.interfaceValue<$.GoError>(await textParser.prototype.errorf.call(p, "unrecognized message %q in google.protobuf.Any", $.arrayToSlice<any>([$.sliceStringOrBytes(name, slashIdx + 1, undefined)])), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
				}
				let m2 = (__goscriptAwait = (mt !== null && (mt as any).__isVarRef !== true && (mt as any).__goValue === undefined ? (mt as Exclude<protoreflect.MessageType, null>) : $.pointerValue<Exclude<protoreflect.MessageType, null>>(mt)).New(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				{
					let __goscriptShadow1 = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).unmarshalMessage(m2, terminator) : textParser.prototype.unmarshalMessage.call(p, m2, terminator))
					if (__goscriptShadow1 != null) {
						return __goscriptShadow1
					}
				}
				let __goscriptTuple0: any = await protoV2.Marshal((__goscriptAwait = (m2 !== null && (m2 as any).__isVarRef !== true && (m2 as any).__goValue === undefined ? (m2 as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m2)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				let b: $.Slice<number> = __goscriptTuple0[0]
				__goscriptShadow0 = __goscriptTuple0[1]
				if (__goscriptShadow0 != null) {
					return $.interfaceValue<$.GoError>(await textParser.prototype.errorf.call(p, "failed to marshal message of type %q: %v", $.arrayToSlice<any>([$.sliceStringOrBytes(name, slashIdx + 1, undefined), (__goscriptShadow0 as any)])), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
				}

				let urlFD = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName("type_url"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				let valFD = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName("value"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if ($.mapGet<protoreflect.FieldNumber, boolean, boolean>(seen, (__goscriptAwait = (urlFD !== null && (urlFD as any).__isVarRef !== true && (urlFD as any).__goValue === undefined ? (urlFD as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(urlFD)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), false)[0]) {
					return $.interfaceValue<$.GoError>(await textParser.prototype.errorf.call(p, "Any message unpacked multiple times, or %q already set", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (urlFD !== null && (urlFD as any).__isVarRef !== true && (urlFD as any).__goValue === undefined ? (urlFD as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(urlFD)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Name", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())])), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
				}
				if ($.mapGet<protoreflect.FieldNumber, boolean, boolean>(seen, (__goscriptAwait = (valFD !== null && (valFD as any).__isVarRef !== true && (valFD as any).__goValue === undefined ? (valFD as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(valFD)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), false)[0]) {
					return $.interfaceValue<$.GoError>(await textParser.prototype.errorf.call(p, "Any message unpacked multiple times, or %q already set", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (valFD !== null && (valFD as any).__isVarRef !== true && (valFD as any).__goValue === undefined ? (valFD as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(valFD)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Name", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())])), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
				}
				void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Set(urlFD, protoreflect.ValueOfString(name)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Set(valFD, protoreflect.ValueOfBytes(b)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				$.mapSet(seen, (__goscriptAwait = (urlFD !== null && (urlFD as any).__isVarRef !== true && (urlFD as any).__goValue === undefined ? (urlFD as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(urlFD)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), true)
				$.mapSet(seen, (__goscriptAwait = (valFD !== null && (valFD as any).__isVarRef !== true && (valFD as any).__goValue === undefined ? (valFD as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(valFD)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), true)
				return null
			}
		}

		let xname = name
		let [xt, ] = await protoregistry.Types.prototype.FindExtensionByName.call(protoregistry.GlobalTypes, xname)
		if ((xt == null) && await __goscript_proto.isMessageSet((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			let __goscriptTuple1: any = await protoregistry.Types.prototype.FindExtensionByName.call(protoregistry.GlobalTypes, protoreflect.FullName_Append(xname, "message_set_extension"))
			xt = __goscriptTuple1[0]
		}
		if (xt == null) {
			return $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("unrecognized extension %q", $.arrayToSlice<any>([name])) : textParser.prototype.errorf.call(p, "unrecognized extension %q", $.arrayToSlice<any>([name]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
		}
		let fd = (__goscriptAwait = (xt !== null && (xt as any).__isVarRef !== true && (xt as any).__goValue === undefined ? (xt as Exclude<protoreflect.ExtensionType, null>) : $.pointerValue<Exclude<protoreflect.ExtensionType, null>>(xt)).TypeDescriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (!$.stringEqual((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(fd)).ContainingMessage(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))) {
			return $.interfaceValue<$.GoError>(await textParser.prototype.errorf.call(p, "extension field %q does not extend message %q", $.arrayToSlice<any>([name, $.namedValueInterfaceValue<any>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.FullName", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())])), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
		}

		{
			let __goscriptShadow2: ParseError | $.VarRef<ParseError> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).checkForColon((fd as protoreflect.FieldDescriptor | null)) : textParser.prototype.checkForColon.call(p, (fd as protoreflect.FieldDescriptor | null)))
			if (__goscriptShadow2 != null) {
				return $.interfaceValue<$.GoError>(__goscriptShadow2, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
			}
		}

		let v = (((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get((fd as protoreflect.FieldDescriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
		if (!(__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Has((fd as protoreflect.FieldDescriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) || (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) || ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.ExtensionTypeDescriptor, null>) : $.pointerValue<Exclude<protoreflect.ExtensionTypeDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null))) {
			v = $.assignStruct(v, ((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Mutable((fd as protoreflect.FieldDescriptor | null)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
		}
		let __goscriptTuple2: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).unmarshalValue(v, (fd as protoreflect.FieldDescriptor | null)) : textParser.prototype.unmarshalValue.call(p, v, (fd as protoreflect.FieldDescriptor | null)))
		v = $.assignStruct(v, __goscriptTuple2[0])
		err = __goscriptTuple2[1]
		if (err != null) {
			return err
		}
		void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Set((fd as protoreflect.FieldDescriptor | null), (v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).consumeOptionalSeparator() : textParser.prototype.consumeOptionalSeparator.call(p))
	}

	public async unmarshalMessage(m: protoreflect.Message | null, terminator: string): globalThis.Promise<$.GoError> {
		const p: textParser | $.VarRef<textParser> | null = this;
		let err: $.GoError = null! as $.GoError
		let md = (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Descriptor(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let fds = (__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).Fields(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		// A struct is a sequence of "name: value", terminated by one of
		// '>' or '}', or the end of the input.  A name may also be
		// "[extension]" or "[type/url]".
		//
		// The whole struct can also be an expanded Any message, like:
		// [type/url] < ... struct contents ... >
		let seen: globalThis.Map<protoreflect.FieldNumber, boolean> | null = $.makeMap<protoreflect.FieldNumber, boolean>()
		while (true) {
			let tok: token | $.VarRef<token> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
			let tok$: token = tok == null ? $.pointerTarget<token>(tok) : (tok as any).__isVarRef === true ? (tok as any).value : (tok as any).__goValue === undefined ? (tok as any) : $.pointerTarget<token>(tok)
			if ((tok$ as token).err != null) {
				return $.interfaceValue<$.GoError>((tok$ as token).err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
			}
			if ($.stringEqual((tok$ as token).value, terminator)) {
				break
			}
			if ($.stringEqual((tok$ as token).value, "[")) {
				{
					let __goscriptShadow3 = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).unmarshalExtensionOrAny(m, seen) : textParser.prototype.unmarshalExtensionOrAny.call(p, m, seen))
					if (__goscriptShadow3 != null) {
						return __goscriptShadow3
					}
				}
				continue
			}

			// This is a normal, non-extension field.
			let name = (tok$ as token).value
			let fd = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByName(name), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			switch ((true as boolean)) {
				case fd == null:
				{
					let gd = (__goscriptAwait = (fds !== null && (fds as any).__isVarRef !== true && (fds as any).__goValue === undefined ? (fds as Exclude<protoreflect.FieldDescriptors, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptors, null>>(fds)).ByName(strings.ToLower(name)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					if (((gd != null) && ((__goscriptAwait = (gd !== null && (gd as any).__isVarRef !== true && (gd as any).__goValue === undefined ? (gd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(gd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10)) && ($.stringEqual((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (gd !== null && (gd as any).__isVarRef !== true && (gd as any).__goValue === undefined ? (gd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(gd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), name))) {
						fd = gd
					}
					break
				}
				case ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 10) && (!$.stringEqual((__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), name)):
				{
					fd = null
					break
				}
				case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsWeak(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (__goscriptAwait = $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).IsPlaceholder(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
				{
					fd = null
					break
				}
			}
			if (fd == null) {
				let typeName = (__goscriptAwait = (md !== null && (md as any).__isVarRef !== true && (md as any).__goValue === undefined ? (md as Exclude<protoreflect.MessageDescriptor, null>) : $.pointerValue<Exclude<protoreflect.MessageDescriptor, null>>(md)).FullName(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				let __goscriptShadow4 = m
				{
					let __goscriptTuple3: any = $.typeAssertTuple<__goscript_proto.Message | null>((__goscriptAwait = (__goscriptShadow4 !== null && (__goscriptShadow4 as any).__isVarRef !== true && (__goscriptShadow4 as any).__goValue === undefined ? (__goscriptShadow4 as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(__goscriptShadow4)).Interface(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoiface.MessageV1")
					let __goscriptShadow5 = __goscriptTuple3[0]
					let ok = __goscriptTuple3[1]
					if (ok) {
						let t = reflect.TypeOf((__goscriptShadow5 as any))
						if ((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 22) {
							typeName = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<reflect.Type, null>) : $.pointerValue<Exclude<reflect.Type, null>>(t)).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						}
					}
				}
				return $.interfaceValue<$.GoError>(await textParser.prototype.errorf.call(p, "unknown field name %q in %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(name, "protoreflect.Name", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), typeName])), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
			}
			{
				let od = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).ContainingOneof(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if ((od != null) && ((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).WhichOneof(od), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null)) {
					return $.interfaceValue<$.GoError>(await textParser.prototype.errorf.call(p, "field '%s' would overwrite already parsed oneof '%s'", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(name, "protoreflect.Name", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>((__goscriptAwait = (od !== null && (od as any).__isVarRef !== true && (od as any).__goValue === undefined ? (od as Exclude<protoreflect.OneofDescriptor, null>) : $.pointerValue<Exclude<protoreflect.OneofDescriptor, null>>(od)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Name", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())])), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
				}
			}
			if (((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Cardinality(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != 3) && $.mapGet<protoreflect.FieldNumber, boolean, boolean>(seen, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), false)[0]) {
				return $.interfaceValue<$.GoError>(await textParser.prototype.errorf.call(p, "non-repeated field %q was repeated", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Name", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())])), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
			}
			$.mapSet(seen, (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), true)

			// Consume any colon.
			{
				let __goscriptShadow6: ParseError | $.VarRef<ParseError> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).checkForColon(fd) : textParser.prototype.checkForColon.call(p, fd))
				if (__goscriptShadow6 != null) {
					return $.interfaceValue<$.GoError>(__goscriptShadow6, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
				}
			}

			// Parse into the field.
			let v = (((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Get(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
			if (!(__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Has(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && (((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) || (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) || ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Message(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) != null))) {
				v = $.assignStruct(v, ((__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Mutable(fd), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value))
			}
			{
				let __goscriptTuple4: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).unmarshalValue(v, fd) : textParser.prototype.unmarshalValue.call(p, v, fd))
				v = $.assignStruct(v, __goscriptTuple4[0])
				err = __goscriptTuple4[1]
				if (err != null) {
					return err
				}
			}
			void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoreflect.Message, null>) : $.pointerValue<Exclude<protoreflect.Message, null>>(m)).Set(fd, (v).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

			{
				let __goscriptShadow7 = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).consumeOptionalSeparator() : textParser.prototype.consumeOptionalSeparator.call(p))
				if (__goscriptShadow7 != null) {
					return __goscriptShadow7
				}
			}
		}
		return null
	}

	public async unmarshalSingularValue(v: protoreflect.Value, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<[protoreflect.Value, $.GoError]> {
		const p: textParser | $.VarRef<textParser> | null = this;
		let tok: token | $.VarRef<token> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
		let tok$: token = tok == null ? $.pointerTarget<token>(tok) : (tok as any).__isVarRef === true ? (tok as any).value : (tok as any).__goValue === undefined ? (tok as any) : $.pointerTarget<token>(tok)
		if ((tok$ as token).err != null) {
			return [(v).clone(), $.interfaceValue<$.GoError>((tok$ as token).err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))]
		}
		if ($.stringEqual((tok$ as token).value, "")) {
			return [(v).clone(), $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("unexpected EOF", null) : textParser.prototype.errorf.call(p, "unexpected EOF", null)), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))]
		}

		switch ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			case protoreflect.BoolKind:
			{
				switch ((tok$ as token).value) {
					case "true":
					case "1":
					case "t":
					case "True":
					{
						return [protoreflect.ValueOfBool(true), null]
						break
					}
					case "false":
					case "0":
					case "f":
					case "False":
					{
						return [protoreflect.ValueOfBool(false), null]
						break
					}
				}
				break
			}
			case protoreflect.Int32Kind:
			case protoreflect.Sint32Kind:
			case protoreflect.Sfixed32Kind:
			{
				{
					let [x, err] = strconv.ParseInt((tok$ as token).value, 0, 32)
					if (err == null) {
						return [protoreflect.ValueOfInt32($.int(x, 32)), null]
					}
				}

				// The C++ parser accepts large positive hex numbers that uses
				// two's complement arithmetic to represent negative numbers.
				// This feature is here for backwards compatibility with C++.
				if (strings.HasPrefix((tok$ as token).value, "0x")) {
					{
						let [x, err] = strconv.ParseUint((tok$ as token).value, 0, 32)
						if (err == null) {
							return [protoreflect.ValueOfInt32($.int(-($.int64Add($.int64($.uint64Xor(x, -1n)), 1n)), 32)), null]
						}
					}
				}
				break
			}
			case protoreflect.Int64Kind:
			case protoreflect.Sint64Kind:
			case protoreflect.Sfixed64Kind:
			{
				{
					let [x, err] = strconv.ParseInt((tok$ as token).value, 0, 64)
					if (err == null) {
						return [protoreflect.ValueOfInt64($.int64(x)), null]
					}
				}

				// The C++ parser accepts large positive hex numbers that uses
				// two's complement arithmetic to represent negative numbers.
				// This feature is here for backwards compatibility with C++.
				if (strings.HasPrefix((tok$ as token).value, "0x")) {
					{
						let [x, err] = strconv.ParseUint((tok$ as token).value, 0, 64)
						if (err == null) {
							return [protoreflect.ValueOfInt64($.int64(-($.int64Add($.int64($.uint64Xor(x, -1n)), 1n)))), null]
						}
					}
				}
				break
			}
			case protoreflect.Uint32Kind:
			case protoreflect.Fixed32Kind:
			{
				{
					let [x, err] = strconv.ParseUint((tok$ as token).value, 0, 32)
					if (err == null) {
						return [protoreflect.ValueOfUint32($.uint(x, 32)), null]
					}
				}
				break
			}
			case protoreflect.Uint64Kind:
			case protoreflect.Fixed64Kind:
			{
				{
					let [x, err] = strconv.ParseUint((tok$ as token).value, 0, 64)
					if (err == null) {
						return [protoreflect.ValueOfUint64($.uint64(x)), null]
					}
				}
				break
			}
			case protoreflect.FloatKind:
			{
				let __goscriptShadow8 = (tok$ as token).value
				if ((strings.HasSuffix(__goscriptShadow8, "f") && (!$.stringEqual(__goscriptShadow8, "-inf"))) && (!$.stringEqual(__goscriptShadow8, "inf"))) {
					__goscriptShadow8 = $.sliceStringOrBytes(__goscriptShadow8, undefined, $.stringLen(__goscriptShadow8) - 1)
				}
				{
					let [x, err] = strconv.ParseFloat(__goscriptShadow8, 32)
					if (err == null) {
						return [protoreflect.ValueOfFloat32(globalThis.Math.fround(x)), null]
					}
				}
				break
			}
			case protoreflect.DoubleKind:
			{
				let __goscriptShadow9 = (tok$ as token).value
				if ((strings.HasSuffix(__goscriptShadow9, "f") && (!$.stringEqual(__goscriptShadow9, "-inf"))) && (!$.stringEqual(__goscriptShadow9, "inf"))) {
					__goscriptShadow9 = $.sliceStringOrBytes(__goscriptShadow9, undefined, $.stringLen(__goscriptShadow9) - 1)
				}
				{
					let [x, err] = strconv.ParseFloat(__goscriptShadow9, 64)
					if (err == null) {
						return [protoreflect.ValueOfFloat64(x), null]
					}
				}
				break
			}
			case protoreflect.StringKind:
			{
				if (isQuote($.indexString((tok$ as token).value, 0))) {
					return [protoreflect.ValueOfString((tok$ as token).unquoted), null]
				}
				break
			}
			case protoreflect.BytesKind:
			{
				if (isQuote($.indexString((tok$ as token).value, 0))) {
					return [protoreflect.ValueOfBytes($.stringToBytes((tok$ as token).unquoted)), null]
				}
				break
			}
			case protoreflect.EnumKind:
			{
				{
					let [x, err] = strconv.ParseInt((tok$ as token).value, 0, 32)
					if (err == null) {
						return [protoreflect.ValueOfEnum($.int(x, 32)), null]
					}
				}
				let vd = (__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumValueDescriptors, null>>((__goscriptAwait = $.pointerValue<Exclude<protoreflect.EnumDescriptor, null>>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Enum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Values(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).ByName((tok$ as token).value), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				if (vd != null) {
					return [protoreflect.ValueOfEnum((__goscriptAwait = (vd !== null && (vd as any).__isVarRef !== true && (vd as any).__goValue === undefined ? (vd as Exclude<protoreflect.EnumValueDescriptor, null>) : $.pointerValue<Exclude<protoreflect.EnumValueDescriptor, null>>(vd)).Number(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)), null]
				}
				break
			}
			case protoreflect.MessageKind:
			case protoreflect.GroupKind:
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
						return [(v).clone(), $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("expected '{' or '<', found %q", $.arrayToSlice<any>([(tok$ as token).value])) : textParser.prototype.errorf.call(p, "expected '{' or '<', found %q", $.arrayToSlice<any>([(tok$ as token).value]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))]
						break
					}
				}
				let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).unmarshalMessage(await v.Message(), terminator) : textParser.prototype.unmarshalMessage.call(p, await v.Message(), terminator))
				return [(v).clone(), err]
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("invalid kind %v", $.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Kind", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8())))
				break
			}
		}
		return [(v).clone(), $.interfaceValue<$.GoError>(await textParser.prototype.errorf.call(p, "invalid %v: %v", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Kind(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "protoreflect.Kind", __goscriptStatic6(), __goscriptStatic7(), __goscriptStatic8()), (tok$ as token).value])), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))]
	}

	public async unmarshalValue(v: protoreflect.Value, fd: protoreflect.FieldDescriptor | null): globalThis.Promise<[protoreflect.Value, $.GoError]> {
		const p: textParser | $.VarRef<textParser> | null = this;
		let tok: token | $.VarRef<token> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
		let tok$: token = tok == null ? $.pointerTarget<token>(tok) : (tok as any).__isVarRef === true ? (tok as any).value : (tok as any).__goValue === undefined ? (tok as any) : $.pointerTarget<token>(tok)
		if ((tok$ as token).err != null) {
			return [(v).clone(), $.interfaceValue<$.GoError>((tok$ as token).err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))]
		}
		if ($.stringEqual((tok$ as token).value, "")) {
			return [(v).clone(), $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("unexpected EOF", null) : textParser.prototype.errorf.call(p, "unexpected EOF", null)), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))]
		}

		switch ((true as boolean)) {
			case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsList(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				let lv = await v.List()
				let err: $.GoError = null! as $.GoError
				if ($.stringEqual((tok$ as token).value, "[")) {
					// Repeated field with list notation, like [1,2,3].
					while (true) {
						let vv = (((__goscriptAwait = (lv !== null && (lv as any).__isVarRef !== true && (lv as any).__goValue === undefined ? (lv as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(lv)).NewElement(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
						let __goscriptTuple5: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).unmarshalSingularValue(vv, fd) : textParser.prototype.unmarshalSingularValue.call(p, vv, fd))
						vv = $.assignStruct(vv, __goscriptTuple5[0])
						err = __goscriptTuple5[1]
						if (err != null) {
							return [(v).clone(), err]
						}
						void (__goscriptAwait = (lv !== null && (lv as any).__isVarRef !== true && (lv as any).__goValue === undefined ? (lv as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(lv)).Append((vv).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

						let __goscriptShadow10: token | $.VarRef<token> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
						if ($.pointerValue<token>(__goscriptShadow10).err != null) {
							return [(v).clone(), $.interfaceValue<$.GoError>($.pointerValue<token>(__goscriptShadow10).err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))]
						}
						if ($.stringEqual($.pointerValue<token>(__goscriptShadow10).value, "]")) {
							break
						}
						if (!$.stringEqual($.pointerValue<token>(__goscriptShadow10).value, ",")) {
							return [(v).clone(), $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("Expected ']' or ',' found %q", $.arrayToSlice<any>([$.pointerValue<token>(__goscriptShadow10).value])) : textParser.prototype.errorf.call(p, "Expected ']' or ',' found %q", $.arrayToSlice<any>([$.pointerValue<token>(__goscriptShadow10).value]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))]
						}
					}
					return [(v).clone(), null]
				}

				// One value of the repeated field.
				void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).back() : textParser.prototype.back.call(p))
				let vv = (((__goscriptAwait = (lv !== null && (lv as any).__isVarRef !== true && (lv as any).__goValue === undefined ? (lv as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(lv)).NewElement(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
				let __goscriptTuple6: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).unmarshalSingularValue(vv, fd) : textParser.prototype.unmarshalSingularValue.call(p, vv, fd))
				vv = $.assignStruct(vv, __goscriptTuple6[0])
				err = __goscriptTuple6[1]
				if (err != null) {
					return [(v).clone(), err]
				}
				void (__goscriptAwait = (lv !== null && (lv as any).__isVarRef !== true && (lv as any).__goValue === undefined ? (lv as Exclude<protoreflect.List, null>) : $.pointerValue<Exclude<protoreflect.List, null>>(lv)).Append((vv).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [(v).clone(), null]
				break
			}
			case (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).IsMap(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait):
			{
				let terminator: string = ""
				switch ((tok$ as token).value) {
					case "<":
					{
						terminator = ">"
						break
					}
					case "{":
					{
						terminator = "}"
						break
					}
					default:
					{
						return [(v).clone(), $.interfaceValue<$.GoError>(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).errorf("expected '{' or '<', found %q", $.arrayToSlice<any>([(tok$ as token).value])) : textParser.prototype.errorf.call(p, "expected '{' or '<', found %q", $.arrayToSlice<any>([(tok$ as token).value]))), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))]
						break
					}
				}

				let keyFD = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapKey(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				let valFD = (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).MapValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

				let mv = await v.Map()
				let kv = (((__goscriptAwait = (keyFD !== null && (keyFD as any).__isVarRef !== true && (keyFD as any).__goValue === undefined ? (keyFD as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(keyFD)).Default(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
				let vv = (((__goscriptAwait = (mv !== null && (mv as any).__isVarRef !== true && (mv as any).__goValue === undefined ? (mv as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(mv)).NewValue(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as protoreflect.Value)).clone()
				while (true) {
					let __goscriptShadow11: token | $.VarRef<token> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).next() : textParser.prototype.next.call(p))
					if ($.pointerValue<token>(__goscriptShadow11).err != null) {
						return [(v).clone(), $.interfaceValue<$.GoError>($.pointerValue<token>(__goscriptShadow11).err, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))]
					}
					if ($.stringEqual($.pointerValue<token>(__goscriptShadow11).value, terminator)) {
						break
					}
					let err: $.GoError = null! as $.GoError
					switch ($.pointerValue<token>(__goscriptShadow11).value) {
						case "key":
						{
							{
								let __goscriptShadow12 = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).consumeToken(":") : textParser.prototype.consumeToken.call(p, ":"))
								if (__goscriptShadow12 != null) {
									return [(v).clone(), __goscriptShadow12]
								}
							}
							{
								let __goscriptTuple7: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).unmarshalSingularValue(kv, keyFD) : textParser.prototype.unmarshalSingularValue.call(p, kv, keyFD))
								kv = $.assignStruct(kv, __goscriptTuple7[0])
								err = __goscriptTuple7[1]
								if (err != null) {
									return [(v).clone(), err]
								}
							}
							{
								let __goscriptShadow13 = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).consumeOptionalSeparator() : textParser.prototype.consumeOptionalSeparator.call(p))
								if (__goscriptShadow13 != null) {
									return [(v).clone(), __goscriptShadow13]
								}
							}
							break
						}
						case "value":
						{
							{
								let __goscriptShadow14: ParseError | $.VarRef<ParseError> | null = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).checkForColon(valFD) : textParser.prototype.checkForColon.call(p, valFD))
								if (__goscriptShadow14 != null) {
									return [(v).clone(), $.interfaceValue<$.GoError>(__goscriptShadow14, "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))]
								}
							}
							{
								let __goscriptTuple8: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).unmarshalSingularValue(vv, valFD) : textParser.prototype.unmarshalSingularValue.call(p, vv, valFD))
								vv = $.assignStruct(vv, __goscriptTuple8[0])
								err = __goscriptTuple8[1]
								if (err != null) {
									return [(v).clone(), err]
								}
							}
							{
								let __goscriptShadow15 = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).consumeOptionalSeparator() : textParser.prototype.consumeOptionalSeparator.call(p))
								if (__goscriptShadow15 != null) {
									return [(v).clone(), __goscriptShadow15]
								}
							}
							break
						}
						default:
						{
							void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).back() : textParser.prototype.back.call(p))
							return [(v).clone(), $.interfaceValue<$.GoError>(await textParser.prototype.errorf.call(p, "expected \"key\", \"value\", or %q, found %q", $.arrayToSlice<any>([terminator, $.pointerValue<token>(__goscriptShadow11).value])), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))]
							break
						}
					}
				}
				void (__goscriptAwait = (mv !== null && (mv as any).__isVarRef !== true && (mv as any).__goValue === undefined ? (mv as Exclude<protoreflect.Map, null>) : $.pointerValue<Exclude<protoreflect.Map, null>>(mv)).Set(await kv.MapKey(), (vv).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				return [(v).clone(), null]
				break
			}
			default:
			{
				void (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).back() : textParser.prototype.back.call(p))
				return (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as textParser).unmarshalSingularValue(v, fd) : textParser.prototype.unmarshalSingularValue.call(p, v, fd))
				break
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"proto.textParser",
		() => new textParser(),
		() => [$.methodSignature("advance", [], [], true), $.methodSignature("back", [], [], true), $.methodSignature("checkForColon", [["fd", "protoreflect.FieldDescriptor"]], [/* @__PURE__ */ $.pointerType("proto.ParseError")], true), $.methodSignature("consumeExtensionOrAnyName", [], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("consumeOptionalSeparator", [], ["error"], true), $.methodSignature("consumeToken", [["s", /* @__PURE__ */ $.basicType("string")]], ["error"], true), $.methodSignature("errorf", [["format", /* @__PURE__ */ $.basicType("string")], ["a", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], [/* @__PURE__ */ $.pointerType("proto.ParseError")], true), $.methodSignature("next", [], [/* @__PURE__ */ $.pointerType("proto.token")], true), $.methodSignature("skipWhitespace", [], [], true), $.methodSignature("unmarshalExtensionOrAny", [["m", "protoreflect.Message"], ["seen", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("int32", "protowire.Number"), /* @__PURE__ */ $.basicType("bool"))]], ["error"], true), $.methodSignature("unmarshalMessage", [["m", "protoreflect.Message"], ["terminator", /* @__PURE__ */ $.basicType("string")]], [["err", "error"]], true), $.methodSignature("unmarshalSingularValue", [["v", "protoreflect.Value"], ["fd", "protoreflect.FieldDescriptor"]], ["protoreflect.Value", "error"], true), $.methodSignature("unmarshalValue", [["v", "protoreflect.Value"], ["fd", "protoreflect.FieldDescriptor"]], ["protoreflect.Value", "error"], true)],
		textParser,
		() => [/* @__PURE__ */ $.structField("s", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "github.com/golang/protobuf/proto" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.basicType("bool"), [1], 16, false, { pkgPath: "github.com/golang/protobuf/proto" }), /* @__PURE__ */ $.structField("backed", /* @__PURE__ */ $.basicType("bool"), [2], 17, false, { pkgPath: "github.com/golang/protobuf/proto" }), /* @__PURE__ */ $.structField("offset", /* @__PURE__ */ $.basicType("int"), [3], 24, false, { pkgPath: "github.com/golang/protobuf/proto" }), /* @__PURE__ */ $.structField("line", /* @__PURE__ */ $.basicType("int"), [4], 32, false, { pkgPath: "github.com/golang/protobuf/proto" }), /* @__PURE__ */ $.structField("cur", "proto.token", [5], 40, false, { pkgPath: "github.com/golang/protobuf/proto" })]
	)
}

export const wrapTextUnmarshalV2: boolean = false

export async function UnmarshalText(s: string, m: __goscript_proto.Message | null): globalThis.Promise<$.GoError> {
	{
		let [u, ok] = $.typeAssertTuple<encoding.TextUnmarshaler | null>(m, "encoding.TextUnmarshaler")
		if (ok) {
			return (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? (u as Exclude<encoding.TextUnmarshaler, null>) : $.pointerValue<Exclude<encoding.TextUnmarshaler, null>>(u)).UnmarshalText($.stringToBytes(s))
		}
	}

	void (__goscriptAwait = (m !== null && (m as any).__isVarRef !== true && (m as any).__goValue === undefined ? (m as Exclude<protoiface.MessageV1, null>) : $.pointerValue<Exclude<protoiface.MessageV1, null>>(m)).Reset(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	let mi = await __goscript_proto.MessageV2((m as __goscript_proto.GeneratedMessage | null))

	if (false) {
		let err = await $.markAsStructValue($.cloneStructValue(new prototext.UnmarshalOptions({AllowPartial: true}, true))).Unmarshal($.stringToBytes(s), mi)
		if (err != null) {
			return $.interfaceValue<$.GoError>((await (async () => { const __goscriptLiteralField0 = (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new ParseError({Message: __goscriptLiteralField0}) })()), "*proto.ParseError", /* @__PURE__ */ $.pointerType("proto.ParseError"))
		}
		return __goscript_proto.checkRequiredNotSet(mi)
	} else {
		{
			let err = await textParser.prototype.unmarshalMessage.call(newTextParser(s), (__goscriptAwait = (mi !== null && (mi as any).__isVarRef !== true && (mi as any).__goValue === undefined ? (mi as Exclude<protoreflect.ProtoMessage, null>) : $.pointerValue<Exclude<protoreflect.ProtoMessage, null>>(mi)).ProtoReflect(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), "")
			if (err != null) {
				return err
			}
		}
		return __goscript_proto.checkRequiredNotSet(mi)
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function newTextParser(s: string): textParser | $.VarRef<textParser> | null {
	let p: textParser | $.VarRef<textParser> | null = new textParser()
	let p$: textParser = p == null ? $.pointerTarget<textParser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<textParser>(p);
	;(p$ as textParser).s = s;
	;(p$ as textParser).line = 1;
	;(p$ as textParser).cur.line = 1
	return p
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
			let [i, __goscriptShadow16] = strconv.ParseUint(ss, 8, 8)
			if (__goscriptShadow16 != null) {
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
			let __goscriptShadow17: number = 0
			switch (r) {
				case 120:
				case 88:
				{
					__goscriptShadow17 = 2
					break
				}
				case 117:
				{
					__goscriptShadow17 = 4
					break
				}
				case 85:
				{
					__goscriptShadow17 = 8
					break
				}
			}
			if ($.stringLen(s) < __goscriptShadow17) {
				return ["", "", fmt.Errorf("\\%c requires %d following digits", $.basicInterfaceValue(r, "rune", "int32"), $.basicInterfaceValue(__goscriptShadow17, "int"))]
			}
			let ss = $.sliceStringOrBytes(s, undefined, __goscriptShadow17)
			s = $.sliceStringOrBytes(s, __goscriptShadow17, undefined)
			let [i, __goscriptShadow18] = strconv.ParseUint(ss, 16, 64)
			if (__goscriptShadow18 != null) {
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

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({IsValid: (receiver: any, ...args: any[]) => (protoreflect.Name_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("string", "protoreflect.Name"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Append: (receiver: any, ...args: any[]) => (protoreflect.FullName_Append as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.FullName_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Name: (receiver: any, ...args: any[]) => (protoreflect.FullName_Name as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Parent: (receiver: any, ...args: any[]) => (protoreflect.FullName_Parent as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("string", "protoreflect.FullName"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Append", [["s", /* @__PURE__ */ $.basicType("string", "protoreflect.Name")]], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Name", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.Name")]), $.methodSignature("Parent", [], [/* @__PURE__ */ $.basicType("string", "protoreflect.FullName")])])
}

var __goscriptStatic6$value: any
function __goscriptStatic6(): any {
	return __goscriptStatic6$value ??= ({GoString: (receiver: any, ...args: any[]) => (protoreflect.Kind_GoString as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), IsValid: (receiver: any, ...args: any[]) => (protoreflect.Kind_IsValid as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (protoreflect.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic7$value: any
function __goscriptStatic7(): any {
	return __goscriptStatic7$value ??= (/* @__PURE__ */ $.basicType("int8", "protoreflect.Kind"))
}

var __goscriptStatic8$value: any
function __goscriptStatic8(): any {
	return __goscriptStatic8$value ??= ([$.methodSignature("GoString", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("IsValid", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptAwait: any
