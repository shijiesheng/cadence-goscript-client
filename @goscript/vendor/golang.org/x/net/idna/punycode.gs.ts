// Generated file based on punycode.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as strings from "@goscript/strings/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_idna from "./idna.gs.ts"
import "@goscript/math/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/utf8/index.js"
import "./idna.gs.ts"

export const base: number = 36

export const damp: number = 700

export const initialBias: number = 72

export const initialN: number = 128

export const skew: number = 38

export const tmax: number = 26

export const tmin: number = 1

export function punyError(s: string): $.GoError {
	return $.interfaceValue<$.GoError>((() => { const __goscriptLiteralField0 = __goscript_idna.code16("A3", "P4"); return new __goscript_idna.labelError({label: s, code_: __goscriptLiteralField0}) })(), "*idna.labelError", /* @__PURE__ */ $.pointerType("idna.labelError"))
}

export function decode(encoded: string): [string, $.GoError] {
	if ($.stringEqual(encoded, "")) {
		return ["", null]
	}
	let pos = 1 + strings.LastIndex(encoded, "-")
	if (pos == 1) {
		return ["", punyError(encoded)]
	}
	if (pos == $.stringLen(encoded)) {
		return [$.sliceStringOrBytes(encoded, undefined, $.stringLen(encoded) - 1), null]
	}
	let output: $.Slice<number> = $.makeSlice<number>(0, $.stringLen(encoded), "number")
	if (pos != 0) {
		for (let __goscriptRunes0 = $.stringRunes($.sliceStringOrBytes(encoded, undefined, pos - 1)); __goscriptRunes0.next(); ) {
			const r = __goscriptRunes0.rune
			output = $.appendOne(output, $.int(r, 32))
		}
	}
	let i = 0
	let n = 128
	let bias = 72
	let overflow = false
	while (pos < $.stringLen(encoded)) {
		let oldI = i
		let w = 1
		for (let k = 36; ; k = $.int(k + (36), 32)) {
			if (pos == $.stringLen(encoded)) {
				return ["", punyError(encoded)]
			}
			let [digit, ok] = decodeDigit($.indexString(encoded, pos))
			if (!ok) {
				return ["", punyError(encoded)]
			}
			pos++
			let __goscriptTuple0: any = madd(i, digit, w)
			i = __goscriptTuple0[0]
			overflow = __goscriptTuple0[1]
			if (overflow) {
				return ["", punyError(encoded)]
			}
			let t = $.int(((k - bias) | 0), 32)
			if (k <= bias) {
				t = 1
			} else {
				if (k >= $.int((((bias + 26) | 0)), 32)) {
					t = 26
				}
			}
			if (digit < t) {
				break
			}
			let __goscriptTuple1: any = madd(0, w, $.int(((36 - t) | 0), 32))
			w = __goscriptTuple1[0]
			overflow = __goscriptTuple1[1]
			if (overflow) {
				return ["", punyError(encoded)]
			}
		}
		if ($.sliceLen(output) >= 1024) {
			return ["", punyError(encoded)]
		}
		let x = $.int($.sliceLen(output) + 1, 32)
		bias = adapt($.int(((i - oldI) | 0), 32), x, oldI == 0)
		n = $.int(n + ($.int(globalThis.Math.trunc(i / x), 32)), 32)
		i = i % (x)
		if ((n < 0) || (n > 1114111)) {
			return ["", punyError(encoded)]
		}
		output = $.appendOne(output, $.int(0, 32))
		$.copy($.goSlice(output, ((i + 1) | 0), undefined), $.goSlice(output, i, undefined))
		$.sliceElems(output!)[$.sliceSlot(output!, i)] = n
		i = ((i + 1) | 0)
	}
	return [$.runesToString(output), null]
}

