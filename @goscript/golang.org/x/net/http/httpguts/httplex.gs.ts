// Generated file based on httplex.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as net from "@goscript/net/index.js"

import * as strings from "@goscript/strings/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as idna from "@goscript/golang.org/x/net/idna/index.js"
import "@goscript/net/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/golang.org/x/net/idna/index.js"

export let isTokenTable: boolean[] = $.arrayValue([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, true, true, true, true, false, false, true, true, false, true, true, false, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])

export function __goscript_set_isTokenTable(__goscriptValue: boolean[]): void {
	isTokenTable = __goscriptValue
}

export function IsTokenRune(r: number): boolean {
	return (r < 128) && $.arrayIndex(isTokenTable, $.uint(r, 8))
}

export function HeaderValuesContainsToken(values: $.Slice<string>, token: string): boolean {
	for (let __goscriptRangeTarget0 = values, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let v = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		if (headerValueContainsToken(v, token)) {
			return true
		}
	}
	return false
}

export function isOWS(b: number): boolean {
	return (b == 32) || (b == 9)
}

export function trimOWS(x: string): string {
	// TODO: consider using strings.Trim(x, " \t") instead,
	// if and when it's fast enough. See issue 10292.
	// But this ASCII-only code will probably always beat UTF-8
	// aware code.
	while (($.stringLen(x) > 0) && isOWS($.indexString(x, 0))) {
		x = $.sliceStringOrBytes(x, 1, undefined)
	}
	while (($.stringLen(x) > 0) && isOWS($.indexString(x, $.stringLen(x) - 1))) {
		x = $.sliceStringOrBytes(x, undefined, $.stringLen(x) - 1)
	}
	return x
}

export function headerValueContainsToken(v: string, token: string): boolean {
	for (let comma: number = strings.IndexByte(v, 44); comma != -1; comma = strings.IndexByte(v, 44)) {
		if (tokenEqual(trimOWS($.sliceStringOrBytes(v, undefined, comma)), token)) {
			return true
		}
		v = $.sliceStringOrBytes(v, comma + 1, undefined)
	}
	return tokenEqual(trimOWS(v), token)
}

export function lowerASCII(b: number): number {
	if ((65 <= b) && (b <= 90)) {
		return $.uint(((b + (((97 - 65) & 0xff))) & 0xff), 8)
	}
	return b
}

export function tokenEqual(t1: string, t2: string): boolean {
	if ($.stringLen(t1) != $.stringLen(t2)) {
		return false
	}
	for (let __goscriptRunes0 = $.stringRunes(t1); __goscriptRunes0.next(); ) {
		const i = __goscriptRunes0.index
		const b = __goscriptRunes0.rune
		if (b >= 128) {
			// No UTF-8 or non-ASCII allowed in tokens.
			return false
		}
		if (lowerASCII($.uint(b, 8)) != lowerASCII($.indexString(t2, i))) {
			return false
		}
	}
	return true
}

export function isLWS(b: number): boolean {
	return (b == 32) || (b == 9)
}

export function isCTL(b: number): boolean {
	const del: number = 127
	return (b < 32) || (b == 127)
}

export function ValidHeaderFieldName(v: string): boolean {
	if ($.stringLen(v) == 0) {
		return false
	}
	for (let i = 0; i < $.stringLen(v); i++) {
		if (!$.arrayIndex(isTokenTable, $.indexString(v, i))) {
			return false
		}
	}
	return true
}

export function ValidHostHeader(h: string): boolean {
	// The latest spec is actually this:
	//
	// http://tools.ietf.org/html/rfc7230#section-5.4
	//     Host = uri-host [ ":" port ]
	//
	// Where uri-host is:
	//     http://tools.ietf.org/html/rfc3986#section-3.2.2
	//
	// But we're going to be much more lenient for now and just
	// search for any byte that's not a valid byte in any of those
	// expressions.
	for (let i = 0; i < $.stringLen(h); i++) {
		if (!$.arrayIndex(validHostByte, $.indexString(h, i))) {
			return false
		}
	}
	return true
}

export let validHostByte: boolean[] = $.arrayValue([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, true, true, true, true, true, true, true, true, true, true, true, false, true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, false, true, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])

export function __goscript_set_validHostByte(__goscriptValue: boolean[]): void {
	validHostByte = __goscriptValue
}

export function ValidHeaderFieldValue(v: string): boolean {
	for (let i = 0; i < $.stringLen(v); i++) {
		let b = $.indexString(v, i)
		if (isCTL(b) && !isLWS(b)) {
			return false
		}
	}
	return true
}

export function isASCII(s: string): boolean {
	for (let i = 0; i < $.stringLen(s); i++) {
		if ($.indexString(s, i) >= 128) {
			return false
		}
	}
	return true
}

export async function PunycodeHostPort(v: string): globalThis.Promise<[string, $.GoError]> {
	if (isASCII(v)) {
		return [v, null]
	}

	let [host, port, err] = await net.SplitHostPort(v)
	if (err != null) {
		// The input 'v' argument was just a "host" argument,
		// without a port. This error should not be returned
		// to the caller.
		host = v
		port = ""
	}
	let __goscriptTuple0: any = await idna.ToASCII(host)
	host = __goscriptTuple0[0]
	err = __goscriptTuple0[1]
	if (err != null) {
		// Non-UTF-8? Not representable in Punycode, in any
		// case.
		return ["", err]
	}
	if ($.stringEqual(port, "")) {
		return [host, null]
	}
	return [net.JoinHostPort(host, port), null]
}
