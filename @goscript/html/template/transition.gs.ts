// Generated file based on transition.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as strings from "@goscript/strings/index.js"

import * as parse from "@goscript/text/template/parse/index.js"

import * as __goscript_attr from "./attr.gs.ts"

import * as __goscript_attr_string from "./attr_string.gs.ts"

import * as __goscript_content from "./content.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_css from "./css.gs.ts"

import * as __goscript_delim_string from "./delim_string.gs.ts"

import * as __goscript_element_string from "./element_string.gs.ts"

import * as __goscript_error from "./error.gs.ts"

import * as __goscript_js from "./js.gs.ts"

import * as __goscript_jsctx_string from "./jsctx_string.gs.ts"

import * as __goscript_state_string from "./state_string.gs.ts"

import * as __goscript_urlpart_string from "./urlpart_string.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/strings/index.js"
import "@goscript/text/template/parse/index.js"
import "./attr.gs.ts"
import "./attr_string.gs.ts"
import "./content.gs.ts"
import "./context.gs.ts"
import "./css.gs.ts"
import "./delim_string.gs.ts"
import "./element_string.gs.ts"
import "./error.gs.ts"
import "./js.gs.ts"
import "./jsctx_string.gs.ts"
import "./state_string.gs.ts"
import "./urlpart_string.gs.ts"

export var transitionFunc: (((_p0: __goscript_context.context, _p1: $.Slice<number>) => [__goscript_context.context, number] | globalThis.Promise<[__goscript_context.context, number]>) | null)[]

export function __goscript_init_transitionFunc(): void {
	if (((transitionFunc) as any) === undefined) {
		transitionFunc = $.arrayValue([tText, tTag, tAttrName, tAfterName, tBeforeValue, tHTMLCmt, tSpecialTagEnd, tAttr, tURL, tURL, tJS, tJSDelimited, tJSDelimited, tJSTmpl, tJSDelimited, tBlockCmt, tLineCmt, tLineCmt, tLineCmt, tCSS, tCSSStr, tCSSStr, tCSSStr, tCSSStr, tCSSStr, tBlockCmt, tLineCmt, tError, tMetaContent, tMetaContentURL])
	}
}

export function __goscript_get_transitionFunc(): (((_p0: __goscript_context.context, _p1: $.Slice<number>) => [__goscript_context.context, number] | globalThis.Promise<[__goscript_context.context, number]>) | null)[] {
	if (((transitionFunc) as any) === undefined) {
		__goscript_init_transitionFunc()
	}
	return transitionFunc
}

export function __goscript_set_transitionFunc(__goscriptValue: (((_p0: __goscript_context.context, _p1: $.Slice<number>) => [__goscript_context.context, number] | globalThis.Promise<[__goscript_context.context, number]>) | null)[]): void {
	transitionFunc = __goscriptValue
}

export let commentStart: $.Slice<number> = new Uint8Array([60, 33, 45, 45])

export function __goscript_set_commentStart(__goscriptValue: $.Slice<number>): void {
	commentStart = __goscriptValue
}

export let commentEnd: $.Slice<number> = new Uint8Array([45, 45, 62])

export function __goscript_set_commentEnd(__goscriptValue: $.Slice<number>): void {
	commentEnd = __goscriptValue
}

