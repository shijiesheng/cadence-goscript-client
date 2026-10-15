// Generated file based on strings.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytealg from "@goscript/internal/bytealg/index.js"

import * as unsafe from "@goscript/unsafe/index.js"
import "@goscript/internal/bytealg/index.js"
import "@goscript/unsafe/index.js"

export function HasPrefix(s: string, prefix: string): boolean {
	return ($.stringLen(s) >= $.stringLen(prefix)) && ($.stringEqual($.sliceStringOrBytes(s, undefined, $.stringLen(prefix)), prefix))
}

export function HasSuffix(s: string, suffix: string): boolean {
	return ($.stringLen(s) >= $.stringLen(suffix)) && ($.stringEqual($.sliceStringOrBytes(s, $.stringLen(s) - $.stringLen(suffix), undefined), suffix))
}

export function IndexByte(s: string, c: number): number {
	return bytealg.IndexByteString(s, c)
}

export function Index(s: string, substr: string): number {
	let n = $.stringLen(substr)
	switch ((true as boolean)) {
		case (n == 0) || ($.stringEqual(substr, s)):
		{
			return 0
			break
		}
		case n == 1:
		{
			return IndexByte(s, $.indexString(substr, 0))
			break
		}
		case n >= $.stringLen(s):
		{
			return -1
			break
		}
		case (n <= bytealg.MaxLen) && ($.stringLen(s) <= 0):
		{
			return bytealg.IndexString(s, substr)
			break
		}
	}
	let c0 = $.indexString(substr, 0)
	let c1 = $.indexString(substr, 1)
	let i = 0
	let t = ($.stringLen(s) - n) + 1
	let fails = 0
	while (i < t) {
		if ($.indexString(s, i) != c0) {
			// IndexByte is faster than bytealg.IndexString, so use it as long as
			// we're not getting lots of false positives.
			let o = IndexByte($.sliceStringOrBytes(s, i + 1, t), c0)
			if (o < 0) {
				return -1
			}
			i = i + (o + 1)
		}
		if (($.indexString(s, i + 1) == c1) && ($.stringEqual($.sliceStringOrBytes(s, i, i + n), substr))) {
			return i
		}
		i++
		fails++
		if ((n <= bytealg.MaxLen) && (fails > bytealg.Cutover(i))) {
			// Switch to bytealg.IndexString when IndexByte produces too many false positives.
			let r = bytealg.IndexString($.sliceStringOrBytes(s, i, undefined), substr)
			if (r >= 0) {
				return r + i
			}
			return -1
		} else {
			if (((n > bytealg.MaxLen) && (fails >= (4 + (i >> 4)))) && (i < t)) {
				// See comment in ../bytes/bytes.go.
				let j = bytealg.IndexRabinKarp($.sliceStringOrBytes(s, i, undefined), substr)
				if (j < 0) {
					return -1
				}
				return i + j
			}
		}
	}
	return -1
}

export function Cut(s: string, sep: string): [string, string, boolean] {
	let before: string = ""
	let after: string = ""
	let found: boolean = false
	{
		let i = Index(s, sep)
		if (i >= 0) {
			return [$.sliceStringOrBytes(s, undefined, i), $.sliceStringOrBytes(s, i + $.stringLen(sep), undefined), true]
		}
	}
	return [s, "", false]
}

export function CutPrefix(s: string, prefix: string): [string, boolean] {
	let after: string = ""
	let found: boolean = false
	if (!HasPrefix(s, prefix)) {
		return [s, false]
	}
	return [$.sliceStringOrBytes(s, $.stringLen(prefix), undefined), true]
}

export function CutSuffix(s: string, suffix: string): [string, boolean] {
	let before: string = ""
	let found: boolean = false
	if (!HasSuffix(s, suffix)) {
		return [s, false]
	}
	return [$.sliceStringOrBytes(s, undefined, $.stringLen(s) - $.stringLen(suffix)), true]
}

export function TrimPrefix(s: string, prefix: string): string {
	if (HasPrefix(s, prefix)) {
		return $.sliceStringOrBytes(s, $.stringLen(prefix), undefined)
	}
	return s
}

export function TrimSuffix(s: string, suffix: string): string {
	if (HasSuffix(s, suffix)) {
		return $.sliceStringOrBytes(s, undefined, $.stringLen(s) - $.stringLen(suffix))
	}
	return s
}

export function Clone(s: string): string {
	if ($.stringLen(s) == 0) {
		return ""
	}
	let b: $.Slice<number> = $.makeSlice<number>($.stringLen(s), undefined, "byte")
	$.copy(b, s)
	return unsafe.String!($.indexRef(b!, 0), $.sliceLen(b))
}
