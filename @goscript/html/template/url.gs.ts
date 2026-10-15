// Generated file based on url.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as strings from "@goscript/strings/index.js"

import type * as io from "@goscript/io/index.js"

import * as __goscript_content from "./content.gs.ts"

import * as __goscript_css from "./css.gs.ts"

import * as __goscript_escape from "./escape.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/strings/index.js"
import "./content.gs.ts"
import "./css.gs.ts"
import "./escape.gs.ts"

export const htmlSpaceAndASCIIAlnumBytes: string = "\x006\x00\x00\x01\x00\xff\x03\xfe\xff\xff\x07\xfe\xff\xff\x07"

export async function urlFilter(args: $.Slice<any>): globalThis.Promise<string> {
	let [s, t] = await __goscript_content.stringify(args)
	if (t == 6) {
		return s
	}
	if (!isSafeURL(s)) {
		return $.concatString("#", "ZgotmplZ")
	}
	return s
}

export function isSafeURL(s: string): boolean {
	{
		let [protocol, , ok] = strings.Cut(s, ":")
		if (ok && !strings.Contains(protocol, "/")) {
			if ((!strings.EqualFold(protocol, "http") && !strings.EqualFold(protocol, "https")) && !strings.EqualFold(protocol, "mailto")) {
				return false
			}
		}
	}
	return true
}

export async function urlEscaper(args: $.Slice<any>): globalThis.Promise<string> {
	return urlProcessor(false, args)
}

export async function urlNormalizer(args: $.Slice<any>): globalThis.Promise<string> {
	return urlProcessor(true, args)
}

export async function urlProcessor(norm: boolean, args: $.Slice<any>): globalThis.Promise<string> {
	let [s, t] = await __goscript_content.stringify(args)
	if (t == 6) {
		norm = true
	}
	let b: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
	if (await processURLOnto(s, norm, b)) {
		return b.value.String()
	}
	return s
}

export async function processURLOnto(s: string, norm: boolean, b: strings.Builder | $.VarRef<strings.Builder> | null): globalThis.Promise<boolean> {
	strings.Builder.prototype.Grow.call($.pointerValue<strings.Builder>(b), $.stringLen(s) + 16)
	let written = 0
	// The byte loop below assumes that all URLs use UTF-8 as the
	// content-encoding. This is similar to the URI to IRI encoding scheme
	// defined in section 3.1 of  RFC 3987, and behaves the same as the
	// EcmaScript builtin encodeURIComponent.
	// It should not cause any misencoding of URLs in pages with
	// Content-type: text/html;charset=UTF-8.
	for (let i = 0, n = $.stringLen(s); i < n; i++) {
		let c = $.indexString(s, i)
		switch (c) {
			case 33:
			case 35:
			case 36:
			case 38:
			case 42:
			case 43:
			case 44:
			case 47:
			case 58:
			case 59:
			case 61:
			case 63:
			case 64:
			case 91:
			case 93:
			{
				if (norm) {
					continue
				}
				break
			}
			case 45:
			case 46:
			case 95:
			case 126:
			{
				continue
				break
			}
			case 37:
			{
				if (((norm && ((i + 2) < $.stringLen(s))) && __goscript_css.isHex($.indexString(s, i + 1))) && __goscript_css.isHex($.indexString(s, i + 2))) {
					continue
				}
				break
			}
			default:
			{
				if ((97 <= c) && (c <= 122)) {
					continue
				}
				if ((65 <= c) && (c <= 90)) {
					continue
				}
				if ((48 <= c) && (c <= 57)) {
					continue
				}
				break
			}
		}
		strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), $.sliceStringOrBytes(s, written, i))
		await fmt.Fprintf($.pointerValueOrNil($.interfaceValue<io.Writer | null>(b, "*strings.Builder", /* @__PURE__ */ $.pointerType("strings.Builder")))!, "%%%02x", $.basicInterfaceValue(c, "byte", "uint8"))
		written = i + 1
	}
	strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), $.sliceStringOrBytes(s, written, undefined))
	return written != 0
}

export async function srcsetFilterAndEscaper(args: $.Slice<any>): globalThis.Promise<string> {
	let [s, t] = await __goscript_content.stringify(args)
	switch (t) {
		case 7:
		{
			return s
			break
		}
		case 6:
		{
			let b: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
			if (await processURLOnto(s, true, b)) {
				s = b.value.String()
			}
			// Additionally, commas separate one source from another.
			return strings.ReplaceAll(s, ",", "%2c")
			break
		}
	}

	let b: $.VarRef<strings.Builder> = $.varRef($.markAsStructValue(new strings.Builder()))
	let written = 0
	for (let i = 0; i < $.stringLen(s); i++) {
		if ($.indexString(s, i) == 44) {
			await filterSrcsetElement(s, written, i, b)
			b.value.WriteString(",")
			written = i + 1
		}
	}
	await filterSrcsetElement(s, written, $.stringLen(s), b)
	return b.value.String()
}

export function isHTMLSpace(c: number): boolean {
	return (c <= 0x20) && (0 != $.uint(($.indexByteString("\x00\x36\x00\x00\x01\x00\xff\x03\xfe\xff\xff\x07\xfe\xff\xff\x07", $.uintShr(c, 3, 8)) & (((1 << $.uint(c & 0x7, 64)) & 0xff))), 8))
}

export function isHTMLSpaceOrASCIIAlnum(c: number): boolean {
	return (c < 0x80) && (0 != $.uint(($.indexByteString("\x00\x36\x00\x00\x01\x00\xff\x03\xfe\xff\xff\x07\xfe\xff\xff\x07", $.uintShr(c, 3, 8)) & (((1 << $.uint(c & 0x7, 64)) & 0xff))), 8))
}

export async function filterSrcsetElement(s: string, left: number, right: number, b: strings.Builder | $.VarRef<strings.Builder> | null): globalThis.Promise<void> {
	let start = left
	while ((start < right) && isHTMLSpace($.indexString(s, start))) {
		start++
	}
	let end = right
	for (let i = start; i < right; i++) {
		if (isHTMLSpace($.indexString(s, i))) {
			end = i
			break
		}
	}
	{
		let url = $.sliceStringOrBytes(s, start, end)
		if (isSafeURL(url)) {
			// If image metadata is only spaces or alnums then
			// we don't need to URL normalize it.
			let metadataOk = true
			for (let i = end; i < right; i++) {
				if (!isHTMLSpaceOrASCIIAlnum($.indexString(s, i))) {
					metadataOk = false
					break
				}
			}
			if (metadataOk) {
				strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), $.sliceStringOrBytes(s, left, start))
				await processURLOnto(url, true, b)
				strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), $.sliceStringOrBytes(s, end, right))
				return
			}
		}
	}
	strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "#")
	strings.Builder.prototype.WriteString.call($.pointerValue<strings.Builder>(b), "ZgotmplZ")
}
