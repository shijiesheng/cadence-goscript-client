// Generated file based on js.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as regexp from "@goscript/regexp/index.js"

import * as strings from "@goscript/strings/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_content from "./content.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import type * as __goscript_jsctx_string from "./jsctx_string.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/reflect/index.js"
import "@goscript/regexp/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/utf8/index.js"
import "./content.gs.ts"
import "./context.gs.ts"

export const jsWhitespace: string = "\x0c\n\r\t\x0b \xc2\xa0\xe1\x9a\x80\xe2\x80\x80\xe2\x80\x81\xe2\x80\x82\xe2\x80\x83\xe2\x80\x84\xe2\x80\x85\xe2\x80\x86\xe2\x80\x87\xe2\x80\x88\xe2\x80\x89\xe2\x80\x8a\xe2\x80\xa8\xe2\x80\xa9\xe2\x80\xaf\xe2\x81\x9f\xe3\x80\x80\xef\xbb\xbf"

export function nextJSCtx(s: $.Slice<number>, preceding: __goscript_context.jsCtx): __goscript_context.jsCtx {
	// Trim all JS whitespace characters
	s = bytes.TrimRight(s, "\x0c\n\r\t\x0b \xc2\xa0\xe1\x9a\x80\xe2\x80\x80\xe2\x80\x81\xe2\x80\x82\xe2\x80\x83\xe2\x80\x84\xe2\x80\x85\xe2\x80\x86\xe2\x80\x87\xe2\x80\x88\xe2\x80\x89\xe2\x80\x8a\xe2\x80\xa8\xe2\x80\xa9\xe2\x80\xaf\xe2\x81\x9f\xe3\x80\x80\xef\xbb\xbf")
	if ($.sliceLen(s) == 0) {
		return preceding
	}

	// All cases below are in the single-byte UTF-8 group.
	{
		let c = $.arrayIndex(s!, $.sliceLen(s) - 1)
		let n = $.sliceLen(s)
		switch (c) {
			case 43:
			case 45:
			{
				let start = n - 1
				// Count the number of adjacent dashes or pluses.
				for (let __goscriptSliceWindow0 = $.sliceRange(s); (start > 0) && (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, start - 1)] as number) == c); ) {
					start--
				}
				if (((n - start) & 1) == 1) {
					// Reached for trailing minus signs since "---" is the
					// same as "-- -".
					return 0
				}
				return 1
				break
			}
			case 46:
			{
				if (((n != 1) && (48 <= $.arrayIndex(s!, n - 2))) && ($.arrayIndex(s!, n - 2) <= 57)) {
					return 1
				}
				return 0
				break
			}
			case 44:
			case 60:
			case 62:
			case 61:
			case 42:
			case 37:
			case 38:
			case 124:
			case 94:
			case 63:
			{
				return 0
				break
			}
			case 33:
			case 126:
			{
				return 0
				break
			}
			case 40:
			case 91:
			{
				return 0
				break
			}
			case 58:
			case 59:
			case 123:
			{
				return 0
				break
			}
			case 125:
			{
				return 0
				break
			}
			default:
			{
				let j = n
				for (let __goscriptSliceWindow1 = $.sliceRange(s); (j > 0) && isJSIdentPart($.int(((__goscriptSliceWindow1.backing as any[])[$.windowSlot(__goscriptSliceWindow1, j - 1)] as number), 32)); ) {
					j--
				}
				// An IdentifierName after a property-access dot is a property name,
				// which precedes a div op.
				if ($.mapGet<string, boolean, boolean>(regexpPrecederKeywords, $.bytesToString($.goSlice(s, j, undefined)), false)[0] && !bytes.HasSuffix(bytes.TrimRight($.goSlice(s, undefined, j), "\x0c\n\r\t\x0b \xc2\xa0\xe1\x9a\x80\xe2\x80\x80\xe2\x80\x81\xe2\x80\x82\xe2\x80\x83\xe2\x80\x84\xe2\x80\x85\xe2\x80\x86\xe2\x80\x87\xe2\x80\x88\xe2\x80\x89\xe2\x80\x8a\xe2\x80\xa8\xe2\x80\xa9\xe2\x80\xaf\xe2\x81\x9f\xe3\x80\x80\xef\xbb\xbf"), new Uint8Array([46]))) {
					return 0
				}
				break
			}
		}
	}
	// Otherwise is a punctuator not listed above, or
	// a string which precedes a div op, or an identifier
	// which precedes a div op.
	return 1
}