export function tText(c: __goscript_context.context, s: $.Slice<number>): [__goscript_context.context, number] {
	let k = 0
	for (let __goscriptSliceWindow0 = $.sliceRange(s); true; ) {
		let i = k + bytes.IndexByte($.goSlice(s, k, undefined), 60)
		if ((i < k) || ((i + 1) == __goscriptSliceWindow0.length)) {
			return [$.markAsStructValue($.cloneStructValue(c)), __goscriptSliceWindow0.length]
		} else {
			if (((i + 4) <= __goscriptSliceWindow0.length) && bytes.Equal(commentStart, $.goSlice(s, i, i + 4))) {
				return [$.markAsStructValue(new __goscript_context.context({state: 5})), i + 4]
			}
		}
		i++
		let end = false
		if (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number) == 47) {
			if ((i + 1) == __goscriptSliceWindow0.length) {
				return [$.markAsStructValue($.cloneStructValue(c)), __goscriptSliceWindow0.length]
			}
			let __goscriptAssign0_0: boolean = true
			let __goscriptAssign0_1: number = i + 1
			end = __goscriptAssign0_0
			i = __goscriptAssign0_1
		}
		let [j, e] = eatTagName(s, i)
		if (j != i) {
			if (end) {
				e = 0
			}
			// We've found an HTML tag.
			return [$.markAsStructValue(new __goscript_context.context({state: 1, element: e})), j]
		}
		k = j
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export var elementContentType: Uint8Array

export function __goscript_init_elementContentType(): void {
	if (((elementContentType) as any) === undefined) {
		elementContentType = $.arrayValue(new Uint8Array([0, 10, 19, 6, 6, 0]))
	}
}

export function __goscript_get_elementContentType(): Uint8Array {
	if (((elementContentType) as any) === undefined) {
		__goscript_init_elementContentType()
	}
	return elementContentType
}

export function __goscript_set_elementContentType(__goscriptValue: Uint8Array): void {
	elementContentType = __goscriptValue
}

export async function tTag(c: __goscript_context.context, s: $.Slice<number>): globalThis.Promise<[__goscript_context.context, number]> {
	// Find the attribute name.
	let i = eatWhiteSpace(s, 0)
	if (i == $.sliceLen(s)) {
		return [$.markAsStructValue($.cloneStructValue(c)), $.sliceLen(s)]
	}
	if ($.arrayIndex(s!, i) == 62) {
		// Treat <meta> specially, because it doesn't have an end tag, and we
		// want to transition into the correct state/element for it.
		if (c.element == 5) {
			return [$.markAsStructValue(new __goscript_context.context({state: 0, element: 0})), i + 1]
		}
		return [$.markAsStructValue(new __goscript_context.context({state: $.arrayIndex(__goscript_get_elementContentType(), c.element), element: c.element})), i + 1]
	}
	let __goscriptTuple0: any = await eatAttrName(s, i)
	let j = __goscriptTuple0[0]
	let err: __goscript_error.Error | $.VarRef<__goscript_error.Error> | null = __goscriptTuple0[1]
	if (err != null) {
		return [$.markAsStructValue(new __goscript_context.context({state: 27, err: err})), $.sliceLen(s)]
	}
	let __goscriptShadow0 = 1
	let __goscriptShadow1 = 0
	if (i == j) {
		return [(await (async () => { const __goscriptLiteralField0 = await __goscript_error.errorf(2, null, 0, "expected space, attr name, or end of tag, but got %q", $.arrayToSlice<any>([$.interfaceValue($.goSlice(s, i, undefined), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))])); return $.markAsStructValue(new __goscript_context.context({state: 27, err: __goscriptLiteralField0})) })()), $.sliceLen(s)]
	}

	let attrName = strings.ToLower($.bytesToString($.goSlice(s, i, j)))
	if ((c.element == 1) && ($.stringEqual(attrName, "type"))) {
		__goscriptShadow1 = 2
	} else {
		if ((c.element == 5) && ($.stringEqual(attrName, "content"))) {
			__goscriptShadow1 = 6
		} else {
			switch (__goscript_attr.attrType(attrName)) {
				case 6:
				{
					__goscriptShadow1 = 4
					break
				}
				case 1:
				{
					__goscriptShadow1 = 3
					break
				}
				case 4:
				{
					__goscriptShadow1 = 1
					break
				}
				case 7:
				{
					__goscriptShadow1 = 5
					break
				}
			}
		}
	}

	if (j == $.sliceLen(s)) {
		__goscriptShadow0 = 2
	} else {
		__goscriptShadow0 = 3
	}
	return [$.markAsStructValue(new __goscript_context.context({state: __goscriptShadow0, element: c.element, attr: __goscriptShadow1})), j]
}

export async function tAttrName(c: __goscript_context.context, s: $.Slice<number>): globalThis.Promise<[__goscript_context.context, number]> {
	let __goscriptTuple1: any = await eatAttrName(s, 0)
	let i = __goscriptTuple1[0]
	let err: __goscript_error.Error | $.VarRef<__goscript_error.Error> | null = __goscriptTuple1[1]
	if (err != null) {
		return [$.markAsStructValue(new __goscript_context.context({state: 27, err: err})), $.sliceLen(s)]
	} else {
		if (i != $.sliceLen(s)) {
			c.state = 3
		}
	}
	return [$.markAsStructValue($.cloneStructValue(c)), i]
}

export function tAfterName(c: __goscript_context.context, s: $.Slice<number>): [__goscript_context.context, number] {
	// Look for the start of the value.
	let i = eatWhiteSpace(s, 0)
	if (i == $.sliceLen(s)) {
		return [$.markAsStructValue($.cloneStructValue(c)), $.sliceLen(s)]
	} else {
		if ($.arrayIndex(s!, i) != 61) {
			// Occurs due to tag ending '>', and valueless attribute.
			c.state = 1
			return [$.markAsStructValue($.cloneStructValue(c)), i]
		}
	}
	c.state = 4
	// Consume the "=".
	return [$.markAsStructValue($.cloneStructValue(c)), i + 1]
}

export var attrStartStates: Uint8Array

export function __goscript_init_attrStartStates(): void {
	if (((attrStartStates) as any) === undefined) {
		attrStartStates = $.arrayValue(new Uint8Array([7, 10, 7, 19, 8, 9, 28]))
	}
}

export function __goscript_get_attrStartStates(): Uint8Array {
	if (((attrStartStates) as any) === undefined) {
		__goscript_init_attrStartStates()
	}
	return attrStartStates
}

export function __goscript_set_attrStartStates(__goscriptValue: Uint8Array): void {
	attrStartStates = __goscriptValue
}

