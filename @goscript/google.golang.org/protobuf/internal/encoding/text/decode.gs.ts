// Generated file based on decode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as strings from "@goscript/strings/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as utf16 from "@goscript/unicode/utf16/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as __goscript_decode_number from "./decode_number.gs.ts"

import * as __goscript_decode_string from "./decode_string.gs.ts"

import * as __goscript_decode_token from "./decode_token.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/strconv/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/index.js"
import "@goscript/unicode/utf16/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "./decode_number.gs.ts"
import "./decode_string.gs.ts"
import "./decode_token.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/encoding/text", ["text.Decoder", "text.call"])

export type call = number

export class Decoder {
	// lastCall is last method called, either readCall or peekCall.
	// Initial value is readCall.
	public get lastCall(): call {
		return this._fields.lastCall
	}

	public set lastCall(value: call) {
		this._fields.lastCall = value
	}

	// lastToken contains the last read token.
	public get lastToken(): __goscript_decode_token.Token {
		return this._fields.lastToken
	}

	public set lastToken(value: __goscript_decode_token.Token) {
		this._fields.lastToken = value
	}

	// lastErr contains the last read error.
	public get lastErr(): $.GoError {
		return this._fields.lastErr
	}

	public set lastErr(value: $.GoError) {
		this._fields.lastErr = value
	}

	// openStack is a stack containing the byte characters for MessageOpen and
	// ListOpen kinds. The top of stack represents the message or the list that
	// the current token is nested in. An empty stack means the current token is
	// at the top level message. The characters '{' and '<' both represent the
	// MessageOpen kind.
	public get openStack(): $.Slice<number> {
		return this._fields.openStack
	}

	public set openStack(value: $.Slice<number>) {
		this._fields.openStack = value
	}

	// orig is used in reporting line and column.
	public get orig(): $.Slice<number> {
		return this._fields.orig
	}

	public set orig(value: $.Slice<number>) {
		this._fields.orig = value
	}

	// in contains the unconsumed input.
	public get _in(): $.Slice<number> {
		return this._fields._in
	}

	public set _in(value: $.Slice<number>) {
		this._fields._in = value
	}

	public _fields: {
		lastCall: call
		lastToken: __goscript_decode_token.Token
		lastErr: $.GoError
		openStack: $.Slice<number>
		orig: $.Slice<number>
		_in: $.Slice<number>
	}

	constructor(init?: Partial<{lastCall?: call, lastToken?: __goscript_decode_token.Token, lastErr?: $.GoError, openStack?: $.Slice<number>, orig?: $.Slice<number>, _in?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			lastCall: init?.lastCall ?? (0 as call),
			lastToken: init?.lastToken ? init.lastToken.clone() : new __goscript_decode_token.Token(undefined, true),
			lastErr: init?.lastErr ?? (null! as $.GoError),
			openStack: init?.openStack ?? (null! as $.Slice<number>),
			orig: init?.orig ?? (null! as $.Slice<number>),
			_in: init?._in ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Decoder {
		return new Decoder(this, true)
	}

	public __goscriptAssign(source: Decoder): void {
		const target = this._fields
		const values = source._fields
		target.lastCall = values.lastCall
		$.assignStruct(target.lastToken, values.lastToken)
		target.lastErr = $.assignFieldValue(target.lastErr, values.lastErr, "error")
		target.openStack = values.openStack
		target.orig = values.orig
		target._in = values._in
	}

	public async Peek(): globalThis.Promise<[__goscript_decode_token.Token, $.GoError]> {
		let d: Decoder | $.VarRef<Decoder> | null = this;
		using __defer = new $.DisposableStack()
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		__defer.defer(() => { ((): void => {
			;(d$ as Decoder).lastCall = 1
		})() })
		if ((d$ as Decoder).lastCall == 0) {
			let __goscriptTuple0: any = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).Read() : Decoder.prototype.Read.call(d))
			$.assignStruct((d$ as Decoder).lastToken, __goscriptTuple0[0]);
			;(d$ as Decoder).lastErr = __goscriptTuple0[1]
		}
		return [((d$ as Decoder).lastToken).clone(), (d$ as Decoder).lastErr]
	}

	public Position(idx: number): [number, number] {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		let line: number = 0
		let column: number = 0
		let b: $.Slice<number> = $.goSlice($.pointerValue<Decoder>(d).orig, undefined, idx)
		line = bytes.Count(b, new Uint8Array([10])) + 1
		{
			let i: number = bytes.LastIndexByte(b, 10)
			if (i >= 0) {
				b = $.goSlice(b, i + 1, undefined)
			}
		}
		column = utf8.RuneCount(b) + 1
		return [line, column]
	}

	public async Read(): globalThis.Promise<[__goscript_decode_token.Token, $.GoError]> {
		let d: Decoder | $.VarRef<Decoder> | null = this;
		using __defer = new $.DisposableStack()
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		__defer.defer(() => { ((): void => {
			;(d$ as Decoder).lastCall = 0
		})() })
		if ((d$ as Decoder).lastCall == 1) {
			return [((d$ as Decoder).lastToken).clone(), (d$ as Decoder).lastErr]
		}

		let [tok, err] = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseNext((d$ as Decoder).lastToken.kind) : Decoder.prototype.parseNext.call(d, (d$ as Decoder).lastToken.kind))
		if (err != null) {
			return [new __goscript_decode_token.Token(undefined, true), err]
		}

