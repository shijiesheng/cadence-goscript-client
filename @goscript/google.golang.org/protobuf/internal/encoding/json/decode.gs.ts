// Generated file based on decode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as errors from "@goscript/google.golang.org/protobuf/internal/errors/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as utf16 from "@goscript/unicode/utf16/index.js"

import * as strs from "@goscript/google.golang.org/protobuf/internal/strs/index.js"

import * as __goscript_decode_number from "./decode_number.gs.ts"

import * as __goscript_decode_string from "./decode_string.gs.ts"

import * as __goscript_decode_token from "./decode_token.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/regexp/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/google.golang.org/protobuf/internal/errors/index.js"
import "@goscript/strconv/index.js"
import "@goscript/unicode/index.js"
import "@goscript/unicode/utf16/index.js"
import "@goscript/google.golang.org/protobuf/internal/strs/index.js"
import "./decode_number.gs.ts"
import "./decode_string.gs.ts"
import "./decode_token.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/encoding/json", ["json.call", "json.Decoder"])

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

	// openStack is a stack containing ObjectOpen and ArrayOpen values. The
	// top of stack represents the object or the array the current value is
	// directly located in.
	public get openStack(): $.Slice<__goscript_decode_token.Kind> {
		return this._fields.openStack
	}

	public set openStack(value: $.Slice<__goscript_decode_token.Kind>) {
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
		openStack: $.Slice<__goscript_decode_token.Kind>
		orig: $.Slice<number>
		_in: $.Slice<number>
	}

	constructor(init?: Partial<{lastCall?: call, lastToken?: __goscript_decode_token.Token, lastErr?: $.GoError, openStack?: $.Slice<__goscript_decode_token.Kind>, orig?: $.Slice<number>, _in?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			lastCall: init?.lastCall ?? (0 as call),
			lastToken: init?.lastToken ? init.lastToken.clone() : new __goscript_decode_token.Token(undefined, true),
			lastErr: init?.lastErr ?? (null! as $.GoError),
			openStack: init?.openStack ?? (null! as $.Slice<__goscript_decode_token.Kind>),
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

	public Clone(): Decoder | $.VarRef<Decoder> | null {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		let ret = $.varRef(($.pointerValue<Decoder>(d)).clone())
		ret.value.openStack = $.appendSlice<__goscript_decode_token.Kind>(null, ret.value.openStack)
		return ret
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
		const scalar: __goscript_decode_token.Kind = 30

		__defer.defer(() => { ((): void => {
			;(d$ as Decoder).lastCall = 0
		})() })
		if ((d$ as Decoder).lastCall == 1) {
			return [((d$ as Decoder).lastToken).clone(), (d$ as Decoder).lastErr]
		}

		let [tok, err] = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseNext() : Decoder.prototype.parseNext.call(d))
		if (err != null) {
			return [new __goscript_decode_token.Token(undefined, true), err]
		}

		switch (tok.kind) {
			case 1:
			{
				if (($.sliceLen((d$ as Decoder).openStack) != 0) || ($.uint(((((d$ as Decoder).lastToken.kind & 30) | 128) | 512), 16) == 0)) {
					return [new __goscript_decode_token.Token(undefined, true), ErrUnexpectedEOF]
				}
				break
			}
			case 2:
			{
				if (!await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).isValueNext() : Decoder.prototype.isValueNext.call(d))) {
					return [new __goscript_decode_token.Token(undefined, true), await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).newSyntaxError(tok.pos, "unexpected token %s", $.arrayToSlice<any>([tok.RawString()])) : Decoder.prototype.newSyntaxError.call(d, tok.pos, "unexpected token %s", $.arrayToSlice<any>([tok.RawString()])))]
				}
				break
			}
			case 4:
			case 8:
			{
				if (!await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).isValueNext() : Decoder.prototype.isValueNext.call(d))) {
					return [new __goscript_decode_token.Token(undefined, true), await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).newSyntaxError(tok.pos, "unexpected token %s", $.arrayToSlice<any>([tok.RawString()])) : Decoder.prototype.newSyntaxError.call(d, tok.pos, "unexpected token %s", $.arrayToSlice<any>([tok.RawString()])))]
				}
				break
			}
			case 16:
			{
				if (await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).isValueNext() : Decoder.prototype.isValueNext.call(d))) {
					break
				}
				// This string token should only be for a field name.
				if ($.uint(((d$ as Decoder).lastToken.kind & (64 | 1024)), 16) == 0) {
					return [new __goscript_decode_token.Token(undefined, true), await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).newSyntaxError(tok.pos, "unexpected token %s", $.arrayToSlice<any>([tok.RawString()])) : Decoder.prototype.newSyntaxError.call(d, tok.pos, "unexpected token %s", $.arrayToSlice<any>([tok.RawString()])))]
				}
				if ($.sliceLen((d$ as Decoder)._in) == 0) {
					return [new __goscript_decode_token.Token(undefined, true), ErrUnexpectedEOF]
				}
				{
					let c = $.arrayIndex((d$ as Decoder)._in!, 0)
					if (c != 58) {
						return [new __goscript_decode_token.Token(undefined, true), await Decoder.prototype.newSyntaxError.call(d, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).currPos() : Decoder.prototype.currPos.call(d)), "unexpected character %s, missing \":\" after field name", $.arrayToSlice<any>([$.runeToString(c)]))]
					}
				}
				tok.kind = 32
				void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consume(1) : Decoder.prototype.consume.call(d, 1))
				break
			}
			case 64:
			case 256:
			{
				if (!await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).isValueNext() : Decoder.prototype.isValueNext.call(d))) {
					return [new __goscript_decode_token.Token(undefined, true), await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).newSyntaxError(tok.pos, "unexpected token %s", $.arrayToSlice<any>([tok.RawString()])) : Decoder.prototype.newSyntaxError.call(d, tok.pos, "unexpected token %s", $.arrayToSlice<any>([tok.RawString()])))]
				}
				;(d$ as Decoder).openStack = $.appendOne((d$ as Decoder).openStack, $.uint(tok.kind, 16))
				break
			}
			case 128:
			{
				if ((($.sliceLen((d$ as Decoder).openStack) == 0) || ($.uint(((d$ as Decoder).lastToken.kind & (32 | 1024)), 16) != 0)) || ($.arrayIndex((d$ as Decoder).openStack!, $.sliceLen((d$ as Decoder).openStack) - 1) != 64)) {
					return [new __goscript_decode_token.Token(undefined, true), await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).newSyntaxError(tok.pos, "unexpected token %s", $.arrayToSlice<any>([tok.RawString()])) : Decoder.prototype.newSyntaxError.call(d, tok.pos, "unexpected token %s", $.arrayToSlice<any>([tok.RawString()])))]
				}
				;(d$ as Decoder).openStack = $.goSlice((d$ as Decoder).openStack, undefined, $.sliceLen((d$ as Decoder).openStack) - 1)
				break
			}
			case 512:
			{
				if ((($.sliceLen((d$ as Decoder).openStack) == 0) || ((d$ as Decoder).lastToken.kind == 1024)) || ($.arrayIndex((d$ as Decoder).openStack!, $.sliceLen((d$ as Decoder).openStack) - 1) != 256)) {
					return [new __goscript_decode_token.Token(undefined, true), await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).newSyntaxError(tok.pos, "unexpected token %s", $.arrayToSlice<any>([tok.RawString()])) : Decoder.prototype.newSyntaxError.call(d, tok.pos, "unexpected token %s", $.arrayToSlice<any>([tok.RawString()])))]
				}
				;(d$ as Decoder).openStack = $.goSlice((d$ as Decoder).openStack, undefined, $.sliceLen((d$ as Decoder).openStack) - 1)
				break
			}
			case 1024:
			{
				if (($.sliceLen((d$ as Decoder).openStack) == 0) || ($.uint(((d$ as Decoder).lastToken.kind & ((30 | 128) | 512)), 16) == 0)) {
					return [new __goscript_decode_token.Token(undefined, true), await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).newSyntaxError(tok.pos, "unexpected token %s", $.arrayToSlice<any>([tok.RawString()])) : Decoder.prototype.newSyntaxError.call(d, tok.pos, "unexpected token %s", $.arrayToSlice<any>([tok.RawString()])))]
				}
				break
			}
		}

		// Update d.lastToken only after validating token to be in the right sequence.
		$.assignStruct((d$ as Decoder).lastToken, tok)

		if ((d$ as Decoder).lastToken.kind == 1024) {
			return await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).Read() : Decoder.prototype.Read.call(d))
		}
		return [(tok).clone(), null]
	}

	public consume(n: number): void {
		let d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d);
		;(d$ as Decoder)._in = $.goSlice((d$ as Decoder)._in, n, undefined)
		while ($.sliceLen((d$ as Decoder)._in) > 0) {
			switch ($.arrayIndex((d$ as Decoder)._in!, 0)) {
				case 32:
				case 10:
				case 13:
				case 9:
				{
					;(d$ as Decoder)._in = $.goSlice((d$ as Decoder)._in, 1, undefined)
					break
				}
				default:
				{
					return
					break
				}
			}
		}
	}

	public consumeBoolToken(b: boolean, size: number): __goscript_decode_token.Token {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		let tok = new __goscript_decode_token.Token({kind: 4, raw: $.goSlice((d$ as Decoder)._in, undefined, size), pos: $.sliceLen((d$ as Decoder).orig) - $.sliceLen((d$ as Decoder)._in), boo: b}, true)
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consume(size) : Decoder.prototype.consume.call(d, size))
		return (tok).clone()
	}

	public consumeStringToken(s: string, size: number): __goscript_decode_token.Token {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		let tok = new __goscript_decode_token.Token({kind: 16, raw: $.goSlice((d$ as Decoder)._in, undefined, size), pos: $.sliceLen((d$ as Decoder).orig) - $.sliceLen((d$ as Decoder)._in), str: s}, true)
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consume(size) : Decoder.prototype.consume.call(d, size))
		return (tok).clone()
	}

	public consumeToken(kind: __goscript_decode_token.Kind, size: number): __goscript_decode_token.Token {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		let tok = new __goscript_decode_token.Token({kind: kind, raw: $.goSlice((d$ as Decoder)._in, undefined, size), pos: $.sliceLen((d$ as Decoder).orig) - $.sliceLen((d$ as Decoder)._in)}, true)
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consume(size) : Decoder.prototype.consume.call(d, size))
		return (tok).clone()
	}

	public currPos(): number {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		return $.sliceLen((d$ as Decoder).orig) - $.sliceLen((d$ as Decoder)._in)
	}

	public async isValueNext(): globalThis.Promise<boolean> {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		const d$: Decoder = d == null ? $.pointerTarget<Decoder>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<Decoder>(d)
		if ($.sliceLen((d$ as Decoder).openStack) == 0) {
			return (d$ as Decoder).lastToken.kind == 0
		}

		let start = $.arrayIndex((d$ as Decoder).openStack!, $.sliceLen((d$ as Decoder).openStack) - 1)
		switch (start) {
			case 64:
			{
				return $.uint(((d$ as Decoder).lastToken.kind & 32), 16) != 0
				break
			}
			case 256:
			{
				return $.uint(((d$ as Decoder).lastToken.kind & (256 | 1024)), 16) != 0
				break
			}
		}
		$.panic(await fmt.Sprintf("unreachable logic in Decoder.isValueNext, lastToken.kind: %v, openStack: %v", $.namedValueInterfaceValue<any>((d$ as Decoder).lastToken.kind, "json.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2()), $.namedValueInterfaceValue<any>(start, "json.Kind", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async newSyntaxError(pos: number, f: string, x: $.Slice<any>): globalThis.Promise<$.GoError> {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		let e = await errors.New(f, x)
		let [line, column] = (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).Position(pos) : Decoder.prototype.Position.call(d, pos))
		return errors.New("syntax error (line %d:%d): %v", $.arrayToSlice<any>([$.basicInterfaceValue(line, "int"), $.basicInterfaceValue(column, "int"), (e as any)]))
	}

	public async parseNext(): globalThis.Promise<[__goscript_decode_token.Token, $.GoError]> {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		// Trim leading spaces.
		void (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consume(0) : Decoder.prototype.consume.call(d, 0))

		let _in: $.Slice<number> = $.pointerValue<Decoder>(d)._in
		if ($.sliceLen(_in) == 0) {
			return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(1, 0) : Decoder.prototype.consumeToken.call(d, 1, 0)), null]
		}

		switch ($.arrayIndex(_in!, 0)) {
			case 110:
			{
				{
					let n = matchWithDelim("null", _in)
					if (n != 0) {
						return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(2, n) : Decoder.prototype.consumeToken.call(d, 2, n)), null]
					}
				}
				break
			}
			case 116:
			{
				{
					let n = matchWithDelim("true", _in)
					if (n != 0) {
						return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeBoolToken(true, n) : Decoder.prototype.consumeBoolToken.call(d, true, n)), null]
					}
				}
				break
			}
			case 102:
			{
				{
					let n = matchWithDelim("false", _in)
					if (n != 0) {
						return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeBoolToken(false, n) : Decoder.prototype.consumeBoolToken.call(d, false, n)), null]
					}
				}
				break
			}
			case 45:
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
				{
					let [n, ok] = __goscript_decode_number.parseNumber(_in)
					if (ok) {
						return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(8, n) : Decoder.prototype.consumeToken.call(d, 8, n)), null]
					}
				}
				break
			}
			case 34:
			{
				let [s, n, err] = await (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).parseString(_in) : Decoder.prototype.parseString.call(d, _in))
				if (err != null) {
					return [new __goscript_decode_token.Token(undefined, true), err]
				}
				return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeStringToken(s, n) : Decoder.prototype.consumeStringToken.call(d, s, n)), null]
				break
			}
			case 123:
			{
				return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(64, 1) : Decoder.prototype.consumeToken.call(d, 64, 1)), null]
				break
			}
			case 125:
			{
				return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(128, 1) : Decoder.prototype.consumeToken.call(d, 128, 1)), null]
				break
			}
			case 91:
			{
				return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(256, 1) : Decoder.prototype.consumeToken.call(d, 256, 1)), null]
				break
			}
			case 93:
			{
				return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(512, 1) : Decoder.prototype.consumeToken.call(d, 512, 1)), null]
				break
			}
			case 44:
			{
				return [(d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).consumeToken(1024, 1) : Decoder.prototype.consumeToken.call(d, 1024, 1)), null]
				break
			}
		}
		return [new __goscript_decode_token.Token(undefined, true), await Decoder.prototype.newSyntaxError.call(d, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).currPos() : Decoder.prototype.currPos.call(d)), "invalid value %s", $.arrayToSlice<any>([$.interfaceValue(await (errRegexp !== null && (errRegexp as any).__isVarRef !== true && (errRegexp as any).__goValue === undefined ? ((errRegexp as any) as regexp.Regexp).Find(_in) : regexp.Regexp.prototype.Find.call(errRegexp, _in)), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))]
	}

	public async parseString(_in: $.Slice<number>): globalThis.Promise<[string, number, $.GoError]> {
		const d: Decoder | $.VarRef<Decoder> | null = this;
		let in0: $.Slice<number> = _in
		if ($.sliceLen(_in) == 0) {
			return ["", 0, ErrUnexpectedEOF]
		}
		if ($.arrayIndex(_in!, 0) != 34) {
			return ["", 0, await Decoder.prototype.newSyntaxError.call(d, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).currPos() : Decoder.prototype.currPos.call(d)), "invalid character %q at start of string", $.arrayToSlice<any>([$.basicInterfaceValue($.arrayIndex(_in!, 0), "byte", "uint8")]))]
		}
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
						return ["", 0, await Decoder.prototype.newSyntaxError.call(d, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).currPos() : Decoder.prototype.currPos.call(d)), "invalid UTF-8 in string", null)]
						break
					}
					case r < 32:
					{
						return ["", 0, await Decoder.prototype.newSyntaxError.call(d, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).currPos() : Decoder.prototype.currPos.call(d)), "invalid character %q in string", $.arrayToSlice<any>([$.basicInterfaceValue(r, "rune", "int32")]))]
						break
					}
					case r == 34:
					{
						_in = $.goSlice(_in, 1, undefined)
						let __goscriptShadow0 = $.sliceLen(in0) - $.sliceLen(_in)
						return [$.bytesToString(out), __goscriptShadow0, null]
						break
					}
					case r == 92:
					{
						if ($.sliceLen(_in) < 2) {
							return ["", 0, ErrUnexpectedEOF]
						}
						{
							let r = $.arrayIndex(_in!, 1)
							switch (r) {
								case 34:
								case 92:
								case 47:
								{
									let __goscriptAssign0_0: $.Slice<number> = $.goSlice(_in, 2, undefined)
									let __goscriptAssign0_1: $.Slice<number> = $.append(out, $.uint(r, 8), $.byteSliceHint)
									_in = __goscriptAssign0_0
									out = __goscriptAssign0_1
									break
								}
								case 98:
								{
									let __goscriptAssign1_0: $.Slice<number> = $.goSlice(_in, 2, undefined)
									let __goscriptAssign1_1: $.Slice<number> = $.append(out, $.uint(8, 8), $.byteSliceHint)
									_in = __goscriptAssign1_0
									out = __goscriptAssign1_1
									break
								}
								case 102:
								{
									let __goscriptAssign2_0: $.Slice<number> = $.goSlice(_in, 2, undefined)
									let __goscriptAssign2_1: $.Slice<number> = $.append(out, $.uint(12, 8), $.byteSliceHint)
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
								case 117:
								{
									if ($.sliceLen(_in) < 6) {
										return ["", 0, ErrUnexpectedEOF]
									}
									let [v, err] = strconv.ParseUint($.bytesToString($.goSlice(_in, 2, 6)), 16, 16)
									if (err != null) {
										return ["", 0, await Decoder.prototype.newSyntaxError.call(d, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).currPos() : Decoder.prototype.currPos.call(d)), "invalid escape code %q in string", $.arrayToSlice<any>([$.interfaceValue($.goSlice(_in, undefined, 6), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))]
									}
									_in = $.goSlice(_in, 6, undefined)

									let __goscriptShadow1 = $.int(v, 32)
									if (utf16.IsSurrogate(__goscriptShadow1)) {
										if ($.sliceLen(_in) < 6) {
											return ["", 0, ErrUnexpectedEOF]
										}
										let [__goscriptShadow2, __goscriptShadow3] = strconv.ParseUint($.bytesToString($.goSlice(_in, 2, 6)), 16, 16)
										__goscriptShadow1 = utf16.DecodeRune(__goscriptShadow1, $.int(__goscriptShadow2, 32))
										if (((($.arrayIndex(_in!, 0) != 92) || ($.arrayIndex(_in!, 1) != 117)) || (__goscriptShadow1 == 65533)) || (__goscriptShadow3 != null)) {
											return ["", 0, await Decoder.prototype.newSyntaxError.call(d, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).currPos() : Decoder.prototype.currPos.call(d)), "invalid escape code %q in string", $.arrayToSlice<any>([$.interfaceValue($.goSlice(_in, undefined, 6), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))]
										}
										_in = $.goSlice(_in, 6, undefined)
									}
									out = $.appendSlice(out, $.stringToBytes($.runeToString(__goscriptShadow1)), $.byteSliceHint)
									break
								}
								default:
								{
									return ["", 0, await Decoder.prototype.newSyntaxError.call(d, (d !== null && (d as any).__isVarRef !== true && (d as any).__goValue === undefined ? ((d as any) as Decoder).currPos() : Decoder.prototype.currPos.call(d)), "invalid escape code %q in string", $.arrayToSlice<any>([$.interfaceValue($.goSlice(_in, undefined, 2), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))]
									break
								}
							}
						}
						break
					}
					default:
					{
						let __goscriptShadow4 = __goscript_decode_string.indexNeedEscapeInBytes($.goSlice(_in, n, undefined))
						let __goscriptAssign6_0: $.Slice<number> = $.goSlice(_in, n + __goscriptShadow4, undefined)
						let __goscriptAssign6_1: $.Slice<number> = $.appendSlice(out, $.goSlice(_in, undefined, n + __goscriptShadow4), $.byteSliceHint)
						_in = __goscriptAssign6_0
						out = __goscriptAssign6_1
						break
					}
				}
			}
		}
		return ["", 0, ErrUnexpectedEOF]
	}

	static __typeInfo = $.registerStructType(
		"json.Decoder",
		() => new Decoder(),
		() => [$.methodSignature("Clone", [], [/* @__PURE__ */ $.pointerType("json.Decoder")], true), $.methodSignature("Peek", [], ["json.Token", "error"], true), $.methodSignature("Position", [["idx", /* @__PURE__ */ $.basicType("int")]], [["line", /* @__PURE__ */ $.basicType("int")], ["column", /* @__PURE__ */ $.basicType("int")]], true), $.methodSignature("Read", [], ["json.Token", "error"], true), $.methodSignature("consume", [["n", /* @__PURE__ */ $.basicType("int")]], [], true), $.methodSignature("consumeBoolToken", [["b", /* @__PURE__ */ $.basicType("bool")], ["size", /* @__PURE__ */ $.basicType("int")]], ["json.Token"], true), $.methodSignature("consumeStringToken", [["s", /* @__PURE__ */ $.basicType("string")], ["size", /* @__PURE__ */ $.basicType("int")]], ["json.Token"], true), $.methodSignature("consumeToken", [["kind", /* @__PURE__ */ $.basicType("uint16", "json.Kind")], ["size", /* @__PURE__ */ $.basicType("int")]], ["json.Token"], true), $.methodSignature("currPos", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("isValueNext", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("newSyntaxError", [["pos", /* @__PURE__ */ $.basicType("int")], ["f", /* @__PURE__ */ $.basicType("string")], ["x", /* @__PURE__ */ $.sliceType({ kind: $.TypeKind.Interface, methods: [] })]], ["error"], true), $.methodSignature("parseNext", [], ["json.Token", "error"], true), $.methodSignature("parseString", [["in", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int"), "error"], true)],
		Decoder,
		() => [/* @__PURE__ */ $.structField("lastCall", /* @__PURE__ */ $.basicType("uint8", "json.call"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" }), /* @__PURE__ */ $.structField("lastToken", "json.Token", [1], 8, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" }), /* @__PURE__ */ $.structField("lastErr", "error", [2], 72, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" }), /* @__PURE__ */ $.structField("openStack", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint16", "json.Kind")), [3], 88, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" }), /* @__PURE__ */ $.structField("orig", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [4], 112, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" }), /* @__PURE__ */ $.structField("in", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [5], 136, false, { key: "_in", pkgPath: "google.golang.org/protobuf/internal/encoding/json" })]
	)
}

export const readCall: call = 0

export const peekCall: call = 1

export const unexpectedFmt: string = "unexpected token %s"

export let ErrUnexpectedEOF: $.GoError = await errors.New("%v", $.arrayToSlice<any>([(io.ErrUnexpectedEOF as any)]))

export function __goscript_set_ErrUnexpectedEOF(__goscriptValue: $.GoError): void {
	ErrUnexpectedEOF = __goscriptValue
}

export function NewDecoder(b: $.Slice<number>): Decoder | $.VarRef<Decoder> | null {
	return new Decoder({orig: b, _in: b})
}

export let errRegexp: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("^([-+._a-zA-Z0-9]{1,32}|.)")

export function __goscript_set_errRegexp(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	errRegexp = __goscriptValue
}

export function matchWithDelim(s: string, b: $.Slice<number>): number {
	if (!bytes.HasPrefix(b, $.stringToBytes(s))) {
		return 0
	}

	let n = $.stringLen(s)
	if ((n < $.sliceLen(b)) && isNotDelim($.arrayIndex(b!, n))) {
		return 0
	}
	return n
}

export function isNotDelim(c: number): boolean {
	return (((((((c == 45) || (c == 43)) || (c == 46)) || (c == 95)) || ((97 <= c) && (c <= 122))) || ((65 <= c) && (c <= 90))) || ((48 <= c) && (c <= 57)))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_decode_token.Kind_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint16", "json.Kind"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}