export function tBeforeValue(c: __goscript_context.context, s: $.Slice<number>): [__goscript_context.context, number] {
	let i = eatWhiteSpace(s, 0)
	if (i == $.sliceLen(s)) {
		return [$.markAsStructValue($.cloneStructValue(c)), $.sliceLen(s)]
	}
	// Find the attribute delimiter.
	let __goscriptShadow2 = 3
	switch ($.arrayIndex(s!, i)) {
		case 39:
		{
			let __goscriptAssign1_0: __goscript_context.delim = 2
			let __goscriptAssign1_1: number = i + 1
			__goscriptShadow2 = __goscriptAssign1_0
			i = __goscriptAssign1_1
			break
		}
		case 34:
		{
			let __goscriptAssign2_0: __goscript_context.delim = 1
			let __goscriptAssign2_1: number = i + 1
			__goscriptShadow2 = __goscriptAssign2_0
			i = __goscriptAssign2_1
			break
		}
	}
	let __goscriptAssign3_0: __goscript_context.state = $.arrayIndex(__goscript_get_attrStartStates(), c.attr)
	let __goscriptAssign3_1: __goscript_context.delim = __goscriptShadow2
	c.state = __goscriptAssign3_0
	c.delim = __goscriptAssign3_1
	return [$.markAsStructValue($.cloneStructValue(c)), i]
}

export function tHTMLCmt(c: __goscript_context.context, s: $.Slice<number>): [__goscript_context.context, number] {
	{
		let i = bytes.Index(s, commentEnd)
		if (i != -1) {
			return [$.markAsStructValue(new __goscript_context.context()), i + 3]
		}
	}
	return [$.markAsStructValue($.cloneStructValue(c)), $.sliceLen(s)]
}

export var specialTagEndMarkers: $.Slice<number>[]

export function __goscript_init_specialTagEndMarkers(): void {
	if (((specialTagEndMarkers) as any) === undefined) {
		specialTagEndMarkers = $.arrayValue([null, new Uint8Array([115, 99, 114, 105, 112, 116]), new Uint8Array([115, 116, 121, 108, 101]), new Uint8Array([116, 101, 120, 116, 97, 114, 101, 97]), new Uint8Array([116, 105, 116, 108, 101]), new Uint8Array([])])
	}
}

export function __goscript_get_specialTagEndMarkers(): $.Slice<number>[] {
	if (((specialTagEndMarkers) as any) === undefined) {
		__goscript_init_specialTagEndMarkers()
	}
	return specialTagEndMarkers
}

export function __goscript_set_specialTagEndMarkers(__goscriptValue: $.Slice<number>[]): void {
	specialTagEndMarkers = __goscriptValue
}

export let specialTagEndPrefix: $.Slice<number> = new Uint8Array([60, 47])

export function __goscript_set_specialTagEndPrefix(__goscriptValue: $.Slice<number>): void {
	specialTagEndPrefix = __goscriptValue
}

export let tagEndSeparators: $.Slice<number> = new Uint8Array([62, 32, 9, 10, 12, 47])

export function __goscript_set_tagEndSeparators(__goscriptValue: $.Slice<number>): void {
	tagEndSeparators = __goscriptValue
}

export function tSpecialTagEnd(c: __goscript_context.context, s: $.Slice<number>): [__goscript_context.context, number] {
	if (c.element != 0) {
		// script end tags ("</script") within script literals are ignored, so that
		// we can properly escape them.
		if ((c.element == 1) && (__goscript_context.isInScriptLiteral(c.state) || __goscript_context.isComment(c.state))) {
			return [$.markAsStructValue($.cloneStructValue(c)), $.sliceLen(s)]
		}
		{
			let i = indexTagEnd(s, $.arrayIndex(__goscript_get_specialTagEndMarkers(), c.element))
			if (i != -1) {
				return [$.markAsStructValue(new __goscript_context.context()), i]
			}
		}
	}
	return [$.markAsStructValue($.cloneStructValue(c)), $.sliceLen(s)]
}

export function indexTagEnd(s: $.Slice<number>, tag: $.Slice<number>): number {
	let res = 0
	let plen = $.sliceLen(specialTagEndPrefix)
	while ($.sliceLen(s) > 0) {
		// Try to find the tag end prefix first
		let i: number = bytes.Index(s, specialTagEndPrefix)
		if (i == -1) {
			return i
		}
		s = $.goSlice(s, i + plen, undefined)
		// Try to match the actual tag if there is still space for it
		if (($.sliceLen(tag) <= $.sliceLen(s)) && bytes.EqualFold(tag, $.goSlice(s, undefined, $.sliceLen(tag)))) {
			s = $.goSlice(s, $.sliceLen(tag), undefined)
			// Check the tag is followed by a proper separator
			if (($.sliceLen(s) > 0) && (bytes.IndexByte(tagEndSeparators, $.arrayIndex(s!, 0)) != -1)) {
				return res + i
			}
			res = res + ($.sliceLen(tag))
		}
		res = res + (i + plen)
	}
	return -1
}

export function tAttr(c: __goscript_context.context, s: $.Slice<number>): [__goscript_context.context, number] {
	return [$.markAsStructValue($.cloneStructValue(c)), $.sliceLen(s)]
}