		switch (tok.kind) {
			case 8:
			case 9:
			{
				let __goscriptTuple1: any = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseNext(tok.kind) : Decoder.prototype.parseNext.call(d, tok.kind))
				tok = $.assignStruct(tok, __goscriptTuple1[0])
				err = __goscriptTuple1[1]
				if (err != null) {
					return [new __goscript_decode_token.Token(undefined, true), err]
				}
				break
			}
		}
		$.assignStruct((d$ as Decoder).lastToken, tok)
		return [(tok).clone(), null]
	}

	public consume(n: number): void {
		let d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d);
		;(d$ as Decoder)._in = consume((d$ as Decoder)._in, n)
		return
	}

	public consumeToken(kind: __goscript_decode_token.Kind, size: number, attrs: number): __goscript_decode_token.Token {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		// Important to compute raw and pos before consuming.
		let tok = new __goscript_decode_token.Token({kind: kind, attrs: attrs, pos: $.sliceLen((d$ as Decoder).orig) - $.sliceLen((d$ as Decoder)._in), raw: $.goSlice((d$ as Decoder)._in, undefined, size)}, true)
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consume(size) : Decoder.prototype.consume.call(d, size))
		return (tok).clone()
	}

	public async currentOpenKind(): globalThis.Promise<[__goscript_decode_token.Kind, number]> {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		if ($.sliceLen((d$ as Decoder).openStack) == 0) {
			return [0, 0]
		}
		let openCh = $.arrayIndex((d$ as Decoder).openStack!, $.sliceLen((d$ as Decoder).openStack) - 1)
		switch (openCh) {
			case 123:
			{
				return [4, 125]
				break
			}
			case 60:
			{
				return [4, 62]
				break
			}
			case 91:
			{
				return [6, 93]
				break
			}
		}
		$.panic(await fmt.Sprintf("Decoder: openStack contains invalid byte %c", $.basicInterfaceValue(openCh, "byte", "uint8")))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async newSyntaxError(f: string, x: $.Slice<any>): globalThis.Promise<$.GoError> {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		let e = await errors.New(f, x)
		let [line, column] = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).Position($.sliceLen((d$ as Decoder).orig) - $.sliceLen((d$ as Decoder)._in)) : Decoder.prototype.Position.call(d, $.sliceLen((d$ as Decoder).orig) - $.sliceLen((d$ as Decoder)._in)))
		return errors.New("syntax error (line %d:%d): %v", $.arrayToSlice<any>([$.basicInterfaceValue(line, "int"), $.basicInterfaceValue(column, "int"), (e as any)]))
	}

	public async parseFieldName(): globalThis.Promise<[__goscript_decode_token.Token, $.GoError]> {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		let tok: __goscript_decode_token.Token = new __goscript_decode_token.Token(undefined, true)
		let err: $.GoError = null! as $.GoError
		using __defer = new $.DisposableStack()
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		__defer.defer(() => { ((): void => {
			if ((err == null) && (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).tryConsumeChar(58) : Decoder.prototype.tryConsumeChar.call(d, 58))) {
				tok.attrs = tok.attrs | (128)
			}
		})() })

		// Extension or Any type URL.
		if ($.arrayIndex((d$ as Decoder)._in!, 0) == 91) {
			const __goscriptReturn1: [__goscript_decode_token.Token, $.GoError] = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseTypeName() : Decoder.prototype.parseTypeName.call(d))
			tok = __goscriptReturn1[0]
			err = __goscriptReturn1[1]
			__defer.dispose()
			return [(tok).clone(), err]
		}

		// Identifier.
		{
			let size = parseIdent((d$ as Decoder)._in, false)
			if (size > 0) {
				const __goscriptReturn2: [__goscript_decode_token.Token, $.GoError] = [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(2, size, 1) : Decoder.prototype.consumeToken.call(d, 2, size, 1)), null]
				tok = __goscriptReturn2[0]
				err = __goscriptReturn2[1]
				__defer.dispose()
				return [(tok).clone(), err]
			}
		}

		// Field number. Identify if input is a valid number that is not negative
		// and is decimal integer within 32-bit range.
		{
			let num = __goscript_decode_number.parseNumber((d$ as Decoder)._in)
			if (num.size > 0) {
				let str = num.string((d$ as Decoder)._in)
				if (!num.neg && (num.kind == 0)) {
					{
						let [, __goscriptShadow0] = strconv.ParseInt(str, 10, 32)
						if (__goscriptShadow0 == null) {
							const __goscriptReturn3: [__goscript_decode_token.Token, $.GoError] = [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(2, num.size, 3) : Decoder.prototype.consumeToken.call(d, 2, num.size, 3)), null]
							tok = __goscriptReturn3[0]
							err = __goscriptReturn3[1]
							__defer.dispose()
							return [(tok).clone(), err]
						}
					}
				}
				const __goscriptReturn4: [__goscript_decode_token.Token, $.GoError] = [new __goscript_decode_token.Token(undefined, true), await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).newSyntaxError("invalid field number: %s", $.arrayToSlice<any>([str])) : Decoder.prototype.newSyntaxError.call(d, "invalid field number: %s", $.arrayToSlice<any>([str])))]
				tok = __goscriptReturn4[0]
				err = __goscriptReturn4[1]
				__defer.dispose()
				return [(tok).clone(), err]
			}
		}

		const __goscriptReturn5: [__goscript_decode_token.Token, $.GoError] = [new __goscript_decode_token.Token(undefined, true), await Decoder.prototype.newSyntaxError.call(d, "invalid field name: %s", $.arrayToSlice<any>([$.interfaceValue(errId((d$ as Decoder)._in), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))]
		tok = __goscriptReturn5[0]
		err = __goscriptReturn5[1]
		__defer.dispose()
		return [(tok).clone(), err]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public parseLiteralValue(): [__goscript_decode_token.Token, boolean] {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		let size = parseIdent($.pointerValue<Decoder>(d)._in, true)
		if (size == 0) {
			return [new __goscript_decode_token.Token(undefined, true), false]
		}
		return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(3, size, 3) : Decoder.prototype.consumeToken.call(d, 3, size, 3)), true]
	}

	public async parseNext(lastKind: __goscript_decode_token.Kind): globalThis.Promise<[__goscript_decode_token.Token, $.GoError]> {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		// Trim leading spaces.
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consume(0) : Decoder.prototype.consume.call(d, 0))
		let isEOF = false
		if ($.sliceLen((d$ as Decoder)._in) == 0) {
			isEOF = true
		}

		switch (lastKind) {
			case 1:
			{
				return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(1, 0, 0) : Decoder.prototype.consumeToken.call(d, 1, 0, 0)), null]
				break
			}
			case 0:
			{
				if (isEOF) {
					return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(1, 0, 0) : Decoder.prototype.consumeToken.call(d, 1, 0, 0)), null]
				}
				return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseFieldName() : Decoder.prototype.parseFieldName.call(d))
				break
			}
			case 2:
			{
				if (isEOF) {
					return [new __goscript_decode_token.Token(undefined, true), ErrUnexpectedEOF]
				}
				{
					let ch = $.arrayIndex((d$ as Decoder)._in!, 0)
					switch (ch) {
						case 123:
						case 60:
						{
							void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).pushOpenStack(ch) : Decoder.prototype.pushOpenStack.call(d, ch))
							return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(4, 1, 0) : Decoder.prototype.consumeToken.call(d, 4, 1, 0)), null]
							break
						}
						case 91:
						{
							void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).pushOpenStack(ch) : Decoder.prototype.pushOpenStack.call(d, ch))
							return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(6, 1, 0) : Decoder.prototype.consumeToken.call(d, 6, 1, 0)), null]
							break
						}
						default:
						{
							return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseScalar() : Decoder.prototype.parseScalar.call(d))
							break
						}
					}
				}
				break
			}
			case 3:
			{
				let [openKind, closeCh] = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).currentOpenKind() : Decoder.prototype.currentOpenKind.call(d))
				switch (openKind) {
					case 0:
					{
						if (isEOF) {
							return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(1, 0, 0) : Decoder.prototype.consumeToken.call(d, 1, 0, 0)), null]
						}
						switch ($.arrayIndex((d$ as Decoder)._in!, 0)) {
							case 44:
							{
								return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(8, 1, 0) : Decoder.prototype.consumeToken.call(d, 8, 1, 0)), null]
								break
							}
							case 59:
							{
								return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(9, 1, 0) : Decoder.prototype.consumeToken.call(d, 9, 1, 0)), null]
								break
							}
							default:
							{
								return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseFieldName() : Decoder.prototype.parseFieldName.call(d))
								break
							}
						}
						break
					}
					case 4:
					{
						if (isEOF) {
							return [new __goscript_decode_token.Token(undefined, true), ErrUnexpectedEOF]
						}
						{
							let ch = $.arrayIndex((d$ as Decoder)._in!, 0)
							switch (ch) {
								case closeCh:
								{
									void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).popOpenStack() : Decoder.prototype.popOpenStack.call(d))
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(5, 1, 0) : Decoder.prototype.consumeToken.call(d, 5, 1, 0)), null]
									break
								}
								case $.mapGet<number, number, number>(otherCloseChar, closeCh, 0)[0]:
								{
									return [new __goscript_decode_token.Token(undefined, true), await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).newSyntaxError("mismatched close character %q", $.arrayToSlice<any>([$.basicInterfaceValue(ch, "byte", "uint8")])) : Decoder.prototype.newSyntaxError.call(d, "mismatched close character %q", $.arrayToSlice<any>([$.basicInterfaceValue(ch, "byte", "uint8")])))]
									break
								}
								case 44:
								{
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(8, 1, 0) : Decoder.prototype.consumeToken.call(d, 8, 1, 0)), null]
									break
								}
								case 59:
								{
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(9, 1, 0) : Decoder.prototype.consumeToken.call(d, 9, 1, 0)), null]
									break
								}
								default:
								{
									return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseFieldName() : Decoder.prototype.parseFieldName.call(d))
									break
								}
							}
						}
						break
					}
					case 6:
					{
						if (isEOF) {
							return [new __goscript_decode_token.Token(undefined, true), ErrUnexpectedEOF]
						}
						{
							let ch = $.arrayIndex((d$ as Decoder)._in!, 0)
							switch (ch) {
								case 93:
								{
									void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).popOpenStack() : Decoder.prototype.popOpenStack.call(d))
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(7, 1, 0) : Decoder.prototype.consumeToken.call(d, 7, 1, 0)), null]
									break
								}
								case 44:
								{
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(8, 1, 0) : Decoder.prototype.consumeToken.call(d, 8, 1, 0)), null]
									break
								}
								default:
								{
									return [new __goscript_decode_token.Token(undefined, true), await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).newSyntaxError("unexpected character %q", $.arrayToSlice<any>([$.basicInterfaceValue(ch, "byte", "uint8")])) : Decoder.prototype.newSyntaxError.call(d, "unexpected character %q", $.arrayToSlice<any>([$.basicInterfaceValue(ch, "byte", "uint8")])))]
									break
								}
							}
						}
						break
					}
				}
				break
			}
			case 4:
			{
				if (isEOF) {
					return [new __goscript_decode_token.Token(undefined, true), ErrUnexpectedEOF]
				}
				let [, closeCh] = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).currentOpenKind() : Decoder.prototype.currentOpenKind.call(d))
				{
					let ch = $.arrayIndex((d$ as Decoder)._in!, 0)
					switch (ch) {
						case closeCh:
						{
							void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).popOpenStack() : Decoder.prototype.popOpenStack.call(d))
							return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(5, 1, 0) : Decoder.prototype.consumeToken.call(d, 5, 1, 0)), null]
							break
						}
						case $.mapGet<number, number, number>(otherCloseChar, closeCh, 0)[0]:
						{
							return [new __goscript_decode_token.Token(undefined, true), await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).newSyntaxError("mismatched close character %q", $.arrayToSlice<any>([$.basicInterfaceValue(ch, "byte", "uint8")])) : Decoder.prototype.newSyntaxError.call(d, "mismatched close character %q", $.arrayToSlice<any>([$.basicInterfaceValue(ch, "byte", "uint8")])))]
							break
						}
						default:
						{
							return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseFieldName() : Decoder.prototype.parseFieldName.call(d))
							break
						}
					}
				}
				break
			}
			case 5:
			{
				let [openKind, closeCh] = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).currentOpenKind() : Decoder.prototype.currentOpenKind.call(d))
				switch (openKind) {
					case 0:
					{
						if (isEOF) {
							return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(1, 0, 0) : Decoder.prototype.consumeToken.call(d, 1, 0, 0)), null]
						}
						{
							let ch = $.arrayIndex((d$ as Decoder)._in!, 0)
							switch (ch) {
								case 44:
								{
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(8, 1, 0) : Decoder.prototype.consumeToken.call(d, 8, 1, 0)), null]
									break
								}
								case 59:
								{
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(9, 1, 0) : Decoder.prototype.consumeToken.call(d, 9, 1, 0)), null]
									break
								}
								default:
								{
									return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseFieldName() : Decoder.prototype.parseFieldName.call(d))
									break
								}
							}
						}
						break
					}
					case 4:
					{
						if (isEOF) {
							return [new __goscript_decode_token.Token(undefined, true), ErrUnexpectedEOF]
						}
						{
							let ch = $.arrayIndex((d$ as Decoder)._in!, 0)
							switch (ch) {
								case closeCh:
								{
									void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).popOpenStack() : Decoder.prototype.popOpenStack.call(d))
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(5, 1, 0) : Decoder.prototype.consumeToken.call(d, 5, 1, 0)), null]
									break
								}
								case $.mapGet<number, number, number>(otherCloseChar, closeCh, 0)[0]:
								{
									return [new __goscript_decode_token.Token(undefined, true), await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).newSyntaxError("mismatched close character %q", $.arrayToSlice<any>([$.basicInterfaceValue(ch, "byte", "uint8")])) : Decoder.prototype.newSyntaxError.call(d, "mismatched close character %q", $.arrayToSlice<any>([$.basicInterfaceValue(ch, "byte", "uint8")])))]
									break
								}
								case 44:
								{
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(8, 1, 0) : Decoder.prototype.consumeToken.call(d, 8, 1, 0)), null]
									break
								}
								case 59:
								{
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(9, 1, 0) : Decoder.prototype.consumeToken.call(d, 9, 1, 0)), null]
									break
								}
								default:
								{
									return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseFieldName() : Decoder.prototype.parseFieldName.call(d))
									break
								}
							}
						}
						break
					}
					case 6:
					{
						if (isEOF) {
							return [new __goscript_decode_token.Token(undefined, true), ErrUnexpectedEOF]
						}
						{
							let ch = $.arrayIndex((d$ as Decoder)._in!, 0)
							switch (ch) {
								case closeCh:
								{
									void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).popOpenStack() : Decoder.prototype.popOpenStack.call(d))
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(7, 1, 0) : Decoder.prototype.consumeToken.call(d, 7, 1, 0)), null]
									break
								}
								case 44:
								{
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(8, 1, 0) : Decoder.prototype.consumeToken.call(d, 8, 1, 0)), null]
									break
								}
								default:
								{
									return [new __goscript_decode_token.Token(undefined, true), await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).newSyntaxError("unexpected character %q", $.arrayToSlice<any>([$.basicInterfaceValue(ch, "byte", "uint8")])) : Decoder.prototype.newSyntaxError.call(d, "unexpected character %q", $.arrayToSlice<any>([$.basicInterfaceValue(ch, "byte", "uint8")])))]
									break
								}
							}
						}
						break
					}
				}
				break
			}
			case 6:
			{
				if (isEOF) {
					return [new __goscript_decode_token.Token(undefined, true), ErrUnexpectedEOF]
				}
				{
					let ch = $.arrayIndex((d$ as Decoder)._in!, 0)
					switch (ch) {
						case 93:
						{
							void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).popOpenStack() : Decoder.prototype.popOpenStack.call(d))
							return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(7, 1, 0) : Decoder.prototype.consumeToken.call(d, 7, 1, 0)), null]
							break
						}
						case 123:
						case 60:
						{
							void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).pushOpenStack(ch) : Decoder.prototype.pushOpenStack.call(d, ch))
							return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(4, 1, 0) : Decoder.prototype.consumeToken.call(d, 4, 1, 0)), null]
							break
						}
						default:
						{
							return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseScalar() : Decoder.prototype.parseScalar.call(d))
							break
						}
					}
				}
				break
			}
			case 7:
			{
				let [openKind, closeCh] = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).currentOpenKind() : Decoder.prototype.currentOpenKind.call(d))
				switch (openKind) {
					case 0:
					{
						if (isEOF) {
							return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(1, 0, 0) : Decoder.prototype.consumeToken.call(d, 1, 0, 0)), null]
						}
						{
							let ch = $.arrayIndex((d$ as Decoder)._in!, 0)
							switch (ch) {
								case 44:
								{
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(8, 1, 0) : Decoder.prototype.consumeToken.call(d, 8, 1, 0)), null]
									break
								}
								case 59:
								{
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(9, 1, 0) : Decoder.prototype.consumeToken.call(d, 9, 1, 0)), null]
									break
								}
								default:
								{
									return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseFieldName() : Decoder.prototype.parseFieldName.call(d))
									break
								}
							}
						}
						break
					}
					case 4:
					{
						if (isEOF) {
							return [new __goscript_decode_token.Token(undefined, true), ErrUnexpectedEOF]
						}
						{
							let ch = $.arrayIndex((d$ as Decoder)._in!, 0)
							switch (ch) {
								case closeCh:
								{
									void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).popOpenStack() : Decoder.prototype.popOpenStack.call(d))
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(5, 1, 0) : Decoder.prototype.consumeToken.call(d, 5, 1, 0)), null]
									break
								}
								case $.mapGet<number, number, number>(otherCloseChar, closeCh, 0)[0]:
								{
									return [new __goscript_decode_token.Token(undefined, true), await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).newSyntaxError("mismatched close character %q", $.arrayToSlice<any>([$.basicInterfaceValue(ch, "byte", "uint8")])) : Decoder.prototype.newSyntaxError.call(d, "mismatched close character %q", $.arrayToSlice<any>([$.basicInterfaceValue(ch, "byte", "uint8")])))]
									break
								}
								case 44:
								{
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(8, 1, 0) : Decoder.prototype.consumeToken.call(d, 8, 1, 0)), null]
									break
								}
								case 59:
								{
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(9, 1, 0) : Decoder.prototype.consumeToken.call(d, 9, 1, 0)), null]
									break
								}
								default:
								{
									return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseFieldName() : Decoder.prototype.parseFieldName.call(d))
									break
								}
							}
						}
						break
					}
					default:
					{
						break
					}
				}
				break
			}
			case 8:
			case 9:
			{
				let [openKind, closeCh] = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).currentOpenKind() : Decoder.prototype.currentOpenKind.call(d))
				switch (openKind) {
					case 0:
					{
						if (isEOF) {
							return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(1, 0, 0) : Decoder.prototype.consumeToken.call(d, 1, 0, 0)), null]
						}
						return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseFieldName() : Decoder.prototype.parseFieldName.call(d))
						break
					}
					case 4:
					{
						if (isEOF) {
							return [new __goscript_decode_token.Token(undefined, true), ErrUnexpectedEOF]
						}
						{
							let ch = $.arrayIndex((d$ as Decoder)._in!, 0)
							switch (ch) {
								case closeCh:
								{
									void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).popOpenStack() : Decoder.prototype.popOpenStack.call(d))
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(5, 1, 0) : Decoder.prototype.consumeToken.call(d, 5, 1, 0)), null]
									break
								}
								case $.mapGet<number, number, number>(otherCloseChar, closeCh, 0)[0]:
								{
									return [new __goscript_decode_token.Token(undefined, true), await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).newSyntaxError("mismatched close character %q", $.arrayToSlice<any>([$.basicInterfaceValue(ch, "byte", "uint8")])) : Decoder.prototype.newSyntaxError.call(d, "mismatched close character %q", $.arrayToSlice<any>([$.basicInterfaceValue(ch, "byte", "uint8")])))]
									break
								}
								default:
								{
									return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseFieldName() : Decoder.prototype.parseFieldName.call(d))
									break
								}
							}
						}
						break
					}
					case 6:
					{
						if (lastKind == 9) {
							// It is not be possible to have this case as logic here
							// should not have produced a semicolon Token when inside a
							// list. Let it panic below.
							break
						}
						// Next token can be MessageOpen or Scalar.
						if (isEOF) {
							return [new __goscript_decode_token.Token(undefined, true), ErrUnexpectedEOF]
						}
						{
							let ch = $.arrayIndex((d$ as Decoder)._in!, 0)
							switch (ch) {
								case 123:
								case 60:
								{
									void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).pushOpenStack(ch) : Decoder.prototype.pushOpenStack.call(d, ch))
									return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(4, 1, 0) : Decoder.prototype.consumeToken.call(d, 4, 1, 0)), null]
									break
								}
								default:
								{
									return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseScalar() : Decoder.prototype.parseScalar.call(d))
									break
								}
							}
						}
						break
					}
				}
				break
			}
		}

		let [line, column] = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).Position($.sliceLen((d$ as Decoder).orig) - $.sliceLen((d$ as Decoder)._in)) : Decoder.prototype.Position.call(d, $.sliceLen((d$ as Decoder).orig) - $.sliceLen((d$ as Decoder)._in)))
		$.panic(await fmt.Sprintf("Decoder.parseNext: bug at handling line %d:%d with lastKind=%v", $.basicInterfaceValue(line, "int"), $.basicInterfaceValue(column, "int"), $.namedValueInterfaceValue<any>(lastKind, "text.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public parseNumberValue(): [__goscript_decode_token.Token, boolean] {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		let _in: $.Slice<number> = (d$ as Decoder)._in
		let num = __goscript_decode_number.parseNumber(_in)
		if (num.size == 0) {
			return [new __goscript_decode_token.Token(undefined, true), false]
		}
		let numAttrs = num.kind
		if (num.neg) {
			numAttrs = numAttrs | (128)
		}
		let tok = (() => { const __goscriptLiteralField0 = $.markAsStructValue($.cloneStructValue(num)).string((d$ as Decoder)._in); return new __goscript_decode_token.Token({kind: 3, attrs: 1, pos: $.sliceLen((d$ as Decoder).orig) - $.sliceLen((d$ as Decoder)._in), raw: $.goSlice((d$ as Decoder)._in, undefined, num.size), str: __goscriptLiteralField0, numAttrs: numAttrs}, true) })()
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consume(num.size) : Decoder.prototype.consume.call(d, num.size))
		return [(tok).clone(), true]
	}

	public async parseScalar(): globalThis.Promise<[__goscript_decode_token.Token, $.GoError]> {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		if (($.arrayIndex((d$ as Decoder)._in!, 0) == 34) || ($.arrayIndex((d$ as Decoder)._in!, 0) == 39)) {
			return (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseStringValue() : Decoder.prototype.parseStringValue.call(d))
		}

		{
			let [tok, ok] = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseLiteralValue() : Decoder.prototype.parseLiteralValue.call(d))
			if (ok) {
				return [(tok).clone(), null]
			}
		}

		{
			let [tok, ok] = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseNumberValue() : Decoder.prototype.parseNumberValue.call(d))
			if (ok) {
				return [(tok).clone(), null]
			}
		}

		return [new __goscript_decode_token.Token(undefined, true), await Decoder.prototype.newSyntaxError.call(d, "invalid scalar value: %s", $.arrayToSlice<any>([$.interfaceValue(errId((d$ as Decoder)._in), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))]
	}

	public async parseString(): globalThis.Promise<[string, $.GoError]> {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		let _in: $.Slice<number> = (d$ as Decoder)._in
		if ($.sliceLen(_in) == 0) {
			return ["", ErrUnexpectedEOF]
		}
		let quote = $.arrayIndex(_in!, 0)
		_in = $.goSlice(_in, 1, undefined)
		let i = __goscript_decode_string.indexNeedEscapeInBytes(_in)
		_in = $.goSlice(_in, i, undefined)
		let out: $.Slice<number> = $.goSlice(_in, undefined, i, i)
		while ($.sliceLen(_in) > 0) {
			{
				let [r, n] = utf8.DecodeRune(_in)
				switch ((true as boolean)) {
					case (r == 65533) && (n == 1):
					{
						return ["", await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).newSyntaxError("invalid UTF-8 detected", null) : Decoder.prototype.newSyntaxError.call(d, "invalid UTF-8 detected", null))]
						break
					}
					case (r == 0) || (r == 10):
					{
						return ["", await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).newSyntaxError("invalid character %q in string", $.arrayToSlice<any>([$.basicInterfaceValue(r, "rune", "int32")])) : Decoder.prototype.newSyntaxError.call(d, "invalid character %q in string", $.arrayToSlice<any>([$.basicInterfaceValue(r, "rune", "int32")])))]
						break
					}
					case r == $.int(quote, 32):
					{
						_in = $.goSlice(_in, 1, undefined)
						void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consume($.sliceLen((d$ as Decoder)._in) - $.sliceLen(_in)) : Decoder.prototype.consume.call(d, $.sliceLen((d$ as Decoder)._in) - $.sliceLen(_in)))
						return [$.bytesToString(out), null]
						break
					}
					case r == 92:
					{
						if ($.sliceLen(_in) < 2) {
							return ["", ErrUnexpectedEOF]
						}
						{
							let r = $.arrayIndex(_in!, 1)
							switch (r) {
								case 34:
								case 39:
								case 92:
								case 63:
								{
									let __goscriptAssign0_0: $.Slice<number> = $.goSlice(_in, 2, undefined)
									let __goscriptAssign0_1: $.Slice<number> = $.append(out, $.uint(r, 8), $.byteSliceHint)
									_in = __goscriptAssign0_0
									out = __goscriptAssign0_1
									break
								}
								case 97:
								{
									let __goscriptAssign1_0: $.Slice<number> = $.goSlice(_in, 2, undefined)
									let __goscriptAssign1_1: $.Slice<number> = $.append(out, $.uint(7, 8), $.byteSliceHint)
									_in = __goscriptAssign1_0
									out = __goscriptAssign1_1
									break
								}
								case 98:
								{
									let __goscriptAssign2_0: $.Slice<number> = $.goSlice(_in, 2, undefined)
									let __goscriptAssign2_1: $.Slice<number> = $.append(out, $.uint(8, 8), $.byteSliceHint)
									_in = __goscriptAssign2_0
									out = __goscriptAssign2_1
									break
								}
								case 110:
								{
									let __goscriptAssign3_0: $.Slice<number> = $.goSlice(_in, 2, undefined)
									let __goscriptAssign3_1: $.Slice<number> = $.append(out, $.uint(10, 8), $.byteSliceHint)
									_in = __goscriptAssign3_0
									out = __goscriptAssign3_1
									break
								}
								case 114:
								{
									let __goscriptAssign4_0: $.Slice<number> = $.goSlice(_in, 2, undefined)
									let __goscriptAssign4_1: $.Slice<number> = $.append(out, $.uint(13, 8), $.byteSliceHint)
									_in = __goscriptAssign4_0
									out = __goscriptAssign4_1
									break
								}
								case 116:
								{
									let __goscriptAssign5_0: $.Slice<number> = $.goSlice(_in, 2, undefined)
									let __goscriptAssign5_1: $.Slice<number> = $.append(out, $.uint(9, 8), $.byteSliceHint)
									_in = __goscriptAssign5_0
									out = __goscriptAssign5_1
									break
								}
								case 118:
								{
									let __goscriptAssign6_0: $.Slice<number> = $.goSlice(_in, 2, undefined)
									let __goscriptAssign6_1: $.Slice<number> = $.append(out, $.uint(11, 8), $.byteSliceHint)
									_in = __goscriptAssign6_0
									out = __goscriptAssign6_1
									break
								}
								case 102:
								{
									let __goscriptAssign7_0: $.Slice<number> = $.goSlice(_in, 2, undefined)
									let __goscriptAssign7_1: $.Slice<number> = $.append(out, $.uint(12, 8), $.byteSliceHint)
									_in = __goscriptAssign7_0
									out = __goscriptAssign7_1
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
									let __goscriptShadow1 = $.sliceLen($.goSlice(_in, 1, undefined)) - $.sliceLen(bytes.TrimLeft($.goSlice(_in, 1, undefined), "01234567"))
									if (__goscriptShadow1 > 3) {
										__goscriptShadow1 = 3
									}
									let [v, err] = strconv.ParseUint($.bytesToString($.goSlice(_in, 1, 1 + __goscriptShadow1)), 8, 8)
									if (err != null) {
										return ["", await Decoder.prototype.newSyntaxError.call(d, "invalid octal escape code %q in string", $.arrayToSlice<any>([$.interfaceValue($.goSlice(_in, undefined, 1 + __goscriptShadow1), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))]
									}
									let __goscriptAssign8_0: $.Slice<number> = $.goSlice(_in, 1 + __goscriptShadow1, undefined)
									let __goscriptAssign8_1: $.Slice<number> = $.append(out, $.uint($.uint(v, 8), 8), $.byteSliceHint)
									_in = __goscriptAssign8_0
									out = __goscriptAssign8_1
									break
								}
								case 120:
								{
									let __goscriptShadow2 = $.sliceLen($.goSlice(_in, 2, undefined)) - $.sliceLen(bytes.TrimLeft($.goSlice(_in, 2, undefined), "0123456789abcdefABCDEF"))
									if (__goscriptShadow2 > 2) {
										__goscriptShadow2 = 2
									}
									let [v, err] = strconv.ParseUint($.bytesToString($.goSlice(_in, 2, 2 + __goscriptShadow2)), 16, 8)
									if (err != null) {
										return ["", await Decoder.prototype.newSyntaxError.call(d, "invalid hex escape code %q in string", $.arrayToSlice<any>([$.interfaceValue($.goSlice(_in, undefined, 2 + __goscriptShadow2), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))]
									}
									let __goscriptAssign9_0: $.Slice<number> = $.goSlice(_in, 2 + __goscriptShadow2, undefined)
									let __goscriptAssign9_1: $.Slice<number> = $.append(out, $.uint($.uint(v, 8), 8), $.byteSliceHint)
									_in = __goscriptAssign9_0
									out = __goscriptAssign9_1
									break
								}
								case 117:
								case 85:
								{
									let __goscriptShadow3 = 6
									if (r == 85) {
										__goscriptShadow3 = 10
									}
									if ($.sliceLen(_in) < __goscriptShadow3) {
										return ["", ErrUnexpectedEOF]
									}
									let [v, err] = strconv.ParseUint($.bytesToString($.goSlice(_in, 2, __goscriptShadow3)), 16, 32)
									if ((1114111n < v) || (err != null)) {
										return ["", await Decoder.prototype.newSyntaxError.call(d, "invalid Unicode escape code %q in string", $.arrayToSlice<any>([$.interfaceValue($.goSlice(_in, undefined, __goscriptShadow3), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))]
									}
									_in = $.goSlice(_in, __goscriptShadow3, undefined)

									let __goscriptShadow4 = $.int(v, 32)
									if (utf16.IsSurrogate(__goscriptShadow4)) {
										if ($.sliceLen(_in) < 6) {
											return ["", ErrUnexpectedEOF]
										}
										let [__goscriptShadow5, __goscriptShadow6] = strconv.ParseUint($.bytesToString($.goSlice(_in, 2, 6)), 16, 16)
										__goscriptShadow4 = utf16.DecodeRune(__goscriptShadow4, $.int(__goscriptShadow5, 32))
										if (((($.arrayIndex(_in!, 0) != 92) || ($.arrayIndex(_in!, 1) != 117)) || (__goscriptShadow4 == 65533)) || (__goscriptShadow6 != null)) {
											return ["", await Decoder.prototype.newSyntaxError.call(d, "invalid Unicode escape code %q in string", $.arrayToSlice<any>([$.interfaceValue($.goSlice(_in, undefined, 6), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))]
										}
										_in = $.goSlice(_in, 6, undefined)
									}
									out = $.appendSlice(out, $.stringToBytes($.runeToString(__goscriptShadow4)), $.byteSliceHint)
									break
								}
								default:
								{
									return ["", await Decoder.prototype.newSyntaxError.call(d, "invalid escape code %q in string", $.arrayToSlice<any>([$.interfaceValue($.goSlice(_in, undefined, 2), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))]
									break
								}
							}
						}
						break
					}
					default:
					{
						let __goscriptShadow7 = __goscript_decode_string.indexNeedEscapeInBytes($.goSlice(_in, n, undefined))
						let __goscriptAssign10_0: $.Slice<number> = $.goSlice(_in, n + __goscriptShadow7, undefined)
						let __goscriptAssign10_1: $.Slice<number> = $.appendSlice(out, $.goSlice(_in, undefined, n + __goscriptShadow7), $.byteSliceHint)
						_in = __goscriptAssign10_0
						out = __goscriptAssign10_1
						break
					}
				}
			}
		}
		return ["", ErrUnexpectedEOF]
	}

	public async parseStringValue(): globalThis.Promise<[__goscript_decode_token.Token, $.GoError]> {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)

		// lastErr contains the last read error.

		let in0: $.Slice<number> = (d$ as Decoder)._in
		let ss: $.Slice<string> = null! as $.Slice<string>
		while (($.sliceLen((d$ as Decoder)._in) > 0) && (($.arrayIndex((d$ as Decoder)._in!, 0) == 34) || ($.arrayIndex((d$ as Decoder)._in!, 0) == 39))) {
			let [s, err] = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseString() : Decoder.prototype.parseString.call(d))
			if (err != null) {
				return [new __goscript_decode_token.Token(undefined, true), err]
			}
			ss = $.appendOne(ss, s)
		}

		return [(() => { const __goscriptLiteralField1 = strings.Join(ss, ""); return new __goscript_decode_token.Token({kind: 3, attrs: 2, pos: $.sliceLen((d$ as Decoder).orig) - $.sliceLen(in0), raw: $.goSlice(in0, undefined, $.sliceLen(in0) - $.sliceLen((d$ as Decoder)._in)), str: __goscriptLiteralField1}, true) })(), null]
	}

	public async parseTypeName(): globalThis.Promise<[__goscript_decode_token.Token, $.GoError]> {
		let d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		let startPos = $.sliceLen((d$ as Decoder).orig) - $.sliceLen((d$ as Decoder)._in)
		// Use alias s to advance first in order to use d.in for error handling.
		// Caller already checks for [ as first character.
		let s: $.Slice<number> = consume($.goSlice((d$ as Decoder)._in, 1, undefined), 0)
		if ($.sliceLen(s) == 0) {
			return [new __goscript_decode_token.Token(undefined, true), ErrUnexpectedEOF]
		}

		let name: $.Slice<number> = null! as $.Slice<number>
		while (($.sliceLen(s) > 0) && isTypeNameChar($.arrayIndex(s!, 0))) {
			name = $.append(name, $.uint($.arrayIndex(s!, 0), 8), $.byteSliceHint)
			s = $.goSlice(s, 1, undefined)
		}
		s = consume(s, 0)

		let closed: boolean = false
		while (($.sliceLen(s) > 0) && !closed) {
			switch ((true as boolean)) {
				case $.arrayIndex(s!, 0) == 93:
				{
					s = $.goSlice(s, 1, undefined)
					closed = true
					break
				}
				case $.arrayIndex(s!, 0) == 47:
				case $.arrayIndex(s!, 0) == 46:
				{
					if (($.sliceLen(name) > 0) && (($.arrayIndex(name!, $.sliceLen(name) - 1) == 47) || ($.arrayIndex(name!, $.sliceLen(name) - 1) == 46))) {
						return [new __goscript_decode_token.Token(undefined, true), await Decoder.prototype.newSyntaxError.call(d, "invalid type URL/extension field name: %s", $.arrayToSlice<any>([$.interfaceValue($.goSlice((d$ as Decoder).orig, startPos, ($.sliceLen((d$ as Decoder).orig) - $.sliceLen(s)) + 1), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))]
					}
					name = $.append(name, $.uint($.arrayIndex(s!, 0), 8), $.byteSliceHint)
					s = $.goSlice(s, 1, undefined)
					s = consume(s, 0)
					while (($.sliceLen(s) > 0) && isTypeNameChar($.arrayIndex(s!, 0))) {
						name = $.append(name, $.uint($.arrayIndex(s!, 0), 8), $.byteSliceHint)
						s = $.goSlice(s, 1, undefined)
					}
					s = consume(s, 0)
					break
				}
				default:
				{
					return [new __goscript_decode_token.Token(undefined, true), await Decoder.prototype.newSyntaxError.call(d, "invalid type URL/extension field name: %s", $.arrayToSlice<any>([$.interfaceValue($.goSlice((d$ as Decoder).orig, startPos, ($.sliceLen((d$ as Decoder).orig) - $.sliceLen(s)) + 1), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))]
					break
				}
			}
		}

		if (!closed) {
			return [new __goscript_decode_token.Token(undefined, true), ErrUnexpectedEOF]
		}

		// First character cannot be '.'. Last character cannot be '.' or '/'.
		let size = $.sliceLen(name)
		if ((((size == 0) || ($.arrayIndex(name!, 0) == 46)) || ($.arrayIndex(name!, size - 1) == 46)) || ($.arrayIndex(name!, size - 1) == 47)) {
			return [new __goscript_decode_token.Token(undefined, true), await Decoder.prototype.newSyntaxError.call(d, "invalid type URL/extension field name: %s", $.arrayToSlice<any>([$.interfaceValue($.goSlice((d$ as Decoder).orig, startPos, $.sliceLen((d$ as Decoder).orig) - $.sliceLen(s)), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))]
		}

		;(d$ as Decoder)._in = s
		let endPos = $.sliceLen((d$ as Decoder).orig) - $.sliceLen((d$ as Decoder)._in)
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consume(0) : Decoder.prototype.consume.call(d, 0))

		return [new __goscript_decode_token.Token({kind: 2, attrs: 2, pos: startPos, raw: $.goSlice((d$ as Decoder).orig, startPos, endPos), str: $.bytesToString(name)}, true), null]
	}

	public popOpenStack(): void {
		let d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d);
		;(d$ as Decoder).openStack = $.goSlice((d$ as Decoder).openStack, undefined, $.sliceLen((d$ as Decoder).openStack) - 1)
	}

	public pushOpenStack(ch: number): void {
		let d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d);
		;(d$ as Decoder).openStack = $.append((d$ as Decoder).openStack, $.uint(ch, 8), $.byteSliceHint)
	}

	public tryConsumeChar(c: number): boolean {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		if (($.sliceLen((d$ as Decoder)._in) > 0) && ($.arrayIndex((d$ as Decoder)._in!, 0) == c)) {
			void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consume(1) : Decoder.prototype.consume.call(d, 1))
			return true
		}
		return false
	}

	static __typeInfo = $.registerStructType(
		"text.Decoder",
		() => new Decoder(),
		() => [$.methodSignature("Peek", [], ["text.Token", "error"], true), $.methodSignature("Position", [["idx", /* @__PURE__ */ $.basicType("int")]], [["line", /* @__PURE__ */ $.basicType("int")], ["column", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("Read", [], ["text.Token", "error"], true), $.methodSignature("consume", [["n", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("consumeToken", [["kind", /* @__PURE__ */ $.basicType("uint8", "text.Kind")], ["size", /* @__PURE__ */ $.basicType("int")], ["attrs", /* @__PURE__ */ $.basicType("uint8")]], ["text.Token"], true), $.methodSignature("currentOpenKind", [], [/* @__PURE__ */ $.basicType("uint8", "text.Kind"), /* @__PURE__ */ $.basicType("uint8")], true), $.methodSignature("newSyntaxError", [["f", /* @__PURE__ */ $.basicType("string")], ["x", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("parseFieldName", [], [["tok", "text.Token"], ["err", "error"]], true), $.methodSignature("parseLiteralValue", [], ["text.Token", /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("parseNext", [["lastKind", /* @__PURE__ */ $.basicType("uint8", "text.Kind")]], ["text.Token", "error"], true), $.methodSignature("parseNumberValue", [], ["text.Token", /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("parseScalar", [], ["text.Token", "error"], true), $.methodSignature("parseString", [], [/* @__PURE__ */ $.basicType("string"), "error"], true), $.methodSignature("parseStringValue", [], ["text.Token", "error"], true), $.methodSignature("parseTypeName", [], ["text.Token", "error"], true), $.methodSignature("popOpenStack", [], [], true), $.methodSignature("pushOpenStack", [["ch", /* @__PURE__ */ $.basicType("uint8")]], [], true), $.methodSignature("tryConsumeChar", [["c", /* @__PURE__ */ $.basicType("uint8")]], [/* @__PURE__ */ $.basicType("bool")], true)],
		Decoder,
		() => [/* @__PURE__ */ $.structField("lastCall", /* @__PURE__ */ $.basicType("uint8", "text.call"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" }), /* @__PURE__ */ $.structField("lastToken", "text.Token", [1], 8, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" }), /* @__PURE__ */ $.structField("lastErr", "error", [2], 64, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" }), /* @__PURE__ */ $.structField("openStack", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 80, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" }), /* @__PURE__ */ $.structField("orig", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 104, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" }), /* @__PURE__ */ $.structField("in", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 128, false, { key: "_in", pkgPath: "google.golang.org/protobuf/internal/encoding/text" })]
	)
}

export const readCall: call = 0

export const peekCall: call = 1

export const mismatchedFmt: string = "mismatched close character %q"

export const unexpectedFmt: string = "unexpected character %q"

export function NewDecoder(b: $.Slice<number>): Decoder | $.VarRef<Decoder> | null {
	return new Decoder({orig: b, _in: b})
}

export let ErrUnexpectedEOF: $.GoError = await errors.New("%v", $.arrayToSlice<any>([(io.ErrUnexpectedEOF as any)]))

export function __goscript_set_ErrUnexpectedEOF(__goscriptValue: $.GoError): void {
	ErrUnexpectedEOF = __goscriptValue
}

export let otherCloseChar: globalThis.Map<number, number> | null = $.makeMap<number, number>([[125, 62], [62, 125]])

export function __goscript_set_otherCloseChar(__goscriptValue: globalThis.Map<number, number> | null): void {
	otherCloseChar = __goscriptValue
}

export function isTypeNameChar(b: number): boolean {
	return (((((b == 45) || (b == 95)) || ((48 <= b) && (b <= 57))) || ((97 <= b) && (b <= 122))) || ((65 <= b) && (b <= 90)))
}

export function isWhiteSpace(b: number): boolean {
	switch (b) {
		case 32:
		case 10:
		case 13:
		case 9:
		{
			return true
			break
		}
		default:
		{
			return false
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function parseIdent(input: $.Slice<number>, allowNeg: boolean): number {
	let size: number = 0

	let s: $.Slice<number> = input
	if ($.sliceLen(s) == 0) {
		return 0
	}

	if (allowNeg && ($.arrayIndex(s!, 0) == 45)) {
		s = $.goSlice(s, 1, undefined)
		size++
		if ($.sliceLen(s) == 0) {
			return 0
		}
	}

	switch ((true as boolean)) {
		case $.arrayIndex(s!, 0) == 95:
		case (97 <= $.arrayIndex(s!, 0)) && ($.arrayIndex(s!, 0) <= 122):
		case (65 <= $.arrayIndex(s!, 0)) && ($.arrayIndex(s!, 0) <= 90):
		{
			s = $.goSlice(s, 1, undefined)
			size++
			break
		}
		default:
		{
			return 0
			break
		}
	}

	while (($.sliceLen(s) > 0) && (((($.arrayIndex(s!, 0) == 95) || ((97 <= $.arrayIndex(s!, 0)) && ($.arrayIndex(s!, 0) <= 122))) || ((65 <= $.arrayIndex(s!, 0)) && ($.arrayIndex(s!, 0) <= 90))) || ((48 <= $.arrayIndex(s!, 0)) && ($.arrayIndex(s!, 0) <= 57)))) {
		s = $.goSlice(s, 1, undefined)
		size++
	}

	if (($.sliceLen(s) > 0) && !isDelim($.arrayIndex(s!, 0))) {
		return 0
	}

	return size
}

export function consume(b: $.Slice<number>, n: number): $.Slice<number> {
	b = $.goSlice(b, n, undefined)
	while ($.sliceLen(b) > 0) {
		switch ($.arrayIndex(b!, 0)) {
			case 32:
			case 10:
			case 13:
			case 9:
			{
				b = $.goSlice(b, 1, undefined)
				break
			}
			case 35:
			{
				{
					let i: number = bytes.IndexByte(b, 10)
					if (i >= 0) {
						b = $.goSlice(b, i + 1, undefined)
					} else {
						b = null
					}
				}
				break
			}
			default:
			{
				return b
				break
			}
		}
	}
	return b
}

export function errId(seq: $.Slice<number>): $.Slice<number> {
	const maxLen: number = 32
	for (let i = 0; i < $.sliceLen(seq); ) {
		if (i > 32) {
			return $.appendSlice($.goSlice(seq, undefined, i, i), $.stringToBytes("\xe2\x80\xa6"), $.byteSliceHint)
		}
		let [r, size] = utf8.DecodeRune($.goSlice(seq, i, undefined))
		if ((r > 128) || ((r != 47) && isDelim($.uint(r, 8)))) {
			if (i == 0) {
				// Either the first byte is invalid UTF-8 or a
				// delimiter, or the first rune is non-ASCII.
				// Return it as-is.
				i = size
			}
			return $.goSlice(seq, undefined, i, i)
		}
		i = i + (size)
	}
	// No delimiter found.
	return seq
}

export function isDelim(c: number): boolean {
	return !(((((((c == 45) || (c == 43)) || (c == 46)) || (c == 95)) || ((97 <= c) && (c <= 122))) || ((65 <= c) && (c <= 90))) || ((48 <= c) && (c <= 57)))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_decode_token.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "text.Kind"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}
