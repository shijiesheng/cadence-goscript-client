// Generated file based on spew.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as __goscript_format from "./format.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "./format.gs.ts"

export function Errorf(format: string, a: $.Slice<any>): $.GoError {
	let err: $.GoError = null! as $.GoError
	return fmt.Errorf(format, ...(convertArgs(a) ?? []))
}

export async function Fprint(w: io.Writer | null, a: $.Slice<any>): globalThis.Promise<[number, $.GoError]> {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	return fmt.Fprint($.pointerValueOrNil(w)!, ...(convertArgs(a) ?? []))
}

export async function Fprintf(w: io.Writer | null, format: string, a: $.Slice<any>): globalThis.Promise<[number, $.GoError]> {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	return fmt.Fprintf($.pointerValueOrNil(w)!, format, ...(convertArgs(a) ?? []))
}

export async function Fprintln(w: io.Writer | null, a: $.Slice<any>): globalThis.Promise<[number, $.GoError]> {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	return fmt.Fprintln($.pointerValueOrNil(w)!, ...(convertArgs(a) ?? []))
}

export async function Print(a: $.Slice<any>): globalThis.Promise<[number, $.GoError]> {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	return fmt.Print(...(convertArgs(a) ?? []))
}

export async function Printf(format: string, a: $.Slice<any>): globalThis.Promise<[number, $.GoError]> {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	return fmt.Printf(format, ...(convertArgs(a) ?? []))
}

export async function Println(a: $.Slice<any>): globalThis.Promise<[number, $.GoError]> {
	let n: number = 0
	let err: $.GoError = null! as $.GoError
	return fmt.Println(...(convertArgs(a) ?? []))
}

export async function Sprint(a: $.Slice<any>): globalThis.Promise<string> {
	return fmt.Sprint(...(convertArgs(a) ?? []))
}

export async function Sprintf(format: string, a: $.Slice<any>): globalThis.Promise<string> {
	return fmt.Sprintf(format, ...(convertArgs(a) ?? []))
}

export async function Sprintln(a: $.Slice<any>): globalThis.Promise<string> {
	return fmt.Sprintln(...(convertArgs(a) ?? []))
}

export function convertArgs(args: $.Slice<any>): $.Slice<any> {
	let formatters: $.Slice<any> = null! as $.Slice<any>
	formatters = $.makeSlice<any>($.sliceLen(args))
	for (let __goscriptRangeTarget0 = args, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __goscriptSliceWindow0 = $.sliceRange(formatters), index = 0; index < __goscriptRangeWindow0.length; index++) {
		let arg = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + index] as any);
		;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, index)] = (__goscript_format.NewFormatter(arg) as any)
	}
	return formatters
}