export function tURL(c: __goscript_context.context, s: $.Slice<number>): [__goscript_context.context, number] {
	if (bytes.ContainsAny(s, "#?")) {
		c.urlPart = 2
	} else {
		if (($.sliceLen(s) != eatWhiteSpace(s, 0)) && (c.urlPart == 0)) {
			// HTML5 uses "Valid URL potentially surrounded by spaces" for
			// attrs: https://www.w3.org/TR/html5/index.html#attributes-1
			c.urlPart = 1
		}
	}
	return [$.markAsStructValue($.cloneStructValue(c)), $.sliceLen(s)]
}

export async function tJS(c: __goscript_context.context, s: $.Slice<number>): globalThis.Promise<[__goscript_context.context, number]> {
	let i = bytes.IndexAny(s, "\"`'/{}<-#")
	if (i == -1) {
		// Entire input is non string, comment, regexp tokens.
		c.jsCtx = __goscript_js.nextJSCtx(s, c.jsCtx)
		return [$.markAsStructValue($.cloneStructValue(c)), $.sliceLen(s)]
	}
	c.jsCtx = __goscript_js.nextJSCtx($.goSlice(s, undefined, i), c.jsCtx)
	switch ($.arrayIndex(s!, i)) {
		case 34:
		{
			let __goscriptAssign4_0: __goscript_context.state = 11
			let __goscriptAssign4_1: __goscript_context.jsCtx = 0
			c.state = __goscriptAssign4_0
			c.jsCtx = __goscriptAssign4_1
			break
		}
		case 39:
		{
			let __goscriptAssign5_0: __goscript_context.state = 12
			let __goscriptAssign5_1: __goscript_context.jsCtx = 0
			c.state = __goscriptAssign5_0
			c.jsCtx = __goscriptAssign5_1
			break
		}
		case 96:
		{
			let __goscriptAssign6_0: __goscript_context.state = 13
			let __goscriptAssign6_1: __goscript_context.jsCtx = 0
			c.state = __goscriptAssign6_0
			c.jsCtx = __goscriptAssign6_1
			break
		}
		case 47:
		{
			switch ((true as boolean)) {
				case ((i + 1) < $.sliceLen(s)) && ($.arrayIndex(s!, i + 1) == 47):
				{
					let __goscriptAssign7_0: __goscript_context.state = 16
					let __goscriptAssign7_1: number = i + 1
					c.state = __goscriptAssign7_0
					i = __goscriptAssign7_1
					break
				}
				case ((i + 1) < $.sliceLen(s)) && ($.arrayIndex(s!, i + 1) == 42):
				{
					let __goscriptAssign8_0: __goscript_context.state = 15
					let __goscriptAssign8_1: number = i + 1
					c.state = __goscriptAssign8_0
					i = __goscriptAssign8_1
					break
				}
				case c.jsCtx == 0:
				{
					c.state = 14
					break
				}
				case c.jsCtx == 1:
				{
					c.jsCtx = 0
					break
				}
				default:
				{
					return [(await (async () => { const __goscriptLiteralField1 = await __goscript_error.errorf(10, null, 0, "'/' could start a division or regexp: %.32q", $.arrayToSlice<any>([$.interfaceValue($.goSlice(s, i, undefined), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))])); return $.markAsStructValue(new __goscript_context.context({state: 27, err: __goscriptLiteralField1})) })()), $.sliceLen(s)]
					break
				}
			}
			break
		}
		case 60:
		{
			if (((i + 3) < $.sliceLen(s)) && bytes.Equal(commentStart, $.goSlice(s, i, i + 4))) {
				let __goscriptAssign9_0: __goscript_context.state = 17
				let __goscriptAssign9_1: number = i + 3
				c.state = __goscriptAssign9_0
				i = __goscriptAssign9_1
			}
			break
		}
		case 45:
		{
			if (((i + 2) < $.sliceLen(s)) && bytes.Equal(commentEnd, $.goSlice(s, i, i + 3))) {
				let __goscriptAssign10_0: __goscript_context.state = 18
				let __goscriptAssign10_1: number = i + 2
				c.state = __goscriptAssign10_0
				i = __goscriptAssign10_1
			}
			break
		}
		case 35:
		{
			if (((i + 1) < $.sliceLen(s)) && ($.arrayIndex(s!, i + 1) == 33)) {
				let __goscriptAssign11_0: __goscript_context.state = 16
				let __goscriptAssign11_1: number = i + 1
				c.state = __goscriptAssign11_0
				i = __goscriptAssign11_1
				break
			}
			// A private identifier such as #yield is never a keyword, and
			// precedes a div op.
			for (let __goscriptSliceWindow1 = $.sliceRange(s); ((i + 1) < __goscriptSliceWindow1.length) && __goscript_js.isJSIdentPart($.int(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, i + 1)] as number), 32)); ) {
				i++
			}
			c.jsCtx = 1
			break
		}
		case 123:
		{
			if ($.sliceLen(c.jsBraceDepth) == 0) {
				c.jsCtx = __goscript_js.nextJSCtx($.goSlice(s, i, i + 1), c.jsCtx)
				return [$.markAsStructValue($.cloneStructValue(c)), i + 1]
			}
			$.sliceElems(c.jsBraceDepth!)[$.sliceSlot(c.jsBraceDepth!, $.sliceLen(c.jsBraceDepth) - 1)]++
			c.jsCtx = __goscript_js.nextJSCtx($.goSlice(s, i, i + 1), c.jsCtx)
			break
		}
		case 125:
		{
			if ($.sliceLen(c.jsBraceDepth) == 0) {
				c.jsCtx = __goscript_js.nextJSCtx($.goSlice(s, i, i + 1), c.jsCtx)
				return [$.markAsStructValue($.cloneStructValue(c)), i + 1]
			}
			// There are no cases where a brace can be escaped in the JS context
			// that are not syntax errors, it seems. Because of this we can just
			// count "\}" as "}" and move on, the script is already broken as
			// fully fledged parsers will just fail anyway.
			$.sliceElems(c.jsBraceDepth!)[$.sliceSlot(c.jsBraceDepth!, $.sliceLen(c.jsBraceDepth) - 1)]--
			if ($.arrayIndex(c.jsBraceDepth!, $.sliceLen(c.jsBraceDepth) - 1) >= 0) {
				c.jsCtx = __goscript_js.nextJSCtx($.goSlice(s, i, i + 1), c.jsCtx)
				return [$.markAsStructValue($.cloneStructValue(c)), i + 1]
			}
			c.jsBraceDepth = $.goSlice(c.jsBraceDepth, undefined, $.sliceLen(c.jsBraceDepth) - 1)
			c.state = 13
			break
		}
		default:
		{
			$.panic("unreachable")
			break
		}
	}
	return [$.markAsStructValue($.cloneStructValue(c)), i + 1]
}

