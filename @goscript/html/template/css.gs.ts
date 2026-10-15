// Generated file based on css.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_content from "./content.gs.ts"

import * as __goscript_escape from "./escape.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/index.js"
import "@goscript/unicode/utf8/index.js"
import "./content.gs.ts"
import "./escape.gs.ts"

export function endsWithCSSKeyword(b: $.Slice<number>, kw: string): boolean {
	let i = $.sliceLen(b) - $.stringLen(kw)
	if (i < 0) {
		// Too short.
		return false
	}
	if (i != 0) {
		let [r, ] = utf8.DecodeLastRune($.goSlice(b, undefined, i))
		if (isCSSNmchar(r)) {
			// Too long.
			return false
		}
	}
	// Many CSS keywords, such as "!important" can have characters encoded,
	// but the URI production does not allow that according to
	// https://www.w3.org/TR/css3-syntax/#TOK-URI
	// This does not attempt to recognize encoded keywords. For example,
	// given "\75\72\6c" and "url" this return false.
	return $.stringEqual($.bytesToString(bytes.ToLower($.goSlice(b, i, undefined))), kw)
}

export function isCSSNmchar(r: number): boolean {
	// Based on the CSS3 nmchar production but ignores multi-rune escape
	// sequences.
	// https://www.w3.org/TR/css3-syntax/#SUBTOK-nmchar
	return ((((((((97 <= r) && (r <= 122)) || ((65 <= r) && (r <= 90))) || ((48 <= r) && (r <= 57))) || (r == 45)) || (r == 95)) || ((0x80 <= r) && (r <= 0xd7ff))) || ((0xe000 <= r) && (r <= 0xfffd))) || ((0x10000 <= r) && (r <= 0x10ffff))
}

export async function decodeCSS(s: $.Slice<number>): globalThis.Promise<$.Slice<number>> {
	let i = bytes.IndexByte(s, 92)
	if (i == -1) {
		return s
	}
	// The UTF-8 sequence for a codepoint is never longer than 1 + the
	// number hex digits need to represent that codepoint, so len(s) is an
	// upper bound on the output length.
	let b: $.Slice<number> = $.makeSlice<number>(0, $.sliceLen(s), "byte")
	while ($.sliceLen(s) != 0) {
		let __goscriptShadow0: number = bytes.IndexByte(s, 92)
		if (__goscriptShadow0 == -1) {
			__goscriptShadow0 = $.sliceLen(s)
		}
		let __goscriptAssign0_0: $.Slice<number> = $.appendSlice(b, $.goSlice(s, undefined, __goscriptShadow0), $.byteSliceHint)
		let __goscriptAssign0_1: $.Slice<number> = $.goSlice(s, __goscriptShadow0, undefined)
		b = __goscriptAssign0_0
		s = __goscriptAssign0_1
		if ($.sliceLen(s) < 2) {
			break
		}
		// https://www.w3.org/TR/css3-syntax/#SUBTOK-escape
		// escape ::= unicode | '\' [#x20-#x7E#x80-#xD7FF#xE000-#xFFFD#x10000-#x10FFFF]
		if (isHex($.arrayIndex(s!, 1))) {
			// https://www.w3.org/TR/css3-syntax/#SUBTOK-unicode
			//   unicode ::= '\' [0-9a-fA-F]{1,6} wc?
			let j = 2
			for (let __goscriptSliceWindow0 = $.sliceRange(s); ((j < __goscriptSliceWindow0.length) && (j < 7)) && isHex(((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, j)] as number)); ) {
				j++
			}
			let r = await hexDecode($.goSlice(s, 1, j))
			if (r > 1114111) {
				let __goscriptAssign1_0: number = $.int(globalThis.Math.trunc(r / 16), 32)
				let __goscriptAssign1_1: number = j - 1
				r = __goscriptAssign1_0
				j = __goscriptAssign1_1
			}
			let n: number = utf8.EncodeRune($.goSlice(b, $.sliceLen(b), $.cap(b)), r)
			// The optional space at the end allows a hex
			// sequence to be followed by a literal hex.
			// string(decodeCSS([]byte(`\A B`))) == "\nB"
			let __goscriptAssign2_0: $.Slice<number> = $.goSlice(b, undefined, $.sliceLen(b) + n)
			let __goscriptAssign2_1: $.Slice<number> = skipCSSSpace($.goSlice(s, j, undefined))
			b = __goscriptAssign2_0
			s = __goscriptAssign2_1
		} else {
			// `\\` decodes to `\` and `\"` to `"`.
			let [, n] = utf8.DecodeRune($.goSlice(s, 1, undefined))
			let __goscriptAssign3_0: $.Slice<number> = $.appendSlice(b, $.goSlice(s, 1, 1 + n), $.byteSliceHint)
			let __goscriptAssign3_1: $.Slice<number> = $.goSlice(s, 1 + n, undefined)
			b = __goscriptAssign3_0
			s = __goscriptAssign3_1
		}
	}
	return b
}

