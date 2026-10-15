// Generated file based on parse.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as ioutil from "@goscript/io/ioutil/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as strings from "@goscript/strings/index.js"
import "@goscript/io/ioutil/index.js"
import "@goscript/strconv/index.js"
import "@goscript/strings/index.js"

export function ParseUint32s(ss: $.Slice<string>): [$.Slice<number>, $.GoError] {
	let us: $.Slice<number> = $.makeSlice<number>(0, $.sliceLen(ss), "number")
	for (let __goscriptRangeTarget0 = ss, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let s = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string)
		let [u, err] = strconv.ParseUint(s, 10, 32)
		if (err != null) {
			return [null, err]
		}

		us = $.appendOne(us, $.uint($.uint(u, 32), 32))
	}

	return [us, null]
}

export function ParseUint64s(ss: $.Slice<string>): [$.Slice<bigint>, $.GoError] {
	let us: $.Slice<bigint> = $.makeSlice<bigint>(0, $.sliceLen(ss), "number")
	for (let __goscriptRangeTarget1 = ss, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
		let s = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as string)
		let [u, err] = strconv.ParseUint(s, 10, 64)
		if (err != null) {
			return [null, err]
		}

		us = $.appendOne(us, u)
	}

	return [us, null]
}

export function ParsePInt64s(ss: $.Slice<string>): [$.Slice<$.VarRef<bigint> | null>, $.GoError] {
	let us: $.Slice<$.VarRef<bigint> | null> = $.makeSlice<$.VarRef<bigint> | null>(0, $.sliceLen(ss))
	for (let __goscriptRangeTarget2 = ss, __goscriptRangeWindow2 = $.sliceRange(__goscriptRangeTarget2), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow2.length; __rangeIndex++) {
		let s = (__goscriptRangeWindow2.backing[__goscriptRangeWindow2.offset + __rangeIndex] as string)
		let __goscriptTuple0: any = strconv.ParseInt(s, 10, 64)
		let u = $.varRef(__goscriptTuple0[0])
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, err]
		}

		us = $.appendOne(us, u, $.appendZeros.nil)
	}

	return [us, null]
}

export async function ReadUintFromFile(path: string): globalThis.Promise<[bigint, $.GoError]> {
	let __goscriptTuple1: any = await ioutil.ReadFile(path)
	let data: $.Slice<number> = __goscriptTuple1[0]
	let err = __goscriptTuple1[1]
	if (err != null) {
		return [0n, err]
	}
	return strconv.ParseUint(strings.TrimSpace($.bytesToString(data)), 10, 64)
}

export async function ReadIntFromFile(path: string): globalThis.Promise<[bigint, $.GoError]> {
	let __goscriptTuple2: any = await ioutil.ReadFile(path)
	let data: $.Slice<number> = __goscriptTuple2[0]
	let err = __goscriptTuple2[1]
	if (err != null) {
		return [0n, err]
	}
	return strconv.ParseInt(strings.TrimSpace($.bytesToString(data)), 10, 64)
}

export function ParseBool(b: string): $.VarRef<boolean> | null {
	let truth: $.VarRef<boolean> = $.varRef(false)
	switch (b) {
		case "enabled":
		{
			truth.value = true
			break
		}
		case "disabled":
		{
			truth.value = false
			break
		}
		default:
		{
			return null
			break
		}
	}
	return truth
}