export let regexpPrecederKeywords: globalThis.Map<string, boolean> | null = $.makeMap<string, boolean>([["break", true], ["case", true], ["continue", true], ["delete", true], ["do", true], ["else", true], ["finally", true], ["in", true], ["instanceof", true], ["return", true], ["throw", true], ["try", true], ["typeof", true], ["void", true], ["yield", true]])

export function __goscript_set_regexpPrecederKeywords(__goscriptValue: globalThis.Map<string, boolean> | null): void {
	regexpPrecederKeywords = __goscriptValue
}

export let jsonMarshalType: reflect.Type | null = reflect.TypeFor(__goscriptStatic0())

export function __goscript_set_jsonMarshalType(__goscriptValue: reflect.Type | null): void {
	jsonMarshalType = __goscriptValue
}

export async function indirectToJSONMarshaler(a: any): globalThis.Promise<any> {
	// text/template now supports passing untyped nil as a func call
	// argument, so we must support it. Otherwise we'd panic below, as one
	// cannot call the Type or Interface methods on an invalid
	// reflect.Value. See golang.org/issue/18716.
	if (a == null) {
		return null
	}

	let v = $.markAsStructValue($.cloneStructValue(reflect.ValueOf(a)))
	while ((!(__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>($.markAsStructValue($.cloneStructValue(v)).Type()).Implements($.pointerValueOrNil(jsonMarshalType)!), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) && ($.markAsStructValue($.cloneStructValue(v)).Kind() == 22)) && !$.markAsStructValue($.cloneStructValue(v)).IsNil()) {
		v = $.assignStruct(v, $.markAsStructValue($.cloneStructValue(v)).Elem())
	}
	return $.markAsStructValue($.cloneStructValue(v)).Interface()
}

export let scriptTagRe: regexp.Regexp | $.VarRef<regexp.Regexp> | null = await regexp.MustCompile("(?i)<(/?)script")

export function __goscript_set_scriptTagRe(__goscriptValue: regexp.Regexp | $.VarRef<regexp.Regexp> | null): void {
	scriptTagRe = __goscriptValue
}