export async function tJSTmpl(c: __goscript_context.context, s: $.Slice<number>): globalThis.Promise<[__goscript_context.context, number]> {
	let k: number = 0
	for (let __goscriptSliceWindow2 = $.sliceRange(s); true; ) {
		let i: number = k + bytes.IndexAny($.goSlice(s, k, undefined), "`\\$")
		if (i < k) {
			break
		}
		switch (((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i)] as number)) {
			case 92:
			{
				i++
				if (i == __goscriptSliceWindow2.length) {
					return [(await (async () => { const __goscriptLiteralField2 = await __goscript_error.errorf(8, null, 0, "unfinished escape sequence in JS string: %q", $.arrayToSlice<any>([$.interfaceValue(s, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))])); return $.markAsStructValue(new __goscript_context.context({state: 27, err: __goscriptLiteralField2})) })()), __goscriptSliceWindow2.length]
				}
				break
			}
			case 36:
			{
				if ((__goscriptSliceWindow2.length >= (i + 2)) && (((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, i + 1)] as number) == 123)) {
					c.jsBraceDepth = $.appendOne(c.jsBraceDepth, 0)
					let __goscriptAssign12_0: __goscript_context.state = 10
					let __goscriptAssign12_1: __goscript_context.jsCtx = 0
					c.state = __goscriptAssign12_0
					c.jsCtx = __goscriptAssign12_1
					return [$.markAsStructValue($.cloneStructValue(c)), i + 2]
				}
				break
			}
			case 96:
			{
				c.state = 10
				return [$.markAsStructValue($.cloneStructValue(c)), i + 1]
				break
			}
		}
		k = i + 1
	}

	return [$.markAsStructValue($.cloneStructValue(c)), $.sliceLen(s)]
}

export async function tJSDelimited(c: __goscript_context.context, s: $.Slice<number>): globalThis.Promise<[__goscript_context.context, number]> {
	let specials = "\\\""
	switch (c.state) {
		case 12:
		{
			specials = "\\'"
			break
		}
		case 14:
		{
			specials = "\\/[]"
			break
		}
	}

	let k = 0
	let inCharset = false
	for (let __goscriptSliceWindow3 = $.sliceRange(s); true; ) {
		let i: number = k + bytes.IndexAny($.goSlice(s, k, undefined), specials)
		if (i < k) {
			break
		}
		switch (((__goscriptSliceWindow3.backing as any[])[$.windowSlot(__goscriptSliceWindow3, i)] as number)) {
			case 92:
			{
				i++
				if (i == __goscriptSliceWindow3.length) {
					return [(await (async () => { const __goscriptLiteralField3 = await __goscript_error.errorf(8, null, 0, "unfinished escape sequence in JS string: %q", $.arrayToSlice<any>([$.interfaceValue(s, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))])); return $.markAsStructValue(new __goscript_context.context({state: 27, err: __goscriptLiteralField3})) })()), __goscriptSliceWindow3.length]
				}
				break
			}
			case 91:
			{
				inCharset = true
				break
			}
			case 93:
			{
				inCharset = false
				break
			}
			case 47:
			{
				if (((i > 0) && ((i + 7) <= __goscriptSliceWindow3.length)) && bytes.EqualFold($.goSlice(s, i - 1, i + 7), new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]))) {
					i++
				} else {
					if (!inCharset) {
						let __goscriptAssign13_0: __goscript_context.state = 10
						let __goscriptAssign13_1: __goscript_context.jsCtx = 1
						c.state = __goscriptAssign13_0
						c.jsCtx = __goscriptAssign13_1
						return [$.markAsStructValue($.cloneStructValue(c)), i + 1]
					}
				}
				break
			}
			default:
			{
				if (!inCharset) {
					let __goscriptAssign14_0: __goscript_context.state = 10
					let __goscriptAssign14_1: __goscript_context.jsCtx = 1
					c.state = __goscriptAssign14_0
					c.jsCtx = __goscriptAssign14_1
					return [$.markAsStructValue($.cloneStructValue(c)), i + 1]
				}
				break
			}
		}
		k = i + 1
	}

	if (inCharset) {
		// This can be fixed by making context richer if interpolation
		// into charsets is desired.
		return [(await (async () => { const __goscriptLiteralField4 = await __goscript_error.errorf(7, null, 0, "unfinished JS regexp charset: %q", $.arrayToSlice<any>([$.interfaceValue(s, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))])); return $.markAsStructValue(new __goscript_context.context({state: 27, err: __goscriptLiteralField4})) })()), $.sliceLen(s)]
	}

	return [$.markAsStructValue($.cloneStructValue(c)), $.sliceLen(s)]
}

