// Generated file based on print.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as strings from "@goscript/strings/index.js"

import * as unicode from "@goscript/unicode/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/index.js"

export function EqualFold(s: string, t: string): boolean {
	if ($.stringLen(s) != $.stringLen(t)) {
		return false
	}
	for (let i = 0; i < $.stringLen(s); i++) {
		if (lower($.indexString(s, i)) != lower($.indexString(t, i))) {
			return false
		}
	}
	return true
}

export function lower(b: number): number {
	if ((65 <= b) && (b <= 90)) {
		return $.uint(((b + (((97 - 65) & 0xff))) & 0xff), 8)
	}
	return b
}

export function IsPrint(s: string): boolean {
	for (let i = 0; i < $.stringLen(s); i++) {
		if (($.indexString(s, i) < 32) || ($.indexString(s, i) > 126)) {
			return false
		}
	}
	return true
}

export function Is(s: string): boolean {
	for (let i = 0; i < $.stringLen(s); i++) {
		if ($.indexString(s, i) > 127) {
			return false
		}
	}
	return true
}

export function ToLower(s: string): [string, boolean] {
	let lower: string = ""
	let ok: boolean = false
	if (!IsPrint(s)) {
		return ["", false]
	}
	return [strings.ToLower(s), true]
}
