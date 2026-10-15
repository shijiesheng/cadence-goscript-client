// Generated file based on prop.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as utf8 from "@goscript/unicode/utf8/index.js"

import * as __goscript_core from "./core.gs.ts"

import * as __goscript_tables17_0_0 from "./tables17.0.0.gs.ts"

import * as __goscript_trieval from "./trieval.gs.ts"
import "@goscript/unicode/utf8/index.js"
import "./core.gs.ts"
import "./tables17.0.0.gs.ts"
import "./trieval.gs.ts"

$.registerTypePackagePath("vendor/golang.org/x/text/unicode/bidi", ["bidi.Properties"])

export class Properties {
	public get entry(): number {
		return this._fields.entry
	}

	public set entry(value: number) {
		this._fields.entry = value
	}

	public get last(): number {
		return this._fields.last
	}

	public set last(value: number) {
		this._fields.last = value
	}

	public _fields: {
		entry: number
		last: number
	}

	constructor(init?: Partial<{entry?: number, last?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			entry: init?.entry ?? (0 as number),
			last: init?.last ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Properties {
		return new Properties(this, true)
	}

	public __goscriptAssign(source: Properties): void {
		const target = this._fields
		const values = source._fields
		target.entry = values.entry
		target.last = values.last
	}

	public Class(): __goscript_trieval.Class {
		const p = this;
		let c = $.uint(p.entry & 0x0F, 64)
		if (c == 14) {
			c = $.arrayIndex(__goscript_get_controlByteToClass(), p.last & 0xF)
		}
		return c
	}

	public IsBracket(): boolean {
		const p = this;
		return $.uint((p.entry & 0xF0), 8) != 0
	}

	public IsOpeningBracket(): boolean {
		const p = this;
		return $.uint((p.entry & 16), 8) != 0
	}

	public reverseBracket(r: number): number {
		const p = this;
		return $.int($.arrayIndex(__goscript_tables17_0_0.xorMasks!, $.uintShr(p.entry, 5, 8)) ^ r, 32)
	}

	static __typeInfo = $.registerStructType(
		"bidi.Properties",
		() => new Properties(),
		() => [$.methodSignature("Class", [], [/* @__PURE__ */ $.basicType("uint", "bidi.Class")]), $.methodSignature("IsBracket", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("IsOpeningBracket", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("reverseBracket", [["r", /* @__PURE__ */ $.basicType("int32")]], [/* @__PURE__ */ $.basicType("int32")])],
		Properties,
		() => [/* @__PURE__ */ $.structField("entry", /* @__PURE__ */ $.basicType("uint8"), [0], 0, false, { pkgPath: "vendor/golang.org/x/text/unicode/bidi" }), /* @__PURE__ */ $.structField("last", /* @__PURE__ */ $.basicType("uint8"), [1], 1, false, { pkgPath: "vendor/golang.org/x/text/unicode/bidi" })]
	)
}

export var trie: __goscript_tables17_0_0.bidiTrie | $.VarRef<__goscript_tables17_0_0.bidiTrie> | null

export function __goscript_init_trie(): void {
	if (((trie) as any) === undefined) {
		trie = __goscript_tables17_0_0.newBidiTrie(0)
	}
}

export function __goscript_get_trie(): __goscript_tables17_0_0.bidiTrie | $.VarRef<__goscript_tables17_0_0.bidiTrie> | null {
	if (((trie) as any) === undefined) {
		__goscript_init_trie()
	}
	return trie
}

export function __goscript_set_trie(__goscriptValue: __goscript_tables17_0_0.bidiTrie | $.VarRef<__goscript_tables17_0_0.bidiTrie> | null): void {
	trie = __goscriptValue
}

export var controlByteToClass: __goscript_trieval.Class[]

export function __goscript_init_controlByteToClass(): void {
	if (((controlByteToClass) as any) === undefined) {
		controlByteToClass = $.arrayValue([0, 0, 0, 0, 0, 0, 21, 22, 23, 24, 18, 19, 20, 16, 17, 0])
	}
}

export function __goscript_get_controlByteToClass(): __goscript_trieval.Class[] {
	if (((controlByteToClass) as any) === undefined) {
		__goscript_init_controlByteToClass()
	}
	return controlByteToClass
}

export function __goscript_set_controlByteToClass(__goscriptValue: __goscript_trieval.Class[]): void {
	controlByteToClass = __goscriptValue
}

export function LookupRune(r: number): [Properties, number] {
	let p: Properties = new Properties(undefined, true)
	let size: number = 0
	let buf: Uint8Array = $.arrayValue(new Uint8Array(4))
	let n = utf8.EncodeRune($.goSlice(buf, undefined, undefined), r)
	return Lookup($.goSlice(buf, undefined, n))
}

export function Lookup(s: $.Slice<number>): [Properties, number] {
	let p: Properties = new Properties(undefined, true)
	let sz: number = 0
	let c0 = $.arrayIndex(s!, 0)
	switch ((true as boolean)) {
		case c0 < 0x80:
		{
			return [new Properties({entry: $.arrayIndex(__goscript_tables17_0_0.bidiValues, c0)}, true), 1]
			break
		}
		case c0 < 0xC2:
		{
			return [new Properties(undefined, true), 1]
			break
		}
		case c0 < 0xE0:
		{
			if ($.sliceLen(s) < 2) {
				return [new Properties(undefined, true), 0]
			}
			let i = $.arrayIndex(__goscript_tables17_0_0.bidiIndex, c0)
			let c1 = $.arrayIndex(s!, 1)
			if ((c1 < 0x80) || (0xC0 <= c1)) {
				return [new Properties(undefined, true), 1]
			}
			return [(() => { const __goscriptLiteralField0 = __goscript_tables17_0_0.bidiTrie.prototype.lookupValue.call(__goscript_get_trie(), $.uint(i, 32), c1); return new Properties({entry: __goscriptLiteralField0}, true) })(), 2]
			break
		}
		case c0 < 0xF0:
		{
			if ($.sliceLen(s) < 3) {
				return [new Properties(undefined, true), 0]
			}
			let i = $.arrayIndex(__goscript_tables17_0_0.bidiIndex, c0)
			let c1 = $.arrayIndex(s!, 1)
			if ((c1 < 0x80) || (0xC0 <= c1)) {
				return [new Properties(undefined, true), 1]
			}
			let o: number = $.uint(((((($.uint(i, 32) << 6) >>> 0)) + $.uint(c1, 32)) >>> 0), 32)
			i = $.arrayIndex(__goscript_tables17_0_0.bidiIndex, o)
			let c2 = $.arrayIndex(s!, 2)
			if ((c2 < 0x80) || (0xC0 <= c2)) {
				return [new Properties(undefined, true), 1]
			}
			return [(() => { const __goscriptLiteralField1 = __goscript_tables17_0_0.bidiTrie.prototype.lookupValue.call(__goscript_get_trie(), $.uint(i, 32), c2); return new Properties({entry: __goscriptLiteralField1, last: c2}, true) })(), 3]
			break
		}
		case c0 < 0xF8:
		{
			if ($.sliceLen(s) < 4) {
				return [new Properties(undefined, true), 0]
			}
			let i = $.arrayIndex(__goscript_tables17_0_0.bidiIndex, c0)
			let c1 = $.arrayIndex(s!, 1)
			if ((c1 < 0x80) || (0xC0 <= c1)) {
				return [new Properties(undefined, true), 1]
			}
			let o: number = $.uint(((((($.uint(i, 32) << 6) >>> 0)) + $.uint(c1, 32)) >>> 0), 32)
			i = $.arrayIndex(__goscript_tables17_0_0.bidiIndex, o)
			let c2 = $.arrayIndex(s!, 2)
			if ((c2 < 0x80) || (0xC0 <= c2)) {
				return [new Properties(undefined, true), 1]
			}
			o = $.uint(((((($.uint(i, 32) << 6) >>> 0)) + $.uint(c2, 32)) >>> 0), 32)
			i = $.arrayIndex(__goscript_tables17_0_0.bidiIndex, o)
			let c3 = $.arrayIndex(s!, 3)
			if ((c3 < 0x80) || (0xC0 <= c3)) {
				return [new Properties(undefined, true), 1]
			}
			return [(() => { const __goscriptLiteralField2 = __goscript_tables17_0_0.bidiTrie.prototype.lookupValue.call(__goscript_get_trie(), $.uint(i, 32), c3); return new Properties({entry: __goscriptLiteralField2}, true) })(), 4]
			break
		}
	}
	// Illegal rune
	return [new Properties(undefined, true), 1]
}

export function LookupString(s: string): [Properties, number] {
	let p: Properties = new Properties(undefined, true)
	let sz: number = 0
	let c0 = $.indexString(s, 0)
	switch ((true as boolean)) {
		case c0 < 0x80:
		{
			return [new Properties({entry: $.arrayIndex(__goscript_tables17_0_0.bidiValues, c0)}, true), 1]
			break
		}
		case c0 < 0xC2:
		{
			return [new Properties(undefined, true), 1]
			break
		}
		case c0 < 0xE0:
		{
			if ($.stringLen(s) < 2) {
				return [new Properties(undefined, true), 0]
			}
			let i = $.arrayIndex(__goscript_tables17_0_0.bidiIndex, c0)
			let c1 = $.indexString(s, 1)
			if ((c1 < 0x80) || (0xC0 <= c1)) {
				return [new Properties(undefined, true), 1]
			}
			return [(() => { const __goscriptLiteralField3 = __goscript_tables17_0_0.bidiTrie.prototype.lookupValue.call(__goscript_get_trie(), $.uint(i, 32), c1); return new Properties({entry: __goscriptLiteralField3}, true) })(), 2]
			break
		}
		case c0 < 0xF0:
		{
			if ($.stringLen(s) < 3) {
				return [new Properties(undefined, true), 0]
			}
			let i = $.arrayIndex(__goscript_tables17_0_0.bidiIndex, c0)
			let c1 = $.indexString(s, 1)
			if ((c1 < 0x80) || (0xC0 <= c1)) {
				return [new Properties(undefined, true), 1]
			}
			let o: number = $.uint(((((($.uint(i, 32) << 6) >>> 0)) + $.uint(c1, 32)) >>> 0), 32)
			i = $.arrayIndex(__goscript_tables17_0_0.bidiIndex, o)
			let c2 = $.indexString(s, 2)
			if ((c2 < 0x80) || (0xC0 <= c2)) {
				return [new Properties(undefined, true), 1]
			}
			return [(() => { const __goscriptLiteralField4 = __goscript_tables17_0_0.bidiTrie.prototype.lookupValue.call(__goscript_get_trie(), $.uint(i, 32), c2); return new Properties({entry: __goscriptLiteralField4, last: c2}, true) })(), 3]
			break
		}
		case c0 < 0xF8:
		{
			if ($.stringLen(s) < 4) {
				return [new Properties(undefined, true), 0]
			}
			let i = $.arrayIndex(__goscript_tables17_0_0.bidiIndex, c0)
			let c1 = $.indexString(s, 1)
			if ((c1 < 0x80) || (0xC0 <= c1)) {
				return [new Properties(undefined, true), 1]
			}
			let o: number = $.uint(((((($.uint(i, 32) << 6) >>> 0)) + $.uint(c1, 32)) >>> 0), 32)
			i = $.arrayIndex(__goscript_tables17_0_0.bidiIndex, o)
			let c2 = $.indexString(s, 2)
			if ((c2 < 0x80) || (0xC0 <= c2)) {
				return [new Properties(undefined, true), 1]
			}
			o = $.uint(((((($.uint(i, 32) << 6) >>> 0)) + $.uint(c2, 32)) >>> 0), 32)
			i = $.arrayIndex(__goscript_tables17_0_0.bidiIndex, o)
			let c3 = $.indexString(s, 3)
			if ((c3 < 0x80) || (0xC0 <= c3)) {
				return [new Properties(undefined, true), 1]
			}
			return [(() => { const __goscriptLiteralField5 = __goscript_tables17_0_0.bidiTrie.prototype.lookupValue.call(__goscript_get_trie(), $.uint(i, 32), c3); return new Properties({entry: __goscriptLiteralField5}, true) })(), 4]
			break
		}
	}
	// Illegal rune
	return [new Properties(undefined, true), 1]
}
