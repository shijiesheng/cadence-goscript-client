// Generated file based on html.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import type * as io from "@goscript/io/index.js"

import * as parse from "@goscript/text/template/parse/index.js"

import * as __goscript_attr from "./attr.gs.ts"

import * as __goscript_attr_string from "./attr_string.gs.ts"

import * as __goscript_content from "./content.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_delim_string from "./delim_string.gs.ts"

import * as __goscript_element_string from "./element_string.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_escape from "./escape.gs.ts"

import * as __goscript_jsctx_string from "./jsctx_string.gs.ts"

import * as __goscript_state_string from "./state_string.gs.ts"

import * as __goscript_transition from "./transition.gs.ts"

import * as __goscript_urlpart_string from "./urlpart_string.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/text/template/parse/index.js"
import "./attr.gs.ts"
import "./attr_string.gs.ts"
import "./content.gs.ts"
import "./context.gs.ts"
import "./delim_string.gs.ts"
import "./element_string.gs.ts"
import "./error.gs.ts"
import "./escape.gs.ts"
import "./jsctx_string.gs.ts"
import "./state_string.gs.ts"
import "./transition.gs.ts"
import "./urlpart_string.gs.ts"

export async function htmlNospaceEscaper(args: $.Slice<any>): globalThis.Promise<string> {
	let [s, t] = await __goscript_content.stringify(args)
	if ($.stringEqual(s, "")) {
		return "ZgotmplZ"
	}
	if (t == 2) {
		return htmlReplacer(await stripTags(s), htmlNospaceNormReplacementTable, false)
	}
	return htmlReplacer(s, htmlNospaceReplacementTable, false)
}

export async function attrEscaper(args: $.Slice<any>): globalThis.Promise<string> {
	let [s, t] = await __goscript_content.stringify(args)
	if (t == 2) {
		return htmlReplacer(await stripTags(s), htmlNormReplacementTable, true)
	}
	return htmlReplacer(s, htmlReplacementTable, true)
}

export async function rcdataEscaper(args: $.Slice<any>): globalThis.Promise<string> {
	let [s, t] = await __goscript_content.stringify(args)
	if (t == 2) {
		return htmlReplacer(s, htmlNormReplacementTable, true)
	}
	return htmlReplacer(s, htmlReplacementTable, true)
}

export async function htmlEscaper(args: $.Slice<any>): globalThis.Promise<string> {
	let [s, t] = await __goscript_content.stringify(args)
	if (t == 2) {
		return s
	}
	return htmlReplacer(s, htmlReplacementTable, true)
}

export let htmlReplacementTable: $.Slice<string> = $.arrayToSlice<string>(["\xef\xbf\xbd", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "&#34;", "", "", "", "&amp;", "&#39;", "", "", "", "&#43;", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "&lt;", "", "&gt;"])

export function __goscript_set_htmlReplacementTable(__goscriptValue: $.Slice<string>): void {
	htmlReplacementTable = __goscriptValue
}

export let htmlNormReplacementTable: $.Slice<string> = $.arrayToSlice<string>(["\xef\xbf\xbd", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "&#34;", "", "", "", "", "&#39;", "", "", "", "&#43;", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "&lt;", "", "&gt;"])

export function __goscript_set_htmlNormReplacementTable(__goscriptValue: $.Slice<string>): void {
	htmlNormReplacementTable = __goscriptValue
}

export let htmlNospaceReplacementTable: $.Slice<string> = $.arrayToSlice<string>(["&#xfffd;", "", "", "", "", "", "", "", "", "&#9;", "&#10;", "&#11;", "&#12;", "&#13;", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "&#32;", "", "&#34;", "", "", "", "&amp;", "&#39;", "", "", "", "&#43;", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "&lt;", "&#61;", "&gt;", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "&#96;"])

export function __goscript_set_htmlNospaceReplacementTable(__goscriptValue: $.Slice<string>): void {
	htmlNospaceReplacementTable = __goscriptValue
}

export let htmlNospaceNormReplacementTable: $.Slice<string> = $.arrayToSlice<string>(["&#xfffd;", "", "", "", "", "", "", "", "", "&#9;", "&#10;", "&#11;", "&#12;", "&#13;", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "&#32;", "", "&#34;", "", "", "", "", "&#39;", "", "", "", "&#43;", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "&lt;", "&#61;", "&gt;", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "&#96;"])

export function __goscript_set_htmlNospaceNormReplacementTable(__goscriptValue: $.Slice<string>): void {
	htmlNospaceNormReplacementTable = __goscriptValue
}