export let blockCommentEnd: $.Slice<number> = new Uint8Array([42, 47])

export function __goscript_set_blockCommentEnd(__goscriptValue: $.Slice<number>): void {
	blockCommentEnd = __goscriptValue
}

export function tBlockCmt(c: __goscript_context.context, s: $.Slice<number>): [__goscript_context.context, number] {
	let i = bytes.Index(s, blockCommentEnd)
	if (i == -1) {
		return [$.markAsStructValue($.cloneStructValue(c)), $.sliceLen(s)]
	}
	switch (c.state) {
		case 15:
		{
			c.state = 10
			break
		}
		case 25:
		{
			c.state = 19
			break
		}
		default:
		{
			$.panic(__goscript_state_string.state_String(c.state))
			break
		}
	}
	return [$.markAsStructValue($.cloneStructValue(c)), i + 2]
}

export function tLineCmt(c: __goscript_context.context, s: $.Slice<number>): [__goscript_context.context, number] {
	let lineTerminators: string = ""
	let endState: __goscript_context.state = 0
	switch (c.state) {
		case 16:
		case 17:
		case 18:
		{
			let __goscriptAssign15_0: string = "\n\r\xe2\x80\xa8\xe2\x80\xa9"
			let __goscriptAssign15_1: __goscript_context.state = 10
			lineTerminators = __goscriptAssign15_0
			endState = __goscriptAssign15_1
			break
		}
		case 26:
		{
			let __goscriptAssign16_0: string = "\n\x0c\r"
			let __goscriptAssign16_1: __goscript_context.state = 19
			lineTerminators = __goscriptAssign16_0
			endState = __goscriptAssign16_1
			break
		}
		default:
		{
			$.panic(__goscript_state_string.state_String(c.state))
			break
		}
	}

	let i = bytes.IndexAny(s, lineTerminators)
	if (i == -1) {
		return [$.markAsStructValue($.cloneStructValue(c)), $.sliceLen(s)]
	}
	c.state = endState
	// Per section 7.4 of EcmaScript 5 : https://es5.github.io/#x7.4
	// "However, the LineTerminator at the end of the line is not
	// considered to be part of the single-line comment; it is
	// recognized separately by the lexical grammar and becomes part
	// of the stream of input elements for the syntactic grammar."
	return [$.markAsStructValue($.cloneStructValue(c)), i]
}

