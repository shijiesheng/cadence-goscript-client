// Generated file based on decode_number.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as __goscript_decode from "./decode.gs.ts"

import type * as __goscript_decode_string from "./decode_string.gs.ts"

import * as __goscript_decode_token from "./decode_token.gs.ts"
import "./decode.gs.ts"
import "./decode_token.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/encoding/text", ["text.number"])

export class _number {
	public get kind(): number {
		return this._fields.kind
	}

	public set kind(value: number) {
		this._fields.kind = value
	}

	public get neg(): boolean {
		return this._fields.neg
	}

	public set neg(value: boolean) {
		this._fields.neg = value
	}

	public get size(): number {
		return this._fields.size
	}

	public set size(value: number) {
		this._fields.size = value
	}

	// if neg, this is the length of whitespace and comments between
	// the minus sign and the rest fo the number literal
	public get sep(): number {
		return this._fields.sep
	}

	public set sep(value: number) {
		this._fields.sep = value
	}

	public _fields: {
		kind: number
		neg: boolean
		size: number
		sep: number
	}

	constructor(init?: Partial<{kind?: number, neg?: boolean, size?: number, sep?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			kind: init?.kind ?? (0 as number),
			neg: init?.neg ?? (false as boolean),
			size: init?.size ?? (0 as number),
			sep: init?.sep ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): _number {
		return new _number(this, true)
	}

	public __goscriptAssign(source: _number): void {
		const target = this._fields
		const values = source._fields
		target.kind = values.kind
		target.neg = values.neg
		target.size = values.size
		target.sep = values.sep
	}

	public ["string"](data: $.Slice<number>): string {
		const num = this;
		let strSize = num.size
		let last = num.size - 1
		if ((num.kind == 4) && (($.arrayIndex(data!, last) == 102) || ($.arrayIndex(data!, last) == 70))) {
			strSize = last
		}
		if (num.neg && (num.sep > 0)) {
			// strip whitespace/comments between negative sign and the rest
			let strLen = strSize - num.sep
			let str: $.Slice<number> = $.makeSlice<number>(strLen, undefined, "byte")
			$.sliceElems(str!)[$.sliceSlot(str!, 0)] = $.arrayIndex(data!, 0)
			$.copy($.goSlice(str, 1, undefined), $.goSlice(data, num.sep + 1, strSize))
			return $.bytesToString(str)
		}
		return $.bytesToString($.goSlice(data, undefined, strSize))
	}

	static __typeInfo = $.registerStructType(
		"text.number",
		() => new _number(),
		() => [$.methodSignature("string", [["data", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [/* @__PURE__ */ $.basicType("string")])],
		_number,
		() => [/* @__PURE__ */ $.structField("kind", /* @__PURE__ */ $.basicType("uint8"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" }), /* @__PURE__ */ $.structField("neg", /* @__PURE__ */ $.basicType("bool"), [1], 1, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" }), /* @__PURE__ */ $.structField("size", /* @__PURE__ */ $.basicType("int"), [2], 8, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" }), /* @__PURE__ */ $.structField("sep", /* @__PURE__ */ $.basicType("int"), [3], 16, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/text" })]
	)
}

export const numDec: number = 0

export const numHex: number = 1

export const numOct: number = 2

export const numFloat: number = 4

export function parseNumber(input: $.Slice<number>): _number {
	let kind = 0
	let size: number = 0
	let neg: boolean = false

	let s: $.Slice<number> = input
	if ($.sliceLen(s) == 0) {
		return new _number(undefined, true)
	}

	// Optional -
	let sep: number = 0
	if ($.arrayIndex(s!, 0) == 45) {
		neg = true
		s = $.goSlice(s, 1, undefined)
		size++
		// Consume any whitespace or comments between the
		// negative sign and the rest of the number
		let lenBefore = $.sliceLen(s)
		s = __goscript_decode.consume(s, 0)
		sep = lenBefore - $.sliceLen(s)
		size = size + (sep)
		if ($.sliceLen(s) == 0) {
			return new _number(undefined, true)
		}
	}

	switch ((true as boolean)) {
		case $.arrayIndex(s!, 0) == 48:
		{
			if ($.sliceLen(s) > 1) {
				switch ((true as boolean)) {
					case ($.arrayIndex(s!, 1) == 120) || ($.arrayIndex(s!, 1) == 88):
					{
						kind = 1
						let n = 2
						s = $.goSlice(s, 2, undefined)
						while (($.sliceLen(s) > 0) && ((((48 <= $.arrayIndex(s!, 0)) && ($.arrayIndex(s!, 0) <= 57)) || ((97 <= $.arrayIndex(s!, 0)) && ($.arrayIndex(s!, 0) <= 102))) || ((65 <= $.arrayIndex(s!, 0)) && ($.arrayIndex(s!, 0) <= 70)))) {
							s = $.goSlice(s, 1, undefined)
							n++
						}
						if (n == 2) {
							return new _number(undefined, true)
						}
						size = size + (n)
						break
					}
					case (48 <= $.arrayIndex(s!, 1)) && ($.arrayIndex(s!, 1) <= 55):
					{
						kind = 2
						let n = 2
						s = $.goSlice(s, 2, undefined)
						while ((($.sliceLen(s) > 0) && (48 <= $.arrayIndex(s!, 0))) && ($.arrayIndex(s!, 0) <= 55)) {
							s = $.goSlice(s, 1, undefined)
							n++
						}
						size = size + (n)
						break
					}
				}

				if ($.uint((kind & (1 | 2)), 8) > 0) {
					if (($.sliceLen(s) > 0) && !__goscript_decode.isDelim($.arrayIndex(s!, 0))) {
						return new _number(undefined, true)
					}
					return new _number({kind: kind, neg: neg, size: size, sep: sep}, true)
				}
			}
			s = $.goSlice(s, 1, undefined)
			size++
			break
		}
		case (49 <= $.arrayIndex(s!, 0)) && ($.arrayIndex(s!, 0) <= 57):
		{
			let n = 1
			s = $.goSlice(s, 1, undefined)
			while ((($.sliceLen(s) > 0) && (48 <= $.arrayIndex(s!, 0))) && ($.arrayIndex(s!, 0) <= 57)) {
				s = $.goSlice(s, 1, undefined)
				n++
			}
			size = size + (n)
			break
		}
		case $.arrayIndex(s!, 0) == 46:
		{
			kind = 4
			break
		}
		default:
		{
			return new _number(undefined, true)
			break
		}
	}

	// . followed by 0 or more digits.
	if (($.sliceLen(s) > 0) && ($.arrayIndex(s!, 0) == 46)) {
		let n = 1
		s = $.goSlice(s, 1, undefined)
		// If decimal point was before any digits, it should be followed by
		// other digits.
		if (($.sliceLen(s) == 0) && (kind == 4)) {
			return new _number(undefined, true)
		}
		while ((($.sliceLen(s) > 0) && (48 <= $.arrayIndex(s!, 0))) && ($.arrayIndex(s!, 0) <= 57)) {
			s = $.goSlice(s, 1, undefined)
			n++
		}
		size = size + (n)
		kind = 4
	}

	// e or E followed by an optional - or + and 1 or more digits.
	if (($.sliceLen(s) >= 2) && (($.arrayIndex(s!, 0) == 101) || ($.arrayIndex(s!, 0) == 69))) {
		kind = 4
		s = $.goSlice(s, 1, undefined)
		let n = 1
		if (($.arrayIndex(s!, 0) == 43) || ($.arrayIndex(s!, 0) == 45)) {
			s = $.goSlice(s, 1, undefined)
			n++
			if ($.sliceLen(s) == 0) {
				return new _number(undefined, true)
			}
		}
		while ((($.sliceLen(s) > 0) && (48 <= $.arrayIndex(s!, 0))) && ($.arrayIndex(s!, 0) <= 57)) {
			s = $.goSlice(s, 1, undefined)
			n++
		}
		size = size + (n)
	}

	// Optional suffix f or F for floats.
	if (($.sliceLen(s) > 0) && (($.arrayIndex(s!, 0) == 102) || ($.arrayIndex(s!, 0) == 70))) {
		kind = 4
		s = $.goSlice(s, 1, undefined)
		size++
	}

	// Check that next byte is a delimiter or it is at the end.
	if (($.sliceLen(s) > 0) && !__goscript_decode.isDelim($.arrayIndex(s!, 0))) {
		return new _number(undefined, true)
	}

	return new _number({kind: kind, neg: neg, size: size, sep: sep}, true)
}