export async function htmlReplacer(s: string, replacementTable: $.Slice<string>, badRunes: boolean): globalThis.Promise<string> {
	let written = 0
	let b: strings.Builder | $.VarRef<strings.Builder> | null = new strings.Builder()
	let r = 0
	let w = 0
	for (let __goscriptSliceWindow0 = $.sliceRange(replacementTable), i = 0; i < $.stringLen(s); i = i + (w)) {
		// Cannot use 'for range s' because we need to preserve the width
		// of the runes in the input. If we see a decoding error, the input
		// width will not be utf8.Runelen(r) and we will overrun the buffer.
		let __goscriptTuple0: any = utf8.DecodeRuneInString($.sliceStringOrBytes(s, i, undefined))
		r = __goscriptTuple0[0]
		w = __goscriptTuple0[1]
		if ($.int(r) < __goscriptSliceWindow0.length) {
			{
				let repl = ((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, r)] as string)
				if ($.stringLen(repl) != 0) {
					if (written == 0) {
						strings.Builder.prototype.Grow.call($.pointerValue<strings.Builder>(b), $.stringLen(s))
					}
					strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), $.sliceStringOrBytes(s, written, i))
					strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), repl)
					written = i + w
				}
			}
		} else {
			if (badRunes) {
			} else {
				if (((0xfdd0 <= r) && (r <= 0xfdef)) || ((0xfff0 <= r) && (r <= 0xffff))) {
					if (written == 0) {
						strings.Builder.prototype.Grow.call($.pointerValue<strings.Builder>(b), $.stringLen(s))
					}
					await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, "%s&#x%x;", $.sliceStringOrBytes(s, written, i), $.basicInterfaceValue(r, "rune", "int32"))
					written = i + w
				}
			}
		}
	}
	if (written == 0) {
		return s
	}
	strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), $.sliceStringOrBytes(s, written, undefined))
	return strings.Builder.prototype.String.call($.pointerValue<strings.Builder>(b))
}

export async function stripTags(html: string): globalThis.Promise<string> {
	let b: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
	let s: $.Slice<number> = $.stringToBytes(html)
	let c = $.markAsStructValue(new __goscript_context.context())
	let i = 0
	let allText = true
	// Using the transition funcs helps us avoid mangling
	// `<div title="1>2">` or `I <3 Ponies!`.
	for (let __goscriptSliceWindow1 = $.sliceRange(s); i != __goscriptSliceWindow1.length; ) {
		if (c.delim == 0) {
			let st = c.state
			// Use RCDATA instead of parsing into JS or CSS styles.
			if ((c.element != 0) && !__goscript_context.isInTag(st)) {
				st = 6
			}
			let [d, nread] = await $.arrayIndex(__goscript_transition.__goscript_get_transitionFunc(), st)!($.markAsStructValue($.cloneStructValue(c)), $.goSlice(s, i, undefined))
			let i1: number = i + nread
			if ((c.state == 0) || (c.state == 6)) {
				// Emit text up to the start of the tag or comment.
				let j = i1
				if (d.state != c.state) {
					for (let j1: number = j - 1; j1 >= i; j1--) {
						if (((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j1)] as number) == 60) {
							j = j1
							break
						}
					}
				}
				b.value.Write($.goSlice(s, i, j))
			} else {
				allText = false
			}
			let __goscriptAssign0_0: __goscript_context.context = $.markAsStructValue($.cloneStructValue(d))
			let __goscriptAssign0_1: number = i1
			c = $.assignStruct(c, __goscriptAssign0_0)
			i = __goscriptAssign0_1
			continue
		}
		let i1: number = i + bytes.IndexAny($.goSlice(s, i, undefined), $.arrayIndex(__goscript_escape.__goscript_get_delimEnds(), c.delim))
		if (i1 < i) {
			break
		}
		if (c.delim != 3) {
			// Consume any quote.
			i1++
		}
		let __goscriptAssign1_0: __goscript_context.context = $.markAsStructValue(new __goscript_context.context({state: 1, element: c.element}))
		let __goscriptAssign1_1: number = i1
		c = $.assignStruct(c, __goscriptAssign1_0)
		i = __goscriptAssign1_1
	}
	if (allText) {
		return html
	} else {
		if ((c.state == 0) || (c.state == 6)) {
			b.value.Write($.goSlice(s, i, undefined))
		}
	}
	return b.value.String()
}

export async function htmlNameFilter(args: $.Slice<any>): globalThis.Promise<string> {
	let [s, t] = await __goscript_content.stringify(args)
	if (t == 3) {
		return s
	}
	if ($.stringLen(s) == 0) {
		// Avoid violation of structure preservation.
		// <input checked {{.K}}={{.V}}>.
		// Without this, if .K is empty then .V is the value of
		// checked, but otherwise .V is the value of the attribute
		// named .K.
		return "ZgotmplZ"
	}
	s = strings.ToLower(s)
	{
		let __goscriptShadow0 = __goscript_attr.attrType(s)
		if (__goscriptShadow0 != 0) {
			// TODO: Split attr and element name part filters so we can recognize known attributes.
			return "ZgotmplZ"
		}
	}
	for (let __goscriptRunes0 = $.stringRunes(s); __goscriptRunes0.next(); ) {
		const r = __goscriptRunes0.rune
		switch ((true as boolean)) {
			case (48 <= r) && (r <= 57):
			{
				break
			}
			case (97 <= r) && (r <= 122):
			{
				break
			}
			default:
			{
				return "ZgotmplZ"
				break
			}
		}
	}
	return s
}

export function commentEscaper(args: $.Slice<any>): string {
	return ""
}