export function tCSS(c: __goscript_context.context, s: $.Slice<number>): [__goscript_context.context, number] {
	// CSS quoted strings are almost never used except for:
	// (1) URLs as in background: "/foo.png"
	// (2) Multiword font-names as in font-family: "Times New Roman"
	// (3) List separators in content values as in inline-lists:
	//    <style>
	//    ul.inlineList { list-style: none; padding:0 }
	//    ul.inlineList > li { display: inline }
	//    ul.inlineList > li:before { content: ", " }
	//    ul.inlineList > li:first-child:before { content: "" }
	//    </style>
	//    <ul class=inlineList><li>One<li>Two<li>Three</ul>
	// (4) Attribute value selectors as in a[href="http://example.com/"]
	//
	// We conservatively treat all strings as URLs, but make some
	// allowances to avoid confusion.
	//
	// In (1), our conservative assumption is justified.
	// In (2), valid font names do not contain ':', '?', or '#', so our
	// conservative assumption is fine since we will never transition past
	// urlPartPreQuery.
	// In (3), our protocol heuristic should not be tripped, and there
	// should not be non-space content after a '?' or '#', so as long as
	// we only %-encode RFC 3986 reserved characters we are ok.
	// In (4), we should URL escape for URL attributes, and for others we
	// have the attribute name available if our conservative assumption
	// proves problematic for real code.

	let k = 0
	for (let __goscriptSliceWindow4 = $.sliceRange(s); true; ) {
		let i: number = k + bytes.IndexAny($.goSlice(s, k, undefined), "(\"'/")
		if (i < k) {
			return [$.markAsStructValue($.cloneStructValue(c)), __goscriptSliceWindow4.length]
		}
		switch (((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i)] as number)) {
			case 40:
			{
				let p: $.Slice<number> = bytes.TrimRight($.goSlice(s, undefined, i), "\t\n\x0c\r ")
				if (__goscript_css.endsWithCSSKeyword(p, "url")) {
					let j = __goscriptSliceWindow4.length - $.sliceLen(bytes.TrimLeft($.goSlice(s, i + 1, undefined), "\t\n\x0c\r "))
					switch ((true as boolean)) {
						case (j != __goscriptSliceWindow4.length) && (((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, j)] as number) == 34):
						{
							let __goscriptAssign17_0: __goscript_context.state = 22
							let __goscriptAssign17_1: number = j + 1
							c.state = __goscriptAssign17_0
							j = __goscriptAssign17_1
							break
						}
						case (j != __goscriptSliceWindow4.length) && (((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, j)] as number) == 39):
						{
							let __goscriptAssign18_0: __goscript_context.state = 23
							let __goscriptAssign18_1: number = j + 1
							c.state = __goscriptAssign18_0
							j = __goscriptAssign18_1
							break
						}
						default:
						{
							c.state = 24
							break
						}
					}
					return [$.markAsStructValue($.cloneStructValue(c)), j]
				}
				break
			}
			case 47:
			{
				if ((i + 1) < __goscriptSliceWindow4.length) {
					switch (((__goscriptSliceWindow4.backing as any[])[$.windowSlot(__goscriptSliceWindow4, i + 1)] as number)) {
						case 47:
						{
							c.state = 26
							return [$.markAsStructValue($.cloneStructValue(c)), i + 2]
							break
						}
						case 42:
						{
							c.state = 25
							return [$.markAsStructValue($.cloneStructValue(c)), i + 2]
							break
						}
					}
				}
				break
			}
			case 34:
			{
				c.state = 20
				return [$.markAsStructValue($.cloneStructValue(c)), i + 1]
				break
			}
			case 39:
			{
				c.state = 21
				return [$.markAsStructValue($.cloneStructValue(c)), i + 1]
				break
			}
		}
		k = i + 1
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function tCSSStr(c: __goscript_context.context, s: $.Slice<number>): globalThis.Promise<[__goscript_context.context, number]> {
	let endAndEsc: string = ""
	switch (c.state) {
		case 20:
		case 22:
		{
			endAndEsc = "\\\""
			break
		}
		case 21:
		case 23:
		{
			endAndEsc = "\\'"
			break
		}
		case 24:
		{
			endAndEsc = "\\\t\n\x0c\r )"
			break
		}
		default:
		{
			$.panic(__goscript_state_string.state_String(c.state))
			break
		}
	}

	let k = 0
	for (let __goscriptSliceWindow5 = $.sliceRange(s); true; ) {
		let i: number = k + bytes.IndexAny($.goSlice(s, k, undefined), endAndEsc)
		if (i < k) {
			let __goscriptShadow3 = c
			let __goscriptTuple2: any = tURL($.markAsStructValue($.cloneStructValue(__goscriptShadow3)), await __goscript_css.decodeCSS($.goSlice(s, k, undefined)))
			let __goscriptShadow4 = __goscriptTuple2[0]
			let nread = __goscriptTuple2[1]
			return [$.markAsStructValue($.cloneStructValue(__goscriptShadow4)), k + nread]
		}
		if (((__goscriptSliceWindow5.backing as any[])[$.windowSlot(__goscriptSliceWindow5, i)] as number) == 92) {
			i++
			if (i == __goscriptSliceWindow5.length) {
				return [(await (async () => { const __goscriptLiteralField5 = await __goscript_error.errorf(8, null, 0, "unfinished escape sequence in CSS string: %q", $.arrayToSlice<any>([$.interfaceValue(s, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))])); return $.markAsStructValue(new __goscript_context.context({state: 27, err: __goscriptLiteralField5})) })()), __goscriptSliceWindow5.length]
			}
		} else {
			c.state = 19
			return [$.markAsStructValue($.cloneStructValue(c)), i + 1]
		}
		let __goscriptTuple3: any = tURL($.markAsStructValue($.cloneStructValue(c)), await __goscript_css.decodeCSS($.goSlice(s, undefined, i + 1)))
		c = $.assignStruct(c, __goscriptTuple3[0])
		k = i + 1
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export function tError(c: __goscript_context.context, s: $.Slice<number>): [__goscript_context.context, number] {
	return [$.markAsStructValue($.cloneStructValue(c)), $.sliceLen(s)]
}

export function tMetaContent(c: __goscript_context.context, s: $.Slice<number>): [__goscript_context.context, number] {
	for (let __goscriptSliceWindow6 = $.sliceRange(s), __goscriptRangeCount0 = $.sliceLen(s), i = 0; i < __goscriptRangeCount0; i++) {
		if (((i + 3) <= (__goscriptSliceWindow6.length - 1)) && bytes.EqualFold($.goSlice(s, i, i + 3), new Uint8Array([117, 114, 108]))) {
			{
				let j = eatWhiteSpace(s, i + 3)
				if ((j < __goscriptSliceWindow6.length) && (((__goscriptSliceWindow6.backing as any[])[$.windowSlot(__goscriptSliceWindow6, j)] as number) == 61)) {
					c.state = 29
					return [$.markAsStructValue($.cloneStructValue(c)), j + 1]
				}
			}
		}
	}
	return [$.markAsStructValue($.cloneStructValue(c)), $.sliceLen(s)]
}

export function tMetaContentURL(c: __goscript_context.context, s: $.Slice<number>): [__goscript_context.context, number] {
	for (let __goscriptSliceWindow7 = $.sliceRange(s), __goscriptRangeCount1 = $.sliceLen(s), i = 0; i < __goscriptRangeCount1; i++) {
		if (((__goscriptSliceWindow7.backing as any[])[$.windowSlot(__goscriptSliceWindow7, i)] as number) == 59) {
			c.state = 28
			return [$.markAsStructValue($.cloneStructValue(c)), i + 1]
		}
	}
	return [$.markAsStructValue($.cloneStructValue(c)), $.sliceLen(s)]
}

export async function eatAttrName(s: $.Slice<number>, i: number): globalThis.Promise<[number, __goscript_error.Error | $.VarRef<__goscript_error.Error> | null]> {
	for (let __goscriptSliceWindow8 = $.sliceRange(s), j = i; j < __goscriptSliceWindow8.length; j++) {
		switch (((__goscriptSliceWindow8.backing as any[])[$.windowSlot(__goscriptSliceWindow8, j)] as number)) {
			case 32:
			case 9:
			case 10:
			case 12:
			case 13:
			case 61:
			case 62:
			{
				return [j, null]
				break
			}
			case 39:
			case 34:
			case 60:
			{
				return [-1, await __goscript_error.errorf(2, null, 0, "%q in attribute name: %.32q", $.arrayToSlice<any>([$.interfaceValue($.goSlice(s, j, j + 1), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), $.interfaceValue(s, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))]))]
				break
			}
			default:
			{
				break
			}
		}
	}
	return [$.sliceLen(s), null]
}

