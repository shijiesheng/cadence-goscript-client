// Generated file based on strings.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as token from "@goscript/go/token/index.js"

import * as strings from "@goscript/strings/index.js"

import * as unicode from "@goscript/unicode/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as flags from "@goscript/google.golang.org/protobuf/internal/flags/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "@goscript/go/token/index.js"
import "@goscript/strings/index.js"
import "@goscript/unicode/index.js"
import "@goscript/unicode/utf8/index.js"
import "@goscript/google.golang.org/protobuf/internal/flags/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

export async function EnforceUTF8(fd: protoreflect.FieldDescriptor | null): globalThis.Promise<boolean> {
	if (flags.ProtoLegacy || ((__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Syntax(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 4)) {
		let __goscriptShadow0 = fd
		{
			let __goscriptTuple0: any = $.typeAssertTuple<any>(__goscriptShadow0, { kind: $.TypeKind.Interface, methods: [{ name: "EnforceUTF8", args: [], returns: [{ name: "_r0", type: /* @__PURE__ */ $.basicType("bool") }] }] })
			let __goscriptShadow1 = __goscriptTuple0[0]
			let ok = __goscriptTuple0[1]
			if (ok) {
				return (__goscriptShadow1 !== null && (__goscriptShadow1 as any).__isVarRef !== true && (__goscriptShadow1 as any).__goValue === undefined ? (__goscriptShadow1 as any) : $.pointerValue<any>(__goscriptShadow1)).EnforceUTF8()
			}
		}
	}
	return (__goscriptAwait = (fd !== null && (fd as any).__isVarRef !== true && (fd as any).__goValue === undefined ? (fd as Exclude<protoreflect.FieldDescriptor, null>) : $.pointerValue<Exclude<protoreflect.FieldDescriptor, null>>(fd)).Syntax(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 3
}

export function GoCamelCase(s: string): string {
	// Invariant: if the next letter is lower case, it must be converted
	// to upper case.
	// That is, we process a word at a time, where words are marked by _ or
	// upper case letter. Digits are treated as words.
	let b: $.Slice<number> = null! as $.Slice<number>
	for (let i = 0; i < $.stringLen(s); i++) {
		let c = $.indexString(s, i)
		switch ((true as boolean)) {
			case ((c == 46) && ((i + 1) < $.stringLen(s))) && isASCIILower($.indexString(s, i + 1)):
			{
				break
			}
			case c == 46:
			{
				b = $.append(b, $.uint(95, 8), $.byteSliceHint)
				break
			}
			case (c == 95) && ((i == 0) || ($.indexString(s, i - 1) == 46)):
			{
				b = $.append(b, $.uint(88, 8), $.byteSliceHint)
				break
			}
			case ((c == 95) && ((i + 1) < $.stringLen(s))) && isASCIILower($.indexString(s, i + 1)):
			{
				break
			}
			case isASCIIDigit(c):
			{
				b = $.append(b, $.uint(c, 8), $.byteSliceHint)
				break
			}
			default:
			{
				if (isASCIILower(c)) {
					c = $.uint(c - (32), 8)
				}
				b = $.append(b, $.uint(c, 8), $.byteSliceHint)

				// Accept lower case sequence that follows.
				for (; ((i + 1) < $.stringLen(s)) && isASCIILower($.indexString(s, i + 1)); i++) {
					b = $.append(b, $.uint($.indexString(s, i + 1), 8), $.byteSliceHint)
				}
				break
			}
		}
	}
	return $.bytesToString(b)
}

export function GoSanitized(s: string): string {
	// Sanitize the input to the set of valid characters,
	// which must be '_' or be in the Unicode L or N categories.
	s = strings.Map($.functionValue((r: number): number => {
		if (unicode.IsLetter(r) || unicode.IsDigit(r)) {
			return r
		}
		return 95
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int32")], results: [/* @__PURE__ */ $.basicType("int32")] } as $.FunctionTypeInfo)), s)

	// Prepend '_' in the event of a Go keyword conflict or if
	// the identifier is invalid (does not start in the Unicode L category).
	let [r, ] = utf8.DecodeRuneInString(s)
	if (token.Token_IsKeyword(token.Lookup(s)) || !unicode.IsLetter(r)) {
		return $.concatString("_", s)
	}
	return s
}

export function JSONCamelCase(s: string): string {
	let b: $.Slice<number> = null! as $.Slice<number>
	let wasUnderscore: boolean = false
	for (let i = 0; i < $.stringLen(s); i++) {
		let c = $.indexString(s, i)
		if (c != 95) {
			if (wasUnderscore && isASCIILower(c)) {
				c = $.uint(c - (32), 8)
			}
			b = $.append(b, $.uint(c, 8), $.byteSliceHint)
		}
		wasUnderscore = c == 95
	}
	return $.bytesToString(b)
}

export function JSONSnakeCase(s: string): string {
	let b: $.Slice<number> = null! as $.Slice<number>
	for (let i = 0; i < $.stringLen(s); i++) {
		let c = $.indexString(s, i)
		if (isASCIIUpper(c)) {
			b = $.append(b, $.uint(95, 8), $.byteSliceHint)
			c = $.uint(c + (32), 8)
		}
		b = $.append(b, $.uint(c, 8), $.byteSliceHint)
	}
	return $.bytesToString(b)
}

export function MapEntryName(s: string): string {
	let b: $.Slice<number> = null! as $.Slice<number>
	let upperNext = true
	for (let __goscriptRunes0 = $.stringRunes(s); __goscriptRunes0.next(); ) {
		const c = __goscriptRunes0.rune
		switch ((true as boolean)) {
			case c == 95:
			{
				upperNext = true
				break
			}
			case upperNext:
			{
				b = $.append(b, $.uint($.uint(unicode.ToUpper(c), 8), 8), $.byteSliceHint)
				upperNext = false
				break
			}
			default:
			{
				b = $.append(b, $.uint($.uint(c, 8), 8), $.byteSliceHint)
				break
			}
		}
	}
	b = $.appendSlice(b, $.stringToBytes("Entry"), $.byteSliceHint)
	return $.bytesToString(b)
}

export function EnumValueName(s: string): string {
	let b: $.Slice<number> = null! as $.Slice<number>
	let upperNext = true
	for (let __goscriptRunes1 = $.stringRunes(s); __goscriptRunes1.next(); ) {
		const c = __goscriptRunes1.rune
		switch ((true as boolean)) {
			case c == 95:
			{
				upperNext = true
				break
			}
			case upperNext:
			{
				b = $.append(b, $.uint($.uint(unicode.ToUpper(c), 8), 8), $.byteSliceHint)
				upperNext = false
				break
			}
			default:
			{
				b = $.append(b, $.uint($.uint(unicode.ToLower(c), 8), 8), $.byteSliceHint)
				upperNext = false
				break
			}
		}
	}
	return $.bytesToString(b)
}

export function TrimEnumPrefix(s: string, prefix: string): string {
	let s0 = s
	while (($.stringLen(s) > 0) && ($.stringLen(prefix) > 0)) {
		if ($.indexString(s, 0) == 95) {
			s = $.sliceStringOrBytes(s, 1, undefined)
			continue
		}
		if (unicode.ToLower($.int($.indexString(s, 0), 32)) != $.int($.indexString(prefix, 0), 32)) {
			return s0
		}
		let __goscriptAssign0_0: string = $.sliceStringOrBytes(s, 1, undefined)
		let __goscriptAssign0_1: string = $.sliceStringOrBytes(prefix, 1, undefined)
		s = __goscriptAssign0_0
		prefix = __goscriptAssign0_1
	}
	if ($.stringLen(prefix) > 0) {
		return s0
	}
	s = strings.TrimLeft(s, "_")
	if ($.stringLen(s) == 0) {
		return s0
	}
	return s
}

export function isASCIILower(c: number): boolean {
	return (97 <= c) && (c <= 122)
}

export function isASCIIUpper(c: number): boolean {
	return (65 <= c) && (c <= 90)
}

export function isASCIIDigit(c: number): boolean {
	return (48 <= c) && (c <= 57)
}

var __goscriptAwait: any