export function isHex(c: number): boolean {
	return (((48 <= c) && (c <= 57)) || ((97 <= c) && (c <= 102))) || ((65 <= c) && (c <= 70))
}

export async function hexDecode(s: $.Slice<number>): globalThis.Promise<number> {
	let n = 0
	for (let __goscriptRangeTarget0 = s, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let c = $.uint((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as number), 8)
		n = $.int(n << (4), 32)
		switch ((true as boolean)) {
			case (48 <= c) && (c <= 57):
			{
				n = n | ($.int($.uint(((c - 48) & 0xff), 8), 32))
				break
			}
			case (97 <= c) && (c <= 102):
			{
				n = n | ($.int((($.int($.uint(((c - 97) & 0xff), 8), 32) + 10) | 0), 32))
				break
			}
			case (65 <= c) && (c <= 70):
			{
				n = n | ($.int((($.int($.uint(((c - 65) & 0xff), 8), 32) + 10) | 0), 32))
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("Bad hex digit in %q", $.interfaceValue(s, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))))
				break
			}
		}
	}
	return n
}

export function skipCSSSpace(c: $.Slice<number>): $.Slice<number> {
	if ($.sliceLen(c) == 0) {
		return c
	}
	// wc ::= #x9 | #xA | #xC | #xD | #x20
	switch ($.arrayIndex(c!, 0)) {
		case 9:
		case 10:
		case 12:
		case 32:
		{
			return $.goSlice(c, 1, undefined)
			break
		}
		case 13:
		{
			if (($.sliceLen(c) >= 2) && ($.arrayIndex(c!, 1) == 10)) {
				return $.goSlice(c, 2, undefined)
			}
			return $.goSlice(c, 1, undefined)
			break
		}
	}
	return c
}

export function isCSSSpace(b: number): boolean {
	switch (b) {
		case 9:
		case 10:
		case 12:
		case 13:
		case 32:
		{
			return true
			break
		}
	}
	return false
}

export async function cssEscaper(args: $.Slice<any>): globalThis.Promise<string> {
	let [s, ] = await __goscript_content.stringify(args)
	let b: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
	let r = 0
	let w = 0
	let written = 0
	for (let i = 0; i < $.stringLen(s); i = i + (w)) {
		// See comment in htmlEscaper.
		let __goscriptTuple0: any = utf8.DecodeRuneInString($.sliceStringOrBytes(s, i, undefined))
		r = __goscriptTuple0[0]
		w = __goscriptTuple0[1]
		let repl: string = ""
		switch ((true as boolean)) {
			case ($.int(r) < $.sliceLen(cssReplacementTable)) && (!$.stringEqual($.arrayIndex(cssReplacementTable!, r), "")):
			{
				repl = $.arrayIndex(cssReplacementTable!, r)
				break
			}
			default:
			{
				continue
				break
			}
		}
		if (written == 0) {
			b.value.Grow($.stringLen(s))
		}
		b.value.WriteString($.sliceStringOrBytes(s, written, i))
		b.value.WriteString(repl)
		written = i + w
		if ((!$.stringEqual(repl, "\\\\")) && (((written == $.stringLen(s)) || isHex($.indexString(s, written))) || isCSSSpace($.indexString(s, written)))) {
			b.value.WriteByte(32)
		}
	}
	if (written == 0) {
		return s
	}
	b.value.WriteString($.sliceStringOrBytes(s, written, undefined))
	return b.value.String()
}