export function encode(prefix: string, s: string): [string, $.GoError] {
	let output: $.Slice<number> = $.makeSlice<number>($.stringLen(prefix), ($.stringLen(prefix) + 1) + (2 * $.stringLen(s)), "byte")
	$.copy(output, prefix)
	let delta = 0
	let n = 128
	let bias = 72
	let b = 0
	let remaining = 0
	for (let __goscriptRunes1 = $.stringRunes(s); __goscriptRunes1.next(); ) {
		const r = __goscriptRunes1.rune
		if (true && (r == 0xfffd)) {
			return [s, $.interfaceValue<$.GoError>(new __goscript_idna.labelError({label: s, code_: "A3"}), "*idna.labelError", /* @__PURE__ */ $.pointerType("idna.labelError"))]
		}
		if (r < 0x80) {
			b = ((b + 1) | 0)
			output = $.append(output, $.uint($.uint(r, 8), 8), $.byteSliceHint)
		} else {
			remaining = ((remaining + 1) | 0)
		}
	}
	let h = b
	if (b > 0) {
		output = $.append(output, $.uint(45, 8), $.byteSliceHint)
	}
	let overflow = false
	while (remaining != 0) {
		let m = 2147483647
		for (let __goscriptRunes2 = $.stringRunes(s); __goscriptRunes2.next(); ) {
			const r = __goscriptRunes2.rune
			if ((m > r) && (r >= n)) {
				m = r
			}
		}
		let __goscriptTuple2: any = madd(delta, $.int(((m - n) | 0), 32), $.int(((h + 1) | 0), 32))
		delta = __goscriptTuple2[0]
		overflow = __goscriptTuple2[1]
		if (overflow) {
			return ["", punyError(s)]
		}
		n = m
		for (let __goscriptRunes3 = $.stringRunes(s); __goscriptRunes3.next(); ) {
			const r = __goscriptRunes3.rune
			if (r < n) {
				delta = ((delta + 1) | 0)
				if (delta < 0) {
					return ["", punyError(s)]
				}
				continue
			}
			if (r > n) {
				continue
			}
			let q = delta
			for (let k = 36; ; k = $.int(k + (36), 32)) {
				let t = $.int(((k - bias) | 0), 32)
				if (k <= bias) {
					t = 1
				} else {
					if (k >= $.int((((bias + 26) | 0)), 32)) {
						t = 26
					}
				}
				if (q < t) {
					break
				}
				output = $.append(output, $.uint(encodeDigit($.int(((t + ((((q - t) | 0)) % (((36 - t) | 0)))) | 0), 32)), 8), $.byteSliceHint)
				q = $.int(globalThis.Math.trunc((((q - t) | 0)) / (((36 - t) | 0))), 32)
			}
			output = $.append(output, $.uint(encodeDigit(q), 8), $.byteSliceHint)
			bias = adapt(delta, $.int(((h + 1) | 0), 32), h == b)
			delta = 0
			h = ((h + 1) | 0)
			remaining = ((remaining - 1) | 0)
		}
		delta = ((delta + 1) | 0)
		n = ((n + 1) | 0)
	}
	return [$.bytesToString(output), null]
}

export function madd(a: number, b: number, c: number): [number, boolean] {
	let next: number = 0
	let overflow: boolean = false
	let p = $.int64Mul($.int64(b), $.int64(c))
	if (p > ($.int64Sub(2147483647n, $.int64(a)))) {
		return [0, true]
	}
	return [$.int(((a + $.int(p, 32)) | 0), 32), false]
}

export function decodeDigit(x: number): [number, boolean] {
	let digit: number = 0
	let ok: boolean = false
	switch ((true as boolean)) {
		case (48 <= x) && (x <= 57):
		{
			return [$.int($.uint(((x - (((48 - 26) & 0xff))) & 0xff), 8), 32), true]
			break
		}
		case (65 <= x) && (x <= 90):
		{
			return [$.int($.uint(((x - 65) & 0xff), 8), 32), true]
			break
		}
		case (97 <= x) && (x <= 122):
		{
			return [$.int($.uint(((x - 97) & 0xff), 8), 32), true]
			break
		}
	}
	return [0, false]
}

export function encodeDigit(digit: number): number {
	switch ((true as boolean)) {
		case (0 <= digit) && (digit < 26):
		{
			return $.uint($.int(((digit + 97) | 0), 32), 8)
			break
		}
		case (26 <= digit) && (digit < 36):
		{
			return $.uint($.int(((digit + (((48 - 26) | 0))) | 0), 32), 8)
			break
		}
	}
	$.panic("idna: internal error in punycode encoding")
	throw new globalThis.Error("goscript: unreachable return")
}

export function adapt(delta: number, numPoints: number, firstTime: boolean): number {
	if (firstTime) {
		delta = globalThis.Math.trunc(delta / 700)
	} else {
		delta = globalThis.Math.trunc(delta / 2)
	}
	delta = $.int(delta + ($.int(globalThis.Math.trunc(delta / numPoints), 32)), 32)
	let k = 0
	while (delta > 455) {
		delta = globalThis.Math.trunc(delta / 35)
		k = $.int(k + (36), 32)
	}
	return $.int(((k + (globalThis.Math.trunc((globalThis.Math.imul(((((((36 - 1) | 0)) + 1) | 0)), delta)) / (((delta + 38) | 0))))) | 0), 32)
}
