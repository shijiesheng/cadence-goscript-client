// Generated file based on decode_number.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as __goscript_decode from "./decode.gs.ts"
import "@goscript/bytes/index.js"
import "@goscript/strconv/index.js"
import "./decode.gs.ts"

$.registerTypePackagePath("google.golang.org/protobuf/internal/encoding/json", ["json.numberParts"])

export class numberParts {
	public get neg(): boolean {
		return this._fields.neg
	}

	public set neg(value: boolean) {
		this._fields.neg = value
	}

	public get intp(): $.Slice<number> {
		return this._fields.intp
	}

	public set intp(value: $.Slice<number>) {
		this._fields.intp = value
	}

	public get frac(): $.Slice<number> {
		return this._fields.frac
	}

	public set frac(value: $.Slice<number>) {
		this._fields.frac = value
	}

	public get exp(): $.Slice<number> {
		return this._fields.exp
	}

	public set exp(value: $.Slice<number>) {
		this._fields.exp = value
	}

	public _fields: {
		neg: boolean
		intp: $.Slice<number>
		frac: $.Slice<number>
		exp: $.Slice<number>
	}

	constructor(init?: Partial<{neg?: boolean, intp?: $.Slice<number>, frac?: $.Slice<number>, exp?: $.Slice<number>}>, __goscriptValue?: boolean) {
		this._fields = {
			neg: init?.neg ?? (false as boolean),
			intp: init?.intp ?? (null! as $.Slice<number>),
			frac: init?.frac ?? (null! as $.Slice<number>),
			exp: init?.exp ?? (null! as $.Slice<number>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): numberParts {
		return new numberParts(this, true)
	}

	public __goscriptAssign(source: numberParts): void {
		const target = this._fields
		const values = source._fields
		target.neg = values.neg
		target.intp = values.intp
		target.frac = values.frac
		target.exp = values.exp
	}

	static __typeInfo = $.registerStructType(
		"json.numberParts",
		() => new numberParts(),
		() => [],
		numberParts,
		() => [/* @__PURE__ */ $.structField("neg", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" }), /* @__PURE__ */ $.structField("intp", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [1], 8, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" }), /* @__PURE__ */ $.structField("frac", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [2], 32, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" }), /* @__PURE__ */ $.structField("exp", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), [3], 56, false, { pkgPath: "google.golang.org/protobuf/internal/encoding/json" })]
	)
}

export function parseNumber(input: $.Slice<number>): [number, boolean] {
	let n: number = 0

	let s: $.Slice<number> = input
	if ($.sliceLen(s) == 0) {
		return [0, false]
	}

	// Optional -
	if ($.arrayIndex(s!, 0) == 45) {
		s = $.goSlice(s, 1, undefined)
		n++
		if ($.sliceLen(s) == 0) {
			return [0, false]
		}
	}

	// Digits
	switch ((true as boolean)) {
		case $.arrayIndex(s!, 0) == 48:
		{
			s = $.goSlice(s, 1, undefined)
			n++
			break
		}
		case (49 <= $.arrayIndex(s!, 0)) && ($.arrayIndex(s!, 0) <= 57):
		{
			s = $.goSlice(s, 1, undefined)
			n++
			while ((($.sliceLen(s) > 0) && (48 <= $.arrayIndex(s!, 0))) && ($.arrayIndex(s!, 0) <= 57)) {
				s = $.goSlice(s, 1, undefined)
				n++
			}
			break
		}
		default:
		{
			return [0, false]
			break
		}
	}

	// . followed by 1 or more digits.
	if (((($.sliceLen(s) >= 2) && ($.arrayIndex(s!, 0) == 46)) && (48 <= $.arrayIndex(s!, 1))) && ($.arrayIndex(s!, 1) <= 57)) {
		s = $.goSlice(s, 2, undefined)
		n = n + (2)
		while ((($.sliceLen(s) > 0) && (48 <= $.arrayIndex(s!, 0))) && ($.arrayIndex(s!, 0) <= 57)) {
			s = $.goSlice(s, 1, undefined)
			n++
		}
	}

	// e or E followed by an optional - or + and
	// 1 or more digits.
	if (($.sliceLen(s) >= 2) && (($.arrayIndex(s!, 0) == 101) || ($.arrayIndex(s!, 0) == 69))) {
		s = $.goSlice(s, 1, undefined)
		n++
		if (($.arrayIndex(s!, 0) == 43) || ($.arrayIndex(s!, 0) == 45)) {
			s = $.goSlice(s, 1, undefined)
			n++
			if ($.sliceLen(s) == 0) {
				return [0, false]
			}
		}
		while ((($.sliceLen(s) > 0) && (48 <= $.arrayIndex(s!, 0))) && ($.arrayIndex(s!, 0) <= 57)) {
			s = $.goSlice(s, 1, undefined)
			n++
		}
	}

	// Check that next byte is a delimiter or it is at the end.
	if ((n < $.sliceLen(input)) && __goscript_decode.isNotDelim($.arrayIndex(input!, n))) {
		return [0, false]
	}

	return [n, true]
}

export function parseNumberParts(input: $.Slice<number>): [numberParts, boolean] {
	let neg: boolean = false
	let intp: $.Slice<number> = null! as $.Slice<number>
	let frac: $.Slice<number> = null! as $.Slice<number>
	let exp: $.Slice<number> = null! as $.Slice<number>

	let s: $.Slice<number> = input
	if ($.sliceLen(s) == 0) {
		return [new numberParts(undefined, true), false]
	}

	// Optional -
	if ($.arrayIndex(s!, 0) == 45) {
		neg = true
		s = $.goSlice(s, 1, undefined)
		if ($.sliceLen(s) == 0) {
			return [new numberParts(undefined, true), false]
		}
	}

	// Digits
	switch ((true as boolean)) {
		case $.arrayIndex(s!, 0) == 48:
		{
			s = $.goSlice(s, 1, undefined)
			break
		}
		case (49 <= $.arrayIndex(s!, 0)) && ($.arrayIndex(s!, 0) <= 57):
		{
			intp = s
			let n = 1
			s = $.goSlice(s, 1, undefined)
			while ((($.sliceLen(s) > 0) && (48 <= $.arrayIndex(s!, 0))) && ($.arrayIndex(s!, 0) <= 57)) {
				s = $.goSlice(s, 1, undefined)
				n++
			}
			intp = $.goSlice(intp, undefined, n)
			break
		}
		default:
		{
			return [new numberParts(undefined, true), false]
			break
		}
	}

	// . followed by 1 or more digits.
	if (((($.sliceLen(s) >= 2) && ($.arrayIndex(s!, 0) == 46)) && (48 <= $.arrayIndex(s!, 1))) && ($.arrayIndex(s!, 1) <= 57)) {
		frac = $.goSlice(s, 1, undefined)
		let n = 1
		s = $.goSlice(s, 2, undefined)
		while ((($.sliceLen(s) > 0) && (48 <= $.arrayIndex(s!, 0))) && ($.arrayIndex(s!, 0) <= 57)) {
			s = $.goSlice(s, 1, undefined)
			n++
		}
		frac = $.goSlice(frac, undefined, n)
	}

	// e or E followed by an optional - or + and
	// 1 or more digits.
	if (($.sliceLen(s) >= 2) && (($.arrayIndex(s!, 0) == 101) || ($.arrayIndex(s!, 0) == 69))) {
		s = $.goSlice(s, 1, undefined)
		exp = s
		let n = 0
		if (($.arrayIndex(s!, 0) == 43) || ($.arrayIndex(s!, 0) == 45)) {
			s = $.goSlice(s, 1, undefined)
			n++
			if ($.sliceLen(s) == 0) {
				return [new numberParts(undefined, true), false]
			}
		}
		while ((($.sliceLen(s) > 0) && (48 <= $.arrayIndex(s!, 0))) && ($.arrayIndex(s!, 0) <= 57)) {
			s = $.goSlice(s, 1, undefined)
			n++
		}
		exp = $.goSlice(exp, undefined, n)
	}

	return [(() => { const __goscriptLiteralField0 = bytes.TrimRight(frac, "0"); return new numberParts({neg: neg, intp: intp, frac: __goscriptLiteralField0, exp: exp}, true) })(), true]
}

export function normalizeToIntString(n: numberParts): [string, boolean] {
	let intpSize = $.sliceLen(n.intp)
	let fracSize = $.sliceLen(n.frac)

	if ((intpSize == 0) && (fracSize == 0)) {
		return ["0", true]
	}

	let exp: number = 0
	if ($.sliceLen(n.exp) > 0) {
		let [i, err] = strconv.ParseInt($.bytesToString(n.exp), 10, 32)
		if (err != null) {
			return ["", false]
		}
		exp = $.int(i)
	}

	let num: $.Slice<number> = null! as $.Slice<number>
	if (exp >= 0) {
		// For positive E, shift fraction digits into integer part and also pad
		// with zeroes as needed.

		// If there are more digits in fraction than the E value, then the
		// number is not an integer.
		if (fracSize > exp) {
			return ["", false]
		}

		// Make sure resulting digits are within max value limit to avoid
		// unnecessarily constructing a large byte slice that may simply fail
		// later on.
		const maxDigits: number = 20
		if ((intpSize + exp) > 20) {
			return ["", false]
		}

		// Set cap to make a copy of integer part when appended.
		num = $.goSlice(n.intp, undefined, $.sliceLen(n.intp), $.sliceLen(n.intp))
		num = $.appendSlice(num, n.frac, $.byteSliceHint)
		for (let i = 0; i < (exp - fracSize); i++) {
			num = $.append(num, $.uint(48, 8), $.byteSliceHint)
		}
	} else {
		// For negative E, shift digits in integer part out.

		// If there are fractions, then the number is not an integer.
		if (fracSize > 0) {
			return ["", false]
		}

		// index is where the decimal point will be after adjusting for negative
		// exponent.
		let index = intpSize + exp
		if (index < 0) {
			return ["", false]
		}

		num = n.intp
		// If any of the digits being shifted to the right of the decimal point
		// is non-zero, then the number is not an integer.
		for (let __goscriptSliceWindow0 = $.sliceRange(num), i = index; i < intpSize; i++) {
			if (((__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] as number) != 48) {
				return ["", false]
			}
		}
		num = $.goSlice(num, undefined, index)
	}

	if (n.neg) {
		return [$.concatString("-", $.bytesToString(num)), true]
	}
	return [$.bytesToString(num), true]
}