export let cssReplacementTable: $.Slice<string> = $.arrayToSlice<string>(["\\0", "", "", "", "", "", "", "", "", "\\9", "\\a", "", "\\c", "\\d", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\22", "", "", "", "\\26", "\\27", "\\28", "\\29", "", "\\2b", "", "", "", "\\2f", "", "", "", "", "", "", "", "", "", "", "\\3a", "\\3b", "\\3c", "", "\\3e", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\7b", "", "\\7d"])

export function __goscript_set_cssReplacementTable(__goscriptValue: $.Slice<string>): void {
	cssReplacementTable = __goscriptValue
}

export let expressionBytes: $.Slice<number> = new Uint8Array([101, 120, 112, 114, 101, 115, 115, 105, 111, 110])

export function __goscript_set_expressionBytes(__goscriptValue: $.Slice<number>): void {
	expressionBytes = __goscriptValue
}

export let mozBindingBytes: $.Slice<number> = new Uint8Array([109, 111, 122, 98, 105, 110, 100, 105, 110, 103])

export function __goscript_set_mozBindingBytes(__goscriptValue: $.Slice<number>): void {
	mozBindingBytes = __goscriptValue
}

export async function cssValueFilter(args: $.Slice<any>): globalThis.Promise<string> {
	let [s, t] = await __goscript_content.stringify(args)
	if (t == 1) {
		return s
	}
	let b: $.Slice<number> = await decodeCSS($.stringToBytes(s))
	let id: $.Slice<number> = $.makeSlice<number>(0, 64, "byte")

	// CSS3 error handling is specified as honoring string boundaries per
	// https://www.w3.org/TR/css3-syntax/#error-handling :
	//     Malformed declarations. User agents must handle unexpected
	//     tokens encountered while parsing a declaration by reading until
	//     the end of the declaration, while observing the rules for
	//     matching pairs of (), [], {}, "", and '', and correctly handling
	//     escapes. For example, a malformed declaration may be missing a
	//     property, colon (:) or value.
	// So we need to make sure that values do not have mismatched bracket
	// or quote characters to prevent the browser from restarting parsing
	// inside a string that might embed JavaScript source.
	for (let __goscriptRangeTarget1 = b, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), i = 0; i < __goscriptRangeWindow1.length; i++) {
		let c = $.uint((__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as number), 8)
		switch (c) {
			case 0:
			case 34:
			case 39:
			case 40:
			case 41:
			case 47:
			case 59:
			case 64:
			case 91:
			case 92:
			case 93:
			case 96:
			case 123:
			case 125:
			case 60:
			case 62:
			{
				return "ZgotmplZ"
				break
			}
			case 45:
			{
				if ((i != 0) && (((__goscriptRangeWindow1.backing as any[])[$.windowSlot(__goscriptRangeWindow1, i - 1)] as number) == 45)) {
					return "ZgotmplZ"
				}
				break
			}
			default:
			{
				if ((c < 128) && isCSSNmchar($.int(c, 32))) {
					id = $.append(id, $.uint(c, 8), $.byteSliceHint)
				}
				break
			}
		}
	}
	id = bytes.ToLower(id)
	if (bytes.Contains(id, expressionBytes) || bytes.Contains(id, mozBindingBytes)) {
		return "ZgotmplZ"
	}
	return $.bytesToString(b)
}