export var elementNameMap: globalThis.Map<string, __goscript_context.element> | null

export function __goscript_init_elementNameMap(): void {
	if (((elementNameMap) as any) === undefined) {
		elementNameMap = $.makeMap<string, __goscript_context.element>([["script", 1], ["style", 2], ["textarea", 3], ["title", 4], ["meta", 5]])
	}
}

export function __goscript_get_elementNameMap(): globalThis.Map<string, __goscript_context.element> | null {
	if (((elementNameMap) as any) === undefined) {
		__goscript_init_elementNameMap()
	}
	return elementNameMap
}

export function __goscript_set_elementNameMap(__goscriptValue: globalThis.Map<string, __goscript_context.element> | null): void {
	elementNameMap = __goscriptValue
}

export function asciiAlpha(c: number): boolean {
	return ((65 <= c) && (c <= 90)) || ((97 <= c) && (c <= 122))
}

export function asciiAlphaNum(c: number): boolean {
	return asciiAlpha(c) || ((48 <= c) && (c <= 57))
}

export function eatTagName(s: $.Slice<number>, i: number): [number, __goscript_context.element] {
	if ((i == $.sliceLen(s)) || !asciiAlpha($.arrayIndex(s!, i))) {
		return [i, 0]
	}
	let j = i + 1
	for (let __goscriptSliceWindow9 = $.sliceRange(s); j < __goscriptSliceWindow9.length; ) {
		let x = ((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, j)] as number)
		if (asciiAlphaNum(x)) {
			j++
			continue
		}
		// Allow "x-y" or "x:y" but not "x-", "-y", or "x--y".
		if ((((x == 58) || (x == 45)) && ((j + 1) < __goscriptSliceWindow9.length)) && asciiAlphaNum(((__goscriptSliceWindow9.backing as any[])[$.windowSlot(__goscriptSliceWindow9, j + 1)] as number))) {
			j = j + (2)
			continue
		}
		break
	}
	return [j, $.mapGet<string, __goscript_context.element, __goscript_context.element>(__goscript_get_elementNameMap(), strings.ToLower($.bytesToString($.goSlice(s, i, j))), 0)[0]]
}

export function eatWhiteSpace(s: $.Slice<number>, i: number): number {
	for (let __goscriptSliceWindow10 = $.sliceRange(s), j = i; j < __goscriptSliceWindow10.length; j++) {
		switch (((__goscriptSliceWindow10.backing as any[])[$.windowSlot(__goscriptSliceWindow10, j)] as number)) {
			case 32:
			case 9:
			case 10:
			case 12:
			case 13:
			{
				break
			}
			default:
			{
				return j
				break
			}
		}
	}
	return $.sliceLen(s)
}