export async function jsValEscaper(args: $.Slice<any>): globalThis.Promise<string> {
	let a: any = null! as any
	if ($.sliceLen(args) == 1) {
		a = await indirectToJSONMarshaler($.arrayIndex(args!, 0))
		{
			const __goscriptTypeSwitchValue = a
			switch (true) {
				case $.typeAssert<__goscript_content.JS>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.JS")).ok:
					{
						let t: __goscript_content.JS = $.typeAssert<__goscript_content.JS>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.JS")).value
						return t
					}
					break
				case $.typeAssert<__goscript_content.JSStr>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.JSStr")).ok:
					{
						let t: __goscript_content.JSStr = $.typeAssert<__goscript_content.JSStr>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.basicType("string", "template.JSStr")).value
						return $.concatString(($.concatString("\"", t)), "\"")
					}
					break
				case $.typeAssert<any>(__goscriptTypeSwitchValue, "json.Marshaler").ok:
					{
						let t: any = $.typeAssert<any>(__goscriptTypeSwitchValue, "json.Marshaler").value
					}
					break
				case $.typeAssert<fmt.Stringer | null>(__goscriptTypeSwitchValue, "fmt.Stringer").ok:
					{
						let t: fmt.Stringer | null = $.typeAssert<fmt.Stringer | null>(__goscriptTypeSwitchValue, "fmt.Stringer").value
						a = (__goscriptAwait = (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? (t as Exclude<fmt.Stringer, null>) : $.pointerValue<Exclude<fmt.Stringer, null>>(t)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					break
			}
		}
	} else {
		for (let __goscriptRangeTarget0 = args, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let arg = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as any);
			;(__goscriptRangeWindow0.backing as any[])[__goscriptRangeWindow0.offset + i] = await indirectToJSONMarshaler(arg)
		}
		a = await fmt.Sprint(...(args ?? []))
	}
	// TODO: detect cycles before calling Marshal which loops infinitely on
	// cyclic data. This may be an unacceptable DoS risk.
	let __goscriptTuple0: any = await json.Marshal(a)
	let b: $.Slice<number> = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		// While the standard JSON marshaler does not include user controlled
		// information in the error message, if a type has a MarshalJSON method,
		// the content of the error message is not guaranteed. Since we insert
		// the error into the template, as part of a comment, we attempt to
		// prevent the error from either terminating the comment, or the script
		// block itself.
		//
		// In particular we:
		//   * replace "*/" comment end tokens with "* /", which does not
		//     terminate the comment
		//   * replace "<script" and "</script" with "\x3Cscript" and "\x3C/script"
		//     (case insensitively), and "<!--" with "\x3C!--", which prevents
		//     confusing script block termination semantics
		//
		// We also put a space before the comment so that if it is flush against
		// a division operator it is not turned into a line comment:
		//     x/{{y}}
		// turning into
		//     x//* error marshaling y:
		//          second line of error message */null
		let errStr = (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		errStr = $.bytesToString(await (scriptTagRe !== null && (scriptTagRe as any).__isVarRef !== true && (scriptTagRe as any).__goValue === undefined ? ((scriptTagRe as any) as regexp.Regexp).ReplaceAll($.stringToBytes(errStr), new Uint8Array([92, 120, 51, 67, 36, 123, 49, 125, 115, 99, 114, 105, 112, 116])) : regexp.Regexp.prototype.ReplaceAll.call(scriptTagRe, $.stringToBytes(errStr), new Uint8Array([92, 120, 51, 67, 36, 123, 49, 125, 115, 99, 114, 105, 112, 116]))))
		errStr = strings.ReplaceAll(errStr, "*/", "* /")
		errStr = strings.ReplaceAll(errStr, "<!--", "\\x3C!--")
		return fmt.Sprintf(" /* %s */null ", errStr)
	}

	// TODO: maybe post-process output to prevent it from containing
	// "<!--", "-->", "<![CDATA[", "]]>", or "</script"
	// in case custom marshalers produce output containing those.
	// Note: Do not use \x escaping to save bytes because it is not JSON compatible and this escaper
	// supports ld+json content-type.
	if ($.sliceLen(b) == 0) {
		// In, `x=y/{{.}}*z` a json.Marshaler that produces "" should
		// not cause the output `x=y/*z`.
		return " null "
	}
	let [first, ] = utf8.DecodeRune(b)
	let [last, ] = utf8.DecodeLastRune(b)
	let buf: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
	// Prevent IdentifierNames and NumericLiterals from running into
	// keywords: in, instanceof, typeof, void
	let pad = isJSIdentPart(first) || isJSIdentPart(last)
	if (pad) {
		buf.value.WriteByte(32)
	}
	let written = 0
	// Make sure that json.Marshal escapes codepoints U+2028 & U+2029
	// so it falls within the subset of JSON which is valid JS.
	for (let i = 0; i < $.sliceLen(b); ) {
		let [rune, n] = utf8.DecodeRune($.goSlice(b, i, undefined))
		let repl = ""
		if (rune == 0x2028) {
			repl = "\\u2028"
		} else {
			if (rune == 0x2029) {
				repl = "\\u2029"
			}
		}
		if (!$.stringEqual(repl, "")) {
			buf.value.Write($.goSlice(b, written, i))
			buf.value.WriteString(repl)
			written = i + n
		}
		i = i + (n)
	}
	if (buf.value.Len() != 0) {
		buf.value.Write($.goSlice(b, written, undefined))
		if (pad) {
			buf.value.WriteByte(32)
		}
		return buf.value.String()
	}
	return $.bytesToString(b)
}

export async function jsStrEscaper(args: $.Slice<any>): globalThis.Promise<string> {
	let [s, t] = await __goscript_content.stringify(args)
	if (t == 5) {
		return replace(s, jsStrNormReplacementTable)
	}
	return replace(s, jsStrReplacementTable)
}

export async function jsTmplLitEscaper(args: $.Slice<any>): globalThis.Promise<string> {
	let [s, ] = await __goscript_content.stringify(args)
	return replace(s, jsBqStrReplacementTable)
}

export async function jsRegexpEscaper(args: $.Slice<any>): globalThis.Promise<string> {
	let [s, ] = await __goscript_content.stringify(args)
	s = replace(s, jsRegexpReplacementTable)
	if ($.stringEqual(s, "")) {
		// /{{.X}}/ should not produce a line comment when .X == "".
		return "(?:)"
	}
	return s
}

export function replace(s: string, replacementTable: $.Slice<string>): string {
	let b: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
	let r = 0
	let w = 0
	let written = 0
	for (let __goscriptSliceWindow2 = $.sliceRange(replacementTable), i = 0; i < $.stringLen(s); i = i + (w)) {
		// See comment in htmlEscaper.
		let __goscriptTuple1: any = utf8.DecodeRuneInString($.sliceStringOrBytes(s, i, undefined))
		r = __goscriptTuple1[0]
		w = __goscriptTuple1[1]
		let repl: string = ""
		switch ((true as boolean)) {
			case $.int(r) < $.sliceLen(lowUnicodeReplacementTable):
			{
				repl = $.arrayIndex(lowUnicodeReplacementTable!, r)
				break
			}
			case ($.int(r) < __goscriptSliceWindow2.length) && (!$.stringEqual(((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, r)] as string), "")):
			{
				repl = ((__goscriptSliceWindow2.backing as any[])[$.windowSlot(__goscriptSliceWindow2, r)] as string)
				break
			}
			case r == 8232:
			{
				repl = "\\u2028"
				break
			}
			case r == 8233:
			{
				repl = "\\u2029"
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
	}
	if (written == 0) {
		return s
	}
	b.value.WriteString($.sliceStringOrBytes(s, written, undefined))
	return b.value.String()
}

export let lowUnicodeReplacementTable: $.Slice<string> = $.arrayToSlice<string>(["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\u0008", "\\t", "\\n", "\\u000b", "\\f", "\\r", "\\u000e", "\\u000f", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001a", "\\u001b", "\\u001c", "\\u001d", "\\u001e", "\\u001f"])

export function __goscript_set_lowUnicodeReplacementTable(__goscriptValue: $.Slice<string>): void {
	lowUnicodeReplacementTable = __goscriptValue
}

export let jsStrReplacementTable: $.Slice<string> = $.arrayToSlice<string>(["\\u0000", "", "", "", "", "", "", "", "", "\\t", "\\n", "\\u000b", "\\f", "\\r", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u0022", "", "", "", "\\u0026", "\\u0027", "", "", "", "\\u002b", "", "", "", "\\/", "", "", "", "", "", "", "", "", "", "", "", "", "\\u003c", "", "\\u003e", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "\\u0060"])

export function __goscript_set_jsStrReplacementTable(__goscriptValue: $.Slice<string>): void {
	jsStrReplacementTable = __goscriptValue
}

export let jsBqStrReplacementTable: $.Slice<string> = $.arrayToSlice<string>(["\\u0000", "", "", "", "", "", "", "", "", "\\t", "\\n", "\\u000b", "\\f", "\\r", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u0022", "", "\\u0024", "", "\\u0026", "\\u0027", "", "", "", "\\u002b", "", "", "", "\\/", "", "", "", "", "", "", "", "", "", "", "", "", "\\u003c", "", "\\u003e", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "\\u0060", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007b", "", "\\u007d"])

export function __goscript_set_jsBqStrReplacementTable(__goscriptValue: $.Slice<string>): void {
	jsBqStrReplacementTable = __goscriptValue
}

export let jsStrNormReplacementTable: $.Slice<string> = $.arrayToSlice<string>(["\\u0000", "", "", "", "", "", "", "", "", "\\t", "\\n", "\\u000b", "\\f", "\\r", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u0022", "", "", "", "\\u0026", "\\u0027", "", "", "", "\\u002b", "", "", "", "\\/", "", "", "", "", "", "", "", "", "", "", "", "", "\\u003c", "", "\\u003e", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u0060"])

export function __goscript_set_jsStrNormReplacementTable(__goscriptValue: $.Slice<string>): void {
	jsStrNormReplacementTable = __goscriptValue
}

export let jsRegexpReplacementTable: $.Slice<string> = $.arrayToSlice<string>(["\\u0000", "", "", "", "", "", "", "", "", "\\t", "\\n", "\\u000b", "\\f", "\\r", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u0022", "", "\\$", "", "\\u0026", "\\u0027", "\\(", "\\)", "\\*", "\\u002b", "", "\\-", "\\.", "\\/", "", "", "", "", "", "", "", "", "", "", "", "", "\\u003c", "", "\\u003e", "\\?", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\[", "\\\\", "\\]", "\\^", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\{", "\\|", "\\}"])

export function __goscript_set_jsRegexpReplacementTable(__goscriptValue: $.Slice<string>): void {
	jsRegexpReplacementTable = __goscriptValue
}

export function isJSIdentPart(r: number): boolean {
	switch ((true as boolean)) {
		case r == 36:
		{
			return true
			break
		}
		case (48 <= r) && (r <= 57):
		{
			return true
			break
		}
		case (65 <= r) && (r <= 90):
		{
			return true
			break
		}
		case r == 95:
		{
			return true
			break
		}
		case (97 <= r) && (r <= 122):
		{
			return true
			break
		}
	}
	return false
}

export function isJSType(mimeType: string): boolean {
	// per
	//   https://www.w3.org/TR/html5/scripting-1.html#attr-script-type
	//   https://tools.ietf.org/html/rfc7231#section-3.1.1
	//   https://tools.ietf.org/html/rfc4329#section-3
	//   https://www.ietf.org/rfc/rfc4627.txt
	// discard parameters
	let __goscriptTuple2: any = strings.Cut(mimeType, ";")
	mimeType = __goscriptTuple2[0]
	mimeType = strings.ToLower(mimeType)
	mimeType = strings.TrimSpace(mimeType)
	switch (mimeType) {
		case "":
		case "application/ecmascript":
		case "application/javascript":
		case "application/json":
		case "application/ld+json":
		case "application/x-ecmascript":
		case "application/x-javascript":
		case "module":
		case "text/ecmascript":
		case "text/javascript":
		case "text/javascript1.0":
		case "text/javascript1.1":
		case "text/javascript1.2":
		case "text/javascript1.3":
		case "text/javascript1.4":
		case "text/javascript1.5":
		case "text/jscript":
		case "text/livescript":
		case "text/x-ecmascript":
		case "text/x-javascript":
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

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "json.Marshaler", zero: () => null, methods: {MarshalJSON: (receiver: any, ...args: any[]) => receiver.MarshalJSON(...$.stripGenericTypeArgs(args))} }})
}

var __goscriptAwait: any
